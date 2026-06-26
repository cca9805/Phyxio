# Errores comunes

## Errores conceptuales


### Error 1: Confundir resistencia alta con peligro

**Por qué parece correcto**

La intuición mecánica asocia "resistencia" con "fricción" o "obstáculo", lo que sugiere que valores altos generan problemas. Esta analogía incorrecta proviene de la experiencia cotidiana con rozamiento mecánico, donde mayor resistencia implica mayor esfuerzo y desgaste. Además, en electrónica de baja potencia, una resistencia elevada puede indicar fallo de componente, reforzando la asociación "alto = malo".

**Por qué es incorrecto**

En instalaciones eléctricas domésticas, la relación física está invertida: la resistencia limita la corriente según la ley de Ohm [[intensidad_de_corriente]] = [[tension_electrica]]/[[resistencia_electrica]]. A tensión fija de 230 V, una resistencia de 1000 Ω limita la corriente a 0.23 A (segura e insignificante), mientras que una resistencia de 5 Ω permite 46 A (extremadamente peligrosa para circuitos estándar de 16 A). La potencia disipada también sigue [[potencia_electrica]] = [[tension_electrica]]²/[[resistencia_electrica]], siendo inversamente proporcional a la resistencia.

**Señal de detección**

- Uso de términos como "resistencia muy alta" para describir una condición peligrosa
- Cálculos que producen corrientes > 20 A etiquetadas como "seguras" porque la resistencia es "alta"
- Confusión entre la resistencia del cable (que debe ser baja) y la resistencia de carga (que debe ser alta para seguridad)

**Corrección conceptual**

En electricidad doméstica, la "resistencia baja" es el peligro, no la "resistencia alta". Siempre calcular [[intensidad_de_corriente]] = 230/[[resistencia_electrica]] inmediatamente al evaluar una resistencia. Interpretar el resultado: I < 0.5 A es seguro, I > 10 A requiere verificación, I > 20 A es peligroso para instalaciones estándar.

**Mini-ejemplo de contraste**

Incorrecto: "Este calefactor tiene solo 5 Ω de resistencia, seguro que consume poco." (Resultado: 46 A, peligro extremo). Correcto: "5 Ω a 230 V implica 46 A, equivalente a 10.5 kW. Esto requiere circuito dedicado de 50 A, no un enchufe estándar de 16 A."


### Error 2: Tratar la potencia como magnitud independiente

**Por qué parece correcto**

Las etiquetas de electrodomésticos muestran "2000 W" como dato aislado, sin contexto de corriente o resistencia. La potencia es la magnitud de facturación eléctrica, lo que la convierte en la más familiar para los usuarios. La generalización excesiva lleva a asumir que conocer la potencia es suficiente para evaluar seguridad.

**Por qué es incorrecto**

La seguridad eléctrica depende de la corriente [[intensidad_de_corriente]], no directamente de la potencia [[potencia_electrica]]. Una potencia de 2000 W a 230 V implica 8.7 A (seguro para circuito de 16 A), pero la misma potencia a 12 V implica 167 A (peligroso incluso para cables gruesos). Además, la potencia instantánea ignora ciclos de trabajo: un frigorífico etiquetado "150 W" tiene compresor de 300 W operando al 50% de ciclo.

**Señal de detección**

- Comparaciones de "seguridad" basadas únicamente en valores de potencia
- Omisión del cálculo de corriente al evaluar compatibilidad de circuito
- Confusión entre potencia instantánea y energía consumida

**Corrección conceptual**

La potencia es una consecuencia, no una causa directa de seguridad. Siempre calcular [[intensidad_de_corriente]] dividiendo [[potencia_electrica]] entre [[tension_electrica]] y comparar con el límite del circuito (10 A, 16 A, etc.). Para energía, obtener [[energia_consumida]] multiplicando [[potencia_en_kilovatios]] por [[t_h]], con resultado en kWh.

**Mini-ejemplo de contraste**

Incorrecto: "Mi secador es de 2000 W y el circuito soporta 3500 W, sobra capacidad." (Ignora que dividir 3500 W entre 230 V da 15.2 A, cercano al límite de 16 A cuando el secador añade 8.7 A a otras cargas). Correcto: "2000 W implica 8.7 A. Si el circuito tiene otros 6 A de carga base, total 14.7 A está dentro del 80% de 16 A (12.8 A)? No, excede el margen seguro."

## Errores de modelo


### Error 3: Ignorar ciclos de trabajo y simultaneidad

**Por qué parece correcto**

El modelo ideal —potencia igual a tensión por corriente— asume operación continua y estable, matemáticamente simple y elegantemente preciso. La extrapolación incorrecta asume que los electrodomésticos reales operan como resistencias ideales constantes. La omisión de complejidades secundarias parece razonable para "cálculos aproximados".

