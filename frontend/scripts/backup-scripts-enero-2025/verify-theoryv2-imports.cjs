const fs = require('fs');
const path = require('path');

/**
 * Script para verificar que todas las rutas de importación de TheoryV2 sean correctas
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

// Función para verificar las importaciones en un archivo
function verifyImportsInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Buscar líneas de importación de TheoryV2
  const importRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+TheoryV2(?:\.jsx)?)['"]/g;
  
  const matches = [...content.matchAll(importRegex)];
  const issues = [];
  
  matches.forEach(match => {
    const oldPath = match[2];
    
    // Calcular la ruta correcta
    const theoryV2Path = path.join(__dirname, '../src/components/TheoryV2.jsx');
    const correctPath = getRelativePath(filePath, theoryV2Path);
    
    // Remover la extensión .jsx si está presente
    const correctPathWithoutExt = correctPath.replace(/\.jsx$/, '');
    const oldPathWithoutExt = oldPath.replace(/\.jsx$/, '');
    
    // Verificar si la ruta es correcta
    if (oldPathWithoutExt !== correctPathWithoutExt) {
      issues.push({
        file: path.relative(process.cwd(), filePath),
        current: oldPath,
        expected: correctPathWithoutExt,
        hasExtension: oldPath.endsWith('.jsx')
      });
    } else if (oldPath.endsWith('.jsx')) {
      issues.push({
        file: path.relative(process.cwd(), filePath),
        current: oldPath,
        expected: correctPathWithoutExt,
        hasExtension: true,
        pathCorrect: true
      });
    }
  });
  
  return issues;
}

// Función principal
function main() {
  console.log('🔍 Verificando rutas de importación de TheoryV2...\n');
  
  const srcDir = path.join(__dirname, '../src');
  const teoriaFiles = findTeoriaFiles(srcDir);
  
  console.log(`📁 Encontrados ${teoriaFiles.length} archivos teoria.jsx\n`);
  
  let totalIssues = 0;
  let filesWithIssues = 0;
  const issuesByType = {
    wrongPath: 0,
    hasExtension: 0
  };
  
  teoriaFiles.forEach(file => {
    const issues = verifyImportsInFile(file);
    if (issues.length > 0) {
      filesWithIssues++;
      issues.forEach(issue => {
        totalIssues++;
        
        if (issue.pathCorrect && issue.hasExtension) {
          issuesByType.hasExtension++;
          console.log(`⚠️  ${issue.file}`);
          console.log(`   Tiene extensión .jsx: ${issue.current}`);
          console.log(`   Debería ser: ${issue.expected}\n`);
        } else {
          issuesByType.wrongPath++;
          console.log(`❌ ${issue.file}`);
          console.log(`   Ruta actual: ${issue.current}`);
          console.log(`   Ruta correcta: ${issue.expected}`);
          if (issue.hasExtension) {
            console.log(`   ⚠️  También tiene extensión .jsx`);
          }
          console.log();
        }
      });
    }
  });
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMEN DE VERIFICACIÓN\n');
  console.log(`Total de archivos analizados: ${teoriaFiles.length}`);
  console.log(`Archivos con problemas: ${filesWithIssues}`);
  console.log(`Total de problemas encontrados: ${totalIssues}`);
  console.log(`  - Rutas incorrectas: ${issuesByType.wrongPath}`);
  console.log(`  - Con extensión .jsx: ${issuesByType.hasExtension}`);
  
  if (totalIssues === 0) {
    console.log('\n✅ ¡Todas las rutas están correctas!');
  } else {
    console.log('\n⚠️  Se encontraron problemas que necesitan corrección.');
    console.log('💡 Ejecuta: node frontend/scripts/fix-theoryv2-imports.cjs');
  }
}

// Ejecutar
main();
