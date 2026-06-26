## Errores conceptuales


### Error 1: Confundir el índice de modo con el número de nodos

**Por qué parece correcto**

El alumno aprende que en una cuerda el modo n tiene n antinodos, y generaliza que el modo (m,n) de una placa tiene m nodos en x y n nodos en y. Esta analogía parcial con la cuerda unidimensional parece coherente con la nomenclatura.

**Por qué es incorrecto**

En una placa rectanglar con bordes fijos, el índice m cuenta el número de **semiperíodos** (mitades de longitud de onda) en la dirección x, no el número de líneas nodales interiores. El modo (1,1) tiene cero líneas nodales interiores (solo los bordes son nodales) y un solo lóbulo de vibración. El modo (2,1) tiene una línea nodal interior paralela al eje y, no dos. El número de líneas nodales interiores en la dirección x es m−1, no m.

**Señal de detección**

El alumno describe el modo (1,1) como "modo con una línea nodal en x y una en y" en lugar de "modo con cero líneas nodales interiores". Dibuja patrones nodales con más líneas de las que corresponden al índice indicado.

**Corrección conceptual**

Para bordes fijos, el número de líneas nodales interiores en la dirección x es m−1 y en la dirección y es n−1. El modo (m,n) tiene (m−1)×(n−1) puntos nodales interiores. El modo fundamental (1,1) tiene la superficie completamente libre de nodos interiores: vibra como una sola burbuja.

**Mini-ejemplo de contraste**

Para el modo (3,2) de una placa rectangular, el alumno dibuja 3 líneas nodales en x y 2 en y, obteniendo 6 regiones. La interpretación correcta es 2 líneas nodales en x y 1 línea nodal en y, produciendo 6 regiones también (3×2), pero con 2 líneas en una dirección y 1 en la otra, no 3 y 2.

---


### Error 2: Creer que la membrana y la placa son el mismo modelo con distinto material

**Por qué parece correcto**

Ambas son estructuras laminares delgadas que vibran, ambas tienen modos (m,n) y ambas tienen una fórmula de frecuencia modal con estructura similar. El alumno intuye que la diferencia es solo de rigidez del material.

**Por qué es incorrecto**

La placa y la membrana tienen mecanismos físicos de restitución fundamentalmente distintos. La placa se resiste a doblarse por su rigidez elástica, proporcional al cubo del espesor. La membrana ideal no tiene rigidez a la flexión; su restitución viene exclusivamente de la tensión superficial [[tension_superficial_de_la_membrana]]. Una placa sin tensión y una membrana sin rigidez son sistemas completamente diferentes: la primera puede sostenerse sola, la segunda colapsaría. Además, la placa exhibe dispersión de velocidad (las ondas de alta frecuencia son más rápidas), mientras que la membrana es no dispersiva.

**Señal de detección**

El alumno aplica la fórmula de placa a un parche de batería (que es una membrana) o intenta calcular [[rigidez_a_la_flexion_de_la_placa]] para una membrana de mylar usando su módulo de Young, sin considerar que a esos espesores (80 µm) la rigidez a la flexión es completamente despreciable frente a la tensión.

**Corrección conceptual**

El criterio operativo es comparar la rigidez a la flexión con el producto tensión × longitud al cuadrado. Si el cociente es mucho menor que 1, el sistema es membrana; si es mucho mayor que 1, es placa. Para una membrana de mylar de 80 µm con tensión de 1500 N/m y longitud de 0.35 m, el cociente es del orden de 0.0001: modelo de membrana puro.

**Mini-ejemplo de contraste**

Aplicar la fórmula de placa a un parche de batería produce una frecuencia fundamental de varios kHz, muy alejada de los 80–120 Hz observados. Usar la fórmula de membrana con los parámetros correctos de tensión y densidad superficial da el resultado correcto.

---


### Error 3: Ignorar la degeneración modal en geometrías cuadradas

**Por qué parece correcto**

El alumno calcula [[f_mn]] para una placa cuadrada y obtiene valores para el modo (1,2) y el modo (2,1). Comprueba que son iguales y concluye que "el modo (1,2) y el (2,1) son el mismo modo". Esto parece ahorra trabajo de análisis.

**Por qué es incorrecto**

