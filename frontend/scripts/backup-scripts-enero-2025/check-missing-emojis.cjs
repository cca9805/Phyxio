const fs = require('fs');
const path = require('path');

const hierarchy = JSON.parse(fs.readFileSync('education-hierarchy.json', 'utf-8'));
const emojiMapContent = fs.readFileSync('../src/config/emoji-map.js', 'utf-8');

const iconos = new Set();
for(const level in hierarchy) {
  for(const cat in hierarchy[level].categories) {
    hierarchy[level].categories[cat].temas.forEach(t => {
      if(t.icono && !emojiMapContent.includes('"' + t.icono + '"')) {
        iconos.add(t.icono);
      }
    });
  }
}

console.log('Iconos faltantes en emoji-map:', iconos.size);
if(iconos.size > 0) {
  console.log('\nLista de iconos sin emoji:');
  Array.from(iconos).forEach(i => console.log('  -', i));
} else {
  console.log('✅ Todos los iconos tienen emoji asignado');
}
