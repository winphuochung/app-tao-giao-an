import { LessonMetadata, PromptInfographicPhieuHocTap } from '../types';

/**
 * Tự động sinh ra 4 bộ Prompt AI thiết kế Phiếu học tập Infographic / Truyện tranh
 * chuẩn xác theo quy định, gắn liền với mọi bài học cụ thể trong Kế hoạch bài dạy
 * (GDPT 2018 - Sách Kết nối tri thức với cuộc sống).
 */
export function generateInfographicPrompts(
  metadata: LessonMetadata,
  cauHoiNhiemVu?: string[]
): PromptInfographicPhieuHocTap {
  const isTieuHoc = metadata.capHoc === 'TIEU_HOC';
  const monHoc = metadata.monHoc || 'Khoa học tự nhiên';
  const khoiLop = metadata.khoiLop || (isTieuHoc ? 3 : 7);
  const tenBaiDay = metadata.tenBaiDay || 'Bài học trọng tâm';
  const boSach = metadata.boSach || 'Kết nối tri thức với cuộc sống';

  const questions =
    cauHoiNhiemVu && cauHoiNhiemVu.length > 0
      ? cauHoiNhiemVu
      : [
          `Nhiệm vụ 1: Nhận biết và chỉ ra các khái niệm, hiện tượng cốt lõi của bài học "${tenBaiDay}".`,
          `Nhiệm vụ 2: Lập công thức, tính toán hoặc đo đạc cụ thể dựa trên số liệu trong SGK.`,
          `Nhiệm vụ 3: Phân tích đồ thị/hình ảnh thực tế và liên hệ ứng dụng đời sống.`,
          `Nhiệm vụ 4: Thử thách vận dụng giải quyết tình huống thực tiễn và an toàn.`
        ];

  // Specific subject-tailored formulas (LaTeX)
  const isSpeedPhysics = /tốc độ|chuyển động|đo tốc độ|vận tốc/i.test(tenBaiDay);
  const isChemistry = /hóa|chất|acid|base|muối|nguyên tử|phản ứng/i.test(monHoc) || /hóa|chất|acid|base|muối/i.test(tenBaiDay);
  
  let latexFormulas = 'Chuẩn công thức toán học/vật lí: $v = \\frac{s}{t} \\iff s = v \\cdot t \\iff t = \\frac{s}{v}$, Đổi đơn vị: $1\\text{ m/s} = 3{,}6\\text{ km/h}$';
  if (isTieuHoc) {
    latexFormulas = 'Đường kính và bán kính: $d = 2 \\times r$ (hay $d = 2r$), Chu vi: $C = d \\times 3{,}14 = 2 \\times r \\times 3{,}14$';
  } else if (isChemistry) {
    latexFormulas = 'Nồng độ mol: $C_M = \\frac{n}{V}\\text{ (mol/L)}$, Khối lượng mol: $M = \\frac{m}{n}\\text{ (g/mol)}$, Phương trình hóa học chuẩn danh pháp IUPAC';
  } else if (!isSpeedPhysics && /hình|đối xứng|tam giác|tròn/i.test(tenBaiDay)) {
    latexFormulas = 'Trục đối xứng $\\Delta$: $\\forall M \\in (H) \\implies M\' = D_\\Delta(M) \\in (H)$, Tọa độ đối xứng: $(x, y) \\mapsto (-x, y)$';
  }

  // -------------------------------------------------------------------------
  // Prompt 1: Doraemon Comic Worksheet (1:1,414)
  // -------------------------------------------------------------------------
  const promptDoraemon = `Thiết kế 1 ảnh infographic phiếu học tập có câu hỏi (không có đáp án) bằng truyện tranh có đối thoại nói chuyện qua lại về các nội dung trong bài trên có dùng các nhân vật trong phim hoạt hình Doraemon có nhiều nhân vật, nổi bật nhất là nhóm bạn thân gồm Doraemon, Nobita (Nôbita), Shizuka (Xuka), Jaian (Chaien), và Suneo (Xêko), cùng nhiều nhân vật phụ khác như Dorami (em gái Doraemon), Dekisugi, bố mẹ Nobita (ông Nobisuke, bà Tamako), thầy giáo. tỉ lệ 1:1,414.

• Thông tin bài học:
- Môn học: ${monHoc}
- Lớp: ${khoiLop}
- Bài học: ${tenBaiDay}
- Bộ sách: ${boSach}

• Cốt truyện đối thoại:
- Thầy giáo giao phiếu thử thách bài học "${tenBaiDay}".
- Nobita lúng túng hỏi Doraemon; Doraemon rút bảo bối học tập hướng dẫn cách quan sát.
- Dekisugi mỉm cười nêu gợi ý nguyên lý khoa học/toán học; Shizuka cẩn thận ghi chép thông số.
- Jaian và Suneo hào hứng tranh luận để giải bài tập thực hành.
- Dorami đưa ra thử thách mở rộng cho cả nhóm.

• Các câu hỏi phiếu học tập (không có đáp án, có dòng kẻ chấm để học sinh điền):
${questions.map((q, i) => `${i + 1}. ${q}`).join('\n')}

• Yêu cầu kỹ thuật: Tỉ lệ 1:1,414 (Khổ A4 dọc Portrait in phiếu học tập), phong cách manga/anime hoạt hình Doraemon rực rỡ có màu, bóng thoại tiếng Việt rõ nét, tuyệt đối KHÔNG có đáp án.`;

  // -------------------------------------------------------------------------
  // Prompt 2: Science Case File (Vụ án khoa học chuyên sâu - LaTeX / IUPAC)
  // -------------------------------------------------------------------------
  const promptVuAnKhoaHoc = `Bạn là một chuyên gia giáo dục, chuyên thiết kế các "infographic kiến thức - vụ án khoa học" cho học sinh. Hãy đọc và phân tích kiến thức trong bài học này, sau đó thiết kế cho tôi chi tiết một "vụ án khoa học". Yêu cầu: tên vụ án liên quan đến bài học, số lượng 2 infographic, nội dung chi tiết từng infographic: infographic 1: bối cảnh (1 đoạn thật ngắn), 3-4 manh mối (là các kiến thức ngắn gọn liên quan đến bài học), infographic 2: từng bài tập trắc nghiệm/trả lời ngắn liên quan đến từng manh mối. phần kết quả thì nằm riêng 1 phần (không nằm trong các infographic), dùng cho học sinh lớp ${khoiLop}, môn ${monHoc}, xuất ra kết quả dạng text, chuẩn công thức dạng LaTex, các hóa chất chuẩn danh pháp IUPAC để tôi copy được.

• Thông tin bài học:
- Môn học: ${monHoc}
- Lớp: ${khoiLop}
- Tên bài học: ${tenBaiDay}
- Bộ sách giáo khoa: ${boSach}

• Chi tiết nội dung vụ án cần thiết kế:
1. Tên vụ án: Đặt tên vụ án kịch tính, hấp dẫn gắn chặt với hiện tượng trong bài học "${tenBaiDay}".
2. Infographic 1:
- Bối cảnh: 1 đoạn văn ngắn 2 - 3 câu nêu tình huống hiện trường bí ẩn cần giải mã.
- 4 Manh mối khoa học cốt lõi: Khái niệm, công thức tính, đại lượng đặc trưng và ứng dụng đời sống.
3. Infographic 2:
- 4 Câu hỏi/bài tập phá án tương ứng 4 manh mối (có ô kẻ chấm để học sinh làm, KHÔNG có đáp án trên ảnh):
${questions.map((q, i) => `  * Bài tập ${i + 1}: ${q}`).join('\n')}
4. Phần kết quả riêng (cho Giáo viên chấm điểm):
- Chuẩn công thức dạng LaTeX: ${latexFormulas}.
- Danh pháp IUPAC (nếu có hóa chất).`;

  // -------------------------------------------------------------------------
  // Prompt 3: Conan Anime Poster (1,414:1)
  // -------------------------------------------------------------------------
  const promptConan = `Thiết kế 1 ảnh infographic "vụ án khoa học" với những câu hỏi (không có đáp án) được dẫn dắt bởi nhân vật Conan (trong bộ truyện Thám tử lừng danh Conan) với các khung truyện tranh anime có màu, hấp dẫn lôi cuốn, như những tấm poster. tỉ lệ 1,414:1.

• Thông tin bài học:
- Chủ đề: "${tenBaiDay}" - Môn ${monHoc} Lớp ${khoiLop} (Bộ sách ${boSach}).

• Bối cảnh poster & Nhân vật:
- Conan đeo kính định vị lóe sáng, thắt nơ biến đổi giọng nói đang quan sát hiện trường vụ án khoa học và soi kính lúp vào chứng cứ.
- Đội thám tử nhí (Ayumi, Genta, Mitsuhiko) cùng Ran Mori đang theo dõi hiện trường với nét mặt tò mò, hồi hộp.
- Phông nền cinematic poster anime phá án với tông màu huyền bí, sắc nét, có bảng sơ đồ phân tích chứng cứ khoa học.

• Nội dung câu hỏi thử thách phá án (không có đáp án, có ô dòng kẻ trống):
${questions.map((q, i) => `- Manh mối ${i + 1}: ${q}`).join('\n')}

• Yêu cầu kỹ thuật: Tỉ lệ 1,414:1 (Khổ ngang A4 Landscape Poster), phong cách anime Detective Conan sống động, chữ tiếng Việt sắc nét, tuyệt đối KHÔNG có đáp án.`;

  // -------------------------------------------------------------------------
  // Prompt 4: Cute Students Cartoon (1:1,414)
  // -------------------------------------------------------------------------
  const promptHoatHinh = `Thiết kế 1 ảnh infographic phiếu học tập có câu hỏi (không có đáp án), phong cách hoạt hình với nhân vật là các bạn học sinh lớp ${khoiLop}, dễ thương đối thoại nói chuyện qua lại về các nội dung trong bài, bố cục màu sắc, dễ nhìn, sáng tạo. tỉ lệ 1:1,414.

• Bối cảnh & Nhân vật:
- 4 bạn học sinh Việt Nam Lớp ${khoiLop} mặc đồng phục khăn quàng đỏ cực kỳ dễ thương (phong cách hoạt hình Chibi / 3D Pixar vui tươi, thân thiện), ngồi thảo luận học nhóm quanh bàn tròn.
- Các bạn phân công 4 vai trò: Nhóm trưởng, Thư ký ghi chép, Kỹ thuật viên và Báo cáo viên.

• Đối thoại đối đáp vui vẻ dẫn dắt bài tập:
- "Các bạn ơi, cùng tớ giải mã câu đố của bài '${tenBaiDay}' nào!"
- "Tớ đã ghi lại dữ liệu rồi, bài tập này tính như thế nào nhỉ?"
- "Nhìn này, quy luật của bài học rất rõ ràng nhé!"

• Các câu hỏi phiếu học tập (không có đáp án):
${questions.map((q, i) => `${i + 1}. ${q}`).join('\n')}

• Yêu cầu kỹ thuật: Tỉ lệ 1:1,414 (Khổ dọc A4 Portrait), màu sắc pastel tươi vui, ô bố cục sáng tạo, font chữ tròn dễ đọc, có dòng kẻ chấm để học sinh điền bài làm. Tuyệt đối KHÔNG có đáp án.`;

  return {
    tieuDe: `Bộ Prompt AI Thiết Kế Infographic Phiếu Học Tập (${tenBaiDay} - Lớp ${khoiLop})`,
    moTa: 'Tự động tạo câu lệnh AI (Prompt) phục vụ thiết kế phiếu học tập truyện tranh sinh động trên ChatGPT, Midjourney, Canva.',
    promptDoraemon,
    promptVuAnKhoaHoc,
    promptConan,
    promptHoatHinh
  };
}
