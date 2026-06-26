## Errores conceptuales


### Error 1: Creer que un [[macroestado]] es un [[microestado]] grande
**Por qué parece correcto**
Ambos describen el mismo sistema y usan palabras parecidas, así que parece que solo cambia el tamaño de la descripción.
**Por qué es incorrecto**
Un [[microestado]] fija una configuración microscópica concreta. Un [[macroestado]] agrupa muchos [[microestado]] que comparten restricciones observables.
**Señal de detección**
El alumno intenta asignar una sola configuración a cada [[macroestado]] y obtiene [[multiplicidad_macroestado]] igual a 1 en todos los casos.
**Corrección conceptual**
Pregunta siempre qué detalle se conserva y qué detalle se ignora. Si se ignoran detalles microscópicos, estás en el nivel de [[macroestado]].
**Mini-ejemplo de contraste**
Cuatro partículas con dos a la izquierda pueden tener varias configuraciones microscópicas. El reparto “dos y dos” es un [[macroestado]], no un único [[microestado]].


### Error 2: Pensar que más [[entropia]] significa simplemente más desorden visual
**Por qué parece correcto**
La palabra desorden aparece mucho en explicaciones iniciales y parece intuitiva.
**Por qué es incorrecto**
En este leaf, [[entropia]] mide la multiplicidad asociada a un [[macroestado]], no una impresión estética.
**Señal de detección**
Se compara el aspecto visual de dos dibujos sin contar [[microestado]] ni revisar [[multiplicidad_macroestado]].
**Corrección conceptual**
Sustituye “desorden” por “número de configuraciones microscópicas compatibles”.
**Mini-ejemplo de contraste**
Un gas uniforme parece simple visualmente, pero puede tener muchísimos [[microestado]] compatibles y, por tanto, alta [[entropia]].

## Errores de modelo


### Error 3: Comparar [[macroestado]] con restricciones distintas
**Por qué parece correcto**
Los nombres de los [[macroestado]] pueden parecer comparables aunque cambien las condiciones.
**Por qué es incorrecto**
Si cambian [[energia_total]], [[volumen]] o [[numero_particulas]], cambia el conjunto accesible y la comparación de [[multiplicidad_macroestado]] deja de ser homogénea.
**Señal de detección**
La solución mezcla casos con distinto [[volumen]] o distinto [[numero_particulas]] sin declararlo.
**Corrección conceptual**
Antes de contar, fija las restricciones macroscópicas comunes.
**Mini-ejemplo de contraste**
No compares microestados de una caja de 1 L con otra de 2 L como si pertenecieran al mismo conjunto.


### Error 4: Suponer que todos los [[microestado]] pesan igual en cualquier situación
**Por qué parece correcto**
El conteo simple es cómodo y aparece en los primeros ejemplos.
**Por qué es incorrecto**
Hay modelos en los que los [[microestado]] tienen pesos distintos. Entonces la [[probabilidad_macroestado]] no depende solo de [[multiplicidad_macroestado]].
**Señal de detección**
Aparecen energías distintas y aun así se calcula todo con puro conteo.
**Corrección conceptual**
Comprueba si el leaf trabaja con conteo equiprobable o con pesos energéticos.
**Mini-ejemplo de contraste**
En un modelo canónico, dos [[microestado]] con energías diferentes no tienen necesariamente la misma probabilidad.

## Errores matemáticos


### Error 5: Olvidar la normalización de [[probabilidad_macroestado]]
**Por qué parece correcto**
La [[multiplicidad_macroestado]] mayor ya da una idea de qué caso es más probable.
**Por qué es incorrecto**
Una probabilidad necesita compararse con el total de casos excluyentes. Sin normalización, solo hay conteos.
**Señal de detección**
La suma de [[probabilidad_macroestado]] no da 1 o se usan multiplicidades como porcentajes directos.
**Corrección conceptual**
Divide cada [[multiplicidad_macroestado]] por el total de multiplicidades comparables.
**Mini-ejemplo de contraste**
Si hay 6 microestados de un tipo y 10 en total, la probabilidad no es 6, sino una fracción del total.


### Error 6: Aplicar logaritmos a magnitudes no positivas
**Por qué parece correcto**
La fórmula de [[entropia]] se memoriza y se aplica de forma automática.
**Por qué es incorrecto**
La [[multiplicidad_macroestado]] debe ser positiva para que la [[entropia]] esté definida en este modelo.
**Señal de detección**
Aparece logaritmo de cero, de un número negativo o de una cantidad con unidades.
**Corrección conceptual**
Verifica que el argumento del logaritmo sea un conteo adimensional positivo.
**Mini-ejemplo de contraste**
Un [[macroestado]] imposible tiene multiplicidad cero y no se interpreta con la misma fórmula de [[entropia]] que un [[macroestado]] accesible.

## Errores de interpretación


### Error 7: Confundir improbable con imposible
**Por qué parece correcto**
En sistemas grandes, algunos sucesos tienen probabilidad tan pequeña que nunca se observan en la práctica.
**Por qué es incorrecto**
Un [[macroestado]] con baja [[multiplicidad_macroestado]] puede ser accesible aunque su [[probabilidad_macroestado]] sea minúscula.
**Señal de detección**
El alumno elimina casos extremos sin justificar que su multiplicidad sea cero.
**Corrección conceptual**
Distingue entre multiplicidad nula y multiplicidad pequeña.
**Mini-ejemplo de contraste**
Todas las partículas a un lado de la caja puede ser muy improbable, pero no necesariamente imposible.


### Error 8: Creer que el [[macroestado]] más probable describe cada [[microestado]]
**Por qué parece correcto**
El resultado macroscópico dominante parece representar al sistema completo.
**Por qué es incorrecto**
El [[macroestado]] más probable agrupa muchos [[microestado]], pero no especifica cuál de ellos ocurre.
**Señal de detección**
Se intenta reconstruir la configuración microscópica exacta solo a partir de [[probabilidad_macroestado]].
**Corrección conceptual**
Lee el [[macroestado]] como una clase, no como una fotografía microscópica.
**Mini-ejemplo de contraste**
Saber que hay dos partículas a cada lado no dice cuáles partículas concretas están en cada lado.

## Regla de autocontrol rápido

Antes de interpretar, pregunta: ¿he definido el [[microestado]], el [[macroestado]], la [[multiplicidad_macroestado]] y el conjunto total con las mismas restricciones?