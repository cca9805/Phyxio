# Tension En Cuerdas Y Cables

## Idea clave
La tension es la fuerza transmitida por una cuerda o cable sometido a traccion. Siempre actua a lo largo de la cuerda y siempre tira del cuerpo, nunca lo empuja.

## 1- Que estudia este tema y por que es clave
Este tema explica como una fuerza aplicada en un punto puede transmitirse a otro mediante una cuerda o cable.

Es esencial porque aparece en:
- masas colgantes,
- poleas,
- sistemas de arrastre,
- equilibrio de cuerpos suspendidos.

Si no modelas bien la tension, el DCL queda mal y toda la dinamica falla.

## 2- Definicion fisica de tension
La tension no es "una propiedad del objeto". Es una interaccion:
- la cuerda tira del cuerpo,
- el cuerpo tira de la cuerda (accion-reaccion).

En un extremo del cuerpo, el vector tension apunta hacia el interior de la cuerda.

## 3- Modelo de cuerda ideal
En mecanica basica se asume:
- masa despreciable,
- inextensible,
- poleas ideales sin rozamiento ni inercia.

Bajo estas hipotesis, la magnitud de la tension es la misma en todos los puntos de una misma cuerda ideal.

Si alguna hipotesis no se cumple, la tension puede variar con posicion o tiempo.

## 4- Caso simple vertical en equilibrio
Masa \(m\) colgando en reposo:

$$
\sum F_y = 0
$$

$$
T - mg = 0
$$

$$
T = mg
$$

Importante: este resultado solo vale en equilibrio vertical simple.

## 5- Caso vertical acelerado
Si hay aceleracion vertical \(a\):

$$
\sum F_y = ma
$$

tomando eje positivo hacia arriba:

$$
T - mg = ma
$$

$$
T = m(g+a)
$$

Si \(a>0\) (acelera hacia arriba), \(T>mg\).  
Si \(a<0\) (acelera hacia abajo), \(T<mg\).

## 6- Sistema de dos masas (Atwood ideal)
Para \(m_2>m_1\):

$$
T-m_1g=m_1a
$$

$$
m_2g-T=m_2a
$$

De aqui:

$$
a=\frac{(m_2-m_1)g}{m_1+m_2}
$$

$$
T=\frac{2m_1m_2}{m_1+m_2}\,g
$$

Este ejemplo muestra que tension no tiene por que coincidir con el peso de ninguna masa.

## 7- Direccion, signos y DCL
Regla operativa en DCL:
- dibuja tension saliendo del punto de union y siguiendo la cuerda,
- evita invertir sentido por intuicion,
- usa ejes coherentes con movimiento esperado.

Error comun: poner tension "empujando" el cuerpo.

## 8- Cuerdas no ideales y nivel avanzado
Si la cuerda tiene masa apreciable, la tension no es uniforme.

En vertical, densidad lineal \(\lambda\):

$$
\frac{dT}{dy}=\lambda g
$$

Integrando:

$$
T(y)=\lambda gy + C
$$

Esto conecta con modelos continuos y resistencia de materiales.

## 9- Metodo de resolucion recomendado
1. Elige cuerpo o sistema.
2. Dibuja DCL de cada cuerpo.
3. Coloca tension segun geometria real de cuerda.
4. Plantea ecuaciones por ejes.
5. Resuelve aceleracion y tension en conjunto.
6. Verifica coherencia fisica (signo, unidades, orden de magnitud).

## 10- Sintesis final
La tension es una fuerza de transmision por traccion. En problemas basicos su valor se obtiene con Newton, no por memoria. Dominar su direccion en DCL y su acoplamiento con masas y poleas es clave para resolver dinamica de sistemas conectados.

