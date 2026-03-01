import { TheorySection, Concept, Formula, Important, Example } from '../../../../../components/TheoryV2';
import { definitions as imanesDefinitions } from './definitions.js';

export const metadata = {
  titulo: "Imanes y Magnetismo",
  descripcion: "Tipos de imanes, polos magnéticos, atracción y repulsión",
  isTheoryOnly: false,
  educationLevel: 'ESO',
  levels: ['ESO']
};

const ImanesYMagnetismo = ({ exercises }) => {
  return (
    <>
      {/* Introducción */}
      <Concept 
        title="¿Qué es un imán?" 
        color="purple"
        icon="🧲"
      >
        <p>
          Un imán es un objeto que produce un campo magnético invisible 
          capaz de atraer materiales ferromagnéticos (hierro, níquel, cobalto) y de 
          interactuar con otros imanes.
        </p>
        <div className="destacado">
          <p>
            🧲 Propiedad fundamental: Todo imán tiene dos polos: 
            Norte (N) y Sur (S). Estos polos son 
            inseparables: no existe un imán con un solo polo.
          </p>
        </div>
      </Concept>

      {/* Polos magnéticos */}
      <TheorySection title="Polos Magnéticos">
        <Concept title="Norte y Sur">
          <p>
            Los polos magnéticos son las regiones de un imán donde 
            la fuerza magnética es más intensa.
          </p>

          {/* Gráfico SVG de imán con polos */}
          <div className="svg-container" style={{textAlign: 'center', margin: '20px 0'}}>
            <svg width="500" height="300" viewBox="0 0 500 300">
              <text x="200" y="25" fontSize="16" fontWeight="bold">Imán de Barra</text>
              
              {/* Imán */}
              <rect x="100" y="100" width="300" height="80" rx="10" fill="url(#gradientImán)" stroke="#333" strokeWidth="3"/>
              
              {/* Gradiente */}
              <defs>
                <linearGradient id="gradientImán" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#f44336', stopOpacity: 1}} />
                  <stop offset="50%" style={{stopColor: '#999', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#2196f3', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              
              {/* Etiquetas de polos */}
              <text x="150" y="145" fontSize="32" fontWeight="bold" fill="white">N</text>
              <text x="350" y="145" fontSize="32" fontWeight="bold" fill="white">S</text>
              
              {/* Flechas de líneas de campo */}
              <g>
                {/* Líneas superiores */}
                <path d="M 100 100 Q 50 50, 100 50 Q 250 20, 400 50 Q 450 50, 400 100" 
                      fill="none" stroke="#9c27b0" strokeWidth="2" strokeDasharray="5,5"/>
                <polygon points="395,95 400,100 395,105" fill="#9c27b0"/>
                
                {/* Líneas inferiores */}
                <path d="M 100 180 Q 50 230, 100 230 Q 250 260, 400 230 Q 450 230, 400 180" 
                      fill="none" stroke="#9c27b0" strokeWidth="2" strokeDasharray="5,5"/>
                <polygon points="395,175 400,180 395,185" fill="#9c27b0"/>
                
                {/* Líneas centrales */}
                <line x1="100" y1="140" x2="50" y2="140" stroke="#9c27b0" strokeWidth="2" strokeDasharray="5,5"/>
                <polygon points="55,135 50,140 55,145" fill="#9c27b0"/>
                
                <line x1="400" y1="140" x2="450" y2="140" stroke="#9c27b0" strokeWidth="2" strokeDasharray="5,5"/>
                <polygon points="445,135 450,140 445,145" fill="#9c27b0"/>
              </g>
              
              {/* Leyenda */}
              <text x="250" y="270" fontSize="12" textAnchor="middle">
                Las líneas de campo salen del polo Norte y entran por el polo Sur
              </text>
            </svg>
          </div>

          <div className="info-box">
            <h3>Reglas de los polos magnéticos</h3>
            <ul>
              <li>Polos opuestos se atraen: N ↔ S (fuerza atractiva)</li>
              <li>Polos iguales se repelen: N ↔ N o S ↔ S (fuerza repulsiva)</li>
              <li>Inseparables: Si cortas un imán, cada mitad tiene N y S</li>
              <li>Polo Norte: Apunta hacia el Norte geográfico de la Tierra</li>
            </ul>
          </div>

          <Important>
            <p>
              🤔 Curiosidad: El polo Norte magnético de la Tierra es en 
              realidad un polo Sur magnético (por eso atrae al polo Norte de la brújula). 
              ¡La nomenclatura es confusa por razones históricas!
            </p>
          </Important>
        </Concept>
      </TheorySection>

      {/* Tipos de imanes */}
      <TheorySection title="Tipos de Imanes">
        <Concept title="Clasificación">
          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>🪨 Imanes Naturales</h4>
              <p>
                Magnetita (Fe₃O₄): Mineral de hierro con propiedades 
                magnéticas naturales. Fue el primer imán conocido por la humanidad.
              </p>
              <p>Uso: Histórico, brújulas primitivas</p>
            </div>

            <div className="concepto-fundamental">
              <h4>🧲 Imanes Permanentes</h4>
              <p>
                Materiales que mantienen su magnetismo indefinidamente. Hechos de 
                aleaciones especiales (neodimio, ferrita, alnico).
              </p>
              <p>Uso: Neveras, altavoces, motores, generadores</p>
            </div>

            <div className="concepto-fundamental">
              <h4>⚡ Imanes Temporales</h4>
              <p>
                Materiales que se magnetizan en presencia de un campo magnético pero 
                pierden el magnetismo al retirarlo (hierro dulce).
              </p>
              <p>Uso: Núcleos de electroimanes, transformadores</p>
            </div>

            <div className="concepto-fundamental">
              <h4>🔌 Electroimanes</h4>
              <p>
                Imanes creados por corriente eléctrica circulando por una bobina. 
                Se pueden encender y apagar.
              </p>
              <p>Uso: Grúas, timbres, relés, motores</p>
            </div>
          </div>
        </Concept>

        <Concept title="Formas de imanes">
          {/* Gráfico SVG de formas */}
          <div className="svg-container" style={{textAlign: 'center', margin: '20px 0'}}>
            <svg width="550" height="250" viewBox="0 0 550 250">
              <text x="220" y="25" fontSize="16" fontWeight="bold">Formas Comunes de Imanes</text>
              
              {/* Imán de barra */}
              <g>
                <rect x="50" y="60" width="100" height="30" rx="5" fill="#e57373" stroke="#333" strokeWidth="2"/>
                <rect x="150" y="60" width="100" height="30" rx="5" fill="#64b5f6" stroke="#333" strokeWidth="2"/>
                <text x="100" y="82" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">N</text>
                <text x="200" y="82" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">S</text>
                <text x="150" y="110" fontSize="12" textAnchor="middle">Barra</text>
              </g>
              
              {/* Imán de herradura */}
              <g transform="translate(300, 0)">
                <path d="M 50 60 L 50 120 Q 50 140, 70 140 L 130 140 Q 150 140, 150 120 L 150 60" 
                      fill="none" stroke="#333" strokeWidth="20" strokeLinecap="round"/>
                <circle cx="50" cy="70" r="15" fill="#e57373"/>
                <circle cx="150" cy="70" r="15" fill="#64b5f6"/>
                <text x="50" y="75" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">N</text>
                <text x="150" y="75" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">S</text>
                <text x="100" y="170" fontSize="12" textAnchor="middle">Herradura</text>
              </g>
              
              {/* Imán circular */}
              <g transform="translate(0, 130)">
                <circle cx="100" cy="60" r="40" fill="url(#gradientCircular)" stroke="#333" strokeWidth="2"/>
                <defs>
                  <linearGradient id="gradientCircular" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#e57373', stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: '#64b5f6', stopOpacity: 1}} />
                  </linearGradient>
                </defs>
                <text x="80" y="65" fontSize="12" fontWeight="bold" fill="white">N</text>
                <text x="115" y="65" fontSize="12" fontWeight="bold" fill="white">S</text>
                <text x="100" y="120" fontSize="12" textAnchor="middle">Disco</text>
              </g>
              
              {/* Imán anillo */}
              <g transform="translate(300, 130)">
                <circle cx="100" cy="60" r="40" fill="none" stroke="#e57373" strokeWidth="15"/>
                <circle cx="100" cy="60" r="40" fill="none" stroke="#64b5f6" strokeWidth="15" 
                        strokeDasharray="125.6 125.6" strokeDashoffset="62.8"/>
                <text x="100" y="120" fontSize="12" textAnchor="middle">Anillo</text>
              </g>
            </svg>
          </div>
        </Concept>
      </TheorySection>

      {/* Materiales magnéticos */}
      <TheorySection title="Materiales y Magnetismo">
        <Concept title="Clasificación de materiales">
          <div className="info-box">
            <h3>Según su comportamiento magnético</h3>
            <ul>
              <li>
                Ferromagnéticos: Se magnetizan fuertemente (hierro, níquel, 
                cobalto, gadolinio). Son los únicos atraídos por imanes comunes.
              </li>
              <li>
                Paramagnéticos: Se magnetizan débilmente en la dirección 
                del campo (aluminio, platino, oxígeno). Atracción muy débil.
              </li>
              <li>
                Diamagnéticos: Se magnetizan débilmente en dirección 
                opuesta al campo (cobre, oro, agua, grafito). Repulsión muy débil.
              </li>
            </ul>
          </div>

          <Example title="Prueba del imán" icon="🧪">
            <p>Para saber si un material es ferromagnético:</p>
            <ol>
              <li>Acerca un imán al material</li>
              <li>Si se atrae fuertemente → Ferromagnético (hierro, níquel, cobalto)</li>
              <li>Si no se atrae → No ferromagnético (aluminio, cobre, plástico)</li>
            </ol>
            <p>
              Truco: El acero inoxidable puede o no ser magnético 
              dependiendo de su composición. ¡Pruébalo!
            </p>
          </Example>
        </Concept>
      </TheorySection>

      {/* Fuerza magnética */}
      <TheorySection title="Fuerza Magnética">
        <Concept title="Intensidad de la fuerza">
          <p>
            La fuerza entre dos imanes depende de varios factores:
          </p>

          <Formula 
            expression={String.raw`F \propto \frac{m_1 \cdot m_2}{d^2}`}
            calculatorId="imanes_magnetismo"
            definitions={imanesDefinitions}
            exercises={exercises}
          />

          <p><strong>Donde:</strong></p>
          <ul>
            <li>F = Fuerza magnética (proporcional)</li>
            <li>m₁, m₂ = Intensidad de los polos magnéticos</li>
            <li>d = Distancia entre los imanes</li>
          </ul>

          <div className="info-box">
            <h3>Factores que afectan la fuerza</h3>
            <ul>
              <li>Intensidad de los polos: Imanes más fuertes → mayor fuerza</li>
              <li>Distancia: Al doble de distancia → 1/4 de fuerza (ley del inverso del cuadrado)</li>
              <li>Orientación: Atracción (N-S) o repulsión (N-N, S-S)</li>
              <li>Material intermedio: El aire, plástico o madera no afectan mucho</li>
            </ul>
          </div>

          <Example title="Ejemplo: Distancia y fuerza" icon="📏">
            <p>Un imán ejerce 100 N de fuerza a 1 cm de distancia:</p>
            <ul>
              <li>A 2 cm: F = 100 / 2² = 25 N (1/4 de la fuerza)</li>
              <li>A 3 cm: F = 100 / 3² = 11.1 N (1/9 de la fuerza)</li>
              <li>A 10 cm: F = 100 / 10² = 1 N (1/100 de la fuerza)</li>
            </ul>
            <p>La fuerza disminuye rápidamente con la distancia.</p>
          </Example>
        </Concept>
      </TheorySection>

      {/* Cómo se magnetizan los materiales */}
      <TheorySection title="Magnetización">
        <Concept title="¿Cómo se crea un imán?">
          <p>
            Los materiales ferromagnéticos se pueden magnetizar de varias formas:
          </p>

          <div className="conceptos-fundamentales">
            <div className="concepto-fundamental">
              <h4>🧲 Por contacto</h4>
              <p>
                Frotar un imán permanente sobre un objeto de hierro en una dirección. 
                Los dominios magnéticos se alinean.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>⚡ Por corriente eléctrica</h4>
              <p>
                Pasar corriente por una bobina enrollada alrededor del material. 
                Método más efectivo y controlable.
              </p>
            </div>

            <div className="concepto-fundamental">
              <h4>🔨 Por golpes</h4>
              <p>
                Golpear un objeto de hierro mientras está alineado con el campo 
                magnético terrestre. Método poco efectivo.
              </p>
            </div>
          </div>

          <Important>
            <p>
              ⚠️ Desmagnetización: Los imanes pierden su magnetismo 
              por calor excesivo, golpes fuertes o campos magnéticos opuestos. 
              La temperatura de Curie (770°C para el hierro) destruye el magnetismo.
            </p>
          </Important>
        </Concept>
      </TheorySection>

      {/* Dominios magnéticos */}
      <Concept title="Teoría de dominios magnéticos" color="teal" icon="🔬">
        <p>
          A nivel microscópico, los materiales ferromagnéticos están formados por 
          pequeñas regiones llamadas dominios magnéticos, donde 
          todos los átomos tienen sus momentos magnéticos alineados.
        </p>

        <div className="info-box">
          <h3>Material no magnetizado vs magnetizado</h3>
          <ul>
            <li>
              No magnetizado: Los dominios apuntan en direcciones 
              aleatorias. El efecto magnético neto es cero.
            </li>
            <li>
              Magnetizado: Los dominios se alinean en la misma dirección. 
              El efecto magnético se suma y el material se convierte en imán.
            </li>
          </ul>
        </div>
      </Concept>

      {/* Aplicaciones en la vida real */}
      <div className="theory-applications-section">
        <h2><span>🌍</span> Aplicaciones en la vida real</h2>
        <ul>
          <li>Brújulas: Navegación usando el campo magnético terrestre</li>
          <li>Motores eléctricos: Conversión de electricidad en movimiento</li>
          <li>Generadores: Conversión de movimiento en electricidad</li>
          <li>Altavoces y auriculares: Conversión de señal eléctrica en sonido</li>
          <li>Discos duros: Almacenamiento magnético de información</li>
          <li>Tarjetas magnéticas: Tarjetas de crédito, transporte</li>
          <li>Resonancia magnética (MRI): Diagnóstico médico</li>
          <li>Separadores magnéticos: Reciclaje de metales</li>
          <li>Cierres magnéticos: Puertas, bolsos, joyería</li>
          <li>Levitación magnética: Trenes maglev</li>
        </ul>
      </div>

      {/* Historia */}
      <div className="theory-history-section">
        <h2><span>📜</span> Historia del magnetismo</h2>
        <p>
          Los antiguos griegos descubrieron la magnetita hace más de 2.500 años en la región de Magnesia (de ahí el nombre "magnetismo"). 
          Los chinos inventaron la brújula magnética en el siglo XI, revolucionando la navegación. En 1600, William Gilbert publicó 
          "De Magnete", el primer tratado científico sobre magnetismo, demostrando que la Tierra es un imán gigante.
        </p>
      </div>

      {/* Anécdotas y curiosidades */}
      <div className="theory-anecdotes-section">
        <h2><span>✨</span> Anécdotas y curiosidades</h2>
        <p>
          Los imanes de neodimio son tan potentes que pueden atraerse con fuerza suficiente para romperse o pellizcar la piel. 
          El campo magnético de la Tierra nos protege de la radiación solar y permite que las aves migratorias se orienten. 
          Los trenes maglev japoneses alcanzan 600 km/h flotando sobre imanes sin tocar las vías. Si cortas un imán por la mitad, 
          no obtienes un polo norte y un polo sur separados, sino dos imanes completos con sus propios polos norte y sur.
        </p>
      </div>

      {/* Resumen */}
      <div className="formula-card">
        <h3 className="concept-title">Resumen</h3>
        <div className="concept-body">
          <ul>
            <li>Los imanes tienen dos polos inseparables: Norte y Sur</li>
            <li>Polos opuestos se atraen, iguales se repelen</li>
            <li>Tipos: naturales, permanentes, temporales y electroimanes</li>
            <li>Solo los materiales ferromagnéticos son atraídos fuertemente</li>
            <li>La fuerza magnética disminuye con el cuadrado de la distancia</li>
            <li>Los dominios magnéticos explican el magnetismo a nivel microscópico</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImanesYMagnetismo;
