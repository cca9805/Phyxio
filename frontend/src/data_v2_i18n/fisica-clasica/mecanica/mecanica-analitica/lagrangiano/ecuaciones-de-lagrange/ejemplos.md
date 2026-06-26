# Ejemplo tipo examen

## Enunciado

Una masa puntual de [[m]]=1.5 kg se desplaza en una coordenada generalizada lineal [[qi]]. Esta unida a un resorte de rigidez [[k]]=12 N/m y recibe una fuerza generalizada externa constante [[Qi]]=3 N. Se pide construir el lagrangiano [[L]], obtener la ecuacion de Lagrange forzada y calcular la aceleracion [[qddi]] cuando [[qi]]=0.20 m.

## Datos

- [[m]]=1.5 kg como parametro inercial.
- [[k]]=12 N/m como rigidez elastica.
- [[qi]]=0.20 m como desplazamiento instantaneo.
- [[Qi]]=3 N como accion externa no potencial.
- La velocidad generalizada [[qdi]] se mantiene simbolica para no ocultar el origen de [[pi]].

## Definicion del sistema

El sistema se modela con una sola coordenada independiente. No se trabaja con fuerzas cartesianas separadas, sino con energia cinetica, energia potencial elastica y una fuerza generalizada externa que no se incorpora a [[V]].

## Modelo fisico

La energia cinetica depende de [[qdi]], la energia potencial depende de [[qi]], y ambas construyen [[L]]. La fuerza [[Qi]] se incorpora solo en el cierre forzado de la ecuacion.

{{f:lagrangiano_mecanico}}

{{f:momento_conjugado_lagrangiano}}

{{f:operador_euler_lagrange}}

{{f:ecuacion_lagrange_conservativa}}

{{f:ecuacion_lagrange_forzada}}

{{f:aceleracion_oscilador_forzado}}

## Justificación del modelo

El modelo es adecuado porque el sistema tiene una sola coordenada independiente y una interaccion elastica conservativa que puede describirse mediante [[V]]. La fuerza [[Qi]] no pertenece a ese potencial: representa el empuje de un agente externo y por eso debe entrar a traves de la ecuacion forzada, no como una correccion improvisada del lagrangiano.

Tambien es relevante conservar el paso por [[pi]] y [[Ri]]. Si se saltan esos objetos y se escribe de inmediato la aceleracion, el resultado numerico puede coincidir, pero el ejemplo deja de explicar lo propio del leaf: como se genera una ecuacion de movimiento desde la estructura de [[L]].

## Resolucion simbolica

Primero se recupera de forma explicita el momento conjugado que conecta la dependencia cinetica con la ecuacion posterior:

{{f:momento_conjugado_lagrangiano}}

Para este oscilador:

- [[T]] es proporcional a [[m]] y al cuadrado de [[qdi]].
- [[V]] es proporcional a [[k]] y al cuadrado de [[qi]].
- [[L]] resume la diferencia entre ambas contribuciones.

Al aplicar la ecuacion de Lagrange forzada, la evolucion de [[qi]] queda gobernada por el balance entre la accion externa [[Qi]] y el termino restaurador elastico. La version conservativa sirve como referencia: si desaparece [[Qi]], el residuo [[Ri]] debe anularse. En el caso actual, el cierre forzado desplaza ese equilibrio y el resultado se expresa directamente como aceleracion [[qddi]]:

{{f:aceleracion_oscilador_forzado}}

## Sustitución numérica

El termino elastico vale:

- [[k]][[qi]]=12*0.20=2.4 N, menor que la accion externa.

Por tanto:

- [[Qi]]-[[k]][[qi]]=3.0-2.4=0.6 N.
- [[qddi]]=0.6/1.5=0.40 \(\mathrm{m/s^2}\).

El valor no debe leerse de forma aislada. Con los mismos parametros, si [[qi]] creciera hasta 0.25 m, el termino elastico alcanzaria 3.0 N y la aceleracion se anularia. Ese umbral identifica el equilibrio instantaneo que el modelo permite leer sin rehacer toda la deduccion.

## Validacion dimensional

El numerador de la expresion tiene unidad de fuerza. Al dividir por [[m]], el resultado es una aceleracion. La magnitud [[qddi]] conserva asi la unidad esperada.

## Interpretacion fisica

La aceleracion es positiva porque la fuerza aplicada supera al efecto restaurador del resorte. Si [[Qi]] hubiera sido menor que [[k]][[qi]], la aceleracion cambiaria de signo y el sistema tenderia a regresar hacia el origen. El resultado no es solo numerico: permite leer que el agente externo esta desplazando el equilibrio dinamico.

El ejemplo tambien enseña a interpretar [[pi]]. Aunque no se ha calculado un valor numerico para el momento conjugado, su presencia garantiza que el razonamiento pasa por la dependencia de [[L]] con [[qdi]]. Esa etapa es imprescindible para diferenciar un uso genuino de Euler-Lagrange de una simple reescritura de la segunda ley de Newton.

# Ejemplo de aplicacion real

## Contexto

En un actuador lineal con retorno elastico, el controlador aplica una fuerza programada sobre un carro unido a un resorte. La variable de interes no es cada componente cartesiana del movimiento, sino la coordenada efectiva de avance [[qi]].

## Estimacion fisica

Si el carro tiene [[m]]=0.8 kg, la rigidez es [[k]]=40 N/m, la posicion instantanea es [[qi]]=0.03 m y el controlador entrega [[Qi]]=2.0 N, entonces el termino restaurador vale 1.2 N y la aceleracion inicial queda cercana a 1.0 \(\mathrm{m/s^2}\).

La estimacion permite una lectura de diseño: aumentar [[k]] reduce esa aceleracion para la misma [[Qi]], mientras que disminuir [[m]] la incrementa. El modelo no solo predice un numero; orienta decisiones sobre sensibilidad de la respuesta.

## Interpretacion

El modelo lagrangiano separa con claridad lo que pertenece a la energia almacenada y lo que entra como accion externa. Esa separacion evita contabilizar dos veces la misma influencia fisica y permite discutir si el actuador domina al resorte o si el resorte recupera el movimiento.

En una revision tecnica, esta formulacion tambien deja una traza verificable. Si el comportamiento medido no coincide con la estimacion, el equipo sabe donde mirar: en la validez del modelo elastico, en la representacion de [[Qi]] o en la hipotesis de una unica coordenada [[qi]].
