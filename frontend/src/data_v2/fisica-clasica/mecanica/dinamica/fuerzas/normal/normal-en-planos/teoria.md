# Normal En Planos

## Idea clave
La fuerza normal es la reaccion de contacto de una superficie sobre un cuerpo. Siempre es perpendicular a la superficie y su valor depende de como el cuerpo "presiona" el plano.

## 1- Que estudia este tema y por que es esencial
Este tema responde una duda clasica: la normal siempre vale \(mg\)

La respuesta es no. Solo en condiciones concretas (plano horizontal simple sin otras fuerzas verticales). En general, la normal se obtiene con ecuaciones de dinamica por el eje perpendicular al plano.

## 2- Definicion fisica correcta
La normal es una fuerza de contacto:
- existe solo si hay contacto,
- apunta perpendicular al plano de apoyo,
- desaparece si se pierde contacto.

Si no hay contacto:

$$
N=0
$$

No es una fuerza "de movimiento", ni una propiedad intrinseca del objeto.

## 3- Diferencia entre peso y normal
Peso:

$$
\vec P = m\vec g
$$

- lo ejerce la Tierra sobre el cuerpo,
- apunta hacia el centro terrestre.

Normal:
- la ejerce la superficie sobre el cuerpo,
- es perpendicular al plano.

Pueden compensarse en algunos casos, pero no son la misma fuerza.

## 4- Caso base: plano horizontal
Si no hay aceleracion vertical:

$$
\sum F_y = N - mg = 0
$$

entonces:

$$
N=mg
$$

Este resultado no es universal; depende de las fuerzas presentes y del eje elegido.

## 5- Plano inclinado sin fuerzas adicionales
Si eliges ejes paralelo y perpendicular al plano, la componente perpendicular del peso es:

$$
P_{\perp}=mg\cos\theta
$$

Si no hay aceleracion perpendicular:

$$
\sum F_{\perp}=N-mg\cos\theta=0
$$

por tanto:

$$
N=mg\cos\theta
$$

Consecuencia: al aumentar \(\theta\), disminuye \(N\).

## 6- Caso con fuerza externa sobre el plano
Si hay una fuerza \(F\) que empuja al cuerpo hacia el plano, su componente perpendicular aumenta la normal.

Esquema tipico:

$$
N = mg\cos\theta + F_{\perp,\text{hacia el plano}}
$$

Si la fuerza tira alejando del plano, resta en la normal. Por eso nunca conviene memorizar "N=mgcos(theta)" sin analizar contexto.

## 7- Conexion directa con rozamiento
El rozamiento depende de \(N\):

$$
f_k=\mu_k N,\quad f_s\le \mu_s N
$$

Si calculas mal la normal, todo el problema de rozamiento queda mal. En la practica, la ecuacion perpendicular suele resolverse primero precisamente por esto.

## 8- Metodo de resolucion recomendado
1. Dibuja DCL correcto.
2. Elige ejes adaptados al plano.
3. Descompone el peso y cualquier fuerza oblicua.
4. Plantea ecuacion perpendicular.
5. Despeja \(N\).
6. Usa \(N\) en ecuaciones de rozamiento o en equilibrio/dinamica paralela.

## 9- Errores tipicos
- Suponer siempre \(N=mg\).
- Dibujar normal vertical en plano inclinado.
- Olvidar componentes perpendiculares de fuerzas aplicadas.
- Usar rozamiento antes de hallar bien \(N\).
- Confundir par accion-reaccion de la normal en un mismo DCL.

## 10- Sintesis final
La normal no se adivina, se calcula desde el eje perpendicular y el contexto fisico real. Entender esto mejora de forma inmediata la resolucion de planos inclinados, rozamiento y problemas mixtos de dinamica.

