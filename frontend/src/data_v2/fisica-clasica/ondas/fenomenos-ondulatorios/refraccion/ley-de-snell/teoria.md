# Ley De Snell

## Idea clave
La ley de Snell relaciona los angulos de incidencia y refraccion con las propiedades de los medios. Explica por que una onda cambia de direccion al cruzar una interfaz, aunque su frecuencia se mantenga.

## 1- Que estudia este tema y por que es fundamental
Este tema estudia la refraccion en interfaces entre medios distintos.

Es fundamental porque aparece en:
- lentes y sistemas opticos,
- fibras opticas,
- propagacion acustica en capas,
- ultrasonidos en interfaces de materiales.

Sin Snell, puedes calcular mal trayectorias, focos y condiciones de transmision.

## 2- Mecanismo fisico de la refraccion
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

Al cruzar una interfaz:
- la frecuencia f se conserva,
- cambia la velocidad de fase v segun el medio,
- por tanto cambia la longitud de onda lambda,
- y se ajusta la direccion para cumplir compatibilidad de fase en frontera.

Esa compatibilidad es la raiz fisica de la ley de Snell.

## 3- Magnitudes y parametros que debes identificar siempre
- n1, n2: indices efectivos de refraccion de medio 1 y 2 (1).
- theta1: angulo de incidencia respecto a la normal.
- theta2: angulo de refraccion respecto a la normal.
- v1, v2: velocidades de propagacion en cada medio (m/s).
- lambda1, lambda2: longitudes de onda en cada medio (m).
- f: frecuencia (Hz), se conserva al cruzar interfaz.
- theta_c: angulo critico para reflexion interna total (si n1>n2).

## 4- Formulas esenciales y lectura fisica
Ley de Snell:

$$
n_1\sin\theta_1=n_2\sin\theta_2
$$

Forma angular para theta2:

$$
\theta_2=\arcsin\!\left(\frac{n_1}{n_2}\sin\theta_1\right)
$$

Relacion con velocidades:

$$
\frac{\sin\theta_1}{\sin\theta_2}=\frac{v_1}{v_2}
$$

Relacion con longitudes de onda:

$$
\frac{\sin\theta_1}{\sin\theta_2}=\frac{\lambda_1}{\lambda_2}
$$

Conservacion de frecuencia:

$$
f_1=f_2=f
$$

Angulo critico (solo si n1>n2):

$$
\theta_c=\arcsin\!\left(\frac{n_2}{n_1}\right)
$$

Lectura fisica importante:
- si n2>n1 la onda se acerca a la normal,
- si n2<n1 la onda se aleja de la normal,
- para theta1>theta_c (con n1>n2) no hay transmision propagante: aparece reflexion interna total.

## 5- Nota conceptual importante
Snell determina direccion, no intensidad transmitida. Para amplitud y energia necesitas coeficientes de frontera (Fresnel o impedancias segun el caso).

## 6- Dominio de validez del modelo
Snell basico es valido cuando:
- interfaz bien definida,
- medios homogeneos cerca de la frontera,
- regimen lineal,
- propagacion geometrica (sin efectos dominantes de difraccion local).

Si hay gradientes continuos fuertes, anisotropia, dispersion angular compleja o conversion modal, se requieren modelos extendidos.

## 7- Metodo de resolucion recomendado
1- Dibuja interfaz y normal.
2- Expresa todos los angulos respecto a la normal.
3- Identifica n1, n2 (o v1, v2).
4- Aplica Snell y despeja theta2.
5- Verifica que |sin(theta2)|<=1.
6- Si n1>n2, calcula theta_c y compara.
7- Interpreta fisicamente el resultado (hacia/desde normal, posible RIT).

## 8- Errores tipicos que debes evitar
- medir angulos respecto a la superficie en vez de la normal.
- mezclar grados/radianes en funciones trigonometricas.
- pensar que frecuencia cambia al refractarse.
- usar formula de angulo critico cuando n1<=n2.
- concluir transmision cuando el argumento del arcsin supera 1.

## 9- Ejemplo completo guiado
Datos:
- n1=1.00 (aire),
- n2=1.50 (vidrio),
- theta1=40 deg.

Paso 1- Snell:

$$
\sin\theta_2=\frac{n_1}{n_2}\sin\theta_1=\frac{1.00}{1.50}\sin40^\circ
$$

$$
\sin\theta_2\approx0.4285
$$

Paso 2- angulo refractado:

$$
\theta_2=\arcsin(0.4285)\approx25.4^\circ
$$

Interpretacion:
- al entrar en medio mas refringente (n mayor), el rayo se acerca a la normal.

Caso critico complementario:
si n1=1.50, n2=1.00,

$$
\theta_c=\arcsin\!\left(\frac{1.00}{1.50}\right)\approx41.8^\circ
$$

Para theta1>41.8 deg aparece reflexion interna total.

## 10- Sintesis final
Dominar la ley de Snell significa:
- predecir direccion de propagacion entre medios,
- conectar indices, velocidades y longitudes de onda,
- detectar cuando hay limite de transmision (angulo critico),
- resolver problemas de refraccion con criterio fisico y no solo algebraico.
