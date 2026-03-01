#!/usr/bin/env node

/**
 * Script para actualizar las fórmulas de Acústica con exercises y complementary
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ACUSTICA_PATH = path.join(__dirname, '../src/data/acustica');

console.log('🔧 Actualizando fórmulas de Acústica...\n');

// Archivos a actualizar
const archivos = [
  'fenomenos_acusticos',
  'resonancia',
  'efecto_doppler',
  'acustica_arquitectonica'
];

archivos.forEach(subtema => {
  const filePath = path.join(ACUSTICA_PATH, subtema, 'teoria.jsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  No existe: ${subtema}/teoria.jsx`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // 1. Cambiar la firma del componente para recibir exercises
  content = content.replace(
    /const (\w+)Teoria = \(\) => {/,
    'const $1Teoria = ({ exercises }) => {'
  );
  
  // 2. Reemplazar todos los calculatorId específicos por el groupId genérico
  const groupId = `${subtema}-grupo-1`;
  content = content.replace(
    /calculatorId="[^"]+"/g,
    `calculatorId="${groupId}"`
  );
  
  // 3. Añadir exercises={exercises} después de definitions={definitions}
  content = content.replace(
    /definitions={definitions}\s*\/>/g,
    'definitions={definitions}\n          exercises={exercises}\n        />'
  );
  
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ ${subtema}: Actualizado`);
});

console.log('\n✅ Archivos actualizados!');
console.log('📝 Nota: Los complementary deben añadirse manualmente según cada fórmula');
