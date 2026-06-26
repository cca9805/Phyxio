const e=`# Modelos Físicos de Ondas Longitudinales

## Modelo ideal
El modelo fundamental para las ondas longitudinales en fluidos es el **Modelo de Acústica Lineal**. Este modelo trata al fluido como un medio continuo, elástico y no viscoso. Se asume que las perturbaciones de presión y densidad son infinitesimalmente pequeñas en comparación con los valores de equilibrio (p ll P_0 y Delta [[[[rho]]]] ll [[[[rho]]]]_0). Bajo estas condiciones, las ecuaciones de Navier-Stokes se simplifican a la ecuación de onda lineal, permitiendo soluciones armónicas donde la velocidad de propagación [[c]] es independiente de la frecuencia (ausencia de dispersión). Es la representación dominante en la ingeniería acústica y el audio profesional.

## Hipótesis
Para que este modelo sea operativo, se deben cumplir las siguientes premisas:
1. **Medio Continuo:** La longitud de onda [[lambda]] debe ser mucho mayor que el camino libre medio molecular, de modo que el fluido pueda tratarse como un continuo material.
2. **Pequeñas Amplitudes:** El desplazamiento de las partículas [[s_hat]] debe ser lo suficientemente pequeño para que los términos no lineales en las ecuaciones de movimiento sean despreciables.
3. **Fluido No Viscoso:** Se desprecia la fricción interna entre las capas del fluido, asumiendo que no hay disipación de energía térmica durante la propagación.
4. **Proceso Adiabático:** En gases, las compresiones y rarefacciones ocurren tan rápido que no hay tiempo para el intercambio de calor con el entorno, por lo que se usa el módulo de compresibilidad adiabático.

## Dominio de validez cuantitativo
El modelo de acústica lineal es válido bajo el siguiente criterio cuantitativo:
- **Relación de Presión:** frac[[[[p_hat]]]]P_atm < 0.01. Para el aire a presión atmosférica (10^5 Pa), esto significa que la amplitud de presión debe ser inferior a 1000 Pa.
- **Numero de Mach Acustico:** La velocidad de las particulas debe ser mucho menor que [[c]]. Tipicamente, el cociente entre ambas velocidades se mantiene por debajo de 10^-3 para conservar la linealidad.

## Señales de fallo del modelo
- **Aparición de Ondas de Choque:** Si la amplitud de presión es muy alta, las crestas de la onda viajan más rápido que los valles, distorsionando el perfil.
- **Atenuación por Viscosidad:** A frecuencias muy altas (rango de MHz), la absorción debida a la viscosidad del fluido y la conducción térmica ya no puede ignorarse.
- **Dispersión Molecular:** Si la frecuencia es tan alta que la longitud de onda se acerca a las escalas moleculares del fluido.

## Modelo extendido o alternativo
Para situaciones que exceden los límites anteriores, se recurre a modelos de **Acústica No Lineal** o **Dinámica de Gases Supersónica**.
- **Ecuación de Westervelt:** Describe la propagación de haces de sonido de alta intensidad donde la velocidad de fase depende de la presión instantánea.
- **Ecuación de Kuznetsov:** Una generalización que incluye efectos de viscosidad y conducción térmica junto con la no linealidad.
- **Enfoque Cinético**: Si la escala espacial es comparable al camino libre medio, se debe abandonar el continuo por la teoría cinética de Boltzmann.

## Transición de modelo
**¿Cuándo conviene cambiar de modelo?** El modelo de acústica lineal colapsa y se debe transicionar al modelo alternativo obligatoriamente en los siguientes escenarios críticos:
1. **Escala de Intensidad**: Cuando el número de Mach acústico se acerca a la unidad (M_a aprox. 1). En este punto, la energía se transfiere a los armónicos superiores y el modelo lineal deja de ser aceptable para describir la física del sistema.
2. **Escala de Frecuencia**: Cuando la frecuencia es tan alta que la absorción viscosa domina la propagación. Aquí, se debe transicionar a modelos disipativos (como el de Stokes-Kirchhoff) para evitar predecir una amplitud que no decae.
3. **Presencia de frentes de choque**: En explosiones o regímenes supersónicos donde la discontinuidad de presión invalida las ecuaciones diferenciales lineales.

## Comparación operativa
Mientras que el modelo ideal permite una resolución analítica sencilla mediante funciones trigonométricas y una velocidad [[c]] constante, los modelos extendidos requieren métodos numéricos complejos y consideran que la energía se transfiere entre diferentes frecuencias debido a la distorsión del perfil de onda. El modelo lineal es una herramienta de "lápiz y papel" excelente para el aprendizaje conceptual, mientras que los modelos avanzados son herramientas de precisión para ingeniería acústica de alta potencia.`;export{e as default};
