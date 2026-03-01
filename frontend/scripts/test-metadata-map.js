#!/usr/bin/env node

/**
 * Script para probar que el metadataIconMap se construye correctamente
 */

import { emojiMap } from '../src/config/emoji-map.js';

// Simular algunos valores de metadata
const testCases = [
  { key: 'equilibrio', expected: '⚖️' },
  { key: 'friccion', expected: '🛑' },
  { key: 'gravitacion', expected: '🌍' },
  { key: 'ondas_sonoras', expected: '🔊' },
  { key: 'reflexion_y_espejos', expected: '🪞' }
];

console.log('🧪 Probando conversión de iconos con emojiMap:\n');

testCases.forEach(({ key, expected }) => {
  const result = emojiMap[key] || key;
  const status = result === expected ? '✅' : '❌';
  console.log(`${status} ${key.padEnd(25)} : ${result} ${result === expected ? '' : `(esperado: ${expected})`}`);
});

console.log('\n📊 Resumen:');
console.log(`Total de emojis en el mapa: ${Object.keys(emojiMap).length}`);
