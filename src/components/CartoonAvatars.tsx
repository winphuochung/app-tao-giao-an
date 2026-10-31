import React from 'react';

/**
 * Authentic Cartoon & Anime Character Avatars (Vector SVG 100% sắc nét)
 * Dành riêng cho Phiếu học tập Infographic Doraemon, Conan & Pixar Students
 */

export const DoraemonAvatar: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Round Head */}
    <circle cx="50" cy="50" r="46" fill="#0284c7" stroke="#0f172a" strokeWidth="2.5" />
    {/* White Face */}
    <ellipse cx="50" cy="56" rx="38" ry="32" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
    {/* Big Eyes */}
    <ellipse cx="41" cy="33" rx="10" ry="14" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
    <ellipse cx="59" cy="33" rx="10" ry="14" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
    <circle cx="44" cy="34" r="3.5" fill="#0f172a" />
    <circle cx="56" cy="34" r="3.5" fill="#0f172a" />
    <circle cx="45" cy="32" r="1.2" fill="#ffffff" />
    <circle cx="57" cy="32" r="1.2" fill="#ffffff" />
    {/* Red Nose */}
    <circle cx="50" cy="46" r="6" fill="#ef4444" stroke="#0f172a" strokeWidth="1.5" />
    <circle cx="48" cy="44" r="1.8" fill="#ffffff" />
    {/* Nose-to-Mouth Line */}
    <line x1="50" y1="52" x2="50" y2="68" stroke="#0f172a" strokeWidth="2" />
    {/* Big Happy Mouth */}
    <path d="M 28 66 Q 50 86 72 66" fill="#dc2626" stroke="#0f172a" strokeWidth="2" />
    <path d="M 38 72 Q 50 82 62 72" fill="#f472b6" />
    {/* 6 Whiskers */}
    <line x1="18" y1="46" x2="36" y2="48" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
    <line x1="16" y1="54" x2="35" y2="54" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
    <line x1="18" y1="62" x2="36" y2="60" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
    <line x1="82" y1="46" x2="64" y2="48" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
    <line x1="84" y1="54" x2="65" y2="54" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
    <line x1="82" y1="62" x2="64" y2="60" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
    {/* Red Collar */}
    <rect x="24" y="88" width="52" height="7" rx="3.5" fill="#dc2626" stroke="#0f172a" strokeWidth="2" />
    {/* Golden Bell */}
    <circle cx="50" cy="94" r="5" fill="#f59e0b" stroke="#0f172a" strokeWidth="1.5" />
    <line x1="46" y1="94" x2="54" y2="94" stroke="#0f172a" strokeWidth="1" />
  </svg>
);

export const NobitaAvatar: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Hair Back */}
    <circle cx="50" cy="46" r="42" fill="#1e1b4b" />
    {/* Face */}
    <ellipse cx="50" cy="54" rx="34" ry="32" fill="#fde68a" stroke="#1e1b4b" strokeWidth="2" />
    {/* Hair Bangs */}
    <path d="M 18 36 Q 35 22 50 30 Q 68 20 82 36 Q 70 30 50 34 Q 30 30 18 36 Z" fill="#1e1b4b" />
    {/* Ears */}
    <circle cx="16" cy="54" r="6" fill="#fde68a" stroke="#1e1b4b" strokeWidth="1.5" />
    <circle cx="84" cy="54" r="6" fill="#fde68a" stroke="#1e1b4b" strokeWidth="1.5" />
    {/* Glasses Frame (Big Round) */}
    <circle cx="36" cy="50" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
    <circle cx="64" cy="50" r="14" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
    <line x1="50" y1="50" x2="50" y2="50" stroke="#0f172a" strokeWidth="3" />
    <line x1="22" y1="48" x2="16" y2="52" stroke="#0f172a" strokeWidth="2" />
    <line x1="78" y1="48" x2="84" y2="52" stroke="#0f172a" strokeWidth="2" />
    {/* Eyes Inside Glasses */}
    <circle cx="36" cy="50" r="4" fill="#0f172a" />
    <circle cx="64" cy="50" r="4" fill="#0f172a" />
    <circle cx="37" cy="48" r="1.5" fill="#ffffff" />
    <circle cx="65" cy="48" r="1.5" fill="#ffffff" />
    {/* Eyebrows (Worried / Thinking) */}
    <path d="M 24 33 Q 36 30 46 36" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 76 33 Q 64 30 54 36" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
    {/* Mouth (Cute Open O-mouth) */}
    <ellipse cx="50" cy="72" rx="6" ry="7" fill="#dc2626" stroke="#0f172a" strokeWidth="1.5" />
    {/* Yellow Shirt Collar */}
    <path d="M 26 94 L 50 82 L 74 94 L 70 100 L 30 100 Z" fill="#eab308" stroke="#0f172a" strokeWidth="2" />
    <polygon points="50,82 42,92 58,92" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
  </svg>
);

