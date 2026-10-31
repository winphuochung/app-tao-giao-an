import { HoatDongNhomTichCuc } from '../types';
import { generateInfographicPrompts } from '../utils/infographicPrompts';

export const HOAT_DONG_NHOM_TIEU_HOC: HoatDongNhomTichCuc = {
  tenHoatDong: 'Hoạt động Nhóm Tích cực: "Biệt Đội Thám Tử Khám Phá Bí Mật Hình Tròn"',
  thoiLuong: '12 - 14 phút',
  siSoPhuHop: '35 - 40 học sinh (Chia lớp thành 8 - 9 nhóm, mỗi nhóm 4 em)',
  tinhHuongToMo: 'Tình huống "Chiếc Bánh Xe Lạ Kỳ": Giáo viên mang ra 2 chiếc xe đồ chơi: một chiếc gắn bánh xe hình tròn lăn bon bon êm ái, một chiếc gắn bánh xe hình vuông/tam giác bị xóc nảy và đứng khựng lại. GV đặt câu hỏi kích thích tò mò: "Tại sao từ thời cổ đại đến nay, con người chỉ chọn duy nhất hình tròn để làm bánh xe lăn trên đường mà không chọn hình nào khác? Bí mật gì ẩn giấu giữa tâm, bán kính và đường kính của hình tròn?"',
  chiaNhomVaPhanCong: {
    quyMo: 'Mỗi nhóm 4 học sinh - Ngồi theo cặp đôi quay mặt vào nhau',
    vaiTro: [
      {
        tenVaiTro: '1. Nhóm trưởng (Điều phối viên)',
        nhiemVu: 'Phân chia nhiệm vụ, theo dõi tiến độ và đảm bảo tất cả 4 bạn đều được cầm compa, phát biểu ý kiến.',
        mauMucDongGop: 'Bút mực xanh dương'
      },
      {
        tenVaiTro: '2. Thư ký (Ghi chép tổng hợp)',
        nhiemVu: 'Ghi lại kết quả đo đạc, công thức và đáp án thống nhất của nhóm vào Phiếu học tập chung.',
        mauMucDongGop: 'Bút mực đen'
      },
      {
        tenVaiTro: '3. Kỹ sư đo đạc & Thao tác (Kỹ thuật)',
        nhiemVu: 'Trực tiếp dùng com-pa quay hình tròn mẫu trên giấy bìa và dùng thước đo chính xác độ dài bán kính, đường kính.',
        mauMucDongGop: 'Bút mực tím'
      },
      {
        tenVaiTro: '4. Báo cáo viên & Quản lý thời gian',
        nhiemVu: 'Canh đồng hồ đếm ngược của GV, chuẩn bị lời trình bày và giơ thẻ kết quả đại diện cho nhóm.',
        mauMucDongGop: 'Bút mực xanh lá'
      }
    ]
  },
  nhiemVuVuaSuc: [
    'Thực hiện theo quy tắc "Suy nghĩ cá nhân (2 phút) ➔ Thảo luận cặp đôi (3 phút) ➔ Hoàn thiện phiếu nhóm (4 phút)"',
    'Nhiệm vụ 1 (Mức nhận biết - Vừa sức cho mọi em): Dùng nắp chai tròn đặt lên giấy, đánh dấu tâm O, vẽ một đoạn thẳng từ tâm O đến mép đường tròn và gọi tên đó là gì (Bán kính).',
    'Nhiệm vụ 2 (Mức thông hiểu & thực hành): Dùng com-pa mở rộng khẩu độ 3 cm để quay một đường tròn tâm O. Dùng thước kẻ đo độ dài đoạn thẳng đi qua tâm O nối 2 điểm trên đường tròn (Đường kính). So sánh xem đường kính dài gấp mấy lần bán kính.',
    'Nhiệm vụ 3 (Mức vận dụng & giải đố): Giải mã câu đố bánh xe: Nếu bán kính bánh xe là 10 cm thì độ dài đường kính qua tâm là bao nhiêu? Tại sao khi lăn, trục xe ở tâm luôn cách đều mặt đất?'
  ],
  quyTrinhToChuc: [
    {
      tenBuoc: 'Bước 1: Chuyển giao nhiệm vụ & Giao quyền (2 phút)',
      thoiGian: '2 phút',
      hoatDongGV: '- GV phát Phiếu giao nhiệm vụ nhóm và 1 hộp bút màu.\n- Hướng dẫn nhanh quy tắc 4 vai trò: Mỗi bạn chịu trách nhiệm 1 màu mực trên phiếu.\n- Chiếu đồng hồ đếm ngược 8 phút trên màn hình tivi/bảng.',
      hoatDongHS: '- Nhận phiếu nhóm, nhanh chóng chọn vai trò (Nhóm trưởng, Thư ký, Kỹ sư đo, Báo cáo viên).\n- Ký tên và viết vai trò vào ô quy định trên phiếu.'
    },
    {
      tenBuoc: 'Bước 2: Học sinh thực hiện nhiệm vụ theo cặp và nhóm (8 phút)',
      thoiGian: '8 phút',
      hoatDongGV: '- GV đi vòng quanh lớp quan sát, bấm giờ nhắc nhở (còn 5 phút, còn 2 phút).\n- Tuyệt đối không đứng cố định một chỗ; chủ động đến nhóm có học sinh rụt rè để động viên.\n- Khen ngợi nhóm nào có đủ 4 màu mực xuất hiện trên phiếu.',
      hoatDongHS: '- 2 phút đầu: Mỗi cá nhân tự lấy compa và thước đo bán kính.\n- 3 phút tiếp theo: Cặp đôi trao đổi, kiểm tra chéo số đo của nhau.\n- 3 phút cuối: Thư ký ghi đáp án chung vào phiếu, cả nhóm đồng thuận giơ tay báo hoàn thành.'
    },
    {
      tenBuoc: 'Bước 3: Báo cáo kết quả siêu tốc (3 phút)',
      thoiGian: '3 phút',
      hoatDongGV: '- Áp dụng phương pháp "Vòng quay may mắn / Bốc thăm số ngẫu nhiên": Gọi ngẫu nhiên bạn số 4 (Báo cáo viên) của Nhóm 3 và bạn số 3 của Nhóm 6 lên bảng dán sản phẩm.\n- Cho các nhóm còn lại dùng Thẻ Hoa Xanh (Đồng ý) hoặc Thẻ Hoa Đỏ (Cần bổ sung) để biểu quyết trong 10 giây.',
      hoatDongHS: '- Đại diện nhóm được gọi tự tin giơ phiếu và đọc to kết quả cốt lõi: "Nhóm em đo được bán kính 3 cm, đường kính 6 cm, đường kính gấp 2 lần bán kính d = 2 x r".\n- Các nhóm khác giơ thẻ hoa biểu quyết nhanh chóng, hào hứng.'
    },
    {
      tenBuoc: 'Bước 4: Nhận định, đánh giá và trao huy hiệu (2 phút)',
      thoiGian: '2 phút',
      hoatDongGV: '- GV chốt kiến thức trọng tâm lên bảng: Đường kính luôn gấp đôi bán kính (d = 2 x r).\n- Tuyên dương nhóm có tinh thần hợp tác tốt nhất, đặc biệt khen ngợi các bạn trước đây hay ngại nói hôm nay đã hoàn thành xuất sắc vai trò của mình.',
      hoatDongHS: '- Học sinh vỗ tay chúc mừng nhau, tự chấm điểm tích lũy vào góc học tập cá nhân.'
    }
  ],
  xuLyTinhHuong: [
    {
      tinhHuong: '1. Học sinh im lặng, rụt rè, ngại phát biểu trong nhóm',
      bieuHienThucTe: 'Em ngồi im nhìn các bạn làm, không dám cầm thước hay com-pa, sợ nói sai bị bạn cười.',
      giaiPhapSuPham: 'GV đến tận bàn, hạ thấp người mỉm cười và giao "nhiệm vụ vi mô" cực dễ: "Thầy nhờ em cầm thước kẻ giúp thầy xem đoạn này dài mấy xăng-ti-mét nhé!". Khi em đọc được số đo (ví dụ: "Dạ 3 cm"), GV khen ngay: "Chính xác tuyệt đối! Em hãy cầm bút tím ghi số 3 cm này vào ô của mình trên phiếu cho cả nhóm nào!". Sự ghi nhận tức thì sẽ phá vỡ sự rụt rè.'
    },
    {
      tinhHuong: '2. Một học sinh khá làm thay toàn bộ bài tập cho cả nhóm',
      bieuHienThucTe: 'Học sinh khá giật lấy phiếu học tập, tự viết hết câu trả lời để nhóm mình xong trước mà không hỏi ý kiến các bạn.',
      giaiPhapSuPham: 'GV nhắc nhở công khai tiêu chí chấm điểm: "Tiêu chí số 1 hôm nay: Phiếu của nhóm nào có đủ 4 màu mực của 4 bạn thì mới được nhận Sao Vàng! Bạn nào làm bài xong sớm, hãy đóng vai Thầy giáo nhí hướng dẫn bạn bên cạnh cách vẽ, chứ không được viết hộ bạn nhé!". Giao cho em khá vai trò "Chuyên gia cố vấn" để hướng nguồn năng lượng vào việc kèm bạn.'
    },
    {
      tinhHuong: '3. Một số học sinh mất tập trung, ỷ lại hoặc làm việc riêng',
      bieuHienThucTe: 'Nói chuyện riêng hoặc nghịch compa, nghĩ rằng nhóm trưởng sẽ tự làm hết.',
      giaiPhapSuPham: 'GV áp dụng kỹ thuật "Bốc thăm câu hỏi bất ngờ": Thông báo: "Thầy sẽ không gọi Nhóm trưởng trả lời, mà sẽ bốc thăm bất kỳ bạn nào trong nhóm. Điểm của cả nhóm sẽ phụ thuộc vào câu trả lời của bạn được gọi!". Khi biết mình có thể đại diện cho danh dự nhóm, em học sinh đó sẽ lập tức tập trung và các bạn trong nhóm sẽ chủ động ôn bài cho em.'
    }
  ],
  phieuGiaoNhiemVu: {
    tieuDe: 'PHIẾU HỌC TẬP NHÓM: THÁM TỬ TÌM KIẾM ĐƯỜNG TRÒN HOÀN HẢO',
    thongTinNhom: 'Nhóm: ................. Lớp: 3....... | Thời gian làm bài: 8 phút',
    cauHoiNhiemVu: [
      'Nhiệm vụ 1 (Mực Xanh - Nhóm trưởng): Quan sát hình tròn có sẵn, xác định và điền tên: Tâm: ............; Các bán kính: ........................; Các đường kính: ........................',
      'Nhiệm vụ 2 (Mực Tím - Kỹ sư đo): Dùng thước có vạch chia cm đo độ dài: Bán kính OM = ......... cm; Đường kính AB = ......... cm.',
      'Nhiệm vụ 3 (Mực Đen - Thư ký): Điền từ ngữ hoặc số thích hợp vào chỗ chấm: "Trong một hình tròn, độ dài đường kính gấp ......... lần độ dài bán kính. Công thức: d = ......... x r."',
      'Nhiệm vụ 4 (Mực Xanh lá - Báo cáo viên): Thử thách nhanh: Nếu bán kính một chiếc đĩa tròn là 7 cm thì đường kính của chiếc đĩa đó dài ......... cm.'
    ],
    phanKhaiBaoDongGop: [
      'Bạn 1: ........................................ (Vai trò: Nhóm trưởng - Mực Xanh)',
      'Bạn 2: ........................................ (Vai trò: Thư ký - Mực Đen)',
      'Bạn 3: ........................................ (Vai trò: Kỹ sư đo đạc - Mực Tím)',
      'Bạn 4: ........................................ (Vai trò: Báo cáo viên - Mực Xanh lá)'
    ]
  },
  tieuChiDanhGia: [
    {
      tieuChi: '1. Mức độ tham gia của từng cá nhân',
      mucTot: 'Đủ 4 màu mực khác nhau trên phiếu; mọi thành viên đều thao tác và nêu ý kiến.',
      mucDat: 'Có 3 màu mực; 1 bạn còn cần nhóm trưởng nhắc nhở mới tham gia.',
      mucCanCoGang: 'Chỉ có 1 - 2 bạn làm, các bạn còn lại thụ động ngồi nhìn.'
    },
    {
      tieuChi: '2. Độ chính xác của sản phẩm',
      mucTot: 'Xác định đúng tâm, bán kính, đường kính; số đo chuẩn xác; nắm vững công thức d = 2 x r.',
      mucDat: 'Đúng tâm và bán kính; đo đường kính còn sai lệch dưới 2mm; nhớ công thức.',
      mucCanCoGang: 'Còn nhầm lẫn giữa bán kính và đường kính; tính sai công thức.'
    },
    {
      tieuChi: '3. Tinh thần hợp tác & Đúng giờ',
      mucTot: 'Hoàn thành trong 8 phút; thảo luận vừa đủ nghe; các bạn giúp đỡ nhau tận tình.',
      mucDat: 'Hoàn thành đúng giờ nhưng còn gây ồn ào nhẹ.',
      mucCanCoGang: 'Quá thời gian quy định; nhóm có xảy ra tranh cãi chưa thống nhất.'
    }
  ],
  baoCaoNhanh: [
    'Phương án 1 - "Phòng tranh thu nhỏ (Gallery Walk)" (Thời lượng 2 phút): Tất cả các nhóm cùng dán phiếu lên bảng lớp hoặc tường lớp học. Cả lớp đứng tại chỗ quét nhanh bằng mắt.',
    'Phương án 2 - "Bốc thăm đại diện 1 nhóm + Biểu quyết Đúng/Sai (Thời lượng 2 phút)": Bốc thăm 1 nhóm lên nói trong 60 giây, tất cả các nhóm khác giơ thẻ màu Xanh (Đồng ý) hoặc Đỏ (Phản biện) trong 10 giây.',
    'Tuyệt đối không gọi lần lượt từng nhóm lên đọc lại cùng một đáp án gây mất thời gian và cháy giáo án.'
  ],
  promptInfographic: generateInfographicPrompts(
    {
      capHoc: 'TIEU_HOC',
      congVan: '2345/BGDĐT-GDTH',
      khoiLop: 3,
      monHoc: 'Toán',
      boSach: 'Kết nối tri thức với cuộc sống',
      tenBaiDay: 'Hình tròn, tâm, đường kính, bán kính',
      tuanThucHien: 'Tuần 18',
      soTiet: '1 tiết (Tiết 1)',
      thoiLuong: '35 phút',
      siSoLop: '35 học sinh',
      giaoVien: 'Nguyễn Văn A',
      truong: 'Trường Tiểu học Chu Văn An',
      toChuyenMon: 'Tổ Khối 3',
      tichHop: {
        nangLucSo: true,
        quocPhongAnNinh: true,
        dinhDuongSucKhoe: true,
        stem: true,
        anToanGiaoThong: false,
        kyNangSong: true,
        baoVeMoiTruong: false
      }
    },
    [
      'Nhiệm vụ 1: Quan sát hình tròn có sẵn, xác định và điền tên: Tâm O; Các bán kính; Các đường kính.',
      'Nhiệm vụ 2: Dùng thước có vạch chia cm đo độ dài: Bán kính OM = ......... cm; Đường kính AB = ......... cm.',
      'Nhiệm vụ 3: Hoàn thành công thức liên hệ: Trong một hình tròn, đường kính gấp ......... lần bán kính (d = ......... x r).',
      'Nhiệm vụ 4: Thử thách: Nếu bán kính một chiếc bánh xe là 7 cm thì đường kính của nó là ......... cm.'
    ]
  )
};

