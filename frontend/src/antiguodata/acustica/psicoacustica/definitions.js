import { formatNumber } from '../../../utils/formatNumber';

export const definitions = [
  {
    id: 'intensidad-a-sones',
    groupId: 'psicoacustica-grupo-1',
    title: 'Intensidad a Sonoridad (Sones)',
    isFundamental: true,
    formula: String.raw`S = 2^{(\beta - 40)/10}`,
    variables: [
      { symbol: 'beta', label: 'Nivel de intensidad (β)', unit: 'dB' }
    ],
    output: { symbol: 'S', label: 'Sonoridad (S)', unit: 'sones' },
    resolve: ({ beta }) => {
      const S = Math.pow(2, (beta - 40) / 10);
      return {
        result: { S: formatNumber(S) },
        steps: [
          `S = 2^((β - 40)/10)`,
          `S = 2^((${beta} - 40)/10)`,
          `S = 2^(${formatNumber((beta - 40) / 10)})`,
          `S = ${formatNumber(S)} sones`
        ]
      };
    }
  },
  {
    id: 'sones-a-fonos',
    groupId: 'psicoacustica-grupo-1',
    title: 'Sonoridad a Nivel de Sonoridad (Fonos)',
    isFundamental: true,
    formula: String.raw`L = 40 + 10 \log_2(S)`,
    variables: [
      { symbol: 'S', label: 'Sonoridad (S)', unit: 'sones' }
    ],
    output: { symbol: 'L', label: 'Nivel de sonoridad (L)', unit: 'fonos' },
    resolve: ({ S }) => {
      const L = 40 + 10 * Math.log2(S);
      return {
        result: { L: formatNumber(L) },
        steps: [
          `L = 40 + 10 log₂(S)`,
          `L = 40 + 10 log₂(${S})`,
          `L = 40 + 10 × ${formatNumber(Math.log2(S))}`,
          `L = ${formatNumber(L)} fonos`
        ]
      };
    }
  },
  {
    id: 'itd-localizacion',
    groupId: 'psicoacustica-grupo-2',
    title: 'Diferencia Interaural de Tiempo (ITD)',
    isFundamental: true,
    formula: String.raw`ITD = \frac{a \sin(\theta)}{c}`,
    variables: [
      { symbol: 'a', label: 'Distancia entre oídos (a)', unit: 'm' },
      { symbol: 'theta', label: 'Ángulo de azimut (θ)', unit: 'grados' }
    ],
    output: { symbol: 'ITD', label: 'Diferencia de tiempo (ITD)', unit: 'ms' },
    resolve: ({ a, theta }) => {
      const c = 343; // velocidad del sonido en m/s
      const thetaRad = (theta * Math.PI) / 180;
      const ITD = (a * Math.sin(thetaRad) / c) * 1000; // convertir a ms
      return {
        result: { ITD: formatNumber(ITD) },
        steps: [
          `ITD = (a × sin(θ))/c`,
          `ITD = (${a} × sin(${theta}°))/${c}`,
          `ITD = (${a} × ${formatNumber(Math.sin(thetaRad))})/${c}`,
          `ITD = ${formatNumber(ITD)} ms`
        ]
      };
    }
  },
  {
    id: 'ild-localizacion',
    groupId: 'psicoacustica-grupo-2',
    title: 'Diferencia Interaural de Nivel (ILD)',
    isFundamental: true,
    formula: String.raw`ILD = 20 \log_{10}\left(\frac{d_2}{d_1}\right)`,
    variables: [
      { symbol: 'd_1', label: 'Distancia oído cercano (d₁)', unit: 'm' },
      { symbol: 'd_2', label: 'Distancia oído lejano (d₂)', unit: 'm' }
    ],
    output: { symbol: 'ILD', label: 'Diferencia de nivel (ILD)', unit: 'dB' },
    resolve: ({ d_1, d_2 }) => {
      const ILD = 20 * Math.log10(d_2 / d_1);
      return {
        result: { ILD: formatNumber(ILD) },
        steps: [
          `ILD = 20 log₁₀(d₂/d₁)`,
          `ILD = 20 log₁₀(${d_2}/${d_1})`,
          `ILD = 20 × ${formatNumber(Math.log10(d_2 / d_1))}`,
          `ILD = ${formatNumber(ILD)} dB`
        ]
      };
    }
  },
  {
    id: 'tono-diferencial',
    groupId: 'psicoacustica-grupo-3',
    title: 'Frecuencia de Tono Diferencial',
    isFundamental: true,
    formula: String.raw`f_d = |f_2 - f_1|`,
    variables: [
      { symbol: 'f_1', label: 'Frecuencia 1 (f₁)', unit: 'Hz' },
      { symbol: 'f_2', label: 'Frecuencia 2 (f₂)', unit: 'Hz' }
    ],
    output: { symbol: 'f_d', label: 'Tono diferencial (fₐ)', unit: 'Hz' },
    resolve: ({ f_1, f_2 }) => {
      const f_d = Math.abs(f_2 - f_1);
      return {
        result: { f_d: formatNumber(f_d) },
        steps: [
          `fₐ = |f₂ - f₁|`,
          `fₐ = |${f_2} - ${f_1}|`,
          `fₐ = ${formatNumber(f_d)} Hz`
        ]
      };
    }
  },
  {
    id: 'tono-suma',
    groupId: 'psicoacustica-grupo-3',
    title: 'Frecuencia de Tono de Suma',
    isFundamental: true,
    formula: String.raw`f_s = f_1 + f_2`,
    variables: [
      { symbol: 'f_1', label: 'Frecuencia 1 (f₁)', unit: 'Hz' },
      { symbol: 'f_2', label: 'Frecuencia 2 (f₂)', unit: 'Hz' }
    ],
    output: { symbol: 'f_s', label: 'Tono de suma (fₛ)', unit: 'Hz' },
    resolve: ({ f_1, f_2 }) => {
      const f_s = f_1 + f_2;
      return {
        result: { f_s: formatNumber(f_s) },
        steps: [
          `fₛ = f₁ + f₂`,
          `fₛ = ${f_1} + ${f_2}`,
          `fₛ = ${formatNumber(f_s)} Hz`
        ]
      };
    }
  },
  {
    id: 'banda-critica',
    groupId: 'psicoacustica-grupo-3',
    title: 'Ancho de Banda Crítica',
    isFundamental: true,
    formula: String.raw`\Delta f = 25 + 75\left(1 + 1.4\left(\frac{f}{1000}\right)^2\right)^{0.69}`,
    variables: [
      { symbol: 'f', label: 'Frecuencia central (f)', unit: 'Hz' }
    ],
    output: { symbol: 'Delta_f', label: 'Ancho de banda (Δf)', unit: 'Hz' },
    resolve: ({ f }) => {
      const Delta_f = 25 + 75 * Math.pow(1 + 1.4 * Math.pow(f / 1000, 2), 0.69);
      return {
        result: { Delta_f: formatNumber(Delta_f) },
        steps: [
          `Δf = 25 + 75(1 + 1.4(f/1000)²)^0.69`,
          `Δf = 25 + 75(1 + 1.4(${f}/1000)²)^0.69`,
          `Δf = 25 + 75 × ${formatNumber(Math.pow(1 + 1.4 * Math.pow(f / 1000, 2), 0.69))}`,
          `Δf = ${formatNumber(Delta_f)} Hz`
        ]
      };
    }
  },
  {
    id: 'frecuencia-bark',
    groupId: 'psicoacustica-grupo-3',
    title: 'Conversión a Escala Bark',
    isFundamental: true,
    formula: String.raw`z = 13 \arctan(0.00076f) + 3.5 \arctan\left(\frac{f}{7500}\right)^2`,
    variables: [
      { symbol: 'f', label: 'Frecuencia (f)', unit: 'Hz' }
    ],
    output: { symbol: 'z', label: 'Escala Bark (z)', unit: 'Bark' },
    resolve: ({ f }) => {
      const z = 13 * Math.atan(0.00076 * f) + 3.5 * Math.atan(Math.pow(f / 7500, 2));
      return {
        result: { z: formatNumber(z) },
        steps: [
          `z = 13 arctan(0.00076f) + 3.5 arctan((f/7500)²)`,
          `z = 13 arctan(0.00076 × ${f}) + 3.5 arctan((${f}/7500)²)`,
          `z = 13 × ${formatNumber(Math.atan(0.00076 * f))} + 3.5 × ${formatNumber(Math.atan(Math.pow(f / 7500, 2)))}`,
          `z = ${formatNumber(z)} Bark`
        ]
      };
    }
  },
  {
    id: 'angulo-desde-itd',
    groupId: 'psicoacustica-grupo-2',
    title: 'Ángulo desde ITD',
    isFundamental: false,
    formula: String.raw`\theta = \arcsin\left(\frac{ITD \cdot c}{a}\right)`,
    variables: [
      { symbol: 'ITD', label: 'Diferencia de tiempo (ITD)', unit: 'ms' },
      { symbol: 'a', label: 'Distancia entre oídos (a)', unit: 'm' }
    ],
    output: { symbol: 'theta', label: 'Ángulo de azimut (θ)', unit: 'grados' },
    resolve: ({ ITD, a }) => {
      const c = 343;
      const ITD_s = ITD / 1000; // convertir ms a s
      const thetaRad = Math.asin((ITD_s * c) / a);
      const theta = (thetaRad * 180) / Math.PI;
      return {
        result: { theta: formatNumber(theta) },
        steps: [
          `θ = arcsin((ITD × c)/a)`,
          `θ = arcsin((${ITD/1000} × ${c})/${a})`,
          `θ = arcsin(${formatNumber((ITD_s * c) / a)})`,
          `θ = ${formatNumber(theta)}°`
        ]
      };
    }
  },
  {
    id: 'fonos-a-sones',
    groupId: 'psicoacustica-grupo-1',
    title: 'Nivel de Sonoridad a Sonoridad',
    isFundamental: false,
    formula: String.raw`S = 2^{(L - 40)/10}`,
    variables: [
      { symbol: 'L', label: 'Nivel de sonoridad (L)', unit: 'fonos' }
    ],
    output: { symbol: 'S', label: 'Sonoridad (S)', unit: 'sones' },
    resolve: ({ L }) => {
      const S = Math.pow(2, (L - 40) / 10);
      return {
        result: { S: formatNumber(S) },
        steps: [
          `S = 2^((L - 40)/10)`,
          `S = 2^((${L} - 40)/10)`,
          `S = 2^(${formatNumber((L - 40) / 10)})`,
          `S = ${formatNumber(S)} sones`
        ]
      };
    }
  }
];
