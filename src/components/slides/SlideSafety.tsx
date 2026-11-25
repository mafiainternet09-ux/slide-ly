import { useState } from 'react';
import { AlertTriangle, Shield, ShieldCheck } from 'lucide-react';

export function SlideSafety() {
  const [wearLeadApron, setWearLeadApron] = useState(true);
  const [removeJewelry, setRemoveJewelry] = useState(true);

  return (
    <section
      aria-label="Tác hại và lưu ý an toàn bức xạ tia X"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            IV. Ứng dụng &amp; An toàn bức xạ · 6. Tác hại và lưu ý an toàn (Mở rộng)
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Tác hại ion hóa &amp; Biện pháp bảo vệ khi chụp X-quang
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400">
          Chì (Pb) có μ cực lớn · Tháo trang sức kim loại
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: Core Harm & Protection Content */}
        <div className="animate-stagger-1 flex flex-col justify-between gap-4 lg:col-span-5">
          <div className="rounded-xl border border-rose-500/35 bg-rose-950/15 p-5">
            <div className="flex items-center gap-2.5 text-rose-300">
              <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <h3 className="font-display text-xl font-bold">Tác hại của tia X</h3>
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Tia X có tính <strong className="text-slate-100">ion hóa mạnh</strong> → Tiếp xúc quá
              liều gây tổn thương tế bào, rụng tóc, bỏng da, đột biến gen.
            </p>
          </div>

          <div className="rounded-xl border border-cyan-500/35 bg-[#0D131F] p-5 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-cyan-300">
                <Shield className="w-5 h-5 shrink-0" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold">Biện pháp bảo vệ</h3>
              </div>
              <ul className="mt-3.5 space-y-3 text-sm leading-relaxed text-slate-300">
                <li className="rounded-lg border border-slate-800 bg-slate-900/75 p-4">
                  <strong className="text-slate-100">Tháo bỏ trang sức kim loại:</strong> Khi chụp
                  X-quang cần tháo bỏ trang sức kim loại để tránh tạo vệt trắng giả che tổn thương.
                </li>
                <li className="rounded-lg border border-slate-800 bg-slate-900/75 p-4">
                  <strong className="text-slate-100">Mặc tạp dề bằng Chì (Pb):</strong> Chì là kim
                  loại nặng có hệ số suy giảm <span className="font-mono text-cyan-300">μ</span> cực
                  lớn, giúp che chắn các cơ quan nhạy cảm khỏi tia X.
                </li>
              </ul>
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
              <span>Nguyên tắc ALARA: Giảm thời gian chiếu · Giữ khoảng cách · Che chắn Chì.</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive Radiation Protection & Artifact Simulator */}
        <div className="animate-stagger-2 flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-cyan-400">Mô phỏng an toàn X-quang</p>
              <h3 className="font-display text-lg font-bold text-slate-50">
                Kiểm chứng tác dụng của Tạp dề Chì &amp; Tháo trang sức
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                role="switch"
                aria-checked={wearLeadApron}
                onClick={() => setWearLeadApron((prev) => !prev)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  wearLeadApron
                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200'
                    : 'border-rose-500/50 bg-rose-950/30 text-rose-200'
                }`}
              >
                {wearLeadApron ? 'Đang mặc tạp dề Chì' : 'Không mặc tạp dề Chì'}
              </button>

              <button
                type="button"
                role="switch"
                aria-checked={removeJewelry}
                onClick={() => setRemoveJewelry((prev) => !prev)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  removeJewelry
                    ? 'border-cyan-400 bg-cyan-500/20 text-cyan-200'
                    : 'border-amber-400/60 bg-amber-950/30 text-amber-200'
                }`}
              >
                {removeJewelry ? 'Đã tháo trang sức' : 'Đang đeo trang sức'}
              </button>
            </div>
          </div>

          <div className="flex-1 rounded-xl border border-slate-800 bg-[#060910] p-4 radiograph-grid-fine flex items-center min-h-[300px]">
            <svg
              viewBox="0 0 600 260"
              className="w-full h-auto"
              role="img"
              aria-label="Mô phỏng tạp dề Chì chắn tia X và ảnh hưởng của trang sức kim loại trên phim X-quang"
            >
              {/* Left panel: Lead Apron Shielding */}
              <rect x="20" y="20" width="270" height="220" rx="10" fill="#0B111C" stroke="#1E293B" strokeWidth="1.5" />
              <text x="155" y="42" textAnchor="middle" fill="#CBD5E1" fontSize="11.5" fontWeight="700">
                1. Che chắn bằng Chì (Z = 82)
              </text>

              {/* Incoming X-ray waves */}
              <line x1="36" y1="96" x2={wearLeadApron ? 128 : 242} y2="96" stroke="#22D3EE" strokeWidth="3" strokeDasharray="8 5" className="animate-dash-flow" />
              <line x1="36" y1="136" x2={wearLeadApron ? 128 : 242} y2="136" stroke="#22D3EE" strokeWidth="3" strokeDasharray="8 5" className="animate-dash-flow" />
              <line x1="36" y1="176" x2={wearLeadApron ? 128 : 242} y2="176" stroke="#22D3EE" strokeWidth="3" strokeDasharray="8 5" className="animate-dash-flow" />

              {/* Lead shield plate */}
              {wearLeadApron && (
                <g>
                  <rect x="130" y="68" width="22" height="136" rx="4" fill="#334155" stroke="#22D3EE" strokeWidth="2" />
                  <text x="141" y="222" textAnchor="middle" fill="#67E8F9" fontSize="10" fontWeight="700">
                    Tạp dề Chì (Pb)
                  </text>
                </g>
              )}

              {/* Protected organ */}
              <ellipse
                cx="228"
                cy="136"
                rx="32"
                ry="46"
                fill={wearLeadApron ? '#059669' : '#E11D48'}
                fillOpacity="0.25"
                stroke={wearLeadApron ? '#34D399' : '#FB7185'}
                strokeWidth="2"
              />
              <text
                x="228"
                y="134"
                textAnchor="middle"
                fill={wearLeadApron ? '#A7F3D0' : '#FECDD3'}
                fontSize="11"
                fontWeight="700"
              >
                {wearLeadApron ? 'An toàn' : 'Quá liều!'}
              </text>
              <text x="228" y="150" textAnchor="middle" fill="#94A3B8" fontSize="9.5">
                Cơ quan nhạy cảm
              </text>

              {/* Right panel: Jewelry artifact */}
              <rect x="310" y="20" width="270" height="220" rx="10" fill="#0B111C" stroke="#1E293B" strokeWidth="1.5" />
              <text x="445" y="42" textAnchor="middle" fill="#CBD5E1" fontSize="11.5" fontWeight="700">
                2. Ảnh hưởng trang sức kim loại
              </text>

              {/* Simulated rib/chest radiograph */}
              <rect x="355" y="64" width="180" height="145" rx="8" fill="#070C16" stroke="#334155" strokeWidth="1.5" />
              {/* Spine & ribs */}
              <rect x="441" y="76" width="8" height="120" rx="3" fill="#94A3B8" fillOpacity="0.45" />
              <path d="M 385 95 Q 445 84, 505 95" fill="none" stroke="#94A3B8" strokeWidth="4" strokeOpacity="0.35" />
              <path d="M 380 122 Q 445 110, 510 122" fill="none" stroke="#94A3B8" strokeWidth="4" strokeOpacity="0.35" />
              <path d="M 385 150 Q 445 138, 505 150" fill="none" stroke="#94A3B8" strokeWidth="4" strokeOpacity="0.35" />
              {/* Subtle lesion */}
              <circle cx="416" cy="128" r="10" fill="#38BDF8" fillOpacity="0.35" stroke="#38BDF8" strokeWidth="1.5" />

              {/* Metallic necklace artifact if jewelry NOT removed */}
              {!removeJewelry && (
                <g>
                  <path
                    d="M 392 84 Q 445 162, 498 84"
                    fill="none"
                    stroke="#F8FAFC"
                    strokeWidth="7"
                  />
                  <circle cx="422" cy="128" r="15" fill="#F8FAFC" />
                  <text x="445" y="196" textAnchor="middle" fill="#FDE68A" fontSize="10" fontWeight="700">
                    Vệt trắng giả che lấp tổn thương!
                  </text>
                </g>
              )}
              {removeJewelry && (
                <text x="445" y="196" textAnchor="middle" fill="#67E8F9" fontSize="10" fontWeight="700">
                  Phim sạch rõ nét, chẩn đoán chính xác
                </text>
              )}
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs">
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
              <span className="font-semibold text-slate-200">Che chắn bằng Chì: </span>
              <span className="text-slate-400">
                {wearLeadApron
                  ? 'Hấp thụ mạnh tia X, giảm liều chiếu xuống mức an toàn.'
                  : 'Tia X xuyên trực tiếp qua mô, tăng nguy cơ tổn thương tế bào.'}
              </span>
            </div>
            <div className="rounded-lg border border-slate-800 bg-slate-900/70 p-3">
              <span className="font-semibold text-slate-200">Trang sức kim loại: </span>
              <span className="text-slate-400">
                {removeJewelry
                  ? 'Đã tháo bỏ — vùng tổn thương hiển thị rõ trên phim.'
                  : 'Cản tia tạo vệt trắng giả, che khuất dấu hiệu bệnh lý.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
