import { useState } from 'react';

interface SpectrumBand {
  id: string;
  name: string;
  wavelength: string;
  cycles: number;
  color: string;
  note: string;
}

const SPECTRUM_BANDS: SpectrumBand[] = [
  {
    id: 'radio',
    name: 'Sóng vô tuyến',
    wavelength: '> 10⁻³ m',
    cycles: 2,
    color: '#64748B',
    note: 'Bước sóng dài, năng lượng thấp (truyền thanh, Wi-Fi).',
  },
  {
    id: 'visible',
    name: 'Ánh sáng nhìn thấy',
    wavelength: '380 – 760 nm',
    cycles: 5,
    color: '#F59E0B',
    note: 'Mắt người quan sát được từ màu đỏ đến tím.',
  },
  {
    id: 'uv',
    name: 'Tia tử ngoại (UV)',
    wavelength: '10⁻⁸ – 3.8×10⁻⁷ m',
    cycles: 8,
    color: '#38BDF8',
    note: 'Bước sóng ngắn hơn ánh sáng tím.',
  },
  {
    id: 'xray',
    name: 'Tia X (Tia Röntgen)',
    wavelength: '10⁻¹¹ – 10⁻⁸ m',
    cycles: 16,
    color: '#22D3EE',
    note: 'Sóng điện từ bước sóng cực ngắn, năng lượng rất cao, đâm xuyên mạnh.',
  },
  {
    id: 'gamma',
    name: 'Tia Gamma (γ)',
    wavelength: '< 10⁻¹¹ m',
    cycles: 24,
    color: '#F43F5E',
    note: 'Phát ra từ phản ứng hạt nhân, bước sóng ngắn nhất.',
  },
];

