# PROMPT MAESTRO MD | ZIP DESCARGABLE CON 12 ARCHIVOS MARKDOWN

Leaf ID: oscilador-armonico-estadistico

You must create a downloadable ZIP file named `oscilador-armonico-estadistico_md.zip`.
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

Critical validator gates that must pass:
- In `teoria.md`, count words before packaging: `## 🟢 Nivel esencial` must have 120-150 words, `## 🔵 Nivel formal` 190-260 words, and `## 🔴 Nivel estructural` 350-400 words. Rewrite any section outside those ranges.
- In `ejemplos.en.md`, `## Physical interpretation` must be at least 90 words and include causal physics markers such as means, indicates, this implies, therefore, depends, physically.
- In `ejemplos.en.md`, `## Physical estimation` must be at least 90 words and include quantitative-estimation markers such as order, estimate, approximate, scale, magnitude, reasonable value.

================================================================================
CONTRACT FOR teoria.md
================================================================================
# PROMPT MD | teoria.md

Generate `teoria.md` for the Phyxio leaf `oscilador-armonico-estadistico`.
Language: español.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Oscilador armonico estadistico
- Central physical question: ¿Cómo depende la energía media de un oscilador armónico estadístico de la temperatura y de la frecuencia angular?
- Short description: Modelo que conecta energía térmica, frecuencia y ocupación de un oscilador armónico.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[energia_media]] | ⟨E⟩ | energía media | Energía esperada del oscilador en equilibrio térmico.
- [[temperatura]] | T | temperatura | Temperatura absoluta del baño térmico acoplado al oscilador.
- [[frecuencia_angular]] | ω | frecuencia angular | Parámetro que fija la rigidez dinámica y la separación entre niveles energéticos.
- [[constante_boltzmann]] | k_B | constante de Boltzmann | Constante que convierte temperatura absoluta en escala energética térmica.
- [[hbar]] | ℏ | constante de Planck reducida | Constante cuántica que relaciona frecuencia angular con separación energética.
- [[beta]] | β | beta termodinámica | Inversa de la energía térmica kBT usada en factores de Boltzmann.
- [[funcion_particion]] | Z | función de partición | Suma estadística adimensional que normaliza pesos de Boltzmann.
- [[numero_cuantico]] | n | número cuántico | Índice entero que etiqueta los niveles excitados del oscilador.
- [[probabilidad_ocupacion]] | P_n | probabilidad de ocupación | Probabilidad de encontrar el oscilador en el nivel n.
- [[energia_cuantica]] | ε | cuanto de energía | Separación energética entre niveles consecutivos del oscilador.

Available formulas. Use exactly these references when a formula is needed:
- {{f:energia_media_cuantica}} | Energía media cuántica | Da la energía media de un oscilador armónico en equilibrio térmico, incluyendo energía de punto cero y excitaciones.
- {{f:limite_clasico_equiparticion}} | Límite clásico por equipartición | En el régimen clásico, la energía media total suma dos contribuciones cuadráticas de medio kBT.
- {{f:beta_inversa_termica}} | Beta termodinámica | Define la escala inversa de energía térmica que pondera los niveles del oscilador.
- {{f:funcion_particion_cuantica}} | Función de partición cuántica | Resume la contribución estadística de todos los niveles energéticos del oscilador.
- {{f:probabilidad_ocupacion_n}} | Probabilidad de ocupación del nivel n | Expresa cómo se reparte la población térmica entre niveles separados por hbar por frecuencia angular.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Oscilador armonico estadistico
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
- Respect the template's orientative maximums by section; do not inflate sections with filler.
- Conceptual context: up to about 120 words.
- Essential level: intuitive explanation; no equations with =, <, > or algebraic derivations; HARD RANGE 120-150 words. Do not exceed 150 words.
- Formal level: define the mathematical relations using the available {{f:id}} references; include all core formulas; HARD RANGE 190-260 words.
- Structural level: assumptions, invariants, limits, and model breakdown; no new formulas; HARD RANGE 350-400 words. Never deliver fewer than 350 words.
- Deep physical interpretation: up to about 180 words.
- Order of magnitude: up to about 100 words.
- Personalized resolution method: up to about 150 words.
- Special cases and extended example: up to about 200 words.
- Real student questions: up to about 200 words.
- Cross-cutting connections and study paths: up to about 100 words.
- Final synthesis: up to about 80 words.
- Mandatory cognitive-load self-check before finalizing teoria.md: Essential must be 120-150 words, Formal 190-260 words, Structural 350-400 words. If any count is outside the range, rewrite that section before delivering.
- The Structural level must be at least 2.3 times as long as the Essential level and must contain explicit assumptions, validity limits, boundary cases, invariants, failure conditions, and links to the graph/model reading.
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

