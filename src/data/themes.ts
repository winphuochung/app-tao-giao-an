import { SlideThemeConfig, SlideThemeId } from '../types';

export const SLIDE_THEMES: Record<SlideThemeId, SlideThemeConfig> = {
  '3d-pixar': {
    id: '3d-pixar',
    name: '3D Pixar & Joyful Pastel',
    description: 'Tươi sáng, ngộ nghĩnh, màu pastel ấm áp dành riêng cho học sinh Tiểu học',
    capHocRecommended: 'TIEU_HOC',
    primaryColor: '#FF6B8B', // Soft vivid pink
    secondaryColor: '#FFB26B', // Warm pastel orange
    accentColor: '#4ECDC4', // Fresh mint
    backgroundColor: '#FFFDF9', // Warm cream background
    cardBg: '#FFFFFF',
    textColor: '#2D3748',
    fontHeading: 'Quicksand',
    fontBody: 'Nunito',
    sampleBadge: '🎨 3D Pastel Kid'
  },
  'modern-stem': {
    id: 'modern-stem',
    name: 'Modern STEM & Infographics',
    description: 'Hiện đại, sắc nét, khoa học theo phong cách Bento Grid cho học sinh THCS',
    capHocRecommended: 'THCS',
    primaryColor: '#0EA5E9', // Electric Cyan
    secondaryColor: '#1E293B', // Slate Navy
    accentColor: '#F97316', // Dynamic Orange
    backgroundColor: '#0F172A', // Dark Navy / Slate or #F8FAFC
    cardBg: '#1E293B',
    textColor: '#F8FAFC',
    fontHeading: 'Montserrat',
    fontBody: 'Inter',
    sampleBadge: '🚀 Tech & Bento'
  },
  'creative-art': {
    id: 'creative-art',
    name: 'Creative Studio & Watercolor Canvas',
    description: 'Nền giấy vẽ nghệ thuật, dải màu cổ điển và đương đại cho Mĩ thuật & Âm nhạc',
    capHocRecommended: 'ALL',
    primaryColor: '#E07A5F', // Terracotta
    secondaryColor: '#3D405B', // Deep indigo
    accentColor: '#81B29A', // Sage green
    backgroundColor: '#FAF6F0', // Off-white textured canvas
    cardBg: '#FFFFFF',
    textColor: '#2B2D42',
    fontHeading: 'Montserrat',
    fontBody: 'Inter',
    sampleBadge: '🖌️ Art & Studio'
  },
  'heroic-inspiring': {
    id: 'heroic-inspiring',
    name: 'Heroic & Inspiring (Đội - Lịch Sử)',
    description: 'Trang trọng, nhiệt huyết với sắc đỏ cờ và ánh vàng sao cho Lịch sử & Hoạt động Đội',
    capHocRecommended: 'ALL',
    primaryColor: '#DA251D', // National Red
    secondaryColor: '#FFCD00', // Star Gold
    accentColor: '#B91C1C', // Dark Crimson
    backgroundColor: '#FFFFFF',
    cardBg: '#FEF2F2',
    textColor: '#18181B',
    fontHeading: 'Montserrat',
    fontBody: 'Inter',
    sampleBadge: '⭐ Heroic Red'
  }
};
