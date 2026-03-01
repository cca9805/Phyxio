#!/usr/bin/env node

/**
 * Script para generar topics.js dinámicamente
 * Uso: node scripts/generateTopics.js
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de iconos por tema
const ICON_MAP = {
  // Cinemática
  'mru': 'mruIcon',
  'mruv': 'mruvIcon',
  'mcu': 'mcuIcon',
  'mcua': 'mcuaIcon',
  'mas': 'masIcon',
  'mp': 'mpIcon',
  'mr': 'mrIcon',
  
  // Dinámica
  'newton': 'newtonIcon',
  'trabajoenergia': 'energiaIcon',
  'movimpulso': 'movimientoIcon',
  'movcircular': 'movcircularIcon',
  'rotacion': 'rotacionIcon',
  'gravitacion': 'gravedadIcon',
  'equilibrio': 'equilibrioIcon',
  'friccion': 'friccionIcon',
  'masaspoleas': 'masasIcon',
  'maquinas': 'maquinasIcon',
  'oscilaciones': 'oscilacionesIcon',
  
  // Estática
  'aplicaciones': 'aplicacionesIcon',
  'apoyos': 'apoyosIcon',
  'centro': 'centroIcon',
  'diagramas': 'diagramasIcon',
  'estabilidad': 'estabilidadIcon',
  'estructuras': 'estructurasIcon',
  'friccionest': 'friccionestIcon',
  'momentos': 'momentosIcon',
  'vectores': 'vectoresIcon',
  
  // Electromagnetismo
  'electricidad': 'electricidadIcon',
  'magnetismo': 'magnetismoIcon',
  'maxwell': 'maxwellIcon',
  'ondas': 'ondaselectromagneticasIcon',
  'electronica': 'electronicaIcon',
  
  // Electricidad
  'campos-electricos': 'camposelectricosIcon',
  'carga-fuerza': 'cargafuerzaIcon',
  'circuitos': 'circuitosIcon',
  'corriente-ohm': 'corrienteIcon',
  'potencial': 'potencialenergiacapacidadIcon',
  'capacidad': 'capacidadelectricaIcon',
  
  // Temas principales
  'cinematica': 'cinematicaIcon',
  'dinamica': 'dinamicaIcon',
  'estatica': 'estaticaIcon',
  'electromagnetismo': 'electromagnetismoIcon',
  'termodinamica': 'termodinamicaIcon'
};

/**
 * Escanea una carpeta y retorna información sobre los temas/subtemas
 */
async function scanDirectory(dirPath) {
  const fullPath = path.join(__dirname, '..', 'src', 'data', dirPath);
  
  try {
    const entries = await fs.readdir(fullPath, { withFileTypes: true });
    const result = {
      directories: [],
      hasContent: false,
      hasConfig: false
    };
    
    // Verificar si tiene archivos de contenido
    const files = entries.filter(entry => entry.isFile()).map(entry => entry.name);
    result.hasContent = files.some(file => 
      file === 'teoria.jsx' || 
      file === 'definitions.js' || 
      file === 'ejercicios.json'
    );
    
    result.hasConfig = files.includes('config.json');
    
    // Obtener subdirectorios
    result.directories = entries
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
      .filter(name => !name.startsWith('.'));
    
    return result;
  } catch (error) {
    console.warn(`No se pudo leer directorio: ${fullPath}`);
    return { directories: [], hasContent: false, hasConfig: false };
  }
}

/**
 * Carga configuración de un tema desde su archivo config.json
 */
async function loadTopicConfig(topicPath) {
  const configPath = path.join(__dirname, '..', 'src', 'data', topicPath, 'config.json');
  
  try {
    const configData = await fs.readFile(configPath, 'utf-8');
    return JSON.parse(configData);
  } catch (error) {
    // Si no existe config.json, generar configuración por defecto
    return generateDefaultConfig(topicPath);
  }
}

/**
 * Genera configuración por defecto basada en el nombre del directorio
 */
