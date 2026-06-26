# PROMPT YAML 04 | graficos.yaml

Generate complete `graficos.yaml` for this leaf.
Output format:
- Return only valid YAML for the requested target file.
- Do not wrap the answer in Markdown fences.
- Do not add explanations before or after the YAML.
- Do not leave placeholders, TODOs, nulls, empty strings for required text, or example ids.
- Use double quotes for strings containing [[id]], {{f:id}}, LaTeX backslashes, colons, or comparison symbols.

Declared graph types: ['Coord']
Available magnitude ids: ['calor_transferido', 'tiempo', 'potencia_termica', 'flujo_calor', 'conductividad_termica', 'area', 'espesor', 'temperatura_caliente', 'temperatura_fria', 'diferencia_temperatura', 'gradiente_temperatura', 'resistencia_termica']
Available formula ids: ['diferencia_temperatura', 'gradiente_temperatura_1d', 'ley_fourier_conduccion_1d', 'flujo_calor_conduccion', 'flujo_potencia_area', 'calor_potencia_tiempo', 'resistencia_termica_conduccion', 'potencia_resistencia_termica']

Current graficos.yaml:
GRAFICOS_ACTUAL_INICIO
version: "1.0"
leaf: "conduccion"

coord:
  title:
    es: "Conducción térmica · Flujo de calor frente a diferencia de temperatura"
    en: "Thermal conduction · Heat flow versus temperature difference"
  xAxis:
    es: "Diferencia de temperatura ΔT (K)"
    en: "Temperature difference ΔT (K)"
  yAxis:
    es: "Flujo de calor por conducción Q/t (W)"
    en: "Conductive heat flow Q/t (W)"
  agentHints:
    es:
      - "La gráfica representa una relación lineal entre la diferencia de temperatura y el flujo de calor conducido cuando el material, el área y el espesor permanecen constantes."
      - "Una pendiente mayor indica mayor conductividad térmica, mayor área de contacto o menor espesor del material."
      - "Si ΔT es cero, no hay flujo neto de calor por conducción entre los extremos del cuerpo."
    en:
      - "The graph represents a linear relationship between temperature difference and conductive heat flow when material, area, and thickness remain constant."
      - "A steeper slope indicates higher thermal conductivity, larger contact area, or smaller material thickness."
      - "If ΔT is zero, there is no net conductive heat flow between the ends of the body."
  curveProfile:
    type: "linear"
    expectedShape: "recta creciente que pasa por el origen si el sentido positivo del flujo coincide con el gradiente térmico elegido"
    keyPoints:
      - x: 0
        y: 0
        label:
          es: "Sin diferencia de temperatura no hay conducción neta"
          en: "With no temperature difference there is no net conduction"
      - x: 50
        y: 50
        label:
          es: "Mayor ΔT produce mayor flujo de calor"
          en: "Larger ΔT produces larger heat flow"
  dataRange:
    xMin: 0
    xMax: 100
    yMin: 0
    yMax: 100
    autoScale: true
GRAFICOS_ACTUAL_FIN

meta.yaml context:
id: conduccion
nombre:
  es: Conduccion
  en: Conduction
area: fisica-clasica
bloque: termodinamica
subbloque: transferencia-de-calor
parent_id: transferencia-de-calor
ruta_relativa: fisica-clasica/termodinamica/transferencia-de-calor/conduccion
orden: 257100
type: leaf
niveles:
  es:
  - ESO
  - BACHILLERATO
  - UNIVERSIDAD
  en:
  - Secondary
  - Upper Secondary
  - University
icon: 💪
descripcion: Transferencia de energía térmica por contacto dentro de un material o entre cuerpos.
description_en: Thermal energy transfer by contact within a material or between bodies.
tags:
  es:
  - termodinámica
  - calor
  - transferencia térmica
  - conducción
  en:
  - thermodynamics
  - heat
  - thermal transfer
  - conduction
prerequisitos:
- temperatura
- calor
- energia-termica
graficos:
- Coord
physical_role:
  es: concepto físico
  en: physical concept
dificultad: 3
tiempo_estimado_min: 20
pregunta_fisica_central:
  es: ¿Cómo se transfiere energía térmica por conducción entre regiones a distinta temperatura?
  en: How is thermal energy transferred by conduction between regions at different temperatures?
