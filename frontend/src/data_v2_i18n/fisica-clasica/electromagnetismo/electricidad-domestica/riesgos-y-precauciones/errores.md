# Errores y precauciones

## Errores conceptuales


### Error 1: Confundir precaución con "miedo" en lugar de método técnico

**Por qué parece correcto**

La intuición sugiere que ser "precavido" con la electricidad significa tener miedo, lo que lleva a dos extremos aparentemente lógicos: la parálisis por exceso de cautela (no usar instalaciones normales por temor irracional) o la despreocupación excesiva (ignorar señales porque "nunca ha pasado nada"). Esta dicotomía parece razonable porque la electricidad es invisible y su peligro potencial genera ansiedad natural.

**Por qué es incorrecto**

La precaución eficaz no es miedo sino **gestión técnica de riesgo basada en magnitudes medibles**. El miedo genera decisiones erráticas; el método técnico permite evaluar objetivamente qué puntos requieren atención prioritaria. El error confunde la percepción subjetiva de peligro con el análisis objetivo de variables físicas como [[potencia_termica_disipada]] y [[incremento_de_temperatura]].

**Señal de detección**

- Frases como "me da miedo" o "no me fío" sin cifras concretas de riesgo
- Decisión de actuar o no actuar basada únicamente en sensaciones o impresiones
- Dificultad para priorizar entre múltiples puntos porque faltan indicadores numéricos

**Corrección conceptual**

La precaución es un **protocolo sistemático de evaluación**: cuantificar [[potencia_termica_disipada]], [[energia_termica_acumulada]] y [[incremento_de_temperatura]], clasificar por criticidad, y decidir basándose en datos objetivos. La "confianza" en una instalación debe venir de la verificación de que sus indicadores de riesgo están dentro de rangos aceptables, no de la ausencia de miedo.

**Mini-ejemplo de contraste**

Situación: Dos puntos de conexión en casa — uno "me da mala espina" y otro "parece normal". Sin método: actúo por sensación y puede que invierta recursos en el punto equivocado. Con método: mido ambos, descubro que el "normal" tiene [[potencia_termica_disipada]] = 12 W y el "sospechoso" solo 3 W, priorizo correctamente.

---

## Errores de modelo


### Error 2: Gestionar incidencias solo cuando aparece fallo visible

**Por qué parece correcto**

La lógica común dice "si funciona, no está roto". No actuar hasta que aparezca un fallo manifiesto (disparo recurrente, olor intenso, carbonización) parece pragmático: evita gastos innecesarios y solo se interviene cuando algo está "realmente" mal. Esta actitud reactiva parece eficiente económicamente.

**Por qué es incorrecto**

El modelo térmico muestra que los fallos manifiestos son la etapa **final de un proceso degradativo detectable mucho antes**. Entre el primer indicador térmico anómalo y el fallo catastrófico pueden pasar semanas o meses. Esperar al fallo manifiesto permite acumulación de daño térmico irreversible y expone a riesgos de seguridad mayores que una intervención temprana.

**Señal de detección**

- Patrón de "arreglamos cuando salte el magnetotérmico"
- Considerar normal que un conector esté "tibio" o "caliente"
- Ignorar disparos esporádicos porque "vuelve a funcionar"
- No inspeccionar visualmente conectores regularmente

**Corrección conceptual**

El modelo de riesgo térmico identifica **indicadores tempranos**: [[incremento_de_temperatura]] > 10-20 K detectable al tacto, leve olor a plástico caliente, disparos ocasionales, holgura en conectores. La gestión preventiva inspecciona estos indicadores **antes** del fallo manifiesto, cuando la intervención es más barata y efectiva.

**Mini-ejemplo de contraste**

Situación: Conector de cocina con holgura visible. Enfoque reactivo: espero a que salte el magnetotérmico. Resultado: cuando salta, el conector ya está carbonizado y debe sustituirse toda la regleta. Enfoque preventivo: detecto la holgura, mido [[potencia_termica_disipada]] = 8 W, reaprieto el conector, evito la carbonización y el coste de la regleta completa.

---

## Errores matemáticos


### Error 3: Evaluar riesgo solo por corriente instantánea [[corriente_electrica]] ignorando [[resistencia_electrica_local]] y [[tiempo_de_exposicion]]

**Por qué parece correcto**

La corriente [[corriente_electrica]] es la magnitud más intuitiva y más fácil de medir. La lógica simple dice "más corriente = más calor = más riesgo", lo que sugiere que un punto con baja corriente (ej: 5 A) debe ser seguro. Esta simplificación parece razonable para evaluaciones rápidas.

**Por qué es incorrecto**

La potencia térmica depende de **[[corriente_electrica]]²·[[resistencia_electrica_local]]**: un punto con 5 A pero [[resistencia_electrica_local]] = 0.5 Ω genera [[potencia_termica_disipada]] = 12.5 W, que es riesgo significativo. Además, el daño acumulado depende de [[energia_termica_acumulada]] = [[potencia_termica_disipada]]·[[tiempo_de_exposicion]]: 12.5 W durante 8 horas/día acumulan 360 kJ diarios, daño térmico considerable. Ignorar [[resistencia_electrica_local]] y [[tiempo_de_exposicion]] subestima gravemente el riesgo real.

**Señal de detección**

- Frases como "solo tiene X amperios, no hay problema"
- No evaluar el estado del conector (oxido, holgura) que afecta [[resistencia_electrica_local]]
- Ignorar el tiempo de uso diario al comparar riesgos entre puntos
- Comparar puntos solo por corriente sin considerar perfiles de uso

**Corrección conceptual**

