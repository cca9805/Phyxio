#!/usr/bin/env node
// DEPRECATED: generate-education-levels-with-icons
// No-op replacement to prevent tooling/CI from failing.

console.log('generate-education-levels-with-icons: deprecated — no action taken.');
process.exit(0);
#!/usr/bin/env node
// DEPRECATED: generate-education-levels-with-icons
// This script used to build an education-specific levels file. The project
// no longer uses a separate education pipeline. Keep a harmless no-op here
// so tools or CI that call it won't fail.

console.log('generate-education-levels-with-icons: deprecated — no action taken.');
process.exit(0);
#!/usr/bin/env node

/**
 * Genera estructura jerárquica de niveles educativos
 * con el MISMO formato que topics.generated.js (incluye iconos, descripcion, palette, btn)
 */

const fs = require('fs');
const path = require('path');

const TOPICS_FILE = path.join(__dirname, '../src/data/topics.generated.js');
const EDUCATION_FILE = path.join(__dirname, 'education-themes-generated.js');
const OUTPUT_FILE = path.join(__dirname, '../src/data/educationLevels.generated.js');

console.log('🔧 Generando estructura jerárquica con iconos desde topics.generated.js...\n');

// Función para extraer datos de topics.generated.js
function extractTopicsData() {
  const content = fs.readFileSync(TOPICS_FILE, 'utf8');
  
  // Crear un objeto para almacenar todos los cards por tipo
  const topicsMap = {};
  
  // Regex para extraer cards completos
  const cardRegex = /"tipo":\s*"([^"]+)"[\s\S]*?"titulo":\s*"([^"]+)"[\s\S]*?"descripcion":\s*"([^"]+)"[\s\S]*?"icono":\s*"([^"]+)"[\s\S]*?"palette":\s*"([^"]+)"[\s\S]*?"isTheoryOnly":\s*(true|false)[\s\S]*?"btn":\s*\{[\s\S]*?"texto":\s*"([^"]+)"[\s\S]*?"clase":\s*"([^"]+)"[\s\S]*?"link":\s*"([^"]+)"/g;
  
  let match;
  while ((match = cardRegex.exec(content)) !== null) {
    const [, tipo, titulo, descripcion, icono, palette, isTheoryOnly, btnTexto, btnClase, btnLink] = match;
    topicsMap[tipo] = {
      tipo,
      titulo,
      descripcion,
      icono,
      palette,
      isTheoryOnly: isTheoryOnly === 'true',
      btn: {
        texto: btnTexto,
        clase: btnClase,
        link: btnLink
      }
    };
  }
  
  console.log(`📚 Extraídos ${Object.keys(topicsMap).length} cards desde topics.generated.js`);
  return topicsMap;
}

// Función para capitalizar
function capitalizeWords(str) {
  return str
    .split(/[_\s]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function buildHierarchy(themes, level, topicsMap) {
  const tree = {
    clasica: {
      title: 'Física Clásica',
      intro: `Temas de Física Clásica para ${level}`,
      cards: []
    }
  };
  
  // Agrupar por primer nivel (mecanica, optica, etc)
  const gruposPrincipales = {};
  themes.forEach(({ path: themePath, titulo, categoria }) => {
    const parts = themePath.split('/');
    const primerNivel = parts[0];
    
    if (!gruposPrincipales[primerNivel]) {
      gruposPrincipales[primerNivel] = [];
    }
    gruposPrincipales[primerNivel].push({ path: themePath, titulo, categoria, parts });
  });
  
  // Construir estructura para cada grupo principal
  Object.keys(gruposPrincipales).sort().forEach(grupoPrincipal => {
    const temasPrincipal = gruposPrincipales[grupoPrincipal];
    
    // Obtener datos desde topics
    const topicData = topicsMap[grupoPrincipal] || {
      icono: '📚',
      descripcion: `Estudio de ${grupoPrincipal}`,
      palette: 'blue',
      isTheoryOnly: false
    };
    
    const cardPrincipal = {
      tipo: grupoPrincipal,
      titulo: capitalizeWords(grupoPrincipal),
      descripcion: topicData.descripcion,
      icono: topicData.icono,
      palette: topicData.palette,
      isTheoryOnly: topicData.isTheoryOnly,
      btn: {
        texto: 'Explorar',
        clase: `${grupoPrincipal}-btn`,
        link: `/clasica/${grupoPrincipal}`
      },
      cards: []
    };
    
    // Agrupar por segundo nivel
    const gruposSecundarios = {};
    temasPrincipal.forEach(tema => {
      if (tema.parts.length === 1) {
        // Es un tema directo sin subcategorías
        return;
      }
      
      const segundoNivel = tema.parts[1];
      if (!gruposSecundarios[segundoNivel]) {
        gruposSecundarios[segundoNivel] = [];
      }
      gruposSecundarios[segundoNivel].push(tema);
    });
    
    // Construir cards secundarias
    Object.keys(gruposSecundarios).sort().forEach(grupoSecundario => {
      const temasSecundario = gruposSecundarios[grupoSecundario];
      
      // Obtener datos desde topics
      const topicDataSec = topicsMap[grupoSecundario] || {
        icono: '📚',
        descripcion: `Estudio de ${grupoSecundario}`,
        palette: 'blue',
        isTheoryOnly: false
      };
      
      const cardSecundaria = {
        tipo: grupoSecundario,
        titulo: capitalizeWords(grupoSecundario),
        descripcion: topicDataSec.descripcion,
        icono: topicDataSec.icono,
        palette: topicDataSec.palette,
        isTheoryOnly: topicDataSec.isTheoryOnly,
        btn: {
          texto: 'Explorar',
          clase: `${grupoSecundario}-btn`,
          link: `/clasica/${grupoPrincipal}/${grupoSecundario}`
        },
        cards: []
      };
      
      // Agrupar por tercer nivel
      const gruposTerciarios = {};
      temasSecundario.forEach(tema => {
        if (tema.parts.length === 2) {
          // Es un tema directo, agregar como card final
          const topicDataTer = topicsMap[tema.parts[1]] || {
            icono: '📚',
            descripcion: tema.titulo,
            palette: 'blue',
            isTheoryOnly: false
          };
          
          cardSecundaria.cards.push({
            tipo: tema.parts[1],
            titulo: tema.titulo,
            descripcion: topicDataTer.descripcion,
            icono: topicDataTer.icono,
            palette: topicDataTer.palette,
            isTheoryOnly: topicDataTer.isTheoryOnly,
            btn: {
              texto: 'Explorar',
              clase: `${tema.parts[1]}-btn`,
              link: `/clasica/${grupoPrincipal}/${tema.parts[1]}`
            }
          });
        } else if (tema.parts.length >= 3) {
          const tercerNivel = tema.parts[2];
          if (!gruposTerciarios[tercerNivel]) {
            gruposTerciarios[tercerNivel] = [];
          }
          gruposTerciarios[tercerNivel].push(tema);
        }
      });
      
      // Construir cards terciarias
      Object.keys(gruposTerciarios).sort().forEach(grupoTerciario => {
        const temasTerciario = gruposTerciarios[grupoTerciario];
        
        if (temasTerciario.length === 1 && temasTerciario[0].parts.length === 3) {
          // Es un tema final
          const tema = temasTerciario[0];
          const topicDataTer = topicsMap[tema.parts[2]] || {
            icono: '📚',
            descripcion: tema.titulo,
            palette: 'blue',
            isTheoryOnly: false
          };
          
          cardSecundaria.cards.push({
            tipo: tema.parts[2],
            titulo: tema.titulo,
            descripcion: topicDataTer.descripcion,
            icono: topicDataTer.icono,
            palette: topicDataTer.palette,
            isTheoryOnly: topicDataTer.isTheoryOnly,
            btn: {
              texto: 'Explorar',
              clase: `${tema.parts[2]}-btn`,
              link: `/clasica/${grupoPrincipal}/${tema.parts[1]}/${tema.parts[2]}`
            }
          });
        } else {
          // Es una subcategoría con más temas dentro
          const topicDataTer = topicsMap[grupoTerciario] || {
            icono: '📚',
            descripcion: `Estudio de ${grupoTerciario}`,
            palette: 'blue',
            isTheoryOnly: false
          };
          
          const cardTerciaria = {
            tipo: grupoTerciario,
            titulo: capitalizeWords(grupoTerciario),
            descripcion: topicDataTer.descripcion,
            icono: topicDataTer.icono,
            palette: topicDataTer.palette,
            isTheoryOnly: topicDataTer.isTheoryOnly,
            btn: {
              texto: 'Explorar',
              clase: `${grupoTerciario}-btn`,
              link: `/clasica/${grupoPrincipal}/${temasSecundario[0].parts[1]}/${grupoTerciario}`
            },
            cards: []
          };
          
          // Agregar temas finales
          temasTerciario.forEach(tema => {
            if (tema.parts.length >= 3) {
              const tipoFinal = tema.parts[tema.parts.length - 1];
              const topicDataFinal = topicsMap[tipoFinal] || {
                icono: '📚',
                descripcion: tema.titulo,
                palette: 'blue',
                isTheoryOnly: false
              };
              
              cardTerciaria.cards.push({
                tipo: tipoFinal,
                titulo: tema.titulo,
                descripcion: topicDataFinal.descripcion,
                icono: topicDataFinal.icono,
                palette: topicDataFinal.palette,
                isTheoryOnly: topicDataFinal.isTheoryOnly,
                btn: {
                  texto: 'Explorar',
                  clase: `${tipoFinal}-btn`,
                  link: `/clasica/${tema.parts.join('/')}`
                }
              });
            }
          });
          
          cardSecundaria.cards.push(cardTerciaria);
        }
      });
      
      cardPrincipal.cards.push(cardSecundaria);
    });
    
    tree.clasica.cards.push(cardPrincipal);
  });
  
  return tree;
}

try {
  // Extraer datos de topics.generated.js
  const topicsMap = extractTopicsData();
  
  // Leer education-themes-generated.js
  const educationContent = fs.readFileSync(EDUCATION_FILE, 'utf8');
  const match = educationContent.match(/const\s+allThemesMetadata\s*=\s*(\[[\s\S]*?\]);/);
  
  if (!match) {
    throw new Error('No se pudo parsear education-themes-generated.js');
  }
  
  const allThemes = eval(match[1]);
  
  // Usar TODOS los temas del archivo - ya están filtrados como finales en generate-education-themes-from-topics.cjs
  const themes = allThemes;
  
  console.log(`📝 Total de temas a procesar: ${themes.length}`);
  
  // Agrupar por nivel
  const byLevel = {
    ESO: [],
    BACHILLERATO: [],
    UNIVERSIDAD: [],
    MASTER: []
  };
  
  themes.forEach(theme => {
    if (byLevel[theme.educationLevel]) {
      byLevel[theme.educationLevel].push(theme);
    }
  });
  
  console.log('📊 Temas encontrados:');
  Object.entries(byLevel).forEach(([level, items]) => {
    console.log(`  ${level}: ${items.length} temas`);
  });
  
  // Construir estructura para cada nivel
  const result = {};
  Object.entries(byLevel).forEach(([level, items]) => {
    if (items.length > 0) {
      result[level] = buildHierarchy(items, level, topicsMap);
    }
  });
  
  // Generar archivo
  const output = `// Auto-generado por generate-education-levels-with-icons.cjs
// NO EDITAR MANUALMENTE

export const educationLevels = ${JSON.stringify(result, null, 2)};
`;
  
  fs.writeFileSync(OUTPUT_FILE, output, 'utf8');
  
  console.log('\n✅ Archivo generado exitosamente:');
  console.log(`   ${OUTPUT_FILE}`);
  console.log('\n📊 Estadísticas:');
  Object.keys(result).forEach(level => {
    console.log(`  ${level}: Estructura jerárquica con iconos creada`);
  });
  
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}
