export type CapHoc = 'TIEU_HOC' | 'THCS';

export type CongVan = '2345/BGDĐT-GDTH' | '5512/BGDĐT-GDTrH';

export type BoSach = 'Kết nối tri thức với cuộc sống' | 'Chân trời sáng tạo' | 'Cánh Diều' | 'Khác / Chung';

export type SlideThemeId = '3d-pixar' | 'modern-stem' | 'creative-art' | 'heroic-inspiring';

export interface SlideThemeConfig {
  id: SlideThemeId;
  name: string;
  description: string;
  capHocRecommended: CapHoc | 'ALL';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  backgroundColor: string;
  cardBg: string;
  textColor: string;
  fontHeading: string;
  fontBody: string;
  sampleBadge: string;
}

export interface LessonMetadata {
  capHoc: CapHoc;
  congVan: CongVan;
  khoiLop: number;
  boSach: BoSach;
  monHoc: string;
  tenBaiDay: string;
  soTiet: string;
  tietTheoPPCT?: string; // Tiết theo Phân phối chương trình (e.g. "Tiết 45" hoặc "Tiết 51, 52")
  thoiLuong: string;
  siSoLop?: string; // e.g. "35 học sinh"
  dacDiemHocSinh?: string; // "Có một số em thụ động, ngại phát biểu, thường phụ thuộc vào bạn học khá"
  tuanThucHien?: string; // e.g. "Tuần 11"
  truong?: string;
  toChuyenMon?: string;
  giaoVien?: string;
  ngayThucHien?: string;
  tichHop: {
    nangLucSo: boolean;
    stem: boolean;
    anToanGiaoThong: boolean;
    kyNangSong: boolean;
    baoVeMoiTruong: boolean;
    quocPhongAnNinh: boolean; // 1. Bảo vệ quốc phòng và an ninh (Thông tư 08/2024/TT-BGDĐT)
    dinhDuongSucKhoe: boolean; // 2. Nội dung dinh dưỡng & sức khỏe học đường
  };
}

export interface BangHaiCotRow {
  id: string;
  buocSuPham: string; // "Bước 1: Chuyển giao nhiệm vụ" or "1. Khởi động"
  cot1Trai: string; // GV (CV 2345) or Hoạt động GV & HS 4 bước (CV 5512)
  cot2Phai: string; // HS (CV 2345) or Dự kiến sản phẩm / Ghi bảng (CV 5512)
  hinhAnhSGK?: HinhAnhSGK; // Hình ảnh SGK nằm TRỰC TIẾP trong dòng hoạt động tìm hiểu đề mục kiến thức đó
  soDoTuDuy?: SoDoTuDuy; // Sơ đồ tư duy 16:9 3D Pixar xuất hiện ĐÚNG CHỖ KIẾN THỨC CẦN KẾT LUẬN!
}

export interface SoDoTuDuyNhanh {
  id: string;
  tieuDe: string; // Tên nhánh chính (không lỗi chính tả tiếng Việt)
  mauSac: string; // Mã màu gradient (e.g. "#2563eb", "#059669", "#d97706", "#db2777", "#7c3aed")
  icon3D: string; // Emoji hoặc 3D icon descriptor (e.g. "🎯", "📏", "📐", "🧪", "🔬", "🦋")
  congThuc?: string; // Chuẩn công thức toán học ($d = 2 \times r$) hoặc IUPAC (e.g. "HCl - Hydrochloric acid", "NaOH - Sodium hydroxide")
  cacYCon: string[]; // Các ý con chi tiết, chuẩn chính tả tiếng Việt
  hinhMinhHoa?: string; // Mô tả ảnh minh họa
}

export interface SoDoTuDuy {
  id: string;
  chuDeChinh: string; // Chủ đề chính ở giữa
  moTaChuDe?: string; // Phụ đề / Ghi chú chuẩn kiến thức
  tiLe: '16:9'; // Chuẩn tỉ lệ 16:9 theo yêu cầu
  phongCach: '3D Pixar'; // Phong cách hoạt hình 3D Pixar
  imageUrl?: string; // Đường dẫn ảnh 16:9 chất lượng cao xuất ra Word và trình chiếu
  promptPixar?: string; // Gợi ý prompt AI 3D Pixar
  danhSachNhanh: SoDoTuDuyNhanh[]; // Các nhánh tỏa ra xung quanh
  ghiChuKetLuan?: string; // Ghi chú kết luận sư phạm chuẩn kiến thức
  monHoc?: string; // Môn học (Toán, KHTN, Hóa học...)
  thuatNguChuan?: string[]; // Danh pháp IUPAC, acid, base, công thức toán học
}

