import { CompleteLessonPlan, LessonMetadata, GiaoAnWordData, SlidePowerPointData } from '../types';
import { generateLessonPlanWithAI } from '../services/aiGenerator';

/**
 * Đường dẫn chính thức của Google Gemini Web AI theo đúng yêu cầu người dùng
 */
export const GEMINI_WEB_URL =
  'https://gemini.google.com/app?is_sa=1&is_sa=1&android-min-version=301356232&ios-min-version=322.0&campaign_id=bkws&utm_source=sem&utm_source=google&utm_medium=paid-media&utm_medium=cpc&utm_campaign=bkws&utm_campaign=2024viVN_gemfeb&pt=9008&mt=8&ct=p-growth-sem-bkws&gclsrc=aw.ds&gad_source=1&gad_campaignid=22155474606&gbraid=0AAAAApk5BhkRzyfZXjmUuyyl5ufR_v-fS&gclid=Cj0KCQjw_L_FBhDmARIsAItqgt6A9j8BiEouotrKotD27lBzOomkzrOgsOc_PtGjyPc6Q8Toefab3NkaAsLrEALw_wcB';

/**
 * Xây dựng Prompt chuẩn sư phạm đỉnh cao gửi tới Google Gemini
 * Đảm bảo Gemini tự soạn trọn vẹn cả Giáo án Word (CV 5512 / CV 2345) và Slide PowerPoint 16:9
 */
export function buildGeminiLessonPrompt(meta: LessonMetadata): string {
  const isTieuHoc = meta.capHoc === 'TIEU_HOC' || Number(meta.khoiLop) <= 5;
  const congVan = isTieuHoc ? 'Công văn 2345/BGDĐT-GDTH' : 'Công văn 5512/BGDĐT-GDTrH';

  return `Bạn là một Chuyên gia Giáo dục & Cố vấn Sư phạm Cấp cao của Bộ Giáo dục và Đào tạo Việt Nam.
Hãy đọc, bóc tách toàn bộ các đề mục trong Sách giáo khoa và tự động soạn KẾ HOẠCH BÀI DẠY (FILE WORD .DOCX) VÀ BÀI GIẢNG TRÌNH CHIẾU (POWERPOINT .PPTX 16:9) hoàn chỉnh 100% cho bài học sau:

=== THÔNG TIN BÀI DẠY CẦN SOẠN ===
• Tên bài dạy: ${meta.tenBaiDay}
• Môn học: ${meta.monHoc}
• Khối lớp: Lớp ${meta.khoiLop}
• Bộ sách giáo khoa: ${meta.boSach}
• Thể thức quy định: Chuẩn ${congVan} và Thông tư chuẩn GDPT 2018
• Thời lượng dự kiến: 45 - 90 phút (1 - 2 tiết)

=== YÊU CẦU BẮT BUỘC KHI SOẠN GIÁO ÁN WORD (.DOCX) ===
1. MỤC TIÊU BÀI DẠY (YÊU CẦU CẦN ĐẠT):
   - Năng lực đặc thù: Nhận biết, tìm hiểu tự nhiên/xã hội, vận dụng kiến thức, kĩ năng.
   - Năng lực chung: Tự chủ và tự học, giao tiếp và hợp tác, giải quyết vấn đề và sáng tạo.
   - Phẩm chất chủ yếu: Chăm chỉ, trung thực, trách nhiệm.

2. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU:
   - Giáo viên: Giáo án Word, Bài giảng PowerPoint 16:9, Tranh ảnh/Video SGK, Phiếu học tập Infographic.
   - Học sinh: SGK ${meta.monHoc} ${meta.khoiLop}, Vở ghi, Bút 4 màu mực (Đỏ, Xanh dương, Xanh lá, Tím/Đen).

3. TIẾN TRÌNH DẠY HỌC (CHUẨN 4 HOẠT ĐỘNG):
   - Hoạt động 1: Mở đầu / Khởi động (Tạo tình huống có vấn đề hoặc câu hỏi gợi mở liên kết thực tế).
   - Hoạt động 2: Hình thành kiến thức mới (BẮT BUỘC BÓC TÁCH TỪNG ĐỀ MỤC CỤ THỂ CỦA SGK, ví dụ Đề mục I, II, III...):
     + Mỗi đề mục trình bày dạng BẢNG 2 CỘT:
       * Cột 1: Hoạt động của GV và HS (Gồm 4 bước rõ ràng: Bước 1: Chuyển giao nhiệm vụ - Thảo luận nhóm 4 màu mực; Bước 2: Thực hiện nhiệm vụ; Bước 3: Báo cáo thảo luận; Bước 4: Kết luận nhận định).
       * Cột 2: Sản phẩm dự kiến (Kiến thức cốt lõi HS ghi nhớ và chốt vào vở).
     + Mỗi đề mục đều có hình ảnh SGK minh họa và Sơ đồ tư duy 16:9 Pixar chốt kiến thức.
   - Hoạt động 3: Luyện tập (Hệ thống câu hỏi, bài tập trắc nghiệm & tự luận, bài tập phân tích tranh ảnh).
   - Hoạt động 4: Vận dụng (Tình huống thực tế, liên hệ an toàn và ứng dụng đời sống).

4. BẢNG TIÊU CHÍ ĐÁNH GIÁ (RUBRIC) & PHIẾU HỌC TẬP TRUYỆN TRANH:
   - Phân chia vai trò rõ ràng theo 4 màu mực: Nhóm trưởng (Đỏ), Thư ký (Xanh dương), Kỹ thuật viên (Xanh lá), Báo cáo viên (Tím/Đen).
   - Phiếu học tập truyện tranh Doraemon / Poster phá án Conan / Vụ án khoa học kịch tính.

=== YÊU CẦU BẮT BUỘC KHI SOẠN BÀI GIẢNG POWERPOINT (.PPTX 16:9) ===
- Soạn đầy đủ từ 8 đến 15 Slide trình chiếu 16:9 hiện đại:
  + Slide 1: Bìa bài học (Tên bài, Môn, Lớp, Giáo viên).
  + Slide 2: Mục tiêu bài học (Yêu cầu cần đạt).
  + Slide 3: Khởi động (Trò chơi / Tình huống thực tế).
  + Slide 4 - 8: Nội dung các đề mục SGK (Mỗi đề mục 1 - 2 slide có câu hỏi và kết luận).
  + Slide 9 - 10: Phiếu học tập nhóm & Bảng 4 màu mực.
  + Slide 11 - 12: Luyện tập & Vận dụng đời sống.
  + Slide cuối: Sơ đồ tư duy tổng kết toàn bài & Dặn dò về nhà.

=== ĐỊNH DẠNG TRẢ VỀ ===
Hãy xuất ra kết quả thật chi tiết, đầy đủ toàn bộ nội dung giáo án và slide để người dùng copy trực tiếp hoặc import nạp thẳng vào ứng dụng.`;
}

