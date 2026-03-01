#!/usr/bin/env node

/**
 * Script para agregar subcategoría a todos los metadatos existentes
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Determina la subcategoría basándose en la ruta del archivo
 */
function determineSubcategoria(filePath) {
  const relativePath = filePath.replace(/\\/g, '/');
  
  // Mecánica
  if (relativePath.includes('/cinematica/')) return 'cinematica';
  if (relativePath.includes('/dinamica/')) return 'dinamica';
  if (relativePath.includes('/estatica/')) return 'estatica';
  
  // Electromagnetismo
  if (relativePath.includes('/electricidad/')) return 'electricidad';
  if (relativePath.includes('/magnetismo/')) return 'magnetismo';
  if (relativePath.includes('/electronica/')) return 'electronica';
  if (relativePath.includes('/ondas/')) return 'ondas';
  if (relativePath.includes('/maxwell/')) return 'maxwell';
  
  // Termodinámica - usar el primer segmento después de termodinamica
  if (relativePath.includes('/termodinamica/')) {
    const segments = relativePath.split('/');
    const termoIndex = segments.findIndex(s => s === 'termodinamica');
    if (termoIndex >= 0 && segments[termoIndex + 1]) {
      const subcategoria = segments[termoIndex + 1];
      // Mapear códigos numéricos a nombres descriptivos
      const termoMap = {
        '01_conceptos_fundamentales': 'conceptos_fundamentales',
        '02_magnitudes_termicas': 'magnitudes_termicas',
        '03_principios_de_la_termodinamica': 'principios_termodinamica',
        '04_modelos_moleculares_y_gases': 'modelos_moleculares_gases',
        '05_entropia': 'entropia',
        '06_procesos_termodinamicos': 'procesos_termodinamicos',
        '07_potenciales_termodinamicos': 'potenciales_termodinamicos',
        '08_maquinas_termicas_y_refrigeracion': 'maquinas_termicas_refrigeracion',
        '09_ciclos_termodinamicos': 'ciclos_termodinamicos',
        '10_ciclos_combinados': 'ciclos_combinados',
        '11_transferencia_de_calor': 'transferencia_calor',
        '12_aplicaciones_practicas': 'aplicaciones_practicas',
        '13_termodinamica_estadistica': 'termodinamica_estadistica'
      };
      return termoMap[subcategoria] || subcategoria;
    }
  }
  
  // Mecánica de fluidos - usar el primer segmento
  if (relativePath.includes('/mecanica_de_fluidos/')) {
    const segments = relativePath.split('/');
    const fluidosIndex = segments.findIndex(s => s === 'mecanica_de_fluidos');
    if (fluidosIndex >= 0 && segments[fluidosIndex + 1]) {
      return segments[fluidosIndex + 1];
    }
  }
  
  // Default: usar el tema actual como subcategoría
  return null;
}

/**
 * Agrega subcategoría a los metadatos de un archivo
 */
async function addSubcategoria(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Verificar si ya tiene subcategoría
    if (content.includes('subcategoria:')) {
      return false;
    }
    
    // Buscar el bloque de metadatos
    const metadataRegex = /(export const metadata = \{[\s\S]*?categoria: "[^"]+",)([\s\S]*?\})/;
    const match = content.match(metadataRegex);
    
    if (!match) {
      console.log(`⚠ No se encontraron metadatos en ${filePath}`);
      return false;
    }
    
    const subcategoria = determineSubcategoria(filePath);
    
    if (!subcategoria) {
      console.log(`⚠ No se pudo determinar subcategoría para ${filePath}`);
      return false;
    }
    
    // Insertar subcategoría después de categoría
    const beforeCategoria = match[1];
    const afterCategoria = match[2];
    
    const newMetadataBlock = `${beforeCategoria}\n  subcategoria: "${subcategoria}",${afterCategoria}`;
    
    const newContent = content.replace(metadataRegex, newMetadataBlock);
    
    await fs.writeFile(filePath, newContent, 'utf-8');
    console.log(`✓ ${filePath} -> subcategoria: "${subcategoria}"`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error procesando ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Busca archivos teoria.jsx recursivamente
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
  console.log('🔄 Agregando subcategoría a todos los metadatos...');
  
  try {
    const basePath = path.join(__dirname, '..', 'src', 'data');
    const theoryFiles = await findTheoryFiles(basePath);
    
    console.log(`📊 Encontrados ${theoryFiles.length} archivos teoria.jsx`);
    
    let processed = 0;
    let added = 0;
    
    for (const file of theoryFiles) {
      processed++;
      const wasAdded = await addSubcategoria(file);
      if (wasAdded) added++;
    }
    
    console.log(`\n✅ Proceso completado:`);
    console.log(`   📁 Archivos procesados: ${processed}`);
    console.log(`   ➕ Subcategorías agregadas: ${added}`);
    console.log(`   ✓ Ya tenían subcategoría: ${processed - added}`);
    
  } catch (error) {
    console.error('❌ Error en el proceso:', error);
    process.exit(1);
  }
}

// Ejecutar
main().catch(console.error);