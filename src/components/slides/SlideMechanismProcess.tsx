import { useState } from 'react';
import { Flame, Pause, Play, Zap } from 'lucide-react';

export function SlideMechanismProcess() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section
      aria-label="Cách tạo ra tia X và hiệu suất chuyển hóa năng lượng"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            1. Phương pháp tạo ra và điều khiển tia X · c. Cách tạo ra tia X
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Cơ chế tạo tia X &amp; Hiệu suất năng lượng 1% / 99%
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800 transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
              Tạm dừng mô phỏng
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
              Phát mô phỏng
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: Exact content steps + 1% / 99% breakdown */}
        <div className="animate-stagger-1 flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-5">
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-slate-50">
              Quá trình chuyển hóa động năng electron
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Chùm electron phát ra từ cathode, gia tốc bởi điện trường có cường độ lớn giữa
              anode và cathode → đập vào bia (đối cathode) → động năng của electron chuyển thành
              tia X mang năng lượng rất lớn.
            </p>
            <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-4">
              <p className="text-xs font-semibold text-cyan-300">Nhận xét</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-200">
                Tia X (bức xạ hãm) phát ra khi electron bị dừng đột ngột do tương tác với nguyên
                tử của bia.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-4 space-y-3">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-slate-300">Phân bố năng lượng khi va chạm bia</span>
              <span className="font-mono text-amber-400">Bia phải được làm nguội</span>
            </div>

            <div className="h-4 w-full overflow-hidden rounded-full bg-slate-900 border border-slate-800 flex">
              <div className="h-full bg-cyan-400" style={{ width: '5%' }} />
              <div className="h-full bg-amber-500/85" style={{ width: '95%' }} />
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-lg bg-slate-900/80 p-3.5 border border-slate-800">
                <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-lg font-bold">
                  <Zap className="w-4 h-4" aria-hidden="true" />
                  ~ 1%
                </div>
                <p className="text-slate-300 mt-1">Electron tạo ra tia X</p>
              </div>
              <div className="rounded-lg bg-slate-900/80 p-3.5 border border-slate-800">
                <div className="flex items-center gap-1.5 text-amber-400 font-mono text-lg font-bold">
                  <Flame className="w-4 h-4" aria-hidden="true" />
                  &gt; 99%
                </div>
                <p className="text-slate-300 mt-1">Chỉ làm nóng bia → Cần làm nguội</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Animated impact & cooling loop SVG */}
        <div className="animate-stagger-2 flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-7">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="font-display text-lg font-bold text-slate-50">
              Mô phỏng va chạm vào bia Wolfram &amp; Tản nhiệt làm nguội
            </h3>
            <span className="font-mono text-xs text-cyan-400">
              {isPlaying ? 'Đang chạy' : 'Tạm dừng'}
            </span>
          </div>

          <div className="flex-1 rounded-xl border border-slate-800 bg-[#060910] p-4 radiograph-grid-fine flex items-center">
            <svg
              viewBox="0 0 640 290"
              className="w-full h-auto"
              role="img"
              aria-label="Mô phỏng dòng electron đập vào bia làm bia nóng đỏ và phát tia X ra ngoài"
            >
              <defs>
                <radialGradient id="impactHeat" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.95" />
                  <stop offset="55%" stopColor="#EA580C" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#EA580C" stopOpacity="0" />
                </radialGradient>
              </defs>

              {/* Cathode Emitter */}
              <rect x="30" y="105" width="76" height="80" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
              <text x="68" y="142" textAnchor="middle" fill="#FDE68A" fontSize="12" fontWeight="700">
                Cathode
              </text>
              <text x="68" y="160" textAnchor="middle" fill="#94A3B8" fontSize="10">
                Phát e⁻
              </text>

              {/* High-speed electron stream */}
              <line
                x1="108"
                y1="145"
                x2="372"
                y2="145"
                stroke="#38BDF8"
                strokeWidth="3"
                strokeDasharray="10 8"
                className={isPlaying ? 'animate-dash-flow' : ''}
              />
              {isPlaying && (
                <>
                  <circle cx="140" cy="145" r="5" fill="#67E8F9">
                    <animateMotion dur="0.9s" repeatCount="indefinite" path="M 0 0 L 230 0" />
                  </circle>
                  <circle cx="140" cy="145" r="5" fill="#67E8F9">
                    <animateMotion dur="0.9s" begin="0.45s" repeatCount="indefinite" path="M 0 0 L 230 0" />
                  </circle>
                </>
              )}
              <text x="240" y="128" textAnchor="middle" fill="#67E8F9" fontSize="12" fontWeight="600">
                Điện trường 200 kV gia tốc e⁻
              </text>

              {/* Anode Copper Block & Target */}
              <path
                d="M 380 86 L 560 86 L 560 204 L 418 204 L 380 86 Z"
                fill="#B45309"
                fillOpacity="0.75"
                stroke="#F59E0B"
                strokeWidth="2"
              />
              <polygon points="374,90 388,85 424,198 410,203" fill="#E2E8F0" />

              {/* Thermal heat glow at impact */}
              <circle cx="395" cy="145" r="44" fill="url(#impactHeat)">
                {isPlaying && (
                  <animate attributeName="r" values="36;48;36" dur="1.6s" repeatCount="indefinite" />
                )}
              </circle>
              <text x="485" y="138" textAnchor="middle" fill="#FDE68A" fontSize="12" fontWeight="700">
                &gt; 99% thành nhiệt
              </text>
              <text x="485" y="156" textAnchor="middle" fill="#FED7AA" fontSize="10">
                Làm nóng bia Pt/W
              </text>

              {/* Cooling pipe circulation */}
              <path
                d="M 560 120 L 612 120 L 612 170 L 560 170"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="5"
                strokeDasharray="10 6"
                className={isPlaying ? 'animate-dash-flow' : ''}
              />
              <text x="586" y="196" textAnchor="middle" fill="#7DD3FC" fontSize="10" fontWeight="600">
                Làm nguội
              </text>

              {/* Emitted 1% X-ray wave downward */}
              <path
                d="M 392 152 Q 378 175, 392 198 T 392 244 T 392 276"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="3.5"
                strokeDasharray="8 4"
                className={isPlaying ? 'animate-dash-flow' : ''}
              />
              <text x="348" y="268" textAnchor="end" fill="#22D3EE" fontSize="12" fontWeight="700">
                ~ 1% chuyển thành Tia X
              </text>
            </svg>
          </div>

          <p className="mt-3 text-xs text-slate-400">
            Video mô phỏng tóm tắt: Khi electron bị hãm đột ngột tại bia, năng lượng dư tỏa ra dưới
            dạng nhiệt lượng khổng lồ đòi hỏi hệ thống làm mát bằng dầu hoặc nước tuần hoàn.
          </p>
        </div>
      </div>
    </section>
  );
}
