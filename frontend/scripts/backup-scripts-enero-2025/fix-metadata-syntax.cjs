const fs = require('fs');
const path = require('path');

/**
 * Script para corregir errores de sintaxis en metadata
 * Problema: línea "levels:" fuera del objeto metadata
 */

function findAllJsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules' && file !== 'dist') {
        findAllJsxFiles(filePath, fileList);
      }
    } else if (file.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function fixMetadataSyntax(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  // Patrón 1: Buscar metadata con línea levels fuera del objeto
  // Ejemplo: }  \n\nlevels: ['ESO'],};
  const pattern1 = /(\s+\w+:\s*[^\n]+)\s*\n\s*\nlevels:\s*(\[[^\]]+\])\s*,?\s*};/g;
  
  if (pattern1.test(content)) {
    content = content.replace(pattern1, (match, lastProp, levelsArray) => {
      return `${lastProp},\n  levels: ${levelsArray}\n};`;
    });
    hasChanges = true;
  }
  
  // Patrón 2: Buscar otras variaciones
  const pattern2 = /(\s+\w+:\s*[^\n]+)\s*\n\s*levels:\s*(\[[^\]]+\])\s*,?\s*};/g;
  
  content = content.replace(pattern2, (match, lastProp, levelsArray) => {
    hasChanges = true;
    return `${lastProp},\n  levels: ${levelsArray}\n};`;
  });
  
  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${path.relative(process.cwd(), filePath)}`);
    return true;
  }
  
  return false;
}

function main() {
  console.log('🔍 Buscando errores de sintaxis en metadata...\n');
  
  const srcDir = path.join(__dirname, '../src');
  const jsxFiles = findAllJsxFiles(srcDir);
  
  console.log(`📁 Encontrados ${jsxFiles.length} archivos .jsx\n`);
  console.log('🔧 Corrigiendo errores de sintaxis...\n');
  
  let fixedCount = 0;
  
  jsxFiles.forEach(file => {
    if (fixMetadataSyntax(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n✨ Proceso completado!`);
  console.log(`📊 Archivos corregidos: ${fixedCount} de ${jsxFiles.length}`);
  
  if (fixedCount === 0) {
    console.log('✅ No se encontraron errores de sintaxis!');
  }
}

main();
