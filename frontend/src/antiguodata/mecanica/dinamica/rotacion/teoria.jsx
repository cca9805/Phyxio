import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as rotacionDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
    titulo: "Rotación",
    descripcion: "Dinámica rotacional: torque, momento de inercia y momento angular",
    isTheoryOnly: false,
    educationLevel: 'BACHILLERATO',
    levels: ['BACHILLERATO']
};

const TeoriaRotacion = ({ exercises = [] }) => {

    return (
        <>
            <TheorySection title="Introducción a la Dinámica de Rotación">
                <p>
                    La Dinámica de Rotación estudia las causas que originan el movimiento de rotación de los cuerpos. A diferencia de la mecánica traslacional, la dinámica rotacional introduce conceptos como el torque, el momento de inercia y el momento angular para describir cómo y por qué los objetos giran.
                </p>
            </TheorySection>

            <TheorySection title="Cinemática y Conexión Lineal">
                <Concept title="Descripción del Movimiento Angular">
                    <p>La cinemática rotacional utiliza variables angulares para describir el movimiento de giro. La aceleración angular (α) nos dice cómo cambia la velocidad angular (ω) en el tiempo (t).</p>
                    
                    <Formula
                        expression={String.raw`\alpha = \frac{\omega_f - \omega_i}{t}`}
                        calculatorId="cinematica-rotacional"
                        definitions={rotacionDefinitions}
                        exercises={exercises}
                        complementary={[
                            { description: "Calcular Velocidad Final", expression: String.raw`\omega_f = \omega_i + \alpha t` },
                            { description: "Calcular Tiempo", expression: String.raw`t = \frac{\omega_f - \omega_i}{\alpha}` },
                        ]}
                    />
                    
                    <p><strong>Donde:</strong></p>
                    <ul>
                      <li>α = Aceleración angular (rad/s²)</li>
                      <li>ω_f = Velocidad angular final (rad/s)</li>
                      <li>ω_i = Velocidad angular inicial (rad/s)</li>
                      <li>t = Tiempo (s)</li>
                    </ul>
                </Concept>
            </TheorySection>

            <TheorySection title="Momento de Inercia (I)">
                <Concept title="La Resistencia a la Rotación">
                    <p>El momento de inercia (I) es el análogo rotacional de la masa. Mide la resistencia de un cuerpo a cambiar su estado de rotación y depende de la masa (m) y de cómo se distribuye respecto al eje de giro (r).</p>
                    
                    <Formula
                        expression={String.raw`I = m r^2`}
                        calculatorId="momento-inercia"
                        definitions={rotacionDefinitions}
                        exercises={exercises}
                        complementary={[
                            { description: "Calcular Masa", expression: String.raw`m = \frac{I}{r^2}` },
                            { description: "Calcular Radio", expression: String.raw`r = \sqrt{\frac{I}{m}}` },
                        ]}
                    />
                    
                    <p><strong>Donde:</strong></p>
                    <ul>
                      <li>I = Momento de inercia (kg·m²)</li>
                      <li>m = Masa del objeto (kg)</li>
                      <li>r = Distancia al eje de rotación (m)</li>
                    </ul>
                </Concept>
            </TheorySection>

            <TheorySection title="Segunda Ley de Newton para la Rotación">
                 <Concept title="Torque y Aceleración Angular">
                    <p>El torque (τ) es una "fuerza de torsión" que causa un cambio en el movimiento de rotación. La Segunda Ley de Newton para la rotación relaciona el torque con el momento de inercia (I) y la aceleración angular (α).</p>
                    
                    <Formula
                        expression={String.raw`\tau = I\alpha`}
                        calculatorId="dinamica-rotacional"
                        definitions={rotacionDefinitions}
                        exercises={exercises}
                        complementary={[
                            { description: "Calcular Inercia", expression: String.raw`I = \frac{\tau}{\alpha}` },
                            { description: "Calcular Aceleración", expression: String.raw`\alpha = \frac{\tau}{I}` },
                        ]}
                    />
                    
                    <p><strong>Donde:</strong></p>
                    <ul>
                      <li>τ = Torque o momento de fuerza (N·m)</li>
                      <li>I = Momento de inercia (kg·m²)</li>
                      <li>α = Aceleración angular (rad/s²)</li>
                    </ul>
                </Concept>
            </TheorySection>
            
            <TheorySection title="Trabajo y Energía Rotacional">
                <Concept title="La Energía en el Giro">
                    <p>Un objeto en rotación posee energía cinética rotacional (E_k), que depende de su momento de inercia (I) y su velocidad angular (ω).</p>
                    
                    <Formula
                        expression={String.raw`E_k = \frac{1}{2}I\omega^2`}
                        calculatorId="energia-rotacional"
                        definitions={rotacionDefinitions}
                        exercises={exercises}
                        complementary={[
                            { description: "Calcular Inercia", expression: String.raw`I = \frac{2E_k}{\omega^2}` },
                            { description: "Calcular Velocidad Angular", expression: String.raw`\omega = \sqrt{\frac{2E_k}{I}}` },
                        ]}
                    />
                    
                    <p><strong>Donde:</strong></p>
                    <ul>
                      <li>E_k = Energía cinética rotacional (J)</li>
                      <li>I = Momento de inercia (kg·m²)</li>
                      <li>ω = Velocidad angular (rad/s)</li>
                    </ul>
                </Concept>
            </TheorySection>

            <TheorySection title="Momento Angular (L)">
                <Concept title="Conservación del Movimiento de Rotación">
                    <p>El momento angular (L) es una medida de la "cantidad de rotación" de un objeto. Si el torque neto externo es cero, el momento angular se conserva.</p>
                    
                    <Formula
                        expression={String.raw`L = I\omega`}
                        calculatorId="momento-angular"
                        definitions={rotacionDefinitions}
                        exercises={exercises}
                        complementary={[
                            { description: "Calcular Inercia", expression: String.raw`I = \frac{L}{\omega}` },
                            { description: "Calcular Velocidad Angular", expression: String.raw`\omega = \frac{L}{I}` },
                        ]}
                    />
                    
                    <p><strong>Donde:</strong></p>
                    <ul>
                      <li>L = Momento angular (kg·m²/s)</li>
                      <li>I = Momento de inercia (kg·m²)</li>
                      <li>ω = Velocidad angular (rad/s)</li>
                    </ul>
                </Concept>
            </TheorySection>

            <div className="theory-applications-section">
                <h2>
                    <span>🔧</span> Aplicaciones en la Vida Real
                </h2>
                
                <div className="theory-subsection">
                    <h3>🚁 Helicópteros y giroscopios</h3>
                    <p>
                        Los helicópteros usan el principio de conservación del momento angular. El rotor principal gira en un sentido, y por la tercera ley de Newton, el fuselaje tendería a girar en sentido contrario. El rotor de cola genera un torque opuesto que equilibra el sistema. Los giroscopios en aviones y barcos mantienen su orientación gracias a que su momento angular se conserva, permitiendo navegación precisa incluso con turbulencias.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>⚙️ Volantes de inercia</h3>
                    <p>
                        Los volantes de inercia almacenan energía rotacional. Los autobuses híbridos usan volantes que giran a 60,000 RPM, almacenando energía cinética durante el frenado (E_k = ½Iω²). Esta energía se recupera para acelerar, ahorrando hasta 30% de combustible. Las centrales eléctricas usan volantes gigantes para estabilizar la red: almacenan energía cuando hay exceso y la liberan cuando hay demanda.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🎯 Deportes: patinaje y clavados</h3>
                    <p>
                        Los patinadores artísticos usan la conservación del momento angular (L = Iω). Al iniciar un giro con brazos extendidos (I grande, ω pequeña), luego los recogen reduciendo I hasta 5 veces. Como L se conserva, ω aumenta proporcionalmente, girando hasta 6 veces por segundo. Los clavadistas usan el mismo principio: posición extendida para entrar al agua verticalmente, posición encogida para girar rápido en el aire.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🔩 Herramientas: llaves de torque</h3>
                    <p>
                        Las llaves dinamométricas miden el torque aplicado (τ = F × r). Para apretar tornillos de motor a 100 N·m, aplicamos 200 N en una llave de 0.5 m. Los tornillos de ruedas de coche requieren 80-120 N·m: demasiado poco y se aflojan, demasiado y se rompen. Las llaves de impacto generan torques de hasta 2,000 N·m mediante golpes rápidos que superan la fricción estática.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🚴 Bicicletas y efecto giroscópico</h3>
                    <p>
                        Las ruedas de bicicleta actúan como giroscopios. A mayor velocidad, mayor momento angular (L = Iω), proporcionando estabilidad. Por eso es más fácil mantener el equilibrio a 20 km/h que a 5 km/h. Las motos de competición tienen ruedas con alto momento de inercia que estabilizan en curvas a alta velocidad, aunque dificultan cambios rápidos de dirección.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🛰️ Satélites y control de orientación</h3>
                    <p>
                        Los satélites usan ruedas de reacción (giroscopios motorizados) para orientarse sin gastar combustible. Al acelerar una rueda interna en un sentido, el satélite gira en sentido contrario por conservación del momento angular. El telescopio Hubble tiene 6 ruedas de reacción que lo orientan con precisión de 0.007 segundos de arco (equivalente a apuntar un láser a una moneda a 300 km de distancia).
                    </p>
                </div>
            </div>

            <div className="theory-history-section">
                <h2>
                    <span>📜</span> Historia y Desarrollo
                </h2>
                
                <div className="theory-subsection">
                    <h3>🏛️ Arquímedes y la palanca (250 a.C.)</h3>
                    <p>
                        Aunque Arquímedes no conocía el concepto formal de torque, entendió intuitivamente que la fuerza multiplicada por la distancia al punto de apoyo determina la capacidad de rotar un objeto. Su famosa frase "Dadme un punto de apoyo y moveré el mundo" refleja el principio del torque: con una palanca suficientemente larga (r grande), una fuerza pequeña genera un torque enorme.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🔬 Euler y el momento de inercia (1765)</h3>
                    <p>
                        Leonhard Euler formalizó el concepto de momento de inercia y desarrolló las ecuaciones de rotación de cuerpos rígidos. Demostró que el momento de inercia depende no solo de la masa sino de su distribución respecto al eje de rotación. Sus ecuaciones de Euler para la rotación de cuerpos rígidos siguen siendo fundamentales en ingeniería aeroespacial y robótica.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🎡 Foucault y el giroscopio (1852)</h3>
                    <p>
                        Léon Foucault inventó el giroscopio en 1852 para demostrar la rotación de la Tierra. Un giroscopio en rotación mantiene su eje de giro fijo en el espacio por conservación del momento angular, independientemente de cómo se mueva su soporte. Este descubrimiento revolucionó la navegación: los giroscopios permitieron a barcos y aviones mantener rumbo sin depender de brújulas magnéticas.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>✈️ Aplicaciones en aviación (siglo XX)</h3>
                    <p>
                        Durante la Primera Guerra Mundial, los giroscopios se integraron en instrumentos de vuelo. El horizonte artificial (1929) usa un giroscopio para mostrar la orientación del avión incluso en nubes. Los pilotos de combate aprendieron a usar el efecto giroscópico de la hélice: al tirar del morro hacia arriba, el avión también gira lateralmente debido al momento angular de la hélice rotando.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🛰️ Era espacial y control de actitud</h3>
                    <p>
                        Los primeros satélites (Sputnik 1957, Explorer 1958) giraban descontroladamente. Los ingenieros desarrollaron sistemas de control usando ruedas de reacción y giroscopios. El Skylab (1973) perdió el control cuando sus giroscopios fallaron, girando caóticamente hasta que los astronautas lo estabilizaron manualmente. Hoy, la Estación Espacial Internacional usa 4 giroscopios de control de momento, cada uno con ruedas de 100 kg girando a 6,600 RPM.
                    </p>
                </div>
            </div>

            <div className="theory-anecdotes-section">
                <h2>
                    <span>✨</span> Anécdotas y curiosidades
                </h2>

                <div className="theory-subsection">
                    <h3>🎢 La silla giratoria de la NASA</h3>
                    <p>
                        Los astronautas entrenan conservación del momento angular en una silla giratoria sin fricción. Sentados con brazos extendidos sosteniendo pesas, giran lentamente. Al recoger los brazos, su momento de inercia disminuye 5 veces y su velocidad angular aumenta 5 veces, girando tan rápido que pueden marearse. Este ejercicio les enseña a controlar su orientación en el espacio donde no hay fricción.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🏍️ El récord de velocidad en moto</h3>
                    <p>
                        En 2006, Rocky Robinson alcanzó 605 km/h en moto. A esa velocidad, el efecto giroscópico de las ruedas es tan fuerte que girar es casi imposible. Las ruedas tienen tanto momento angular que resisten cualquier cambio de orientación. Por eso las motos de velocidad solo corren en línea recta en lagos salados planos. Intentar girar a 600 km/h podría volcar la moto instantáneamente.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>⚙️ El volante más grande del mundo</h3>
                    <p>
                        La central hidroeléctrica de Dinorwig (Gales) tiene volantes de 3,000 toneladas que giran a 1,800 RPM. Almacenan 1,800 MJ de energía rotacional (E_k = ½Iω²), suficiente para alimentar 1 millón de hogares durante 10 segundos. Cuando hay un pico de demanda (por ejemplo, durante los descansos de programas de TV populares), estos volantes liberan su energía en menos de 16 segundos, estabilizando la red eléctrica.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🎯 El giro más rápido en patinaje</h3>
                    <p>
                        Natalia Kanounnikova completó 308 rotaciones en un minuto (5.13 giros/segundo) en 2006. Al recoger los brazos, redujo su momento de inercia de ~2 kg·m² a ~0.4 kg·m², aumentando su velocidad angular 5 veces. La fuerza centrífuga en sus brazos extendidos sería de ~200 N (20 kg), por eso los mantiene pegados al cuerpo. Su momento angular se conservó perfectamente durante todo el giro.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🚁 El helicóptero que casi se destruye</h3>
                    <p>
                        En 1982, un helicóptero Chinook perdió su rotor trasero en vuelo. Sin el torque de compensación, el fuselaje comenzó a girar violentamente en sentido contrario al rotor principal. El piloto apagó el motor principal inmediatamente y autorotó hasta el suelo, salvando a todos. Este incidente demostró dramáticamente la tercera ley de Newton: cada acción (rotor girando) tiene una reacción igual y opuesta (fuselaje queriendo girar al revés).
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🛰️ El Hubble y su rescate</h3>
                    <p>
                        En 2009, el telescopio Hubble perdió 3 de sus 6 giroscopios, quedando casi inoperable. Los astronautas realizaron una misión de reparación extremadamente compleja, reemplazando los giroscopios en el espacio. Cada giroscopio tiene una rueda de 100 gramos girando a 19,200 RPM en vacío, generando momento angular suficiente para orientar las 11 toneladas del telescopio con precisión microscópica. Sin ellos, el Hubble sería un satélite ciego de $10 mil millones.
                    </p>
                </div>
            </div>

            <div className="formula-card">
                <h3>📝 Resumen</h3>
                <p>
                    La dinámica rotacional estudia el movimiento de giro usando torque (τ = Iα), momento de inercia (I = mr²) y momento angular 
                    (L = Iω). El torque causa aceleración angular, análogo a F = ma. La energía cinética rotacional es E_k = ½Iω². El momento 
                    angular se conserva si no hay torque externo. Es fundamental en giroscopios, volantes de inercia, deportes, herramientas, 
                    satélites y estabilidad de vehículos.
                </p>
            </div>
        </>
    );
};

export default TeoriaRotacion;
