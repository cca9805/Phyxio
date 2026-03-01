// Extraer emojis desde educationLevels.generated.js Y topics.generated.js
const fs = require('fs');
const path = require('path');

const emojiMap = {};

// Función para extraer emojis de un archivo
function extractEmojisFromFile(filePath, fileLabel) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /"tipo":\s*"([^"]+)"[\s\S]*?"icono":\s*"([^"]+)"/g;
    let match;
    let count = 0;
    
    while ((match = regex.exec(content)) !== null) {
      const [, tipo, icono] = match;
      // Solo emojis (Unicode), no variables
      if (icono && !icono.includes('Icon') && !icono.includes('m_')) {
        if (!emojiMap[tipo]) { // No sobrescribir si ya existe
          emojiMap[tipo] = icono;
          count++;
        }
      }
    }
    
    console.log(`📦 ${fileLabel}: ${count} emojis extraídos`);
  } catch (error) {
    console.warn(`⚠️  No se pudo leer ${fileLabel}:`, error.message);
  }
}

// Extraer desde ambos archivos
extractEmojisFromFile(
  path.join(__dirname, '../src/data/educationLevels.generated.js'),
  'educationLevels.generated.js'
);
extractEmojisFromFile(
  path.join(__dirname, '../src/data/topics.generated.js'),
  'topics.generated.js'
);

console.log(`📊 Total emojis únicos: ${Object.keys(emojiMap).length}`);

// Guardar como módulo JavaScript
const output = `// Mapa de emojis para topics
// Generado desde educationLevels.generated.js
// NO EDITAR MANUALMENTE - este archivo se regenera automáticamente

export const emojiMap = ${JSON.stringify(emojiMap, null, 2)};
`;

fs.writeFileSync(
  path.join(__dirname, '../src/config/emoji-map.js'),
  output,
  'utf8'
);

console.log('✅ Archivo emoji-map.js generado exitosamente');
console.log(`📊 Total de emojis: ${Object.keys(emojiMap).length}`);
