// Configuración automática de rutas de termodinámica
// Generado automáticamente desde hierarchicalStructure.js

export const thermodynamicsRoutes = [
  {
    "path": "/termodinamica",
    "component": "ThermodynamicsMainPage",
    "title": "Termodinámica - Página Principal",
    "description": "Estructura jerárquica de todos los temas de termodinámica"
  },
  {
    "path": "/termodinamica/01_conceptos_fundamentales",
    "component": "01_conceptos_fundamentalesTheory",
    "title": "Conceptos Fundamentales",
    "description": "Definiciones básicas y fundamentos de la termodinámica",
    "level": "Nivel 1: Fundamentos",
    "prerequisites": [
      "Física básica",
      "Matemáticas básicas"
    ],
    "estimatedTime": "8-10 horas",
    "isTheoryHeavy": true
  },
  {
    "path": "/termodinamica/01_conceptos_fundamentales/introduccion_a_la_termodinamica",
    "component": "introduccion_a_la_termodinamicaTheory",
    "title": "Introducción a la Termodinámica",
    "description": "Historia, definición y alcance de la termodinámica",
    "parentTopic": "Conceptos Fundamentales",
    "level": "Nivel 1: Fundamentos",
    "priority": 1,
    "estimatedTime": "2 horas",
    "isTheoryOnly": true
  },
  {
    "path": "/termodinamica/01_conceptos_fundamentales/sistemas_termodinamicos",
    "component": "sistemas_termodinamicosTheory",
    "title": "Sistemas Termodinámicos",
    "description": "Clasificación y características de sistemas",
    "parentTopic": "Conceptos Fundamentales",
    "level": "Nivel 1: Fundamentos",
    "priority": 2,
    "estimatedTime": "2 horas",
    "isTheoryOnly": true
  },
  {
    "path": "/termodinamica/01_conceptos_fundamentales/estado_y_equilibrio",
    "component": "estado_y_equilibrioTheory",
    "title": "Estado y Equilibrio",
    "description": "Estados termodinámicos y condiciones de equilibrio",
    "parentTopic": "Conceptos Fundamentales",
    "level": "Nivel 1: Fundamentos",
    "priority": 3,
    "estimatedTime": "2 horas",
    "isTheoryOnly": true
  },
  {
    "path": "/termodinamica/01_conceptos_fundamentales/frontera_y_entorno",
    "component": "frontera_y_entornoTheory",
    "title": "Frontera y Entorno",
    "description": "Definición de fronteras e interacciones",
    "parentTopic": "Conceptos Fundamentales",
    "level": "Nivel 1: Fundamentos",
    "priority": 4,
    "estimatedTime": "1.5 horas",
    "isTheoryOnly": true
  },
  {
    "path": "/termodinamica/01_conceptos_fundamentales/propiedades_termicas",
    "component": "propiedades_termicasTheory",
    "title": "Propiedades Térmicas",
    "description": "Propiedades extensivas e intensivas",
    "parentTopic": "Conceptos Fundamentales",
    "level": "Nivel 1: Fundamentos",
    "priority": 5,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/02_magnitudes_termicas",
    "component": "02_magnitudes_termicasTheory",
    "title": "Magnitudes Térmicas",
    "description": "Calor, temperatura y trabajo termodinámico",
    "level": "Nivel 2: Magnitudes Térmicas",
    "prerequisites": [
      "Conceptos Fundamentales"
    ],
    "estimatedTime": "6-8 horas",
    "isTheoryHeavy": false
  },
  {
    "path": "/termodinamica/02_magnitudes_termicas/temperatura",
    "component": "temperaturaTheory",
    "title": "Temperatura",
    "description": "Escalas de temperatura y medición térmica",
    "parentTopic": "Magnitudes Térmicas",
    "level": "Nivel 2: Magnitudes Térmicas",
    "priority": 1,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/02_magnitudes_termicas/calor",
    "component": "calorTheory",
    "title": "Calor",
    "description": "Transferencia de energía térmica",
    "parentTopic": "Magnitudes Térmicas",
    "level": "Nivel 2: Magnitudes Térmicas",
    "priority": 2,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/02_magnitudes_termicas/trabajo_termodinamico",
    "component": "trabajo_termodinamicoTheory",
    "title": "Trabajo Termodinámico",
    "description": "Trabajo en procesos termodinámicos",
    "parentTopic": "Magnitudes Térmicas",
    "level": "Nivel 2: Magnitudes Térmicas",
    "priority": 3,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/03_principios_de_la_termodinamica",
    "component": "03_principios_de_la_termodinamicaTheory",
    "title": "Principios de la Termodinámica",
    "description": "Las cuatro leyes fundamentales de la termodinámica",
    "level": "Nivel 3: Principios Fundamentales",
    "prerequisites": [
      "Magnitudes Térmicas"
    ],
    "estimatedTime": "10-12 horas",
    "isTheoryHeavy": true
  },
  {
    "path": "/termodinamica/03_principios_de_la_termodinamica/cero_principio",
    "component": "cero_principioTheory",
    "title": "Principio Cero",
    "description": "Equilibrio térmico y temperatura",
    "parentTopic": "Principios de la Termodinámica",
    "level": "Nivel 3: Principios Fundamentales",
    "priority": 1,
    "estimatedTime": "2 horas",
    "isTheoryOnly": true
  },
  {
    "path": "/termodinamica/03_principios_de_la_termodinamica/primera_ley_de_la_termodinamica",
    "component": "primera_ley_de_la_termodinamicaTheory",
    "title": "Primera Ley",
    "description": "Conservación de la energía",
    "parentTopic": "Principios de la Termodinámica",
    "level": "Nivel 3: Principios Fundamentales",
    "priority": 2,
    "estimatedTime": "3 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/03_principios_de_la_termodinamica/segunda_ley_de_la_termodinamica",
    "component": "segunda_ley_de_la_termodinamicaTheory",
    "title": "Segunda Ley",
    "description": "Entropía y dirección de procesos",
    "parentTopic": "Principios de la Termodinámica",
    "level": "Nivel 3: Principios Fundamentales",
    "priority": 3,
    "estimatedTime": "3.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/03_principios_de_la_termodinamica/tercera_ley_de_la_termodinamica",
    "component": "tercera_ley_de_la_termodinamicaTheory",
    "title": "Tercera Ley",
    "description": "Comportamiento en el cero absoluto",
    "parentTopic": "Principios de la Termodinámica",
    "level": "Nivel 3: Principios Fundamentales",
    "priority": 4,
    "estimatedTime": "2 horas",
    "isTheoryOnly": true
  },
  {
    "path": "/termodinamica/03_principios_de_la_termodinamica/formulaciones_equivalentes",
    "component": "formulaciones_equivalentesTheory",
    "title": "Formulaciones Equivalentes",
    "description": "Diferentes enunciados de las leyes",
    "parentTopic": "Principios de la Termodinámica",
    "level": "Nivel 3: Principios Fundamentales",
    "priority": 5,
    "estimatedTime": "1.5 horas",
    "isTheoryOnly": true
  },
  {
    "path": "/termodinamica/06_procesos_termodinamicos",
    "component": "06_procesos_termodinamicosTheory",
    "title": "Procesos Termodinámicos",
    "description": "Procesos isotérmicos, adiabáticos, isobáricos e isocóricos",
    "level": "Nivel 4: Aplicaciones Básicas",
    "prerequisites": [
      "Principios de la Termodinámica"
    ],
    "estimatedTime": "8-10 horas",
    "isTheoryHeavy": false
  },
  {
    "path": "/termodinamica/06_procesos_termodinamicos/isotermico",
    "component": "isotermicoTheory",
    "title": "Proceso Isotérmico",
    "description": "Procesos a temperatura constante",
    "parentTopic": "Procesos Termodinámicos",
    "level": "Nivel 4: Aplicaciones Básicas",
    "priority": 1,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/06_procesos_termodinamicos/isobarico",
    "component": "isobaricoTheory",
    "title": "Proceso Isobárico",
    "description": "Procesos a presión constante",
    "parentTopic": "Procesos Termodinámicos",
    "level": "Nivel 4: Aplicaciones Básicas",
    "priority": 2,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/06_procesos_termodinamicos/isocorico",
    "component": "isocoricoTheory",
    "title": "Proceso Isocórico",
    "description": "Procesos a volumen constante",
    "parentTopic": "Procesos Termodinámicos",
    "level": "Nivel 4: Aplicaciones Básicas",
    "priority": 3,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/06_procesos_termodinamicos/adiabatico",
    "component": "adiabaticoTheory",
    "title": "Proceso Adiabático",
    "description": "Procesos sin intercambio de calor",
    "parentTopic": "Procesos Termodinámicos",
    "level": "Nivel 4: Aplicaciones Básicas",
    "priority": 4,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/06_procesos_termodinamicos/procesos_irreversibles",
    "component": "procesos_irreversiblesTheory",
    "title": "Procesos Irreversibles",
    "description": "Irreversibilidades y generación de entropía",
    "parentTopic": "Procesos Termodinámicos",
    "level": "Nivel 4: Aplicaciones Básicas",
    "priority": 5,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/04_modelos_moleculares_y_gases",
    "component": "04_modelos_moleculares_y_gasesTheory",
    "title": "Modelos Moleculares y Gases",
    "description": "Teoría cinética y comportamiento de gases",
    "level": "Nivel 4: Aplicaciones Básicas",
    "prerequisites": [
      "Principios de la Termodinámica"
    ],
    "estimatedTime": "8-10 horas",
    "isTheoryHeavy": true
  },
  {
    "path": "/termodinamica/04_modelos_moleculares_y_gases/teoria_cinetica_de_los_gases",
    "component": "teoria_cinetica_de_los_gasesTheory",
    "title": "Teoría Cinética",
    "description": "Modelo microscópico de gases",
    "parentTopic": "Modelos Moleculares y Gases",
    "level": "Nivel 4: Aplicaciones Básicas",
    "priority": 1,
    "estimatedTime": "4 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/04_modelos_moleculares_y_gases/teoria_cinetica_de_los_gases/postulados",
    "component": "postuladosTheory",
    "title": "Postulados",
    "description": "Fundamentos de la teoría cinética",
    "parentSubtopic": "Teoría Cinética",
    "parentTopic": "Modelos Moleculares y Gases",
    "level": "Nivel 4: Aplicaciones Básicas",
    "priority": 1,
    "estimatedTime": "1.5 horas",
    "isTheoryOnly": true
  },
  {
    "path": "/termodinamica/04_modelos_moleculares_y_gases/teoria_cinetica_de_los_gases/presion_y_temperatura",
    "component": "presion_y_temperaturaTheory",
    "title": "Presión y Temperatura",
    "description": "Interpretación molecular",
    "parentSubtopic": "Teoría Cinética",
    "parentTopic": "Modelos Moleculares y Gases",
    "level": "Nivel 4: Aplicaciones Básicas",
    "priority": 2,
    "estimatedTime": "1.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/04_modelos_moleculares_y_gases/teoria_cinetica_de_los_gases/energia_interna_y_grados_de_libertad",
    "component": "energia_interna_y_grados_de_libertadTheory",
    "title": "Energía Interna",
    "description": "Grados de libertad molecular",
    "parentSubtopic": "Teoría Cinética",
    "parentTopic": "Modelos Moleculares y Gases",
    "level": "Nivel 4: Aplicaciones Básicas",
    "priority": 3,
    "estimatedTime": "1 hora",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/04_modelos_moleculares_y_gases/gases_ideales",
    "component": "gases_idealesTheory",
    "title": "Gases Ideales",
    "description": "Comportamiento ideal de gases",
    "parentTopic": "Modelos Moleculares y Gases",
    "level": "Nivel 4: Aplicaciones Básicas",
    "priority": 2,
    "estimatedTime": "3 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/04_modelos_moleculares_y_gases/gases_reales",
    "component": "gases_realesTheory",
    "title": "Gases Reales",
    "description": "Desviaciones del comportamiento ideal",
    "parentTopic": "Modelos Moleculares y Gases",
    "level": "Nivel 4: Aplicaciones Básicas",
    "priority": 3,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/05_entropia",
    "component": "05_entropiaTheory",
    "title": "Entropía",
    "description": "Concepto de entropía y sus aplicaciones",
    "level": "Nivel 5: Conceptos Avanzados",
    "prerequisites": [
      "Procesos Termodinámicos"
    ],
    "estimatedTime": "8-10 horas",
    "isTheoryHeavy": true
  },
  {
    "path": "/termodinamica/05_entropia/entropia_y_segunda_ley",
    "component": "entropia_y_segunda_leyTheory",
    "title": "Entropía y Segunda Ley",
    "description": "Definición y cálculo de entropía",
    "parentTopic": "Entropía",
    "level": "Nivel 5: Conceptos Avanzados",
    "priority": 1,
    "estimatedTime": "3 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/05_entropia/interpretacion_estadistica",
    "component": "interpretacion_estadisticaTheory",
    "title": "Interpretación Estadística",
    "description": "Fundamentos microscópicos de la entropía",
    "parentTopic": "Entropía",
    "level": "Nivel 5: Conceptos Avanzados",
    "priority": 2,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": true
  },
  {
    "path": "/termodinamica/05_entropia/medicion_y_calculo_de_la_entropia",
    "component": "medicion_y_calculo_de_la_entropiaTheory",
    "title": "Medición y Cálculo",
    "description": "Métodos de cálculo de entropía",
    "parentTopic": "Entropía",
    "level": "Nivel 5: Conceptos Avanzados",
    "priority": 3,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/05_entropia/entropia_en_procesos_reales",
    "component": "entropia_en_procesos_realesTheory",
    "title": "Entropía en Procesos Reales",
    "description": "Generación de entropía e irreversibilidades",
    "parentTopic": "Entropía",
    "level": "Nivel 5: Conceptos Avanzados",
    "priority": 4,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/07_potenciales_termodinamicos",
    "component": "07_potenciales_termodinamicosTheory",
    "title": "Potenciales Termodinámicos",
    "description": "Funciones de estado y criterios de equilibrio",
    "level": "Nivel 5: Conceptos Avanzados",
    "prerequisites": [
      "Entropía"
    ],
    "estimatedTime": "10-12 horas",
    "isTheoryHeavy": false
  },
  {
    "path": "/termodinamica/07_potenciales_termodinamicos/energia_interna",
    "component": "energia_internaTheory",
    "title": "Energía Interna",
    "description": "Primera función de estado",
    "parentTopic": "Potenciales Termodinámicos",
    "level": "Nivel 5: Conceptos Avanzados",
    "priority": 1,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/07_potenciales_termodinamicos/entalpia",
    "component": "entalpiaTheory",
    "title": "Entalpía",
    "description": "Función para procesos isobáricos",
    "parentTopic": "Potenciales Termodinámicos",
    "level": "Nivel 5: Conceptos Avanzados",
    "priority": 2,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/07_potenciales_termodinamicos/energia_libre_de_helmholtz",
    "component": "energia_libre_de_helmholtzTheory",
    "title": "Energía Libre de Helmholtz",
    "description": "Potencial para T,V constantes",
    "parentTopic": "Potenciales Termodinámicos",
    "level": "Nivel 5: Conceptos Avanzados",
    "priority": 3,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/07_potenciales_termodinamicos/energia_libre_de_gibbs",
    "component": "energia_libre_de_gibbsTheory",
    "title": "Energía Libre de Gibbs",
    "description": "Potencial para T,P constantes",
    "parentTopic": "Potenciales Termodinámicos",
    "level": "Nivel 5: Conceptos Avanzados",
    "priority": 4,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/07_potenciales_termodinamicos/relaciones_de_maxwell",
    "component": "relaciones_de_maxwellTheory",
    "title": "Relaciones de Maxwell",
    "description": "Relaciones entre derivadas parciales",
    "parentTopic": "Potenciales Termodinámicos",
    "level": "Nivel 5: Conceptos Avanzados",
    "priority": 5,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/07_potenciales_termodinamicos/criterios_de_espontaneidad",
    "component": "criterios_de_espontaneidadTheory",
    "title": "Criterios de Espontaneidad",
    "description": "Condiciones de equilibrio y estabilidad",
    "parentTopic": "Potenciales Termodinámicos",
    "level": "Nivel 5: Conceptos Avanzados",
    "priority": 6,
    "estimatedTime": "1.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/08_maquinas_termicas_y_refrigeracion",
    "component": "08_maquinas_termicas_y_refrigeracionTheory",
    "title": "Máquinas Térmicas y Refrigeración",
    "description": "Motores térmicos y sistemas de refrigeración",
    "level": "Nivel 6: Aplicaciones Prácticas",
    "prerequisites": [
      "Potenciales Termodinámicos"
    ],
    "estimatedTime": "8-10 horas",
    "isTheoryHeavy": false
  },
  {
    "path": "/termodinamica/08_maquinas_termicas_y_refrigeracion/maquinas_termicas",
    "component": "maquinas_termicasTheory",
    "title": "Máquinas Térmicas",
    "description": "Motores y generadores de potencia",
    "parentTopic": "Máquinas Térmicas y Refrigeración",
    "level": "Nivel 6: Aplicaciones Prácticas",
    "priority": 1,
    "estimatedTime": "4 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/08_maquinas_termicas_y_refrigeracion/refrigeracion_y_bombas_de_calor",
    "component": "refrigeracion_y_bombas_de_calorTheory",
    "title": "Refrigeración y Bombas de Calor",
    "description": "Sistemas de enfriamiento y calefacción",
    "parentTopic": "Máquinas Térmicas y Refrigeración",
    "level": "Nivel 6: Aplicaciones Prácticas",
    "priority": 2,
    "estimatedTime": "4 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/09_ciclos_termodinamicos",
    "component": "09_ciclos_termodinamicosTheory",
    "title": "Ciclos Termodinámicos",
    "description": "Ciclos de potencia y refrigeración",
    "level": "Nivel 6: Aplicaciones Prácticas",
    "prerequisites": [
      "Máquinas Térmicas"
    ],
    "estimatedTime": "8-10 horas",
    "isTheoryHeavy": false
  },
  {
    "path": "/termodinamica/09_ciclos_termodinamicos/ciclo_otto",
    "component": "ciclo_ottoTheory",
    "title": "Ciclo Otto",
    "description": "Motores de gasolina",
    "parentTopic": "Ciclos Termodinámicos",
    "level": "Nivel 6: Aplicaciones Prácticas",
    "priority": 1,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/09_ciclos_termodinamicos/ciclo_diesel",
    "component": "ciclo_dieselTheory",
    "title": "Ciclo Diesel",
    "description": "Motores diesel",
    "parentTopic": "Ciclos Termodinámicos",
    "level": "Nivel 6: Aplicaciones Prácticas",
    "priority": 2,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/09_ciclos_termodinamicos/ciclo_brayton",
    "component": "ciclo_braytonTheory",
    "title": "Ciclo Brayton",
    "description": "Turbinas de gas",
    "parentTopic": "Ciclos Termodinámicos",
    "level": "Nivel 6: Aplicaciones Prácticas",
    "priority": 3,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/09_ciclos_termodinamicos/ciclo_rankine",
    "component": "ciclo_rankineTheory",
    "title": "Ciclo Rankine",
    "description": "Centrales de vapor",
    "parentTopic": "Ciclos Termodinámicos",
    "level": "Nivel 6: Aplicaciones Prácticas",
    "priority": 4,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/11_transferencia_de_calor",
    "component": "11_transferencia_de_calorTheory",
    "title": "Transferencia de Calor",
    "description": "Conducción, convección y radiación",
    "level": "Nivel 7: Transferencia de Calor",
    "prerequisites": [
      "Ciclos Termodinámicos"
    ],
    "estimatedTime": "12-15 horas",
    "isTheoryHeavy": false
  },
  {
    "path": "/termodinamica/11_transferencia_de_calor/conceptos_basicos",
    "component": "conceptos_basicosTheory",
    "title": "Conceptos Básicos",
    "description": "Fundamentos de transferencia de calor",
    "parentTopic": "Transferencia de Calor",
    "level": "Nivel 7: Transferencia de Calor",
    "priority": 1,
    "estimatedTime": "2 horas",
    "isTheoryOnly": true
  },
  {
    "path": "/termodinamica/11_transferencia_de_calor/conduccion",
    "component": "conduccionTheory",
    "title": "Conducción",
    "description": "Transferencia por contacto directo",
    "parentTopic": "Transferencia de Calor",
    "level": "Nivel 7: Transferencia de Calor",
    "priority": 2,
    "estimatedTime": "4 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/11_transferencia_de_calor/conveccion",
    "component": "conveccionTheory",
    "title": "Convección",
    "description": "Transferencia por movimiento de fluidos",
    "parentTopic": "Transferencia de Calor",
    "level": "Nivel 7: Transferencia de Calor",
    "priority": 3,
    "estimatedTime": "4 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/11_transferencia_de_calor/radiacion",
    "component": "radiacionTheory",
    "title": "Radiación",
    "description": "Transferencia por ondas electromagnéticas",
    "parentTopic": "Transferencia de Calor",
    "level": "Nivel 7: Transferencia de Calor",
    "priority": 4,
    "estimatedTime": "3 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/11_transferencia_de_calor/resistencia_termica_equivalente",
    "component": "resistencia_termica_equivalenteTheory",
    "title": "Resistencia Térmica",
    "description": "Análisis de redes térmicas",
    "parentTopic": "Transferencia de Calor",
    "level": "Nivel 7: Transferencia de Calor",
    "priority": 5,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/11_transferencia_de_calor/intercambiadores_de_calor",
    "component": "intercambiadores_de_calorTheory",
    "title": "Intercambiadores de Calor",
    "description": "Equipos de intercambio térmico",
    "parentTopic": "Transferencia de Calor",
    "level": "Nivel 7: Transferencia de Calor",
    "priority": 6,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/11_transferencia_de_calor/aislamiento_termico",
    "component": "aislamiento_termicoTheory",
    "title": "Aislamiento Térmico",
    "description": "Materiales y técnicas de aislamiento",
    "parentTopic": "Transferencia de Calor",
    "level": "Nivel 7: Transferencia de Calor",
    "priority": 7,
    "estimatedTime": "1.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/10_ciclos_combinados",
    "component": "10_ciclos_combinadosTheory",
    "title": "Ciclos Combinados",
    "description": "Sistemas de alta eficiencia",
    "level": "Nivel 8: Aplicaciones Avanzadas",
    "prerequisites": [
      "Transferencia de Calor"
    ],
    "estimatedTime": "6-8 horas",
    "isTheoryHeavy": false
  },
  {
    "path": "/termodinamica/10_ciclos_combinados/ciclo_de_brayton_rankine",
    "component": "ciclo_de_brayton_rankineTheory",
    "title": "Ciclo Brayton-Rankine",
    "description": "Combinación gas-vapor",
    "parentTopic": "Ciclos Combinados",
    "level": "Nivel 8: Aplicaciones Avanzadas",
    "priority": 1,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/10_ciclos_combinados/ciclo_de_rankine_con_turbina_de_gas",
    "component": "ciclo_de_rankine_con_turbina_de_gasTheory",
    "title": "Rankine con Turbina de Gas",
    "description": "Sistemas híbridos",
    "parentTopic": "Ciclos Combinados",
    "level": "Nivel 8: Aplicaciones Avanzadas",
    "priority": 2,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/10_ciclos_combinados/cogeneracion",
    "component": "cogeneracionTheory",
    "title": "Cogeneración",
    "description": "Producción simultánea de electricidad y calor",
    "parentTopic": "Ciclos Combinados",
    "level": "Nivel 8: Aplicaciones Avanzadas",
    "priority": 3,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/12_aplicaciones_practicas",
    "component": "12_aplicaciones_practicasTheory",
    "title": "Aplicaciones Prácticas",
    "description": "Sistemas reales de ingeniería",
    "level": "Nivel 8: Aplicaciones Avanzadas",
    "prerequisites": [
      "Ciclos Combinados"
    ],
    "estimatedTime": "10-12 horas",
    "isTheoryHeavy": false
  },
  {
    "path": "/termodinamica/12_aplicaciones_practicas/centrales_electricas",
    "component": "centrales_electricasTheory",
    "title": "Centrales Eléctricas",
    "description": "Generación de energía eléctrica",
    "parentTopic": "Aplicaciones Prácticas",
    "level": "Nivel 8: Aplicaciones Avanzadas",
    "priority": 1,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/12_aplicaciones_practicas/motores_de_combustion_interna",
    "component": "motores_de_combustion_internaTheory",
    "title": "Motores de Combustión",
    "description": "Motores automotrices e industriales",
    "parentTopic": "Aplicaciones Prácticas",
    "level": "Nivel 8: Aplicaciones Avanzadas",
    "priority": 2,
    "estimatedTime": "2.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/12_aplicaciones_practicas/sistemas_de_climatizacion",
    "component": "sistemas_de_climatizacionTheory",
    "title": "Sistemas de Climatización",
    "description": "HVAC y control ambiental",
    "parentTopic": "Aplicaciones Prácticas",
    "level": "Nivel 8: Aplicaciones Avanzadas",
    "priority": 3,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/12_aplicaciones_practicas/bombas_termicas_domesticas",
    "component": "bombas_termicas_domesticasTheory",
    "title": "Bombas Térmicas Domésticas",
    "description": "Calefacción residencial eficiente",
    "parentTopic": "Aplicaciones Prácticas",
    "level": "Nivel 8: Aplicaciones Avanzadas",
    "priority": 4,
    "estimatedTime": "2 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/12_aplicaciones_practicas/ciclos_de_potencia",
    "component": "ciclos_de_potenciaTheory",
    "title": "Ciclos de Potencia",
    "description": "Optimización de sistemas de potencia",
    "parentTopic": "Aplicaciones Prácticas",
    "level": "Nivel 8: Aplicaciones Avanzadas",
    "priority": 5,
    "estimatedTime": "1.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/12_aplicaciones_practicas/ciclos_de_refrigeracion",
    "component": "ciclos_de_refrigeracionTheory",
    "title": "Ciclos de Refrigeración",
    "description": "Sistemas de refrigeración industrial",
    "parentTopic": "Aplicaciones Prácticas",
    "level": "Nivel 8: Aplicaciones Avanzadas",
    "priority": 6,
    "estimatedTime": "1.5 horas",
    "isTheoryOnly": false
  },
  {
    "path": "/termodinamica/13_termodinamica_estadistica",
    "component": "13_termodinamica_estadisticaTheory",
    "title": "Termodinámica Estadística",
    "description": "Conexión microscópica-macroscópica",
    "level": "Nivel 9: Termodinámica Estadística",
    "prerequisites": [
      "Aplicaciones Prácticas"
    ],
    "estimatedTime": "8-10 horas",
    "isTheoryHeavy": true
  },
  {
    "path": "/termodinamica/13_termodinamica_estadistica/microestados_y_macroestados",
    "component": "microestados_y_macroestadosTheory",
    "title": "Microestados y Macroestados",
    "description": "Descripción estadística de sistemas",
    "parentTopic": "Termodinámica Estadística",
    "level": "Nivel 9: Termodinámica Estadística",
    "priority": 1,
    "estimatedTime": "3 horas",
    "isTheoryOnly": true
  },
  {
    "path": "/termodinamica/13_termodinamica_estadistica/distribuciones_de_boltzmann_y_gibbs",
    "component": "distribuciones_de_boltzmann_y_gibbsTheory",
    "title": "Distribuciones Estadísticas",
    "description": "Distribuciones de Boltzmann y Gibbs",
    "parentTopic": "Termodinámica Estadística",
    "level": "Nivel 9: Termodinámica Estadística",
    "priority": 2,
    "estimatedTime": "4 horas",
    "isTheoryOnly": true
  }
];

