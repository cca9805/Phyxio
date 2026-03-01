#!/usr/bin/env node

/**
 * Script para completar automáticamente la estructura jerárquica
 * Usa hierarchy-config.js para generar todas las secciones faltantes
 */

import fs from 'fs';
import { hierarchyConfig } from '../src/data/hierarchy-config.js';

const TOPICS_FILE = 'src/data/topics.generated.js';

// Mapeo de iconos específicos (simplificado)
const iconMapping = {
  // Iconos principales
  'clasica': 'm_clasica',
  'moderna': 'm_moderna',
  'mecanica': 'mecanicaIcon',
  'termodinamica': 'termodinamicaIcon',
  'electromagnetismo': 'electromagnetismoIcon',
  'optica': 'opticaIcon',
  'acustica': 'acusticaIcon',
  'hidrostatica': 'hidrostaticaIcon',
  
  // Iconos de mecánica
  'cinematica': 'cinematicaIcon',
  'dinamica': 'dinamicaIcon',
  'estatica': 'estaticaIcon',
  
  // Iconos de cinemática
  'mru': 'mruIcon',
  'mruv': 'mruvIcon',
  'mcu': 'mcuIcon',
  'mcua': 'mcuaIcon',
  'mas': 'masIcon',
  'mp': 'mpIcon',
  'mr': 'mrIcon',
  
  // Iconos de dinámica
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
  
  // Iconos de estática
  'aplicaciones': 'aplicacionesIcon',
  'apoyos': 'apoyosIcon',
  'centro': 'centroIcon',
  'diagramas': 'diagramasIcon',
  'estabilidad': 'estabilidadIcon',
  'estructuras': 'estructurasIcon',
  'friccionest': 'friccionestIcon',
  'momentos': 'momentosIcon',
  'vectores': 'vectoresIcon',
  
  // Iconos de electromagnetismo
  'electricidad': 'electricidadIcon',
  'magnetismo': 'magnetismoIcon',
  'electronica': 'electronicaIcon',
  'ondas': 'ondaselectromagneticasIcon',
  'maxwell': 'maxwellIcon',
  
  // Iconos de electricidad
  'campos-electricos': 'camposelectricosIcon',
  'capacidad': 'capacidadelectricaIcon',
  'carga-fuerza': 'cargafuerzaIcon',
  'corriente-ohm': 'corrienteIcon',
  'potencial': 'potencialenergiacapacidadIcon',
  'circuitos': 'circuitosIcon',
  
  // Iconos de circuitos
  'circuitos-ca': 'circuitosacIcon',
  'circuitos-cc': 'circuitosccIcon',
  'transitorios': 'transitoriosIcon',
  
  // Iconos de electrónica
  'dispositivos-fotonicos': 'fotonicosIcon',
  'dispositivos-semiconductores': 'semiconductoresIcon',
  'familias-logicas': 'familiasIcon',
  
  // Iconos de magnetismo
  'campos-fuerza': 'camposIcon',
  'fuentes-campo': 'fuentescampoIcon',
  'induccion': 'induccionIcon',
  
  // Iconos de termodinámica
  '01_conceptos_fundamentales': 'conceptosIcon',
  '02_magnitudes_termicas': 'magnitudesIcon',
  '03_principios_de_la_termodinamica': 'principiosIcon',
  '04_modelos_moleculares_y_gases': 'modelosIcon',
  '05_entropia': 'entropiaIcon',
  '06_procesos_termodinamicos': 'procesosIcon',
  '07_potenciales_termodinamicos': 'potencialesIcon',
  '08_maquinas_termicas_y_refrigeracion': 'termicasIcon',
  '09_ciclos_termodinamicos': 'ciclosterIcon',
  '10_ciclos_combinados': 'cicloscombIcon',
  '11_transferencia_de_calor': 'transferenciaIcon',
  '12_aplicaciones_practicas': 'aplicacionesterIcon',
  '13_termodinamica_estadistica': 'estadisticaIcon',
  
  // Iconos específicos de termodinámica
  'calor': 'calorIcon',
  'temperatura': 'temperaturaIcon',
  'trabajo_termodinamico': 'trabajoIcon',
  'ley_cero': 'ceroIcon',
  'primera_ley': 'primeraIcon',
  'segunda_ley': 'segundaIcon',
  'tercera_ley': 'terceraIcon',
  'formulacion_matematica': 'formulacionIcon',
  'gases_ideales': 'idealesIcon',
  'gases_reales': 'realesIcon',
  'teoria_cinetica': 'teoriaIcon',
  'concepto_entropia': 'entropiaIcon',
  'entropia_estadistica': 'estadisticaentIcon',
  'entropia_gases_reales': 'realesentIcon',
  'segunda_ley_entropia': 'segundaentIcon',
  'proceso_isobarico': 'isobaricoIcon',
  'proceso_isocorico': 'isocoricoIcon',
  'proceso_isotermico': 'isotermicoIcon',
  'proceso_adiabatico': 'adiabaticoIcon',
  'energia_interna': 'energiainternaIcon',
  'entalpia': 'entalpiaIcon',
  'energia_libre_gibbs': 'gibbsIcon',
  'energia_libre_helmholtz': 'helmholtzIcon',
  'relaciones_maxwell': 'maxwellterIcon',
  'criterios_equilibrio': 'criteriosIcon',
  'maquinas_termicas': 'maquinasterIcon',
  'sistemas_refrigeracion': 'refrigeracionIcon',
  'ciclo_otto': 'ottoIcon',
  'ciclo_diesel': 'dieselIcon',
  'ciclo_brayton': 'braytonIcon',
  'ciclo_rankine': 'rankineIcon',
  'brayton_rankine': 'braytonrankinecombIcon',
  'cogeneracion': 'cogeneracionIcon',
  'rankine_gas': 'rankinegasIcon',
  'conceptos_basicos_transferencia': 'conceptosbasicosIcon',
  'conduccion': 'conduccionIcon',
  'conveccion': 'conveccionIcon',
  'radiacion': 'radiacionIcon',
  'aislamiento_termico': 'aislamientoIcon',
  'resistencia_termica': 'resistenciaIcon',
  'intercambiadores_calor': 'intercambioIcon',
  'bombas_calor': 'bombasIcon',
  'centrales_electricas': 'centraleselectricasIcon',
  'centrales_termicas': 'centralesIcon'
};

