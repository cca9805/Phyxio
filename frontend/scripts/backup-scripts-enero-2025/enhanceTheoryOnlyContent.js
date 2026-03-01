import fs from 'fs';
import path from 'path';

// Contenido específico para cada subtema teórico
const theoryContent = {
  'introduccion_a_la_termodinamica': {
    titulo: 'Introducción a la Termodinámica',
    descripcion: 'Fundamentos históricos y conceptuales de la termodinámica como ciencia',
    keyPoints: [
      'Definición y alcance de la termodinámica',
      'Desarrollo histórico y científicos pioneros',
      'Relación con otras ramas de la física',
      'Aplicaciones en ingeniería y ciencias'
    ],
    learningObjectives: [
      'Definir qué es la termodinámica y su importancia',
      'Conocer el desarrollo histórico de la disciplina',
      'Identificar las aplicaciones principales',
      'Comprender la base conceptual de la materia'
    ],
    mainConcept: 'La termodinámica es la rama de la física que estudia las relaciones entre calor, trabajo, temperatura y energía.'
  },
  
  'sistemas_termodinamicos': {
    titulo: 'Sistemas Termodinámicos',
    descripcion: 'Clasificación y características de los sistemas termodinámicos',
    keyPoints: [
      'Definición de sistema termodinámico',
      'Clasificación: abiertos, cerrados y aislados',
      'Fronteras y límites del sistema',
      'Propiedades extensivas e intensivas'
    ],
    learningObjectives: [
      'Identificar diferentes tipos de sistemas',
      'Clasificar sistemas según sus características',
      'Distinguir entre propiedades extensivas e intensivas',
      'Definir correctamente las fronteras del sistema'
    ],
    mainConcept: 'Un sistema termodinámico es una porción del universo que se separa para su estudio mediante fronteras reales o imaginarias.'
  },
  
  'estado_y_equilibrio': {
    titulo: 'Estado y Equilibrio Termodinámico',
    descripcion: 'Conceptos de estado termodinámico y condiciones de equilibrio',
    keyPoints: [
      'Definición de estado termodinámico',
      'Variables de estado y funciones de estado',
      'Tipos de equilibrio: térmico, mecánico y químico',
      'Procesos cuasiestáticos y reversibles'
    ],
    learningObjectives: [
      'Definir el estado de un sistema termodinámico',
      'Identificar variables y funciones de estado',
      'Reconocer condiciones de equilibrio',
      'Comprender procesos cuasiestáticos'
    ],
    mainConcept: 'El estado termodinámico describe completamente las condiciones de un sistema en un momento dado.'
  },
  
  'frontera_y_entorno': {
    titulo: 'Frontera y Entorno',
    descripcion: 'Definición de fronteras del sistema y su interacción con el entorno',
    keyPoints: [
      'Concepto de frontera del sistema',
      'Tipos de fronteras: rígidas, móviles, permeables',
      'Definición del entorno o alrededores',
      'Interacciones sistema-entorno'
    ],
    learningObjectives: [
      'Definir correctamente las fronteras de un sistema',
      'Clasificar tipos de fronteras',
      'Identificar el entorno del sistema',
      'Analizar interacciones sistema-entorno'
    ],
    mainConcept: 'La frontera separa el sistema del entorno y determina qué interacciones son posibles entre ambos.'
  },
  
  'cero_principio': {
    titulo: 'Principio Cero de la Termodinámica',
    descripcion: 'Fundamento del concepto de temperatura y equilibrio térmico',
    keyPoints: [
      'Enunciado del principio cero',
      'Concepto de equilibrio térmico',
      'Definición operacional de temperatura',
      'Transitividad del equilibrio térmico'
    ],
    learningObjectives: [
      'Enunciar el principio cero correctamente',
      'Comprender el concepto de equilibrio térmico',
      'Relacionar el principio con la medición de temperatura',
      'Aplicar la transitividad del equilibrio'
    ],
    mainConcept: 'Si dos sistemas están en equilibrio térmico con un tercero, entonces están en equilibrio térmico entre sí.'
  },
  
  'tercera_ley_de_la_termodinamica': {
    titulo: 'Tercera Ley de la Termodinámica',
    descripcion: 'Comportamiento de la entropía en el cero absoluto',
    keyPoints: [
      'Enunciado de la tercera ley',
      'Concepto de cero absoluto',
      'Entropía de cristales perfectos',
      'Implicaciones prácticas y limitaciones'
    ],
    learningObjectives: [
      'Enunciar la tercera ley de la termodinámica',
      'Comprender el concepto de cero absoluto',
      'Relacionar con el comportamiento de la entropía',
      'Identificar aplicaciones prácticas'
    ],
    mainConcept: 'La entropía de un cristal perfecto en el cero absoluto es exactamente igual a cero.'
  },
  
  'formulaciones_equivalentes': {
    titulo: 'Formulaciones Equivalentes',
    descripcion: 'Diferentes enunciados equivalentes de las leyes termodinámicas',
    keyPoints: [
      'Enunciados de Kelvin-Planck y Clausius',
      'Equivalencia entre formulaciones',
      'Enunciados históricos importantes',
      'Aplicaciones de cada formulación'
    ],
    learningObjectives: [
      'Conocer diferentes enunciados de las leyes',
      'Demostrar equivalencia entre formulaciones',
      'Seleccionar la formulación más apropiada',
      'Aplicar cada enunciado correctamente'
    ],
    mainConcept: 'Las leyes termodinámicas pueden expresarse de múltiples formas equivalentes, cada una útil en diferentes contextos.'
  },
  
  'postulados': {
    titulo: 'Postulados de la Teoría Cinética',
    descripcion: 'Fundamentos teóricos de la teoría cinético-molecular',
    keyPoints: [
      'Postulados básicos de la teoría cinética',
      'Modelo de gas ideal',
      'Movimiento molecular aleatorio',
      'Colisiones elásticas'
    ],
    learningObjectives: [
      'Enunciar los postulados de la teoría cinética',
      'Comprender el modelo molecular de gases',
      'Relacionar postulados con propiedades macroscópicas',
      'Identificar limitaciones del modelo'
    ],
    mainConcept: 'La teoría cinética explica las propiedades macroscópicas de los gases basándose en el movimiento molecular.'
  },
  
  'interpretacion_estadistica': {
    titulo: 'Interpretación Estadística de la Entropía',
    descripcion: 'Fundamentos estadísticos del concepto de entropía',
    keyPoints: [
      'Relación de Boltzmann S = k ln W',
      'Concepto de microestados',
      'Probabilidad termodinámica',
      'Interpretación molecular de la entropía'
    ],
    learningObjectives: [
      'Comprender la interpretación estadística de entropía',
      'Relacionar microestados con entropía',
      'Aplicar la ecuación de Boltzmann',
      'Conectar aspectos microscópicos y macroscópicos'
    ],
    mainConcept: 'La entropía es una medida del número de microestados accesibles a un sistema macroscópico.'
  },
  
  'conceptos_basicos': {
    titulo: 'Conceptos Básicos de Transferencia de Calor',
    descripcion: 'Fundamentos de los mecanismos de transferencia de calor',
    keyPoints: [
      'Definición de transferencia de calor',
      'Mecanismos: conducción, convección, radiación',
      'Gradientes de temperatura',
      'Resistencia térmica'
    ],
    learningObjectives: [
      'Identificar mecanismos de transferencia de calor',
      'Comprender el papel de gradientes de temperatura',
      'Distinguir entre diferentes modos de transferencia',
      'Reconocer aplicaciones prácticas'
    ],
    mainConcept: 'La transferencia de calor ocurre por tres mecanismos fundamentales: conducción, convección y radiación.'
  },
  
  'microestados_y_macroestados': {
    titulo: 'Microestados y Macroestados',
    descripcion: 'Descripción microscópica y macroscópica de sistemas termodinámicos',
    keyPoints: [
      'Definición de microestado y macroestado',
      'Multiplicidad termodinámica',
      'Principio de equiprobabilidad',
      'Conexión con propiedades macroscópicas'
    ],
    learningObjectives: [
      'Distinguir entre microestados y macroestados',
      'Calcular multiplicidad de estados',
      'Aplicar principios estadísticos',
      'Relacionar con termodinámica clásica'
    ],
    mainConcept: 'Un macroestado puede realizarse mediante múltiples microestados, y su probabilidad depende de esta multiplicidad.'
  },
  
  'distribuciones_de_boltzmann_y_gibbs': {
    titulo: 'Distribuciones de Boltzmann y Gibbs',
    descripcion: 'Distribuciones estadísticas fundamentales en mecánica estadística',
    keyPoints: [
      'Distribución de Maxwell-Boltzmann',
      'Distribución canónica de Gibbs',
      'Factor de Boltzmann',
      'Aplicaciones en sistemas térmicos'
    ],
    learningObjectives: [
      'Comprender las distribuciones estadísticas',
      'Aplicar el factor de Boltzmann',
      'Relacionar con propiedades térmicas',
      'Conectar con termodinámica macroscópica'
    ],
    mainConcept: 'Las distribuciones estadísticas describen cómo se distribuye la energía entre las partículas de un sistema térmico.'
  }
};

