import { resolveSgkImageUrl } from '../utils/sgkImageResolver';
import React, { useState } from 'react';
import {
  FileText,
  Download,
  Printer,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  Sparkles,
  Info,
  Copy,
  Check,
  Palette,
  BookOpen,
  Image as ImageIcon,
  Users,
  Lightbulb,
  ExternalLink
} from 'lucide-react';
import { GiaoAnWordData, AiAnalysisReport } from '../types';
import { generateInfographicPrompts } from '../utils/infographicPrompts';
import { InfographicWorksheet } from './InfographicWorksheet';
import { PixarMindmapView } from './PixarMindmapView';

interface LessonPlanEditorProps {
  data: GiaoAnWordData;
  onChange?: (updated: GiaoAnWordData) => void;
  onExportDocx: () => void;
  isExporting: boolean;
  aiReport?: AiAnalysisReport;
  onOpenAnalysisModal?: () => void;
}

export const LessonPlanEditor: React.FC<LessonPlanEditorProps> = ({
  data,
  onExportDocx,
  isExporting,
  aiReport,
  onOpenAnalysisModal
}) => {
  const isTieuHoc = data.metadata.capHoc === 'TIEU_HOC';
  const meta = data.metadata;
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [activePromptTab, setActivePromptTab] = useState<'doraemon' | 'science-case' | 'conan' | 'cute-students'>('doraemon');
  const [copiedPromptKey, setCopiedPromptKey] = useState<string | null>(null);

  const handleCopyPrompt = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPromptKey(key);
    setTimeout(() => setCopiedPromptKey(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper to ensure an item has a clean dash "- "
  const renderDashItem = (text: string) => {
    const trimmed = text.trim();
    if (trimmed.startsWith('-') || trimmed.startsWith('–') || trimmed.startsWith('•')) {
      return trimmed.replace(/^[-–•]\s*/, '- ');
    }
    return `- ${trimmed}`;
  };

  return (
    <div className="space-y-4">
      {/* Top Action Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-700">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800">
                Kế Hoạch Bài Dạy Chuẩn Thể Thức Nghị Định 30/2020/NĐ-CP
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" /> Gạch đầu dòng từng ý chuẩn
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Font Times New Roman 13-14pt • Lề 2-2-3-1.5cm • Bảng 2 cột chuẩn {meta.congVan}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <div className="hidden sm:flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200 text-xs">
            <button
              onClick={() => setZoomLevel((prev) => Math.max(75, prev - 10))}
              title="Thu nhỏ xem trang"
              className="p-1 hover:bg-white rounded transition-colors text-slate-600"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-2 font-mono text-[11px] text-slate-600">{zoomLevel}%</span>
            <button
              onClick={() => setZoomLevel((prev) => Math.min(130, prev + 10))}
              title="Phóng to xem trang"
              className="p-1 hover:bg-white rounded transition-colors text-slate-600"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Printer className="w-4 h-4 text-slate-600" />
            <span className="hidden sm:inline">In / Lưu PDF</span>
          </button>

          <button
            onClick={onExportDocx}
            disabled={isExporting}
            className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-lg shadow-sm transition-all flex items-center gap-2 disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>{isExporting ? 'Đang tạo .docx...' : 'Tải File Word (.DOCX)'}</span>
          </button>
        </div>
      </div>

      {/* Reassuring Notice for Teachers */}
      <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-3.5 text-xs text-slate-700 flex items-start gap-2.5 shadow-xs">
        <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="text-blue-900">Chuẩn thể thức sư phạm & Dễ dàng chỉnh sửa trên Word:</strong> Bản xem trước bên dưới được trình bày đúng chuẩn thể thức hành chính, phân tách <strong>gạch đầu dòng (-) rõ ràng cho từng ý</strong>.
          Khi tải file <span className="font-bold text-blue-800">.docx</span> về máy, mỗi ý là một đoạn riêng biệt (Paragraph) hoàn toàn mở, Thầy/Cô chỉ cần đặt con trỏ chuột bấm <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">Enter</kbd> để thêm ý mới, hoặc bấm <kbd className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-[10px]">Backspace</kbd> để xóa bớt ý trên Microsoft Word một cách thuận tiện nhất.
        </div>
      </div>

      {/* AI Analysis & Textbook Link Card */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-emerald-50 border-2 border-indigo-200 rounded-2xl p-4 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              🧠
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-indigo-950 uppercase tracking-wide">
                  AI Phân Tích Bài Học & Đồng Bộ Cổng SGK Điện Tử
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-2xs">
                  ✓ Chuẩn {meta.congVan}
                </span>
              </div>
              <p className="text-[11px] text-indigo-900 font-medium">
                Tự động bóc tách từng đề mục SGK thành các hoạt động khám phá độc lập (Hoạt động 2.1, 2.2, 2.3...)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://taphuan.nxbgd.vn/tap-huan?grade=${meta.khoiLop}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold text-emerald-800 bg-white hover:bg-emerald-100 border border-emerald-300 shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
            >
              <span>🔗 Mở Cổng SGK Lớp {meta.khoiLop}</span>
              <ExternalLink className="w-3.5 h-3.5 text-emerald-600" />
            </a>

            {onOpenAnalysisModal && (
              <button
                type="button"
                onClick={onOpenAnalysisModal}
                className="px-3 py-1.5 rounded-lg text-[11px] font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Xem Báo Cáo Phân Tích AI</span>
              </button>
            )}
          </div>
        </div>

        {/* Section Pill List */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-indigo-200/70 text-xs">
          <span className="font-bold text-slate-700 text-[11px]">📑 Cấu trúc đề mục bóc tách:</span>
          {data.tienTrinhDayHoc
            .filter((h) => h.deMucSGK || (h.soThuTu === 2 && h.tenHoatDong.includes('2.')))
            .map((h, i) => (
              <span
                key={h.id || i}
                className="px-2.5 py-1 rounded-lg bg-white border border-indigo-200 text-indigo-900 font-semibold text-[11px] shadow-2xs flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="font-bold">{h.deMucSGK ? h.deMucSGK.split('.')[0] + '.' : `2.${i+1}.`}</span>
                <span className="truncate max-w-[220px]">{h.deMucSGK ? h.deMucSGK.replace(/^I+[\.\s\-]+/, '') : h.tenHoatDong.replace(/^Hoạt động 2\.\d+:\s*/, '')}</span>
              </span>
            ))}
        </div>
      </div>

      {/* A4 Paper Container with Official Margins Simulation */}
      <div className="bg-slate-300/60 p-3 sm:p-6 rounded-2xl flex justify-center overflow-x-auto">
        <div
          style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          className="w-full max-w-[880px] bg-white min-h-[1100px] shadow-2xl rounded-sm p-8 sm:p-14 font-serif text-[13.5pt] leading-[1.3] text-black transition-transform duration-150"
        >
          {/* 1. Header (Quốc hiệu & Tiêu ngữ) */}
          <div className="grid grid-cols-2 text-center pb-4 text-[12pt] border-b border-dashed border-slate-200">
            <div className="space-y-0.5">
              <p className="font-bold uppercase tracking-tight">
                {meta.truong || (isTieuHoc ? 'TRƯỜNG TIỂU HỌC ....................' : 'TRƯỜNG THCS ....................')}
              </p>
              <p className="font-bold uppercase tracking-tight">
                {meta.toChuyenMon || 'TỔ CHUYÊN MÔN'}
              </p>
              <p className="italic text-slate-700 text-[11pt]">
                Giáo viên: {meta.giaoVien && meta.giaoVien.trim() ? meta.giaoVien.trim() : '....................................................'}
              </p>
            </div>
            <div className="space-y-0.5">
              <p className="font-bold uppercase tracking-tight">
                CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
              </p>
              <p className="font-bold underline tracking-tight">
                Độc lập - Tự do - Hạnh phúc
              </p>
            </div>
          </div>

          {/* 2. Main Title */}
          <div className="text-center my-6 space-y-1">
            <h2 className="text-[16pt] font-bold uppercase tracking-wide">
              KẾ HOẠCH BÀI DẠY
            </h2>
            <p className="text-[14pt] font-bold uppercase">
              MÔN: {meta.monHoc} - LỚP {meta.khoiLop} {meta.capHoc === 'THCS' && `(${meta.boSach})`}
            </p>
            <p className="text-[14pt] font-bold">
              Tên bài dạy: {meta.tenBaiDay}
            </p>
            <p className="text-[13pt] italic text-slate-800">
              {meta.tuanThucHien ? `${meta.tuanThucHien} - ` : 'Tuần ..... - '}
              Số tiết: {meta.soTiet}
              {meta.tietTheoPPCT && meta.tietTheoPPCT.trim() && ` - Tiết theo PPCT: ${meta.tietTheoPPCT.trim()}`}
              {' '}(Thời gian thực hiện: {meta.thoiLuong || (isTieuHoc ? '35 phút' : '45 phút')})
            </p>
          </div>

          {/* 3. SECTION I: YÊU CẦU CẦN ĐẠT / MỤC TIÊU */}
          <div className="space-y-2 mb-6 text-justify">
            <h3 className="font-bold uppercase text-[14pt]">
              {isTieuHoc ? 'I. YÊU CẦU CẦN ĐẠT:' : 'I. MỤC TIÊU:'}
            </h3>

            {/* 1. Kiến thức for THCS */}
            {!isTieuHoc && data.mucTieu.kienThuc && data.mucTieu.kienThuc.length > 0 && (
              <div className="pl-4 space-y-1">
                <p className="font-bold">1. Kiến thức:</p>
                <div className="pl-4 space-y-1">
                  {data.mucTieu.kienThuc.map((kt, i) => (
                    <p key={i} className="leading-relaxed">
                      {renderDashItem(kt)}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Năng lực */}
            <div className="pl-4 space-y-2">
              <p className="font-bold">{isTieuHoc ? '1.' : '2.'} Năng lực:</p>

              {/* a) Năng lực đặc thù */}
              <div className="pl-2 space-y-1">
                <p className="font-bold italic">a) Năng lực đặc thù:</p>
                <div className="pl-4 space-y-1">
                  {data.mucTieu.nangLucDacThu.map((nl, i) => (
                    <p key={i} className="leading-relaxed">
                      {renderDashItem(nl)}
                    </p>
                  ))}
                </div>
              </div>

              {/* b) Năng lực chung */}
              <div className="pl-2 space-y-1">
                <p className="font-bold italic">b) Năng lực chung:</p>
                <div className="pl-4 space-y-1">
                  {data.mucTieu.nangLucChung.tuChuTuHoc?.map((item, i) => (
                    <p key={`tc-${i}`} className="leading-relaxed">
                      <span className="font-bold italic">- Tự chủ và tự học: </span>
                      {item.replace(/^[-–•]\s*/, '')}
                    </p>
                  ))}
                  {data.mucTieu.nangLucChung.giaoTiepHopTac?.map((item, i) => (
                    <p key={`gt-${i}`} className="leading-relaxed">
                      <span className="font-bold italic">- Giao tiếp và hợp tác: </span>
                      {item.replace(/^[-–•]\s*/, '')}
                    </p>
                  ))}
                  {data.mucTieu.nangLucChung.giaiQuyetVanDe?.map((item, i) => (
                    <p key={`gq-${i}`} className="leading-relaxed">
                      <span className="font-bold italic">- Giải quyết vấn đề và sáng tạo: </span>
                      {item.replace(/^[-–•]\s*/, '')}
                    </p>
                  ))}
                </div>
              </div>

              {/* c) Năng lực số (Theo Công văn số 3456/BGDĐT-GDPT) */}
              {data.mucTieu.nangLucSo && data.mucTieu.nangLucSo.length > 0 && (
                <div className="pl-2 space-y-1.5 pt-1">
                  <p className="font-bold italic text-blue-900">
                    c) Năng lực số (Theo Công văn số 3456/BGDĐT-GDPT ngày 27/06/2025 của Bộ GD&ĐT):
                  </p>
                  <div className="pl-4 space-y-1 text-[13pt]">
                    {data.mucTieu.nangLucSo.map((nls, idx) => (
                      <p key={idx} className="leading-relaxed">
                        <strong className="font-sans font-bold text-[11pt] px-1.5 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200 mr-1.5 inline-block">
                          Mã {nls.maChiBao}
                        </strong>
                        <strong className="italic">{nls.tenLinhVuc}: </strong>
                        {nls.bieuHien}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Phẩm chất */}
            <div className="pl-4 space-y-1 pt-1">
              <p className="font-bold">{isTieuHoc ? '2.' : '3.'} Phẩm chất:</p>
              <div className="pl-4 space-y-1">
                {data.mucTieu.phamChat.yeuNuoc?.map((item, i) => (
                  <p key={`yn-${i}`} className="leading-relaxed">
                    <strong>- Yêu nước: </strong>{item.replace(/^[-–•]\s*/, '')}
                  </p>
                ))}
                {data.mucTieu.phamChat.nhanAi?.map((item, i) => (
                  <p key={`na-${i}`} className="leading-relaxed">
                    <strong>- Nhân ái: </strong>{item.replace(/^[-–•]\s*/, '')}
                  </p>
                ))}
                {data.mucTieu.phamChat.chamChi?.map((item, i) => (
                  <p key={`cc-${i}`} className="leading-relaxed">
                    <strong>- Chăm chỉ: </strong>{item.replace(/^[-–•]\s*/, '')}
                  </p>
                ))}
                {data.mucTieu.phamChat.trungThuc?.map((item, i) => (
                  <p key={`tt-${i}`} className="leading-relaxed">
                    <strong>- Trung thực: </strong>{item.replace(/^[-–•]\s*/, '')}
                  </p>
                ))}
                {data.mucTieu.phamChat.trachNhiem?.map((item, i) => (
                  <p key={`tn-${i}`} className="leading-relaxed">
                    <strong>- Trách nhiệm: </strong>{item.replace(/^[-–•]\s*/, '')}
                  </p>
                ))}
              </div>
            </div>


          </div>

          {/* 4. SECTION II: ĐỒ DÙNG DẠY HỌC / THIẾT BỊ DẠY HỌC */}
          <div className="space-y-2 mb-6 text-justify">
            <h3 className="font-bold uppercase text-[14pt]">
              {isTieuHoc ? 'II. ĐỒ DÙNG DẠY HỌC:' : 'II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU:'}
            </h3>

            <div className="pl-4 space-y-2">
              <div className="space-y-1">
                <p className="font-bold">1. Đối với giáo viên:</p>
                <div className="pl-4 space-y-1">
                  {data.thietBiDayHoc.giaoVien.map((tb, i) => (
                    <p key={i} className="leading-relaxed">
                      {renderDashItem(tb)}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-bold">2. Đối với học sinh:</p>
                <div className="pl-4 space-y-1">
                  {data.thietBiDayHoc.hocSinh.map((tb, i) => (
                    <p key={i} className="leading-relaxed">
                      {renderDashItem(tb)}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 5. SECTION III: CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU / TIẾN TRÌNH DẠY HỌC */}
          <div className="space-y-6 mb-6">
            <h3 className="font-bold uppercase text-[14pt]">
              {isTieuHoc ? 'III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU:' : 'III. TIẾN TRÌNH DẠY HỌC:'}
            </h3>

            {data.tienTrinhDayHoc.map((hd) => (
              <div key={hd.id} className="space-y-3">
                <h4 className="font-bold text-[13.5pt] text-blue-900">
                  {hd.tenHoatDong} {hd.thoiLuong ? `(${hd.thoiLuong})` : ''}
                </h4>

                {/* CV 5512 Sections a, b, c */}
                {!isTieuHoc && (
                  <div className="space-y-1 pl-2 text-[13pt] text-justify">
                    {hd.mucTieu && (
                      <div>
                        <p className="font-bold">a) Mục tiêu:</p>
                        <div className="pl-4 space-y-0.5">
                          {hd.mucTieu.split('\n').filter(l => l.trim()).map((l, idx) => (
                            <p key={idx}>{renderDashItem(l)}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {hd.noiDung && (
                      <div>
                        <p className="font-bold">b) Nội dung:</p>
                        <div className="pl-4 space-y-0.5">
                          {hd.noiDung.split('\n').filter(l => l.trim()).map((l, idx) => (
                            <p key={idx}>{renderDashItem(l)}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    {hd.sanPham && (
                      <div>
                        <p className="font-bold">c) Sản phẩm:</p>
                        <div className="pl-4 space-y-0.5">
                          {hd.sanPham.split('\n').filter(l => l.trim()).map((l, idx) => (
                            <p key={idx}>{renderDashItem(l)}</p>
                          ))}
                        </div>
                      </div>
                    )}
                    <p className="font-bold pt-1">d) Tổ chức thực hiện:</p>
                  </div>
                )}

                {/* THE 2-COLUMN TABLE */}
                <div className="overflow-x-auto border-2 border-black rounded-sm shadow-xs">
                  <table className="w-full border-collapse text-[12.5pt]">
                    <thead>
                      <tr className="bg-slate-100 border-b-2 border-black text-center font-bold">
                        <th
                          style={{ width: isTieuHoc ? '55%' : '65%' }}
                          className="p-2.5 border-r-2 border-black uppercase text-center"
                        >
                          {isTieuHoc ? 'HOẠT ĐỘNG CỦA GIÁO VIÊN' : 'HOẠT ĐỘNG CỦA GV VÀ HS'}
                        </th>
                        <th
                          style={{ width: isTieuHoc ? '45%' : '35%' }}
                          className="p-2.5 uppercase text-center"
                        >
                          {isTieuHoc ? 'HOẠT ĐỘNG CỦA HỌC SINH' : 'DỰ KIẾN SẢN PHẨM / NỘI DUNG GHI BẢNG'}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {hd.bangHaiCot.map((row) => (
                        <tr key={row.id} className="border-b border-black last:border-b-0">
                          {/* Col 1 */}
                          <td className="p-3 border-r-2 border-black align-top text-justify">
                            {row.buocSuPham && (
                              <p className="font-bold italic text-blue-900 mb-1.5">
                                {row.buocSuPham.startsWith('*') ? row.buocSuPham : `* ${row.buocSuPham}`}
                              </p>
                            )}

                            {/* HÌNH ẢNH THỰC TẾ TỪ SÁCH GIÁO KHOA - LUÔN CÓ HÌNH ẢNH SGK TRỰC TIẾP */}
                            {row.hinhAnhSGK && (() => {
                              const effectiveImgUrl = resolveSgkImageUrl(row.hinhAnhSGK, meta.monHoc, meta.khoiLop);
                              return (
                                <div className="my-2.5 p-3 bg-slate-50 border border-slate-300 rounded-lg flex flex-col items-center shadow-xs">
                                  <div className="w-full flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                                    <span className="text-[10pt] font-semibold text-blue-900 flex items-center gap-1.5">
                                      <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                                      Học liệu trực quan: Hình ảnh thực tế từ Sách giáo khoa
                                    </span>
                                    <span className="text-[8.5pt] font-medium px-2 py-0.5 bg-blue-100 text-blue-800 rounded">
                                      SGK Thực tế GDPT 2018
                                    </span>
                                  </div>
                                  <img
                                    src={effectiveImgUrl}
                                    alt={row.hinhAnhSGK.tenHinh}
                                    className="max-h-72 w-auto object-contain rounded border border-slate-300 bg-white shadow-2xs hover:shadow-md transition-shadow"
                                    onError={(e) => {
                                      // Fallback an toàn nếu đường dẫn bị lỗi mạng
                                      (e.target as HTMLImageElement).src = '/sgk-images/khtn-7-hinh-8-2-8-3-toc-ke-va-thiet-bi-ban-toc-do.png';
                                    }}
                                  />
                                  <p className="text-center font-bold text-slate-900 text-[11pt] mt-2.5 flex items-center gap-1.5 justify-center">
                                    <span>{row.hinhAnhSGK.tenHinh} (Ảnh thực tế SGK)</span>
                                  </p>
                                  {row.hinhAnhSGK.moTa && (
                                    <p className="text-slate-600 italic text-[10pt] text-center max-w-xl mt-1">
                                      {row.hinhAnhSGK.moTa}
                                    </p>
                                  )}
                                  {row.hinhAnhSGK.cauHoiKhaiThac && row.hinhAnhSGK.cauHoiKhaiThac.length > 0 && (
                                    <div className="w-full mt-2.5 p-2.5 bg-amber-50/90 border border-amber-200 rounded-lg text-left text-[10pt] text-amber-950">
                                      <span className="font-bold text-amber-900 block mb-1">
                                        🔍 Định hướng học sinh tự quan sát & khai thác hình ảnh thực tế SGK:
                                      </span>
                                      <ul className="space-y-1 pl-4 list-disc text-slate-800">
                                        {row.hinhAnhSGK.cauHoiKhaiThac.map((q, qi) => (
                                          <li key={qi} className="italic">{q}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              );
                            })()}

                            {/* SƠ ĐỒ TƯ DUY 16:9 3D PIXAR KẾT LUẬN KIẾN THỨC CỐT LÕI */}
                            {row.soDoTuDuy && (
                              <PixarMindmapView soDoTuDuy={row.soDoTuDuy} />
                            )}

                            <div className="space-y-1.5 leading-relaxed">
                              {row.cot1Trai
                                .replace(/\\r\\n/g, '\n')
                                .replace(/\\n/g, '\n')
                                .replace(/\r\n/g, '\n')
                                .split('\n')
                                .map((line, lIdx) => {
                                const trimmed = line.trim();
                                if (!trimmed) return null;

                                // Tags
                                const tagMatch = trimmed.match(/^([-–•]?\s*)(\[[^\]]+\]:?)(.*)$/);
                                if (tagMatch) {
                                  const rawTag = tagMatch[2];
                                  const rest = tagMatch[3].trim();
                                  const isSgkTag = /^\[HÌNH\s*ẢNH\s*SGK/i.test(rawTag);
                                  if (isSgkTag && !rest) {
                                    return null;
                                  }
                                  const displayTag = isSgkTag ? '[Khai thác hình ảnh SGK]:' : rawTag;

                                  return (
                                    <p key={lIdx} className="leading-relaxed">
                                      <strong className="text-blue-900">- {displayTag} </strong>
                                      {rest}
                                    </p>
                                  );
                                }

                                const isRomanHeader = /^(?:[I|V|X]+\.|\d+\.\s+[A-ZÀ-Ỵ])/i.test(trimmed);
                                const isConclusionHeader = /^\*?\s*(?:KẾT LUẬN|CHỐT KIẾN THỨC|GHI NHỚ)/i.test(trimmed);
                                const isHeader = isRomanHeader || isConclusionHeader || /^(Bước\s+\d+|[1-4]\.|\*|Bài tập|\+|Dự kiến|Nội dung ghi bảng)/i.test(trimmed);

                                if (isConclusionHeader) {
                                  return (
                                    <div key={lIdx} className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-2 my-1 text-amber-950 shadow-2xs">
                                      <p className="font-bold text-amber-900 flex items-center gap-1.5 text-[11.5px]">
                                        <span>📌</span>
                                        <span>{trimmed.startsWith('*') ? trimmed : `* ${trimmed}`}</span>
                                      </p>
                                    </div>
                                  );
                                }

                                if (isRomanHeader) {
                                  return (
                                    <p key={lIdx} className="font-bold text-blue-950 pt-1 pb-0.5 border-b border-blue-100 text-[12px]">
                                      {trimmed}
                                    </p>
                                  );
                                }

                                if (isHeader) {
                                  return (
                                    <p key={lIdx} className="font-bold text-slate-900 pt-1">
                                      {trimmed}
                                    </p>
                                  );
                                }

                                return (
                                  <p key={lIdx} className="leading-relaxed">
                                    {renderDashItem(trimmed)}
                                  </p>
                                );
                              })}
                            </div>
                          </td>

                          {/* Col 2 */}
                          <td className="p-3 align-top text-justify">
                            <div className="space-y-1.5 leading-relaxed">
                              {row.cot2Phai
                                .replace(/\\r\\n/g, '\n')
                                .replace(/\\n/g, '\n')
                                .replace(/\r\n/g, '\n')
                                .split('\n')
                                .map((line, lIdx) => {
                                const trimmed = line.trim();
                                if (!trimmed) return null;

                                const isRomanHeader = /^(?:[I|V|X]+\.|\d+\.\s+[A-ZÀ-Ỵ])/i.test(trimmed);
                                const isConclusionHeader = /^\*?\s*(?:KẾT LUẬN|CHỐT KIẾN THỨC|GHI NHỚ)/i.test(trimmed);
                                const isHeader = isRomanHeader || isConclusionHeader || /^(Bước\s+\d+|[1-4]\.|\*|Bài tập|\+|Dự kiến|Nội dung ghi bảng)/i.test(trimmed);

                                if (isConclusionHeader) {
                                  return (
                                    <div key={lIdx} className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-2.5 my-2 text-amber-950 shadow-2xs">
                                      <p className="font-bold text-amber-900 flex items-center gap-1.5 text-[11.5px]">
                                        <span>📌</span>
                                        <span>{trimmed.startsWith('*') ? trimmed : `* ${trimmed}`}</span>
                                      </p>
                                    </div>
                                  );
                                }

                                if (isRomanHeader) {
                                  return (
                                    <p key={lIdx} className="font-bold text-blue-950 pt-1 pb-0.5 border-b border-blue-100 text-[12px]">
                                      {trimmed}
                                    </p>
                                  );
                                }

                                if (isHeader) {
                                  return (
                                    <p key={lIdx} className="font-bold text-slate-900 pt-0.5">
                                      {trimmed}
                                    </p>
                                  );
                                }

                                return (
                                  <p key={lIdx} className="leading-relaxed">
                                    {renderDashItem(trimmed)}
                                  </p>
                                );
                              })}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

              </div>
            ))}
          </div>

          {/* 6. SECTION IV: ĐIỀU CHỈNH SAU BÀI DẠY */}
          {(isTieuHoc || data.dieuChinhSauBaiDay) && (
            <div className="space-y-2 pt-4 border-t-2 border-slate-300">
              <h3 className="font-bold uppercase text-[14pt]">
                IV. ĐIỀU CHỈNH SAU BÀI DẠY (nếu có):
              </h3>
              <div className="pl-4 space-y-1.5 font-mono text-slate-400 text-xs sm:text-sm">
                <p>..................................................................................................................................................</p>
                <p>..................................................................................................................................................</p>
                <p>..................................................................................................................................................</p>
              </div>
            </div>
          )}

          {/* 7. PHỤ LỤC: THIẾT KẾ HOẠT ĐỘNG NHÓM TÍCH CỰC & INFOGRAPHIC PHIẾU HỌC TẬP (ĐƯA XUỐNG CUỐI CÙNG) */}
          {(() => {
            const hdn = data.hoatDongNhomTichCuc || data.tienTrinhDayHoc.find(h => h.hoatDongNhomTichCuc)?.hoatDongNhomTichCuc;
            if (!hdn) return null;

            const pInfographic = hdn.promptInfographic || generateInfographicPrompts(meta, hdn.phieuGiaoNhiemVu.cauHoiNhiemVu);

            const getActiveText = () => {
              switch (activePromptTab) {
                case 'doraemon': return pInfographic.promptDoraemon;
                case 'science-case': return pInfographic.promptVuAnKhoaHoc;
                case 'conan': return pInfographic.promptConan;
                case 'cute-students': return pInfographic.promptHoatHinh;
              }
            };

            return (
              <div className="space-y-4 pt-6 border-t-4 border-slate-800 mt-8 text-justify">
                <div className="text-center space-y-1 pb-3 border-b-2 border-slate-800">
                  <h3 className="font-bold uppercase text-[15pt] text-blue-950 tracking-wide">
                    PHỤ LỤC: THIẾT KẾ HOẠT ĐỘNG NHÓM TÍCH CỰC & INFOGRAPHIC PHIẾU HỌC TẬP
                  </h3>
                  <p className="italic text-[12pt] text-slate-600">
                    (Kèm theo Kế hoạch bài dạy môn {meta.monHoc} Lớp {meta.khoiLop} - Bài: {meta.tenBaiDay})
                  </p>
                </div>

                {/* 1. TỔ CHỨC HOẠT ĐỘNG NHÓM TÍCH CỰC */}
                <div className="space-y-1">
                  <p className="font-bold text-[13pt] text-blue-900 uppercase">
                    * TỔ CHỨC HOẠT ĐỘNG NHÓM TÍCH CỰC & PHÁT HUY NĂNG LỰC TỪNG CÁ NHÂN (CHỐNG THỤ ĐỘNG):
                  </p>
                  <p className="italic text-[12pt] text-slate-700">
                    (Áp dụng quy tắc 4 vai trò & 4 màu mực định danh - Đảm bảo 100% học sinh đều có nhiệm vụ)
                  </p>
                </div>

                {/* Tình huống tò mò */}
                <div className="space-y-0.5">
                  <p className="font-bold text-[12.5pt]">• Tình huống / Câu hỏi khởi động gây tò mò:</p>
                  <p className="italic text-slate-800 pl-3 leading-relaxed bg-amber-50 p-2.5 rounded border border-amber-200 text-[12.5pt]">
                    {hdn.tinhHuongToMo}
                  </p>
                </div>

                {/* Cơ cấu chia nhóm 4 vai trò */}
                <div className="space-y-1">
                  <p className="font-bold text-[12.5pt]">• Cơ cấu chia nhóm và phân công 4 vai trò cụ thể (Chống ỷ lại):</p>
                  <p className="text-[12.5pt] pl-3 italic text-slate-700">
                    - Quy mô: {hdn.chiaNhomVaPhanCong.quyMo}
                  </p>
                  <div className="space-y-1 pl-3 text-[12.5pt]">
                    {hdn.chiaNhomVaPhanCong.vaiTro.map((vt, vIdx) => (
                      <p key={vIdx} className="leading-relaxed">
                        <strong>- {vt.tenVaiTro}</strong>{' '}
                        <span className="text-[11px] font-sans px-1.5 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200 font-bold">
                          {vt.mauMucDongGop || 'Màu mực riêng'}
                        </span>
                        : {vt.nhiemVu}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Biện pháp xử lý tình huống khó khăn */}
                <div className="space-y-1">
                  <p className="font-bold text-[12.5pt]">• Biện pháp sư phạm xử lý các tình huống khó khăn trong lớp học:</p>
                  <div className="space-y-1.5 pl-3 text-[12pt]">
                    {hdn.xuLyTinhHuong.map((xl, xIdx) => (
                      <div key={xIdx} className="bg-white p-2.5 rounded border border-slate-200 space-y-0.5">
                        <p className="font-bold text-slate-900">• {xl.tinhHuong}</p>
                        <p className="text-slate-700 pl-2">➔ <strong className="text-blue-900">Giải pháp:</strong> {xl.giaiPhapSuPham}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Infographic Phiếu học tập trực quan sinh động */}
                <div className="pt-2">
                  <InfographicWorksheet data={data} />
                </div>

                {/* Mẫu Phiếu giao nhiệm vụ nhóm */}
                <div className="space-y-1 pt-2">
                  <p className="font-bold text-[12.5pt]">• Mẫu Phiếu giao nhiệm vụ nhóm (In sử dụng trực tiếp):</p>
                  <div className="border-2 border-black rounded p-3 bg-white space-y-1.5 text-[12pt]">
                    <div className="text-center border-b border-black pb-1.5">
                      <p className="font-bold uppercase tracking-wide text-[12.5pt]">
                        {hdn.phieuGiaoNhiemVu.tieuDe}
                      </p>
                      <p className="italic text-[11pt] text-slate-600">
                        {hdn.phieuGiaoNhiemVu.thongTinNhom}
                      </p>
                    </div>
                    <div className="space-y-0.5">
                      <p className="font-bold uppercase text-[11.5pt]">A. Các nhiệm vụ thảo luận & thực hành:</p>
                      <div className="pl-3 space-y-0.5">
                        {hdn.phieuGiaoNhiemVu.cauHoiNhiemVu.map((ch, cIdx) => (
                          <p key={cIdx}>- {ch}</p>
                        ))}
                      </div>
                    </div>
                    <div className="pt-1 border-t border-dashed border-slate-300">
                      <p className="font-bold uppercase text-[11.5pt]">B. Phần khai báo thành viên và màu mực đóng góp:</p>
                      <div className="pl-3 space-y-0.5 italic text-slate-600 text-[11pt]">
                        {hdn.phieuGiaoNhiemVu.phanKhaiBaoDongGop.map((kb, kIdx) => (
                          <p key={kIdx}>- {kb}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bảng Rubric */}
                <div className="space-y-1 pt-2">
                  <p className="font-bold text-[12.5pt]">• Bảng tiêu chí đánh giá (Rubric) hoạt động nhóm và cá nhân:</p>
                  <div className="overflow-x-auto border-2 border-black rounded-sm bg-white">
                    <table className="w-full border-collapse text-[11.5pt]">
                      <thead>
                        <tr className="bg-slate-100 border-b-2 border-black text-center font-bold">
                          <th className="p-1.5 border-r border-black w-1/4">Tiêu chí</th>
                          <th className="p-1.5 border-r border-black w-1/4">Mức Tốt (3 điểm)</th>
                          <th className="p-1.5 border-r border-black w-1/4">Mức Đạt (2 điểm)</th>
                          <th className="p-1.5 w-1/4">Cần cố gắng (1 điểm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hdn.tieuChiDanhGia.map((tc, tIdx) => (
                          <tr key={tIdx} className="border-b border-black last:border-b-0">
                            <td className="p-1.5 border-r border-black font-bold align-top">{tc.tieuChi}</td>
                            <td className="p-1.5 border-r border-black align-top text-slate-800">{tc.mucTot}</td>
                            <td className="p-1.5 border-r border-black align-top text-slate-800">{tc.mucDat}</td>
                            <td className="p-1.5 align-top text-slate-800">{tc.mucCanCoGang}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Báo cáo nhanh */}
                <div className="space-y-0.5 pt-2">
                  <p className="font-bold text-[12.5pt]">• Phương án báo cáo sản phẩm nhanh (Tránh kéo dài giờ học):</p>
                  <div className="pl-3 space-y-0.5 text-[12.5pt]">
                    {hdn.baoCaoNhanh.map((bc, bIdx) => (
                      <p key={bIdx}>{renderDashItem(bc)}</p>
                    ))}
                  </div>
                </div>

                {/* Gợi ý Prompt AI */}
                {pInfographic && (
                  <div className="space-y-2 pt-3 border-t border-slate-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <p className="font-bold text-[12.5pt] flex items-center gap-1.5 text-purple-900">
                          <Palette className="w-4 h-4 text-purple-600 inline" />
                          <span>• Gợi ý Prompt AI thiết kế Phiếu học tập Infographic / Truyện tranh sinh động:</span>
                        </p>
                        <p className="italic text-[11pt] text-slate-600 pl-4">
                          (Tự động sinh kèm bài học - Thầy/Cô sao chép câu lệnh dưới đây dán vào ChatGPT / Midjourney / Canva để tạo ảnh phiếu học tập minh họa trực quan)
                        </p>
                      </div>
                      <button
                        onClick={() => handleCopyPrompt(getActiveText(), activePromptTab)}
                        className="self-start sm:self-center px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-all active:scale-95 flex-shrink-0"
                      >
                        {copiedPromptKey === activePromptTab ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Đã sao chép!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Sao chép Prompt này</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-1 bg-slate-100 p-1 rounded border border-slate-300 text-xs overflow-x-auto">
                      <button
                        onClick={() => setActivePromptTab('doraemon')}
                        className={`px-2.5 py-1 rounded font-medium transition-colors flex items-center gap-1 flex-shrink-0 ${
                          activePromptTab === 'doraemon'
                            ? 'bg-blue-600 text-white font-bold'
                            : 'text-slate-700 hover:bg-white'
                        }`}
                      >
                        <span>🐱</span> 1. Doraemon (1:1,414)
                      </button>
                      <button
                        onClick={() => setActivePromptTab('science-case')}
                        className={`px-2.5 py-1 rounded font-medium transition-colors flex items-center gap-1 flex-shrink-0 ${
                          activePromptTab === 'science-case'
                            ? 'bg-indigo-600 text-white font-bold'
                            : 'text-slate-700 hover:bg-white'
                        }`}
                      >
                        <span>🔬</span> 2. Vụ án khoa học (LaTeX/IUPAC)
                      </button>
                      <button
                        onClick={() => setActivePromptTab('conan')}
                        className={`px-2.5 py-1 rounded font-medium transition-colors flex items-center gap-1 flex-shrink-0 ${
                          activePromptTab === 'conan'
                            ? 'bg-red-600 text-white font-bold'
                            : 'text-slate-700 hover:bg-white'
                        }`}
                      >
                        <span>🔍</span> 3. Poster Conan (1,414:1)
                      </button>
                      <button
                        onClick={() => setActivePromptTab('cute-students')}
                        className={`px-2.5 py-1 rounded font-medium transition-colors flex items-center gap-1 flex-shrink-0 ${
                          activePromptTab === 'cute-students'
                            ? 'bg-emerald-600 text-white font-bold'
                            : 'text-slate-700 hover:bg-white'
                        }`}
                      >
                        <span>🎒</span> 4. Học sinh Lớp {meta.khoiLop} (1:1,414)
                      </button>
                    </div>

                    <div className="bg-slate-50 border border-slate-300 rounded p-3 font-mono text-xs text-slate-800 leading-relaxed max-h-56 overflow-y-auto whitespace-pre-wrap select-all">
                      {getActiveText()}
                    </div>
                  </div>
                )}
              </div>
            );
          })()}

        </div>
      </div>
    </div>
  );
};
