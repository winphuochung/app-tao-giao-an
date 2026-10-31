import React, { useState, useEffect } from 'react';
import { Key, X, Check, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  apiKey: string;
  onSaveApiKey: (key: string) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  apiKey,
  onSaveApiKey
}) => {
  const [keyInput, setKeyInput] = useState<string>(apiKey);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [isTesting, setIsTesting] = useState<boolean>(false);
  const [testStatus, setTestStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setKeyInput(apiKey);
  }, [apiKey]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveApiKey(keyInput.trim());
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 800);
  };

  const handleTestKey = async () => {
    if (!keyInput.trim()) return;
    setIsTesting(true);
    setTestStatus('idle');

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${keyInput.trim()}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Hello, confirm connection.' }] }]
        })
      });

      if (res.ok) {
        setTestStatus('success');
      } else {
        setTestStatus('error');
      }
    } catch {
      setTestStatus('error');
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-100 text-amber-700">
              <Key className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Cấu Hình Google Gemini API Key
              </h3>
              <p className="text-xs text-slate-500">
                Cho phép AI sinh tự động giáo án & slide tùy chỉnh
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div className="space-y-1.5">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
              Nhập Gemini API Key của bạn
            </label>
            <input
              type="password"
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              placeholder="AIzaSy..."
              className="w-full text-xs font-mono p-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:outline-none bg-slate-50"
            />
          </div>

          <div className="flex items-center justify-between text-xs">
            <a
              href="https://aistudio.google.com/app/apikey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:underline flex items-center gap-1 font-semibold"
            >
              <Sparkles className="w-3.5 h-3.5" /> Lấy khóa API miễn phí từ Google AI Studio
            </a>

            <button
              onClick={handleTestKey}
              disabled={isTesting || !keyInput.trim()}
              className="px-2.5 py-1 text-xs font-semibold rounded bg-slate-100 hover:bg-slate-200 text-slate-700 disabled:opacity-50 transition-colors"
            >
              {isTesting ? 'Đang kiểm tra...' : 'Kiểm tra kết nối'}
            </button>
          </div>

          {testStatus === 'success' && (
            <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-medium border border-emerald-200 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Khóa API hoạt động chính xác!</span>
            </div>
          )}

          {testStatus === 'error' && (
            <div className="p-2.5 rounded-lg bg-rose-50 text-rose-800 text-xs font-medium border border-rose-200 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-rose-600" />
              <span>Khóa API không hợp lệ hoặc đã hết hạn. Vui lòng kiểm tra lại.</span>
            </div>
          )}

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-2.5 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>An toàn tuyệt đối:</strong> Khóa API chỉ được lưu trên trình duyệt của bạn (LocalStorage) và không bao giờ gửi về máy chủ bên thứ ba. Nếu không có khóa API, ứng dụng vẫn sử dụng Bộ tạo Sư phạm thông minh tích hợp sẵn.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold transition-colors"
          >
            Hủy
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-900 text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
          >
            {isSaved ? <Check className="w-4 h-4" /> : null}
            <span>{isSaved ? 'Đã lưu!' : 'Lưu Khóa API'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
