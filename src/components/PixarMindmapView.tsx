import React, { useState } from 'react';
import { SoDoTuDuy } from '../types';
import { Maximize2, Download, Sparkles, X } from 'lucide-react';

interface PixarMindmapViewProps {
  soDoTuDuy: SoDoTuDuy;
  readOnly?: boolean;
}

export const PixarMindmapView: React.FC<PixarMindmapViewProps> = ({ soDoTuDuy }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  // Kiểm tra ảnh đã được gắn sẵn nội dung bài học vào các nhánh hay chưa
  const isGenericBackground = soDoTuDuy.imageUrl?.includes('mindmap-pixar-bg.jpg');

  return (
    <div className="my-3 rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-pink-50/70 p-3 sm:p-4 shadow-md transition-all">
      {/* Header bar - Tinh gọn, sang trọng */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-amber-200/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 to-orange-400 text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-sans font-bold text-[11pt] sm:text-[12pt] text-amber-950 uppercase tracking-tight">
              Sơ đồ tư duy 16:9 (3D Pixar Animation)
            </span>
            <span className="px-2 py-0.5 rounded-full text-[8.5pt] font-bold bg-pink-500 text-white shadow-xs">
              3D Pixar
            </span>
            <span className="px-2 py-0.5 rounded-full text-[8.5pt] font-bold bg-amber-200 text-amber-900 border border-amber-300">
              16:9 HD
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5">
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

      {/* Main 16:9 Canvas / Image Display - Hiển thị đầy đủ nội dung bài học trên các nhánh */}
      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-inner border border-amber-200/80 bg-slate-900 flex items-center justify-center">
        {soDoTuDuy.imageUrl ? (
          <div className="relative w-full h-full group">
            <img
              src={soDoTuDuy.imageUrl}
              alt={soDoTuDuy.chuDeChinh}
              className="w-full h-full object-cover sm:object-contain transition-transform duration-300"
            />

            {/* Nếu là ảnh nền chung chưa có sẵn chữ, overlay các nhánh nội dung bài học lên 4 góc nhánh 3D */}
            {isGenericBackground && (
              <>
                {/* Title Bar ở giữa phía trên */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-slate-950/85 backdrop-blur-md px-4 py-1.5 rounded-2xl border border-amber-400/70 shadow-xl text-center z-10 max-w-[80%]">
                  <h4 className="text-[10pt] sm:text-[12pt] font-black uppercase text-amber-300 tracking-wide line-clamp-1">
                    {soDoTuDuy.chuDeChinh}
                  </h4>
                  {soDoTuDuy.moTaChuDe && (
                    <p className="text-[7.5pt] sm:text-[8.5pt] text-slate-200 line-clamp-1 hidden sm:block">
                      {soDoTuDuy.moTaChuDe}
                    </p>
                  )}
                </div>

                {/* 4 Nhánh nội dung bài học gắn trên các nhánh 3D Pixar */}
                {soDoTuDuy.danhSachNhanh && soDoTuDuy.danhSachNhanh.length > 0 && (
                  <>
                    {/* Nhánh 1: Góc trên bên trái */}
                    {soDoTuDuy.danhSachNhanh[0] && (
                      <div className="absolute top-[14%] left-[2%] w-[32%] sm:w-[30%] bg-slate-950/85 backdrop-blur-md p-2 rounded-xl border border-sky-400/70 shadow-lg text-white">
                        <div className="flex items-center gap-1 font-bold text-[8.5pt] sm:text-[9.5pt] text-sky-300 mb-1">
                          <span>{soDoTuDuy.danhSachNhanh[0].icon3D || '📌'}</span>
                          <span className="line-clamp-1">{soDoTuDuy.danhSachNhanh[0].tieuDe}</span>
                        </div>
                        {soDoTuDuy.danhSachNhanh[0].congThuc && (
                          <div className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono text-[8pt] font-bold mb-1 line-clamp-1">
                            {soDoTuDuy.danhSachNhanh[0].congThuc}
                          </div>
                        )}
                        <ul className="text-[7.5pt] sm:text-[8.5pt] text-slate-200 space-y-0.5 leading-tight">
                          {soDoTuDuy.danhSachNhanh[0].cacYCon.slice(0, 3).map((y, yi) => (
                            <li key={yi} className="line-clamp-1">• {y}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Nhánh 2: Góc dưới bên trái */}
                    {soDoTuDuy.danhSachNhanh[1] && (
                      <div className="absolute bottom-[5%] left-[2%] w-[32%] sm:w-[30%] bg-slate-950/85 backdrop-blur-md p-2 rounded-xl border border-emerald-400/70 shadow-lg text-white">
                        <div className="flex items-center gap-1 font-bold text-[8.5pt] sm:text-[9.5pt] text-emerald-300 mb-1">
                          <span>{soDoTuDuy.danhSachNhanh[1].icon3D || '📌'}</span>
                          <span className="line-clamp-1">{soDoTuDuy.danhSachNhanh[1].tieuDe}</span>
                        </div>
                        {soDoTuDuy.danhSachNhanh[1].congThuc && (
                          <div className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono text-[8pt] font-bold mb-1 line-clamp-1">
                            {soDoTuDuy.danhSachNhanh[1].congThuc}
                          </div>
                        )}
                        <ul className="text-[7.5pt] sm:text-[8.5pt] text-slate-200 space-y-0.5 leading-tight">
                          {soDoTuDuy.danhSachNhanh[1].cacYCon.slice(0, 3).map((y, yi) => (
                            <li key={yi} className="line-clamp-1">• {y}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Nhánh 3: Góc trên bên phải */}
                    {soDoTuDuy.danhSachNhanh[2] && (
                      <div className="absolute top-[14%] right-[2%] w-[32%] sm:w-[30%] bg-slate-950/85 backdrop-blur-md p-2 rounded-xl border border-amber-400/70 shadow-lg text-white">
                        <div className="flex items-center gap-1 font-bold text-[8.5pt] sm:text-[9.5pt] text-amber-300 mb-1">
                          <span>{soDoTuDuy.danhSachNhanh[2].icon3D || '📌'}</span>
                          <span className="line-clamp-1">{soDoTuDuy.danhSachNhanh[2].tieuDe}</span>
                        </div>
                        {soDoTuDuy.danhSachNhanh[2].congThuc && (
                          <div className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono text-[8pt] font-bold mb-1 line-clamp-1">
                            {soDoTuDuy.danhSachNhanh[2].congThuc}
                          </div>
                        )}
                        <ul className="text-[7.5pt] sm:text-[8.5pt] text-slate-200 space-y-0.5 leading-tight">
                          {soDoTuDuy.danhSachNhanh[2].cacYCon.slice(0, 3).map((y, yi) => (
                            <li key={yi} className="line-clamp-1">• {y}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Nhánh 4: Góc dưới bên phải */}
                    {soDoTuDuy.danhSachNhanh[3] && (
                      <div className="absolute bottom-[5%] right-[2%] w-[32%] sm:w-[30%] bg-slate-950/85 backdrop-blur-md p-2 rounded-xl border border-purple-400/70 shadow-lg text-white">
                        <div className="flex items-center gap-1 font-bold text-[8.5pt] sm:text-[9.5pt] text-purple-300 mb-1">
                          <span>{soDoTuDuy.danhSachNhanh[3].icon3D || '📌'}</span>
                          <span className="line-clamp-1">{soDoTuDuy.danhSachNhanh[3].tieuDe}</span>
                        </div>
                        {soDoTuDuy.danhSachNhanh[3].congThuc && (
                          <div className="px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-mono text-[8pt] font-bold mb-1 line-clamp-1">
                            {soDoTuDuy.danhSachNhanh[3].congThuc}
                          </div>
                        )}
                        <ul className="text-[7.5pt] sm:text-[8.5pt] text-slate-200 space-y-0.5 leading-tight">
                          {soDoTuDuy.danhSachNhanh[3].cacYCon.slice(0, 3).map((y, yi) => (
                            <li key={yi} className="line-clamp-1">• {y}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </>
                )}

                {/* Watermark 3D Pixar */}
                <div className="absolute bottom-2 right-2 bg-amber-500/80 backdrop-blur-md px-2 py-0.5 rounded text-white text-[8pt] font-black tracking-wider uppercase shadow-xs">
                  Pixar 3D Standard 16:9
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="text-center text-white p-4">
            <p className="text-base font-bold text-amber-300">{soDoTuDuy.chuDeChinh}</p>
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
