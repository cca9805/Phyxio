// Encontrar el tema que falta
const fs = require('fs');
const path = require('path');

// Leer education-themes
const themesContent = fs.readFileSync(path.join(__dirname, 'education-themes-generated.js'), 'utf-8');
const themesMatch = themesContent.match(/const allThemesMetadata = (\[[\s\S]*?\]);/);
const allThemes = eval(themesMatch[1]);

// Leer educationLevels y extraer todos los links
const levelsContent = fs.readFileSync(path.join(__dirname, '../src/data/educationLevels.generated.js'), 'utf-8');
const levelsLinks = [...levelsContent.matchAll(/"link":\s*"\/([^"]+)"/g)].map(m => m[1]);

// Convertir a Sets
const themesPathsSet = new Set(allThemes.map(t => t.path));
const levelsPathsSet = new Set(levelsLinks);

// Encontrar diferencias
const missingInLevels = allThemes.filter(t => !levelsPathsSet.has(t.path));
const extraInLevels = levelsLinks.filter(l => !themesPathsSet.has(l));

console.log('\n🔍 ANÁLISIS DETALLADO:\n');

if (missingInLevels.length > 0) {
  console.log(`❌ FALTAN ${missingInLevels.length} tema(s) en educationLevels.generated.js:`);
  missingInLevels.forEach(t => {
    console.log(`   - ${t.path}`);
    console.log(`     Título: ${t.titulo}`);
    console.log(`     Nivel: ${t.educationLevel}`);
    console.log(`     Categoría: ${t.categoria}\n`);
  });
} else {
  console.log('✅ Todos los temas de education-themes están en educationLevels\n');
}

if (extraInLevels.length > 0) {
  console.log(`⚠️  HAY ${extraInLevels.length} link(s) extra en educationLevels (probablemente categorías):`);
  extraInLevels.slice(0, 5).forEach(l => console.log(`   - ${l}`));
  if (extraInLevels.length > 5) {
    console.log(`   ... y ${extraInLevels.length - 5} más\n`);
  }
}

// Análisis por nivel
const bachThemes = allThemes.filter(t => t.educationLevel === 'BACHILLERATO');
const bachLinks = levelsLinks.filter(l => {
  return bachThemes.some(t => t.path === l);
});

console.log(`\n📊 BACHILLERATO específicamente:`);
console.log(`   Temas en education-themes: ${bachThemes.length}`);
console.log(`   Links coincidentes en levels: ${bachLinks.length}`);
console.log(`   Diferencia: ${bachThemes.length - bachLinks.length}`);

console.log('\n');
