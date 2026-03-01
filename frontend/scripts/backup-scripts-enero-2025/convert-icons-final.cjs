#!/usr/bin/env node

/**
 * Script para convertir TODOS los iconos PNG a emojis en topics.generated.js
 * Incluye TODO el mapeo completo de iconos
 */

const fs = require('fs');
const path = require('path');

const TOPICS_FILE = path.join(__dirname, '../src/data/topics.generated.js');

// MAPEO COMPLETO Y DEFINITIVO - Todos los iconos posibles
const iconToEmojiMap = {
  // ==================== MECÁNICA ====================
  
  // Iconos principales
  'mecanicaIcon': '⚙️',
  'm_clasica': '📚',
  'm_moderna': '⚛️',
  
  // Cinemática
  'cinematicaIcon': '🏃',
  'masIcon': '🔄',
  'mcuIcon': '⭕',
  'mcuaIcon': '🔵',
  'mpIcon': '📈',
  'mrIcon': '🔁',
  'mruIcon': '➡️',
  'mruvIcon': '📊',
  
  // Dinámica
  'dinamicaIcon': '💪',
  'equilibrioIcon': '⚖️',
  'friccionIcon': '🛑',
  'gravedadIcon': '🌍',
  'gravitacionIcon': '🌍',
  'maquinasIcon': '⚙️',
  'masasIcon': '🏋️',
  'movcircularIcon': '🎡',
  'movimientoIcon': '🎯',
  'newtonIcon': '🍎',
  'oscilacionesIcon': '📳',
  'rotacionIcon': '🔄',
  'energiaIcon': '💪',
  
  // Colisiones
  'colisionesIcon': '💥',
  'elasticasIcon': '🎱',
  'inelasticasIcon': '💥',
  'centromasaIcon': '🎯',
  'dispersionIcon': '✨',
  
  // Estática
  'estaticaIcon': '🏛️',
  'aplicacionesIcon': '🏗️',
  'apoyosIcon': '🔩',
  'centroIcon': '⚖️',
  'diagramasIcon': '📊',
  'estabilidadIcon': '🏛️',
  'estructurasIcon': '🌉',
  'friccionestIcon': '🛑',
  'momentosIcon': '🔧',
  'vectoresIcon': '➡️',
  
  // Elasticidad y Deformación
  'elasticidadIcon': '📏',
  'esfuerzodeformacionIcon': '💪',
  'moduloselasticosIcon': '📐',
  'leydehookeIcon': '🔗',
  'deformaciondevigasIcon': '📏',
  
  // Ondas Mecánicas
  'ondasIcon': '〰️',
  'ondasmecanicasIcon': '〰️',
  'conceptosondasIcon': '📚',
  'superposicionIcon': '🌊',
  'interferenciaeIcon': '✨',
  'ondasestacionariasIcon': '🎵',
  'efectodopplerIcon': '📡',
  'polarizacionIcon': '🔆',
  
  // Mecánica Analítica
  'mecanicaanaliticaIcon': '📐',
  'lagrangianaIcon': '🎭',
  'hamiltonianaIcon': '⚗️',
  'principiovariacionIcon': '📊',
  'ligadurasIcon': '🔗',
  
  // ==================== TERMODINÁMICA ====================
  
  // Principal
  'termodinamicaIcon': '🌡️',
  
  // Conceptos Fundamentales
  'conceptosIcon': '📖',
  'conceptosbasicosIcon': '📖',
  'estadoIcon': '📊',
  'fronteraIcon': '🚧',
  'introduccionIcon': '📚',
  'propiedadesIcon': '🔍',
  'sistemasIcon': '⚙️',
  
  // Magnitudes Térmicas
  'magnitudesIcon': '📊',
  'temperaturaIcon': '🌡️',
  'calorIcon': '🔥',
  'trabajoIcon': '⚙️',
  'presionIcon': '💨',
  
  // Principios/Leyes
  'principiosIcon': '⚖️',
  'ceroIcon': '0️⃣',
  'primeraIcon': '1️⃣',
  'segundaIcon': '2️⃣',
  'terceraIcon': '3️⃣',
  'formulacionIcon': '📐',
  
  // Modelos y Gases
  'modelosIcon': '🔬',
  'gasesIcon': '💨',
  'idealesIcon': '☁️',
  'realesIcon': '💨',
  'teoriaIcon': '🔬',
  'ecuacionesIcon': '📝',
  
  // Entropía
  'entropiaIcon': '🌀',
  'estadisticaentIcon': '📊',
  'realesentIcon': '🌀',
  'segundaentIcon': '♻️',
  'mezclaIcon': '🧪',
  
  // Procesos Termodinámicos
  'procesosIcon': '🔄',
  'isobaricoIcon': '📏',
  'isocoricoIcon': '📦',
  'isotermicoIcon': '🌡️',
  'adiabaticoIcon': '🚫',
  'politropicoIcon': '📈',
  
  // Potenciales Termodinámicos
  'potencialesIcon': '⚡',
  'energiainternaIcon': '⚡',
  'entalpiaIcon': '🔋',
  'gibbsIcon': '⚗️',
  'helmholtzIcon': '🎓',
  'maxwellterIcon': '🔬',
  'criteriosIcon': '✅',
  
  // Máquinas Térmicas y Refrigeración
  'termicasIcon': '🔥',
  'carnotIcon': '🏆',
  'maquinasterIcon': '🏭',
  'refrigeracionIcon': '❄️',
  
  // Ciclos Termodinámicos
  'ciclosIcon': '♻️',
  'ciclosterIcon': '🔄',
  'ottoIcon': '🚗',
  'dieselIcon': '🚛',
  'braytonIcon': '✈️',
  'rankineIcon': '⚡',
  'stirlingIcon': '🎪',
  'ericssonIcon': '♻️',
  
  // Ciclos Combinados
  'cicloscombIcon': '⚙️',
  'braytonrankinecombIcon': '⚙️',
  'cogeneracionIcon': '♻️',
  
  // Transferencia y Aplicaciones
  'transferenciaIcon': '🌡️',
  'aplicacionesterIcon': '🏭',
  
  // Termodinámica Estadística
  'estadisticaIcon': '📊',
  'microestadosIcon': '🔬',
  'distribucionesIcon': '📊',
  'particionIcon': '🧮',
  'ensambleIcon': '🎲',
  'cuanticasIcon': '⚛️',
  'equiparticionIcon': '⚖️',
  'gasidealcuanticoIcon': '☁️',
  'boseIcon': '🌊',
  'fermiIcon': '🔐',
  'fononesIcon': '🎵',
  'transicionesestIcon': '🔄',
  'isingIcon': '🧲',
  
  // Ciclos adicionales
  'rankinegasIcon': '💨',
  
  // Transferencia de Calor
  'conduccionIcon': '🌡️',
  'conveccionIcon': '💨',
  'radiacionIcon': '☀️',
  'aislamientoIcon': '🧱',
  'resistenciaIcon': '🛡️',
  'intercambioIcon': '🔄',
  
  // Aplicaciones Prácticas
  'bombasIcon': '⚙️',
  'centraleselectricasIcon': '⚡',
  'ciclospotIcon': '⚡',
  'ciclosrefIcon': '❄️',
  'motoresIcon': '🚗',
  'sistemasclimatIcon': '❄️',
  
  // ==================== ELECTROMAGNETISMO ====================
  
  // Principal
  'electromagnetismoIcon': '⚡',
  
  // Electricidad
  'electricidadIcon': '💡',
  'camposelectricosIcon': '⚡',
  'cargafuerzaIcon': '⚡',
  'corrienteIcon': '🔌',
  'potencialenergiacapacidadIcon': '⚡',
  'capacidadelectricaIcon': '🔋',
  'potencialIcon': '⚡',
  
  // Circuitos
  'circuitosIcon': '🔌',
  'circuitosacIcon': '〰️',
  'circuitosccIcon': '➡️',
  'transitoriosIcon': '⚡',
  
  // Magnetismo
  'magnetismoIcon': '🧲',
  'camposIcon': '🧲',
  'fuentescampoIcon': '⚡',
  'induccionIcon': '🔄',
  
  // Electrónica
  'electronicaIcon': '🔌',
  'fotonicosIcon': '💡',
  'semiconductoresIcon': '🔬',
  'familiasIcon': '🔢',
  
  // Ondas Electromagnéticas y Maxwell
  'ondaselectromagneticasIcon': '📡',
  'maxwellIcon': '🔬',
  
  // ==================== ÓPTICA ====================
  
  // Principal
  'opticaIcon': '🔆',
  
  // Óptica Geométrica
  'geometricaIcon': '📐',
  'reflexionIcon': '🪞',
  'refraccionIcon': '💎',
  'lentesIcon': '🔍',
  'espejosIcon': '🪞',
  'instrumentosIcon': '🔬',
  
  // Óptica Ondulatoria
  'ondulatoriaIcon': '〰️',
  'interferenciaoIcon': '✨',
  'difraccionIcon': '🌈',
  'polarizacionoIcon': '🔆',
  
  // Óptica Cuántica
  'cuanticaIcon': '⚛️',
  
  // Otros óptica
  'opticafisicaIcon': '🌈',
  'opticageometricaIcon': '👓',
  'fotometriaIcon': '💡',
  
  // ==================== MECÁNICA DE FLUIDOS ====================
  
  // Principal
  'fluidosIcon': '💧',
  'mecanicafluidosIcon': '💧',
  
  // Hidrostática
  'hidrostaticaIcon': '🌊',
  'fluidosestaticoIcon': '💧',
  
  // Hidrodinámica
  'hidrodinamicaIcon': '💨',
  'fluidosdinamicoIcon': '🌊',
  
  // Otros fluidos
  'viscosidadIcon': '🫧',
  'turbulenciaIcon': '🌀',
  'aplicacionesfluidosIcon': '🏗️',
  
  // ==================== ACÚSTICA ====================
  
  // Principal
  'acusticaIcon': '🔊',
  
  // Conceptos acústica
  'ondassonorasIcon': '🎵',
  'intensidadIcon': '📢',
  'resonanciaIcon': '🎻',
  'efectodoppleracIcon': '📡',
  'instrumentosmusicalesIcon': '🎸',
  
  // ==================== FÍSICA DE PLASMAS ====================
  
  // Principal
  'plasmasIcon': '⚡',
  'propiedadesplasmasIcon': '🔬',
  'confinamientoIcon': '🧲',
  'aplicacionesplasmasIcon': '⚗️',
  
  // ==================== TEORÍA DE CAMPOS ====================
  
  // Campos
  'camposclasicosIcon': '⚛️',
  'camposcuanticosIcon': '🔬',
  'teoriasgaugeIcon': '📐',
};