export const ShizukaAvatar: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Hair Back */}
    <circle cx="50" cy="48" r="40" fill="#451a03" />
    {/* Twin Pigtails with Ribbons */}
    <ellipse cx="14" cy="60" rx="9" ry="16" fill="#451a03" />
    <circle cx="16" cy="50" r="5" fill="#ec4899" />
    <ellipse cx="86" cy="60" rx="9" ry="16" fill="#451a03" />
    <circle cx="84" cy="50" r="5" fill="#ec4899" />
    {/* Face */}
    <ellipse cx="50" cy="54" rx="32" ry="30" fill="#fef08a" stroke="#451a03" strokeWidth="1.5" />
    {/* Bangs */}
    <path d="M 22 34 Q 38 24 50 32 Q 62 24 78 34 Q 68 28 50 30 Q 32 28 22 34 Z" fill="#451a03" />
    {/* Big Anime Eyes */}
    <ellipse cx="36" cy="52" rx="7" ry="10" fill="#1e1b4b" />
    <ellipse cx="64" cy="52" rx="7" ry="10" fill="#1e1b4b" />
    <circle cx="38" cy="49" r="3" fill="#ffffff" />
    <circle cx="66" cy="49" r="3" fill="#ffffff" />
    <circle cx="34" cy="55" r="1.5" fill="#ffffff" />
    <circle cx="62" cy="55" r="1.5" fill="#ffffff" />
    {/* Blush Cheeks */}
    <ellipse cx="26" cy="60" rx="5" ry="3" fill="#f472b6" opacity="0.6" />
    <ellipse cx="74" cy="60" rx="5" ry="3" fill="#f472b6" opacity="0.6" />
    {/* Gentle Smile */}
    <path d="M 44 68 Q 50 74 56 68" fill="none" stroke="#be123c" strokeWidth="2" strokeLinecap="round" />
    {/* Pink Dress */}
    <path d="M 28 92 Q 50 84 72 92 L 76 100 L 24 100 Z" fill="#ec4899" stroke="#be123c" strokeWidth="1.5" />
    <circle cx="50" cy="88" r="4" fill="#ffffff" />
  </svg>
);

export const DekisugiAvatar: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Neat Hair */}
    <ellipse cx="50" cy="42" rx="38" ry="34" fill="#365314" />
    {/* Face */}
    <ellipse cx="50" cy="54" rx="32" ry="30" fill="#fef08a" stroke="#1e293b" strokeWidth="1.5" />
    {/* Side Parted Bangs */}
    <path d="M 20 38 Q 42 26 60 36 Q 74 34 82 42 Q 68 32 46 32 Q 30 32 20 38 Z" fill="#365314" />
    {/* Smart Anime Eyes */}
    <ellipse cx="37" cy="50" rx="6" ry="8" fill="#0f172a" />
    <ellipse cx="63" cy="50" rx="6" ry="8" fill="#0f172a" />
    <circle cx="39" cy="48" r="2" fill="#ffffff" />
    <circle cx="65" cy="48" r="2" fill="#ffffff" />
    {/* Friendly Confident Smile */}
    <path d="M 42 66 Q 50 73 58 66" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
    {/* Green Vest & Shirt */}
    <path d="M 26 92 L 50 82 L 74 92 L 76 100 L 24 100 Z" fill="#10b981" stroke="#047857" strokeWidth="2" />
    <polygon points="50,82 44,92 56,92" fill="#ffffff" />
  </svg>
);

