import test from 'node:test';
import assert from 'node:assert/strict';
import {
  ATTENUATION_MATERIALS,
  calculateAttenuation,
  calculateBeamIntensity,
  clampSlideIndex,
  simulateXrayTube,
} from './xrayPhysics';

test('calculateBeamIntensity computes I = P / S accurately', () => {
  assert.equal(calculateBeamIntensity(500, 0.25), 2000);
  assert.throws(() => calculateBeamIntensity(100, 0), /lớn hơn 0/);
  assert.throws(() => calculateBeamIntensity(-10, 1), /không được âm/);
});

test('calculateAttenuation follows I = I0 * e^(-mu * d)', () => {
  const zeroThickness = calculateAttenuation(100, 50, 0);
  assert.equal(zeroThickness.transmittedIntensity, 100);
  assert.equal(zeroThickness.transmissionPercent, 100);

  // At d = half-value layer, transmission is ~50%
  const bone = ATTENUATION_MATERIALS.find((m) => m.id === 'bone')!;
  const initialCheck = calculateAttenuation(1000, bone.muPerMeter, 1);
  const halfLayerResult = calculateAttenuation(1000, bone.muPerMeter, initialCheck.halfValueLayerMm);
  assert.ok(Math.abs(halfLayerResult.transmissionPercent - 50) < 0.01);

  // Lead absorbs drastically more than soft tissue at 5 mm
  const softTissue = ATTENUATION_MATERIALS.find((m) => m.id === 'soft-tissue')!;
  const lead = ATTENUATION_MATERIALS.find((m) => m.id === 'lead')!;
  const soft5mm = calculateAttenuation(100, softTissue.muPerMeter, 5);
  const lead5mm = calculateAttenuation(100, lead.muPerMeter, 5);
  assert.ok(soft5mm.transmissionPercent > 80);
  assert.ok(lead5mm.transmissionPercent < 0.01);
});

test('simulateXrayTube reflects voltage, current, and soft X-ray filter physics', () => {
  const softMode = simulateXrayTube(45, 100, false);
  const hardMode = simulateXrayTube(200, 300, true);

  assert.equal(softMode.hardnessLabel, 'Tia X mềm');
  assert.equal(hardMode.hardnessLabel, 'Tia X cứng');
  assert.ok(hardMode.minWavelengthPm < softMode.minWavelengthPm);
  assert.ok(hardMode.penetrationPercent > softMode.penetrationPercent);
  assert.equal(hardMode.xrayConversionPercent, 1);
  assert.equal(hardMode.thermalHeatPercent, 99);

  // Soft filter reduces long-wavelength tail intensity (>= 44 pm)
  const unfiltered80 = simulateXrayTube(80, 150, false);
  const filtered80 = simulateXrayTube(80, 150, true);
  const longWaveUnfiltered = unfiltered80.spectrumPoints.find((p) => p.wavelengthPm === 50)!;
  const longWaveFiltered = filtered80.spectrumPoints.find((p) => p.wavelengthPm === 50)!;
  assert.ok(longWaveFiltered.intensity < longWaveUnfiltered.intensity);
});

test('clampSlideIndex bounds slide index safely', () => {
  assert.equal(clampSlideIndex(-3, 16), 0);
  assert.equal(clampSlideIndex(4, 16), 4);
  assert.equal(clampSlideIndex(99, 16), 15);
  assert.equal(clampSlideIndex(1, 0), 0);
});
