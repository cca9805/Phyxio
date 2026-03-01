# Naturaleza Del Sonido - Modelo y Validez

## Idea clave
El modelo de sonido basico es una aproximacion lineal de perturbaciones pequenas en un medio material compresible.

## 1- Modelo operativo del subtema
Se describe el sonido como onda longitudinal con variables de campo (presion acustica y velocidad de particula) acopladas al medio.

Ecuaciones base:
- $$v=\lambda f$$
- $$T=\frac{1}{f}$$
- $$v=\sqrt{\frac{B}{\rho}}$$
- $$p'=Zu,\ Z=\rho v$$

## 2- Suposiciones explicitas
- Medio continuo y aproximadamente homogeneo.
- Perturbaciones pequenas (linealidad).
- Ausencia de choques acusticos.
- Escalas donde la aproximacion de onda plana es razonable para analisis basico.

## 3- Cuando SI aplica
- Problemas didacticos de sonido en aire, agua o fluidos simples.
- Estimaciones de \(v\), \(\lambda\), \(f\), \(T\).
- Interpretacion basica de propagacion y energia acustica.

## 4- Cuando NO aplica
- Regimen fuertemente no lineal.
- Medios con dispersion o absorcion dominante no modelada.
- Geometrias complejas donde la onda plana no representa el campo.
- Cambios termodinamicos extremos fuera del alcance del modelo simple.

## 5- Formulas conceptuales de lectura (no calculadora directa)
- Ecuacion de onda acustica 1D:

$$
\frac{\partial^2 p'}{\partial x^2}=\frac{1}{v^2}\frac{\partial^2 p'}{\partial t^2}
$$

- Impedancia caracteristica:

$$
Z=\rho v
$$

La primera requiere resolver una ecuacion diferencial con condiciones de contorno; no es despeje numerico directo de la calculadora basica.

## 6- Checklist de validez antes de cerrar un problema
1. Confirmar medio material y regimen lineal.
2. Revisar unidades SI de \(B\) y \(\rho\).
3. Verificar consistencia entre \(v\), \(\lambda\), \(f\).
4. Contrastar resultado con `Graficas`.

## 7- Cierre
El valor numerico solo es fisicamente valido cuando las hipotesis del modelo estan realmente cumplidas.
