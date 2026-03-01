#!/usr/bin/env node

/**
 * Script para generar sidebarItems.js dinámicamente desde metadatos
 * Uso: node scripts/generateSidebar.js
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Importar configuración centralizada
import { SIDEBAR_ICONS, SIDEBAR_LABELS, CATEGORY_LABELS } from '../src/data/sidebarConfig.js';

/**
 * Extrae metadatos de un archivo teoria.jsx
 */
async function extractMetadataFromTheory(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    
    const metadataRegex = /export\s+const\s+metadata\s*=\s*({[\s\S]*?});/;
    const match = content.match(metadataRegex);
    
    if (match) {
      const metadataString = match[1]
        .replace(/(\w+):/g, '"$1":')
        .replace(/'/g, '"')
        .replace(/,(\s*})/g, '$1');
      
      try {
        const metadata = JSON.parse(metadataString);
        return metadata;
      } catch (parseError) {
        console.warn(`Error parsing metadata in ${filePath}:`, parseError.message);
        return null;
      }
    }
    
    return null;
  } catch (error) {
    console.warn(`No se pudo leer ${filePath}:`, error.message);
    return null;
  }
}

/**
 * Busca archivos teoria.jsx recursivamente
 */
async function findTheoryFiles(basePath, currentPath = '') {
  const topics = [];
  const fullPath = path.join(basePath, currentPath);
  
  try {
    const entries = await fs.readdir(fullPath, { withFileTypes: true });
    
    const hasTheory = entries.some(entry => entry.name === 'teoria.jsx');
    
    if (hasTheory) {
      const theoryPath = path.join(fullPath, 'teoria.jsx');
      const metadata = await extractMetadataFromTheory(theoryPath);
      
      if (metadata) {
        topics.push({
          path: currentPath,
          metadata,
          hasContent: true
        });
      }
    }
    
    const directories = entries.filter(entry => 
      entry.isDirectory() && !entry.name.startsWith('.')
    );
    
    for (const dir of directories) {
      const subPath = currentPath ? `${currentPath}/${dir.name}` : dir.name;
      const subTopics = await findTheoryFiles(basePath, subPath);
      topics.push(...subTopics);
    }
    
  } catch (error) {
    console.warn(`Error scanning ${fullPath}:`, error.message);
  }
  
  return topics;
}

/**
 * Organiza los temas en estructura jerárquica para sidebar
 */
function organizeForSidebar(topics) {
  const hierarchy = {};
  
  topics.forEach(topic => {
    const { categoria, subcategoria, tema, subtema, titulo } = topic.metadata;
    
    // Crear estructura jerárquica
    if (!hierarchy[categoria]) {
      hierarchy[categoria] = {};
    }
    
    if (subcategoria && !hierarchy[categoria][subcategoria]) {
      hierarchy[categoria][subcategoria] = {};
    }
    
    const targetLevel = subcategoria ? hierarchy[categoria][subcategoria] : hierarchy[categoria];
    
    if (!targetLevel[tema]) {
      targetLevel[tema] = [];
    }
    
    targetLevel[tema].push({
      subtema,
      titulo,
      path: topic.path,
      metadata: topic.metadata
    });
  });
  
  return hierarchy;
}

/**
 * Convierte jerarquía a formato sidebarItems
 */
