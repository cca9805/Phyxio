/**
 * Script para generar automáticamente la lista completa de temas con sus niveles educativos
 * Lee todos los archivos teoria.jsx y extrae su metadata
 */

const fs = require('fs');
const path = require('path');

/**
 * Extrae metadata de un archivo teoria.jsx
 */
function extractMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extraer educationLevel
    const levelMatch = content.match(/educationLevel:\s*['"](\w+)['"]/);
    const educationLevel = levelMatch ? levelMatch[1] : 'BACHILLERATO';
    
    // Extraer título (buscar en metadata o en el componente)
    let titulo = '';
    const metadataMatch = content.match(/const\s+metadata\s*=\s*{[^}]*titulo:\s*['"]([^'"]+)['"]/s);
    if (metadataMatch) {
      titulo = metadataMatch[1];
    } else {
      // Intentar extraer del nombre del componente o breadcrumb
      const titleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
      if (titleMatch) {
        titulo = titleMatch[1].trim();
      }
    }
    
    // Extraer categoría del path
    const relativePath = filePath
      .replace(/\\/g, '/')
      .split('/src/data/')[1]
      .replace('/teoria.jsx', '');
    
    const categoria = relativePath.split('/')[0];
    
    return {
      path: relativePath,
      titulo: titulo || relativePath.split('/').pop().replace(/_/g, ' '),
      categoria: categoria,
      educationLevel: educationLevel
    };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Busca todos los archivos teoria.jsx recursivamente
 */
function findTeoriaFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findTeoriaFiles(fullPath, files);
    } else if (item === 'teoria.jsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

/**
 * Genera el código JavaScript para el array de temas
 */
function generateThemesArray(themes) {
  const byLevel = {
    ESO: [],
    BACHILLERATO: [],
    UNIVERSIDAD: []
  };
  
  // Agrupar por nivel
  themes.forEach(theme => {
    if (byLevel[theme.educationLevel]) {
      byLevel[theme.educationLevel].push(theme);
    }
  });
  
  // Ordenar por categoría y path
  Object.keys(byLevel).forEach(level => {
    byLevel[level].sort((a, b) => {
      if (a.categoria !== b.categoria) {
        return a.categoria.localeCompare(b.categoria);
      }
      return a.path.localeCompare(b.path);
    });
  });
  
  let output = '// Lista completa de temas generada automáticamente\n';
  output += '// Total: ' + themes.length + ' temas\n';
  output += 'const allThemesMetadata = [\n';
  
  // Generar código para cada nivel
  ['ESO', 'BACHILLERATO', 'UNIVERSIDAD'].forEach(level => {
    const levelThemes = byLevel[level];
    if (levelThemes.length === 0) return;
    
    output += `  // ========== ${level} (${levelThemes.length} temas) ==========\n`;
    
    levelThemes.forEach(theme => {
      const titulo = theme.titulo.replace(/'/g, "\\'");
      output += `  { path: '${theme.path}', titulo: '${titulo}', categoria: '${theme.categoria}', educationLevel: '${theme.educationLevel}' },\n`;
    });
    output += '\n';
  });
  
  output += '];\n';
  
  return output;
}

/**
 * Función principal
 */
function generateEducationThemes() {
  console.log('🔍 Buscando archivos teoria.jsx...\n');
  
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  const teoriaFiles = findTeoriaFiles(dataDir);
  
  console.log(`📂 Encontrados ${teoriaFiles.length} archivos\n`);
  
  console.log('📖 Extrayendo metadata...\n');
  const themes = [];
  
  for (const file of teoriaFiles) {
    const metadata = extractMetadata(file);
    if (metadata) {
      themes.push(metadata);
    }
  }
  
  console.log(`✅ Procesados ${themes.length} temas\n`);
  
  // Generar estadísticas
  const stats = {
    ESO: themes.filter(t => t.educationLevel === 'ESO').length,
    BACHILLERATO: themes.filter(t => t.educationLevel === 'BACHILLERATO').length,
    UNIVERSIDAD: themes.filter(t => t.educationLevel === 'UNIVERSIDAD').length
  };
  
  console.log('📊 Distribución por nivel:');
  console.log(`  🟢 ESO:           ${stats.ESO} temas`);
  console.log(`  🔵 BACHILLERATO:  ${stats.BACHILLERATO} temas`);
  console.log(`  🟣 UNIVERSIDAD:   ${stats.UNIVERSIDAD} temas`);
  console.log();
  
  // Generar código
  const code = generateThemesArray(themes);
  
  // Guardar en archivo
  const outputPath = path.join(__dirname, 'education-themes-generated.js');
  fs.writeFileSync(outputPath, code, 'utf-8');
  
  console.log(`✅ Archivo generado: ${outputPath}\n`);
  console.log('💡 Copia el contenido del archivo y reemplaza el array allThemesMetadata en EducationLevelView.jsx\n');
}

// Ejecutar
generateEducationThemes();
