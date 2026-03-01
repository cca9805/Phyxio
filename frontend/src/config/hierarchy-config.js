// Configuración estática de la estructura jerárquica
// Este archivo define la estructura completa de navegación y no debe ser sobrescrito

export const hierarchyConfig = {
  // Estructura principal
  main: [
    "clasica",
    "moderna"
  ],

  // Estructura de Física Clásica (orden pedagógico)
  clasica: [
    "metodo_cientifico",        // 1. Fundamentos del método científico
    "mecanica",                 // 2. Mecánica (movimiento y fuerzas)
    "introduccion_fluidos",     // 3. Introducción a fluidos (ESO, antes de mecánica de fluidos)
    "mecanica_de_fluidos",      // 4. Mecánica de fluidos (profundización)
    "termodinamica",            // 5. Termodinámica (energía térmica)
    "ondas_mecanicas",          // 6. Ondas mecánicas (movido desde mecanica)
    "acustica",                 // 7. Acústica (aplicación de ondas)
    "optica",                   // 8. Óptica (ondas electromagnéticas)
    "electromagnetismo",        // 9. Electromagnetismo
    "fisica_plasmas",           // 10. Física de plasmas (avanzado)
    "teoria_campos_clasicos"    // 11. Teoría de campos (avanzado)
  ],

  // Estructura de Óptica (orden pedagógico)
  optica: [
    // === NIVEL ESO - Fenómenos básicos y observables ===
    "introduccion_luz",                 // 1. ¿Qué es la luz? (fundamentos)
    "reflexion_basica",                 // 2. Espejos y reflexión (fenómeno directo)
    "refraccion_basica",               // 3. Lentes y refracción (fenómeno directo)
    "colores_y_espectro",              // 4. Naturaleza de la luz (descomposición)
    "vision_y_ojo_humano",             // 5. Aplicación biológica (síntesis)
    "aplicaciones_cotidianas_optica",  // 6. Tecnología cotidiana (aplicaciones prácticas)
    // === NIVEL BACHILLERATO - Teoría y medición ===
    "optica_geometrica",               // 7. Formalización geométrica (rayos y trayectorias)
    "optica_fisica",                   // 8. Naturaleza ondulatoria (interferencia, difracción)
    "fotometria"                       // 9. Medición de la luz (magnitudes y cálculo)
  ],

  // Subestructura: Introducción a la luz (ESO)
  introduccion_luz: [
    "que_es_la_luz",
    "luz_y_sombras",
    "velocidad_de_la_luz"
  ],

  // Subestructura: Reflexión básica (ESO)
  reflexion_basica: [
    "ley_reflexion_simple",
    "espejos_planos",
    "espejos_curvos_intro"
  ],

  // Subestructura: Refracción básica (ESO)
  refraccion_basica: [
    "que_es_refraccion",
    "lentes_convergentes",
    "lentes_divergentes"
  ],

  // Subestructura: Colores y espectro (ESO)
  // Orden pedagógico: fenómeno observable → análisis → teoría → explicación física
  colores_y_espectro: [
    "luz_blanca_y_colores",      // 1. Fenómeno básico: ¿qué es la luz blanca?
    "espectro_visible",          // 2. Análisis: descomposición del espectro (380-700 nm)
    "absorcion_y_reflexion",     // 3. Explicación física: por qué vemos colores
    "colores_primarios"          // 4. Teoría aplicada: modelos RGB y CMY
  ],

  // Subestructura: Visión y ojo humano (ESO)
  vision_y_ojo_humano: [
    "anatomia_del_ojo",
    "como_vemos",
    "defectos_visuales",
    "correccion_visual"
  ],

  // Estructura de Método Científico
  metodo_cientifico: [
    "introduccion",
    "hipotesis_y_experimentacion",
    "magnitudes_y_unidades",
    "errores_e_incertidumbre",
    "analisis_de_datos",
    "comunicacion_cientifica"
  ],

  // Estructura de Mecánica (orden pedagógico)
  mecanica: [
    "cinematica",           // 1. Descripción del movimiento (sin causas)
    "dinamica",             // 2. Causas del movimiento (fuerzas)
    "estatica",             // 3. Equilibrio (fuerzas sin movimiento)
    "mecanica_analitica"    // 4. Formulación avanzada
  ],

  // Estructura de Cinemática
  cinematica: [
    "introduccion_movimiento",  // ESO - Tema introductorio
    "mru",                      // Movimiento Rectilíneo Uniforme
    "mruv",                     // Movimiento Rectilíneo Uniformemente Variado
    "mcu",                      // Movimiento Circular Uniforme
    "mcua",                     // Movimiento Circular Uniformemente Acelerado
    "mp",                       // Movimiento Parabólico
    "mas",                      // Movimiento Armónico Simple
    "mr"                        // Movimiento Relativo
  ],
  

    // Aplicaciones cotidianas en Óptica (ESO)
    aplicaciones_cotidianas_optica: [
      "fibra_optica_intro",
      "fotografia_basica",
      "instrumentos_simples"
    ],
  // Estructura de Introducción al Movimiento (ESO)
  introduccion_movimiento: [
    "que_es_movimiento",
    "tipos_de_movimiento",
    "graficas_basicas",
    "movimientos_cotidianos"
  ],

  // Estructura de Dinámica
  dinamica: [
    "introduccion_dinamica",  // Conceptos básicos de dinámica
    "newton",                 // Leyes fundamentales
    "equilibrio",            // Aplicación de 1ª ley
    "friccion",              // Fuerza de fricción
    "movcircular",           // Fuerza centrípeta
    "gravitacion",           // Fuerza gravitatoria
    "trabajoenergia",        // Trabajo y energía
    "movimpulso",            // Impulso y cantidad de movimiento
    "colisiones",            // Aplicación de conservación
    "masaspoleas",           // Sistemas compuestos
    "maquinas_simples",      // Aplicaciones prácticas
    "oscilaciones",          // Fuerzas restauradoras
    "rotacion",              // Dinámica rotacional
    "energia_cotidiana"      // Aplicaciones ESO
  ],

  // Estructura de Introducción a la Dinámica
  introduccion_dinamica: [
    "que_es_dinamica",
    "concepto_fuerza",
    "tipos_fuerzas",
    "diagramas_cuerpo_libre"
  ],

  // Estructura de Máquinas Simples
  maquinas_simples: [
    "introduccion", "palancas", "poleas", "plano_inclinado", "cuna", "tornillo", "rueda_eje"
  ],

  // Estructura de Colisiones
  colisiones: [
    "colisiones_elasticas", "colisiones_inelasticas", "centro_masa", "dispersion"
  ],

  // Estructura de Energía en la Vida Cotidiana
  energia_cotidiana: [
    "fundamentos", "fuentes_energia", "almacenamiento", "transporte_estabilidad",
    "consumo_domestico", "impacto_sostenibilidad", "movilidad", "energia_alimentos"
  ],

  // Subcategorías de Fuentes de Energía
  fuentes_energia: [
    "renovables", "no_renovables"
  ],

  // Estructura de Estática (orden pedagógico)
  estatica: [
    "vectores",           // 1. Fundamentos: vectores de fuerza
    "momentos",           // 2. Momentos y torque
    "apoyos",             // 3. Tipos de apoyos y reacciones
    "centro",             // 4. Centro de gravedad y centroide
    "friccionest",        // 5. Fricción estática
    "estructuras",        // 6. Análisis de estructuras (armaduras, marcos)
    "diagramas",          // 7. Diagramas de cuerpo libre, cortante y momento
    "estabilidad",        // 8. Estabilidad y equilibrio
    "elasticidad_deformacion",  // 9. Elasticidad y deformación
    "aplicaciones"        // 10. Aplicaciones integradas
  ],

  // Estructura de Elasticidad y Deformación (orden pedagógico)
  elasticidad_deformacion: [
    "esfuerzo_deformacion",  // 1. Conceptos fundamentales: esfuerzo y deformación
    "ley_hooke",             // 2. Relación lineal: Ley de Hooke
    "modulos_elasticos",     // 3. Propiedades del material: módulos elásticos
    "deformacion_vigas"      // 4. Aplicación: deflexión de vigas
  ],

  // Estructura de Electromagnetismo
  electromagnetismo: [
    "electricidad",
    "magnetismo",
    "electronica",
    "ondas",
    "maxwell"
  ],

  // Estructura de Electricidad
  electricidad: [
    // === NIVEL ESO ===
    "corriente-ohm",
    "componentes-electricos",
    "electricidad-domestica",
    "seguridad-electrica",
    "transformadores",
    
    // === NIVEL BACHILLERATO ===
    "carga-fuerza",
    "campos-electricos",
    "potencial",
    "capacidad",
    "circuitos"
  ],

  // Estructura del tema Circuitos (todos los niveles)
  circuitos: [
    "circuitos-basicos",
    "circuitos-medios",
    "circuitos-avanzados"
  ],

  // Estructura de Circuitos Básicos (ESO)
  "circuitos-basicos": [
    "circuitos-serie",
    "circuitos-paralelo",
    "circuitos-mixtos"
  ],

  // Estructura de Circuitos Medios (BACHILLERATO)
  "circuitos-medios": [
    "circuitos-ca",
    "circuitos-cc",
    "transitorios"
  ],

  // Estructura de Circuitos Avanzados (UNIVERSIDAD)
  "circuitos-avanzados": [
    "circuitos-avanzados-cc",
    "circuitos-avanzados-ca"
  ],

  // Estructura de Componentes Eléctricos (ESO)
  "componentes-electricos": [
    "pilas-baterias",
    "bombillas-leds",
    "fusibles",
    "resistencias",
    "condensadores",
    "bobinas",
    "diodos",
    "transistores"
  ],

  // Estructura de Electricidad Doméstica (ESO)
  "electricidad-domestica": [
    "instalaciones-electricas",
    "consumo-factura",
    "aparatos-electricos",
    "ahorro-energetico"
  ],

  // Estructura de Seguridad Eléctrica (ESO)
  "seguridad-electrica": [
    "riesgos-electricos",
    "prevencion-accidentes",
    "primeros-auxilios",
    "uso-seguro-aparatos"
  ],

  // Estructura de Electrónica
  electronica: [
    "dispositivos-fotonicos",
    "dispositivos-semiconductores",
    "familias-logicas"
  ],

  // Estructura de Magnetismo
  magnetismo: [
    // === NIVEL ESO ===
    "magnetismo-basico",
    
    // === NIVEL BACHILLERATO ===
    "campos-fuerza",
    "fuentes-campo",
    "induccion"
  ],

  // Estructura de Magnetismo Básico (ESO)
  "magnetismo-basico": [
    "imanes-magnetismo",
    "campo-magnetico",
    "electroimanes",
    "aplicaciones-cotidianas"
  ],

  // Estructura de Ondas Electromagnéticas
  ondas: [
    "aplicaciones-tecnologicas",
    "espectro-electromagnetico",
    "luz-visible-optica",
    "ondas-radio-microondas",
    "propagacion-fenomenos",
    "radiacion-infrarroja",
    "radiacion-ultravioleta",
    "rayos-x-gamma"
  ],

  // Estructura de Termodinámica
  termodinamica: [
    "00_calor_temperatura_basicos",
    "01_conceptos_fundamentales",
    "02_magnitudes_termicas",
    "03_principios_de_la_termodinamica",
    "04_modelos_moleculares_y_gases",
    "05_entropia",
    "06_procesos_termodinamicos",
    "07_potenciales_termodinamicos",
    "08_maquinas_termicas_y_refrigeracion",
    "09_ciclos_termodinamicos",
    "10_ciclos_combinados",
    "11_transferencia_de_calor",
    "12_aplicaciones_practicas",
    "13_termodinamica_estadistica"
  ],

  // Estructura de Calor y Temperatura Básicos (ESO)
  "00_calor_temperatura_basicos": [
    "diferencia_calor_temperatura",
    "cambios_de_estado",
    "graficas_temperatura_tiempo",
    "dilatacion_termica",
    "transferencia_calor_cotidiana",
    "aislantes_conductores"
  ],

  // Estructura de Conceptos Fundamentales
  "01_conceptos_fundamentales": [
    "estado_y_equilibrio", "frontera_y_entorno", "introduccion_a_la_termodinamica", "propiedades_termicas", "sistemas_termodinamicos"
  ],

  // Estructura de Magnitudes Térmicas
  "02_magnitudes_termicas": [
    "temperatura", "calor", "trabajo_termodinamico", "presion"
  ],

  // Estructura de Principios de Termodinámica
  "03_principios_de_la_termodinamica": [
    "ley_cero_de_la_termodinamica", "primera_ley_de_la_termodinamica", "segunda_ley_de_la_termodinamica", "tercera_ley_de_la_termodinamica", "formulaciones_equivalentes"
  ],

  // Estructura de Modelos Moleculares
  "04_modelos_moleculares_y_gases": [
    "gases_ideales", "gases_reales", "teoria_cinetica_de_los_gases", "ecuaciones_de_estado"
  ],

  // Estructura de Entropía
  "05_entropia": [
    "medicion_y_calculo_de_la_entropia", "interpretacion_estadistica", "entropia_en_procesos_reales", "entropia_y_segunda_ley", "entropia_de_mezcla"
  ],

  // Estructura de Procesos Termodinámicos
  "06_procesos_termodinamicos": [
    "proceso_isobarico", "proceso_isocorico", "proceso_isotermico", "proceso_adiabatico", "proceso_politropico"
  ],

  // Estructura de Potenciales Termodinámicos
  "07_potenciales_termodinamicos": [
    "energia_interna", "entalpia", "energia_libre_gibbs", "energia_libre_helmholtz",
    "relaciones_maxwell", "criterios_equilibrio"
  ],

  // Estructura de Máquinas Térmicas
  "08_maquinas_termicas_y_refrigeracion": [
    "ciclo_de_carnot", "maquinas_termicas", "refrigeracion_y_bombas_de_calor"
  ],

  // Estructura de Ciclos Termodinámicos
  "09_ciclos_termodinamicos": [
    "ciclo_otto", "ciclo_diesel", "ciclo_brayton", "ciclo_rankine", "ciclo_stirling", "ciclo_ericsson"
  ],

  // Estructura de Ciclos Combinados
  "10_ciclos_combinados": [
    "ciclo_de_brayton_rankine", "ciclo_de_rankine_con_turbina_de_gas", "cogeneracion"
  ],

  // Estructura de Transferencia de Calor
  "11_transferencia_de_calor": [
    "conceptos_basicos", "conduccion", "conveccion", "radiacion",
    "resistencia_termica_equivalente", "aislamiento_termico", "intercambiadores_de_calor"
  ],

  // Estructura de Aplicaciones Prácticas
  "12_aplicaciones_practicas": [
    "bombas_termicas_domesticas", "centrales_electricas", "ciclos_de_potencia",
    "ciclos_de_refrigeracion", "motores_de_combustion_interna", "sistemas_de_climatizacion"
  ],

  // Estructura de Termodinámica Estadística
  "13_termodinamica_estadistica": [
    "microestados_y_macroestados",
    "distribuciones_de_boltzmann_y_gibbs",
    "funcion_de_particion",
    "ensambles_estadisticos",
    "estadisticas_cuanticas",
    "teorema_de_equiparticion",
    "gas_ideal_cuantico",
    "condensacion_bose_einstein",
    "gas_de_fermi",
    "fonones_modelo_debye",
    "transiciones_de_fase",
    "modelo_de_ising",
    "calculo_de_propiedades_termodinamicas",
    "simulaciones_monte_carlo",
    "aplicaciones_de_la_estadistica_cuantica",
    "analisis_de_sistemas_complejos"
  ],

  // Estructura de Mecánica de Fluidos
  mecanica_de_fluidos: [
  "estatica_de_fluidos",
  "dinamica_de_fluidos",
  "flujo_en_tuberias",
  "flujo_sobre_cuerpos",
  "maquinaria_de_fluidos",
  "analisis_dimensional_y_similitud",
  "flujo_compresible"
  ],

  // Estructura de Introducción a Fluidos (ESO)
  introduccion_fluidos: [
    "presion_atmosferica",
    "presion_liquidos",
    "flotacion_basica",
    "aplicaciones_cotidianas"
  ],

  // Subtemas de Aplicaciones Cotidianas (ESO)
  aplicaciones_cotidianas: [
    "neumaticos",
    "frenos_hidraulicos",
    "fontaneria"
  ],

  // Estructura de Estática de Fluidos (Hidrostática)
  // Estructura de Estática de Fluidos (orden pedagógico)
  estatica_de_fluidos: [
    "conceptos_fundamentales",      // 1. Introducción general a fluidos en reposo
    "densidad_presion",              // 2. Propiedades fundamentales (densidad y presión)
    "presion_hidrostatica",          // 3. Presión en fluidos en reposo (ecuación fundamental)
    "manometria",                    // 4. Medición de presión (aplicación práctica)
    "principio_pascal",              // 5. Transmisión de presión en fluidos
    "vasos_comunicantes",            // 6. Aplicación del principio de Pascal
    "principio_arquimedes",          // 7. Empuje y flotación (fuerza vertical)
    "flotabilidad_y_estabilidad",    // 8. Condiciones de equilibrio y estabilidad
    "fuerzas_sobre_superficies"      // 9. Fuerzas hidrostáticas en estructuras (avanzado)
  ],

  // Estructura de Dinámica de Fluidos
  dinamica_de_fluidos: [
    "ecuacion_de_bernoulli",
    "analisis_diferencial_de_fluidos"
  ],

  // Estructura de Flujo Compresible
  flujo_compresible: [
    "flujo_isentropico",
    "numero_mach",
    "flujo_supersonico",
    "ondas_choque"
  ],

  // flujo_en_tuberias es un tema final sin subtemas

  // Estructura de Óptica
  optica: [
    "introduccion_luz",
    "reflexion_basica",
    "refraccion_basica",
    "colores_y_espectro",
    "vision_y_ojo_humano",
    "aplicaciones_cotidianas_optica",
    "optica_geometrica",
    "optica_fisica",
    "fotometria"
  ],

  // Estructura de Óptica Geométrica
  optica_geometrica: [
    "reflexion_y_espejos",
    "refraccion_y_lentes",
    "instrumentos_opticos",
    "aberraciones_opticas"
  ],

  // Estructuras específicas para ESO: subcategorías concretas usadas en los contenidos
  // Reflexión básica (ESO)
  reflexion_basica_eso: [
    "ley_reflexion_simple",
    "espejos_planos",
    "espejos_curvos_intro"
  ],

  // Refracción básica (ESO)
  refraccion_basica_eso: [
    "que_es_refraccion",
    "lentes_convergentes",
    "lentes_divergentes"
  ],

  // Visión y ojo humano (ESO)
  vision_y_ojo_humano_eso: [
    "como_vemos",
    "anatomia_del_ojo",
    "correccion_visual",
    "defectos_visuales"
  ],

  // Estructura de Introducción a la luz (introductoria, ESO)
  introduccion_luz: [
    "que_es_la_luz",
    "luz_y_sombras",
    "velocidad_de_la_luz"
  ],

  // Estructura de Óptica Física (Ondulatoria)
  optica_fisica: [
    "interferencia",
    "difraccion",
    "polarizacion",
    "dispersion",
    "optica_no_lineal"
  ],

  // Estructura del tema Colores y Espectro (ESO)
  colores_y_espectro: [
    "luz_blanca_y_colores",
    "colores_primarios",
    "absorcion_y_reflexion",
    "espectro_visible"
  ],

  // Estructura de Fotometría
  fotometria: [
    "intensidad_luminosa",
    "flujo_luminoso",
    "iluminacion"
  ],

  // Estructura de Acústica
  acustica: [
    "ondas_sonoras",
    "propiedades_sonido",
    "contaminacion_acustica",
    "oido_humano",
    "proteccion_auditiva",
    "fenomenos_acusticos",
    "resonancia",
    "efecto_doppler",
    "acustica_arquitectonica",
    "psicoacustica",
    "ultrasonido",
    "acustica_musical"
  ],

  // Estructura de Ondas Mecánicas (subtema de Mecánica)
  // Orden pedagógico: fundamentos → tipos → energía → fenómenos complejos
  ondas_mecanicas: [
    "conceptos_basicos",        // 1. Fundamentos (frecuencia, λ, velocidad)
    "ondas_transversales",      // 2. Primer tipo específico
    "ondas_longitudinales",     // 3. Segundo tipo específico
    "energia_ondas",            // 4. Propiedades energéticas
    "superposicion",            // 5. Interferencia (requiere entender ondas individuales)
    "ondas_estacionarias"       // 6. Caso especial de superposición
  ],

  // Estructura de Mecánica Analítica
  mecanica_analitica: [
    "coordenadas_generalizadas",
    "principio_minima_accion",
    "lagrangiana",
    "hamiltoniana"
  ],

  // Estructura de Física de Plasmas
  fisica_plasmas: [
    "estados_materia_plasma",
    "ionizacion_plasma",
    "aplicaciones_plasma"
  ],

  // Estructura de Teoría de Campos Clásicos
  teoria_campos_clasicos: [
    "campos_escalares",
    "campos_vectoriales",
    "ecuaciones_campo"
  ]
};

// Función para verificar si una sección tiene subsecciones
export function hasSubsections(sectionKey) {
  return hierarchyConfig[sectionKey] && hierarchyConfig[sectionKey].length > 0;
}

// Función para obtener las subsecciones de una sección
export function getSubsections(sectionKey) {
  return hierarchyConfig[sectionKey] || [];
}

// Función para obtener la ruta completa de una sección
export function getFullPath(sectionKey, parentPath = "") {
  if (parentPath) {
    return `${parentPath}/${sectionKey}`;
  }
  return sectionKey;
}