# Errores frecuentes: Sistemas con muelles

## Errores conceptuales

### Error 1: Confundir causa con efecto

#### por que parece correcto
Como la ecuacion final se ve simple, parece que basta reemplazar numeros y listo.

#### por que es incorrecto
En este leaf primero se define topologia y de ahi surge [[keq]]; no al reves. Tratar [[keq]] como dato aislado rompe la causalidad del modelo.

#### senal de deteccion
La solucion calcula [[Fel]] sin declarar si el sistema es serie o paralelo.

#### correccion conceptual
Escribir primero arquitectura, despues equivalente, despues respuesta global.

#### mini-ejemplo
Mal: "uso [[keq]] = 500 N/m porque suena razonable".
Bien: "calculo [[keq]] con [[k1]] y [[k2]] segun topologia, luego obtengo [[Fel]]".

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

#### por que parece correcto
Las cuentas cierran y el resultado tiene unidades correctas.

#### por que es incorrecto
Puede existir historesis, no linealidad o friccion dominante, y entonces el resultado deja de representar el sistema real.

#### senal de deteccion
El error entre medicion y prediccion crece sistematicamente con la carga.

#### correccion conceptual
Declarar dominio lineal y umbral de validez antes de concluir.

#### mini-ejemplo
Mal: mantener modelo ideal con desvio repetido del 20%.
Bien: declarar fin de validez y escalar a modelo alternativo.

### Error 3: Confundir magnitudes similares

#### por que parece correcto
[[Fel]] y [[Fm]] suelen tener numeros cercanos.

#### por que es incorrecto
[[Fel]] incluye signo direccional y [[Fm]] es magnitud positiva. Intercambiarlas destruye la interpretacion fisica.

#### senal de deteccion
Se escribe [[Fm]] negativa o se usa [[Fm]] para justificar sentido de restauracion.

#### correccion conceptual
Separar siempre "fuerza signada" y "fuerza en modulo".

#### mini-ejemplo
Mal: "[[Fm]] = -18 N".
Bien: "[[Fel]] = -18 N y [[Fm]] = 18 N".



## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

#### por que parece correcto
El modelo ideal suele pasar en ejercicios introductorios.

#### por que es incorrecto
En montaje real, holguras, friccion y fatiga cambian reparto y respuesta.

#### senal de deteccion
[[x]] no coincide con [[x1]] + [[x2]] dentro de tolerancia en serie, o [[Fm]] no cierra con [[F1]] + [[F2]] en paralelo.

#### correccion conceptual
Usar cierre interno como test obligatorio de calidad de modelo.

#### mini-ejemplo
Mal: ignorar cierre de reparto por "error experimental" sin analizar.
Bien: usar fallo de cierre para activar revision del modelo.

### Error 5: Ignorar los límites del modelo conocidos

#### por que parece correcto
La ecuacion de equivalente parece universal.

#### por que es incorrecto
Fuera del tramo lineal, [[k1]] y [[k2]] dejan de ser constantes efectivas.

#### senal de deteccion
Cambiar amplitud cambia significativamente la pendiente aparente.

#### correccion conceptual
Reportar siempre resultado + limite de validez.

#### mini-ejemplo
Mal: "[[keq]] unica para todo el recorrido".
Bien: "[[keq]] valida en intervalo operativo especificado".

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

#### por que parece correcto
Se asume que despejar es mecanico y sin riesgo.

#### por que es incorrecto
Un error de signo o de parentesis cambia por completo la conclusion de diseño.

#### senal de deteccion
[[keq]] negativa o mayor en serie que en paralelo para los mismos valores.

#### correccion conceptual
Aplicar chequeos de monotonia: en serie debe reducirse, en paralelo debe aumentar.

#### mini-ejemplo
Mal: usar suma directa en serie.
Bien: usar expresion correcta de serie y verificar orden relativo.

### Error 7: Olvidar constantes fundamentales o unidades

#### por que parece correcto
El numero final parece plausible a simple vista.

#### por que es incorrecto
Confundir N/mm con N/m altera rigideces por factor mil.

#### senal de deteccion
[[x_eq]] absurda para una masa moderada.

#### correccion conceptual
Normalizar SI antes de cualquier sustitucion.

#### mini-ejemplo
Mal: [[k1]] en N/mm y [[k2]] en N/m sin conversion.
Bien: convertir ambas a la misma unidad de rigidez.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

#### por que parece correcto
Muchos decimales dan sensacion de rigor.

#### por que es incorrecto
La precision numerica no reemplaza incertidumbre de modelo.

#### senal de deteccion
Se reportan seis decimales sin tolerancia ni dominio.

#### correccion conceptual
Usar cifras significativas consistentes con datos y modelo.

#### mini-ejemplo
Mal: [[keq]] = 423.128947 N/m sin contexto.
Bien: [[keq]] = 423 N/m en rango lineal declarado.

### Error 9: Saltarte la interpretación física del resultado calculado

#### por que parece correcto
Cerrar con una cifra parece suficiente.

#### por que es incorrecto
Sin lectura fisica no hay criterio para elegir arquitectura ni validar seguridad.

#### senal de deteccion
La resolucion termina en calculo sin decision tecnica.

#### correccion conceptual
Cerrar con accion concreta: que cambiar y por que mejora respuesta.

#### mini-ejemplo
Mal: "resultado final obtenido".
Bien: "conviene paralelo para limitar [[x]] y mantener margen de recorrido".

## Regla de autocontrol rápido

- ¿Declare topologia antes de calcular [[keq]]?
- ¿Diferencie [[Fel]] de [[Fm]]?
- ¿Verifique cierre interno de reparto ([[x1]] + [[x2]] o [[F1]] + [[F2]])?
- ¿Comprobe unidades de rigidez y fuerza?
- ¿Cerre con una decision fisica accionable?

Si alguna respuesta es no, la solucion aun no esta lista para uso operativo.