**Por qué es incorrecto**

Los electrodomésticos reales violan sistemáticamente las hipótesis del modelo ideal:
- Motores eléctricos consumen 3-7× la corriente nominal durante 0.5-2 segundos de arranque
- Frigoríficos, termos y aires acondicionados operan en ciclos ON/OFF con duty cycles del 30-50%
- Resistencias calefactoras varían ±15% con la temperatura
- La operación simultánea real nunca alcanza la suma aritmética de potencias individuales

Estas desviaciones producen magnetotérmicos que disparan "sin razón aparente", cables que se sobrecalientan progresivamente, y costes energéticos subestimados por factor 2-3.

**Señal de detección**

- Protecciones que disparan consistentemente al encender electrodomésticos específicos
- Cálculos energéticos que difieren > 50% de la factura real
- Diseño de circuitos que funciona "en teoría" pero falla en uso real

**Corrección conceptual**

Distinguir siempre entre potencia nominal (placa), potencia máxima (arranque), y potencia promedio (consumo real). Aplicar factores de simultaneidad de 0.7-0.9 al sumar cargas. Dimensionar protecciones para corriente de arranque, no solo nominal. Usar ciclos de trabajo para estimación energética.

**Mini-ejemplo de contraste**

Incorrecto: Dimensionar protección de 16 A para nevera etiquetada "150 W" (0.65 A), sin considerar que el compresor de 300 W arranca con 1500-2000 W (6.5-8.7 A) durante 2 segundos, provocando disparos continuos. Correcto: Seleccionar protección tipo C (tolerante a picos) de 16 A o 20 A, verificando que el cable soporte 20 A continuos.


### Error 4: Asumir factor de potencia unitario para todas las cargas

**Por qué parece correcto**

La simplificación cos φ = 1 elimina la componente reactiva de las ecuaciones, haciendo los cálculos más directos. Muchas cargas domésticas (incandescencia, calefacción resistiva) son efectivamente resistivas puras. La generalización excesiva extiende esta validez a motores y transformadores.

**Por qué es incorrecto**

Motores eléctricos, transformadores, fuentes de alimentación conmutadas, y luminarias fluorescentes/LED presentan factores de potencia típicos de 0.6-0.9. La corriente real es mayor que la calculada con cos φ = 1 en un 11-67%, pues debe compensar la componente reactiva. Esto produce subestimación sistemática de la carga real, sobrecalentamiento de cables dimensionados "correctamente", y disparos inesperados de protecciones.

**Señal de detección**

- Corriente medida significativamente mayor (> 20%) que la calculada teóricamente
- Cables que se calientan más de lo esperado para su carga "calculada"
- Diseños que funcionan en pruebas cortas pero fallan en operación prolongada

**Corrección conceptual**

Para cargas inductivas (motores > 100 W, transformadores, luminarias industriales), dimensionar por corriente aparente: dividir [[potencia_electrica]] entre el factor de potencia cos φ. Verificar el factor de potencia en la placa del equipo (típicamente 0.7-0.9 para motores domésticos). Aplicar corrección cuando la potencia reactiva sea significativa (> 20% de la activa).

**Mini-ejemplo de contraste**

Incorrecto: Motor de lavadora etiquetado "2000 W, 230 V" → dividir 2000 W entre 230 V da 8.7 A (protección de 10 A aparentemente suficiente). Realidad con cos φ = 0.75: la corriente real es 2000 W entre (230 V × 0.75), que da 11.6 A (excede protección de 10 A, dispara durante ciclo de lavado). Correcto: dimensionar para 11.6 A, seleccionar protección de 16 A con cable de 2.5 mm².

## Errores matemáticos


### Error 5: Mezclar unidades sin conversión sistemática

**Por qué parece correcto**

Las unidades parecen "obvias" en contexto: kW para potencia, V para tensión, h para tiempo. El error de mezcla es cognitivamente invisible porque cada valor individual es correcto. El fallo dimensional solo se manifiesta en el resultado final absurdo.

**Por qué es incorrecto**

La relación entre [[potencia_electrica]], [[tension_electrica]] e [[intensidad_de_corriente]] requiere que [[potencia_electrica]] esté en W, [[tension_electrica]] en V, [[intensidad_de_corriente]] en A para consistencia. Mezclar kW con V produce kA (error de 1000×). Usar W con h para energía produce Wh (correcto) pero expresarlo como kWh requiere división por 1000. Las conversiones omitidas generan errores de magnitud catastróficos.

Errores frecuentes:
- P (kW) / V (V) = I (kA) → error 1000× inferior al real
- P (W) × t (h) = E (Wh) → reportar como kWh sin /1000 → error 1000× superior
- Confundir kW (potencia) con kWh (energía) → dimensión física incompatible