// Función para actualizar el contenido de definitions.js
function updateTheoryDefinitions(subtopicPath, subtopicName) {
  const content = theoryContent[subtopicName];
  if (!content) return false;
  
  const definitionsContent = `import { formatNumber } from '../../../../utils/formatNumber';

// Este es un subtema puramente teórico - sin calculadoras
export const isTheoryOnly = true;

export const definitions = [
  // Subtema teórico: ${subtopicName}
  // No contiene calculadoras, solo conceptos y teoría
  {
    id: '${subtopicName}-conceptual',
    groupId: '${subtopicName}-theory',
    title: 'Conceptos Fundamentales',
    description: 'Este subtema se enfoca en conceptos teóricos y fundamentos sin fórmulas calculables.',
    type: 'theoretical',
    content: {
      mainConcepts: [],
      keyPrinciples: [],
      applications: []
    }
  }
];

// Conceptos clave para este subtema teórico
export const theoreticalConcepts = {
  mainTopic: '${content.titulo}',
  description: '${content.descripcion}',
  mainConcept: '${content.mainConcept}',
  keyPoints: [
    ${content.keyPoints.map(point => `'${point}'`).join(',\n    ')}
  ],
  learningObjectives: [
    ${content.learningObjectives.map(obj => `'${obj}'`).join(',\n    ')}
  ]
};`;

  const definitionsPath = path.join(subtopicPath, 'definitions.js');
  fs.writeFileSync(definitionsPath, definitionsContent, 'utf8');
  console.log(`✅ Enhanced definitions: ${subtopicName}`);
  return true;
}

