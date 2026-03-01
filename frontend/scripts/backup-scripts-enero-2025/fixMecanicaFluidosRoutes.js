import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Corrigiendo rutas de Mecánica de Fluidos en topics.generated.js...\n');

const filePath = path.join(__dirname, '../src/data/topics.generated.js');
let content = fs.readFileSync(filePath, 'utf8');

// Rutas a corregir para Mecánica de Fluidos
const corrections = [
  // Estática de Fluidos
  { from: '"/clasica/estatica_de_fluidos/', to: '"/clasica/mecanica_de_fluidos/estatica_de_fluidos/' },
  // Dinámica de Fluidos
  { from: '"/clasica/dinamica_de_fluidos/', to: '"/clasica/mecanica_de_fluidos/dinamica_de_fluidos/' },
  // Flujo en Tuberías
  { from: '"/clasica/flujo_en_tuberias/', to: '"/clasica/mecanica_de_fluidos/flujo_en_tuberias/' },
  // Flujo sobre Cuerpos
  { from: '"/clasica/flujo_sobre_cuerpos', to: '"/clasica/mecanica_de_fluidos/flujo_sobre_cuerpos' },
  // Maquinaria de Fluidos
  { from: '"/clasica/maquinaria_de_fluidos', to: '"/clasica/mecanica_de_fluidos/maquinaria_de_fluidos' },
  // Análisis Dimensional
  { from: '"/clasica/analisis_dimensional_y_similitud', to: '"/clasica/mecanica_de_fluidos/analisis_dimensional_y_similitud' }
];

let correctionCount = 0;

corrections.forEach(({ from, to }) => {
  const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
  const matches = content.match(regex);
  
  if (matches) {
    content = content.replace(regex, to);
    correctionCount += matches.length;
    console.log(`✓ Corregido: ${from}... → ${to}...`);
  }
});

fs.writeFileSync(filePath, content, 'utf8');

console.log(`\n✅ ${correctionCount} rutas corregidas exitosamente\n`);
console.log('📝 Nota: Ejecuta este script después de cada "npm run generate:topics"');
