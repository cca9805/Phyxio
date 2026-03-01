#!/usr/bin/env node

/**
 * Script para corregir las categorías con los valores correctos
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Corrige las categorías según la ruta del archivo
 */
async function fixCategories(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Determinar la categoría correcta basándose en la ruta
    const relativePath = filePath.replace(/\\/g, '/');
    let correctCategory = 'fisica'; // default
    
    if (relativePath.includes('/cinematica/') || relativePath.includes('/dinamica/') || relativePath.includes('/estatica/')) {
      correctCategory = 'mecanica';
    } else if (relativePath.includes('/electromagnetismo/')) {
      correctCategory = 'electromagnetismo';
    } else if (relativePath.includes('/termodinamica/')) {
      correctCategory = 'termodinamica';
    } else if (relativePath.includes('/mecanica_de_fluidos/')) {
      correctCategory = 'mecanica_de_fluidos';
    }
    
    // Solo actualizar si la categoría actual es "fisica" (que fue el valor genérico que pusimos)
    if (content.includes('categoria: "fisica"')) {
      const newContent = content.replace('categoria: "fisica"', `categoria: "${correctCategory}"`);
      
      if (newContent !== content) {
        await fs.writeFile(filePath, newContent, 'utf-8');
        console.log(`✓ ${filePath} -> categoria: "${correctCategory}"`);
        return true;
      }
    }
    
    return false;
    
  } catch (error) {
    console.error(`❌ Error procesando ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Busca archivos teoria.jsx
 */
async function findTheoryFiles(dir) {
  const files = [];
  
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        const subFiles = await findTheoryFiles(fullPath);
        files.push(...subFiles);
      } else if (entry.name === 'teoria.jsx') {
        files.push(fullPath);
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
  console.log('🔄 Corrigiendo categorías con valores específicos...');
  
  try {
    const basePath = path.join(__dirname, '..', 'src', 'data');
    const theoryFiles = await findTheoryFiles(basePath);
    
    let fixed = 0;
    
    for (const file of theoryFiles) {
      const wasFixed = await fixCategories(file);
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