const fs = require('fs');
const path = require('path');

/**
 * Script para corregir el orden de las importaciones (React primero)
 */

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

function fixImportOrder(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Patrón para encontrar importaciones mal ordenadas
  // (TheoryV2 antes de React)
  const pattern = /(import\s+{[^}]+}\s+from\s+['"][^'"]*TheoryV2[^'"]*['"];?\s*\n+)(import\s+React\s+from\s+['"]react['"];?\s*\n)/;
  
  if (pattern.test(content)) {
    // Intercambiar el orden
    content = content.replace(pattern, '$2$1');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${path.relative(process.cwd(), filePath)}`);
    return true;
  }
  
  return false;
}

function main() {
  console.log('🔍 Corrigiendo orden de importaciones...\n');
  
  const srcDir = path.join(__dirname, '../src');
  const teoriaFiles = findTeoriaFiles(srcDir);
  
  let fixedCount = 0;
  
  teoriaFiles.forEach(file => {
    if (fixImportOrder(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\n✨ Proceso completado!`);
  console.log(`📊 Archivos corregidos: ${fixedCount} de ${teoriaFiles.length}`);
  
  if (fixedCount === 0) {
    console.log('✅ Todas las importaciones están en el orden correcto!');
  }
}

main();
