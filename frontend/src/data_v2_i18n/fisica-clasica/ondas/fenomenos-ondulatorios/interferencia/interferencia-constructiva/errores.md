# Errores comunes en interferencia constructiva

## Errores conceptuales

### Error 1: creer que cualquier cruce de ondas refuerza

**Por qué parece correcto**

La intuición visual sugiere que si dos ondas están en el mismo lugar, sus efectos se acumulan. Es una generalización excesiva de la suma ordinaria: más ondas parece significar siempre más intensidad.

**Por qué es incorrecto**

La interferencia depende de la fase relativa, no solo de la coincidencia espacial. Dos ondas pueden cruzarse sin formar un máximo si [[delta_phi]] no corresponde a llegada en fase o si [[Delta_r]] no contiene ciclos completos de [[lambda]].

**Señal de detección**

El alumno afirma que hay máximo sin comparar caminos, fases o coherencia.

**Corrección conceptual**

Un máximo constructivo exige sincronización de fase. La pregunta correcta no es si las ondas se cruzan, sino cómo llegan.

**Mini-ejemplo de contraste**

Dos pulsos pueden pasar por el mismo punto con una cresta y un valle, y el efecto local no será un refuerzo. En cambio, dos crestas coherentes que llegan juntas sí producen una zona intensa.

## Errores de modelo

### Error 2: aplicar el modelo a fuentes incoherentes

**Por qué parece correcto**

El estudiante reconoce dos fuentes con frecuencia parecida y usa una analogía incompleta con la doble rendija. Parece razonable buscar franjas porque hay dos emisores.

**Por qué es incorrecto**

La condición constructiva requiere una relación de fase estable. Si las fases cambian de forma aleatoria durante la observación, el detector promedia muchos estados y el patrón desaparece.

**Señal de detección**

El enunciado habla de bombillas independientes, ruido no sincronizado o fuentes sin generador común, pero la solución predice máximos fijos.

**Corrección conceptual**

Antes de usar [[m_orden]], verifica que las fuentes sean coherentes. Sin coherencia puede haber suma media de intensidades, pero no franjas constructivas estables.

**Mini-ejemplo de contraste**

Dos lámparas comunes iluminan una mesa sin franjas visibles. Dos haces derivados del mismo láser sí pueden mostrar máximos porque conservan fase relativa.

### Error 3: confundir distancia absoluta con diferencia de camino

**Por qué parece correcto**

En los dibujos aparecen segmentos de distancia y el alumno elige uno de ellos. La confusión de magnitudes lleva a pensar que estar cerca de una fuente basta para explicar el máximo.

**Por qué es incorrecto**

La magnitud relevante es [[Delta_r]], una comparación entre dos recorridos. Una distancia aislada no determina si las ondas llegan en fase.

**Señal de detección**

La solución usa solo la distancia a una rendija o a un altavoz, y nunca compara los dos caminos.

**Corrección conceptual**

Calcula primero la diferencia entre recorridos y compárala con [[lambda]]. Solo esa comparación permite decidir si existe un orden [[m_orden]] constructivo.

**Mini-ejemplo de contraste**

Un oyente puede estar cerca de un altavoz y aun así no estar en un máximo si el otro camino llega desfasado. Otro punto más lejano puede sonar más fuerte si los dos recorridos llegan sincronizados.

## Errores matemáticos

### Error 4: sumar intensidades como si no hubiera fase

**Por qué parece correcto**

En muchos problemas, las intensidades de fuentes independientes se suman. Esa regla se traslada indebidamente a ondas coherentes.

**Por qué es incorrecto**

Con coherencia, la intensidad resultante depende de [[delta_phi]]. Primero se suman perturbaciones y después se obtiene [[I_resultante]]. Por eso el máximo puede superar la suma simple de [[I1]] e [[I2]].

**Señal de detección**

La solución ignora datos de fase o de diferencia de camino aunque el problema los proporciona.

**Corrección conceptual**

Si hay coherencia, usa la relación de interferencia. La suma directa de intensidades solo describe una referencia incoherente o promediada.

**Mini-ejemplo de contraste**

Dos ondas iguales en fase no producen solo el doble de la intensidad de una onda. El máximo ideal alcanza cuatro veces la referencia individual porque se duplicó la amplitud.

## Errores de interpretación

### Error 5: interpretar el máximo como creación de energía

**Por qué parece correcto**

El máximo local puede ser mayor que cada contribución individual y parece una ganancia. La intuición se centra en un punto y olvida el patrón completo.

**Por qué es incorrecto**

La interferencia redistribuye energía. Las zonas de [[I_resultante]] alta se acompañan de zonas con intensidad menor. El balance global sigue siendo compatible con conservación de energía.

**Señal de detección**

El alumno describe el máximo como amplificación gratuita o no menciona las regiones de menor intensidad del patrón.

**Corrección conceptual**

Lee el máximo como concentración local de energía ondulatoria, no como producción neta. El patrón completo debe interpretarse junto.

**Mini-ejemplo de contraste**

En una pantalla de doble rendija hay franjas brillantes, pero también franjas oscuras. La energía no aparece en las brillantes; se reparte de otra manera.

## Regla de autocontrol rápido

Antes de cerrar una respuesta, comprueba cuatro preguntas. ¿Las fuentes son coherentes? ¿Has comparado [[Delta_r]] con [[lambda]]? ¿El orden [[m_orden]] representa ciclos completos? ¿La lectura de [[I_resultante]] distingue entre máximo local y conservación global? Si alguna respuesta falta, el razonamiento todavía no aplica la plantilla física del leaf.