La degeneración modal significa que ambos modos tienen la misma frecuencia, pero son **modos físicamente distintos** con patrones nodales diferentes. El modo (1,2) tiene una línea nodal horizontal y el (2,1) tiene una línea nodal vertical. Cualquier superposición de ambos es también una solución válida, y la excitación práctica siempre excita ambos simultáneamente. El sistema tiene dos grados de libertad independientes en esa frecuencia, no uno.

**Señal de detección**

El alumno calcula el espectro modal de una placa cuadrada y lista cada frecuencia solo una vez, omitiendo los modos degenerados duplicados. Esto subestima la densidad modal real por un factor de casi 2 en muchos rangos de frecuencia.

**Corrección conceptual**

En el espectro modal de una placa cuadrada, cada par (m,n) con m ≠ n debe contarse dos veces: una para el modo (m,n) y otra para el modo (n,m). La densidad modal real es casi el doble de la calculada contando solo los pares con m ≤ n.

**Mini-ejemplo de contraste**

Una placa cuadrada de 0.3 m × 0.3 m tiene los modos (1,2) y (2,1) a la misma frecuencia. Si se excita la placa con una fuente en el centro y se observa el patrón nodal, se verá una superposición de ambos modos formando líneas diagonales, no las líneas verticales u horizontales de los modos puros.

## Errores de modelo


### Error 1: Aplicar el modelo de Kirchhoff a placas gruesas sin verificar la condición de validez

**Por qué parece correcto**

La fórmula de Kirchhoff es sencilla y da resultados numéricos sin señal de error. El alumno la aplica para cualquier placa sin verificar el cociente espesor/dimensión, asumiendo que siempre es válida.

**Por qué es incorrecto**

Cuando el espesor [[h_placa]] supera el 10 % de la dimensión menor en plano, la deformación por cortante transversal reduce significativamente las frecuencias reales por debajo de las predichas por Kirchhoff. El error crece con el índice de modo y puede superar el 20 % para modos altos en placas moderadamente gruesas.

**Señal de detección**

Las frecuencias medidas experimentalmente son sistemáticamente menores que las calculadas con Kirchhoff, con discrepancias crecientes para modos de mayor índice. Si se calcula el cociente [[h_placa]]/[[b_dim]] y resulta mayor de 0.1, el modelo de Kirchhoff es sospechoso.

**Corrección conceptual**

Para placas con cociente espesor/dimensión entre 0.1 y 0.3, usar la corrección de Mindlin, que añade un término de deformación por cortante que rebaja las frecuencias modales. La corrección es más importante para los modos de alto índice y para materiales con módulo de cortante bajo.

**Mini-ejemplo de contraste**

Una placa de acero de 0.1 m × 0.1 m × 0.015 m (cociente 15 %) predicha por Kirchhoff daría [[f_mn]] un 10–15 % más alta de la real. Un experimentador que confíe en esa predicción identificará incorrectamente los modos medidos como modos de índice más alto que el real.

---


### Error 2: Asumir que las condiciones de contorno no modifican los resultados cualitativos

**Por qué parece correcto**

La estructura funcional de la fórmula modal no cambia con las condiciones de contorno: siempre aparecen índices modales y dimensiones. El alumno concluye que los resultados cualitativos son robustos frente al tipo de borde.

**Por qué es incorrecto**

Las condiciones de borde modifican no solo los coeficientes numéricos sino también cuáles son los patrones nodales admisibles. Para bordes libres, el modo con la frecuencia más baja no es el (1,1) sino una deformación con forma de "silla de montar" que involucra curvatura en ambas direcciones. Los bordes empotrados producen frecuencias hasta un 50 % más altas que los bordes simplemente apoyados para el mismo modo.

**Señal de detección**

El alumno aplica la fórmula de placa simplemente apoyada a una placa empotrada en sus cuatro bordes y obtiene frecuencias un 30–50 % menores que las reales para el modo fundamental.

**Corrección conceptual**

Para bordes empotrados, los coeficientes numéricos de la fórmula de [[f_mn]] son mayores que para bordes simplemente apoyados. Para el modo fundamental (1,1), la frecuencia con bordes empotrados es aproximadamente 1.5 veces la del borde simplemente apoyado.

**Mini-ejemplo de contraste**

