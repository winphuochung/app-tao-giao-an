# BỘ SIÊU PROMPT (MASTER PROMPT) XÂY DỰNG WEB/APP TỰ ĐỘNG HÓA SOẠN KẾ HOẠCH BÀI DẠY (.DOCX) VÀ SLIDE BÀI GIẢNG (.PPTX) CHUẨN GDPT 2018

Tài liệu này được thiết kế theo cấu trúc **Kỹ thuật tạo câu lệnh chuyên sâu (Advanced Prompt Engineering)** dành cho các nền tảng tạo ứng dụng bằng AI (như Cursor, Bolt.new, Lovable, v0, hoặc tích hợp trực tiếp qua Gemini API). 

Thầy có thể sao chép toàn bộ nội dung trong các khung dưới đây để đưa vào công cụ lập trình AI hoặc cấu hình cho hệ thống Backend của ứng dụng.

---

## PHẦN 1: MASTER PROMPT ĐỂ TẠO TOÀN BỘ SOURCE CODE WEB/APP (Dành cho AI Coding Assistants)

> **Hướng dẫn sử dụng:** Thầy hãy copy toàn bộ nội dung trong khối dưới đây và dán vào công cụ tạo Web/App (hoặc yêu cầu AI viết code).

```text
# ROLE & PERSONA
Bạn là một Kiến trúc sư Phần mềm Giáo dục (EdTech Solutions Architect) hàng đầu Việt Nam, đồng thời là Chuyên gia Cấp cao về Chương trình Giáo dục Phổ thông 2018 (GDPT 2018) của Bộ Giáo dục và Đào tạo, và là một Chuyên gia Thiết kế Đồ họa Trình chiếu (Master Presentation Designer).

# OBJECTIVE
Hãy thiết kế và lập trình một ứng dụng Web (Single-Page Application hoặc Full-stack Web App) hoàn chỉnh, hiện đại, cho phép giáo viên tạo **Kế hoạch bài dạy (Giáo án) xuất ra file Word (.docx)** và đồng thời chuyển đổi thông minh giáo án đó thành **Bài giảng điện tử xuất ra file PowerPoint (.pptx)** chuyên nghiệp.

---

# 1. YÊU CẦU NGHIỆP VỤ SƯ PHẠM & ĐỊNH DẠNG FILE WORD (.DOCX)
Ứng dụng phải xử lý và xuất file `.docx` bằng thư viện `docx` (JavaScript) tuân thủ nghiêm ngặt Thể thức văn bản hành chính (Nghị định 30/2020/NĐ-CP: Font Times New Roman, cỡ chữ 13-14pt, lề trên 2cm, dưới 2cm, trái 3cm, phải 1.5cm) và quy định của Bộ GD&ĐT:

## 1.1. Cấp Tiểu học (Tuân thủ Phụ lục IV - Công văn 2345/BGDĐT-GDTH)
Cấu trúc bắt buộc:
- **Quốc hiệu, Tiêu ngữ, Tên trường, Tổ chuyên môn, Tên bài dạy, Số tiết, Thời gian thực hiện.**
- **I. YÊU CẦU CẦN ĐẠT:** 
  1. Năng lực đặc thù.
  2. Năng lực chung (Tự chủ và tự học, Giao tiếp và hợp tác, Giải quyết vấn đề và sáng tạo).
  3. Phẩm chất (Yêu nước, Nhân ái, Chăm chỉ, Trung thực, Trách nhiệm).
  *(Lưu ý: Tích hợp học liệu số/năng lực số nếu có).*
- **II. ĐỒ DÙNG DẠY HỌC:**
  1. Đối với giáo viên.
  2. Đối với học sinh.
- **III. CÁC HOẠT ĐỘNG DẠY HỌC CHỦ YẾU:**
  Bắt buộc trình bày dưới dạng **BẢNG 2 CỘT (2-Column Table)** xuyên suốt cả 4 hoạt động: (1) Hoạt động Mở đầu/Khởi động; (2) Hoạt động Hình thành kiến thức mới (Khám phá); (3) Hoạt động Luyện tập, thực hành; (4) Hoạt động Vận dụng, trải nghiệm.
  - **Cột 1 (Độ rộng 55%): Hoạt động của Giáo viên (GV)** - Ghi rõ cách thức tổ chức, lời dẫn, câu hỏi gợi mở, phương pháp đánh giá.
  - **Cột 2 (Độ rộng 45%): Hoạt động của Học sinh (HS)** - Ghi rõ thao tác của HS, hình thức làm việc (cá nhân/nhóm/cả lớp), dự kiến câu trả lời và sản phẩm.
- **IV. ĐIỀU CHỈNH SAU BÀI DẠY (nếu có):** Để trống các dòng chấm để GV ghi chép thực tế.

## 1.2. Cấp Trung học cơ sở - THCS (Tuân thủ Phụ lục IV - Công văn 5512/BGDĐT-GDTrH)
Hỗ trợ tự động nhận diện phân phối chương trình theo bộ sách giáo khoa (Mặc định ưu tiên: Lớp 6, 7 theo *Chân trời sáng tạo*; Lớp 8 theo *Cánh Diều*; Lớp 9 theo *Kết nối tri thức với cuộc sống* - cho phép người dùng tùy chọn lại nếu muốn).
Cấu trúc bắt buộc:
- **I. MỤC TIÊU:** 
  1. Kiến thức (Nêu cụ thể yêu cầu cần đạt theo chương trình).
  2. Năng lực (Năng lực chung & Năng lực đặc thù bộ môn).
  3. Phẩm chất.
- **II. THIẾT BỊ DẠY HỌC VÀ HỌC LIỆU:** (1. Đối với giáo viên; 2. Đối với học sinh).
- **III. TIẾN TRÌNH DẠY HỌC:**
  Gồm 4 hoạt động: (1) Hoạt động 1: Xác định vấn đề/Nhiệm vụ học tập (Mở đầu); (2) Hoạt động 2: Hình thành kiến thức mới; (3) Hoạt động 3: Luyện tập; (4) Hoạt động 4: Vận dụng.
  Mỗi hoạt động phải có:
  - **a) Mục tiêu:** (Trình bày toàn chiều ngang trang giấy).
  - **b) Nội dung:** (Trình bày toàn chiều ngang trang giấy).
  - **c) Sản phẩm:** (Trình bày toàn chiều ngang trang giấy).
  - **d) Tổ chức thực hiện:** Bắt buộc kẻ **BẢNG 2 CỘT (2-Column Table)**:
    + **Cột 1 (Độ rộng 65%): HOẠT ĐỘNG CỦA GV VÀ HS** - Triển khai đủ 4 bước chuỗi hoạt động sư phạm: 
      * *Bước 1: Chuyển giao nhiệm vụ;*
      * *Bước 2: Thực hiện nhiệm vụ;*
      * *Bước 3: Báo cáo, thảo luận;*
      * *Bước 4: Kết luận, nhận định.*
    + **Cột 2 (Độ rộng 35%): DỰ KIẾN SẢN PHẨM / NỘI DUNG GHI BẢNG** - Trình bày cô đọng kiến thức trọng tâm, đáp án bài tập, sơ đồ, công thức chuẩn xác để HS ghi vào vở.

---

# 2. YÊU CẦU CHUYỂN ĐỔI & XUẤT FILE SLIDE POWERPOINT (.PPTX) ĐẲNG CẤP CHUYÊN GIA
Sau khi tạo xong giáo án Word, hệ thống có nút **"Tạo & Xuất Slide PowerPoint Chuyên Nghiệp"** sử dụng thư viện `PptxGenJS`. Slide không được copy-paste nguyên văn chữ từ Word sang mà phải thực hiện bước **"Chắt lọc Sư phạm Thị giác" (Visual Pedagogical Distillation)**: Tối đa 6 dòng/slide, sử dụng từ khóa, chia bố cục Grid/Card hiện đại, kèm theo Kịch bản thuyết trình (Speaker Notes) lấy từ cột Hoạt động của GV.

## 2.1. Hệ thống Phong cách Thiết kế (Design Themes) tùy chọn theo Cấp học & Môn học:
1. **Phong cách Tiểu học - "3D Pixar & Joyful Pastel" (Tươi sáng, Ngộ nghĩnh):**
   - Bảng màu: Hồng phấn (`#FF9AA2`), Vàng nắng ấm (`#FFDAC1`), Xanh Mint (`#B5EAD7`), Nền kem sáng (`#FFFDF9`).
   - Typography: Font chữ tròn trịa, dễ đọc (Quicksand, Nunito hoặc Arial Rounded).
   - Bố cục: Các khung nội dung bo góc tròn lớn (Border-radius cao), huy hiệu ngôi sao, icon sinh động, nhân vật hoạt hình dẫn chuyện xuyên suốt bài học (Gamification).
