import { CapHoc, BoSach, HinhAnhSGK } from '../types';
import {
  FULL_CURRICULUM_CATALOG,
  getFullLessonsForGradeAndSubject,
  getSubjectsForGrade,
  OFFICIAL_SUBJECTS_THCS,
  OFFICIAL_SUBJECTS_TIEU_HOC,
  CurriculumLessonItem as FullCurriculumLessonItem
} from './curriculumCatalog';

export {
  FULL_CURRICULUM_CATALOG,
  getFullLessonsForGradeAndSubject,
  getSubjectsForGrade,
  OFFICIAL_SUBJECTS_THCS,
  OFFICIAL_SUBJECTS_TIEU_HOC
};
export type { FullCurriculumLessonItem };

export interface SgkLessonDetail {
  id: string;
  capHoc: CapHoc;
  khoiLop: number;
  monHoc: string;
  boSach: BoSach;
  chuong: string;
  tenBaiDay: string;
  soTiet: string;
  tietTheoPPCT: string;
  thoiLuong: string;
  tuanThucHien: string;
  sgkUrl: string;
  sgkTrang: string;
  yeuCauCanDat: {
    kienThuc: string[];
    nangLucDacThu: string[];
    nangLucChung: string[];
    phamChat: string[];
    nangLucSo: string[];
    tichHopATGT?: string[];
  };
  noiDungDeMuc: {
    deMuc: string;
    tomTat: string;
    cauHoiKhaiThac: string[];
    hinhAnh: HinhAnhSGK;
  }[];
}