function generateDefaultConfig(topicPath) {
  const segments = topicPath.split('/');
  const topicId = segments[segments.length - 1];
  
  // Convertir nombres técnicos a títulos legibles
  const titleMap = {
    'mru': 'MRU - Movimiento Rectilíneo Uniforme',
    'mruv': 'MRUV - Movimiento Rectilíneo Uniformemente Variado',
    'mcu': 'MCU - Movimiento Circular Uniforme',
    'mcua': 'MCUA - Movimiento Circular Uniformemente Acelerado',
    'mas': 'MAS - Movimiento Armónico Simple',
    'mp': 'MP - Movimiento Parabólico',
    'mr': 'MR - Movimiento Relativo',
    'newton': 'Leyes de Newton',
    'trabajoenergia': 'Trabajo y Energía',
    'movimpulso': 'Impulso y Momento',
    'movcircular': 'Movimiento Circular',
    'rotacion': 'Rotación y Torque',
    'gravitacion': 'Gravitación Universal',
    'equilibrio': 'Equilibrio Estático',
    'friccion': 'Fricción',
    'oscilaciones': 'Oscilaciones y Resortes',
    'masaspoleas': 'Sistemas de Masas y Poleas',
    'maquinas': 'Máquinas Simples',
    'campos-electricos': 'Campos Eléctricos',
    'carga-fuerza': 'Carga y Fuerza Eléctrica',
    'corriente-ohm': 'Corriente Eléctrica y Ley de Ohm',
    'potencial': 'Potencial Eléctrico',
    'capacidad': 'Capacidad y Condensadores',
    'cinematica': 'Cinemática',
    'dinamica': 'Dinámica',
    'estatica': 'Estática',
    'electromagnetismo': 'Electromagnetismo',
    'electricidad': 'Electricidad',
    'magnetismo': 'Magnetismo',
    'maxwell': 'Ecuaciones de Maxwell',
    'ondas': 'Ondas Electromagnéticas',
    'electronica': 'Electrónica'
  };
  
  const title = titleMap[topicId] || topicId.charAt(0).toUpperCase() + topicId.slice(1);
  
  return {
    title,
    description: `Estudio de ${title.toLowerCase()}`,
    icon: topicId,
    palette: 'sky'
  };
}

/**
 * Genera la estructura de un tema con sus subtemas
 */
async function generateTopicStructure(topicPath, basePath = '') {
  const scanResult = await scanDirectory(topicPath);
  const config = await loadTopicConfig(topicPath);
  
  const fullPath = basePath ? `${basePath}/${topicPath}` : topicPath;
  const topicId = topicPath.split('/').pop();
  
  // Si tiene contenido directo, es un subtema
  if (scanResult.hasContent && scanResult.directories.length === 0) {
    return {
      type: 'subtopic',
      id: topicId,
      path: fullPath,
      config
    };
  }
  
  // Si tiene subdirectorios, es un tema con subtemas
  if (scanResult.directories.length > 0) {
    const subtopics = [];
    
    for (const subdir of scanResult.directories) {
      const subtopicPath = `${topicPath}/${subdir}`;
      const subtopic = await generateTopicStructure(subtopicPath, basePath);
      if (subtopic) {
        subtopics.push(subtopic);
      }
    }
    
    return {
      type: 'topic',
      id: topicId,
      path: fullPath,
      config,
      subtopics
    };
  }
  
  return null;
}

/**
 * Convierte la estructura generada a formato topics.js
 */
function convertToTopicsFormat(structure) {
  const topics = {};
  
  function processStructure(item, parentPath = '') {
    const currentPath = parentPath ? `${parentPath}/${item.id}` : item.id;
    
    if (item.type === 'topic' && item.subtopics && item.subtopics.length > 0) {
      // Es un tema con subtemas
      topics[item.id] = {
        title: item.config.title,
        intro: item.config.description || `Estudio de ${item.config.title.toLowerCase()}`,
        cards: item.subtopics.map(subtopic => {
          const iconName = ICON_MAP[subtopic.id] || `${subtopic.id}Icon`;
          const linkPath = subtopic.type === 'topic' 
            ? `/clasica/${currentPath}/${subtopic.id}`
            : `/clasica/${currentPath}/${subtopic.id}`;
            
          return {
            tipo: subtopic.id,
            titulo: subtopic.config.title,
            descripcion: subtopic.config.description,
            icono: iconName,
            palette: subtopic.config.palette || 'sky',
            btn: {
              texto: "Explorar",
              clase: `${subtopic.id}-btn`,
              link: linkPath
            }
          };
        }),
        additionalContent: item.config.additionalContent || ''
      };
      
      // Procesar subtemas recursivamente
      item.subtopics.forEach(subtopic => {
        if (subtopic.type === 'topic') {
          processStructure(subtopic, currentPath);
        }
      });
    }
  }
  
  structure.forEach(item => processStructure(item));
  return topics;
}

