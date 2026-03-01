import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions as stirlingDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ciclo Stirling",
  descripcion: "Ciclo regenerativo con alta eficiencia",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CicloStirlingTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Ciclo Stirling">
        <Concept title="Introducción">
          <p>
            El ciclo Stirling es un ciclo termodinámico regenerativo que opera entre dos 
            temperaturas constantes mediante dos procesos isotérmicos y dos procesos isocóricos (volumen constante).
          </p>
          <p>
            Inventado por Robert Stirling en 1816, este ciclo es notable por su alta eficiencia teórica 
            (igual a la de Carnot) y su capacidad de usar cualquier fuente de calor externa.
          </p>
        </Concept>

        <Concept title="Las Cuatro Etapas">
          <h3>1. Expansión Isotérmica (T<sub>H</sub>)</h3>
          <ul>
            <li>El gas absorbe calor del foco caliente</li>
            <li>Se expande a temperatura constante</li>
            <li>Realiza trabajo</li>
          </ul>

          <h3>2. Enfriamiento Isocórico</h3>
          <ul>
            <li>El gas cede calor al regenerador</li>
            <li>Volumen constante</li>
            <li>Temperatura disminuye de T<sub>H</sub> a T<sub>C</sub></li>
          </ul>

          <h3>3. Compresión Isotérmica (T<sub>C</sub>)</h3>
          <ul>
            <li>El gas cede calor al foco frío</li>
            <li>Se comprime a temperatura constante</li>
            <li>Se realiza trabajo sobre el gas</li>
          </ul>

          <h3>4. Calentamiento Isocórico</h3>
          <ul>
            <li>El gas absorbe calor del regenerador</li>
            <li>Volumen constante</li>
            <li>Temperatura aumenta de T<sub>C</sub> a T<sub>H</sub></li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia y Regeneración">
        <Concept title="Eficiencia Teórica">
          <p>
            Con regeneración perfecta, la eficiencia del ciclo Stirling es igual a la del ciclo de Carnot:
          </p>

          <Formula 
            expression={String.raw`\eta_{Stirling} = 1 - \frac{T_C}{T_H}`}
            description="Eficiencia del ciclo Stirling"
            calculatorId="ciclo_stirling-grupo-1"
            definitions={stirlingDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>η<sub>Stirling</sub>: eficiencia del ciclo Stirling (adimensional)</li>
            <li>T<sub>C</sub>: temperatura absoluta del foco frío (K)</li>
            <li>T<sub>H</sub>: temperatura absoluta del foco caliente (K)</li>
          </ul>
        </Concept>

        <Concept title="El Regenerador">
          <p>
            El regenerador es un dispositivo clave que almacena y devuelve calor internamente:
          </p>
          <ul>
            <li>Almacena calor durante el enfriamiento isocórico</li>
            <li>Devuelve ese calor durante el calentamiento isocórico</li>
            <li>Mejora dramáticamente la eficiencia del ciclo</li>
            <li>Reduce el calor externo necesario</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones del Motor Stirling">
        <Concept title="Ventajas">
          <ul>
            <li>Combustión externa: Puede usar cualquier fuente de calor</li>
            <li>Silencioso: Sin explosiones internas</li>
            <li>Bajo mantenimiento: Menos piezas móviles</li>
            <li>Multifuel: Solar, biomasa, gas, residuos</li>
            <li>Bajas emisiones: Combustión continua y controlada</li>
          </ul>
        </Concept>

        <Concept title="Aplicaciones Actuales">
          <ul>
            <li>Generación distribuida: Cogeneración residencial</li>
            <li>Energía solar: Concentradores solares con motor Stirling</li>
            <li>Criogenia: Refrigeradores criogénicos</li>
            <li>Espacial: Generadores para satélites</li>
            <li>Submarinos: Propulsión silenciosa</li>
          </ul>
        </Concept>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <div className="theory-subsection">
          <h3>🏠 Cogeneración residencial y micro-CHP</h3>
          <p>
            Motores Stirling alimentados por gas natural o biomasa pueden generar electricidad y calor doméstico con operación silenciosa. El ciclo, al ser de combustión externa, tolera combustibles diversos y mantiene bajas emisiones.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌞 Solar de concentración</h3>
          <p>
            Sistemas dish-Stirling concentran radiación solar en un receptor que alimenta el motor, convirtiendo calor en trabajo con alta eficiencia teórica.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>❄️ Criogenia</h3>
          <p>
            Refrigeradores Stirling inversos producen bajas temperaturas con alta estabilidad, usados en sensores y aplicaciones científicas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🛰️ Espacio</h3>
          <p>
            Sistemas de generación para satélites y sondas pueden usar fuentes térmicas externas para convertir energía con fiabilidad.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌊 Submarinos AIP</h3>
          <p>
            Motores Stirling AIP permiten propulsión independiente del aire con bajo ruido, adecuados para misiones de largo tiempo.
          </p>
        </div>
      </div>

      {/* Historia y curiosidades */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y evolución del Stirling
        </h2>
        <div className="theory-subsection">
          <h3>🧑‍🔧 Robert Stirling (1816)</h3>
          <p>
            Introducción del concepto de regeneración y motores de combustión externa como alternativa a máquinas de vapor.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔄 Regeneradores modernos</h3>
          <p>
            Materiales y geometrías avanzadas mejoran transferencia y reducen pérdidas, acercando el desempeño a límites teóricos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚙️ Implementaciones prácticas</h3>
          <p>
            Variantes alfa, beta y gamma adaptan el ciclo a diferentes configuraciones de pistones y desplazadores.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        <div className="theory-subsection">
          <h3>🧱 Matrices de regenerador</h3>
          <p>
            El material y la geometría del regenerador (mallas, espumas metálicas, cerámicos) determinan efectividad y caída de presión; optimizarlo es clave para el rendimiento.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔩 Holguras y fugas</h3>
          <p>
            Las fugas por holguras entre pistón y cilindro degradan la eficiencia; los sellos de bajo roce y tolerancias precisas son críticos.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🔥 Intercambiadores caliente/frío</h3>
          <p>
            Grandes áreas de transferencia y bajas pérdidas de carga son deseables, pero aumentan tamaño y coste; el diseño balancea rendimiento y compacidad.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>⚙️ Configuraciones α, β y γ</h3>
          <p>
            Cada configuración ofrece compromisos entre simplicidad mecánica, volumen muerto y facilidad de sellado; la elección depende de la aplicación.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>El ciclo Stirling combina dos isotermas y dos isocóricos con regeneración interna para alta eficiencia.</li>
          <li>Con regeneración perfecta, su eficiencia iguala la de Carnot: η = 1 - T_C/T_H.</li>
          <li>Aplicaciones abarcan cogeneración, solar de concentración, criogenia, espacio y AIP submarino.</li>
          <li>Ventajas: combustión externa, bajo ruido y bajas emisiones; desafíos: regeneradores efectivos y control térmico.</li>
          <li>La evolución en materiales y diseño ha mejorado su viabilidad en nichos específicos.</li>
        </ul>
      </div>
      </TheorySection>
    </>
  );
};

export default CicloStirlingTheory;
