import React, { useState } from 'react';
import {
  ExternalLink,
  Copy,
  Check,
  Sparkles,
  Download,
  FileText,
  Presentation,
  X,
  Layers,
  ArrowRight
} from 'lucide-react';
import { CompleteLessonPlan } from '../types';
import {
  GEMINI_WEB_URL,
  buildGeminiLessonPrompt,
  importGeminiLessonPlan
} from '../utils/geminiBridge';

interface GeminiBridgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPlan: CompleteLessonPlan;
  onApplyPlan: (plan: CompleteLessonPlan) => void;
  onAutoGenerateInApp: () => void;
  isGeneratingInApp?: boolean;
}

export const GeminiBridgeModal: React.FC<GeminiBridgeModalProps> = ({
  isOpen,
  onClose,
  currentPlan,
  onApplyPlan,
  onAutoGenerateInApp,
  isGeneratingInApp = false
}) => {
  const meta = currentPlan.giaoAn.metadata;
  const promptText = buildGeminiLessonPrompt(meta);

  const [copied, setCopied] = useState(false);
  const [geminiResponseText, setGeminiResponseText] = useState('');
  const [isProcessingImport, setIsProcessingImport] = useState(false);
  const [showPromptPreview, setShowPromptPreview] = useState(false);

  if (!isOpen) return null;

  const handleCopyPromptAndOpenGemini = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
    // Open user's exact Gemini URL
    window.open(GEMINI_WEB_URL, '_blank');
  };

  const handleImport = async () => {
    if (!geminiResponseText.trim()) {
      alert('Vui lòng dán nội dung kết quả do Google Gemini tạo ra vào khung bên dưới!');
      return;
    }
    setIsProcessingImport(true);
    try {
      const updated = await importGeminiLessonPlan(geminiResponseText, currentPlan);
      onApplyPlan(updated);
      onClose();
    } catch (err: any) {
      alert('Lỗi nạp dữ liệu: ' + (err.message || 'Vui lòng kiểm tra lại nội dung dán vào'));
    } finally {
      setIsProcessingImport(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full border border-slate-200 overflow-hidden flex flex-col my-auto max-h-[92vh]">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white p-5 sm:p-6 flex items-start justify-between relative">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-white/20 rounded-xl backdrop-blur-md">
                <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
              </span>
              <span className="text-xs font-black uppercase tracking-wider bg-blue-900/60 px-2.5 py-0.5 rounded-full border border-blue-400/40 text-blue-200">
                Google Gemini AI Bridge
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-white">
              Liên Kết Trực Tiếp Google Gemini Soạn Giáo Án & Slide
            </h2>
            <p className="text-xs text-blue-100 max-w-xl">
              Bài dạy: <strong className="text-amber-200">{meta.tenBaiDay}</strong> ({meta.monHoc} {meta.khoiLop} - {meta.boSach})
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
          {/* Quick Step Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-left space-y-1">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center">
                1
              </div>
              <p className="text-xs font-bold text-blue-900">Mở Gemini & Copy Prompt</p>
              <p className="text-[11px] text-blue-700 leading-tight">
                Hệ thống tự động chuẩn bị Prompt sư phạm tối ưu và mở tab Gemini.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200 text-left space-y-1">
              <div className="w-6 h-6 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
                2
              </div>
              <p className="text-xs font-bold text-purple-900">Gemini Soạn Tự Động</p>
              <p className="text-[11px] text-purple-700 leading-tight">
                Nhấn Ctrl+V vào Gemini, Gemini tự soạn toàn bộ Giáo án Word & Slide 16:9.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-left space-y-1">
              <div className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">
                3
              </div>
              <p className="text-xs font-bold text-emerald-900">Nạp Hoàn Chỉnh Vào App</p>
              <p className="text-[11px] text-emerald-700 leading-tight">
                Dán kết quả vào App để xuất ngay file Word (.DOCX) và PowerPoint (.PPTX).
              </p>
            </div>
          </div>

          {/* Action 1: Open Gemini Web */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 border-2 border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-left">
              <h4 className="text-sm font-bold text-indigo-950 flex items-center gap-1.5">
                <ExternalLink className="w-4 h-4 text-indigo-600" />
                Mở Google Gemini AI (Trình duyệt Web)
              </h4>
              <p className="text-xs text-indigo-800 mt-0.5">
                Tự động copy toàn bộ nội dung yêu cầu bài học '{meta.tenBaiDay}' vào Clipboard
              </p>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopyPromptAndOpenGemini}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Đã Copy! Đang mở Gemini...' : 'Mở Gemini & Copy Prompt'}</span>
              </button>
            </div>
          </div>

          {/* Optional: Prompt Preview Toggle */}
          <div className="text-left">
            <button
              type="button"
              onClick={() => setShowPromptPreview(!showPromptPreview)}
              className="text-xs font-semibold text-blue-600 hover:text-blue-800 underline flex items-center gap-1 cursor-pointer"
            >
              <span>{showPromptPreview ? 'Ẩn nội dung Prompt yêu cầu' : '👁️ Xem trước nội dung Prompt gửi cho Gemini'}</span>
            </button>
            {showPromptPreview && (
              <pre className="mt-2 p-3 bg-slate-900 text-slate-100 rounded-xl text-xs font-mono max-h-48 overflow-y-auto whitespace-pre-wrap border border-slate-700">
                {promptText}
              </pre>
            )}
          </div>

          {/* Input Area to Paste Gemini Output */}
          <div className="space-y-2 text-left">
            <label className="block text-xs font-bold text-slate-800">
              📥 Dán kết quả do Google Gemini vừa tạo vào ô bên dưới:
            </label>
            <textarea
              value={geminiResponseText}
              onChange={(e) => setGeminiResponseText(e.target.value)}
              placeholder="Nhấn Ctrl + V để dán toàn bộ văn bản hoặc mã JSON giáo án từ Google Gemini vào đây..."
              rows={6}
              className="w-full p-3 text-xs font-mono rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-slate-50 transition-all outline-hidden resize-none"
            />
          </div>

          {/* Alternative: Generate in App Immediately */}
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-2">
            <div className="text-left text-xs text-amber-900">
              <span className="font-bold">⚡ Bạn muốn tự động tạo ngay trong App?</span>
              <p className="text-[11px] text-amber-800">
                Không cần đổi tab: App sẽ tự động bóc tách SGK và soạn giáo án Word + Slide ngay lập tức.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onAutoGenerateInApp();
                onClose();
              }}
              disabled={isGeneratingInApp}
              className="w-full sm:w-auto px-3.5 py-1.5 rounded-lg text-xs font-bold text-amber-950 bg-amber-300 hover:bg-amber-400 active:scale-95 transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isGeneratingInApp ? 'Đang soạn...' : 'Tự động soạn trong App'}</span>
            </button>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-100 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-200 border border-slate-300 transition-all"
          >
            Đóng
          </button>

          <button
            type="button"
            onClick={handleImport}
            disabled={isProcessingImport || !geminiResponseText.trim()}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-black text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 active:scale-95 disabled:opacity-50 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{isProcessingImport ? 'Đang nạp...' : '📥 Chuyển Giáo Án Word & Slide PowerPoint Vào App'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
