const e=`# Aplicaciones

## 1. Juntas de dilatación en puentes y raíles ferroviarios

Los puentes metálicos y las vías de ferrocarril están sometidos a variaciones estacionales de temperatura que pueden superar los 60 K entre invierno y verano. Si los extremos de un tramo metálico se empotraran rígidamente sin dejarle espacio para moverse, la dilatación impedida generaría una tensión compresiva capaz de superar el límite elástico del acero y producir el pandeo lateral de la estructura, un fallo catastrófico conocido en ingeniería ferroviaria como deformación solar.

La solución de diseño es la junta de dilatación: un espacio calculado entre tramos contiguos que permite el movimiento libre de [[DeltaL]] sin generar tensiones internas. La longitud de la junta se calcula directamente aplicando la ley de dilatación lineal con [[alpha]] del acero, [[L0]] del tramo y [[DeltaT]] máximo esperado entre la temperatura de montaje y la temperatura extrema de servicio. En los puentes colgantes modernos de gran vano, los aparatos de apoyo con rodillos o neopreno permiten desplazamientos horizontales de varios decímetros.

El principio de esta aplicación es que no se puede combatir la dilatación sino alojarla: el diseño correcto acepta que [[DeltaL]] ocurrirá y proporciona el recorrido necesario para que lo haga sin dañar la estructura.

Variable dominante: el coeficiente de dilatación lineal [[alpha]] del material estructural y la longitud total del tramo [[L0]] determinan el recorrido mínimo que debe tener la junta.
Límite de validez: el modelo lineal con [[alpha]] constante es válido para variaciones de temperatura inferiores a 200 K desde la temperatura de montaje; para estructuras expuestas a fuego o a temperaturas extremas de proceso se requiere el modelo con [[alpha]](T) variable.

## 2. Termostatos bimetálicos

Un termostato bimetálico consiste en dos láminas de metales distintos —típicamente latón con [[alpha]] ≈ 19×10⁻⁶ K⁻¹ y acero con [[alpha]] ≈ 12×10⁻⁶ K⁻¹— soldadas o remachadas a lo largo de toda su superficie. Al calentarse el conjunto, el latón intenta dilatarse más que el acero, pero el acoplamiento mecánico impide que lo haga libremente. La diferencia de [[DeltaL]] entre las dos láminas genera una tensión interna que se libera mediante la curvatura del conjunto: el bimetal se dobla hacia el lado del material con menor [[alpha]].

Esta curvatura es proporcional a [[DeltaT]] y a la diferencia de [[alpha]] entre los dos materiales, y puede actuar mecánicamente sobre un contacto eléctrico: cuando la temperatura alcanza el umbral de diseño, el bimetal curvado abre o cierra el circuito. Así funciona el termostato de los calentadores de agua domésticos, los disyuntores térmicos y muchos interruptores de seguridad industriales.

La ventaja de este dispositivo es que convierte directamente una variación de temperatura en un desplazamiento mecánico sin necesidad de ningún elemento electrónico activo, con una fiabilidad extraordinaria y sin consumo de energía propia.

Variable dominante: la diferencia entre los coeficientes [[alpha]] de los dos materiales y la longitud de la lámina bimetálica determinan la sensibilidad y el recorrido del actuador térmico.
Límite de validez: el modelo lineal de curvatura es válido para [[DeltaT]] < 150 K aproximadamente; por encima, la respuesta puede volverse no lineal por el cambio de propiedades mecánicas y por la plastificación de las láminas.

## 3. Calibración de instrumentos de medida de precisión

Las reglas patrón de metrología, los bloques de calibre Johansson y los interferómetros de longitud de onda están fabricados en materiales de bajo [[alpha]] —acero inoxidable de baja dilatación, invar o cerámica zerodur— para minimizar el efecto de [[DeltaT]] sobre la longitud de referencia [[L0]]. Sin embargo, incluso en materiales con [[alpha]] ≈ 1×10⁻⁶ K⁻¹, una variación de temperatura de 1 K sobre una regla de 1 m produce un error de 1 micrómetro, lo que puede ser crítico en metrología de alta precisión.

Las salas de metrología industrial se climatizanpor ello a 20 °C ± 0.1 K y los patrones se aclimatan durante 24 horas antes de su uso. En metrología de ultra-precisión se aplica la corrección de dilatación explícitamente: se mide la temperatura real del patrón y se calcula [[DeltaL]] respecto a la temperatura de referencia, corrigiendo la lectura en consecuencia.

Este ejemplo ilustra que la ley de dilatación lineal no solo predice problemas a escala de ingeniería sino también correcciones a escala submicrométrica en ciencia de precisión.

Variable dominante: [[alpha]] del material del patrón y la variación de temperatura [[DeltaT]] respecto a 20 °C determinan el error de longitud introducido sin corrección.
Límite de validez: para objetos de longitud superior a 1 m y precisiones inferiores a 1 micrómetro, es necesario conocer [[alpha]] del material con una incertidumbre inferior al 1% y controlar [[DeltaT]] con precisión de décimas de kelvin.

## 4. Diseño de tuberías industriales y plantas de proceso

Las tuberías de vapor, de gas de proceso y de fluidos a alta temperatura en refinerías y plantas petroquímicas experimentan variaciones de temperatura de hasta 400 K entre el arranque frío y la operación nominal. Para una tubería de acero de 100 m de longitud con [[DeltaT]] de 300 K, la elongación calculada con la ley de dilatación lineal supera los 36 cm. Si la tubería estuviera soldada rígidamente a las estructuras de soporte en ambos extremos, esa elongación impedida generaría tensiones axiales que podrían romper soldaduras y bridas en pocos ciclos de arranque-parada.

El diseño de tuberías industriales incorpora lazos de expansión (tramos en forma de U o en zigzag), fuelles metálicos y soportes deslizantes que permiten el movimiento libre de [[DeltaL]] sin transmitir fuerzas excesivas a los equipos conectados (bombas, compresores, intercambiadores). La longitud de los lazos de expansión se calcula a partir de [[DeltaL]] esperado y de la flexibilidad de la tubería, usando códigos de diseño como ASME B31.3.

El dominio de la ley de dilatación lineal es aquí prerequisito directo del cálculo de flexibilidad de tuberías, que combina [[DeltaL]] con el módulo de Young del material para estimar tensiones y reacciones en los apoyos.

Variable dominante: [[DeltaL]] total acumulado en el tramo de tubería entre puntos de anclaje fijo es la variable de diseño que dimensiona los elementos de compensación de movimiento.
Límite de validez: para [[DeltaT]] superiores a 300 K, [[alpha]] del acero varía en más de un 5% y es necesario usar el valor promedio tabulado en el intervalo o integrar [[alpha]](T) sobre el rango de temperatura de operación.

## 5. Expansión de fluidos en depósitos y sistemas hidráulicos cerrados

Cuando un depósito de combustible, un circuito de agua de refrigeración o un sistema hidráulico se llenan completamente con un líquido y luego se calientan, el líquido intenta expandirse con su coeficiente [[beta]] propio (por ejemplo, aceite hidráulico con [[beta]] ≈ 700×10⁻⁶ K⁻¹). Simultáneamente, el recipiente metálico también se dilata con su [[beta]] equivalente a 3·[[alpha]] del metal. La variación neta de volumen libre disponible para el líquido es la diferencia entre la expansión del líquido y la del recipiente.

Si el sistema es completamente rígido y cerrado sin dispositivo de compensación, esa diferencia de dilatación genera una presión interna que puede ser extraordinariamente elevada: para un aceite hidráulico con [[beta]] cuatro veces mayor que el del acero, una variación de temperatura de 50 K en un circuito lleno produce una presión de decenas de bar, suficiente para reventar empalmes o dañar sellos.

La solución estándar es el depósito de expansión (o vaso de expansión): un recipiente conectado al sistema con un volumen libre calculado para absorber [[DeltaV]] del fluido sin generar presión excesiva. La capacidad del depósito se dimensiona directamente a partir de la ley de dilatación volumétrica aplicada al volumen total del fluido y a [[DeltaT]] máximo de operación.

Variable dominante: la diferencia entre [[beta]] del fluido y [[beta]] equivalente del recipiente metálico determina el volumen de expansión neto que debe acomodar el depósito de compensación.
Límite de validez: para fluidos con comportamiento térmico no lineal (como el agua entre 0 y 4 °C) o para mezclas, [[beta]] varía con T y debe calcularse con datos tabulados específicos del fluido en el rango de operación.
`;export{e as default};
