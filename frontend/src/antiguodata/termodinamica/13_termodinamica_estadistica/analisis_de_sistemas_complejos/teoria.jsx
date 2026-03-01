import React from 'react';
import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as complejosDefinitions } from './definitions.js';


export const metadata = {
  titulo: "Análisis de Sistemas Complejos",
  descripcion: "Teoría ampliada sobre fenómenos críticos, transiciones de fase, universalidad y sistemas fuera del equilibrio en termodinámica estadística.",
  icono: "analisis_de_sistemas_complejos",
  educationLevel: 'UNIVERSIDAD',
  levels: ['UNIVERSIDAD']
};


const AnalisisSistemasComplejosTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Introducción a los Sistemas Complejos">
        <Concept title="¿Qué es un sistema complejo?">
          <p>
            <Important>
              Un sistema complejo es aquel formado por un gran número de componentes que interactúan entre sí de manera no lineal, generando comportamientos colectivos emergentes. Estos sistemas pueden mostrar propiedades sorprendentes que no se deducen directamente de las partes individuales.
            </Important>
          </p>
          <p>
            Los sistemas complejos se encuentran en física, biología, economía, sociología y tecnología. Ejemplos incluyen el cerebro humano, ecosistemas, mercados financieros, redes eléctricas, materiales magnéticos y redes sociales.
          </p>
          <ul>
            <li><Concept title="Autoorganización">Capacidad de formar estructuras o patrones sin control externo.</Concept></li>
            <li><Concept title="Emergencia">Propiedades globales que surgen de interacciones locales.</Concept></li>
            <li><Concept title="Sensibilidad a condiciones iniciales">Pequeñas diferencias pueden amplificarse.</Concept></li>
            <li><Concept title="Transiciones de fase">Cambios abruptos en el comportamiento colectivo.</Concept></li>
          </ul>
        </Concept>
      </TheorySection>

      <TheorySection title="Historia y Contexto">
        <Concept title="Orígenes y relevancia">
          <p>
            El estudio de sistemas complejos tiene sus raíces en la física estadística y la termodinámica, donde se buscaba comprender cómo el comportamiento colectivo de muchas partículas da lugar a leyes macroscópicas. Hoy, la teoría de sistemas complejos se aplica a campos tan diversos como la biología (redes neuronales, ecosistemas), la informática (internet, inteligencia artificial), la economía (mercados) y la sociología (dinámica de opiniones, propagación de epidemias).
          </p>
          <Important>
            El análisis de fenómenos críticos y transiciones de fase es fundamental para entender cómo surgen patrones colectivos y cambios abruptos en sistemas reales.
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Fenómenos Críticos y Transiciones de Fase">
        <Concept title="¿Qué es un fenómeno crítico?">
          <p>
            <Important>
              Los fenómenos críticos ocurren cerca de transiciones de fase de segundo orden (como la transición ferromagnético-paramagnético), donde las propiedades del sistema muestran comportamientos singulares y universales. En estos puntos, pequeñas variaciones en parámetros externos (como la temperatura) pueden provocar grandes cambios en el sistema.
            </Important>
          </p>
          <Important>
            En el punto crítico, la longitud de correlación diverge y el sistema se vuelve autosimilar (invariante de escala). Esto significa que las fluctuaciones ocurren en todas las escalas y el sistema no tiene una escala característica.
          </Important>
        </Concept>
        <Concept title="Calor específico (exponente α)">
          <Formula
            expression={String.raw`C \sim |T - T_c|^{-\alpha}`}
            calculatorId="exponente-alpha"
            definitions={complejosDefinitions}
            exercises={exercises}
            complementary={[{ description: "Forma logarítmica", expression: String.raw`\ln C \sim -\alpha \ln|T - T_c|` }]}
          />
          <p><Important>Donde:</Important></p>
          <ul>
            <li><strong>C:</strong> Calor específico (J/K)</li>
            <li><strong>T:</strong> Temperatura (K)</li>
            <li><strong>T_c:</strong> Temperatura crítica (K)</li>
            <li><strong>α:</strong> Exponente crítico del calor específico</li>
          </ul>
        </Concept>
        <Concept title="Parámetro de orden (exponente β)">
          <Formula
            expression={String.raw`m \sim (T_c - T)^{\beta}`}
            calculatorId="exponente-beta"
            definitions={complejosDefinitions}
            exercises={exercises}
          />
          <p><Important>Donde:</Important></p>
          <ul>
            <li><strong>m:</strong> Parámetro de orden (ej: magnetización)</li>
            <li><strong>T_c:</strong> Temperatura crítica (K)</li>
            <li><strong>T:</strong> Temperatura (K)</li>
            <li><strong>β:</strong> Exponente crítico del parámetro de orden</li>
          </ul>
          <p>Para T {'<'} T_c (fase ordenada).</p>
        </Concept>
        <Concept title="Susceptibilidad (exponente γ)">
          <Formula
            expression={String.raw`\chi \sim |T - T_c|^{-\gamma}`}
            calculatorId="exponente-gamma"
            definitions={complejosDefinitions}
            exercises={exercises}
          />
          <p><Important>Donde:</Important></p>
          <ul>
            <li><strong>χ:</strong> Susceptibilidad</li>
            <li><strong>T:</strong> Temperatura (K)</li>
            <li><strong>T_c:</strong> Temperatura crítica (K)</li>
            <li><strong>γ:</strong> Exponente crítico de la susceptibilidad</li>
          </ul>
        </Concept>
        <Concept title="Longitud de correlación (exponente ν)">
          <Formula
            expression={String.raw`\xi \sim |T - T_c|^{-\nu}`}
            calculatorId="exponente-nu"
            definitions={complejosDefinitions}
            exercises={exercises}
          />
          <p><Important>Donde:</Important></p>
          <ul>
            <li><strong>ξ:</strong> Longitud de correlación (m)</li>
            <li><strong>T:</strong> Temperatura (K)</li>
            <li><strong>T_c:</strong> Temperatura crítica (K)</li>
            <li><strong>ν:</strong> Exponente crítico de la longitud de correlación</li>
          </ul>
        </Concept>
      </TheorySection>


      {/* --- SECCIONES FINALES SEGÚN LA GUÍA --- */}
      <div className="theory-history-section">
        <h2><span role="img" aria-label="historia">📜</span> Hechos históricos relevantes</h2>
        <ul>
          <li>Ludwig Boltzmann: pionero en la física estadística, enfrentó resistencia académica y su trabajo fue fundamental para la teoría de sistemas complejos.</li>
          <li>Benoit Mandelbrot: desarrolló la geometría fractal, clave para entender la autosimilitud en sistemas complejos.</li>
          <li>El estudio de la transición de fase en el modelo de Ising fue un reto matemático durante décadas, hasta que Lars Onsager resolvió el caso bidimensional en 1944.</li>
          <li>El concepto de criticalidad autoorganizada surgió en los años 80, revolucionando la comprensión de fenómenos como avalanchas y terremotos.</li>
        </ul>
      </div>

      <div className="theory-applications-section">
        <h2><span role="img" aria-label="aplicaciones">🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>Transporte en medios desordenados, como el flujo de agua en suelos o la propagación de incendios.</li>
          <li>Fenómenos como avalanchas, terremotos y dinámica de dunas.</li>
          <li>Estructura y dinámica de internet, redes sociales, redes neuronales y el cerebro.</li>
          <li>Plegamiento de proteínas, propagación de epidemias, dinámica de poblaciones.</li>
          <li>Reacciones químicas oscilantes, dinámica de tráfico vehicular, mercados financieros, redes neuronales fuera del equilibrio.</li>
          <li>Modelos de propagación de epidemias, redes metabólicas, mercados económicos, dinámica de cooperación y competencia.</li>
          <li>Inteligencia artificial aplicada a sistemas complejos, medicina personalizada, materiales inteligentes, análisis multiescala.</li>
        </ul>
        <h3>Ejemplos y casos límite</h3>
        <ul>
          <li>Percolación: Transporte en medios desordenados, como el flujo de agua en suelos o la propagación de incendios.</li>
          <li>Criticalidad autoorganizada: Fenómenos como avalanchas, terremotos y dinámica de dunas.</li>
          <li>Redes complejas: Estructura y dinámica de internet, redes sociales, redes neuronales y el cerebro.</li>
          <li>Sistemas biológicos: Plegamiento de proteínas, propagación de epidemias, dinámica de poblaciones.</li>
          <li>Sistemas fuera del equilibrio: Reacciones químicas oscilantes, dinámica de tráfico vehicular, mercados financieros, redes neuronales fuera del equilibrio.</li>
          <li>Aplicaciones en biología y economía: Modelos de propagación de epidemias, redes metabólicas, mercados económicos, dinámica de cooperación y competencia.</li>
          <li>Aplicaciones futuras: Inteligencia artificial aplicada a sistemas complejos, medicina personalizada, materiales inteligentes, análisis multiescala.</li>
        </ul>
      </div>

      <div className="theory-anecdotes-section">
        <h2><span role="img" aria-label="anecdotas">✨</span> Anécdotas y curiosidades</h2>
        <ul>
          <li>Ejercicio especial: ¿Qué ocurre con el parámetro de orden m si T {'>'} T_c? (m = 0, fase desordenada).</li>
          <li>Valores extremos: t → 0, exponentes críticos inusuales, sistemas con interacción de largo alcance.</li>
          <li>El análisis de estos sistemas permite predecir comportamientos colectivos, optimizar redes y entender la resiliencia y vulnerabilidad de sistemas reales.</li>
          <li>El campo de los sistemas complejos es interdisciplinar y está en rápida expansión, con aplicaciones en ciencia, ingeniería y sociedad.</li>
          <li>"Los sistemas complejos son impredecibles": aunque presentan comportamientos emergentes, muchos patrones pueden clasificarse y predecirse mediante exponentes universales.</li>
          <li>"Solo existen en física": los sistemas complejos están presentes en biología, economía, sociología y tecnología.</li>
        </ul>
      </div>

      <div className="theory-summary-section">
        <h2><span role="img" aria-label="resumen">📝</span> Resumen</h2>
        <ul>
          <li>Los sistemas complejos muestran comportamientos emergentes y transiciones de fase que no se deducen de las partes individuales.</li>
          <li>Los fenómenos críticos y los exponentes universales permiten clasificar y predecir el comportamiento colectivo.</li>
          <li>El grupo de renormalización es la herramienta fundamental para entender la universalidad y la autosimilitud.</li>
          <li>Muchos sistemas reales evolucionan fuera del equilibrio y requieren modelos probabilísticos.</li>
          <li>Las aplicaciones abarcan desde la física y la biología hasta la tecnología y la sociedad.</li>
        </ul>
      </div>
    </>
  );
};

export default AnalisisSistemasComplejosTheory;
