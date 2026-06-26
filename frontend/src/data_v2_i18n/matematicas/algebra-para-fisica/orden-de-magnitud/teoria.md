# Orden de magnitud

## Que es

El orden de magnitud es la potencia de diez que describe el tamano aproximado de una cantidad. No busca el valor exacto, sino la escala dominante: metros frente a kilometros, segundos frente a microsegundos, julios frente a megajulios. Decir que una cantidad es del orden de `10^3` significa que esta cerca de miles, no de unidades ni de millones.

Trabajar con ordenes de magnitud consiste en redondear cada dato a una potencia de diez razonable y operar esas potencias para estimar el resultado. Es una herramienta de pensamiento fisico: permite saber si una respuesta puede ser verdadera antes de invertir tiempo en calculo fino.

## Por que aparece en fisica

La fisica mezcla datos exactos, mediciones aproximadas y modelos idealizados. Muchas veces no necesitas saber si una respuesta es `4.8` o `5.1`; necesitas saber si esta en `10^0`, `10^3` o `10^-6`. Esa diferencia decide si hablas de una escala humana, microscopica, planetaria o atomica.

El orden de magnitud aparece en movimiento, energia, electricidad, campos, fluidos y astronomia porque cada fenomeno vive en una escala. Una velocidad de `10^2 m/s` puede ser razonable para un avion, pero no para una persona caminando. Una energia de `10^9 J` no describe una pequena pila escolar.

## Idea visual o geometrica

Imagina una escalera donde cada peldaño multiplica por diez. Pasar de `10^0` a `10^1` no suma diez unidades: multiplica por diez. Pasar tres peldaños cambia mil veces el tamano. Por eso equivocarse en tres ordenes de magnitud es mucho mas grave que redondear un decimal.

Tambien puedes verlo como colocar un fenomeno en un mapa de escalas. Una bacteria, una pelota, un edificio y un planeta no solo tienen tamanos distintos; pertenecen a regiones separadas por muchas potencias de diez. El orden de magnitud te situa en ese mapa.

## Lenguaje simbolico minimo

Si una cantidad se escribe como `a x 10^n`, su orden de magnitud suele estar cerca de `10^n`, aunque si `a` esta cerca de 10 puede redondearse a `10^(n+1)`. Por ejemplo, `3 x 10^4` es del orden de `10^4`, mientras que `8 x 10^4` puede tratarse como cercano a `10^5` en una estimacion muy gruesa.

Para estimar multiplicaciones, se multiplican escalas sumando exponentes. Para estimar divisiones, se restan exponentes. Si una distancia es del orden de `10^2 m` y un tiempo del orden de `10^1 s`, la velocidad estimada es del orden de `10^1 m/s`.

## Que significa el resultado

Un resultado de orden de magnitud no pretende sustituir al calculo exacto. Su significado es decidir si la escala obtenida es compatible con el fenomeno. Si estimas la altura de una persona y sale `10^3 m`, no necesitas mas decimales: el resultado esta fisicamente roto.

Tambien permite comparar efectos. Una fuerza de rozamiento de `10^-2 N` puede ser despreciable frente a una fuerza aplicada de `10^2 N`; una perdida de energia de `10^5 J` no puede ignorarse si la energia total es `10^6 J`. La estimacion ayuda a decidir que terminos importan.

## Cuando no debes usarlo

No debes usar orden de magnitud cuando el problema exige precision fina, como calibrar un instrumento, comparar datos experimentales cercanos o decidir una tolerancia tecnica. En esos casos la estimacion inicial es util, pero no reemplaza el calculo con cifras significativas.

Tampoco debes usarlo para justificar un modelo sin revisar condiciones. Que dos cantidades tengan ordenes similares no prueba que una ley se aplique. Primero se estima para detectar errores grandes; despues se verifica el modelo, las unidades y las hipotesis.

## Resumen operativo

Usa orden de magnitud antes y despues del calculo. Antes, para anticipar la escala esperada; despues, para comprobar que el resultado no es absurdo. Redondea datos a potencias de diez, opera exponentes y compara la escala con el fenomeno.

El objetivo no es adivinar el numero exacto, sino adquirir criterio fisico. Un alumno que domina ordenes de magnitud detecta conversiones mal hechas, resultados imposibles y terminos despreciables sin depender ciegamente de la calculadora.

<!-- algebra-depth-v2 -->
## Capa de profundidad: orden de magnitud

Este leaf no debe funcionar como una lista corta de reglas, sino como una herramienta para pensar problemas fisicos. El objetivo es estimar antes de calcular para detectar respuestas imposibles. Un alumno basico necesita reconocer la magnitud buscada y la unidad esperada; un alumno intermedio debe justificar la operacion elegida; un alumno avanzado debe anticipar limites, dependencias y casos donde el modelo deja de servir.

La estimacion no busca el ultimo decimal; busca la escala que debe tener una respuesta fisica razonable.

| Resultado | Orden | Lectura |
|---|---|---|
| `3.2 x 10^4` | `10^4` | decenas de miles |
| `7.8 x 10^-3` | `10^-2` | centesimas aproximadas |
| `1.1 x 10^0` | `10^0` | escala unidad |

La prueba de comprension es comparar. Si una entrada se multiplica por `2`, por `10` o por `1/2`, el alumno debe poder decir que ocurre con la salida antes de usar la calculadora. Esa prediccion convierte el algebra en control fisico del resultado.