representacion_dominante: none
magnitud_dominante: flujo_calor
interpretacion:
  enabled: true
  archivo: interpretacion.yaml
  ui:
    inline_calculator: false
    inline_graph: false
    dedicated_tab: true
    tab_label:
      es: Interpretación
      en: Interpretation
  mini_graph:
    enabled: false
    preferred_type: none
  output_policy:
    show_summary_first: true
    max_inline_messages: 2
    show_warnings: true
    show_likely_errors: true
  dependencies:
    requires_formulas: true
    requires_magnitudes: true
    supports_graph_binding: false

magnitudes.yaml context:
version: "5.0.0"
magnitudes:
  - id: calor_transferido
    symbol: "Q"
    nombre:
      es: "calor transferido"
      en: "transferred heat"
    descripcion:
      es: "Energía térmica que atraviesa el material durante un intervalo de tiempo."
      en: "Thermal energy crossing the material during a time interval."
    unidad_si: "J"
    dimension: "[M L^2 T^-2]"
    is_vector: false
    components: []
    category: "energia"
    physical_role: "calculable"
    used_in:
      - "calor_potencia_tiempo"
    common_mistake: "Confundir calor transferido con temperatura."
    typical_range: "Desde J hasta MJ según el sistema y el tiempo de conducción."
    sign_behavior:
      has_sign: true
      meaning:
        es: "El signo indica el sentido elegido para la transferencia de energía."
        en: "The sign indicates the chosen direction of energy transfer."
    zero_behavior:
      allowed: true
      meaning:
        es: "No hay transferencia neta de calor en el intervalo considerado."
        en: "There is no net heat transfer over the considered interval."
    value_nature:
      kind: "scalar"
      nonnegative_only: false
      expected_interval: "Depende del convenio de signos; su valor absoluto suele ser no negativo."
    interpretation_role:
      primary_for:
        - "balance_energetico"
      secondary_for:
        - "estimacion_de_perdidas_termicas"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Es una energía en tránsito, no una propiedad almacenada como la temperatura."
      en: "It is energy in transit, not a stored property like temperature."

  - id: tiempo
    symbol: "t"
    nombre:
      es: "tiempo"
      en: "time"
    descripcion:
      es: "Intervalo durante el cual se produce la conducción térmica."
      en: "Interval during which thermal conduction occurs."
    unidad_si: "s"
    dimension: "[T]"
    is_vector: false
    components: []
    category: "fundamental"
    physical_role: "input"
    used_in:
      - "calor_potencia_tiempo"
    common_mistake: "Usar minutos u horas sin convertir a segundos."
    typical_range: "Segundos, minutos u horas según el proceso térmico."
    sign_behavior:
      has_sign: false
      meaning:
        es: "El tiempo físico transcurrido se toma no negativo."
        en: "Elapsed physical time is taken as nonnegative."
    zero_behavior:
      allowed: true
      meaning:
        es: "En tiempo cero no se acumula calor transferido."
        en: "At zero time no transferred heat accumulates."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: "t >= 0"
    interpretation_role:
      primary_for:
        - "calculo_de_energia_transferida"
      secondary_for:
        - "escala_temporal_del_proceso"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Solo interviene cuando se pasa de potencia térmica a energía transferida."
      en: "It only appears when converting thermal power into transferred energy."

  - id: potencia_termica
    symbol: "\\dot{Q}"
    nombre:
      es: "potencia térmica"
      en: "thermal power"
    descripcion:
      es: "Cantidad de calor transferida por unidad de tiempo."
      en: "Amount of heat transferred per unit time."
    unidad_si: "W"
    dimension: "[M L^2 T^-3]"
    is_vector: false
    components: []
    category: "transferencia_termica"
    physical_role: "calculable"
    used_in:
      - "ley_fourier_conduccion_1d"
      - "flujo_potencia_area"
      - "calor_potencia_tiempo"
      - "potencia_resistencia_termica"
    common_mistake: "Confundir potencia térmica con calor total transferido."
    typical_range: "Desde fracciones de W hasta kW en problemas habituales."
    sign_behavior:
      has_sign: true
      meaning:
        es: "El signo depende del sentido positivo elegido para el flujo de calor."
        en: "The sign depends on the chosen positive direction for heat flow."
    zero_behavior:
      allowed: true
      meaning:
        es: "No hay transferencia neta de calor por conducción."
        en: "There is no net heat transfer by conduction."
    value_nature:
      kind: "scalar_rate"
      nonnegative_only: false
      expected_interval: "Puede ser positiva o negativa según el convenio; el módulo suele usarse en cálculos prácticos."
    interpretation_role:
      primary_for:
        - "rapidez_de_transferencia"
      secondary_for:
        - "perdidas_termicas"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "En conducción estacionaria mide cuánta energía térmica atraviesa una sección cada segundo."
      en: "In steady conduction it measures how much thermal energy crosses a section each second."

  - id: flujo_calor
    symbol: "q"
    nombre:
      es: "flujo de calor"
      en: "heat flux"
    descripcion:
      es: "Potencia térmica transferida por unidad de área."
      en: "Thermal power transferred per unit area."
    unidad_si: "W/m^2"
    dimension: "[M T^-3]"
    is_vector: false
    components: []
    category: "transferencia_termica"
    physical_role: "calculable"
    used_in:
      - "flujo_calor_conduccion"
      - "flujo_potencia_area"
    common_mistake: "Confundir flujo de calor con potencia térmica total."
    typical_range: "Desde W/m^2 en aislamiento hasta kW/m^2 en paredes muy conductoras."
    sign_behavior:
      has_sign: true
      meaning:
        es: "El signo indica el sentido del flujo respecto al eje elegido."
        en: "The sign indicates the flow direction relative to the chosen axis."
    zero_behavior:
      allowed: true
      meaning:
        es: "No existe flujo neto de calor a través del material."
        en: "There is no net heat flux through the material."
    value_nature:
      kind: "scalar_density_rate"
      nonnegative_only: false
      expected_interval: "Puede ser positiva o negativa según el eje; el módulo se usa para intensidad."
    interpretation_role:
      primary_for:
        - "intensidad_local_de_transferencia"
      secondary_for:
        - "comparacion_entre_materiales"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Es útil para comparar conducción sin depender del tamaño total del área."
      en: "It is useful for comparing conduction without depending on total area."

  - id: conductividad_termica
    symbol: "k"
    nombre:
      es: "conductividad térmica"
      en: "thermal conductivity"
    descripcion:
      es: "Propiedad del material que mide su facilidad para conducir calor."
      en: "Material property measuring how easily it conducts heat."
    unidad_si: "W/(m·K)"
    dimension: "[M L T^-3 Θ^-1]"
    is_vector: false
    components: []
    category: "propiedad_material"
    physical_role: "input"
    used_in:
      - "ley_fourier_conduccion_1d"
      - "flujo_calor_conduccion"
      - "resistencia_termica_conduccion"
    common_mistake: "Tratarla como constante universal en lugar de propiedad del material."
    typical_range: "Aislantes: cerca de 0.02 W/(m·K); metales: decenas o centenas de W/(m·K)."
    sign_behavior:
      has_sign: false
      meaning:
        es: "Para materiales ordinarios se toma positiva."
        en: "For ordinary materials it is taken as positive."
    zero_behavior:
      allowed: false
      meaning:
        es: "Un valor cero idealizaría aislamiento perfecto, no realista en conducción ordinaria."
        en: "A zero value would idealize perfect insulation, unrealistic in ordinary conduction."
    value_nature:
      kind: "material_parameter"
      nonnegative_only: true
      expected_interval: "k > 0"
    interpretation_role:
      primary_for:
        - "comparacion_de_materiales"
      secondary_for:
        - "aislamiento_termico"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Mayor conductividad implica mayor transferencia de calor para la misma geometría y diferencia térmica."
      en: "Higher conductivity implies greater heat transfer for the same geometry and thermal difference."

  - id: area
    symbol: "A"
    nombre:
      es: "área transversal"
      en: "cross-sectional area"
    descripcion:
      es: "Superficie atravesada por el calor durante la conducción."
      en: "Surface crossed by heat during conduction."
    unidad_si: "m^2"
    dimension: "[L^2]"
    is_vector: false
    components: []
    category: "geometria"
    physical_role: "input"
    used_in:
      - "ley_fourier_conduccion_1d"
      - "flujo_potencia_area"
      - "resistencia_termica_conduccion"
    common_mistake: "Usar una longitud en lugar de un área."
    typical_range: "Desde cm^2 en muestras pequeñas hasta m^2 en paredes."
    sign_behavior:
      has_sign: false
      meaning:
        es: "El área física se toma no negativa."
        en: "Physical area is taken as nonnegative."
    zero_behavior:
      allowed: false
      meaning:
        es: "Sin área de paso no hay conducción macroscópica a través de la sección."
        en: "Without crossing area there is no macroscopic conduction through the section."
    value_nature:
      kind: "geometric_scalar"
      nonnegative_only: true
      expected_interval: "A > 0"
    interpretation_role:
      primary_for:
        - "escala_geometrica_de_transferencia"
      secondary_for:
        - "calculo_de_potencia_total"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "Duplicar el área duplica la potencia térmica si todo lo demás permanece igual."
      en: "Doubling the area doubles thermal power if everything else remains unchanged."

  - id: espesor
    symbol: "L"
    nombre:
      es: "espesor"
      en: "thickness"
    descripcion:
      es: "Distancia que recorre el calor entre las dos caras del material."
      en: "Distance heat travels between the two faces of the material."
    unidad_si: "m"
    dimension: "[L]"
    is_vector: false
    components: []
    category: "geometria"
    physical_role: "input"
    used_in:
      - "gradiente_temperatura_1d"
      - "ley_fourier_conduccion_1d"
      - "flujo_calor_conduccion"
      - "resistencia_termica_conduccion"
    common_mistake: "Confundir espesor con área o usar centímetros sin convertir."
    typical_range: "Milímetros en láminas, centímetros en paredes, metros en aislamientos gruesos."
    sign_behavior:
      has_sign: false
      meaning:
        es: "El espesor físico se toma positivo."
        en: "Physical thickness is taken as positive."
    zero_behavior:
      allowed: false
      meaning:
        es: "Un espesor cero hace inválido el modelo de conducción 1D."
        en: "Zero thickness makes the 1D conduction model invalid."
    value_nature:
      kind: "geometric_scalar"
      nonnegative_only: true
      expected_interval: "L > 0"
    interpretation_role:
      primary_for:
        - "distancia_de_conduccion"
      secondary_for:
        - "resistencia_termica"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "A mayor espesor, menor transferencia de calor para la misma diferencia de temperatura."
      en: "Greater thickness reduces heat transfer for the same temperature difference."

  - id: temperatura_caliente
    symbol: "T_{c}"
    nombre:
      es: "temperatura caliente"
      en: "hot-side temperature"
    descripcion:
      es: "Temperatura de la cara o región de mayor temperatura."
      en: "Temperature of the face or region with higher temperature."
    unidad_si: "K"
    dimension: "[Θ]"
    is_vector: false
    components: []
    category: "termodinamica"
    physical_role: "input"
    used_in:
      - "diferencia_temperatura"
    common_mistake: "Usar grados Celsius en diferencias mezclados con kelvin sin criterio claro."
    typical_range: "Depende del sistema; en problemas escolares suele estar entre 250 K y 1000 K."
    sign_behavior:
      has_sign: false
      meaning:
        es: "La temperatura absoluta se toma no negativa."
        en: "Absolute temperature is taken as nonnegative."
    zero_behavior:
      allowed: false
      meaning:
        es: "El cero absoluto es un límite ideal fuera de problemas ordinarios de conducción."
        en: "Absolute zero is an ideal limit outside ordinary conduction problems."
    value_nature:
      kind: "thermodynamic_scalar"
      nonnegative_only: true
      expected_interval: "T_c > 0 K"
    interpretation_role:
      primary_for:
        - "estado_termico_inicial"
      secondary_for:
        - "calculo_de_diferencia_termica"
    graph_binding:
      channels: []
    pedagogical_notes:
      es: "En conducción estacionaria se usa para definir la diferencia térmica entre caras."
      en: "In steady conduction it is used to define the thermal difference between faces."

  - id: temperatura_fria
    symbol: "T_{f}"
    nombre:
      es: "temperatura fría"
      en: "cold-side temperature"
    descripcion:
      es: "Temperatura de la cara o región de menor temperatura."
      en: "Temperature of the face or region with lower temperature."
    unidad_si: "K"
    dimension: "[Θ]"
    is_vector: false
    components: []
    category: "termodinamica"
    physical_role: "input"
    used_in:
      - "diferencia_temperatura"
    common_mistake: "Olvidar identificar cuál de las dos temperaturas es la menor."
    typical_range: "Depende del sistema; en problemas escolares suele estar entre 200 K y 500 K."
    sign_behavior:
      has_sign: false
      meaning:
        es: "La temperatura absoluta se toma no negativa."
        en: "Absolute temperature is taken as nonnegative."
    zero_behavior:
      allowed: false
      meaning:
        es: "El cero absoluto es un límite ideal fuera de problemas ordinarios de conducción."
        en: "Absolute zero is an ideal limit outside ordinary conduction problems."
    value_nature:
      kind: "thermodynamic_scalar"
      nonnegative_only: true
      expected_interval: "T_f > 0 K"
    interpretation_role:
      primary_for:
        - "estado_termico_final"
      secondary_for:
        - "calculo_de_diferen

