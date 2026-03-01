# Velocidad Del Sonido - Modelo y Validez

## Idea clave
No existe una unica formula universal para todos los casos practicos: la ecuacion correcta depende del medio y del nivel de detalle requerido.

## 1- Modelo operativo del subtema
Se modela la velocidad sonora como resultado de la relacion entre restauracion elastica e inercia del medio.

Ecuaciones de trabajo:
- $$v=\lambda f$$
- $$v=\sqrt{\frac{B}{\rho}}$$
- $$v=\sqrt{\frac{\gamma R T_K}{M}}$$
- $$v\approx331+0.6T_c$$

## 2- Suposiciones explicitas
- Propagacion lineal de pequena amplitud.
- Medio aproximadamente homogeneo e isotropo.
- Parametros del medio constantes en la escala del problema.

## 3- Cuando SI aplica
- Estimaciones de velocidad en aire, agua y medios simples.
- Problemas de longitud de onda a frecuencia dada.
- Conversion de tiempo de vuelo en distancia.

## 4- Cuando NO aplica
- Medios fuertemente heterogeneos o dispersivos sin correccion.
- Regimen no lineal con choques acusticos.
- Situaciones donde atenuacion y dispersion dominan y no se modelan.

## 5- Formulas conceptuales de lectura (no calculadora directa)
- Tiempo de vuelo en trayecto variable:

$$
t=\int_{x_i}^{x_f}\frac{dx}{v(x)}
$$

No es calculable en forma cerrada sin conocer \(v(x)\) y resolver la integral.

## 6- Checklist de validez antes de cerrar
1. Medio bien identificado.
2. Temperatura en escala correcta para la formula usada.
3. Datos en SI.
4. Orden de magnitud coherente con referencias fisicas.

## 7- Cierre
El numero final solo es util cuando la ecuacion elegida representa realmente el medio del problema.
