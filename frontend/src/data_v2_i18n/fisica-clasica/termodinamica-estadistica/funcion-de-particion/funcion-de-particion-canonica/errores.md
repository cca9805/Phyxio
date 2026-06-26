## Errores conceptuales


### Error 1: confundir Z con una probabilidad
**Por qué parece correcto**
La [[funcion_particion]] aparece junto a [[probabilidad_microestado]] en casi todos los desarrollos y es un número positivo, lo que invita a pensar que podría representar la probabilidad de algo.

**Por qué es incorrecto**
La [[funcion_particion]] no está acotada entre 0 y 1 y no mide la ocupación de ningún estado. Su papel es ser el normalizador: recoge la suma de todos los [[peso_boltzmann]] accesibles para que al dividir cada peso por esa suma se obtenga una [[probabilidad_microestado]] bien definida. Un valor de Z mayor que 1 es perfectamente normal y frecuente.

**Señal de detección**
El alumno trata Z directamente como si fuera una probabilidad, o interpreta el valor numérico de Z como fracción de ocupación de algún estado sin dividir por la suma total.

**Corrección conceptual**
Separar en tres pasos: calcular cada [[peso_boltzmann]], sumarlos para obtener [[funcion_particion]], y solo entonces dividir cada peso por la suma para obtener [[probabilidad_microestado]]. La [[funcion_particion]] no es una ocupación; es la referencia que hace posible la normalización.

**Mini-ejemplo de contraste**
Si dos microestados tienen [[peso_boltzmann]] 3 y 1, la [[funcion_particion]] vale 4. Las [[probabilidad_microestado]] son 0,75 y 0,25. El valor 4 no es ninguna probabilidad; es la referencia que las hace posibles.


### Error 2: pensar que todos los microestados pesan igual
**Por qué parece correcto**
La intuición de sistemas simétricos, como un dado o una moneda, lleva a asumir reparto uniforme. Si hay N microestados, asignar 1/N a cada uno parece un punto de partida razonable.

**Por qué es incorrecto**
En el conjunto canónico, el [[peso_boltzmann]] depende exponencialmente de [[energia_microestado]] y [[temperatura]]. Solo en el límite de [[temperatura]] muy alta, cuando la escala térmica domina las diferencias energéticas, los pesos se aproximan entre sí. En condiciones normales, los estados de menor [[energia_microestado]] reciben considerablemente más peso que los de alta energía.

**Señal de detección**
El alumno calcula [[funcion_particion]] dividiendo 1 por N, o asigna la misma [[probabilidad_microestado]] a todos los estados sin evaluar sus [[peso_boltzmann]] individuales.

**Corrección conceptual**
Calcular cada [[peso_boltzmann]] usando [[beta]] y la [[energia_microestado]] del estado concreto. Dos estados con la misma energía sí comparten el mismo peso, pero estados con distinta energía tienen pesos distintos que reflejan su accesibilidad térmica real.

**Mini-ejemplo de contraste**
Tres estados con energías 0, 1 y 2 (en unidades de kT) tienen pesos relativos 1, 0,37 y 0,14. La [[funcion_particion]] es 1,51 y las probabilidades son 0,66, 0,25 y 0,09, muy lejos del reparto uniforme 0,33 para cada uno.

## Errores de modelo


### Error 3: usar el ensamble canónico sin baño térmico
**Por qué parece correcto**
El ensamble canónico se presenta con [[temperatura]] como parámetro, y si se conoce la [[temperatura]] del sistema, el formalismo parece aplicable sin más condiciones previas.

**Por qué es incorrecto**
La [[temperatura]] solo actúa como parámetro canónico cuando existe un baño térmico suficientemente grande que la mantiene constante mientras el sistema intercambia energía con él. Un sistema aislado tiene energía total fija y no tiene [[temperatura]] definida en sentido canónico; el modelo adecuado para ese caso es el microcanónico.

**Señal de detección**
Se aplica la suma canónica a un sistema descrito como aislado, sin mención de contacto térmico, o se asume que el valor de [[temperatura]] de una observación puntual equivale a la [[temperatura]] de un baño térmico externo.

