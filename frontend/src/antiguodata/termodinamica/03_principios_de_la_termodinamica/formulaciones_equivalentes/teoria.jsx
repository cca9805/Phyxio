import React from 'react';
import { TheorySection, Concept } from '../../../../components/TheoryV2';
import { theoreticalConcepts } from './definitions.js';

// Metadatos del tema teórico
export const metadata = {
  titulo: "Formulaciones Equivalentes de las Leyes Termodinámicas",
  descripcion: "Diferentes enunciados matemáticamente equivalentes de las leyes termodinámicas y sus aplicaciones específicas",
  categoria: "termodinamica",
  subcategoria: "03_principios_de_la_termodinamica",
  tema: "03_principios_de_la_termodinamica",
  subtema: "formulaciones_equivalentes",
  icono: "formulaciones_equivalentes",
  palette: "blue", // Paleta azul para subtemas teóricos
  isTheoryOnly: true, // Identificador de subtema teórico
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const FormulacionesEquivalentesTheory = () => {
  return (
    <>
      <TheorySection title="Introducción" variant="theoretical">
        <div className="theory-only-intro">
          <p className="theory-description">
            <strong>{theoreticalConcepts.mainTopic}</strong> es un área fundamental de la termodinámica que 
            abarca {theoreticalConcepts.description.toLowerCase()}. Este subtema desarrolla los conceptos 
            teóricos esenciales para la comprensión profunda de los principios termodinámicos.
          </p>
          <div className="main-concept-highlight">
            <h4>💡 Concepto Principal:</h4>
            <p className="main-concept">{theoreticalConcepts.mainConcept}</p>
          </div>
        </div>
      </TheorySection>

      
      <TheorySection title="Formulaciones de la Segunda Ley" variant="theoretical">
        <Concept title="Formulaciones de la Segunda Ley" variant="detailed">
          <div className="detailed-content">
            
          <div class="second-law-formulations">
            <div class="formulation">
              <h4>🔥 Enunciado de Kelvin-Planck</h4>
              <div class="statement-detail">
                <p><strong>Enunciado:</strong> <em>"Es imposible construir una máquina térmica que, operando en un ciclo, no produzca otro efecto que la absorción de calor de un reservorio y la realización de una cantidad equivalente de trabajo."</em></p>
                <p><strong>Implicación:</strong> No existe la máquina térmica perfecta (eficiencia 100%)</p>
                <p><strong>Aplicación:</strong> Análisis de motores térmicos y centrales eléctricas</p>
              </div>
            </div>
            
            <div class="formulation">
              <h4>❄️ Enunciado de Clausius</h4>
              <div class="statement-detail">
                <p><strong>Enunciado:</strong> <em>"Es imposible construir un dispositivo que, operando en un ciclo, no produzca otro efecto que la transferencia de calor de un cuerpo frío a uno caliente."</em></p>
                <p><strong>Implicación:</strong> El calor no fluye espontáneamente de frío a caliente</p>
                <p><strong>Aplicación:</strong> Análisis de refrigeradores y bombas de calor</p>
              </div>
            </div>
            
            <div class="formulation">
              <h4>📈 Enunciado de la Entropía</h4>
              <div class="statement-detail">
                <p><strong>Enunciado:</strong> <em>"La entropía de un sistema aislado nunca disminuye: dS ≥ 0"</em></p>
                <p><strong>Implicación:</strong> Los procesos irreversibles aumentan la entropía total</p>
                <p><strong>Aplicación:</strong> Análisis de irreversibilidades y optimización de procesos</p>
              </div>
            </div>
          </div>
          
          <div class="equivalence-proof">
            <h4>🔗 Demostración de Equivalencia</h4>
            <p>Las formulaciones son equivalentes porque:</p>
            <ol>
              <li><strong>Kelvin-Planck → Clausius:</strong> Si existiera un refrigerador perfecto, combinado con una máquina térmica real, violaría Kelvin-Planck</li>
              <li><strong>Clausius → Kelvin-Planck:</strong> Si existiera una máquina térmica perfecta, combinada con un refrigerador real, violaría Clausius</li>
              <li><strong>Ambos → Entropía:</strong> La violación de cualquier enunciado implicaría dS &lt; 0 en un sistema aislado</li>
            </ol>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Formulaciones de la Primera Ley" variant="theoretical">
        <Concept title="Formulaciones de la Primera Ley" variant="detailed">
          <div className="detailed-content">
            
          <div class="first-law-formulations">
            <div class="formulation">
              <h4>⚡ Formulación Energética</h4>
              <div class="statement-detail">
                <p><strong>Enunciado:</strong> <em>"La energía no se crea ni se destruye, solo se transforma."</em></p>
                <p><strong>Ecuación:</strong> ΔU = Q - W</p>
                <p><strong>Aplicación:</strong> Balance energético en sistemas cerrados</p>
              </div>
            </div>
            
            <div class="formulation">
              <h4>🔄 Formulación Cíclica</h4>
              <div class="statement-detail">
                <p><strong>Enunciado:</strong> <em>"En cualquier proceso cíclico, el calor neto absorbido es igual al trabajo neto realizado."</em></p>
                <p><strong>Ecuación:</strong> ∮ δQ = ∮ δW</p>
                <p><strong>Aplicación:</strong> Análisis de ciclos termodinámicos</p>
              </div>
            </div>
            
            <div class="formulation">
              <h4>🌊 Formulación para Sistemas Abiertos</h4>
              <div class="statement-detail">
                <p><strong>Enunciado:</strong> <em>"La variación de energía de un volumen de control es igual al flujo neto de energía que entra menos el que sale."</em></p>
                <p><strong>Ecuación:</strong> dE/dt = Σṁᵢhᵢ - Σṁₑhₑ + Q̇ - Ẇ</p>
                <p><strong>Aplicación:</strong> Turbinas, compresores, intercambiadores</p>
              </div>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Selección de Formulaciones Apropiadas" variant="theoretical">
        <Concept title="Selección de Formulaciones Apropiadas" variant="detailed">
          <div className="detailed-content">
            
          <div class="formulation-selection">
            <div class="selection-guide">
              <h4>🎯 Criterios de Selección</h4>
              <div class="criteria">
                <div class="criterion">
                  <h5>Tipo de Sistema</h5>
                  <ul>
                    <li><strong>Sistema cerrado:</strong> ΔU = Q - W</li>
                    <li><strong>Sistema abierto:</strong> Ecuación de energía para volumen de control</li>
                    <li><strong>Sistema aislado:</strong> Formulación entrópica</li>
                  </ul>
                </div>
                
                <div class="criterion">
                  <h5>Tipo de Proceso</h5>
                  <ul>
                    <li><strong>Procesos cíclicos:</strong> Formulación cíclica</li>
                    <li><strong>Procesos irreversibles:</strong> Análisis entrópico</li>
                    <li><strong>Máquinas térmicas:</strong> Enunciado de Kelvin-Planck</li>
                    <li><strong>Refrigeración:</strong> Enunciado de Clausius</li>
                  </ul>
                </div>
                
                <div class="criterion">
                  <h5>Objetivo del Análisis</h5>
                  <ul>
                    <li><strong>Balance energético:</strong> Primera ley</li>
                    <li><strong>Dirección del proceso:</strong> Segunda ley</li>
                    <li><strong>Optimización:</strong> Análisis exergético</li>
                    <li><strong>Límites teóricos:</strong> Procesos reversibles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Puntos Clave" variant="theoretical">
        <Concept title="Resumen de Conceptos Fundamentales" variant="summary">
          <div className="key-points-summary">
            <ul className="key-points-list">
              {theoreticalConcepts.keyPoints.map((point, index) => (
                <li key={index} className="key-point">
                  <strong>{index + 1}.</strong> {point}
                </li>
              ))}
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Objetivos de Aprendizaje" variant="theoretical">
        <Concept title="Competencias a Desarrollar" variant="learning">
          <div className="learning-objectives">
            <p>Al completar este subtema, deberías ser capaz de:</p>
            <ol className="objectives-list">
              {theoreticalConcepts.learningObjectives.map((objective, index) => (
                <li key={index} className="objective">{objective}</li>
              ))}
            </ol>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Importancia y Aplicaciones" variant="theoretical">
        <Concept title="Relevancia en Termodinámica" variant="importance">
          <div className="importance-content">
            <p>
              Los conceptos desarrollados en este subtema son fundamentales para comprender 
              los principios más avanzados de la termodinámica. Establecen las bases teóricas 
              necesarias para el análisis riguroso de sistemas termodinámicos complejos y 
              constituyen el fundamento conceptual para aplicaciones prácticas en ingeniería.
            </p>
          </div>
        </Concept>
        
        <Concept title="Conexiones Interdisciplinarias" variant="application">
          <div className="application-content">
            <p>
              Este conocimiento teórico se conecta directamente con múltiples áreas de la 
              ingeniería y las ciencias, incluyendo la mecánica de fluidos, transferencia 
              de calor, química física, y diseño de sistemas energéticos. La comprensión 
              sólida de estos conceptos es esencial para la práctica profesional exitosa.
            </p>
          </div>
        </Concept>
      </TheorySection>
    </>
  );
};

export default FormulacionesEquivalentesTheory;