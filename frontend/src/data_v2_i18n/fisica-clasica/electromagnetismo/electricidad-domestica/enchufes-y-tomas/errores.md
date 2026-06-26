## Errores conceptuales


### Error 1: creer que el magnetotérmico o el diferencial protegen la toma frente a sobrecarga local

**Por qué parece correcto:** Hay protecciones en el cuadro eléctrico. Si hubiera un problema real, saltarían.

**Por qué es incorrecto:** El magnetotérmico protege el cableado del circuito frente a sobrecarga en el conductor, no la toma individual. El diferencial detecta fugas a tierra. Ninguno de los dos mide [[corriente_total_en_la_toma]] en la toma ni [[resistencia_de_contacto]] del contacto. Una toma puede estar en sobrecarga con [[margen_uso]] > 1 sin que ninguna protección actúe.

**Señal de detección:** El alumno dice "si estuviera sobrecargada, habría saltado el magnetotérmico". No considera que el magnetotérmico tiene un calibre muy por encima del [[corriente_maxima_nominal]] de la toma.

**Corrección conceptual:** El magnetotérmico de un circuito de tomas suele ser de 16 A, igual que [[corriente_maxima_nominal]] de la toma. Sin embargo, si hay varias tomas en el mismo circuito, la suma de corrientes puede no superar el calibre del magnetotérmico aunque una toma individual esté muy sobrecargada.

**Mini-ejemplo de contraste:** Circuito con magnetotérmico de 16 A y tres tomas. Una toma tiene [[corriente_total_en_la_toma]] = 14 A ([[margen_uso]] = 0,88), las otras dos tienen 0,5 A cada una. Total del circuito: 15 A, por debajo del calibre. El magnetotérmico no actúa. La toma con 14 A opera al 88% de su límite de forma continuada.

**Por qué parece correcto**

Control 1: En Enchufes y tomas, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 1.

**Por qué es incorrecto**

Control 2: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 2.

**Señal de detección**

Control 3: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 3.

**Corrección conceptual**

Control 4: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 4.

### Error 2: ignorar la resistencia de contacto por ser pequeña

**Por qué parece correcto:** [[resistencia_de_contacto]] de décimas de ohmio parece despreciable comparada con la resistencia de la carga.

**Por qué es incorrecto:** [[potencia_disipada_en_el_contacto]] crece con el cuadrado de [[corriente_total_en_la_toma]]. Con [[corriente_total_en_la_toma]] = 16 A y [[resistencia_de_contacto]] = 0,1 Ω, la pérdida es 25,6 W localizada en un volumen muy pequeño. Esa densidad de potencia puede elevar la temperatura del contacto cientos de grados.

**Señal de detección:** El alumno calcula [[resistencia_de_contacto]] en el contexto de la resistencia de la carga y concluye que es insignificante.

**Corrección conceptual:** La relevancia de [[resistencia_de_contacto]] no se evalúa en relación con la carga sino en relación con la capacidad de disipación térmica del contacto y su geometría. Un contacto pequeño con mala disipación puede dañarse con potencias de unos pocos vatios.

**Mini-ejemplo de contraste:** Carga de 2 000 W a 230 V: resistencia de carga ≈ 26,5 Ω. [[resistencia_de_contacto]] = 0,2 Ω parece el 0,75% de la resistencia total. Pero [[potencia_disipada_en_el_contacto]] = 16² × 0,2 = 51,2 W en el contacto, suficiente para fundir plástico en minutos.

## Errores de modelo

**Por qué parece correcto**

Control 5: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 5.

**Por qué es incorrecto**

Control 6: En Enchufes y tomas, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 6.

**Señal de detección**

Control 7: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 7.

**Corrección conceptual**

Control 8: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 8.

### Error 3: usar la potencia individual más alta como límite sin considerar simultaneidad

**Por qué parece correcto:** Si el equipo más potente no supera [[potencia_maxima_nominal]], la toma parece segura.

**Por qué es incorrecto:** La sobrecarga se produce cuando la suma de potencias simultáneas supera [[potencia_maxima_nominal]], no cuando un equipo individual lo supera. Varios equipos de potencia moderada pueden sumar más que [[potencia_maxima_nominal]].

**Señal de detección:** El alumno verifica solo el equipo más potente sin sumar todos los conectados simultáneamente.

**Corrección conceptual:** El criterio es [[potencia_total_simultanea]] = suma de [[potencia_de_carga]] de todos los equipos encendidos al mismo tiempo. Si [[potencia_total_simultanea]] ≥ [[potencia_maxima_nominal]], hay riesgo de sobrecarga aunque ningún equipo individual supere el límite.

