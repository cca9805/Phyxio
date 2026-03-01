import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as ciclo_dieselDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Ciclo Diesel",
  descripcion: "Ciclo termodinámico de motores de combustión por compresión",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const CicloDieselTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es el Ciclo Diesel?">
        <Concept title="Definición">
          <p>
            El ciclo Diesel es el ciclo termodinámico ideal que modela el funcionamiento de los 
            motores de combustión interna de encendido por compresión (motores diésel). Fue desarrollado por 
            Rudolf Diesel en 1892.
          </p>

          <Important>
            <p>Las cuatro etapas del ciclo Diesel:</p>
            <ol>
              <li>Compresión adiabática (1→2): El pistón comprime solo aire a alta presión</li>
              <li>Combustión isobárica (2→3): Se inyecta combustible que se autoenciende, P constante</li>
              <li>Expansión adiabática (3→4): Los gases calientes empujan el pistón (carrera de potencia)</li>
              <li>Escape isocórico (4→1): Se abre la válvula, disminuye P a V constante</li>
            </ol>
          </Important>
        </Concept>

        <Concept title="Diferencia con el Ciclo Otto">
          <ul>
            <li>Otto: Combustión a volumen constante (isocórica)</li>
            <li>Diesel: Combustión a presión constante (isobárica)</li>
            <li>Otto: Enciende con chispa</li>
            <li>Diesel: Autoencendido por alta temperatura de compresión</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Eficiencia del Ciclo Diesel">
        <Concept title="Fórmula de la Eficiencia">
          <p>
            La eficiencia del ciclo Diesel depende de la relación de compresión, la relación de corte y el coeficiente adiabático:
          </p>

          <Formula 
            expression={String.raw`\eta_{Diesel} = 1 - \frac{1}{r^{\gamma - 1}} \cdot \frac{r_c^{\gamma} - 1}{\gamma(r_c - 1)}`}
            description="Eficiencia del ciclo Diesel"
            calculatorId="ciclo_diesel-grupo-1"
            definitions={ciclo_dieselDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>η<sub>Diesel</sub>: Eficiencia del ciclo Diesel (adimensional)</li>
            <li>r: Relación de compresión = V<sub>max</sub>/V<sub>min</sub> (adimensional)</li>
            <li>r<sub>c</sub>: Relación de corte = V<sub>3</sub>/V<sub>2</sub> (expansión durante combustión)</li>
            <li>γ: Coeficiente adiabático ≈ 1.4 para aire (adimensional)</li>
          </ul>

          <p>Observaciones:</p>
          <ul>
            <li>Mayor relación de compresión → mayor eficiencia</li>
            <li>Motores Diesel típicos: r = 14-24, η ≈ 60-65%</li>
            <li>Más eficiente que Otto debido a mayor relación de compresión</li>
          </ul>
        </Concept>
      </TheorySection>
      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>

        <div className="theory-subsection">
          <h3>🚚 Vehículos pesados y maquinaria</h3>
          <p>
            Los motores diésel dominan camiones, autobuses y maquinaria por su alto torque a bajas revoluciones y eficiencia superior. Relaciones de compresión típicas r = 16-22 y turboalimentación con intercooler permiten potencias altas con consumos reducidos. Sistemas common-rail de inyección directa (1800-2500 bar) controlan con precisión la pulverización y el momento de inyección, mejorando la combustión y reduciendo emisiones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚓ Motores marinos de dos tiempos</h3>
          <p>
            En barcos de gran porte, motores diésel de dos tiempos y baja velocidad alcanzan eficiencias termodinámicas del 50-54%, con grandes relaciones de compresión y expansión completa. La inyección de combustible pesado y la recuperación de calor de gases de escape maximizan el rendimiento en travesías prolongadas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔌 Generación eléctrica y cogeneración</h3>
          <p>
            En centrales de respaldo y sitios remotos, grupos electrógenos diésel ofrecen arranque rápido y fiabilidad. En cogeneración, el calor del refrigerante y los gases de escape se aprovecha para calefacción y procesos, elevando la eficiencia total al 80-90%.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚆 Tracción ferroviaria</h3>
          <p>
            Locomotoras diésel-eléctricas combinan un motor diésel con generadores y motores de tracción, optimizando el punto de operación del motor y el control de esfuerzo, especialmente en rutas sin electrificación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🛠️ Emisiones y post-tratamiento</h3>
          <p>
            Tecnologías de post-tratamiento (EGR, catalizadores de oxidación, filtros de partículas, SCR con urea) cumplen normativas Euro VI/Tier 4, reduciendo NOx y PM significativamente. La calibración precisa equilibra eficiencia, emisiones y confiabilidad.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: del prototipo de Diesel al common-rail
        </h2>

        <div className="theory-subsection">
          <h3>🔥 Rudolf Diesel (1892-1897)</h3>
          <p>
            Diesel conceptualizó el ciclo con autoencendido por compresión y desarrolló prototipos que culminaron en 1897 con un motor de 20 HP y eficiencia récord (~26%). Su visión de alta eficiencia desplazó a motores de chispa en aplicaciones industriales.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧪 Inyección y atomización del combustible</h3>
          <p>
            La evolución de sistemas de inyección (bomba lineal, inyector unitario, common-rail) elevó presiones y control, mejorando mezcla y reduciendo humo. El diseño de cámaras de combustión (torbellino, pistón bowl) optimiza turbulencia y llama.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌀 Turboalimentación e intercooler</h3>
          <p>
            La recuperación de energía del escape mediante turbocompresores elevó densidad de potencia y eficiencia. Intercoolers reducen temperatura del aire comprimido, aumentando masa específica y mitigan NOx.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>♻️ Emisiones y normativas modernas</h3>
          <p>
            Normativas crecientes forzaron EGR, DOC, DPF y SCR, transformando la arquitectura del motor. La integración electrónica (ECU) permite estrategias sofisticadas de control para cumplir emisiones sin sacrificar desempeño.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🔍 Relación de corte r_c: impacto en eficiencia</h3>
          <p>
            r<sub>c</sub> mide cuánto se expande el gas durante la combustión a presión casi constante. Valores menores de r<sub>c</sub> (combustión más corta) aumentan la eficiencia ideal; en motores reales, la inyección y la cinética de combustión determinan r<sub>c</sub> efectivo.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧯 Autoencendido y calidad del combustible</h3>
          <p>
            El índice de cetano caracteriza facilidad de autoencendido: mayor cetano reduce retraso de ignición, suaviza combustión y puede mejorar eficiencia. Aditivos y formulaciones estacionales ajustan propiedades para climas fríos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ Torque a bajas RPM</h3>
          <p>
            La alta relación de compresión y la combustión a presión casi constante proporcionan gran torque a bajas RPM, ideal para carga pesada y tracción. Turbocompresores de geometría variable amplían el rango útil de par.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧼 Post-tratamiento y urea (AdBlue)</h3>
          <p>
            El sistema SCR inyecta urea (AdBlue) en el escape para reducir NOx a N₂ y H₂O en un catalizador. El consumo de urea típico es ~3-5% del combustible; una dosificación incorrecta aumenta emisiones o consume en exceso.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧭 Motores dual-fuel y futuro</h3>
          <p>
            Motores diésel marinos dual-fuel usan gas natural (LNG) con piloto diésel, reduciendo emisiones; el amoníaco y el hidrógeno emergen como opciones con retos de combustión y materiales.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            El ciclo Diesel ideal difiere del Otto por el aporte de calor a presión constante (isobárico) y el autoencendido por compresión. Sus etapas: compresión adiabática, combustión isobárica, expansión adiabática y escape isocórico.
          </li>
          <li>
            La eficiencia ideal depende de la relación de compresión r, la relación de corte r<sub>c</sub> y el coeficiente adiabático γ: η<sub>Diesel</sub> = 1 - r<sup>-(γ-1)</sup> · (r<sub>c</sub><sup>γ</sup> - 1)/[γ(r<sub>c</sub> - 1)]. Mayor r y menor r<sub>c</sub> mejoran la eficiencia.
          </li>
          <li>
            Aplicaciones clave: transporte pesado, marina, generación eléctrica y ferrocarril. La turboalimentación, el common-rail y el post-tratamiento permiten combinar eficiencia alta con bajas emisiones.
          </li>
          <li>
            Consideraciones prácticas: calidad de combustible (cetano), control de inyección y estrategias de emisiones (EGR, SCR, DPF) determinan desempeño real.
          </li>
          <li>
            Tendencias: motores dual-fuel y alternativas bajas en carbono plantean evoluciones del concepto Diesel manteniendo ventajas de eficiencia y par.
          </li>
        </ul>
      </div>
    </>
  );
};

export default CicloDieselTheory;
