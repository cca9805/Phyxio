/**
 * Configuración centralizada de iconos para todo el proyecto
 * Este archivo es la única fuente de verdad para los iconos
 * 
 * Organizado jerárquicamente por: Categoría Principal → Subcategoría → Tema → Subtema
 * 
 * Para actualizar automáticamente: npm run extract:icons
 * Para añadir iconos manualmente: Editar este archivo y regenerar sidebar
 */

export const iconConfig = {

  // ============================================================================
  // CATEGORÍAS PRINCIPALES
  // ============================================================================

  /** Física Clásica */
  'clasica': '🔬',

  /** Física Moderna */
  'moderna': '⚛️',

  // ============================================================================
  // MÉTODO CIENTÍFICO
  // ============================================================================

  /** Método Científico */
  'metodo_cientifico': '🔬',
  'introduccion': '🛠️',
  'hipotesis_y_experimentacion': '🧪',
  'magnitudes_y_unidades': '📏',
  'errores_e_incertidumbre': '📊',
  'analisis_de_datos': '📈',
  'comunicacion_cientifica': '📝',

  // ============================================================================
  // MECÁNICA
  // ============================================================================

  /** Mecánica */
  'mecanica': '⚙️',

  // ----------------------------------------------------------------------------
  // Cinemática
  // ----------------------------------------------------------------------------

  /** Cinemática */
  'cinematica': '🏃',

  /** Introducción al Movimiento (ESO) */
  'introduccion_movimiento': '📖',
  'que_es_movimiento': '❓',
  'tipos_de_movimiento': '📘',
  'graficas_basicas': '📘',
  'movimientos_cotidianos': '🚗',
  'profundizar_mas': '🔗',

  /** Movimientos */
  'mas': '〰️',  // Movimiento Armónico Simple
  'mcu': '🔄',  // Movimiento Circular Uniforme
  'mcua': '🌀',  // Movimiento Circular Uniformemente Acelerado
  'mp': '📐',   // Movimiento Parabólico
  'mr': '🔁',   // Movimiento Relativo
  'mru': '➡️',  // Movimiento Rectilíneo Uniforme
  'mruv': '📈', // Movimiento Rectilíneo Uniformemente Variado

  // ----------------------------------------------------------------------------
  // Dinámica
  // ----------------------------------------------------------------------------

  /** Dinámica */
  'dinamica': '💪',
  'equilibrio': '⚖️',
  'friccion': '🔥',
  'gravitacion': '🌍',
  'masaspoleas': '⚙️',
  'movcircular': '🔄',
  'movimpulso': '💥',
  'newton': '🍎',
  'oscilaciones': '〰️',
  'rotacion': '🔁',
  'trabajoenergia': '⚡',

  /** Máquinas Simples */
  'maquinas_simples': '🔧',
  'palancas': '⚖️',
  'poleas': '🪢',
  'plano_inclinado': '📐',
  'cuna': '🪓',
  'tornillo': '🔩',
  'rueda_eje': '⚙️',

  /** Colisiones */
  'colisiones': '💥',
  'colisiones_elasticas': '🎱',
  'colisiones_inelasticas': '💢',
  'centro_masa': '🎯',
  'dispersion': '💫',

  /** Energía en la Vida Cotidiana */
  'energia_cotidiana': '⚡',
  'fundamentos': '⚡',
  'fuentes_energia': '🔋',
  'renovables': '🌱',
  'no_renovables': '⚫',
  'almacenamiento': '🔋',
  'transporte_estabilidad': '⚡',
  'consumo_domestico': '🏠',
  'impacto_sostenibilidad': '♻️',
  'movilidad': '🚗',
  'energia_alimentos': '🍎',

  // ----------------------------------------------------------------------------
  // Estática
  // ----------------------------------------------------------------------------

  /** Estática */
  'estatica': '🏛️',
  'aplicaciones': '🏗️',
  'apoyos': '🔩',
  'centro': '🎯',
  'diagramas': '📊',
  'estabilidad': '⚖️',
  'estructuras': '🏗️',
  'friccionest': '🔥',
  'momentos': '🔄',
  'vectores': '➡️',

  /** Elasticidad y Deformación */
  'elasticidad_deformacion': '💪',
  'esfuerzo_deformacion': '💪',
  'modulos_elasticos': '📐',
  'ley_hooke': '🔗',
  'deformacion_vigas': '📏',


  // ----------------------------------------------------------------------------
  // Ondas Mecánicas
  // ----------------------------------------------------------------------------

  /** Ondas Mecánicas */
  'ondas_mecanicas': '🌊',
  'conceptos_basicos': '📖',
  'energia_ondas': '⚡',
  'ondas_estacionarias': '〰️',
  'ondas_longitudinales': '↔️',
  'ondas_transversales': '↕️',
  'superposicion': '➕',


  // ----------------------------------------------------------------------------
  // Mecánica Analítica
  // ----------------------------------------------------------------------------

  /** Mecánica Analítica */
  'mecanica_analitica': '📚',
  'coordenadas_generalizadas': '📐',
  'hamiltoniana': '🔬',
  'lagrangiana': '📐',
  'principio_minima_accion': '⚡',


  // ============================================================================
  // TERMODINÁMICA
  // ============================================================================

  /** Termodinámica */
  'termodinamica': '🌡️',

  /** 00. Calor y Temperatura Básicos (ESO) */
  '00_calor_temperatura_basicos': '🌡️',
  'diferencia_calor_temperatura': '🌡️',
  'cambios_de_estado': '🧊',
  'dilatacion_termica': '📏',
  'transferencia_calor_cotidiana': '🔥',
  'aislantes_conductores': '🧥',
  'graficas_temperatura_tiempo': '📊',

  /** 01. Conceptos Fundamentales */
  '01_conceptos_fundamentales': '📖',
  'introduccion_a_la_termodinamica': '🌡️',
  'sistemas_termodinamicos': '📦',
  'frontera_y_entorno': '🔲',
  'estado_y_equilibrio': '⚖️',
  'propiedades_termicas': '📊',

  /** 02. Magnitudes Térmicas */
  '02_magnitudes_termicas': '📏',
  'temperatura': '🌡️',
  'calor': '🔥',
  'presion': '💨',
  'trabajo_termodinamico': '⚙️',

  /** 03. Principios de la Termodinámica */
  '03_principios_de_la_termodinamica': '⚖️',
  'ley_cero_de_la_termodinamica': '0️⃣',
  'primera_ley_de_la_termodinamica': '1️⃣',
  'segunda_ley_de_la_termodinamica': '2️⃣',
  'tercera_ley_de_la_termodinamica': '3️⃣',
  'formulaciones_equivalentes': '🔄',

  /** 04. Modelos Moleculares y Gases */
  '04_modelos_moleculares_y_gases': '💨',
  'teoria_cinetica_de_los_gases': '⚛️',
  'gases_ideales': '💨',
  'gases_reales': '🌫️',
  'ecuaciones_de_estado': '📐',

  /** 05. Entropía */
  '05_entropia': '🔀',
  'entropia_y_segunda_ley': '📊',
  'interpretacion_estadistica': '📈',
  'medicion_y_calculo_de_la_entropia': '🧮',
  'entropia_en_procesos_reales': '🔄',
  'entropia_de_mezcla': '🌀',

  /** 06. Procesos Termodinámicos */
  '06_procesos_termodinamicos': '🔄',
  'proceso_isotermico': '🌡️',
  'proceso_isobarico': '💨',
  'proceso_isocorico': '📦',
  'proceso_adiabatico': '🚫',
  'proceso_politropico': '📈',

  /** 07. Potenciales Termodinámicos */
  '07_potenciales_termodinamicos': '⚡',
  'energia_interna': '🔋',
  'entalpia': '🔥',
  'energia_libre_helmholtz': '🔬',
  'energia_libre_gibbs': '⚗️',
  'relaciones_maxwell': '📐',
  'criterios_equilibrio': '⚖️',

  /** 08. Máquinas Térmicas y Refrigeración */
  '08_maquinas_termicas_y_refrigeracion': '🏭',
  'maquinas_termicas': '⚙️',
  'ciclo_de_carnot': '🔄',
  'refrigeracion_y_bombas_de_calor': '❄️',

  /** 09. Ciclos Termodinámicos */
  '09_ciclos_termodinamicos': '🔁',
  'ciclo_otto': '🚗',
  'ciclo_diesel': '🚛',
  'ciclo_rankine': '🏭',
  'ciclo_brayton': '✈️',
  'ciclo_stirling': '🔧',
  'ciclo_ericsson': '⚙️',

  /** 10. Ciclos Combinados */
  '10_ciclos_combinados': '🔗',
  'ciclo_de_brayton_rankine': '🏭',
  'ciclo_de_rankine_con_turbina_de_gas': '⚡',
  'cogeneracion': '♻️',

  /** 11. Transferencia de Calor */
  '11_transferencia_de_calor': '🔥',
  'conceptos_basicos': '📖',
  'conduccion': '➡️',
  'ley_de_fourier': '📐',
  'conveccion': '🌀',
  'ley_de_newton': '🍎',
  'radiacion': '☀️',
  'ley_de_stefan_boltzmann': '📊',
  'aislamiento_termico': '🧥',
  'resistencia_termica_equivalente': '🔌',
  'intercambiadores_de_calor': '🔄',

  /** 12. Aplicaciones Prácticas */
  '12_aplicaciones_practicas': '🏭',
  'motores_de_combustion_interna': '🚗',
  'centrales_electricas': '⚡',
  'sistemas_de_climatizacion': '❄️',
  'bombas_termicas_domesticas': '🏠',
  'ciclos_de_potencia': '⚙️',
  'ciclos_de_refrigeracion': '❄️',

  /** 13. Termodinámica Estadística */
  '13_termodinamica_estadistica': '📊',
  'microestados_y_macroestados': '🔬',
  'funcion_de_particion': '📐',
  'ensambles_estadisticos': '📊',
  'distribuciones_de_boltzmann_y_gibbs': '📈',
  'estadisticas_cuanticas': '⚛️',
  'gas_ideal_cuantico': '💨',
  'gas_de_fermi': '🔬',
  'condensacion_bose_einstein': '❄️',
  'fonones_modelo_debye': '🌊',
  'transiciones_de_fase': '🔄',
  'modelo_de_ising': '🧲',
  'teorema_de_equiparticion': '⚖️',
  'calculo_de_propiedades_termodinamicas': '🧮',
  'aplicaciones_de_la_estadistica_cuantica': '⚛️',
  'simulaciones_monte_carlo': '🎲',
  'analisis_de_sistemas_complejos': '🔬',


  // ============================================================================
  // MECÁNICA DE FLUIDOS
  // ============================================================================

  /** Mecánica de Fluidos */
  'mecanica_de_fluidos': '💧',

  /** Introducción a Fluidos (ESO) */
  'introduccion_fluidos': '💧',
  'presion_liquidos': '💧',
  'presion_atmosferica': '🌍',
  'flotacion_basica': '🛟',
  'aplicaciones_cotidianas': '🏠',
  'fontaneria': '🚰',
  'frenos_hidraulicos': '🚗',
  'neumaticos': '🚗',

  /** Estática de Fluidos */
  'estatica_de_fluidos': '💧',
  'conceptos_fundamentales': '📖',
  'densidad_presion': '📊',
  'presion_hidrostatica': '💧',
  'principio_pascal': '⚙️',
  'principio_arquimedes': '🛟',
  'flotacion': '🛟',
  'flotabilidad_y_estabilidad': '⚖️',
  'manometria': '📏',
  'vasos_comunicantes': '💧',
  'fuerzas_sobre_superficies': '💪',

  /** Dinámica de Fluidos */
  'dinamica_de_fluidos': '🌊',
  'ecuacion_de_bernoulli': '📐',
  'analisis_diferencial_de_fluidos': '🔬',

  /** Flujo Compresible */
  'flujo_compresible': '💨',
  'numero_mach': '✈️',
  'flujo_isentropico': '📊',
  'flujo_supersonico': '🚀',
  'ondas_choque': '💥',

  /** Otros */
  'analisis_dimensional_y_similitud': '📐',
  'flujo_en_tuberias': '🚰',
  'flujo_sobre_cuerpos': '🌊',
  'maquinaria_de_fluidos': '⚙️',


  // ============================================================================
  // ÓPTICA
  // ============================================================================

  /** Óptica */
  'optica': '💡',

  /** Introducción a la Luz (ESO) */
  'introduccion_luz': '💡',
  'que_es_la_luz': '💡',
  'luz_y_sombras': '🌓',
  'velocidad_de_la_luz': '⚡',

  /** Reflexión Básica (ESO) */
  'reflexion_basica': '↩️',
  'ley_reflexion_simple': '↩️',
  'espejos_planos': '🪞',
  'espejos_curvos_intro': '🔭',

  /** Refracción Básica (ESO) */
  'refraccion_basica': '💧',
  'que_es_refraccion': '💧',
  'lentes_convergentes': '🔍',
  'lentes_divergentes': '🔎',

  /** Visión y Ojo Humano (ESO) */
  'vision_y_ojo_humano': '👁️',
  'anatomia_del_ojo': '👁️',
  'como_vemos': '👀',
  'defectos_visuales': '👓',
  'correccion_visual': '🩺',

  /** Colores y Espectro (ESO) */
  'colores_y_espectro': '🌈',
  'luz_blanca_y_colores': '⚪',
  'colores_primarios': '🎨',
  'espectro_visible': '🌈',
  'absorcion_y_reflexion': '↩️',

  /** Aplicaciones Cotidianas (ESO) */
  'aplicaciones_cotidianas_optica': '📷',
  'instrumentos_simples': '🔬',
  'fotografia_basica': '📷',
  'fibra_optica_intro': '💡',

  /** Óptica Geométrica */
  'optica_geometrica': '📐',
  'reflexion_y_espejos': '🪞',
  'refraccion_y_lentes': '🔍',
  'instrumentos_opticos': '🔬',
  'aberraciones_opticas': '🌀',

  /** Óptica Física */
  'optica_fisica': '🌊',
  'interferencia': '〰️',
  'difraccion': '🌊',
  'polarizacion': '↕️',
  'dispersion': '🌈',

  /** Fotometría */
  'fotometria': '💡',
  'intensidad_luminosa': '💡',
  'flujo_luminoso': '✨',
  'iluminacion': '💡',


  // ============================================================================
  // ELECTROMAGNETISMO
  // ============================================================================

  /** Electromagnetismo */
  'electromagnetismo': '⚡',

  /** Electricidad */
  'electricidad': '⚡',
  'carga-fuerza': '⚡',
  'campos-electricos': '⚡',
  'potencial': '🔋',
  'capacidad': '💠',
  'corriente-ohm': '🔌',

  /** Circuitos */
  'circuitos': '🔌',
  'circuitos-basicos': '🔀',
  'circuitos': '⚡',
  'circuitos-basicos': '🔌',
  'circuitos-serie': '🔗',
  'circuitos-paralelo': '↕️',
  'circuitos-mixtos': '🔄',
  'circuitos-medios': '🔋',
  'circuitos-cc': '🔋',
  'circuitos-ca': '〰️',
  'circuitos-avanzados': '🎓',
  'transitorios': '⚡',

  /** Componentes Eléctricos */
  'componentes-electricos': '🔩',
  'resistencias': '〰️',
  'condensadores': '💠',
  'bobinas': '🌀',
  'diodos': '➡️',
  'transistores': '🔧',
  'transformadores': '🔁',

  /** Electricidad Doméstica (ESO) */
  'electricidad-domestica': '🏠',
  'aparatos-electricos': '📱',
  'consumo-factura': '📊',
  'ahorro-energetico': '🌍',
  'instalaciones-electricas': '🏗️',

  /** Seguridad Eléctrica (ESO) */
  'seguridad-electrica': '⚠️',
  'riesgos-electricos': '⚡',
  'prevencion-accidentes': '🛑',
  'primeros-auxilios': '🚑',
  'uso-seguro-aparatos': '✅',
  'fusibles': '⚙️',

  /** Energía y Pilas (ESO) */
  'energia_electrica': '🔋',
  'pilas-baterias': '🔋',
  'bombillas-leds': '💡',

  /** Magnetismo */
  'magnetismo': '🧲',
  'magnetismo-basico': '🧲',
  'imanes-magnetismo': '🧲',
  'campo-magnetico': '🧲',
  'electroimanes': '⚡',
  'aplicaciones-cotidianas': '🏠',
  'campos-fuerza': '💪',
  'fuentes-campo': '🔋',
  'induccion': '🌀',

  /** Ecuaciones de Maxwell */
  'maxwell': '📐',
  'ecuaciones_campo': '📐',
  'campos_escalares': '🌡️',
  'campos_vectoriales': '➡️',

  /** Ondas Electromagnéticas */
  'ondas': '📡',
  'espectro-electromagnetico': '🌈',
  'ondas-radio-microondas': '📡',
  'radiacion-infrarroja': '🔴',
  'luz-visible-optica': '💡',
  'radiacion-ultravioleta': '🟣',
  'rayos-x-gamma': '☢️',
  'propagacion-fenomenos': '🌊',
  'aplicaciones-tecnologicas': '📱',

  /** Electrónica */
  'electronica': '🔧',
  'dispositivos-semiconductores': '💎',
  'dispositivos-fotonicos': '💡',
  'familias-logicas': '🔢',


  // ============================================================================
  // ACÚSTICA
  // ============================================================================

  /** Acústica */
  'acustica': '🔊',
  'ondas_sonoras': '🔊',
  'propiedades_sonido': '🎵',
  'efecto_doppler': '🚗',
  'resonancia': '🎸',
  'fenomenos_acusticos': '🌊',
  'acustica_arquitectonica': '🏛️',
  'oido_humano': '👂',
  'contaminacion_acustica': '🔊',
  'proteccion_auditiva': '🛡️',


  // ============================================================================
  // FÍSICA DE PLASMAS
  // ============================================================================

  /** Física de Plasmas */
  'fisica_plasmas': '⚡',


  // ============================================================================
  // TEORÍA DE CAMPOS CLÁSICOS
  // ============================================================================

  /** Teoría de Campos Clásicos */
  'teoria_campos_clasicos': '🌀',


  // ============================================================================
  // PATHS COMPLETOS PARA SUBTEMAS (agregados automáticamente)
  // ============================================================================

  // acustica
  'acustica/acustica_arquitectonica': '🏛️',
  'acustica/acustica_musical': '📚',
  'acustica/contaminacion_acustica': '🔊',
  'acustica/efecto_doppler': '🚗',
  'acustica/fenomenos_acusticos': '🌊',
  'acustica/oido_humano': '👂',
  'acustica/ondas_sonoras': '🔊',
  'acustica/propiedades_sonido': '🎵',
  'acustica/proteccion_auditiva': '🛡️',
  'acustica/psicoacustica': '📚',
  'acustica/resonancia': '🎸',
  'acustica/ultrasonido': '📚',

  // electromagnetismo
  'electromagnetismo/electricidad': '⚡',
  'electromagnetismo/electricidad/campos-electricos': '⚡',
  'electromagnetismo/electricidad/capacidad': '💠',
  'electromagnetismo/electricidad/carga-fuerza': '⚡',
  'electromagnetismo/electricidad/circuitos': '⚡',
  'electromagnetismo/electricidad/circuitos/circuitos-basicos': '🔌',
  'electromagnetismo/electricidad/circuitos/circuitos-medios': '🔋',
  'electromagnetismo/electricidad/circuitos/circuitos-avanzados': '🎓',
  'electromagnetismo/electricidad/circuitos-basicos': '🔌',
  'electromagnetismo/electricidad/circuitos-basicos/circuitos-mixtos': '🔄',
  'electromagnetismo/electricidad/circuitos-basicos/circuitos-paralelo': '↕️',
  'electromagnetismo/electricidad/circuitos-basicos/circuitos-serie': '🔗',
  'electromagnetismo/electricidad/circuitos-medios': '🔋',
  'electromagnetismo/electricidad/circuitos-medios/circuitos-ca': '〰️',
  'electromagnetismo/electricidad/circuitos-medios/circuitos-cc': '🔋',
  'electromagnetismo/electricidad/circuitos-medios/transitorios': '⚡',
  'electromagnetismo/electricidad/circuitos-avanzados': '🎓',
  'electromagnetismo/electricidad/circuitos-avanzados/circuitos-avanzados-cc': '🔋',
  'electromagnetismo/electricidad/circuitos-avanzados/circuitos-avanzados-ca': '〰️',
  'electromagnetismo/electricidad/componentes-electricos': '🔩',
  'electromagnetismo/electricidad/componentes-electricos/bobinas': '🌀',
  'electromagnetismo/electricidad/componentes-electricos/bombillas-leds': '💡',
  'electromagnetismo/electricidad/componentes-electricos/condensadores': '💠',
  'electromagnetismo/electricidad/componentes-electricos/diodos': '➡️',
  'electromagnetismo/electricidad/componentes-electricos/fusibles': '⚙️',
  'electromagnetismo/electricidad/componentes-electricos/pilas-baterias': '🔋',
  'electromagnetismo/electricidad/componentes-electricos/resistencias': '〰️',
  'electromagnetismo/electricidad/componentes-electricos/transistores': '🔧',
  'electromagnetismo/electricidad/corriente-ohm': '🔌',
  'electromagnetismo/electricidad/electricidad-domestica': '🏠',
  'electromagnetismo/electricidad/electricidad-domestica/ahorro-energetico': '🌍',
  'electromagnetismo/electricidad/electricidad-domestica/aparatos-electricos': '📱',
  'electromagnetismo/electricidad/electricidad-domestica/consumo-factura': '📊',
  'electromagnetismo/electricidad/electricidad-domestica/instalaciones-electricas': '🏗️',
  'electromagnetismo/electricidad/potencial': '🔋',
  'electromagnetismo/electricidad/seguridad-electrica': '⚠️',
  'electromagnetismo/electricidad/seguridad-electrica/prevencion-accidentes': '🛑',
  'electromagnetismo/electricidad/seguridad-electrica/primeros-auxilios': '🚑',
  'electromagnetismo/electricidad/seguridad-electrica/riesgos-electricos': '⚡',
  'electromagnetismo/electricidad/seguridad-electrica/uso-seguro-aparatos': '✅',
  'electromagnetismo/electricidad/transformadores': '🔁',
  'electromagnetismo/electronica': '🔧',
  'electromagnetismo/electronica/dispositivos-fotonicos': '💡',
  'electromagnetismo/electronica/dispositivos-semiconductores': '💎',
  'electromagnetismo/electronica/familias-logicas': '🔢',
  'electromagnetismo/magnetismo': '🧲',
  'electromagnetismo/magnetismo/campos-fuerza': '💪',
  'electromagnetismo/magnetismo/fuentes-campo': '🔋',
  'electromagnetismo/magnetismo/induccion': '🌀',
  'electromagnetismo/magnetismo/magnetismo-basico': '🧲',
  'electromagnetismo/magnetismo/magnetismo-basico/aplicaciones-cotidianas': '🏠',
  'electromagnetismo/magnetismo/magnetismo-basico/campo-magnetico': '🧲',
  'electromagnetismo/magnetismo/magnetismo-basico/electroimanes': '⚡',
  'electromagnetismo/magnetismo/magnetismo-basico/imanes-magnetismo': '🧲',
  'electromagnetismo/maxwell': '📐',
  'electromagnetismo/ondas': '📡',
  'electromagnetismo/ondas/aplicaciones-tecnologicas': '📱',
  'electromagnetismo/ondas/espectro-electromagnetico': '🌈',
  'electromagnetismo/ondas/luz-visible-optica': '💡',
  'electromagnetismo/ondas/ondas-radio-microondas': '📡',
  'electromagnetismo/ondas/propagacion-fenomenos': '🌊',
  'electromagnetismo/ondas/radiacion-infrarroja': '🔴',
  'electromagnetismo/ondas/radiacion-ultravioleta': '🟣',
  'electromagnetismo/ondas/rayos-x-gamma': '☢️',

  // fisica_plasmas
  'fisica_plasmas/aplicaciones_plasma': '📚',
  'fisica_plasmas/estados_materia_plasma': '📚',
  'fisica_plasmas/ionizacion_plasma': '📚',

  // introduccion_fluidos
  'introduccion_fluidos/aplicaciones_cotidianas': '🏠',
  'introduccion_fluidos/aplicaciones_cotidianas/fontaneria': '🚰',
  'introduccion_fluidos/aplicaciones_cotidianas/frenos_hidraulicos': '🚗',
  'introduccion_fluidos/aplicaciones_cotidianas/neumaticos': '🚗',
  'introduccion_fluidos/flotacion_basica': '🛟',
  'introduccion_fluidos/presion_atmosferica': '🌍',
  'introduccion_fluidos/presion_liquidos': '💧',

  // mecanica
  'mecanica/cinematica': '🏃',
  'mecanica/cinematica/introduccion_movimiento': '📖',
  'mecanica/cinematica/introduccion_movimiento/graficas_basicas': '📘',
  'mecanica/cinematica/introduccion_movimiento/movimientos_cotidianos': '🚗',
  'mecanica/cinematica/introduccion_movimiento/profundizar_mas': '🔗',
  'mecanica/cinematica/introduccion_movimiento/que_es_movimiento': '❓',
  'mecanica/cinematica/introduccion_movimiento/tipos_de_movimiento': '📘',
  'mecanica/cinematica/mas': '〰️',
  'mecanica/cinematica/mcu': '🔄',
  'mecanica/cinematica/mcua': '🌀',
  'mecanica/cinematica/mp': '📐',
  'mecanica/cinematica/mr': '🔁',
  'mecanica/cinematica/mru': '➡️',
  'mecanica/cinematica/mruv': '📈',
  'mecanica/dinamica': '💪',
  'mecanica/dinamica/colisiones': '💥',
  'mecanica/dinamica/colisiones/centro_masa': '🎯',
  'mecanica/dinamica/colisiones/colisiones_elasticas': '🎱',
  'mecanica/dinamica/colisiones/colisiones_inelasticas': '💢',
  'mecanica/dinamica/colisiones/dispersion': '🌈',
  'mecanica/dinamica/energia_cotidiana': '⚡',
  'mecanica/dinamica/energia_cotidiana/almacenamiento': '🔋',
  'mecanica/dinamica/energia_cotidiana/consumo_domestico': '🏠',
  'mecanica/dinamica/energia_cotidiana/energia_alimentos': '🍎',
  'mecanica/dinamica/energia_cotidiana/fuentes_energia': '🔋',
  'mecanica/dinamica/energia_cotidiana/fuentes_energia/no_renovables': '⚫',
  'mecanica/dinamica/energia_cotidiana/fuentes_energia/renovables': '🌱',
  'mecanica/dinamica/energia_cotidiana/fundamentos': '⚡',
  'mecanica/dinamica/energia_cotidiana/impacto_sostenibilidad': '♻️',
  'mecanica/dinamica/energia_cotidiana/movilidad': '🚗',
  'mecanica/dinamica/energia_cotidiana/transporte_estabilidad': '⚡',
  'mecanica/dinamica/equilibrio': '⚖️',
  'mecanica/dinamica/friccion': '🔥',
  'mecanica/dinamica/gravitacion': '🌍',
  'mecanica/dinamica/maquinas_simples': '🔧',
  'mecanica/dinamica/maquinas_simples/cuna': '🪓',
  'mecanica/dinamica/maquinas_simples/introduccion': '🛠️',
  'mecanica/dinamica/maquinas_simples/palancas': '⚖️',
  'mecanica/dinamica/maquinas_simples/plano_inclinado': '📐',
  'mecanica/dinamica/maquinas_simples/poleas': '🪢',
  'mecanica/dinamica/maquinas_simples/rueda_eje': '⚙️',
  'mecanica/dinamica/maquinas_simples/tornillo': '🔩',
  'mecanica/dinamica/masaspoleas': '⚙️',
  'mecanica/dinamica/movcircular': '🔄',
  'mecanica/dinamica/movimpulso': '💥',
  'mecanica/dinamica/newton': '🍎',
  'mecanica/dinamica/oscilaciones': '〰️',
  'mecanica/dinamica/rotacion': '🔁',
  'mecanica/dinamica/trabajoenergia': '⚡',
  'mecanica/estatica': '🏛️',
  'mecanica/estatica/aplicaciones': '🏗️',
  'mecanica/estatica/apoyos': '🔩',
  'mecanica/estatica/centro': '🎯',
  'mecanica/estatica/diagramas': '📊',
  'mecanica/estatica/elasticidad_deformacion': '💪',
  'mecanica/estatica/elasticidad_deformacion/deformacion_vigas': '📏',
  'mecanica/estatica/elasticidad_deformacion/esfuerzo_deformacion': '💪',
  'mecanica/estatica/elasticidad_deformacion/ley_hooke': '🔗',
  'mecanica/estatica/elasticidad_deformacion/modulos_elasticos': '📐',
  'mecanica/estatica/estabilidad': '⚖️',
  'mecanica/estatica/estructuras': '🏗️',
  'mecanica/estatica/friccionest': '🔥',
  'mecanica/estatica/momentos': '🔄',
  'mecanica/estatica/vectores': '➡️',
  'mecanica/mecanica_analitica': '📚',
  'mecanica/mecanica_analitica/coordenadas_generalizadas': '📐',
  'mecanica/mecanica_analitica/hamiltoniana': '🔬',
  'mecanica/mecanica_analitica/lagrangiana': '📐',
  'mecanica/mecanica_analitica/principio_minima_accion': '⚡',
  'mecanica/ondas_mecanicas': '🌊',
  'mecanica/ondas_mecanicas/conceptos_basicos': '📖',
  'mecanica/ondas_mecanicas/energia_ondas': '⚡',
  'mecanica/ondas_mecanicas/ondas_estacionarias': '〰️',
  'mecanica/ondas_mecanicas/ondas_longitudinales': '↔️',
  'mecanica/ondas_mecanicas/ondas_transversales': '↕️',
  'mecanica/ondas_mecanicas/superposicion': '➕',

  // mecanica_de_fluidos
  'mecanica_de_fluidos/analisis_dimensional_y_similitud': '📐',
  'mecanica_de_fluidos/dinamica_de_fluidos': '🌊',
  'mecanica_de_fluidos/dinamica_de_fluidos/analisis_diferencial_de_fluidos': '🔬',
  'mecanica_de_fluidos/dinamica_de_fluidos/ecuacion_de_bernoulli': '📐',
  'mecanica_de_fluidos/estatica_de_fluidos': '💧',
  'mecanica_de_fluidos/estatica_de_fluidos/conceptos_fundamentales': '📖',
  'mecanica_de_fluidos/estatica_de_fluidos/densidad_presion': '📊',
  'mecanica_de_fluidos/estatica_de_fluidos/flotabilidad_y_estabilidad': '⚖️',
  'mecanica_de_fluidos/estatica_de_fluidos/flotacion': '🛟',
  'mecanica_de_fluidos/estatica_de_fluidos/fuerzas_sobre_superficies': '💪',
  'mecanica_de_fluidos/estatica_de_fluidos/manometria': '📏',
  'mecanica_de_fluidos/estatica_de_fluidos/presion': '💨',
  'mecanica_de_fluidos/estatica_de_fluidos/presion_hidrostatica': '💧',
  'mecanica_de_fluidos/estatica_de_fluidos/principio_arquimedes': '🛟',
  'mecanica_de_fluidos/estatica_de_fluidos/principio_pascal': '⚙️',
  'mecanica_de_fluidos/estatica_de_fluidos/vasos_comunicantes': '💧',
  'mecanica_de_fluidos/flujo_compresible': '💨',
  'mecanica_de_fluidos/flujo_compresible/flujo_isentropico': '📊',
  'mecanica_de_fluidos/flujo_compresible/flujo_supersonico': '🚀',
  'mecanica_de_fluidos/flujo_compresible/numero_mach': '✈️',
  'mecanica_de_fluidos/flujo_compresible/ondas_choque': '💥',
  'mecanica_de_fluidos/flujo_en_tuberias': '🚰',
  'mecanica_de_fluidos/flujo_sobre_cuerpos': '🌊',
  'mecanica_de_fluidos/maquinaria_de_fluidos': '⚙️',

  // metodo_cientifico
  'metodo_cientifico/analisis_de_datos': '📈',
  'metodo_cientifico/comunicacion_cientifica': '📝',
  'metodo_cientifico/errores_e_incertidumbre': '📊',
  'metodo_cientifico/hipotesis_y_experimentacion': '🧪',
  'metodo_cientifico/introduccion': '🛠️',
  'metodo_cientifico/magnitudes_y_unidades': '📏',

  // optica
  'optica/aplicaciones_cotidianas': '🏠',
  'optica/aplicaciones_cotidianas/fibra_optica_intro': '💡',
  'optica/aplicaciones_cotidianas/fotografia_basica': '📷',
  'optica/aplicaciones_cotidianas/instrumentos_simples': '🔬',
  'optica/colores_y_espectro': '🌈',
  'optica/colores_y_espectro/absorcion_y_reflexion': '↩️',
  'optica/colores_y_espectro/colores_primarios': '🎨',
  'optica/colores_y_espectro/espectro_visible': '🌈',
  'optica/colores_y_espectro/luz_blanca_y_colores': '⚪',
  'optica/fotometria': '💡',
  'optica/fotometria/flujo_luminoso': '✨',
  'optica/fotometria/iluminacion': '💡',
  'optica/fotometria/intensidad_luminosa': '💡',
  'optica/introduccion_luz': '💡',
  'optica/introduccion_luz/luz_y_sombras': '🌓',
  'optica/introduccion_luz/que_es_la_luz': '💡',
  'optica/introduccion_luz/velocidad_de_la_luz': '⚡',
  'optica/optica_fisica': '🌊',
  'optica/optica_fisica/difraccion': '🌊',
  'optica/optica_fisica/dispersion': '🌈',
  'optica/optica_fisica/interferencia': '〰️',
  'optica/optica_fisica/optica_no_lineal': '📚',
  'optica/optica_fisica/polarizacion': '↕️',
  'optica/optica_geometrica': '📐',
  'optica/optica_geometrica/aberraciones_opticas': '🌀',
  'optica/optica_geometrica/instrumentos_opticos': '🔬',
  'optica/optica_geometrica/reflexion_y_espejos': '🪞',
  'optica/optica_geometrica/refraccion_y_lentes': '🔍',
  'optica/reflexion_basica': '↩️',
  'optica/reflexion_basica/espejos_curvos_intro': '🔭',
  'optica/reflexion_basica/espejos_planos': '🪞',
  'optica/reflexion_basica/ley_reflexion_simple': '↩️',
  'optica/refraccion_basica': '💧',
  'optica/refraccion_basica/lentes_convergentes': '🔍',
  'optica/refraccion_basica/lentes_divergentes': '🔎',
  'optica/refraccion_basica/que_es_refraccion': '💧',
  'optica/vision_y_ojo_humano': '👁️',
  'optica/vision_y_ojo_humano/anatomia_del_ojo': '👁️',
  'optica/vision_y_ojo_humano/como_vemos': '👀',
  'optica/vision_y_ojo_humano/correccion_visual': '🩺',
  'optica/vision_y_ojo_humano/defectos_visuales': '👓',

  // teoria_campos_clasicos
  'teoria_campos_clasicos/campos_escalares': '🌡️',
  'teoria_campos_clasicos/campos_vectoriales': '➡️',
  'teoria_campos_clasicos/ecuaciones_campo': '📐',

  // termodinamica
  'termodinamica/00_calor_temperatura_basicos': '🌡️',
  'termodinamica/00_calor_temperatura_basicos/aislantes_conductores': '🧥',
  'termodinamica/00_calor_temperatura_basicos/cambios_de_estado': '🧊',
  'termodinamica/00_calor_temperatura_basicos/diferencia_calor_temperatura': '🌡️',
  'termodinamica/00_calor_temperatura_basicos/dilatacion_termica': '📏',
  'termodinamica/00_calor_temperatura_basicos/graficas_temperatura_tiempo': '📊',
  'termodinamica/00_calor_temperatura_basicos/transferencia_calor_cotidiana': '🔥',
  'termodinamica/01_conceptos_fundamentales': '📖',
  'termodinamica/01_conceptos_fundamentales/estado_y_equilibrio': '⚖️',
  'termodinamica/01_conceptos_fundamentales/frontera_y_entorno': '🔲',
  'termodinamica/01_conceptos_fundamentales/introduccion_a_la_termodinamica': '🌡️',
  'termodinamica/01_conceptos_fundamentales/propiedades_termicas': '📊',
  'termodinamica/01_conceptos_fundamentales/sistemas_termodinamicos': '📦',
  'termodinamica/02_magnitudes_termicas': '📏',
  'termodinamica/02_magnitudes_termicas/calor': '🔥',
  'termodinamica/02_magnitudes_termicas/presion': '💨',
  'termodinamica/02_magnitudes_termicas/temperatura': '🌡️',
  'termodinamica/02_magnitudes_termicas/trabajo_termodinamico': '⚙️',
  'termodinamica/03_principios_de_la_termodinamica': '⚖️',
  'termodinamica/03_principios_de_la_termodinamica/formulaciones_equivalentes': '🔄',
  'termodinamica/03_principios_de_la_termodinamica/ley_cero_de_la_termodinamica': '0️⃣',
  'termodinamica/03_principios_de_la_termodinamica/primera_ley_de_la_termodinamica': '1️⃣',
  'termodinamica/03_principios_de_la_termodinamica/segunda_ley_de_la_termodinamica': '2️⃣',
  'termodinamica/03_principios_de_la_termodinamica/tercera_ley_de_la_termodinamica': '3️⃣',
  'termodinamica/04_modelos_moleculares_y_gases': '💨',
  'termodinamica/04_modelos_moleculares_y_gases/ecuaciones_de_estado': '📐',
  'termodinamica/04_modelos_moleculares_y_gases/gases_ideales': '💨',
  'termodinamica/04_modelos_moleculares_y_gases/gases_reales': '🌫️',
  'termodinamica/04_modelos_moleculares_y_gases/teoria_cinetica_de_los_gases': '⚛️',
  'termodinamica/05_entropia': '🔀',
  'termodinamica/05_entropia/entropia_de_mezcla': '🌀',
  'termodinamica/05_entropia/entropia_en_procesos_reales': '🔄',
  'termodinamica/05_entropia/entropia_y_segunda_ley': '📊',
  'termodinamica/05_entropia/interpretacion_estadistica': '📈',
  'termodinamica/05_entropia/medicion_y_calculo_de_la_entropia': '🧮',
  'termodinamica/06_procesos_termodinamicos': '🔄',
  'termodinamica/06_procesos_termodinamicos/proceso_adiabatico': '🚫',
  'termodinamica/06_procesos_termodinamicos/proceso_isobarico': '💨',
  'termodinamica/06_procesos_termodinamicos/proceso_isocorico': '📦',
  'termodinamica/06_procesos_termodinamicos/proceso_isotermico': '🌡️',
  'termodinamica/06_procesos_termodinamicos/proceso_politropico': '📈',
  'termodinamica/07_potenciales_termodinamicos': '⚡',
  'termodinamica/07_potenciales_termodinamicos/criterios_equilibrio': '⚖️',
  'termodinamica/07_potenciales_termodinamicos/energia_interna': '🔋',
  'termodinamica/07_potenciales_termodinamicos/energia_libre_gibbs': '⚗️',
  'termodinamica/07_potenciales_termodinamicos/energia_libre_helmholtz': '🔬',
  'termodinamica/07_potenciales_termodinamicos/entalpia': '🔥',
  'termodinamica/07_potenciales_termodinamicos/relaciones_maxwell': '📐',
  'termodinamica/08_maquinas_termicas_y_refrigeracion': '🏭',
  'termodinamica/08_maquinas_termicas_y_refrigeracion/ciclo_de_carnot': '🔄',
  'termodinamica/08_maquinas_termicas_y_refrigeracion/maquinas_termicas': '⚙️',
  'termodinamica/08_maquinas_termicas_y_refrigeracion/refrigeracion_y_bombas_de_calor': '❄️',
  'termodinamica/09_ciclos_termodinamicos': '🔁',
  'termodinamica/09_ciclos_termodinamicos/ciclo_brayton': '✈️',
  'termodinamica/09_ciclos_termodinamicos/ciclo_diesel': '🚛',
  'termodinamica/09_ciclos_termodinamicos/ciclo_ericsson': '⚙️',
  'termodinamica/09_ciclos_termodinamicos/ciclo_otto': '🚗',
  'termodinamica/09_ciclos_termodinamicos/ciclo_rankine': '🏭',
  'termodinamica/09_ciclos_termodinamicos/ciclo_stirling': '🔧',
  'termodinamica/10_ciclos_combinados': '🔗',
  'termodinamica/10_ciclos_combinados/ciclo_de_brayton_rankine': '🏭',
  'termodinamica/10_ciclos_combinados/ciclo_de_rankine_con_turbina_de_gas': '⚡',
  'termodinamica/10_ciclos_combinados/cogeneracion': '♻️',
  'termodinamica/11_transferencia_de_calor': '🔥',
  'termodinamica/11_transferencia_de_calor/aislamiento_termico': '🧥',
  'termodinamica/11_transferencia_de_calor/conceptos_basicos': '📖',
  'termodinamica/11_transferencia_de_calor/conduccion': '➡️',
  'termodinamica/11_transferencia_de_calor/conduccion/ley_de_fourier': '📐',
  'termodinamica/11_transferencia_de_calor/conveccion': '🌀',
  'termodinamica/11_transferencia_de_calor/conveccion/ley_de_newton': '🍎',
  'termodinamica/11_transferencia_de_calor/intercambiadores_de_calor': '🔄',
  'termodinamica/11_transferencia_de_calor/radiacion': '☀️',
  'termodinamica/11_transferencia_de_calor/radiacion/ley_de_stefan_boltzmann': '📊',
  'termodinamica/11_transferencia_de_calor/resistencia_termica_equivalente': '🔌',
  'termodinamica/12_aplicaciones_practicas': '🏭',
  'termodinamica/12_aplicaciones_practicas/bombas_termicas_domesticas': '🏠',
  'termodinamica/12_aplicaciones_practicas/centrales_electricas': '⚡',
  'termodinamica/12_aplicaciones_practicas/ciclos_de_potencia': '⚙️',
  'termodinamica/12_aplicaciones_practicas/ciclos_de_refrigeracion': '❄️',
  'termodinamica/12_aplicaciones_practicas/motores_de_combustion_interna': '🚗',
  'termodinamica/12_aplicaciones_practicas/sistemas_de_climatizacion': '❄️',
  'termodinamica/13_termodinamica_estadistica': '📊',
  'termodinamica/13_termodinamica_estadistica/analisis_de_sistemas_complejos': '🔬',
  'termodinamica/13_termodinamica_estadistica/aplicaciones_de_la_estadistica_cuantica': '⚛️',
  'termodinamica/13_termodinamica_estadistica/calculo_de_propiedades_termodinamicas': '🧮',
  'termodinamica/13_termodinamica_estadistica/condensacion_bose_einstein': '❄️',
  'termodinamica/13_termodinamica_estadistica/distribuciones_de_boltzmann_y_gibbs': '📈',
  'termodinamica/13_termodinamica_estadistica/ensambles_estadisticos': '📊',
  'termodinamica/13_termodinamica_estadistica/estadisticas_cuanticas': '⚛️',
  'termodinamica/13_termodinamica_estadistica/fonones_modelo_debye': '🌊',
  'termodinamica/13_termodinamica_estadistica/funcion_de_particion': '📐',
  'termodinamica/13_termodinamica_estadistica/gas_de_fermi': '🔬',
  'termodinamica/13_termodinamica_estadistica/gas_ideal_cuantico': '💨',
  'termodinamica/13_termodinamica_estadistica/microestados_y_macroestados': '🔬',
  'termodinamica/13_termodinamica_estadistica/modelo_de_ising': '🧲',
  'termodinamica/13_termodinamica_estadistica/simulaciones_monte_carlo': '🎲',
  'termodinamica/13_termodinamica_estadistica/teorema_de_equiparticion': '⚖️',
  'termodinamica/13_termodinamica_estadistica/transiciones_de_fase': '🔄',

};

/**
 * Obtiene el icono para una sección dada
 * @param {string} sectionKey - Clave de la sección (ej: 'mru', 'termodinamica', etc.)
 * @param {object} emojiMap - Mapa de emojis opcional (de emoji-map.js)
 * @returns {string} - Emoji del icono
 */
export function getIconForSection(sectionKey, emojiMap = {}) {
  // Primero buscar en iconConfig (tiene prioridad)
  if (iconConfig[sectionKey]) {
    return iconConfig[sectionKey];
  }

  // Luego buscar en emojiMap (extraído de teoria.jsx)
  if (emojiMap[sectionKey]) {
    return emojiMap[sectionKey];
  }

  // Por defecto, emoji genérico
  return '📚';
}
