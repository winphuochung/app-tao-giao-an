import { CompleteLessonPlan } from '../types';
import { SLIDE_THEMES } from './themes';
import { HOAT_DONG_NHOM_THCS } from './activeGroupActivities';

export const SAMPLE_KHTN_7_BAI_9_DO_TOC_DO: CompleteLessonPlan = {
  giaoAn: {
    metadata: {
      capHoc: 'THCS',
      congVan: '5512/BGDĐT-GDTrH',
      khoiLop: 7,
      monHoc: 'Khoa học tự nhiên',
      boSach: 'Kết nối tri thức với cuộc sống',
      tenBaiDay: 'Bài 9: Đo tốc độ',
      soTiet: '2 tiết',
      tietTheoPPCT: 'Tiết 30 - 31',
      thoiLuong: '90 phút',
      tuanThucHien: 'Tuần 8 đến 9',
      siSoLop: '40 học sinh (Chia 8 nhóm, mỗi nhóm 5 em)',
      dacDiemHocSinh: 'Học sinh hào hứng với thí nghiệm thực hành đo đạc; cần rèn luyện tính cẩn thận và trung thực trong ghi chép số liệu.',
      truong: 'Trường THCS Chu Văn An',
      toChuyenMon: 'Tổ Khoa học tự nhiên (Lí - Hóa - Sinh)',
      giaoVien: 'Nguyễn Văn A',
      tichHop: {
        nangLucSo: true,
        stem: true,
        anToanGiaoThong: true,
        kyNangSong: true,
        baoVeMoiTruong: false,
        dinhDuongSucKhoe: false,
        quocPhongAnNinh: true
      }
    },
    mucTieu: {
      kienThuc: [
        'Mô tả được sơ lược cách đo tốc độ bằng đồng hồ bấm giây và cổng quang điện trong dụng cụ thực hành ở nhà trường (SGK KNTT Trang 49 - 51).',
        'Mô tả được nguyên tắc hoạt động của thiết bị "bắn tốc độ" trong kiểm tra tốc độ các phương tiện giao thông đường bộ (Hình 9.4 SGK Trang 51).',
        'Nêu được ưu điểm vượt trội về độ chính xác của đồng hồ đo thời gian hiện số kết hợp cổng quang điện so với phương pháp bấm giây thủ công.'
      ],
      nangLucDacThu: [
        'Năng lực nhận thức KHTN: Xác định đúng hai đại lượng cốt lõi cần đo để tính tốc độ là quãng đường chuyển động (s) và thời gian (t); nắm vững công thức v = s / t.',
        'Năng lực tìm hiểu tự nhiên: Thiết lập được thí nghiệm đo tốc độ ô tô đồ chơi trên máng nghiêng (Hình 9.2); hoàn thành Bảng 9.1 với 3 lần đo và tính giá trị trung bình; mô tả được thí nghiệm cổng quang điện (Hình 9.3).',
        'Năng lực vận dụng KHTN: Giải bài toán thực tế về camera bắn tốc độ (Hình 9.4 SGK Trang 51); so sánh phương pháp đo tốc độ chạy 60m trong môn Giáo dục thể chất.'
      ],
      nangLucChung: {
        tuChuTuHoc: [
          'Chủ động nghiên cứu SGK KHTN 7 trang 49 - 51, tự giác quan sát tranh ảnh và sơ đồ thí nghiệm (Hình 9.1, 9.2, 9.3, 9.4).'
        ],
        giaoTiepHopTac: [
          'Phối hợp nhịp nhàng trong nhóm 4 vai trò (Nhóm trưởng, Thư ký, Kỹ thuật viên, Báo cáo viên) với 4 màu mực chống thụ động khi đo đạc và lập Bảng 9.1.'
        ],
        giaiQuyetVanDe: [
          'Biết cách khắc phục sai số thực nghiệm bằng cách đo lặp lại 3 lần và lấy giá trị trung bình cộng.'
        ]
      },
      phamChat: {
        yeuNuoc: ['Ý thức bảo vệ trật tự an toàn giao thông quốc gia, tự hào về hệ thống camera giám sát thông minh trên các tuyến cao tốc Việt Nam.'],
        nhanAi: ['Tôn trọng ý kiến bạn cùng nhóm, sẵn sàng hỗ trợ các bạn còn lúng túng trong việc bấm đồng hồ hoặc đọc số liệu.'],
        chamChi: ['Tỉ mỉ thực hiện đủ 3 lần đo thực nghiệm, nghiêm túc ghi chép số liệu vào Bảng 9.1 SGK.'],
        trungThuc: ['Tuyệt đối trung thực trong việc ghi nhận số liệu đo thực tế, không tự ý sửa đổi hoặc làm tròn số liệu để có kết quả đẹp.'],
        trachNhiem: ['Chấp hành nghiêm chỉnh quy định tốc độ khi tham gia giao thông; giữ gìn thiết bị thí nghiệm và cổng quang điện cẩn thận.']
      },
      tichHopMoRong: [
        '[TÍCH HỢP AN TOÀN GIAO THÔNG]: Phân tích nguyên tắc hoạt động của súng bắn tốc độ CSGT; hiểu rõ vì sao chạy quá tốc độ giới hạn là nguyên nhân hàng đầu gây tai nạn giao thông.',
        '[GIÁO DỤC STEM]: Chế tạo máng nghiêng dốc 80cm bằng vật liệu tái chế để thử nghiệm đo tốc độ các mô hình xe đồ chơi.',
        '[TÍCH HỢP NĂNG LỰC SỐ]: Khai thác phần mềm bấm giờ điện tử, ứng dụng định vị GPS trên điện thoại di động và đồng hồ thông minh để tự động đo tốc độ.',
        '[AN NINH QUỐC PHÒNG (TT 08/2024/TT-BGDĐT)]: Ứng dụng công nghệ radar và định vị tốc độ trong việc giám sát tàu thuyền trên vùng biển chủ quyền của Tổ quốc.'
      ]
    },
    thietBiDayHoc: {
      giaoVien: [
        'Bộ thí nghiệm đo tốc độ bằng máng nghiêng (tấm gỗ phẳng 80cm, ô tô đồ chơi nhỏ không động cơ, thước mét, đồng hồ bấm giây cơ/điện tử - Hình 9.2 SGK).',
        'Bộ thí nghiệm đo tốc độ dùng cổng quang điện và đồng hồ hiện số (Hình 9.3 SGK: nam châm điện, viên bi sắt, 2 cổng quang điện, công tắc đóng ngắt, đồng hồ đo thời gian hiện số đa năng).',
        'Slide bài giảng tương tác, video clip hoạt động của camera bắn tốc độ CSGT trên cao tốc.',
        'Phiếu học tập nhóm A3 (in sẵn Bảng 9.1 SGK), bộ 4 bút màu chuyên dụng cho 4 vai trò nhóm.'
      ],
      hocSinh: [
        'Sách giáo khoa Khoa học tự nhiên 7 (Kết nối tri thức với cuộc sống, trang 49 - 52).',
        'Vở ghi bài, thước kẻ chia độ milimet, bút viết 4 màu (xanh, đen, tím, xanh lá).',
        'Điện thoại thông minh (mỗi nhóm 1 máy) có chức năng bấm giờ chính xác đến 1/100 giây hoặc cài phần mềm đo tốc độ GPS.'
      ]
    },
    tienTrinhDayHoc: [
      // HOẠT ĐỘNG 1: KHỞI ĐỘNG
      {
        id: 'hd-khtn7-bai9-1',
        soThuTu: 1,
        tenHoatDong: 'Hoạt động 1: Xác định vấn đề / Nhiệm vụ học tập (Khởi động lôi cuốn)',
        thoiLuong: '7 phút',
        mucTieu: 'Kích hoạt kiến thức về tốc độ v = s/t; tạo mâu thuẫn nhận thức về cách làm thế nào để đo được tốc độ của một vật trong thực tế (phải đo những đại lượng nào và dùng dụng cụ gì).',
        noiDung: 'HS theo dõi câu hỏi mở đầu trong SGK trang 49: "Theo em để xác định tốc độ chuyển động người ta phải đo những đại lượng nào và dùng những dụng cụ nào để đo? Tại sao?", tham gia trả lời nhanh.',
        sanPham: 'Câu trả lời của HS: Để xác định tốc độ cần đo độ dài quãng đường s (bằng thước) và thời gian chuyển động t (bằng đồng hồ), sau đó áp dụng công thức v = s / t.',
        bangHaiCot: [
          {
            id: 'r-9-1-1',
            buocSuPham: 'Bước 1: Chuyển giao nhiệm vụ (Câu hỏi mở đầu SGK Trang 49)',
            cot1Trai: '- GV chiếu câu hỏi mở đầu SGK trang 49 lên màn hình:\n  "Theo em để xác định tốc độ chuyển động người ta phải đo những đại lượng nào và dùng những dụng cụ nào để đo? Tại sao?"\n- [TÍCH HỢP NĂNG LỰC SỐ]: GV chiếu hình ảnh chiếc xe cảnh sát giao thông đang làm nhiệm vụ kiểm tra tốc độ trên đường cao tốc.\n- Đặt câu hỏi: Làm sao các chú CSGT biết xe nào chạy 60 km/h, xe nào chạy 80 km/h?',
            cot2Phai: '1. Tình huống xuất phát:\n- Đo đại lượng: Quãng đường s (mét, km) và Thời gian t (giây, giờ).\n- Dụng cụ đo: Thước cuộn, thước kẻ, đồng hồ bấm giây, tốc kế trên xe hoặc súng bắn tốc độ.\n- Vấn đề trọng tâm: Có những phương pháp đo tốc độ nào trong phòng thực hành và ngoài thực tế?'
          },
          {
            id: 'r-9-1-2',
            buocSuPham: 'Bước 2: Học sinh suy nghĩ và thảo luận cặp đôi',
            cot1Trai: '- Cho HS suy nghĩ độc lập trong 1 phút, sau đó quay sang trao đổi cặp đôi 1 phút.\n- GV quan sát lớp học, khích lệ các em mạnh dạn nêu các dụng cụ quen thuộc trong đời sống.',
            cot2Phai: '- HS thảo luận cặp đôi sôi nổi, ghi nhanh các phương án dụng cụ vào vở nháp.'
          },
          {
            id: 'r-9-1-3',
            buocSuPham: 'Bước 3: Báo cáo, chia sẻ ý kiến',
            cot1Trai: '- GV mời 2 HS đại diện chia sẻ câu trả lời.\n- Cho HS khác nhận xét, bổ sung các dụng cụ hiện đại như camera bắn tốc độ, đồng hồ thông minh có GPS.',
            cot2Phai: '- HS trình bày: "Cần đo quãng đường bằng thước và đo thời gian bằng đồng hồ bấm giây rồi lấy s chia cho t ạ!".\n- Các bạn trong lớp gật đầu tán thành.'
          },
          {
            id: 'r-9-1-4',
            buocSuPham: 'Bước 4: Kết luận, nhận định & Dẫn dắt vào bài mới',
            cot1Trai: '- GV khen ngợi sự hiểu biết thực tế của HS.\n- Dẫn dắt: Để đo tốc độ một cách khoa học, chính xác trong phòng thực hành cũng như kiểm soát an toàn giao thông ngoài thực tế, hôm nay chúng ta cùng khám phá chi tiết "Bài 9: Đo tốc độ".',
            cot2Phai: '- HS ghi tên bài học vào vở: "BÀI 9: ĐO TỐC ĐỘ" và mở SGK trang 49 sẵn sàng khám phá.'
          }
        ]
      },

      // HOẠT ĐỘNG 2.1: ĐỀ MỤC I SGK
      {
        id: 'hd-khtn7-bai9-2-1',
        soThuTu: 2,
        tenHoatDong: 'Hoạt động 2.1: Đo tốc độ dùng đồng hồ bấm giây (Đề mục I SGK KNTT - Trang 49 & 50)',
        thoiLuong: '20 phút',
        deMucSGK: 'I. Đo tốc độ dùng đồng hồ bấm giây (Dụng cụ, Cách đo & Thí nghiệm máng nghiêng)',
        mucTieu: 'Nêu được dụng cụ đo (thước, đồng hồ bấm giây, tốc kế Hình 9.1); nắm vững quy trình các bước đo tốc độ; thực hiện thành công thí nghiệm ô tô đồ chơi chạy trên máng nghiêng 80cm (Hình 9.2); lập và hoàn thành Bảng 9.1 SGK với 3 lần đo, tính s_tb, t_tb, v; liên hệ so sánh với chạy cự li 60m trong môn GDTC.',
        noiDung: 'HS nghiên cứu mục I SGK trang 49; quan sát Hình 9.1 (Tốc kế trên ô tô), Hình 9.2 (Bố trí thí nghiệm đo tốc độ); làm việc nhóm 4 vai trò (4 màu mực) tiến hành thí nghiệm ô tô đồ chơi trên tấm gỗ dốc 80cm, đo 3 lần, ghi kết quả vào Bảng 9.1 và tính tốc độ trung bình.',
        sanPham: 'Bảng 9.1 hoàn chỉnh có đủ 3 lần đo (s1, s2, s3; t1, t2, t3), tính đúng s_tb, t_tb và v = s/t; câu trả lời so sánh với bài chạy 60m môn Thể dục.',
        hoatDongNhomTichCuc: HOAT_DONG_NHOM_THCS,
        bangHaiCot: [
          {
            id: 'r-9-2-1-1',
            buocSuPham: 'Bước 1: Chuyển giao nhiệm vụ Đề mục I (Khai thác Hình 9.1 & Quy trình đo)',
            hinhAnhSGK: {
              tenHinh: 'Hình 9.1: Tốc kế trên ô tô (SGK KHTN 7 - Trang 49)',
              moTa: 'Bảng đồng hồ hiển thị tốc độ tức thời của ô tô với các vạch chia từ 0 đến 220 km/h.',
              imageUrl: '/sgk-images/khtn-7-hinh-9-1-toc-ke.png',
              cauHoiKhaiThac: [
                '1. Quan sát Hình 9.1: Thiết bị này tên là gì và được trang bị trên những phương tiện nào?',
                '2. Trong phòng thực hành, ta có 2 cách đo: Cách 1 (chọn s trước, đo t sau) và Cách 2 (chọn t trước, đo s sau). Thường chọn cách nào? Vì sao?'
              ],
              ghiChuSuPham: 'Nhấn mạnh: Trong phòng thực hành ta luôn chọn quãng đường s cố định trước (vạch xuất phát và vạch đích), sau đó đo thời gian t bằng đồng hồ bấm giây.'
            },
            cot1Trai: '- GV hướng dẫn HS quan sát mục 1 & 2 trong SGK trang 49.\n- Giới thiệu Hình 9.1: Tốc kế xe ô tô (đo tốc độ tức thời).\n- Nêu rõ quy tắc đo: Đo quãng đường s bằng thước, đo thời gian t bằng đồng hồ bấm giây.\n- Nêu quy trình 6 bước chuẩn SGK:\n  + Bước 1: Dùng thước đo độ dài s, đánh dấu vạch xuất phát và vạch đích.\n  + Bước 2: Dùng đồng hồ bấm giây đo thời gian t từ vạch xuất phát đến vạch đích.\n  + Bước 3: Đo lặp lại 3 lần để lấy giá trị trung bình.\n  + Bước 4: Lập Bảng 9.1 ghi kết quả.\n  + Bước 5: Tính v = s / t.\n  + Bước 6: Nhận xét kết quả.\n- Phát phiếu học tập nhóm A3 và bộ dụng cụ thí nghiệm Hình 9.2 cho 8 nhóm.',
            cot2Phai: 'I. ĐO TỐC ĐỘ DÙNG ĐỒNG HỒ BẤM GIÂY\n1. Dụng cụ đo:\n- Thước (đo quãng đường s).\n- Đồng hồ bấm giây (đo thời gian t).\n- Tốc kế: Dụng cụ gắn trên ô tô, xe máy đo trực tiếp tốc độ tức thời (Hình 9.1).\n2. Cách đo trong phòng thực hành:\n- Chọn quãng đường s trước, đo thời gian t sau.\n- Công thức: v = s / t.\n- Thực hiện đo 3 lần để lấy giá trị trung bình cộng:\n  + s_tb = (s1 + s2 + s3) / 3\n  + t_tb = (t1 + t2 + t3) / 3\n  + v = s_tb / t_tb'
          },
          {
            id: 'r-9-2-1-2',
            buocSuPham: 'Bước 2: Nhóm 4 vai trò thực hiện thí nghiệm ô tô đồ chơi máng nghiêng (Hình 9.2 & Bảng 9.1)',
            hinhAnhSGK: {
              tenHinh: 'Hình 9.2: Bố trí thí nghiệm đo tốc độ dùng đồng hồ bấm giây (SGK Trang 50)',
              moTa: 'Tấm gỗ dài 80cm kê một đầu lên vài cuốn sách tạo dốc nghiêng; ô tô đồ chơi đặt ở vạch xuất phát; thước đo khoảng cách giữa 2 vạch phấn.',
              imageUrl: '/sgk-images/khtn-7-hinh-9-2-thi-nghiem-bam-giay.png',
              cauHoiKhaiThac: [
                '1. Quan sát Hình 9.2: Nêu các dụng cụ cần chuẩn bị để tiến hành thí nghiệm?',
                '2. Vì sao phải thực hiện phép đo 3 lần thay vì đo 1 lần duy nhất?',
                '3. Các nhóm tự thực hành, điền số liệu đo vào mẫu Bảng 9.1 SGK bằng 4 màu mực.'
              ],
              ghiChuSuPham: 'Quy tắc 4 màu mực: Nhóm trưởng duyệt số liệu (mực xanh), Thư ký kẻ bảng ghi chép (mực đen), Kỹ thuật viên đo s (mực tím), Báo cáo viên ghi t (mực xanh lá).'
            },
            cot1Trai: '- GV hướng dẫn các nhóm lắp đặt máng nghiêng theo Hình 9.2: Kê sách tạo độ dốc vừa phải (khoảng 10 - 15 độ), vẽ 2 vạch cách nhau s = 50 cm hoặc 60 cm.\n- [PHÂN VAI 4 THÀNH VIÊN - 4 MÀU MỰC]:\n  + Kỹ thuật viên đặt xe ở vạch xuất phát.\n  + Báo cáo viên cầm đồng hồ bấm giây, tập trung cao độ.\n  + Thư ký cầm bút đen sẵn sàng điền Bảng 9.1.\n  + Nhóm trưởng đếm nhịp "3 - 2 - 1 - Thả".\n- GV đi bao quát lớp, hướng dẫn HS thao tác bấm đồng hồ khớp với thời điểm xe chạm vạch đích.',
            cot2Phai: '3. Thí nghiệm thực hành (Hình 9.2 SGK Trang 50):\nBẢNG 9.1. BẢNG GHI KẾT QUẢ THÍ NGHIỆM ĐO TỐC ĐỘ\n(Ví dụ thực nghiệm với s = 60 cm = 0,6 m):\n- Lần 1: s1 = 60 cm; t1 = 1,22 s\n- Lần 2: s2 = 60 cm; t2 = 1,18 s\n- Lần 3: s3 = 60 cm; t3 = 1,20 s\n\n* Xử lý số liệu:\n- s_tb = (60 + 60 + 60) / 3 = 60 cm = 0,6 m.\n- t_tb = (1,22 + 1,18 + 1,20) / 3 = 1,20 s.\n- Tốc độ trung bình: v = s_tb / t_tb = 0,6 / 1,20 = 0,5 m/s = 1,8 km/h.'
          },
          {
            id: 'r-9-2-1-3',
            buocSuPham: 'Bước 3: Báo cáo kết quả & Thảo luận so sánh môn Giáo dục thể chất',
            cot1Trai: '- GV mời 2 nhóm treo bảng phụ A3 lên bảng lớp.\n- Đại diện nhóm (Báo cáo viên) trình bày số liệu đo 3 lần và kết quả tốc độ v.\n- Cho cả lớp thảo luận câu hỏi lệnh (?) SGK trang 49:\n  "Mô tả cách kiểm tra chạy 60m môn Giáo dục thể chất. So sánh giống và khác với cách đo tốc độ trên?"',
            cot2Phai: '4. Thảo luận mở rộng (? SGK Trang 49):\n- Giống nhau: Đều chọn trước quãng đường s (cố định cự li 60m), dùng đồng hồ bấm giây đo thời gian t từ xuất phát đến khi chạm đích, rồi tính v = s / t.\n- Khác nhau:\n  + Chạy 60m môn Thể dục: Thường đo 1 lần để chấm điểm thành tích; người phát lệnh vẫy cờ hoặc thổi còi.\n  + Thí nghiệm KHTN: Cần đo lặp lại 3 lần để triệt tiêu sai số phản xạ bấm tay và lấy giá trị trung bình cộng.'
          },
          {
            id: 'r-9-2-1-4',
            buocSuPham: 'Bước 4: Kết luận, nhận định Đề mục I',
            cot1Trai: '- GV nhận xét tinh thần hợp tác của các nhóm.\n- Chuẩn hóa: Để đo tốc độ bằng đồng hồ bấm giây, cần xác định s trước, bấm t sau; luôn đo 3 lần để lấy trung bình cộng nhằm giảm sai số.',
            cot2Phai: '* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):\n- Muốn đo tốc độ cần đo độ dài quãng đường và thời gian đi hết quãng đường đó.\n- Quy trình đo bằng đồng hồ bấm giây: Đo s -> Đo t (3 lần) -> Tính trung bình -> Tính v = s/t.'
          }
        ]
      },

      // HOẠT ĐỘNG 2.2: ĐỀ MỤC II SGK
      {
        id: 'hd-khtn7-bai9-2-2',
        soThuTu: 2,
        tenHoatDong: 'Hoạt động 2.2: Dùng đồng hồ hiện số và cổng quang điện đo tốc độ (Đề mục II SGK KNTT - Trang 50 & 51)',
        thoiLuong: '15 phút',
        deMucSGK: 'II. Dùng đồng hồ đo thời gian hiện số và cổng quang điện trong việc đo tốc độ',
        mucTieu: 'Mô tả được sơ lược cấu tạo bộ thí nghiệm gồm 6 bộ phận (Hình 9.3 SGK); hiểu nguyên lý cổng quang điện và đồng hồ hiện số ở chế độ A <-> B; giải thích được vì sao phương pháp này chính xác hơn nhiều so với bấm giây bằng tay (không có sai số phản xạ của mắt và tay người).',
        noiDung: 'HS quan sát Hình 9.3 SGK trang 51, tìm hiểu 6 chi tiết đánh số; thảo luận cặp đôi mô tả sơ lược cách đo tốc độ khi viên bi chuyển động từ cổng quang điện (3) đến cổng quang điện (4); quan sát GV biểu diễn thí nghiệm hoặc clip mô phỏng.',
        sanPham: 'Bản mô tả chính xác cách đo: Nam châm ngắt điện thả viên bi sắt -> Khi bi đi qua cổng (3) đồng hồ tự bật đếm -> Khi bi qua cổng (4) đồng hồ tự ngắt -> Đọc thời gian hiển thị t; tốc độ v = s / t.',
        bangHaiCot: [
          {
            id: 'r-9-2-2-1',
            buocSuPham: 'Bước 1: Chuyển giao nhiệm vụ Đề mục II (Tìm hiểu Hình 9.3 SGK Trang 51)',
            hinhAnhSGK: {
              tenHinh: 'Hình 9.3: Thí nghiệm đo tốc độ dùng đồng hồ thời gian hiện số và cổng quang điện (SGK Trang 51)',
              moTa: 'Sơ đồ lắp ráp hoàn chỉnh gồm: (1) Nam châm điện giữ bi sắt, (2) Viên bi sắt, (3) Cổng quang 1, (4) Cổng quang 2, (5) Công tắc đóng ngắt, (6) Đồng hồ hiện số.',
              imageUrl: '/sgk-images/khtn-7-hinh-9-3-cong-quang-dien.png',
              cauHoiKhaiThac: [
                '1. Quan sát Hình 9.3: Hãy kể tên 6 bộ phận tương ứng với các số từ (1) đến (6)?',
                '2. Cổng quang điện có cấu tạo và chức năng gì khi viên bi chắn ngang tia sáng?',
                '3. Đồng hồ hiện số cần chọn chế độ đo nào để đo thời gian bi chạy từ cổng (3) đến cổng (4)?'
              ],
              ghiChuSuPham: 'Giải thích nguyên lý cổng quang: Có một chùm tia hồng ngoại chiếu sang đầu thu; khi bi sắt đi qua chắn tia sáng, tín hiệu điện kích hoạt đồng hồ đóng/ngắt tự động cực kỳ chính xác.'
            },
            cot1Trai: '- GV chiếu Hình 9.3 SGK trang 51 lên màn hình lớn.\n- Đặt vấn đề: Ở Đề mục I, khi bấm đồng hồ bằng tay, tại sao kết quả giữa các lần đo lại có sự chênh lệch? (Do phản xạ mắt và tay người bị trễ khoảng 0,1s - 0,2s).\n- Để loại bỏ hoàn toàn sai số này, các nhà khoa học sử dụng CỔNG QUANG ĐIỆN VÀ ĐỒNG HỒ HIỆN SỐ.\n- Yêu cầu HS đọc thông tin mục II, quan sát Hình 9.3 và thảo luận trả lời câu hỏi 1 SGK trang 51.',
            cot2Phai: 'II. DÙNG ĐỒNG HỒ ĐO THỜI GIAN HIỆN SỐ VÀ CỔNG QUANG ĐIỆN\n1. Dụng cụ đo (Hình 9.3 SGK Trang 51):\n(1) Nam châm điện: Dùng để giữ viên bi sắt cố định ban đầu.\n(2) Viên bi sắt: Vật chuyển động cần đo tốc độ.\n(3) Cổng quang điện thứ nhất: Phát tín hiệu BẬT đồng hồ.\n(4) Cổng quang điện thứ hai: Phát tín hiệu TẮT đồng hồ.\n(5) Công tắc điện: Dùng đóng/ngắt nam châm điện để thả bi.\n(6) Đồng hồ đo thời gian hiện số: Chọn chế độ A <-> B để đo khoảng thời gian bi đi từ cổng 3 sang cổng 4.'
          },
          {
            id: 'r-9-2-2-2',
            buocSuPham: 'Bước 2: Học sinh phân tích nguyên lý & Theo dõi thí nghiệm biểu diễn',
            cot1Trai: '- GV tiến hành thí nghiệm biểu diễn trên bàn giáo viên (hoặc chiếu clip quay chậm 4K):\n  + Dùng thước trên máng đo khoảng cách giữa 2 cổng quang: s = 0,2 m (20 cm).\n  + Bấm công tắc (5) -> ngắt nam châm -> bi (2) lăn xuống.\n  + Qua cổng (3) -> đồng hồ nhảy số tích tắc.\n  + Qua cổng (4) -> đồng hồ dừng lại ở 0,125 s.\n- Cho HS đọc trực tiếp kết quả hiển thị trên màn hình LED số.',
            cot2Phai: '2. Cách tiến hành và đo đạc:\n- Bước 1: Bố trí thí nghiệm như Hình 9.3; đo khoảng cách s giữa cổng quang (3) và (4).\n- Bước 2: Bật công tắc (5) ngắt điện nam châm, thả bi rơi/lăn.\n- Bước 3: Đồng hồ hiện số tự động đo khoảng thời gian t với độ chính xác đến 1/1000 giây.\n- Bước 4: Tính tốc độ: v = s / t.\n\n* Ưu điểm:\n- Triệt tiêu hoàn toàn sai số do phản xạ bấm tay của con người.\n- Cho kết quả khách quan, cực kỳ chuẩn xác.'
          },
          {
            id: 'r-9-2-2-3',
            buocSuPham: 'Bước 3: Báo cáo thảo luận & Tính toán tốc độ viên bi',
            cot1Trai: '- Cho HS làm việc cặp đôi: Tính tốc độ viên bi sắt với s = 20 cm = 0,2 m và t = 0,125 s.\n- Mời 1 HS lên bảng viết công thức và bấm máy tính.',
            cot2Phai: '* Ví dụ tính toán:\n- s = 20 cm = 0,2 m.\n- t = 0,125 s.\n=> Tốc độ viên bi: v = s / t = 0,2 / 0,125 = 1,6 m/s.'
          },
          {
            id: 'r-9-2-2-4',
            buocSuPham: 'Bước 4: Kết luận, nhận định Đề mục II',
            cot1Trai: '- GV chuẩn hóa: Cổng quang điện và đồng hồ hiện số là phương tiện hiện đại trong phòng thí nghiệm trường học, giúp đo được cả các chuyển động rất nhanh trong khoảng thời gian rất ngắn.',
            cot2Phai: '* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):\n- Đo tốc độ bằng đồng hồ đo thời gian hiện số và cổng quang điện cho kết quả chính xác cao, loại bỏ hoàn toàn sai số bấm tay của con người.'
          }
        ]
      },

      // HOẠT ĐỘNG 2.3: ĐỀ MỤC III SGK
      {
        id: 'hd-khtn7-bai9-2-3',
        soThuTu: 2,
        tenHoatDong: 'Hoạt động 2.3: Thiết bị bắn tốc độ (Đề mục III SGK KNTT - Trang 51)',
        thoiLuong: '15 phút',
        deMucSGK: 'III. Thiết bị bắn tốc độ (Nguyên tắc hoạt động & Bài toán thực tế Hình 9.4)',
        mucTieu: 'Giải thích được nguyên tắc hoạt động của thiết bị bắn tốc độ trong kiểm tra an toàn giao thông đường bộ (Hình 9.4 SGK); giải bài toán xác định tốc độ ô tô (s = 5m, t = 0,35s) và đối chiếu với tốc độ giới hạn 60 km/h; liên hệ công nghệ định vị GPS; hệ thống hóa toàn bộ bài học qua Sơ đồ tư duy 16:9 phong cách 3D Pixar.',
        noiDung: 'HS nghiên cứu mục III SGK trang 51, quan sát Hình 9.4 (Sơ đồ hoạt động của thiết bị bắn tốc độ đơn giản); làm bài tập tình huống (?) SGK trang 51; thảo luận nhóm phân tích tầm quan trọng của việc kiểm soát tốc độ; quan sát Sơ đồ tư duy 16:9 3D Pixar để khắc sâu kiến thức toàn bài.',
        sanPham: 'Lời giải chuẩn xác bài tập (?) SGK trang 51: v = 14,29 m/s = 51,43 km/h < 60 km/h (không vi phạm); Sơ đồ tư duy 16:9 hoàn chỉnh trong vở học sinh.',
        bangHaiCot: [
          {
            id: 'r-9-2-3-1',
            buocSuPham: 'Bước 1: Chuyển giao nhiệm vụ Đề mục III (Khai thác Hình 9.4 & Bài toán camera bắn tốc độ)',
            hinhAnhSGK: {
              tenHinh: 'Hình 9.4: Sơ đồ hoạt động của thiết bị bắn tốc độ đơn giản (SGK Trang 51)',
              moTa: 'Camera theo dõi ghi biển số và thời gian ô tô chạy qua vạch mốc 1 và vạch mốc 2 cách nhau quãng đường s = 5m.',
              imageUrl: '/sgk-images/khtn-7-hinh-9-4-thiet-bi-ban-toc-do.png',
              cauHoiKhaiThac: [
                '1. Quan sát Hình 9.4: Thiết bị bắn tốc độ đơn giản gồm những bộ phận nào và hoạt động ra sao?',
                '2. Giải bài toán (? SGK Trang 51): Camera ghi được ô tô chạy qua 2 vạch mốc cách nhau s = 5m là t = 0,35s.\n   a) Tốc độ của ô tô bằng bao nhiêu?\n   b) Nếu tốc độ giới hạn cung đường là 60 km/h thì ô tô có vi phạm không?'
              ],
              ghiChuSuPham: 'Lồng ghép giáo dục An toàn giao thông: Tuyên truyền ý thức lái xe đúng tốc độ quy định để bảo vệ tính mạng bản thân và mọi người.'
            },
            cot1Trai: '- GV chiếu Hình 9.4 SGK trang 51 lên màn hình.\n- Phân tích nguyên tắc hoạt động:\n  + Camera chụp ảnh ghi biển số xe và thời gian t1 khi qua Vạch mốc 1.\n  + Chụp ảnh ghi thời gian t2 khi qua Vạch mốc 2.\n  + Máy tính siêu nhỏ trong camera tự tính t = t2 - t1 và lấy s chia t ra tốc độ v.\n  + So sánh tức thì với tốc độ giới hạn cho phép.\n- Giao nhiệm vụ cho các nhóm giải bài tập tình huống (?) SGK trang 51 vào phiếu học tập.',
            cot2Phai: 'III. THIẾT BỊ BẮN TỐC ĐỘ\n1. Nguyên tắc hoạt động (Hình 9.4 SGK Trang 51):\n- Dùng camera theo dõi ghi lại thời gian ô tô chạy qua 2 vạch mốc cách nhau khoảng s (thường từ 5m đến 10m).\n- Máy tính gắn trong camera tự động tính tốc độ v = s / t và đối chiếu với tốc độ giới hạn.\n\n2. Giải bài toán tình huống (? SGK Trang 51):\nCho: s = 5 m; t = 0,35 s; v_gioi_han = 60 km/h.\na) Tốc độ của ô tô là:\n   v = s / t = 5 / 0,35 ≈ 14,29 m/s.\n   Đổi ra km/h: v = 14,29 x 3,6 ≈ 51,43 km/h.\nb) So sánh:\n   Vì 51,43 km/h < 60 km/h nên ô tô này KHÔNG VƯỢT QUÁ tốc độ giới hạn của cung đường.'
          },
          {
            id: 'r-9-2-3-conclude',
            buocSuPham: 'Bước 2: Kết luận, nhận định Đề mục III',
            cot1Trai: '- GV chuẩn hóa nguyên tắc hoạt động của thiết bị bắn tốc độ và công nghệ GPS.\n- Yêu cầu học sinh ghi chép nội dung chốt kiến thức vào vở.',
            cot2Phai: '* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):\n- Thiết bị bắn tốc độ dùng camera và máy tính để đo tự động tốc độ xe qua hai vạch mốc cố định: v = s / t.\n- Người điều khiển phương tiện phải tuân thủ nghiêm ngặt tốc độ quy định để đảm bảo an toàn giao thông đường bộ.'
          }
        ]
      },

      // HOẠT ĐỘNG 3: LUYỆN TẬP
      {
        id: 'hd-khtn7-bai9-3',
        soThuTu: 3,
        tenHoatDong: 'Hoạt động 3: Luyện tập (Hệ thống hóa kiến thức bằng Sơ đồ tư duy 16:9 3D Pixar & Bài tập áp dụng)',
        thoiLuong: '15 phút',
        mucTieu: 'Hệ thống hóa toàn bộ kiến thức bài học bằng Sơ đồ tư duy 16:9 phong cách 3D Pixar; vận dụng thành thạo các bước đo và công thức tính tốc độ để giải bài tập thực tế cự li 60m và bài toán chuyển đổi đơn vị.',
        noiDung: 'HS quan sát Sơ đồ tư duy 16:9 3D Pixar tái hiện 3 nhánh phương pháp đo tốc độ; làm việc độc lập giải Bài tập 1 và Bài tập 2 trong phiếu luyện tập cá nhân.',
        sanPham: 'Sơ đồ tư duy 16:9 hoàn chỉnh trong vở học sinh; Lời giải đúng và đầy đủ trong vở bài tập của học sinh.',
        bangHaiCot: [
          {
            id: 'r-9-3-0-mindmap',
            buocSuPham: 'Bước 1: Hệ thống hóa kiến thức toàn bài bằng Sơ đồ tư duy 16:9 3D Pixar',
            cot1Trai: '- GV trình chiếu SƠ ĐỒ TƯ DUY 16:9 PHONG CÁCH 3D PIXAR tổng kết toàn bộ 3 nội dung trọng tâm của Bài 9: Đo tốc độ bằng đồng hồ bấm giây -> Dùng cổng quang điện và đồng hồ hiện số -> Thiết bị bắn tốc độ & GPS.\n- Tổ chức cho học sinh nhìn vào sơ đồ và lần lượt nhắc lại nguyên tắc, dụng cụ đo và công thức tính.\n- Hướng dẫn học sinh đối chiếu sơ đồ tư duy để làm các bài tập luyện tập.',
            cot2Phai: '* HỆ THỐNG KIẾN THỨC CỐT LÕI (SƠ ĐỒ TƯ DUY 16:9 3D PIXAR):\n• Để đo tốc độ luôn cần đo quãng đường s và thời gian t, tính v = s / t.\n• Trong phòng thực hành: Thường dùng đồng hồ bấm giây (đo 3 lần lấy trung bình) hoặc cổng quang điện kết hợp đồng hồ hiện số.\n• Trong an toàn giao thông: Sử dụng camera và thiết bị bắn tốc độ để kiểm soát tốc độ phương tiện, giảm thiểu tai nạn giao thông.',
                        soDoTuDuy: {
              id: 'sdd-khtn7-bai9-do-toc-do',
              chuDeChinh: 'BÀI 9: ĐO TỐC ĐỘ (KHTN 7)',
              moTaChuDe: 'Hệ thống hóa toàn bộ phương pháp đo tốc độ trong phòng thực hành và kiểm tra an toàn giao thông',
              tiLe: '16:9',
              phongCach: '3D Pixar',
              imageUrl: '/mindmaps/mindmap-khtn7-bai9-do-toc-do.jpg',
              ghiChuKetLuan: 'GV sử dụng Sơ đồ tư duy 16:9 3D Pixar để chốt kiến thức toàn diện cho học sinh trước khi chuyển sang luyện tập.',
              monHoc: 'Khoa học tự nhiên',
              thuatNguChuan: ['Đo tốc độ', 'Đồng hồ bấm giây', 'Cổng quang điện', 'Đồng hồ hiện số', 'Thiết bị bắn tốc độ', 'Tốc kế', 'Bảng 9.1', 'GPS'],
              danhSachNhanh: [
                {
                  id: 'n1',
                  tieuDe: '1. Đo bằng đồng hồ bấm giây',
                  mauSac: '#3b82f6',
                  icon3D: '⏱️',
                  congThuc: 'v = s_tb / t_tb',
                  cacYCon: [
                    'Dụng cụ: Thước đo s + Đồng hồ bấm giây đo t',
                    'Thí nghiệm: Ô tô đồ chơi máng dốc 80cm (Hình 9.2)',
                    'Đo 3 lần lấy giá trị trung bình cộng để giảm sai số',
                    'Điền Bảng 9.1 SGK: s_tb, t_tb và tính v'
                  ]
                },
                {
                  id: 'n2',
                  tieuDe: '2. Đo bằng cổng quang điện',
                  mauSac: '#10b981',
                  icon3D: '⚡',
                  congThuc: 'Chế độ A <-> B',
                  cacYCon: [
                    'Thiết bị: Nam châm, bi sắt, 2 cổng quang, đồng hồ số',
                    'Nguyên tắc: Bi chắn tia sáng tự động đóng/ngắt đồng hồ',
                    'Độ chính xác cao, triệt tiêu sai số phản xạ bấm tay',
                    'Ứng dụng đo chuyển động nhanh trong phòng thí nghiệm'
                  ]
                },
                {
                  id: 'n3',
                  tieuDe: '3. Thiết bị bắn tốc độ',
                  mauSac: '#f59e0b',
                  icon3D: '📷',
                  congThuc: 'v = s / t (Hình 9.4)',
                  cacYCon: [
                    'Camera ghi thời gian qua 2 vạch mốc cách nhau s (5-10m)',
                    'Máy tính tự động tính v và so sánh với tốc độ giới hạn',
                    'Bài toán SGK: s = 5m, t = 0,35s => v = 51,43 km/h < 60 km/h',
                    'Tích hợp ATGT: Xử phạt phương tiện vi phạm tốc độ'
                  ]
                },
                {
                  id: 'n4',
                  tieuDe: '4. Ứng dụng & GPS hiện đại',
                  mauSac: '#ec4899',
                  icon3D: '🛰️',
                  congThuc: 'Định vị toàn cầu',
                  cacYCon: [
                    'Đo cự li 60m môn Giáo dục thể chất',
                    'Đồng hồ thông minh & smartphone có GPS đo tốc độ',
                    'Tốc kế đo trực tiếp trên bảng điều khiển xe',
                    'Thông điệp ATGT: Làm chủ tốc độ - Bảo vệ tính mạng'
                  ]
                }
              ]
            }

          },
          {
            id: 'r-9-3-1',
            buocSuPham: 'Bài tập 1: Tính tốc độ chạy cự li 60m môn Giáo dục thể chất',
            cot1Trai: '- GV giao bài tập: "Bạn Nam thực hiện bài kiểm tra chạy 60m trong môn Thể dục. Thầy giáo bấm đồng hồ đo được thời gian là 9,6 giây.\n  a) Tính tốc độ chạy của bạn Nam ra đơn vị m/s?\n  b) Đổi tốc độ trên ra đơn vị km/h?"\n- Cho HS làm việc cá nhân trong 3 phút.',
            cot2Phai: 'Bài giải Bài tập 1:\na) Tốc độ chạy của bạn Nam là:\n   v = s / t = 60 / 9,6 = 6,25 m/s.\nb) Đổi ra đơn vị km/h:\n   v = 6,25 x 3,6 = 22,5 km/h.\nĐáp số: 6,25 m/s và 22,5 km/h.'
          },
          {
            id: 'r-9-3-2',
            buocSuPham: 'Bài tập 2: Phân tích ưu thế của cổng quang điện so với bấm giây bằng tay',
            cot1Trai: '- GV đặt câu hỏi tự luận: "Tại sao khi đo tốc độ của các vật chuyển động rất nhanh (như viên bi lăn trên dốc cao hoặc giọt nước rơi tự do), người ta bắt buộc phải dùng cổng quang điện và đồng hồ hiện số mà không dùng đồng hồ bấm giây bằng tay?"',
            cot2Phai: 'Bài giải Bài tập 2:\n- Vì thời gian chuyển động của vật rất ngắn (dưới 0,3 giây), trong khi thời gian phản xạ bấm tay của con người đã mất từ 0,1s đến 0,2s, gây ra sai số cực lớn (sai số có thể lên đến 50% - 100%).\n- Cổng quang điện đóng ngắt tự động bằng tia sáng điện tử có thời gian đáp ứng tính bằng phần triệu giây (micro-giây), triệt tiêu hoàn toàn sai số của con người.'
          }
        ]
      },

      // HOẠT ĐỘNG 4: VẬN DỤNG
      {
        id: 'hd-khtn7-bai9-4',
        soThuTu: 4,
        tenHoatDong: 'Hoạt động 4: Vận dụng & Trải nghiệm thực tiễn (Dự án STEM & An toàn giao thông)',
        thoiLuong: '8 phút',
        mucTieu: 'Vận dụng kiến thức bài học để thiết kế phương án đo tốc độ đi bộ của bản thân; nâng cao ý thức chấp hành luật an toàn giao thông.',
        noiDung: 'HS tìm hiểu khung "EM CÓ THỂ" SGK trang 51, lập kế hoạch đo tốc độ chạy 60m của các bạn trong tổ mình bằng thước dây và đồng hồ bấm giây; cam kết tuân thủ tốc độ giao thông.',
        sanPham: 'Bản kế hoạch trải nghiệm đo tốc độ của nhóm và thông điệp tuyên truyền văn hóa giao thông an toàn.',
        bangHaiCot: [
          {
            id: 'r-9-4-1',
            buocSuPham: 'Nhiệm vụ vận dụng & Dặn dò về nhà (Khung EM CÓ THỂ SGK Trang 51)',
            cot1Trai: '- GV giao 2 nhiệm vụ về nhà:\n  1. [DỰ ÁN NHÓM]: Trong tiết Giáo dục thể chất sắp tới, các nhóm hãy dùng thước dây và đồng hồ bấm giây để đo tốc độ chạy 60m của từng thành viên trong tổ mình, lập bảng ghi kết quả và tính tốc độ trung bình.\n  2. [THÔNG ĐIỆP ATGT]: Tìm hiểu và vẽ một áp phích nhỏ tuyên truyền về biển báo tốc độ tối đa cho phép (biển số P.127) tại khu vực cổng trường học.\n- Đọc trước Bài 10: Đồ thị quãng đường - thời gian.',
            cot2Phai: 'III. VẬN DỤNG & NHIỆM VỤ VỀ NHÀ:\n1. Hoàn thành bài tập SGK trang 51 vào vở bài tập.\n2. Tiến hành dự án đo tốc độ chạy cự li ngắn 60m của tổ trong tiết Thể dục.\n3. Thiết kế áp phích tuyên truyền thông điệp "Tuân thủ tốc độ - Bảo vệ cuộc sống" tại khu dân cư và cổng trường.\n4. Đọc trước nội dung Bài 10: Đồ thị quãng đường - thời gian.'
          }
        ]
      }
    ],
    dieuChinhSauBaiDay: 'Giáo viên điều chỉnh thời lượng giữa Hoạt động 2.1 và Hoạt động 2.2 linh hoạt theo tốc độ thực hành của học sinh; khuyến khích các nhóm thao tác tự tin với đồng hồ bấm giây.'
  },
  slideDeck: {
    themeId: 'modern-stem',
    themeConfig: SLIDE_THEMES['modern-stem'],
    slides: [
      {
        id: 's-khtn7-bai9-1',
        slideNumber: 1,
        slideType: 'TITLE_SLIDE',
        title: 'BÀI 9: ĐO TỐC ĐỘ',
        subtitle: 'Khoa học tự nhiên 7 • Sách Kết nối tri thức với cuộc sống (Trang 49 - 51)',
        stageBadge: 'Chương trình GDPT 2018',
        visualLayout: 'Full Center Hero',
        bulletPoints: [
          'Kế hoạch bài dạy chuẩn Công văn 5512/BGDĐT-GDTrH',
          'Đầy đủ thí nghiệm thực hành máng nghiêng & Cổng quang điện',
          'Ứng dụng camera bắn tốc độ & Giáo dục An toàn giao thông'
        ],
        boardContent: 'v = s / t | Đo tốc độ dùng đồng hồ bấm giây & Cổng quang điện',
        aiImagePrompt: 'High-tech modern physics laboratory with ramp experiment, toy car, digital photogate timers, 3d pixar style, 8k resolution',
        animationsAndTransitions: {
          slideTransition: 'Morph',
          elementAnimations: ['Fade In Down title', 'Zoom In badge', 'Fade In Up details']
        },
        speakerNotes: 'Kính chào quý thầy cô và các em. Hôm nay chúng ta cùng thực hành Bài 9: Đo tốc độ.'
      },
      {
        id: 's-khtn7-bai9-2',
        slideNumber: 2,
        slideType: 'OBJECTIVE',
        title: 'MỤC TIÊU BÀI HỌC CỐT LÕI (SGK TRANG 49)',
        subtitle: 'Yêu cầu cần đạt sau khi học xong Bài 9',
        stageBadge: 'Mục Tiêu Cần Đạt',
        visualLayout: '2-Column Split',
        bulletPoints: [
          'Mô tả sơ lược cách đo tốc độ bằng thước và đồng hồ bấm giây trong phòng thực hành.',
          'Mô tả sơ lược cách đo tốc độ bằng cổng quang điện và đồng hồ hiện số ở trường học.',
          'Giải thích được nguyên tắc hoạt động của thiết bị "bắn tốc độ" kiểm tra giao thông.',
          'Rèn luyện kỹ năng thực hành, tính cẩn thận và trung thực trong ghi chép số liệu.'
        ],
        boardContent: 'Mục tiêu: Thước & Bấm giây | Cổng quang điện | Thiết bị bắn tốc độ',
        aiImagePrompt: 'Modern classroom educational goals icons in 3D vibrant glassmorphism style',
        animationsAndTransitions: {
          slideTransition: 'Fade',
          elementAnimations: ['Slide In Left', 'Fade In bullet points']
        },
        speakerNotes: 'Mục tiêu trọng tâm: Nắm vững 2 phương pháp đo trong phòng thí nghiệm và thiết bị bắn tốc độ ngoài thực tế.'
      },
      {
        id: 's-khtn7-bai9-3',
        slideNumber: 3,
        slideType: 'KNOWLEDGE_SPLIT',
        title: 'I. ĐO TỐC ĐỘ DÙNG ĐỒNG HỒ BẤM GIÂY',
        subtitle: 'Dụng cụ, Cách đo & Tốc kế phương tiện giao thông (Hình 9.1)',
        stageBadge: 'Đề Mục I SGK',
        visualLayout: '3-Card Bento Grid',
        bulletPoints: [
          'Dụng cụ: Thước (đo quãng đường s) + Đồng hồ bấm giây (đo thời gian t).',
          'Tốc kế: Dụng cụ gắn trên ô tô, xe máy đo trực tiếp tốc độ tức thời (Hình 9.1 SGK).',
          'Quy trình 6 bước: Đánh dấu vạch xuất phát -> Đích -> Bấm giờ -> Đo 3 lần -> Lập Bảng 9.1 -> Tính v = s / t.',
          'Liên hệ: Cách kiểm tra chạy cự li ngắn 60m trong môn Giáo dục thể chất.'
        ],
        boardContent: 'Đề mục I: Thước đo s | Đồng hồ đo t | Tốc kế (Hình 9.1)',
        aiImagePrompt: 'Speedometer car dashboard glowing blue 3D render and running track 60m',
        animationsAndTransitions: {
          slideTransition: 'Push',
          elementAnimations: ['Zoom In cards', 'Fade In steps']
        },
        speakerNotes: 'Trong phòng thực hành, ta luôn chọn quãng đường s trước, đo thời gian t sau.'
      },
      {
        id: 's-khtn7-bai9-4',
        slideNumber: 4,
        slideType: 'KNOWLEDGE_SPLIT',
        title: 'THỰC HÀNH MÁNG NGHIÊNG & BẢNG 9.1 SGK',
        subtitle: 'Thí nghiệm đo tốc độ ô tô đồ chơi trên tấm gỗ dốc 80cm (Hình 9.2)',
        stageBadge: 'Thực Hành Nhóm',
        visualLayout: '2-Column Split',
        bulletPoints: [
          'Bố trí: Tấm gỗ phẳng 80cm kê sách tạo dốc; vạch xuất phát và vạch đích cách nhau 50-60cm.',
          'Thực hiện 3 lần đo: Đo s1, s2, s3 và t1, t2, t3 để triệt tiêu sai số phản xạ bấm tay.',
          'Xử lý số liệu: s_tb = (s1+s2+s3)/3; t_tb = (t1+t2+t3)/3 => v = s_tb / t_tb.',
          'Hoạt động nhóm 4 vai trò (4 màu mực): Nhóm trưởng, Thư ký, Kỹ thuật viên, Báo cáo viên.'
        ],
        boardContent: 'Bảng 9.1: Lần 1, 2, 3 -> s_tb, t_tb -> v = s_tb / t_tb',
        aiImagePrompt: 'Cute wooden ramp 80cm with red toy car and digital stopwatch, 3d pixar style',
        animationsAndTransitions: {
          slideTransition: 'Slide',
          elementAnimations: ['Fade In table', 'Pop In formula']
        },
        speakerNotes: 'Các nhóm hãy cùng thực hành và điền số liệu vào Bảng 9.1 bằng 4 màu mực.'
      },
      {
        id: 's-khtn7-bai9-5',
        slideNumber: 5,
        slideType: 'KNOWLEDGE_SPLIT',
        title: 'II. CỔNG QUANG ĐIỆN & ĐỒNG HỒ HIỆN SỐ',
        subtitle: 'Thiết bị đo tự động độ chính xác cao trong phòng thí nghiệm (Hình 9.3)',
        stageBadge: 'Đề Mục II SGK',
        visualLayout: '3-Card Bento Grid',
        bulletPoints: [
          'Cấu tạo 6 chi tiết: (1) Nam châm điện, (2) Bi sắt, (3) Cổng quang 1, (4) Cổng quang 2, (5) Công tắc, (6) Đồng hồ hiện số.',
          'Chế độ A <-> B: Đồng hồ tự động bật đếm khi bi qua cổng (3) và tự động dừng khi bi qua cổng (4).',
          'Ưu điểm vượt trội: Đo được các chuyển động rất nhanh trong thời gian tính bằng 1/1000 giây, loại bỏ hoàn toàn sai số con người.'
        ],
        boardContent: 'Đề mục II: 6 chi tiết bộ thí nghiệm Hình 9.3 | Chế độ A <-> B',
        aiImagePrompt: 'Physics photogate apparatus with glowing infrared sensor and digital LED timer',
        animationsAndTransitions: {
          slideTransition: 'Fade',
          elementAnimations: ['Fade In Down apparatus', 'Stagger cards']
        },
        speakerNotes: 'Cổng quang điện giúp đo các chuyển động cực nhanh với độ chính xác đến phần nghìn giây.'
      },
      {
        id: 's-khtn7-bai9-6',
        slideNumber: 6,
        slideType: 'KNOWLEDGE_SPLIT',
        title: 'III. THIẾT BỊ BẮN TỐC ĐỘ GIAO THÔNG',
        subtitle: 'Sơ đồ hoạt động của camera bắn tốc độ & Bài toán Hình 9.4 SGK',
        stageBadge: 'Đề Mục III SGK',
        visualLayout: '2-Column Split',
        bulletPoints: [
          'Nguyên tắc: Camera ghi biển số và thời gian xe chạy qua 2 vạch mốc cách nhau s = 5m -> Máy tính tự tính v = s / t.',
          'Bài toán SGK: s = 5m, t = 0,35s => v = 5 / 0,35 = 14,29 m/s = 51,43 km/h.',
          'Kết luận: v = 51,43 km/h < 60 km/h => Xe KHÔNG vi phạm tốc độ giới hạn của cung đường.',
          'Ý thức ATGT: Chấp hành quy định tốc độ để bảo vệ an toàn tính mạng cho cộng đồng.'
        ],
        boardContent: 'Đề mục III: Camera 2 vạch mốc | v = 5 / 0,35 = 51,43 km/h < 60 km/h',
        aiImagePrompt: 'Highway speed radar camera detecting red sports car, floating UI holographic numbers',
        animationsAndTransitions: {
          slideTransition: 'Wipe',
          elementAnimations: ['Slide In Right', 'Fade In calculations']
        },
        speakerNotes: 'Hình 9.4 là nguyên tắc của hệ thống camera phạt nguội trên các tuyến đường cao tốc.'
      },
      {
        id: 's-khtn7-bai9-7',
        slideNumber: 7,
        slideType: 'SUMMARY',
        title: 'SƠ ĐỒ TƯ DUY 16:9 3D PIXAR - BÀI 9: ĐO TỐC ĐỘ',
        subtitle: 'Tổng kết toàn diện kiến thức cốt lõi Bài 9 theo chuẩn GDPT 2018',
        stageBadge: 'Khắc Sâu Kiến Thức',
        visualLayout: 'Full Center Hero',
        bulletPoints: [
          'Nhánh 1: Đồng hồ bấm giây (Thước + Bấm giây, thí nghiệm máng nghiêng, Bảng 9.1).',
          'Nhánh 2: Cổng quang điện (Đồng hồ hiện số chế độ A <-> B, độ chính xác cao).',
          'Nhánh 3: Thiết bị bắn tốc độ (Camera 2 vạch mốc s = 5m, máy tính tự động tính v).',
          'Nhánh 4: Ứng dụng thực tế (Chạy 60m thể dục, định vị GPS smartphone, văn hóa ATGT).'
        ],
        boardContent: 'Tổng kết: Đồng hồ bấm giây | Cổng quang điện | Súng bắn tốc độ | GPS',
        aiImagePrompt: 'Spectacular 3D Pixar mindmap for physics speed measurement with 4 branches in 16:9 ratio',
        animationsAndTransitions: {
          slideTransition: 'Zoom',
          elementAnimations: ['Pop In Central Mindmap', 'Expand 4 branches']
        },
        speakerNotes: 'Hãy nhìn sơ đồ tư duy để ghi nhớ trọn vẹn 4 nhánh kiến thức của bài 9.'
      },
      {
        id: 's-khtn7-bai9-8',
        slideNumber: 8,
        slideType: 'INTERACTIVE_QUIZ',
        title: 'LUYỆN TẬP & VẬN DỤNG VỀ NHÀ',
        subtitle: 'Khung Em đã học & Em có thể (SGK Trang 51)',
        stageBadge: 'Vận Dụng Sáng Tạo',
        visualLayout: 'Quiz Layout',
        bulletPoints: [
          'Luyện tập: Tính tốc độ bạn Nam chạy 60m hết 9,6s => v = 6,25 m/s = 22,5 km/h.',
          'Dự án thực tế: Dùng thước dây và đồng hồ bấm giây đo tốc độ chạy 60m của các bạn trong tổ.',
          'Thông điệp văn hóa giao thông: Luôn làm chủ tốc độ trên mọi cung đường.',
          'Chuẩn bị tiết sau: Đọc trước Bài 10: Đồ thị quãng đường - thời gian.'
        ],
        boardContent: 'v = 60 / 9,6 = 6,25 m/s | An toàn giao thông là hạnh phúc mọi nhà',
        aiImagePrompt: 'Quiz victory medal and student runner 60m dash celebration in 3d style',
        animationsAndTransitions: {
          slideTransition: 'Cover',
          elementAnimations: ['Slide In Down', 'Bounce question']
        },
        speakerNotes: 'Về nhà hoàn thành bài tập SGK và dự án đo cự li 60m trong giờ Thể dục.'
      }
    ]
  },
  quizGame: [
    {
      id: 'q-khtn7-bai9-1',
      question: 'Để đo tốc độ của một vật chuyển động trong phòng thực hành, người ta bắt buộc phải đo những đại lượng nào?',
      options: [
        'Khối lượng và thời gian chuyển động',
        'Quãng đường đi được và thời gian chuyển động',
        'Quãng đường đi được và lực kéo của vật',
        'Thể tích của vật và thời gian chuyển động'
      ],
      correctIndex: 1,
      explanation: 'Theo SGK KHTN 7 (Trang 49): Để xác định tốc độ chuyển động của một vật, người ta phải đo quãng đường đi được s và thời gian chuyển động t, sau đó áp dụng công thức v = s / t.',
      funFact: 'Trong phòng thực hành, người ta thường chọn trước quãng đường s (đánh dấu vạch xuất phát và vạch đích) rồi đo thời gian t sau!'
    },
    {
      id: 'q-khtn7-bai9-2',
      question: 'Thiết bị nào sau đây được trang bị trên bảng đồng hồ của ô tô, xe máy để đo trực tiếp tốc độ tức thời của phương tiện?',
      options: [
        'Nhiệt kế đo nhiệt độ động cơ',
        'Tốc kế (Speedometer)',
        'Lực kế đo ma sát mặt đường',
        'Áp kế đo áp suất lốp xe'
      ],
      correctIndex: 1,
      explanation: 'Theo SGK KHTN 7 (Trang 49 - Hình 9.1): Dụng cụ dùng để đo tốc độ của các phương tiện giao thông như ô tô, xe máy gọi là tốc kế.',
      funFact: 'Tốc kế hiển thị tốc độ theo đơn vị km/h, giúp tài xế luôn làm chủ tốc độ và không chạy quá giới hạn cho phép.'
    },
    {
      id: 'q-khtn7-bai9-3',
      question: 'Trong thí nghiệm đo tốc độ dùng đồng hồ hiện số và cổng quang điện, đồng hồ cần được chọn ở chế độ nào để đo khoảng thời gian vật đi từ cổng quang 1 đến cổng quang 2?',
      options: [
        'Chế độ đếm xung tần số 9999 Hz',
        'Chế độ A <-> B',
        'Chế độ đo thời gian ngắt A',
        'Chế độ đo thời gian chắn B'
      ],
      correctIndex: 1,
      explanation: 'Theo SGK KHTN 7 (Trang 51 - Hình 9.3): Đồng hồ đo thời gian hiện số được chọn ở chế độ A <-> B để tự động đo khoảng thời gian vật chuyển động từ cổng quang điện thứ nhất đến cổng quang điện thứ hai.',
      funFact: 'Cổng quang điện dùng tia hồng ngoại, triệt tiêu hoàn toàn sai số trễ do phản xạ bấm tay của con người!'
    },
    {
      id: 'q-khtn7-bai9-4',
      question: 'Camera của thiết bị bắn tốc độ ghi nhận một ô tô chạy qua 2 vạch mốc cách nhau 5 m là 0,35 s. Tốc độ của ô tô này bằng bao nhiêu và có vượt quá tốc độ giới hạn 60 km/h không?',
      options: [
        'v ≈ 14,29 m/s (51,43 km/h), KHÔNG vượt quá tốc độ giới hạn',
        'v ≈ 17,5 m/s (63 km/h), CÓ vượt quá tốc độ giới hạn',
        'v ≈ 12 m/s (43,2 km/h), KHÔNG vượt quá tốc độ giới hạn',
        'v ≈ 20 m/s (72 km/h), CÓ vượt quá tốc độ giới hạn'
      ],
      correctIndex: 0,
      explanation: 'Theo bài toán SGK KHTN 7 (Trang 51): v = s / t = 5 / 0,35 ≈ 14,29 m/s. Đổi ra km/h: 14,29 x 3,6 ≈ 51,43 km/h. Vì 51,43 km/h < 60 km/h nên ô tô không vi phạm.',
      funFact: 'Hệ thống camera giám sát trên các tuyến cao tốc Việt Nam tự động chụp ảnh biển số và đo tốc độ với sai số dưới 1 km/h!'
    }
  ],
  aiAnalysisReport: {
    tenBaiDay: 'Bài 9: Đo tốc độ',
    monHoc: 'Khoa học tự nhiên',
    khoiLop: 7,
    boSach: 'Kết nối tri thức với cuộc sống',
    sgkUrl: 'https://taphuan.nxbgd.vn/tap-huan?grade=7',
    tongSoDeMuc: 3,
    danhSachDeMuc: [
      {
        deMuc: 'I. Đo tốc độ dùng đồng hồ bấm giây',
        tenHoatDong: 'Hoạt động 2.1: Đo tốc độ dùng đồng hồ bấm giây (Đề mục I SGK Trang 49 - 50)',
        mucTieu: 'Mô tả được cách đo tốc độ bằng đồng hồ bấm giây trong thực hành; đo 3 lần tính giá trị trung bình; liên hệ môn Thể chất (chạy 60m).'
      },
      {
        deMuc: 'II. Dùng đồng hồ đo thời gian hiện số và cổng quang điện trong việc đo tốc độ',
        tenHoatDong: 'Hoạt động 2.2: Dùng đồng hồ đo thời gian hiện số và cổng quang điện (Đề mục II SGK Trang 50 - 51)',
        mucTieu: 'Mô tả cấu tạo 6 bộ phận của bộ thí nghiệm Hình 9.3; chế độ A <-> B; tính tốc độ viên bi sắt v = 1,6 m/s.'
      },
      {
        deMuc: 'III. Thiết bị bắn tốc độ',
        tenHoatDong: 'Hoạt động 2.3: Thiết bị bắn tốc độ & Sơ đồ tư duy 16:9 3D Pixar (Đề mục III SGK Trang 51)',
        mucTieu: 'Giải thích nguyên tắc hoạt động thiết bị bắn tốc độ; giải bài toán ô tô (s = 5m, t = 0,35s -> v = 51,43 km/h < 60 km/h); Sơ đồ tư duy 16:9 3D Pixar.'
      }
    ],
    tienTrinhHoatDong: [
      'Hoạt động 1: Mở đầu / Khởi động (Tình huống xác định tốc độ mở đầu SGK)',
      'Hoạt động 2.1: Đo tốc độ dùng đồng hồ bấm giây (Đề mục I SGK)',
      'Hoạt động 2.2: Dùng đồng hồ đo thời gian hiện số và cổng quang điện (Đề mục II SGK)',
      'Hoạt động 2.3: Thiết bị bắn tốc độ & Sơ đồ tư duy 16:9 3D Pixar (Đề mục III SGK)',
      'Hoạt động 3: Luyện tập (Giải bài tập chạy 60m và tính ưu việt của cổng quang)',
      'Hoạt động 4: Vận dụng (Lồng ghép An toàn giao thông & Dự án STEM mini)'
    ],
    phanTichSuPham: 'Bài học thuộc Chủ đề 3 (Tốc độ - Phần Vật lí). Tuân thủ 100% nội dung 3 trang SGK (Trang 49 - 51). Chia Hoạt động 2 thành 3 hoạt động độc lập tương ứng với 3 đề mục I, II, III theo Công văn 5512/BGDĐT-GDTrH.'
  }
};
