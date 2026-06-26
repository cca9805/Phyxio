## Contexto conceptual

Este leaf convierte el análisis de seguridad eléctrica en un **protocolo operativo de vivienda**: detectar, medir, priorizar y corregir. Como se establece en seguridad-electrica, un riesgo no se elimina por intuición: se reduce actuando sobre magnitud, tiempo y probabilidad. Como se indica en enchufes-y-tomas, muchos incidentes comienzan como sobrecalentamiento local aparentemente pequeño.

El objetivo operativo es claro: clasificar riesgos con criterio técnico, decidir qué corregir primero y por qué, pasar de reacción puntual a prevención sistemática, y validar si una medida realmente reduce el riesgo.

## 🟢 Nivel esencial

La idea física dominante es que **el riesgo eléctrico crece por acumulación de pequeñas desviaciones**: una sobrecarga ligera, un contacto flojo, un entorno húmedo. Cada factor individual puede parecer insignificante, pero su combinación genera condiciones de riesgo.

La **temperatura anómala repetida** es una de las señales más útiles de pre-fallo. Un enchufe templado, una regleta caliente al tacto, un olor a plástico caliente son indicadores físicos directos de que algo no funciona correctamente.

Importante: **no todo riesgo dispara una protección de forma inmediata**. Un magnetotérmico puede no saltar ante una resistencia de contacto elevada que genera calor local, porque la corriente total del circuito está dentro del rango normal.

Una buena práctica es aquella que **reduce probabilidad y severidad a la vez**. El orden de actuación importa: primero se atiende el riesgo alto con síntomas activos, luego la optimización de puntos con riesgo medio.

## 🔵 Nivel formal

La base matemática del protocolo descansa en tres ecuaciones fundamentales que relacionan magnitudes eléctricas y térmicas:

La **potencia térmica disipada** [[potencia_termica_disipada]] en un punto de resistencia local:

{{f:potencia_joule}}

Esta relación establece que [[potencia_termica_disipada]] crece cuadráticamente con la corriente [[corriente_electrica]] y linealmente con la resistencia local [[resistencia_electrica_local]]. Un pequeño aumento de corriente produce un gran incremento de calor; un contacto degradado con resistencia elevada genera calor significativo incluso con corrientes moderadas.

La **energía térmica acumulada** durante un intervalo de tiempo:

{{f:energia_joule}}

La energía [[energia_termica_acumulada]] representa el daño térmico total acumulado. Depende tanto de la potencia instantánea como del tiempo de exposición [[tiempo_de_exposicion]]. Una potencia moderada aplicada durante muchas horas puede producir más daño que un pico de alta potencia breve.

El **incremento de temperatura** aproximado en el punto de conexión:

{{f:incremento_termico}}

El incremento térmico [[incremento_de_temperatura]] depende de la potencia disipada y de la resistencia térmica local [[resistencia_termica]], que caracteriza la capacidad del punto para disipar calor al ambiente. Es el indicador físico más directamente observable del riesgo.

Juntas, estas tres relaciones conforman un modelo de diagnóstico completo. Mientras que la potencia indica la severidad instantánea del problema, la energía acumulada evalúa la degradación sostenida en el tiempo. Por su parte, el incremento térmico conecta directamente estas variables eléctricas invisibles con un síntoma físico medible, permitiendo así una evaluación objetiva y estructurada de la seguridad en cualquier punto de la instalación doméstica.

## 🔴 Nivel estructural

El análisis de riesgos eléctricos domésticos presenta una arquitectura física donde **el origen es local pero la consecuencia puede ser global**. Un punto de conexión degradado —un simple tornillo aflojado en una regleta— genera calor localmente mediante disipación [[potencia_termica_disipada]], pero este calor no se queda confinado: aumenta la temperatura ambiente del cuadro eléctrico, acelera el envejecimiento de cables adyacentes, y puede propagarse a través de conducción térmica por los conductores metálicos. Físicamente, estamos ante un **sistema acoplado térmicamente** donde la resistencia de contacto local [[resistencia_electrica_local]] determina un punto caliente que funciona como fuente térmica para todo el entorno inmediato.

La **propagación del riesgo** sigue mecanismos distintos en cada etapa. Inicialmente, el calor se disipa localmente mediante convección natural y radiación térmica desde el punto degradado. Si la potencia disipada [[potencia_termica_disipada]] supera la capacidad de disipación térmica local (determinada por [[resistencia_termica]] y las condiciones de ventilación), la temperatura del punto crece hasta alcanzar valores que degradan el material aislante circundante. Este proceso de degradación térmica acelerada reduce la resistencia de aislamiento de cables cercanos, creando potencialmente nuevos puntos de riesgo donde originalmente no existían. La consecuencia es que un único punto de fallo puede multiplicarse en varios si no se interviene a tiempo.

