const e=`# Errores frecuentes en el análisis de enchufes y tomas\r
\r
## Errores conceptuales\r
\r
### Error 1: creer que el magnetotérmico o el diferencial protegen la toma frente a sobrecarga local\r
\r
**Por qué parece correcto:** Hay protecciones en el cuadro eléctrico. Si hubiera un problema real, saltarían.\r
\r
**Por qué es incorrecto:** El magnetotérmico protege el cableado del circuito frente a sobrecarga en el conductor, no la toma individual. El diferencial detecta fugas a tierra. Ninguno de los dos mide [[I_tot]] en la toma ni [[R_contacto]] del contacto. Una toma puede estar en sobrecarga con [[margen_uso]] > 1 sin que ninguna protección actúe.\r
\r
**Señal de detección:** El alumno dice "si estuviera sobrecargada, habría saltado el magnetotérmico". No considera que el magnetotérmico tiene un calibre muy por encima del [[I_max]] de la toma.\r
\r
**Corrección conceptual:** El magnetotérmico de un circuito de tomas suele ser de 16 A, igual que [[I_max]] de la toma. Sin embargo, si hay varias tomas en el mismo circuito, la suma de corrientes puede no superar el calibre del magnetotérmico aunque una toma individual esté muy sobrecargada.\r
\r
**Mini-ejemplo de contraste:** Circuito con magnetotérmico de 16 A y tres tomas. Una toma tiene [[I_tot]] = 14 A ([[margen_uso]] = 0,88), las otras dos tienen 0,5 A cada una. Total del circuito: 15 A, por debajo del calibre. El magnetotérmico no actúa. La toma con 14 A opera al 88% de su límite de forma continuada.\r
\r
### Error 2: ignorar la resistencia de contacto por ser pequeña\r
\r
**Por qué parece correcto:** [[R_contacto]] de décimas de ohmio parece despreciable comparada con la resistencia de la carga.\r
\r
**Por qué es incorrecto:** [[P_perdida]] crece con el cuadrado de [[I_tot]]. Con [[I_tot]] = 16 A y [[R_contacto]] = 0,1 Ω, la pérdida es 25,6 W localizada en un volumen muy pequeño. Esa densidad de potencia puede elevar la temperatura del contacto cientos de grados.\r
\r
**Señal de detección:** El alumno calcula [[R_contacto]] en el contexto de la resistencia de la carga y concluye que es insignificante.\r
\r
**Corrección conceptual:** La relevancia de [[R_contacto]] no se evalúa en relación con la carga sino en relación con la capacidad de disipación térmica del contacto y su geometría. Un contacto pequeño con mala disipación puede dañarse con potencias de unos pocos vatios.\r
\r
**Mini-ejemplo de contraste:** Carga de 2 000 W a 230 V: resistencia de carga ≈ 26,5 Ω. [[R_contacto]] = 0,2 Ω parece el 0,75% de la resistencia total. Pero [[P_perdida]] = 16² × 0,2 = 51,2 W en el contacto, suficiente para fundir plástico en minutos.\r
\r
## Errores de modelo\r
\r
### Error 3: usar la potencia individual más alta como límite sin considerar simultaneidad\r
\r
**Por qué parece correcto:** Si el equipo más potente no supera [[P_max]], la toma parece segura.\r
\r
**Por qué es incorrecto:** La sobrecarga se produce cuando la suma de potencias simultáneas supera [[P_max]], no cuando un equipo individual lo supera. Varios equipos de potencia moderada pueden sumar más que [[P_max]].\r
\r
**Señal de detección:** El alumno verifica solo el equipo más potente sin sumar todos los conectados simultáneamente.\r
\r
**Corrección conceptual:** El criterio es [[P_tot]] = suma de [[P]] de todos los equipos encendidos al mismo tiempo. Si [[P_tot]] ≥ [[P_max]], hay riesgo de sobrecarga aunque ningún equipo individual supere el límite.\r
\r
**Mini-ejemplo de contraste:** Regleta de 10 A ([[P_max]] = 2 300 W). Equipo más potente: ordenador de escritorio 400 W. También conectados: dos monitores de 80 W, impresora 150 W, altavoces 60 W, cargador 30 W. [[P_tot]] = 800 W, [[margen_uso]] = 0,35. Sin riesgo. Pero añadir un calefactor de 2 000 W eleva [[P_tot]] a 2 800 W y [[margen_uso]] a 1,22: sobrecarga.\r
\r
## Errores matemáticos\r
\r
### Error 4: calcular [[I_tot]] como la corriente del equipo más potente en lugar de sumar corrientes\r
\r
**Por qué parece correcto:** El equipo más potente domina la corriente del circuito.\r
\r
**Por qué es incorrecto:** [[I_tot]] es la suma de las corrientes individuales de todos los equipos encendidos simultáneamente. Ignorar los equipos de menor potencia puede subestimar [[I_tot]] significativamente en regletas con muchos dispositivos.\r
\r
**Señal de detección:** El alumno calcula [[I_tot]] = la potencia del equipo más potente / [[V]] en lugar de [[I_tot]] = [[P_tot]] / [[V]].\r
\r
**Corrección conceptual:** Para calcular [[I_tot]], primero sumar todas las potencias simultáneas y luego dividir por [[V]], o sumar directamente las corrientes individuales de cada equipo.\r
\r
**Mini-ejemplo de contraste:** Cinco equipos de 300 W cada uno en una regleta: [[I_tot]] = 1500/230 = 6,5 A, no 300/230 = 1,3 A. La suma multiplica por cinco la corriente del equipo individual.\r
\r
## Errores de interpretación\r
\r
### Error 5: interpretar ausencia de síntomas visibles como ausencia de riesgo\r
\r
**Por qué parece correcto:** Si no hay olor a quemado ni calor en el enchufe, la toma parece estar bien.\r
\r
**Por qué es incorrecto:** La degradación de [[R_contacto]] es un proceso progresivo. El calentamiento puede ser lento pero continuo. Los síntomas visibles aparecen cuando el daño ya es avanzado.\r
\r
**Señal de detección:** El alumno concluye que la toma está bien porque no hay síntomas externos evidentes.\r
\r
**Corrección conceptual:** El criterio de seguridad es preventivo: evaluar [[margen_uso]] y compararlo con 0,8 como umbral de uso continuado. No esperar a síntomas visibles para actuar.\r
\r
**Mini-ejemplo de contraste:** Regleta con [[margen_uso]] = 0,95 durante 8 horas al día. Sin síntomas visibles en semanas. Pero [[P_perdida]] es el 5% por encima del diseño continuo y los contactos se degradan gradualmente. La sustitución preventiva es la acción correcta.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de conectar un nuevo equipo a una toma o regleta:\r
1. ¿Cuál es [[I_max]] de la toma o regleta?\r
2. ¿Cuántos equipos hay ya conectados y encendidos?\r
3. ¿Cuál es la suma de potencias [[P_tot]] incluyendo el nuevo equipo?\r
4. ¿Cuál es [[margen_uso]] resultante?\r
5. Si [[margen_uso]] > 0,8, redistribuir la carga antes de proceder.\r
`;export{e as default};
