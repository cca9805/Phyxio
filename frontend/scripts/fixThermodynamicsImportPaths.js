import fs from 'fs';
import path from 'path';

// Función para calcular la ruta relativa correcta basada en la profundidad del directorio
function calculateCorrectPath(filePath, targetFile) {
  // Contar los niveles de profundidad desde src/
  const pathParts = filePath.split('/');
  const srcIndex = pathParts.indexOf('src');
  const levelsFromSrc = pathParts.length - srcIndex - 2; // -2 porque no contamos 'src' y el archivo
  
  // Crear la ruta relativa correcta
  const backLevels = '../'.repeat(levelsFromSrc);
  
  if (targetFile === 'formatNumber') {
    return `${backLevels}utils/formatNumber`;
  } else if (targetFile === 'TheoryV2') {
    return `${backLevels}components/TheoryV2.jsx`;
  }
  
  return null;
}

// Función para corregir las importaciones en un archivo
function fixImportsInFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let updatedContent = content;
    let hasChanges = false;
    
    // Corregir importación de formatNumber
    const formatNumberRegex = /import\s*{\s*formatNumber\s*}\s*from\s*['"]([^'"]+)['"]/;
    const formatNumberMatch = content.match(formatNumberRegex);
    
    if (formatNumberMatch) {
      const correctPath = calculateCorrectPath(filePath, 'formatNumber');
      const currentPath = formatNumberMatch[1];
      
      if (currentPath !== correctPath) {
        updatedContent = updatedContent.replace(
          formatNumberRegex,
          `import { formatNumber } from '${correctPath}'`
        );
        hasChanges = true;
        console.log(`✅ Fixed formatNumber import in ${filePath}`);
        console.log(`   From: ${currentPath}`);
        console.log(`   To:   ${correctPath}`);
      }
    }
    
    // Corregir importación de TheoryV2
    const theoryRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+TheoryV2\.jsx)['"]/;
    const theoryMatch = content.match(theoryRegex);
    
    if (theoryMatch) {
      const correctPath = calculateCorrectPath(filePath, 'TheoryV2');
      const currentPath = theoryMatch[2];
      const imports = theoryMatch[1];
      
      if (currentPath !== correctPath) {
        updatedContent = updatedContent.replace(
          theoryRegex,
          `import { ${imports} } from '${correctPath}'`
        );
        hasChanges = true;
        console.log(`✅ Fixed TheoryV2 import in ${filePath}`);
        console.log(`   From: ${currentPath}`);
        console.log(`   To:   ${correctPath}`);
      }
    }
    
    // Escribir el archivo actualizado si hay cambios
    if (hasChanges) {
      fs.writeFileSync(filePath, updatedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Función para recorrer recursivamente los directorios
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let totalFixed = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      totalFixed += processDirectory(fullPath);
    } else if (item === 'definitions.js' || item === 'teoria.jsx') {
      if (fixImportsInFile(fullPath)) {
        totalFixed++;
      }
    }
  }
  
  return totalFixed;
}

// Ejecutar el script
console.log('🔧 Iniciando corrección de rutas de importación en termodinámica...\n');

const thermodynamicsPath = 'src/data/termodinamica';
const totalFixed = processDirectory(thermodynamicsPath);

console.log(`\n✅ Corrección completada!`);
console.log(`📊 Total de archivos corregidos: ${totalFixed}`);
console.log('\n🎯 Todas las rutas de importación han sido verificadas y corregidas.');