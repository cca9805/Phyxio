const fs = require('fs');
const path = require('path');

/**
 * Script para eliminar importaciones duplicadas de TheoryV2
 */

// Función para encontrar todos los archivos teoria.jsx
function findTeoriaFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        findTeoriaFiles(filePath, fileList);
      }
    } else if (file === 'teoria.jsx') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Función para corregir importaciones duplicadas
function fixDuplicateImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Buscar todas las líneas de importación de TheoryV2
  const importRegex = /import\s+(?:{[^}]+}|[^;]+)\s+from\s+['"][^'"]*TheoryV2[^'"]*['"];?\s*\n/g;
  
  const imports = [...content.matchAll(importRegex)];
  
  if (imports.length <= 1) {
    return false; // No hay duplicados
  }
  
  // Recopilar todos los componentes importados
  const allComponents = new Set();
  let hasReact = false;
  let importPath = '';
  
  imports.forEach(match => {
    const importLine = match[0];
    
    // Verificar si tiene React
    if (importLine.includes('React')) {
      hasReact = true;
    }
    
    // Extraer la ruta
    const pathMatch = importLine.match(/from\s+['"]([^'"]+)['"]/);
    if (pathMatch) {
      importPath = pathMatch[1];
    }
    
    // Extraer componentes
    const componentsMatch = importLine.match(/{([^}]+)}/);
    if (componentsMatch) {
      const components = componentsMatch[1].split(',').map(c => c.trim());
      components.forEach(comp => {
        if (comp && comp !== 'React') {
          allComponents.add(comp);
        }
      });
    }
  });
  
  // Crear la nueva importación consolidada
  const componentsList = Array.from(allComponents).sort().join(', ');
  let newImport = '';
  
  if (hasReact) {
    newImport = `import React from 'react';\nimport { ${componentsList} } from '${importPath}';\n`;
  } else {
    newImport = `import { ${componentsList} } from '${importPath}';\n`;
  }
  
  // Reemplazar todas las importaciones con la consolidada
  let newContent = content;
  
  // Primero, encontrar la posición de la primera importación
  const firstImportPos = content.search(/import\s+/);
  
  // Eliminar todas las importaciones de TheoryV2
  imports.forEach(match => {
    newContent = newContent.replace(match[0], '');
  });
  
  // Insertar la nueva importación en la posición de la primera importación
  if (firstImportPos !== -1) {
    // Buscar el inicio de la línea donde estaba la primera importación
    const lineStart = content.lastIndexOf('\n', firstImportPos) + 1;
    const beforeImports = newContent.slice(0, lineStart);
    const afterImports = newContent.slice(lineStart);
    newContent = beforeImports + newImport + afterImports;
  } else {
    newContent = newImport + '\n' + newContent;
  }
  
  fs.writeFileSync(filePath, newContent, 'utf8');
  
  console.log(`✅ ${path.relative(process.cwd(), filePath)}`);
  console.log(`   Consolidadas ${imports.length} importaciones en 1`);
  console.log(`   Componentes: ${componentsList}\n`);
  
  return true;
}

// Función principal
function main() {
  console.log('🔍 Buscando importaciones duplicadas de TheoryV2...\n');
  
  const srcDir = path.join(__dirname, '../src');
  const teoriaFiles = findTeoriaFiles(srcDir);
  
  console.log(`📁 Encontrados ${teoriaFiles.length} archivos teoria.jsx\n`);
  console.log('🔧 Corrigiendo duplicados...\n');
  
  let fixedCount = 0;
  
  teoriaFiles.forEach(file => {
    if (fixDuplicateImports(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n✨ Proceso completado!`);
  console.log(`📊 Archivos corregidos: ${fixedCount} de ${teoriaFiles.length}`);
  
  if (fixedCount === 0) {
    console.log('✅ No se encontraron importaciones duplicadas!');
  }
}

// Ejecutar
main();
