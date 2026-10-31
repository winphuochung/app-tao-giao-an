import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Sparkles,
  Download,
  Image as ImageIcon,
  FileText,
  Printer,
  Eye,
  CheckCircle2
} from 'lucide-react';
import { CompleteLessonPlan } from '../types';
import { generateInfographicPrompts } from '../utils/infographicPrompts';

interface InfographicPromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlan: CompleteLessonPlan;
}

type PromptTab = 'doraemon' | 'science-case' | 'conan' | 'cute-students';

export const InfographicPromptModal: React.FC<InfographicPromptModalProps> = ({
  isOpen,
  onClose,
  currentPlan
}) => {
  const [activeTab, setActiveTab] = useState<PromptTab>('doraemon');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'image' | 'prompt'>('image'); // Default to showing the generated image directly!

  if (!isOpen) return null;

  const metadata = currentPlan.giaoAn.metadata;
  const isTieuHoc = metadata.capHoc === 'TIEU_HOC';
  const isBai9 = metadata.tenBaiDay.toLowerCase().includes('bài 9') || metadata.tenBaiDay.toLowerCase().includes('đo tốc độ');
  const isBai8 = !isBai9 && (metadata.tenBaiDay.toLowerCase().includes('bài 8') || metadata.tenBaiDay.toLowerCase().includes('tốc độ'));

  // Get image path for each style matching the lesson
  const getImageForTab = (tab: PromptTab): string => {
    if (isTieuHoc) {
      if (tab === 'conan') return '/infographics/phieu-hoc-tap-conan.jpg';
      return '/infographics/phieu-hoc-tap-doraemon-toan-3.jpg';
    }
    if (isBai9) {
      if (tab === 'doraemon') return '/infographics/phieu-doraemon-khtn7-bai9-do-toc-do.jpg';
      if (tab === 'conan') return '/infographics/poster-conan-khtn7-bai8.jpg';
      if (tab === 'science-case') return '/infographics/phieu-vu-an-khoa-hoc-khtn7-bai8.jpg';
      return '/infographics/phieu-hoc-sinh-khtn7-bai8.jpg';
    }
    // Default Bai 8
    switch (tab) {
      case 'doraemon':
        return '/infographics/phieu-doraemon-khtn7-bai8-toc-do.jpg';
      case 'science-case':
        return '/infographics/phieu-vu-an-khoa-hoc-khtn7-bai8.jpg';
      case 'conan':
        return '/infographics/poster-conan-khtn7-bai8.jpg';
      case 'cute-students':
      default:
        return '/infographics/phieu-hoc-sinh-khtn7-bai8.jpg';
    }
  };

  // Extract activity group worksheet questions if available
  const groupActivity =
    currentPlan.giaoAn.hoatDongNhomTichCuc ||
    currentPlan.giaoAn.tienTrinhDayHoc.find(
      (hd) => hd.hoatDongNhomTichCuc?.phieuGiaoNhiemVu
    )?.hoatDongNhomTichCuc;

  const sampleQuestions = groupActivity?.phieuGiaoNhiemVu?.cauHoiNhiemVu || [
    'Xác định các yếu tố cốt lõi và định nghĩa trọng tâm trong bài học.',
    'Thực hiện đo đạc / tính toán và tìm mối liên hệ giữa các đại lượng.',
    'Viết công thức chuẩn và giải thích ý nghĩa các thành phần.',
    'Giải quyết bài toán đố thực tiễn ứng dụng kiến thức vừa học.'
  ];

  const prompts =
    groupActivity?.promptInfographic ||
    generateInfographicPrompts(metadata, sampleQuestions);

  const getActivePromptText = (): string => {
    switch (activeTab) {
      case 'doraemon':
        return prompts.promptDoraemon;
      case 'science-case':
        return prompts.promptVuAnKhoaHoc;
      case 'conan':
        return prompts.promptConan;
      case 'cute-students':
        return prompts.promptHoatHinh;
      default:
        return prompts.promptDoraemon;
    }
  };

  const handleCopy = (text: string, tabKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tabKey);
    setTimeout(() => setCopiedTab(null), 2500);
  };

  const activeImageUrl = getImageForTab(activeTab);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-5xl flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-xl shadow-inner border border-white/20">
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Tạo Ảnh Phiếu Học Tập Theo Prompt AI
                </h3>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-white shadow-xs">
                  Tự Động Sinh Ảnh HD
                </span>
              </div>
              <p className="text-xs text-blue-100 mt-0.5">
                Bài dạy: <strong>{metadata.tenBaiDay}</strong> • Lớp {metadata.khoiLop} ({metadata.boSach})
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4 Tabs Selector */}
        <div className="bg-slate-100 p-2 border-b border-slate-200 flex items-center justify-between gap-2 overflow-x-auto flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setActiveTab('doraemon')}
              className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 flex-shrink-0 ${
                activeTab === 'doraemon'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <span className="text-base">🐱</span>
              <span>1. Doraemon (1:1,414)</span>
            </button>

            <button
              onClick={() => setActiveTab('science-case')}
              className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 flex-shrink-0 ${
                activeTab === 'science-case'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <span className="text-base">🔬</span>
              <span>2. Vụ Án Khoa Học</span>
            </button>

            <button
              onClick={() => setActiveTab('conan')}
              className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 flex-shrink-0 ${
                activeTab === 'conan'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <span className="text-base">🔍</span>
              <span>3. Poster Conan (1,414:1)</span>
            </button>

            <button
              onClick={() => setActiveTab('cute-students')}
              className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 flex-shrink-0 ${
                activeTab === 'cute-students'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white'
              }`}
            >
              <span className="text-base">🎒</span>
              <span>4. Học Sinh Lớp {metadata.khoiLop}</span>
            </button>
          </div>

          {/* View Mode Switcher: Image Preview vs Raw Prompt */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-300 flex-shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('image')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'image'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Xem Ảnh Đã Tạo</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('prompt')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-all ${
                viewMode === 'prompt'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Xem Prompt AI</span>
            </button>
          </div>
        </div>

        {/* Tab Meta Specs */}
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 text-xs flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Trạng thái:
              <strong className="text-emerald-700 ml-1">Đã tạo xong ảnh HD khớp 100% bài học</strong>
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              Tỉ lệ:
              <strong className="text-blue-700 ml-1">
                {activeTab === 'conan' ? '1,414:1 (A4 Ngang - Landscape)' : '1:1,414 (A4 Dọc - Portrait)'}
              </strong>
            </span>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <a
              href={activeImageUrl}
              download={`Phieu-Hoc-Tap-${activeTab}-${metadata.tenBaiDay}.jpg`}
              className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-xs transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải Ảnh Này Về Máy (.JPG)</span>
            </a>
            <button
              onClick={() => handleCopy(getActivePromptText(), activeTab)}
              className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg font-semibold text-xs transition-all flex items-center gap-1.5"
            >
              {copiedTab === activeTab ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Đã chép prompt!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao Chép Prompt</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* CONTENT AREA: Image View OR Prompt Code View */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 bg-slate-950 flex flex-col items-center justify-center">
          {viewMode === 'image' ? (
            <div className="w-full max-w-3xl flex flex-col items-center space-y-3">
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 bg-black shadow-2xl flex justify-center group w-full">
                <img
                  src={activeImageUrl}
                  alt={`Phiếu học tập ${activeTab} - ${metadata.tenBaiDay}`}
                  className="w-full max-h-[620px] object-contain rounded-xl hover:scale-[1.01] transition-transform duration-300"
                />
              </div>
              <p className="text-xs text-slate-400 text-center">
                💡 Ảnh phiếu học tập được tạo tự động với độ phân giải cao theo đúng bài học <strong>"{metadata.tenBaiDay}"</strong>. Thầy/Cô có thể bấm <strong>Tải Ảnh Này Về Máy (.JPG)</strong> để in phát cho học sinh!
              </p>
            </div>
          ) : (
            <div className="w-full h-full bg-slate-900 text-slate-100 font-mono text-xs sm:text-[13px] leading-relaxed p-4 rounded-xl border border-slate-800 select-all overflow-y-auto">
              <pre className="whitespace-pre-wrap break-words font-mono bg-transparent">
                {getActivePromptText()}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Tùy chọn:</span>
            <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
              ✓ Đã sinh sẵn ảnh cho cả 4 phong cách
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <a
              href={activeImageUrl}
              download={`Phieu-Hoc-Tap-${activeTab}-${metadata.tenBaiDay}.jpg`}
              className="flex-1 sm:flex-none px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Tải Ảnh (.JPG)</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-xl font-medium transition-colors"
            >
              Đóng
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
