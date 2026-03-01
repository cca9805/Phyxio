
import { formatNumber } from '../../../../utils/formatNumber';

const G = 9.81; // Aceleración gravitatoria estándar
const PI = Math.PI;

export const definitions = [
  // --- Grupo 1: Trabajo Mecánico ---
  {
    id: 'trabajo-calcular',
    groupId: 'trabajo-mecanico',
    title: 'Calcular Trabajo (W)',
    formula: 'W = F * d * cos(θ)',
    variables: [
      { symbol: 'F', label: 'Fuerza', unit: 'N' },
      { symbol: 'd', label: 'Desplazamiento', unit: 'm' },
      { symbol: 'theta', label: 'Ángulo', unit: 'grados', defaultValue: '0' }
    ],
    output: { symbol: 'W', label: 'Trabajo', unit: 'J' },
    resolve: ({ F, d, theta = 0 }) => {
      const theta_rad = parseFloat(theta) * (PI / 180);
      const W = parseFloat(F) * parseFloat(d) * Math.cos(theta_rad);
      return { result: { W: formatNumber(W) }, steps: [`W = ${F} * ${d} * cos(${theta}°) = ${formatNumber(W)} J`] };
    }
  },
  {
    id: 'trabajo-fuerza',
    groupId: 'trabajo-mecanico',
    title: 'Calcular Fuerza (desde W)',
    formula: 'F = W / (d * cos(θ))',
    variables: [
      { symbol: 'W', label: 'Trabajo', unit: 'J' },
      { symbol: 'd', label: 'Desplazamiento', unit: 'm' },
      { symbol: 'theta', label: 'Ángulo', unit: 'grados', defaultValue: '0' }
    ],
    output: { symbol: 'F', label: 'Fuerza', unit: 'N' },
    resolve: ({ W, d, theta = 0 }) => {
      const theta_rad = parseFloat(theta) * (PI / 180);
      const divisor = parseFloat(d) * Math.cos(theta_rad);
      if (divisor === 0) return { error: "El denominador (d*cos(θ)) no puede ser cero." };
      const F = parseFloat(W) / divisor;
      return { result: { F: formatNumber(F) }, steps: [`F = ${W} / (${d} * cos(${theta}°)) = ${formatNumber(F)} N`] };
    }
  },
  {
    id: 'trabajo-desplazamiento',
    groupId: 'trabajo-mecanico',
    title: 'Calcular Desplazamiento (desde W)',
    formula: 'd = W / (F * cos(θ))',
    variables: [
      { symbol: 'W', label: 'Trabajo', unit: 'J' },
      { symbol: 'F', label: 'Fuerza', unit: 'N' },
      { symbol: 'theta', label: 'Ángulo', unit: 'grados', defaultValue: '0' }
    ],
    output: { symbol: 'd', label: 'Desplazamiento', unit: 'm' },
    resolve: ({ W, F, theta = 0 }) => {
      const theta_rad = parseFloat(theta) * (PI / 180);
      const divisor = parseFloat(F) * Math.cos(theta_rad);
      if (divisor === 0) return { error: "El denominador (F*cos(θ)) no puede ser cero." };
      const d = parseFloat(W) / divisor;
      return { result: { d: formatNumber(d) }, steps: [`d = ${W} / (${F} * cos(${theta}°)) = ${formatNumber(d)} m`] };
    }
  },
  {
    id: 'trabajo-angulo',
    groupId: 'trabajo-mecanico',
    title: 'Calcular Ángulo (desde W)',
    formula: 'θ = acos(W / (F * d))',
    variables: [
      { symbol: 'W', label: 'Trabajo', unit: 'J' },
      { symbol: 'F', label: 'Fuerza', unit: 'N' },
      { symbol: 'd', label: 'Desplazamiento', unit: 'm' }
    ],
    output: { symbol: 'theta', label: 'Ángulo', unit: 'grados' },
    resolve: ({ W, F, d }) => {
      const divisor = parseFloat(F) * parseFloat(d);
      if (divisor === 0) return { error: "El producto F*d no puede ser cero." };
      const ratio = parseFloat(W) / divisor;
      if (ratio < -1 || ratio > 1) return { error: "Argumento de acos() fuera de rango [-1, 1]." };
      const theta_rad = Math.acos(ratio);
      const theta = theta_rad * (180 / Math.PI);
      return { result: { theta: formatNumber(theta) }, steps: [`θ = acos(${W} / (${F} * ${d})) = ${formatNumber(theta)}°`] };
    }
  },

  // --- Grupo 2: Energía Cinética ---
  {
    id: 'energia-cinetica-calcular',
    groupId: 'energia-cinetica',
    title: 'Calcular Energía Cinética (Ec)',
    formula: 'Ec = 1/2 * m * v²',
    variables: [
      { symbol: 'm', label: 'Masa', unit: 'kg' },
      { symbol: 'v', label: 'Velocidad', unit: 'm/s' }
    ],
    output: { symbol: 'Ec', label: 'Energía Cinética', unit: 'J' },
    resolve: ({ m, v }) => {
      const Ec = 0.5 * parseFloat(m) * Math.pow(parseFloat(v), 2);
      return { result: { Ec: formatNumber(Ec) }, steps: [`Ec = 0.5 * ${m} * (${v})² = ${formatNumber(Ec)} J`] };
    }
  },
  {
    id: 'energia-cinetica-masa',
    groupId: 'energia-cinetica',
    title: 'Calcular Masa (desde Ec)',
    formula: 'm = 2 * Ec / v²',
    variables: [
      { symbol: 'Ec', label: 'Energía Cinética', unit: 'J' },
      { symbol: 'v', label: 'Velocidad', unit: 'm/s' }
    ],
    output: { symbol: 'm', label: 'Masa', unit: 'kg' },
    resolve: ({ Ec, v }) => {
      const v_sq = Math.pow(parseFloat(v), 2);
      if (v_sq === 0) return { error: "La velocidad no puede ser cero." };
      const m = 2 * parseFloat(Ec) / v_sq;
      return { result: { m: formatNumber(m) }, steps: [`m = (2 * ${Ec}) / (${v})² = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'energia-cinetica-velocidad',
    groupId: 'energia-cinetica',
    title: 'Calcular Velocidad (desde Ec)',
    formula: 'v = √(2 * Ec / m)',
    variables: [
      { symbol: 'Ec', label: 'Energía Cinética', unit: 'J' },
      { symbol: 'm', label: 'Masa', unit: 'kg' }
    ],
    output: { symbol: 'v', label: 'Velocidad', unit: 'm/s' },
    resolve: ({ Ec, m }) => {
      const m_val = parseFloat(m);
      if (m_val === 0) return { error: "La masa no puede ser cero." };
      const ratio = 2 * parseFloat(Ec) / m_val;
      if (ratio < 0) return { error: "La energía no puede ser negativa para obtener una velocidad real." };
      const v = Math.sqrt(ratio);
      return { result: { v: formatNumber(v) }, steps: [`v = √((2 * ${Ec}) / ${m}) = ${formatNumber(v)} m/s`] };
    }
  },

  // --- Grupo 3: Energía Potencial Gravitatoria ---
  {
    id: 'energia-potencial-grav-calcular',
    groupId: 'energia-potencial-gravitatoria',
    title: 'Calcular E. P. Gravitatoria (Epg)',
    formula: 'Epg = m * g * h',
    variables: [
      { symbol: 'm', label: 'Masa', unit: 'kg' },
      { symbol: 'h', label: 'Altura', unit: 'm' },
      { symbol: 'g', label: 'Gravedad', unit: 'm/s²', defaultValue: G.toString() }
    ],
    output: { symbol: 'Epg', label: 'E. P. Gravitatoria', unit: 'J' },
    resolve: ({ m, h, g = G }) => {
      const Epg = parseFloat(m) * parseFloat(g) * parseFloat(h);
      return { result: { Epg: formatNumber(Epg) }, steps: [`Epg = ${m} * ${g} * ${h} = ${formatNumber(Epg)} J`] };
    }
  },
  {
    id: 'energia-potencial-grav-masa',
    groupId: 'energia-potencial-gravitatoria',
    title: 'Calcular Masa (desde Epg)',
    formula: 'm = Epg / (g * h)',
    variables: [
        { symbol: 'Epg', label: 'E. P. Gravitatoria', unit: 'J' },
        { symbol: 'h', label: 'Altura', unit: 'm' },
        { symbol: 'g', label: 'Gravedad', unit: 'm/s²', defaultValue: G.toString() }
    ],
    output: { symbol: 'm', label: 'Masa', unit: 'kg' },
    resolve: ({ Epg, h, g = G }) => {
        const divisor = parseFloat(g) * parseFloat(h);
        if (divisor === 0) return { error: "El producto g*h no puede ser cero." };
        const m = parseFloat(Epg) / divisor;
        return { result: { m: formatNumber(m) }, steps: [`m = ${Epg} / (${g} * ${h}) = ${formatNumber(m)} kg`] };
    }
  },
  {
    id: 'energia-potencial-grav-altura',
    groupId: 'energia-potencial-gravitatoria',
    title: 'Calcular Altura (desde Epg)',
    formula: 'h = Epg / (m * g)',
    variables: [
        { symbol: 'Epg', label: 'E. P. Gravitatoria', unit: 'J' },
        { symbol: 'm', label: 'Masa', unit: 'kg' },
        { symbol: 'g', label: 'Gravedad', unit: 'm/s²', defaultValue: G.toString() }
    ],
    output: { symbol: 'h', label: 'Altura', unit: 'm' },
    resolve: ({ Epg, m, g = G }) => {
        const divisor = parseFloat(m) * parseFloat(g);
        if (divisor === 0) return { error: "El producto m*g no puede ser cero." };
        const h = parseFloat(Epg) / divisor;
        return { result: { h: formatNumber(h) }, steps: [`h = ${Epg} / (${m} * ${g}) = ${formatNumber(h)} m`] };
    }
  },

  // --- Grupo 4: Energía Potencial Elástica ---
  {
    id: 'energia-potencial-elastica-calcular',
    groupId: 'energia-potencial-elastica',
    title: 'Calcular E. P. Elástica (Epe)',
    formula: 'Epe = 1/2 * k * x²',
    variables: [
      { symbol: 'k', label: 'Constante del resorte', unit: 'N/m' },
      { symbol: 'x', label: 'Deformación (x)', unit: 'm' }
    ],
    output: { symbol: 'Epe', label: 'E. P. Elástica', unit: 'J' },
    resolve: ({ k, x }) => {
      const Epe = 0.5 * parseFloat(k) * Math.pow(parseFloat(x), 2);
      return { result: { Epe: formatNumber(Epe) }, steps: [`Epe = 0.5 * ${k} * (${x})² = ${formatNumber(Epe)} J`] };
    }
  },
  {
    id: 'energia-potencial-elastica-constante',
    groupId: 'energia-potencial-elastica',
    title: 'Calcular Constante (k)',
    formula: 'k = 2 * Epe / x²',
    variables: [
      { symbol: 'Epe', label: 'E. P. Elástica', unit: 'J' },
      { symbol: 'x', label: 'Deformación (x)', unit: 'm' }
    ],
    output: { symbol: 'k', label: 'Constante del resorte', unit: 'N/m' },
    resolve: ({ Epe, x }) => {
      const x_sq = Math.pow(parseFloat(x), 2);
      if (x_sq === 0) return { error: "La deformación no puede ser cero." };
      const k = 2 * parseFloat(Epe) / x_sq;
      return { result: { k: formatNumber(k) }, steps: [`k = (2 * ${Epe}) / (${x})² = ${formatNumber(k)} N/m`] };
    }
  },
  {
    id: 'energia-potencial-elastica-deformacion',
    groupId: 'energia-potencial-elastica',
    title: 'Calcular Deformación (x)',
    formula: 'x = √(2 * Epe / k)',
    variables: [
      { symbol: 'Epe', label: 'E. P. Elástica', unit: 'J' },
      { symbol: 'k', label: 'Constante del resorte', unit: 'N/m' }
    ],
    output: { symbol: 'x', label: 'Deformación (x)', unit: 'm' },
    resolve: ({ Epe, k }) => {
      const k_val = parseFloat(k);
      if (k_val === 0) return { error: "La constante del resorte no puede ser cero." };
      const ratio = 2 * parseFloat(Epe) / k_val;
      if (ratio < 0) return { error: "La energía no puede ser negativa." };
      const x = Math.sqrt(ratio);
      return { result: { x: formatNumber(x) }, steps: [`x = √((2 * ${Epe}) / ${k}) = ${formatNumber(x)} m`] };
    }
  },

  // --- Grupo 5: Teorema del Trabajo y la Energía ---
  {
    id: 'teorema-trabajo-energia-neto',
    groupId: 'teorema-trabajo-energia',
    title: 'Calcular Trabajo Neto (W_neto)',
    formula: 'W_neto = ΔEc = Ec_f - Ec_i',
    variables: [
      { symbol: 'm', label: 'Masa', unit: 'kg' },
      { symbol: 'vi', label: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'vf', label: 'Velocidad Final', unit: 'm/s' }
    ],
    output: { symbol: 'W_neto', label: 'Trabajo Neto', unit: 'J' },
    resolve: ({ m, vi, vf }) => {
      const ec_i = 0.5 * parseFloat(m) * Math.pow(parseFloat(vi), 2);
      const ec_f = 0.5 * parseFloat(m) * Math.pow(parseFloat(vf), 2);
      const W_neto = ec_f - ec_i;
      return { result: { W_neto: formatNumber(W_neto) }, steps: [`W_neto = 0.5*${m}*(${vf}² - ${vi}²) = ${formatNumber(W_neto)} J`] };
    }
  },
  {
    id: 'teorema-trabajo-energia-vf',
    groupId: 'teorema-trabajo-energia',
    title: 'Calcular Velocidad Final (desde W_neto)',
    formula: 'vf = √(vi² + 2*W_neto/m)',
    variables: [
        { symbol: 'W_neto', label: 'Trabajo Neto', unit: 'J' },
        { symbol: 'm', label: 'Masa', unit: 'kg' },
        { symbol: 'vi', label: 'Velocidad Inicial', unit: 'm/s' }
    ],
    output: { symbol: 'vf', label: 'Velocidad Final', unit: 'm/s' },
    resolve: ({ W_neto, m, vi }) => {
        const mass = parseFloat(m);
        if (mass === 0) return { error: "La masa no puede ser cero." };
        const inside_sqrt = Math.pow(parseFloat(vi), 2) + (2 * parseFloat(W_neto) / mass);
        if (inside_sqrt < 0) return { error: "La velocidad resulta en un número imaginario." };
        const vf = Math.sqrt(inside_sqrt);
        return { result: { vf: formatNumber(vf) }, steps: [`vf = √(${vi}² + 2*${W_neto}/${m}) = ${formatNumber(vf)} m/s`] };
    }
  },
  {
    id: 'teorema-trabajo-energia-ekf',
    groupId: 'teorema-trabajo-energia',
    title: 'Calcular E. Cinética Final (desde W_neto)',
    formula: 'E_kf = W_neto + (1/2 * m * vi²)',
    variables: [
        { symbol: 'W_neto', label: 'Trabajo Neto', unit: 'J' },
        { symbol: 'm', label: 'Masa', unit: 'kg' },
        { symbol: 'vi', label: 'Velocidad Inicial', unit: 'm/s' }
    ],
    output: { symbol: 'E_kf', label: 'E. Cinética Final', unit: 'J' },
    resolve: ({ W_neto, m, vi }) => {
        const ec_i = 0.5 * parseFloat(m) * Math.pow(parseFloat(vi), 2);
        const E_kf = parseFloat(W_neto) + ec_i;
        return { result: { E_kf: formatNumber(E_kf) }, steps: [`E_ki = 0.5 * ${m} * ${vi}² = ${formatNumber(ec_i)} J`, `E_kf = ${W_neto} + ${formatNumber(ec_i)} = ${formatNumber(E_kf)} J`] };
    }
  },

  // --- Grupo 6: Conservación de la Energía Mecánica ---
  {
    id: 'conservacion-energia-vf',
    groupId: 'conservacion-energia',
    title: 'Calcular Velocidad Final',
    formula: 'vf = √(vi² + 2*g*(hi - hf))',
    variables: [
      { symbol: 'vi', label: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'hi', label: 'Altura Inicial', unit: 'm' },
      { symbol: 'hf', label: 'Altura Final', unit: 'm' },
      { symbol: 'g', label: 'Gravedad', unit: 'm/s²', defaultValue: G.toString() }
    ],
    output: { symbol: 'vf', label: 'Velocidad Final', unit: 'm/s' },
    resolve: ({ vi, hi, hf, g = G }) => {
      const inside_sqrt = Math.pow(parseFloat(vi), 2) + 2 * parseFloat(g) * (parseFloat(hi) - parseFloat(hf));
      if (inside_sqrt < 0) return { error: "La velocidad final resulta en un número imaginario. Revisa las alturas."};
      const vf = Math.sqrt(inside_sqrt);
      return { result: { vf: formatNumber(vf) }, steps: [`vf = √(${vi}² + 2*${g}*(${hi} - ${hf})) = ${formatNumber(vf)} m/s`] };
    }
  },
  {
    id: 'conservacion-energia-vi',
    groupId: 'conservacion-energia',
    title: 'Calcular Velocidad Inicial',
    formula: 'vi = √(vf² - 2*g*(hi - hf))',
    variables: [
        { symbol: 'vf', label: 'Velocidad Final', unit: 'm/s' },
        { symbol: 'hi', label: 'Altura Inicial', unit: 'm' },
        { symbol: 'hf', label: 'Altura Final', unit: 'm' },
        { symbol: 'g', label: 'Gravedad', unit: 'm/s²', defaultValue: G.toString() }
    ],
    output: { symbol: 'vi', label: 'Velocidad Inicial', unit: 'm/s' },
    resolve: ({ vf, hi, hf, g = G }) => {
        const inside_sqrt = Math.pow(parseFloat(vf), 2) - 2 * parseFloat(g) * (parseFloat(hi) - parseFloat(hf));
        if (inside_sqrt < 0) return { error: "La velocidad inicial resulta en un número imaginario." };
        const vi = Math.sqrt(inside_sqrt);
        return { result: { vi: formatNumber(vi) }, steps: [`vi = √(${vf}² - 2*${g}*(${hi} - ${hf})) = ${formatNumber(vi)} m/s`] };
    }
  },
  {
    id: 'conservacion-energia-hf',
    groupId: 'conservacion-energia',
    title: 'Calcular Altura Final',
    formula: 'hf = hi + (vi² - vf²) / (2*g)',
    variables: [
      { symbol: 'hi', label: 'Altura Inicial', unit: 'm' },
      { symbol: 'vi', label: 'Velocidad Inicial', unit: 'm/s' },
      { symbol: 'vf', label: 'Velocidad Final', unit: 'm/s' },
      { symbol: 'g', label: 'Gravedad', unit: 'm/s²', defaultValue: G.toString() }
    ],
    output: { symbol: 'hf', label: 'Altura Final', unit: 'm' },
    resolve: ({ hi, vi, vf, g = G }) => {
      const g_val = parseFloat(g);
      if (g_val === 0) return { error: "La gravedad no puede ser cero." };
      const hf = parseFloat(hi) + (Math.pow(parseFloat(vi), 2) - Math.pow(parseFloat(vf), 2)) / (2 * g_val);
      return { result: { hf: formatNumber(hf) }, steps: [`hf = ${hi} + (${vi}² - ${vf}²) / (2*${g}) = ${formatNumber(hf)} m`] };
    }
  },

  // --- Grupo 7: Potencia Mecánica ---
  {
    id: 'potencia-calcular',
    groupId: 'potencia-mecanica',
    title: 'Calcular Potencia (P)',
    formula: 'P = W / t',
    variables: [
      { symbol: 'W', label: 'Trabajo', unit: 'J' },
      { symbol: 't', label: 'Tiempo', unit: 's' }
    ],
    output: { symbol: 'P', label: 'Potencia', unit: 'W' },
    resolve: ({ W, t }) => {
      const time = parseFloat(t);
      if (time === 0) return { error: "El tiempo no puede ser cero." };
      const P = parseFloat(W) / time;
      return { result: { P: formatNumber(P) }, steps: [`P = ${W} / ${t} = ${formatNumber(P)} W`] };
    }
  },
  {
    id: 'potencia-trabajo',
    groupId: 'potencia-mecanica',
    title: 'Calcular Trabajo (desde P)',
    formula: 'W = P * t',
    variables: [
      { symbol: 'P', label: 'Potencia', unit: 'W' },
      { symbol: 't', label: 'Tiempo', unit: 's' }
    ],
    output: { symbol: 'W', label: 'Trabajo', unit: 'J' },
    resolve: ({ P, t }) => {
      const W = parseFloat(P) * parseFloat(t);
      return { result: { W: formatNumber(W) }, steps: [`W = ${P} * ${t} = ${formatNumber(W)} J`] };
    }
  },
  {
    id: 'potencia-tiempo',
    groupId: 'potencia-mecanica',
    title: 'Calcular Tiempo (desde P)',
    formula: 't = W / P',
    variables: [
      { symbol: 'W', label: 'Trabajo', unit: 'J' },
      { symbol: 'P', label: 'Potencia', unit: 'W' }
    ],
    output: { symbol: 't', label: 'Tiempo', unit: 's' },
    resolve: ({ W, P }) => {
      const power = parseFloat(P);
      if (power === 0) return { error: "La potencia no puede ser cero." };
      const t = parseFloat(W) / power;
      return { result: { t: formatNumber(t) }, steps: [`t = ${W} / ${P} = ${formatNumber(t)} s`] };
    }
  }
];
