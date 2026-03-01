const fs = require('fs');
const path = require('path');

/**
 * Script para eliminar comas dobles en archivos JSX
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

function fixDoubleCommas(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let hasChanges = false;
  
  // Patrón 1: Buscar y reemplazar comas dobles sin espacios
  if (content.includes(',,')) {
    content = content.replace(/,,/g, ',');
    hasChanges = true;
  }
  
  // Patrón 2: Buscar comas con espacio y coma (", ,")
  if (content.match(/,\s*,/)) {
    content = content.replace(/,\s*,/g, ',');
    hasChanges = true;
  }
  
  // Patrón 3: Buscar líneas que solo tienen una coma
  if (content.match(/,\s*\n\s*,/)) {
    content = content.replace(/,\s*\n\s*,/g, ',\n');
    hasChanges = true;
  }
  
  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${path.relative(process.cwd(), filePath)}`);
    return true;
  }
  
  return false;
}

function main() {
  console.log('🔍 Buscando comas dobles...\n');
  
  const srcDir = path.join(__dirname, '../src');
  const jsxFiles = findAllJsxFiles(srcDir);
  
  console.log(`📁 Encontrados ${jsxFiles.length} archivos .jsx\n`);
  console.log('🔧 Corrigiendo comas dobles...\n');
  
  let fixedCount = 0;
  
  jsxFiles.forEach(file => {
    if (fixDoubleCommas(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n✨ Proceso completado!`);
  console.log(`📊 Archivos corregidos: ${fixedCount} de ${jsxFiles.length}`);
  
  if (fixedCount === 0) {
    console.log('✅ No se encontraron comas dobles!');
  }
}

main();
