#!/usr/bin/env node
// Genera topicMetadata.generated.json leyendo los archivos teoria.jsx
// Extrae campos básicos: titulo, levels, icono, descripcion

const fs = require('fs');
const path = require('path');

function findTeoriaFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTeoriaFiles(fullPath, files);
    } else if (item === 'teoria.jsx') {
      files.push(fullPath);
    }
  }
  return files;
}

function extractMetadata(content) {
  const metaMatch = content.match(/export\s+const\s+metadata\s*=\s*\{([\s\S]*?)\}\s*;/);
  const meta = {};
  if (!metaMatch) return null;
  const body = metaMatch[1];

  // titulo
  const tituloMatch = body.match(/titulo\s*:\s*['"]([\s\S]*?)['"]/);
  if (tituloMatch) meta.titulo = tituloMatch[1].trim();

  // descripcion
  const descMatch = body.match(/descripcion\s*:\s*['"]([\s\S]*?)['"]/);
  if (descMatch) meta.descripcion = descMatch[1].trim();

  // icono
  const iconMatch = body.match(/icono\s*:\s*['"]([\s\S]*?)['"]/);
  if (iconMatch) meta.icono = iconMatch[1].trim();

  // levels: array
  const levelsMatch = body.match(/levels\s*:\s*\[((?:.|\n)*?)\]/);
  if (levelsMatch) {
    const inside = levelsMatch[1];
    const items = inside.split(',').map(s => s.replace(/['"\s]/g, '').trim()).filter(Boolean);
    meta.levels = items;
  }

  return meta;
}

function main() {
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    console.error('src/data not found');
    process.exit(1);
  }

  const files = findTeoriaFiles(dataDir);
  const map = {};

  files.forEach(f => {
    try {
      const content = fs.readFileSync(f, 'utf8');
      const meta = extractMetadata(content);
      const relDir = path.relative(path.join(__dirname, '..', 'src', 'data'), path.dirname(f)).replace(/\\/g, '/');
      if (meta) {
        map[relDir] = meta;
      }
    } catch (err) {
      console.warn('Failed to read', f, err.message);
    }
  });

  const outPath = path.join(__dirname, '..', 'src', 'data', 'topicMetadata.generated.json');
  fs.writeFileSync(outPath, JSON.stringify(map, null, 2), 'utf8');
  console.log(`✅ topicMetadata.generated.json creado con ${Object.keys(map).length} entradas`);
}

main();
