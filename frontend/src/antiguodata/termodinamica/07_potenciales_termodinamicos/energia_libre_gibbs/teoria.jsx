import { TheorySection, Concept, Formula, Important } from '../../../../components/TheoryV2';
import { definitions as energia_libre_gibbsDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Energía Libre de Gibbs",
  descripcion: "Potencial termodinámico que determina la espontaneidad de procesos a temperatura y presión constantes. Comprende la relación entre entalpía, entropía y temperatura, y su aplicación en predicción de reacciones espontáneas y trabajo útil máximo.",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const EnergiaLibreGibbsTheory = ({ exercises }) => {
  return (
    <>
      <TheorySection title="¿Qué es la Energía Libre de Gibbs?">
        <Concept title="Definición">
          <p>
            La energía libre de Gibbs (G) es un potencial termodinámico que mide la cantidad 
            máxima de trabajo útil que se puede obtener de un sistema a temperatura y presión constantes. 
            Es fundamental para determinar si un proceso es espontáneo.
          </p>
          
          <p>
            Nombrada en honor a Josiah Willard Gibbs, esta función combina entalpía y entropía para 
            predecir la dirección de los procesos químicos y físicos.
          </p>

          <Important>
            <p>Criterio de Espontaneidad (T, P constantes):</p>
            <ul>
              <li>ΔG &lt; 0: Proceso espontáneo (ocurre naturalmente)</li>
              <li>ΔG = 0: Sistema en equilibrio</li>
              <li>ΔG &gt; 0: Proceso no espontáneo (requiere energía externa)</li>
            </ul>
          </Important>
        </Concept>

        <Concept title="Importancia">
          <p>
            La energía libre de Gibbs es el potencial termodinámico más utilizado en química y bioquímica 
            porque la mayoría de los procesos ocurren a temperatura y presión constantes (condiciones 
            atmosféricas).
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Definición Matemática">
        <Concept title="Relación Fundamental">
          <p>
            La energía libre de Gibbs se define como:
          </p>

          <Formula 
            expression={String.raw`G = H - TS`}
            description="Definición de energía libre de Gibbs"
            calculatorId="energia_libre_gibbs-grupo-1"
            definitions={energia_libre_gibbsDefinitions}
            exercises={exercises}
            complementary={[
              { description: "Entalpía", expression: String.raw`H = G + TS` },
              { description: "Entropía", expression: String.raw`S = \frac{H - G}{T}` }
            ]}
          />

          <p>Donde:</p>
          <ul>
            <li>G: Energía libre de Gibbs (J)</li>
            <li>H: Entalpía del sistema (J)</li>
            <li>T: Temperatura absoluta (K)</li>
            <li>S: Entropía del sistema (J/K)</li>
          </ul>

          <p>
            El término TS representa la energía no disponible para realizar trabajo útil debido al 
            desorden del sistema.
          </p>
        </Concept>

        <Concept title="Cambio de Energía Libre">
          <p>
            El cambio de energía libre de Gibbs en un proceso es:
          </p>

          <Formula 
            expression={String.raw`\Delta G = \Delta H - T\Delta S`}
            description="Cambio de energía libre de Gibbs"
            calculatorId="energia_libre_gibbs-grupo-1"
            definitions={energia_libre_gibbsDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>ΔG: Cambio de energía libre de Gibbs (J)</li>
            <li>ΔH: Cambio de entalpía (J)</li>
            <li>T: Temperatura absoluta (K)</li>
            <li>ΔS: Cambio de entropía (J/K)</li>
          </ul>

          <p>
            Esta ecuación muestra la competencia entre factores entálpicos (ΔH) y entrópicos (TΔS) 
            en determinar la espontaneidad.
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Interpretación y Análisis">
        <Concept title="Análisis de Casos">
          <p>Caso 1: ΔH &lt; 0 y ΔS &gt; 0</p>
          <p>Proceso exotérmico que aumenta el desorden → ΔG &lt; 0 siempre (espontáneo a cualquier T)</p>

          <p>Caso 2: ΔH &gt; 0 y ΔS &lt; 0</p>
          <p>Proceso endotérmico que disminuye el desorden → ΔG &gt; 0 siempre (no espontáneo)</p>

          <p>Caso 3: ΔH &lt; 0 y ΔS &lt; 0</p>
          <p>Espontáneo a bajas temperaturas (domina ΔH), no espontáneo a altas T (domina TΔS)</p>

          <p>Caso 4: ΔH &gt; 0 y ΔS &gt; 0</p>
          <p>No espontáneo a bajas T, espontáneo a altas temperaturas (domina TΔS)</p>
        </Concept>

        <Concept title="Temperatura de Equilibrio">
          <p>
            Cuando ΔG = 0, el sistema está en equilibrio. La temperatura de equilibrio es:
          </p>
          <p style={{textAlign: 'center', fontSize: '1.1em', margin: '1em 0'}}>
            T<sub>eq</sub> = ΔH / ΔS
          </p>
        </Concept>
      </TheorySection>

      <TheorySection title="Trabajo Máximo Útil">
        <Concept title="Relación con el Trabajo">
          <p>
            El cambio de energía libre de Gibbs representa el trabajo máximo útil (no PV) que se puede 
            obtener de un proceso a T y P constantes:
          </p>

          <Formula 
            expression={String.raw`W_{\text{max}} = -\Delta G`}
            description="Trabajo máximo útil"
            calculatorId="energia_libre_gibbs-grupo-1"
            definitions={energia_libre_gibbsDefinitions}
            exercises={exercises}
          />

          <p>Donde:</p>
          <ul>
            <li>W<sub>max</sub>: Trabajo máximo útil disponible (J)</li>
            <li>ΔG: Cambio de energía libre de Gibbs (J)</li>
          </ul>

          <p>
            Este trabajo excluye el trabajo de expansión PΔV, por lo que representa trabajo eléctrico, 
            mecánico u otras formas útiles de energía.
          </p>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2>
          <span>🌍</span> Aplicaciones en la vida real
        </h2>
        
        <div className="theory-subsection">
          <h3>🔋 Baterías y pilas eléctricas</h3>
          <p>
            Las baterías convierten energía química en eléctrica mediante reacciones espontáneas (ΔG &lt; 0). 
            Una pila alcalina AA tiene ΔG° = -238 kJ/mol para la reacción Zn + 2MnO₂ → ZnO + Mn₂O₃. El voltaje 
            de la celda se relaciona directamente con ΔG: E° = -ΔG°/nF, donde n = 2 electrones y F = 96485 C/mol. 
            Esto da E° = 1.5 V, el voltaje nominal de una pila AA. Una batería de ion-litio de smartphone (3000 mAh, 3.7 V) 
            almacena ΔG = -40 kJ, suficiente para mantener el teléfono encendido 10 horas. La degradación de la batería 
            ocurre cuando reacciones secundarias con ΔG &lt; 0 (pero indeseadas) consumen material activo. Los ingenieros 
            diseñan electrodos minimizando ΔG de reacciones parásitas para maximizar ciclos de vida (500-1000 recargas).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧬 Metabolismo celular y ATP</h3>
          <p>
            El ATP (adenosín trifosfato) es la "moneda energética" celular. La hidrólisis ATP → ADP + Pi libera 
            ΔG° = -30.5 kJ/mol en condiciones estándar, pero ΔG = -50 kJ/mol en condiciones celulares (pH 7, 
            concentraciones fisiológicas). Este ΔG negativo impulsa reacciones metabólicas no espontáneas mediante 
            acoplamiento. Por ejemplo, la síntesis de glucosa-6-fosfato requiere ΔG = +13.8 kJ/mol, pero acoplada 
            con hidrólisis de ATP: Glucosa + ATP → Glucosa-6-P + ADP, ΔG_total = -16.7 kJ/mol (espontánea). 
            Un humano adulto sintetiza y consume ~65 kg de ATP diariamente, cada molécula reciclándose ~500 veces/día. 
            La energía de Gibbs gobierna todos los procesos bioquímicos: contracción muscular, síntesis de proteínas, 
            transporte activo de iones.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚗️ Síntesis industrial de amoníaco (Proceso Haber-Bosch)</h3>
          <p>
            La síntesis de amoníaco N₂ + 3H₂ ⇌ 2NH₃ tiene ΔH° = -92 kJ/mol (exotérmica) y ΔS° = -199 J/(mol·K) 
            (disminuye desorden: 4 moléculas → 2). Usando ΔG = ΔH - TΔS, a 25°C: ΔG° = -92000 - 298×(-199) = -33 kJ/mol 
            (espontánea). Sin embargo, a 400°C (temperatura industrial): ΔG = -92000 - 673×(-199) = +42 kJ/mol 
            (no espontánea). Paradoja: ¿por qué usar 400°C si ΔG &gt; 0? Porque la cinética es extremadamente lenta 
            a bajas T. La solución: alta presión (150-300 bar) desplaza el equilibrio hacia productos (Le Chatelier), 
            y catalizador de hierro acelera la reacción. El proceso produce 150 millones de toneladas de NH₃/año, 
            base del 50% de alimentos mundiales (fertilizantes). La energía de Gibbs dicta las condiciones: baja T 
            favorece termodinámica, alta T favorece cinética.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧊 Formación de hielo y punto de fusión</h3>
          <p>
            A 0°C y 1 atm, hielo y agua líquida coexisten en equilibrio: ΔG = 0. Para la fusión H₂O(s) → H₂O(l), 
            ΔH = +6.01 kJ/mol (endotérmica) y ΔS = +22.0 J/(mol·K) (aumenta desorden). A T = 273.15 K: 
            ΔG = 6010 - 273.15×22.0 = 0 J/mol (equilibrio perfecto). Por debajo de 0°C, ΔG &gt; 0 (agua favorece 
            congelarse); por encima, ΔG &lt; 0 (hielo favorece fundirse). La sal en carreteras disminuye el punto de 
            fusión porque altera las concentraciones, cambiando ΔG. Con NaCl al 23% (eutéctico), el hielo funde a -21°C. 
            Los patinadores sobre hielo crean una capa líquida por presión: aumentar P a 50 MPa disminuye T_fusión a -0.5°C, 
            pero principalmente es fricción (calor) lo que derrite el hielo. La energía de Gibbs explica por qué los 
            glaciares fluyen: a alta presión en su base, ΔG(fusión) &lt; 0 incluso a -2°C.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏭 Captura y almacenamiento de CO₂</h3>
          <p>
            La captura de CO₂ atmosférico mediante reacción con hidróxido de calcio: CO₂(g) + Ca(OH)₂(s) → CaCO₃(s) + H₂O 
            tiene ΔG° = -64 kJ/mol (espontánea). Esta reacción se usa en tecnologías de "aire directo" (DAC) para 
            combatir cambio climático. Sin embargo, regenerar el absorbente (liberar CO₂ para almacenamiento): 
            CaCO₃ → CaO + CO₂ tiene ΔG° = +131 kJ/mol a 25°C (no espontánea). La temperatura de equilibrio 
            T_eq = ΔH/ΔS = 178000/160 = 1113 K (840°C). Por debajo de 840°C, ΔG &gt; 0 (CaCO₃ estable); por encima, 
            ΔG &lt; 0 (descompone). Las plantas DAC operan a 900°C para regeneración, consumiendo ~2 GJ/ton CO₂. 
            Un sistema experimental captura 1 ton CO₂/día pero requiere 550 kWh eléctricos, haciendo la tecnología 
            económicamente marginal (costo: $600/ton vs $50/ton emisiones evitadas). La energía de Gibbs cuantifica 
            el desafío termodinámico: revertir emisiones de CO₂ requiere enorme energía.
          </p>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia: El desarrollo de la energía libre
        </h2>
        
        <div className="theory-subsection">
          <h3>⚙️ Josiah Willard Gibbs y la función G (1873-1878)</h3>
          <p>
            Josiah Willard Gibbs, profesor de física matemática en Yale, publicó "On the Equilibrium of Heterogeneous 
            Substances" (1873-1878), obra monumental de 300 páginas que introdujo la energía libre G = H - TS. 
            Gibbs demostró que a temperatura y presión constantes, los sistemas evolucionan minimizando G, estableciendo 
            el criterio ΔG &lt; 0 para espontaneidad. Su trabajo fue tan avanzado que permaneció virtualmente ignorado 
            durante una década: publicado en oscuras "Transactions of the Connecticut Academy", pocos científicos 
            lo leyeron. James Clerk Maxwell fue el primero en reconocer su genialidad, construyendo modelos 3D de 
            superficies termodinámicas de Gibbs. Recién cuando Wilhelm Ostwald tradujo la obra al alemán en 1892, 
            la comunidad científica reconoció que Gibbs había revolucionado la termodinámica. Ironía histórica: Gibbs 
            nunca recibió el Premio Nobel (creado en 1901, Gibbs murió en 1903), pero su energía libre es hoy la 
            herramienta más usada en química.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔬 Hermann von Helmholtz y la energía libre A (1882)</h3>
          <p>
            Paralelamente a Gibbs, Hermann von Helmholtz desarrolló el concepto de "energía libre" (Freie Energie) 
            en 1882, aunque se refería a lo que hoy llamamos energía de Helmholtz A = U - TS (válida a T,V constantes). 
            Helmholtz demostró que el trabajo máximo no-PV disponible de un sistema a temperatura constante es -ΔA. 
            Aplicó esto a pilas electroquímicas, mostrando que el voltaje máximo depende de ΔA, no de ΔU. Su motivación 
            era práctica: diseñar baterías más eficientes. Helmholtz distinguió entre "energía libre" (disponible para 
            trabajo) y "energía ligada" (TS, no disponible). Aunque precedió a Gibbs en popularizar el término "energía libre", 
            la función de Gibbs G (no A) se volvió dominante en química porque P,T constantes son más comunes que V,T. 
            Hoy diferenciamos: energía de Helmholtz A (sistemas cerrados) vs energía de Gibbs G (sistemas abiertos).
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Walther Nernst y la tercera ley (1906)</h3>
          <p>
            Walther Nernst ganó el Nobel de Química 1920 por su tercera ley de la termodinámica (1906): "La entropía 
            de un cristal perfecto a 0 K es cero". Esto permitió calcular entropías absolutas, y consecuentemente, 
            valores absolutos de energía libre de Gibbs. Antes de Nernst, solo se conocían ΔG de reacciones, no G absolutas. 
            La tercera ley establece S(0 K) = 0, permitiendo integrar S(T) = ∫(Cp/T)dT desde 0 K hasta T. Con S(T) y 
            H(T) conocidos, G(T) = H(T) - TS(T) se puede calcular absolutamente. Nernst midió capacidades caloríficas 
            a temperaturas criogénicas (hasta -250°C) para cientos de sustancias. Sus tablas de ΔG°_f se convirtieron 
            en estándar para predecir reacciones químicas. La industria química moderna depende de estas tablas: diseñar 
            procesos sin conocer ΔG sería como navegar sin brújula. Nernst también inventó la lámpara de filamento de 
            metal (competencia para Edison), pero su legado termodinámico fue más duradero.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧪 Gilbert Lewis y la actividad química (1923)</h3>
          <p>
            Gilbert Newton Lewis refinó la energía de Gibbs introduciendo "actividad" para soluciones no ideales. 
            En su tratado "Thermodynamics and the Free Energy of Chemical Substances" (1923, con Merle Randall), 
            Lewis generalizó ΔG = ΔG° + RT ln(Q) donde Q es el cociente de reacción con actividades, no concentraciones. 
            Para soluciones diluidas, actividad ≈ concentración, pero en soluciones concentradas o electrolitos, las 
            desviaciones son enormes. Lewis definió la "fugacidad" para gases reales, análoga a presión para gases ideales. 
            También introdujo la notación moderna: G° (energía libre estándar), ln en lugar de log, y la constante K_eq. 
            Su libro se convirtió en la biblia de termodinámica química durante 50 años. Lewis fue nominado 41 veces al 
            Nobel pero nunca lo ganó (controversia: murió en su laboratorio en 1946, posible suicidio tras reunión con 
            Irving Langmuir, quien sí ganó el Nobel). Ironía: su notación G se usa universalmente, pero el crédito va a Gibbs.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏆 Ilya Prigogine y sistemas alejados del equilibrio (1977)</h3>
          <p>
            Ilya Prigogine ganó el Nobel de Química 1977 por extender la termodinámica de Gibbs a sistemas alejados 
            del equilibrio. Gibbs asumió sistemas cerrados cerca del equilibrio donde ΔG determina dirección. Prigogine 
            estudió sistemas abiertos (intercambian materia/energía) lejos del equilibrio: células vivas, reacciones 
            oscilantes (Belousov-Zhabotinsky), convección de Bénard. En estos sistemas, minimizar G localmente no garantiza 
            comportamiento global: emergen estructuras disipativas (orden desde caos). Prigogine demostró que sistemas 
            alejados del equilibrio minimizan "producción de entropía" (dS/dt), no G. Su trabajo explicó fenómenos 
            biológicos: ¿cómo surge orden (ΔS &lt; 0 local) si la segunda ley dice ΔS &gt; 0? Respuesta: sistemas vivos 
            no están en equilibrio termodinámico; exportan entropía al ambiente (ΔS_universo &gt; 0 siempre). Prigogine 
            unificó termodinámica, biología y complejidad, mostrando que la energía de Gibbs es solo el comienzo.
          </p>
        </div>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>
        
        <div className="theory-subsection">
          <h3>🤝 El aislamiento de Gibbs y Maxwell</h3>
          <p>
            Cuando James Clerk Maxwell leyó el trabajo de Gibbs sobre energía libre (1875), quedó tan impresionado que 
            construyó con sus propias manos modelos tridimensionales de yeso de las superficies termodinámicas G(P,T) 
            descritas por Gibbs. Maxwell envió estos modelos por correo desde Cambridge a Yale como regalo para Gibbs. 
            Gibbs, hombre extremadamente reservado, respondió con una carta de una frase: "Los modelos son hermosos". 
            Maxwell era el físico más famoso del mundo (electromagnetismo); Gibbs era virtualmente desconocido, publicando 
            en revistas oscuras de Connecticut. Maxwell promocionó el trabajo de Gibbs incansablemente, pero murió en 1879 
            a los 48 años. Gibbs sobrevivió hasta 1903, pero nunca buscó reconocimiento. Curiosidad: los modelos originales 
            de Maxwell se conservan en Yale; son obras de arte científico. La energía libre de Gibbs podría haberse perdido 
            en la oscuridad sin la intercesión de Maxwell.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💀 La muerte misteriosa de Gilbert Lewis (1946)</h3>
          <p>
            Gilbert Newton Lewis, quien refinó la teoría de energía libre de Gibbs, murió en circunstancias misteriosas 
            el 23 de marzo de 1946 en su laboratorio de Berkeley. Esa mañana, había almorzado con Irving Langmuir, su 
            rival de toda la vida. Lewis había sido nominado 41 veces al Nobel pero nunca ganó; Langmuir ganó en 1932, 
            causando amargura en Lewis. Después del almuerzo (testigos dicen que fue tenso), Lewis regresó a su laboratorio 
            y fue encontrado muerto una hora después, rodeado de vapores de cianuro de hidrógeno. El certificado de defunción 
            dice "ataque cardíaco", pero muchos colegas creen que fue suicidio (HCN es común en laboratorios de química). 
            Ironía trágica: Lewis dedicó su vida a estudiar equilibrio químico, pero murió en un estado de profundo 
            desequilibrio emocional. Su libro "Thermodynamics" (1923) permanece como texto clásico, pero su nombre es 
            menos conocido que Gibbs, a quien Lewis idolatraba.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧊 El diamante que debería ser grafito</h3>
          <p>
            A 25°C y 1 atm, el grafito tiene menor energía libre de Gibbs que el diamante: ΔG(grafito→diamante) = +2.9 kJ/mol. 
            Esto significa que termodinámicamente, todos los diamantes deberían convertirse espontáneamente en grafito 
            (ΔG &lt; 0 para la reacción inversa). Sin embargo, las joyas de diamante son "eternas" porque la barrera 
            cinética de activación es ~600 kJ/mol, haciendo la conversión imperceptiblemente lenta a temperatura ambiente 
            (tiempo de vida media: ~10^30 años). Este es un ejemplo clásico de distinción entre termodinámica (¿qué debería 
            pasar según ΔG?) y cinética (¿qué tan rápido pasa realmente?). Diamantes sintéticos industriales se producen 
            a 1500°C y 5 GPa, condiciones donde ΔG(grafito→diamante) &lt; 0. Cuando se enfrían rápidamente, quedan 
            "congelados" en estado metastable. Curiosidad macabra: empresas como LifeGem convierten cenizas humanas en 
            diamantes (carbono puro, P y T extremas), demostrando que incluso nuestros cuerpos pueden convertirse en 
            estados de alta energía libre de Gibbs.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏔️ El hielo que arde: clatrato de metano</h3>
          <p>
            En fondos oceánicos profundos (P &gt; 50 bar, T &lt; 10°C), existe una sustancia paradójica: hielo que arde. 
            Los clatratos de metano son estructuras de hielo que atrapan moléculas de CH₄. A estas condiciones, el clatrato 
            tiene ΔG menor que agua líquida + metano gaseoso separados: CH₄(g) + 6H₂O(l) → CH₄·6H₂O(s), ΔG &lt; 0. 
            Si extraes un trozo de clatrato y lo llevas a superficie, aumenta T y disminuye P, invirtiendo el signo de ΔG. 
            El clatrato se descompone violentamente, liberando metano que puedes encender con un fósforo: hielo ardiendo. 
            Se estima que los océanos contienen ~1800 Gt de carbono en clatratos, el doble de todas las reservas de combustibles 
            fósiles. El calentamiento global podría desestabilizar estos depósitos (cambiar ΔG), liberando metano masivamente 
            (potente gas invernadero), creando retroalimentación catastrófica. Algunos científicos especulan que la extinción 
            Pérmica (250 millones de años, 96% especies extintas) fue causada por liberación de clatratos. La energía de Gibbs 
            del clatrato es una bomba de tiempo climática.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌡️ El refrigerador que usa luz solar (absorbedor)</h3>
          <p>
            Los refrigeradores de absorción operan sin electricidad usando la energía libre de Gibbs de reacciones químicas. 
            Usan NH₃/H₂O: a alta T (100°C, calentada por gas o sol), NH₃(l) → NH₃(g) tiene ΔG &lt; 0 (amoníaco evapora). 
            Este NH₃ gaseoso se condensa (libera calor al ambiente), luego evapora en el evaporador (absorbe calor del interior, 
            enfriando). Finalmente se reabsorbe en agua a baja T, cerrando el ciclo. La genialidad: usa calor de desecho (ΔG &lt; 0 
            a 100°C) para impulsar refrigeración (ΔG &lt; 0 en dirección fría). Einstein y Leo Szilard patentaron un refrigerador 
            de absorción en 1926 (Patente US 1,781,541) sin partes móviles, motivados por reportes de fuga de SO₂ tóxico de 
            refrigeradores compresores que mataron familias. Su diseño nunca fue comercializado (los compresores eléctricos ganaron), 
            pero hoy vive en autocaravanas/RVs que usan propano. Irónico: Einstein, genio de relatividad, también aplicó energía 
            libre de Gibbs a electrodomésticos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🧪 La reacción de Belousov-Zhabotinsky: química oscilante</h3>
          <p>
            En 1951, el químico ruso Boris Belousov descubrió una reacción química que oscila entre amarillo y transparente 
            cada 60 segundos, violando aparentemente ΔG: si la reacción A→B tiene ΔG &lt; 0, debería proceder completamente, 
            no oscilar. Belousov envió su artículo a revistas científicas; todos lo rechazaron diciendo "imposible, viola 
            segunda ley". Desesperado, publicó en "Colección de Resúmenes sobre Medicina de Radiación" (1959), revista oscura. 
            En 1961, Anatol Zhabotinsky, estudiante graduado, reprodujo la reacción (mezcla de ácido cítrico, bromato, cerio, 
            ácido sulfúrico) y descubrió patrones espirales espectaculares al extenderla en placa Petri. ¿Cómo es posible? 
            La reacción no viola termodinámica: ΔG_total &lt; 0 siempre, pero el sistema es alejado del equilibrio con pasos 
            autocatalíticos. Las oscilaciones son transitorias; eventualmente alcanza equilibrio (ΔG = 0). Esta reacción inspiró 
            la teoría de estructuras disipativas de Prigogine. Hoy se usa en relojes químicos y modelos de ritmos biológicos. 
            Tragedia: Belousov murió en 1970 sin reconocimiento; Zhabotinsky recibió el Lenin Prize póstumo para Belousov (1980).
          </p>
        </div>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <ul>
          <li>
            La energía libre de Gibbs (G = H - TS) es un potencial termodinámico que mide el trabajo máximo útil 
            disponible de un sistema a temperatura y presión constantes. Es la herramienta fundamental para predecir 
            espontaneidad de procesos químicos y físicos.
          </li>
          <li>
            El criterio de espontaneidad: ΔG &lt; 0 (proceso espontáneo), ΔG = 0 (equilibrio), ΔG &gt; 0 
            (proceso no espontáneo). El cambio de energía libre es ΔG = ΔH - TΔS, mostrando la competencia entre 
            factores entálpicos y entrópicos.
          </li>
          <li>
            Análisis de casos: procesos exotérmicos con aumento de desorden son siempre espontáneos; procesos endotérmicos 
            con disminución de desorden nunca son espontáneos. Casos intermedios dependen de la temperatura: 
            T_eq = ΔH/ΔS marca la transición entre espontáneo y no espontáneo.
          </li>
          <li>
            El trabajo máximo útil disponible es W_max = -ΔG, excluyendo trabajo PΔV. Esto representa trabajo eléctrico, 
            mecánico u otras formas útiles de energía que pueden extraerse del sistema.
          </li>
          <li>
            Aplicaciones prácticas: baterías y pilas (voltaje = -ΔG/nF), metabolismo celular (ATP tiene ΔG = -50 kJ/mol), 
            síntesis industrial (proceso Haber-Bosch), cambios de fase (punto de fusión donde ΔG = 0), captura de CO₂ 
            (requiere ΔG &gt; 0, alto costo energético). La energía de Gibbs es central en química, bioquímica, ingeniería 
            y ciencias ambientales.
          </li>
        </ul>
      </div>
    </>
  );
};

export default EnergiaLibreGibbsTheory;
