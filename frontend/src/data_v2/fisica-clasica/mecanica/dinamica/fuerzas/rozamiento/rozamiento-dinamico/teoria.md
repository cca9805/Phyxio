# Rozamiento Dinamico

## Idea clave
El rozamiento dinamico (cinetico) aparece cuando ya existe deslizamiento relativo entre superficies en contacto. Se opone a ese deslizamiento y transforma parte de la energia mecanica en calor.

## 1- Que estudia este tema y por que importa
Este tema responde dos preguntas clave:
- que fuerza aparece cuando un cuerpo ya desliza,
- como calcular su efecto en aceleracion y energia.

En la practica, es la fuerza que mas condiciona distancias de frenado, consumo energetico y comportamiento de sistemas reales con contacto.

## 2- Condicion de aparicion
El rozamiento dinamico actua si hay velocidad relativa tangencial distinta de cero en la interfaz de contacto:

$$
\vec v_{rel,t} \neq \vec 0
$$

Si no hay deslizamiento, corresponde primero evaluar rozamiento estatico.

## 3- Modelo clasico mas usado
En el modelo escolar:

$$
f_k = \mu_k N
$$

donde:
- \(f_k\): modulo del rozamiento dinamico,
- \(\mu_k\): coeficiente de rozamiento dinamico,
- \(N\): normal.

Direccion:
- paralela a la superficie,
- sentido opuesto al deslizamiento relativo.

## 4- Transicion estatico -> dinamico
Antes de deslizar:

$$
f_s \le \mu_s N
$$

El deslizamiento inicia cuando la fuerza tangencial requerida supera el maximo estatico:

$$
F_{tan,req} > \mu_s N
$$

Una vez inicia el deslizamiento, el modelo cambia a:

$$
f_k = \mu_k N
$$

Normalmente:

$$
\mu_k < \mu_s
$$

## 5- Como entra en la segunda ley
En un eje tangencial \(x\):

$$
\sum F_x = ma_x
$$

Si el movimiento relativo va en +x, el rozamiento dinamico va en -x:

$$
\sum F_x = F_{aplicada} - f_k
$$

El signo siempre se decide por sentido relativo de deslizamiento, no por una regla fija de dibujo.

## 6- Relacion con la normal y la geometria
Como \(f_k\) depende de \(N\), primero debes resolver \(N\) con el eje perpendicular.

Ejemplo en plano inclinado sin otras fuerzas perpendiculares:

$$
N = mg\cos\theta
$$

luego:

$$
f_k = \mu_k mg\cos\theta
$$

Por eso cambiar la inclinacion cambia indirectamente el rozamiento.

## 7- Conexion con trabajo y energia
El trabajo del rozamiento dinamico sobre desplazamiento \(d\) opuesto al movimiento es:

$$
W_{roz} = -f_k d
$$

Si \(f_k\) es constante:

$$
W_{roz} = -\mu_k N d
$$

Interpretacion: el rozamiento extrae energia mecanica util y la disipa.

## 8- Metodo de resolucion recomendado
1. Dibuja DCL.
2. Verifica que hay deslizamiento (si no, prueba estatico).
3. Resuelve \(N\) en eje perpendicular.
4. Calcula \(f_k=\mu_k N\).
5. Asigna sentido opuesto a \(\vec v_{rel,t}\).
6. Aplica segunda ley por ejes.
7. Si piden energia, usa \(W_{roz}=-f_k d\).

## 9- Ejemplo guiado
Bloque de \(m=8\,\text{kg}\) desliza en horizontal, \(\mu_k=0.25\), sin fuerza motriz.

Normal:

$$
N=mg=8\cdot 9.81=78.48\ \text{N}
$$

Rozamiento dinamico:

$$
f_k=\mu_k N=0.25\cdot 78.48=19.62\ \text{N}
$$

Eje del movimiento:

$$
\sum F_x = -f_k = ma
$$

$$
a = \frac{-19.62}{8} \approx -2.45\ \text{m/s}^2
$$

Interpretacion: desacelera por efecto del rozamiento.

## 10- Errores tipicos y sintesis final
Errores frecuentes:
- usar \(f_k\) cuando aun no hay deslizamiento,
- olvidar que el signo depende del deslizamiento relativo,
- calcular \(f_k\) sin resolver antes \(N\),
- confundir \(\mu_k\) con \(\mu_s\).

Sintesis:
El rozamiento dinamico se modela de forma simple, pero solo funciona bien si distingues correctamente fase estatica y fase de deslizamiento, y si mantienes coherencia de ejes, signos y energia.

