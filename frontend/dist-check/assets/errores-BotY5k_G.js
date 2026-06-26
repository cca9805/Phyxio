const e=`# Errores comunes en interferencia destructiva

## Errores conceptuales

### Error 1: creer que cualquier cruce de ondas cancela

**Por qué parece correcto**

La intuición visual dice que dos ondas que ocupan el mismo punto deberían estorbarse. Es una generalización excesiva de la idea cotidiana de choque: si dos efectos se encuentran, uno debería reducir al otro.

**Por qué es incorrecto**

La cancelación depende de la fase relativa, no del simple cruce espacial. Dos ondas pueden atravesar la misma región y reforzarse, reducirse parcialmente o no mostrar patrón estable si [[delta_phi]] no se mantiene.

**Señal de detección**

El alumno afirma que hay mínimo sin mencionar [[Delta_r]], [[lambda]], coherencia o fase.

**Corrección conceptual**

La pregunta correcta es cómo llegan las perturbaciones. La interferencia destructiva exige oposición de fase estable y amplitudes compatibles.

**Mini-ejemplo de contraste**

Dos altavoces emitiendo el mismo tono pueden producir una zona silenciosa. Dos conversaciones independientes en una sala no producen un silencio fijo, aunque sus ondas se crucen continuamente.

## Errores de modelo

### Error 2: aplicar el modelo a fuentes incoherentes

**Por qué parece correcto**

El dibujo muestra dos emisores y el alumno recuerda que dos fuentes pueden interferir. La analogía con doble rendija parece suficiente aunque las fuentes no compartan fase.

**Por qué es incorrecto**

El modelo usa una relación de fase estable. Si las fases fluctúan durante la observación, el detector promedia máximos y mínimos, y [[I_resultante]] deja de mostrar cancelación fija.

**Señal de detección**

El enunciado habla de bombillas independientes, ruidos no sincronizados o emisores sin generador común, pero la solución predice mínimos estacionarios.

**Corrección conceptual**

Antes de usar [[m_orden]], verifica la coherencia. Sin coherencia puede haber suma media de intensidades, pero no mínimos destructivos estables.

**Mini-ejemplo de contraste**

Dos lámparas comunes iluminan una pared sin franjas oscuras. Dos haces derivados del mismo láser sí pueden producir zonas oscuras porque conservan fase relativa.

## Errores matemáticos

### Error 3: olvidar el medio ciclo destructivo

**Por qué parece correcto**

El alumno recuerda la condición de máximos y la reutiliza por analogía. El mecanismo cognitivo es transferencia incompleta: toma una regla cercana y la aplica sin revisar el cambio de fenómeno.

**Por qué es incorrecto**

Los mínimos no aparecen cuando los caminos equivalen a ciclos completos, sino cuando se añade medio ciclo. Usar solo ciclos completos predice refuerzo, justo lo contrario de la cancelación buscada.

**Señal de detección**

La solución usa [[m_orden]] como entero de máximos y concluye que el punto es oscuro sin introducir oposición de fase.

**Corrección conceptual**

Para mínimos destructivos, compara [[Delta_r]] con [[lambda]] buscando el desfase de medio ciclo. Luego verifica si [[I1]] y [[I2]] permiten un mínimo profundo.

**Mini-ejemplo de contraste**

Si dos ondas iguales llegan con cresta sobre cresta, la señal aumenta. Si una llega medio ciclo desplazada, la cresta se enfrenta a un valle y la señal baja.

## Errores de interpretación

### Error 4: pensar que el mínimo destruye energía

**Por qué parece correcto**

Cuando una pantalla muestra una franja oscura o una sala tiene una zona silenciosa, parece que la energía se ha perdido. Es una confusión entre lectura local y balance global.

**Por qué es incorrecto**

La interferencia redistribuye energía. Una región con [[I_resultante]] pequeña suele estar acompañada por regiones de mayor intensidad, de modo que el patrón completo conserva el transporte energético.

**Señal de detección**

El alumno interpreta una franja oscura como desaparición total de la onda o como absorción sin mencionar otras regiones del patrón.

**Corrección conceptual**

Lee el mínimo como cancelación local de perturbaciones. Para hablar de energía, observa el patrón completo y no solo un punto.

**Mini-ejemplo de contraste**

En una doble rendija hay franjas oscuras y brillantes. Las zonas oscuras no absorben toda la luz; la distribución espacial concentra más intensidad en las franjas brillantes.

## Regla de autocontrol rápido

Antes de cerrar un problema, comprueba cuatro preguntas. ¿Las fuentes son coherentes? ¿[[Delta_r]] se compara con [[lambda]] y no con una distancia aislada? ¿[[delta_phi]] corresponde a oposición de fase estable? ¿[[I1]] y [[I2]] permiten cancelación profunda?

Si alguna respuesta falla, no declares una cancelación completa. Puedes tener reducción parcial, promedio incoherente o un mínimo desplazado por el medio. La regla rápida es: fase opuesta decide la posición del mínimo, amplitudes compatibles deciden su profundidad.
`;export{e as default};
