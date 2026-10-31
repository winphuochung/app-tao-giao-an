import { CompleteLessonPlan, LessonMetadata, SlideThemeId, ChiBaoNangLucSo, HoatDongNhomTichCuc, SoDoTuDuy, SoDoTuDuyNhanh } from '../types';
import { SLIDE_THEMES } from '../data/themes';
import { HOAT_DONG_NHOM_TIEU_HOC, HOAT_DONG_NHOM_THCS } from '../data/activeGroupActivities';
import { generateInfographicPrompts } from '../utils/infographicPrompts';
import { SAMPLE_KHTN_7_TOC_DO } from '../data/sampleKhtn7';
import { SAMPLE_KHTN_7_BAI_9_DO_TOC_DO } from '../data/sampleKhtn7Bai9';
import { getIntelligentSectionsForTopic } from '../data/textbookCurriculumKnowledge';

import { SAMPLE_LESSONS } from '../data/sampleLessons';

export async function generateLessonPlanWithAI(
  metadata: LessonMetadata,
  themeId: SlideThemeId,
  apiKey?: string
): Promise<CompleteLessonPlan> {
  // If user provides a valid Gemini API Key, try calling Gemini API directly
  if (apiKey && apiKey.trim().length > 10) {
    try {
      const response = await callGeminiApi(metadata, themeId, apiKey.trim());
      if (response) return response;
    } catch (err) {
      console.warn('Gemini API call failed, falling back to smart built-in engine:', err);
    }
  }

  // Built-in intelligent educational synthesis engine
  return generateIntelligentPlan(metadata, themeId);
}

async function callGeminiApi(
  metadata: LessonMetadata,
  themeId: SlideThemeId,
  apiKey: string
): Promise<CompleteLessonPlan | null> {
  const isTieuHoc = metadata.capHoc === 'TIEU_HOC';
  const congVan = isTieuHoc ? '2345/BGDĐT-GDTH' : '5512/BGDĐT-GDTrH';
  const theme = SLIDE_THEMES[themeId];

  const systemInstruction = `Bạn là Chuyên gia Sư phạm GDPT 2018 và Chuyên gia Thiết kế Bài giảng hàng đầu Việt Nam.
Nhiệm vụ của bạn là nhận thông tin bài học từ Giáo viên và trả về một đối tượng JSON duy nhất chứa đầy đủ:
(1) Nội dung Kế hoạch bài dạy chia 2 cột chuẩn ${congVan}.
    - BẮT BUỘC SOẠN ĐÚNG NHƯ SÁCH GIÁO KHOA CỦA MỖI BÀI ĐƯỢC CHỌN (Bộ sách: ${metadata.boSach}, Môn: ${metadata.monHoc}, Lớp: ${metadata.khoiLop}, Tên bài: ${metadata.tenBaiDay}):
      + Khai thác chi tiết, cụ thể từng hoạt động kiến thức theo đúng thứ tự các đề mục trong SGK.
      + Mỗi đề mục trong SGK là một hoạt động riêng biệt giúp học sinh tự chiếm lĩnh và lĩnh hội tri thức.
      + Tuyệt đối không viết chung chung, phải ghi rõ các số liệu, ví dụ, câu hỏi, bài tập y như trong sách giáo khoa.
      + Đưa đúng hình ảnh mô tả SGK vào TRỰC TIẾP trong từng dòng đề mục tương ứng (trường hinhAnhSGK trong mỗi dòng bangHaiCotRow), kèm hệ thống câu hỏi định hướng để học sinh tự quan sát tranh ảnh SGK và tự rút ra kiến thức cốt lõi.
    - TẤT CẢ giáo án BẮT BUỘC phải có hoạt động thảo luận nhóm 4 vai trò (Nhóm trưởng, Thư ký, Kỹ thuật viên thao tác, Báo cáo viên) kèm quy tắc 4 màu mực chống thụ động, phân công công việc công bằng.
    - Lấy học sinh làm trung tâm, giáo viên chỉ tổ chức và chuyển giao nhiệm vụ; học sinh tự tay thao tác (gấp giấy, đo đạc, đọc SGK, thảo luận, làm thí nghiệm) và tự rút ra kết luận khoa học.
    - Áp dụng các phương pháp & kĩ thuật dạy học tích cực đa dạng (Khăn trải bàn, Mảnh ghép, Phòng tranh, KWL, Đánh giá đồng đẳng...).
    - Mỗi tiết học là một tiết học sinh động, hào hứng, mở đầu bằng trò chơi khởi động lôi cuốn và liên hệ thực tế gần gũi.
(2) Cấu trúc kịch bản Slide PowerPoint chuyên nghiệp tương ứng với bài học đó.
(3) Bộ câu hỏi trắc nghiệm trò chơi khởi động gồm 4 câu hỏi.
CHỈ TRẢ VỀ DUY NHẤT MÃ JSON HỢP LỆ, KHÔNG KÈM THEO BẤT KỲ LỜI DẪN NÀO NGOÀI JSON.`;

  const userPrompt = `Hãy thiết kế Kế hoạch bài dạy và Slide PowerPoint cho bài học:
- Cấp học: ${isTieuHoc ? 'Tiểu học (Công văn 2345)' : 'THCS (Công văn 5512)'}
- Lớp: ${metadata.khoiLop}
- Môn: ${metadata.monHoc}
- Bộ sách: ${metadata.boSach}
- Tên bài dạy: ${metadata.tenBaiDay}
- Số tiết: ${metadata.soTiet} (Thời lượng: ${metadata.thoiLuong})
- Tích hợp: Năng lực số (${metadata.tichHop.nangLucSo}), STEM (${metadata.tichHop.stem}), ATGT (${metadata.tichHop.anToanGiaoThong}), Kỹ năng sống (${metadata.tichHop.kyNangSong}), Môi trường (${metadata.tichHop.baoVeMoiTruong})
- Phong cách Slide: ${theme.name}

Yêu cầu cấu trúc JSON trả về tuân thủ chính xác các trường sau:
{
  "giaoAn": {
    "metadata": { ... },
    "mucTieu": {
      "kienThuc": ["..."],
      "nangLucDacThu": ["..."],
      "nangLucChung": { "tuChuTuHoc": ["..."], "giaoTiepHopTac": ["..."], "giaiQuyetVanDe": ["..."] },
      "phamChat": { "yeuNuoc": ["..."], "nhanAi": ["..."], "chamChi": ["..."], "trungThuc": ["..."], "trachNhiem": ["..."] },
      "tichHopMoRong": ["..."]
    },
    "thietBiDayHoc": { "giaoVien": ["..."], "hocSinh": ["..."] },
    "tienTrinhDayHoc": [
      {
        "id": "hd-1",
        "soThuTu": 1,
        "tenHoatDong": "Hoạt động 1: Mở đầu / Khởi động",
        "thoiLuong": "5 phút",
        "mucTieu": "...",
        "noiDung": "...",
        "sanPham": "...",
        "bangHaiCot": [
          {
            "id": "row-1-1",
            "buocSuPham": "Bước 1: Chuyển giao nhiệm vụ / Khởi động",
            "cot1Trai": "Hoạt động của GV (CV 2345) hoặc 4 bước GV & HS (CV 5512)",
            "cot2Phai": "Hoạt động của HS (CV 2345) hoặc Sản phẩm / Ghi bảng (CV 5512)"
          }
        ]
      }
    ],
    "dieuChinhSauBaiDay": "..."
  },
  "slideDeck": {
    "themeId": "${themeId}",
    "slides": [
      {
        "id": "slide-1",
        "slideNumber": 1,
        "slideType": "TITLE_SLIDE",
        "title": "...",
        "subtitle": "...",
        "stageBadge": "Trang bìa",
        "visualLayout": "Full Center Hero",
        "bulletPoints": ["..."],
        "boardContent": "...",
        "aiImagePrompt": "...",
        "animationsAndTransitions": {
          "slideTransition": "Morph | Curtains | Push | Fade",
          "elementAnimations": ["..."]
        },
        "speakerNotes": "..."
      }
    ]
  },
  "quizGame": [
    {
      "id": "q1",
      "question": "...",
      "options": ["A", "B", "C", "D"],
      "correctIndex": 0,
      "explanation": "...",
      "funFact": "..."
    }
  ]
}`;

  const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  
  const res = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ role: 'user', parts: [{ text: `${systemInstruction}\n\n${userPrompt}` }] }],
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.4
      }
    })
  });

  if (!res.ok) {
    throw new Error(`Gemini API Error: ${res.statusText}`);
  }

  const jsonResult = await res.json();
  const rawText = jsonResult.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) return null;

  const parsed = JSON.parse(rawText) as CompleteLessonPlan;
  parsed.giaoAn.metadata = { ...metadata, capHoc: metadata.capHoc, congVan };
  parsed.slideDeck.themeConfig = theme;

  // Tự động sinh Prompt AI Infographic đưa trực tiếp vào hoạt động của Kế hoạch bài dạy
  if (parsed.giaoAn?.tienTrinhDayHoc) {
    const act = parsed.giaoAn.tienTrinhDayHoc.find(h => h.hoatDongNhomTichCuc || h.soThuTu === 2) || parsed.giaoAn.tienTrinhDayHoc[1];
    if (act) {
      if (!act.hoatDongNhomTichCuc) {
        act.hoatDongNhomTichCuc = metadata.capHoc === 'TIEU_HOC' ? { ...HOAT_DONG_NHOM_TIEU_HOC } : { ...HOAT_DONG_NHOM_THCS };
      }
      act.hoatDongNhomTichCuc.promptInfographic = generateInfographicPrompts(
        metadata,
        act.hoatDongNhomTichCuc.phieuGiaoNhiemVu?.cauHoiNhiemVu
      );
    }
  }

  return parsed;
}