export const TEXTBOOK_LESSONS: Record<string, SgkLessonDetail> = {
  // LỚP 7 - KHTN
  'khtn-7-bai-8': {
    id: 'khtn-7-bai-8',
    capHoc: 'THCS',
    khoiLop: 7,
    monHoc: 'Khoa học tự nhiên',
    boSach: 'Kết nối tri thức với cuộc sống',
    chuong: 'Chủ đề 3: TỐC ĐỘ (Phần Vật lí)',
    tenBaiDay: 'Bài 8: Tốc độ chuyển động',
    soTiet: '2 tiết',
    tietTheoPPCT: 'Tiết 28 - 29',
    thoiLuong: '90 phút',
    tuanThucHien: 'Tuần 7 đến 8',
    sgkUrl: 'https://taphuan.nxbgd.vn/tap-huan?grade=7',
    sgkTrang: 'Trang 45 - 48',
    yeuCauCanDat: {
      kienThuc: [
        'Nêu được ý nghĩa vật lí của tốc độ: là đại lượng đặc trưng cho sự chuyển động nhanh hay chậm của vật.',
        'Lập được công thức tính tốc độ: v = s / t (trong đó s là quãng đường đi được, t là thời gian đi hết quãng đường đó).',
        'Xác định được đơn vị đo tốc độ trong hệ đo lường chính thức (SI) là mét trên giây (m/s) và đơn vị thông dụng là kilômét trên giờ (km/h); chuyển đổi thành thạo giữa hai đơn vị (1 m/s = 3,6 km/h).',
        'Mô tả được sơ lược nguyên lý hoạt động và công dụng của các thiết bị đo tốc độ thông dụng: Tốc kế trên bảng điều khiển xe và thiết bị bắn tốc độ kiểm tra giao thông.'
      ],
      nangLucDacThu: [
        'Nhận thức khoa học tự nhiên: Nhận biết, phân tích khái niệm tốc độ và phân biệt tốc độ tức thời với tốc độ trung bình.',
        'Tìm hiểu tự nhiên: Phân tích số liệu thực nghiệm đo thời gian chạy 60 m của học sinh để rút ra quy luật so sánh mức độ nhanh chậm.',
        'Vận dụng kiến thức, kĩ năng đã học: Tính toán tốc độ của các phương tiện giao thông, xử lý các bài toán chuyển động thực tế gắn liền với an toàn giao thông.'
      ],
      nangLucChung: [
        'Năng lực tự chủ và tự học: Chủ động đọc SGK mục I, II, III, IV, tự quan sát hình ảnh và hoàn thành phiếu học tập cá nhân.',
        'Năng lực giao tiếp và hợp tác: Làm việc nhóm 4 vai trò (Nhóm trưởng, Thư ký, Kỹ thuật viên, Báo cáo viên) với 4 màu mực chống thụ động, phân công công việc công bằng.',
        'Năng lực giải quyết vấn đề và sáng tạo: Đề xuất giải pháp kiểm soát tốc độ phương tiện an toàn khi tham gia giao thông.'
      ],
      phamChat: [
        'Chăm chỉ: Tích cực hoàn thành nhiệm vụ thu thập số liệu và tính toán tốc độ chính xác.',
        'Trung thực: Tôn trọng số liệu thực tế đo đạc, không gian lận kết quả thí nghiệm.',
        'Trách nhiệm: Nhận thức sâu sắc về việc chấp hành quy định giới hạn tốc độ khi tham gia giao thông để bảo vệ an toàn cho bản thân và cộng đồng.'
      ],
      nangLucSo: [
        'Mã 1.1.TC1b: Duyệt, tìm kiếm và lọc dữ liệu số về bảng tốc độ các phương tiện hiện đại trên Internet.',
        'Mã 3.1.TC1a: Sử dụng phần mềm PowerPoint/Canva thiết kế Infographic tóm tắt công thức và sơ đồ chuyển đổi đơn vị tốc độ.',
        'Mã 5.2.TC1a: Sử dụng bảng tính mô phỏng số hoặc phần mềm GeoGebra để biểu diễn mối tương quan giữa quãng đường, thời gian và tốc độ.'
      ],
      tichHopATGT: [
        'Phân tích ý nghĩa của biển báo hạn chế tốc độ tối đa cho phép (biển số P.127) tại khu vực trường học, khu dân cư (50 km/h hoặc 60 km/h).',
        'Tìm hiểu nguyên lý thiết bị bắn tốc độ của Cảnh sát giao thông và hậu quả nghiêm trọng của việc phóng nhanh, vượt ẩu, không làm chủ tốc độ.'
      ]
    },
    noiDungDeMuc: [
      {
        deMuc: 'I. Khái niệm tốc độ chuyển động',
        tomTat: 'Thương số s/t đặc trưng cho sự nhanh hay chậm của chuyển động được gọi là tốc độ. Tốc độ chuyển động là quãng đường đi được trong một đơn vị thời gian.',
        cauHoiKhaiThac: [
          '1. Quan sát Bảng 8.1 trong SGK: Trong 3 bạn học sinh A, B, C cùng chạy quãng đường 60m, bạn nào chạy mất ít thời gian nhất?',
          '2. Hãy tính quãng đường mà mỗi bạn chạy được trong 1 giây? Bạn nào chạy được quãng đường dài nhất trong 1 giây?',
          '3. Từ đó, em hãy rút ra kết luận: Đại lượng nào đặc trưng cho sự nhanh hay chậm của chuyển động?'
        ],
        hinhAnh: {
          tenHinh: 'Hình 8.1: Bảng kết quả chạy cự li 60 m của học sinh (SGK KHTN 7 KNTT - Trang 45)',
          moTa: 'Bảng số liệu ghi lại quãng đường s = 60m, thời gian chạy t của 3 học sinh A (10s), B (12s), C (9,6s) và quãng đường chạy trong 1s.',
          imageUrl: '/sgk-images/khtn-7-hinh-8-1-bang-chay-60m.png',
          cauHoiKhaiThac: [
            'Quan sát cột Thời gian (t) và Quãng đường trong 1s của Bảng 8.1:',
            'Bạn nào chạy nhanh nhất? Vì sao?',
            'Rút ra mối quan hệ giữa tốc độ chuyển động với quãng đường và thời gian.'
          ],
          ghiChuSuPham: 'Lấy học sinh làm trung tâm: Cho học sinh tự tính toán hàng số liệu thứ 4 (quãng đường trong 1s) trước khi giáo viên đưa ra khái niệm tốc độ.'
        }
      },
      {
        deMuc: 'II. Công thức tính tốc độ',
        tomTat: 'Nếu gọi quãng đường đi được là s, thời gian đi hết quãng đường đó là t, thì tốc độ chuyển động được tính theo công thức: v = s / t.',
        cauHoiKhaiThac: [
          '1. Viết công thức tính tốc độ và nêu tên, đơn vị của từng đại lượng trong công thức?',
          '2. Từ công thức v = s / t, hãy suy ra công thức tính quãng đường s và công thức tính thời gian t?',
          '3. Một người đi xe đạp đi được quãng đường 12 km trong thời gian 0,8 giờ. Tốc độ của người đó là bao nhiêu?'
        ],
        hinhAnh: {
          tenHinh: 'Sơ đồ tam giác công thức: v = s / t | s = v . t | t = s / v',
          moTa: 'Tam giác liên hệ giữa ba đại lượng: Quãng đường (s ở trên), Tốc độ (v ở dưới trái), Thời gian (t ở dưới phải).',
          imageUrl: '/sgk-images/khtn-7-bang-toc-do-chuyen-dong.png',
          cauHoiKhaiThac: [
            'Quan sát sơ đồ công thức tam giác:',
            'Muốn tính đại lượng nào, ta che đại lượng đó lại: Che v ta được s / t; che s ta được v . t; che t ta được s / v.',
            'Áp dụng giải bài toán ví dụ trong SGK.'
          ],
          ghiChuSuPham: 'Rèn luyện kĩ năng suy luận toán học và thao tác biến đổi công thức chuẩn xác.'
        }
      },
      {
        deMuc: 'III. Đơn vị đo tốc độ',
        tomTat: 'Đơn vị đo tốc độ phụ thuộc vào đơn vị đo độ dài và đơn vị đo thời gian. Đơn vị hợp pháp trong hệ SI là m/s (mét trên giây). Đơn vị thông dụng khác là km/h (kilômét trên giờ). 1 m/s = 3,6 km/h.',
        cauHoiKhaiThac: [
          '1. Nêu đơn vị đo tốc độ chuẩn trong hệ SI và đơn vị thường dùng trong đời sống hàng ngày?',
          '2. Hãy chứng minh rằng: 1 km/h = 1000m / 3600s = 1 / 3,6 m/s ≈ 0,28 m/s, từ đó suy ra 1 m/s = 3,6 km/h?',
          '3. Tra cứu bảng tốc độ SGK: Hãy so sánh tốc độ của con ốc sên, người đi bộ, xe máy, máy bay và tốc độ ánh sáng?'
        ],
        hinhAnh: {
          tenHinh: 'Bảng tốc độ của một số vật thể trong tự nhiên & kỹ thuật (SGK KHTN 7 KNTT - Trang 47)',
          moTa: 'Bảng tổng hợp tốc độ từ ốc sên (0,0014 m/s) đến tốc độ ánh sáng (300.000.000 m/s) kèm quy đổi m/s sang km/h.',
          imageUrl: '/sgk-images/khtn-7-bang-toc-do-chuyen-dong.png',
          cauHoiKhaiThac: [
            'Quan sát bảng tốc độ các vật thể:',
            'Quy đổi tốc độ của xe máy (40 km/h) sang đơn vị m/s?',
            'Vận tốc của âm thanh trong không khí là 340 m/s tương đương bao nhiêu km/h?'
          ],
          ghiChuSuPham: 'Giúp học sinh có cảm nhận định lượng trực quan về tốc độ của các vật thể xung quanh đời sống thực.'
        }
      },
      {
        deMuc: 'IV. Thiết bị đo tốc độ (Tốc kế & Thiết bị bắn tốc độ)',
        tomTat: 'Trong thực tế, để đo tốc độ chuyển động của các phương tiện giao thông, người ta dùng tốc kế gắn trên phương tiện hoặc thiết bị bắn tốc độ của Cảnh sát giao thông.',
        cauHoiKhaiThac: [
          '1. Quan sát Hình 8.2: Kim trên mặt đồng hồ tốc kế đang chỉ vào số nào? Đơn vị đo trên mặt đồng hồ là gì?',
          '2. Quan sát Hình 8.3: Thiết bị bắn tốc độ hoạt động như thế nào và có tác dụng gì trong công tác bảo đảm trật tự ATGT?',
          '3. Tại sao khi tham gia giao thông, người lái xe phải quan sát tốc kế và tuân thủ biển báo tốc độ tối đa cho phép?'
        ],
        hinhAnh: {
          tenHinh: 'Hình 8.2 & 8.3: Tốc kế xe máy/ô tô và Thiết bị bắn tốc độ CSGT (SGK KHTN 7 KNTT - Trang 48)',
          moTa: 'Hình ảnh hiển thị mặt đồng hồ tốc kế chỉ 45 km/h và thiết bị bắn tốc độ laser/radar chụp hình ảnh phương tiện vi phạm 68 km/h trên đoạn đường giới hạn 50 km/h.',
          imageUrl: '/sgk-images/khtn-7-hinh-8-2-toc-ke-xe.png',
          cauHoiKhaiThac: [
            'Quan sát màn hình thiết bị bắn tốc độ ở Hình 8.3:',
            'Thiết bị ghi nhận các thông số nào của phương tiện?',
            'Phương tiện có vi phạm quy định về tốc độ không? Giải thích vì sao?'
          ],
          ghiChuSuPham: 'Lồng ghép giáo dục pháp luật an toàn giao thông và trách nhiệm công dân cho học sinh THCS.'
        }
      }
    ]
  },

  'khtn-7-bai-9': {
    id: 'khtn-7-bai-9',
    capHoc: 'THCS',
    khoiLop: 7,
    monHoc: 'Khoa học tự nhiên',
    boSach: 'Kết nối tri thức với cuộc sống',
    chuong: 'Chủ đề 3: TỐC ĐỘ (Phần Vật lí)',
    tenBaiDay: 'Bài 9: Đo tốc độ',
    soTiet: '2 tiết',
    tietTheoPPCT: 'Tiết 30 - 31',
    thoiLuong: '90 phút',
    tuanThucHien: 'Tuần 8 đến 9',
    sgkUrl: 'https://taphuan.nxbgd.vn/tap-huan?grade=7',
    sgkTrang: 'Trang 49 - 52',
    yeuCauCanDat: {
      kienThuc: [
        'Mô tả được cách đo tốc độ bằng đồng hồ bấm giây và cổng quang điện kết hợp đồng hồ đo thời gian hiện số.',
        'Thực hiện được phép đo tốc độ của một vật chuyển động trong phòng thực hành.',
        'Tính toán được tốc độ từ số liệu đo quãng đường và thời gian, đánh giá sai số.'
      ],
      nangLucDacThu: ['Thực hành thí nghiệm đo tốc độ', 'Xử lý số liệu thực nghiệm'],
      nangLucChung: ['Hợp tác nhóm thực hành', 'Tự chủ và tự học'],
      phamChat: ['Cẩn thận, chính xác', 'Trung thực trong ghi chép số liệu'],
      nangLucSo: ['Mã 3.1.TC1a: Sử dụng phần mềm mô phỏng đo tốc độ']
    },
    noiDungDeMuc: [
      {
        deMuc: 'I. Đo tốc độ dùng đồng hồ bấm giây',
        tomTat: 'Dùng thước đo quãng đường s, dùng đồng hồ bấm giây đo thời gian t, tính tốc độ v = s/t.',
        cauHoiKhaiThac: ['Nêu các bước đo tốc độ bằng thước và đồng hồ bấm giây?'],
        hinhAnh: {
          tenHinh: 'Hình 9.1: Bố trí thí nghiệm đo tốc độ bằng đồng hồ bấm giây (SGK KHTN 7)',
          moTa: 'Học sinh dùng thước dây đo quãng đường chạy và dùng đồng hồ bấm giây.',
          imageUrl: '/sgk-images/khtn-7-hinh-8-1-bang-chay-60m.png',
          cauHoiKhaiThac: ['Quan sát thao tác bấm đồng hồ khi xe bắt đầu chuyển động và khi chạm đích.']
        }
      }
    ]
  },

  'khtn-7-bai-10': {
    id: 'khtn-7-bai-10',
    capHoc: 'THCS',
    khoiLop: 7,
    monHoc: 'Khoa học tự nhiên',
    boSach: 'Kết nối tri thức với cuộc sống',
    chuong: 'Chủ đề 3: TỐC ĐỘ (Phần Vật lí)',
    tenBaiDay: 'Bài 10: Đồ thị quãng đường - thời gian',
    soTiet: '2 tiết',
    tietTheoPPCT: 'Tiết 32 - 33',
    thoiLuong: '90 phút',
    tuanThucHien: 'Tuần 9',
    sgkUrl: 'https://taphuan.nxbgd.vn/tap-huan?grade=7',
    sgkTrang: 'Trang 53 - 57',
    yeuCauCanDat: {
      kienThuc: [
        'Vẽ được đồ thị quãng đường - thời gian cho chuyển động thẳng.',
        'Từ đồ thị quãng đường - thời gian, xác định được vị trí của vật ở thời điểm cho trước và ngược lại.',
        'Tìm được tốc độ từ độ dốc của đồ thị.'
      ],
      nangLucDacThu: ['Biểu diễn dữ liệu bằng đồ thị', 'Đọc và phân tích đồ thị vật lí'],
      nangLucChung: ['Tự học', 'Giải quyết vấn đề'],
      phamChat: ['Chăm chỉ, kiên trì'],
      nangLucSo: ['Mã 5.2.TC1a: Vẽ đồ thị trên phần mềm bảng tính Excel/GeoGebra']
    },
    noiDungDeMuc: [
      {
        deMuc: 'I. Lập bảng ghi quãng đường đi được theo thời gian',
        tomTat: 'Ghi lại các cặp giá trị (t, s) tại từng thời điểm chuyển động.',
        cauHoiKhaiThac: ['Từ bảng số liệu, hãy xác định quãng đường xe đi được sau 2h, 4h?'],
        hinhAnh: {
          tenHinh: 'Hình 10.1: Đồ thị quãng đường - thời gian của chuyển động (SGK KHTN 7)',
          moTa: 'Hệ trục tọa độ vuông góc biểu diễn mối quan hệ s và t.',
          imageUrl: '/sgk-images/khtn-7-bang-toc-do-chuyen-dong.png',
          cauHoiKhaiThac: ['Trục hoành biểu diễn đại lượng nào? Trục tung biểu diễn đại lượng nào?']
        }
      }
    ]
  },

  // LỚP 3 - TOÁN
  'toan-3-hinh-tron': {
    id: 'toan-3-hinh-tron',
    capHoc: 'TIEU_HOC',
    khoiLop: 3,
    monHoc: 'Toán',
    boSach: 'Kết nối tri thức với cuộc sống',
    chuong: 'Hình học và Đo lường',
    tenBaiDay: 'HÌNH TRÒN, TÂM, ĐƯỜNG KÍNH, BÁN KÍNH (Tiết 1)',
    soTiet: '1 tiết',
    tietTheoPPCT: 'Tiết 51',
    thoiLuong: '35 phút',
    tuanThucHien: 'Tuần 11',
    sgkUrl: 'https://taphuan.nxbgd.vn/tap-huan?grade=3',
    sgkTrang: 'Trang 110 - 112',
    yeuCauCanDat: {
      kienThuc: [
        'Nhận biết được hình tròn, tâm O, bán kính, đường kính của hình tròn.',
        'Biết được trong một hình tròn: Các bán kính có độ dài bằng nhau, các đường kính có độ dài bằng nhau; độ dài đường kính gấp 2 lần độ dài bán kính (d = 2 x r).',
        'Biết sử dụng compa để vẽ hình tròn có tâm và bán kính cho trước.'
      ],
      nangLucDacThu: ['Tư duy và lập luận toán học', 'Sử dụng công cụ compa vẽ hình tròn'],
      nangLucChung: ['Tự chủ và tự học', 'Giao tiếp và hợp tác'],
      phamChat: ['Chăm chỉ', 'Cẩn thận, chính xác'],
      nangLucSo: ['Mã 1.1.CB1a: Quan sát học liệu số', 'Mã 3.1.CB1a: Thao tác compa số'],
      tichHopATGT: ['Nhận biết biển báo giao thông hình tròn']
    },
    noiDungDeMuc: [
      {
        deMuc: '1. Khám phá Hình tròn, Tâm O, Bán kính, Đường kính',
        tomTat: 'Điểm O ở chính giữa là tâm hình tròn. Đoạn thẳng nối tâm O với một điểm trên đường tròn là bán kính. Đoạn thẳng đi qua tâm O nối hai điểm trên đường tròn là đường kính. Độ dài đường kính gấp 2 lần độ dài bán kính.',
        cauHoiKhaiThac: ['Chỉ ra tâm O, bán kính OM, đường kính AB? Nhận xét về độ dài đường kính và bán kính?'],
        hinhAnh: {
          tenHinh: 'Hình 1: Hình tròn tâm O, bán kính OM, đường kính AB (SGK Toán 3 KNTT)',
          moTa: 'Minh họa trực quan hình tròn tâm O.',
          imageUrl: '/sgk-images/toan-3-hinh-tron-tam-o.png',
          cauHoiKhaiThac: ['Quan sát hình vẽ và đọc tên các bán kính, đường kính.'],
          ghiChuSuPham: 'Cho học sinh dùng compa xoay tròn để cảm nhận tâm và bán kính.'
        }
      }
    ]
  },

  'toan-3-nhiet-do': {
    id: 'toan-3-nhiet-do',
    capHoc: 'TIEU_HOC',
    khoiLop: 3,
    monHoc: 'Toán',
    boSach: 'Kết nối tri thức với cuộc sống',
    chuong: 'Đo lường',
    tenBaiDay: 'Nhiệt độ. Đo nhiệt độ (Tiết 1)',
    soTiet: '1 tiết',
    tietTheoPPCT: 'Tiết 52',
    thoiLuong: '35 phút',
    tuanThucHien: 'Tuần 11',
    sgkUrl: 'https://taphuan.nxbgd.vn/tap-huan?grade=3',
    sgkTrang: 'Trang 113 - 115',
    yeuCauCanDat: {
      kienThuc: [
        'Nhận biết được đơn vị đo nhiệt độ là độ C (ký hiệu °C).',
        'Biết đọc nhiệt độ trên nhiệt kế thông dụng.',
        'Nhận biết được nhiệt độ cơ thể bình thường (khoảng 37°C) và nhiệt độ môi trường.'
      ],
      nangLucDacThu: ['Ước lượng và đo đại lượng', 'Giải quyết vấn đề đo lường thực tế'],
      nangLucChung: ['Tự chủ', 'Hợp tác'],
      phamChat: ['Ý thức chăm sóc sức khỏe'],
      nangLucSo: ['1.1.CB1a: Đọc nhiệt kế điện tử']
    },
    noiDungDeMuc: [
      {
        deMuc: 'Khám phá nhiệt kế và độ C',
        tomTat: 'Đo nhiệt độ bằng nhiệt kế, đơn vị là độ C (°C).',
        cauHoiKhaiThac: ['Quan sát vạch chỉ thị trên nhiệt kế và đọc số đo?'],
        hinhAnh: {
          tenHinh: 'Hình ảnh các loại nhiệt kế phòng và nhiệt kế y tế (SGK Toán 3)',
          moTa: 'Nhiệt kế thủy ngân và nhiệt kế điện tử đo nhiệt độ.',
          imageUrl: '/sgk-images/toan-3-ban-kinh-duong-kinh.png',
          cauHoiKhaiThac: ['Nhiệt kế đang chỉ bao nhiêu độ C?']
        }
      }
    ]
  },

  // LỚP 6 - TOÁN
  'toan-6-truc-doi-xung': {
    id: 'toan-6-truc-doi-xung',
    capHoc: 'THCS',
    khoiLop: 6,
    monHoc: 'Toán',
    boSach: 'Kết nối tri thức với cuộc sống',
    chuong: 'Hình học trực quan',
    tenBaiDay: 'Hình có trục đối xứng',
    soTiet: '1 tiết',
    tietTheoPPCT: 'Tiết 38',
    thoiLuong: '45 phút',
    tuanThucHien: 'Tuần 10',
    sgkUrl: 'https://taphuan.nxbgd.vn/tap-huan?grade=6',
    sgkTrang: 'Trang 102 - 105',
    yeuCauCanDat: {
      kienThuc: [
        'Nhận biết được hình có trục đối xứng và trục đối xứng của một hình.',
        'Nhận biết được trục đối xứng của các hình phẳng quen thuộc (hình tròn, tam giác đều, hình vuông, hình chữ nhật).',
        'Tìm được các hình có trục đối xứng trong tự nhiên, nghệ thuật, kiến trúc.'
      ],
      nangLucDacThu: ['Tư duy và lập luận toán học', 'Mô hình hóa toán học'],
      nangLucChung: ['Tự chủ và tự học', 'Giao tiếp và hợp tác'],
      phamChat: ['Chăm chỉ', 'Yêu cái đẹp trong tự nhiên'],
      nangLucSo: ['1.1.TC1b: Tìm kiếm hình ảnh trục đối xứng', '3.1.TC1a: Vẽ hình Geogebra']
    },
    noiDungDeMuc: [
      {
        deMuc: 'Khám phá trục đối xứng trong thực tế và hình phẳng',
        tomTat: 'Đường thẳng d là trục đối xứng của hình nếu khi gấp hình theo đường thẳng d thì hai phần của hình trùng khít lên nhau.',
        cauHoiKhaiThac: ['Quan sát cánh bướm và Tháp Rùa khi gấp đôi theo trục giữa?'],
        hinhAnh: {
          tenHinh: 'Hình ảnh cánh bướm và Tháp Rùa đối xứng (SGK Toán 6 KNTT)',
          moTa: 'Minh họa trục đối xứng tự nhiên và di tích lịch sử.',
          imageUrl: '/sgk-images/toan-6-canh-buom-thap-rua.png',
          cauHoiKhaiThac: ['Hãy chỉ ra đường thẳng chia đôi hình vẽ thành hai nửa trùng khít.'],
          ghiChuSuPham: 'Sử dụng kĩ thuật gấp giấy trực quan.'
        }
      }
    ]
  }
};

