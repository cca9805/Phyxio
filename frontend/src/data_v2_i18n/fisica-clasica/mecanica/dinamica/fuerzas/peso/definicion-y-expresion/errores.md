# Errores frecuentes: Definicion y expresion

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### Por que parece correcto

Como el cálculo suele empezar con un número de gravedad, parece que el peso ya "viene dado" y la masa solo acompaña.

#### Por que es incorrecto

El peso [[P]] es resultado de interacción entre [[m]] y campo [[g]]. Ninguno por separado explica el fenómeno completo.

#### Senal de deteccion

El estudiante cambia [[m]] y deja [[Pmod]] igual, o cambia [[gmod]] y concluye que cambió la masa.

#### Correccion conceptual

Separar explícitamente propiedad del cuerpo (masa) y propiedad del entorno (gravedad).

#### Mini-ejemplo

Incorrecto: "en la Luna la masa es menor".

Correcto: la masa es la misma; cambia [[gmod]] y por eso cambia [[Pmod]].

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### Por que parece correcto

La forma [[Pmod]] = [[m]]*[[gmod]] es simple y parece universal.

#### Por que es incorrecto

Esa forma supone campo casi uniforme; en cambios apreciables de [[r]] puede requerirse el modelo central.

#### Senal de deteccion

Se comparan dos altitudes o dos astros usando el mismo [[gmod]] fijo sin justificación.

#### Correccion conceptual

Si el problema depende de [[r]], calcular [[gmod]] con [[G]] y [[M_astro]] antes de obtener peso.

#### Mini-ejemplo

Incorrecto: usar 9.8 m/s^2 en todo problema planetario.

Correcto: estimar [[gmod]] con el modelo central cuando corresponde.

### Error 3: Confundir magnitudes similares

#### Por que parece correcto

[[P]] y [[Pmod]] se escriben parecido; [[g]] y [[gmod]] también.

#### Por que es incorrecto

Vector y escalar responden a preguntas distintas. Mezclarlos rompe signos, componentes y DCL.

#### Senal de deteccion

Se usan componentes [[P_x]] y [[P_y]] junto con [[Pmod]] sin convención de ejes.

#### Correccion conceptual

Declarar primero si el cálculo es vectorial o escalar y mantener consistencia hasta el final.

#### Mini-ejemplo

Incorrecto: sumar [[Pmod]] directamente a una componente horizontal.

Correcto: proyectar primero [[P]] y luego operar por componentes.

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### Por que parece correcto

En problemas de aula, campo uniforme funciona muchas veces.

#### Por que es incorrecto

Fuera de ese régimen, la precisión puede caer y afectar decisiones.

#### Senal de deteccion

Diferencias sistemáticas entre predicción y medición al variar altitud.

#### Correccion conceptual

Usar criterio cuantitativo de transición y migrar al modelo central cuando sea necesario.

#### Mini-ejemplo

Incorrecto: ignorar variación de [[r]] en evaluación comparativa de sedes.

Correcto: recalcular [[gmod]] por sede y comparar [[Pmod]].

### Error 5: Ignorar los límites del modelo conocidos

#### Por que parece correcto

El resultado numérico parece razonable y se da por terminado.

#### Por que es incorrecto

Sin límite de validez declarado, el valor puede ser engañoso.

#### Senal de deteccion

No aparece ninguna justificación sobre régimen uniforme o central.

#### Correccion conceptual

Agregar siempre una frase de validez del modelo elegido.

#### Mini-ejemplo

Incorrecto: reportar solo [[Pmod]].

Correcto: reportar [[Pmod]] y condiciones bajo las que es válido.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### Por que parece correcto

Las expresiones son cortas y generan exceso de confianza.

#### Por que es incorrecto

Un despeje mal hecho en [[gmod]] o [[r]] cambia el orden de magnitud y rompe interpretación.

#### Senal de deteccion

Valores imposibles de gravedad o distancia radial.

#### Correccion conceptual

Validar unidades y orden de magnitud tras cada despeje crítico.

#### Mini-ejemplo

Incorrecto: olvidar el cuadrado de [[r]] en la expresión central.

Correcto: conservar dependencia cuadrática y revisar dimensiones.

### Error 7: Olvidar constantes fundamentales o unidades

#### Por que parece correcto

[[G]] es pequeña y se trata como detalle menor.

#### Por que es incorrecto

Una unidad inconsistente en [[G]] altera drásticamente [[gmod]] y [[Pmod]].

#### Senal de deteccion

Resultado de peso varios órdenes fuera de escala esperada.

#### Correccion conceptual

Trabajar en SI completo y comprobar dimensión final de cada término.

#### Mini-ejemplo

Incorrecto: usar km en [[r]] sin conversión a metros.

Correcto: convertir a SI antes de sustituir.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### Por que parece correcto

Muchos decimales sugieren precisión alta.

#### Por que es incorrecto

La incertidumbre del modelo y de entrada limita la precisión efectiva.

#### Senal de deteccion

Se reportan cinco decimales sin análisis de tolerancia.

#### Correccion conceptual

Ajustar cifras significativas al nivel de datos y objetivo.

#### Mini-ejemplo

Incorrecto: [[Pmod]] = 117.62391 N sin contexto.

Correcto: [[Pmod]] ≈ 118 N con margen indicado.

### Error 9: Saltarte la interpretación física del resultado calculado

#### Por que parece correcto

Una vez obtenido el número, parece que ya se resolvió todo.

#### Por que es incorrecto

Sin lectura causal no hay decisión física defendible.

#### Senal de deteccion

La solución termina en sustitución numérica sin explicar qué variable controla el cambio.

#### Correccion conceptual

Cerrar siempre con relación causa-efecto entre [[m]], [[gmod]], [[r]] y resultado.

#### Mini-ejemplo

Incorrecto: "peso menor".

Correcto: "peso menor porque aumentó [[r]], disminuyó [[gmod]] y se mantuvo [[m]]".

## Regla de autocontrol rápido

Antes de cerrar:

- ¿Separé masa y peso sin ambigüedad?
- ¿Elegí representación vectorial o escalar de forma consistente?
- ¿Declaré si usé campo uniforme o central?
- ¿Comprobé unidades y orden de magnitud?
- ¿Interpreté físicamente el resultado final?

Si una respuesta es no, la resolución no está lista.
