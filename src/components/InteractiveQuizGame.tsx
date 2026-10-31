import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Award,
  Sparkles,
  HelpCircle,
  Clock,
  RotateCcw,
  CheckCircle,
  XCircle,
  Volume2,
  VolumeX,
  ArrowRight,
  Flame,
  Presentation
} from 'lucide-react';
import { QuizQuestion } from '../types';

interface InteractiveQuizGameProps {
  questions: QuizQuestion[];
  lessonTitle: string;
  onExportPptx: () => void;
}

export const InteractiveQuizGame: React.FC<InteractiveQuizGameProps> = ({
  questions,
  lessonTitle,
  onExportPptx
}) => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [timer, setTimer] = useState<number>(20);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  const currentQ = questions[currentIdx] || questions[0];

  // Web Audio synthesizer for playful sound effects
  const playSound = (type: 'correct' | 'wrong' | 'click' | 'win') => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.connect(gain);
      gain.connect(audioCtx.destination);

      if (type === 'correct') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
        osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
        osc.frequency.setValueAtTime(783.99, audioCtx.currentTime + 0.2); // G5
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.5);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(220, audioCtx.currentTime);
        osc.frequency.setValueAtTime(180, audioCtx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.4);
      } else if (type === 'click') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.1);
      } else if (type === 'win') {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(587.33, audioCtx.currentTime);
        osc.frequency.setValueAtTime(880, audioCtx.currentTime + 0.2);
        gain.gain.setValueAtTime(0.4, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.8);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.8);
      }
    } catch (e) {
      // AudioContext fallback
    }
  };

  // Timer countdown
  useEffect(() => {
    if (!isTimerRunning || isAnswered || isFinished) return;

    if (timer <= 0) {
      handleTimeout();
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, isTimerRunning, isAnswered, isFinished]);

  const handleTimeout = () => {
    setIsAnswered(true);
    setSelectedOption(-1);
    setStreak(0);
    playSound('wrong');
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;

    setSelectedOption(idx);
    setIsAnswered(true);

    if (idx === currentQ.correctIndex) {
      setScore((s) => s + 100 + streak * 20);
      setStreak((st) => st + 1);
      playSound('correct');
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } else {
      setStreak(0);
      playSound('wrong');
    }
  };

  const handleNextQuestion = () => {
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx((c) => c + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimer(20);
      playSound('click');
    } else {
      setIsFinished(true);
      playSound('win');
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.5 }
      });
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setStreak(0);
    setIsFinished(false);
    setTimer(20);
    playSound('click');
  };

  return (
    <div className="space-y-6">
      
      {/* Top Game Bar */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold text-slate-800">
                Đấu Trường Trí Tuệ (Interactive Warm-up Game)
              </h3>
              <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-amber-100 text-amber-800">
                Trực quan trên lớp
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Trò chơi khởi động tương tác có âm thanh, pháo giấy, tính điểm & bảng giải thích sư phạm
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 rounded-lg text-xs flex items-center gap-1.5"
            title={soundEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-emerald-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            <span className="hidden sm:inline">{soundEnabled ? 'Âm thanh: Bật' : 'Âm thanh: Tắt'}</span>
          </button>

          <button
            onClick={onExportPptx}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 rounded-lg shadow-sm flex items-center gap-1.5"
          >
            <Presentation className="w-4 h-4" />
            <span>Xuất Vào Slide PowerPoint</span>
          </button>
        </div>
      </div>

      {/* Main Game Arena */}
      {!isFinished ? (
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-indigo-800/40 space-y-6 relative overflow-hidden">
          
          {/* Header Status Bar */}
          <div className="flex items-center justify-between border-b border-indigo-800/50 pb-4">
            
            {/* Question Progress */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                Câu hỏi {currentIdx + 1} / {questions.length}
              </span>
              <div className="w-24 h-2 bg-indigo-900/80 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Timer */}
            <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
              timer <= 5 ? 'bg-rose-500/20 text-rose-300 animate-pulse' : 'bg-indigo-800/60 text-indigo-200'
            }`}>
              <Clock className="w-3.5 h-3.5" />
              <span>{timer}s</span>
            </div>

            {/* Score & Streak */}
            <div className="flex items-center gap-3">
              {streak >= 2 && (
                <div className="flex items-center gap-1 text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20 animate-bounce">
                  <Flame className="w-3.5 h-3.5 fill-amber-400" />
                  <span>x{streak} Streak!</span>
                </div>
              )}
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block uppercase font-bold">Điểm số</span>
                <span className="text-sm font-black text-amber-400">{score}</span>
              </div>
            </div>

          </div>

          {/* Question Text */}
          <div className="py-4 text-center">
            <h2 className="text-lg sm:text-2xl font-bold leading-relaxed text-indigo-100">
              {currentQ.question}
            </h2>
          </div>

          {/* Options Grid (4 Options) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnStyle = 'bg-indigo-950/70 border-indigo-800/80 hover:border-indigo-500 text-indigo-100 hover:bg-indigo-900/60';
              if (isAnswered) {
                if (isCorrect) {
                  btnStyle = 'bg-emerald-600/90 border-emerald-400 text-white shadow-lg shadow-emerald-900/50 scale-102';
                } else if (isSelected) {
                  btnStyle = 'bg-rose-600/80 border-rose-400 text-white';
                } else {
                  btnStyle = 'bg-indigo-950/30 border-indigo-900/30 text-indigo-400/50 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 rounded-2xl border-2 text-left font-semibold text-xs sm:text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-xs font-black">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>

                  {isAnswered && isCorrect && (
                    <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 animate-bounce" />
                  )}
                  {isAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-300 flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation & Next Button Drawer */}
          {isAnswered && (
            <div className="bg-indigo-900/40 border border-indigo-700/50 rounded-2xl p-4 sm:p-5 space-y-3 animate-fadeIn">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> Giải thích sư phạm:
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                  {currentQ.funFact && (
                    <p className="text-xs text-amber-300 italic pt-1">
                      💡 Em có biết? {currentQ.funFact}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-slate-900 shadow-lg shadow-amber-900/30 flex items-center gap-1.5 flex-shrink-0 transition-transform active:scale-95"
                >
                  <span>{currentIdx + 1 < questions.length ? 'Câu tiếp theo' : 'Xem kết quả'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

        </div>
      ) : (
        // Finished Screen
        <div className="max-w-xl mx-auto bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 text-center shadow-xl space-y-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-lg shadow-amber-100 animate-bounce">
            <Trophy className="w-10 h-10" />
          </div>

          <div>
            <h2 className="text-2xl font-black text-slate-900">
              Xuất Sắc! Hoàn Thành Thử Thách
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Bài học: {lessonTitle}
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 grid grid-cols-2 gap-4">
            <div>
              <span className="text-xs text-slate-500 block">Tổng Điểm Đạt Được</span>
              <span className="text-2xl font-black text-blue-600">{score}</span>
            </div>
            <div>
              <span className="text-xs text-slate-500 block">Chuỗi Đúng Liên Tiếp</span>
              <span className="text-2xl font-black text-amber-600">{streak}</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleRestart}
              className="px-5 py-2.5 rounded-xl font-bold text-sm bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Chơi lại</span>
            </button>

            <button
              onClick={onExportPptx}
              className="px-5 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 text-white shadow-md shadow-orange-100 transition-all flex items-center gap-2"
            >
              <Presentation className="w-4 h-4" />
              <span>Xuất toàn bộ vào Slide</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
