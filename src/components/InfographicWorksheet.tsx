import React, { useState, useRef } from 'react';
import {
  Printer,
  FileText,
  CheckCircle2,
  Users,
  Award,
  BookOpen,
  Edit3,
  HelpCircle,
  FileCheck
} from 'lucide-react';
import { GiaoAnWordData } from '../types';

interface InfographicWorksheetProps {
  data: GiaoAnWordData;
}

type WorksheetViewMode = 'word-printable' | 'infographic-cards' | 'rubric-table';

export const InfographicWorksheet: React.FC<InfographicWorksheetProps> = ({ data }) => {
  const [viewMode, setViewMode] = useState<WorksheetViewMode>('word-printable');
  const printableAreaRef = useRef<HTMLDivElement>(null);

  const meta = data.metadata;
  const isTieuHoc = meta.capHoc === 'TIEU_HOC';

  // Extract authentic group activity and worksheet matching the lesson
  const groupActivity =
    data.hoatDongNhomTichCuc ||
    data.tienTrinhDayHoc.find(
      (hd) => hd.hoatDongNhomTichCuc?.phieuGiaoNhiemVu
    )?.hoatDongNhomTichCuc;

  const phieu = groupActivity?.phieuGiaoNhiemVu;

  // Authentic questions strictly derived from the lesson
  const defaultQuestions = isTieuHoc
    ? [
        `Nhiệm vụ 1: Quan sát hình ảnh và dữ liệu trong SGK bài "${meta.tenBaiDay}", ghi lại các thông tin trọng tâm.`,
        `Nhiệm vụ 2: Thực hiện đo đạc / làm bài tập tính toán theo yêu cầu và so sánh kết quả.`,
        `Nhiệm vụ 3: Rút ra kết luận hoặc công thức cốt lõi của bài học và điền vào chỗ chấm.`,
        `Nhiệm vụ 4: Thử thách vận dụng giải quyết tình huống thực tế liên quan đến bài học.`
      ]
    : [
        `Nhiệm vụ 1: Phân tích số liệu và hiện tượng từ SGK bài "${meta.tenBaiDay}", hoàn thành bảng dữ liệu ban đầu.`,
        `Nhiệm vụ 2: Viết công thức toán học/khoa học liên quan, giải thích ý nghĩa các đại lượng và đơn vị đo chuẩn.`,
        `Nhiệm vụ 3: Vận dụng kiến thức để giải bài toán thực tiễn hoặc phân tích tình huống đời sống có liên hệ thực tế.`,
        `Nhiệm vụ 4: Nhận xét, thảo luận biện pháp ứng dụng an toàn và phòng ngừa rủi ro trong cuộc sống.`
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

  const memberContributions = phieu?.phanKhaiBaoDongGop?.length
    ? phieu.phanKhaiBaoDongGop
    : [
        'Nhóm trưởng (Bút mực đỏ): Điều phối, phân công câu hỏi và kiểm soát tiến độ làm bài.',
        'Thư ký (Bút mực xanh dương): Ghi nhận toàn bộ phép tính và câu trả lời thống nhất vào phiếu nhóm.',
        'Kỹ thuật viên / Tính toán (Bút mực xanh lá): Kiểm tra kết quả, bấm máy tính hoặc thao tác thiết bị.',
        'Báo cáo viên (Bút mực tím/đen): Đại diện trình bày trước lớp và trả lời chất vấn của các nhóm bạn.'
      ];

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

  return (
    <div className="bg-white border-2 border-slate-300 rounded-2xl shadow-md p-4 sm:p-6 space-y-5 my-6">
      {/* Control Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-700 text-white shadow-xs flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5" /> Phiếu Học Tập Chuẩn Giáo Án Word
            </span>
            <span className="text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-300 px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Đồng bộ 100% với Giáo án Word
            </span>
            <span className="text-xs text-indigo-700 font-medium bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-full">
              4 vai trò & 4 màu mực chống thụ động
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1.5">
            Phiếu Học Tập: {meta.tenBaiDay}
          </h3>
          <p className="text-xs text-slate-500">
            Môn học: {meta.monHoc} • Lớp: {meta.khoiLop} • Bộ sách: {meta.boSach} • Khổ giấy: A4 (In dùng trực tiếp)
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all active:scale-95"
          >
            <Printer className="w-4 h-4" />
            <span>In Phiếu A4 Ngay</span>
          </button>
        </div>
      </div>

      {/* View Switcher Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <button
          type="button"
          onClick={() => setViewMode('word-printable')}
          className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition-all flex-shrink-0 ${
            viewMode === 'word-printable'
              ? 'bg-blue-800 text-white shadow-sm ring-2 ring-blue-300'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>1. Phiếu Chuẩn Giáo Án Word (Khổ A4 In Ngay)</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('infographic-cards')}
          className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition-all flex-shrink-0 ${
            viewMode === 'infographic-cards'
              ? 'bg-indigo-700 text-white shadow-sm ring-2 ring-indigo-300'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>2. Thẻ Nhiệm Vụ 4 Màu Mực Trực Quan</span>
        </button>

        <button
          type="button"
          onClick={() => setViewMode('rubric-table')}
          className={`px-3.5 py-2 rounded-xl font-bold flex items-center gap-2 transition-all flex-shrink-0 ${
            viewMode === 'rubric-table'
              ? 'bg-emerald-700 text-white shadow-sm ring-2 ring-emerald-300'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>3. Bảng Tiêu Chí Rubric Đánh Giá Nhóm</span>
        </button>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <div className="pt-2">

        {/* ============================================================== */}
        {/* CHẾ ĐỘ 1: PHIẾU HỌC TẬP CHUẨN GIÁO ÁN WORD (KHỔ A4 IN DÙNG NGAY) */}
        {/* ============================================================== */}
        {viewMode === 'word-printable' && (
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

            {/* Chú thích chân trang */}
            <div className="text-[11px] text-slate-500 italic pt-2 text-right">
              Phiếu học tập tích hợp hoạt động nhóm tích cực 4 vai trò theo chuẩn Công văn 5512/BGDĐT-GDTrH.
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* CHẾ ĐỘ 2: THẺ NHIỆM VỤ TRỰC QUAN 4 MÀU MỰC (TRÌNH CHIẾU / SMARTBOARD) */}
        {/* ============================================================== */}
        {viewMode === 'infographic-cards' && (
          <div className="space-y-5 max-w-4xl mx-auto">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white rounded-2xl p-5 shadow-lg border border-indigo-400">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-widest text-yellow-300 bg-blue-950/80 px-2.5 py-1 rounded-full border border-yellow-400/40">
                    BẢN TRÌNH CHIẾU INFOGRAPHIC TRỰC QUAN
                  </span>
                  <h3 className="text-lg sm:text-xl font-black tracking-tight text-white">
                    {worksheetTitle}
                  </h3>
                  <p className="text-xs text-indigo-200">
                    Chiếu trực tiếp lên Tivi / Màn chiếu thông minh để học sinh quan sát rõ từng nhiệm vụ nhóm
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3.5 py-2 text-right text-xs text-indigo-100 flex-shrink-0">
                  <p className="font-bold text-yellow-300">⏱️ Thời gian: 8 - 10 phút</p>
                  <p>Quy mô: 4 học sinh / nhóm</p>
                </div>
              </div>
            </div>

            {/* Grid 4 Thẻ Nhiệm vụ tương ứng 4 Màu Mực & 4 Vai Trò */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {questions.map((q, idx) => {
                const roleThemes = [
                  {
                    name: '1. Nhóm trưởng',
                    badge: 'Mực Đỏ',
                    color: 'border-red-500 bg-red-50/70 text-red-950',
                    headerBg: 'bg-red-600 text-white',
                    icon: '👑'
                  },
                  {
                    name: '2. Thư ký',
                    badge: 'Mực Xanh dương',
                    color: 'border-blue-500 bg-blue-50/70 text-blue-950',
                    headerBg: 'bg-blue-600 text-white',
                    icon: '✍️'
                  },
                  {
                    name: '3. Kỹ thuật viên / Tính toán',
                    badge: 'Mực Xanh lá',
                    color: 'border-emerald-500 bg-emerald-50/70 text-emerald-950',
                    headerBg: 'bg-emerald-600 text-white',
                    icon: '🔬'
                  },
                  {
                    name: '4. Báo cáo viên',
                    badge: 'Mực Tím/Đen',
                    color: 'border-purple-500 bg-purple-50/70 text-purple-950',
                    headerBg: 'bg-purple-600 text-white',
                    icon: '🎤'
                  }
                ];

                const theme = roleThemes[idx % roleThemes.length];

                return (
                  <div
                    key={idx}
                    className={`border-2 rounded-2xl p-4 shadow-sm flex flex-col justify-between space-y-3 ${theme.color}`}
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-xs ${theme.headerBg}`}>
                          <span>{theme.icon}</span>
                          <span>{theme.name}</span>
                        </span>
                        <span className="text-xs font-bold px-2 py-0.5 rounded bg-white border shadow-xs">
                          {theme.badge}
                        </span>
                      </div>

                      <div className="space-y-1.5 pt-1">
                        <p className="font-bold text-sm leading-snug text-slate-900">
                          {q}
                        </p>
                      </div>
                    </div>

                    <div className="bg-white/90 border border-slate-300 rounded-xl p-2.5 text-xs text-slate-500 font-mono space-y-1">
                      <p>Đáp án nhóm: ....................................................................</p>
                      <p>.................................................................................................</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer Rules Bar */}
            <div className="bg-slate-900 text-white rounded-2xl p-4 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-xl">💡</span>
                <span>
                  <strong>Quy tắc 4 màu mực:</strong> Mỗi thành viên bắt buộc phải có phần viết bằng màu mực của mình trên phiếu nhóm để tránh tình trạng ỷ lại!
                </span>
              </div>
              <button
                type="button"
                onClick={handlePrint}
                className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold flex-shrink-0 transition-all flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" /> In Phiếu Nhóm A4
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* CHẾ ĐỘ 3: BẢNG TIÊU CHÍ RUBRIC ĐÁNH GIÁ HOẠT ĐỘNG NHÓM */}
        {/* ============================================================== */}
        {viewMode === 'rubric-table' && (
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
