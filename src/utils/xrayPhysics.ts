export interface AttenuationMaterial {
  id: string;
  name: string;
  formula: string;
  densityGcm3: number;
  muPerMeter: number; // Linear attenuation coefficient in m^-1 for diagnostic X-rays (~60-80 keV)
  description: string;
  accentHex: string;
}

export const ATTENUATION_MATERIALS: AttenuationMaterial[] = [
  {
    id: 'soft-tissue',
    name: 'Mô mềm / Nước',
    formula: 'H₂O',
    densityGcm3: 1.0,
    muPerMeter: 19.0,
    description: 'Mật độ thấp, số hiệu nguyên tử nhỏ — tia X truyền qua dễ dàng, cho vùng tối trên phim.',
    accentHex: '#38BDF8',
  },
  {
    id: 'aluminum',
    name: 'Nhôm (Bộ lọc)',
    formula: 'Al (Z = 13)',
    densityGcm3: 2.7,
    muPerMeter: 54.0,
    description: 'Thường dùng làm bộ lọc hấp thụ tia X mềm để tăng năng lượng trung bình chùm tia.',
    accentHex: '#94A3B8',
  },
  {
    id: 'bone',
    name: 'Xương (Canxi)',
    formula: 'Ca₁₀(PO₄)₆(OH)₂',
    densityGcm3: 1.85,
    muPerMeter: 98.0,
    description: 'Giàu Canxi (Z = 20), hấp thụ tia X mạnh hơn mô mềm nhiều lần, tạo ảnh xương trắng rõ.',
    accentHex: '#E2E8F0',
  },
  {
    id: 'iron',
    name: 'Thép / Sắt',
    formula: 'Fe (Z = 26)',
    densityGcm3: 7.87,
    muPerMeter: 470.0,
    description: 'Mật độ cao, đòi hỏi tia X cứng năng lượng rất lớn để kiểm tra khuyết tật mối hàn.',
    accentHex: '#F59E0B',
  },
  {
    id: 'lead',
    name: 'Chì (Tạp dề bảo hộ)',
    formula: 'Pb (Z = 82)',
    densityGcm3: 11.34,
    muPerMeter: 2800.0,
    description: 'Nguyên tử lượng và mật độ cực lớn, hệ số μ rất cao — vật liệu tiêu chuẩn che chắn tia X.',
    accentHex: '#22D3EE',
  },
];

/**
 * Calculates X-ray beam intensity I = P / S (W/m^2).
 */
export function calculateBeamIntensity(powerWatts: number, areaSqMeters: number): number {
  if (areaSqMeters <= 0) {
    throw new Error('Diện tích mặt cắt ngang S phải lớn hơn 0.');
  }
  if (powerWatts < 0) {
    throw new Error('Công suất chùm tia P không được âm.');
  }
  return powerWatts / areaSqMeters;
}

export interface AttenuationResult {
  transmittedIntensity: number;
  absorbedIntensity: number;
  transmissionRatio: number; // 0..1
  transmissionPercent: number; // 0..100
  halfValueLayerMm: number; // d_1/2 = ln(2) / mu in mm
}

/**
 * Computes exponential attenuation I = I0 * e^(-mu * d).
 */
export function calculateAttenuation(
  initialIntensity: number,
  muPerMeter: number,
  thicknessMm: number
): AttenuationResult {
  const safeI0 = Math.max(0, initialIntensity);
  const safeMu = Math.max(0, muPerMeter);
  const thicknessMeters = Math.max(0, thicknessMm) / 1000;

  const ratio = Math.exp(-safeMu * thicknessMeters);
  const transmittedIntensity = safeI0 * ratio;
  const absorbedIntensity = safeI0 - transmittedIntensity;
  const halfValueLayerMm = safeMu > 0 ? (Math.LN2 / safeMu) * 1000 : Infinity;

  return {
    transmittedIntensity,
    absorbedIntensity,
    transmissionRatio: ratio,
    transmissionPercent: ratio * 100,
    halfValueLayerMm,
  };
}

export interface TubeSpectrumPoint {
  wavelengthPm: number;
  intensity: number;
}