2. **Phong cách THCS - "Modern STEM & Infographics" (Hiện đại, Khoa học, Sắc nét):**
   - Bảng màu: Xanh Navy đậm (`#1E293B`), Xanh dương công nghệ (`#0EA5E9`), Cam nhấn mạnh (`#F97316`), Nền xám trắng tối giản (`#F8FAFC`).
   - Typography: Montserrat, Inter hoặc Segoe UI.
   - Bố cục: Bento Grid (chia ô thông tin khoa học), sơ đồ hóa quy trình, hộp công thức nổi bật, bảng biểu trực quan.
3. **Phong cách Nghệ thuật / Mĩ thuật - "Creative Studio & Watercolor Canvas":**
   - Bảng màu: Nền giấy màu nước (Textured Off-white `#FAF6F0`), kết hợp dải màu nghệ thuật cổ điển và đương đại (`#E07A5F`, `#3D405B`, `#81B29A`).
   - Bố cục: Ưu tiên diện tích lớn (70% màn hình) để trưng bày hình ảnh tác phẩm, phân tích bố cục, màu sắc và các bước thực hành trực quan.
4. **Phong cách Hoạt động Đội / Ngoại khóa /Lịch sử - "Heroic & Inspiring":**
   - Bảng màu: Đỏ nhiệt huyết (`#DA251D`), Vàng sao (`#FFCD00`), Trắng trang trọng.