function readCurrentFile() {
  try {
    return fs.readFileSync(TOPICS_FILE, 'utf8');
  } catch (error) {
    console.error(`❌ Error leyendo ${TOPICS_FILE}:`, error.message);
    process.exit(1);
  }
}

function extractExistingSections(content) {
  const sections = new Set();
  const regex = /"([^"]+)":\s*\{/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    sections.add(match[1]);
  }
  
  return sections;
}

function capitalizeTitle(str) {
  return str
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .replace(/\d+\s+/, match => match); // Mantener números al inicio
}

function getIconForSection(sectionKey) {
  return iconMapping[sectionKey] || 'termodinamicaIcon';
}

function getPaletteForSection(sectionKey) {
  // Asignar paletas de colores por categoría
  if (sectionKey.startsWith('0') || sectionKey.includes('termo')) return 'orange';
  if (sectionKey.includes('electr') || sectionKey.includes('campo')) return 'blue';
  if (sectionKey.includes('magne')) return 'purple';
  if (sectionKey.includes('onda')) return 'green';
  if (sectionKey.includes('ciclo')) return 'red';
  return 'sky';
}

function generateLinkForSection(sectionKey, parentKey = '') {
  // Generar enlaces basados en la jerarquía
  if (parentKey === 'main') return `/${sectionKey}`;
  if (parentKey === 'clasica') return `/clasica/${sectionKey}`;
  if (parentKey) return `/clasica/${parentKey}/${sectionKey}`;
  return `/clasica/${sectionKey}`;
}

