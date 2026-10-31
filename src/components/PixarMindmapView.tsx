import React, { useState } from 'react';
import { SoDoTuDuy } from '../types';
import { Maximize2, Download, Network, X } from 'lucide-react';

interface PixarMindmapViewProps {
  soDoTuDuy: SoDoTuDuy;
  readOnly?: boolean;
}

export const PixarMindmapView: React.FC<PixarMindmapViewProps> = ({ soDoTuDuy }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Tải ảnh sơ đồ tư duy HD
  const handleDownloadImage = () => {
    if (!soDoTuDuy.imageUrl) return;
    const link = document.createElement('a');
    link.href = soDoTuDuy.imageUrl;
    link.download = `so-do-tu-duy-${soDoTuDuy.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="my-3 rounded-xl border border-sky-200 bg-sky-50/50 p-3 sm:p-3.5 shadow-sm transition-all" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      {/* Header bar - Chuẩn mực giáo dục Times New Roman */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-sky-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-sky-600 text-white flex items-center justify-center shadow-xs">
            <Network className="w-4 h-4" />
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-[12pt] sm:text-[13pt] text-slate-800 uppercase tracking-tight">
              Sơ đồ tư duy tổng kết toàn bài
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[9pt] font-semibold bg-sky-100 text-sky-800 border border-sky-200">
              Times New Roman - Chuẩn 16:9
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          {soDoTuDuy.imageUrl && (
            <button
              type="button"
              onClick={handleDownloadImage}
              className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition flex items-center gap-1 shadow-xs"
              title="Tải ảnh sơ đồ tư duy chất lượng cao về máy"
            >
              <Download className="w-3.5 h-3.5" />
              Tải ảnh HD
            </button>
          )}
          <button
            type="button"
            onClick={() => setIsFullscreen(true)}
            className="p-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 transition shadow-xs"
            title="Phóng to toàn màn hình"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main 16:9 Canvas / Image Display - Sơ đồ tư duy nền trắng rõ nét, khoa học */}
      <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border border-slate-200 bg-white flex items-center justify-center shadow-xs">
        {soDoTuDuy.imageUrl ? (
          <div className="relative w-full h-full group">
            <img
              src={soDoTuDuy.imageUrl}
              alt={soDoTuDuy.chuDeChinh}
              className="w-full h-full object-contain p-1"
            />
          </div>
        ) : (
          <div className="text-center text-slate-700 p-4">
            <p className="text-base font-bold text-slate-800">{soDoTuDuy.chuDeChinh}</p>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-5xl aspect-[16/9] bg-white rounded-xl overflow-hidden relative shadow-2xl border border-slate-200 flex flex-col justify-between">
            {/* Modal Controls */}
            <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
              {soDoTuDuy.imageUrl && (
                <button
                  type="button"
                  onClick={handleDownloadImage}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Tải ảnh HD
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="p-1.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 transition shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            {soDoTuDuy.imageUrl ? (
              <img
                src={soDoTuDuy.imageUrl}
                alt={soDoTuDuy.chuDeChinh}
                className="w-full h-full object-contain p-2"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-800">
                <p className="text-xl font-bold">{soDoTuDuy.chuDeChinh}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