export interface HinhAnhSGK {
  tenHinh: string; // e.g. "Hình 1 (Trang 45 - SGK Kết nối tri thức)"
  moTa: string; // Mô tả nội dung hình ảnh trong SGK lấy đưa vào giáo án
  imageUrl?: string; // Đường dẫn ảnh thực tế đưa trực tiếp vào giáo án (e.g. "/sgk-images/toan-3-hinh-tron-tam-o.png")
  cauHoiKhaiThac: string[]; // Các câu hỏi hướng dẫn HS quan sát tranh SGK để tự khám phá và tự lĩnh hội kiến thức
  ghiChuSuPham?: string; // Ghi chú sư phạm: Kỹ thuật khai thác tranh ảnh SGK phát huy tính tích cực
}

export interface DeMucKienThuc {
  deMuc: string; // "Đề mục 1: Khám phá Hình tròn và Tâm O"
  mucTieu: string; // Mục tiêu lĩnh hội của đề mục
  phuongPhapKiThuat: string; // "Kĩ thuật Khăn trải bàn & Quan sát hình ảnh trực quan SGK"
  hinhAnhSGK: HinhAnhSGK; // Hình ảnh trong SGK phù hợp với nội dung hoạt động của đề mục
  hoatDongTuLinhHoi: string; // Hoạt động học sinh làm trung tâm, tự quan sát, tự thao tác, tự rút ra kiến thức
}

export interface HoatDongDayHoc {
  id: string;
  soThuTu: number;
  tenHoatDong: string; // "Hoạt động 1: Mở đầu / Khởi động"
  thoiLuong: string; // "5 - 7 phút"
  mucTieu?: string; // a) Mục tiêu (bắt buộc CV 5512, tuỳ chọn CV 2345)
  noiDung?: string; // b) Nội dung (bắt buộc CV 5512)
  sanPham?: string; // c) Sản phẩm (bắt buộc CV 5512)
  bangHaiCot: BangHaiCotRow[];
  hoatDongNhomTichCuc?: HoatDongNhomTichCuc; // Thiết kế hoạt động nhóm tích cực lồng trực tiếp vào hoạt động này
  deMucSGK?: string; // Đề mục bám sát SGK
  phuongPhapKiThuat?: string; // Phương pháp & Kĩ thuật dạy học tích cực áp dụng (Khăn trải bàn, Mảnh ghép, Phòng tranh...)
  hinhAnhSGK?: HinhAnhSGK; // Hình ảnh SGK đưa vào giáo án phù hợp với hoạt động của đề mục
  cacDeMucHinhThanhKienThuc?: DeMucKienThuc[]; // Danh mục các đề mục chi tiết kèm tranh ảnh SGK tương ứng
  soDoTuDuy?: SoDoTuDuy; // Sơ đồ tư duy 16:9 3D Pixar chốt kiến thức cốt lõi của hoạt động
}

export interface ChiBaoNangLucSo {
  maChiBao: string; // e.g. "1.1.CB1a", "3.1.CB1a", "1.1.TC1b", "3.1.TC1a"
  tenLinhVuc: string; // e.g. "Khai thác dữ liệu và thông tin"
  bieuHien: string; // e.g. "Nhận biết và tìm kiếm hình ảnh minh họa bài học dưới sự hướng dẫn của giáo viên"
}

export interface VaiTroThanhVienNhom {
  tenVaiTro: string; // "Nhóm trưởng", "Thư ký", "Báo cáo viên", "Quản lý thời gian & phản biện"
  nhiemVu: string;
  mauMucDongGop?: string; // e.g. "Mực xanh", "Mực tím", "Mực đen", "Mực đỏ"
}

export interface BuocQuyTrinhNhom {
  tenBuoc: string;
  thoiGian: string;
  hoatDongGV: string;
  hoatDongHS: string;
}

export interface XuLyTinhHuongNhom {
  tinhHuong: string; // "Học sinh im lặng, ngại phát biểu", "Một em làm thay cả nhóm", "Học sinh thụ động không tham gia"
  bieuHienThucTe: string;
  giaiPhapSuPham: string;
}

export interface TieuChiRubricNhom {
  tieuChi: string;
  mucTot: string;
  mucDat: string;
  mucCanCoGang: string;
}

export interface PhieuGiaoNhiemVuNhom {
  tieuDe: string;
  thongTinNhom: string;
  cauHoiNhiemVu: string[];
  phanKhaiBaoDongGop: string[];
}

export interface PromptInfographicPhieuHocTap {
  tieuDe: string;
  moTa: string;
  promptDoraemon: string;
  promptVuAnKhoaHoc: string;
  promptConan: string;
  promptHoatHinh: string;
}

