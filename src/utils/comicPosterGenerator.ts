import { LessonMetadata } from '../types';

/**
 * Bộ tạo Poster Infographic Truyện Tranh Anime Vector A4 (1:1.414)
 * Tạo ra ảnh đồ họa Infographic hoàn chỉnh 100% cho BẤT KỲ BÀI HỌC NÀO
 */

export function generateComicPosterSvg(
  meta: LessonMetadata,
  style: string,
  questions: string[]
): string {
  const isConan = style === 'conan-ai';
  const isScience = style === 'science-case-ai';
  const isLandscape = isConan; // 1,414 : 1
  const width = isLandscape ? 1414 : 1000;
  const height = isLandscape ? 1000 : 1414;

  const headerColor = isConan ? '%237f1d1d' : isScience ? '%231e1b4b' : '%231e3a8a';
  const accentColor = isConan ? '%23ef4444' : isScience ? '%236366f1' : '%233b82f6';
  const tagBg = isConan ? '%23fef2f2' : '%23eff6ff';
  const tagText = isConan ? 'POSTER THÁM TỬ CONAN • PHÁ ÁN BÀI HỌC' : isScience ? 'HỒ SƠ VỤ ÁN KHOA HỌC • KHÁM PHÁ BÍ MẬT' : 'PHIẾU HỌC TẬP TRUYỆN TRANH DORAEMON';

  const q1 = (questions[0] || 'Nhiệm vụ 1: Hoàn thành bảng phân tích và rút ra kết luận cốt lõi.').replace(/"/g, "'");
  const q2 = (questions[1] || 'Nhiệm vụ 2: Lập công thức khoa học/toán học và quy đổi đơn vị đo.').replace(/"/g, "'");
  const q3 = (questions[2] || 'Nhiệm vụ 3: Phân tích học liệu trực quan SGK và trả lời câu hỏi vận dụng.').replace(/"/g, "'");
  const q4 = (questions[3] || 'Nhiệm vụ 4: Liên hệ thực tiễn đời sống, bảo đảm an toàn và bảo vệ môi trường.').replace(/"/g, "'");

  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs>
      <linearGradient id="bgGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="%23f8fafc"/>
        <stop offset="100%" stop-color="%23e2e8f0"/>
      </linearGradient>
      <linearGradient id="headerGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${headerColor}"/>
        <stop offset="100%" stop-color="${accentColor}"/>
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="100%" height="100%" fill="url(%23bgGrad)" rx="24"/>
    <rect x="16" y="16" width="${width - 32}" height="${height - 32}" fill="none" stroke="${accentColor}" stroke-width="4" rx="20"/>

    <!-- Header Banner -->
    <rect x="32" y="32" width="${width - 64}" height="140" rx="16" fill="url(%23headerGrad)"/>
    <rect x="48" y="46" width="380" height="28" rx="14" fill="${tagBg}"/>
    <text x="60" y="65" font-family="Arial, sans-serif" font-size="12" font-weight="900" fill="${headerColor}">★ ${tagText}</text>
    <text x="${width - 60}" y="65" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="%23fef08a" text-anchor="end">Nhóm: ......... Lớp: ${meta.khoiLop}.......</text>
    
    <text x="${width / 2}" y="112" font-family="Times New Roman, serif" font-size="28" font-weight="bold" fill="%23ffffff" text-anchor="middle">${meta.tenBaiDay.toUpperCase()}</text>
    <text x="${width / 2}" y="142" font-family="Arial, sans-serif" font-size="14" fill="%23dbeafe" text-anchor="middle">Môn: ${meta.monHoc} • Khối Lớp ${meta.khoiLop} • Bộ Sách: ${meta.boSach} • 4 Màu Mực Chống Thụ Động</text>

    <!-- Comic Strip Grid (4 Big Panels) -->
    <!-- Panel 1 -->
    <rect x="40" y="190" width="${width / 2 - 50}" height="220" rx="16" fill="%23ffffff" stroke="%23f59e0b" stroke-width="3"/>
    <circle cx="95" cy="250" r="35" fill="%23fef3c7" stroke="%23f59e0b" stroke-width="2"/>
    <text x="95" y="258" font-family="sans-serif" font-size="28" text-anchor="middle">👨‍🏫</text>
    <text x="145" y="230" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="%23b45309">Thầy giáo giao thử thách:</text>
    <text x="145" y="260" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="%23334155">"Hôm nay cả lớp cùng phân tích SGK bài '${meta.tenBaiDay}'.</text>
    <text x="145" y="285" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="%23334155">Các nhóm hãy thảo luận 4 màu mực và hoàn thành phiếu!"</text>

    <!-- Panel 2 -->
    <rect x="${width / 2 + 10}" y="190" width="${width / 2 - 50}" height="220" rx="16" fill="%23ffffff" stroke="%233b82f6" stroke-width="3"/>
    <circle cx="${width / 2 + 65}" cy="250" r="35" fill="%23dbeafe" stroke="%233b82f6" stroke-width="2"/>
    <text x="${width / 2 + 65}" y="258" font-family="sans-serif" font-size="28" text-anchor="middle">${isConan ? '🔍' : '🐱'}</text>
    <text x="${width / 2 + 115}" y="230" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="%231d4ed8">${isConan ? 'Thám tử Conan mách nước:' : 'Doraemon mách bảo bối:'}</text>
    <text x="${width / 2 + 115}" y="260" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="%23334155">"Quan sát kỹ thông số và bảng số liệu trong SGK,</text>
    <text x="${width / 2 + 115}" y="285" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="%23334155">chúng ta sẽ tìm ra quy luật cốt lõi ngay thôi!"</text>

    <!-- Panel 3 -->
    <rect x="40" y="425" width="${width / 2 - 50}" height="220" rx="16" fill="%23ffffff" stroke="%23ec4899" stroke-width="3"/>
    <circle cx="95" cy="485" r="35" fill="%23fce7f3" stroke="%23ec4899" stroke-width="2"/>
    <text x="95" y="493" font-family="sans-serif" font-size="28" text-anchor="middle">👧</text>
    <text x="145" y="465" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="%23be185d">Shizuka & Bạn học nhắc nhở:</text>
    <text x="145" y="495" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="%23334155">"Các bạn nhớ kiểm tra kỹ đơn vị đo lường,</text>
    <text x="145" y="520" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="%23334155">quy tắc tính toán và phân công 4 màu mực nhé!"</text>

    <!-- Panel 4 -->
    <rect x="${width / 2 + 10}" y="425" width="${width / 2 - 50}" height="220" rx="16" fill="%23ffffff" stroke="%2310b981" stroke-width="3"/>
    <circle cx="${width / 2 + 65}" cy="485" r="35" fill="%23d1fae5" stroke="%2310b981" stroke-width="2"/>
    <text x="${width / 2 + 65}" y="493" font-family="sans-serif" font-size="28" text-anchor="middle">💡</text>
    <text x="${width / 2 + 115}" y="465" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="%23047857">Dekisugi & Cả nhóm giải mã:</text>
    <text x="${width / 2 + 115}" y="495" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="%23334155">"Chính xác! Áp dụng đúng công thức và giải quyết</text>
    <text x="${width / 2 + 115}" y="520" font-family="Times New Roman, serif" font-size="15" font-style="italic" fill="%23334155">4 nhiệm vụ bên dưới để hoàn tất phá án!"</text>

    <!-- Task Section Banner -->
    <rect x="40" y="665" width="${width - 80}" height="42" rx="10" fill="%230f172a"/>
    <text x="56" y="692" font-family="Arial, sans-serif" font-size="15" font-weight="bold" fill="%23ffffff">NHIỆM VỤ PHIẾU HỌC TẬP (HỌC SINH TỰ LÀM VÀO DÒNG CHẤM - KHÔNG CÓ ĐÁP ÁN):</text>
    <text x="${width - 60}" y="692" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="%23facc15" text-anchor="end">4 CÂU HỎI</text>

    <!-- Questions Box -->
    <rect x="40" y="720" width="${width - 80}" height="135" rx="12" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/>
    <text x="60" y="750" font-family="Times New Roman, serif" font-size="16" font-weight="bold" fill="%230f172a">1. ${q1}</text>
    <text x="75" y="775" font-family="Courier, monospace" font-size="13" fill="%2394a3b8">Bài làm: .........................................................................................................................................................................................................</text>
    <text x="60" y="810" font-family="Times New Roman, serif" font-size="16" font-weight="bold" fill="%230f172a">2. ${q2}</text>
    <text x="75" y="835" font-family="Courier, monospace" font-size="13" fill="%2394a3b8">Bài làm: .........................................................................................................................................................................................................</text>

    <rect x="40" y="865" width="${width - 80}" height="135" rx="12" fill="%23ffffff" stroke="%23cbd5e1" stroke-width="2"/>
    <text x="60" y="895" font-family="Times New Roman, serif" font-size="16" font-weight="bold" fill="%230f172a">3. ${q3}</text>
    <text x="75" y="920" font-family="Courier, monospace" font-size="13" fill="%2394a3b8">Bài làm: .........................................................................................................................................................................................................</text>
    <text x="60" y="955" font-family="Times New Roman, serif" font-size="16" font-weight="bold" fill="%230f172a">4. ${q4}</text>
    <text x="75" y="980" font-family="Courier, monospace" font-size="13" fill="%2394a3b8">Bài làm: .........................................................................................................................................................................................................</text>

    <!-- 4 Colors Role Footer -->
    <rect x="40" y="${height - 130}" width="${width - 80}" height="95" rx="14" fill="%23f1f5f9" stroke="%2394a3b8" stroke-width="2"/>
    <text x="60" y="${height - 105}" font-family="Arial, sans-serif" font-size="13" font-weight="bold" fill="%23334155">BẢNG PHÂN CÔNG 4 VAI TRÒ & 4 MÀU MỰC ĐÓNG GÓP:</text>
    
    <rect x="60" y="${height - 90}" width="${(width - 140) / 4}" height="45" rx="8" fill="%23fee2e2" stroke="%23ef4444"/>
    <text x="70" y="${height - 72}" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="%23b91c1c">Nhóm trưởng</text>
    <text x="70" y="${height - 54}" font-family="Arial, sans-serif" font-size="11" fill="%23dc2626">Mực Đỏ</text>

    <rect x="${60 + (width - 140) / 4 + 10}" y="${height - 90}" width="${(width - 140) / 4}" height="45" rx="8" fill="%23dbeafe" stroke="%233b82f6"/>
    <text x="${70 + (width - 140) / 4 + 10}" y="${height - 72}" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="%231d4ed8">Thư ký</text>
    <text x="${70 + (width - 140) / 4 + 10}" y="${height - 54}" font-family="Arial, sans-serif" font-size="11" fill="%232563eb">Mực Xanh dương</text>

    <rect x="${60 + ((width - 140) / 4) * 2 + 20}" y="${height - 90}" width="${(width - 140) / 4}" height="45" rx="8" fill="%23d1fae5" stroke="%2310b981"/>
    <text x="${70 + ((width - 140) / 4) * 2 + 20}" y="${height - 72}" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="%23047857">Kỹ thuật viên</text>
    <text x="${70 + ((width - 140) / 4) * 2 + 20}" y="${height - 54}" font-family="Arial, sans-serif" font-size="11" fill="%23059669">Mực Xanh lá</text>

    <rect x="${60 + ((width - 140) / 4) * 3 + 30}" y="${height - 90}" width="${(width - 140) / 4}" height="45" rx="8" fill="%23f3e8ff" stroke="%23a855f7"/>
    <text x="${70 + ((width - 140) / 4) * 3 + 30}" y="${height - 72}" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="%237e22ce">Báo cáo viên</text>
    <text x="${70 + ((width - 140) / 4) * 3 + 30}" y="${height - 54}" font-family="Arial, sans-serif" font-size="11" fill="%239333ea">Mực Tím/Đen</text>
  </svg>`;
}
