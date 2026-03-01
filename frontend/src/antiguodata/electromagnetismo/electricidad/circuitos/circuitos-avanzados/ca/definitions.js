import { formatNumber } from '../../../../../../utils/formatNumber';

export const definitions = [
  {
    id: 'z-inductor',
    groupId: 'impedance-inductor',
    title: 'Impedancia de un inductor (Z_L)',
    isFundamental: true,
    formula: 'Z_L = j·ω·L',
    variables: [
      { symbol: 'L', label: 'Inductancia (H)', unit: 'H' },
      { symbol: 'f', label: 'Frecuencia (Hz) — opcional', unit: 'Hz' },
      { symbol: 'ω', label: 'Frecuencia angular (rad/s) — opcional', unit: 'rad/s' }
    ],
    where: [
      'L: inductancia en henrios (H)',
      'f: frecuencia en Hz (opcional) o ω: frecuencia angular en rad/s',
      'Z_L: impedancia compleja del inductor, magnitud y fase'
    ],
    output: { symbol: 'Z_L', label: 'Impedancia (Ω) — magnitud y fase', unit: 'Ω, °' },
    resolve: ({ L, f, ω }) => {
      const l = parseFloat(L);
      let omega = parseFloat(ω);
      const freq = parseFloat(f);
      if (!isFinite(l)) return { error: 'L inválida' };
      if (!isFinite(omega)) {
        if (isFinite(freq)) omega = 2 * Math.PI * freq;
        else return { error: 'Proporcione f o ω' };
      }
      const imag = omega * l;
      const mag = Math.abs(imag);
      const phase = 90; // inductive +90°
      return { result: { magnitude: formatNumber(mag), phase: `${phase}` }, steps: [`ω = ${formatNumber(omega)} rad/s`, `Z_L = j·ω·L = j·${formatNumber(omega)}·${formatNumber(l)} = j·${formatNumber(imag)} Ω`, `|Z_L| = ${formatNumber(mag)} Ω, fase = ${phase}°`] };
    }
  },

  {
    id: 'z-capacitor',
    groupId: 'impedance-capacitor',
    title: 'Impedancia de un capacitor (Z_C)',
    isFundamental: true,
    formula: 'Z_C = 1/(j·ω·C)',
    variables: [
      { symbol: 'C', label: 'Capacitancia (F)', unit: 'F' },
      { symbol: 'f', label: 'Frecuencia (Hz) — opcional', unit: 'Hz' },
      { symbol: 'ω', label: 'Frecuencia angular (rad/s) — opcional', unit: 'rad/s' }
    ],
    where: [
      'C: capacitancia en faradios (F)',
      'f: frecuencia en Hz (opcional) o ω: frecuencia angular en rad/s',
      'Z_C: impedancia compleja del capacitor, magnitud y fase'
    ],
    output: { symbol: 'Z_C', label: 'Impedancia (Ω) — magnitud y fase', unit: 'Ω, °' },
    resolve: ({ C, f, ω }) => {
      const c = parseFloat(C);
      let omega = parseFloat(ω);
      const freq = parseFloat(f);
      if (!isFinite(c)) return { error: 'C inválida' };
      if (!isFinite(omega)) {
        if (isFinite(freq)) omega = 2 * Math.PI * freq;
        else return { error: 'Proporcione f o ω' };
      }
      if (omega === 0) return { error: 'ω no puede ser cero' };
      const imag = -1 / (omega * c);
      const mag = Math.abs(imag);
      const phase = -90; // capacitive -90°
      return { result: { magnitude: formatNumber(mag), phase: `${phase}` }, steps: [`ω = ${formatNumber(omega)} rad/s`, `Z_C = 1/(j·ω·C) = -j/(ω·C) = j·${formatNumber(imag)} Ω`, `|Z_C| = ${formatNumber(mag)} Ω, fase = ${phase}°`] };
    }
  },

  {
    id: 'impedance-series-rlc',
    groupId: 'impedance-series',
    title: 'Impedancia serie R-L-C (magnitud y fase)',
    isFundamental: false,
    formula: 'Z = R + j(ωL - 1/(ωC))',
    variables: [
      { symbol: 'R', label: 'Resistencia (Ω)', unit: 'Ω' },
      { symbol: 'L', label: 'Inductancia (H)', unit: 'H' },
      { symbol: 'C', label: 'Capacitancia (F)', unit: 'F' },
      { symbol: 'f', label: 'Frecuencia (Hz)', unit: 'Hz' }
    ],
    where: [
      'R: resistencia en ohmios (Ω)',
      'L: inductancia en henrios (H)',
      'C: capacitancia en faradios (F)',
      'f: frecuencia en Hz',
      'Z: impedancia serie resultante, magnitud y fase'
    ],
    output: { symbol: 'Z', label: 'Impedancia (Ω) — magnitud y fase', unit: 'Ω, °' },
    resolve: ({ R, L, C, f }) => {
      const r = parseFloat(R) || 0;
      const l = parseFloat(L) || 0;
      const c = parseFloat(C) || 0;
      const freq = parseFloat(f);
      if (!isFinite(freq)) return { error: 'Frecuencia (f) inválida' };
      const omega = 2 * Math.PI * freq;
      const xl = omega * l;
      const xc = c === 0 ? 0 : 1 / (omega * c);
      const imag = xl - xc;
      const real = r;
      const mag = Math.sqrt(real * real + imag * imag);
      const phase = Math.atan2(imag, real) * 180 / Math.PI;
      return { result: { magnitude: formatNumber(mag), phase: formatNumber(phase) }, steps: [`ω = 2πf = ${formatNumber(omega)} rad/s`, `X_L = ωL = ${formatNumber(xl)} Ω`, `X_C = 1/(ωC) = ${formatNumber(xc)} Ω`, `Z = ${formatNumber(real)} + j(${formatNumber(imag)}) Ω`, `|Z| = ${formatNumber(mag)} Ω, fase = ${formatNumber(phase)}°`] };
    }
  }
];
