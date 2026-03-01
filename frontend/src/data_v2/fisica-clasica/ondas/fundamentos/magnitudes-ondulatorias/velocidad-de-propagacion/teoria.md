# Velocidad De Propagacion

## Idea clave
La velocidad de propagacion \(v\) indica cuan rapido avanza la perturbacion en el medio. No describe la velocidad de una particula del medio, sino la del patron ondulatorio.

## 1- Que estudia este tema y por que importa
Este tema responde a una pregunta central: de que depende la rapidez con la que una onda recorre el espacio?

La respuesta correcta evita errores muy comunes:
- confundir velocidad de propagacion con velocidad de oscilacion local,
- pensar que siempre depende de la amplitud,
- aplicar la misma formula en cualquier medio.

## 2- Significado fisico de la velocidad de propagacion
En una onda, cada elemento del medio transmite la perturbacion al vecino por fuerzas restauradoras.
Ese mecanismo fija \(v\).

- Cuerda: tension y densidad lineal controlan \(v\).
- Fluido: compresibilidad y densidad controlan \(v\).
- Onda EM: permitividad y permeabilidad del medio controlan \(v\).

Regla importante:
- en regimen lineal, \(v\) depende del medio,
- no depende directamente de la amplitud.

## 3- Magnitudes que debes dominar
- \(v\): velocidad de propagacion (m/s).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(\omega\): frecuencia angular (rad/s).
- \(k\): numero de onda (rad/m).
- \(F_t\): tension en cuerda (N).
- \(\mu_l\): densidad lineal (kg/m).
- \(B\): modulo volumetrico (Pa).
- \(\rho\): densidad (kg/m^3).
- \(c\): velocidad de la luz en vacio (m/s).
- \(n\): indice de refraccion (adimensional).

## 4- Formulas esenciales y lectura fisica
Relacion espacio-tiempo de onda:

$$
v=\lambda f
$$

Con periodo:

$$
v=\frac{\lambda}{T}
$$

Con descripcion angular (velocidad de fase):

$$
v=\frac{\omega}{k}
$$

En cuerda ideal:

$$
v=\sqrt{\frac{F_t}{\mu_l}}
$$

En fluido compresible:

$$
v=\sqrt{\frac{B}{\rho}}
$$

En medio optico no dispersivo simple:

$$
v=\frac{c}{n}
$$

Lectura fisica clave:
- mas rigidez efectiva del medio \(\Rightarrow\) mayor \(v\),
- mas inercia del medio \(\Rightarrow\) menor \(v\).

## 5- Modelo y condiciones de validez
Este bloque usa modelo lineal de propagacion.

Aplica bien cuando:
- el medio se puede caracterizar por parametros efectivos,
- no dominan no linealidades,
- la onda mantiene fase interpretable.

En dispersion fuerte, atenuacion alta o medios complejos, una sola \(v\) puede no describir todo el fenomeno.

## 6- Metodo de resolucion paso a paso
1. Identifica el medio fisico y la magnitud pedida.
2. Elige la ecuacion de velocidad compatible con ese medio.
3. Conecta con \(\lambda\), \(f\), \(T\), \(\omega\) o \(k\) si hace falta.
4. Despeja en simbolico.
5. Sustituye en SI.
6. Verifica unidad y orden de magnitud.
7. Interpreta el resultado en lenguaje fisico.

## 7- Errores frecuentes
- usar formula de cuerda en problemas de fluido.
- confundir \(\mu_l\) con \(\rho\).
- mezclar Hz y rad/s sin conversion.
- creer que cambiar amplitud cambia \(v\) en regimen lineal.
- no justificar el modelo del medio antes de calcular.

## 8- Ejemplo guiado completo
Problema: cuerda con \(F_t=100\ \mathrm{N}\), \(\mu_l=0.004\ \mathrm{kg/m}\), frecuencia \(f=50\ \mathrm{Hz}\).

Paso 1. Velocidad en cuerda:

$$
v=\sqrt{\frac{F_t}{\mu_l}}=\sqrt{\frac{100}{0.004}}\approx 158.1\ \mathrm{m/s}
$$

Paso 2. Longitud de onda:

$$
\lambda=\frac{v}{f}=\frac{158.1}{50}\approx 3.16\ \mathrm{m}
$$

Interpretacion:
- aumentar tension aumenta \(v\),
- aumentar densidad lineal reduce \(v\).

## 9- Aplicaciones reales
- vibraciones en cuerdas e instrumentos.
- acustica en aire y agua.
- sismologia y propagacion en materiales.
- telecomunicaciones y medios opticos.
- diagnostico por ultrasonidos.

## 10- Sintesis final
Dominar velocidad de propagacion significa:
- saber de que depende \(v\) en cada medio,
- elegir la formula correcta segun modelo fisico,
- resolver con unidades y validez,
- interpretar el resultado mas alla del numero.
