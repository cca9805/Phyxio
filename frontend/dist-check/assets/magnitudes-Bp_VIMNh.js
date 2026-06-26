const e=`version: 1\r
magnitudes:\r
- id: M\r
  symbol: "M"\r
  nombre:\r
    es: "masa total"\r
    en: "total mass"\r
  descripcion:\r
    es: "Masa total de la distribuci?n continua integrada."\r
    en: "Total mass of the integrated continuous distribution."\r
  unidad_si: "kg"\r
  dimension: "M"\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar M sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: "No se interpreta con signo direccional en distribuciones ordinarias."\r
      en: "It is not interpreted with directional sign in ordinary distributions."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - M\r
  pedagogical_notes: "En este leaf, M debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: dm\r
  symbol: "dm"\r
  nombre:\r
    es: "elemento diferencial de masa"\r
    en: "differential mass element"\r
  descripcion:\r
    es: "Masa infinitesimal asociada a un elemento geom?trico del cuerpo."\r
    en: "Infinitesimal mass associated with a geometric element of the body."\r
  unidad_si: "kg"\r
  dimension: "M"\r
  is_vector: false\r
  components: null\r
  category: fundamental\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar dm sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: "No se interpreta con signo direccional en distribuciones ordinarias."\r
      en: "It is not interpreted with directional sign in ordinary distributions."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - dm\r
  pedagogical_notes: "En este leaf, dm debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: r\r
  symbol: '\\vec r'\r
  nombre:\r
    es: "vector posici?n local"\r
    en: "local position vector"\r
  descripcion:\r
    es: "Posici?n de cada elemento diferencial respecto al origen elegido."\r
    en: "Position of each differential element relative to the chosen origin."\r
  unidad_si: "m"\r
  dimension: "L"\r
  is_vector: true\r
  components: ["x", "y", "z"]\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar r sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: "El signo depende del origen y del sentido positivo del eje elegido."\r
      en: "The sign depends on the origin and chosen positive axis direction."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: vector_position\r
    nonnegative_only: false\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - r\r
  pedagogical_notes: "En este leaf, r debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: rcm\r
  symbol: '\\vec r_{cm}'\r
  nombre:\r
    es: "vector centro de masas"\r
    en: "center-of-mass vector"\r
  descripcion:\r
    es: "Posici?n vectorial del centro de masas del cuerpo extendido."\r
    en: "Vector position of the center of mass of the extended body."\r
  unidad_si: "m"\r
  dimension: "L"\r
  is_vector: true\r
  components: ["xcm", "ycm", "zcm"]\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar rcm sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: "El signo depende del origen y del sentido positivo del eje elegido."\r
      en: "The sign depends on the origin and chosen positive axis direction."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: vector_position\r
    nonnegative_only: false\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - rcm\r
  pedagogical_notes: "En este leaf, rcm debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: x\r
  symbol: "x"\r
  nombre:\r
    es: "coordenada x local"\r
    en: "local x-coordinate"\r
  descripcion:\r
    es: "Coordenada x de un elemento diferencial de masa."\r
    en: "x-coordinate of a differential mass element."\r
  unidad_si: "m"\r
  dimension: "L"\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar x sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: "El signo depende del origen y del sentido positivo del eje elegido."\r
      en: "The sign depends on the origin and chosen positive axis direction."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - x\r
  pedagogical_notes: "En este leaf, x debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: y\r
  symbol: "y"\r
  nombre:\r
    es: "coordenada y local"\r
    en: "local y-coordinate"\r
  descripcion:\r
    es: "Coordenada y de un elemento diferencial de masa."\r
    en: "y-coordinate of a differential mass element."\r
  unidad_si: "m"\r
  dimension: "L"\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar y sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: "El signo depende del origen y del sentido positivo del eje elegido."\r
      en: "The sign depends on the origin and chosen positive axis direction."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - y\r
  pedagogical_notes: "En este leaf, y debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: z\r
  symbol: "z"\r
  nombre:\r
    es: "coordenada z local"\r
    en: "local z-coordinate"\r
  descripcion:\r
    es: "Coordenada z de un elemento diferencial de masa."\r
    en: "z-coordinate of a differential mass element."\r
  unidad_si: "m"\r
  dimension: "L"\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar z sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: "El signo depende del origen y del sentido positivo del eje elegido."\r
      en: "The sign depends on the origin and chosen positive axis direction."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - z\r
  pedagogical_notes: "En este leaf, z debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: xcm\r
  symbol: "x_{cm}"\r
  nombre:\r
    es: "coordenada x del centro de masas"\r
    en: "x-coordinate of the center of mass"\r
  descripcion:\r
    es: "Componente x del centro de masas continuo."\r
    en: "x-component of the continuous center of mass."\r
  unidad_si: "m"\r
  dimension: "L"\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar xcm sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: "El signo depende del origen y del sentido positivo del eje elegido."\r
      en: "The sign depends on the origin and chosen positive axis direction."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - xcm\r
  pedagogical_notes: "En este leaf, xcm debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: ycm\r
  symbol: "y_{cm}"\r
  nombre:\r
    es: "coordenada y del centro de masas"\r
    en: "y-coordinate of the center of mass"\r
  descripcion:\r
    es: "Componente y del centro de masas continuo."\r
    en: "y-component of the continuous center of mass."\r
  unidad_si: "m"\r
  dimension: "L"\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar ycm sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: "El signo depende del origen y del sentido positivo del eje elegido."\r
      en: "The sign depends on the origin and chosen positive axis direction."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - ycm\r
  pedagogical_notes: "En este leaf, ycm debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: zcm\r
  symbol: "z_{cm}"\r
  nombre:\r
    es: "coordenada z del centro de masas"\r
    en: "z-coordinate of the center of mass"\r
  descripcion:\r
    es: "Componente z del centro de masas continuo."\r
    en: "z-component of the continuous center of mass."\r
  unidad_si: "m"\r
  dimension: "L"\r
  is_vector: false\r
  components: null\r
  category: derived\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar zcm sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: true\r
    meaning:\r
      es: "El signo depende del origen y del sentido positivo del eje elegido."\r
      en: "The sign depends on the origin and chosen positive axis direction."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: false\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - zcm\r
  pedagogical_notes: "En este leaf, zcm debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: lambda\r
  symbol: '\\lambda'\r
  nombre:\r
    es: "densidad lineal"\r
    en: "linear density"\r
  descripcion:\r
    es: "Masa por unidad de longitud en barras, hilos o arcos delgados."\r
    en: "Mass per unit length in rods, wires, or thin arcs."\r
  unidad_si: "kg/m"\r
  dimension: "ML^{-1}"\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar lambda sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: "No se interpreta con signo direccional en distribuciones ordinarias."\r
      en: "It is not interpreted with directional sign in ordinary distributions."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - lambda\r
  pedagogical_notes: "En este leaf, lambda debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: sigma\r
  symbol: '\\sigma'\r
  nombre:\r
    es: "densidad superficial"\r
    en: "surface density"\r
  descripcion:\r
    es: "Masa por unidad de ?rea en l?minas o placas."\r
    en: "Mass per unit area in laminae or plates."\r
  unidad_si: "kg/m^2"\r
  dimension: "ML^{-2}"\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar sigma sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: "No se interpreta con signo direccional en distribuciones ordinarias."\r
      en: "It is not interpreted with directional sign in ordinary distributions."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - sigma\r
  pedagogical_notes: "En este leaf, sigma debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: rho\r
  symbol: '\\rho'\r
  nombre:\r
    es: "densidad volum?trica"\r
    en: "volumetric density"\r
  descripcion:\r
    es: "Masa por unidad de volumen en s?lidos tridimensionales."\r
    en: "Mass per unit volume in three-dimensional solids."\r
  unidad_si: "kg/m^3"\r
  dimension: "ML^{-3}"\r
  is_vector: false\r
  components: null\r
  category: parameter\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar rho sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: "No se interpreta con signo direccional en distribuciones ordinarias."\r
      en: "It is not interpreted with directional sign in ordinary distributions."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - rho\r
  pedagogical_notes: "En este leaf, rho debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: dL\r
  symbol: "dL"\r
  nombre:\r
    es: "elemento diferencial de longitud"\r
    en: "differential length element"\r
  descripcion:\r
    es: "Elemento geom?trico infinitesimal de una distribuci?n lineal."\r
    en: "Infinitesimal geometric element of a linear distribution."\r
  unidad_si: "m"\r
  dimension: "L"\r
  is_vector: false\r
  components: null\r
  category: dimension\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar dL sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: "No se interpreta con signo direccional en distribuciones ordinarias."\r
      en: "It is not interpreted with directional sign in ordinary distributions."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - dL\r
  pedagogical_notes: "En este leaf, dL debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: dA\r
  symbol: "dA"\r
  nombre:\r
    es: "elemento diferencial de ?rea"\r
    en: "differential area element"\r
  descripcion:\r
    es: "Elemento geom?trico infinitesimal de una distribuci?n superficial."\r
    en: "Infinitesimal geometric element of a surface distribution."\r
  unidad_si: "m^2"\r
  dimension: "L^2"\r
  is_vector: false\r
  components: null\r
  category: dimension\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar dA sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: "No se interpreta con signo direccional en distribuciones ordinarias."\r
      en: "It is not interpreted with directional sign in ordinary distributions."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - dA\r
  pedagogical_notes: "En este leaf, dA debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
- id: dV\r
  symbol: "dV"\r
  nombre:\r
    es: "elemento diferencial de volumen"\r
    en: "differential volume element"\r
  descripcion:\r
    es: "Elemento geom?trico infinitesimal de una distribuci?n volum?trica."\r
    en: "Infinitesimal geometric element of a volumetric distribution."\r
  unidad_si: "m^3"\r
  dimension: "L^3"\r
  is_vector: false\r
  components: null\r
  category: dimension\r
  physical_role: physical_quantity\r
  used_in:\r
    - centro-de-masas-en-cuerpos-extendidos\r
  common_mistake: "Usar dV sin comprobar si pertenece al diferencial, a la coordenada local o al resultado del centro de masas."\r
  typical_range: "Depende del tama?o real del cuerpo y del origen elegido; debe quedar dentro de una escala geom?trica razonable."\r
  sign_behavior:\r
    has_sign: false\r
    meaning:\r
      es: "No se interpreta con signo direccional en distribuciones ordinarias."\r
      en: "It is not interpreted with directional sign in ordinary distributions."\r
  zero_behavior:\r
    allowed: true\r
    meaning:\r
      es: "Cero indica ausencia local, coincidencia con el origen o una componente anulada por simetr?a, seg?n la magnitud."\r
      en: "Zero indicates local absence, coincidence with the origin, or a component canceled by symmetry, depending on the quantity."\r
  value_nature:\r
    kind: scalar\r
    nonnegative_only: true\r
    expected_interval: "context-dependent"\r
  interpretation_role:\r
    primary_for:\r
      - centro-de-masas-en-cuerpos-extendidos\r
    secondary_for: []\r
  graph_binding:\r
    channels:\r
      - dV\r
  pedagogical_notes: "En este leaf, dV debe leerse dentro del modelo continuo: primero se fija el dominio y despu?s se integra."\r
`;export{e as default};
