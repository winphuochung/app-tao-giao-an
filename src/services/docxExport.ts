import { ALL_SGK_IMAGES, resolveSgkImageUrl } from '../utils/sgkImageResolver';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
  AlignmentType,
  BorderStyle,
  ShadingType,
  ImageRun
} from 'docx';
import { saveAs } from 'file-saver';
import { GiaoAnWordData } from '../types';
import { generateInfographicPrompts } from '../utils/infographicPrompts';

async function svgDataUriToPngBuffer(svgDataUri: string): Promise<Uint8Array | null> {
  if (typeof window === 'undefined') return null;
  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.width || 600;
        canvas.height = img.height || 340;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, 0, 0);
          canvas.toBlob((blob) => {
            if (blob) {
              blob.arrayBuffer().then((buf) => resolve(new Uint8Array(buf)));
            } else {
              resolve(null);
            }
          }, 'image/png');
        } else {
          resolve(null);
        }
      } catch {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = svgDataUri;
  });
}

export async function exportGiaoAnToDocx(data: GiaoAnWordData): Promise<void> {
  const isTieuHoc = data.metadata.capHoc === 'TIEU_HOC';
  const meta = data.metadata;

  // Pre-load SGK diagram images and 16:9 3D Pixar Mindmaps for embedding directly into Word
  const sgkImageMap: Record<string, Uint8Array> = {};
  const imageFilesToLoad = [
    '/sgk-images/toan-3-hinh-tron-tam-o.png',
    '/sgk-images/toan-3-ban-kinh-duong-kinh.png',
    '/sgk-images/toan-3-thao-tac-compa.png',
    '/sgk-images/toan-6-canh-buom-thap-rua.png',
    '/sgk-images/toan-6-cac-hinh-phang-doi-xung.png',
    '/sgk-images/khtn-7-hinh-9-1-toc-ke.png',
    '/sgk-images/khtn-7-hinh-9-2-thi-nghiem-bam-giay.png',
    '/sgk-images/khtn-7-bang-9-1-ket-qua-do-toc-do.png',
    '/sgk-images/khtn-7-hinh-9-3-cong-quang-dien.png',
    '/sgk-images/khtn-7-hinh-9-4-thiet-bi-ban-toc-do.png',
    '/mindmaps/mindmap-toan-3-hinh-tron.jpg',
    '/mindmaps/mindmap-toan-6-truc-doi-xung.jpg',
    '/mindmaps/mindmap-khtn-7-toc-do.jpg',
    '/mindmaps/mindmap-khtn7-bai9-do-toc-do.jpg',
    '/mindmaps/mindmap-hoa-8-acid-base.jpg',
    '/mindmaps/mindmap-pixar-bg.jpg'
  ];

  // Add ALL authentic SGK images to preload list
  for (const img of ALL_SGK_IMAGES) {
    if (!imageFilesToLoad.includes(img)) {
      imageFilesToLoad.push(img);
    }
  }

  // Dynamically collect any other image URLs from data with auto-resolver
  data.tienTrinhDayHoc.forEach(hd => {
    if (hd.soDoTuDuy?.imageUrl && !imageFilesToLoad.includes(hd.soDoTuDuy.imageUrl)) {
      imageFilesToLoad.push(hd.soDoTuDuy.imageUrl);
    }
    hd.bangHaiCot.forEach(r => {
      if (r.soDoTuDuy?.imageUrl && !imageFilesToLoad.includes(r.soDoTuDuy.imageUrl)) {
        imageFilesToLoad.push(r.soDoTuDuy.imageUrl);
      }
      if (r.hinhAnhSGK) {
        const resolved = resolveSgkImageUrl(r.hinhAnhSGK, data.metadata.monHoc, data.metadata.khoiLop);
        if (resolved && !imageFilesToLoad.includes(resolved)) {
          imageFilesToLoad.push(resolved);
        }
        if (r.hinhAnhSGK.imageUrl && !imageFilesToLoad.includes(r.hinhAnhSGK.imageUrl)) {
          imageFilesToLoad.push(r.hinhAnhSGK.imageUrl);
        }
      }
    });
  });

  for (const path of imageFilesToLoad) {
    try {
      if (path.startsWith('data:image/svg')) {
        const pngBuf = await svgDataUriToPngBuffer(path);
        if (pngBuf) {
          sgkImageMap[path] = pngBuf;
        }
      } else {
        const res = await fetch(path);
        if (res.ok) {
          const buf = await res.arrayBuffer();
          sgkImageMap[path] = new Uint8Array(buf);
        }
      }
    } catch {
      // ignore
    }
  }

  // Load authentic Infographic Worksheet image matching this lesson if available
  let worksheetInfographicBuffer: Uint8Array | null = null;
  const isBai9 = meta.tenBaiDay.toLowerCase().includes('bài 9') || meta.tenBaiDay.toLowerCase().includes('đo tốc độ');
  const isBai8 = !isBai9 && (meta.tenBaiDay.toLowerCase().includes('bài 8') || meta.tenBaiDay.toLowerCase().includes('tốc độ'));
  const isToan6 = meta.tenBaiDay.toLowerCase().includes('trục đối xứng');

  let infographicImgUrl = '';
  const gradeNum = Number(meta.khoiLop) || 0;
  if (isTieuHoc || gradeNum <= 5) {
    infographicImgUrl = '/infographics/phieu-hoc-tap-doraemon-toan-3.jpg';
  } else if (isBai9) {
    infographicImgUrl = '/infographics/phieu-doraemon-khtn7-bai9-do-toc-do.jpg';
  } else if (isToan6) {
    infographicImgUrl = '/infographics/phieu-doraemon-toan6-truc-doi-xung.jpg';
  } else {
    infographicImgUrl = '/infographics/phieu-doraemon-khtn7-bai8-toc-do.jpg';
  }

  if (infographicImgUrl) {
    try {
      const res = await fetch(infographicImgUrl);
      if (res.ok) {
        const arr = await res.arrayBuffer();
        worksheetInfographicBuffer = new Uint8Array(arr);
      }
    } catch (err) {
      console.warn('Infographic worksheet image fetch skipped:', err);
    }
  }

  // Nghị định 30/2020/NĐ-CP Margins (in dxa: 1cm ≈ 567 dxa)
  // Top: 2cm = 1134, Bottom: 2cm = 1134, Left: 3cm = 1701, Right: 1.5cm = 850
  // Total printable width = 11906 - 1701 - 850 = 9355 dxa.
  const col1Width = isTieuHoc ? 5145 : 6080; // 55% : 65%
  const col2Width = isTieuHoc ? 4210 : 3275; // 45% : 35%

  const fontName = 'Times New Roman';
  const normalSize = 26; // 13pt (26 half-points)
  const smallSize = 24; // 12pt
  const headingSize = 28; // 14pt
  const titleSize = 32; // 16pt

  const children: (Paragraph | Table)[] = [];

  // Helper for single paragraph
  const p = (
    text: string,
    opts: {
      bold?: boolean;
      italic?: boolean;
      size?: number;
      align?: (typeof AlignmentType)[keyof typeof AlignmentType];
      spaceBefore?: number;
      spaceAfter?: number;
      leftIndent?: number;
      hangingIndent?: number;
    } = {}
  ) => {
    return new Paragraph({
      alignment: opts.align || AlignmentType.LEFT,
      spacing: {
        before: opts.spaceBefore ?? 40,
        after: opts.spaceAfter ?? 40,
        line: 276 // 1.15 line spacing theo NĐ 30
      },
      indent: opts.leftIndent
        ? {
            left: opts.leftIndent,
            hanging: opts.hangingIndent ?? 0
          }
        : undefined,
      children: [
        new TextRun({
          text,
          font: fontName,
          size: opts.size ?? normalSize,
          bold: opts.bold ?? false,
          italics: opts.italic ?? false
        })
      ]
    });
  };

  // Helper for multi-run paragraph (e.g. bold label + normal text with dash)
  const multiP = (
    runs: { text: string; bold?: boolean; italic?: boolean; size?: number; underline?: boolean }[],
    opts: {
      align?: (typeof AlignmentType)[keyof typeof AlignmentType];
      spaceBefore?: number;
      spaceAfter?: number;
      leftIndent?: number;
      hangingIndent?: number;
    } = {}
  ) => {
    return new Paragraph({
      alignment: opts.align || AlignmentType.LEFT,
      spacing: {
        before: opts.spaceBefore ?? 40,
        after: opts.spaceAfter ?? 40,
        line: 276
      },
      indent: opts.leftIndent
        ? {
            left: opts.leftIndent,
            hanging: opts.hangingIndent ?? 0
          }
        : undefined,
      children: runs.map(
        (r) =>
          new TextRun({
            text: r.text,
            font: fontName,
            size: r.size ?? normalSize,
            bold: r.bold ?? false,
            italics: r.italic ?? false,
            underline: r.underline ? {} : undefined
          })
      )
    });
  };

  // Helper to ensure each idea starts with a dash "- "
  const formatDashItem = (itemText: string): string => {
    const trimmed = itemText.trim();
    if (trimmed.startsWith('-') || trimmed.startsWith('–') || trimmed.startsWith('•')) {
      return trimmed.replace(/^[-–•]\s*/, '- ');
    }
    return `- ${trimmed}`;
  };

  // 1. HEADER TABLE (Quốc hiệu, Tiêu ngữ, Tên trường)
  const headerTable = new Table({
    width: { size: 9355, type: WidthType.DXA },
    borders: {
      top: { style: BorderStyle.NONE },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE },
      insideHorizontal: { style: BorderStyle.NONE },
      insideVertical: { style: BorderStyle.NONE }
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 4677, type: WidthType.DXA },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { line: 240, after: 30 },
                children: [
                  new TextRun({
                    text: (meta.truong || (isTieuHoc ? 'TRƯỜNG TIỂU HỌC ....................' : 'TRƯỜNG THCS ....................')).toUpperCase(),
                    font: fontName,
                    size: smallSize,
                    bold: true
                  })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { line: 240, after: 60 },
                children: [
                  new TextRun({
                    text: (meta.toChuyenMon || 'TỔ CHUYÊN MÔN').toUpperCase(),
                    font: fontName,
                    size: smallSize,
                    bold: true
                  })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { line: 240, after: 40 },
                children: [
                  new TextRun({
                    text: `Giáo viên: ${meta.giaoVien && meta.giaoVien.trim() ? meta.giaoVien.trim() : '........................................'}`,
                    font: fontName,
                    size: smallSize,
                    italics: true
                  })
                ]
              })
            ]
          }),
          new TableCell({
            width: { size: 4678, type: WidthType.DXA },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { line: 240, after: 30 },
                children: [
                  new TextRun({
                    text: 'CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM',
                    font: fontName,
                    size: smallSize,
                    bold: true
                  })
                ]
              }),
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { line: 240, after: 60 },
                children: [
                  new TextRun({
                    text: 'Độc lập - Tự do - Hạnh phúc',
                    font: fontName,
                    size: smallSize,
                    bold: true,
                    underline: {}
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
  children.push(headerTable);

  children.push(p('', { spaceBefore: 80, spaceAfter: 40 }));

  // 2. MAIN TITLE: KẾ HOẠCH BÀI DẠY
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80, after: 40, line: 276 },
      children: [
        new TextRun({
          text: 'KẾ HOẠCH BÀI DẠY',
          font: fontName,
          size: titleSize,
          bold: true
        })
      ]
    })
  );

  // Lesson Subject & Grade
  const subjectSubtitle = isTieuHoc
    ? `MÔN: ${meta.monHoc.toUpperCase()} - LỚP ${meta.khoiLop}`
    : `MÔN: ${meta.monHoc.toUpperCase()} - LỚP ${meta.khoiLop} (${meta.boSach})`;

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 20, after: 60, line: 276 },
      children: [
        new TextRun({
          text: subjectSubtitle,
          font: fontName,
          size: headingSize,
          bold: true
        })
      ]
    })
  );

  // Lesson Name
  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 20, after: 80, line: 276 },
      children: [
        new TextRun({
          text: `Tên bài dạy: ${meta.tenBaiDay}`,
          font: fontName,
          size: headingSize,
          bold: true
        })
      ]
    })
  );

  // Periods, Week, PPCT & Duration
  const executionInfoParts = [
    meta.tuanThucHien ? `${meta.tuanThucHien}` : 'Tuần .....',
    `Số tiết: ${meta.soTiet}`
  ];
  if (meta.tietTheoPPCT && meta.tietTheoPPCT.trim()) {
    executionInfoParts.push(`Tiết theo PPCT: ${meta.tietTheoPPCT.trim()}`);
  }
  executionInfoParts.push(`Thời gian thực hiện: ${meta.thoiLuong || (isTieuHoc ? '35 phút' : '45 phút')}`);

  const executionInfo = executionInfoParts.join(' - ');

  children.push(
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 20, after: 140, line: 276 },
      children: [
        new TextRun({
          text: executionInfo,
          font: fontName,
          size: normalSize,
          italics: true
        })
      ]
    })
  );

  // 3. SECTION I: YÊU CẦU CẦN ĐẠT (Tiểu học) / MỤC TIÊU (THCS)
  const section1Title = isTieuHoc
    ? 'I. YÊU CẦU CẦN ĐẠT:'
    : 'I. MỤC TIÊU:';
  children.push(p(section1Title, { bold: true, size: headingSize, spaceBefore: 120, spaceAfter: 60 }));

  // 1. Kiến thức (for THCS - Công văn 5512)
  if (!isTieuHoc && data.mucTieu.kienThuc && data.mucTieu.kienThuc.length > 0) {
    children.push(p('1. Kiến thức:', { bold: true, spaceBefore: 60, spaceAfter: 30 }));
    data.mucTieu.kienThuc.forEach((kt) => {
      children.push(p(formatDashItem(kt), { leftIndent: 280, spaceBefore: 30, spaceAfter: 30 }));
    });
  }

  // Năng lực (Mục 1 của Tiểu học hoặc Mục 2 của THCS)
  const nangLucNum = isTieuHoc ? '1.' : '2.';
  children.push(p(`${nangLucNum} Năng lực:`, { bold: true, spaceBefore: 60, spaceAfter: 30 }));

  // a) Năng lực đặc thù - Từng ý có gạch đầu dòng riêng biệt
  children.push(p('a) Năng lực đặc thù:', { bold: true, italic: true, leftIndent: 200, spaceBefore: 40, spaceAfter: 30 }));
  data.mucTieu.nangLucDacThu.forEach((nl) => {
    children.push(p(formatDashItem(nl), { leftIndent: 420, spaceBefore: 30, spaceAfter: 30 }));
  });

  // b) Năng lực chung - Từng ý có gạch đầu dòng riêng biệt
  children.push(p('b) Năng lực chung:', { bold: true, italic: true, leftIndent: 200, spaceBefore: 50, spaceAfter: 30 }));
  const nlc = data.mucTieu.nangLucChung;
  
  if (nlc.tuChuTuHoc && nlc.tuChuTuHoc.length > 0) {
    nlc.tuChuTuHoc.forEach((item) => {
      children.push(multiP([
        { text: '- Tự chủ và tự học: ', bold: true, italic: true },
        { text: item.replace(/^[-–•]\s*/, '') }
      ], { leftIndent: 420, spaceBefore: 30, spaceAfter: 30 }));
    });
  }

  if (nlc.giaoTiepHopTac && nlc.giaoTiepHopTac.length > 0) {
    nlc.giaoTiepHopTac.forEach((item) => {
      children.push(multiP([
        { text: '- Giao tiếp và hợp tác: ', bold: true, italic: true },
        { text: item.replace(/^[-–•]\s*/, '') }
      ], { leftIndent: 420, spaceBefore: 30, spaceAfter: 30 }));
    });
  }

  if (nlc.giaiQuyetVanDe && nlc.giaiQuyetVanDe.length > 0) {
    nlc.giaiQuyetVanDe.forEach((item) => {
      children.push(multiP([
        { text: '- Giải quyết vấn đề và sáng tạo: ', bold: true, italic: true },
        { text: item.replace(/^[-–•]\s*/, '') }
      ], { leftIndent: 420, spaceBefore: 30, spaceAfter: 30 }));
    });
  }

  // c) Năng lực số (Theo Công văn số 3456/BGDĐT-GDPT ngày 27/06/2025 của Bộ GD&ĐT)
  if (data.mucTieu.nangLucSo && data.mucTieu.nangLucSo.length > 0) {
    children.push(p('c) Năng lực số (Theo Công văn số 3456/BGDĐT-GDPT ngày 27/06/2025 của Bộ GD&ĐT):', {
      bold: true,
      italic: true,
      leftIndent: 200,
      spaceBefore: 50,
      spaceAfter: 30
    }));

    data.mucTieu.nangLucSo.forEach((nls) => {
      children.push(multiP([
        { text: `- [Mã ${nls.maChiBao}] `, bold: true },
        { text: `${nls.tenLinhVuc}: `, bold: true, italic: true },
        { text: nls.bieuHien }
      ], { leftIndent: 420, spaceBefore: 30, spaceAfter: 30 }));
    });
  }

  // Phẩm chất (Mục 2 của Tiểu học hoặc Mục 3 của THCS)
  const phamChatNum = isTieuHoc ? '2.' : '3.';
  children.push(p(`${phamChatNum} Phẩm chất:`, { bold: true, spaceBefore: 60, spaceAfter: 30 }));
  const pc = data.mucTieu.phamChat;

  if (pc.yeuNuoc && pc.yeuNuoc.length > 0) {
    pc.yeuNuoc.forEach((yn) => {
      children.push(multiP([
        { text: '- Yêu nước: ', bold: true },
        { text: yn.replace(/^[-–•]\s*/, '') }
      ], { leftIndent: 280, spaceBefore: 30, spaceAfter: 30 }));
    });
  }

  if (pc.nhanAi && pc.nhanAi.length > 0) {
    pc.nhanAi.forEach((na) => {
      children.push(multiP([
        { text: '- Nhân ái: ', bold: true },
        { text: na.replace(/^[-–•]\s*/, '') }
      ], { leftIndent: 280, spaceBefore: 30, spaceAfter: 30 }));
    });
  }

  if (pc.chamChi && pc.chamChi.length > 0) {
    pc.chamChi.forEach((cc) => {
      children.push(multiP([
        { text: '- Chăm chỉ: ', bold: true },
        { text: cc.replace(/^[-–•]\s*/, '') }
      ], { leftIndent: 280, spaceBefore: 30, spaceAfter: 30 }));
    });
  }

  if (pc.trungThuc && pc.trungThuc.length > 0) {
    pc.trungThuc.forEach((tt) => {
      children.push(multiP([
        { text: '- Trung thực: ', bold: true },
        { text: tt.replace(/^[-–•]\s*/, '') }
      ], { leftIndent: 280, spaceBefore: 30, spaceAfter: 30 }));
    });
  }

  if (pc.trachNhiem && pc.trachNhiem.length > 0) {
    pc.trachNhiem.forEach((tn) => {
      children.push(multiP([
        { text: '- Trách nhiệm: ', bold: true },
        { text: tn.replace(/^[-–•]\s*/, '') }
      ], { leftIndent: 280, spaceBefore: 30, spaceAfter: 30 }));
    });
  }

