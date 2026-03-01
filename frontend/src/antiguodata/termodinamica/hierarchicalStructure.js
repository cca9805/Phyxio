// Estructura jerárquica de termodinámica organizada por prioridad didáctica
export const thermodynamicsHierarchy = {
  // Configuración principal
  title: "Termodinámica",
  description: "Estudio de las relaciones entre calor, trabajo, temperatura y energía",
  icon: "🌡️",
  
  // Estructura jerárquica por niveles didácticos
  levels: [
    {
      id: "nivel-0-basicos-eso",
      title: "Nivel 0: Conceptos Básicos (ESO)",
      description: "Calor y temperatura para la vida cotidiana",
      color: "orange",
      priority: 0,
      topics: [
        {
          id: "00_calor_temperatura_basicos",
          title: "Calor y Temperatura - Conceptos Básicos",
          description: "Fundamentos de calor y temperatura para ESO",
          icon: "🌡️",
          color: "orange",
          isTheoryHeavy: false,
          estimatedTime: "6-8 horas",
          prerequisites: [],
          subtopics: [
            {
              id: "diferencia_calor_temperatura",
              title: "Diferencia entre Calor y Temperatura",
              description: "Conceptos fundamentales y equilibrio térmico",
              icon: "🌡️",
              isTheoryOnly: true,
              priority: 1,
              estimatedTime: "1 hora"
            },
            {
              id: "cambios_de_estado",
              title: "Cambios de Estado",
              description: "Fusión, ebullición, condensación y sublimación",
              icon: "🧊",
              isTheoryOnly: true,
              priority: 2,
              estimatedTime: "1.5 horas"
            },
            {
              id: "graficas_temperatura_tiempo",
              title: "Gráficas Temperatura-Tiempo",
              description: "Curvas de calentamiento y enfriamiento",
              icon: "📊",
              isTheoryOnly: true,
              priority: 3,
              estimatedTime: "1 hora"
            },
            {
              id: "dilatacion_termica",
              title: "Dilatación Térmica",
              description: "Expansión y contracción de materiales con temperatura",
              icon: "📏",
              isTheoryOnly: true,
              priority: 4,
              estimatedTime: "1 hora"
            },
            {
              id: "transferencia_calor_cotidiana",
              title: "Transferencia de Calor Cotidiana",
              description: "Conducción, convección y radiación en la vida diaria",
              icon: "🔥",
              isTheoryOnly: true,
              priority: 5,
              estimatedTime: "1.5 horas"
            },
            {
              id: "aislantes_conductores",
              title: "Aislantes y Conductores Térmicos",
              description: "Materiales que conducen o aíslan el calor",
              icon: "🧥",
              isTheoryOnly: true,
              priority: 6,
              estimatedTime: "1 hora"
            }
          ]
        }
      ]
    },
    {
      id: "nivel-1-fundamentos",
      title: "Nivel 1: Fundamentos",
      description: "Conceptos básicos y definiciones fundamentales",
      color: "blue",
      priority: 1,
      topics: [
        {
          id: "01_conceptos_fundamentales",
          title: "Conceptos Fundamentales",
          description: "Definiciones básicas y fundamentos de la termodinámica",
          icon: "📚",
          color: "blue",
          isTheoryHeavy: true,
          estimatedTime: "8-10 horas",
          prerequisites: ["Física básica", "Matemáticas básicas"],
          subtopics: [
            {
              id: "introduccion_a_la_termodinamica",
              title: "Introducción a la Termodinámica",
              description: "Historia, definición y alcance de la termodinámica",
              icon: "🎯",
              isTheoryOnly: true,
              priority: 1,
              estimatedTime: "2 horas"
            },
            {
              id: "sistemas_termodinamicos",
              title: "Sistemas Termodinámicos",
              description: "Clasificación y características de sistemas",
              icon: "🔲",
              isTheoryOnly: true,
              priority: 2,
              estimatedTime: "2 horas"
            },
            {
              id: "estado_y_equilibrio",
              title: "Estado y Equilibrio",
              description: "Estados termodinámicos y condiciones de equilibrio",
              icon: "⚖️",
              isTheoryOnly: true,
              priority: 3,
              estimatedTime: "2 horas"
            },
            {
              id: "frontera_y_entorno",
              title: "Frontera y Entorno",
              description: "Definición de fronteras e interacciones",
              icon: "🔲",
              isTheoryOnly: true,
              priority: 4,
              estimatedTime: "1.5 horas"
            },
            {
              id: "propiedades_termicas",
              title: "Propiedades Térmicas",
              description: "Propiedades extensivas e intensivas",
              icon: "📊",
              isTheoryOnly: false,
              priority: 5,
              estimatedTime: "2 horas"
            }
          ]
        }
      ]
    },
    
    {
      id: "nivel-2-magnitudes",
      title: "Nivel 2: Magnitudes Térmicas",
      description: "Conceptos de calor, temperatura y trabajo",
      color: "orange",
      priority: 2,
      topics: [
        {
          id: "02_magnitudes_termicas",
          title: "Magnitudes Térmicas",
          description: "Calor, temperatura y trabajo termodinámico",
          icon: "🌡️",
          color: "orange",
          isTheoryHeavy: false,
          estimatedTime: "6-8 horas",
          prerequisites: ["Conceptos Fundamentales"],
          subtopics: [
            {
              id: "temperatura",
              title: "Temperatura",
              description: "Escalas de temperatura y medición térmica",
              icon: "🌡️",
              isTheoryOnly: false,
              priority: 1,
              estimatedTime: "2 horas"
            },
            {
              id: "calor",
              title: "Calor",
              description: "Transferencia de energía térmica",
              icon: "🔥",
              isTheoryOnly: false,
              priority: 2,
              estimatedTime: "2.5 horas"
            },
            {
              id: "trabajo_termodinamico",
              title: "Trabajo Termodinámico",
              description: "Trabajo en procesos termodinámicos",
              icon: "⚙️",
              isTheoryOnly: false,
              priority: 3,
              estimatedTime: "2.5 horas"
            }
          ]
        }
      ]
    },
    
    {
      id: "nivel-3-principios",
      title: "Nivel 3: Principios Fundamentales",
      description: "Las leyes fundamentales de la termodinámica",
      color: "red",
      priority: 3,
      topics: [
        {
          id: "03_principios_de_la_termodinamica",
          title: "Principios de la Termodinámica",
          description: "Las cuatro leyes fundamentales de la termodinámica",
          icon: "⚖️",
          color: "red",
          isTheoryHeavy: true,
          estimatedTime: "10-12 horas",
          prerequisites: ["Magnitudes Térmicas"],
          subtopics: [
            {
              id: "cero_principio",
              title: "Principio Cero",
              description: "Equilibrio térmico y temperatura",
              icon: "0️⃣",
              isTheoryOnly: true,
              priority: 1,
              estimatedTime: "2 horas"
            },
            {
              id: "primera_ley_de_la_termodinamica",
              title: "Primera Ley",
              description: "Conservación de la energía",
              icon: "1️⃣",
              isTheoryOnly: false,
              priority: 2,
              estimatedTime: "3 horas"
            },
            {
              id: "segunda_ley_de_la_termodinamica",
              title: "Segunda Ley",
              description: "Entropía y dirección de procesos",
              icon: "2️⃣",
              isTheoryOnly: false,
              priority: 3,
              estimatedTime: "3.5 horas"
            },
            {
              id: "tercera_ley_de_la_termodinamica",
              title: "Tercera Ley",
              description: "Comportamiento en el cero absoluto",
              icon: "3️⃣",
              isTheoryOnly: true,
              priority: 4,
              estimatedTime: "2 horas"
            },
            {
              id: "formulaciones_equivalentes",
              title: "Formulaciones Equivalentes",
              description: "Diferentes enunciados de las leyes",
              icon: "🔄",
              isTheoryOnly: true,
              priority: 5,
              estimatedTime: "1.5 horas"
            }
          ]
        }
      ]
    },
    
    {
      id: "nivel-4-aplicaciones-basicas",
      title: "Nivel 4: Aplicaciones Básicas",
      description: "Procesos y modelos fundamentales",
      color: "green",
      priority: 4,
      topics: [
        {
          id: "06_procesos_termodinamicos",
          title: "Procesos Termodinámicos",
          description: "Procesos isotérmicos, adiabáticos, isobáricos e isocóricos",
          icon: "🔄",
          color: "green",
          isTheoryHeavy: false,
          estimatedTime: "8-10 horas",
          prerequisites: ["Principios de la Termodinámica"],
          subtopics: [
            {
              id: "isotermico",
              title: "Proceso Isotérmico",
              description: "Procesos a temperatura constante",
              icon: "🌡️",
              isTheoryOnly: false,
              priority: 1,
              estimatedTime: "2 horas"
            },
            {
              id: "isobarico",
              title: "Proceso Isobárico",
              description: "Procesos a presión constante",
              icon: "📊",
              isTheoryOnly: false,
              priority: 2,
              estimatedTime: "2 horas"
            },
            {
              id: "isocorico",
              title: "Proceso Isocórico",
              description: "Procesos a volumen constante",
              icon: "📦",
              isTheoryOnly: false,
              priority: 3,
              estimatedTime: "2 horas"
            },
            {
              id: "adiabatico",
              title: "Proceso Adiabático",
              description: "Procesos sin intercambio de calor",
              icon: "🚫",
              isTheoryOnly: false,
              priority: 4,
              estimatedTime: "2.5 horas"
            },
            {
              id: "procesos_irreversibles",
              title: "Procesos Irreversibles",
              description: "Irreversibilidades y generación de entropía",
              icon: "↪️",
              isTheoryOnly: false,
              priority: 5,
              estimatedTime: "2 horas"
            }
          ]
        },
        
        {
          id: "04_modelos_moleculares_y_gases",
          title: "Modelos Moleculares y Gases",
          description: "Teoría cinética y comportamiento de gases",
          icon: "⚛️",
          color: "purple",
          isTheoryHeavy: true,
          estimatedTime: "8-10 horas",
          prerequisites: ["Principios de la Termodinámica"],
          subtopics: [
            {
              id: "teoria_cinetica_de_los_gases",
              title: "Teoría Cinética",
              description: "Modelo microscópico de gases",
              icon: "🎯",
              isTheoryOnly: false,
              priority: 1,
              estimatedTime: "4 horas",
              subtopics: [
                {
                  id: "postulados",
                  title: "Postulados",
                  description: "Fundamentos de la teoría cinética",
                  icon: "📜",
                  isTheoryOnly: true,
                  priority: 1,
                  estimatedTime: "1.5 horas"
                },
                {
                  id: "presion_y_temperatura",
                  title: "Presión y Temperatura",
                  description: "Interpretación molecular",
                  icon: "🌡️",
                  isTheoryOnly: false,
                  priority: 2,
                  estimatedTime: "1.5 horas"
                },
                {
                  id: "energia_interna_y_grados_de_libertad",
                  title: "Energía Interna",
                  description: "Grados de libertad molecular",
                  icon: "⚡",
                  isTheoryOnly: false,
                  priority: 3,
                  estimatedTime: "1 hora"
                }
              ]
            },
            {
              id: "gases_ideales",
              title: "Gases Ideales",
              description: "Comportamiento ideal de gases",
              icon: "💨",
              isTheoryOnly: false,
              priority: 2,
              estimatedTime: "3 horas"
            },
            {
              id: "gases_reales",
              title: "Gases Reales",
              description: "Desviaciones del comportamiento ideal",
              icon: "🌪️",
              isTheoryOnly: false,
              priority: 3,
              estimatedTime: "2 horas"
            }
          ]
        }
      ]
    },
    
    {
      id: "nivel-5-conceptos-avanzados",
      title: "Nivel 5: Conceptos Avanzados",
      description: "Entropía y potenciales termodinámicos",
      color: "indigo",
      priority: 5,
      topics: [
        {
          id: "05_entropia",
          title: "Entropía",
          description: "Concepto de entropía y sus aplicaciones",
          icon: "📈",
          color: "indigo",
          isTheoryHeavy: true,
          estimatedTime: "8-10 horas",
          prerequisites: ["Procesos Termodinámicos"],
          subtopics: [
            {
              id: "entropia_y_segunda_ley",
              title: "Entropía y Segunda Ley",
              description: "Definición y cálculo de entropía",
              icon: "📊",
              isTheoryOnly: false,
              priority: 1,
              estimatedTime: "3 horas"
            },
            {
              id: "interpretacion_estadistica",
              title: "Interpretación Estadística",
              description: "Fundamentos microscópicos de la entropía",
              icon: "🎲",
              isTheoryOnly: true,
              priority: 2,
              estimatedTime: "2.5 horas"
            },
            {
              id: "medicion_y_calculo_de_la_entropia",
              title: "Medición y Cálculo",
              description: "Métodos de cálculo de entropía",
              icon: "🧮",
              isTheoryOnly: false,
              priority: 3,
              estimatedTime: "2 horas"
            },
            {
              id: "entropia_en_procesos_reales",
              title: "Entropía en Procesos Reales",
              description: "Generación de entropía e irreversibilidades",
              icon: "⚡",
              isTheoryOnly: false,
              priority: 4,
              estimatedTime: "2 horas"
            }
          ]
        },
        
        {
          id: "07_potenciales_termodinamicos",
          title: "Potenciales Termodinámicos",
          description: "Funciones de estado y criterios de equilibrio",
          icon: "⚡",
          color: "yellow",
          isTheoryHeavy: false,
          estimatedTime: "10-12 horas",
          prerequisites: ["Entropía"],
          subtopics: [
            {
              id: "energia_interna",
              title: "Energía Interna",
              description: "Primera función de estado",
              icon: "🔋",
              isTheoryOnly: false,
              priority: 1,
              estimatedTime: "2 horas"
            },
            {
              id: "entalpia",
              title: "Entalpía",
              description: "Función para procesos isobáricos",
              icon: "🌡️",
              isTheoryOnly: false,
              priority: 2,
              estimatedTime: "2.5 horas"
            },
            {
              id: "energia_libre_de_helmholtz",
              title: "Energía Libre de Helmholtz",
              description: "Potencial para T,V constantes",
              icon: "🔓",
              isTheoryOnly: false,
              priority: 3,
              estimatedTime: "2 horas"
            },
            {
              id: "energia_libre_de_gibbs",
              title: "Energía Libre de Gibbs",
              description: "Potencial para T,P constantes",
              icon: "🎯",
              isTheoryOnly: false,
              priority: 4,
              estimatedTime: "2.5 horas"
            },
            {
              id: "relaciones_de_maxwell",
              title: "Relaciones de Maxwell",
              description: "Relaciones entre derivadas parciales",
              icon: "🔗",
              isTheoryOnly: false,
              priority: 5,
              estimatedTime: "2 horas"
            },
            {
              id: "criterios_de_espontaneidad",
              title: "Criterios de Espontaneidad",
              description: "Condiciones de equilibrio y estabilidad",
              icon: "⚖️",
              isTheoryOnly: false,
              priority: 6,
              estimatedTime: "1.5 horas"
            }
          ]
        }
      ]
    },
    
    {
      id: "nivel-6-aplicaciones-practicas",
      title: "Nivel 6: Aplicaciones Prácticas",
      description: "Máquinas térmicas y ciclos de potencia",
      color: "teal",
      priority: 6,
      topics: [
        {
          id: "08_maquinas_termicas_y_refrigeracion",
          title: "Máquinas Térmicas y Refrigeración",
          description: "Motores térmicos y sistemas de refrigeración",
          icon: "🏭",
          color: "teal",
          isTheoryHeavy: false,
          estimatedTime: "8-10 horas",
          prerequisites: ["Potenciales Termodinámicos"],
          subtopics: [
            {
              id: "maquinas_termicas",
              title: "Máquinas Térmicas",
              description: "Motores y generadores de potencia",
              icon: "⚙️",
              isTheoryOnly: false,
              priority: 1,
              estimatedTime: "4 horas"
            },
            {
              id: "refrigeracion_y_bombas_de_calor",
              title: "Refrigeración y Bombas de Calor",
              description: "Sistemas de enfriamiento y calefacción",
              icon: "❄️",
              isTheoryOnly: false,
              priority: 2,
              estimatedTime: "4 horas"
            }
          ]
        },
        
        {
          id: "09_ciclos_termodinamicos",
          title: "Ciclos Termodinámicos",
          description: "Ciclos de potencia y refrigeración",
          icon: "🔄",
          color: "pink",
          isTheoryHeavy: false,
          estimatedTime: "8-10 horas",
          prerequisites: ["Máquinas Térmicas"],
          subtopics: [
            {
              id: "ciclo_otto",
              title: "Ciclo Otto",
              description: "Motores de gasolina",
              icon: "🚗",
              isTheoryOnly: false,
              priority: 1,
              estimatedTime: "2.5 horas"
            },
            {
              id: "ciclo_diesel",
              title: "Ciclo Diesel",
              description: "Motores diesel",
              icon: "🚛",
              isTheoryOnly: false,
              priority: 2,
              estimatedTime: "2.5 horas"
            },
            {
              id: "ciclo_brayton",
              title: "Ciclo Brayton",
              description: "Turbinas de gas",
              icon: "✈️",
              isTheoryOnly: false,
              priority: 3,
              estimatedTime: "2.5 horas"
            },
            {
              id: "ciclo_rankine",
              title: "Ciclo Rankine",
              description: "Centrales de vapor",
              icon: "🏭",
              isTheoryOnly: false,
              priority: 4,
              estimatedTime: "2.5 horas"
            }
          ]
        }
      ]
    },
    
    {
      id: "nivel-7-transferencia-calor",
      title: "Nivel 7: Transferencia de Calor",
      description: "Mecanismos de transferencia térmica",
      color: "orange",
      priority: 7,
      topics: [
        {
          id: "11_transferencia_de_calor",
          title: "Transferencia de Calor",
          description: "Conducción, convección y radiación",
          icon: "🔥",
          color: "orange",
          isTheoryHeavy: false,
          estimatedTime: "12-15 horas",
          prerequisites: ["Ciclos Termodinámicos"],
          subtopics: [
            {
              id: "conceptos_basicos",
              title: "Conceptos Básicos",
              description: "Fundamentos de transferencia de calor",
              icon: "📚",
              isTheoryOnly: true,
              priority: 1,
              estimatedTime: "2 horas"
            },
            {
              id: "conduccion",
              title: "Conducción",
              description: "Transferencia por contacto directo",
              icon: "🧱",
              isTheoryOnly: false,
              priority: 2,
              estimatedTime: "4 horas"
            },
            {
              id: "conveccion",
              title: "Convección",
              description: "Transferencia por movimiento de fluidos",
              icon: "🌊",
              isTheoryOnly: false,
              priority: 3,
              estimatedTime: "4 horas"
            },
            {
              id: "radiacion",
              title: "Radiación",
              description: "Transferencia por ondas electromagnéticas",
              icon: "☀️",
              isTheoryOnly: false,
              priority: 4,
              estimatedTime: "3 horas"
            },
            {
              id: "resistencia_termica_equivalente",
              title: "Resistencia Térmica",
              description: "Análisis de redes térmicas",
              icon: "🔌",
              isTheoryOnly: false,
              priority: 5,
              estimatedTime: "2 horas"
            },
            {
              id: "intercambiadores_de_calor",
              title: "Intercambiadores de Calor",
              description: "Equipos de intercambio térmico",
              icon: "🔄",
              isTheoryOnly: false,
              priority: 6,
              estimatedTime: "2.5 horas"
            },
            {
              id: "aislamiento_termico",
              title: "Aislamiento Térmico",
              description: "Materiales y técnicas de aislamiento",
              icon: "🛡️",
              isTheoryOnly: false,
              priority: 7,
              estimatedTime: "1.5 horas"
            }
          ]
        }
      ]
    },
    
    {
      id: "nivel-8-aplicaciones-avanzadas",
      title: "Nivel 8: Aplicaciones Avanzadas",
      description: "Sistemas complejos y aplicaciones industriales",
      color: "gray",
      priority: 8,
      topics: [
        {
          id: "10_ciclos_combinados",
          title: "Ciclos Combinados",
          description: "Sistemas de alta eficiencia",
          icon: "🔗",
          color: "gray",
          isTheoryHeavy: false,
          estimatedTime: "6-8 horas",
          prerequisites: ["Transferencia de Calor"],
          subtopics: [
            {
              id: "ciclo_de_brayton_rankine",
              title: "Ciclo Brayton-Rankine",
              description: "Combinación gas-vapor",
              icon: "🔄",
              isTheoryOnly: false,
              priority: 1,
              estimatedTime: "2.5 horas"
            },
            {
              id: "ciclo_de_rankine_con_turbina_de_gas",
              title: "Rankine con Turbina de Gas",
              description: "Sistemas híbridos",
              icon: "⚙️",
              isTheoryOnly: false,
              priority: 2,
              estimatedTime: "2.5 horas"
            },
            {
              id: "cogeneracion",
              title: "Cogeneración",
              description: "Producción simultánea de electricidad y calor",
              icon: "🏭",
              isTheoryOnly: false,
              priority: 3,
              estimatedTime: "2 horas"
            }
          ]
        },
        
        {
          id: "12_aplicaciones_practicas",
          title: "Aplicaciones Prácticas",
          description: "Sistemas reales de ingeniería",
          icon: "🏗️",
          color: "brown",
          isTheoryHeavy: false,
          estimatedTime: "10-12 horas",
          prerequisites: ["Ciclos Combinados"],
          subtopics: [
            {
              id: "centrales_electricas",
              title: "Centrales Eléctricas",
              description: "Generación de energía eléctrica",
              icon: "⚡",
              isTheoryOnly: false,
              priority: 1,
              estimatedTime: "2.5 horas"
            },
            {
              id: "motores_de_combustion_interna",
              title: "Motores de Combustión",
              description: "Motores automotrices e industriales",
              icon: "🚗",
              isTheoryOnly: false,
              priority: 2,
              estimatedTime: "2.5 horas"
            },
            {
              id: "sistemas_de_climatizacion",
              title: "Sistemas de Climatización",
              description: "HVAC y control ambiental",
              icon: "🌡️",
              isTheoryOnly: false,
              priority: 3,
              estimatedTime: "2 horas"
            },
            {
              id: "bombas_termicas_domesticas",
              title: "Bombas Térmicas Domésticas",
              description: "Calefacción residencial eficiente",
              icon: "🏠",
              isTheoryOnly: false,
              priority: 4,
              estimatedTime: "2 horas"
            },
            {
              id: "ciclos_de_potencia",
              title: "Ciclos de Potencia",
              description: "Optimización de sistemas de potencia",
              icon: "⚙️",
              isTheoryOnly: false,
              priority: 5,
              estimatedTime: "1.5 horas"
            },
            {
              id: "ciclos_de_refrigeracion",
              title: "Ciclos de Refrigeración",
              description: "Sistemas de refrigeración industrial",
              icon: "❄️",
              isTheoryOnly: false,
              priority: 6,
              estimatedTime: "1.5 horas"
            }
          ]
        }
      ]
    },
    
    {
      id: "nivel-9-termodinamica-estadistica",
      title: "Nivel 9: Termodinámica Estadística",
      description: "Fundamentos microscópicos avanzados",
      color: "purple",
      priority: 9,
      topics: [
        {
          id: "13_termodinamica_estadistica",
          title: "Termodinámica Estadística",
          description: "Conexión microscópica-macroscópica",
          icon: "🎲",
          color: "purple",
          isTheoryHeavy: true,
          estimatedTime: "30-34 horas",
          prerequisites: ["Aplicaciones Prácticas"],
          subtopics: [
            {
              id: "microestados_y_macroestados",
              title: "Microestados y Macroestados",
              description: "Descripción estadística de sistemas",
              icon: "🔬",
              isTheoryOnly: true,
              priority: 1,
              estimatedTime: "2 horas"
            },
            {
              id: "distribuciones_de_boltzmann_y_gibbs",
              title: "Distribuciones Estadísticas",
              description: "Distribuciones de Boltzmann y Gibbs",
              icon: "📊",
              isTheoryOnly: true,
              priority: 2,
              estimatedTime: "2.5 horas"
            },
            {
              id: "funcion_de_particion",
              title: "Función de Partición",
              description: "Función de partición y propiedades termodinámicas",
              icon: "🧮",
              isTheoryOnly: false,
              priority: 3,
              estimatedTime: "2.5 horas"
            },
            {
              id: "ensambles_estadisticos",
              title: "Ensambles Estadísticos",
              description: "Microcanónico, canónico y gran canónico",
              icon: "📦",
              isTheoryOnly: true,
              priority: 4,
              estimatedTime: "2 horas"
            },
            {
              id: "teorema_de_equiparticion",
              title: "Teorema de Equipartición",
              description: "Distribución de energía en grados de libertad",
              icon: "⚖️",
              isTheoryOnly: false,
              priority: 5,
              estimatedTime: "2 horas"
            },
            {
              id: "estadisticas_cuanticas",
              title: "Estadísticas Cuánticas",
              description: "Fermi-Dirac y Bose-Einstein",
              icon: "⚛️",
              isTheoryOnly: true,
              priority: 6,
              estimatedTime: "2.5 horas"
            },
            {
              id: "gas_ideal_cuantico",
              title: "Gas Ideal Cuántico",
              description: "Tratamiento cuántico del gas ideal",
              icon: "💨",
              isTheoryOnly: false,
              priority: 7,
              estimatedTime: "2 horas"
            },
            {
              id: "gas_de_fermi",
              title: "Gas de Fermi",
              description: "Sistemas de fermiones",
              icon: "🔵",
              isTheoryOnly: false,
              priority: 8,
              estimatedTime: "2 horas"
            },
            {
              id: "condensacion_bose_einstein",
              title: "Condensación de Bose-Einstein",
              description: "Fenómeno cuántico macroscópico",
              icon: "❄️",
              isTheoryOnly: false,
              priority: 9,
              estimatedTime: "2 horas"
            },
            {
              id: "fonones_modelo_debye",
              title: "Fonones y Modelo de Debye",
              description: "Vibraciones en sólidos",
              icon: "🔊",
              isTheoryOnly: false,
              priority: 10,
              estimatedTime: "2 horas"
            },
            {
              id: "transiciones_de_fase",
              title: "Transiciones de Fase",
              description: "Cambios de estado desde perspectiva estadística",
              icon: "🔄",
              isTheoryOnly: true,
              priority: 11,
              estimatedTime: "2 horas"
            },
            {
              id: "modelo_de_ising",
              title: "Modelo de Ising",
              description: "Modelo de sistemas magnéticos",
              icon: "🧲",
              isTheoryOnly: true,
              priority: 12,
              estimatedTime: "2 horas"
            },
            {
              id: "calculo_de_propiedades_termodinamicas",
              title: "Cálculo de Propiedades Termodinámicas",
              description: "Obtención de propiedades macroscópicas desde la función de partición",
              icon: "🧮",
              isTheoryOnly: false,
              priority: 13,
              estimatedTime: "2.5 horas"
            },
            {
              id: "simulaciones_monte_carlo",
              title: "Simulaciones Monte Carlo",
              description: "Métodos estocásticos para sistemas termodinámicos",
              icon: "🎲",
              isTheoryOnly: false,
              priority: 14,
              estimatedTime: "2.5 horas"
            },
            {
              id: "aplicaciones_de_la_estadistica_cuantica",
              title: "Aplicaciones de la Estadística Cuántica",
              description: "Sistemas cuánticos: fotones, fonones y fermiones",
              icon: "⚛️",
              isTheoryOnly: false,
              priority: 15,
              estimatedTime: "2.5 horas"
            },
            {
              id: "analisis_de_sistemas_complejos",
              title: "Análisis de Sistemas Complejos",
              description: "Fenómenos críticos y sistemas fuera del equilibrio",
              icon: "🔬",
              isTheoryOnly: false,
              priority: 16,
              estimatedTime: "2.5 horas"
            }
          ]
        }
      ]
    }
  ],
  
  // Configuración de navegación
  navigation: {
    showProgress: true,
    allowSkipping: false,
    recommendedPath: true,
    estimatedTotalTime: "80-100 horas"
  },
  
  // Configuración de dificultad
  difficulty: {
    eso: ["nivel-0-basicos-eso"],
    beginner: ["nivel-1-fundamentos", "nivel-2-magnitudes"],
    intermediate: ["nivel-3-principios", "nivel-4-aplicaciones-basicas", "nivel-5-conceptos-avanzados"],
    advanced: ["nivel-6-aplicaciones-practicas", "nivel-7-transferencia-calor"],
    expert: ["nivel-8-aplicaciones-avanzadas", "nivel-9-termodinamica-estadistica"]
  }
};

