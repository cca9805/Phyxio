# Naturaleza Del Sonido

## Idea clave
El sonido es una onda mecanica longitudinal: la perturbacion se propaga como variaciones de presion y velocidad de particula en un medio material.

## 1- Que fenomeno explica este subtema y por que importa
Este subtema explica que es fisicamente el sonido antes de entrar en bloques de intensidad, timbre, Doppler o aplicaciones.

Importa porque fija tres ideas sin las que el resto de acustica se confunde:
- el sonido necesita medio material,
- en fluidos se propaga principalmente por compresiones y rarefacciones longitudinales,
- lo que se transporta de forma neta es energia, no masa.

## 2- Mecanismo dinamico real de propagacion
La propagacion ocurre porque una compresion local del medio genera un gradiente de presion que empuja a la region vecina.

Cadena causal:
1. una fuente vibra,
2. comprime y descomprime capas de medio,
3. esas capas transmiten la perturbacion por fuerzas elasticas internas,
4. la informacion y energia avanzan con velocidad finita \(v\).

En gases y liquidos:
- la elasticidad volumetrica (modulo \(B\)) aporta restauracion,
- la densidad \(\rho\) aporta inercia.

## 3- Variables y parametros que debes identificar (ver tab `Leyenda`)
- \(v\): velocidad de propagacion (m/s).
- \(\lambda\): longitud de onda (m).
- \(f\): frecuencia (Hz).
- \(T\): periodo (s).
- \(\omega\): frecuencia angular (rad/s).
- \(k\): numero de onda (rad/m).
- \(B\): modulo de compresion volumetrico (Pa).
- \(\rho\): densidad del medio (kg/m^3).
- \(p'\): presion acustica (Pa).
- \(u\): velocidad de particula (m/s).
- \(T_c\): temperatura del aire en Celsius para estimar \(v\).

## 4- Formulacion matematica esencial
Relacion ondulatoria:

$$
v=\lambda f
$$

Periodo y frecuencia:

$$
T=\frac{1}{f}
$$

Conversiones de fase:

$$
\omega=2\pi f,\qquad k=\frac{2\pi}{\lambda}
$$

Velocidad del sonido en medio compresible ideal:

$$
v=\sqrt{\frac{B}{\rho}}
$$

Aproximacion util para aire:

$$
v\approx331+0.6\,T_c
$$

Relacion acustica lineal local:

$$
p'=Zu,\qquad Z=\rho v
$$

Lectura fisica clave:
- mayor rigidez efectiva \(B\) tiende a aumentar \(v\),
- mayor inercia volumica \(\rho\) tiende a reducir \(v\),
- en regimen lineal, la velocidad no depende de amplitud.

## 5- Modelo y condiciones de validez (ver tab `Modelo y validez`)
El modelo base funciona cuando:
- perturbaciones pequenas,
- medio aproximadamente homogeneo,
- propagacion sin no linealidad fuerte,
- ausencia de choques acusticos.

Debe corregirse cuando:
- hay gradientes termicos fuertes,
- el medio es altamente dispersivo o fuertemente absorbente,
- hay amplitudes grandes con comportamiento no lineal.

## 6- Visualizacion guiada (ver tab `Graficas`)
En `Graficas` valida:
1. Relacion entre \(f\), \(\lambda\) y \(v\).
2. Como cambia \(\lambda\) al variar \(f\) para \(v\) fija.
3. Diferencia entre magnitudes de propagacion y magnitudes de oscilacion local.

Si el valor calculado no coincide con la tendencia visual, hay error en unidades o formula.

## 7- Metodo general de resolucion (ver tab `Calculadora`)
1. Define la incognita real y su unidad objetivo.
2. Convierte todo a SI.
3. Selecciona la ecuacion minima necesaria.
4. Despeja en simbolico antes de sustituir.
5. Calcula y verifica orden de magnitud.
6. Interpreta fisicamente el resultado en el medio concreto.

## 8- Errores frecuentes y como evitarlos (ver tab `Errores`)
- pensar que el sonido se propaga en vacio,
- confundir velocidad de onda con velocidad de particula,
- mezclar Hz con rad/s sin convertir,
- usar datos de aire para resolver en agua o solido,
- olvidar control de unidades en \(B\) y \(\rho\).

## 9- Conexion teoria-practica (ver tabs `Ejemplos` y `Practica`)
El salto real ocurre cuando puedes explicar no solo cuanto vale \(v\), sino por que cambia al cambiar medio, temperatura o frontera.

Ese criterio evita errores de arrastre en todo el nodo de sonido.

## 10- Ejemplo guia corto
Datos: en aire a \(20^\circ\mathrm{C}\), \(f=680\,\mathrm{Hz}\). Estimar \(v\) y \(\lambda\).

Paso 1- velocidad aproximada:

$$
v\approx331+0.6\cdot20=343\,\mathrm{m/s}
$$

Paso 2- longitud de onda:

$$
\lambda=\frac{v}{f}=\frac{343}{680}\approx0.504\,\mathrm{m}
$$

Interpretacion: es una onda sonora audible de longitud de onda media en aire ambiente.

## 11- Aplicaciones reales (ver tab `Aplicaciones`)
- acustica arquitectonica y control de ruido,
- electroacustica y diseno de altavoces,
- diagnostico por ultrasonido,
- metrologia de medios y sensores acusticos.

## 12- Sintesis final
Dominar la naturaleza del sonido significa distinguir mecanismo fisico, ecuaciones validas y limites del modelo para resolver con criterio, no por memoria.
