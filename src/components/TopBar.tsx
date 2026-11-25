import { LayoutGrid } from 'lucide-react';

interface TopBarProps {
  currentSlide: number;
  onSelectSlide: (index: number) => void;
  onOpenOverview: () => void;
}

const NAV_TARGETS = [
  { label: 'Lịch sử', slideIndex: 1, matchRange: [1, 2] },
  { label: 'Tạo tia X', slideIndex: 3, matchRange: [3, 6] },
  { label: 'Tính chất', slideIndex: 7, matchRange: [7, 8] },
  { label: 'Ứng dụng', slideIndex: 9, matchRange: [9, 13] },
  { label: 'An toàn', slideIndex: 14, matchRange: [14, 15] },
];

export function TopBar({ currentSlide, onSelectSlide, onOpenOverview }: TopBarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-800/80 bg-[#070B12]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between gap-8 px-4 py-3 sm:px-6">
        {/* Zone 1: Single-element brand wordmark */}
        <button
          type="button"
          onClick={() => onSelectSlide(0)}
          className="font-display text-lg font-bold tracking-tight text-slate-50 hover:text-cyan-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1"
        >
          Tia X · Vật lí 12
        </button>

        {/* Zone 2: 5 concise single-line section navigation links */}
        <nav
          aria-label="Điều hướng chương thuyết trình"
          className="hidden md:flex items-center gap-6 text-sm font-medium"
        >
          {NAV_TARGETS.map((item) => {
            const isActive =
              currentSlide >= item.matchRange[0] && currentSlide <= item.matchRange[1];
            return (
              <button
                key={item.label}
                type="button"
                onClick={() => onSelectSlide(item.slideIndex)}
                className={`relative py-1 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded px-1 ${
                  isActive
                    ? 'text-cyan-300'
                    : 'text-slate-400 hover:text-slate-100'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-1 -bottom-0.5 h-0.5 bg-cyan-400 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onOpenOverview}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-cyan-500/60 hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            <LayoutGrid className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
            Mục lục slide
          </button>
        </div>
      </div>
    </header>
  );
}