// Función para obtener la ruta de aprendizaje recomendada
export function getRecommendedPath() {
  return thermodynamicsHierarchy.levels.map(level => ({
    levelId: level.id,
    levelTitle: level.title,
    topics: level.topics.map(topic => ({
      topicId: topic.id,
      topicTitle: topic.title,
      subtopics: topic.subtopics.map(subtopic => ({
        subtopicId: subtopic.id,
        subtopicTitle: subtopic.title,
        priority: subtopic.priority,
        estimatedTime: subtopic.estimatedTime,
        isTheoryOnly: subtopic.isTheoryOnly
      })).sort((a, b) => a.priority - b.priority)
    }))
  }));
}

// Función para obtener prerrequisitos de un tema
export function getPrerequisites(topicId) {
  for (const level of thermodynamicsHierarchy.levels) {
    const topic = level.topics.find(t => t.id === topicId);
    if (topic) {
      return topic.prerequisites || [];
    }
  }
  return [];
}

// Función para obtener el siguiente tema recomendado
export function getNextRecommendedTopic(currentTopicId) {
  const levels = thermodynamicsHierarchy.levels;
  let foundCurrent = false;
  
  for (const level of levels) {
    for (const topic of level.topics) {
      if (foundCurrent) {
        return {
          levelId: level.id,
          topicId: topic.id,
          topicTitle: topic.title,
          levelTitle: level.title
        };
      }
      if (topic.id === currentTopicId) {
        foundCurrent = true;
      }
    }
  }
  
  return null; // No hay siguiente tema
}

export default thermodynamicsHierarchy;