Una placa de acero de 0.3 m × 0.2 m × 2 mm empotrada en todos sus bordes tiene [[f_mn]] del modo (1,1) en torno a 240 Hz, mientras que la fórmula de borde simplemente apoyado da aproximadamente 160 Hz. La diferencia del 50 % es inaceptable para cualquier aplicación de ingeniería.

## Errores matemáticos


### Error 1: Calcular [[rigidez_a_la_flexion_de_la_placa]] sin el factor (1 − nu²) en el denominador

**Por qué parece correcto**

El alumno recuerda que la rigidez a la flexión de una viga es E·I, donde I es el momento de inercia de la sección. Para una placa de ancho unitario y espesor h, el momento de inercia es h³/12. El alumno escribe la rigidez de placa directamente como [[modulo_de_young]]·[[h_placa]]³/12, omitiendo el factor (1−[[nu_p]]²) que diferencia la placa de la viga.

**Por qué es incorrecto**

La placa está restringida en la dirección transversal por su propia extensión bidimensional; no puede contraerse lateralmente como una viga. Esto genera una tensión biaxial adicional, recogida en la fórmula de [[rigidez_a_la_flexion_de_la_placa]] mediante el término de Poisson del denominador. Omitir este término sobreestima [[rigidez_a_la_flexion_de_la_placa]] y todas las frecuencias modales; para el acero con [[nu_p]] de 0.3, el incremento de frecuencia es aproximadamente 1.047: un error del 5 % en cada frecuencia.

**Señal de detección**

Todos los valores de [[f_mn]] calculados resultan ligeramente más altos que los medidos experimentalmente, en un porcentaje constante independiente del modo. Comprobar si el valor de [[rigidez_a_la_flexion_de_la_placa]] incluye el factor (1−[[nu_p]]²) en el denominador.

**Corrección conceptual**

La fórmula correcta es:

{{f:rigidez_flexion_placa}}

El factor (1−[[nu_p]]²) siempre va en el denominador, no en el numerador.

**Mini-ejemplo de contraste**

Para acero con [[nu_p]] de 0.3, el factor (1−0.09) da 0.91. Omitirlo sobreestima [[rigidez_a_la_flexion_de_la_placa]] en un 10 % y [[f_mn]] en un 5 %. Para goma con [[nu_p]] de 0.49, el factor es 0.76, y omitirlo sobreestima [[f_mn]] en un 15 %.

---


### Error 2: Confundir la densidad volumétrica con la densidad superficial

**Por qué parece correcto**

La fórmula de [[f_mn]] para la placa usa [[rho_s]] en kg/m², pero muchas tablas de propiedades de materiales solo dan [[rho_vol]] en kg/m³. El alumno usa [[rho_vol]] directamente sin multiplicar por [[h_placa]], introduciendo un error dimensional inadvertido.

**Por qué es incorrecto**

[[rho_s]] y [[rho_vol]] tienen dimensiones diferentes: kg/m² frente a kg/m³. Usar [[rho_vol]] donde corresponde [[rho_s]] produce un valor de [[f_mn]] con unidades incorrectas y numéricamente puede llevar a frecuencias del orden de √([[h_placa]]) veces más altas que las reales, lo que para [[h_placa]] en metros es un error del orden de la raíz de milésimas.

**Señal de detección**

Si se sustituyó [[rho_vol]] sin multiplicar por [[h_placa]], el resultado de [[f_mn]] tendrá unidades de m^(1/2)·Hz en lugar de Hz. Un análisis dimensional básico del resultado detecta inmediatamente el error.

**Corrección conceptual**

Calcular siempre [[rho_s]] como el producto [[rho_vol]] × [[h_placa]] antes de sustituir en la fórmula de [[f_mn]]. Para el acero de 2 mm, [[rho_s]] vale 7850 kg/m³ × 0.002 m, dando 15.7 kg/m².

**Mini-ejemplo de contraste**

Sustituir [[rho_vol]] de 7850 kg/m³ en lugar de [[rho_s]] de 15.7 kg/m² en la fórmula del modo (1,1) de una placa de acero de 0.3 × 0.2 m produce una frecuencia aproximadamente 22 veces más baja que la real (raíz de 7850/15.7), dando un valor absurdo de unos 7 Hz en lugar de 160 Hz.

## Errores de interpretación


### Error 1: Interpretar el modo fundamental como el único modo relevante

**Por qué parece correcto**

