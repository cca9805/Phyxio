const n=`version: 1
magnitudes:
  - id: cop
    symbol: "COP"
    simbolo: "COP"
    nombre:
      es: "coeficiente de rendimiento"
      en: "coefficient of performance"
    descripcion:
      es: "Relación entre el calor útil entregado por el equipo y el trabajo eléctrico consumido."
      en: "Ratio between the useful heat delivered by the equipment and the electric work consumed."
    unidad_si: "-"
    unidad: "-"
    dimension: "1"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "derived"
    physical_role: "efficiency"
    used_in: ["Bomba de calor"]
    common_mistake: "Confundirlo con eficiencia < 1."
    typical_range: "2.5 - 5.5"
    precision: 2
    canonical_id: "eficiencia"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre positivo."
        en: "Always positive."
    zero_behavior:
      allowed: false
      meaning:
        es: "Imposible."
        en: "Impossible."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: [1.0, 7.0]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: ["cop_slider"]
    pedagogical_notes: "COP > 1 no viola la termodinámica."

  - id: q_calor
    symbol: "Q_{\\\\text{calor}}"
    simbolo: "Q_{\\\\text{calor}}"
    nombre:
      es: "calor entregado"
      en: "delivered heat"
    descripcion:
      es: "Energía térmica total aportada al recinto."
      en: "Total thermal energy provided to the premises."
    unidad_si: "J"
    unidad: "J"
    dimension: "L^2 M T^{-2}"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "derived"
    physical_role: "energy_flux"
    used_in: ["Bomba de calor"]
    common_mistake: "Confundirlo con calor extraído."
    typical_range: "10^7 - 10^9 J"
    precision: 2
    canonical_id: "energia"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positivo si entra."
        en: "Positive if entering."
    zero_behavior:
      allowed: true
      meaning:
        es: "Apagado."
        en: "Off."
    value_nature:
      kind: "scalar"
      nonnegative_only: false
      expected_interval: [0, 1000000]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: ["thermal_bar"]
    pedagogical_notes: "Q_calor = W_elec + Q_ambiente."

  - id: w_elec
    symbol: "W_{\\\\text{elec}}"
    simbolo: "W_{\\\\text{elec}}"
    nombre:
      es: "trabajo eléctrico"
      en: "electric work"
    descripcion:
      es: "Energía eléctrica consumida por el compresor."
      en: "Electric energy consumed by the compressor."
    unidad_si: "J"
    unidad: "J"
    dimension: "L^2 M T^{-2}"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "derived"
    physical_role: "work"
    used_in: ["Bomba de calor"]
    common_mistake: "Asumir efecto Joule puro."
    typical_range: "10^6 - 10^8 J"
    precision: 2
    canonical_id: "energia"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Energía consumida."
        en: "Consumed energy."
    zero_behavior:
      allowed: true
      meaning:
        es: "Parado."
        en: "Stopped."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: [0, 500000]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: ["work_arrow"]
    pedagogical_notes: "Es el peaje."

  - id: q_ambiente
    symbol: "Q_{\\\\text{amb}}"
    simbolo: "Q_{\\\\text{amb}}"
    nombre:
      es: "calor ambiental"
      en: "ambient heat"
    descripcion:
      es: "Energía térmica extraída de la fuente externa."
      en: "Thermal energy extracted from the external source."
    unidad_si: "J"
    unidad: "J"
    dimension: "L^2 M T^{-2}"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "derived"
    physical_role: "energy_flux"
    used_in: ["Bomba de calor"]
    common_mistake: "Olvidar que es gratuita."
    typical_range: "10^7 - 10^9 J"
    precision: 2
    canonical_id: "energia"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Entrada gratuita."
        en: "Free input."
    zero_behavior:
      allowed: true
      meaning:
        es: "COP = 1."
        en: "COP = 1."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: [0, 1000000]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: ["ambient_bar"]
    pedagogical_notes: "Energía 'pescada'."

  - id: q_demanda
    symbol: "Q_{\\\\text{demanda}}"
    simbolo: "Q_{\\\\text{demanda}}"
    nombre:
      es: "demanda térmica"
      en: "thermal demand"
    descripcion:
      es: "Calor necesario para el confort."
      en: "Heat required for comfort."
    unidad_si: "J"
    unidad: "J"
    dimension: "L^2 M T^{-2}"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "state"
    physical_role: "energy_flux"
    used_in: ["Bomba de calor"]
    common_mistake: "Creer que depende del equipo."
    typical_range: "Varia"
    precision: 2
    canonical_id: "energia"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre positiva."
        en: "Always positive."
    zero_behavior:
      allowed: true
      meaning:
        es: "Equilibrio."
        en: "Equilibrium."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: [0, 2000]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: ["demand_line"]
    pedagogical_notes: "Variable independiente."

  - id: e_elec
    symbol: "E_{\\\\text{elec}}"
    simbolo: "E_{\\\\text{elec}}"
    nombre:
      es: "consumo eléctrico total"
      en: "total electric consumption"
    descripcion:
      es: "Energía eléctrica facturada."
      en: "Billed electric energy."
    unidad_si: "J"
    unidad: "J"
    dimension: "L^2 M T^{-2}"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "derived"
    physical_role: "energy_flux"
    used_in: ["Bomba de calor"]
    common_mistake: "Confundir con potencia (kW)."
    typical_range: "Depende"
    precision: 2
    canonical_id: "energia"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Energía comprada."
        en: "Purchased energy."
    zero_behavior:
      allowed: true
      meaning:
        es: "Apagado."
        en: "Off."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: [0, 1000]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: ["elec_axis"]
    pedagogical_notes: "E_elec < Q_demanda."

  - id: ahorro
    symbol: "A"
    simbolo: "A"
    nombre:
      es: "ahorro relativo"
      en: "relative savings"
    descripcion:
      es: "Fracción de energía eléctrica ahorrada."
      en: "Fraction of electric energy saved."
    unidad_si: "-"
    unidad: "-"
    dimension: "1"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "derived"
    physical_role: "efficiency"
    used_in: ["Bomba de calor"]
    common_mistake: "Asumir linealidad con COP."
    typical_range: "0.5 - 0.8"
    precision: 2
    canonical_id: "eficiencia"
    sign_behavior:
      has_sign: true
      meaning:
        es: "Positivo si ahorra."
        en: "Positive if saving."
    zero_behavior:
      allowed: true
      meaning:
        es: "COP = 1."
        en: "COP = 1."
    value_nature:
      kind: "scalar"
      nonnegative_only: false
      expected_interval: [-1, 1]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: ["savings_indicator"]
    pedagogical_notes: "A = 1 - (1/COP)."

  - id: precio_kwh
    symbol: "p_{\\\\text{kWh}}"
    simbolo: "p_{\\\\text{kWh}}"
    nombre:
      es: "precio de la electricidad"
      en: "electricity price"
    descripcion:
      es: "Coste unitario de la energía."
      en: "Unit cost of energy."
    unidad_si: "EUR/kWh"
    unidad: "EUR/kWh"
    dimension: "1"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "parameter"
    physical_role: "cost_factor"
    used_in: ["Bomba de calor"]
    common_mistake: "Olvidar términos fijos."
    typical_range: "0.10 - 0.30"
    precision: 2
    canonical_id: "precio"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Precio positivo."
        en: "Positive price."
    zero_behavior:
      allowed: false
      meaning:
        es: "Utopía."
        en: "Utopia."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: [0.05, 0.50]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: ["price_slope"]
    pedagogical_notes: "Factor de escala."

  - id: coste
    symbol: "C"
    simbolo: "C"
    nombre:
      es: "coste económico"
      en: "economic cost"
    descripcion:
      es: "Gasto monetario total."
      en: "Total monetary expenditure."
    unidad_si: "EUR"
    unidad: "EUR"
    dimension: "1"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "derived"
    physical_role: "cost_factor"
    used_in: ["Bomba de calor"]
    common_mistake: "No distinguir variable de fijo."
    typical_range: "50 - 200"
    precision: 2
    canonical_id: "precio"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Gasto positivo."
        en: "Positive expenditure."
    zero_behavior:
      allowed: true
      meaning:
        es: "Gratis."
        en: "Free."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: [0, 1000]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: ["cost_bar"]
    pedagogical_notes: "C = E_elec * precio_kwh."

  - id: hora
    symbol: "h"
    simbolo: "h"
    nombre:
      es: "hora"
      en: "hour"
    descripcion:
      es: "Unidad de tiempo para balances."
      en: "Unit of time for balances."
    unidad_si: "s"
    unidad: "h"
    dimension: "T"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "auxiliary"
    physical_role: "time"
    used_in: ["Bomba de calor"]
    common_mistake: "Confundir con instante."
    typical_range: "1 - 8760"
    precision: 0
    canonical_id: "tiempo"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Siempre positivo."
        en: "Always positive."
    zero_behavior:
      allowed: true
      meaning:
        es: "Inicio."
        en: "Start."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: [0, 10000]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "1 h = 3600 s."

  - id: kWh
    symbol: "\\\\text{kWh}"
    simbolo: "\\\\text{kWh}"
    nombre:
      es: "kilovatio-hora"
      en: "kilowatt-hour"
    descripcion:
      es: "Unidad práctica de energía."
      en: "Practical unit of energy."
    unidad_si: "J"
    unidad: "kWh"
    dimension: "L^2 M T^{-2}"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "auxiliary"
    physical_role: "energy"
    used_in: ["Bomba de calor"]
    common_mistake: "Confundir con kW."
    typical_range: "1 - 1000"
    precision: 2
    canonical_id: "energia"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Consumo."
        en: "Consumption."
    zero_behavior:
      allowed: true
      meaning:
        es: "Sin consumo."
        en: "No consumption."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: [0, 10000]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "1 kWh = 3.6 MJ."

  - id: MJ
    symbol: "MJ"
    simbolo: "MJ"
    nombre:
      es: "megajulio"
      en: "megajoule"
    descripcion:
      es: "Unidad de energía térmica."
      en: "Thermal energy unit."
    unidad_si: "J"
    unidad: "MJ"
    dimension: "L^2 M T^{-2}"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "auxiliary"
    physical_role: "energy"
    used_in: ["Bomba de calor"]
    common_mistake: "Confundir con kWh."
    typical_range: "1 - 10000"
    precision: 2
    canonical_id: "energia"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Escala térmica."
        en: "Thermal scale."
    zero_behavior:
      allowed: true
      meaning:
        es: "Sin energía."
        en: "No energy."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: [0, 1000000]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "Facilita números grandes."

  - id: kilovatio
    symbol: "\\\\text{kW}"
    simbolo: "\\\\text{kW}"
    nombre:
      es: "kilovatio"
      en: "kilowatt"
    descripcion:
      es: "Unidad de potencia."
      en: "Power unit."
    unidad_si: "W"
    unidad: "kW"
    dimension: "L^2 M T^{-3}"
    is_vector: false
    tipo: "escalar"
    components: null
    category: "auxiliary"
    physical_role: "power"
    used_in: ["Bomba de calor"]
    common_mistake: "Confundir con kWh."
    typical_range: "1 - 100"
    precision: 2
    canonical_id: "potencia"
    sign_behavior:
      has_sign: false
      meaning:
        es: "Capacidad."
        en: "Capacity."
    zero_behavior:
      allowed: true
      meaning:
        es: "Parado."
        en: "Stopped."
    value_nature:
      kind: "scalar"
      nonnegative_only: true
      expected_interval: [0, 100]
    interpretation_role:
      primary_for: ["Bomba de calor"]
      secondary_for: []
    graph_binding:
      channels: []
    pedagogical_notes: "1 kW = 1000 W."
`;export{n as default};
