# PROMPT MAESTRO MD | ZIP DESCARGABLE CON 12 ARCHIVOS MARKDOWN

Leaf ID: conduccion

You must create a downloadable ZIP file named `conduccion_md.zip`.
The ZIP must contain exactly the Markdown files listed below at the ZIP root.
Do not answer with the Markdown contents in the chat.
Do not use BEGIN/END markers.
Do not wrap files in code fences.

ZIP content rules:
- The response must be a real downloadable .zip file, not text printed on screen.
- Put the files directly in the ZIP root, not inside a nested folder.
- Do not include extra files, logs, manifests, explanations, or metadata.
- Do not omit any required Markdown file.
- Do not include placeholders, TODOs, or instructions to complete later.
- Use the exact filenames listed here: teoria.md, teoria.en.md, modelos.md, modelos.en.md, errores.md, errores.en.md, ejemplos.md, ejemplos.en.md, aplicaciones.md, aplicaciones.en.md, historia.md, historia.en.md

Cross-file coherence rules:
- Use the same physical assumptions, signs, symbols, examples, and terminology across languages.
- Spanish and English files must be equivalent in physics, not literal low-quality translations.
- Magnitude ids and formula ids must match the YAML context exactly.
- Examples, models, errors, applications, and history must answer the central physical question of the leaf.
- Keep formulas in formal/solution/validation contexts; keep conceptual sections conceptual.

================================================================================
CONTRACT FOR teoria.md
================================================================================
# PROMPT MD | teoria.md

Generate `teoria.md` for the Phyxio leaf `conduccion`.
Language: español.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Conduccion
- Central physical question: ¿Cómo se transfiere energía térmica por conducción entre regiones a distinta temperatura?
- Short description: Transferencia de energía térmica por contacto dentro de un material o entre cuerpos.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[calor_transferido]] | Q | calor transferido | Energía térmica que atraviesa el material durante un intervalo de tiempo.
- [[tiempo]] | t | tiempo | Intervalo durante el cual se produce la conducción térmica.
- [[potencia_termica]] | \dot{Q} | potencia térmica | Cantidad de calor transferida por unidad de tiempo.
- [[flujo_calor]] | q | flujo de calor | Potencia térmica transferida por unidad de área.
- [[conductividad_termica]] | k | conductividad térmica | Propiedad del material que mide su facilidad para conducir calor.
- [[area]] | A | área transversal | Superficie atravesada por el calor durante la conducción.
- [[espesor]] | L | espesor | Distancia que recorre el calor entre las dos caras del material.
- [[temperatura_caliente]] | T_{c} | temperatura caliente | Temperatura de la cara o región de mayor temperatura.
- [[temperatura_fria]] | T_{f} | temperatura fría | Temperatura de la cara o región de menor temperatura.
- [[diferencia_temperatura]] | \Delta T | diferencia de temperatura | Separación térmica entre la cara caliente y la cara fría.
- [[gradiente_temperatura]] | \frac{\Delta T}{L} | gradiente de temperatura | Cambio de temperatura por unidad de longitud en la dirección de conducción.
- [[resistencia_termica]] | R_{th} | resistencia térmica | Oposición geométrica y material al paso del calor por conducción.

Available formulas. Use exactly these references when a formula is needed:
- {{f:diferencia_temperatura}} | Diferencia de temperatura entre caras | Mide la separación térmica que impulsa la conducción entre dos regiones.
- {{f:gradiente_temperatura_1d}} | Gradiente térmico medio en una dimensión | Expresa cuánto cambia la temperatura por cada metro de material.
- {{f:ley_fourier_conduccion_1d}} | Ley de Fourier para conducción plana estacionaria | La potencia conducida aumenta con conductividad, área y diferencia térmica, y disminuye con el espesor.
- {{f:flujo_calor_conduccion}} | Flujo de calor por conducción | Mide la potencia conducida por unidad de área.
- {{f:flujo_potencia_area}} | Relación entre flujo de calor, potencia y área | Convierte potencia térmica total en intensidad de transferencia por unidad de área.
- {{f:calor_potencia_tiempo}} | Calor transferido a partir de potencia térmica | Calcula la energía térmica total transferida cuando la potencia térmica se mantiene constante.
- {{f:resistencia_termica_conduccion}} | Resistencia térmica de una pared plana | Resume la oposición al paso del calor debida al material y a la geometría.
- {{f:potencia_resistencia_termica}} | Potencia térmica mediante resistencia térmica | Calcula la potencia conducida usando la oposición térmica equivalente del sistema.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Conduccion
## Contexto conceptual
## 🟢 Nivel esencial
## 🔵 Nivel formal
## 🔴 Nivel estructural
## Interpretación física profunda
## Orden de magnitud
## Método de resolución personalizado
## Casos especiales y ejemplo extendido
## Preguntas reales del alumno
## Conexiones transversales y rutas de estudio
## Síntesis final

Section contract:
- Total length: 1200 to 2000 words.
- Conceptual context: qualitative entry point; no equations.
- Essential level: intuitive explanation; no equations with =, <, > or algebraic derivations.
- Formal level: define the mathematical relations using the available {{f:id}} references; include all core formulas.
- Structural level: assumptions, invariants, limits, and model breakdown; no new formulas.
- Deep physical interpretation: explain what the quantities mean physically, not just how to calculate them.
- Order of magnitude: include realistic scales or inequalities using magnitudes from the leaf.
- Personalized resolution method: give a reusable problem-solving sequence.
- Special cases and extended example: discuss limiting or boundary cases.
- Real student questions: questions and answers without equations in headings.
- Cross-cutting connections and study paths: connect to neighboring physics ideas without changing topic.
- Final synthesis: conceptual closing, no formulas.

