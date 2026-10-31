import React, { useState } from 'react';
import { SoDoTuDuy } from '../types';
import { Maximize2, Download, Sparkles, BookOpen, Layers, CheckCircle2, X } from 'lucide-react';

interface PixarMindmapViewProps {
  soDoTuDuy: SoDoTuDuy;
  readOnly?: boolean;
}

export const PixarMindmapView: React.FC<PixarMindmapViewProps> = ({ soDoTuDuy }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [viewMode, setViewMode] = useState<'image' | 'interactive'>('image');

  // Tải ảnh 16:9 HD
  const handleDownloadImage = () => {
    if (!soDoTuDuy.imageUrl) return;
    const link = document.createElement('a');
    link.href = soDoTuDuy.imageUrl;
    link.download = `so-do-tu-duy-3d-pixar-${soDoTuDuy.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="my-3 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50/90 via-orange-50/50 to-pink-50/80 p-3 sm:p-4 shadow-md transition-all">
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-amber-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex items-center justify-center shadow-sm">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-sans font-extrabold text-[12pt] text-amber-950 uppercase tracking-tight">
                Sơ đồ tư duy 16:9 - Tổng kết kiến thức cốt lõi
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9pt] font-bold bg-pink-500 text-white shadow-xs">
                3D Pixar Animation
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9pt] font-bold bg-amber-200 text-amber-900 border border-amber-300">
                Tỉ lệ 16:9
              </span>
            </div>
            <p className="text-[10pt] text-amber-800 italic">
              GV sử dụng sơ đồ tư duy trực quan để chốt kiến thức, khắc sâu bản chất khoa học & chống thụ động
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setViewMode(viewMode === 'image' ? 'interactive' : 'image')}
            className="px-2.5 py-1 text-xs font-bold rounded-lg border border-amber-300 bg-white hover:bg-amber-100 text-amber-900 transition flex items-center gap-1 shadow-xs"
            title="Chuyển chế độ xem tranh 3D hoặc sơ đồ phân nhánh"
          >
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            {viewMode === 'image' ? 'Xem các nhánh chi tiết' : 'Xem tranh 3D Pixar'}
          </button>
          {soDoTuDuy.imageUrl && (
            <button
              type="button"
              onClick={handleDownloadImage}
              className="px-2.5 py-1 text-xs font-bold rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white transition flex items-center gap-1 shadow-xs"
              title="Tải ảnh 16:9 chất lượng cao về máy"
            >
              <Download className="w-3.5 h-3.5" />
              Tải ảnh 16:9 HD
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

      {/* Main 16:9 Canvas / Image Display */}
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-inner border border-amber-200/80 bg-slate-900 flex items-center justify-center">
        {viewMode === 'image' && soDoTuDuy.imageUrl ? (
          <div className="relative w-full h-full group">
            <img
              src={soDoTuDuy.imageUrl}
              alt={soDoTuDuy.chuDeChinh}
              className="w-full h-full object-cover sm:object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />
            {/* Overlay badge on image */}
            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg text-white border border-white/20">
              <p className="text-[10pt] font-bold text-amber-300 uppercase tracking-wide">
                {soDoTuDuy.chuDeChinh}
              </p>
              {soDoTuDuy.moTaChuDe && (
                <p className="text-[8.5pt] text-slate-200 line-clamp-1">
                  {soDoTuDuy.moTaChuDe}
                </p>
              )}
            </div>
            {/* Watermark 3D Pixar */}
            <div className="absolute bottom-3 right-3 bg-amber-500/80 backdrop-blur-md px-2.5 py-1 rounded-md text-white text-[9pt] font-black tracking-wider uppercase shadow-xs">
              Pixar 3D Standard 16:9
            </div>
          </div>
        ) : (
          /* Interactive Branch View */
          <div className="relative w-full h-full p-4 sm:p-6 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white flex flex-col justify-between overflow-y-auto">
            {/* Center Topic Badge */}
            <div className="text-center z-10 my-auto">
              <div className="inline-block p-1 rounded-3xl bg-gradient-to-r from-amber-400 via-pink-500 to-indigo-500 shadow-xl">
                <div className="bg-slate-950/90 backdrop-blur-xl px-5 py-2.5 rounded-[22px] border border-white/20">
                  <span className="text-[9pt] font-extrabold uppercase tracking-widest text-amber-400 block">
                    ★ CHỦ ĐỀ TRỌNG TÂM Ở GIỮA ★
                  </span>
                  <h4 className="text-[14pt] sm:text-[17pt] font-black uppercase text-white tracking-tight drop-shadow-md">
                    {soDoTuDuy.chuDeChinh}
                  </h4>
                  {soDoTuDuy.moTaChuDe && (
                    <p className="text-[9.5pt] text-slate-300 italic max-w-lg mx-auto mt-0.5">
                      {soDoTuDuy.moTaChuDe}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Radiating Branches Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 z-10 mt-3">
              {soDoTuDuy.danhSachNhanh.map((nhanh, idx) => (
                <div
                  key={nhanh.id || idx}
                  className="rounded-xl p-2.5 bg-white/10 backdrop-blur-md border border-white/20 hover:border-amber-400/80 transition-all shadow-md flex flex-col justify-between"
                  style={{ borderLeftColor: nhanh.mauSac || '#3b82f6', borderLeftWidth: '4px' }}
                >
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-base">{nhanh.icon3D || '📌'}</span>
                      <h5 className="font-bold text-[10.5pt] text-amber-200 line-clamp-1">
                        {nhanh.tieuDe}
                      </h5>
                    </div>

                    {/* Công thức chuẩn Toán học hoặc IUPAC Hóa học */}
                    {nhanh.congThuc && (
                      <div className="my-1 px-2 py-0.5 rounded bg-amber-400/20 border border-amber-300/40 text-[10pt] font-mono font-bold text-amber-300">
                        {nhanh.congThuc}
                      </div>
                    )}

                    {/* Ý con chi tiết */}
                    <ul className="space-y-0.5 text-[9pt] text-slate-200 mt-1">
                      {nhanh.cacYCon.map((y, yIdx) => (
                        <li key={yIdx} className="flex items-start gap-1">
                          <span className="text-amber-400 text-[8pt] mt-0.5">▸</span>
                          <span className="leading-tight">{y}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Sư phạm Note & Thuật ngữ chuẩn */}
      <div className="mt-2.5 flex flex-wrap items-center justify-between text-[10.5pt] text-slate-700 gap-2">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span className="font-semibold text-slate-800">Chuẩn hóa kiến thức:</span>
          <span className="italic text-slate-600">
            {soDoTuDuy.ghiChuKetLuan || 'Đúng công thức khoa học, thuật ngữ tiếng Việt chuẩn xác, danh pháp quốc tế IUPAC.'}
          </span>
        </div>
        {soDoTuDuy.thuatNguChuan && soDoTuDuy.thuatNguChuan.length > 0 && (
          <div className="flex items-center gap-1 flex-wrap">
            <span className="text-[9pt] font-bold text-slate-500">Thuật ngữ chuẩn:</span>
            {soDoTuDuy.thuatNguChuan.map((tn, tIdx) => (
              <span
                key={tIdx}
                className="px-1.5 py-0.5 rounded bg-blue-100 text-blue-900 font-mono font-bold text-[9pt] border border-blue-200"
              >
                {tn}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-6xl aspect-[16/9] bg-slate-950 rounded-2xl overflow-hidden relative shadow-2xl border border-white/20 flex flex-col justify-between">
            {/* Modal Controls */}
            <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
              {soDoTuDuy.imageUrl && (
                <button
                  type="button"
                  onClick={handleDownloadImage}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  Tải 16:9 HD
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            {soDoTuDuy.imageUrl ? (
              <img
                src={soDoTuDuy.imageUrl}
                alt={soDoTuDuy.chuDeChinh}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white">
                <p className="text-xl font-bold">{soDoTuDuy.chuDeChinh}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
