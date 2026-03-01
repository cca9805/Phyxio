#!/usr/bin/env node

import { sidebarItems } from '../src/data/sidebarItems.generated.js';

function findItem(items, label) {
  for (const item of items) {
    if (item.label === label) return item;
    if (item.children) {
      const found = findItem(item.children, label);
      if (found) return found;
    }
  }
  return null;
}

const tests = [
  'Equilibrio',
  'Ondas Sonoras',
  'Reflexion Y Espejos',
  'Cinemática',
  'Dinámica',
  'Estática',
  'Método Científico',
  'Introducción',
  'Termodinámica',
  'Ondas Mecánicas',
  'Colisiones',
  'Colisiones Elásticas',
  'Óptica',
  'Optica Geometrica',
  'Optica Fisica',
  'Fotometria',
  'Electricidad',
  'Magnetismo',
  'Acústica',
  'Mecánica de Fluidos'
];

console.log('🔍 Verificando iconos específicos:\n');
tests.forEach(label => {
  const item = findItem(sidebarItems, label);
  if (item) {
    console.log(`✅ ${label.padEnd(25)} : ${item.icon}`);
  } else {
    console.log(`❌ ${label.padEnd(25)} : NO ENCONTRADO`);
  }
});
