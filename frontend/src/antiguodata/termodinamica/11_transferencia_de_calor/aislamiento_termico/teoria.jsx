import React from 'react';
import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions as aislamientoDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Aislamiento Térmico",
  descripcion: "Materiales y técnicas de aislamiento",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const AislamientoTermicoTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Aislamiento Térmico">
        <Concept title="Valor R">
          <p>El <strong>valor R</strong> mide la resistencia térmica de un material. Cuanto mayor es el valor R, mejor es el aislamiento.</p>
        </Concept>
        <Concept title="Pérdida de Calor">
          <Formula 
            expression={String.raw`Q = \frac{A\Delta T}{R}`}
            description="Pérdida de calor con aislamiento"
            calculatorId="aislamiento_termico-grupo-1"
            definitions={aislamientoDefinitions}
            exercises={exercises}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>Q:</strong> Pérdida de calor (W)</li>
            <li><strong>A:</strong> Área (m²)</li>
            <li><strong>ΔT:</strong> Diferencia de temperatura (K)</li>
            <li><strong>R:</strong> Valor R del aislamiento (m²·K/W)</li>
          </ul>
        </Concept>
      </TheorySection>
      {/* Anécdotas, curiosidades y aplicaciones */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        <ul>
          <li><strong>La NASA</strong> utiliza materiales de aislamiento térmico avanzados en trajes espaciales y naves para proteger a los astronautas de temperaturas extremas (de -150°C a +120°C en el espacio).</li>
          <li>El <strong>aerogel</strong> es uno de los mejores aislantes conocidos: es 99% aire y se usó en la misión Mars Rover para proteger instrumentos.</li>
          <li>En la <strong>arquitectura sostenible</strong>, el aislamiento térmico es clave para reducir el consumo energético de edificios y combatir el cambio climático.</li>
          <li>Las <strong>ventanas de doble acristalamiento</strong> funcionan gracias a una capa de aire o gas aislante entre los vidrios, reduciendo la pérdida de calor.</li>
          <li>En países nórdicos, las casas de madera con buen aislamiento permiten sobrevivir a inviernos bajo cero con muy poca calefacción.</li>
          <li>El <strong>mito</strong>: "El papel de aluminio en las paredes aísla bien". En realidad, solo refleja radiación, pero no es buen aislante para conducción o convección.</li>
        </ul>
        <h3>Aplicaciones cotidianas</h3>
        <ul>
          <li>Ropa térmica y trajes de esquí usan fibras sintéticas para atrapar aire y aislar del frío.</li>
          <li>Neveras y termos mantienen la temperatura gracias a capas de aislamiento.</li>
          <li>El aislamiento en cables eléctricos también previene pérdidas de calor y protege de cortocircuitos.</li>
        </ul>
      </div>
    </>
  );
};

export default AislamientoTermicoTheory;
