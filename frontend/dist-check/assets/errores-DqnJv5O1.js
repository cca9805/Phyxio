const e=`# Errores frecuentes en ley de gravitacion universal\r
\r
## Errores conceptuales\r
\r
### Error 1: pensar que la ley es inversa lineal y no inversa cuadratica\r
Por que parece correcto: en muchos contextos introductorios se usan relaciones inversas simples y el estudiante extrapola esa intuicion.\r
Senal de deteccion: si [[r]] se duplica y el alumno espera que [[F]] se reduzca a la mitad, la estructura conceptual esta mal.\r
Mini-ejemplo de contraste: con [[m1]] y [[m2]] constantes, pasar de [[r1]] a [[r2]] igual a dos veces [[r1]] implica [[F2]] igual a un cuarto de [[F1]].\r
Correccion conceptual: verbalizar siempre la ley como dependencia con el cuadrado de la distancia antes de sustituir datos.\r
\r
### Error 2: confundir masa y peso\r
Por que parece correcto: en lenguaje cotidiano se usan como sinonimos.\r
Senal de deteccion: respuestas donde [[m]] cambia al cambiar de planeta.\r
Mini-ejemplo de contraste: [[m]] permanece; lo que cambia es [[g]], y por tanto cambia [[P]].\r
Correccion conceptual: separar propiedad del cuerpo ([[m]]) y propiedad del campo ([[g]]).\r
\r
## Errores de modelo\r
\r
### Error 3: medir [[r]] desde la superficie en vez de entre centros\r
Por que parece correcto: visualmente parece mas facil usar distancia entre bordes.\r
Senal de deteccion: resultados de [[F]] excesivos en problemas astronomicos.\r
Mini-ejemplo de contraste: para dos astros grandes, la distancia relevante es centro a centro; usar superficie subestima [[r]] y sobreestima [[F]].\r
Correccion conceptual: declarar al inicio el criterio geometrico de distancia.\r
\r
### Error 4: usar [[R]] como si siempre fuese igual a [[r]]\r
Por que parece correcto: muchos ejercicios escolares trabajan en superficie.\r
Senal de deteccion: mismo valor de [[g]] para superficie y para altura significativa.\r
Mini-ejemplo de contraste: al aumentar altitud, [[r]] crece y [[g]] disminuye; mantener [[r]] igual a [[R]] rompe esa tendencia.\r
Correccion conceptual: solo identificar [[r]] con [[R]] cuando la condicion superficial este explicitada.\r
\r
### Error 5: aplicar formula de comparacion con [[F1]] y [[F2]] cuando cambian masas\r
Por que parece correcto: la formula de escalado parece universal.\r
Senal de deteccion: comparaciones donde [[m1]] o [[m2]] cambian pero se mantiene razon radial pura.\r
Mini-ejemplo de contraste: si cambia una masa, hay que volver a la ley general para no perder efecto lineal de masas.\r
Correccion conceptual: revisar siempre si los parametros no radiales se mantienen constantes.\r
\r
## Errores matematicos\r
\r
### Error 6: errores de potencia de diez en [[G]]\r
Por que parece correcto: el exponente negativo de [[G]] se copia mal bajo presion.\r
Senal de deteccion: fuerzas [[F]] absurdamente grandes o pequenas respecto del contexto.\r
Mini-ejemplo de contraste: cambiar un exponente puede desplazar el resultado por varios ordenes de magnitud.\r
Correccion conceptual: hacer chequeo de orden de magnitud antes de aceptar el numero final.\r
\r
### Error 7: cancelar mal terminos al despejar [[r]]\r
Por que parece correcto: algebra simbolica apurada en evaluaciones.\r
Senal de deteccion: obtener [[r]] negativa o con unidades inconsistentes.\r
Mini-ejemplo de contraste: al despejar [[r]] en la ley principal aparece raiz cuadrada; olvidar esa raiz altera dimensiones.\r
Correccion conceptual: validar dimension final de [[r]] en metros antes de cerrar.\r
\r
### Error 8: mezclar kg con g sin conversion\r
Por que parece correcto: datos de tablas o enunciados vienen en unidades mixtas.\r
Senal de deteccion: valores de [[F]], [[P]] o [[a]] fuera de escala razonable.\r
Mini-ejemplo de contraste: usar gramos como si fueran kilogramos multiplica error por mil.\r
Correccion conceptual: convertir todas las masas a SI en una tabla previa de datos.\r
\r
## Errores de interpretacion\r
\r
### Error 9: cerrar con numero sin explicar tendencia fisica\r
Por que parece correcto: se prioriza terminar la cuenta.\r
Senal de deteccion: respuesta final sin mencionar efecto de [[r]] sobre [[F]] o de [[M]] sobre [[g]].\r
Mini-ejemplo de contraste: dos resultados numericos cercanos pueden implicar escenarios fisicos muy distintos si cambia la geometria.\r
Correccion conceptual: agregar siempre una frase causal: que magnitud domina y por que.\r
\r
### Error 10: ignorar direccion en lectura vectorial\r
Por que parece correcto: en muchos ejercicios se trabaja solo con modulos.\r
Senal de deteccion: respuestas de superposicion que suman solo numeros positivos sin considerar orientacion.\r
Mini-ejemplo de contraste: dos contribuciones de campo pueden reforzarse o cancelarse segun direccion.\r
Correccion conceptual: usar la forma vectorial cuando el problema involucra orientaciones distintas.\r
\r
## Regla de autocontrol rapido\r
\r
Primero, verifica que toda masa este en kg y toda distancia en m. Segundo, confirma que [[r]] sea centro a centro. Tercero, decide si el problema pide [[F]], [[g]], [[P]], [[a]] o comparacion [[F1]]-[[F2]]. Cuarto, comprueba si las masas se mantienen constantes antes de usar la relacion de escalado. Quinto, ejecuta un control de orden de magnitud: si [[r]] aumenta, la intensidad debe caer de forma inversa cuadratica.\r
\r
Una rutina adicional muy efectiva es leer la solucion en tres capas. Capa algebraica: ecuacion y despeje correctos. Capa dimensional: unidades y potencias de diez consistentes. Capa fisica: interpretacion causal del resultado. Si alguna capa falla, la solucion no esta cerrada.\r
\r
Como cierre de calidad, formula una pregunta de contraste: si duplico [[r]], el resultado respeta la caida esperada. Si la respuesta es no, revisa desde el planteamiento. Esta regla de autocontrol reduce errores sistematicos y mejora rendimiento en problemas nuevos.`;export{e as default};
