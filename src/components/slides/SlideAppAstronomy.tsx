import { ResilientImage } from '../ResilientImage';

export function SlideAppAstronomy() {
  return (
    <section
      aria-label="Ứng dụng tia X trong Thiên văn học"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            IV. Ứng dụng của tia X · 5. Thiên văn học
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Kính viễn vọng tia X ngoài không gian &amp; Thiên thể siêu nóng
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400">
          Lỗ đen · Sao neutron · Nhiệt độ hàng triệu °C
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: Core Astronomy Points + Animated Atmospheric Absorption Diagram */}
        <div className="animate-stagger-1 flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-5">
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-slate-50">
              Quan sát vũ trụ ở dải tia X
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Nghiên cứu các thiên thể có nhiệt độ cực cao (hàng triệu độ C) như{' '}
              <strong className="text-slate-100">lỗ đen</strong>,{' '}
              <strong className="text-slate-100">sao neutron</strong> thông qua các kính viễn
              vọng tia X đặt ngoài không gian.
            </p>
            <div className="rounded-lg border border-amber-500/35 bg-amber-950/20 p-4">
              <p className="text-xs font-semibold text-amber-300">
                Vì sao phải phóng kính viễn vọng lên quỹ đạo?
              </p>
              <p className="mt-1 text-sm leading-relaxed text-slate-200">
                Do <strong>khí quyển Trái Đất hấp thụ tia X</strong> từ vũ trụ, các đài quan sát mặt
                đất không thể thu được tia X vũ trụ — buộc phải đặt kính thiên văn ngoài không gian.
              </p>
            </div>
          </div>

          {/* Animated Atmosphere Shield SVG */}
          <div className="rounded-xl border border-slate-800 bg-[#060910] p-3 radiograph-grid-fine">
            <svg
              viewBox="0 0 420 130"
              className="w-full h-auto"
              role="img"
              aria-label="Khí quyển Trái Đất chặn tia X vũ trụ nên kính thiên văn phải đặt trên quỹ đạo"
            >
              {/* Earth curvature & atmosphere */}
              <path d="M 10 118 Q 210 86, 410 118" fill="#0F172A" stroke="#38BDF8" strokeWidth="2" />
              <path d="M 10 92 Q 210 56, 410 92" fill="none" stroke="#22D3EE" strokeWidth="2" strokeDasharray="6 4" />
              <text x="210" y="114" textAnchor="middle" fill="#94A3B8" fontSize="10">
                Trái Đất &amp; Tầng khí quyển hấp thụ tia X
              </text>

              {/* Cosmic X-ray wave stopped at atmosphere */}
              <line
                x1="120"
                y1="14"
                x2="150"
                y2="76"
                stroke="#F59E0B"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                className="animate-dash-flow"
              />
              <circle cx="150" cy="76" r="5" fill="#F43F5E" />
              <text x="90" y="34" fill="#FDE68A" fontSize="10" fontWeight="600">
                Bị khí quyển chặn
              </text>

              {/* Orbital X-ray telescope above atmosphere */}
              <g className="animate-float-slow">
                <rect x="280" y="24" width="44" height="20" rx="4" fill="#F59E0B" stroke="#FDE68A" strokeWidth="1.2" />
                <rect x="256" y="29" width="24" height="10" fill="#0284C7" />
                <rect x="324" y="29" width="24" height="10" fill="#0284C7" />
              </g>
              <line
                x1="360"
                y1="10"
                x2="314"
                y2="28"
                stroke="#22D3EE"
                strokeWidth="2.5"
                strokeDasharray="6 4"
                className="animate-dash-flow"
              />
              <text x="302" y="62" textAnchor="middle" fill="#67E8F9" fontSize="10" fontWeight="700">
                Kính viễn vọng quỹ đạo thu nhận
              </text>
            </svg>
          </div>
        </div>

        {/* Right: Space X-ray Observatory Image with animated orbital signal sweep */}
        <div className="animate-stagger-2 flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-5 lg:col-span-7">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-slate-100">
              Đài quan sát tia X vũ trụ hướng về đĩa bồi tụ lỗ đen
            </p>
            <span className="font-mono text-xs text-amber-400">Chandra / XMM-Newton</span>
          </div>

          <div className="relative flex-1 overflow-hidden rounded-lg border border-slate-800 bg-black min-h-[340px]">
            <ResilientImage
              src="/src/assets/images/app_space_xray_telescope_1795609046672.jpg"
              alt="Kính viễn vọng tia X ngoài không gian quan sát đĩa bồi tụ phát tia X quanh lỗ đen"
              fallbackTitle="Kính viễn vọng tia X ngoài không gian"
              className="h-full w-full object-cover"
            />
            <div
              aria-hidden="true"
              className="animate-scan-x pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"
            />
            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-200">
              <span>Vật chất rơi vào lỗ đen nóng hàng triệu °C phát bức xạ tia X cực mạnh</span>
              <span className="font-mono text-cyan-300">Quỹ đạo ngoài khí quyển</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