/**
 * Trình phân tích kết quả trả về từ Gemini và nạp vào App
 */
export async function importGeminiLessonPlan(
  geminiOutput: string,
  basePlan: CompleteLessonPlan
): Promise<CompleteLessonPlan> {
  const cleanText = geminiOutput.trim();
  if (!cleanText) {
    throw new Error('Vui lòng dán nội dung giáo án do Google Gemini tạo ra!');
  }

  // 1. Nếu Gemini trả về dạng JSON trực tiếp
  try {
    let jsonStr = cleanText;
    const jsonMatch = cleanText.match(/```(?:json)?\s*([\s\S]*?)\s*```/);
    if (jsonMatch && jsonMatch[1]) {
      jsonStr = jsonMatch[1];
    }
    if (jsonStr.startsWith('{') && jsonStr.endsWith('}')) {
      const parsed = JSON.parse(jsonStr);
      if (parsed.giaoAn && parsed.slideDeck) {
        return parsed as CompleteLessonPlan;
      }
    }
  } catch {
    // Không phải JSON thuần, tiếp tục phân tích văn bản thông minh
  }

  // 2. Phân tích văn bản thông minh (Markdown/Text) từ Gemini
  const updatedPlan: CompleteLessonPlan = JSON.parse(JSON.stringify(basePlan));
  const lines = cleanText.split('\n');

  // Trích xuất mục tiêu nếu có
  const ycLineIndex = lines.findIndex(l => /mục tiêu|yêu cầu cần đạt/i.test(l));
  if (ycLineIndex !== -1) {
    const extractedObjectives: string[] = [];
    for (let i = ycLineIndex + 1; i < Math.min(ycLineIndex + 20, lines.length); i++) {
      const line = lines[i].trim();
      if (/^#+\s|^II\.|tiến trình/i.test(line)) break;
      if (line.startsWith('-') || line.startsWith('*') || line.startsWith('+') || /^\d+\./.test(line)) {
        extractedObjectives.push(line.replace(/^[-*+\d.]\s*/, ''));
      }
    }
    if (extractedObjectives.length > 0) {
      updatedPlan.giaoAn.mucTieu.nangLucDacThu = extractedObjectives.slice(0, 4);
    }
  }

  // Cập nhật mô tả phân tích sư phạm
  updatedPlan.giaoAn.metadata.tenBaiDay = basePlan.giaoAn.metadata.tenBaiDay;
  if (updatedPlan.aiAnalysisReport) {
    updatedPlan.aiAnalysisReport.phanTichSuPham = 'Đã nạp và đồng bộ trực tiếp từ Google Gemini Web AI';
  }

  return updatedPlan;
}
