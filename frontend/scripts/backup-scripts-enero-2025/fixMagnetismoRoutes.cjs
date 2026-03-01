#!/usr/bin/env node

/**
 * Script para corregir las rutas de Magnetismo Básico en topics.generated.js
 * Las rutas deben incluir la jerarquía completa: /clasica/electromagnetismo/magnetismo/magnetismo-basico/...
 */

const fs = require('fs');
const path = require('path');

const TOPICS_FILE = path.join(__dirname, '../src/data/topics.generated.js');

console.log('🔧 Corrigiendo rutas de Magnetismo Básico en topics.generated.js...\n');

try {
  // Leer el archivo
  let content = fs.readFileSync(TOPICS_FILE, 'utf8');
  let correctedCount = 0;

  // Patrón para encontrar rutas incorrectas de magnetismo-basico
  // Buscar: "/clasica/magnetismo-basico/..."
  // Reemplazar por: "/clasica/electromagnetismo/magnetismo/magnetismo-basico/..."
  
  const patterns = [
    {
      // Rutas de subtemas de magnetismo-basico
      search: /("link":\s*"\/clasica\/magnetismo-basico\/(imanes-magnetismo|campo-magnetico|electroimanes|aplicaciones-cotidianas)")/g,
      replace: '"link": "/clasica/electromagnetismo/magnetismo/magnetismo-basico/$2"'
    }
  ];

  patterns.forEach(({ search, replace }) => {
    const matches = content.match(search);
    if (matches) {
      correctedCount += matches.length;
      content = content.replace(search, replace);
      console.log(`✓ Corregido: "/clasica/magnetismo-basico/..." → "/clasica/electromagnetismo/magnetismo/magnetismo-basico/..."`);
    }
  });

  if (correctedCount > 0) {
    // Guardar el archivo corregido
    fs.writeFileSync(TOPICS_FILE, content, 'utf8');
    console.log(`\n✅ ${correctedCount} rutas corregidas exitosamente\n`);
  } else {
    console.log('\n✓ No se encontraron rutas para corregir\n');
  }

  console.log('📝 Nota: Ejecuta este script después de cada "npm run generate:topics"');

} catch (error) {
  console.error('❌ Error al corregir rutas:', error.message);
  process.exit(1);
}
