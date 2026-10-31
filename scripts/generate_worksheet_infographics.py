import os
import sys
from PIL import Image, ImageDraw, ImageFont

os.makedirs('public/infographics', exist_ok=True)

def get_font(size, bold=False):
    f_path = 'C:/Windows/Fonts/timesbd.ttf' if bold else 'C:/Windows/Fonts/times.ttf'
    if not os.path.exists(f_path):
        f_path = 'C:/Windows/Fonts/arialbd.ttf' if bold else 'C:/Windows/Fonts/arial.ttf'
    return ImageFont.truetype(f_path, size)

def wrap_text(text, font, max_width, draw):
    lines = []
    words = text.split(' ')
    curr_line = ''
    for w in words:
        test_line = f"{curr_line} {w}".strip()
        bbox = draw.textbbox((0, 0), test_line, font=font)
        if bbox[2] - bbox[0] <= max_width:
            curr_line = test_line
        else:
            if curr_line:
                lines.append(curr_line)
            curr_line = w
    if curr_line:
        lines.append(curr_line)
    return lines

# =========================================================================
# 1. DORAEMON INFOGRAPHIC WORKSHEET (A4 DỌC: 1240 x 1754 px)
# =========================================================================
def generate_doraemon_worksheet():
    W, H = 1240, 1754
    img = Image.new('RGB', (W, H), color='#f0f9ff') # Soft sky blue
    draw = ImageDraw.Draw(img)
    
    # Outer double border
    draw.rectangle([20, 20, W - 20, H - 20], fill='#ffffff', outline='#2563eb', width=6)
    draw.rectangle([30, 30, W - 30, H - 30], outline='#fbbf24', width=3)
    
    # Header Banner
    draw.rounded_rectangle([45, 45, W - 45, 185], radius=20, fill='#1d4ed8', outline='#fbbf24', width=3)
    
    # Header text
    f_badge = get_font(20, bold=True)
    draw.text((70, 60), "PHIẾU HỌC TẬP TRUYỆN TRANH DORAEMON • KHỔ A4 (1:1,414)", fill='#fef08a', font=f_badge)
    
    f_title = get_font(34, bold=True)
    draw.text((70, 92), "BÀI 8: TỐC ĐỘ CHUYỂN ĐỘNG - KHTN 7", fill='#ffffff', font=f_title)
    
    f_sub = get_font(20, bold=False)
    draw.text((70, 142), "Bộ sách: Kết nối tri thức với cuộc sống • Lớp 7 • Thời gian làm bài: 8 - 10 phút", fill='#bfdbfe', font=f_sub)
    draw.text((W - 380, 142), "Nhóm: ........ Lớp: 7......", fill='#fef08a', font=get_font(20, bold=True))
    
    # 4 Comic dialogue panels (2x2 grid)
    # Grid area: y = 205 to y = 735 (height = 530)
    panels = [
        {
            "speaker1": "Thầy giáo căn dặn:",
            "c1": "#b45309",
            "bg1": "#fffbeb",
            "border1": "#f59e0b",
            "text1": "Hôm nay cả lớp cùng phân tích Bảng 8.1 SGK về cuộc thi chạy cự li 60 m của bạn A, B, C để tìm ra ai chạy nhanh nhất nhé!",
            "speaker2": "Nobita bối rối:",
            "c2": "#dc2626",
            "bg2": "#fef2f2",
            "border2": "#ef4444",
            "text2": "Oa, bạn A chạy 10s, bạn B chạy 12s, bạn C chạy 9,6s... Nhìn số liệu này tớ chưa biết bạn nào chạy nhanh nhất Doraemon ơi!"
        },
        {
            "speaker1": "Doraemon mách nước:",
            "c1": "#1d4ed8",
            "bg1": "#eff6ff",
            "border1": "#3b82f6",
            "text1": "Nobita bình tĩnh! Cùng chạy quãng đường s = 60 m, ai mất ít thời gian hơn sẽ chạy nhanh hơn! Công thức tốc độ là v = s / t!",
            "speaker2": "Dekisugi phân tích:",
            "c2": "#047857",
            "bg2": "#ecfdf5",
            "border2": "#10b981",
            "text2": "Đúng vậy! Ta tính quãng đường chạy trong 1 giây: Bạn C chạy được 6,25 m/s, lớn nhất nên xếp Hạng 1 (Nhanh nhất)!"
        },
        {
            "speaker1": "Shizuka cẩn thận nhắc nhở:",
            "c1": "#be185d",
            "bg1": "#fdf2f8",
            "border1": "#ec4899",
            "text1": "Các bạn nhớ đơn vị đo hợp pháp của tốc độ trong hệ SI là mét trên giây (m/s) và kilômét trên giờ (km/h) nhé! Quy đổi: 1 m/s = 3,6 km/h.",
            "speaker2": "Jaian & Suneo thi đua:",
            "c2": "#c2410c",
            "bg2": "#fff7ed",
            "border2": "#f97316",
            "text2": "Nhóm tớ đã bấm máy tính xong câu 54 km/h đổi sang m/s rồi nhé! Chỉ cần lấy 54 chia cho 3,6 là ra kết quả 15 m/s ngay!"
        },
        {
            "speaker1": "Thám tử Doraemon & Camera:",
            "c1": "#4338ca",
            "bg1": "#eef2ff",
            "border1": "#6366f1",
            "text1": "Quan sát Hình 8.3 SGK: Thiết bị bắn tốc độ CSGT phát hiện ô tô chạy 68 km/h trên đoạn đường có biển báo giới hạn tốc độ 50 km/h!",
            "speaker2": "Cả nhóm kết luận:",
            "c2": "#0f766e",
            "bg2": "#f0fdfa",
            "border2": "#14b8a6",
            "text2": "Xe ô tô này đã vượt quá tốc độ cho phép 18 km/h, vi phạm luật giao thông đường bộ và rất dễ gây tai nạn nguy hiểm!"
        }
    ]
    
    col_w = (W - 90 - 20) // 2
    row_h = 245
    
    coords = [
        (45, 205),
        (45 + col_w + 20, 205),
        (45, 470),
        (45 + col_w + 20, 470)
    ]
    
    for idx, p in enumerate(panels):
        x, y = coords[idx]
        draw.rounded_rectangle([x, y, x + col_w, y + row_h], radius=15, fill='#ffffff', outline='#0f172a', width=2)
        
        # Dialogue 1
        draw.rounded_rectangle([x + 10, y + 10, x + col_w - 10, y + 115], radius=10, fill=p["bg1"], outline=p["border1"], width=2)
        draw.text((x + 18, y + 15), f"• {p['speaker1']}", fill=p["c1"], font=get_font(18, bold=True))
        lines1 = wrap_text(p["text1"], get_font(16, bold=False), col_w - 40, draw)
        cur_y = y + 42
        for l in lines1[:3]:
            draw.text((x + 22, cur_y), l, fill='#1e293b', font=get_font(16))
            cur_y += 22
            
        # Dialogue 2
        draw.rounded_rectangle([x + 10, y + 125, x + col_w - 10, y + row_h - 10], radius=10, fill=p["bg2"], outline=p["border2"], width=2)
        draw.text((x + 18, y + 130), f"• {p['speaker2']}", fill=p["c2"], font=get_font(18, bold=True))
        lines2 = wrap_text(p["text2"], get_font(16, bold=False), col_w - 40, draw)
        cur_y = y + 155
        for l in lines2[:3]:
            draw.text((x + 22, cur_y), l, fill='#1e293b', font=get_font(16))
            cur_y += 22

    # Section 2: Questions Box (A4 form with blank dotted lines)
    # y = 735 to y = 1490
    q_box_y = 730
    draw.rounded_rectangle([45, q_box_y, W - 45, 1500], radius=16, fill='#ffffff', outline='#1e3a8a', width=3)
    
    # Section Header
    draw.rounded_rectangle([45, q_box_y, W - 45, q_box_y + 45], radius=14, fill='#1e3a8a')
    draw.text((65, q_box_y + 10), "PHẦN CÂU HỎI NHIỆM VỤ NHÓM (HỌC SINH TỰ LÀM VÀO DÒNG CHẤM - KHÔNG CÓ ĐÁP ÁN SẴN):", fill='#ffffff', font=get_font(19, bold=True))
    
    questions = [
        "Nhiệm vụ 1: Hoàn thành Bảng 8.1 SGK (tính quãng đường chạy trong 1 s của bạn A, B, C). Bạn nào chạy nhanh nhất và vì sao?",
        "Nhiệm vụ 2: Viết công thức tính tốc độ v = s/t. Suy ra công thức tính quãng đường s và thời gian t? Đổi 54 km/h sang đơn vị m/s?",
        "Nhiệm vụ 3: Quan sát Hình 8.2 & 8.3 SGK: Thiết bị bắn tốc độ phát hiện ô tô chạy 68 km/h trên đoạn đường có biển báo 50 km/h. Xe này có vi phạm không? Nêu biện pháp phòng ngừa tai nạn.",
        "Nhiệm vụ 4: Một đoàn tàu xuất phát từ ga Hà Nội lúc 8h00 và đến ga Phủ Lý lúc 9h15. Biết quãng đường dài 60 km, hãy tính tốc độ của đoàn tàu (theo đơn vị km/h và m/s)?"
    ]
    
    q_start_y = q_box_y + 60
    for idx, q_text in enumerate(questions):
        draw.rounded_rectangle([60, q_start_y - 2, 92, q_start_y + 26], radius=6, fill='#2563eb')
        draw.text((68, q_start_y + 1), str(idx + 1), fill='#ffffff', font=get_font(18, bold=True))
        
        q_lines = wrap_text(q_text, get_font(19, bold=True), W - 180, draw)
        curr_qy = q_start_y
        for ql in q_lines:
            draw.text((105, curr_qy), ql, fill='#0f172a', font=get_font(19, bold=True))
            curr_qy += 26
            
        # Dotted lines
        draw.text((105, curr_qy + 4), "Bài làm: ...................................................................................................................................................................................................", fill='#94a3b8', font=get_font(17))
        draw.text((105, curr_qy + 32), ".........................................................................................................................................................................................................................", fill='#94a3b8', font=get_font(17))
        draw.text((105, curr_qy + 60), ".........................................................................................................................................................................................................................", fill='#94a3b8', font=get_font(17))
        
        q_start_y = curr_qy + 95

    # Section 3: 4-Ink Color & Roles Declaration
    # y = 1515 to 1715
    f_box_y = 1515
    draw.rounded_rectangle([45, f_box_y, W - 45, 1715], radius=15, fill='#f8fafc', outline='#334155', width=2)
    draw.text((65, f_box_y + 12), "BẢNG KHAI BÁO THÀNH VIÊN THEO 4 VAI TRÒ & 4 MÀU MỰC ĐÓNG GÓP (CHỐNG THỤ ĐỘNG - Ỷ LẠI):", fill='#0f172a', font=get_font(18, bold=True))
    
    roles = [
        {"r": "1. Nhóm trưởng", "ink": "Bút Mực Đỏ", "duty": "Điều phối, kiểm soát tiến độ", "c": "#b91c1c", "bg": "#fef2f2", "bd": "#f87171"},
        {"r": "2. Thư ký", "ink": "Bút Mực Xanh", "duty": "Ghi chép câu trả lời vào phiếu", "c": "#1d4ed8", "bg": "#eff6ff", "bd": "#60a5fa"},
        {"r": "3. Kỹ thuật viên", "ink": "Bút Mực Xanh Lá", "duty": "Kiểm tra tính toán, bấm máy tính", "c": "#047857", "bg": "#ecfdf5", "bd": "#34d399"},
        {"r": "4. Báo cáo viên", "ink": "Bút Mực Tím/Đen", "duty": "Thuyết trình & trả lời phản biện", "c": "#6b21a8", "bg": "#faf5ff", "bd": "#c084fc"}
    ]
    
    rb_w = (W - 90 - 30) // 4
    for idx, rl in enumerate(roles):
        rx = 60 + idx * (rb_w + 10)
        draw.rounded_rectangle([rx, f_box_y + 45, rx + rb_w, f_box_y + 175], radius=10, fill=rl["bg"], outline=rl["bd"], width=2)
        draw.text((rx + 10, f_box_y + 55), rl["r"], fill=rl["c"], font=get_font(17, bold=True))
        draw.text((rx + 10, f_box_y + 80), f"Màu: {rl['ink']}", fill=rl["c"], font=get_font(15, bold=True))
        draw.text((rx + 10, f_box_y + 105), rl["duty"][:26], fill='#475569', font=get_font(13))
        draw.text((rx + 10, f_box_y + 125), rl["duty"][26:], fill='#475569', font=get_font(13))
        draw.text((rx + 10, f_box_y + 150), "Ký tên: ....................", fill='#64748b', font=get_font(13))
        
    out_path = 'public/infographics/phieu-doraemon-khtn7-bai8-toc-do.jpg'
    img.save(out_path, quality=95)
    print(f"Generated: {out_path} ({W}x{H})")

