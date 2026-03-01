
import { formatNumber } from '../../../../utils/formatNumber';

export const definitions = [
    // === GRUPO 1: CINEMÁTICA ROTACIONAL ===
    {
        id: 'cinematica-calc-aceleracion',
        groupId: 'cinematica-rotacional',
        title: 'Calcular Aceleración Angular (α)',
        formula: 'α = (ω_f - ω_i) / t',
        variables: [
            { symbol: 'ω_f', label: 'Velocidad Angular Final', unit: 'rad/s' },
            { symbol: 'ω_i', label: 'Velocidad Angular Inicial', unit: 'rad/s' },
            { symbol: 't', label: 'Tiempo', unit: 's' },
        ],
        output: { symbol: 'α', label: 'Aceleración Angular', unit: 'rad/s²' },
        resolve: ({ ω_f, ω_i, t }) => {
            const time = parseFloat(t);
            if (time === 0) return { error: "El tiempo no puede ser cero." };
            const alpha = (parseFloat(ω_f) - parseFloat(ω_i)) / time;
            return { result: { 'α': formatNumber(alpha) }, steps: [`α = (${ω_f} - ${ω_i}) / ${t} = ${formatNumber(alpha)} rad/s²`] };
        }
    },
    {
        id: 'cinematica-calc-velocidad-final',
        groupId: 'cinematica-rotacional',
        title: 'Calcular Velocidad Final (ω_f)',
        formula: 'ω_f = ω_i + α * t',
        variables: [
            { symbol: 'ω_i', label: 'Velocidad Angular Inicial', unit: 'rad/s' },
            { symbol: 'α', label: 'Aceleración Angular', unit: 'rad/s²' },
            { symbol: 't', label: 'Tiempo', unit: 's' },
        ],
        output: { symbol: 'ω_f', label: 'Velocidad Angular Final', unit: 'rad/s' },
        resolve: ({ ω_i, α, t }) => {
            const omega_f = parseFloat(ω_i) + parseFloat(α) * parseFloat(t);
            return { result: { 'ω_f': formatNumber(omega_f) }, steps: [`ω_f = ${ω_i} + ${α} * ${t} = ${formatNumber(omega_f)} rad/s`] };
        }
    },
    {
        id: 'cinematica-calc-tiempo',
        groupId: 'cinematica-rotacional',
        title: 'Calcular Tiempo (t)',
        formula: 't = (ω_f - ω_i) / α',
        variables: [
            { symbol: 'ω_f', label: 'Velocidad Angular Final', unit: 'rad/s' },
            { symbol: 'ω_i', label: 'Velocidad Angular Inicial', unit: 'rad/s' },
            { symbol: 'α', label: 'Aceleración Angular', unit: 'rad/s²' },
        ],
        output: { symbol: 't', label: 'Tiempo', unit: 's' },
        resolve: ({ ω_f, ω_i, α }) => {
            const alpha = parseFloat(α);
            if (alpha === 0) return { error: "La aceleración no puede ser cero." };
            const time = (parseFloat(ω_f) - parseFloat(ω_i)) / alpha;
            return { result: { 't': formatNumber(time) }, steps: [`t = (${ω_f} - ${ω_i}) / ${α} = ${formatNumber(time)} s`] };
        }
    },

    // === GRUPO 2: MOMENTO DE INERCIA ===
    {
        id: 'inercia-calc-inercia',
        groupId: 'momento-inercia',
        title: 'Calcular Momento de Inercia (I)',
        formula: 'I = m * r²',
        variables: [
            { symbol: 'm', label: 'Masa', unit: 'kg' },
            { symbol: 'r', label: 'Radio', unit: 'm' },
        ],
        output: { symbol: 'I', label: 'Momento de Inercia', unit: 'kg·m²' },
        resolve: ({ m, r }) => {
            const I = parseFloat(m) * Math.pow(parseFloat(r), 2);
            return { result: { 'I': formatNumber(I) }, steps: [`I = ${m} * ${r}² = ${formatNumber(I)} kg·m²`] };
        }
    },
    {
        id: 'inercia-calc-masa',
        groupId: 'momento-inercia',
        title: 'Calcular Masa (m)',
        formula: 'm = I / r²',
        variables: [
            { symbol: 'I', label: 'Momento de Inercia', unit: 'kg·m²' },
            { symbol: 'r', label: 'Radio', unit: 'm' },
        ],
        output: { symbol: 'm', label: 'Masa', unit: 'kg' },
        resolve: ({ I, r }) => {
            const radioSq = Math.pow(parseFloat(r), 2);
            if (radioSq === 0) return { error: "El radio no puede ser cero." };
            const m = parseFloat(I) / radioSq;
            return { result: { 'm': formatNumber(m) }, steps: [`m = ${I} / ${r}² = ${formatNumber(m)} kg`] };
        }
    },
    {
        id: 'inercia-calc-radio',
        groupId: 'momento-inercia',
        title: 'Calcular Radio (r)',
        formula: 'r = sqrt(I / m)',
        variables: [
            { symbol: 'I', label: 'Momento de Inercia', unit: 'kg·m²' },
            { symbol: 'm', label: 'Masa', unit: 'kg' },
        ],
        output: { symbol: 'r', label: 'Radio', unit: 'm' },
        resolve: ({ I, m }) => {
            const masa = parseFloat(m);
            if (masa === 0) return { error: "La masa no puede ser cero." };
            const r = Math.sqrt(parseFloat(I) / masa);
            return { result: { 'r': formatNumber(r) }, steps: [`r = sqrt(${I} / ${m}) = ${formatNumber(r)} m`] };
        }
    },

    // === GRUPO 3: DINÁMICA ROTACIONAL (TORQUE) ===
    {
        id: 'dinamica-calc-torque',
        groupId: 'dinamica-rotacional',
        title: 'Calcular Torque (τ)',
        formula: 'τ = I * α',
        variables: [
            { symbol: 'I', label: 'Momento de Inercia', unit: 'kg·m²' },
            { symbol: 'α', label: 'Aceleración Angular', unit: 'rad/s²' },
        ],
        output: { symbol: 'τ', label: 'Torque', unit: 'N·m' },
        resolve: ({ I, α }) => {
            const torque = parseFloat(I) * parseFloat(α);
            return { result: { 'τ': formatNumber(torque) }, steps: [`τ = ${I} * ${α} = ${formatNumber(torque)} N·m`] };
        }
    },
    {
        id: 'dinamica-calc-inercia',
        groupId: 'dinamica-rotacional',
        title: 'Calcular Inercia (I)',
        formula: 'I = τ / α',
        variables: [
            { symbol: 'τ', label: 'Torque', unit: 'N·m' },
            { symbol: 'α', label: 'Aceleración Angular', unit: 'rad/s²' },
        ],
        output: { symbol: 'I', label: 'Momento de Inercia', unit: 'kg·m²' },
        resolve: ({ τ, α }) => {
            const accel = parseFloat(α);
            if (accel === 0) return { error: "La aceleración no puede ser cero." };
            const I = parseFloat(τ) / accel;
            return { result: { 'I': formatNumber(I) }, steps: [`I = ${τ} / ${α} = ${formatNumber(I)} kg·m²`] };
        }
    },
    {
        id: 'dinamica-calc-aceleracion',
        groupId: 'dinamica-rotacional',
        title: 'Calcular Aceleración (α)',
        formula: 'α = τ / I',
        variables: [
            { symbol: 'τ', label: 'Torque', unit: 'N·m' },
            { symbol: 'I', label: 'Momento de Inercia', unit: 'kg·m²' },
        ],
        output: { symbol: 'α', label: 'Aceleración Angular', unit: 'rad/s²' },
        resolve: ({ τ, I }) => {
            const inertia = parseFloat(I);
            if (inertia === 0) return { error: "El momento de inercia no puede ser cero." };
            const alpha = parseFloat(τ) / inertia;
            return { result: { 'α': formatNumber(alpha) }, steps: [`α = ${τ} / ${I} = ${formatNumber(alpha)} rad/s²`] };
        }
    },

    // === GRUPO 4: ENERGÍA ROTACIONAL ===
    {
        id: 'energia-calc-energia',
        groupId: 'energia-rotacional',
        title: 'Calcular Energía Cinética (E_k)',
        formula: 'E_k = 0.5 * I * ω²',
        variables: [
            { symbol: 'I', label: 'Momento de Inercia', unit: 'kg·m²' },
            { symbol: 'ω', label: 'Velocidad Angular', unit: 'rad/s' },
        ],
        output: { symbol: 'E_k', label: 'Energía Cinética', unit: 'J' },
        resolve: ({ I, ω }) => {
            const energy = 0.5 * parseFloat(I) * Math.pow(parseFloat(ω), 2);
            return { result: { 'E_k': formatNumber(energy) }, steps: [`E_k = 0.5 * ${I} * ${ω}² = ${formatNumber(energy)} J`] };
        }
    },
    {
        id: 'energia-calc-inercia',
        groupId: 'energia-rotacional',
        title: 'Calcular Inercia (I)',
        formula: 'I = 2 * E_k / ω²',
        variables: [
            { symbol: 'E_k', label: 'Energía Cinética', unit: 'J' },
            { symbol: 'ω', label: 'Velocidad Angular', unit: 'rad/s' },
        ],
        output: { symbol: 'I', label: 'Momento de Inercia', unit: 'kg·m²' },
        resolve: ({ E_k, ω }) => {
            const omegaSq = Math.pow(parseFloat(ω), 2);
            if (omegaSq === 0) return { error: "La velocidad angular no puede ser cero." };
            const I = (2 * parseFloat(E_k)) / omegaSq;
            return { result: { 'I': formatNumber(I) }, steps: [`I = 2 * ${E_k} / ${ω}² = ${formatNumber(I)} kg·m²`] };
        }
    },
    {
        id: 'energia-calc-velocidad',
        groupId: 'energia-rotacional',
        title: 'Calcular Velocidad Angular (ω)',
        formula: 'ω = sqrt(2 * E_k / I)',
        variables: [
            { symbol: 'E_k', label: 'Energía Cinética', unit: 'J' },
            { symbol: 'I', label: 'Momento de Inercia', unit: 'kg·m²' },
        ],
        output: { symbol: 'ω', label: 'Velocidad Angular', unit: 'rad/s' },
        resolve: ({ E_k, I }) => {
            const inertia = parseFloat(I);
            if (inertia === 0) return { error: "El momento de inercia no puede ser cero." };
            const omega = Math.sqrt((2 * parseFloat(E_k)) / inertia);
            return { result: { 'ω': formatNumber(omega) }, steps: [`ω = sqrt(2 * ${E_k} / ${I}) = ${formatNumber(omega)} rad/s`] };
        }
    },

    // === GRUPO 5: MOMENTO ANGULAR ===
    {
        id: 'angular-calc-momento',
        groupId: 'momento-angular',
        title: 'Calcular Momento Angular (L)',
        formula: 'L = I * ω',
        variables: [
            { symbol: 'I', label: 'Momento de Inercia', unit: 'kg·m²' },
            { symbol: 'ω', label: 'Velocidad Angular', unit: 'rad/s' },
        ],
        output: { symbol: 'L', label: 'Momento Angular', unit: 'kg·m²/s' },
        resolve: ({ I, ω }) => {
            const L = parseFloat(I) * parseFloat(ω);
            return { result: { 'L': formatNumber(L) }, steps: [`L = ${I} * ${ω} = ${formatNumber(L)} kg·m²/s`] };
        }
    },
    {
        id: 'angular-calc-inercia',
        groupId: 'momento-angular',
        title: 'Calcular Inercia (I)',
        formula: 'I = L / ω',
        variables: [
            { symbol: 'L', label: 'Momento Angular', unit: 'kg·m²/s' },
            { symbol: 'ω', label: 'Velocidad Angular', unit: 'rad/s' },
        ],
        output: { symbol: 'I', label: 'Momento de Inercia', unit: 'kg·m²' },
        resolve: ({ L, ω }) => {
            const omega = parseFloat(ω);
            if (omega === 0) return { error: "La velocidad angular no puede ser cero." };
            const I = parseFloat(L) / omega;
            return { result: { 'I': formatNumber(I) }, steps: [`I = ${L} / ${ω} = ${formatNumber(I)} kg·m²`] };
        }
    },
    {
        id: 'angular-calc-velocidad',
        groupId: 'momento-angular',
        title: 'Calcular Velocidad Angular (ω)',
        formula: 'ω = L / I',
        variables: [
            { symbol: 'L', label: 'Momento Angular', unit: 'kg·m²/s' },
            { symbol: 'I', label: 'Momento de Inercia', unit: 'kg·m²' },
        ],
        output: { symbol: 'ω', label: 'Velocidad Angular', unit: 'rad/s' },
        resolve: ({ L, I }) => {
            const inertia = parseFloat(I);
            if (inertia === 0) return { error: "El momento de inercia no puede ser cero." };
            const omega = parseFloat(L) / inertia;
            return { result: { 'ω': formatNumber(omega) }, steps: [`ω = ${L} / ${I} = ${formatNumber(omega)} rad/s`] };
        }
    }
];
