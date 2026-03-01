/**
 * Script para redistribuir niveles educativos según currículo español (LOMLOE)
 * 
 * Distribución según BOE y currículo oficial:
 * - ESO: Física y Química básica (conceptos fundamentales, fenómenos cotidianos)
 * - BACHILLERATO: Física más profunda (ecuaciones, análisis cuantitativo)
 * - UNIVERSIDAD: Física avanzada (cálculo, análisis tensorial, ecuaciones diferenciales)
 * - MASTER: Investigación y temas especializados
 */

const fs = require('fs');
const path = require('path');

// Mapeo preciso según currículo español LOMLOE
const CURRICULUM_MAPPING = {
  // ========== ESO (12-16 años) - Real Decreto 217/2022 ==========
  ESO: [
    // Mecánica básica (2º-3º ESO)
    'mecanica/cinematica/movimiento_rectilineo',
    'mecanica/cinematica/caida_libre',
    'mecanica/dinamica/fuerzas',
    'mecanica/dinamica/primera_ley',
    'mecanica/dinamica/segunda_ley',
    'mecanica/dinamica/tercera_ley',
    
    // Energía (3º-4º ESO)
    'mecanica/energia/conceptos',
    'mecanica/energia/cinetica',
    'mecanica/energia/potencial',
    'mecanica/energia/conservacion',
    
    // Termodinámica básica (2º-3º ESO)
    'termodinamica/01_conceptos_fundamentales',
    'termodinamica/02_temperatura_calor',
    'termodinamica/03_cambios_estado',
    
    // Electricidad doméstica (3º-4º ESO)
    'electromagnetismo/electricidad/corriente',
    'electromagnetismo/electricidad/resistencia',
    'electromagnetismo/electricidad/circuitos_basicos',
    
    // Óptica geométrica básica (2º-3º ESO)
    'optica/reflexion',
    'optica/refraccion',
    'optica/espejos',
    'optica/lentes_basicas',
    
    // Ondas y sonido básico (4º ESO)
    'acustica/ondas_sonoras',
    'acustica/propiedades_sonido'
  ],
  
  // ========== BACHILLERATO (16-18 años) - Real Decreto 243/2022 ==========
  BACHILLERATO: [
    // Mecánica completa (1º Bach - Física y Química)
    'mecanica/cinematica/circular',
    'mecanica/cinematica/mas',
    'mecanica/cinematica/tiro_parabolico',
    'mecanica/dinamica/rozamiento',
    'mecanica/dinamica/plano_inclinado',
    'mecanica/energia/trabajo',
    'mecanica/momento',
    'mecanica/colisiones',
    'mecanica/rotacion',
    'mecanica/gravitacion',
    
    // Termodinámica (1º Bach)
    'termodinamica/04_gases_ideales',
    'termodinamica/05_primer_principio',
    'termodinamica/06_segundo_principio',
    'termodinamica/07_entropia',
    'termodinamica/08_ciclos_termodinamicos',
    'termodinamica/09_maquinas_termicas',
    'termodinamica/10_procesos',
    
    // Electromagnetismo (2º Bach - Física)
    'electromagnetismo/electricidad/campos-electricos',
    'electromagnetismo/electricidad/capacidad',
    'electromagnetismo/electricidad/carga-fuerza',
    'electromagnetismo/electricidad/corriente-ohm',
    'electromagnetismo/electricidad/potencial',
    'electromagnetismo/electricidad/circuitos',
    'electromagnetismo/magnetismo/campos-fuerza',
    'electromagnetismo/magnetismo/fuentes-campo',
    'electromagnetismo/magnetismo/induccion',
    'electromagnetismo/maxwell',
    'electromagnetismo/ondas',
    
    // Óptica física (2º Bach)
    'optica/lentes',
    'optica/instrumentos',
    'optica/interferencia',
    'optica/difraccion',
    'optica/polarizacion',
    
    // Ondas (2º Bach)
    'acustica/efecto_doppler',
    'acustica/resonancia',
    'acustica/fenomenos_acusticos',
    'acustica/acustica_arquitectonica',
    'acustica/acustica_musical',
    'acustica/psicoacustica',
    
    // Mecánica de fluidos básica (2º Bach)
    'mecanica_de_fluidos/hidrostatica',
    'mecanica_de_fluidos/hidrodinamica',
    'mecanica_de_fluidos/bernoulli'
  ],
  
  // ========== UNIVERSIDAD (18-22 años) - Grado en Física/Ingeniería ==========
  UNIVERSIDAD: [
    // Mecánica analítica (2º-3º curso)
    'mecanica/lagrangiano',
    'mecanica/hamiltoniano',
    'mecanica/mecanica_analitica',
    'mecanica/tensor',
    
    // Termodinámica avanzada (2º-3º curso)
    'termodinamica/11_potenciales_termodinamicos',
    'termodinamica/12_relaciones_maxwell',
    'termodinamica/13_termodinamica_estadistica',
    
    // Electrodinámica clásica (3º curso)
    'electromagnetismo/ondas/avanzado',
    'teoria_campos_clasicos',
    
    // Óptica avanzada
    'optica/optica_cuantica',
    'optica/laser',
    
    // Mecánica de fluidos avanzada
    'mecanica_de_fluidos/viscosidad',
    'mecanica_de_fluidos/turbulencia',
    'mecanica_de_fluidos/navier_stokes',
    
    // Física de plasmas
    'fisica_plasmas',
    
    // Acústica avanzada
    'acustica/ultrasonido',
    
    // Electrónica
    'electromagnetismo/electronica'
  ]
};

/**
 * Obtiene el nivel educativo según el path
 */
