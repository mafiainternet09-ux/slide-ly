import { ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { SLIDES_META } from '../data/slidesData';

interface SlideDeckControlsProps {
  currentSlide: number;
  totalSlides: number;
  isFullscreen: boolean;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
  onToggleFullscreen: () => void;
}

export function SlideDeckControls({
  currentSlide,
  totalSlides,
  isFullscreen,
  onPrev,
  onNext,
  onSelectSlide,
  onToggleFullscreen,
}: SlideDeckControlsProps) {
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === totalSlides - 1;
  const activeMeta = SLIDES_META[currentSlide];

  return (
    <footer className="sticky bottom-0 z-30 border-t border-slate-800/80 bg-[#070B12]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-4 px-4 py-2.5 sm:px-6">
        {/* Slide number & current section label */}
        <div className="flex items-center gap-3 min-w-0">
          <span className="font-mono text-xs font-semibold text-cyan-400 tabular-nums shrink-0">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
          <span className="hidden sm:inline text-slate-600" aria-hidden="true">
            ·
          </span>
          <span className="hidden sm:inline truncate text-xs text-slate-400 max-w-[260px]">
            {activeMeta?.shortTitle}
          </span>
        </div>

        {/* Interactive slide step bar */}
        <div
          className="hidden lg:flex items-center gap-1.5"
          role="tablist"
          aria-label="Chọn nhanh trang trình chiếu"
        >
          {SLIDES_META.map((slide) => {
            const active = slide.index === currentSlide;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Trang ${slide.index + 1}: ${slide.shortTitle}`}
                title={`${slide.index + 1}. ${slide.shortTitle}`}
                onClick={() => onSelectSlide(slide.index)}
                className={`h-2 rounded-full transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  active
                    ? 'w-8 bg-cyan-400'
                    : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
              />
            );
          })}
        </div>

        {/* Navigation buttons & fullscreen */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleFullscreen}
            aria-label={isFullscreen ? 'Thoát toàn màn hình' : 'Bật toàn màn hình'}
            title={isFullscreen ? 'Thoát toàn màn hình (F)' : 'Toàn màn hình (F)'}
            className="hidden sm:inline-flex items-center justify-center rounded-lg border border-slate-800 bg-slate-900/90 p-2 text-slate-300 hover:border-slate-600 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4" aria-hidden="true" />
            ) : (
              <Maximize2 className="w-4 h-4" aria-hidden="true" />
            )}
          </button>

          <button
            type="button"
            onClick={onPrev}
            disabled={isFirst}
            aria-label="Trang trước"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800 disabled:opacity-35 disabled:cursor-not-allowed transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            Trước
          </button>

          <button
            type="button"
            onClick={onNext}
            disabled={isLast}
            aria-label="Trang tiếp theo"
            className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-cyan-400 disabled:opacity-35 disabled:cursor-not-allowed transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            Tiếp theo
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
