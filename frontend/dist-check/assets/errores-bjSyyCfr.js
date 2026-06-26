const e=`# Errores frecuentes: Normal en planos\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
#### Por que parece correcto\r
\r
En ejercicios rápidos, muchas personas memorizan que [[N]] "sale" de una fórmula y terminan tratándola como dato fijo, no como respuesta del sistema.\r
\r
#### Por que es incorrecto\r
\r
[[N]] es una reacción de contacto causada por el balance perpendicular entre peso proyectado, acciones externas y dinámica. No es una propiedad constante del bloque.\r
\r
#### Senal de deteccion\r
\r
La solución cambia [[theta]] o [[Fextn]] pero deja [[N]] igual sin justificar.\r
\r
#### Correccion conceptual\r
\r
Antes de calcular, declarar explícitamente qué términos del eje perpendicular están activos y cuál es la causalidad física esperada.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: "[[N]] siempre vale [[m]]·[[g]]".\r
\r
Correcto: en plano inclinado sin forzamiento adicional, [[N]] depende de la proyección del peso y cambia con [[theta]].\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
#### Por que parece correcto\r
\r
Si una ecuación aparece en la teoría, se asume que sirve para cualquier problema parecido.\r
\r
#### Por que es incorrecto\r
\r
Cada relación requiere hipótesis. Si aparece [[Fextn]] o [[aperp]] no nula, usar la forma base puede omitir términos esenciales.\r
\r
#### Senal de deteccion\r
\r
La resolución no menciona hipótesis y reutiliza una misma ecuación para escenarios físicamente distintos.\r
\r
#### Correccion conceptual\r
\r
Seleccionar ecuación por condiciones del problema: caso base si aplica, balance general cuando hay acciones o dinámica perpendicular adicional.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: usar el caso base inclinado aun cuando el enunciado declara un actuador perpendicular.\r
\r
Correcto: incorporar [[Fextn]] en el balance perpendicular general.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
#### Por que parece correcto\r
\r
Las magnitudes [[g]] y [[aperp]] comparten unidades de aceleración, y [[Fextn]] y [[N]] comparten unidades de fuerza.\r
\r
#### Por que es incorrecto\r
\r
Tener la misma unidad no implica mismo rol físico. [[g]] describe campo gravitatorio, [[aperp]] describe respuesta dinámica; [[Fextn]] es acción externa, [[N]] es reacción de contacto.\r
\r
#### Senal de deteccion\r
\r
Se sustituyen valores intercambiando símbolos solo porque "las unidades coinciden".\r
\r
#### Correccion conceptual\r
\r
Mantener una tabla de rol físico por magnitud antes de sustituir: qué representa, quién la causa y en qué término de balance entra.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: reemplazar [[aperp]] por [[g]] en el término inercial del balance.\r
\r
Correcto: usar [[g]] en el peso proyectado y [[aperp]] en el término dinámico perpendicular.\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
#### Por que parece correcto\r
\r
El modelo funciona bien en muchos ejercicios y eso genera exceso de confianza.\r
\r
#### Por que es incorrecto\r
\r
Un modelo puede ser útil en régimen nominal y fallar fuera de él. Ignorar señales de fallo lleva a decisiones inseguras.\r
\r
#### Senal de deteccion\r
\r
Predicción de [[N]] sistemáticamente alejada de medición o aparición repetida de resultados no físicos.\r
\r
#### Correccion conceptual\r
\r
Definir umbral de error operativo y condición explícita de escalamiento a modelo extendido cuando el umbral se supera.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: mantener el mismo modelo con error del 15 por ciento en varias pruebas.\r
\r
Correcto: activar transición de modelo y recalibrar parámetros.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
#### Por que parece correcto\r
\r
La resolución algebraica produce un número y parece cerrar el problema.\r
\r
#### Por que es incorrecto\r
\r
Sin verificar límites, un número puede carecer de significado físico en el escenario real.\r
\r
#### Senal de deteccion\r
\r
No hay sección de validez ni chequeo de condición de contacto en el informe.\r
\r
#### Correccion conceptual\r
\r
Incluir siempre chequeos de dominio: hipótesis, rango de parámetros y condición unilateral de contacto.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: aceptar [[N]] negativa como valor final.\r
\r
Correcto: interpretar [[N]] negativa como indicio de pérdida de contacto o hipótesis incompatibles.\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
#### Por que parece correcto\r
\r
Los pasos parecen breves y familiares, por lo que se da por hecho que están bien.\r
\r
#### Por que es incorrecto\r
\r
Un signo mal colocado en el balance perpendicular cambia la tendencia física de [[N]] y puede invertir conclusiones.\r
\r
#### Senal de deteccion\r
\r
El resultado contradice tendencias esperables: por ejemplo, mayor empuje hacia el plano y menor [[N]].\r
\r
#### Correccion conceptual\r
\r
Revisar cada término con su sentido físico antes de simplificar; no validar solo por apariencia algebraica.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: restar un término que físicamente comprime el contacto.\r
\r
Correcto: mantener signo coherente con la convención de ejes declarada.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
#### Por que parece correcto\r
\r
Las magnitudes se escriben con símbolos y se asume que las unidades "se entienden".\r
\r
#### Por que es incorrecto\r
\r
Una conversión mal hecha puede producir errores de orden de magnitud y diagnósticos falsos.\r
\r
#### Senal de deteccion\r
\r
[[N]] resulta extremadamente grande o pequeña sin explicación física de contexto.\r
\r
#### Correccion conceptual\r
\r
Trabajar todo en unidades SI y hacer chequeo dimensional término a término.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: mezclar [[Fextn]] en kilonewtons con el resto en newtons sin conversión.\r
\r
Correcto: convertir primero y luego resolver el balance.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
#### Por que parece correcto\r
\r
Un resultado con muchos decimales transmite sensación de exactitud.\r
\r
#### Por que es incorrecto\r
\r
La precisión de salida está limitada por hipótesis, medición y ajuste de modelo, no por cantidad de dígitos impresos.\r
\r
#### Senal de deteccion\r
\r
Se reportan cuatro o cinco decimales sin análisis de incertidumbre ni tolerancias.\r
\r
#### Correccion conceptual\r
\r
Reportar cifras significativas coherentes con calidad de datos y objetivo de decisión.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: [[N]] = 33.94827 N como conclusión final absoluta.\r
\r
Correcto: [[N]] aproximadamente 34 N con margen operacional indicado.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
#### Por que parece correcto\r
\r
Al obtener un número, se asume que la tarea está terminada.\r
\r
#### Por que es incorrecto\r
\r
Sin interpretación causal no hay decisión confiable: no se sabe qué variable domina ni qué riesgo existe.\r
\r
#### Senal de deteccion\r
\r
La solución termina en sustitución numérica sin explicar implicaciones para contacto y validez.\r
\r
#### Correccion conceptual\r
\r
Cerrar siempre con lectura física: tendencia, margen de contacto y sensibilidad ante cambios de [[theta]], [[Fextn]] y [[aperp]].\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: "[[N]] = 30 N".\r
\r
Correcto: "[[N]] permanece positiva con margen; aumentar [[theta]] o forzar hacia fuera reduce contacto y puede acercar al desacople".\r
\r
## Regla de autocontrol rápido\r
\r
Antes de dar por finalizada una solución, confirmar:\r
\r
- ¿El balance perpendicular incluye todos los términos activos?\r
- ¿La ecuación elegida corresponde al escenario físico declarado?\r
- ¿Las unidades son consistentes en cada término?\r
- ¿Se verificó explícitamente la condición de contacto?\r
- ¿Hay interpretación causal y no solo resultado numérico?\r
\r
Si una respuesta es negativa, la solución aún no está lista para usarse como base de decisión.\r
`;export{e as default};
