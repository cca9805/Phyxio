#!/usr/bin/env node

/**
 * Script para verificar que los iconos del sidebar coincidan con los metadata
 */

import { sidebarItems } from '../src/data/sidebarItems.generated.js';
import { emojiMap } from '../src/config/emoji-map.js';

let errors = 0;
let checked = 0;

function checkIcons(items, depth = 0) {
  items.forEach(item => {
    if (item.link) {
      checked++;
      
      // Extraer la última parte del link como clave
      const key = item.link.replace(/^\/clasica\//, '').replace(/^\//, '').split('/').pop();
      const expected = emojiMap[key];
      
      if (expected && item.icon !== expected) {
        console.log(`❌ ${item.label} (${item.link}):`);
        console.log(`   Tiene: ${item.icon}`);
        console.log(`   Esperado: ${expected}`);
        errors++;
      }
    }
    
    if (item.children) {
      checkIcons(item.children, depth + 1);
    }
  });
}

console.log('🔍 Verificando iconos del sidebar...\n');
checkIcons(sidebarItems);

console.log(`\n📊 Resultados:`);
console.log(`   Elementos verificados: ${checked}`);
console.log(`   Errores encontrados: ${errors}`);

if (errors === 0) {
  console.log('\n✅ Todos los iconos coinciden con los metadata');
} else {
  console.log(`\n⚠️  Se encontraron ${errors} discrepancias`);
  process.exit(1);
}
