# Errores comunes en reflexión

## Errores conceptuales

### Error 1: medir el ángulo desde la superficie

**Por qué parece correcto**

El dibujo muestra una línea de superficie muy visible, y el alumno usa esa línea como referencia inmediata. Es una confusión de referencia geométrica.

**Por qué es incorrecto**

La ley de reflexión usa la normal local. Si se mide desde la superficie, se toma el ángulo complementario y la dirección reflejada queda mal construida.

**Señal de detección**

El rayo reflejado parece simétrico respecto a la superficie, no respecto a la normal.

**Corrección conceptual**

Dibuja primero la normal y mide [[theta_i]] y [[theta_r]] desde ella. La superficie solo sirve para construir esa perpendicular.

**Mini-ejemplo de contraste**

Un rayo casi paralelo a una mesa tiene un ángulo pequeño respecto a la mesa, pero un ángulo grande respecto a la normal. Usar la referencia equivocada invierte la predicción.

## Errores de modelo

### Error 2: aplicar reflexión especular a una superficie rugosa

**Por qué parece correcto**

El alumno recuerda que toda pared refleja algo y generaliza la imagen de espejo plano. El mecanismo cognitivo es simplificación excesiva.

**Por qué es incorrecto**

Si la rugosidad es comparable con la longitud de onda, no hay una única normal efectiva. La energía reflejada se reparte en muchas direcciones y un solo [[theta_r]] deja de describir el fenómeno.

**Señal de detección**

El problema habla de superficie mate, pared irregular, espuma o textura, pero la solución dibuja un único rayo perfectamente reflejado.

**Corrección conceptual**

Usa reflexión especular solo para superficies lisas a la escala de la onda. Si no, describe reflexión difusa o absorción.

**Mini-ejemplo de contraste**

Un espejo devuelve una imagen clara. Una pared blanca refleja luz, pero no forma una imagen nítida porque dispersa la onda en muchas direcciones.

## Errores matemáticos

### Error 3: confundir reflectancia con porcentaje directo

**Por qué parece correcto**

En lenguaje cotidiano se dice “refleja ochenta por ciento”, y el alumno introduce 80 como si fuera una fracción. Es una confusión de escala.

**Por qué es incorrecto**

[[R_reflectancia]] es adimensional y en una frontera pasiva debe estar entre cero y uno. Usar 80 multiplicaría artificialmente [[I_reflejada]].

**Señal de detección**

La intensidad reflejada sale mucho mayor que [[I_incidente]] sin que el problema mencione medio activo.

**Corrección conceptual**

Convierte porcentajes a fracciones antes de calcular. Ochenta por ciento corresponde a 0.80 como valor de [[R_reflectancia]].

**Mini-ejemplo de contraste**

Una onda de 10 W/m² ante un material que refleja ochenta por ciento debe devolver 8 W/m², no ochocientos W/m².

## Errores de interpretación

### Error 4: creer que dirección reflejada implica energía total reflejada

**Por qué parece correcto**

El esquema de rayos muestra una flecha reflejada limpia. La representación visual oculta transmisión, absorción y pérdidas.

**Por qué es incorrecto**

La ley angular solo determina dirección. La intensidad reflejada depende de [[R_reflectancia]], que puede ser pequeña aunque el rayo reflejado esté bien definido.

**Señal de detección**

La solución calcula [[theta_r]] correctamente y concluye sin justificar que toda la onda vuelve.

**Corrección conceptual**

Después de la dirección, pregunta cuánta energía regresa. Para eso hacen falta [[I_incidente]] y [[R_reflectancia]].

**Mini-ejemplo de contraste**

Un vidrio limpio produce un reflejo visible, pero la mayor parte de la luz puede atravesarlo. La dirección del reflejo es correcta aunque su intensidad sea baja.

## Regla de autocontrol rápido

Antes de cerrar un problema de reflexión, revisa tres puntos. Primero, los ángulos deben medirse desde la normal. Segundo, la superficie debe ser lisa frente a la longitud de onda si se usa reflexión especular. Tercero, la intensidad exige [[R_reflectancia]], no solo geometría.

Si el resultado da [[I_reflejada]] negativa o mayor que [[I_incidente]] en una frontera pasiva, hay un error de escala, unidades o interpretación. Si el dibujo no contiene normal, la solución aún no está preparada.
