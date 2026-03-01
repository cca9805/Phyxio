
import { formatNumber } from '../../../../utils/formatNumber';

const G = 9.81; // Gravedad estándar

export const definitions = [
    // === GRUPO 1: PERIODO, FRECUENCIA, FRECUENCIA ANGULAR ===
    {
        id: 'periodo-frec-calc-periodo',
        groupId: 'periodo-frecuencia',
        title: 'Calcular Periodo (T)',
        formula: 'T = 1 / f',
        variables: [
            { symbol: 'f', label: 'Frecuencia', unit: 'Hz' },
        ],
        output: { symbol: 'T', label: 'Periodo', unit: 's' },
        resolve: ({ f }) => {
            const freq = parseFloat(f);
            if (freq === 0) return { error: "La frecuencia no puede ser cero." };
            const T = 1 / freq;
            return { result: { 'T': formatNumber(T) }, steps: [`T = 1 / ${f} = ${formatNumber(T)} s`] };
        }
    },
    {
        id: 'periodo-frec-calc-frecuencia',
        groupId: 'periodo-frecuencia',
        title: 'Calcular Frecuencia (f)',
        formula: 'f = 1 / T',
        variables: [
            { symbol: 'T', label: 'Periodo', unit: 's' },
        ],
        output: { symbol: 'f', label: 'Frecuencia', unit: 'Hz' },
        resolve: ({ T }) => {
            const period = parseFloat(T);
            if (period === 0) return { error: "El periodo no puede ser cero." };
            const f = 1 / period;
            return { result: { 'f': formatNumber(f) }, steps: [`f = 1 / ${T} = ${formatNumber(f)} Hz`] };
        }
    },
    {
        id: 'periodo-frec-calc-frec-angular',
        groupId: 'periodo-frecuencia',
        title: 'Calcular Frecuencia Angular (ω)',
        formula: 'ω = 2 * PI * f',
        variables: [
            { symbol: 'f', label: 'Frecuencia', unit: 'Hz' },
        ],
        output: { symbol: 'ω', label: 'Frecuencia Angular', unit: 'rad/s' },
        resolve: ({ f }) => {
            const omega = 2 * Math.PI * parseFloat(f);
            return { result: { 'ω': formatNumber(omega) }, steps: [`ω = 2π * ${f} = ${formatNumber(omega)} rad/s`] };
        }
    },

    // === GRUPO 2: SISTEMA MASA-RESORTE ===
    {
        id: 'masa-resorte-calc-periodo',
        groupId: 'sistema-masa-resorte',
        title: 'Calcular Periodo (T)',
        formula: 'T = 2 * PI * sqrt(m / k)',
        variables: [
            { symbol: 'm', label: 'Masa', unit: 'kg' },
            { symbol: 'k', label: 'Constante del resorte', unit: 'N/m' },
        ],
        output: { symbol: 'T', label: 'Periodo', unit: 's' },
        resolve: ({ m, k }) => {
            const constant_k = parseFloat(k);
            if (constant_k === 0) return { error: "La constante k no puede ser cero." };
            const T = 2 * Math.PI * Math.sqrt(parseFloat(m) / constant_k);
            return { result: { 'T': formatNumber(T) }, steps: [`T = 2π * sqrt(${m} / ${k}) = ${formatNumber(T)} s`] };
        }
    },
    {
        id: 'masa-resorte-calc-masa',
        groupId: 'sistema-masa-resorte',
        title: 'Calcular Masa (m)',
        formula: 'm = k * (T / (2 * PI))²',
        variables: [
            { symbol: 'k', label: 'Constante del resorte', unit: 'N/m' },
            { symbol: 'T', label: 'Periodo', unit: 's' },
        ],
        output: { symbol: 'm', label: 'Masa', unit: 'kg' },
        resolve: ({ k, T }) => {
            const m = parseFloat(k) * Math.pow(parseFloat(T) / (2 * Math.PI), 2);
            return { result: { 'm': formatNumber(m) }, steps: [`m = ${k} * (${T} / 2π)² = ${formatNumber(m)} kg`] };
        }
    },
    {
        id: 'masa-resorte-calc-constante',
        groupId: 'sistema-masa-resorte',
        title: 'Calcular Constante (k)',
        formula: 'k = m * ( (2 * PI) / T)²',
        variables: [
            { symbol: 'm', label: 'Masa', unit: 'kg' },
            { symbol: 'T', label: 'Periodo', unit: 's' },
        ],
        output: { symbol: 'k', label: 'Constante del resorte', unit: 'N/m' },
        resolve: ({ m, T }) => {
            const period = parseFloat(T);
            if (period === 0) return { error: "El periodo no puede ser cero." };
            const k = parseFloat(m) * Math.pow((2 * Math.PI) / period, 2);
            return { result: { 'k': formatNumber(k) }, steps: [`k = ${m} * (2π / ${T})² = ${formatNumber(k)} N/m`] };
        }
    },

    // === GRUPO 3: PÉNDULO SIMPLE ===
    {
        id: 'pendulo-calc-periodo',
        groupId: 'pendulo-simple',
        title: 'Calcular Periodo (T)',
        formula: 'T = 2 * PI * sqrt(L / g)',
        variables: [
            { symbol: 'L', label: 'Longitud del péndulo', unit: 'm' },
            { symbol: 'g', label: 'Aceleración de la gravedad', unit: 'm/s²', defaultValue: G }
        ],
        output: { symbol: 'T', label: 'Periodo', unit: 's' },
        resolve: ({ L, g = G }) => {
            const gravity = parseFloat(g);
            if (gravity === 0) return { error: "La gravedad no puede ser cero." };
            const T = 2 * Math.PI * Math.sqrt(parseFloat(L) / gravity);
            return { result: { 'T': formatNumber(T) }, steps: [`T = 2π * sqrt(${L} / ${g}) = ${formatNumber(T)} s`] };
        }
    },
    {
        id: 'pendulo-calc-longitud',
        groupId: 'pendulo-simple',
        title: 'Calcular Longitud (L)',
        formula: 'L = g * (T / (2 * PI))²',
        variables: [
            { symbol: 'g', label: 'Aceleración de la gravedad', unit: 'm/s²', defaultValue: G },
            { symbol: 'T', label: 'Periodo', unit: 's' },
        ],
        output: { symbol: 'L', label: 'Longitud del péndulo', unit: 'm' },
        resolve: ({ g = G, T }) => {
            const L = parseFloat(g) * Math.pow(parseFloat(T) / (2 * Math.PI), 2);
            return { result: { 'L': formatNumber(L) }, steps: [`L = ${g} * (${T} / 2π)² = ${formatNumber(L)} m`] };
        }
    },
    {
        id: 'pendulo-calc-gravedad',
        groupId: 'pendulo-simple',
        title: 'Calcular Gravedad (g)',
        formula: 'g = L * ((2 * PI) / T)²',
        variables: [
            { symbol: 'L', label: 'Longitud del péndulo', unit: 'm' },
            { symbol: 'T', label: 'Periodo', unit: 's' },
        ],
        output: { symbol: 'g', label: 'Aceleración de la gravedad', unit: 'm/s²' },
        resolve: ({ L, T }) => {
            const period = parseFloat(T);
            if (period === 0) return { error: "El periodo no puede ser cero." };
            const g = parseFloat(L) * Math.pow((2 * Math.PI) / period, 2);
            return { result: { 'g': formatNumber(g) }, steps: [`g = ${L} * (2π / ${T})² = ${formatNumber(g)} m/s²`] };
        }
    },

    // === GRUPO 4: ENERGÍA EN EL MAS ===
    {
        id: 'energia-mas-calc-energia',
        groupId: 'energia-mas',
        title: 'Calcular Energía Total (E_T)',
        formula: 'E_T = 0.5 * k * A²',
        variables: [
            { symbol: 'k', label: 'Constante del resorte', unit: 'N/m' },
            { symbol: 'A', label: 'Amplitud', unit: 'm' },
        ],
        output: { symbol: 'E_T', label: 'Energía Total', unit: 'J' },
        resolve: ({ k, A }) => {
            const energy = 0.5 * parseFloat(k) * Math.pow(parseFloat(A), 2);
            return { result: { 'E_T': formatNumber(energy) }, steps: [`E_T = 0.5 * ${k} * ${A}² = ${formatNumber(energy)} J`] };
        }
    },
    {
        id: 'energia-mas-calc-constante',
        groupId: 'energia-mas',
        title: 'Calcular Constante (k)',
        formula: 'k = 2 * E_T / A²',
        variables: [
            { symbol: 'E_T', label: 'Energía Total', unit: 'J' },
            { symbol: 'A', label: 'Amplitud', unit: 'm' },
        ],
        output: { symbol: 'k', label: 'Constante del resorte', unit: 'N/m' },
        resolve: ({ E_T, A }) => {
            const ampSq = Math.pow(parseFloat(A), 2);
            if (ampSq === 0) return { error: "La amplitud no puede ser cero." };
            const k = (2 * parseFloat(E_T)) / ampSq;
            return { result: { 'k': formatNumber(k) }, steps: [`k = (2 * ${E_T}) / ${A}² = ${formatNumber(k)} N/m`] };
        }
    },
    {
        id: 'energia-mas-calc-amplitud',
        groupId: 'energia-mas',
        title: 'Calcular Amplitud (A)',
        formula: 'A = sqrt(2 * E_T / k)',
        variables: [
            { symbol: 'E_T', label: 'Energía Total', unit: 'J' },
            { symbol: 'k', label: 'Constante del resorte', unit: 'N/m' },
        ],
        output: { symbol: 'A', label: 'Amplitud', unit: 'm' },
        resolve: ({ E_T, k }) => {
            const constant_k = parseFloat(k);
            if (constant_k === 0) return { error: "La constante k no puede ser cero." };
            const A = Math.sqrt((2 * parseFloat(E_T)) / constant_k);
            return { result: { 'A': formatNumber(A) }, steps: [`A = sqrt((2 * ${E_T}) / ${k}) = ${formatNumber(A)} m`] };
        }
    }
];
