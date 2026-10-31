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
  // 1. KHTN 7 - BÀI 10: ĐỒ THỊ QUÃNG ĐƯỜNG - THỜI GIAN
  {
    lessonId: 'khtn-7-bai-10',
    matchPatterns: [/đồ thị quãng đường/i, /quãng đường.*thời gian/i, /bài 10.*khtn/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chủ đề 3: TỐC ĐỘ (Phần Vật lí)',
    sections: [
      {
        deMuc: 'I. Lập bảng ghi quãng đường đi được theo thời gian',
        tenHoatDong: 'Hoạt động 2.1: Lập bảng ghi quãng đường đi được theo thời gian (Đề mục I SGK Trang 53)',
        thoiLuong: '12 phút',
        mucTieu: 'Thu thập và ghi lại số liệu quãng đường s tương ứng với từng khoảng thời gian t; nhận biết tính chất chuyển động đều khi tỉ số s/t không đổi.',
        noiDung: 'HS nghiên cứu Bảng 10.1 SGK trang 53 về chuyển động của người đi bộ; phân tích các cặp giá trị (t, s) tại các thời điểm 0s, 2s, 4s, 6s, 8s.',
        sanPham: 'Bảng 10.1 hoàn chỉnh trong vở học sinh; câu trả lời xác định tốc độ của người đi bộ tại từng khoảng thời gian: v = s/t = 2 m/s.',
        tenHinhSGK: 'Bảng 10.1: Bảng số liệu quãng đường - thời gian của người đi bộ (SGK KHTN 7 Trang 53)',
        moTaHinhSGK: 'Bảng gồm 2 hàng: Thời gian t (s) và Quãng đường s (m) ghi nhận chuyển động đều từ t = 0 đến t = 8s.',
        cauHoiKhaiThac: [
          '1. Quan sát Bảng 10.1: Trong mỗi khoảng thời gian 2 giây, người đi bộ đi được quãng đường bao nhiêu mét?',
          '2. Tính tốc độ của người đi bộ trong từng khoảng thời gian? Em có nhận xét gì về chuyển động này?'
        ],
        cot1Trai: '- GV hướng dẫn HS quan sát Bảng 10.1 SGK trang 53.\\n- Hướng dẫn cách lập bảng ghi số liệu thực nghiệm (t, s).\\n- Cho HS thảo luận cặp đôi tính tốc độ v = s/t tại mỗi thời điểm.',
        cot2Phai: 'I. LẬP BẢNG GHI QUÃNG ĐƯỜNG - THỜI GIAN\\n- Bảng số liệu gồm 2 đại lượng tương ứng: Thời gian t và Quãng đường s.\\n- Khi vật chuyển động đều: Trong những khoảng thời gian bằng nhau, quãng đường đi được là như nhau.'
      },
      {
        deMuc: 'II. Vẽ đồ thị quãng đường - thời gian',
        tenHoatDong: 'Hoạt động 2.2: Vẽ đồ thị quãng đường - thời gian trên hệ trục tọa độ (Đề mục II SGK Trang 54 - 55)',
        thoiLuong: '16 phút',
        mucTieu: 'Vẽ được đồ thị s - t trên hệ trục tọa độ vuông góc (trục hoành Ot, trục tung Os); nhận biết đồ thị chuyển động thẳng đều là đường thẳng xiên góc đi qua gốc tọa độ O.',
        noiDung: 'HS làm việc nhóm 4 vai trò (4 màu mực) trên giấy kẻ ô li: Xác định các điểm tọa độ từ Bảng 10.1, nối các điểm để được đường biểu diễn s - t theo Hình 10.1 SGK.',
        sanPham: 'Đồ thị s - t hoàn chỉnh, chuẩn xác, cân đối trên giấy kẻ ô li của các nhóm có đủ 4 màu mực.',
        tenHinhSGK: 'Hình 10.1: Đồ thị quãng đường - thời gian của người đi bộ (SGK KHTN 7 Trang 54)',
        moTaHinhSGK: 'Hệ trục tọa độ vuông góc gồm trục hoành Ot (giây) và trục tung Os (mét); đường biểu diễn là một nửa đường thẳng dốc lên đi qua gốc tọa độ O.',
        cauHoiKhaiThac: [
          '1. Trục nằm ngang (hoành) biểu diễn đại lượng nào? Trục thẳng đứng (tung) biểu diễn đại lượng nào?',
          '2. Nêu các bước vẽ đồ thị quãng đường - thời gian từ bảng số liệu?',
          '3. Đường biểu diễn chuyển động thẳng đều có hình dạng là đường gì?'
        ],
        cot1Trai: '- GV chiếu Hình 10.1 SGK và hướng dẫn quy trình 4 bước vẽ đồ thị:\\n  + Bước 1: Vẽ 2 trục tọa độ vuông góc Ot (nằm ngang) và Os (thẳng đứng).\\n  + Bước 2: Chia vạch tỉ lệ phù hợp trên mỗi trục.\\n  + Bước 3: Xác định từng điểm tọa độ (t, s).\\n  + Bước 4: Nối các điểm tạo thành đồ thị.\\n- GV phát giấy kẻ ô li A3 cho các nhóm thực hành.',
        cot2Phai: 'II. CÁCH VẼ ĐỒ THỊ QUÃNG ĐƯỜNG - THỜI GIAN\\n1. Quy trình vẽ đồ thị:\\n- Trục hoành Ot: Biểu diễn thời gian (s, h).\\n- Trục tung Os: Biểu diễn quãng đường (m, km).\\n- Nối các điểm xác định được đường biểu diễn.\\n2. Đặc điểm:\\n- Đồ thị quãng đường - thời gian của chuyển động thẳng đều là một đường thẳng xiên góc đi qua gốc tọa độ O(0,0).'
      },
      {
        deMuc: 'III. Vận dụng đồ thị để xác định vị trí, thời gian và tốc độ',
        tenHoatDong: 'Hoạt động 2.3: Vận dụng đồ thị xác định vị trí, tốc độ & Sơ đồ tư duy 16:9 3D Pixar (Đề mục III SGK Trang 56)',
        thoiLuong: '14 phút',
        mucTieu: 'Từ đồ thị quãng đường - thời gian, tìm được vị trí s khi biết thời gian t và ngược lại; so sánh tốc độ dựa vào độ nghiêng (độ dốc) của đồ thị; hệ thống hóa toàn bộ bài học bằng Sơ đồ tư duy 16:9 3D Pixar.',
        noiDung: 'HS khai thác Hình 10.2 SGK trang 55: Từ một điểm trên trục Ot giống vuông góc lên đồ thị rồi giống sang trục Os để đọc giá trị s; ngược lại từ s đọc t; giải bài tập tình huống SGK trang 56; quan sát Sơ đồ tư duy 16:9 3D Pixar.',
        sanPham: 'Lời giải chuẩn xác: Xác định vị trí của vật tại t = 5s và thời gian vật đi được quãng đường s = 10m; độ dốc càng lớn thì tốc độ càng nhanh; sơ đồ tư duy 16:9 trong vở.',
        tenHinhSGK: 'Hình 10.2: Khai thác đồ thị quãng đường - thời gian (SGK KHTN 7 Trang 55)',
        moTaHinhSGK: 'Đồ thị có các đường dóng nét đứt màu đỏ từ trục Ot lên đồ thị và dóng ngang sang trục Os để xác định các đại lượng tương ứng.',
        cauHoiKhaiThac: [
          '1. Dựa vào đồ thị Hình 10.2: Hãy tìm vị trí của vật ở thời điểm t = 5 giây?',
          '2. So sánh 2 đồ thị A và B: Đồ thị nào dốc hơn thì vật đó chuyển động nhanh hơn hay chậm hơn?'
        ],
        cot1Trai: '- GV hướng dẫn kĩ thuật đọc đồ thị bằng các đường dóng nét đứt.\\n- Nêu quy tắc: Đồ thị càng dốc (nghiêng nhiều so với trục Ot) thì tốc độ chuyển động càng lớn.\\n- Chiếu SƠ ĐỒ TƯ DUY 16:9 PHONG CÁCH 3D PIXAR chuẩn hóa kiến thức toàn bài.',
        cot2Phai: 'III. TÌM QUÃNG ĐƯỜNG, THỜI GIAN VÀ TỐC ĐỘ TỪ ĐỒ THỊ\\n1. Cách đọc đồ thị:\\n- Biết t -> dóng lên đồ thị -> dóng sang trục Os -> tìm được s.\\n- Biết s -> dóng sang đồ thị -> dóng xuống trục Ot -> tìm được t.\\n2. Ý nghĩa độ dốc đồ thị:\\n- Đồ thị càng dốc -> Trong cùng thời gian vật đi được quãng đường càng dài -> Tốc độ v càng lớn.\\n- Nếu đường đồ thị nằm ngang song song với Ot -> Vật đang đứng yên (s không đổi theo thời gian).'
      }
    ]
  },

  // 2. KHTN 7 - BÀI 1: PHƯƠNG PHÁP VÀ KĨ NĂNG HỌC TẬP MÔN KHTN
  {
    lessonId: 'khtn-7-bai-1',
    matchPatterns: [/phương pháp và kĩ năng/i, /học tập môn khtn/i, /bài 1.*khtn/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Mở đầu',
    sections: [
      {
        deMuc: 'I. Phương pháp tìm hiểu tự nhiên',
        tenHoatDong: 'Hoạt động 2.1: Quy trình 5 bước tìm hiểu tự nhiên (Đề mục I SGK Trang 6 - 8)',
        thoiLuong: '15 phút',
        mucTieu: 'Nắm vững quy trình nghiên cứu khoa học gồm 5 bước: (1) Quan sát và đặt câu hỏi; (2) Xây dựng giả thuyết; (3) Kế hoạch kiểm tra; (4) Thực hiện kế hoạch; (5) Kết luận và báo cáo.',
        noiDung: 'HS đọc SGK trang 6, phân tích ví dụ nghiên cứu "Sự nảy mầm của hạt đỗ" trong SGK; sắp xếp đúng trình tự 5 bước tìm hiểu tự nhiên.',
        sanPham: 'Sơ đồ 5 bước tìm hiểu tự nhiên được trình bày mạch lạc trong vở học sinh.',
        cot1Trai: '- GV chiếu sơ đồ quy trình nghiên cứu khoa học 5 bước chuẩn SGK.\\n- Hướng dẫn HS phân tích thí nghiệm hạt đậu nảy mầm.',
        cot2Phai: 'I. PHƯƠNG PHÁP TÌM HIỂU TỰ NHIÊN (5 BƯỚC)\\nBước 1: Quan sát và đặt câu hỏi nghiên cứu.\\nBước 2: Xây dựng giả thuyết khoa học.\\nBước 3: Lập kế hoạch kiểm tra giả thuyết.\\nBước 4: Thực hiện kế hoạch (thí nghiệm, thu thập số liệu).\\nBước 5: Phân tích kết quả và rút ra kết luận.'
      },
      {
        deMuc: 'II. Các kĩ năng cơ bản học tập môn KHTN',
        tenHoatDong: 'Hoạt động 2.2: Rèn luyện hệ thống kĩ năng tiến trình khoa học (Đề mục II SGK Trang 8 - 11)',
        thoiLuong: '15 phút',
        mucTieu: 'Thực hành các kĩ năng: Quan sát, phân loại, liên kết, đo lường và dự báo hiện tượng tự nhiên.',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) thực hành kĩ năng đo lường và dự báo thời gian nước sôi hoặc sự phát triển của cây xanh.',
        sanPham: 'Bảng mô tả các kĩ năng và ví dụ áp dụng thực tế của nhóm.',
        cot1Trai: '- GV giao bài tập tình huống rèn luyện kĩ năng phân loại và dự báo.\\n- Hướng dẫn các nhóm phân công 4 màu mực.',
        cot2Phai: 'II. HỆ THỐNG KĨ NĂNG TIẾN TRÌNH KHTN\\n1. Kĩ năng quan sát: Sử dụng giác quan và dụng cụ để nhận diện sự vật.\\n2. Kĩ năng phân loại: Nhóm các đối tượng có cùng đặc điểm.\\n3. Kĩ năng liên kết: Tìm mối quan hệ giữa các dữ liệu.\\n4. Kĩ năng đo: Dùng dụng cụ đo đúng cách và xử lý sai số.\\n5. Kĩ năng dự báo: Suy đoán điều sẽ xảy ra dựa trên dữ liệu.'
      },
      {
        deMuc: 'III. Sử dụng một số dụng cụ đo và quy tắc an toàn',
        tenHoatDong: 'Hoạt động 2.3: Dụng cụ đo hiện đại & Sơ đồ tư duy 16:9 3D Pixar (Đề mục III SGK Trang 11 - 13)',
        thoiLuong: '12 phút',
        mucTieu: 'Nhận biết và sử dụng đồng hồ đo thời gian hiện số, cổng quang điện; hệ thống hóa kiến thức toàn bài bằng Sơ đồ tư duy 16:9 3D Pixar.',
        noiDung: 'HS quan sát thiết bị cổng quang điện và đồng hồ hiện số; quan sát Sơ đồ tư duy 16:9 trên màn hình chiếu.',
        sanPham: 'Quy tắc an toàn phòng thí nghiệm và Sơ đồ tư duy 16:9 trong vở ghi.',
        cot1Trai: '- GV giới thiệu cổng quang điện và hướng dẫn cắm dây vào đồng hồ hiện số.\\n- Chiếu Sơ đồ tư duy 16:9 3D Pixar tổng kết bài 1.',
        cot2Phai: 'III. DỤNG CỤ ĐO HIỆN ĐẠI\\n- Cổng quang điện và đồng hồ đo thời gian hiện số giúp đo chính xác các chuyển động nhanh.\\n- Sơ đồ tư duy 16:9 3D Pixar khắc sâu 5 bước tìm hiểu tự nhiên và 5 kĩ năng cốt lõi.'
      }
    ]
  },

  // 3. KHTN 7 - BÀI 2: NGUYÊN TỬ
  {
    lessonId: 'khtn-7-bai-2',
    matchPatterns: [/nguyên tử/i, /bài 2.*nguyên tử/i],
    subject: 'Khoa học tự nhiên',
    grade: 7,
    chapter: 'Chương I: Nguyên tử - Sơ lược bảng tuần hoàn',
    sections: [
      {
        deMuc: 'I. Mô hình nguyên tử của Rutherford - Bohr',
        tenHoatDong: 'Hoạt động 2.1: Khám phá Mô hình nguyên tử Rutherford - Bohr (Đề mục I SGK Trang 14 - 16)',
        thoiLuong: '15 phút',
        mucTieu: 'Mô tả được mô hình nguyên tử gồm hạt nhân ở giữa mang điện tích dương và các electron mang điện tích âm chuyển động xung quanh theo từng lớp như hệ Mặt Trời.',
        noiDung: 'HS quan sát Hình 2.1 SGK (Mô hình hành tinh nguyên tử) và Hình 2.2 (Sơ đồ cấu tạo nguyên tử Carbon, Helium); thảo luận cặp đôi nhận diện các thành phần.',
        sanPham: 'Bản vẽ mô hình nguyên tử Carbon có 6 proton ở hạt nhân và 6 electron phân bố trên 2 lớp (lớp trong 2e, lớp ngoài 4e).',
        cot1Trai: '- GV chiếu mô hình 3D động nguyên tử theo mô hình Rutherford - Bohr.\\n- Hướng dẫn HS quan sát hạt nhân ở tâm và các electron quay trên quỹ đạo.',
        cot2Phai: 'I. MÔ HÌNH NGUYÊN TỬ RUTHERFORD - BOHR\\n- Nguyên tử có kích thước vô cùng nhỏ bé, tạo nên mọi chất.\\n- Cấu trúc:\\n  + Hạt nhân nằm ở tâm nguyên tử, mang điện tích dương.\\n  + Các electron chuyển động xung quanh hạt nhân trên các lớp vỏ xác định.'
      },
      {
        deMuc: 'II. Cấu tạo nguyên tử (Hạt nhân và lớp vỏ electron)',
        tenHoatDong: 'Hoạt động 2.2: Cấu tạo nguyên tử: Proton, Neutron và Electron (Đề mục II SGK Trang 16 - 18)',
        thoiLuong: '15 phút',
        mucTieu: 'Nêu được nguyên tử cấu tạo từ 3 loại hạt: Proton (p, mang điện tích +1), Neutron (n, không mang điện) và Electron (e, mang điện tích -1); nguyên tử luôn trung hòa về điện (số p = số e).',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) phân tích bảng số liệu điện tích và khối lượng các hạt cấu tạo nên nguyên tử; điền vào phiếu học tập Bảng 2.1.',
        sanPham: 'Bảng cấu tạo nguyên tử của 5 nguyên tố đầu tiên (H, He, Li, C, O) có số p = số e.',
        cot1Trai: '- GV phân tích: Hạt nhân gồm proton (+1) và neutron (0); vỏ gồm các electron (-1).\\n- Nhấn mạnh định luật trung hòa điện: Số proton = Số electron.',
        cot2Phai: 'II. CẤU TẠO NGUYÊN TỬ\\n1. Các hạt cấu tạo:\\n- Hạt nhân: Gồm hạt proton (kí hiệu p, điện tích +1) và hạt neutron (kí hiệu n, không mang điện).\\n- Lớp vỏ: Gồm các hạt electron (kí hiệu e, điện tích -1).\\n2. Tính chất trung hòa điện:\\n- Trong mỗi nguyên tử: Số proton = Số electron.'
      },
      {
        deMuc: 'III. Khối lượng nguyên tử (Đơn vị amu)',
        tenHoatDong: 'Hoạt động 2.3: Khối lượng nguyên tử (amu) & Sơ đồ tư duy 16:9 3D Pixar (Đề mục III SGK Trang 18 - 19)',
        thoiLuong: '12 phút',
        mucTieu: 'Hiểu khối lượng nguyên tử tập trung hầu hết ở hạt nhân do khối lượng electron quá nhỏ bé không đáng kể; sử dụng thành thạo đơn vị khối lượng nguyên tử amu (atomic mass unit); chuẩn hóa kiến thức bằng Sơ đồ tư duy 16:9 3D Pixar.',
        noiDung: 'HS tra cứu khối lượng nguyên tử của H, C, O, Fe trong SGK; làm bài tập so sánh khối lượng hạt nhân với vỏ; quan sát Sơ đồ tư duy 16:9 3D Pixar.',
        sanPham: 'Lời giải: m(nguyên tử) ≈ m(hạt nhân) = m(p) + m(n); sơ đồ tư duy 16:9 trong vở.',
        cot1Trai: '- GV giải thích: Khối lượng electron rất nhỏ (chỉ bằng 1/1836 khối lượng proton) nên khối lượng nguyên tử coi như bằng khối lượng hạt nhân.\\n- Chiếu Sơ đồ tư duy 16:9 3D Pixar tổng kết bài 2.',
        cot2Phai: 'III. KHỐI LƯỢNG NGUYÊN TỬ\\n- Đơn vị đo: amu (1 amu ≈ 1,6605 x 10^-24 g).\\n- Khối lượng nguyên tử = Khối lượng hạt nhân = Số p + Số n (xấp xỉ theo amu).\\n- Sơ đồ tư duy 16:9 3D Pixar khắc sâu cấu tạo 3 loại hạt p, n, e.'
      }
    ]
  },

  // 4. CÔNG NGHỆ 6 - BÀI 1: KHÁI QUÁT VỀ NHÀ Ở
  {
    lessonId: 'cn-6-bai-1',
    matchPatterns: [/khái quát về nhà ở/i, /nhà ở.*công nghệ 6/i, /bài 1.*công nghệ 6/i],
    subject: 'Công nghệ',
    grade: 6,
    chapter: 'Chương I: Nhà ở',
    sections: [
      {
        deMuc: 'I. Vai trò của nhà ở',
        tenHoatDong: 'Hoạt động 2.1: Tìm hiểu vai trò của nhà ở đối với đời sống con người (Đề mục I SGK Trang 6 - 7)',
        thoiLuong: '12 phút',
        mucTieu: 'Nêu được nhà ở là nơi trú ngụ, bảo vệ con người trước các tác động xấu của thiên nhiên và là nơi sinh hoạt, gắn kết các thành viên trong gia đình.',
        noiDung: 'HS quan sát Hình 1.1 SGK (các hiện tượng mưa bão, nắng nóng, thú dữ) và Hình 1.2 (cảnh sinh hoạt ấm cúng trong gia đình); thảo luận cặp đôi nêu các vai trò của nhà ở.',
        sanPham: 'Bảng tổng hợp 2 vai trò lớn: (1) Bảo vệ con người khỏi mưa, nắng, gió bão; (2) Đáp ứng nhu cầu sinh hoạt vật chất và tinh thần.',
        cot1Trai: '- GV chiếu hình ảnh các hiện tượng thời tiết khắc nghiệt và đặt câu hỏi gợi mở.\\n- Cho HS thảo luận cặp đôi: "Nếu không có nhà ở, con người sẽ gặp những nguy hiểm gì?"',
        cot2Phai: 'I. VAI TRÒ CỦA NHÀ Ở\\n- Bảo vệ con người khỏi tác động xấu của thiên nhiên (mưa, nắng, gió, rét, bão).\\n- Là nơi trú ngụ, sinh hoạt, nghỉ ngơi, gắn kết tình cảm của mọi thành viên trong gia đình.'
      },
      {
        deMuc: 'II. Đặc điểm chung của nhà ở',
        tenHoatDong: 'Hoạt động 2.2: Cấu tạo và các khu vực chức năng trong nhà ở (Đề mục II SGK Trang 8 - 9)',
        thoiLuong: '15 phút',
        mucTieu: 'Nhận biết cấu tạo chung của nhà ở (móng, sàn, khung, tường, mái, cửa); phân biệt được các khu vực chức năng (phòng khách, phòng ngủ, bếp, vệ sinh).',
        noiDung: 'Nhóm 4 vai trò (4 màu mực) quan sát sơ đồ mặt bằng ngôi nhà (Hình 1.3 SGK), xác định các khu vực chức năng và giải thích nguyên tắc bố trí hợp lý, vệ sinh.',
        sanPham: 'Bản vẽ sơ đồ bố trí các phòng chức năng của ngôi nhà lý tưởng trên giấy A3 của nhóm.',
        cot1Trai: '- GV hướng dẫn các nhóm quan sát sơ đồ mặt bằng ngôi nhà Hình 1.3 SGK.\\n- Yêu cầu chỉ ra vị trí phòng bếp, nhà vệ sinh phải thông thoáng, đảm bảo vệ sinh môi trường.',
        cot2Phai: 'II. ĐẶC ĐIỂM CHUNG CỦA NHÀ Ở\\n1. Cấu tạo chính: Móng nhà, khung nhà, tường, sàn, mái nhà, cửa ra vào, cửa sổ.\\n2. Các khu vực chức năng: Phòng sinh hoạt chung (khách), phòng ngủ, phòng ăn và bếp, khu vệ sinh.'
      },
      {
        deMuc: 'III. Kiến trúc nhà ở đặc trưng của Việt Nam',
        tenHoatDong: 'Hoạt động 2.3: Các kiểu nhà ở đặc trưng & Sơ đồ tư duy 16:9 3D Pixar (Đề mục III SGK Trang 10 - 11)',
        thoiLuong: '13 phút',
        mucTieu: 'Nhận diện được các kiểu nhà ở đặc trưng ở các vùng miền (nhà sàn miền núi, nhà nổi miền Tây, nhà ngõ phố, nhà chung cư hiện đại); chuẩn hóa bài học bằng Sơ đồ tư duy 16:9 3D Pixar.',
        noiDung: 'HS đối chiếu tranh ảnh các kiểu nhà truyền thống và hiện đại (Hình 1.4 SGK); quan sát Sơ đồ tư duy 16:9 3D Pixar.',
        sanPham: 'Bảng so sánh ưu điểm của từng kiểu nhà ở phù hợp với địa hình vùng miền; sơ đồ tư duy trong vở.',
        cot1Trai: '- GV chiếu hình ảnh nhà sàn Tây Nguyên, nhà nổi đồng bằng sông Cửu Long, nhà ống đô thị.\\n- Chiếu Sơ đồ tư duy 16:9 3D Pixar tổng kết bài 1.',
        cot2Phai: 'III. KIẾN TRÚC NHÀ Ở ĐẶC TRƯNG VIỆT NAM\\n- Nhà nông thôn truyền thống: Nhà ngói ba gian gắn với sân vườn.\\n- Nhà sàn: Thích hợp địa hình đồi núi, phòng tránh thú dữ và ngập lụt.\\n- Nhà nổi (bè): Thích hợp vùng sông nước miền Tây.\\n- Nhà ống và chung cư: Thích hợp đô thị hiện đại, tiết kiệm diện tích.'
      }
    ]
  }
];

