import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as electroimanesDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Electroimanes",
  descripcion: "Imanes creados con electricidad: funcionamiento y aplicaciones",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const Electroimanes = ({ exercises }) => {
  return (
    <>
      <Concept title="¿Qué es un electroimán?" color="purple" icon="⚡">
        <p>
          Un electroimán es un imán temporal creado haciendo circular 
          corriente eléctrica por una bobina (cable enrollado). A diferencia de los 
          imanes permanentes, se puede encender y apagar.
        </p>
        <div className="destacado">
          <p>
            ⚡ Descubrimiento clave: Hans Christian Ørsted (1820) 
            descubrió que una corriente eléctrica genera un campo magnético. Este fue 
            el primer vínculo experimental entre electricidad y magnetismo.
          </p>
        </div>
      </Concept>

      <TheorySection title="Funcionamiento">
        <Concept title="Cómo funciona un electroimán">
          <div className="svg-container" style={{textAlign: 'center', margin: '20px 0'}}>
            <svg width="500" height="300" viewBox="0 0 500 300">
              <text x="180" y="25" fontSize="16" fontWeight="bold">Electroimán</text>
              
              {/* Núcleo de hierro */}
              <rect x="200" y="100" width="100" height="80" fill="#888" stroke="#333" strokeWidth="2"/>
              <text x="250" y="145" fontSize="12" textAnchor="middle">Núcleo de</text>
              <text x="250" y="160" fontSize="12" textAnchor="middle">hierro</text>
              
              {/* Bobina (espiras) */}
              <g stroke="#d84315" strokeWidth="3" fill="none">
                <ellipse cx="200" cy="120" rx="15" ry="20"/>
                <ellipse cx="200" cy="140" rx="15" ry="20"/>
                <ellipse cx="200" cy="160" rx="15" ry="20"/>
                
                <ellipse cx="300" cy="120" rx="15" ry="20"/>
                <ellipse cx="300" cy="140" rx="15" ry="20"/>
                <ellipse cx="300" cy="160" rx="15" ry="20"/>
              </g>
              
              {/* Cables de conexión */}
              <line x1="185" y1="120" x2="100" y2="120" stroke="#d84315" strokeWidth="3"/>
              <line x1="315" y1="120" x2="400" y2="120" stroke="#d84315" strokeWidth="3"/>
              
              {/* Batería */}
              <g transform="translate(80, 100)">
                <rect x="0" y="0" width="40" height="60" fill="none" stroke="#333" strokeWidth="2" rx="5"/>
                <line x1="10" y1="30" x2="30" y2="30" stroke="#333" strokeWidth="3"/>
                <line x1="20" y1="20" x2="20" y2="40" stroke="#333" strokeWidth="3"/>
                <text x="20" y="75" fontSize="10" textAnchor="middle">Batería</text>
              </g>
              
              {/* Interruptor */}
              <g transform="translate(380, 100)">
                <circle cx="0" cy="20" r="5" fill="#333"/>
                <circle cx="40" cy="20" r="5" fill="#333"/>
                <line x1="5" y1="20" x2="35" y2="10" stroke="#333" strokeWidth="3"/>
                <text x="20" y="45" fontSize="10" textAnchor="middle">Interruptor</text>
              </g>
              
              {/* Flechas de corriente */}
              <polygon points="140,115 150,120 140,125" fill="#d84315"/>
              <text x="150" y="110" fontSize="10" fill="#d84315">I</text>
              
              {/* Líneas de campo */}
              <g stroke="#9c27b0" strokeWidth="2" fill="none" strokeDasharray="5,5">
                <path d="M 200 100 Q 150 50, 200 30 Q 250 10, 300 30 Q 350 50, 300 100"/>
                <path d="M 200 180 Q 150 230, 200 250 Q 250 270, 300 250 Q 350 230, 300 180"/>
              </g>
              
              {/* Polos */}
              <text x="180" y="95" fontSize="14" fontWeight="bold" fill="#e57373">N</text>
              <text x="310" y="95" fontSize="14" fontWeight="bold" fill="#64b5f6">S</text>
            </svg>
          </div>

          <div className="info-box">
            <h3>Componentes de un electroimán</h3>
            <ul>
              <li>Bobina: Cable enrollado en espiras (vueltas)</li>
              <li>Núcleo: Barra de hierro dulce dentro de la bobina</li>
              <li>Fuente de corriente: Batería o fuente de alimentación</li>
              <li>Interruptor: Para encender/apagar el electroimán</li>
            </ul>
          </div>

          <Important>
            <p>
              🔑 Principio: Cuando la corriente circula por la bobina, 
              cada espira genera un pequeño campo magnético. Todos estos campos se suman, 
              creando un campo magnético intenso. El núcleo de hierro amplifica este efecto.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      <TheorySection title="Factores que Afectan la Fuerza">
        <Concept title="¿Cómo hacer un electroimán más fuerte?">
          <p>
            La intensidad del campo magnético de un electroimán depende de varios factores:
          </p>

          <Formula 
            expression={String.raw`B \propto N \cdot I`}
            calculatorId="electroimanes"
            definitions={electroimanesDefinitions}
            exercises={exercises}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li>B = Campo magnético (proporcional)</li>
            <li>N = Número de espiras de la bobina</li>
            <li>I = Intensidad de corriente eléctrica (A)</li>
          </ul>

          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>🔢 Número de Espiras (N)</h4>
              <p>
                Más vueltas de cable = campo más intenso. Duplicar las espiras 
                duplica el campo magnético.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>⚡ Intensidad de Corriente (I)</h4>
              <p>
                Mayor corriente = campo más intenso. Duplicar la corriente 
                duplica el campo magnético.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🔩 Material del Núcleo</h4>
              <p>
                Hierro dulce amplifica el campo 1000 veces. Sin núcleo, el 
                electroimán es mucho más débil.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>📏 Longitud de la Bobina</h4>
              <p>
                Bobina más corta y compacta = campo más concentrado e intenso.
              </p>
            </div>
          </div>

          <Example title="Ejemplo práctico" icon="🧲">
            <p>Electroimán con 100 espiras y 2 A:</p>
            <ul>
              <li>Duplicar espiras (200): Campo × 2</li>
              <li>Duplicar corriente (4 A): Campo × 2</li>
              <li>Ambos: Campo × 4</li>
              <li>Añadir núcleo de hierro: Campo × 1000</li>
            </ul>
          </Example>
        </Concept>
      </TheorySection>

      <TheorySection title="Ventajas de los Electroimanes">
        <Concept title="¿Por qué usar electroimanes?">
          <div className="info-box">
            <h3>Ventajas sobre imanes permanentes</h3>
            <ul>
              <li>Se pueden encender y apagar: Control total del magnetismo</li>
              <li>Intensidad variable: Ajustando la corriente</li>
              <li>Muy potentes: Pueden levantar toneladas de metal</li>
              <li>Polaridad reversible: Invirtiendo la corriente</li>
              <li>Económicos: Más baratos que imanes permanentes potentes</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>Desventajas</h3>
            <ul>
              <li>Necesitan electricidad: No funcionan sin corriente</li>
              <li>Se calientan: Efecto Joule en la bobina</li>
              <li>Más voluminosos: Necesitan bobina y núcleo</li>
            </ul>
          </div>
        </Concept>
      </TheorySection>



      <TheorySection title="Experimento: Construir un Electroimán">
        <Concept title="Hazlo tú mismo" color="orange" icon="🔬">
          <div className="info-box">
            <h3>Materiales necesarios</h3>
            <ul>
              <li>1 clavo grande de hierro (10-15 cm)</li>
              <li>1-2 metros de cable de cobre esmaltado</li>
              <li>1 pila de 1.5V o 9V</li>
              <li>Cinta aislante</li>
              <li>Clips o chinchetas para probar</li>
            </ul>
          </div>

          <div className="info-box">
            <h3>Procedimiento</h3>
            <ol>
              <li>Enrolla el cable alrededor del clavo (50-100 vueltas)</li>
              <li>Deja 10 cm de cable libre en cada extremo</li>
              <li>Lija los extremos del cable para quitar el esmalte</li>
              <li>Conecta los extremos a los polos de la pila</li>
              <li>Acerca el clavo a clips o chinchetas</li>
              <li>¡Observa cómo los atrae!</li>
              <li>Desconecta la pila: los objetos caen</li>
            </ol>
          </div>

          <Important>
            <p>
              ⚠️ Precaución: El cable se calienta si dejas la pila 
              conectada mucho tiempo. Desconéctala después de cada prueba. No uses 
              pilas de más de 9V sin supervisión.
            </p>
          </Important>

          <Example title="Experimentos adicionales" icon="🧪">
            <ul>
              <li>Más espiras: Enrolla más cable → más fuerza</li>
              <li>Más voltaje: Usa pila de 9V → más fuerza</li>
              <li>Sin núcleo: Quita el clavo → mucho más débil</li>
              <li>Invertir polos: Cambia conexión → invierte polos N-S</li>
            </ul>
          </Example>
        </Concept>
      </TheorySection>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <div className="conceptos-fundamentales">
          <div className="concepto-fundamental">
            <h4>🏗️ Grúas Electromagnéticas</h4>
            <p>
              Levantan chatarra y materiales ferromagnéticos en desguaces y plantas de reciclaje. 
              Se encienden para agarrar toneladas de metal y se apagan para soltar. Son mucho más 
              rápidas y eficientes que los ganchos mecánicos.
            </p>
          </div>

          <div className="concepto-fundamental">
            <h4>🔔 Timbres y Zumbadores</h4>
            <p>
              El electroimán atrae un martillo que golpea una campana. Al golpear, se corta la 
              corriente y el martillo vuelve por un resorte, repitiendo el ciclo. Este mecanismo 
              se usa en timbres de casa, alarmas y zumbadores.
            </p>
          </div>

          <div className="concepto-fundamental">
            <h4>🔌 Relés</h4>
            <p>
              Interruptores electromagnéticos usados en automóviles, sistemas de control industrial 
              y electrodomésticos. Una pequeña corriente activa el electroimán que cierra un circuito 
              de mayor potencia, permitiendo controlar grandes cargas con señales pequeñas.
            </p>
          </div>

          <div className="concepto-fundamental">
            <h4>🚗 Motores Eléctricos</h4>
            <p>
              Electroimanes que giran por atracción y repulsión con imanes fijos, convirtiendo 
              electricidad en movimiento. Se usan en ventiladores, lavadoras, taladros, coches 
              eléctricos y miles de dispositivos cotidianos.
            </p>
          </div>

          <div className="concepto-fundamental">
            <h4>🔊 Altavoces y Auriculares</h4>
            <p>
              Un electroimán mueve una membrana según la señal eléctrica de audio, creando ondas 
              sonoras. Cada variación en la corriente produce una vibración que reproduce música, 
              voz o cualquier sonido.
            </p>
          </div>

          <div className="concepto-fundamental">
            <h4>🚪 Cerraduras Electromagnéticas</h4>
            <p>
              Mantienen puertas cerradas mientras hay corriente. Se usan en edificios de oficinas, 
              hoteles y sistemas de seguridad. Se abren automáticamente al cortar la electricidad, 
              garantizando la evacuación en caso de incendio.
            </p>
          </div>

          <div className="concepto-fundamental">
            <h4>🚄 Trenes Maglev</h4>
            <p>
              Electroimanes potentes levantan el tren sobre las vías, eliminando completamente la 
              fricción. El tren japonés SCMaglev alcanza 603 km/h. China opera líneas comerciales 
              a 430 km/h entre Shanghai y su aeropuerto.
            </p>
          </div>

          <div className="concepto-fundamental">
            <h4>🏥 Resonancia Magnética (MRI)</h4>
            <p>
              Electroimanes superconductores crean campos magnéticos de 1.5-3 teslas para obtener 
              imágenes detalladas del interior del cuerpo sin radiación. Es fundamental para 
              diagnosticar lesiones cerebrales, tumores y problemas articulares.
            </p>
          </div>

          <div className="concepto-fundamental">
            <h4>♻️ Separadores Magnéticos</h4>
            <p>
              En plantas de reciclaje, electroimanes potentes separan metales ferromagnéticos 
              (hierro, acero) de otros materiales. También se usan en minería para separar 
              minerales magnéticos.
            </p>
          </div>

          <div className="concepto-fundamental">
            <h4>🔬 Aceleradores de Partículas</h4>
            <p>
              El Gran Colisionador de Hadrones (LHC) usa más de 9,000 electroimanes superconductores 
              para guiar partículas a velocidades cercanas a la luz. Estos experimentos ayudan a 
              entender el origen del universo.
            </p>
          </div>
        </div>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia del electroimán</h2>
        <p>
          En 1820, Hans Christian Ørsted descubrió accidentalmente que una corriente eléctrica 
          desvía la aguja de una brújula, demostrando que la electricidad crea magnetismo. 
          Ese mismo año, André-Marie Ampère desarrolló la teoría matemática del electromagnetismo. 
          En 1825, William Sturgeon construyó el primer electroimán práctico enrollando cable 
          alrededor de una barra de hierro. Joseph Henry mejoró el diseño en 1831, creando 
          electroimanes capaces de levantar más de 1 tonelada. Este invento revolucionó la 
          tecnología, permitiendo el desarrollo del telégrafo, motores eléctricos y generadores.
        </p>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>
          El electroimán más potente del mundo está en el Laboratorio Nacional de Campos Magnéticos 
          Intensos en Florida, alcanzando 45 teslas (900,000 veces el campo terrestre). Los 
          electroimanes superconductores de los trenes maglev japoneses funcionan a -269°C, 
          enfriados con helio líquido. En 1831, Michael Faraday usó un electroimán para descubrir 
          la inducción electromagnética, base de todos los generadores eléctricos modernos. 
          Los electroimanes de los desguaces pueden levantar coches enteros, pero si se va la luz, 
          ¡todo cae al suelo! Por eso tienen sistemas de respaldo de batería.
        </p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>Un electroimán es un imán temporal creado con corriente eléctrica</li>
            <li>Consta de bobina + núcleo de hierro + corriente</li>
            <li>La fuerza depende de espiras, corriente y núcleo</li>
            <li>Se pueden encender/apagar y ajustar su intensidad</li>
            <li>Aplicaciones: grúas, motores, altavoces, relés, trenes maglev, MRI</li>
            <li>Conectan electricidad y magnetismo</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Electroimanes;
