#!/usr/bin/env node

/**
 * Script para convertir todos los iconos PNG a emojis en topics.generated.js
 */

const fs = require('fs');
const path = require('path');

const TOPICS_FILE = path.join(__dirname, '../src/data/topics.generated.js');

// Mapeo completo de iconos a emojis
const iconToEmojiMap = {
  // Ya hechos - Cinemática
  'masIcon': '🔄',
  'mcuIcon': '⭕',
  'mcuaIcon': '🔵',
  'mpIcon': '📈',
  'mrIcon': '🔁',
  'mruIcon': '➡️',
  'mruvIcon': '📊',
  
  // Ya hechos - Dinámica
  'equilibrioIcon': '⚖️',
  'friccionIcon': '🛑',
  'gravedadIcon': '🌍',
  'maquinasIcon': '⚙️',
  'masasIcon': '🏋️',
  'movcircularIcon': '🎡',
  'movimientoIcon': '🎯',
  'newtonIcon': '🍎',
  'oscilacionesIcon': '📳',
  'rotacionIcon': '🔄',
  'energiaIcon': '💪',
  
  // Ya hechos - Estática
  'aplicacionesIcon': '🏗️',
  'apoyosIcon': '🔩',
  'centroIcon': '⚖️',
  'diagramasIcon': '📊',
  'estabilidadIcon': '🏛️',
  'estructurasIcon': '🌉',
  'friccionestIcon': '🛑',
  'momentosIcon': '🔧',
  'vectoresIcon': '➡️',
  
  // Ondas mecánicas
  'ondasIcon': '〰️',
  'ondasmecanicasIcon': '〰️',
  
  // Mecánica analítica
  'mecanicaanaliticaIcon': '📐',
  
  // Termodinámica - principal
  'termodinamicaIcon': '🌡️',
  
  // Electromagnetismo - principal
  'electromagnetismoIcon': '⚡',
  'electricidadIcon': '⚡',
  'magnetismoIcon': '🧲',
  'electronicaIcon': '💻',
  'maxwellIcon': '📐',
  'ondaselectromagneticasIcon': '🌈',
  
  // Electricidad
  'camposelectricosIcon': '⚡',
  'cargafuerzaIcon': '➕',
  'corrienteIcon': '💡',
  'potencialenergiacapacidadIcon': '⚠️',
  'capacidadelectricaIcon': '🔋',
  'circuitosIcon': '🔌',
  'circuitosacIcon': '🔌',
  'circuitosccIcon': '🔌',
  'transitoriosIcon': '⏱️',
  
  // Magnetismo
  'camposIcon': '🧲',
  'fuentescampoIcon': '🎯',
  'induccionIcon': '🔄',
  
  // Electrónica
  'fotonicosIcon': '🔬',
  'semiconductoresIcon': '💻',
  'familiasIcon': '🖥️',
  
  // Óptica
  'opticaIcon': '👁️',
  'opticafisicaIcon': '🌈',
  'opticageometricaIcon': '👓',
  'fotometriaIcon': '💡',
  
  // Mecánica de fluidos
  'fluidosIcon': '💧',
  'mecanicafluidosIcon': '💧',
  'fluidosestaticoIcon': '💧',
  'fluidosdinamicoIcon': '🌊',
  
  // Acústica
  'acusticaIcon': '🔊',
  
  // Otros
  'mecanicaIcon': '⚙️',
  'cinematicaIcon': '🏃',
  'dinamicaIcon': '⚡',
  'estaticaIcon': '⚖️',
  'm_clasica': '📚',
  'm_moderna': '⚛️',
  
  // Conceptos específicos termodinámica
  'conceptosIcon': '📚',
  'magnitudesIcon': '📊',
  'procesosIcon': '🔄',
  'ciclosIcon': '♻️',
  'gasesIcon': '💨',
  'entropiaIcon': '📈'
};

console.log('🔄 Convirtiendo iconos PNG a emojis...\n');

try {
  let content = fs.readFileSync(TOPICS_FILE, 'utf8');
  let changesCount = 0;
  
  // Reemplazar cada icono
  for (const [iconName, emoji] of Object.entries(iconToEmojiMap)) {
    const regex = new RegExp(`"icono":\\s*${iconName}`, 'g');
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, `"icono": "${emoji}"`);
      changesCount += matches.length;
      console.log(`✓ ${iconName} → ${emoji} (${matches.length} ocurrencias)`);
    }
  }
  
  // Guardar archivo modificado
  fs.writeFileSync(TOPICS_FILE, content, 'utf8');
  
  console.log(`\n✅ Conversión completada: ${changesCount} iconos convertidos a emojis`);
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
