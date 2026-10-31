import { LessonMetadata, PromptInfographicPhieuHocTap } from '../types';

/**
 * Tự động sinh ra 4 bộ Prompt AI thiết kế Phiếu học tập Infographic / Truyện tranh
 * gắn liền với bài học cụ thể trong Kế hoạch bài dạy (GDPT 2018 - Sách Kết nối tri thức với cuộc sống).
 */
export function generateInfographicPrompts(
  metadata: LessonMetadata,
  cauHoiNhiemVu?: string[]
): PromptInfographicPhieuHocTap {
  const isTieuHoc = metadata.capHoc === 'TIEU_HOC';
  const monHoc = metadata.monHoc || 'Toán học';
  const khoiLop = metadata.khoiLop || (isTieuHoc ? '3' : '6');
  const tenBaiDay = metadata.tenBaiDay || 'Bài học trọng tâm';
  const boSach = metadata.boSach || 'Kết nối tri thức với cuộc sống (Bộ GD&ĐT)';

  const questions =
    cauHoiNhiemVu && cauHoiNhiemVu.length > 0
      ? cauHoiNhiemVu
      : [
          `Nhiệm vụ 1: Nhận biết và chỉ ra các khái niệm, quy tắc cốt lõi của bài học "${tenBaiDay}".`,
          `Nhiệm vụ 2: Thực hiện đo đạc / giải toán / tính toán cụ thể trên các dữ liệu đề bài.`,
          `Nhiệm vụ 3: Tìm ra quy luật, công thức tổng quát và viết biểu thức toán học.`,
          `Nhiệm vụ 4: Thử thách vận dụng giải quyết tình huống thực tế đời sống.`
        ];

  // Specific subject-tailored formulas (LaTeX)
  const latexFormulas = isTieuHoc
    ? 'Đường kính và bán kính: $d = 2 \\times r$ (hay $d = 2r$), Chu vi hình tròn: $C = d \\times 3{,}14 = 2 \\times r \\times 3{,}14$'
    : 'Trục đối xứng $\\Delta$: $\\forall M \\in (H) \\implies M\' = D_\\Delta(M) \\in (H)$, Tọa độ đối xứng: $(x, y) \\mapsto (-x, y)$';

  // 1. Doraemon Comic Worksheet (1:1,414)
  const promptDoraemon = `Thiết kế 1 ảnh infographic phiếu học tập có câu hỏi (không có đáp án) bằng truyện tranh có đối thoại nói chuyện qua lại về các nội dung trong bài trên có dùng các nhân vật trong phim hoạt hình Doraemon có nhiều nhân vật, nổi bật nhất là nhóm bạn thân gồm Doraemon, Nobita (Nôbita), Shizuka (Xuka), Jaian (Chaien), và Suneo (Xêko), cùng nhiều nhân vật phụ khác như Dorami (em gái Doraemon), Dekisugi, bố mẹ Nobita (ông Nobisuke, bà Tamako), thầy giáo. tỉ lệ 1:1,414.

• Thông tin bài học:
- Môn học: ${monHoc}
- Lớp: ${khoiLop}
- Bài học: ${tenBaiDay}
- Bộ sách: ${boSach}

• Cốt truyện đối thoại:
- Thầy giáo giao phiếu thử thách bài học "${tenBaiDay}".
- Nobita lúng túng hỏi Doraemon; Doraemon rút bảo bối học tập hướng dẫn cách quan sát.
- Dekisugi mỉm cười nêu gợi ý nguyên lý khoa học/toán học; Shizuka cẩn thận ghi chép thông số.
- Jaian và Suneo hào hứng tranh luận để giải bài tập thực hành.
- Dorami đưa ra thử thách mở rộng cho cả nhóm.

• Các câu hỏi phiếu học tập (không có đáp án, có dòng kẻ chấm để học sinh điền):
${questions.map((q, i) => `${i + 1}. ${q}`).join('\n')}

• Yêu cầu kỹ thuật: Tỉ lệ 1:1,414 (Khổ A4 dọc Portrait in phiếu học tập), phong cách manga/anime hoạt hình Doraemon rực rỡ có màu, bóng thoại tiếng Việt rõ nét, tuyệt đối KHÔNG có đáp án.`;

  // 2. Science Case File (Vụ án khoa học chuyên sâu - LaTeX / IUPAC)
  const promptVuAnKhoaHoc = `Bạn là một chuyên gia giáo dục, chuyên thiết kế các "infographic kiến thức - vụ án khoa học" cho học sinh. Hãy đọc và phân tích kiến thức trong bài học này, sau đó thiết kế cho tôi chi tiết một "vụ án khoa học".

• Thông tin bài học:
- Môn: ${monHoc}
- Lớp: ${khoiLop}
- Bài học: ${tenBaiDay}
- Bộ sách: ${boSach}

• Yêu cầu chi tiết:
1. Tên vụ án: Đặt tên vụ án liên quan trực tiếp đến kiến thức cốt lõi của bài học (kịch tính, hấp dẫn học sinh).
2. Số lượng: 2 infographic:
- Infographic 1:
  + Bối cảnh: 1 đoạn thật ngắn (2-3 câu) miêu tả hiện trường bí ẩn cần giải mã.
  + 3-4 Manh mối: Là các kiến thức khoa học ngắn gọn liên quan đến bài học:
    * Manh mối 1: Khái niệm & định nghĩa khoa học cốt lõi.
    * Manh mối 2: Đặc tính, đại lượng đo lường và tính chất đặc trưng.
    * Manh mối 3: Quy luật, công thức toán học/khoa học liên hệ.
    * Manh mối 4: Ứng dụng thực tiễn / mã khóa để phá án.
- Infographic 2:
  + Từng bài tập trắc nghiệm / trả lời ngắn liên quan đến từng manh mối để học sinh thực hành phá án (không có đáp án trên infographic).
3. Phần kết quả: Nằm RIÊNG 1 phần (hoàn toàn không nằm trong các infographic), dùng cho giáo viên làm đáp án chấm điểm.
4. Định dạng đầu ra: Xuất ra kết quả dạng text, chuẩn công thức dạng LaTeX (${latexFormulas}), các hóa chất chuẩn danh pháp IUPAC để tôi copy được.`;

  // 3. Conan Anime Poster (1,414:1)
  const promptConan = `Thiết kế 1 ảnh infographic "vụ án khoa học" với những câu hỏi (không có đáp án) được dẫn dắt bởi nhân vật Conan (trong bộ truyện Thám tử lừng danh Conan) với các khung truyện tranh anime có màu, hấp dẫn lôi cuốn, như những tấm poster. tỉ lệ 1,414:1.

• Thông tin bài học:
- Chủ đề: "${tenBaiDay}" - Môn ${monHoc} Lớp ${khoiLop} (Bộ sách ${boSach}).

• Bối cảnh poster & Nhân vật:
- Conan đeo kính định vị lóe sáng, thắt nơ biến đổi giọng nói đang quan sát hiện trường vụ án khoa học và soi kính lúp vào chứng cứ.
- Đội thám tử nhí (Ayumi, Genta, Mitsuhiko) cùng Ran Mori đang theo dõi hiện trường với nét mặt tò mò, hồi hộp.
- Phông nền cinematic poster anime phá án với tông màu huyền bí, sắc nét, có bảng sơ đồ phân tích chứng cứ khoa học.

• Nội dung câu hỏi thử thách phá án (không có đáp án, có ô dòng kẻ trống):
${questions.map((q, i) => `- Manh mối ${i + 1}: ${q}`).join('\n')}

• Yêu cầu kỹ thuật: Tỉ lệ 1,414:1 (Khổ ngang A4 Landscape Poster), phong cách anime Detective Conan sống động, chữ tiếng Việt sắc nét, tuyệt đối KHÔNG có đáp án.`;

  // 4. Cute Students Cartoon (1:1,414)
  const promptHoatHinh = `Thiết kế 1 ảnh infographic phiếu học tập có câu hỏi (không có đáp án), phong cách hoạt hình với nhân vật là các bạn học sinh lớp ${khoiLop}, dễ thương đối thoại nói chuyện qua lại về các nội dung trong bài học "${tenBaiDay}" - Môn ${monHoc} (Bộ sách ${boSach}), bố cục màu sắc, dễ nhìn, sáng tạo. tỉ lệ 1:1,414.

• Bối cảnh & Nhân vật:
- 4 bạn học sinh Việt Nam Lớp ${khoiLop} mặc đồng phục khăn quàng đỏ cực kỳ dễ thương (phong cách hoạt hình Chibi / 3D Pixar vui tươi, thân thiện), ngồi thảo luận học nhóm quanh bàn tròn.
- Các bạn phân công 4 vai trò: Nhóm trưởng, Thư ký ghi chép, Kỹ thuật viên và Báo cáo viên.

• Đối thoại đối đáp vui vẻ dẫn dắt bài tập:
- "Các bạn ơi, cùng tớ giải mã câu đố của bài '${tenBaiDay}' nào!"
- "Tớ đã ghi lại dữ liệu rồi, bài tập này tính như thế nào nhỉ?"
- "Nhìn này, quy luật của bài học rất rõ ràng nhé!"

• Các câu hỏi phiếu học tập (không có đáp án):
${questions.map((q, i) => `${i + 1}. ${q}`).join('\n')}

• Yêu cầu kỹ thuật: Tỉ lệ 1:1,414 (Khổ dọc A4 Portrait), màu sắc pastel tươi vui, ô bố cục sáng tạo, font chữ tròn dễ đọc, có dòng kẻ chấm để học sinh điền bài làm. Tuyệt đối KHÔNG có đáp án.`;

  return {
    tieuDe: `Bộ Prompt AI Thiết Kế Infographic Phiếu Học Tập (${tenBaiDay} - Lớp ${khoiLop})`,
    moTa: 'Tự động tạo câu lệnh AI (Prompt) phục vụ thiết kế phiếu học tập truyện tranh sinh động trên ChatGPT, Midjourney, Canva.',
    promptDoraemon,
    promptVuAnKhoaHoc,
    promptConan,
    promptHoatHinh
  };
}
