import { TheorySection, Concept, Formula, Important, Example } from '../../../../components/TheoryV2';
import { definitions as oscilacionesDefinitions } from './definitions.js';

// Metadatos del tema
export const metadata = {
    titulo: "Oscilaciones",
    descripcion: "Movimiento armónico simple, péndulos y sistemas oscilatorios",
    isTheoryOnly: false,
    educationLevel: 'BACHILLERATO',
    levels: ['BACHILLERATO']
};

const TeoriaOscilaciones = ({ exercises = [] }) => {

    return (
        <>
            <TheorySection title="Introducción a las Oscilaciones">
                <p>
                    El movimiento oscilatorio es un tipo de movimiento periódico en el que un cuerpo se desplaza de un lado a otro en torno a una posición central, o punto de equilibrio. El ejemplo más fundamental de este movimiento es el Movimiento Armónico Simple (MAS), que ocurre cuando la fuerza restauradora que actúa sobre el objeto es directamente proporcional a su desplazamiento desde la posición de equilibrio.
                </p>
            </TheorySection>

            <TheorySection title="Conceptos Fundamentales: Periodo, Frecuencia y Frecuencia Angular">
                <Concept title="Describiendo la Repetición">
                    <p>Para analizar un MAS, utilizamos tres magnitudes clave:</p>
                    <ul>
                        <li>Periodo (T): Es el tiempo que tarda el objeto en completar una oscilación completa. Su unidad es el segundo (s).</li>
                        <li>Frecuencia (f): Es el número de oscilaciones completas que ocurren por segundo. Es la inversa del periodo. Su unidad es el Hertz (Hz), que equivale a s⁻¹.</li>
                        <li>Frecuencia Angular (ω): Mide la tasa de cambio de la fase de la oscilación. Se relaciona con la frecuencia y su unidad es radianes por segundo (rad/s).</li>
                    </ul>
                    
                    <Formula
                        expression={String.raw`T = \frac{1}{f}`}
                        calculatorId="periodo-frecuencia"
                        definitions={oscilacionesDefinitions}
                        exercises={exercises}
                        complementary={[
                            { description: "Calcular Frecuencia", expression: String.raw`f = \frac{1}{T}` },
                            { description: "Calcular Frec. Angular", expression: String.raw`\omega = 2\pi f` },
                        ]}
                    />
                    
                    <p><strong>Donde:</strong></p>
                    <ul>
                      <li>T = Período (s)</li>
                      <li>f = Frecuencia (Hz o s⁻¹)</li>
                      <li>ω = Frecuencia angular (rad/s)</li>
                    </ul>
                </Concept>
            </TheorySection>

            <TheorySection title="El Sistema Masa-Resorte">
                <Concept title="El Oscilador Armónico Ideal">
                    <p>Un sistema compuesto por una masa (m) unida a un resorte ideal (con constante elástica k) es el prototipo del MAS. La Ley de Hooke (F = -kx) nos dice que la fuerza restauradora del resorte es proporcional al desplazamiento, lo que genera la oscilación.</p>
                    <p>El periodo de oscilación de este sistema no depende de la amplitud del movimiento, sino únicamente de la masa y de la rigidez del resorte.</p>
                    
                    <Formula
                        expression={String.raw`T = 2\pi \sqrt{\frac{m}{k}}`}
                        calculatorId="sistema-masa-resorte"
                        definitions={oscilacionesDefinitions}
                        exercises={exercises}
                        complementary={[
                            { description: "Calcular Masa", expression: String.raw`m = k \left(\frac{T}{2\pi}\right)^2` },
                            { description: "Calcular Constante del Resorte", expression: String.raw`k = m \left(\frac{2\pi}{T}\right)^2` },
                        ]}
                    />
                    
                    <p><strong>Donde:</strong></p>
                    <ul>
                      <li>T = Período de oscilación (s)</li>
                      <li>m = Masa del objeto (kg)</li>
                      <li>k = Constante elástica del resorte (N/m)</li>
                    </ul>
                </Concept>
            </TheorySection>

            <TheorySection title="El Péndulo Simple">
                <Concept title="Oscilaciones por Gravedad">
                    <p>Un péndulo simple consiste en una masa puntual suspendida de un hilo de longitud (L). Para ángulos de desplazamiento pequeños (menores a 15°), el movimiento del péndulo se aproxima muy bien a un Movimiento Armónico Simple.</p>
                    <p>En este caso, la fuerza restauradora es una componente del peso, y el periodo de oscilación depende de la longitud del hilo y de la aceleración de la gravedad (g).</p>
                    
                    <Formula
                        expression={String.raw`T = 2\pi \sqrt{\frac{L}{g}}`}
                        calculatorId="pendulo-simple"
                        definitions={oscilacionesDefinitions}
                        exercises={exercises}
                        complementary={[
                            { description: "Calcular Longitud del Péndulo", expression: String.raw`L = g \left(\frac{T}{2\pi}\right)^2` },
                            { description: "Calcular Gravedad", expression: String.raw`g = L \left(\frac{2\pi}{T}\right)^2` },
                        ]}
                    />
                    
                    <p><strong>Donde:</strong></p>
                    <ul>
                      <li>T = Período de oscilación (s)</li>
                      <li>L = Longitud del péndulo (m)</li>
                      <li>g = Aceleración de la gravedad (9.8 m/s²)</li>
                    </ul>
                </Concept>
            </TheorySection>

            <TheorySection title="Energía en el Movimiento Armónico Simple">
                <Concept title="Conservación de la Energía Mecánica">
                    <p>En un MAS ideal (sin fricción), la energía mecánica total se conserva. Esta energía es la suma de la energía cinética (asociada al movimiento) y la energía potencial elástica (almacenada en el resorte).</p>
                    <p>La energía total es proporcional al cuadrado de la amplitud (A) y a la constante del resorte (k). En los extremos de la oscilación, toda la energía es potencial, mientras que en el punto de equilibrio, toda la energía es cinética.</p>
                    
                    <Formula
                        expression={String.raw`E_T = \frac{1}{2}kA^2`}
                        calculatorId="energia-mas"
                        definitions={oscilacionesDefinitions}
                        exercises={exercises}
                        complementary={[
                            { description: "Calcular Constante del Resorte", expression: String.raw`k = \frac{2E_T}{A^2}` },
                            { description: "Calcular Amplitud", expression: String.raw`A = \sqrt{\frac{2E_T}{k}}` },
                        ]}
                    />
                    
                    <p><strong>Donde:</strong></p>
                    <ul>
                      <li>E_T = Energía mecánica total (J)</li>
                      <li>k = Constante elástica del resorte (N/m)</li>
                      <li>A = Amplitud de la oscilación (m)</li>
                    </ul>
                </Concept>
            </TheorySection>

            <div className="theory-applications-section">
                <h2>
                    <span>🔧</span> Aplicaciones en la Vida Real
                </h2>
                
                <div className="theory-subsection">
                    <h3>🏗️ Ingeniería sísmica</h3>
                    <p>
                        Los edificios modernos se diseñan considerando su frecuencia natural de oscilación. Durante un terremoto, si la frecuencia de las ondas sísmicas coincide con la frecuencia natural del edificio, ocurre resonancia y el edificio puede colapsar. Los ingenieros instalan amortiguadores de masa sintonizada (TMD) en rascacielos: masas enormes (hasta 660 toneladas en el Taipei 101) que oscilan en contrafase con el edificio, reduciendo las vibraciones hasta un 40%.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>⏰ Relojes mecánicos</h3>
                    <p>
                        Los relojes de péndulo usan la propiedad de que el periodo es independiente de la amplitud (isocronismo). Un péndulo de 1 metro oscila con periodo de 2 segundos exactos, sin importar si oscila 5° o 10°. Los relojes de pulsera usan un volante de inercia con resorte espiral que oscila a 4-10 Hz, dividiendo el tiempo con precisión de milisegundos.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🎸 Instrumentos musicales</h3>
                    <p>
                        Las cuerdas de guitarra, piano y violín oscilan en MAS. La frecuencia de oscilación determina la nota musical: la cuerda Mi de guitarra oscila a 329.6 Hz, completando 330 ciclos por segundo. Al cambiar la tensión (afinando) o la longitud (pisando trastes), modificamos la frecuencia y por tanto la nota. Los instrumentos de viento también usan columnas de aire oscilantes.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🚗 Suspensión de vehículos</h3>
                    <p>
                        Los amortiguadores de coches son sistemas masa-resorte diseñados para absorber vibraciones. Los resortes tienen constantes k calculadas para que el periodo de oscilación sea de 1-1.5 segundos, proporcionando confort. Los amortiguadores disipan energía para evitar que el coche siga rebotando. En Fórmula 1, ajustan k con precisión de 1 N/m para optimizar el agarre.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🔬 Microscopios de fuerza atómica</h3>
                    <p>
                        Los AFM usan una micropalanca que oscila a frecuencias de 50-500 kHz. Al acercarse a una superficie, las fuerzas atómicas cambian la frecuencia de oscilación. Detectando cambios de 0.01 Hz, pueden "sentir" átomos individuales y crear imágenes con resolución de 0.1 nanómetros, permitiendo ver la estructura atómica de materiales.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🌊 Boyas y plataformas marinas</h3>
                    <p>
                        Las plataformas petrolíferas flotantes oscilan con las olas. Se diseñan con periodos naturales de 20-30 segundos, muy diferentes del periodo típico de las olas (5-10 segundos), evitando resonancia. Las boyas oceanográficas miden la altura de las olas analizando su propio movimiento oscilatorio, transmitiendo datos para predicción de tsunamis.
                    </p>
                </div>
            </div>

            <div className="theory-history-section">
                <h2>
                    <span>📜</span> Historia y Desarrollo
                </h2>
                
                <div className="theory-subsection">
                    <h3>🏛️ Galileo y el péndulo (1602)</h3>
                    <p>
                        Galileo Galilei descubrió el isocronismo del péndulo observando una lámpara que oscilaba en la catedral de Pisa. Usando su pulso como cronómetro, notó que el periodo era constante independientemente de la amplitud. Este descubrimiento revolucionó la medición del tiempo. En 1656, Christiaan Huygens construyó el primer reloj de péndulo preciso, mejorando la exactitud de segundos por día a segundos por año.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🔬 Robert Hooke y la ley elástica (1660)</h3>
                    <p>
                        Robert Hooke descubrió que la fuerza de un resorte es proporcional a su elongación (F = -kx), publicándola como anagrama en 1660 y revelándola en 1678. Esta ley es fundamental para entender el MAS. Hooke también inventó el resorte espiral para relojes de bolsillo, permitiendo relojes portátiles precisos que revolucionaron la navegación marítima.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>📐 Newton y la mecánica del MAS (1687)</h3>
                    <p>
                        Isaac Newton, en sus Principia Mathematica (1687), desarrolló la teoría matemática completa del movimiento oscilatorio. Demostró que cualquier fuerza restauradora proporcional al desplazamiento produce MAS, y derivó las ecuaciones de periodo para péndulos y sistemas masa-resorte. También estudió el péndulo compuesto y los efectos de la resistencia del aire.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🎵 Fourier y el análisis armónico (1822)</h3>
                    <p>
                        Joseph Fourier demostró que cualquier oscilación periódica compleja puede descomponerse en suma de oscilaciones armónicas simples (series de Fourier). Este descubrimiento revolucionó la física, ingeniería y música. Permite analizar señales complejas (voz, música, vibraciones) como combinación de frecuencias simples, base de la acústica moderna y el procesamiento digital de señales.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>📻 Osciladores electrónicos (siglo XX)</h3>
                    <p>
                        El desarrollo de osciladores electrónicos (circuitos LC, cristales de cuarzo) permitió generar oscilaciones de frecuencias precisas desde Hz hasta GHz. Los relojes de cuarzo (1969) usan cristales que oscilan a 32,768 Hz con precisión de 15 segundos/mes. Los osciladores atómicos de cesio (1955) oscilan a 9,192,631,770 Hz, definiendo el segundo con precisión de 1 segundo en 100 millones de años.
                    </p>
                </div>
            </div>

            <div className="theory-anecdotes-section">
                <h2>
                    <span>✨</span> Anécdotas y curiosidades
                </h2>

                <div className="theory-subsection">
                    <h3>💓 El pulso de Galileo</h3>
                    <p>
                        Galileo usaba su propio pulso como cronómetro para medir periodos de péndulos, ya que los relojes precisos no existían. Irónicamente, su descubrimiento del isocronismo del péndulo permitió crear los primeros relojes precisos. Antes de Galileo, los médicos no tenían forma de medir el pulso cuantitativamente. Después, usaron péndulos calibrados para diagnosticar enfermedades cardíacas.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🌉 El puente de Tacoma Narrows (1940)</h3>
                    <p>
                        El puente colgante de Tacoma Narrows colapsó espectacularmente 4 meses después de inaugurarse. Vientos de solo 68 km/h indujeron oscilaciones por resonancia: la frecuencia del viento coincidió con la frecuencia natural del puente (0.2 Hz). Las oscilaciones crecieron hasta amplitudes de 8 metros, retorciéndose como una serpiente antes de colapsar. Este desastre revolucionó el diseño de puentes, considerando siempre la dinámica oscilatoria.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🏢 El Taipei 101 y su péndulo gigante</h3>
                    <p>
                        El rascacielos Taipei 101 (508 metros) tiene un amortiguador de masa sintonizada de 660 toneladas: una esfera de acero de 5.5 metros suspendida entre los pisos 87-92. Durante el tifón Soudelor (2015), el edificio osciló con amplitud de 1 metro, pero el péndulo osciló 1.5 metros en contrafase, reduciendo el movimiento del edificio. Los visitantes pueden ver el péndulo en acción, oscilando visiblemente durante tormentas.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🎸 La cuerda más grave</h3>
                    <p>
                        El órgano de la catedral de Passau (Alemania) tiene tubos de hasta 11.5 metros que producen notas de 16 Hz, por debajo del umbral de audición humana (20 Hz). No se "oyen" como notas sino como vibraciones que se sienten en el pecho. Algunos órganos tienen tubos de 32 Hz que oscilan tan lentamente que se puede ver el aire entrando y saliendo.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>🌍 El péndulo de Foucault</h3>
                    <p>
                        En 1851, Léon Foucault demostró la rotación de la Tierra usando un péndulo de 67 metros en el Panteón de París. El plano de oscilación del péndulo permanece fijo en el espacio, pero el suelo (la Tierra) gira debajo. En el Polo Norte, el péndulo completa una rotación aparente en 24 horas. En el ecuador, no rota. En París (49°N), tarda 32 horas. Fue la primera demostración visual directa de la rotación terrestre.
                    </p>
                </div>

                <div className="theory-subsection">
                    <h3>⏰ El reloj más preciso</h3>
                    <p>
                        Los relojes atómicos de estroncio (2015) son tan precisos que no perderían ni ganarían 1 segundo en 15 mil millones de años (la edad del universo). Usan átomos de estroncio que oscilan a 429 terahercios (429 billones de veces por segundo). Son tan sensibles que detectan diferencias de tiempo por efectos relativistas: un reloj 1 cm más alto que otro corre más rápido por 10^-18 segundos/segundo debido a la gravedad ligeramente menor.
                    </p>
                </div>
            </div>

            <div className="formula-card">
                <h3>📝 Resumen</h3>
                <p>
                    El Movimiento Armónico Simple (MAS) es un movimiento periódico donde la fuerza restauradora es proporcional al desplazamiento. 
                    El periodo (T) y frecuencia (f) son inversas: T = 1/f. En sistemas masa-resorte: T = 2π√(m/k). En péndulos simples: T = 2π√(L/g). 
                    La energía total se conserva: E_T = ½kA². Es fundamental en ingeniería sísmica, relojes, instrumentos musicales, suspensiones 
                    y tecnología de precisión.
                </p>
            </div>
        </>
    );
};

export default TeoriaOscilaciones;
