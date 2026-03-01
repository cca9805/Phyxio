// Script de prueba para verificar que los archivos sean detectables
import { glob } from 'glob';

console.log('Buscando archivos definitions.js en acustica...');
const definitions = await glob('src/data/acustica/**/definitions.js');
console.log('Encontrados:', definitions.length);
definitions.forEach(f => console.log('  -', f));

console.log('\nBuscando archivos ejercicios.json en acustica...');
const ejercicios = await glob('src/data/acustica/**/ejercicios.json');
console.log('Encontrados:', ejercicios.length);
ejercicios.forEach(f => console.log('  -', f));

console.log('\n¿Psicoacustica está incluido?');
console.log('definitions:', definitions.some(f => f.includes('psicoacustica')));
console.log('ejercicios:', ejercicios.some(f => f.includes('psicoacustica')));
