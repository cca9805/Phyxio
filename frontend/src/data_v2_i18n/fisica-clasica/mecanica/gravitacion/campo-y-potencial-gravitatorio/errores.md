# Errores comunes en campo y potencial gravitatorio

## Errores conceptuales

### Error 1: Confundir [[g]] con [[V]]
Por que parece correcto: ambas magnitudes dependen de la distancia radial [[r]] y se estudian en el mismo bloque.
Por que es incorrecto: [[g]] describe aceleracion local y [[V]] describe energia por unidad de masa. Mezclarlas cambia la pregunta fisica.
Senal de deteccion: se intenta resolver un balance energetico usando solo lectura local de campo.
Correccion conceptual: definir primero si se busca dinamica local o cambio entre estados energeticos.
Mini-ejemplo de contraste: en un alejamiento radial, [[g]] disminuye y [[V]] se vuelve menos negativo.

### Error 2: Intercambiar masa fuente y masa de prueba
Por que parece correcto: [[M]] y [[m]] tienen la misma unidad y aparecen en ecuaciones cercanas.
Por que es incorrecto: [[M]] genera el campo; [[m]] solo escala energia y trabajo del cuerpo de prueba.
Senal de deteccion: el alumno concluye que cambiar [[m]] altera [[g]] en el mismo punto.
Correccion conceptual: separar variables de generacion y variables de respuesta antes de sustituir.
Mini-ejemplo de contraste: duplicar [[m]] no cambia [[V]], pero si cambia [[U]] y [[Wg]].

## Errores de modelo

### Error 3: Usar aproximacion local cuando el salto radial es grande
Por que parece correcto: reduce pasos y suele funcionar en ejercicios simples.
Por que es incorrecto: si la diferencia entre [[ri]] y [[rf]] es alta, la variacion de [[g]] deja de ser despreciable.
Senal de deteccion: aparece incompatibilidad entre lectura de [[gi]] y [[gf]] y el modelo usado.
Correccion conceptual: cuando la variacion relativa radial supera umbral practico, pasar a dependencia radial completa.
Mini-ejemplo de contraste: un traslado orbital amplio exige usar [[DeltaU]] con radios inicial y final explicitos.

### Error 4: Omitir la referencia de potencial
Por que parece correcto: se piensa que el signo de [[V]] es automatico.
Por que es incorrecto: [[V]] absoluto depende de referencia energetica; sin referencia, las comparaciones pueden ser falsas.
Senal de deteccion: resultados con signos opuestos entre ejercicios similares sin explicacion fisica.
Correccion conceptual: declarar referencia antes de calcular y mantenerla fija.
Mini-ejemplo de contraste: con referencia en infinito, estados ligados deben reportar [[V]] negativo.

## Errores matemáticos

### Error 5: Invertir [[ri]] y [[rf]]
Por que parece correcto: parece un detalle de escritura menor.
Por que es incorrecto: el orden de estados determina signo de [[DeltaU]] y condiciona el signo de [[Wg]].
Senal de deteccion: conclusion fisica no coincide con direccion real del movimiento.
Correccion conceptual: escribir primero estado inicial y final en una linea temporal.
Mini-ejemplo de contraste: para alejamiento radial, reportar descenso de energia potencial suele indicar inversion de datos.

### Error 6: Mezclar unidades sin convertir a SI
Por que parece correcto: los numeros parecen plausibles al ojo.
Por que es incorrecto: usar km con m o toneladas con kg rompe escala y produce errores de orden de magnitud.
Senal de deteccion: resultados extremos sin justificacion fisica compatible.
Correccion conceptual: convertir todas las magnitudes a SI antes de sustituir.
Mini-ejemplo de contraste: mantener [[r]] en km con [[G]] en SI produce sesgos muy grandes.

## Errores de interpretación

### Error 7: Cerrar con numero sin lectura causal
Por que parece correcto: en examen rapido parece suficiente dar resultado final.
Por que es incorrecto: sin lectura causal no se detectan fallos de signo, escala y validez.
Senal de deteccion: no aparece explicacion sobre que implica fisicamente el valor obtenido.
Correccion conceptual: siempre agregar interpretacion con direccion radial y efecto energetico.
Mini-ejemplo de contraste: decir solo que [[DeltaU]] es positiva sin explicar por que ocurre deja el ejercicio incompleto.

### Error 8: No cruzar dinamica y energia
Por que parece correcto: cada via de solucion parece autosuficiente.
Por que es incorrecto: campo y potencial deben contar una historia compatible del mismo proceso.
Senal de deteccion: el resultado dinamico apunta a una tendencia y el energetico a la contraria.
Correccion conceptual: contrastar coherencia entre [[g]], [[V]], [[DeltaU]] y [[Wg]].
Mini-ejemplo de contraste: si [[gi]] cae al aumentar radio, la lectura energetica debe ser coherente con esa evolucion.

## Regla de autocontrol rápido
Antes de cerrar, revisar cinco preguntas.
1. Quedo clara la diferencia funcional entre [[g]] y [[V]].
2. Se mantuvo la misma referencia para [[ri]] y [[rf]].
3. Todas las unidades estan en SI.
4. El signo de [[DeltaU]] coincide con el sentido del desplazamiento radial.
5. La conclusion final explica causa fisica y no solo numero.

Si una sola respuesta falla, conviene rehacer el planteamiento antes de entregar.
