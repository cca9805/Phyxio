# Definicion De Torque

## Idea clave
El torque es la medida del efecto de giro de una fuerza respecto a un eje o punto. No basta saber cuanto vale la fuerza: importa donde actua y con que direccion.

## 1- Que problema conceptual resuelve este tema
En dinamica rotacional aparece una duda tipica:
- si aplico la misma fuerza, por que a veces el cuerpo gira mucho y otras casi nada

Este subtema responde exactamente a eso. Introduce la magnitud que conecta fuerza, geometria y rotacion: el torque.

## 2- Imagen fisica correcta: traslacion vs rotacion
Una fuerza puede producir:
- cambio de velocidad lineal (traslacion),
- cambio de estado de giro (rotacion),
- o ambas cosas a la vez.

El torque se centra solo en la parte rotacional.

Idea didactica clave:
- empujar una puerta cerca de la bisagra cuesta mas,
- empujar la misma puerta lejos de la bisagra cuesta menos.

La fuerza puede ser la misma, pero cambia el brazo de accion y por eso cambia el giro.

## 3- Definicion vectorial y significado
Definicion general respecto a un punto O:

$$
\vec{\tau}_O = \vec{r} \times \vec{F}
$$

Lectura fisica:
- \(\vec r\) va desde el eje al punto de aplicacion de la fuerza.
- \(\vec F\) es la fuerza aplicada.
- el producto vectorial fija direccion y sentido del torque.

Direccion:
- en 3D se usa la regla de la mano derecha,
- en 2D suele usarse antihorario positivo y horario negativo.

## 4- Modulo del torque y equivalencias utiles
Modulo del torque:

$$
\tau = rF\sin(\theta)
$$

Forma equivalente con brazo perpendicular \(d\):

$$
\tau = Fd
$$

con

$$
d = r\sin(\theta)
$$

Interpretacion:
- torque maximo cuando \(\theta = 90^\circ\),
- torque nulo cuando \(\theta = 0^\circ\) o la linea de accion pasa por el eje.

## 5- Que significa realmente "depende del eje"
El torque siempre se calcula respecto a un punto o eje elegido.

Consecuencia directa:
- la misma fuerza puede tener torque distinto si cambias el eje de referencia.

Por eso, en problemas formales, primer paso obligatorio:
- declarar explicitamente el eje de analisis.

## 6- Conexion con la segunda ley rotacional
El torque no se estudia aislado: es la causa dinamica del cambio de velocidad angular.

$$
\sum \tau = I\alpha
$$

Esto conecta tres ideas:
- causa: torque neto,
- respuesta: aceleracion angular,
- inercia al giro: momento de inercia \(I\).

## 7- Metodo minimo para analizar si una fuerza genera giro
1. Elige eje o punto de referencia.
2. Dibuja la linea de accion de la fuerza.
3. Calcula o visualiza brazo perpendicular \(d\).
4. Decide el sentido de giro con tu convencion.
5. Concluye: torque positivo, negativo o nulo.

## 8- Ejemplo conceptual guiado
Una puerta gira sobre una bisagra. Se aplica una fuerza horizontal de 30 N.

Caso A: fuerza a 0.9 m de la bisagra.

$$
\tau_A = Fd = 30\cdot 0.9 = 27\ \text{N m}
$$

Caso B: misma fuerza a 0.15 m de la bisagra.

$$
\tau_B = 30\cdot 0.15 = 4.5\ \text{N m}
$$

Conclusiones:
- mismo modulo de fuerza,
- torque 6 veces menor en el caso B,
- el giro depende fuertemente del brazo.

## 9- Errores conceptuales que bloquean el aprendizaje
- confundir torque con fuerza.
- usar distancia al eje en lugar de distancia perpendicular.
- olvidar definir el eje.
- tratar \(\tau = Fd\) como siempre positiva sin criterio de signo.
- mezclar 2D y 3D sin convencion clara.

## 10- Sintesis final
Si dominas la definicion de torque, ya puedes:
- leer fisicamente un diagrama de fuerzas rotacional,
- anticipar que fuerzas producen giro real,
- preparar el calculo formal de dinamica rotacional sin errores de base.
