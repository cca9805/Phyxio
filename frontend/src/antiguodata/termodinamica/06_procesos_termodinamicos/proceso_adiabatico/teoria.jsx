import React from 'react';
import { TheorySection, Concept, Formula } from '../../../../components/TheoryV2';
import { definitions as proceso_adiabaticoDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Proceso Adiabático",
  descripcion: "Procesos termodinámicos sin intercambio de calor",
  categoria: "termodinamica",
  subcategoria: "06_procesos_termodinamicos",
  tema: "06_procesos_termodinamicos",
  subtema: "proceso_adiabatico",
  icono: "proceso_adiabatico",
  palette: "blue",
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const ProcesoAdiabaticoTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="Proceso Adiabático">
        <p>
          Un proceso adiabático es aquel en el que no hay intercambio de calor con el entorno (Q = 0).
          Esto puede lograrse con aislamiento térmico o procesos muy rápidos.
        </p>
      </TheorySection>

      <TheorySection title="Ecuaciones Fundamentales">
        <Concept title="Relación Presión-Volumen">
          <p>En un proceso adiabático, la presión y el volumen están relacionados por:</p>
          <Formula
            expression={String.raw`P_f = P_i\left(\frac{V_i}{V_f}\right)^{\gamma}`}
            calculatorId="relacion-pv"
            definitions={proceso_adiabaticoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Volumen Final (V_f)", expression: String.raw`V_f = V_i\left(\frac{P_i}{P_f}\right)^{\frac{1}{\gamma}}` },
              { description: "Calcular Volumen Inicial (V_i)", expression: String.raw`V_i = V_f\left(\frac{P_f}{P_i}\right)^{\frac{1}{\gamma}}` }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>P:</strong> Presión del gas (Pa)</li>
            <li><strong>V:</strong> Volumen del gas (m³)</li>
            <li><strong>γ:</strong> Coeficiente adiabático o índice de Poisson = C<sub>p</sub>/C<sub>v</sub> (adimensional)</li>
          </ul>

          <p><strong>Valores típicos de γ:</strong></p>
          <ul>
            <li>Gases monoatómicos (He, Ar): γ ≈ 1.67</li>
            <li>Gases diatómicos (N₂, O₂, aire): γ ≈ 1.40</li>
            <li>Gases poliatómicos (CO₂, CH₄): γ ≈ 1.30</li>
          </ul>
        </Concept>

        <Concept title="Relación Temperatura-Volumen">
          <p>La temperatura y el volumen en un proceso adiabático siguen:</p>
          <Formula
            expression={String.raw`T_f = T_i\left(\frac{V_i}{V_f}\right)^{\gamma-1}`}
            calculatorId="relacion-tv"
            definitions={proceso_adiabaticoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Volumen Final (V_f)", expression: String.raw`V_f = V_i\left(\frac{T_i}{T_f}\right)^{\frac{1}{\gamma-1}}` },
              { description: "Calcular Volumen Inicial (V_i)", expression: String.raw`V_i = V_f\left(\frac{T_f}{T_i}\right)^{\frac{1}{\gamma-1}}` }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>T:</strong> Temperatura absoluta del gas (K)</li>
            <li><strong>V:</strong> Volumen del gas (m³)</li>
            <li><strong>γ:</strong> Coeficiente adiabático (adimensional)</li>
          </ul>

          <p>Esta relación muestra que en una expansión adiabática (V aumenta), la temperatura disminuye, y en una compresión adiabática (V disminuye), la temperatura aumenta.</p>
        </Concept>

        <Concept title="Trabajo en Proceso Adiabático">
          <p>El trabajo realizado en un proceso adiabático se calcula como:</p>
          <Formula
            expression={String.raw`W = \frac{nR(T_i - T_f)}{\gamma - 1}`}
            calculatorId="trabajo-adiabatico"
            definitions={proceso_adiabaticoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Temperatura Final (T_f)", expression: String.raw`T_f = T_i - \frac{W(\gamma - 1)}{nR}` },
              { description: "Calcular Temperatura Inicial (T_i)", expression: String.raw`T_i = T_f + \frac{W(\gamma - 1)}{nR}` }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>W:</strong> Trabajo realizado por o sobre el sistema (J)</li>
            <li><strong>n:</strong> Número de moles del gas (mol)</li>
            <li><strong>R:</strong> Constante universal de los gases = 8.314 J/(mol·K)</li>
            <li><strong>T<sub>i</sub>:</strong> Temperatura inicial (K)</li>
            <li><strong>T<sub>f</sub>:</strong> Temperatura final (K)</li>
            <li><strong>γ:</strong> Coeficiente adiabático (adimensional)</li>
          </ul>
        </Concept>

        <Concept title="Cambio de Energía Interna">
          <p>Como no hay intercambio de calor (Q = 0), la primera ley se simplifica a:</p>
          <Formula
            expression={String.raw`\Delta U = -W = nC_v\Delta T`}
            calculatorId="energia-interna"
            definitions={proceso_adiabaticoDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Calcular Cambio de Temperatura (ΔT)", expression: String.raw`\Delta T = \frac{\Delta U}{nC_v}` },
              { description: "Calcular Capacidad Calorífica (C_v)", expression: String.raw`C_v = \frac{\Delta U}{n\Delta T}` }
            ]}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li><strong>ΔU:</strong> Cambio de energía interna (J)</li>
            <li><strong>W:</strong> Trabajo realizado (J)</li>
            <li><strong>n:</strong> Número de moles (mol)</li>
            <li><strong>C<sub>v</sub>:</strong> Capacidad calorífica a volumen constante (J/(mol·K))</li>
            <li><strong>ΔT:</strong> Cambio de temperatura = T<sub>f</sub> - T<sub>i</sub> (K)</li>
          </ul>

          <p><strong>Nota importante:</strong> En un proceso adiabático, todo el trabajo realizado proviene del cambio de energía interna del sistema, ya que no hay transferencia de calor con el entorno.</p>
        </Concept>
      </TheorySection>

      <TheorySection title="Características">
        <Concept title="Propiedades del Proceso Adiabático">
          <ul>
            <li>No hay intercambio de calor: Q = 0</li>
            <li>El sistema está térmicamente aislado o el proceso es muy rápido</li>
            <li>ΔU = -W (el trabajo cambia la energía interna)</li>
            <li>γ = C_p/C_v es el coeficiente adiabático</li>
            <li>La temperatura cambia durante el proceso</li>
            <li>Expansión adiabática: T disminuye; Compresión: T aumenta</li>
          </ul>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🚗 Motores de combustión interna</h3>
          <p>
            En los motores de combustión, las fases de compresión y expansión ocurren tan rápidamente (en milisegundos) 
            que se pueden considerar adiabáticas. Durante la compresión, la temperatura del aire puede aumentar de 
            25°C a más de 600°C, lo suficiente para encender el combustible en motores diésel sin necesidad de bujías.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>✈️ Turbinas de aviones y generación eléctrica</h3>
          <p>
            Las turbinas de gas en aviones y centrales eléctricas operan mediante compresiones y expansiones adiabáticas. 
            Las turbinas modernas pueden alcanzar eficiencias del 40-60% gracias al control preciso de estos procesos. 
            En un motor de avión, el aire se comprime adiabáticamente hasta 30-40 veces su presión inicial.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌦️ Formación de nubes y meteorología</h3>
          <p>
            Cuando el aire húmedo asciende en la atmósfera, se expande adiabáticamente y su temperatura disminuye 
            aproximadamente 10°C por cada kilómetro de altura (gradiente adiabático seco). Al alcanzar el punto de 
            rocío, el vapor de agua se condensa formando nubes. Este proceso es fundamental para la predicción meteorológica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>❄️ Sistemas de refrigeración y aire acondicionado</h3>
          <p>
            Los ciclos de refrigeración utilizan expansiones y compresiones adiabáticas del refrigerante. El compresor 
            aumenta la presión y temperatura del gas de forma adiabática, permitiendo que ceda calor al exterior. 
            La válvula de expansión produce una expansión adiabática que enfría el refrigerante para absorber calor del interior.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Compresores industriales</h3>
          <p>
            En la industria, los compresores de aire operan mediante compresión adiabática. Un compresor típico puede 
            elevar la temperatura del aire de 20°C a 150-200°C al comprimirlo de 1 bar a 8-10 bar. Por eso, los 
            compresores industriales requieren sistemas de enfriamiento para evitar daños por sobrecalentamiento.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El descubrimiento de los procesos adiabáticos
        </h2>
        
        <div className="theory-subsection">
          <h3>🔥 Sadi Carnot y el ciclo ideal (1824)</h3>
          <p>
            Sadi Carnot, en su obra "Reflexiones sobre la potencia motriz del fuego", fue el primero en estudiar 
            procesos adiabáticos. Aunque no usó este término, describió transformaciones sin intercambio de calor 
            en su ciclo ideal. Carnot demostró que la eficiencia de una máquina térmica depende de las temperaturas 
            entre las que opera, estableciendo las bases de la termodinámica.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>📐 Rudolf Clausius y el término "adiabático" (1850)</h3>
          <p>
            Clausius introdujo el término "adiabático" del griego "adiabatos" (impasable), para describir procesos 
            donde el calor no puede pasar a través de las paredes del sistema. Estableció las ecuaciones fundamentales 
            que relacionan presión, volumen y temperatura en procesos adiabáticos: PVγ = constante. Esta ecuación 
            se conoce como ecuación de Poisson en su honor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔧 Nikolaus Otto y el motor de cuatro tiempos (1876)</h3>
          <p>
            Otto diseñó el primer motor de combustión interna de cuatro tiempos práctico, aplicando los principios 
            de procesos adiabáticos. Su motor utilizaba la compresión adiabática para aumentar la eficiencia de la 
            combustión. Este diseño revolucionó el transporte y sigue siendo la base de los motores de gasolina modernos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💡 Rudolf Diesel y la ignición por compresión (1893)</h3>
          <p>
            Diesel llevó el concepto de compresión adiabática al extremo, diseñando un motor donde la temperatura 
            alcanzada por compresión adiabática (más de 700°C) era suficiente para encender el combustible 
            espontáneamente, eliminando la necesidad de bujías. Su motor era más eficiente que el de Otto, 
            alcanzando eficiencias del 30% frente al 20% de los motores de gasolina de la época.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ Desarrollo de la teoría cinética (siglo XIX)</h3>
          <p>
            Durante el siglo XIX, científicos como Maxwell, Boltzmann y Kelvin desarrollaron la teoría cinética 
            de los gases, que explicaba microscópicamente por qué PVγ = constante en procesos adiabáticos. 
            Demostraron que γ = Cp/Cv está relacionado con los grados de libertad de las moléculas del gas.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🚴 La bomba de bicicleta que quema</h3>
          <p>
            Si alguna vez has inflado un neumático con una bomba manual, habrás notado que se calienta mucho. 
            Este calentamiento es compresión adiabática en acción. Al bombear rápidamente, la temperatura del aire 
            puede aumentar hasta 50-70°C, lo suficiente para quemar si tocas la base metálica. Un bombeo muy rápido 
            puede incluso encender un trozo de papel dentro del cilindro.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔥 El pistón de fuego prehistórico</h3>
          <p>
            Mucho antes de que Clausius formalizara la termodinámica, pueblos del sudeste asiático usaban el "pistón 
            de fuego" para encender fogatas. Este dispositivo consiste en un tubo con un pistón que comprime aire 
            rápidamente. La compresión adiabática eleva la temperatura hasta 260°C en menos de un segundo, 
            encendiendo una pequeña yesca. Es una prueba de que la compresión adiabática se conocía empíricamente 
            desde hace miles de años.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⛰️ Las nubes y el "nivel de condensación"</h3>
          <p>
            Los montañistas y pilotos conocen el "nivel de condensación" o altura donde se forman las nubes. 
            Este nivel es predecible usando la ecuación adiabática: el aire asciende y se enfría 10°C por kilómetro 
            hasta alcanzar el punto de rocío. Por eso las nubes a menudo tienen bases planas y horizontales, 
            todas a la misma altura. Es como si la atmósfera dibujara una línea invisible donde comienza la condensación.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💨 El "foehn" y los vientos cálidos de montaña</h3>
          <p>
            Los vientos foehn son vientos cálidos y secos que descienden de las montañas. Cuando el aire húmedo 
            asciende por una ladera, se enfría adiabáticamente y pierde humedad al formar nubes. Al descender por 
            el otro lado, se comprime adiabáticamente pero sin humedad, calentándose mucho más de lo que se enfrió 
            al subir. Esto puede elevar la temperatura 20-30°C en pocas horas, derritiendo nieve rápidamente 
            (fenómeno conocido como "devorador de nieve").
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎈 Los globos aerostáticos y el récord de Felix Baumgartner</h3>
          <p>
            En 2012, Felix Baumgartner saltó desde 39 km de altura. Durante el ascenso del globo aerostático, 
            el helio dentro se expandió adiabáticamente, enfriándose hasta -60°C. Este proceso es crítico en el 
            diseño de globos estratosféricos: si el helio se expande demasiado rápido, el globo puede explotar. 
            Los ingenieros deben calcular cuidadosamente la expansión adiabática para alcanzar la altura deseada.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ El "bang sónico" y la compresión adiabática</h3>
          <p>
            Cuando un avión supera la velocidad del sonido, comprime el aire delante de él tan rápidamente que 
            el proceso es prácticamente adiabático. Esta compresión súbita crea una onda de choque que se propaga 
            como el "bang sónico". La temperatura en la onda de choque puede aumentar varios cientos de grados, 
            lo que explica por qué los aviones supersónicos necesitan materiales resistentes al calor.
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            Un proceso adiabático es aquel sin intercambio de calor (Q = 0), ya sea por aislamiento térmico 
            o porque ocurre tan rápido que no hay tiempo para transferencia térmica.
          </li>
          <li>
            Las ecuaciones adiabáticas (PVγ = cte, TVγ⁻¹ = cte) relacionan presión, volumen y temperatura 
            mediante el coeficiente adiabático γ = Cp/Cv.
          </li>
          <li>
            La compresión adiabática aumenta temperatura y presión, mientras que la expansión adiabática 
            las disminuye. El trabajo realizado se convierte en cambio de energía interna.
          </li>
          <li>
            Aplicaciones prácticas: motores de combustión, turbinas, compresores, refrigeración, 
            y fenómenos meteorológicos como formación de nubes y vientos de montaña.
          </li>
          <li>
            En el espacio o en condiciones de muy baja fricción, los procesos adiabáticos son prácticamente 
            perfectos. En la Tierra, son aproximaciones útiles para procesos rápidos.
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProcesoAdiabaticoTheory;
