# Ondas Estacionarias En Cuerdas

## Idea clave
Una onda estacionaria aparece por superposicion de dos ondas de igual frecuencia y amplitud que viajan en sentidos opuestos. El patron no "avanza" globalmente: forma nodos fijos y antinodos oscilantes.

## 1- Que estudia este tema y por que importa
Este tema explica por que en una cuerda con extremos fijos solo existen modos discretos de vibracion.

Es esencial para:
- entender resonancia en cuerdas,
- interpretar armonicos y timbre,
- resolver problemas de frecuencias modales.

## 2- Mecanismo fisico de formacion
La fuente genera una onda viajera; al reflejarse en el extremo, vuelve otra onda en sentido opuesto.
La superposicion produce un patron estacionario:
- nodos: puntos con desplazamiento nulo,
- antinodos: puntos con amplitud maxima.

Condiciones de frontera (extremos fijos):
- en x=0 y x=L, el desplazamiento siempre es cero.

Esto fuerza modos permitidos discretos.

## 3- Magnitudes que debes dominar
- \(n\): numero de modo (adimensional, entero positivo).
- \(L\): longitud vibrante de la cuerda (m).
- \(\lambda_n\): longitud de onda del modo n (m).
- \(f_n\): frecuencia del modo n (Hz).
- \(f_1\): frecuencia fundamental (Hz).
- \(v\): velocidad de propagacion en la cuerda (m/s).
- \(F_t\): tension (N).
- \(\mu_l\): densidad lineal (kg/m).
- \(k_n\): numero de onda modal (rad/m).
- \(\omega_n\): frecuencia angular modal (rad/s).

## 4- Formulas esenciales y lectura fisica
Condicion modal en cuerda fija-fija:

$$
\lambda_n=\frac{2L}{n}
$$

Frecuencia modal:

$$
f_n=\frac{nv}{2L}
$$

Frecuencia fundamental:

$$
f_1=\frac{v}{2L}
$$

Relacion armonica:

$$
f_n=nf_1
$$

Velocidad en cuerda tensa:

$$
v=\sqrt{\frac{F_t}{\mu_l}}
$$

Numero de onda modal:

$$
k_n=\frac{n\pi}{L}
$$

Frecuencia angular modal:

$$
\omega_n=2\pi f_n
$$

Perfil de onda estacionaria (modo n):

$$
y_n(x,t)=2A\sin\!\left(\frac{n\pi x}{L}\right)\cos(\omega_n t+\phi_0)
$$

## 5- Modelo y condiciones de validez
El modelo aplica cuando:
- la cuerda es aproximadamente homogenea,
- la tension es uniforme,
- hay oscilaciones pequenas (linealidad),
- los extremos pueden modelarse como fijos.

Limites del modelo:
- rigidez de cuerda no despreciable,
- amortiguamiento alto,
- condiciones de frontera no ideales,
- no linealidad por gran amplitud.

## 6- Metodo de resolucion paso a paso
1. Identifica el tipo de frontera (aqui fija-fija).
2. Determina la magnitud pedida (\(f_n\), \(\lambda_n\), \(f_1\), etc.).
3. Calcula \(v\) si hace falta con \(F_t\) y \(\mu_l\).
4. Aplica formulas modales con n entero.
5. Verifica unidades SI.
6. Interpreta fisicamente nodos, antinodos y armonicos.

## 7- Errores frecuentes
- usar n no entero en modos permitidos.
- confundir \(f_1\) con \(f_n\).
- olvidar que \(\lambda_n\) disminuye al subir n.
- usar formulas de cuerda libre cuando la cuerda es fija-fija.
- no revisar coherencia entre \(f_n\), \(v\) y \(L\).

## 8- Ejemplo guiado completo
Datos: \(L=0.65\ \mathrm{m}\), \(F_t=110\ \mathrm{N}\), \(\mu_l=0.005\ \mathrm{kg/m}\), modo \(n=3\).

Paso 1. Velocidad:

$$
v=\sqrt{\frac{110}{0.005}}\approx148.3\ \mathrm{m/s}
$$

Paso 2. Fundamental:

$$
f_1=\frac{v}{2L}=\frac{148.3}{1.30}\approx114.1\ \mathrm{Hz}
$$

Paso 3. Frecuencia del modo 3:

$$
f_3=3f_1\approx342.3\ \mathrm{Hz}
$$

Paso 4. Longitud de onda modal:

$$
\lambda_3=\frac{2L}{3}=\frac{1.30}{3}\approx0.433\ \mathrm{m}
$$

Interpretacion: el modo 3 presenta mas nodos y mayor frecuencia que la fundamental.

## 9- Aplicaciones reales
- afinacion y construccion de instrumentos,
- analisis modal de cables y cuerdas,
- diseno de experimentos de resonancia,
- interpretacion espectral de senales mecanicas.

## 10- Sintesis final
Dominar ondas estacionarias en cuerdas significa:
- reconocer condiciones de frontera,
- calcular modos permitidos,
- conectar tension/inercia con frecuencias modales,
- interpretar nodos, antinodos y armonicos con criterio fisico.

