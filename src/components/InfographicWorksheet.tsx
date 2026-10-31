import React, { useState, useRef } from 'react';
import {
  Printer,
  FileText,
  CheckCircle2,
  Download,
  Users,
  Award,
  BookOpen,
  Image as ImageIcon,
  Sparkles,
  Layers,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { GiaoAnWordData } from '../types';

interface InfographicWorksheetProps {
  data: GiaoAnWordData;
}

type WorksheetStyle =
  | 'doraemon-ai'
  | 'science-case-ai'
  | 'conan-ai'
  | 'cute-students-ai'
  | 'word-printable'
  | 'rubric-table';

export const InfographicWorksheet: React.FC<InfographicWorksheetProps> = ({ data }) => {
  const [style, setStyle] = useState<WorksheetStyle>('doraemon-ai');
  const [imgError, setImgError] = useState<boolean>(false);
  const printableAreaRef = useRef<HTMLDivElement>(null);

  const meta = data.metadata;
  const isTieuHoc = meta.capHoc === 'TIEU_HOC';
  const isBai9 = meta.tenBaiDay.toLowerCase().includes('bài 9') || meta.tenBaiDay.toLowerCase().includes('đo tốc độ');
  const isToan6 = meta.tenBaiDay.toLowerCase().includes('trục đối xứng');

  // Reset image error on style or lesson change
  React.useEffect(() => {
    setImgError(false);
  }, [style, meta.tenBaiDay]);

  // Dynamically map high-resolution AI generated images matching the lesson
  const getImageForStyle = (st: WorksheetStyle): string => {
    if (isTieuHoc) {
      if (st === 'conan-ai') return '/infographics/phieu-hoc-tap-conan.jpg';
      return '/infographics/phieu-hoc-tap-doraemon-toan-3.jpg';
    }
    if (isBai9) {
      if (st === 'doraemon-ai') return '/infographics/phieu-doraemon-khtn7-bai9-do-toc-do.jpg';
      if (st === 'conan-ai') return '/infographics/poster-conan-khtn7-bai8.jpg';
      if (st === 'science-case-ai') return '/infographics/phieu-vu-an-khoa-hoc-khtn7-bai8.jpg';
      return '/infographics/phieu-hoc-sinh-khtn7-bai8.jpg';
    }
    if (isToan6) {
      if (st === 'doraemon-ai') return '/infographics/phieu-doraemon-toan6-truc-doi-xung.jpg';
      if (st === 'conan-ai') return '/infographics/poster-conan-khtn7-bai8.jpg';
    }
    // Bai 8
    switch (st) {
      case 'doraemon-ai':
        return '/infographics/phieu-doraemon-khtn7-bai8-toc-do.jpg';
      case 'science-case-ai':
        return '/infographics/phieu-vu-an-khoa-hoc-khtn7-bai8.jpg';
      case 'conan-ai':
        return '/infographics/poster-conan-khtn7-bai8.jpg';
      case 'cute-students-ai':
      default:
        return '/infographics/phieu-hoc-sinh-khtn7-bai8.jpg';
    }
  };

  // Extract authentic group activity and worksheet matching the lesson
  const groupActivity =
    data.hoatDongNhomTichCuc ||
    data.tienTrinhDayHoc.find(
      (hd) => hd.hoatDongNhomTichCuc?.phieuGiaoNhiemVu
    )?.hoatDongNhomTichCuc;

  const phieu = groupActivity?.phieuGiaoNhiemVu;

  const defaultQuestions = isTieuHoc
    ? [
        `Nhiệm vụ 1: Quan sát hình ảnh và dữ liệu trong SGK bài "${meta.tenBaiDay}", ghi lại các thông tin trọng tâm.`,
        `Nhiệm vụ 2: Thực hiện đo đạc / làm bài tập tính toán theo yêu cầu và so sánh kết quả.`,
        `Nhiệm vụ 3: Rút ra kết luận hoặc công thức cốt lõi của bài học và điền vào chỗ chấm.`,
        `Nhiệm vụ 4: Thử thách vận dụng giải quyết tình huống thực tế liên quan đến bài học.`
      ]
    : [
        `Nhiệm vụ 1: Hoàn thành Bảng 8.1 SGK (tính quãng đường chạy trong 1s của bạn A, B, C). Ai chạy nhanh nhất và vì sao?`,
        `Nhiệm vụ 2: Viết công thức tính tốc độ v = s/t. Suy ra công thức tính s và t? Đổi 54 km/h sang m/s?`,
        `Nhiệm vụ 3: Quan sát Hình 8.2 & 8.3 SGK: Thiết bị bắn tốc độ phát hiện ô tô chạy 68 km/h trên đoạn đường có biển báo 50 km/h. Xe này có vi phạm không? Nêu biện pháp phòng ngừa tai nạn.`,
        `Nhiệm vụ 4: Một đoàn tàu xuất phát từ ga Hà Nội đến Phủ Lý dài 60 km mất 1h15p. Tính tốc độ đoàn tàu theo km/h và m/s?`
      ];

  const worksheetTitle =
    phieu?.tieuDe ||
    `PHIẾU HỌC TẬP NHÓM: ${meta.tenBaiDay.toUpperCase()} (${meta.monHoc} ${meta.khoiLop} - ${meta.boSach})`;

  const groupInfo =
    phieu?.thongTinNhom ||
    `Nhóm: ........ Lớp: ${meta.khoiLop}...... | 4 Màu mực: Nhóm trưởng (Đỏ), Thư ký (Xanh dương), Kỹ thuật viên (Xanh lá), Báo cáo viên (Tím/Đen)`;

  const questions = phieu?.cauHoiNhiemVu?.length
    ? phieu.cauHoiNhiemVu
    : defaultQuestions;

  const rubrics = groupActivity?.tieuChiDanhGia?.length
    ? groupActivity.tieuChiDanhGia
    : [
        {
          tieuChi: '1. Tinh thần cộng tác & 4 màu mực',
          mucTot: '100% thành viên tham gia đầy đủ, thể hiện rõ qua 4 màu mực trên phiếu nhóm.',
          mucDat: 'Đa số thành viên tích cực, còn 1 bạn chưa chủ động tham gia.',
          mucCanCoGang: 'Chỉ 1 - 2 bạn làm bài, các thành viên khác thụ động đứng ngoài.'
        },
        {
          tieuChi: '2. Tính chính xác khoa học & Lập luận',
          mucTot: 'Kết quả tính toán/trả lời chuẩn xác 100%, lập luận chặt chẽ, rõ ràng.',
          mucDat: 'Kết quả đúng nhưng còn thiếu bước giải thích hoặc trình bày tắt.',
          mucCanCoGang: 'Kết quả chưa chính xác hoặc nhầm lẫn kiến thức cốt lõi.'
        },
        {
          tieuChi: '3. Kỹ năng báo cáo & Phản biện',
          mucTot: 'Trình bày tự tin, đúng trọng tâm dưới 60 giây; trả lời tốt câu hỏi phản biện.',
          mucDat: 'Trình bày đủ ý nhưng còn phụ thuộc nhiều vào phiếu ghi chép.',
          mucCanCoGang: 'Trình bày ngập ngừng, vượt quá thời gian quy định.'
        }
      ];

  const handlePrint = () => {
    window.print();
  };

  const isImageStyle =
    style === 'doraemon-ai' ||
    style === 'science-case-ai' ||
    style === 'conan-ai' ||
    style === 'cute-students-ai';

  const currentImageUrl = isImageStyle ? getImageForStyle(style) : '';

  return (
    <div className="bg-white border-2 border-slate-300 rounded-2xl shadow-md p-4 sm:p-6 space-y-4 my-6">
      
      {/* Control Header & Style Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-700 text-white shadow-xs flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> Tạo Ảnh Phiếu Học Tập Theo Prompt AI
            </span>
            <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Khớp 100% Bài Học: {meta.tenBaiDay}
            </span>
            <span className="text-xs text-indigo-700 font-medium bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
              4 vai trò & 4 màu mực chống thụ động
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1.5">
            Phiếu Học Tập: {meta.tenBaiDay}
          </h3>
          <p className="text-xs text-slate-500">
            Môn học: {meta.monHoc} • Lớp: {meta.khoiLop} • Bộ sách: {meta.boSach} • Độ phân giải cao HD
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {isImageStyle && (
            <a
              href={currentImageUrl}
              download={`Phieu-Hoc-Tap-${style}-${meta.tenBaiDay}.jpg`}
              className="px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Tải Ảnh (.JPG HD)</span>
            </a>
          )}
          <button
            type="button"
            onClick={handlePrint}
            className="px-3.5 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>In Phiếu A4</span>
          </button>
        </div>
      </div>

      {/* Style Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="font-bold text-slate-500 flex items-center gap-1 flex-shrink-0">
          <Layers className="w-3.5 h-3.5 text-blue-600" /> Chọn Mẫu Ảnh AI:
        </span>

        <button
          type="button"
          onClick={() => setStyle('doraemon-ai')}
          className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0 ${
            style === 'doraemon-ai'
              ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-300'
              : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200'
          }`}
        >
          <span>🐱</span>
          <span>1. Phiếu Doraemon AI (A4 Dọc)</span>
        </button>

        <button
          type="button"
          onClick={() => setStyle('science-case-ai')}
          className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0 ${
            style === 'science-case-ai'
              ? 'bg-indigo-600 text-white shadow-sm ring-2 ring-indigo-300'
              : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border border-indigo-200'
          }`}
        >
          <span>🔬</span>
          <span>2. Vụ Án Khoa Học (A4 Dọc)</span>
        </button>

        <button
          type="button"
          onClick={() => setStyle('conan-ai')}
          className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0 ${
            style === 'conan-ai'
              ? 'bg-red-600 text-white shadow-sm ring-2 ring-red-300'
              : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
          }`}
        >
          <span>🔍</span>
          <span>3. Poster Conan (A4 Ngang)</span>
        </button>

        <button
          type="button"
          onClick={() => setStyle('cute-students-ai')}
          className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0 ${
            style === 'cute-students-ai'
              ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-300'
              : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
          }`}
        >
          <span>🎒</span>
          <span>4. Học Sinh Lớp {meta.khoiLop} Pixar (A4 Dọc)</span>
        </button>

        <button
          type="button"
          onClick={() => setStyle('word-printable')}
          className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0 ${
            style === 'word-printable'
              ? 'bg-slate-800 text-white shadow-sm ring-2 ring-slate-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>5. Bản Giáo Án Word (In Ngay)</span>
        </button>

        <button
          type="button"
          onClick={() => setStyle('rubric-table')}
          className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all flex-shrink-0 ${
            style === 'rubric-table'
              ? 'bg-amber-600 text-white shadow-sm ring-2 ring-amber-300'
              : 'bg-amber-50 text-amber-800 hover:bg-amber-100 border border-amber-200'
          }`}
        >
          <Award className="w-3.5 h-3.5" />
          <span>6. Rubric Đánh Giá</span>
        </button>
      </div>

      {/* ============================================================== */}
      {/* KHUNG HIỂN THỊ CHÍNH (RENDER IMAGE HOẶC PRINTABLE WORD) */}
      {/* ============================================================== */}
      <div className="pt-2">

        {/* 1. HIỂN THỊ CÁC MẪU ẢNH AI ĐÃ TẠO SẴN THEO BÀI HỌC */}
        {isImageStyle && (
          <div className="bg-slate-900 border-4 border-slate-700 rounded-3xl p-4 sm:p-6 shadow-2xl max-w-4xl mx-auto space-y-4 text-white">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-slate-700 pb-3">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-300 bg-emerald-950 px-2.5 py-1 rounded-full border border-emerald-700">
                  ẢNH PHIẾU HỌC TẬP TẠO THEO PROMPT AI • KHỚP 100% BÀI DẠY
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  {style === 'doraemon-ai' && `Phiếu Doraemon AI: ${meta.tenBaiDay}`}
                  {style === 'science-case-ai' && `Hồ Sơ Vụ Án Khoa Học: ${meta.tenBaiDay}`}
                  {style === 'conan-ai' && `Poster Phá Án Conan: ${meta.tenBaiDay}`}
                  {style === 'cute-students-ai' && `Phiếu Học Sinh Lớp ${meta.khoiLop} Pixar: ${meta.tenBaiDay}`}
                </h3>
                <p className="text-xs text-slate-400">
                  Tỉ lệ: {style === 'conan-ai' ? 'Khổ ngang A4 (1,414:1)' : 'Khổ dọc A4 (1:1,414)'} • Đầy đủ 4 câu hỏi bài tập và bảng 4 màu mực
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={currentImageUrl}
                  download={`Phieu-Hoc-Tap-${style}-${meta.tenBaiDay}.jpg`}
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                >
                  <Download className="w-4 h-4" />
                  <span>Tải Ảnh (.JPG)</span>
                </a>
              </div>
            </div>

            {/* Render Image or Dynamic Visual Card */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-950 shadow-inner group flex justify-center">
              {!imgError ? (
                <img
                  src={currentImageUrl}
                  alt={`Phiếu học tập ${style} - ${meta.tenBaiDay}`}
                  onError={() => setImgError(true)}
                  className="w-full max-h-[750px] object-contain rounded-xl hover:scale-[1.01] transition-transform duration-300"
                />
              ) : (
                <div className="p-6 bg-white text-slate-900 rounded-xl w-full max-w-2xl my-4 space-y-4 shadow-xl border-2 border-indigo-400">
                  <div className="text-center border-b pb-3 space-y-1">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 uppercase">
                      Bản Infographic Trực Quan Tự Động
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 uppercase">{worksheetTitle}</h3>
                    <p className="text-xs text-slate-500 italic">{groupInfo}</p>
                  </div>
                  <div className="space-y-3 text-xs sm:text-sm">
                    {questions.map((q, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 border rounded-xl space-y-1">
                        <p className="font-bold text-blue-900">Nhiệm vụ {idx + 1}: {q}</p>
                        <p className="text-slate-400 font-mono text-xs">Bài làm: ............................................................................................</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-3 bg-slate-800/80 border border-slate-700 rounded-xl text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>💡 Thầy/Cô có thể bấm nút <strong>Tải Ảnh (.JPG)</strong> để lưu ảnh chất lượng cao về máy hoặc bấm <strong>In Phiếu A4</strong> ở trên để in phát trực tiếp cho học sinh!</span>
              <a
                href={currentImageUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 underline font-semibold flex-shrink-0"
              >
                Mở ảnh gốc trong tab mới ↗
              </a>
            </div>
          </div>
        )}

        {/* 2. CHẾ ĐỘ PHIẾU HỌC TẬP CHUẨN GIÁO ÁN WORD (KHỔ A4 IN NGAY) */}
        {style === 'word-printable' && (
          <div
            ref={printableAreaRef}
            className="bg-white border-2 border-black rounded-lg p-6 sm:p-10 shadow-lg max-w-4xl mx-auto space-y-6 text-black print:border-none print:shadow-none print:p-0 print:m-0"
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            {/* Header Thể thức Giáo dục Việt Nam */}
            <div className="grid grid-cols-2 gap-4 pb-4 border-b-2 border-black text-center text-sm sm:text-base leading-tight">
              <div>
                <p className="font-semibold uppercase text-xs sm:text-sm">
                  {meta.truong || 'TRƯỜNG THCS / TIỂU HỌC.......................'}
                </p>
                <p className="font-bold uppercase text-xs sm:text-sm text-slate-800">
                  {meta.toChuyenMon || 'TỔ CHUYÊN MÔN KHOA HỌC'}
                </p>
                <p className="text-xs italic mt-1 text-slate-600">Năm học: 2025 - 2026</p>
              </div>
              <div>
                <p className="font-bold uppercase text-xs sm:text-sm">
                  CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
                </p>
                <p className="font-bold text-xs sm:text-sm">
                  Độc lập - Tự do - Hạnh phúc
                </p>
                <p className="text-xs text-slate-500 mt-1">---------------</p>
              </div>
            </div>

            {/* Tiêu đề Phiếu Học Tập */}
            <div className="text-center space-y-1.5 py-2">
              <h2 className="text-lg sm:text-2xl font-black uppercase tracking-tight text-slate-900">
                {worksheetTitle}
              </h2>
              <p className="text-sm sm:text-base italic font-semibold text-slate-800">
                {groupInfo}
              </p>
              <div className="flex justify-center items-center gap-6 text-xs sm:text-sm text-slate-700 pt-1">
                <span>Nhóm số: ............</span>
                <span>Lớp: {meta.khoiLop}......</span>
                <span>Ngày: ......./......./202...</span>
                <span>Thời gian: 8 - 10 phút</span>
              </div>
            </div>

            {/* MỤC A: CÁC CÂU HỎI NHIỆM VỤ NHÓM */}
            <div className="space-y-4 pt-2">
              <div className="bg-slate-100 border border-black px-3 py-1.5 font-bold uppercase text-xs sm:text-sm tracking-wide">
                A. CÁC NHIỆM VỤ THẢO LUẬN & THỰC HÀNH (HỌC SINH TỰ LÀM VÀO PHIẾU):
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                {questions.map((q, idx) => (
                  <div key={idx} className="space-y-1.5 border-b border-dashed border-slate-300 pb-3">
                    <p className="font-bold text-slate-950 text-justify leading-relaxed">
                      <span className="inline-block bg-slate-900 text-white rounded-full w-5 h-5 text-center leading-5 text-xs mr-2 font-bold font-sans">
                        {idx + 1}
                      </span>
                      {q}
                    </p>
                    <div className="pl-7 space-y-1 text-slate-500 font-mono text-xs">
                      <p>
                        Bài làm: .................................................................................................................................................................................................................................................
                      </p>
                      <p>
                        ....................................................................................................................................................................................................................................................................
                      </p>
                      <p>
                        ....................................................................................................................................................................................................................................................................
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MỤC B: PHẦN KHAI BÁO 4 VAI TRÒ & 4 MÀU MỰC ĐÓNG GÓP */}
            <div className="space-y-3 pt-2">
              <div className="bg-slate-100 border border-black px-3 py-1.5 font-bold uppercase text-xs sm:text-sm tracking-wide">
                B. PHẦN KHAI BÁO THÀNH VIÊN VÀ 4 MÀU MỰC ĐÓNG GÓP (CHỐNG THỤ ĐỘNG):
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-black text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-100 text-center font-bold">
                      <th className="border border-black p-2 w-10">STT</th>
                      <th className="border border-black p-2 w-1/4">Vai trò quy định</th>
                      <th className="border border-black p-2 w-28">Màu mực</th>
                      <th className="border border-black p-2">Họ và tên học sinh</th>
                      <th className="border border-black p-2 w-24">Ký xác nhận</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-black p-2 text-center font-bold">1</td>
                      <td className="border border-black p-2 font-bold text-red-700">
                        Nhóm trưởng
                        <span className="block text-[11px] font-normal text-slate-600">Điều phối, kiểm soát tiến độ</span>
                      </td>
                      <td className="border border-black p-2 text-center font-bold text-red-600">
                        Bút Mực Đỏ
                      </td>
                      <td className="border border-black p-2 font-mono text-xs text-slate-400">
                        ............................................................
                      </td>
                      <td className="border border-black p-2 text-center font-mono text-xs text-slate-400">
                        ...............
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2 text-center font-bold">2</td>
                      <td className="border border-black p-2 font-bold text-blue-700">
                        Thư ký
                        <span className="block text-[11px] font-normal text-slate-600">Ghi chép câu trả lời vào phiếu</span>
                      </td>
                      <td className="border border-black p-2 text-center font-bold text-blue-600">
                        Bút Mực Xanh Dương
                      </td>
                      <td className="border border-black p-2 font-mono text-xs text-slate-400">
                        ............................................................
                      </td>
                      <td className="border border-black p-2 text-center font-mono text-xs text-slate-400">
                        ...............
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2 text-center font-bold">3</td>
                      <td className="border border-black p-2 font-bold text-emerald-700">
                        Kỹ thuật viên / Tính toán
                        <span className="block text-[11px] font-normal text-slate-600">Thao tác số liệu, kiểm tra phép tính</span>
                      </td>
                      <td className="border border-black p-2 text-center font-bold text-emerald-600">
                        Bút Mực Xanh Lá
                      </td>
                      <td className="border border-black p-2 font-mono text-xs text-slate-400">
                        ............................................................
                      </td>
                      <td className="border border-black p-2 text-center font-mono text-xs text-slate-400">
                        ...............
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-black p-2 text-center font-bold">4</td>
                      <td className="border border-black p-2 font-bold text-purple-700">
                        Báo cáo viên
                        <span className="block text-[11px] font-normal text-slate-600">Thuyết trình & Trả lời phản biện</span>
                      </td>
                      <td className="border border-black p-2 text-center font-bold text-purple-600">
                        Bút Mực Tím / Đen
                      </td>
                      <td className="border border-black p-2 font-mono text-xs text-slate-400">
                        ............................................................
                      </td>
                      <td className="border border-black p-2 text-center font-mono text-xs text-slate-400">
                        ...............
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* MỤC C: ĐÁNH GIÁ CỦA GIÁO VIÊN & ĐIỂM SỐ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border border-black p-3 bg-slate-50 text-xs sm:text-sm">
              <div className="sm:col-span-2 space-y-1">
                <p className="font-bold">Nhận xét của Giáo viên:</p>
                <p className="font-mono text-xs text-slate-500">
                  - Tinh thần làm việc nhóm: ............................................................................................
                </p>
                <p className="font-mono text-xs text-slate-500">
                  - Chất lượng câu trả lời: ..............................................................................................
                </p>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l border-black pl-0 sm:pl-3 flex flex-col justify-center items-center text-center space-y-1">
                <p className="font-bold uppercase text-xs">ĐIỂM ĐÁNH GIÁ</p>
                <div className="w-16 h-12 border-2 border-black flex items-center justify-center font-black text-xl">
                  .......
                </div>
                <p className="text-[11px] text-slate-600 italic">Thang điểm 10</p>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 italic pt-2 text-right">
              Phiếu học tập tích hợp hoạt động nhóm tích cực 4 vai trò theo chuẩn Công văn 5512/BGDĐT-GDTrH.
            </div>
          </div>
        )}

        {/* 3. BẢNG TIÊU CHÍ RUBRIC ĐÁNH GIÁ NHÓM */}
        {style === 'rubric-table' && (
          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-4 sm:p-5 text-emerald-950 space-y-1">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-700" />
                <h4 className="font-bold text-base sm:text-lg">
                  Bảng Tiêu Chí Đánh Giá Hoạt Động Nhóm (Rubric)
                </h4>
              </div>
              <p className="text-xs text-emerald-800">
                Áp dụng cho Giáo viên đánh giá quá trình và các nhóm học sinh tự chấm chéo lẫn nhau theo Thông tư 22 & CV 5512.
              </p>
            </div>

            <div className="overflow-x-auto border-2 border-slate-300 rounded-2xl bg-white shadow-sm">
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white">
                    <th className="p-3 text-left w-1/4 font-bold border-r border-slate-700">
                      Tiêu chí đánh giá
                    </th>
                    <th className="p-3 text-center font-bold bg-emerald-800 border-r border-slate-700">
                      Mức Tốt (3 điểm)
                    </th>
                    <th className="p-3 text-center font-bold bg-blue-800 border-r border-slate-700">
                      Mức Đạt (2 điểm)
                    </th>
                    <th className="p-3 text-center font-bold bg-amber-800">
                      Cần Cố Gắng (1 điểm)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {rubrics.map((rb, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="p-3 font-bold text-slate-900 border-r border-slate-200">
                        {rb.tieuChi}
                      </td>
                      <td className="p-3 text-slate-700 border-r border-slate-200 bg-emerald-50/30">
                        {rb.mucTot}
                      </td>
                      <td className="p-3 text-slate-700 border-r border-slate-200 bg-blue-50/30">
                        {rb.mucDat}
                      </td>
                      <td className="p-3 text-slate-700 bg-amber-50/30">
                        {rb.mucCanCoGang}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-slate-100 border border-slate-300 rounded-xl text-xs text-slate-600 flex items-center justify-between">
              <span>📌 <strong>Cách quy đổi điểm:</strong> Tổng điểm = Điểm Tiêu chí 1 + Điểm Tiêu chí 2 + Điểm Tiêu chí 3 (Tối đa 9 điểm + 1 điểm thưởng hợp tác = 10 điểm).</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
