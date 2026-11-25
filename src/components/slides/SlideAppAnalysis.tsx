import { useState } from 'react';

export function SlideAppAnalysis() {
  const [method, setMethod] = useState<'xrd' | 'edx'>('xrd');

  return (
    <section
      aria-label="Ứng dụng tia X trong Phân tích cấu trúc và thành phần hóa học"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            IV. Ứng dụng của tia X · 4. Phân tích cấu trúc và thành phần hóa học
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Phổ EDX / XRF &amp; Phổ nhiễu xạ tinh thể XRD
          </h2>
        </div>

        <div
          className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 p-1"
          role="tablist"
          aria-label="Chọn phương pháp phân tích vật liệu"
        >
          <button
            type="button"
            role="tab"
            aria-selected={method === 'xrd'}
            onClick={() => setMethod('xrd')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              method === 'xrd'
                ? 'bg-cyan-500 text-slate-950'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            Nhiễu xạ XRD (DNA)
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={method === 'edx'}
            onClick={() => setMethod('edx')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              method === 'edx'
                ? 'bg-amber-400 text-slate-950'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            Phổ EDX / XRF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: EDX/XRF & XRD Points */}
        <div className="animate-stagger-1 flex flex-col justify-between gap-4 lg:col-span-5">
          <div
            onClick={() => setMethod('edx')}
            className={`rounded-xl border p-5 transition-colors cursor-pointer ${
              method === 'edx'
                ? 'border-amber-400/70 bg-amber-950/20'
                : 'border-slate-800 bg-[#0D131F]'
            }`}
          >
            <p className="font-mono text-xs font-semibold text-amber-400">Thành phần hóa học</p>
            <h3 className="mt-1 font-display text-xl font-bold text-slate-50">
              Phổ tán sắc năng lượng tia X (EDX / XRF)
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Phân tích thành phần hóa học của vật rắn dựa trên{' '}
              <strong className="text-slate-100">tia X đặc trưng</strong> phát ra từ vật — mỗi nguyên
              tố phát ra đỉnh năng lượng riêng biệt như dấu vân tay nguyên tử.
            </p>
          </div>

          <div
            onClick={() => setMethod('xrd')}
            className={`rounded-xl border p-5 transition-colors cursor-pointer ${
              method === 'xrd'
                ? 'border-cyan-500/60 bg-cyan-950/20'
                : 'border-slate-800 bg-[#0D131F]'
            }`}
          >
            <p className="font-mono text-xs font-semibold text-cyan-400">Cấu trúc tinh thể</p>
            <h3 className="mt-1 font-display text-xl font-bold text-slate-50">
              Phổ nhiễu xạ tia X (XRD)
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Phân tích cấu trúc tinh thể của vật liệu — phương pháp lịch sử từng giúp tìm ra{' '}
              <strong className="text-cyan-300">cấu trúc xoắn kép của phân tử DNA</strong>.
            </p>
          </div>
        </div>

        {/* Right: Animated XRD DNA Crystal Lattice vs EDX Spectrum */}
        <div className="animate-stagger-2 flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-7">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="font-display text-lg font-bold text-slate-50">
              {method === 'xrd'
                ? 'Mô phỏng nhiễu xạ tia X qua tinh thể & cấu trúc xoắn kép DNA'
                : 'Mô phỏng phổ tia X đặc trưng EDX nhận diện nguyên tố'}
            </h3>
            <span className="font-mono text-xs text-cyan-400">
              {method === 'xrd' ? 'Photo 51 · DNA' : 'Tia X đặc trưng'}
            </span>
          </div>

          <div className="flex-1 rounded-xl border border-slate-800 bg-[#060910] p-4 radiograph-grid-fine flex items-center min-h-[340px]">
            {method === 'xrd' ? (
              <svg
                viewBox="0 0 580 260"
                className="w-full h-auto"
                role="img"
                aria-label="Vân nhiễu xạ tia X hình chữ X và cấu trúc xoắn kép DNA"
              >
                {/* Left: Photo 51 Diffraction Ring */}
                <circle cx="155" cy="130" r="88" fill="#0B111C" stroke="#334155" strokeWidth="1.5" />
                <circle cx="155" cy="130" r="56" fill="none" stroke="#1E293B" strokeWidth="1.2" />
                <g className="animate-slow-spin">
                  <line x1="94" y1="69" x2="216" y2="191" stroke="#22D3EE" strokeWidth="4" strokeDasharray="6 9" />
                  <line x1="216" y1="69" x2="94" y2="191" stroke="#22D3EE" strokeWidth="4" strokeDasharray="6 9" />
                </g>
                <circle cx="155" cy="130" r="7" fill="#F59E0B" />
                <text x="155" y="242" textAnchor="middle" fill="#67E8F9" fontSize="11" fontWeight="600">
                  Vân nhiễu xạ chữ X (XRD)
                </text>

                {/* Arrow to DNA */}
                <line x1="258" y1="130" x2="322" y2="130" stroke="#38BDF8" strokeWidth="2.5" strokeDasharray="6 4" className="animate-dash-flow" />

                {/* Right: DNA double helix */}
                <g>
                  <path
                    d="M 355 46 Q 425 88, 355 130 T 355 214"
                    fill="none"
                    stroke="#22D3EE"
                    strokeWidth="3.5"
                  />
                  <path
                    d="M 415 46 Q 345 88, 415 130 T 415 214"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="3.5"
                  />
                  <line x1="370" y1="70" x2="400" y2="70" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="364" y1="102" x2="406" y2="102" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="364" y1="158" x2="406" y2="158" stroke="#94A3B8" strokeWidth="2" />
                  <line x1="370" y1="190" x2="400" y2="190" stroke="#94A3B8" strokeWidth="2" />
                  <text x="485" y="124" fill="#E2E8F0" fontSize="12" fontWeight="700">
                    Xoắn kép DNA
                  </text>
                  <text x="485" y="144" fill="#94A3B8" fontSize="10.5">
                    Xác định nhờ góc
                  </text>
                  <text x="485" y="160" fill="#94A3B8" fontSize="10.5">
                    nhiễu xạ tia X
                  </text>
                </g>
              </svg>
            ) : (
              <svg
                viewBox="0 0 580 260"
                className="w-full h-auto"
                role="img"
                aria-label="Phổ tán sắc năng lượng tia X EDX hiển thị các đỉnh đặc trưng của nguyên tố Fe, Cu, Zn"
              >
                <line x1="48" y1="210" x2="540" y2="210" stroke="#334155" strokeWidth="2" />
                <line x1="48" y1="30" x2="48" y2="210" stroke="#334155" strokeWidth="2" />
                <path
                  d="M 52 206 L 125 204 L 145 78 L 165 204 L 270 200 L 292 42 L 314 200 L 420 202 L 442 96 L 464 202 L 535 206"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="3"
                />
                <g className="animate-scan-x">
                  <rect x="60" y="34" width="4" height="174" fill="#22D3EE" fillOpacity="0.45" />
                </g>
                <text x="145" y="64" textAnchor="middle" fill="#FDE68A" fontSize="13" fontWeight="700">
                  Fe (6.4 keV)
                </text>
                <text x="292" y="30" textAnchor="middle" fill="#67E8F9" fontSize="13" fontWeight="700">
                  Cu (8.0 keV)
                </text>
                <text x="442" y="84" textAnchor="middle" fill="#FDE68A" fontSize="13" fontWeight="700">
                  Zn (8.6 keV)
                </text>
                <text x="535" y="236" textAnchor="end" fill="#94A3B8" fontSize="11" fontFamily="monospace">
                  Năng lượng tia X đặc trưng (keV) →
                </text>
              </svg>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