**Corrección conceptual**
Verificar que el enunciado especifica contacto térmico con un entorno que fija la [[temperatura]]. Si la energía total está estrictamente fijada sin posibilidad de intercambio, el ensamble canónico no representa el sistema físico correctamente.

**Mini-ejemplo de contraste**
Una molécula en un recipiente perfectamente aislado con energía cinética fija requiere el tratamiento microcanónico. La misma molécula en contacto con una pared a [[temperatura]] definida puede tratarse canónicamente y su [[funcion_particion]] es bien definida.


### Error 4: olvidar degeneraciones
**Por qué parece correcto**
Si dos microestados tienen la misma [[energia_microestado]], contarlos por separado parece redundante. Se incluye una sola energía y se continúa.

**Por qué es incorrecto**
Cada microestado físicamente distinto contribuye de forma independiente a [[funcion_particion]], aunque comparta energía con otro. Omitir estados degenerados subestima Z y sobreestima cada [[probabilidad_microestado]] individual. La degeneración es parte de la física del sistema, no una repetición matemática sin consecuencias.

**Señal de detección**
La [[funcion_particion]] resulta menor de lo esperado por la simetría del sistema, o la suma de [[probabilidad_microestado]] no cierra en uno cuando los estados degenerados se cuentan con cuidado.

**Corrección conceptual**
Contar explícitamente todos los microestados distinguibles. Si g estados comparten la misma [[energia_microestado]], su contribución conjunta a [[funcion_particion]] es g multiplicado por el [[peso_boltzmann]] individual. Esta multiplicidad altera directamente la [[probabilidad_microestado]] del estado base.

**Mini-ejemplo de contraste**
Un nivel con [[energia_microestado]] = kT y degeneración 3 contribuye 3·e^{-1} ≈ 1,10 a [[funcion_particion]], no e^{-1} ≈ 0,37. Omitir el factor 3 cambia visiblemente la [[probabilidad_microestado]] del estado base y de todos los estados excitados.

## Errores matemáticos


### Error 5: normalizar antes de sumar todos los pesos
**Por qué parece correcto**
Parece eficiente normalizar cada [[peso_boltzmann]] en cuanto se calcula para no acumular valores sin denominador conocido.

**Por qué es incorrecto**
La normalización requiere el total de todos los pesos, es decir, la [[funcion_particion]] completa. Si se divide por una suma parcial, la [[probabilidad_microestado]] de los estados calculados primero queda sobrestimada y la suma final de probabilidades no será uno.

**Señal de detección**
Las probabilidades calculadas no suman exactamente uno, o el valor de Z usado como denominador no coincide con la suma total de todos los [[peso_boltzmann]] del sistema.

**Corrección conceptual**
Completar el cálculo de todos los [[peso_boltzmann]], sumarlos para obtener [[funcion_particion]], y solo entonces calcular cada [[probabilidad_microestado]] dividiendo el peso individual por la suma completa. El orden es ponderar, sumar, normalizar, interpretar.

**Mini-ejemplo de contraste**
Con tres pesos 1, 0,37 y 0,14, la suma Z es 1,51. Normalizar el primer peso antes de sumar el tercero daría una [[probabilidad_microestado]] de 1/1,37 ≈ 0,73, en vez del correcto 1/1,51 ≈ 0,66. La diferencia puede parecer pequeña pero propaga error a todas las probabilidades.


### Error 6: tratar [[beta]] como [[temperatura]]
**Por qué parece correcto**
[[beta]] y [[temperatura]] aparecen juntos y describen la misma situación térmica, así que parece natural asumir que cuando [[temperatura]] aumenta, [[beta]] también aumenta en la misma dirección.

**Por qué es incorrecto**
[[beta]] es el inverso de la escala de energía térmica: cuando [[temperatura]] sube, [[beta]] baja, y el [[peso_boltzmann]] de los estados de alta [[energia_microestado]] aumenta. Confundir los dos invierte el sentido de la selección estadística y lleva a predecir que los estados excitados se desfavorecen al calentar, que es exactamente lo contrario de lo que ocurre.

**Señal de detección**
Se escribe que "a mayor [[temperatura]], los estados excitados tienen menor [[probabilidad_microestado]]", o se usa [[beta]] como proporcional a [[temperatura]] en un cálculo de [[peso_boltzmann]].

