const e=`\uFEFF# Errores y precauciones\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir precaución con "miedo" en lugar de método técnico\r
\r
**Por qué parece correcto**\r
\r
La intuición sugiere que ser "precavido" con la electricidad significa tener miedo, lo que lleva a dos extremos aparentemente lógicos: la parálisis por exceso de cautela (no usar instalaciones normales por temor irracional) o la despreocupación excesiva (ignorar señales porque "nunca ha pasado nada"). Esta dicotomía parece razonable porque la electricidad es invisible y su peligro potencial genera ansiedad natural.\r
\r
**Por qué es incorrecto**\r
\r
La precaución eficaz no es miedo sino **gestión técnica de riesgo basada en magnitudes medibles**. El miedo genera decisiones erráticas; el método técnico permite evaluar objetivamente qué puntos requieren atención prioritaria. El error confunde la percepción subjetiva de peligro con el análisis objetivo de variables físicas como [[P_joule]] y [[DeltaT]].\r
\r
**Señal de detección**\r
\r
- Frases como "me da miedo" o "no me fío" sin cifras concretas de riesgo\r
- Decisión de actuar o no actuar basada únicamente en sensaciones o impresiones\r
- Dificultad para priorizar entre múltiples puntos porque faltan indicadores numéricos\r
\r
**Corrección conceptual**\r
\r
La precaución es un **protocolo sistemático de evaluación**: cuantificar [[P_joule]], [[E_joule]] y [[DeltaT]], clasificar por criticidad, y decidir basándose en datos objetivos. La "confianza" en una instalación debe venir de la verificación de que sus indicadores de riesgo están dentro de rangos aceptables, no de la ausencia de miedo.\r
\r
**Mini-ejemplo de contraste**\r
\r
Situación: Dos puntos de conexión en casa — uno "me da mala espina" y otro "parece normal". Sin método: actúo por sensación y puede que invierta recursos en el punto equivocado. Con método: mido ambos, descubro que el "normal" tiene [[P_joule]] = 12 W y el "sospechoso" solo 3 W, priorizo correctamente.\r
\r
---\r
\r
## Errores de modelo\r
\r
### Error 2: Gestionar incidencias solo cuando aparece fallo visible\r
\r
**Por qué parece correcto**\r
\r
La lógica común dice "si funciona, no está roto". No actuar hasta que aparezca un fallo manifiesto (disparo recurrente, olor intenso, carbonización) parece pragmático: evita gastos innecesarios y solo se interviene cuando algo está "realmente" mal. Esta actitud reactiva parece eficiente económicamente.\r
\r
**Por qué es incorrecto**\r
\r
El modelo térmico muestra que los fallos manifiestos son la etapa **final de un proceso degradativo detectable mucho antes**. Entre el primer indicador térmico anómalo y el fallo catastrófico pueden pasar semanas o meses. Esperar al fallo manifiesto permite acumulación de daño térmico irreversible y expone a riesgos de seguridad mayores que una intervención temprana.\r
\r
**Señal de detección**\r
\r
- Patrón de "arreglamos cuando salte el magnetotérmico"\r
- Considerar normal que un conector esté "tibio" o "caliente"\r
- Ignorar disparos esporádicos porque "vuelve a funcionar"\r
- No inspeccionar visualmente conectores regularmente\r
\r
**Corrección conceptual**\r
\r
El modelo de riesgo térmico identifica **indicadores tempranos**: [[DeltaT]] > 10-20 K detectable al tacto, leve olor a plástico caliente, disparos ocasionales, holgura en conectores. La gestión preventiva inspecciona estos indicadores **antes** del fallo manifiesto, cuando la intervención es más barata y efectiva.\r
\r
**Mini-ejemplo de contraste**\r
\r
Situación: Conector de cocina con holgura visible. Enfoque reactivo: espero a que salte el magnetotérmico. Resultado: cuando salta, el conector ya está carbonizado y debe sustituirse toda la regleta. Enfoque preventivo: detecto la holgura, mido [[P_joule]] = 8 W, reaprieto el conector, evito la carbonización y el coste de la regleta completa.\r
\r
---\r
\r
## Errores matemáticos\r
\r
### Error 3: Evaluar riesgo solo por corriente instantánea [[I]] ignorando [[R]] y [[t]]\r
\r
**Por qué parece correcto**\r
\r
La corriente [[I]] es la magnitud más intuitiva y más fácil de medir. La lógica simple dice "más corriente = más calor = más riesgo", lo que sugiere que un punto con baja corriente (ej: 5 A) debe ser seguro. Esta simplificación parece razonable para evaluaciones rápidas.\r
\r
**Por qué es incorrecto**\r
\r
La potencia térmica depende de **[[I]]²·[[R]]**: un punto con 5 A pero [[R]] = 0.5 Ω genera [[P_joule]] = 12.5 W, que es riesgo significativo. Además, el daño acumulado depende de [[E_joule]] = [[P_joule]]·[[t]]: 12.5 W durante 8 horas/día acumulan 360 kJ diarios, daño térmico considerable. Ignorar [[R]] y [[t]] subestima gravemente el riesgo real.\r
\r
**Señal de detección**\r
\r
- Frases como "solo tiene X amperios, no hay problema"\r
- No evaluar el estado del conector (oxido, holgura) que afecta [[R]]\r
- Ignorar el tiempo de uso diario al comparar riesgos entre puntos\r
- Comparar puntos solo por corriente sin considerar perfiles de uso\r
\r
**Corrección conceptual**\r
\r
El riesgo térmico requiere **evaluación integral**: calcular [[P_joule]] = [[I]]²·[[R]] para riesgo instantáneo, y [[E_joule]] = [[P_joule]]·[[t]] para daño acumulado. Un punto puede tener menor corriente pero mayor riesgo acumulado debido a alta [[R]] o largo [[t]].\r
\r
**Mini-ejemplo de contraste**\r
\r
Punto A: [[I]] = 10 A, [[R]] = 0.05 Ω, [[t]] = 1 h/día → [[E_joule]] ≈ 18 kJ/día. Punto B: [[I]] = 5 A, [[R]] = 0.4 Ω, [[t]] = 6 h/día → [[E_joule]] ≈ 216 kJ/día. Comparando solo por corriente, A parece más riesgoso; evaluando integralmente, B acumula 12× más daño térmico diario.\r
\r
---\r
\r
## Errores de interpretación\r
\r
### Error 4: Pensar que una mejora puntual elimina definitivamente el riesgo\r
\r
**Por qué parece correcto**\r
\r
La lógica lineal sugiere que si identifico un problema y lo soluciono (sustituyo el conector, reaprieto el tornillo), el riesgo desaparece permanentemente. Esta visión estática parece razonable porque la intervención técnica corrige el defecto inmediato observable.\r
\r
**Por qué es incorrecto**\r
\r
El riesgo térmico es **dinámico**: nuevos conectores se degradan con el tiempo, las condiciones de uso cambian, y pueden existir problemas sistémicos (sobrecarga del circuito, ventilación deficiente) que no se abordaron con la intervención puntual. Sin verificación posterior y seguimiento, una "solución" puede ser temporal o insuficiente.\r
\r
**Señal de detección**\r
\r
- Frases como "ya lo arreglé, no hay que preocuparse más"\r
- No medir [[P_joule]] ni [[DeltaT]] después de la intervención para confirmar mejora\r
- Ausencia de revisiones posteriores programadas\r
- Considerar que el mantenimiento preventivo es "inventar" problemas\r
\r
**Corrección conceptual**\r
\r
Toda intervención requiere **verificación y seguimiento**: (1) verificación inmediata midiendo [[P_joule]] o [[DeltaT]] tras la reparación, (2) control a corto plazo (2-4 semanas) para detectar recaídas, (3) seguimiento periódico trimestral de puntos críticos. El riesgo térmico es una variable dinámica que requiere vigilancia continua.\r
\r
**Mini-ejemplo de contraste**\r
\r
Situación: Sustituyo un conector oxidado por uno nuevo. Sin seguimiento: el nuevo conector se afloja con el tiempo por vibraciones, se genera arco eléctrico, y 6 meses después hay un incendio. Con seguimiento: a las 4 semanas reviso y detecto que el nuevo conector tiene [[P_joule]] = 6 W (sospechoso para uno nuevo), reaprieto y evito el fallo.\r
\r
---\r
\r
### Error 5: Estimar resistencia [[R]] visualmente sin verificación\r
\r
**Por qué parece correcto**\r
\r
La experiencia visual parece suficiente: "si parece nuevo, el contacto es bueno; si está oxidado o suelto, es malo". Esta heurística es rápida y no requiere herramientas, lo que la hace atractiva para evaluaciones domésticas informales.\r
\r
**Por qué es incorrecto**\r
\r
La resistencia de contacto [[R]] depende de factores no siempre visibles: presión de contacto, micro-oxidación interna, fatiga del material. Un conector "que parece nuevo" puede tener [[R]] alta por mal apriete interno. Un conector "un poco oscuro" superficialmente puede tener buen contacto interno. La estimación visual tiene falsos positivos y negativos significativos.\r
\r
**Señal de detección**\r
\r
- Frases como "parece nuevo, no hay problema" o "está oxidado, hay que cambiarlo"\r
- No verificar holgura mecánica real del conector\r
- Ignorar mediciones de temperatura ([[DeltaT]]) que contradicen la apariencia visual\r
- Confianza excesiva en la inspección visual sin corroboración\r
\r
**Corrección conceptual**\r
\r
La evaluación de [[R]] requiere **verificación funcional**: cuando es posible, medir caída de tensión bajo carga (ΔV = [[I]]·[[R]]) para estimar resistencia real, o usar termómetro infrarrojo para detectar [[DeltaT]] anómalo que indica [[R]] elevada aunque visualmente no se aprecie. La apariencia es indicador débil; la medición es indicador fuerte.\r
\r
**Mini-ejemplo de contraste**\r
\r
Conector A: aspecto impecable, pero al tocarlo está caliente → [[DeltaT]] ≈ 25 K indica [[R]] anómala a pesar de la apariencia. Conector B: aspecto oxidado superficialmente, pero al tocarlo está frío → [[DeltaT]] ≈ 5 K indica buen contacto interno. Evaluación visual errónea en ambos casos; evaluación térmica correcta.\r
\r
---\r
\r
## Regla de autocontrol rápido\r
\r
Antes de dar por cerrada una evaluación de riesgo o una intervención, verificar:\r
\r
- [ ] **Indicador inicial registrado**: [[P_joule]], [[E_joule]] o [[DeltaT]] estimado antes de actuar\r
- [ ] **Acción ejecutada**: Intervención técnica específica (sustitución, reapriete, redistribución)\r
- [ ] **Indicador final comparado**: Valor "después" medido y comparado con el "antes"\r
- [ ] **Plan de seguimiento definido**: Fecha de revisión posterior programada\r
- [ ] **Documentación**: Registro de valores y acciones para futura referencia\r
`;export{e as default};