================================================================================
CONTRACT FOR teoria.en.md
================================================================================
# PROMPT MD | teoria.en.md

Generate `teoria.en.md` for the Phyxio leaf `conduccion`.
Language: English.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Conduction
- Central physical question: How is thermal energy transferred by conduction between regions at different temperatures?
- Short description: Thermal energy transfer by contact within a material or between bodies.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[calor_transferido]] | Q | transferred heat | Thermal energy crossing the material during a time interval.
- [[tiempo]] | t | time | Interval during which thermal conduction occurs.
- [[potencia_termica]] | \dot{Q} | thermal power | Amount of heat transferred per unit time.
- [[flujo_calor]] | q | heat flux | Thermal power transferred per unit area.
- [[conductividad_termica]] | k | thermal conductivity | Material property measuring how easily it conducts heat.
- [[area]] | A | cross-sectional area | Surface crossed by heat during conduction.
- [[espesor]] | L | thickness | Distance heat travels between the two faces of the material.
- [[temperatura_caliente]] | T_{c} | hot-side temperature | Temperature of the face or region with higher temperature.
- [[temperatura_fria]] | T_{f} | cold-side temperature | Temperature of the face or region with lower temperature.
- [[diferencia_temperatura]] | \Delta T | temperature difference | Thermal separation between the hot side and the cold side.
- [[gradiente_temperatura]] | \frac{\Delta T}{L} | temperature gradient | Temperature change per unit length along the conduction direction.
- [[resistencia_termica]] | R_{th} | thermal resistance | Geometric and material opposition to heat transfer by conduction.

Available formulas. Use exactly these references when a formula is needed:
- {{f:diferencia_temperatura}} | Temperature difference between faces | Measures the thermal separation driving conduction between two regions.
- {{f:gradiente_temperatura_1d}} | Mean one-dimensional thermal gradient | Expresses how much temperature changes per meter of material.
- {{f:ley_fourier_conduccion_1d}} | Fourier law for steady plane conduction | Conducted power increases with conductivity, area and thermal difference, and decreases with thickness.
- {{f:flujo_calor_conduccion}} | Conductive heat flux | Measures the conducted power per unit area.
- {{f:flujo_potencia_area}} | Relation between heat flux, power and area | Converts total thermal power into transfer intensity per unit area.
- {{f:calor_potencia_tiempo}} | Transferred heat from thermal power | Calculates total transferred thermal energy when thermal power remains constant.
- {{f:resistencia_termica_conduccion}} | Thermal resistance of a plane wall | Summarizes opposition to heat transfer due to material and geometry.
- {{f:potencia_resistencia_termica}} | Thermal power using thermal resistance | Calculates conducted power using the equivalent thermal opposition of the system.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Conduction
## Conceptual context
## 🟢 Essential level
## 🔵 Formal level
## 🔴 Structural level
## Deep physical interpretation
## Order of magnitude
## Personalized resolution method
## Special cases and extended example
## Real student questions
## Cross-cutting connections and study paths
## Final synthesis

Section contract:
- Total length: 1200 to 2000 words.
- Conceptual context: qualitative entry point; no equations.
- Essential level: intuitive explanation; no equations with =, <, > or algebraic derivations.
- Formal level: define the mathematical relations using the available {{f:id}} references; include all core formulas.
- Structural level: assumptions, invariants, limits, and model breakdown; no new formulas.
- Deep physical interpretation: explain what the quantities mean physically, not just how to calculate them.
- Order of magnitude: include realistic scales or inequalities using magnitudes from the leaf.
- Personalized resolution method: give a reusable problem-solving sequence.
- Special cases and extended example: discuss limiting or boundary cases.
- Real student questions: questions and answers without equations in headings.
- Cross-cutting connections and study paths: connect to neighboring physics ideas without changing topic.
- Final synthesis: conceptual closing, no formulas.

================================================================================
CONTRACT FOR modelos.md
================================================================================
# PROMPT MD | modelos.md

Generate `modelos.md` for the Phyxio leaf `conduccion`.
Language: español.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Conduccion
- Central physical question: ¿Cómo se transfiere energía térmica por conducción entre regiones a distinta temperatura?
- Short description: Transferencia de energía térmica por contacto dentro de un material o entre cuerpos.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[calor_transferido]] | Q | calor transferido | Energía térmica que atraviesa el material durante un intervalo de tiempo.
- [[tiempo]] | t | tiempo | Intervalo durante el cual se produce la conducción térmica.
- [[potencia_termica]] | \dot{Q} | potencia térmica | Cantidad de calor transferida por unidad de tiempo.
- [[flujo_calor]] | q | flujo de calor | Potencia térmica transferida por unidad de área.
- [[conductividad_termica]] | k | conductividad térmica | Propiedad del material que mide su facilidad para conducir calor.
- [[area]] | A | área transversal | Superficie atravesada por el calor durante la conducción.
- [[espesor]] | L | espesor | Distancia que recorre el calor entre las dos caras del material.
- [[temperatura_caliente]] | T_{c} | temperatura caliente | Temperatura de la cara o región de mayor temperatura.
- [[temperatura_fria]] | T_{f} | temperatura fría | Temperatura de la cara o región de menor temperatura.
- [[diferencia_temperatura]] | \Delta T | diferencia de temperatura | Separación térmica entre la cara caliente y la cara fría.
- [[gradiente_temperatura]] | \frac{\Delta T}{L} | gradiente de temperatura | Cambio de temperatura por unidad de longitud en la dirección de conducción.
- [[resistencia_termica]] | R_{th} | resistencia térmica | Oposición geométrica y material al paso del calor por conducción.

