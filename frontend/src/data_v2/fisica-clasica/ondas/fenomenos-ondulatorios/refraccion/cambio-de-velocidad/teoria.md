# Cambio De Velocidad

## Idea clave
Cuando una onda pasa de un medio a otro, su velocidad cambia porque cambian las propiedades del medio. La frecuencia se mantiene, por eso cambia la longitud de onda y puede cambiar la direccion de propagacion.

## 1- Que estudia este tema y por que es fundamental
Este tema estudia la parte dinamica de la refraccion: no solo hacia donde va la onda, sino con que rapidez avanza en cada medio.

Es fundamental porque permite:
- calcular tiempos de propagacion,
- estimar resolucion espacial (lambda),
- interpretar desviacion angular en Snell,
- elegir frecuencias y medios en diseno experimental.

## 2- Mecanismo fisico del cambio de velocidad
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

Al cruzar interfaz:
- la oscilacion temporal impuesta en frontera conserva f,
- el medio nuevo impone otra velocidad v,
- entonces lambda se reajusta por v=lambda*f,
- y la trayectoria se adapta por compatibilidad de fase (Snell).

Resumen dinamico:
- f no cambia,
- v cambia,
- lambda cambia,
- el angulo puede cambiar.

## 3- Magnitudes y parametros que debes identificar siempre
- v1: velocidad en medio 1 (m/s).
- v2: velocidad en medio 2 (m/s).
- n1, n2: indices efectivos (1).
- theta1, theta2: angulos respecto a la normal.
- lambda1, lambda2: longitudes de onda en cada medio (m).
- f: frecuencia (Hz), continua en frontera.
- t: tiempo de propagacion (s).
- x: distancia recorrida en cada medio (m).

## 4- Formulas esenciales y lectura fisica
Relacion indice-velocidad (optica clasica):

$$
n=\frac{c}{v}
$$

Cambio de velocidad entre medios:

$$
v_2=v_1\frac{n_1}{n_2}
$$

Conservacion de frecuencia:

$$
f_1=f_2=f
$$

Cambio de longitud de onda:

$$
\lambda_2=\lambda_1\frac{n_1}{n_2}
$$

Forma equivalente por velocidades:

$$
\lambda_2=\lambda_1\frac{v_2}{v_1}
$$

Conexion con Snell:

$$
\frac{\sin\theta_1}{\sin\theta_2}=\frac{v_1}{v_2}
$$

Tiempo de propagacion por tramo:

$$
t=\frac{x}{v}
$$

Lectura fisica importante:
- si n2>n1 entonces v2<v1 y lambda2<lambda1,
- si n2<n1 entonces v2>v1 y lambda2>lambda1,
- cambiar velocidad no implica cambiar frecuencia en la interfaz ideal.

## 5- Nota conceptual importante
Un error muy comun es pensar que una onda con mas frecuencia siempre viaja mas rapido. En medios lineales, la velocidad la fija el medio (y el regimen de dispersion), no la amplitud ni la frecuencia de forma universal.

## 6- Dominio de validez del modelo
Estas relaciones son validas cuando:
- interfaz bien definida,
- medios aproximadamente homogeneos en cada lado,
- regimen lineal,
- descripcion por velocidad de fase apropiada.

Si hay dispersion fuerte, anisotropia o gradientes continuos, v depende de frecuencia y direccion, y el modelo se amplia.

## 7- Metodo de resolucion recomendado
1- Identifica que magnitud cambia (v, lambda, angulo o tiempo).
2- Comprueba si tienes indices o velocidades.
3- Usa v2=v1*(n1/n2) o su forma inversa.
4- Usa f constante para pasar de v a lambda.
5- Si hay angulos, conecta con Snell.
6- Si hay trayectos, calcula tiempos por tramos.
7- Valida tendencia fisica del resultado.

## 8- Errores tipicos que debes evitar
- cambiar f al cruzar de medio.
- usar indices sin coherencia con el tipo de onda/modelo.
- mezclar velocidad de fase y de grupo sin indicarlo.
- aplicar Snell con angulos medidos desde superficie.
- no verificar orden de magnitud de v y lambda.

## 9- Ejemplo completo guiado
Datos:
- v1=3.0e8 m/s,
- n1=1.00,
- n2=1.50,
- lambda1=600 nm,
- x2=0.020 m.

Paso 1- velocidad en medio 2:

$$
v_2=v_1\frac{n_1}{n_2}=3.0\times10^8\frac{1.00}{1.50}=2.0\times10^8\ \mathrm{m/s}
$$

Paso 2- longitud de onda en medio 2:

$$
\lambda_2=\lambda_1\frac{n_1}{n_2}=600\ \mathrm{nm}\cdot\frac{1}{1.5}=400\ \mathrm{nm}
$$

Paso 3- tiempo de recorrido en medio 2:

$$
t_2=\frac{x_2}{v_2}=\frac{0.020}{2.0\times10^8}=1.0\times10^{-10}\ \mathrm{s}
$$

Interpretacion final:
- en medio mas refringente la onda avanza mas lenta,
- su longitud de onda disminuye,
- la frecuencia se mantiene.

## 10- Sintesis final
Dominar cambio de velocidad significa:
- separar claramente que cambia y que no cambia en interfaz,
- relacionar indices, velocidades y longitudes de onda,
- integrar direccion (Snell) y tiempos de propagacion,
- resolver problemas de refraccion con criterio fisico completo.
