const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/EducationLevelView.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Buscar el patrón desde el comentario "// Filtrar temas" hasta el cierre "];      // Filtrar temas"
const startPattern = /\/\/ Filtrar temas por nivel educativo y agrupar por categoría\s+\{[^}]*path:/;
const endPattern = /\},\s+\];\s+\/\/ Filtrar temas por nivel educativo/;

const startMatch = content.match(startPattern);
const endMatch = content.match(endPattern);

if (startMatch && endMatch) {
  const startIndex = startMatch.index + startMatch[0].indexOf('{');
  const endIndex = endMatch.index + endMatch[0].length - '// Filtrar temas por nivel educativo'.length - 10;
  
  console.log('Encontrado bloque a eliminar desde posición', startIndex, 'hasta', endIndex);
  
  const before = content.substring(0, startIndex);
  const after = content.substring(endIndex);
  
  content = before + after;
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(' Archivo limpiado exitosamente');
} else {
  console.log(' No se encontró el patrón completo');
  if (!startMatch) console.log('  No se encontró el inicio');
  if (!endMatch) console.log('  No se encontró el final');
}
