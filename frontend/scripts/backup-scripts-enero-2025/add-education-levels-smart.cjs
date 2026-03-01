/**
 * Script mejorado para agregar educationLevel basándose en análisis de contenido
 */

const fs = require('fs');
const path = require('path');

// Palabras clave que indican nivel educativo
const KEYWORDS = {
  ESO: [
    'basico', 'básico', 'fundamental', 'introduccion', 'introducción',
    'conceptos_fundamentales', 'concepto_basico', 'simple'
  ],
  BACHILLERATO: [
    'intermedio', 'avanzado_basico', 'aplicacion', 'aplicación'
  ],
  UNIVERSIDAD: [
    'avanzado', 'analitica', 'analítica', 'teorema', 'ecuacion_diferencial',
    'tensor', 'hamiltoniano', 'lagrangiano', 'cuantica', 'cuántica',
    'estadistica', 'estadística', 'relatividad', 'campos'
  ],
  MASTER: [
    'investigacion', 'investigación', 'simulacion', 'simulación',
    'monte_carlo', 'no_lineal', 'caos', 'fractal'
  ],
  PROFESIONAL: [
    'aplicacion_industrial', 'aplicación_industrial', 'diseño', 'diseno',
    'optimizacion', 'optimización'
  ]
};

// Mapeo por carpeta principal
const CATEGORY_LEVELS = {
  'acustica': 'BACHILLERATO',
  'electromagnetismo': 'BACHILLERATO',
  'fisica_plasmas': 'UNIVERSIDAD',
  'mecanica': 'BACHILLERATO',
  'mecanica_de_fluidos': 'BACHILLERATO',
  'optica': 'BACHILLERATO',
  'teoria_campos_clasicos': 'UNIVERSIDAD',
  'termodinamica': 'BACHILLERATO',
  'constants': 'BACHILLERATO'
};

// Mapeo específico por subcarpeta
const SPECIFIC_MAPPINGS = {
  // Termodinámica
  'termodinamica/01_conceptos_fundamentales': 'ESO',
  'termodinamica/02_temperatura_calor': 'ESO',
  'termodinamica/03_cambios_estado': 'ESO',
  'termodinamica/11_potenciales_termodinamicos': 'UNIVERSIDAD',
  'termodinamica/12_relaciones_maxwell': 'UNIVERSIDAD',
  'termodinamica/13_termodinamica_estadistica': 'UNIVERSIDAD',
  
  // Mecánica
  'mecanica/cinematica/movimiento_rectilineo': 'ESO',
  'mecanica/cinematica/caida_libre': 'ESO',
  'mecanica/dinamica/primera_ley': 'ESO',
  'mecanica/dinamica/segunda_ley': 'ESO',
  'mecanica/dinamica/tercera_ley': 'ESO',
  'mecanica/lagrangiano': 'UNIVERSIDAD',
  'mecanica/hamiltoniano': 'UNIVERSIDAD',
  
  // Electromagnetismo
  'electromagnetismo/electricidad/corriente': 'ESO',
  'electromagnetismo/electricidad/circuitos_basicos': 'ESO',
  
  // Óptica
  'optica/reflexion': 'ESO',
  'optica/refraccion': 'ESO',
  'optica/espejos': 'ESO'
};

/**
 * Determina el nivel basándose en palabras clave en el path
 */
function detectLevelFromKeywords(filePath) {
  const lowerPath = filePath.toLowerCase();
  
  // Verificar en orden de especificidad (más específico primero)
  for (const [level, keywords] of Object.entries(KEYWORDS)) {
    for (const keyword of keywords) {
      if (lowerPath.includes(keyword)) {
        return level;
      }
    }
  }
  
  return null;
}

/**
 * Determina el nivel educativo de forma inteligente
 */
function determineEducationLevel(filePath) {
  const parts = filePath.split(path.sep);
  const dataIndex = parts.findIndex(p => p === 'data');
  
  if (dataIndex === -1) return 'BACHILLERATO';
  
  // Obtener categoría y subcarpetas
  const category = parts[dataIndex + 1];
  const relativePath = parts.slice(dataIndex + 1, -1).join('/');
  
  // 1. Verificar mapeo específico
  if (SPECIFIC_MAPPINGS[relativePath]) {
    return SPECIFIC_MAPPINGS[relativePath];
  }
  
  // 2. Detectar por palabras clave
  const keywordLevel = detectLevelFromKeywords(relativePath);
  if (keywordLevel) {
    return keywordLevel;
  }
  
  // 3. Usar nivel por categoría
  return CATEGORY_LEVELS[category] || 'BACHILLERATO';
}

