# Planos Inclinados

## Idea clave
El plano inclinado reduce la fuerza necesaria para elevar una carga porque redistribuye el peso entre una componente paralela (que mueve) y otra perpendicular (que comprime).

## 1- Que estudia este subtema y por que importa
Este subtema te entrena en uno de los modelos base de dinamica: elegir ejes utiles, proyectar fuerzas y decidir si el bloque acelera, se frena o queda en equilibrio.

## 2- Imagen fisica correcta
Si eliges ejes paralelo y perpendicular al plano:
- la componente paralela del peso impulsa o frena el movimiento segun el eje elegido,
- la componente perpendicular determina la normal y por tanto el rozamiento.

## 3- Magnitudes que debes identificar
- m: masa (kg).
- g: gravedad (m/s^2).
- theta: angulo del plano.
- N: fuerza normal (N).
- W_par: componente paralela del peso (N).
- W_perp: componente perpendicular del peso (N).
- mu: coeficiente de rozamiento.
- f: fuerza de rozamiento (N).
- F_net: fuerza neta sobre el eje del plano (N).
- a: aceleracion (m/s^2).

## 4- Descomposicion del peso

$$
W_{\parallel}=mg\sin\theta
$$

$$
W_{\perp}=mg\cos\theta
$$

## 5- Caso ideal sin rozamiento

$$
a = g\sin\theta
$$

Interpretacion: al aumentar theta, aumenta la componente que arrastra y por tanto la aceleracion.

## 6- Caso real con rozamiento
Normal:

$$
N=mg\cos\theta
$$

Rozamiento (modelo simple):

$$
f=\mu N
$$

Fuerza neta en eje del plano (si tomas positivo hacia abajo):

$$
F_{net}=mg\sin\theta-\mu mg\cos\theta
$$

Aceleracion:

$$
a=g(\sin\theta-\mu\cos\theta)
$$

## 7- Que significa el signo de a
- a > 0: el bloque acelera en el sentido positivo elegido.
- a = 0: equilibrio dinamico limite.
- a < 0: el rozamiento y/o otras fuerzas dominan en sentido opuesto.

## 8- Metodo de resolucion recomendado
1. Define ejes alineados con el plano.
2. Dibuja DCL completo.
3. Proyecta cada fuerza con signo coherente.
4. Escribe segunda ley en el eje paralelo.
5. Despeja y verifica unidades.
6. Interpreta fisicamente el signo y magnitud de a.

## 9- Ejemplo guiado
m=12 kg, g=9.8 m/s^2, theta=30 deg, mu=0.25.

$$
a=9.8(\sin30^\circ-0.25\cos30^\circ)
$$

$$
a=9.8(0.5-0.25\cdot0.866)=9.8(0.2835)\approx2.78\ \text{m/s}^2
$$

Interpretacion: el bloque baja acelerando, pero mucho menos que en el caso sin rozamiento.

## 10- Sintesis final
Dominar planos inclinados es dominar proyecciones y signos. Si estructuras bien el DCL y las componentes, el resto del problema se vuelve directo y robusto.
