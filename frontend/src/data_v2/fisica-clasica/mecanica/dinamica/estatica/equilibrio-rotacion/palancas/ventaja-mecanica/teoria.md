# Ventaja Mecanica

## Idea clave
La ventaja mecanica mide cuanta carga puedes equilibrar por unidad de esfuerzo aplicado.

$$
VM = \frac{R}{P}
$$

No crea energia: solo transforma fuerza en recorrido (o viceversa).

## 1- Que se calcula y para que sirve
Con VM estimas rapidamente si un dispositivo favorece fuerza (\(VM>1\)) o favorece velocidad/recorrido (\(VM<1\)).

## 2- Conexion directa con brazos de palanca
En palanca ideal en equilibrio:

$$
P\,d_P = R\,d_R
$$

por tanto:

$$
VM = \frac{R}{P} = \frac{d_P}{d_R}
$$

La geometria determina la ventaja.

## 3- Lectura fisica correcta
- \(VM>1\): menos esfuerzo para mover mas carga, a costa de mayor recorrido del punto de aplicacion.
- \(VM=1\): intercambio neutro.
- \(VM<1\): se pierde fuerza pero se gana rapidez/precison de desplazamiento.

## 4- Relacion con trabajo y energia
En modelo ideal:

$$
W_{in}=W_{out}
$$

$$
P\,s_P = R\,s_R
$$

Si aumentas fuerza de salida, pagas con mayor desplazamiento de entrada.

## 5- Ventaja mecanica real
En sistemas reales hay perdidas. Se usa rendimiento:

$$
\eta = \frac{W_{out}}{W_{in}}, \qquad 0<\eta<1
$$

Una forma util de lectura:

$$
VM_{real}=\eta\,VM_{ideal}
$$

## 6- Metodo de resolucion
1- Identifica \(R, P, d_P, d_R\).
2- Decide si usas modelo ideal o real.
3- Plantea ecuacion principal y despeja.
4- Comprueba coherencia de unidades y orden de magnitud.
5- Interpreta fisicamente el resultado.

## 7- Ejemplo guiado ideal
Datos: \(d_P=0.90\,\mathrm{m}\), \(d_R=0.30\,\mathrm{m}\), \(R=450\,\mathrm{N}\).

$$
VM=\frac{d_P}{d_R}=\frac{0.90}{0.30}=3
$$

$$
P=\frac{R}{VM}=\frac{450}{3}=150\,\mathrm{N}
$$

## 8- Ejemplo con rendimiento
Si \(\eta=0.8\):

$$
VM_{real}=0.8\cdot 3=2.4
$$

$$
P_{real}=\frac{R}{VM_{real}}=\frac{450}{2.4}=187.5\,\mathrm{N}
$$

## 9- Errores frecuentes
- Confundir ventaja mecanica con rendimiento.
- Usar \(VM=d_R/d_P\) (inversion de cociente).
- Olvidar que VM ideal no incluye friccion.
- Interpretar \(VM>1\) como "energia gratis".

## 10- Sintesis final
La ventaja mecanica resume la eficiencia geometrica de la palanca. Entenderla bien permite pasar de intuicion a calculo robusto en cualquier sistema simple de equilibrio rotacional.