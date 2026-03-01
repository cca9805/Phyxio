#!/usr/bin/env node

/**
 * Genera estructura jerárquica de niveles educativos
 * Organiza los temas por niveles (ESO, BACHILLERATO, UNIVERSIDAD)
 * manteniendo la jerarquía anidada de la estructura por temas
 */

const fs = require('fs');
const path = require('path');

const TOPICS_FILE = path.join(__dirname, '../src/data/topics.generated.js');
const EDUCATION_FILE = path.join(__dirname, 'education-themes-generated.js');
const OUTPUT_FILE = path.join(__dirname, '../src/data/educationLevels.generated.js');

console.log('🔧 Generando estructura jerárquica de niveles educativos...\n');

try {
  // Leer el archivo de educación plano
  const educationContent = fs.readFileSync(EDUCATION_FILE, 'utf8');
  
  // Extraer todos los temas con sus niveles
  const themeMatches = educationContent.matchAll(/\{\s*path:\s*'([^']+)',\s*titulo:\s*'([^']+)',\s*categoria:\s*'([^']+)',\s*educationLevel:\s*'([^']+)'\s*\}/g);
  
  const themesByLevel = {
    ESO: [],
    BACHILLERATO: [],
    UNIVERSIDAD: [],
    MASTER: []
  };
  
  for (const match of themeMatches) {
    const [, path, titulo, categoria, level] = match;
    themesByLevel[level].push({ path, titulo, categoria });
  }
  
  console.log('📊 Temas encontrados:');
  Object.keys(themesByLevel).forEach(level => {
    console.log(`  ${level}: ${themesByLevel[level].length} temas`);
  });
  
  // Leer topics.generated.js para obtener la estructura completa
  const topicsContent = fs.readFileSync(TOPICS_FILE, 'utf8');
  
  // Función para construir el árbol jerárquico
  function buildHierarchy(themes, level) {
    const tree = {
      clasica: {
        title: 'Física Clásica',
        nivel: level,
        intro: `Temas de Física Clásica para ${level}`,
        cards: []
      }
    };
    
    // Agrupar temas por primer nivel (mecanica, optica, termodinamica, etc)
    const gruposPrincipales = {};
    
    themes.forEach(({ path, titulo, categoria }) => {
      const parts = path.split('/');
      const primerNivel = parts[0];
      
      if (!gruposPrincipales[primerNivel]) {
        gruposPrincipales[primerNivel] = [];
      }
      
      gruposPrincipales[primerNivel].push({ path, titulo, categoria, parts });
    });
    
    // Construir estructura para cada grupo principal
    Object.keys(gruposPrincipales).sort().forEach(grupoPrincipal => {
      const temasGrupo = gruposPrincipales[grupoPrincipal];
      
      // Crear card principal
      const cardPrincipal = {
        tipo: grupoPrincipal,
        titulo: capitalizeWords(grupoPrincipal.replace(/_/g, ' ')),
        nivel: level,
        categoria: grupoPrincipal,
        link: `/clasica/${grupoPrincipal}`,
        cards: []
      };
      
      // Agrupar por segundo nivel
      const gruposSecundarios = {};
      
      temasGrupo.forEach(({ path, titulo, categoria, parts }) => {
        if (parts.length === 1) {
          // Es un tema directo sin subniveles
          cardPrincipal.isDirectTopic = true;
          cardPrincipal.path = path;
        } else {
          const segundoNivel = parts[1];
          
          if (!gruposSecundarios[segundoNivel]) {
            gruposSecundarios[segundoNivel] = [];
          }
          
          gruposSecundarios[segundoNivel].push({ path, titulo, categoria, parts });
        }
      });
      
      // Construir cards secundarias
      Object.keys(gruposSecundarios).sort().forEach(grupoSecundario => {
        const temasSecundarios = gruposSecundarios[grupoSecundario];
        
        const cardSecundaria = {
          tipo: grupoSecundario,
          titulo: capitalizeWords(grupoSecundario.replace(/_/g, ' ')),
          nivel: level,
          categoria: temasSecundarios[0].categoria,
          link: `/clasica/${grupoPrincipal}/${grupoSecundario}`,
          cards: []
        };
        
        // Agrupar por tercer nivel
        const gruposTerciarios = {};
        
        temasSecundarios.forEach(({ path, titulo, categoria, parts }) => {
          if (parts.length === 2) {
            // Es un tema directo del segundo nivel
            cardSecundaria.isDirectTopic = true;
            cardSecundaria.path = path;
          } else {
            const tercerNivel = parts[2];
            
            if (!gruposTerciarios[tercerNivel]) {
              gruposTerciarios[tercerNivel] = [];
            }
            
            gruposTerciarios[tercerNivel].push({ path, titulo, categoria, parts });
          }
        });
        
        // Construir cards terciarias
        Object.keys(gruposTerciarios).sort().forEach(grupoTerciario => {
          const temasTerciarios = gruposTerciarios[grupoTerciario];
          
          const cardTerciaria = {
            tipo: grupoTerciario,
            titulo: temasTerciarios[0].titulo,
            nivel: level,
            categoria: temasTerciarios[0].categoria,
            link: `/clasica/${grupoPrincipal}/${grupoSecundario}/${grupoTerciario}`,
            cards: []
          };
          
          // Temas finales del tercer nivel
          temasTerciarios.forEach(({ path, titulo, categoria, parts }) => {
            if (parts.length === 3) {
              cardTerciaria.isDirectTopic = true;
              cardTerciaria.path = path;
            } else if (parts.length === 4) {
              // Tema final (cuarto nivel)
              cardTerciaria.cards.push({
                tipo: parts[3],
                titulo: titulo,
                nivel: level,
                categoria: categoria,
                path: path,
                link: `/clasica/${path}`,
                isDirectTopic: true
              });
            }
          });
          
          cardSecundaria.cards.push(cardTerciaria);
        });
        
        cardPrincipal.cards.push(cardSecundaria);
      });
      
      tree.clasica.cards.push(cardPrincipal);
    });
    
    return tree;
  }
  
  // Función auxiliar para capitalizar palabras
  function capitalizeWords(str) {
    return str.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  // Generar estructuras para cada nivel
  const structures = {};
  
  Object.keys(themesByLevel).forEach(level => {
    if (themesByLevel[level].length > 0) {
      structures[level] = buildHierarchy(themesByLevel[level], level);
    }
  });
  
  // Generar el archivo de salida
  const output = `// Auto-generated file - DO NOT EDIT MANUALLY
// Generated by scripts/generate-hierarchical-levels.cjs
// Run: node scripts/generate-hierarchical-levels.cjs

/**
 * Estructura jerárquica de temas por nivel educativo
 * Organiza los temas de física según el nivel educativo español (LOMLOE)
 * manteniendo la jerarquía anidada de la estructura por temas
 */

export const educationLevels = ${JSON.stringify(structures, null, 2)};

export default educationLevels;
`;
  
  fs.writeFileSync(OUTPUT_FILE, output, 'utf8');
  
  console.log('\n✅ Archivo generado exitosamente:');
  console.log(`   ${OUTPUT_FILE}`);
  console.log(`\n📊 Estadísticas:`);
  Object.keys(structures).forEach(level => {
    console.log(`  ${level}: Estructura jerárquica creada`);
  });
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
