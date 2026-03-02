# Modelos y validez

## Modelo base del subtema
Este subtema describe la **energía potencial gravitatoria** en dos regímenes:
1. **Local terrestre** con campo uniforme $g$ constante: $U_g = mgh$.
2. **Campo gravitatorio universal** para distancias mayores comparables al radio planetario: $U_g = -GMm/r$.
Se asume masa puntual o cuerpo rígido sin deformaciones y dinámica clásica newtoniana.

## Hipótesis operativas
- En el régimen local: $h \ll R_{Tierra}$, de modo que $g$ se considera constante.
- En el régimen global: la masa $M$ es mucho mayor que $m$ y se trata como punto (aproximación de masa puntual o campo central).
- No hay otras fuerzas relevantes (electricidad, fricción): el trabajo gravitatorio es el único considerado.
- El cero de potencial puede elegirse arbitrariamente (por convención en superficie o infinito) pero debe mantenerse consistente en cálculos de diferencias.
- Unidades SI y sistema inercial.

## Qué explica bien este modelo
- Cálculo de la energía almacenada por un objeto elevado a cierta altura en la Tierra o en un edificio (
$U = mgh$).
- Trabajo requerido para levantar cargas en grúas, elevadores, ascensores.
- Velocidad de caída libre y lanzamiento vertical cuando se combinan con conservación de energía.
- Energía de escape de un cuerpo desde la superficie de un planeta ($v_{esc} = \sqrt{2GM/R}$).
- Movimiento orbital de satélites: energía total $E = \frac{1}{2}mv^2 - GMm/r$ y conexión con periodos orbitales.
- Cálculos de diferencia de potencial entre dos alturas de montaña o capas atmosféricas para geodesia y física atmosférica.

## Límites del modelo
- Para alturas significativas ($h$ comparable a $R$), el campo no es uniforme y la fórmula $mgh$ falla; se debe usar $-GMm/r$ o integrar $\int g(r) dr$.
- En órbitas fuertes alrededor de cuerpos con distribución de masa compleja (no esférica), la aproximación de masa puntual es insuficiente.
- En velocidades relativistas cercanas a $c$, la energía cinética y potencial requieren formulaciones relativistas (energía total $E = \gamma mc^2$).
- Para cuerpos extendidos con variación de densidad, $U$ puede incluir términos de auto-energía de masas (potencial de autoposición).
- El modelo no considera efectos de marea, rotación del planeta o fuerzas de Coriolis sobre cuerpos en movimiento.

## Señales de que debes cambiar de modelo
- Observas diferencias de velocidad o energía mayores al $5\%$ respecto a predicciones con $mgh$ en alturas de más de unos pocos kilómetros.
- La energía calculada con $mgh$ resulta negativa cuando debería ser positiva (elección de referencia inconsistente).
- Estás calculando velocidades de escape o energías orbitales en distancias mayores que el radio planetario; $mgh$ no es suficiente.
- El cuerpo se mueve en un campo gravitatorio no central (por ejemplo, entre varios cuerpos masivos) y la suma de potenciales debe considerarse.
- Existen fuerzas coadyuvantes (ly, fricción de aire) cuya magnitud es comparable a la fuerza gravitatoria; se necesita análisis completo incluyendo trabajo no gravitatorio.