import React, { useState } from 'react';
import { SoDoTuDuy } from '../types';
import { Maximize2, Download, Network, X } from 'lucide-react';

interface PixarMindmapViewProps {
  soDoTuDuy: SoDoTuDuy;
  readOnly?: boolean;
}

/**
 * Sơ đồ tư duy chuẩn 16:9 Times New Roman vẽ theo chuẩn khoa học và sư phạm
 */
const SvgMindmap169: React.FC<{ soDoTuDuy: SoDoTuDuy }> = ({ soDoTuDuy }) => {
  const branches = soDoTuDuy.danhSachNhanh || [];
  const b1 = branches[0];
  const b2 = branches[1];
  const b3 = branches[2];
  const b4 = branches[3];

  return (
    <div className="relative w-full aspect-[16/9] bg-white overflow-hidden select-none border border-slate-200" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
      {/* 4 Soft pastel background quadrants */}
      <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-30 pointer-events-none">
        <div className="bg-gradient-to-br from-sky-100 to-transparent" />
        <div className="bg-gradient-to-bl from-amber-100 to-transparent" />
        <div className="bg-gradient-to-tr from-emerald-100 to-transparent" />
        <div className="bg-gradient-to-tl from-purple-100 to-transparent" />
      </div>

      {/* Top Header Badge */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-white/95 border border-slate-300 rounded-full px-3.5 py-0.5 shadow-2xs z-10">
        <span className="text-[9pt] sm:text-[10pt] font-bold text-slate-700 uppercase tracking-wide">
          Sơ đồ tư duy 16:9 - Hệ thống kiến thức cốt lõi
        </span>
      </div>

      {/* Bottom Footer Badge */}
      <div className="absolute bottom-2 right-3 bg-amber-600 text-white rounded px-2 py-0.5 shadow-2xs z-10">
        <span className="text-[7.5pt] sm:text-[8pt] font-bold tracking-wider uppercase">
          PIXAR 3D STANDARD 16:9
        </span>
      </div>

      {/* SVG Connecting Bezier Curves */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 1000 562.5" preserveAspectRatio="none">
        {/* Branch 1 curve (top-left) */}
        <path d="M 400 270 C 320 270, 300 150, 240 150" fill="none" stroke="#0284c7" strokeWidth="3.5" strokeLinecap="round" />
        {/* Branch 2 curve (bottom-left) */}
        <path d="M 400 295 C 320 295, 300 415, 240 415" fill="none" stroke="#059669" strokeWidth="3.5" strokeLinecap="round" />
        {/* Branch 3 curve (top-right) */}
        <path d="M 600 270 C 680 270, 700 150, 760 150" fill="none" stroke="#d97706" strokeWidth="3.5" strokeLinecap="round" />
        {/* Branch 4 curve (bottom-right) */}
        <path d="M 600 295 C 680 295, 700 415, 760 415" fill="none" stroke="#7c3aed" strokeWidth="3.5" strokeLinecap="round" />
      </svg>

      {/* Center Node */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[250px] bg-slate-900 border-2 border-amber-400 rounded-2xl p-2.5 sm:p-3 shadow-xl text-center z-10">
        <h4 className="text-[12pt] sm:text-[14pt] font-black text-amber-300 uppercase tracking-tight leading-snug">
          {soDoTuDuy.chuDeChinh}
        </h4>
        <p className="text-[8.5pt] sm:text-[10pt] font-semibold text-slate-200 mt-1 line-clamp-1">
          {soDoTuDuy.monHoc ? `${soDoTuDuy.monHoc} • GDPT 2018` : 'Kiến thức trọng tâm'}
        </p>
      </div>

      {/* 4 Quadrant Branch Cards */}
      {/* 1. Top-Left Branch (Sky) */}
      {b1 && (
        <div className="absolute top-[7%] left-[2%] w-[33%] max-w-[320px] flex flex-col items-end gap-1 z-10">
          <div className="bg-sky-600 text-white font-bold text-[9.5pt] sm:text-[11pt] px-3 py-0.5 rounded-full shadow-sm border border-sky-400 text-right">
            {b1.tieuDe}
          </div>
          <div className="space-y-1 w-full flex flex-col items-end">
            {b1.congThuc && (
              <div className="bg-sky-50 border border-sky-400 text-sky-950 font-bold text-[8.5pt] sm:text-[10pt] px-2 py-0.5 rounded-lg shadow-2xs max-w-full truncate text-right">
                {b1.congThuc}
              </div>
            )}
            {b1.cacYCon.slice(0, 3).map((y, idx) => (
              <div key={idx} className="bg-white/95 border border-sky-300 text-slate-800 font-medium text-[8pt] sm:text-[9.5pt] px-2 py-0.5 rounded-lg shadow-2xs max-w-full text-right leading-tight">
                {y}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Bottom-Left Branch (Emerald) */}
      {b2 && (
        <div className="absolute bottom-[7%] left-[2%] w-[33%] max-w-[320px] flex flex-col items-end gap-1 z-10">
          <div className="space-y-1 w-full flex flex-col items-end">
            {b2.cacYCon.slice(0, 3).map((y, idx) => (
              <div key={idx} className="bg-white/95 border border-emerald-300 text-slate-800 font-medium text-[8pt] sm:text-[9.5pt] px-2 py-0.5 rounded-lg shadow-2xs max-w-full text-right leading-tight">
                {y}
              </div>
            ))}
            {b2.congThuc && (
              <div className="bg-emerald-50 border border-emerald-400 text-emerald-950 font-bold text-[8.5pt] sm:text-[10pt] px-2 py-0.5 rounded-lg shadow-2xs max-w-full truncate text-right">
                {b2.congThuc}
              </div>
            )}
          </div>
          <div className="bg-emerald-600 text-white font-bold text-[9.5pt] sm:text-[11pt] px-3 py-0.5 rounded-full shadow-sm border border-emerald-400 text-right">
            {b2.tieuDe}
          </div>
        </div>
      )}

      {/* 3. Top-Right Branch (Amber) */}
      {b3 && (
        <div className="absolute top-[7%] right-[2%] w-[33%] max-w-[320px] flex flex-col items-start gap-1 z-10">
          <div className="bg-amber-600 text-white font-bold text-[9.5pt] sm:text-[11pt] px-3 py-0.5 rounded-full shadow-sm border border-amber-400 text-left">
            {b3.tieuDe}
          </div>
          <div className="space-y-1 w-full flex flex-col items-start">
            {b3.congThuc && (
              <div className="bg-amber-50 border border-amber-400 text-amber-950 font-bold text-[8.5pt] sm:text-[10pt] px-2 py-0.5 rounded-lg shadow-2xs max-w-full truncate text-left">
                {b3.congThuc}
              </div>
            )}
            {b3.cacYCon.slice(0, 3).map((y, idx) => (
              <div key={idx} className="bg-white/95 border border-amber-300 text-slate-800 font-medium text-[8pt] sm:text-[9.5pt] px-2 py-0.5 rounded-lg shadow-2xs max-w-full text-left leading-tight">
                {y}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Bottom-Right Branch (Purple) */}
      {b4 && (
        <div className="absolute bottom-[7%] right-[2%] w-[33%] max-w-[320px] flex flex-col items-start gap-1 z-10">
          <div className="space-y-1 w-full flex flex-col items-start">
            {b4.cacYCon.slice(0, 3).map((y, idx) => (
              <div key={idx} className="bg-white/95 border border-purple-300 text-slate-800 font-medium text-[8pt] sm:text-[9.5pt] px-2 py-0.5 rounded-lg shadow-2xs max-w-full text-left leading-tight">
                {y}
              </div>
            ))}
            {b4.congThuc && (
              <div className="bg-purple-50 border border-purple-400 text-purple-950 font-bold text-[8.5pt] sm:text-[10pt] px-2 py-0.5 rounded-lg shadow-2xs max-w-full truncate text-left">
                {b4.congThuc}
              </div>
            )}
          </div>
          <div className="bg-purple-600 text-white font-bold text-[9.5pt] sm:text-[11pt] px-3 py-0.5 rounded-full shadow-sm border border-purple-400 text-left">
            {b4.tieuDe}
          </div>
        </div>
      )}
    </div>
  );
};

export const PixarMindmapView: React.FC<PixarMindmapViewProps> = ({ soDoTuDuy }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Reset imgError khi chủ đề thay đổi
  React.useEffect(() => {
    setImgError(false);
  }, [soDoTuDuy.id, soDoTuDuy.imageUrl, soDoTuDuy.chuDeChinh]);

  // Tải ảnh sơ đồ tư duy HD
  const handleDownloadImage = () => {
    if (soDoTuDuy.imageUrl && !imgError) {
      const link = document.createElement('a');
      link.href = soDoTuDuy.imageUrl;
      link.download = `so-do-tu-duy-${soDoTuDuy.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.print();
    }
  };

  const showImage = Boolean(soDoTuDuy.imageUrl && !imgError);

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
          <button
            type="button"
            onClick={handleDownloadImage}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition flex items-center gap-1 shadow-xs"
            title="Tải ảnh sơ đồ tư duy chất lượng cao về máy"
          >
            <Download className="w-3.5 h-3.5" />
            Tải ảnh 16:9 HD
          </button>
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
        {showImage ? (
          <div className="relative w-full h-full group">
            <img
              src={soDoTuDuy.imageUrl}
              alt={soDoTuDuy.chuDeChinh}
              onError={() => setImgError(true)}
              className="w-full h-full object-contain p-1"
            />
          </div>
        ) : (
          <SvgMindmap169 soDoTuDuy={soDoTuDuy} />
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-5xl aspect-[16/9] bg-white rounded-xl overflow-hidden relative shadow-2xl border border-slate-200 flex flex-col justify-between">
            {/* Modal Controls */}
            <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
              <button
                type="button"
                onClick={handleDownloadImage}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center gap-1 shadow-md"
              >
                <Download className="w-4 h-4" />
                Tải ảnh HD
              </button>
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="p-1.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 transition shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image / SVG */}
            <div className="w-full h-full">
              {showImage ? (
                <img
                  src={soDoTuDuy.imageUrl}
                  alt={soDoTuDuy.chuDeChinh}
                  className="w-full h-full object-contain p-2"
                />
              ) : (
                <SvgMindmap169 soDoTuDuy={soDoTuDuy} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