export const JaianAvatar: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Short Spiky Black Hair */}
    <path d="M 16 48 Q 24 18 50 20 Q 76 18 84 48 Z" fill="#0f172a" />
    {/* Strong Face */}
    <ellipse cx="50" cy="56" rx="36" ry="32" fill="#fed7aa" stroke="#0f172a" strokeWidth="2" />
    {/* Bold Eyebrows */}
    <path d="M 26 40 L 44 45" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
    <path d="M 74 40 L 56 45" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
    {/* Confident Eyes */}
    <ellipse cx="36" cy="50" rx="5" ry="6" fill="#0f172a" />
    <ellipse cx="64" cy="50" rx="5" ry="6" fill="#0f172a" />
    <circle cx="37" cy="48" r="1.5" fill="#ffffff" />
    <circle cx="65" cy="48" r="1.5" fill="#ffffff" />
    {/* Wide Bold Smile */}
    <path d="M 32 68 Q 50 86 68 68 Z" fill="#dc2626" stroke="#0f172a" strokeWidth="2" />
    {/* Orange Sweater */}
    <path d="M 20 92 Q 50 84 80 92 L 82 100 L 18 100 Z" fill="#ea580c" stroke="#9a3412" strokeWidth="2" />
    <rect x="20" y="93" width="60" height="4" fill="#7c2d12" />
  </svg>
);

export const SuneoAvatar: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Stylized Pointed Hair */}
    <path d="M 20 46 Q 30 18 64 22 L 86 36 L 76 44 L 84 48 L 74 52 Z" fill="#1e293b" />
    {/* Triangular Face Profile */}
    <ellipse cx="48" cy="56" rx="30" ry="28" fill="#fde68a" stroke="#1e293b" strokeWidth="1.5" />
    {/* Sly / Proud Eyes */}
    <ellipse cx="38" cy="50" rx="6" ry="4" fill="#0f172a" />
    <ellipse cx="60" cy="50" rx="6" ry="4" fill="#0f172a" />
    <circle cx="39" cy="49" r="1.2" fill="#ffffff" />
    <circle cx="61" cy="49" r="1.2" fill="#ffffff" />
    {/* Pointy Mouth */}
    <path d="M 40 68 Q 56 64 68 70" fill="none" stroke="#0f172a" strokeWidth="2.5" strokeLinecap="round" />
    {/* Cyan Polo Shirt */}
    <path d="M 24 92 Q 50 84 76 92 L 78 100 L 22 100 Z" fill="#06b6d4" stroke="#0891b2" strokeWidth="2" />
  </svg>
);

export const SenseiAvatar: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Blackboard in Background */}
    <rect x="6" y="8" width="88" height="46" rx="4" fill="#14532d" stroke="#78350f" strokeWidth="3" />
    <line x1="12" y1="20" x2="40" y2="20" stroke="#fef08a" strokeWidth="1.5" strokeDasharray="3 2" />
    <text x="14" y="34" fill="#ffffff" fontSize="9" fontWeight="bold">v = s/t</text>
    {/* Teacher Hair */}
    <path d="M 30 38 Q 50 26 70 38 Z" fill="#334155" />
    {/* Face */}
    <ellipse cx="50" cy="56" rx="26" ry="24" fill="#fed7aa" stroke="#0f172a" strokeWidth="1.5" />
    {/* Teacher Glasses */}
    <rect x="36" y="48" width="12" height="9" rx="2" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" opacity="0.9" />
    <rect x="52" y="48" width="12" height="9" rx="2" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" opacity="0.9" />
    <line x1="48" y1="52" x2="52" y2="52" stroke="#0f172a" strokeWidth="1.5" />
    {/* Friendly Smile */}
    <path d="M 44 68 Q 50 74 56 68" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
    {/* Brown Suit Jacket & Tie */}
    <path d="M 26 90 L 50 80 L 74 90 L 78 100 L 22 100 Z" fill="#854d0e" stroke="#713f12" strokeWidth="2" />
    <polygon points="50,80 46,96 54,96" fill="#3b82f6" />
  </svg>
);

