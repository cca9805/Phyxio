# Modelos y alcance

## Modelo base de Kepler
- Movimiento orbital en campo central gravitatorio.
- Aproximación de dos cuerpos con masa central dominante.
- Órbitas keplerianas ideales (sin perturbaciones).

## Núcleo de ecuaciones
Primera ley (forma polar):

$$
r(\theta)=\frac{a(1-e^2)}{1+e\cos\theta}
$$

Segunda ley:

$$
\frac{dA}{dt}=\text{cte}
$$

Tercera ley:

$$
T^2=\frac{4\pi^2}{GM}a^3
$$

## Qué explica bien
- Geometría de la órbita (elipse y excentricidad).
- Ritmo orbital global (relación \(T\)-\(a\)).
- Variación de rapidez local entre periapsis y apoapsis.

## Límites
- No incluye perturbaciones \(J_2\), terceros cuerpos ni arrastre.
- No da por sí sola todos los detalles de actitud, control o maniobra.
- Requiere dinámica newtoniana complementaria para fuerzas no centrales.

## Criterio didáctico
Kepler es la capa geométrica-temporal más útil para empezar. Después se integra con energía y fuerza para problemas completos de misión.
