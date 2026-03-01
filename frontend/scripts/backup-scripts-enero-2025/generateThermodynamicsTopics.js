import fs from 'fs';
import path from 'path';

// Función para leer los metadatos de un archivo teoria.jsx
function readMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extraer metadatos usando regex
    const metadataMatch = content.match(/export const metadata = ({[\s\S]*?});/);
    if (!metadataMatch) return null;
    
    // Evaluar el objeto metadata de forma segura
    const metadataStr = metadataMatch[1];
    const metadata = eval(`(${metadataStr})`);
    
    return metadata;
  } catch (error) {
    console.warn(`No se pudo leer metadata de ${filePath}:`, error.message);
    return null;
  }
}

// Función para generar la estructura de termodinámica basada en carpetas
function generateThermodynamicsStructure() {
  const thermodynamicsPath = 'src/data/termodinamica';
  const structure = {
    title: "Termodinámica",
    intro: "Estudio de las relaciones entre calor, trabajo, temperatura y energía en sistemas macroscópicos",
    cards: []
  };
  
  // Leer las carpetas principales (01_, 02_, etc.)
  const mainFolders = fs.readdirSync(thermodynamicsPath)
    .filter(item => {
      const fullPath = path.join(thermodynamicsPath, item);
      return fs.statSync(fullPath).isDirectory() && /^\d{2}_/.test(item);
    })
    .sort(); // Ordenar por número
  
  console.log('📁 Carpetas principales encontradas:', mainFolders);
  
  for (const folder of mainFolders) {
    const folderPath = path.join(thermodynamicsPath, folder);
    const teoriaPath = path.join(folderPath, 'teoria.jsx');
    
    // Leer metadatos de la carpeta principal
    let metadata = null;
    if (fs.existsSync(teoriaPath)) {
      metadata = readMetadata(teoriaPath);
    }
    
    // Crear información de la carpeta principal
    const folderInfo = {
      tipo: folder,
      titulo: metadata?.titulo || formatFolderName(folder),
      descripcion: metadata?.descripcion || `Estudio de ${formatFolderName(folder).toLowerCase()}`,
      icono: "termodinamicaIcon", // Usar el icono importado
      palette: metadata?.palette || "orange",
      btn: {
        texto: "Explorar",
        clase: `${folder}-btn`,
        link: `/clasica/termodinamica/${folder}`
      }
    };
    
    structure.cards.push(folderInfo);
    console.log(`✅ Procesada carpeta: ${folder} - ${folderInfo.titulo}`);
  }
  
  return structure;
}

// Función para formatear nombres de carpetas
function formatFolderName(folderName) {
  return folderName
    .replace(/^\d{2}_/, '') // Remover prefijo numérico
    .replace(/_/g, ' ') // Reemplazar guiones bajos con espacios
    .replace(/\b\w/g, l => l.toUpperCase()); // Capitalizar primera letra de cada palabra
}

// Función para generar la estructura de una carpeta específica (subtemas)
function generateSubtopicsStructure(mainFolder) {
  const folderPath = path.join('src/data/termodinamica', mainFolder);
  
  if (!fs.existsSync(folderPath)) {
    console.error(`❌ Carpeta no encontrada: ${folderPath}`);
    return null;
  }
  
  // Leer metadatos de la carpeta principal
  const mainTeoriaPath = path.join(folderPath, 'teoria.jsx');
  let mainMetadata = null;
  if (fs.existsSync(mainTeoriaPath)) {
    mainMetadata = readMetadata(mainTeoriaPath);
  }
  
  const structure = {
    title: mainMetadata?.titulo || formatFolderName(mainFolder),
    intro: mainMetadata?.descripcion || `Estudio detallado de ${formatFolderName(mainFolder).toLowerCase()}`,
    cards: []
  };
  
  // Leer subcarpetas (subtemas)
  const subfolders = fs.readdirSync(folderPath)
    .filter(item => {
      const fullPath = path.join(folderPath, item);
      return fs.statSync(fullPath).isDirectory();
    })
    .sort();
  
  console.log(`📂 Subtemas en ${mainFolder}:`, subfolders);
  
  for (const subfolder of subfolders) {
    const subfolderPath = path.join(folderPath, subfolder);
    const teoriaPath = path.join(subfolderPath, 'teoria.jsx');
    const definitionsPath = path.join(subfolderPath, 'definitions.js');
    
    // Solo procesar si tiene los archivos necesarios
    if (fs.existsSync(teoriaPath) && fs.existsSync(definitionsPath)) {
      const metadata = readMetadata(teoriaPath);
      
      // Determinar si es teórico o práctico
      let isTheoryOnly = false;
      try {
        const defContent = fs.readFileSync(definitionsPath, 'utf8');
        isTheoryOnly = defContent.includes('export const isTheoryOnly = true');
      } catch (error) {
        console.warn(`No se pudo determinar tipo de ${subfolder}`);
      }
      
      const subtopicInfo = {
        tipo: subfolder,
        titulo: metadata?.titulo || formatFolderName(subfolder),
        descripcion: metadata?.descripcion || `Estudio de ${formatFolderName(subfolder).toLowerCase()}`,
        icono: "termodinamicaIcon",
        palette: isTheoryOnly ? "blue" : (metadata?.palette || "orange"),
        isTheoryOnly: isTheoryOnly,
        btn: {
          texto: "Explorar",
          clase: `${subfolder}-btn`,
          link: `/clasica/termodinamica/${mainFolder}/${subfolder}`
        }
      };
      
      structure.cards.push(subtopicInfo);
      console.log(`  ✅ ${subfolder} - ${subtopicInfo.titulo} ${isTheoryOnly ? '📚' : '🧮'}`);
    }
  }
  
  return structure;
}