export const ConanAvatar: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Spiky Anime Hair with Cowlick */}
    <path d="M 16 48 Q 24 14 50 16 Q 80 12 86 46 L 76 34 Q 50 24 26 36 Z" fill="#0f172a" />
    <path d="M 48 16 Q 56 6 64 14 Z" fill="#0f172a" />
    {/* Face */}
    <ellipse cx="50" cy="54" rx="32" ry="30" fill="#fed7aa" stroke="#0f172a" strokeWidth="1.5" />
    {/* Hair Bangs */}
    <path d="M 22 36 Q 38 28 50 34 Q 66 26 78 38 Q 66 32 50 34 Q 34 32 22 36 Z" fill="#0f172a" />
    {/* Detective Round Glasses with Gleam */}
    <circle cx="37" cy="50" r="13" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
    <circle cx="63" cy="50" r="13" fill="#ffffff" stroke="#0f172a" strokeWidth="2.5" />
    <line x1="50" y1="50" x2="50" y2="50" stroke="#0f172a" strokeWidth="2.5" />
    {/* Glasses Gleam */}
    <path d="M 30 42 L 44 56" stroke="#38bdf8" strokeWidth="2" opacity="0.8" />
    {/* Eyes Inside Glasses */}
    <ellipse cx="38" cy="51" rx="4" ry="5" fill="#1e3a8a" />
    <ellipse cx="64" cy="51" rx="4" ry="5" fill="#1e3a8a" />
    <circle cx="39" cy="49" r="1.5" fill="#ffffff" />
    <circle cx="65" cy="49" r="1.5" fill="#ffffff" />
    {/* Confident Detective Smirk */}
    <path d="M 44 68 Q 50 72 58 66" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
    {/* Blue Blazer */}
    <path d="M 22 92 L 50 82 L 78 92 L 80 100 L 20 100 Z" fill="#1e3a8a" stroke="#172554" strokeWidth="2" />
    {/* Big Red Voice-Changer Bowtie */}
    <path d="M 40 82 L 50 86 L 60 82 L 60 90 L 50 86 L 40 90 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
    <circle cx="50" cy="86" r="2.5" fill="#ef4444" />
  </svg>
);

export const RanAvatar: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Signature Horn Hair */}
    <path d="M 20 54 Q 24 16 50 20 L 78 6 L 70 24 Q 82 22 84 54 Z" fill="#3b2014" />
    {/* Face */}
    <ellipse cx="50" cy="54" rx="30" ry="28" fill="#fef08a" stroke="#3b2014" strokeWidth="1.5" />
    {/* Anime Eyes */}
    <ellipse cx="37" cy="52" rx="6" ry="9" fill="#581c87" />
    <ellipse cx="63" cy="52" rx="6" ry="9" fill="#581c87" />
    <circle cx="39" cy="49" r="2.5" fill="#ffffff" />
    <circle cx="65" cy="49" r="2.5" fill="#ffffff" />
    {/* Sweet Smile */}
    <path d="M 44 68 Q 50 74 56 68" fill="none" stroke="#be123c" strokeWidth="2" strokeLinecap="round" />
    {/* School Teal Blazer */}
    <path d="M 24 92 L 50 82 L 76 92 L 78 100 L 22 100 Z" fill="#0d9488" stroke="#115e59" strokeWidth="2" />
    {/* Tie */}
    <polygon points="50,82 46,94 54,94" fill="#dc2626" />
  </svg>
);

export const PixarStudentAvatar: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Backpack Straps */}
    <rect x="20" y="60" width="60" height="36" rx="8" fill="#3b82f6" />
    {/* Cute Round Head */}
    <circle cx="50" cy="46" r="36" fill="#fed7aa" stroke="#0f172a" strokeWidth="2" />
    {/* Soft Pixar Hair */}
    <path d="M 18 42 Q 28 14 50 16 Q 74 14 82 42 Q 68 28 50 30 Q 32 28 18 42 Z" fill="#78350f" />
    {/* Large Sparkly Eyes */}
    <ellipse cx="36" cy="48" rx="8" ry="11" fill="#0f172a" />
    <ellipse cx="64" cy="48" rx="8" ry="11" fill="#0f172a" />
    <circle cx="39" cy="44" r="3.5" fill="#ffffff" />
    <circle cx="67" cy="44" r="3.5" fill="#ffffff" />
    <circle cx="34" cy="52" r="1.5" fill="#ffffff" />
    <circle cx="62" cy="52" r="1.5" fill="#ffffff" />
    {/* Blush */}
    <ellipse cx="26" cy="56" rx="5" ry="3" fill="#f43f5e" opacity="0.5" />
    <ellipse cx="74" cy="56" rx="5" ry="3" fill="#f43f5e" opacity="0.5" />
    {/* Smile */}
    <path d="M 42 66 Q 50 74 58 66" fill="none" stroke="#be123c" strokeWidth="2.5" strokeLinecap="round" />
    {/* Yellow T-shirt */}
    <path d="M 26 90 Q 50 82 74 90 L 76 100 L 24 100 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="2" />
  </svg>
);
