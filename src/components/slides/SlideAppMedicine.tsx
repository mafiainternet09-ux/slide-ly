import { useState } from 'react';
import { ResilientImage } from '../ResilientImage';

type MedMode = 'xray' | 'ct' | 'therapy';

export function SlideAppMedicine() {
  const [medMode, setMedMode] = useState<MedMode>('ct');

  return (
    <section
      aria-label="Ứng dụng tia X trong Y học"
      className="mx-auto flex w-full max-w-[1360px] flex-col justify-center gap-6 px-4 py-6 sm:px-6"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800/80 pb-4">
        <div>
          <p className="text-xs font-medium text-cyan-400">
            IV. Ứng dụng của tia X · 1. Y học (Quan trọng nhất)
          </p>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-50 text-balance">
            Chẩn đoán hình ảnh &amp; Xạ trị ung thư
          </h2>
        </div>

        <div
          className="flex items-center gap-1 rounded-lg border border-slate-800 bg-slate-900 p-1"
          role="tablist"
          aria-label="Chọn kỹ thuật y học tia X"
        >
          <button
            type="button"
            role="tab"
            aria-selected={medMode === 'xray'}
            onClick={() => setMedMode('xray')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              medMode === 'xray'
                ? 'bg-cyan-500 text-slate-950'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            X-quang thường quy
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={medMode === 'ct'}
            onClick={() => setMedMode('ct')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              medMode === 'ct'
                ? 'bg-cyan-500 text-slate-950'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            CT Scanner 3D
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={medMode === 'therapy'}
            onClick={() => setMedMode('therapy')}
            className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
              medMode === 'therapy'
                ? 'bg-amber-400 text-slate-950'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            Xạ trị
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
        {/* Left: Core Medical Points */}
        <div className="animate-stagger-1 flex flex-col justify-between gap-4 lg:col-span-5">
          <div
            className={`rounded-xl border p-5 transition-colors ${
              medMode === 'xray' || medMode === 'ct'
                ? 'border-cyan-500/60 bg-cyan-950/20'
                : 'border-slate-800 bg-[#0D131F]'
            }`}
          >
            <p className="font-mono text-xs font-semibold text-cyan-400">Chẩn đoán</p>
            <h3 className="mt-1 font-display text-xl font-bold text-slate-50">
              X-quang thường quy &amp; CT Scanner
            </h3>
            <ul className="mt-3 space-y-2.5 text-sm leading-relaxed text-slate-300">
              <li>
                <strong className="text-slate-100">Chụp X-quang thường quy:</strong> phát hiện nhanh
                gãy xương, tổn thương phổi (viêm phổi) nhờ sự chênh lệch hấp thụ tia giữa xương và
                mô mềm.
              </li>
              <li>
                <strong className="text-slate-100">Chụp cắt lớp vi tính (CT Scanner):</strong> đầu
                phát quay nhiều góc quanh cơ thể, ghép lát cắt tạo ảnh 3D chi tiết.
              </li>
            </ul>
          </div>

          <div
            className={`rounded-xl border p-5 transition-colors ${
              medMode === 'therapy'
                ? 'border-amber-400/70 bg-amber-950/20'
                : 'border-slate-800 bg-[#0D131F]'
            }`}
          >
            <p className="font-mono text-xs font-semibold text-amber-400">Điều trị</p>
            <h3 className="mt-1 font-display text-xl font-bold text-slate-50">
              Xạ trị tiêu diệt tế bào ung thư
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
              Xạ trị dùng chùm tia X năng lượng cao hội tụ chính xác vào khối u để tiêu diệt các
              tế bào ung thư nông, hạn chế ảnh hưởng đến mô lành xung quanh.
            </p>
          </div>

          {/* Animated CT Gantry mini schematic */}
          <div className="rounded-xl border border-slate-800 bg-[#0D131F] p-4 flex items-center gap-4">
            <svg viewBox="0 0 88 88" className="w-16 h-16 shrink-0" aria-hidden="true">
              <circle cx="44" cy="44" r="38" fill="#060910" stroke="#334155" strokeWidth="2" />
              <g className="animate-slow-spin">
                <circle
                  cx="44"
                  cy="44"
                  r="30"
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="2.5"
                  strokeDasharray="18 14"
                />
                <circle cx="44" cy="14" r="4" fill="#F59E0B" />
                <line x1="44" y1="14" x2="44" y2="74" stroke="#22D3EE" strokeWidth="1.2" strokeOpacity="0.6" />
              </g>
              <circle cx="44" cy="44" r="10" fill="#1E293B" stroke="#64748B" strokeWidth="1.5" />
            </svg>
            <div className="text-xs">
              <p className="font-semibold text-slate-100">Chuyển động quay CT 360°</p>
              <p className="mt-1 text-slate-400">
                Nguồn phát và đầu thu quay đồng bộ quanh bệnh nhân để tái tạo hình ảnh không gian 3
                chiều.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Animated visual stage */}
        <div className="animate-stagger-2 flex flex-col justify-between rounded-xl border border-slate-800 bg-[#0D131F] p-5 lg:col-span-7">
          {medMode === 'therapy' ? (
            <>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-100">
                  Mô phỏng Xạ trị hội tụ đa góc tia X năng lượng cao
                </p>
                <span className="font-mono text-xs text-amber-400">Tác dụng sinh lí mạnh</span>
              </div>
              <div className="flex-1 rounded-lg border border-slate-800 bg-[#060910] p-4 flex items-center justify-center radiograph-grid-fine min-h-[340px]">
                <svg
                  viewBox="0 0 560 280"
                  className="w-full h-auto"
                  role="img"
                  aria-label="Mô phỏng tia X năng lượng cao hội tụ vào khối u trong xạ trị"
                >
                  {/* Tissue contour */}
                  <ellipse cx="280" cy="145" rx="150" ry="92" fill="#0F172A" stroke="#334155" strokeWidth="2" />
                  {/* Tumor target */}
                  <circle cx="280" cy="145" r="24" fill="#F43F5E" fillOpacity="0.35" stroke="#FB7185" strokeWidth="2">
                    <animate attributeName="r" values="22;26;22" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x="280" y="149" textAnchor="middle" fill="#FECDD3" fontSize="11" fontWeight="700">
                    Khối u
                  </text>

                  {/* Converging high-energy beams */}
                  <line x1="60" y1="30" x2="280" y2="145" stroke="#22D3EE" strokeWidth="3" strokeDasharray="10 6" className="animate-dash-flow" />
                  <line x1="500" y1="30" x2="280" y2="145" stroke="#22D3EE" strokeWidth="3" strokeDasharray="10 6" className="animate-dash-flow" />
                  <line x1="60" y1="255" x2="280" y2="145" stroke="#F59E0B" strokeWidth="3" strokeDasharray="10 6" className="animate-dash-flow" />
                  <line x1="500" y1="255" x2="280" y2="145" stroke="#F59E0B" strokeWidth="3" strokeDasharray="10 6" className="animate-dash-flow" />
                  <text x="280" y="266" textAnchor="middle" fill="#94A3B8" fontSize="11">
                    Các chùm tia X giao nhau tại tâm khối u để tối đa liều tiêu diệt tế bào bệnh
                  </text>
                </svg>
              </div>
            </>
          ) : (
            <>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-semibold text-slate-100">
                  {medMode === 'ct'
                    ? 'Ảnh cắt lớp vi tính CT Scanner lồng ngực 3D'
                    : 'Ảnh chụp X-quang lồng ngực & hệ xương'}
                </p>
                <span className="font-mono text-xs text-cyan-400">
                  {medMode === 'ct' ? 'Quay đa góc 360°' : 'Chẩn đoán thường quy'}
                </span>
              </div>
              <div className="relative flex-1 overflow-hidden rounded-lg border border-slate-800 bg-black min-h-[340px]">
                <ResilientImage
                  src="/src/assets/images/app_medical_ct_scanner_1795609045437.jpg"
                  alt="Hình ảnh chụp cắt lớp vi tính CT lồng ngực và xương sườn bằng tia X"
                  fallbackTitle="Chụp cắt lớp vi tính CT Scanner"
                  className={`h-full w-full object-cover transition-all duration-300 ${
                    medMode === 'xray' ? 'saturate-0 contrast-125' : ''
                  }`}
                />
                {/* Live radiographic sweep line */}
                <div
                  aria-hidden="true"
                  className="animate-scan-y pointer-events-none absolute inset-x-0 h-16 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent border-b border-cyan-300/50"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"
                />
                <p className="absolute bottom-3 left-3 right-3 text-xs text-slate-200">
                  {medMode === 'ct'
                    ? 'CT Scanner quay nhiều góc tạo ảnh cắt lớp và dựng hình 3D chi tiết phổi, tim mạch, xương.'
                    : 'Chụp X-quang thường quy giúp bác sĩ quan sát nhanh gãy xương hoặc vùng tổn thương phổi.'}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