// Función para actualizar topics.generated.js
function updateTopicsGenerated() {
  const topicsPath = 'src/data/topics.generated.js';
  
  if (!fs.existsSync(topicsPath)) {
    console.error('❌ No se encontró topics.generated.js');
    return;
  }
  
  let content = fs.readFileSync(topicsPath, 'utf8');
  
  // Generar nueva estructura de termodinámica
  const thermodynamicsStructure = generateThermodynamicsStructure();
  
  // Reemplazar la sección de termodinámica
  const newThermodynamicsSection = `  "termodinamica": ${JSON.stringify(thermodynamicsStructure, null, 4)}`;
  
  // Buscar y reemplazar la sección existente
  const thermodynamicsRegex = /"termodinamica":\s*{[\s\S]*?(?=,\s*"[^"]+":|\s*}\s*;?\s*$)/;
  
  if (thermodynamicsRegex.test(content)) {
    content = content.replace(thermodynamicsRegex, newThermodynamicsSection);
    console.log('✅ Sección de termodinámica actualizada en topics.generated.js');
  } else {
    console.error('❌ No se encontró la sección de termodinámica en topics.generated.js');
    return;
  }
  
  // Escribir el archivo actualizado
  fs.writeFileSync(topicsPath, content, 'utf8');
  console.log('💾 Archivo topics.generated.js guardado');
}

// Función para generar estructuras individuales de subtemas
function generateAllSubtopicStructures() {
  const thermodynamicsPath = 'src/data/termodinamica';
  const outputPath = 'src/data/thermodynamicsSubtopics.generated.js';
  
  const mainFolders = fs.readdirSync(thermodynamicsPath)
    .filter(item => {
      const fullPath = path.join(thermodynamicsPath, item);
      return fs.statSync(fullPath).isDirectory() && /^\d{2}_/.test(item);
    })
    .sort();
  
  const allStructures = {};
  
  for (const folder of mainFolders) {
    const structure = generateSubtopicsStructure(folder);
    if (structure) {
      allStructures[folder] = structure;
    }
  }
  
  // Generar archivo con todas las estructuras
  const fileContent = `// Auto-generated thermodynamics subtopics structure
// Generated by scripts/generateThermodynamicsTopics.js

export const thermodynamicsSubtopics = ${JSON.stringify(allStructures, null, 2)};

export default thermodynamicsSubtopics;
`;
  
  fs.writeFileSync(outputPath, fileContent, 'utf8');
  console.log(`✅ Generado: ${outputPath}`);
  
  return allStructures;
}

// Ejecutar el script
console.log('🔧 Generando estructura de termodinámica basada en carpetas...\n');

try {
  // 1. Actualizar la página principal de termodinámica
  console.log('📋 Paso 1: Actualizando página principal de termodinámica...');
  updateTopicsGenerated();
  
  // 2. Generar estructuras de subtemas
  console.log('\n📋 Paso 2: Generando estructuras de subtemas...');
  const subtopicStructures = generateAllSubtopicStructures();
  
  // 3. Mostrar resumen
  console.log('\n📊 Resumen de generación:');
  console.log(`   • Carpetas principales procesadas: ${Object.keys(subtopicStructures).length}`);
  
  let totalSubtopics = 0;
  let theoryOnlyCount = 0;
  let practicalCount = 0;
  
  Object.values(subtopicStructures).forEach(structure => {
    totalSubtopics += structure.cards.length;
    structure.cards.forEach(card => {
      if (card.isTheoryOnly) {
        theoryOnlyCount++;
      } else {
        practicalCount++;
      }
    });
  });
  
  console.log(`   • Total de subtemas: ${totalSubtopics}`);
  console.log(`   • Subtemas teóricos: ${theoryOnlyCount} 📚`);
  console.log(`   • Subtemas prácticos: ${practicalCount} 🧮`);
  
  console.log('\n✅ Generación completada exitosamente!');
  console.log('🎯 La página principal ahora muestra las carpetas principales como cards.');
  console.log('📁 Cada carpeta principal llevará a sus respectivos subtemas.');
  
} catch (error) {
  console.error('❌ Error durante la generación:', error.message);
  console.error(error.stack);
}