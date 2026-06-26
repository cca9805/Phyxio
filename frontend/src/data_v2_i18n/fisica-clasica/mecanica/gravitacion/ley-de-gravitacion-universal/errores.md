# Errores frecuentes en ley de gravitacion universal

## Errores conceptuales

### Error 1: pensar que la ley es inversa lineal y no inversa cuadratica
Por que parece correcto: en muchos contextos introductorios se usan relaciones inversas simples y el estudiante extrapola esa intuicion.
Senal de deteccion: si [[r]] se duplica y el alumno espera que [[F]] se reduzca a la mitad, la estructura conceptual esta mal.
Mini-ejemplo de contraste: con [[m1]] y [[m2]] constantes, pasar de [[r1]] a [[r2]] igual a dos veces [[r1]] implica [[F2]] igual a un cuarto de [[F1]].
Correccion conceptual: verbalizar siempre la ley como dependencia con el cuadrado de la distancia antes de sustituir datos.

### Error 2: confundir masa y peso
Por que parece correcto: en lenguaje cotidiano se usan como sinonimos.
Senal de deteccion: respuestas donde [[m]] cambia al cambiar de planeta.
Mini-ejemplo de contraste: [[m]] permanece; lo que cambia es [[g]], y por tanto cambia [[P]].
Correccion conceptual: separar propiedad del cuerpo ([[m]]) y propiedad del campo ([[g]]).

## Errores de modelo

### Error 3: medir [[r]] desde la superficie en vez de entre centros
Por que parece correcto: visualmente parece mas facil usar distancia entre bordes.
Senal de deteccion: resultados de [[F]] excesivos en problemas astronomicos.
Mini-ejemplo de contraste: para dos astros grandes, la distancia relevante es centro a centro; usar superficie subestima [[r]] y sobreestima [[F]].
Correccion conceptual: declarar al inicio el criterio geometrico de distancia.

### Error 4: usar [[R]] como si siempre fuese igual a [[r]]
Por que parece correcto: muchos ejercicios escolares trabajan en superficie.
Senal de deteccion: mismo valor de [[g]] para superficie y para altura significativa.
Mini-ejemplo de contraste: al aumentar altitud, [[r]] crece y [[g]] disminuye; mantener [[r]] igual a [[R]] rompe esa tendencia.
Correccion conceptual: solo identificar [[r]] con [[R]] cuando la condicion superficial este explicitada.

### Error 5: aplicar formula de comparacion con [[F1]] y [[F2]] cuando cambian masas
Por que parece correcto: la formula de escalado parece universal.
Senal de deteccion: comparaciones donde [[m1]] o [[m2]] cambian pero se mantiene razon radial pura.
Mini-ejemplo de contraste: si cambia una masa, hay que volver a la ley general para no perder efecto lineal de masas.
Correccion conceptual: revisar siempre si los parametros no radiales se mantienen constantes.

## Errores matematicos

### Error 6: errores de potencia de diez en [[G]]
Por que parece correcto: el exponente negativo de [[G]] se copia mal bajo presion.
Senal de deteccion: fuerzas [[F]] absurdamente grandes o pequenas respecto del contexto.
Mini-ejemplo de contraste: cambiar un exponente puede desplazar el resultado por varios ordenes de magnitud.
Correccion conceptual: hacer chequeo de orden de magnitud antes de aceptar el numero final.

### Error 7: cancelar mal terminos al despejar [[r]]
Por que parece correcto: algebra simbolica apurada en evaluaciones.
Senal de deteccion: obtener [[r]] negativa o con unidades inconsistentes.
Mini-ejemplo de contraste: al despejar [[r]] en la ley principal aparece raiz cuadrada; olvidar esa raiz altera dimensiones.
Correccion conceptual: validar dimension final de [[r]] en metros antes de cerrar.

### Error 8: mezclar kg con g sin conversion
Por que parece correcto: datos de tablas o enunciados vienen en unidades mixtas.
Senal de deteccion: valores de [[F]], [[P]] o [[a]] fuera de escala razonable.
Mini-ejemplo de contraste: usar gramos como si fueran kilogramos multiplica error por mil.
Correccion conceptual: convertir todas las masas a SI en una tabla previa de datos.

## Errores de interpretacion

### Error 9: cerrar con numero sin explicar tendencia fisica
Por que parece correcto: se prioriza terminar la cuenta.
Senal de deteccion: respuesta final sin mencionar efecto de [[r]] sobre [[F]] o de [[M]] sobre [[g]].
Mini-ejemplo de contraste: dos resultados numericos cercanos pueden implicar escenarios fisicos muy distintos si cambia la geometria.
Correccion conceptual: agregar siempre una frase causal: que magnitud domina y por que.

### Error 10: ignorar direccion en lectura vectorial
Por que parece correcto: en muchos ejercicios se trabaja solo con modulos.
Senal de deteccion: respuestas de superposicion que suman solo numeros positivos sin considerar orientacion.
Mini-ejemplo de contraste: dos contribuciones de campo pueden reforzarse o cancelarse segun direccion.
Correccion conceptual: usar la forma vectorial cuando el problema involucra orientaciones distintas.

## Regla de autocontrol rapido

Primero, verifica que toda masa este en kg y toda distancia en m. Segundo, confirma que [[r]] sea centro a centro. Tercero, decide si el problema pide [[F]], [[g]], [[P]], [[a]] o comparacion [[F1]]-[[F2]]. Cuarto, comprueba si las masas se mantienen constantes antes de usar la relacion de escalado. Quinto, ejecuta un control de orden de magnitud: si [[r]] aumenta, la intensidad debe caer de forma inversa cuadratica.

Una rutina adicional muy efectiva es leer la solucion en tres capas. Capa algebraica: ecuacion y despeje correctos. Capa dimensional: unidades y potencias de diez consistentes. Capa fisica: interpretacion causal del resultado. Si alguna capa falla, la solucion no esta cerrada.

Como cierre de calidad, formula una pregunta de contraste: si duplico [[r]], el resultado respeta la caida esperada. Si la respuesta es no, revisa desde el planteamiento. Esta regla de autocontrol reduce errores sistematicos y mejora rendimiento en problemas nuevos.