# Interferencia Destructiva

## Idea clave
La interferencia destructiva ocurre cuando dos ondas llegan en oposicion de fase y reducen la amplitud resultante. En el caso ideal de amplitudes iguales, la anulacion local puede ser completa.

## 1- Que estudia este tema y por que es fundamental
Este tema estudia la condicion de minimo de amplitud en superposicion de ondas coherentes.

Es fundamental porque permite:
- predecir nodos y zonas de cancelacion,
- entender por que una senal puede caer casi a cero,
- disenar sistemas de supresion de ruido o rechazo de banda.

Sin esta base, es facil interpretar una caida de amplitud como perdida del emisor cuando en realidad es interferencia.

## 2- Mecanismo fisico de la cancelacion
La propagacion ocurre porque la deformacion local genera fuerzas restauradoras que transmiten la perturbacion al elemento vecino.

Cuando dos ondas coherentes llegan a un punto con desfase cercano a pi:
- una tiende a desplazar el medio en sentido opuesto a la otra,
- la suma instantanea de desplazamientos se reduce,
- la amplitud local disminuye (minimo destructivo).

En el limite ideal A1=A2 y delta_phi=(2m+1)pi:
- la anulacion local es total.

## 3- Magnitudes y parametros esenciales
- Delta: diferencia de camino (m).
- m: orden entero del minimo.
- lambda: longitud de onda (m).
- delta_phi: desfase relativo (rad).
- A1, A2: amplitudes individuales (m).
- Ares: amplitud resultante (m).
- I: intensidad local (W/m^2 o relativa).

## 4- Formulas esenciales y lectura fisica
Condicion destructiva por camino:

$$
\Delta=\left(m+\frac{1}{2}\right)\lambda
$$

Condicion destructiva por fase:

$$
\Delta\phi=(2m+1)\pi
$$

Relacion fase-camino:

$$
\Delta\phi=\frac{2\pi}{\lambda}\Delta
$$

Amplitud resultante general:

$$
A_{res}=\sqrt{A_1^2+A_2^2+2A_1A_2\cos\Delta\phi}
$$

En minima destructiva (delta_phi=(2m+1)pi):

$$
A_{res}=|A_1-A_2|
$$

Caso simetrico A1=A2=A:

$$
A_{res}=0
$$

Lectura fisica importante:
- destructiva no siempre implica anulacion total,
- la anulacion perfecta exige amplitudes iguales y fase opuesta exacta,
- minima amplitud implica minima intensidad local.

## 5- Nota conceptual importante
Interferencia destructiva no destruye energia globalmente. Redistribuye energia: donde hay minimos aparecen maximos en otras zonas del patron.

## 6- Dominio de validez del modelo
Valido cuando:
- fuentes coherentes,
- medio lineal,
- diferencias de camino bien definidas,
- estabilidad temporal de fase durante la observacion.

Si se pierde coherencia, desaparecen minimos estables.

## 7- Metodo de resolucion recomendado
1- Calcula Delta o delta_phi en el punto.
2- Comprueba condicion de minimo: Delta=(m+1/2)lambda o delta_phi=(2m+1)pi.
3- Calcula Ares con formula general.
4- Verifica si A1=A2 para anulacion total.
5- Estima intensidad relativa desde Ares^2.
6- Interpreta orden m y posicion del minimo.

## 8- Errores tipicos que debes evitar
- suponer cancelacion total sin verificar A1=A2.
- confundir minimo local con perdida total de energia del sistema.
- usar m no entero en condicion ideal.
- mezclar grados y radianes en fase.
- olvidar modulo en Ares=|A1-A2|.

## 9- Ejemplo completo guiado
Datos:
- lambda=0.40 m,
- Delta=1.00 m,
- A1=5 mm,
- A2=3 mm.

Paso 1- verificar condicion destructiva:

$$
\frac{\Delta}{\lambda}=\frac{1.00}{0.40}=2.5=2+0.5
$$

Es minimo destructivo con m=2.

Paso 2- desfase:

$$
\Delta\phi=\frac{2\pi}{0.40}(1.00)=5\pi
$$

Paso 3- amplitud resultante minima:

$$
A_{res}=|A_1-A_2|=|5-3|=2\ \text{mm}
$$

Interpretacion:
- hay cancelacion parcial,
- no es anulacion total porque amplitudes distintas,
- intensidad local muy reducida respecto a maximos.

## 10- Sintesis final
Dominar interferencia destructiva significa:
- identificar condiciones exactas de minimo,
- distinguir cancelacion parcial y total,
- interpretar caidas de amplitud con criterio fisico,
- resolver patrones de nodos sin confundirlos con ausencia de onda.
