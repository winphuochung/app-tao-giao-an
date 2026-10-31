import React from 'react';
import {
  FileText,
  Presentation,
  Key,
  BookOpen,
  Film,
  Palette,
  Sparkles
} from 'lucide-react';
import { CompleteLessonPlan } from '../types';

interface HeaderProps {
  currentPlan: CompleteLessonPlan;
  onExportDocx: () => void;
  onExportPptx: () => void;
  onOpenApiKeyModal: () => void;
  onOpenStoryboardModal: () => void;
  onOpenInfographicModal: () => void;
  onOpenTextbookModal?: () => void;
  onLoadSample: (key: string) => void;
  isExportingDocx: boolean;
  isExportingPptx: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentPlan,
  onExportDocx,
  onExportPptx,
  onOpenApiKeyModal,
  onOpenStoryboardModal,
  onOpenInfographicModal,
  onOpenTextbookModal,
  onLoadSample,
  isExportingDocx,
  isExportingPptx
}) => {
  const isTieuHoc = currentPlan.giaoAn.metadata.capHoc === 'TIEU_HOC';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-[1600px] w-full mx-auto px-3 sm:px-5 lg:px-8">
        <div className="flex items-center justify-between min-h-[3.75rem] py-2 gap-2 sm:gap-3 flex-wrap lg:flex-nowrap">
          
          {/* Brand & Badge */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-md shadow-indigo-100 flex-shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base font-extrabold text-slate-900 tracking-tight whitespace-nowrap">
                  EdTech GDPT 2018
                </span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap ${
                  isTieuHoc
                    ? 'bg-rose-100 text-rose-700 border border-rose-200'
                    : 'bg-blue-100 text-blue-700 border border-blue-200'
                }`}>
                  {isTieuHoc ? 'CV 2345' : 'CV 5512'}
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden md:block whitespace-nowrap">
                Hệ thống Soạn Kế Hoạch Bài Dạy (.DOCX) & Slide (.PPTX) Chuẩn Bộ GD&ĐT
              </p>
            </div>
          </div>

          {/* Quick Sample Selector in Header */}
          <div className="hidden lg:flex items-center gap-1.5 bg-blue-50/90 px-3 py-1.5 rounded-xl border border-blue-200 shadow-2xs">
            <span className="text-xs font-bold text-blue-900 flex items-center gap-1 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Bài mẫu chuẩn SGK:
            </span>
            <select
              onChange={(e) => {
                if (e.target.value) onLoadSample(e.target.value);
              }}
              value={currentPlan.giaoAn.metadata.tenBaiDay.includes('Đo tốc độ') ? 'thcs-khtn-7-bai-9' : currentPlan.giaoAn.metadata.tenBaiDay.includes('Tốc độ chuyển động') ? 'thcs-khtn-7-toc-do' : currentPlan.giaoAn.metadata.tenBaiDay.includes('đối xứng') ? 'thcs-toan-6' : currentPlan.giaoAn.metadata.tenBaiDay.includes('Hình tròn') ? 'tieu-hoc-toan-3' : ''}
              className="text-xs font-bold text-blue-950 bg-white border border-blue-400 rounded-lg px-2.5 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer shadow-2xs"
            >
              <option value="" disabled>-- Chọn bài soạn bám sát SGK --</option>
              <option value="thcs-khtn-7-bai-9">⚡ KHTN 7: Bài 9 - Đo tốc độ (Chuẩn SGK Trang 49 - 51)</option>
              <option value="thcs-khtn-7-toc-do">⚡ KHTN 7: Bài 8 - Tốc độ chuyển động (Chuẩn SGK Trang 45 - 48)</option>
              <option value="thcs-toan-6">⚡ Toán 6: Hình có trục đối xứng (Chuẩn SGK Trang 50 - 52)</option>
              <option value="tieu-hoc-toan-3">⚡ Toán 3: Hình tròn, tâm, đường kính (Chuẩn SGK Trang 45 - 47)</option>
            </select>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap sm:flex-nowrap ml-auto">
            
            {/* AI Infographic Worksheet Prompt */}
            <button
              onClick={onOpenInfographicModal}
              title="Tạo câu lệnh AI thiết kế Phiếu học tập Infographic"
              className="px-2.5 py-1.5 text-xs font-semibold text-purple-800 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap flex-shrink-0"
            >
              <Palette className="w-4 h-4 text-purple-600 flex-shrink-0" />
              <span className="hidden xl:inline">Infographic AI</span>
            </button>

            {/* Animation Storyboard */}
            <button
              onClick={onOpenStoryboardModal}
              title="Bảng chỉ dẫn hiệu ứng chuyển cảnh PowerPoint"
              className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap flex-shrink-0"
            >
              <Film className="w-4 h-4 text-violet-600 flex-shrink-0" />
              <span className="hidden 2xl:inline">Hiệu Ứng</span>
            </button>

            {/* Gemini API Key */}
            <button
              onClick={onOpenApiKeyModal}
              title="Cấu hình Google Gemini API Key"
              className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap flex-shrink-0"
            >
              <Key className="w-4 h-4 text-amber-600 flex-shrink-0" />
              <span>API</span>
            </button>

            {/* Download DOCX */}
            <button
              onClick={onExportDocx}
              disabled={isExportingDocx}
              className="px-3.5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 disabled:opacity-50 rounded-lg shadow-sm transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0"
            >
              <FileText className="w-4 h-4" />
              <span>{isExportingDocx ? 'Đang tạo...' : 'Tải Giáo Án (.DOCX)'}</span>
            </button>

            {/* Download PPTX */}
            <button
              onClick={onExportPptx}
              disabled={isExportingPptx}
              className="px-3.5 py-2 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 active:scale-95 disabled:opacity-50 rounded-lg shadow-sm shadow-orange-100 transition-all flex items-center gap-1.5 whitespace-nowrap flex-shrink-0"
            >
              <Presentation className="w-4 h-4" />
              <span>{isExportingPptx ? 'Đang xuất...' : 'Tải Slide (.PPTX)'}</span>
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};
