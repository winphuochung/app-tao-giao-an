import React, { useState, useEffect } from 'react';
import {
  FileText,
  Presentation,
  Gamepad2,
  Sparkles,
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  CompleteLessonPlan,
  LessonMetadata,
  SlideThemeId,
  GiaoAnWordData
} from './types';
import { SAMPLE_LESSONS } from './data/sampleLessons';
import { SLIDE_THEMES } from './data/themes';
import { exportGiaoAnToDocx } from './services/docxExport';
import { exportSlideDeckToPptx } from './services/pptxExport';
import { generateLessonPlanWithAI, generateIntelligentPlan } from './services/aiGenerator';
import { FullCurriculumLessonItem } from './data/textbookData';
import { calculateLessonDuration } from './utils/durationCalculator';

import { Header } from './components/Header';
import { SidebarControl } from './components/SidebarControl';
import { LessonPlanEditor } from './components/LessonPlanEditor';
import { SlideDeckPreview } from './components/SlideDeckPreview';
import { InteractiveQuizGame } from './components/InteractiveQuizGame';
import { AnimationStoryboardModal } from './components/AnimationStoryboardModal';
import { ApiKeyModal } from './components/ApiKeyModal';
import { InfographicPromptModal } from './components/InfographicPromptModal';
import { InfographicWorksheet } from './components/InfographicWorksheet';
import { TextbookExplorerModal } from './components/TextbookExplorerModal';
import { AiLessonAnalysisModal } from './components/AiLessonAnalysisModal';
import { GeminiBridgeModal } from './components/GeminiBridgeModal';
import { GEMINI_WEB_URL, buildGeminiLessonPrompt } from './utils/geminiBridge';

type ActiveTab = 'giao-an' | 'phieu-hoc-tap' | 'slide-deck' | 'quiz-game';

