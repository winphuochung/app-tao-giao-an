import { CompleteLessonPlan } from '../types';
import { SLIDE_THEMES } from './themes';
import { HOAT_DONG_NHOM_TIEU_HOC, HOAT_DONG_NHOM_THCS } from './activeGroupActivities';
import { SAMPLE_KHTN_7_TOC_DO } from './sampleKhtn7';
import { SAMPLE_KHTN_7_BAI_9_DO_TOC_DO } from './sampleKhtn7Bai9';

export const SAMPLE_LESSONS: Record<string, CompleteLessonPlan> = {
  'thcs-khtn-7-toc-do': SAMPLE_KHTN_7_TOC_DO,
  'thcs-khtn-7-bai-9': SAMPLE_KHTN_7_BAI_9_DO_TOC_DO,
  'tieu-hoc-toan-3': {
    giaoAn: {
      metadata: {
        capHoc: 'TIEU_HOC',
        congVan: '2345/BGDĐT-GDTH',
        khoiLop: 3,
        boSach: 'Kết nối tri thức với cuộc sống',
        monHoc: 'Toán',
        tenBaiDay: 'HÌNH TRÒN, TÂM, ĐƯỜNG KÍNH, BÁN KÍNH (Tiết 1)',
        soTiet: '1 tiết',
        tietTheoPPCT: 'Tiết 51',
        thoiLuong: '35 phút',
        siSoLop: '35 học sinh (Chia 8-9 nhóm, mỗi nhóm 4 em)',
        dacDiemHocSinh: 'Có một số em thụ động, ngại phát biểu, thường phụ thuộc vào bạn học khá',
        tuanThucHien: 'Tuần 11',
        truong: 'Trường Tiểu học Thực nghiệm Sư phạm',
        toChuyenMon: 'Tổ Chuyên môn Khối 3',
        giaoVien: '',
        ngayThucHien: 'Tháng 11 năm 2026',
        tichHop: {
          nangLucSo: true,
          stem: true,
          anToanGiaoThong: false,
          kyNangSong: true,
          baoVeMoiTruong: false,
          quocPhongAnNinh: true,
          dinhDuongSucKhoe: true,
        }
      },
      mucTieu: {
        nangLucDacThu: [
          'Nhận biết được hình tròn, tâm, bán kính, đường kính của hình tròn.',
          'Biết dùng com-pa để vẽ hình tròn có tâm và bán kính cho trước.',
          'Nhận biết mối quan hệ: Trong một hình tròn, độ dài đường kính gấp 2 lần độ dài bán kính (d = 2 x r).'
        ],
        nangLucChung: {
          tuChuTuHoc: ['Tự giác chuẩn bị com-pa, thước kẻ, chủ động thực hiện nhiệm vụ vẽ hình cá nhân.'],
          giaoTiepHopTac: ['Thảo luận nhóm đôi chia sẻ cách xác định tâm và so sánh độ dài các bán kính.'],
          giaiQuyetVanDe: ['Ứng dụng hình tròn để thiết kế mặt đồng hồ đồ chơi mini, phát hiện các đồ vật có dạng hình tròn trong đời sống.']
        },
        nangLucSo: [
          {
            maChiBao: '1.1.CB1a',
            tenLinhVuc: 'Khai thác dữ liệu và thông tin',
            bieuHien: 'Xác định nhu cầu quan sát và nhận biết các đồ vật có dạng hình tròn qua hình ảnh, video clip 3D trên màn hình tương tác dưới sự hướng dẫn của giáo viên.'
          },
          {
            maChiBao: '3.1.CB1a',
            tenLinhVuc: 'Sáng tạo nội dung số',
            bieuHien: 'Sử dụng công cụ số tương tác, thao tác kéo thả ngón tay trên màn hình cảm ứng để đo độ dài bán kính và vẽ mô phỏng đường tròn.'
          },
          {
            maChiBao: '4.3.CB1a',
            tenLinhVuc: 'Bảo vệ sức khỏe và an sinh số',
            bieuHien: 'Nhận biết và thực hành tư thế ngồi học an toàn, giữ khoảng cách mắt đúng quy chuẩn với màn hình thiết bị số trong lớp học.'
          }
        ],
        phamChat: {
          yeuNuoc: ['Tự hào và yêu thích các danh lam, công trình kiến trúc Việt Nam có họa tiết hình tròn (Chùa Một Cột, Trống đồng Đông Sơn).'],
          nhanAi: ['Tôn trọng ý kiến bạn bè trong nhóm, hỗ trợ bạn chưa biết dùng com-pa.'],
          chamChi: ['Cẩn thận, tỉ mỉ khi quay com-pa vẽ các đường tròn chuẩn xác.'],
          trungThuc: ['Báo cáo trung thực kết quả đo độ dài bán kính và đường kính.'],
          trachNhiem: ['Bảo quản an toàn dụng cụ học tập có đầu nhọn (chân kim com-pa).']
        },
        tichHopMoRong: [
          'Tích hợp Năng lực số: Sử dụng thước đo ảo trên màn hình tương tác và quan sát mô phỏng chuyển động compa 3D.',
          'Giáo dục STEM: Khám phá nguyên lý bánh xe hình tròn lăn êm ái hơn các hình đa giác.',
          'Bảo vệ Quốc phòng và An ninh: Giới thiệu họa tiết ngôi sao vàng và hoa văn trống đồng Đông Sơn có tâm đối xứng, bồi đắp lòng yêu nước và tự hào chủ quyền dân tộc.',
          'Giáo dục Dinh dưỡng học đường: Liên hệ hình tròn với đĩa thức ăn dinh dưỡng hợp lý cân bằng 4 nhóm chất cho học sinh tiểu học.'
        ]
      },
      thietBiDayHoc: {
        giaoVien: [
          'Máy tính, máy chiếu hoặc màn hình cảm ứng tương tác.',
          'Sách giáo khoa điện tử Toán 3 (NXB Giáo Dục Việt Nam: https://taphuan.nxbgd.vn/tap-huan?grade=3).',
          'Slide bài giảng điện tử hoạt hình, com-pa giảng dạy cỡ lớn gắn bảng.',
          'Các mô hình đồ vật hình tròn (mặt đồng hồ, nắp chai, đĩa CD), phiếu bài tập tương tác.'
        ],
        hocSinh: [
          'Sách giáo khoa Toán 3, vở bài tập.',
          'Bộ dụng cụ học tập: Com-pa học sinh có bọc bảo vệ chân kim, thước kẻ chia vạch cm, bút chì, giấy màu kéo thủ công.'
        ]
      },
      tienTrinhDayHoc: [
        {
          id: 'hd-1',
          soThuTu: 1,
          tenHoatDong: 'Hoạt động 1: Mở đầu / Khởi động (Trò chơi "Bánh xe phiêu lưu")',
          thoiLuong: '5 phút',
          mucTieu: 'Tạo hứng thú học tập, kích hoạt kiến thức nền của học sinh về các đồ vật có dạng hình tròn trong thực tế.',
          bangHaiCot: [
            {
              id: 'row-1-1',
              buocSuPham: '1. Khởi động - Tạo cảm xúc tích cực',
              cot1Trai: '- [TÍCH HỢP NĂNG LỰC SỐ - Mã 1.1.CB1a]: GV tổ chức trò chơi "Bánh xe phiêu lưu", trình chiếu clip hoạt hình 3D trên màn hình tương tác. Hướng dẫn HS quan sát chiếc xe có bánh hình tam giác chạy gập ghềnh và chiếc xe bánh tròn lăn êm ái.\n- Đặt câu hỏi gợi mở:\n  + "Tại sao bánh xe lại luôn có dạng hình tròn mà không phải hình vuông hay tam giác?"\n  + [LỒNG GHÉP AN TOÀN GIAO THÔNG]: "Khi tham gia giao thông trên đường bằng xe đạp hoặc xe máy của bố mẹ, chúng ta cần làm gì để đảm bảo an toàn tuyệt đối?"\n- GV nhận xét, tuyên dương và dẫn dắt vào bài mới.',
              cot2Phai: '- HS chăm chú quan sát clip mô phỏng số, chỉ ra bánh xe hình tròn lướt êm vì không có góc cạnh.\n- [Ý THỨC ATGT]: HS hào hứng trả lời: "Phải luôn đội mũ bảo hiểm đạt chuẩn, cài quai chắc chắn, đi đúng làn đường bên phải và không được dàn hàng ngang trên đường ạ!"\n- Cả lớp phấn khởi mở vở ghi tên bài học mới.'
            }
          ]
        },
        {
          id: 'hd-toan3-2-1',
          soThuTu: 2,
          tenHoatDong: 'Hoạt động 2.1: Khám phá Hình tròn và Tâm O (Đề mục 1 SGK Toán 3 - Trang 45)',
          thoiLuong: '10 phút',
          deMucSGK: '1. Khám phá Hình tròn và Tâm O',
          mucTieu: 'Nhận diện hình tròn và phát hiện Tâm O là điểm chính giữa của hình tròn. Tự quan sát tranh SGK và thực hành gập giấy tìm giao điểm.',
          noiDung: 'HS quan sát Hình 1 SGK trang 45 (chú Robot giới thiệu đồ vật hình tròn), thảo luận cặp đôi và thực hành gập giấy hình tròn tìm tâm O.',
          sanPham: 'Tờ giấy hình tròn có điểm O tại giao điểm 2 nếp gấp đôi; phát biểu chính xác: Tâm O là điểm chính giữa của hình tròn.',
          bangHaiCot: [
            {
              id: 'row-2-1',
              buocSuPham: '2.1. Đề mục 1: Khám phá Hình tròn và Tâm O (Kĩ thuật Khăn trải bàn & Quan sát trực tiếp SGK)',
              hinhAnhSGK: {
                tenHinh: 'Hình 1: Mặt đồng hồ và Hình tròn tâm O (SGK Toán 3 - Trang 45)',
                moTa: 'Tranh vẽ chú Robot giới thiệu mặt đồng hồ tròn và hình tròn tâm O trên bảng ô vuông.',
                imageUrl: '/sgk-images/toan-3-hinh-tron-tam-o.png',
                cauHoiKhaiThac: [
                  '1. Quan sát Hình 1 trong SGK: Em hãy chỉ ra điểm O nằm ở vị trí nào của hình tròn?',
                  '2. Điểm O có phải là điểm chính giữa của hình tròn không?'
                ]
              },
              cot1Trai: '- GV hướng dẫn HS quan sát Hình 1 trong SGK Toán 3 trang 45 (chiếu ảnh SGK trực tiếp trên bảng).\n- Đặt câu hỏi khai thác tranh ảnh SGK:\n  + "Quan sát Hình 1 trong SGK: Điểm O nằm ở vị trí nào của hình tròn?"\n  + "Hãy dùng bút chì chấm điểm O trên hình vẽ SGK."\n- [KĨ THUẬT KHĂN TRẢI BÀN]: GV phát cho mỗi bàn một hình tròn giấy màu, yêu cầu cá nhân gấp đôi tờ giấy 2 lần để tìm giao điểm nếp gấp.\n- [TÍCH HỢP NĂNG LỰC SỐ - Mã 3.1.CB1a]: GV mời HS lên bảng tương tác chạm ngón tay kéo thả thước đo ảo xác định điểm chính giữa (Tâm O).\n- [BẢO VỆ AN NINH QUỐC PHÒNG (TT 08/2024/TT-BGDĐT)]: GV chiếu biểu tượng ngôi sao vàng và hoa văn Trống đồng Đông Sơn nằm trong hình tròn Quốc huy Việt Nam, khẳng định niềm tự hào dân tộc và chủ quyền thiêng liêng.',
              cot2Phai: '- [HỌC SINH TỰ LĨNH HỘI TRI THỨC - LẤY HỌC SINH LÀM TRUNG TÂM]:\n  + HS chủ động mở SGK trang 45, chỉ tay vào Hình 1 và trả lời: "Điểm O nằm chính giữa hình tròn".\n  + Thực hành cá nhân và cặp đôi: Gấp đôi tờ giấy tròn 2 lần, miết nhẹ nếp gấp rồi mở ra. Phát hiện giao điểm 2 nếp gấp chính là Tâm O.\n  + HS tự rút ra kết luận: "Tâm O là điểm chính giữa của hình tròn."\n- [Ý THỨC QUỐC PHÒNG]: HS chăm chú lắng nghe, thêm yêu quê hương đất nước và tự hào về truyền thống bảo vệ Tổ quốc.'
            }
          ]
        },
        {
          id: 'hd-toan3-2-2',
          soThuTu: 2,
          tenHoatDong: 'Hoạt động 2.2: Khám phá Bán kính, Đường kính và Mối quan hệ d = 2 x r (Đề mục 2 SGK Toán 3 - Trang 46)',
          thoiLuong: '12 phút',
          deMucSGK: '2. Khám phá Bán kính và Đường kính',
          mucTieu: 'Nhận biết bán kính, đường kính; tự đo đạc trên SGK và phát hiện mối quan hệ: đường kính dài gấp 2 lần bán kính (d = 2 x r, r = d : 2). Phát huy tinh thần hợp tác nhóm 4 vai trò 4 màu mực.',
          noiDung: 'HS quan sát Hình 2 SGK trang 46, dùng thước kẻ đo đoạn OM, OA, OB, AB; làm việc nhóm 4 vai trò (4 màu mực) ghi vào phiếu nhóm A3.',
          sanPham: 'Phiếu học tập nhóm A3 có đủ 4 màu mực của 4 thành viên; công thức vàng d = 2 x r và r = d : 2 được ghi nhớ sâu sắc.',
          hoatDongNhomTichCuc: HOAT_DONG_NHOM_TIEU_HOC,
          bangHaiCot: [
            {
              id: 'row-2-2',
              buocSuPham: '2.2. Đề mục 2: Khám phá Bán kính và Đường kính (Kĩ thuật Mảnh ghép & Thảo luận nhóm 4 vai trò)',
              hinhAnhSGK: {
                tenHinh: 'Hình 2: Bán kính OM và Đường kính AB (SGK Toán 3 - Trang 46)',
                moTa: 'Sơ đồ hình tròn tâm O, đoạn thẳng OM (Bán kính) và đoạn thẳng AB qua tâm O (Đường kính).',
                imageUrl: '/sgk-images/toan-3-ban-kinh-duong-kinh.png',
                cauHoiKhaiThac: [
                  '1. Đoạn thẳng OM nối từ đâu đến đâu? Đoạn thẳng AB có đi qua tâm O không?',
                  '2. Dùng thước đo độ dài OA, OB và AB: Em có nhận xét gì về mối quan hệ giữa AB và OA?'
                ]
              },
              cot1Trai: '- GV hướng dẫn HS quan sát Hình 2 trong SGK trang 46: Đoạn thẳng OM và đoạn thẳng AB.\n- [HOẠT ĐỘNG THẢO LUẬN NHÓM 4 VAI TRÒ (4 MÀU MỰC)]: GV chuyển giao nhiệm vụ phiếu học tập:\n  + Nhóm trưởng (Mực xanh): Điều phối đo bán kính OM, OA, OB.\n  + Thư ký (Mực đen): Ghi số đo độ dài bán kính và đường kính.\n  + Kỹ thuật viên (Mực tím): Dùng thước kiểm tra vị trí điểm O trên đoạn thẳng AB.\n  + Báo cáo viên (Mực xanh lá): So sánh độ dài đường kính AB với bán kính OA, OB.\n- GV đi từng bàn gợi ý, quan sát và khích lệ các em rụt rè tự cầm thước đo.',
              cot2Phai: '- [HỌC SINH TỰ LĨNH HỘI TRI THỨC - LẤY HỌC SINH LÀM TRUNG TÂM]:\n  + Từng cá nhân quan sát Hình 2 SGK, dùng thước có vạch cm đo trực tiếp trên sách: OM = 2 cm, OA = 2 cm, OB = 2 cm, AB = 4 cm.\n  + Thảo luận nhóm sôi nổi, ghi nhận bằng 4 màu mực:\n    * Tâm O là trung điểm của đường kính AB.\n    * Các bán kính trong một hình tròn đều có độ dài bằng nhau: OA = OB = OM.\n    * Độ dài đường kính gấp 2 lần độ dài bán kính (AB = 2 x OA, công thức: d = 2 x r).\n  + Đại diện nhóm tự tin giơ thẻ hoa báo cáo kết quả trước lớp.'
            }
          ]
        },
        {
          id: 'hd-toan3-2-3',
          soThuTu: 2,
          tenHoatDong: 'Hoạt động 2.3: Kỹ thuật sử dụng compa vẽ hình tròn & Sơ đồ tư duy 16:9 3D Pixar (Đề mục 3 SGK Toán 3)',
          thoiLuong: '12 phút',
          deMucSGK: '3. Kỹ thuật sử dụng Com-pa & Chuẩn hóa kiến thức',
          mucTieu: 'Nắm vững quy trình 3 bước sử dụng compa vẽ hình tròn có bán kính cho trước; hệ thống hóa toàn bộ kiến thức bằng Sơ đồ tư duy 16:9 3D Pixar sinh động.',
          noiDung: 'HS quan sát Hình 3 SGK, thao tác cầm compa vẽ hình tròn tâm O bán kính 3cm; quan sát Sơ đồ tư duy 16:9 trên màn hình và tóm tắt vào vở.',
          sanPham: 'Hình tròn tâm O bán kính 3cm vẽ tròn đều, đúng tâm trong vở bài học; sơ đồ tư duy 16:9 3D Pixar được khắc sâu trong tâm trí học sinh.',
          bangHaiCot: [
            {
              id: 'row-2-3',
              buocSuPham: '2.3. Đề mục 3: Kỹ thuật sử dụng Com-pa vẽ hình tròn (Phương pháp Thực hành trực quan & Đánh giá đồng đẳng)',
              hinhAnhSGK: {
                tenHinh: 'Hình 3: Quy trình 3 bước dùng Com-pa vẽ hình tròn (SGK Toán 3 - Trang 46)',
                moTa: 'Sơ đồ chỉ dẫn 3 bước: Mở compa 3cm -> Cắm chân kim tại tâm O -> Giữ đỉnh và quay đầu chì 1 vòng.',
                imageUrl: '/sgk-images/toan-3-thao-tac-compa.png',
                cauHoiKhaiThac: [
                  '1. Hãy nêu 3 bước quay compa theo hình vẽ chỉ dẫn trong SGK?',
                  '2. Để compa không bị trượt hoặc thay đổi bán kính, tay cần giữ ở vị trí nào?'
                ]
              },
              cot1Trai: '- GV cho HS quan sát Hình 3 trong SGK vẽ cấu tạo chiếc com-pa và sơ đồ 3 bước quay hình tròn tâm O bán kính 3cm.\n- GV thao tác mẫu chậm rãi kết hợp hướng dẫn 3 bước chuẩn:\n  + Bước 1: Mở khẩu độ compa bằng 3cm trên thước kẻ.\n  + Bước 2: Đặt chân kim tại điểm O (tâm).\n  + Bước 3: Giữ chặt đỉnh, xoay nhẹ đầu chì 1 vòng khép kín.\n- [KĨ THUẬT ĐÁNH GIÁ ĐỒNG ĐẲNG]: Cho HS tự vẽ rồi đổi bài kiểm tra chéo cho bạn cùng bàn theo tiêu chí: đúng tâm, đúng bán kính, nét vẽ tròn đều khép kín.\n- Nhắc nhở an toàn: Có bọc bảo vệ chân kim compa.',
              cot2Phai: '- [HỌC SINH TỰ THAO TÁC & LĨNH HỘI KỸ NĂNG]:\n  + HS quan sát sơ đồ 3 bước trong SGK và thao tác của cô giáo.\n  + Tự tay cầm compa thực hành trên giấy: Mở đúng 3cm trên thước, cắm tâm O và xoay compa nhẹ nhàng 1 vòng tròn khép kín.\n  + Đổi chéo vở cho bạn cùng bàn kiểm tra và chấm sao khen ngợi nhau.\n  + 2 HS xung phong lên bảng vẽ hình tròn biểu diễn trước lớp.'
            },
            {
              id: 'row-2-4',
              buocSuPham: '2.4. Kết luận kiến thức & Sơ đồ tư duy 16:9 3D Pixar (Chuẩn hóa kiến thức cốt lõi)',
              cot1Trai: '- GV chuẩn hóa toàn bộ kiến thức về hình tròn, chiếu SƠ ĐỒ TƯ DUY 16:9 phong cách hoạt hình 3D Pixar lên bảng tương tác.\n- Cho học sinh cả lớp cùng đọc to và ghi nhớ quy tắc vàng:\n  + Tâm O là điểm chính giữa hình tròn.\n  + Tất cả các bán kính đều bằng nhau (OA = OB = OM = r).\n  + Độ dài đường kính gấp 2 lần độ dài bán kính (d = 2 x r).\n- [KHẮC SÂU TRỰC QUAN]: GV hướng dẫn học sinh liên kết hình ảnh sơ đồ tư duy 3D với các đồ vật thực tế xung quanh.',
              cot2Phai: '- [HỌC SINH TỰ LĨNH HỘI & KHẮC SÂU KIẾN THỨC]:\n  + Quan sát Sơ đồ tư duy 16:9 3D Pixar, tự ghi nhớ 4 nhánh kiến thức cốt lõi vào vở ghi.\n  + Đồng thanh nhắc lại công thức: "Đường kính bằng 2 lần bán kính: d = 2 x r (r = d : 2)".\n  + Tự tin giải thích mối quan hệ giữa tâm, bán kính và đường kính.',
              soDoTuDuy: {
                id: 'sdd-toan-3-hinh-tron',
                chuDeChinh: 'HÌNH TRÒN & TÂM - BÁN KÍNH - ĐƯỜNG KÍNH',
                moTaChuDe: 'Kiến thức cốt lõi Toán 3: Tâm O chính giữa, các bán kính bằng nhau, d = 2 x r',
                tiLe: '16:9',
                phongCach: '3D Pixar',
                imageUrl: '/mindmaps/mindmap-toan-3-hinh-tron.jpg',
                ghiChuKetLuan: 'GV sử dụng Sơ đồ tư duy 16:9 3D Pixar để chốt kiến thức, đảm bảo học sinh không thụ động, ghi nhớ sâu công thức d = 2 x r.',
                monHoc: 'Toán học',
                thuatNguChuan: ['Tâm O', 'Bán kính r', 'Đường kính d', 'd = 2 x r', 'r = d : 2'],
                danhSachNhanh: [
                  {
                    id: 'n1',
                    tieuDe: '1. Tâm O của hình tròn',
                    mauSac: '#3b82f6',
                    icon3D: '🎯',
                    congThuc: 'Điểm chính giữa hình tròn',
                    cacYCon: [
                      'Điểm O nằm chính giữa hình tròn',
                      'Giao điểm của 2 nếp gấp đôi hình tròn',
                      'Tâm O là trung điểm của mọi đường kính'
                    ]
                  },
                  {
                    id: 'n2',
                    tieuDe: '2. Bán kính hình tròn (r)',
                    mauSac: '#10b981',
                    icon3D: '📏',
                    congThuc: 'OM = OA = OB = r',
                    cacYCon: [
                      'Đoạn thẳng nối từ tâm O đến 1 điểm trên đường tròn',
                      'Trong một hình tròn, tất cả các bán kính đều bằng nhau',
                      'Ký hiệu bán kính thường là r'
                    ]
                  },
                  {
                    id: 'n3',
                    tieuDe: '3. Đường kính hình tròn (d)',
                    mauSac: '#f59e0b',
                    icon3D: '📐',
                    congThuc: 'd = 2 x r (r = d : 2)',
                    cacYCon: [
                      'Đoạn thẳng đi qua tâm O và nối 2 điểm trên đường tròn',
                      'Độ dài đường kính gấp 2 lần độ dài bán kính',
                      'Tâm O là trung điểm của đoạn thẳng đường kính AB'
                    ]
                  },
                  {
                    id: 'n4',
                    tieuDe: '4. Kỹ thuật vẽ bằng Com-pa',
                    mauSac: '#ec4899',
                    icon3D: '✏️',
                    congThuc: 'Quy trình 3 bước chuẩn',
                    cacYCon: [
                      'Bước 1: Mở compa đúng bán kính trên thước kẻ',
                      'Bước 2: Cắm chân kim tại tâm O',
                      'Bước 3: Giữ đỉnh, xoay nhẹ đầu chì 1 vòng khép kín'
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'hd-3',
          soThuTu: 3,
          tenHoatDong: 'Hoạt động 3: Luyện tập, thực hành',
          thoiLuong: '13 phút',
          mucTieu: 'Rèn kỹ năng nhận dạng tâm, bán kính, đường kính trong các hình vẽ phức hợp và vẽ thành thạo hình tròn bằng compa.',
          bangHaiCot: [
            {
              id: 'row-3-1',
              buocSuPham: 'Bài tập 1: Xác định thành phần hình tròn & Rèn nếp học tập an toàn',
              cot1Trai: '- [TÍCH HỢP NĂNG LỰC SỐ - Mã 4.3.CB1a]: Trước khi làm bài, GV nhắc nhở: "Các em hãy ngồi thẳng lưng, giữ khoảng cách mắt từ 40-50cm với màn hình máy chiếu/bảng con để bảo vệ thị giác học đường."\n- GV chiếu hình vẽ Bài tập 1 lên slide với các đoạn thẳng nối chéo nhau.\n- Cho HS dùng thẻ trắc nghiệm A-B-C chọn đường kính và bán kính.\n- GV chữa bài, củng cố kiến thức.',
              cot2Phai: '- HS nhanh chóng điều chỉnh tư thế ngồi học ngay ngắn, giữ khoảng cách an toàn cho mắt.\n- Quan sát hình vẽ trên màn hình số, làm việc cá nhân và giơ thẻ chọn đáp án:\n  + Bán kính: OM, ON, OP, OQ.\n  + Đường kính: MN, PQ.\n  + Đoạn CD không phải đường kính vì không đi qua tâm O.'
            },
            {
              id: 'row-3-2',
              buocSuPham: 'Bài tập 2: Vẽ hình tròn & Lồng ghép Dinh dưỡng học đường',
              cot1Trai: '- GV yêu cầu HS thực hành vẽ vào vở:\n  a) Vẽ hình tròn tâm I, bán kính 2 cm.\n  b) Vẽ hình tròn tâm K, đường kính 6 cm.\n- [LỒNG GHÉP GIÁO DỤC DINH DƯỠNG]: GV chiếu hình ảnh "Đĩa thức ăn dinh dưỡng cân đối": "Một chiếc đĩa ăn hình tròn tiêu chuẩn được chia thành 4 phần cân đối. Để cơ thể cao lớn, khỏe mạnh và phòng ngừa béo phì hoặc suy dinh dưỡng, bữa ăn của các em cần đủ 4 nhóm chất nào?"\n- GV hỗ trợ các em cầm compa.',
              cot2Phai: '- HS cẩn thận vẽ hình tròn vào vở theo đúng số đo bán kính.\n- [Ý THỨC DINH DƯỠNG]: HS hào hứng thảo luận: "Bữa ăn hàng ngày của em cần có đủ 4 nhóm thực phẩm: Nhóm bột đường (cơm, khoai), Nhóm đạm (thịt, cá, trứng), Nhóm chất béo và Nhóm vitamin, khoáng chất (rau xanh, củ quả tươi) để có một cơ thể khỏe mạnh!"'
            }
          ]
        },
        {
          id: 'hd-4',
          soThuTu: 4,
          tenHoatDong: 'Hoạt động 4: Vận dụng, trải nghiệm',
          thoiLuong: '5 phút',
          mucTieu: 'Khắc sâu kiến thức, vận dụng tạo hình bông hoa 6 cánh từ các cung tròn và tổng kết bài học.',
          bangHaiCot: [
            {
              id: 'row-4-1',
              buocSuPham: 'Thử thách: Họa sĩ nhí sáng tạo & Tái chế xanh',
              cot1Trai: '- [GIÁO DỤC STEM & BẢO VỆ MÔI TRƯỜNG]: GV hướng dẫn: "Các em hãy tận dụng nắp chai nhựa phế thải hình tròn và compa để vẽ các cung tròn tạo thành bông hoa 6 cánh, trang trí góc học tập xanh của gia đình."\n- Dặn dò làm bài tập trong vở bài tập Toán và tìm kiếm 3 đồ vật hình tròn trong nhà.\n- Tuyên dương tinh thần học tập tích cực của cả lớp.',
              cot2Phai: '- HS trầm trồ thích thú trước họa tiết bông hoa hình tròn kỳ diệu.\n- HS ghi nhận nhiệm vụ về nhà sáng tạo sản phẩm tái chế từ nắp chai nhựa phế thải để góp phần bảo vệ môi trường trường học xanh - sạch - đẹp.\n- Cả lớp tự đánh giá mức độ hiểu bài bằng biểu tượng mặt cười.'
            }
          ]
        }
      ],
      dieuChinhSauBaiDay: '..................................................................................................................................................\n..................................................................................................................................................\n..................................................................................................................................................'
    },
    slideDeck: {
      themeId: '3d-pixar',
      themeConfig: SLIDE_THEMES['3d-pixar'],
      slides: [
        {
          id: 'slide-1',
          slideNumber: 1,
          slideType: 'TITLE_SLIDE',
          title: 'HÌNH TRÒN, TÂM, ĐƯỜNG KÍNH, BÁN KÍNH',
          subtitle: 'Môn Toán Lớp 3 • Bộ Sách Kết Nối Tri Thức Với Cuộc Sống',
          stageBadge: 'Trang Bìa',
          visualLayout: 'Full Center Hero',
          bulletPoints: [
            'Khám phá thế giới hình học kỳ diệu',
            'Làm quen với bạn Com-pa thông thái',
            'Sáng tạo họa tiết hình tròn vui nhộn'
          ],
          aiImagePrompt: 'Pixar 3D style cute Vietnamese primary students holding colorful giant compass drawing glowing magical circles in a joyful modern classroom, bright warm pastel colors, soft studio lighting, 8k render',
          animationsAndTransitions: {
            slideTransition: 'Curtains (Mở màn sân khấu rực rỡ)',
            elementAnimations: [
              'Tiêu đề chính: Bounce In (Nảy lên vui nhộn 0.6s)',
              'Subtitle: Fade In từ từ kèm huy hiệu lớp học',
              'Nhân vật hoạt hình dẫn chuyện: Float In từ góc dưới bên phải'
            ]
          },
          speakerNotes: 'Nhiệt liệt chào mừng các thầy cô giáo về dự giờ thăm lớp 3A hôm nay! Các con hãy cùng ngồi thật ngay ngắn, chuẩn bị com-pa và thước kẻ để bước vào hành trình phiêu lưu cùng hình tròn nhé!'
        },
        {
          id: 'slide-2',
          slideNumber: 2,
          slideType: 'OBJECTIVE',
          title: 'MỤC TIÊU TIẾT HỌC HÔM NAY',
          subtitle: 'Những điều tuyệt vời chúng mình sẽ chinh phục:',
          stageBadge: 'Mục Tiêu',
          visualLayout: '3-Card Bento Grid',
          bulletPoints: [
            '🎯 Nhận biết chính xác Tâm O, Bán kính (r) và Đường kính (d)',
            '📏 Nắm vững bí mật: Độ dài Đường kính gấp 2 lần Bán kính (d = 2 x r)',
            '✍️ Sử dụng thành thạo Com-pa để vẽ các đường tròn chuẩn đẹp'
          ],
          boardContent: 'MỤC TIÊU: Tâm O | Bán kính r | Đường kính d = 2 x r | Kỹ năng quay Com-pa',
          aiImagePrompt: '3D cute cartoon compass and ruler smiling with golden stars and achievement badge, pastel claymation style, high detail',
          animationsAndTransitions: {
            slideTransition: 'Morph (Biến đổi mượt mà)',
            elementAnimations: [
              'Thẻ 1 (Kiến thức): Pop up với hiệu ứng nảy nhẹ',
              'Thẻ 2 (Công thức): Zoom in nhẹ nhàng kèm ngôi sao lấp lánh',
              'Thẻ 3 (Kỹ năng): Trượt từ phải sang trái'
            ]
          },
          speakerNotes: 'Sau tiết học này, mỗi bạn nhỏ sẽ trở thành một kỹ sư nhí biết cầm compa xoay những đường tròn tuyệt đẹp và giải mã được công thức liên hệ giữa đường kính và bán kính.'
        },
        {
          id: 'slide-3',
          slideNumber: 3,
          slideType: 'ACTIVITY_INTRO',
          title: 'HOẠT ĐỘNG 1: KHỞI ĐỘNG VUI VẺ',
          subtitle: 'Trò chơi: "Bánh Xe Phiêu Lưu"',
          stageBadge: 'Khởi động',
          visualLayout: '2-Column Split',
          bulletPoints: [
            '🚗 Chiếc xe bánh vuông: Chạy gập ghềnh, xóc nảy!',
            '🚲 Chiếc xe bánh tròn: Lăn bánh êm ru, bon bon trên đường!',
            '❓ Bí mật gì khiến hình tròn lăn được kỳ diệu như vậy?'
          ],
          boardContent: 'Đồ vật hình tròn quanh ta: Đồng hồ, nắp chai, bánh xe, đồng xu...',
          aiImagePrompt: 'Side-by-side comparison in 3D cute cartoon style: a funny car with square wheels bouncing awkwardly vs a sleek bright bicycle with perfect round glowing wheels rolling smoothly',
          animationsAndTransitions: {
            slideTransition: 'Push (Trượt sang phải năng động)',
            elementAnimations: [
              'Bánh xe vuông: Lắc lư lắc lư (Shake animation)',
              'Bánh xe tròn: Quay tròn liên tục (Spin animation mượt mà)'
            ]
          },
          speakerNotes: 'Các con thấy không, nếu bánh xe là hình tam giác hay hình vuông thì chúng ta đi học sẽ bị sóc nảy thế nào nhỉ? Đúng rồi! Nhờ không có góc cạnh và khoảng cách từ tâm đến mọi điểm đều bằng nhau nên bánh xe tròn mới lăn bon bon.'
        },
        {
          id: 'slide-4',
          slideNumber: 4,
          slideType: 'KNOWLEDGE_SPLIT',
          title: 'HOẠT ĐỘNG 2: KHÁM PHÁ BÍ MẬT HÌNH TRÒN',
          subtitle: 'Cấu tạo cốt lõi của hình tròn',
          stageBadge: 'Khám phá',
          visualLayout: '2-Column Split',
          bulletPoints: [
            '🔴 TÂM O: Điểm chính giữa hình tròn (trung điểm của đường kính)',
            '🔵 BÁN KÍNH (OM, OA, OB): Đoạn thẳng nối từ TÂM ra đường viền tròn',
            '🟢 ĐƯỜNG KÍNH (AB): Đoạn thẳng ĐI QUA TÂM O nối 2 điểm trên hình tròn',
            '⚡ BẬT MÍ QUAN TRỌNG: Độ dài Đường kính = 2 x Bán kính (d = 2 x r)'
          ],
          boardContent: 'HÌNH TRÒN TÂM O\n• Bán kính: OM = OA = OB = r\n• Đường kính: AB = d\n• Nhận xét: AB = 2 x OA (d = 2 x r)',
          aiImagePrompt: 'Clean educational 3D diagram of a circle with glowing center point labeled O, colorful radius lines radiating outwards, and a bold diameter line cutting through center, modern soft pastel scheme',
          animationsAndTransitions: {
            slideTransition: 'Morph (Phóng to chi tiết sơ đồ)',
            elementAnimations: [
              'Chấm tâm O: Xuất hiện trước tiên với hiệu ứng Pulse (nhấp nháy)',
              'Bán kính OM: Vẽ từ tâm vươn ra ngoài (Wipe from center)',
              'Đường kính AB: Kẻ xuyên qua tâm O đổi màu nổi bật',
              'Hộp công thức (d = 2r): Zoom phóng to viền vàng rực rỡ'
            ]
          },
          speakerNotes: 'Các con ghi nhớ quy tắc vàng nhé: Bán kính giống như nan hoa xe đạp tỏa từ tâm ra, còn đường kính thì phải BẮT BUỘC ĐI QUA TÂM O và dài gấp đôi bán kính!'
        },
        {
          id: 'slide-5',
          slideNumber: 5,
          slideType: 'KNOWLEDGE_SPLIT',
          title: 'HƯỚNG DẪN 3 BƯỚC QUAY COM-PA CHUẨN ĐẸP',
          subtitle: 'Kỹ năng vàng của nhà thiết kế nhí',
          stageBadge: 'Khám phá',
          visualLayout: '3-Card Bento Grid',
          bulletPoints: [
            'Bước 1: Mở khẩu độ compa đúng độ dài bán kính trên thước (VD: 3cm)',
            'Bước 2: Cắm chân kim nhọn chắc chắn tại điểm chọn làm TÂM O',
            'Bước 3: Cầm đỉnh núm xoay, quay nhẹ đầu chì 1 vòng khép kín đều tay'
          ],
          boardContent: 'Cách vẽ: 1. Đo độ dài r -> 2. Cắm kim tại tâm -> 3. Quay compa 1 vòng tròn',
          aiImagePrompt: 'Step by step 3D infographic illustration of cute hands demonstrating compass usage: measuring against ruler, planting needle gently on paper, rotating pencil tip smoothly',
          animationsAndTransitions: {
            slideTransition: 'Page Curl (Lật trang sách cổ tích)',
            elementAnimations: [
              'Bước 1, 2, 3 lần lượt sáng đèn theo từng nhịp bấm chuột của giáo viên'
            ]
          },
          speakerNotes: 'Lưu ý khi quay compa: Tay chúng ta chỉ cầm ở núm trên cùng, không cầm vào 2 càng kim để tránh làm thay đổi độ dài bán kính nhé!'
        },
        {
          id: 'slide-6',
          slideNumber: 6,
          slideType: 'INTERACTIVE_QUIZ',
          title: 'HOẠT ĐỘNG 3: TRẮC NGHIỆM ĐỐ VUI THÔNG THÁI',
          subtitle: 'Chọn đáp án chính xác nhất để nhận sao vàng!',
          stageBadge: 'Luyện tập',
          visualLayout: 'Quiz Layout',
          bulletPoints: [
            'Câu hỏi: Nếu bán kính của một hình tròn là 4 cm, thì đường kính của hình tròn đó dài bao nhiêu cm?',
            'A. 2 cm',
            'B. 4 cm',
            'C. 8 cm (Đáp án đúng!)',
            'D. 16 cm'
          ],
          boardContent: 'Đường kính = Bán kính x 2 = 4 cm x 2 = 8 cm',
          aiImagePrompt: 'Gamified quiz board with cute 3D treasure chest and floating gold stars, joyful classroom quiz vibe',
          animationsAndTransitions: {
            slideTransition: 'Push',
            elementAnimations: [
              'Các đáp án bay lên từ dưới',
              'Khi click đáp án C: Nở hoa pháo giấy confetti và biến thành màu xanh lá lá rực rỡ'
            ]
          },
          speakerNotes: 'Cả lớp cùng suy nghĩ trong 10 giây và giơ thẻ đáp án nào! 3... 2... 1... Rất tuyệt vời! Đa số các bạn chọn đáp án C là 8cm vì 4 x 2 = 8cm!'
        },
        {
          id: 'slide-7',
          slideNumber: 7,
          slideType: 'SUMMARY',
          title: 'HOẠT ĐỘNG 4: VẬN DỤNG & DẶN DÒ',
          subtitle: 'Họa sĩ tài ba với những vòng tròn sắc màu',
          stageBadge: 'Vận dụng',
          visualLayout: '2-Column Split',
          bulletPoints: [
            '🌸 Thử thách sáng tạo: Vẽ bông hoa 6 cánh và trang trí mặt đồng hồ',
            '🏡 Tìm 3 đồ vật trong nhà có đường kính lớn hơn 10 cm',
            '⭐ Tuyên dương cả lớp đã tham gia tiết học sôi nổi, chuẩn xác!'
          ],
          boardContent: 'Về nhà: Hoàn thành vở bài tập trang 111 & Sáng tạo bức tranh vòng tròn nghệ thuật',
          aiImagePrompt: 'Beautiful artistic pattern of interlocking pastel circles creating a rainbow flower mandala, cute 3D clay style',
          animationsAndTransitions: {
            slideTransition: 'Fade',
            elementAnimations: [
              'Huy hiệu sao vàng bay ra giữa màn hình',
              'Dòng chữ Cảm ơn thầy cô giáo hiện lên trang trọng'
            ]
          },
          speakerNotes: 'Tiết học hôm nay của chúng ta đến đây là kết thúc. Thầy/cô chúc các em luôn yêu thích môn Toán và sáng tạo ra những bức tranh tuyệt đẹp từ chiếc compa nhé!'
        }
      ]
    },
    quizGame: [
      {
        id: 'q1',
        question: 'Điểm nằm chính giữa hình tròn được gọi là gì?',
        options: ['Tâm của hình tròn', 'Bán kính của hình tròn', 'Đường kính của hình tròn', 'Chu vi của hình tròn'],
        correctIndex: 0,
        explanation: 'Điểm nằm ở chính giữa hình tròn gọi là Tâm. Mọi điểm trên đường tròn đều cách đều tâm này!',
        funFact: 'Trái Đất của chúng ta cũng có một tâm hình học ở sâu trong lòng đất!'
      },
      {
        id: 'q2',
        question: 'Đoạn thẳng nối tâm với một điểm bất kỳ trên hình tròn gọi là gì?',
        options: ['Đường cong', 'Bán kính', 'Đường kính', 'Cạnh đáy'],
        correctIndex: 1,
        explanation: 'Đoạn thẳng nối tâm với một điểm trên hình tròn gọi là Bán kính (ký hiệu là r).',
        funFact: 'Các nan hoa xe đạp chính là các mô hình thực tế của bán kính!'
      },
      {
        id: 'q3',
        question: 'Nếu bán kính của hình tròn là 5 cm, thì đường kính của nó dài bao nhiêu?',
        options: ['2.5 cm', '5 cm', '10 cm', '15 cm'],
        correctIndex: 2,
        explanation: 'Trong một hình tròn, độ dài đường kính gấp 2 lần độ dài bán kính: 5 x 2 = 10 cm.',
        funFact: 'Công thức này áp dụng cho mọi hình tròn trong vũ trụ!'
      },
      {
        id: 'q4',
        question: 'Dụng cụ chuyên dùng trong học tập để vẽ hình tròn là gì?',
        options: ['Thước đo góc', 'Com-pa', 'Thước ê-ke', 'Kính lúp'],
        correctIndex: 1,
        explanation: 'Com-pa là dụng cụ hình học có một chân kim và một chân bút dùng để vẽ hình tròn chuẩn xác.',
        funFact: 'Chiếc compa đã được các nhà toán học Hy Lạp cổ đại phát minh từ hơn 2000 năm trước!'
      }
    ]
  },
  'thcs-toan-6': {
    giaoAn: {
      metadata: {
        capHoc: 'THCS',
        congVan: '5512/BGDĐT-GDTrH',
        khoiLop: 6,
        boSach: 'Kết nối tri thức với cuộc sống',
        monHoc: 'Toán học (Hình học)',
        tenBaiDay: 'BÀI 1: HÌNH CÓ TRỤC ĐỐI XỨNG (Tiết 1)',
        soTiet: '1 tiết',
        tietTheoPPCT: 'Tiết 38',
        thoiLuong: '45 phút',
        siSoLop: '40 học sinh (Chia 8 nhóm, mỗi nhóm 5 em)',
        dacDiemHocSinh: 'Có một số em thụ động, ngại phát biểu, thường phụ thuộc vào bạn học khá',
        tuanThucHien: 'Tuần 10',
        truong: 'Trường THCS Chu Văn An',
        toChuyenMon: 'Tổ Toán - Tin học',
        giaoVien: '',
        ngayThucHien: 'Tháng 11 năm 2026',
        tichHop: {
          nangLucSo: true,
          stem: true,
          anToanGiaoThong: true,
          kyNangSong: false,
          baoVeMoiTruong: false,
          quocPhongAnNinh: true,
          dinhDuongSucKhoe: false,
        }
      },
      mucTieu: {
        kienThuc: [
          'Nhận biết được hình có trục đối xứng và trục đối xứng của một hình.',
          'Chỉ ra được trục đối xứng của các hình phẳng quen thuộc (hình đoạn thẳng, tam giác đều, hình vuông, hình chữ nhật, hình thoi, hình tròn).',
          'Nhận biết được tính đối xứng trục trong tự nhiên, nghệ thuật, kiến trúc và đời sống thực tế.'
        ],
        nangLucDacThu: [
          'Năng lực tư duy và lập luận toán học: Quan sát, so sánh và phát hiện sự trùng khít khi gấp đôi một hình phẳng.',
          'Năng lực mô hình hóa toán học: Vận dụng khái niệm trục đối xứng để phân tích các biểu trưng (logo), biển báo giao thông, họa tiết hoa văn dân tộc.',
          'Năng lực giải quyết vấn đề toán học: Xác định số lượng trục đối xứng của từng đa giác đều.'
        ],
        nangLucChung: {
          tuChuTuHoc: ['Chủ động chuẩn bị các hình mẫu cắt sẵn bằng giấy màu, thước kẻ và đọc trước sách giáo khoa.'],
          giaoTiepHopTac: ['Thảo luận nhóm 4 học sinh, phân công nhiệm vụ gấp giấy và phản biện kết quả xác định trục đối xứng.'],
          giaiQuyetVanDe: ['Sáng tạo các mẫu cắt giấy hình đối xứng (con bướm, bông tuyết, trái tim) ứng dụng trong trang trí.']
        },
        nangLucSo: [
          {
            maChiBao: '1.1.TC1b',
            tenLinhVuc: 'Duyệt, tìm kiếm và lọc dữ liệu, thông tin số',
            bieuHien: 'Tự thực hiện tìm kiếm và thu thập ảnh tư liệu thực tế về các công trình kiến trúc (Khuê Văn Các, Tháp Rùa) và biển báo giao thông có trục đối xứng trong môi trường số theo quy trình rõ ràng.'
          },
          {
            maChiBao: '3.1.TC1a',
            tenLinhVuc: 'Phát triển nội dung số',
            bieuHien: 'Tạo lập sản phẩm số tóm tắt bài học (Bento Card / Infographic sơ đồ số trục đối xứng) bằng phần mềm trình chiếu PowerPoint.'
          },
          {
            maChiBao: '5.2.TC1a',
            tenLinhVuc: 'Xác định nhu cầu và giải pháp công nghệ',
            bieuHien: 'Tự lựa chọn và sử dụng phần mềm hình học động GeoGebra để kiểm chứng trực quan phép biến hình phản chiếu qua trục của các đa giác đều.'
          }
        ],
        phamChat: {
          yeuNuoc: ['Tự hào trước vẻ đẹp kiến trúc truyền thống có trục đối xứng của dân tộc như Khuê Văn Các, Chùa Một Cột, Cổng Ngọ Môn Huế.'],
          nhanAi: ['Tôn trọng các góc nhìn khác nhau của các bạn trong lớp khi tìm trục đối xứng nghiêng.'],
          chamChi: ['Tỉ mỉ, kiên nhẫn khi thực hiện các đường gấp giấy và kẻ đường dóng đối xứng.'],
          trungThuc: ['Ghi chép trung thực số trục đối xứng đo đạc được, không suy đoán tùy tiện.'],
          trachNhiem: ['Có ý thức tuân thủ biển báo giao thông có trục đối xứng khi tham gia giao thông trên đường.']
        },
        tichHopMoRong: [
          'Tích hợp Năng lực số: Trải nghiệm phần mềm GeoGebra trực quan trên bảng tương tác để kiểm tra trục đối xứng qua phép biến hình phản chiếu.',
          'Tích hợp An toàn giao thông: Phân tích trục đối xứng của các biển báo hiệu lệnh, biển cấm và ý nghĩa thị giác giúp người lái xe dễ nhận diện từ xa.',
          'Bảo vệ Quốc phòng và An ninh: Nhận diện biểu trưng Quốc huy Việt Nam và tính đối xứng trang nghiêm trong các biểu tượng an ninh quốc phòng, bồi dưỡng lòng tự hào bảo vệ Tổ quốc.'
        ]
      },
      thietBiDayHoc: {
        giaoVien: [
          'Máy tính xách tay kết nối máy chiếu, bài giảng điện tử PowerPoint Bento Grid 16:9.',
          'Sách giáo khoa điện tử Toán 6 (NXB Giáo Dục Việt Nam: https://taphuan.nxbgd.vn/tap-huan?grade=6).',
          'Mô hình hình học phẳng mica trong suốt: tam giác đều, hình chữ nhật, hình vuông, hình tròn.',
          'Bộ video clip ngắn về vẻ đẹp đối xứng trong tự nhiên (cánh bướm, chiếc lá, tháp Eiffel, Khuê Văn Các).'
        ],
        hocSinh: [
          'Sách giáo khoa Toán 6 (Bộ Kết nối tri thức với cuộc sống - Bộ GD&ĐT).',
          'Dụng cụ học tập: Giấy màu A5 đã cắt sẵn các hình phẳng (tam giác cân, hình vuông, chữ nhật, tròn), kéo thủ công an toàn, thước thẳng chia cm.'
        ]
      },
      tienTrinhDayHoc: [
        {
          id: 'hd-thcs-1',
          soThuTu: 1,
          tenHoatDong: 'Hoạt động 1: Xác định vấn đề / Nhiệm vụ học tập (Khởi động)',
          thoiLuong: '7 phút',
          mucTieu: 'Tạo tình huống có vấn đề từ việc quan sát hình ảnh cánh bướm và chiếc lá gập đôi, kích thích nhu cầu tìm hiểu về tính chất cân đối hoàn hảo trong hình học.',
          noiDung: 'HS quan sát hình ảnh cánh bướm, tháp Rùa, mặt trăng và thực hiện thao tác gấp đôi hình cánh bướm bằng giấy để nhận xét phần viền hai bên.',
          sanPham: 'Câu trả lời của HS chỉ ra khi gấp theo đường chính giữa thì hai nửa cánh bướm trùng khít hoàn toàn lên nhau.',
          bangHaiCot: [
            {
              id: 'row-thcs-1-1',
              buocSuPham: 'Bước 1: Chuyển giao nhiệm vụ (Khởi động đa phương tiện)',
              cot1Trai: '- [TÍCH HỢP NĂNG LỰC SỐ - Mã 1.1.TC1b]: GV hướng dẫn HS truy cập thư mục học liệu số hoặc chiếu lên màn hình ảnh chụp cận cảnh cánh bướm nhiệt đới và Khuê Văn Các tại Văn Miếu.\n- Phát cho mỗi bàn 1 hình cánh bướm bằng giấy.\n- [LỒNG GHÉP AN TOÀN GIAO THÔNG]: Đặt câu hỏi mở đầu: "Ngoài thiên nhiên, các em hãy quan sát các biển báo giao thông trên đường (Biển đường cấm, Biển cấm đi ngược chiều) và cho biết chúng có đặc điểm hình học gì đặc biệt?"',
              cot2Phai: '- HS nhận hình cánh bướm bằng giấy từ GV, làm việc cá nhân trong 2 phút để tìm đường gập chính xác.\n- [Ý THỨC ATGT]: HS phát hiện: "Các biển báo giao thông đều có dạng tròn hoặc tam giác rất cân đối, hai bên giống hệt nhau giúp người lái xe dễ nhận diện từ xa ạ!"'
            },
            {
              id: 'row-thcs-1-2',
              buocSuPham: 'Bước 2: Thực hiện nhiệm vụ',
              cot1Trai: '- GV bao quát lớp học, quan sát HS thực hành gập giấy.\n- Hướng dẫn các HS còn lúng túng điều chỉnh nếp gấp đi dọc theo thân con bướm.',
              cot2Phai: '- HS thực hiện thao tác gấp đôi tờ giấy theo trục dọc sống lưng con bướm.\n- Nhận thấy hai nửa cánh bướm hoàn toàn trùng khít từng hoa văn và viền cánh.'
            },
            {
              id: 'row-thcs-1-3',
              buocSuPham: 'Bước 3: Báo cáo, thảo luận',
              cot1Trai: '- GV gọi đại diện 2 HS lên bảng giơ sản phẩm gấp giấy trước lớp.\n- GV phỏng vấn: "Em có nhận xét gì về nếp gấp vừa tạo ra và hình dạng hai bên nếp gấp?"',
              cot2Phai: '- HS 1: "Thưa thầy, khi gập theo đường thẳng ở giữa thân thì nửa bên trái và nửa bên phải chồng khít lên nhau không bị thừa chút nào ạ."\n- HS 2 bổ sung: "Đường thẳng gập chia con bướm thành hai phần bằng nhau và đối diện nhau."'
            },
            {
              id: 'row-thcs-1-4',
              buocSuPham: 'Bước 4: Kết luận, nhận định',
              cot1Trai: '- GV chuẩn hóa kiến thức: "Đường thẳng tạo bởi nếp gấp đó trong toán học được gọi là TRỤC ĐỐI XỨNG, và hình con bướm được gọi là HÌNH CÓ TRỤC ĐỐI XỨNG. Chúng ta cùng đi sâu vào bài học hôm nay."',
              cot2Phai: '1. Khởi động:\n- Khi gấp đôi hình theo một đường thẳng d, hai nửa của hình trùng khít lên nhau.\n- Đường thẳng d gọi là trục đối xứng.'
            }
          ]
        },
        {
          id: 'hd-toan6-2-1',
          soThuTu: 2,
          tenHoatDong: 'Hoạt động 2.1: Hình có trục đối xứng trong thực tiễn (Đề mục 1 SGK Toán 6 - Trang 50)',
          thoiLuong: '12 phút',
          deMucSGK: '1. Khái niệm Hình có trục đối xứng và Trục đối xứng',
          mucTieu: 'Hiểu bản chất trục đối xứng là đường thẳng chia hình thành 2 nửa trùng khít lên nhau thông qua quan sát hình ảnh cánh bướm và Tháp Rùa trong SGK trang 50.',
          noiDung: 'Đọc SGK trang 50, quan sát Hình 1 và 2, thực hành gấp đôi hình con bướm và biểu tượng Tháp Rùa để kiểm nghiệm đường trục đối xứng.',
          sanPham: 'Định nghĩa chính xác về hình có trục đối xứng trong vở ghi của học sinh; trả lời lưu loát 3 câu hỏi khai thác Hình 1, 2 SGK.',
          bangHaiCot: [
            {
              id: 'row-thcs-2-1',
              buocSuPham: 'Bước 1: Chuyển giao nhiệm vụ Đề mục 1 (Khám phá Khái niệm qua Hình ảnh SGK)',
              hinhAnhSGK: {
                tenHinh: 'Hình 1 & 2: Cánh bướm và Tháp Rùa (SGK Toán 6 - Trang 50)',
                moTa: 'Hình ảnh cánh bướm và Tháp Rùa in bóng đối xứng trục qua đường thẳng d.',
                imageUrl: '/sgk-images/toan-6-canh-buom-thap-rua.png',
                cauHoiKhaiThac: [
                  '1. Khi gấp hình theo đường thẳng d, hai nửa của cánh bướm có vị trí như thế nào?',
                  '2. Rút ra định nghĩa: Thế nào là hình có trục đối xứng?'
                ]
              },
              cot1Trai: '- GV hướng dẫn HS quan sát trực tiếp Hình 1 & 2 trong SGK Toán 6 trang 50 (chiếu trên bảng).\n- [KĨ THUẬT PHÒNG TRANH & MẢNH GHÉP]: GV chia lớp thành các nhóm 4 thành viên (4 màu mực chống thụ động).\n- Đặt câu hỏi khai thác ảnh SGK:\n  + "Khi gấp hình theo đường thẳng d thì hai nửa hình ảnh có trùng khít lên nhau không?"\n  + "Đường thẳng d đó được gọi là gì trong toán học?"\n- Phát bộ hình cánh bướm bằng giấy để HS thực hành gập trực tiếp.',
              cot2Phai: '- [HỌC SINH TỰ LĨNH HỘI TRI THỨC - LẤY HỌC SINH LÀM TRUNG TÂM]:\n  + Quan sát Hình 1 & 2 SGK, tự gấp hình giấy theo nếp dọc thân bướm.\n  + Rút ra kết luận: Hai nửa trùng khít lên nhau hoàn toàn; đường thẳng d gọi là trục đối xứng.'
            }
          ]
        },
        {
          id: 'hd-toan6-2-2',
          soThuTu: 2,
          tenHoatDong: 'Hoạt động 2.2: Trục đối xứng của các hình phẳng quen thuộc (Đề mục 2 SGK Toán 6 - Trang 51)',
          thoiLuong: '15 phút',
          deMucSGK: '2. Trục đối xứng của một số hình phẳng quen thuộc',
          mucTieu: 'Chỉ ra và vẽ được trục đối xứng của đoạn thẳng, tam giác đều, hình vuông, hình chữ nhật, hình tròn. Tích cực hợp tác nhóm 4 vai trò 4 màu mực.',
          noiDung: 'Nhóm 4 thành viên (4 màu mực) nhận mẫu hình phẳng bằng giấy, cùng thực hành gập giấy và đếm số trục đối xứng của từng hình phẳng cơ bản bám sát Hình 3, 4, 5, 6 SGK.',
          sanPham: 'Bảng tổng hợp số lượng và vị trí trục đối xứng của các hình phẳng cơ bản trong vở ghi của HS; Phiếu học tập nhóm A3 có đủ 4 màu mực của 4 thành viên.',
          hoatDongNhomTichCuc: HOAT_DONG_NHOM_THCS,
          bangHaiCot: [
            {
              id: 'row-thcs-2-2',
              buocSuPham: 'Bước 2: Chuyển giao nhiệm vụ Đề mục 2 (Trục đối xứng của các hình phẳng quen thuộc)',
              hinhAnhSGK: {
                tenHinh: 'Hình 3, 4, 5, 6: Trục đối xứng của các hình phẳng (SGK Toán 6 - Trang 51)',
                moTa: 'Sơ đồ trục đối xứng của Đoạn thẳng, Tam giác đều, Hình chữ nhật, Hình vuông và Hình tròn.',
                imageUrl: '/sgk-images/toan-6-cac-hinh-phang-doi-xung.png',
                cauHoiKhaiThac: [
                  '1. Quan sát Hình 4 & 5 SGK: Đếm số trục đối xứng của Tam giác đều và Hình vuông?',
                  '2. Vì sao đường chéo của hình chữ nhật không phải là trục đối xứng?'
                ]
              },
              cot1Trai: '- GV hướng dẫn HS phân tích hệ thống Hình 3, 4, 5, 6 trong SGK trang 51.\n- Giao nhiệm vụ cho 4 nhóm tìm trục đối xứng bằng 4 màu mực:\n  + Nhóm 1: Đoạn thẳng AB và Tam giác đều.\n  + Nhóm 2: Hình chữ nhật (kiểm tra đường chéo).\n  + Nhóm 3: Hình vuông.\n  + Nhóm 4: Hình tròn.\n- GV đi bao quát lớp, đặt câu hỏi đào sâu về trường hợp đường chéo hình chữ nhật.',
              cot2Phai: '- [HỌC SINH TỰ LĨNH HỘI & THỰC HÀNH NHÓM TÍCH CỰC]:\n  + Tự tay gấp các hình phẳng bằng giấy màu, đối chiếu với Hình 3, 4, 5, 6 trong SGK.\n  + Phát hiện: Đường chéo hình chữ nhật gập không trùng khít => Hình chữ nhật chỉ có 2 trục đối xứng.\n  + Hình vuông có 4 trục; Hình tròn có vô số trục qua tâm.\n  + Thư ký tổng hợp kết quả có đủ 4 màu mực vào phiếu nhóm.'
            }
          ]
        },
        {
          id: 'hd-toan6-2-3',
          soThuTu: 2,
          tenHoatDong: 'Hoạt động 2.3: Thực hành gấp giấy kiểm chứng & Sơ đồ tư duy 16:9 3D Pixar (Đề mục 3 SGK Toán 6)',
          thoiLuong: '11 phút',
          deMucSGK: '3. Thực hành & Hệ thống hóa kiến thức Sơ đồ tư duy 16:9 3D Pixar',
          mucTieu: 'Rèn luyện kĩ năng gấp giấy và vẽ trục đối xứng chính xác; chuẩn hóa toàn bộ kiến thức trục đối xứng bằng Sơ đồ tư duy 16:9 3D Pixar sinh động.',
          noiDung: 'HS thực hành gấp giấy kiểm chứng nếp gấp đối xứng; quan sát Sơ đồ tư duy 16:9 trên bảng tương tác và tóm tắt toàn bộ bài học vào vở.',
          sanPham: 'Sản phẩm gấp giấy có nếp gấp đối xứng chuẩn xác; sơ đồ tư duy 16:9 hoàn chỉnh trong vở học sinh.',
          bangHaiCot: [
            {
              id: 'row-thcs-2-3',
              buocSuPham: 'Bước 3: Báo cáo, thảo luận (Phương pháp Báo cáo siêu tốc & Phản biện)',
              cot1Trai: '- GV mời lần lượt Báo cáo viên các nhóm lên dán sản phẩm lên bảng lớp.\n- Cho các nhóm chéo chất vấn và phản biện lẫn nhau.',
              cot2Phai: '- Đại diện các nhóm tự tin trình bày sản phẩm có đủ 4 màu mực.\n- Trả lời chất vấn thuyết phục từ các nhóm bạn.'
            },
            {
              id: 'row-thcs-2-4',
              buocSuPham: 'Bước 4: Kết luận, nhận định & Khắc sâu liên môn (Chốt Sơ đồ tư duy 16:9 3D Pixar)',
              cot1Trai: '- GV chuẩn hóa kiến thức khoa học bám sát SGK, chiếu SƠ ĐỒ TƯ DUY 16:9 PHONG CÁCH 3D PIXAR tổng kết toàn bộ nội dung trọng tâm.\n- [TÍCH HỢP NĂNG LỰC SỐ - Mã 5.2.TC1a]: GV sử dụng phần mềm GeoGebra chiếu mô phỏng chuyển động phản chiếu qua trục để học sinh thấy tính chất bảo toàn khoảng cách.\n- [BẢO VỆ AN NINH QUỐC PHÒNG (TT 08/2024/TT-BGDĐT)]: GV chiếu hình ảnh Cột mốc chủ quyền biên giới quốc gia (Cột mốc ngã ba biên giới A Pa Chải) và Quốc huy Việt Nam: "Tính đối xứng trục tạo nên sự uy nghiêm, vững chãi cho biểu tượng chủ quyền non sông và các công trình an ninh quốc phòng của Tổ quốc."',
              cot2Phai: 'I. HÌNH CÓ TRỤC ĐỐI XỨNG (KẾT LUẬN TỪ SƠ ĐỒ TƯ DUY 3D PIXAR)\n1. Định nghĩa (SGK trang 50):\nĐường thẳng d gọi là trục đối xứng của hình nếu gấp hình theo d thì hai nửa trùng khít lên nhau.\n2. Trục đối xứng của các hình phẳng (SGK trang 51):\n• Đoạn thẳng AB: 1 trục (đường trung trực)\n• Tam giác đều: 3 trục đối xứng\n• Hình chữ nhật: 2 trục (Đường chéo KHÔNG là trục đối xứng)\n• Hình vuông: 4 trục đối xứng\n• Hình tròn: Vô số trục đối xứng (mọi đường thẳng qua tâm O)\n[Ý THỨC QUỐC PHÒNG]: HS trân trọng giá trị thiêng liêng của mốc chủ quyền biên cương, hải đảo.',
              soDoTuDuy: {
                id: 'sdd-toan-6-truc-doi-xung',
                chuDeChinh: 'HÌNH CÓ TRỤC ĐỐI XỨNG & TRỤC ĐỐI XỨNG CÁC HÌNH PHẲNG',
                moTaChuDe: 'Toán 6 SGK Kết nối tri thức - Khắc sâu định nghĩa và số lượng trục đối xứng',
                tiLe: '16:9',
                phongCach: '3D Pixar',
                imageUrl: '/mindmaps/mindmap-toan-6-truc-doi-xung.jpg',
                ghiChuKetLuan: 'GV chiếu sơ đồ tư duy 16:9 3D Pixar giúp HS chốt chuẩn xác số trục đối xứng của 5 hình phẳng cơ bản, chống nhầm lẫn đường chéo hình chữ nhật.',
                monHoc: 'Toán học (Hình học)',
                thuatNguChuan: ['Trục đối xứng d', 'Tam giác đều (3)', 'Hình chữ nhật (2)', 'Hình vuông (4)', 'Hình tròn (Vô số)'],
                danhSachNhanh: [
                  {
                    id: 'n-thcs-1',
                    tieuDe: '1. Định nghĩa trục đối xứng',
                    mauSac: '#3b82f6',
                    icon3D: '🦋',
                    congThuc: 'Gấp theo d -> 2 nửa trùng khít',
                    cacYCon: [
                      'Đường thẳng d là trục đối xứng của hình',
                      'Mỗi điểm bên này có điểm đối xứng qua d bên kia',
                      'Cánh bướm, Tháp Rùa, Quốc huy Việt Nam'
                    ]
                  },
                  {
                    id: 'n-thcs-2',
                    tieuDe: '2. Đoạn thẳng & Tam giác đều',
                    mauSac: '#10b981',
                    icon3D: '📐',
                    congThuc: 'Đoạn thẳng: 1 trục | Tam giác đều: 3 trục',
                    cacYCon: [
                      'Đoạn thẳng AB: Trục đối xứng là đường trung trực',
                      'Tam giác đều: 3 trục đi qua đỉnh và trung điểm cạnh đối diện',
                      'Các trục đối xứng đồng quy tại tâm tam giác'
                    ]
                  },
                  {
                    id: 'n-thcs-3',
                    tieuDe: '3. Hình chữ nhật & Hình vuông',
                    mauSac: '#f59e0b',
                    icon3D: '⏹️',
                    congThuc: 'HCN: 2 trục | Hình vuông: 4 trục',
                    cacYCon: [
                      'Hình chữ nhật có đúng 2 trục đối xứng nối trung điểm cạnh',
                      'Lưu ý quan trọng: Đường chéo HCN KHÔNG phải là trục đối xứng',
                      'Hình vuông có 4 trục đối xứng (2 trục cạnh + 2 đường chéo)'
                    ]
                  },
                  {
                    id: 'n-thcs-4',
                    tieuDe: '4. Hình tròn & Ứng dụng',
                    mauSac: '#8b5cf6',
                    icon3D: '⭕',
                    congThuc: 'Vô số trục đối xứng qua tâm O',
                    cacYCon: [
                      'Mọi đường thẳng đi qua tâm O đều là trục đối xứng',
                      'Ứng dụng kiến trúc: Cổng vòm, Tháp Rùa, Quốc huy uy nghiêm',
                      'An toàn giao thông: Biển báo hình tròn, tam giác nhận diện nhanh'
                    ]
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'hd-thcs-3',
          soThuTu: 3,
          tenHoatDong: 'Hoạt động 3: Luyện tập',
          thoiLuong: '12 phút',
          mucTieu: 'Củng cố kiến thức, nhận diện nhanh các chữ cái in hoa, biển báo giao thông và logo có trục đối xứng.',
          noiDung: 'HS làm việc cá nhân giải bài tập 1, 2 (SGK trang 53) và phân tích các chữ cái tiếng Việt in hoa: A, B, C, H, M, X, O.',
          sanPham: 'Bài làm trong vở bài tập của HS; phiếu phân loại chữ cái có trục đối xứng ngang, dọc hoặc cả hai.',
          bangHaiCot: [
            {
              id: 'row-thcs-3-1',
              buocSuPham: 'Bước 1: Chuyển giao nhiệm vụ (Thử thách chữ cái và Biển báo giao thông)',
              cot1Trai: '- GV chiếu slide Bento Grid chứa 8 chữ cái in hoa: A, D, H, M, N, X, Y, Z.\n- Yêu cầu HS:\n  1. Chữ cái nào có đúng 1 trục đối xứng đứng?\n  2. Chữ cái nào có trục đối xứng ngang?\n  3. Chữ cái nào có cả 2 trục đối xứng?\n  4. Chữ cái nào KHÔNG có trục đối xứng?',
              cot2Phai: '- HS ghi các chữ cái vào vở và dùng bút chì vạch thử các đường dóng thẳng đứng / nằm ngang.'
            },
            {
              id: 'row-thcs-3-2',
              buocSuPham: 'Bước 2: Thực hiện nhiệm vụ',
              cot1Trai: '- GV đi xung quanh, khích lệ HS tư duy không gian.\n- Lưu ý HS quan sát kỹ chữ N và chữ Z (dễ nhầm với tâm đối xứng).',
              cot2Phai: '- HS suy luận cá nhân, kiểm tra tính đối xứng:\n  + Chữ A, M, Y: có 1 trục đối xứng thẳng đứng.\n  + Chữ D: có 1 trục đối xứng nằm ngang.\n  + Chữ H, X: có 2 trục đối xứng (cả đứng và ngang).\n  + Chữ N, Z: không có trục đối xứng.'
            },
            {
              id: 'row-thcs-3-3',
              buocSuPham: 'Bước 3: Báo cáo, thảo luận',
              cot1Trai: '- GV gọi 3 HS lên bảng điền kết quả vào bảng phân loại.\n- Yêu cầu HS giải thích tại sao chữ Z không có trục đối xứng dù trông rất cân đối.',
              cot2Phai: '- HS giải thích: "Khi gấp chữ Z theo bất kỳ đường nào thì các nét gạch chéo cũng hướng về hai phía ngược nhau, không bao giờ trùng khít."'
            },
            {
              id: 'row-thcs-3-4',
              buocSuPham: 'Bước 4: Kết luận, nhận định & Lồng ghép Dinh dưỡng học đường',
              cot1Trai: '- GV biểu dương các học sinh có câu trả lời xuất sắc.\n- [LỒNG GHÉP GIÁO DỤC DINH DƯỠNG & SỨC KHỎE]: GV chiếu hình ảnh lát cắt ngang đối xứng của các loại hoa quả (quả cam, kiwi, quả khế 5 cánh, bắp cải tím): "Trong tự nhiên, các loại rau củ quả bổ dưỡng chứa nhiều vitamin và khoáng chất thường có cấu trúc đối xứng tuyệt đẹp. Ở lứa tuổi dậy thì THCS, các em cần bổ sung đầy đủ rau xanh và trái cây tươi mỗi ngày để phát triển chiều cao và nâng cao sức đề kháng."\n- [TÍCH HỢP NĂNG LỰC SỐ - Mã 3.1.TC1a]: GV giao bài tập thiết kế Infographic tóm tắt bài học trên Canva/PowerPoint.',
              cot2Phai: 'II. LUYỆN TẬP\n1. Phân loại chữ cái: Đứng (A, M, Y); Ngang (D); Hai trục (H, X); Không trục (N, Z).\n2. Biển báo giao thông: Thiết kế đối xứng giúp mắt người nhận biết nhanh.\n[Ý THỨC DINH DƯỠNG]: HS nhận biết vai trò của việc ăn nhiều rau xanh, củ quả tươi có nguồn gốc an toàn để bồi bổ trí não khi học tập.'
            }
          ]
        },
        {
          id: 'hd-thcs-4',
          soThuTu: 4,
          tenHoatDong: 'Hoạt động 4: Vận dụng',
          thoiLuong: '8 phút',
          mucTieu: 'Vận dụng tính đối xứng để cắt hoa văn trang trí bông tuyết 6 cánh và tìm kiếm ứng dụng trong kiến trúc di sản Việt Nam.',
          noiDung: 'Hướng dẫn HS kỹ thuật gập giấy tam giác 3 lần và cắt tỉa để tạo thành hoa văn trang trí hình học có trục đối xứng.',
          sanPham: 'Sản phẩm hoa văn cắt giấy của HS dán vào sổ tay STEM.',
          bangHaiCot: [
            {
              id: 'row-thcs-4-1',
              buocSuPham: 'Bước 1: Chuyển giao nhiệm vụ (Dự án Nghệ nhân Cắt giấy Kirigami)',
              cot1Trai: '- GV phát video hướng dẫn ngắn 1 phút: Gấp giấy vuông thành 8 lớp rồi dùng kéo cắt vài đường lượn sóng.\n- Giao nhiệm vụ tự chọn ở nhà:\n  1. Cắt 1 tác phẩm bông tuyết hoặc trái tim có trục đối xứng.\n  2. Chụp ảnh 2 công trình kiến trúc hoặc đồ vật trong gia đình có tính đối xứng trục.',
              cot2Phai: '- HS theo dõi video mẫu, hào hứng với kỹ thuật cắt giấy nghệ thuật.'
            },
            {
              id: 'row-thcs-4-2',
              buocSuPham: 'Bước 2: Thực hiện nhiệm vụ',
              cot1Trai: '- GV dành 3 phút cuối cho HS thử gập và cắt mẫu đơn giản ngay tại lớp.',
              cot2Phai: '- HS gập giấy màu, dùng kéo cắt nhẹ nhàng các góc.'
            },
            {
              id: 'row-thcs-4-3',
              buocSuPham: 'Bước 3: Báo cáo, thảo luận',
              cot1Trai: '- Cho một số HS mở bung mảnh giấy vừa cắt để cả lớp cùng chiêm ngưỡng tác phẩm cân đối bất ngờ.',
              cot2Phai: '- Các mảnh giấy mở ra hiện lên hoa văn đối xứng tuyệt đẹp, cả lớp hào hứng vỗ tay.'
            },
            {
              id: 'row-thcs-4-4',
              buocSuPham: 'Bước 4: Kết luận, nhận định',
              cot1Trai: '- GV tổng kết toàn bài: "Tính đối xứng trục mang lại sự hài hòa, bền vững và vẻ đẹp thẩm mỹ tuyệt đối cho thế giới quanh ta. Các em hãy giữ gìn nét đẹp đó!".\n- Dặn dò làm bài tập 3, 4 SGK.',
              cot2Phai: 'III. VẬN DỤNG & DẶN DÒ\n• Trục đối xứng là cầu nối giữa Toán học và Nghệ thuật kiến trúc.\n• Hoàn thành bài tập 1, 2, 3, 4 SGK trang 54.\n• Chuẩn bị bài tiếp theo: "Hình có tâm đối xứng".'
            }
          ]
        }
      ]
    },
    slideDeck: {
      themeId: 'modern-stem',
      themeConfig: SLIDE_THEMES['modern-stem'],
      slides: [
        {
          id: 'slide-thcs-1',
          slideNumber: 1,
          slideType: 'TITLE_SLIDE',
          title: 'HÌNH CÓ TRỤC ĐỐI XỨNG',
          subtitle: 'Toán Học 6 • Chương 5: Tính Đối Xứng Của Hình Phẳng',
          stageBadge: 'Khung Bài Dạy',
          visualLayout: 'Full Center Hero',
          bulletPoints: [
            'Bộ sách: Kết Nối Tri Thức Với Cuộc Sống (Bộ GD&ĐT)',
            'Khám phá quy luật cân xứng tuyệt mỹ của vũ trụ',
            'Ứng dụng trong Đồ họa, Kiến trúc & Biển báo Giao thông'
          ],
          aiImagePrompt: 'Futuristic STEM geometric background with glowing neon cyan symmetry axis splitting an abstract butterfly and architectural blueprint, dark navy slate aesthetic, 8k hyper-realistic',
          animationsAndTransitions: {
            slideTransition: 'Push (Trượt sang phải hiện đại)',
            elementAnimations: [
              'Tiêu đề chính: Fade In từ từ với hiệu ứng sáng bừng Neon',
              'Đường kẻ phân cách: Wipe từ giữa tỏa ra hai bên',
              'Subtitle: Zoom in nhẹ nhàng'
            ]
          },
          speakerNotes: 'Kính chào quý thầy cô và các em học sinh lớp 6! Hôm nay chúng ta sẽ bắt đầu một chương hình học vô cùng trực quan và hấp dẫn: Tính đối xứng của hình học trong thế giới phẳng.'
        },
        {
          id: 'slide-thcs-2',
          slideNumber: 2,
          slideType: 'OBJECTIVE',
          title: 'MỤC TIÊU & YÊU CẦU CẦN ĐẠT',
          subtitle: 'Chuẩn chương trình Giáo dục phổ thông 2018',
          stageBadge: 'Mục Tiêu',
          visualLayout: '3-Card Bento Grid',
          bulletPoints: [
            '🧩 Định nghĩa chuẩn xác: Hình có trục đối xứng & Trục đối xứng (d)',
            '📐 Xác định thành thạo số trục đối xứng của: Đoạn thẳng, Tam giác đều, Hình vuông, Chữ nhật, Tròn',
            '🌐 Năng lực mô hình hóa: Nhận diện tính đối xứng trong kiến trúc và thiết kế thực tế'
          ],
          boardContent: 'Trọng tâm: Khái niệm trục đối xứng d | Phương pháp kiểm tra bằng nếp gấp | Đa giác đều',
          aiImagePrompt: 'Three sleek Bento grid cards showing 3D geometry models with cyan laser symmetry lines, modern clean infographic style',
          animationsAndTransitions: {
            slideTransition: 'Morph (Phóng to liên tục)',
            elementAnimations: [
              '3 thẻ Bento xuất hiện lần lượt theo thứ tự 1-2-3',
              'Thẻ 2 đổi viền sáng nổi bật khi GV nhấn mạnh kỹ năng cốt lõi'
            ]
          },
          speakerNotes: 'Các em chú ý, kỹ năng quan trọng nhất hôm nay là biết cách xác định đúng số lượng trục đối xứng của từng hình phẳng cơ bản và không nhầm lẫn đường chéo hình chữ nhật.'
        },
        {
          id: 'slide-thcs-3',
          slideNumber: 3,
          slideType: 'ACTIVITY_INTRO',
          title: 'HOẠT ĐỘNG 1: KHỞI ĐỘNG VỚI NẾP GẤP TỰ NHIÊN',
          subtitle: 'Giải mã bí mật từ cánh bướm và Khuê Văn Các',
          stageBadge: 'Khởi động',
          visualLayout: '2-Column Split',
          bulletPoints: [
            '🦋 Thao tác: Gập đôi hình cánh bướm theo đường sống lưng',
            '🔍 Hiện tượng: Hai nửa cánh bướm TRÙNG KHÍT hoàn toàn lên nhau!',
            '💡 Kết luận mở đầu: Nếp gấp đó chính là hình ảnh trực quan của TRỤC ĐỐI XỨNG'
          ],
          boardContent: 'Nếp gấp thẳng d làm hai nửa hình trùng khít -> d là trục đối xứng',
          aiImagePrompt: 'High tech macro photography of a majestic blue Morpho butterfly mirrored perfectly across a vertical laser axis, dark minimalist slate background',
          animationsAndTransitions: {
            slideTransition: 'Fade',
            elementAnimations: [
              'Cánh bướm bên trái xuất hiện',
              'Cánh bướm bên phải lật từ từ chồng lên như cánh cửa đóng lại (Flip reveal)'
            ]
          },
          speakerNotes: 'Khi các em gấp đôi tờ giấy lại, nếu hai nửa chồng khít từng milimet lên nhau, đường thẳng nếp gấp đó ta gọi là gì? Xin mời cánh tay nhanh nhất!'
        },
        {
          id: 'slide-thcs-4',
          slideNumber: 4,
          slideType: 'KNOWLEDGE_SPLIT',
          title: 'HOẠT ĐỘNG 2: BẢNG TRA TRỤC ĐỐI XỨNG CỦA CÁC HÌNH PHẲNG',
          subtitle: 'Kiến thức cốt lõi cần ghi nhớ',
          stageBadge: 'Khám phá',
          visualLayout: '3-Card Bento Grid',
          bulletPoints: [
            '1️⃣ Đoạn thẳng AB: 1 trục đối xứng (đường trung trực)',
            '2️⃣ Tam giác đều: 3 trục đối xứng (3 đường cao/trung trực)',
            '3️⃣ Hình chữ nhật: 2 trục đối xứng (nối trung điểm cạnh đối)',
            '4️⃣ Hình vuông: 4 trục đối xứng (2 trục cạnh + 2 đường chéo)',
            '5️⃣ Hình tròn: VÔ SỐ trục đối xứng (bất kỳ đường thẳng nào đi qua tâm)'
          ],
          boardContent: 'HÌNH PHẲNG VÀ TRỤC ĐỐI XỨNG:\n• Đoạn thẳng: 1 • Tam giác đều: 3\n• Hình chữ nhật: 2 • Hình vuông: 4\n• Hình tròn: Vô số (đi qua tâm)',
          aiImagePrompt: 'Minimalist geometric infographic with 5 clean geometric shapes displaying cyan dashed symmetry lines, dark tech UI',
          animationsAndTransitions: {
            slideTransition: 'Push',
            elementAnimations: [
              'Từng hàng hình phẳng xuất hiện lần lượt theo bước giảng bài của thầy cô',
              'Cảnh báo hình chữ nhật nhấp nháy đỏ để lưu ý học sinh'
            ]
          },
          speakerNotes: 'Thầy lưu ý đặc biệt: Rất nhiều bạn nghĩ đường chéo của hình chữ nhật là trục đối xứng. Khi gập theo đường chéo, hai tam giác tuy bằng nhau nhưng không hề trùng khít nhau!'
        },
        {
          id: 'slide-thcs-5',
          slideNumber: 5,
          slideType: 'INTERACTIVE_QUIZ',
          title: 'HOẠT ĐỘNG 3: THỬ THÁCH TRẮC NGHIỆM TƯ DUY NHANH',
          subtitle: 'Chọn câu khẳng định ĐÚNG NHẤT:',
          stageBadge: 'Luyện tập',
          visualLayout: 'Quiz Layout',
          bulletPoints: [
            'Câu hỏi: Trong các hình sau đây, hình nào có ĐÚNG 2 trục đối xứng?',
            'A. Tam giác đều',
            'B. Hình vuông',
            'C. Hình chữ nhật (Đáp án chuẩn xác!)',
            'D. Hình tròn'
          ],
          boardContent: 'Giải thích: Tam giác đều (3), Hình vuông (4), Hình tròn (vô số), Hình chữ nhật (đúng 2).',
          aiImagePrompt: 'Cyberpunk style quiz card with glowing neon options, educational game UI',
          animationsAndTransitions: {
            slideTransition: 'Morph',
            elementAnimations: [
              'Câu hỏi và 4 phương án trượt nhẹ từ 4 góc',
              'Click phương án C: Phát sáng viền xanh lá và rung nhẹ chuông chúc mừng'
            ]
          },
          speakerNotes: 'Các em có 15 giây suy nghĩ. Hãy loại trừ từng hình một nhé: Tam giác đều là 3, hình vuông là 4, hình tròn vô số. Vậy đáp án chính xác chắc chắn là C!'
        },
        {
          id: 'slide-thcs-6',
          slideNumber: 6,
          slideType: 'SUMMARY',
          title: 'HOẠT ĐỘNG 4: VẬN DỤNG VÀ THỰC TIỄN ĐỜI SỐNG',
          subtitle: 'Nghệ thuật đối xứng trong Kiến trúc & Giao thông',
          stageBadge: 'Vận dụng',
          visualLayout: '2-Column Split',
          bulletPoints: [
            '🏛️ Kiến trúc: Khuê Văn Các, Tháp Rùa, Chùa Một Cột',
            '🛑 Giao thông: Biển báo cấm đi ngược chiều giúp lái xe nhận biết tức thì',
            '✂️ Dự án STEM: Cắt hoa văn trang trí bông tuyết 6 cánh tại nhà'
          ],
          boardContent: 'DẶN DÒ: 1. Học thuộc bảng số trục đối xứng • 2. Làm bài tập 1, 2, 3 SGK • 3. Sáng tạo 1 hoa văn đối xứng',
          aiImagePrompt: 'Collage of Vietnamese historic monuments (Khue Van Cac) blended with modern bridge architecture and highway traffic signs, showing glowing symmetry lines',
          animationsAndTransitions: {
            slideTransition: 'Fade',
            elementAnimations: [
              'Các hình ảnh kiến trúc hiện lên sắc nét',
              'Dòng chữ Dặn dò học tập ở nhà đóng khung trang trọng'
            ]
          },
          speakerNotes: 'Tính đối xứng không chỉ là bài toán trên trang giấy, mà là nguồn cảm hứng vĩ đại cho kiến trúc sư, kỹ sư giao thông và các nhà thiết kế trên toàn thế giới. Chúc các em học tốt!'
        }
      ]
    },
    quizGame: [
      {
        id: 'q-thcs-1',
        question: 'Hình tam giác đều có bao nhiêu trục đối xứng?',
        options: ['1 trục đối xứng', '2 trục đối xứng', '3 trục đối xứng', 'Không có trục đối xứng'],
        correctIndex: 2,
        explanation: 'Tam giác đều có 3 trục đối xứng, mỗi trục là đường thẳng đi qua một đỉnh và trung điểm của cạnh đối diện (đường trung trực).',
        funFact: 'Tam giác đều là đa giác đều 3 cạnh, nên số trục đối xứng bằng đúng số cạnh của nó!'
      },
      {
        id: 'q-thcs-2',
        question: 'Hình chữ nhật có bao nhiêu trục đối xứng?',
        options: ['1', '2', '4', 'Vô số'],
        correctIndex: 1,
        explanation: 'Hình chữ nhật có đúng 2 trục đối xứng, là hai đường thẳng nối trung điểm của các cặp cạnh đối diện. Hai đường chéo không phải là trục đối xứng.',
        funFact: 'Khi bạn gập đôi cuốn sách hay tờ giấy A4, bạn đang dùng chính trục đối xứng của hình chữ nhật!'
      },
      {
        id: 'q-thcs-3',
        question: 'Hình nào dưới đây có VÔ SỐ trục đối xứng?',
        options: ['Hình vuông', 'Hình thoi', 'Hình tròn', 'Hình lục giác đều'],
        correctIndex: 2,
        explanation: 'Mọi đường thẳng đi qua tâm của hình tròn đều chia hình tròn thành hai nửa trùng khít nhau, do đó hình tròn có vô số trục đối xứng.',
        funFact: 'Nhờ có vô số trục đối xứng, bánh xe hình tròn luôn giữ được khoảng cách từ trục đến mặt đường không đổi khi quay!'
      },
      {
        id: 'q-thcs-4',
        question: 'Chữ cái in hoa nào sau đây KHÔNG có trục đối xứng?',
        options: ['Chữ A', 'Chữ M', 'Chữ Z', 'Chữ H'],
        correctIndex: 2,
        explanation: 'Chữ Z có tâm đối xứng nhưng không có trục đối xứng vì khi gấp theo bất kỳ đường nào thì hai nửa cũng không trùng khít nhau.',
        funFact: 'Chữ Z, N, S trong bảng chữ cái Latin là những chữ cái có tâm đối xứng xoay 180 độ!'
      }
    ]
  }
};
