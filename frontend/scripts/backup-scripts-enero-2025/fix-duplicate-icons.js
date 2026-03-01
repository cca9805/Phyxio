#!/usr/bin/env node

/**
 * Script para corregir iconos duplicados actualizando los metadata
 * de los archivos teoria.jsx con sus iconos específicos
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { emojiMap } from '../src/config/emoji-map.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para buscar archivos recursivamente
async function findFiles(dir, filename) {
  const results = [];
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        results.push(...await findFiles(fullPath, filename));
      } else if (entry.name === filename) {
        results.push(fullPath);
      }
    }
  } catch (error) {
    // Ignorar errores de acceso
  }
  
  return results;
}

// Función para actualizar el icono en un archivo teoria.jsx
async function updateIconInFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Extraer el subtema del metadata
    const subtemaMatch = content.match(/subtema:\s*["']([^"']+)["']/);
    if (!subtemaMatch) {
      return { updated: false, reason: 'No subtema found' };
    }
    
    const subtema = subtemaMatch[1];
    
    // Verificar si existe un emoji específico para este subtema
    if (!emojiMap[subtema]) {
      return { updated: false, reason: `No emoji for ${subtema}` };
    }
    
    // Extraer el icono actual
    const iconoMatch = content.match(/icono:\s*["']([^"']+)["']/);
    if (!iconoMatch) {
      return { updated: false, reason: 'No icono field' };
    }
    
    const currentIcono = iconoMatch[1];
    
    // Si ya tiene el icono correcto, no hacer nada
    if (currentIcono === subtema) {
      return { updated: false, reason: 'Already correct' };
    }
    
    // Actualizar el icono
    const newContent = content.replace(
      /icono:\s*["']([^"']+)["']/,
      `icono: "${subtema}"`
    );
    
    await fs.writeFile(filePath, newContent, 'utf-8');
    
    return {
      updated: true,
      file: filePath,
      oldIcono: currentIcono,
      newIcono: subtema,
      emoji: emojiMap[subtema]
    };
  } catch (error) {
    return { updated: false, reason: error.message };
  }
}

async function main() {
  console.log('🔧 Corrigiendo iconos duplicados...\n');
  
  const dataDir = path.join(__dirname, '../src/data');
  const teoriaFiles = await findFiles(dataDir, 'teoria.jsx');
  
  console.log(`📁 Encontrados ${teoriaFiles.length} archivos teoria.jsx\n`);
  
  const results = [];
  for (const file of teoriaFiles) {
    const result = await updateIconInFile(file);
    if (result.updated) {
      results.push(result);
    }
  }
  
  if (results.length === 0) {
    console.log('✅ No se encontraron archivos para actualizar');
  } else {
    console.log(`✅ Actualizados ${results.length} archivos:\n`);
    results.forEach(r => {
      const relativePath = path.relative(dataDir, r.file);
      console.log(`  ${r.emoji} ${relativePath}`);
      console.log(`     ${r.oldIcono} → ${r.newIcono}`);
    });
  }
  
  console.log(`\n💡 Ejecuta: npm run generate:sidebar`);
}

main().catch(console.error);
