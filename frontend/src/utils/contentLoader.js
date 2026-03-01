/**
 * contentLoader.js - Solución Robusta con import.meta.glob
 * 
 * Este módulo se encarga de cargar dinámicamente el contenido de los temas (teoría, calculadoras, ejercicios)
 * utilizando la función `import.meta.glob` de Vite. Este enfoque es superior al anterior porque no depende
 * de la construcción manual de rutas de archivo, que era frágil y propensa a errores.
 */

// --- Mapas de Módulos generados por Vite ---
const theoryJsxModules = import.meta.glob('/src/data/**/teoria.jsx');
const definitionsModules = import.meta.glob('/src/data/**/definitions.js');
const exercisesModules = import.meta.glob('/src/data/**/ejercicios.json');

// Debug: Log de archivos detectados
console.log('🔍 DEBUG: Archivos teoria.jsx detectados:', Object.keys(theoryJsxModules).length);
console.log('🔍 DEBUG: Archivos de Óptica:', 
  Object.keys(theoryJsxModules).filter(k => k.includes('optica')).length);
console.log('🔍 DEBUG: Primeros 5 archivos de Óptica:', 
  Object.keys(theoryJsxModules).filter(k => k.includes('optica')).slice(0, 5));

/**
 * Función auxiliar para buscar un módulo en uno de los mapas de glob.
 * Ahora usa la ruta completa desde location.pathname para evitar ambigüedades
 */
const findModuleImporter = (globObject, fullPath, fileName) => {
  // Limpiar la ruta: remover /clasica/ o /moderna/ del inicio
  let cleanPath = fullPath.replace(/^\/(clasica|moderna)\//, '/');
  
  // Construir la ruta completa esperada
  const searchKey = `/src/data${cleanPath}/${fileName}`;
  
  console.log(`🔍 Buscando ruta completa: ${searchKey}`);
  console.log(`🔍 Ruta original: ${fullPath}`);
  console.log(`🔍 Ruta limpia: ${cleanPath}`);
  
  // Buscar coincidencia exacta
  let foundKey = Object.keys(globObject).find(key => key === searchKey);
  
  // Si no se encuentra, intentar buscar por el último segmento de la ruta
  // Esto ayuda con rutas anidadas profundas
  if (!foundKey) {
    const pathSegments = cleanPath.split('/').filter(Boolean);
    const lastSegment = pathSegments[pathSegments.length - 1];
    
    console.log(`🔍 Intentando búsqueda por último segmento: ${lastSegment}`);
    
    // Buscar archivos que terminen con el último segmento
    const possibleKeys = Object.keys(globObject).filter(key => {
      const keySegments = key.split('/').filter(Boolean);
      // Verificar si el penúltimo segmento coincide con el último de nuestra ruta
      return keySegments[keySegments.length - 2] === lastSegment;
    });
    
    if (possibleKeys.length > 0) {
      console.log(`🔍 Posibles coincidencias encontradas:`, possibleKeys);
      foundKey = possibleKeys[0]; // Tomar la primera coincidencia
    }
  }
  
  // Debug: Log para ayudar a diagnosticar problemas
  if (!foundKey) {
    console.log(`❌ No encontrado. Archivos disponibles con "${fileName}":`, 
      Object.keys(globObject).filter(k => k.includes(fileName)).slice(0, 10));
  } else {
    console.log(`✅ Encontrado: ${foundKey}`);
  }
  
  return foundKey ? globObject[foundKey] : null;
};

// --- Funciones de Carga de Contenido ---

export const getTheoryByTopic = async (fullPath) => {
  console.log(`🔍 getTheoryByTopic llamado con fullPath: "${fullPath}"`);
  console.log(`📦 Total de módulos de teoría disponibles: ${Object.keys(theoryJsxModules).length}`);
  
  // Carga el componente JSX de teoría.
  const jsxImporter = findModuleImporter(theoryJsxModules, fullPath, 'teoria.jsx');
  if (jsxImporter) {
    console.log(`✅ Módulo encontrado, cargando...`);
    try {
      const module = await jsxImporter();
      console.log(`✅ Módulo cargado:`, module);
      // SubtopicPage.jsx espera el módulo completo (con la propiedad .default) para renderizar.
      return module;
    } catch (err) {
      console.warn(`⚠️ Error importando teoria.jsx para ruta ${fullPath}:`, err);
      // No lanzar: devolver null permitirá que el renderer muestre un placeholder en vez de romper la página.
      return null;
    }
  }

  console.warn(`❌ No se encontró contenido de teoría (JSX) para la ruta: ${fullPath}`);
  return null;
};

export const getCalculatorsByTopic = async (fullPath) => {
  const importer = findModuleImporter(definitionsModules, fullPath, 'definitions.js');
  if (importer) {
    try {
      const module = await importer();
      return module.definitions || module.default?.definitions || [];
    } catch (err) {
      console.warn(`⚠️ Error importando definitions.js para ruta ${fullPath}:`, err);
      return [];
    }
  }
  return [];
};

export const getExercisesByTopic = async (fullPath) => {
  const importer = findModuleImporter(exercisesModules, fullPath, 'ejercicios.json');
  if (importer) {
    try {
      const module = await importer();
      // Si el módulo tiene la propiedad exercises, devolverla; si no, devolver module.default
      const data = module.default || module;
      return data.exercises || data || [];
    } catch (err) {
      console.warn(`⚠️ Error importando ejercicios.json para ruta ${fullPath}:`, err);
      return [];
    }
  }
  return [];
};
