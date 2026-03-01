const fs = require('fs');
const path = require('path');

/**
 * Construye la jerarquía de educación a partir de todos los archivos teoria.jsx
 * Lee el metadata.educationLevel de cada archivo y organiza por niveles
 */
function buildEducationHierarchy() {
  const hierarchy = {
    ESO: { categories: {} },
    BACHILLERATO: { categories: {} },
    UNIVERSIDAD: { categories: {} }
  };

  // Directorio raíz de datos
  const dataDir = path.join(__dirname, '../src/data');

  /**
   * Escanea recursivamente buscando archivos teoria.jsx
   */
  function scanDirectory(dir, relativePath = '') {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        const newRelativePath = relativePath ? relativePath + '/' + item : item;
        scanDirectory(fullPath, newRelativePath);
      } else if (item === 'teoria.jsx') {
        // Leer contenido del archivo
        const content = fs.readFileSync(fullPath, 'utf-8');

        // Extraer metadata
        const titleMatch = content.match(/(?:titulo|title):\s*["']([^"']+)["']/);
        const levelMatch = content.match(/educationLevel:\s*["']([^"']+)["']/);
        const iconMatch = content.match(/(?:icono|icon):\s*["']([^"']+)["']/);

        if (titleMatch && levelMatch) {
          const level = levelMatch[1];
          const titulo = titleMatch[1];
          const icono = iconMatch ? iconMatch[1] : '📚';

          // Extraer categoría del path (primera parte)
          const pathParts = relativePath.split('/');
          const category = pathParts[0];

          // Verificar que el nivel existe
          if (hierarchy[level]) {
            // Crear categoría si no existe
            if (!hierarchy[level].categories[category]) {
              hierarchy[level].categories[category] = {
                titulo: category.charAt(0).toUpperCase() + category.slice(1),
                subcategories: {},
                temas: []
              };
            }

            // Navegar por todos los niveles de profundidad
            if (pathParts.length > 1) {
              // Tiene al menos una subcategoría
              let currentLevel = hierarchy[level].categories[category].subcategories;
              
              // Recorrer todos los niveles intermedios (excepto el último que es el tema)
              for (let i = 1; i < pathParts.length; i++) {
                const subcatKey = pathParts[i];
                
                // Si es el último elemento, es el tema final
                if (i === pathParts.length - 1) {
                  // Buscar en el nivel actual si ya existe esta subcategoría
                  if (!currentLevel[subcatKey]) {
                    currentLevel[subcatKey] = {
                      titulo: subcatKey.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
                      subcategories: {},
                      temas: []
                    };
                  }
                  
                  // Agregar el tema
                  currentLevel[subcatKey].temas.push({
                    path: relativePath,
                    titulo: titulo,
                    icono: icono
                  });
                } else {
                  // Es un nivel intermedio, crear si no existe y moverse al siguiente nivel
                  if (!currentLevel[subcatKey]) {
                    currentLevel[subcatKey] = {
                      titulo: subcatKey.split('_').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
                      subcategories: {},
                      temas: []
                    };
                  }
                  
                  // Moverse al siguiente nivel
                  currentLevel = currentLevel[subcatKey].subcategories;
                }
              }
            } else {
              // Tema directo sin subcategoría
              hierarchy[level].categories[category].temas.push({
                path: relativePath,
                titulo: titulo,
                icono: icono
              });
            }
          }
        }
      }
    }
  }

  // Iniciar escaneo
  console.log('🔍 Escaneando archivos teoria.jsx...\n');
  scanDirectory(dataDir);

  // Función para contar temas recursivamente
  function countTemasRecursive(data) {
    let count = 0;
    if (data.temas && Array.isArray(data.temas)) {
      count += data.temas.length;
    }
    if (data.subcategories) {
      Object.values(data.subcategories).forEach(subcat => {
        count += countTemasRecursive(subcat);
      });
    }
    return count;
  }

  // Mostrar resultados
  console.log('📊 Jerarquía extraída:\n');
  for (const level in hierarchy) {
    const categories = hierarchy[level].categories;
    const totalTemas = Object.values(categories).reduce((sum, cat) => {
      return sum + countTemasRecursive(cat);
    }, 0);
    const numCats = Object.keys(categories).length;
    
    console.log(`  ${level}: ${totalTemas} temas en ${numCats} categorías`);

    for (const catKey in categories) {
      const cat = categories[catKey];
      const catTotal = countTemasRecursive(cat);
      console.log(`    - ${catKey}: ${catTotal} temas`);
    }
  }

  // Guardar JSON
  const jsonPath = path.join(__dirname, 'education-hierarchy.json');
  fs.writeFileSync(jsonPath, JSON.stringify(hierarchy, null, 2), 'utf-8');
  console.log('\n✅ Jerarquía guardada en: education-hierarchy.json');

  // Guardar como módulo JS
  const jsPath = path.join(__dirname, 'education-hierarchy-from-metadata.js');
  const jsContent = `export const educationHierarchy = ${JSON.stringify(hierarchy, null, 2)};\n`;
  fs.writeFileSync(jsPath, jsContent, 'utf-8');
  console.log('✅ Módulo JS guardado en: education-hierarchy-from-metadata.js\n');
}

console.log('DEPRECATED: build-education-hierarchy.cjs — education hierarchy generation has been deprecated.');
console.log('If you need to recover the original script, check repository history.');
process.exit(0);
