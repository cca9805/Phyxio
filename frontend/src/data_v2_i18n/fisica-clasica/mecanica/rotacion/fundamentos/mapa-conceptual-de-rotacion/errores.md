# Errores comunes en Rotación

## Errores conceptuales

### Error 1: confundir fuerza con [[torque]]

#### Por qué parece correcto
En la experiencia cotidiana, asociamos la fuerza con la causa del movimiento. El alumno suele creer que una fuerza de gran magnitud siempre producirá una gran rotación.

#### Por qué es incorrecto
El [[torque]] depende del "brazo de palanca". Una fuerza aplicada sobre el eje de giro tiene un brazo de palanca nulo y no puede generar rotación, sin importar su magnitud. El giro es una propiedad de la fuerza y su geometría.

#### Señal de detección
El alumno suma fuerzas en lugar de momentos en la ecuación dinámica, u olvida multiplicar por la distancia perpendicular al eje de giro.

#### Corrección conceptual
Dibuja siempre la línea de acción de la fuerza y halla la distancia mínima al eje. Recuerda que el [[torque]] es

{{f:segunda-ley-rotacion}}

.

#### Mini-ejemplo
Intentar abrir una puerta empujando justo en las bisagras: por mucha fuerza que hagas, la puerta no se moverá porque el brazo de palanca es cero.

### Error 2: tratar el momento de inercia como una constante universal

#### Por qué parece correcto
La masa de un objeto es constante en mecánica clásica, por lo que el alumno asume que el [[momento-de-inercia]] también es una propiedad intrínseca e invariable.

#### Por qué es incorrecto
El [[momento-de-inercia]] I depende críticamente del eje de rotación elegido. Si cambias el eje, cambias la distribución de masa y, por tanto, la resistencia al giro del objeto.

#### Señal de detección
El uso de fórmulas de tablas (como

{{f:posicion-angular-definicion}}

) sin comprobar si el eje del problema coincide con el eje de simetría de la fórmula.

#### Corrección conceptual
Define siempre el eje de giro antes de elegir la fórmula de I. Si el eje está desplazado, aplica obligatoriamente el Teorema de Steiner.

#### Mini-ejemplo
Una varilla es mucho más fácil de girar sobre su centro que sobre uno de sus extremos, aunque la masa de la varilla sea la misma en ambos casos.

## Errores de modelo

### Error 3: ignorar el rozamiento en la rodadura pura

#### Por qué parece correcto
El término "rodadura sin deslizamiento" sugiere falsamente que no hay fricción involucrada, o que el sistema es perfectamente ideal y sin pérdidas.

#### Por qué es incorrecto
Para que un objeto acelere angularmente mientras rueda (como al bajar una rampa), es indispensable un [[torque]] neto. Este [[torque]] suele provenir del rozamiento estático con el suelo. Sin fricción, el objeto solo deslizaría.

#### Señal de detección
El Diagrama de Cuerpo Libre no incluye la fuerza de rozamiento en el punto de contacto, a pesar de que el objeto está acelerando.

#### Corrección conceptual
Identifica qué fuerza está produciendo el cambio en la [[velocidad-angular]]. Si no hay fuerzas aplicadas aparte del peso, el rozamiento debe estar presente para generar [[torque]].

#### Mini-ejemplo
Un cilindro bajando por una rampa de hielo perfecto (sin rozamiento) bajaría sin girar, manteniendo su orientación original durante toda la caída.

## Errores matemáticos

### Error 4: no utilizar radianes en las ecuaciones de conexión

#### Por qué parece correcto
Los grados sexagesimales son la unidad de ángulo más familiar para los estudiantes desde la educación primaria.

#### Por qué es incorrecto
Las ecuaciones que vinculan el mundo lineal y angular (

{{f:relacion-lineal-angular-v}}

,

{{f:relacion-lineal-angular-v}}

) se derivan de la definición de arco en radianes. Usar grados introduce un factor de error de 57.3, invalidando el resultado.

#### Señal de detección
Resultados numéricos de velocidad o aceleración que son órdenes de magnitud mayores a lo esperado físicamente.

#### Corrección conceptual
Configura tu calculadora en radianes y realiza todas las conversiones de unidades (

{{f:posicion-angular-definicion}}

) al inicio del problema.

#### Mini-ejemplo
Si una rueda de 1 m gira a 90^?/s, su velocidad tangencial no es 90 m/s (velocidad de un huracán), sino

{{f:posicion-angular-definicion}}

.

## Errores de interpretación

### Error 5: creer que la aceleración centrípeta y angular son lo mismo

#### Por qué parece correcto
Ambas magnitudes llevan el nombre de "aceleración" y aparecen exclusivamente en contextos de movimiento circular.

#### Por qué es incorrecto
La [[aceleracion-angular]] alpha cambia la rapidez de giro del cuerpo. La aceleración centrípeta a_c es una componente lineal que solo cambia la dirección de la velocidad para mantener la trayectoria circular.

#### Señal de detección
El alumno intenta usar la fórmula de la segunda ley rotacional para hallar la fuerza centrípeta, o suma magnitudes angulares con lineales directamente.

#### Corrección conceptual
Distingue entre el cambio en el "ritmo de giro" (alpha) y la fuerza necesaria para "mantener el giro" (

{{f:posicion-angular-definicion}}

).

#### Mini-ejemplo
Un satélite en órbita circular tiene una aceleración centrípeta constante (hacia la Tierra) pero su [[aceleracion-angular]] es cero porque su velocidad de giro no cambia.

## Regla de autocontrol rápido
Antes de entregar, revisa: ¿He definido el eje de giro? ¿He usado radianes? ¿He incluido el rozamiento si hay rodadura? ¿Mi [[momento-de-inercia]] corresponde al eje real? Esta rutina evita el 90% de los fallos típicos en exámenes de rotación.