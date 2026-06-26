const e=`# Errores comunes en Rotación\r
\r
## Errores conceptuales\r
\r
### Error 1: confundir fuerza con [[torque]]\r
\r
#### Por qué parece correcto\r
En la experiencia cotidiana, asociamos la fuerza con la causa del movimiento. El alumno suele creer que una fuerza de gran magnitud siempre producirá una gran rotación.\r
\r
#### Por qué es incorrecto\r
El [[torque]] depende del "brazo de palanca". Una fuerza aplicada sobre el eje de giro tiene un brazo de palanca nulo y no puede generar rotación, sin importar su magnitud. El giro es una propiedad de la fuerza y su geometría.\r
\r
#### Señal de detección\r
El alumno suma fuerzas en lugar de momentos en la ecuación dinámica, u olvida multiplicar por la distancia perpendicular al eje de giro.\r
\r
#### Corrección conceptual\r
Dibuja siempre la línea de acción de la fuerza y halla la distancia mínima al eje. Recuerda que el [[torque]] es\r
\r
{{f:segunda-ley-rotacion}}\r
\r
.\r
\r
#### Mini-ejemplo\r
Intentar abrir una puerta empujando justo en las bisagras: por mucha fuerza que hagas, la puerta no se moverá porque el brazo de palanca es cero.\r
\r
### Error 2: tratar el momento de inercia como una constante universal\r
\r
#### Por qué parece correcto\r
La masa de un objeto es constante en mecánica clásica, por lo que el alumno asume que el [[momento-de-inercia]] también es una propiedad intrínseca e invariable.\r
\r
#### Por qué es incorrecto\r
El [[momento-de-inercia]] I depende críticamente del eje de rotación elegido. Si cambias el eje, cambias la distribución de masa y, por tanto, la resistencia al giro del objeto.\r
\r
#### Señal de detección\r
El uso de fórmulas de tablas (como\r
\r
{{f:posicion-angular-definicion}}\r
\r
) sin comprobar si el eje del problema coincide con el eje de simetría de la fórmula.\r
\r
#### Corrección conceptual\r
Define siempre el eje de giro antes de elegir la fórmula de I. Si el eje está desplazado, aplica obligatoriamente el Teorema de Steiner.\r
\r
#### Mini-ejemplo\r
Una varilla es mucho más fácil de girar sobre su centro que sobre uno de sus extremos, aunque la masa de la varilla sea la misma en ambos casos.\r
\r
## Errores de modelo\r
\r
### Error 3: ignorar el rozamiento en la rodadura pura\r
\r
#### Por qué parece correcto\r
El término "rodadura sin deslizamiento" sugiere falsamente que no hay fricción involucrada, o que el sistema es perfectamente ideal y sin pérdidas.\r
\r
#### Por qué es incorrecto\r
Para que un objeto acelere angularmente mientras rueda (como al bajar una rampa), es indispensable un [[torque]] neto. Este [[torque]] suele provenir del rozamiento estático con el suelo. Sin fricción, el objeto solo deslizaría.\r
\r
#### Señal de detección\r
El Diagrama de Cuerpo Libre no incluye la fuerza de rozamiento en el punto de contacto, a pesar de que el objeto está acelerando.\r
\r
#### Corrección conceptual\r
Identifica qué fuerza está produciendo el cambio en la [[velocidad-angular]]. Si no hay fuerzas aplicadas aparte del peso, el rozamiento debe estar presente para generar [[torque]].\r
\r
#### Mini-ejemplo\r
Un cilindro bajando por una rampa de hielo perfecto (sin rozamiento) bajaría sin girar, manteniendo su orientación original durante toda la caída.\r
\r
## Errores matemáticos\r
\r
### Error 4: no utilizar radianes en las ecuaciones de conexión\r
\r
#### Por qué parece correcto\r
Los grados sexagesimales son la unidad de ángulo más familiar para los estudiantes desde la educación primaria.\r
\r
#### Por qué es incorrecto\r
Las ecuaciones que vinculan el mundo lineal y angular (\r
\r
{{f:relacion-lineal-angular-v}}\r
\r
,\r
\r
{{f:relacion-lineal-angular-v}}\r
\r
) se derivan de la definición de arco en radianes. Usar grados introduce un factor de error de 57.3, invalidando el resultado.\r
\r
#### Señal de detección\r
Resultados numéricos de velocidad o aceleración que son órdenes de magnitud mayores a lo esperado físicamente.\r
\r
#### Corrección conceptual\r
Configura tu calculadora en radianes y realiza todas las conversiones de unidades (\r
\r
{{f:posicion-angular-definicion}}\r
\r
) al inicio del problema.\r
\r
#### Mini-ejemplo\r
Si una rueda de 1 m gira a 90^?/s, su velocidad tangencial no es 90 m/s (velocidad de un huracán), sino\r
\r
{{f:posicion-angular-definicion}}\r
\r
.\r
\r
## Errores de interpretación\r
\r
### Error 5: creer que la aceleración centrípeta y angular son lo mismo\r
\r
#### Por qué parece correcto\r
Ambas magnitudes llevan el nombre de "aceleración" y aparecen exclusivamente en contextos de movimiento circular.\r
\r
#### Por qué es incorrecto\r
La [[aceleracion-angular]] alpha cambia la rapidez de giro del cuerpo. La aceleración centrípeta a_c es una componente lineal que solo cambia la dirección de la velocidad para mantener la trayectoria circular.\r
\r
#### Señal de detección\r
El alumno intenta usar la fórmula de la segunda ley rotacional para hallar la fuerza centrípeta, o suma magnitudes angulares con lineales directamente.\r
\r
#### Corrección conceptual\r
Distingue entre el cambio en el "ritmo de giro" (alpha) y la fuerza necesaria para "mantener el giro" (\r
\r
{{f:posicion-angular-definicion}}\r
\r
).\r
\r
#### Mini-ejemplo\r
Un satélite en órbita circular tiene una aceleración centrípeta constante (hacia la Tierra) pero su [[aceleracion-angular]] es cero porque su velocidad de giro no cambia.\r
\r
## Regla de autocontrol rápido\r
Antes de entregar, revisa: ¿He definido el eje de giro? ¿He usado radianes? ¿He incluido el rozamiento si hay rodadura? ¿Mi [[momento-de-inercia]] corresponde al eje real? Esta rutina evita el 90% de los fallos típicos en exámenes de rotación.`;export{e as default};
