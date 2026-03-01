import React from 'react';
import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions } from './definitions.js';

export const metadata = {
  titulo: "Densidad y Presión",
  descripcion: "Conceptos fundamentales de densidad y presión en fluidos",
  categoria: "mecanica_de_fluidos",
  subcategoria: "estatica_de_fluidos",
  tema: "estatica_de_fluidos",
  subtema: "densidad_presion",
  icono: "densidad_presion",
  palette: "blue",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Densidad">
        <Concept title="Definición de Densidad">
          <p>
            La <strong>densidad</strong> es una propiedad característica de cada sustancia que relaciona su masa con el volumen que ocupa.
          </p>

          <Formula
            expression={String.raw`\rho = \frac{m}{V}`}
            calculatorId="densidad-grupo"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Masa (m)", expression: String.raw`m = \rho \cdot V` },
              { description: "Calcular Volumen (V)", expression: String.raw`V = \frac{m}{\rho}` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>ρ:</strong> Densidad (kg/m³)</li>
            <li><strong>m:</strong> Masa (kg)</li>
            <li><strong>V:</strong> Volumen (m³)</li>
          </ul>
        </Concept>

        <Concept title="Densidades Comunes">
          <ul>
            <li><strong>Agua:</strong> 1000 kg/m³</li>
            <li><strong>Aire:</strong> 1.29 kg/m³</li>
            <li><strong>Mercurio:</strong> 13600 kg/m³</li>
            <li><strong>Hielo:</strong> 917 kg/m³</li>
            <li><strong>Aceite:</strong> 920 kg/m³</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Presión">
        <Concept title="Definición de Presión">
          <p>
            La <strong>presión</strong> es la fuerza normal ejercida por unidad de área sobre una superficie.
          </p>

          <Formula
            expression={String.raw`P = \frac{F}{A}`}
            calculatorId="presion-grupo"
            definitions={definitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Fuerza (F)", expression: String.raw`F = P \cdot A` },
              { description: "Calcular Área (A)", expression: String.raw`A = \frac{F}{P}` }
            ]}
          />
          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>P:</strong> Presión (Pa o N/m²)</li>
            <li><strong>F:</strong> Fuerza (N)</li>
            <li><strong>A:</strong> Área (m²)</li>
          </ul>
        </Concept>

        <Concept title="Unidades de Presión">
          <ul>
            <li><strong>Pascal (Pa):</strong> 1 Pa = 1 N/m²</li>
            <li><strong>Atmósfera (atm):</strong> 1 atm = 101325 Pa</li>
            <li><strong>Bar:</strong> 1 bar = 100000 Pa</li>
            <li><strong>mmHg:</strong> 1 mmHg = 133.322 Pa</li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones">
        <ul>
          <li><strong>Ingeniería:</strong> Diseño de estructuras y materiales</li>
          <li><strong>Medicina:</strong> Presión arterial</li>
          <li><strong>Meteorología:</strong> Presión atmosférica</li>
          <li><strong>Industria:</strong> Sistemas hidráulicos</li>
        </ul>
      </TheorySection>
    </>
  );
};

export default Theory;