Generate `teoria.en.md` for the Phyxio leaf `oscilador-armonico-estadistico`.
Language: English.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Statistical Harmonic Oscillator
- Central physical question: How does the mean energy of a statistical harmonic oscillator depend on temperature and angular frequency?
- Short description: Model linking thermal energy, frequency, and occupation of a harmonic oscillator.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[energia_media]] | ⟨E⟩ | mean energy | Expected energy of the oscillator in thermal equilibrium.
- [[temperatura]] | T | temperature | Absolute temperature of the heat bath coupled to the oscillator.
- [[frecuencia_angular]] | ω | angular frequency | Parameter fixing dynamical stiffness and spacing between energy levels.
- [[constante_boltzmann]] | k_B | Boltzmann constant | Constant converting absolute temperature into thermal energy scale.
- [[hbar]] | ℏ | reduced Planck constant | Quantum constant relating angular frequency to energy spacing.
- [[beta]] | β | thermodynamic beta | Inverse of thermal energy kBT used in Boltzmann factors.
- [[funcion_particion]] | Z | partition function | Dimensionless statistical sum normalizing Boltzmann weights.
- [[numero_cuantico]] | n | quantum number | Integer index labeling excited levels of the oscillator.
- [[probabilidad_ocupacion]] | P_n | occupation probability | Probability of finding the oscillator in level n.
- [[energia_cuantica]] | ε | energy quantum | Energy spacing between consecutive oscillator levels.

Available formulas. Use exactly these references when a formula is needed:
- {{f:energia_media_cuantica}} | Quantum mean energy | Gives the mean energy of a harmonic oscillator in thermal equilibrium, including zero-point energy and excitations.
- {{f:limite_clasico_equiparticion}} | Classical equipartition limit | In the classical regime, total mean energy adds two quadratic half-kBT contributions.
- {{f:beta_inversa_termica}} | Thermodynamic beta | Defines the inverse thermal energy scale that weights oscillator levels.
- {{f:funcion_particion_cuantica}} | Quantum partition function | Summarizes the statistical contribution of all oscillator energy levels.
- {{f:probabilidad_ocupacion_n}} | Occupation probability of level n | Expresses how thermal population is distributed among levels spaced by hbar times angular frequency.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Statistical Harmonic Oscillator
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
- Respect the template's orientative maximums by section; do not inflate sections with filler.
- Conceptual context: up to about 120 words.
- Essential level: intuitive explanation; no equations with =, <, > or algebraic derivations; HARD RANGE 120-150 words. Do not exceed 150 words.
- Formal level: define the mathematical relations using the available {{f:id}} references; include all core formulas; HARD RANGE 190-260 words.
- Structural level: assumptions, invariants, limits, and model breakdown; no new formulas; HARD RANGE 350-400 words. Never deliver fewer than 350 words.
- Deep physical interpretation: up to about 180 words.
- Order of magnitude: up to about 100 words.
- Personalized resolution method: up to about 150 words.
- Special cases and extended example: up to about 200 words.
- Real student questions: up to about 200 words.
- Cross-cutting connections and study paths: up to about 100 words.
- Final synthesis: up to about 80 words.
- Mandatory cognitive-load self-check before finalizing teoria.md: Essential must be 120-150 words, Formal 190-260 words, Structural 350-400 words. If any count is outside the range, rewrite that section before delivering.
- The Structural level must be at least 2.3 times as long as the Essential level and must contain explicit assumptions, validity limits, boundary cases, invariants, failure conditions, and links to the graph/model reading.
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

