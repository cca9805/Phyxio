const r=`# Errores frecuentes: Definicion y expresion\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
#### Por que parece correcto\r
\r
Como el cálculo suele empezar con un número de gravedad, parece que el peso ya "viene dado" y la masa solo acompaña.\r
\r
#### Por que es incorrecto\r
\r
El peso [[P]] es resultado de interacción entre [[m]] y campo [[g]]. Ninguno por separado explica el fenómeno completo.\r
\r
#### Senal de deteccion\r
\r
El estudiante cambia [[m]] y deja [[Pmod]] igual, o cambia [[gmod]] y concluye que cambió la masa.\r
\r
#### Correccion conceptual\r
\r
Separar explícitamente propiedad del cuerpo (masa) y propiedad del entorno (gravedad).\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: "en la Luna la masa es menor".\r
\r
Correcto: la masa es la misma; cambia [[gmod]] y por eso cambia [[Pmod]].\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
#### Por que parece correcto\r
\r
La forma [[Pmod]] = [[m]]*[[gmod]] es simple y parece universal.\r
\r
#### Por que es incorrecto\r
\r
Esa forma supone campo casi uniforme; en cambios apreciables de [[r]] puede requerirse el modelo central.\r
\r
#### Senal de deteccion\r
\r
Se comparan dos altitudes o dos astros usando el mismo [[gmod]] fijo sin justificación.\r
\r
#### Correccion conceptual\r
\r
Si el problema depende de [[r]], calcular [[gmod]] con [[G]] y [[M_astro]] antes de obtener peso.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: usar 9.8 m/s^2 en todo problema planetario.\r
\r
Correcto: estimar [[gmod]] con el modelo central cuando corresponde.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
#### Por que parece correcto\r
\r
[[P]] y [[Pmod]] se escriben parecido; [[g]] y [[gmod]] también.\r
\r
#### Por que es incorrecto\r
\r
Vector y escalar responden a preguntas distintas. Mezclarlos rompe signos, componentes y DCL.\r
\r
#### Senal de deteccion\r
\r
Se usan componentes [[P_x]] y [[P_y]] junto con [[Pmod]] sin convención de ejes.\r
\r
#### Correccion conceptual\r
\r
Declarar primero si el cálculo es vectorial o escalar y mantener consistencia hasta el final.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: sumar [[Pmod]] directamente a una componente horizontal.\r
\r
Correcto: proyectar primero [[P]] y luego operar por componentes.\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
#### Por que parece correcto\r
\r
En problemas de aula, campo uniforme funciona muchas veces.\r
\r
#### Por que es incorrecto\r
\r
Fuera de ese régimen, la precisión puede caer y afectar decisiones.\r
\r
#### Senal de deteccion\r
\r
Diferencias sistemáticas entre predicción y medición al variar altitud.\r
\r
#### Correccion conceptual\r
\r
Usar criterio cuantitativo de transición y migrar al modelo central cuando sea necesario.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: ignorar variación de [[r]] en evaluación comparativa de sedes.\r
\r
Correcto: recalcular [[gmod]] por sede y comparar [[Pmod]].\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
#### Por que parece correcto\r
\r
El resultado numérico parece razonable y se da por terminado.\r
\r
#### Por que es incorrecto\r
\r
Sin límite de validez declarado, el valor puede ser engañoso.\r
\r
#### Senal de deteccion\r
\r
No aparece ninguna justificación sobre régimen uniforme o central.\r
\r
#### Correccion conceptual\r
\r
Agregar siempre una frase de validez del modelo elegido.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: reportar solo [[Pmod]].\r
\r
Correcto: reportar [[Pmod]] y condiciones bajo las que es válido.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
#### Por que parece correcto\r
\r
Las expresiones son cortas y generan exceso de confianza.\r
\r
#### Por que es incorrecto\r
\r
Un despeje mal hecho en [[gmod]] o [[r]] cambia el orden de magnitud y rompe interpretación.\r
\r
#### Senal de deteccion\r
\r
Valores imposibles de gravedad o distancia radial.\r
\r
#### Correccion conceptual\r
\r
Validar unidades y orden de magnitud tras cada despeje crítico.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: olvidar el cuadrado de [[r]] en la expresión central.\r
\r
Correcto: conservar dependencia cuadrática y revisar dimensiones.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
#### Por que parece correcto\r
\r
[[G]] es pequeña y se trata como detalle menor.\r
\r
#### Por que es incorrecto\r
\r
Una unidad inconsistente en [[G]] altera drásticamente [[gmod]] y [[Pmod]].\r
\r
#### Senal de deteccion\r
\r
Resultado de peso varios órdenes fuera de escala esperada.\r
\r
#### Correccion conceptual\r
\r
Trabajar en SI completo y comprobar dimensión final de cada término.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: usar km en [[r]] sin conversión a metros.\r
\r
Correcto: convertir a SI antes de sustituir.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
#### Por que parece correcto\r
\r
Muchos decimales sugieren precisión alta.\r
\r
#### Por que es incorrecto\r
\r
La incertidumbre del modelo y de entrada limita la precisión efectiva.\r
\r
#### Senal de deteccion\r
\r
Se reportan cinco decimales sin análisis de tolerancia.\r
\r
#### Correccion conceptual\r
\r
Ajustar cifras significativas al nivel de datos y objetivo.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: [[Pmod]] = 117.62391 N sin contexto.\r
\r
Correcto: [[Pmod]] ≈ 118 N con margen indicado.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
#### Por que parece correcto\r
\r
Una vez obtenido el número, parece que ya se resolvió todo.\r
\r
#### Por que es incorrecto\r
\r
Sin lectura causal no hay decisión física defendible.\r
\r
#### Senal de deteccion\r
\r
La solución termina en sustitución numérica sin explicar qué variable controla el cambio.\r
\r
#### Correccion conceptual\r
\r
Cerrar siempre con relación causa-efecto entre [[m]], [[gmod]], [[r]] y resultado.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: "peso menor".\r
\r
Correcto: "peso menor porque aumentó [[r]], disminuyó [[gmod]] y se mantuvo [[m]]".\r
\r
## Regla de autocontrol rápido\r
\r
Antes de cerrar:\r
\r
- ¿Separé masa y peso sin ambigüedad?\r
- ¿Elegí representación vectorial o escalar de forma consistente?\r
- ¿Declaré si usé campo uniforme o central?\r
- ¿Comprobé unidades y orden de magnitud?\r
- ¿Interpreté físicamente el resultado final?\r
\r
Si una respuesta es no, la resolución no está lista.\r
`;export{r as default};
