import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as conveccionDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Convección",
  descripcion: "Transferencia de calor por movimiento de un fluido.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ConveccionTheory = ({ exercises }) => {
  return (
    <>
      {/* Título e introducción */}
      <div className="theory-title-section">
        <h1>Convección</h1>
        <p>
          La <strong>convección</strong> es uno de los tres mecanismos principales de transferencia de calor (junto con la conducción y la radiación). Consiste en el transporte de energía térmica a través del movimiento de un fluido, ya sea líquido o gas. Este proceso es fundamental en numerosos fenómenos naturales e industriales, desde la climatización de edificios hasta la formación de nubes y corrientes oceánicas.
        </p>
      </div>

      {/* Teoría del tema */}
      <div className="theory-main-section">
        <h2>Teoría de la convección</h2>
        <p>
          En la convección, el calor se transfiere por el movimiento de las partículas del fluido. Puede clasificarse en:
        </p>
        <ul>
          <li><strong>Convección natural:</strong> El movimiento del fluido es causado por diferencias de densidad debidas a gradientes de temperatura.</li>
          <li><strong>Convección forzada:</strong> El movimiento es inducido por medios externos como ventiladores o bombas.</li>
        </ul>
        <p>
          La eficiencia de la transferencia de calor por convección depende de factores como el tipo de fluido, la velocidad del flujo, la geometría del sistema y la diferencia de temperatura entre la superficie y el fluido.
        </p>
      </div>

      {/* Fórmulas principales */}
      <div className="theory-formulas-section">
        <h2>Fórmulas fundamentales de la convección</h2>

        {/* Ley de Newton del Enfriamiento */}
        <div className="theory-formula-block">
          <h3>Ley de Newton del Enfriamiento</h3>
          <p>
            La cantidad de calor transferido por convección entre una superficie y un fluido se calcula mediante:
          </p>
          <Formula 
            expression={String.raw`Q = hA(T_s - T_\infty)`}
            description="Ley de Newton del enfriamiento"
            calculatorId="conveccion-grupo-1"
            definitions={conveccionDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>Q:</strong> Flujo de calor (W)</li>
            <li><strong>h:</strong> Coeficiente de convección (W/(m²·K))</li>
            <li><strong>A:</strong> Área de transferencia (m²)</li>
            <li><strong>T_s:</strong> Temperatura de superficie (K)</li>
            <li><strong>T_∞:</strong> Temperatura del fluido (K)</li>
          </ul>
          <p>
            <strong>Valores típicos de h:</strong>
          </p>
          <ul>
            <li>Convección natural en aire: 5-25 W/(m²·K)</li>
            <li>Convección forzada en aire: 25-250 W/(m²·K)</li>
            <li>Convección forzada en agua: 100-20000 W/(m²·K)</li>
          </ul>
        </div>

        {/* Resistencia térmica por convección */}
        <div className="theory-formula-block">
          <h3>Resistencia térmica por convección</h3>
          <p>
            La resistencia térmica asociada a la convección se expresa como:
          </p>
          <Formula 
            expression={String.raw`R_{conv} = \frac{1}{hA}`}
            description="Resistencia térmica por convección"
            calculatorId="conveccion-grupo-2"
            definitions={conveccionDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>R_conv:</strong> Resistencia térmica (K/W)</li>
            <li><strong>h:</strong> Coeficiente de convección (W/(m²·K))</li>
            <li><strong>A:</strong> Área (m²)</li>
          </ul>
        </div>
      </div>

      {/* Sección de Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real
        </h2>
        <ul>
          <li>Diseño de sistemas de climatización y ventilación.</li>
          <li>Enfriamiento de componentes electrónicos y motores.</li>
          <li>Procesos industriales como secado y pasteurización.</li>
          <li>Estudio de fenómenos meteorológicos y oceanográficos.</li>
        </ul>
      </div>

      {/* Sección de Historia */}
      <div className="theory-history-section">
        <h2>
          <span role="img" aria-label="historia">📜</span> Historia de la convección
        </h2>
        <p>El estudio formal de la convección comenzó en el siglo XIX con investigaciones sobre transferencia de calor en fluidos. La ley de enfriamiento de Newton fue uno de los primeros modelos matemáticos para describir este fenómeno.</p>
      </div>

      {/* Sección de Anécdotas y Curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span role="img" aria-label="curiosidades">✨</span> Anécdotas y curiosidades
        </h2>
        <ul>
          <li>El fenómeno de convección es el responsable de la formación de nubes y corrientes oceánicas.</li>
          <li>En la cocina, la convección explica por qué el aire caliente circula en un horno de convección y cocina los alimentos de manera uniforme.</li>
          <li>Los radiadores de calefacción aprovechan la convección natural para distribuir el calor en una habitación.</li>
        </ul>
      </div>

      {/* Sección de Resumen */}
      <div className="formula-card">
        <h3>Resumen</h3>
        <p>
          La convección combina movimiento de fluidos y transferencia térmica; su modelado incluye tanto efectos de convección natural como forzada y es crítico para dimensionar sistemas de climatización y transporte de calor en fluidos.
        </p>
      </div>
    </>
  );
};

export default ConveccionTheory;