Generate `modelos.md` for the Phyxio leaf `oscilador-armonico-estadistico`.
Language: español.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Oscilador armonico estadistico
- Central physical question: ¿Cómo depende la energía media de un oscilador armónico estadístico de la temperatura y de la frecuencia angular?
- Short description: Modelo que conecta energía térmica, frecuencia y ocupación de un oscilador armónico.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[energia_media]] | ⟨E⟩ | energía media | Energía esperada del oscilador en equilibrio térmico.
- [[temperatura]] | T | temperatura | Temperatura absoluta del baño térmico acoplado al oscilador.
- [[frecuencia_angular]] | ω | frecuencia angular | Parámetro que fija la rigidez dinámica y la separación entre niveles energéticos.
- [[constante_boltzmann]] | k_B | constante de Boltzmann | Constante que convierte temperatura absoluta en escala energética térmica.
- [[hbar]] | ℏ | constante de Planck reducida | Constante cuántica que relaciona frecuencia angular con separación energética.
- [[beta]] | β | beta termodinámica | Inversa de la energía térmica kBT usada en factores de Boltzmann.
- [[funcion_particion]] | Z | función de partición | Suma estadística adimensional que normaliza pesos de Boltzmann.
- [[numero_cuantico]] | n | número cuántico | Índice entero que etiqueta los niveles excitados del oscilador.
- [[probabilidad_ocupacion]] | P_n | probabilidad de ocupación | Probabilidad de encontrar el oscilador en el nivel n.
- [[energia_cuantica]] | ε | cuanto de energía | Separación energética entre niveles consecutivos del oscilador.

Available formulas. Use exactly these references when a formula is needed:
- {{f:energia_media_cuantica}} | Energía media cuántica | Da la energía media de un oscilador armónico en equilibrio térmico, incluyendo energía de punto cero y excitaciones.
- {{f:limite_clasico_equiparticion}} | Límite clásico por equipartición | En el régimen clásico, la energía media total suma dos contribuciones cuadráticas de medio kBT.
- {{f:beta_inversa_termica}} | Beta termodinámica | Define la escala inversa de energía térmica que pondera los niveles del oscilador.
- {{f:funcion_particion_cuantica}} | Función de partición cuántica | Resume la contribución estadística de todos los niveles energéticos del oscilador.
- {{f:probabilidad_ocupacion_n}} | Probabilidad de ocupación del nivel n | Expresa cómo se reparte la población térmica entre niveles separados por hbar por frecuencia angular.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Oscilador armonico estadistico
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

Generate `modelos.en.md` for the Phyxio leaf `oscilador-armonico-estadistico`.
Language: English.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Statistical Harmonic Oscillator
- Central physical question: How does the mean energy of a statistical harmonic oscillator depend on temperature and angular frequency?
- Short description: Model linking thermal energy, frequency, and occupation of a harmonic oscillator.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[energia_media]] | ⟨E⟩ | mean energy | Expected energy of the oscillator in thermal equilibrium.
- [[temperatura]] | T | temperature | Absolute temperature of the heat bath coupled to the oscillator.
- [[frecuencia_angular]] | ω | angular frequency | Parameter fixing dynamical stiffness and spacing between energy levels.
- [[constante_boltzmann]] | k_B | Boltzmann constant | Constant converting absolute temperature into thermal energy scale.
- [[hbar]] | ℏ | reduced Planck constant | Quantum constant relating angular frequency to energy spacing.
- [[beta]] | β | thermodynamic beta | Inverse of thermal energy kBT used in Boltzmann factors.
- [[funcion_particion]] | Z | partition function | Dimensionless statistical sum normalizing Boltzmann weights.
- [[numero_cuantico]] | n | quantum number | Integer index labeling excited levels of the oscillator.
- [[probabilidad_ocupacion]] | P_n | occupation probability | Probability of finding the oscillator in level n.
- [[energia_cuantica]] | ε | energy quantum | Energy spacing between consecutive oscillator levels.

Available formulas. Use exactly these references when a formula is needed:
- {{f:energia_media_cuantica}} | Quantum mean energy | Gives the mean energy of a harmonic oscillator in thermal equilibrium, including zero-point energy and excitations.
- {{f:limite_clasico_equiparticion}} | Classical equipartition limit | In the classical regime, total mean energy adds two quadratic half-kBT contributions.
- {{f:beta_inversa_termica}} | Thermodynamic beta | Defines the inverse thermal energy scale that weights oscillator levels.
- {{f:funcion_particion_cuantica}} | Quantum partition function | Summarizes the statistical contribution of all oscillator energy levels.
- {{f:probabilidad_ocupacion_n}} | Occupation probability of level n | Expresses how thermal population is distributed among levels spaced by hbar times angular frequency.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Statistical Harmonic Oscillator
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

