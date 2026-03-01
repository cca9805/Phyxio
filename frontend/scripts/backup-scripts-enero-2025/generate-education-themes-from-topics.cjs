#!/usr/bin/env node

/**
 * Genera education-themes-generated.js desde topics.generated.js
 * Extrae TODOS los temas finales y asigna niveles educativos
 */

const fs = require('fs');
const path = require('path');

const TOPICS_FILE = path.join(__dirname, '../src/data/topics.generated.js');
const OUTPUT_FILE = path.join(__dirname, 'education-themes-generated.js');

console.log('🔧 Generando education-themes-generated.js desde topics.generated.js...\n');

// Leer topics.generated.js
const content = fs.readFileSync(TOPICS_FILE, 'utf8');

// Extraer todos los cards que tienen btn (son temas finales)
const cardRegex = /"tipo":\s*"([^"]+)"[\s\S]*?"titulo":\s*"([^"]+)"[\s\S]*?"btn":\s*\{[\s\S]*?"link":\s*"([^"]+)"/g;

const allThemes = [];
const seenPaths = new Set();
let match;

while ((match = cardRegex.exec(content)) !== null) {
  const [, tipo, titulo, link] = match;
  
  // Construir el path desde el link
  let path = link.replace(/^\//, ''); // Remover / inicial
  
  // Extraer categoría (primera parte del path)
  const pathParts = path.split('/');
  const categoria = pathParts.length > 1 ? pathParts[1] : pathParts[0];
  
  // Evitar duplicados
  if (seenPaths.has(path)) {
    continue;
  }
  seenPaths.add(path);
  
  // Asignar nivel educativo basado en la categoría y el tema
  let educationLevel = assignEducationLevel(tipo, path, categoria);
  
  allThemes.push({
    path,
    titulo,
    categoria,
    educationLevel
  });
}

console.log(`📊 Total de temas extraídos: ${allThemes.length}`);

// Agrupar por nivel educativo
const byLevel = {
  ESO: allThemes.filter(t => t.educationLevel === 'ESO'),
  BACHILLERATO: allThemes.filter(t => t.educationLevel === 'BACHILLERATO'),
  UNIVERSIDAD: allThemes.filter(t => t.educationLevel === 'UNIVERSIDAD'),
  MASTER: allThemes.filter(t => t.educationLevel === 'MASTER')
};

console.log('\n📊 Distribución por nivel:');
Object.entries(byLevel).forEach(([level, themes]) => {
  console.log(`  ${level}: ${themes.length} temas`);
});

// Generar archivo
const output = `// Lista completa de temas generada automáticamente
// Total: ${allThemes.length} temas
const allThemesMetadata = [
  // ========== ESO (${byLevel.ESO.length} temas) ==========
${byLevel.ESO.map(t => `  { path: '${t.path}', titulo: '${t.titulo}', categoria: '${t.categoria}', educationLevel: 'ESO' }`).join(',\n')},

  // ========== BACHILLERATO (${byLevel.BACHILLERATO.length} temas) ==========
${byLevel.BACHILLERATO.map(t => `  { path: '${t.path}', titulo: '${t.titulo}', categoria: '${t.categoria}', educationLevel: 'BACHILLERATO' }`).join(',\n')},

  // ========== UNIVERSIDAD (${byLevel.UNIVERSIDAD.length} temas) ==========
${byLevel.UNIVERSIDAD.map(t => `  { path: '${t.path}', titulo: '${t.titulo}', categoria: '${t.categoria}', educationLevel: 'UNIVERSIDAD' }`).join(',\n')}${byLevel.MASTER.length > 0 ? `,

  // ========== MASTER (${byLevel.MASTER.length} temas) ==========
${byLevel.MASTER.map(t => `  { path: '${t.path}', titulo: '${t.titulo}', categoria: '${t.categoria}', educationLevel: 'MASTER' }`).join(',\n')}` : ''}
];

export { allThemesMetadata };
export const educationThemes = allThemesMetadata;
`;

fs.writeFileSync(OUTPUT_FILE, output, 'utf8');

console.log('\n✅ Archivo generado exitosamente:', OUTPUT_FILE);
console.log(`📊 Total: ${allThemes.length} temas`);

/**
 * Asigna nivel educativo basándose en el tema y categoría
 */
function assignEducationLevel(tipo, path, categoria) {
  // Temas básicos para ESO
  const esoTopics = [
    'ondas_sonoras', 'propiedades_sonido',
    'corriente-ohm',
    'mru', 'mruv', // Cinemática básica
    'newton', 'friccion', 'equilibrio', // Dinámica básica
    '01_conceptos_fundamentales', 'estado_y_equilibrio', 'frontera_y_entorno',
    'introduccion_a_la_termodinamica', 'propiedades_termicas', 'sistemas_termodinamicos',
    'temperatura', 'calor', 'presion' // Termodinámica básica
  ];
  
  // Temas avanzados para MASTER/DOCTORADO
  const masterTopics = [
    'mecanica_analitica', 'hamiltoniana', 'lagrangiana',
    'termodinamica_estadistica', 'microestados_y_macroestados',
    'transiciones_de_fase', 'modelo_de_ising',
    'fisica_de_plasmas', 'optica_no_lineal'
  ];
  
  // Temas para UNIVERSIDAD
  const universidadTopics = [
    'gases_reales', 'ecuaciones_de_estado',
    'potenciales_termodinamicos', 'energia_libre_gibbs', 'energia_libre_helmholtz',
    'ciclos_combinados', 'cogeneracion',
    'fonones_modelo_debye', 'condensacion_bose_einstein', 'gas_de_fermi'
  ];
  
  // Asignar nivel
  if (esoTopics.includes(tipo) || path.includes('01_conceptos_fundamentales')) {
    return 'ESO';
  }
  
  if (masterTopics.includes(tipo) || 
      path.includes('mecanica_analitica') || 
      path.includes('13_termodinamica_estadistica') ||
      path.includes('fisica_de_plasmas')) {
    return 'UNIVERSIDAD'; // Por ahora no hay MASTER en el sistema
  }
  
  if (universidadTopics.includes(tipo) ||
      path.includes('potenciales_termodinamicos') ||
      path.includes('ciclos_combinados') ||
      path.includes('estadistica_cuantica')) {
    return 'UNIVERSIDAD';
  }
  
  // Por defecto: BACHILLERATO
  return 'BACHILLERATO';
}
