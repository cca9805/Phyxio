const fs = require('fs');
const path = require('path');

/**
 * Verifica que todos los temas en src/data estén representados en la jerarquía de niveles
 */
function verifyAllThemesInHierarchy() {
  console.log('🔍 Verificando cobertura de temas en jerarquía de niveles...\n');

  // 1. Escanear todos los archivos teoria.jsx en src/data
  const dataDir = path.join(__dirname, '../src/data');
  const allThemes = [];

  function scanDirectory(dir, relativePath = '') {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        const newRelativePath = relativePath ? relativePath + '/' + item : item;
        scanDirectory(fullPath, newRelativePath);
      } else if (item === 'teoria.jsx') {
        const content = fs.readFileSync(fullPath, 'utf-8');
        
        const titleMatch = content.match(/(?:titulo|title):\s*["']([^"']+)["']/);
        const levelMatch = content.match(/educationLevel:\s*["']([^"']+)["']/);
        
        if (titleMatch && levelMatch) {
          allThemes.push({
            path: relativePath,
            titulo: titleMatch[1],
            level: levelMatch[1]
          });
        }
      }
    }
  }

  scanDirectory(dataDir);

  // 2. Cargar jerarquía generada
  const hierarchyPath = path.join(__dirname, 'education-hierarchy-from-metadata.js');
  const hierarchyContent = fs.readFileSync(hierarchyPath, 'utf-8');
  const hierarchyMatch = hierarchyContent.match(/export const educationHierarchy = ({[\s\S]+});/);
  
  if (!hierarchyMatch) {
    console.error('❌ No se pudo parsear education-hierarchy-from-metadata.js');
    return;
  }

  const hierarchy = eval('(' + hierarchyMatch[1] + ')');

  // 3. Extraer todos los temas de la jerarquía
  const hierarchyThemes = [];

  function extractThemesFromHierarchy(data, level) {
    if (data.temas && Array.isArray(data.temas)) {
      data.temas.forEach(tema => {
        hierarchyThemes.push({
          path: tema.path,
          titulo: tema.titulo,
          level: level
        });
      });
    }

    if (data.subcategories) {
      Object.values(data.subcategories).forEach(subcat => {
        extractThemesFromHierarchy(subcat, level);
      });
    }
  }

  for (const [levelKey, levelData] of Object.entries(hierarchy)) {
    if (levelData.categories) {
      Object.values(levelData.categories).forEach(cat => {
        extractThemesFromHierarchy(cat, levelKey);
      });
    }
  }

  // 4. Comparar
  console.log('📊 ESTADÍSTICAS:\n');
  console.log(`Total de temas en src/data: ${allThemes.length}`);
  console.log(`Total de temas en jerarquía: ${hierarchyThemes.length}\n`);

  // Agrupar por nivel
  const themesByLevel = {
    ESO: { inData: 0, inHierarchy: 0 },
    BACHILLERATO: { inData: 0, inHierarchy: 0 },
    UNIVERSIDAD: { inData: 0, inHierarchy: 0 }
  };

  allThemes.forEach(theme => {
    if (themesByLevel[theme.level]) {
      themesByLevel[theme.level].inData++;
    }
  });

  hierarchyThemes.forEach(theme => {
    if (themesByLevel[theme.level]) {
      themesByLevel[theme.level].inHierarchy++;
    }
  });

  console.log('📈 Por nivel educativo:\n');
  for (const [level, counts] of Object.entries(themesByLevel)) {
    const match = counts.inData === counts.inHierarchy ? '✅' : '❌';
    console.log(`${match} ${level}:`);
    console.log(`   En src/data: ${counts.inData}`);
    console.log(`   En jerarquía: ${counts.inHierarchy}`);
    if (counts.inData !== counts.inHierarchy) {
      console.log(`   ⚠️  Diferencia: ${counts.inData - counts.inHierarchy}`);
    }
    console.log('');
  }

  // 5. Encontrar temas faltantes
  const hierarchyPaths = new Set(hierarchyThemes.map(t => t.path));
  const missingThemes = allThemes.filter(t => !hierarchyPaths.has(t.path));

  if (missingThemes.length > 0) {
    console.log('❌ TEMAS FALTANTES EN JERARQUÍA:\n');
    
    const missingByLevel = {
      ESO: [],
      BACHILLERATO: [],
      UNIVERSIDAD: []
    };

    missingThemes.forEach(theme => {
      if (missingByLevel[theme.level]) {
        missingByLevel[theme.level].push(theme);
      }
    });

    for (const [level, themes] of Object.entries(missingByLevel)) {
      if (themes.length > 0) {
        console.log(`\n${level} (${themes.length} faltantes):`);
        themes.forEach(theme => {
          console.log(`   - ${theme.path}`);
          console.log(`     "${theme.titulo}"`);
        });
      }
    }
  } else {
    console.log('✅ TODOS LOS TEMAS ESTÁN REPRESENTADOS EN LA JERARQUÍA!\n');
  }

  // 6. Encontrar temas extra en jerarquía (no deberían existir)
  const dataPaths = new Set(allThemes.map(t => t.path));
  const extraThemes = hierarchyThemes.filter(t => !dataPaths.has(t.path));

  if (extraThemes.length > 0) {
    console.log('\n⚠️  TEMAS EN JERARQUÍA QUE NO EXISTEN EN src/data:\n');
    extraThemes.forEach(theme => {
      console.log(`   - ${theme.path}`);
      console.log(`     "${theme.titulo}" (${theme.level})`);
    });
  }

  // 7. Resumen final
  console.log('\n' + '='.repeat(60));
  if (missingThemes.length === 0 && extraThemes.length === 0) {
    console.log('✅ VERIFICACIÓN EXITOSA: Todos los temas están sincronizados');
  } else {
    console.log('❌ VERIFICACIÓN FALLIDA:');
    if (missingThemes.length > 0) {
      console.log(`   - ${missingThemes.length} temas faltantes en jerarquía`);
    }
    if (extraThemes.length > 0) {
      console.log(`   - ${extraThemes.length} temas extra en jerarquía`);
    }
    console.log('\n💡 Solución: Ejecuta "node scripts/build-education-hierarchy.cjs"');
  }
  console.log('='.repeat(60) + '\n');

  // 8. Guardar reporte
  const report = {
    timestamp: new Date().toISOString(),
    totalInData: allThemes.length,
    totalInHierarchy: hierarchyThemes.length,
    byLevel: themesByLevel,
    missingThemes: missingThemes.map(t => ({ path: t.path, titulo: t.titulo, level: t.level })),
    extraThemes: extraThemes.map(t => ({ path: t.path, titulo: t.titulo, level: t.level })),
    isComplete: missingThemes.length === 0 && extraThemes.length === 0
  };

  const reportPath = path.join(__dirname, 'hierarchy-verification-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`📄 Reporte detallado guardado en: hierarchy-verification-report.json\n`);
}

verifyAllThemesInHierarchy();
