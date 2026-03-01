// Script temporal para debug
const theoryJsxModules = import.meta.glob('/src/data/**/teoria.jsx');

console.log('=== DEBUG GLOB ===');
console.log('Total archivos teoria.jsx encontrados:', Object.keys(theoryJsxModules).length);
console.log('\nArchivos de Óptica:');
Object.keys(theoryJsxModules)
  .filter(k => k.includes('optica'))
  .forEach(k => console.log('  ✓', k));

console.log('\nTodos los archivos:');
Object.keys(theoryJsxModules).forEach(k => console.log('  -', k));

export { theoryJsxModules };
