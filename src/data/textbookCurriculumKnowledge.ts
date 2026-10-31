import { HoatDongDayHoc } from '../types';

export interface TextbookSectionKnowledge {
  deMuc: string;
  tenHoatDong: string;
  thoiLuong: string;
  mucTieu: string;
  noiDung: string;
  sanPham: string;
  tenHinhSGK?: string;
  moTaHinhSGK?: string;
  cauHoiKhaiThac?: string[];
  ghiChuSuPham?: string;
  cot1Trai: string;
  cot2Phai: string;
}

export interface TextbookLessonCurriculum {
  lessonId: string;
  matchPatterns: RegExp[];
  subject: string;
  grade: number;
  chapter: string;
  sections: TextbookSectionKnowledge[];
}

export const KNOWN_CURRICULUM_SECTIONS: TextbookLessonCurriculum[] = [
  // 1. KHTN 7 - BÀI 1: PHƯƠNG PHÁP VÀ KĨ NĂNG HỌC TẬP MÔN KHTN
  {
    lessonId: 'khtn-7-bai-1',
    matchPatterns: [/phương pháp và kĩ năng/i, /học tập môn khtn/i, /bài 1[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Mở đầu',
    sections: [
      {
        deMuc: 'I. Phương pháp tìm hiểu tự nhiên',
        tenHoatDong: 'Hoạt động 2.1: Phương pháp tìm hiểu tự nhiên (SGK Trang 6 - 8)',
        thoiLuong: '15 phút',
        mucTieu: 'Nêu và vận dụng được tiến trình 5 bước tìm hiểu tự nhiên: (1) Quan sát, đặt câu hỏi; (2) Xây dựng giả thuyết; (3) Kế hoạch kiểm tra; (4) Thực hiện; (5) Kết luận.',
        noiDung: 'HS đọc SGK trang 6, phân tích ví dụ nghiên cứu "Sự nảy mầm của hạt đỗ"; sắp xếp đúng trình tự 5 bước tìm hiểu tự nhiên.',
        sanPham: 'Sơ đồ 5 bước tìm hiểu tự nhiên hoàn chỉnh trong vở học sinh.',
        cot1Trai: `- GV chiếu sơ đồ quy trình nghiên cứu khoa học 5 bước chuẩn SGK.
- Hướng dẫn HS phân tích thí nghiệm hạt đậu nảy mầm.
- [CHỐT KIẾN THỨC]: Yêu cầu HS ghi nhớ 5 bước vào vở.`,
        cot2Phai: `I. PHƯƠNG PHÁP TÌM HIỂU TỰ NHIÊN
1. Quy trình 5 bước:
- Bước 1: Quan sát và đặt câu hỏi nghiên cứu.
- Bước 2: Xây dựng giả thuyết khoa học.
- Bước 3: Lập kế hoạch kiểm tra giả thuyết.
- Bước 4: Thực hiện kế hoạch (làm thí nghiệm, thu thập số liệu).
- Bước 5: Phân tích kết quả và rút ra kết luận.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Phương pháp tìm hiểu tự nhiên là cách thức tìm hiểu thế giới tự nhiên gồm 5 bước khoa học.
- Mỗi bước đều có vai trò quyết định tính chính xác của kết luận nghiên cứu.`
      },
      {
        deMuc: 'II. Các kĩ năng cơ bản trong học tập môn Khoa học tự nhiên',
        tenHoatDong: 'Hoạt động 2.2: Hệ thống các kĩ năng tiến trình khoa học (SGK Trang 8 - 11)',
        thoiLuong: '15 phút',
        mucTieu: 'Thực hành các kĩ năng: Quan sát, phân loại, liên kết, đo lường và dự báo hiện tượng tự nhiên.',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) thảo luận phân biệt các kĩ năng và đưa ra ví dụ cụ thể.',
        sanPham: 'Bảng tổng hợp 5 kĩ năng cốt lõi và ứng dụng trong phiếu nhóm.',
        cot1Trai: `- GV giao nhiệm vụ cho các nhóm thảo luận 5 kĩ năng.
- Bao quát lớp, nhắc nhở giữ đúng 4 màu mực.
- [CHỐT KIẾN THỨC]: Tổng kết đặc điểm cốt lõi của từng kĩ năng.`,
        cot2Phai: `II. CÁC KĨ NĂNG CƠ BẢN TRONG HỌC TẬP MÔN KHTN
1. Kĩ năng quan sát, thu thập dữ liệu.
2. Kĩ năng phân loại các đối tượng theo tiêu chí.
3. Kĩ năng liên kết thông tin và dữ liệu.
4. Kĩ năng đo lường và xử lý sai số.
5. Kĩ năng dự báo diễn biến hiện tượng.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Học tập môn KHTN cần rèn luyện thành thạo 5 kĩ năng: Quan sát - Phân loại - Liên kết - Đo lường - Dự báo.
- Viết báo cáo khoa học cần đầy đủ: Tên đề tài, mục tiêu, dụng cụ, các bước tiến hành, kết quả và kết luận.`
      },
      {
        deMuc: 'III. Một số dụng cụ đo và quy tắc an toàn trong phòng thực hành',
        tenHoatDong: 'Hoạt động 2.3: Dụng cụ đo hiện đại (SGK Trang 11 - 13)',
        thoiLuong: '12 phút',
        mucTieu: 'Nhận biết và sử dụng đúng cách cổng quang điện, đồng hồ hiện số; hệ thống hóa toàn bài bằng Sơ đồ tư duy 16:9 3D Pixar.',
        noiDung: 'HS tìm hiểu cổng quang điện và đồng hồ đo thời gian hiện số; quan sát Sơ đồ tư duy 16:9 3D Pixar.',
        sanPham: 'Sơ đồ tư duy 16:9 hoàn chỉnh trong vở học sinh.',
        cot1Trai: `- GV hướng dẫn nguyên lý đồng hồ đo thời gian hiện số kết nối cổng quang.
- [CHỐT KIẾN THỨC]: Hướng dẫn học sinh chốt kiến thức cốt lõi của đề mục vào vở.`,
        cot2Phai: `III. MỘT SỐ DỤNG CỤ ĐO TRONG PHÒNG THỰC HÀNH
- Đồng hồ đo thời gian hiện số và cổng quang điện dùng để đo các khoảng thời gian rất ngắn và chuyển động nhanh.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Cổng quang điện và đồng hồ hiện số đo thời gian tự động, loại bỏ hoàn toàn sai số bấm tay.
- Tuân thủ nghiêm ngặt quy định an toàn khi sử dụng thiết bị điện và hóa chất trong phòng thực hành.`
      }
    ]
  },

  // 2. KHTN 7 - BÀI 2: NGUYÊN TỬ
  {
    lessonId: 'khtn-7-bai-2',
    matchPatterns: [/nguyên tử/i, /rutherford/i, /bohr/i, /bài 2[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương I: Nguyên tử - Sơ lược bảng tuần hoàn',
    sections: [
      {
        deMuc: 'I. Mô hình nguyên tử của Rutherford - Bohr',
        tenHoatDong: 'Hoạt động 2.1: Tìm hiểu mô hình nguyên tử Rutherford - Bohr (SGK Trang 14 - 16)',
        thoiLuong: '14 phút',
        mucTieu: 'Mô tả được mô hình nguyên tử của Rutherford - Bohr: hạt nhân ở giữa, các electron quay xung quanh hạt nhân theo từng lớp xác định.',
        noiDung: 'HS đọc SGK trang 14, quan sát Hình 2.1; thảo luận cặp đôi về cấu trúc hệ hành tinh nguyên tử.',
        sanPham: 'Bản vẽ mô hình nguyên tử Carbon hoặc Helium có ghi chú rõ hạt nhân và lớp electron.',
        cot1Trai: `- GV chiếu mô hình hành tinh nguyên tử chuyển động 3D.
- Hướng dẫn HS so sánh nguyên tử với Hệ Mặt Trời.
- [CHỐT KIẾN THỨC]: Chuẩn hóa mô hình Rutherford - Bohr.`,
        cot2Phai: `I. MÔ HÌNH NGUYÊN TỬ CỦA RUTHERFORD - BOHR
1. Cấu trúc mô hình:
- Hạt nhân nằm ở tâm nguyên tử, mang điện tích dương.
- Các electron chuyển động xung quanh hạt nhân trên những quỹ đạo xác định tạo thành các lớp electron.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Nguyên tử là hạt vô cùng nhỏ, trung hòa về điện.
- Hạt nhân ở tâm mang điện tích dương; các electron mang điện tích âm quay quanh hạt nhân.`
      },
      {
        deMuc: 'II. Cấu tạo nguyên tử (Hạt nhân và lớp vỏ electron)',
        tenHoatDong: 'Hoạt động 2.2: Cấu tạo hạt nhân và lớp vỏ electron (SGK Trang 16 - 18)',
        thoiLuong: '16 phút',
        mucTieu: 'Nêu được hạt nhân tạo bởi proton (p, mang điện tích +1) và neutron (n, không mang điện); vỏ nguyên tử chứa electron (e, mang điện tích -1). Số p = Số e.',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) phân tích bảng thành phần nguyên tử của 10 nguyên tố đầu tiên; xác định số hạt p, n, e.',
        sanPham: 'Bảng số liệu hạt proton, electron, neutron của các nguyên tố trong phiếu nhóm.',
        cot1Trai: `- GV giao nhiệm vụ phân tích cấu trúc nguyên tử qua phiếu học tập.
- Điều phối hoạt động nhóm 4 vai trò với 4 màu mực.
- [CHỐT KIẾN THỨC]: Khẳng định nguyên tắc trung hòa điện: Số p = Số e.`,
        cot2Phai: `II. CẤU TẠO NGUYÊN TỬ
1. Các loại hạt cơ bản:
- Proton (kí hiệu: p): Mang điện tích dương (+1).
- Neutron (kí hiệu: n): Không mang điện.
- Electron (kí hiệu: e): Mang điện tích âm (-1).
2. Quy tắc trung hòa điện:
- Trong mọi nguyên tử: Số proton = Số electron.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Nguyên tử cấu tạo gồm: Hạt nhân (chứa proton và neutron) và lớp vỏ (chứa electron).
- Điện tích hạt nhân bằng tổng điện tích của các hạt proton.
- Nguyên tử trung hòa về điện nên luôn có: Số hạt proton (p) = Số hạt electron (e).`
      },
      {
        deMuc: 'III. Khối lượng nguyên tử (Đơn vị amu)',
        tenHoatDong: 'Hoạt động 2.3: Khối lượng nguyên tử (SGK Trang 18 - 19)',
        thoiLuong: '12 phút',
        mucTieu: 'Nêu được đơn vị khối lượng nguyên tử (amu); giải thích vì sao khối lượng nguyên tử tập trung chủ yếu ở hạt nhân; củng cố bằng Sơ đồ tư duy 16:9.',
        noiDung: 'HS so sánh khối lượng p, n với e (me ≈ mp / 1836); giải bài tập tính khối lượng nguyên tử theo amu; vẽ sơ đồ tư duy.',
        sanPham: 'Lời giải bài tập tính khối lượng nguyên tử và Sơ đồ tư duy 16:9 hoàn chỉnh.',
        cot1Trai: `- GV giải thích vì sao khối lượng e rất nhỏ có thể bỏ qua.
- [CHỐT KIẾN THỨC]: Hướng dẫn học sinh chốt kiến thức cốt lõi của đề mục vào vở.`,
        cot2Phai: `III. KHỐI LƯỢNG NGUYÊN TỬ
1. Đơn vị amu:
- Đơn vị khối lượng nguyên tử kí hiệu là amu (atomic mass unit).
- Khối lượng hạt nhân: mp ≈ 1 amu; mn ≈ 1 amu; me ≈ 0,00055 amu.
2. Kết luận:
- Khối lượng của nguyên tử hầu như tập trung toàn bộ ở hạt nhân.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Khối lượng nguyên tử được đo bằng đơn vị amu (1 amu ≈ khối lượng của 1 proton hoặc 1 neutron).
- Khối lượng nguyên tử xấp xỉ bằng tổng khối lượng của các hạt proton và neutron trong hạt nhân.`
      }
    ]
  },

  // 3. KHTN 7 - BÀI 3: NGUYÊN TỐ HÓA HỌC
  {
    lessonId: 'khtn-7-bai-3',
    matchPatterns: [/nguyên tố hóa học/i, /kí hiệu hóa học/i, /bài 3[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương I: Nguyên tử - Sơ lược bảng tuần hoàn',
    sections: [
      {
        deMuc: 'I. Khái niệm nguyên tố hóa học',
        tenHoatDong: 'Hoạt động 2.1: Khái niệm nguyên tố hóa học (SGK Trang 20 - 21)',
        thoiLuong: '15 phút',
        mucTieu: 'Phát biểu được khái niệm nguyên tố hóa học là tập hợp các nguyên tử cùng loại có cùng số proton trong hạt nhân.',
        noiDung: 'HS đọc SGK trang 20, phân tích ví dụ các nguyên tử hydrogen có cùng 1 proton; rút ra định nghĩa nguyên tố hóa học.',
        sanPham: 'Định nghĩa nguyên tố hóa học và ví dụ minh họa trong vở ghi.',
        cot1Trai: `- GV hướng dẫn HS phân tích các nguyên tử cùng số p.
- [CHỐT KIẾN THỨC]: Khẳng định số proton là đặc trưng của nguyên tố hóa học.`,
        cot2Phai: `I. NGUYÊN TỐ HÓA HỌC LÀ GÌ?
- Nguyên tố hóa học là tập hợp những nguyên tử cùng loại, có cùng số proton trong hạt nhân.
- Các nguyên tử thuộc cùng một nguyên tố hóa học đều có tính chất hóa học giống nhau.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Nguyên tố hóa học là tập hợp các nguyên tử có cùng số proton trong hạt nhân.
- Số proton là dấu hiệu đặc trưng nhất để xác định một nguyên tố hóa học.`
      },
      {
        deMuc: 'II. Kí hiệu hóa học của các nguyên tố',
        tenHoatDong: 'Hoạt động 2.2: Kí hiệu hóa học & Tên gọi IUPAC quốc tế (SGK Trang 21 - 24)',
        thoiLuong: '16 phút',
        mucTieu: 'Viết được kí hiệu hóa học và đọc đúng tên quốc tế (IUPAC) của 20 nguyên tố đầu tiên trong bảng tuần hoàn.',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) tham gia trò chơi ghép thẻ tên nguyên tố quốc tế (Hydrogen, Oxygen, Carbon...) với kí hiệu tương ứng (H, O, C...).',
        sanPham: 'Bảng ghi nhớ 20 kí hiệu nguyên tố hóa học chuẩn IUPAC trong phiếu nhóm.',
        cot1Trai: `- GV tổ chức trò chơi ghép thẻ tên quốc tế IUPAC và kí hiệu.
- Quan sát các nhóm thực hiện bằng 4 màu mực.
- [CHỐT KIẾN THỨC]: Quy tắc viết hoa chữ cái đầu tiên của kí hiệu.`,
        cot2Phai: `II. KÍ HIỆU HÓA HỌC
1. Quy tắc viết kí hiệu hóa học:
- Mỗi nguyên tố hóa học được biểu diễn bằng một hoặc hai chữ cái.
- Chữ cái đầu tiên luôn viết in hoa, chữ cái thứ hai (nếu có) viết thường.
2. Tên gọi quốc tế (IUPAC):
- Hydrogen (H), Helium (He), Carbon (C), Nitrogen (N), Oxygen (O), Sodium (Na)...

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Mỗi nguyên tố hóa học được biểu diễn bằng một kí hiệu hóa học riêng biệt.
- Kí hiệu gồm 1 hoặc 2 chữ cái: Chữ đầu viết HOA, chữ sau viết thường (Ví dụ: H, He, C, Ca, Na, Cl).`
      }
    ]
  },

  // 4. KHTN 7 - BÀI 4: SƠ LƯỢC VỀ BẢNG TUẦN HOÀN CÁC NGUYÊN TỐ HÓA HỌC
  {
    lessonId: 'khtn-7-bai-4',
    matchPatterns: [/bảng tuần hoàn/i, /sơ lược về bảng tuần hoàn/i, /bài 4[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương I: Nguyên tử - Sơ lược bảng tuần hoàn',
    sections: [
      {
        deMuc: 'I. Nguyên tắc sắp xếp các nguyên tố trong bảng tuần hoàn',
        tenHoatDong: 'Hoạt động 2.1: Tìm hiểu 3 nguyên tắc sắp xếp bảng tuần hoàn (SGK Trang 25 - 26)',
        thoiLuong: '14 phút',
        mucTieu: 'Nêu được 3 nguyên tắc sắp xếp các nguyên tố trong bảng tuần hoàn Mendeleev hiện đại.',
        noiDung: 'HS quan sát Bảng tuần hoàn treo tường, đọc SGK mục I trang 25 để rút ra 3 nguyên tắc.',
        sanPham: '3 nguyên tắc sắp xếp bảng tuần hoàn được ghi ngắn gọn, chính xác vào vở.',
        cot1Trai: `- Hướng dẫn HS quan sát chiều tăng dần của điện tích hạt nhân.
- [CHỐT KIẾN THỨC]: Chuẩn hóa 3 nguyên tắc vàng của bảng tuần hoàn.`,
        cot2Phai: `I. NGUYÊN TẮC SẮP XẾP BẢNG TUẦN HOÀN
- Nguyên tắc 1: Các nguyên tố được xếp theo chiều tăng dần của điện tích hạt nhân nguyên tử.
- Nguyên tắc 2: Các nguyên tố có cùng số lớp electron được xếp vào cùng một hàng (chu kì).
- Nguyên tắc 3: Các nguyên tố có tính chất hóa học tương tự nhau được xếp vào cùng một cột (nhóm).

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Bảng tuần hoàn sắp xếp theo 3 nguyên tắc: Tăng dần điện tích hạt nhân; Cùng số lớp electron xếp cùng hàng; Cùng tính chất hóa học xếp cùng cột.`
      },
      {
        deMuc: 'II. Cấu tạo bảng tuần hoàn (Ô nguyên tố, Chu kì, Nhóm)',
        tenHoatDong: 'Hoạt động 2.2: Cấu tạo Ô nguyên tố, Chu kì và Nhóm (SGK Trang 26 - 29)',
        thoiLuong: '16 phút',
        mucTieu: 'Mô tả được thông tin trong 1 ô nguyên tố; khái niệm chu kì (7 chu kì) và nhóm (8 nhóm A).',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) phân tích ô số 6 (Carbon) và ô số 11 (Sodium); xác định chu kì và nhóm.',
        sanPham: 'Bảng phân tích 4 thông số trong ô nguyên tố của phiếu nhóm.',
        cot1Trai: `- Giao nhiệm vụ cho các nhóm đọc thông số trong ô nguyên tố.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ]: Thảo luận và ghi kết quả bằng 4 màu mực.
- [CHỐT KIẾN THỨC]: Ý nghĩa số thứ tự ô, chu kì và nhóm.`,
        cot2Phai: `II. CẤU TẠO BẢNG TUẦN HOÀN
1. Ô nguyên tố:
- Cho biết: Số hiệu nguyên tử (số p = số e = số thứ tự ô), Kí hiệu hóa học, Tên nguyên tố, Khối lượng nguyên tử.
2. Chu kì:
- Là dãy các nguyên tố xếp thành hàng ngang theo chiều điện tích hạt nhân tăng dần.
- Số thứ tự chu kì = Số lớp electron trong nguyên tử.
3. Nhóm:
- Là tập hợp các nguyên tố xếp thành cột dọc có tính chất tương tự nhau.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Ô nguyên tố: Số thứ tự ô = Số proton = Số electron.
- Chu kì: Số thứ tự chu kì = Số lớp electron (gồm 7 chu kì).
- Nhóm: Gồm các nguyên tố có tính chất hóa học tương tự nhau (gồm 8 nhóm A và 8 nhóm B).`
      },
      {
        deMuc: 'III. Vị trí các nhóm nguyên tố kim loại, phi kim và khí hiếm',
        tenHoatDong: 'Hoạt động 2.3: Phân loại kim loại, phi kim, khí hiếm (SGK Trang 29 - 31)',
        thoiLuong: '12 phút',
        mucTieu: 'Xác định được vị trí của nhóm kim loại, phi kim và khí hiếm (nhóm VIIIA) trên bảng tuần hoàn.',
        noiDung: 'HS tra cứu bảng màu: Kim loại (màu xanh), phi kim (màu hồng), khí hiếm (màu vàng); vẽ sơ đồ tư duy 16:9.',
        sanPham: 'Vị trí 3 nhóm nguyên tố và Sơ đồ tư duy 16:9 hoàn chỉnh trong vở học sinh.',
        cot1Trai: `- Hướng dẫn HS nhận diện 3 khối màu sắc trong bảng tuần hoàn.
- [CHỐT KIẾN THỨC]: Hướng dẫn học sinh chốt kiến thức cốt lõi của đề mục vào vở.`,
        cot2Phai: `III. PHÂN LOẠI CÁC NGUYÊN TỐ TRONG BẢNG TUẦN HOÀN
- Kim loại: Hầu hết các nguyên tố ở nhóm IA, IIA, IIIA và các nhóm B.
- Phi kim: Nằm ở phía trên bên phải của bảng tuần hoàn (nhóm IVA, VA, VIA, VIIA).
- Khí hiếm: Nằm ở cột cuối cùng của bảng tuần hoàn (nhóm VIIIA), bền vững về mặt hóa học.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Hơn 80% các nguyên tố trong bảng tuần hoàn là kim loại.
- Các nguyên tố khí hiếm thuộc nhóm VIIIA có lớp vỏ electron ngoài cùng bền vững (2 hoặc 8 electron).`
      }
    ]
  },

  // 5. KHTN 7 - BÀI 5: PHÂN TỬ - ĐƠN CHẤT - HỢP CHẤT
  {
    lessonId: 'khtn-7-bai-5',
    matchPatterns: [/phân tử/i, /đơn chất.*hợp chất/i, /bài 5[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương II: Phân tử. Liên kết hóa học',
    sections: [
      {
        deMuc: 'I. Phân tử',
        tenHoatDong: 'Hoạt động 2.1: Tìm hiểu khái niệm phân tử và khối lượng phân tử (SGK Trang 32 - 34)',
        thoiLuong: '15 phút',
        mucTieu: 'Nêu được khái niệm phân tử; tính được khối lượng phân tử của các chất theo đơn vị amu.',
        noiDung: 'HS đọc SGK trang 32, quan sát mô hình phân tử nước H2O, khí oxygen O2; tính khối lượng phân tử.',
        sanPham: 'Định nghĩa phân tử và các phép tính khối lượng phân tử chuẩn xác trong vở ghi.',
        cot1Trai: `- Hướng dẫn HS quan sát mô hình hạt phân tử.
- [CHỐT KIẾN THỨC]: Phân tử là hạt đại diện cho chất, mang đầy đủ tính chất hóa học.`,
        cot2Phai: `I. PHÂN TỬ VÀ KHỐI LƯỢNG PHÂN TỬ
1. Khái niệm phân tử:
- Phân tử là hạt đại diện cho chất, gồm một số nguyên tử liên kết với nhau và thể hiện đầy đủ tính chất hóa học của chất.
2. Khối lượng phân tử:
- Bằng tổng khối lượng của các nguyên tử trong phân tử.
- Ví dụ: Phân tử nước H2O = 1x2 + 16x1 = 18 amu.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Phân tử là hạt đại diện cho chất, gồm các nguyên tử liên kết với nhau.
- Khối lượng phân tử bằng tổng khối lượng của tất cả các nguyên tử cấu tạo nên phân tử (đơn vị: amu).`
      },
      {
        deMuc: 'II. Đơn chất và Hợp chất',
        tenHoatDong: 'Hoạt động 2.2: Phân biệt đơn chất và hợp chất (SGK Trang 34 - 36)',
        thoiLuong: '16 phút',
        mucTieu: 'Phân biệt được đơn chất (tạo từ 1 nguyên tố) và hợp chất (tạo từ 2 nguyên tố hóa học trở lên).',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) phân loại 10 chất quen thuộc trong đời sống thành 2 nhóm: Đơn chất và Hợp chất.',
        sanPham: 'Bảng phân loại chất chuẩn xác trên phiếu nhóm A3.',
        cot1Trai: `- Giao nhiệm vụ phân loại các chất quen thuộc.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ]: Giữ đúng 4 màu mực.
- [CHỐT KIẾN THỨC]: Dấu hiệu nhận biết đơn chất và hợp chất.`,
        cot2Phai: `II. ĐƠN CHẤT VÀ HỢP CHẤT
1. Đơn chất:
- Là chất được tạo nên từ một nguyên tố hóa học.
- Ví dụ: Khí oxygen (O2), kim loại sắt (Fe), than chì (C).
2. Hợp chất:
- Là chất được tạo nên từ hai hay nhiều nguyên tố hóa học.
- Ví dụ: Nước (H2O), muối ăn (NaCl), khí carbon dioxide (CO2).

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Đơn chất do MỘT nguyên tố hóa học tạo nên.
- Hợp chất do TỪ HAI nguyên tố hóa học trở lên tạo nên.`
      }
    ]
  },

  // 8. KHTN 7 - BÀI 8: TỐC ĐỘ CHUYỂN ĐỘNG
  {
    lessonId: 'khtn-7-bai-8',
    matchPatterns: [/tốc độ chuyển động/i, /bài 8[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương III: Tốc độ',
    sections: [
      {
        deMuc: 'I. Khái niệm tốc độ',
        tenHoatDong: 'Hoạt động 2.1: Tìm hiểu khái niệm tốc độ (SGK Trang 45 - 46)',
        thoiLuong: '15 phút',
        mucTieu: 'Nêu được ý nghĩa của tốc độ và định nghĩa được tốc độ là đại lượng đặc trưng cho sự nhanh, chậm của chuyển động.',
        noiDung: 'HS phân tích Bảng 8.1 SGK trang 45 về kết quả chạy cự li 60 m của học sinh; so sánh thời gian và tính quãng đường chạy trong 1 giây.',
        sanPham: 'Bảng số liệu hoàn chỉnh và định nghĩa tốc độ chính xác trong vở học sinh.',
        cot1Trai: `- GV hướng dẫn HS mở SGK trang 45, quan sát Bảng 8.1: Bảng kết quả chạy cự li 60 m.
- Hướng dẫn học sinh tính thương số s/t để tìm quãng đường đi được trong 1 giây.
- [CHỐT KIẾN THỨC]: Khẳng định tốc độ cho biết mức độ nhanh hay chậm của chuyển động.`,
        cot2Phai: `I. KHÁI NIỆM TỐC ĐỘ
1. Phân tích kết quả chạy cự li 60 m (Bảng 8.1 SGK):
- Cùng chạy cự li s = 60 m: Bạn nào hết ít thời gian hơn thì chạy nhanh hơn.
- Thương số quãng đường chia thời gian (s/t) cho biết quãng đường chuyển động trong 1 giây.
2. Ý nghĩa của tốc độ:
- Tốc độ là đại lượng đặc trưng cho sự nhanh, chậm của chuyển động.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Tốc độ là đại lượng cho biết mức độ nhanh hay chậm của chuyển động.
- Trong cùng một khoảng thời gian, vật nào đi được quãng đường dài hơn thì chuyển động nhanh hơn; trên cùng một quãng đường, vật nào đi mất ít thời gian hơn thì chuyển động nhanh hơn.`
      },
      {
        deMuc: 'II. Công thức tính tốc độ',
        tenHoatDong: 'Hoạt động 2.2: Thiết lập và vận dụng công thức tính tốc độ (SGK Trang 46 - 47)',
        thoiLuong: '16 phút',
        mucTieu: 'Viết được công thức tính tốc độ v = s / t; từ đó suy ra các công thức tính quãng đường s = v . t và thời gian t = s / v.',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) cùng thảo luận giải bài toán ví dụ trong SGK trang 46: Một người đi xe đạp đi quãng đường 12 km hết 0,8 h. Tính tốc độ của người đó.',
        sanPham: 'Công thức đóng khung chuẩn mực và lời giải bài tập ví dụ trong phiếu nhóm.',
        cot1Trai: `- Hướng dẫn HS thiết lập công thức từ định nghĩa: v = s / t.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ (4 MÀU MỰC)]: Giải bài tập ví dụ SGK trang 46.
- [CHỐT KIẾN THỨC]: Hướng dẫn học sinh quy tắc tam giác liên hệ 3 đại lượng s, v, t.`,
        cot2Phai: `II. CÔNG THỨC TÍNH TỐC ĐỘ
1. Công thức:
   v = s / t
Trong đó:
- v: Tốc độ của vật chuyển động.
- s: Quãng đường vật đi được.
- t: Thời gian vật đi hết quãng đường đó.
2. Các công thức suy ra:
- Quãng đường: s = v . t
- Thời gian: t = s / v

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Công thức tính tốc độ: v = s / t
- Trong đó: s là quãng đường đi được; t là thời gian đi hết quãng đường đó; v là tốc độ.
- Các công thức suy ra: s = v . t ; t = s / v.`
      },
      {
        deMuc: 'III. Đơn vị đo tốc độ',
        tenHoatDong: 'Hoạt động 2.3: Đơn vị đo tốc độ & Thiết bị đo tốc độ trong thực tế (SGK Trang 47 - 48)',
        thoiLuong: '12 phút',
        mucTieu: 'Nêu được đơn vị đo tốc độ trong hệ SI là mét trên giây (m/s) và kilômét trên giờ (km/h); biết cách đổi đơn vị (1 m/s = 3,6 km/h); nhận biết tốc kế.',
        noiDung: 'HS thực hành đổi đơn vị đo tốc độ; quan sát Hình 8.2 (Tốc kế trên xe máy, ô tô); quan sát Sơ đồ tư duy 16:9 3D Pixar.',
        sanPham: 'Quy tắc đổi đơn vị tốc độ và Sơ đồ tư duy 16:9 tổng kết bài học trong vở học sinh.',
        cot1Trai: `- Hướng dẫn HS cách đổi: 1 km/h = 1000m / 3600s = 1/3.6 m/s; 1 m/s = 3.6 km/h.
- Cho HS quan sát tốc kế trên xe máy, ô tô.
- [CHỐT KIẾN THỨC]: Hướng dẫn học sinh chốt kiến thức cốt lõi của đề mục vào vở.`,
        cot2Phai: `III. ĐƠN VỊ ĐO TỐC ĐỘ
1. Đơn vị đo hợp pháp:
- Trong hệ đo lường chính thức của nước ta (SI), đơn vị đo tốc độ là mét trên giây (m/s) và kilômét trên giờ (km/h).
2. Quy tắc đổi đơn vị:
- 1 m/s = 3,6 km/h
- 1 km/h = 1 / 3,6 m/s ≈ 0,28 m/s
3. Dụng cụ đo tốc độ trực tiếp: Tốc kế (gắn trên bảng đồng hồ ô tô, xe máy).

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Đơn vị đo tốc độ thường dùng là mét trên giây (m/s) và kilômét trên giờ (km/h).
- Quy tắc đổi đơn vị: 1 m/s = 3,6 km/h (Muốn đổi m/s ra km/h nhân với 3,6; ngược lại chia cho 3,6).
- Tốc kế là dụng cụ đo trực tiếp tốc độ của các phương tiện giao thông.`
      }
    ]
  },

  // 9. KHTN 7 - BÀI 9: ĐO TỐC ĐỘ
  {
    lessonId: 'khtn-7-bai-9',
    matchPatterns: [/đo tốc độ/i, /bài 9[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương III: Tốc độ',
    sections: [
      {
        deMuc: 'I. Đo tốc độ dùng đồng hồ bấm giây',
        tenHoatDong: 'Hoạt động 2.1: Đo tốc độ dùng đồng hồ bấm giây (SGK Trang 49 - 50)',
        thoiLuong: '18 phút',
        mucTieu: 'Mô tả được cách đo tốc độ bằng thước và đồng hồ bấm giây trong phòng thực hành.',
        noiDung: 'HS đọc SGK trang 49, tìm hiểu dụng cụ đo và quy trình 2 cách đo; thực hành đo tốc độ chuyển động của xe đồ chơi trên máng nghiêng (Bảng 9.1).',
        sanPham: 'Bảng 9.1 ghi kết quả đo 3 lần và giá trị tốc độ trung bình tính được.',
        cot1Trai: `- GV giới thiệu dụng cụ đo: thước đo chiều dài s, đồng hồ bấm giây đo thời gian t.
- Hướng dẫn quy trình 5 bước đo trong phòng thí nghiệm.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ]: Thực hành đo 3 lần và ghi Bảng 9.1.
- [CHỐT KIẾN THỨC]: Chuẩn hóa quy trình đo và công thức tính.`,
        cot2Phai: `I. ĐO TỐC ĐỘ DÙNG ĐỒNG HỒ BẤM GIÂY
1. Dụng cụ đo:
- Thước thẳng (hoặc thước cuộn) dùng để đo độ dài quãng đường s.
- Đồng hồ bấm giây dùng để đo thời gian chuyển động t.
2. Các bước tiến hành:
- Bước 1: Dùng thước đo quãng đường s, xác định vạch xuất phát và vạch đích.
- Bước 2: Dùng đồng hồ bấm giây đo thời gian t từ khi vật xuất phát đến khi tới đích.
- Bước 3: Thực hiện phép đo 3 lần để lấy giá trị trung bình:
  s_tb = (s1 + s2 + s3) / 3 ; t_tb = (t1 + t2 + t3) / 3
- Bước 4: Tính tốc độ theo công thức: v = s_tb / t_tb.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Muốn đo tốc độ chuyển động cần đo độ dài quãng đường (bằng thước) và đo thời gian đi hết quãng đường đó (bằng đồng hồ).
- Quy trình đo bằng đồng hồ bấm giây: Đo s -> Đo t (3 lần) -> Tính giá trị trung bình -> Tính v = s/t.`
      },
      {
        deMuc: 'II. Dùng đồng hồ đo thời gian hiện số và cổng quang điện trong việc đo tốc độ',
        tenHoatDong: 'Hoạt động 2.2: Đo tốc độ bằng đồng hồ đo thời gian hiện số và cổng quang điện (SGK Trang 50 - 51)',
        thoiLuong: '15 phút',
        mucTieu: 'Mô tả được cách đo tốc độ bằng đồng hồ hiện số và cổng quang điện; phân tích ưu điểm so với phương pháp thủ công.',
        noiDung: 'HS quan sát Hình 9.3 SGK, nhận biết 6 bộ phận thiết bị; phân tích nguyên tắc hoạt động khi viên bi chắn tia hồng ngoại tại cổng quang (3) và (4).',
        sanPham: 'Sơ đồ nguyên lý đo tốc độ tự động bằng cổng quang điện trong vở ghi.',
        cot1Trai: `- GV chiếu Hình 9.3 giới thiệu bộ thí nghiệm đo tốc độ hiện đại.
- Giải thích nguyên lý cổng quang điện: tự động phát hiện vật chắn sáng và ngắt mạch đếm thời gian.
- [CHỐT KIẾN THỨC]: Nhấn mạnh độ chính xác cao và loại trừ sai số bấm tay.`,
        cot2Phai: `II. DÙNG ĐỒNG HỒ ĐO THỜI GIAN HIỆN SỐ VÀ CỔNG QUANG ĐIỆN
1. Dụng cụ đo (Hình 9.3 SGK):
- Cổng quang điện (cảm biến hồng ngoại).
- Đồng hồ đo thời gian hiện số (chọn chế độ đo thời gian A <-> B).
- Máng trượt có gắn thước đo và xe lăn / viên bi sắt.
2. Nguyên lý hoạt động:
- Khi vật đi qua cổng quang 1: Đồng hồ bắt đầu đếm thời gian tự động.
- Khi vật đi qua cổng quang 2: Đồng hồ tự động ngắt và hiển thị chính xác thời gian t.
- Đo khoảng cách s giữa 2 cổng quang -> Tính tốc độ: v = s / t.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Đồng hồ đo thời gian hiện số phối hợp với cổng quang điện giúp đo thời gian chuyển động tự động với độ chính xác rất cao, khắc phục được sai số do phản xạ bấm tay của con người.`
      },
      {
        deMuc: 'III. Thiết bị bắn tốc độ',
        tenHoatDong: 'Hoạt động 2.3: Tìm hiểu thiết bị bắn tốc độ trong an toàn giao thông (SGK Trang 51 - 52)',
        thoiLuong: '12 phút',
        mucTieu: 'Giải thích được sơ lược nguyên tắc hoạt động của thiết bị bắn tốc độ trong kiểm tra phương tiện giao thông; hệ thống hóa toàn bài bằng Sơ đồ tư duy 16:9.',
        noiDung: 'HS đọc thông tin mục III và quan sát Hình 9.4 SGK; giải bài tập camera ghi thời gian ô tô chạy qua 2 vạch mốc (s = 5m, t = 0,35s); quan sát Sơ đồ tư duy 16:9 3D Pixar.',
        sanPham: 'Lời giải bài tập tính tốc độ ô tô (v = 5 / 0,35 = 14,29 m/s = 51,4 km/h < 60 km/h, không vượt tốc độ) và Sơ đồ tư duy hoàn chỉnh.',
        cot1Trai: `- GV hướng dẫn phân tích Hình 9.4 SGK về thiết bị bắn tốc độ gắn camera.
- Cho HS tính toán bài tập Hình 9.4: Ô tô có vi phạm tốc độ tối đa 60 km/h không?
- [CHỐT KIẾN THỨC]: Hướng dẫn học sinh chốt kiến thức cốt lõi của đề mục vào vở.
- [CHỐT KIẾN THỨC]: Tuyên truyền chấp hành luật an toàn giao thông.`,
        cot2Phai: `III. THIẾT BỊ BẮN TỐC ĐỘ
1. Nguyên tắc hoạt động (Hình 9.4 SGK):
- Thiết bị gồm camera kĩ thuật số kết hợp máy tính nhỏ để tính thời gian xe chạy qua hai vạch mốc cố định trên đường cách nhau khoảng cách s.
- Tự động tính: v = s / t và so sánh với tốc độ giới hạn cho phép của cung đường.
- Nếu xe vượt tốc độ, thiết bị tự động chụp lại biển số xe làm bằng chứng xử phạt.
2. Bài tập vận dụng Hình 9.4:
- Quãng đường giữa 2 vạch mốc: s = 5 m.
- Thời gian chạy: t = 0,35 s.
- Tốc độ xe: v = s / t = 5 / 0,35 ≈ 14,29 m/s = 51,44 km/h.
- Kết luận: Xe không vượt quá tốc độ giới hạn (60 km/h).

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Thiết bị "bắn tốc độ" sử dụng trong kiểm soát giao thông hoạt động bằng cách chụp ảnh phương tiện và tự động tính tốc độ xe chạy giữa hai vạch mốc cố định hoặc dựa trên hiệu ứng truyền sóng.
- Người tham gia giao thông cần nghiêm túc tuân thủ biển báo tốc độ để đảm bảo an toàn tính mạng.`
      }
    ]
  },

  // 10. KHTN 7 - BÀI 10: ĐỒ THỊ QUÃNG ĐƯỜNG - THỜI GIAN
  {
    lessonId: 'khtn-7-bai-10',
    matchPatterns: [/đồ thị quãng đường/i, /đồ thị quãng đường - thời gian/i, /bài 10[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương III: Tốc độ',
    sections: [
      {
        deMuc: 'I. Lập bảng ghi quãng đường đi được theo thời gian',
        tenHoatDong: 'Hoạt động 2.1: Thu thập số liệu và lập bảng quãng đường - thời gian (SGK Trang 53 - 54)',
        thoiLuong: '14 phút',
        mucTieu: 'Biết cách lập bảng ghi các giá trị quãng đường s tương ứng với các mốc thời gian t.',
        noiDung: 'HS phân tích Bảng 10.1 SGK về chuyển động của người đi bộ; xác định các cặp số liệu (t, s).',
        sanPham: 'Bảng ghi số liệu quãng đường - thời gian hoàn chỉnh trong vở học sinh.',
        cot1Trai: `- Hướng dẫn HS đọc và phân tích bảng số liệu 10.1 SGK.
- [CHỐT KIẾN THỨC]: Hướng dẫn chọn mốc thời gian t = 0 và vị trí ban đầu s = 0.`,
        cot2Phai: `I. LẬP BẢNG GHI QUÃNG ĐƯỜNG ĐI ĐƯỢC THEO THỜI GIAN
- Bảng ghi quãng đường đi được theo thời gian ghi lại các giá trị quãng đường s mà vật đi được sau những khoảng thời gian t nhất định.
- Là căn cứ số liệu thực nghiệm để vẽ đồ thị biểu diễn chuyển động.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Bảng ghi quãng đường - thời gian giúp theo dõi diễn biến chuyển động của vật theo từng mốc thời gian xác định.`
      },
      {
        deMuc: 'II. Vẽ đồ thị quãng đường - thời gian',
        tenHoatDong: 'Hoạt động 2.2: Quy trình các bước vẽ đồ thị s - t (SGK Trang 54 - 56)',
        thoiLuong: '16 phút',
        mucTieu: 'Vẽ được đồ thị quãng đường - thời gian trong hệ trục tọa độ vuông góc (trục hoành Ot, trục tung Os).',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) thực hiện 4 bước vẽ đồ thị trên giấy kẻ ô li A3 từ số liệu Bảng 10.1.',
        sanPham: 'Đồ thị s - t chuẩn xác, các điểm chấm nối thành đường thẳng dốc lên trên phiếu nhóm A3.',
        cot1Trai: `- Hướng dẫn 4 bước vẽ: Vẽ 2 trục tọa độ -> Chia tỉ lệ -> Xác định các điểm tọa độ -> Nối các điểm.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ]: Thực hành vẽ trên bảng phụ A3.
- [CHỐT KIẾN THỨC]: Đường biểu diễn đồ thị dốc lên biểu thị vật chuyển động thẳng đều.`,
        cot2Phai: `II. CÁCH VẼ ĐỒ THỊ QUÃNG ĐƯỜNG - THỜI GIAN
1. Quy trình vẽ:
- Bước 1: Vẽ hai trục vuông góc: Trục hoành Ot (thời gian), trục tung Os (quãng đường).
- Bước 2: Chọn tỉ xích thích hợp trên mỗi trục tọa độ.
- Bước 3: Xác định các điểm biểu diễn các cặp giá trị (t, s) tương ứng.
- Bước 4: Nối các điểm lại với nhau ta được đồ thị quãng đường - thời gian.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Đồ thị quãng đường - thời gian mô tả mối liên hệ giữa quãng đường đi được và thời gian chuyển động.
- Chuyển động với tốc độ không đổi (chuyển động đều) có đồ thị là đường thẳng nghiêng dốc lên.
- Đoạn đồ thị nằm ngang song song trục Ot biểu thị vật đứng yên (không chuyển động).`
      },
      {
        deMuc: 'III. Vận dụng đồ thị để xác định vị trí, thời gian và tốc độ',
        tenHoatDong: 'Hoạt động 2.3: Đọc đồ thị tìm vị trí, thời gian, tốc độ (SGK Trang 56 - 57)',
        thoiLuong: '12 phút',
        mucTieu: 'Biết khai thác đồ thị để tìm quãng đường, thời gian và tính tốc độ v = s / t; củng cố bằng Sơ đồ tư duy 16:9.',
        noiDung: 'HS tra cứu từ đồ thị Hình 10.2 để tìm vị trí của vật tại t = 3s và tính tốc độ của vật; vẽ sơ đồ tư duy.',
        sanPham: 'Đáp số bài tập tra cứu đồ thị và Sơ đồ tư duy 16:9 hoàn chỉnh.',
        cot1Trai: `- Hướng dẫn phương pháp gióng đường vuông góc từ trục Ot sang trục Os và ngược lại.
- [CHỐT KIẾN THỨC]: Hướng dẫn học sinh chốt kiến thức cốt lõi của đề mục vào vở.`,
        cot2Phai: `III. TÌM TỐC ĐỘ TỪ ĐỒ THỊ
- Từ một điểm trên đồ thị: Gióng xuống trục thời gian được t, gióng sang trục quãng đường được s.
- Tính tốc độ của vật: v = s / t.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Dựa vào đồ thị quãng đường - thời gian có thể:
  1. Biết được vật đang chuyển động hay đứng yên.
  2. Xác định quãng đường vật đi được sau thời gian t bất kì.
  3. Tính được tốc độ của vật bằng tỉ số giữa quãng đường và thời gian tương ứng (v = s / t).`
      }
    ]
  },

  // 11. KHTN 7 - BÀI 11: THẢO LUẬN VỀ ẢNH HƯỞNG CỦA TỐC ĐỘ TRONG AN TOÀN GIAO THÔNG
  {
    lessonId: 'khtn-7-bai-11',
    matchPatterns: [/ảnh hưởng của tốc độ/i, /an toàn giao thông/i, /bài 11[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương III: Tốc độ',
    sections: [
      {
        deMuc: 'I. Quy định về tốc độ giới hạn',
        tenHoatDong: 'Hoạt động 2.1: Tìm hiểu các biển báo tốc độ giới hạn (SGK Trang 58 - 59)',
        thoiLuong: '14 phút',
        mucTieu: 'Nhận biết và giải thích được ý nghĩa của các biển báo tốc độ tối đa, tốc độ tối thiểu trên đường bộ.',
        noiDung: 'HS quan sát Hình 11.1 SGK về biển hiệu lệnh P.127 (tốc độ tối đa cho phép) và R.306 (tốc độ tối thiểu); thảo luận ý nghĩa.',
        sanPham: 'Bảng ghi ý nghĩa các biển báo tốc độ trong an toàn giao thông.',
        cot1Trai: `- GV chiếu hình ảnh các biển báo tốc độ trên các tuyến đường quốc lộ và cao tốc.
- [CHỐT KIẾN THỨC]: Tuân thủ nghiêm ngặt tốc độ quy định.`,
        cot2Phai: `I. QUY ĐỊNH VỀ TỐC ĐỘ GIỚI HẠN
- Biển P.127: Tốc độ tối đa cho phép xe cơ giới lưu thông.
- Biển R.306: Tốc độ tối thiểu cho phép xe cơ giới lưu thông.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Tốc độ giới hạn được quy định nhằm đảm bảo các phương tiện lưu thông an toàn, tránh xung đột và tai nạn giao thông.`
      },
      {
        deMuc: 'II. Ảnh hưởng của tốc độ đối với an toàn giao thông',
        tenHoatDong: 'Hoạt động 2.2: Phân tích khoảng cách phanh và hậu quả va chạm (SGK Trang 59 - 61)',
        thoiLuong: '16 phút',
        mucTieu: 'Hiểu rõ tốc độ càng cao thì quãng đường phanh càng dài, mức độ phá hủy va chạm càng nghiêm trọng.',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) phân tích biểu đồ quãng đường phản ứng và quãng đường phanh khi xe chạy ở 40, 60, 80 km/h.',
        sanPham: 'Bản phân tích mối liên hệ giữa tốc độ và khoảng cách an toàn của nhóm.',
        cot1Trai: `- Hướng dẫn HS phân tích công thức động năng và quãng đường phanh xe.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ]: Giữ đúng 4 màu mực.
- [CHỐT KIẾN THỨC]: Tốc độ tăng gấp đôi thì năng lượng va chạm tăng gấp 4 lần.`,
        cot2Phai: `II. ẢNH HƯỞNG CỦA TỐC ĐỘ KHI XẢY RA TAI NẠN
- Khi tốc độ tăng cao, thời gian người lái xe phản ứng để xử lý tình huống giảm xuống.
- Quãng đường phanh để xe dừng lại tăng lên tỉ lệ thuận với bình phương tốc độ.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Tốc độ phương tiện càng cao: Thời gian xử lý tình huống càng ít, quãng đường phanh càng dài, lực va chạm càng lớn và thương vong càng nghiêm trọng.`
      },
      {
        deMuc: 'III. Quy tắc giữ khoảng cách an toàn giữa hai xe',
        tenHoatDong: 'Hoạt động 2.3: Quy tắc 3 giây và giữ khoảng cách an toàn (SGK Trang 61 - 62)',
        thoiLuong: '12 phút',
        mucTieu: 'Nắm vững quy tắc "3 giây" để xác định khoảng cách an toàn tối thiểu khi lái xe trên đường.',
        noiDung: 'HS áp dụng quy tắc 3 giây tính khoảng cách an toàn khi chạy 60 km/h (s ≈ 50m); vẽ sơ đồ tư duy 16:9.',
        sanPham: 'Thông điệp an toàn giao thông và Sơ đồ tư duy 16:9 hoàn chỉnh trong vở học sinh.',
        cot1Trai: `- Hướng dẫn HS áp dụng quy tắc 3 giây trong thực tế điều khiển phương tiện.
- [CHỐT KIẾN THỨC]: Hướng dẫn học sinh chốt kiến thức cốt lõi của đề mục vào vở.`,
        cot2Phai: `III. KHOẢNG CÁCH AN TOÀN GIỮA HAI XE
- Quy tắc 3 giây: Giữ khoảng cách tương đương quãng đường xe chạy trong 3 giây đối với xe chạy phía trước.
- Khi thời tiết mưa gió, đường trơn trượt: Khoảng cách an toàn cần tăng gấp đôi.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Luôn giữ khoảng cách an toàn tối thiểu theo quy định và làm chủ tốc độ lái xe: "Nhanh một giây - Chậm cả đời".`
      }
    ]
  },

  // 12. KHTN 7 - BÀI 12: SÓNG ÂM
  {
    lessonId: 'khtn-7-bai-12',
    matchPatterns: [/sóng âm/i, /âm thanh/i, /nguồn âm/i, /bài 12[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương IV: Âm thanh',
    sections: [
      {
        deMuc: 'I. Dao động và Nguồn âm',
        tenHoatDong: 'Hoạt động 2.1: Nhận biết dao động phát ra âm thanh (SGK Trang 63 - 64)',
        thoiLuong: '15 phút',
        mucTieu: 'Giải thích được mọi vật phát ra âm thanh đều dao động; nhận biết các nguồn âm trong tự nhiên và đời sống.',
        noiDung: 'HS làm thí nghiệm gõ âm thoa, sờ ngón tay vào thanh quản khi nói hoặc quan sát mặt trống dao động làm nảy hạt xốp.',
        sanPham: 'Kết luận thực nghiệm: Vật phát ra âm đều dao động.',
        cot1Trai: `- Cho HS làm thí nghiệm thực tế với dây cao su hoặc âm thoa.
- [CHỐT KIẾN THỨC]: Nguồn âm là vật phát ra âm, các vật phát ra âm đều dao động.`,
        cot2Phai: `I. DAO ĐỘNG VÀ NGUỒN ÂM
- Vật phát ra âm thanh được gọi là nguồn âm.
- Khi phát ra âm, bề mặt hoặc các bộ phận của nguồn âm đều dao động (rung động qua lại vị trí cân bằng).

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Nguồn âm là vật phát ra âm thanh.
- Khi phát ra âm thanh, các vật đều dao động.`
      },
      {
        deMuc: 'II. Sự truyền sóng âm và Môi trường truyền âm',
        tenHoatDong: 'Hoạt động 2.2: Sóng âm truyền trong các môi trường (SGK Trang 64 - 66)',
        thoiLuong: '16 phút',
        mucTieu: 'Nêu được âm truyền được trong các chất rắn, lỏng, khí và không truyền được trong chân không.',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) phân tích thí nghiệm chuông điện đặt trong bình hút chân không; so sánh tốc độ truyền âm: Rắn > Lỏng > Khí.',
        sanPham: 'Bảng so sánh khả năng truyền âm qua 3 môi trường trong phiếu nhóm.',
        cot1Trai: `- Hướng dẫn HS quan sát thí nghiệm bình hút chân không.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ]: Thảo luận bằng 4 màu mực.
- [CHỐT KIẾN THỨC]: Tốc độ truyền âm: v_rắn > v_lỏng > v_khí; chân không không truyền được âm.`,
        cot2Phai: `II. MÔI TRƯỜNG TRUYỀN ÂM
1. Môi trường truyền âm:
- Sóng âm lan truyền được trong các môi trường vật chất: Chất rắn, chất lỏng, chất khí.
- Sóng âm KHÔNG truyền được trong môi trường chân không.
2. Tốc độ truyền âm:
- Tốc độ truyền âm trong chất rắn lớn hơn trong chất lỏng, trong chất lỏng lớn hơn trong chất khí (v_rắn > v_lỏng > v_khí).

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Âm thanh truyền được trong các môi trường rắn, lỏng, khí dưới dạng sóng âm.
- Âm KHÔNG truyền được trong chân không.
- Tốc độ truyền âm: Chất rắn > Chất lỏng > Chất khí.`
      }
    ]
  },

  // 18. KHTN 7 - BÀI 18: NAM CHÂM
  {
    lessonId: 'khtn-7-bai-18',
    matchPatterns: [/nam châm/i, /từ tính/i, /cực từ/i, /bài 18[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương VI: Từ',
    sections: [
      {
        deMuc: 'I. Từ tính của nam châm',
        tenHoatDong: 'Hoạt động 2.1: Khám phá từ tính của nam châm (SGK Trang 87 - 88)',
        thoiLuong: '15 phút',
        mucTieu: 'Nêu được nam châm hút được các vật bằng sắt, thép, niken, coban (vật liệu từ); mỗi nam châm luôn có hai cực từ: Cực Bắc (N) và Cực Nam (S).',
        noiDung: 'HS làm thí nghiệm đưa thanh nam châm lại gần các vật liệu khác nhau; quan sát sự phân bố mạt sắt nhiều nhất ở hai đầu cực.',
        sanPham: 'Bảng phân loại vật liệu bị nam châm hút và xác định 2 cực từ.',
        cot1Trai: `- Phát dụng cụ thí nghiệm cho các nhóm HS khám phá.
- [CHỐT KIẾN THỨC]: Quy ước kí hiệu cực Bắc (N - North) sơn màu đỏ, cực Nam (S - South) sơn màu xanh hoặc trắng.`,
        cot2Phai: `I. TỪ TÍNH CỦA NAM CHÂM
1. Khả năng hút vật liệu từ:
- Nam châm có khả năng hút các vật làm bằng vật liệu từ như: Sắt, thép, niken, côban...
2. Hai cực từ của nam châm:
- Mỗi nam châm luôn có hai cực từ, nơi từ tính mạnh nhất:
  + Cực Bắc (North): Kí hiệu là N (thường sơn đỏ).
  + Cực Nam (South): Kí hiệu là S (thường sơn xanh/trắng).

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Nam châm hút được các vật bằng sắt, niken, coban...
- Mỗi nam châm đều có hai cực từ: Cực Bắc (kí hiệu chữ N) và Cực Nam (kí hiệu chữ S).`
      },
      {
        deMuc: 'II. Tương tác giữa hai nam châm',
        tenHoatDong: 'Hoạt động 2.2: Quy tắc tương tác hai cực từ (SGK Trang 88 - 90)',
        thoiLuong: '16 phút',
        mucTieu: 'Thực nghiệm chứng minh quy tắc tương tác từ: Các cực cùng tên đẩy nhau, các cực khác tên hút nhau.',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) đưa 2 cực cùng tên lại gần nhau, đưa 2 cực khác tên lại gần nhau; quan sát lực đẩy / lực hút.',
        sanPham: 'Bản đúc kết quy tắc tương tác từ trong phiếu nhóm.',
        cot1Trai: `- Hướng dẫn HS thực hiện thí nghiệm tương tác giữa 2 thanh nam châm thẳng.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ]: Ghi nhật ký thí nghiệm bằng 4 màu mực.
- [CHỐT KIẾN THỨC]: Cùng tên đẩy nhau, khác tên hút nhau.`,
        cot2Phai: `II. TƯƠNG TÁC GIỮA CÁC CỰC TỪ
- Khi đưa hai cực của hai nam châm lại gần nhau:
  + Các cực cùng tên (N - N hoặc S - S) thì ĐẨY nhau.
  + Các cực khác tên (N - S hoặc S - N) thì HÚT nhau.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Quy tắc tương tác giữa hai nam châm: Cùng cực thì ĐẨY nhau, khác cực thì HÚT nhau.`
      }
    ]
  },

  // 22. KHTN 7 - BÀI 22: QUANG HỢP Ở THỰC VẬT
  {
    lessonId: 'khtn-7-bai-22',
    matchPatterns: [/quang hợp/i, /quang hợp ở thực vật/i, /bài 22[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương VII: Trao đổi chất và chuyển hóa năng lượng',
    sections: [
      {
        deMuc: 'I. Khái niệm và Phương trình quang hợp',
        tenHoatDong: 'Hoạt động 2.1: Bản chất và phương trình chữ của quang hợp (SGK Trang 104 - 106)',
        thoiLuong: '16 phút',
        mucTieu: 'Nêu được khái niệm quang hợp; viết được phương trình quang hợp dạng chữ; xác định các chất tham gia và sản phẩm tạo thành.',
        noiDung: 'HS quan sát sơ đồ quang hợp Hình 22.1; xác định nguyên liệu (nước, khí carbon dioxide), điều kiện (ánh sáng, diệp lục) và sản phẩm (glucose, khí oxygen).',
        sanPham: 'Phương trình chữ của quang hợp đóng khung đẹp mắt trong vở ghi.',
        cot1Trai: `- Hướng dẫn HS phân tích dòng vật chất và năng lượng trong quang hợp.
- [CHỐT KIẾN THỨC]: Phương trình chữ chuẩn mực của quang hợp.`,
        cot2Phai: `I. KHÁI NIỆM VÀ PHƯƠNG TRÌNH QUANG HỢP
1. Khái niệm:
- Quang hợp là quá trình lá cây sử dụng nước và khí carbon dioxide nhờ năng lượng ánh sáng do diệp lục hấp thụ để tổng hợp chất hữu cơ (glucose) và giải phóng khí oxygen.
2. Phương trình chữ:
   Nước + Carbon dioxide  --(Ánh sáng / Diệp lục)-->  Glucose + Oxygen

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Phương trình quang hợp:
  Nước + Khí carbon dioxide --(Ánh sáng / Diệp lục)--> Glucose + Khí oxygen.
- Quang hợp tổng hợp chất hữu cơ nuôi sống cây và cung cấp oxygen cho sự sống trên Trái Đất.`
      },
      {
        deMuc: 'II. Vai trò của lá cây đối với chức năng quang hợp',
        tenHoatDong: 'Hoạt động 2.2: Cấu tạo của lá thích nghi với quang hợp (SGK Trang 106 - 108)',
        thoiLuong: '15 phút',
        mucTieu: 'Mô tả được các đặc điểm cấu tạo của lá (phiến lá rộng, gân lá, lục lạp chứa diệp lục, khí khổng) thích nghi với việc hấp thụ ánh sáng và trao đổi khí.',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) quan sát tiêu bản lá cây qua kính lúp/kính hiển vi; phân tích vai trò của khí khổng và lục lạp.',
        sanPham: 'Sơ đồ thích nghi của lá cây với quá trình quang hợp trong phiếu nhóm.',
        cot1Trai: `- Hướng dẫn HS quan sát mặt dưới của lá và tế bào hạt đậu tạo nên khí khổng.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ]: Phân tích bằng 4 màu mực.
- [CHỐT KIẾN THỨC]: Lá là cơ quan quang hợp chủ yếu của thực vật.`,
        cot2Phai: `II. ĐẶC ĐIỂM CỦA LÁ CÂY THÍCH NGHI VỚI QUANG HỢP
- Phiến lá mỏng, diện tích bề mặt rộng giúp hấp thụ tối đa ánh sáng mặt trời.
- Tế bào thịt lá chứa nhiều lục lạp với chất diệp lục có nhiệm vụ hấp thụ và chuyển hóa năng lượng ánh sáng.
- Bề mặt lá có nhiều khí khổng giúp khí CO2 đi vào và khí O2, hơi nước thoát ra dễ dàng.
- Gân lá chứa mạch dẫn nước và muối khoáng lên lá và dẫn chất hữu cơ đi nuôi cây.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Lá là cơ quan quang hợp chủ yếu của cây.
- Các đặc điểm thích nghi: Phiến lá rộng, chứa lục lạp có diệp lục, có hệ thống khí khổng trao đổi khí và gân lá vận chuyển nước.`
      }
    ]
  },

  // 35. KHTN 7 - BÀI 35: SINH TRƯỞNG VÀ PHÁT TRIỂN Ở SINH VẬT
  {
    lessonId: 'khtn-7-bai-35',
    matchPatterns: [/sinh trưởng và phát triển/i, /sinh vật/i, /bài 35[:\s]/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương IX: Sinh trưởng và phát triển',
    sections: [
      {
        deMuc: 'I. Khái niệm sinh trưởng và phát triển',
        tenHoatDong: 'Hoạt động 2.1: Phân biệt sinh trưởng và phát triển (SGK Trang 158 - 160)',
        thoiLuong: '15 phút',
        mucTieu: 'Nêu được khái niệm sinh trưởng (tăng kích thước, khối lượng cơ thể) và phát triển (biến đổi về chất lượng, phân hóa cơ quan và phát sinh hình thái).',
        noiDung: 'HS quan sát sơ đồ vòng đời của cây hoa hướng dương hoặc con ếch; chỉ ra giai đoạn sinh trưởng và giai đoạn phát triển.',
        sanPham: 'Bảng so sánh phân biệt sinh trưởng và phát triển trong vở học sinh.',
        cot1Trai: `- Hướng dẫn HS quan sát hình ảnh sự lớn lên của hạt đậu nảy mầm.
- [CHỐT KIẾN THỨC]: Mối quan hệ gắn bó giữa sinh trưởng và phát triển.`,
        cot2Phai: `I. KHÁI NIỆM SINH TRƯỞNG VÀ PHÁT TRIỂN
1. Sinh trưởng:
- Là sự tăng lên về kích thước và khối lượng của cơ thể do sự tăng lên về số lượng và kích thước của các tế bào.
2. Phát triển:
- Bao gồm sinh trưởng, phân hóa tế bào, phát sinh hình thái các cơ quan và chức năng sinh lí mới của cơ thể.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Sinh trưởng là sự tăng kích thước và khối lượng của cơ thể.
- Phát triển là quá trình biến đổi bao gồm sinh trưởng, phân hóa tế bào và phát sinh các cơ quan mới.`
      },
      {
        deMuc: 'II. Mối quan hệ giữa sinh trưởng và phát triển',
        tenHoatDong: 'Hoạt động 2.2: Mối quan hệ tương hỗ giữa sinh trưởng và phát triển (SGK Trang 160 - 162)',
        thoiLuong: '16 phút',
        mucTieu: 'Phân tích được mối quan hệ mật thiết: Sinh trưởng là tiền đề của phát triển; phát triển làm thay đổi tốc độ sinh trưởng.',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) phân tích ví dụ: Cây phải lớn lên đến độ tuổi nhất định mới ra hoa, kết quả.',
        sanPham: 'Sơ đồ tư duy liên kết sinh trưởng - phát triển của nhóm.',
        cot1Trai: `- Giao nhiệm vụ cho các nhóm phân tích vòng đời của sinh vật.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ]: Giữ đúng 4 màu mực.
- [CHỐT KIẾN THỨC]: Sinh trưởng và phát triển diễn ra song hành trong suốt vòng đời.`,
        cot2Phai: `II. MỐI QUAN HỆ GIỮA SINH TRƯỞNG VÀ PHÁT TRIỂN
- Sinh trưởng tạo tiền đề cho phát triển: Cơ thể phải sinh trưởng đạt khối lượng và kích thước nhất định mới có thể phân hóa tế bào và phát sinh hình thái mới.
- Phát triển làm thay đổi tốc độ sinh trưởng: Các giai đoạn phát triển khác nhau sẽ quy định mức độ sinh trưởng khác nhau của sinh vật.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Sinh trưởng và phát triển là hai quá trình liên quan mật thiết, không tách rời nhau trong suốt vòng đời của sinh vật.`
      }
    ]
  },

  // 36. CÔNG NGHỆ 6 - BÀI 1: KHÁI QUÁT VỀ NHÀ Ở
  {
    lessonId: 'cong-nghe-6-bai-1',
    matchPatterns: [/nhà ở/i, /vai trò của nhà ở/i, /công nghệ 6/i],
    subject: 'Công nghệ',
    grade: 6,
    chapter: 'Chương I: Nhà ở',
    sections: [
      {
        deMuc: 'I. Vai trò của nhà ở',
        tenHoatDong: 'Hoạt động 2.1: Tìm hiểu vai trò của nhà ở đối với con người (SGK Trang 6 - 8)',
        thoiLuong: '14 phút',
        mucTieu: 'Nêu được vai trò nơi trú ngụ, bảo vệ con người trước các tác động của thiên nhiên và là tổ ấm gắn kết gia đình.',
        noiDung: 'HS quan sát Hình 1.1 SGK, liên hệ ngôi nhà của gia đình mình để thảo luận.',
        sanPham: 'Bảng tổng hợp vai trò của nhà ở trong vở ghi bài.',
        cot1Trai: `- Hướng dẫn HS quan sát tranh ảnh các ngôi nhà trong điều kiện thời tiết khắc nghiệt.
- [CHỐT KIẾN THỨC]: Nhà ở là nhu cầu thiết yếu hàng đầu của con người.`,
        cot2Phai: `I. VAI TRÒ CỦA NHÀ Ở
- Là nơi trú ngụ an toàn của con người, bảo vệ con người tránh khỏi những ảnh hưởng xấu của thiên nhiên và môi trường (mưa, nắng, gió bão, thú dữ...).
- Là nơi đáp ứng các nhu cầu sinh hoạt hàng ngày (ăn uống, nghỉ ngơi, học tập, giải trí...).
- Là tổ ấm gắn kết tình cảm giữa các thành viên trong gia đình.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Nhà ở là nơi trú ngụ của con người, bảo vệ con người trước tác động xấu của thiên nhiên và xã hội, phục vụ các nhu cầu sinh hoạt và là tổ ấm gia đình.`
      },
      {
        deMuc: 'II. Đặc điểm chung của nhà ở',
        tenHoatDong: 'Hoạt động 2.2: Cấu tạo và các khu vực chức năng trong nhà ở (SGK Trang 8 - 10)',
        thoiLuong: '16 phút',
        mucTieu: 'Phân tích được cấu tạo chung gồm: Phần móng, phần thân (cột, tường, sàn) và phần mái; kể tên các khu vực chức năng trong nhà.',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) vẽ sơ đồ mặt bằng ngôi nhà mơ ước có đầy đủ các khu vực chức năng.',
        sanPham: 'Bản thiết kế mặt bằng nhà ở bằng 4 màu mực của nhóm.',
        cot1Trai: `- Hướng dẫn HS phân tích các bộ phận chịu lực chính của ngôi nhà.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ]: Giữ đúng 4 màu mực.
- [CHỐT KIẾN THỨC]: Cấu tạo 3 phần của ngôi nhà.`,
        cot2Phai: `II. ĐẶC ĐIỂM CHUNG CỦA NHÀ Ở
1. Cấu tạo chung:
- Phần móng nhà: Nằm sâu dưới mặt đất, có nhiệm vụ nâng đỡ toàn bộ ngôi nhà.
- Phần thân nhà: Gồm cột, tường, sàn, dầm giúp tạo nên các không gian phòng.
- Phần mái nhà: Che chở cho ngôi nhà khỏi mưa nắng.
2. Các khu vực chức năng:
- Phòng khách, phòng ngủ, phòng bếp, phòng ăn, khu vệ sinh...

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Nhà ở gồm 3 phần chính: Móng nhà, thân nhà và mái nhà.
- Các khu vực chức năng trong nhà cần được bố trí hợp lý, thuận tiện sinh hoạt và vệ sinh.`
      }
    ]
  },

  // 37. TOÁN 6 - HÌNH CÓ TRỤC ĐỐI XỨNG
  {
    lessonId: 'toan-6-hinh-co-truc-doi-xung',
    matchPatterns: [/hình có trục đối xứng/i, /trục đối xứng/i],
    subject: 'Toán',
    grade: 6,
    chapter: 'Chương IV: Hình học trực quan',
    sections: [
      {
        deMuc: '1. Hình có trục đối xứng trong thực tế',
        tenHoatDong: 'Hoạt động 2.1: Nhận biết hình có trục đối xứng trong tự nhiên (SGK Trang 105 - 106)',
        thoiLuong: '14 phút',
        mucTieu: 'Nhận biết được tính đối xứng trục qua các hình ảnh con bướm, tháp Rùa, lá cây, chữ cái in hoa.',
        noiDung: 'HS quan sát hình ảnh SGK, dùng thước kẻ đặt vào giữa để kiểm tra hai nửa trùng khít nhau.',
        sanPham: 'Bảng phân loại các đồ vật, hình ảnh có trục đối xứng trong vở.',
        cot1Trai: `- Cho HS quan sát các bức ảnh kỳ quan thế giới và sinh vật có trục đối xứng.
- [CHỐT KIẾN THỨC]: Khái niệm đường gấp đối xứng.`,
        cot2Phai: `1. HÌNH CÓ TRỤC ĐỐI XỨNG TRONG TỰ NHIÊN
- Hình có trục đối xứng là hình mà khi gấp đôi hình đó theo một đường thẳng, hai nửa của hình trùng khít lên nhau hoàn toàn.
- Đường thẳng đó gọi là TRỤC ĐỐI XỨNG của hình.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Hình có trục đối xứng là hình có thể gấp đôi theo một đường thẳng sao cho hai nửa trùng khít lên nhau. Đường thẳng đó là trục đối xứng.`
      },
      {
        deMuc: '2. Trục đối xứng của một số hình học cơ bản',
        tenHoatDong: 'Hoạt động 2.2: Xác định trục đối xứng của tam giác đều, hình vuông, hình tròn (SGK Trang 106 - 108)',
        thoiLuong: '16 phút',
        mucTieu: 'Chỉ ra được số trục đối xứng: Tam giác cân (1), tam giác đều (3), hình chữ nhật (2), hình vuông (4), hình tròn (vô số).',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) thực hành gấp giấy các hình học phẳng để đếm số nếp gấp đối xứng.',
        sanPham: 'Bảng tổng hợp số trục đối xứng của các hình học cơ bản trong phiếu nhóm.',
        cot1Trai: `- Hướng dẫn HS thực hành gấp giấy tìm trục đối xứng.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ]: Giữ đúng 4 màu mực.
- [CHỐT KIẾN THỨC]: Bảng số lượng trục đối xứng chuẩn xác.`,
        cot2Phai: `2. TRỤC ĐỐI XỨNG CỦA CÁC HÌNH PHẲNG CƠ BẢN
- Đoạn thẳng: Có 1 trục đối xứng (đường trung trực).
- Tam giác cân: Có 1 trục đối xứng.
- Tam giác đều: Có 3 trục đối xứng.
- Hình chữ nhật: Có 2 trục đối xứng.
- Hình thoi: Có 2 trục đối xứng (chính là 2 đường chéo).
- Hình vuông: Có 4 trục đối xứng.
- Hình tròn: Có vô số trục đối xứng (mọi đường thẳng đi qua tâm).

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Nắm vững số trục đối xứng của các hình quen thuộc: Đoạn thẳng (1), Tam giác cân (1), Tam giác đều (3), Hình chữ nhật (2), Hình thoi (2), Hình vuông (4), Hình tròn (vô số).`
      }
    ]
  },

  // 38. TOÁN 3 - HÌNH TRÒN, TÂM, ĐƯỜNG KÍNH, BÁN KÍNH
  {
    lessonId: 'toan-3-hinh-tron-tam-duong-kinh-ban-kinh',
    matchPatterns: [/hình tròn/i, /tâm.*đường kính.*bán kính/i, /toán 3/i],
    subject: 'Toán',
    grade: 3,
    chapter: 'Chương 2: Hình học trực quan',
    sections: [
      {
        deMuc: '1. Làm quen với hình tròn và tâm O',
        tenHoatDong: 'Hoạt động 2.1: Nhận biết hình tròn và điểm tâm O (SGK Trang 64)',
        thoiLuong: '12 phút',
        mucTieu: 'Nhận biết hình tròn qua mặt đồng hồ, miệng bát; gọi tên điểm chính giữa hình tròn là tâm O.',
        noiDung: 'HS quan sát đồng hồ tròn, đĩa CD; dùng ngón tay chỉ vào điểm chính giữa của hình tròn.',
        sanPham: 'Hình vẽ hình tròn tâm O có ghi chú rõ ràng trong vở học sinh.',
        cot1Trai: `- Cho HS chỉ tay vào tâm các đồ vật hình tròn.
- [CHỐT KIẾN THỨC]: Tâm O nằm chính giữa hình tròn.`,
        cot2Phai: `1. HÌNH TRÒN VÀ TÂM O
- Điểm nằm chính giữa hình tròn gọi là TÂM của hình tròn (thường kí hiệu là tâm O).

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Điểm chính giữa hình tròn gọi là TÂM (thường gọi là tâm O).`
      },
      {
        deMuc: '2. Bán kính và Đường kính của hình tròn',
        tenHoatDong: 'Hoạt động 2.2: Phân biệt Bán kính và Đường kính (SGK Trang 64 - 65)',
        thoiLuong: '15 phút',
        mucTieu: 'Nêu được định nghĩa bán kính (nối tâm O với 1 điểm trên đường tròn) và đường kính (nối 2 điểm đi qua tâm O). Đường kính dài gấp đôi bán kính (d = 2 x r).',
        noiDung: 'Nhóm 4 em dùng thước kẻ đo bán kính OM và đường kính AB; so sánh độ dài AB với OM.',
        sanPham: 'Công thức: Độ dài đường kính = 2 x Độ dài bán kính trong phiếu nhóm.',
        cot1Trai: `- Hướng dẫn HS đo và so sánh độ dài.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ]: Giữ đúng 4 màu mực.
- [CHỐT KIẾN THỨC]: Đường kính luôn đi qua tâm và gấp 2 lần bán kính.`,
        cot2Phai: `2. BÁN KÍNH VÀ ĐƯỜNG KÍNH
- Bán kính: Đoạn thẳng nối từ tâm O đến một điểm bất kì trên đường tròn (OM, ON...). Tất cả các bán kính đều bằng nhau.
- Đường kính: Đoạn thẳng đi qua tâm O và nối hai điểm trên đường tròn (AB, CD...).
- Quy tắc vàng: Độ dài đường kính gấp 2 lần độ dài bán kính (d = 2 x r). Tâm O là trung điểm của đường kính.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Bán kính là đoạn thẳng nối từ tâm đến một điểm trên đường tròn.
- Đường kính là đoạn thẳng nối hai điểm trên đường tròn và ĐI QUA TÂM.
- Trong một hình tròn: Đường kính dài gấp 2 lần bán kính (Đường kính = 2 x Bán kính). Tâm O là trung điểm của đường kính.`
      },
      {
        deMuc: '3. Thực hành sử dụng compa vẽ hình tròn',
        tenHoatDong: 'Hoạt động 2.3: Thực hành dùng compa vẽ hình tròn (SGK Trang 65)',
        thoiLuong: '11 phút',
        mucTieu: 'Biết cấu tạo compa và sử dụng compa vẽ được hình tròn có tâm và bán kính cho trước; củng cố bằng Sơ đồ tư duy 16:9.',
        noiDung: 'HS tìm hiểu compa; thực hành vẽ hình tròn tâm O bán kính 3cm vào vở; quan sát Sơ đồ tư duy 16:9.',
        sanPham: 'Hình tròn vẽ bằng compa chuẩn xác, tròn đều, đẹp mắt trong vở học sinh.',
        cot1Trai: `- GV hướng dẫn 3 bước thao tác compa:
  + Bước 1: Mở compa đo đúng bán kính 3cm trên thước kẻ.
  + Bước 2: Đặt chân kim compa cố định tại tâm O.
  + Bước 3: Cầm núm xoay một vòng tròn khép kín.
- Chiếu SƠ ĐỒ TƯ DUY 16:9 PHONG CÁCH 3D PIXAR chốt kiến thức.`,
        cot2Phai: `3. CÁCH VẼ HÌNH TRÒN BẰNG COMPA
- Dụng cụ: Dùng compa để vẽ hình tròn.
- Quy trình: Đo bán kính trên thước -> Cố định chân kim tại tâm O -> Xoay đầu chì 1 vòng.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Dụng cụ vẽ hình tròn là Compa.
- Khi vẽ hình tròn bằng compa: Chân kim đặt đúng tâm, khoảng cách giữa chân kim và đầu chì đúng bằng bán kính hình tròn cần vẽ.`
      }
    ]
  }
];

/**
 * Thuật toán bóc tách đề mục SGK chuẩn xác và tự động bổ sung khối CHỐT KIẾN THỨC GHI VỞ
 */
export function getIntelligentSectionsForTopic(
  topic: string,
  subject: string,
  grade: number,
  boSach: string = 'Kết nối tri thức với cuộc sống'
): TextbookSectionKnowledge[] {
  const cleanTopic = topic.trim();
  const lowerTopic = cleanTopic.toLowerCase();
  const lowerSubject = (subject || '').toLowerCase();

  // 1. Kiểm tra từ điển các bài đã được định nghĩa chi tiết
  for (const item of KNOWN_CURRICULUM_SECTIONS) {
    if (item.grade === grade || !item.grade) {
      for (const pattern of item.matchPatterns) {
        if (pattern.test(cleanTopic)) {
          return item.sections;
        }
      }
    }
  }

  // 2. Thuật toán phân tích ngữ nghĩa chuyên sâu cho từng môn học
  // Làm sạch tiêu đề: Bỏ "Bài 5:", "Tiết 1", v.v.
  const shortTitle = cleanTopic
    .replace(/^Bài \d+[:\.\-]\s*/i, '')
    .replace(/\(.*?\)/g, '')
    .trim() || cleanTopic;

  // PHÂN LOẠI MÔN TOÁN
  if (/toán|toan/i.test(lowerSubject)) {
    return [
      {
        deMuc: `1. Khái niệm và Định nghĩa của ${shortTitle}`,
        tenHoatDong: `Hoạt động 2.1: Tìm hiểu khái niệm và định nghĩa của ${shortTitle} (SGK Khám phá 1)`,
        thoiLuong: '14 phút',
        mucTieu: `Học sinh tự quan sát hình vẽ trực quan/tình huống thực tế trong SGK để nhận biết khái niệm, kí hiệu và bản chất toán học của "${shortTitle}".`,
        noiDung: `HS đọc SGK ${boSach}, làm việc với Hình 1, thực hiện hoạt động Khám phá 1 để phát biểu định nghĩa toán học.`,
        sanPham: `Định nghĩa chính xác, kí hiệu toán học chuẩn và ví dụ minh họa trong vở ghi.`,
        cot1Trai: `- Cho HS quan sát hình vẽ trực quan trong SGK.
- Hướng dẫn HS tự phát hiện dấu hiệu bản chất trước khi GV chính thức hóa.
- [CHỐT KIẾN THỨC]: Yêu cầu HS ghi định nghĩa và điều kiện áp dụng vào vở.`,
        cot2Phai: `1. ĐỊNH NGHĨA VÀ BẢN CHẤT CỦA ${shortTitle.toUpperCase()}
- Định nghĩa toán học chuẩn xác của ${shortTitle}.
- Kí hiệu và các quy ước biểu diễn.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Nắm vững định nghĩa và kí hiệu toán học chuẩn của ${shortTitle}.
- Nhận diện chính xác các dấu hiệu bản chất qua hình vẽ và bài toán thực tế.`
      },
      {
        deMuc: `2. Tính chất, quy tắc và Phương pháp giải toán về ${shortTitle}`,
        tenHoatDong: `Hoạt động 2.2: Tính chất, quy tắc & Hoạt động nhóm 4 vai trò (SGK Khám phá 2)`,
        thoiLuong: '16 phút',
        mucTieu: `Nắm vững các tính chất, công thức và quy tắc toán học; thảo luận nhóm 4 vai trò (4 màu mực chống thụ động) giải bài tập áp dụng.`,
        noiDung: `Nhóm 4 em giải bài tập Khám phá 2 / Luyện tập 1 trong SGK, trình bày các bước biến đổi logic trên bảng phụ có đủ 4 màu mực.`,
        sanPham: `Lời giải toán học mẫu mạch lạc, chuẩn mực với các bước lập luận chặt chẽ của các nhóm.`,
        cot1Trai: `- GV hướng dẫn quy tắc vàng trong SGK.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ (4 MÀU MỰC)]:
  + Nhóm trưởng (Mực xanh), Thư ký (Mực đen), Kỹ thuật (Mực tím), Báo cáo viên (Mực xanh lá).
- [CHỐT KIẾN THỨC]: Chuẩn hóa quy tắc biến đổi và công thức giải toán.`,
        cot2Phai: `2. TÍNH CHẤT VÀ QUY TẮC CỦA ${shortTitle.toUpperCase()}
- Hệ thống tính chất cơ bản và hệ quả suy ra.
- Các bước biến đổi và thuật toán giải.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Ghi nhớ các tính chất cơ bản và công thức biến đổi của ${shortTitle}.
- Quy trình giải toán gồm: Nhận diện giả thiết -> Áp dụng đúng công thức/định lí -> Trình bày lập luận logic -> Kết luận rõ ràng.`
      },
      {
        deMuc: `3. Vận dụng thực tiễn của ${shortTitle}`,
        tenHoatDong: `Hoạt động 2.3: Vận dụng thực tế`,
        thoiLuong: '12 phút',
        mucTieu: `Giải bài toán mô hình hóa thực tế trong SGK; hệ thống hóa toàn bộ kiến thức bài học bằng Sơ đồ tư duy 16:9 3D Pixar.`,
        noiDung: `HS giải bài toán tình huống thực tế; quan sát Sơ đồ tư duy 16:9 3D Pixar và tóm tắt phương pháp giải vào vở.`,
        sanPham: `Đáp số bài toán thực tế và Sơ đồ tư duy 16:9 hoàn chỉnh trong vở học sinh.`,
        cot1Trai: `- GV liên hệ toán học với các ứng dụng đời sống, kiến trúc, tài chính.
- [CHỐT KIẾN THỨC]: Hướng dẫn học sinh chốt kiến thức cốt lõi của đề mục vào vở.
- [CHỐT KIẾN THỨC]: Hướng dẫn HS vẽ sơ đồ tư duy tóm tắt toàn bài vào vở.`,
        cot2Phai: `3. VẬN DỤNG THỰC TIỄN VÀ HỆ THỐNG HÓA KIẾN THỨC
- Giải quyết các tình huống và mô hình thực tế bằng công cụ toán học.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Toán học gắn liền với đời sống thực tế: Giúp đo đạc, tính toán và giải quyết các bài toán kỹ thuật, kinh tế.
- Hệ thống hóa toàn bộ định nghĩa, tính chất và công thức giải bài ${shortTitle} theo Sơ đồ tư duy 16:9 để ôn tập.`
      }
    ];
  }

  // PHÂN LOẠI MÔN KHOA HỌC TỰ NHIÊN / VẬT LÍ / HÓA HỌC / SINH HỌC
  if (/khoa học tự nhiên|khtn|vật lí|vật lý|hóa học|sinh học/i.test(lowerSubject)) {
    return [
      {
        deMuc: `I. Hiện tượng, khái niệm và Bản chất của ${shortTitle}`,
        tenHoatDong: `Hoạt động 2.1: Khám phá hiện tượng và bản chất của ${shortTitle}`,
        thoiLuong: '14 phút',
        mucTieu: `Học sinh tự quan sát thí nghiệm/hình ảnh SGK để nhận diện hiện tượng, thuật ngữ và định nghĩa khoa học cốt lõi của "${shortTitle}".`,
        noiDung: `HS mở SGK ${boSach}, quan sát Hình 1 mở đầu bài học, đọc thông tin đề mục I và thảo luận cặp đôi trả lời các câu hỏi định hướng trên phiếu học tập.`,
        sanPham: `Định nghĩa khoa học chính xác và đặc điểm nhận diện của "${shortTitle}" trong vở bài học.`,
        cot1Trai: `- GV hướng dẫn HS mở SGK trang bài học, quan sát Hình 1.
- [PHƯƠNG PHÁP BÀN TAY NẶN BỘT]: Cho HS nêu dự đoán trước khi đọc SGK.
- [CHỐT KIẾN THỨC]: Chuẩn hóa định nghĩa khoa học và yêu cầu HS ghi vào vở.`,
        cot2Phai: `I. KHÁI NIỆM VÀ BẢN CHẤT CỦA ${shortTitle.toUpperCase()}
- Khái niệm và thuật ngữ khoa học chuẩn xác.
- Các hiện tượng thực tế minh họa trong tự nhiên.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Bản chất khoa học của ${shortTitle}: Nắm vững định nghĩa, đặc điểm nhận biết và cơ chế hoạt động.
- Các hiện tượng tự nhiên tương ứng được giải thích dựa trên quy luật khoa học chuẩn xác.`
      },
      {
        deMuc: `II. Quy tắc, công thức tính toán và Thí nghiệm thực hành của ${shortTitle}`,
        tenHoatDong: `Hoạt động 2.2: Quy tắc, công thức & Thí nghiệm thực hành nhóm 4 vai trò`,
        thoiLuong: '16 phút',
        mucTieu: `Làm việc nhóm 4 vai trò (4 màu mực chống thụ động), tiến hành đo đạc/biến đổi công thức hoặc phân tích bảng dữ liệu để làm chủ kiến thức Đề mục II.`,
        noiDung: `Nhóm 4 thành viên (Nhóm trưởng, Thư ký, Kỹ thuật viên, Báo cáo viên) phân tích sơ đồ/Hình 2 SGK, dùng 4 màu mực viết vào bảng phụ A3, cùng giải quyết nhiệm vụ thực hành.`,
        sanPham: `Phiếu học tập nhóm A3 có đủ 4 màu mực của 4 thành viên; công thức hoặc quy tắc được kiểm chứng chính xác.`,
        cot1Trai: `- GV chuyển giao nhiệm vụ thí nghiệm/phân tích Hình 2 SGK.
- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ (4 MÀU MỰC)]:
  + Nhóm trưởng (Mực xanh), Thư ký (Mực đen), Kỹ thuật (Mực tím), Báo cáo viên (Mực xanh lá).
- [CHỐT KIẾN THỨC]: Chuẩn hóa công thức và kết quả thực nghiệm.`,
        cot2Phai: `II. QUY TẮC, CÔNG THỨC VÀ KẾT QUẢ THÍ NGHIỆM
- Công thức tính toán và đơn vị đo chuẩn của từng đại lượng liên quan đến ${shortTitle}.
- Bảng số liệu thực nghiệm thu được.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Nắm vững công thức tính toán: Ghi rõ tên các đại lượng và đơn vị đo tương ứng.
- Quy trình tiến hành thí nghiệm: Chuẩn bị dụng cụ an toàn -> Lắp đặt theo sơ đồ -> Thu thập số liệu 3 lần -> Tính giá trị trung bình.`
      },
      {
        deMuc: `III. Ứng dụng thực tiễn của ${shortTitle}`,
        tenHoatDong: `Hoạt động 2.3: Ứng dụng thực tế`,
        thoiLuong: '12 phút',
        mucTieu: `Liên hệ các ứng dụng thực tế trong đời sống và kỹ thuật; chuẩn hóa và khắc sâu toàn bộ kiến thức bài học bằng Sơ đồ tư duy 16:9 3D Pixar trực quan.`,
        noiDung: `HS liên hệ các ứng dụng khoa học kỹ thuật và an toàn đời sống; quan sát Sơ đồ tư duy 16:9 3D Pixar trên bảng tương tác; hoàn thiện sơ đồ vào vở ghi.`,
        sanPham: `Sơ đồ tư duy 16:9 đầy đủ các nhánh tri thức trong vở học sinh; các ví dụ ứng dụng thực tế sinh động.`,
        cot1Trai: `- GV tổ chức cho HS liên hệ thực tiễn và giáo dục an toàn/môi trường.
- [CHỐT KIẾN THỨC]: Hướng dẫn học sinh chốt kiến thức cốt lõi của đề mục vào vở.
- [CHỐT KIẾN THỨC]: Hướng dẫn HS hệ thống hóa toàn bài theo sơ đồ tư duy.`,
        cot2Phai: `III. ỨNG DỤNG THỰC TIỄN VÀ HỆ THỐNG HÓA KIẾN THỨC
- Các ứng dụng trong công nghệ, sản xuất và đời sống thực tiễn.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- ${shortTitle} có nhiều ứng dụng thiết thực trong cuộc sống hàng ngày và khoa học kỹ thuật hiện đại.
- Ghi nhớ sơ đồ tư duy tổng kết toàn bài: Nắm chắc 3 nhánh kiến thức (Khái niệm - Công thức/Thí nghiệm - Ứng dụng thực tiễn).`
      }
    ];
  }

  // PHÂN LOẠI CÁC MÔN CÒN LẠI (CÔNG NGHỆ, TIN HỌC, NGỮ VĂN, LỊCH SỬ, ĐỊA LÍ, GDCD...)
  return [
    {
      deMuc: `I. Khái niệm và Đặc điểm cơ bản của ${shortTitle}`,
      tenHoatDong: `Hoạt động 2.1: Tìm hiểu khái niệm và đặc điểm cốt lõi của ${shortTitle}`,
      thoiLuong: '14 phút',
      mucTieu: `Học sinh tự đọc SGK, quan sát sơ đồ/tranh ảnh để nhận diện khái niệm, đặc điểm và vai trò của "${shortTitle}".`,
      noiDung: `HS nghiên cứu mục I SGK trang bài học, quan sát tranh ảnh, thảo luận cặp đôi trả lời các câu hỏi khám phá.`,
      sanPham: `Nội dung ghi chép định nghĩa và bảng liệt kê đặc điểm chính của "${shortTitle}".`,
      cot1Trai: `- Hướng dẫn HS quan sát hình ảnh và đọc thông tin trong SGK.
- [CHỐT KIẾN THỨC]: Khẳng định các đặc điểm chính và hướng dẫn HS ghi vở.`,
      cot2Phai: `I. KHÁI NIỆM VÀ ĐẶC ĐIỂM CƠ BẢN CỦA ${shortTitle.toUpperCase()}
- Khái niệm và thuật ngữ cốt lõi.
- Các đặc trưng cơ bản được mô tả trong SGK.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Khái niệm: Nắm vững định nghĩa và vai trò của ${shortTitle}.
- Các đặc điểm nhận biết chủ yếu qua tranh ảnh và tài liệu thực tế.`
    },
    {
      deMuc: `II. Quy trình, phương pháp và Thực hành nhóm 4 vai trò về ${shortTitle}`,
      tenHoatDong: `Hoạt động 2.2: Quy trình, phân tích & Thảo luận nhóm 4 vai trò`,
      thoiLuong: '16 phút',
      mucTieu: `Làm việc nhóm 4 vai trò (4 màu mực chống thụ động), thực hành phân tích quy trình hoặc giải quyết nhiệm vụ chuyên môn của Đề mục II.`,
      noiDung: `Nhóm 4 em phân vai (Nhóm trưởng, Thư ký, Kỹ thuật, Báo cáo viên), thảo luận sơ đồ SGK và hoàn thành sản phẩm trên phiếu nhóm A3 bằng 4 màu mực.`,
      sanPham: `Sản phẩm nhóm A3 có chữ ký và 4 màu mực của cả 4 học sinh; các bước quy trình được trình bày mạch lạc.`,
      cot1Trai: `- GV chuyển giao nhiệm vụ thảo luận chuyên sâu.
- Điều phối hoạt động nhóm 4 vai trò (4 màu mực chống thụ động).
- [CHỐT KIẾN THỨC]: Chuẩn hóa quy trình thực hiện các bước.`,
      cot2Phai: `II. QUY TRÌNH VÀ THAO TÁC THỰC HÀNH
- Các bước quy trình tiêu chuẩn hoặc nguyên tắc triển khai của ${shortTitle}.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Nắm vững các bước quy trình thực hiện một cách tuần tự, chính xác.
- Tuân thủ đúng các nguyên tắc kỹ thuật và an toàn trong quá trình thực hành.`
    },
    {
      deMuc: `III. Vận dụng thực tiễn của ${shortTitle}`,
      tenHoatDong: `Hoạt động 2.3: Vận dụng thực tế`,
      thoiLuong: '12 phút',
      mucTieu: `Liên hệ nội dung bài học với đời sống thực tế và định hướng phát triển bản thân; hệ thống hóa bài học bằng Sơ đồ tư duy 16:9 3D Pixar.`,
      noiDung: `HS liên hệ các tình huống thực tiễn; quan sát Sơ đồ tư duy 16:9 trên màn hình và hoàn thiện sơ đồ vào vở.`,
      sanPham: `Sơ đồ tư duy 16:9 trong vở học sinh; các bài học liên hệ thực tiễn phong phú.`,
      cot1Trai: `- GV gợi mở các tình huống thực tiễn gắn liền với đời sống.
- [CHỐT KIẾN THỨC]: Hướng dẫn học sinh chốt kiến thức cốt lõi của đề mục vào vở.
- [CHỐT KIẾN THỨC]: Hướng dẫn HS vẽ sơ đồ tư duy tổng kết vào vở.`,
      cot2Phai: `III. VẬN DỤNG THỰC TIỄN VÀ SƠ ĐỒ TƯ DUY TỔNG KẾT
- Liên hệ thực tế đời sống, xã hội và định hướng ứng dụng.

* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):
- Vận dụng linh hoạt các kiến thức và kĩ năng đã học vào thực tiễn cuộc sống.
- Sơ đồ tư duy 16:9 phong cách 3D Pixar giúp khắc sâu toàn bộ kiến thức trọng tâm của bài học để ôn tập hiệu quả.`
    }
  ];
}