/**
 * Genera el contenido del archivo topics.js
 */
function generateTopicsFileContent(topicsData) {
  const imports = `// Auto-generated file - DO NOT EDIT MANUALLY
// Generated by scripts/generateTopics.js
// Run: npm run generate:topics

// Iconos de temas de Física Clásica
import m_clasica from "../assets/m_clasica.png";
import m_moderna from "../assets/m_moderna.png";
import mecanicaIcon from "../assets/m_mecanica.png";
import termodinamicaIcon from "../assets/m_termodinamica.png";
import electromagnetismoIcon from "../assets/m_electromagnetismo.png";
import opticaIcon from "../assets/m_optica.png";
import acusticaIcon from "../assets/m_acustica.png";
import hidrostaticaIcon from "../assets/m_hidrostatica.png";

// Iconos de Mecánica
import cinematicaIcon from "../assets/m_cinematica.png";
import dinamicaIcon from "../assets/m_dinamica.png";
import estaticaIcon from "../assets/m_estatica.png";

// Iconos de Cinemática
import mruIcon from "../assets/mru.png";
import mruvIcon from "../assets/mruv.png";
import mcuIcon from "../assets/mcu.png";
import mcuaIcon from "../assets/mcua.png";
import masIcon from "../assets/mas.png";
import mpIcon from "../assets/mp.png";
import mrIcon from "../assets/mr.png";

// Iconos de Dinámica
import newtonIcon from "../assets/leyes_newton.png";
import energiaIcon from "../assets/trabajoEnergia.png";
import movimientoIcon from "../assets/movimiento.png";
import movcircularIcon from "../assets/movcircular.png";
import rotacionIcon from "../assets/rotacion.png";
import gravedadIcon from "../assets/gravitacion.png";
import equilibrioIcon from "../assets/equilibrio.png";
import friccionIcon from "../assets/friccion.png";
import masasIcon from "../assets/masas_poleas.png";
import maquinasIcon from "../assets/maquinas.png";
import oscilacionesIcon from "../assets/oscilaciones.png";

// Iconos de Estática
import aplicacionesIcon from "../assets/aplicaciones.png";
import apoyosIcon from "../assets/apoyos_reacciones.png";
import centroIcon from "../assets/centro_masa.png";
import diagramasIcon from "../assets/diagramas.png";
import estabilidadIcon from "../assets/estabilidad.png";
import estructurasIcon from "../assets/estructuras.png";
import friccionestIcon from "../assets/friccionest.png";
import momentosIcon from "../assets/momentos.png";
import vectoresIcon from "../assets/vectores.png";

// Iconos de Electromagnetismo
import electricidadIcon from "../assets/electricidad.png";
import magnetismoIcon from "../assets/magnetismo.png";
import maxwellIcon from "../assets/maxwell.png";
import ondaselectromagneticasIcon from "../assets/ondas-electromagneticas.png";
import electronicaIcon from "../assets/electronica.png";

// Iconos de Electricidad
import camposelectricosIcon from "../assets/camposelectricos.png";
import cargafuerzaIcon from "../assets/cargaelectrica.png";
import circuitosIcon from "../assets/circuitos.png";
import corrienteIcon from "../assets/corriente.png";
import potencialenergiacapacidadIcon from "../assets/potencialelectrico.png";
import capacidadelectricaIcon from "../assets/capacidadelectrica.png";

// Iconos de circuitos
import circuitosccIcon from "../assets/circuitoscc.png";
import circuitosacIcon from "../assets/circuitosac.png";
import transitoriosIcon from "../assets/transitorios.png";

// Iconos electronica
import fotonicosIcon from "../assets/fotonicos.png";
import semiconductoresIcon from "../assets/semiconductores.png";
import familiasIcon from "../assets/familias.png";

// Iconos de Magnetismo
import camposIcon from "../assets/campos.png";
import fuentescampoIcon from "../assets/fuentescampo.png";
import induccionIcon from "../assets/induccion.png";

// Iconos de Termodinámica
import conceptosIcon from "../assets/m_termodinamica.png";
import magnitudesIcon from "../assets/m_termodinamica.png";
import principiosIcon from "../assets/m_termodinamica.png";
import modelosIcon from "../assets/m_termodinamica.png";
import entropiaIcon from "../assets/m_termodinamica.png";
import procesosIcon from "../assets/m_termodinamica.png";
import potencialesIcon from "../assets/m_termodinamica.png";
import termicasIcon from "../assets/m_termodinamica.png";
import ciclosterIcon from "../assets/m_termodinamica.png";
import cicloscombIcon from "../assets/m_termodinamica.png";
import transferenciaIcon from "../assets/m_termodinamica.png";
import aplicacionesterIcon from "../assets/m_termodinamica.png";
import estadisticaIcon from "../assets/m_termodinamica.png";`;

  const temasFisica = `export const temasFisica = [
  {
    tipo: "clasica",
    titulo: "Física Clásica",
    descripcion: "Mecánica, Termodinámica, Óptica, Electromagnetismo...",
    icono: m_clasica,
    btn: {
      texto: "Explorar",
      clase: "clasica",
      link: "/clasica",
    },
  },
  {
    tipo: "moderna",
    titulo: "Física Moderna",
    descripcion: "Relatividad, Cuántica, Física de partículas...",
    icono: m_moderna,
    btn: {
      texto: "Explorar",
      clase: "moderna",
      link: "/moderna",
    },
  },
];`;

  // Agregar estructura de física clásica
  const clasicaStructure = {
    title: "¿Qué es la Física Clásica?",
    intro: "La Física Clásica es la rama de la física que estudia los fenómenos naturales a escalas humanas, es decir, aquellos que ocurren a velocidades mucho menores que la de la luz y en cuerpos de gran tamaño comparados con átomos. Se ocupa de explicar el movimiento, las fuerzas, la energía y el equilibrio de los cuerpos, basándose en leyes formuladas entre los siglos XVII y XIX por científicos como Isaac Newton, Galileo Galilei y James Clerk Maxwell.",
    cards: [
      {
        tipo: "mecanica",
        titulo: "Mecánica",
        descripcion: "Movimiento y fuerzas.",
        icono: "mecanicaIcon",
        btn: {
          texto: "Explorar",
          clase: "mecanica",
          link: "/clasica/mecanica",
        },
      },
      {
        tipo: "termodinamica",
        titulo: "Termodinámica",
        descripcion: "Procesos de calor y energía.",
        icono: "termodinamicaIcon",
        btn: {
          texto: "Explorar",
          clase: "termodinamica",
          link: "/clasica/termodinamica",
        },
      },
      {
        tipo: "optica",
        titulo: "Óptica",
        descripcion: "Fenómenos de la luz.",
        icono: "opticaIcon",
        btn: { texto: "Explorar", clase: "optica", link: "/clasica/optica" },
      },
      {
        tipo: "electromagnetismo",
        titulo: "Electromagnetismo",
        descripcion: "Electricidad y magnetismo.",
        icono: "electromagnetismoIcon",
        btn: {
          texto: "Explorar",
          clase: "electromagnetismo",
          link: "/clasica/electromagnetismo",
        },
      },
      {
        tipo: "acustica",
        titulo: "Acústica",
        descripcion: "Propagación de energía y vibraciones.",
        icono: "acusticaIcon",
        btn: {
          texto: "Explorar",
          clase: "acustica",
          link: "/clasica/acustica",
        },
      },
      {
        tipo: "hidrostatica",
        titulo: "Hidrostática",
        descripcion: "Comportamiento de líquidos y gases.",
        icono: "hidrostaticaIcon",
        btn: {
          texto: "Explorar",
          clase: "hidrostatica",
          link: "/clasica/hidrostatica",
        },
      },
    ],
  };

  const modernaStructure = {
    title: "¿Qué es la Física Moderna?",
    intro: "La física moderna revolucionó nuestra comprensión del universo a escalas muy pequeñas y a velocidades cercanas a la de la luz. Se basa en dos pilares: la teoría de la relatividad de Einstein, que describe el espacio-tiempo y la gravedad, y la mecánica cuántica, que explora el comportamiento de la materia y la energía a nivel atómico y subatómico. Juntas, estas teorías explican desde los agujeros negros hasta el funcionamiento de los láseres y los semiconductores.",
    cards: [
      {
        tipo: "relatividad",
        titulo: "Relatividad",
        descripcion: "La teoría de la relatividad de Einstein revolucionó nuestra forma de entender el espacio, el tiempo y la gravedad.",
        icono: "m_moderna",
        btn: {
          texto: "Explorar",
          clase: "relatividad",
          link: "/moderna/relatividad",
        },
      },
      {
        tipo: "cuantica",
        titulo: "Mecánica Cuántica",
        descripcion: "La mecánica cuántica es la rama de la física que estudia el comportamiento de la materia a escalas atómicas y subatómicas.",
        icono: "m_moderna",
        btn: {
          texto: "Explorar",
          clase: "cuantica",
          link: "/moderna/cuantica",
        },
      },
    ],
  };

  // Agregar mecánica
  const mecanicaStructure = {
    title: "¿Qué es la Mecánica? ¿Cuáles son las ramas principales?",
    intro: "La física mecánica es la rama de la física que estudia el movimiento de los cuerpos y las fuerzas que lo producen o lo modifican. Analiza cómo los objetos se desplazan, cómo reaccionan ante fuerzas externas y cómo se comportan en equilibrio o movimiento. Es una de las áreas más antiguas de la física y la base sobre la que se construyen muchas otras disciplinas científicas.",
    cards: [
      {
        tipo: "cinematica",
        titulo: "Cinemática",
        descripcion: "Estudia el movimiento sin considerar sus causas.",
        icono: "cinematicaIcon",
        btn: {
          texto: "Explorar",
          clase: "cinematica",
          link: "/clasica/mecanica/cinematica",
        },
      },
      {
        tipo: "dinamica",
        titulo: "Dinámica",
        descripcion: "Analiza las causas del movimiento: fuerzas y leyes.",
        icono: "dinamicaIcon",
        btn: {
          texto: "Explorar",
          clase: "dinamica",
          link: "/clasica/mecanica/dinamica",
        },
      },
      {
        tipo: "estatica",
        titulo: "Estática",
        descripcion: "Estudia los cuerpos en equilibrio y las fuerzas que actúan sobre ellos.",
        icono: "estaticaIcon",
        btn: {
          texto: "Explorar",
          clase: "estatica",
          link: "/clasica/mecanica/estatica",
        },
      },
    ],
    additionalContent: `
        <h3>Comparativa rápida</h3>
        <ul>
          <li><b>Cinemática:</b> Describe el movimiento sin analizar sus causas.</li>
          <li><b>Dinámica:</b> Explica el movimiento considerando las fuerzas que lo producen.</li>
          <li><b>Estática:</b> Estudia el equilibrio de los cuerpos y las fuerzas en reposo.</li>
        </ul>
    `,
  };

  const allTopics = {
    clasica: clasicaStructure,
    moderna: modernaStructure,
    mecanica: mecanicaStructure,
    ...topicsData
  };

  const topicsExport = `export const topicsData = ${JSON.stringify(allTopics, null, 2)};`;

  return `${imports}

${temasFisica}

${topicsExport}`;
}