export function SlideWaveNature() {
  const [selectedBandId, setSelectedBandId] = useState('xray');
  const activeBand =
    SPECTRUM_BANDS.find((b) => b.id === selectedBandId) ?? SPECTRUM_BANDS[3];

  // Generate animated sine wave path based on selected frequency cycles
  const width = 560;
  const midY = 75;
  const amp = 32;
  const points: string[] = [];
  for (let x = 20; x <= width - 20; x += 4) {
    const progress = (x - 20) / (width - 40);
    const y = midY + Math.sin(progress * Math.PI * 2 * activeBand.cycles) * amp;
    points.push(`${x === 20 ? 'M' : 'L'} ${x} ${y.toFixed(1)}`);
  }
  const wavePath = points.join(' ');

  return (
    <section
      aria-label="Giải mã bản chất sóng điện từ của tia X"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            1. Phương pháp tạo ra và điều khiển tia X · a. Giới thiệu
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Giải mã bản chất sóng điện từ (1912–1914)
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400">
          Max von Laue (1912) · Nobel Vật lí 1914 · λ ≈ 10⁻¹¹ – 10⁻⁸ m
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: Core intro points */}
        <div className="animate-stagger-1 flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-5">
          <div className="space-y-4">
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4">
              <p className="font-mono text-xs font-semibold text-amber-400">1895 → 1901</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
                Röntgen phát hiện ra loại tia đặc biệt có thể giúp quan sát cấu trúc cơ quan trong
                cơ thể. Nhưng chưa rõ bản chất của tia nên được gọi là tia X (ẩn số) hay tia
                Röntgen → đạt giải Nobel Vật Lí 1901.
              </p>
            </div>

            <div className="rounded-lg border border-cyan-500/35 bg-cyan-950/20 p-4">
              <p className="font-mono text-xs font-semibold text-cyan-300">1912 → 1914</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-200">
                Đến năm <strong>1912</strong>, <strong>Max von Laue</strong> mới chứng minh được
                tia X có tính chất là <strong>sóng điện từ bước sóng rất ngắn</strong> (thí nghiệm
                nhiễu xạ tia X) → đạt giải Nobel Vật Lí <strong>1914</strong>.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-4">
            <p className="text-xs text-slate-400">Bước sóng của tia X</p>
            <p className="mt-1 font-mono text-3xl font-bold text-cyan-300">
              10⁻¹¹ m → 10⁻⁸ m
            </p>
            <p className="mt-1.5 text-xs text-slate-400">
              Ngắn hơn hàng nghìn lần so với ánh sáng nhìn thấy — kích thước tương đương khoảng cách
              giữa các nguyên tử trong tinh thể.
            </p>
          </div>
        </div>

        {/* Right: Interactive Electromagnetic Spectrum & Diffraction Animation */}
        <div className="animate-stagger-2 flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-7">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h3 className="font-display text-lg font-bold text-slate-50">
                Vị trí tia X trong thang sóng điện từ
              </h3>
              <span className="font-mono text-xs text-cyan-300">{activeBand.wavelength}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {SPECTRUM_BANDS.map((band) => {
                const active = band.id === selectedBandId;
                return (
                  <button
                    key={band.id}
                    type="button"
                    onClick={() => setSelectedBandId(band.id)}
                    className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      active
                        ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200'
                        : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {band.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Animated Wave Visualization */}
          <div className="rounded-xl border border-slate-800 bg-[#060910] p-4 radiograph-grid-fine">
            <svg
              viewBox="0 0 560 150"
              className="w-full h-auto"
              role="img"
              aria-label={`Mô phỏng sóng điện từ ${activeBand.name}`}
            >
              <line x1="20" y1={midY} x2="540" y2={midY} stroke="#1E293B" strokeWidth="1.5" />
              <path
                d={wavePath}
                fill="none"
                stroke={activeBand.color}
                strokeWidth="3"
                strokeDasharray="16 6"
                className="animate-dash-flow"
              />
              <text x="20" y="22" fill={activeBand.color} fontSize="12" fontWeight="700">
                {activeBand.name}
              </text>
              <text x="540" y="22" textAnchor="end" fill="#94A3B8" fontSize="11" fontFamily="monospace">
                λ: {activeBand.wavelength}
              </text>
            </svg>
            <p className="mt-2 text-xs text-slate-300">{activeBand.note}</p>
          </div>

          {/* Laue Diffraction preview */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4 flex items-center gap-4">
              <svg viewBox="0 0 80 80" className="w-16 h-16 shrink-0" aria-hidden="true">
                <circle cx="40" cy="40" r="34" fill="#060910" stroke="#334155" strokeWidth="1.5" />
                <circle cx="40" cy="40" r="5" fill="#F59E0B" />
                <g className="animate-slow-spin">
                  <circle cx="40" cy="18" r="3" fill="#22D3EE" />
                  <circle cx="40" cy="62" r="3" fill="#22D3EE" />
                  <circle cx="18" cy="40" r="3" fill="#22D3EE" />
                  <circle cx="62" cy="40" r="3" fill="#22D3EE" />
                  <circle cx="24" cy="24" r="2.2" fill="#38BDF8" />
                  <circle cx="56" cy="24" r="2.2" fill="#38BDF8" />
                  <circle cx="24" cy="56" r="2.2" fill="#38BDF8" />
                  <circle cx="56" cy="56" r="2.2" fill="#38BDF8" />
                </g>
              </svg>
              <div className="text-xs">
                <p className="font-semibold text-slate-100">Thí nghiệm nhiễu xạ Laue</p>
                <p className="mt-1 text-slate-400">
                  Mạng tinh thể đóng vai trò cách tử nhiễu xạ tự nhiên tạo các đốm giao thoa đối xứng.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-4 flex flex-col justify-center text-xs">
              <p className="font-semibold text-slate-100">Ý nghĩa khoa học</p>
              <p className="mt-1 text-slate-400">
                Khẳng định tia X cùng bản chất sóng điện từ với ánh sáng nhưng mang năng lượng photon
                lớn hơn hàng ngàn lần.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
