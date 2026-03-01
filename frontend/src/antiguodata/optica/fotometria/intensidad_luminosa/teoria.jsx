import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions';

export const metadata = {
  titulo: "Intensidad Luminosa",
  descripcion: "Medida de la potencia luminosa emitida en una dirección específica por unidad de ángulo sólido. Magnitud fundamental del Sistema Internacional.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const IntensidadLuminosaTeoria = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Intensidad Luminosa?">
        <p>
          La intensidad luminosa es una magnitud fotométrica que mide la potencia luminosa emitida por una fuente en una dirección particular por unidad de ángulo sólido. Es una de las siete magnitudes fundamentales del Sistema Internacional.
        </p>
      </TheorySection>

      <TheorySection title="Unidad: La Candela (cd)">
        <Concept title="Definición">
          <p>
            La candela es la intensidad luminosa, en una dirección dada, de una fuente que emite radiación monocromática de frecuencia 540×10¹² Hz (luz verde-amarilla, 555 nm) y cuya intensidad energética en esa dirección es 1/683 watt por estereorradián.
          </p>
          <ul>
            <li>Símbolo: cd</li>
            <li>Frecuencia de referencia: 540 THz (máxima sensibilidad del ojo humano)</li>
            <li>Factor de conversión: 683 lm/W</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Ángulo Sólido">
        <Concept title="Estereorradián (sr)">
          <p>
            El estereorradián es la unidad de ángulo sólido. Un estereorradián es el ángulo sólido que, con vértice en el centro de una esfera, intercepta un área igual al cuadrado del radio.
          </p>
          <Formula 
            calculatorId='angulo-solido'
            expression={String.raw`\Omega = \frac{A}{r^2}`}
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>Ω: Ángulo sólido (sr)</li>
            <li>A: Área interceptada (m²)</li>
            <li>r: Radio de la esfera (m)</li>
          </ul>
          <Important>
            Una esfera completa subtiende 4π estereorradianes (~12.57 sr).
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Intensidad Luminosa">
        <Concept title="Definición Matemática">
          <Formula 
            expression={String.raw`I = \frac{d\Phi}{d\Omega}`}
            calculatorId="intensidad-luminosa"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>I: Intensidad luminosa (cd)</li>
            <li>dΦ: Flujo luminoso (lm)</li>
            <li>dΩ: Ángulo sólido (sr)</li>
          </ul>
        </Concept>

        <Concept title="Fuente Puntual Isotrópica">
          <p>
            Para una fuente que emite uniformemente en todas direcciones:
          </p>
          <Important>Fórmula derivada (sin calculadora):</Important>
          <Formula 
            expression={String.raw`I = \frac{\Phi}{4\pi}`}
          />
          <p>
            Ejemplo: Si la fuente emite 1000 lúmenes uniformemente, su intensidad es ~79.6 cd.
          </p>
        </Concept>

        <Concept title="Relación Flujo-Intensidad">
          <p>
            Para calcular el flujo luminoso emitido en un ángulo sólido determinado:
          </p>
          <Formula 
            expression={String.raw`\Phi = I \times \Omega`}
            calculatorId="flujo-desde-intensidad"
            definitions={definitions}
            exercises={exercises}
          />
          <p>Donde:</p>
          <ul>
            <li>Φ: Flujo luminoso (lm)</li>
            <li>I: Intensidad luminosa (cd)</li>
            <li>Ω: Ángulo sólido (sr)</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Diagrama Polar de Intensidad">
        <Concept title="Representación">
          <p>
            El diagrama polar muestra cómo varía la intensidad luminosa con la dirección. Es fundamental para caracterizar luminarias.
          </p>
          <ul>
            <li>Fuente isotrópica: Círculo perfecto</li>
            <li>Reflector direccional: Lóbulo estrecho</li>
            <li>Lámpara fluorescente: Patrón en forma de 8</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Valores Típicos">
        <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
          <thead>
            <tr style={{borderBottom: '2px solid #ddd'}}>
              <th style={{padding: '0.5rem', textAlign: 'left'}}>Fuente</th>
              <th style={{padding: '0.5rem', textAlign: 'left'}}>Intensidad (cd)</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Vela</td>
              <td style={{padding: '0.5rem'}}>~1 cd</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Bombilla incandescente 60W</td>
              <td style={{padding: '0.5rem'}}>~60 cd</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>LED de alta potencia</td>
              <td style={{padding: '0.5rem'}}>100-1000 cd</td>
            </tr>
            <tr style={{borderBottom: '1px solid #ddd'}}>
              <td style={{padding: '0.5rem'}}>Faro de automóvil</td>
              <td style={{padding: '0.5rem'}}>~100,000 cd</td>
            </tr>
          </tbody>
        </table>
      </TheorySection>

      {/* Bloques finales en orden: Aplicaciones → Historia → Anécdotas → Resumen */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚦 Señalización vial y aérea</h3>
          <p>
            Los semáforos, señales de tráfico iluminadas y balizas de aeropuertos especifican su intensidad luminosa en candelas para garantizar visibilidad a distancias específicas. Una señal de tráfico debe tener al menos 100 cd en la dirección de los conductores, mientras que las luces de pista de aeropuertos alcanzan miles de candelas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Faros de automóviles</h3>
          <p>
            La intensidad luminosa de los faros está regulada por normativas internacionales. Los faros de cruce deben tener unos 10,000 cd en el centro del haz, mientras que las luces largas alcanzan 100,000 cd o más. El diseño óptico concentra la luz en direcciones específicas para maximizar la visibilidad sin deslumbrar a otros conductores.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📺 Pantallas y proyectores</h3>
          <p>
            El brillo de monitores y proyectores se especifica frecuentemente en candelas por metro cuadrado (cd/m² o "nits"). Un monitor de oficina típico tiene 200-300 nits, mientras que los smartphones modernos alcanzan 1000 nits para ser legibles bajo luz solar directa. Los proyectores de cine IMAX pueden superar los 10,000 nits en el centro de la pantalla.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⛓️ Luces de emergencia y navegación</h3>
          <p>
            Las luces de emergencia de edificios y las luces de navegación marítima deben tener intensidades mínimas certificadas. Un faro marítimo puede tener millones de candelas para ser visible a 30+ km de distancia. Las luces estroboscópicas de emergencia de aviones alcanzan cientos de miles de candelas durante sus destellos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎭 Iluminación escénica y fotografía</h3>
          <p>
            Los focos teatrales y de estudio se seleccionan por su intensidad luminosa en la dirección del sujeto. Un foco Fresnel de 2kW puede producir 500,000 cd en el centro del haz. Los fotógrafos profesionales usan fotometrías que miden candelas para controlar el contraste y la iluminación direccional.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: De la vela a la candela
        </h2>
        
        <div className="theory-subsection">
          <h3>🕯️ La candela histórica (siglo XVII)</h3>
          <p>
            El término "candela" proviene del latín y originalmente significaba "vela". En el siglo XVII, la intensidad luminosa se medía literalmente con velas de cera de ballena de peso y tamaño estandarizados. Una "candlepower" (potencia de vela) era la luz emitida por una vela estándar en una dirección horizontal.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💡 Bougie, Hefner, Violle (1860-1920)</h3>
          <p>
            Diferentes países desarrollaron estándares propios: Francia usó la "bougie décimale" (basada en aceite de colza), Alemania la "Hefnerkerze" (lámpara de pentano), y Francia después adoptó la "bougie Violle" (platino fundido). Esta proliferación de unidades incompatibles motivó la necesidad de un estándar internacional.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚖️ La candela internacional (1948)</h3>
          <p>
            La IX Conferencia General de Pesas y Medidas (CGPM) estableció la candela como una de las unidades básicas del SI, definiéndola por la luz emitida por 1/60 cm² de un cuerpo negro a la temperatura de solidificación del platino (2042 K). Era reproducible en laboratorios pero extremadamente compleja de implementar.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Redefinición moderna (1979)</h3>
          <p>
            La XVI CGPM redefinió la candela usando radiación monocromática de 540 THz (555 nm, verde-amarillo) con una eficacia luminosa espectral de exactamente 683 lm/W. Esta definición vinculó la fotometría con la radiometría y el watt, permitiéndola basar en constantes físicas fundamentales en lugar de objetos físicos.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🌟 La candela es la única con nombre de objeto</h3>
          <p>
            De las siete unidades básicas del SI (metro, kilogramo, segundo, ampere, kelvin, mol, candela), la candela es la única cuyo nombre aún hace referencia directa al objeto histórico usado para medirla: una vela. Aunque su definición moderna no involucra velas, el nombre se preservó por tradición.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>👁️ 555 nm: el "color mágico" del ojo</h3>
          <p>
            La definición de la candela usa 540 THz (555 nm) porque es la longitud de onda donde el ojo humano es más sensible en condiciones diurnas. Si dos fuentes emiten la misma potencia radiante (vatios), pero una es verde (555 nm) y otra roja (700 nm), la verde se verá aproximadamente 10 veces más brillante. La biología del ojo determina la definición física.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔦 Láseres: la paradoja de la intensidad</h3>
          <p>
            Un puntero láser de 5 mW puede tener una intensidad luminosa de millones de candelas en la dirección del haz, pero su flujo luminoso total es menor a 1 lumen. Esto ocurre porque concentra toda su energía en un ángulo sólido extremadamente pequeño (~10⁻⁶ sr). En contraste, una bombilla de 100 lm distribuye su luz en 4π sr, resultando en solo ~8 cd.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎆 Las explosiones más brillantes</h3>
          <p>
            Los flashes de fotos de estudio pueden alcanzar intensidades momentáneas de decenas de millones de candelas durante fracciones de segundo. Sin embargo, la intensidad luminosa continua más alta jamás creada fue en laboratorios de fusión nuclear, donde láseres de alta potencia concentran brevemente billones de candelas en objetivos minúsculos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌙 De día a noche: cambio de 10¹⁰</h3>
          <p>
            La intensidad luminosa del Sol vista desde la Tierra es aproximadamente 1.6×10⁵ cd. En comparación, la Luna llena tiene solo ~2,500 cd aparente. Sin embargo, el ojo humano puede adaptarse a este rango de intensidades de 10¹⁰ (10 mil millones) entre el día más brillante y la noche más oscura. Nuestro sistema visual es un detector extraordinario.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            La intensidad luminosa (I) mide la potencia luminosa emitida en una dirección específica por unidad de ángulo sólido.
          </li>
          <li>
            La unidad es la candela (cd), una de las siete magnitudes fundamentales del SI.
          </li>
          <li>
            Definida a 540 THz (555 nm, máxima sensibilidad del ojo) con factor 683 lm/W.
          </li>
          <li>
            El ángulo sólido se mide en estereorradianes (sr): Ω = A/r².
          </li>
          <li>
            Relación con flujo luminoso: Φ = ∫ I dΩ; para fuente isotrópica: Φ = 4πI.
          </li>
        </ul>
      </div>
    </>
  );
};

export default IntensidadLuminosaTeoria;
