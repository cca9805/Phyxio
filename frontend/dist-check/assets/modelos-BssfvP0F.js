const e=`# Modelos físicos de interruptores\r
\r
## Modelo ideal\r
\r
El modelo de interruptor ideal supone que en estado OFF la resistencia es infinita (circuito abierto, [[I]] = 0) y en estado ON la resistencia es nula ([[R_on]] = 0, [[P_on]] = 0, [[E_on]] = 0). El interruptor ideal no altera el circuito en ninguno de los dos estados: ni consume energía ni genera caída de tensión.\r
\r
Este modelo es el punto de referencia conceptual. Cualquier desviación respecto a él — [[R_on]] > 0 en ON, corriente de fuga en OFF — representa una imperfección del dispositivo real.\r
\r
## Hipótesis\r
\r
- Régimen permanente: la corriente [[I]] es constante durante todo el período de conducción [[t_on]].\r
- Carga resistiva pura: [[P]] = [[V]] · [[I]], factor de potencia unitario.\r
- [[R_on]] es constante con la temperatura y con el tiempo de conducción (modelo estático).\r
- No se modelan los transitorios de apertura y cierre (arcos eléctricos).\r
- La corriente de fuga en estado OFF es despreciable.\r
\r
## Dominio de validez cuantitativo\r
\r
El modelo estático es válido cuando se cumplen simultáneamente:\r
- Régimen permanente: ciclo de trabajo estable, sin cambios de carga frecuentes.\r
- Factor de potencia ≥ 0,9 (cargas casi resistivas).\r
- [[I]] ≤ I_nominal del interruptor (sin sobrecorriente).\r
- [[R_on]] ≤ 0,5 Ω (para valores mayores, el calentamiento puede ser no lineal por expansión térmica del contacto).\r
\r
**Condición cuantitativa de riesgo:** [[P_on]] ≥ 1 W indica calentamiento apreciable en uso continuo. [[P_on]] ≥ 5 W es condición de riesgo que requiere inspección. Con [[I]] = 10 A y [[R_on]] = 0,05 Ω, [[P_on]] = 5 W — umbral crítico. Con [[R_on]] = 0,1 Ω, [[P_on]] = 10 W — ya en zona de sustitución.\r
\r
## Señales de fallo del modelo\r
\r
El modelo estático de [[R_on]] falla o es insuficiente cuando:\r
- El interruptor se calienta con [[P_on]] calculado bajo: indica que [[R_on]] real es mayor que la estimada, o que hay arcos intermitentes no modelados.\r
- El calentamiento es intermitente y no correlacionado con el nivel de [[I]]: puede indicar contacto mecánicamente inestable.\r
- La temperatura del interruptor sube más rápido que lo predicho por [[P_on]] · tiempo: indica que la resistencia térmica del encapsulado es mayor de lo esperado (ventilación reducida).\r
- El interruptor falla en OFF (no corta correctamente): indica degradación de los contactos que no se captura con [[R_on]] estática en ON.\r
\r
## Cuándo cambiar de modelo\r
\r
La transicion al modelo extendido — cuando conviene cambiar de modelo — se justifica en los siguientes casos:\r
- Carga inductiva con arranque elevado (motor, transformador): los picos de corriente en el transitorio superan [[I]] nominal en un factor de 5–10, causando degradación por arco que domina sobre la pérdida estacionaria [[P_on]].\r
- Ciclo muy frecuente (> 100 maniobras/hora): la degradación acumulada por arco supera la pérdida por conducción estacionaria.\r
- [[R_on]] medida supera 0,5 Ω: el modelo lineal ya no predice bien la temperatura del contacto.\r
- Síntomas de calentamiento con [[P_on]] calculado < 1 W: el modelo estático subestima la realidad.\r
\r
En esos casos, el análisis requiere considerar la energía disipada en cada arco de apertura/cierre, la corriente de arranque de la carga y la frecuencia de maniobra.\r
\r
## Modelo extendido o alternativo\r
\r
El modelo extendido incorpora:\r
1. **[[R_on]] dependiente de la temperatura**: [[R_on]](T) = [[R_on]](T₀) · (1 + α·ΔT), donde α es el coeficiente térmico de resistencia del contacto (cobre: α ≈ 0,004 K⁻¹).\r
2. **Energía de arco por maniobra**: cada ciclo apertura-cierre disipa una energía de arco E_arco que depende de [[I]] y de la tensión del circuito. Para interruptores domésticos, E_arco ≈ 1–10 mJ por maniobra.\r
3. **Corriente de arranque**: para cargas inductivas, la corriente de arranque es varios multiplos de [[I]] nominal durante un breve transitorio. La energia del transitorio depende de esa corriente de arranque, de [[R_on]] y de la duracion del transitorio.\r
\r
## Comparación operativa\r
\r
| Situación | Modelo adecuado | Variable crítica |\r
|-----------|----------------|-----------------|\r
| Carga resistiva, uso esporádico | Modelo ideal ([[R_on]] ≈ 0) | [[I]] nominal |\r
| Carga resistiva, uso continuo | Modelo estático [[P_on]] = [[I]]² · [[R_on]] | [[P_on]], [[E_on]] |\r
| Carga inductiva, arranque | Modelo extendido con I_pico | E_arco por maniobra |\r
| Ciclo frecuente (termostato) | Modelo extendido con degradación acumulada | N_maniobras, E_total |\r
`;export{e as default};