// Función para actualizar el componente teoria.jsx
function updateTheoryComponent(subtopicPath, subtopicName) {
  const content = theoryContent[subtopicName];
  if (!content) return false;
  
  const componentName = subtopicName.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Theory';

  const teoriaContent = `import React from 'react';
import { TheorySection, Concept } from '../../../../components/TheoryV2.jsx';
import { theoreticalConcepts } from './definitions.js';

// Metadatos del tema teórico
export const metadata = {
  titulo: "${content.titulo}",
  descripcion: "${content.descripcion}",
  categoria: "termodinamica",
  subcategoria: "${path.basename(path.dirname(subtopicPath))}",
  tema: "${path.basename(path.dirname(subtopicPath))}",
  subtema: "${subtopicName}",
  icono: "${subtopicName}",
  palette: "blue", // Paleta azul para subtemas teóricos
  isTheoryOnly: true // Identificador de subtema teórico
};

const ${componentName} = () => {
  return (
    <>
      <TheorySection title="Conceptos Fundamentales" variant="theoretical">
        <div className="theory-only-intro">
          <p className="theory-description">
            <strong>{theoreticalConcepts.mainTopic}</strong> abarca {theoreticalConcepts.description.toLowerCase()}. 
            Este subtema se enfoca en el desarrollo conceptual y la comprensión teórica fundamental.
          </p>
          <div className="main-concept-highlight">
            <h4>Concepto Principal:</h4>
            <p className="main-concept">{theoreticalConcepts.mainConcept}</p>
          </div>
        </div>
        
        <Concept title="Fundamentos Teóricos" variant="conceptual">
          <div className="conceptual-content">
            <h4>Puntos Clave:</h4>
            <ul className="key-points-list">
              {theoreticalConcepts.keyPoints.map((point, index) => (
                <li key={index} className="key-point">{point}</li>
              ))}
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Objetivos de Aprendizaje" variant="theoretical">
        <Concept title="Competencias a Desarrollar" variant="learning">
          <div className="learning-objectives">
            <p>Al completar este subtema, deberías ser capaz de:</p>
            <ol className="objectives-list">
              {theoreticalConcepts.learningObjectives.map((objective, index) => (
                <li key={index} className="objective">{objective}</li>
              ))}
            </ol>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Importancia y Aplicaciones" variant="theoretical">
        <Concept title="Relevancia en Termodinámica" variant="importance">
          <div className="importance-content">
            <p>
              Este concepto es fundamental para comprender los principios más avanzados 
              de la termodinámica y establece las bases teóricas necesarias para el 
              estudio de temas más complejos y aplicaciones prácticas.
            </p>
          </div>
        </Concept>
        
        <Concept title="Contexto en Ingeniería" variant="application">
          <div className="application-content">
            <p>
              Aunque este subtema no incluye cálculos directos, los conceptos aquí 
              desarrollados son esenciales para la comprensión y aplicación correcta de 
              principios termodinámicos en la práctica profesional de la ingeniería.
            </p>
          </div>
        </Concept>
      </TheorySection>
    </>
  );
};

export default ${componentName};`;

  const teoriaPath = path.join(subtopicPath, 'teoria.jsx');
  fs.writeFileSync(teoriaPath, teoriaContent, 'utf8');
  console.log(`✅ Enhanced component: ${subtopicName}`);
  return true;
}

