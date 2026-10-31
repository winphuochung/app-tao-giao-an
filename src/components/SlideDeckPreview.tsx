import React, { useState } from 'react';
import {
  Presentation,
  Download,
  Copy,
  Check,
  Sparkles,
  MessageSquare,
  Film,
  Layers,
  HelpCircle,
  Eye,
  Maximize2
} from 'lucide-react';
import { SlidePowerPointData, SlideItem } from '../types';

interface SlideDeckPreviewProps {
  slideDeck: SlidePowerPointData;
  lessonTitle: string;
  onExportPptx: () => void;
  isExporting: boolean;
}

export const SlideDeckPreview: React.FC<SlideDeckPreviewProps> = ({
  slideDeck,
  lessonTitle,
  onExportPptx,
  isExporting
}) => {
  const [activeSlideIdx, setActiveSlideIdx] = useState<number>(0);
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const theme = slideDeck.themeConfig;
  const slides = slideDeck.slides;
  const currentSlide = slides[activeSlideIdx] || slides[0];

  const handleCopyPrompt = (id: string, promptText: string) => {
    navigator.clipboard.writeText(promptText);
    setCopiedPromptId(id);
    setTimeout(() => setCopiedPromptId(null), 2000);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Bar with Theme details & Download action */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600">
            <Presentation className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800">
                Visual Pedagogical Distillation (Chắt Lọc Sư Phạm Thị Giác)
              </h3>
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                {theme.name}
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Chuẩn 16:9 • Tối đa 6 dòng/slide • Thẻ Bento Grid • Ghi chú thuyết trình (Speaker Notes) & Storyboard hiệu ứng
            </p>
          </div>
        </div>

        <button
          onClick={onExportPptx}
          disabled={isExporting}
          className="px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-lg shadow-sm transition-all flex items-center gap-2 disabled:opacity-50"
        >
          <Download className="w-4 h-4" />
          <span>{isExporting ? 'Đang xuất .pptx...' : 'Tải Slide Bài Giảng (.PPTX)'}</span>
        </button>
      </div>

      {/* Main Slide Spotlight & Carousel Selector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Thumbnails List (4 Cols on lg) */}
        <div className="lg:col-span-4 space-y-2.5 max-h-[720px] overflow-y-auto pr-1">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
              Danh sách Slide ({slides.length})
            </span>
            <span className="text-xs text-slate-400">Nhấp để xem chi tiết</span>
          </div>

          {slides.map((s, idx) => {
            const isActive = idx === activeSlideIdx;
            return (
              <div
                key={s.id}
                onClick={() => setActiveSlideIdx(idx)}
                className={`p-3 rounded-xl border text-left cursor-pointer transition-all flex items-start gap-3 ${
                  isActive
                    ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-500/20 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center flex-shrink-0 ${
                    isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {s.slideNumber}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-slate-800 truncate">
                      {s.title}
                    </span>
                    {s.stageBadge && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 flex-shrink-0">
                        {s.stageBadge}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-500 truncate mt-0.5">
                    {s.subtitle || s.bulletPoints[0] || 'Nội dung slide'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Active Slide Spotlight (8 Cols on lg) */}
        <div className="lg:col-span-8 space-y-4">
          
          {/* 16:9 Realistic Slide Canvas */}
          <div
            className="w-full aspect-[16/9] rounded-2xl shadow-xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all border border-black/10"
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.textColor,
              fontFamily: theme.fontBody
            }}
          >
            {/* Top Color Accent Line */}
            <div
              className="absolute top-0 left-0 right-0 h-2"
              style={{ backgroundColor: theme.primaryColor }}
            />

            {/* Slide Header */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-2">
                {currentSlide.stageBadge && (
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white tracking-wide shadow-sm"
                    style={{ backgroundColor: theme.primaryColor }}
                  >
                    {currentSlide.stageBadge.toUpperCase()}
                  </span>
                )}
                <span className="text-xs font-semibold text-slate-400">
                  Slide {currentSlide.slideNumber} / {slides.length}
                </span>
              </div>

              <h2
                className="text-xl sm:text-2xl font-black tracking-tight leading-snug"
                style={{
                  color: theme.primaryColor,
                  fontFamily: theme.fontHeading
                }}
              >
                {currentSlide.title}
              </h2>
              {currentSlide.subtitle && (
                <p
                  className="text-xs sm:text-sm font-semibold opacity-85 mt-1"
                  style={{ color: theme.secondaryColor }}
                >
                  {currentSlide.subtitle}
                </p>
              )}
            </div>

            {/* Slide Body: Bento / Split Cards */}
            <div className="my-auto py-2">
              {currentSlide.slideType === 'OBJECTIVE' ? (
                // 3-Card Bento Grid for Objectives
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {currentSlide.bulletPoints.slice(0, 3).map((bp, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border shadow-sm flex flex-col justify-between"
                      style={{
                        backgroundColor: theme.cardBg,
                        borderColor: i === 0 ? theme.primaryColor : i === 1 ? theme.accentColor : theme.secondaryColor
                      }}
                    >
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider mb-2 px-2 py-0.5 rounded text-white self-start"
                        style={{
                          backgroundColor: i === 0 ? theme.primaryColor : i === 1 ? theme.accentColor : theme.secondaryColor
                        }}
                      >
                        {i === 0 ? 'Kiến thức' : i === 1 ? 'Năng lực' : 'Phẩm chất'}
                      </span>
                      <p className="text-xs leading-relaxed font-medium">
                        {bp}
                      </p>
                    </div>
                  ))}
                </div>
              ) : currentSlide.slideType === 'INTERACTIVE_QUIZ' || currentSlide.visualLayout === 'Quiz Layout' ? (
                // Quiz Layout
                <div className="space-y-3">
                  <div
                    className="p-3.5 rounded-xl border-2 font-bold text-sm shadow-sm"
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: theme.primaryColor,
                      color: theme.primaryColor
                    }}
                  >
                    {currentSlide.bulletPoints[0] || 'Câu hỏi trắc nghiệm:'}
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {currentSlide.bulletPoints.slice(1, 5).map((opt, optIdx) => {
                      const isCorrect = opt.includes('Đáp án') || opt.includes('Chính xác') || optIdx === 2;
                      return (
                        <div
                          key={optIdx}
                          className={`p-2.5 rounded-lg border font-semibold transition-all ${
                            isCorrect
                              ? 'bg-emerald-50 border-emerald-500 text-emerald-800'
                              : 'bg-white border-slate-200 text-slate-700'
                          }`}
                        >
                          {opt}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                // Standard 2-Column Split
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  {/* Left Column: Core Activities */}
                  <div
                    className="sm:col-span-7 p-4 rounded-xl border shadow-sm space-y-2"
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: `${theme.primaryColor}50`
                    }}
                  >
                    <span
                      className="text-[10px] font-bold uppercase px-2 py-0.5 rounded text-white inline-block"
                      style={{ backgroundColor: theme.primaryColor }}
                    >
                      Nội dung trọng tâm
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-[13px] leading-relaxed">
                      {currentSlide.bulletPoints.map((bp, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-indigo-500 font-bold">•</span>
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Board Takeaway */}
                  <div
                    className="sm:col-span-5 p-4 rounded-xl border shadow-sm flex flex-col justify-between"
                    style={{
                      backgroundColor: theme.cardBg,
                      borderColor: `${theme.accentColor}50`
                    }}
                  >
                    <div>
                      <span
                        className="text-[10px] font-bold uppercase px-2 py-0.5 rounded text-white inline-block mb-2"
                        style={{ backgroundColor: theme.accentColor }}
                      >
                        Ghi bảng / Sản phẩm
                      </span>
                      <p className="text-xs font-medium whitespace-pre-line leading-relaxed">
                        {currentSlide.boardContent || 'Ghi nhớ công thức cốt lõi và nội dung bài học.'}
                      </p>
                    </div>

                    <div className="mt-3 p-2 rounded-lg bg-slate-100/80 text-[10px] text-slate-600 italic">
                      ✨ Gợi ý hình ảnh: {currentSlide.aiImagePrompt?.slice(0, 75)}...
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Slide Footer */}
            <div className="flex items-center justify-between text-[11px] opacity-75 pt-2 border-t border-black/10">
              <span>{lessonTitle}</span>
              <span>GDPT 2018 Master Deck</span>
            </div>
          </div>

          {/* Under-Slide Info Panels: Speaker Notes & Storyboard & AI Prompt */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Speaker Notes */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <MessageSquare className="w-4 h-4 text-blue-600" />
                <span>Kịch Bản Lời Giảng Của Giáo Viên (Speaker Notes)</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100 italic whitespace-pre-line">
                "{currentSlide.speakerNotes || 'Lời dẫn tương tác với học sinh...'}"
              </p>
            </div>

            {/* Animation Storyboard Instructions */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <Film className="w-4 h-4 text-violet-600" />
                <span>Chỉ Dẫn Hiệu Ứng Chuyển Cảnh (Animation Storyboard)</span>
              </div>
              <div className="bg-violet-50/50 p-3 rounded-lg border border-violet-100 text-xs space-y-1.5">
                <p className="font-semibold text-violet-900">
                  • Chuyển cảnh (Transition):{' '}
                  <span className="font-bold text-violet-700">
                    {currentSlide.animationsAndTransitions?.slideTransition || 'Morph'}
                  </span>
                </p>
                <div className="space-y-0.5 text-slate-600">
                  <span className="font-semibold text-slate-700">Hiệu ứng thành phần:</span>
                  {currentSlide.animationsAndTransitions?.elementAnimations?.map((anim, idx) => (
                    <p key={idx} className="pl-2">• {anim}</p>
                  )) || <p className="pl-2">• Float In, Wipe theo click chuột</p>}
                </div>
              </div>
            </div>

          </div>

          {/* AI Image Prompt Box with One-Click Copy */}
          <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-xl p-4 shadow-sm flex items-center justify-between gap-3">
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <Sparkles className="w-4 h-4" />
                <span>AI Image Prompt (Gợi ý tạo ảnh minh họa chuẩn phong cách)</span>
              </div>
              <p className="text-xs text-slate-300 font-mono truncate">
                {currentSlide.aiImagePrompt}
              </p>
            </div>
            <button
              onClick={() => handleCopyPrompt(currentSlide.id, currentSlide.aiImagePrompt)}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors flex items-center gap-1.5 flex-shrink-0"
            >
              {copiedPromptId === currentSlide.id ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Đã sao chép</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao chép Prompt</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