/**
 * Agrega el campo educationLevel al metadata
 */
function addEducationLevelToMetadata(content, level) {
  const metadataRegex = /export\s+const\s+metadata\s*=\s*\{([^}]+)\}/s;
  const match = content.match(metadataRegex);
  
  if (!match) {
    return null;
  }
  
  const metadataContent = match[1];
  
  // Verificar si ya tiene educationLevel
  if (metadataContent.includes('educationLevel')) {
    return null;
  }
  
  // Agregar el campo
  const newMetadataContent = metadataContent.trimEnd() + `,\n  educationLevel: '${level}'`;
  return content.replace(metadataRegex, `export const metadata = {${newMetadataContent}}`);
}

/**
 * Procesa un archivo
 */
function processFile(filePath, dryRun = false) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const level = determineEducationLevel(filePath);
    
    console.log(`📄 ${path.relative(process.cwd(), filePath)}`);
    console.log(`  📚 Nivel: ${level}`);
    
    const newContent = addEducationLevelToMetadata(content, level);
    
    if (!newContent) {
      console.log('  ℹ️  Ya tiene educationLevel o no tiene metadata');
      return { processed: false, level, skipped: true };
    }
    
    if (!dryRun) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log('  ✅ Actualizado');
    } else {
      console.log('  🔍 [DRY RUN] Se actualizaría');
    }
    
    return { processed: true, level };
  } catch (error) {
    console.error(`  ❌ Error: ${error.message}`);
    return { processed: false, error: error.message };
  }
}

/**
 * Busca archivos teoria.jsx recursivamente
 */
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

/**
 * Main
 */
function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const forceUpdate = args.includes('--force');
  
  console.log('\n🎓 Script Mejorado de Niveles Educativos\n');
  console.log(`Modo: ${dryRun ? '🔍 DRY RUN' : '✏️  ESCRITURA'}`);
  console.log(`Force: ${forceUpdate ? 'Sí' : 'No'}\n`);
  
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  
  if (!fs.existsSync(dataDir)) {
    console.error('❌ No se encontró src/data');
    process.exit(1);
  }
  
  const teoriaFiles = findTeoriaFiles(dataDir);
  console.log(`📂 Encontrados ${teoriaFiles.length} archivos teoria.jsx\n`);
  
  const stats = {
    total: 0,
    processed: 0,
    skipped: 0,
    errors: 0,
    byLevel: {
      ESO: 0,
      BACHILLERATO: 0,
      UNIVERSIDAD: 0,
      MASTER: 0,
      PROFESIONAL: 0
    }
  };
  
  for (const file of teoriaFiles) {
    stats.total++;
    const result = processFile(file, dryRun);
    
    if (result.processed) {
      stats.processed++;
      stats.byLevel[result.level]++;
    } else if (result.skipped) {
      stats.skipped++;
    } else if (result.error) {
      stats.errors++;
    }
    
    console.log();
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('📊 RESUMEN\n');
  console.log(`Total archivos:     ${stats.total}`);
  console.log(`✅ Procesados:      ${stats.processed}`);
  console.log(`⏭️  Omitidos:        ${stats.skipped}`);
  console.log(`❌ Errores:         ${stats.errors}`);
  console.log();
  console.log('📚 Por Nivel:');
  console.log(`  🟢 ESO:           ${stats.byLevel.ESO}`);
  console.log(`  🔵 BACHILLERATO:  ${stats.byLevel.BACHILLERATO}`);
  console.log(`  🟣 UNIVERSIDAD:   ${stats.byLevel.UNIVERSIDAD}`);
  console.log(`  🔴 MASTER:        ${stats.byLevel.MASTER}`);
  console.log(`  ⚙️  PROFESIONAL:   ${stats.byLevel.PROFESIONAL}`);
  console.log('='.repeat(60) + '\n');
  
  if (dryRun) {
    console.log('💡 Ejecuta sin --dry-run para aplicar\n');
  }
}

main();
