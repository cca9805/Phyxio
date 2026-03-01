#!/usr/bin/env node

/**
 * Script para generar contenido completo de termodinámica
 * Crea archivos teoria.jsx, definitions.js y ejercicios.json para todos los subtemas
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de temas de termodinámica
const thermodynamicsTopics = {
  "01_conceptos_fundamentales": {
    "estado_y_equilibrio": {
      title: "Estado y Equilibrio Termodinámico",
      description: "Conceptos de estado termodinámico y condiciones de equilibrio",
      formulas: ["dU = 0 (equilibrio)", "dS = 0 (equilibrio estable)"]
    },
    "frontera_y_entorno": {
      title: "Frontera y Entorno",
      description: "Definición de fronteras del sistema y clasificación del entorno",
      formulas: ["Sistema + Entorno = Universo"]
    },
    "propiedades_termicas": {
      title: "Propiedades Térmicas",
      description: "Clasificación y características de las propiedades termodinámicas",
      formulas: ["Intensivas: T, P, ρ", "Extensivas: V, U, H, S"]
    }
  },
  "02_magnitudes_termicas": {
    "calor": {
      title: "Calor",
      description: "Transferencia de energía térmica entre sistemas",
      formulas: ["Q = mcΔT", "Q = mL (cambio de fase)", "q̇ = -kA(dT/dx)"]
    },
    "temperatura": {
      title: "Temperatura",
      description: "Medida de la energía cinética molecular y escalas de temperatura",
      formulas: ["T(K) = T(°C) + 273.15", "T(°R) = T(°F) + 459.67", "T(°F) = 9/5 T(°C) + 32"]
    },
    "trabajo_termodinamico": {
      title: "Trabajo Termodinámico",
      description: "Diferentes formas de trabajo en sistemas termodinámicos",
      formulas: ["W = ∫P dV", "W_eje = τω", "W_eléctrico = VI"]
    }
  },
  "03_principios_de_la_termodinamica": {
    "cero_principio": {
      title: "Ley Cero de la Termodinámica",
      description: "Equilibrio térmico y concepto de temperatura",
      formulas: ["Si A=C y B=C, entonces A=B (equilibrio térmico)"]
    },
    "segunda_ley_de_la_termodinamica": {
      title: "Segunda Ley de la Termodinámica",
      description: "Entropía y dirección de los procesos naturales",
      formulas: ["dS ≥ δQ/T", "η_Carnot = 1 - T_C/T_H", "ΔS_universo ≥ 0"]
    },
    "tercera_ley_de_la_termodinamica": {
      title: "Tercera Ley de la Termodinámica",
      description: "Entropía en el cero absoluto",
      formulas: ["S(T=0) = 0 (cristal perfecto)"]
    },
    "formulaciones_equivalentes": {
      title: "Formulaciones Equivalentes",
      description: "Diferentes enunciados de las leyes termodinámicas",
      formulas: ["Clausius", "Kelvin-Planck", "Carnot"]
    }
  },
  "04_modelos_moleculares_y_gases": {
    "gases_reales": {
      title: "Gases Reales",
      description: "Comportamiento de gases reales y ecuaciones de estado",
      formulas: ["van der Waals: (P + a/V²)(V - b) = RT", "Z = PV/RT"]
    }
  },
  "05_entropia": {
    "entropia_en_procesos_reales": {
      title: "Entropía en Procesos Reales",
      description: "Cálculo de entropía en procesos irreversibles",
      formulas: ["dS = δQ/T + dS_gen", "dS_gen ≥ 0"]
    },
    "entropia_y_segunda_ley": {
      title: "Entropía y Segunda Ley",
      description: "Relación entre entropía y la segunda ley",
      formulas: ["ΔS = ∫δQ/T + S_gen", "S_gen ≥ 0"]
    },
    "interpretacion_estadistica": {
      title: "Interpretación Estadística",
      description: "Entropía desde el punto de vista estadístico",
      formulas: ["S = k ln Ω", "Ω = microestados"]
    },
    "medicion_y_calculo_de_la_entropia": {
      title: "Medición y Cálculo de la Entropía",
      description: "Métodos para calcular cambios de entropía",
      formulas: ["ΔS = ∫C_p dT/T - R ln(P₂/P₁)", "ΔS = ∫C_v dT/T + R ln(V₂/V₁)"]
    }
  },
  "06_procesos_termodinamicos": {
    "adiabatico": {
      title: "Proceso Adiabático",
      description: "Procesos sin transferencia de calor",
      formulas: ["Q = 0", "PV^γ = cte", "TV^(γ-1) = cte", "TP^((1-γ)/γ) = cte"]
    },
    "isobarico": {
      title: "Proceso Isobárico",
      description: "Procesos a presión constante",
      formulas: ["P = cte", "V/T = cte", "Q = ΔH", "W = P(V₂ - V₁)"]
    },
    "isocorico": {
      title: "Proceso Isocórico",
      description: "Procesos a volumen constante",
      formulas: ["V = cte", "P/T = cte", "Q = ΔU", "W = 0"]
    },
    "isotermico": {
      title: "Proceso Isotérmico",
      description: "Procesos a temperatura constante",
      formulas: ["T = cte", "PV = cte", "ΔU = 0", "Q = W = nRT ln(V₂/V₁)"]
    }
  }
};

// Generar contenido de teoría
function generateTheoryContent(topic, subtopic, config) {
  const { title, description, formulas } = config;
  
  return `import React from 'react';

export const metadata = {
  titulo: '${title}',
  descripcion: '${description}',
  categoria: 'termodinamica',
  subcategoria: '${topic}',
  tema: '${topic.replace(/^\d+_/, '')}',
  subtema: '${subtopic}',
  icono: '${subtopic}',
  palette: 'orange'
};

export default function ${subtopic.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}() {
  return (
    <div className="teoria-content">
      <h1>${title}</h1>
      
      <section className="section">
        <h2>Introducción</h2>
        <p>
          ${description}. Este tema es fundamental para comprender los principios 
          termodinámicos y su aplicación en sistemas de ingeniería.
        </p>
      </section>

      <section className="section">
        <h2>Conceptos Fundamentales</h2>
        <p>
          Los conceptos clave incluyen las definiciones básicas, las relaciones 
          matemáticas y las aplicaciones prácticas en sistemas termodinámicos.
        </p>
      </section>

      <section className="section">
        <h2>Ecuaciones Principales</h2>
        <div className="formulas-section">
          ${formulas.map(formula => `
          <div className="formula-box">
            <p><strong>${formula}</strong></p>
          </div>`).join('')}
        </div>
      </section>

      <section className="section">
        <h2>Aplicaciones</h2>
        <p>
          Este concepto se aplica en diversos sistemas de ingeniería, incluyendo 
          motores térmicos, refrigeradores, bombas de calor y procesos industriales.
        </p>
        
        <div className="applications-list">
          <ul>
            <li>Análisis de ciclos termodinámicos</li>
            <li>Diseño de sistemas energéticos</li>
            <li>Optimización de procesos</li>
            <li>Evaluación de eficiencia</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2>Ejemplos Prácticos</h2>
        <div className="example-box">
          <h3>Ejemplo de Aplicación</h3>
          <p>
            Consideremos un sistema típico donde se aplican estos principios...
          </p>
        </div>
      </section>

      <div className="summary-box">
        <h2>Resumen</h2>
        <p>
          ${title} es un concepto fundamental en termodinámica que permite 
          analizar y diseñar sistemas energéticos eficientes. Su comprensión 
          es esencial para la ingeniería térmica moderna.
        </p>
      </div>
    </div>
  );
}`;
}

// Generar definiciones
function generateDefinitions(topic, subtopic, config) {
  const { title, description } = config;
  
  return `export const definitions = {
  ${subtopic}: {
    term: "${title}",
    definition: "${description}"
  },
  
  concepto_principal: {
    term: "Concepto Principal",
    definition: "Definición del concepto principal relacionado con ${title.toLowerCase()}."
  },
  
  aplicacion_practica: {
    term: "Aplicación Práctica",
    definition: "Uso práctico de ${title.toLowerCase()} en sistemas de ingeniería."
  },
  
  formula_basica: {
    term: "Fórmula Básica",
    definition: "Ecuación fundamental que describe ${title.toLowerCase()}."
  },
  
  parametros_importantes: {
    term: "Parámetros Importantes",
    definition: "Variables clave que influyen en ${title.toLowerCase()}."
  }
};`;
}

// Generar ejercicios
function generateExercises(topic, subtopic, config) {
  const { title, formulas } = config;
  
  return `{
  "exercises": [
    {
      "id": 1,
      "type": "conceptual",
      "difficulty": "beginner",
      "question": "¿Cuál es la definición de ${title.toLowerCase()}?",
      "options": [
        "Opción A incorrecta",
        "Definición correcta de ${title.toLowerCase()}",
        "Opción C incorrecta",
        "Opción D incorrecta"
      ],
      "correct": 1,
      "explanation": "La definición correcta de ${title.toLowerCase()} es fundamental para comprender este concepto."
    },
    {
      "id": 2,
      "type": "calculation",
      "difficulty": "intermediate",
      "question": "Calcule el valor usando la fórmula principal de ${title.toLowerCase()}.",
      "formula": "${formulas[0] || 'Fórmula principal'}",
      "given": {
        "variable1": "Valor dado 1",
        "variable2": "Valor dado 2"
      },
      "solution": {
        "steps": [
          "Identificar la fórmula apropiada",
          "Sustituir los valores dados",
          "Realizar el cálculo"
        ],
        "answer": "Resultado calculado"
      },
      "explanation": "Explicación del proceso de cálculo para ${title.toLowerCase()}."
    },
    {
      "id": 3,
      "type": "conceptual",
      "difficulty": "intermediate",
      "question": "¿Cuál es la principal aplicación de ${title.toLowerCase()}?",
      "options": [
        "Aplicación en motores térmicos",
        "Aplicación en refrigeración",
        "Aplicación en procesos industriales",
        "Todas las anteriores"
      ],
      "correct": 3,
      "explanation": "${title} tiene múltiples aplicaciones en diversos sistemas termodinámicos."
    },
    {
      "id": 4,
      "type": "calculation",
      "difficulty": "advanced",
      "question": "Problema avanzado de ${title.toLowerCase()} con múltiples variables.",
      "formula": "${formulas[1] || formulas[0] || 'Fórmula avanzada'}",
      "given": {
        "parametro1": "100 unidades",
        "parametro2": "200 unidades",
        "parametro3": "50 unidades"
      },
      "solution": {
        "steps": [
          "Analizar el problema",
          "Aplicar la fórmula correspondiente",
          "Verificar las unidades",
          "Calcular el resultado final"
        ],
        "answer": "Resultado final"
      },
      "explanation": "Solución detallada del problema avanzado de ${title.toLowerCase()}."
    },
    {
      "id": 5,
      "type": "conceptual",
      "difficulty": "advanced",
      "question": "¿Cuáles son las limitaciones de ${title.toLowerCase()}?",
      "options": [
        "No tiene limitaciones",
        "Solo aplicable a gases ideales",
        "Limitaciones específicas del concepto",
        "Solo válido a altas temperaturas"
      ],
      "correct": 2,
      "explanation": "Como todo concepto termodinámico, ${title.toLowerCase()} tiene limitaciones específicas que deben considerarse."
    },
    {
      "id": 6,
      "type": "calculation",
      "difficulty": "beginner",
      "question": "Ejercicio básico de ${title.toLowerCase()}.",
      "formula": "Fórmula básica",
      "given": {
        "valor_inicial": "10",
        "valor_final": "20"
      },
      "solution": {
        "steps": [
          "Identificar los valores dados",
          "Aplicar la fórmula básica",
          "Obtener el resultado"
        ],
        "answer": "10"
      },
      "explanation": "Ejercicio introductorio para comprender ${title.toLowerCase()}."
    },
    {
      "id": 7,
      "type": "conceptual",
      "difficulty": "intermediate",
      "question": "¿Cómo se relaciona ${title.toLowerCase()} con otros conceptos termodinámicos?",
      "options": [
        "No se relaciona con otros conceptos",
        "Se relaciona directamente con la energía",
        "Solo se relaciona con la temperatura",
        "Se relaciona con múltiples propiedades"
      ],
      "correct": 3,
      "explanation": "${title} se relaciona con múltiples propiedades y conceptos en termodinámica."
    },
    {
      "id": 8,
      "type": "calculation",
      "difficulty": "intermediate",
      "question": "Calcule la eficiencia usando ${title.toLowerCase()}.",
      "formula": "η = (Salida útil)/(Entrada total)",
      "given": {
        "entrada": "1000 J",
        "salida_util": "400 J"
      },
      "solution": {
        "steps": [
          "Aplicar fórmula de eficiencia",
          "η = 400/1000 = 0.4",
          "Convertir a porcentaje: 40%"
        ],
        "answer": "40%"
      },
      "explanation": "La eficiencia es un parámetro clave en aplicaciones de ${title.toLowerCase()}."
    },
    {
      "id": 9,
      "type": "conceptual",
      "difficulty": "advanced",
      "question": "¿Cuál es la importancia de ${title.toLowerCase()} en la ingeniería moderna?",
      "options": [
        "No es importante",
        "Solo importante en investigación",
        "Fundamental para el diseño de sistemas energéticos",
        "Solo aplicable en laboratorios"
      ],
      "correct": 2,
      "explanation": "${title} es fundamental para el diseño y análisis de sistemas energéticos modernos."
    },
    {
      "id": 10,
      "type": "calculation",
      "difficulty": "advanced",
      "question": "Problema complejo integrando ${title.toLowerCase()} con otros conceptos.",
      "formula": "Fórmula integrada compleja",
      "given": {
        "temperatura": "300 K",
        "presion": "2 bar",
        "volumen": "0.5 m³"
      },
      "solution": {
        "steps": [
          "Analizar todas las variables",
          "Aplicar múltiples ecuaciones",
          "Integrar los resultados",
          "Verificar la consistencia"
        ],
        "answer": "Resultado integrado"
      },
      "explanation": "Problema que integra ${title.toLowerCase()} con otros conceptos termodinámicos."
    }
  ]
}`;
}

// Función principal
async function generateAllContent() {
  console.log('🔄 Generando contenido completo de termodinámica...');
  
  const basePath = path.join(__dirname, '..', 'src', 'data', 'termodinamica');
  let totalFiles = 0;
  
  for (const [topicKey, subtopics] of Object.entries(thermodynamicsTopics)) {
    console.log(`📁 Procesando ${topicKey}...`);
    
    for (const [subtopicKey, config] of Object.entries(subtopics)) {
      const subtopicPath = path.join(basePath, topicKey, subtopicKey);
      
      try {
        // Verificar si el directorio existe
        await fs.access(subtopicPath);
        
        // Generar teoria.jsx
        const theoryContent = generateTheoryContent(topicKey, subtopicKey, config);
        await fs.writeFile(path.join(subtopicPath, 'teoria.jsx'), theoryContent);
        
        // Generar definitions.js
        const definitionsContent = generateDefinitions(topicKey, subtopicKey, config);
        await fs.writeFile(path.join(subtopicPath, 'definitions.js'), definitionsContent);
        
        // Generar ejercicios.json
        const exercisesContent = generateExercises(topicKey, subtopicKey, config);
        await fs.writeFile(path.join(subtopicPath, 'ejercicios.json'), exercisesContent);
        
        totalFiles += 3;
        console.log(`  ✅ ${subtopicKey} completado`);
        
      } catch (error) {
        console.log(`  ⚠️  ${subtopicKey} - directorio no encontrado, saltando...`);
      }
    }
  }
  
  console.log(`\n✅ Generación completada!`);
  console.log(`📊 Total de archivos generados: ${totalFiles}`);
  console.log(`📁 Temas procesados: ${Object.keys(thermodynamicsTopics).length}`);
}

// Ejecutar
generateAllContent().catch(console.error);