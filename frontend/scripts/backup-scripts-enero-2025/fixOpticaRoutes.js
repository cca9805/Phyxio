#!/usr/bin/env node

/**
 * Script para corregir automáticamente las rutas de Óptica en topics.generated.js
 * 
 * Problema: El script generateTopicsV3.js no detecta correctamente la anidación
 * de 3 niveles (clasica > optica > optica_geometrica/optica_fisica/fotometria)
 * 
 * Uso: node scripts/fixOpticaRoutes.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOPICS_FILE = path.join(__dirname, '../src/data/topics.generated.js');

console.log('🔧 Corrigiendo rutas de Óptica en topics.generated.js...\n');

// Leer el archivo
let content = fs.readFileSync(TOPICS_FILE, 'utf-8');
let corrections = 0;

// Definir las correcciones necesarias
const fixes = [
  // Óptica Geométrica
  { from: '"/clasica/optica_geometrica/reflexion_y_espejos"', to: '"/clasica/optica/optica_geometrica/reflexion_y_espejos"' },
  { from: '"/clasica/optica_geometrica/refraccion_y_lentes"', to: '"/clasica/optica/optica_geometrica/refraccion_y_lentes"' },
  { from: '"/clasica/optica_geometrica/instrumentos_opticos"', to: '"/clasica/optica/optica_geometrica/instrumentos_opticos"' },
  { from: '"/clasica/optica_geometrica/aberraciones_opticas"', to: '"/clasica/optica/optica_geometrica/aberraciones_opticas"' },
  
  // Óptica Física
  { from: '"/clasica/optica_fisica/interferencia"', to: '"/clasica/optica/optica_fisica/interferencia"' },
  { from: '"/clasica/optica_fisica/difraccion"', to: '"/clasica/optica/optica_fisica/difraccion"' },
  { from: '"/clasica/optica_fisica/polarizacion"', to: '"/clasica/optica/optica_fisica/polarizacion"' },
  { from: '"/clasica/optica_fisica/dispersion"', to: '"/clasica/optica/optica_fisica/dispersion"' },
  
  // Fotometría
  { from: '"/clasica/fotometria/flujo_luminoso"', to: '"/clasica/optica/fotometria/flujo_luminoso"' },
  { from: '"/clasica/fotometria/intensidad_luminosa"', to: '"/clasica/optica/fotometria/intensidad_luminosa"' },
  { from: '"/clasica/fotometria/iluminacion"', to: '"/clasica/optica/fotometria/iluminacion"' }
];

// Aplicar correcciones
fixes.forEach(fix => {
  if (content.includes(fix.from)) {
    content = content.replace(new RegExp(fix.from, 'g'), fix.to);
    corrections++;
    console.log(`✓ Corregido: ${fix.from} → ${fix.to}`);
  }
});

// Guardar el archivo
if (corrections > 0) {
  fs.writeFileSync(TOPICS_FILE, content, 'utf-8');
  console.log(`\n✅ ${corrections} rutas corregidas exitosamente`);
} else {
  console.log('\n✅ No se encontraron rutas que corregir (ya están correctas)');
}

console.log('\n📝 Nota: Ejecuta este script después de cada "npm run generate:topics"');