Available formulas. Use exactly these references when a formula is needed:
- {{f:diferencia_temperatura}} | Diferencia de temperatura entre caras | Mide la separación térmica que impulsa la conducción entre dos regiones.
- {{f:gradiente_temperatura_1d}} | Gradiente térmico medio en una dimensión | Expresa cuánto cambia la temperatura por cada metro de material.
- {{f:ley_fourier_conduccion_1d}} | Ley de Fourier para conducción plana estacionaria | La potencia conducida aumenta con conductividad, área y diferencia térmica, y disminuye con el espesor.
- {{f:flujo_calor_conduccion}} | Flujo de calor por conducción | Mide la potencia conducida por unidad de área.
- {{f:flujo_potencia_area}} | Relación entre flujo de calor, potencia y área | Convierte potencia térmica total en intensidad de transferencia por unidad de área.
- {{f:calor_potencia_tiempo}} | Calor transferido a partir de potencia térmica | Calcula la energía térmica total transferida cuando la potencia térmica se mantiene constante.
- {{f:resistencia_termica_conduccion}} | Resistencia térmica de una pared plana | Resume la oposición al paso del calor debida al material y a la geometría.
- {{f:potencia_resistencia_termica}} | Potencia térmica mediante resistencia térmica | Calcula la potencia conducida usando la oposición térmica equivalente del sistema.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Conduccion
## Modelo ideal
## Hipótesis
## Dominio de validez cuantitativo
## Señales de fallo del modelo
## Modelo extendido o alternativo
## Comparación operativa

Section contract:
- Total length: 400 to 750 words.
- Ideal model: qualitative description of the simplified model.
- Hypotheses: explicit list of assumptions and the consequence of violating each one.
- Quantitative validity domain: include concrete inequalities, ranges, or order-of-magnitude criteria.
- Model failure signals: observable signs that the simple model is no longer enough.
- Extended or alternative model: state when it is appropriate to switch model and why.
- Operational comparison: include a compact comparison table.

================================================================================
CONTRACT FOR modelos.en.md
================================================================================
# PROMPT MD | modelos.en.md

Generate `modelos.en.md` for the Phyxio leaf `conduccion`.
Language: English.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Conduction
- Central physical question: How is thermal energy transferred by conduction between regions at different temperatures?
- Short description: Thermal energy transfer by contact within a material or between bodies.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[calor_transferido]] | Q | transferred heat | Thermal energy crossing the material during a time interval.
- [[tiempo]] | t | time | Interval during which thermal conduction occurs.
- [[potencia_termica]] | \dot{Q} | thermal power | Amount of heat transferred per unit time.
- [[flujo_calor]] | q | heat flux | Thermal power transferred per unit area.
- [[conductividad_termica]] | k | thermal conductivity | Material property measuring how easily it conducts heat.
- [[area]] | A | cross-sectional area | Surface crossed by heat during conduction.
- [[espesor]] | L | thickness | Distance heat travels between the two faces of the material.
- [[temperatura_caliente]] | T_{c} | hot-side temperature | Temperature of the face or region with higher temperature.
- [[temperatura_fria]] | T_{f} | cold-side temperature | Temperature of the face or region with lower temperature.
- [[diferencia_temperatura]] | \Delta T | temperature difference | Thermal separation between the hot side and the cold side.
- [[gradiente_temperatura]] | \frac{\Delta T}{L} | temperature gradient | Temperature change per unit length along the conduction direction.
- [[resistencia_termica]] | R_{th} | thermal resistance | Geometric and material opposition to heat transfer by conduction.

Available formulas. Use exactly these references when a formula is needed:
- {{f:diferencia_temperatura}} | Temperature difference between faces | Measures the thermal separation driving conduction between two regions.
- {{f:gradiente_temperatura_1d}} | Mean one-dimensional thermal gradient | Expresses how much temperature changes per meter of material.
- {{f:ley_fourier_conduccion_1d}} | Fourier law for steady plane conduction | Conducted power increases with conductivity, area and thermal difference, and decreases with thickness.
- {{f:flujo_calor_conduccion}} | Conductive heat flux | Measures the conducted power per unit area.
- {{f:flujo_potencia_area}} | Relation between heat flux, power and area | Converts total thermal power into transfer intensity per unit area.
- {{f:calor_potencia_tiempo}} | Transferred heat from thermal power | Calculates total transferred thermal energy when thermal power remains constant.
- {{f:resistencia_termica_conduccion}} | Thermal resistance of a plane wall | Summarizes opposition to heat transfer due to material and geometry.
- {{f:potencia_resistencia_termica}} | Thermal power using thermal resistance | Calculates conducted power using the equivalent thermal opposition of the system.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Conduction
## Ideal model
## Hypotheses
## Quantitative validity domain
## Model failure signals
## Extended or alternative model
## Operational comparison

Section contract:
- Total length: 400 to 750 words.
- Ideal model: qualitative description of the simplified model.
- Hypotheses: explicit list of assumptions and the consequence of violating each one.
- Quantitative validity domain: include concrete inequalities, ranges, or order-of-magnitude criteria.
- Model failure signals: observable signs that the simple model is no longer enough.
- Extended or alternative model: state when it is appropriate to switch model and why.
- Operational comparison: include a compact comparison table.

================================================================================
CONTRACT FOR errores.md
================================================================================
# PROMPT MD | errores.md

