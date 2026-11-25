import { useState } from 'react';
import { Award, CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../../data/slidesData';

export function SlideQuiz() {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [answersByQuestion, setAnswersByQuestion] = useState<Record<number, number>>({});

  const currentQuestion = QUIZ_QUESTIONS[questionIdx];
  const selectedOption = answersByQuestion[currentQuestion.id] ?? null;
  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === currentQuestion.correctIndex;

  const answeredCount = Object.keys(answersByQuestion).length;
  const score = QUIZ_QUESTIONS.reduce((acc, q) => {
    return acc + (answersByQuestion[q.id] === q.correctIndex ? 1 : 0);
  }, 0);

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setAnswersByQuestion((prev) => ({
      ...prev,
      [currentQuestion.id]: idx,
    }));
  };

  const handleNextQuestion = () => {
    setQuestionIdx((prev) => (prev + 1) % QUIZ_QUESTIONS.length);
  };

  const handleResetQuiz = () => {
    setQuestionIdx(0);
    setAnswersByQuestion({});
  };

  return (
    <section
      aria-label="Tương tác thuyết trình và trắc nghiệm củng cố"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            Tương tác thuyết trình · Củng cố kiến thức Tia X
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Câu hỏi tương tác cùng khán giả
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-mono text-sm text-slate-200">
            <Award className="w-4 h-4 text-cyan-400" aria-hidden="true" />
            <span>
              Điểm: <strong className="text-cyan-300">{score} / {QUIZ_QUESTIONS.length}</strong>
            </span>
          </div>
          <button
            type="button"
            onClick={handleResetQuiz}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            Làm lại
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: Question navigation & progress summary */}
        <div className="animate-stagger-1 flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-4">
          <div>
            <p className="text-xs font-semibold text-slate-400 mb-3">Danh sách câu hỏi</p>
            <div className="space-y-2.5">
              {QUIZ_QUESTIONS.map((q, idx) => {
                const isActive = idx === questionIdx;
                const chosen = answersByQuestion[q.id];
                const hasChoice = chosen !== undefined;
                const right = chosen === q.correctIndex;

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setQuestionIdx(idx)}
                    className={`w-full rounded-lg border p-3.5 text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isActive
                        ? 'border-cyan-400 bg-cyan-950/30'
                        : 'border-slate-800 bg-slate-900/60 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-mono font-bold text-cyan-400">Câu {idx + 1}</span>
                      {hasChoice && (
                        <span
                          className={`font-mono font-semibold ${
                            right ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          {right ? 'Đúng' : 'Sai'}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-slate-300 line-clamp-2">{q.question}</p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-4 text-xs text-slate-400 space-y-1">
            <p>
              Đã trả lời: <strong className="font-mono text-slate-200">{answeredCount} / {QUIZ_QUESTIONS.length}</strong>
            </p>
            <p>Cảm ơn thầy cô và các bạn đã lắng nghe bài thuyết trình!</p>
          </div>
        </div>

        {/* Right: Spacious auditorium-friendly Quiz Stage */}
        <div className="animate-stagger-2 flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-6 sm:p-8 lg:col-span-8">
          <div>
            <span className="font-mono text-xs font-semibold text-cyan-400">
              Câu hỏi {questionIdx + 1} / {QUIZ_QUESTIONS.length}
            </span>
            <h3 className="mt-2 font-display text-2xl font-bold text-slate-50 leading-snug">
              {currentQuestion.question}
            </h3>

            <div className="mt-6 space-y-3">
              {currentQuestion.options.map((optionText, idx) => {
                const chosen = selectedOption === idx;
                const correctOption = idx === currentQuestion.correctIndex;

                let stateClass =
                  'border-slate-800 bg-slate-900/75 text-slate-100 hover:border-cyan-500/60 hover:bg-slate-900';
                if (isAnswered) {
                  if (correctOption) {
                    stateClass = 'border-emerald-500/80 bg-emerald-950/35 text-emerald-100';
                  } else if (chosen) {
                    stateClass = 'border-rose-500/80 bg-rose-950/35 text-rose-100';
                  } else {
                    stateClass = 'border-slate-800/60 bg-slate-900/40 text-slate-500';
                  }
                }

                return (
                  <button
                    key={optionText}
                    type="button"
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`flex w-full items-center justify-between gap-4 rounded-xl border px-5 py-4 text-left text-base transition-colors cursor-pointer disabled:cursor-default focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${stateClass}`}
                  >
                    <span>
                      <span className="font-mono font-bold mr-3 text-cyan-400">
                        {String.fromCharCode(65 + idx)}.
                      </span>
                      {optionText}
                    </span>
                    {isAnswered && correctOption && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
                    )}
                    {isAnswered && chosen && !correctOption && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 border-t border-slate-800 pt-5 flex flex-wrap items-center justify-between gap-4">
            {isAnswered ? (
              <p className="text-sm leading-relaxed text-slate-200 flex-1 min-w-[240px]">
                <strong className={isCorrect ? 'text-emerald-400' : 'text-amber-300'}>
                  {isCorrect ? 'Chính xác! ' : 'Giải thích: '}
                </strong>
                {currentQuestion.explanation}
              </p>
            ) : (
              <p className="text-sm text-slate-400">
                Chọn một đáp án A, B, C hoặc D để kiểm tra nhanh cùng lớp.
              </p>
            )}

            <button
              type="button"
              onClick={handleNextQuestion}
              className="rounded-lg bg-cyan-500 px-5 py-2.5 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Câu hỏi tiếp theo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
