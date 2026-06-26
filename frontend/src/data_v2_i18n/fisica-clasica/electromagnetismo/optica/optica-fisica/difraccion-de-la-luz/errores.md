## Errores conceptuales


### Error 1: Confundir el ancho de la rendija a con la distancia d del experimento de Young

**Por qué parece correcto**

Ambos parámetros representan distancias físicas características de una abertura en experimentos de óptica física. El alumno asocia "luz pasando por rendijas" con una única fórmula genérica de interferencia y concluye que el ancho de la rendija [[ancho_de_la_rendija]] es idéntico a la separación entre dos rendijas, aplicando de forma indistinta las ecuaciones de interferencia de Young.

**Por qué es incorrecto**

El ancho de la rendija [[ancho_de_la_rendija]] describe el tamaño de una única abertura simple y gobierna el fenómeno de difracción individual (cancelación de fase interna). La distancia entre rendijas representa la separación geométrica centro a centro entre dos aperturas distintas y gobierna el patrón de interferencia mutua. Confundir ambos parámetros causa que se intente modelar una sola rendija ancha como si fueran dos rendijas estrechas, lo que altera por completo la física del patrón y las posiciones de luz y oscuridad en la pantalla.

**Señal de detección**

El alumno intenta resolver un problema de rendija única utilizando ecuaciones que contienen la distancia entre rendijas. En su razonamiento afirma que "la difracción de una rendija es idéntica al patrón de franjas del experimento de Young".

**Corrección conceptual**

Siempre distinguir que para una rendija simple la variable clave es [[ancho_de_la_rendija]], y que los mínimos de difracción ocurren en múltiplos de la longitud de onda sobre [[ancho_de_la_rendija]]. En el experimento de Young, la interferencia constructiva de máximos depende de la separación entre rendijas, y el patrón resultante está modulado por la difracción individual de cada rendija.

**Mini-ejemplo de contraste**

Si iluminamos una sola rendija de ancho de una décima de milímetro, el patrón muestra una gran franja central brillante. Si en su lugar colocamos dos rendijas muy estrechas separadas una décima de milímetro, la franja central brillante se subdivide en múltiples líneas delgadas brillantes y oscuras muy juntas debido a la interferencia doble.

---


### Error 2: Omitir la conversión de la longitud de onda de nanómetros a metros

**Por qué parece correcto**

Las longitudes de onda de la luz visible se tabulan y leen universalmente en nanómetros (por ejemplo, seiscientos cincuenta nanómetros para luz roja). Al realizar cálculos directos en la calculadora, el alumno tiende a multiplicar o dividir los números dados directamente en el enunciado sin reparar en que las demás variables espaciales están en milímetros o metros.

**Por qué es incorrecto**

Las fórmulas algebraicas del leaf exigen consistencia dimensional absoluta en unidades del Sistema Internacional. Si se introduce la longitud de onda directamente en nanómetros sin convertirla multiplicando por diez a la menos nueve, mientras que el ancho de la rendija se introduce en metros, el ángulo [[theta]] o el ancho [[ancho_del_maximo_central]] resultante estará multiplicado por un factor erróneo de mil millones, produciendo un resultado físicamente absurdo y carente de coherencia de escala.

**Señal de detección**

El alumno obtiene un ancho del máximo central [[ancho_del_maximo_central]] del orden de kilómetros en lugar de milímetros, o un ángulo [[theta]] que supera en varios órdenes de magnitud el rango físico admisible. También se detecta si la longitud de onda se anota en las operaciones como un número entero grande sin potencia de diez negativa asociada.

**Corrección conceptual**

Antes de introducir la longitud de onda en cualquier ecuación, realizar la conversión obligatoria sustituyendo la palabra nanómetros por el factor multiplicativo de diez a la menos nueve metros. Por ejemplo, quinientos nanómetros se escribe como cinco por diez a la menos siete metros.

**Mini-ejemplo de contraste**

Para luz verde de quinientos nanómetros, un ancho de rendija de una décima de milímetro y una pantalla a un metro: operar sin convertir da un ancho central del máximo de diez metros, lo que llenaría una habitación entera. Convertir correctamente produce un ancho central de diez milímetros, un valor perfectamente medible en una mesa de laboratorio.

## Errores de modelo


### Error 3: Asumir que la aproximación paraxial lineal es válida para rendijas de tamaño sub-micrómetro

**Por qué parece correcto**

La fórmula simplificada para el ancho del máximo central [[ancho_del_maximo_central]] es lineal y sumamente fácil de aplicar. El alumno la generaliza como la ley definitiva del leaf y la aplica a cualquier rendija, incluyendo aberturas extremadamente pequeñas cuyos anchos se acercan o son menores que la propia longitud de onda de la luz.

**Por qué es incorrecto**

La relación lineal asume que el ángulo de difracción es lo suficientemente pequeño como para aproximar su seno y su tangente al propio ángulo en radianes. Si la rendija [[ancho_de_la_rendija]] es comparable a la longitud de onda, el ángulo real del primer mínimo de difracción se abre tanto que supera los límites paraxiales. En este régimen no lineal, la desviación angular real es mucho mayor que la aproximación lineal y la proyección sobre la pantalla plana se deforma, haciendo que la aproximación subestime significativamente el tamaño real de la franja luminosa.

**Señal de detección**

El alumno calcula un ancho [[ancho_del_maximo_central]] utilizando la aproximación paraxial lineal para una rendija cuyo ancho [[ancho_de_la_rendija]] es casi igual a [[lambda]], obteniendo un valor lineal en la pantalla que difiere notablemente del valor real obtenido mediante la función trigonométrica tangente del ángulo exacto.

