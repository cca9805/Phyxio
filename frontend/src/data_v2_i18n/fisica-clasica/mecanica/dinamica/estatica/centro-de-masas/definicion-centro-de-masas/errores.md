# Errores comunes: definicion del centro de masas

## Errores conceptuales

### Error 1: confundir centro de masas con punto medio

**Por que parece correcto**
Cuando las masas son iguales, el centro de masas coincide con el punto medio geometrico.

**Por que es incorrecto**
Si [[m1]] y [[m2]] son distintas, la posicion [[xcm]] debe desplazarse hacia la masa mayor. El punto medio ignora la ponderacion por masa.

**Senal de deteccion**
El resultado queda exactamente entre [[x1]] y [[x2]] aunque una de las masas sea claramente mayor.

**Correccion conceptual**
Compara primero las masas y predice hacia que posicion debe desplazarse el centro.

**Mini-ejemplo**
Si [[m2]] triplica a [[m1]], [[xcm]] debe quedar mas cerca de [[x2]] que de [[x1]].

### Error 2: creer que el centro de masas debe estar ocupado por material

**Por que parece correcto**
El resultado es una posicion concreta y puede imaginarse como si fuera una particula.

**Por que es incorrecto**
El centro de masas es una posicion representativa del sistema. Puede quedar en un punto vacio entre dos cuerpos.

**Senal de deteccion**
Se rechaza un resultado solo porque no coincide con ningun objeto real.

**Correccion conceptual**
Interpreta [[xcm]] como punto colectivo, no como una masa adicional.

**Mini-ejemplo**
Dos masas separadas pueden tener su centro de masas en el espacio entre ambas.

## Errores de modelo

### Error 3: no definir que cuerpos pertenecen al sistema

**Por que parece correcto**
Puede parecer que el centro de masas depende solo de los objetos dibujados.

**Por que es incorrecto**
La masa total [[M]] cambia si se incluye o excluye una parte. Cambiar el sistema cambia [[xcm]].

**Senal de deteccion**
Una masa aparece en el dibujo, pero no se suma en [[M]].

**Correccion conceptual**
Antes de calcular, escribe una frontera clara del sistema.

**Mini-ejemplo**
Si una bateria esta sobre una tabla y la tabla tiene masa relevante, ignorarla cambia el centro de masas del conjunto.

### Error 4: mezclar origenes de posicion

**Por que parece correcto**
Cada posicion puede estar bien medida de forma aislada.

**Por que es incorrecto**
La definicion solo compara posiciones que comparten origen y sentido positivo.

**Senal de deteccion**
[[x1]] se mide desde un extremo y [[x2]] desde otro.

**Correccion conceptual**
Reescribe todas las posiciones en un unico eje antes de usar la formula.

**Mini-ejemplo**
Una posicion de 20 cm desde la izquierda y otra de 20 cm desde la derecha no se pueden promediar sin convertirlas al mismo origen.

## Errores matematicos

### Error 5: usar una diferencia de masas como denominador

**Por que parece correcto**
En otros temas aparecen restas y puede copiarse el patron algebraico.

**Por que es incorrecto**
La masa total [[M]] es una suma de contribuciones positivas, no una diferencia.

**Senal de deteccion**
[[M]] queda menor que [[m1]] o que [[m2]] aunque ambas masas sean positivas.

**Correccion conceptual**
Calcula [[M]] con la suma registrada antes de sustituir en [[xcm]].

**Mini-ejemplo**
Para masas de 2 kg y 6 kg, la masa total es 8 kg, no 4 kg.

### Error 6: confundir [[Mxcm]] con una posicion

**Por que parece correcto**
El simbolo contiene [[xcm]] y puede parecer que representa la misma magnitud.

**Por que es incorrecto**
[[Mxcm]] tiene dimension de masa por longitud. Es una relacion estructural, no una coordenada.

**Senal de deteccion**
Se escribe [[Mxcm]] con unidades de metros.

**Correccion conceptual**
Divide por [[M]] para obtener la posicion [[xcm]].

**Mini-ejemplo**
24 kg m no es una posicion; si [[M]] = 8 kg, entonces [[xcm]] = 3 m.

## Errores de interpretacion

### Error 7: no comprobar el intervalo fisico

**Por que parece correcto**
Tras sustituir numeros, el procedimiento parece terminado.

**Por que es incorrecto**
Con masas positivas, [[xcm]] debe quedar entre [[x1]] y [[x2]].

**Senal de deteccion**
Las posiciones estan entre 0 m y 4 m, pero el resultado sale en 6 m.

**Correccion conceptual**
Haz siempre una comprobacion de rango antes de aceptar el resultado.

**Mini-ejemplo**
Si ambas masas son positivas y estan en 0 m y 4 m, el centro no puede quedar en 5 m.

### Error 8: perder la lectura vectorial general

**Por que parece correcto**
El primer ejemplo suele ser unidimensional y usa solo [[xcm]].

**Por que es incorrecto**
La definicion general usa [[m_i]], [[r_i]] y [[rcm]] cuando el sistema tiene mas particulas o varias dimensiones.

**Senal de deteccion**
Un problema plano se intenta resolver con una sola coordenada sin justificarlo.

**Correccion conceptual**
Usa la forma vectorial si las posiciones no estan todas sobre un mismo eje.

**Mini-ejemplo**
Tres masas en una mesa necesitan dos componentes para localizar [[rcm]], no solo una coordenada horizontal.

## Regla de autocontrol rapido

Antes de cerrar un ejercicio, comprueba cinco puntos: el sistema esta definido, las posiciones usan un marco comun, [[M]] es la suma de masas, [[xcm]] tiene unidades de longitud y el resultado se desplaza hacia las masas mayores.