El modo (1,1) tiene la frecuencia más baja y, en general, la mayor amplitud bajo excitación difusa. El alumno concluye que es el único que importa para el análisis de resonancia, especialmente si la fuente de excitación es de banda estrecha.

**Por qué es incorrecto**

Para excitaciones de banda ancha (impactos, ruido de tráfico, maquinaria), múltiples modos pueden ser excitados simultáneamente. Ignorar los modos superiores subestima la respuesta vibratoria total, que es la suma cuadrática de las contribuciones de todos los modos en la banda de excitación. En estructuras de ingeniería civil, los modos superiores pueden contribuir más del 30 % de la respuesta total en el rango de baja frecuencia.

**Señal de detección**

El análisis incluye solo el modo fundamental para estimar la respuesta a una excitación impulsiva, pero el espectro medido muestra varios picos bien definidos por encima de [[f_mn]] del modo (1,1).

**Corrección conceptual**

El análisis modal completo requiere sumar las contribuciones de todos los modos en el rango de frecuencia de interés. La superposición modal es el método estándar en análisis estructural dinámico.

**Mini-ejemplo de contraste**

Una placa de acero de 0.3 × 0.2 m recibe un golpe puntual en su centro. El análisis con solo el modo (1,1) predice una respuesta sinusoidal limpia en 160 Hz. La señal medida muestra, además, picos en 400 Hz (modo 2,1), 640 Hz (modo 1,2) y varios más, ninguno excitable desde el centro con la simetría del golpe para los modos antisimétricos.

---


### Error 2: Asumir que una mayor frecuencia modal implica mayor amplitud de vibración

**Por qué parece correcto**

En muchos sistemas simples, una excitación más enérgica produce mayor amplitud. El alumno generaliza esto pensando que los modos de mayor frecuencia, al acumular más energía por modo, vibran con mayor amplitud.

**Por qué es incorrecto**

La amplitud de vibración de cada modo no depende de su frecuencia sino de la eficiencia del acoplamiento entre la fuente de excitación y el patrón espacial del modo. Un modo de alta frecuencia puede tener amplitud nula si la fuente está ubicada en un nodo de ese modo. La potencia modal es el producto de la fuerza de excitación por la velocidad del modo en el punto de aplicación, y puede ser cero o máximo independientemente de la frecuencia.

**Señal de detección**

El alumno predice que los modos de índice alto tienen mayor amplitud en respuesta a una excitación puntual de baja frecuencia, lo que contradice el principio de resonancia.

**Corrección conceptual**

La amplitud de cada modo en respuesta estacionaria es máxima cuando la frecuencia de excitación coincide con la frecuencia natural del modo ([[f_mn]]). Lejos de la resonancia, la amplitud cae con la distancia relativa en el espectro. La amplitud relativa entre modos depende de la función de respuesta en frecuencia, no de la frecuencia del modo por sí sola.

**Mini-ejemplo de contraste**

Una fuente de excitación en 160 Hz excita preferentemente el modo (1,1) de la placa de acero de 0.3 × 0.2 m. Los modos (2,1) a 400 Hz y (1,2) a 640 Hz prácticamente no se excitan porque la fuente opera lejos de sus frecuencias naturales.

## Regla de autocontrol rápido

Antes de dar por bueno el cálculo de [[f_mn]] para una placa o membrana, verificar sistemáticamente:

1. **Unidades de [[modulo_de_young]]:** debe estar en Pa (no en GPa). Multiplicar por 10⁹ si está en GPa.
2. **Densidad superficial calculada:** verificar que [[rho_s]] se ha obtenido como [[rho_vol]] × [[h_placa]] en kg/m².
3. **Factor (1−[[nu_p]]²) en el denominador de [[rigidez_a_la_flexion_de_la_placa]]:** no debe estar en el numerador ni omitido.
4. **Índices m y n son al menos 1:** el índice 0 no tiene sentido para bordes fijos.
5. **Modo fundamental es el más bajo:** [[f_mn]] del modo (1,1) debe ser menor que [[f_mn]] del modo (2,1) y del (1,2). Si no lo es, hay un error en los parámetros.
6. **Orden de magnitud:** [[f_mn]] del modo (1,1) de una placa metálica decimétrica de milímetros de espesor debe estar en el rango de decenas a cientos de Hz. Valores en kHz o MHz señalan error de unidades.