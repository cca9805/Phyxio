#!/usr/bin/env node

/**
 * Script maestro para actualizar todos los archivos generados dinámicamente
 * Uso: npm run update:all
 */

import { execSync } from 'child_process';

console.log('🔄 Actualizando todos los archivos generados...\n');

try {
  // Generar topics
  console.log('📊 Generando topics.generated.js...');
  execSync('node scripts/generateTopicsV2.js', { stdio: 'inherit' });
  
  // Generar sidebar
  console.log('\n🧭 Generando sidebarItems.generated.js...');
  execSync('node scripts/generateSidebar.js', { stdio: 'inherit' });
  
  console.log('\n✅ Todos los archivos generados exitosamente');
  
} catch (error) {
  console.error('❌ Error actualizando archivos:', error.message);
  process.exit(1);
}