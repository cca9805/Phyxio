const e=`# Errores frecuentes: Sistemas con muelles\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir causa con efecto\r
\r
#### por que parece correcto\r
Como la ecuacion final se ve simple, parece que basta reemplazar numeros y listo.\r
\r
#### por que es incorrecto\r
En este leaf primero se define topologia y de ahi surge [[keq]]; no al reves. Tratar [[keq]] como dato aislado rompe la causalidad del modelo.\r
\r
#### senal de deteccion\r
La solucion calcula [[Fel]] sin declarar si el sistema es serie o paralelo.\r
\r
#### correccion conceptual\r
Escribir primero arquitectura, despues equivalente, despues respuesta global.\r
\r
#### mini-ejemplo\r
Mal: "uso [[keq]] = 500 N/m porque suena razonable".\r
Bien: "calculo [[keq]] con [[k1]] y [[k2]] segun topologia, luego obtengo [[Fel]]".\r
\r
### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto\r
\r
#### por que parece correcto\r
Las cuentas cierran y el resultado tiene unidades correctas.\r
\r
#### por que es incorrecto\r
Puede existir historesis, no linealidad o friccion dominante, y entonces el resultado deja de representar el sistema real.\r
\r
#### senal de deteccion\r
El error entre medicion y prediccion crece sistematicamente con la carga.\r
\r
#### correccion conceptual\r
Declarar dominio lineal y umbral de validez antes de concluir.\r
\r
#### mini-ejemplo\r
Mal: mantener modelo ideal con desvio repetido del 20%.\r
Bien: declarar fin de validez y escalar a modelo alternativo.\r
\r
### Error 3: Confundir magnitudes similares\r
\r
#### por que parece correcto\r
[[Fel]] y [[Fm]] suelen tener numeros cercanos.\r
\r
#### por que es incorrecto\r
[[Fel]] incluye signo direccional y [[Fm]] es magnitud positiva. Intercambiarlas destruye la interpretacion fisica.\r
\r
#### senal de deteccion\r
Se escribe [[Fm]] negativa o se usa [[Fm]] para justificar sentido de restauracion.\r
\r
#### correccion conceptual\r
Separar siempre "fuerza signada" y "fuerza en modulo".\r
\r
#### mini-ejemplo\r
Mal: "[[Fm]] = -18 N".\r
Bien: "[[Fel]] = -18 N y [[Fm]] = 18 N".\r
\r
\r
\r
## Errores de modelo\r
\r
### Error 4: No reconocer cuándo el modelo simplificado falla\r
\r
#### por que parece correcto\r
El modelo ideal suele pasar en ejercicios introductorios.\r
\r
#### por que es incorrecto\r
En montaje real, holguras, friccion y fatiga cambian reparto y respuesta.\r
\r
#### senal de deteccion\r
[[x]] no coincide con [[x1]] + [[x2]] dentro de tolerancia en serie, o [[Fm]] no cierra con [[F1]] + [[F2]] en paralelo.\r
\r
#### correccion conceptual\r
Usar cierre interno como test obligatorio de calidad de modelo.\r
\r
#### mini-ejemplo\r
Mal: ignorar cierre de reparto por "error experimental" sin analizar.\r
Bien: usar fallo de cierre para activar revision del modelo.\r
\r
### Error 5: Ignorar los límites del modelo conocidos\r
\r
#### por que parece correcto\r
La ecuacion de equivalente parece universal.\r
\r
#### por que es incorrecto\r
Fuera del tramo lineal, [[k1]] y [[k2]] dejan de ser constantes efectivas.\r
\r
#### senal de deteccion\r
Cambiar amplitud cambia significativamente la pendiente aparente.\r
\r
#### correccion conceptual\r
Reportar siempre resultado + limite de validez.\r
\r
#### mini-ejemplo\r
Mal: "[[keq]] unica para todo el recorrido".\r
Bien: "[[keq]] valida en intervalo operativo especificado".\r
\r
## Errores matemáticos\r
\r
### Error 6: Despejes algebraicos descuidados\r
\r
#### por que parece correcto\r
Se asume que despejar es mecanico y sin riesgo.\r
\r
#### por que es incorrecto\r
Un error de signo o de parentesis cambia por completo la conclusion de diseño.\r
\r
#### senal de deteccion\r
[[keq]] negativa o mayor en serie que en paralelo para los mismos valores.\r
\r
#### correccion conceptual\r
Aplicar chequeos de monotonia: en serie debe reducirse, en paralelo debe aumentar.\r
\r
#### mini-ejemplo\r
Mal: usar suma directa en serie.\r
Bien: usar expresion correcta de serie y verificar orden relativo.\r
\r
### Error 7: Olvidar constantes fundamentales o unidades\r
\r
#### por que parece correcto\r
El numero final parece plausible a simple vista.\r
\r
#### por que es incorrecto\r
Confundir N/mm con N/m altera rigideces por factor mil.\r
\r
#### senal de deteccion\r
[[x_eq]] absurda para una masa moderada.\r
\r
#### correccion conceptual\r
Normalizar SI antes de cualquier sustitucion.\r
\r
#### mini-ejemplo\r
Mal: [[k1]] en N/mm y [[k2]] en N/m sin conversion.\r
Bien: convertir ambas a la misma unidad de rigidez.\r
\r
## Errores de interpretación\r
\r
### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite\r
\r
#### por que parece correcto\r
Muchos decimales dan sensacion de rigor.\r
\r
#### por que es incorrecto\r
La precision numerica no reemplaza incertidumbre de modelo.\r
\r
#### senal de deteccion\r
Se reportan seis decimales sin tolerancia ni dominio.\r
\r
#### correccion conceptual\r
Usar cifras significativas consistentes con datos y modelo.\r
\r
#### mini-ejemplo\r
Mal: [[keq]] = 423.128947 N/m sin contexto.\r
Bien: [[keq]] = 423 N/m en rango lineal declarado.\r
\r
### Error 9: Saltarte la interpretación física del resultado calculado\r
\r
#### por que parece correcto\r
Cerrar con una cifra parece suficiente.\r
\r
#### por que es incorrecto\r
Sin lectura fisica no hay criterio para elegir arquitectura ni validar seguridad.\r
\r
#### senal de deteccion\r
La resolucion termina en calculo sin decision tecnica.\r
\r
#### correccion conceptual\r
Cerrar con accion concreta: que cambiar y por que mejora respuesta.\r
\r
#### mini-ejemplo\r
Mal: "resultado final obtenido".\r
Bien: "conviene paralelo para limitar [[x]] y mantener margen de recorrido".\r
\r
## Regla de autocontrol rápido\r
\r
- ¿Declare topologia antes de calcular [[keq]]?\r
- ¿Diferencie [[Fel]] de [[Fm]]?\r
- ¿Verifique cierre interno de reparto ([[x1]] + [[x2]] o [[F1]] + [[F2]])?\r
- ¿Comprobe unidades de rigidez y fuerza?\r
- ¿Cerre con una decision fisica accionable?\r
\r
Si alguna respuesta es no, la solucion aun no esta lista para uso operativo.\r
`;export{e as default};
