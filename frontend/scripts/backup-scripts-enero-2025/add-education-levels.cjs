/**
 * Script para agregar el campo educationLevel a los metadatos de teoria.jsx
 * 
 * Este script analiza los archivos teoria.jsx y agrega el campo educationLevel
 * basándose en la categoría, tema y contenido del archivo.
 * 
 * Uso:
 *   node scripts/add-education-levels.js [--dry-run] [--category=categoria]
 * 
 * Opciones:
 *   --dry-run: Muestra los cambios sin aplicarlos
 *   --category: Procesa solo una categoría específica
 */

const fs = require('fs');
const path = require('path');

// Mapeo de categorías/temas a niveles educativos
const LEVEL_MAPPING = {
  // MECÁNICA
  mecanica: {
    // ESO - Conceptos básicos
    'cinematica/movimiento_rectilineo': 'ESO',
    'cinematica/caida_libre': 'ESO',
    'dinamica/fuerzas': 'ESO',
    'dinamica/primera_ley': 'ESO',
    'dinamica/segunda_ley': 'ESO',
    'dinamica/tercera_ley': 'ESO',
    'energia/conceptos': 'ESO',
    'energia/cinetica': 'ESO',
    'energia/potencial': 'ESO',
    
    // BACHILLERATO - Mecánica completa
    'cinematica/circular': 'BACHILLERATO',
    'cinematica/mas': 'BACHILLERATO',
    'cinematica/tiro_parabolico': 'BACHILLERATO',
    'dinamica/rozamiento': 'BACHILLERATO',
    'dinamica/plano_inclinado': 'BACHILLERATO',
    'energia/conservacion': 'BACHILLERATO',
    'energia/trabajo': 'BACHILLERATO',
    'momento': 'BACHILLERATO',
    'gravitacion': 'BACHILLERATO',
    'colisiones': 'BACHILLERATO',
    'rotacion': 'BACHILLERATO',
    
    // UNIVERSIDAD - Mecánica analítica
    'lagrangiano': 'UNIVERSIDAD',
    'hamiltoniano': 'UNIVERSIDAD',
    'mecanica_analitica': 'UNIVERSIDAD',
    'tensor': 'UNIVERSIDAD',
    
    // MASTER - Temas avanzados
    'caos': 'MASTER',
    'sistemas_no_lineales': 'MASTER',
    
    default: 'BACHILLERATO'
  },
  
  // TERMODINÁMICA
  termodinamica: {
    // ESO - Básico
    '01_conceptos_fundamentales': 'ESO',
    '02_temperatura_calor': 'ESO',
    '03_cambios_estado': 'ESO',
    
    // BACHILLERATO - Principios termodinámicos
    '04_gases': 'BACHILLERATO',
    '05_primer_principio': 'BACHILLERATO',
    '06_segundo_principio': 'BACHILLERATO',
    '07_entropia': 'BACHILLERATO',
    '08_ciclos': 'BACHILLERATO',
    '09_maquinas': 'BACHILLERATO',
    '10_procesos': 'BACHILLERATO',
    
    // UNIVERSIDAD - Termodinámica avanzada
    '11_potenciales': 'UNIVERSIDAD',
    '12_relaciones_maxwell': 'UNIVERSIDAD',
    '13_termodinamica_estadistica': 'UNIVERSIDAD',
    
    default: 'BACHILLERATO'
  },
  
  // ELECTROMAGNETISMO
  electromagnetismo: {
    // ESO - Electricidad básica
    'electricidad/corriente': 'ESO',
    'electricidad/circuitos_basicos': 'ESO',
    'electricidad/resistencia': 'ESO',
    
    // BACHILLERATO - Electricidad y Magnetismo
    'electricidad/campo': 'BACHILLERATO',
    'electricidad/potencial': 'BACHILLERATO',
    'electricidad/condensadores': 'BACHILLERATO',
    'electricidad/circuitos': 'BACHILLERATO',
    'magnetismo': 'BACHILLERATO',
    'induccion': 'BACHILLERATO',
    'maxwell': 'BACHILLERATO',
    'ondas/espectro': 'BACHILLERATO',
    'ondas/propagacion': 'BACHILLERATO',
    'electronica': 'BACHILLERATO',
    
    // UNIVERSIDAD - Electromagnetismo avanzado
    'ondas/avanzado': 'UNIVERSIDAD',
    'teoria_campos': 'UNIVERSIDAD',
    
    default: 'BACHILLERATO'
  },
  
  // ÓPTICA
  optica: {
    // ESO - Óptica básica
    'reflexion': 'ESO',
    'refraccion': 'ESO',
    'espejos': 'ESO',
    'lentes_basicas': 'ESO',
    
    // BACHILLERATO - Óptica geométrica y física
    'lentes': 'BACHILLERATO',
    'instrumentos': 'BACHILLERATO',
    'interferencia': 'BACHILLERATO',
    'difraccion': 'BACHILLERATO',
    'polarizacion': 'BACHILLERATO',
    
    // UNIVERSIDAD - Óptica avanzada
    'optica_cuantica': 'UNIVERSIDAD',
    'laser': 'UNIVERSIDAD',
    
    default: 'BACHILLERATO'
  },
  
  // ACÚSTICA
  acustica: {
    default: 'BACHILLERATO'
  },
  
  // MECÁNICA DE FLUIDOS
  mecanica_de_fluidos: {
    'hidrostatica': 'BACHILLERATO',
    'hidrodinamica': 'BACHILLERATO',
    'bernoulli': 'BACHILLERATO',
    'viscosidad': 'UNIVERSIDAD',
    'turbulencia': 'UNIVERSIDAD',
    default: 'BACHILLERATO'
  },
  
  // FÍSICA DE PLASMAS
  fisica_plasmas: {
    default: 'UNIVERSIDAD'
  },
  
  // TEORÍA DE CAMPOS CLÁSICOS
  teoria_campos_clasicos: {
    default: 'UNIVERSIDAD'
  },
  
  // CONSTANTES
  constants: {
    default: 'BACHILLERATO'
  }
};