[RECORTADO: usa el archivo real como autoridad si necesitas mas detalle]

formulas.yaml context:
version: "5.0.0"
ui:
  default_formula: "ley_fourier_conduccion_1d"
formulas:
  - id: diferencia_temperatura
    title:
      es: "Diferencia de temperatura entre caras"
      en: "Temperature difference between faces"
    equation: "diferencia_temperatura = temperatura_caliente - temperatura_fria"
    latex: "\\Delta T = T_{c} - T_{f}"
    magnitudes:
      - "diferencia_temperatura"
      - "temperatura_caliente"
      - "temperatura_fria"
    category: "definicion"
    relation_type: "algebraic_difference"
    physical_meaning:
      es: "Mide la separación térmica que impulsa la conducción entre dos regiones."
      en: "Measures the thermal separation driving conduction between two regions."
    constraints:
      - "temperatura_caliente >= temperatura_fria si se usa Delta T como módulo positivo"
      - "temperaturas expresadas en una escala compatible para diferencias"
    validity:
      es: "Válida para comparar dos regiones térmicas bien definidas."
      en: "Valid for comparing two well-defined thermal regions."
    dimension_check: "[Θ] = [Θ] - [Θ]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "ley_fourier_conduccion_1d"
      - "flujo_calor_conduccion"
      - "potencia_resistencia_termica"
      - "gradiente_temperatura_1d"
    interpretation_tags:
      - "diferencia_termica"
      - "sentido_del_calor"
      - "causa_de_conduccion"
    result_semantics:
      target: "diferencia_temperatura"
      kind: "thermal_difference"
      sign_meaning: "Positiva si se define como temperatura caliente menos temperatura fría."
      absolute_value_meaning: "Intensidad de la separación térmica entre ambas caras."
    domain_checks:
      - "Comprobar que las temperaturas identifican correctamente el lado caliente y el lado frío."
      - "No confundir temperatura absoluta con diferencia de temperatura."
    coherence_checks:
      - "Si diferencia_temperatura es cero, las fórmulas de conducción estacionaria dan flujo neto cero."
      - "La diferencia de temperatura debe estar en K o en grados Celsius como intervalo equivalente."
    graph_implications:
      - "Una mayor diferencia de temperatura implica mayor pendiente térmica si el espesor no cambia."
    pedagogical_triggers:
      - "Revisar el orden de la resta cuando aparezca una potencia térmica negativa inesperada."
      - "Recordar que el calor fluye espontáneamente del lado caliente al frío."
    rearrangements:
      - target: "diferencia_temperatura"
        equation: "diferencia_temperatura = temperatura_caliente - temperatura_fria"
        latex: "\\Delta T = T_{c} - T_{f}"
      - target: "temperatura_caliente"
        equation: "temperatura_caliente = diferencia_temperatura + temperatura_fria"
        latex: "T_{c} = \\Delta T + T_{f}"
      - target: "temperatura_fria"
        equation: "temperatura_fria = temperatura_caliente - diferencia_temperatura"
        latex: "T_{f} = T_{c} - \\Delta T"

  - id: gradiente_temperatura_1d
    title:
      es: "Gradiente térmico medio en una dimensión"
      en: "Mean one-dimensional thermal gradient"
    equation: "gradiente_temperatura = diferencia_temperatura / espesor"
    latex: "\\frac{\\Delta T}{L}"
    magnitudes:
      - "gradiente_temperatura"
      - "diferencia_temperatura"
      - "espesor"
    category: "definicion"
    relation_type: "ratio"
    physical_meaning:
      es: "Expresa cuánto cambia la temperatura por cada metro de material."
      en: "Expresses how much temperature changes per meter of material."
    constraints:
      - "espesor > 0"
      - "conduccion aproximadamente unidimensional"
    validity:
      es: "Válida como gradiente medio cuando la temperatura varía casi linealmente en el espesor."
      en: "Valid as a mean gradient when temperature varies almost linearly through the thickness."
    dimension_check: "[Θ L^-1] = [Θ] / [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "flujo_calor_conduccion"
    interpretation_tags:
      - "gradiente"
      - "perfil_termico"
      - "conduccion_1d"
    result_semantics:
      target: "gradiente_temperatura"
      kind: "spatial_rate"
      sign_meaning: "El signo depende del eje elegido para medir la variación térmica."
      absolute_value_meaning: "Intensidad del cambio térmico por unidad de longitud."
    domain_checks:
      - "El espesor no puede ser cero."
      - "El modelo pierde validez si hay fuentes internas intensas o geometría no unidimensional."
    coherence_checks:
      - "Mayor diferencia de temperatura aumenta el gradiente si el espesor se mantiene."
      - "Mayor espesor reduce el gradiente si la diferencia térmica se mantiene."
    graph_implications:
      - "En una gráfica temperatura-posicion, el gradiente corresponde a la pendiente media."
    pedagogical_triggers:
      - "Distinguir diferencia de temperatura y gradiente de temperatura."
      - "No olvidar dividir por la longitud de conducción."
    rearrangements:
      - target: "gradiente_temperatura"
        equation: "gradiente_temperatura = diferencia_temperatura / espesor"
        latex: "\\frac{\\Delta T}{L}"
      - target: "diferencia_temperatura"
        equation: "diferencia_temperatura = gradiente_temperatura * espesor"
        latex: "\\Delta T = \\left(\\frac{\\Delta T}{L}\\right)L"
      - target: "espesor"
        equation: "espesor = diferencia_temperatura / gradiente_temperatura"
        latex: "L = \\frac{\\Delta T}{\\Delta T/L}"

  - id: ley_fourier_conduccion_1d
    title:
      es: "Ley de Fourier para conducción plana estacionaria"
      en: "Fourier law for steady plane conduction"
    equation: "potencia_termica = conductividad_termica * area * diferencia_temperatura / espesor"
    latex: "\\dot{Q} = \\frac{k A \\Delta T}{L}"
    magnitudes:
      - "potencia_termica"
      - "conductividad_termica"
      - "area"
      - "diferencia_temperatura"
      - "espesor"
    category: "ley_fundamental"
    relation_type: "proportional_inverse"
    physical_meaning:
      es: "La potencia conducida aumenta con conductividad, área y diferencia térmica, y disminuye con el espesor."
      en: "Conducted power increases with conductivity, area and thermal difference, and decreases with thickness."
    constraints:
      - "conductividad_termica > 0"
      - "area > 0"
      - "espesor > 0"
      - "conduccion estacionaria"
      - "material homogeneo"
      - "flujo aproximadamente unidimensional"
    validity:
      es: "Válida para conducción estacionaria en una pared plana homogénea sin generación interna relevante."
      en: "Valid for steady conduction in a homogeneous plane wall without relevant internal generation."
    dimension_check: "[M L^2 T^-3] = [M L T^-3 Θ^-1] [L^2] [Θ] / [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "calor_potencia_tiempo"
      - "flujo_potencia_area"
    interpretation_tags:
      - "ley_de_fourier"
      - "conduccion_estacionaria"
      - "potencia_termica"
      - "aislamiento"
    result_semantics:
      target: "potencia_termica"
      kind: "thermal_power"
      sign_meaning: "El signo depende de si se conserva el sentido vectorial del gradiente térmico."
      absolute_value_meaning: "Cantidad de energía térmica que atraviesa la sección por segundo."
    domain_checks:
      - "Verificar que no se está usando para convección o radiación."
      - "Comprobar que la geometría puede aproximarse como pared plana."
      - "Comprobar que las unidades están en SI."
    coherence_checks:
      - "Si diferencia_temperatura = 0, potencia_termica debe ser 0."
      - "Si espesor aumenta, potencia_termica debe disminuir."
      - "Si area aumenta, potencia_termica debe aumentar."
    graph_implications:
      - "La potencia térmica es proporcional a la diferencia de temperatura si k, A y L son constantes."
      - "La potencia térmica es inversamente proporcional al espesor."
    pedagogical_triggers:
      - "No colocar el espesor en el numerador."
      - "No confundir conductividad térmica con resistencia térmica."
      - "Explicar que el signo negativo de Fourier indica flujo hacia menor temperatura."
    rearrangements:
      - target: "potencia_termica"
        equation: "potencia_termica = conductividad_termica * area * diferencia_temperatura / espesor"
        latex: "\\dot{Q} = \\frac{k A \\Delta T}{L}"
      - target: "conductividad_termica"
        equation: "conductividad_termica = potencia_termica * espesor / (area * diferencia_temperatura)"
        latex: "k = \\frac{\\dot{Q} L}{A \\Delta T}"
      - target: "area"
        equation: "area = potencia_termica * espesor / (conductividad_termica * diferencia_temperatura)"
        latex: "A = \\frac{\\dot{Q} L}{k \\Delta T}"
      - target: "diferencia_temperatura"
        equation: "diferencia_temperatura = potencia_termica * espesor / (conductividad_termica * area)"
        latex: "\\Delta T = \\frac{\\dot{Q} L}{k A}"
      - target: "espesor"
        equation: "espesor = conductividad_termica * area * diferencia_temperatura / potencia_termica"
        latex: "L = \\frac{k A \\Delta T}{\\dot{Q}}"

  - id: flujo_calor_conduccion
    title:
      es: "Flujo de calor por conducción"
      en: "Conductive heat flux"
    equation: "flujo_calor = conductividad_termica * diferencia_temperatura / espesor"
    latex: "q = \\frac{k \\Delta T}{L}"
    magnitudes:
      - "flujo_calor"
      - "conductividad_termica"
      - "diferencia_temperatura"
      - "espesor"
    category: "ley_derivada"
    relation_type: "proportional_inverse"
    physical_meaning:
      es: "Mide la potencia conducida por unidad de área."
      en: "Measures the conducted power per unit area."
    constraints:
      - "conductividad_termica > 0"
      - "espesor > 0"
      - "conduccion estacionaria y unidimensional"
    validity:
      es: "Válida para conducción plana estacionaria cuando interesa la intensidad por unidad de área."
      en: "Valid for steady plane conduction when the intensity per unit area is needed."
    dimension_check: "[M T^-3] = [M L T^-3 Θ^-1] [Θ] / [L]"
    calculable: true
    motivo_no_calculable: ""
    used_in:
      - "flujo_potencia_area"
    interpretation_tags:
      - "flujo_de_calor"
      - "intensidad_de_conduccion"
      - "ley_de_fourier"
    result_semantics:
      target: "flujo_calor"
      kind: "heat_flux"
      sign_meaning: "El signo indica el sentido del flujo respecto al eje elegido."
      absolute_value_meaning: "Potencia térmica por metro cuadrado."
    domain_checks:
      - "No usar si se necesita la potencia total sin conocer el área."
      - "El espesor debe corresponder a la dirección real de conducción."
    coherence_checks:
      - "Si diferencia_temperatura = 0, flujo_calor debe ser 0."
      - "Si espesor aumenta, flujo_calor disminuye."
    graph_implications:
      - "El flujo de calor es proporcional al gradiente térmico medio."
    pedagogical_triggers:
      - "Diferenciar flujo de calor y calor transferido."
      - "Recalcar que no aparece el área porque ya es una magnitud por unidad de superficie."
    rearrangements:
      - target: "flujo_calor"
        equation: "flujo_calor = conductividad_termica * diferencia_temperatura / espesor"
        latex: "q = \\frac{k \\Delta T}{L}"
      - target: "conductividad_termica"
        equation: "conductividad_termica = flujo_calor * espesor / diferencia_temperatura"
        latex: "k = \\frac{q L}{\\Delta T}"
      - target: "diferencia_temperatura"
        equation: "diferencia_temperatura = flujo_calor * espesor / conductividad_termica"
        latex: "\\Delta T = \\frac{q L}{k}"
      - target: "espesor"
        equation: "espesor = conductividad_termica * diferencia_temperatura / flujo_calor"
        latex: "L = \\frac{k \\Delta T}{q}"

  - id: flujo_potencia_area
    title:
      es: "Relación entre flujo de calor, potencia y área"
      en: "Relation between heat flux, power and area"
    equation: "flujo_calor = potencia_termica / area"
    latex: "q = \\frac{\\dot{Q}}{A}"
    magnitudes:
      - "flujo_calor"
      - "potencia_termica"
      - "area"
    category: "relacion_derivada"
    relation_type: "ratio"
    physical_meaning:
      es: "Convierte potencia térmica total en intensidad de transferencia por unidad de área."
      en: "Converts total thermal power into transfer intensity per unit area."
    constraints:
      - "area > 0"
      - "flujo aproximadamente uniforme sobre el área"
    validity:
      es: "Válida cuando la potencia se distribuye de forma aproximadamente uniforme sobre la superficie."
      en: "Valid when power is approximately uniformly distributed over the surface."
    dimension_check: "[M T^-3] = [M L^2 T^-3] / [L^2]"
    calculable: true
    motivo_no_calculable: ""
    used_in: []
    interpretation_tags:
      - "densidad_de_potencia"
      - "area"
      - "flujo_termico"
    result_semantics:
      target: "flujo_calor"
      kind: "heat_flux"
      sign_meaning: "Hereda el signo de la potencia térmica según el convenio elegido."
      absolute_value_meaning: "Potencia térmica repartida por cada metro cuadrado."
    domain_checks:
      - "No dividir por área cero."
      - "Comprobar si el flujo es uniforme antes de usar un valor medio."
    coherence_checks:
      - "Si potencia_termica aumenta con área constante, flujo_calor aumenta."
      - "Si area aumenta con potencia constante, flujo_calor disminuye."
    graph_implications:
      - "Con área constante, flujo y potencia son directamente proporcionales."
    pedagogical_triggers:
      - "Aclarar que W y W/m^2 no representan la misma magnitud."
      - "Revisar si el problema pide potencia total o flujo por unidad de área."
    rearrangements:
      - target: "flujo_calor"
        equation: "flujo_calor = potencia_termica / area"
        latex: "q = \\frac{\\dot{Q}}{A}"
      - target: "potencia_termica"
        equation: "potencia_termica = flujo_calor * area"
        latex: "\\dot{Q} = q A"

