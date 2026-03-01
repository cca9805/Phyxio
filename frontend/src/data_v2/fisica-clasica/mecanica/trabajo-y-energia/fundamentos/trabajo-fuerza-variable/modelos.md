# Modelos y validez

## Modelo base del subtema
Este subtema modela el trabajo realizado por fuerzas que varían con la posición, velocidad o tiempo, utilizando la integral de línea $W = \int \vec F(s) \cdot d\vec s$ (en 1D: $W = \int F(x) dx$). Se asumen funciones continuas o por tramos, y trayectorias bien definidas en espacios euclidianos.

## Hipótesis operativas
- Fuerza es función conocida de la posición, velocidad, o tiempo: $\vec F = \vec F(x, \dot{x}, t)$.
- El sistema operan en regímenes cuasi-estáticos o donde la dependencia con tiempo es paramétrica.
- La trayectoria es unidimensional o puede proyectarse a coordenadas generalizadas.
- La función de fuerza es integrable (Riemann o Lebesgue) en el dominio de interés.
- Unidades SI consistentes; trabajo en julios.

## Qué explica bien este modelo
- Trabajo de fuerzas elásticas: muelles, sistemas Hooke-lineales.
- Trabajo en campos conservativos: fuerzas centrales, gravitatorias (a escala local).
- Interpretación gráfica: Área bajo la curva $F(x)$ vs $x$ con signo.
- Trabajo en procesos termodinámicos: trabajo $P dV$ en expansión/compresión de gases.
- Análisis de múltiples regímenes (lineales, cuadráticos, cúbicos, exponenciales).
- Aproximaciones numéricas de trabajo cuando la función de fuerza es compleja o empírica.

## Límites del modelo
- Si la fuerza depende de manera no local de la trayectoria (histéresis, medios disipativos complejos), el modelo integral simple falla.
- Si la trayectoria es fuertemente no-lineal en 2D/3D, requiere parametrización y cálculo vectorial.
- Si hay amortiguamiento dependiente de velocidad ($F \propto v$ o $F \propto v^2$), la integral depende de la trayectoria seguida, no solo de puntos inicial/final.
- En sistemas cuánticos, la noción clásica de "trayectoria" falla; se requiere mecánica cuántica.
- Para fuerzas electromagnéticas complejas movimiento de cargas en campos variables temporalmente), el análisis es más delicado (incluye radiación, retardo).

## Señales de que debes cambiar de modelo
- El trabajo calculado por integración sistemáticamente diverge del cambio de energía cinética medido, indicando fuerzas no modeladas (fricción, velocidad-dependencias).
- La función de fuerza se vuelve discontinua o singular en puntos del dominio (requiere análisis de singularidades o regularización).
- La trayectoria seguida afecta el trabajo de manera significativa (indicativo de campo no-conservativo).
- Aparecen fenómenos de resonancia o efectos dephaseling (en casos dependientes del tiempo).
- El desplazamiento es tan grande que cambios en propiedades del sistema (ej., gravedad variable con altura) se vuelven relevantes.