export interface HoatDongNhomTichCuc {
  tenHoatDong: string;
  thoiLuong: string; // "12 - 15 phút"
  siSoPhuHop: string; // "35 - 40 học sinh (Chia 8 - 9 nhóm, mỗi nhóm 4 em)"
  tinhHuongToMo: string; // 1. Tình huống hoặc câu hỏi khởi động gây tò mò
  chiaNhomVaPhanCong: {
    quyMo: string;
    vaiTro: VaiTroThanhVienNhom[];
  }; // 2. Chia nhóm và phân công vai trò cụ thể
  nhiemVuVuaSuc: string[]; // 3. Nhiệm vụ vừa sức, hấp dẫn buộc phải suy nghĩ - trao đổi - hợp tác
  quyTrinhToChuc: BuocQuyTrinhNhom[]; // 4. Quy trình tổ chức hoạt động theo từng bước kèm thời gian
  xuLyTinhHuong: XuLyTinhHuongNhom[]; // 5. Đề xuất cách xử lý khi học sinh im lặng, 1 em làm thay, thụ động
  phieuGiaoNhiemVu: PhieuGiaoNhiemVuNhom; // 6. Phiếu giao nhiệm vụ ngắn gọn, in dùng ngay
  tieuChiDanhGia: TieuChiRubricNhom[]; // 7. Bảng tiêu chí đánh giá (Rubric) cá nhân & nhóm
  baoCaoNhanh: string[]; // 8. Đề xuất cách báo cáo sản phẩm nhanh, tránh kéo dài giờ học
  promptInfographic?: PromptInfographicPhieuHocTap; // Tự sinh Prompt AI thiết kế Phiếu học tập Infographic/Truyện tranh đưa vào hoạt động
}

export interface GiaoAnWordData {
  metadata: LessonMetadata;
  mucTieu: {
    kienThuc?: string[]; // Dành cho CV 5512
    nangLucDacThu: string[];
    nangLucChung: {
      tuChuTuHoc: string[];
      giaoTiepHopTac: string[];
      giaiQuyetVanDe: string[];
    };
    nangLucSo?: ChiBaoNangLucSo[]; // Theo Công văn 3456/BGDĐT-GDPT
    phamChat: {
      yeuNuoc: string[];
      nhanAi: string[];
      chamChi: string[];
      trungThuc: string[];
      trachNhiem: string[];
    };
    tichHopMoRong?: string[];
  };
  thietBiDayHoc: {
    giaoVien: string[];
    hocSinh: string[];
  };
  tienTrinhDayHoc: HoatDongDayHoc[];
  hoatDongNhomTichCuc?: HoatDongNhomTichCuc; // Thiết kế hoạt động dạy học tích cực chuyên sâu GDPT 2018
  dieuChinhSauBaiDay?: string; // For CV 2345
}

export interface SlideItem {
  id: string;
  slideNumber: number;
  slideType: 'TITLE_SLIDE' | 'OBJECTIVE' | 'ACTIVITY_INTRO' | 'KNOWLEDGE_SPLIT' | 'INTERACTIVE_QUIZ' | 'SUMMARY';
  title: string;
  subtitle?: string;
  stageBadge?: string; // "Khởi động" | "Khám phá" | "Luyện tập" | "Vận dụng"
  visualLayout: '1-Column' | '2-Column Split' | '3-Card Bento Grid' | 'Full Center Hero' | 'Quiz Layout';
  bulletPoints: string[];
  boardContent?: string; // Key formula, note or product summary
  aiImagePrompt: string;
  animationsAndTransitions: {
    slideTransition: string; // "Morph" | "Curtains" | "Push" | "Fade" | "Page Curl"
    elementAnimations: string[];
  };
  speakerNotes: string;
}

export interface SlidePowerPointData {
  themeId: SlideThemeId;
  themeConfig: SlideThemeConfig;
  slides: SlideItem[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  funFact?: string;
}

export interface AiAnalysisReport {
  tenBaiDay: string;
  monHoc: string;
  khoiLop: number;
  boSach: string;
  sgkUrl: string;
  tongSoDeMuc: number;
  danhSachDeMuc: {
    deMuc: string;
    tenHoatDong: string;
    mucTieu: string;
    noiDung?: string;
  }[];
  tienTrinhHoatDong: string[];
  phanTichSuPham: string;
}

export interface CompleteLessonPlan {
  giaoAn: GiaoAnWordData;
  slideDeck: SlidePowerPointData;
  quizGame: QuizQuestion[];
  aiAnalysisReport?: AiAnalysisReport;
}