Generate `errores.md` for the Phyxio leaf `conduccion`.
Language: español.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Conduccion
- Central physical question: ¿Cómo se transfiere energía térmica por conducción entre regiones a distinta temperatura?
- Short description: Transferencia de energía térmica por contacto dentro de un material o entre cuerpos.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[calor_transferido]] | Q | calor transferido | Energía térmica que atraviesa el material durante un intervalo de tiempo.
- [[tiempo]] | t | tiempo | Intervalo durante el cual se produce la conducción térmica.
- [[potencia_termica]] | \dot{Q} | potencia térmica | Cantidad de calor transferida por unidad de tiempo.
- [[flujo_calor]] | q | flujo de calor | Potencia térmica transferida por unidad de área.
- [[conductividad_termica]] | k | conductividad térmica | Propiedad del material que mide su facilidad para conducir calor.
- [[area]] | A | área transversal | Superficie atravesada por el calor durante la conducción.
- [[espesor]] | L | espesor | Distancia que recorre el calor entre las dos caras del material.
- [[temperatura_caliente]] | T_{c} | temperatura caliente | Temperatura de la cara o región de mayor temperatura.
- [[temperatura_fria]] | T_{f} | temperatura fría | Temperatura de la cara o región de menor temperatura.
- [[diferencia_temperatura]] | \Delta T | diferencia de temperatura | Separación térmica entre la cara caliente y la cara fría.
- [[gradiente_temperatura]] | \frac{\Delta T}{L} | gradiente de temperatura | Cambio de temperatura por unidad de longitud en la dirección de conducción.
- [[resistencia_termica]] | R_{th} | resistencia térmica | Oposición geométrica y material al paso del calor por conducción.

Available formulas. Use exactly these references when a formula is needed:
- {{f:diferencia_temperatura}} | Diferencia de temperatura entre caras | Mide la separación térmica que impulsa la conducción entre dos regiones.
- {{f:gradiente_temperatura_1d}} | Gradiente térmico medio en una dimensión | Expresa cuánto cambia la temperatura por cada metro de material.
- {{f:ley_fourier_conduccion_1d}} | Ley de Fourier para conducción plana estacionaria | La potencia conducida aumenta con conductividad, área y diferencia térmica, y disminuye con el espesor.
- {{f:flujo_calor_conduccion}} | Flujo de calor por conducción | Mide la potencia conducida por unidad de área.
- {{f:flujo_potencia_area}} | Relación entre flujo de calor, potencia y área | Convierte potencia térmica total en intensidad de transferencia por unidad de área.
- {{f:calor_potencia_tiempo}} | Calor transferido a partir de potencia térmica | Calcula la energía térmica total transferida cuando la potencia térmica se mantiene constante.
- {{f:resistencia_termica_conduccion}} | Resistencia térmica de una pared plana | Resume la oposición al paso del calor debida al material y a la geometría.
- {{f:potencia_resistencia_termica}} | Potencia térmica mediante resistencia térmica | Calcula la potencia conducida usando la oposición térmica equivalente del sistema.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Conduccion
## Errores conceptuales
## Errores de modelo
## Errores matemáticos
## Errores de interpretación
## Regla de autocontrol rápido

Error structure:
- Write at least 2 specific errors in each of the first four categories.
- Each error must start with `### Error N: ...`.
- Each error must contain these five blocks, exactly:
**Por qué parece correcto**
**Por qué es incorrecto**
**Señal de detección**
**Corrección conceptual**
**Mini-ejemplo de contraste**

Quality rules:
- Total length: at least 500 words for Spanish, at least 300 words for English.
- Avoid cloned paragraphs. Each error must have a distinct cause, detection signal, and contrast example.
- Do not repeat the same explanation with only the magnitude names changed.
- The quick self-control rule must be short, operational, and specific to the leaf.

================================================================================
CONTRACT FOR errores.en.md
================================================================================
# PROMPT MD | errores.en.md

Generate `errores.en.md` for the Phyxio leaf `conduccion`.
Language: English.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Conduction
- Central physical question: How is thermal energy transferred by conduction between regions at different temperatures?
- Short description: Thermal energy transfer by contact within a material or between bodies.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[calor_transferido]] | Q | transferred heat | Thermal energy crossing the material during a time interval.
- [[tiempo]] | t | time | Interval during which thermal conduction occurs.
- [[potencia_termica]] | \dot{Q} | thermal power | Amount of heat transferred per unit time.
- [[flujo_calor]] | q | heat flux | Thermal power transferred per unit area.
- [[conductividad_termica]] | k | thermal conductivity | Material property measuring how easily it conducts heat.
- [[area]] | A | cross-sectional area | Surface crossed by heat during conduction.
- [[espesor]] | L | thickness | Distance heat travels between the two faces of the material.
- [[temperatura_caliente]] | T_{c} | hot-side temperature | Temperature of the face or region with higher temperature.
- [[temperatura_fria]] | T_{f} | cold-side temperature | Temperature of the face or region with lower temperature.
- [[diferencia_temperatura]] | \Delta T | temperature difference | Thermal separation between the hot side and the cold side.
- [[gradiente_temperatura]] | \frac{\Delta T}{L} | temperature gradient | Temperature change per unit length along the conduction direction.
- [[resistencia_termica]] | R_{th} | thermal resistance | Geometric and material opposition to heat transfer by conduction.

Available formulas. Use exactly these references when a formula is needed:
- {{f:diferencia_temperatura}} | Temperature difference between faces | Measures the thermal separation driving conduction between two regions.
- {{f:gradiente_temperatura_1d}} | Mean one-dimensional thermal gradient | Expresses how much temperature changes per meter of material.
- {{f:ley_fourier_conduccion_1d}} | Fourier law for steady plane conduction | Conducted power increases with conductivity, area and thermal difference, and decreases with thickness.
- {{f:flujo_calor_conduccion}} | Conductive heat flux | Measures the conducted power per unit area.
- {{f:flujo_potencia_area}} | Relation between heat flux, power and area | Converts total thermal power into transfer intensity per unit area.
- {{f:calor_potencia_tiempo}} | Transferred heat from thermal power | Calculates total transferred thermal energy when thermal power remains constant.
- {{f:resistencia_termica_conduccion}} | Thermal resistance of a plane wall | Summarizes opposition to heat transfer due to material and geometry.
- {{f:potencia_resistencia_termica}} | Thermal power using thermal resistance | Calculates conducted power using the equivalent thermal opposition of the system.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Conduction
## Conceptual errors
## Model errors
## Mathematical errors
## Interpretation errors
## Quick self-control rule

