const e=`# Modelos físicos: Bloque sobre superficie\r
\r
## Modelo ideal\r
\r
El bloque sobre superficie con fricción opera bajo el modelo simplificado de Coulomb que asume coeficientes de fricción constantes. Este modelo ideal no es falso; es una herramienta deliberadamente simplificada que funciona extraordinariamente bien dentro de su rango de aplicabilidad.\r
\r
Las simplificaciones principales son:\r
\r
- **Coeficientes de fricción constantes**: El coeficiente estático [[mu_s]] y el cinético [[mu_k]] se tratan como propiedades constantes del par de contacto, independientes de velocidad, presión y temperatura dentro de rangos operativos normales.\r
- **Contacto seco**: El modelo asume superficies limpias y secas sin lubricantes ni contaminantes que modificarían el comportamiento de fricción.\r
- **Cuerpos rígidos**: Tanto el bloque como la superficie se asumen perfectamente rígidos, por lo que la fuerza normal se distribuye uniformemente y la geometría de contacto no cambia bajo carga.\r
- **Contacto puntual**: El área de contacto se trata como un punto o superficie uniforme, ignorando variaciones en la distribución de presión.\r
\r
Cada una de estas idealizaciones tiene consecuencias físicas medibles. El arte está en reconocer cuándo la consecuencia es aceptable.\r
\r
## Hipótesis\r
\r
Las hipótesis explícitas que sostienen el modelo son:\r
\r
- **Hipótesis cinemática**: El sistema puede describirse usando las magnitudes definidas en magnitudes.yaml sin variables adicionales. El movimiento es puramente traslacional sin efectos de rotación o rodadura.\r
- **Hipótesis dinámica**: Las fuerzas satisfacen la segunda ley de Newton en su forma básica. La fricción sigue las leyes de Amontons-Coulomb: la fricción estática varía hasta un máximo proporcional a la normal, la fricción cinética es constante y proporcional a la normal.\r
- **Hipótesis de continuidad**: Las fuerzas y aceleraciones varían de forma continua; no hay saltos instantáneos excepto en el punto de transición estático-cinético.\r
- **Hipótesis de aislamiento**: El sistema bloque-superficie está mecánicamente aislado de vibraciones, resistencia del aire y otras perturbaciones externas que podrían afectar el movimiento.\r
\r
Violar cualquiera de estas hipótesis hace que el modelo falle predeciblemente.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo funciona bien cuando se cumplen estas condiciones cuantitativas:\r
\r
- **Presión de contacto**: 10⁴ Pa < p < 10⁷ Pa (típico para superficies diseñadas). Por debajo de este rango, fuerzas de adhesión dominan; por encima, ocurre deformación plástica.\r
- **Velocidad de deslizamiento**: v < 1 m/s para fricción cinética. A velocidades mayores, el calentamiento reduce el coeficiente efectivo (fading térmico).\r
- **Temperatura**: -20 °C < T < 80 °C para materiales típicos. Fuera de este rango, las propiedades cambian significativamente.\r
- **Rugosidad superficial**: 0.1 μm < Ra < 10 μm. Superficies muy lisas exhiben adhesión dominante; muy rugosas tienen intertrabamiento.\r
\r
Fuera de estos rangos, los términos despreciados en el modelo idealizado se vuelven comparables a los términos principales y el modelo pierde precisión.\r
\r
## Señales de fallo del modelo\r
\r
¿Cómo detectas que el modelo ha dejado de ser válido? Busca estos indicadores observables:\r
\r
- **Predicción vs. medida**: Tu cálculo da un resultado que contradice la observación en más del 10-15%.\r
- **Chirri o stick-slip**: Oscilaciones de alta frecuencia o movimiento irregular indican que el supuesto de fricción cinética constante está fallando.\r
- **Desgaste visible**: Polvo, residuos o daño superficial apareciendo durante el movimiento señalan que el supuesto de cuerpo rígido se está rompiendo.\r
- **Aumento de temperatura**: Calentamiento significativo del área de contacto (detectable al tacto) indica que la disipación de energía por fricción está modificando las propiedades materiales.\r
- **Ruptura de aproximación**: Las fuerzas de fricción calculadas se vuelven comparables o mayores que las fuerzas aplicadas, indicando la transición a un régimen diferente.\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el modelo ideal falla, el siguiente paso es incluir efectos secundarios:\r
\r
- **Fricción dependiente de velocidad**: Reemplazar [[mu_k]] constante por una función que disminuye con la velocidad (curva de Stribeck) para modelar contactos lubricados o comportamiento a alta velocidad.\r
- **Acoplamiento térmico**: Incluir ecuaciones de transferencia de calor para modelar efectos térmicos en los coeficientes de fricción, esencial para sistemas de frenado.\r
- **Mecánica de contacto elástico**: Usar teoría de contacto de Hertz cuando la deformación es significativa, modelando el área de contacto como una región deformable en lugar de un punto.\r
- **Efectos viscoelásticos**: Para contactos de polímeros o caucho, incluir respuesta material dependiente del tiempo para modelar comportamientos de fluencia y relajación.\r
\r
**Transición explícita**: El modelo ideal de Coulomb es apropiado para problemas de introducción, diseño preliminar y análisis de sistemas simples donde la precisión del 10-15% es aceptable. Cuando se detectan señales de fallo del modelo, o cuando se requiere precisión superior al 5% para aplicaciones críticas (frenos de seguridad, rodamientos de precisión, neumáticos de alto rendimiento), se debe transicionar al modelo extendido que incluye dependencia con velocidad, temperatura y mecánica de deformación.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo Ideal | Modelo Extendido |\r
|---------|-------------|------------------|\r
| **Precisión** | 85-90% | 95%+ |\r
| **Complejidad** | Ecuaciones algebraicas | Ecuaciones diferenciales acopladas |\r
| **Tiempo de resolución** | Minutos | Horas a días |\r
| **Cuándo usarlo** | Educación, diseño preliminar, problemas estándar | Sistemas de seguridad críticos, investigación, análisis de fallos |\r
| **Rango típico** | Demostraciones de laboratorio seco, maquinaria simple | Frenos de alto rendimiento, rodamientos de precisión, diseño de neumáticos |\r
\r
Aprende a usar el modelo ideal primero. Una vez lo domines, transiciona al extendido según necesidad.\r
`;export{e as default};
