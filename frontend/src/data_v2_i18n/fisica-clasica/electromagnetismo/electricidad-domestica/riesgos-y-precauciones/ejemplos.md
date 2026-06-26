# Ejemplo tipo examen

Control 1: En Riesgos y precauciones, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

## Enunciado

En una inspección de seguridad eléctrica doméstica se evalúan dos puntos de conexión sospechosos:

- **Punto A**: Enchufe de cocina con [[corriente_electrica]] = 10 A, resistencia de contacto estimada [[resistencia_electrica_local]] = 0.08 Ω, tiempo de uso típico 2 h/día.
- **Punto B**: Regleta de escritorio con [[corriente_electrica]] = 7 A, resistencia de contacto estimada [[resistencia_electrica_local]] = 0.20 Ω, tiempo de uso 6 h/día.

Se debe priorizar la intervención determinando cuál representa mayor riesgo térmico acumulado.

## Datos

Los valores numéricos son datos del ejemplo, no magnitudes Phyxio nuevas. Las magnitudes involucradas son:
- Corriente eléctrica [[corriente_electrica]] que circula por cada punto
- Resistencia de contacto [[resistencia_electrica_local]] estimada por estado del conector
- Tiempo de uso diario [[tiempo_de_exposicion]] según hábitos de uso
- Potencia térmica [[potencia_termica_disipada]] a calcular
- Energía térmica diaria [[energia_termica_acumulada]] como indicador de daño acumulado

## Definición del sistema

El sistema considera cada punto de conexión como una resistencia local [[resistencia_electrica_local]] por la que circula corriente [[corriente_electrica]], disipando potencia térmica [[potencia_termica_disipada]]. La energía acumulada [[energia_termica_acumulada]] permite comparar riesgo entre puntos con diferentes perfiles de uso.

La pregunta física es cuál punto acumula más energía térmica diaria, no cuál tiene mayor potencia instantánea.

## Modelo físico

Se aplica el modelo de potencia térmica disipada:

{{f:potencia_joule}}

Para evaluar el daño térmico acumulado se calcula la energía total disipada:

{{f:energia_joule}}

El modelo físico considera magnitudes fundamentales del sistema como [[capacidad_termica]], [[corriente_electrica]], [[diferencia_de_potencia_termica]].


## Justificación del modelo

El modelo es razonable para conexiones metálicas en régimen de corriente continua o alterna con valor eficaz estable. La resistencia de contacto puede estimarse visualmente (oxido, holgura) o medirse en circuito abierto.

El modelo dejaría de ser suficiente si la resistencia varía significativamente con la temperatura, si hay transitorios térmicos rápidos, o si el tiempo de uso es muy irregular. En esos casos sería necesario el modelo extendido con dependencia térmica.

## Resolución simbólica

Para el punto A:
- Potencia térmica: [[potencia_termica_disipada]]_A = [[corriente_electrica]]_A² · [[resistencia_electrica_local]]_A
- Energía diaria: [[energia_termica_acumulada]]_A = [[potencia_termica_disipada]]_A · [[tiempo_de_exposicion]]_A
- Incremento térmico: [[incremento_de_temperatura]]_A = [[potencia_termica_disipada]]_A · [[resistencia_termica]]_A

Para el punto B:
- Potencia térmica: [[potencia_termica_disipada]]_B = [[corriente_electrica]]_B² · [[resistencia_electrica_local]]_B
- Energía diaria: [[energia_termica_acumulada]]_B = [[potencia_termica_disipada]]_B · [[tiempo_de_exposicion]]_B
- Incremento térmico: [[incremento_de_temperatura]]_B = [[potencia_termica_disipada]]_B · [[resistencia_termica]]_B

La comparación de [[energia_termica_acumulada]] determina cuál punto acumula más daño térmico diario. El incremento térmico [[incremento_de_temperatura]] indica la temperatura superficial alcanzada y su detectabilidad al tacto.

{{f:energia_joule}}

{{f:incremento_termico}}


## Sustitución numérica

**Punto A (cocina):**

{{f:potencia_joule}}

Para la potencia, elevar 10 A al cuadrado y multiplicar por 0.08 Ω, resultando aproximadamente 8 W. Por tanto [[potencia_termica_disipada]] ≈ 8 W.

{{f:energia_joule}}

Para la energía, multiplicar 8 W por 7200 segundos (2 horas) da aproximadamente 57.6 kJ diarios. Por tanto [[energia_termica_acumulada]] ≈ 57.6 kJ/día.

**Punto B (escritorio):**

{{f:potencia_joule}}

Para la potencia, elevar 7 A al cuadrado y multiplicar por 0.20 Ω, resultando aproximadamente 9.8 W. Por tanto [[potencia_termica_disipada]] ≈ 9.8 W.

{{f:energia_joule}}

Para la energía, multiplicar 9.8 W por 21,600 segundos (6 horas) da aproximadamente 211.7 kJ diarios. Por tanto [[energia_termica_acumulada]] ≈ 211.7 kJ/día.

**Cálculo de incremento térmico (punto B):**

{{f:incremento_termico}}

Para el incremento térmico, multiplicar 9.8 W por la resistencia térmica estimada (3.5 K/W) da aproximadamente 34.3 K. Por tanto [[incremento_de_temperatura]]_B ≈ 34 K sobre temperatura ambiente, detectable claramente al tacto como "caliente".

## Validación dimensional

La validación dimensional es coherente:
- Unidades de potencia: A² · Ω se resuelven a W mediante análisis dimensional `[M L² T⁻³]`
- Unidades de energía: watt-segundo equivalente a julio, verificado por homogeneidad dimensional `[M L² T⁻²]`

