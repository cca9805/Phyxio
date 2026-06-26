const e=`version: "v5"\r
id: magnitudes_ondas_transversales_de_corte\r
\r
magnitudes:\r
  - id: v_s\r
    symbol: "v_s"\r
    nombre:\r
      es: "Velocidad de onda S"\r
      en: "S-wave velocity"\r
    descripcion:\r
      es: "Velocidad con la que avanza una perturbacion transversal de corte en un solido elastico."\r
      en: "Speed at which a transverse shear disturbance travels through an elastic solid."\r
    unidad_si: "m/s"\r
    dimension: "[L T^-1]"\r
    is_vector: false\r
    components: []\r
    category: "state"\r
    physical_role: "state"\r
    used_in:\r
      - "ondas transversales de corte"\r
      - "lectura de rigidez e inercia"\r
      - "validacion del modelo elastico"\r
    common_mistake: "Usar v_s como si perteneciera a una onda longitudinal o a un fluido sin rigidez de corte"\r
    typical_range: "30 m/s a 4500 m/s"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: "Se interpreta por su valor positivo dentro del modelo lineal."\r
        en: "It is interpreted through its positive value in the linear model."\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: "El valor nulo marca ausencia de respuesta observable o salida del regimen de propagacion."\r
        en: "The zero value marks no observable response or exit from the propagation regime."\r
    value_nature:\r
      kind: "scalar_unsigned"\r
      nonnegative_only: true\r
      expected_interval: "[0, inf)"\r
    interpretation_role:\r
      primary_for:\r
        - "lectura_fisica"\r
        - "coherencia"\r
      secondary_for:\r
        - "model_validity"\r
    graph_binding:\r
      channels:\r
        - "calculator"\r
        - "graph_reading"\r
    pedagogical_notes:\r
      es: "En este leaf, Velocidad de onda S debe leerse junto con rigidez, densidad y condicion de solido."\r
      en: "In this leaf, S-wave velocity must be read together with stiffness, density and the solid-medium condition."\r
\r
  - id: G_shear\r
    symbol: "G"\r
    nombre:\r
      es: "Modulo de cizalla"\r
      en: "Shear modulus"\r
    descripcion:\r
      es: "Rigidez del material frente a deformaciones de corte."\r
      en: "Material stiffness against shear deformation."\r
    unidad_si: "Pa"\r
    dimension: "[M L^-1 T^-2]"\r
    is_vector: false\r
    components: []\r
    category: "parameter"\r
    physical_role: "parameter"\r
    used_in:\r
      - "ondas transversales de corte"\r
      - "lectura de rigidez e inercia"\r
      - "validacion del modelo elastico"\r
    common_mistake: "Usar G como si perteneciera a una onda longitudinal o a un fluido sin rigidez de corte"\r
    typical_range: "10 MPa a 100 GPa"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: "Se interpreta por su valor positivo dentro del modelo lineal."\r
        en: "It is interpreted through its positive value in the linear model."\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: "El valor nulo marca ausencia de respuesta observable o salida del regimen de propagacion."\r
        en: "The zero value marks no observable response or exit from the propagation regime."\r
    value_nature:\r
      kind: "scalar_unsigned"\r
      nonnegative_only: true\r
      expected_interval: "[0, inf)"\r
    interpretation_role:\r
      primary_for:\r
        - "lectura_fisica"\r
        - "coherencia"\r
      secondary_for:\r
        - "model_validity"\r
    graph_binding:\r
      channels:\r
        - "calculator"\r
        - "graph_reading"\r
    pedagogical_notes:\r
      es: "En este leaf, Modulo de cizalla debe leerse junto con rigidez, densidad y condicion de solido."\r
      en: "In this leaf, Shear modulus must be read together with stiffness, density and the solid-medium condition."\r
\r
  - id: rho_medio\r
    symbol: "rho"\r
    nombre:\r
      es: "Densidad del medio"\r
      en: "Medium density"\r
    descripcion:\r
      es: "Masa por unidad de volumen que aporta inercia al movimiento transversal."\r
      en: "Mass per unit volume that supplies inertia to transverse motion."\r
    unidad_si: "kg/m^3"\r
    dimension: "[M L^-3]"\r
    is_vector: false\r
    components: []\r
    category: "parameter"\r
    physical_role: "parameter"\r
    used_in:\r
      - "ondas transversales de corte"\r
      - "lectura de rigidez e inercia"\r
      - "validacion del modelo elastico"\r
    common_mistake: "Usar rho como si perteneciera a una onda longitudinal o a un fluido sin rigidez de corte"\r
    typical_range: "500 kg/m^3 a 12000 kg/m^3"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: "Se interpreta por su valor positivo dentro del modelo lineal."\r
        en: "It is interpreted through its positive value in the linear model."\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: "El valor nulo marca ausencia de respuesta observable o salida del regimen de propagacion."\r
        en: "The zero value marks no observable response or exit from the propagation regime."\r
    value_nature:\r
      kind: "scalar_unsigned"\r
      nonnegative_only: true\r
      expected_interval: "[0, inf)"\r
    interpretation_role:\r
      primary_for:\r
        - "lectura_fisica"\r
        - "coherencia"\r
      secondary_for:\r
        - "model_validity"\r
    graph_binding:\r
      channels:\r
        - "calculator"\r
        - "graph_reading"\r
    pedagogical_notes:\r
      es: "En este leaf, Densidad del medio debe leerse junto con rigidez, densidad y condicion de solido."\r
      en: "In this leaf, Medium density must be read together with stiffness, density and the solid-medium condition."\r
\r
  - id: lambda_s\r
    symbol: "lambda_s"\r
    nombre:\r
      es: "Longitud de onda S"\r
      en: "S-wave wavelength"\r
    descripcion:\r
      es: "Separacion espacial entre dos puntos equivalentes de fase en la onda de corte."\r
      en: "Spatial separation between two equivalent phase points in the shear wave."\r
    unidad_si: "m"\r
    dimension: "[L]"\r
    is_vector: false\r
    components: []\r
    category: "derived"\r
    physical_role: "state"\r
    used_in:\r
      - "ondas transversales de corte"\r
      - "lectura de rigidez e inercia"\r
      - "validacion del modelo elastico"\r
    common_mistake: "Usar lambda_s como si perteneciera a una onda longitudinal o a un fluido sin rigidez de corte"\r
    typical_range: "micrometros a kilometros"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: "Se interpreta por su valor positivo dentro del modelo lineal."\r
        en: "It is interpreted through its positive value in the linear model."\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: "El valor nulo marca ausencia de respuesta observable o salida del regimen de propagacion."\r
        en: "The zero value marks no observable response or exit from the propagation regime."\r
    value_nature:\r
      kind: "scalar_unsigned"\r
      nonnegative_only: true\r
      expected_interval: "[0, inf)"\r
    interpretation_role:\r
      primary_for:\r
        - "lectura_fisica"\r
        - "coherencia"\r
      secondary_for:\r
        - "model_validity"\r
    graph_binding:\r
      channels:\r
        - "calculator"\r
        - "graph_reading"\r
    pedagogical_notes:\r
      es: "En este leaf, Longitud de onda S debe leerse junto con rigidez, densidad y condicion de solido."\r
      en: "In this leaf, S-wave wavelength must be read together with stiffness, density and the solid-medium condition."\r
\r
  - id: f_onda\r
    symbol: "f"\r
    nombre:\r
      es: "Frecuencia de la onda"\r
      en: "Wave frequency"\r
    descripcion:\r
      es: "Ritmo temporal impuesto por la fuente que genera la perturbacion."\r
      en: "Temporal rate imposed by the source that generates the disturbance."\r
    unidad_si: "Hz"\r
    dimension: "[T^-1]"\r
    is_vector: false\r
    components: []\r
    category: "parameter"\r
    physical_role: "parameter"\r
    used_in:\r
      - "ondas transversales de corte"\r
      - "lectura de rigidez e inercia"\r
      - "validacion del modelo elastico"\r
    common_mistake: "Usar f como si perteneciera a una onda longitudinal o a un fluido sin rigidez de corte"\r
    typical_range: "0.01 Hz a 100 MHz"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: "Se interpreta por su valor positivo dentro del modelo lineal."\r
        en: "It is interpreted through its positive value in the linear model."\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: "El valor nulo marca ausencia de respuesta observable o salida del regimen de propagacion."\r
        en: "The zero value marks no observable response or exit from the propagation regime."\r
    value_nature:\r
      kind: "scalar_unsigned"\r
      nonnegative_only: true\r
      expected_interval: "[0, inf)"\r
    interpretation_role:\r
      primary_for:\r
        - "lectura_fisica"\r
        - "coherencia"\r
      secondary_for:\r
        - "model_validity"\r
    graph_binding:\r
      channels:\r
        - "calculator"\r
        - "graph_reading"\r
    pedagogical_notes:\r
      es: "En este leaf, Frecuencia de la onda debe leerse junto con rigidez, densidad y condicion de solido."\r
      en: "In this leaf, Wave frequency must be read together with stiffness, density and the solid-medium condition."\r
\r
  - id: Z_s\r
    symbol: "Z_s"\r
    nombre:\r
      es: "Impedancia transversal"\r
      en: "Shear impedance"\r
    descripcion:\r
      es: "Resistencia dinamica del medio al paso de una onda S."\r
      en: "Dynamic resistance of the medium to the passage of an S wave."\r
    unidad_si: "kg/(m^2 s)"\r
    dimension: "[M L^-2 T^-1]"\r
    is_vector: false\r
    components: []\r
    category: "derived"\r
    physical_role: "state"\r
    used_in:\r
      - "ondas transversales de corte"\r
      - "lectura de rigidez e inercia"\r
      - "validacion del modelo elastico"\r
    common_mistake: "Usar Z_s como si perteneciera a una onda longitudinal o a un fluido sin rigidez de corte"\r
    typical_range: "10^5 a 10^8 kg/(m^2 s)"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: "Se interpreta por su valor positivo dentro del modelo lineal."\r
        en: "It is interpreted through its positive value in the linear model."\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: "El valor nulo marca ausencia de respuesta observable o salida del regimen de propagacion."\r
        en: "The zero value marks no observable response or exit from the propagation regime."\r
    value_nature:\r
      kind: "scalar_unsigned"\r
      nonnegative_only: true\r
      expected_interval: "[0, inf)"\r
    interpretation_role:\r
      primary_for:\r
        - "lectura_fisica"\r
        - "coherencia"\r
      secondary_for:\r
        - "model_validity"\r
    graph_binding:\r
      channels:\r
        - "calculator"\r
        - "graph_reading"\r
    pedagogical_notes:\r
      es: "En este leaf, Impedancia transversal debe leerse junto con rigidez, densidad y condicion de solido."\r
      en: "In this leaf, Shear impedance must be read together with stiffness, density and the solid-medium condition."\r
\r
  - id: v_p\r
    symbol: "v_p"\r
    nombre:\r
      es: "Velocidad de onda P"\r
      en: "P-wave velocity"\r
    descripcion:\r
      es: "Velocidad longitudinal usada para comparar el comportamiento P y S."\r
      en: "Longitudinal velocity used to compare P and S behaviour."\r
    unidad_si: "m/s"\r
    dimension: "[L T^-1]"\r
    is_vector: false\r
    components: []\r
    category: "reference"\r
    physical_role: "parameter"\r
    used_in:\r
      - "ondas transversales de corte"\r
      - "lectura de rigidez e inercia"\r
      - "validacion del modelo elastico"\r
    common_mistake: "Usar v_p como si perteneciera a una onda longitudinal o a un fluido sin rigidez de corte"\r
    typical_range: "300 m/s a 9000 m/s"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: "Se interpreta por su valor positivo dentro del modelo lineal."\r
        en: "It is interpreted through its positive value in the linear model."\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: "El valor nulo marca ausencia de respuesta observable o salida del regimen de propagacion."\r
        en: "The zero value marks no observable response or exit from the propagation regime."\r
    value_nature:\r
      kind: "scalar_unsigned"\r
      nonnegative_only: true\r
      expected_interval: "[0, inf)"\r
    interpretation_role:\r
      primary_for:\r
        - "lectura_fisica"\r
        - "coherencia"\r
      secondary_for:\r
        - "model_validity"\r
    graph_binding:\r
      channels:\r
        - "calculator"\r
        - "graph_reading"\r
    pedagogical_notes:\r
      es: "En este leaf, Velocidad de onda P debe leerse junto con rigidez, densidad y condicion de solido."\r
      en: "In this leaf, P-wave velocity must be read together with stiffness, density and the solid-medium condition."\r
\r
  - id: nu_poisson\r
    symbol: "nu"\r
    nombre:\r
      es: "Coeficiente de Poisson"\r
      en: "Poisson ratio"\r
    descripcion:\r
      es: "Parametro elastico que conecta velocidades longitudinales y transversales."\r
      en: "Elastic parameter connecting longitudinal and transverse velocities."\r
    unidad_si: "adimensional"\r
    dimension: "[1]"\r
    is_vector: false\r
    components: []\r
    category: "derived"\r
    physical_role: "state"\r
    used_in:\r
      - "ondas transversales de corte"\r
      - "lectura de rigidez e inercia"\r
      - "validacion del modelo elastico"\r
    common_mistake: "Usar nu como si perteneciera a una onda longitudinal o a un fluido sin rigidez de corte"\r
    typical_range: "0 a 0.5"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: "Se interpreta por su valor positivo dentro del modelo lineal."\r
        en: "It is interpreted through its positive value in the linear model."\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: "El valor nulo marca ausencia de respuesta observable o salida del regimen de propagacion."\r
        en: "The zero value marks no observable response or exit from the propagation regime."\r
    value_nature:\r
      kind: "scalar_unsigned"\r
      nonnegative_only: true\r
      expected_interval: "[0, inf)"\r
    interpretation_role:\r
      primary_for:\r
        - "lectura_fisica"\r
        - "coherencia"\r
      secondary_for:\r
        - "model_validity"\r
    graph_binding:\r
      channels:\r
        - "calculator"\r
        - "graph_reading"\r
    pedagogical_notes:\r
      es: "En este leaf, Coeficiente de Poisson debe leerse junto con rigidez, densidad y condicion de solido."\r
      en: "In this leaf, Poisson ratio must be read together with stiffness, density and the solid-medium condition."\r
\r
  - id: u_s\r
    symbol: "u_s"\r
    nombre:\r
      es: "Densidad de energia transversal"\r
      en: "Shear energy density"\r
    descripcion:\r
      es: "Energia por unidad de volumen asociada a la oscilacion transversal."\r
      en: "Energy per unit volume associated with transverse oscillation."\r
    unidad_si: "J/m^3"\r
    dimension: "[M L^-1 T^-2]"\r
    is_vector: false\r
    components: []\r
    category: "derived"\r
    physical_role: "state"\r
    used_in:\r
      - "ondas transversales de corte"\r
      - "lectura de rigidez e inercia"\r
      - "validacion del modelo elastico"\r
    common_mistake: "Usar u_s como si perteneciera a una onda longitudinal o a un fluido sin rigidez de corte"\r
    typical_range: "muy variable segun amplitud y frecuencia"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: "Se interpreta por su valor positivo dentro del modelo lineal."\r
        en: "It is interpreted through its positive value in the linear model."\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: "El valor nulo marca ausencia de respuesta observable o salida del regimen de propagacion."\r
        en: "The zero value marks no observable response or exit from the propagation regime."\r
    value_nature:\r
      kind: "scalar_unsigned"\r
      nonnegative_only: true\r
      expected_interval: "[0, inf)"\r
    interpretation_role:\r
      primary_for:\r
        - "lectura_fisica"\r
        - "coherencia"\r
      secondary_for:\r
        - "model_validity"\r
    graph_binding:\r
      channels:\r
        - "calculator"\r
        - "graph_reading"\r
    pedagogical_notes:\r
      es: "En este leaf, Densidad de energia transversal debe leerse junto con rigidez, densidad y condicion de solido."\r
      en: "In this leaf, Shear energy density must be read together with stiffness, density and the solid-medium condition."\r
\r
  - id: omega_angular\r
    symbol: "omega"\r
    nombre:\r
      es: "Frecuencia angular"\r
      en: "Angular frequency"\r
    descripcion:\r
      es: "Ritmo angular equivalente de la oscilacion transversal."\r
      en: "Angular rate equivalent to the transverse oscillation."\r
    unidad_si: "rad/s"\r
    dimension: "[T^-1]"\r
    is_vector: false\r
    components: []\r
    category: "parameter"\r
    physical_role: "parameter"\r
    used_in:\r
      - "ondas transversales de corte"\r
      - "lectura de rigidez e inercia"\r
      - "validacion del modelo elastico"\r
    common_mistake: "Usar omega como si perteneciera a una onda longitudinal o a un fluido sin rigidez de corte"\r
    typical_range: "0.1 rad/s a 10^9 rad/s"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: "Se interpreta por su valor positivo dentro del modelo lineal."\r
        en: "It is interpreted through its positive value in the linear model."\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: "El valor nulo marca ausencia de respuesta observable o salida del regimen de propagacion."\r
        en: "The zero value marks no observable response or exit from the propagation regime."\r
    value_nature:\r
      kind: "scalar_unsigned"\r
      nonnegative_only: true\r
      expected_interval: "[0, inf)"\r
    interpretation_role:\r
      primary_for:\r
        - "lectura_fisica"\r
        - "coherencia"\r
      secondary_for:\r
        - "model_validity"\r
    graph_binding:\r
      channels:\r
        - "calculator"\r
        - "graph_reading"\r
    pedagogical_notes:\r
      es: "En este leaf, Frecuencia angular debe leerse junto con rigidez, densidad y condicion de solido."\r
      en: "In this leaf, Angular frequency must be read together with stiffness, density and the solid-medium condition."\r
\r
  - id: A_s\r
    symbol: "A_s"\r
    nombre:\r
      es: "Amplitud transversal"\r
      en: "Transverse amplitude"\r
    descripcion:\r
      es: "Maximo desplazamiento de particula perpendicular a la propagacion."\r
      en: "Maximum particle displacement perpendicular to propagation."\r
    unidad_si: "m"\r
    dimension: "[L]"\r
    is_vector: false\r
    components: []\r
    category: "state"\r
    physical_role: "state"\r
    used_in:\r
      - "ondas transversales de corte"\r
      - "lectura de rigidez e inercia"\r
      - "validacion del modelo elastico"\r
    common_mistake: "Usar A_s como si perteneciera a una onda longitudinal o a un fluido sin rigidez de corte"\r
    typical_range: "nanometros a centimetros"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: "Se interpreta por su valor positivo dentro del modelo lineal."\r
        en: "It is interpreted through its positive value in the linear model."\r
    zero_behavior:\r
      allowed: true\r
      meaning:\r
        es: "El valor nulo marca ausencia de respuesta observable o salida del regimen de propagacion."\r
        en: "The zero value marks no observable response or exit from the propagation regime."\r
    value_nature:\r
      kind: "scalar_unsigned"\r
      nonnegative_only: true\r
      expected_interval: "[0, inf)"\r
    interpretation_role:\r
      primary_for:\r
        - "lectura_fisica"\r
        - "coherencia"\r
      secondary_for:\r
        - "model_validity"\r
    graph_binding:\r
      channels:\r
        - "calculator"\r
        - "graph_reading"\r
    pedagogical_notes:\r
      es: "En este leaf, Amplitud transversal debe leerse junto con rigidez, densidad y condicion de solido."\r
      en: "In this leaf, Transverse amplitude must be read together with stiffness, density and the solid-medium condition."\r
\r
  - id: ratio_vp_vs\r
    symbol: "R"\r
    nombre:\r
      es: "Cociente de velocidades P/S"\r
      en: "P/S velocity ratio"\r
    descripcion:\r
      es: "Comparacion adimensional entre velocidad longitudinal y velocidad de corte."\r
      en: "Dimensionless comparison between longitudinal and shear velocity."\r
    unidad_si: "adimensional"\r
    dimension: "[1]"\r
    is_vector: false\r
    components: []\r
    category: "derived"\r
    physical_role: "state"\r
    used_in:\r
      - "ondas transversales de corte"\r
      - "lectura de rigidez e inercia"\r
      - "validacion del modelo elastico"\r
    common_mistake: "Usar R como si perteneciera a una onda longitudinal o a un fluido sin rigidez de corte"\r
    typical_range: "1.4 a 4"\r
    sign_behavior:\r
      has_sign: false\r
      meaning:\r
        es: "Se interpreta por su valor positivo dentro del modelo lineal."\r
        en: "It is interpreted through its positive value in the linear model."\r
    zero_behavior:\r
      allowed: false\r
      meaning:\r
        es: "El valor nulo marca ausencia de respuesta observable o salida del regimen de propagacion."\r
        en: "The zero value marks no observable response or exit from the propagation regime."\r
    value_nature:\r
      kind: "scalar_unsigned"\r
      nonnegative_only: true\r
      expected_interval: "[0, inf)"\r
    interpretation_role:\r
      primary_for:\r
        - "lectura_fisica"\r
        - "coherencia"\r
      secondary_for:\r
        - "model_validity"\r
    graph_binding:\r
      channels:\r
        - "calculator"\r
        - "graph_reading"\r
    pedagogical_notes:\r
      es: "En este leaf, Cociente de velocidades P/S debe leerse junto con rigidez, densidad y condicion de solido."\r
      en: "In this leaf, P/S velocity ratio must be read together with stiffness, density and the solid-medium condition."\r
`;export{e as default};
