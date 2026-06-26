const e=`# Tubo de Pitot - Errores comunes\r
\r
El tubo de Pitot parece simple, pero muchos fallos no vienen de la cuenta sino de leer mal que esta midiendo cada parte del sistema.\r
\r
## Errores conceptuales\r
\r
### Error 1: confundir presion estatica con presion de estancamiento\r
#### Por que parece correcto\r
Ambas son presiones medidas por la misma sonda y, a primera vista, puede parecer que solo cambian de nombre.\r
#### Por que es incorrecto\r
No representan la misma situacion fisica. La toma frontal frena el flujo y la lateral no.\r
#### Senal de deteccion\r
Al construir la diferencia de presion aparece un signo incoherente o la velocidad deja de tener sentido fisico.\r
#### Correccion conceptual\r
Separar mentalmente dos escenas: flujo detenido en la punta y flujo que sigue deslizandose lateralmente.\r
#### Mini-ejemplo\r
Si el alumno resta primero la frontal menos la lateral y obtiene un valor negativo, probablemente ha intercambiado los papeles de ambas presiones.\r
\r
### Error 2: pensar que el Pitot da velocidad sin interpretacion intermedia\r
#### Por que parece correcto\r
En muchos problemas escolares se pasa tan rapido de la lectura a la velocidad que parece que el instrumento mida m/s de forma directa.\r
#### Por que es incorrecto\r
El Pitot mide una diferencia de presion; la velocidad es una magnitud inferida.\r
#### Senal de deteccion\r
Se escriben unidades de velocidad cuando el dato disponible todavia esta en pascales o en altura manometrica.\r
#### Correccion conceptual\r
Separar siempre dos pasos: construir [[dp]] y solo despues convertir [[dp]] en [[v]].\r
#### Mini-ejemplo\r
Un manometro que marca 32 mm de agua no esta diciendo todavia la velocidad del aire; primero hay que traducir esa altura a presion.\r
\r
## Errores de modelo\r
\r
### Error 3: usar la densidad del liquido manometrico en lugar de la del fluido en movimiento\r
#### Por que parece correcto\r
La densidad del agua ya aparece en el problema y suele ser el primer numero llamativo del montaje.\r
#### Por que es incorrecto\r
La densidad del agua sirve para convertir altura en presion, pero no para convertir presion en velocidad del aire.\r
#### Senal de deteccion\r
La velocidad calculada sale absurdamente pequena para una diferencia de presion razonable.\r
#### Correccion conceptual\r
Usar la densidad del liquido del manometro en el paso hidrostatico y la del fluido que circula en el paso de Pitot.\r
#### Mini-ejemplo\r
Si el conducto transporta aire y se usa 1000 kg/m3 en la formula de velocidad, la lectura final quedara distorsionada por varios ordenes de magnitud.\r
\r
### Error 4: ignorar la compresibilidad en gases rapidos\r
#### Por que parece correcto\r
La formula incompresible es corta y funciona muy bien en muchos ejercicios.\r
#### Por que es incorrecto\r
Cuando el aire va demasiado rapido, la densidad deja de comportarse como constante y el modelo cambia.\r
#### Senal de deteccion\r
La velocidad estimada entra en una zona donde el numero de Mach ya no es pequeno.\r
#### Correccion conceptual\r
Si el contexto o el resultado apuntan a Mach alto, pasar al modelo con correccion de compresibilidad.\r
#### Mini-ejemplo\r
Una cuenta que arroja una rapidez propia de aviacion a reaccion no debe cerrarse con el mismo modelo usado para un conducto de laboratorio.\r
\r
## Errores matematicos\r
\r
### Error 5: mezclar unidades dentro de la raiz cuadrada\r
#### Por que parece correcto\r
Los instrumentos reales usan mm de agua, kPa o km/h, y el estudiante puede pensar que da igual sustituirlos tal cual.\r
#### Por que es incorrecto\r
La formula solo mantiene su significado fisico si las unidades son coherentes.\r
#### Senal de deteccion\r
El resultado no tiene escala razonable o la comprobacion dimensional se rompe.\r
#### Correccion conceptual\r
Convertir todo a SI antes de sustituir y revisar el orden de magnitud antes de aceptar la respuesta.\r
#### Mini-ejemplo\r
Usar milimetros donde la expresion espera metros hace que la diferencia de presion quede mil veces mal escalada.\r
\r
## Errores de interpretacion\r
\r
### Error 6: cerrar el ejercicio con un numero sin lectura fisica\r
#### Por que parece correcto\r
Parece que el trabajo termina cuando la calculadora devuelve una cifra.\r
#### Por que es incorrecto\r
Sin interpretar el resultado no se sabe si el modelo sigue siendo valido ni si la lectura es compatible con el sistema real.\r
#### Senal de deteccion\r
El alumno obtiene una rapidez y no puede decir si es moderada, alta o incompatible con el montaje.\r
#### Correccion conceptual\r
Comparar siempre la velocidad con el contexto, con el signo de [[dp]] y con la validez del modelo.\r
#### Mini-ejemplo\r
Decir solo "la velocidad es 23 m/s" no basta; hace falta explicar si ese valor es razonable para un conducto, una racha de viento o un avion ligero.\r
\r
## Regla de autocontrol rapido\r
\r
- Paso 1: identificar que presion corresponde a la toma frontal y cual a la toma lateral.\r
- Paso 2: construir primero la diferencia [[dp]] con signo coherente.\r
- Paso 3: usar la densidad del fluido en movimiento al calcular la velocidad.\r
- Paso 4: revisar si el rango de velocidad mantiene valido el modelo incompresible.`;export{e as default};