Error structure:
- Write at least 2 specific errors in each of the first four categories.
- Each error must start with `### Error N: ...`.
- Each error must contain these five blocks, exactly:
**Why it seems correct**
**Why it is incorrect**
**Detection signal**
**Conceptual correction**
**Mini-example of contrast**

Quality rules:
- Total length: at least 500 words for Spanish, at least 300 words for English.
- Avoid cloned paragraphs. Each error must have a distinct cause, detection signal, and contrast example.
- Do not repeat the same explanation with only the magnitude names changed.
- The quick self-control rule must be short, operational, and specific to the leaf.

================================================================================
CONTRACT FOR ejemplos.md
================================================================================
# PROMPT MD | ejemplos.md

Generate `ejemplos.md` for the Phyxio leaf `conduccion`.
Language: español.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Conduccion
- Central physical question: ¿Cómo se transfiere energía térmica por conducción entre regiones a distinta temperatura?
- Short description: Transferencia de energía térmica por contacto dentro de un material o entre cuerpos.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[calor_transferido]] | Q | calor transferido | Energía térmica que atraviesa el material durante un intervalo de tiempo.
- [[tiempo]] | t | tiempo | Intervalo durante el cual se produce la conducción térmica.
- [[potencia_termica]] | \dot{Q} | potencia térmica | Cantidad de calor transferida por unidad de tiempo.
- [[flujo_calor]] | q | flujo de calor | Potencia térmica transferida por unidad de área.
- [[conductividad_termica]] | k | conductividad térmica | Propiedad del material que mide su facilidad para conducir calor.
- [[area]] | A | área transversal | Superficie atravesada por el calor durante la conducción.
- [[espesor]] | L | espesor | Distancia que recorre el calor entre las dos caras del material.
- [[temperatura_caliente]] | T_{c} | temperatura caliente | Temperatura de la cara o región de mayor temperatura.
- [[temperatura_fria]] | T_{f} | temperatura fría | Temperatura de la cara o región de menor temperatura.
- [[diferencia_temperatura]] | \Delta T | diferencia de temperatura | Separación térmica entre la cara caliente y la cara fría.
- [[gradiente_temperatura]] | \frac{\Delta T}{L} | gradiente de temperatura | Cambio de temperatura por unidad de longitud en la dirección de conducción.
- [[resistencia_termica]] | R_{th} | resistencia térmica | Oposición geométrica y material al paso del calor por conducción.

Available formulas. Use exactly these references when a formula is needed:
- {{f:diferencia_temperatura}} | Diferencia de temperatura entre caras | Mide la separación térmica que impulsa la conducción entre dos regiones.
- {{f:gradiente_temperatura_1d}} | Gradiente térmico medio en una dimensión | Expresa cuánto cambia la temperatura por cada metro de material.
- {{f:ley_fourier_conduccion_1d}} | Ley de Fourier para conducción plana estacionaria | La potencia conducida aumenta con conductividad, área y diferencia térmica, y disminuye con el espesor.
- {{f:flujo_calor_conduccion}} | Flujo de calor por conducción | Mide la potencia conducida por unidad de área.
- {{f:flujo_potencia_area}} | Relación entre flujo de calor, potencia y área | Convierte potencia térmica total en intensidad de transferencia por unidad de área.
- {{f:calor_potencia_tiempo}} | Calor transferido a partir de potencia térmica | Calcula la energía térmica total transferida cuando la potencia térmica se mantiene constante.
- {{f:resistencia_termica_conduccion}} | Resistencia térmica de una pared plana | Resume la oposición al paso del calor debida al material y a la geometría.
- {{f:potencia_resistencia_termica}} | Potencia térmica mediante resistencia térmica | Calcula la potencia conducida usando la oposición térmica equivalente del sistema.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Ejemplo tipo examen
## Enunciado
## Datos
## Definición del sistema
## Modelo físico
## Justificación del modelo
## Resolución simbólica
## Sustitución numérica
## Validación dimensional
## Interpretación física
# Ejemplo de aplicación real
## Contexto
## Estimación física
## Interpretación

Content contract:
- Total length: at least 800 words.
- Exam-type example: complete problem with data, system definition, model, symbolic solution, numerical substitution, dimensional validation, and physical interpretation.
- Data section: use ':' for listed data; avoid `[[id]] = value` patterns.
- System definition and model justification: each should be substantial and physically specific.
- Symbolic solution: use all relevant {{f:id}} formula references on their own lines and explain each step.
- Dimensional validation: check the dimensions explicitly.
- Real-world example: realistic context, approximate numerical estimate, and physical reading.
- Use values and units that are plausible for the physics domain.

================================================================================
CONTRACT FOR ejemplos.en.md
================================================================================
# PROMPT MD | ejemplos.en.md

