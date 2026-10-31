import React, { useState } from 'react';
import {
  X,
  BookOpen,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  FileText,
  Target,
  Image as ImageIcon,
  Compass,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle
} from 'lucide-react';
import { TEXTBOOK_LESSONS, SgkLessonDetail, getFullLessonsForGradeAndSubject, FullCurriculumLessonItem } from '../data/textbookData';
import { CompleteLessonPlan, LessonMetadata } from '../types';
import { SAMPLE_KHTN_7_TOC_DO } from '../data/sampleKhtn7';
import { SAMPLE_KHTN_7_BAI_9_DO_TOC_DO } from '../data/sampleKhtn7Bai9';
import { SAMPLE_LESSONS } from '../data/sampleLessons';
import { generateIntelligentPlan } from '../services/aiGenerator';

interface TextbookExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyLesson: (plan: CompleteLessonPlan) => void;
  currentGrade?: number;
  currentSubject?: string;
}

export const TextbookExplorerModal: React.FC<TextbookExplorerModalProps> = ({
  isOpen,
  onClose,
  onApplyLesson,
  currentGrade = 7,
  currentSubject = 'Khoa học tự nhiên'
}) => {
  const availableLessons = getFullLessonsForGradeAndSubject(currentGrade, currentSubject);
  const initialLessonId = availableLessons[0]?.id || 'khtn-7-bai-8';
  const [selectedLessonId, setSelectedLessonId] = useState<string>(initialLessonId);
  const [activeTab, setActiveTab] = useState<'muc-tieu' | 'de-muc-sgk' | 'hinh-anh'>('de-muc-sgk');

  if (!isOpen) return null;

  const foundInCatalog = availableLessons.find(l => l.id === selectedLessonId) || availableLessons[0];

  const currentLesson: SgkLessonDetail = TEXTBOOK_LESSONS[selectedLessonId] || {
    id: foundInCatalog?.id || 'bai-hoc',
    capHoc: currentGrade <= 5 ? 'TIEU_HOC' : 'THCS',
    khoiLop: currentGrade,
    monHoc: currentSubject,
    boSach: 'Kết nối tri thức với cuộc sống',
    chuong: foundInCatalog?.chapter || 'Chương trình GDPT 2018',
    tenBaiDay: foundInCatalog?.name || 'Bài học chuẩn SGK',
    soTiet: foundInCatalog?.periods || '2 tiết',
    tietTheoPPCT: foundInCatalog?.ppct || 'Tiết 1 - 2',
    thoiLuong: currentGrade <= 5 ? '35 phút' : (foundInCatalog?.periods === '1 tiết' ? '45 phút' : '90 phút'),
    tuanThucHien: 'Tuần 1',
    sgkUrl: `https://taphuan.nxbgd.vn/tap-huan?grade=${currentGrade}`,
    sgkTrang: `SGK Lớp ${currentGrade}`,
    yeuCauCanDat: {
      kienThuc: [
        `Nắm vững các khái niệm, định nghĩa và kiến thức cốt lõi của bài "${foundInCatalog?.name || 'Bài học'}" theo SGK Kết nối tri thức.`,
        `Khai thác và phân tích các sơ đồ, tranh ảnh, dữ liệu thực tiễn được trình bày trong sách giáo khoa.`,
        `Vận dụng linh hoạt kiến thức bài học để giải quyết các câu hỏi, bài tập và tình huống đời sống.`
      ],
      nangLucDacThu: [
        `Năng lực nhận thức và tư duy bộ môn ${currentSubject}.`,
        `Năng lực giải quyết vấn đề và mô hình hóa gắn liền với bài học.`
      ],
      nangLucChung: [
        `Năng lực tự chủ và tự học: Chủ động chuẩn bị đồ dùng học tập, nghiên cứu trước nội dung bài học trong SGK.`,
        `Năng lực giao tiếp và hợp tác: Tích cực thảo luận nhóm 4 vai trò với 4 màu mực chống thụ động, chia sẻ và phản biện xây dựng.`
      ],
      phamChat: [
        'Chăm chỉ: Tích cực tham gia các hoạt động học tập trên lớp và hoàn thành bài tập về nhà.',
        'Trung thực: Báo cáo trung thực kết quả thí nghiệm, số liệu bài làm và đánh giá công bằng kết quả của bạn.',
        'Trách nhiệm: Có ý thức bảo quản đồ dùng học tập, thiết bị trường học và giữ gìn môi trường.'
      ],
      nangLucSo: [
        `Khai thác học liệu số và SGK điện tử tại cổng thông tin https://taphuan.nxbgd.vn/tap-huan?grade=${currentGrade}`
      ]
    },
    noiDungDeMuc: [
      {
        deMuc: `I. Khám phá & Nhận diện tri thức cốt lõi`,
        tomTat: `Học sinh tự quan sát tranh ảnh và nghiên cứu nội dung mở đầu trong SGK để nhận diện vấn đề bài học, tự rút ra khái niệm ban đầu.`,
        cauHoiKhaiThac: [
          `1. Quan sát hình ảnh và sơ đồ mở đầu trong SGK: Em phát hiện thấy dấu hiệu nào nổi bật nhất?`,
          `2. Hãy đặt câu hỏi thảo luận về hiện tượng thực tiễn gắn liền với bài học?`,
          `3. Thảo luận cặp đôi và tự phát biểu định nghĩa theo cách hiểu của em.`
        ],
        hinhAnh: {
          tenHinh: `Hình 1: Học liệu trực quan mở đầu đề mục I (SGK ${currentSubject} ${currentGrade} - Kết nối tri thức)`,
          moTa: `Hình ảnh/sơ đồ trực quan mở đầu bài học trong SGK giúp học sinh quan sát, kích thích tư duy khám phá.`,
          cauHoiKhaiThac: [
            `Quan sát hình ảnh và nêu những đặc điểm nhận diện chính của bài học.`
          ]
        }
      },
      {
        deMuc: `II. Phân tích quy tắc, tính chất & Thao tác thực hành`,
        tomTat: `Chiếm lĩnh tri thức trọng tâm qua từng đề mục SGK, lấy học sinh làm trung tâm, thảo luận nhóm 4 vai trò (4 màu mực chống thụ động) và tự rút ra kết luận khoa học.`,
        cauHoiKhaiThac: [
          `1. Đọc kĩ nội dung đề mục trong SGK: Nêu các bước tiến hành hoặc quy tắc vàng cần ghi nhớ?`,
          `2. Thảo luận nhóm: Phân tích mối quan hệ giữa các thành phần trong bài học.`,
          `3. Ghi chép vào phiếu học tập và hoàn thiện sản phẩm nhóm.`
        ],
        hinhAnh: {
          tenHinh: `Hình 2: Sơ đồ cấu trúc kiến thức trọng tâm & Quy trình thực hành (SGK ${currentSubject} ${currentGrade})`,
          moTa: `Sơ đồ hệ thống hóa kiến thức cốt lõi và các bước vận dụng của bài học.`,
          cauHoiKhaiThac: [
            `Dựa vào sơ đồ, hãy nhắc lại quy tắc/công thức chính của bài học.`
          ]
        }
      }
    ]
  };

  const handleApply = () => {
    if (selectedLessonId === 'khtn-7-bai-8' || /tốc độ chuyển động/i.test(foundInCatalog?.name || '')) {
      onApplyLesson(SAMPLE_KHTN_7_TOC_DO);
    } else if (selectedLessonId === 'khtn-7-bai-9' || /đo tốc độ/i.test(foundInCatalog?.name || '')) {
      onApplyLesson(SAMPLE_KHTN_7_BAI_9_DO_TOC_DO);
    } else if (selectedLessonId === 'toan-3-hinh-tron' || /hình tròn/i.test(foundInCatalog?.name || '')) {
      onApplyLesson(SAMPLE_LESSONS['tieu-hoc-toan-3']);
    } else if (selectedLessonId === 'toan-6-truc-doi-xung' || /trục đối xứng/i.test(foundInCatalog?.name || '')) {
      onApplyLesson(SAMPLE_LESSONS['thcs-toan-6']);
    } else {
      const isTieuHoc = currentGrade <= 5;
      const targetLesson = foundInCatalog;
      const meta: LessonMetadata = {
        capHoc: isTieuHoc ? 'TIEU_HOC' : 'THCS',
        congVan: isTieuHoc ? '2345/BGDĐT-GDTH' : '5512/BGDĐT-GDTrH',
        khoiLop: currentGrade,
        monHoc: currentSubject,
        boSach: 'Kết nối tri thức với cuộc sống',
        tenBaiDay: targetLesson?.name || currentLesson.tenBaiDay,
        soTiet: targetLesson?.periods || currentLesson.soTiet || '2 tiết',
        tietTheoPPCT: targetLesson?.ppct || currentLesson.tietTheoPPCT || '',
        thoiLuong: isTieuHoc ? '35 phút' : (targetLesson?.periods === '1 tiết' ? '45 phút' : '90 phút'),
        tuanThucHien: 'Tuần 1',
        tichHop: {
          nangLucSo: true,
          stem: false,
          anToanGiaoThong: false,
          kyNangSong: true,
          baoVeMoiTruong: false,
          quocPhongAnNinh: false,
          dinhDuongSucKhoe: false
        }
      };
      const plan = generateIntelligentPlan(meta, '3d-pixar');
      onApplyLesson(plan);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Header */}
        <div className="px-6 py-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold">
                  Thư Viện Sách Giáo Khoa Điện Tử & Đồng Bộ Tri Thức
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-amber-400 text-slate-900 shadow-xs">
                  GDPT 2018
                </span>
              </div>
              <p className="text-xs text-blue-100">
                Bộ Sách Giáo Khoa Dùng Chung của Bộ GD&ĐT: "Kết nối tri thức với cuộc sống" (NXBGD)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentLesson.sgkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/15 hover:bg-white/25 text-white transition-all border border-white/20"
            >
              <span>Xem SGK Gốc (NXBGD)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Lesson Quick Selector Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2 overflow-x-auto flex-shrink-0">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex-shrink-0 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Bài học SGK ({availableLessons.length} bài):
          </span>
          {availableLessons.map((item: FullCurriculumLessonItem) => (
            <button
              key={item.id}
              onClick={() => setSelectedLessonId(item.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedLessonId === item.id
                  ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-400/30'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{item.name}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-normal ${
                selectedLessonId === item.id ? 'bg-blue-700 text-blue-100' : 'bg-slate-100 text-slate-500'
              }`}>
                {item.periods}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Lesson Overview Banner */}
        <div className="px-6 py-3 bg-indigo-50/70 border-b border-indigo-100 flex flex-wrap items-center justify-between gap-3 text-xs flex-shrink-0">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <span className="font-bold text-indigo-950 text-sm">
                {currentLesson.tenBaiDay}
              </span>
              <span className="px-2 py-0.5 rounded bg-indigo-200 text-indigo-900 font-semibold text-[11px]">
                {currentLesson.chuong}
              </span>
            </div>
            <p className="text-slate-600 text-[11px]">
              SGK {currentLesson.monHoc} {currentLesson.khoiLop} - {currentLesson.boSach} • <span className="font-semibold text-indigo-800">{currentLesson.sgkTrang}</span> • Phân phối chương trình: <span className="font-semibold text-slate-800">{currentLesson.tietTheoPPCT}</span> ({currentLesson.soTiet} - {currentLesson.thoiLuong})
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center p-1 bg-white rounded-lg border border-indigo-200 shadow-xs">
            <button
              onClick={() => setActiveTab('de-muc-sgk')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'de-muc-sgk'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Nội Dung SGK (4 Đề Mục)</span>
            </button>
            <button
              onClick={() => setActiveTab('hinh-anh')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'hinh-anh'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Hình Ảnh SGK Đưa Vào Giáo Án</span>
            </button>
            <button
              onClick={() => setActiveTab('muc-tieu')}
              className={`px-3 py-1 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 ${
                activeTab === 'muc-tieu'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Yêu Cầu Cần Đạt (Mục Tiêu)</span>
            </button>
          </div>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          
          {/* TAB 1: 4 ĐỀ MỤC SGK */}
          {activeTab === 'de-muc-sgk' && (
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl flex items-center justify-between text-xs text-blue-900">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>
                    Toàn bộ 4 đề mục kiến thức chuẩn được bóc tách trực tiếp từ Sách Giáo Khoa Khoa học tự nhiên 7 (Kết nối tri thức), sẵn sàng nạp vào Giáo án Công văn 5512 và Slide.
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentLesson.noiDungDeMuc.map((muc, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-indigo-900 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                          {idx + 1}
                        </span>
                        {muc.deMuc}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 font-medium bg-slate-50 p-2.5 rounded-lg border border-slate-100 leading-relaxed">
                      {muc.tomTat}
                    </p>

                    {/* Image Preview Thumbnail */}
                    {muc.hinhAnh?.imageUrl && (
                      <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-100 group relative">
                        <img
                          src={muc.hinhAnh.imageUrl}
                          alt={muc.hinhAnh.tenHinh}
                          className="w-full h-32 object-cover object-center group-hover:scale-102 transition-transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2">
                          <span className="text-[11px] font-bold text-white truncate">
                            {muc.hinhAnh.tenHinh}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Pedagogical Questions */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <HelpCircle className="w-3 h-3 text-amber-500" /> Hệ thống câu hỏi định hướng SGK:
                      </label>
                      <ul className="text-xs text-slate-600 space-y-1 pl-2">
                        {muc.cauHoiKhaiThac.map((q, qIdx) => (
                          <li key={qIdx} className="line-clamp-2">
                            • {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: HÌNH ẢNH SGK */}
          {activeTab === 'hinh-anh' && (
            <div className="space-y-4">
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-900 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>
                    Hình ảnh mô tả SGK được đưa TRỰC TIẾP vào từng dòng đề mục tương ứng trong Bảng 2 Cột của Giáo án (.DOCX) và Slide PowerPoint (.PPTX).
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentLesson.noiDungDeMuc.map((muc, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 bg-white hover:shadow-md transition-all space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4 text-blue-600" />
                        {muc.hinhAnh.tenHinh}
                      </h4>
                    </div>

                    <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-900 flex items-center justify-center">
                      <img
                        src={muc.hinhAnh.imageUrl}
                        alt={muc.hinhAnh.tenHinh}
                        className="w-full max-h-48 object-contain"
                      />
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      <strong className="text-slate-800">Mô tả SGK:</strong> {muc.hinhAnh.moTa}
                    </p>

                    <div className="p-2.5 bg-amber-50/70 border border-amber-200 rounded-lg text-[11px] text-amber-900">
                      <strong>Ghi chú sư phạm:</strong> {muc.hinhAnh.ghiChuSuPham || 'Lấy học sinh làm trung tâm, tự quan sát hình ảnh và rút ra kết luận.'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: YÊU CẦU CẦN ĐẠT (MỤC TIÊU) */}
          {activeTab === 'muc-tieu' && (
            <div className="space-y-4 text-xs">
              {/* Kiến thức */}
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2">
                <h4 className="font-bold text-sm text-blue-900 flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-600" /> 1. Về Kiến thức (Chuẩn Thông tư 32/2018/TT-BGDĐT)
                </h4>
                <ul className="space-y-1.5 pl-5 list-disc text-slate-700">
                  {currentLesson.yeuCauCanDat.kienThuc.map((item, i) => (
                    <li key={i} className="leading-relaxed">{item}</li>
                  ))}
                </ul>
              </div>

              {/* Năng lực đặc thù & Chung */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
                  <h4 className="font-bold text-sm text-emerald-900 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-emerald-600" /> 2.1. Năng lực Đặc thù KHTN
                  </h4>
                  <ul className="space-y-1.5 pl-5 list-disc text-slate-700">
                    {currentLesson.yeuCauCanDat.nangLucDacThu.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2">
                  <h4 className="font-bold text-sm text-purple-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-600" /> 2.2. Năng lực Chung
                  </h4>
                  <ul className="space-y-1.5 pl-5 list-disc text-slate-700">
                    {currentLesson.yeuCauCanDat.nangLucChung.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Năng lực số CV 3456 & An toàn giao thông */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200 space-y-2">
                  <h4 className="font-bold text-sm text-cyan-900 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-cyan-600" /> 2.3. Năng lực Số (CV 3456/BGDĐT-GDPT)
                  </h4>
                  <ul className="space-y-1.5 pl-5 list-disc text-slate-700">
                    {currentLesson.yeuCauCanDat.nangLucSo.map((item, i) => (
                      <li key={i} className="leading-relaxed font-medium">{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-2">
                  <h4 className="font-bold text-sm text-amber-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-600" /> 3. Phẩm chất & An Toàn Giao Thông
                  </h4>
                  <ul className="space-y-1.5 pl-5 list-disc text-slate-700">
                    {currentLesson.yeuCauCanDat.phamChat.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                    {currentLesson.yeuCauCanDat.tichHopATGT?.map((item, i) => (
                      <li key={`atgt-${i}`} className="leading-relaxed text-rose-800 font-semibold">
                        🚦 {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between flex-shrink-0">
          <div className="text-xs text-slate-500 hidden sm:block">
            Nhấn <strong className="text-slate-800">"Áp Dụng Vào Giáo Án & Slide"</strong> để tải ngay giáo án chuẩn CV 5512 với đầy đủ hình ảnh SGK.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Đóng
            </button>
            <button
              onClick={handleApply}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md shadow-indigo-200 flex items-center gap-2 active:scale-98 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Áp Dụng Vào Giáo Án & Slide (1 Click)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
