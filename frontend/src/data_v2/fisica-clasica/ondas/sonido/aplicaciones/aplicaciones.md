# Aplicaciones Del Sonido - Escenarios Reales

## Idea clave
Una aplicacion bien resuelta no termina en un numero: termina en una decision tecnica fundamentada.

## 1- Escenario: medicion por eco (ultrasonido)
Objetivo: convertir tiempo de ida-vuelta en distancia.

Formula:

$$
d=\frac{vt_{echo}}{2}
$$

Decision tecnica: validar que el medio y la velocidad usados corresponden a la condicion real (aire, agua, tejido).

## 2- Escenario: control de ruido ambiental
Objetivo: comparar niveles con umbrales normativos.

Formula:

$$
\beta=10\log_{10}\left(\frac{I}{I_0}\right)
$$

Decision tecnica: trabajar con dB correctamente y no como escala lineal.

## 3- Escenario: evaluacion de fuente puntual
Objetivo: estimar intensidad a distancia dada.

Formula:

$$
I=\frac{P}{4\pi r^2}
$$

Decision tecnica: comprobar si el supuesto de campo libre es razonable.

## 4- Escenario: estimacion de velocidad relativa (Doppler)
Objetivo: inferir movimiento por corrimiento de frecuencia.

Formula:

$$
f_{obs}=f_0\frac{v+v_o}{v-v_s}
$$

Decision tecnica: fijar signos con eje definido antes de calcular.

## 5- Integracion de escenarios
En sistemas reales se encadenan modelos. Ejemplo: medir distancia por eco y luego verificar si el nivel de señal recibida permite deteccion robusta.

## 6- Cierre
Aplicar bien sonido en contexto real significa modelar, calcular, validar supuestos e interpretar impacto practico.