/**
 * Determina el nivel educativo basado en la ruta del archivo
 */
function determineEducationLevel(filePath, category) {
  // Extraer la ruta relativa desde la categoría
  const parts = filePath.split(path.sep);
  const categoryIndex = parts.findIndex(p => p === category);
  
  if (categoryIndex === -1) {
    return 'BACHILLERATO'; // Default si no se encuentra la categoría
  }
  
  // Obtener el tema y subtema
  const themeParts = parts.slice(categoryIndex + 1, -1); // Excluir teoria.jsx
  const themeKey = themeParts.join('/');
  
  const categoryMapping = LEVEL_MAPPING[category];
  if (!categoryMapping) {
    return 'BACHILLERATO'; // Default para categorías no mapeadas
  }
  
  // Buscar coincidencias exactas o parciales
  if (categoryMapping[themeKey]) {
    return categoryMapping[themeKey];
  }
  
  // Buscar coincidencias parciales (por ejemplo, si themeKey empieza con una clave)
  for (const [key, level] of Object.entries(categoryMapping)) {
    if (key !== 'default' && themeKey.startsWith(key)) {
      return level;
    }
  }
  
  return categoryMapping.default || 'BACHILLERATO';
}

/**
 * Agrega el campo educationLevel al objeto metadata
 */
function addEducationLevelToMetadata(content, level) {
  // Buscar el objeto metadata
  const metadataRegex = /export\s+const\s+metadata\s*=\s*\{([^}]+)\}/s;
  const match = content.match(metadataRegex);
  
  if (!match) {
    console.warn('  ⚠️  No se encontró objeto metadata');
    return null;
  }
  
  const metadataContent = match[1];
  
  // Verificar si ya tiene educationLevel
  if (metadataContent.includes('educationLevel')) {
    console.log('  ℹ️  Ya tiene educationLevel');
    return null;
  }
  
  // Agregar el campo antes del último cierre
  const newMetadataContent = metadataContent.trimEnd() + `,\n  educationLevel: '${level}'`;
  const newContent = content.replace(metadataRegex, `export const metadata = {${newMetadataContent}}`);
  
  return newContent;
}

/**
 * Procesa un archivo teoria.jsx
 */
function processFile(filePath, dryRun = false) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extraer la categoría del path
    const parts = filePath.split(path.sep);
    const dataIndex = parts.findIndex(p => p === 'data');
    const category = parts[dataIndex + 1];
    
    const level = determineEducationLevel(filePath, category);
    console.log(`📄 ${path.relative(process.cwd(), filePath)}`);
    console.log(`  📚 Nivel: ${level}`);
    
    const newContent = addEducationLevelToMetadata(content, level);
    
    if (!newContent) {
      return { processed: false, level };
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
 * Busca todos los archivos teoria.jsx recursivamente
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
 * Función principal
 */
function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const categoryFilter = args.find(arg => arg.startsWith('--category='))?.split('=')[1];
  
  console.log('\n🎓 Script de Agregación de Niveles Educativos\n');
  console.log(`Modo: ${dryRun ? '🔍 DRY RUN (sin cambios)' : '✏️  ESCRITURA'}`);
  if (categoryFilter) {
    console.log(`Categoría: ${categoryFilter}`);
  }
  console.log();
  
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  
  if (!fs.existsSync(dataDir)) {
    console.error('❌ No se encontró el directorio src/data');
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
    // Filtrar por categoría si se especificó
    if (categoryFilter && !file.includes(path.sep + categoryFilter + path.sep)) {
      continue;
    }
    
    stats.total++;
    const result = processFile(file, dryRun);
    
    if (result.processed) {
      stats.processed++;
      stats.byLevel[result.level]++;
    } else if (result.error) {
      stats.errors++;
    } else {
      stats.skipped++;
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
    console.log('💡 Ejecuta sin --dry-run para aplicar los cambios\n');
  }
}

// Ejecutar
main();
