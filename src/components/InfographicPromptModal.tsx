import React, { useState } from 'react';
import {
  X,
  Copy,
  Check,
  Sparkles,
  BookOpen,
  Image as ImageIcon,
  Flame,
  FileText,
  Search,
  Bot,
  ExternalLink
} from 'lucide-react';
import { CompleteLessonPlan } from '../types';

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

  if (!isOpen) return null;

  const metadata = currentPlan.giaoAn.metadata;
  const isTieuHoc = metadata.capHoc === 'TIEU_HOC';

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

  // Specific subject-tailored formulas (standard LaTeX)
  const latexFormulas = metadata.tenBaiDay.toLowerCase().includes('tốc độ')
    ? 'Công thức tính tốc độ: $v = \\frac{s}{t}$, Quãng đường: $s = v \\cdot t$, Thời gian: $t = \\frac{s}{v}$, Đổi đơn vị: $1\\text{ m/s} = 3{,}6\\text{ km/h}$'
    : isTieuHoc
    ? 'Đường kính và bán kính: $d = 2 \\times r$ (hay $d = 2r$), Chu vi: $C = d \\times 3{,}14$'
    : 'Công thức toán học/khoa học cốt lõi của bài học theo SGK';

  // Generate Prompt 1: Doraemon
  const promptDoraemon = `Thiết kế 1 ảnh infographic phiếu học tập có câu hỏi (không có đáp án) bằng truyện tranh có đối thoại nói chuyện qua lại về các nội dung trong bài học "${metadata.tenBaiDay}" - Môn ${metadata.monHoc} Lớp ${metadata.khoiLop} (Bộ sách Kết nối tri thức với cuộc sống).

Hình ảnh sử dụng các nhân vật trong phim hoạt hình Doraemon gồm nhiều nhân vật, nổi bật nhất là nhóm bạn thân: Doraemon, Nobita (Nôbita), Shizuka (Xuka), Jaian (Chaien), và Suneo (Xêko), cùng nhiều nhân vật phụ khác như Dorami (em gái Doraemon), Dekisugi, bố mẹ Nobita (ông Nobisuke, bà Tamako), thầy giáo.

• Cốt truyện đối thoại:
- Khung 1: Thầy giáo giao phiếu thử thách bài học "${metadata.tenBaiDay}". Nobita gãi đầu bối rối: "Ôi trời, bài này khó quá, làm sao đây Doraemon ơi!".
- Khung 2: Doraemon lấy bảo bối thần kỳ bảo Nobita bình tĩnh. Dekisugi thông thái mỉm cười gợi ý quy luật cốt lõi của bài học.
- Khung 3: Shizuka cẩn thận nhắc nhở các bạn chú ý các chi tiết quan trọng: "${sampleQuestions[0] || 'Quan sát hình ảnh và các dữ liệu đã cho'}".
- Khung 4: Jaian và Suneo tranh luận sôi nổi về bài toán đố: "${sampleQuestions[1] || 'Đo đạc và tính toán các đại lượng'}".
- Khung 5: Dorami xuất hiện mang đến câu đố mở rộng: "${sampleQuestions[2] || 'Tìm mối quan hệ giữa các đại lượng'}".

• Nội dung câu hỏi phiếu học tập (để trống dòng kẻ chấm "............" cho học sinh làm bài, KHÔNG có đáp án):
1. ${sampleQuestions[0] || 'Câu hỏi nhận biết khái niệm cơ bản'}
2. ${sampleQuestions[1] || 'Câu hỏi thực hành đo đạc / tính toán'}
3. ${sampleQuestions[2] || 'Câu hỏi tìm mối quan hệ / công thức'}
4. ${sampleQuestions[3] || 'Thử thách ứng dụng thực tế sáng tạo'}

• Yêu cầu kỹ thuật:
- Tỉ lệ: 1:1,414 (Khổ A4 dọc tiêu chuẩn in ấn phiếu học tập).
- Phong cách: Anime / Manga Doraemon nét vẽ hoạt hình Nhật Bản sắc nét, rực rỡ sắc màu, các khung tranh (comic panels) bố cục khoa học từ trên xuống dưới, bóng thoại (speech bubble) tiếng Việt rõ ràng, tuyệt đối không có đáp án sẵn.`;

  // Generate Prompt 2: Science Case File (Vụ án khoa học chuyên sâu)
  const promptScienceCase = `Bạn là một chuyên gia giáo dục, chuyên thiết kế các "infographic kiến thức - vụ án khoa học" cho học sinh. Hãy đọc và phân tích kiến thức trong bài học này, sau đó thiết kế cho tôi chi tiết một "vụ án khoa học".

• Thông tin bài học:
- Môn học: ${metadata.monHoc}
- Lớp: ${metadata.khoiLop}
- Tên bài học: ${metadata.tenBaiDay}
- Bộ sách giáo khoa: Kết nối tri thức với cuộc sống (Bộ GD&ĐT)

Yêu cầu chi tiết:
1. Tên vụ án: Đặt tên vụ án khoa học ly kỳ, hấp dẫn liên quan trực tiếp đến bài học (Ví dụ: "Bí Mật Bánh Xe Cổ Đại Bị Đánh Cắp" hoặc "Bí Ẩn Trục Đối Xứng Trong Lâu Đài Gương").
2. Số lượng: 2 infographic liên hoàn:
- Infographic 1:
  + Bối cảnh vụ án: 1 đoạn thật ngắn (2-3 câu) nêu hiện trường bí ẩn cần giải mã.
  + 3-4 Manh mối khoa học: Là các kiến thức khoa học ngắn gọn cốt lõi liên quan đến bài học:
    * Manh mối 1: Khái niệm & định nghĩa cơ bản.
    * Manh mối 2: Đặc điểm, tính chất và các đại lượng đặc trưng.
    * Manh mối 3: Công thức và quy luật toán học/khoa học liên hệ.
    * Manh mối 4 (nếu có): Ứng dụng thực tiễn trong đời sống.
- Infographic 2:
  + Từng bài tập trắc nghiệm / trả lời ngắn liên quan trực tiếp đến từng manh mối ở Infographic 1 để học sinh suy luận tìm ra thủ phạm hoặc giải mã mật mã (không có đáp án trong infographic).
3. Phần kết quả: Nằm RIÊNG 1 phần (hoàn toàn không nằm trong các infographic), dùng cho giáo viên làm đáp án chấm bài.
4. Định dạng đầu ra:
  + Xuất ra kết quả dạng text có cấu trúc rõ ràng.
  + Chuẩn công thức dạng LaTeX: ${latexFormulas}.
  + Các hóa chất / hợp chất (nếu thuộc môn Hóa học/KHTN) phải chuẩn danh pháp IUPAC quốc tế để tôi copy được.`;

  // Generate Prompt 3: Conan Anime Poster
  const promptConan = `Thiết kế 1 ảnh infographic "vụ án khoa học" với những câu hỏi (không có đáp án) được dẫn dắt bởi nhân vật Conan (trong bộ truyện Thám tử lừng danh Conan) với các khung truyện tranh anime có màu, hấp dẫn lôi cuốn, như những tấm poster. Tỉ lệ 1,414:1.

• Chủ đề bài học: "${metadata.tenBaiDay}" - Môn ${metadata.monHoc} Lớp ${metadata.khoiLop} (Bộ sách Kết nối tri thức với cuộc sống).

• Bối cảnh poster & Nhân vật:
- Nhân vật trung tâm: Thám tử Edogawa Conan đeo kính định vị lóe sáng, nơ biến đổi giọng nói, tay cầm kính lúp chỉ vào bằng chứng hiện trường vụ án khoa học.
- Nhân vật hỗ trợ: Đội thám tử nhí Lớp 1B (Ayumi, Genta, Mitsuhiko) cùng Ran Mori và Bác tiến sĩ Agasa đang ngạc nhiên quan sát các hiện vật hiện trường.
- Khung cảnh: Phông nền hiện trường phá án khoa học bí ẩn với các tia sáng xanh neon cinematic, sơ đồ phân tích và các manh mối hình học/khoa học.

• Nội dung câu hỏi truy tìm chân tướng (Không có đáp án, có ô để học sinh điền kết quả):
- Manh mối số 1 (Câu hỏi cấp độ Nhận biết): ${sampleQuestions[0]}
- Manh mối số 2 (Câu hỏi cấp độ Thông hiểu): ${sampleQuestions[1]}
- Manh mối số 3 (Câu hỏi cấp độ Vận dụng): ${sampleQuestions[2]}
- Câu đố chìa khóa vạn năng (Vận dụng cao): ${sampleQuestions[3]}

• Yêu cầu kỹ thuật đồ họa:
- Tỉ lệ: 1,414:1 (Khổ ngang A4 Landscape Poster chuẩn điện ảnh).
- Bố cục: Phong cách Anime Movie Poster rực rỡ, kịch tính, kết hợp hài hòa giữa truyện tranh manga có màu và bảng infographic dữ liệu khoa học.
- Chữ và tiêu đề: Tiêu đề poster in đậm ấn tượng bằng tiếng Việt, các ô ghi chép có dòng kẻ chấm để trống, tuyệt đối KHÔNG in đáp án lên poster.`;

  // Generate Prompt 4: Cute Students Cartoon
  const promptCuteStudents = `Thiết kế 1 ảnh infographic phiếu học tập có câu hỏi (không có đáp án), phong cách hoạt hình với nhân vật là các bạn học sinh lớp ${metadata.khoiLop}, dễ thương đối thoại nói chuyện qua lại về các nội dung trong bài học "${metadata.tenBaiDay}" - Môn ${metadata.monHoc} (Bộ sách Kết nối tri thức với cuộc sống), bố cục màu sắc, dễ nhìn, sáng tạo. Tỉ lệ 1:1,414.

• Nhân vật & Bối cảnh:
- Một nhóm gồm 4 bạn học sinh Lớp ${metadata.khoiLop} Việt Nam cực kỳ dễ thương (phong cách hoạt hình 3D Pixar / Chibi 2D đáng yêu, mặc đồng phục khăn quàng đỏ tươi vui), đang ngồi học nhóm quanh một chiếc bàn học tròn thông minh với máy tính bảng và dụng cụ học tập.
- Mỗi bạn đại diện cho một vai trò học tập sôi nổi: Bạn Nhóm trưởng hào hứng, bạn Thư ký chăm chỉ cầm bút ghi chép, bạn Kỹ thuật năng động và bạn Báo cáo viên tự tin.

• Nội dung đối thoại & Câu hỏi phiếu học tập:
- Bạn Minh (Nhóm trưởng): "Các bạn ơi, bài học '${metadata.tenBaiDay}' hôm nay thú vị lắm! Cùng nhau giải mã câu hỏi 1 nào!" ➔ [${sampleQuestions[0]}]
- Bạn Lan (Thư ký): "Tớ ghi lại số liệu đây rồi! Còn câu hỏi 2 này thì làm sao nhỉ?" ➔ [${sampleQuestions[1]}]
- Bạn An (Kỹ thuật): "Tớ vừa phát hiện ra quy luật này cực hay!" ➔ [${sampleQuestions[2]}]
- Bạn Hoa (Báo cáo viên): "Thử thách cuối cùng để nhóm mình giành điểm 10 đây rồi!" ➔ [${sampleQuestions[3]}]

• Yêu cầu kỹ thuật:
- Tỉ lệ: 1:1,414 (Khổ dọc A4 Portrait tiêu chuẩn in ấn phiếu học tập cho học sinh).
- Bố cục: Infographic giáo dục màu sắc tươi sáng, pastel ấm áp, các khối thông tin rõ ràng, font chữ bo tròn thân thiện với học sinh, có dòng kẻ chấm "............" để học sinh điền câu trả lời. Tuyệt đối KHÔNG có đáp án.`;

  const getActivePromptText = () => {
    switch (activeTab) {
      case 'doraemon':
        return promptDoraemon;
      case 'science-case':
        return promptScienceCase;
      case 'conan':
        return promptConan;
      case 'cute-students':
        return promptCuteStudents;
    }
  };

  const handleCopy = (text: string, tabKey: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTab(tabKey);
    setTimeout(() => setCopiedTab(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden border border-slate-200">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Sparkles className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base sm:text-lg">
                  Bộ Prompt AI Thiết Kế Infographic Phiếu Học Tập
                </h3>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-400 text-slate-900 shadow-xs">
                  4 Phong Cách Chuẩn
                </span>
              </div>
              <p className="text-xs text-blue-100 mt-0.5">
                Tự động cá nhân hóa theo bài dạy: <strong>{metadata.tenBaiDay}</strong> • Lớp {metadata.khoiLop} ({metadata.boSach})
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
        <div className="bg-slate-100 p-2 border-b border-slate-200 flex items-center gap-1.5 overflow-x-auto flex-shrink-0">
          
          <button
            onClick={() => setActiveTab('doraemon')}
            className={`py-2 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 flex-shrink-0 ${
              activeTab === 'doraemon'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white'
            }`}
          >
            <span className="text-base">🐱</span>
            <span>1. Truyện Doraemon (1:1,414)</span>
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
            <span>2. Vụ Án Khoa Học (LaTeX/IUPAC)</span>
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
            <span>4. Học Sinh Dễ Thương (1:1,414)</span>
          </button>

        </div>

        {/* Tab Meta Specs */}
        <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 text-xs flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Tỉ lệ:
              <strong className="text-blue-700 ml-1">
                {activeTab === 'conan' ? '1,414:1 (A4 Ngang - Landscape)' : '1:1,414 (A4 Dọc - Portrait)'}
              </strong>
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              Nhân vật:
              <strong className="text-indigo-700 ml-1">
                {activeTab === 'doraemon' && 'Doraemon, Nobita, Shizuka, Jaian, Suneo, Dorami, Dekisugi, Thầy giáo'}
                {activeTab === 'science-case' && 'Chuyên gia giáo dục (2 Infographic + LaTeX & IUPAC)'}
                {activeTab === 'conan' && 'Thám tử Conan, Đội thám tử nhí, Ran Mori, Bác Agasa'}
                {activeTab === 'cute-students' && `4 bạn học sinh Lớp ${metadata.khoiLop} đáng yêu (Chibi 2D/3D)`}
              </strong>
            </span>
          </div>

          <button
            onClick={() => handleCopy(getActivePromptText(), activeTab)}
            className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-xs transition-all flex items-center gap-1.5 shadow-sm active:scale-95 ml-auto"
          >
            {copiedTab === activeTab ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Đã sao chép!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Sao Chép Prompt</span>
              </>
            )}
          </button>
        </div>

        {/* Prompt Content View */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-slate-900 text-slate-100 font-mono text-xs sm:text-[13px] leading-relaxed select-all">
          <pre className="whitespace-pre-wrap break-words font-mono bg-transparent">
            {getActivePromptText()}
          </pre>
        </div>

        {/* Modal Footer / Direct AI Actions */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Công cụ khuyên dùng:</span>
            <span className="px-2 py-0.5 bg-white border border-slate-300 rounded font-medium text-slate-700">
              ChatGPT (GPT-4o / DALL-E 3)
            </span>
            <span className="px-2 py-0.5 bg-white border border-slate-300 rounded font-medium text-slate-700">
              Midjourney v6
            </span>
            <span className="px-2 py-0.5 bg-white border border-slate-300 rounded font-medium text-slate-700">
              Canva Magic
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={() => handleCopy(getActivePromptText(), activeTab)}
              className="flex-1 sm:flex-none px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-bold shadow-sm transition-all flex items-center justify-center gap-2"
            >
              {copiedTab === activeTab ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Đã sao chép vào Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Sao chép câu lệnh này</span>
                </>
              )}
            </button>
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
