const e=`# Errores frecuentes: Rozamiento dinamico\r
\r
## Errores conceptuales\r
\r
### Error 1: Tratar [[fk]] como fuerza en cualquier régimen\r
\r
#### Por que parece correcto\r
\r
Se memoriza una fórmula y se aplica sin distinguir si hay deslizamiento real.\r
\r
#### Por que es incorrecto\r
\r
[[fk]] es una magnitud de régimen cinético. Si no hay [[v_rel]] distinta de cero, no corresponde usar esta descripción.\r
\r
#### Senal de deteccion\r
\r
El alumno usa [[fk]] en un problema donde el enunciado dice explícitamente “sin deslizamiento”.\r
\r
#### Correccion conceptual\r
\r
Primero identifica régimen. Solo cuando existe deslizamiento relativo se aplica el modelo dinámico del leaf.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: se calcula [[fk]] para un bloque pegado a la superficie. Correcto: si no hay deslizamiento, se cambia a análisis estático y no se usa [[fk]].\r
\r
### Error 2: Confundir [[mu_k]] con una propiedad universal\r
\r
#### Por que parece correcto\r
\r
Se piensa que el coeficiente es fijo para “el material” sin importar condición de contacto.\r
\r
#### Por que es incorrecto\r
\r
[[mu_k]] depende del par de superficies y de condiciones operativas como estado superficial y temperatura.\r
\r
#### Senal de deteccion\r
\r
Se reutiliza el mismo valor de [[mu_k]] en contextos distintos sin validación experimental.\r
\r
#### Correccion conceptual\r
\r
Declara dominio de validez y usa coeficientes medidos o compatibles con ese dominio.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: usar el [[mu_k]] de acero-seco para acero-aceitado. Correcto: recalibrar el coeficiente para la nueva condición.\r
\r
### Error 3: Ignorar el rol vectorial de [[v_rel]]\r
\r
#### Por que parece correcto\r
\r
En ejercicios introductorios se enfatiza solo la magnitud de la fuerza.\r
\r
#### Por que es incorrecto\r
\r
Sin dirección de [[v_rel]], no puedes asignar correctamente el sentido de [[fk]].\r
\r
#### Senal de deteccion\r
\r
El resultado numérico de fuerza parece razonable, pero el diagrama de fuerzas contradice el sentido del movimiento relativo.\r
\r
#### Correccion conceptual\r
\r
Define siempre el eje tangencial y el sentido de [[v_rel]] antes de cerrar signo y orientación de [[fk]].\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: [[fk]] apuntando en el mismo sentido que [[v_rel]]. Correcto: [[fk]] opuesta al deslizamiento relativo.\r
\r
## Errores de modelo\r
\r
### Error 4: Suponer [[mu_k]] constante fuera de rango\r
\r
#### Por que parece correcto\r
\r
El modelo escolar usa coeficiente constante y da resultados rápidos.\r
\r
#### Por que es incorrecto\r
\r
A altas velocidades o con calentamiento de interfaz, el coeficiente efectivo puede variar.\r
\r
#### Senal de deteccion\r
\r
La predicción de desaceleración se separa de la medición más de lo aceptable y el error crece con el tiempo.\r
\r
#### Correccion conceptual\r
\r
Delimita el rango de velocidad y temperatura donde mantienes [[mu_k]] aproximadamente constante.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: extrapolar el mismo coeficiente desde ensayo lento hasta una prueba de alta velocidad. Correcto: usar un modelo por tramos o recalibrar.\r
\r
### Error 5: No declarar cuándo cambiar de modelo\r
\r
#### Por que parece correcto\r
\r
Parece suficiente enunciar “usar modelo extendido cuando falle el ideal”.\r
\r
#### Por que es incorrecto\r
\r
Sin umbral operativo, la transición queda ambigua y el análisis no es reproducible.\r
\r
#### Senal de deteccion\r
\r
Dos personas con los mismos datos eligen modelos distintos sin criterio explícito.\r
\r
#### Correccion conceptual\r
\r
Especifica condiciones de cambio: por ejemplo, error relativo sostenido por encima de un umbral o variación térmica fuera de banda.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: “si parece raro, cambiar modelo”. Correcto: “si el error supera 10% en tres corridas consecutivas, activar modelo extendido”.\r
\r
## Errores matemáticos\r
\r
### Error 6: Pérdida de signo en la proyección tangencial\r
\r
#### Por que parece correcto\r
\r
Se opera con magnitudes absolutas para simplificar cuentas.\r
\r
#### Por que es incorrecto\r
\r
El signo contiene información física de dirección; perderlo altera la fuerza neta calculada.\r
\r
#### Senal de deteccion\r
\r
El cálculo predice aceleración en el mismo sentido del deslizamiento cuando debería frenarse.\r
\r
#### Correccion conceptual\r
\r
Mantén convención de ejes desde el inicio y separa claramente magnitud de orientación.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: sumar [[fk]] al término impulsor sin revisar signo. Correcto: proyectar todas las fuerzas en el mismo eje con criterio de dirección consistente.\r
\r
### Error 7: Mezclar unidades de fuerza y masa\r
\r
#### Por que parece correcto\r
\r
En enunciados prácticos suele darse masa y se asume que ya es fuerza.\r
\r
#### Por que es incorrecto\r
\r
[[N]] es fuerza. Si partes de masa, primero debes transformarla según el contexto dinámico.\r
\r
#### Senal de deteccion\r
\r
Aparecen resultados de [[fk]] reportados en unidades no coherentes con newton.\r
\r
#### Correccion conceptual\r
\r
Realiza control dimensional al final de cada paso y verifica que [[fk]] quede en newton.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: multiplicar [[mu_k]] por “12 kg”. Correcto: obtener primero la normal correspondiente y luego calcular [[fk]].\r
\r
## Errores de interpretación\r
\r
### Error 8: Concluir que mayor [[mu_k]] siempre mejora el sistema\r
\r
#### Por que parece correcto\r
\r
Más fricción parece sinónimo de más control.\r
\r
#### Por que es incorrecto\r
\r
En operación continua, mayor [[mu_k]] puede aumentar desgaste y pérdidas energéticas.\r
\r
#### Senal de deteccion\r
\r
La propuesta técnica mejora frenado puntual pero empeora rendimiento térmico y consumo.\r
\r
#### Correccion conceptual\r
\r
Interpreta resultados con objetivos múltiples: seguridad, eficiencia y vida útil.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: elegir siempre el recubrimiento con mayor coeficiente. Correcto: elegir banda de coeficiente compatible con el ciclo de trabajo.\r
\r
### Error 9: Terminar en el número sin lectura causal\r
\r
#### Por que parece correcto\r
\r
Se asume que obtener una cifra final equivale a resolver el problema.\r
\r
#### Por que es incorrecto\r
\r
Sin interpretación causal no se decide régimen, riesgo ni acción de ingeniería.\r
\r
#### Senal de deteccion\r
\r
La solución no responde qué pasará con la velocidad, la disipación o el control.\r
\r
#### Correccion conceptual\r
\r
Cierra con una frase de estado físico: qué variable domina y qué decisión operativa se desprende.\r
\r
#### Mini-ejemplo\r
\r
Incorrecto: “[[fk]] vale X”. Correcto: “con ese [[fk]], la desaceleración aumenta y la línea requiere ajuste de velocidad de entrada”.\r
\r
## Regla de autocontrol rápido\r
\r
- ¿Estoy realmente en régimen dinámico antes de usar [[fk]]?\r
- ¿La dirección de [[fk]] es opuesta a [[v_rel]]?\r
- ¿[[mu_k]] pertenece al dominio de operación analizado?\r
- ¿El resultado mantiene coherencia dimensional?\r
- ¿La conclusión incluye decisión física y no solo cálculo?\r
\r
Si falla alguno de estos puntos, conviene rehacer la cadena de razonamiento.\r
`;export{e as default};
