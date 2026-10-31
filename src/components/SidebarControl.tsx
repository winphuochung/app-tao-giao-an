import React from 'react';
import {
  Sparkles,
  BookOpen,
  GraduationCap,
  Layers,
  Palette,
  School,
  FileCheck2,
  RefreshCw,
  ExternalLink,
  Users,
  Clock,
  UserCheck
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
import { calculateLessonDuration } from '../utils/durationCalculator';

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
  onOpenGeminiBridgeModal?: () => void;
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
  onSelectCurriculumLesson,
  onOpenGeminiBridgeModal
}) => {

  const isTieuHoc = metadata.capHoc === 'TIEU_HOC';

  const handleCapHocChange = (newCap: CapHoc) => {
    const newKhoi = newCap === 'TIEU_HOC' ? 3 : 7;
    const unifiedBook: BoSach = 'Kết nối tri thức với cuộc sống';
    const newMon = newCap === 'TIEU_HOC' ? 'Toán' : 'Khoa học tự nhiên';
    const catalog = getFullLessonsForGradeAndSubject(newKhoi, newMon);

    const chosenLesson = catalog[0];
    const initialPeriods = chosenLesson ? chosenLesson.periods : '2 tiết';
    const newDuration = calculateLessonDuration(initialPeriods, newCap === 'TIEU_HOC');

    const updatedMeta: LessonMetadata = {
      ...metadata,
      capHoc: newCap,
      congVan: newCap === 'TIEU_HOC' ? '2345/BGDĐT-GDTH' : '5512/BGDĐT-GDTrH',
      khoiLop: newKhoi,
      boSach: unifiedBook,
      thoiLuong: newDuration,
      monHoc: newMon,
      tenBaiDay: chosenLesson ? chosenLesson.name : metadata.tenBaiDay,
      soTiet: initialPeriods,
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
      currentMon = subjects[0];
    }

    const catalog = getFullLessonsForGradeAndSubject(grade, currentMon);
    const chosenLesson = catalog[0];
    const periods = chosenLesson ? chosenLesson.periods : metadata.soTiet;
    const duration = calculateLessonDuration(periods, isTieuHoc);

    const updatedMeta: LessonMetadata = {
      ...metadata,
      khoiLop: grade,
      monHoc: currentMon,
      thoiLuong: duration,
      tenBaiDay: chosenLesson ? chosenLesson.name : metadata.tenBaiDay,
      soTiet: periods,
      tietTheoPPCT: chosenLesson?.ppct || metadata.tietTheoPPCT
    };

    onMetadataChange(updatedMeta);

    if (chosenLesson && onSelectCurriculumLesson) {
      onSelectCurriculumLesson(chosenLesson, grade, currentMon);
    }
  };

  const handleMonHocChange = (newMon: string) => {
    const catalog = getFullLessonsForGradeAndSubject(metadata.khoiLop, newMon);
    const chosenLesson = catalog[0];
    const periods = chosenLesson ? chosenLesson.periods : metadata.soTiet;
    const duration = calculateLessonDuration(periods, isTieuHoc);

    const updatedMeta: LessonMetadata = {
      ...metadata,
      monHoc: newMon,
      thoiLuong: duration,
      tenBaiDay: chosenLesson ? chosenLesson.name : metadata.tenBaiDay,
      soTiet: periods,
      tietTheoPPCT: chosenLesson?.ppct || metadata.tietTheoPPCT
    };

    onMetadataChange(updatedMeta);

    if (chosenLesson && onSelectCurriculumLesson) {
      onSelectCurriculumLesson(chosenLesson, metadata.khoiLop, newMon);
    }
  };

  const handleSoTietChange = (soTietStr: string) => {
    const autoDuration = calculateLessonDuration(soTietStr, isTieuHoc);
    onMetadataChange({
      ...metadata,
      soTiet: soTietStr,
      thoiLuong: autoDuration
    });
  };

  const handleSelectLesson = (lessonId: string) => {
    if (lessonId === 'custom') return;

    const fullLessons = getFullLessonsForGradeAndSubject(metadata.khoiLop, metadata.monHoc);
    const found = fullLessons.find((l) => l.id === lessonId);
    if (!found) return;

    const autoDuration = calculateLessonDuration(found.periods || metadata.soTiet, isTieuHoc);

    const updatedMeta: LessonMetadata = {
      ...metadata,
      tenBaiDay: found.name,
      soTiet: found.periods || metadata.soTiet,
      tietTheoPPCT: found.ppct || metadata.tietTheoPPCT,
      thoiLuong: autoDuration
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
    <aside className="w-full lg:w-96 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-6 relative flex flex-col justify-between">
      
      <div className="space-y-6 pb-20">
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

        {/* 2. Thông tin trường, Tổ bộ môn & Giáo viên (Tự động điền lên đầu bản Word) */}
        <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <School className="w-4 h-4 text-indigo-600" /> Thông tin Hành chính Giáo viên
          </label>
          
          <div>
            <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Tên trường học</label>
            <input
              type="text"
              value={metadata.truong || ''}
              onChange={(e) => onMetadataChange({ ...metadata, truong: e.target.value })}
              placeholder="VD: Trường THCS Nguyễn Du"
              className="w-full text-xs font-medium bg-white border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Tổ chuyên môn</label>
              <input
                type="text"
                value={metadata.toChuyenMon || ''}
                onChange={(e) => onMetadataChange({ ...metadata, toChuyenMon: e.target.value })}
                placeholder="VD: Tổ KHTN"
                className="w-full text-xs font-medium bg-white border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-600 mb-0.5">Họ và tên giáo viên</label>
              <input
                type="text"
                value={metadata.giaoVien || ''}
                onChange={(e) => onMetadataChange({ ...metadata, giaoVien: e.target.value })}
                placeholder="VD: Thầy/Cô Nguyễn Văn A"
                className="w-full text-xs font-medium bg-white border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* 3. Khối lớp & Bộ sách giáo khoa (Được mở rộng hiển thị đầy đủ, không bị ...) */}
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Khối lớp
              </label>
              <select
                value={metadata.khoiLop}
                onChange={(e) => handleKhoiLopChange(Number(e.target.value))}
                className="w-full text-xs font-bold bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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

            <div className="col-span-2">
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Bộ Sách Giáo Khoa (GDPT 2018)
              </label>
              <select
                value={metadata.boSach}
                onChange={(e) => onMetadataChange({ ...metadata, boSach: e.target.value as BoSach })}
                className="w-full text-xs font-bold bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                title={metadata.boSach}
              >
                <option value="Kết nối tri thức với cuộc sống">Kết nối tri thức với cuộc sống (Bộ GD&ĐT)</option>
                <option value="Chân trời sáng tạo">Chân trời sáng tạo</option>
                <option value="Cánh Diều">Cánh Diều</option>
                <option value="Khác / Chung">Bộ sách khác / Dùng chung</option>
              </select>
            </div>
          </div>

          {/* Cổng kết nối SGK tinh gọn (Không bị nút trùng lặp) */}
          <div className="p-2.5 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border border-emerald-300 rounded-xl flex items-center justify-between gap-2 shadow-2xs">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 truncate">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span className="truncate">Cổng SGK Điện Tử Lớp {metadata.khoiLop}</span>
            </div>
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <a
                href={getOfficialTextbookUrl(metadata.khoiLop)}
                target="_blank"
                rel="noopener noreferrer"
                title={`Mở SGK điện tử NXBGD`}
                className="py-1 px-2 rounded-md text-[11px] font-bold text-emerald-800 bg-white hover:bg-emerald-100 border border-emerald-300 transition-colors flex items-center gap-1"
              >
                <span>Mở Cổng</span>
                <ExternalLink className="w-3 h-3 text-emerald-600" />
              </a>
              {onOpenTextbookModal && (
                <button
                  type="button"
                  onClick={onOpenTextbookModal}
                  className="py-1 px-2 rounded-md text-[11px] font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-2xs"
                >
                  Nạp Đề Mục
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 4. Môn học (Chỉ 1 Dropdown duy nhất - Bỏ chip trùng lặp) */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs font-bold text-slate-800">
              Môn học (GDPT 2018 - Lớp {metadata.khoiLop})
            </label>
            <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              Chuẩn 100% môn học
            </span>
          </div>

          <select
            value={metadata.monHoc}
            onChange={(e) => handleMonHocChange(e.target.value)}
            className="w-full text-xs font-bold bg-white border-2 border-indigo-400 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-800 shadow-2xs cursor-pointer"
          >
            {getSubjectsForGrade(metadata.khoiLop).map((sub) => (
              <option key={sub} value={sub}>
                📘 Môn: {sub}
              </option>
            ))}
          </select>
        </div>

        {/* 5. Tuần, Số tiết & Thời lượng chuẩn hóa */}
        <div className="space-y-2.5">
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
                onChange={(e) => handleSoTietChange(e.target.value)}
                placeholder="2 tiết"
                className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1 flex items-center justify-between">
                <span>Thời lượng</span>
                <span className="text-[10px] font-bold text-emerald-600">✓ Tự tính</span>
              </label>
              <input
                type="text"
                value={metadata.thoiLuong}
                onChange={(e) => onMetadataChange({ ...metadata, thoiLuong: e.target.value })}
                placeholder={isTieuHoc ? '35 phút/tiết' : '45 phút/tiết'}
                className="w-full text-xs font-bold text-indigo-900 bg-indigo-50/50 border border-indigo-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Sĩ số lớp học & Đặc điểm học sinh (Phục vụ cá nhân hóa sư phạm) */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-blue-600" /> Sĩ số (Chia nhóm)
              </label>
              <input
                type="text"
                value={metadata.siSoLop || ''}
                onChange={(e) => onMetadataChange({ ...metadata, siSoLop: e.target.value })}
                placeholder="VD: 40 HS (8 nhóm)"
                className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-700 mb-1 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-emerald-600" /> Đặc điểm học sinh
              </label>
              <input
                type="text"
                value={metadata.dacDiemHocSinh || ''}
                onChange={(e) => onMetadataChange({ ...metadata, dacDiemHocSinh: e.target.value })}
                placeholder="VD: Nhóm 4 màu mực..."
                className="w-full text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* 6. Chọn bài học trong SGK hoặc tự điền */}
        {(() => {
          const fullLessons = getFullLessonsForGradeAndSubject(metadata.khoiLop, metadata.monHoc);
          
          const grouped = fullLessons.reduce((acc, item) => {
            const ch = item.chapter || 'Danh mục chung';
            if (!acc[ch]) acc[ch] = [];
            acc[ch].push(item);
            return acc;
          }, {} as Record<string, FullCurriculumLessonItem[]>);

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
                  {fullLessons.length} bài chuẩn SGK
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

              {/* Tên bài dạy chi tiết */}
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

              {/* Bài mẫu chuẩn bám sát SGK */}
              <div className="pt-2 border-t border-blue-200">
                <span className="text-[10.5px] font-bold text-blue-900 block mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-500" /> Bài mẫu chuẩn bám sát SGK:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => onSelectSampleLesson && onSelectSampleLesson('thcs-khtn-7-toc-do')}
                    className="px-2 py-1 text-[11px] font-bold text-blue-900 bg-white hover:bg-blue-100 active:scale-95 border border-blue-400 rounded-lg shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                  >
                    ⚡ Bài 8: Tốc độ chuyển động (KHTN 7)
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectSampleLesson && onSelectSampleLesson('thcs-khtn-7-bai-9')}
                    className="px-2 py-1 text-[11px] font-bold text-blue-900 bg-white hover:bg-blue-100 active:scale-95 border border-blue-400 rounded-lg shadow-2xs transition-all flex items-center gap-1 cursor-pointer"
                  >
                    ⚡ Bài 9: Đo tốc độ (KHTN 7)
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

        {/* 7. Tùy chọn tích hợp GDPT 2018 */}
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
          </div>
        </div>

        {/* 8. Phong cách Slide PowerPoint */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1.5">
            <Palette className="w-4 h-4 text-purple-600" /> Phong cách Slide PowerPoint
          </label>
          <div className="grid grid-cols-2 gap-2">
            {Object.values(SLIDE_THEMES).slice(0, 4).map((theme) => {
              const isSelected = theme.id === selectedThemeId;
              return (
                <div
                  key={theme.id}
                  onClick={() => onThemeChange(theme.id)}
                  className={`p-2 rounded-xl border text-xs cursor-pointer transition-all ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-500/20 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between font-bold text-slate-800 text-[11px]">
                    <span className="truncate">{theme.name}</span>
                    <span
                      className="w-3 h-3 rounded-full border border-black/10 flex-shrink-0"
                      style={{ backgroundColor: theme.primaryColor }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* 9. STICKY BOTTOM PRIMARY ACTION BUTTON: LUÔN GHIM CỐ ĐỊNH Ở ĐÁY CỘT BÊN TRÁI */}
      <div className="sticky bottom-0 -mx-5 -mb-5 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-lg rounded-b-2xl z-20">
        <button
          type="button"
          onClick={onGeneratePlan}
          disabled={isGenerating}
          className="w-full py-3.5 px-4 rounded-xl font-black text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 active:scale-98 shadow-md shadow-indigo-300 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
        >
          {isGenerating ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-amber-300" />
              <span>AI Đang Soạn Giáo Án & Slide...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Tạo Kế Hoạch Bài Dạy (AI GDPT 2018)</span>
            </>
          )}
        </button>
      </div>

    </aside>
  );
};