Generate `errores.md` for the Phyxio leaf `oscilador-armonico-estadistico`.
Language: español.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Oscilador armonico estadistico
- Central physical question: ¿Cómo depende la energía media de un oscilador armónico estadístico de la temperatura y de la frecuencia angular?
- Short description: Modelo que conecta energía térmica, frecuencia y ocupación de un oscilador armónico.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[energia_media]] | ⟨E⟩ | energía media | Energía esperada del oscilador en equilibrio térmico.
- [[temperatura]] | T | temperatura | Temperatura absoluta del baño térmico acoplado al oscilador.
- [[frecuencia_angular]] | ω | frecuencia angular | Parámetro que fija la rigidez dinámica y la separación entre niveles energéticos.
- [[constante_boltzmann]] | k_B | constante de Boltzmann | Constante que convierte temperatura absoluta en escala energética térmica.
- [[hbar]] | ℏ | constante de Planck reducida | Constante cuántica que relaciona frecuencia angular con separación energética.
- [[beta]] | β | beta termodinámica | Inversa de la energía térmica kBT usada en factores de Boltzmann.
- [[funcion_particion]] | Z | función de partición | Suma estadística adimensional que normaliza pesos de Boltzmann.
- [[numero_cuantico]] | n | número cuántico | Índice entero que etiqueta los niveles excitados del oscilador.
- [[probabilidad_ocupacion]] | P_n | probabilidad de ocupación | Probabilidad de encontrar el oscilador en el nivel n.
- [[energia_cuantica]] | ε | cuanto de energía | Separación energética entre niveles consecutivos del oscilador.

Available formulas. Use exactly these references when a formula is needed:
- {{f:energia_media_cuantica}} | Energía media cuántica | Da la energía media de un oscilador armónico en equilibrio térmico, incluyendo energía de punto cero y excitaciones.
- {{f:limite_clasico_equiparticion}} | Límite clásico por equipartición | En el régimen clásico, la energía media total suma dos contribuciones cuadráticas de medio kBT.
- {{f:beta_inversa_termica}} | Beta termodinámica | Define la escala inversa de energía térmica que pondera los niveles del oscilador.
- {{f:funcion_particion_cuantica}} | Función de partición cuántica | Resume la contribución estadística de todos los niveles energéticos del oscilador.
- {{f:probabilidad_ocupacion_n}} | Probabilidad de ocupación del nivel n | Expresa cómo se reparte la población térmica entre niveles separados por hbar por frecuencia angular.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Oscilador armonico estadistico
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

Generate `errores.en.md` for the Phyxio leaf `oscilador-armonico-estadistico`.
Language: English.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Statistical Harmonic Oscillator
- Central physical question: How does the mean energy of a statistical harmonic oscillator depend on temperature and angular frequency?
- Short description: Model linking thermal energy, frequency, and occupation of a harmonic oscillator.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[energia_media]] | ⟨E⟩ | mean energy | Expected energy of the oscillator in thermal equilibrium.
- [[temperatura]] | T | temperature | Absolute temperature of the heat bath coupled to the oscillator.
- [[frecuencia_angular]] | ω | angular frequency | Parameter fixing dynamical stiffness and spacing between energy levels.
- [[constante_boltzmann]] | k_B | Boltzmann constant | Constant converting absolute temperature into thermal energy scale.
- [[hbar]] | ℏ | reduced Planck constant | Quantum constant relating angular frequency to energy spacing.
- [[beta]] | β | thermodynamic beta | Inverse of thermal energy kBT used in Boltzmann factors.
- [[funcion_particion]] | Z | partition function | Dimensionless statistical sum normalizing Boltzmann weights.
- [[numero_cuantico]] | n | quantum number | Integer index labeling excited levels of the oscillator.
- [[probabilidad_ocupacion]] | P_n | occupation probability | Probability of finding the oscillator in level n.
- [[energia_cuantica]] | ε | energy quantum | Energy spacing between consecutive oscillator levels.

