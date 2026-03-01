# Ley De Hooke

## Idea clave
En regimen elastico lineal, un muelle ejerce una fuerza restauradora proporcional a su deformacion y de sentido opuesto:

$$
F_x = -kx
$$

## 1- Que explica esta ley y por que es importante
La ley de Hooke explica como responde un elemento elastico (muelle ideal) cuando lo estiras o comprimes.

Es clave porque conecta:
- geometria de deformacion (\(x\)),
- fuerza aplicada (\(F\)),
- energia almacenada (\(U_{el}\)),
en un modelo simple que aparece en dinamica, oscilaciones y energia.

## 2- Definicion de deformacion y referencia
La variable \(x\) se mide respecto a la longitud natural del muelle:

- \(x>0\): elongacion,
- \(x<0\): compresion,
- \(x=0\): posicion no deformada.

La fuerza elastica siempre intenta recuperar \(x=0\).

## 3- Forma matematica y significado del signo
Forma vectorial 1D:

$$
F_x = -kx
$$

Forma en modulo:

$$
|F| = k|x|
$$

El signo menos no es decorativo: codifica el caracter restaurador.
- si \(x>0\), \(F_x<0\),
- si \(x<0\), \(F_x>0\).

## 4- Constante elastica \(k\)
\(k\) mide rigidez del muelle:
- mayor \(k\): mas fuerza para la misma deformacion,
- menor \(k\): muelle mas blando.

Unidades:

$$
[k]=\text{N/m}
$$

Dimension de \(k\):

$$
[k]=\frac{[F]}{[x]}=\frac{\text{kg}\cdot\text{m/s}^2}{\text{m}}=\text{kg/s}^2
$$

## 5- Equilibrio en sistema peso-muelle vertical
Para masa \(m\) en reposo colgando de un muelle:

$$
\sum F_y=0
$$

$$
kx = mg
$$

$$
x_{eq}=\frac{mg}{k}
$$

Este \(x_{eq}\) es posicion de equilibrio estatico, no la posicion natural del muelle.

## 6- Conexion con energia potencial elastica
El muelle almacena energia:

$$
U_{el}=\frac{1}{2}kx^2
$$

Y la fuerza se recupera por derivada:

$$
F_x = -\frac{dU_{el}}{dx}
$$

Esto muestra coherencia entre dinamica y energia.

## 7- Dominio de validez del modelo
La ley de Hooke no vale siempre. Es una aproximacion lineal valida cuando:
- deformaciones pequenas,
- material en zona elastica,
- sin daño plastico.

Si superas limite elastico:
- aparece no linealidad,
- puede haber deformacion permanente,
- \(F\) deja de ser proporcional a \(x\).

## 8- Metodo de resolucion recomendado
1. Define referencia \(x=0\) (longitud natural o equilibrio, segun problema).
2. Fija eje y signos.
3. Escribe fuerza elastica con signo correcto.
4. Plantea segunda ley o equilibrio.
5. Despeja en simbolico.
6. Sustituye valores SI.
7. Interpreta si resultado representa elongacion o compresion.

## 9- Ejemplo guiado
Muelle con \(k=250\ \text{N/m}\), masa \(m=2\ \text{kg}\) en vertical y reposo.

$$
x_{eq}=\frac{mg}{k}=\frac{2\cdot 9.81}{250}=0.07848\ \text{m}
$$

Entonces:

$$
x_{eq}\approx 7.85\ \text{cm}
$$

Interpretacion: el muelle se alarga 7.85 cm respecto a su longitud natural para sostener la masa.

## 10- Errores tipicos y sintesis final
Errores frecuentes:
- olvidar el signo en \(F=-kx\),
- confundir posicion natural con posicion de equilibrio,
- usar Hooke fuera del rango lineal,
- mezclar unidades de \(k\), \(x\) y \(F\).

Sintesis:
La ley de Hooke modela de forma precisa y simple la respuesta elastica lineal. Dominarla exige controlar referencia, signos y validez fisica del modelo, no solo memorizar \(F=kx\).