function getEducationLevelFromCurriculum(filePath) {
  const relativePath = filePath
    .replace(/\\/g, '/')
    .split('/src/data/')[1]
    .replace('/teoria.jsx', '');
  
  // Buscar en el mapeo del currículo
  for (const [level, paths] of Object.entries(CURRICULUM_MAPPING)) {
    for (const curriculumPath of paths) {
      // Coincidencia exacta o parcial
      if (relativePath.includes(curriculumPath) || curriculumPath.includes(relativePath)) {
        return level;
      }
    }
  }
  
  // Reglas generales por categoría si no hay coincidencia exacta
  if (relativePath.includes('01_conceptos_fundamentales') || 
      relativePath.includes('02_temperatura') ||
      relativePath.includes('03_cambios')) {
    return 'ESO';
  }
  
  if (relativePath.includes('11_potenciales') ||
      relativePath.includes('12_relaciones') ||
      relativePath.includes('13_termodinamica_estadistica') ||
      relativePath.includes('lagrangiano') ||
      relativePath.includes('hamiltoniano') ||
      relativePath.includes('tensor') ||
      relativePath.includes('plasma') ||
      relativePath.includes('teoria_campos')) {
    return 'UNIVERSIDAD';
  }
  
  // Por defecto, BACHILLERATO (la mayoría del contenido)
  return 'BACHILLERATO';
}

/**
 * Actualiza el educationLevel en el archivo
 */
function updateEducationLevel(filePath, newLevel) {
  try {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Buscar y reemplazar educationLevel existente
    const educationLevelRegex = /educationLevel:\s*['"](\w+)['"]/;
    const match = content.match(educationLevelRegex);
    
    if (match) {
      const oldLevel = match[1];
      if (oldLevel !== newLevel) {
        content = content.replace(educationLevelRegex, `educationLevel: '${newLevel}'`);
        fs.writeFileSync(filePath, content, 'utf-8');
        return { updated: true, oldLevel, newLevel };
      }
      return { updated: false, oldLevel, newLevel };
    }
    
    return { updated: false, error: 'No educationLevel found' };
  } catch (error) {
    return { updated: false, error: error.message };
  }
}

/**
 * Procesa todos los archivos
 */
function redistributeLevels(dryRun = false) {
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  const teoriaFiles = [];
  
  // Buscar archivos recursivamente
  function findTeoriaFiles(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findTeoriaFiles(fullPath);
      } else if (item === 'teoria.jsx') {
        teoriaFiles.push(fullPath);
      }
    }
  }
  
  findTeoriaFiles(dataDir);
  
  console.log('\n🎓 Redistribución de Niveles Educativos (Currículo LOMLOE)\n');
  console.log(`Modo: ${dryRun ? '🔍 DRY RUN' : '✏️  ESCRITURA'}\n`);
  console.log(`📂 Encontrados ${teoriaFiles.length} archivos\n`);
  
  const stats = {
    total: teoriaFiles.length,
    updated: 0,
    unchanged: 0,
    errors: 0,
    byLevel: {
      ESO: { current: 0, changes: 0 },
      BACHILLERATO: { current: 0, changes: 0 },
      UNIVERSIDAD: { current: 0, changes: 0 }
    }
  };
  
  for (const file of teoriaFiles) {
    const newLevel = getEducationLevelFromCurriculum(file);
    const relativePath = path.relative(process.cwd(), file);
    
    console.log(`📄 ${relativePath}`);
    console.log(`  🎯 Nivel asignado: ${newLevel}`);
    
    if (!dryRun) {
      const result = updateEducationLevel(file, newLevel);
      if (result.updated) {
        console.log(`  ✅ Actualizado: ${result.oldLevel} → ${newLevel}`);
        stats.updated++;
        stats.byLevel[newLevel].changes++;
      } else if (result.error) {
        console.log(`  ❌ Error: ${result.error}`);
        stats.errors++;
      } else {
        console.log(`  ℹ️  Sin cambios (ya es ${newLevel})`);
        stats.unchanged++;
      }
    } else {
      console.log(`  🔍 [DRY RUN] Se actualizaría a ${newLevel}`);
    }
    
    stats.byLevel[newLevel].current++;
    console.log();
  }
  
  console.log('='.repeat(70));
  console.log('📊 RESUMEN DE REDISTRIBUCIÓN\n');
  console.log(`Total archivos:          ${stats.total}`);
  console.log(`✅ Actualizados:         ${stats.updated}`);
  console.log(`ℹ️  Sin cambios:          ${stats.unchanged}`);
  console.log(`❌ Errores:              ${stats.errors}`);
  console.log();
  console.log('📚 Distribución por Nivel (Currículo LOMLOE):');
  console.log(`  🟢 ESO:                ${stats.byLevel.ESO.current} temas ${stats.byLevel.ESO.changes > 0 ? `(+${stats.byLevel.ESO.changes} cambios)` : ''}`);
  console.log(`  🔵 BACHILLERATO:       ${stats.byLevel.BACHILLERATO.current} temas ${stats.byLevel.BACHILLERATO.changes > 0 ? `(+${stats.byLevel.BACHILLERATO.changes} cambios)` : ''}`);
  console.log(`  🟣 UNIVERSIDAD:        ${stats.byLevel.UNIVERSIDAD.current} temas ${stats.byLevel.UNIVERSIDAD.changes > 0 ? `(+${stats.byLevel.UNIVERSIDAD.changes} cambios)` : ''}`);
  console.log('='.repeat(70));
  
  if (dryRun) {
    console.log('\n💡 Ejecuta sin --dry-run para aplicar los cambios\n');
  } else {
    console.log('\n✅ Redistribución completada según currículo LOMLOE\n');
  }
}

// Ejecutar
const dryRun = process.argv.includes('--dry-run');
redistributeLevels(dryRun);
