#!/usr/bin/env node

/**
 * Script de validación de estructura jerárquica
 * Verifica que el archivo topics.generated.js contenga todas las secciones
 * definidas en hierarchy-config.js
 */

import fs from 'fs';
import path from 'path';
import { hierarchyConfig } from '../src/config/hierarchy-config.js';

const TOPICS_FILE = 'src/data/topics.generated.js';

function readTopicsFile() {
  try {
    const content = fs.readFileSync(TOPICS_FILE, 'utf8');
    return content;
  } catch (error) {
    console.error(`❌ Error leyendo ${TOPICS_FILE}:`, error.message);
    process.exit(1);
  }
}

function extractSections(content) {
  const sections = new Set();
  const regex = /"([^"]+)":\s*\{/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    sections.add(match[1]);
  }
  
  return sections;
}

function validateHierarchy() {
  console.log('🔍 Validando estructura jerárquica...\n');
  
  const content = readTopicsFile();
  const existingSections = extractSections(content);
  
  let missingCount = 0;
  let totalSections = 0;
  
  // Verificar cada sección en la configuración
  for (const [parentSection, childSections] of Object.entries(hierarchyConfig)) {
    // Skip 'main' ya que no es una sección real de contenido
    if (parentSection === 'main') continue;
    
    totalSections++;
    
    if (!existingSections.has(parentSection)) {
      console.log(`❌ Falta sección: "${parentSection}"`);
      missingCount++;
    } else {
      console.log(`✅ Encontrada: "${parentSection}"`);
    }
    
    // Si es un array, verificar las subsecciones
    if (Array.isArray(childSections)) {
      for (const childSection of childSections) {
        totalSections++;
        
        if (!existingSections.has(childSection)) {
          console.log(`❌ Falta subsección: "${childSection}" (padre: ${parentSection})`);
          missingCount++;
        } else {
          console.log(`✅ Encontrada subsección: "${childSection}"`);
        }
      }
    }
  }
  
  console.log(`\n📊 Resumen:`);
  console.log(`   Total de secciones esperadas: ${totalSections}`);
  console.log(`   Secciones encontradas: ${totalSections - missingCount}`);
  console.log(`   Secciones faltantes: ${missingCount}`);
  
  if (missingCount === 0) {
    console.log(`\n🎉 ¡Estructura jerárquica completa!`);
    return true;
  } else {
    console.log(`\n⚠️  Estructura jerárquica incompleta. Faltan ${missingCount} secciones.`);
    return false;
  }
}

function generateMissingSections() {
  console.log('\n🔧 Generando código para secciones faltantes...\n');
  
  const content = readTopicsFile();
  const existingSections = extractSections(content);
  
  let generatedCode = '';
  
  for (const [parentSection, childSections] of Object.entries(hierarchyConfig)) {
    if (!existingSections.has(parentSection) && Array.isArray(childSections)) {
      generatedCode += generateSectionCode(parentSection, childSections);
    }
    
    if (Array.isArray(childSections)) {
      for (const childSection of childSections) {
        if (!existingSections.has(childSection)) {
          generatedCode += generateSubsectionCode(childSection, parentSection);
        }
      }
    }
  }
  
  if (generatedCode) {
    console.log('📝 Código generado para secciones faltantes:');
    console.log('```javascript');
    console.log(generatedCode);
    console.log('```');
  }
}

function generateSectionCode(sectionName, subsections) {
  return `
  "${sectionName}": {
    "title": "${capitalizeTitle(sectionName)}",
    "intro": "Estudio de ${sectionName.toLowerCase()}",
    "cards": [
      // TODO: Añadir cards para subsecciones: ${subsections.join(', ')}
    ],
    "additionalContent": ""
  },`;
}

function generateSubsectionCode(subsectionName, parentSection) {
  return `
  "${subsectionName}": {
    "title": "${capitalizeTitle(subsectionName)}",
    "intro": "Estudio detallado de ${subsectionName.toLowerCase()}",
    "cards": [
      // TODO: Añadir contenido específico
    ],
    "additionalContent": ""
  },`;
}

function capitalizeTitle(str) {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

// Ejecutar validación
const isComplete = validateHierarchy();

if (!isComplete) {
  generateMissingSections();
  
  // Si se pasa --warn-only, no fallar el proceso
  const warnOnly = process.argv.includes('--warn-only');
  if (warnOnly) {
    console.log('\n⚠️  Modo advertencia: El build continuará a pesar de las secciones faltantes.');
    process.exit(0);
  } else {
    console.log('\n❌ Build detenido debido a estructura jerárquica incompleta.');
    console.log('💡 Usa "npm run build:force" para construir sin validación.');
    console.log('💡 Usa "npm run validate:hierarchy -- --warn-only" para solo mostrar advertencias.');
    process.exit(1);
  }
}

console.log('\n✅ Build puede continuar.');
process.exit(0);