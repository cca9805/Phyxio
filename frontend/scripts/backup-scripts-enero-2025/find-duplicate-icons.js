#!/usr/bin/env node

/**
 * Script para encontrar iconos duplicados en el sidebar
 */

import { sidebarItems } from '../src/data/sidebarItems.generated.js';

function analyzeIcons(items, parentPath = '', depth = 0) {
  const results = [];
  
  items.forEach(item => {
    if (item.children && item.children.length > 0) {
      // Analizar los hijos de este item
      const childIcons = {};
      item.children.forEach(child => {
        if (child.icon) {
          if (!childIcons[child.icon]) {
            childIcons[child.icon] = [];
          }
          childIcons[child.icon].push(child.label);
        }
      });
      
      // Buscar duplicados
      Object.entries(childIcons).forEach(([icon, labels]) => {
        if (labels.length > 1) {
          results.push({
            parent: item.label,
            parentPath: item.link,
            icon,
            count: labels.length,
            items: labels
          });
        }
      });
      
      // Recursión
      results.push(...analyzeIcons(item.children, item.link, depth + 1));
    }
  });
  
  return results;
}

console.log('🔍 Buscando iconos duplicados en el sidebar...\n');

const duplicates = analyzeIcons(sidebarItems);

if (duplicates.length === 0) {
  console.log('✅ No se encontraron iconos duplicados');
} else {
  console.log(`⚠️  Se encontraron ${duplicates.length} grupos con iconos duplicados:\n`);
  
  duplicates.forEach((dup, index) => {
    console.log(`${index + 1}. En "${dup.parent}" (${dup.parentPath}):`);
    console.log(`   Icono ${dup.icon} repetido ${dup.count} veces:`);
    dup.items.forEach(item => {
      console.log(`   - ${item}`);
    });
    console.log('');
  });
}