export const App: React.FC = () => {
  // Initial lesson plan state (mặc định chuẩn bài 8 KHTN 7 theo yêu cầu)
  const [currentPlan, setCurrentPlan] = useState<CompleteLessonPlan>(
    SAMPLE_LESSONS['thcs-khtn-7-toc-do'] || SAMPLE_LESSONS['tieu-hoc-toan-3']
  );

  const [activeTab, setActiveTab] = useState<ActiveTab>('giao-an');
  const [selectedThemeId, setSelectedThemeId] = useState<SlideThemeId>('3d-pixar');
  const [apiKey, setApiKey] = useState<string>('');
  
  // Loading & status states
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isExportingDocx, setIsExportingDocx] = useState<boolean>(false);
  const [isExportingPptx, setIsExportingPptx] = useState<boolean>(false);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'info' | 'error' } | null>(null);

  // Modals
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState<boolean>(false);
  const [isStoryboardModalOpen, setIsStoryboardModalOpen] = useState<boolean>(false);
  const [isInfographicModalOpen, setIsInfographicModalOpen] = useState<boolean>(false);
  const [isTextbookModalOpen, setIsTextbookModalOpen] = useState<boolean>(false);
  const [isAnalysisModalOpen, setIsAnalysisModalOpen] = useState<boolean>(false);
  const [isGeminiBridgeModalOpen, setIsGeminiBridgeModalOpen] = useState<boolean>(false);

  // Load API key from localStorage on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('edutech_gemini_api_key');
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  // 1. Quản lý State & Cache: Lắng nghe sự thay đổi của Khối lớp, Bộ sách, Môn học, Tên bài học
  // Đảm bảo không lưu đệm hình ảnh bài cũ và đồng bộ dữ liệu chuẩn bài mới
  const currentMeta = currentPlan.giaoAn.metadata;
  const lessonIdentityKey = `${currentMeta.khoiLop}|${currentMeta.boSach}|${currentMeta.monHoc}|${currentMeta.tenBaiDay}`;
  const prevLessonKeyRef = React.useRef(lessonIdentityKey);

  useEffect(() => {
    if (prevLessonKeyRef.current !== lessonIdentityKey) {
      prevLessonKeyRef.current = lessonIdentityKey;
      // Invalidate old caches and enforce authentic duration formula
      const isTH = currentMeta.capHoc === 'TIEU_HOC' || Number(currentMeta.khoiLop) <= 5;
      const expectedDuration = calculateLessonDuration(currentMeta.soTiet || '2 tiết', isTH);
      if (currentMeta.thoiLuong !== expectedDuration) {
        setCurrentPlan(prev => ({
          ...prev,
          giaoAn: {
            ...prev.giaoAn,
            metadata: {
              ...prev.giaoAn.metadata,
              thoiLuong: expectedDuration
            }
          }
        }));
      }
    }
  }, [lessonIdentityKey, currentMeta.thoiLuong, currentMeta.soTiet, currentMeta.capHoc, currentMeta.khoiLop]);

  const showNotification = (message: string, type: 'success' | 'info' | 'error' = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3500);
  };

  const handleSaveApiKey = (key: string) => {
    setApiKey(key);
    localStorage.setItem('edutech_gemini_api_key', key);
    showNotification('Đã lưu Google Gemini API Key an toàn trên trình duyệt!');
  };

  const handleLoadSample = (sampleKey: string) => {
    const sample = SAMPLE_LESSONS[sampleKey];
    if (sample) {
      setCurrentPlan(sample);
      setSelectedThemeId(sample.slideDeck.themeId);
      showNotification(`Đã tải mẫu giáo án & slide chuẩn: ${sample.giaoAn.metadata.tenBaiDay}`);
    }
  };

  const handleCurriculumLessonSelect = (
    lessonItem: FullCurriculumLessonItem,
    grade: number,
    subject: string
  ) => {
    // 1. Tải bài mẫu chuẩn bám sát 100% SGK nếu chọn các bài chuẩn
    const isKhtn = /khoa học tự nhiên|khtn/i.test(subject);
    const isToan = /toán/i.test(subject);

    if (isKhtn && grade === 7 && (lessonItem.id === 'khtn-7-bai-8' || lessonItem.id === 'thcs-khtn-7-toc-do' || /tốc độ chuyển động/i.test(lessonItem.name))) {
      handleLoadSample('thcs-khtn-7-toc-do');
      return;
    }
    if (isKhtn && grade === 7 && (lessonItem.id === 'khtn-7-bai-9' || lessonItem.id === 'thcs-khtn-7-bai-9' || /đo tốc độ/i.test(lessonItem.name))) {
      handleLoadSample('thcs-khtn-7-bai-9');
      return;
    }
    if (isToan && grade === 3 && (lessonItem.id === 'toan-3-hinh-tron' || /hình tròn.*tâm.*bán kính/i.test(lessonItem.name))) {
      handleLoadSample('tieu-hoc-toan-3');
      return;
    }
    if (isToan && grade === 6 && (lessonItem.id === 'toan-6-truc-doi-xung' || /trục đối xứng/i.test(lessonItem.name))) {
      handleLoadSample('thcs-toan-6');
      return;
    }

    // 2. Với TẤT CẢ các bài khác: lập tức soạn và cập nhật giáo án chuẩn cho đúng bài đó!
    const isTieuHoc = grade <= 5;
    let calculatedWeek = 'Tuần 1';
    if (lessonItem.ppct) {
      const match = lessonItem.ppct.match(/\d+/);
      if (match) {
        const periodNum = parseInt(match[0], 10);
        const week = Math.max(1, Math.ceil(periodNum / 2));
        calculatedWeek = `Tuần ${week}`;
      }
    }

    const newMetadata: LessonMetadata = {
      ...currentPlan.giaoAn.metadata,
      capHoc: isTieuHoc ? 'TIEU_HOC' : 'THCS',
      congVan: isTieuHoc ? '2345/BGDĐT-GDTH' : '5512/BGDĐT-GDTrH',
      khoiLop: grade,
      monHoc: subject,
      tenBaiDay: lessonItem.name,
      soTiet: lessonItem.periods || '2 tiết',
      tietTheoPPCT: lessonItem.ppct || '',
      thoiLuong: calculateLessonDuration(lessonItem.periods || '2 tiết', isTieuHoc),
      tuanThucHien: calculatedWeek
    };

    const newPlan = generateIntelligentPlan(newMetadata, selectedThemeId);
    setCurrentPlan(newPlan);
    showNotification(`✅ Đã nạp & soạn xong giáo án: ${lessonItem.name}`);
  };

  const handleMetadataChange = (newMetadata: LessonMetadata) => {
    setCurrentPlan((prev) => ({
      ...prev,
      giaoAn: {
        ...prev.giaoAn,
        metadata: newMetadata
      }
    }));
  };

  const handleThemeChange = (newThemeId: SlideThemeId) => {
    setSelectedThemeId(newThemeId);
    setCurrentPlan((prev) => ({
      ...prev,
      slideDeck: {
        ...prev.slideDeck,
        themeId: newThemeId,
        themeConfig: SLIDE_THEMES[newThemeId]
      }
    }));
    showNotification(`Đã áp dụng phong cách Slide: ${SLIDE_THEMES[newThemeId].name}`);
  };

  const handleGiaoAnChange = (updatedGiaoAn: GiaoAnWordData) => {
    setCurrentPlan((prev) => ({
      ...prev,
      giaoAn: updatedGiaoAn
    }));
  };

  // AI Generation trigger - Tự động liên kết Google Gemini & Soạn toàn diện
  const handleGeneratePlan = async () => {
    setIsGenerating(true);

    // 1. Tự động Copy Prompt chuẩn sư phạm của bài này vào Clipboard
    try {
      const promptText = buildGeminiLessonPrompt(currentPlan.giaoAn.metadata);
      navigator.clipboard.writeText(promptText);
    } catch {
      // ignore
    }

    // 2. Tự động mở đúng link Google Gemini theo yêu cầu
    try {
      window.open(GEMINI_WEB_URL, '_blank');
    } catch {
      // ignore
    }

    // 3. Tự động chạy bộ máy AI trong App để soạn toàn diện Kế hoạch bài dạy Word & Slide PowerPoint cho bài này
    try {
      const generated = await generateLessonPlanWithAI(
        currentPlan.giaoAn.metadata,
        selectedThemeId,
        apiKey
      );
      setCurrentPlan(generated);
      showNotification(`🚀 Đã mở Google Gemini và tự động soạn xong Giáo án & Slide: ${generated.giaoAn.metadata.tenBaiDay}`, 'success');
    } catch (err: any) {
      console.error(err);
      showNotification(`Lỗi khi tạo giáo án: ${err.message || 'Vui lòng thử lại'}`, 'error');
    } finally {
      setIsGenerating(false);
    }
  };

  // Export DOCX
  const handleExportDocx = async () => {
    setIsExportingDocx(true);
    try {
      await exportGiaoAnToDocx(currentPlan.giaoAn);
      showNotification('Đã xuất thành công file Word (.DOCX) chuẩn thể thức!');
    } catch (err: any) {
      console.error('Lỗi khi xuất DOCX:', err);
      showNotification('Không thể xuất file Word: ' + err.message, 'error');
    } finally {
      setIsExportingDocx(false);
    }
  };

  // Export PPTX
  const handleExportPptx = async () => {
    setIsExportingPptx(true);
    try {
      await exportSlideDeckToPptx(currentPlan.slideDeck, currentPlan.giaoAn.metadata.tenBaiDay);
      showNotification('Đã xuất thành công file PowerPoint (.PPTX) 16:9 chuyên nghiệp!');
    } catch (err: any) {
      console.error('Lỗi khi xuất PPTX:', err);
      showNotification('Không thể xuất file PowerPoint: ' + err.message, 'error');
    } finally {
      setIsExportingPptx(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      
      {/* 1. Header Navigation */}
      <Header
        currentPlan={currentPlan}
        onExportDocx={handleExportDocx}
        onExportPptx={handleExportPptx}
        onOpenApiKeyModal={() => setIsApiKeyModalOpen(true)}
        onOpenStoryboardModal={() => setIsStoryboardModalOpen(true)}
        onOpenInfographicModal={() => setIsInfographicModalOpen(true)}
        onOpenGeminiBridgeModal={() => setIsGeminiBridgeModalOpen(true)}
        onOpenTextbookModal={() => setIsTextbookModalOpen(true)}
        onLoadSample={handleLoadSample}
        isExportingDocx={isExportingDocx}
        isExportingPptx={isExportingPptx}
      />

      {/* Floating Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce">
          <div className={`px-4 py-3 rounded-xl shadow-xl border flex items-center gap-2.5 text-xs font-semibold ${
            notification.type === 'error'
              ? 'bg-rose-600 text-white border-rose-500'
              : notification.type === 'info'
              ? 'bg-blue-600 text-white border-blue-500'
              : 'bg-emerald-600 text-white border-emerald-500'
          }`}>
            <CheckCircle2 className="w-4 h-4" />
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      {/* 2. Main Workspace Layout */}
      <main className="flex-1 max-w-[1600px] w-full mx-auto p-3 sm:p-5 lg:p-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          
          {/* Left Column: Sidebar Control Panel */}
          <SidebarControl
            metadata={currentPlan.giaoAn.metadata}
            selectedThemeId={selectedThemeId}
            onMetadataChange={handleMetadataChange}
            onThemeChange={handleThemeChange}
            onGeneratePlan={handleGeneratePlan}
            isGenerating={isGenerating}
            onOpenTextbookModal={() => setIsTextbookModalOpen(true)}
            onSelectSampleLesson={handleLoadSample}
            onSelectCurriculumLesson={handleCurriculumLessonSelect}
            onOpenGeminiBridgeModal={() => setIsGeminiBridgeModalOpen(true)}
          />

          {/* Right Column: Main Content with 3 Tabs */}
          <div className="flex-1 w-full space-y-4">
            
            {/* Tab Buttons Navigation */}
            <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-1.5 overflow-x-auto">
              
              <button
                type="button"
                onClick={() => setActiveTab('giao-an')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 flex-shrink-0 ${
                  activeTab === 'giao-an'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>1. Kế Hoạch Bài Dạy (Word)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('phieu-hoc-tap')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 flex-shrink-0 ${
                  activeTab === 'phieu-hoc-tap'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>2. Phiếu Học Tập Infographic</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('slide-deck')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 flex-shrink-0 ${
                  activeTab === 'slide-deck'
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Presentation className="w-4 h-4" />
                <span>3. Slide Bài Giảng (.PPTX)</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('quiz-game')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1.5 flex-shrink-0 ${
                  activeTab === 'quiz-game'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span>4. Trò Chơi Khởi Động</span>
              </button>

            </div>

            {/* Tab 1: Kế hoạch bài dạy (Word .DOCX) */}
            {activeTab === 'giao-an' && (
              <LessonPlanEditor
                data={currentPlan.giaoAn}
                onChange={handleGiaoAnChange}
                onExportDocx={handleExportDocx}
                isExporting={isExportingDocx}
                aiReport={currentPlan.aiAnalysisReport}
                onOpenAnalysisModal={() => setIsAnalysisModalOpen(true)}
              />
            )}

            {/* Tab 2: Phiếu học tập Infographic */}
            {activeTab === 'phieu-hoc-tap' && (
              <div className="space-y-4">
                <InfographicWorksheet data={currentPlan.giaoAn} />
              </div>
            )}

            {/* Tab 3: Slide Bài Giảng (PowerPoint .PPTX) */}
            {activeTab === 'slide-deck' && (
              <SlideDeckPreview
                slideDeck={currentPlan.slideDeck}
                lessonTitle={currentPlan.giaoAn.metadata.tenBaiDay}
                onExportPptx={handleExportPptx}
                isExporting={isExportingPptx}
              />
            )}

            {/* Tab 3: Trò chơi Khởi động tương tác */}
            {activeTab === 'quiz-game' && (
              <InteractiveQuizGame
                questions={currentPlan.quizGame}
                lessonTitle={currentPlan.giaoAn.metadata.tenBaiDay}
                onExportPptx={handleExportPptx}
              />
            )}

          </div>

        </div>
      </main>

      {/* 3. Footer */}
      <footer className="bg-white border-t border-slate-200 mt-12 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © 2026 <strong>EdTech GDPT 2018 Solution</strong> • Tuân thủ Nghị định 30/2020/NĐ-CP, Công văn 2345/BGDĐT-GDTH & Công văn 5512/BGDĐT-GDTrH.
          </p>
          <div className="flex gap-4">
            <span className="text-slate-400">Xuất file .docx với thư viện docx</span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-400">Xuất file .pptx với thư viện PptxGenJS</span>
          </div>
        </div>
      </footer>

      {/* 4. Modals */}
      <AnimationStoryboardModal
        isOpen={isStoryboardModalOpen}
        onClose={() => setIsStoryboardModalOpen(false)}
        slideDeck={currentPlan.slideDeck}
        capHoc={currentPlan.giaoAn.metadata.capHoc}
        lessonTitle={currentPlan.giaoAn.metadata.tenBaiDay}
      />

      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        apiKey={apiKey}
        onSaveApiKey={handleSaveApiKey}
      />

      <InfographicPromptModal
        isOpen={isInfographicModalOpen}
        onClose={() => setIsInfographicModalOpen(false)}
        currentPlan={currentPlan}
      />

      <TextbookExplorerModal
        isOpen={isTextbookModalOpen}
        onClose={() => setIsTextbookModalOpen(false)}
        onApplyLesson={(plan) => {
          setCurrentPlan(plan);
          setSelectedThemeId(plan.slideDeck.themeId);
          showNotification(`Đã đồng bộ thành công bài học từ SGK: ${plan.giaoAn.metadata.tenBaiDay}`);
        }}
        currentGrade={currentPlan.giaoAn.metadata.khoiLop}
        currentSubject={currentPlan.giaoAn.metadata.monHoc}
      />

      <AiLessonAnalysisModal
        isOpen={isAnalysisModalOpen}
        onClose={() => setIsAnalysisModalOpen(false)}
        metadata={currentPlan.giaoAn.metadata}
        aiReport={currentPlan.aiAnalysisReport}
        isAnalyzing={isGenerating}
        onExportDocx={handleExportDocx}
        onExportPptx={handleExportPptx}
      />

      <GeminiBridgeModal
        isOpen={isGeminiBridgeModalOpen}
        onClose={() => setIsGeminiBridgeModalOpen(false)}
        currentPlan={currentPlan}
        onApplyPlan={(updated) => {
          setCurrentPlan(updated);
          showNotification(`✅ Đã nạp thành công Giáo án Word & Slide PPTX từ Google Gemini: ${updated.giaoAn.metadata.tenBaiDay}`, 'success');
        }}
        onAutoGenerateInApp={handleGeneratePlan}
        isGeneratingInApp={isGenerating}
      />

    </div>
  );
};
