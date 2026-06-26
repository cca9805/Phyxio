const e=`\uFEFF# Errores comunes\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir resistencia alta con peligro\r
\r
**Por qué parece correcto**\r
\r
La intuición mecánica asocia "resistencia" con "fricción" o "obstáculo", lo que sugiere que valores altos generan problemas. Esta analogía incorrecta proviene de la experiencia cotidiana con rozamiento mecánico, donde mayor resistencia implica mayor esfuerzo y desgaste. Además, en electrónica de baja potencia, una resistencia elevada puede indicar fallo de componente, reforzando la asociación "alto = malo".\r
\r
**Por qué es incorrecto**\r
\r
En instalaciones eléctricas domésticas, la relación física está invertida: la resistencia limita la corriente según la ley de Ohm [[I]] = [[V]]/[[R]]. A tensión fija de 230 V, una resistencia de 1000 Ω limita la corriente a 0.23 A (segura e insignificante), mientras que una resistencia de 5 Ω permite 46 A (extremadamente peligrosa para circuitos estándar de 16 A). La potencia disipada también sigue [[P]] = [[V]]²/[[R]], siendo inversamente proporcional a la resistencia.\r
\r
**Señal de detección**\r
\r
- Uso de términos como "resistencia muy alta" para describir una condición peligrosa\r
- Cálculos que producen corrientes > 20 A etiquetadas como "seguras" porque la resistencia es "alta"\r
- Confusión entre la resistencia del cable (que debe ser baja) y la resistencia de carga (que debe ser alta para seguridad)\r
\r
**Corrección conceptual**\r
\r
En electricidad doméstica, la "resistencia baja" es el peligro, no la "resistencia alta". Siempre calcular [[I]] = 230/[[R]] inmediatamente al evaluar una resistencia. Interpretar el resultado: I < 0.5 A es seguro, I > 10 A requiere verificación, I > 20 A es peligroso para instalaciones estándar.\r
\r
**Mini-ejemplo de contraste**\r
\r
Incorrecto: "Este calefactor tiene solo 5 Ω de resistencia, seguro que consume poco." (Resultado: 46 A, peligro extremo). Correcto: "5 Ω a 230 V implica 46 A, equivalente a 10.5 kW. Esto requiere circuito dedicado de 50 A, no un enchufe estándar de 16 A."\r
\r
### Error 2: Tratar la potencia como magnitud independiente\r
\r
**Por qué parece correcto**\r
\r
Las etiquetas de electrodomésticos muestran "2000 W" como dato aislado, sin contexto de corriente o resistencia. La potencia es la magnitud de facturación eléctrica, lo que la convierte en la más familiar para los usuarios. La generalización excesiva lleva a asumir que conocer la potencia es suficiente para evaluar seguridad.\r
\r
**Por qué es incorrecto**\r
\r
La seguridad eléctrica depende de la corriente [[I]], no directamente de la potencia [[P]]. Una potencia de 2000 W a 230 V implica 8.7 A (seguro para circuito de 16 A), pero la misma potencia a 12 V implica 167 A (peligroso incluso para cables gruesos). Además, la potencia instantánea ignora ciclos de trabajo: un frigorífico etiquetado "150 W" tiene compresor de 300 W operando al 50% de ciclo.\r
\r
**Señal de detección**\r
\r
- Comparaciones de "seguridad" basadas únicamente en valores de potencia\r
- Omisión del cálculo de corriente al evaluar compatibilidad de circuito\r
- Confusión entre potencia instantánea y energía consumida\r
\r
**Corrección conceptual**\r
\r
La potencia es una consecuencia, no una causa directa de seguridad. Siempre calcular [[I]] dividiendo [[P]] entre [[V]] y comparar con el límite del circuito (10 A, 16 A, etc.). Para energía, obtener [[E_kWh]] multiplicando [[P_kW]] por [[t_h]], con resultado en kWh.\r
\r
**Mini-ejemplo de contraste**\r
\r
Incorrecto: "Mi secador es de 2000 W y el circuito soporta 3500 W, sobra capacidad." (Ignora que dividir 3500 W entre 230 V da 15.2 A, cercano al límite de 16 A cuando el secador añade 8.7 A a otras cargas). Correcto: "2000 W implica 8.7 A. Si el circuito tiene otros 6 A de carga base, total 14.7 A está dentro del 80% de 16 A (12.8 A)? No, excede el margen seguro."\r
\r
## Errores de modelo\r
\r
### Error 3: Ignorar ciclos de trabajo y simultaneidad\r
\r
**Por qué parece correcto**\r
\r
El modelo ideal —potencia igual a tensión por corriente— asume operación continua y estable, matemáticamente simple y elegantemente preciso. La extrapolación incorrecta asume que los electrodomésticos reales operan como resistencias ideales constantes. La omisión de complejidades secundarias parece razonable para "cálculos aproximados".\r
\r
**Por qué es incorrecto**\r
\r
Los electrodomésticos reales violan sistemáticamente las hipótesis del modelo ideal:\r
- Motores eléctricos consumen 3-7× la corriente nominal durante 0.5-2 segundos de arranque\r
- Frigoríficos, termos y aires acondicionados operan en ciclos ON/OFF con duty cycles del 30-50%\r
- Resistencias calefactoras varían ±15% con la temperatura\r
- La operación simultánea real nunca alcanza la suma aritmética de potencias individuales\r
\r
Estas desviaciones producen magnetotérmicos que disparan "sin razón aparente", cables que se sobrecalientan progresivamente, y costes energéticos subestimados por factor 2-3.\r
\r
**Señal de detección**\r
\r
- Protecciones que disparan consistentemente al encender electrodomésticos específicos\r
- Cálculos energéticos que difieren > 50% de la factura real\r
- Diseño de circuitos que funciona "en teoría" pero falla en uso real\r
\r
**Corrección conceptual**\r
\r
Distinguir siempre entre potencia nominal (placa), potencia máxima (arranque), y potencia promedio (consumo real). Aplicar factores de simultaneidad de 0.7-0.9 al sumar cargas. Dimensionar protecciones para corriente de arranque, no solo nominal. Usar ciclos de trabajo para estimación energética.\r
\r
**Mini-ejemplo de contraste**\r
\r
Incorrecto: Dimensionar protección de 16 A para nevera etiquetada "150 W" (0.65 A), sin considerar que el compresor de 300 W arranca con 1500-2000 W (6.5-8.7 A) durante 2 segundos, provocando disparos continuos. Correcto: Seleccionar protección tipo C (tolerante a picos) de 16 A o 20 A, verificando que el cable soporte 20 A continuos.\r
\r
### Error 4: Asumir factor de potencia unitario para todas las cargas\r
\r
**Por qué parece correcto**\r
\r
La simplificación cos φ = 1 elimina la componente reactiva de las ecuaciones, haciendo los cálculos más directos. Muchas cargas domésticas (incandescencia, calefacción resistiva) son efectivamente resistivas puras. La generalización excesiva extiende esta validez a motores y transformadores.\r
\r
**Por qué es incorrecto**\r
\r
Motores eléctricos, transformadores, fuentes de alimentación conmutadas, y luminarias fluorescentes/LED presentan factores de potencia típicos de 0.6-0.9. La corriente real es mayor que la calculada con cos φ = 1 en un 11-67%, pues debe compensar la componente reactiva. Esto produce subestimación sistemática de la carga real, sobrecalentamiento de cables dimensionados "correctamente", y disparos inesperados de protecciones.\r
\r
**Señal de detección**\r
\r
- Corriente medida significativamente mayor (> 20%) que la calculada teóricamente\r
- Cables que se calientan más de lo esperado para su carga "calculada"\r
- Diseños que funcionan en pruebas cortas pero fallan en operación prolongada\r
\r
**Corrección conceptual**\r
\r
Para cargas inductivas (motores > 100 W, transformadores, luminarias industriales), dimensionar por corriente aparente: dividir [[P]] entre el factor de potencia cos φ. Verificar el factor de potencia en la placa del equipo (típicamente 0.7-0.9 para motores domésticos). Aplicar corrección cuando la potencia reactiva sea significativa (> 20% de la activa).\r
\r
**Mini-ejemplo de contraste**\r
\r
Incorrecto: Motor de lavadora etiquetado "2000 W, 230 V" → dividir 2000 W entre 230 V da 8.7 A (protección de 10 A aparentemente suficiente). Realidad con cos φ = 0.75: la corriente real es 2000 W entre (230 V × 0.75), que da 11.6 A (excede protección de 10 A, dispara durante ciclo de lavado). Correcto: dimensionar para 11.6 A, seleccionar protección de 16 A con cable de 2.5 mm².\r
\r
## Errores matemáticos\r
\r
### Error 5: Mezclar unidades sin conversión sistemática\r
\r
**Por qué parece correcto**\r
\r
Las unidades parecen "obvias" en contexto: kW para potencia, V para tensión, h para tiempo. El error de mezcla es cognitivamente invisible porque cada valor individual es correcto. El fallo dimensional solo se manifiesta en el resultado final absurdo.\r
\r
**Por qué es incorrecto**\r
\r
La relación entre [[P]], [[V]] e [[I]] requiere que [[P]] esté en W, [[V]] en V, [[I]] en A para consistencia. Mezclar kW con V produce kA (error de 1000×). Usar W con h para energía produce Wh (correcto) pero expresarlo como kWh requiere división por 1000. Las conversiones omitidas generan errores de magnitud catastróficos.\r
\r
Errores frecuentes:\r
- P (kW) / V (V) = I (kA) → error 1000× inferior al real\r
- P (W) × t (h) = E (Wh) → reportar como kWh sin /1000 → error 1000× superior\r
- Confundir kW (potencia) con kWh (energía) → dimensión física incompatible\r
\r
**Señal de detección**\r
\r
- Corrientes calculadas en mA para hornos domésticos, o en kA para cargadores de móvil\r
- Energías mensuales de millones de kWh para apartamentos pequeños\r
- Costes energéticos que difieren 100-1000× de estimaciones razonables\r
\r
**Corrección conceptual**\r
\r
Aplicar conversión SI antes de cualquier operación. Usar prefijos consistentes: o todo en base (W, V, A, s) o todo con prefijos coherentes (kW, kV, kA, h). Verificar dimensionalidad del resultado: ¿tiene sentido físico? ¿El orden de magnitud es esperado?\r
\r
**Mini-ejemplo de contraste**\r
\r
Incorrecto: Horno de 2.2 kW, 230 V → dividir 2.2 entre 230 da 0.0096 A (9.6 mA, similar a un LED, claramente absurdo para un horno). Correcto: Convertir primero a vatios: 2200 W; dividir entre 230 V da 9.57 A (consistente con calentador eléctrico doméstico).\r
\r
### Error 6: Confundir energía consumida con potencia instantánea\r
\r
**Por qué parece correcto**\r
\r
Ambas magnitudes comparten unidades relacionadas (W y Wh) y aparecen juntas en facturas eléctricas. La terminología cotidiana confunde "consumo" (potencia) con "consumo" (energía). La diferencia conceptual (instantáneo vs. acumulado) es sutil para usuarios no técnicos.\r
\r
**Por qué es incorrecto**\r
\r
La potencia [[P]] es una tasa instantánea (vatios, equivalente a julios por segundo). La energía [[E_kWh]] es la integral temporal de potencia (Wh equivale a vatios multiplicados por horas). Multiplicar potencia por tiempo da energía, pero comparar directamente P con E es comparar velocidad con distancia recorrida. Esto produce estimaciones de coste incorrectas por factor 10-100.\r
\r
**Señal de detección**\r
\r
- Afirmaciones como "este aparato consume 2000 Wh" (correcto) vs. "este aparato consume 2000 W por hora" (incorrecto dimensionalmente)\r
- Costes calculados usando potencia como si fuera energía mensual\r
- Confusión entre "vatios" (potencia) y "vatios-hora" (energía) en conversaciones técnicas\r
\r
**Corrección conceptual**\r
\r
Potencia es "velocidad de consumo" (W). Energía es "consumo acumulado" (Wh o kWh). Para costes, siempre usar energía: obtener [[E_kWh]] multiplicando [[P_kW]] por [[t_h]]. Verificar que las unidades resultantes sean de energía, no de potencia.\r
\r
**Mini-ejemplo de contraste**\r
\r
Incorrecto: "El horno de 2000 W consume 2000 Wh en una hora, cueste 0.15 €/kWh, multiplicar 2000 por 0.15 da 300 €/h" (error: hay que convertir 2000 W a 2 kW antes de multiplicar por la tarifa). Correcto: 2 kW multiplicado por 1 h da 2 kWh; multiplicar por 0.15 €/kWh da 0.30 €/h.\r
\r
## Errores de interpretación\r
\r
### Error 7: Creer que la ausencia de disparo implica seguridad\r
\r
**Por qué parece correcto**\r
\r
Los magnetotérmicos y diferenciales son dispositivos de protección diseñados específicamente para detectar condiciones peligrosas. La ausencia de su activación sugiere que no hay condición peligrosa detectable. La lógica binaria "no dispara = seguro" parece razonable desde la perspectiva del usuario.\r
\r
**Por qué es incorrecto**\r
\r
Las protecciones tienen limitaciones físicas fundamentales:\r
- Tolerancias de fabricación del ±10-20% en umbrales de disparo\r
- Sobrecargas graduales (< 1.13× nominal) permitidas durante horas según curvas IEC\r
- Calentamiento localizado en conexiones (resistencia de contacto) no detectable por protección de corriente total\r
- Envejecimiento de dispositivos que altera características de disparo\r
- Protecciones dimensionadas para cortocircuitos, no para sobrecargas prolongadas moderadas\r
\r
Una instalación puede operar años al 95% de capacidad del disyuntor sin disparos, degradando progresivamente el aislamiento térmico hasta fallo catastrófico.\r
\r
**Señal de detección**\r
\r
- Enchufes o interruptores calientes al tacto sin disparo de protección\r
- Decoloración de aislamiento de cables sin disparo previo\r
- Confiar ciegamente en el cuadro eléctrico sin inspección visual periódica\r
\r
**Corrección conceptual**\r
\r
Las protecciones son última línea de defensa, no garantía de seguridad operativa. Mantener margen del 20% por debajo de ratings. Inspeccionar regularmente conexiones (color, temperatura, olor). Considerar inspección termográfica para instalaciones críticas. La seguridad es estado del sistema, no ausencia de eventos de protección.\r
\r
**Mini-ejemplo de contraste**\r
\r
Incorrecto: "Llevo 3 años con este calefactor en el mismo enchufe y nunca ha saltado el automático, debe ser seguro." (El enchufe está carbonizado internamente: una resistencia de contacto de 0.5 Ω con 10 A circulando disipa continuamente 5 W, calentando el enchufe día a día). Correcto: "Verificación anual: enchufe sin decoloración, cable flexible sin rigidez, temperatura de conexión < 40°C tras 30 min de operación."\r
\r
### Error 8: Ignorar la resistencia del cableado de instalación\r
\r
**Por qué parece correcto**\r
\r
Los cálculos teóricos típicamente usan la resistencia de carga ([[R]]) del electrodoméstico, ignorando la resistencia de los cables de conexión. Esta simplificación parece válida porque los cables de instalación (1.5-2.5 mm² de cobre) tienen resistencia aparentemente insignificante comparada con cargas de 10-100 Ω.\r
\r
**Por qué es incorrecto**\r
\r
La resistencia de cableado (típicamente 0.1-0.5 Ω para tramos domésticos de 10-30 m) es en serie con la carga. Para resistencias de carga bajas (< 10 Ω), el cableado puede representar el 5-10% de la resistencia total, reduciendo la corriente real y disipando potencia I²R_cable que calienta los conductores. En instalaciones antiguas con conexiones oxidadas, la resistencia de contacto puede añadir 1-5 Ω adicionales.\r
\r
**Señal de detección**\r
\r
- Caídas de tensión medidas > 3-5% en extremos del circuito bajo carga\r
- Calentamiento desproporcionado de cables respecto a la carga nominal\r
- Incompatibilidad entre cálculo teórico y medición real de corriente\r
\r
**Corrección conceptual**\r
\r
Incluir R_cable = ρ·L/A en cálculos precisos, donde ρ = 0.0175 Ω·mm²/m para cobre, L es longitud ida y vuelta, A es sección. Verificar que caída de tensión total < 3% para iluminación, < 5% para fuerza. En instalaciones antiguas, medir resistencia de bucle con multímetro antes de confiar en cálculos.\r
\r
**Mini-ejemplo de contraste**\r
\r
Incorrecto: Calcular dividiendo 230 V entre 5 Ω y obtener 46 A para un calefactor, ignorando 0.3 Ω de cableado (ida/vuelta 20 m de 2.5 mm²). Real: la resistencia total es 5.3 Ω, la corriente cae a 43.4 A (diferencia del 6%), pero los 0.3 Ω del cable disipan más de 500 W que calientan los conductores, no el calefactor. Correcto: Verificar sección de cable para esta corriente (requeriría 10 mm² mínimo) o seleccionar calefactor con resistencia superior a 15 Ω.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de conectar cualquier carga nueva o modificar una instalación existente, ejecutar este protocolo de verificación de 60 segundos:\r
\r
1. **Conversión SI:** Verificar que [[P]] está en W (no kW), [[V]] en V, [[R]] en Ω. Convertir si es necesario.\r
\r
2. **Cálculo de corriente:** Dividir [[P]] entre [[V]] (si se conoce potencia), o dividir [[V]] entre [[R]] (si se conoce resistencia). Resultado en amperios.\r
\r
3. **Verificación de circuito:** Identificar el rating de protección del circuito (10 A, 16 A, 20 A, 25 A) y calcular el 80% de ese valor (margen de seguridad térmico).\r
\r
4. **Comparación de seguridad:** ¿[[I]] calculada < 80% del rating? Si no, requiere circuito diferente o gestión de simultaneidad.\r
\r
5. **Check de resistencia:** Si se parte de [[R]], ¿[[R]] > 10 Ω? Si [[R]] < 10 Ω, verificar explicitamente que no es cortocircuito o carga defectuosa.\r
\r
6. **Validación dimensional:** ¿El resultado tiene sentido físico? ¿Corriente en A (no mA ni kA)? ¿Potencia en W (no MW)?\r
\r
7. **Regla de oro:** Si el resultado sorprende o parece incorrecto, re-verificar unidades y suposiciones antes de proceder.\r
\r
**Señales de alerta inmediata (STOP):**\r
- ⚠️ No se puede enunciar la corriente calculada en amperios → Análisis incompleto, NO conectar\r
- ⚠️ [[I]] > 100% del rating del circuito → Peligro inmediato, conexión prohibida\r
- ⚠️ [[I]] > 80% del rating → Precaución, requiere verificación adicional\r
- ⚠️ [[R]] < 10 Ω sin certificación explícita de fabricante → Posible cortocircuito\r
- ⚠️ Unidades mezcladas (kW con V, W con minutos) → Error matemático probable\r
\r
**Recordatorio final:** En seguridad eléctrica, el escepticismo sistemático es una virtud. Si existe duda, consultar electricista cualificado antes de conectar.\r
`;export{e as default};