// Función para obtener breadcrumbs de una ruta
export function getBreadcrumbs(routePath) {
  function generateBreadcrumbs(routePath) {
  const pathParts = routePath.split('/').filter(part => part);
  const breadcrumbs = [];
  
  // Siempre empezar con la página principal
  breadcrumbs.push({
    title: 'Termodinámica',
    path: '/termodinamica',
    icon: '🌡️'
  });
  
  if (pathParts.length > 1) {
    // Encontrar el tema
    const topicId = pathParts[1];
    const topic = findTopicById(topicId);
    if (topic) {
      breadcrumbs.push({
        title: topic.title,
        path: `/termodinamica/${topicId}`,
        icon: topic.icon
      });
    }
    
    if (pathParts.length > 2) {
      // Encontrar el subtema
      const subtopicId = pathParts[2];
      const subtopic = findSubtopicById(topicId, subtopicId);
      if (subtopic) {
        breadcrumbs.push({
          title: subtopic.title,
          path: `/termodinamica/${topicId}/${subtopicId}`,
          icon: subtopic.icon
        });
      }
      
      if (pathParts.length > 3) {
        // Encontrar el sub-subtema
        const subsubtopicId = pathParts[3];
        const subsubtopic = findSubsubtopicById(topicId, subtopicId, subsubtopicId);
        if (subsubtopic) {
          breadcrumbs.push({
            title: subsubtopic.title,
            path: `/termodinamica/${topicId}/${subtopicId}/${subsubtopicId}`,
            icon: subsubtopic.icon
          });
        }
      }
    }
  }
  
  return breadcrumbs;
}
  
  return generateBreadcrumbs(routePath);
}

// Función para obtener navegación anterior/siguiente
export function getNavigation(currentPath) {
  function generateNavigation(currentPath) {
  const routes = generateRoutes();
  const currentIndex = routes.findIndex(route => route.path === currentPath);
  
  if (currentIndex === -1) return { previous: null, next: null };
  
  const previous = currentIndex > 0 ? routes[currentIndex - 1] : null;
  const next = currentIndex < routes.length - 1 ? routes[currentIndex + 1] : null;
  
  return { previous, next };
}
  
  return generateNavigation(currentPath);
}

// Función para obtener información de una ruta específica
export function getRouteInfo(routePath) {
  return thermodynamicsRoutes.find(route => route.path === routePath);
}

// Función para obtener todas las rutas de un nivel específico
export function getRoutesByLevel(levelTitle) {
  return thermodynamicsRoutes.filter(route => route.level === levelTitle);
}

// Función para obtener rutas por tipo (teórico/práctico)
export function getRoutesByType(isTheoryOnly) {
  return thermodynamicsRoutes.filter(route => route.isTheoryOnly === isTheoryOnly);
}

export default thermodynamicsRoutes;