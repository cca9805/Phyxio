import { TheorySection, Concept } from '../../../../../components/TheoryV2';

export const metadata = {
  titulo: "Fuentes de Energía",
  descripcion: "Energías renovables y no renovables: características, ventajas y desafíos",
  isTheoryOnly: true,
  educationLevel: "ESO",
  levels: ['ESO']
};

const FuentesEnergiaTeoria = ({ exercises }) => {
  return (
    <TheorySection title="Fuentes de Energía" emoji="⚡" nivel="ESO">
      
      <Concept title="Introducción">
        <p>
          Las fuentes de energía son los recursos naturales o procesos que nos permiten obtener 
          la energía necesaria para nuestras actividades diarias. Se clasifican principalmente en 
          dos grandes grupos: renovables y no renovables.
        </p>
        <p>
          Esta sección explora ambos tipos de fuentes energéticas, analizando sus características, 
          ventajas, limitaciones y el papel que juegan en la transición energética hacia un futuro 
          más sostenible.
        </p>
      </Concept>

      <Concept title="Clasificación de las Fuentes de Energía">
        <h4>🌱 Energías Renovables</h4>
        <p>
          Son aquellas que se regeneran naturalmente en una escala de tiempo humana. Incluyen:
        </p>
        <ul>
          <li><strong>Solar:</strong> Aprovecha la radiación del Sol mediante paneles fotovoltaicos o térmicos</li>
          <li><strong>Eólica:</strong> Utiliza la fuerza del viento para generar electricidad</li>
          <li><strong>Hidráulica:</strong> Aprovecha la energía del agua en movimiento</li>
          <li><strong>Geotérmica:</strong> Utiliza el calor interno de la Tierra</li>
          <li><strong>Biomasa:</strong> Energía de materia orgánica renovable</li>
          <li><strong>Mareomotriz:</strong> Aprovecha las mareas y olas del océano</li>
        </ul>

        <h4>⛽ Energías No Renovables</h4>
        <p>
          Son recursos finitos que se agotan con su uso. Incluyen:
        </p>
        <ul>
          <li><strong>Combustibles fósiles:</strong> Carbón, petróleo y gas natural</li>
          <li><strong>Nuclear:</strong> Fisión de uranio o plutonio</li>
        </ul>
      </Concept>

      <Concept title="La Transición Energética">
        <p>
          El mundo está en proceso de transición desde un sistema energético basado principalmente 
          en combustibles fósiles hacia uno dominado por energías renovables. Esta transición es 
          impulsada por:
        </p>
        <ul>
          <li>La necesidad de reducir las emisiones de CO₂ y combatir el cambio climático</li>
          <li>La disminución de costes de las tecnologías renovables</li>
          <li>La búsqueda de independencia energética</li>
          <li>Los avances en almacenamiento y gestión de redes eléctricas</li>
        </ul>
      </Concept>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          Las fuentes de energía se dividen en renovables (que se regeneran naturalmente) y 
          no renovables (recursos finitos). Cada tipo tiene ventajas y desafíos específicos. 
          La transición hacia un sistema energético más sostenible requiere aumentar el uso 
          de renovables mientras se gestionan sus desafíos técnicos y económicos.
        </p>
        <p>
          Explora los subtemas para conocer en detalle las características de cada tipo de 
          fuente energética.
        </p>
      </div>

    </TheorySection>
  );
};

export default FuentesEnergiaTeoria;
