# Mecanicas

## Idea clave
Una onda mecanica solo existe si hay un medio material que pueda deformarse y recuperar su estado. La perturbacion avanza, pero la materia no se transporta de forma neta.

## 1- Que fenomeno estudia este tema
Este tema estudia como se propaga una perturbacion en cuerdas, fluidos y solidos.
Es la base para sonido, vibraciones, sismologia y ultrasonidos.

## 2- Base conceptual: que se mueve y que no se mueve
1. Movimiento local:
- cada elemento del medio oscila alrededor de su equilibrio.

2. Propagacion global:
- la deformacion local activa fuerzas restauradoras sobre el elemento vecino.
- esa cadena de fuerzas transmite energia y fase.

Consecuencia:
- hay transporte de energia,
- no hay transporte neto de masa con el frente ondulatorio.

## 3- Elementos del tema (identificacion correcta)
- \(v\): velocidad de propagacion (m/s).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(F_t\): tension en cuerda (N).
- \(\mu_l\): densidad lineal (kg/m).
- \(B\): modulo volumetrico en fluidos (Pa).
- \(\rho\): densidad del medio (kg/m^3).
- \(E\): modulo de Young en solidos (Pa).

## 4- Formulacion matematica minima (y que significa cada ecuacion)
$$
v=\lambda f
$$
Interpretacion:
- relacion comun entre escala espacial y temporal de la onda.

$$
T=\frac{1}{f}
$$
Interpretacion:
- frecuencia y periodo son inversos.

$$
v=\sqrt{\frac{F_t}{\mu_l}}
$$
Interpretacion:
- en cuerdas, mas tension aumenta velocidad y mas inercia lineal la reduce.

$$
v=\sqrt{\frac{B}{\rho}}
$$
Interpretacion:
- en fluidos, mayor rigidez efectiva aumenta velocidad y mayor densidad la reduce.

$$
v\approx\sqrt{\frac{E}{\rho}}
$$
Interpretacion:
- aproximacion util para ondas longitudinales en barras elasticas.

## 5- Cuando aplican estas relaciones (modelo y validez)
Estas ecuaciones funcionan bien cuando:
- el regimen es lineal,
- el medio se describe con parametros efectivos,
- la disipacion no domina.

Debes ajustar el modelo cuando hay no linealidad fuerte, dispersion dominante o fronteras complejas.

## 6- Metodo de resolucion para problemas de ondas mecanicas
1. Identifica el medio (cuerda, fluido, solido).
2. Elige la ecuacion de velocidad especifica de ese medio.
3. Conecta con \(v=\lambda f\) para hallar la variable faltante.
4. Despeja en simbolico y sustituye en SI.
5. Verifica unidades y orden de magnitud.
6. Interpreta el resultado en terminos de rigidez e inercia.

## 7- Errores frecuentes que bloquean el aprendizaje
- aplicar formula de cuerda a fluidos o solidos.
- confundir \(\mu_l\) (kg/m) con \(\rho\) (kg/m^3).
- mezclar Hz y rad/s sin convertir.
- creer que la materia viaja con la onda.

## 8- Ejemplo guia (de principio a fin)
Datos: \(F_t=120\ \mathrm{N}\), \(\mu_l=7.5\times10^{-3}\ \mathrm{kg/m}\), \(f=40\ \mathrm{Hz}\).

Paso 1. Velocidad:
$$
v=\sqrt{\frac{F_t}{\mu_l}}=\sqrt{\frac{120}{7.5\times10^{-3}}}\approx126.5\ \mathrm{m/s}
$$

Paso 2. Longitud de onda:
$$
\lambda=\frac{v}{f}=\frac{126.5}{40}\approx3.16\ \mathrm{m}
$$

Interpretacion final:
- si aumenta \(F_t\), la onda viaja mas rapido.
- si aumenta \(\mu_l\), la onda viaja mas lento.

## 9- Aplicaciones reales
- acustica y propagacion de sonido.
- diseno de cuerdas e instrumentos.
- control de vibraciones en ingenieria.
- analisis sismico.

## 10- Sintesis final
Dominar ondas mecanicas significa reconocer el medio, elegir su ecuacion de velocidad y justificar fisicamente el resultado.
