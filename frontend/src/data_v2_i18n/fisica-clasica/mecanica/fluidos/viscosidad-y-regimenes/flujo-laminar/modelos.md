# Modelos de Flujo Laminar

## Modelo ideal
El modelo fundamental para el flujo laminar es el **Flujo de Poiseuille** (o flujo de Hagen-Poiseuille). Este modelo describe el movimiento estacionario de un fluido viscoso incompresible a través de un conducto cilíndrico de sección circular constante. Representa la solución exacta de las ecuaciones de Navier-Stokes para un régimen donde las fuerzas viscosas equilibran perfectamente al gradiente de presión. En este modelo, el fluido se organiza en láminas concéntricas que se deslizan sin fricción externa (solo interna), resultando en un perfil de velocidades parabólico con un máximo en el eje central y un mínimo de cero en las paredes.

## Hipótesis
Para que el modelo de Poiseuille sea aplicable, se deben cumplir las siguientes hipótesis simplificadoras:
1.  **Fluido Newtoniano**: La viscosidad [[eta]] es constante e independiente de la tasa de deformación.
2.  **Flujo Estacionario**: Las propiedades del flujo en cualquier punto no cambian con el tiempo.
3.  **Incompresibilidad**: La densidad del fluido es constante en todo el dominio.
4.  **Totalmente Desarrollado**: El perfil de velocidades no cambia a lo largo de la tubería (lejos de la entrada y la salida).
5.  **No Deslizamiento**: El fluido en contacto directo con la pared sólida tiene velocidad relativa cero.
6.  **Flujo Laminar Puro**: No existen componentes de velocidad transversales; el movimiento es puramente axial.

## Dominio de validez cuantitativo
La validez de este modelo está estrictamente ligada al Número de Reynolds [[Re]]. Cuantitativamente, el límite superior para el régimen laminar en tuberías circulares es aproximadamente [[Re]] = 2300.
- **Régimen Laminar Estable**: [[Re]] < 2000. El modelo es altamente preciso.
- **Zona de Transición**: 2000 < [[Re]] < 4000. El flujo es inestable y puede volverse turbulento ante cualquier pequeña perturbación.
- **Régimen Turbulento**: [[Re]] > 4000. El modelo de Poiseuille deja de ser válido por completo.
Además, el modelo requiere que la longitud de la tubería [[L]] sea mucho mayor que el diámetro (L \gg D) para ignorar los efectos de los extremos.

## Señales de fallo del modelo
Un analista debe sospechar que el modelo de flujo laminar está fallando si observa lo siguiente:
1.  **Aparición de Ruido o Vibración**: Son indicadores de fluctuaciones de presión turbulentas.
2.  **Pérdida de Carga no Lineal**: Si la caída de presión [[deltaP]] empieza a ser proporcional a velocidad al cuadrado en lugar de a velocidad, el flujo ya no es laminar.
3.  **Mezcla Rápida**: Si un trazador inyectado se difumina instantáneamente en toda la sección, existen corrientes transversales turbulentas.
4.  **Altos Números de Reynolds**: Cualquier cálculo que arroje un [[Re]] > 2300 invalida automáticamente las conclusiones obtenidas con Poiseuille.

## Modelo extendido o alternativo
Cuando el flujo supera el régimen laminar, es imperativo realizar una **transición explícita**.

### ¿Cuándo conviene cambiar de modelo?
Es necesario realizar una **transición** hacia el modelo de Darcy-Weisbach en cuanto el régimen deja de ser laminar. Esta sección detalla **cuándo conviene** realizar el cambio: se debe abandonar Poiseuille y adoptar modelos turbulentos cuando [[Re]] > 2300. En este punto, se debe **cambiar a** un modelo que considere la rugosidad.

Para fluidos que no siguen la ley de Newton (como la sangre o polímeros), se utilizan modelos de **Fluidos No Newtonianos** (como la Ley de Potencia) donde la viscosidad efectiva cambia con el esfuerzo cortante.

## Comparación operativa
Operativamente, la mayor diferencia entre el modelo laminar y el turbulento radica en la eficiencia de transporte y la predictibilidad. En el modelo laminar, podemos predecir la posición exacta de una partícula en el tiempo, mientras que en el turbulento solo podemos hablar de promedios estadísticos. La ley de Poiseuille es una herramienta de diseño "limpia" que permite cálculos de precisión en sistemas de lubricación y microchips, mientras que los modelos alternativos requieren factores empíricos de corrección para dar cuenta de la complejidad del caos.
