export function SlideAppSecurity() {
  return (
    <section
      aria-label="Ứng dụng tia X trong Kiểm tra an ninh"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            IV. Ứng dụng của tia X · 3. Kiểm tra an ninh
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Soi chiếu hành lý &amp; Phân loại vật liệu bằng màu sắc
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400">
          Sân bay · Cửa khẩu · Nhà ga
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: Core points + Color code legend */}
        <div className="animate-stagger-1 flex flex-col justify-between gap-4 rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-5">
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-slate-50">
              Nguyên lí máy soi an ninh hiện đại
            </h3>
            <p className="text-sm leading-relaxed text-slate-300">
              Soi chiếu hành lý, hàng hóa tại sân bay, cửa khẩu, nhà ga mà không cần mở vali kiểm
              tra thủ công.
            </p>
            <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-4">
              <p className="text-sm leading-relaxed text-slate-200">
                Máy hiện đại phân tích <strong>mức hấp thụ tia X</strong> ở hai mức năng lượng khác
                nhau để <strong>tô màu phân biệt chất hữu cơ và kim loại</strong> theo số hiệu
                nguyên tử trung bình.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-4 space-y-2.5 text-xs">
            <p className="font-semibold text-slate-300">Quy ước màu sắc trên màn hình soi chiếu:</p>
            <div className="rounded-lg border border-amber-500/30 bg-amber-950/20 p-3 flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-amber-300">Màu cam — Chất hữu cơ (Z thấp)</p>
                <p className="text-slate-400 mt-0.5">Quần áo, giấy tờ, thực phẩm, chất lỏng</p>
              </div>
              <span className="h-4 w-4 rounded bg-amber-400 shrink-0" aria-hidden="true" />
            </div>
            <div className="rounded-lg border border-cyan-500/30 bg-cyan-950/20 p-3 flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold text-cyan-300">Màu xanh dương — Kim loại (Z cao)</p>
                <p className="text-slate-400 mt-0.5">Khung laptop, chìa khóa, dao kéo, linh kiện</p>
              </div>
              <span className="h-4 w-4 rounded bg-cyan-400 shrink-0" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Right: Animated Airport Luggage Scanner */}
        <div className="animate-stagger-2 flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-6 lg:col-span-7">
          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="font-display text-lg font-bold text-slate-50">
              Mô phỏng băng chuyền soi hành lý sân bay (Dual-Energy X-ray)
            </h3>
            <span className="font-mono text-xs text-cyan-400">Quét liên tục</span>
          </div>

          <div className="flex-1 rounded-xl border border-slate-800 bg-[#060910] p-4 radiograph-grid-fine flex items-center min-h-[340px]">
            <svg
              viewBox="0 0 600 280"
              className="w-full h-auto"
              role="img"
              aria-label="Mô phỏng vali đi qua buồng soi tia X sân bay hiển thị đồ hữu cơ màu cam và kim loại màu xanh dương"
            >
              {/* Conveyor belt */}
              <rect x="20" y="216" width="560" height="16" rx="8" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
              <line x1="30" y1="224" x2="570" y2="224" stroke="#64748B" strokeWidth="2" strokeDasharray="12 10" className="animate-dash-flow" />

              {/* Scanner hood */}
              <rect x="175" y="22" width="250" height="192" rx="14" fill="#0B111C" fillOpacity="0.88" stroke="#38BDF8" strokeWidth="2" />
              <text x="300" y="44" textAnchor="middle" fill="#67E8F9" fontSize="12" fontWeight="700">
                MÀN HÌNH PHÂN TÍCH HẤP THỤ TIA X
              </text>

              {/* X-ray suitcase inside monitor */}
              <g>
                <rect x="195" y="64" width="210" height="132" rx="12" fill="#070C16" stroke="#334155" strokeWidth="1.5" />
                {/* Organic clothes/items -> Amber */}
                <rect x="210" y="80" width="84" height="98" rx="8" fill="#F59E0B" fillOpacity="0.32" stroke="#F59E0B" strokeWidth="1.5" />
                <text x="252" y="128" textAnchor="middle" fill="#FDE68A" fontSize="11" fontWeight="700">
                  Hữu cơ
                </text>
                <text x="252" y="144" textAnchor="middle" fill="#FCD34D" fontSize="9.5">
                  (Hấp thụ yếu)
                </text>

                {/* Metal laptop/keys -> Cyan/Blue */}
                <rect x="306" y="84" width="84" height="50" rx="6" fill="#0284C7" fillOpacity="0.42" stroke="#38BDF8" strokeWidth="1.8" />
                <text x="348" y="113" textAnchor="middle" fill="#7DD3FC" fontSize="11" fontWeight="700">
                  Kim loại
                </text>

                <circle cx="332" cy="162" r="14" fill="#0EA5E9" fillOpacity="0.45" stroke="#22D3EE" strokeWidth="1.8" />
                <rect x="354" y="153" width="36" height="18" rx="4" fill="#38BDF8" fillOpacity="0.35" stroke="#38BDF8" strokeWidth="1.5" />
              </g>

              {/* Animated scanner sweep line across monitor */}
              <g className="animate-scan-x">
                <rect x="198" y="64" width="4" height="132" fill="#22D3EE" fillOpacity="0.7" />
              </g>

              <text x="300" y="256" textAnchor="middle" fill="#94A3B8" fontSize="11">
                Phân biệt nhanh vật liệu hữu cơ, hợp kim và kim loại nặng mà không cần mở hành lý
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
