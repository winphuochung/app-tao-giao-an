import React, { useState, useRef } from 'react';
import {
  Sparkles,
  Download,
  Printer,
  Eye,
  CheckCircle2,
  FileQuestion,
  Search,
  BookOpen,
  Award,
  Layers,
  HelpCircle,
  KeyRound
} from 'lucide-react';
import { GiaoAnWordData } from '../types';

interface InfographicWorksheetProps {
  data: GiaoAnWordData;
}

type InfographicStyle = 'generated-image' | 'conan-image' | 'doraemon' | 'science-case' | 'conan' | 'cute-students';

export const InfographicWorksheet: React.FC<InfographicWorksheetProps> = ({ data }) => {
  const [style, setStyle] = useState<InfographicStyle>('generated-image');
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);
  const worksheetRef = useRef<HTMLDivElement>(null);

  const meta = data.metadata;
  const isTieuHoc = meta.capHoc === 'TIEU_HOC';

  // Extract activity group worksheet questions if available
  const groupActivity =
    data.hoatDongNhomTichCuc ||
    data.tienTrinhDayHoc.find(
      (hd) => hd.hoatDongNhomTichCuc?.phieuGiaoNhiemVu
    )?.hoatDongNhomTichCuc;

  const defaultQuestions = isTieuHoc
    ? [
        'Quan sát hình tròn tâm O trên bảng, xác định và ghi tên: Tâm: ............; Các bán kính: ........................; Các đường kính: ........................',
        'Dùng thước kẻ có vạch chia xăng-ti-mét đo độ dài: Bán kính OM = ......... cm; Đường kính AB = ......... cm.',
        'Nhận xét mối quan hệ: Trong một hình tròn, độ dài đường kính gấp ......... lần độ dài bán kính. Công thức: d = ......... x r.',
        'Thử thách ứng dụng: Nếu bán kính một chiếc bánh xe là 8 cm thì đường kính của bánh xe đó là ......... cm.'
      ]
    : [
        'Xác định các hình phẳng có trục đối xứng (đoạn thẳng, tam giác đều, hình chữ nhật, hình vuông, hình tròn) và ghi rõ số lượng trục đối xứng của từng hình.',
        'Gấp giấy đôi theo đường nét đứt để kiểm tra hai nửa hình có trùng khít lên nhau hay không.',
        'Phân loại các chữ cái in hoa tiếng Việt: A, B, C, D, H, M, X, O thành các nhóm: Trục đối xứng dọc, Trục đối xứng ngang hoặc Cả hai.',
        'Chỉ ra ít nhất 2 hình ảnh thực tế đời sống (Quốc kỳ Việt Nam, tháp Rùa, biển báo giao thông) có tính đối xứng trục.'
      ];

  const questions = groupActivity?.phieuGiaoNhiemVu?.cauHoiNhiemVu?.length
    ? groupActivity.phieuGiaoNhiemVu.cauHoiNhiemVu
    : defaultQuestions;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white border-2 border-indigo-200 rounded-2xl shadow-md p-4 sm:p-6 space-y-4 my-6">
      
      {/* Control Header & Style Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs">
              Infographic Phiếu Học Tập Trực Quan
            </span>
            <span className="text-xs text-slate-500 font-medium">
              (Đã tích hợp trực tiếp vào Hoạt động dạy học)
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
            Phiếu Học Tập Tương Tác: {meta.tenBaiDay}
          </h4>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span>In Phiếu A4</span>
          </button>
        </div>
      </div>

      {/* Style Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="font-bold text-slate-500 flex items-center gap-1 flex-shrink-0">
          <Layers className="w-3.5 h-3.5 text-indigo-500" /> Bản Infographic:
        </span>

        <button
          type="button"
          onClick={() => setStyle('generated-image')}
          className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0 ${
            style === 'generated-image'
              ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-300'
              : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
          }`}
        >
          <span>🐱</span>
          <span>1. Phiếu Doraemon AI (A4 Dọc)</span>
        </button>

        <button
          type="button"
          onClick={() => setStyle('conan-image')}
          className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0 ${
            style === 'conan-image'
              ? 'bg-red-600 text-white shadow-sm ring-2 ring-red-300'
              : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
          }`}
        >
          <span>🔍</span>
          <span>2. Poster Conan AI (A4 Ngang)</span>
        </button>

        <button
          type="button"
          onClick={() => setStyle('science-case')}
          className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0 ${
            style === 'science-case'
              ? 'bg-indigo-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <span>🔬</span>
          <span>3. Vụ Án Khoa Học (LaTeX)</span>
        </button>

        <button
          type="button"
          onClick={() => setStyle('cute-students')}
          className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0 ${
            style === 'cute-students'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <span>🎒</span>
          <span>4. Học Sinh Dễ Thương</span>
        </button>
      </div>

      {/* WORKSPACE CANVAS / INFOGRAPHIC CONTAINER */}
      <div ref={worksheetRef} className="pt-2">

        {/* ============================================================== */}
        {/* STYLE 0: BẢN VẼ INFOGRAPHIC AI HOÀN CHỈNH (IMAGE PREVIEW) */}
        {/* ============================================================== */}
        {style === 'generated-image' && (
          <div className="bg-slate-900 border-4 border-purple-500 rounded-3xl p-5 sm:p-7 shadow-2xl max-w-3xl mx-auto space-y-4 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-slate-700 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-300 bg-purple-950 px-2.5 py-1 rounded-full border border-purple-700">
                  ẢNH INFOGRAPHIC AI TỰ ĐỘNG SINH THEO PHIẾU HỌC TẬP
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  Phiếu Học Tập Truyện Tranh Doraemon: {meta.tenBaiDay}
                </h3>
                <p className="text-xs text-slate-400">
                  Tỉ lệ: Khổ dọc A4 (1:1,414) • Có câu hỏi không đáp án • 6 nhân vật Doraemon
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/infographics/phieu-hoc-tap-doraemon-toan-3.jpg"
                  download={`Phieu-Hoc-Tap-${meta.tenBaiDay}.jpg`}
                  className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Tải Ảnh (.JPG)</span>
                </a>
              </div>
            </div>

            {/* Render Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-950 shadow-inner group flex justify-center">
              <img
                src="/infographics/phieu-hoc-tap-doraemon-toan-3.jpg"
                alt="Infographic Phiếu học tập truyện tranh Doraemon"
                className="w-full max-h-[750px] object-contain rounded-xl hover:scale-[1.01] transition-transform duration-300"
              />
            </div>

            <div className="p-3 bg-purple-950/60 border border-purple-800 rounded-xl text-xs text-purple-200 flex items-center justify-between">
              <span>💡 Thầy/Cô có thể nhấp chuột phải vào ảnh để <strong>Lưu ảnh về máy</strong> hoặc bấm <strong>In Phiếu A4</strong> ở trên để in phát trực tiếp cho học sinh!</span>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* STYLE 1.2: POSTER CONAN AI HOÀN CHỈNH (A4 NGANG 1,414:1) */}
        {/* ============================================================== */}
        {style === 'conan-image' && (
          <div className="bg-slate-950 border-4 border-red-600 rounded-3xl p-5 sm:p-7 shadow-2xl max-w-4xl mx-auto space-y-4 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-red-800 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-red-300 bg-red-950 px-2.5 py-1 rounded-full border border-red-700">
                  POSTER ANIME PHÁ ÁN CONAN • TỈ LỆ 1,414:1 (A4 NGANG)
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  Vụ Án Khoa Học: Bí Mật {meta.tenBaiDay}
                </h3>
                <p className="text-xs text-slate-400">
                  Thám tử Conan, Ran Mori, Đội thám tử nhí • 4 thẻ câu hỏi phá án không đáp án
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/infographics/phieu-hoc-tap-conan.jpg"
                  download={`Poster-Conan-${meta.tenBaiDay}.jpg`}
                  className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Tải Poster (.JPG)</span>
                </a>
              </div>
            </div>

            {/* Render Image */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-red-900 bg-black shadow-inner group flex justify-center">
              <img
                src="/infographics/phieu-hoc-tap-conan.jpg"
                alt="Infographic Poster Phiếu học tập Anime Thám tử Conan"
                className="w-full max-h-[600px] object-contain rounded-xl hover:scale-[1.01] transition-transform duration-300"
              />
            </div>

            <div className="p-3 bg-red-950/60 border border-red-900 rounded-xl text-xs text-red-200 flex items-center justify-between">
              <span>💡 Poster ngang chuẩn rạp phim! Thầy/Cô có thể bấm <strong>Tải Poster (.JPG)</strong> để chiếu trên Tivi lớp học hoặc in màu A4 phát cho các nhóm giải mật mã!</span>
            </div>
          </div>
        )}
        
        {/* ============================================================== */}
        {/* STYLE 1: TRUYỆN TRANH DORAEMON (Tỉ lệ 1:1,414 A4 Dọc) */}
        {/* ============================================================== */}
        {style === 'doraemon' && (
          <div className="bg-gradient-to-b from-sky-50 via-white to-amber-50/40 border-4 border-blue-500 rounded-3xl p-5 sm:p-7 shadow-xl max-w-3xl mx-auto space-y-5 text-slate-800">
            
            {/* Header Doraemon */}
            <div className="bg-blue-600 text-white rounded-2xl p-4 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 border-2 border-yellow-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white text-blue-600 font-black text-2xl flex items-center justify-center shadow-inner border-2 border-red-500 flex-shrink-0">
                  🔔
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-yellow-300 bg-blue-800/80 px-2 py-0.5 rounded-full inline-block">
                    PHIẾU HỌC TẬP TRUYỆN TRANH MANGA • TỈ LỆ 1:1,414
                  </span>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-white mt-0.5">
                    THỬ THÁCH DORAEMON: {meta.tenBaiDay.toUpperCase()}
                  </h3>
                  <p className="text-xs text-blue-100">
                    Môn: {meta.monHoc} • Lớp {meta.khoiLop} • Bộ sách: {meta.boSach}
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-xl px-3 py-1.5 text-right text-xs text-blue-50 flex-shrink-0">
                <p>Nhóm: ........................................</p>
                <p>Lớp: {meta.khoiLop}....... | Thời gian: 10 phút</p>
              </div>
            </div>

            {/* Comic Panels Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              
              {/* Panel 1: Thầy giáo & Nobita */}
              <div className="bg-white border-2 border-slate-800 rounded-2xl p-3.5 shadow-sm relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-start gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-amber-100 border-2 border-slate-800 flex items-center justify-center text-lg flex-shrink-0">
                    👨‍🏫
                  </div>
                  <div className="bg-amber-50 border border-slate-700 rounded-2xl p-2.5 text-xs text-slate-800 relative rounded-tl-none flex-1">
                    <span className="font-bold text-amber-900 block mb-0.5">Thầy giáo căn dặn:</span>
                    "Hôm nay thầy giao cho các em nhiệm vụ khám phá bí mật hình học trong bài học <strong>{meta.tenBaiDay}</strong>! Hãy phối hợp thật ăn ý nhé!"
                  </div>
                </div>
                <div className="flex items-start gap-2.5 mt-3 self-end flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 border-2 border-slate-800 flex items-center justify-center text-lg flex-shrink-0">
                    👦
                  </div>
                  <div className="bg-yellow-50 border border-slate-700 rounded-2xl p-2.5 text-xs text-slate-800 relative rounded-tr-none flex-1">
                    <span className="font-bold text-yellow-900 block mb-0.5">Nobita bối rối:</span>
                    "Oa, bài này nhìn nhiều công thức quá, tớ sợ không làm kịp mất Doraemon ơi!"
                  </div>
                </div>
              </div>

              {/* Panel 2: Doraemon & Dekisugi */}
              <div className="bg-white border-2 border-slate-800 rounded-2xl p-3.5 shadow-sm flex flex-col justify-between">
                <div className="flex items-start gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-slate-800 flex items-center justify-center text-lg flex-shrink-0">
                    🐱
                  </div>
                  <div className="bg-blue-50 border border-slate-700 rounded-2xl p-2.5 text-xs text-slate-800 relative rounded-tl-none flex-1">
                    <span className="font-bold text-blue-900 block mb-0.5">Doraemon ra tay:</span>
                    "Nobita bình tĩnh! Tớ có com-pa và thước đo bảo bối đây. Cậu chỉ cần quan sát kỹ tâm và các đường kẻ là giải được ngay!"
                  </div>
                </div>
                <div className="flex items-start gap-2.5 mt-3 self-end flex-row-reverse">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 border-2 border-slate-800 flex items-center justify-center text-lg flex-shrink-0">
                    🎓
                  </div>
                  <div className="bg-emerald-50 border border-slate-700 rounded-2xl p-2.5 text-xs text-slate-800 relative rounded-tr-none flex-1">
                    <span className="font-bold text-emerald-900 block mb-0.5">Dekisugi gợi ý:</span>
                    "Đúng vậy! Tâm là điểm chính giữa. Đoạn từ tâm tới mép là bán kính, còn đường qua tâm nối 2 mép là đường kính!"
                  </div>
                </div>
              </div>

              {/* Panel 3: Shizuka */}
              <div className="bg-white border-2 border-slate-800 rounded-2xl p-3.5 shadow-sm flex items-start gap-2.5">
                <div className="w-10 h-10 rounded-full bg-pink-100 border-2 border-slate-800 flex items-center justify-center text-lg flex-shrink-0">
                  👧
                </div>
                <div className="bg-pink-50 border border-slate-700 rounded-2xl p-2.5 text-xs text-slate-800 relative rounded-tl-none flex-1">
                  <span className="font-bold text-pink-900 block mb-0.5">Shizuka nhắc nhở:</span>
                  "Các bạn nhớ cầm bút đo cẩn thận từng mi-li-mét nhé, mọi bán kính trong một hình tròn đều dài bằng nhau đấy!"
                </div>
              </div>

              {/* Panel 4: Jaian & Suneo */}
              <div className="bg-white border-2 border-slate-800 rounded-2xl p-3.5 shadow-sm flex items-start gap-2.5">
                <div className="w-10 h-10 rounded-full bg-orange-100 border-2 border-slate-800 flex items-center justify-center text-lg flex-shrink-0">
                  💪
                </div>
                <div className="bg-orange-50 border border-slate-700 rounded-2xl p-2.5 text-xs text-slate-800 relative rounded-tl-none flex-1">
                  <span className="font-bold text-orange-900 block mb-0.5">Jaian & Suneo thi đua:</span>
                  "Nhóm tớ chắc chắn sẽ hoàn thành nhanh nhất! Suneo bấm giờ, còn tớ sẽ giải câu đố thực tế bánh xe!"
                </div>
              </div>

            </div>

            {/* Questions Form Area */}
            <div className="bg-white border-3 border-slate-800 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5">
              <div className="flex items-center justify-between border-b-2 border-slate-800 pb-2">
                <h5 className="font-black text-sm uppercase tracking-wide text-blue-900 flex items-center gap-2">
                  <FileQuestion className="w-4 h-4 text-blue-600" />
                  PHẦN CÂU HỎI NHIỆM VỤ NHÓM (HỌC SINH TỰ LÀM VÀO DÒNG CHẤM):
                </h5>
                <span className="text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                  Không có đáp án sẵn
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-[13px]">
                {questions.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-300 space-y-1.5">
                    <p className="font-bold text-slate-900">
                      <span className="inline-block w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] text-center leading-5 mr-1.5 font-bold">
                        {idx + 1}
                      </span>
                      {q}
                    </p>
                    <div className="pl-6 space-y-1 text-slate-400 font-mono text-[11px]">
                      <p>Bài làm: ....................................................................................................................................................................................................</p>
                      <p>......................................................................................................................................................................................................................</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer with 4-ink contributions */}
            <div className="bg-slate-100 border-2 border-slate-700 rounded-2xl p-3 text-xs grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-medium">
              <div className="bg-white p-2 rounded-lg border border-blue-300 text-blue-800">
                <span className="font-bold block">1. Nhóm trưởng</span>
                <span className="text-[10px] text-slate-500">Mực xanh dương</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-slate-400 text-slate-900">
                <span className="font-bold block">2. Thư ký</span>
                <span className="text-[10px] text-slate-500">Mực đen</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-purple-300 text-purple-800">
                <span className="font-bold block">3. Kỹ thuật / Đo đạc</span>
                <span className="text-[10px] text-slate-500">Mực tím</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-emerald-300 text-emerald-800">
                <span className="font-bold block">4. Báo cáo viên</span>
                <span className="text-[10px] text-slate-500">Mực xanh lá</span>
              </div>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* STYLE 2: VỤ ÁN KHOA HỌC CHUYÊN SÂU (2 Infographics + LaTeX) */}
        {/* ============================================================== */}
        {style === 'science-case' && (
          <div className="space-y-6 max-w-4xl mx-auto">
            
            {/* Infographic 1: Bối cảnh & Manh mối */}
            <div className="bg-slate-900 text-slate-100 border-4 border-indigo-500 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-5">
              <div className="flex flex-col sm:flex-row items-center justify-between border-b border-indigo-700 pb-3 gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-xl shadow-md">
                    🔬
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-300 bg-indigo-950 px-2 py-0.5 rounded border border-indigo-700">
                      INFOGRAPHIC 1: HỒ SƠ VỤ ÁN & 4 MANH MỐI KHOA HỌC
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
                      VỤ ÁN KHOA HỌC: BÍ MẬT {meta.tenBaiDay.toUpperCase()}
                    </h3>
                  </div>
                </div>
                <span className="text-xs text-indigo-300 bg-indigo-900/60 px-3 py-1 rounded-full border border-indigo-600">
                  Chuẩn GDPT 2018 • Sách {meta.boSach}
                </span>
              </div>

              {/* Bối cảnh */}
              <div className="bg-indigo-950/70 border border-indigo-600 rounded-2xl p-4 text-xs sm:text-sm leading-relaxed text-indigo-100">
                <span className="font-bold text-amber-300 block mb-1 flex items-center gap-1.5">
                  <Search className="w-4 h-4 text-amber-300" /> Bối cảnh hiện trường:
                </span>
                Tại Viện Bảo tàng Khoa học, một cổ vật hình học quý giá có niên đại ngàn năm bỗng biến mất. Kẻ trộm chỉ để lại trên màn hình máy quét 4 manh mối khoa học bí ẩn. Học sinh hãy đóng vai Chuyên gia giải mã để lần theo các công thức khoa học tìm lại hiện vật!
              </div>

              {/* 4 Manh mối khoa học */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs">
                
                <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-indigo-500/50 space-y-1.5">
                  <span className="text-amber-400 font-bold block flex items-center gap-1">
                    <span>🗝️</span> Manh mối 1 (Khái niệm trung tâm):
                  </span>
                  <p className="text-slate-300 leading-relaxed">
                    Điểm nằm ở vị trí chính giữa đối xứng hoàn hảo, giữ khoảng cách tuyệt đối đến mọi điểm trên mép ngoài: <strong>Tâm đối xứng O</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-indigo-500/50 space-y-1.5">
                  <span className="text-cyan-400 font-bold block flex items-center gap-1">
                    <span>📏</span> Manh mối 2 (Bán kính $r$):
                  </span>
                  <p className="text-slate-300 leading-relaxed font-mono">
                    Khoảng cách từ tâm đến bất kỳ điểm nào trên đường tròn luôn không đổi: <strong>\(OM = ON = OP = r\)</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-indigo-500/50 space-y-1.5">
                  <span className="text-emerald-400 font-bold block flex items-center gap-1">
                    <span>⚡</span> Manh mối 3 (Đường kính $d$):
                  </span>
                  <p className="text-slate-300 leading-relaxed font-mono">
                    Đoạn thẳng đi qua tâm nối hai điểm đối diện là đoạn thẳng dài nhất, gấp đôi bán kính: <strong>\(d = 2 \times r\)</strong> hay <strong>\(r = \frac&#123;d&#125;&#123;2&#125;\)</strong>.
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/90 border border-indigo-500/50 space-y-1.5">
                  <span className="text-pink-400 font-bold block flex items-center gap-1">
                    <span>🔐</span> Manh mối 4 (Mật mã chu vi & đối xứng):
                  </span>
                  <p className="text-slate-300 leading-relaxed font-mono">
                    Công thức chìa khóa mở hầm ngầm: <strong>\(C = 2 \times \pi \times r = \pi \times d\)</strong> (với \(\pi \approx 3,14\)).
                  </p>
                </div>

              </div>
            </div>

            {/* Infographic 2: Bài tập phá án */}
            <div className="bg-white border-4 border-indigo-600 rounded-3xl p-5 sm:p-7 shadow-xl space-y-4 text-slate-800">
              <div className="flex items-center justify-between border-b-2 border-slate-200 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                    INFOGRAPHIC 2: BẢNG GIẢI MÃ PHÁ ÁN
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                    CÁC BÀI TẬP TRUY TÌM CHÂN TƯỚNG (KHÔNG CÓ ĐÁP ÁN TRÊN PHIẾU)
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAnswerKey(!showAnswerKey)}
                  className="px-3 py-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-300 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <KeyRound className="w-3.5 h-3.5" />
                  <span>{showAnswerKey ? 'Ẩn Đáp Án GV' : 'Đáp Án Riêng (Cho GV)'}</span>
                </button>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                {questions.map((q, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl space-y-1.5">
                    <p className="font-semibold text-slate-900">
                      <span className="font-bold text-indigo-600 mr-1.5">Câu hỏi {idx + 1} (Theo manh mối {idx + 1}):</span>
                      {q}
                    </p>
                    <p className="text-slate-400 font-mono text-xs pl-4">
                      Giải mã: ................................................................................................................................................................................
                    </p>
                  </div>
                ))}
              </div>

              {/* Phần kết quả riêng biệt cho GV */}
              {showAnswerKey && (
                <div className="mt-4 p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 text-amber-900 text-xs space-y-1.5 animate-fadeIn">
                  <p className="font-bold uppercase tracking-wide flex items-center gap-1.5 text-amber-950">
                    <Award className="w-4 h-4 text-amber-600" />
                    ĐÁP ÁN GIẢI MÃ VỤ ÁN DÀNH CHO GIÁO VIÊN (CHUẨN LATEX):
                  </p>
                  <p>- Đáp án 1: Tâm O là trung điểm; các bán kính có độ dài bằng nhau: \(r = OM = OA = OB\).</p>
                  <p>- Đáp án 2: Đo đạc chuẩn xác theo thước cm; đường kính dài gấp đôi bán kính.</p>
                  <p>- Đáp án 3: Công thức nghiệm: \(d = 2r \iff r = \frac&#123;d&#125;&#123;2&#125;\).</p>
                  <p>- Đáp án 4: Đường kính bánh xe: \(d = 2 \times 8\text&#123; cm&#125; = 16\text&#123; cm&#125;\).</p>
                </div>
              )}
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* STYLE 3: POSTER THÁM TỬ CONAN (Tỉ lệ 1,414:1 A4 Ngang) */}
        {/* ============================================================== */}
        {style === 'conan' && (
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white border-4 border-red-600 rounded-3xl p-5 sm:p-7 shadow-2xl max-w-4xl mx-auto space-y-5">
            
            {/* Header Poster */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-b-2 border-red-600/60 pb-3 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-red-600 flex items-center justify-center text-2xl shadow-lg shadow-red-900/50 flex-shrink-0">
                  🔍
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-800">
                    POSTER PHÁ ÁN ANIME • TỈ LỆ 1,414:1 (A4 NGANG)
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white tracking-wide mt-0.5">
                    HỒ SƠ VỤ ÁN CONAN: {meta.tenBaiDay.toUpperCase()}
                  </h3>
                </div>
              </div>
              <div className="text-right text-xs text-slate-400">
                <p>Thám tử nhí: .................................</p>
                <p>Lớp {meta.khoiLop} • Bộ sách {meta.boSach}</p>
              </div>
            </div>

            {/* Poster Comic Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              
              {/* Conan Character Box */}
              <div className="bg-slate-800/80 border-2 border-red-500/80 rounded-2xl p-4 flex flex-col justify-between text-xs space-y-3">
                <div className="flex items-center gap-2 text-red-400 font-bold">
                  <span className="text-xl">🕵️‍♂️</span>
                  <span>Edogawa Conan phân tích:</span>
                </div>
                <p className="italic text-slate-300 leading-relaxed">
                  "Chỉ có một chân tướng duy nhất! Kẻ trộm nghĩ rằng đã che giấu được vết tích, nhưng hắn không ngờ quy luật của bài học <strong>{meta.tenBaiDay}</strong> đã vạch trần mọi sự thật!"
                </p>
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-red-900 text-[11px] text-red-300">
                  🎯 Vũ khí phá án: Kính định vị & Thước đo chính xác
                </div>
              </div>

              {/* Detective Boys & Ran */}
              <div className="bg-slate-800/80 border-2 border-blue-500/80 rounded-2xl p-4 flex flex-col justify-between text-xs space-y-3">
                <div className="flex items-center gap-2 text-blue-400 font-bold">
                  <span className="text-xl">👥</span>
                  <span>Đội Thám Tử Nhí Lớp 1B:</span>
                </div>
                <div className="space-y-1.5 text-slate-300 text-[11.5px]">
                  <p>• <strong>Ayumi:</strong> "Tớ tìm thấy manh mối 1 ở góc phòng rồi này!"</p>
                  <p>• <strong>Genta:</strong> "Bánh xe lăn tròn đều thế này chắc chắn là do tâm O đối xứng!"</p>
                  <p>• <strong>Mitsuhiko:</strong> "Tớ đã ghi lại công thức: d = 2 x r vào sổ tay thám tử!"</p>
                </div>
              </div>

              {/* Professor Agasa Gadgets */}
              <div className="bg-slate-800/80 border-2 border-amber-500/80 rounded-2xl p-4 flex flex-col justify-between text-xs space-y-3">
                <div className="flex items-center gap-2 text-amber-400 font-bold">
                  <span className="text-xl">👨‍🔬</span>
                  <span>Bác Tiến Sĩ Agasa:</span>
                </div>
                <p className="text-slate-300 leading-relaxed text-[11.5px]">
                  "Ta vừa chế tạo xong cỗ máy quét hình học tự động. Các cháu hãy điền đáp án vào các ô trống dưới đây để kích hoạt cỗ máy nhé!"
                </p>
                <div className="p-2 rounded-xl bg-amber-950/60 border border-amber-700 text-[11px] text-amber-200">
                  ⚡ Năng lượng: Cần 4 câu trả lời chính xác
                </div>
              </div>

            </div>

            {/* Questions Section */}
            <div className="bg-slate-900/90 border-2 border-slate-700 rounded-2xl p-4 space-y-3 text-xs">
              <h5 className="font-bold uppercase tracking-wider text-red-400 text-xs flex items-center gap-1.5">
                <span>📝</span> CÁC CÂU HỎI TRUY TÌM CHÂN TƯỚNG (ĐỂ TRỐNG DÒNG CHẤM CHO HỌC SINH):
              </h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {questions.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-800/90 border border-slate-600 space-y-1">
                    <p className="font-semibold text-slate-200">
                      <span className="text-red-400 font-bold mr-1">Manh mối {idx + 1}:</span>
                      {q}
                    </p>
                    <p className="text-slate-500 font-mono text-[11px]">
                      Đáp án: ........................................................................................
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* STYLE 4: HỌC SINH LỚP [khoiLop] DỄ THƯƠNG (Tỉ lệ 1:1,414) */}
        {/* ============================================================== */}
        {style === 'cute-students' && (
          <div className="bg-gradient-to-b from-emerald-50 via-teal-50/40 to-amber-50/50 border-4 border-emerald-400 rounded-3xl p-5 sm:p-7 shadow-xl max-w-3xl mx-auto space-y-5 text-slate-800">
            
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-4 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white text-emerald-600 flex items-center justify-center text-2xl shadow-sm flex-shrink-0">
                  🎒
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-200 bg-emerald-800 px-2 py-0.5 rounded-full inline-block">
                    PHIẾU HỌC TẬP HOẠT HÌNH 3D PIXAR • TỈ LỆ 1:1,414
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-white mt-0.5">
                    GÓC HỌC TẬP SÁNG TẠO LỚP {meta.khoiLop}
                  </h3>
                  <p className="text-xs text-emerald-100">
                    Bài: {meta.tenBaiDay} • Môn: {meta.monHoc} • Bộ sách: {meta.boSach}
                  </p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-3 py-1.5 text-xs text-right text-emerald-50">
                <p>Nhóm: ....................................</p>
                <p>Họ và tên: ...............................</p>
              </div>
            </div>

            {/* 4 Chibi Students Dialogue Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              
              <div className="p-3.5 rounded-2xl bg-white border-2 border-emerald-300 shadow-xs flex items-start gap-2.5">
                <span className="text-2xl">👦</span>
                <div className="space-y-0.5">
                  <span className="font-bold text-emerald-800 block">Bạn Minh (Nhóm trưởng):</span>
                  <p className="text-slate-600 leading-relaxed">
                    "Chào cả nhóm! Hôm nay chúng mình cùng giải mã bài học <strong>{meta.tenBaiDay}</strong> nhé!"
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border-2 border-teal-300 shadow-xs flex items-start gap-2.5">
                <span className="text-2xl">👧</span>
                <div className="space-y-0.5">
                  <span className="font-bold text-teal-800 block">Bạn Lan (Thư ký):</span>
                  <p className="text-slate-600 leading-relaxed">
                    "Tớ có thước đo và bút chì sẵn rồi, tớ sẽ ghi chép thật nắn nót kết quả của nhóm!"
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border-2 border-amber-300 shadow-xs flex items-start gap-2.5">
                <span className="text-2xl">🧑‍🔧</span>
                <div className="space-y-0.5">
                  <span className="font-bold text-amber-800 block">Bạn An (Kỹ sư thao tác):</span>
                  <p className="text-slate-600 leading-relaxed">
                    "Tớ vừa đo xong, các bán kính đều bằng nhau chằn chặn luôn các bạn ơi!"
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border-2 border-rose-300 shadow-xs flex items-start gap-2.5">
                <span className="text-2xl">⭐</span>
                <div className="space-y-0.5">
                  <span className="font-bold text-rose-800 block">Bạn Hoa (Báo cáo viên):</span>
                  <p className="text-slate-600 leading-relaxed">
                    "Tớ đã sẵn sàng lên bảng chia sẻ với thầy cô và các bạn rồi, cố lên nào!"
                  </p>
                </div>
              </div>

            </div>

            {/* Questions Form */}
            <div className="bg-white border-2 border-emerald-400 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3 text-xs sm:text-[13px]">
              <div className="flex items-center justify-between border-b border-emerald-200 pb-2">
                <h5 className="font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                  <HelpCircle className="w-4 h-4 text-emerald-600" />
                  CÁC BÀI TẬP EM CẦN HOÀN THÀNH:
                </h5>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  4 nhiệm vụ vừa sức
                </span>
              </div>

              <div className="space-y-3">
                {questions.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-1.5">
                    <p className="font-bold text-emerald-950">
                      <span className="inline-block w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] text-center leading-5 mr-1.5">
                        {idx + 1}
                      </span>
                      {q}
                    </p>
                    <p className="text-slate-400 font-mono text-xs pl-6">
                      Trả lời: ........................................................................................................................................................................
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
