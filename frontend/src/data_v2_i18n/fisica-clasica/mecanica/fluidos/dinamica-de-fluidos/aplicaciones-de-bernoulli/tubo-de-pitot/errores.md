# Tubo de Pitot - Errores comunes

El tubo de Pitot parece simple, pero muchos fallos no vienen de la cuenta sino de leer mal que esta midiendo cada parte del sistema.

## Errores conceptuales

### Error 1: confundir presion estatica con presion de estancamiento
#### Por que parece correcto
Ambas son presiones medidas por la misma sonda y, a primera vista, puede parecer que solo cambian de nombre.
#### Por que es incorrecto
No representan la misma situacion fisica. La toma frontal frena el flujo y la lateral no.
#### Senal de deteccion
Al construir la diferencia de presion aparece un signo incoherente o la velocidad deja de tener sentido fisico.
#### Correccion conceptual
Separar mentalmente dos escenas: flujo detenido en la punta y flujo que sigue deslizandose lateralmente.
#### Mini-ejemplo
Si el alumno resta primero la frontal menos la lateral y obtiene un valor negativo, probablemente ha intercambiado los papeles de ambas presiones.

### Error 2: pensar que el Pitot da velocidad sin interpretacion intermedia
#### Por que parece correcto
En muchos problemas escolares se pasa tan rapido de la lectura a la velocidad que parece que el instrumento mida m/s de forma directa.
#### Por que es incorrecto
El Pitot mide una diferencia de presion; la velocidad es una magnitud inferida.
#### Senal de deteccion
Se escriben unidades de velocidad cuando el dato disponible todavia esta en pascales o en altura manometrica.
#### Correccion conceptual
Separar siempre dos pasos: construir [[dp]] y solo despues convertir [[dp]] en [[v]].
#### Mini-ejemplo
Un manometro que marca 32 mm de agua no esta diciendo todavia la velocidad del aire; primero hay que traducir esa altura a presion.

## Errores de modelo

### Error 3: usar la densidad del liquido manometrico en lugar de la del fluido en movimiento
#### Por que parece correcto
La densidad del agua ya aparece en el problema y suele ser el primer numero llamativo del montaje.
#### Por que es incorrecto
La densidad del agua sirve para convertir altura en presion, pero no para convertir presion en velocidad del aire.
#### Senal de deteccion
La velocidad calculada sale absurdamente pequena para una diferencia de presion razonable.
#### Correccion conceptual
Usar la densidad del liquido del manometro en el paso hidrostatico y la del fluido que circula en el paso de Pitot.
#### Mini-ejemplo
Si el conducto transporta aire y se usa 1000 kg/m3 en la formula de velocidad, la lectura final quedara distorsionada por varios ordenes de magnitud.

### Error 4: ignorar la compresibilidad en gases rapidos
#### Por que parece correcto
La formula incompresible es corta y funciona muy bien en muchos ejercicios.
#### Por que es incorrecto
Cuando el aire va demasiado rapido, la densidad deja de comportarse como constante y el modelo cambia.
#### Senal de deteccion
La velocidad estimada entra en una zona donde el numero de Mach ya no es pequeno.
#### Correccion conceptual
Si el contexto o el resultado apuntan a Mach alto, pasar al modelo con correccion de compresibilidad.
#### Mini-ejemplo
Una cuenta que arroja una rapidez propia de aviacion a reaccion no debe cerrarse con el mismo modelo usado para un conducto de laboratorio.

## Errores matematicos

### Error 5: mezclar unidades dentro de la raiz cuadrada
#### Por que parece correcto
Los instrumentos reales usan mm de agua, kPa o km/h, y el estudiante puede pensar que da igual sustituirlos tal cual.
#### Por que es incorrecto
La formula solo mantiene su significado fisico si las unidades son coherentes.
#### Senal de deteccion
El resultado no tiene escala razonable o la comprobacion dimensional se rompe.
#### Correccion conceptual
Convertir todo a SI antes de sustituir y revisar el orden de magnitud antes de aceptar la respuesta.
#### Mini-ejemplo
Usar milimetros donde la expresion espera metros hace que la diferencia de presion quede mil veces mal escalada.

## Errores de interpretacion

### Error 6: cerrar el ejercicio con un numero sin lectura fisica
#### Por que parece correcto
Parece que el trabajo termina cuando la calculadora devuelve una cifra.
#### Por que es incorrecto
Sin interpretar el resultado no se sabe si el modelo sigue siendo valido ni si la lectura es compatible con el sistema real.
#### Senal de deteccion
El alumno obtiene una rapidez y no puede decir si es moderada, alta o incompatible con el montaje.
#### Correccion conceptual
Comparar siempre la velocidad con el contexto, con el signo de [[dp]] y con la validez del modelo.
#### Mini-ejemplo
Decir solo "la velocidad es 23 m/s" no basta; hace falta explicar si ese valor es razonable para un conducto, una racha de viento o un avion ligero.

## Regla de autocontrol rapido

- Paso 1: identificar que presion corresponde a la toma frontal y cual a la toma lateral.
- Paso 2: construir primero la diferencia [[dp]] con signo coherente.
- Paso 3: usar la densidad del fluido en movimiento al calcular la velocidad.
- Paso 4: revisar si el rango de velocidad mantiene valido el modelo incompresible.