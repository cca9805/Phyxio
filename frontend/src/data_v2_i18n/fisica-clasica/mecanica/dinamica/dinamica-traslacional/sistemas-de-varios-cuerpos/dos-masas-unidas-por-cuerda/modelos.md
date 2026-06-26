# Modelos físicos: Dos masas unidas por cuerda

## Modelo ideal

El modelo de máquina de Atwood ideal simplifica deliberadamente el sistema real mediante cuatro idealizaciones fundamentales. La cuerda se considera sin masa e inextensible, transmitiendo fuerza perfectamente sin deformación ni inercia propia. La polea se modela como un disco sin masa y sin rozamiento en su eje, cambiando la dirección de la tensión sin disipar energía ni acumular inercia rotacional. Ambas masas se tratan como puntos materiales sin dimensión espacial, y el movimiento se restringe a una dimensión vertical pura.

Estas simplificaciones no hacen el modelo falso; lo hacen una herramienta deliberadamente abstracta que captura la esencia del acoplamiento dinámico. El arte está en reconocer cuándo las idealizaciones son aceptables frente a cuándo deben corregirse.

## Hipótesis

Las hipótesis explícitas que sostienen el modelo ideal son:

- **Cuerda ideal**: La masa del cable es despreciable frente a las masas conectadas. Si la cuerda tiene masa comparable, la tensión deja de ser uniforme a lo largo de su longitud y aparecen gradientes que el modelo no captura.

- **Polea ideal**: La polea no tiene masa ni rozamiento en su eje. Si la polea es masiva, parte de la energía se destina a su rotación, reduciendo la aceleración efectiva de las masas. Si hay rozamiento, aparecen torques disipativos no modelados.

- **Cuerda inextensible**: La longitud del cable permanece constante, imponiendo que ambas masas compartan la misma magnitud de aceleración. Si la cuerda se estira significativamente bajo carga, las aceleraciones instantáneas pueden diferir y aparecen oscilaciones elásticas.

- **Movimiento unidimensional**: Las masas se desplazan verticalmente sin oscilaciones transversales ni rotación propia. Si las masas oscilan como péndulos o giran, la restricción cinemática se rompe y aparecen grados de libertad adicionales.

Violar cualquiera de estas hipótesis hace que el modelo falle de forma predecible y cuantificable.

## Dominio de validez cuantitativo

El modelo funciona bien cuando se cumplen estas condiciones cuantitativas:

- **Masa de la cuerda**: m_cuerda < 0.05 × ([[m1]] + [[m2]]). La masa del cable debe ser menor al 5% de la masa total del sistema para que la tensión sea aproximadamente uniforme.

- **Masa de la polea**: m_polea < 0.1 × ([[m1]] + [[m2]]). La masa de la polea debe ser menor al 10% de la masa total para que su inercia rotacional sea despreciable.

- **Elasticidad del cable**: El alargamiento bajo carga máxima debe ser menor al 1% de la longitud total. Esto garantiza que la inextensibilidad sea una buena aproximación.

- **Velocidad del sistema**: v < 5 m/s para masas típicas de laboratorio. A velocidades mayores, la resistencia del aire se vuelve comparable a la diferencia de pesos en sistemas ligeros.

Fuera de estos rangos, los términos despreciados se vuelven comparables a los principales y el modelo pierde precisión significativamente.

## Señales de fallo del modelo

Detecta que el modelo ha dejado de ser válido mediante estos indicadores observables:

- **Discrepancia medición-cálculo**: La aceleración medida difiere más del 5% de la predicha por la fórmula ideal. Esta desviación sistemática indica que alguna idealización falla.

- **Variación de tensión**: Si se miden tensiones distintas en diferentes puntos de la cuerda, el modelo de cuerda sin masa e inextensible ya no aplica.

- **Oscilaciones transversales**: Si las masas oscilan como péndulos mientras se trasladan verticalmente, se viola la hipótesis de movimiento unidimensional.

- **Deslizamiento en la polea**: Si la cuerda patina sobre la polea en lugar de rodar sin deslizar, aparecen fuerzas de fricción cinética no incluidas en el modelo.

## Modelo extendido o alternativo

Cuando el modelo ideal falla, el siguiente paso es incluir efectos secundarios mediante un modelo extendido:

- **Polea masiva con inercia rotacional**: Se incluye el momento de inercia I de la polea en las ecuaciones, reduciendo la aceleración efectiva según el factor corrector.

- **Cuerda extensible con elasticidad**: Se modela la cuerda como un resorte lineal con constante k, permitiendo oscilaciones longitudinales del sistema.

- **Fricción en el eje de la polea**: Se introduce un torque disipativo proporcional a la velocidad angular, reduciendo la energía mecánica disponible.

- **Resistencia del aire**: Se añade una fuerza de arrastre proporcional a la velocidad, significativa para sistemas ligeros a velocidades elevadas.

Transición explícita: El modelo extendido se vuelve necesario cuando la discrepancia entre predicción ideal y medición experimental excede el 10% sistemáticamente, o cuando se diseñan sistemas industriales donde la seguridad requiere precisión superior al 5%.

## Comparación operativa

| Aspecto | Modelo Ideal | Modelo Extendido |
|---------|-------------|------------------|
| **Precisión** | Dentro del 5-10% en condiciones válidas | Dentro del 1-2% con parámetros ajustados |
| **Complejidad** | Ecuaciones algebraicas lineales | Sistema de ecuaciones diferenciales acopladas |
| **Parámetros requeridos** | Solo masas y gravedad | Masas, momento de inercia, coeficientes de fricción y elasticidad |
| **Tiempo de resolución** | Minutos a mano | Horas con software numérico |
| **Cuando usarlo** | Ejercicios educativos, estimaciones rápidas | Diseño industrial, validación experimental, investigación |
| **Rango típico** | Laboratorio escolar con masas de 0.1 a 5 kg | Sistemas industriales, minas, funiculares |

Aprende a dominar el modelo ideal primero. Una vez que puedas predecir cuándo fallará y por qué, transiciona al modelo extendido para obtener la precisión que la aplicación requiere.
