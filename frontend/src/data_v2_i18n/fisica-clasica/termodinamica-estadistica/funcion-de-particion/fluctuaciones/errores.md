## Errores conceptuales


### Error 1: Creer que fluctuar contradice el equilibrio
**Por qué parece correcto**
Equilibrio suena a ausencia de cambio, así que parece natural pensar que la energía no debe variar.

**Por qué es incorrecto**
En el conjunto canónico, el sistema puede intercambiar energía con el baño térmico. La [[energia_media]] es estable, pero las ocupaciones de [[energia_microestado]] pueden dispersarse.

**Señal de detección**
El alumno afirma que [[fluctuacion_energia]] debe ser cero porque la [[temperatura]] es constante.

**Corrección conceptual**
Equilibrio significa distribución estable, no energía instantánea fija.

**Mini-ejemplo de contraste**
Un termómetro pequeño en contacto con agua puede intercambiar energía aunque la [[temperatura]] media del conjunto permanezca estable.


### Error 2: Confundir [[varianza_energia]] con [[energia_media]]
**Por qué parece correcto**
Ambas salen de la [[funcion_particion]] y ambas usan energía como idea central.

**Por qué es incorrecto**
La [[energia_media]] mide el centro de la distribución; la [[varianza_energia]] mide su anchura cuadrática.

**Señal de detección**
Se comparan directamente J con J^2 o se interpreta [[varianza_energia]] como energía disponible.

**Corrección conceptual**
Primero identifica si lees pendiente, curvatura o raíz cuadrática.

**Mini-ejemplo de contraste**
Dos sistemas pueden tener la misma [[energia_media]] y diferente dispersión energética.

## Errores de modelo


### Error 3: Aplicar el conjunto canónico a un sistema aislado
**Por qué parece correcto**
La [[funcion_particion]] parece una herramienta universal para cualquier sistema térmico.

**Por qué es incorrecto**
Las fluctuaciones canónicas presuponen intercambio de energía con un baño. Si la energía total está fija, la fluctuación de intercambio no se modela igual.

**Señal de detección**
Se usa [[capacidad_calorifica]] de fluctuaciones en un problema que declara energía total constante.

**Corrección conceptual**
Comprueba el conjunto físico antes de derivar ln(Z).

**Mini-ejemplo de contraste**
Una molécula aislada no fluctúa energéticamente como una molécula sumergida en un baño térmico.


### Error 4: Ignorar cambios de parámetros externos
**Por qué parece correcto**
Si cambia la [[temperatura]], parece que todo cambio energético pertenece a la respuesta térmica.

**Por qué es incorrecto**
Si también cambian volumen, campos o composición, la [[capacidad_calorifica]] ya no separa limpiamente fluctuaciones térmicas.

**Señal de detección**
El cálculo mezcla datos de diferentes configuraciones físicas.

**Corrección conceptual**
Mantén fijos los parámetros del modelo al leer [[derivada_segunda_log_particion_beta]].

**Mini-ejemplo de contraste**
Comprimir un gas mientras se calienta mezcla trabajo mecánico con fluctuación térmica.

## Errores matemáticos


### Error 5: Perder el signo al derivar respecto a [[beta]]
**Por qué parece correcto**
La derivada de ln(Z) parece dar directamente energía positiva.

**Por qué es incorrecto**
La [[energia_media]] se relaciona con la pendiente de ln(Z) frente a [[beta]] con un signo específico.

**Señal de detección**
Al aumentar [[beta]], se obtiene una energía media que crece sin justificación física.

**Corrección conceptual**
Revisa la fórmula antes de interpretar la pendiente.

**Mini-ejemplo de contraste**
Bajar la [[temperatura]] aumenta [[beta]] y normalmente favorece estados de menor energía, no mayor promedio.


### Error 6: Tomar la raíz antes de comprobar la varianza
**Por qué parece correcto**
La [[fluctuacion_energia]] se obtiene desde la raíz de la varianza.

**Por qué es incorrecto**
Si la [[varianza_energia]] salió negativa por error numérico o de signo, la raíz oculta el fallo.

**Señal de detección**
Aparecen valores imaginarios o se fuerza un valor absoluto sin explicación.

**Corrección conceptual**
Valida primero que [[varianza_energia]] sea no negativa y tenga unidades de J^2.

**Mini-ejemplo de contraste**
Una curvatura mal calculada puede generar una “fluctuación” que no corresponde a ninguna distribución física.

## Errores de interpretación


### Error 7: Leer [[capacidad_calorifica]] como energía almacenada
**Por qué parece correcto**
Su unidad incluye energía por [[temperatura]] y parece una cantidad energética.

**Por qué es incorrecto**
[[capacidad_calorifica]] es una respuesta: mide cuánto cambia [[energia_media]] al variar [[temperatura]].

**Señal de detección**
Se compara [[capacidad_calorifica]] directamente con [[energia_media]].

**Corrección conceptual**
Interprétala como sensibilidad térmica, no como depósito de energía.

**Mini-ejemplo de contraste**
Dos cuerpos pueden tener distinta capacidad calorífica aunque estén a la misma energía media por partícula.


### Error 8: Pensar que fluctuación grande siempre significa error
**Por qué parece correcto**
En sistemas macroscópicos las fluctuaciones relativas suelen ser pequeñas.

**Por qué es incorrecto**
En sistemas pequeños o cerca de transiciones, [[fluctuacion_energia]] puede ser físicamente importante.

**Señal de detección**
Se descarta un resultado solo porque la dispersión no es despreciable.

**Corrección conceptual**
Compara [[fluctuacion_energia]] con tamaño del sistema y escala térmica.

**Mini-ejemplo de contraste**
Un nanosistema puede mostrar fluctuaciones relativas grandes sin violar el modelo canónico.

## Regla de autocontrol rápido

Antes de aceptar el resultado, comprueba: [[temperatura]] en K, [[beta]] positiva, [[varianza_energia]] no negativa, unidades J^2 para varianza y lectura de curvatura coherente con la gráfica de ln(Z).