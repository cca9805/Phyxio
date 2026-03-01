#!/usr/bin/env node

/**
 * Script para agregar metadatos a todos los archivos teoria.jsx que no los tengan
 * Uso: node scripts/addMetadataToAll.js
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mapeo completo de metadatos por ruta
const metadataMap = {
  // Cinemática
  'cinematica/mcua': {
    titulo: "MCUA - Movimiento Circular Uniformemente Acelerado",
    descripcion: "Movimiento circular con aceleración angular constante",
    categoria: "mecanica",
    tema: "cinematica",
    subtema: "mcua",
    icono: "mcua",
    palette: "coral"
  },
  'cinematica/mp': {
    titulo: "MP - Movimiento Parabólico",
    descripcion: "Movimiento en dos dimensiones bajo gravedad constante",
    categoria: "mecanica",
    tema: "cinematica",
    subtema: "mp",
    icono: "mp",
    palette: "mint"
  },
  'cinematica/mr': {
    titulo: "MR - Movimiento Relativo",
    descripcion: "Análisis del movimiento desde diferentes sistemas de referencia",
    categoria: "mecanica",
    tema: "cinematica",
    subtema: "mr",
    icono: "mr",
    palette: "green"
  },

  // Dinámica
  'dinamica/movimpulso': {
    titulo: "Impulso y Momento",
    descripcion: "Conservación del momento lineal y colisiones",
    categoria: "mecanica",
    tema: "dinamica",
    subtema: "movimpulso",
    icono: "movimpulso",
    palette: "sand"
  },
  'dinamica/movcircular': {
    titulo: "Movimiento Circular",
    descripcion: "Dinámica del movimiento circular y fuerza centrípeta",
    categoria: "mecanica",
    tema: "dinamica",
    subtema: "movcircular",
    icono: "movcircular",
    palette: "lime"
  },
  'dinamica/rotacion': {
    titulo: "Rotación y Torque",
    descripcion: "Dinámica rotacional, momento de inercia y torque",
    categoria: "mecanica",
    tema: "dinamica",
    subtema: "rotacion",
    icono: "rotacion",
    palette: "sapphire"
  },
  'dinamica/gravitacion': {
    titulo: "Gravitación Universal",
    descripcion: "Ley de gravitación universal y movimiento planetario",
    categoria: "mecanica",
    tema: "dinamica",
    subtema: "gravitacion",
    icono: "gravitacion",
    palette: "navy"
  },
  'dinamica/equilibrio': {
    titulo: "Equilibrio Dinámico",
    descripcion: "Condiciones de equilibrio y análisis de fuerzas",
    categoria: "mecanica",
    tema: "dinamica",
    subtema: "equilibrio",
    icono: "equilibrio",
    palette: "violet"
  },
  'dinamica/friccion': {
    titulo: "Fricción",
    descripcion: "Fuerzas de fricción estática y cinética",
    categoria: "mecanica",
    tema: "dinamica",
    subtema: "friccion",
    icono: "friccion",
    palette: "crimson"
  },
  'dinamica/oscilaciones': {
    titulo: "Oscilaciones y Resortes",
    descripcion: "Sistemas oscilatorios, resortes y péndulos",
    categoria: "mecanica",
    tema: "dinamica",
    subtema: "oscilaciones",
    icono: "oscilaciones",
    palette: "emerald"
  },
  'dinamica/masaspoleas': {
    titulo: "Sistemas de Masas y Poleas",
    descripcion: "Análisis de sistemas con poleas, cuerdas y masas",
    categoria: "mecanica",
    tema: "dinamica",
    subtema: "masaspoleas",
    icono: "masaspoleas",
    palette: "teal"
  },
  'dinamica/maquinas': {
    titulo: "Máquinas Simples",
    descripcion: "Palancas, poleas, planos inclinados y ventaja mecánica",
    categoria: "mecanica",
    tema: "dinamica",
    subtema: "maquinas",
    icono: "maquinas",
    palette: "amber"
  },

  // Estática
  'estatica/aplicaciones': {
    titulo: "Aplicaciones de Estática",
    descripcion: "Problemas prácticos de equilibrio estático",
    categoria: "mecanica",
    tema: "estatica",
    subtema: "aplicaciones",
    icono: "aplicaciones",
    palette: "bronze"
  },
  'estatica/apoyos': {
    titulo: "Apoyos y Reacciones",
    descripcion: "Tipos de apoyos y cálculo de reacciones",
    categoria: "mecanica",
    tema: "estatica",
    subtema: "apoyos",
    icono: "apoyos",
    palette: "plum"
  },
  'estatica/centro': {
    titulo: "Centro de Masa y Centroide",
    descripcion: "Cálculo de centros de masa y centroides",
    categoria: "mecanica",
    tema: "estatica",
    subtema: "centro",
    icono: "centro",
    palette: "lima"
  },
  'estatica/diagramas': {
    titulo: "Diagramas de Cuerpo Libre",
    descripcion: "Construcción y análisis de diagramas de fuerzas",
    categoria: "mecanica",
    tema: "estatica",
    subtema: "diagramas",
    icono: "diagramas",
    palette: "royal"
  },
  'estatica/estabilidad': {
    titulo: "Estabilidad de Estructuras",
    descripcion: "Análisis de estabilidad y condiciones de equilibrio",
    categoria: "mecanica",
    tema: "estatica",
    subtema: "estabilidad",
    icono: "estabilidad",
    palette: "jade"
  },
  'estatica/estructuras': {
    titulo: "Análisis de Estructuras",
    descripcion: "Armaduras, marcos y análisis estructural",
    categoria: "mecanica",
    tema: "estatica",
    subtema: "estructuras",
    icono: "estructuras",
    palette: "indigo"
  },
  'estatica/friccionest': {
    titulo: "Fricción en Estática",
    descripcion: "Fricción estática y problemas de equilibrio",
    categoria: "mecanica",
    tema: "estatica",
    subtema: "friccionest",
    icono: "friccionest",
    palette: "magenta"
  },
  'estatica/momentos': {
    titulo: "Momentos y Torques",
    descripcion: "Cálculo de momentos y equilibrio rotacional",
    categoria: "mecanica",
    tema: "estatica",
    subtema: "momentos",
    icono: "momentos",
    palette: "amber"
  },
  'estatica/vectores': {
    titulo: "Análisis Vectorial",
    descripcion: "Operaciones vectoriales aplicadas a la estática",
    categoria: "mecanica",
    tema: "estatica",
    subtema: "vectores",
    icono: "vectores",
    palette: "cobalt"
  },

  // Electromagnetismo - Electricidad
  'electromagnetismo/electricidad/carga-fuerza': {
    titulo: "Carga y Fuerza Eléctrica",
    descripcion: "Ley de Coulomb, carga eléctrica y fuerzas electrostáticas",
    categoria: "electromagnetismo",
    tema: "electricidad",
    subtema: "carga-fuerza",
    icono: "carga-fuerza",
    palette: "cyan"
  },
  'electromagnetismo/electricidad/corriente-ohm': {
    titulo: "Corriente Eléctrica y Ley de Ohm",
    descripcion: "Corriente, resistencia, conductividad y ley de Ohm",
    categoria: "electromagnetismo",
    tema: "electricidad",
    subtema: "corriente-ohm",
    icono: "corriente-ohm",
    palette: "yellow"
  },
  'electromagnetismo/electricidad/potencial': {
    titulo: "Potencial Eléctrico",
    descripcion: "Potencial eléctrico, diferencia de potencial y energía",
    categoria: "electromagnetismo",
    tema: "electricidad",
    subtema: "potencial",
    icono: "potencial",
    palette: "green"
  },
  'electromagnetismo/electricidad/capacidad': {
    titulo: "Capacidad y Condensadores",
    descripcion: "Capacitancia, condensadores y almacenamiento de energía",
    categoria: "electromagnetismo",
    tema: "electricidad",
    subtema: "capacidad",
    icono: "capacidad",
    palette: "purple"
  },

  // Electromagnetismo - Circuitos
  'electromagnetismo/electricidad/circuitos/circuitos-cc': {
    titulo: "Circuitos de Corriente Continua",
    descripcion: "Análisis de circuitos DC, leyes de Kirchhoff",
    categoria: "electromagnetismo",
    tema: "electricidad",
    subtema: "circuitos-cc",
    icono: "circuitos-cc",
    palette: "blue"
  },
  'electromagnetismo/electricidad/circuitos/circuitos-ca': {
    titulo: "Circuitos de Corriente Alterna",
    descripcion: "Análisis de circuitos AC, impedancia y fasores",
    categoria: "electromagnetismo",
    tema: "electricidad",
    subtema: "circuitos-ca",
    icono: "circuitos-ca",
    palette: "orange"
  },
  'electromagnetismo/electricidad/circuitos/transitorios': {
    titulo: "Circuitos Transitorios",
    descripcion: "Respuesta transitoria de circuitos RC, RL y RLC",
    categoria: "electromagnetismo",
    tema: "electricidad",
    subtema: "transitorios",
    icono: "transitorios",
    palette: "red"
  },

  // Electromagnetismo - Magnetismo
  'electromagnetismo/magnetismo/campos-fuerza': {
    titulo: "Campos y Fuerzas Magnéticas",
    descripcion: "Campo magnético, fuerza de Lorentz y movimiento de cargas",
    categoria: "electromagnetismo",
    tema: "magnetismo",
    subtema: "campos-fuerza",
    icono: "campos-fuerza",
    palette: "purple"
  },
  'electromagnetismo/magnetismo/fuentes-campo': {
    titulo: "Fuentes de Campo Magnético",
    descripcion: "Ley de Biot-Savart, ley de Ampère y fuentes magnéticas",
    categoria: "electromagnetismo",
    tema: "magnetismo",
    subtema: "fuentes-campo",
    icono: "fuentes-campo",
    palette: "indigo"
  },
  'electromagnetismo/magnetismo/induccion': {
    titulo: "Inducción Electromagnética",
    descripcion: "Ley de Faraday, ley de Lenz y aplicaciones",
    categoria: "electromagnetismo",
    tema: "magnetismo",
    subtema: "induccion",
    icono: "induccion",
    palette: "teal"
  },

  // Electromagnetismo - Electrónica
  'electromagnetismo/electronica/dispositivos-semiconductores': {
    titulo: "Dispositivos Semiconductores",
    descripcion: "Diodos, transistores y dispositivos de estado sólido",
    categoria: "electromagnetismo",
    tema: "electronica",
    subtema: "dispositivos-semiconductores",
    icono: "semiconductores",
    palette: "green"
  },
  'electromagnetismo/electronica/dispositivos-fotonicos': {
    titulo: "Dispositivos Fotónicos",
    descripcion: "LEDs, fotodiodos, células solares y láseres",
    categoria: "electromagnetismo",
    tema: "electronica",
    subtema: "dispositivos-fotonicos",
    icono: "fotonicos",
    palette: "yellow"
  },
  'electromagnetismo/electronica/familias-logicas': {
    titulo: "Familias Lógicas",
    descripcion: "TTL, CMOS y circuitos lógicos digitales",
    categoria: "electromagnetismo",
    tema: "electronica",
    subtema: "familias-logicas",
    icono: "familias",
    palette: "blue"
  },

  // Maxwell
  'electromagnetismo/maxwell': {
    titulo: "Ecuaciones de Maxwell",
    descripcion: "Ecuaciones fundamentales del electromagnetismo",
    categoria: "electromagnetismo",
    tema: "maxwell",
    subtema: "maxwell",
    icono: "maxwell",
    palette: "maroon"
  }
};

/**
 * Genera metadatos por defecto basándose en la ruta del archivo
 */
