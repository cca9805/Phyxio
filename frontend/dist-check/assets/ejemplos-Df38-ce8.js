const e=`\uFEFF# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
En una inspección de seguridad eléctrica doméstica se evalúan dos puntos de conexión sospechosos:\r
\r
- **Punto A**: Enchufe de cocina con [[I]] = 10 A, resistencia de contacto estimada [[R]] = 0.08 Ω, tiempo de uso típico 2 h/día.\r
- **Punto B**: Regleta de escritorio con [[I]] = 7 A, resistencia de contacto estimada [[R]] = 0.20 Ω, tiempo de uso 6 h/día.\r
\r
Se debe priorizar la intervención determinando cuál representa mayor riesgo térmico acumulado.\r
\r
## Datos\r
\r
Los valores numéricos son datos del ejemplo, no magnitudes Phyxio nuevas. Las magnitudes involucradas son:\r
- Corriente eléctrica [[I]] que circula por cada punto\r
- Resistencia de contacto [[R]] estimada por estado del conector\r
- Tiempo de uso diario [[t]] según hábitos de uso\r
- Potencia térmica [[P_joule]] a calcular\r
- Energía térmica diaria [[E_joule]] como indicador de daño acumulado\r
\r
## Definición del sistema\r
\r
El sistema considera cada punto de conexión como una resistencia local [[R]] por la que circula corriente [[I]], disipando potencia térmica [[P_joule]]. La energía acumulada [[E_joule]] permite comparar riesgo entre puntos con diferentes perfiles de uso.\r
\r
La pregunta física es cuál punto acumula más energía térmica diaria, no cuál tiene mayor potencia instantánea.\r
\r
## Modelo físico\r
\r
Se aplica el modelo de potencia térmica disipada:\r
\r
{{f:potencia_joule}}\r
\r
Para evaluar el daño térmico acumulado se calcula la energía total disipada:\r
\r
{{f:energia_joule}}\r
\r
## Justificación del modelo\r
\r
El modelo es razonable para conexiones metálicas en régimen de corriente continua o alterna con valor eficaz estable. La resistencia de contacto puede estimarse visualmente (oxido, holgura) o medirse en circuito abierto.\r
\r
El modelo dejaría de ser suficiente si la resistencia varía significativamente con la temperatura, si hay transitorios térmicos rápidos, o si el tiempo de uso es muy irregular. En esos casos sería necesario el modelo extendido con dependencia térmica.\r
\r
## Resolución simbólica\r
\r
Para el punto A:\r
- Potencia térmica: [[P_joule]]_A = [[I]]_A² · [[R]]_A\r
- Energía diaria: [[E_joule]]_A = [[P_joule]]_A · [[t]]_A\r
- Incremento térmico: [[DeltaT]]_A = [[P_joule]]_A · [[R_th]]_A\r
\r
Para el punto B:\r
- Potencia térmica: [[P_joule]]_B = [[I]]_B² · [[R]]_B\r
- Energía diaria: [[E_joule]]_B = [[P_joule]]_B · [[t]]_B\r
- Incremento térmico: [[DeltaT]]_B = [[P_joule]]_B · [[R_th]]_B\r
\r
La comparación de [[E_joule]] determina cuál punto acumula más daño térmico diario. El incremento térmico [[DeltaT]] indica la temperatura superficial alcanzada y su detectabilidad al tacto.\r
\r
## Sustitución numérica\r
\r
**Punto A (cocina):**\r
\r
{{f:potencia_joule}}\r
\r
Para la potencia, elevar 10 A al cuadrado y multiplicar por 0.08 Ω, resultando aproximadamente 8 W. Por tanto [[P_joule]] ≈ 8 W.\r
\r
{{f:energia_joule}}\r
\r
Para la energía, multiplicar 8 W por 7200 segundos (2 horas) da aproximadamente 57.6 kJ diarios. Por tanto [[E_joule]] ≈ 57.6 kJ/día.\r
\r
**Punto B (escritorio):**\r
\r
{{f:potencia_joule}}\r
\r
Para la potencia, elevar 7 A al cuadrado y multiplicar por 0.20 Ω, resultando aproximadamente 9.8 W. Por tanto [[P_joule]] ≈ 9.8 W.\r
\r
{{f:energia_joule}}\r
\r
Para la energía, multiplicar 9.8 W por 21,600 segundos (6 horas) da aproximadamente 211.7 kJ diarios. Por tanto [[E_joule]] ≈ 211.7 kJ/día.\r
\r
**Cálculo de incremento térmico (punto B):**\r
\r
{{f:incremento_termico}}\r
\r
Para el incremento térmico, multiplicar 9.8 W por la resistencia térmica estimada (3.5 K/W) da aproximadamente 34.3 K. Por tanto [[DeltaT]]_B ≈ 34 K sobre temperatura ambiente, detectable claramente al tacto como "caliente".\r
\r
## Validación dimensional\r
\r
La validación dimensional es coherente:\r
- Unidades de potencia: A² · Ω se resuelven a W mediante análisis dimensional \`[M L² T⁻³]\`\r
- Unidades de energía: watt-segundo equivalente a julio, verificado por homogeneidad dimensional \`[M L² T⁻²]\`\r
\r
Desglose dimensional:\r
- Corriente al cuadrado por resistencia: \`[I]² · [M L² T⁻³ I⁻²] = [M L² T⁻³]\` ✓\r
- Potencia por tiempo: \`[M L² T⁻³] · [T] = [M L² T⁻²]\` ✓\r
\r
La comparación de energías acumuladas es directa al tener ambas las mismas unidades (kJ/día).\r
\r
## Interpretación física\r
\r
El resultado cuantitativo revela una paradoja física aparente: el punto B acumula 3.7 veces más energía térmica diaria que el punto A (211.7 kJ vs 57.6 kJ), a pesar de tener solo el 70% de la corriente (7 A vs 10 A). Esta inversión de expectativas surge de la naturaleza cuadrática de la potencia ([[P_joule]] ∝ [[I]]²) combinada con la dependencia lineal de la resistencia y el tiempo.\r
\r
Físicamente, el punto B sufre una "dosis térmica" significativamente mayor porque la resistencia de contacto degradada (0.20 Ω vs 0.08 Ω) eleva su potencia disipada a 9.8 W frente a los 8 W del punto A, compensando ampliamente la menor corriente. Además, el tiempo de uso prolongado (6 h vs 2 h) multiplica este efecto, transformando una ventaja de potencia moderada (22% mayor) en una diferencia de energía acumulada abrumadora (268% mayor). Esto demuestra que el daño térmico no es una función de la "intensidad" instantánea, sino de la "dosis" total de calor transferido al sistema.\r
\r
El incremento térmico calculado ([[DeltaT]]_B ≈ 34 K) proporciona una segunda señal de alerta físicamente observable: un conector a ~59 °C (suponiendo 25 °C ambiente) es detectable claramente al tacto humano como "caliente" o "tibio intenso". Esta elevación térmica persistente durante 6 horas diarias induce estrés térmico cíclico en el material aislante, acelerando su degradación química y mecánica. En contraste, el punto A ([[DeltaT]]_A ≈ 28 K) también está caliente (~53 °C), pero su exposición limitada (2 h) reduce el daño acumulado.\r
\r
**Implicaciones de variación paramétrica**: Si la resistencia del punto B se redujera al valor del punto A (0.08 Ω) mediante reapriete o sustitución, su potencia caería a ~3.9 W y la energía diaria a ~84 kJ, haciéndolo comparable al punto A. Esto ilustra la alta sensibilidad del riesgo térmico a la resistencia de contacto, y explica por qué intervenciones simples (limpieza, reapriete) pueden reducir dramáticamente el riesgo sin modificar la carga eléctrica ([[I]]).\r
\r
**Priorización física**: El criterio de intervención debe basarse prioritariamente en [[E_joule]] acumulada, no en [[P_joule]] instantánea ni en [[I]] medida. El punto B requiere atención inmediata porque su daño térmico acumulado puede inducir degradación acelerada del aislante, carbonización progresiva del conector, y eventual fallo por arco eléctrico o incendio. El punto A, aunque operando a mayor temperatura instantánea, presenta menor riesgo acumulado por su uso breve, quedando en segundo lugar de prioridad aunque con vigilancia recomendada.\r
\r
## Errores comunes evitados\r
\r
- No crear magnitudes auxiliares para cada punto (usar sufijos A y B)\r
- No confundir potencia instantánea con energía acumulada\r
- Considerar el tiempo de exposición como factor crítico\r
- No asumir que mayor corriente implica siempre mayor riesgo\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
María realiza mantenimiento preventivo en su hogar tras notar que una regleta de escritorio está "tibia" después de varias horas de uso. Decide evaluar cuantitativamente el riesgo antes y después de sustituir el conector degradado.\r
\r
**Datos iniciales (antes de intervención):**\r
- Corriente medida: [[I]] = 7 A (uso habitual)\r
- Resistencia de contacto estimada: [[R]]_antes = 0.20 Ω (contacto oxidado/aflojado)\r
\r
**Después de sustituir el conector:**\r
- Corriente: [[I]] = 7 A (misma carga)\r
- Resistencia de contacto medida: [[R]]_después = 0.06 Ω (conector nuevo bien apretado)\r
\r
## Estimación física\r
\r
La potencia térmica antes de la intervención:\r
\r
{{f:potencia_joule}}\r
\r
Para la potencia antes, elevar 7 A al cuadrado y multiplicar por 0.20 Ω da aproximadamente 9.8 W. Por tanto [[P_joule]]_antes ≈ 9.8 W.\r
\r
La potencia térmica después de la intervención:\r
\r
{{f:potencia_joule}}\r
\r
Para la potencia después, elevar 7 A al cuadrado y multiplicar por 0.06 Ω da aproximadamente 2.94 W. Por tanto [[P_joule]]_después ≈ 2.94 W.\r
\r
La reducción de potencia disipada:\r
\r
Restando las potencias (9.8 W menos 2.94 W) se obtiene una reducción de 6.86 W. Por tanto [[DeltaP]] ≈ 6.86 W.\r
\r
Reducción porcentual: (6.86 / 9.8) × 100% = 70%\r
\r
## Interpretación\r
\r
La sustitución del conector reduce la potencia térmica disipada en un 70%, pasando de casi 10 W a menos de 3 W. Esta reducción:\r
\r
1. **Disminuye el incremento térmico**: Con [[R_th]] ≈ 3.5 K/W, la temperatura baja de aproximadamente 34 K a 10 K sobre ambiente.\r
\r
2. **Reduce el riesgo de incendio**: El nuevo conector opera dentro de rango seguro, mientras el anterior estaba en zona de riesgo moderado-alto.\r
\r
3. **Mejora la eficiencia**: Aunque la energía "ahorrada" no es recuperable, se reduce el consumo parasitario y el deterioro del cableado.\r
\r
La verificación cuantitativa confirma que la medida de mantenimiento preventivo fue efectiva, justificando el coste de la intervención técnica.\r
`;export{e as default};
