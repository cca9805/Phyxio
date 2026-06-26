const e=`# Errores comunes

## Errores conceptuales

### Error 1: pensar que el campo empuja en su direccion

**Por qué parece correcto**

La analogia con un flujo hace imaginar que [[B]] arrastra el conductor como si fuera viento.

**Por qué es incorrecto**

La fuerza depende de la orientacion conjunta de [[I]] y [[B]], y no apunta simplemente a lo largo del campo.

**Señal de detección**

El dibujo coloca [[F_B]] paralela a las lineas de campo.

**Corrección conceptual**

Usar la regla de la mano derecha antes de decidir el sentido de la fuerza.

**Mini-ejemplo de contraste**

Un conductor perpendicular al campo puede moverse lateralmente, no hacia la fuente del campo.

## Errores de modelo

### Error 2: usar toda la longitud del circuito

**Por qué parece correcto**

La generalizacion excesiva del simbolo longitud hace tomar el cable completo como si todo estuviera dentro del campo.

**Por qué es incorrecto**

Solo la longitud efectiva [[L]] que atraviesa la region magnetica contribuye a la fuerza del tramo.

**Señal de detección**

El resultado aumenta al alargar cables fuera del iman.

**Corrección conceptual**

Marcar en el esquema que parte del conductor esta dentro del campo y medir solo ese tramo.

**Mini-ejemplo de contraste**

Un cable largo con solo 5 cm dentro del iman no usa metros completos para calcular [[F_B]].

## Errores matemáticos

### Error 3: confundir fuerza total y fuerza por longitud

**Por qué parece correcto**

Ambas magnitudes tienen nombres parecidos y crecen con [[I]] y [[B]].

**Por qué es incorrecto**

[[f_L]] es una densidad lineal; [[F_B]] incluye la longitud efectiva [[L]].

**Señal de detección**

La unidad final queda en N*m^-1 cuando se pedia fuerza total.

Otra señal clara aparece cuando el alumno compara dos cables de distinta [[L]] y obtiene el mismo resultado total sin justificarlo. Si la longitud efectiva cambia y la lectura no cambia, probablemente se uso [[f_L]] como si fuera [[F_B]].

**Corrección conceptual**

Comprobar si el resultado pedido es fuerza sobre un tramo o fuerza distribuida por metro.

**Mini-ejemplo de contraste**

Dos cables con igual [[f_L]] pero distintas longitudes expuestas tienen fuerzas totales distintas.

## Errores de interpretación

### Error 4: olvidar que invertir la corriente invierte la fuerza

**Por qué parece correcto**

Si solo se mira el modulo, parece que cambiar el sentido de [[I]] no altera nada.

**Por qué es incorrecto**

El modulo puede coincidir, pero el sentido mecanico de la fuerza cambia.

**Señal de detección**

El alumno predice el mismo movimiento al invertir los bornes de alimentacion.

**Corrección conceptual**

Separar calculo de modulo y lectura de sentido vectorial.

**Mini-ejemplo de contraste**

Un motor necesita conmutacion porque cambiar sentidos permite controlar el giro.

## Regla de autocontrol rápido

Comprueba cuatro elementos antes de sustituir datos: corriente convencional, longitud efectiva, direccion del campo y orientacion entre conductor y campo. Si falta uno, el calculo de [[F_B]] todavia no esta definido fisicamente.

Despues revisa unidades. Si aparece N*m^-1, estas leyendo [[f_L]]; si aparece N, estas leyendo fuerza total sobre el tramo.

La comprobacion final debe decir en voz alta que magnitud se obtuvo y que representa fisicamente. Si el resultado habla de fuerza total, debe incluir el tramo [[L]]; si habla de fuerza repartida, debe quedar claro que es una lectura por longitud. Luego decide el sentido con [[I]] y [[B]], no con el numero aislado.
`;export{e as default};