// Danh mục bài học theo Lớp và Môn trong SGK Kết nối tri thức (Bộ GD&ĐT)
export const CURRICULUM_CATALOG: Record<string, { id: string; name: string; chapter: string; periods: string }[]> = {
  // LỚP 7 - KHTN
  '7-khtn': [
    { id: 'khtn-7-bai-8', name: 'Bài 8: Tốc độ chuyển động', chapter: 'Chương III: Tốc độ', periods: '2 tiết' },
    { id: 'khtn-7-bai-9', name: 'Bài 9: Đo tốc độ', chapter: 'Chương III: Tốc độ', periods: '2 tiết' },
    { id: 'khtn-7-bai-10', name: 'Bài 10: Đồ thị quãng đường - thời gian', chapter: 'Chương III: Tốc độ', periods: '2 tiết' },
    { id: 'khtn-7-bai-1', name: 'Bài 1: Phương pháp và kĩ năng học tập KHTN', chapter: 'Mở đầu', periods: '2 tiết' },
    { id: 'khtn-7-bai-2', name: 'Bài 2: Nguyên tử', chapter: 'Chương I: Nguyên tử - Bảng tuần hoàn', periods: '3 tiết' },
    { id: 'khtn-7-bai-3', name: 'Bài 3: Nguyên tố hóa học', chapter: 'Chương I: Nguyên tử - Bảng tuần hoàn', periods: '2 tiết' },
    { id: 'khtn-7-bai-4', name: 'Bài 4: Sơ lược bảng tuần hoàn các nguyên tố hóa học', chapter: 'Chương I', periods: '4 tiết' },
    { id: 'khtn-7-bai-11', name: 'Bài 11: Phản xạ âm', chapter: 'Chương IV: Âm thanh', periods: '2 tiết' },
    { id: 'khtn-7-bai-12', name: 'Bài 12: Ánh sáng, tia sáng', chapter: 'Chương V: Ánh sáng', periods: '2 tiết' }
  ],
  // LỚP 3 - TOÁN
  '3-toan': [
    { id: 'toan-3-hinh-tron', name: 'Hình tròn, tâm, đường kính, bán kính', chapter: 'Hình học và Đo lường', periods: '1 tiết' },
    { id: 'toan-3-nhiet-do', name: 'Nhiệt độ. Đo nhiệt độ', chapter: 'Đo lường', periods: '1 tiết' },
    { id: 'toan-3-khoi-luong-gam', name: 'Khối lượng và đơn vị gam', chapter: 'Đo lường', periods: '1 tiết' },
    { id: 'toan-3-bang-nhan-6', name: 'Bảng nhân 6, Bảng chia 6', chapter: 'Phép nhân, phép chia', periods: '2 tiết' },
    { id: 'toan-3-bang-nhan-7', name: 'Bảng nhân 7, Bảng chia 7', chapter: 'Phép nhân, phép chia', periods: '2 tiết' },
    { id: 'toan-3-goc-vuong', name: 'Góc vuông, góc không vuông', chapter: 'Hình học', periods: '1 tiết' }
  ],
  // LỚP 6 - TOÁN
  '6-toan': [
    { id: 'toan-6-truc-doi-xung', name: 'Bài 1: Hình có trục đối xứng', chapter: 'Hình học trực quan', periods: '1 tiết' },
    { id: 'toan-6-tam-doi-xung', name: 'Bài 2: Hình có tâm đối xứng', chapter: 'Hình học trực quan', periods: '1 tiết' },
    { id: 'toan-6-tam-giac-deu', name: 'Bài 3: Tam giác đều, hình vuông, lục giác đều', chapter: 'Hình học trực quan', periods: '2 tiết' },
    { id: 'toan-6-tap-hop-so-tu-nhien', name: 'Bài 4: Tập hợp các số tự nhiên', chapter: 'Số học', periods: '2 tiết' }
  ],
  // LỚP 6 - KHTN
  '6-khtn': [
    { id: 'khtn-6-bai-1', name: 'Bài 1: Giới thiệu về Khoa học tự nhiên', chapter: 'Mở đầu', periods: '2 tiết' },
    { id: 'khtn-6-bai-4', name: 'Bài 4: Đo chiều dài', chapter: 'Chương I: Phép đo', periods: '2 tiết' },
    { id: 'khtn-6-bai-5', name: 'Bài 5: Đo khối lượng', chapter: 'Chương I: Phép đo', periods: '2 tiết' },
    { id: 'khtn-6-bai-6', name: 'Bài 6: Đo thời gian', chapter: 'Chương I: Phép đo', periods: '2 tiết' }
  ],
  // LỚP 8 - KHTN
  '8-khtn': [
    { id: 'khtn-8-bai-8', name: 'Bài 8: Acid', chapter: 'Chương II: Một số hợp chất thông dụng', periods: '3 tiết' },
    { id: 'khtn-8-bai-9', name: 'Bài 9: Base. Thang pH', chapter: 'Chương II: Một số hợp chất thông dụng', periods: '3 tiết' },
    { id: 'khtn-8-bai-10', name: 'Bài 10: Oxide', chapter: 'Chương II', periods: '2 tiết' }
  ]
};