Generate `ejemplos.en.md` for the Phyxio leaf `conduccion`.
Language: English.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Conduction
- Central physical question: How is thermal energy transferred by conduction between regions at different temperatures?
- Short description: Thermal energy transfer by contact within a material or between bodies.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[calor_transferido]] | Q | transferred heat | Thermal energy crossing the material during a time interval.
- [[tiempo]] | t | time | Interval during which thermal conduction occurs.
- [[potencia_termica]] | \dot{Q} | thermal power | Amount of heat transferred per unit time.
- [[flujo_calor]] | q | heat flux | Thermal power transferred per unit area.
- [[conductividad_termica]] | k | thermal conductivity | Material property measuring how easily it conducts heat.
- [[area]] | A | cross-sectional area | Surface crossed by heat during conduction.
- [[espesor]] | L | thickness | Distance heat travels between the two faces of the material.
- [[temperatura_caliente]] | T_{c} | hot-side temperature | Temperature of the face or region with higher temperature.
- [[temperatura_fria]] | T_{f} | cold-side temperature | Temperature of the face or region with lower temperature.
- [[diferencia_temperatura]] | \Delta T | temperature difference | Thermal separation between the hot side and the cold side.
- [[gradiente_temperatura]] | \frac{\Delta T}{L} | temperature gradient | Temperature change per unit length along the conduction direction.
- [[resistencia_termica]] | R_{th} | thermal resistance | Geometric and material opposition to heat transfer by conduction.

Available formulas. Use exactly these references when a formula is needed:
- {{f:diferencia_temperatura}} | Temperature difference between faces | Measures the thermal separation driving conduction between two regions.
- {{f:gradiente_temperatura_1d}} | Mean one-dimensional thermal gradient | Expresses how much temperature changes per meter of material.
- {{f:ley_fourier_conduccion_1d}} | Fourier law for steady plane conduction | Conducted power increases with conductivity, area and thermal difference, and decreases with thickness.
- {{f:flujo_calor_conduccion}} | Conductive heat flux | Measures the conducted power per unit area.
- {{f:flujo_potencia_area}} | Relation between heat flux, power and area | Converts total thermal power into transfer intensity per unit area.
- {{f:calor_potencia_tiempo}} | Transferred heat from thermal power | Calculates total transferred thermal energy when thermal power remains constant.
- {{f:resistencia_termica_conduccion}} | Thermal resistance of a plane wall | Summarizes opposition to heat transfer due to material and geometry.
- {{f:potencia_resistencia_termica}} | Thermal power using thermal resistance | Calculates conducted power using the equivalent thermal opposition of the system.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Exam-type example
## Problem statement
## Data
## System definition
## Physical model
## Model justification
## Symbolic solution
## Numerical substitution
## Dimensional validation
## Physical interpretation
# Real-world example
## Context
## Physical estimation
## Interpretation

Content contract:
- Total length: at least 800 words.
- Exam-type example: complete problem with data, system definition, model, symbolic solution, numerical substitution, dimensional validation, and physical interpretation.
- Data section: use ':' for listed data; avoid `[[id]] = value` patterns.
- System definition and model justification: each should be substantial and physically specific.
- Symbolic solution: use all relevant {{f:id}} formula references on their own lines and explain each step.
- Dimensional validation: check the dimensions explicitly.
- Real-world example: realistic context, approximate numerical estimate, and physical reading.
- Use values and units that are plausible for the physics domain.

================================================================================
CONTRACT FOR aplicaciones.md
================================================================================
# PROMPT MD | aplicaciones.md

Generate `aplicaciones.md` for the Phyxio leaf `conduccion`.
Language: español.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Conduccion
- Central physical question: ¿Cómo se transfiere energía térmica por conducción entre regiones a distinta temperatura?
- Short description: Transferencia de energía térmica por contacto dentro de un material o entre cuerpos.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[calor_transferido]] | Q | calor transferido | Energía térmica que atraviesa el material durante un intervalo de tiempo.
- [[tiempo]] | t | tiempo | Intervalo durante el cual se produce la conducción térmica.
- [[potencia_termica]] | \dot{Q} | potencia térmica | Cantidad de calor transferida por unidad de tiempo.
- [[flujo_calor]] | q | flujo de calor | Potencia térmica transferida por unidad de área.
- [[conductividad_termica]] | k | conductividad térmica | Propiedad del material que mide su facilidad para conducir calor.
- [[area]] | A | área transversal | Superficie atravesada por el calor durante la conducción.
- [[espesor]] | L | espesor | Distancia que recorre el calor entre las dos caras del material.
- [[temperatura_caliente]] | T_{c} | temperatura caliente | Temperatura de la cara o región de mayor temperatura.
- [[temperatura_fria]] | T_{f} | temperatura fría | Temperatura de la cara o región de menor temperatura.
- [[diferencia_temperatura]] | \Delta T | diferencia de temperatura | Separación térmica entre la cara caliente y la cara fría.
- [[gradiente_temperatura]] | \frac{\Delta T}{L} | gradiente de temperatura | Cambio de temperatura por unidad de longitud en la dirección de conducción.
- [[resistencia_termica]] | R_{th} | resistencia térmica | Oposición geométrica y material al paso del calor por conducción.

Available formulas. Use exactly these references when a formula is needed:
- {{f:diferencia_temperatura}} | Diferencia de temperatura entre caras | Mide la separación térmica que impulsa la conducción entre dos regiones.
- {{f:gradiente_temperatura_1d}} | Gradiente térmico medio en una dimensión | Expresa cuánto cambia la temperatura por cada metro de material.
- {{f:ley_fourier_conduccion_1d}} | Ley de Fourier para conducción plana estacionaria | La potencia conducida aumenta con conductividad, área y diferencia térmica, y disminuye con el espesor.
- {{f:flujo_calor_conduccion}} | Flujo de calor por conducción | Mide la potencia conducida por unidad de área.
- {{f:flujo_potencia_area}} | Relación entre flujo de calor, potencia y área | Convierte potencia térmica total en intensidad de transferencia por unidad de área.
- {{f:calor_potencia_tiempo}} | Calor transferido a partir de potencia térmica | Calcula la energía térmica total transferida cuando la potencia térmica se mantiene constante.
- {{f:resistencia_termica_conduccion}} | Resistencia térmica de una pared plana | Resume la oposición al paso del calor debida al material y a la geometría.
- {{f:potencia_resistencia_termica}} | Potencia térmica mediante resistencia térmica | Calcula la potencia conducida usando la oposición térmica equivalente del sistema.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required structure:
# Aplicaciones
## 1. ...
## 2. ...
## 3. ...
## 4. ...
## 5. ...

