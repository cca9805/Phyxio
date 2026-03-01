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
        // Usar icono si existe, sino usar subtema, sino tema, sino vaco
        const icono = iconMatch ? iconMatch[1] : (subtemaMatch ? subtemaMatch[1] : (temaMatch ? temaMatch[1] : ''));
        
        if (hierarchy[level]) {
          if (!hierarchy[level].categories[category]) {
            hierarchy[level].categories[category] = {
              titulo: category.charAt(0).toUpperCase() + category.slice(1),
              temas: []
            };
          }
          
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

scanDirectory(dataDir);

console.log('\n Resultado:');
for (const level in hierarchy) {
  const cats = hierarchy[level].categories;
  const total = Object.values(cats).reduce((s, c) => s + c.temas.length, 0);
  console.log(level + ': ' + total + ' temas en ' + Object.keys(cats).length + ' categoras');
}

fs.writeFileSync('education-hierarchy.json', JSON.stringify(hierarchy, null, 2));
console.log('\n Guardado en education-hierarchy.json');
