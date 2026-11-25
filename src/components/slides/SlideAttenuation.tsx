import { useMemo, useState } from 'react';
import { ATTENUATION_MATERIALS, calculateAttenuation } from '../../utils/xrayPhysics';

export function SlideAttenuation() {
  const [materialId, setMaterialId] = useState('bone');
  const [thicknessMm, setThicknessMm] = useState(12);
  const [initialIntensity, setInitialIntensity] = useState(1000);

  const selectedMaterial =
    ATTENUATION_MATERIALS.find((m) => m.id === materialId) ?? ATTENUATION_MATERIALS[2];

  const result = useMemo(
    () => calculateAttenuation(initialIntensity, selectedMaterial.muPerMeter, thicknessMm),
    [initialIntensity, selectedMaterial.muPerMeter, thicknessMm]
  );

  // Build SVG attenuation curve from d = 0 mm to 40 mm
  const maxD = 40;
  const svgW = 500;
  const svgH = 180;
  const padL = 44;
  const padB = 26;
  const plotW = svgW - padL - 18;
  const plotH = svgH - padB - 14;

  const curvePoints = Array.from({ length: 41 }, (_, dMm) => {
    const pt = calculateAttenuation(100, selectedMaterial.muPerMeter, dMm);
    const x = padL + (dMm / maxD) * plotW;
    const y = 14 + plotH - (pt.transmissionPercent / 100) * plotH;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ');

  const markerX = padL + (Math.min(maxD, thicknessMm) / maxD) * plotW;
  const markerY = 14 + plotH - (result.transmissionPercent / 100) * plotH;

  return (
    <section
      aria-label="Sự suy giảm tia X"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            III. Sự suy giảm tia X · Hiện tượng và công thức
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Hiện tượng hấp thụ &amp; Định luật suy giảm theo hàm mũ
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400">
          I = P / S (W·m⁻²) · I = I₀·e^(−μd)
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: Phenomenon & Formulas */}
        <div className="animate-stagger-1 flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-5">
          <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-xs font-semibold text-cyan-400">Hiện tượng vật lí</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
              Tia X có tính chất làm <strong>ion hóa</strong> nguyên tử, phân tử của vật liệu mà nó
              đi qua nên bị hấp thụ dần và giảm cường độ.
            </p>
          </div>

          <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-semibold text-slate-300">Cường độ chùm tia X</p>
              <span className="font-mono text-xs text-slate-400">Đơn vị: W·m⁻²</span>
            </div>
            <p className="mt-2 font-mono text-2xl font-bold text-cyan-300">I = P / S</p>
            <ul className="mt-2 space-y-1 text-xs text-slate-400">
              <li>
                <strong className="text-slate-200 font-mono">P</strong>: công suất chùm tia X truyền qua mặt S (W)
              </li>
              <li>
                <strong className="text-slate-200 font-mono">S</strong>: diện tích mặt cắt ngang của chùm tia X (m²)
              </li>
            </ul>
          </div>

          <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-4">
            <div className="flex items-center justify-between gap-2">
              <p className="text-xs font-semibold text-cyan-300">
                Công thức suy giảm qua lớp vật liệu đồng nhất
              </p>
              <span className="font-mono text-xs text-cyan-200">Hàm mũ</span>
            </div>
            <p className="mt-2 font-mono text-2xl font-bold text-slate-50">
              I = I₀ · e^(−μd)
            </p>
            <ul className="mt-2 space-y-1.5 text-xs text-slate-300">
              <li>
                <strong className="text-white font-mono">I₀</strong>: Cường độ ban đầu (trước khi bị hấp thụ)
              </li>
              <li>
                <strong className="text-white font-mono">d</strong>: Độ dày lớp vật liệu (m)
              </li>
              <li>
                <strong className="text-white font-mono">μ</strong>: Hệ số suy giảm tuyến tính (m⁻¹) — phụ
                thuộc bản chất vật liệu (mật độ, số hiệu nguyên tử) và năng lượng tia X.
              </li>
            </ul>
          </div>
        </div>

        {/* Right: Interactive Exponential Attenuation Simulator */}
        <div className="animate-stagger-2 flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-7">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="font-display text-lg font-bold text-slate-50">
                Mô phỏng tính suy giảm theo chất liệu &amp; độ dày d
              </h3>
              <span className="font-mono text-xs text-cyan-400">
                μ = {selectedMaterial.muPerMeter} m⁻¹
              </span>
            </div>

            {/* Material selector buttons */}
            <div className="flex flex-wrap gap-2">
              {ATTENUATION_MATERIALS.map((mat) => {
                const active = mat.id === materialId;
                return (
                  <button
                    key={mat.id}
                    type="button"
                    onClick={() => setMaterialId(mat.id)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      active
                        ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {mat.name}
                  </button>
                );
              })}
            </div>
            <p className="mt-2.5 text-xs text-slate-400">{selectedMaterial.description}</p>
          </div>

          {/* Sliders */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="block rounded-lg border border-slate-800 bg-slate-900/80 p-3">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-300">Cường độ ban đầu I₀</span>
                <span className="font-mono font-bold text-slate-100">{initialIntensity} W·m⁻²</span>
              </div>
              <input
                type="range"
                min={200}
                max={2000}
                step={50}
                value={initialIntensity}
                onChange={(e) => setInitialIntensity(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
                aria-label="Điều chỉnh cường độ tia X ban đầu I0"
              />
            </label>

            <label className="block rounded-lg border border-slate-800 bg-slate-900/80 p-3">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-slate-300">Độ dày lớp vật liệu d</span>
                <span className="font-mono font-bold text-cyan-300">
                  {thicknessMm} mm ({(thicknessMm / 1000).toFixed(3)} m)
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={40}
                step={1}
                value={thicknessMm}
                onChange={(e) => setThicknessMm(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
                aria-label="Điều chỉnh độ dày lớp vật liệu d theo mm"
              />
            </label>
          </div>

          {/* Decay curve SVG */}
          <div className="rounded-xl border border-slate-800 bg-[#060910] p-3">
            <svg
              viewBox={`0 0 ${svgW} ${svgH}`}
              className="w-full h-auto"
              role="img"
              aria-label="Đồ thị hàm mũ suy giảm cường độ tia X theo độ dày vật liệu"
            >
              <line x1={padL} y1={14} x2={padL} y2={14 + plotH} stroke="#334155" strokeWidth="1.5" />
              <line
                x1={padL}
                y1={14 + plotH}
                x2={padL + plotW}
                y2={14 + plotH}
                stroke="#334155"
                strokeWidth="1.5"
              />
              {/* 50% grid line */}
              <line
                x1={padL}
                y1={14 + plotH * 0.5}
                x2={padL + plotW}
                y2={14 + plotH * 0.5}
                stroke="#1E293B"
                strokeDasharray="4 4"
              />

              <polyline
                fill="none"
                stroke={selectedMaterial.accentHex}
                strokeWidth="2.5"
                points={curvePoints}
              />

              {/* Active point marker */}
              <line
                x1={markerX}
                y1={14}
                x2={markerX}
                y2={14 + plotH}
                stroke="#22D3EE"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
              <circle cx={markerX} cy={markerY} r="5.5" fill="#22D3EE" stroke="#070B12" strokeWidth="2" />

              <text x={padL - 6} y={22} textAnchor="end" fill="#94A3B8" fontSize="10" fontFamily="monospace">
                100%
              </text>
              <text x={padL - 6} y={14 + plotH * 0.5 + 3} textAnchor="end" fill="#64748B" fontSize="10" fontFamily="monospace">
                50%
              </text>
              <text x={padL} y={svgH - 6} fill="#64748B" fontSize="10" fontFamily="monospace">
                d = 0 mm
              </text>
              <text x={padL + plotW} y={svgH - 6} textAnchor="end" fill="#94A3B8" fontSize="10" fontFamily="monospace">
                d = 40 mm
              </text>
            </svg>
          </div>

          {/* Numeric telemetry readout */}
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
              <p className="text-slate-400">Cường độ truyền qua I</p>
              <p className="mt-1 font-mono text-base font-bold text-cyan-300">
                {result.transmittedIntensity.toFixed(1)} W·m⁻²
              </p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
              <p className="text-slate-400">Tỉ lệ truyền qua I / I₀</p>
              <p className="mt-1 font-mono text-base font-bold text-slate-100">
                {result.transmissionPercent < 0.01 && result.transmissionPercent > 0
                  ? '< 0.01%'
                  : `${result.transmissionPercent.toFixed(2)}%`}
              </p>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
              <p className="text-slate-400">Độ dày giảm một nửa</p>
              <p className="mt-1 font-mono text-base font-bold text-amber-300">
                {result.halfValueLayerMm.toFixed(2)} mm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
