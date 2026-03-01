/**
 * EJEMPLO DE USO: educationLevels.generated.js
 * 
 * Este archivo contiene la estructura jerárquica de temas organizados por nivel educativo.
 * La estructura mantiene la misma jerarquía anidada que topics.generated.js
 */

import { educationLevels } from './educationLevels.generated.js';

// ============================================
// EJEMPLO 1: Acceder a temas de BACHILLERATO
// ============================================

const bachillerato = educationLevels.BACHILLERATO;

// Navegar a Física Clásica
const clasica = bachillerato.clasica;
console.log('Nivel:', clasica.nivel); // "BACHILLERATO"
console.log('Título:', clasica.title); // "Física Clásica"

// Navegar a Mecánica
const mecanica = clasica.subsecciones.mecanica;
console.log('Mecánica:', mecanica.titulo);

// Navegar a Cinemática
const cinematica = mecanica.subsecciones.cinematica;
console.log('Cinemática:', cinematica.titulo);
console.log('Path:', cinematica.path); // "mecanica/cinematica"

// Acceder a un tema final (MRU)
const mru = cinematica.subsecciones.mru;
console.log('MRU:', mru.titulo);
console.log('Path completo:', mru.path); // "mecanica/cinematica/mru"

// ============================================
// EJEMPLO 2: Acceder a Óptica en BACHILLERATO
// ============================================

const optica = bachillerato.clasica.subsecciones.optica;

// Óptica Geométrica
const opticaGeometrica = optica.subsecciones.optica_geometrica;
const reflexion = opticaGeometrica.subsecciones.reflexion_y_espejos;
console.log('Reflexión:', reflexion.titulo);
console.log('Path:', reflexion.path); // "optica/optica_geometrica/reflexion_y_espejos"

// Óptica Física
const opticaFisica = optica.subsecciones.optica_fisica;
const difraccion = opticaFisica.subsecciones.difraccion;
console.log('Difracción:', difraccion.titulo);
console.log('Path:', difraccion.path); // "optica/optica_fisica/difraccion"

// ============================================
// EJEMPLO 3: Listar todos los temas de ESO
// ============================================

const eso = educationLevels.ESO;

function listarTemasFinales(seccion, nivel = 0) {
  const indent = '  '.repeat(nivel);
  
  if (seccion.path) {
    // Es un tema final (tiene path)
    console.log(`${indent}📄 ${seccion.titulo} (${seccion.path})`);
  } else if (seccion.subsecciones) {
    // Es una categoría con subsecciones
    console.log(`${indent}📁 ${seccion.titulo || seccion.title}`);
    Object.values(seccion.subsecciones).forEach(sub => {
      listarTemasFinales(sub, nivel + 1);
    });
  }
}

console.log('\n=== TEMAS DE ESO ===');
listarTemasFinales(eso.clasica);

// ============================================
// EJEMPLO 4: Buscar un tema por path
// ============================================

function buscarTemaPorPath(estructuraNivel, pathBuscado) {
  function buscar(seccion) {
    if (seccion.path === pathBuscado) {
      return seccion;
    }
    
    if (seccion.subsecciones) {
      for (const sub of Object.values(seccion.subsecciones)) {
        const resultado = buscar(sub);
        if (resultado) return resultado;
      }
    }
    
    return null;
  }
  
  return buscar(estructuraNivel.clasica);
}

const termodinamica = buscarTemaPorPath(
  educationLevels.BACHILLERATO,
  'termodinamica/02_magnitudes_termicas/temperatura'
);

if (termodinamica) {
  console.log('\nTema encontrado:');
  console.log('  Título:', termodinamica.titulo);
  console.log('  Categoría:', termodinamica.categoria);
  console.log('  Nivel:', termodinamica.nivel);
  console.log('  Path:', termodinamica.path);
}

// ============================================
// EJEMPLO 5: Contar temas por categoría
// ============================================

function contarTemasPorCategoria(estructuraNivel) {
  const contadores = {};
  
  function contar(seccion) {
    if (seccion.path && seccion.categoria) {
      contadores[seccion.categoria] = (contadores[seccion.categoria] || 0) + 1;
    }
    
    if (seccion.subsecciones) {
      Object.values(seccion.subsecciones).forEach(contar);
    }
  }
  
  contar(estructuraNivel.clasica);
  return contadores;
}

const temasBackBachillerato = contarTemasPorCategoria(educationLevels.BACHILLERATO);
console.log('\n=== TEMAS POR CATEGORÍA (BACHILLERATO) ===');
Object.entries(temasBackBachillerato).forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count} temas`);
});

// ============================================
// EJEMPLO 6: Generar breadcrumbs desde el path
// ============================================

function generarBreadcrumbs(path) {
  const partes = path.split('/');
  const breadcrumbs = ['Clásica'];
  
  breadcrumbs.push(...partes.map(p => {
    return p.replace(/_/g, ' ')
            .replace(/\b\w/g, l => l.toUpperCase());
  }));
  
  return breadcrumbs.join(' > ');
}

console.log('\n=== EJEMPLOS DE BREADCRUMBS ===');
console.log(generarBreadcrumbs('mecanica/cinematica/mru'));
console.log(generarBreadcrumbs('optica/optica_fisica/difraccion'));
console.log(generarBreadcrumbs('termodinamica/02_magnitudes_termicas/temperatura'));
