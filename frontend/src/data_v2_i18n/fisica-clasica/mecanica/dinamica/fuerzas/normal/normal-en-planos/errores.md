# Errores frecuentes: Normal en planos

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### Por que parece correcto

En ejercicios rápidos, muchas personas memorizan que [[N]] "sale" de una fórmula y terminan tratándola como dato fijo, no como respuesta del sistema.

#### Por que es incorrecto

[[N]] es una reacción de contacto causada por el balance perpendicular entre peso proyectado, acciones externas y dinámica. No es una propiedad constante del bloque.

#### Senal de deteccion

La solución cambia [[theta]] o [[Fextn]] pero deja [[N]] igual sin justificar.

#### Correccion conceptual

Antes de calcular, declarar explícitamente qué términos del eje perpendicular están activos y cuál es la causalidad física esperada.

#### Mini-ejemplo

Incorrecto: "[[N]] siempre vale [[m]]·[[g]]".

Correcto: en plano inclinado sin forzamiento adicional, [[N]] depende de la proyección del peso y cambia con [[theta]].

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### Por que parece correcto

Si una ecuación aparece en la teoría, se asume que sirve para cualquier problema parecido.

#### Por que es incorrecto

Cada relación requiere hipótesis. Si aparece [[Fextn]] o [[aperp]] no nula, usar la forma base puede omitir términos esenciales.

#### Senal de deteccion

La resolución no menciona hipótesis y reutiliza una misma ecuación para escenarios físicamente distintos.

#### Correccion conceptual

Seleccionar ecuación por condiciones del problema: caso base si aplica, balance general cuando hay acciones o dinámica perpendicular adicional.

#### Mini-ejemplo

Incorrecto: usar el caso base inclinado aun cuando el enunciado declara un actuador perpendicular.

Correcto: incorporar [[Fextn]] en el balance perpendicular general.

### Error 3: Confundir magnitudes similares

#### Por que parece correcto

Las magnitudes [[g]] y [[aperp]] comparten unidades de aceleración, y [[Fextn]] y [[N]] comparten unidades de fuerza.

#### Por que es incorrecto

Tener la misma unidad no implica mismo rol físico. [[g]] describe campo gravitatorio, [[aperp]] describe respuesta dinámica; [[Fextn]] es acción externa, [[N]] es reacción de contacto.

#### Senal de deteccion

Se sustituyen valores intercambiando símbolos solo porque "las unidades coinciden".

#### Correccion conceptual

Mantener una tabla de rol físico por magnitud antes de sustituir: qué representa, quién la causa y en qué término de balance entra.

#### Mini-ejemplo

Incorrecto: reemplazar [[aperp]] por [[g]] en el término inercial del balance.

Correcto: usar [[g]] en el peso proyectado y [[aperp]] en el término dinámico perpendicular.

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### Por que parece correcto

El modelo funciona bien en muchos ejercicios y eso genera exceso de confianza.

#### Por que es incorrecto

Un modelo puede ser útil en régimen nominal y fallar fuera de él. Ignorar señales de fallo lleva a decisiones inseguras.

#### Senal de deteccion

Predicción de [[N]] sistemáticamente alejada de medición o aparición repetida de resultados no físicos.

#### Correccion conceptual

Definir umbral de error operativo y condición explícita de escalamiento a modelo extendido cuando el umbral se supera.

#### Mini-ejemplo

Incorrecto: mantener el mismo modelo con error del 15 por ciento en varias pruebas.

Correcto: activar transición de modelo y recalibrar parámetros.

### Error 5: Ignorar los límites del modelo conocidos

#### Por que parece correcto

La resolución algebraica produce un número y parece cerrar el problema.

#### Por que es incorrecto

Sin verificar límites, un número puede carecer de significado físico en el escenario real.

#### Senal de deteccion

No hay sección de validez ni chequeo de condición de contacto en el informe.

#### Correccion conceptual

Incluir siempre chequeos de dominio: hipótesis, rango de parámetros y condición unilateral de contacto.

#### Mini-ejemplo

Incorrecto: aceptar [[N]] negativa como valor final.

Correcto: interpretar [[N]] negativa como indicio de pérdida de contacto o hipótesis incompatibles.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### Por que parece correcto

Los pasos parecen breves y familiares, por lo que se da por hecho que están bien.

#### Por que es incorrecto

Un signo mal colocado en el balance perpendicular cambia la tendencia física de [[N]] y puede invertir conclusiones.

#### Senal de deteccion

El resultado contradice tendencias esperables: por ejemplo, mayor empuje hacia el plano y menor [[N]].

#### Correccion conceptual

Revisar cada término con su sentido físico antes de simplificar; no validar solo por apariencia algebraica.

#### Mini-ejemplo

Incorrecto: restar un término que físicamente comprime el contacto.

Correcto: mantener signo coherente con la convención de ejes declarada.

### Error 7: Olvidar constantes fundamentales o unidades

#### Por que parece correcto

Las magnitudes se escriben con símbolos y se asume que las unidades "se entienden".

#### Por que es incorrecto

Una conversión mal hecha puede producir errores de orden de magnitud y diagnósticos falsos.

#### Senal de deteccion

[[N]] resulta extremadamente grande o pequeña sin explicación física de contexto.

#### Correccion conceptual

Trabajar todo en unidades SI y hacer chequeo dimensional término a término.

#### Mini-ejemplo

Incorrecto: mezclar [[Fextn]] en kilonewtons con el resto en newtons sin conversión.

Correcto: convertir primero y luego resolver el balance.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### Por que parece correcto

Un resultado con muchos decimales transmite sensación de exactitud.

#### Por que es incorrecto

La precisión de salida está limitada por hipótesis, medición y ajuste de modelo, no por cantidad de dígitos impresos.

#### Senal de deteccion

Se reportan cuatro o cinco decimales sin análisis de incertidumbre ni tolerancias.

#### Correccion conceptual

Reportar cifras significativas coherentes con calidad de datos y objetivo de decisión.

#### Mini-ejemplo

Incorrecto: [[N]] = 33.94827 N como conclusión final absoluta.

Correcto: [[N]] aproximadamente 34 N con margen operacional indicado.

### Error 9: Saltarte la interpretación física del resultado calculado

#### Por que parece correcto

Al obtener un número, se asume que la tarea está terminada.

#### Por que es incorrecto

Sin interpretación causal no hay decisión confiable: no se sabe qué variable domina ni qué riesgo existe.

#### Senal de deteccion

La solución termina en sustitución numérica sin explicar implicaciones para contacto y validez.

#### Correccion conceptual

Cerrar siempre con lectura física: tendencia, margen de contacto y sensibilidad ante cambios de [[theta]], [[Fextn]] y [[aperp]].

#### Mini-ejemplo

Incorrecto: "[[N]] = 30 N".

Correcto: "[[N]] permanece positiva con margen; aumentar [[theta]] o forzar hacia fuera reduce contacto y puede acercar al desacople".

## Regla de autocontrol rápido

Antes de dar por finalizada una solución, confirmar:

- ¿El balance perpendicular incluye todos los términos activos?
- ¿La ecuación elegida corresponde al escenario físico declarado?
- ¿Las unidades son consistentes en cada término?
- ¿Se verificó explícitamente la condición de contacto?
- ¿Hay interpretación causal y no solo resultado numérico?

Si una respuesta es negativa, la solución aún no está lista para usarse como base de decisión.