Available formulas. Use exactly these references when a formula is needed:
- {{f:energia_media_cuantica}} | Quantum mean energy | Gives the mean energy of a harmonic oscillator in thermal equilibrium, including zero-point energy and excitations.
- {{f:limite_clasico_equiparticion}} | Classical equipartition limit | In the classical regime, total mean energy adds two quadratic half-kBT contributions.
- {{f:beta_inversa_termica}} | Thermodynamic beta | Defines the inverse thermal energy scale that weights oscillator levels.
- {{f:funcion_particion_cuantica}} | Quantum partition function | Summarizes the statistical contribution of all oscillator energy levels.
- {{f:probabilidad_ocupacion_n}} | Occupation probability of level n | Expresses how thermal population is distributed among levels spaced by hbar times angular frequency.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Statistical Harmonic Oscillator
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

Generate `ejemplos.md` for the Phyxio leaf `oscilador-armonico-estadistico`.
Language: español.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Oscilador armonico estadistico
- Central physical question: ¿Cómo depende la energía media de un oscilador armónico estadístico de la temperatura y de la frecuencia angular?
- Short description: Modelo que conecta energía térmica, frecuencia y ocupación de un oscilador armónico.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[energia_media]] | ⟨E⟩ | energía media | Energía esperada del oscilador en equilibrio térmico.
- [[temperatura]] | T | temperatura | Temperatura absoluta del baño térmico acoplado al oscilador.
- [[frecuencia_angular]] | ω | frecuencia angular | Parámetro que fija la rigidez dinámica y la separación entre niveles energéticos.
- [[constante_boltzmann]] | k_B | constante de Boltzmann | Constante que convierte temperatura absoluta en escala energética térmica.
- [[hbar]] | ℏ | constante de Planck reducida | Constante cuántica que relaciona frecuencia angular con separación energética.
- [[beta]] | β | beta termodinámica | Inversa de la energía térmica kBT usada en factores de Boltzmann.
- [[funcion_particion]] | Z | función de partición | Suma estadística adimensional que normaliza pesos de Boltzmann.
- [[numero_cuantico]] | n | número cuántico | Índice entero que etiqueta los niveles excitados del oscilador.
- [[probabilidad_ocupacion]] | P_n | probabilidad de ocupación | Probabilidad de encontrar el oscilador en el nivel n.
- [[energia_cuantica]] | ε | cuanto de energía | Separación energética entre niveles consecutivos del oscilador.

Available formulas. Use exactly these references when a formula is needed:
- {{f:energia_media_cuantica}} | Energía media cuántica | Da la energía media de un oscilador armónico en equilibrio térmico, incluyendo energía de punto cero y excitaciones.
- {{f:limite_clasico_equiparticion}} | Límite clásico por equipartición | En el régimen clásico, la energía media total suma dos contribuciones cuadráticas de medio kBT.
- {{f:beta_inversa_termica}} | Beta termodinámica | Define la escala inversa de energía térmica que pondera los niveles del oscilador.
- {{f:funcion_particion_cuantica}} | Función de partición cuántica | Resume la contribución estadística de todos los niveles energéticos del oscilador.
- {{f:probabilidad_ocupacion_n}} | Probabilidad de ocupación del nivel n | Expresa cómo se reparte la población térmica entre niveles separados por hbar por frecuencia angular.

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
- Physical interpretation must be substantial: at least 90 words in Spanish or 90 words in English. It must include at least three of these exact English marker words when writing English: means, indicates, this implies, therefore, increases, decreases, depends, physically.
- Physical estimation must be substantial: at least 80 words in Spanish or 90 words in English. It must include at least three of these exact English marker words when writing English: order, estimate, approximate, scale, magnitude, reasonable value.
- Real-world example: realistic context, approximate numerical estimate, and physical reading.
- For English files, do not shorten the interpretation or estimation sections; they must be semantically as strong as the Spanish version.
- Use values and units that are plausible for the physics domain.
- Mandatory English example self-check: before finalizing ejemplos.en.md, verify that `## Physical interpretation` contains causal physics marker words and that `## Physical estimation` contains quantitative-estimation marker words. If not, rewrite those sections.

================================================================================
CONTRACT FOR ejemplos.en.md
================================================================================
# PROMPT MD | ejemplos.en.md

