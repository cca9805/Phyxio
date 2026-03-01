#!/usr/bin/env node

/**
 * Script para REEMPLAZAR emojis repetidos por emojis únicos
 * Busca el contexto (tipo de tema) y asigna emojis específicos
 */

const fs = require('fs');
const path = require('path');

const TOPICS_FILE = path.join(__dirname, '../src/data/topics.generated.js');

// Mapeo de TIPOS DE TEMAS a emojis únicos
const tipoToEmojiMap = {
  // Ondas Mecánicas
  'ondas_mecanicas': '🌊',
  'conceptos_ondas': '📚',
  'superposicion': '➕',
  'interferencia': '💫',
  'ondas_estacionarias': '📶',
  'efecto_doppler': '📡',
  'polarizacion': '🔆',
  
  // Mecánica Analítica
  'mecanica_analitica': '🎓',
  'lagrangiana': '🎭',
  'hamiltoniana': '⚗️',
  'principio_variacion': '📊',
  'ligaduras': '🔗',
  
  // Colisiones
  'colisiones': '💥',
  'elasticas': '🎱',
  'inelasticas': '💢',
  'centro_masa': '🎯',
  'dispersion': '✨',
  
  // Elasticidad
  'elasticidad': '🪢',
  'esfuerzo_deformacion': '💪',
  'modulos_elasticos': '📐',
  'ley_hooke': '🔗',
  'deformacion_vigas': '📏',
  
  // Física de Plasmas
  'fisica_plasmas': '☄️',
  'propiedades_plasmas': '⚡',
  'confinamiento': '🧲',
  'aplicaciones_plasmas': '🔬',
  
  // Teoría de Campos
  'teoria_campos': '🎓',
  'campos_clasicos': '⚛️',
  'campos_cuanticos': '🔬',
  'teorias_gauge': '📐',
  
  // Óptica - secciones
  'optica_geometrica': '📐',
  'reflexion_y_espejos': '🪞',
  'refraccion_y_lentes': '💎',
  'instrumentos_opticos': '🔬',
  'aberraciones_opticas': '👁️',
  
  // Óptica Física
  'optica_fisica': '🌊',
  'interferencia': '✨',
  'difraccion': '🌈',
  'polarizacion': '↕️',
  'dispersion': '💠',
  
  // Óptica Cuántica
  'optica_cuantica': '⚛️',
  'efecto_fotoelectrico': '💡',
  'efecto_compton': '⚡',
  'dualidad_onda_corpusculo': '〰️',
  
  // Fotometría
  'fotometria': '💡',
  'intensidad_luminosa': '🔦',
  'flujo_luminoso': '💡',
  'iluminacion': '🌟',
  
  // Mecánica de Fluidos - Estática
  'estatica_de_fluidos': '💧',
  'presion_fluidos': '💨',
  'principio_pascal': '⚖️',
  'principio_arquimedes': '🛟',
  'empuje_flotacion': '⛵',
  
  // Mecánica de Fluidos - Dinámica
  'dinamica_de_fluidos': '🌊',
  'ecuacion_continuidad': '💧',
  'ecuacion_bernoulli': '🌊',
  'flujo_laminar': '➡️',
  'flujo_turbulento': '🌀',
  
  // Mecánica de Fluidos - Otros
  'flujo_en_tuberias': '🚰',
  'viscosidad': '🫧',
  'numero_reynolds': '🔢',
  'capa_limite': '📏',
  'perdidas_carga': '📉',
  
  // Acústica
  'ondas_sonoras': '🔊',
  'propiedades_sonido': '🎵',
  'fenomenos_acusticos': '🎭',
  'resonancia': '🎻',
  'efecto_doppler': '🚗',
  'acustica_arquitectonica': '🏛️',
  'psicoacustica': '👂',
  'instrumentos_musicales': '🎸',
  'fisica_musical': '🎼',
  
  // Electromagnetismo - Circuitos
  'circuitos-ca': '〰️',
  'circuitos-cc': '🔋',
  'transitorios': '⚡',
  
  // Electromagnetismo - Campos
  'campos-electricos': '⚡',
  'capacidad-electrica': '🔋',
  'carga-fuerza': '➕',
  'corriente-ohm': '🔌',
  'potencial-energia-capacidad': '⚡',
  
  // Electromagnetismo - Magnetismo
  'campos-fuerza': '🧲',
  'fuentes-campo': '🎯',
  'induccion': '🔄',
  
  // Electromagnetismo - Electrónica
  'dispositivos-fotonicos': '💡',
  'dispositivos-semiconductores': '🔬',
  'familias-logicas': '🔢',
  
  // Electromagnetismo - Ondas
  'aplicaciones-tecnologicas': '📱',
  'espectro-electromagnetico': '🌈',
  'luz-visible-optica': '💡',
  'ondas-radio-microondas': '📻',
  'propagacion-fenomenos': '📡',
  'rayos-x-gamma': '☢️',
  
  // Maxwell
  'ecuaciones-maxwell': '📐',
  'ley-faraday': '🔄',
  'ley-ampere': '🧲',
  'ley-gauss-electrico': '⚡',
  'ley-gauss-magnetico': '🧲',
  
  // TERMODINÁMICA - Temas adicionales que usan 🌡️ por defecto
  'conceptos_ondas': '📖',
  'principio_variacion': '📊',
  'ligaduras': '🔗',
  'elasticidad': '🪢',
  'fisica_moderna': '⚛️',
  'mecanica': '⚙️',
  'presion': '💨',
  'ceroIcon': '0️⃣',
  'estado_y_equilibrio': '⚖️',
  'frontera_y_entorno': '🔲',
  'introduccion_a_la_termodinamica': '📘',
  'propiedades_termicas': '🔬',
  'sistemas_termodinamicos': '⚗️',
  'primera_ley_de_la_termodinamica': '♨️',
  'segunda_ley_de_la_termodinamica': '⏳',
  'tercera_ley_de_la_termodinamica': '❄️',
  'formulaciones_equivalentes': '🔄',
  'gases_ideales': '☁️',
  'gases_reales': '🌫️',
  'teoria_cinetica_de_los_gases': '⚛️',
  'ecuaciones_de_estado': '📊',
  'medicion_y_calculo_de_la_entropia': '🧮',
  'interpretacion_estadistica': '📈',
  'entropia_en_procesos_reales': '⚙️',
  'entropia_y_segunda_ley': '🔁',
  'entropia_de_mezcla': '🫗',
  'proceso_isobarico': '📊',
  'proceso_isocorico': '🔒',
  'proceso_isotermico': '🌡️',
  'proceso_adiabatico': '🔐',
  'proceso_politropico': '📉',
  'energia_interna': '⚡',
  'entalpia': '🌊',
  'energia_libre_gibbs': '⚗️',
  'energia_libre_helmholtz': '🔋',
  'relaciones_maxwell': '🔗',
  'criterios_equilibrio': '⚖️',
  'ciclo_carnot': '🏆',
  'maquinas_termicas_reales': '🚂',
  'bombas_calor': '🔥',
  'ciclo_otto': '🏎️',
  'ciclo_diesel': '🚚',
  'ciclo_brayton': '🛩️',
  'ciclo_rankine': '⚡',
  'ciclo_stirling': '⭕',
  'ciclo_ericsson': '🔁',
  'rankine_gas': '💨',
  'conduccion': '➡️',
  'conveccion': '🌬️',
  'radiacion': '☀️',
  'aislamiento': '🧱',
  'resistencia': '🛡️',
  'intercambio': '🔄',
  'bombas': '💧',
  'centrales_electricas': '⚡',
  'ciclos_pot': '🔌',
  'ciclos_ref': '❄️',
  'motores': '🚗',
  'sistemas_climat': '🌡️',
  'microestados': '⚛️',
  'distribuciones': '📈',
  'particion': '🧮',
  'ensamble': '🎲',
  'cuanticas': '⚛️',
  'equiparticion': '⚖️',
  'gasidealcuantico': '☁️',
  'bose': '🌊',
  'fermi': '🔐',
  'fonones': '🎵',
  'transiciones_est': '🔄',
  'ising': '🧲',
  
  // Categorías principales
  'termodinamica': '🌡️',
  'teoria_campos_clasicos': '🌐',
  
  // Colisiones específicas
  'colisiones_elasticas': '🎱',
  'colisiones_inelasticas': '💢',
  
  // Elasticidad y estabilidad
  'elasticidad_deformacion': '💪',
  
  // Ondas mecánicas específicas
  'ondas_transversales': '〰️',
  'ondas_longitudinales': '➡️',
  'energia_ondas': '⚡',
  
  // Mecánica analítica avanzada
  'coordenadas_generalizadas': '📐',
  'principio_minima_accion': '🎯',
  
  // Termodinámica estadística avanzada
  'calculo_de_propiedades_termodinamicas': '🧮',
  'simulaciones_monte_carlo': '🎲',
  'aplicaciones_de_la_estadistica_cuantica': '⚛️',
  'analisis_de_sistemas_complejos': '🕸️',
  
  // Secciones principales de termodinámica
  '11_transferencia_de_calor': '🔥',
  
  // Magnitudes térmicas
  'temperatura': '🌡️',
  
  // Leyes termodinámicas específicas
  'ley_cero_de_la_termodinamica': '🔵',
  
  // Procesos termodinámicos (proceso_isotermico ya está duplicado arriba)
  
  // Mecánica de fluidos avanzada
  'flujo_sobre_cuerpos': '🏊',
  'maquinaria_de_fluidos': '⚙️',
  'analisis_dimensional_y_similitud': '📏',
  
  // OTROS TEMAS SIN MAPEAR
  'viscosidad': '🫧',
  'numero_reynolds': '🔢',
  'capa_limite': '📏',
  'perdidas_carga': '📉',
  'principio_pascal': '⚖️',
  'ecuacion_continuidad': '💧',
  'ecuacion_bernoulli': '🌊',
  'flujo_laminar': '➡️',
  'flujo_turbulento': '🌀',
  'empuje_flotacion': '⛵',
};