function generateSectionCode(sectionKey, parentKey = '') {
  const title = capitalizeTitle(sectionKey);
  const intro = `Estudio detallado de ${sectionKey.replace(/[-_]/g, ' ').toLowerCase()}`;
  const icon = getIconForSection(sectionKey);
  const palette = getPaletteForSection(sectionKey);
  const link = generateLinkForSection(sectionKey, parentKey);
  
  return `  "${sectionKey}": {
    "title": "${title}",
    "intro": "${intro}",
    "cards": [
      // TODO: Añadir contenido específico para ${sectionKey}
    ],
    "additionalContent": ""
  }`;
}

function generateModernaSection() {
  return `  "moderna": {
    "title": "Física Moderna",
    "intro": "La física moderna revolucionó nuestra comprensión del universo a escalas muy pequeñas y a velocidades cercanas a la de la luz",
    "cards": [
      {
        "tipo": "relatividad",
        "titulo": "Relatividad",
        "descripcion": "La teoría de la relatividad de Einstein revolucionó nuestra forma de entender el espacio, el tiempo y la gravedad.",
        "icono": "m_moderna",
        "btn": {
          "texto": "Explorar",
          "clase": "relatividad-btn",
          "link": "/moderna/relatividad"
        }
      },
      {
        "tipo": "cuantica",
        "titulo": "Mecánica Cuántica",
        "descripcion": "La mecánica cuántica es la rama de la física que estudia el comportamiento de la materia a escalas atómicas y subatómicas.",
        "icono": "m_moderna",
        "btn": {
          "texto": "Explorar",
          "clase": "cuantica-btn",
          "link": "/moderna/cuantica"
        }
      }
    ],
    "additionalContent": ""
  }`;
}

function generateMissingSections() {
  console.log('🔧 Completando estructura jerárquica automáticamente...\n');
  
  const content = readCurrentFile();
  const existingSections = extractExistingSections(content);
  
  let missingSections = [];
  let generatedCode = '';
  
  // Generar todas las secciones faltantes
  for (const [parentSection, childSections] of Object.entries(hierarchyConfig)) {
    if (parentSection === 'main') continue; // Skip main
    
    // Verificar sección padre
    if (!existingSections.has(parentSection) && Array.isArray(childSections)) {
      missingSections.push(parentSection);
      generatedCode += generateSectionCode(parentSection) + ',\n';
    }
    
    // Caso especial para 'moderna' que no tiene subsecciones en hierarchyConfig
    if (parentSection === 'main' && !existingSections.has('moderna')) {
      missingSections.push('moderna');
      generatedCode += generateModernaSection() + ',\n';
    }
    
    // Verificar subsecciones
    if (Array.isArray(childSections)) {
      for (const childSection of childSections) {
        if (!existingSections.has(childSection)) {
          missingSections.push(childSection);
          generatedCode += generateSectionCode(childSection, parentSection) + ',\n';
        }
      }
    }
  }
  
  if (generatedCode) {
    // Remover la última coma
    generatedCode = generatedCode.slice(0, -2);
    
    // Insertar el código antes del cierre del objeto
    const updatedContent = content.replace(
      /(\s*)\};\s*$/,
      `,\n${generatedCode}\n$1};\n`
    );
    
    // Escribir el archivo actualizado
    fs.writeFileSync(TOPICS_FILE, updatedContent, 'utf8');
    
    console.log(`✅ Se añadieron ${missingSections.length} secciones faltantes:`);
    missingSections.forEach(section => {
      console.log(`   + ${section}`);
    });
    
    return true;
  } else {
    console.log('✅ No hay secciones faltantes que añadir.');
    return false;
  }
}

// Ejecutar el completado automático
const sectionsAdded = generateMissingSections();

if (sectionsAdded) {
  console.log('\n🎉 Estructura jerárquica completada automáticamente!');
  console.log('💡 Ejecuta "npm run validate:hierarchy" para verificar el resultado.');
} else {
  console.log('\n✅ La estructura jerárquica ya está completa.');
}

process.exit(0);