**Señal de detección**

- Corrientes calculadas en mA para hornos domésticos, o en kA para cargadores de móvil
- Energías mensuales de millones de kWh para apartamentos pequeños
- Costes energéticos que difieren 100-1000× de estimaciones razonables

**Corrección conceptual**

Aplicar conversión SI antes de cualquier operación. Usar prefijos consistentes: o todo en base (W, V, A, s) o todo con prefijos coherentes (kW, kV, kA, h). Verificar dimensionalidad del resultado: ¿tiene sentido físico? ¿El orden de magnitud es esperado?

**Mini-ejemplo de contraste**

Incorrecto: Horno de 2.2 kW, 230 V → dividir 2.2 entre 230 da 0.0096 A (9.6 mA, similar a un LED, claramente absurdo para un horno). Correcto: Convertir primero a vatios: 2200 W; dividir entre 230 V da 9.57 A (consistente con calentador eléctrico doméstico).


### Error 6: Confundir energía consumida con potencia instantánea

**Por qué parece correcto**

Ambas magnitudes comparten unidades relacionadas (W y Wh) y aparecen juntas en facturas eléctricas. La terminología cotidiana confunde "consumo" (potencia) con "consumo" (energía). La diferencia conceptual (instantáneo vs. acumulado) es sutil para usuarios no técnicos.

**Por qué es incorrecto**

La potencia [[potencia_electrica]] es una tasa instantánea (vatios, equivalente a julios por segundo). La energía [[energia_consumida]] es la integral temporal de potencia (Wh equivale a vatios multiplicados por horas). Multiplicar potencia por tiempo da energía, pero comparar directamente P con E es comparar velocidad con distancia recorrida. Esto produce estimaciones de coste incorrectas por factor 10-100.

**Señal de detección**

- Afirmaciones como "este aparato consume 2000 Wh" (correcto) vs. "este aparato consume 2000 W por hora" (incorrecto dimensionalmente)
- Costes calculados usando potencia como si fuera energía mensual
- Confusión entre "vatios" (potencia) y "vatios-hora" (energía) en conversaciones técnicas

**Corrección conceptual**

Potencia es "velocidad de consumo" (W). Energía es "consumo acumulado" (Wh o kWh). Para costes, siempre usar energía: obtener [[energia_consumida]] multiplicando [[potencia_en_kilovatios]] por [[t_h]]. Verificar que las unidades resultantes sean de energía, no de potencia.

**Mini-ejemplo de contraste**

Incorrecto: "El horno de 2000 W consume 2000 Wh en una hora, cueste 0.15 €/kWh, multiplicar 2000 por 0.15 da 300 €/h" (error: hay que convertir 2000 W a 2 kW antes de multiplicar por la tarifa). Correcto: 2 kW multiplicado por 1 h da 2 kWh; multiplicar por 0.15 €/kWh da 0.30 €/h.

## Errores de interpretación


### Error 7: Creer que la ausencia de disparo implica seguridad

**Por qué parece correcto**

Los magnetotérmicos y diferenciales son dispositivos de protección diseñados específicamente para detectar condiciones peligrosas. La ausencia de su activación sugiere que no hay condición peligrosa detectable. La lógica binaria "no dispara = seguro" parece razonable desde la perspectiva del usuario.

**Por qué es incorrecto**

Las protecciones tienen limitaciones físicas fundamentales:
- Tolerancias de fabricación del ±10-20% en umbrales de disparo
- Sobrecargas graduales (< 1.13× nominal) permitidas durante horas según curvas IEC
- Calentamiento localizado en conexiones (resistencia de contacto) no detectable por protección de corriente total
- Envejecimiento de dispositivos que altera características de disparo
- Protecciones dimensionadas para cortocircuitos, no para sobrecargas prolongadas moderadas

Una instalación puede operar años al 95% de capacidad del disyuntor sin disparos, degradando progresivamente el aislamiento térmico hasta fallo catastrófico.

**Señal de detección**

- Enchufes o interruptores calientes al tacto sin disparo de protección
- Decoloración de aislamiento de cables sin disparo previo
- Confiar ciegamente en el cuadro eléctrico sin inspección visual periódica

**Corrección conceptual**

Las protecciones son última línea de defensa, no garantía de seguridad operativa. Mantener margen del 20% por debajo de ratings. Inspeccionar regularmente conexiones (color, temperatura, olor). Considerar inspección termográfica para instalaciones críticas. La seguridad es estado del sistema, no ausencia de eventos de protección.

**Mini-ejemplo de contraste**