// Hàm lấy danh mục bài học SGK tương ứng theo Khối lớp và Môn học (toàn bộ SGK Kết nối tri thức)
export function getCurriculumLessonsForGradeAndSubject(grade: number, subject: string) {
  return getFullLessonsForGradeAndSubject(grade, subject);
}

// Hàm lấy link tra cứu sách giáo khoa chuẩn theo khối lớp
export function getOfficialTextbookUrl(grade: number): string {
  return `https://taphuan.nxbgd.vn/tap-huan?grade=${grade}`;
}

export interface CurriculumLessonItem {
  id: string;
  grade: number;
  subject: string;
  name: string;
  book: string;
  periods: string;
}

export const LIST_CURRICULUM_LESSONS: CurriculumLessonItem[] = [
  { id: 'khtn-7-bai-8', grade: 7, subject: 'Khoa học tự nhiên', name: 'Bài 8: Tốc độ chuyển động (Chương III - Tốc độ)', book: 'Kết nối tri thức với cuộc sống', periods: '2 tiết' },
  { id: 'khtn-7-bai-9', grade: 7, subject: 'Khoa học tự nhiên', name: 'Bài 9: Đo tốc độ', book: 'Kết nối tri thức với cuộc sống', periods: '2 tiết' },
  { id: 'khtn-7-bai-10', grade: 7, subject: 'Khoa học tự nhiên', name: 'Bài 10: Đồ thị quãng đường - thời gian', book: 'Kết nối tri thức với cuộc sống', periods: '2 tiết' },
  { id: 'toan-3-hinh-tron', grade: 3, subject: 'Toán', name: 'Hình tròn, tâm, đường kính, bán kính', book: 'Kết nối tri thức với cuộc sống', periods: '1 tiết' },
  { id: 'toan-6-truc-doi-xung', grade: 6, subject: 'Toán', name: 'Hình có trục đối xứng', book: 'Kết nối tri thức với cuộc sống', periods: '1 tiết' }
];
