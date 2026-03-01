import fs from 'fs';
import path from 'path';

// Lista de subtemas que son puramente teóricos (sin fórmulas calculables)
const theoryOnlySubtopics = [
  // Conceptos Fundamentales
  'introduccion_a_la_termodinamica',
  'sistemas_termodinamicos',
  'estado_y_equilibrio',
  'frontera_y_entorno',
  
  // Principios (algunos conceptuales)
  'cero_principio',
  'tercera_ley_de_la_termodinamica',
  'formulaciones_equivalentes',
  
  // Modelos Moleculares (conceptos teóricos)
  'teoria_cinetica_de_los_gases/postulados',
  
  // Entropía (conceptos)
  'interpretacion_estadistica',
  
  // Aplicaciones (conceptos generales)
  'conceptos_basicos', // en transferencia de calor
  
  // Termodinámica Estadística
  'microestados_y_macroestados',
  'distribuciones_de_boltzmann_y_gibbs'
];

// Función para crear definitions.js para subtemas teóricos
function createTheoryOnlyDefinitions(subtopicPath, subtopicName) {
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
  mainTopic: '${subtopicName.replace(/_/g, ' ').replace(/\\b\\w/g, l => l.toUpperCase())}',
  description: 'Conceptos fundamentales y principios teóricos',
  keyPoints: [
    'Fundamentos conceptuales',
    'Principios teóricos',
    'Aplicaciones conceptuales',
    'Importancia en termodinámica'
  ],
  learningObjectives: [
    'Comprender los conceptos fundamentales',
    'Identificar principios clave',
    'Relacionar con aplicaciones prácticas',
    'Establecer bases teóricas sólidas'
  ]
};`;

  const definitionsPath = path.join(subtopicPath, 'definitions.js');
  fs.writeFileSync(definitionsPath, definitionsContent, 'utf8');
  console.log(`✅ Created theory-only definitions: ${definitionsPath}`);
}

// Función para crear teoria.jsx para subtemas teóricos
function createTheoryOnlyComponent(subtopicPath, subtopicName, metadata) {
  const componentName = subtopicName.split('_').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join('') + 'Theory';

  const teoriaContent = `import React from 'react';
import { TheorySection, Concept } from '../../../../components/TheoryV2.jsx';
import { theoreticalConcepts } from './definitions.js';

// Metadatos del tema teórico
export const metadata = {
  titulo: "${metadata.titulo}",
  descripcion: "${metadata.descripcion}",
  categoria: "termodinamica",
  subcategoria: "${metadata.subcategoria}",
  tema: "${metadata.tema}",
  subtema: "${metadata.subtema}",
  icono: "${metadata.icono}",
  palette: "blue", // Paleta azul para subtemas teóricos
  isTheoryOnly: true // Identificador de subtema teórico
};

