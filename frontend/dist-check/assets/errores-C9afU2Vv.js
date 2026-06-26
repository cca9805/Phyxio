const e=`# Errores frecuentes

## Errores conceptuales

### Error 1

**Por qué parece correcto**: Las franjas brillantes parecen depender solo de cuanta luz llega al detector.

**Por qué es incorrecto**: La coherencia depende de estabilidad de fase. Mas intensidad no garantiza que [[L_c]] sea grande ni que [[V]] sea alta.

**Señal de detección**: El alumno sube la potencia de la fuente y espera recuperar franjas borradas por desajuste de camino.

**Corrección conceptual**: Separar energia total de contraste interferencial.

**Mini-ejemplo de contraste**: Un laser debil puede dar franjas claras donde una lampara intensa no las sostiene.

### Error 2

**Por qué parece correcto**: Si dos haces proceden de la misma fuente, parece que siempre deberian interferir.

**Por qué es incorrecto**: Si [[Delta_L]] supera la escala [[L_c]], la fuente no mantiene memoria de fase entre los caminos.

**Señal de detección**: Se ignora la diferencia de caminos y se culpa al detector de toda perdida de franjas.

**Corrección conceptual**: Comparar siempre [[Delta_L]] con [[L_c]] antes de interpretar el patron.

**Mini-ejemplo de contraste**: Una lampara filtrada puede interferir con caminos casi iguales, pero no con brazos muy desajustados.

## Errores de modelo

### Error 3

**Por qué parece correcto**: Un unico numero de coherencia parece suficiente para cualquier experimento.

**Por qué es incorrecto**: Hay coherencia temporal, espacial e instrumental. El modelo simple no cubre todas las perdidas de contraste.

**Señal de detección**: El patron cambia al mover la fuente lateralmente aunque [[Delta_L]] permanezca igual.

**Corrección conceptual**: Pasar al modelo extendido cuando la extension de fuente o la alineacion gobiernan el resultado.

**Mini-ejemplo de contraste**: Una fuente extensa reduce coherencia espacial incluso con caminos cortos.

### Error 4

**Por qué parece correcto**: La visibilidad parece una medida directa de coherencia.

**Por qué es incorrecto**: [[V]] tambien depende de fondo, equilibrio de intensidades, vibracion y detector.

**Señal de detección**: La visibilidad mejora al igualar intensidades sin cambiar la fuente.

**Corrección conceptual**: Usar [[V]] como indicador experimental, no como prueba unica de coherencia temporal.

**Mini-ejemplo de contraste**: Dos haces coherentes pero muy desiguales pueden producir franjas de bajo contraste.

## Errores matemáticos

### Error 5

**Por qué parece correcto**: [[I_max]] e [[I_min]] tienen las mismas unidades y se pueden combinar de varias formas.

**Por qué es incorrecto**: La visibilidad requiere contraste normalizado; usar una resta sin normalizar confunde brillo con contraste.

**Señal de detección**: El resultado de visibilidad tiene unidades o supera claramente el rango fisico.

**Corrección conceptual**: Comprobar que [[V]] sea adimensional y quede entre cero y uno.

**Mini-ejemplo de contraste**: Duplicar toda la potencia no debe cambiar la visibilidad si el contraste relativo es igual.

### Error 6

**Por qué parece correcto**: Si [[tau_c]] es pequeño, parece que la longitud tambien debe ser numericamente pequeña sin conversion.

**Por qué es incorrecto**: [[L_c]] combina tiempo con velocidad de propagacion. No se puede comparar segundos directamente con metros.

**Señal de detección**: El alumno compara [[tau_c]] con [[Delta_L]] sin convertir a longitud.

**Corrección conceptual**: Convertir primero la escala temporal en [[L_c]].

**Mini-ejemplo de contraste**: Un tiempo muy corto puede corresponder a micrometros, que aun son relevantes en optica.

## Errores de interpretación

### Error 7

**Por qué parece correcto**: Si no se ven franjas, parece que no hay interferencia en absoluto.

**Por qué es incorrecto**: Puede haber interferencia parcial, pero el promedio temporal, el ruido o la resolucion del detector reducen el contraste visible.

**Señal de detección**: Se concluye ausencia total de ondas superpuestas a partir de una visibilidad baja.

**Corrección conceptual**: Interpretar [[V]] como medida gradual de contraste.

**Mini-ejemplo de contraste**: Un patron tenue pero estable puede contener informacion interferometrica.

## Regla de autocontrol rápido

Antes de culpar a la fuente, compara [[Delta_L]] con [[L_c]] y revisa si [[V]] podria estar reducida por intensidad desigual, fondo, vibracion o detector. Coherencia baja es solo una de las causas posibles de franjas debiles.
`;export{e as default};
