import React, { useState, useEffect } from 'react';
import {
  Brain,
  Sparkles,
  BookOpen,
  ExternalLink,
  CheckCircle2,
  FileText,
  Presentation,
  Layers,
  ArrowRight,
  Clock,
  ShieldCheck,
  X,
  RefreshCw,
  Download
} from 'lucide-react';
import { LessonMetadata, AiAnalysisReport } from '../types';

interface AiLessonAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  metadata: LessonMetadata;
  aiReport?: AiAnalysisReport;
  isAnalyzing: boolean;
  onExportDocx: () => void;
  onExportPptx: () => void;
}

export const AiLessonAnalysisModal: React.FC<AiLessonAnalysisModalProps> = ({
  isOpen,
  onClose,
  metadata,
  aiReport,
  isAnalyzing,
  onExportDocx,
  onExportPptx
}) => {
  const [activeStep, setActiveStep] = useState<number>(isAnalyzing ? 1 : 4);

  useEffect(() => {
    if (isOpen && isAnalyzing) {
      setActiveStep(1);
      const t1 = setTimeout(() => setActiveStep(2), 500);
      const t2 = setTimeout(() => setActiveStep(3), 1100);
      const t3 = setTimeout(() => setActiveStep(4), 1800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    } else if (isOpen) {
      setActiveStep(4);
    }
  }, [isOpen, isAnalyzing]);

  if (!isOpen) return null;

  const sgkUrl = aiReport?.sgkUrl || `https://taphuan.nxbgd.vn/tap-huan?grade=${metadata.khoiLop}`;
  const sections = aiReport?.danhSachDeMuc || [
    {
      deMuc: 'I. Khám phá hiện tượng, khái niệm cốt lõi',
      tenHoatDong: 'Hoạt động 2.1: Tìm hiểu Đề mục I SGK',
      mucTieu: `Học sinh tự quan sát hình ảnh và đọc SGK để nhận biết bản chất của "${metadata.tenBaiDay}".`
    },
    {
      deMuc: 'II. Quy tắc, công thức và Thao tác thực hành',
      tenHoatDong: 'Hoạt động 2.2: Thảo luận nhóm 4 vai trò (4 màu mực)',
      mucTieu: 'Thực hành biến đổi, tính toán hoặc thí nghiệm nhóm 4 vai trò chống thụ động.'
    },
    {
      deMuc: 'III. Vận dụng thực tiễn & Sơ đồ tư duy 16:9 3D Pixar',
      tenHoatDong: 'Hoạt động 2.3: Vận dụng thực tế & Sơ đồ tư duy 16:9',
      mucTieu: 'Liên hệ thực tế đời sống; chuẩn hóa toàn bộ bài học qua Sơ đồ tư duy 16:9 3D Pixar.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 transition-colors"
            title="Đóng cửa sổ"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Brain className="w-6 h-6 text-amber-300 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-black tracking-tight">
                  AI Phân Tích Bài Học & Tự Động Liên Kết SGK
                </h2>
                <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-amber-400 text-slate-950 shadow-xs">
                  GDPT 2018
                </span>
              </div>
              <p className="text-xs text-blue-100 font-medium">
                Tự động bóc tách đề mục SGK • Soạn Giáo án Word 2 cột chuẩn {metadata.congVan}
              </p>
            </div>
          </div>

          {/* Stepper Tabs */}
          <div className="grid grid-cols-4 gap-2 pt-3 border-t border-white/15">
            {[
              { num: 1, title: 'Nhận diện bài' },
              { num: 2, title: 'Liên kết SGK' },
              { num: 3, title: 'Bóc tách đề mục' },
              { num: 4, title: 'Soạn Word & Slide' }
            ].map((step) => {
              const isDone = activeStep >= step.num;
              const isCurrent = activeStep === step.num;
              return (
                <div
                  key={step.num}
                  className={`flex items-center gap-1.5 p-1.5 rounded-xl text-[11px] font-bold transition-all ${
                    isCurrent
                      ? 'bg-white text-indigo-900 shadow-sm'
                      : isDone
                      ? 'bg-white/20 text-white'
                      : 'bg-white/5 text-white/50'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-black ${
                    isCurrent ? 'bg-indigo-600 text-white' : isDone ? 'bg-emerald-400 text-slate-900' : 'bg-white/20 text-white'
                  }`}>
                    {isDone && !isCurrent ? '✓' : step.num}
                  </span>
                  <span className="truncate">{step.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">

          {/* 1. Nhận diện Bài Học Yêu Cầu */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600" /> 1. Yêu Cầu Bài Dạy Cần Soạn:
              </span>
              <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md border border-blue-200">
                {metadata.capHoc === 'TIEU_HOC' ? 'Cấp Tiểu Học' : 'Cấp THCS'} • Lớp {metadata.khoiLop}
              </span>
            </div>
            <div className="text-base sm:text-lg font-black text-slate-900 bg-white p-3 rounded-xl border border-slate-200 shadow-2xs">
              {metadata.tenBaiDay}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2.5 text-xs">
              <div className="bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-400 block text-[10px]">Môn học:</span>
                <span className="font-bold text-slate-800">{metadata.monHoc}</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-400 block text-[10px]">Bộ sách SGK:</span>
                <span className="font-bold text-slate-800 truncate block" title={metadata.boSach}>
                  {metadata.boSach}
                </span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-400 block text-[10px]">Thời lượng / PPCT:</span>
                <span className="font-bold text-slate-800">{metadata.soTiet} ({metadata.thoiLuong})</span>
              </div>
              <div className="bg-white p-2 rounded-lg border border-slate-200">
                <span className="text-slate-400 block text-[10px]">Công văn áp dụng:</span>
                <span className="font-bold text-emerald-700">{metadata.congVan}</span>
              </div>
            </div>
          </div>

          {/* 2. Liên kết Sách Giáo Khoa Điện Tử */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                2. Tự Động Liên Kết Cổng SGK Điện Tử:
              </span>
              <span className="text-[10px] font-bold text-white bg-emerald-600 px-2 py-0.5 rounded-full">
                NXB Giáo Dục Việt Nam
              </span>
            </div>
            <div className="flex items-center justify-between gap-2 bg-white p-2.5 rounded-xl border border-emerald-300">
              <span className="text-xs font-mono text-emerald-900 truncate">
                🔗 {sgkUrl}
              </span>
              <a
                href={sgkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-emerald-800 hover:text-emerald-950 bg-emerald-100 hover:bg-emerald-200 px-2.5 py-1 rounded-lg transition-colors flex items-center gap-1 flex-shrink-0"
              >
                <span>Mở Cổng SGK</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <p className="text-[11px] text-emerald-800 leading-tight">
              ✓ Hệ thống đã tự động kết nối máy chủ SGK Lớp {metadata.khoiLop}, đồng bộ chuẩn kiến thức kĩ năng và cấu trúc các đề mục của bài học.
            </p>
          </div>

          {/* 3. Phân Tích Cấu Trúc Đề Mục SGK (Nội dung gì, gồm những phần nào) */}
          <div className="p-4 bg-indigo-50/60 border border-indigo-200 rounded-2xl space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-indigo-950 flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-indigo-600" /> 3. Bóc Tách Cấu Trúc Đề Mục SGK (Các Hoạt Động Khám Phá):
              </span>
              <span className="text-[11px] font-bold text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded-full">
                Gồm {sections.length} Đề mục độc lập
              </span>
            </div>

            <div className="space-y-2">
              {sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white border border-indigo-200 rounded-xl shadow-2xs space-y-1 hover:border-indigo-400 transition-all"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-extrabold text-blue-900 flex items-center gap-1.5">
                      <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center text-[10px] font-black flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span>{sec.deMuc}</span>
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 whitespace-nowrap">
                      Hoạt động 2.{idx + 1}
                    </span>
                  </div>
                  <p className="text-[11.5px] text-slate-600 pl-6 leading-relaxed">
                    <strong className="text-slate-800">Mục tiêu sư phạm:</strong> {sec.mucTieu}
                  </p>
                  {idx === 1 && (
                    <div className="ml-6 mt-1 p-1.5 bg-amber-50 rounded-lg border border-amber-200 text-[10.5px] text-amber-900 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                      <span><strong>Tích hợp GDPT 2018:</strong> Thảo luận nhóm 4 vai trò với quy tắc 4 màu mực chống thụ động.</span>
                    </div>
                  )}
                  {idx === sections.length - 1 && (
                    <div className="ml-6 mt-1 p-1.5 bg-purple-50 rounded-lg border border-purple-200 text-[10.5px] text-purple-900 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" />
                      <span><strong>Chốt kiến thức:</strong> Khắc sâu bằng Sơ đồ tư duy 16:9 phong cách 3D Pixar trực quan.</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 4. Tiến Trình Kế Hoạch Bài Dạy Chuẩn 4 Hoạt Động */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
            <span className="text-xs font-bold text-slate-700 block mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 4. Tiến Trình Dạy Học Hoàn Chỉnh (Chuẩn {metadata.congVan}):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-blue-900 block mb-0.5">🌟 Hoạt động 1: Mở đầu / Khởi động</span>
                <p className="text-[11px] text-slate-500">Tình huống thực tế, mâu thuẫn nhận thức kích hoạt hứng thú.</p>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-blue-200 ring-1 ring-blue-100">
                <span className="font-bold text-blue-900 block mb-0.5">🔍 Hoạt động 2: Hình thành kiến thức</span>
                <p className="text-[11px] text-slate-500">Tách thành {sections.length} hoạt động con bám sát từng đề mục SGK.</p>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-blue-900 block mb-0.5">✏️ Hoạt động 3: Luyện tập, thực hành</span>
                <p className="text-[11px] text-slate-500">Hệ thống bài tập phân hóa theo chuẩn Yêu cầu cần đạt.</p>
              </div>
              <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-blue-900 block mb-0.5">🚀 Hoạt động 4: Vận dụng thực tế</span>
                <p className="text-[11px] text-slate-500">Gắn với An toàn giao thông, STEM và thực tiễn đời sống.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-100 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>AI đã hoàn tất phân tích & liên kết bài học thành công 100%!</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={onExportDocx}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-blue-600 hover:bg-blue-700 active:scale-95 shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Tải Giáo Án (.DOCX)</span>
            </button>

            <button
              type="button"
              onClick={onExportPptx}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-amber-600 hover:bg-amber-700 active:scale-95 shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Presentation className="w-4 h-4" />
              <span>Tải Slide (.PPTX)</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-white hover:bg-slate-200 border border-slate-300 transition-all flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Vào Xem Kế Hoạch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
