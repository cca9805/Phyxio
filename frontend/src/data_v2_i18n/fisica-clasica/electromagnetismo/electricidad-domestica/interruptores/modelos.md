## Modelo ideal

El modelo de interruptor ideal supone que en estado OFF la resistencia es infinita (circuito abierto, [[corriente_de_maniobra]] = 0) y en estado ON la resistencia es nula ([[resistencia_en_estado_on]] = 0, [[perdida_resistiva_en_on]] = 0, [[energia_disipada_en_conduccion]] = 0). El interruptor ideal no altera el circuito en ninguno de los dos estados: ni consume energía ni genera caída de tensión.

Este modelo es el punto de referencia conceptual. Cualquier desviación respecto a él — [[resistencia_en_estado_on]] > 0 en ON, corriente de fuga en OFF — representa una imperfección del dispositivo real.

## Hipótesis

- Régimen permanente: la corriente [[corriente_de_maniobra]] es constante durante todo el período de conducción [[t_on]].
- Carga resistiva pura: [[potencia_de_la_carga]] = [[tension_de_alimentacion]] · [[corriente_de_maniobra]], factor de potencia unitario.
- [[resistencia_en_estado_on]] es constante con la temperatura y con el tiempo de conducción (modelo estático).
- No se modelan los transitorios de apertura y cierre (arcos eléctricos).
- La corriente de fuga en estado OFF es despreciable.

## Dominio de validez cuantitativo

El modelo estático es válido cuando se cumplen simultáneamente:
- Régimen permanente: ciclo de trabajo estable, sin cambios de carga frecuentes.
- Factor de potencia ≥ 0,9 (cargas casi resistivas).
- [[corriente_de_maniobra]] ≤ I_nominal del interruptor (sin sobrecorriente).
- [[resistencia_en_estado_on]] ≤ 0,5 Ω (para valores mayores, el calentamiento puede ser no lineal por expansión térmica del contacto).

**Condición cuantitativa de riesgo:** [[perdida_resistiva_en_on]] ≥ 1 W indica calentamiento apreciable en uso continuo. [[perdida_resistiva_en_on]] ≥ 5 W es condición de riesgo que requiere inspección. Con [[corriente_de_maniobra]] = 10 A y [[resistencia_en_estado_on]] = 0,05 Ω, [[perdida_resistiva_en_on]] = 5 W — umbral crítico. Con [[resistencia_en_estado_on]] = 0,1 Ω, [[perdida_resistiva_en_on]] = 10 W — ya en zona de sustitución.

## Señales de fallo del modelo

El modelo estático de [[resistencia_en_estado_on]] falla o es insuficiente cuando:
- El interruptor se calienta con [[perdida_resistiva_en_on]] calculado bajo: indica que [[resistencia_en_estado_on]] real es mayor que la estimada, o que hay arcos intermitentes no modelados.
- El calentamiento es intermitente y no correlacionado con el nivel de [[corriente_de_maniobra]]: puede indicar contacto mecánicamente inestable.
- La temperatura del interruptor sube más rápido que lo predicho por [[perdida_resistiva_en_on]] · tiempo: indica que la resistencia térmica del encapsulado es mayor de lo esperado (ventilación reducida).
- El interruptor falla en OFF (no corta correctamente): indica degradación de los contactos que no se captura con [[resistencia_en_estado_on]] estática en ON.

## Modelo extendido o alternativo

El modelo extendido incorpora:
1. **[[resistencia_en_estado_on]] dependiente de la temperatura**: [[resistencia_en_estado_on]](T) = [[resistencia_en_estado_on]](T₀) · (1 + α·ΔT), donde α es el coeficiente térmico de resistencia del contacto (cobre: α ≈ 0,004 K⁻¹).
2. **Energía de arco por maniobra**: cada ciclo apertura-cierre disipa una energía de arco E_arco que depende de [[corriente_de_maniobra]] y de la tensión del circuito. Para interruptores domésticos, E_arco ≈ 1–10 mJ por maniobra.
3. **Corriente de arranque**: para cargas inductivas, la corriente de arranque es varios multiplos de [[corriente_de_maniobra]] nominal durante un breve transitorio. La energia del transitorio depende de esa corriente de arranque, de [[resistencia_en_estado_on]] y de la duracion del transitorio.

## Comparación operativa

| Situación | Modelo adecuado | Variable crítica |
|-----------|----------------|-----------------|
| Carga resistiva, uso esporádico | Modelo ideal ([[resistencia_en_estado_on]] ≈ 0) | [[corriente_de_maniobra]] nominal |
| Carga resistiva, uso continuo | Modelo estático [[perdida_resistiva_en_on]] = [[corriente_de_maniobra]]² · [[resistencia_en_estado_on]] | [[perdida_resistiva_en_on]], [[energia_disipada_en_conduccion]] |
| Carga inductiva, arranque | Modelo extendido con I_pico | E_arco por maniobra |
| Ciclo frecuente (termostato) | Modelo extendido con degradación acumulada | N_maniobras, E_total |

## Cuándo cambiar de modelo

La transicion al modelo extendido — cuando conviene cambiar de modelo — se justifica en los siguientes casos:
- Carga inductiva con arranque elevado (motor, transformador): los picos de corriente en el transitorio superan [[corriente_de_maniobra]] nominal en un factor de 5–10, causando degradación por arco que domina sobre la pérdida estacionaria [[perdida_resistiva_en_on]].
- Ciclo muy frecuente (> 100 maniobras/hora): la degradación acumulada por arco supera la pérdida por conducción estacionaria.
- [[resistencia_en_estado_on]] medida supera 0,5 Ω: el modelo lineal ya no predice bien la temperatura del contacto.
- Síntomas de calentamiento con [[perdida_resistiva_en_on]] calculado < 1 W: el modelo estático subestima la realidad.

En esos casos, el análisis requiere considerar la energía disipada en cada arco de apertura/cierre, la corriente de arranque de la carga y la frecuencia de maniobra.