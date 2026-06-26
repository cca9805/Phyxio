# Errores frecuentes

## Errores conceptuales

### Error 1: confundir periodicidad con ausencia de dinamica causal

Por que parece correcto:
Al observar una grafica suave de [[x]], algunas personas creen que todo el comportamiento se repite sin informacion nueva y que no hace falta analizar [[v]] ni [[a]].

Senal de deteccion:
La explicacion omite como cambian signo y magnitud de [[v]] y [[a]] en distintos tramos del ciclo.

Mini-ejemplo de contraste:
Dos instantes con mismo valor de [[x]] pueden tener [[v]] opuestas y significado fisico distinto.

Correccion conceptual:
En MHS, el estado completo requiere leer [[x]], [[v]] y [[a]] de forma conjunta y temporal.

### Error 2: asumir que [[phi]] solo es un ajuste numerico sin contenido fisico

Por que parece correcto:
En ejercicios introductorios parece que [[phi]] solo desplaza curvas y no altera interpretacion.

Senal de deteccion:
Se reporta resultado sin aclarar condicion inicial ni instante de referencia.

Mini-ejemplo de contraste:
Con misma [[A]] y [[omega]], dos valores de [[phi]] producen estados iniciales distintos aun con igual periodo.

Correccion conceptual:
[[phi]] representa condicion inicial y debe justificarse fisicamente antes de calcular.

## Errores de modelo

### Error 3: aplicar modelo ideal fuera de rango lineal

Por que parece correcto:
La expresion de MHS suele dar una curva elegante y tentadora para cualquier amplitud.

Senal de deteccion:
Aumentar [[A]] produce deformaciones de ciclo pero se mantiene el mismo modelo sin discutir limites.

Mini-ejemplo de contraste:
Si el sistema entra en zona no lineal, la prediccion temporal deja de conservar coherencia de fase.

Correccion conceptual:
Verificar primero dominio de validez y solo despues aceptar interpretacion de parametros.

### Error 4: ignorar forzamiento externo o perdida de energia relevante

Por que parece correcto:
Se usa la forma ideal por costumbre y se atribuyen diferencias a ruido menor.

Senal de deteccion:
La amplitud cambia ciclo a ciclo de forma sistematica y no se reconsidera el modelo.

Mini-ejemplo de contraste:
Una deriva monotona de envolvente suele indicar amortiguamiento, no error de lectura puntual.

Correccion conceptual:
Cuando aparezca deriva clara, migrar a modelo amortiguado o forzado con criterio explicito.

## Errores matemáticos

### Error 5: mezclar unidades de tiempo sin normalizar

Por que parece correcto:
Los valores numericos parecen cercanos y se sustituyen directo.

Senal de deteccion:
[[omega]] se toma en una unidad temporal y [[t]] en otra, sin conversion.

Mini-ejemplo de contraste:
Una conversion omitida cambia fase acumulada y puede alterar toda conclusion de sincronizacion.

Correccion conceptual:
Unificar unidades antes de cualquier sustitucion numerica.

### Error 6: cerrar la resolucion con calculo aislado sin control dimensional

Por que parece correcto:
El numero final parece plausible y se da por valido.

Senal de deteccion:
No se revisa si la magnitud reportada coincide con unidad fisica esperada.

Mini-ejemplo de contraste:
Un resultado de [[v]] con unidad de longitud pura indica cadena de calculo inconsistente.

Correccion conceptual:
Agregar chequeo dimensional al final de cada tramo de resolucion.

## Errores de interpretación

### Error 7: interpretar todo desfase como error experimental

Por que parece correcto:
Se asume que cualquier diferencia entre medicion y prediccion es ruido.

Senal de deteccion:
No se prueba sensibilidad al ajustar [[phi]] o [[omega]] dentro de incertidumbre razonable.

Mini-ejemplo de contraste:
Un pequeno cambio en [[phi]] puede explicar desfase sin necesidad de invalidar datos.

Correccion conceptual:
Separar error de medicion, incertidumbre parametricas y limites de modelo.

### Error 8: presentar solo numeros sin lectura causal

Por que parece correcto:
En evaluaciones rapidas se premia el resultado final y se omite interpretacion.

Senal de deteccion:
No aparece ningun comentario sobre que implica el resultado para comportamiento dinamico.

Mini-ejemplo de contraste:
Dos escenarios con igual [[A]] pero distinto [[omega]] pueden tener decisiones de diseno opuestas.

Correccion conceptual:
Cerrar cada problema con una lectura fisica explicita sobre estabilidad, fase y aplicacion.

## Regla de autocontrol rápido

1. Identificar magnitud objetivo antes de operar.
2. Revisar hipotesis de linealidad y condiciones iniciales.
3. Comprobar consistencia entre [[x]], [[v]] y [[a]].
4. Confirmar unidades y orden de magnitud.
5. Traducir resultado a conclusion fisica concreta.
