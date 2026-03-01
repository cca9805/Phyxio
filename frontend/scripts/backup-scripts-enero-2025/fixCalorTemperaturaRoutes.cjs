const fs = require('fs');
const path = require('path');

console.log('🔧 Corrigiendo rutas de Calor y Temperatura en topics.generated.js...\n');

const topicsPath = path.join(__dirname, '../src/data/topics.generated.js');
let content = fs.readFileSync(topicsPath, 'utf8');

// Contador de correcciones
let corrections = 0;

// Corregir rutas de subtemas
const subtemas = [
  'diferencia_calor_temperatura',
  'cambios_de_estado',
  'graficas_temperatura_tiempo',
  'dilatacion_termica',
  'transferencia_calor_cotidiana',
  'aislantes_conductores'
];

subtemas.forEach(subtema => {
  const wrongPattern = `"/clasica/00_calor_temperatura_basicos/${subtema}"`;
  const correctPattern = `"/clasica/termodinamica/00_calor_temperatura_basicos/${subtema}"`;
  
  if (content.includes(wrongPattern)) {
    content = content.replace(new RegExp(wrongPattern, 'g'), correctPattern);
    corrections++;
    console.log(`✓ Corregido: "/clasica/00_calor_temperatura_basicos/${subtema}" → "/clasica/termodinamica/00_calor_temperatura_basicos/${subtema}"`);
  }
});

// Guardar cambios
if (corrections > 0) {
  fs.writeFileSync(topicsPath, content, 'utf8');
  console.log(`\n✅ ${corrections} rutas corregidas exitosamente\n`);
} else {
  console.log('\n✓ No se encontraron rutas para corregir\n');
}

console.log('📝 Nota: Ejecuta este script después de cada "npm run generate:topics"');
