import { useState } from 'react';

type IndustryMode = 'food' | 'weld';

export function SlideAppIndustry() {
  const [mode, setMode] = useState<IndustryMode>('food');

  return (
    <section
      aria-label="Ứng dụng tia X trong Công nghiệp và Cơ khí"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            IV. Ứng dụng của tia X · 2. Công nghiệp &amp; Cơ khí
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Dây chuyền đóng gói &amp; Kiểm tra mối hàn không phá hủy
          </h2>
        </div>

        <div
          className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 p-1"
          role="tablist"
          aria-label="Chọn mô phỏng công nghiệp"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'food'}
            onClick={() => setMode('food')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              mode === 'food'
                ? 'bg-cyan-500 text-slate-950'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            Dị vật đóng gói
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'weld'}
            onClick={() => setMode('weld')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              mode === 'weld'
                ? 'bg-amber-400 text-slate-950'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            Vật đúc &amp; Mối hàn
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: Core Points */}
        <div className="animate-stagger-1 flex flex-col justify-between gap-4 lg:col-span-5">
          <div
            onClick={() => setMode('food')}
            className={`rounded-xl border p-5 transition-colors cursor-pointer ${
              mode === 'food'
                ? 'border-cyan-500/60 bg-cyan-950/20'
                : 'border-slate-800 bg-[#0D131F]'
            }`}
          >
            <p className="font-mono text-xs font-semibold text-cyan-400">Dây chuyền sản xuất</p>
            <h3 className="mt-1 font-display text-xl font-bold text-slate-50">
              Quét tạp chất &amp; dị vật trong thực phẩm
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Quét phát hiện tạp chất, dị vật (mảnh kim loại, thủy tinh, đá sạn) bên trong dây
              chuyền đóng gói sản phẩm, thực phẩm mà không cần mở bao bì.
            </p>
          </div>

          <div
            onClick={() => setMode('weld')}
            className={`rounded-xl border p-5 transition-colors cursor-pointer ${
              mode === 'weld'
                ? 'border-amber-400/70 bg-amber-950/20'
                : 'border-slate-800 bg-[#0D131F]'
            }`}
          >
            <p className="font-mono text-xs font-semibold text-amber-400">
              Kiểm tra không phá hủy (NDT)
            </p>
            <h3 className="mt-1 font-display text-xl font-bold text-slate-50">
              Soi khuyết tật vật đúc &amp; mối hàn kim loại
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Kiểm tra khuyết tật bên trong vật đúc, mối hàn kim loại (bọt khí, vết nứt ngầm) mà
              không cần phá hủy mẫu vật — sử dụng tia X cứng có độ đâm xuyên cao.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-4 text-xs leading-relaxed text-slate-400">
            <strong className="text-slate-200">Ưu điểm vượt trội:</strong> Kiểm tra được 100% sản
            phẩm tốc độ cao trên băng chuyền và giữ nguyên vẹn cấu trúc chi tiết cơ khí đắt tiền.
          </div>
        </div>

        {/* Right: Animated Conveyor / Weld Scanner */}
        <div className="animate-stagger-2 flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-7">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="font-display text-lg font-bold text-slate-50">
              {mode === 'food'
                ? 'Dây chuyền X-ray phát hiện dị vật đóng gói'
                : 'Đầu quét tia X cứng kiểm tra bọt khí & vết nứt mối hàn'}
            </h3>
            <span className="font-mono text-xs text-cyan-400">Mô phỏng trực tiếp</span>
          </div>

          <div className="flex-1 rounded-xl border border-slate-800 bg-[#060910] p-4 radiograph-grid-fine flex items-center min-h-[340px]">
            {mode === 'food' ? (
              <svg
                viewBox="0 0 580 260"
                className="w-full h-auto"
                role="img"
                aria-label="Mô phỏng dây chuyền đóng gói thực phẩm đi qua máy quét tia X phát hiện dị vật"
              >
                {/* X-ray scanner arch */}
                <rect x="230" y="24" width="120" height="164" rx="10" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
                <polygon points="290,46 248,180 332,180" fill="#22D3EE" fillOpacity="0.18" />
                <line x1="290" y1="46" x2="290" y2="180" stroke="#22D3EE" strokeWidth="2" strokeDasharray="6 4" className="animate-dash-flow" />
                <text x="290" y="18" textAnchor="middle" fill="#67E8F9" fontSize="11" fontWeight="700">
                  Cổng quét Tia X công nghiệp
                </text>

                {/* Conveyor belt */}
                <rect x="20" y="180" width="540" height="18" rx="9" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                <line x1="30" y1="189" x2="550" y2="189" stroke="#475569" strokeWidth="2" strokeDasharray="12 10" className="animate-dash-flow" />

                {/* Moving package 1 (clean) */}
                <g className="animate-conveyor">
                  <rect x="0" y="128" width="76" height="50" rx="6" fill="#0B1424" stroke="#38BDF8" strokeWidth="1.5" />
                  <text x="38" y="157" textAnchor="middle" fill="#7DD3FC" fontSize="10" fontWeight="600">
                    Đạt chuẩn
                  </text>
                </g>

                {/* Moving package 2 (with metallic impurity detected) */}
                <g className="animate-conveyor" style={{ animationDelay: '-2.6s' }}>
                  <rect x="0" y="128" width="76" height="50" rx="6" fill="#0B1424" stroke="#F43F5E" strokeWidth="2" />
                  <polygon points="32,145 46,152 38,164" fill="#F43F5E" />
                  <text x="38" y="120" textAnchor="middle" fill="#FDA4AF" fontSize="10" fontWeight="700">
                    Có dị vật!
                  </text>
                </g>

                <text x="290" y="232" textAnchor="middle" fill="#94A3B8" fontSize="11">
                  Tự động loại bỏ gói hàng chứa mảnh kim loại hoặc tạp chất mật độ cao
                </text>
              </svg>
            ) : (
              <svg
                viewBox="0 0 580 260"
                className="w-full h-auto"
                role="img"
                aria-label="Mô phỏng quét tia X mối hàn kim loại phát hiện bọt khí và vết nứt ngầm"
              >
                {/* Metal plates */}
                <rect x="50" y="78" width="215" height="114" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                <rect x="315" y="78" width="215" height="114" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
                {/* Weld seam */}
                <rect x="262" y="70" width="56" height="130" rx="10" fill="#334155" stroke="#64748B" strokeWidth="1.5" />

                {/* Internal defects */}
                <circle cx="290" cy="108" r="11" fill="#22D3EE" fillOpacity="0.28" stroke="#22D3EE" strokeWidth="2" />
                <path d="M 278 144 L 296 158 L 284 176" fill="none" stroke="#F59E0B" strokeWidth="3" />

                {/* Animated scanner head sweeping horizontally */}
                <g className="animate-scan-x">
                  <rect x="60" y="40" width="6" height="168" fill="#22D3EE" fillOpacity="0.45" />
                </g>

                <line x1="302" y1="108" x2="365" y2="96" stroke="#22D3EE" strokeWidth="1.5" />
                <text x="372" y="100" fill="#67E8F9" fontSize="12" fontWeight="600">
                  Bọt khí ngầm (tia xuyên mạnh)
                </text>
                <line x1="296" y1="158" x2="365" y2="162" stroke="#F59E0B" strokeWidth="1.5" />
                <text x="372" y="166" fill="#FDE68A" fontSize="12" fontWeight="600">
                  Vết nứt ngầm bên trong
                </text>
                <text x="290" y="234" textAnchor="middle" fill="#94A3B8" fontSize="11">
                  Kiểm tra vật đúc và mối hàn cầu đường, tàu thủy, đường ống áp lực
                </text>
              </svg>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