function generateDefaultMetadata(relativePath) {
  const segments = relativePath.replace('src/data/', '').replace('/teoria.jsx', '').split('/');
  const subtema = segments[segments.length - 1];
  const tema = segments.length > 1 ? segments[segments.length - 2] : subtema;
  const categoria = segments[0] || 'fisica';
  
  // Convertir nombres técnicos a títulos legibles
  const titulo = subtema.charAt(0).toUpperCase() + subtema.slice(1).replace(/-/g, ' ');
  
  return {
    titulo,
    descripcion: `Estudio de ${titulo.toLowerCase()}`,
    categoria,
    tema,
    subtema,
    icono: subtema,
    palette: 'sky'
  };
}

/**
 * Agrega metadatos a un archivo teoria.jsx
 */
async function addMetadataToFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    // Verificar si ya tiene metadatos
    if (content.includes('export const metadata')) {
      console.log(`✓ ${filePath} ya tiene metadatos`);
      return false;
    }
    
    // Obtener metadatos para este archivo
    const relativePath = filePath.replace(/\\/g, '/');
    const key = relativePath.replace('src/data/', '').replace('/teoria.jsx', '');
    const metadata = metadataMap[key] || generateDefaultMetadata(relativePath);
    
    // Crear el bloque de metadatos
    const metadataBlock = `
// Metadatos del tema
export const metadata = {
  titulo: "${metadata.titulo}",
  descripcion: "${metadata.descripcion}",
  categoria: "${metadata.categoria}",
  tema: "${metadata.tema}",
  subtema: "${metadata.subtema}",
  icono: "${metadata.icono}",
  palette: "${metadata.palette}"
};
`;
    
    // Buscar el patrón de importaciones y agregar metadatos después
    const importPattern = /(import.*?from.*?;[\s\S]*?)(\nconst\s+\w+)/;
    const match = content.match(importPattern);
    
    if (match) {
      const newContent = content.replace(importPattern, `$1${metadataBlock}$2`);
      await fs.writeFile(filePath, newContent, 'utf-8');
      console.log(`✓ Metadatos agregados a ${filePath}`);
      return true;
    } else {
      console.log(`⚠ No se pudo procesar ${filePath} - patrón no encontrado`);
      return false;
    }
    
  } catch (error) {
    console.error(`❌ Error procesando ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Busca recursivamente archivos teoria.jsx
 */
async function findTheoryFiles(dir) {
  const files = [];
  
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        const subFiles = await findTheoryFiles(fullPath);
        files.push(...subFiles);
      } else if (entry.name === 'teoria.jsx') {
        files.push(fullPath);
      }
    }
  } catch (error) {
    // Ignorar directorios que no se pueden leer
  }
  
  return files;
}

/**
 * Función principal
 */
async function main() {
  console.log('🔄 Agregando metadatos a archivos teoria.jsx...');
  
  try {
    const basePath = path.join(__dirname, '..', 'src', 'data');
    const theoryFiles = await findTheoryFiles(basePath);
    
    console.log(`📊 Encontrados ${theoryFiles.length} archivos teoria.jsx`);
    
    let processed = 0;
    let added = 0;
    
    for (const file of theoryFiles) {
      processed++;
      const wasAdded = await addMetadataToFile(file);
      if (wasAdded) added++;
    }
    
    console.log(`\n✅ Proceso completado:`);
    console.log(`   📁 Archivos procesados: ${processed}`);
    console.log(`   ➕ Metadatos agregados: ${added}`);
    console.log(`   ✓ Ya tenían metadatos: ${processed - added}`);
    
  } catch (error) {
    console.error('❌ Error en el proceso:', error);
    process.exit(1);
  }
}

// Ejecutar
main().catch(console.error);