const fs = require('fs');
const path = require('path');

/**
 * Script para corregir las rutas de importación de TheoryV2 en todos los archivos teoria.jsx
 * 
 * Problema: Muchos archivos tienen rutas incorrectas como:
 * - import { ... } from '/src/components/TheoryV2'
 * - import { ... } from '../../../../components/TheoryV2'
 * 
 * Solución: Calcular la ruta relativa correcta desde cada archivo hasta TheoryV2.jsx
 */

// Función para calcular la ruta relativa correcta
function getRelativePath(fromFile, toFile) {
  const from = path.dirname(fromFile);
  let relative = path.relative(from, toFile);
  
  // En Windows, convertir \ a /
  relative = relative.replace(/\\/g, '/');
  
  // Si no empieza con ./ o ../, añadir ./
  if (!relative.startsWith('.')) {
    relative = './' + relative;
  }
  
  return relative;
}

// Función para encontrar todos los archivos teoria.jsx
function findTeoriaFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Ignorar node_modules y otras carpetas
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        findTeoriaFiles(filePath, fileList);
      }
    } else if (file === 'teoria.jsx') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Función para corregir las importaciones en un archivo
function fixImportsInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Buscar líneas de importación de TheoryV2 (con o sin extensión)
  const importRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+TheoryV2(?:\.jsx)?)['"]/g;
  
  let hasChanges = false;
  let newContent = content;
  
  const matches = [...content.matchAll(importRegex)];
  
  matches.forEach(match => {
    const fullMatch = match[0];
    const imports = match[1];
    const oldPath = match[2];
    
    // Calcular la ruta correcta
    const theoryV2Path = path.join(__dirname, '../src/components/TheoryV2.jsx');
    const correctPath = getRelativePath(filePath, theoryV2Path);
    
    // Remover la extensión .jsx si está presente
    const correctPathWithoutExt = correctPath.replace(/\.jsx$/, '');
    
    // Crear la nueva línea de importación
    const newImport = `import {${imports}} from '${correctPathWithoutExt}'`;
    
    // Reemplazar si la ruta es diferente O si tiene extensión .jsx
    const oldPathWithoutExt = oldPath.replace(/\.jsx$/, '');
    const hasJsxExtension = oldPath.endsWith('.jsx');
    
    if (oldPathWithoutExt !== correctPathWithoutExt || hasJsxExtension) {
      newContent = newContent.replace(fullMatch, newImport);
      hasChanges = true;
      console.log(`\n📝 ${path.relative(process.cwd(), filePath)}`);
      console.log(`   ❌ Antes: ${oldPath}`);
      console.log(`   ✅ Ahora:  ${correctPathWithoutExt}`);
    }
  });
  
  if (hasChanges) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  }
  
  return false;
}

// Función principal
function main() {
  console.log('🔍 Buscando archivos teoria.jsx...\n');
  
  const srcDir = path.join(__dirname, '../src');
  const teoriaFiles = findTeoriaFiles(srcDir);
  
  console.log(`📁 Encontrados ${teoriaFiles.length} archivos teoria.jsx\n`);
  console.log('🔧 Corrigiendo importaciones...\n');
  
  let fixedCount = 0;
  
  teoriaFiles.forEach(file => {
    if (fixImportsInFile(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n✨ Proceso completado!`);
  console.log(`📊 Archivos corregidos: ${fixedCount} de ${teoriaFiles.length}`);
  
  if (fixedCount === 0) {
    console.log('✅ Todas las rutas ya estaban correctas!');
  }
}

// Ejecutar
main();
