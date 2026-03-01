import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as ciclo_rankineDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ciclo Rankine",
  descripcion: "Ciclo termodinámico de centrales térmicas de vapor",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CicloRankineTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Ciclo Rankine?">
        <Concept title="Definición">
          <p>
            El ciclo Rankine es el ciclo termodinámico ideal que modela el funcionamiento de las 
            centrales térmicas de vapor. Es el ciclo más utilizado para la generación de electricidad a gran escala.
          </p>

          <Important>
            <p>Las cuatro etapas del ciclo Rankine:</p>
            <ol>
              <li>Compresión isentrópica (1→2): La bomba aumenta la presión del líquido</li>
              <li>Calentamiento isobárico (2→3): La caldera convierte el líquido en vapor a P constante</li>
              <li>Expansión isentrópica (3→4): El vapor se expande en la turbina produciendo trabajo</li>
              <li>Condensación isobárica (4→1): El condensador convierte el vapor en líquido a P constante</li>
            </ol>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia del Ciclo Rankine">
        <Concept title="Fórmula de la Eficiencia">
          <p>
            La eficiencia del ciclo Rankine se calcula como la relación entre el trabajo neto y el calor de entrada:
          </p>

          <Formula 
            expression={String.raw`\eta_{Rankine} = \frac{W_{turbina} - W_{bomba}}{Q_{entrada}}`}
            description="Eficiencia del ciclo Rankine"
            calculatorId="ciclo_rankine-grupo-1"
            definitions={ciclo_rankineDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>η<sub>Rankine</sub>: Eficiencia del ciclo Rankine (adimensional)</li>
            <li>W<sub>turbina</sub>: Trabajo producido por la turbina (J)</li>
            <li>W<sub>bomba</sub>: Trabajo consumido por la bomba (J)</li>
            <li>Q<sub>entrada</sub>: Calor suministrado en la caldera (J)</li>
          </ul>

          <p>Observaciones:</p>
          <ul>
            <li>Centrales térmicas típicas: η ≈ 35-45%</li>
            <li>Con recalentamiento y regeneración: η ≈ 40-50%</li>
            <li>Limitado por temperatura de condensación y presión máxima</li>
          </ul>
        </Concept>
      </TheorySection>
      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>⚡ Centrales de carbón: súper y ultra-supercríticas</h3>
          <p>
            Plantas modernas operan a 250-300 bar y 600-620°C con eficiencias del 45-48%. El control de humedad en etapas bajas de la turbina y la selección de materiales críticos reducen erosión y pérdidas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>☢️ Centrales nucleares</h3>
          <p>
            El calor de fisión calienta agua/vapor en lazo primario/secundario. Por límites de temperatura del reactor, eficiencias típicas ~33-37% y fuerte énfasis en regeneración y recalentamiento para optimizar el ciclo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌋 Geotermia y solar térmica</h3>
          <p>
            Ciclos Rankine orgánicos (ORC) aprovechan fuentes de baja/mediana temperatura con fluidos orgánicos. Plantas CSP (concentración solar) usan sales fundidas como almacenamiento térmico para operación nocturna.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔁 Mejoras: regeneración, recalentamiento, sobrecalentamiento</h3>
          <p>
            La extracción de vapor a múltiplos puntos (regeneración) precalienta agua de alimentación. Recalentamiento intermedio reduce humedad en últimas etapas. Sobrecalentamiento eleva la temperatura de entrada a turbina, aumentando trabajo específico.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔗 Ciclo combinado (Brayton + Rankine)</h3>
          <p>
            Gases de escape de una turbina de gas generan vapor para un ciclo Rankine secundario, elevando la eficiencia global al 60-62% en plantas modernas.
          </p>
        </div>
      </div>

      {/* Historia y curiosidades */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y evolución del Rankine
        </h2>
        <div className="theory-subsection">
          <h3>🧪 William Rankine y la formalización (1850s)</h3>
          <p>
            Rankine contribuyó a la termodinámica aplicada y la teoría de vapor, formalizando análisis de ciclos de vapor que guiaron diseño de calderas y turbinas.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌀 De motores alternativos a turbinas</h3>
          <p>
            La transición a turbinas de vapor multietapa permitió mayores potencias y eficiencias, habilitada por avances en materiales, sellos y control.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>♨️ Almacenamiento térmico y ciclo combinado</h3>
          <p>
            El almacenamiento en sales fundidas y la integración con ciclos Brayton elevaron flexibilidad y rendimiento de plantas térmicas modernas.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>💧 Humedad en últimas etapas</h3>
          <p>
            El contenido de humedad en las últimas etapas de la turbina debe limitarse para evitar erosión en álabes; el recalentamiento intermedio reduce esta humedad y mejora eficiencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📈 Diagrama h–s (Mollier)</h3>
          <p>
            El análisis práctico del Rankine se realiza en el diagrama h–s, facilitando estimar trabajo, calor y estados con tablas/propiedades del agua-vapor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧊 Condensador y vacío</h3>
          <p>
            Operar con vacío profundo en el condensador aumenta el salto de entalpía, pero requiere buen vacío, control de aire disuelto y grandes intercambiadores.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔁 Regeneración por extracciones</h3>
          <p>
            Las extracciones de vapor a múltiples presiones precalientan el agua de alimentación y elevan la eficiencia, con un punto óptimo entre número de calentadores y complejidad/pérdidas.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El ciclo Rankine usa bomba, caldera, turbina y condensador con procesos isentrópicos en máquina y isobáricos en intercambio térmico.
          </li>
          <li>
            La eficiencia práctica depende de humedad en turbina, temperatura de condensación y sobrecalentamiento. Mejoras de regeneración y recalentamiento elevan rendimiento.
          </li>
          <li>
            Aplicaciones incluyen carbón, nuclear, geotermia y solar térmica; los ciclos ORC permiten aprovechar fuentes de menor temperatura.
          </li>
          <li>
            La integración Brayton+Rankine en ciclo combinado alcanza eficiencias ~60-62% usando gases de escape para generación de vapor.
          </li>
          <li>
            Evolución histórica y avances en materiales y almacenamiento térmico han acercado operación real a límites termodinámicos.
          </li>
        </ul>
      </div>
    </>
  );
};

export default CicloRankineTheory;
