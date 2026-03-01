#!/usr/bin/env node

/**
 * Script para encontrar temas faltantes en education-themes-generated.js
 */

const fs = require('fs');
const path = require('path');

const TOPICS_FILE = path.join(__dirname, '../src/data/topics.generated.js');
const EDUCATION_FILE = path.join(__dirname, 'education-themes-generated.js');

console.log('🔍 Buscando temas faltantes...\n');

try {
  // Leer topics.generated.js
  const topicsContent = fs.readFileSync(TOPICS_FILE, 'utf8');
  
  // Extraer todos los paths de las secciones
  const pathMatches = topicsContent.matchAll(/"link":\s*"\/clasica\/([^"]+)"/g);
  const allPaths = new Set();
  
  for (const match of pathMatches) {
    const fullPath = match[1];
    // Filtrar paths que no son temas individuales (páginas principales)
    if (!fullPath.includes('/') || 
        fullPath === 'mecanica' || 
        fullPath === 'termodinamica' ||
        fullPath === 'electromagnetismo' ||
        fullPath === 'optica') {
      continue;
    }
    allPaths.add(fullPath);
  }
  
  console.log(`📊 Total de rutas encontradas en topics.generated.js: ${allPaths.size}`);
  
  // Leer education-themes-generated.js
  const educationContent = fs.readFileSync(EDUCATION_FILE, 'utf8');
  
  // Extraer paths existentes
  const existingPaths = new Set();
  const existingMatches = educationContent.matchAll(/path:\s*'([^']+)'/g);
  
  for (const match of existingMatches) {
    existingPaths.add(match[1]);
  }
  
  console.log(`📊 Total de rutas en education-themes-generated.js: ${existingPaths.size}\n`);
  
  // Encontrar faltantes
  const missingPaths = [];
  
  for (const pathItem of allPaths) {
    if (!existingPaths.has(pathItem)) {
      missingPaths.push(pathItem);
    }
  }
  
  console.log(`❌ Temas faltantes: ${missingPaths.length}\n`);
  
  if (missingPaths.length > 0) {
    console.log('📝 Listado de temas faltantes:\n');
    missingPaths.sort().forEach((p, i) => {
      console.log(`${(i + 1).toString().padStart(3)}. ${p}`);
    });
    
    // Generar código para agregar
    console.log('\n\n📋 Código para agregar (asignar nivel educativo apropiado):\n');
    console.log('// Temas faltantes - ASIGNAR NIVEL CORRECTO');
    missingPaths.sort().forEach(p => {
      const titulo = p.split('/').pop().replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const categoria = p.split('/')[0];
      console.log(`  { path: '${p}', titulo: '${titulo}', categoria: '${categoria}', educationLevel: 'BACHILLERATO' },`);
    });
  } else {
    console.log('✅ Todos los temas están representados en education-themes-generated.js');
  }
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
