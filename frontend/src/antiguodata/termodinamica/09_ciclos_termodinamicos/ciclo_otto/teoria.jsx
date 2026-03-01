import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as ciclo_ottoDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ciclo Otto",
  descripcion: "Ciclo termodinámico de motores de gasolina",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CicloOttoTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Ciclo Otto?">
        <Concept title="Definición">
          <p>
            El ciclo Otto es el ciclo termodinámico ideal que modela el funcionamiento de los 
            motores de combustión interna de encendido por chispa (motores de gasolina). Fue desarrollado por 
            Nikolaus Otto en 1876.
          </p>

          <Important>
            <p>Las cuatro etapas del ciclo Otto:</p>
            <ol>
              <li>Compresión adiabática (1→2): El pistón comprime la mezcla aire-combustible</li>
              <li>Combustión isocórica (2→3): La chispa enciende la mezcla, aumenta P y T a V constante</li>
              <li>Expansión adiabática (3→4): Los gases calientes empujan el pistón (carrera de potencia)</li>
              <li>Escape isocórico (4→1): Se abre la válvula, disminuye P y T a V constante</li>
            </ol>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia del Ciclo Otto">
        <Concept title="Fórmula de la Eficiencia">
          <p>
            La eficiencia del ciclo Otto depende únicamente de la relación de compresión y del coeficiente adiabático:
          </p>

          <Formula 
            expression={String.raw`\eta_{Otto} = 1 - \frac{1}{r^{\gamma - 1}}`}
            description="Eficiencia del ciclo Otto"
            calculatorId="ciclo_otto-grupo-1"
            definitions={ciclo_ottoDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>η<sub>Otto</sub>: Eficiencia del ciclo Otto (adimensional)</li>
            <li>r: Relación de compresión = V<sub>max</sub>/V<sub>min</sub> (adimensional)</li>
            <li>γ: Coeficiente adiabático = C<sub>p</sub>/C<sub>v</sub> ≈ 1.4 para aire (adimensional)</li>
          </ul>

          <p>Observaciones:</p>
          <ul>
            <li>Mayor relación de compresión → mayor eficiencia</li>
            <li>Motores típicos: r = 8-12, η ≈ 50-60%</li>
            <li>Limitado por autoignición (detonación)</li>
          </ul>
        </Concept>

        <Concept title="Relación de Compresión">
          <Formula 
            expression={String.raw`r = \frac{V_{max}}{V_{min}}`}
            description="Relación de compresión"
            calculatorId="ciclo_otto-grupo-1"
            definitions={ciclo_ottoDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>r: Relación de compresión (adimensional)</li>
            <li>V<sub>max</sub>: Volumen máximo del cilindro (punto muerto inferior)</li>
            <li>V<sub>min</sub>: Volumen mínimo del cilindro (punto muerto superior)</li>
          </ul>
        </Concept>
      </TheorySection>
      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>🚗 Motores de gasolina en automóviles</h3>
          <p>
            Motores de 4 tiempos con inyección directa, turbocompresores y distribución variable alcanzan eficiencias indicadas altas, aunque la eficiencia global permanece menor que Diesel por límites de compresión (detonación) y pérdidas de bombeo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏍️ Motocicletas y pequeños motores</h3>
          <p>
            Motores ligeros priorizan respuesta y alta velocidad de rotación; el ciclo Otto domina por simplicidad y bajo costo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔧 Herramientas y generadores</h3>
          <p>
            Pequeños generadores y herramientas usan motores Otto por coste y mantenimiento sencillo, con mezclas ricas para estabilidad.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧪 Mejoras modernas</h3>
          <p>
            Atkinson/Miller (válvulas) reducen compresión efectiva para mejorar eficiencia; encendido por plasma y prechamber mejoran combustión; híbridos combinan el Otto con electrificación para elevar rendimiento en ciclo urbano.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: de Nikolaus Otto a la era turbo
        </h2>
        <div className="theory-subsection">
          <h3>🔧 Nikolaus Otto (1876)</h3>
          <p>
            Desarrollo del ciclo de chispa con mezcla aire-combustible y carburación temprana.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>🌀 Turbo y inyección directa</h3>
          <p>
            La turboalimentación y la inyección directa elevan densidad de potencia y control de combustión, mitigando detonación con gestión electrónica.
          </p>
        </div>
        <div className="theory-subsection">
          <h3>♻️ Hibridación y ciclos Atkinson/Miller</h3>
          <p>
            La hibridación aprovecha eficiencia del ciclo en zonas óptimas, mientras estrategias de válvulas modifican compresión/expansión para mejorar consumo.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>⛽ Índice de octano y detonación</h3>
          <p>
            El índice de octano mide la resistencia a la autoignición. Combustibles de mayor octanaje permiten relaciones de compresión y avance de encendido más agresivos sin knock, elevando eficiencia y potencia.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧠 Control lambda y catalizador TWC</h3>
          <p>
            Mantener λ≈1 permite que el catalizador de tres vías reduzca simultáneamente CO, HC y NOx. Lazos cerrados con sonda lambda ajustan mezcla y aseguran bajas emisiones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Atkinson/Miller: eficiencia vs potencia</h3>
          <p>
            Modificar tiempos de válvula reduce compresión efectiva y aumenta expansión, mejorando eficiencia a costa de potencia específica; común en híbridos para consumo bajo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ Temperatura y preencendido</h3>
          <p>
            Altas temperaturas de cámara favorecen preencendido y detonación. Enfriamiento efectivo, inyección directa y EGR moderado ayudan a controlar picos térmicos.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El ciclo Otto ideal aporta calor a volumen constante y retira calor también isocóricamente, con compresión y expansión adiabáticas.
          </li>
          <li>
            La eficiencia ideal es η<sub>Otto</sub> = 1 - r<sup>-(γ-1)</sup>; aumenta con la relación de compresión y el γ del gas.
          </li>
          <li>
            Limitaciones prácticas: detonación y pérdidas de bombeo restringen r y la eficiencia real respecto al ideal.
          </li>
          <li>
            Aplicaciones: automoción, motocicletas y equipos pequeños; mejoras modernas incluyen turbo, inyección directa y electrificación híbrida.
          </li>
          <li>
            La evolución tecnológica ha mantenido relevancia del ciclo Otto optimizando combustión y control electrónico.
          </li>
        </ul>
      </div>
    </>
  );
};

export default CicloOttoTheory;