// Đã lược bỏ phần Tích hợp liên môn & mở rộng theo chuẩn CV 5512 / 2345

  // 4. SECTION II: ĐỒ DÙNG DẠY HỌC / THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU
  const section2Title = isTieuHoc
    ? 'II. ĐỒ DÙNG DẠY HỌC:'
    : 'II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU:';
  children.push(p(section2Title, { bold: true, size: headingSize, spaceBefore: 120, spaceAfter: 60 }));

  // 1. Đối với giáo viên - Mỗi ý một gạch đầu dòng riêng
  children.push(p('1. Đối với giáo viên:', { bold: true, spaceBefore: 40, spaceAfter: 30 }));
  data.thietBiDayHoc.giaoVien.forEach((tb) => {
    children.push(p(formatDashItem(tb), { leftIndent: 280, spaceBefore: 30, spaceAfter: 30 }));
  });

  // 2. Đối với học sinh - Mỗi ý một gạch đầu dòng riêng
  children.push(p('2. Đối với học sinh:', { bold: true, spaceBefore: 50, spaceAfter: 30 }));
  data.thietBiDayHoc.hocSinh.forEach((tb) => {
    children.push(p(formatDashItem(tb), { leftIndent: 280, spaceBefore: 30, spaceAfter: 30 }));
  });

  // 5. SECTION III: CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU / TIẾN TRÌNH DẠY HỌC
  const section3Title = isTieuHoc
    ? 'III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU:'
    : 'III. TIẾN TRÌNH DẠY HỌC:';
  children.push(p(section3Title, { bold: true, size: headingSize, spaceBefore: 120, spaceAfter: 80 }));

  for (const hd of data.tienTrinhDayHoc) {
    // Activity Title
    const actHeader = hd.thoiLuong
      ? `${hd.tenHoatDong} (${hd.thoiLuong})`
      : hd.tenHoatDong;
    children.push(p(actHeader, { bold: true, size: headingSize, spaceBefore: 120, spaceAfter: 40 }));

    // Hiển thị Phương pháp & Kĩ thuật dạy học tích cực (lấy HS làm trung tâm) nếu có
    if (hd.phuongPhapKiThuat) {
      children.push(multiP([
        { text: '• Phương pháp & Kĩ thuật dạy học tích cực: ', bold: true, italic: true },
        { text: hd.phuongPhapKiThuat }
      ], { leftIndent: 200, spaceBefore: 30, spaceAfter: 30 }));
    }

    // For THCS (CV 5512): a) Mục tiêu, b) Nội dung, c) Sản phẩm full width with dashes
    if (!isTieuHoc) {
      if (hd.mucTieu) {
        children.push(p('a) Mục tiêu:', { bold: true, spaceBefore: 30, spaceAfter: 20 }));
        hd.mucTieu.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\r\n/g, '\n').split('\n').filter(l => l.trim()).forEach((l) => {
          children.push(p(formatDashItem(l), { leftIndent: 280, spaceBefore: 20, spaceAfter: 20 }));
        });
      }
      if (hd.noiDung) {
        children.push(p('b) Nội dung:', { bold: true, spaceBefore: 30, spaceAfter: 20 }));
        hd.noiDung.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\r\n/g, '\n').split('\n').filter(l => l.trim()).forEach((l) => {
          children.push(p(formatDashItem(l), { leftIndent: 280, spaceBefore: 20, spaceAfter: 20 }));
        });
      }
      if (hd.sanPham) {
        children.push(p('c) Sản phẩm:', { bold: true, spaceBefore: 30, spaceAfter: 20 }));
        hd.sanPham.replace(/\\r\\n/g, '\n').replace(/\\n/g, '\n').replace(/\r\n/g, '\n').split('\n').filter(l => l.trim()).forEach((l) => {
          children.push(p(formatDashItem(l), { leftIndent: 280, spaceBefore: 20, spaceAfter: 20 }));
        });
      }
      children.push(p('d) Tổ chức thực hiện:', { bold: true, spaceBefore: 40, spaceAfter: 30 }));
    }

    // Build the 2-column table
    const tableHeaderCol1 = isTieuHoc
      ? 'HOẠT ĐỘNG CỦA GIÁO VIÊN'
      : 'HOẠT ĐỘNG CỦA GV VÀ HS';
    const tableHeaderCol2 = isTieuHoc
      ? 'HOẠT ĐỘNG CỦA HỌC SINH'
      : 'DỰ KIẾN SẢN PHẨM / NỘI DUNG GHI BẢNG';

    const tableRows: TableRow[] = [];

    // Header row (tableHeader: true to repeat across page breaks)
    tableRows.push(
      new TableRow({
        tableHeader: true,
        cantSplit: true,
        children: [
          new TableCell({
            width: { size: col1Width, type: WidthType.DXA },
            shading: { type: ShadingType.SOLID, fill: 'F1F5F9' },
            margins: { top: 100, bottom: 100, left: 140, right: 140 },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 60, after: 60, line: 240 },
                children: [
                  new TextRun({
                    text: tableHeaderCol1,
                    font: fontName,
                    size: smallSize,
                    bold: true
                  })
                ]
              })
            ]
          }),
          new TableCell({
            width: { size: col2Width, type: WidthType.DXA },
            shading: { type: ShadingType.SOLID, fill: 'F1F5F9' },
            margins: { top: 100, bottom: 100, left: 140, right: 140 },
            children: [
              new Paragraph({
                alignment: AlignmentType.CENTER,
                spacing: { before: 60, after: 60, line: 240 },
                children: [
                  new TextRun({
                    text: tableHeaderCol2,
                    font: fontName,
                    size: smallSize,
                    bold: true
                  })
                ]
              })
            ]
          })
        ]
      })
    );

    // Helper: Turn multi-line cell text into formatted Word paragraphs where EVERY point has a dash "- "
    const parseCellParagraphs = (rawText: string, stepTitle?: string, hinhAnhSGK?: any, soDoTuDuy?: any): Paragraph[] => {
      const paras: Paragraph[] = [];

      // If there is a step title, add it as a bold italic header
      if (stepTitle && stepTitle.trim()) {
        paras.push(
          new Paragraph({
            alignment: AlignmentType.LEFT,
            spacing: { before: 40, after: 30, line: 260 },
            children: [
              new TextRun({
                text: stepTitle.trim().startsWith('*') ? stepTitle.trim() : `* ${stepTitle.trim()}`,
                font: fontName,
                size: smallSize,
                bold: true,
                italics: true
              })
            ]
          })
        );
      }

      // NẾU CÓ HÌNH ẢNH SGK Ở ĐỀ MỤC NÀY, CHÈN HÌNH ẢNH THỰC TẾ TRỰC TIẾP VÀO ĐÚNG Ô HOẠT ĐỘNG (ÁP DỤNG CHO MỌI BÀI HỌC)
      if (hinhAnhSGK) {
        const resolvedImg = resolveSgkImageUrl(hinhAnhSGK, data.metadata.monHoc, data.metadata.khoiLop);
        const imgBuffer =
          sgkImageMap[resolvedImg] ||
          (hinhAnhSGK.imageUrl && sgkImageMap[hinhAnhSGK.imageUrl]) ||
          sgkImageMap['/sgk-images/khtn-7-hinh-8-2-8-3-toc-ke-va-thiet-bi-ban-toc-do.png'] ||
          Object.values(sgkImageMap)[0];
        
        if (imgBuffer) {
          const imgType = (resolvedImg.endsWith('.jpg') || resolvedImg.endsWith('.jpeg')) ? 'jpg' : 'png';
          paras.push(
            new Paragraph({
              alignment: AlignmentType.CENTER,
              spacing: { before: 50, after: 30 },
              children: [
                new ImageRun({
                  data: imgBuffer,
                  transformation: {
                    width: 380,
                    height: 210
                  },
                  type: imgType
                })
              ]
            })
          );
        }

        paras.push(
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 20, after: 40 },
            children: [
              new TextRun({
                text: `📖 ${hinhAnhSGK.tenHinh} (Ảnh thực tế SGK)`,
                font: fontName,
                size: smallSize - 2,
                bold: true,
                italics: true,
                color: '1E3A8A'
              })
            ]
          })
        );

        if (hinhAnhSGK.cauHoiKhaiThac && hinhAnhSGK.cauHoiKhaiThac.length > 0) {
          paras.push(
            new Paragraph({
              alignment: AlignmentType.LEFT,
              spacing: { before: 30, after: 20 },
              children: [
                new TextRun({
                  text: '🔍 Hướng dẫn học sinh tự quan sát & khai thác hình ảnh thực tế SGK:',
                  font: fontName,
                  size: smallSize - 2,
                  bold: true,
                  color: '854D0E'
                })
              ]
            })
          );
          for (const q of hinhAnhSGK.cauHoiKhaiThac) {
            paras.push(
              new Paragraph({
                alignment: AlignmentType.LEFT,
                indent: { left: 160 },
                spacing: { before: 10, after: 15, line: 240 },
                children: [
                  new TextRun({
                    text: `- ${q}`,
                    font: fontName,
                    size: smallSize - 2,
                    italics: true,
                    color: '334155'
                  })
                ]
              })
            );
          }
        }
      }

      // NẾU CÓ SƠ ĐỒ TƯ DUY 16:9 3D PIXAR Ở BƯỚC NÀY, CHÈN HÌNH ẢNH TRỰC TIẾP VÀO Ô KẾT LUẬN KIẾN THỨC
      if (soDoTuDuy && soDoTuDuy.imageUrl && sgkImageMap[soDoTuDuy.imageUrl]) {
        paras.push(
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 60, after: 30 },
            children: [
              new ImageRun({
                data: sgkImageMap[soDoTuDuy.imageUrl],
                transformation: {
                  width: 215,
                  height: 121 // Chuẩn tỉ lệ 16:9
                },
                type: 'jpg'
              })
            ]
          })
        );
        paras.push(
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 20, after: 40 },
            children: [
              new TextRun({
                text: `SƠ ĐỒ TƯ DUY 16:9 - TỔNG KẾT KIẾN THỨC CỐT LÕI (3D PIXAR): ${soDoTuDuy.chuDeChinh}`,
                font: fontName,
                size: smallSize - 2,
                bold: true,
                italics: true
              })
            ]
          })
        );
      }

      const normalizedText = rawText
        .replace(/\\r\\n/g, '\n')
        .replace(/\\n/g, '\n')
        .replace(/\r\n/g, '\n');
      const lines = normalizedText.split('\n').map(l => l.trim()).filter(l => l.length > 0);

      lines.forEach((line) => {
        // Skip duplicate step title inside cell content
        if (stepTitle && line === stepTitle.trim()) return;

        // Check for integration tags: [TÍCH HỢP NĂNG LỰC SỐ...], [BẢO VỆ AN NINH QUỐC PHÒNG...], etc.
        const tagMatch = line.match(/^([-–•]?\s*)(\[[^\]]+\]:?)(.*)$/);
        if (tagMatch) {
          const rawTag = tagMatch[2].trim();
          const rest = tagMatch[3].trim();
          
          let displayTag = rawTag;
          if (/^\[HÌNH\s*ẢNH\s*SGK/i.test(rawTag)) {
            if (!rest) return;
            displayTag = '[Khai thác hình ảnh SGK trực quan]:';
          }

          paras.push(
            new Paragraph({
              alignment: AlignmentType.LEFT,
              spacing: { before: 30, after: 30, line: 260 },
              children: [
                new TextRun({ text: '- ', font: fontName, size: smallSize, bold: true }),
                new TextRun({ text: `${displayTag} `, font: fontName, size: smallSize, bold: true }),
                new TextRun({ text: rest, font: fontName, size: smallSize })
              ]
            })
          );
          return;
        }

        const isRomanHeader = /^(?:[I|V|X]+\.|\d+\.\s+[A-ZÀ-Ỵ])/i.test(line);
        const isConclusionHeader = /^\*?\s*(?:KẾT LUẬN|CHỐT KIẾN THỨC|GHI NHỚ)/i.test(line);
        const isSubHeader = isRomanHeader || isConclusionHeader || /^(Bước\s+\d+|[1-4]\.|\*|Bài tập|\+|Dự kiến|Nội dung ghi bảng)/i.test(line);

        if (isConclusionHeader) {
          paras.push(
            new Paragraph({
              alignment: AlignmentType.LEFT,
              spacing: { before: 80, after: 30, line: 260 },
              children: [
                new TextRun({
                  text: line.startsWith('*') ? line : `* ${line}`,
                  font: fontName,
                  size: smallSize,
                  bold: true,
                  color: 'B45F06'
                })
              ]
            })
          );
        } else if (isRomanHeader) {
          paras.push(
            new Paragraph({
              alignment: AlignmentType.LEFT,
              spacing: { before: 80, after: 30, line: 260 },
              children: [
                new TextRun({
                  text: line,
                  font: fontName,
                  size: smallSize,
                  bold: true,
                  color: '002060'
                })
              ]
            })
          );
        } else if (isSubHeader) {
          paras.push(
            new Paragraph({
              alignment: AlignmentType.LEFT,
              spacing: { before: 40, after: 20, line: 260 },
              children: [
                new TextRun({
                  text: line,
                  font: fontName,
                  size: smallSize,
                  bold: true
                })
              ]
            })
          );
        } else {
          // Standard point: Always starts with "- "
          const bulletLine = formatDashItem(line);
          paras.push(
            new Paragraph({
              alignment: AlignmentType.LEFT,
              spacing: { before: 20, after: 20, line: 260 },
              children: [
                new TextRun({
                  text: bulletLine,
                  font: fontName,
                  size: smallSize
                })
              ]
            })
          );
        }
      });

      if (paras.length === 0) {
        paras.push(
          new Paragraph({
            alignment: AlignmentType.LEFT,
            spacing: { before: 20, after: 20, line: 260 },
            children: [new TextRun({ text: '- ...', font: fontName, size: smallSize })]
          })
        );
      }

      return paras;
    };

    // Body rows for 2-column table
    for (const row of hd.bangHaiCot) {
      const col1Paras = parseCellParagraphs(row.cot1Trai, row.buocSuPham, row.hinhAnhSGK, row.soDoTuDuy);
      const col2Paras = parseCellParagraphs(row.cot2Phai);

      tableRows.push(
        new TableRow({
          cantSplit: false, // Allows clean page breaks in MS Word without clipping text!
          children: [
            new TableCell({
              width: { size: col1Width, type: WidthType.DXA },
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: col1Paras
            }),
            new TableCell({
              width: { size: col2Width, type: WidthType.DXA },
              margins: { top: 120, bottom: 120, left: 160, right: 160 },
              children: col2Paras
            })
          ]
        })
      );
    }

    // Black 0.5pt borders according to Vietnamese administrative table standards
    const activityTable = new Table({
      width: { size: 9355, type: WidthType.DXA },
      borders: {
        top: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
        bottom: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
        left: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
        right: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
        insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
        insideVertical: { style: BorderStyle.SINGLE, size: 4, color: '000000' }
      },
      rows: tableRows
    });

    children.push(activityTable);
    children.push(p('', { spaceBefore: 60, spaceAfter: 40 }));

    // Ghi chú sư phạm chuyển giao phụ lục hoạt động nhóm tích cực
    const hdn = hd.hoatDongNhomTichCuc || (hd.soThuTu === 2 ? data.hoatDongNhomTichCuc : undefined);
    if (hdn) {
      children.push(
        p('* Ghi chú sư phạm: Chi tiết kịch bản Hoạt động nhóm tích cực 4 vai trò & 4 màu mực (Chống thụ động), Biện pháp xử lý tình huống khó khăn, Hình ảnh Infographic Phiếu học tập minh họa (Doraemon/Conan), Mẫu Phiếu nhiệm vụ, Bảng Rubric và Gợi ý Prompt AI được bố trí đầy đủ tại PHỤ LỤC ở cuối giáo án.', {
          leftIndent: 280,
          italic: true,
          spaceBefore: 30,
          spaceAfter: 30
        })
      );
    }
  }

  // 6. SECTION IV: ĐIỀU CHỈNH SAU BÀI DẠY (nếu có)
  if (isTieuHoc || data.dieuChinhSauBaiDay) {
    children.push(
      p('IV. ĐIỀU CHỈNH SAU BÀI DẠY (nếu có):', {
        bold: true,
        size: headingSize,
        spaceBefore: 120,
        spaceAfter: 40
      })
    );
    const adjustLines = data.dieuChinhSauBaiDay || '..................................................................................................................................................\n..................................................................................................................................................\n..................................................................................................................................................';
    adjustLines.split('\n').forEach((l) => {
      children.push(p(l, { spaceBefore: 30, spaceAfter: 30 }));
    });
  }


  // 7. PHỤ LỤC: THIẾT KẾ HOẠT ĐỘNG NHÓM TÍCH CỰC & INFOGRAPHIC PHIẾU HỌC TẬP (ĐƯA XUỐNG CUỐI CÙNG)
  const appendixHdn = data.hoatDongNhomTichCuc || data.tienTrinhDayHoc.find(h => h.hoatDongNhomTichCuc)?.hoatDongNhomTichCuc;
  if (appendixHdn) {
    children.push(p('', { spaceBefore: 140, spaceAfter: 60 }));
    children.push(
      p('PHỤ LỤC: THIẾT KẾ HOẠT ĐỘNG NHÓM TÍCH CỰC & INFOGRAPHIC PHIẾU HỌC TẬP', {
        bold: true,
        size: titleSize,
        align: AlignmentType.CENTER,
        spaceBefore: 120,
        spaceAfter: 30
      })
    );
    children.push(
      p(`(Kèm theo Kế hoạch bài dạy môn ${meta.monHoc} Lớp ${meta.khoiLop} - Bài: ${meta.tenBaiDay})`, {
        italic: true,
        align: AlignmentType.CENTER,
        size: smallSize,
        spaceBefore: 0,
        spaceAfter: 80
      })
    );

    
      children.push(
        p('* THIẾT KẾ HOẠT ĐỘNG NHÓM TÍCH CỰC & PHÁT HUY NĂNG LỰC TỪNG CÁ NHÂN (CHỐNG THỤ ĐỘNG - PHÂN VAI 4 MÀU MỰC):', {
          bold: true,
          size: headingSize,
          spaceBefore: 80,
          spaceAfter: 30
        })
      );
      children.push(p(`- Cơ cấu nhóm: ${meta.siSoLop || appendixHdn.siSoPhuHop} - ${appendixHdn.chiaNhomVaPhanCong.quyMo}`, { leftIndent: 280, spaceBefore: 20, spaceAfter: 20 }));
      children.push(p(`- Tình huống kích thích tò mò: ${appendixHdn.tinhHuongToMo}`, { leftIndent: 280, italic: true, spaceBefore: 20, spaceAfter: 20 }));
      
      // Phân vai 4 màu mực
      children.push(p('- Phân công vai trò cụ thể (Mỗi bạn 1 màu mực riêng trên phiếu để ghi nhận trách nhiệm cá nhân):', { leftIndent: 280, bold: true, spaceBefore: 20, spaceAfter: 20 }));
      appendixHdn.chiaNhomVaPhanCong.vaiTro.forEach((vt) => {
        children.push(multiP([
          { text: `  + ${vt.tenVaiTro} (${vt.mauMucDongGop || 'Màu mực riêng'}): `, bold: true },
          { text: vt.nhiemVu }
        ], { leftIndent: 420, spaceBefore: 15, spaceAfter: 15 }));
      });

      // Biện pháp xử lý tình huống khó khăn
      children.push(p('- Biện pháp sư phạm xử lý các tình huống khó khăn trong lớp học:', { leftIndent: 280, bold: true, spaceBefore: 30, spaceAfter: 20 }));
      appendixHdn.xuLyTinhHuong.forEach((xl) => {
        children.push(multiP([
          { text: `  + ${xl.tinhHuong}: `, bold: true },
          { text: xl.giaiPhapSuPham }
        ], { leftIndent: 420, spaceBefore: 15, spaceAfter: 15 }));
      });

      // Mẫu phiếu giao nhiệm vụ nhóm
      children.push(p('- Mẫu Phiếu giao nhiệm vụ nhóm (In sử dụng trực tiếp):', { leftIndent: 280, bold: true, spaceBefore: 30, spaceAfter: 20 }));
      
      const phieuRows: TableRow[] = [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 9355, type: WidthType.DXA },
              margins: { top: 140, bottom: 140, left: 180, right: 180 },
              shading: { type: ShadingType.SOLID, fill: 'F8FAFC' },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 40, after: 30, line: 240 },
                  children: [
                    new TextRun({ text: appendixHdn.phieuGiaoNhiemVu.tieuDe, font: fontName, size: headingSize, bold: true })
                  ]
                }),
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 20, after: 60, line: 240 },
                  children: [
                    new TextRun({ text: appendixHdn.phieuGiaoNhiemVu.thongTinNhom, font: fontName, size: smallSize, italics: true })
                  ]
                }),
                new Paragraph({
                  alignment: AlignmentType.LEFT,
                  spacing: { before: 40, after: 20, line: 240 },
                  children: [
                    new TextRun({ text: 'A. CÁC NHIỆM VỤ THẢO LUẬN & THỰC HÀNH:', font: fontName, size: smallSize, bold: true })
                  ]
                }),
                ...appendixHdn.phieuGiaoNhiemVu.cauHoiNhiemVu.flatMap((ch) => [
                  new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 30, after: 15, line: 240 },
                    children: [new TextRun({ text: ch, font: fontName, size: smallSize, bold: true })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 10, after: 10, line: 240 },
                    children: [new TextRun({ text: '  Bài làm: ........................................................................................................................................................', font: fontName, size: smallSize - 2, italics: true, color: '555555' })]
                  }),
                  new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 10, after: 25, line: 240 },
                    children: [new TextRun({ text: '  ...........................................................................................................................................................................', font: fontName, size: smallSize - 2, italics: true, color: '555555' })]
                  })
                ]),
                new Paragraph({
                  alignment: AlignmentType.LEFT,
                  spacing: { before: 50, after: 20, line: 240 },
                  children: [
                    new TextRun({ text: 'B. PHẦN KHAI BÁO THÀNH VIÊN VÀ MÀU MỰC ĐÓNG GÓP (4 VAI TRÒ CHỐNG THỤ ĐỘNG):', font: fontName, size: smallSize, bold: true })
                  ]
                }),
                ...appendixHdn.phieuGiaoNhiemVu.phanKhaiBaoDongGop.map((kb) =>
                  new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 15, after: 15, line: 240 },
                    children: [new TextRun({ text: `• ${kb}`, font: fontName, size: smallSize, italics: true })]
                  })
                )
              ]
            })
          ]
        })
      ];

      const phieuTable = new Table({
        width: { size: 9355, type: WidthType.DXA },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 6, color: '000000' },
          bottom: { style: BorderStyle.SINGLE, size: 6, color: '000000' },
          left: { style: BorderStyle.SINGLE, size: 6, color: '000000' },
          right: { style: BorderStyle.SINGLE, size: 6, color: '000000' }
        },
        rows: phieuRows
      });
      children.push(phieuTable);
      children.push(p('', { spaceBefore: 20, spaceAfter: 10 }));

      // Nhúng Ảnh Infographic Phiếu học tập chính xác theo đúng bài học
      if (worksheetInfographicBuffer) {
        children.push(
          p('• HÌNH ẢNH INFOGRAPHIC PHIẾU HỌC TẬP (IN VÀ PHÁT TRỰC TIẾP CHO HỌC SINH):', {
            leftIndent: 280,
            bold: true,
            size: headingSize - 2,
            spaceBefore: 30,
            spaceAfter: 20
          })
        );
        children.push(
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 20, after: 30 },
            children: [
              new ImageRun({
                data: worksheetInfographicBuffer,
                transformation: {
                  width: 450,
                  height: 636 // Tỉ lệ 1:1,414 khổ A4 chuẩn
                },
                type: 'jpg'
              })
            ]
          })
        );
        children.push(p('', { spaceBefore: 20, spaceAfter: 20 }));
      }

      // Bảng tiêu chí đánh giá (Rubric)
      children.push(p('- Bảng tiêu chí đánh giá (Rubric) hoạt động nhóm và trách nhiệm cá nhân:', { leftIndent: 280, bold: true, spaceBefore: 30, spaceAfter: 20 }));
      
      const rubricRows: TableRow[] = [
        new TableRow({
          tableHeader: true,
          cantSplit: true,
          children: [
            new TableCell({
              width: { size: 2800, type: WidthType.DXA },
              shading: { type: ShadingType.SOLID, fill: 'E2E8F0' },
              margins: { top: 80, bottom: 80, left: 100, right: 100 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 40, after: 40, line: 240 },
                  children: [new TextRun({ text: 'Tiêu chí đánh giá', font: fontName, size: smallSize, bold: true })]
                })
              ]
            }),
            new TableCell({
              width: { size: 2200, type: WidthType.DXA },
              shading: { type: ShadingType.SOLID, fill: 'E2E8F0' },
              margins: { top: 80, bottom: 80, left: 100, right: 100 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 40, after: 40, line: 240 },
                  children: [new TextRun({ text: 'Mức Tốt (3 điểm)', font: fontName, size: smallSize, bold: true })]
                })
              ]
            }),
            new TableCell({
              width: { size: 2200, type: WidthType.DXA },
              shading: { type: ShadingType.SOLID, fill: 'E2E8F0' },
              margins: { top: 80, bottom: 80, left: 100, right: 100 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 40, after: 40, line: 240 },
                  children: [new TextRun({ text: 'Mức Đạt (2 điểm)', font: fontName, size: smallSize, bold: true })]
                })
              ]
            }),
            new TableCell({
              width: { size: 2155, type: WidthType.DXA },
              shading: { type: ShadingType.SOLID, fill: 'E2E8F0' },
              margins: { top: 80, bottom: 80, left: 100, right: 100 },
              children: [
                new Paragraph({
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 40, after: 40, line: 240 },
                  children: [new TextRun({ text: 'Cần cố gắng (1 điểm)', font: fontName, size: smallSize, bold: true })]
                })
              ]
            })
          ]
        }),
        ...appendixHdn.tieuChiDanhGia.map((tc) =>
          new TableRow({
            children: [
              new TableCell({
                width: { size: 2800, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 30, after: 30, line: 240 },
                    children: [new TextRun({ text: tc.tieuChi, font: fontName, size: smallSize, bold: true })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2200, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 30, after: 30, line: 240 },
                    children: [new TextRun({ text: tc.mucTot, font: fontName, size: smallSize })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2200, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 30, after: 30, line: 240 },
                    children: [new TextRun({ text: tc.mucDat, font: fontName, size: smallSize })]
                  })
                ]
              }),
              new TableCell({
                width: { size: 2155, type: WidthType.DXA },
                margins: { top: 80, bottom: 80, left: 100, right: 100 },
                children: [
                  new Paragraph({
                    alignment: AlignmentType.LEFT,
                    spacing: { before: 30, after: 30, line: 240 },
                    children: [new TextRun({ text: tc.mucCanCoGang, font: fontName, size: smallSize })]
                  })
                ]
              })
            ]
          })
        )
      ];

      const rubricTable = new Table({
        width: { size: 9355, type: WidthType.DXA },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
          left: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
          right: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
          insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: '000000' },
          insideVertical: { style: BorderStyle.SINGLE, size: 4, color: '000000' }
        },
        rows: rubricRows
      });
      children.push(rubricTable);
      children.push(p('', { spaceBefore: 30, spaceAfter: 20 }));

      // Cách báo cáo nhanh
      children.push(p('- Phương án báo cáo sản phẩm nhanh (Tránh kéo dài giờ học):', { leftIndent: 280, bold: true, spaceBefore: 30, spaceAfter: 20 }));
      appendixHdn.baoCaoNhanh.forEach((bc) => {
        children.push(p(formatDashItem(bc), { leftIndent: 420, spaceBefore: 15, spaceAfter: 15 }));
      });
      children.push(p('', { spaceBefore: 30, spaceAfter: 20 }));

      // Gợi ý Prompt AI thiết kế Infographic / Phiếu học tập truyện tranh đưa trực tiếp vào hoạt động
      const pInfographic = appendixHdn.promptInfographic || generateInfographicPrompts(meta, appendixHdn.phieuGiaoNhiemVu.cauHoiNhiemVu);
      if (pInfographic) {
        children.push(
          p('- Gợi ý Prompt (Câu lệnh AI) thiết kế Phiếu học tập Infographic / Truyện tranh sinh động:', {
            leftIndent: 280,
            bold: true,
            spaceBefore: 30,
            spaceAfter: 15
          })
        );
        children.push(
          p('(Thầy/Cô có thể copy các câu lệnh dưới đây dán vào ChatGPT / Midjourney / Canva để sinh ảnh phiếu học tập minh họa trực quan, hấp dẫn cho học sinh theo đúng bài học):', {
            leftIndent: 420,
            italic: true,
            size: smallSize,
            spaceBefore: 10,
            spaceAfter: 20
          })
        );

        const promptBoxRows = [
          new TableRow({
            children: [
              new TableCell({
                width: { size: 9355, type: WidthType.DXA },
                shading: { fill: 'F8FAFC', type: ShadingType.CLEAR },
                margins: { top: 120, bottom: 120, left: 160, right: 160 },
                children: [
                  new Paragraph({
                    spacing: { before: 20, after: 30, line: 240 },
                    children: [
                      new TextRun({ text: '1. Prompt Phong cách Truyện tranh Doraemon (Khổ A4 dọc - Tỉ lệ 1:1,414):', font: fontName, size: smallSize, bold: true })
                    ]
                  }),
                  new Paragraph({
                    spacing: { before: 10, after: 40, line: 240 },
                    children: [
                      new TextRun({ text: pInfographic.promptDoraemon, font: fontName, size: 20, italics: true })
                    ]
                  }),
                  new Paragraph({
                    spacing: { before: 30, after: 20, line: 240 },
                    children: [
                      new TextRun({ text: '2. Prompt Phong cách Vụ án khoa học chuyên sâu (LaTeX & IUPAC - 2 Infographic):', font: fontName, size: smallSize, bold: true })
                    ]
                  }),
                  new Paragraph({
                    spacing: { before: 10, after: 40, line: 240 },
                    children: [
                      new TextRun({ text: pInfographic.promptVuAnKhoaHoc, font: fontName, size: 20, italics: true })
                    ]
                  }),
                  new Paragraph({
                    spacing: { before: 30, after: 20, line: 240 },
                    children: [
                      new TextRun({ text: '3. Prompt Phong cách Poster Thám tử lừng danh Conan (Khổ A4 ngang - Tỉ lệ 1,414:1):', font: fontName, size: smallSize, bold: true })
                    ]
                  }),
                  new Paragraph({
                    spacing: { before: 10, after: 40, line: 240 },
                    children: [
                      new TextRun({ text: pInfographic.promptConan, font: fontName, size: 20, italics: true })
                    ]
                  }),
                  new Paragraph({
                    spacing: { before: 30, after: 20, line: 240 },
                    children: [
                      new TextRun({ text: `4. Prompt Phong cách Hoạt hình Học sinh Lớp ${meta.khoiLop} Dễ thương (Khổ A4 dọc - Tỉ lệ 1:1,414):`, font: fontName, size: smallSize, bold: true })
                    ]
                  }),
                  new Paragraph({
                    spacing: { before: 10, after: 20, line: 240 },
                    children: [
                      new TextRun({ text: pInfographic.promptHoatHinh, font: fontName, size: 20, italics: true })
                    ]
                  })
                ]
              })
            ]
          })
        ];

        const promptTable = new Table({
          width: { size: 9355, type: WidthType.DXA },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 4, color: 'CBD5E1' },
            bottom: { style: BorderStyle.SINGLE, size: 4, color: 'CBD5E1' },
            left: { style: BorderStyle.SINGLE, size: 4, color: 'CBD5E1' },
            right: { style: BorderStyle.SINGLE, size: 4, color: 'CBD5E1' }
          },
          rows: promptBoxRows
        });

        children.push(promptTable);
        children.push(p('', { spaceBefore: 40, spaceAfter: 30 }));
      }
    }

  // Create the complete Document with Decree 30/2020/NĐ-CP Margins (Top 2, Bottom 2, Left 3, Right 1.5 cm)
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: {
              width: 11906, // A4 width: 210mm in dxa
              height: 16838 // A4 height: 297mm in dxa
            },
            margin: {
              top: 1134, // 2.0 cm
              bottom: 1134, // 2.0 cm
              left: 1701, // 3.0 cm
              right: 850 // 1.5 cm
            }
          }
        },
        children
      }
    ]
  });

  const blob = await Packer.toBlob(doc);
  const cleanFileName = `Giao_An_${meta.monHoc}_Lop_${meta.khoiLop}_${meta.tenBaiDay.replace(/[^a-zA-Z0-9_\u00C0-\u024F\u1E00-\u1EFF]/g, '_')}.docx`;
  saveAs(blob, cleanFileName);
}