Generate `ejemplos.en.md` for the Phyxio leaf `oscilador-armonico-estadistico`.
Language: English.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Statistical Harmonic Oscillator
- Central physical question: How does the mean energy of a statistical harmonic oscillator depend on temperature and angular frequency?
- Short description: Model linking thermal energy, frequency, and occupation of a harmonic oscillator.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[energia_media]] | ⟨E⟩ | mean energy | Expected energy of the oscillator in thermal equilibrium.
- [[temperatura]] | T | temperature | Absolute temperature of the heat bath coupled to the oscillator.
- [[frecuencia_angular]] | ω | angular frequency | Parameter fixing dynamical stiffness and spacing between energy levels.
- [[constante_boltzmann]] | k_B | Boltzmann constant | Constant converting absolute temperature into thermal energy scale.
- [[hbar]] | ℏ | reduced Planck constant | Quantum constant relating angular frequency to energy spacing.
- [[beta]] | β | thermodynamic beta | Inverse of thermal energy kBT used in Boltzmann factors.
- [[funcion_particion]] | Z | partition function | Dimensionless statistical sum normalizing Boltzmann weights.
- [[numero_cuantico]] | n | quantum number | Integer index labeling excited levels of the oscillator.
- [[probabilidad_ocupacion]] | P_n | occupation probability | Probability of finding the oscillator in level n.
- [[energia_cuantica]] | ε | energy quantum | Energy spacing between consecutive oscillator levels.

Available formulas. Use exactly these references when a formula is needed:
- {{f:energia_media_cuantica}} | Quantum mean energy | Gives the mean energy of a harmonic oscillator in thermal equilibrium, including zero-point energy and excitations.
- {{f:limite_clasico_equiparticion}} | Classical equipartition limit | In the classical regime, total mean energy adds two quadratic half-kBT contributions.
- {{f:beta_inversa_termica}} | Thermodynamic beta | Defines the inverse thermal energy scale that weights oscillator levels.
- {{f:funcion_particion_cuantica}} | Quantum partition function | Summarizes the statistical contribution of all oscillator energy levels.
- {{f:probabilidad_ocupacion_n}} | Occupation probability of level n | Expresses how thermal population is distributed among levels spaced by hbar times angular frequency.

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
- Physical interpretation must be substantial: at least 90 words in Spanish or 90 words in English. It must include at least three of these exact English marker words when writing English: means, indicates, this implies, therefore, increases, decreases, depends, physically.
- Physical estimation must be substantial: at least 80 words in Spanish or 90 words in English. It must include at least three of these exact English marker words when writing English: order, estimate, approximate, scale, magnitude, reasonable value.
- Real-world example: realistic context, approximate numerical estimate, and physical reading.
- For English files, do not shorten the interpretation or estimation sections; they must be semantically as strong as the Spanish version.
- Use values and units that are plausible for the physics domain.
- Mandatory English example self-check: before finalizing ejemplos.en.md, verify that `## Physical interpretation` contains causal physics marker words and that `## Physical estimation` contains quantitative-estimation marker words. If not, rewrite those sections.

================================================================================
CONTRACT FOR aplicaciones.md
================================================================================
# PROMPT MD | aplicaciones.md

Generate `aplicaciones.md` for the Phyxio leaf `oscilador-armonico-estadistico`.
Language: español.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Oscilador armonico estadistico
- Central physical question: ¿Cómo depende la energía media de un oscilador armónico estadístico de la temperatura y de la frecuencia angular?
- Short description: Modelo que conecta energía térmica, frecuencia y ocupación de un oscilador armónico.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[energia_media]] | ⟨E⟩ | energía media | Energía esperada del oscilador en equilibrio térmico.
- [[temperatura]] | T | temperatura | Temperatura absoluta del baño térmico acoplado al oscilador.
- [[frecuencia_angular]] | ω | frecuencia angular | Parámetro que fija la rigidez dinámica y la separación entre niveles energéticos.
- [[constante_boltzmann]] | k_B | constante de Boltzmann | Constante que convierte temperatura absoluta en escala energética térmica.
- [[hbar]] | ℏ | constante de Planck reducida | Constante cuántica que relaciona frecuencia angular con separación energética.
- [[beta]] | β | beta termodinámica | Inversa de la energía térmica kBT usada en factores de Boltzmann.
- [[funcion_particion]] | Z | función de partición | Suma estadística adimensional que normaliza pesos de Boltzmann.
- [[numero_cuantico]] | n | número cuántico | Índice entero que etiqueta los niveles excitados del oscilador.
- [[probabilidad_ocupacion]] | P_n | probabilidad de ocupación | Probabilidad de encontrar el oscilador en el nivel n.
- [[energia_cuantica]] | ε | cuanto de energía | Separación energética entre niveles consecutivos del oscilador.