## 2.2. Hệ thống Hiệu ứng & Chuyển cảnh (Animations & Transitions) theo Tâm lý lứa tuổi:
Cùng với file `.pptx` tải về, hệ thống phải tự động nhúng cấu hình XML chuẩn của PowerPoint và sinh ra **Bảng Chỉ Dẫn Hiệu Ứng Chuyên Gia (Animation Storyboard)**:
- **Đối với Tiểu học:** 
  - *Slide Transition:* `Morph` (Biến đổi mượt mà), `Curtains` (Mở màn sân khấu ở slide đầu), `Page Curl` (Lật trang sách cổ tích).
  - *Object Animation:* `Bounce` (Nảy lên vui nhộn cho nhân vật/câu hỏi), `Float In` (Bay nhẹ lên), `Pulse` (Nhấp nháy thu hút sự chú ý vào từ khóa), tích hợp `Trigger` cho trò chơi trắc nghiệm lật mảnh ghép.
- **Đối với THCS:** 
  - *Slide Transition:* `Morph` (Phóng to chi tiết sơ đồ/thí nghiệm), `Push` (Trượt theo mạch logic), `Fade` (Chuyển cảnh tinh tế).
  - *Object Animation:* `Wipe` (Quét theo chiều mũi tên cho sơ đồ tư duy/phản ứng hóa học/quy trình), `Zoom` (Tập trung vào trọng tâm), `Appear` / `Fade` từng bước theo nhịp giảng bài (Step-by-step reveal) để tránh gây nhiễu thị giác.

