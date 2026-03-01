#!/usr/bin/env node

/**
 * Script para corregir las referencias de iconos de strings a variables JavaScript
 * Convierte "icono": "nombreIcon" a "icono": nombreIcon
 */

import fs from 'fs';

const TOPICS_FILE = 'src/data/topics.generated.js';

function fixIconReferences() {
  console.log('🔧 Corrigiendo referencias de iconos...');
  
  try {
    let content = fs.readFileSync(TOPICS_FILE, 'utf8');
    
    // Contar las ocurrencias antes de la corrección
    const beforeMatches = content.match(/"icono": "[a-zA-Z]+Icon"/g);
    const beforeCount = beforeMatches ? beforeMatches.length : 0;
    
    console.log(`📊 Encontradas ${beforeCount} referencias de iconos como strings`);
    
    // Reemplazar todas las referencias de iconos de strings a variables
    content = content.replace(/"icono": "([a-zA-Z]+Icon)"/g, '"icono": $1');
    
    // También corregir las referencias que pueden estar como 'm_moderna'
    content = content.replace(/"icono": "m_moderna"/g, '"icono": m_moderna');
    
    // Contar las ocurrencias después de la corrección
    const afterMatches = content.match(/"icono": "[a-zA-Z]+Icon"/g);
    const afterCount = afterMatches ? afterMatches.length : 0;
    
    // Escribir el archivo corregido
    fs.writeFileSync(TOPICS_FILE, content, 'utf8');
    
    console.log(`✅ Corregidas ${beforeCount - afterCount} referencias de iconos`);
    console.log(`📊 Referencias restantes como strings: ${afterCount}`);
    
    if (afterCount === 0) {
      console.log('🎉 ¡Todas las referencias de iconos han sido corregidas!');
    }
    
    return beforeCount - afterCount;
    
  } catch (error) {
    console.error('❌ Error corrigiendo iconos:', error.message);
    process.exit(1);
  }
}

// Ejecutar la corrección
const corrected = fixIconReferences();

if (corrected > 0) {
  console.log('\n💡 Ejecuta "npm run validate:hierarchy" para verificar que todo esté correcto.');
} else {
  console.log('\n✅ No se encontraron referencias de iconos que corregir.');
}

process.exit(0);