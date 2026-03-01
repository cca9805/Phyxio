import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const topicsPath = path.join(__dirname, '../src/data/topics.generated.js');

console.log('🔧 Corrigiendo rutas de Ondas Mecánicas en topics.generated.js...\n');

let content = fs.readFileSync(topicsPath, 'utf8');
let changeCount = 0;

// Corregir rutas de subtemas de ondas_mecanicas
const corrections = [
  { from: '"/clasica/ondas_mecanicas/conceptos_basicos"', to: '"/clasica/mecanica/ondas_mecanicas/conceptos_basicos"' },
  { from: '"/clasica/ondas_mecanicas/ondas_transversales"', to: '"/clasica/mecanica/ondas_mecanicas/ondas_transversales"' },
  { from: '"/clasica/ondas_mecanicas/ondas_longitudinales"', to: '"/clasica/mecanica/ondas_mecanicas/ondas_longitudinales"' },
  { from: '"/clasica/ondas_mecanicas/superposicion"', to: '"/clasica/mecanica/ondas_mecanicas/superposicion"' },
  { from: '"/clasica/ondas_mecanicas/ondas_estacionarias"', to: '"/clasica/mecanica/ondas_mecanicas/ondas_estacionarias"' },
  { from: '"/clasica/ondas_mecanicas/energia_ondas"', to: '"/clasica/mecanica/ondas_mecanicas/energia_ondas"' }
];

corrections.forEach(({ from, to }) => {
  if (content.includes(from)) {
    content = content.replace(new RegExp(from, 'g'), to);
    console.log(`✓ Corregido: ${from} → ${to}`);
    changeCount++;
  }
});

if (changeCount > 0) {
  fs.writeFileSync(topicsPath, content, 'utf8');
  console.log(`\n✅ ${changeCount} rutas corregidas exitosamente\n`);
} else {
  console.log('\n✓ No se encontraron rutas para corregir\n');
}