**Corrección conceptual**

Comprobar siempre que el ancho de la rendija [[ancho_de_la_rendija]] sea significativamente mayor que la longitud de onda [[lambda]]. Si el cociente de la longitud de onda dividido entre el ancho de la rendija es mayor a una décima, se debe abandonar el modelo lineal y calcular el ángulo exacto mediante el arcoseno, proyectándolo luego en la pantalla plana mediante la tangente trigonométrica.

**Mini-ejemplo de contraste**

Para una rendija de una longitud de onda de ancho y pantalla a un metro: la aproximación lineal predice un ancho de máximo central de dos metros. El cálculo trigonométrico exacto demuestra que el primer mínimo ocurre a noventa grados, lo que significa que el máximo central se expande de forma infinita hacia los lados en la pantalla plana, no teniendo límites definidos.

## Errores matemáticos


### Error 4: Confundir el ancho total del máximo central con la distancia del centro al primer mínimo

**Por qué parece correcto**

En muchos textos de física se analiza la posición del primer mínimo lateral midiendo la distancia desde el centro del patrón en la pantalla hasta la primera franja oscura. El alumno asocia "posición del primer mínimo" con el término de "ancho del máximo central" y asume que ambos conceptos representan exactamente el mismo segmento espacial.

**Por qué es incorrecto**

El máximo central luminoso es perfectamente simétrico y se extiende a ambos lados del eje de incidencia central, limitándose por el primer mínimo superior y el primer mínimo inferior. Por lo tanto, el ancho total del máximo central [[ancho_del_maximo_central]] es exactamente dos veces la distancia lineal que hay desde el centro de la pantalla al primer mínimo lateral. Olvidar este factor multiplicador de dos es un desliz aritmético muy común que reduce a la mitad el valor real del tamaño del patrón.

**Señal de detección**

El alumno calcula la posición del primer mínimo utilizando el producto de la longitud de onda por la distancia a la pantalla dividido entre el ancho de la rendija y presenta directamente ese número como el ancho total del máximo central [[ancho_del_maximo_central]].

**Corrección conceptual**

Siempre recordar que el patrón difractado se expande de forma bilateral. El ancho total del máximo central luminoso [[ancho_del_maximo_central]] comprende la distancia total entre las dos bandas oscuras de bloqueo lateral, lo que matemáticamente equivale a dos veces la distancia centro-mínimo.

**Mini-ejemplo de contraste**

Si la distancia medida desde el centro de la pantalla al primer mínimo oscuro es de doce milímetros, el ancho de la franja brillante central sobre la pantalla es de veinticuatro milímetros, no de doce milímetros.

## Errores de interpretación


### Error 5: Confundir radianes con grados sexagesimales al calcular o interpretar el ángulo [[theta]]

**Por qué parece correcto**

El alumno está acostumbrado a medir y visualizar todos los ángulos físicos en grados sexagesimales mediante transportadores en el laboratorio. Al obtener un valor numérico de ángulo muy pequeño de la relación fundamental, asume intuitivamente que el resultado de la calculadora está expresado en grados y trata de buscar esa desviación visual en el montaje.

**Por qué es incorrecto**

La relación matemática que vincula la longitud de onda y el ancho de la rendija proporciona el ángulo de difracción expresado estrictamente en radianes. Si un alumno interpreta un resultado de cinco centésimas como grados sexagesimales, estará asumiendo una desviación angular casi imperceptible. Sin embargo, cinco centésimas de radián equivalen a casi tres grados sexagesimales, una desviación angular perfectamente visible en un laboratorio real.

**Señal de detección**

El alumno intenta calcular la posición lateral en la pantalla aplicando funciones trigonométricas en su calculadora configurada en modo de grados utilizando el valor numérico del ángulo en radianes sin realizar la conversión, o rotula en los informes un ángulo en radianes con el símbolo de grados.

**Corrección conceptual**

El ángulo [[theta]] calculado a partir del cociente entre [[lambda]] y [[ancho_de_la_rendija]] es una magnitud pura en radianes. Si se desea expresar en grados sexagesimales para su visualización experimental, se debe multiplicar el valor por ciento ochenta y dividirlo por pi.

**Mini-ejemplo de contraste**

Un cálculo da un ángulo de ocho centésimas. Si se interpreta erróneamente como ocho centésimas de grado, la desviación sobre la pantalla a dos metros apenas sería de tres décimas de milímetro. En la realidad física, el ángulo es de ocho centésimas de radián, lo que produce una desviación real de dieciséis centímetros en la pantalla, una diferencia espacial enorme.

## Regla de autocontrol rápido

Antes de dar por finalizado cualquier problema de difracción de una sola rendija, verificar que se cumplan las siguientes cuatro condiciones de autocontrol físico:

1. La longitud de onda [[lambda]] debe estar en metros antes de operar. Su valor para luz visible debe ser del orden de magnitud de diez a la menos siete metros.
2. El ancho del máximo central [[ancho_del_maximo_central]] debe ser exactamente el doble de la distancia que separa el centro de la pantalla del primer mínimo de oscuridad lateral.
3. El ángulo del primer mínimo [[theta]] debe estar expresado en radianes y su valor debe ser típicamente menor a una décima de radián para configuraciones paraxiales usuales.
4. El ancho de la rendija [[ancho_de_la_rendija]] debe ser estrictamente mayor que la longitud de onda de la luz empleada. Si el cálculo da una rendija menor o igual a [[lambda]], revisar la viabilidad del primer mínimo en el espectro.