export const HOAT_DONG_NHOM_THCS: HoatDongNhomTichCuc = {
  tenHoatDong: 'Hoạt động Nhóm Tích cực: "Dự Án Nghiên Cứu STEM & Khám Phá Kiến Thức Mới"',
  thoiLuong: '14 - 16 phút',
  siSoPhuHop: '38 - 42 học sinh (Chia lớp thành 8 nhóm, mỗi nhóm 4 - 5 em)',
  tinhHuongToMo: 'Tình huống thực tiễn "Bài toán tối ưu hóa trong đời sống": GV đưa ra một tình huống thực tế hoặc video mô phỏng ngắn 45 giây liên quan trực tiếp đến bài học và đặt vấn đề nghịch lý: "Tại sao công thức này lại là chìa khóa giúp các kỹ sư xây dựng cầu đường, thiết kế vi mạch điện tử hay dự báo thời tiết chính xác? Nếu không có định lý/quy luật này, hậu quả kỹ thuật nào sẽ xảy ra?"',
  chiaNhomVaPhanCong: {
    quyMo: 'Mỗi nhóm 4 - 5 học sinh theo cấu trúc phối hợp năng lực',
    vaiTro: [
      {
        tenVaiTro: '1. Nhóm trưởng (Trưởng nhóm dự án)',
        nhiemVu: 'Điều phối thảo luận, phân công câu hỏi cho từng thành viên, kiểm soát tiến độ chung.',
        mauMucDongGop: 'Bút bi xanh dương'
      },
      {
        tenVaiTro: '2. Thư ký khoa học',
        nhiemVu: 'Tổng hợp lời giải, lập bảng biểu số liệu, vẽ sơ đồ tư duy tóm tắt vào phiếu nhóm.',
        mauMucDongGop: 'Bút bi đen'
      },
      {
        tenVaiTro: '3. Chuyên viên thực nghiệm / Tính toán',
        nhiemVu: 'Thực hiện phép tính toán cốt lõi, kiểm tra lại các bước chứng minh hoặc thao tác thí nghiệm.',
        mauMucDongGop: 'Bút bi tím'
      },
      {
        tenVaiTro: '4. Phản biện & Quản lý thời gian',
        nhiemVu: 'Tìm ra các lỗi sai tiềm ẩn trong bài giải của nhóm, canh mốc thời gian báo cho nhóm trưởng.',
        mauMucDongGop: 'Bút bi đỏ'
      }
    ]
  },
  nhiemVuVuaSuc: [
    'Quy trình làm việc: "Suy nghĩ cá nhân độc lập (3 phút) ➔ Tranh luận cặp đôi (3 phút) ➔ Thống nhất toàn nhóm (5 phút)"',
    'Nhiệm vụ 1 (Cốt lõi nhận biết - Cho học sinh trung bình/thụ động): Trích xuất định nghĩa, công thức từ SGK hoặc bảng tra cứu và điền vào ô trống.',
    'Nhiệm vụ 2 (Phân tích & Thông hiểu): Giải thích ý nghĩa của từng đại lượng trong công thức; chỉ ra điều kiện áp dụng đúng.',
    'Nhiệm vụ 3 (Vận dụng & Phản biện): Vận dụng giải quyết 1 bài toán thực tế có lồng ghép tư duy liên môn (STEM / Bảo vệ an ninh quốc phòng / Dinh dưỡng sức khỏe).'
  ],
  quyTrinhToChuc: [
    {
      tenBuoc: 'Bước 1: Chuyển giao nhiệm vụ học tập (2 phút)',
      thoiGian: '2 phút',
      hoatDongGV: '- Chiếu nhiệm vụ nhóm lên slide và phát phiếu học tập A3 cho 8 nhóm.\n- Nhấn mạnh quy tắc: Đánh giá cá nhân thông qua phần đóng góp cụ thể của từng màu mực.',
      hoatDongHS: '- Nhận phiếu A3, nhóm trưởng nhanh chóng phân chia 4 phần việc cho 4 thành viên.'
    },
    {
      tenBuoc: 'Bước 2: Các nhóm hợp tác thực hiện nhiệm vụ (8 - 10 phút)',
      thoiGian: '9 phút',
      hoatDongGV: '- GV di chuyển quanh lớp, quan sát biểu cảm học sinh.\n- Phát hiện kịp thời các em học sinh có xu hướng ngồi im để đến hỗ trợ bằng gợi ý dạng câu hỏi nhỏ.\n- Chụp ảnh 2 bài làm nổi bật (1 bài chuẩn xác, 1 bài có lỗi sai kinh điển) bằng điện thoại để chuẩn bị chiếu lên màn hình.',
      hoatDongHS: '- 3 phút đầu: Làm việc cá nhân độc lập.\n- 3 phút giữa: Trao đổi cặp đôi, kiểm tra bài nhau.\n- 3 phút cuối: Hoàn thiện bảng A3, thư ký viết và các bạn hỗ trợ trang trí sơ đồ.'
    },
    {
      tenBuoc: 'Bước 3: Báo cáo và thảo luận đa chiều (3 phút)',
      thoiGian: '3 phút',
      hoatDongGV: '- Sử dụng công nghệ: Chiếu ảnh chụp bài làm của nhóm được chọn lên màn hình lớn.\n- Yêu cầu báo cáo viên nhóm đó chỉ nói đúng 2 ý trọng tâm trong 60 giây.\n- Mời nhóm khác đặt 1 câu hỏi phản biện ngắn.',
      hoatDongHS: '- Báo cáo viên trình bày súc tích.\n- Các nhóm khác lắng nghe, phản biện hoặc bổ sung cách giải nhanh hơn.'
    },
    {
      tenBuoc: 'Bước 4: Kết luận, chuẩn hóa kiến thức & Đánh giá (2 phút)',
      thoiGian: '2 phút',
      hoatDongGV: '- Chốt đáp án chuẩn mực để học sinh ghi vào vở.\n- Đánh giá nhanh theo bảng tiêu chí Rubric; công bố điểm thưởng cho nhóm xuất sắc.',
      hoatDongHS: '- Ghi nhận kiến thức trọng tâm vào vở ghi bài cá nhân.'
    }
  ],
  xuLyTinhHuong: [
    {
      tinhHuong: '1. Học sinh thụ động, sợ sai, không dám lên tiếng trong nhóm THCS',
      bieuHienThucTe: 'Học sinh cúi đầu, im lặng, để mặc các bạn học khá tranh luận.',
      giaiPhapSuPham: 'GV phân công trực tiếp cho em nhiệm vụ "Người đọc đề bài và tóm tắt dữ kiện" hoặc giao em phụ trách câu hỏi số 1 (câu dễ nhất). GV động viên riêng: "Em tìm rất đúng công thức rồi đấy, hãy chia sẻ ngay cho bạn bên cạnh cùng viết nhé!". Biến nhiệm vụ của em thành bước khởi đầu bắt buộc của cả nhóm để tạo động lực.'
    },
    {
      tinhHuong: '2. Một học sinh giỏi thống trị cuộc thảo luận, áp đặt ý kiến',
      bieuHienThucTe: 'Em học sinh giỏi tự làm từ đầu đến cuối, gạt phăng ý kiến của các bạn khác vì cho rằng chậm chạp.',
      giaiPhapSuPham: 'GV can thiệp sư phạm nhẹ nhàng: "Thầy rất khen ngợi tốc độ tư duy của em, nhưng trong làm việc nhóm hiện đại, người nhóm trưởng xuất sắc là người biết lắng nghe và giúp đồng đội cùng hiểu bài. Thầy giao em thử thách: Hãy giải thích cho bạn bên cạnh hiểu được cách làm của em để lát nữa bạn ấy đại diện nhóm lên bảng thuyết trình nhé!".'
    },
    {
      tinhHuong: '3. Nhóm xảy ra tranh luận gay gắt hoặc chia rẽ',
      bieuHienThucTe: 'Hai bạn tranh cãi về đáp án, không bạn nào chịu nhường bạn nào, mất thời gian làm bài.',
      giaiPhapSuPham: 'GV đến đóng vai trò trọng tài trung lập: "Cả hai cách tiếp cận đều rất thú vị! Các em hãy ghi cả 2 phương án này vào phiếu thành Phương án A và Phương án B, sau đó ghi rõ ưu - nhược điểm của từng cách. Lát nữa chúng ta sẽ cùng đưa ra trước lớp để cả lớp phân tích!".'
    }
  ],
  phieuGiaoNhiemVu: {
    tieuDe: 'PHIẾU HỌC TẬP DỰ ÁN NHÓM: NGHIÊN CỨU & KHÁM PHÁ KIẾN THỨC MỚI',
    thongTinNhom: 'Nhóm số: ......... Lớp: ......... | Bàn số: ......... | Thời gian: 9 phút',
    cauHoiNhiemVu: [
      'Nhiệm vụ 1 (Mực Xanh): Trích xuất kiến thức cốt lõi và định nghĩa trọng tâm từ sách giáo khoa: .....................................................................................................',
      'Nhiệm vụ 2 (Mực Tím): Thực hiện các bước biến đổi công thức / giải toán chi tiết: .................................................................................................................................',
      'Nhiệm vụ 3 (Mực Đỏ - Phản biện): Kiểm tra điều kiện xác định, các trường hợp ngoại lệ và lưu ý sai lầm thường gặp: .............................................................................',
      'Nhiệm vụ 4 (Mực Đen): Vận dụng giải quyết tình huống thực tế liên môn: .............................................................................................................................................'
    ],
    phanKhaiBaoDongGop: [
      '1. Trưởng nhóm: ................................................. (Chữ ký & Đánh giá mức độ đóng góp: A / B / C)',
      '2. Thư ký: ........................................................... (Chữ ký & Đánh giá mức độ đóng góp: A / B / C)',
      '3. Chuyên viên tính toán: .................................... (Chữ ký & Đánh giá mức độ đóng góp: A / B / C)',
      '4. Phản biện: ....................................................... (Chữ ký & Đánh giá mức độ đóng góp: A / B / C)'
    ]
  },
  tieuChiDanhGia: [
    {
      tieuChi: '1. Tinh thần cộng tác & Trách nhiệm cá nhân',
      mucTot: '100% thành viên đều có phần việc rõ ràng thể hiện qua bài làm; hỗ trợ nhau tích cực.',
      mucDat: 'Đa số thành viên tham gia; còn 1 thành viên chưa thực sự chủ động.',
      mucCanCoGang: 'Chỉ có 1-2 em làm, các em khác thụ động đứng ngoài.'
    },
    {
      tieuChi: '2. Tính chính xác khoa học & Lập luận',
      mucTot: 'Lập luận logic chặt chẽ, kết quả toán học chuẩn xác 100%, có giải thích rõ ràng.',
      mucDat: 'Kết quả đúng nhưng bước biến đổi còn tắt, giải thích chưa trọn vẹn.',
      mucCanCoGang: 'Kết quả sai hoặc nhầm lẫn kiến thức cơ bản.'
    },
    {
      tieuChi: '3. Kỹ năng báo cáo & Phản biện',
      mucTot: 'Trình bày tự tin, đúng trọng tâm dưới 60 giây; trả lời tốt câu hỏi phản biện của nhóm bạn.',
      mucDat: 'Trình bày đầy đủ nhưng còn phụ thuộc giấy ghi chép.',
      mucCanCoGang: 'Trình bày ngập ngừng, quá thời gian quy định.'
    }
  ],
  baoCaoNhanh: [
    'Báo cáo qua công nghệ / Ảnh chụp nhanh: GV chụp bài của 1-2 nhóm bằng điện thoại/máy chiếu vật thể để chiếu lên bảng; không mất thời gian bê bảng nhóm lên xuống.',
    'Bốc thăm phản biện chéo: Nhóm 1 phản biện Nhóm 3; Nhóm 2 phản biện Nhóm 4 với 1 câu hỏi duy nhất trong 30 giây.',
    'Tổng thời gian toàn bộ khâu báo cáo được khóa chặt trong 3 phút, bảo đảm tiến trình bài học đúng phân phối thời gian.'
  ],
  promptInfographic: generateInfographicPrompts(
    {
      capHoc: 'THCS',
      congVan: '5512/BGDĐT-GDTrH',
      khoiLop: 6,
      monHoc: 'Toán',
      boSach: 'Kết nối tri thức với cuộc sống',
      tenBaiDay: 'Hình có trục đối xứng',
      tuanThucHien: 'Tuần 22',
      soTiet: '1 tiết (Tiết 1)',
      thoiLuong: '45 phút',
      siSoLop: '40 học sinh',
      giaoVien: 'Trần Thị B',
      truong: 'Trường THCS Lê Quý Đôn',
      toChuyenMon: 'Tổ Toán - Tin học',
      tichHop: {
        nangLucSo: true,
        quocPhongAnNinh: true,
        dinhDuongSucKhoe: true,
        stem: true,
        anToanGiaoThong: true,
        kyNangSong: false,
        baoVeMoiTruong: false
      }
    },
    [
      'Nhiệm vụ 1: Định nghĩa và tìm số trục đối xứng của các hình phẳng (đoạn thẳng, tam giác đều, hình vuông, hình tròn).',
      'Nhiệm vụ 2: Thực hành gấp giấy xác định nếp gấp trục đối xứng.',
      'Nhiệm vụ 3: Phân loại các chữ cái in hoa tiếng Việt có trục đối xứng ngang, dọc hoặc cả hai.',
      'Nhiệm vụ 4: Ứng dụng nhận diện trục đối xứng trên Quốc kỳ Việt Nam, biển báo giao thông và kiến trúc.'
    ]
  )
};
