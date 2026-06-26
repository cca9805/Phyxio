const e=`# Modelos físicos: Poleas simples\r
\r
## Modelo ideal\r
\r
El modelo ideal de poleas simples asume poleas sin masa, cuerda inextensible sin masa, y ausencia de rozamiento en ejes. Estas idealizaciones permiten derivar las relaciones de fuerza de tracción y recorrido de cuerda de manera directa mediante equilibrio estático.
\r
Las simplificaciones principales son:\r
\r
- **Cuerda inextensible y sin masa**: La longitud de cuerda permanece constante durante la operación.\r
- **Poleas sin masa**: El peso de la polea móvil no se suma a la carga.\r
- **Sin rozamiento en ejes**: La tensión es igual en todos los puntos de la cuerda.\r
- **Equilibrio estático**: No hay aceleraciones; el sistema está en reposo o movimiento uniforme.\r
\r
Cada una de estas idealizaciones tiene consecuencias físicas medibles cuando se violan.\r
\r
## Hipótesis\r
\r
Las hipótesis explícitas que sostienen el modelo son:\r
\r
- **Hipótesis de cuerda ideal**: La cuerda no se estira y tiene masa despreciable comparada con la carga.\r
- **Hipótesis de polea ideal**: La masa de la polea móvil es menor al 5% de la carga levantada.\r
- **Hipótesis de rozamiento despreciable**: El coeficiente de rozamiento en el eje es tan bajo que las pérdidas son menores al 10%.\r
- **Hipótesis de cuasi-estaticidad**: La aceleración es despreciable (menor a 0.1 g).\r
\r
Violar cualquiera de estas hipótesis hace que el modelo falle predeciblemente.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo funciona bien cuando se cumplen estas condiciones cuantitativas:\r
\r
- **Cargas**: 10 N < [[W]] < 1000 N (aproximadamente 1 kg a 100 kg)\r
- **Número de tramos**: [[nSel]] con valor 1 (polea fija) o [[nSel]] con valor 2 (polea móvil)
- **Eficiencia mecánica**: superior a 0.9 en sistemas bien lubricados
- **Aceleración**: menor que 0.1 veces la gravedad (movimiento cuasi-estático)
\r
Fuera de estos rangos, los términos despreciados en el modelo idealizado se vuelven comparables a los términos principales y el modelo pierde precisión.\r
\r
## Señales de fallo del modelo\r
\r
¿Cómo detectas que el modelo ha dejado de ser válido? Busca estos indicadores observables:\r
\r
- **Discrepancia medición**: Tu fuerza calculada difiere de la medida real en más del 10%.\r
- **Fuerza variable**: La fuerza requerida aumenta durante el ascenso (síntoma de rozamiento).\r
- **Carga máxima insuficiente**: No puedes levantar la carga calculada teóricamente.\r
- **Oscilaciones**: La carga rebota o vibra (indica elasticidad de cuerda no modelada).\r
\r
## Modelo extendido o alternativo\r
\r
Cuando el modelo ideal falla, el siguiente paso es incluir efectos secundarios:\r
\r
- **Modelo con rozamiento**: Incluye un par de rozamiento constante en el eje de la polea. La eficiencia mecánica reduce la ventaja mecánica efectiva.
- **Modelo con peso de polea**: Añade el peso de la polea móvil a la carga efectiva. Crítico cuando la polea supera el 5% de la carga.\r
- **Modelo con elasticidad de cuerda**: Trata la cuerda como un resorte lineal. Explica oscilaciones y requiere considerar energía potencial elástica.\r
- **Modelo dinámico**: Incluye aceleraciones y masas en rotación. Necesario para análisis de arranque, parada o movimientos rápidos.\r
\r
**Cuándo conviene pasar al modelo extendido:**\r
\r
Cuando conviene pasar al modelo extendido: cuando la discrepancia entre predicción ideal y medición experimental sistemáticamente supera el 15%, o cuando se diseñan sistemas industriales donde la seguridad requiere precisión mejor que el 10%.\r
\r
La transición al modelo extendido conviene cuando los cálculos simples ya no son suficientes para garantizar la operación segura.\r
\r
## Comparación operativa\r
\r
| Aspecto | Modelo Ideal | Modelo Extendido |\r
|---------|-------------|------------------|\r
| **Precisión** | Dentro del 10% en condiciones válidas | Dentro del 3% con parámetros ajustados |\r
| **Complejidad** | Ecuaciones algebraicas lineales | Sistema de ecuaciones acopladas |\r
| **Parámetros requeridos** | Solo [[W]], [[nSel]] | Masas de poleas, coeficientes de rozamiento, constante elástica de cuerda |\r
| **Tiempo resolución** | Minutos a mano | Horas con software numérico |\r
| **Cuándo usarlo** | Educación, diseño preliminar, estimaciones rápidas | Diseño de seguridad industrial, validación experimental, investigación |\r
| **Rango típico** | Cargas ligeras (< 100 kg), alturas moderadas (< 10 m) | Cargas pesadas, alturas elevadas, operaciones dinámicas |\r
\r
Aprende a dominar el modelo ideal primero. Una vez puedas predecir cuándo fallará y por qué, transita al modelo extendido para obtener la precisión que la aplicación requiere.\r
`;export{e as default};