const ${componentName} = () => {
  return (
    <>
      <TheorySection title="Conceptos Fundamentales" variant="theoretical">
        <div className="theory-only-intro">
          <p className="theory-description">
            <strong>{theoreticalConcepts.mainTopic}</strong> es un concepto fundamental en termodinámica 
            que abarca {theoreticalConcepts.description.toLowerCase()}. Este subtema se enfoca en 
            el desarrollo conceptual y la comprensión teórica sin fórmulas calculables.
          </p>
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

      <TheorySection title="Principios y Conceptos" variant="theoretical">
        <Concept title="Objetivos de Aprendizaje" variant="learning">
          <div className="learning-objectives">
            <p>Al completar este subtema, deberías ser capaz de:</p>
            <ol className="objectives-list">
              {theoreticalConcepts.learningObjectives.map((objective, index) => (
                <li key={index} className="objective">{objective}</li>
              ))}
            </ol>
          </div>
        </Concept>
        
        <Concept title="Importancia en Termodinámica" variant="importance">
          <div className="importance-content">
            <p>
              Este concepto es fundamental para comprender los principios más avanzados 
              de la termodinámica y establece las bases teóricas necesarias para el 
              estudio de temas más complejos.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones Conceptuales" variant="theoretical">
        <Concept title="Contexto en Ingeniería" variant="application">
          <div className="application-content">
            <p>
              Aunque este subtema no incluye cálculos directos, los conceptos aquí 
              desarrollados son esenciales para la comprensión y aplicación de 
              principios termodinámicos en la práctica ingenieril.
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
  console.log(`✅ Created theory-only component: ${teoriaPath}`);
}

// Función para procesar un subtema y convertirlo a teórico si corresponde
function processSubtopic(subtopicPath) {
  const subtopicName = path.basename(subtopicPath);
  
  // Verificar si es un subtema teórico
  const isTheoryOnly = theoryOnlySubtopics.some(topic => {
    const topicName = topic.split('/').pop(); // Obtener solo el nombre final
    return subtopicName === topicName || subtopicPath.includes(topic);
  });
  
  if (!isTheoryOnly) {
    return false; // No es un subtema teórico
  }
  
  console.log(`🔄 Processing theory-only subtopic: ${subtopicName}`);
  
  // Leer metadata existente si existe
  const teoriaPath = path.join(subtopicPath, 'teoria.jsx');
  let metadata = {
    titulo: subtopicName.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    descripcion: `Conceptos fundamentales de ${subtopicName.replace(/_/g, ' ')}`,
    subcategoria: path.basename(path.dirname(subtopicPath)),
    tema: path.basename(path.dirname(subtopicPath)),
    subtema: subtopicName,
    icono: subtopicName
  };
  
  // Intentar extraer metadata existente
  if (fs.existsSync(teoriaPath)) {
    try {
      const existingContent = fs.readFileSync(teoriaPath, 'utf8');
      const metadataMatch = existingContent.match(/export const metadata = ({[^}]+})/s);
      if (metadataMatch) {
        // Extraer título si existe
        const titleMatch = existingContent.match(/titulo: ["']([^"']+)["']/);
        if (titleMatch) metadata.titulo = titleMatch[1];
        
        const descMatch = existingContent.match(/descripcion: ["']([^"']+)["']/);
        if (descMatch) metadata.descripcion = descMatch[1];
      }
    } catch (error) {
      console.log(`⚠️ Could not parse existing metadata for ${subtopicName}`);
    }
  }
  
  // Crear archivos para subtema teórico
  createTheoryOnlyDefinitions(subtopicPath, subtopicName);
  createTheoryOnlyComponent(subtopicPath, subtopicName, metadata);
  
  return true;
}

// Función para recorrer directorios recursivamente
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let processedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Si es un directorio, verificar si es un subtema o seguir recursivamente
      const hasDefinitions = fs.existsSync(path.join(fullPath, 'definitions.js'));
      const hasTeoria = fs.existsSync(path.join(fullPath, 'teoria.jsx'));
      
      if (hasDefinitions && hasTeoria) {
        // Es un subtema, procesarlo
        console.log(`🔍 Found subtopic: ${path.basename(fullPath)} at ${fullPath}`);
        if (processSubtopic(fullPath)) {
          processedCount++;
        }
      }
      
      // Siempre seguir recursivamente para encontrar subtemas anidados
      processedCount += processDirectory(fullPath);
    }
  }
  
  return processedCount;
}

// Ejecutar el script
console.log('🔧 Iniciando conversión de subtemas teóricos...\n');

const thermodynamicsPath = 'src/data/termodinamica';
const processedCount = processDirectory(thermodynamicsPath);

console.log(`\n✅ Conversión completada!`);
console.log(`📊 Total de subtemas teóricos procesados: ${processedCount}`);
console.log('\n🎯 Los subtemas teóricos ahora tienen:');
console.log('   • Paleta de colores azul');
console.log('   • Estructura sin calculadoras');
console.log('   • Componentes especializados para teoría');
console.log('   • Identificador isTheoryOnly = true');