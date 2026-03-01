# Oscilador armonico

## Idea clave
El oscilador armonico es el laboratorio minimo para entender vibraciones, conservacion de energia y equivalencia entre formulaciones dinamicas.

## Recorrido de aprendizaje (de principio a fin)
- Partes de la ley elastica lineal F = -kx.
- Construyes L y obtienes ecuacion de movimiento.
- Relacionas parametros fisicos con frecuencia y periodo.
- Interpretas la solucion en tiempo y espacio fase.

## Variables y parametros
- m: masa oscilante.
- k: constante elastica.
- q: desplazamiento respecto al equilibrio.
- A: amplitud de oscilacion.
- omega, T: frecuencia angular y periodo.

## Ecuaciones fundamentales

$$
\omega = \sqrt{\frac{k}{m}}
$$

$$
T = \frac{2\pi}{\omega}
$$

$$
q(t) = A\cos(\omega t + \phi)
$$

$$
E = \frac{1}{2}kA^2
$$

## Intuicion fisica
- Mayor k implica oscilacion mas rapida; mayor m implica oscilacion mas lenta.
- La energia total se conserva y se reparte entre terminos cinetico y potencial.
- La linealidad hace que frecuencia no dependa de la amplitud ideal.

## Metodo de resolucion paso a paso
1. Define m, k y condiciones iniciales.
2. Calcula omega y periodo.
3. Escribe q(t) con amplitud y fase adecuadas.
4. Obten energia total y verifica conservacion.
5. Compara la solucion con la grafica temporal para validar.

## Errores frecuentes
- Usar unidades inconsistentes en k (N/m) y m (kg).
- Confundir frecuencia en Hz con frecuencia angular en rad/s.
- Asumir amortiguamiento cero en situaciones donde no aplica.

## Conexion con otros temas
- Base de vibraciones mecanicas, circuitos y ondas.
- Ejemplo canonico para Hamilton y retratos de fase elipticos.
- Aproximacion local de muchos sistemas no lineales cerca del equilibrio.

## Que es calculable y que no (en Phyxio)
- Calculable: omega, periodo y energia total.
- En graficas: desplazamiento y magnitudes conjugadas en modo coordinado y SVG.
- No cubre: oscilador forzado-amortiguado completo en este Tema.
