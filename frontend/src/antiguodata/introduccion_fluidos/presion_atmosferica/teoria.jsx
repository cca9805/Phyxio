import React from 'react';
import { TheorySection, Concept, Formula } from '../../../components/TheoryV2';
import { definitions as atmDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Presión Atmosférica",
  descripcion: "¿Qué es la presión? El aire que nos rodea y su peso",
  categoria: "introduccion_fluidos",
  tema: "introduccion_fluidos",
  subtema: "presion_atmosferica",
  icono: "presion_atmosferica",
  palette: "blue",
  educationLevel: "ESO",
  levels: ['ESO']
};


const Theory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la presión atmosférica?">
        <p>
          La <strong>presión atmosférica</strong> es la fuerza que ejerce el aire sobre la superficie terrestre debido al peso de la columna de aire que se encuentra sobre nosotros. Su valor estándar al nivel del mar es <strong>101325 Pa</strong> (1 atm).
        </p>
      </TheorySection>

      <TheorySection title="Fórmulas Fundamentales">
        <Concept title="Presión atmosférica estándar">
          <Formula
            expression={String.raw`P_{atm} = 101325\ \text{Pa}`}
            calculatorId="presion-atmosferica-valor"
            definitions={atmDefinitions}
            exercises={exercises}
          />
        </Concept>
        <Concept title="Conversión entre atmósferas y pascales">
          <Formula
            expression={String.raw`P_{atm} = \frac{P_{Pa}}{101325}`}
            calculatorId="conversion-atm-pascales"
            definitions={atmDefinitions}
            exercises={exercises}
            complementary={[{ description: "Conversión inversa", expression: String.raw`P_{Pa} = P_{atm} \times 101325` }]}
          />
        </Concept>
      </TheorySection>

      <TheorySection title="Aplicaciones y ejemplos">
        <p>
          La presión atmosférica afecta fenómenos como la ebullición del agua, el funcionamiento de barómetros y la fuerza ejercida sobre superficies expuestas al aire.
        </p>
      </TheorySection>
    </>
  );
};

export default Theory;
