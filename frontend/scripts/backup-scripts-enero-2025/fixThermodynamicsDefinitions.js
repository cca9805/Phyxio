/**
 * Script para mejorar los archivos definitions.js de termodinámica
 * Asegura que los títulos sean descriptivos y las fórmulas se muestren correctamente
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Función para encontrar todos los definitions.js en termodinámica
function findDefinitionsFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findDefinitionsFiles(filePath, fileList);
    } else if (file === 'definitions.js') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Función para mejorar un archivo definitions.js
function improveDefinitionsFile(filePath) {
  console.log(`Procesando: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Reemplazar títulos genéricos por más descriptivos
  if (content.includes("title: 'Cálculo 1'")) {
    const folderName = path.basename(path.dirname(filePath));
    const readableName = folderName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    content = content.replace(/title: 'Cálculo 1'/g, `title: '${readableName} - Fórmula Principal'`);
    modified = true;
  }
  
  if (content.includes("title: 'Cálculo 2'")) {
    const folderName = path.basename(path.dirname(filePath));
    const readableName = folderName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    content = content.replace(/title: 'Cálculo 2'/g, `title: '${readableName} - Aplicación'`);
    modified = true;
  }
  
  // Asegurar que las fórmulas placeholder sean más descriptivas
  if (content.includes("formula: 'Ecuación fundamental'")) {
    content = content.replace(/formula: 'Ecuación fundamental'/g, "formula: 'Fórmula por definir'");
    modified = true;
  }
  
  if (content.includes("formula: 'Aplicación práctica'")) {
    content = content.replace(/formula: 'Aplicación práctica'/g, "formula: 'Aplicación por definir'");
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✓ Mejorado`);
  } else {
    console.log(`  - Sin cambios necesarios`);
  }
}

// Ejecutar el script
const thermoDir = path.join(__dirname, '..', 'src', 'data', 'termodinamica');
const definitionsFiles = findDefinitionsFiles(thermoDir);

console.log(`\nEncontrados ${definitionsFiles.length} archivos definitions.js\n`);

definitionsFiles.forEach(file => {
  try {
    improveDefinitionsFile(file);
  } catch (error) {
    console.error(`Error procesando ${file}:`, error.message);
  }
});

console.log(`\n✓ Proceso completado`);
