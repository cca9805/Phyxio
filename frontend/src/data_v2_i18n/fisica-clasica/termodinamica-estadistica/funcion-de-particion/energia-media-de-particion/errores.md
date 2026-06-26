## Errores conceptuales


### Error 1: Creer que la [[energia_media]] es un microestado real
**Por qué parece correcto**
Como la [[energia_media]] tiene unidades de energía, parece lógico imaginar que corresponde a una [[energia_microestado]] concreta.

**Por qué es incorrecto**
La [[energia_media]] es un promedio ponderado por la distribución canónica. Puede estar entre dos niveles y no coincidir con ningún microestado permitido.

**Señal de detección**
El resultado queda entre niveles discretos y se intenta buscar “el estado” que tiene exactamente esa energía.

**Corrección conceptual**
Interpreta [[energia_media]] como lectura colectiva de muchos microestados, no como identidad microscópica única.

**Mini-ejemplo de contraste**
En un sistema de dos niveles, el promedio puede ser intermedio aunque solo existan nivel bajo y nivel alto.


### Error 2: Pensar que [[temperatura]] solo multiplica una fórmula
**Por qué parece correcto**
En muchos ejercicios [[temperatura]] entra como dato numérico y se sustituye sin más.

**Por qué es incorrecto**
La [[temperatura]] cambia la ocupación relativa de las [[energia_microestado]] mediante [[beta]]. No solo escala el resultado; reorganiza los pesos dentro de [[funcion_particion]].

**Señal de detección**
Al subir [[temperatura]] se espera una variación lineal automática de [[energia_media]].

**Corrección conceptual**
Lee [[temperatura]] como control de distribución estadística.

**Mini-ejemplo de contraste**
Si hay una gran separación energética, calentar poco apenas cambia la ocupación; calentar cerca de la escala del salto sí la cambia.

## Errores de modelo


### Error 3: Usar el conjunto canónico sin equilibrio térmico
**Por qué parece correcto**
La fórmula de [[funcion_particion]] parece aplicable siempre que haya energías.

**Por qué es incorrecto**
Sin equilibrio no hay una [[temperatura]] única ni pesos canónicos estables.

**Señal de detección**
Los datos dependen del tiempo o de la posición y aun así se usa una sola [[beta]].

**Corrección conceptual**
Comprueba equilibrio antes de aplicar

{{f:funcion_particion_canonica}}

.

**Mini-ejemplo de contraste**
Un gas recién comprimido puede tener regiones calientes y frías; un baño térmico equilibrado sí permite [[beta]] única.


### Error 4: Truncar microestados importantes
**Por qué parece correcto**
Los estados altos parecen poco importantes y se eliminan para simplificar.

**Por qué es incorrecto**
Si sus pesos o degeneraciones son relevantes, cambian [[funcion_particion]] y desplazan [[energia_media]].

**Señal de detección**
El resultado cambia mucho al añadir pocos niveles nuevos.

**Corrección conceptual**
Incluye todos los estados con contribución no despreciable.

**Mini-ejemplo de contraste**
Un nivel alto muy degenerado puede pesar más que un nivel moderado único.

## Errores matemáticos


### Error 5: Olvidar el signo en la derivada respecto a [[beta]]
**Por qué parece correcto**
La pendiente [[derivada_log_particion_beta]] ya tiene unidades de energía y parece ser el resultado.

**Por qué es incorrecto**
La relación estándar usa el opuesto de esa pendiente para obtener [[energia_media]].

**Señal de detección**
Aparece una energía media negativa en un espectro definido con energías positivas.

**Corrección conceptual**
Revisa

{{f:energia_media_desde_derivada_beta}}

y conserva el signo.

**Mini-ejemplo de contraste**
Si aumentar [[beta]] reduce pesos altos, la pendiente de ln Z baja; el promedio energético es el opuesto físico.


### Error 6: Confundir derivada térmica y derivada en [[beta]]
**Por qué parece correcto**
[[temperatura]] y [[beta]] describen el mismo control térmico.

**Por qué es incorrecto**
Son variables inversas. Cambiar de una a otra introduce factores de [[constante_boltzmann]] y potencias de [[temperatura]].

**Señal de detección**
La unidad final no es energía.

**Corrección conceptual**
Usa

{{f:energia_media_desde_derivada_temperatura}}

solo con todos los factores térmicos.

**Mini-ejemplo de contraste**
Una pendiente frente a T no puede sustituir sin más a una pendiente frente a [[beta]].

## Errores de interpretación


### Error 7: Leer [[capacidad_calorifica]] como energía almacenada
**Por qué parece correcto**
Su símbolo aparece cerca de [[energia_media]].

**Por qué es incorrecto**
[[capacidad_calorifica]] es una pendiente térmica, no la energía total.

**Señal de detección**
Se comparan directamente J/K con J.

**Corrección conceptual**
Interpreta [[capacidad_calorifica]] como respuesta de [[energia_media]] al calentar.

**Mini-ejemplo de contraste**
Dos sistemas pueden tener igual [[energia_media]] y distinta pendiente térmica.


### Error 8: Ignorar la escala de [[constante_boltzmann]]
**Por qué parece correcto**
[[constante_boltzmann]] parece una constante pequeña que solo ajusta unidades.

**Por qué es incorrecto**
Marca la escala que compara [[temperatura]] con cada [[energia_microestado]].

**Señal de detección**
El cálculo da energías por partícula absurdamente grandes.

**Corrección conceptual**
Compara siempre [[energia_microestado]] con [[constante_boltzmann]] T mediante [[beta]].

**Mini-ejemplo de contraste**
A 300 K, energías del orden de 1e-21 J son térmicas; 1 J por molécula no lo es.

## Regla de autocontrol rápido

Antes de aceptar [[energia_media]], comprueba: unidad de energía, signo correcto, [[beta]] positiva, microestados suficientes y escala comparable con [[constante_boltzmann]] T.