# =========================================================================
# 2. CONAN POSTER PHÁ ÁN (A4 NGANG: 1754 x 1240 px)
# =========================================================================
def generate_conan_poster():
    W, H = 1754, 1240
    img = Image.new('RGB', (W, H), color='#090d16') # Deep cinematic dark blue
    draw = ImageDraw.Draw(img)
    
    # Outer cinematic frame
    draw.rectangle([20, 20, W - 20, H - 20], outline='#dc2626', width=5)
    draw.rectangle([28, 28, W - 28, H - 28], outline='#991b1b', width=2)
    
    # Header Banner
    draw.rounded_rectangle([40, 40, W - 40, 160], radius=18, fill='#1e1b4b', outline='#dc2626', width=3)
    draw.text((65, 55), "HỒ SƠ VỤ ÁN CONAN: TỈ LỆ 1,414:1 (A4 NGANG CHUẨN RẠP PHIM)", fill='#f87171', font=get_font(19, bold=True))
    draw.text((65, 88), "VỤ ÁN KHOA HỌC: BÍ MẬT TỐC ĐỘ CHUYỂN ĐỘNG & BẪY BẮN TỐC ĐỘ", fill='#ffffff', font=get_font(32, bold=True))
    draw.text((65, 130), "Môn: Khoa học tự nhiên 7 (Kết nối tri thức) • Thám tử phụ trách: Đội Thám tử nhí lớp 1B & Conan", fill='#93c5fd', font=get_font(18))
    draw.text((W - 380, 130), "Nhóm: ........ Lớp: 7......", fill='#fbbf24', font=get_font(18, bold=True))
    
    # 3 Character Investigation Cards
    card_y = 180
    card_h = 290
    card_w = (W - 80 - 40) // 3
    
    char_cards = [
        {
            "speaker": "Edogawa Conan (Manh mối hiện trường):",
            "c": "#f87171",
            "border": "#dc2626",
            "bg": "#18181b",
            "text": "Chỉ có một chân tướng duy nhất! Kẻ điều khiển xe nghĩ rằng bóng đêm che giấu được tốc độ, nhưng máy bắn tốc độ bằng súng radar và camera ghi nhận thời gian t = 1,5 s trên s = 30 m. Ta tính được tốc độ tức thời: v = s / t = 20 m/s = 72 km/h!",
            "badge": "🎯 Thám tử phân tích"
        },
        {
            "speaker": "Ran Mori & Đội Thám Tử Nhí:",
            "c": "#60a5fa",
            "border": "#2563eb",
            "bg": "#18181b",
            "text": "Ayumi, Genta và Mitsuhiko đã đối chiếu Bảng 8.1 SGK: Trong cùng một quãng đường chạy, người nào mất ít thời gian hơn sẽ chạy nhanh hơn. Quãng đường đi được trong 1 giây chính là đại lượng biểu thị mức độ nhanh chậm của chuyển động!",
            "badge": "👥 Bằng chứng Bảng 8.1 SGK"
        },
        {
            "speaker": "Tiến sĩ Agasa & Bảo bối ATGT:",
            "c": "#fbbf24",
            "border": "#d97706",
            "bg": "#18181b",
            "text": "Thiết bị bắn tốc độ CSGT kết hợp camera kỹ thuật số độ nét cao chụp lại biển số xe vi phạm. Trên đoạn đường có biển báo 50 km/h, xe chạy 72 km/h đã vượt tốc độ 22 km/h! Quy định tốc độ sinh ra là để bảo vệ tính mạng con người!",
            "badge": "⚡ Camera & Thiết bị đo"
        }
    ]
    
    for idx, c in enumerate(char_cards):
        cx = 40 + idx * (card_w + 20)
        draw.rounded_rectangle([cx, card_y, cx + card_w, card_y + card_h], radius=15, fill=c["bg"], outline=c["border"], width=2)
        
        # Badge
        draw.rounded_rectangle([cx + 15, card_y + 15, cx + card_w - 15, card_y + 50], radius=8, fill='#27272a', outline=c["border"], width=1)
        draw.text((cx + 25, card_y + 22), c["badge"], fill=c["c"], font=get_font(18, bold=True))
        
        draw.text((cx + 18, card_y + 65), c["speaker"], fill='#ffffff', font=get_font(17, bold=True))
        lines = wrap_text(c["text"], get_font(16), card_w - 35, draw)
        cy = card_y + 95
        for l in lines[:7]:
            draw.text((cx + 18, cy), l, fill='#cbd5e1', font=get_font(16))
            cy += 24

    # Questions section (4 Clues to crack the case)
    # y = 490 to 1060
    q_y = 490
    draw.rounded_rectangle([40, q_y, W - 40, 1070], radius=18, fill='#111827', outline='#374151', width=2)
    draw.rounded_rectangle([40, q_y, W - 40, q_y + 45], radius=16, fill='#991b1b')
    draw.text((60, q_y + 10), "4 CÂU ĐỐ PHÁ ÁN KHOA HỌC (THÁM TỬ NHÍ ĐIỀN ĐÁP ÁN VÀO DÒNG CHẤM DƯỚI ĐÂY):", fill='#ffffff', font=get_font(20, bold=True))
    
    conan_questions = [
        "Manh mối 1 (Bảng chạy 60m SGK): Bạn A chạy 60m trong 10s; bạn B chạy 60m trong 12s; bạn C chạy 60m trong 9,6s. Tính tốc độ mỗi bạn và giải mã ai là người chạy nhanh nhất?",
        "Manh mối 2 (Giải mã công thức): Viết công thức gốc tính tốc độ v, công thức suy ra tính quãng đường s và thời gian t? Thực hiện đổi đơn vị tốc độ: 54 km/h = .......... m/s; 10 m/s = .......... km/h.",
        "Manh mối 3 (Hồ sơ vi phạm ATGT): Thiết bị bắn tốc độ CSGT phát hiện xe máy chạy 58 km/h trong khu dân cư có biển báo giới hạn tốc độ 40 km/h. Xe này có vi phạm không? Vượt quá bao nhiêu km/h?",
        "Manh mối 4 (Bài toán thực nghiệm): Một xe ô tô chuyển động đều từ A đến B cách nhau 90 km với tốc độ 45 km/h. Xe khởi hành lúc 7h30. Hỏi xe ô tô đến B vào thời điểm nào trong ngày?"
    ]
    
    q_col_w = (W - 80 - 30) // 2
    for idx, cq in enumerate(conan_questions):
        qx = 55 + (idx % 2) * (q_col_w + 20)
        qy = q_y + 60 + (idx // 2) * 245
        
        draw.rounded_rectangle([qx, qy, qx + q_col_w, qy + 230], radius=12, fill='#1f2937', outline='#4b5563', width=1)
        draw.text((qx + 15, qy + 12), f"• Câu hỏi phá án số {idx + 1}:", fill='#f87171', font=get_font(18, bold=True))
        
        c_lines = wrap_text(cq, get_font(16, bold=True), q_col_w - 30, draw)
        cur_cy = qy + 38
        for cl in c_lines[:3]:
            draw.text((qx + 15, cur_cy), cl, fill='#f3f4f6', font=get_font(16, bold=True))
            cur_cy += 23
            
        draw.text((qx + 15, cur_cy + 8), "Đáp án phá án: .................................................................................................................", fill='#9ca3af', font=get_font(15))
        draw.text((qx + 15, cur_cy + 34), "..................................................................................................................................................", fill='#9ca3af', font=get_font(15))
        draw.text((qx + 15, cur_cy + 60), "..................................................................................................................................................", fill='#9ca3af', font=get_font(15))

    # Bottom team declaration bar
    draw.rounded_rectangle([40, 1090, W - 40, 1210], radius=14, fill='#1e1b4b', outline='#6366f1', width=2)
    draw.text((60, 1105), "ĐỘI THÁM TỬ PHỐI HỢP 4 VAI TRÒ (4 MÀU MỰC CHỐNG THỤ ĐỘNG):", fill='#fef08a', font=get_font(18, bold=True))
    draw.text((60, 1135), "1. Nhóm trưởng (Mực đỏ): Điều phối, phân công   |   2. Thư ký (Mực xanh dương): Ghi chép phá án", fill='#ffffff', font=get_font(16))
    draw.text((60, 1165), "3. Chuyên viên kỹ thuật (Mực xanh lá): Tính toán v=s/t   |   4. Báo cáo viên (Mực tím/đen): Đại diện công bố kết luận", fill='#ffffff', font=get_font(16))
    
    out_path = 'public/infographics/poster-conan-khtn7-bai8.jpg'
    img.save(out_path, quality=95)
    print(f"Generated: {out_path} ({W}x{H})")

# =========================================================================
# 3. VỤ ÁN KHOA HỌC / LATEX DOSSIER (A4 DỌC: 1240 x 1754 px)
# =========================================================================
def generate_science_case_worksheet():
    W, H = 1240, 1754
    img = Image.new('RGB', (W, H), color='#0f172a') # Deep slate
    draw = ImageDraw.Draw(img)
    
    draw.rectangle([20, 20, W - 20, H - 20], fill='#0f172a', outline='#4f46e5', width=5)
    draw.rectangle([30, 30, W - 30, H - 30], outline='#38bdf8', width=2)
    
    # Header Banner
    draw.rounded_rectangle([45, 45, W - 45, 185], radius=20, fill='#1e1b4b', outline='#6366f1', width=3)
    draw.text((70, 60), "HỒ SƠ GIẢI MÃ KHOA HỌC • CHUẨN CÔNG THỨC TOÁN - VẬT LÍ (LATEX)", fill='#38bdf8', font=get_font(19, bold=True))
    draw.text((70, 95), "BÍ MẬT TỐC ĐỘ CHUYỂN ĐỘNG & BẢO ĐẢM AN TOÀN", fill='#ffffff', font=get_font(32, bold=True))
    draw.text((70, 145), "Khoa học tự nhiên 7 (Kết nối tri thức) • 4 Manh mối công thức & Bảng giải mã", fill='#c7d2fe', font=get_font(19))
    
    # 4 Formula & Scientific Clue Cards
    clue_y = 205
    clue_w = (W - 90 - 20) // 2
    clue_h = 240
    
    clues = [
        ("MANH MỐI 1: KHÁI NIỆM TỐC ĐỘ", "#ef4444", "#fef2f2", "#b91c1c", "Tốc độ là đại lượng cho biết mức độ nhanh hay chậm của chuyển động, xác định bằng quãng đường vật đi được trong một đơn vị thời gian."),
        ("MANH MỐI 2: TAM GIÁC CÔNG THỨC", "#10b981", "#ecfdf5", "#047857", "Công thức gốc: v = s / t\nSuy ra: s = v . t   và   t = s / v\nTrong đó: s (quãng đường), t (thời gian), v (tốc độ)."),
        ("MANH MỐI 3: QUY ĐỔI ĐƠN VỊ CHUẨN", "#f59e0b", "#fffbeb", "#b45309", "Đơn vị chuẩn SI: mét trên giây (m/s).\nĐơn vị thông dụng: kilômét trên giờ (km/h).\nQuy tắc vàng: 1 m/s = 3,6 km/h  <=>  1 km/h = 1/3,6 m/s."),
        ("MANH MỐI 4: THIẾT BỊ ĐO TỐC ĐỘ & ATGT", "#8b5cf6", "#f5f3ff", "#6d28d9", "Tốc kế: Đo tốc độ tức thời gắn trên ô tô, xe máy.\nThiết bị bắn tốc độ CSGT: Gồm súng phát sóng radar/laser và camera ghi hình để xử phạt vi phạm.")
    ]
    
    for idx, (title, stroke, bg, txt_c, body) in enumerate(clues):
        cx = 45 + (idx % 2) * (clue_w + 20)
        cy = clue_y + (idx // 2) * (clue_h + 20)
        
        draw.rounded_rectangle([cx, cy, cx + clue_w, cy + clue_h], radius=15, fill='#1e293b', outline=stroke, width=2)
        draw.rounded_rectangle([cx + 12, cy + 12, cx + clue_w - 12, cy + 48], radius=8, fill='#0f172a', outline=stroke, width=1)
        draw.text((cx + 20, cy + 18), title, fill=stroke, font=get_font(18, bold=True))
        
        b_lines = wrap_text(body, get_font(17), clue_w - 35, draw)
        cury = cy + 62
        for bl in b_lines[:5]:
            draw.text((cx + 20, cury), bl, fill='#f1f5f9', font=get_font(17))
            cury += 25
            
    # Questions Box
    draw.rounded_rectangle([45, 730, W - 45, 1500], radius=16, fill='#ffffff', outline='#4f46e5', width=3)
    draw.rounded_rectangle([45, 730, W - 45, 775], radius=14, fill='#4f46e5')
    draw.text((65, 740), "CÁC BÀI TOÁN GIẢI MÃ KHOA HỌC (HỌC SINH TỰ LÀM VÀO PHIẾU):", fill='#ffffff', font=get_font(20, bold=True))
    
    questions = [
        "Bài 1: Phân tích số liệu Bảng 8.1 SGK (Trang 45): Bạn A (60m - 10s), Bạn B (60m - 12s), Bạn C (60m - 9,6s). Tính tốc độ mỗi bạn và cho biết ý nghĩa của tốc độ.",
        "Bài 2: Một người đi xe đạp chuyển động với tốc độ 12 km/h. Hãy đổi tốc độ này sang đơn vị m/s? Người đó đi được quãng đường bao xa sau thời gian 30 phút?",
        "Bài 3: Trình bày nguyên lý hoạt động của thiết bị bắn tốc độ CSGT trong Hình 8.3 SGK? Tại sao các phương tiện phải tuân thủ nghiêm biển báo tốc độ trên đường cao tốc?",
        "Bài 4: Một đoàn tàu hỏa đi từ ga A đến ga B dài 120 km mất 2 giờ 30 phút. Tính tốc độ chuyển động của đoàn tàu ra km/h và m/s?"
    ]
    
    q_start_y = 790
    for idx, q_text in enumerate(questions):
        draw.rounded_rectangle([60, q_start_y, 95, q_start_y + 28], radius=6, fill='#4f46e5')
        draw.text((70, q_start_y + 2), str(idx + 1), fill='#ffffff', font=get_font(18, bold=True))
        
        qlines = wrap_text(q_text, get_font(18, bold=True), W - 180, draw)
        cy = q_start_y
        for ql in qlines:
            draw.text((105, cy), ql, fill='#0f172a', font=get_font(18, bold=True))
            cy += 25
            
        draw.text((105, cy + 4), "Lời giải: ...................................................................................................................................................................................................", fill='#64748b', font=get_font(16))
        draw.text((105, cy + 30), ".........................................................................................................................................................................................................................", fill='#64748b', font=get_font(16))
        draw.text((105, cy + 56), ".........................................................................................................................................................................................................................", fill='#64748b', font=get_font(16))
        q_start_y = cy + 90

    # Footer 4 Ink colors
    draw.rounded_rectangle([45, 1515, W - 45, 1715], radius=15, fill='#1e293b', outline='#64748b', width=2)
    draw.text((65, 1530), "PHÂN CÔNG 4 MÀU MỰC BẢO ĐẢM TẤT CẢ THÀNH VIÊN ĐỀU HOẠT ĐỘNG TÍCH CỰC:", fill='#38bdf8', font=get_font(18, bold=True))
    draw.text((65, 1565), "• Nhóm trưởng (Mực Đỏ): Điều phối, phân công bài toán và kiểm soát tiến độ làm việc.", fill='#fca5a5', font=get_font(17))
    draw.text((65, 1595), "• Thư ký (Mực Xanh dương): Trình bày toàn bộ phép tính, công thức và lời giải vào phiếu.", fill='#93c5fd', font=get_font(17))
    draw.text((65, 1625), "• Kỹ thuật viên (Mực Xanh lá): Bấm máy tính, kiểm tra phép đổi đơn vị đo và sai số.", fill='#86efac', font=get_font(17))
    draw.text((65, 1655), "• Báo cáo viên (Mực Tím/Đen): Thuyết trình trước lớp, đại diện nhóm trả lời chất vấn.", fill='#d8b4fe', font=get_font(17))

    out_path = 'public/infographics/phieu-vu-an-khoa-hoc-khtn7-bai8.jpg'
    img.save(out_path, quality=95)
    print(f"Generated: {out_path} ({W}x{H})")

# =========================================================================
# 4. HỌC SINH LỚP 7 PIXAR / CHIBI (A4 DỌC: 1240 x 1754 px)
# =========================================================================
def generate_pixar_students_worksheet():
    W, H = 1240, 1754
    img = Image.new('RGB', (W, H), color='#f0fdf4') # Mint green
    draw = ImageDraw.Draw(img)
    
    draw.rectangle([20, 20, W - 20, H - 20], fill='#ffffff', outline='#059669', width=6)
    draw.rectangle([30, 30, W - 30, H - 30], outline='#10b981', width=2)
    
    # Header Banner
    draw.rounded_rectangle([45, 45, W - 45, 185], radius=20, fill='#047857', outline='#34d399', width=3)
    draw.text((70, 60), "PHIẾU HỌC TẬP HOẠT HÌNH 3D PIXAR • LỚP HỌC HẠNH PHÚC LỚP 7", fill='#a7f3d0', font=get_font(19, bold=True))
    draw.text((70, 95), "THỬ THÁCH SÁNG TẠO: BÀI 8 - TỐC ĐỘ CHUYỂN ĐỘNG", fill='#ffffff', font=get_font(32, bold=True))
    draw.text((70, 145), "Môn Khoa học tự nhiên 7 • Hoạt động nhóm 4 vai trò vừa sức • Thời gian: 10 phút", fill='#d1fae5', font=get_font(19))
    draw.text((W - 380, 145), "Nhóm: ........ Lớp: 7......", fill='#fef08a', font=get_font(19, bold=True))
    
    # 4 Students Cards
    st_y = 205
    st_w = (W - 90 - 20) // 2
    st_h = 240
    
    students = [
        ("Bạn Minh (Nhóm trưởng - Bút Mực Đỏ)", "#b91c1c", "#fef2f2", "#ef4444", "Chào các bạn! Tớ sẽ phân công từng bạn đọc số liệu Bảng 8.1 SGK nhé. Chúng mình cùng phối hợp nhịp nhàng để hoàn thành xuất sắc nhiệm vụ của nhóm!"),
        ("Bạn Lan (Thư ký - Bút Mực Xanh Dương)", "#1d4ed8", "#eff6ff", "#3b82f6", "Tớ có bảng tính và bút mực xanh sẵn sàng rồi! Tớ sẽ ghi chép lại thật nắn nót và cẩn thận mọi câu trả lời của nhóm mình vào phiếu học tập."),
        ("Bạn An (Kỹ sư tính toán - Bút Mực Xanh Lá)", "#047857", "#ecfdf5", "#10b981", "Tớ vừa bấm máy tính xong công thức v = s / t và kiểm tra kết quả đổi đơn vị 54 km/h = 15 m/s rồi, hoàn toàn chuẩn xác không có chút sai lệch nào!"),
        ("Bạn Hoa (Báo cáo viên - Bút Mực Tím/Đen)", "#6b21a8", "#faf5ff", "#a855f7", "Tớ đã sẵn sàng cầm phiếu nhóm lên bảng tự tin thuyết trình trước thầy cô và cả lớp trong vòng 60 giây. Cả nhóm cùng cố gắng giành điểm Tốt nhé!")
    ]
    
    for idx, (title, color, bg, border, speech) in enumerate(students):
        sx = 45 + (idx % 2) * (st_w + 20)
        sy = st_y + (idx // 2) * (st_h + 20)
        
        draw.rounded_rectangle([sx, sy, sx + st_w, sy + st_h], radius=15, fill=bg, outline=border, width=2)
        draw.text((sx + 15, sy + 15), title, fill=color, font=get_font(18, bold=True))
        
        slines = wrap_text(speech, get_font(17), st_w - 30, draw)
        csy = sy + 45
        for sl in slines[:6]:
            draw.text((sx + 15, csy), sl, fill='#1e293b', font=get_font(17))
            csy += 25

    # Questions Box
    draw.rounded_rectangle([45, 730, W - 45, 1500], radius=16, fill='#ffffff', outline='#059669', width=3)
    draw.rounded_rectangle([45, 730, W - 45, 775], radius=14, fill='#059669')
    draw.text((65, 740), "CÁC BÀI TẬP EM CẦN HOÀN THÀNH CÙNG CẢ NHÓM (ĐIỀN VÀO DÒNG CHẤM):", fill='#ffffff', font=get_font(20, bold=True))
    
    questions = [
        "1. Hoàn thành Bảng 8.1 SGK: Bạn A chạy 60m trong 10s; bạn B chạy 60m trong 12s; bạn C chạy 60m trong 9,6s. Em hãy tính quãng đường mỗi bạn đi được trong 1 giây?",
        "2. Viết công thức tính tốc độ v = s/t. Em hãy suy ra công thức tính s và t? Đổi 54 km/h sang m/s và giải thích cách làm.",
        "3. Quan sát Hình 8.3 SGK: Thiết bị bắn tốc độ CSGT phát hiện ô tô chạy 68 km/h trên đường biển báo 50 km/h. Xe có vi phạm không? Nêu biện pháp an toàn.",
        "4. Em hãy nêu ít nhất 2 ví dụ thực tế trong đời sống thể hiện ý nghĩa của việc đo tốc độ chuyển động."
    ]
    
    q_start_y = 790
    for idx, q_text in enumerate(questions):
        draw.rounded_rectangle([60, q_start_y, 95, q_start_y + 28], radius=6, fill='#059669')
        draw.text((70, q_start_y + 2), str(idx + 1), fill='#ffffff', font=get_font(18, bold=True))
        
        qlines = wrap_text(q_text, get_font(18, bold=True), W - 180, draw)
        cy = q_start_y
        for ql in qlines:
            draw.text((105, cy), ql, fill='#0f172a', font=get_font(18, bold=True))
            cy += 25
            
        draw.text((105, cy + 4), "Bài làm: ...................................................................................................................................................................................................", fill='#64748b', font=get_font(16))
        draw.text((105, cy + 30), ".........................................................................................................................................................................................................................", fill='#64748b', font=get_font(16))
        draw.text((105, cy + 56), ".........................................................................................................................................................................................................................", fill='#64748b', font=get_font(16))
        q_start_y = cy + 90

    # Footer 4 Ink colors
    draw.rounded_rectangle([45, 1515, W - 45, 1715], radius=15, fill='#ecfdf5', outline='#059669', width=2)
    draw.text((65, 1530), "KHAI BÁO 4 THÀNH VIÊN VÀ 4 MÀU MỰC ĐÓNG GÓP (CHỐNG THỤ ĐỘNG/Ỷ LẠI):", fill='#047857', font=get_font(18, bold=True))
    draw.text((65, 1565), "• Bạn 1 (Nhóm trưởng - Bút Mực Đỏ): ................................................................ Ký tên: ....................", fill='#b91c1c', font=get_font(17))
    draw.text((65, 1595), "• Bạn 2 (Thư ký - Bút Mực Xanh Dương): ............................................................ Ký tên: ....................", fill='#1d4ed8', font=get_font(17))
    draw.text((65, 1625), "• Bạn 3 (Kỹ sư thao tác - Bút Mực Xanh Lá): .................................................... Ký tên: ....................", fill='#047857', font=get_font(17))
    draw.text((65, 1655), "• Bạn 4 (Báo cáo viên - Bút Mực Tím/Đen): ....................................................... Ký tên: ....................", fill='#6b21a8', font=get_font(17))

    out_path = 'public/infographics/phieu-hoc-sinh-khtn7-bai8.jpg'
    img.save(out_path, quality=95)
    print(f"Generated: {out_path} ({W}x{H})")

if __name__ == '__main__':
    generate_doraemon_worksheet()
    generate_conan_poster()
    generate_science_case_worksheet()
    generate_pixar_students_worksheet()
    print("ALL 4 INFOGRAPHIC WORKSHEET IMAGES GENERATED SUCCESSFULLY!")
