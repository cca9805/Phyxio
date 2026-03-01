const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/EducationLevelView.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Buscar desde "{ path: 'acustica/psicoacustica'" hasta "];" antes de "// Filtrar temas por nivel educativo y categoría"
const startPattern = /\{\s*path:\s*['"]acustica\/psicoacustica['"]/;
const endPattern = /\];\s*\/\/\s*Filtrar\s*temas\s*por\s*nivel\s*educativo\s*y\s*categoría/;

const startMatch = content.match(startPattern);
const endMatch = content.match(endPattern);

if (startMatch && endMatch) {
  const startIndex = startMatch.index;
  const endIndex = endMatch.index;
  
  console.log('Encontrado bloque hardcodeado desde', startIndex, 'hasta', endIndex);
  
  // Eliminar todo el bloque
  const before = content.substring(0, startIndex);
  const after = content.substring(endIndex + 2); // +2 para saltar "];"
  
  content = before + '\n      // Configurar temas para mostrar\n      setTopics(filteredTemas.map(tema => ({\n        id: tema.path,\n        name: tema.titulo,\n        icon: tema.icono,\n        path: \`/clasica/\${tema.path}\`,\n        category: categoryId\n      })));\n    } catch (error) {\n      console.error(\'Error cargando temas:\', error);\n      setTopics([]);\n    } finally {\n      setLoading(false);\n    }\n  };\n\n  /**\n   * Obtiene icono para un tema (fallback)\n   */\n  const getIconForTopic = (topicPath) => {\n    return \'\'; // Icono por defecto\n  };\n\n  /**\n   * Maneja cambio de nivel educativo\n   */' + after.substring(after.indexOf('// Filtrar temas por nivel educativo y categoría'.length));
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(' Archivo limpiado');
} else {
  console.log(' No se encontró el patrón');
  if (!startMatch) console.log('  No se encontró el inicio');
  if (!endMatch) console.log('  No se encontró el final');
}