For each of the 5 applications include these marker lines exactly:
Variable dominante: [[id]]
Límite de validez: concrete condition, range, or inequality

Content contract:
- Total length: at least 800 words, about 160+ words per application.
- Applications must cover different contexts, not five versions of the same case.
- Each application must explain what is measured, predicted, or constrained.
- Mention relevant magnitudes with [[id]] and avoid unsupported formula ids.

================================================================================
CONTRACT FOR aplicaciones.en.md
================================================================================
# PROMPT MD | aplicaciones.en.md

Generate `aplicaciones.en.md` for the Phyxio leaf `conduccion`.
Language: English.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Conduction
- Central physical question: How is thermal energy transferred by conduction between regions at different temperatures?
- Short description: Thermal energy transfer by contact within a material or between bodies.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[calor_transferido]] | Q | transferred heat | Thermal energy crossing the material during a time interval.
- [[tiempo]] | t | time | Interval during which thermal conduction occurs.
- [[potencia_termica]] | \dot{Q} | thermal power | Amount of heat transferred per unit time.
- [[flujo_calor]] | q | heat flux | Thermal power transferred per unit area.
- [[conductividad_termica]] | k | thermal conductivity | Material property measuring how easily it conducts heat.
- [[area]] | A | cross-sectional area | Surface crossed by heat during conduction.
- [[espesor]] | L | thickness | Distance heat travels between the two faces of the material.
- [[temperatura_caliente]] | T_{c} | hot-side temperature | Temperature of the face or region with higher temperature.
- [[temperatura_fria]] | T_{f} | cold-side temperature | Temperature of the face or region with lower temperature.
- [[diferencia_temperatura]] | \Delta T | temperature difference | Thermal separation between the hot side and the cold side.
- [[gradiente_temperatura]] | \frac{\Delta T}{L} | temperature gradient | Temperature change per unit length along the conduction direction.
- [[resistencia_termica]] | R_{th} | thermal resistance | Geometric and material opposition to heat transfer by conduction.

Available formulas. Use exactly these references when a formula is needed:
- {{f:diferencia_temperatura}} | Temperature difference between faces | Measures the thermal separation driving conduction between two regions.
- {{f:gradiente_temperatura_1d}} | Mean one-dimensional thermal gradient | Expresses how much temperature changes per meter of material.
- {{f:ley_fourier_conduccion_1d}} | Fourier law for steady plane conduction | Conducted power increases with conductivity, area and thermal difference, and decreases with thickness.
- {{f:flujo_calor_conduccion}} | Conductive heat flux | Measures the conducted power per unit area.
- {{f:flujo_potencia_area}} | Relation between heat flux, power and area | Converts total thermal power into transfer intensity per unit area.
- {{f:calor_potencia_tiempo}} | Transferred heat from thermal power | Calculates total transferred thermal energy when thermal power remains constant.
- {{f:resistencia_termica_conduccion}} | Thermal resistance of a plane wall | Summarizes opposition to heat transfer due to material and geometry.
- {{f:potencia_resistencia_termica}} | Thermal power using thermal resistance | Calculates conducted power using the equivalent thermal opposition of the system.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required structure:
# Applications
## 1. ...
## 2. ...
## 3. ...
## 4. ...
## 5. ...

For each of the 5 applications include these marker lines exactly:
Dominant variable: [[id]]
Validity limit: concrete condition, range, or inequality

Content contract:
- Total length: at least 800 words, about 160+ words per application.
- Applications must cover different contexts, not five versions of the same case.
- Each application must explain what is measured, predicted, or constrained.
- Mention relevant magnitudes with [[id]] and avoid unsupported formula ids.

================================================================================
CONTRACT FOR historia.md
================================================================================
# PROMPT MD | historia.md

Generate `historia.md` for the Phyxio leaf `conduccion`.
Language: español.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Conduccion
- Central physical question: ¿Cómo se transfiere energía térmica por conducción entre regiones a distinta temperatura?
- Short description: Transferencia de energía térmica por contacto dentro de un material o entre cuerpos.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[calor_transferido]] | Q | calor transferido | Energía térmica que atraviesa el material durante un intervalo de tiempo.
- [[tiempo]] | t | tiempo | Intervalo durante el cual se produce la conducción térmica.
- [[potencia_termica]] | \dot{Q} | potencia térmica | Cantidad de calor transferida por unidad de tiempo.
- [[flujo_calor]] | q | flujo de calor | Potencia térmica transferida por unidad de área.
- [[conductividad_termica]] | k | conductividad térmica | Propiedad del material que mide su facilidad para conducir calor.
- [[area]] | A | área transversal | Superficie atravesada por el calor durante la conducción.
- [[espesor]] | L | espesor | Distancia que recorre el calor entre las dos caras del material.
- [[temperatura_caliente]] | T_{c} | temperatura caliente | Temperatura de la cara o región de mayor temperatura.
- [[temperatura_fria]] | T_{f} | temperatura fría | Temperatura de la cara o región de menor temperatura.
- [[diferencia_temperatura]] | \Delta T | diferencia de temperatura | Separación térmica entre la cara caliente y la cara fría.
- [[gradiente_temperatura]] | \frac{\Delta T}{L} | gradiente de temperatura | Cambio de temperatura por unidad de longitud en la dirección de conducción.
- [[resistencia_termica]] | R_{th} | resistencia térmica | Oposición geométrica y material al paso del calor por conducción.

