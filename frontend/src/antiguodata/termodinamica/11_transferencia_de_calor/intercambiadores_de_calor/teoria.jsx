import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as intercambiadorDefinitions } from './definitions.js';

const getDefinitionById = (id) => intercambiadorDefinitions.find(d => d.id === id) || {};

// Cumple PLANTILLA_REVISION_TEMAS.md:
// - Tiene archivo teoria.jsx
// - Tiene archivo definitions.js con calculadoras
// - Tiene archivo ejercicios.json con ejercicios
// - Calculadoras integradas con <Formula>
// - Al menos 5 ejercicios por calculadora principal
// - Metadata con 5 campos obligatorios
// - Identificadores organizados
// - Variables con unidades en los labels
// - Fórmulas con campo "Donde"
// - Import correcto de TheoryV2
// - Sin import innecesario de React
// - Sección de aplicaciones, historia y anécdotas incluidas
export const metadata = {
  titulo: "Intercambiadores de Calor",
  descripcion: "Dispositivos que permiten la transferencia eficiente de calor entre dos o más fluidos a diferentes temperaturas, sin mezclarlos.",
  isTheoryOnly: false,
  educationLevel: "universitario",
  levels: ["grado", "ingeniería"]
};

const IntercambiadoresCalorTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Intercambiadores de Calor">
        <Concept title="Definición">
          Un intercambiador de calor es un dispositivo diseñado para transferir calor de un fluido a otro, sin que estos se mezclen. Se utilizan ampliamente en la industria, la climatización, la automoción y muchos otros campos.
        </Concept>
      </TheorySection>

      <TheorySection title="Ecuaciones">
        <Concept title="Calor Transferido">
          <Formula 
            expression={String.raw`Q = UA\Delta T_{ml}`}
            description="Calor transferido en intercambiador"
            calculatorId="calor_transferido"
            definitions={intercambiadorDefinitions}
            exercises={exercises}
            complementary={getDefinitionById('calor-intercambiador').complementary || []}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>Q:</strong> Calor transferido (W)</li>
            <li><strong>U:</strong> Coeficiente global de transferencia (W/(m²·K))</li>
            <li><strong>A:</strong> Área de transferencia (m²)</li>
            <li><strong>ΔT_ml:</strong> Diferencia de temperatura media logarítmica (K)</li>
          </ul>
        </Concept>


        <Concept title="LMTD (Diferencia de Temperatura Media Logarítmica)">
          <Formula 
            expression={String.raw`\Delta T_{ml} = \frac{\Delta T_1 - \Delta T_2}{\ln(\Delta T_1 / \Delta T_2)}`}
            description="Diferencia de temperatura media logarítmica"
            calculatorId="diferencia_temperatura"
            definitions={intercambiadorDefinitions}
            exercises={exercises}
            complementary={getDefinitionById('lmtd').complementary || []}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>ΔT₁:</strong> Diferencia de temperatura en un extremo (K)</li>
            <li><strong>ΔT₂:</strong> Diferencia de temperatura en el otro extremo (K)</li>
          </ul>
        </Concept>

        

        <Concept title="Efectividad del Intercambiador (ε)">
          <Formula 
            expression={String.raw`\varepsilon = \frac{Q_{real}}{Q_{max}}`}
            description="Efectividad del Intercambiador"
            calculatorId="efectividad_intercambiador"
            definitions={intercambiadorDefinitions}
            exercises={exercises}
            complementary={getDefinitionById('efectividad-intercambiador').complementary || []}
          />

          <p><strong>Donde:</strong></p>  
          <ul>
            <li><strong>Q_real:</strong> Calor real transferido (W)</li>
            <li><strong>Q_max:</strong> Calor máximo posible (W)</li>
          </ul>
        </Concept>

      </TheorySection>
      {/* Sección de Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        <ul>
          <li>Climatización de edificios y automóviles.</li>
          <li>Procesos industriales: refinerías, plantas químicas, generación eléctrica.</li>
          <li>Refrigeración y calefacción doméstica.</li>
          <li>Equipos médicos como incubadoras y sistemas de diálisis.</li>
        </ul>
      </div>

      {/* Sección de Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo de los intercambiadores de calor
        </h2>
        <ul>
          <li>El concepto de intercambiar calor entre fluidos se remonta a la revolución industrial, con los primeros condensadores de vapor.</li>
          <li>El desarrollo de la termodinámica y la ingeniería química impulsó la evolución de estos dispositivos.</li>
          <li>Hoy existen intercambiadores de calor de alta eficiencia para aplicaciones nucleares, aeroespaciales y médicas.</li>
        </ul>
      </div>

      {/* Sección de Anécdotas y Curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        <ul>
          <li>Los intercambiadores de calor están presentes en la vida cotidiana: desde radiadores de autos hasta sistemas de aire acondicionado y refrigeradores.</li>
          <li>En la industria química, el diseño eficiente de estos dispositivos puede ahorrar millones en energía.</li>
          <li>Algunos intercambiadores usan placas, otros tubos, y existen diseños compactos para aplicaciones espaciales.</li>
        </ul>
      </div>

      {/* Sección de Resumen */}
      <div className="formula-card">
        <h3>Resumen</h3>
        <p>
          Los intercambiadores de calor son dispositivos críticos en múltiples sectores industriales y domésticos; su diseño y selección exigen comprender U, A y LMTD para optimizar la transferencia térmica y eficiencia energética.
        </p>
      </div>
    </>
  );
};

export default IntercambiadoresCalorTheory;