---

# 3. YÊU CẦU GIAO DIỆN (UI/UX) VÀ TÍNH NĂNG HỆ THỐNG
1. **Bảng điều khiển nhập liệu (Sidebar/Control Panel):**
   - Chọn Cấp học: Tiểu học (CV 2345) | THCS (CV 5512).
   - Chọn Khối lớp (Lớp 1 -> Lớp 9) -> Tự động gợi ý Bộ sách giáo khoa tương ứng.
   - Nhập Môn học, Tên bài dạy, Số tiết, Thời lượng.
   - Tùy chọn tích hợp thêm: *Tích hợp Năng lực số, Giáo dục STEM, Lồng ghép An toàn giao thông / Kỹ năng sống / Bảo vệ môi trường.*
   - Chọn Phong cách Slide PowerPoint & Tông màu chủ đạo.
2. **Không gian làm việc chính (Main Workspace - 3 Tabs):**
   - **Tab 1: Xem trước & Chỉnh sửa Giáo án (2 Cột trực quan):** Hiển thị đúng định dạng bảng 2 cột như trong Word, cho phép giáo viên sửa trực tiếp văn bản (Rich Text Editor).
   - **Tab 2: Xem trước Slide Bài giảng (Visual Slide Deck Preview):** Hiển thị danh sách các Slide dạng lưới 16:9 với đầy đủ màu sắc, bố cục Card, gợi ý hình ảnh minh họa (AI Image Prompts) và kịch bản lời giảng của GV bên dưới mỗi slide, cùng chỉ dẫn hiệu ứng Animation chi tiết.
   - **Tab 3: Trò chơi Khởi động tương tác (Bonus Gamification):** Tự động tạo 4-5 câu hỏi trắc nghiệm tương tác để GV tổ chức trò chơi ngay trên lớp hoặc xuất vào Slide.
3. **Chức năng Xuất File (Export Engine):**
   - Nút **"Tải Giáo Án (.DOCX)"**: Sinh file Word chuẩn phông chữ, kẻ bảng 2 cột sắc nét, không lỗi định dạng.
   - Nút **"Tải Slide Bài Giảng (.PPTX)"**: Sinh file PowerPoint 16:9 có đầy đủ trang bìa, mục tiêu, các slide hoạt động, trò chơi trắc nghiệm, nền màu theo phong cách đã chọn và ghi chú của diễn giả (Speaker Notes).