console.log('🔄 Reemplazando emojis repetidos por emojis únicos (Versión 3.0)...\n');

try {
  let content = fs.readFileSync(TOPICS_FILE, 'utf8');
  let changesCount = 0;
  
  // Buscar bloques de "tipo" + "icono" y reemplazar
  for (const [tipo, emoji] of Object.entries(tipoToEmojiMap)) {
    // Regex para encontrar: "tipo": "X" ... "icono": "cualquier_emoji"
    const regex = new RegExp(
      `("tipo":\\s*"${tipo}"[\\s\\S]{0,300}?"icono":\\s*)"[^"]+?"`,
      'gm'
    );
    
    const matches = content.match(regex);
    if (matches) {
      content = content.replace(regex, `$1"${emoji}"`);
      changesCount += matches.length;
      console.log(`✓ ${tipo} → ${emoji} (${matches.length}x)`);
    }
  }
  
  // Escribir el archivo modificado
  fs.writeFileSync(TOPICS_FILE, content, 'utf8');
  
  console.log(`\n✅ Conversión completada: ${changesCount} emojis actualizados\n`);
  
  // Análisis final
  const emojiMatches = content.match(/"icono":\s*"([^"]+)"/g);
  if (emojiMatches) {
    const allEmojis = emojiMatches.map(m => m.match(/"([^"]+)"/)[1]);
    const uniqueEmojis = [...new Set(allEmojis)];
    
    console.log(`📊 Análisis post-conversión:`);
    console.log(`   Total iconos: ${allEmojis.length}`);
    console.log(`   Iconos únicos: ${uniqueEmojis.length}`);
    console.log(`   Diversidad: ${((uniqueEmojis.length / allEmojis.length) * 100).toFixed(1)}%\n`);
    
    // Top 10 más repetidos
    const counts = {};
    allEmojis.forEach(e => counts[e] = (counts[e] || 0) + 1);
    const top10 = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 10);
    console.log(`   🔝 Top 10 emojis más usados:`);
    top10.forEach(([emoji, count]) => console.log(`      ${emoji} → ${count} veces`));
  }
  
  console.log('\n📝 Archivo actualizado: src/data/topics.generated.js');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