El **sistema de decisión mínimo** para gestionar este riesgo estructural requiere un conjunto reducido pero suficiente de magnitudes observables: corriente [[corriente_electrica]] que determina la potencia disponible para disipación, temperatura local [[incremento_de_temperatura]] como indicador directo de sobrecalentamiento, frecuencia de eventos térmicos como señal de degradación progresiva, y evolución temporal del síntoma como predictor de cercanía al fallo crítico. Con estas cuatro variables, un operador puede clasificar cualquier punto de la instalación en categorías de riesgo sin necesidad de instrumentación sofisticada.

La **priorización objetiva** transforma la gestión de riesgos desde decisiones subjetivas ("me parece que está caliente") a criterios cuantitativos trazables. Cuando dos puntos compiten por recursos de mantenimiento limitados, la comparación de [[energia_termica_acumulada]] acumulada determina cuál representa mayor daño térmico proyectado anual. La comparación de [[incremento_de_temperatura]] indica cuál está más próximo a umbrales críticos de seguridad. La comparación de tendencias temporales (¿está creciendo [[resistencia_electrica_local]] con el tiempo?) señala cuál degradación es irreversible y requiere intervención definitiva versus cuál puede mantenerse con monitorización.

El **dominio de validez estructural** del protocolo está definido por sus hipótesis fundamentales. Asume conexiones metálicas en régimen de corriente continua o alterna con valor eficaz estable, válido para instalaciones domésticas típicas. Asume que la resistencia de contacto [[resistencia_electrica_local]] varía lentamente comparado con la constante térmica del sistema, lo cual falla si hay transitorios térmicos rápidos. Asume comportamiento lineal de las resistencias térmicas, válido para el rango de temperaturas domésticas normales pero no para situaciones de arco eléctrico o cortocircuito. El protocolo es menos aplicable a certificación normativa profesional que requiere trazabilidad metrológica completa, y no sustituye la normativa eléctrica de obligado cumplimiento. Funciona como herramienta de mantenimiento preventivo, no como auditoría de cumplimiento normativo.

**Límites del modelo y transiciones de régimen** son críticos para aplicar el protocolo correctamente. Cuando [[incremento_de_temperatura]] supera aproximadamente 80–100 K, el modelo lineal de resistencia térmica deja de ser válido porque la radiación térmica (proporcional a T⁴ según Stefan-Boltzmann) domina sobre la convección. Cuando la resistencia de contacto [[resistencia_electrica_local]] crece por encima de ~1 Ω, el punto se comporta más como un elemento calefactor intencional que como una conexión eléctrica, generando calor extremo con corrientes moderadas. En ambos casos extremos, el protocolo sigue siendo útil como detector de "situación anómala que requiere intervención inmediata", aunque los valores cuantitativos de [[potencia_termica_disipada]] y [[incremento_de_temperatura]] dejen de seguir las relaciones lineales simples del modelo básico.

## Interpretación física profunda

En vivienda, los incidentes eléctricos rara vez ocurren "de golpe". Suelen seguir un patrón predecible de cinco etapas:

1. **Anomalía ignorada**: Un enchufe templado, una chispa leve al conectar, un disparo ocasional del magnetotérmico.
2. **Repetición**: El síntoma reaparece bajo condiciones de carga similares.
3. **Degradación**: Aumento de la resistencia local por oxidación o aflojamiento, degradación del aislamiento térmico.
4. **Escalación**: Incremento de calor producido y frecuencia de síntomas, olor a plástico caliente.
5. **Fallo manifiesto**: Disparo recurrente, olor intenso, carbonización visible, corte de suministro.

La precaución eficaz consiste en **intervenir en la etapa 1 o 2**, no en esperar al fallo manifiesto de la etapa 5. Cuanto más temprana sea la intervención, menor el coste y mayor la efectividad.

## Orden de magnitud

Los valores típicos de las magnitudes principales en evaluación de riesgos domésticos son:

- **Corriente [[corriente_electrica]]**: 0-25 A en circuitos estándar. Valores superiores a 16 A continuados en regletas domésticas merecen atención.

- **Resistencia de contacto [[resistencia_electrica_local]]**: < 0.01 Ω en buen estado, 0.05-0.5 Ω en contacto degradado, > 0.5 Ω en riesgo alto.

- **Potencia térmica [[potencia_termica_disipada]]**: < 1 W despreciable, 1-5 W atención, 5-10 W riesgo moderado, > 10 W riesgo alto requiere intervención.

- **Energía acumulada diaria [[energia_termica_acumulada]]**: < 10 kJ negligible, 10-50 kJ bajo, 50-200 kJ moderado, > 200 kJ alto riesgo acumulado.

- **Incremento térmico [[incremento_de_temperatura]]**: < 10 K normal, 10-40 K atención, > 40 K intervención inmediata.

## Método de resolución personalizado

El protocolo operativo de evaluación de riesgos consta de siete pasos:

1. **Mapeo**: Identificar puntos críticos del hogar (cocina, baño, regletas de trabajo, equipos de climatización, zonas húmedas).

2. **Registro**: Para cada punto, anotar carga habitual [[corriente_electrica]], síntomas observados (temperatura, olor, holgura), y tiempo de uso diario [[tiempo_de_exposicion]].

3. **Estimación**: Calcular [[potencia_termica_disipada]] = [[corriente_electrica]]²·[[resistencia_electrica_local]] para conexiones sospechosas y estimar el incremento térmico [[incremento_de_temperatura]].

4. **Puntuación**: Asignar a cada punto un índice de prioridad basado en severidad, probabilidad de repetición y exposición temporal.

5. **Ordenación**: Clasificar acciones en tres categorías:
   - **Inmediata**: Riesgo alto con síntomas activos ([[potencia_termica_disipada]] > 10 W o [[incremento_de_temperatura]] > 40 K)
   - **Corto plazo**: Riesgo medio con tendencia creciente (5-10 W, 20-40 K)
   - **Seguimiento**: Riesgo bajo controlado (< 5 W, < 20 K)

6. **Ejecución**: Realizar corrección técnica (sustitución del conector, reapriete de tornillos, redistribución de cargas, mejora de protecciones).

7. **Verificación**: Revisar de nuevo en servicio real para comprobar que los indicadores han mejorado comparando [[potencia_termica_disipada]] antes y después.

## Casos especiales y ejemplo extendido

### Caso práctico: regleta de escritorio

Consideramos un contacto degradado sometido a una corriente de 11 A con una resistencia local de 0.11 ohmios, usado durante un tiempo de 4 horas diarias, y con una resistencia térmica de 3.5 kelvins por vatio.

Aplicando la ecuación correspondiente, la potencia disipada alcanza casi 13.3 vatios. Al multiplicar esta potencia por los 14400 segundos de uso, la energía térmica diaria acumulada roza los 191 kilojulios. Finalmente, el incremento térmico estimado ronda los 47 kelvins.

**Lectura técnica**: Una elevación de casi 47 K justifica actuación rápida aunque no haya disparos de protección. Reducir la corriente a 8 A baja [[potencia_termica_disipada]] a 7.04 W, casi la mitad, lo que demuestra cómo la distribución de cargas reduce el riesgo.

## Preguntas reales del alumno

**¿Si nunca saltó el magnetotérmico, puedo asumir que todo está bien?**

No necesariamente. Puedes tener sobrecalentamiento local significativo sin que la corriente total del circuito supere el umbral del magnetotérmico. Un punto con alta potencia puede estar peligrosamente caliente mientras la corriente global es normal.

**¿Qué es más peligroso: un pico corto de corriente o una carga media durante muchas horas?**

Depende del contexto, pero generalmente una carga sostenida en un contacto degradado acumula daño térmico más significativo. La energía acumulada crece linealmente con el tiempo, mientras que un pico breve puede no producir daño acumulado si el sistema tiene capacidad térmica suficiente.

**¿Qué error comete más la gente en casa?**

Normalizar síntomas pequeños y posponer la corrección. El error más común es pensar "si funciona, no hay problema", ignorando que los fallos graves suelen tener etapas previas detectables.

**¿Cómo se evita recaer en el mismo problema?**

Con una rutina mínima de mantenimiento preventivo: inspección visual trimestral de puntos críticos, control de cargas simultáneas, y revisión exhaustiva tras cualquier incidencia (disparo, olor, calentamiento).

## Conexiones transversales y rutas de estudio

Desde este leaf puedes avanzar hacia:

- **[Seguridad eléctrica](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/seguridad-electrica)**: Marco cuantitativo de riesgo humano y protección eléctrica.
- **[Enchufes y tomas](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/enchufes-y-tomas)**: Foco principal de riesgos térmicos locales en conexiones domésticas.
- **[Diferencial y magnetotérmico](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/diferencial-y-magnetotermico)**: Qué protección actúa en cada escenario y qué escenarios pueden quedar fuera del alcance de las protecciones.
- **[Coste de la electricidad](leaf:fisica-clasica/electromagnetismo/electricidad-domestica/coste-de-la-electricidad)**: Impacto económico de hábitos seguros y eficientes.
- **[Modelo físico y dominio de validez](leaf:fundamentos/conceptos-estructurales/modelo-fisico-y-dominio-de-validez)**: Límites del modelo simplificado de mantenimiento preventivo.

## Síntesis final

Riesgos y precauciones no es una lista genérica de consejos de seguridad. Es un **método técnico de priorización y control** basado en magnitudes físicas medibles —[[potencia_termica_disipada]], [[energia_termica_acumulada]], [[incremento_de_temperatura]]— que permite cortar la cadena de fallo antes de que se produzca el incidente. La precaución eficaz interviene temprano, cuantifica el riesgo, y verifica que la mejora realmente ha reducido el peligro.