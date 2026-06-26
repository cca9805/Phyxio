# Modelos físicos: Poleas simples

## Modelo ideal

El modelo ideal de poleas simples asume poleas sin masa, cuerda inextensible sin masa, y ausencia de rozamiento en ejes. Estas idealizaciones permiten derivar las relaciones de fuerza de tracción y recorrido de cuerda de manera directa mediante equilibrio estático.

Las simplificaciones principales son:

- **Cuerda inextensible y sin masa**: La longitud de cuerda permanece constante durante la operación.
- **Poleas sin masa**: El peso de la polea móvil no se suma a la carga.
- **Sin rozamiento en ejes**: La tensión es igual en todos los puntos de la cuerda.
- **Equilibrio estático**: No hay aceleraciones; el sistema está en reposo o movimiento uniforme.

Cada una de estas idealizaciones tiene consecuencias físicas medibles cuando se violan.

## Hipótesis

Las hipótesis explícitas que sostienen el modelo son:

- **Hipótesis de cuerda ideal**: La cuerda no se estira y tiene masa despreciable comparada con la carga.
- **Hipótesis de polea ideal**: La masa de la polea móvil es menor al 5% de la carga levantada.
- **Hipótesis de rozamiento despreciable**: El coeficiente de rozamiento en el eje es tan bajo que las pérdidas son menores al 10%.
- **Hipótesis de cuasi-estaticidad**: La aceleración es despreciable (menor a 0.1 g).

Violar cualquiera de estas hipótesis hace que el modelo falle predeciblemente.

## Dominio de validez cuantitativo

El modelo funciona bien cuando se cumplen estas condiciones cuantitativas:

- **Cargas**: 10 N < [[W]] < 1000 N (aproximadamente 1 kg a 100 kg)
- **Número de tramos**: [[nSel]] con valor 1 (polea fija) o [[nSel]] con valor 2 (polea móvil)
- **Eficiencia mecánica**: superior a 0.9 en sistemas bien lubricados
- **Aceleración**: menor que 0.1 veces la gravedad (movimiento cuasi-estático)

Fuera de estos rangos, los términos despreciados en el modelo idealizado se vuelven comparables a los términos principales y el modelo pierde precisión.

## Señales de fallo del modelo

¿Cómo detectas que el modelo ha dejado de ser válido? Busca estos indicadores observables:

- **Discrepancia medición**: Tu fuerza calculada difiere de la medida real en más del 10%.
- **Fuerza variable**: La fuerza requerida aumenta durante el ascenso (síntoma de rozamiento).
- **Carga máxima insuficiente**: No puedes levantar la carga calculada teóricamente.
- **Oscilaciones**: La carga rebota o vibra (indica elasticidad de cuerda no modelada).

## Modelo extendido o alternativo

Cuando el modelo ideal falla, el siguiente paso es incluir efectos secundarios:

- **Modelo con rozamiento**: Incluye un par de rozamiento constante en el eje de la polea. La eficiencia mecánica reduce la ventaja mecánica efectiva.
- **Modelo con peso de polea**: Añade el peso de la polea móvil a la carga efectiva. Crítico cuando la polea supera el 5% de la carga.
- **Modelo con elasticidad de cuerda**: Trata la cuerda como un resorte lineal. Explica oscilaciones y requiere considerar energía potencial elástica.
- **Modelo dinámico**: Incluye aceleraciones y masas en rotación. Necesario para análisis de arranque, parada o movimientos rápidos.

**Cuándo conviene pasar al modelo extendido:**

Cuando conviene pasar al modelo extendido: cuando la discrepancia entre predicción ideal y medición experimental sistemáticamente supera el 15%, o cuando se diseñan sistemas industriales donde la seguridad requiere precisión mejor que el 10%.

La transición al modelo extendido conviene cuando los cálculos simples ya no son suficientes para garantizar la operación segura.

## Comparación operativa

| Aspecto | Modelo Ideal | Modelo Extendido |
|---------|-------------|------------------|
| **Precisión** | Dentro del 10% en condiciones válidas | Dentro del 3% con parámetros ajustados |
| **Complejidad** | Ecuaciones algebraicas lineales | Sistema de ecuaciones acopladas |
| **Parámetros requeridos** | Solo [[W]], [[nSel]] | Masas de poleas, coeficientes de rozamiento, constante elástica de cuerda |
| **Tiempo resolución** | Minutos a mano | Horas con software numérico |
| **Cuándo usarlo** | Educación, diseño preliminar, estimaciones rápidas | Diseño de seguridad industrial, validación experimental, investigación |
| **Rango típico** | Cargas ligeras (< 100 kg), alturas moderadas (< 10 m) | Cargas pesadas, alturas elevadas, operaciones dinámicas |

Aprende a dominar el modelo ideal primero. Una vez puedas predecir cuándo fallará y por qué, transita al modelo extendido para obtener la precisión que la aplicación requiere.