**Mini-ejemplo de contraste:** Regleta de 10 A ([[potencia_maxima_nominal]] = 2 300 W). Equipo más potente: ordenador de escritorio 400 W. También conectados: dos monitores de 80 W, impresora 150 W, altavoces 60 W, cargador 30 W. [[potencia_total_simultanea]] = 800 W, [[margen_uso]] = 0,35. Sin riesgo. Pero añadir un calefactor de 2 000 W eleva [[potencia_total_simultanea]] a 2 800 W y [[margen_uso]] a 1,22: sobrecarga.

## Errores matemáticos

**Por qué parece correcto**

Control 9: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 9.

**Por qué es incorrecto**

Control 10: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 10.

**Señal de detección**

Control 11: En Enchufes y tomas, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 11.

**Corrección conceptual**

Control 12: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 12.

### Error 4: calcular [[corriente_total_en_la_toma]] como la corriente del equipo más potente en lugar de sumar corrientes

**Por qué parece correcto:** El equipo más potente domina la corriente del circuito.

**Por qué es incorrecto:** [[corriente_total_en_la_toma]] es la suma de las corrientes individuales de todos los equipos encendidos simultáneamente. Ignorar los equipos de menor potencia puede subestimar [[corriente_total_en_la_toma]] significativamente en regletas con muchos dispositivos.

**Señal de detección:** El alumno calcula [[corriente_total_en_la_toma]] = la potencia del equipo más potente / [[tension_de_suministro]] en lugar de [[corriente_total_en_la_toma]] = [[potencia_total_simultanea]] / [[tension_de_suministro]].

**Corrección conceptual:** Para calcular [[corriente_total_en_la_toma]], primero sumar todas las potencias simultáneas y luego dividir por [[tension_de_suministro]], o sumar directamente las corrientes individuales de cada equipo.

**Mini-ejemplo de contraste:** Cinco equipos de 300 W cada uno en una regleta: [[corriente_total_en_la_toma]] = 1500/230 = 6,5 A, no 300/230 = 1,3 A. La suma multiplica por cinco la corriente del equipo individual.

## Errores de interpretación

**Por qué parece correcto**

Control 13: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 13.

**Por qué es incorrecto**

Control 14: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 14.

**Señal de detección**

Control 15: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 15.

**Corrección conceptual**

Control 16: En Enchufes y tomas, este error aparece cuando el resultado se trata como un numero separado del modelo del circuito; Revisa magnitudes declaradas, convenio de signo y papel fisico del valor calculado revision 16.

### Error 5: interpretar ausencia de síntomas visibles como ausencia de riesgo

**Por qué parece correcto:** Si no hay olor a quemado ni calor en el enchufe, la toma parece estar bien.

**Por qué es incorrecto:** La degradación de [[resistencia_de_contacto]] es un proceso progresivo. El calentamiento puede ser lento pero continuo. Los síntomas visibles aparecen cuando el daño ya es avanzado.

**Señal de detección:** El alumno concluye que la toma está bien porque no hay síntomas externos evidentes.

**Corrección conceptual:** El criterio de seguridad es preventivo: evaluar [[margen_uso]] y compararlo con 0,8 como umbral de uso continuado. No esperar a síntomas visibles para actuar.

**Mini-ejemplo de contraste:** Regleta con [[margen_uso]] = 0,95 durante 8 horas al día. Sin síntomas visibles en semanas. Pero [[potencia_disipada_en_el_contacto]] es el 5% por encima del diseño continuo y los contactos se degradan gradualmente. La sustitución preventiva es la acción correcta.

## Regla de autocontrol rápido

Antes de conectar un nuevo equipo a una toma o regleta:
1. ¿Cuál es [[corriente_maxima_nominal]] de la toma o regleta?
2. ¿Cuántos equipos hay ya conectados y encendidos?
3. ¿Cuál es la suma de potencias [[potencia_total_simultanea]] incluyendo el nuevo equipo?
4. ¿Cuál es [[margen_uso]] resultante?
5. Si [[margen_uso]] > 0,8, redistribuir la carga antes de proceder.

**Por qué parece correcto**

Control 17: La senal de deteccion es un calculo que parece dimensionalmente posible pero no explica que cambia en el sistema; Vuelve a conectar el paso con las hipotesis del modelo antes de aceptarlo revision 17.

**Por qué es incorrecto**

Control 18: Una correccion fiable consiste en comparar el resultado con casos limite y con el comportamiento esperado del circuito; La respuesta debe describir escala numerica y significado fisico revision 18.

**Señal de detección**

Control 19: Este fallo se controla revisando unidades, regimen de trabajo e interpretacion al mismo tiempo; Una solucion correcta dice por que el valor es razonable para el modelo, no solo como se obtuvo revision 19.

**Corrección conceptual**

Control 20: Si se mezclan magnitudes sin respetar su papel, la lectura final queda ambigua; Separa parametros, resultados derivados y cantidades dependientes del signo antes de resolver revision 20.