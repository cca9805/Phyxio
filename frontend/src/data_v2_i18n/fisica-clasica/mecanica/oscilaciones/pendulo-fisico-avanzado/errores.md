## Errores conceptuales

### Error 1: usar [[I_cm]] como si fuera [[I_O]]

#### Por qué parece correcto
El momento de inercia del centro de masas suele aparecer en tablas y parece ser la propiedad propia del cuerpo.

#### Por qué es incorrecto
El pendulo gira alrededor del pivote real. La inercia dinamica es [[I_O]], que incluye el traslado del eje mediante [[d]].

#### Señal de detección
El periodo calculado no cambia al mover el pivote, aunque el experimento si cambia.

#### Corrección conceptual
Aplica Steiner antes de calcular [[omega0]] o [[T0]].

#### Mini-ejemplo
Una regla tiene el mismo [[I_cm]] en todos los agujeros, pero su periodo cambia al colgarla de puntos distintos.

### Error 2: confundir [[leq]] con una longitud fisica directa

#### Por qué parece correcto
La longitud equivalente se mide en metros y se parece a la longitud de un pendulo simple.

#### Por qué es incorrecto
[[leq]] es una equivalencia de periodo lineal. No tiene por que coincidir con una distancia visible del cuerpo.

#### Señal de detección
La solucion dibuja [[leq]] como si fuera necesariamente la distancia al centro de masas.

#### Corrección conceptual
Usa [[leq]] solo para comparar periodos, no para sustituir la geometria real.

#### Mini-ejemplo
Un cuerpo ancho puede tener una [[leq]] mayor que la distancia entre pivote y centro de masas.

## Errores de modelo

### Error 3: aplicar [[T0]] a amplitudes grandes

#### Por qué parece correcto
El periodo lineal es simple y suele funcionar muy bien en ejercicios basicos.

#### Por qué es incorrecto
Para angulos grandes, el seno no es proporcional al angulo. La ecuacion no lineal y la energia muestran que el periodo real aumenta.

#### Señal de detección
El enunciado menciona amplitud finita o angulos grandes y la solucion no discute [[theta]].

#### Corrección conceptual
Declara el limite del modelo lineal y usa energia o integracion no lineal si se exige precision.

#### Mini-ejemplo
Un pendulo soltado desde 40 grados no tiene exactamente el mismo periodo que uno soltado desde 3 grados.

### Error 4: ignorar el rozamiento del pivote

#### Por qué parece correcto
El rozamiento puede parecer pequeño y el cuerpo sigue oscilando.

#### Por qué es incorrecto
Si la amplitud cae rapido, la energia [[E]] ya no se conserva y el periodo medido puede depender del ciclo observado.

#### Señal de detección
Los maximos sucesivos disminuyen claramente durante la medida.

#### Corrección conceptual
Mide pocos ciclos de baja perdida o usa un modelo amortiguado.

#### Mini-ejemplo
Un eje apretado puede alargar o distorsionar el periodo observado aunque la geometria sea correcta.

## Errores matemáticos

### Error 5: olvidar unidades de inercia

#### Por qué parece correcto
Las expresiones contienen muchas longitudes y masas y parece suficiente conservar metros y kilogramos.

#### Por qué es incorrecto
[[I_O]] y [[I_cm]] deben estar en kg*m^2. Si una longitud entra en centimetros, el periodo queda mal escalado.

#### Señal de detección
El resultado da periodos absurdamente pequenos o grandes.

#### Corrección conceptual
Convierte todas las longitudes a metros antes de usar Steiner y el periodo.

#### Mini-ejemplo
Usar 20 cm como 20 m multiplica el termino de traslado de eje por un factor enorme.

### Error 6: perder el cuadrado en Steiner

#### Por qué parece correcto
La distancia [[d]] parece un brazo de palanca lineal.

#### Por qué es incorrecto
El termino de traslado de inercia depende de [[d]] al cuadrado. Usarlo lineal cambia dimensiones y fisica.

#### Señal de detección
La suma no tiene unidades de kg*m^2.

#### Corrección conceptual
Verifica dimensionalmente [[I_O]] antes de calcular [[T0]].

#### Mini-ejemplo
Duplicar [[d]] cuadruplica la contribucion de traslado a la inercia.

## Errores de interpretación

### Error 7: pensar que masa mayor siempre aumenta el periodo

#### Por qué parece correcto
Mas masa sugiere mas inercia y movimiento mas lento.

#### Por qué es incorrecto
La masa tambien aumenta el torque gravitatorio. Si la geometria escala de cierta forma, parte del efecto de [[m]] puede cancelarse.

#### Señal de detección
La solucion razona solo con peso o solo con inercia.

#### Corrección conceptual
Analiza siempre el cociente entre [[I_O]] y [[m]][[g]][[d]].

#### Mini-ejemplo
Dos cuerpos geometricamente semejantes no cambian el periodo solo por ser mas pesados si la distribucion escala igual.

## Regla de autocontrol rápido

Antes de cerrar un problema, comprueba: eje real identificado, [[I_O]] calculado o medido, [[d]] desde pivote a centro de masas, unidades SI, amplitud angular compatible con el modelo lineal y coherencia energetica si se trabaja fuera de pequenas oscilaciones.
