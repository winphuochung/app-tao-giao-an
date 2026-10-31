import { ChiBaoNangLucSo } from '../types';

export interface ChiBaoChiTiet extends ChiBaoNangLucSo {
  nhomLinhVuc: string; // 1. Khai thác dữ liệu | 2. Giao tiếp & Hợp tác | 3. Sáng tạo nội dung số | 4. An toàn | 5. Giải quyết vấn đề
  bac: 'CB1' | 'CB2' | 'TC1' | 'TC2';
  khoiLop: string; // "Lớp 1, 2, 3" | "Lớp 4, 5" | "Lớp 6, 7" | "Lớp 8, 9"
}

export const CHI_BAO_NLS_CHUAN: ChiBaoChiTiet[] = [
  // --- BẬC CB1: LỚP 1, 2, 3 ---
  {
    maChiBao: '1.1.CB1a',
    nhomLinhVuc: '1. Khai thác dữ liệu và thông tin',
    tenLinhVuc: 'Tìm kiếm dữ liệu và thông tin đơn giản',
    bieuHien: 'Xác định được nhu cầu thông tin, tìm kiếm dữ liệu và hình ảnh thông qua tìm kiếm đơn giản trong môi trường số dưới sự hướng dẫn của giáo viên.',
    bac: 'CB1',
    khoiLop: 'Lớp 1, 2, 3'
  },
  {
    maChiBao: '1.2.CB1a',
    nhomLinhVuc: '1. Khai thác dữ liệu và thông tin',
    tenLinhVuc: 'Đánh giá dữ liệu và thông tin số',
    bieuHien: 'Phát hiện được độ tin cậy và sự chính xác cơ bản của nguồn thông tin, hình ảnh học tập dưới sự dẫn dắt của thầy cô.',
    bac: 'CB1',
    khoiLop: 'Lớp 1, 2, 3'
  },
  {
    maChiBao: '2.1.CB1a',
    nhomLinhVuc: '2. Giao tiếp và Hợp tác',
    tenLinhVuc: 'Tương tác qua công nghệ số',
    bieuHien: 'Lựa chọn và sử dụng được các công nghệ số đơn giản (màn hình tương tác, nút bấm âm thanh, phần mềm trò chơi trắc nghiệm) để tham gia hoạt động học tập.',
    bac: 'CB1',
    khoiLop: 'Lớp 1, 2, 3'
  },
  {
    maChiBao: '3.1.CB1a',
    nhomLinhVuc: '3. Sáng tạo nội dung số',
    tenLinhVuc: 'Phát triển nội dung số đơn giản',
    bieuHien: 'Thao tác kéo thả các đối tượng, hình khối, con số hoặc vẽ phác họa trên phần mềm học tập mô phỏng để tạo sản phẩm số.',
    bac: 'CB1',
    khoiLop: 'Lớp 1, 2, 3'
  },
  {
    maChiBao: '4.1.CB1a',
    nhomLinhVuc: '4. An toàn số',
    tenLinhVuc: 'Bảo vệ thiết bị và an toàn cá nhân',
    bieuHien: 'Nhận biết cách bật, tắt thiết bị an toàn, không tự ý bấm vào các liên kết lạ và thông báo ngay cho giáo viên khi có sự cố.',
    bac: 'CB1',
    khoiLop: 'Lớp 1, 2, 3'
  },
  {
    maChiBao: '4.3.CB1a',
    nhomLinhVuc: '4. An toàn số',
    tenLinhVuc: 'Bảo vệ sức khỏe và an sinh số',
    bieuHien: 'Thực hành tư thế ngồi học đúng quy chuẩn, giữ khoảng cách mắt an toàn với màn hình tivi, máy tính hoặc máy chiếu.',
    bac: 'CB1',
    khoiLop: 'Lớp 1, 2, 3'
  },

  // --- BẬC CB2: LỚP 4, 5 ---
  {
    maChiBao: '1.1.CB2a',
    nhomLinhVuc: '1. Khai thác dữ liệu và thông tin',
    tenLinhVuc: 'Tìm kiếm và điều hướng dữ liệu số',
    bieuHien: 'Chủ động tìm kiếm dữ liệu, văn bản, hình ảnh phục vụ bài học qua công cụ tìm kiếm hoặc kho học liệu số của trường với từ khóa đơn giản.',
    bac: 'CB2',
    khoiLop: 'Lớp 4, 5'
  },
  {
    maChiBao: '1.3.CB2a',
    nhomLinhVuc: '1. Khai thác dữ liệu và thông tin',
    tenLinhVuc: 'Quản lý và lưu trữ dữ liệu số',
    bieuHien: 'Biết cách tổ chức, lưu tệp bài tập vào đúng thư mục nhóm hoặc tài khoản học tập cá nhân có cấu trúc.',
    bac: 'CB2',
    khoiLop: 'Lớp 4, 5'
  },
  {
    maChiBao: '2.2.CB2a',
    nhomLinhVuc: '2. Giao tiếp và Hợp tác',
    tenLinhVuc: 'Chia sẻ dữ liệu và nội dung số',
    bieuHien: 'Biết chia sẻ bài làm, hình ảnh học tập lên bảng chung của lớp (Padlet/Google Classroom) và ghi chú nguồn gốc tác giả.',
    bac: 'CB2',
    khoiLop: 'Lớp 4, 5'
  },
  {
    maChiBao: '3.1.CB2b',
    nhomLinhVuc: '3. Sáng tạo nội dung số',
    tenLinhVuc: 'Chỉnh sửa và định dạng nội dung số',
    bieuHien: 'Sử dụng phần mềm soạn thảo hoặc trình chiếu để gõ văn bản có dấu, chèn hình ảnh, tạo slide thuyết trình ngắn cho nhóm.',
    bac: 'CB2',
    khoiLop: 'Lớp 4, 5'
  },
  {
    maChiBao: '4.2.CB2a',
    nhomLinhVuc: '4. An toàn số',
    tenLinhVuc: 'Bảo vệ dữ liệu cá nhân',
    bieuHien: 'Biết cách đặt mật khẩu cá nhân đơn giản và không tiết lộ họ tên, số điện thoại, địa chỉ nhà trên môi trường trực tuyến.',
    bac: 'CB2',
    khoiLop: 'Lớp 4, 5'
  },

  // --- BẬC TC1: LỚP 6, 7 (THCS) ---
  {
    maChiBao: '1.1.TC1a',
    nhomLinhVuc: '1. Khai thác dữ liệu và thông tin',
    tenLinhVuc: 'Tìm kiếm và truy xuất thông tin có chọn lọc',
    bieuHien: 'Thực hiện tìm kiếm thông tin bằng từ khóa nâng cao, truy cập sách giáo khoa điện tử và các nguồn tư liệu khoa học chính thống.',
    bac: 'TC1',
    khoiLop: 'Lớp 6, 7'
  },
  {
    maChiBao: '1.2.TC1b',
    nhomLinhVuc: '1. Khai thác dữ liệu và thông tin',
    tenLinhVuc: 'Đánh giá độ tin cậy của thông tin số',
    bieuHien: 'So sánh và đối chiếu các thông tin tìm được từ nhiều nguồn trực tuyến khác nhau để phát hiện thông tin giả mạo hoặc chưa kiểm chứng.',
    bac: 'TC1',
    khoiLop: 'Lớp 6, 7'
  },
  {
    maChiBao: '2.4.TC1a',
    nhomLinhVuc: '2. Giao tiếp và Hợp tác',
    tenLinhVuc: 'Hợp tác qua các công cụ số',
    bieuHien: 'Làm việc nhóm đồng thời trên tài liệu trực tuyến (Google Docs/Sheets), phân công nhiệm vụ và trao đổi ý kiến đóng góp.',
    bac: 'TC1',
    khoiLop: 'Lớp 6, 7'
  },
  {
    maChiBao: '3.1.TC1c',
    nhomLinhVuc: '3. Sáng tạo nội dung số',
    tenLinhVuc: 'Tạo lập nội dung số đa phương tiện',
    bieuHien: 'Tạo sơ đồ tư duy số (Mindmap), vẽ biểu đồ hoặc biên tập video clip ngắn minh họa kết quả thí nghiệm / dự án học tập.',
    bac: 'TC1',
    khoiLop: 'Lớp 6, 7'
  },
  {
    maChiBao: '5.2.TC1a',
    nhomLinhVuc: '5. Giải quyết vấn đề',
    tenLinhVuc: 'Nhận diện nhu cầu và giải pháp công nghệ',
    bieuHien: 'Tự chủ lựa chọn phần mềm mô phỏng (GeoGebra, PhET) hoặc bảng tính để phân tích số liệu và giải quyết bài toán đặt ra.',
    bac: 'TC1',
    khoiLop: 'Lớp 6, 7'
  },

  // --- BẬC TC2: LỚP 8, 9 (THCS) ---
  {
    maChiBao: '1.3.TC2a',
    nhomLinhVuc: '1. Khai thác dữ liệu và thông tin',
    tenLinhVuc: 'Quản trị cơ sở dữ liệu số',
    bieuHien: 'Tự chủ phân loại, cấu trúc và gắn nhãn các bộ dữ liệu khảo sát, hình ảnh thực nghiệm khoa học một cách khoa học và bảo mật.',
    bac: 'TC2',
    khoiLop: 'Lớp 8, 9'
  },
  {
    maChiBao: '2.5.TC2b',
    nhomLinhVuc: '2. Giao tiếp và Hợp tác',
    tenLinhVuc: 'Quy tắc ứng xử văn minh và trách nhiệm số',
    bieuHien: 'Tuân thủ luật An ninh mạng, tôn trọng bản quyền tác giả khi sử dụng tài liệu trực tuyến, trích dẫn chuẩn học thuật.',
    bac: 'TC2',
    khoiLop: 'Lớp 8, 9'
  },
  {
    maChiBao: '3.2.TC2a',
    nhomLinhVuc: '3. Sáng tạo nội dung số',
    tenLinhVuc: 'Tích hợp và xây dựng lại nội dung số',
    bieuHien: 'Tổng hợp dữ liệu số từ các nguồn khác nhau để xuất bản báo cáo học tập số, infographic hoặc sản phẩm STEM số hoàn chỉnh.',
    bac: 'TC2',
    khoiLop: 'Lớp 8, 9'
  },
  {
    maChiBao: '4.2.TC2c',
    nhomLinhVuc: '4. An toàn số',
    tenLinhVuc: 'Bảo vệ dữ liệu và danh tính số',
    bieuHien: 'Nhận thức sâu sắc các nguy cơ lừa đảo trực tuyến (phishing), biết cài đặt xác thực hai bước và bảo vệ danh tính số của bản thân.',
    bac: 'TC2',
    khoiLop: 'Lớp 8, 9'
  },
  {
    maChiBao: '5.3.TC2b',
    nhomLinhVuc: '5. Giải quyết vấn đề',
    tenLinhVuc: 'Ứng dụng công nghệ số một cách sáng tạo',
    bieuHien: 'Ứng dụng trí tuệ nhân tạo (AI), công cụ phân tích hoặc lập trình khối để giải quyết các vấn đề thực tiễn liên môn và đời sống.',
    bac: 'TC2',
    khoiLop: 'Lớp 8, 9'
  }
];

export function getChiBaoTheoKhoiLop(khoiLop: number): ChiBaoChiTiet[] {
  let bac: 'CB1' | 'CB2' | 'TC1' | 'TC2' = 'CB1';
  if (khoiLop >= 1 && khoiLop <= 3) bac = 'CB1';
  else if (khoiLop >= 4 && khoiLop <= 5) bac = 'CB2';
  else if (khoiLop >= 6 && khoiLop <= 7) bac = 'TC1';
  else if (khoiLop >= 8 && khoiLop <= 9) bac = 'TC2';
  return CHI_BAO_NLS_CHUAN.filter(cb => cb.bac === bac);
}
