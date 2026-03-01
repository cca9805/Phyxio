import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as ciclo_braytonDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ciclo Brayton",
  descripcion: "Ciclo termodinámico de turbinas de gas",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CicloBraytonTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Ciclo Brayton?">
        <Concept title="Definición">
          <p>
            El ciclo Brayton es el ciclo termodinámico ideal que modela el funcionamiento de las 
            turbinas de gas y motores a reacción. Es un ciclo abierto en la práctica, pero se analiza como ciclo 
            cerrado para simplificar.
          </p>

          <Important>
            <p>Las cuatro etapas del ciclo Brayton:</p>
            <ol>
              <li>Compresión adiabática (1→2): El compresor aumenta la presión del aire</li>
              <li>Combustión isobárica (2→3): Se añade calor a presión constante en la cámara de combustión</li>
              <li>Expansión adiabática (3→4): Los gases se expanden en la turbina produciendo trabajo</li>
              <li>Escape isobárico (4→1): Los gases se enfrían a presión constante (atmosférica)</li>
            </ol>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia del Ciclo Brayton">
        <Concept title="Fórmula de la Eficiencia">
          <p>
            La eficiencia del ciclo Brayton depende de la relación de presiones y del coeficiente adiabático:
          </p>

          <Formula 
            expression={String.raw`\eta_{Brayton} = 1 - \frac{1}{r_p^{(\gamma - 1)/\gamma}}`}
            description="Eficiencia del ciclo Brayton"
            calculatorId="ciclo_brayton-grupo-1"
            definitions={ciclo_braytonDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>η<sub>Brayton</sub>: Eficiencia del ciclo Brayton (adimensional)</li>
            <li>r<sub>p</sub>: Relación de presiones = P<sub>2</sub>/P<sub>1</sub> (adimensional)</li>
            <li>γ: Coeficiente adiabático ≈ 1.4 para aire (adimensional)</li>
          </ul>

          <p>Observaciones:</p>
          <ul>
            <li>Mayor relación de presiones → mayor eficiencia</li>
            <li>Turbinas típicas: r<sub>p</sub> = 10-40, η ≈ 40-60%</li>
            <li>Limitado por temperatura máxima de los materiales</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>⚡ Centrales eléctricas: ciclo simple y combinado</h3>
          <p>
            En ciclo simple, una turbina de gas genera electricidad con eficiencias típicas del 35-40% (r<sub>p</sub> 10-25, temperatura de entrada a turbina 1400-1700 K). Los gases de escape aún calientes permiten un ciclo combinado (Brayton + Rankine) con caldera de recuperación, elevando la eficiencia global al 60-62%. Mejoras: regenaración (recuperador) que precalienta el aire comprimido usando el escape, especialmente útil a cargas parciales; reheat (recalentamiento) para aumentar trabajo de turbina; intercooling entre etapas de compresión para reducir trabajo del compresor. El óptimo de r<sub>p</sub> depende de la temperatura máxima y del uso de regeneración: con recuperador, r<sub>p</sub> óptimo suele ser menor para maximizar el salto térmico en el recuperador.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✈️ Aviación: turbojet y turbofán</h3>
          <p>
            El núcleo Brayton (compresor-combustor-turbina) de un turbofán moderno opera con relaciones de presión globales 40-60 y temperaturas máximas controladas por refrigeración de álabes. La eficiencia del núcleo alcanza ~45-50% y, combinada con alta relación de derivación (bypass), produce propulsión eficiente. Innovaciones: materiales cerámicos compuestos (CMC), recubrimientos de barrera térmica, refrigeración por película y alabes monocristal. El control de estabilidad del compresor (surge/stall) se logra con álabes de estator variables y purgas; el diseño mantiene margen de bombeo suficiente en todo el sobre de operación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Microturbinas y cogeneración distribuida</h3>
          <p>
            Microturbinas de 30-200 kW (p. ej., Capstone C65) emplean recuperadores de alta eficacia para elevar el rendimiento eléctrico al 26-33% y, en esquemas de cogeneración, alcanzar eficiencias totales del 80-90% aprovechando calor de escape y del aceite de lubricación. Ventajas: bajas vibraciones, combustible flexible (gas natural, biogás) y mantenimiento reducido; desafíos: pérdidas de presión en el recuperador y menor rendimiento a pequeña escala.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚢 Compresión de gas natural y propulsión</h3>
          <p>
            Turbinas de gas accionan compresores centrífugos en gasoductos para mantener caudal y presión, ofreciendo alta confiabilidad y operación continua. En propulsión naval, ciclos Brayton compactos permiten alta densidad de potencia con respuesta rápida, adecuados para buques militares y ferries rápidos, a menudo en configuraciones combinadas con diésel (CODAG, COGAG) para optimizar consumo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Combustibles y bajas emisiones</h3>
          <p>
            La combustión seca de bajas emisiones (DLN/DLE) reduce NOx mediante mezcla pobre estabilizada, mientras que la inyección de vapor/agua puede reducir NOx y aumentar potencia a costa de complejidad. El uso de hidrógeno y amoníaco exige cámaras adaptadas por velocidad de llama y formación de NOx; el control preciso de mezcla y enfriamiento mantiene la integridad térmica y las emisiones dentro de norma.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: del motor de Brayton al turbofán moderno
        </h2>

        <div className="theory-subsection">
          <h3>🔧 George Brayton y los motores de combustión continua (1872)</h3>
          <p>
            George B. Brayton desarrolló motores de combustión continua a presión casi constante a finales del siglo XIX. Aunque primitivos y de baja presión, establecieron la idea de compresión → combustión a presión constante → expansión, base del ciclo que hoy lleva su nombre.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛩️ Whittle y von Ohain: nacimiento del jet (1930-1945)</h3>
          <p>
            Frank Whittle (Reino Unido) patentó en 1930 un turborreactor y voló en 1941; Hans von Ohain (Alemania) voló el He 178 en 1939. Ambos consolidaron el ciclo Brayton como corazón de la propulsión a chorro, impulsando avances en compresores axiales y cámaras de combustión.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏗️ Recuperación, reheat e intercooling (1950-1970)</h3>
          <p>
            La industria introdujo recuperadores para mejorar eficiencia a carga parcial, recalentamiento para aumentar trabajo específico e intercooling para reducir trabajo del compresor. Estas variantes optimizan según objetivo (potencia, eficiencia, tamaño) y siguen siendo relevantes en aplicaciones industriales y microturbinas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔥 Materiales y enfriamiento de álabes</h3>
          <p>
            La elevación de la temperatura de entrada a turbina se logró gracias a superaleaciones, álabes monocristal, recubrimientos de barrera térmica y enfriamiento interno/por película. Estas innovaciones permitieron mayores eficiencias y relaciones de presión, manteniendo la integridad estructural.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Auge del ciclo combinado (1990-presente)</h3>
          <p>
            La combinación Brayton+Rankine con calderas de recuperación y turbinas de vapor impulsó plantas de 400-800 MW con eficiencias del 60% o más. Récords como el 60.75% demuestran el potencial práctico cercano a límites termodinámicos con combustibles fósiles.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>📐 ¿Relación de presiones óptima?</h3>
          <p>
            Para una temperatura máxima dada, existe un r<sub>p</sub> óptimo que maximiza la eficiencia ideal; con regeneración, el óptimo se desplaza a valores más bajos para aprovechar mejor el recuperador. En la práctica, eficiencias de componentes y caídas de presión ajustan este óptimo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌀 Stall y surge del compresor</h3>
          <p>
            Los compresores axiales pueden entrar en inestabilidad (stall/surge) si la demanda de presión supera su mapa operativo. Álabes de estator variables, sangrados y control FADEC mantienen margen de estabilidad durante arranques, aceleraciones y cambios de altitud.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔁 Recuperadores: eficiencia vs pérdidas</h3>
          <p>
            Un recuperador eficaz puede elevar notablemente el rendimiento a cargas parciales, pero introduce pérdidas de presión. El beneficio neto depende del diseño de intercambiador y del punto de operación; por eso es común en microturbinas y raro en turbinas de aviación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💧 Inyección de agua/vapor</h3>
          <p>
            La inyección de agua o vapor reduce NOx y puede incrementar potencia al aumentar masa de flujo y enfriar el compresor, pero complica el balance térmico y el mantenimiento. Su adopción es específica de sitio y regulaciones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ Altitud y clima</h3>
          <p>
            A mayor altitud y temperatura ambiente, disminuye la densidad del aire y con ella el caudal másico: cae la potencia disponible y cambia el punto de operación del compresor. Sistemas de enfriamiento de aire de entrada (fogging, chillers) recuperan rendimiento en climas calurosos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧪 ¿Brayton o no?</h3>
          <p>
            Ciclos de CO₂ supercrítico y el ciclo Allam usan turbomáquinas pero difieren sustancialmente del Brayton aire-combustión abierta. Aunque comparten compresión, calentamiento y expansión, su termodinámica y objetivos son distintos.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El ciclo Brayton modela turbinas de gas: compresión adiabática, aporte de calor isobárico, expansión adiabática y rechazo isobárico. En la práctica, el aire entra desde la atmósfera y los gases salen al ambiente (ciclo abierto).
          </li>
          <li>
            La eficiencia ideal es η<sub>Brayton</sub> = 1 - 1/r<sub>p</sub><sup>(γ-1)/γ</sup>; aumenta con relación de presiones y temperatura máxima admisible. Componentes reales y caídas de presión reducen la eficiencia respecto al ideal.
          </li>
          <li>
            Tecnologías como regeneración, recalentamiento e intercooling permiten adaptar el ciclo a objetivos de eficiencia, potencia específica y respuesta dinámica, con compromisos en complejidad y pérdidas.
          </li>
          <li>
            Aplicaciones clave: ciclo combinado en generación eléctrica (η ≈ 60-62%), propulsión aérea (turbofanes) y microturbinas con cogeneración en edificios e industria.
          </li>
          <li>
            La evolución histórica —materiales avanzados, enfriamiento de álabes y control electrónico— ha permitido elevar temperaturas y relaciones de presión, acercando el desempeño práctico a límites termodinámicos.
          </li>
        </ul>
      </div>
    </>
  );
};

export default CicloBraytonTheory;
