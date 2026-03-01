const fs = require('fs');
const path = require('path');

/**
 * Verifica que todos los archivos teoria.jsx tengan el campo educationLevel
 */
function verifyEducationLevels() {
  const dataDir = path.join(__dirname, '../src/data');
  const results = {
    total: 0,
    withLevel: 0,
    withoutLevel: [],
    invalidLevel: [],
    byLevel: {
      ESO: 0,
      BACHILLERATO: 0,
      UNIVERSIDAD: 0
    }
  };

  const validLevels = ['ESO', 'BACHILLERATO', 'UNIVERSIDAD'];

  function scanDirectory(dir, relativePath = '') {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        const newRelativePath = relativePath ? relativePath + '/' + item : item;
        scanDirectory(fullPath, newRelativePath);
      } else if (item === 'teoria.jsx') {
        results.total++;
        const content = fs.readFileSync(fullPath, 'utf-8');
        
        const levelMatch = content.match(/educationLevel:\s*["']([^"']+)["']/);
        
        if (levelMatch) {
          const level = levelMatch[1];
          
          if (validLevels.includes(level)) {
            results.withLevel++;
            results.byLevel[level]++;
          } else {
            results.invalidLevel.push({
              path: relativePath,
              level: level
            });
          }
        } else {
          results.withoutLevel.push(relativePath);
        }
      }
    }
  }

  console.log('🔍 Verificando campos educationLevel...\n');
  scanDirectory(dataDir);

  // Mostrar resultados
  console.log('📊 RESULTADOS:\n');
  console.log(`Total de archivos teoria.jsx: ${results.total}`);
  console.log(`Con educationLevel válido: ${results.withLevel} (${Math.round(results.withLevel/results.total*100)}%)`);
  console.log(`Sin educationLevel: ${results.withoutLevel.length}`);
  console.log(`Con nivel inválido: ${results.invalidLevel.length}\n`);

  console.log('📈 Distribución por nivel:');
  console.log(`  ESO: ${results.byLevel.ESO} temas`);
  console.log(`  BACHILLERATO: ${results.byLevel.BACHILLERATO} temas`);
  console.log(`  UNIVERSIDAD: ${results.byLevel.UNIVERSIDAD} temas\n`);

  if (results.withoutLevel.length > 0) {
    console.log('❌ Archivos SIN educationLevel:');
    results.withoutLevel.forEach(path => {
      console.log(`   - ${path}`);
    });
    console.log('');
  }

  if (results.invalidLevel.length > 0) {
    console.log('⚠️  Archivos con nivel INVÁLIDO:');
    results.invalidLevel.forEach(item => {
      console.log(`   - ${item.path} (nivel: "${item.level}")`);
    });
    console.log('');
  }

  if (results.withoutLevel.length === 0 && results.invalidLevel.length === 0) {
    console.log('✅ Todos los archivos tienen educationLevel válido!\n');
  } else {
    console.log('💡 Ejecuta este comando para corregir:');
    console.log('   node scripts/add-education-levels.cjs\n');
  }

  // Guardar reporte
  const reportPath = path.join(__dirname, 'education-levels-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2), 'utf-8');
  console.log(`📄 Reporte guardado en: education-levels-report.json`);
}

verifyEducationLevels();