console.log('🔄 Convirtiendo iconos PNG a emojis en topics.generated.js...\n');

try {
  let content = fs.readFileSync(TOPICS_FILE, 'utf8');
  let changesCount = 0;
  let notFoundIcons = [];
  
  // Reemplazar cada icono
  for (const [iconName, emoji] of Object.entries(iconToEmojiMap)) {
    // Buscar el patrón: "icono": iconName (con cualquier cosa después: coma, espacio, newline)
    const regex = new RegExp(`"icono":\\s*${iconName}(,)?`, 'gm');
    const matches = content.match(regex);
    
    if (matches) {
      // Reemplazar manteniendo la coma si existe
      content = content.replace(regex, (match, comma) => {
        return `"icono": "${emoji}"${comma || ''}`;
      });
      changesCount += matches.length;
      console.log(`✓ ${iconName} → ${emoji} (${matches.length} ocurrencias)`);
    } else {
      notFoundIcons.push(iconName);
    }
  }
  
  // Escribir el archivo modificado
  fs.writeFileSync(TOPICS_FILE, content, 'utf8');
  
  console.log(`\n✅ Conversión completada: ${changesCount} iconos convertidos a emojis\n`);
  
  if (notFoundIcons.length > 0 && notFoundIcons.length < 50) {
    console.log(`⚠️  Iconos no encontrados (${notFoundIcons.length}):`);
    notFoundIcons.forEach(icon => console.log(`   - ${icon}`));
  } else if (notFoundIcons.length >= 50) {
    console.log(`⚠️  ${notFoundIcons.length} iconos no encontrados en el archivo`);
  }
  
  console.log('\n📝 Archivo actualizado: src/data/topics.generated.js');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
