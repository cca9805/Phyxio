# Errores frecuentes: Rozamiento dinamico

## Errores conceptuales

### Error 1: Tratar [[fk]] como fuerza en cualquier régimen

#### Por que parece correcto

Se memoriza una fórmula y se aplica sin distinguir si hay deslizamiento real.

#### Por que es incorrecto

[[fk]] es una magnitud de régimen cinético. Si no hay [[v_rel]] distinta de cero, no corresponde usar esta descripción.

#### Senal de deteccion

El alumno usa [[fk]] en un problema donde el enunciado dice explícitamente “sin deslizamiento”.

#### Correccion conceptual

Primero identifica régimen. Solo cuando existe deslizamiento relativo se aplica el modelo dinámico del leaf.

#### Mini-ejemplo

Incorrecto: se calcula [[fk]] para un bloque pegado a la superficie. Correcto: si no hay deslizamiento, se cambia a análisis estático y no se usa [[fk]].

### Error 2: Confundir [[mu_k]] con una propiedad universal

#### Por que parece correcto

Se piensa que el coeficiente es fijo para “el material” sin importar condición de contacto.

#### Por que es incorrecto

[[mu_k]] depende del par de superficies y de condiciones operativas como estado superficial y temperatura.

#### Senal de deteccion

Se reutiliza el mismo valor de [[mu_k]] en contextos distintos sin validación experimental.

#### Correccion conceptual

Declara dominio de validez y usa coeficientes medidos o compatibles con ese dominio.

#### Mini-ejemplo

Incorrecto: usar el [[mu_k]] de acero-seco para acero-aceitado. Correcto: recalibrar el coeficiente para la nueva condición.

### Error 3: Ignorar el rol vectorial de [[v_rel]]

#### Por que parece correcto

En ejercicios introductorios se enfatiza solo la magnitud de la fuerza.

#### Por que es incorrecto

Sin dirección de [[v_rel]], no puedes asignar correctamente el sentido de [[fk]].

#### Senal de deteccion

El resultado numérico de fuerza parece razonable, pero el diagrama de fuerzas contradice el sentido del movimiento relativo.

#### Correccion conceptual

Define siempre el eje tangencial y el sentido de [[v_rel]] antes de cerrar signo y orientación de [[fk]].

#### Mini-ejemplo

Incorrecto: [[fk]] apuntando en el mismo sentido que [[v_rel]]. Correcto: [[fk]] opuesta al deslizamiento relativo.

## Errores de modelo

### Error 4: Suponer [[mu_k]] constante fuera de rango

#### Por que parece correcto

El modelo escolar usa coeficiente constante y da resultados rápidos.

#### Por que es incorrecto

A altas velocidades o con calentamiento de interfaz, el coeficiente efectivo puede variar.

#### Senal de deteccion

La predicción de desaceleración se separa de la medición más de lo aceptable y el error crece con el tiempo.

#### Correccion conceptual

Delimita el rango de velocidad y temperatura donde mantienes [[mu_k]] aproximadamente constante.

#### Mini-ejemplo

Incorrecto: extrapolar el mismo coeficiente desde ensayo lento hasta una prueba de alta velocidad. Correcto: usar un modelo por tramos o recalibrar.

### Error 5: No declarar cuándo cambiar de modelo

#### Por que parece correcto

Parece suficiente enunciar “usar modelo extendido cuando falle el ideal”.

#### Por que es incorrecto

Sin umbral operativo, la transición queda ambigua y el análisis no es reproducible.

#### Senal de deteccion

Dos personas con los mismos datos eligen modelos distintos sin criterio explícito.

#### Correccion conceptual

Especifica condiciones de cambio: por ejemplo, error relativo sostenido por encima de un umbral o variación térmica fuera de banda.

#### Mini-ejemplo

Incorrecto: “si parece raro, cambiar modelo”. Correcto: “si el error supera 10% en tres corridas consecutivas, activar modelo extendido”.

## Errores matemáticos

### Error 6: Pérdida de signo en la proyección tangencial

#### Por que parece correcto

Se opera con magnitudes absolutas para simplificar cuentas.

#### Por que es incorrecto

El signo contiene información física de dirección; perderlo altera la fuerza neta calculada.

#### Senal de deteccion

El cálculo predice aceleración en el mismo sentido del deslizamiento cuando debería frenarse.

#### Correccion conceptual

Mantén convención de ejes desde el inicio y separa claramente magnitud de orientación.

#### Mini-ejemplo

Incorrecto: sumar [[fk]] al término impulsor sin revisar signo. Correcto: proyectar todas las fuerzas en el mismo eje con criterio de dirección consistente.

### Error 7: Mezclar unidades de fuerza y masa

#### Por que parece correcto

En enunciados prácticos suele darse masa y se asume que ya es fuerza.

#### Por que es incorrecto

[[N]] es fuerza. Si partes de masa, primero debes transformarla según el contexto dinámico.

#### Senal de deteccion

Aparecen resultados de [[fk]] reportados en unidades no coherentes con newton.

#### Correccion conceptual

Realiza control dimensional al final de cada paso y verifica que [[fk]] quede en newton.

#### Mini-ejemplo

Incorrecto: multiplicar [[mu_k]] por “12 kg”. Correcto: obtener primero la normal correspondiente y luego calcular [[fk]].

## Errores de interpretación

### Error 8: Concluir que mayor [[mu_k]] siempre mejora el sistema

#### Por que parece correcto

Más fricción parece sinónimo de más control.

#### Por que es incorrecto

En operación continua, mayor [[mu_k]] puede aumentar desgaste y pérdidas energéticas.

#### Senal de deteccion

La propuesta técnica mejora frenado puntual pero empeora rendimiento térmico y consumo.

#### Correccion conceptual

Interpreta resultados con objetivos múltiples: seguridad, eficiencia y vida útil.

#### Mini-ejemplo

Incorrecto: elegir siempre el recubrimiento con mayor coeficiente. Correcto: elegir banda de coeficiente compatible con el ciclo de trabajo.

### Error 9: Terminar en el número sin lectura causal

#### Por que parece correcto

Se asume que obtener una cifra final equivale a resolver el problema.

#### Por que es incorrecto

Sin interpretación causal no se decide régimen, riesgo ni acción de ingeniería.

#### Senal de deteccion

La solución no responde qué pasará con la velocidad, la disipación o el control.

#### Correccion conceptual

Cierra con una frase de estado físico: qué variable domina y qué decisión operativa se desprende.

#### Mini-ejemplo

Incorrecto: “[[fk]] vale X”. Correcto: “con ese [[fk]], la desaceleración aumenta y la línea requiere ajuste de velocidad de entrada”.

## Regla de autocontrol rápido

- ¿Estoy realmente en régimen dinámico antes de usar [[fk]]?
- ¿La dirección de [[fk]] es opuesta a [[v_rel]]?
- ¿[[mu_k]] pertenece al dominio de operación analizado?
- ¿El resultado mantiene coherencia dimensional?
- ¿La conclusión incluye decisión física y no solo cálculo?

Si falla alguno de estos puntos, conviene rehacer la cadena de razonamiento.
