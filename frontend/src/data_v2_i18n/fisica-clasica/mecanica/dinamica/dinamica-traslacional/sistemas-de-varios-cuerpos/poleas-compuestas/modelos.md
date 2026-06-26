# Modelos físicos: Poleas compuestas

## Modelo ideal

El modelo ideal de poleas compuestas simplifica deliberadamente el sistema real mediante tres idealizaciones fundamentales. Las poleas se consideran sin masa y sin rozamiento en sus ejes, girando libremente sin disipar energía. La cuerda se asume perfectamente flexible e inextensible, transmitiendo tensión uniformemente sin almacenar energía elástica ni deformarse. El sistema se encuentra en equilibrio estático o movimiento cuasi-estático, donde las aceleraciones son despreciables.

Estas simplificaciones no hacen el modelo falso; lo convierten en una herramienta abstracta deliberada que captura la esencia de la ventaja mecánica. El arte radica en reconocer cuándo las idealizaciones son aceptables versus cuándo deben corregirse.

## Hipótesis

Las hipótesis explícitas que sostienen el modelo son:

- **Poleas ideales**: Las poleas no tienen masa ni rozamiento en sus ejes. Si las poleas tienen masa significativa, parte del esfuerzo se destina a acelerarlas. Si hay rozamiento en ejes, se disipa energía como calor que el modelo ideal no considera.

- **Cuerda ideal**: La cuerda es inextensible y perfectamente flexible. Si la cuerda se estira bajo carga, las poleas móviles descienden adicionalmente. Si es rígida, requiere trabajo para doblarse alrededor de las poleas.

- **Equilibrio cuasi-estático**: El sistema se mueve con velocidad constante (o está en reposo). Si hay aceleraciones significativas, deben incluirse términos de fuerza neta adicionales a las ecuaciones de equilibrio.

- **Tramos paralelos**: Los tramos de cuerda que sostienen la carga son aproximadamente paralelos. Si los tramos forman ángulos significativos, las componentes verticales de tensión reducen la efectividad de cada tramo.

Violar cualquiera de estas hipótesis hace que el modelo falle de forma predecible y cuantificable.

## Dominio de validez cuantitativo

El modelo funciona bien cuando se cumplen estas condiciones cuantitativas:

- **Masa de poleas móviles**: m_poleas < 0.1 × [[W]]. El peso acumulado de las poleas móviles debe ser menor al 10% del peso de la carga.

- **Rozamiento en ejes**: El par de rozamiento en cada eje debe ser menor al 5% del par de rotación transmitido. Esto equivale aproximadamente a [[eta]] > 0.9.

- **Elasticidad de la cuerda**: La elongación máxima bajo carga nominal debe ser menor al 2% de la longitud total. Cuerdas más elásticas almacenan energía y oscilan.

- **Velocidad de operación**: v < 1 m/s para cargas típicas. A mayores velocidades, efectos dinámicos (fuerzas de inercia, vibraciones) se vuelven significativos.

Fuera de estos rangos, los términos despreciados se vuelven comparables a los principales y el modelo pierde precisión significativa.

## Señales de fallo del modelo

Detecta que el modelo ha dejado de ser válido mediante estos indicadores observables:

- **Discrepancia medición-cálculo**: La fuerza medida difiere más del 15% de la predicha idealmente. Esto indica que alguna no-idealidad domina.

- **Variación de eficiencia**: Si la relación entre carga y fuerza medida no es lineal, la eficiencia no es constante como asume el modelo.

- **Deslizamiento de cuerda**: Si la cuerda se desliza sobre las poleas, la hipótesis de transmisión perfecta de fuerza falla.

- **Oscilaciones persistentes**: Si el sistema oscila al detenerse o iniciar movimiento, hay energía elástica almacenada que el modelo no considera.

## Modelo extendido o alternativo

Cuando el modelo ideal falla, el siguiente paso es incluir efectos secundarios:

- **Modelo con rozamiento de ejes**: Incluye un par de rozamiento constante por eje de polea. Esto aumenta la fuerza requerida proporcionalmente al número de poleas móviles.

- **Modelo con peso de poleas**: Añade el peso de las poleas móviles a la carga efectiva. Esto es crítico en sistemas con muchas poleas o cargas ligeras.

- **Modelo con elasticidad de cuerda**: Trata la cuerda como un resorte lineal. Esto explica oscilaciones y requiere considerar energía potencial elástica.

- **Modelo dinámico completo**: Incluye aceleraciones y masas en rotación. Necesario para análisis de arranque, parada o movimientos rápidos.

**Cuándo conviene pasar al modelo extendido:**

Cuando conviene pasar al modelo extendido: cuando la discrepancia entre predicción ideal y medición experimental sistemáticamente supera el 20%, o cuando se diseñan sistemas industriales donde la seguridad requiere precisión mejor que el 10%.

La transición al modelo extendido conviene cuando los cálculos simples ya no son suficientes para garantizar la seguridad operativa.

## Comparación operativa

| Aspecto | Modelo Ideal | Modelo Extendido |
|---------|-------------|------------------|
| **Precisión** | Dentro del 10% en condiciones válidas | Dentro del 3% con parámetros ajustados |
| **Complejidad** | Ecuaciones algebraicas lineales | Sistema de ecuaciones acopladas |
| **Parámetros requeridos** | Solo [[W]], [[nSel]], [[eta]] opcional | Masas de poleas, coeficientes de rozamiento, constante elástica de cuerda |
| **Tiempo de resolución** | Minutos a mano | Horas con software numérico |
| **Cuándo usarlo** | Diseño preliminar, educación, estimaciones rápidas | Diseño de seguridad industrial, validación experimental, investigación |
| **Rango típico** | Grúas pequeñas, equipos de rescate, montacargas | Puentes grúa, sistemas mineros, aparejos navales complejos |

Aprende a dominar el modelo ideal primero. Una vez puedas predecir cuándo fallará y por qué, transita al modelo extendido para obtener la precisión que la aplicación requiere.