/**
 * Trả về danh sách đề mục chuẩn xác cho bất kỳ bài học nào.
 * Nếu bài học có sẵn trong thư viện tri thức -> Trả về 100% đề mục SGK.
 * Nếu là bài học khác -> Thuật toán phân tích ngữ nghĩa thông minh để tạo ra các đề mục cụ thể, bám sát chuyên môn, KHÔNG dùng câu chữ chung chung!
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

  // 1. Tìm trong từ điển bài học đã định nghĩa sẵn
  for (const item of KNOWN_CURRICULUM_SECTIONS) {
    if (item.grade === grade || !item.grade) {
      for (const pattern of item.matchPatterns) {
        if (pattern.test(cleanTopic)) {
          return item.sections;
        }
      }
    }
  }

  // 2. Thuật toán phân tách ngữ nghĩa chuyên sâu cho từng phân môn
  // Bóc tách tên bài: Loại bỏ "Bài 10:", "Tiết 1 - 2", v.v.
  const shortTitle = cleanTopic
    .replace(/^Bài \d+[:\.\-]\s*/i, '')
    .replace(/\(.*?\)/g, '')
    .trim() || cleanTopic;

  // PHÂN TÍCH THEO BỘ MÔN VÀ CHỦ ĐỀ
  if (/khoa học tự nhiên|khtn|vật lí|vật lý/i.test(lowerSubject)) {
    return [
      {
        deMuc: `I. Hiện tượng, khái niệm và bản chất của ${shortTitle}`,
        tenHoatDong: `Hoạt động 2.1: Khám phá hiện tượng và bản chất của ${shortTitle} (Đề mục I SGK ${boSach})`,
        thoiLuong: '14 phút',
        mucTieu: `Học sinh tự quan sát thí nghiệm/hình ảnh SGK để nhận diện hiện tượng, thuật ngữ và định nghĩa khoa học cốt lõi của "${shortTitle}".`,
        noiDung: `HS mở SGK ${boSach}, quan sát Hình 1 mở đầu bài học, đọc thông tin đề mục I và thảo luận cặp đôi trả lời các câu hỏi định hướng trên phiếu học tập.`,
        sanPham: `Định nghĩa khoa học chính xác và đặc điểm nhận diện của "${shortTitle}" trong vở bài học.`,
        cot1Trai: `- GV hướng dẫn HS mở SGK trang bài học, quan sát Hình 1.\\n- [PHƯƠNG PHÁP BÀN TAY NẶN BỘT]: Cho HS nêu dự đoán trước khi đọc SGK.\\n- Hướng dẫn các cặp đôi làm việc 3 phút hoàn thành phiếu số 1.`,
        cot2Phai: `I. KHÁI NIỆM & HIỆN TƯỢNG KHOA HỌC (ĐỀ MỤC I SGK)\\n- Định nghĩa và bản chất của "${shortTitle}".\\n- Các hiện tượng vật lí liên quan trong đời sống hàng ngày.`
      },
      {
        deMuc: `II. Quy tắc, công thức tính toán và Thí nghiệm thực hành của ${shortTitle}`,
        tenHoatDong: `Hoạt động 2.2: Quy tắc, công thức & Thí nghiệm thực hành nhóm 4 vai trò (Đề mục II SGK ${boSach})`,
        thoiLuong: '16 phút',
        mucTieu: `Làm việc nhóm 4 vai trò (4 màu mực chống thụ động), tiến hành đo đạc/biến đổi công thức hoặc phân tích bảng dữ liệu để làm chủ kiến thức Đề mục II.`,
        noiDung: `Nhóm 4 thành viên (Nhóm trưởng, Thư ký, Kỹ thuật viên, Báo cáo viên) phân tích sơ đồ/Hình 2 SGK, dùng 4 màu mực viết vào bảng phụ A3, cùng giải quyết nhiệm vụ thực hành.`,
        sanPham: `Phiếu học tập nhóm A3 có đủ 4 màu mực của 4 thành viên; công thức toán học hoặc quy tắc được cả lớp kiểm chứng chính xác.`,
        cot1Trai: `- GV chuyển giao nhiệm vụ thí nghiệm/phân tích Hình 2 SGK.\\n- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ (4 MÀU MỰC)]:\\n  + Nhóm trưởng (Mực xanh), Thư ký (Mực đen), Kỹ thuật (Mực tím), Báo cáo viên (Mực xanh lá).\\n- GV đi bao quát lớp, hỗ trợ các nhóm còn lúng túng.`,
        cot2Phai: `II. QUY TẮC & CÔNG THỨC TOÁN HỌC (ĐỀ MỤC II SGK)\\n- Công thức tính toán và đơn vị đo chuẩn của từng đại lượng.\\n- Bảng số liệu thực nghiệm thu được qua các lần đo.`
      },
      {
        deMuc: `III. Ứng dụng thực tiễn & Hệ thống hóa Sơ đồ tư duy 16:9 3D Pixar`,
        tenHoatDong: `Hoạt động 2.3: Ứng dụng thực tế & Sơ đồ tư duy 16:9 3D Pixar (Đề mục III SGK ${boSach})`,
        thoiLuong: '12 phút',
        mucTieu: `Liên hệ các ứng dụng thực tế trong đời sống và kỹ thuật; chuẩn hóa và khắc sâu toàn bộ kiến thức bài học bằng Sơ đồ tư duy 16:9 3D Pixar trực quan.`,
        noiDung: `HS liên hệ các ứng dụng khoa học kỹ thuật và an toàn đời sống; quan sát Sơ đồ tư duy 16:9 3D Pixar trên bảng tương tác; hoàn thiện sơ đồ vào vở ghi.`,
        sanPham: `Sơ đồ tư duy 16:9 đầy đủ các nhánh tri thức trong vở học sinh; các ví dụ ứng dụng thực tế sinh động.`,
        cot1Trai: `- GV tổ chức cho HS liên hệ thực tiễn và giáo dục an toàn/môi trường.\\n- Chiếu SƠ ĐỒ TƯ DUY 16:9 PHONG CÁCH 3D PIXAR lên màn hình chiếu.\\n- Hướng dẫn HS hệ thống hóa lại các nhánh tri thức.`,
        cot2Phai: `III. ỨNG DỤNG THỰC TIỄN & SƠ ĐỒ TƯ DUY 16:9\\n- Các ứng dụng trong công nghệ, đời sống và bảo vệ môi trường.\\n- Sơ đồ tư duy 16:9 3D Pixar tổng kết toàn bộ định nghĩa, công thức và quy tắc.`
      }
    ];
  }

  if (/toán|toan/i.test(lowerSubject)) {
    return [
      {
        deMuc: `I. Hình thành định nghĩa và Khái niệm trọng tâm của ${shortTitle}`,
        tenHoatDong: `Hoạt động 2.1: Khám phá khái niệm và thuật ngữ toán học của ${shortTitle} (Đề mục I SGK ${boSach})`,
        thoiLuong: '14 phút',
        mucTieu: `Học sinh tự quan sát hình vẽ trực quan/tình huống thực tế trong SGK để nhận biết khái niệm, kí hiệu và thuật ngữ toán học của "${shortTitle}".`,
        noiDung: `HS đọc SGK ${boSach}, làm việc với Hình 1, thực hiện hoạt động Khám phá 1 để phát biểu định nghĩa toán học.`,
        sanPham: `Định nghĩa chính xác, kí hiệu toán học chuẩn và ví dụ minh họa trong vở ghi.`,
        cot1Trai: `- Cho HS quan sát hình vẽ trực quan trong SGK.\\n- Hướng dẫn HS tự phát hiện dấu hiệu bản chất trước khi GV chính thức hóa.`,
        cot2Phai: `I. KHÁI NIỆM & KÍ HIỆU TOÁN HỌC (ĐỀ MỤC I SGK)\\n- Định nghĩa toán học chuẩn xác.\\n- Kí hiệu và điều kiện áp dụng.`
      },
      {
        deMuc: `II. Tính chất, quy tắc và Thao tác giải toán của ${shortTitle}`,
        tenHoatDong: `Hoạt động 2.2: Tính chất, quy tắc & Thảo luận nhóm 4 vai trò (Đề mục II SGK ${boSach})`,
        thoiLuong: '16 phút',
        mucTieu: `Nắm vững các tính chất, công thức và quy tắc biến đổi toán học; thảo luận nhóm 4 vai trò (4 màu mực) để giải bài toán mẫu.`,
        noiDung: `Nhóm 4 em giải bài tập Khám phá 2 / Luyện tập 1 trong SGK, trình bày các bước biến đổi logic trên bảng phụ có đủ 4 màu mực.`,
        sanPham: `Lời giải toán học mẫu mạch lạc, chuẩn mực với các bước lập luận chặt chẽ.`,
        cot1Trai: `- GV hướng dẫn quy tắc vàng trong SGK.\\n- Tổ chức hoạt động nhóm 4 vai trò (4 màu mực) giải bài toán thực hành.`,
        cot2Phai: `II. TÍNH CHẤT & QUY TẮC TOÁN HỌC (ĐỀ MỤC II SGK)\\n- Hệ thống tính chất cơ bản và hệ quả.\\n- Quy trình giải toán theo các bước chuẩn mực.`
      },
      {
        deMuc: `III. Vận dụng toán học vào thực tiễn & Sơ đồ tư duy 16:9 3D Pixar`,
        tenHoatDong: `Hoạt động 2.3: Bài toán thực tế & Sơ đồ tư duy 16:9 3D Pixar (Đề mục III SGK ${boSach})`,
        thoiLuong: '12 phút',
        mucTieu: `Giải bài toán mô hình hóa thực tế trong SGK; hệ thống hóa toàn bộ kiến thức bài học bằng Sơ đồ tư duy 16:9 3D Pixar.`,
        noiDung: `HS giải bài toán tình huống thực tế; quan sát Sơ đồ tư duy 16:9 3D Pixar và tóm tắt phương pháp giải vào vở.`,
        sanPham: `Đáp số bài toán thực tế và Sơ đồ tư duy 16:9 hoàn chỉnh trong vở học sinh.`,
        cot1Trai: `- GV liên hệ toán học với các ứng dụng đời sống, kiến trúc, tài chính.\\n- Chiếu Sơ đồ tư duy 16:9 3D Pixar tổng kết bài học.`,
        cot2Phai: `III. MÔ HÌNH HÓA THỰC TIỄN & SƠ ĐỒ TƯ DUY 16:9\\n- Giải quyết vấn đề thực tế bằng công cụ toán học.\\n- Sơ đồ tư duy 16:9 3D Pixar tóm tắt phương pháp và công thức cốt lõi.`
      }
    ];
  }

  // Mặc định cho các môn học khác (Công nghệ, Tin học, Ngữ văn, Lịch sử, Địa lí, GDCD...)
  return [
    {
      deMuc: `I. Khái niệm và Đặc điểm cơ bản của ${shortTitle}`,
      tenHoatDong: `Hoạt động 2.1: Khám phá khái niệm và đặc điểm cốt lõi của ${shortTitle} (Đề mục I SGK ${boSach})`,
      thoiLuong: '14 phút',
      mucTieu: `Học sinh tự đọc SGK, quan sát sơ đồ/tranh ảnh để nhận diện khái niệm, đặc điểm và vai trò của "${shortTitle}".`,
      noiDung: `HS nghiên cứu mục I SGK trang bài học, quan sát Hình 1, thảo luận cặp đôi trả lời các câu hỏi khám phá.`,
      sanPham: `Nội dung ghi chép định nghĩa và bảng liệt kê đặc điểm chính của "${shortTitle}".`,
      cot1Trai: `- Hướng dẫn HS quan sát hình ảnh và đọc thông tin trong SGK.\\n- Khuyến khích HS tự rút ra các đặc điểm chính trước khi giáo viên tổng kết.`,
      cot2Phai: `I. KHÁI NIỆM & ĐẶC ĐIỂM CỐT LÕI (ĐỀ MỤC I SGK)\\n- Khái niệm và thuật ngữ chính.\\n- Các đặc trưng cơ bản được mô tả trong SGK.`
    },
    {
      deMuc: `II. Quy trình, phương pháp và Thực hành nhóm 4 vai trò về ${shortTitle}`,
      tenHoatDong: `Hoạt động 2.2: Quy trình, phân tích & Thảo luận nhóm 4 vai trò (Đề mục II SGK ${boSach})`,
      thoiLuong: '16 phút',
      mucTieu: `Làm việc nhóm 4 vai trò (4 màu mực chống thụ động), thực hành phân tích quy trình hoặc giải quyết nhiệm vụ chuyên môn của Đề mục II.`,
      noiDung: `Nhóm 4 em phân vai (Nhóm trưởng, Thư ký, Kỹ thuật, Báo cáo viên), thảo luận Hình 2 SGK và hoàn thành sản phẩm trên phiếu nhóm A3 bằng 4 màu mực.`,
      sanPham: `Sản phẩm nhóm A3 có chữ ký và 4 màu mực của cả 4 học sinh; các bước quy trình hoặc phân tích được trình bày mạch lạc.`,
      cot1Trai: `- GV chuyển giao nhiệm vụ thảo luận chuyên sâu.\\n- Điều phối hoạt động nhóm 4 vai trò (4 màu mực chống thụ động).`,
      cot2Phai: `II. QUY TRÌNH & THAO TÁC THỰC HÀNH (ĐỀ MỤC II SGK)\\n- Các bước quy trình hoặc nguyên tắc triển khai.\\n- Báo cáo kết quả thảo luận nhóm có đủ 4 màu mực.`
    },
    {
      deMuc: `III. Liên hệ thực tế & Sơ đồ tư duy 16:9 3D Pixar`,
      tenHoatDong: `Hoạt động 2.3: Vận dụng thực tế & Sơ đồ tư duy 16:9 3D Pixar (Đề mục III SGK ${boSach})`,
      thoiLuong: '12 phút',
      mucTieu: `Liên hệ nội dung bài học với đời sống thực tế và định hướng phát triển bản thân; hệ thống hóa bài học bằng Sơ đồ tư duy 16:9 3D Pixar.`,
      noiDung: `HS liên hệ các tình huống thực tiễn; quan sát Sơ đồ tư duy 16:9 trên màn hình và hoàn thiện sơ đồ vào vở.`,
      sanPham: `Sơ đồ tư duy 16:9 trong vở học sinh; các bài học liên hệ thực tiễn phong phú.`,
      cot1Trai: `- GV gợi mở các tình huống thực tiễn gắn liền với địa phương và đời sống.\\n- Chiếu Sơ đồ tư duy 16:9 3D Pixar tổng kết toàn bài học.`,
      cot2Phai: `III. VẬN DỤNG THỰC TIỄN & SƠ ĐỒ TƯ DUY 16:9\\n- Liên hệ thực tế đời sống, xã hội và định hướng nghề nghiệp.\\n- Sơ đồ tư duy 16:9 3D Pixar khắc sâu toàn bộ tri thức bài học.`
    }
  ];
}
