import { useState } from 'react';
import { Eye, Sparkles } from 'lucide-react';
import { HISTORY_MILESTONES } from '../../data/slidesData';
import { ResilientImage } from '../ResilientImage';

export function SlideHistory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [enhancedContrast, setEnhancedContrast] = useState(false);

  const active = HISTORY_MILESTONES[activeIndex];

  return (
    <section
      aria-label="Lịch sử phát minh tia X"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-4 px-4 py-4 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-3">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            Lịch sử phát minh &amp; Giải mã bản chất
          </p>
          <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-slate-50 text-balance">
            Từ ẩn số "X" năm 1895 đến Giải Nobel Vật lí
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
          <span>Năm 1895</span>
          <span aria-hidden="true">·</span>
          <span>Nobel Vật lí 1901</span>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-12">
        {/* Left: Interactive timeline milestones */}
        <div className="animate-stagger-1 flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-[#0D131F] p-5 lg:col-span-7">
          <div>
            <div
              className="grid grid-cols-1 gap-2 sm:grid-cols-3"
              role="tablist"
              aria-label="Các mốc lịch sử tia X 1895 - 1901"
            >
              {HISTORY_MILESTONES.map((m, idx) => {
                const selected = idx === activeIndex;
                return (
                  <button
                    key={m.headline}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveIndex(idx)}
                    className={`rounded-lg border px-3 py-2 text-left transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      selected
                        ? 'border-cyan-400 bg-cyan-950/40 text-cyan-200'
                        : 'border-slate-800 bg-slate-900/70 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <span className="block font-mono text-xs font-bold text-cyan-400">
                      {m.year}
                    </span>
                    <span className="mt-0.5 block truncate text-xs font-semibold">
                      {m.scientist}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="font-mono font-semibold text-amber-400">{active.year}</span>
                <span aria-hidden="true">·</span>
                <span>{active.scientist}</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-50">
                {active.headline}
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">{active.detail}</p>
              <div className="rounded-lg border border-cyan-500/25 bg-cyan-950/20 p-3.5">
                <p className="text-sm font-medium text-cyan-200">{active.highlight}</p>
              </div>
            </div>
          </div>

          {/* Concise summary box covering all 1895 historical points */}
          <div className="grid grid-cols-1 gap-3 border-t border-slate-800 pt-4 sm:grid-cols-3 text-xs">
            <div className="rounded-lg bg-slate-900/80 p-3 border border-slate-800/80">
              <p className="font-semibold text-slate-200">Hiện tượng 1895</p>
              <p className="mt-1 text-slate-400">
                Ống tia cathode bọc giấy đen kín vẫn làm phát quang màn huỳnh quang gần đó.
              </p>
            </div>
            <div className="rounded-lg bg-slate-900/80 p-3 border border-slate-800/80">
              <p className="font-semibold text-slate-200">Tên gọi "Tia X"</p>
              <p className="mt-1 text-slate-400">
                "X" tượng trưng cho ẩn số toán học, còn gọi là tia Rơn-ghen.
              </p>
            </div>
            <div className="rounded-lg bg-slate-900/80 p-3 border border-slate-800/80">
              <p className="font-semibold text-slate-200">Giải Nobel 1901</p>
              <p className="mt-1 text-slate-400">
                Röntgen nhận giải Nobel Vật lí đầu tiên trong lịch sử nhờ phát minh vĩ đại này.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Historical 1895 radiograph artifact with interactive contrast inspector & animated scanline */}
        <div className="animate-stagger-2 flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-5 lg:col-span-5">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div>
              <p className="text-xs font-semibold text-slate-200">
                Bức ảnh X-quang đầu tiên (22/12/1895)
              </p>
              <p className="text-xs text-slate-400">Bàn tay đeo nhẫn của vợ ông</p>
            </div>
            <button
              type="button"
              onClick={() => setEnhancedContrast((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                enhancedContrast
                  ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200'
                  : 'border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {enhancedContrast ? (
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              ) : (
                <Eye className="w-3.5 h-3.5" aria-hidden="true" />
              )}
              {enhancedContrast ? 'Chế độ tăng tương phản' : 'Soi tương phản xương'}
            </button>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-slate-800 bg-black h-[320px] lg:h-[395px]">
            <ResilientImage
              src="/src/assets/images/history_roentgen_hand_1795609044288.jpg"
              alt="Ảnh chụp X-quang lịch sử năm 1895 bàn tay đeo nhẫn của vợ Röntgen"
              fallbackTitle="Bản phim X-quang bàn tay đeo nhẫn năm 1895"
              className={`h-full w-full object-contain transition-all duration-300 ${
                enhancedContrast ? 'contrast-150 brightness-110 saturate-0' : ''
              }`}
            />
            {/* Animated radiographic scanner line */}
            <div
              aria-hidden="true"
              className="animate-scan-y pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent border-b border-cyan-300/40"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
            />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
              <span>Xương &amp; nhẫn kim loại cản tia mạnh hơn mô mềm</span>
              <span className="font-mono text-cyan-300">Nobel 1901</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