Available formulas. Use exactly these references when a formula is needed:
- {{f:energia_media_cuantica}} | Energía media cuántica | Da la energía media de un oscilador armónico en equilibrio térmico, incluyendo energía de punto cero y excitaciones.
- {{f:limite_clasico_equiparticion}} | Límite clásico por equipartición | En el régimen clásico, la energía media total suma dos contribuciones cuadráticas de medio kBT.
- {{f:beta_inversa_termica}} | Beta termodinámica | Define la escala inversa de energía térmica que pondera los niveles del oscilador.
- {{f:funcion_particion_cuantica}} | Función de partición cuántica | Resume la contribución estadística de todos los niveles energéticos del oscilador.
- {{f:probabilidad_ocupacion_n}} | Probabilidad de ocupación del nivel n | Expresa cómo se reparte la población térmica entre niveles separados por hbar por frecuencia angular.

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

Generate `aplicaciones.en.md` for the Phyxio leaf `oscilador-armonico-estadistico`.
Language: English.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Statistical Harmonic Oscillator
- Central physical question: How does the mean energy of a statistical harmonic oscillator depend on temperature and angular frequency?
- Short description: Model linking thermal energy, frequency, and occupation of a harmonic oscillator.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[energia_media]] | ⟨E⟩ | mean energy | Expected energy of the oscillator in thermal equilibrium.
- [[temperatura]] | T | temperature | Absolute temperature of the heat bath coupled to the oscillator.
- [[frecuencia_angular]] | ω | angular frequency | Parameter fixing dynamical stiffness and spacing between energy levels.
- [[constante_boltzmann]] | k_B | Boltzmann constant | Constant converting absolute temperature into thermal energy scale.
- [[hbar]] | ℏ | reduced Planck constant | Quantum constant relating angular frequency to energy spacing.
- [[beta]] | β | thermodynamic beta | Inverse of thermal energy kBT used in Boltzmann factors.
- [[funcion_particion]] | Z | partition function | Dimensionless statistical sum normalizing Boltzmann weights.
- [[numero_cuantico]] | n | quantum number | Integer index labeling excited levels of the oscillator.
- [[probabilidad_ocupacion]] | P_n | occupation probability | Probability of finding the oscillator in level n.
- [[energia_cuantica]] | ε | energy quantum | Energy spacing between consecutive oscillator levels.

Available formulas. Use exactly these references when a formula is needed:
- {{f:energia_media_cuantica}} | Quantum mean energy | Gives the mean energy of a harmonic oscillator in thermal equilibrium, including zero-point energy and excitations.
- {{f:limite_clasico_equiparticion}} | Classical equipartition limit | In the classical regime, total mean energy adds two quadratic half-kBT contributions.
- {{f:beta_inversa_termica}} | Thermodynamic beta | Defines the inverse thermal energy scale that weights oscillator levels.
- {{f:funcion_particion_cuantica}} | Quantum partition function | Summarizes the statistical contribution of all oscillator energy levels.
- {{f:probabilidad_ocupacion_n}} | Occupation probability of level n | Expresses how thermal population is distributed among levels spaced by hbar times angular frequency.

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

Generate `historia.md` for the Phyxio leaf `oscilador-armonico-estadistico`.
Language: español.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Oscilador armonico estadistico
- Central physical question: ¿Cómo depende la energía media de un oscilador armónico estadístico de la temperatura y de la frecuencia angular?
- Short description: Modelo que conecta energía térmica, frecuencia y ocupación de un oscilador armónico.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[energia_media]] | ⟨E⟩ | energía media | Energía esperada del oscilador en equilibrio térmico.
- [[temperatura]] | T | temperatura | Temperatura absoluta del baño térmico acoplado al oscilador.
- [[frecuencia_angular]] | ω | frecuencia angular | Parámetro que fija la rigidez dinámica y la separación entre niveles energéticos.
- [[constante_boltzmann]] | k_B | constante de Boltzmann | Constante que convierte temperatura absoluta en escala energética térmica.
- [[hbar]] | ℏ | constante de Planck reducida | Constante cuántica que relaciona frecuencia angular con separación energética.
- [[beta]] | β | beta termodinámica | Inversa de la energía térmica kBT usada en factores de Boltzmann.
- [[funcion_particion]] | Z | función de partición | Suma estadística adimensional que normaliza pesos de Boltzmann.
- [[numero_cuantico]] | n | número cuántico | Índice entero que etiqueta los niveles excitados del oscilador.
- [[probabilidad_ocupacion]] | P_n | probabilidad de ocupación | Probabilidad de encontrar el oscilador en el nivel n.
- [[energia_cuantica]] | ε | cuanto de energía | Separación energética entre niveles consecutivos del oscilador.

