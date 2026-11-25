import { useEffect } from 'react';
import { X } from 'lucide-react';
import { SLIDES_META } from '../data/slidesData';

interface SlideOverviewModalProps {
  isOpen: boolean;
  currentSlide: number;
  onClose: () => void;
  onSelectSlide: (index: number) => void;
}

export function SlideOverviewModal({
  isOpen,
  currentSlide,
  onClose,
  onSelectSlide,
}: SlideOverviewModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="overview-modal-title"
    >
      <div className="w-full max-w-5xl max-h-[88vh] flex flex-col rounded-xl border border-slate-800 bg-[#0B111C] shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
          <div>
            <h2 id="overview-modal-title" className="font-display text-xl font-bold text-slate-50">
              Mục lục toàn bộ bài thuyết trình
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Chọn trang bất kỳ để chuyển nhanh · Phím tắt mũi tên Trái / Phải để chuyển trang
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng mục lục"
            className="rounded-lg border border-slate-700 bg-slate-900 p-2 text-slate-300 hover:bg-slate-800 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 overflow-y-auto">
          {SLIDES_META.map((slide) => {
            const isCurrent = slide.index === currentSlide;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  onSelectSlide(slide.index);
                  onClose();
                }}
                className={`group text-left rounded-xl border p-4 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isCurrent
                    ? 'border-cyan-400 bg-cyan-950/30'
                    : 'border-slate-800 bg-slate-900/60 hover:border-slate-600 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-xs mb-2">
                  <span className="font-mono font-semibold text-cyan-400">
                    Trang {String(slide.index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-slate-400">{slide.sectionLabel}</span>
                </div>
                <h3 className="font-display text-base font-semibold text-slate-100 group-hover:text-cyan-200 transition-colors">
                  {slide.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400 line-clamp-2">
                  {slide.summary}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
