import { CompleteLessonPlan } from '../types';
import { SLIDE_THEMES } from './themes';
import { HOAT_DONG_NHOM_THCS } from './activeGroupActivities';
import { generateInfographicPrompts } from '../utils/infographicPrompts';

const metaKhtn7 = {
  capHoc: 'THCS' as const,
  congVan: '5512/BGDĐT-GDTrH' as const,
  khoiLop: 7,
  boSach: 'Kết nối tri thức với cuộc sống' as const,
  monHoc: 'Khoa học tự nhiên',
  tenBaiDay: 'BÀI 8: TỐC ĐỘ CHUYỂN ĐỘNG',
  soTiet: '2 tiết',
  tietTheoPPCT: 'Tiết 28 - 29',
  thoiLuong: '90 phút',
  siSoLop: '40 học sinh (Chia 8 nhóm, mỗi nhóm 5 em)',
  dacDiemHocSinh: 'Có một số em thụ động, ngại tính toán, thường phụ thuộc vào nhóm trưởng khi xử lý số liệu',
  tuanThucHien: 'Tuần 7 đến 8',
  truong: 'Trường THCS Chu Văn An',
  toChuyenMon: 'Tổ Khoa học tự nhiên',
  giaoVien: '',
  ngayThucHien: 'Năm học 2026 - 2027',
  tichHop: {
    nangLucSo: true,
    stem: true,
    anToanGiaoThong: true,
    kyNangSong: true,
    baoVeMoiTruong: false,
    quocPhongAnNinh: true,
    dinhDuongSucKhoe: false
  }
};