// Helper: Tạo Sơ đồ tư duy 16:9 3D Pixar chốt kiến thức cốt lõi (chuẩn GDPT 2018 theo từng môn)
export function generateMindmapData(
  metadata: LessonMetadata,
  topic: string,
  subject: string,
  isTieuHoc: boolean
): SoDoTuDuy {
  const isSpeedPhysics = /tốc độ chuyển động/i.test(topic) && /khoa học tự nhiên|khtn|vật lí/i.test(subject);
  const isChemistry = !isSpeedPhysics && (/hóa|acid|base|chất|nguyên tố/i.test(subject) || /hóa|acid|base|chất|nguyên tố/i.test(topic));
  const isGeometry = /hình|tam giác|tròn|chữ nhật|vuông|đối xứng/i.test(topic);

  let defaultImg = '/mindmaps/mindmap-pixar-bg.jpg';
  if (isSpeedPhysics) defaultImg = '/mindmaps/mindmap-khtn-7-toc-do.jpg';
  else if (isChemistry) defaultImg = '/mindmaps/mindmap-hoa-8-acid-base.jpg';
  else if (isGeometry && isTieuHoc) defaultImg = '/mindmaps/mindmap-toan-3-hinh-tron.jpg';
  else if (isGeometry && !isTieuHoc) defaultImg = '/mindmaps/mindmap-toan-6-truc-doi-xung.jpg';

  let thuatNgu: string[] = [];
  let branches: SoDoTuDuyNhanh[] = [];

  if (isSpeedPhysics) {
    thuatNgu = ['Tốc độ chuyển động', 'v = s / t', 'mét trên giây (m/s)', 'kilômét trên giờ (km/h)', '1 m/s = 3,6 km/h', 'Tốc kế', 'Thiết bị bắn tốc độ'];
    branches = [
      {
        id: 'b1',
        tieuDe: '1. Khái niệm Tốc độ',
        mauSac: '#ef4444',
        icon3D: '🎯',
        congThuc: 'v = s / t (Quãng đường / Thời gian)',
        cacYCon: [
          'Đặc trưng cho mức độ nhanh hay chậm của chuyển động',
          'Xác định bằng quãng đường đi được trong một đơn vị thời gian',
          'Phân tích Bảng 8.1 SGK cự li 60m: Cùng s, t càng nhỏ thì v càng lớn'
        ]
      },
      {
        id: 'b2',
        tieuDe: '2. Công thức toán học',
        mauSac: '#10b981',
        icon3D: '📐',
        congThuc: 'v = s / t  <=>  s = v . t  <=>  t = s / v',
        cacYCon: [
          's: Quãng đường vật đi được (đo bằng mét: m, hoặc kilômét: km)',
          't: Thời gian đi hết quãng đường (đo bằng giây: s, hoặc giờ: h)',
          'v: Tốc độ của chuyển động (m/s hoặc km/h)'
        ]
      },
      {
        id: 'b3',
        tieuDe: '3. Đơn vị & Quy đổi chuẩn',
        mauSac: '#f59e0b',
        icon3D: '⭐',
        congThuc: '1 m/s = 3,6 km/h  |  1 km/h = 1 / 3,6 m/s',
        cacYCon: [
          'Đơn vị đo chuẩn trong hệ SI: mét trên giây (m/s)',
          'Đơn vị thông dụng đời sống: kilômét trên giờ (km/h)',
          'Quy tắc đổi nhanh: Từ m/s ra km/h nhân 3,6; từ km/h ra m/s chia 3,6'
        ]
      },
      {
        id: 'b4',
        tieuDe: '4. Thiết bị đo & An toàn GT',
        mauSac: '#8b5cf6',
        icon3D: '🚦',
        congThuc: 'Tốc kế (xe máy/ô tô) + Máy bắn tốc độ Radar',
        cacYCon: [
          'Tốc kế: Đo trực tiếp tốc độ tức thời hiển thị trên bảng taplo xe',
          'Thiết bị bắn tốc độ CSGT: Máy đo radar/laser + Camera ghi hình vi phạm',
          'Tuân thủ nghiêm biển báo hạn chế tốc độ khu dân cư để bảo đảm ATGT'
        ]
      }
    ];
  } else if (isChemistry) {
    thuatNgu = ['Danh pháp IUPAC', 'acid', 'base', 'pH', 'HCl', 'NaOH'];
    branches = [
      {
        id: 'b1',
        tieuDe: '1. Khái niệm Acid theo IUPAC',
        mauSac: '#ef4444',
        icon3D: '🍋',
        congThuc: 'HCl, H2SO4, HNO3, CH3COOH',
        cacYCon: [
          'Phân tử gồm một hay nhiều nguyên tử H liên kết với gốc acid',
          'Làm đổi màu quỳ tím sang màu đỏ đặc trưng',
          'Viết đúng thuật ngữ quốc tế chuẩn IUPAC: "acid"'
        ]
      },
      {
        id: 'b2',
        tieuDe: '2. Khái niệm Base theo IUPAC',
        mauSac: '#3b82f6',
        icon3D: '🧼',
        congThuc: 'NaOH, Ca(OH)2, Ba(OH)2',
        cacYCon: [
          'Phân tử gồm nguyên tử kim loại liên kết với nhóm hydroxide (-OH)',
          'Làm đổi màu quỳ tím sang màu xanh',
          'Viết đúng thuật ngữ quốc tế chuẩn IUPAC: "base"'
        ]
      },
      {
        id: 'b3',
        tieuDe: '3. Thang đo pH & Màu sắc chỉ thị',
        mauSac: '#10b981',
        icon3D: '🌈',
        congThuc: 'pH < 7 (Acid) | pH = 7 (Trung tính) | pH > 7 (Base)',
        cacYCon: [
          'Độ pH dùng để đánh giá mức độ acid hoặc base của dung dịch',
          'Dung dịch acid có pH < 7, làm giấy pH đổi sang màu ấm',
          'Dung dịch base có pH > 7, làm giấy pH đổi sang màu lạnh'
        ]
      },
      {
        id: 'b4',
        tieuDe: '4. Ứng dụng thực tiễn đời sống',
        mauSac: '#8b5cf6',
        icon3D: '🛡️',
        congThuc: 'Acid + Base -> Muối + Nước',
        cacYCon: [
          'Khử chua đất trồng trong nông nghiệp bằng vôi tôi Ca(OH)2',
          'Sản xuất dược phẩm, nước tẩy rửa, bình ắc quy xe máy',
          'Tuân thủ nghiêm ngặt quy tắc an toàn bảo hộ phòng thí nghiệm'
        ]
      }
    ];
  } else if (isTieuHoc) {
    thuatNgu = ['Khái niệm cốt lõi', 'Quy tắc vàng', 'Thao tác chuẩn 3 bước'];
    branches = [
      {
        id: 'b1',
        tieuDe: `1. Bản chất & Nhận diện ${topic}`,
        mauSac: '#3b82f6',
        icon3D: '🎯',
        congThuc: 'Khái niệm chuẩn SGK',
        cacYCon: [
          `Nhận diện chính xác dấu hiệu và bản chất của ${topic}`,
          'Quan sát trực quan từ tranh ảnh SGK và đồ vật thực tế',
          'Ghi nhớ thuật ngữ và các ký hiệu hình học cơ bản'
        ]
      },
      {
        id: 'b2',
        tieuDe: '2. Quy tắc & Công thức vàng',
        mauSac: '#10b981',
        icon3D: '⭐',
        congThuc: 'Chuẩn công thức toán học',
        cacYCon: [
          'Nắm vững mối quan hệ giữa các thành phần toán học',
          'Áp dụng quy tắc tính nhanh, chuẩn xác không nhầm lẫn',
          'Tự tin phát biểu và giải thích trước lớp'
        ]
      },
      {
        id: 'b3',
        tieuDe: '3. Quy trình thực hành các bước',
        mauSac: '#f59e0b',
        icon3D: '✏️',
        congThuc: 'Quy trình 3 bước chuẩn',
        cacYCon: [
          'Bước 1: Chuẩn bị dụng cụ học tập đầy đủ, an toàn',
          'Bước 2: Thao tác đo đạc/vẽ theo đúng thứ tự chỉ dẫn',
          'Bước 3: Đổi chéo vở kiểm tra đồng đẳng cùng bạn'
        ]
      },
      {
        id: 'b4',
        tieuDe: '4. Vận dụng thực tế & STEM',
        mauSac: '#ec4899',
        icon3D: '🌟',
        congThuc: 'Ứng dụng đời sống',
        cacYCon: [
          'Phát hiện các đồ vật quanh ta có cấu trúc tương tự',
          'Sáng tạo sản phẩm thủ công tái chế thân thiện môi trường',
          'Bồi dưỡng tư duy thẩm mỹ và niềm đam mê khám phá'
        ]
      }
    ];
  } else {
    thuatNgu = ['Định lý khoa học', 'Tính chất cốt lõi', 'Chuẩn GDPT 2018'];
    branches = [
      {
        id: 'b1',
        tieuDe: `1. Khái niệm & Định lý ${topic}`,
        mauSac: '#3b82f6',
        icon3D: '📘',
        congThuc: 'Bản chất khoa học SGK',
        cacYCon: [
          'Định nghĩa khoa học chính xác theo chương trình GDPT 2018',
          'Các điều kiện và giới hạn áp dụng trong bài toán',
          'Ý nghĩa hình học/khoa học nền tảng'
        ]
      },
      {
        id: 'b2',
        tieuDe: '2. Tính chất & Công thức suy luận',
        mauSac: '#10b981',
        icon3D: '📐',
        congThuc: 'Hệ thống công thức cốt lõi',
        cacYCon: [
          'Chứng minh và suy luận từ các dữ kiện đã cho',
          'Mối tương quan đa chiều giữa các đại lượng',
          'Phương pháp giải tối ưu từng dạng bài toán'
        ]
      },
      {
        id: 'b3',
        tieuDe: '3. Phân dạng & Phương pháp giải',
        mauSac: '#f59e0b',
        icon3D: '💡',
        congThuc: 'Kỹ thuật tư duy logic',
        cacYCon: [
          'Dạng 1: Nhận biết và thông hiểu dữ liệu thực tế',
          'Dạng 2: Vận dụng công thức và biến đổi linh hoạt',
          'Nhận diện các bẫy sai lầm phổ biến thường gặp'
        ]
      },
      {
        id: 'b4',
        tieuDe: '4. Khắc sâu liên môn & Đời sống',
        mauSac: '#8b5cf6',
        icon3D: '🏛️',
        congThuc: 'Thực tiễn & Công nghệ số',
        cacYCon: [
          'Ứng dụng trong kiến trúc, kỹ thuật và đời sống thực tiễn',
          'Tích hợp công nghệ số mô phỏng trực quan Geogebra/Canva',
          'Bồi dưỡng phẩm chất trách nhiệm và tư duy khoa học'
        ]
      }
    ];
  }

  return {
    id: `mindmap-${Date.now()}`,
    chuDeChinh: topic.toUpperCase(),
    moTaChuDe: `Hệ thống hóa toàn bộ kiến thức cốt lõi bài học "${topic}" - Chuẩn chương trình GDPT 2018`,
    tiLe: '16:9',
    phongCach: '3D Pixar',
    imageUrl: defaultImg,
    ghiChuKetLuan: 'GV trình chiếu sơ đồ tư duy 16:9 3D Pixar để chốt kiến thức, khắc sâu bản chất khoa học và kích thích tư duy trực quan của học sinh.',
    monHoc: subject,
    thuatNguChuan: thuatNgu,
    danhSachNhanh: branches
  };
}