// Función para procesar un subtema teórico
function enhanceTheorySubtopic(subtopicPath) {
  const subtopicName = path.basename(subtopicPath);
  
  // Verificar si tiene contenido específico
  if (!theoryContent[subtopicName]) {
    return false;
  }
  
  console.log(`🔄 Enhancing theory subtopic: ${subtopicName}`);
  
  updateTheoryDefinitions(subtopicPath, subtopicName);
  updateTheoryComponent(subtopicPath, subtopicName);
  
  return true;
}

// Función para recorrer directorios recursivamente
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let enhancedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Verificar si es un subtema teórico
      const definitionsPath = path.join(fullPath, 'definitions.js');
      if (fs.existsSync(definitionsPath)) {
        try {
          const content = fs.readFileSync(definitionsPath, 'utf8');
          if (content.includes('export const isTheoryOnly = true')) {
            if (enhanceTheorySubtopic(fullPath)) {
              enhancedCount++;
            }
          }
        } catch (error) {
          // Continuar si no se puede leer el archivo
        }
      }
      
      // Seguir recursivamente
      enhancedCount += processDirectory(fullPath);
    }
  }
  
  return enhancedCount;
}

// Ejecutar el script
console.log('🎨 Iniciando mejora de contenido teórico...\n');

const thermodynamicsPath = 'src/data/termodinamica';
const enhancedCount = processDirectory(thermodynamicsPath);

console.log(`\n✅ Mejora completada!`);
console.log(`📊 Total de subtemas teóricos mejorados: ${enhancedCount}`);
console.log('\n🎯 Los subtemas teóricos ahora tienen:');
console.log('   • Contenido específico y detallado');
console.log('   • Conceptos principales claramente definidos');
console.log('   • Objetivos de aprendizaje específicos');
console.log('   • Estructura pedagógica mejorada');