**Corrección conceptual**
Recordar que [[beta]] decrece cuando [[temperatura]] crece. A baja [[temperatura]], [[beta]] es grande y penaliza fuertemente los estados de alta energía. A alta [[temperatura]], [[beta]] es pequeño y la penalización se suaviza, permitiendo que los estados excitados ganen [[probabilidad_microestado]].

**Mini-ejemplo de contraste**
A 300 K, el [[peso_boltzmann]] de un estado con [[energia_microestado]] = kT es e^{-1} ≈ 0,37. A 600 K, ese mismo estado tiene peso e^{-0,5} ≈ 0,61. Doblar la [[temperatura]] reduce [[beta]] a la mitad y aumenta el peso del estado excitado.

## Errores de interpretación


### Error 7: leer un [[peso_boltzmann]] aislado como ocupación
**Por qué parece correcto**
Un [[peso_boltzmann]] alto sugiere que el estado "pesa más", lo que suena naturalmente a alta probabilidad de ser ocupado.

**Por qué es incorrecto**
El [[peso_boltzmann]] es relativo: su significado depende de la [[funcion_particion]] del sistema completo. Un peso de 5 representa [[probabilidad_microestado]] muy distintas según Z valga 10 o 500. Sin conocer Z, el peso no tiene lectura de ocupación posible.

**Señal de detección**
Se reporta w_i directamente como "la probabilidad de ese estado", omitiendo la división por [[funcion_particion]], o se comparan [[peso_boltzmann]] de dos sistemas distintos sin calcular sus respectivas sumas Z.

**Corrección conceptual**
Calcular siempre la [[probabilidad_microestado]] dividiendo el [[peso_boltzmann]] individual por [[funcion_particion]]. El peso solo sirve para construir la suma; la [[probabilidad_microestado]] nace de comparar ese peso con el total estadístico completo.

**Mini-ejemplo de contraste**
El mismo microestado tiene el mismo [[peso_boltzmann]] en dos sistemas distintos. Si el primero tiene [[funcion_particion]] igual a 4, la [[probabilidad_microestado]] es 0,50. Si el segundo tiene [[funcion_particion]] igual a 100, la [[probabilidad_microestado]] es 0,02. El peso no cambió; la ocupación sí cambió drásticamente.


### Error 8: interpretar [[energia_media]] sin probabilidades
**Por qué parece correcto**
La media aritmética de las [[energia_microestado]] parece la estimación más directa de la energía promedio del sistema. Sumar las energías y dividir por el número de estados suena como el procedimiento natural.

**Por qué es incorrecto**
La [[energia_media]] canónica no es la media aritmética de las [[energia_microestado]], sino el promedio ponderado por [[probabilidad_microestado]]. Si los estados no tienen la misma [[probabilidad_microestado]], la media ponderada difiere de la aritmética y es la única físicamente correcta. Usar la media aritmética equivale a asumir pesos iguales, que solo sería válido a [[temperatura]] infinita.

**Señal de detección**
El alumno calcula (E_1 + E_2 + E_3)/3 en vez de Σ E_i P_i, o identifica [[energia_media]] directamente con la [[energia_microestado]] del estado más probable.

**Corrección conceptual**
Usar [[energia_media]] = Σ E_i · P_i, donde cada P_i procede del [[peso_boltzmann]] dividido por [[funcion_particion]]. Solo si todas las [[probabilidad_microestado]] son iguales coincide con la media aritmética.

**Mini-ejemplo de contraste**
Tres estados con energías 0, kT y 2kT, y probabilidades 0,66, 0,25 y 0,09 dan [[energia_media]] ≈ 0,43 kT. La media aritmética sería kT. La diferencia de más de dos veces muestra que el promedio ponderado es indispensable para obtener una predicción física correcta.

## Regla de autocontrol rápido

Antes de cerrar un cálculo canónico, comprueba tres cosas: todos los [[peso_boltzmann]] son positivos, la suma de [[probabilidad_microestado]] vale uno y la [[energia_media]] cae dentro del rango de energías accesibles.
