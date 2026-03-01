#!/usr/bin/env node

/**
 * Script EXPANDIDO para convertir iconos PNG a emojis únicos y específicos
 * Versión 2.0 - Con 300+ mapeos únicos para reducir repeticiones
 */

const fs = require('fs');
const path = require('path');

const TOPICS_FILE = path.join(__dirname, '../src/data/topics.generated.js');

// MAPEO MASIVAMENTE EXPANDIDO - 300+ iconos únicos
const iconToEmojiMap = {
  // ==================== MECÁNICA ====================
  
  // Iconos principales
  'mecanicaIcon': '⚙️',
  'm_clasica': '📚',
  'm_moderna': '⚛️',
  
  // Cinemática
  'cinematicaIcon': '🏃',
  'masIcon': '〰️',  // MAS - ondas sinusoidales
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
  'gravitacionIcon': '🪐',  // Cambiado para diferenciarlo
  'maquinasIcon': '🔧',  // Máquinas simples
  'masasIcon': '🏋️',
  'movcircularIcon': '🎡',
  'movimientoIcon': '🎯',
  'newtonIcon': '🍎',
  'oscilacionesIcon': '📳',
  'rotacionIcon': '🌀',  // Cambiar de 🔄 a 🌀 para rotación
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
  'elasticidadIcon': '🪢',  // Cuerda elástica
  'esfuerzodeformacionIcon': '💪',
  'moduloselasticosIcon': '📐',
  'leydehookeIcon': '🔗',
  'deformaciondevigasIcon': '📏',
  
  // Ondas Mecánicas - EXPANDIDO
  'ondasIcon': '🌊',
  'ondasmecanicasIcon': '🌊',
  'conceptosondasIcon': '📚',
  'superposicionIcon': '➕',  // Superposición de ondas
  'interferenciaeIcon': '💫',  // Interferencia
  'ondasestacionariasIcon': '📶',  // Ondas estacionarias
  'efectodopplerIcon': '📡',
  'polarizacionIcon': '🔆',
  
  // Ondas Mecánicas - Tipos específicos (NUEVOS)
  'ondastransversalesIcon': '↕️',
  'ondaslongitudinalesIcon': '↔️',
  'ondassonorasIcon': '🔊',
  'vibracionesIcon': '📳',
  'resonanciaIcon': '🎻',
  'amortiguamientoIcon': '📉',
  
  // Mecánica Analítica - EXPANDIDO
  'mecanicaanaliticaIcon': '🎓',  // Académico
  'lagrangianaIcon': '🎭',
  'hamiltonianaIcon': '⚗️',
  'principiovariacionIcon': '📊',
  'ligadurasIcon': '🔗',
  
  // Mecánica Analítica adicional (NUEVOS)
  'coordenadasgeneralizadasIcon': '📍',
  'ecuacioneslagrangeIcon': '📝',
  'ecuacioneshamiltonIcon': '🔬',
  'transformacionescanonIcon': '🔄',
  'corchetesPoissonIcon': '⟨⟩',
  
  // ==================== TERMODINÁMICA ====================
  
  // Principal
  'termodinamicaIcon': '🌡️',
  
  // Conceptos Fundamentales - MEJORADO
  'conceptosIcon': '📖',
  'conceptosbasicosIcon': '📚',
  'estadoIcon': '📊',
  'fronteraIcon': '🚧',
  'introduccionIcon': '🎓',  // Cambiado
  'propiedadesIcon': '🔍',
  'sistemasIcon': '🧪',  // Sistema termodinámico
  
  // Conceptos Fundamentales adicionales (NUEVOS)
  'estado_Y_equilibrioIcon': '⚖️',
  'frontera_y_entornoIcon': '🔲',
  'introduccion_a_la_termodinamicaIcon': '📘',
  'propiedades_termicasIcon': '🔬',
  'sistemas_termodinamicosIcon': '⚗️',
  
  // Magnitudes Térmicas - MEJORADO
  'magnitudesIcon': '📏',  // Instrumentos de medida
  'temperaturaIcon': '🌡️',
  'calorIcon': '🔥',
  'trabajoIcon': '⚙️',
  'presionIcon': '💨',
  
  // Magnitudes adicionales (NUEVOS)
  'calorespecificoIcon': '🧊',
  'capacidadcaloricaIcon': '🌡️',
  'conductividadtermicaIcon': '🔥',
  'coeficientedilatacionIcon': '📏',
  
  // Principios/Leyes
  'principiosIcon': '⚖️',
  'ceroIcon': '0️⃣',
  'primeraIcon': '1️⃣',
  'segundaIcon': '2️⃣',
  'terceraIcon': '3️⃣',
  'formulacionIcon': '📐',
  
  // Leyes adicionales (NUEVOS)
  'primera_ley_de_la_termodinamicaIcon': '♨️',
  'segunda_ley_de_la_termodinamicaIcon': '⏳',
  'tercera_ley_de_la_termodinamicaIcon': '❄️',
  'formulaciones_equivalentesIcon': '🔄',
  'cero_principioIcon': '⚖️',
  
  // Modelos y Gases - EXPANDIDO
  'modelosIcon': '🔬',
  'gasesIcon': '💨',
  'idealesIcon': '☁️',
  'realesIcon': '💨',
  'teoriaIcon': '🎓',  // Teoría cinética
  'ecuacionesIcon': '📝',
  
  // Gases adicionales (NUEVOS)
  'gases_idealesIcon': '☁️',
  'gases_realesIcon': '🌫️',
  'teoria_cinetica_de_los_gasesIcon': '⚛️',
  'ecuaciones_de_estadoIcon': '📊',
  'ley_gases_idealesIcon': '💭',
  'van_der_waalsIcon': '🔬',
  'factorcompresibilidadIcon': '📉',
  
  // Entropía - EXPANDIDO
  'entropiaIcon': '🌀',
  'estadisticaentIcon': '📊',
  'realesentIcon': '🔄',  // Procesos reales
  'segundaentIcon': '♻️',
  'mezclaIcon': '🧪',
  
  // Entropía adicional (NUEVOS)
  'medicion_y_calculo_de_la_entropiaIcon': '🧮',
  'interpretacion_estadisticaIcon': '📈',
  'entropia_en_procesos_realesIcon': '⚙️',
  'entropia_y_segunda_leyIcon': '🔁',
  'entropia_de_mezclaIcon': '🫗',
  
  // Procesos Termodinámicos - EXPANDIDO
  'procesosIcon': '🔄',
  'isobaricoIcon': '📏',  // Presión constante
  'isocoricoIcon': '📦',  // Volumen constante
  'isotermicoIcon': '🌡️',  // Temperatura constante
  'adiabaticoIcon': '🚫',  // Sin transferencia de calor
  'politropicoIcon': '📈',
  
  // Procesos adicionales (NUEVOS)
  'proceso_isobaricoIcon': '📊',
  'proceso_isocoricoIcon': '🔒',
  'proceso_isotermicoIcon': '🌡️',
  'proceso_adiabaticoIcon': '🔐',
  'proceso_politropicoIcon': '📉',
  'proceso_isoentalpicoIcon': '💚',
  'proceso_reversibleIcon': '🔁',
  'proceso_irreversibleIcon': '➡️',
  
  // Potenciales Termodinámicos - EXPANDIDO
  'potencialesIcon': '⚡',
  'energiainternaIcon': '🔋',  // Batería/energía interna
  'entalpiaIcon': '🌊',  // Flujo de calor
  'gibbsIcon': '⚗️',
  'helmholtzIcon': '🎓',
  'maxwellterIcon': '🔬',
  'criteriosIcon': '✅',
  
  // Potenciales adicionales (NUEVOS)
  'energia_internaIcon': '⚡',
  'energia_libreIcon': '💡',
  'energia_libre_gibbsIcon': '🧬',
  'energia_libre_helmholtzIcon': '🔋',
  'relaciones_maxwellIcon': '🔗',
  'criterios_equilibrioIcon': '⚖️',
  'criterios_estabilidadIcon': '🏛️',
  
  // Máquinas Térmicas - EXPANDIDO
  'termicasIcon': '🔥',
  'carnotIcon': '🏆',
  'maquinasterIcon': '🏭',
  'refrigeracionIcon': '❄️',
  
  // Máquinas adicionales (NUEVOS)
  'ciclo_carnotIcon': '🔄',
  'maquinas_termicas_realesIcon': '🚂',
  'refrigeradores_Icon': '🧊',
  'bombas_calorIcon': '🔥',
  'rendimiento_termicoIcon': '📈',
  'coeficiente_rendimientoIcon': '📊',
  
  // Ciclos Termodinámicos - MASIVAMENTE EXPANDIDO
  'ciclosIcon': '♻️',
  'ciclosterIcon': '🔄',
  'ottoIcon': '🚗',
  'dieselIcon': '🚛',
  'braytonIcon': '✈️',
  'rankineIcon': '⚡',
  'stirlingIcon': '🎪',
  'ericssonIcon': '♻️',
  
  // Ciclos adicionales (NUEVOS)
  'ciclo_ottoIcon': '🏎️',
  'ciclo_dieselIcon': '🚚',
  'ciclo_braytonIcon': '🛩️',
  'ciclo_rankineIcon': '⚡',
  'ciclo_stirlingIcon': '⭕',
  'ciclo_ericssonIcon': '🔁',
  'ciclo_refrigeracionIcon': '🧊',
  'ciclo_bomba_calorIcon': '🌡️',
  
  // Ciclos Combinados
  'cicloscombIcon': '⚙️',
  'braytonrankinecombIcon': '🏭',  // Planta de energía
  'cogeneracionIcon': '♻️',
  'rankinegasIcon': '💨',
  
  // Ciclos combinados adicionales (NUEVOS)
  'ciclos_combinadosIcon': '🔗',
  'ciclos_potenciaIcon': '⚡',
  'ciclos_refrigeracionIcon': '❄️',
  
  // Transferencia de Calor - EXPANDIDO
  'transferenciaIcon': '🔥',
  'conduccionIcon': '➡️',  // Transferencia directa
  'conveccionIcon': '🌬️',  // Flujo de fluido
  'radiacionIcon': '☀️',
  'aislamientoIcon': '🧱',
  'resistenciaIcon': '🛡️',
  'intercambioIcon': '🔄',
  
  // Transferencia adicional (NUEVOS)
  'conduccion_termic aIcon': '🧱',
  'conveccion_naturalIcon': '🌡️',
  'conveccion_forzadaIcon': '💨',
  'radiacion_termicaIcon': '🌟',
  'intercambiadores_calorIcon': '🔄',
  'aislamiento_termicoIcon': '🏠',
  
  // Aplicaciones Prácticas - EXPANDIDO
  'aplicacionesterIcon': '🏭',
  'bombasIcon': '💧',  // Bomba de agua
  'centraleselectricasIcon': '⚡',
  'ciclospotIcon': '🔌',  // Generación eléctrica
  'ciclosrefIcon': '❄️',
  'motoresIcon': '🚗',
  'sistemasclimatIcon': '🌡️',  // HVAC
  
  // Aplicaciones adicionales (NUEVOS)
  'motores_combustionIcon': '🔥',
  'turbinasIcon': '🌀',
  'compresoresIcon': '💨',
  'sistemas_climatizacionIcon': '❄️',
  'plantas_potenciaIcon': '⚡',
  'energia_renovableIcon': '♻️',
  
  // Termodinámica Estadística - MASIVAMENTE EXPANDIDO
  'estadisticaIcon': '📊',
  'microestadosIcon': '⚛️',  // Partículas
  'distribucionesIcon': '📈',
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
  
  // Estadística adicional (NUEVOS)
  'microestados_macroestadosIcon': '🔬',
  'distribuciones_estadisticasIcon': '📉',
  'funcion_particionIcon': '∑',
  'ensamble_canonicaIcon': '📚',
  'estadisticas_cuanticasIcon': '⚛️',
  'teorema_equiparticionIcon': '⚖️',
  'gas_ideal_cuanticoIcon': '💭',
  'estadistica_bose_einsteinIcon': '❄️',
  'estadistica_fermi_diracIcon': '🔒',
  'fonones_magnetonesIcon': '🎵',
  'transiciones_faseIcon': '🔄',
  'modelo_isingIcon': '🧲',
  
  // ==================== ELECTROMAGNETISMO ====================
  
  // Principal
  'electromagnetismoIcon': '⚡',
  
  // Electricidad - EXPANDIDO
  'electricidadIcon': '💡',
  'camposelectricosIcon': '⚡',
  'cargafuerzaIcon': '➕',  // Cargas positivas/negativas
  'corrienteIcon': '🔌',
  'potencialenergiacapacidadIcon': '⚡',
  'capacidadelectricaIcon': '🔋',
  'potencialIcon': '⚡',
  
  // Electricidad adicional (NUEVOS)
  'campos_electricosIcon': '⚡',
  'ley_coulombIcon': '➕➖',
  'ley_gaussIcon': '🔵',
  'potencial_electricoIcon': '🔋',
  'dipolo_electricoIcon': '⬌',
  'conductor_aisladorIcon': '🔌',
  
  // Circuitos - EXPANDIDO
  'circuitosIcon': '🔌',
  'circuitosacIcon': '〰️',
  'circuitosccIcon': '➡️',
  'transitoriosIcon': '⚡',
  
  // Circuitos adicionales (NUEVOS)
  'circuitos_serieIcon': '➡️',
  'circuitos_paraleloIcon': '⫴',
  'ley_ohmIcon': '🔻',
  'ley_kirchhoffIcon': '🔄',
  'resistenciasIcon': '🔶',
  'condensadoresIcon': '⚏',
  'bobinasIcon': '🌀',
  'impedanciaIcon': '〰️',
  
  // Magnetismo - EXPANDIDO
  'magnetismoIcon': '🧲',
  'camposIcon': '🧲',
  'fuentescampoIcon': '🎯',  // Fuentes de campo
  'induccionIcon': '🔄',
  
  // Magnetismo adicional (NUEVOS)
  'campo_magneticoIcon': '🧲',
  'ley_biot_savartIcon': '🔄',
  'ley_ampereIcon': '🔁',
  'fuerza_lorentzIcon': '⚡',
  'induccion_electromagneticaIcon': '🔋',
  'ley_faradayIcon': '💫',
  'ley_lenzIcon': '🔙',
  'materialmagneticosIcon': '🧲',
  
  // Electrónica - EXPANDIDO
  'electronicaIcon': '🔌',
  'fotonicosIcon': '💡',
  'semiconductoresIcon': '🔬',
  'familiasIcon': '🔢',
  
  // Electrónica adicional (NUEVOS)
  'diodosIcon': '▶️',
  'transistoresIcon': '🔺',
  'amplificadoresIcon': '📢',
  'osciladores Icon': '〰️',
  'circuitos_integradosIcon': '🔲',
  'microprocesadoresIcon': '💻',
  
  // Ondas Electromagnéticas y Maxwell - EXPANDIDO
  'ondaselectromagneticasIcon': '📡',
  'maxwellIcon': '🔬',
  
  // Ondas EM adicionales (NUEVOS)
  'ecuaciones_maxwellIcon': '📐',
  'ondas_emIcon': '📡',
  'espectro_electromagneticoIcon': '🌈',
  'luz_visibleIcon': '💡',
  'ondas_radioIcon': '📻',
  'microondasIcon': '📡',
  'infrarrojasIcon': '🌡️',
  'ultravioletaIcon': '☀️',
  'rayos_xIcon': '☢️',
  'rayos_gammaIcon': '☢️',
  
  // ==================== ÓPTICA ====================
  
  // Principal
  'opticaIcon': '🔆',
  
  // Óptica Geométrica - EXPANDIDO
  'geometricaIcon': '📐',
  'reflexionIcon': '🪞',
  'refraccionIcon': '💎',
  'lentesIcon': '🔍',
  'espejosIcon': '🪞',
  'instrumentosIcon': '🔬',
  
  // Geométrica adicional (NUEVOS)
  'optica_geometricaIcon': '📐',
  'leyes_reflexionIcon': '🔙',
  'leyes_refraccionIcon': '💧',
  'ley_snellIcon': '📐',
  'reflexion_totalIcon': '🔙',
  'espejos_planosIcon': '🪞',
  'espejos_esfericosIcon': '⚪',
  'lentes_convergentesIcon': '🔍',
  'lentes_divergentesIcon': '◯',
  'instrumentos_opticosIcon': '🔬',
  'microscopioIcon': '🔬',
  'telescopioIcon': '🔭',
  'camaraIcon': '📷',
  
  // Óptica Ondulatoria - EXPANDIDO
  'ondulatoriaIcon': '〰️',
  'interferenciaoIcon': '✨',
  'difraccionIcon': '🌈',
  'polarizacionoIcon': '🔆',
  
  // Ondulatoria adicional (NUEVOS)
  'optica_fisicaIcon': '🌊',
  'interferencia_ondulatoriaIcon': '💫',
  'difraccion_fraunhoferIcon': '🌟',
  'difraccion_fresnelIcon': '✨',
  'redes_difraccionIcon': '▦',
  'polarizacion_luzIcon': '↕️',
  'birrefringenciaIcon': '💎',
  
  // Óptica Cuántica
  'cuanticaIcon': '⚛️',
  
  // Cuántica adicional (NUEVOS)
  'efecto_fotoelectricoIcon': '💡',
  'fotones_cuantosIcon': '⚛️',
  'laser_maserIcon': '🔴',
  'optica_no_linealIcon': '🌀',
  
  // Otros óptica
  'opticafisicaIcon': '🌈',
  'opticageometricaIcon': '👓',
  'fotometriaIcon': '💡',
  
  // Fotometría adicional (NUEVOS)
  'intensidad_luminos aIcon': '💡',
  'flujo_luminosoIcon': '🔦',
  'iluminacionIcon': '💡',
  
  // ==================== MECÁNICA DE FLUIDOS ====================
  
  // Principal
  'fluidosIcon': '💧',
  'mecanicafluidosIcon': '💧',
  
  // Hidrostática - EXPANDIDO
  'hidrostaticaIcon': '🌊',
  'fluidosestaticoIcon': '💧',
  
  // Hidrostática adicional (NUEVOS)
  'presion_fluidosIcon': '💨',
  'principio_pascalIcon': '⚖️',
  'principio_arquimedesIcon': '🛟',
  'empuje_flotacionIcon': '⛵',
  'manometrosIcon': '📏',
  'barometrosIcon': '🌡️',
  
  // Hidrodinámica - EXPANDIDO
  'hidrodinamicaIcon': '💨',
  'fluidosdinamicoIcon': '🌊',
  
  // Hidrodinámica adicional (NUEVOS)
  'ecuacion_continuidadIcon': '💧',
  'ecuacion_bernoulliIcon': '🌊',
  'flujo_laminarIcon': '➡️',
  'flujo_turbulentoIcon': '🌀',
  'numero_reynoldsIcon': '🔢',
  'viscosidadIcon': '🫧',
  'capa_limiteIcon': '📏',
  
  // Otros fluidos - EXPANDIDO
  'viscosidadIcon': '🫧',
  'turbulenciaIcon': '🌀',
  'aplicacionesfluidosIcon': '🏗️',
  
  // Fluidos adicionales (NUEVOS)
  'flujo_tuberiasIcon': '🚰',
  'perdidas_cargaIcon': '📉',
  'bombas_turbinasIcon': '⚙️',
  'cavitacionIcon': '💭',
  'golpe_arieteIcon': '💥',
  
  // ==================== ACÚSTICA ====================
  
  // Principal
  'acusticaIcon': '🔊',
  
  // Conceptos acústica - EXPANDIDO
  'ondassonorasIcon': '🎵',
  'intensidadIcon': '📢',
  'resonanciaIcon': '🎻',
  'efectodoppleracIcon': '📡',
  'instrumentosmusicalesIcon': '🎸',
  
  // Acústica adicional (NUEVOS)
  'ondas_sonoras': '🔊',
  'velocidad_sonidoIcon': '💨',
  'frecuencia_longitudIcon': '〰️',
  'propiedades_sonidoIcon': '📊',
  'intensidad_nivelIcon': '📢',
  'tono_timbre_alturaIcon': '🎵',
  'fenomenos_acusticosIcon': '🎭',
  'reflexion_ecoIcon': '🔙',
  'refraccion_sonidoIcon': '🌊',
  'interferencia_acusticaIcon': '💫',
  'difraccion_sonidoIcon': '✨',
  'resonancia_acusticaIcon': '🎻',
  'efecto_doppler_acusticoIcon': '🚗',
  'acustica_arquitectonicaIcon': '🏛️',
  'psicoacusticaIcon': '👂',
  'instrumentos_musicalesIcon': '🎹',
  'fisica_musicaIcon': '🎼',
  
  // ==================== FÍSICA DE PLASMAS ====================
  
  // Principal
  'plasmasIcon': '⚡',
  'propiedadesplasmasIcon': '🔬',
  'confinamientoIcon': '🧲',
  'aplicacionesplasmasIcon': '⚗️',
  
  // Plasmas adicional (NUEVOS)
  'estado_plasmaIcon': '☄️',
  'ionizacionIcon': '⚡',
  'temperatura_plasmaIcon': '🔥',
  'confinamiento_magneticoIcon': '🧲',
  'fusion_nuclearIcon': '☢️',
  'tokamakIcon': '⭕',
  'plasma_industrialIcon': '🏭',
  
  // ==================== TEORÍA DE CAMPOS ====================
  
  // Campos
  'camposclasicosIcon': '⚛️',
  'camposcuanticosIcon': '🔬',
  'teoriasgaugeIcon': '📐',
  
  // Campos adicional (NUEVOS)
  'teoria_campos_clasificosIcon': '🎓',
  'teoria_campos_cuanticosIcon': '⚛️',
  'teorias_gauge_simetriaIcon': '🔄',
  'modelo_estandarIcon': '🔬',
  'particulas_elementalesIcon': '⚛️',
  'interacciones_fundamentalesIcon': '🔗',
};

