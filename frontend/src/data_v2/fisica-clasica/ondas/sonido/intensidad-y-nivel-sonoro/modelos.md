# Intensidad Y Nivel Sonoro - Modelo y Validez

## Idea clave
El modelo de intensidad y nivel sonoro es robusto si se respeta la diferencia entre magnitud fisica lineal e indicador logaritmico.

## 1- Modelo operativo del subtema
Se modela el transporte de energia por intensidad \(I\) y se expresa comparativamente con nivel \(\beta\) en dB.

Ecuaciones base:
- $$I=\frac{P}{A}$$
- $$I=\frac{P}{4\pi r^2}\quad (\text{fuente puntual ideal})$$
- $$\beta=10\log_{10}\left(\frac{I}{I_0}\right)$$
- $$I=I_0\,10^{\beta/10}$$

## 2- Suposiciones explicitas
- Campo libre para ley de \(1/r^2\).
- Fuente puntual isotropica en aproximacion inicial.
- Ausencia de absorcion dominante en trayecto corto.
- Referencia \(I_0\) correctamente definida.

## 3- Cuando SI aplica
- Estimaciones de nivel por potencia y distancia.
- Comparacion de cambios energeticos en dB.
- Evaluacion basica de exposicion y control de ruido.

## 4- Cuando NO aplica
- Recintos muy reverberantes sin correccion de campo difuso.
- Fuentes con directividad fuerte no modelada.
- Multiples fuentes sin tratamiento energetico correcto.
- Condiciones con absorcion o barreras relevantes no incluidas.

## 5- Formula conceptual (no calculadora directa)
Suma de niveles de fuentes independientes:

$$
\beta_{tot}=10\log_{10}\left(\sum_i10^{\beta_i/10}\right)
$$

Es conceptual en la calculadora basica de una sola ecuacion y requiere gestion de listas de fuentes.

## 6- Checklist de validez antes de cerrar
1. Escenario geometrico y modelo de propagacion definidos.
2. Referencia \(I_0\) explicita.
3. Conversion lineal-logaritmica correcta.
4. Interpretacion final en terminos fisicos, no solo numericos.

## 7- Cierre
El resultado en dB solo tiene sentido cuando se respeta la cadena fisica completa: potencia, propagacion, intensidad y conversion logaritmica.