[RECORTADO: usa el archivo real como autoridad si necesitas mas detalle]

graficos.yaml contract:
- version must be "1.0".
- leaf must be "conduccion".
- Include only sections declared by meta.yaml/map.
- Do not include JSX, HTML, React components, or <MathInline />.
- All bilingual fields require es and en.
- agentHints and commonMistakes require at least 3 entries in es and 3 in en.
- recommendedTab must be "graficas".
- Required sections for this leaf: ['coord']

Coord required fields:
- id and graphId: "conduccion-Coord"; type and graphType: "Coord".
- title, xAxis, yAxis, xMagnitude, yMagnitude.
- relation, physicalReading, slopeMeaning, interceptMeaning, curvatureMeaning, signMeaning, areaMeaning, domainMeaning, modelConnection, formulaConnection, readingFocus.
- agentHints, commonMistakes, curveProfile, dataRange, recommendedTab.
- curveProfile: type, expectedShape.es/en, keyPoints with at least 2 points. Each point has x, y, label.es/en.
- dataRange: xMin, xMax, yMin, yMax, autoScale.

Dcl required fields:
- id and graphId: "conduccion-Dcl"; type and graphType: "Dcl".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, forceVectors, equilibriumState, recommendedTab.
- forceVectors: at least one vector; each has id, label.es/en, targetObject, direction, magnitudeRef, signConvention.es/en, formulaRefs.
- equilibriumState.conditionDescription.es/en is required.

Svg required fields:
- id and graphId: "conduccion-Svg"; type and graphType: "Svg".
- title, sceneId, sceneLabel, objects, mainObject, referenceFrame, geometry, interactions, modelElements, visualCues, scaleMeaning, relation, physicalReading, modelConnection, formulaConnection, readingFocus, agentHints, commonMistakes, animationTriggers, interactiveElements, recommendedTab.
- animationTriggers and interactiveElements are lists; they may be empty if no interaction applies.

If no graph types are declared, output only:
version: "1.0"
leaf: "conduccion"

Physics quality:
- A Coord graph must encode a real quantitative relation from formulas.yaml.
- A Dcl graph must represent actual forces/interactions of the model, not decorative arrows.
- A Svg graph must represent an interpretable physical scene, not a generic illustration.
- formulaConnection should use text/LaTeX, never JSX.
