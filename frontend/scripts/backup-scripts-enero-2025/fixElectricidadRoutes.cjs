const fs = require('fs');
const path = require('path');

const topicsPath = path.join(__dirname, '../src/data/topics.generated.js');

console.log('🔧 Corrigiendo rutas de Electricidad Doméstica en topics.generated.js...\n');

try {
  let content = fs.readFileSync(topicsPath, 'utf8');
  let correctionCount = 0;

  // Corregir rutas de electricidad-domestica y sus subtemas
  const corrections = [
    {
      from: '"/clasica/electricidad-domestica/',
      to: '"/clasica/electromagnetismo/electricidad/electricidad-domestica/',
      description: 'electricidad-domestica'
    },
    {
      from: '"/clasica/circuitos-basicos/',
      to: '"/clasica/electromagnetismo/electricidad/circuitos-basicos/',
      description: 'circuitos-basicos'
    },
    {
      from: '"/clasica/componentes-electricos/',
      to: '"/clasica/electromagnetismo/electricidad/componentes-electricos/',
      description: 'componentes-electricos'
    },
    {
      from: '"/clasica/transformadores/',
      to: '"/clasica/electromagnetismo/electricidad/transformadores/',
      description: 'transformadores'
    }
  ];

  corrections.forEach(({ from, to, description }) => {
    const regex = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, to);
      correctionCount += matches.length;
      console.log(`✓ Corregido: "${from}..." → "${to}..."`);
    }
  });

  if (correctionCount > 0) {
    fs.writeFileSync(topicsPath, content, 'utf8');
    console.log(`\n✅ ${correctionCount} rutas corregidas exitosamente\n`);
  } else {
    console.log('\n✓ No se encontraron rutas para corregir\n');
  }

  console.log('📝 Nota: Ejecuta este script después de cada "npm run generate:topics"');
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