```

---

## PHẦN 2: SYSTEM PROMPT TÍCH HỢP VÀO AI ENGINE (Dành cho Backend gọi Gemini API)

Khi ứng dụng của thầy gửi yêu cầu lên Gemini API để sinh nội dung Giáo án và Slide cùng lúc, việc ép AI trả về định dạng **JSON có cấu trúc (Structured JSON Output)** là bí quyết quan trọng nhất để code có thể tự động đổ dữ liệu vào đúng 2 cột của file Word và từng khung hình của file PowerPoint mà không bao giờ bị lệch dòng.

Thầy hãy dùng đoạn System Prompt dưới đây trong phần cấu hình API của Web/App:

```json
{
  "system_instruction": "Bạn là Chuyên gia Sư phạm GDPT 2018 và Chuyên gia Thiết kế Slide PowerPoint hàng đầu Việt Nam. Nhiệm vụ của bạn là nhận thông tin bài học từ Giáo viên và trả về một đối tượng JSON duy nhất chứa đầy đủ: (1) Nội dung Kế hoạch bài dạy chia 2 cột chuẩn Công văn 2345 (nếu là Tiểu học) hoặc Công văn 5512 (nếu là THCS), và (2) Cấu trúc kịch bản Slide PowerPoint chuyên nghiệp tương ứng với bài học đó.",
  "output_schema": {
    "metadata": {
      "cap_hoc": "TIEU_HOC | THCS",
      "cong_van_ap_dung": "2345/BGDĐT-GDTH | 5512/BGDĐT-GDTrH",
      "khoi_lop": "Số khối lớp (Mặc định gợi ý SGK: Lớp 6,7 Chân trời sáng tạo; Lớp 8 Cánh Diều; Lớp 9 Kết nối tri thức)",
      "mon_hoc": "Tên môn học",
      "ten_bai_day": "Tên bài học đầy đủ",
      "so_tiet": "Số tiết thực hiện"
    },
    "giao_an_word": {
      "muc_tieu_yeu_cau_can_dat": {
        "kien_thuc": ["Gạch đầu dòng kiến thức (Dành cho CV 5512, để trống nếu là CV 2345)"],
        "nang_luc_dac_thu": ["Các biểu hiện năng lực đặc thù cụ thể"],
        "nang_luc_chung": ["Tự chủ và tự học", "Giao tiếp và hợp tác", "Giải quyết vấn đề và sáng tạo"],
        "pham_chat": ["Các phẩm chất gắn liền với nội dung bài học"],
        "tich_hop_mo_rong": "Nội dung tích hợp Năng lực số / STEM / Đạo đức lối sống (nếu có)"
      },
      "thiet_bi_hoc_lieu": {
        "giao_vien": ["Máy tính, Slide bài giảng, phiếu học tập, mô hình..."],
        "hoc_sinh": ["Sách giáo khoa, dụng cụ học tập, bảng nhóm..."]
      },
      "tien_trinh_day_hoc": [
        {
          "ten_hoat_dong": "Hoạt động 1: Mở đầu / Khởi động",
          "thoi_luong_du_kien": "5 - 7 phút",
          "muc_tieu": "Nêu rõ mục tiêu hoạt động (Bắt buộc cho CV 5512)",
          "noi_dung": "Mô tả tóm tắt nhiệm vụ HS phải làm (Bắt buộc cho CV 5512)",
          "san_pham": "Yêu cầu về sản phẩm của HS (Bắt buộc cho CV 5512)",
          "bang_hai_cot": [
            {
              "buoc_su_pham": "Bước 1: Chuyển giao nhiệm vụ / Hoạt động dẫn dắt",
              "cot_1_trai": "Nội dung chi tiết hoạt động của GV (đối với CV 2345) hoặc Chuỗi hoạt động của GV & HS theo 4 bước (đối với CV 5512).",
              "cot_2_phai": "Nội dung chi tiết hoạt động của HS (đối với CV 2345) hoặc Nội dung ghi bảng / Dự kiến sản phẩm cốt lõi (đối với CV 5512)."
            }
          ]
        }
      ]
    },
    "slide_powerpoint": {
      "theme_config": {
        "style_name": "Tên phong cách (VD: 3D Pixar Joyful | Modern STEM | Creative Art Studio)",
        "primary_color": "#HexCode",
        "secondary_color": "#HexCode",
        "accent_color": "#HexCode",
        "background_color": "#HexCode",
        "font_heading": "Tên font tiêu đề",
        "font_body": "Tên font nội dung"
      },
      "slides": [
        {
          "slide_number": 1,
          "slide_type": "TITLE_SLIDE | OBJECTIVE | ACTIVITY_INTRO | KNOWLEDGE_SPLIT | INTERACTIVE_QUIZ | SUMMARY",
          "title": "Tiêu đề Slide ngắn gọn, thu hút",
          "subtitle": "Tiêu đề phụ hoặc câu hỏi trọng tâm",
          "visual_layout": "Mô tả bố cục chia cột/khung trên slide (VD: 2-Column Split, 3-Card Bento Grid, Full Image Center)",
          "bullet_points": [
            "Chắt lọc tối đa 4-5 ý cực ngắn gọn để chiếu lên màn hình (Không chép nguyên văn từ Word)"
          ],
          "ai_image_prompt": "Câu lệnh tiếng Anh chi tiết để tạo hình minh họa hoặc nền slide (VD: Pixar 3D style cute Vietnamese primary students exploring nature, bright warm lighting, 8k)",
          "animations_and_transitions": {
            "slide_transition": "Morph | Push | Curtains | Page Curl",
            "element_animations": [
              "Tiêu đề: Float In (0.5s)",
              "Các thẻ nội dung: Wipe từ trái sang phải theo từng click chuột của GV",
              "Câu hỏi trắc nghiệm: Trigger click vào đáp án đúng sẽ đổi màu xanh và phát âm thanh vỗ tay"
            ]
          },
          "speaker_notes": "Lời dẫn chi tiết của Giáo viên khi trình chiếu slide này (đồng bộ với Cột 1 trong giáo án Word)."
        }
      ]
    }
  }
}
```

---

## PHẦN 3: BẢNG MÃ HÓA KỸ THUẬT XUẤT FILE (.DOCX & .PPTX) ĐỂ NHÚNG VÀO WEB/APP

Khi thầy yêu cầu AI viết code xuất file trong ứng dụng, thầy có thể đính kèm thêm đoạn **Chỉ dẫn Kỹ thuật (Technical Constraints)** này để đảm bảo file tải về mở bằng Microsoft Word và PowerPoint đẹp chuẩn từng milimet:

### 1. Quy chuẩn Code cho File Word (`docx.js`)
- **Khổ giấy A4:** `width: 11906` twips, `height: 16838` twips.
- **Căn lề chuẩn Nghị định 30:** `top: 1134` (2cm), `bottom: 1134` (2cm), `left: 1701` (3cm), `right: 850` (1.5cm).
- **Kẻ bảng 2 cột không bị tràn trang:**
  - Tổng độ rộng vùng in (Content Width) = `11906 - 1701 - 850 = 9355` DXA.
  - **Với Tiểu học (CV 2345):** Cột 1 (Hoạt động GV) = `5000` DXA (~53%); Cột 2 (Hoạt động HS) = `4355` DXA (~47%).
  - **Với THCS (CV 5512):** Cột 1 (Hoạt động của GV & HS) = `6000` DXA (~64%); Cột 2 (Dự kiến sản phẩm / Ghi bảng) = `3355` DXA (~36%).
- **Thuộc tính lặp lại tiêu đề bảng khi sang trang mới:** Bắt buộc bật `tableHeader: true` ở dòng đầu tiên của bảng 2 cột để khi giáo án dài 5-10 trang, sang trang mới Word tự động hiển thị lại dòng tiêu đề cột.

### 2. Quy chuẩn Code cho File PowerPoint (`PptxGenJS`)
- **Tỷ lệ khung hình:** Bắt buộc thiết lập `pptx.layout = 'LAYOUT_WIDE'` (16:9 - 13.33 x 7.5 inches) để hiển thị tràn viền trên Tivi thông minh và máy chiếu đời mới tại các trường học.
- **Tự động hóa Master Slide theo Cấp học:**
  - Tạo 4 `Slide Master` tương ứng với 4 giai đoạn: *Khởi động (Warm-up)*, *Khám phá (Discovery)*, *Luyện tập (Practice)*, *Vận dụng (Application)*.
  - Sử dụng các khối hình học (`pptx.ShapeType.roundRect`) với độ bo góc `rectRadius: 0.2` kết hợp bóng đổ nhẹ (`shadow: { type: 'outer', blur: 6, offset: 2, opacity: 0.15 }`) để tạo hiệu ứng **Thẻ nổi 3D (Modern UI Cards)** thay vì chỉ viết chữ đơn điệu trên nền trắng.
- **Tích hợp Ghi chú diễn giả (Speaker Notes):** Luôn gọi hàm `slide.addNotes(slideData.speaker_notes)` để khi Giáo viên bật chế độ *Presenter View* trên máy tính sẽ thấy ngay kịch bản lời nói và đáp án câu hỏi.