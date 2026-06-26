const e=`# Dispersión y atenuación en sólidos

## Contexto conceptual

Cuando una onda mecánica viaja por un sólido real, nunca lo hace sin pérdidas. La energía se disipa gradualmente mediante dos mecanismos fundamentales: la **atenuación** intrínseca del material y la **dispersión** que hace que diferentes frecuencias viajen a velocidades distintas. Estos fenómenos son cruciales en ensayos no destructivos, donde la capacidad de detectar defectos internos depende directamente de cuánta señal sobrevive después de atravesar el material.

La atenuación limita la profundidad máxima de inspección, mientras que la dispersión distorsiona los pulsos y afecta la resolución temporal. Comprender ambos efectos permite seleccionar la frecuencia óptima del transductor, interpretar la amplitud de los ecos y establecer los límites de detección para cada material.

Estos efectos se extienden más allá de los ensayos no destructivos: en imágenes médicas, la atenuación determina la profundidad de visualización; en geofísica, permite inferir propiedades del subsuelo; en ingeniería de materiales, proporciona información sobre microestructura y defectos.

## 🟢 Nivel esencial

Imagina que lanzas una piedra en un estanque con barro: las ondas se debilitan rápidamente a medida que se alejan del punto de impacto. En los sólidos ocurre algo similar, pero con dos diferencias clave. Primero, la atenuación no es solo por dispersión geométrica, sino que el material mismo absorbe energía y la convierte en calor. Segundo, diferentes colores (frecuencias) de la onda viajan a velocidades ligeramente distintas, como si el agua tuviera diferentes "viscosidades" para cada color.

El coeficiente [[alpha]] cuantifica qué tan rápido desaparece la señal. Un [[alpha]] grande significa que la onda muere en pocos centímetros; un [[alpha]] pequeño permite que la señal viaje metros antes de volverse indetectable. La frecuencia [[f]] es la variable que más influye: frecuencias altas dan mejor resolución pero se atenúan más rápido, creando un compromiso fundamental entre poder ver detalles pequeños y poder penetrar profundamente.

En acero, una frecuencia de 5 MHz detecta defectos de 0.5 mm pero solo penetra pocos centímetros; 1 MHz penetra decenas de centímetros pero solo detecta defectos mayores de 2-3 mm. Esta relación inversa entre resolución y penetración es universal y determina la selección de frecuencia.

## 🔵 Nivel formal

La atenuación exponencial describe cómo la amplitud disminuye con la distancia según una ley matemática precisa. La relación fundamental conecta la amplitud inicial [[A0]], la amplitud a distancia [[A]], el coeficiente de atenuación [[alpha]] y la distancia recorrida [[x]]:

{{f:atenuacion_exponencial}}

El exponente negativo garantiza que la amplitud siempre disminuya con la distancia en medios pasivos. Cuando [[x]] iguala la longitud de atenuación [[L_d]], la amplitud se reduce al factor 1/e ≈ 0.37 del valor inicial.

La longitud característica de atenuación se define como el inverso del coeficiente:

{{f:longitud_atenuacion}}

Esta relación proporciona la distancia a la cual la señal ha perdido el 63% de su amplitud inicial. Materiales con alta atenuación tienen longitudes características cortas, y viceversa.

Para expresar las pérdidas en escala logarítmica, usada comúnmente en especificaciones técnicas, se emplean los decibelios:

{{f:perdida_db}}

Esta formulación logarítmica permite comprimir rangos dinámicos amplios y sumar pérdidas de múltiples fuentes. La base 10 del logaritmo y el factor 20 provienen de la definición estándar de decibelios para amplitud. El valor [[L_db]] resultante es la métrica más utilizada en especificaciones industriales de equipos ultrasónicos.

La dependencia del coeficiente de atenuación con la frecuencia sigue generalmente una ley de potencia:

{{f:dependencia_frecuencia}}

Esta relación matemática conecta el coeficiente de atenuación con la frecuencia mediante una ley de potencia. El exponente n caracteriza el mecanismo dominante de pérdida: n ≈ 1 para scattering, n ≈ 2 para absorción termoelástica, valores intermedios para mecanismos combinados.

En medios dispersivos, la velocidad de fase [[v_f]] y la velocidad de grupo [[v_g]] no coinciden. La relación diferencial entre ambas depende de cómo varía la velocidad de fase con la frecuencia:

{{f:relacion_dispersion}}

En medios no dispersivos, la derivada es nula y ambas velocidades coinciden. En medios dispersivos, la derivada es no nula, causando la diferencia entre velocidades.

## 🔴 Nivel estructural

La atenuación en sólidos emerge de interacciones microscópicas entre ondas y la microestructura material. Los mecanismos disipativos incluyen absorción termoelástica, scattering por granos e inclusiones, y relajación estructural. Cada mecanismo tiene **dependencia específica con la frecuencia**, lo que explica la complejidad de la relación entre [[alpha]] y [[f]] y la necesidad de modelos empíricos de ley de potencia.

La absorción termoelástica domina en metales puros, aumentando con el cuadrado de la frecuencia. El scattering por granos es importante cuando el tamaño de grano es comparable a la longitud de onda, redirigiendo energía en direcciones aleatorias con dependencia de tipo Rayleigh ([[alpha]] proporcional a la cuarta potencia de la frecuencia) para granos pequeños. La relajación estructural ocurre cuando la frecuencia de la onda se aproxima a frecuencias características del material, causando **máxima disipación** en bandas estrechas.

El modelo exponencial simple es válido bajo condiciones que deben verificarse: medio homogéneo e isótropo a escala de la longitud de onda, propagación en haz colimado, [[alpha]] constante con distancia y temperatura, amplitud muy por encima del ruido (SNR > 20 dB) y deformación en régimen lineal. El modelo se rompe cuando [[x]] > 3[[L_d]], en materiales con gradientes de propiedades, cerca de resonancias del material, o cuando el tamaño de grano es comparable a la longitud de onda.

Las **señales de fallo** incluyen gráfica ln([[A]]/[[A0]]) vs [[x]] no lineal, [[alpha]] que varía con la distancia, valores negativos de [[alpha]] y pérdida total superior a 40-60 dB. Estos indicadores permiten al alumno detectar cuándo el modelo deja de ser aplicable y debe recurrirse a formulaciones más generales.

La dispersión geométrica afecta la amplitud medida en ensayos reales. En haz divergente, la densidad de energía disminuye con el cuadrado de la distancia. Los sistemas deben compensar este efecto para aislar la atenuación verdadera del material, separando contribuciones intrínsecas de contribuciones geométricas.

La dispersión causa ensanchamiento temporal de pulsos ultrasónicos, limitando la resolución axial en detección de defectos cercanos. Este efecto, gobernado por la diferencia entre [[v_f]] y [[v_g]], hace que ecos de defectos próximos se solapen temporalmente, degradando la capacidad de discriminación del sistema.

> [!WARNING]
> El modelo exponencial se rompe cuando [[alpha]] varía con la distancia o cuando la amplitud se vuelve comparable al ruido.

> [!NOTE]
> En materiales anisótropos, [[alpha]] y las velocidades dependen de la dirección, pudiendo introducir errores del 20-50%.

La selección de frecuencia optimiza resolución espacial contra penetración. En aceros, 5-10 MHz ofrecen buen compromiso; en hormigón, pueden requerirse frecuencias tan bajas como 0.5 MHz. Esta optimización depende críticamente de [[L_d]] y del exponente [[n]] de la ley de potencia.

## Interpretación física profunda

El signo negativo en la atenuación exponencial expresa el segundo principio de la termodinámica: la energía de onda nunca puede aumentar espontáneamente en medios pasivos. [[alpha]] representa degradación irreversible de energía coherente en calor.

La diferencia entre [[v_f]] y [[v_g]] distingue propagación de fase de transporte de información. En medios no dispersivos coinciden, pero en materiales reales pueden diferir hasta un 20%.

[[L_d]] establece la escala física donde los procesos disipativos actúan significativamente. Es la distancia característica de atenuación para cada material-frecuencia.

La dispersión anómala ocurre cerca de resonancias materiales, donde [[v_g]] puede ser mayor que [[v_f]] o incluso negativa sin violar la causalidad.

## Orden de magnitud

En metales (1-10 MHz), [[alpha]] varía de 0.1 Np/m (aluminio) a 10 Np/m (aceros), correspondiendo a [[L_d]] de 10 m a 0.1 m. En polímeros, [[alpha]] puede ser 100-1000 Np/m con [[L_d]] de 1-10 mm.

Una atenuación de 20 dB reduce la amplitud a 1/10; 40 dB a 1/100; 60 dB a 1/1000. Pérdidas > 40-60 dB hacen la detección poco fiable. Las velocidades de fase en metales varían de 3000-6000 m/s.

En tejidos biológicos, [[alpha]] varía de 5-20 Np/m (tejidos blandos) a 200-500 Np/m (hueso cortical). Estas diferencias se explotan en imágenes médicas para crear contraste.

En geofísica, factores Q de 100-1000 (rocas consolidadas) vs 10-50 (sedimentos) indican diferentes niveles de atenuación sísmica.

## Método de resolución personalizado

Protocolo para caracterizar atenuación:

1. **Calibración**: Medir [[A0]] usando bloque de referencia con atenuación despreciable
2. **Medición**: Registrar [[A]] a diferentes distancias [[x]] manteniendo parámetros constantes
3. **Extracción**: Calcular [[alpha]] de la pendiente del gráfico ln([[A]]/[[A0]]) vs [[x]]
4. **Verificación**: Medir [[v_f]] a diferentes frecuencias para detectar dispersión
5. **Optimización**: Seleccionar frecuencia que balancee resolución vs atenuación aceptable

Un error común es obtener [[alpha]] que varía con la distancia, sugiriendo falta de compensación de dispersión geométrica o material no homogéneo.

Para alta precisión, usar método de transmisión-through con muestras de diferentes espesores pero idénticas en composición. En control de calidad industrial, se usan métodos de comparación relativa contra patrones conocidos.

## Casos especiales y ejemplo extendido

**Materiales compuestos**: Presentan atenuación anisotrópica fuerte. La atenuación paralela a fibras puede ser 3-5 veces menor que perpendicular. En fibra de carbono, diferencias de hasta orden de magnitud entre direcciones.

**Efectos de temperatura**: En polímeros, [[alpha]] aumenta drásticamente cerca de la temperatura de transición vítrea. Un cambio de 20 °C puede multiplicar [[alpha]] por 10. Es crítico controlar temperatura en inspecciones plásticas.

**Dispersión cerca de resonancias**: La velocidad de fase varía abruptamente, causando dispersión anómala. [[v_g]] puede ser menor que [[v_f]], distorsionando pulsos severamente. Importante en cerámicas piezoeléctricas.

**Materiales porosos**: La porosidad introduce atenuación adicional por movimiento de fluidos. En hormigón, atenuación puede ser 10-100 veces mayor que material denso.

**Textura y anisotropía**: En metales laminados, la orientación de granos causa anisotropía en atenuación, crucial en componentes aeroespaciales.

## Preguntas reales del alumno

¿Por qué la atenuación aumenta con la frecuencia?
Frecuencias altas significan ciclos más rápidos de deformación, dando menos tiempo para relajaciones materiales. Además, longitudes de onda cortas interactúan más fuertemente con microestructuras como granos, aumentando el scattering.

¿Puede un material tener atenuación negativa?
No en materiales pasivos. La atenuación negativa implicaría amplificación, requiriendo energía externa. Si se obtiene [[alpha]] negativo, indica error de calibración o falta de compensación de dispersión geométrica.

¿Cómo se distingue la atenuación del material de la dispersión geométrica?
La dispersión geométrica depende solo de la geometría del haz y puede calcularse teóricamente. La atenuación del material es intrínseca y se obtiene midiendo a múltiples distancias y eliminando la contribución geométrica conocida.

¿Por qué usamos decibelios en lugar de amplitud directa?
Los decibelios comprimen rangos dinámicos grandes y permiten sumar pérdidas de diferentes fuentes. Además, muchos detectores responden logarítmicamente, haciendo los dB más intuitivos para evaluar calidad de señal.

¿Qué es la dispersión anómala?
Ocurre cerca de resonancias donde la velocidad de fase disminuye con la frecuencia. Puede resultar en velocidades de grupo superiores o negativas, fundamental en metamateriales acústicos.

## Conexiones transversales y rutas de estudio

La atenuación conecta con termodinámica de procesos irreversibles y física de la materia condensada. Para profundizar, estudiar [velocidad de propagación en sólidos](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/velocidad-de-propagacion-en-solidos) y [impedancia mecánica](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/impedancia-mecanica-en-solidos). Es esencial para [aplicaciones ultrasonidos](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/aplicaciones-ultrasonidos-y-ensayos).

En ondas electromagnéticas, conceptos análogos aparecen en medios con pérdidas dieléctricas. En óptica, la dispersión cromática sigue principios matemáticos idénticos a la dispersión acústica.

## Síntesis final

La dispersión y atenuación gobiernan la viabilidad de ensayos ultrasónicos mediante la degradación progresiva de la señal. El coeficiente [[alpha]] cuantifica pérdidas intrínsecas, mientras que la diferencia entre [[v_f]] y [[v_g]] caracteriza la dispersión. La selección óptima de frecuencia balancea resolución contra penetración, determinada por [[L_d]].

Estos fenómenos permiten optimizar aplicaciones existentes y desarrollar nuevas tecnologías como metamateriales acústicos y sistemas de imagen ultrasónica. La investigación actual se enfoca en materiales con atenuación ajustable mediante diseño microestructural.
`;export{e as default};