Available formulas. Use exactly these references when a formula is needed:
- {{f:diferencia_temperatura}} | Diferencia de temperatura entre caras | Mide la separación térmica que impulsa la conducción entre dos regiones.
- {{f:gradiente_temperatura_1d}} | Gradiente térmico medio en una dimensión | Expresa cuánto cambia la temperatura por cada metro de material.
- {{f:ley_fourier_conduccion_1d}} | Ley de Fourier para conducción plana estacionaria | La potencia conducida aumenta con conductividad, área y diferencia térmica, y disminuye con el espesor.
- {{f:flujo_calor_conduccion}} | Flujo de calor por conducción | Mide la potencia conducida por unidad de área.
- {{f:flujo_potencia_area}} | Relación entre flujo de calor, potencia y área | Convierte potencia térmica total en intensidad de transferencia por unidad de área.
- {{f:calor_potencia_tiempo}} | Calor transferido a partir de potencia térmica | Calcula la energía térmica total transferida cuando la potencia térmica se mantiene constante.
- {{f:resistencia_termica_conduccion}} | Resistencia térmica de una pared plana | Resume la oposición al paso del calor debida al material y a la geometría.
- {{f:potencia_resistencia_termica}} | Potencia térmica mediante resistencia térmica | Calcula la potencia conducida usando la oposición térmica equivalente del sistema.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Conduccion
## Problema histórico
## Dificultad conceptual previa
## Qué cambió
## Impacto en la física
## Conexión con física moderna

Content contract:
- Total length: at least 300 words for Spanish and at least 250 words for English.
- This is not a chronology list. Explain the historical problem, the conceptual obstacle, what changed, and why it mattered.
- Connect the history back to the modern physical interpretation of this leaf.

================================================================================
CONTRACT FOR historia.en.md
================================================================================
# PROMPT MD | historia.en.md

Generate `historia.en.md` for the Phyxio leaf `conduccion`.
Language: English.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Conduction
- Central physical question: How is thermal energy transferred by conduction between regions at different temperatures?
- Short description: Thermal energy transfer by contact within a material or between bodies.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[calor_transferido]] | Q | transferred heat | Thermal energy crossing the material during a time interval.
- [[tiempo]] | t | time | Interval during which thermal conduction occurs.
- [[potencia_termica]] | \dot{Q} | thermal power | Amount of heat transferred per unit time.
- [[flujo_calor]] | q | heat flux | Thermal power transferred per unit area.
- [[conductividad_termica]] | k | thermal conductivity | Material property measuring how easily it conducts heat.
- [[area]] | A | cross-sectional area | Surface crossed by heat during conduction.
- [[espesor]] | L | thickness | Distance heat travels between the two faces of the material.
- [[temperatura_caliente]] | T_{c} | hot-side temperature | Temperature of the face or region with higher temperature.
- [[temperatura_fria]] | T_{f} | cold-side temperature | Temperature of the face or region with lower temperature.
- [[diferencia_temperatura]] | \Delta T | temperature difference | Thermal separation between the hot side and the cold side.
- [[gradiente_temperatura]] | \frac{\Delta T}{L} | temperature gradient | Temperature change per unit length along the conduction direction.
- [[resistencia_termica]] | R_{th} | thermal resistance | Geometric and material opposition to heat transfer by conduction.

Available formulas. Use exactly these references when a formula is needed:
- {{f:diferencia_temperatura}} | Temperature difference between faces | Measures the thermal separation driving conduction between two regions.
- {{f:gradiente_temperatura_1d}} | Mean one-dimensional thermal gradient | Expresses how much temperature changes per meter of material.
- {{f:ley_fourier_conduccion_1d}} | Fourier law for steady plane conduction | Conducted power increases with conductivity, area and thermal difference, and decreases with thickness.
- {{f:flujo_calor_conduccion}} | Conductive heat flux | Measures the conducted power per unit area.
- {{f:flujo_potencia_area}} | Relation between heat flux, power and area | Converts total thermal power into transfer intensity per unit area.
- {{f:calor_potencia_tiempo}} | Transferred heat from thermal power | Calculates total transferred thermal energy when thermal power remains constant.
- {{f:resistencia_termica_conduccion}} | Thermal resistance of a plane wall | Summarizes opposition to heat transfer due to material and geometry.
- {{f:potencia_resistencia_termica}} | Thermal power using thermal resistance | Calculates conducted power using the equivalent thermal opposition of the system.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Conduction
## Historical problem
## Prior conceptual difficulty
## What changed
## Impact on physics
## Connection with modern physics

Content contract:
- Total length: at least 300 words for Spanish and at least 250 words for English.
- This is not a chronology list. Explain the historical problem, the conceptual obstacle, what changed, and why it mattered.
- Connect the history back to the modern physical interpretation of this leaf.

================================================================================
FINAL DELIVERABLE
================================================================================

Return only the downloadable file `conduccion_md.zip`.
The ZIP must contain these files at root level:
- teoria.md
- teoria.en.md
- modelos.md
- modelos.en.md
- errores.md
- errores.en.md
- ejemplos.md
- ejemplos.en.md
- aplicaciones.md
- aplicaciones.en.md
- historia.md
- historia.en.md

Do not print the file contents in the chat.