Incorrecto: "Llevo 3 años con este calefactor en el mismo enchufe y nunca ha saltado el automático, debe ser seguro." (El enchufe está carbonizado internamente: una resistencia de contacto de 0.5 Ω con 10 A circulando disipa continuamente 5 W, calentando el enchufe día a día). Correcto: "Verificación anual: enchufe sin decoloración, cable flexible sin rigidez, temperatura de conexión < 40°C tras 30 min de operación."


### Error 8: Ignorar la resistencia del cableado de instalación

**Por qué parece correcto**

Los cálculos teóricos típicamente usan la resistencia de carga ([[resistencia_electrica]]) del electrodoméstico, ignorando la resistencia de los cables de conexión. Esta simplificación parece válida porque los cables de instalación (1.5-2.5 mm² de cobre) tienen resistencia aparentemente insignificante comparada con cargas de 10-100 Ω.

**Por qué es incorrecto**

La resistencia de cableado (típicamente 0.1-0.5 Ω para tramos domésticos de 10-30 m) es en serie con la carga. Para resistencias de carga bajas (< 10 Ω), el cableado puede representar el 5-10% de la resistencia total, reduciendo la corriente real y disipando potencia I²R_cable que calienta los conductores. En instalaciones antiguas con conexiones oxidadas, la resistencia de contacto puede añadir 1-5 Ω adicionales.

**Señal de detección**

- Caídas de tensión medidas > 3-5% en extremos del circuito bajo carga
- Calentamiento desproporcionado de cables respecto a la carga nominal
- Incompatibilidad entre cálculo teórico y medición real de corriente

**Corrección conceptual**

Incluir R_cable = ρ·L/A en cálculos precisos, donde ρ = 0.0175 Ω·mm²/m para cobre, L es longitud ida y vuelta, A es sección. Verificar que caída de tensión total < 3% para iluminación, < 5% para fuerza. En instalaciones antiguas, medir resistencia de bucle con multímetro antes de confiar en cálculos.

**Mini-ejemplo de contraste**

Incorrecto: Calcular dividiendo 230 V entre 5 Ω y obtener 46 A para un calefactor, ignorando 0.3 Ω de cableado (ida/vuelta 20 m de 2.5 mm²). Real: la resistencia total es 5.3 Ω, la corriente cae a 43.4 A (diferencia del 6%), pero los 0.3 Ω del cable disipan más de 500 W que calientan los conductores, no el calefactor. Correcto: Verificar sección de cable para esta corriente (requeriría 10 mm² mínimo) o seleccionar calefactor con resistencia superior a 15 Ω.

## Regla de autocontrol rápido

Antes de conectar cualquier carga nueva o modificar una instalación existente, ejecutar este protocolo de verificación de 60 segundos:

1. **Conversión SI:** Verificar que [[potencia_electrica]] está en W (no kW), [[tension_electrica]] en V, [[resistencia_electrica]] en Ω. Convertir si es necesario.

2. **Cálculo de corriente:** Dividir [[potencia_electrica]] entre [[tension_electrica]] (si se conoce potencia), o dividir [[tension_electrica]] entre [[resistencia_electrica]] (si se conoce resistencia). Resultado en amperios.

3. **Verificación de circuito:** Identificar el rating de protección del circuito (10 A, 16 A, 20 A, 25 A) y calcular el 80% de ese valor (margen de seguridad térmico).

4. **Comparación de seguridad:** ¿[[intensidad_de_corriente]] calculada < 80% del rating? Si no, requiere circuito diferente o gestión de simultaneidad.

5. **Check de resistencia:** Si se parte de [[resistencia_electrica]], ¿[[resistencia_electrica]] > 10 Ω? Si [[resistencia_electrica]] < 10 Ω, verificar explicitamente que no es cortocircuito o carga defectuosa.

6. **Validación dimensional:** ¿El resultado tiene sentido físico? ¿Corriente en A (no mA ni kA)? ¿Potencia en W (no MW)?

7. **Regla de oro:** Si el resultado sorprende o parece incorrecto, re-verificar unidades y suposiciones antes de proceder.

**Señales de alerta inmediata (STOP):**
- ⚠️ No se puede enunciar la corriente calculada en amperios → Análisis incompleto, NO conectar
- ⚠️ [[intensidad_de_corriente]] > 100% del rating del circuito → Peligro inmediato, conexión prohibida
- ⚠️ [[intensidad_de_corriente]] > 80% del rating → Precaución, requiere verificación adicional
- ⚠️ [[resistencia_electrica]] < 10 Ω sin certificación explícita de fabricante → Posible cortocircuito
- ⚠️ Unidades mezcladas (kW con V, W con minutos) → Error matemático probable

**Recordatorio final:** En seguridad eléctrica, el escepticismo sistemático es una virtud. Si existe duda, consultar electricista cualificado antes de conectar.