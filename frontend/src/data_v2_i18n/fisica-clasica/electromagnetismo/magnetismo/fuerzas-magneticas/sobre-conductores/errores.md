## Errores conceptuales


### Error 1: pensar que el campo empuja en su direccion

**Por qué parece correcto**

La analogia con un flujo hace imaginar que [[campo_magnetico]] arrastra el conductor como si fuera viento.

**Por qué es incorrecto**

La fuerza depende de la orientacion conjunta de [[intensidad_de_corriente]] y [[campo_magnetico]], y no apunta simplemente a lo largo del campo.

**Señal de detección**

El dibujo coloca [[fuerza_magnetica_sobre_el_conductor]] paralela a las lineas de campo.

**Corrección conceptual**

Usar la regla de la mano derecha antes de decidir el sentido de la fuerza.

**Mini-ejemplo de contraste**

Un conductor perpendicular al campo puede moverse lateralmente, no hacia la fuente del campo.

## Errores de modelo


### Error 2: usar toda la longitud del circuito

**Por qué parece correcto**

La generalizacion excesiva del simbolo longitud hace tomar el cable completo como si todo estuviera dentro del campo.

**Por qué es incorrecto**

Solo la longitud efectiva [[longitud_efectiva]] que atraviesa la region magnetica contribuye a la fuerza del tramo.

**Señal de detección**

El resultado aumenta al alargar cables fuera del iman.

**Corrección conceptual**

Marcar en el esquema que parte del conductor esta dentro del campo y medir solo ese tramo.

**Mini-ejemplo de contraste**

Un cable largo con solo 5 cm dentro del iman no usa metros completos para calcular [[fuerza_magnetica_sobre_el_conductor]].

## Errores matemáticos


### Error 3: confundir fuerza total y fuerza por longitud

**Por qué parece correcto**

Ambas magnitudes tienen nombres parecidos y crecen con [[intensidad_de_corriente]] y [[campo_magnetico]].

**Por qué es incorrecto**

[[fuerza_magnetica_por_unidad_de_longitud]] es una densidad lineal; [[fuerza_magnetica_sobre_el_conductor]] incluye la longitud efectiva [[longitud_efectiva]].

**Señal de detección**

La unidad final queda en N*m^-1 cuando se pedia fuerza total.

Otra señal clara aparece cuando el alumno compara dos cables de distinta [[longitud_efectiva]] y obtiene el mismo resultado total sin justificarlo. Si la longitud efectiva cambia y la lectura no cambia, probablemente se uso [[fuerza_magnetica_por_unidad_de_longitud]] como si fuera [[fuerza_magnetica_sobre_el_conductor]].

**Corrección conceptual**

Comprobar si el resultado pedido es fuerza sobre un tramo o fuerza distribuida por metro.

**Mini-ejemplo de contraste**

Dos cables con igual [[fuerza_magnetica_por_unidad_de_longitud]] pero distintas longitudes expuestas tienen fuerzas totales distintas.

## Errores de interpretación


### Error 4: olvidar que invertir la corriente invierte la fuerza

**Por qué parece correcto**

Si solo se mira el modulo, parece que cambiar el sentido de [[intensidad_de_corriente]] no altera nada.

**Por qué es incorrecto**

El modulo puede coincidir, pero el sentido mecanico de la fuerza cambia.

**Señal de detección**

El alumno predice el mismo movimiento al invertir los bornes de alimentacion.

**Corrección conceptual**

Separar calculo de modulo y lectura de sentido vectorial.

**Mini-ejemplo de contraste**

Un motor necesita conmutacion porque cambiar sentidos permite controlar el giro.

## Regla de autocontrol rápido

Comprueba cuatro elementos antes de sustituir datos: corriente convencional, longitud efectiva, direccion del campo y orientacion entre conductor y campo. Si falta uno, el calculo de [[fuerza_magnetica_sobre_el_conductor]] todavia no esta definido fisicamente.

Despues revisa unidades. Si aparece N*m^-1, estas leyendo [[fuerza_magnetica_por_unidad_de_longitud]]; si aparece N, estas leyendo fuerza total sobre el tramo.

La comprobacion final debe decir en voz alta que magnitud se obtuvo y que representa fisicamente. Si el resultado habla de fuerza total, debe incluir el tramo [[longitud_efectiva]]; si habla de fuerza repartida, debe quedar claro que es una lectura por longitud. Luego decide el sentido con [[intensidad_de_corriente]] y [[campo_magnetico]], no con el numero aislado.