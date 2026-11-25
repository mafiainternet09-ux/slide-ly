import { useMemo, useState } from 'react';
import { Sliders } from 'lucide-react';
import { simulateXrayTube } from '../../utils/xrayPhysics';

export function SlideControl() {
  const [voltageKv, setVoltageKv] = useState(120);
  const [filamentMa, setFilamentMa] = useState(200);
  const [useFilter, setUseFilter] = useState(false);

  const sim = useMemo(
    () => simulateXrayTube(voltageKv, filamentMa, useFilter),
    [voltageKv, filamentMa, useFilter]
  );

  // Build SVG path for the spectrum curve
  const svgWidth = 540;
  const svgHeight = 190;
  const padLeft = 38;
  const padBottom = 26;
  const plotW = svgWidth - padLeft - 16;
  const plotH = svgHeight - padBottom - 16;

  const polylinePoints = sim.spectrumPoints
    .map((pt) => {
      const x = padLeft + ((pt.wavelengthPm - 4) / (88 - 4)) * plotW;
      const y = 16 + plotH - (pt.intensity / 100) * plotH;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  const areaPath = `M ${padLeft},${16 + plotH} L ${polylinePoints} L ${padLeft + plotW},${16 + plotH} Z`;

  return (
    <section
      aria-label="Cách điều khiển tia X"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            1. Phương pháp tạo ra và điều khiển tia X
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Tia X cứng, Tia X mềm &amp; 3 cách điều khiển
          </h2>
        </div>
        <div className="flex items-center gap-3 font-mono text-xs">
          <span className="text-slate-400">Chế độ hiện tại:</span>
          <span
            className={`font-semibold ${
              sim.hardnessLabel === 'Tia X cứng'
                ? 'text-cyan-300'
                : sim.hardnessLabel === 'Tia X mềm'
                ? 'text-amber-300'
                : 'text-slate-200'
            }`}
          >
            {sim.hardnessLabel}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: Core theory (Hard vs Soft X-ray + 3 Control Methods) */}
        <div className="flex flex-col justify-start gap-5 rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-4 space-y-2">
              <p className="text-sm font-bold text-cyan-300">Tia X cứng</p>
              <p className="text-xs leading-relaxed text-slate-300">
                Bước sóng ngắn, năng lượng cao, khả năng đâm xuyên mạnh.
              </p>
              <p className="font-mono text-[11px] text-cyan-400">
                Ứng dụng: soi kim loại, CT sâu
              </p>
            </div>
            <div className="rounded-lg border border-amber-500/30 bg-amber-950/20 p-4 space-y-2">
              <p className="text-sm font-bold text-amber-300">Tia X mềm</p>
              <p className="text-xs leading-relaxed text-slate-300">
                Bước sóng dài hơn, năng lượng thấp, khả năng đâm xuyên kém.
              </p>
              <p className="font-mono text-[11px] text-amber-400">
                Dễ bị mô mềm &amp; bộ lọc hấp thụ
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-5 space-y-3">
            <h3 className="font-display text-base font-bold text-slate-100">
              3 cách điều khiển tia X theo mục đích sử dụng
            </h3>
            <ol className="space-y-3 text-xs leading-relaxed text-slate-300">
              <li className="rounded-lg border border-slate-800 bg-slate-900/70 p-3.5">
                <span className="font-semibold text-cyan-300">1. Tăng dòng điện nung cathode: </span>
                số electron bứt ra mỗi giây tăng → tia X có cường độ lớn hơn.
              </li>
              <li className="rounded-lg border border-slate-800 bg-slate-900/70 p-3.5">
                <span className="font-semibold text-cyan-300">2. Tăng hiệu điện thế anode – cathode: </span>
                động năng electron lớn hơn → tia X có năng lượng cao hơn (bước sóng ngắn hơn).
              </li>
              <li className="rounded-lg border border-slate-800 bg-slate-900/70 p-3.5">
                <span className="font-semibold text-cyan-300">3. Dùng bộ lọc hấp thụ tia X mềm: </span>
                loại bỏ tia bước sóng dài → năng lượng trung bình của chùm tia cao hơn.
              </li>
            </ol>
          </div>
        </div>

        {/* Right: Interactive X-Ray Control Lab */}
        <div className="flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-7">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" aria-hidden="true" />
              <h3 className="font-display text-lg font-bold text-slate-100">
                Bảng điều khiển phổ tia X trực tiếp
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-400">
              λ_min = {sim.minWavelengthPm} pm
            </span>
          </div>

          {/* Sliders & Filter Switch */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block rounded-lg border border-slate-800 bg-slate-900/80 p-3.5">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-medium text-slate-300">Dòng nung Cathode</span>
                <span className="font-mono font-bold text-amber-300">{filamentMa} mA</span>
              </div>
              <input
                type="range"
                min={50}
                max={450}
                step={10}
                value={filamentMa}
                onChange={(e) => setFilamentMa(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
                aria-label="Điều chỉnh dòng nung Cathode theo đơn vị mA"
              />
            </label>

            <label className="block rounded-lg border border-slate-800 bg-slate-900/80 p-3.5">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-medium text-slate-300">Hiệu điện thế U_AK</span>
                <span className="font-mono font-bold text-cyan-300">{voltageKv} kV</span>
              </div>
              <input
                type="range"
                min={30}
                max={220}
                step={5}
                value={voltageKv}
                onChange={(e) => setVoltageKv(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
                aria-label="Điều chỉnh hiệu điện thế giữa anode và cathode theo đơn vị kV"
              />
            </label>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-900/60 px-4 py-2.5">
            <div>
              <p className="text-xs font-semibold text-slate-200">
                Bộ lọc Nhôm (hấp thụ tia X mềm)
              </p>
              <p className="text-xs text-slate-400">
                Chặn bớt bức xạ bước sóng dài (&gt; 30 pm), tăng năng lượng trung bình chùm tia
              </p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={useFilter}
              onClick={() => setUseFilter((prev) => !prev)}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                useFilter
                  ? 'bg-cyan-500 text-slate-950'
                  : 'border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {useFilter ? 'Đang bật bộ lọc' : 'Chưa gắn bộ lọc'}
            </button>
          </div>

          {/* Live Spectrum Graph */}
          <div className="rounded-xl border border-slate-800 bg-[#060910] p-3">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto"
              role="img"
              aria-label="Đồ thị cường độ phổ tia X theo bước sóng"
            >
              <defs>
                <linearGradient id="specFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.02" />
                </linearGradient>
              </defs>

              {/* Axes */}
              <line
                x1={padLeft}
                y1={16}
                x2={padLeft}
                y2={16 + plotH}
                stroke="#334155"
                strokeWidth="1.5"
              />
              <line
                x1={padLeft}
                y1={16 + plotH}
                x2={padLeft + plotW}
                y2={16 + plotH}
                stroke="#334155"
                strokeWidth="1.5"
              />

              {/* Curve */}
              <path d={areaPath} fill="url(#specFill)" />
              <polyline
                fill="none"
                stroke="#22D3EE"
                strokeWidth="2.5"
                points={polylinePoints}
              />

              {/* Axis Labels */}
              <text x={padLeft - 6} y={24} textAnchor="end" fill="#64748B" fontSize="10" fontFamily="monospace">
                I
              </text>
              <text x={padLeft + plotW} y={svgHeight - 6} textAnchor="end" fill="#94A3B8" fontSize="10" fontFamily="monospace">
                Bước sóng λ (pm) →
              </text>
              <text x={padLeft} y={svgHeight - 6} fill="#64748B" fontSize="10" fontFamily="monospace">
                4 pm (Cứng)
              </text>
              <text x={padLeft + plotW * 0.55} y={svgHeight - 6} fill="#64748B" fontSize="10" fontFamily="monospace">
                50 pm (Mềm)
              </text>
            </svg>
          </div>

          {/* Live Readout Strip */}
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
              <p className="text-slate-400">Phân loại chùm tia</p>
              <p className="mt-1 font-mono text-sm font-bold text-cyan-300">
                {sim.hardnessLabel}
              </p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
              <p className="text-slate-400">Thông lượng tương đối</p>
              <p className="mt-1 font-mono text-sm font-bold text-amber-300">
                {sim.relativeBeamFlux}×
              </p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
              <p className="text-slate-400">Độ đâm xuyên</p>
              <p className="mt-1 font-mono text-sm font-bold text-slate-100">
                {sim.penetrationPercent}%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