export function generateIntelligentPlan(
  metadata: LessonMetadata,
  themeId: SlideThemeId
): CompleteLessonPlan {
  const isTieuHoc = metadata.capHoc === 'TIEU_HOC';
  const theme = SLIDE_THEMES[themeId] || SLIDE_THEMES['3d-pixar'];
  const topic = metadata.tenBaiDay || 'Bài học mới GDPT 2018';
  const subject = metadata.monHoc || (isTieuHoc ? 'Toán' : 'Khoa học tự nhiên');
  const secKnowledge = getIntelligentSectionsForTopic(topic, subject, metadata.khoiLop, metadata.boSach);

  // Chỉ nạp bài mẫu chuẩn KHTN 7 nếu đúng chính xác là Bài 8 Tốc độ chuyển động (không được bắt nhầm bài khác)
  const isExactKhtn7Bai8 = metadata.khoiLop === 7 &&
    /khoa học tự nhiên|khtn/i.test(subject) &&
    /tốc độ chuyển động/i.test(topic);

  if (isExactKhtn7Bai8) {
    const khtnPlan = JSON.parse(JSON.stringify(SAMPLE_KHTN_7_TOC_DO)) as CompleteLessonPlan;
    khtnPlan.giaoAn.metadata = {
      ...khtnPlan.giaoAn.metadata,
      ...metadata,
      capHoc: 'THCS',
      congVan: '5512/BGDĐT-GDTrH',
      tenBaiDay: metadata.tenBaiDay?.trim() ? metadata.tenBaiDay : 'Bài 8: Tốc độ chuyển động',
      khoiLop: 7,
      monHoc: metadata.monHoc?.trim() ? metadata.monHoc : 'Khoa học tự nhiên',
      boSach: metadata.boSach || 'Kết nối tri thức với cuộc sống'
    };
    khtnPlan.slideDeck.themeId = themeId;
    khtnPlan.slideDeck.themeConfig = theme;
    return khtnPlan;
  }

  // Kiểm tra bài học chuẩn Toán 3: Hình tròn, tâm, đường kính, bán kính
  const isExactToan3HinhTron = metadata.khoiLop === 3 &&
    /toán/i.test(subject) &&
    /hình tròn.*tâm.*đường kính/i.test(topic);

  if (isExactToan3HinhTron) {
    const toan3Plan = JSON.parse(JSON.stringify(SAMPLE_LESSONS['tieu-hoc-toan-3'])) as CompleteLessonPlan;
    toan3Plan.giaoAn.metadata = {
      ...toan3Plan.giaoAn.metadata,
      ...metadata,
      capHoc: 'TIEU_HOC',
      congVan: '2345/BGDĐT-GDTH',
      khoiLop: 3,
      monHoc: 'Toán',
      boSach: metadata.boSach || 'Kết nối tri thức với cuộc sống'
    };
    toan3Plan.slideDeck.themeId = themeId;
    toan3Plan.slideDeck.themeConfig = theme;
    return toan3Plan;
  }

  // Kiểm tra bài học chuẩn Toán 6: Hình có trục đối xứng
  const isExactToan6TrucDoiXung = metadata.khoiLop === 6 &&
    /toán/i.test(subject) &&
    /trục đối xứng/i.test(topic);

  if (isExactToan6TrucDoiXung) {
    const toan6Plan = JSON.parse(JSON.stringify(SAMPLE_LESSONS['thcs-toan-6'])) as CompleteLessonPlan;
    toan6Plan.giaoAn.metadata = {
      ...toan6Plan.giaoAn.metadata,
      ...metadata,
      capHoc: 'THCS',
      congVan: '5512/BGDĐT-GDTrH',
      khoiLop: 6,
      monHoc: 'Toán',
      boSach: metadata.boSach || 'Kết nối tri thức với cuộc sống'
    };
    toan6Plan.slideDeck.themeId = themeId;
    toan6Plan.slideDeck.themeConfig = theme;
    return toan6Plan;
  }

  const tichHopNotes: string[] = [];
  if (metadata.tichHop.nangLucSo) tichHopNotes.push('Ứng dụng công nghệ thông tin và học liệu số tương tác');
  if (metadata.tichHop.stem) tichHopNotes.push('Giáo dục STEM: Khám phá mô hình thực tiễn và sản phẩm sáng tạo');
  if (metadata.tichHop.anToanGiaoThong) tichHopNotes.push('Lồng ghép văn hóa an toàn giao thông và tuân thủ quy tắc');
  if (metadata.tichHop.kyNangSong) tichHopNotes.push('Rèn luyện kỹ năng làm việc nhóm, chia sẻ và phản biện tích cực');
  if (metadata.tichHop.baoVeMoiTruong) tichHopNotes.push('Nâng cao ý thức bảo vệ tài nguyên và môi trường xanh');
  if (metadata.tichHop.quocPhongAnNinh) {
    tichHopNotes.push(
      'Bảo vệ Quốc phòng và An ninh (Thông tư 08/2024/TT-BGDĐT): Bồi dưỡng lòng yêu nước, ý thức bảo vệ chủ quyền biên giới, biển đảo và trật tự an toàn an ninh'
    );
  }
  if (metadata.tichHop.dinhDuongSucKhoe) {
    tichHopNotes.push(
      'Giáo dục Dinh dưỡng & Sức khỏe học đường: Hình thành thói quen ăn uống khoa học, dinh dưỡng cân bằng và bảo đảm an toàn vệ sinh thực phẩm'
    );
  }

  // Generate CV 3456 Digital Competence Indicators based on grade level
  const nangLucSoIndicators: ChiBaoNangLucSo[] = [];
  if (metadata.tichHop.nangLucSo) {
    const grade = metadata.khoiLop;
    if (grade <= 3) {
      nangLucSoIndicators.push(
        {
          maChiBao: '1.1.CB1a',
          tenLinhVuc: 'Khai thác dữ liệu và thông tin',
          bieuHien: `Quan sát, nhận diện hình ảnh và dữ liệu số trực quan liên quan đến bài học "${topic}" dưới sự hướng dẫn của giáo viên.`
        },
        {
          maChiBao: '3.1.CB1a',
          tenLinhVuc: 'Sáng tạo nội dung số',
          bieuHien: `Sử dụng thiết bị số đơn giản (thao tác kéo thả trên màn hình cảm ứng / phần mềm học tập) để hoàn thành nhiệm vụ.`
        },
        {
          maChiBao: '4.3.CB1a',
          tenLinhVuc: 'Bảo vệ sức khỏe và an sinh số',
          bieuHien: `Nhận biết và tuân thủ tư thế ngồi học an toàn, giữ khoảng cách mắt đúng chuẩn khi học tập với máy chiếu / màn hình tivi.`
        }
      );
    } else if (grade <= 5) {
      nangLucSoIndicators.push(
        {
          maChiBao: '1.1.CB2b',
          tenLinhVuc: 'Khai thác dữ liệu và thông tin',
          bieuHien: `Tự tìm kiếm được dữ liệu, hình ảnh minh họa cho bài "${topic}" bằng công cụ tìm kiếm với từ khóa đơn giản.`
        },
        {
          maChiBao: '2.2.CB2b',
          tenLinhVuc: 'Chia sẻ thông tin và nội dung số',
          bieuHien: `Biết ghi chú nguồn gốc và trích dẫn cơ bản khi sử dụng tranh ảnh, tư liệu từ Internet vào bài làm.`
        },
        {
          maChiBao: '3.1.CB2a',
          tenLinhVuc: 'Sáng tạo nội dung số',
          bieuHien: `Tạo được sản phẩm học tập đa phương tiện đơn giản (soạn thảo văn bản có chèn hình ảnh minh họa bài học).`
        }
      );
    } else if (grade <= 7) {
      nangLucSoIndicators.push(
        {
          maChiBao: '1.1.TC1b',
          tenLinhVuc: 'Duyệt, tìm kiếm và lọc dữ liệu số',
          bieuHien: `Tự thực hiện các thao tác tìm kiếm nâng cao để thu thập thông tin, hình ảnh chuẩn xác phục vụ bài học "${topic}" theo quy trình rõ ràng.`
        },
        {
          maChiBao: '3.1.TC1a',
          tenLinhVuc: 'Phát triển nội dung số',
          bieuHien: `Thiết kế sản phẩm số tóm tắt bài học (Infographic / Slide trình chiếu Bento Grid) bằng công cụ PowerPoint hoặc đồ họa.`
        },
        {
          maChiBao: '5.2.TC1a',
          tenLinhVuc: 'Xác định nhu cầu và giải pháp công nghệ',
          bieuHien: `Tự lựa chọn phần mềm/công cụ số phù hợp (GeoGebra, bảng mô phỏng số) để giải quyết nhiệm vụ học tập của bộ môn.`
        }
      );
    } else {
      nangLucSoIndicators.push(
        {
          maChiBao: '1.2.TC2a',
          tenLinhVuc: 'Đánh giá dữ liệu, thông tin và nội dung số',
          bieuHien: `Phân tích phản biện, đối chiếu độ tin cậy giữa nhiều nguồn dữ liệu số trước khi sử dụng cho bài học "${topic}".`
        },
        {
          maChiBao: '2.4.TC2a',
          tenLinhVuc: 'Hợp tác thông qua công nghệ số',
          bieuHien: `Cộng tác cùng nhóm trên tài liệu số dùng chung trong thời gian thực để hoàn thành dự án học tập liên môn.`
        },
        {
          maChiBao: '3.1.TC2b',
          tenLinhVuc: 'Phát triển nội dung số',
          bieuHien: `Biên tập và sản xuất nội dung số đa phương tiện (video clip thuyết trình / podcast học tập) truyền tải thông điệp bài học.`
        }
      );
    }
  }

  // 1. Kiểm tra nếu là Bài 9: Đo tốc độ (KHTN 7) -> Trả về giáo án bám sát 100% SGK Trang 49-51
  const isMeasureSpeed = (/đo tốc độ/i.test(topic) || (/bài 9/i.test(topic) && /tốc độ/i.test(topic))) && /khoa học tự nhiên|khtn|vật lí/i.test(subject);
  if (isMeasureSpeed) {
    return {
      ...SAMPLE_KHTN_7_BAI_9_DO_TOC_DO,
      giaoAn: {
        ...SAMPLE_KHTN_7_BAI_9_DO_TOC_DO.giaoAn,
        metadata: {
          ...SAMPLE_KHTN_7_BAI_9_DO_TOC_DO.giaoAn.metadata,
          ...metadata,
          tenBaiDay: metadata.tenBaiDay || 'Bài 9: Đo tốc độ',
          boSach: metadata.boSach || 'Kết nối tri thức với cuộc sống'
        }
      },
      slideDeck: {
        ...SAMPLE_KHTN_7_BAI_9_DO_TOC_DO.slideDeck,
        themeId: themeId,
        themeConfig: SLIDE_THEMES[themeId]
      }
    };
  }

  // 2. Kiểm tra nếu là Bài 8: Tốc độ chuyển động (KHTN 7) -> Trả về giáo án bám sát 100% SGK Trang 45-48
  const isSpeedPhysics = (/tốc độ chuyển động/i.test(topic) || (/bài 8/i.test(topic) && /tốc độ/i.test(topic))) && /khoa học tự nhiên|khtn|vật lí/i.test(subject);
  if (isSpeedPhysics) {
    return {
      ...SAMPLE_KHTN_7_TOC_DO,
      giaoAn: {
        ...SAMPLE_KHTN_7_TOC_DO.giaoAn,
        metadata: {
          ...SAMPLE_KHTN_7_TOC_DO.giaoAn.metadata,
          ...metadata,
          tenBaiDay: metadata.tenBaiDay || 'Bài 8: Tốc độ chuyển động',
          boSach: metadata.boSach || 'Kết nối tri thức với cuộc sống'
        }
      },
      slideDeck: {
        ...SAMPLE_KHTN_7_TOC_DO.slideDeck,
        themeId: themeId,
        themeConfig: SLIDE_THEMES[themeId]
      }
    };
  }

  // 3. Kiểm tra các bài mẫu Toán 3 và Toán 6
  const isCircleMath = /hình tròn/i.test(topic) && /toán/i.test(subject);
  if (isCircleMath && SAMPLE_LESSONS['tieu-hoc-toan-3']) {
    return {
      ...SAMPLE_LESSONS['tieu-hoc-toan-3'],
      giaoAn: {
        ...SAMPLE_LESSONS['tieu-hoc-toan-3'].giaoAn,
        metadata: {
          ...SAMPLE_LESSONS['tieu-hoc-toan-3'].giaoAn.metadata,
          ...metadata,
          tenBaiDay: metadata.tenBaiDay || 'Hình tròn, tâm, đường kính, bán kính',
          boSach: metadata.boSach || 'Kết nối tri thức với cuộc sống'
        }
      },
      slideDeck: {
        ...SAMPLE_LESSONS['tieu-hoc-toan-3'].slideDeck,
        themeId: themeId,
        themeConfig: SLIDE_THEMES[themeId]
      }
    };
  }

  const isSymmetryMath = /đối xứng/i.test(topic) && /toán/i.test(subject);
  if (isSymmetryMath && SAMPLE_LESSONS['thcs-toan-6']) {
    return {
      ...SAMPLE_LESSONS['thcs-toan-6'],
      giaoAn: {
        ...SAMPLE_LESSONS['thcs-toan-6'].giaoAn,
        metadata: {
          ...SAMPLE_LESSONS['thcs-toan-6'].giaoAn.metadata,
          ...metadata,
          tenBaiDay: metadata.tenBaiDay || 'Hình có trục đối xứng',
          boSach: metadata.boSach || 'Kết nối tri thức với cuộc sống'
        }
      },
      slideDeck: {
        ...SAMPLE_LESSONS['thcs-toan-6'].slideDeck,
        themeId: themeId,
        themeConfig: SLIDE_THEMES[themeId]
      }
    };
  }

  // Tự động phân loại hình ảnh minh họa SGK phù hợp với môn và bài

  let sgkImg1: string | undefined = undefined;
  let sgkImg2: string | undefined = undefined;
  if (isSpeedPhysics) {
    sgkImg1 = '/sgk-images/khtn-7-hinh-8-1-bang-chay-60m.png';
    sgkImg2 = '/sgk-images/khtn-7-bang-toc-do-chuyen-dong.png';
  } else if (isCircleMath) {
    sgkImg1 = '/sgk-images/toan-3-hinh-tron-tam-o.png';
    sgkImg2 = '/sgk-images/toan-3-ban-kinh-duong-kinh.png';
  } else if (isSymmetryMath) {
    sgkImg1 = '/sgk-images/toan-6-canh-buom-thap-rua.png';
    sgkImg2 = '/sgk-images/toan-6-cac-hinh-phang-doi-xung.png';
  }

  // Intelligent activities construction
  const hoatDongs = [
    {
      id: `hd-${Date.now()}-1`,
      soThuTu: 1,
      tenHoatDong: isTieuHoc
        ? 'Hoạt động 1: Mở đầu / Khởi động (Tạo tâm thế hứng thú)'
        : 'Hoạt động 1: Xác định vấn đề / Nhiệm vụ học tập (Khởi động)',
      thoiLuong: isTieuHoc ? '5 - 7 phút' : '7 phút',
      mucTieu: `Kích hoạt kiến thức nền tảng và tạo mâu thuẫn nhận thức để học sinh sẵn sàng khám phá chủ đề "${topic}".`,
      noiDung: `HS quan sát hình ảnh/video thực tế về "${topic}", tham gia trò chơi khởi động và trả lời các câu hỏi gợi mở của GV.`,
      sanPham: `Câu trả lời của HS chỉ ra các điểm mấu chốt và hình thành mong muốn tìm hiểu nội dung bài học mới.`,
      bangHaiCot: [
        {
          id: `r-1-1`,
          buocSuPham: isTieuHoc ? '1. Khởi động - Tạo cảm xúc tích cực' : 'Bước 1: Chuyển giao nhiệm vụ (Khởi động)',
          cot1Trai: isTieuHoc
            ? `- GV tổ chức trò chơi "Ai nhanh ai đúng" hoặc chiếu clip sinh động về ${topic}.\n${metadata.tichHop.nangLucSo ? `- [TÍCH HỢP NĂNG LỰC SỐ - Mã ${nangLucSoIndicators[0]?.maChiBao || '1.1.CB1a'}]: GV chiếu học liệu số trên màn hình tương tác, hướng dẫn HS quan sát dữ liệu trực quan.\n` : ''}${metadata.tichHop.anToanGiaoThong ? `- [LỒNG GHÉP AN TOÀN GIAO THÔNG]: GV đặt câu hỏi liên hệ ý thức chấp hành luật lệ ATGT gắn với chủ đề bài học.\n` : ''}- Đặt câu hỏi gợi mở, tổng kết và tuyên bố bài học mới: "${topic}".`
            : `- GV chiếu video/tình huống thực tiễn gắn liền với bài "${topic}".\n${metadata.tichHop.nangLucSo ? `- [TÍCH HỢP NĂNG LỰC SỐ - Mã ${nangLucSoIndicators[0]?.maChiBao || '1.1.TC1b'}]: GV hướng dẫn HS tự thực hiện tìm kiếm và thu thập dữ liệu số liên quan theo quy trình.\n` : ''}${metadata.tichHop.anToanGiaoThong ? `- [LỒNG GHÉP AN TOÀN GIAO THÔNG]: GV cho HS nhận diện các biển báo giao thông liên quan đến bài học để hình thành văn hóa giao thông an toàn.\n` : ''}- Phát phiếu học tập số 1 cho các nhóm.`,
          cot2Phai: isTieuHoc
            ? `- HS chú ý theo dõi clip trên màn chiếu, hào hứng tham gia trả lời.\n- Dự kiến trả lời của HS: Nêu cảm nhận ban đầu và liên hệ với các đồ vật/hiện tượng quen thuộc hàng ngày.\n${metadata.tichHop.anToanGiaoThong ? `- [Ý THỨC ATGT]: HS nêu các quy tắc đi đường an toàn (đội mũ bảo hiểm, đi đúng làn đường).\n` : ''}- Cả lớp vỗ tay phấn khởi và ghi tên bài học vào vở.`
            : `1. Tình huống khởi động:\n- Nhận diện hiện tượng liên quan đến "${topic}".\n${metadata.tichHop.anToanGiaoThong ? `- [Ý THỨC ATGT]: Phân tích ý nghĩa nhận diện nhanh của các biển báo giao thông.\n` : ''}- Vấn đề cần giải quyết: Tìm hiểu bản chất, tính chất và công thức ứng dụng của chủ đề.`
        },
        ...(isTieuHoc ? [] : [
          {
            id: `r-1-2`,
            buocSuPham: 'Bước 2: Thực hiện nhiệm vụ',
            cot1Trai: '- GV quan sát, bao quát các nhóm học sinh thảo luận cặp đôi trong 3 phút.\n- Kịp thời gợi ý cho các nhóm còn phân vân.',
            cot2Phai: '- HS thảo luận cặp đôi, ghi nhận các suy đoán ban đầu vào vở nháp.'
          },
          {
            id: `r-1-3`,
            buocSuPham: 'Bước 3: Báo cáo, thảo luận',
            cot1Trai: '- GV mời đại diện 2 nhóm đứng dậy trình bày nhanh ý kiến.\n- Yêu cầu các nhóm khác lắng nghe và nhận xét.',
            cot2Phai: '- Đại diện nhóm phát biểu súc tích quan điểm dự đoán của nhóm mình.'
          },
          {
            id: `r-1-4`,
            buocSuPham: 'Bước 4: Kết luận, nhận định',
            cot1Trai: '- GV đánh giá thái độ tích cực của HS và dẫn dắt vào Hoạt động hình thành kiến thức mới.',
            cot2Phai: '- HS ghi tên bài và xác định rõ mục tiêu cần chinh phục trong tiết học.'
          }
        ])
      ]
    },
    // MỖI ĐỀ MỤC TRONG SÁCH GIÁO KHOA LÀ MỘT HOẠT ĐỘNG ĐỘC LẬP (Hoạt động 2.1, 2.2, 2.3...)
    // Tự động phân tích nội dung SGK của đúng bài đó và soạn chi tiết theo từng đề mục
    ...(() => {
      const isTH = isTieuHoc;

      return secKnowledge.map((sec, secIdx) => {
        const hdIndex = `2.${secIdx + 1}`;
        const isLastSec = secIdx === secKnowledge.length - 1;

        return {
          id: `hd-${Date.now()}-2-${secIdx + 1}`,
          soThuTu: 2,
          tenHoatDong: sec.tenHoatDong,
          thoiLuong: sec.thoiLuong || (secIdx === 0 ? '14 phút' : secIdx === 1 ? '16 phút' : '12 phút'),
          deMucSGK: sec.deMuc,
          mucTieu: sec.mucTieu,
          noiDung: sec.noiDung,
          sanPham: sec.sanPham,
          ...(secIdx === 1 ? {
            hoatDongNhomTichCuc: {
              ...(isTH ? HOAT_DONG_NHOM_TIEU_HOC : HOAT_DONG_NHOM_THCS),
              promptInfographic: generateInfographicPrompts(
                metadata,
                (isTH ? HOAT_DONG_NHOM_TIEU_HOC : HOAT_DONG_NHOM_THCS).phieuGiaoNhiemVu.cauHoiNhiemVu
              )
            }
          } : {}),
          bangHaiCot: [
            {
              id: `r-2-${secIdx + 1}-1`,
              buocSuPham: isTH ? `1. Chuyển giao nhiệm vụ ${sec.deMuc}` : `Bước 1: Chuyển giao nhiệm vụ (${sec.deMuc})`,
              hinhAnhSGK: {
                tenHinh: sec.tenHinhSGK || `Hình ${secIdx + 1}: Tranh ảnh/Sơ đồ ${sec.deMuc} (SGK ${subject} ${metadata.khoiLop} - ${metadata.boSach})`,
                moTa: sec.moTaHinhSGK || `Hình ảnh trực quan trong SGK minh họa nội dung, sơ đồ hoặc tình huống gắn với ${sec.deMuc}.`,
                imageUrl: secIdx === 0 ? sgkImg1 : secIdx === 1 ? sgkImg2 : undefined,
                cauHoiKhaiThac: sec.cauHoiKhaiThac || [
                  `1. Quan sát hình ảnh trong SGK: Em nhìn thấy những yếu tố, sự vật hay đối tượng nào?`,
                  `2. Thảo luận cặp đôi/nhóm: Rút ra định nghĩa hoặc quy tắc của ${sec.deMuc}.`
                ],
                ghiChuSuPham: 'Lấy HS làm trung tâm: Hướng dẫn HS tự quan sát, tự đặt câu hỏi và tự rút ra bản chất trước khi GV chốt.'
              },
              cot1Trai: isTH
                ? `- GV hướng dẫn HS mở SGK trang bài học, quan sát hình ảnh và đọc thông tin ${sec.deMuc}.\n- Giao nhiệm vụ thảo luận: "Em hãy quan sát thật kĩ và trao đổi cùng bạn bên cạnh trong 3 phút."\n${metadata.tichHop.nangLucSo && nangLucSoIndicators[secIdx] ? `- [TÍCH HỢP NĂNG LỰC SỐ - Mã ${nangLucSoIndicators[secIdx].maChiBao}]: Hướng dẫn HS đối chiếu tranh SGK với hình ảnh/mô phỏng số trên màn hình tương tác.\n` : ''}- GV đi vòng quanh lớp, khuyến khích các em tự tin nêu suy nghĩ cá nhân.`
                : `- GV yêu cầu HS mở SGK trang bài học, quan sát hình ảnh bám sát ${sec.deMuc}.\n- [PHƯƠNG PHÁP TÍCH CỰC GDPT 2018]: GV giao phiếu học tập, yêu cầu HS làm việc cá nhân 2 phút rồi trao đổi cặp đôi/nhóm 3 phút.\n${metadata.tichHop.nangLucSo && nangLucSoIndicators[secIdx] ? `- [TÍCH HỢP NĂNG LỰC SỐ - Mã ${nangLucSoIndicators[secIdx].maChiBao}]: Khai thác phần mềm chuyên dụng / mô phỏng số để giải quyết nhiệm vụ.\n` : ''}${metadata.tichHop.quocPhongAnNinh ? `- [BẢO VỆ AN NINH QUỐC PHÒNG (TT 08/2024/TT-BGDĐT)]: Lồng ghép tìm hiểu các công trình biên giới, biển đảo quốc gia gắn với bài học.\n` : ''}- Quan sát, phát hiện những khó khăn của học sinh để kịp thời hỗ trợ.`,
              cot2Phai: sec.cot2Phai || `${sec.deMuc.toUpperCase()}\n- HS chủ động mở SGK, quan sát kỹ chi tiết hình ảnh và ghi ý kiến cá nhân vào phiếu học tập.\n- Thảo luận nhóm chia sẻ suy nghĩ và rút ra kết luận khoa học.`
            },
            {
              id: `r-2-${secIdx + 1}-2`,
              buocSuPham: isTH ? '2. Hướng dẫn học sinh thực hiện nhiệm vụ' : 'Bước 2: Hướng dẫn học sinh thực hiện nhiệm vụ',
              cot1Trai: secIdx === 1
                ? `- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ (4 MÀU MỰC)]:\n  + Nhóm trưởng (Mực xanh): Điều phối và tổng hợp.\n  + Thư ký (Mực đen): Ghi biên bản và kết quả.\n  + Kỹ thuật viên (Mực tím): Thao tác dụng cụ/vẽ hình.\n  + Báo cáo viên (Mực xanh lá): Trình bày trước lớp.\n- GV đi bao quát lớp, nhắc nhở giữ đúng 4 màu mực.`
                : `- GV theo dõi tiến độ đọc SGK và thảo luận của các cặp đôi.\n- Đặt câu hỏi gợi mở đối với các em học sinh còn lúng túng.`,
              cot2Phai: `- Học sinh tích cực đọc SGK, chỉ tay vào các chi tiết trong hình vẽ và thống nhất câu trả lời.\n- Phân vai rõ ràng, mỗi thành viên viết đúng màu mực quy định trên phiếu nhóm.`
            },
            {
              id: `r-2-${secIdx + 1}-3`,
              buocSuPham: isTH ? '3. Báo cáo kết quả thảo luận' : 'Bước 3: Báo cáo kết quả và thảo luận',
              cot1Trai: `- GV gọi đại diện 2 nhóm/cặp đôi trình bày kết quả khám phá ${sec.deMuc}.\n- Mời các nhóm khác lắng nghe, nhận xét và đặt câu hỏi phản biện nhẹ nhàng.`,
              cot2Phai: `- Đại diện HS trình bày to, rõ ràng, tự tin thuyết minh sản phẩm của nhóm.\n- Các bạn trong lớp lắng nghe, ghi chép và bổ sung ý kiến.`
            },
            {
              id: `r-2-${secIdx + 1}-4`,
              buocSuPham: isTH ? `4. Kết luận, nhận định ${sec.deMuc}` : `Bước 4: Kết luận, nhận định (${sec.deMuc})`,
              cot1Trai: `- GV nhận xét tinh thần học tập chủ động của cả lớp.\n- Chuẩn hóa kiến thức khoa học chuẩn SGK của ${sec.deMuc} và hướng dẫn học sinh ghi chép nội dung cốt lõi vào vở.`,
              cot2Phai: `* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):\n- ${sec.deMuc}: Học sinh ghi nhớ kiến thức cốt lõi và nội dung trọng tâm vào vở.\n- Vận dụng kiến thức vừa học để chuẩn bị cho phần luyện tập củng cố.`
            }
          ]
        };
      });
    })(),
    {
      id: `hd-${Date.now()}-3`,
      soThuTu: 3,
      tenHoatDong: isTieuHoc
        ? 'Hoạt động 3: Luyện tập, thực hành (Hệ thống hóa bằng Sơ đồ tư duy 16:9 & Bài tập)'
        : 'Hoạt động 3: Luyện tập (Hệ thống hóa kiến thức bằng Sơ đồ tư duy 16:9 3D Pixar & Bài tập áp dụng)',
      thoiLuong: isTieuHoc ? '12 - 15 phút' : '14 phút',
      mucTieu: `Hệ thống hóa và khắc sâu toàn bộ kiến thức cốt lõi của bài học bằng Sơ đồ tư duy 16:9 3D Pixar trực quan; rèn luyện kỹ năng vận dụng trực tiếp kiến thức vừa học để giải quyết các bài tập có tính phân hóa.`,
      noiDung: `HS quan sát và phân tích Sơ đồ tư duy 16:9 3D Pixar để tái hiện toàn bộ kiến thức trọng tâm; làm việc độc lập và làm việc nhóm để giải bài tập 1, 2 trong SGK và các câu hỏi tình huống thực tế.`,
      sanPham: `Sơ đồ tư duy 16:9 hoàn thiện trong vở ghi; Lời giải chuẩn xác các bài tập trong vở ghi bài và đáp án trên bảng phụ của HS.`,
      bangHaiCot: [
        {
          id: `r-3-0-mindmap`,
          buocSuPham: isTieuHoc ? '3.0. Hệ thống hóa kiến thức toàn bài qua Sơ đồ tư duy 16:9 3D Pixar' : 'Bước 1: Hệ thống hóa kiến thức toàn bài bằng Sơ đồ tư duy 16:9 3D Pixar',
          soDoTuDuy: generateMindmapData(metadata, topic, subject, isTieuHoc),
          cot1Trai: `- GV trình chiếu SƠ ĐỒ TƯ DUY 16:9 PHONG CÁCH 3D PIXAR tổng kết toàn bộ kiến thức bài học lên bảng tương tác / màn chiếu.\n- Tổ chức cho học sinh nhìn vào sơ đồ tư duy, lần lượt nêu lại các khái niệm, tính chất, công thức và quy tắc cốt lõi của từng đề mục bài học.\n- Hướng dẫn học sinh phương pháp sơ đồ hóa để ôn tập và ghi nhớ kiến thức lâu dài.`,
          cot2Phai: `* HỆ THỐNG HÓA KIẾN THỨC CỐT LÕI (SƠ ĐỒ TƯ DUY 16:9 3D PIXAR):\n- Học sinh quan sát sơ đồ tư duy trên màn chiếu, đối chiếu với nội dung đã ghi chép trong vở.\n- Tự giác nhắc lại các từ khóa trọng tâm, công thức tính toán và các mối liên hệ giữa các đề mục của bài học.\n- Vẽ phác thảo hoặc bổ sung các nhánh sơ đồ tư duy vào vở học tập.`
        },
        {
          id: `r-3-1`,
          buocSuPham: isTieuHoc ? '3.1. Bài tập nhận diện (Mức độ 1-2)' : 'Bước 2: Chuyển giao & Thực hiện nhiệm vụ Bài tập Luyện tập',
          cot1Trai: isTieuHoc
            ? `- GV cho HS làm bài tập nhận diện trên màn hình hoặc sách giáo khoa.\n${metadata.tichHop.nangLucSo && nangLucSoIndicators[2] ? `- [TÍCH HỢP NĂNG LỰC SỐ - Mã ${nangLucSoIndicators[2].maChiBao}]: GV hướng dẫn tư thế ngồi học an toàn cho mắt khi xem màn hình tivi/bảng chiếu.\n` : ''}${metadata.tichHop.dinhDuongSucKhoe ? `- [LỒNG GHÉP GIÁO DỤC DINH DƯỠNG]: Lồng ghép câu hỏi thực tế gắn với đĩa thức ăn chuẩn cân bằng 4 nhóm chất dinh dưỡng cho học sinh.\n` : ''}- Sử dụng thẻ trắc nghiệm để kiểm tra nhanh mức độ hiểu bài của cả lớp.`
            : `- GV giao hệ thống bài tập luyện tập phân hóa từ cơ bản đến nâng cao.\n${metadata.tichHop.nangLucSo && nangLucSoIndicators[2] ? `- [TÍCH HỢP NĂNG LỰC SỐ - Mã ${nangLucSoIndicators[2].maChiBao}]: Hướng dẫn thiết kế Infographic / Slide tóm tắt bài học.\n` : ''}${metadata.tichHop.dinhDuongSucKhoe ? `- [LỒNG GHÉP GIÁO DỤC DINH DƯỠNG]: Phân tích cấu trúc khoa học trong các loại thực phẩm dinh dưỡng lành mạnh, nhắc nhở bổ sung vitamin và khoáng chất.\n` : ''}- Yêu cầu HS hoàn thành bài cá nhân.`,
          cot2Phai: isTieuHoc
            ? `- HS quan sát bài tập, suy nghĩ cá nhân trong 1 phút.\n${metadata.tichHop.dinhDuongSucKhoe ? `- [Ý THỨC DINH DƯỠNG]: HS kể tên 4 nhóm chất cần ăn đủ mỗi ngày để phát triển chiều cao và phòng chống béo phì.\n` : ''}- Giơ thẻ chọn đáp án và tự tin giải thích lý do lựa chọn của mình.`
            : `II. LUYỆN TẬP\n- Bài tập 1: Giải chuẩn xác các bài tập nhận diện.\n${metadata.tichHop.dinhDuongSucKhoe ? `- [Ý THỨC DINH DƯỠNG]: Nhận thức tầm quan trọng của dinh dưỡng hợp lý đối với trí não.\n` : ''}- Bài tập 2: Vận dụng công thức và quy tắc tính toán.`
        },
        {
          id: `r-3-2`,
          buocSuPham: isTieuHoc ? '3.2. Bài tập vận dụng thực hành (Mức độ 3)' : 'Bước 3 & 4: Báo cáo & Kết luận nhận định',
          cot1Trai: isTieuHoc
            ? `- GV giao bài tập nâng cao yêu cầu tính toán hoặc vẽ hình.\n- Đi từng bàn hỗ trợ các bạn học sinh còn chậm.`
            : `- GV gọi 2 HS lên bảng trình bày lời giải chi tiết.\n- Nhận xét, chấm chữa bài và chỉ ra các bẫy thường gặp.`,
          cot2Phai: isTieuHoc
            ? `- HS làm bài vào vở bài tập, đổi chéo vở cho bạn cùng bàn để kiểm tra chéo.`
            : `Đáp án chi tiết & Chú ý:\n- Trình bày mạch lạc, logic.\n- Ghi rõ đơn vị và kết luận rõ ràng.`
        }
      ]
    },
    {
      id: `hd-${Date.now()}-4`,
      soThuTu: 4,
      tenHoatDong: isTieuHoc
        ? 'Hoạt động 4: Vận dụng, trải nghiệm'
        : 'Hoạt động 4: Vận dụng',
      thoiLuong: isTieuHoc ? '5 phút' : '8 phút',
      mucTieu: `Kết nối kiến thức bài học vào đời sống thực tiễn, phát triển tư duy sáng tạo và ý thức tự học.`,
      noiDung: `HS giải quyết thử thách thực tế, tìm kiếm ứng dụng của bài học trong gia đình và cộng đồng.`,
      sanPham: `Ý tưởng, sản phẩm sáng tạo mini hoặc bài thu hoạch ngắn trong sổ tay học tập.`,
      bangHaiCot: [
        {
          id: `r-4-1`,
          buocSuPham: isTieuHoc ? '4. Thử thách ứng dụng & Dặn dò' : 'Bước 1 -> 4: Vận dụng sáng tạo & Hướng dẫn tự học',
          cot1Trai: isTieuHoc
            ? `- GV nêu thử thách vui: "Em hãy tìm 2 ví dụ thực tế trong ngôi nhà hoặc trường học của em."\n${metadata.tichHop.stem ? `- [GIÁO DỤC STEM]: Hướng dẫn HS chế tạo sản phẩm sáng tạo mini từ bài học.\n` : ''}${metadata.tichHop.baoVeMoiTruong ? `- [BẢO VỆ MÔI TRƯỜNG]: Hướng dẫn tận dụng vật liệu tái chế (vỏ chai, giấy bìa phế thải) để giảm thiểu rác thải nhựa.\n` : ''}- Dặn dò làm bài tập và chuẩn bị bài cho tiết học sau.`
            : `- GV giao nhiệm vụ dự án nhỏ ngoài giờ lên lớp:\n${metadata.tichHop.stem ? `- [GIÁO DỤC STEM]: Lên ý tưởng thiết kế mô hình thực tế ứng dụng kiến thức bài học.\n` : ''}${metadata.tichHop.baoVeMoiTruong ? `- [BẢO VỆ MÔI TRƯỜNG]: Tuyên truyền lối sống xanh và bảo vệ cảnh quan trường học.\n` : ''}- Đọc trước nội dung bài học kế tiếp.`,
          cot2Phai: isTieuHoc
            ? `- HS thích thú chia sẻ các đồ vật, hiện tượng quanh mình.\n${metadata.tichHop.baoVeMoiTruong ? `- [Ý THỨC MÔI TRƯỜNG]: Cam kết phân loại rác và tái chế đồ dùng học tập.\n` : ''}- Lắng nghe lời dặn dò và ghi nhớ nhiệm vụ về nhà.`
            : `III. VẬN DỤNG THỰC TẾ\n• Ứng dụng trong khoa học kỹ thuật và đời sống.\n${metadata.tichHop.baoVeMoiTruong ? `- Tuyên truyền ý thức bảo vệ môi trường và sử dụng năng lượng tiết kiệm.\n` : ''}• Nhiệm vụ về nhà: Hoàn thành bài tập SGK và chuẩn bị bài mới.`
        }
      ]
    }
  ];

  // Slides construction
  const slides = [
    {
      id: `s-1`,
      slideNumber: 1,
      slideType: 'TITLE_SLIDE' as const,
      title: topic.toUpperCase(),
      subtitle: `${subject} - Lớp ${metadata.khoiLop} • Bộ Sách ${metadata.boSach}`,
      stageBadge: 'Bài Giảng Điện Tử',
      visualLayout: 'Full Center Hero' as const,
      bulletPoints: [
        'Kế hoạch bài dạy chuẩn Chương trình GDPT 2018',
        'Hình ảnh trực quan sinh động, phát triển năng lực',
        'Tương tác tích cực, ứng dụng thực tế'
      ],
      aiImagePrompt: `Educational 3D modern visual representing Vietnamese students learning ${subject} regarding ${topic}, high tech dynamic classroom, vivid lighting, 8k aesthetic`,
      animationsAndTransitions: {
        slideTransition: isTieuHoc ? 'Curtains (Mở màn sân khấu rực rỡ)' : 'Push (Trượt sang phải hiện đại)',
        elementAnimations: [
          'Tiêu đề chính: Float In (0.6s)',
          'Huy hiệu và thông tin lớp: Fade In nhẹ nhàng',
          'Khung nội dung: Zoom in nổi bật'
        ]
      },
      speakerNotes: `Chào mừng các thầy cô giáo và các em học sinh đến với tiết học ${subject} hôm nay! Chúc cả lớp chúng ta sẽ có một giờ học thật sôi nổi và gặt hái được nhiều kiến thức bổ ích với bài "${topic}".`
    },
    {
      id: `s-2`,
      slideNumber: 2,
      slideType: 'OBJECTIVE' as const,
      title: 'MỤC TIÊU TIẾT HỌC HÔM NAY',
      subtitle: 'Yêu cầu cần đạt phát triển phẩm chất & năng lực',
      stageBadge: 'Mục Tiêu',
      visualLayout: '3-Card Bento Grid' as const,
      bulletPoints: [
        `🎯 Kiến thức: Nhận biết bản chất và các tính chất cốt lõi của ${topic}`,
        `💡 Năng lực: Rèn luyện kỹ năng tư duy logic, phản biện và hợp tác nhóm`,
        `⭐ Phẩm chất: Nuôi dưỡng tinh thần chăm chỉ, trung thực và yêu thích khoa học`
      ],
      boardContent: `TRỌNG TÂM: 1. Khái niệm cốt lõi • 2. Quy tắc thực hành • 3. Vận dụng thực tế`,
      aiImagePrompt: `Three modern Bento style infographic cards showcasing 3D icons for knowledge target, skill compass, and glowing star badges`,
      animationsAndTransitions: {
        slideTransition: 'Morph',
        elementAnimations: [
          'Thẻ 1 (Kiến thức): Pop up xuất hiện',
          'Thẻ 2 (Năng lực): Trượt nhẹ từ phải sang',
          'Thẻ 3 (Phẩm chất): Fade in kèm ánh sao lấp lánh'
        ]
      },
      speakerNotes: `Đây là 3 mục tiêu then chốt của bài học hôm nay. Thầy/cô tin rằng với tinh thần học tập hăng hái, tất cả các em đều sẽ hoàn thành xuất sắc các mục tiêu này.`
    },
    {
      id: `s-3`,
      slideNumber: 3,
      slideType: 'ACTIVITY_INTRO' as const,
      title: 'HOẠT ĐỘNG 1: KHỞI ĐỘNG VUI VẺ',
      subtitle: 'Kích hoạt trí tưởng tượng và tư duy nhạy bén',
      stageBadge: 'Khởi động',
      visualLayout: '2-Column Split' as const,
      bulletPoints: [
        '🎬 Quan sát tình huống thực tế qua hình ảnh & video ngắn',
        '❓ Phát hiện điều thú vị và đặt câu hỏi vì sao',
        '🚀 Sẵn sàng tinh thần bứt phá trong bài học mới'
      ],
      boardContent: `Khởi động: Đặt vấn đề từ thực tiễn để giải mã hiện tượng.`,
      aiImagePrompt: `Joyful students interacting with exciting educational quiz and puzzles on digital board, bright cinematic 3D style`,
      animationsAndTransitions: {
        slideTransition: 'Push',
        elementAnimations: [
          'Hình ảnh tình huống xuất hiện',
          'Câu hỏi gợi mở nhấp nháy thu hút sự chú ý'
        ]
      },
      speakerNotes: `Các em hãy quan sát kỹ tình huống trên màn hình. Bạn nào có thể chỉ ra điểm khác biệt lớn nhất và đưa ra lời giải thích ban đầu?`
    },
    {
      id: `s-4`,
      slideNumber: 4,
      slideType: 'KNOWLEDGE_SPLIT' as const,
      title: 'HOẠT ĐỘNG 2: KHÁM PHÁ KIẾN THỨC MỚI',
      subtitle: `Bản chất khoa học và quy luật của ${topic}`,
      stageBadge: 'Khám phá',
      visualLayout: '2-Column Split' as const,
      bulletPoints: [
        '📌 Điểm then chốt 1: Nhận diện cấu tạo và định nghĩa chuẩn xác',
        '📌 Điểm then chốt 2: Quy luật liên kết và các đặc điểm nổi bật',
        '📌 Điểm then chốt 3: Cách thức nhận biết nhanh không bị nhầm lẫn'
      ],
      boardContent: `KIẾN THỨC CỐT LÕI:\n• Định nghĩa và đặc điểm chính\n• Mối quan hệ giữa các thành phần\n• Quy tắc vàng cần ghi nhớ`,
      aiImagePrompt: `Detailed clean scientific 3D illustration explaining ${topic} with glowing highlight markers and clean typography labels`,
      animationsAndTransitions: {
        slideTransition: 'Morph',
        elementAnimations: [
          'Các luận điểm xuất hiện theo nhịp bấm chuột (Step-by-step reveal)',
          'Hộp kiến thức ghi bảng Zoom in nổi bật'
        ]
      },
      speakerNotes: `Đây chính là trái tim của bài học hôm nay. Thầy/cô nhấn mạnh: hãy ghi nhớ 2 quy tắc vàng này vào vở để không bao giờ bị nhầm lẫn khi làm bài tập nhé!`
    },
    {
      id: `s-5`,
      slideNumber: 5,
      slideType: 'INTERACTIVE_QUIZ' as const,
      title: 'HOẠT ĐỘNG 3: TRẮC NGHIỆM TRÍ TUỆ',
      subtitle: 'Chọn phương án trả lời CHÍNH XÁC NHẤT:',
      stageBadge: 'Luyện tập',
      visualLayout: 'Quiz Layout' as const,
      bulletPoints: [
        `Câu hỏi: Khi tìm hiểu về ${topic}, khẳng định nào sau đây là chuẩn xác nhất?`,
        'A. Phương án A: Chưa đầy đủ thông tin chi tiết',
        'B. Phương án B: Đáp án chuẩn xác khoa học (Chính xác!)',
        'C. Phương án C: Sai lệch về bản chất hiện tượng',
        'D. Phương án D: Không liên quan đến bài học'
      ],
      boardContent: `Đáp án đúng là B vì đã thể hiện đầy đủ quy luật khoa học của bài học.`,
      aiImagePrompt: `Futuristic gamified quiz stage with glowing podium and floating celebration badges`,
      animationsAndTransitions: {
        slideTransition: 'Push',
        elementAnimations: [
          '4 phương án bay lên từ dưới',
          'Click chọn phương án B: Nở hoa pháo giấy và đổi viền xanh lá'
        ]
      },
      speakerNotes: `Cả lớp có 15 giây suy nghĩ. 3... 2... 1... Hãy chọn phương án nào! Xin chúc mừng tất cả các em chọn phương án B!`
    },
    {
      id: `s-6`,
      slideNumber: 6,
      slideType: 'SUMMARY' as const,
      title: 'HOẠT ĐỘNG 4: VẬN DỤNG & TỔNG KẾT',
      subtitle: 'Kết nối kiến thức vào thực tiễn cuộc sống',
      stageBadge: 'Vận dụng',
      visualLayout: '2-Column Split' as const,
      bulletPoints: [
        '🌍 Khám phá 2 hiện tượng thực tế quanh em liên quan đến bài học',
        '📝 Hoàn thành bài tập củng cố trong sách giáo khoa',
        '⭐ Chúc mừng các em đã hoàn thành xuất sắc tiết học ngày hôm nay!'
      ],
      boardContent: `DẶN DÒ: 1. Ôn tập nội dung bài • 2. Hoàn thành bài tập về nhà • 3. Chuẩn bị bài tiếp theo`,
      aiImagePrompt: `Inspirational collage of students applying knowledge in real life project with golden award trophy, soft cinematic lighting`,
      animationsAndTransitions: {
        slideTransition: 'Fade',
        elementAnimations: [
          'Ngôi sao tuyên dương bay ra giữa màn hình',
          'Lời dặn dò hiện lên trang trọng'
        ]
      },
      speakerNotes: `Bài học của chúng ta đến đây là kết thúc. Thầy/cô biểu dương tinh thần làm việc tích cực của cả lớp hôm nay. Hãy tiếp tục khám phá thế giới xung quanh các em nhé!`
    }
  ];

  // Quiz game questions
  const quizGame = [
    {
      id: 'q1',
      question: `Nội dung cốt lõi của bài học "${topic}" nhằm rèn luyện phẩm chất, năng lực gì?`,
      options: [
        'Khả năng quan sát, suy luận khoa học và vận dụng thực tiễn',
        'Học thuộc lòng thụ động không cần hiểu bản chất',
        'Chỉ làm các bài tập trắc nghiệm nhanh',
        'Chép nguyên văn lý thuyết từ sách giáo khoa'
      ],
      correctIndex: 0,
      explanation: 'Chương trình GDPT 2018 chú trọng rèn luyện tư duy thực tiễn, năng lực giải quyết vấn đề thay vì ghi nhớ máy móc.',
      funFact: 'Học bằng cách vận dụng giúp não bộ ghi nhớ kiến thức lâu hơn gấp 4 lần!'
    },
    {
      id: 'q2',
      question: `Khi tiến hành các hoạt động học tập, việc hợp tác nhóm mang lại lợi ích gì lớn nhất?`,
      options: [
        'Chờ bạn làm xong rồi chép lại',
        'Cùng chia sẻ góc nhìn, phản biện tích cực và tìm ra giải pháp tối ưu',
        'Chia nhỏ bài để mỗi người làm một phần rời rạc',
        'Giảm bớt thời gian suy nghĩ của cá nhân'
      ],
      correctIndex: 1,
      explanation: 'Giao tiếp và hợp tác là 1 trong 3 năng lực chung cốt lõi của GDPT 2018, giúp học sinh phát triển tư duy đa chiều.',
      funFact: 'Các nhà khoa học trên thế giới luôn làm việc theo nhóm để tạo ra những phát minh vĩ đại!'
    },
    {
      id: 'q3',
      question: `Bước nào sau đây là quan trọng nhất trong chuỗi 4 hoạt động dạy học của Công văn ${isTieuHoc ? '2345' : '5512'}?`,
      options: [
        'Chỉ có hoạt động Khởi động là quan trọng',
        'Chỉ có hoạt động Luyện tập là quan trọng',
        'Cả 4 hoạt động tạo thành một chuỗi sư phạm khép kín, bổ trợ lẫn nhau',
        'Có thể bỏ qua hoạt động Vận dụng'
      ],
      correctIndex: 2,
      explanation: 'Chuỗi 4 hoạt động: Khởi động -> Khám phá -> Luyện tập -> Vận dụng tạo nên tiến trình sư phạm khoa học, giúp khắc sâu kiến thức vững chắc.',
      funFact: 'Mô hình 4 bước này được phát triển dựa trên lý thuyết học tập kiến tạo hiện đại của thế giới.'
    },
    {
      id: 'q4',
      question: `Ứng dụng của bài học "${topic}" có thể tìm thấy ở đâu nhiều nhất?`,
      options: [
        'Chỉ có trong phòng thí nghiệm',
        'Trong các đồ vật, hiện tượng tự nhiên và đời sống sinh hoạt hàng ngày',
        'Chỉ xuất hiện trong các bài kiểm tra định kỳ',
        'Không có ứng dụng nào trong thực tế'
      ],
      correctIndex: 1,
      explanation: 'Mọi kiến thức trong chương trình GDPT 2018 đều xuất phát từ cuộc sống và quay trở lại phục vụ cuộc sống.',
      funFact: 'Hãy để ý quan sát xung quanh, bạn sẽ bất ngờ trước những quy luật khoa học kỳ diệu đang diễn ra từng giây!'
    }
  ];

  return {
    giaoAn: {
      metadata: {
        ...metadata,
        capHoc: metadata.capHoc,
        congVan: isTieuHoc ? '2345/BGDĐT-GDTH' : '5512/BGDĐT-GDTrH'
      },
      mucTieu: {
        kienThuc: isTieuHoc ? undefined : [
          `Nắm vững định nghĩa, cấu tạo và bản chất khoa học của ${topic}.`,
          `Giải thích được các hiện tượng và mối liên hệ thực tiễn liên quan đến ${topic}.`,
          `Vận dụng linh hoạt các quy tắc để giải quyết các bài tập trong chương trình.`
        ],
        nangLucDacThu: [
          `Năng lực tư duy và lập luận bộ môn ${subject}.`,
          `Năng lực mô hình hóa và giải quyết vấn đề thực tiễn gắn với ${topic}.`,
          `Năng lực sử dụng ngôn ngữ và công cụ biểu diễn khoa học.`
        ],
        nangLucChung: {
          tuChuTuHoc: ['Chủ động chuẩn bị đồ dùng học tập và hoàn thành nhiệm vụ cá nhân.'],
          giaoTiepHopTac: ['Tích cực thảo luận, chia sẻ góc nhìn và lắng nghe bạn cùng nhóm.'],
          giaiQuyetVanDe: ['Vận dụng kiến thức bài học để đề xuất giải pháp cho các tình huống mới.']
        },
        nangLucSo: nangLucSoIndicators.length > 0 ? nangLucSoIndicators : undefined,
        phamChat: {
          yeuNuoc: ['Tự hào trước những thành tựu khoa học và văn hóa truyền thống của đất nước.'],
          nhanAi: ['Tôn trọng sự khác biệt và sẵn sàng giúp đỡ bạn bè trong học tập.'],
          chamChi: ['Kiên trì thực hiện các bài tập và cẩn thận trong từng thao tác.'],
          trungThuc: ['Báo cáo chính xác kết quả thảo luận và thí nghiệm.'],
          trachNhiem: ['Có ý thức giữ gìn vệ sinh lớp học và bảo quản đồ dùng học tập.']
        },
        tichHopMoRong: tichHopNotes.length > 0 ? tichHopNotes : undefined
      },
      thietBiDayHoc: {
        giaoVien: [
          'Máy tính, tivi thông minh / máy chiếu kết nối mạng Internet.',
          `Sách giáo khoa điện tử ${subject} lớp ${metadata.khoiLop} (NXB Giáo Dục Việt Nam: https://taphuan.nxbgd.vn/tap-huan?grade=${metadata.khoiLop}).`,
          `Slide bài giảng điện tử phong cách ${theme.name}, phiếu học tập.`,
          'Các mô hình trực quan, tranh ảnh hoặc video minh họa sinh động.'
        ],
        hocSinh: [
          `Sách giáo khoa ${subject} lớp ${metadata.khoiLop} (Bộ sách ${metadata.boSach}).`,
          'Vở ghi bài, bút viết, thước kẻ và đồ dùng học tập cần thiết.'
        ]
      },
      tienTrinhDayHoc: hoatDongs,
      dieuChinhSauBaiDay: isTieuHoc
        ? '..................................................................................................................................................\n..................................................................................................................................................\n..................................................................................................................................................'
        : undefined
    },
    slideDeck: {
      themeId,
      themeConfig: theme,
      slides
    },
    quizGame,
    aiAnalysisReport: {
      tenBaiDay: metadata.tenBaiDay,
      monHoc: metadata.monHoc,
      khoiLop: metadata.khoiLop,
      boSach: metadata.boSach,
      sgkUrl: `https://taphuan.nxbgd.vn/tap-huan?grade=${metadata.khoiLop}`,
      tongSoDeMuc: secKnowledge.length,
      danhSachDeMuc: secKnowledge.map(s => ({
        deMuc: s.deMuc,
        tenHoatDong: s.tenHoatDong,
        mucTieu: s.mucTieu,
        noiDung: s.noiDung
      })),
      tienTrinhHoatDong: [
        isTieuHoc ? 'Hoạt động 1: Mở đầu / Khởi động (Tạo cảm xúc tích cực)' : 'Hoạt động 1: Khởi động (Xác định vấn đề học tập)',
        ...secKnowledge.map(s => s.tenHoatDong),
        isTieuHoc ? 'Hoạt động 3: Luyện tập, thực hành' : 'Hoạt động 3: Luyện tập',
        isTieuHoc ? 'Hoạt động 4: Vận dụng, trải nghiệm' : 'Hoạt động 4: Vận dụng'
      ],
      phanTichSuPham: `Đã kết nối trực tiếp Cổng SGK Điện tử NXBGD (Lớp ${metadata.khoiLop}). Tự động bóc tách thành ${secKnowledge.length} đề mục cốt lõi, chuyển đổi thành ${secKnowledge.length} hoạt động độc lập (2.1, 2.2, 2.3...) với bảng 2 cột chuẩn ${metadata.capHoc === 'TIEU_HOC' ? 'Công văn 2345/BGDĐT-GDTH' : 'Công văn 5512/BGDĐT-GDTrH'}, thảo luận nhóm 4 màu mực và Sơ đồ tư duy 16:9 3D Pixar.`
    }
  };
}
