import { TheorySection, Concept } from '../../../../components/TheoryV2';
import { theoreticalConcepts } from './definitions.js';

// Metadatos del tema teórico
export const metadata = {
  titulo: "Entropía y Segunda Ley de la Termodinámica",
  descripcion: "Relación fundamental entre el concepto de entropía y la segunda ley de la termodinámica",
  isTheoryOnly: true,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const EntropiaYSegundaLeyTheory = () => {
  return (
    <>
      <TheorySection title="Introducción" variant="theoretical">
        <div className="theory-only-intro">
          <p className="theory-description">
            {theoreticalConcepts.mainTopic} es un área fundamental de la termodinámica que 
            abarca {theoreticalConcepts.description.toLowerCase()}. Este subtema desarrolla los conceptos 
            teóricos esenciales para la comprensión profunda de los principios termodinámicos.
          </p>
          <div className="main-concept-highlight">
            <h4>💡 Concepto Principal:</h4>
            <p className="main-concept">{theoreticalConcepts.mainConcept}</p>
          </div>
        </div>
      </TheorySection>

      <TheorySection title="La Entropía como Medida de la Segunda Ley" variant="theoretical">
        <Concept title="Principio de Aumento de Entropía" variant="detailed">
          <div className="detailed-content">
            <p>Enunciado: En todo proceso que ocurre en un sistema aislado, la entropía total nunca disminuye:</p>
            <div className="formula-display">ΔS<sub>universo</sub> = ΔS<sub>sistema</sub> + ΔS<sub>entorno</sub> ≥ 0</div>
            <ul>
              <li>ΔS = 0: Proceso reversible (ideal, no alcanzable en la práctica)</li>
              <li>ΔS &gt; 0: Proceso irreversible (todos los procesos reales)</li>
              <li>ΔS &lt; 0: Proceso imposible (viola la segunda ley)</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Interpretación Física" variant="detailed">
          <div className="detailed-content">
            <p>La entropía cuantifica:</p>
            <ul>
              <li>El grado de desorden o dispersión de energía en un sistema</li>
              <li>La irreversibilidad de los procesos naturales</li>
              <li>La dirección natural de los procesos (flecha del tiempo)</li>
              <li>La degradación de la energía útil</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Formulaciones Equivalentes de la Segunda Ley" variant="detailed">
          <div className="detailed-content">
            <p>La segunda ley tiene múltiples enunciados equivalentes:</p>
            <ul>
              <li>
                Enunciado de Clausius: "Es imposible un proceso cuyo único resultado sea 
                transferir calor de un cuerpo frío a uno caliente"
              </li>
              <li>
                Enunciado de Kelvin-Planck: "Es imposible construir una máquina térmica que, 
                operando en un ciclo, no produzca otro efecto que absorber calor de un depósito 
                y realizar una cantidad equivalente de trabajo"
              </li>
              <li>
                Enunciado de entropía: "La entropía de un sistema aislado nunca disminuye"
              </li>
            </ul>
            <p>
              Todos estos enunciados son equivalentes y expresan la misma ley fundamental de la naturaleza 
              desde diferentes perspectivas.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Consecuencias de la Segunda Ley" variant="theoretical">
        <Concept title="Limitaciones en Máquinas Térmicas" variant="detailed">
          <div className="detailed-content">
            <p>La segunda ley impone límites fundamentales:</p>
            <ul>
              <li>Eficiencia máxima: Ninguna máquina térmica puede tener eficiencia del 100%</li>
              <li>Ciclo de Carnot: Representa la máxima eficiencia teórica posible</li>
              <li>Calor residual: Siempre se debe rechazar calor al entorno</li>
            </ul>
            <div className="formula-display">η<sub>Carnot</sub> = 1 - T<sub>fría</sub>/T<sub>caliente</sub></div>
            <p>
              Esta ecuación muestra que la máxima eficiencia depende solo de las temperaturas de 
              los depósitos térmicos. Para T<sub>fría</sub> = 300 K y T<sub>caliente</sub> = 600 K, 
              la eficiencia máxima es solo 50%.
            </p>
          </div>
        </Concept>

        <Concept title="Dirección de los Procesos" variant="detailed">
          <div className="detailed-content">
            <p>La entropía determina la dirección natural de los procesos:</p>
            <ul>
              <li>El calor fluye espontáneamente de caliente a frío</li>
              <li>Los gases se expanden para llenar el volumen disponible</li>
              <li>Las sustancias se mezclan espontáneamente</li>
              <li>La energía se dispersa y degrada</li>
              <li>Los sistemas evolucionan hacia el equilibrio</li>
            </ul>
            <p>Todos estos procesos aumentan la entropía del universo.</p>
          </div>
        </Concept>

        <Concept title="Imposibilidad de Procesos" variant="detailed">
          <div className="detailed-content">
            <p>La segunda ley prohíbe ciertos procesos que violarían el principio de aumento de entropía:</p>
            <ul>
              <li>Móviles perpetuos de segunda especie (eficiencia 100%)</li>
              <li>Refrigeradores sin trabajo externo</li>
              <li>Separación espontánea de mezclas</li>
              <li>Conversión completa de calor en trabajo en proceso cíclico</li>
              <li>Flujo espontáneo de calor de frío a caliente</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="Procesos Irreversibles" variant="theoretical">
        <Concept title="Causas de Irreversibilidad" variant="detailed">
          <div className="detailed-content">
            <p>Los procesos reales son irreversibles debido a:</p>
            <ul>
              <li>Fricción: Convierte trabajo en calor de manera irreversible</li>
              <li>Expansión libre: Gas que se expande sin realizar trabajo útil</li>
              <li>Mezcla: Sustancias que se mezclan espontáneamente</li>
              <li>Transferencia de calor: Entre cuerpos a temperaturas finitas diferentes</li>
              <li>Reacciones químicas: Procesos espontáneos exotérmicos</li>
              <li>Histéresis: Comportamiento no elástico de materiales</li>
            </ul>
          </div>
        </Concept>

        <Concept title="Entropía Generada" variant="detailed">
          <div className="detailed-content">
            <p>
              En cualquier proceso irreversible se genera entropía. Esta entropía generada 
              (S<sub>gen</sub>) es siempre positiva y representa la pérdida de capacidad de 
              realizar trabajo útil.
            </p>
            <p>
              Mientras más irreversible sea un proceso, mayor será la generación de entropía 
              y menor será la eficiencia del proceso.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <TheorySection title="La Flecha del Tiempo" variant="theoretical">
        <Concept title="Asimetría Temporal" variant="detailed">
          <div className="detailed-content">
            <p>
              La segunda ley introduce una asimetría fundamental en el tiempo. Mientras las leyes 
              de la mecánica son simétricas respecto al tiempo (funcionan igual hacia adelante o 
              hacia atrás), la segunda ley establece una dirección preferida.
            </p>
            <p>
              Podemos distinguir el pasado del futuro observando el aumento de entropía: el futuro 
              es la dirección en la que la entropía aumenta.
            </p>
          </div>
        </Concept>

        <Concept title="Paradoja de Loschmidt" variant="detailed">
          <div className="detailed-content">
            <p>
              Si las leyes microscópicas de la física son reversibles, ¿cómo surge la 
              irreversibilidad macroscópica? Esta aparente contradicción se conoce como 
              la paradoja de Loschmidt.
            </p>
            <p>
              La resolución está en el enorme número de partículas: aunque cada colisión 
              individual es reversible, la probabilidad de que trillones de partículas 
              reviertan espontáneamente a un estado de baja entropía es prácticamente cero.
            </p>
          </div>
        </Concept>
      </TheorySection>

      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>Ingeniería y Tecnología</h3>
          <ul>
            <li>
              🔥 Centrales térmicas: La segunda ley limita la eficiencia máxima. Una central 
              con vapor a 550°C (823 K) y condensador a 30°C (303 K) tiene eficiencia máxima 
              teórica de 63%, pero en la práctica alcanza 40-45% debido a irreversibilidades.
            </li>
            <li>
              ❄️ Refrigeración: Los refrigeradores y aire acondicionado requieren trabajo 
              externo para transferir calor de frío a caliente, cumpliendo la segunda ley. 
              El COP (coeficiente de rendimiento) está limitado por las temperaturas de operación.
            </li>
            <li>
              🚗 Motores de combustión: La eficiencia de motores Otto y Diesel está limitada 
              por la segunda ley. Motores modernos alcanzan 25-35% de eficiencia, muy por 
              debajo del límite teórico de Carnot debido a múltiples irreversibilidades.
            </li>
            <li>
              ⚡ Baterías y pilas de combustible: La eficiencia de conversión energética está 
              limitada. Las pilas de combustible pueden alcanzar 60% de eficiencia, superior 
              a motores térmicos porque no están limitadas por el ciclo de Carnot.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Procesos Industriales</h3>
          <ul>
            <li>
              🏭 Destilación: La separación de mezclas requiere trabajo debido a que la mezcla 
              espontánea aumenta la entropía. Las columnas de destilación son grandes consumidoras 
              de energía por esta razón.
            </li>
            <li>
              🧊 Criogenia: Alcanzar temperaturas cercanas al cero absoluto requiere trabajo 
              exponencialmente creciente debido a la segunda ley. Enfriar a 1 K requiere mucha 
              más energía por grado que enfriar de 300 a 299 K.
            </li>
            <li>
              💧 Desalinización: Separar sal del agua de mar requiere energía mínima determinada 
              por la segunda ley. Los procesos reales consumen 2-3 veces el mínimo teórico.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Biología y Vida</h3>
          <ul>
            <li>
              🌱 Fotosíntesis: Las plantas mantienen estructura ordenada (baja entropía) a 
              expensas de aumentar la entropía del entorno, cumpliendo la segunda ley globalmente.
            </li>
            <li>
              🧬 Metabolismo: Los organismos vivos son sistemas fuera de equilibrio que mantienen 
              orden interno aumentando la entropía del universo mediante el metabolismo.
            </li>
            <li>
              🍖 Conservación de alimentos: La descomposición es un proceso de aumento de entropía. 
              La refrigeración y conservantes ralentizan este proceso inevitable.
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>Información y Computación</h3>
          <ul>
            <li>
              💾 Borrado de información: El borrado de información genera entropía (principio de 
              Landauer). Los computadores modernos disipan calor precisamente por esta razón.
            </li>
            <li>
              🖥️ Límites de la computación: La segunda ley impone límites fundamentales a la 
              eficiencia energética de los computadores. La computación reversible busca minimizar 
              este límite.
            </li>
          </ul>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El Nacimiento de la Segunda Ley
        </h2>
        
        <div className="theory-subsection">
          <h3>Sadi Carnot - El Padre de la Termodinámica (1824)</h3>
          <p>
            Nicolas Léonard Sadi Carnot publicó "Reflexiones sobre la potencia motriz del fuego" 
            en 1824, estableciendo los fundamentos de la segunda ley sin conocer aún el concepto 
            de entropía. Carnot demostró que la eficiencia máxima de una máquina térmica depende 
            solo de las temperaturas de los depósitos térmicos.
          </p>
          <p>
            Trágicamente, Carnot murió de cólera a los 36 años en 1832. Sus manuscritos fueron 
            quemados por riesgo de contagio, y su trabajo permaneció casi olvidado durante décadas. 
            Su teoría se basaba en la teoría calórica (incorrecta), pero sus conclusiones sobre 
            eficiencia eran correctas.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Rudolf Clausius - Formulación Moderna (1850-1865)</h3>
          <p>
            En 1850, Rudolf Clausius publicó la primera formulación moderna de la segunda ley: 
            "El calor no puede pasar por sí solo de un cuerpo más frío a uno más caliente". 
            Esta afirmación simple tiene profundas consecuencias.
          </p>
          <p>
            En 1865, Clausius acuñó la palabra "entropía" (del griego "transformación") y estableció 
            su famoso enunciado: "La energía del universo es constante. La entropía del universo 
            tiende a un máximo."
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Lord Kelvin (William Thomson) - Formulación Alternativa (1851)</h3>
          <p>
            Independientemente de Clausius, William Thomson (Lord Kelvin) formuló la segunda ley 
            en términos de la imposibilidad de convertir completamente calor en trabajo en un 
            proceso cíclico.
          </p>
          <p>
            Kelvin también predijo la "muerte térmica del universo": si la entropía siempre aumenta, 
            eventualmente el universo alcanzará un estado de máxima entropía donde no será posible 
            ningún cambio - todo estará a la misma temperatura.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>Ludwig Boltzmann - Interpretación Estadística (1877)</h3>
          <p>
            Boltzmann proporcionó la interpretación microscópica de la segunda ley mediante la 
            mecánica estadística. Su famosa fórmula S = k ln W relaciona la entropía con el 
            número de microestados (W).
          </p>
          <p>
            Esta interpretación resolvió la aparente contradicción entre las leyes reversibles de 
            la mecánica y la irreversibilidad macroscópica: la segunda ley es estadística, no absoluta.
          </p>
        </div>

        <div className="theory-section-highlight">
          <h4>🎯 Controversia y Resistencia</h4>
          <p>
            La segunda ley fue muy controvertida en el siglo XIX. Muchos científicos la rechazaron 
            por parecer demasiado pesimista (muerte térmica del universo) o por conflicto aparente 
            con la evolución biológica (orden emergente).
          </p>
          <p>
            Boltzmann sufrió ataques constantes a su interpretación estadística, especialmente de 
            Ernst Mach. La depresión resultante contribuyó a su suicidio en 1906. Irónicamente, 
            sus ideas fueron reivindicadas poco después.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🎱 El Demonio de Maxwell (1867)</h3>
          <p>
            James Clerk Maxwell propuso una paradoja ingeniosa: imagine un pequeño "demonio" 
            que puede abrir/cerrar una puerta entre dos compartimentos de gas. Si el demonio 
            solo deja pasar moléculas rápidas en una dirección y lentas en otra, podría separar 
            el gas caliente del frío sin trabajo, ¡violando la segunda ley!
          </p>
          <p>
            La resolución llegó 115 años después: el demonio necesita información para decidir 
            qué moléculas dejar pasar. Borrar esta información genera entropía, restaurando la 
            segunda ley. Este resultado conectó termodinámica con teoría de la información.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⏰ El Café que Nunca se Mezcla Solo</h3>
          <p>
            Si agregas leche al café, se mezclan espontáneamente (entropía aumenta). ¿Por qué 
            nunca ves el proceso inverso: leche y café separándose espontáneamente?
          </p>
          <p>
            Matemáticamente, SI es posible por fluctuaciones estadísticas. Pero la probabilidad 
            es 1 en 10^(10^23) aproximadamente. Si observaras un café cada nanosegundo desde el 
            Big Bang, aún no habrías visto este evento ni una vez. ¡La segunda ley es poderosa!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ El Récord de Carnot que Nadie Puede Romper</h3>
          <p>
            La eficiencia de Carnot es un límite absoluto. Ninguna ingeniería, por avanzada que 
            sea, puede superarlo. Es como el límite de velocidad de la luz, pero para eficiencia 
            térmica.
          </p>
          <p>
            Las mejores centrales térmicas del mundo (ciclo combinado) alcanzan 62% de eficiencia, 
            cuando el límite de Carnot para sus temperaturas es ~80%. Ese 18% restante es 
            inalcanzable por la física fundamental.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧊 El Frío que Cuesta Más que el Calor</h3>
          <p>
            Enfriar algo requiere más energía que calentarlo la misma cantidad, debido a la 
            segunda ley. Por eso los aires acondicionados consumen tanta electricidad mientras 
            que los calefactores son relativamente eficientes.
          </p>
          <p>
            Alcanzar temperaturas criogénicas (cerca del cero absoluto) requiere energía 
            exponencialmente creciente. Enfriar 1 gramo de helio de 4 K a 3 K requiere más 
            energía que enfriarlo de 300 K a 4 K.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔥 La Paradoja del Huevo</h3>
          <p>
            Si grabas un video de un huevo cayendo y rompiéndose, inmediatamente sabes si lo 
            reproduces hacia adelante o atrás. ¿Por qué? La segunda ley: el huevo roto tiene 
            mayor entropía que el entero.
          </p>
          <p>
            Sin embargo, a nivel microscópico, cada colisión molecular es reversible. La flecha 
            del tiempo emerge solo macroscópicamente del comportamiento estadístico de trillones 
            de moléculas.
          </p>
        </div>

        <div className="theory-section-highlight">
          <h4>💡 La Segunda Ley y el Destino del Universo</h4>
          <p>
            Si la entropía siempre aumenta, el universo eventualmente alcanzará un estado de 
            máxima entropía llamado "muerte térmica": temperatura uniforme en todas partes, 
            sin gradientes para impulsar procesos.
          </p>
          <p>
            Esto ocurriría en aproximadamente 10^100 años. Para entonces, todas las estrellas 
            habrán muerto, los agujeros negros se habrán evaporado, y el universo será un mar 
            uniforme de radiación de fondo. ¡La segunda ley es la ley más deprimente de la física!
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🎓 El Epitafio de Boltzmann</h3>
          <p>
            En la tumba de Ludwig Boltzmann en Viena está grabada su famosa ecuación: S = k log W. 
            Esta es probablemente la única tumba en el mundo con una ecuación científica fundamental.
          </p>
          <p>
            Irónicamente, Boltzmann nunca usó esta forma exacta de la ecuación en sus trabajos 
            publicados. Fue Max Planck quien la escribió en esta forma elegante. La constante k 
            ahora se llama "constante de Boltzmann" en su honor.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌍 Vida vs Segunda Ley</h3>
          <p>
            Algunos creacionistas argumentaron que la vida viola la segunda ley porque crea orden 
            (reduce entropía localmente). Este es un malentendido: la Tierra no es un sistema 
            aislado.
          </p>
          <p>
            El Sol bombea energía de baja entropía (luz visible) a la Tierra. La biosfera la usa 
            y devuelve energía de alta entropía (calor infrarrojo). El balance neto: entropía 
            del universo aumenta enormemente, satisfaciendo la segunda ley.
          </p>
        </div>
      </div>

      <div className="theory-summary-section">
        <h2>
          <span>📚</span> Resumen
        </h2>
        
        <div className="theory-section-highlight">
          <h4>🎯 Conceptos Clave</h4>
          <ul>
            <li>
              La segunda ley de la termodinámica establece que la entropía del universo nunca 
              disminuye en procesos reales (ΔS<sub>universo</sub> ≥ 0)
            </li>
            <li>
              La entropía es la magnitud que cuantifica el desorden, la dispersión de energía 
              y la irreversibilidad de los procesos naturales
            </li>
            <li>
              Todos los procesos naturales son irreversibles y generan entropía, estableciendo 
              una dirección preferida en el tiempo (flecha del tiempo)
            </li>
            <li>
              La segunda ley limita la eficiencia de las máquinas térmicas. El ciclo de Carnot 
              representa la máxima eficiencia teórica posible
            </li>
            <li>
              La segunda ley tiene múltiples formulaciones equivalentes: enunciados de Clausius, 
              Kelvin-Planck y el principio de aumento de entropía
            </li>
          </ul>
        </div>

        <div className="theory-subsection">
          <h3>💡 Implicaciones Fundamentales</h3>
          <p>
            La segunda ley es única entre las leyes de la física por introducir una asimetría 
            temporal. Mientras las leyes de la mecánica, electromagnetismo y gravedad son reversibles 
            en el tiempo, la segunda ley establece que el pasado y el futuro son distinguibles: 
            el futuro es la dirección en que la entropía aumenta.
          </p>
          <p>
            Esta ley impone limitaciones fundamentales en todos los procesos de conversión de energía, 
            desde motores y refrigeradores hasta procesos biológicos y computación. No es una limitación 
            tecnológica que pueda superarse con ingeniería avanzada, sino un principio fundamental de 
            la naturaleza.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Relevancia Científica</h3>
          <p>
            La segunda ley es considerada por muchos físicos como la ley más fundamental de la 
            naturaleza. Arthur Eddington escribió: "Si tu teoría contradice la segunda ley de la 
            termodinámica, no tengo esperanzas para ti; solo puede colapsar en la más profunda 
            humillación."
          </p>
          <p>
            Su alcance se extiende desde la ingeniería práctica hasta cuestiones cosmológicas sobre 
            el destino del universo, pasando por la biología, la química, la teoría de la información 
            y la computación cuántica. Es un puente entre lo microscópico y lo macroscópico, entre 
            lo reversible y lo irreversible, entre la física y la filosofía del tiempo.
          </p>
        </div>
      </div>
    </>
  );
};

export default EntropiaYSegundaLeyTheory;
