import { ArrowRight, Layers } from 'lucide-react';
import { ResilientImage } from '../ResilientImage';

interface SlideCoverProps {
  onStart: () => void;
  onOpenOverview: () => void;
}

const KEY_METRICS = [
  { label: 'Phát hiện lịch sử', value: '1895', note: 'Wilhelm Conrad Röntgen · Nobel 1901' },
  { label: 'Dải bước sóng', value: '10⁻¹¹ – 10⁻⁸ m', note: 'Sóng điện từ bước sóng cực ngắn' },
  { label: 'Hiệu điện thế ống', value: '~ 200 kV', note: 'Gia tốc chùm electron tới bia Pt / W' },
  { label: 'Định luật suy giảm', value: 'I = I₀ e^(−μd)', note: 'Hấp thụ theo độ dày d và hệ số μ' },
];

export function SlideCover({ onStart, onOpenOverview }: SlideCoverProps) {
  return (
    <section
      aria-label="Trang bìa bài thuyết trình Tia X"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6 lg:py-8"
    >
      {/* Hero 2-column split */}
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        <div className="animate-stagger-1 flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-6 sm:p-8 lg:col-span-6">
          <div>
            <p className="text-xs font-medium tracking-wide text-cyan-400">
              Vật lí Hiện đại · Bức xạ Điện từ Năng lượng Cao
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-slate-50 sm:text-5xl text-balance">
              Tia X &amp; Cơ chế Bức xạ Röntgen
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              Từ phát hiện tình cờ làm phát quang màn huỳnh quang năm 1895 đến công cụ
              chẩn đoán y khoa, kiểm tra vật liệu và quan sát lỗ đen ngoài vũ trụ.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            <div className="grid grid-cols-2 gap-3 border-t border-slate-800/90 pt-5 text-sm">
              <div>
                <p className="text-xs text-slate-400">Nội dung trọng tâm</p>
                <p className="mt-1 font-medium text-slate-100">
                  Cấu tạo ống, điều khiển &amp; tính chất
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Ứng dụng &amp; Định lượng</p>
                <p className="mt-1 font-medium text-slate-100">
                  Độ suy giảm, y học, công nghiệp, an toàn
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onStart}
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Bắt đầu thuyết trình
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onOpenOverview}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Layers className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                Xem 16 trang nội dung
              </button>
            </div>
          </div>
        </div>

        <div className="animate-stagger-2 relative overflow-hidden rounded-xl border border-slate-800 bg-[#0B101A] lg:col-span-6 min-h-[300px] lg:min-h-[420px]">
          <ResilientImage
            src="/src/assets/images/hero_xray_spectrum_1795609044648.jpg"
            alt="Ống phát tia X chân không phát chùm bức xạ màu xanh lam trong phòng thí nghiệm"
            fallbackTitle="Ống phát tia X chân không"
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="animate-scan-x pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070B12]/90 via-transparent to-transparent"
          />
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-cyan-300">Ống phát tia X chân không</p>
              <p className="text-sm font-semibold text-slate-100">
                Electron gia tốc đập vào bia Wolfram / Platinum phát tia X
              </p>
            </div>
            <span className="font-mono text-xs text-slate-300">λ ≈ 10⁻¹¹ – 10⁻⁸ m</span>
          </div>
        </div>
      </div>

      {/* 4-column summary strip below hero split */}
      <div className="animate-stagger-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {KEY_METRICS.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-slate-800 bg-[#0D131F] p-5"
          >
            <p className="text-xs text-slate-400">{item.label}</p>
            <p className="mt-1.5 font-mono text-2xl font-bold text-slate-50">{item.value}</p>
            <p className="mt-1 text-xs text-slate-400">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
