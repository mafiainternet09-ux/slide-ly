import { useState } from 'react';
import { Pause, Play } from 'lucide-react';

type MechanismMode = 'bremsstrahlung' | 'characteristic';

export function SlideTwoTypes() {
  const [mode, setMode] = useState<MechanismMode>('bremsstrahlung');
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section
      aria-label="Em có biết: Hai dạng tia X"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            Em có biết · Phân loại theo cơ chế phát sinh
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Hai dạng tia X: Bức xạ hãm &amp; Tia X đặc trưng
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
        {/* Left: Side-by-side comparison cards */}
        <div className="animate-stagger-1 flex flex-col justify-between gap-4 lg:col-span-5">
          <button
            type="button"
            onClick={() => setMode('bremsstrahlung')}
            className={`text-left rounded-xl border p-5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              mode === 'bremsstrahlung'
                ? 'border-cyan-400 bg-cyan-950/25'
                : 'border-slate-800 bg-[#0D131F] hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-lg font-bold text-slate-50">
                1. Bức xạ hãm (Bremsstrahlung)
              </h3>
              <span className="font-mono text-xs text-cyan-300">Chủ yếu trong y học</span>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Sinh ra do tương tác giữa electron và nguyên tử vật liệu làm bia (electron bị hãm
              đột ngột gần hạt nhân).
            </p>
            <p className="mt-3 text-xs font-medium text-cyan-300">
              Trong chẩn đoán y học, chủ yếu dùng bức xạ hãm.
            </p>
          </button>

          <button
            type="button"
            onClick={() => setMode('characteristic')}
            className={`text-left rounded-xl border p-5 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              mode === 'characteristic'
                ? 'border-amber-400 bg-amber-950/20'
                : 'border-slate-800 bg-[#0D131F] hover:border-slate-700'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-display text-lg font-bold text-slate-50">
                2. Tia X đặc trưng
              </h3>
              <span className="font-mono text-xs text-amber-300">Chiếm vài phần trăm</span>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Electron bắn phá làm bật electron ở lớp bên trong của nguyên tử bia, electron ở mức
              năng lượng cao hơn chuyển xuống lấp chỗ trống và phát ra tia X.
            </p>
            <p className="mt-3 text-xs font-medium text-amber-300">
              Dạng này đặc trưng riêng cho từng nguyên tố làm bia (ứng dụng trong phân tích EDX/XRF).
            </p>
          </button>

          <div className="rounded-xl border border-slate-800 bg-[#0D131F] p-4 text-xs text-slate-400">
            Nhấn chọn một trong hai thẻ trên để chuyển đổi mô phỏng tương tác nguyên tử ở bên phải.
          </div>
        </div>

        {/* Right: Atomic quantum transition / Bremsstrahlung interactive animation */}
        <div className="animate-stagger-2 flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <p className="text-xs font-medium text-cyan-400">Cơ chế ở cấp độ nguyên tử</p>
              <h3 className="font-display text-xl font-bold text-slate-50">
                {mode === 'bremsstrahlung'
                  ? 'Electron bị hãm hướng tạo phổ liên tục'
                  : 'Electron nhảy từ mức ngoài về lớp trong phát tia đặc trưng'}
              </h3>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-slate-900 p-1 border border-slate-800">
              <button
                type="button"
                onClick={() => setMode('bremsstrahlung')}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  mode === 'bremsstrahlung'
                    ? 'bg-cyan-500 text-slate-950'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Bức xạ hãm
              </button>
              <button
                type="button"
                onClick={() => setMode('characteristic')}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  mode === 'characteristic'
                    ? 'bg-amber-400 text-slate-950'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Tia X đặc trưng
              </button>
            </div>
          </div>

          <div className="flex-1 rounded-xl border border-slate-800 bg-[#060910] p-4 radiograph-grid-fine flex items-center">
            <svg
              viewBox="0 0 640 260"
              className="w-full h-auto"
              role="img"
              aria-label={
                mode === 'bremsstrahlung'
                  ? 'Mô phỏng bức xạ hãm'
                  : 'Mô phỏng tia X đặc trưng'
              }
            >
              {/* Atomic shells */}
              <circle cx="330" cy="130" r="96" fill="none" stroke="#334155" strokeWidth="1.2" strokeDasharray="4 4" />
              <circle cx="330" cy="130" r="56" fill="none" stroke="#475569" strokeWidth="1.5" />
              <circle cx="330" cy="130" r="18" fill="#F59E0B" fillOpacity="0.92" />
              <text x="330" y="135" textAnchor="middle" fill="#0F172A" fontSize="12" fontWeight="700">
                +Z
              </text>

              {mode === 'bremsstrahlung' ? (
                <g>
                  <path
                    d="M 30 72 Q 310 70, 348 164 T 610 218"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="2.5"
                    strokeDasharray="8 5"
                    className={isPlaying ? 'animate-dash-flow' : ''}
                  />
                  {isPlaying && (
                    <circle cx="30" cy="72" r="7" fill="#38BDF8">
                      <animateMotion
                        dur="2.2s"
                        repeatCount="indefinite"
                        path="M 0 0 Q 280 -2, 318 92 T 580 146"
                      />
                    </circle>
                  )}
                  <path
                    d="M 342 104 Q 362 84, 382 104 T 422 104 T 462 104 T 502 104 T 542 104"
                    fill="none"
                    stroke="#22D3EE"
                    strokeWidth="3.2"
                    strokeDasharray="10 4"
                    className={isPlaying ? 'animate-dash-flow' : ''}
                  />
                  <text x="445" y="72" fill="#67E8F9" fontSize="12" fontWeight="700">
                    Bức xạ hãm phát ra (năng lượng liên tục)
                  </text>
                  <text x="36" y="54" fill="#94A3B8" fontSize="11">
                    Electron tới bị trường hạt nhân làm lệch &amp; hãm đột ngột
                  </text>
                </g>
              ) : (
                <g>
                  {/* Vacancy at K shell */}
                  <circle cx="274" cy="130" r="7" fill="none" stroke="#F87171" strokeWidth="2" strokeDasharray="2 2" />
                  {/* Outer shell electron */}
                  <circle cx="234" cy="130" r="7" fill="#FBBF24">
                    {isPlaying && (
                      <animate attributeName="cx" values="234;274;234" dur="2.2s" repeatCount="indefinite" />
                    )}
                  </circle>
                  {/* Knocked-out electron */}
                  <path
                    d="M 60 130 L 270 130 L 440 42"
                    fill="none"
                    stroke="#64748B"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                    className={isPlaying ? 'animate-dash-flow' : ''}
                  />
                  {isPlaying && (
                    <circle cx="60" cy="130" r="6" fill="#94A3B8">
                      <animateMotion dur="2.2s" repeatCount="indefinite" path="M 0 0 L 210 0 L 380 -88" />
                    </circle>
                  )}
                  {/* Characteristic photon */}
                  <path
                    d="M 284 148 Q 304 168, 324 148 T 364 148 T 404 148 T 444 148 T 484 148"
                    fill="none"
                    stroke="#FBBF24"
                    strokeWidth="3.2"
                    strokeDasharray="10 4"
                    className={isPlaying ? 'animate-dash-flow' : ''}
                  />
                  <text x="320" y="190" fill="#FDE68A" fontSize="12" fontWeight="700">
                    Tia X đặc trưng (hf = E_cao − E_thấp)
                  </text>
                  <text x="42" y="102" fill="#38BDF8" fontSize="11">
                    Electron bắn bật e⁻ lớp trong
                  </text>
                </g>
              )}
            </svg>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
            <span>Tỉ lệ trong chẩn đoán y khoa:</span>
            <span className="font-mono text-slate-200">
              Bức xạ hãm (~90–95%) · Tia X đặc trưng (vài %)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