export const SAMPLE_KHTN_7_TOC_DO: CompleteLessonPlan = {
  giaoAn: {
    metadata: metaKhtn7,
    mucTieu: {
      kienThuc: [
        'Nêu được ý nghĩa vật lí của tốc độ: là đại lượng đặc trưng cho sự chuyển động nhanh hay chậm của vật.',
        'Lập được công thức tính tốc độ: v = s / t, nêu rõ tên và đơn vị đo của từng đại lượng (s là quãng đường, t là thời gian, v là tốc độ).',
        'Xác định được đơn vị đo tốc độ trong hệ SI là mét trên giây (m/s) và đơn vị thông dụng là kilômét trên giờ (km/h); vận dụng thành thạo quy tắc chuyển đổi: 1 m/s = 3,6 km/h.',
        'Mô tả được sơ lược nguyên lý hoạt động của các thiết bị đo tốc độ thông dụng: Tốc kế trên bảng điều khiển xe và thiết bị "bắn tốc độ" kiểm tra an toàn giao thông của Cảnh sát giao thông.'
      ],
      nangLucDacThu: [
        'Nhận thức khoa học tự nhiên: Nhận biết, phân tích khái niệm tốc độ và phân biệt tốc độ tức thời trên tốc kế với tốc độ trung bình.',
        'Tìm hiểu tự nhiên: Phân tích số liệu thực nghiệm Bảng 8.1 SGK (chạy cự li 60 m của 3 bạn học sinh) để tự rút ra quy luật so sánh mức độ nhanh chậm.',
        'Vận dụng kiến thức, kĩ năng đã học: Tính toán tốc độ của các phương tiện quen thuộc (xe đạp, xe máy, người đi bộ); giải quyết bài toán giao thông thực tiễn về biển báo tốc độ.'
      ],
      nangLucChung: {
        tuChuTuHoc: [
          'Chủ động nghiên cứu SGK mục I, II, III, IV, quan sát Hình 8.1, 8.2, 8.3 và hoàn thành các câu hỏi trong phiếu học tập cá nhân.'
        ],
        giaoTiepHopTac: [
          'Làm việc nhóm 4 vai trò (Nhóm trưởng, Thư ký, Kỹ thuật viên, Báo cáo viên) với quy tắc 4 màu mực chống thụ động, phân công công việc công bằng và phản biện tích cực.'
        ],
        giaiQuyetVanDe: [
          'Đề xuất các biện pháp cảnh báo và kiểm soát tốc độ an toàn cho người điều khiển phương tiện khi đi qua đoạn đường trường học và khu dân cư.'
        ]
      },
      nangLucSo: [
        {
          maChiBao: '1.1.TC1b',
          tenLinhVuc: 'Duyệt, tìm kiếm và lọc dữ liệu số',
          bieuHien: 'Tự thực hiện tìm kiếm, tra cứu bảng số liệu tốc độ các phương tiện giao thông hiện đại và kỷ lục tốc độ thế giới trên Internet theo quy trình chuẩn.'
        },
        {
          maChiBao: '3.1.TC1a',
          tenLinhVuc: 'Phát triển nội dung số',
          bieuHien: 'Thiết kế Infographic / Slide tóm tắt công thức v = s/t và sơ đồ quy đổi đơn vị tốc độ bằng PowerPoint hoặc công cụ đồ họa số.'
        },
        {
          maChiBao: '5.2.TC1a',
          tenLinhVuc: 'Xác định nhu cầu và giải pháp công nghệ',
          bieuHien: 'Sử dụng phần mềm bảng tính mô phỏng số hoặc GeoGebra để biểu diễn mối tương quan giữa quãng đường, thời gian và tốc độ chuyển động.'
        }
      ],
      phamChat: {
        yeuNuoc: [
          'Tự hào về sự phát triển của hệ thống hạ tầng giao thông đường bộ cao tốc và đường sắt tốc độ cao của Việt Nam.'
        ],
        nhanAi: [
          'Tôn trọng, lắng nghe ý kiến đóng góp của bạn cùng nhóm và hỗ trợ các bạn còn lúng túng trong thao tác đổi đơn vị đo.'
        ],
        chamChi: [
          'Tích cực tham gia thảo luận nhóm, chủ động hoàn thành các bài tập tính toán tốc độ trong phiếu học tập.'
        ],
        trungThuc: [
          'Ghi chép trung thực số liệu đo đạc thực nghiệm từ Bảng 8.1 SGK, không sao chép máy móc kết quả của bạn.'
        ],
        trachNhiem: [
          'Có ý thức chấp hành nghiêm chỉnh Luật giao thông đường bộ, tuyệt đối không phóng nhanh vượt ẩu và nhắc nhở người thân tuân thủ biển báo tốc độ.'
        ]
      },
      tichHopMoRong: [
        '💻 Năng lực số (Theo CV 3456/BGDĐT-GDPT - Bậc TC1): Mã 1.1.TC1b, 3.1.TC1a, 5.2.TC1a.',
        '🔬 Giáo dục STEM: Chế tạo xe thế năng chạy dốc và đo tốc độ bằng thước đo + đồng hồ bấm giây.',
        '🚦 Lồng ghép An toàn giao thông: Phân tích ý nghĩa biển báo hạn chế tốc độ tối đa (Biển P.127: 50 km/h, 60 km/h) và thiết bị bắn tốc độ CSGT.',
        '🛡️ Bảo vệ an ninh quốc phòng (TT 08/2024/TT-BGDĐT): Bồi dưỡng nhận thức về tốc độ phản ứng cơ động của các lực lượng vũ trang và tàu cảnh sát biển trong bảo vệ an ninh lãnh hải Tổ quốc.'
      ]
    },
    thietBiDayHoc: {
      giaoVien: [
        'Máy chiếu (projector), máy tính có kết nối Internet để tra cứu SGK điện tử NXBGD.',
        'Bài giảng điện tử PowerPoint chuyên đề "Bài 8: Tốc độ chuyển động" phong cách Modern STEM.',
        'Học liệu số trực quan: Video clip cuộc thi chạy 60 m Olympic, clip phóng sự CSGT dùng thiết bị bắn tốc độ.',
        'Tranh ảnh phóng to bám sát SGK Kết nối tri thức: Hình 8.1 (Bảng kết quả chạy 60 m), Hình 8.2 (Tốc kế xe máy/ô tô), Hình 8.3 (Thiết bị bắn tốc độ).',
        'Bộ phiếu học tập in sẵn (Phiếu số 1: Khám phá Bảng 8.1; Phiếu số 2: Luyện tập công thức; Phiếu số 3: Tình huống ATGT).'
      ],
      hocSinh: [
        'Sách giáo khoa Khoa học tự nhiên 7 (Bộ sách Kết nối tri thức với cuộc sống - NXB Giáo dục Việt Nam).',
        'Vở ghi bài, máy tính bỏ túi hoặc điện thoại thông minh (nếu được GV cho phép để tra cứu dữ liệu số).',
        'Bút viết 4 màu mực (Đỏ, Xanh dương, Xanh lá, Đen/Tím) phục vụ hoạt động nhóm 4 vai trò chống thụ động.',
        'Giấy A3 và bút dạ viết bảng nhóm.'
      ]
    },
    hoatDongNhomTichCuc: {
      ...HOAT_DONG_NHOM_THCS,
      tenHoatDong: 'Dự án khám phá: Bảng chạy 60m SGK & Thiết bị bắn tốc độ ATGT (4 vai trò - 4 màu mực)',
      phieuGiaoNhiemVu: {
        tieuDe: 'PHIẾU HỌC TẬP NHÓM: BÀI 8 - TỐC ĐỘ CHUYỂN ĐỘNG (KHTN 7 KNTT)',
        thongTinNhom: 'Nhóm: ........ Lớp: 7...... | 4 Màu mực: Nhóm trưởng (Đỏ), Thư ký (Xanh dương), Kỹ thuật viên (Xanh lá), Báo cáo viên (Tím/Đen)',
        cauHoiNhiemVu: [
          'Nhiệm vụ 1 (Mực Đỏ & Xanh dương): Hoàn thành Bảng 8.1 SGK (tính quãng đường chạy trong 1s của bạn A, B, C). Ai chạy nhanh nhất và vì sao?',
          'Nhiệm vụ 2 (Mực Xanh lá): Viết công thức tính tốc độ v = s/t. Suy ra công thức tính s và t? Đổi 54 km/h sang m/s?',
          'Nhiệm vụ 3 (Mực Tím): Quan sát Hình 8.2 & 8.3 SGK: Thiết bị bắn tốc độ phát hiện ô tô chạy 68 km/h trên đoạn đường có biển báo 50 km/h. Xe này có vi phạm không? Nêu biện pháp phòng ngừa tai nạn.'
        ],
        phanKhaiBaoDongGop: [
          'Nhóm trưởng (Đỏ): Điều phối, phân công và kiểm soát tiến độ làm việc của nhóm.',
          'Thư ký (Xanh dương): Ghi nhận toàn bộ phép tính và đáp án vào phiếu nhóm.',
          'Kỹ thuật viên (Xanh lá): Kiểm tra phép tính trên máy tính và thao tác chuyển đổi đơn vị đo.',
          'Báo cáo viên (Tím/Đen): Trình bày trước lớp và trả lời chất vấn của các nhóm bạn.'
        ]
      },
      promptInfographic: generateInfographicPrompts(
        metaKhtn7,
        [
          'Nhiệm vụ 1: Hoàn thành Bảng 8.1 SGK chạy cự li 60m và xác định bạn chạy nhanh nhất.',
          'Nhiệm vụ 2: Lập công thức v = s/t và quy đổi đơn vị 1 m/s = 3,6 km/h.',
          'Nhiệm vụ 3: Phân tích Hình 8.3 thiết bị bắn tốc độ CSGT và liên hệ an toàn giao thông.'
        ]
      )
    },
    tienTrinhDayHoc: [
      {
        id: 'hd-khtn7-1',
        soThuTu: 1,
        tenHoatDong: 'Hoạt động 1: Xác định vấn đề / Nhiệm vụ học tập (Khởi động lôi cuốn)',
        thoiLuong: '7 phút',
        mucTieu: 'Tạo mâu thuẫn nhận thức về cách so sánh mức độ chuyển động nhanh chậm của các vật trong thực tiễn, kích hoạt hứng thú tìm hiểu về khái niệm tốc độ.',
        noiDung: 'HS theo dõi đoạn video thi chạy cự li 60 m, quan sát hai bạn học sinh về đích ở thời điểm khác nhau và thảo luận câu hỏi khởi động của GV.',
        sanPham: 'Câu trả lời của học sinh: Nhận diện rằng để so sánh nhanh hay chậm ta phải xét cả quãng đường đi được và thời gian đi hết quãng đường đó.',
        bangHaiCot: [
          {
            id: 'r-khtn7-1-1',
            buocSuPham: 'Bước 1: Chuyển giao nhiệm vụ (Khởi động)',
            cot1Trai: '- GV trình chiếu video ngắn (30 giây) cuộc thi chạy điền kinh 60 m của trường.\n- GV nêu câu hỏi tình huống:\n  + "Trong một cuộc thi chạy, làm thế nào để biết ai chạy nhanh hơn, ai chạy chậm hơn?"\n  + "Nếu hai bạn cùng chạy quãng đường 60m thì căn cứ vào đâu? Nếu quãng đường chạy khác nhau thì so sánh như thế nào?"\n- [TÍCH HỢP NĂNG LỰC SỐ - Mã 1.1.TC1b]: GV chiếu dữ liệu bấm giờ số trên màn hình tương tác.\n- Phát phiếu học tập khởi động cho các nhóm.',
            cot2Phai: '1. Tình huống khởi động:\n- Theo dõi tình huống cuộc thi chạy trên màn chiếu.\n- Các dự đoán ban đầu của học sinh:\n  + Nếu cùng chạy một quãng đường: Ai chạy hết ít thời gian hơn thì người đó chạy nhanh hơn.\n  + Nếu quãng đường khác nhau: Phải tính xem trong cùng 1 giây ai chạy được quãng đường xa hơn.\n2. Vấn đề cần giải quyết:\n- Cần tìm một đại lượng khoa học đặc trưng cho sự nhanh, chậm của chuyển động gọi là TỐC ĐỘ.'
          },
          {
            id: 'r-khtn7-1-2',
            buocSuPham: 'Bước 2: Thực hiện nhiệm vụ',
            cot1Trai: '- GV quan sát các nhóm trao đổi cặp đôi nhanh trong 2 phút.\n- Hướng dẫn gợi ý học sinh chú ý đến hai yếu tố then chốt: Quãng đường (s) và Thời gian (t).',
            cot2Phai: '- Học sinh thảo luận cặp đôi sôi nổi, ghi lại ý kiến vào vở nháp.'
          },
          {
            id: 'r-khtn7-1-3',
            buocSuPham: 'Bước 3: Báo cáo, thảo luận',
            cot1Trai: '- GV mời đại diện 2 học sinh phát biểu quan điểm.\n- Cho các bạn khác nhận xét, bổ sung.',
            cot2Phai: '- Đại diện HS phát biểu: "Em thấy cần so sánh quãng đường đi được trong cùng 1 giây để biết chính xác ai nhanh hơn".'
          },
          {
            id: 'r-khtn7-1-4',
            buocSuPham: 'Bước 4: Kết luận, nhận định',
            cot1Trai: '- GV biểu dương tinh thần khám phá của HS và dẫn dắt vào bài:\n  "Để xác định chính xác mức độ nhanh hay chậm của bất kỳ chuyển động nào trong đời sống, vật lí dùng đại lượng Tốc độ. Hôm nay chúng ta cùng khám phá Bài 8: Tốc độ chuyển động".',
            cot2Phai: '- Học sinh ghi tên bài học mới vào vở: "BÀI 8: TỐC ĐỘ CHUYỂN ĐỘNG".'
          }
        ]
      },
      {
        id: 'hd-khtn7-2-1',
        soThuTu: 2,
        tenHoatDong: 'Hoạt động 2.1: Khái niệm tốc độ chuyển động (Đề mục I SGK KNTT - Trang 45)',
        thoiLuong: '12 phút',
        deMucSGK: 'I. Khái niệm tốc độ chuyển động',
        mucTieu: 'Nêu được ý nghĩa vật lí của tốc độ là đại lượng đặc trưng cho sự chuyển động nhanh hay chậm của vật. Biết cách so sánh mức độ nhanh chậm từ quãng đường và thời gian (Bảng 8.1 SGK).',
        noiDung: 'HS nghiên cứu Bảng 8.1 SGK KHTN 7 trang 45; hoạt động nhóm 4 vai trò (4 màu mực) tính toán quãng đường đi trong 1s của 3 bạn học sinh A, B, C; rút ra nhận xét đại lượng đặc trưng cho sự nhanh chậm.',
        sanPham: 'Bảng số liệu 8.1 SGK được điền hoàn chỉnh vào phiếu nhóm; định nghĩa tốc độ chuyển động và kết luận bạn C chạy nhanh nhất được ghi vào vở.',
        bangHaiCot: [
          {
            id: 'r-khtn7-2-1',
            buocSuPham: '1. Chuyển giao nhiệm vụ (Khám phá Bảng 8.1 SGK)',
            hinhAnhSGK: {
              tenHinh: 'Hình 8.1: Bảng kết quả chạy cự li 60 m của học sinh (SGK KHTN 7 KNTT - Trang 45)',
              moTa: 'Bảng số liệu ghi lại quãng đường s = 60m, thời gian t của 3 bạn học sinh A, B, C và hàng tính quãng đường đi trong 1s.',
              // Chỉ sử dụng hình ảnh thực tế từ SGK scan
              imageUrl: undefined,
              cauHoiKhaiThac: [
                '1. Quan sát Bảng 8.1 SGK: Bạn A, B, C cùng chạy quãng đường bao nhiêu mét?',
                '2. Thời gian chạy của mỗi bạn là bao nhiêu? Hãy tính quãng đường mỗi bạn đi được trong 1 giây?',
                '3. So sánh quãng đường đi trong 1s của 3 bạn và rút ra kết luận ai chạy nhanh nhất?'
              ],
              ghiChuSuPham: 'Lấy học sinh làm trung tâm: Cho học sinh tự thao tác tính phép chia s/t trước khi giáo viên đưa ra định nghĩa.'
            },
            cot1Trai: '- GV yêu cầu HS mở SGK KHTN 7 trang 45, quan sát kỹ Hình 8.1: Bảng kết quả chạy cự li 60 m của học sinh.\n- [HOẠT ĐỘNG NHÓM 4 VAI TRÒ - 4 MÀU MỰC]:\n  + Nhóm trưởng (Mực Đỏ): Phân công bạn tính toán từng cột.\n  + Thư ký (Mực Xanh dương): Điền kết quả vào Bảng 8.1 trong phiếu nhóm.\n  + Kỹ thuật viên (Mực Xanh lá): Dùng máy tính kiểm tra phép chia 60/10; 60/12; 60/9.6.\n  + Báo cáo viên (Mực Tím): Chuẩn bị phần trả lời ai chạy nhanh nhất.\n- Nêu câu hỏi định hướng:\n  + "Thương số s/t thể hiện điều gì?"\n  + "Từ kết quả trên, em hãy tự định nghĩa tốc độ là gì?"\n- [TÍCH HỢP NĂNG LỰC SỐ - Mã 3.1.TC1a]: GV khuyến khích học sinh biểu diễn bảng số liệu trên phần mềm trình chiếu số.',
            cot2Phai: 'I. KHÁI NIỆM TỐC ĐỘ CHUYỂN ĐỘNG\n1. Phân tích Bảng 8.1 SGK (Trang 45):\n- Quãng đường chạy chung: s = 60 m.\n- Kết quả tính toán quãng đường đi trong 1 giây:\n  + Bạn A: 60 : 10 = 6,00 (m/s)  -> Hạng 2\n  + Bạn B: 60 : 12 = 5,00 (m/s)  -> Hạng 3\n  + Bạn C: 60 : 9,6 = 6,25 (m/s) -> Hạng 1 (Nhanh nhất)\n\n2. Kết luận khoa học (Ghi vở):\n- Tốc độ là đại lượng cho biết mức độ nhanh hay chậm của chuyển động.\n- Tốc độ được xác định bằng quãng đường đi được trong một đơn vị thời gian:\n  Tốc độ = Quãng đường đi được / Thời gian đi hết quãng đường đó'
          },
          {
            id: 'r-khtn7-2-1-steps',
            buocSuPham: '2. Thực hiện nhiệm vụ & Báo cáo thảo luận',
            cot1Trai: '- GV quan sát, bao quát các nhóm học sinh thảo luận cặp đôi và nhóm 4 vai trò trong 4 phút.\n- Kịp thời gợi ý cho các nhóm còn lúng túng.\n- Mời đại diện 2 nhóm báo cáo kết quả Bảng 8.1 và trả lời ai chạy nhanh nhất.',
            cot2Phai: '- HS thảo luận tích cực, ghi nhận kết quả bằng 4 màu mực vào phiếu nhóm.\n- Đại diện nhóm báo cáo: Bạn C chạy mất ít thời gian nhất (9,6s) và có quãng đường đi trong 1s lớn nhất (6,25 m) nên bạn C chạy nhanh nhất.'
          },
          {
            id: 'r-khtn7-2-1-conclude',
            buocSuPham: '3. Kết luận, nhận định Đề mục I',
            cot1Trai: '- GV chuẩn hóa kiến thức trên bảng lớp, chốt lại định nghĩa tốc độ.\n- Yêu cầu cả lớp ghi nhớ khái niệm tốc độ vào vở.',
            cot2Phai: '* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):\n- Tốc độ là đại lượng cho biết mức độ nhanh hay chậm của chuyển động.\n- Tốc độ được xác định bằng quãng đường đi được trong một đơn vị thời gian: v = s / t.'
          }
        ]
      },
      {
        id: 'hd-khtn7-2-2',
        soThuTu: 2,
        tenHoatDong: 'Hoạt động 2.2: Công thức tính tốc độ (Đề mục II SGK KNTT - Trang 46)',
        thoiLuong: '10 phút',
        deMucSGK: 'II. Công thức tính tốc độ',
        mucTieu: 'Lập được công thức tính tốc độ: v = s / t; giải thích được ý nghĩa và đơn vị của từng đại lượng; biến đổi thành thạo để suy ra công thức tính s = v . t và t = s / v; giải bài toán ví dụ trong SGK.',
        noiDung: 'HS nghiên cứu mục II SGK trang 46, phân tích sơ đồ tam giác liên hệ giữa 3 đại lượng; thực hành giải bài toán ví dụ người đi xe đạp đi 12 km trong 0,8 h.',
        sanPham: 'Công thức tổng quát v = s / t, các công thức suy ra và lời giải bài toán ví dụ tính ra v = 15 km/h được ghi chép chuẩn xác trong vở.',
        bangHaiCot: [
          {
            id: 'r-khtn7-2-2',
            buocSuPham: '1. Chuyển giao & Thực hiện nhiệm vụ Đề mục II',
            hinhAnhSGK: {
              tenHinh: 'Sơ đồ tam giác công thức: v = s / t | s = v . t | t = s / v',
              moTa: 'Tam giác liên hệ giữa 3 đại lượng: s (ở trên), v (ở dưới trái), t (ở dưới phải) giúp học sinh biến đổi công thức dễ dàng.',
              imageUrl: undefined,
              cauHoiKhaiThac: [
                '1. Quan sát sơ đồ công thức: Muốn tính v ta che v lại thì được biểu thức nào?',
                '2. Muốn tính s hoặc t ta biến đổi như thế nào từ công thức v = s / t?',
                '3. Áp dụng tính tốc độ của người đi xe đạp trong bài toán ví dụ SGK trang 46?'
              ],
              ghiChuSuPham: 'Kỹ thuật tam giác công thức giúp học sinh không bao giờ bị nhầm lẫn khi nhân chia đại lượng.'
            },
            cot1Trai: '- GV yêu cầu HS đọc mục II SGK trang 46.\n- Đặt câu hỏi kích thích tư duy: "Nếu gọi quãng đường là s, thời gian là t, tốc độ là v thì công thức là gì?"\n- Hướng dẫn học sinh vẽ sơ đồ tam giác liên hệ giữa 3 đại lượng: v = s / t.\n- Yêu cầu HS giải bài toán ví dụ trong SGK: "Một người đi xe đạp đi quãng đường 12 km hết 0,8 h. Tính tốc độ của người đó?"\n- GV đi vòng quanh lớp hỗ trợ học sinh.',
            cot2Phai: 'II. CÔNG THỨC TÍNH TỐC ĐỘ\n1. Công thức tổng quát:\n        v = s / t\nTrong đó:\n  - s: Quãng đường đi được (đo bằng mét: m, hoặc kilômét: km)\n  - t: Thời gian đi hết quãng đường (đo bằng giây: s, hoặc giờ: h)\n  - v: Tốc độ của chuyển động\n\n2. Các công thức suy ra (Tam giác công thức):\n  - Muốn tính quãng đường: s = v . t\n  - Muốn tính thời gian:    t = s / v\n\n* Ví dụ thực hành SGK:\nMột người đi xe đạp đi quãng đường s = 12 km hết thời gian t = 0,8 h.\nTốc độ của người đi xe đạp là:\n  v = s / t = 12 / 0,8 = 15 (km/h).'
          },
          {
            id: 'r-khtn7-2-2-conclude',
            buocSuPham: '2. Báo cáo & Kết luận Đề mục II',
            cot1Trai: '- Mời 1 HS lên bảng trình bày lời giải bài toán ví dụ.\n- Nhận xét và chốt lại các bước giải bài toán vật lý: Tóm tắt -> Công thức -> Thay số & Đơn vị.',
            cot2Phai: '* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):\n- Công thức tính tốc độ: v = s / t\n- Trong đó: s là quãng đường đi được (m, km); t là thời gian (s, h); v là tốc độ (m/s, km/h).\n- Các công thức suy ra: s = v . t ; t = s / v.'
          }
        ]
      },
      {
        id: 'hd-khtn7-2-3',
        soThuTu: 2,
        tenHoatDong: 'Hoạt động 2.3: Đơn vị đo tốc độ & Quy tắc chuyển đổi (Đề mục III SGK KNTT - Trang 47)',
        thoiLuong: '10 phút',
        deMucSGK: 'III. Đơn vị đo tốc độ',
        mucTieu: 'Xác định đơn vị đo tốc độ trong hệ đo lường chính thức (SI) là mét trên giây (m/s) và đơn vị thông dụng là kilômét trên giờ (km/h); chuyển đổi thành thạo giữa hai đơn vị (1 m/s = 3,6 km/h); nhận biết tốc độ các vật thể trong tự nhiên và kỹ thuật.',
        noiDung: 'HS đọc mục III SGK trang 47, quan sát Bảng tốc độ của một số vật thể; thực hiện phép biến đổi toán học 1 km/h = 1000m / 3600s = 1 / 3,6 m/s; liên hệ quy định tốc độ giao thông.',
        sanPham: 'Quy tắc chuyển đổi đơn vị (1 m/s = 3,6 km/h, 1 km/h ≈ 0,28 m/s); các phép đổi đơn vị ví dụ (36 km/h = 10 m/s, 54 km/h = 15 m/s) trong vở; bảng so sánh tốc độ các vật thể.',
        bangHaiCot: [
          {
            id: 'r-khtn7-2-3',
            buocSuPham: '1. Chuyển giao & Khám phá Đề mục III (Đơn vị đo & Bảng tốc độ SGK)',
            hinhAnhSGK: {
              tenHinh: 'Bảng tốc độ của một số vật thể trong tự nhiên & kỹ thuật (SGK KHTN 7 KNTT - Trang 47)',
              moTa: 'Bảng tổng hợp tốc độ các chuyển động từ con ốc sên, người đi bộ, xe máy, ô tô đến tốc độ âm thanh và ánh sáng.',
              imageUrl: undefined,
              cauHoiKhaiThac: [
                '1. Quan sát Bảng số liệu: Đơn vị đo tốc độ thường dùng là gì?',
                '2. Hãy biến đổi: 1 km = 1000m, 1 h = 3600s để suy ra mối quan hệ giữa 1 km/h và 1 m/s?',
                '3. Hãy đổi tốc độ của xe máy 40 km/h sang đơn vị m/s?'
              ],
              ghiChuSuPham: 'Giúp HS ghi nhớ quy tắc chuyển đổi nhanh: Từ m/s ra km/h thì nhân 3,6; từ km/h ra m/s thì chia 3,6.'
            },
            cot1Trai: '- GV hướng dẫn HS phân tích đơn vị đo tốc độ phụ thuộc vào đơn vị chiều dài và thời gian.\n- Hướng dẫn HS thực hiện phép biến đổi toán học:\n  1 km/h = 1000m / 3600s = 1 / 3,6 m/s ≈ 0,28 m/s.\n  Ngược lại: 1 m/s = 3,6 km/h.\n- Chiếu Bảng tốc độ các vật thể trong tự nhiên lên màn hình lớn.\n- [TÍCH HỢP AN TOÀN GIAO THÔNG]: Đặt câu hỏi: "Khi tham gia giao thông trên đường đô thị, biển báo quy định 50 km/h tương đương mỗi giây xe đi được bao nhiêu mét? Quãng đường đó có nguy hiểm khi phanh gấp không?"',
            cot2Phai: 'III. ĐƠN VỊ ĐO TỐC ĐỘ\n1. Đơn vị hợp pháp trong hệ SI:\n- Đơn vị chính thức: mét trên giây (m/s hoặc m.s^-1).\n- Đơn vị thông dụng khác: kilômét trên giờ (km/h).\n\n2. Mối quan hệ và quy tắc chuyển đổi:\n  1 m/s = 3,6 km/h  <=>  1 km/h = 1 / 3,6 m/s ≈ 0,28 m/s\n\n* Bảng tốc độ một số chuyển động (SGK Trang 47):\n  - Con ốc sên bò:     0,0014 m/s (0,005 km/h)\n  - Người đi bộ:       1,5 m/s (5,4 km/h)\n  - Xe máy lưu thông:  11,1 m/s (40 km/h)\n  - Tốc độ âm thanh:   340 m/s (1 224 km/h)\n  - Tốc độ ánh sáng:   300.000.000 m/s (3.10^8 m/s)\n\n[Ý THỨC ATGT]: Chạy 50 km/h tức là mỗi giây xe lao đi gần 14 mét, do đó cần giữ khoảng cách an toàn tối thiểu 35 mét!'
          },
          {
            id: 'r-khtn7-2-3-conclude',
            buocSuPham: '2. Luyện tập nhanh quy đổi đơn vị Đề mục III',
            cot1Trai: '- Cho học sinh làm nhanh 2 phép đổi vào bảng con / vở nháp:\n  + 36 km/h = ... m/s?\n  + 15 m/s = ... km/h?\n- Gọi 2 học sinh đọc nhanh kết quả và giải thích cách làm.',
            cot2Phai: '* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):\n- Đơn vị đo tốc độ trong hệ SI là mét trên giây (m/s) và kilômét trên giờ (km/h).\n- Quy tắc đổi đơn vị: 1 m/s = 3,6 km/h (Từ m/s sang km/h nhân 3,6; ngược lại chia 3,6).'
          }
        ]
      },
      {
        id: 'hd-khtn7-2-4',
        soThuTu: 2,
        tenHoatDong: 'Hoạt động 2.4: Thiết bị đo tốc độ (Đề mục IV SGK KNTT - Trang 48)',
        thoiLuong: '13 phút',
        deMucSGK: 'IV. Thiết bị đo tốc độ',
        mucTieu: 'Mô tả được sơ lược nguyên lý hoạt động và công dụng của các thiết bị đo tốc độ thông dụng: Tốc kế trên phương tiện và thiết bị bắn tốc độ CSGT; lồng ghép ý thức văn hóa an toàn giao thông; hệ thống hóa toàn bộ kiến thức bài học qua Sơ đồ tư duy 16:9 3D Pixar.',
        noiDung: 'Quan sát trực tiếp Hình 8.2 (Tốc kế) và Hình 8.3 (Thiết bị bắn tốc độ CSGT) trong SGK trang 48; phân tích trường hợp phương tiện chạy 68 km/h trên đoạn đường giới hạn 50 km/h; thảo luận nhóm các giải pháp bảo đảm ATGT; quan sát Sơ đồ tư duy 16:9 3D Pixar để chốt kiến thức cốt lõi.',
        sanPham: 'Bản phân tích nguyên lý tốc kế và thiết bị bắn tốc độ; lời giải thích vi phạm giao thông và cam kết chấp hành giới hạn tốc độ; SƠ ĐỒ TƯ DUY 16:9 3D PIXAR chốt kiến thức toàn bộ 4 đề mục SGK.',
        bangHaiCot: [
          {
            id: 'r-khtn7-2-4',
            buocSuPham: '1. Khám phá Đề mục IV (Thiết bị đo tốc độ: Tốc kế & Bắn tốc độ CSGT)',
            hinhAnhSGK: {
              tenHinh: 'Hình 8.2 & 8.3: Tốc kế xe máy/ô tô & Thiết bị bắn tốc độ CSGT (SGK KHTN 7 KNTT - Trang 48)',
              moTa: 'Tốc kế chỉ thị 45 km/h và Thiết bị bắn tốc độ radar/laser kèm camera ghi lại hình ảnh ô tô vi phạm 68 km/h trên đường giới hạn 50 km/h.',
              imageUrl: undefined,
              cauHoiKhaiThac: [
                '1. Quan sát Hình 8.2: Tốc kế gắn ở vị trí nào trên xe? Đồng hồ đang chỉ bao nhiêu km/h?',
                '2. Quan sát Hình 8.3: Thiết bị bắn tốc độ gồm những bộ phận nào và ghi nhận những thông tin gì?',
                '3. Tại sao lái xe cần thường xuyên quan sát tốc kế khi lưu thông trên đường?'
              ],
              ghiChuSuPham: 'Giáo dục học sinh lòng tôn trọng pháp luật giao thông, phê phán các hành vi đua xe trái phép.'
            },
            cot1Trai: '- GV chiếu Hình 8.2 (Tốc kế) và Hình 8.3 (Thiết bị bắn tốc độ).\n- Nêu câu hỏi chất vấn các nhóm:\n  + "Tốc kế trên xe chỉ tốc độ trung bình hay tốc độ tức thời tại thời điểm đang đi?"\n  + "Thiết bị bắn tốc độ hoạt động dựa trên nguyên lý nào?"\n  + "Nếu ô tô chạy với tốc độ 68 km/h ở đoạn đường có biển P.127 giới hạn 50 km/h thì người lái xe bị xử lý như thế nào?"\n- [TÍCH HỢP QUỐC PHÒNG AN NINH - TT 08/2024/TT-BGDĐT]: GV mở rộng về các thiết bị radar đo tốc độ của Hải quân và Không quân trong giám sát biên cương, hải đảo quốc gia.',
            cot2Phai: 'IV. THIẾT BỊ ĐO TỐC ĐỘ\n1. Tốc kế (Hình 8.2 SGK):\n- Là thiết bị gắn trên ô tô, xe máy để đo trực tiếp tốc độ tức thời của phương tiện tại thời điểm quan sát.\n- Đơn vị đo hiển thị trên mặt tốc kế là km/h.\n\n2. Thiết bị bắn tốc độ (Hình 8.3 SGK):\n- Gồm máy đo tốc độ (dùng sóng radar/laser) kết hợp máy ảnh kĩ thuật số.\n- Tự động tính toán: v = s / t và chụp lại biển số xe, ngày giờ, vị trí làm căn cứ xử phạt vi phạm giao thông.\n\n[GIÁO DỤC ATGT & PHÁP LUẬT]:\n- Lái xe phải quan sát tốc kế để điều chỉnh tốc độ không vượt quá biển báo cho phép.\n- Tuân thủ quy định tốc độ là bảo vệ tính mạng cho chính mình và mọi người!'
          },
          {
            id: 'r-khtn7-2-4-conclude',
            buocSuPham: '2. Kết luận, nhận định Đề mục IV',
            cot1Trai: '- GV chuẩn hóa kiến thức về tốc kế và thiết bị bắn tốc độ.\n- Yêu cầu học sinh ghi chép nội dung chốt kiến thức vào vở.',
            cot2Phai: '* KẾT LUẬN / CHỐT KIẾN THỨC GHI VỞ (Nội dung trọng tâm HS ghi bài để học):\n- Tốc kế: Dụng cụ đo trực tiếp tốc độ tức thời của phương tiện giao thông (gắn trên xe máy, ô tô).\n- Thiết bị "bắn tốc độ": Tự động đo tốc độ và chụp ảnh phương tiện để kiểm soát an toàn giao thông đường bộ.'
          }
        ]
      },
      {
        id: 'hd-khtn7-3',
        soThuTu: 3,
        tenHoatDong: 'Hoạt động 3: Luyện tập (Hệ thống hóa kiến thức bằng Sơ đồ tư duy 16:9 3D Pixar & Bài tập áp dụng)',
        thoiLuong: '20 phút',
        mucTieu: 'Hệ thống hóa toàn bộ kiến thức bài học bằng Sơ đồ tư duy 16:9 3D Pixar; rèn luyện kĩ năng biến đổi công thức v = s/t, s = v.t, t = s/v và quy đổi đơn vị đo tốc độ qua các bài toán thực tiễn.',
        noiDung: 'HS quan sát Sơ đồ tư duy 16:9 3D Pixar tái hiện kiến thức cốt lõi; sau đó làm việc cá nhân hoàn thành 3 bài tập trong phiếu học tập số 2, đổi chéo bài chấm đồng đẳng.',
        sanPham: 'Sơ đồ tư duy 16:9 hoàn chỉnh trong vở học sinh; Lời giải chi tiết 3 bài tập tính toán tốc độ trong vở.',
        bangHaiCot: [
          {
            id: 'r-khtn7-3-0-mindmap',
            buocSuPham: 'Bước 1: Hệ thống hóa kiến thức toàn bài bằng Sơ đồ tư duy',
            cot1Trai: '- GV trình chiếu Sơ đồ tư duy để học sinh quan sát, hệ thống hóa kiến thức toàn bộ bài học.',
            cot2Phai: '- Học sinh quan sát sơ đồ tư duy và ghi nhớ kiến thức trọng tâm toàn bài.',
                        soDoTuDuy: {
              id: 'mindmap-khtn-7-toc-do',
              chuDeChinh: 'TỐC ĐỘ CHUYỂN ĐỘNG',
              moTaChuDe: 'Hệ thống hóa toàn bộ kiến thức cốt lõi Bài 8 - SGK Khoa học tự nhiên 7 (Kết nối tri thức)',
              tiLe: '16:9',
              phongCach: '3D Pixar',
              imageUrl: '/mindmaps/mindmap-khtn-7-toc-do.jpg',
              ghiChuKetLuan: 'GV trình chiếu sơ đồ tư duy 16:9 3D Pixar để chốt kiến thức: Khái niệm tốc độ, công thức v = s/t, quy đổi đơn vị 1 m/s = 3,6 km/h và các thiết bị đo tốc độ gắn với an toàn giao thông.',
              monHoc: 'Khoa học tự nhiên 7',
              thuatNguChuan: ['Tốc độ chuyển động', 'v = s / t', 'mét trên giây (m/s)', 'kilômét trên giờ (km/h)', 'Tốc kế', 'Thiết bị bắn tốc độ'],
              danhSachNhanh: [
                {
                  id: 'b1',
                  tieuDe: '1. Khái niệm tốc độ',
                  mauSac: '#ef4444',
                  icon3D: '🎯',
                  congThuc: 'Quãng đường / Thời gian',
                  cacYCon: [
                    'Đặc trưng cho sự nhanh hay chậm của chuyển động',
                    'Xác định bằng quãng đường đi được trong 1 đơn vị thời gian',
                    'Phân tích Bảng 8.1 SGK: Cùng s = 60m, thời gian t càng nhỏ -> tốc độ càng lớn'
                  ]
                },
                {
                  id: 'b2',
                  tieuDe: '2. Công thức tính tốc độ',
                  mauSac: '#10b981',
                  icon3D: '📐',
                  congThuc: 'v = s / t  <=>  s = v . t  <=>  t = s / v',
                  cacYCon: [
                    's: Quãng đường đi được (m, km)',
                    't: Thời gian đi hết quãng đường (s, h)',
                    'v: Tốc độ chuyển động (m/s, km/h)'
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
                    'Ví dụ quy đổi nhanh: 36 km/h = 10 m/s; 54 km/h = 15 m/s'
                  ]
                },
                {
                  id: 'b4',
                  tieuDe: '4. Thiết bị đo & An toàn GT',
                  mauSac: '#8b5cf6',
                  icon3D: '🚦',
                  congThuc: 'Tốc kế + Máy bắn tốc độ Radar',
                  cacYCon: [
                    'Tốc kế: Đo tốc độ tức thời hiển thị trên bảng taplo xe máy, ô tô',
                    'Thiết bị bắn tốc độ: Súng radar/laser + Camera ghi hình phương tiện vi phạm',
                    'Chấp hành nghiêm biển hạn chế tốc độ khu dân cư để bảo vệ an toàn tính mạng'
                  ]
                }
              ]
            }

          },
          {
            id: 'r-khtn7-3-1',
            buocSuPham: 'Bước 1: Chuyển giao nhiệm vụ Luyện tập',
            cot1Trai: '- GV giao 3 bài tập luyện tập bám sát SGK:\n  + Bài 1: Đổi các đơn vị sau: a) 15 m/s sang km/h; b) 72 km/h sang m/s; c) 36 km/h sang m/s.\n  + Bài 2: Bạn Nam đi xe đạp từ nhà đến trường với quãng đường s = 3 km hết thời gian t = 15 phút. Tính tốc độ của bạn Nam ra đơn vị km/h và m/s?\n  + Bài 3: Một ô tô chạy trên cao tốc với tốc độ 90 km/h. Hỏi sau 2,5 giờ ô tô đi được quãng đường bao nhiêu kilômét?\n- Yêu cầu HS làm cá nhân trong 8 phút.',
            cot2Phai: 'BÀI TẬP LUYỆN TẬP SGK:\n* Bài 1 (Đổi đơn vị):\n  a) 15 m/s = 15 x 3,6 = 54 km/h.\n  b) 72 km/h = 72 : 3,6 = 20 m/s.\n  c) 36 km/h = 36 : 3,6 = 10 m/s.\n\n* Bài 2:\n  Đổi t = 15 phút = 0,25 h.\n  Tốc độ của bạn Nam là:\n    v = s / t = 3 / 0,25 = 12 km/h.\n  Đổi ra m/s: 12 : 3,6 ≈ 3,33 m/s.\n\n* Bài 3:\n  Quãng đường ô tô đi được là:\n    s = v . t = 90 x 2,5 = 225 (km).'
          },
          {
            id: 'r-khtn7-3-2',
            buocSuPham: 'Bước 2: Thực hiện nhiệm vụ',
            cot1Trai: '- GV bao quát lớp, kịp thời phát hiện và nhắc nhở học sinh không được quên bước đổi đơn vị (ví dụ đổi 15 phút ra 0,25 giờ trước khi chia).\n- Khích lệ học sinh làm nhanh đổi chéo vở hỗ trợ bạn bên cạnh.',
            cot2Phai: '- Học sinh tích cực trình bày bài giải cẩn thận vào vở ghi theo đúng 3 bước: Tóm tắt dữ kiện -> Viết công thức -> Thay số và ghi rõ đơn vị.'
          },
          {
            id: 'r-khtn7-3-3',
            buocSuPham: 'Bước 3: Báo cáo, thảo luận',
            cot1Trai: '- GV gọi 3 học sinh lên bảng trình bày 3 bài.\n- Hướng dẫn các nhóm nhận xét lời giải và cách trình bày đơn vị.',
            cot2Phai: '- 3 học sinh lên bảng thực hiện lời giải.\n- Cả lớp quan sát, đối chiếu kết quả và nhận xét bài làm của bạn trên bảng.'
          },
          {
            id: 'r-khtn7-3-4',
            buocSuPham: 'Bước 4: Kết luận, nhận định',
            cot1Trai: '- GV chuẩn hóa đáp án, tuyên dương các bạn giải nhanh và chính xác.\n- Nhắc lại lỗi sai kinh điển: Quên đổi đơn vị thời gian (phút sang giờ, hoặc phút sang giây) dẫn đến tính sai kết quả tốc độ.',
            cot2Phai: '- Học sinh dùng bút đỏ sửa bài (nếu sai) và đóng khung các lưu ý sư phạm vào vở.'
          }
        ]
      },
      {
        id: 'hd-khtn7-4',
        soThuTu: 4,
        tenHoatDong: 'Hoạt động 4: Vận dụng & Mở rộng (Tích hợp An toàn giao thông & Dự án STEM)',
        thoiLuong: '18 phút',
        mucTieu: 'Vận dụng kiến thức về tốc độ để phân tích các tình huống thực tế tham gia giao thông, nâng cao ý thức tuân thủ pháp luật và chuẩn bị cho bài học thực hành tiếp theo.',
        noiDung: 'HS phân tích tình huống thực tiễn: "Tại sao ở đoạn đường dốc gần trường học thường cắm biển giới hạn tốc độ 30 km/h hoặc gờ giảm tốc?" và làm bài tập về khoảng cách phanh xe an toàn.',
        sanPham: 'Bản đề xuất giải pháp an toàn giao thông trước cổng trường học của học sinh.',
        bangHaiCot: [
          {
            id: 'r-khtn7-4-1',
            buocSuPham: 'Bước 1: Chuyển giao nhiệm vụ Vận dụng',
            cot1Trai: '- GV nêu tình huống thực tế:\n  "Khoảng cách dừng xe an toàn khi phanh phụ thuộc trực tiếp vào tốc độ chuyển động. Một xe máy chạy 40 km/h cần quãng đường phanh 15 m để dừng hẳn; nếu chạy 60 km/h thì quãng đường phanh lên tới gần 35 m!"\n- Nhiệm vụ:\n  + Câu hỏi 1: Vì sao trước cổng trường học lại phải lắp đặt gờ giảm tốc và cắm biển hạn chế tốc độ?\n  + Câu hỏi 2: Em hãy thiết kế một khẩu hiệu hoặc poster ngắn (Infographic) tuyên truyền: "Kiểm soát tốc độ - Bảo vệ sự sống".\n  + Hướng dẫn chuẩn bị Bài 9: Đo tốc độ (mang thước dây và đồng hồ bấm giây cho tiết sau).',
            cot2Phai: 'VẬN DỤNG THỰC TẾ & ATGT:\n1. Giải thích tình huống:\n- Khi đi với tốc độ càng cao, quãng đường phanh càng dài, thời gian phản ứng của tài xế không đủ kịp xử lý tình huống bất ngờ.\n- Cổng trường có đông học sinh qua lại, gờ giảm tốc buộc xe phải hạ tốc độ xuống dưới 30 km/h để đảm bảo an toàn tuyệt đối.\n\n2. Thông điệp tuyên truyền của học sinh:\n- "Nhanh một giây - Chậm cả đời: Hãy làm chủ tốc độ!"\n- "Tuân thủ tốc độ quy định là tôn trọng tính mạng của chính mình và người khác".\n\n3. Chuẩn bị tiết học sau: Xem trước Bài 9 - Đo tốc độ bằng đồng hồ bấm giây và cổng quang điện.'
          },
          {
            id: 'r-khtn7-4-2',
            buocSuPham: 'Bước 2: Thực hiện nhiệm vụ',
            cot1Trai: '- GV cho các nhóm thảo luận nhanh 3 phút và phác thảo thông điệp ATGT trên phiếu nhóm.',
            cot2Phai: '- Học sinh trao đổi sôi nổi, ghi lại thông điệp bảo vệ an toàn giao thông.'
          },
          {
            id: 'r-khtn7-4-3',
            buocSuPham: 'Bước 3: Báo cáo, thảo luận',
            cot1Trai: '- Mời đại diện 1 nhóm chia sẻ thông điệp ATGT.',
            cot2Phai: '- Đại diện nhóm đứng dậy đọc to khẩu hiệu tuyên truyền của nhóm.'
          },
          {
            id: 'r-khtn7-4-4',
            buocSuPham: 'Bước 4: Kết luận, dặn dò',
            cot1Trai: '- GV tổng kết toàn bài, nhấn mạnh 3 từ khóa: Định nghĩa tốc độ -> Công thức v = s/t -> Tuân thủ quy định tốc độ giao thông.\n- Dặn dò học sinh làm bài tập SGK và chuẩn bị bài 9.',
            cot2Phai: '- Học sinh ghi nhớ nhiệm vụ về nhà và chuẩn bị dụng cụ cho tiết thực hành tiếp theo.'
          }
        ]
      }
    ],
    dieuChinhSauBaiDay: ''
  },
  slideDeck: {
    themeId: 'modern-stem',
    themeConfig: SLIDE_THEMES['modern-stem'],
    slides: [
      {
        id: 's-khtn7-1',
        slideNumber: 1,
        slideType: 'TITLE_SLIDE',
        title: 'BÀI 8: TỐC ĐỘ CHUYỂN ĐỘNG',
        subtitle: 'Khoa học tự nhiên 7 - Chương III: Tốc độ | Bộ sách Kết nối tri thức với cuộc sống',
        stageBadge: 'Trang bìa bài giảng',
        visualLayout: 'Full Center Hero',
        bulletPoints: [
          'Chủ đề: Tốc độ và các thiết bị đo tốc độ',
          'Khối lớp: 7 - Thời lượng: 2 tiết (90 phút)',
          'Giáo viên giảng dạy: Tổ Khoa học tự nhiên',
          'Tích hợp: Năng lực số CV 3456 & Giáo dục An toàn giao thông'
        ],
        boardContent: 'v = s / t | 1 m/s = 3,6 km/h',
        aiImagePrompt: 'High-tech modern physics classroom laboratory showing motion, speedometer, radar speed gun and athletic running track, cinematic lighting, 8k resolution',
        animationsAndTransitions: {
          slideTransition: 'Morph',
          elementAnimations: ['Fade In Down title', 'Zoom In badge', 'Fade In Up details']
        },
        speakerNotes: 'Kính chào quý thầy cô và các em học sinh. Hôm nay chúng ta cùng bắt đầu Chương III với Bài 8: Tốc độ chuyển động - một đại lượng vô cùng quan trọng trong vật lí và đời sống.'
      },
      {
        id: 's-khtn7-2',
        slideNumber: 2,
        slideType: 'OBJECTIVE',
        title: 'MỤC TIÊU CẦN ĐẠT CỦA BÀI HỌC',
        subtitle: 'Chuẩn chương trình GDPT 2018 môn Khoa học tự nhiên 7',
        stageBadge: 'Mục tiêu bài học',
        visualLayout: '3-Card Bento Grid',
        bulletPoints: [
          '🎯 Kiến thức cốt lõi: Nêu được ý nghĩa tốc độ, viết đúng công thức v = s/t và quy đổi m/s ra km/h.',
          '🔬 Năng lực khoa học: Phân tích số liệu chạy cự li 60m SGK và mô tả nguyên lý thiết bị bắn tốc độ.',
          '🚦 Phẩm chất & ATGT: Chấp hành nghiêm chỉnh quy định giới hạn tốc độ khi tham gia giao thông.'
        ],
        boardContent: 'Yêu cầu cần đạt: v = s/t, đơn vị m/s và km/h, thiết bị đo tốc độ',
        aiImagePrompt: 'Three glowing futuristic cards showing physics target, scientific formula and traffic safety icon',
        animationsAndTransitions: {
          slideTransition: 'Push',
          elementAnimations: ['Staggered Slide Left cards']
        },
        speakerNotes: 'Slide này giúp học sinh nắm rõ 3 mục tiêu trọng tâm cần chinh phục trong suốt 2 tiết học.'
      },
      {
        id: 's-khtn7-3',
        slideNumber: 3,
        slideType: 'ACTIVITY_INTRO',
        title: 'KHỞI ĐỘNG: AI CHẠY NHANH HƠN?',
        subtitle: 'Tình huống thực tế cuộc thi chạy cự li 60 m',
        stageBadge: 'Hoạt động 1: Khởi động',
        visualLayout: '2-Column Split',
        bulletPoints: [
          '🏃 Tình huống: Trong một cuộc thi chạy 60 m, bạn nào chạy mất ít thời gian hơn sẽ thắng cuộc.',
          '❓ Câu hỏi kích hoạt: Nếu hai bạn chạy hai quãng đường khác nhau trong thời gian khác nhau, làm sao để so sánh ai nhanh hơn?',
          '💡 Dự đoán: Cần tính xem trong cùng 1 đơn vị thời gian (1 giây hoặc 1 giờ), mỗi người đi được quãng đường bao xa.'
        ],
        boardContent: 'Cùng quãng đường: t nhỏ hơn -> nhanh hơn | Cùng thời gian: s lớn hơn -> nhanh hơn',
        aiImagePrompt: 'Athletic runners sprinting on a bright track crossing finish line, high speed photography, dynamic action',
        animationsAndTransitions: {
          slideTransition: 'Curtains',
          elementAnimations: ['Wipe Right image', 'Fade In text points']
        },
        speakerNotes: 'Chiếu video hoặc tranh khởi động để tạo sự tò mò và dẫn dắt học sinh vào khái niệm tốc độ.'
      },
      {
        id: 's-khtn7-4',
        slideNumber: 4,
        slideType: 'KNOWLEDGE_SPLIT',
        title: 'I. KHÁI NIỆM TỐC ĐỘ CHUYỂN ĐỘNG',
        subtitle: 'Khai thác Hình 8.1 - Bảng kết quả chạy cự li 60 m SGK (Trang 45)',
        stageBadge: 'Khám phá SGK',
        visualLayout: '2-Column Split',
        bulletPoints: [
          '📊 Bảng 8.1 SGK KNTT: Quãng đường s = 60 m cho cả 3 bạn.',
          '🥈 Bạn A: t = 10,0 s  -> Đi được 6,00 m trong 1 s (Hạng 2)',
          '🥉 Bạn B: t = 12,0 s  -> Đi được 5,00 m trong 1 s (Hạng 3)',
          '🥇 Bạn C: t = 9,6 s   -> Đi được 6,25 m trong 1 s (Hạng 1 - Nhanh nhất)',
          '⭐ KẾT LUẬN: Tốc độ là đại lượng cho biết mức độ nhanh hay chậm của chuyển động, xác định bằng quãng đường đi được trong một đơn vị thời gian.'
        ],
        boardContent: 'Tốc độ = Quãng đường / Thời gian | v = s / t',
        aiImagePrompt: 'Data table infographic comparing running speeds with gold medal highlight for student C',
        animationsAndTransitions: {
          slideTransition: 'Morph',
          elementAnimations: ['Fade In table rows one by one', 'Pulse Highlight student C']
        },
        speakerNotes: 'Cho học sinh đọc Bảng 8.1, tự nhận xét bạn C có thời gian nhỏ nhất và quãng đường trong 1s lớn nhất.'
      },
      {
        id: 's-khtn7-5',
        slideNumber: 5,
        slideType: 'KNOWLEDGE_SPLIT',
        title: 'II. CÔNG THỨC TÍNH TỐC ĐỘ',
        subtitle: 'Mối quan hệ toán học giữa Quãng đường (s), Thời gian (t) và Tốc độ (v)',
        stageBadge: 'Công thức toán học',
        visualLayout: 'Full Center Hero',
        bulletPoints: [
          '📐 CÔNG THỨC GỐC:   v = s / t',
          '📏 Tính quãng đường: s = v . t',
          '⏱️ Tính thời gian:    t = s / v',
          'Trong đó: s là quãng đường (m, km); t là thời gian (s, h); v là tốc độ (m/s, km/h).'
        ],
        boardContent: 'v = s / t  <=>  s = v . t  <=>  t = s / v',
        aiImagePrompt: 'Futuristic glowing triangle formula diagram s on top, v and t on bottom with interactive glowing lines',
        animationsAndTransitions: {
          slideTransition: 'Morph',
          elementAnimations: ['Zoom In triangle formula', 'Fade In Up explanatory text']
        },
        speakerNotes: 'Nhấn mạnh tam giác công thức để học sinh dễ nhớ: che đại lượng nào thì tính theo hai đại lượng còn lại.'
      },
      {
        id: 's-khtn7-6',
        slideNumber: 6,
        slideType: 'KNOWLEDGE_SPLIT',
        title: 'III. ĐƠN VỊ ĐO TỐC ĐỘ & QUY TẮC ĐỔI',
        subtitle: 'Hệ SI và đơn vị thông dụng trong thực tiễn',
        stageBadge: 'Đơn vị đo',
        visualLayout: '2-Column Split',
        bulletPoints: [
          '🌐 Đơn vị chuẩn SI: mét trên giây (m/s).',
          '🚗 Đơn vị thông dụng: kilômét trên giờ (km/h).',
          '⭐ CÔNG THỨC ĐỔI VÀNG:  1 m/s = 3,6 km/h',
          '🔄 Từ m/s ra km/h: NHÂN 3,6  (Ví dụ: 10 m/s = 36 km/h; 15 m/s = 54 km/h)',
          '🔄 Từ km/h ra m/s: CHIA 3,6  (Ví dụ: 72 km/h = 20 m/s; 90 km/h = 25 m/s)'
        ],
        boardContent: '1 m/s = 3,6 km/h  |  1 km/h = 1 / 3,6 m/s',
        aiImagePrompt: 'Modern digital unit converter display connecting m/s and km/h with glowing multiplication sign 3.6',
        animationsAndTransitions: {
          slideTransition: 'Push',
          elementAnimations: ['Bounce In conversion rule', 'Fade In conversion examples']
        },
        speakerNotes: 'Slide này chốt quy tắc nhân chia 3,6 rất dễ nhớ giúp học sinh không bao giờ bị nhầm lẫn.'
      },
      {
        id: 's-khtn7-7',
        slideNumber: 7,
        slideType: 'KNOWLEDGE_SPLIT',
        title: 'BẢNG TỐC ĐỘ MỘT SỐ CHUYỂN ĐỘNG',
        subtitle: 'Khám phá thế giới tự nhiên và công nghệ (SGK Trang 47)',
        stageBadge: 'Số liệu SGK',
        visualLayout: '3-Card Bento Grid',
        bulletPoints: [
          '🐌 Tốc độ chậm: Ốc sên bò 0,0014 m/s (0,005 km/h) | Người đi bộ 1,5 m/s (5,4 km/h)',
          '🛵 Phương tiện phổ thông: Xe máy phố 11,1 m/s (40 km/h) | Ô tô cao tốc 27,8 m/s (100 km/h)',
          '⚡ Kỷ lục tự nhiên: Âm thanh 340 m/s (1 224 km/h) | Ánh sáng 300 000 000 m/s (kỷ lục vũ trụ)'
        ],
        boardContent: 'Từ ốc sên 0,0014 m/s đến ánh sáng 300.000.000 m/s',
        aiImagePrompt: 'Bento grid showing comparison of a snail, a high-speed bullet train, and a light beam in space',
        animationsAndTransitions: {
          slideTransition: 'Fade',
          elementAnimations: ['Staggered Slide Up bento cards']
        },
        speakerNotes: 'Giúp học sinh có cảm nhận thực tế về tốc độ của các vật quanh mình.'
      },
      {
        id: 's-khtn7-8',
        slideNumber: 8,
        slideType: 'KNOWLEDGE_SPLIT',
        title: 'IV. THIẾT BỊ ĐO TỐC ĐỘ: TỐC KẾ',
        subtitle: 'Khai thác Hình 8.2 SGK - Đồng hồ đo trên bảng điều khiển xe',
        stageBadge: 'Thiết bị SGK',
        visualLayout: '2-Column Split',
        bulletPoints: [
          '🏎️ Vị trí: Gắn trên bảng taplo của xe máy, ô tô, xe đạp điện.',
          '📈 Chức năng: Đo trực tiếp tốc độ tức thời tại thời điểm phương tiện đang di chuyển.',
          '🔢 Đơn vị hiển thị: km/h (và mph ở một số dòng xe nhập khẩu).',
          '👀 Quan sát Hình 8.2: Kim đồng hồ chỉ 45 km/h -> Xe đang chạy với tốc độ 45 km/h (12,5 m/s).'
        ],
        boardContent: 'Tốc kế = Dụng cụ đo tốc độ tức thời của phương tiện',
        aiImagePrompt: 'Close up of a motorcycle dashboard speedometer needle pointing to 45 km/h with glowing numbers',
        animationsAndTransitions: {
          slideTransition: 'Morph',
          elementAnimations: ['Rotate In speedometer needle', 'Fade In description']
        },
        speakerNotes: 'Hỏi học sinh: Kim tốc kế chỉ tốc độ tức thời hay tốc độ trung bình? Nhấn mạnh đó là tốc độ tức thời.'
      },
      {
        id: 's-khtn7-9',
        slideNumber: 9,
        slideType: 'KNOWLEDGE_SPLIT',
        title: 'THIẾT BỊ BẮN TỐC ĐỘ CỦA CSGT',
        subtitle: 'Khai thác Hình 8.3 SGK & Giáo dục An toàn giao thông',
        stageBadge: 'Thiết bị SGK & ATGT',
        visualLayout: '2-Column Split',
        bulletPoints: [
          '📷 Cấu tạo: Máy đo tốc độ (sóng radar / laser) kết hợp máy ảnh kĩ thuật số.',
          '⚙️ Nguyên lý: Tự động đo thời gian sóng phản xạ từ xe, máy tính tính v = s/t và chụp lại hình ảnh.',
          '📋 Dữ liệu ghi nhận: Hình ảnh xe, biển số, tốc độ đo được, thời gian và địa điểm vi phạm.',
          '🚦 Ý nghĩa ATGT: Kiểm soát các hành vi chạy quá tốc độ cho phép, giảm thiểu tai nạn giao thông.'
        ],
        boardContent: 'Thiết bị bắn tốc độ = Máy đo tốc độ sóng phản xạ + Camera chụp hình',
        aiImagePrompt: 'Traffic police officer operating a digital laser speed gun on a highway with digital HUD display overlay',
        animationsAndTransitions: {
          slideTransition: 'Push',
          elementAnimations: ['Fade In Down speed gun graphic', 'Slide Left ATGT bullet points']
        },
        speakerNotes: 'Liên hệ thực tế: biển báo P.127 giới hạn 50 km/h trong đô thị để học sinh hiểu tầm quan trọng của thiết bị này.'
      },
      {
        id: 's-khtn7-10',
        slideNumber: 10,
        slideType: 'SUMMARY',
        title: 'SƠ ĐỒ TƯ DUY TỔNG KẾT BÀI 8',
        subtitle: 'Hệ thống hóa toàn bộ kiến thức cốt lõi theo chuẩn 3D Pixar 16:9',
        stageBadge: 'Tổng kết & Chốt kiến thức',
        visualLayout: 'Full Center Hero',
        bulletPoints: [
          '🎯 1. Khái niệm: Tốc độ đặc trưng cho sự nhanh chậm, bằng quãng đường đi trong 1 đơn vị thời gian.',
          '📐 2. Công thức: v = s / t; suy ra s = v.t và t = s/v.',
          '⭐ 3. Đơn vị: m/s và km/h (1 m/s = 3,6 km/h).',
          '🚦 4. Thiết bị: Tốc kế đo tốc độ tức thời, thiết bị bắn tốc độ kiểm tra ATGT.'
        ],
        boardContent: 'Ghi nhớ: v = s/t | 1 m/s = 3,6 km/h | Tốc kế & Bắn tốc độ',
        aiImagePrompt: '3D Pixar style vibrant mindmap about motion speed with 4 branches and colorful icons on dark blueprint background',
        animationsAndTransitions: {
          slideTransition: 'Morph',
          elementAnimations: ['Zoom In mindmap graphic', 'Staggered Fade In summary points']
        },
        speakerNotes: 'Dùng sơ đồ tư duy 16:9 3D Pixar để khắc sâu toàn bộ bài học trước khi chuyển sang phần trò chơi củng cố.'
      },
      {
        id: 's-khtn7-11',
        slideNumber: 11,
        slideType: 'INTERACTIVE_QUIZ',
        title: 'THỬ THÁCH NHANH: AI LÀ CAO THỦ VẬT LÍ?',
        subtitle: '4 câu hỏi trắc nghiệm tương tác bám sát nội dung SGK',
        stageBadge: 'Trò chơi củng cố',
        visualLayout: 'Quiz Layout',
        bulletPoints: [
          '❓ Câu 1: Tốc độ chuyển động của một vật cho biết điều gì?',
          '❓ Câu 2: Công thức nào sau đây dùng để tính tốc độ chuyển động?',
          '❓ Câu 3: Một ô tô chạy 54 km/h, tốc độ này bằng bao nhiêu m/s?',
          '❓ Câu 4: Thiết bị nào dùng để kiểm tra phương tiện chạy quá tốc độ?'
        ],
        boardContent: 'Trò chơi tương tác 4 câu hỏi trắc nghiệm KHTN 7',
        aiImagePrompt: 'Colorful quiz game arena with 4 answer buttons A B C D glowing in blue green yellow and red',
        animationsAndTransitions: {
          slideTransition: 'Curtains',
          elementAnimations: ['Pop In quiz cards', 'Bounce In timer icon']
        },
        speakerNotes: 'Chuyển sang tab Trò chơi Trắc nghiệm để cả lớp cùng tham gia trả lời và tính điểm thi đua.'
      },
      {
        id: 's-khtn7-12',
        slideNumber: 12,
        slideType: 'SUMMARY',
        title: 'HƯỚNG DẪN TỰ HỌC & CHUẨN BỊ BÀI 9',
        subtitle: 'Nhiệm vụ về nhà và chuẩn bị tiết thực hành tiếp theo',
        stageBadge: 'Dặn dò về nhà',
        visualLayout: '2-Column Split',
        bulletPoints: [
          '📝 Về nhà: Học thuộc định nghĩa tốc độ và công thức v = s/t, làm bài tập 8.1 đến 8.5 sách bài tập.',
          '🔍 Thực hành quan sát: Quan sát mặt tốc kế xe máy của phụ huynh khi di chuyển và ghi nhận số đo.',
          '🔬 Chuẩn bị bài 9: Đọc trước bài 9 "Đo tốc độ", tìm hiểu cách sử dụng đồng hồ bấm giây và cổng quang điện.'
        ],
        boardContent: 'BTVN: Bài 8.1 - 8.5 SBT | Chuẩn bị Bài 9: Đo tốc độ',
        aiImagePrompt: 'Student study desk with open science notebook, laptop showing speed simulator, warm desk lamp lighting',
        animationsAndTransitions: {
          slideTransition: 'Fade',
          elementAnimations: ['Fade In Up homework tasks']
        },
        speakerNotes: 'Nhắc nhở học sinh làm bài tập và chuẩn bị dụng cụ cho tiết thực hành sau. Cảm ơn các em!'
      }
    ]
  },
  quizGame: [
    {
      id: 'q-khtn7-1',
      question: 'Tốc độ chuyển động của một vật cho biết điều gì?',
      options: [
        'Mức độ nhanh hay chậm của chuyển động',
        'Vật di chuyển theo hướng nào',
        'Quãng đường vật đi được dài hay ngắn',
        'Vật chuyển động trong thời gian bao lâu'
      ],
      correctIndex: 0,
      explanation: 'Theo định nghĩa trong SGK KHTN 7 (Trang 45): Tốc độ là đại lượng đặc trưng cho sự chuyển động nhanh hay chậm của vật, được xác định bằng quãng đường đi được trong một đơn vị thời gian.',
      funFact: 'Trong tự nhiên, loài chim cắt Peregrine khi lao xuống bắt mồi có thể đạt tốc độ hơn 320 km/h (gần 90 m/s), là sinh vật có tốc độ cao nhất hành tinh!'
    },
    {
      id: 'q-khtn7-2',
      question: 'Công thức nào sau đây dùng để tính tốc độ chuyển động?',
      options: [
        'v = s . t',
        'v = s / t',
        'v = t / s',
        'v = s + t'
      ],
      correctIndex: 1,
      explanation: 'Công thức chuẩn: v = s / t. Trong đó s là quãng đường đi được, t là thời gian đi hết quãng đường đó.',
      funFact: 'Từ công thức v = s/t, bạn có thể dễ dàng suy ra s = v.t và t = s/v bằng quy tắc tam giác toán học!'
    },
    {
      id: 'q-khtn7-3',
      question: 'Một xe máy chuyển động với tốc độ 54 km/h. Tốc độ này tương đương với bao nhiêu mét trên giây (m/s)?',
      options: [
        '10 m/s',
        '12 m/s',
        '15 m/s',
        '18 m/s'
      ],
      correctIndex: 2,
      explanation: 'Để đổi từ km/h sang m/s ta lấy số km/h chia cho 3,6:  54 : 3,6 = 15 (m/s).',
      funFact: '54 km/h = 15 m/s có nghĩa là cứ mỗi giây trôi qua, chiếc xe máy đã chạy được quãng đường dài 15 mét - gần bằng chiều dài một căn nhà 3 tầng!'
    },
    {
      id: 'q-khtn7-4',
      question: 'Thiết bị nào sau đây dùng để kiểm tra phương tiện giao thông có chạy quá tốc độ quy định trên đường hay không?',
      options: [
        'Nhiệt kế hồng ngoại',
        'Tốc kế xe máy',
        'Thiết bị "bắn tốc độ" của Cảnh sát giao thông',
        'Đồng hồ đo điện thế'
      ],
      correctIndex: 2,
      explanation: 'Thiết bị "bắn tốc độ" (Hình 8.3 SGK) gồm máy đo tốc độ bằng sóng vô tuyến/laser kết hợp camera ghi lại hình ảnh, biển số và tốc độ của phương tiện để xử phạt vi phạm.',
      funFact: 'Thiết bị bắn tốc độ laser hiện đại có thể phát hiện vi phạm tốc độ ở khoảng cách hơn 1 km chỉ trong 0,3 giây!'
    }
  ],
  aiAnalysisReport: {
    tenBaiDay: 'Bài 8: Tốc độ chuyển động',
    monHoc: 'Khoa học tự nhiên',
    khoiLop: 7,
    boSach: 'Kết nối tri thức với cuộc sống',
    sgkUrl: 'https://taphuan.nxbgd.vn/tap-huan?grade=7',
    tongSoDeMuc: 3,
    danhSachDeMuc: [
      {
        deMuc: 'I. Khái niệm tốc độ',
        tenHoatDong: 'Hoạt động 2.1: Tìm hiểu khái niệm tốc độ (Đề mục I SGK Trang 45 - 46)',
        mucTieu: 'Xác định được chuyển động nhanh hay chậm dựa vào quãng đường đi được trong cùng một khoảng thời gian hoặc thời gian để đi cùng một quãng đường; định nghĩa tốc độ.'
      },
      {
        deMuc: 'II. Công thức tính tốc độ',
        tenHoatDong: 'Hoạt động 2.2: Công thức tính tốc độ và hoạt động nhóm 4 vai trò (Đề mục II SGK Trang 46 - 47)',
        mucTieu: 'Viết được công thức v = s / t; biết suy ra s = v . t và t = s / v; thảo luận nhóm 4 vai trò 4 màu mực giải bài tập mẫu.'
      },
      {
        deMuc: 'III. Đơn vị đo tốc độ',
        tenHoatDong: 'Hoạt động 2.3: Đơn vị đo tốc độ & Sơ đồ tư duy 16:9 3D Pixar (Đề mục III SGK Trang 47 - 48)',
        mucTieu: 'Nắm được các đơn vị đo tốc độ m/s, km/h; đổi đơn vị 1 m/s = 3,6 km/h; nhận biết tốc kế trên phương tiện; Sơ đồ tư duy 16:9.'
      }
    ],
    tienTrinhHoatDong: [
      'Hoạt động 1: Khởi động (Trò chơi Ai nhanh hơn - So sánh chạy 60m)',
      'Hoạt động 2.1: Khái niệm tốc độ (Đề mục I SGK Trang 45 - 46)',
      'Hoạt động 2.2: Công thức tính tốc độ v = s / t (Đề mục II SGK Trang 46 - 47)',
      'Hoạt động 2.3: Đơn vị đo tốc độ & Sơ đồ tư duy 16:9 (Đề mục III SGK Trang 47 - 48)',
      'Hoạt động 3: Luyện tập (Giải bài toán đổi đơn vị và so sánh tốc độ)',
      'Hoạt động 4: Vận dụng (Biển báo an toàn giao thông và ứng dụng đời sống)'
    ],
    phanTichSuPham: 'Bài học thuộc Chủ đề 3 (Tốc độ - Phần Vật lí). Tuân thủ 100% nội dung SGK (Trang 45 - 48). Hoạt động 2 được chia thành 3 hoạt động độc lập tương ứng với 3 đề mục I, II, III theo Công văn 5512/BGDĐT-GDTrH.'
  }
};
