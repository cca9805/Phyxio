# Modelos y validez

## Modelo base del subtema
Este subtema modela el trabajo realizado por una fuerza constante sobre una partícula o cuerpo rígido durante un desplazamiento neto usando el producto escalar. Se asume marcos clásicos, fuerzas constantes e istemas deterministas cons parámetros eff efectivos.

## Hipótesis operativas
- Fuerza de módulo y dirección constantes durante todo el desplazamiento (o dentro de segmentos).
- Partícula o cuerpo rígido sin deformaciones internas relevantes.
- Desplazamiento representado por un vector $\vec d$ neto desde posición inicial a final.
- Sistema aislado o con fuerzas externas claramente identificadas.
- Unidades SI y ángulo entre vectores calculado explícitamente.

## Qué explica bien este modelo
- Trabajo de fuerzas constantes (peso, fuerzas aplicadas directas, normal).
- Transferencia de energía mediante fuerzas conocidas.
- Signo y magnitud del trabajo en función de la orientación relativa fuerza-desplazamiento.
- Suma de trabajos de múltiples fuerzas y cálculo del trabajo neto.

## Límites del modelo
- Si la fuerza varía con la posición (muelles, fuerzas centrales), el modelo lineal falla y requiere integración.
- Si hay fenómenos disipativos complejos (fricción no Coulombiana, histeresis), la fórmula es aproximada.
- Si el desplazamiento es tridimensional curvo, necesitas parametrizar la trayectoria y usar integral de línea.
- Si la masa cambia durante el movimiento (cohete expulsando combustible), el análisis es no newtoniano.

## Señales de que debes cambiar de modelo
- Desviaciones sistemáticas entre el trabajo calculado y el cambio de energía cinética medido.
- La fuerza depende claramente de la posición o velocidad en rangos relevantes.
- El desplazamiento es curvilíneo significativamente (no aproximable a línea recta local).
- Aparecen efectos como disipación no proporcional a fuerza·distancia (turbulencia, radiación, histeresis).
