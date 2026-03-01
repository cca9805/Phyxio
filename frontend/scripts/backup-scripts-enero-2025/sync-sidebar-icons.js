#!/usr/bin/env node

/**
 * Script para sincronizar los iconos del sidebar con los metadata de teoria.jsx
 * Lee todos los archivos teoria.jsx y extrae sus iconos/emojis
 * Luego regenera el sidebar con los iconos correctos
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { emojiMap } from '../src/config/emoji-map.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../src/data');

// Función para buscar archivos recursivamente
async function findFiles(dir, filename) {
  const results = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await findFiles(fullPath, filename));
    } else if (entry.name === filename) {
      results.push(fullPath);
    }
  }
  
  return results;
}

// Función para extraer metadata de un archivo teoria.jsx
async function extractMetadata(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Buscar el objeto metadata usando regex
    const metadataMatch = content.match(/export\s+const\s+metadata\s*=\s*\{([^}]+)\}/s);
    if (!metadataMatch) {
      return null;
    }
    
    const metadataStr = metadataMatch[1];
    
    // Extraer icono/emoji
    const iconoMatch = metadataStr.match(/(?:icono|emoji|icon)\s*:\s*["']([^"']+)["']/);
    if (!iconoMatch) {
      return null;
    }
    
    const iconValue = iconoMatch[1];
    
    // Convertir usando emojiMap
    let emoji = emojiMap[iconValue];
    
    // Si no existe en el mapa, verificar si iconValue ya es un emoji
    if (!emoji) {
      // Detectar si es un emoji (caracteres Unicode > U+1F300)
      const isEmoji = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{FE00}-\u{FE0F}]|[\u{1F900}-\u{1F9FF}]|[\u{1F1E0}-\u{1F1FF}]/u.test(iconValue);
      if (isEmoji) {
        emoji = iconValue; // Usar el emoji directamente
      } else {
        return null; // No es emoji ni está en el mapa
      }
    }
    
    return { emoji, iconValue };
  } catch (error) {
    console.warn(`Error leyendo ${filePath}:`, error.message);
    return null;
  }
}

// Función para construir el mapa de iconos desde los archivos teoria.jsx
async function buildIconMap() {
  const iconMap = {};
  
  // Buscar todos los archivos teoria.jsx
  const teoriaFiles = await findFiles(DATA_DIR, 'teoria.jsx');
  
  console.log(`📁 Encontrados ${teoriaFiles.length} archivos teoria.jsx`);
  
  for (const filePath of teoriaFiles) {
    const metadata = await extractMetadata(filePath);
    if (!metadata) continue;
    
    // Extraer la ruta relativa desde DATA_DIR
    const relativePath = path.relative(DATA_DIR, path.dirname(filePath));
    const pathParts = relativePath.split(path.sep);
    
    // Crear diferentes variantes de la clave, priorizando las más específicas
    const keys = [
      relativePath.replace(/\\/g, '/'),  // ruta completa (más específica)
      pathParts.join('/'),               // ruta completa alternativa
      pathParts.slice(-3).join('/'),     // últimos 3 segmentos
      pathParts.slice(-2).join('/'),     // últimos 2 segmentos
      pathParts[pathParts.length - 1]    // último segmento (menos específico)
    ];
    
    // Guardar en orden de especificidad (las más específicas primero)
    // Solo sobrescribir si no existe o si la nueva clave es más específica
    keys.forEach((key, index) => {
      if (key) {
        // Si no existe, agregar
        if (!iconMap[key]) {
          iconMap[key] = metadata.emoji;
        }
        // Si existe pero la nueva es más específica (índice menor), actualizar
        else if (index < 2) { // Solo actualizar para las 2 primeras (más específicas)
          iconMap[key] = metadata.emoji;
        }
      }
    });
  }
  
  console.log(`✅ Mapa de iconos construido con ${Object.keys(iconMap).length} entradas`);
  return iconMap;
}

// Función principal
async function main() {
  console.log('🔄 Sincronizando iconos del sidebar con metadata de teoria.jsx...\n');
  
  const iconMap = await buildIconMap();
  
  // Guardar el mapa para uso del script de generación
  const outputPath = path.join(__dirname, '../src/data/iconMap.generated.json');
  await fs.writeFile(outputPath, JSON.stringify(iconMap, null, 2), 'utf-8');
  
  console.log(`\n📝 Mapa guardado en: ${path.relative(process.cwd(), outputPath)}`);
  console.log('\n✅ Sincronización completada');
  console.log('💡 Ahora ejecuta: npm run generate:sidebar');
}

main().catch(console.error);
