# Sistemas Con Muelles

## Idea clave
Varios muelles pueden reemplazarse por un muelle equivalente \(k_{eq}\) si la conexion es identificable (serie o paralelo). Esto simplifica el analisis dinamico sin perder informacion esencial del sistema.

## 1- Que problema resuelve este tema
Cuando aparecen varios muelles en el mismo problema, resolver cada deformacion por separado puede ser largo y confuso.

La idea central es construir un modelo equivalente que conserve la relacion global entre fuerza y deformacion:

$$
F = k_{eq}x
$$

Con ese paso, muchos problemas complejos se vuelven abordables con la ley de Hooke basica.

## 2- Recordatorio minimo de Hooke
Para un muelle ideal en 1D:

$$
F_x = -kx
$$

En modulo:

$$
|F|=k|x|
$$

En sistemas de varios muelles, la dificultad no suele ser Hooke en si, sino identificar correctamente como se conectan.

## 3- Conexion en paralelo
En paralelo, los muelles tienen la misma deformacion:

$$
x_1=x_2=\cdots=x
$$

La fuerza total es suma de fuerzas:

$$
F=F_1+F_2+\cdots
$$

Como \(F_i=k_i x\):

$$
F=(k_1+k_2+\cdots)x
$$

Por tanto:

$$
k_{eq}=k_1+k_2+\cdots
$$

Interpretacion: el sistema se vuelve mas rigido.

## 4- Conexion en serie
En serie, la fuerza transmitida es la misma en todos los muelles:

$$
F_1=F_2=\cdots=F
$$

La deformacion total se suma:

$$
x=x_1+x_2+\cdots
$$

Con \(x_i=F/k_i\):

$$
x=F\left(\frac{1}{k_1}+\frac{1}{k_2}+\cdots\right)
$$

Comparando con \(F=k_{eq}x\):

$$
\frac{1}{k_{eq}}=\frac{1}{k_1}+\frac{1}{k_2}+\cdots
$$

Para dos muelles:

$$
k_{eq}=\frac{k_1k_2}{k_1+k_2}
$$

Interpretacion: el sistema cede mas (menor rigidez).

## 5- Reparto interno en serie y paralelo
Serie:
- misma fuerza en cada muelle,
- se deforma mas el de menor \(k\):

$$
x_i=\frac{F}{k_i}
$$

Paralelo:
- misma deformacion en cada muelle,
- soporta mas fuerza el de mayor \(k\):

$$
F_i=k_i x
$$

## 6- Equilibrio vertical con muelle equivalente
Si una masa \(m\) queda en reposo colgando:

$$
k_{eq}x = mg
$$

$$
x=\frac{mg}{k_{eq}}
$$

Esta expresion permite comparar rapidamente cuanto se alarga cada configuracion para la misma masa.

## 7- Metodo de resolucion recomendado
1. Dibuja esquema mecanico.
2. Identifica tramos serie y paralelo.
3. Reduce por etapas hasta obtener \(k_{eq}\).
4. Aplica equilibrio o dinamica global.
5. Si piden reparto interno, vuelve atras usando condiciones de serie/paralelo.
6. Verifica unidades y orden de magnitud.

## 8- Ejemplo guiado
Dos muelles \(k_1=200\ \text{N/m}\), \(k_2=300\ \text{N/m}\), masa \(m=5\ \text{kg}\).

Caso paralelo:

$$
k_{eq}=200+300=500\ \text{N/m}
$$

$$
x=\frac{mg}{k_{eq}}=\frac{5\cdot 9.81}{500}=0.0981\ \text{m}
$$

Caso serie:

$$
k_{eq}=\frac{200\cdot 300}{200+300}=120\ \text{N/m}
$$

$$
x=\frac{5\cdot 9.81}{120}=0.40875\ \text{m}
$$

Interpretacion: en serie el alargamiento es mucho mayor, coherente con menor rigidez equivalente.

## 9- Errores tipicos
- Sumar \(k\) en serie por inercia.
- Invertir formula de paralelo.
- Mezclar condiciones de reparto (fuerza igual vs deformacion igual).
- No reducir por etapas en redes mixtas.
- Usar \(k_{eq}\) sin comprobar topologia real de conexiones.

## 10- Sintesis final
Dominar sistemas con muelles consiste en identificar correctamente serie/paralelo y traducir esa topologia en \(k_{eq}\). Con ese paso, equilibrio y dinamica de sistemas elastico-mecanicos se vuelven resolubles de forma sistematica.

