#!/usr/bin/env node

/**
 * Script para extraer TODOS los iconos de TODOS los archivos teoria.jsx
 * y generar un icon-config.js completo
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '../src/data');
const OUTPUT_FILE = path.join(__dirname, '../src/config/icon-config.js');

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
async function extractIconFromFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Buscar el objeto metadata
    const metadataMatch = content.match(/export\s+const\s+metadata\s*=\s*\{([^}]+)\}/s);
    if (!metadataMatch) {
      return null;
    }
    
    const metadataStr = metadataMatch[1];
    
    // Extraer icono
    const iconoMatch = metadataStr.match(/(?:icono|emoji|icon)\s*:\s*["']([^"']+)["']/);
    if (!iconoMatch) {
      return null;
    }
    
    const iconValue = iconoMatch[1];
    
    // Extraer la ruta relativa desde DATA_DIR
    const relativePath = path.relative(DATA_DIR, path.dirname(filePath));
    const key = relativePath.replace(/\\/g, '/').split('/').pop(); // Último segmento
    const fullKey = relativePath.replace(/\\/g, '/'); // Ruta completa
    
    return { key, fullKey, icon: iconValue };
  } catch (error) {
    console.warn(`Error leyendo ${filePath}:`, error.message);
    return null;
  }
}

// Función principal
async function main() {
  console.log('🔍 Buscando archivos teoria.jsx...');
  
  const teoriaFiles = await findFiles(DATA_DIR, 'teoria.jsx');
  console.log(`📁 Encontrados ${teoriaFiles.length} archivos teoria.jsx`);
  
  const iconMap = {};
  let emojiCount = 0;
  let nameCount = 0;
  
  for (const filePath of teoriaFiles) {
    const result = await extractIconFromFile(filePath);
    if (!result) continue;
    
    const { key, fullKey, icon } = result;
    
    // Detectar si es emoji o nombre
    const isEmoji = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]|[\u{FE00}-\u{FE0F}]|[\u{1F900}-\u{1F9FF}]|[\u{1F1E0}-\u{1F1FF}]|↕️|〰️/u.test(icon);
    
    if (isEmoji) {
      iconMap[key] = icon;
      emojiCount++;
    } else {
      // Es un nombre, necesitamos asignarle un emoji
      nameCount++;
      console.log(`⚠️  ${fullKey} tiene nombre "${icon}" en lugar de emoji`);
    }
  }
  
  console.log(`\n✅ ${emojiCount} temas con emojis`);
  console.log(`⚠️  ${nameCount} temas con nombres (necesitan emojis)`);
  
  // Generar el archivo icon-config.js
  const sortedKeys = Object.keys(iconMap).sort();
  const iconEntries = sortedKeys.map(key => `  '${key}': '${iconMap[key]}'`).join(',\n');
  
  const output = `/**
 * Configuración centralizada de iconos para todo el proyecto
 * Este archivo es la única fuente de verdad para los iconos
 * 
 * GENERADO AUTOMÁTICAMENTE por scripts/extract-all-icons.js
 * Para actualizar: npm run extract:icons
 */

export const iconConfig = {
${iconEntries}
};

/**
 * Obtiene el icono para una sección dada
 * @param {string} sectionKey - Clave de la sección
 * @param {object} emojiMap - Mapa de emojis opcional (de emoji-map.js)
 * @returns {string} - Emoji del icono
 */
export function getIconForSection(sectionKey, emojiMap = {}) {
  // Primero buscar en iconConfig (tiene prioridad)
  if (iconConfig[sectionKey]) {
    return iconConfig[sectionKey];
  }
  
  // Luego buscar en emojiMap (extraído de teoria.jsx)
  if (emojiMap[sectionKey]) {
    return emojiMap[sectionKey];
  }
  
  // Por defecto, emoji genérico
  return '📚';
}
`;
  
  await fs.writeFile(OUTPUT_FILE, output, 'utf-8');
  console.log(`\n✅ Archivo ${OUTPUT_FILE} generado exitosamente`);
  console.log(`📊 Total de iconos: ${sortedKeys.length}`);
}

main().catch(console.error);