Desglose dimensional:
- Corriente al cuadrado por resistencia: `[I]² · [M L² T⁻³ I⁻²] = [M L² T⁻³]` ✓
- Potencia por tiempo: `[M L² T⁻³] · [T] = [M L² T⁻²]` ✓

La comparación de energías acumuladas es directa al tener ambas las mismas unidades (kJ/día).

## Interpretación física

El resultado cuantitativo revela una paradoja física aparente: el punto B acumula 3.7 veces más energía térmica diaria que el punto A (211.7 kJ vs 57.6 kJ), a pesar de tener solo el 70% de la corriente (7 A vs 10 A). Esta inversión de expectativas surge de la naturaleza cuadrática de la potencia ([[potencia_termica_disipada]] ∝ [[corriente_electrica]]²) combinada con la dependencia lineal de la resistencia y el tiempo.

Físicamente, el punto B sufre una "dosis térmica" significativamente mayor porque la resistencia de contacto degradada (0.20 Ω vs 0.08 Ω) eleva su potencia disipada a 9.8 W frente a los 8 W del punto A, compensando ampliamente la menor corriente. Además, el tiempo de uso prolongado (6 h vs 2 h) multiplica este efecto, transformando una ventaja de potencia moderada (22% mayor) en una diferencia de energía acumulada abrumadora (268% mayor). Esto demuestra que el daño térmico no es una función de la "intensidad" instantánea, sino de la "dosis" total de calor transferido al sistema.

El incremento térmico calculado ([[incremento_de_temperatura]]_B ≈ 34 K) proporciona una segunda señal de alerta físicamente observable: un conector a ~59 °C (suponiendo 25 °C ambiente) es detectable claramente al tacto humano como "caliente" o "tibio intenso". Esta elevación térmica persistente durante 6 horas diarias induce estrés térmico cíclico en el material aislante, acelerando su degradación química y mecánica. En contraste, el punto A ([[incremento_de_temperatura]]_A ≈ 28 K) también está caliente (~53 °C), pero su exposición limitada (2 h) reduce el daño acumulado.

**Implicaciones de variación paramétrica**: Si la resistencia del punto B se redujera al valor del punto A (0.08 Ω) mediante reapriete o sustitución, su potencia caería a ~3.9 W y la energía diaria a ~84 kJ, haciéndolo comparable al punto A. Esto ilustra la alta sensibilidad del riesgo térmico a la resistencia de contacto, y explica por qué intervenciones simples (limpieza, reapriete) pueden reducir dramáticamente el riesgo sin modificar la carga eléctrica ([[corriente_electrica]]).

**Priorización física**: El criterio de intervención debe basarse prioritariamente en [[energia_termica_acumulada]] acumulada, no en [[potencia_termica_disipada]] instantánea ni en [[corriente_electrica]] medida. El punto B requiere atención inmediata porque su daño térmico acumulado puede inducir degradación acelerada del aislante, carbonización progresiva del conector, y eventual fallo por arco eléctrico o incendio. El punto A, aunque operando a mayor temperatura instantánea, presenta menor riesgo acumulado por su uso breve, quedando en segundo lugar de prioridad aunque con vigilancia recomendada.

# Ejemplo de aplicación real


## Contexto

María realiza mantenimiento preventivo en su hogar tras notar que una regleta de escritorio está "tibia" después de varias horas de uso. Decide evaluar cuantitativamente el riesgo antes y después de sustituir el conector degradado.

**Datos iniciales (antes de intervención):**
- Corriente medida: [[corriente_electrica]] = 7 A (uso habitual)
- Resistencia de contacto estimada: [[resistencia_electrica_local]]_antes = 0.20 Ω (contacto oxidado/aflojado)

**Después de sustituir el conector:**
- Corriente: [[corriente_electrica]] = 7 A (misma carga)
- Resistencia de contacto medida: [[resistencia_electrica_local]]_después = 0.06 Ω (conector nuevo bien apretado)

## Estimación física

La potencia térmica antes de la intervención:

{{f:potencia_joule}}

Para la potencia antes, elevar 7 A al cuadrado y multiplicar por 0.20 Ω da aproximadamente 9.8 W. Por tanto [[potencia_termica_disipada]]_antes ≈ 9.8 W.

La potencia térmica después de la intervención:

{{f:potencia_joule}}

Para la potencia después, elevar 7 A al cuadrado y multiplicar por 0.06 Ω da aproximadamente 2.94 W. Por tanto [[potencia_termica_disipada]]_después ≈ 2.94 W.

La reducción de potencia disipada:

Restando las potencias (9.8 W menos 2.94 W) se obtiene una reducción de 6.86 W. Por tanto [[diferencia_de_potencia_termica]] ≈ 6.86 W.

Reducción porcentual: (6.86 / 9.8) × 100% = 70%

## Interpretación

La sustitución del conector reduce la potencia térmica disipada en un 70%, pasando de casi 10 W a menos de 3 W. Esta reducción:

1. **Disminuye el incremento térmico**: Con [[resistencia_termica]] ≈ 3.5 K/W, la temperatura baja de aproximadamente 34 K a 10 K sobre ambiente.

2. **Reduce el riesgo de incendio**: El nuevo conector opera dentro de rango seguro, mientras el anterior estaba en zona de riesgo moderado-alto.

3. **Mejora la eficiencia**: Aunque la energía "ahorrada" no es recuperable, se reduce el consumo parasitario y el deterioro del cableado.

La verificación cuantitativa confirma que la medida de mantenimiento preventivo fue efectiva, justificando el coste de la intervención técnica.

## Errores comunes evitados

- No crear magnitudes auxiliares para cada punto (usar sufijos A y B)
- No confundir potencia instantánea con energía acumulada
- Considerar el tiempo de exposición como factor crítico
- No asumir que mayor corriente implica siempre mayor riesgo

---