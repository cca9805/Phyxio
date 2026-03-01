// Script para verificar que todos los temas estén presentes
const fs = require('fs');
const path = require('path');

// Leer education-themes-generated.js
const themesPath = path.join(__dirname, 'education-themes-generated.js');
const themesContent = fs.readFileSync(themesPath, 'utf-8');
const themesMatch = themesContent.match(/const allThemesMetadata = (\[[\s\S]*?\]);/);
if (!themesMatch) {
  console.error('❌ No se pudo parsear education-themes-generated.js');
  process.exit(1);
}

const allThemes = eval(themesMatch[1]);

// Contar por nivel
const byLevel = {
  ESO: allThemes.filter(t => t.educationLevel === 'ESO'),
  BACHILLERATO: allThemes.filter(t => t.educationLevel === 'BACHILLERATO'),
  UNIVERSIDAD: allThemes.filter(t => t.educationLevel === 'UNIVERSIDAD'),
  MASTER: allThemes.filter(t => t.educationLevel === 'MASTER')
};

console.log('\n📊 TEMAS EN education-themes-generated.js:');
console.log(`   Total: ${allThemes.length} temas`);
console.log(`   ESO: ${byLevel.ESO.length} temas`);
console.log(`   BACHILLERATO: ${byLevel.BACHILLERATO.length} temas`);
console.log(`   UNIVERSIDAD: ${byLevel.UNIVERSIDAD.length} temas`);
console.log(`   MASTER: ${byLevel.MASTER.length} temas`);

// Leer topics.generated.js y contar temas con btn
const topicsPath = path.join(__dirname, '../src/data/topics.generated.js');
const topicsContent = fs.readFileSync(topicsPath, 'utf-8');
const topicsLinks = [...topicsContent.matchAll(/"link":\s*"([^"]+)"/g)];
const topicsPaths = topicsLinks.map(m => m[1].replace(/^\//, ''));

console.log('\n📊 TEMAS EN topics.generated.js:');
console.log(`   Total: ${topicsPaths.length} temas con link`);

// Comparar
const themesPathsSet = new Set(allThemes.map(t => t.path));
const topicsPathsSet = new Set(topicsPaths);

const missingInThemes = topicsPaths.filter(p => !themesPathsSet.has(p));
const missingInTopics = allThemes.map(t => t.path).filter(p => !topicsPathsSet.has(p));

console.log('\n🔍 COMPARACIÓN:');
if (missingInThemes.length > 0) {
  console.log(`   ❌ Faltan ${missingInThemes.length} temas en education-themes:`);
  missingInThemes.slice(0, 10).forEach(p => console.log(`      - ${p}`));
  if (missingInThemes.length > 10) {
    console.log(`      ... y ${missingInThemes.length - 10} más`);
  }
} else {
  console.log('   ✅ Todos los temas de topics están en education-themes');
}

if (missingInTopics.length > 0) {
  console.log(`   ⚠️  ${missingInTopics.length} temas en education-themes no están en topics:`);
  missingInTopics.slice(0, 10).forEach(p => console.log(`      - ${p}`));
  if (missingInTopics.length > 10) {
    console.log(`      ... y ${missingInTopics.length - 10} más`);
  }
} else {
  console.log('   ✅ Todos los temas de education-themes están en topics');
}

// Leer educationLevels.generated.js
const levelsPath = path.join(__dirname, '../src/data/educationLevels.generated.js');
const levelsContent = fs.readFileSync(levelsPath, 'utf-8');

// Función recursiva para contar temas finales (con btn pero sin cards)
function countFinalThemes(obj, depth = 0) {
  let count = 0;
  
  if (typeof obj !== 'object' || obj === null) {
    return 0;
  }
  
  // Si tiene btn y NO tiene cards (o cards está vacío), es un tema final
  if (obj.btn && (!obj.cards || obj.cards.length === 0)) {
    count++;
  }
  
  // Recursivamente contar en cards
  if (obj.cards && Array.isArray(obj.cards)) {
    obj.cards.forEach(card => {
      count += countFinalThemes(card, depth + 1);
    });
  }
  
  // Para objetos, recorrer propiedades
  if (!Array.isArray(obj)) {
    Object.keys(obj).forEach(key => {
      if (key !== 'btn' && key !== 'cards') {
        count += countFinalThemes(obj[key], depth + 1);
      }
    });
  }
  
  return count;
}

// Parsear educationLevels (aproximado)
try {
  const levelsMatch = levelsContent.match(/export const educationLevels = (\{[\s\S]*?\n\});/);
  if (levelsMatch) {
    const levelsData = eval('(' + levelsMatch[1] + ')');
    
    console.log('\n📊 TEMAS EN educationLevels.generated.js:');
    const esoCount = countFinalThemes(levelsData.ESO || {});
    const bachCount = countFinalThemes(levelsData.BACHILLERATO || {});
    const uniCount = countFinalThemes(levelsData.UNIVERSIDAD || {});
    const masterCount = countFinalThemes(levelsData.MASTER || {});
    const total = esoCount + bachCount + uniCount + masterCount;
    
    console.log(`   Total: ${total} temas finales (sin children)`);
    console.log(`   ESO: ${esoCount} temas`);
    console.log(`   BACHILLERATO: ${bachCount} temas`);
    console.log(`   UNIVERSIDAD: ${uniCount} temas`);
    console.log(`   MASTER: ${masterCount} temas`);
    
    console.log('\n✅ RESULTADO:');
    if (total === allThemes.length) {
      console.log(`   ✅ PERFECTO: ${total} temas en ambos archivos`);
    } else {
      console.log(`   ⚠️  DISCREPANCIA: ${allThemes.length} en themes vs ${total} en levels`);
      console.log(`      Diferencia: ${Math.abs(allThemes.length - total)} temas`);
    }
  }
} catch (err) {
  console.log('\n⚠️  No se pudo parsear educationLevels.generated.js completamente');
  console.log('   Usando conteo aproximado de links...');
  const levelsLinks = [...levelsContent.matchAll(/"link":\s*"\/clasica[^"]+"/g)];
  console.log(`   Links encontrados: ${levelsLinks.length} (incluye categorías)`);
}

console.log('\n');