Available formulas. Use exactly these references when a formula is needed:
- {{f:energia_media_cuantica}} | Energía media cuántica | Da la energía media de un oscilador armónico en equilibrio térmico, incluyendo energía de punto cero y excitaciones.
- {{f:limite_clasico_equiparticion}} | Límite clásico por equipartición | En el régimen clásico, la energía media total suma dos contribuciones cuadráticas de medio kBT.
- {{f:beta_inversa_termica}} | Beta termodinámica | Define la escala inversa de energía térmica que pondera los niveles del oscilador.
- {{f:funcion_particion_cuantica}} | Función de partición cuántica | Resume la contribución estadística de todos los niveles energéticos del oscilador.
- {{f:probabilidad_ocupacion_n}} | Probabilidad de ocupación del nivel n | Expresa cómo se reparte la población térmica entre niveles separados por hbar por frecuencia angular.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Oscilador armonico estadistico
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

Generate `historia.en.md` for the Phyxio leaf `oscilador-armonico-estadistico`.
Language: English.
Return only the Markdown file content. Do not wrap it in code fences. Do not add explanations.

Physics target:
- Leaf title: Statistical Harmonic Oscillator
- Central physical question: How does the mean energy of a statistical harmonic oscillator depend on temperature and angular frequency?
- Short description: Model linking thermal energy, frequency, and occupation of a harmonic oscillator.

Available magnitudes. Use exactly these ids when tagging quantities:
- [[energia_media]] | ⟨E⟩ | mean energy | Expected energy of the oscillator in thermal equilibrium.
- [[temperatura]] | T | temperature | Absolute temperature of the heat bath coupled to the oscillator.
- [[frecuencia_angular]] | ω | angular frequency | Parameter fixing dynamical stiffness and spacing between energy levels.
- [[constante_boltzmann]] | k_B | Boltzmann constant | Constant converting absolute temperature into thermal energy scale.
- [[hbar]] | ℏ | reduced Planck constant | Quantum constant relating angular frequency to energy spacing.
- [[beta]] | β | thermodynamic beta | Inverse of thermal energy kBT used in Boltzmann factors.
- [[funcion_particion]] | Z | partition function | Dimensionless statistical sum normalizing Boltzmann weights.
- [[numero_cuantico]] | n | quantum number | Integer index labeling excited levels of the oscillator.
- [[probabilidad_ocupacion]] | P_n | occupation probability | Probability of finding the oscillator in level n.
- [[energia_cuantica]] | ε | energy quantum | Energy spacing between consecutive oscillator levels.

Available formulas. Use exactly these references when a formula is needed:
- {{f:energia_media_cuantica}} | Quantum mean energy | Gives the mean energy of a harmonic oscillator in thermal equilibrium, including zero-point energy and excitations.
- {{f:limite_clasico_equiparticion}} | Classical equipartition limit | In the classical regime, total mean energy adds two quadratic half-kBT contributions.
- {{f:beta_inversa_termica}} | Thermodynamic beta | Defines the inverse thermal energy scale that weights oscillator levels.
- {{f:funcion_particion_cuantica}} | Quantum partition function | Summarizes the statistical contribution of all oscillator energy levels.
- {{f:probabilidad_ocupacion_n}} | Occupation probability of level n | Expresses how thermal population is distributed among levels spaced by hbar times angular frequency.

Global content rules:
- No placeholders, TODOs, empty sections, generic filler, or template instructions in the final file.
- Every visible physical magnitude from the list must be tagged as [[id]] whenever it is mentioned.
- Formula references must use {{f:id}}. Put important formula references on their own line in formal solution sections.
- Do not invent magnitude ids or formula ids.
- Keep the physics specific to this leaf; avoid examples copied from unrelated topics.
- Equations with =, <, > are allowed only in formal, quantitative, data, solution, validation, or validity sections.

Required heading structure. Use these headings exactly and in this order:
# Statistical Harmonic Oscillator
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

Return only the downloadable file `oscilador-armonico-estadistico_md.zip`.
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
