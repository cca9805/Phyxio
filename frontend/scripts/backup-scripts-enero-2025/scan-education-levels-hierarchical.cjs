const fs = require('fs');
const path = require('path');

const hierarchy = {
  ESO: { categories: {} },
  BACHILLERATO: { categories: {} },
  UNIVERSIDAD: { categories: {} }
};

const dataDir = path.join(__dirname, '../src/data');

function scanDirectory(dir, currentPath = '') {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      scanDirectory(fullPath, currentPath ? currentPath + '/' + item : item);
    } else if (item === 'teoria.jsx') {
      const content = fs.readFileSync(fullPath, 'utf-8');
      
      const titleMatch = content.match(/titulo:\s*["']([^"']+)["']/);
      const levelMatch = content.match(/educationLevel:\s*["']([^"']+)["']/);
      const categoryMatch = content.match(/categoria:\s*["']([^"']+)["']/);
      const iconMatch = content.match(/icono:\s*["']([^"']+)["']/);
      const temaMatch = content.match(/tema:\s*["']([^"']+)["']/);
      const subtemaMatch = content.match(/subtema:\s*["']([^"']+)["']/);
      
      if (titleMatch && levelMatch && categoryMatch) {
        const level = levelMatch[1];
        const category = categoryMatch[1];
        const titulo = titleMatch[1];
        const icono = iconMatch ? iconMatch[1] : (subtemaMatch ? subtemaMatch[1] : (temaMatch ? temaMatch[1] : '📚'));
        
        if (hierarchy[level]) {
          if (!hierarchy[level].categories[category]) {
            hierarchy[level].categories[category] = {
              titulo: category.charAt(0).toUpperCase() + category.slice(1),
              subcategories: {},
              temas: []
            };
          }
          
          // Analizar el path para crear la jerarquía
          // Ejemplo: termodinamica/02_magnitudes_termicas/temperatura
          const pathParts = currentPath.split('/');
          
          // pathParts[0] = categoria (termodinamica)
          // pathParts[1] = subcategoria (02_magnitudes_termicas) si existe
          // pathParts[2+] = sub-subcategorias o tema final
          
          if (pathParts.length > 2) {
            // Hay subcategorías
            const subcatKey = pathParts[1];
            
            if (!hierarchy[level].categories[category].subcategories[subcatKey]) {
              // Quitar número inicial y guiones bajos, luego capitalizar cada palabra
              const cleanTitle = subcatKey
                .replace(/^\d+_/, '')  // Quitar número inicial
                .replace(/_/g, ' ')     // Reemplazar _ por espacios
                .split(' ')             // Dividir en palabras
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))  // Capitalizar cada palabra
                .join(' ');             // Unir de nuevo
              
              hierarchy[level].categories[category].subcategories[subcatKey] = {
                titulo: cleanTitle,
                temas: []
              };
            }
            
            hierarchy[level].categories[category].subcategories[subcatKey].temas.push({
              path: currentPath,
              titulo: titulo,
              icono: icono
            });
          } else {
            // Es un tema directo de la categoría (sin subcategoría)
            hierarchy[level].categories[category].temas.push({
              path: currentPath,
              titulo: titulo,
              icono: icono
            });
          }
        }
      }
    }
  }
}

scanDirectory(dataDir);

console.log('\n📊 Resultado:');
for (const level in hierarchy) {
  const cats = hierarchy[level].categories;
  let totalTemas = 0;
  let totalSubcats = 0;
  
  for (const catKey in cats) {
    const cat = cats[catKey];
    totalTemas += cat.temas.length;
    totalSubcats += Object.keys(cat.subcategories).length;
    
    for (const subcatKey in cat.subcategories) {
      totalTemas += cat.subcategories[subcatKey].temas.length;
    }
  }
  
  console.log(level + ': ' + totalTemas + ' temas en ' + Object.keys(cats).length + ' categorías, ' + totalSubcats + ' subcategorías');
}

fs.writeFileSync('education-hierarchy.json', JSON.stringify(hierarchy, null, 2), 'utf-8');
console.log('\n✅ Guardado en education-hierarchy.json');
