import React from 'react';
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Layers,
  Palette,
  CheckSquare,
  Clock,
  School,
  FileCheck2,
  RefreshCw,
  ExternalLink,
  Link2,
  CheckCircle2
} from 'lucide-react';
import {
  CapHoc,
  BoSach,
  SlideThemeId,
  LessonMetadata
} from '../types';
import { SLIDE_THEMES } from '../data/themes';
import {
  getFullLessonsForGradeAndSubject,
  getSubjectsForGrade,
  getOfficialTextbookUrl,
  FullCurriculumLessonItem
} from '../data/textbookData';

interface SidebarControlProps {
  metadata: LessonMetadata;
  selectedThemeId: SlideThemeId;
  onMetadataChange: (meta: LessonMetadata) => void;
  onThemeChange: (themeId: SlideThemeId) => void;
  onGeneratePlan: () => void;
  isGenerating: boolean;
  onOpenTextbookModal?: () => void;
  onSelectSampleLesson?: (sampleKey: string) => void;
  onSelectCurriculumLesson?: (lesson: FullCurriculumLessonItem, grade: number, subject: string) => void;
}

export const SidebarControl: React.FC<SidebarControlProps> = ({
  metadata,
  selectedThemeId,
  onMetadataChange,
  onThemeChange,
  onGeneratePlan,
  isGenerating,
  onOpenTextbookModal,
  onSelectSampleLesson,
  onSelectCurriculumLesson
}) => {

  const handleCapHocChange = (newCap: CapHoc) => {
    const newKhoi = newCap === 'TIEU_HOC' ? 3 : 7;
    const unifiedBook: BoSach = 'Kết nối tri thức với cuộc sống';
    const newMon = newCap === 'TIEU_HOC' ? 'Toán' : 'Khoa học tự nhiên';
    const catalog = getFullLessonsForGradeAndSubject(newKhoi, newMon);

    let chosenLesson = catalog[0];

    const updatedMeta: LessonMetadata = {
      ...metadata,
      capHoc: newCap,
      congVan: newCap === 'TIEU_HOC' ? '2345/BGDĐT-GDTH' : '5512/BGDĐT-GDTrH',
      khoiLop: newKhoi,
      boSach: unifiedBook,
      thoiLuong: newCap === 'TIEU_HOC' ? '35 phút' : '90 phút',
      monHoc: newMon,
      tenBaiDay: chosenLesson ? chosenLesson.name : metadata.tenBaiDay,
      soTiet: chosenLesson ? chosenLesson.periods : metadata.soTiet,
      tietTheoPPCT: chosenLesson?.ppct || metadata.tietTheoPPCT
    };

    onMetadataChange(updatedMeta);

    if (chosenLesson && onSelectCurriculumLesson) {
      onSelectCurriculumLesson(chosenLesson, newKhoi, newMon);
    }

    if (newCap === 'TIEU_HOC') {
      onThemeChange('3d-pixar');
    } else {
      onThemeChange('modern-stem');
    }
  };

  const handleKhoiLopChange = (grade: number) => {
    const subjects = getSubjectsForGrade(grade);
    let currentMon = metadata.monHoc;
    
    // Check if current subject is valid for the new grade
    const hasMon = subjects.some(s => s.toLowerCase() === currentMon.toLowerCase());
    if (!hasMon) {
      currentMon = subjects[0]; // e.g. 'Toán' for primary, 'Khoa học tự nhiên' for secondary
    }

    const catalog = getFullLessonsForGradeAndSubject(grade, currentMon);
    let chosenLesson = catalog[0];

    const updatedMeta: LessonMetadata = {
      ...metadata,
      khoiLop: grade,
      monHoc: currentMon,
      boSach: metadata.boSach || 'Kết nối tri thức với cuộc sống',
      tenBaiDay: chosenLesson ? chosenLesson.name : metadata.tenBaiDay,
      soTiet: chosenLesson ? chosenLesson.periods : metadata.soTiet,
      tietTheoPPCT: chosenLesson?.ppct || metadata.tietTheoPPCT,
      thoiLuong: grade <= 5 ? '35 phút' : (chosenLesson?.periods === '1 tiết' ? '45 phút' : '90 phút')
    };

    onMetadataChange(updatedMeta);

    if (chosenLesson && onSelectCurriculumLesson) {
      onSelectCurriculumLesson(chosenLesson, grade, currentMon);
    }
  };

  const handleMonHocChange = (newMon: string) => {
    const catalog = getFullLessonsForGradeAndSubject(metadata.khoiLop, newMon);
    let chosenLesson = catalog[0];

    const updatedMeta: LessonMetadata = {
      ...metadata,
      monHoc: newMon,
      tenBaiDay: chosenLesson ? chosenLesson.name : metadata.tenBaiDay,
      soTiet: chosenLesson ? chosenLesson.periods : metadata.soTiet,
      tietTheoPPCT: chosenLesson?.ppct || metadata.tietTheoPPCT
    };

    onMetadataChange(updatedMeta);

    if (chosenLesson && onSelectCurriculumLesson) {
      onSelectCurriculumLesson(chosenLesson, metadata.khoiLop, newMon);
    }
  };

  const handleSelectLesson = (lessonId: string) => {
    if (!lessonId || lessonId === 'custom') return;
    const catalog = getFullLessonsForGradeAndSubject(metadata.khoiLop, metadata.monHoc);
    const found = catalog.find(l => l.id === lessonId);
    if (!found) return;

    const updatedMeta: LessonMetadata = {
      ...metadata,
      tenBaiDay: found.name,
      soTiet: found.periods || metadata.soTiet,
      tietTheoPPCT: found.ppct || metadata.tietTheoPPCT,
      thoiLuong: metadata.capHoc === 'TIEU_HOC' ? '35 phút' : (found.periods === '1 tiết' ? '45 phút' : '90 phút')
    };

    onMetadataChange(updatedMeta);

    if (onSelectCurriculumLesson) {
      onSelectCurriculumLesson(found, metadata.khoiLop, metadata.monHoc);
    } else if (onSelectSampleLesson) {
      if (found.id === 'khtn-7-bai-8' || /tốc độ chuyển động/i.test(found.name)) {
        onSelectSampleLesson('thcs-khtn-7-toc-do');
      } else if (found.id === 'khtn-7-bai-9' || /đo tốc độ/i.test(found.name)) {
        onSelectSampleLesson('thcs-khtn-7-bai-9');
      } else if (found.id === 'toan-3-hinh-tron' || /hình tròn/i.test(found.name)) {
        onSelectSampleLesson('tieu-hoc-toan-3');
      } else if (found.id === 'toan-6-truc-doi-xung' || /trục đối xứng/i.test(found.name)) {
        onSelectSampleLesson('thcs-toan-6');
      }
    }
  };

  const toggleTichHop = (key: keyof LessonMetadata['tichHop']) => {
    onMetadataChange({
      ...metadata,
      tichHop: {
        ...metadata.tichHop,
        [key]: !metadata.tichHop[key]
      }
    });
  };

  return (
    <aside className="w-full lg:w-96 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-6">
      
      {/* 1. Chọn Cấp học */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
          <GraduationCap className="w-4 h-4 text-blue-600" /> Cấp học & Công văn Bộ GD&ĐT
        </label>
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
          <button
            type="button"
            onClick={() => handleCapHocChange('TIEU_HOC')}
            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
              metadata.capHoc === 'TIEU_HOC'
                ? 'bg-white text-rose-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Tiểu Học (CV 2345)
          </button>
          <button
            type="button"
            onClick={() => handleCapHocChange('THCS')}
            className={`py-2 px-3 rounded-lg text-xs font-bold transition-all ${
              metadata.capHoc === 'THCS'
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            THCS (CV 5512)
          </button>
        </div>
      </div>

      {/* 2. Khối lớp & Bộ sách giáo khoa */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Khối lớp
          </label>
          <select
            value={metadata.khoiLop}
            onChange={(e) => handleKhoiLopChange(Number(e.target.value))}
            className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            {metadata.capHoc === 'TIEU_HOC' ? (
              <>
                <option value={1}>Lớp 1</option>
                <option value={2}>Lớp 2</option>
                <option value={3}>Lớp 3</option>
                <option value={4}>Lớp 4</option>
                <option value={5}>Lớp 5</option>
              </>
            ) : (
              <>
                <option value={6}>Lớp 6</option>
                <option value={7}>Lớp 7</option>
                <option value={8}>Lớp 8</option>
                <option value={9}>Lớp 9</option>
              </>
            )}
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Bộ Sách Giáo Khoa (Dùng chung)
          </label>
          <select
            value={metadata.boSach}
            onChange={(e) => onMetadataChange({ ...metadata, boSach: e.target.value as BoSach })}
            className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="Kết nối tri thức với cuộc sống">Kết nối tri thức với cuộc sống (Bộ GD&ĐT)</option>
            <option value="Chân trời sáng tạo">Chân trời sáng tạo</option>
            <option value="Cánh Diều">Cánh Diều</option>
            <option value="Khác / Chung">Bộ sách khác / Dùng chung</option>
          </select>
        </div>
      </div>

      {/* Cổng Kết Nối Sách Giáo Khoa Điện Tử NXB Giáo Dục Việt Nam */}
      <div className="p-3 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-300 rounded-xl space-y-2 shadow-xs">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 font-bold text-emerald-900">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="truncate">Cổng SGK Điện Tử Lớp {metadata.khoiLop}</span>
          </div>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-600 text-white font-bold flex-shrink-0">
            NXBGD Việt Nam
          </span>
        </div>

        <a
          href={getOfficialTextbookUrl(metadata.khoiLop)}
          target="_blank"
          rel="noopener noreferrer"
          title={`Mở đường link SGK https://taphuan.nxbgd.vn/tap-huan?grade=${metadata.khoiLop}`}
          className="block text-[11px] text-emerald-800 hover:text-emerald-900 font-mono break-all bg-white/80 p-1.5 rounded border border-emerald-200 transition-colors"
        >
          🔗 {getOfficialTextbookUrl(metadata.khoiLop)}
        </a>

        <div className="flex items-center gap-2 pt-0.5">
          <a
            href={getOfficialTextbookUrl(metadata.khoiLop)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-1.5 px-2 rounded-lg text-[11px] font-bold text-emerald-900 bg-white hover:bg-emerald-100 border border-emerald-300 transition-all flex items-center justify-center gap-1 shadow-xs"
          >
            <span>Mở taphuan.nxbgd.vn</span>
            <ExternalLink className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
          </a>

          <button
            type="button"
            onClick={onOpenTextbookModal}
            className="py-1.5 px-2.5 rounded-lg text-[11px] font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-xs whitespace-nowrap"
          >
            Tra Cứu & Nạp SGK
          </button>
        </div>
      </div>

      {/* 3. Môn học, Tuần thực hiện & Thời lượng */}
      <div className="space-y-2.5">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-xs font-bold text-slate-800">
              Môn học (Lớp {metadata.khoiLop})
            </label>
            <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              Đầy đủ các môn GDPT 2018
            </span>
          </div>

          {/* Subject Dropdown Selector */}
          <select
            value={metadata.monHoc}
            onChange={(e) => handleMonHocChange(e.target.value)}
            className="w-full text-xs font-bold bg-white border-2 border-indigo-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-800 shadow-xs cursor-pointer mb-2"
          >
            {getSubjectsForGrade(metadata.khoiLop).map((sub) => (
              <option key={sub} value={sub}>
                📘 Môn: {sub}
              </option>
            ))}
          </select>

          {/* Quick Subject Chips */}
          <div className="flex flex-wrap gap-1.5">
            {getSubjectsForGrade(metadata.khoiLop).map((sub) => {
              const isSelected = metadata.monHoc.toLowerCase() === sub.toLowerCase();
              return (
                <button
                  key={sub}
                  type="button"
                  onClick={() => handleMonHocChange(sub)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all flex items-center gap-1 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-xs ring-2 ring-blue-300'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  <span>{sub}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Tuần
            </label>
            <input
              type="text"
              value={metadata.tuanThucHien || ''}
              onChange={(e) => onMetadataChange({ ...metadata, tuanThucHien: e.target.value })}
              placeholder="Tuần 7-8"
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Số tiết
            </label>
            <input
              type="text"
              value={metadata.soTiet}
              onChange={(e) => onMetadataChange({ ...metadata, soTiet: e.target.value })}
              placeholder="2 tiết"
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Thời lượng
            </label>
            <input
              type="text"
              value={metadata.thoiLuong}
              onChange={(e) => onMetadataChange({ ...metadata, thoiLuong: e.target.value })}
              placeholder="90 phút"
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1" title="Tiết theo Phân phối chương trình">
              Tiết theo PPCT
            </label>
            <input
              type="text"
              value={metadata.tietTheoPPCT || ''}
              onChange={(e) => onMetadataChange({ ...metadata, tietTheoPPCT: e.target.value })}
              placeholder="Tiết 28 - 29"
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Sĩ số lớp học
            </label>
            <input
              type="text"
              value={metadata.siSoLop || ''}
              onChange={(e) => onMetadataChange({ ...metadata, siSoLop: e.target.value })}
              placeholder="40 học sinh (8 nhóm)"
              className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Đặc điểm học sinh
          </label>
          <input
            type="text"
            value={metadata.dacDiemHocSinh || ''}
            onChange={(e) => onMetadataChange({ ...metadata, dacDiemHocSinh: e.target.value })}
            placeholder="Có một số em thụ động, cần nhóm 4 vai trò..."
            className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* 4. Chọn bài học trong SGK hoặc tự điền */}
      {(() => {
        const fullLessons = getFullLessonsForGradeAndSubject(metadata.khoiLop, metadata.monHoc);
        
        // Group lessons by Chapter
        const grouped = fullLessons.reduce((acc, item) => {
          const ch = item.chapter || 'Danh mục chung';
          if (!acc[ch]) acc[ch] = [];
          acc[ch].push(item);
          return acc;
        }, {} as Record<string, FullCurriculumLessonItem[]>);

        // Find currently selected lesson
        const matched = fullLessons.find(l => 
          l.name.toLowerCase() === metadata.tenBaiDay.toLowerCase() ||
          metadata.tenBaiDay.toLowerCase().includes(l.name.toLowerCase()) ||
          l.name.toLowerCase().includes(metadata.tenBaiDay.toLowerCase())
        );
        const selectedId = matched ? matched.id : 'custom';

        return (
          <div className="space-y-2 p-3 bg-blue-50/50 border-2 border-blue-200 rounded-2xl shadow-xs">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-bold text-blue-950 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-600" /> Mục lục SGK {metadata.monHoc} {metadata.khoiLop}
              </label>
              <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full border border-blue-300">
                Toàn bộ {fullLessons.length} bài chuẩn SGK
              </span>
            </div>

            {/* Dropdown chọn bài chuẩn SGK */}
            <select
              value={selectedId}
              onChange={(e) => handleSelectLesson(e.target.value)}
              className="w-full text-xs font-bold bg-white border-2 border-blue-400 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none text-blue-950 shadow-xs cursor-pointer"
            >
              <option value="custom">-- Chọn bài trong toàn bộ SGK {metadata.monHoc} Lớp {metadata.khoiLop} ({fullLessons.length} bài) --</option>
              {Object.entries(grouped).map(([chapter, items]) => (
                <optgroup key={chapter} label={chapter}>
                  {items.map((l) => (
                    <option key={l.id} value={l.id}>
                      📖 {l.name} ({l.periods}{l.ppct ? ` • ${l.ppct}` : ''})
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>

            {/* Tên bài dạy chi tiết (Tự động điền theo bài đã chọn ở trên) */}
            <div className="pt-1">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-[11px] font-bold text-slate-700">
                  Tên bài dạy chi tiết:
                </label>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded flex items-center gap-1 border border-emerald-300">
                  ✓ Tự động điền theo SGK
                </span>
              </div>
              <textarea
                rows={2}
                value={metadata.tenBaiDay}
                onChange={(e) => onMetadataChange({ ...metadata, tenBaiDay: e.target.value })}
                placeholder="Tên bài dạy sẽ tự động điền khi chọn ở mục lục SGK phía trên..."
                className="w-full text-xs font-semibold text-slate-900 bg-white border border-blue-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none shadow-xs"
              />
            </div>

            {/* Nút Đồng Bộ Nhanh nếu Giáo viên tự gõ / chỉnh sửa tên bài */}
            <div className="flex items-center justify-between gap-2 pt-1">
              <span className="text-[10px] text-slate-500 italic">
                * Có thể tự gõ tên bài hoặc chọn từ mục lục SGK ở trên
              </span>
              <button
                type="button"
                onClick={onGeneratePlan}
                disabled={isGenerating}
                className="px-3 py-1.5 rounded-xl text-xs font-black text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition-all flex items-center gap-1.5 shadow-sm whitespace-nowrap cursor-pointer"
                title="Bấm để AI tự động phân tích bài học, liên kết SGK và bóc tách đề mục soạn Giáo án Word"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                <span>⚡ Soạn ngay bài này</span>
              </button>
            </div>

            {/* Quick Pick Sample Lessons */}
            <div className="pt-2.5 border-t border-blue-200">
              <span className="text-[10.5px] font-bold text-blue-900 block mb-1.5 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" /> Bài mẫu chuẩn bám sát SGK (Tách từng đề mục):
              </span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  type="button"
                  onClick={() => onSelectSampleLesson && onSelectSampleLesson('thcs-khtn-7-bai-9')}
                  className="px-2 py-1 text-[11px] font-bold text-blue-900 bg-white hover:bg-blue-100 active:scale-95 border border-blue-400 rounded-lg shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                >
                  ⚡ Bài 9: Đo tốc độ (KHTN 7)
                </button>
                <button
                  type="button"
                  onClick={() => onSelectSampleLesson && onSelectSampleLesson('thcs-khtn-7-toc-do')}
                  className="px-2 py-1 text-[11px] font-bold text-blue-900 bg-white hover:bg-blue-100 active:scale-95 border border-blue-400 rounded-lg shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                >
                  ⚡ Bài 8: Tốc độ chuyển động (KHTN 7)
                </button>
                <button
                  type="button"
                  onClick={() => onSelectSampleLesson && onSelectSampleLesson('thcs-toan-6')}
                  className="px-2 py-1 text-[11px] font-semibold text-slate-700 bg-white hover:bg-slate-100 active:scale-95 border border-slate-300 rounded-lg shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                >
                  Toán 6: Trục đối xứng
                </button>
                <button
                  type="button"
                  onClick={() => onSelectSampleLesson && onSelectSampleLesson('tieu-hoc-toan-3')}
                  className="px-2 py-1 text-[11px] font-semibold text-slate-700 bg-white hover:bg-slate-100 active:scale-95 border border-slate-300 rounded-lg shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                >
                  Toán 3: Hình tròn
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* 5. Thông tin trường, Tổ chuyên môn & Giáo viên */}
      <div className="grid grid-cols-3 gap-2 text-xs">
        <div>
          <label className="text-slate-600 block mb-0.5 font-medium">Tên trường học</label>
          <input
            type="text"
            value={metadata.truong || ''}
            onChange={(e) => onMetadataChange({ ...metadata, truong: e.target.value })}
            placeholder="Trường..."
            className="w-full bg-slate-50 border border-slate-200 rounded-md p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="text-slate-600 block mb-0.5 font-medium">Tổ chuyên môn</label>
          <input
            type="text"
            value={metadata.toChuyenMon || ''}
            onChange={(e) => onMetadataChange({ ...metadata, toChuyenMon: e.target.value })}
            placeholder="Tổ..."
            className="w-full bg-slate-50 border border-slate-200 rounded-md p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="text-slate-600 block mb-0.5 font-medium" title="Họ và tên giáo viên tự điền">
            Giáo viên (Tự điền)
          </label>
          <input
            type="text"
            value={metadata.giaoVien || ''}
            onChange={(e) => onMetadataChange({ ...metadata, giaoVien: e.target.value })}
            placeholder="Để trống hoặc tự điền..."
            className="w-full bg-slate-50 border border-slate-200 rounded-md p-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800 font-medium"
          />
        </div>
      </div>

      {/* 6. Tùy chọn tích hợp mở rộng */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-emerald-600" /> Tích hợp liên môn & GDPT 2018
        </label>
        <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-200">
          <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={metadata.tichHop.nangLucSo}
              onChange={() => toggleTichHop('nangLucSo')}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span className="font-semibold text-blue-900">💻 Năng lực số (Theo CV 3456/BGDĐT-GDPT)</span>
          </label>
          {metadata.tichHop.nangLucSo && (
            <div className="ml-5 p-2 rounded-lg bg-blue-50 border border-blue-200 text-[11px] text-blue-900 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-bold text-[10.5pt]">Bậc năng lực áp dụng:</span>
                <span className="px-1.5 py-0.5 bg-blue-600 text-white rounded font-bold font-mono text-[10px]">
                  {metadata.khoiLop <= 3 ? 'Bậc CB1 (Lớp 1-3)' : metadata.khoiLop <= 5 ? 'Bậc CB2 (Lớp 4-5)' : metadata.khoiLop <= 7 ? 'Bậc TC1 (Lớp 6-7)' : 'Bậc TC2 (Lớp 8-9)'}
                </span>
              </div>
              <p className="text-[10px] text-slate-600 leading-tight">
                Tự động nhúng mã chỉ báo chuẩn: <code className="font-bold text-blue-700">{metadata.khoiLop <= 3 ? '1.1.CB1a, 3.1.CB1a, 4.3.CB1a' : metadata.khoiLop <= 5 ? '1.1.CB2b, 2.2.CB2b, 3.1.CB2a' : metadata.khoiLop <= 7 ? '1.1.TC1b, 3.1.TC1a, 5.2.TC1a' : '1.2.TC2a, 2.4.TC2a, 3.1.TC2b'}</code> vào mục Yêu cầu cần đạt và Bảng 2 cột của Giáo án.
              </p>
            </div>
          )}
          <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={metadata.tichHop.stem}
              onChange={() => toggleTichHop('stem')}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span>🔬 Giáo dục STEM / Trải nghiệm sáng tạo</span>
          </label>
          <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={metadata.tichHop.anToanGiaoThong}
              onChange={() => toggleTichHop('anToanGiaoThong')}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span>🚦 Lồng ghép An toàn giao thông</span>
          </label>
          <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={metadata.tichHop.kyNangSong}
              onChange={() => toggleTichHop('kyNangSong')}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span>🤝 Rèn luyện Kỹ năng sống & Đạo đức</span>
          </label>
          <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={metadata.tichHop.baoVeMoiTruong}
              onChange={() => toggleTichHop('baoVeMoiTruong')}
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span>🌱 Giáo dục Bảo vệ môi trường xanh</span>
          </label>
          <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={metadata.tichHop.quocPhongAnNinh}
              onChange={() => toggleTichHop('quocPhongAnNinh')}
              className="rounded text-red-600 focus:ring-red-500"
            />
            <span className="font-semibold text-rose-900">🛡️ Bảo vệ an ninh quốc phòng (TT 08/2024/TT-BGDĐT)</span>
          </label>
          <label className="flex items-center gap-2 text-xs text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={metadata.tichHop.dinhDuongSucKhoe}
              onChange={() => toggleTichHop('dinhDuongSucKhoe')}
              className="rounded text-amber-600 focus:ring-amber-500"
            />
            <span className="font-semibold text-amber-900">🥗 Giáo dục Dinh dưỡng & Sức khỏe học đường</span>
          </label>
        </div>
      </div>

      {/* 7. Chọn Phong cách Slide PowerPoint */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
          <Palette className="w-4 h-4 text-purple-600" /> Phong cách Slide PowerPoint
        </label>
        <div className="space-y-2">
          {Object.values(SLIDE_THEMES).map((theme) => {
            const isSelected = theme.id === selectedThemeId;
            return (
              <div
                key={theme.id}
                onClick={() => onThemeChange(theme.id)}
                className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20 shadow-sm'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span>{theme.name}</span>
                  <div className="flex gap-1 items-center">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/10"
                      style={{ backgroundColor: theme.primaryColor }}
                    />
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-black/10"
                      style={{ backgroundColor: theme.accentColor }}
                    />
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                  {theme.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* 8. Nút kích hoạt AI Tạo Giáo Án & Slide */}
      <button
        type="button"
        onClick={onGeneratePlan}
        disabled={isGenerating}
        className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-98 shadow-md shadow-indigo-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {isGenerating ? (
          <>
            <RefreshCw className="w-4 h-4 animate-spin text-amber-300" />
            <span>AI Đang Phân Tích & Liên Kết SGK...</span>
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            <span>Tạo Giáo Án & Slide Tự Động (AI)</span>
          </>
        )}
      </button>

    </aside>
  );
};