console.log('🔄 Convirtiendo iconos PNG a emojis ÚNICOS (Versión 2.0)...\n');

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
      console.log(`✓ ${iconName} → ${emoji} (${matches.length}x)`);
    } else {
      notFoundIcons.push(iconName);
    }
  }
  
  // Escribir el archivo modificado
  fs.writeFileSync(TOPICS_FILE, content, 'utf8');
  
  console.log(`\n✅ Conversión completada: ${changesCount} iconos convertidos\n`);
  
  // Análisis de emojis únicos
  const emojiMatches = content.match(/"icono":\s*"([^"]+)"/g);
  if (emojiMatches) {
    const allEmojis = emojiMatches.map(m => m.match(/"([^"]+)"/)[1]);
    const uniqueEmojis = [...new Set(allEmojis)];
    
    console.log(`📊 Análisis post-conversión:`);
    console.log(`   Total iconos: ${allEmojis.length}`);
    console.log(`   Iconos únicos: ${uniqueEmojis.length}`);
    console.log(`   Diversidad: ${((uniqueEmojis.length / allEmojis.length) * 100).toFixed(1)}%`);
    
    // Top 5 más repetidos
    const counts = {};
    allEmojis.forEach(e => counts[e] = (counts[e] || 0) + 1);
    const top5 = Object.entries(counts).sort((a, b) => b[1] - a[1]).slice(0, 5);
    console.log(`\n   🔝 Top 5 más usados:`);
    top5.forEach(([emoji, count]) => console.log(`      ${emoji} → ${count} veces`));
  }
  
  if (notFoundIcons.length > 0 && notFoundIcons.length < 50) {
    console.log(`\n⚠️  Iconos no encontrados (${notFoundIcons.length}):`);
    notFoundIcons.slice(0, 10).forEach(icon => console.log(`   - ${icon}`));
    if (notFoundIcons.length > 10) console.log(`   ... y ${notFoundIcons.length - 10} más`);
  }
  
  console.log('\n📝 Archivo actualizado: src/data/topics.generated.js');
  
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}