El riesgo térmico requiere **evaluación integral**: calcular [[potencia_termica_disipada]] = [[corriente_electrica]]²·[[resistencia_electrica_local]] para riesgo instantáneo, y [[energia_termica_acumulada]] = [[potencia_termica_disipada]]·[[tiempo_de_exposicion]] para daño acumulado. Un punto puede tener menor corriente pero mayor riesgo acumulado debido a alta [[resistencia_electrica_local]] o largo [[tiempo_de_exposicion]].

**Mini-ejemplo de contraste**

Punto A: [[corriente_electrica]] = 10 A, [[resistencia_electrica_local]] = 0.05 Ω, [[tiempo_de_exposicion]] = 1 h/día → [[energia_termica_acumulada]] ≈ 18 kJ/día. Punto B: [[corriente_electrica]] = 5 A, [[resistencia_electrica_local]] = 0.4 Ω, [[tiempo_de_exposicion]] = 6 h/día → [[energia_termica_acumulada]] ≈ 216 kJ/día. Comparando solo por corriente, A parece más riesgoso; evaluando integralmente, B acumula 12× más daño térmico diario.

---

## Errores de interpretación


### Error 4: Pensar que una mejora puntual elimina definitivamente el riesgo

**Por qué parece correcto**

La lógica lineal sugiere que si identifico un problema y lo soluciono (sustituyo el conector, reaprieto el tornillo), el riesgo desaparece permanentemente. Esta visión estática parece razonable porque la intervención técnica corrige el defecto inmediato observable.

**Por qué es incorrecto**

El riesgo térmico es **dinámico**: nuevos conectores se degradan con el tiempo, las condiciones de uso cambian, y pueden existir problemas sistémicos (sobrecarga del circuito, ventilación deficiente) que no se abordaron con la intervención puntual. Sin verificación posterior y seguimiento, una "solución" puede ser temporal o insuficiente.

**Señal de detección**

- Frases como "ya lo arreglé, no hay que preocuparse más"
- No medir [[potencia_termica_disipada]] ni [[incremento_de_temperatura]] después de la intervención para confirmar mejora
- Ausencia de revisiones posteriores programadas
- Considerar que el mantenimiento preventivo es "inventar" problemas

**Corrección conceptual**

Toda intervención requiere **verificación y seguimiento**: (1) verificación inmediata midiendo [[potencia_termica_disipada]] o [[incremento_de_temperatura]] tras la reparación, (2) control a corto plazo (2-4 semanas) para detectar recaídas, (3) seguimiento periódico trimestral de puntos críticos. El riesgo térmico es una variable dinámica que requiere vigilancia continua.

**Mini-ejemplo de contraste**

Situación: Sustituyo un conector oxidado por uno nuevo. Sin seguimiento: el nuevo conector se afloja con el tiempo por vibraciones, se genera arco eléctrico, y 6 meses después hay un incendio. Con seguimiento: a las 4 semanas reviso y detecto que el nuevo conector tiene [[potencia_termica_disipada]] = 6 W (sospechoso para uno nuevo), reaprieto y evito el fallo.

---


### Error 5: Estimar resistencia [[resistencia_electrica_local]] visualmente sin verificación

**Por qué parece correcto**

La experiencia visual parece suficiente: "si parece nuevo, el contacto es bueno; si está oxidado o suelto, es malo". Esta heurística es rápida y no requiere herramientas, lo que la hace atractiva para evaluaciones domésticas informales.

**Por qué es incorrecto**

La resistencia de contacto [[resistencia_electrica_local]] depende de factores no siempre visibles: presión de contacto, micro-oxidación interna, fatiga del material. Un conector "que parece nuevo" puede tener [[resistencia_electrica_local]] alta por mal apriete interno. Un conector "un poco oscuro" superficialmente puede tener buen contacto interno. La estimación visual tiene falsos positivos y negativos significativos.

**Señal de detección**

- Frases como "parece nuevo, no hay problema" o "está oxidado, hay que cambiarlo"
- No verificar holgura mecánica real del conector
- Ignorar mediciones de temperatura ([[incremento_de_temperatura]]) que contradicen la apariencia visual
- Confianza excesiva en la inspección visual sin corroboración

**Corrección conceptual**

La evaluación de [[resistencia_electrica_local]] requiere **verificación funcional**: cuando es posible, medir caída de tensión bajo carga (ΔV = [[corriente_electrica]]·[[resistencia_electrica_local]]) para estimar resistencia real, o usar termómetro infrarrojo para detectar [[incremento_de_temperatura]] anómalo que indica [[resistencia_electrica_local]] elevada aunque visualmente no se aprecie. La apariencia es indicador débil; la medición es indicador fuerte.

**Mini-ejemplo de contraste**

Conector A: aspecto impecable, pero al tocarlo está caliente → [[incremento_de_temperatura]] ≈ 25 K indica [[resistencia_electrica_local]] anómala a pesar de la apariencia. Conector B: aspecto oxidado superficialmente, pero al tocarlo está frío → [[incremento_de_temperatura]] ≈ 5 K indica buen contacto interno. Evaluación visual errónea en ambos casos; evaluación térmica correcta.

---

## Regla de autocontrol rápido

Antes de dar por cerrada una evaluación de riesgo o una intervención, verificar:

- [ ] **Indicador inicial registrado**: [[potencia_termica_disipada]], [[energia_termica_acumulada]] o [[incremento_de_temperatura]] estimado antes de actuar
- [ ] **Acción ejecutada**: Intervención técnica específica (sustitución, reapriete, redistribución)
- [ ] **Indicador final comparado**: Valor "después" medido y comparado con el "antes"
- [ ] **Plan de seguimiento definido**: Fecha de revisión posterior programada
- [ ] **Documentación**: Registro de valores y acciones para futura referencia