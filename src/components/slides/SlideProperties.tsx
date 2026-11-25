import { useState } from 'react';
import { ShieldCheck, Zap } from 'lucide-react';

export function SlideProperties() {
  const [fieldEnabled, setFieldEnabled] = useState(true);

  return (
    <section
      aria-label="Tính chất của tia X"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            2. Bản chất và tính chất của tia X
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            4 Tính chất cốt lõi của bức xạ tia X
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400">
          Sóng điện từ · Không mang điện tích · λ = 10⁻¹¹ – 10⁻⁸ m
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: 4 structured property cards */}
        <div className="animate-stagger-1 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
          <div className="rounded-xl border border-slate-800 bg-[#0D131F] p-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-cyan-400">01 · Bản chất</span>
              <h3 className="mt-2 font-display text-lg font-bold text-slate-50">
                Truyền được trong chân không
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Có bản chất là sóng điện từ bước sóng cực ngắn nên truyền được trong chân không
                với vận tốc ánh sáng.
              </p>
            </div>
            <p className="mt-4 font-mono text-xs text-slate-400">c ≈ 3 × 10⁸ m/s</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0D131F] p-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-cyan-400">02 · Điện từ</span>
              <h3 className="mt-2 font-display text-lg font-bold text-slate-50">
                Không bị lệch trong điện &amp; từ trường
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Tia X không mang điện tích, vì thế truyền thẳng khi đi qua vùng có điện trường
                hoặc từ trường mạnh.
              </p>
            </div>
            <p className="mt-4 font-mono text-xs text-slate-400">Điện tích q = 0</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0D131F] p-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-cyan-400">03 · Năng lượng</span>
              <h3 className="mt-2 font-display text-lg font-bold text-slate-50">
                Khả năng đâm xuyên mạnh
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Mang năng lượng cao nên dễ dàng xuyên qua giấy, gỗ, vải, mô mềm cơ thể và
                cả lớp kim loại mỏng (trừ kim loại nặng như Chì).
              </p>
            </div>
            <p className="mt-4 font-mono text-xs text-slate-400">Tính chất nổi bật nhất</p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-[#0D131F] p-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs font-semibold text-cyan-400">04 · Tác dụng</span>
              <h3 className="mt-2 font-display text-lg font-bold text-slate-50">
                Kính ảnh, phát quang &amp; sinh lí mạnh
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Làm đen kính ảnh, làm phát quang một số chất (như BaPt(CN)₄) và có tác dụng
                sinh lí mạnh: hủy diệt tế bào, diệt vi khuẩn.
              </p>
            </div>
            <p className="mt-4 font-mono text-xs text-slate-400">Ứng dụng trong y học</p>
          </div>
        </div>

        {/* Right: Interactive Electric & Magnetic Field Deflection Experiment */}
        <div className="animate-stagger-2 flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs font-medium text-cyan-400">Thí nghiệm kiểm chứng</p>
              <h3 className="font-display text-xl font-bold text-slate-50">
                So sánh Tia X và Chùm Electron trong Điện / Từ trường
              </h3>
            </div>
            <button
              type="button"
              onClick={() => setFieldEnabled((prev) => !prev)}
              className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                fieldEnabled
                  ? 'bg-cyan-500 text-slate-950'
                  : 'border border-slate-700 bg-slate-900 text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Zap className="w-3.5 h-3.5" aria-hidden="true" />
              {fieldEnabled ? 'Đang bật Điện trường E' : 'Đã tắt Điện trường E'}
            </button>
          </div>

          <div className="my-4 rounded-xl border border-slate-800 bg-[#060910] p-4 radiograph-grid-fine">
            <svg
              viewBox="0 0 600 260"
              className="w-full h-auto"
              role="img"
              aria-label="Mô phỏng tia X truyền thẳng trong điện trường còn chùm electron bị lệch về bản dương"
            >
              {/* Capacitor plates */}
              <rect
                x="180"
                y="34"
                width="240"
                height="16"
                rx="4"
                fill={fieldEnabled ? '#F59E0B' : '#334155'}
                fillOpacity={fieldEnabled ? '0.85' : '0.6'}
              />
              <text x="300" y="25" textAnchor="middle" fill="#FDE68A" fontSize="11" fontWeight="600">
                Bản tụ dương (+) {fieldEnabled ? '— Có điện trường E' : '— Ngắt điện'}
              </text>

              <rect
                x="180"
                y="210"
                width="240"
                height="16"
                rx="4"
                fill={fieldEnabled ? '#38BDF8' : '#334155'}
                fillOpacity={fieldEnabled ? '0.65' : '0.6'}
              />
              <text x="300" y="245" textAnchor="middle" fill="#94A3B8" fontSize="11">
                Bản tụ âm (−)
              </text>

              {/* Electric field arrows when active */}
              {fieldEnabled && (
                <g stroke="#475569" strokeWidth="1" strokeDasharray="3 3">
                  <line x1="230" y1="54" x2="230" y2="205" />
                  <line x1="300" y1="54" x2="300" y2="205" />
                  <line x1="370" y1="54" x2="370" y2="205" />
                </g>
              )}

              {/* Source box */}
              <rect x="24" y="100" width="84" height="60" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
              <text x="66" y="128" textAnchor="middle" fill="#E2E8F0" fontSize="11" fontWeight="700">
                Nguồn phát
              </text>
              <text x="66" y="144" textAnchor="middle" fill="#94A3B8" fontSize="10">
                X-ray &amp; e⁻
              </text>

              {/* Electron beam: bends upward when field is ON */}
              <path
                d={
                  fieldEnabled
                    ? 'M 108 118 L 180 118 Q 300 116, 420 62 L 545 48'
                    : 'M 108 118 L 545 118'
                }
                fill="none"
                stroke="#FBBF24"
                strokeWidth="2.5"
                strokeDasharray="8 5"
                className="animate-dash-flow"
              />
              <text
                x="445"
                y={fieldEnabled ? 42 : 106}
                fill="#FDE68A"
                fontSize="11"
                fontWeight="600"
              >
                {fieldEnabled ? 'Chùm electron (−) bị lệch' : 'Chùm electron đi thẳng'}
              </text>

              {/* X-ray beam: ALWAYS straight */}
              <line
                x1="108"
                y1="145"
                x2="545"
                y2="145"
                stroke="#22D3EE"
                strokeWidth="3.5"
                strokeDasharray="12 5"
                className="animate-dash-flow"
              />
              <text x="445" y="168" fill="#67E8F9" fontSize="11" fontWeight="700">
                Tia X luôn truyền thẳng
              </text>

              {/* Detector screen */}
              <rect x="548" y="40" width="16" height="175" rx="4" fill="#0F172A" stroke="#38BDF8" strokeWidth="1.5" />
              <circle cx="556" cy="145" r="5" fill="#22D3EE" />
              <circle cx="556" cy={fieldEnabled ? 48 : 118} r="4.5" fill="#FBBF24" />
            </svg>
          </div>

          <div className="flex items-start gap-3 rounded-lg border border-cyan-500/25 bg-cyan-950/20 p-4 text-xs leading-relaxed text-slate-200">
            <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong className="text-cyan-300">Kết luận thực nghiệm:</strong> Vì không mang điện tích,
              tia X giữ nguyên quỹ đạo thẳng tắp dù đi qua điện trường hay từ trường mạnh — hoàn toàn
              khác với chùm tia âm cực (electron).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
