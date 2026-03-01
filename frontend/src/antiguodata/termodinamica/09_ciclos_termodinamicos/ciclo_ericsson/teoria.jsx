import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions as ericssonDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ciclo Ericsson",
  descripcion: "Ciclo con procesos isotérmicos e isobáricos",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CicloEricssonTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Ciclo Ericsson">
        <Concept title="¿Qué es el Ciclo Ericsson?">
          <p>
            El ciclo Ericsson es un ciclo termodinámico que opera entre dos temperaturas 
            constantes mediante dos procesos isotérmicos y dos procesos isobáricos (presión constante).
          </p>
          <p>
            Propuesto por John Ericsson en 1853, este ciclo es el análogo del ciclo Stirling pero 
            utilizando procesos a presión constante en lugar de volumen constante. Al igual que el 
            Stirling, puede alcanzar teóricamente la eficiencia de Carnot mediante regeneración.
          </p>
        </Concept>

        <Concept title="Las Cuatro Etapas del Ciclo">
          <h3>1. Compresión Isotérmica (T = T<sub>C</sub>)</h3>
          <ul>
            <li>El gas se comprime a temperatura baja constante T<sub>C</sub></li>
            <li>Se rechaza calor Q<sub>C</sub> al foco frío</li>
            <li>La presión aumenta durante la compresión</li>
            <li>Trabajo: W₁ = -nRT<sub>C</sub> ln(P₂/P₁)</li>
          </ul>

          <h3>2. Calentamiento Isobárico (P = P<sub>alta</sub>)</h3>
          <ul>
            <li>La presión permanece constante en P<sub>alta</sub></li>
            <li>La temperatura aumenta de T<sub>C</sub> a T<sub>H</sub></li>
            <li>El calor proviene del regenerador interno</li>
            <li>El volumen aumenta durante el calentamiento</li>
          </ul>

          <h3>3. Expansión Isotérmica (T = T<sub>H</sub>)</h3>
          <ul>
            <li>El gas se expande a temperatura alta constante T<sub>H</sub></li>
            <li>Absorbe calor Q<sub>H</sub> del foco caliente</li>
            <li>La presión disminuye durante la expansión</li>
            <li>Trabajo: W₃ = nRT<sub>H</sub> ln(P₂/P₁)</li>
          </ul>

          <h3>4. Enfriamiento Isobárico (P = P<sub>baja</sub>)</h3>
          <ul>
            <li>La presión permanece constante en P<sub>baja</sub></li>
            <li>La temperatura disminuye de T<sub>H</sub> a T<sub>C</sub></li>
            <li>El calor se almacena en el regenerador</li>
            <li>El volumen disminuye durante el enfriamiento</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia del Ciclo Ericsson">
        <Formula 
          expression={String.raw`\eta_{Ericsson} = 1 - \frac{T_C}{T_H}`}
          description="Eficiencia teórica del ciclo Ericsson (igual a Carnot)"
          calculatorId="ciclo_ericsson-grupo-1"
          definitions={ericssonDefinitions}
          exercises={exercises}
          complementary={[
            { description: "Trabajo neto", expression: String.raw`W = nR(T_H - T_C)\ln\frac{P_2}{P_1}` },
            { description: "Calor absorbido", expression: String.raw`Q_H = nRT_H\ln\frac{P_2}{P_1}` }
          ]}
        />

        <p>Donde:</p>
        <ul>
          <li>η<sub>Ericsson</sub>: eficiencia del ciclo Ericsson (adimensional)</li>
          <li>T<sub>C</sub>: temperatura absoluta del foco frío (K)</li>
          <li>T<sub>H</sub>: temperatura absoluta del foco caliente (K)</li>
        </ul>

        <Concept title="Regeneración en el Ciclo Ericsson">
          <p>
            La clave para alcanzar la eficiencia de Carnot es la regeneración perfecta:
          </p>
          <ul>
            <li>Proceso 2-3: durante el calentamiento isobárico, el gas absorbe calor</li>
            <li>Proceso 4-1: durante el enfriamiento isobárico, el gas cede calor</li>
            <li>Regenerador: almacena el calor del proceso 4-1 y lo devuelve en el 2-3</li>
            <li>Resultado: solo se intercambia calor neto en los procesos isotérmicos</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Comparación: Ericsson vs Stirling">
        <Concept title="Similitudes">
          <ul>
            <li><strong>Eficiencia teórica:</strong> Ambos alcanzan la eficiencia de Carnot</li>
            <li><strong>Regeneración:</strong> Ambos requieren regeneración interna</li>
            <li><strong>Dos isotermas:</strong> Procesos de transferencia de calor a T constante</li>
            <li><strong>Combustión externa:</strong> Fuente de calor externa al fluido de trabajo</li>
          </ul>
        </Concept>

        <Concept title="Diferencias Clave">
          <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1em'}}>
            <thead>
              <tr style={{borderBottom: '2px solid #333'}}>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Característica</th>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Ciclo Stirling</th>
                <th style={{padding: '0.5em', textAlign: 'left'}}>Ciclo Ericsson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding: '0.5em'}}>Procesos no isotérmicos</td>
                <td style={{padding: '0.5em'}}>Isocóricos (V constante)</td>
                <td style={{padding: '0.5em'}}>Isobáricos (P constante)</td>
              </tr>
              <tr>
                <td style={{padding: '0.5em'}}>Implementación típica</td>
                <td style={{padding: '0.5em'}}>Pistones alternativos</td>
                <td style={{padding: '0.5em'}}>Turbinas de flujo continuo</td>
              </tr>
              <tr>
                <td style={{padding: '0.5em'}}>Aplicación principal</td>
                <td style={{padding: '0.5em'}}>Motores de baja potencia</td>
                <td style={{padding: '0.5em'}}>Turbinas de gas</td>
              </tr>
              <tr>
                <td style={{padding: '0.5em'}}>Fluido de trabajo</td>
                <td style={{padding: '0.5em'}}>Gas cerrado (He, H₂)</td>
                <td style={{padding: '0.5em'}}>Aire (ciclo abierto)</td>
              </tr>
            </tbody>
          </table>
        </Concept>
      </TheorySection>

      <TheorySection title="Implementaciones Prácticas">
        <Concept title="Turbinas de Gas con Regeneración">
          <p>
            El ciclo Ericsson es la base teórica de las turbinas de gas regenerativas:
          </p>
          <ul>
            <li>Compresor: aproxima la compresión isotérmica mediante enfriamiento</li>
            <li>Regenerador: intercambiador de calor entre escape y entrada</li>
            <li>Cámara de combustión: calentamiento a presión constante</li>
            <li>Turbina: aproxima la expansión isotérmica</li>
          </ul>
        </Concept>

        <Concept title="Ciclo Brayton Regenerativo">
          <p>
            El ciclo Brayton con regeneración es una aproximación práctica del ciclo Ericsson:
          </p>
          <ul>
            <li>Usa compresión y expansión adiabáticas en lugar de isotérmicas</li>
            <li>Mantiene los procesos isobáricos de calentamiento y enfriamiento</li>
            <li>Eficiencia menor que Ericsson pero más fácil de implementar</li>
            <li>Usado en plantas de potencia y propulsión aeronáutica</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ventajas y Limitaciones">
        <Concept title="Ventajas del Ciclo Ericsson">
          <ul>
            <li>Alta eficiencia teórica: Igual a Carnot con regeneración perfecta</li>
            <li>Flujo continuo: Adecuado para turbomaquinaria</li>
            <li>Escalabilidad: Desde pequeñas hasta grandes potencias</li>
            <li>Combustión externa: Versatilidad en combustibles</li>
            <li>Bajas emisiones: Combustión continua y controlada</li>
          </ul>
        </Concept>

        <Concept title="Desafíos Prácticos">
          <ul>
            <li>Compresión isotérmica: Difícil de lograr en la práctica</li>
            <li>Regenerador: Requiere gran área de transferencia de calor</li>
            <li>Pérdidas de presión: En intercambiadores y ductos</li>
            <li>Costo: Regeneradores efectivos son caros</li>
            <li>Complejidad: Más componentes que ciclos simples</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones Modernas">
        <Concept title="Generación de Energía">
          <ul>
            <li>Plantas de ciclo combinado: Con regeneración para mayor eficiencia</li>
            <li>Cogeneración: Aprovechamiento del calor residual</li>
            <li>Energía solar concentrada: Turbinas con receptor solar</li>
            <li>Biomasa: Gasificación y turbinas de gas</li>
          </ul>
        </Concept>

        <Concept title="Propulsión">
          <ul>
            <li>Turbinas aeronáuticas: Motores turbofan con regeneración</li>
            <li>Propulsión naval: Turbinas de gas en buques</li>
            <li>Vehículos terrestres: Turbinas para transporte pesado</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Análisis Termodinámico Detallado">
        <Concept title="Trabajo en Cada Proceso">
          <h3>Proceso 1-2: Compresión Isotérmica</h3>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            W₁₋₂ = -nRT<sub>C</sub> ln(P₂/P₁) {'<'} 0
          </p>

          <h3>Proceso 2-3: Calentamiento Isobárico</h3>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            <strong>W₂₋₃ = nR(T<sub>H</sub> - T<sub>C</sub>)</strong>
          </p>

          <h3>Proceso 3-4: Expansión Isotérmica</h3>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            W₃₋₄ = nRT<sub>H</sub> ln(P₂/P₁) {'>'} 0
          </p>

          <h3>Proceso 4-1: Enfriamiento Isobárico</h3>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            W₄₋₁ = -nR(T<sub>H</sub> - T<sub>C</sub>)
          </p>
        </Concept>

        <Concept title="Trabajo Neto">
          <p>
            Sumando todos los trabajos:
          </p>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            W<sub>neto</sub> = nR(T<sub>H</sub> - T<sub>C</sub>) ln(P₂/P₁)
          </p>
          <p>
            Este trabajo neto es positivo cuando T<sub>H</sub> {'>'} T<sub>C</sub> y P₂ {'>'} P₁, 
            indicando que el ciclo produce trabajo.
          </p>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>⚙️ Usos y aproximaciones</h3>
          <p>
            Turbinas de gas regenerativas aproximan el Ericsson: recuperan calor del escape para precalentar el aire comprimido, mejorando la eficiencia, especialmente a carga parcial.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🏭 Cogeneración</h3>
          <p>
            La regeneración y el aprovechamiento del calor residual permiten producir electricidad y calor útil en una misma planta, elevando la eficiencia global.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌞 Solar térmica y biomasa</h3>
          <p>
            Fuentes externas de calor estables (solar de concentración, biomasa/gasificación) encajan con la combustión externa y los procesos casi isotérmicos del ciclo.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y evolución del Ericsson
        </h2>
        <div className="theory-subsection">
          <h3>🧑‍🔧 Ericsson y la regeneración (1853)</h3>
          <p>
            John Ericsson propuso un ciclo con isotermas e isobáricos y regeneración interna, sentando bases para diseños de flujo continuo y el uso de regeneradores en turbomáquinas.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>🧩 Practicidad vs ideal</h3>
          <p>
            Las isotermas perfectas son difíciles; se aproximan con enfriamiento y calentamiento intermedios. El regenerador debe equilibrar alta efectividad con bajas pérdidas de presión.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔁 Brayton regenerativo</h3>
          <p>
            Muchas implementaciones reales adoptan un Brayton con regenerador como compromiso práctico entre complejidad y rendimiento.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>Dos isotermas (T<sub>H</sub>, T<sub>C</sub>) y dos isobáricos con regeneración interna.</li>
          <li>Eficiencia ideal: η = 1 − T<sub>C</sub>/T<sub>H</sub> con regeneración perfecta.</li>
          <li>Aproximación práctica: ciclo Brayton con regenerador.</li>
          <li>Aplicaciones: generación, cogeneración, solar térmica y biomasa.</li>
        </ul>
      </div>
    </>
  );
};

export default CicloEricssonTheory;
