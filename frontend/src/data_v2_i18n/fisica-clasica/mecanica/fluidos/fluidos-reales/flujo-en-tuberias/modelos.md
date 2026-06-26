# Flujo en Tuberías - Modelo y validez

## Modelo ideal
El modelo de Darcy-Weisbach trata al flujo en tuberías como un sistema de transporte de energía donde las pérdidas son proporcionales al cuadrado de la velocidad. Se basa en la premisa de que el fluido es un medio continuo y que la resistencia al movimiento proviene de la interacción entre las capas de fluido y la rugosidad de las paredes. En este escenario, la caída de presión [[dp]] se visualiza como una pendiente negativa en la línea de gradiente hidráulico, representando la transformación de energía mecánica en calor residual.

## Hipótesis
- **Flujo estacionario**: El caudal [[Q]] y la velocidad [[v]] en cualquier punto no cambian con el tiempo.
- **Fluido incompresible**: La densidad [[rho]] es constante a lo largo de toda la longitud [[L]].
- **Flujo totalmente desarrollado**: El perfil de velocidades no cambia a lo largo del tramo estudiado.
- **Tubería de sección constante**: El diámetro [[D]] se mantiene uniforme, sin obstrucciones ni depósitos.
- **Pérdidas mayoritarias dominantes**: Se asume que las pérdidas por fricción en el tubo recto superan con creces a las pérdidas en accesorios.

## Dominio de validez cuantitativo
Para que el análisis de Darcy-Weisbach sea una herramienta de ingeniería precisa, deben cumplirse los siguientes criterios técnicos:
- **Criterio de Incompresibilidad**: Para gases, el número de Mach debe ser inferior a 0.3. Si Ma > 0.3, los cambios de densidad invalidan el modelo de Darcy estándar.
- **Criterio de Longitud**: El tramo de tubería debe ser lo suficientemente largo (L/D > 40) para que los efectos de entrada y salida sean despreciables.
- **Criterio de Newtonianeidad**: El fluido debe tener una viscosidad [[mu]] constante para un gradiente de velocidad dado. Fluidos como la sangre o el lodo requieren correcciones.

## Señales de fallo del modelo
- **Vibraciones y ruidos (Cavitación)**: Si la presión baja demasiado en estrechamientos, el fluido puede hervir a temperatura ambiente, invalidando el modelo de fase única.
- **Golpe de ariete**: Al cerrar válvulas rápido, el modelo estacionario falla y se producen picos de presión destructivos.
- **Reducción inesperada del caudal**: Indica que la rugosidad real ha aumentado por corrosión, superando el valor de diseño de [[f]].

## Modelo extendido o alternativo
Cuando las condiciones extremas invalidan las hipótesis básicas, se debe realizar una transición técnica:
- **CRITERIO DE TRANSICIÓN A FLUJO COMPRESIBLE**: Si la velocidad del gas supera Mach 0.3 o la caída [[dp]] es mayor al 10% de la presión inicial, se debe abandonar Darcy-Weisbach y transicionar a las ecuaciones de Fanno o flujo isotérmico.
- **TRANSICIÓN A FLUIDOS NO NEWTONIANOS**: Para lodos, pinturas o polímeros, el TRIGGER de cambio de modelo es la variabilidad de la viscosidad [[mu]] con el esfuerzo de corte. En estos casos se usa el modelo de Ley de Potencia o Plástico de Bingham.
- **Ecuación de Hazen-Williams**: Modelo empírico simplificado para redes de agua a temperatura ambiente.

## Comparación operativa
Mientras que el modelo de Darcy-Weisbach es el estándar de oro para el diseño de redes industriales y civiles de larga distancia, los modelos de Navier-Stokes (CFD) son obligatorios cuando se diseñan componentes de alta precisión como inyectores de combustible o válvulas cardíacas artificiales, donde el detalle del perfil de velocidades local es crítico.
