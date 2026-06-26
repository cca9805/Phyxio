const e=`# Errores frecuentes\r
\r
## Errores conceptuales\r
\r
### Error 1: confundir periodicidad con ausencia de dinamica causal\r
\r
Por que parece correcto:\r
Al observar una grafica suave de [[x]], algunas personas creen que todo el comportamiento se repite sin informacion nueva y que no hace falta analizar [[v]] ni [[a]].\r
\r
Senal de deteccion:\r
La explicacion omite como cambian signo y magnitud de [[v]] y [[a]] en distintos tramos del ciclo.\r
\r
Mini-ejemplo de contraste:\r
Dos instantes con mismo valor de [[x]] pueden tener [[v]] opuestas y significado fisico distinto.\r
\r
Correccion conceptual:\r
En MHS, el estado completo requiere leer [[x]], [[v]] y [[a]] de forma conjunta y temporal.\r
\r
### Error 2: asumir que [[phi]] solo es un ajuste numerico sin contenido fisico\r
\r
Por que parece correcto:\r
En ejercicios introductorios parece que [[phi]] solo desplaza curvas y no altera interpretacion.\r
\r
Senal de deteccion:\r
Se reporta resultado sin aclarar condicion inicial ni instante de referencia.\r
\r
Mini-ejemplo de contraste:\r
Con misma [[A]] y [[omega]], dos valores de [[phi]] producen estados iniciales distintos aun con igual periodo.\r
\r
Correccion conceptual:\r
[[phi]] representa condicion inicial y debe justificarse fisicamente antes de calcular.\r
\r
## Errores de modelo\r
\r
### Error 3: aplicar modelo ideal fuera de rango lineal\r
\r
Por que parece correcto:\r
La expresion de MHS suele dar una curva elegante y tentadora para cualquier amplitud.\r
\r
Senal de deteccion:\r
Aumentar [[A]] produce deformaciones de ciclo pero se mantiene el mismo modelo sin discutir limites.\r
\r
Mini-ejemplo de contraste:\r
Si el sistema entra en zona no lineal, la prediccion temporal deja de conservar coherencia de fase.\r
\r
Correccion conceptual:\r
Verificar primero dominio de validez y solo despues aceptar interpretacion de parametros.\r
\r
### Error 4: ignorar forzamiento externo o perdida de energia relevante\r
\r
Por que parece correcto:\r
Se usa la forma ideal por costumbre y se atribuyen diferencias a ruido menor.\r
\r
Senal de deteccion:\r
La amplitud cambia ciclo a ciclo de forma sistematica y no se reconsidera el modelo.\r
\r
Mini-ejemplo de contraste:\r
Una deriva monotona de envolvente suele indicar amortiguamiento, no error de lectura puntual.\r
\r
Correccion conceptual:\r
Cuando aparezca deriva clara, migrar a modelo amortiguado o forzado con criterio explicito.\r
\r
## Errores matemáticos\r
\r
### Error 5: mezclar unidades de tiempo sin normalizar\r
\r
Por que parece correcto:\r
Los valores numericos parecen cercanos y se sustituyen directo.\r
\r
Senal de deteccion:\r
[[omega]] se toma en una unidad temporal y [[t]] en otra, sin conversion.\r
\r
Mini-ejemplo de contraste:\r
Una conversion omitida cambia fase acumulada y puede alterar toda conclusion de sincronizacion.\r
\r
Correccion conceptual:\r
Unificar unidades antes de cualquier sustitucion numerica.\r
\r
### Error 6: cerrar la resolucion con calculo aislado sin control dimensional\r
\r
Por que parece correcto:\r
El numero final parece plausible y se da por valido.\r
\r
Senal de deteccion:\r
No se revisa si la magnitud reportada coincide con unidad fisica esperada.\r
\r
Mini-ejemplo de contraste:\r
Un resultado de [[v]] con unidad de longitud pura indica cadena de calculo inconsistente.\r
\r
Correccion conceptual:\r
Agregar chequeo dimensional al final de cada tramo de resolucion.\r
\r
## Errores de interpretación\r
\r
### Error 7: interpretar todo desfase como error experimental\r
\r
Por que parece correcto:\r
Se asume que cualquier diferencia entre medicion y prediccion es ruido.\r
\r
Senal de deteccion:\r
No se prueba sensibilidad al ajustar [[phi]] o [[omega]] dentro de incertidumbre razonable.\r
\r
Mini-ejemplo de contraste:\r
Un pequeno cambio en [[phi]] puede explicar desfase sin necesidad de invalidar datos.\r
\r
Correccion conceptual:\r
Separar error de medicion, incertidumbre parametricas y limites de modelo.\r
\r
### Error 8: presentar solo numeros sin lectura causal\r
\r
Por que parece correcto:\r
En evaluaciones rapidas se premia el resultado final y se omite interpretacion.\r
\r
Senal de deteccion:\r
No aparece ningun comentario sobre que implica el resultado para comportamiento dinamico.\r
\r
Mini-ejemplo de contraste:\r
Dos escenarios con igual [[A]] pero distinto [[omega]] pueden tener decisiones de diseno opuestas.\r
\r
Correccion conceptual:\r
Cerrar cada problema con una lectura fisica explicita sobre estabilidad, fase y aplicacion.\r
\r
## Regla de autocontrol rápido\r
\r
1. Identificar magnitud objetivo antes de operar.\r
2. Revisar hipotesis de linealidad y condiciones iniciales.\r
3. Comprobar consistencia entre [[x]], [[v]] y [[a]].\r
4. Confirmar unidades y orden de magnitud.\r
5. Traducir resultado a conclusion fisica concreta.\r
`;export{e as default};