function convertToSidebarFormat(hierarchy) {
  const sidebarItems = [
    {
      label: 'Física Clásica',
      link: '/clasica',
      iconClass: SIDEBAR_ICONS['clasica'],
      children: []
    },
    {
      label: 'Física Moderna',
      link: '/moderna',
      iconClass: SIDEBAR_ICONS['moderna'],
      children: [
        {
          label: 'Relatividad',
          link: '/moderna/relatividad',
          iconClass: 'bi-clock-history',
        },
        {
          label: 'Mecánica Cuántica',
          link: '/moderna/cuantica',
          iconClass: 'bi-diagram-3',
        }
      ]
    }
  ];
  
  const clasicaSection = sidebarItems[0];
  
  // Procesar cada categoría
  Object.entries(hierarchy).forEach(([categoria, subcategorias]) => {
    if (categoria === 'mecanica') {
      const mecanicaItem = {
        label: 'Mecánica',
        link: '/clasica/mecanica',
        iconClass: SIDEBAR_ICONS['mecanica'],
        children: []
      };
      
      // Procesar subcategorías de mecánica
      Object.entries(subcategorias).forEach(([subcategoria, temas]) => {
        const subcategoriaItem = {
          label: CATEGORY_LABELS[subcategoria] || getDisplayLabel(subcategoria),
          link: `/clasica/mecanica/${subcategoria}`,
          iconClass: SIDEBAR_ICONS[subcategoria] || SIDEBAR_ICONS['default'],
          children: []
        };
        
        // Procesar temas dentro de la subcategoría
        Object.entries(temas).forEach(([tema, subtemas]) => {
          subtemas.forEach(subtemaData => {
            const label = SIDEBAR_LABELS[subtemaData.titulo] || subtemaData.titulo;
            const icon = SIDEBAR_ICONS[subtemaData.subtema] || SIDEBAR_ICONS['default'];
            
            subcategoriaItem.children.push({
              label: label,
              link: `/clasica/${subtemaData.path}`,
              iconClass: icon
            });
          });
        });
        
        mecanicaItem.children.push(subcategoriaItem);
      });
      
      clasicaSection.children.push(mecanicaItem);
      
    } else if (categoria === 'electromagnetismo') {
      const electroItem = {
        label: 'Electromagnetismo',
        link: '/clasica/electromagnetismo',
        iconClass: SIDEBAR_ICONS['electromagnetismo'],
        children: []
      };
      
      // Procesar subcategorías de electromagnetismo
      Object.entries(subcategorias).forEach(([subcategoria, temas]) => {
        const subcategoriaItem = {
          label: CATEGORY_LABELS[subcategoria] || getDisplayLabel(subcategoria),
          link: `/clasica/electromagnetismo/${subcategoria}`,
          iconClass: SIDEBAR_ICONS[subcategoria] || SIDEBAR_ICONS['default'],
          children: []
        };
        
        // Procesar temas dentro de la subcategoría
        Object.entries(temas).forEach(([tema, subtemas]) => {
          subtemas.forEach(subtemaData => {
            const label = SIDEBAR_LABELS[subtemaData.titulo] || subtemaData.titulo;
            const icon = SIDEBAR_ICONS[subtemaData.subtema] || SIDEBAR_ICONS['default'];
            
            subcategoriaItem.children.push({
              label: label,
              link: `/clasica/${subtemaData.path}`,
              iconClass: icon
            });
          });
        });
        
        electroItem.children.push(subcategoriaItem);
      });
      
      clasicaSection.children.push(electroItem);
      
    } else {
      // Otras categorías (termodinámica, etc.)
      const categoriaItem = {
        label: CATEGORY_LABELS[categoria] || getDisplayLabel(categoria),
        link: `/clasica/${categoria}`,
        iconClass: SIDEBAR_ICONS[categoria] || SIDEBAR_ICONS['default']
      };
      
      clasicaSection.children.push(categoriaItem);
    }
  });
  
  return sidebarItems;
}

/**
 * Convierte nombres técnicos a etiquetas legibles
 */
function getDisplayLabel(key) {
  return key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
}

/**
 * Genera el contenido del archivo sidebarItems.js
 */
function generateSidebarFileContent(sidebarItems) {
  return `// Auto-generated file - DO NOT EDIT MANUALLY
// Generated by scripts/generateSidebar.js using metadata from teoria.jsx files
// Run: npm run generate:sidebar

export const sidebarItems = ${JSON.stringify(sidebarItems, null, 2)};
`;
}

/**
 * Función principal
 */
async function main() {
  console.log('🔄 Generando sidebarItems.js usando metadatos de teoria.jsx...');
  
  try {
    const basePath = path.join(__dirname, '..', 'src', 'data');
    
    // Escanear todos los archivos teoria.jsx
    console.log('📁 Escaneando archivos teoria.jsx...');
    const topics = await findTheoryFiles(basePath);
    
    console.log(`📊 Encontrados ${topics.length} archivos teoria.jsx`);
    
    // Organizar en jerarquía
    const hierarchy = organizeForSidebar(topics);
    
    // Convertir a formato sidebarItems
    const sidebarItems = convertToSidebarFormat(hierarchy);
    
    // Generar contenido del archivo
    const fileContent = generateSidebarFileContent(sidebarItems);
    
    // Escribir archivo
    const outputPath = path.join(__dirname, '..', 'src', 'data', 'sidebarItems.generated.js');
    await fs.writeFile(outputPath, fileContent, 'utf-8');
    
    console.log('✅ sidebarItems.generated.js creado exitosamente');
    console.log(`📊 Estructura generada con ${sidebarItems[0].children.length} categorías principales en Física Clásica`);
    
  } catch (error) {
    console.error('❌ Error generando sidebarItems.js:', error);
    process.exit(1);
  }
}

// Ejecutar
main().catch(console.error);