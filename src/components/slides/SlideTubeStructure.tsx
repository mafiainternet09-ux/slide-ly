import { useState } from 'react';
import { TUBE_COMPONENTS, TubeComponentInfo } from '../../data/slidesData';

export function SlideTubeStructure() {
  const [selectedId, setSelectedId] = useState<TubeComponentInfo['id']>('anode');
  const activePart = TUBE_COMPONENTS.find((c) => c.id === selectedId) ?? TUBE_COMPONENTS[0];

  const isSelected = (id: TubeComponentInfo['id']) => selectedId === id;

  return (
    <section
      aria-label="Cấu tạo ống phát tia X"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            1. Phương pháp tạo ra và điều khiển tia X · Cấu tạo ống phát
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Cấu tạo ống phát tia X chân không
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400">
          Áp suất 10⁻³ mmHg · Cao áp ~ 200 kV · Bia Pt / W
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: Interactive cutaway SVG diagram */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-5 lg:col-span-7">
          <div className="flex items-center justify-between gap-2 mb-3">
            <p className="text-xs text-slate-400">
              Nhấn trực tiếp vào từng bộ phận trên sơ đồ để xem chi tiết cấu tạo
            </p>
            <span className="font-mono text-xs text-cyan-400">Sơ đồ cắt lớp</span>
          </div>

          <div className="relative rounded-xl border border-slate-800 bg-[#060910] p-3 radiograph-grid">
            <svg
              viewBox="0 0 760 360"
              className="w-full h-auto select-none"
              role="img"
              aria-label="Sơ đồ cấu tạo ống phát tia X gồm ống thủy tinh chân không, cathode, anode, bia Wolfram và nguồn cao áp"
            >
              <defs>
                <radialGradient id="filamentGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.95" />
                  <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="beamCyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.85" />
                  <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.08" />
                </linearGradient>
              </defs>

              {/* High voltage supply rail at bottom */}
              <g
                onClick={() => setSelectedId('voltage')}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Chọn Nguồn cao áp 200 kV"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedId('voltage');
                }}
              >
                <path
                  d="M 140 180 L 90 180 L 90 310 L 350 310"
                  fill="none"
                  stroke={isSelected('voltage') ? '#38BDF8' : '#475569'}
                  strokeWidth={isSelected('voltage') ? '3.5' : '2'}
                />
                <path
                  d="M 410 310 L 670 310 L 670 180 L 580 180"
                  fill="none"
                  stroke={isSelected('voltage') ? '#38BDF8' : '#475569'}
                  strokeWidth={isSelected('voltage') ? '3.5' : '2'}
                />
                <rect
                  x="335"
                  y="286"
                  width="90"
                  height="48"
                  rx="8"
                  fill="#0F172A"
                  stroke={isSelected('voltage') ? '#22D3EE' : '#334155'}
                  strokeWidth="2"
                />
                <text x="380" y="307" textAnchor="middle" fill="#E2E8F0" fontSize="11" fontWeight="700">
                  CAO ÁP
                </text>
                <text x="380" y="324" textAnchor="middle" fill="#22D3EE" fontSize="12" fontFamily="monospace">
                  ~ 200 kV
                </text>
                <text x="108" y="298" fill="#94A3B8" fontSize="14" fontWeight="700">
                  −
                </text>
                <text x="645" y="298" fill="#F59E0B" fontSize="14" fontWeight="700">
                  +
                </text>
              </g>

              {/* Glass vacuum envelope */}
              <g
                onClick={() => setSelectedId('glass')}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Chọn Ống thủy tinh chân không"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedId('glass');
                }}
              >
                <rect
                  x="130"
                  y="70"
                  width="500"
                  height="190"
                  rx="88"
                  fill="#0B1220"
                  fillOpacity="0.82"
                  stroke={isSelected('glass') ? '#22D3EE' : '#475569'}
                  strokeWidth={isSelected('glass') ? '3.5' : '2'}
                />
                <text
                  x="380"
                  y="54"
                  textAnchor="middle"
                  fill={isSelected('glass') ? '#67E8F9' : '#94A3B8'}
                  fontSize="12"
                  fontWeight="600"
                >
                  Ống thủy tinh hút chân không (p ≈ 10⁻³ mmHg)
                </text>
              </g>

              {/* Animated Electron beam */}
              <g>
                <line
                  x1="215"
                  y1="154"
                  x2="442"
                  y2="154"
                  stroke="#38BDF8"
                  strokeWidth="1.8"
                  strokeDasharray="8 6"
                  className="animate-dash-flow"
                />
                <line
                  x1="215"
                  y1="165"
                  x2="442"
                  y2="165"
                  stroke="#22D3EE"
                  strokeWidth="2.5"
                  strokeDasharray="10 6"
                  className="animate-dash-flow"
                />
                <line
                  x1="215"
                  y1="176"
                  x2="442"
                  y2="176"
                  stroke="#38BDF8"
                  strokeWidth="1.8"
                  strokeDasharray="8 6"
                  className="animate-dash-flow"
                />
                <circle cx="290" cy="165" r="3" fill="#67E8F9">
                  <animateMotion dur="1.1s" repeatCount="indefinite" path="M -70 0 L 145 0" />
                </circle>
                <circle cx="345" cy="165" r="3" fill="#67E8F9">
                  <animateMotion dur="1.1s" begin="0.4s" repeatCount="indefinite" path="M -125 0 L 90 0" />
                </circle>
                <text x="325" y="140" textAnchor="middle" fill="#67E8F9" fontSize="11">
                  Chùm electron gia tốc (e⁻)
                </text>
              </g>

              {/* Cathode filament */}
              <g
                onClick={() => setSelectedId('cathode')}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Chọn Cathode dây nung nóng"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedId('cathode');
                }}
              >
                <circle cx="205" cy="165" r="32" fill="url(#filamentGlow)" />
                <rect
                  x="150"
                  y="148"
                  width="54"
                  height="34"
                  rx="6"
                  fill="#1E293B"
                  stroke={isSelected('cathode') ? '#FBBF24' : '#64748B'}
                  strokeWidth={isSelected('cathode') ? '3' : '1.5'}
                />
                <path
                  d="M 204 154 C 216 154, 216 161, 204 161 C 216 161, 216 169, 204 169 C 216 169, 216 176, 204 176"
                  fill="none"
                  stroke="#FBBF24"
                  strokeWidth="2.5"
                />
                {/* Separate heating power source */}
                <rect
                  x="146"
                  y="206"
                  width="64"
                  height="26"
                  rx="5"
                  fill="#0F172A"
                  stroke={isSelected('cathode') ? '#FBBF24' : '#475569'}
                  strokeWidth="1.5"
                />
                <line x1="165" y1="182" x2="165" y2="206" stroke="#F59E0B" strokeWidth="1.5" />
                <line x1="185" y1="182" x2="185" y2="206" stroke="#F59E0B" strokeWidth="1.5" />
                <text x="178" y="223" textAnchor="middle" fill="#FDE68A" fontSize="10" fontWeight="600">
                  Nguồn nung
                </text>
                <text
                  x="185"
                  y="128"
                  textAnchor="middle"
                  fill={isSelected('cathode') ? '#FDE68A' : '#CBD5E1'}
                  fontSize="12"
                  fontWeight="700"
                >
                  Cathode (−)
                </text>
              </g>

              {/* Anode + Copper body + Pt/W target */}
              <g
                onClick={() => setSelectedId('anode')}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Chọn Anode và Bia kim loại Pt/W"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedId('anode');
                }}
              >
                {/* Copper anode cylinder */}
                <path
                  d="M 442 128 L 578 128 L 578 202 L 474 202 L 442 128 Z"
                  fill="#B45309"
                  fillOpacity="0.85"
                  stroke={isSelected('anode') ? '#22D3EE' : '#F59E0B'}
                  strokeWidth={isSelected('anode') ? '3' : '1.5'}
                />
                {/* Angled Tungsten / Platinum target plate */}
                <polygon
                  points="436,133 447,128 477,198 466,203"
                  fill="#CBD5E1"
                  stroke="#F8FAFC"
                  strokeWidth="1.5"
                />
                <text
                  x="505"
                  y="114"
                  textAnchor="middle"
                  fill={isSelected('anode') ? '#67E8F9' : '#CBD5E1'}
                  fontSize="12"
                  fontWeight="700"
                >
                  Anode (+) · Bia Pt / W
                </text>
              </g>

              {/* Cooling fins / loop */}
              <g
                onClick={() => setSelectedId('cooling')}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label="Chọn Hệ thống làm nguội"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') setSelectedId('cooling');
                }}
              >
                <rect
                  x="582"
                  y="138"
                  width="36"
                  height="54"
                  rx="6"
                  fill="#0F172A"
                  stroke={isSelected('cooling') ? '#22D3EE' : '#475569'}
                  strokeWidth={isSelected('cooling') ? '3' : '1.5'}
                />
                <line x1="590" y1="148" x2="610" y2="148" stroke="#38BDF8" strokeWidth="2" />
                <line x1="590" y1="165" x2="610" y2="165" stroke="#38BDF8" strokeWidth="2" />
                <line x1="590" y1="182" x2="610" y2="182" stroke="#38BDF8" strokeWidth="2" />
                <text
                  x="600"
                  y="214"
                  textAnchor="middle"
                  fill={isSelected('cooling') ? '#67E8F9' : '#94A3B8'}
                  fontSize="11"
                >
                  Làm nguội
                </text>
              </g>

              {/* Emitted X-rays going down through window */}
              <g>
                <polygon points="452,165 415,275 495,275" fill="url(#beamCyan)" />
                <line
                  x1="452"
                  y1="165"
                  x2="432"
                  y2="275"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeDasharray="6 5"
                  className="animate-dash-flow"
                />
                <line
                  x1="452"
                  y1="165"
                  x2="455"
                  y2="275"
                  stroke="#67E8F9"
                  strokeWidth="2.2"
                  strokeDasharray="8 5"
                  className="animate-dash-flow"
                />
                <line
                  x1="452"
                  y1="165"
                  x2="478"
                  y2="275"
                  stroke="#22D3EE"
                  strokeWidth="1.5"
                  strokeDasharray="6 5"
                  className="animate-dash-flow"
                />
                <text x="530" y="274" fill="#22D3EE" fontSize="12" fontWeight="700">
                  Chùm tia X phát ra
                </text>
              </g>
            </svg>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {TUBE_COMPONENTS.map((part) => (
              <button
                key={part.id}
                type="button"
                onClick={() => setSelectedId(part.id)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  selectedId === part.id
                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200'
                    : 'border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {part.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Component inspection panel */}
        <div className="flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-5">
          <div>
            <p className="font-mono text-xs font-semibold text-cyan-400">{activePart.badge}</p>
            <h3 className="mt-2 font-display text-2xl font-bold text-slate-50">
              {activePart.name}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              {activePart.summary}
            </p>

            <div className="mt-6 border-t border-slate-800 pt-5">
              <p className="text-xs font-semibold text-slate-400 mb-3">
                Thông số &amp; vai trò chính
              </p>
              <ul className="space-y-2.5">
                {activePart.specs.map((spec) => (
                  <li
                    key={spec}
                    className="flex items-start gap-2.5 text-sm text-slate-200"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" aria-hidden="true" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-slate-800 bg-slate-900/70 p-4 text-xs leading-relaxed text-slate-400">
            <strong className="text-slate-200">Ghi nhớ:</strong> Đối cathode (bia) phải dùng kim
            loại có nguyên tử lượng lớn như Platinum (Pt) hoặc Wolfram (W) và nhiệt độ nóng
            chảy rất cao để chịu được va chạm liên tục của chùm electron.
          </div>
        </div>
      </div>
    </section>
  );
}
