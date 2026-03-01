#!/usr/bin/env node

/**
 * Script para generar sidebarItems.js desde hierarchicalStructure.js
 * Uso: node scripts/generateSidebarFromHierarchy.js
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { thermodynamicsHierarchy } from '../src/data/termodinamica/hierarchicalStructure.js';
import { hierarchyConfig } from '../src/data/hierarchy-config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = path.join(__dirname, '../src/data/sidebarItems.generated.js');

// Iconos por defecto para cada categoría
const CATEGORY_ICONS = {
  'clasica': 'bi-book-half',
  'moderna': 'bi-atom',
  'mecanica': 'bi-gear-wide-connected',
  'cinematica': 'bi-signpost-split',
  'dinamica': 'bi-hammer',
  'estatica': 'bi-building',
  'termodinamica': 'bi-thermometer-half',
  'electromagnetismo': 'bi-lightning-charge',
  'electricidad': 'bi-plug',
  'magnetismo': 'bi-magnet',
  'electronica': 'bi-cpu',
  'ondas': 'bi-broadcast',
  'maxwell': 'bi-diagram-3',
  'optica': 'bi-eye',
  'acustica': 'bi-soundwave',
  'hidrostatica': 'bi-droplet'
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
  'rayos-x-gamma': 'Rayos X y Gamma'
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

function getIcon(key) {
  return CATEGORY_ICONS[key] || 'bi-circle';
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
      iconClass: getIcon(childKey)
    };
    
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
        iconClass: 'bi-thermometer'
      };
      
      if (topic.subtopics && topic.subtopics.length > 0) {
        topicItem.children = topic.subtopics.map(subtopic => ({
          label: subtopic.title,
          link: `/clasica/termodinamica/${topic.id}/${subtopic.id}`,
          iconClass: 'bi-file-text'
        }));
      }
      
      items.push(topicItem);
    }
  }
  
  return items;
}

function generateSidebarItems() {
  const sidebarItems = [];
  
  // Física Clásica
  const clasicaChildren = [];
  
  // Mecánica
  const mecanicaChildren = buildSidebarFromHierarchy('mecanica', '/clasica/mecanica');
  if (mecanicaChildren) {
    clasicaChildren.push({
      label: 'Mecánica',
      link: '/clasica/mecanica',
      iconClass: 'bi-gear-wide-connected',
      children: mecanicaChildren
    });
  }
  
  // Termodinámica
  const termodinamicaChildren = buildThermodynamicsSidebar();
  if (termodinamicaChildren.length > 0) {
    clasicaChildren.push({
      label: 'Termodinámica',
      link: '/clasica/termodinamica',
      iconClass: 'bi-thermometer-half',
      children: termodinamicaChildren
    });
  }
  
  // Electromagnetismo
  const electromagnetismoChildren = buildSidebarFromHierarchy('electromagnetismo', '/clasica/electromagnetismo');
  if (electromagnetismoChildren) {
    clasicaChildren.push({
      label: 'Electromagnetismo',
      link: '/clasica/electromagnetismo',
      iconClass: 'bi-lightning-charge',
      children: electromagnetismoChildren
    });
  }
  
  // Óptica
  clasicaChildren.push({
    label: 'Óptica',
    link: '/clasica/optica',
    iconClass: 'bi-eye'
  });
  
  // Acústica
  clasicaChildren.push({
    label: 'Acústica',
    link: '/clasica/acustica',
    iconClass: 'bi-soundwave'
  });
  
  // Hidrostática
  clasicaChildren.push({
    label: 'Hidrostática',
    link: '/clasica/hidrostatica',
    iconClass: 'bi-droplet'
  });
  
  sidebarItems.push({
    label: 'Física Clásica',
    link: '/clasica',
    iconClass: 'bi-book-half',
    children: clasicaChildren
  });
  
  // Física Moderna (placeholder)
  sidebarItems.push({
    label: 'Física Moderna',
    link: '/moderna',
    iconClass: 'bi-atom'
  });
  
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
