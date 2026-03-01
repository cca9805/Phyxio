#!/usr/bin/env node

/**
 * Script para generar sidebarItems.js desde hierarchicalStructure.js
 * Uso: node scripts/generateSidebarFromHierarchy.js
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { thermodynamicsHierarchy } from '../src/data/termodinamica/hierarchicalStructure.js';
import { hierarchyConfig } from '../src/config/hierarchy-config.js';
import { emojiMap } from '../src/config/emoji-map.js';
import { iconConfig, getIconForSection } from '../src/config/icon-config.js';
import fs2 from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = path.join(__dirname, '../src/data/sidebarItems.generated.js');
const TOPIC_META_FILE = path.join(__dirname, '../src/data/topicMetadata.generated.json');
const ICON_MAP_FILE = path.join(__dirname, '../src/data/iconMap.generated.json');

let topicMeta = {};
if (fs2.existsSync(TOPIC_META_FILE)) {
  try {
    topicMeta = JSON.parse(fs2.readFileSync(TOPIC_META_FILE, 'utf8'));
    console.log(`Loaded topic metadata: ${Object.keys(topicMeta).length} entries`);
  } catch (err) {
    console.warn('Failed to parse topicMetadata.generated.json:', err.message);
    topicMeta = {};
  }
} else {
  console.log('topicMetadata.generated.json not found, continuing without levels metadata');
}

let iconMap = {};
if (fs2.existsSync(ICON_MAP_FILE)) {
  try {
    iconMap = JSON.parse(fs2.readFileSync(ICON_MAP_FILE, 'utf8'));
    console.log(`Loaded icon map: ${Object.keys(iconMap).length} entries`);
  } catch (err) {
    console.warn('Failed to parse iconMap.generated.json:', err.message);
    iconMap = {};
  }
} else {
  console.log('iconMap.generated.json not found, will use hardcoded icons');
}

// DEPRECATED: Iconos ahora se obtienen de icon-config.js (fuente única de verdad)
// Este objeto ya no se usa, se mantiene comentado por referencia
const CATEGORY_ICONS_DEPRECATED = {
  // Principales
  'clasica': '🔬',
  'moderna': '📚',
  
  // Método Científico y todos sus subtemas (cada uno con icono específico)
  'metodo_cientifico': '🔬',
  'introduccion': '📖',
  'hipotesis_y_experimentacion': '🧪',
  'magnitudes_y_unidades': '📏',
  'errores_e_incertidumbre': '📊',
  'analisis_de_datos': '📈',
  'comunicacion_cientifica': '📝',
  
  // Introducción al Movimiento (ESO) y todos sus subtemas
  'introduccion_movimiento': '📖',
  'que_es_movimiento': '❓',
  'tipos_de_movimiento': '🔄',
  'graficas_basicas': '📊',
  'movimientos_cotidianos': '🚗',
  'profundizar_mas': '🔗',
  
  // Mecánica y todos sus subtemas
  'mecanica': '📚',
  'cinematica': '🏃',
  'dinamica': '💪',
  'estatica': '🏛️',
  'ondas_mecanicas': '🌊',
  'mecanica_analitica': '📚',
  'colisiones': '💥',
  'colisiones_elasticas': '🎱',
  'colisiones_inelasticas': '💢',
  'centro_masa': '🎯',
  'elasticidad_deformacion': '💪',
  'esfuerzo_deformacion': '💪',
  'modulos_elasticos': '📐',
  'ley_hooke': '🔗',
  'deformacion_vigas': '📏',
  'mas': '📚',
  'mcu': '📚',
  'mcua': '📚',
  'mp': '📚',
  'mr': '📚',
  'mru': '📚',
  'mruv': '📚',
  'equilibrio': '📚',
  'friccion': '📚',
  'gravitacion': '📚',
  'maquinas': '📚',
  'masaspoleas': '📚',
  'movcircular': '📚',
  'movimpulso': '📚',
  'newton': '📚',
  'oscilaciones': '📚',
  'rotacion': '📚',
  'trabajoenergia': '📚',
  'aplicaciones': '📚',
  'apoyos': '📚',
  'centro': '📚',
  'diagramas': '📚',
  'estabilidad': '📚',
  'estructuras': '📚',
  'friccionest': '📚',
  'momentos': '📚',
  'vectores': '📚',
  
  // Termodinámica y todos sus subtemas
  'termodinamica': '🌡️',
  
  // Electromagnetismo y todos sus subtemas
  'electromagnetismo': '⚡',
  'electricidad': '💡',
  'magnetismo': '🧲',
  'electronica': '💻',
  'ondas': '📡',
  'maxwell': '📚',
  'campos-electricos': '⚡',
  'capacidad': '🔋',
  'carga-fuerza': '➕',
  'corriente-ohm': '🔌',
  'circuitos': '🔗',
  'potencial': '💎',
  'campos': '🌐',
  'fuentescampo': '🎯',
  'induccion': '🔄',
  'magnetismo-basico': '🧲',
  'campos-fuerza': '💪',
  'fuentes-campo': '🎯',
  'semiconductores': '🔬',
  'dispositivos': '💡',
  'propagacion-fenomenos': '🌊',
  'radiacion-infrarroja': '🔴',
  'radiacion-ultravioleta': '🟣',
  'espectro-electromagnetico': '🌈',
  'luz-visible-optica': '💡',
  'ondas-radio-microondas': '📻',
  'rayos-x-gamma': '☢️',
  'aplicaciones-tecnologicas': '📱',
  'familias': '⚡',
  'fotonicos': '⚡',
  'capacidadelectrica': '⚡',
  'circuitosac': '⚡',
  'circuitoscc': '⚡',
  'transitorios': '⚡',
  'camposelectricos': '⚡',
  'cargafuerza': '⚡',
  'corriente': '⚡',
  'potencialenergiacapacidad': '⚡',
  
  // Óptica y todos sus subtemas
  'optica': '👁️',
  'optica_geometrica': '📐',
  'optica_fisica': '🌊',
  'fotometria': '💡',
  'reflexion_y_espejos': '🪞',
  'refraccion_y_lentes': '💎',
  'instrumentos_opticos': '🔬',
  'aberraciones_opticas': '👁️',
  'interferencia': '✨',
  'difraccion': '🌈',
  'polarizacion': '↕️',
  'dispersion': '💠',
  'flujo_luminoso': '💡',
  'intensidad_luminosa': '🔦',
  'iluminacion': '🌟',
  
  // Acústica y todos sus subtemas (🔊 según los cards)
  'acustica': '🔊',
  'ondas_sonoras': '🔊',
  'propiedades_sonido': '🔊',
  'fenomenos_acusticos': '🔊',
  'resonancia': '🔊',
  'efecto_doppler': '🔊',
  'acustica_arquitectonica': '🔊',
  
  // Hidrostática/Mecánica de Fluidos (💧 según los cards)
  'hidrostatica': '💧',
  'mecanica_de_fluidos': '💧',
  'estatica_de_fluidos': '💧',
  'dinamica_de_fluidos': '💧',
  'flujo_en_tuberias': '💧',
  'flujo_sobre_cuerpos': '💧',
  'maquinaria_de_fluidos': '💧',
  'analisis_dimensional_y_similitud': '💧',
  'conceptos_fundamentales': '💧',
  'densidad_presion': '💧',
  'presion': '💧',
  'presion_hidrostatica': '💧',
  'principio_pascal': '💧',
  'principio_arquimedes': '💧',
  'vasos_comunicantes': '💧',
  'flotacion': '💧',
  'flotabilidad_y_estabilidad': '💧',
  'fuerzas_sobre_superficies': '💧',
  'manometria': '💧',
  'ecuacion_de_bernoulli': '💧',
  'analisis_diferencial_de_fluidos': '💧',
  
  // Física de Plasmas y todos sus subtemas (☄️ según los cards)
  'fisica_plasmas': '☄️',
  'estados_materia_plasma': '☄️',
  'ionizacion_plasma': '☄️',
  'aplicaciones_plasma': '☄️',
  
  // Teoría de Campos Clásicos (🌐 según los cards)
  'teoria_campos_clasicos': '🌐',
  'campos_escalares': '🌐',
  'campos_vectoriales': '🌐',
  'ecuaciones_campo': '🌐'
};

// Mapeo de títulos con tildes
const TITLE_MAP = {
  'clasica': 'Física Clásica',
  'moderna': 'Física Moderna',
  'mecanica': 'Mecánica',
  'cinematica': 'Cinemática',
  'dinamica': 'Dinámica',
  'estatica': 'Estática',
  'termodinamica': 'Termodinámica',
  'electromagnetismo': 'Electromagnetismo',
  'electricidad': 'Electricidad',
  'magnetismo': 'Magnetismo',
  'electronica': 'Electrónica',
  'ondas': 'Ondas Electromagnéticas',
  'maxwell': 'Ecuaciones de Maxwell',
  'optica': 'Óptica',
  'acustica': 'Acústica',
  'hidrostatica': 'Hidrostática',
  'fisica_plasmas': 'Física de Plasmas',
  'mecanica_de_fluidos': 'Mecánica de Fluidos',
  'teoria_campos_clasicos': 'Teoría de Campos Clásicos',
  'ondas_mecanicas': 'Ondas Mecánicas',
  'mecanica_analitica': 'Mecánica Analítica',
  'metodo_cientifico': 'Método Científico',
  
  // Método Científico - Subtemas
  'introduccion': 'Introducción',
  'hipotesis_y_experimentacion': 'Hipótesis y Experimentación',
  'magnitudes_y_unidades': 'Magnitudes y Unidades',
  'errores_e_incertidumbre': 'Errores e Incertidumbre',
  'analisis_de_datos': 'Análisis de Datos',
  
  // Introducción al Movimiento (ESO) - Subtemas
  'introduccion_movimiento': 'Introducción al Movimiento',
  'que_es_movimiento': 'Qué es el Movimiento',
  'tipos_de_movimiento': 'Tipos de Movimiento',
  'graficas_basicas': 'Gráficas Básicas',
  'movimientos_cotidianos': 'Movimientos Cotidianos',
  'profundizar_mas': 'Profundizar Más',
  'comunicacion_cientifica': 'Comunicación Científica',
  
  // Ondas Mecánicas
  'conceptos_basicos': 'Conceptos Básicos',
  'ondas_transversales': 'Ondas Transversales',
  'ondas_longitudinales': 'Ondas Longitudinales',
  'superposicion': 'Superposición',
  'ondas_estacionarias': 'Ondas Estacionarias',
  'energia_ondas': 'Energía de Ondas',
  
  // Mecánica Analítica
  'coordenadas_generalizadas': 'Coordenadas Generalizadas',
  'lagrangiana': 'Lagrangiana',
  'hamiltoniana': 'Hamiltoniana',
  'principio_minima_accion': 'Principio de Mínima Acción',
  
  // Teoría de Campos Clásicos
  'campos_escalares': 'Campos Escalares',
  'campos_vectoriales': 'Campos Vectoriales',
  'ecuaciones_campo': 'Ecuaciones de Campo',
  
  // Física de Plasmas
  'estados_materia_plasma': 'Estados de la Materia - Plasma',
  'ionizacion_plasma': 'Ionización del Plasma',
  'aplicaciones_plasma': 'Aplicaciones del Plasma',
  
  // Mecánica
  'mas': 'MAS',
  'mcu': 'MCU',
  'mcua': 'MCUA',
  'mp': 'Movimiento Parabólico',
  'mr': 'Movimiento Relativo',
  'mru': 'MRU',
  'mruv': 'MRUV',
  'equilibrio': 'Equilibrio',
  'friccion': 'Fricción',
  'gravitacion': 'Gravitación',
  'maquinas': 'Máquinas Simples',
  'masaspoleas': 'Masas y Poleas',
  'movcircular': 'Movimiento Circular',
  'movimpulso': 'Momento e Impulso',
  'newton': 'Leyes de Newton',
  'oscilaciones': 'Oscilaciones',
  'rotacion': 'Rotación',
  'trabajoenergia': 'Trabajo y Energía',
  'colisiones': 'Colisiones',
  'colisiones_elasticas': 'Colisiones Elásticas',
  'colisiones_inelasticas': 'Colisiones Inelásticas',
  'centro_masa': 'Centro de Masa',
  'dispersion': 'Dispersión',
  
  // Estática
  'aplicaciones': 'Aplicaciones',
  'apoyos': 'Apoyos y Reacciones',
  'centro': 'Centro de Masa',
  'diagramas': 'Diagramas de Cuerpo Libre',
  'estabilidad': 'Estabilidad',
  'estructuras': 'Estructuras',
  'friccionest': 'Fricción Estática',
  'momentos': 'Momentos',
  'vectores': 'Vectores',
  'elasticidad_deformacion': 'Elasticidad y Deformación',
  'esfuerzo_deformacion': 'Esfuerzo y Deformación',
  'modulos_elasticos': 'Módulos Elásticos',
  'ley_hooke': 'Ley de Hooke',
  'deformacion_vigas': 'Deformación de Vigas',
  
  // Electricidad
  'campos-electricos': 'Campos Eléctricos',
  'capacidad': 'Capacidad Eléctrica',
  'carga-fuerza': 'Carga y Fuerza',
  'corriente-ohm': 'Corriente y Ley de Ohm',
  'potencial': 'Potencial Eléctrico',
  'circuitos': 'Circuitos',
  'circuitos-ca': 'Circuitos CA',
  'circuitos-cc': 'Circuitos CC',
  'transitorios': 'Transitorios',
  
  // Electrónica
  'dispositivos-fotonicos': 'Dispositivos Fotónicos',
  'dispositivos-semiconductores': 'Semiconductores',
  'familias-logicas': 'Familias Lógicas',
  
  // Magnetismo
  'campos-fuerza': 'Campos y Fuerza',
  'fuentes-campo': 'Fuentes de Campo',
  'induccion': 'Inducción',
  
  // Ondas
  'aplicaciones-tecnologicas': 'Aplicaciones Tecnológicas',
  'espectro-electromagnetico': 'Espectro Electromagnético',
  'luz-visible-optica': 'Luz Visible y Óptica',
  'ondas-radio-microondas': 'Ondas de Radio y Microondas',
  'propagacion-fenomenos': 'Propagación y Fenómenos',
  'radiacion-infrarroja': 'Radiación Infrarroja',
  'radiacion-ultravioleta': 'Radiación Ultravioleta',
  'rayos-x-gamma': 'Rayos X y Gamma',
  
  // Mecánica de Fluidos
  'estatica_de_fluidos': 'Estática de Fluidos',
  'dinamica_de_fluidos': 'Dinámica de Fluidos',
  'flujo_en_tuberias': 'Flujo en Tuberías',
  'flujo_sobre_cuerpos': 'Flujo sobre Cuerpos',
  'maquinaria_de_fluidos': 'Maquinaria de Fluidos',
  'analisis_dimensional_y_similitud': 'Análisis Dimensional y Similitud',
  'densidad_presion': 'Densidad y Presión',
  'presion_hidrostatica': 'Presión Hidrostática',
  'principio_pascal': 'Principio de Pascal',
  'principio_arquimedes': 'Principio de Arquímedes',
  'vasos_comunicantes': 'Vasos Comunicantes',
  'flotacion': 'Flotación',
  'flotabilidad_y_estabilidad': 'Flotabilidad y Estabilidad',
  'fuerzas_sobre_superficies': 'Fuerzas sobre Superficies',
  'manometria': 'Manometría',
  'ecuacion_de_bernoulli': 'Ecuación de Bernoulli',
  'analisis_diferencial_de_fluidos': 'Análisis Diferencial de Fluidos',
  
  // Acústica - ESO
  'ondas_sonoras': 'Ondas Sonoras',
  'propiedades_sonido': 'Propiedades del Sonido',
  'contaminacion_acustica': 'Contaminación Acústica',
  'oido_humano': 'El Oído Humano',
  'proteccion_auditiva': 'Protección Auditiva',
  
  // Acústica - Avanzada
  'fenomenos_acusticos': 'Fenómenos Acústicos',
  'resonancia': 'Resonancia',
  'efecto_doppler': 'Efecto Doppler',
  'acustica_arquitectonica': 'Acústica Arquitectónica',
  'psicoacustica': 'Psicoacústica',
  'ultrasonido': 'Ultrasonido',
  'acustica_musical': 'Acústica Musical'
};

function getTitle(key) {
  if (TITLE_MAP[key]) {
    return TITLE_MAP[key];
  }
  
  // Capitalizar automáticamente
  return key
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase());
}

// (Eliminado: búsqueda de iconos en la jerarquía por niveles — ya no se usan niveles)

function getIcon(key, iconValue = null, fullPath = '') {
  // 1. Si se proporciona un iconValue (del metadata), intentar usarlo
  if (iconValue) {
    // Buscar en emojiMap
    if (emojiMap[iconValue]) {
      return emojiMap[iconValue];
    }
    // Si no está en el mapa, usar directamente (puede ser un emoji)
    return iconValue;
  }
  
  // 2. Buscar en el iconMap generado desde los archivos teoria.jsx
  // Probar diferentes variantes de la clave
  const pathVariants = [
    key,
    fullPath.replace(/^\//, '').replace(/^clasica\//, ''),
    fullPath.replace(/^\//, ''),
    fullPath.split('/').slice(-1)[0],
    fullPath.split('/').slice(-2).join('/')
  ].filter(Boolean);
  
  for (const variant of pathVariants) {
    if (iconMap[variant]) {
      return iconMap[variant];
    }
  }
  
  // 3. Fallback: buscar en iconConfig centralizado
  return getIconForSection(key, emojiMap);
}

function buildSidebarFromHierarchy(parentKey, parentPath = '') {
  const children = hierarchyConfig[parentKey];
  
  if (!children || !Array.isArray(children)) {
    return null;
  }
  
  return children.map(childKey => {
    const childPath = parentPath ? `${parentPath}/${childKey}` : `/${childKey}`;
    const childChildren = buildSidebarFromHierarchy(childKey, childPath);
    
    const item = {
      label: getTitle(childKey),
      link: childPath,
      icon: getIcon(childKey, null, childPath)
    };

    // Attach levels metadata when available. Map link -> metadata key.
    try {
      let lookupKey = childPath;
      if (lookupKey.startsWith('/clasica/')) {
        lookupKey = lookupKey.slice('/clasica/'.length);
      } else if (lookupKey.startsWith('/')) {
        lookupKey = lookupKey.slice(1);
      }
      lookupKey = lookupKey.replace(/\/$/, '');

      const meta = topicMeta[lookupKey];
      if (meta && Array.isArray(meta.levels) && meta.levels.length > 0) {
        item.levels = meta.levels;
      }
    } catch (e) {
      // ignore
    }
    
    if (childChildren && childChildren.length > 0) {
      item.children = childChildren;
    }
    
    return item;
  });
}

function buildThermodynamicsSidebar() {
  const items = [];
  
  for (const level of thermodynamicsHierarchy.levels) {
    for (const topic of level.topics) {
      const topicItem = {
        label: topic.title,
        link: `/clasica/termodinamica/${topic.id}`,
        icon: '🌡️'
      };
      
      if (topic.subtopics && topic.subtopics.length > 0) {
        topicItem.children = topic.subtopics.map(subtopic => ({
          label: subtopic.title,
          link: `/clasica/termodinamica/${topic.id}/${subtopic.id}`,
          icon: '📄'
        }));
      }
      
      items.push(topicItem);
    }
  }
  
  return items;
}

function generateSidebarItems() {
  const sidebarItems = [];
  // Física Clásica (generada dinámicamente usando hierarchy-config)
  const clasicaChildren = [];

  // (Eliminado: construcción de agrupación "Básico (ESO)")

  // Recorremos las claves definidas en hierarchyConfig.clasica
  const clasicaKeys = hierarchyConfig['clasica'] || [];
  for (const key of clasicaKeys) {
    const link = `/clasica/${key}`;

    // Especial: termodinamica usa builder personalizado
    let fullChildren = null;
    if (key === 'termodinamica') {
      fullChildren = buildThermodynamicsSidebar();
    } else {
      fullChildren = buildSidebarFromHierarchy(key, link);
    }

    const node = {
      label: getTitle(key),
      link,
      icon: getIcon(key, null, link),
      children: []
    };

    // Agregar la vista completa si hay hijos completos
    if (fullChildren && fullChildren.length > 0) {
      node.children.push({
        label: getTitle(key),
        link: link,
        icon: getIcon(key, null, link),
        children: fullChildren
      });
    }

    // Si no hay children (ni basico ni completo), eliminar la propiedad children
    if (!node.children || node.children.length === 0) {
      delete node.children;
    }

    clasicaChildren.push(node);
  }

  sidebarItems.push({
    label: 'Física Clásica',
    link: '/clasica',
    icon: '🔬',
    children: clasicaChildren
  });
  
  // Física Moderna (placeholder)
  sidebarItems.push({
    label: 'Física Moderna',
    link: '/moderna',
    icon: '📚'
  });
  
  // Extraer temas avanzados (UNIVERSIDAD/GRADO/MASTER) desde topicMeta y agruparlos
  const ADV_LEVELS = new Set(['UNIVERSIDAD', 'GRADO', 'MASTER']);
  const advancedItems = [];

  function scanAndExtract(nodes, parent) {
    if (!nodes || !Array.isArray(nodes)) return;
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      // if node has explicit levels indicating advanced, extract it
      if (node.levels && node.levels.some(l => ADV_LEVELS.has(l))) {
        advancedItems.push(node);
        nodes.splice(i, 1);
        continue;
      }
      if (node.children) scanAndExtract(node.children, node);
      // after scanning children, if a node becomes empty (no children and no link), remove
      if (node.children && node.children.length === 0) {
        delete node.children;
      }
    }
  }

  // Run extraction on the main sidebar children (starting with Physics Classic and others)
  for (const root of sidebarItems) {
    if (root.children) scanAndExtract(root.children, root);
  }

  if (advancedItems.length > 0) {
    sidebarItems.push({
      label: 'Avanzado (Universidad)',
      link: '/avanzado',
      icon: '🎓',
      // Hidden by default in the UI — front-end can read this flag and collapse/hide
      hiddenByDefault: true,
      children: advancedItems
    });
  }
  
  return sidebarItems;
}

async function main() {
  console.log('🔄 Generando sidebarItems.js desde hierarchicalStructure.js...');
  
  const sidebarItems = generateSidebarItems();
  
  const content = `// Auto-generated file - DO NOT EDIT MANUALLY
// Generated by scripts/generateSidebarFromHierarchy.js
// Run: npm run generate:sidebar

export const sidebarItems = ${JSON.stringify(sidebarItems, null, 2)};
`;
  
  await fs.writeFile(OUTPUT_FILE, content, 'utf-8');
  
  console.log('✅ sidebarItems.generated.js creado exitosamente');
  console.log(`📊 Estructura generada con ${sidebarItems.length} categorías principales`);
}

main().catch(console.error);
