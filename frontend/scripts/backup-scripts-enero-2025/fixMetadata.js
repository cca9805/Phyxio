#!/usr/bin/env node

/**
 * Script para corregir metadatos con categoria "C:" incorrecta
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapeo de correcciones
const corrections = {
  'dinamica': 'mecanica',
  'cinematica': 'mecanica', 
  'estatica': 'mecanica',
  'termodinamica': 'termodinamica',
  'electromagnetismo': 'electromagnetismo',
  'mecanica_de_fluidos': 'mecanica_de_fluidos'
};

/**
 * Corrige los metadatos de un archivo
 */
async function fixMetadata(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Verificar si tiene el problema
    if (!content.includes('categoria: "C:"')) {
      return false;
    }
    
    // Determinar la categoría correcta basándose en la ruta
    const relativePath = filePath.replace(/\\/g, '/');
    const segments = relativePath.split('/');
    const firstSegment = segments.find(s => s !== 'src' && s !== 'data');
    
    let correctCategory = 'fisica'; // default
    
    if (firstSegment) {
      if (firstSegment.startsWith('termodinamica')) {
        correctCategory = 'termodinamica';
      } else if (['dinamica', 'cinematica', 'estatica'].includes(firstSegment)) {
        correctCategory = 'mecanica';
      } else if (firstSegment.startsWith('electromagnetismo')) {
        correctCategory = 'electromagnetismo';
      } else if (firstSegment.includes('fluidos')) {
        correctCategory = 'mecanica_de_fluidos';
      }
    }
    
    // Reemplazar la categoría incorrecta
    const newContent = content.replace('categoria: "C:"', `categoria: "${correctCategory}"`);
    
    await fs.writeFile(filePath, newContent, 'utf-8');
    console.log(`✓ Corregido: ${filePath} -> categoria: "${correctCategory}"`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error procesando ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Busca archivos con el problema
 */
async function findProblematicFiles(dir) {
  const files = [];
  
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        const subFiles = await findProblematicFiles(fullPath);
        files.push(...subFiles);
      } else if (entry.name === 'teoria.jsx') {
        const content = await fs.readFile(fullPath, 'utf-8');
        if (content.includes('categoria: "C:"')) {
          files.push(fullPath);
        }
      }
    }
  } catch (error) {
    // Ignorar directorios que no se pueden leer
  }
  
  return files;
}

/**
 * Función principal
 */
async function main() {
  console.log('🔄 Corrigiendo metadatos con categoria "C:"...');
  
  try {
    const basePath = path.join(__dirname, '..', 'src', 'data');
    const problematicFiles = await findProblematicFiles(basePath);
    
    console.log(`📊 Encontrados ${problematicFiles.length} archivos con problema`);
    
    let fixed = 0;
    
    for (const file of problematicFiles) {
      const wasFixed = await fixMetadata(file);
      if (wasFixed) fixed++;
    }
    
    console.log(`\n✅ Proceso completado:`);
    console.log(`   📁 Archivos corregidos: ${fixed}`);
    
  } catch (error) {
    console.error('❌ Error en el proceso:', error);
    process.exit(1);
  }
}

// Ejecutar
main().catch(console.error);