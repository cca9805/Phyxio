import React from 'react';
import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as potenciaDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ciclos de Potencia",
  descripcion: "Ciclos termodinámicos para generación de potencia",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CiclosPotenciaTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a los Ciclos de Potencia">
        <Concept title="¿Qué es un Ciclo de Potencia?">
          <p>
            Un <strong>ciclo de potencia</strong> es un proceso termodinámico cíclico que convierte energía 
            térmica (calor) en trabajo mecánico útil. Son la base de la generación de electricidad y propulsión 
            en motores.
          </p>

          <Important>
            <p><strong>Características fundamentales:</strong></p>
            <ul>
              <li>Proceso cíclico: el fluido de trabajo retorna a su estado inicial</li>
              <li>Absorbe calor de una fuente caliente (Q_H)</li>
              <li>Produce trabajo neto (W_neto)</li>
              <li>Rechaza calor a una fuente fría (Q_L)</li>
              <li>Eficiencia limitada por el ciclo de Carnot</li>
            </ul>
          </Important>
          <p><strong>Componentes principales:</strong></p>
          <ul>
            <li><strong>Caldera:</strong> Genera vapor a alta presión y temperatura</li>
            <li><strong>Turbina:</strong> Vapor expande produciendo trabajo</li>
            <li><strong>Condensador:</strong> Vapor se condensa a líquido</li>
            <li><strong>Bomba:</strong> Eleva presión del líquido</li>
          </ul>

          <p><strong>Procesos del ciclo:</strong></p>
          <ul>
            <li><strong>1→2 (Bombeo):</strong> Compresión isentrópica del líquido</li>
            <li><strong>2→3 (Caldera):</strong> Calentamiento isobárico hasta vapor sobrecalentado</li>
            <li><strong>3→4 (Turbina):</strong> Expansión isentrópica del vapor</li>
            <li><strong>4→1 (Condensador):</strong> Condensación isobárica</li>
          </ul>

          <p><strong>Eficiencia típica:</strong> 35-45%</p>

          <p><strong>Mejoras al ciclo básico:</strong></p>
          <ul>
            <li><strong>Recalentamiento:</strong> Vapor se recalienta entre etapas de turbina → η +5-10%</li>
            <li><strong>Regeneración:</strong> Extracción de vapor para precalentar agua → η +5-8%</li>
            <li><strong>Sobrecalentamiento:</strong> Mayor temperatura de vapor → η +3-5%</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <ul>
          <li>Centrales térmicas de carbón, gas, biomasa</li>
          <li>Centrales nucleares</li>
          <li>Centrales geotérmicas</li>
          <li>Ciclo inferior en plantas de ciclo combinado</li>
          <li>Cogeneración industrial</li>
        </ul>
      </div>

      <TheorySection title="Ciclo Brayton (Gas)">
        <Concept title="Descripción">
          <p>
            El <strong>ciclo Brayton</strong> es el ciclo de las turbinas de gas. El fluido de trabajo 
            (aire o gases de combustión) permanece en fase gaseosa durante todo el ciclo.
          </p>

          <p><strong>Componentes principales:</strong></p>
          <ul>
            <li><strong>Compresor:</strong> Comprime aire ambiente</li>
            <li><strong>Cámara de combustión:</strong> Quema combustible, eleva temperatura</li>
            <li><strong>Turbina:</strong> Gases calientes expanden produciendo trabajo</li>
          </ul>

          <p><strong>Procesos del ciclo:</strong></p>
          <ul>
            <li><strong>1→2 (Compresor):</strong> Compresión isentrópica del aire</li>
            <li><strong>2→3 (Combustión):</strong> Calentamiento isobárico</li>
            <li><strong>3→4 (Turbina):</strong> Expansión isentrópica</li>
            <li><strong>4→1 (Escape):</strong> Enfriamiento isobárico (ciclo abierto)</li>
          </ul>

          <p><strong>Eficiencia típica:</strong> 35-45% (simple), 55-65% (ciclo combinado)</p>

          <p><strong>Ventajas:</strong></p>
          <ul>
            <li>Alta relación potencia/peso (ideal para aviación)</li>
            <li>Arranque rápido</li>
            <li>Bajas emisiones con gas natural</li>
            <li>Mantenimiento relativamente sencillo</li>
          </ul>

          <p><strong>Mejoras:</strong></p>
          <ul>
            <li><strong>Interenfriamiento:</strong> Enfriamiento entre etapas de compresión</li>
            <li><strong>Recalentamiento:</strong> Entre etapas de turbina</li>
            <li><strong>Regeneración:</strong> Gases de escape precalientan aire comprimido</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
          <ul>
            <li>Generación eléctrica (centrales de ciclo simple y combinado)</li>
            <li>Propulsión aeronáutica (turbofan, turbohélice)</li>
            <li>Propulsión naval</li>
            <li>Compresión de gas natural (gasoductos)</li>
          </ul>
      </div>
      

      <TheorySection title="Ciclo Otto (Gasolina)">
        <Concept title="Descripción">
          <p>
            El <strong>ciclo Otto</strong> es el ciclo ideal de los motores de gasolina de encendido por chispa. 
            Es un ciclo de combustión interna con pistones alternativos.
          </p>

          <p><strong>Procesos del ciclo:</strong></p>
          <ul>
            <li><strong>0→1 (Admisión):</strong> Mezcla aire-combustible entra al cilindro</li>
            <li><strong>1→2 (Compresión):</strong> Compresión isentrópica (relación 8:1 a 12:1)</li>
            <li><strong>2→3 (Combustión):</strong> Ignición por chispa, combustión isocórica</li>
            <li><strong>3→4 (Expansión):</strong> Expansión isentrópica (carrera de potencia)</li>
            <li><strong>4→1 (Escape):</strong> Apertura de válvula, caída de presión isocórica</li>
            <li><strong>1→0 (Escape):</strong> Gases quemados salen del cilindro</li>
          </ul>

          <p><strong>Eficiencia típica:</strong> 25-30%</p>

          <p><strong>Eficiencia teórica:</strong></p>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            <strong>η_Otto = 1 - 1/r^(γ-1)</strong>
          </p>
          <p>Donde r = relación de compresión, γ = 1.4 (aire)</p>

          <p><strong>Características:</strong></p>
          <ul>
            <li>Encendido por chispa (bujía)</li>
            <li>Mezcla aire-combustible homogénea</li>
            <li>Relación de compresión limitada por autoignición (knock)</li>
            <li>Requiere gasolina de alto octanaje</li>
          </ul>
        </Concept>
      </TheorySection>
      
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
          <ul>
            <li>Automóviles de pasajeros</li>
            <li>Motocicletas</li>
            <li>Pequeños generadores portátiles</li>
            <li>Herramientas motorizadas</li>
          </ul>
        </div>

      

      <TheorySection title="Ciclo Diesel">
        <Concept title="Descripción">
          <p>
            El <strong>ciclo Diesel</strong> es el ciclo ideal de los motores diésel de encendido por compresión. 
            Similar al Otto pero con mayor relación de compresión y combustión a presión constante.
          </p>

          <p><strong>Procesos del ciclo:</strong></p>
          <ul>
            <li><strong>0→1 (Admisión):</strong> Solo aire entra (sin combustible)</li>
            <li><strong>1→2 (Compresión):</strong> Compresión isentrópica (relación 14:1 a 25:1)</li>
            <li><strong>2→3 (Combustión):</strong> Inyección de combustible, combustión isobárica</li>
            <li><strong>3→4 (Expansión):</strong> Expansión isentrópica</li>
            <li><strong>4→1 (Escape):</strong> Caída de presión isocórica</li>
            <li><strong>1→0 (Escape):</strong> Gases salen del cilindro</li>
          </ul>

          <p><strong>Eficiencia típica:</strong> 30-40%</p>

          <p><strong>Ventajas sobre Otto:</strong></p>
          <ul>
            <li>Mayor eficiencia (mayor relación de compresión)</li>
            <li>Mayor torque a bajas revoluciones</li>
            <li>Combustible más económico y seguro</li>
            <li>Mayor durabilidad</li>
          </ul>

          <p><strong>Desventajas:</strong></p>
          <ul>
            <li>Mayor peso y costo inicial</li>
            <li>Más ruido y vibraciones</li>
            <li>Mayores emisiones de NOₓ y partículas</li>
          </ul>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <ul>
          <li>Camiones y vehículos pesados</li>
          <li>Autobuses</li>
          <li>Maquinaria de construcción</li>
          <li>Generadores industriales</li>
          <li>Propulsión marina</li>
          <li>Locomotoras</li>
        </ul>
      </div>
      

      <TheorySection title="Ciclo Combinado">
        <Concept title="Descripción">
          <p>
            El <strong>ciclo combinado</strong> integra un ciclo Brayton (turbina de gas) con un ciclo Rankine 
            (turbina de vapor) para maximizar la eficiencia. Los gases de escape de la turbina de gas generan 
            vapor para el ciclo Rankine.
          </p>

          <p><strong>Configuración típica:</strong></p>
          <ul>
            <li><strong>Ciclo superior (Brayton):</strong> Turbina de gas genera electricidad</li>
            <li><strong>HRSG:</strong> Generador de vapor por recuperación de calor</li>
            <li><strong>Ciclo inferior (Rankine):</strong> Turbina de vapor genera electricidad adicional</li>
          </ul>

          <p><strong>Eficiencia:</strong> 55-65% (vs 35-45% de ciclos simples)</p>

          <p><strong>Ventajas:</strong></p>
          <ul>
            <li>Máxima eficiencia de conversión térmica</li>
            <li>Aprovechamiento óptimo del combustible</li>
            <li>Flexibilidad operativa</li>
            <li>Menores emisiones por unidad de energía</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Análisis de Rendimiento">
        <Concept title="Trabajo Neto">
          <Formula 
            expression={String.raw`W_{neto} = W_{turbina} - W_{compresor}`}
            description="Trabajo neto del ciclo"
            calculatorId="ciclos_de_potencia-grupo-1"
            definitions={potenciaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Relación de trabajos", expression: String.raw`\text{BWR} = \frac{W_{compresor}}{W_{turbina}}` },
              { description: "Potencia neta", expression: String.raw`P_{neta} = \dot{m} \times w_{neto}` }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>W_neto:</strong> Trabajo neto producido por ciclo (J o kJ)</li>
            <li><strong>W_turbina:</strong> Trabajo producido por la turbina (J o kJ)</li>
            <li><strong>W_compresor:</strong> Trabajo consumido por compresor/bomba (J o kJ)</li>
          </ul>

          <p><strong>Relación de trabajo de retroceso (BWR):</strong></p>
          <p>
            Indica qué fracción del trabajo de la turbina se consume en el compresor:
          </p>
          <ul>
            <li>Ciclo Rankine: BWR ≈ 1-2% (bomba consume poco)</li>
            <li>Ciclo Brayton: BWR ≈ 40-50% (compresor consume mucho)</li>
          </ul>
        </Concept>

        <Concept title="Eficiencia Térmica">
          <Formula 
            expression={String.raw`\eta_{th} = \frac{W_{neto}}{Q_{entrada}}`}
            description="Eficiencia térmica del ciclo"
            calculatorId="ciclos_de_potencia-grupo-1"
            definitions={potenciaDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Forma alternativa", expression: String.raw`\eta_{th} = 1 - \frac{Q_{salida}}{Q_{entrada}}` },
              { description: "Límite de Carnot", expression: String.raw`\eta_{Carnot} = 1 - \frac{T_L}{T_H}` }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>η_th:</strong> Eficiencia térmica (adimensional, 0-1)</li>
            <li><strong>W_neto:</strong> Trabajo neto del ciclo (J)</li>
            <li><strong>Q_entrada:</strong> Calor suministrado al ciclo (J)</li>
          </ul>

          <p><strong>Comparación de eficiencias:</strong></p>
          <ul>
            <li>Otto: 25-30%</li>
            <li>Diesel: 30-40%</li>
            <li>Rankine simple: 35-40%</li>
            <li>Brayton simple: 35-45%</li>
            <li>Rankine mejorado: 40-45%</li>
            <li>Brayton con regeneración: 45-50%</li>
            <li>Ciclo combinado: 55-65%</li>
          </ul>
        </Concept>

        <Concept title="Factores que Afectan la Eficiencia">
          <p><strong>1. Temperaturas del ciclo:</strong></p>
          <ul>
            <li>Mayor T_alta → mayor eficiencia (limitada por materiales)</li>
            <li>Menor T_baja → mayor eficiencia (limitada por ambiente)</li>
          </ul>

          <p><strong>2. Relación de compresión/presión:</strong></p>
          <ul>
            <li>Mayor relación → mayor eficiencia</li>
            <li>Otto/Diesel: limitada por knock/materiales</li>
            <li>Brayton: limitada por temperatura del compresor</li>
          </ul>

          <p><strong>3. Irreversibilidades:</strong></p>
          <ul>
            <li>Fricción en componentes</li>
            <li>Pérdidas de presión</li>
            <li>Transferencia de calor no ideal</li>
            <li>Combustión incompleta</li>
          </ul>

          <p><strong>4. Mejoras tecnológicas:</strong></p>
          <ul>
            <li>Materiales avanzados (cerámicas, superaleaciones)</li>
            <li>Refrigeración de álabes</li>
            <li>Recubrimientos térmicos</li>
            <li>Diseño aerodinámico optimizado</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Comparación de Ciclos">
        <Concept title="Tabla Comparativa">
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1em'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #333'}}>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Ciclo</th>
                <th style={{padding: '0.5em', textAlign: 'center'}}>Eficiencia</th>
                <th style={{padding: '0.5em', textAlign: 'center'}}>Aplicación</th>
                <th style={{padding: '0.5em', textAlign: 'center'}}>Ventaja Principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding: '0.5em'}}>Rankine</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>35-45%</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Centrales térmicas</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Gran escala, estable</td>
              </tr>
              <tr>
                <td style={{padding: '0.5em'}}>Brayton</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>35-45%</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Turbinas gas, aviación</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Alta potencia/peso</td>
              </tr>
              <tr>
                <td style={{padding: '0.5em'}}>Otto</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>25-30%</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Automóviles</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Suave, bajo costo</td>
              </tr>
              <tr>
                <td style={{padding: '0.5em'}}>Diesel</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>30-40%</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Camiones, industria</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Alto torque, eficiente</td>
              </tr>
              <tr>
                <td style={{padding: '0.5em'}}>Combinado</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>55-65%</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Centrales modernas</td>
                <td style={{padding: '0.5em', textAlign: 'center'}}>Máxima eficiencia</td>
              </tr>
            </tbody>
          </table>
        </Concept>

        <Concept title="Selección del Ciclo">
          <p><strong>Criterios de selección:</strong></p>
          <ul>
            <li><strong>Escala de potencia:</strong> MW → Rankine/Brayton; kW → Otto/Diesel</li>
            <li><strong>Movilidad:</strong> Requerida → Otto/Diesel/Brayton; Fija → Rankine</li>
            <li><strong>Eficiencia:</strong> Máxima → Combinado; Aceptable → Simple</li>
            <li><strong>Costo:</strong> Bajo → Otto; Alto → Combinado</li>
            <li><strong>Combustible:</strong> Gas → Brayton; Líquido → Otto/Diesel/Rankine</li>
          </ul>
        </Concept>
      </TheorySection>
    </>
  );
};


export default CiclosPotenciaTheory;
