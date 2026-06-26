const n=`version: 1
magnitudes:
- id: I
  symbol: I
  nombre:
    es: intensidad de corriente
    en: electric current
  descripcion:
    es: Flujo neto de carga electrica que atraviesa una seccion por unidad de tiempo.
    en: Net electric charge flow crossing a section per unit time.
  unidad_si: A
  dimension: I
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in:
  - intensidad-de-corriente
  common_mistake: Confundir intensidad con velocidad individual de electrones.
  typical_range: "Desde microamperios en sensores hasta cientos de amperios en potencia."
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo depende de la convencion de sentido de corriente adoptada.
      en: Sign depends on selected current direction convention.
  zero_behavior:
    allowed: true
    meaning:
      es: Intensidad nula indica ausencia de flujo neto a traves de la seccion elegida.
      en: Zero current indicates no net flow through the selected section.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for:
    - intensidad-de-corriente
    secondary_for: []
  graph_binding:
    channels:
    - eje_vertical_i_t
  pedagogical_notes: Distinguir signo, valor absoluto y escala temporal evita errores de interpretacion.

- id: q
  symbol: q
  nombre:
    es: carga electrica transportada
    en: transported electric charge
  descripcion:
    es: Cantidad total de carga que cruza una seccion en un intervalo.
    en: Total amount of charge crossing a section in a given interval.
  unidad_si: C
  dimension: I T
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - intensidad-de-corriente
  common_mistake: Interpretar q como caudal instantaneo en vez de acumulado del intervalo.
  typical_range: "De nanoculombios en microsistemas a kiloculombios en aplicaciones de energia."
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo depende del tipo de portador y de la referencia de flujo.
      en: Sign depends on carrier type and flow reference.
  zero_behavior:
    allowed: true
    meaning:
      es: Carga transportada nula implica balance neto nulo en el intervalo.
      en: Zero transported charge implies zero net balance within the interval.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for: []
    secondary_for:
    - intensidad-de-corriente
  graph_binding:
    channels:
    - area_bajo_i_t
  pedagogical_notes: q se interpreta mejor junto con la ventana temporal usada para medirla.

- id: t
  symbol: t
  nombre:
    es: tiempo
    en: time
  descripcion:
    es: Variable independiente que define la ventana de observacion del flujo de carga.
    en: Independent variable defining the charge-flow observation window.
  unidad_si: s
  dimension: T
  is_vector: false
  components: null
  category: fundamental
  physical_role: physical_quantity
  used_in:
  - intensidad-de-corriente
  common_mistake: Mezclar milisegundos y segundos sin conversion previa.
  typical_range: "Desde microsegundos en conmutacion hasta horas en consumo energetico."
  sign_behavior:
    has_sign: false
    meaning:
      es: Se toma no negativo desde el inicio del intervalo analizado.
      en: It is taken as non-negative from interval start.
  zero_behavior:
    allowed: true
    meaning:
      es: Define el instante inicial de medicion o del modelo.
      en: Defines model or measurement initial instant.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, inf)"
  interpretation_role:
    primary_for: []
    secondary_for:
    - intensidad-de-corriente
  graph_binding:
    channels:
    - eje_horizontal
  pedagogical_notes: Cambiar la ventana temporal modifica la lectura media de intensidad.

- id: J
  symbol: J
  nombre:
    es: densidad de corriente
    en: current density
  descripcion:
    es: Corriente por unidad de area efectiva de conduccion.
    en: Current per unit effective conduction area.
  unidad_si: A/m^2
  dimension: I L^-2
  is_vector: false
  components: null
  category: derived
  physical_role: physical_quantity
  used_in:
  - intensidad-de-corriente
  common_mistake: Usar area geometrica incorrecta y subestimar sobrecarga local.
  typical_range: "Desde 10^2 A/m^2 en cables gruesos hasta >10^8 A/m^2 en microestructuras."
  sign_behavior:
    has_sign: true
    meaning:
      es: El signo sigue la convencion de direccion adoptada para el flujo.
      en: Sign follows the adopted flow-direction convention.
  zero_behavior:
    allowed: true
    meaning:
      es: J nula indica ausencia de flujo neto local.
      en: Zero J indicates no local net flow.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for: []
    secondary_for:
    - intensidad-de-corriente
  graph_binding:
    channels:
    - comparacion_termica
  pedagogical_notes: J es clave para criterios de calentamiento, desgaste y seguridad.

- id: A
  symbol: A
  nombre:
    es: area de seccion
    en: cross-sectional area
  descripcion:
    es: Superficie atravesada por el flujo de carga en la direccion de transporte.
    en: Surface crossed by charge flow in transport direction.
  unidad_si: m^2
  dimension: L^2
  is_vector: false
  components: null
  category: geometric
  physical_role: physical_quantity
  used_in:
  - intensidad-de-corriente
  common_mistake: Ignorar reducciones efectivas por contactos o estrangulamientos locales.
  typical_range: "De mm^2 en cables domesticos a um^2 en microelectronica."
  sign_behavior:
    has_sign: false
    meaning:
      es: Magnitud geometrica positiva por definicion.
      en: Positive geometric magnitude by definition.
  zero_behavior:
    allowed: false
    meaning:
      es: Area nula elimina el canal de conduccion del modelo.
      en: Zero area removes conduction path from model.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "(0, inf)"
  interpretation_role:
    primary_for: []
    secondary_for:
    - intensidad-de-corriente
  graph_binding:
    channels:
    - normalizacion_j
  pedagogical_notes: Una misma I puede implicar esfuerzos muy distintos segun A.

- id: n
  symbol: n
  nombre:
    es: densidad de portadores
    en: carrier density
  descripcion:
    es: Numero de portadores de carga libres por unidad de volumen.
    en: Number of free charge carriers per unit volume.
  unidad_si: 1/m^3
  dimension: L^-3
  is_vector: false
  components: null
  category: material
  physical_role: physical_quantity
  used_in:
  - intensidad-de-corriente
  common_mistake: Tratar n como constante universal sin considerar material y temperatura.
  typical_range: "Muy baja en semiconductores intrinsecos, muy alta en metales."
  sign_behavior:
    has_sign: false
    meaning:
      es: Es una cantidad de conteo por volumen y debe ser no negativa.
      en: It is a count per volume and must be non-negative.
  zero_behavior:
    allowed: true
    meaning:
      es: n cercana a cero describe material casi aislante en el modelo simplificado.
      en: Near-zero n describes nearly insulating behavior in simplified model.
  value_nature:
    kind: scalar
    nonnegative_only: true
    expected_interval: "[0, inf)"
  interpretation_role:
    primary_for: []
    secondary_for:
    - intensidad-de-corriente
  graph_binding:
    channels:
    - escala_material
  pedagogical_notes: n permite conectar descripcion microscopica y magnitudes de circuito.

- id: v
  symbol: v_d
  nombre:
    es: velocidad de deriva
    en: drift velocity
  descripcion:
    es: Velocidad media neta de portadores bajo accion de campo electrico.
    en: Average net velocity of carriers under an electric field.
  unidad_si: m/s
  dimension: L T^-1
  is_vector: false
  components: null
  category: material
  physical_role: physical_quantity
  used_in:
  - intensidad-de-corriente
  common_mistake: Confundir velocidad de deriva con velocidad termica aleatoria.
  typical_range: "En metales suele ser pequena pese a intensidades macroscópicas elevadas."
  sign_behavior:
    has_sign: true
    meaning:
      es: Su signo depende de direccion de campo y tipo de portador.
      en: Sign depends on field direction and carrier type.
  zero_behavior:
    allowed: true
    meaning:
      es: Sin campo neto aplicado la deriva media puede anularse.
      en: Without net applied field, average drift can vanish.
  value_nature:
    kind: scalar
    nonnegative_only: false
    expected_interval: "(-inf, inf)"
  interpretation_role:
    primary_for: []
    secondary_for:
    - intensidad-de-corriente
  graph_binding:
    channels:
    - puente_micro_macro
  pedagogical_notes: La relacion con I permite interpretar transporte sin perder contexto microscopico.
`;export{n as default};