/**
 * Función principal
 */
async function main() {
  console.log('🔄 Generando topics.js dinámicamente...');
  
  try {
    // Escanear directorios principales
    const mainDirs = ['cinematica', 'dinamica', 'estatica', 'electromagnetismo'];
    const structure = [];
    
    for (const dir of mainDirs) {
      console.log(`📁 Procesando ${dir}...`);
      const topicStructure = await generateTopicStructure(dir);
      if (topicStructure) {
        structure.push(topicStructure);
      }
    }
    
    // Convertir a formato topics.js
    const topicsData = convertToTopicsFormat(structure);
    
    // Generar contenido del archivo
    const fileContent = generateTopicsFileContent(topicsData);
    
    // Escribir archivo
    const outputPath = path.join(__dirname, '..', 'src', 'data', 'topics.generated.js');
    await fs.writeFile(outputPath, fileContent, 'utf-8');
    
    console.log('✅ topics.generated.js creado exitosamente');
    console.log(`📊 Temas generados: ${Object.keys(topicsData).length}`);
    
    // Mostrar estructura generada
    console.log('\n📋 Estructura generada:');
    Object.keys(topicsData).forEach(key => {
      const topic = topicsData[key];
      console.log(`  ${key}: ${topic.title} (${topic.cards?.length || 0} subtemas)`);
    });
    
  } catch (error) {
    console.error('❌ Error generando topics.js:', error);
    process.exit(1);
  }
}

// Ejecutar si es llamado directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}