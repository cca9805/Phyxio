
import { Formula, Concept, TheorySection, Important } from '../../../../components/TheoryV2';
import { definitions } from './definitions';
import exercises from './ejercicios.json';

// Metadatos del tema
export const metadata = {
  titulo: "Trabajo y Energía",
  descripcion: "Teoremas de trabajo-energía y conservación de la energía",
  isTheoryOnly: false,
  educationLevel: 'BACHILLERATO',
  levels: ['BACHILLERATO']
};

const TrabajoEnergiaTeoria = () => {
  return (
    <TheorySection title="Trabajo y Energía">
      <Concept title="Trabajo Mecánico">
        <p>
          En física, el trabajo no es lo que haces para ganar dinero, sino la energía que se transfiere a un objeto cuando una fuerza lo mueve. Si no hay desplazamiento, no hay trabajo.
        </p>
        <Formula
          expression={"W = F \\cdot d \\cdot \\cos(\\theta)"}
          description="El trabajo (W) es el producto de la magnitud de la fuerza (F), la magnitud del desplazamiento (d) y el coseno del ángulo (θ) entre ellos."
          calculatorId="trabajo-mecanico"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            {
              expression: "F = \\frac{W}{d \\cdot \\cos(\\theta)}",
              description: "Calcular la Fuerza a partir del trabajo, el desplazamiento y el ángulo."
            },
            {
              expression: "d = \\frac{W}{F \\cdot \\cos(\\theta)}",
              description: "Calcular el Desplazamiento a partir del trabajo, la fuerza y el ángulo."
            },
            {
              expression: "\\theta = \\arccos\\left(\\frac{W}{F \\cdot d}\\right)",
              description: "Calcular el Ángulo a partir del trabajo, la fuerza y el desplazamiento."
            }
          ]}
        />
        
        <p><strong>Donde:</strong></p>
        <ul>
          <li>W = Trabajo mecánico (J o Joules)</li>
          <li>F = Magnitud de la fuerza aplicada (N)</li>
          <li>d = Magnitud del desplazamiento (m)</li>
          <li>θ = Ángulo entre la fuerza y el desplazamiento (grados o radianes)</li>
        </ul>
      </Concept>

      <Concept title="Energía Cinética">
        <p>
          La energía cinética (Ek) es la energía del movimiento. Cualquier objeto que se mueva, desde un caracol hasta un cohete, tiene energía cinética.
        </p>
        <Formula
          expression={"E_k = \\frac{1}{2}m v^2"}
          description="Depende de la masa (m) del objeto y del cuadrado de su velocidad (v). A más velocidad, la energía aumenta de forma cuadrática."
          calculatorId="energia-cinetica"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            {
              expression: "m = \\frac{2E_k}{v^2}",
              description: "Calcular la Masa a partir de la energía cinética y la velocidad."
            },
            {
              expression: "v = \\sqrt{\\frac{2E_k}{m}}",
              description: "Calcular la Velocidad a partir de la energía cinética y la masa."
            }
          ]}
        />
        
        <p><strong>Donde:</strong></p>
        <ul>
          <li>E_k = Energía cinética (J)</li>
          <li>m = Masa del objeto (kg)</li>
          <li>v = Velocidad del objeto (m/s)</li>
        </ul>
      </Concept>

      <Concept title="Energía Potencial Gravitatoria">
        <p>
          La energía potencial gravitatoria (Ep) es la energía 'almacenada' que tiene un objeto debido a su posición en un campo gravitatorio. Cuanto más alto está, más energía potencial tiene.
        </p>
        <Formula
          expression={"E_p = m \\cdot g \\cdot h"}
          description="Depende de la masa (m), la aceleración de la gravedad (g) y la altura (h) a la que se encuentra."
          calculatorId="energia-potencial-gravitatoria"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            {
              expression: "m = \\frac{E_p}{g \\cdot h}",
              description: "Calcular la Masa a partir de la energía potencial, la gravedad y la altura."
            },
            {
              expression: "h = \\frac{E_p}{m \\cdot g}",
              description: "Calcular la Altura a partir de la energía potencial, la masa y la gravedad."
            }
          ]}
        />
        
        <p><strong>Donde:</strong></p>
        <ul>
          <li>E_p = Energía potencial gravitatoria (J)</li>
          <li>m = Masa del objeto (kg)</li>
          <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
          <li>h = Altura respecto al nivel de referencia (m)</li>
        </ul>
      </Concept>
      
      <Concept title="Energía Potencial Elástica">
        <p>
          Es la energía almacenada en un objeto elástico (como un resorte) al ser deformado (estirado o comprimido).
        </p>
        <Formula
          expression={"E_{pe} = \\frac{1}{2} k x^2"}
          description="Depende de la constante del resorte (k) y del cuadrado de la deformación (x)."
          calculatorId="energia-potencial-elastica"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            {
              expression: "k = \\frac{2E_{pe}}{x^2}",
              description: "Calcular la Constante del resorte a partir de la energía potencial elástica y la deformación."
            },
            {
              expression: "x = \\sqrt{\\frac{2E_{pe}}{k}}",
              description: "Calcular la Deformación a partir de la energía potencial elástica y la constante del resorte."
            }
          ]}
        />
        
        <p><strong>Donde:</strong></p>
        <ul>
          <li>E_pe = Energía potencial elástica (J)</li>
          <li>k = Constante elástica del resorte (N/m)</li>
          <li>x = Deformación del resorte desde su posición de equilibrio (m)</li>
        </ul>
      </Concept>

      <Concept title="Potencia Mecánica">
        <p>
          La potencia es la rapidez con la que se realiza un trabajo. Es la medida de cuán rápido se transfiere la energía.
        </p>
        <Formula
          expression={"P = \\frac{W}{t}"}
          description="Se calcula como el trabajo (W) realizado dividido por el tiempo (t) que toma realizarlo."
          calculatorId="potencia-mecanica"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            {
              expression: "W = P \\cdot t",
              description: "Calcular el Trabajo a partir de la potencia y el tiempo."
            },
            {
              expression: "t = \\frac{W}{P}",
              description: "Calcular el Tiempo a partir del trabajo y la potencia."
            }
          ]}
        />
        
        <p><strong>Donde:</strong></p>
        <ul>
          <li>P = Potencia mecánica (W o Watts)</li>
          <li>W = Trabajo realizado (J)</li>
          <li>t = Tiempo empleado (s)</li>
        </ul>
      </Concept>
      
      <Important>
        <p>
          El trabajo y la energía se miden en Joules (J). La potencia se mide en Watts (W), que es un Joule por segundo (J/s).
        </p>
      </Important>
      
      <Concept title="Teorema del Trabajo y la Energía">
        <p>
          Este teorema fundamental establece una conexión directa entre el trabajo y la energía cinética.
        </p>
        <Formula
          expression={"W_{neto} = \\Delta E_k = E_{kf} - E_{ki}"}
          description="El trabajo neto realizado sobre un objeto es igual al cambio en su energía cinética. Esto es clave para resolver muchos problemas de dinámica."
          calculatorId="teorema-trabajo-energia"
          definitions={definitions}
          exercises={exercises}
          complementary={[
            {
              expression: "E_{kf} = W_{neto} + E_{ki}",
              description: "Calcular la Energía cinética final."
            },
            {
              expression: "v_f = \\sqrt{v_i^2 + \\frac{2W_{neto}}{m}}",
              description: "Calcular la Velocidad final a partir del trabajo neto."
            }
          ]}
        />
        
        <p><strong>Donde:</strong></p>
        <ul>
          <li>W_neto = Trabajo neto realizado sobre el objeto (J)</li>
          <li>ΔE_k = Cambio en la energía cinética (J)</li>
          <li>E_kf = Energía cinética final (J)</li>
          <li>E_ki = Energía cinética inicial (J)</li>
        </ul>
      </Concept>

      <div className="theory-applications-section">
        <h2>
          <span>🔧</span> Aplicaciones en la Vida Real
        </h2>
        
        <div className="theory-subsection">
          <h3>🎢 Montañas rusas</h3>
          <p>
            La energía potencial en la cima se convierte en energía cinética en las bajadas, creando la emoción del viaje. Los diseñadores calculan cuidadosamente las alturas para garantizar que haya suficiente energía para completar el recorrido, considerando las pérdidas por fricción.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>💧 Centrales hidroeléctricas</h3>
          <p>
            Aprovechan la energía potencial del agua en altura para generar electricidad al caer. Una presa de 100 metros de altura puede convertir la energía potencial de millones de litros de agua en electricidad limpia, alimentando ciudades enteras.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚗 Vehículos híbridos</h3>
          <p>
            Recuperan energía cinética durante el frenado y la almacenan en baterías (frenado regenerativo). En lugar de desperdiciar la energía como calor en los frenos, la convierten en electricidad que puede reutilizarse, mejorando la eficiencia hasta un 30%.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🏃 Deportes de alto rendimiento</h3>
          <p>
            Los atletas maximizan su energía cinética en carreras y saltos, convirtiendo trabajo muscular en movimiento. Un velocista puede generar más de 2,500 Watts de potencia en una carrera de 100 metros, equivalente a 3 caballos de fuerza.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🔧 Resortes y amortiguadores</h3>
          <p>
            Absorben energía cinética en colisiones, convirtiéndola en energía potencial elástica. Los amortiguadores de un coche pueden absorber y disipar la energía de baches y irregularidades miles de veces por kilómetro, protegiendo a los pasajeros.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ Herramientas eléctricas</h3>
          <p>
            La potencia determina qué tan rápido pueden realizar trabajo. Un taladro de 1,000 W puede perforar concreto mucho más rápido que uno de 500 W, porque transfiere el doble de energía por segundo al material.
          </p>
        </div>
      </div>

      <div className="theory-history-section">
        <h2>
          <span>📜</span> Historia y Desarrollo
        </h2>
        
        <div className="theory-subsection">
          <h3>🔭 Los pioneros: Galileo y Leibniz</h3>
          <p>
            Galileo Galilei (1564-1642) estudió la caída de cuerpos y el movimiento en planos inclinados, sentando las bases para entender la energía potencial y cinética. Gottfried Leibniz (1646-1716) introdujo el concepto de "vis viva" (fuerza viva), equivalente a mv², precursor de la energía cinética.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚙️ James Joule y la equivalencia mecánica del calor</h3>
          <p>
            Isaac Newton desarrolló las leyes del movimiento, pero fue James Joule (1818-1889) quien demostró experimentalmente la equivalencia entre trabajo mecánico y calor. Su famoso experimento con paletas giratorias en agua demostró que el trabajo mecánico siempre produce la misma cantidad de calor, estableciendo el principio de conservación de la energía.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🌟 La formalización del concepto de energía</h3>
          <p>
            El término "energía" fue acuñado por Thomas Young en 1807. William Thomson (Lord Kelvin) y Hermann von Helmholtz formalizaron el principio de conservación de la energía en la década de 1850, uno de los pilares fundamentales de la física moderna. Este principio unificó todas las ramas de la física bajo una sola ley universal.
          </p>
        </div>
      </div>

      <div className="theory-anecdotes-section">
        <h2>
          <span>✨</span> Anécdotas y curiosidades
        </h2>

        <div className="theory-subsection">
          <h3>🍎 El Joule es diminuto</h3>
          <p>
            Levantar una manzana de 100g a 1 metro de altura requiere aproximadamente 1 Joule de trabajo. Para encender una bombilla de 100 W durante una hora necesitas 360,000 Joules. Esto muestra por qué necesitamos unidades más grandes como el kilojoule (kJ) o el kilowatt-hora (kWh) para la vida cotidiana.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>⚡ La energía de un rayo</h3>
          <p>
            Un rayo puede liberar hasta 1 billón de Joules de energía en una fracción de segundo, equivalente a la energía de 250 litros de gasolina. Sin embargo, la mayor parte se disipa como luz, sonido y calor en el aire. Si pudiéramos capturar toda esa energía, alimentaría una casa durante un mes.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🚴 Potencia humana récord</h3>
          <p>
            El récord mundial de potencia humana sostenida es de unos 400 Watts durante una hora (ciclistas profesionales), mientras que un motor de coche promedio genera 75,000 Watts. Un ciclista de élite puede generar picos de 2,000 W durante sprints cortos, pero solo por segundos.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>☄️ El meteorito de Chelyabinsk</h3>
          <p>
            La energía cinética del meteorito que impactó en Chelyabinsk (Rusia, 2013) fue equivalente a 500 kilotones de TNT, 30 veces la bomba de Hiroshima. Entró a la atmósfera a 19 km/s con una masa de 12,000 toneladas. La onda de choque rompió ventanas en un radio de 200 km.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🤸 Trampolines y conversión de energía</h3>
          <p>
            Los trampolines convierten energía potencial gravitatoria en energía potencial elástica y viceversa, permitiendo saltos cada vez más altos. Un saltador profesional puede alcanzar 10 metros de altura, almacenando y liberando más de 5,000 Joules de energía en cada rebote.
          </p>
        </div>

        <div className="theory-subsection">
          <h3>🐦 El colibrí: máquina de potencia</h3>
          <p>
            Un colibrí puede generar hasta 10 veces su peso corporal en potencia durante el vuelo, una de las mayores relaciones potencia-masa del reino animal. Sus alas baten hasta 80 veces por segundo, requiriendo una tasa metabólica tan alta que deben comer constantemente para no morir de hambre.
          </p>
        </div>
      </div>

      <div className="formula-card">
        <h3>📝 Resumen</h3>
        <p>
          En un sistema conservativo (sin fricción), la energía mecánica total se conserva: E_total = E_k + E_p = constante. 
          La energía puede transformarse entre cinética y potencial, pero la suma permanece constante. El trabajo realizado 
          por fuerzas externas cambia la energía total del sistema. La potencia mide la rapidez con que se realiza trabajo 
          o se transfiere energía.
        </p>
      </div>

    </TheorySection>
  );
};

export default TrabajoEnergiaTeoria;
