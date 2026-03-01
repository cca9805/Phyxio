# Aplicaciones Del Sonido - Modelo y Validez

## Idea clave
Este subtema usa un modelo compuesto: cada bloque (eco, intensidad, nivel, Doppler) tiene su propio dominio de validez.

## 1- Modelo operativo por bloques
Bloque eco:
- $$d=\frac{vt_{echo}}{2}$$

Bloque intensidad:
- $$I=\frac{P}{A}$$
- $$I=\frac{P}{4\pi r^2}\ (\text{fuente puntual ideal})$$

Bloque nivel:
- $$\beta=10\log_{10}\left(\frac{I}{I_0}\right)$$

Bloque Doppler:
- $$f_{obs}=f_0\frac{v+v_o}{v-v_s}$$

## 2- Suposiciones explicitas
- Medio y velocidad de propagacion bien definidos.
- Campo libre para ley de \(1/r^2\) cuando se usa.
- Referencia \(I_0\) conocida para dB.
- Movimiento casi colineal en Doppler 1D.

## 3- Cuando SI aplica
- Problemas de distancia por eco en medios uniformes.
- Estimacion de nivel en condiciones controladas.
- Inferencia de velocidad relativa por corrimiento moderado.

## 4- Cuando NO aplica
- Geometrias complejas sin modelado de rayos o campo difuso.
- Recintos reverberantes sin correccion.
- Medio con viento significativo no incorporado.
- Mezcla de fuentes multiples sin suma energetica correcta.

## 5- Formula conceptual (no calculadora directa)
Suma de niveles de fuentes independientes:

$$
\beta_{tot}=10\log_{10}\left(\sum_i10^{\beta_i/10}\right)
$$

Requiere lista de fuentes y no un despeje escalar simple.

## 6- Checklist de validez antes de cerrar
1. Escenario fisico identificado.
2. Modelo de bloque correcto.
3. SI consistente.
4. Tendencia fisica validada con `Graficas`.

## 7- Cierre
La clave en aplicaciones no es memorizar ecuaciones, sino usar cada ecuacion en el escenario correcto.
