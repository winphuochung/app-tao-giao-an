import React from 'react';
import {
  Film,
  X,
  Download,
  Sparkles,
  Layers,
  Zap,
  Play,
  Smile,
  GraduationCap
} from 'lucide-react';
import { saveAs } from 'file-saver';
import { SlidePowerPointData, CapHoc } from '../types';

interface AnimationStoryboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  slideDeck: SlidePowerPointData;
  capHoc: CapHoc;
  lessonTitle: string;
}

export const AnimationStoryboardModal: React.FC<AnimationStoryboardModalProps> = ({
  isOpen,
  onClose,
  slideDeck,
  capHoc,
  lessonTitle
}) => {
  if (!isOpen) return null;

  const isTieuHoc = capHoc === 'TIEU_HOC';

  const handleExportMarkdown = () => {
    let md = `# BẢNG CHỈ DẪN HIỆU ỨNG POWERPOINT CHUYÊN GIA (ANIMATION STORYBOARD)\n`;
    md += `**Bài học:** ${lessonTitle}\n`;
    md += `**Cấp học:** ${isTieuHoc ? 'Tiểu học (Tuân thủ CV 2345/BGDĐT-GDTH)' : 'THCS (Tuân thủ CV 5512/BGDĐT-GDTrH)'}\n`;
    md += `**Phong cách:** ${slideDeck.themeConfig.name}\n\n`;
    md += `---\n\n`;
    md += `## 1. NGUYÊN TẮC TÂM LÝ LỨA TUỔI\n`;
    if (isTieuHoc) {
      md += `- **Tâm lý học sinh Tiểu học:** Thích sự bất ngờ, vui tươi, chuyển động sinh động. Tránh dùng hiệu ứng quá nhanh hoặc quá chóng mặt.\n`;
      md += `- **Slide Transition khuyến nghị:** Morph (biến đổi mượt mà), Curtains (mở màn sân khấu ở slide đầu), Page Curl (lật trang sách cổ tích).\n`;
      md += `- **Object Animation khuyến nghị:** Bounce (nảy lên vui nhộn), Float In (bay nhẹ lên), Pulse (nhấp nháy từ khóa), Triggers cho trò chơi trắc nghiệm.\n\n`;
    } else {
      md += `- **Tâm lý học sinh THCS:** Đòi hỏi tính logic, khoa học, sắc nét, mạch lạc. Tránh hiệu ứng hoạt hình rườm rà gây phân tán chú ý.\n`;
      md += `- **Slide Transition khuyến nghị:** Morph (phóng to chi tiết sơ đồ/thí nghiệm), Push (trượt theo mạch logic bài giảng), Fade (chuyển cảnh tinh tế).\n`;
      md += `- **Object Animation khuyến nghị:** Wipe (quét theo chiều mũi tên cho quy trình/công thức), Zoom (tập trung trọng tâm), Step-by-step reveal (xuất hiện từng bước theo nhịp giảng).\n\n`;
    }
    md += `## 2. KỊCH BẢN CHI TIẾT TỪNG SLIDE (STORYBOARD)\n\n`;

    slideDeck.slides.forEach((s) => {
      md += `### [Slide ${s.slideNumber}] - ${s.title}\n`;
      md += `- **Loại Slide:** ${s.slideType} | **Giai đoạn:** ${s.stageBadge || 'Bình thường'}\n`;
      md += `- **Hiệu ứng chuyển Slide (Transition):** ${s.animationsAndTransitions?.slideTransition || 'Push'}\n`;
      md += `- **Hiệu ứng thành phần (Object Animations):**\n`;
      s.animationsAndTransitions?.elementAnimations?.forEach((anim) => {
        md += `  * ${anim}\n`;
      });
      md += `- **Kịch bản lời giảng (Speaker Notes):**\n  > ${s.speakerNotes}\n`;
      md += `- **Gợi ý ảnh minh họa (AI Prompt):**\n  \`${s.aiImagePrompt}\`\n\n`;
    });

    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    saveAs(blob, `Animation_Storyboard_${lessonTitle.replace(/[^a-zA-Z0-9]/g, '_')}.md`);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-violet-100 text-violet-700">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Bảng Chỉ Dẫn Hiệu Ứng PowerPoint (Animation Storyboard)
              </h3>
              <p className="text-xs text-slate-500">
                Thiết kế chuyển động dựa trên tâm lý học lứa tuổi học sinh {isTieuHoc ? 'Tiểu học' : 'THCS'}
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

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm">
          
          {/* Pedagogical Guidelines Box */}
          <div className={`p-4 rounded-xl border ${
            isTieuHoc ? 'bg-rose-50/60 border-rose-200 text-rose-900' : 'bg-blue-50/60 border-blue-200 text-blue-900'
          }`}>
            <div className="flex items-center gap-2 font-bold mb-1.5">
              {isTieuHoc ? <Smile className="w-4 h-4 text-rose-600" /> : <GraduationCap className="w-4 h-4 text-blue-600" />}
              <span>Quy chuẩn hiệu ứng cho {isTieuHoc ? 'Học sinh Tiểu học' : 'Học sinh THCS'}:</span>
            </div>
            {isTieuHoc ? (
              <ul className="text-xs space-y-1 pl-5 list-disc text-slate-700">
                <li><strong className="text-slate-900">Slide Transitions:</strong> <code>Morph</code> (biến đổi hình học), <code>Curtains</code> (mở màn sân khấu sinh động), <code>Page Curl</code> (lật trang cổ tích).</li>
                <li><strong className="text-slate-900">Object Animations:</strong> <code>Bounce</code> (nảy vui nhộn), <code>Float In</code> (bay êm ái), <code>Pulse</code> (nhấp nháy nhấn mạnh từ khóa).</li>
                <li><strong className="text-slate-900">Triggers:</strong> Nhấp vào đáp án trắc nghiệm phát hiệu ứng hoa pháo giấy và âm thanh vỗ tay tán thưởng.</li>
              </ul>
            ) : (
              <ul className="text-xs space-y-1 pl-5 list-disc text-slate-700">
                <li><strong className="text-slate-900">Slide Transitions:</strong> <code>Morph</code> (phóng to chi tiết sơ đồ Bento Grid), <code>Push</code> (trượt logic từ trái sang phải), <code>Fade</code> (chuyển cảnh lịch lãm).</li>
                <li><strong className="text-slate-900">Object Animations:</strong> <code>Wipe</code> (quét theo chiều mũi tên quy trình), <code>Zoom</code> (tập trung trọng tâm công thức), <code>Step-by-step reveal</code> (xuất hiện từng bước theo nhịp giảng tránh quá tải thị giác).</li>
              </ul>
            )}
          </div>

          {/* Slide Deck Breakdown */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
              Chỉ Dẫn Hiệu Ứng Chi Tiết Theo Từng Slide ({slideDeck.slides.length} Slides)
            </h4>

            {slideDeck.slides.map((s) => (
              <div key={s.id} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-indigo-700">
                    Slide {s.slideNumber}: {s.title}
                  </span>
                  <span className="font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {s.animationsAndTransitions?.slideTransition || 'Morph'}
                  </span>
                </div>

                <div className="text-xs text-slate-600 pl-2 border-l-2 border-indigo-400 space-y-1">
                  {s.animationsAndTransitions?.elementAnimations?.map((anim, idx) => (
                    <p key={idx}>• {anim}</p>
                  )) || <p>• Float In các khối nội dung</p>}
                </div>

                <div className="text-[11px] text-slate-500 italic bg-white p-2 rounded border border-slate-100">
                  <span className="font-semibold text-slate-700 not-italic">Speaker Note: </span>
                  {s.speakerNotes?.slice(0, 140)}...
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <p className="text-xs text-slate-500">
            Có thể xuất tài liệu hướng dẫn hiệu ứng dưới dạng Markdown để lưu trữ
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleExportMarkdown}
              className="px-3.5 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Xuất Kịch Bản Hiệu Ứng (.MD)</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-700 text-xs font-semibold transition-colors"
            >
              Đóng
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
