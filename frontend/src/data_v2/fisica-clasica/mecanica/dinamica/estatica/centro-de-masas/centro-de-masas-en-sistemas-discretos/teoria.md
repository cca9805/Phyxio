# Centro De Masas En Sistemas Discretos

## Idea clave
En un sistema discreto, el centro de masas se obtiene sumando contribuciones \(m_i x_i\), \(m_i y_i\), etc., y dividiendo por la masa total.

## 1- Que estudia exactamente este subtema
Aqui pasas de la definicion general a calculo operativo:
- sistemas con 2, 3 o mas particulas,
- en 1D, 2D y extension a 3D.

## 2- Mecanismo fisico detras de la formula
Cada particula aporta al centro de masas segun:
- su masa,
- y su distancia al origen.

Una masa grande lejos del origen puede dominar el resultado mas que varias masas pequenas cercanas.

## 3- Magnitudes y notacion
- \(m_i\): masa i.
- \(x_i,y_i,z_i\): coordenadas de la particula i.
- \(M=\sum m_i\): masa total.
- \(x_{CM},y_{CM},z_{CM}\): coordenadas del centro de masas.

## 4- Formulas de trabajo
Forma general discreta:

$$
\vec r_{CM}=\frac{1}{M}\sum_i m_i\vec r_i
$$

Componentes:

$$
x_{CM}=\frac{\sum_i m_i x_i}{M},\qquad
y_{CM}=\frac{\sum_i m_i y_i}{M},\qquad
z_{CM}=\frac{\sum_i m_i z_i}{M}
$$

con:

$$
M=\sum_i m_i
$$

## 5- Interpretacion fisica que debes entrenar
- si mueves una masa grande, el centro de masas se desplaza mucho.
- si mueves una masa pequena, el desplazamiento del centro de masas es menor.
- si dos masas iguales se mueven de forma simetrica, el centro puede quedarse fijo.

## 6- Metodo de resolucion robusto
1. Elige origen y ejes con criterio.
2. Crea tabla con columnas \(m_i,x_i,y_i\) y productos \(m_i x_i\), \(m_i y_i\).
3. Suma masas y productos por separado.
4. Divide cada suma de productos por \(M\).
5. Verifica signo y ubicacion del resultado.

## 7- Errores tipicos
- dividir \(x_{CM}\) por una masa distinta de \(M\).
- usar denominadores diferentes en x e y.
- olvidar alguna particula en una de las sumas.
- perder signo en coordenadas negativas.
- mezclar cm y m.

## 8- Ejemplo completo en 2D
Datos:
\(m_1=2\ \text{kg}, (x_1,y_1)=(-3,1)\),
\(m_2=4\ \text{kg}, (x_2,y_2)=(2,5)\),
\(m_3=1\ \text{kg}, (x_3,y_3)=(6,-2)\).

Paso 1. Masa total:

$$
M=2+4+1=7\ \text{kg}
$$

Paso 2. Coordenada x:

$$
x_{CM}=\frac{2(-3)+4(2)+1(6)}{7}
=\frac{-6+8+6}{7}
=\frac{8}{7}\approx 1.14\ \text{m}
$$

Paso 3. Coordenada y:

$$
y_{CM}=\frac{2(1)+4(5)+1(-2)}{7}
=\frac{2+20-2}{7}
=\frac{20}{7}\approx 2.86\ \text{m}
$$

## 9- Aplicaciones reales
- baricentro en sistemas mecanicos.
- seguimiento de movimiento global en biomecanica.
- modelado de satelites y sistemas de masas puntuales.
- simplificacion dinamica en simulaciones.

## 10- Sintesis final
Dominar este subtema es dominar el calculo por componentes con criterio fisico: no solo obtener el numero, sino entender que masa esta gobernando el resultado.
