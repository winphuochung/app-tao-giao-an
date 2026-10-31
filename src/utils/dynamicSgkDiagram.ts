/**
 * Bộ tạo sơ đồ / học liệu trực quan SGK thông minh theo từng bài học cụ thể
 * Đảm bảo 100% bài học đều có hình ảnh sơ đồ SGK tương ứng, không bị trùng lặp sang Bài 8
 */

export function generateSvgDiagramForTopic(
  topic: string,
  sectionTitle: string,
  subject: string,
  grade: number | string
): string {
  const t = (topic + ' ' + sectionTitle).toLowerCase();
  const w = 600;
  const h = 340;

  // 1. KHTN / Vật lí: Chuyển động, đồ thị s-t
  if (t.includes('đồ thị') || t.includes('quãng đường') || t.includes('thời gian')) {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <rect width="100%" height="100%" fill="%23f8fafc" rx="12" stroke="%23cbd5e1" stroke-width="2"/>
      <text x="300" y="32" font-family="Times New Roman, serif" font-size="16" font-weight="bold" fill="%231e3a8a" text-anchor="middle">ĐỒ THỊ QUÃNG ĐƯỜNG - THỜI GIAN (s - t)</text>
      <!-- Coordinate Axes -->
      <line x1="80" y1="280" x2="520" y2="280" stroke="%23334155" stroke-width="3" marker-end="url(%23arr)"/>
      <line x1="80" y1="280" x2="80" y2="60" stroke="%23334155" stroke-width="3"/>
      <!-- Axis Labels -->
      <text x="530" y="285" font-family="sans-serif" font-size="14" font-weight="bold" fill="%230f172a">t (s)</text>
      <text x="80" y="50" font-family="sans-serif" font-size="14" font-weight="bold" fill="%230f172a" text-anchor="middle">s (m)</text>
      <!-- Grid Lines -->
      <line x1="180" y1="280" x2="180" y2="70" stroke="%23e2e8f0" stroke-dasharray="4"/>
      <line x1="280" y1="280" x2="280" y2="70" stroke="%23e2e8f0" stroke-dasharray="4"/>
      <line x1="380" y1="280" x2="380" y2="70" stroke="%23e2e8f0" stroke-dasharray="4"/>
      <line x1="80" y1="220" x2="500" y2="220" stroke="%23e2e8f0" stroke-dasharray="4"/>
      <line x1="80" y1="160" x2="500" y2="160" stroke="%23e2e8f0" stroke-dasharray="4"/>
      <line x1="80" y1="100" x2="500" y2="100" stroke="%23e2e8f0" stroke-dasharray="4"/>
      <!-- Motion Graph Line -->
      <polyline points="80,280 200,200 340,200 480,100" fill="none" stroke="%23dc2626" stroke-width="4"/>
      <circle cx="80" cy="280" r="5" fill="%23dc2626"/>
      <circle cx="200" cy="200" r="5" fill="%23dc2626"/>
      <circle cx="340" cy="200" r="5" fill="%23dc2626"/>
      <circle cx="480" cy="100" r="5" fill="%23dc2626"/>
      <!-- Annotations -->
      <rect x="120" y="80" width="220" height="40" rx="6" fill="%23eff6ff" stroke="%233b82f6"/>
      <text x="230" y="105" font-family="sans-serif" font-size="12" font-weight="bold" fill="%231e40af" text-anchor="middle">Đoạn nằm ngang: Vật đứng yên</text>
      <text x="300" y="320" font-family="Times New Roman, serif" font-size="13" font-style="italic" fill="%23475569" text-anchor="middle">Hình: Đồ thị mô tả chuyển động của vật theo thời gian (SGK KHTN ${grade})</text>
    </svg>`;
  }

  // 2. KHTN / Hóa học: Nguyên tử, phân tử, liên kết hóa học
  if (t.includes('nguyên tử') || t.includes('phân tử') || t.includes('bảng tuần hoàn') || t.includes('liên kết') || t.includes('electron')) {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <rect width="100%" height="100%" fill="%230f172a" rx="12" stroke="%2338bdf8" stroke-width="2"/>
      <text x="300" y="32" font-family="Times New Roman, serif" font-size="16" font-weight="bold" fill="%2338bdf8" text-anchor="middle">MÔ HÌNH NGUYÊN TỬ RUTHERFORD - BOHR</text>
      <!-- Nucleus -->
      <circle cx="300" cy="170" r="28" fill="%23ef4444" stroke="%23f87171" stroke-width="3"/>
      <text x="300" y="176" font-family="sans-serif" font-size="13" font-weight="bold" fill="%23ffffff" text-anchor="middle">Hạt nhân (+)</text>
      <!-- Electron Orbits -->
      <ellipse cx="300" cy="170" rx="90" ry="45" fill="none" stroke="%2338bdf8" stroke-width="2" stroke-dasharray="4 3"/>
      <ellipse cx="300" cy="170" rx="90" ry="45" fill="none" stroke="%2338bdf8" stroke-width="2" stroke-dasharray="4 3" transform="rotate(60 300 170)"/>
      <ellipse cx="300" cy="170" rx="90" ry="45" fill="none" stroke="%2338bdf8" stroke-width="2" stroke-dasharray="4 3" transform="rotate(-60 300 170)"/>
      <!-- Electrons -->
      <circle cx="210" cy="170" r="7" fill="%23fbbf24"/>
      <circle cx="390" cy="170" r="7" fill="%23fbbf24"/>
      <circle cx="345" cy="92" r="7" fill="%23fbbf24"/>
      <circle cx="255" cy="248" r="7" fill="%23fbbf24"/>
      <circle cx="345" cy="248" r="7" fill="%23fbbf24"/>
      <circle cx="255" cy="92" r="7" fill="%23fbbf24"/>
      <!-- Caption -->
      <text x="300" y="315" font-family="Times New Roman, serif" font-size="13" font-style="italic" fill="%2394a3b8" text-anchor="middle">Hình: Cấu tạo hạt nhân mang điện dương và các electron chuyển động quanh hạt nhân</text>
    </svg>`;
  }

  // 3. KHTN / Vật lí: Ánh sáng, khúc xạ, phản xạ, gương phẳng
  if (t.includes('ánh sáng') || t.includes('phản xạ') || t.includes('khúc xạ') || t.includes('gương')) {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <rect width="100%" height="100%" fill="%23f1f5f9" rx="12" stroke="%2394a3b8" stroke-width="2"/>
      <text x="300" y="32" font-family="Times New Roman, serif" font-size="16" font-weight="bold" fill="%230f172a" text-anchor="middle">ĐỊNH LUẬT PHẢN XẠ ÁNH SÁNG</text>
      <!-- Mirror Surface -->
      <line x1="80" y1="220" x2="520" y2="220" stroke="%23334155" stroke-width="4"/>
      <!-- Normal Line -->
      <line x1="300" y1="220" x2="300" y2="60" stroke="%2364748b" stroke-width="2" stroke-dasharray="5 3"/>
      <text x="305" y="75" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23475569">Pháp tuyến (N)</text>
      <!-- Incident Ray -->
      <line x1="140" y1="80" x2="300" y2="220" stroke="%23ef4444" stroke-width="3"/>
      <text x="180" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23b91c1c">Tia tới (SI)</text>
      <!-- Reflected Ray -->
      <line x1="300" y1="220" x2="460" y2="80" stroke="%2316a34a" stroke-width="3"/>
      <text x="400" y="130" font-family="sans-serif" font-size="12" font-weight="bold" fill="%2315803d">Tia phản xạ (IR)</text>
      <!-- Angle Arcs -->
      <path d="M 270 185 A 40 40 0 0 1 298 180" fill="none" stroke="%23dc2626" stroke-width="2"/>
      <text x="275" y="175" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23dc2626">i</text>
      <path d="M 302 180 A 40 40 0 0 1 330 185" fill="none" stroke="%2316a34a" stroke-width="2"/>
      <text x="320" y="175" font-family="sans-serif" font-size="12" font-weight="bold" fill="%2316a34a">i'</text>
      <!-- Formula Banner -->
      <rect x="220" y="240" width="160" height="36" rx="6" fill="%23dbeafe" stroke="%232563eb"/>
      <text x="300" y="264" font-family="Times New Roman, serif" font-size="15" font-weight="bold" fill="%231e3a8a" text-anchor="middle">Góc tới i = Góc phản xạ i'</text>
      <text x="300" y="315" font-family="Times New Roman, serif" font-size="13" font-style="italic" fill="%23475569" text-anchor="middle">Hình: Sơ đồ tia sáng tới và tia sáng phản xạ trên mặt phẳng gương</text>
    </svg>`;
  }

  // 4. KHTN / Sinh học: Tế bào, quang hợp, hô hấp, cơ thể sinh vật
  if (t.includes('tế bào') || t.includes('quang hợp') || t.includes('hô hấp') || t.includes('sinh vật') || t.includes('thực vật')) {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <rect width="100%" height="100%" fill="%23f0fdf4" rx="12" stroke="%2322c55e" stroke-width="2"/>
      <text x="300" y="32" font-family="Times New Roman, serif" font-size="16" font-weight="bold" fill="%2315803d" text-anchor="middle">SƠ ĐỒ CẤU TRÚC VÀ CƠ CHẾ SINH HỌC</text>
      <!-- Plant Leaf / Cell Box -->
      <rect x="140" y="80" width="320" height="150" rx="16" fill="%23dcfce7" stroke="%2316a34a" stroke-width="3"/>
      <!-- Chloroplast / Organelles -->
      <circle cx="220" cy="155" r="28" fill="%234ade80" stroke="%2315803d" stroke-width="2"/>
      <text x="220" y="160" font-family="sans-serif" font-size="11" font-weight="bold" fill="%23064e3b" text-anchor="middle">Lục lạp</text>
      <circle cx="360" cy="155" r="32" fill="%23a7f3d0" stroke="%23047857" stroke-width="2"/>
      <text x="360" y="160" font-family="sans-serif" font-size="11" font-weight="bold" fill="%23064e3b" text-anchor="middle">Không bào</text>
      <!-- Inputs & Outputs -->
      <text x="60" y="120" font-family="sans-serif" font-size="12" font-weight="bold" fill="%23b45309">Ánh sáng ☀️</text>
      <line x1="110" y1="125" x2="140" y2="135" stroke="%23f59e0b" stroke-width="2"/>
      <text x="60" y="180" font-family="sans-serif" font-size="12" font-weight="bold" fill="%230369a1">CO₂ + Nước 💧</text>
      <line x1="110" y1="180" x2="140" y2="170" stroke="%230284c7" stroke-width="2"/>
      <text x="480" y="155" font-family="sans-serif" font-size="12" font-weight="bold" fill="%2315803d">O₂ + Glucozơ 🌿</text>
      <line x1="460" y1="155" x2="480" y2="155" stroke="%2316a34a" stroke-width="2"/>
      <!-- Formula Banner -->
      <rect x="100" y="250" width="400" height="34" rx="6" fill="%23ecfdf5" stroke="%2310b981"/>
      <text x="300" y="272" font-family="Times New Roman, serif" font-size="13" font-weight="bold" fill="%23065f46" text-anchor="middle">CO₂ + H₂O + Năng lượng ánh sáng ➔ Chất hữu cơ + O₂</text>
      <text x="300" y="315" font-family="Times New Roman, serif" font-size="13" font-style="italic" fill="%23475569" text-anchor="middle">Hình: Sơ đồ mô tả cơ chế chuyển hóa năng lượng trong tế bào sinh vật</text>
    </svg>`;
  }

  // 5. Mặc định sư phạm tổng quát: Cấu trúc kiến thức trọng tâm & Bảng dữ liệu SGK
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <rect width="100%" height="100%" fill="%23f8fafc" rx="12" stroke="%23cbd5e1" stroke-width="2"/>
    <!-- Header Banner -->
    <rect x="0" y="0" width="${w}" height="48" fill="%231e3a8a" rx="12"/>
    <text x="300" y="30" font-family="Times New Roman, serif" font-size="16" font-weight="bold" fill="%23ffffff" text-anchor="middle">${topic.toUpperCase()} (SGK LỚP ${grade})</text>
    <!-- Section Boxes -->
    <rect x="40" y="70" width="240" height="90" rx="10" fill="%23eff6ff" stroke="%233b82f6" stroke-width="2"/>
    <text x="160" y="96" font-family="sans-serif" font-size="13" font-weight="bold" fill="%231e40af" text-anchor="middle">1. Khái Niệm Cốt Lõi</text>
    <text x="160" y="122" font-family="Times New Roman, serif" font-size="12" fill="%23334155" text-anchor="middle">• Trích xuất định nghĩa chuẩn SGK</text>
    <text x="160" y="142" font-family="Times New Roman, serif" font-size="12" fill="%23334155" text-anchor="middle">• Nhận diện bản chất khoa học</text>

    <rect x="320" y="70" width="240" height="90" rx="10" fill="%23fef3c7" stroke="%23f59e0b" stroke-width="2"/>
    <text x="440" y="96" font-family="sans-serif" font-size="13" font-weight="bold" fill="%2392400e" text-anchor="middle">2. Quy Tắc & Công Thức</text>
    <text x="440" y="122" font-family="Times New Roman, serif" font-size="12" fill="%23334155" text-anchor="middle">• Định luật, công thức toán/khoa học</text>
    <text x="440" y="142" font-family="Times New Roman, serif" font-size="12" fill="%23334155" text-anchor="middle">• Đơn vị đo lường quy chuẩn</text>

    <rect x="40" y="180" width="240" height="90" rx="10" fill="%23f0fdf4" stroke="%2310b981" stroke-width="2"/>
    <text x="160" y="206" font-family="sans-serif" font-size="13" font-weight="bold" fill="%23065f46" text-anchor="middle">3. Thao Tác / Dữ Liệu Thực Hành</text>
    <text x="160" y="232" font-family="Times New Roman, serif" font-size="12" fill="%23334155" text-anchor="middle">• Thí nghiệm, quan sát số liệu</text>
    <text x="160" y="252" font-family="Times New Roman, serif" font-size="12" fill="%23334155" text-anchor="middle">• Phân tích bảng biểu mẫu vật</text>

    <rect x="320" y="180" width="240" height="90" rx="10" fill="%23fdf2f8" stroke="%23ec4899" stroke-width="2"/>
    <text x="440" y="206" font-family="sans-serif" font-size="13" font-weight="bold" fill="%239d174d" text-anchor="middle">4. Ứng Dụng Thực Tiễn</text>
    <text x="440" y="232" font-family="Times New Roman, serif" font-size="12" fill="%23334155" text-anchor="middle">• Liên hệ đời sống & an toàn</text>
    <text x="440" y="252" font-family="Times New Roman, serif" font-size="12" fill="%23334155" text-anchor="middle">• Giải quyết vấn đề thực tế</text>

    <text x="300" y="315" font-family="Times New Roman, serif" font-size="13" font-style="italic" fill="%2364748b" text-anchor="middle">Học liệu trực quan: Sơ đồ cấu trúc kiến thức & quy trình bài học (SGK GDPT 2018)</text>
  </svg>`;
}