export interface TubeSimulationResult {
  minWavelengthPm: number;
  effectivePeakWavelengthPm: number;
  hardnessLabel: 'Tia X mềm' | 'Tia X trung bình' | 'Tia X cứng';
  penetrationPercent: number;
  relativeBeamFlux: number;
  thermalHeatPercent: number;
  xrayConversionPercent: number;
  spectrumPoints: TubeSpectrumPoint[];
}

/**
 * Simulates X-ray tube output parameters based on filament current (mA),
 * anode-cathode voltage (kV), and optional soft-X-ray aluminum filter.
 */
export function simulateXrayTube(
  voltageKv: number,
  filamentCurrentMa: number,
  useSoftFilter: boolean
): TubeSimulationResult {
  const clampedKv = Math.min(250, Math.max(20, voltageKv));
  const clampedMa = Math.min(500, Math.max(10, filamentCurrentMa));

  // Duane-Hunt law: lambda_min (pm) ≈ 1239.84 / V_kV
  const minWavelengthPm = 1239.84 / clampedKv;

  // Higher voltage produces harder X-rays; soft filter shifts average energy up by removing long wavelengths
  const effectivePeakWavelengthPm = useSoftFilter
    ? minWavelengthPm * 1.38
    : minWavelengthPm * 1.85;

  let hardnessLabel: TubeSimulationResult['hardnessLabel'] = 'Tia X trung bình';
  if (clampedKv < 65 && !useSoftFilter) {
    hardnessLabel = 'Tia X mềm';
  } else if (clampedKv >= 120 || (clampedKv >= 95 && useSoftFilter)) {
    hardnessLabel = 'Tia X cứng';
  }

  // Penetration score (0-100) scales with kV and filter
  const basePenetration = ((clampedKv - 20) / (250 - 20)) * 85 + (useSoftFilter ? 12 : 0);
  const penetrationPercent = Math.min(100, Math.max(5, Math.round(basePenetration)));

  // Relative intensity scales linearly with mA and roughly with kV^2, reduced slightly by filter attenuation
  const rawFlux = (clampedMa / 100) * Math.pow(clampedKv / 100, 1.6);
  const relativeBeamFlux = Number((useSoftFilter ? rawFlux * 0.78 : rawFlux).toFixed(2));

  // Generate Bremsstrahlung + characteristic peak curve from 5 pm to 90 pm
  const spectrumPoints: TubeSpectrumPoint[] = [];
  const scaleFactor = clampedMa / 200;
  for (let wl = 4; wl <= 88; wl += 2) {
    if (wl < minWavelengthPm) {
      spectrumPoints.push({ wavelengthPm: wl, intensity: 0 });
      continue;
    }

    // Kramers' law approximation for Bremsstrahlung: proportional to (wl - wl_min) / wl^3
    const kramers =
      ((wl - minWavelengthPm) / Math.pow(wl, 2.35)) * Math.pow(clampedKv, 1.45) * 4.5 * scaleFactor;

    // Characteristic K-alpha & K-beta spikes for Tungsten target (~18.4 pm and ~21.0 pm) when kV > 70
    let characteristic = 0;
    if (clampedKv >= 70) {
      const kAlpha = Math.exp(-Math.pow((wl - 21) / 1.8, 2)) * 32 * scaleFactor;
      const kBeta = Math.exp(-Math.pow((wl - 18.4) / 1.5, 2)) * 18 * scaleFactor;
      characteristic = kAlpha + kBeta;
    }

    let total = kramers + characteristic;

    // Soft X-ray filter strongly absorbs longer wavelengths (> 28 pm)
    if (useSoftFilter) {
      const filterTransmission = Math.exp(-Math.pow(wl / 34, 2.4));
      total *= filterTransmission;
    }

    spectrumPoints.push({
      wavelengthPm: wl,
      intensity: Number(Math.min(100, total).toFixed(2)),
    });
  }

  return {
    minWavelengthPm: Number(minWavelengthPm.toFixed(1)),
    effectivePeakWavelengthPm: Number(effectivePeakWavelengthPm.toFixed(1)),
    hardnessLabel,
    penetrationPercent,
    relativeBeamFlux,
    thermalHeatPercent: 99,
    xrayConversionPercent: 1,
    spectrumPoints,
  };
}

export function clampSlideIndex(index: number, totalSlides: number): number {
  if (totalSlides <= 0) return 0;
  return Math.max(0, Math.min(totalSlides - 1, index));
}
