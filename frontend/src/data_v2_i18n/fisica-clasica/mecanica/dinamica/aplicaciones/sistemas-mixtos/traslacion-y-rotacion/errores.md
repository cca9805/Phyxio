# Errores frecuentes: Traslación y rotación

## Errores conceptuales

### Error 1: Confundir causa con efecto

**Por qué parece correcto**

La presencia de varias magnitudes en el problema puede hacer creer que todas cumplen el mismo rol causal.

**Por qué es incorrecto**

En este leaf, el torque neto [[tau_net]] causa [[alpha]], y luego [[alpha]] se proyecta en [[a]] mediante [[R]]. Si se invierte esa cadena, el razonamiento pierde sentido físico.

**Señal de detección**

El estudiante afirma que [[alpha]] “produce” [[tau_net]] sin justificar retroacción física real.

**Corrección conceptual**

Construir siempre la cadena causal explícita: entrada dinámica, respuesta angular, respuesta lineal y lectura energética.

**Mini-ejemplo de contraste**

Con [[tau_net]] fija, cambiar [[I]] modifica [[alpha]]. Si la causa fuera [[alpha]], variar [[I]] no debería importar, y eso contradice la observación.

### Error 2: Aplicar la fórmula mecánicamente sin validar el contexto

**Por qué parece correcto**

Repetir ejercicios con la misma estructura genera la ilusión de que la ecuación siempre funciona igual.

**Por qué es incorrecto**

Cada relación exige hipótesis: rigidez, no deslizamiento, rango clásico y coherencia de unidades.

**Señal de detección**

Se sustituyen números sin declarar validez del vínculo entre [[alpha]], [[a]] y [[R]].

**Corrección conceptual**

Antes de operar, declarar hipótesis y escribir una condición de validez observable.

**Mini-ejemplo de contraste**

Si hay deslizamiento, [[a]] medida deja de coincidir con [[alpha]]·[[R]]. Aplicar el vínculo sin validarlo produce error sistemático.

### Error 3: Confundir magnitudes similares

**Por qué parece correcto**

[[K]], [[Kt]] y [[Kr]] comparten unidades de energía y pueden parecer intercambiables.

**Por qué es incorrecto**

[[K]] es total, mientras [[Kt]] y [[Kr]] describen mecanismos distintos. Mezclarlas impide interpretar dónde se está almacenando energía.

**Señal de detección**

El informe usa solo [[K]] y nunca separa componentes pese a tener datos de [[v]] y [[omega]].

**Corrección conceptual**

Obligar a reportar el trío [[K]], [[Kt]], [[Kr]] en cualquier transitorio de interés.

**Mini-ejemplo de contraste**

Dos sistemas con el mismo [[K]] pueden comportarse distinto: uno con mayor [[Kr]] acelera linealmente peor que otro con mayor [[Kt]].

## Errores de modelo

### Error 4: No reconocer cuándo el modelo simplificado falla

**Por qué parece correcto**

Cuando el modelo funcionó una vez, se asume que seguirá funcionando en cualquier régimen.

**Por qué es incorrecto**

El cambio de carga, fricción o adherencia puede romper hipótesis y volver inválida la predicción.

**Señal de detección**

Error relativo superior al 10 por ciento en mediciones repetidas bajo condiciones comparables.

**Corrección conceptual**

Definir umbral operativo y activar transición a modelo extendido cuando se supere de forma persistente.

**Mini-ejemplo de contraste**

Un banco pasa de error del 3 por ciento al 14 por ciento tras cambio de recubrimiento. Mantener el modelo ideal ya no es defendible.

### Error 5: Ignorar los límites del modelo conocidos

**Por qué parece correcto**

Los límites suelen verse como detalle teórico y no como parte del resultado.

**Por qué es incorrecto**

Sin límites, la predicción se extrapola donde el modelo no representa la física real.

**Señal de detección**

No aparece ninguna frase del tipo “válido mientras...” en la conclusión.

**Corrección conceptual**

Cerrar siempre con condición de validez y condición de salida del modelo.

**Mini-ejemplo de contraste**

El cálculo fue correcto en baja velocidad, pero en régimen rápido emergen pérdidas no modeladas y la predicción deja de ajustar.

## Errores matemáticos

### Error 6: Despejes algebraicos descuidados

**Por qué parece correcto**

La manipulación simbólica parece formalmente limpia y crea confianza excesiva.

**Por qué es incorrecto**

Un signo equivocado en dinámica acoplada cambia dirección física de [[alpha]] y de [[a]].

**Señal de detección**

Resultado con sentido contrario al observado sin justificación de convención de signos.

**Corrección conceptual**

Verificar signo esperado, dimensiones y orden de magnitud antes de aceptar despejes.

**Mini-ejemplo de contraste**

Con [[tau_net]] positiva, obtener [[alpha]] negativa sin cambio de convención indica error algebraico, no fenómeno nuevo.

### Error 7: Olvidar constantes fundamentales o unidades

**Por qué parece correcto**

Se prioriza terminar el cálculo y se deja el control de unidades para el final.

**Por qué es incorrecto**

Una conversión incorrecta arruina cualquier interpretación, aunque la estructura algebraica sea correcta.

**Señal de detección**

Valores de [[a]] o de [[K]] fuera de rango razonable sin explicación física.

**Corrección conceptual**

Normalizar unidades al inicio y mantener trazabilidad dimensional en cada paso.

**Mini-ejemplo de contraste**

Usar [[R]] en cm junto con SI en el resto puede inflar o reducir [[a]] por factor cien sin que el alumno lo note.

## Errores de interpretación

### Error 8: Interpretar un resultado como más preciso que lo que el modelo permite

**Por qué parece correcto**

Más decimales se confunden con más verdad física.

**Por qué es incorrecto**

La incertidumbre de modelo y de medición suele ser mayor que la diferencia entre decimales finales.

**Señal de detección**

Se decide entre alternativas por diferencias menores al ruido experimental.

**Corrección conceptual**

Reportar cifras significativas coherentes con incertidumbre y comparar bandas, no solo valores puntuales.

**Mini-ejemplo de contraste**

Con incertidumbre del 5 por ciento, distinguir opciones por una diferencia del 0.3 por ciento no tiene respaldo experimental.

### Error 9: Saltarte la interpretación física del resultado calculado

**Por qué parece correcto**

Llegar al número final da sensación de tarea completada.

**Por qué es incorrecto**

Sin interpretación causal, el resultado no guía diseño, mantenimiento ni control.

**Señal de detección**

El cierre incluye solo números y no explica implicaciones para operación real.

**Corrección conceptual**

Añadir siempre un cierre con significado físico, validez y decisión sugerida.

**Mini-ejemplo de contraste**

Informar solo [[K]] no indica si el sistema acelera bien; separar [[Kt]] y [[Kr]] sí permite decidir una mejora de diseño.

## Regla de autocontrol rápido

Antes de cerrar una resolución, verificar esta secuencia mínima:

- Causalidad: [[tau_net]] impulsa [[alpha]] y [[alpha]] se proyecta en [[a]] mediante [[R]].
- Coherencia energética: [[K]] debe ser compatible con [[Kt]] y [[Kr]].
- Dimensiones y unidades: todo paso debe conservar consistencia física.
- Validez declarada: indicar explícitamente cuándo el modelo deja de aplicar.
- Interpretación operativa: convertir el número en decisión técnica argumentada.