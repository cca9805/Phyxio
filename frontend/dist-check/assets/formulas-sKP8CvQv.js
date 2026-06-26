const e=`version: "v5"\r
id: formulas_ondas_transversales_de_corte\r
\r
formulas:\r
  - id: velocidad_onda_s\r
    title:\r
      es: "Velocidad de onda S"\r
      en: "S-wave velocity"\r
    equation: "v_s = sqrt(G_shear / rho_medio)"\r
    latex: 'v_s = \\sqrt{G/\\rho}'\r
    rearrangements:\r
      - target: v_s\r
        equation: "v_s = sqrt(G_shear / rho_medio)"\r
        latex: 'v_s = \\sqrt{G/\\rho}'\r
    category: "fundamental"\r
    relation_type: "definition"\r
    physical_meaning:\r
      es: "La velocidad de corte aumenta con la rigidez transversal y disminuye con la inercia volumetrica."\r
      en: "Shear velocity increases with transverse stiffness and decreases with volumetric inertia."\r
    constraints:\r
      - "rho_medio > 0"\r
      - "G_shear > 0"\r
    validity:\r
      es: "Valida para solidos elasticos isotropos, homogeneos, pequenas deformaciones y longitud de onda grande frente a la microestructura."\r
      en: "Valid for isotropic homogeneous elastic solids, small deformation and wavelength large compared with the microstructure."\r
    dimension_check: "\`[M L^-1 T^-2] / [M L^-3] -> [L^2 T^-2]\` en relaciones de velocidad, y unidades coherentes en las derivadas."\r
    calculable: true\r
    motivo_no_calculable: ""\r
    used_in:\r
      - "calculo de ondas S"\r
      - "interpretacion de rigidez"\r
      - "lectura de graficos"\r
    interpretation_tags:\r
      - "onda_s"\r
      - "corte"\r
      - "solido_elastico"\r
    result_semantics:\r
      target: v_s\r
      kind: "scalar_positive"\r
      sign_meaning:\r
        es: "El resultado fisico se interpreta como magnitud positiva."\r
        en: "The physical result is interpreted as a positive magnitude."\r
      absolute_value_meaning:\r
        es: "Un valor mayor indica una respuesta transversal mas intensa, mas rapida o mas resistente segun la magnitud objetivo."\r
        en: "A larger value indicates a stronger, faster or more resistant transverse response depending on the target magnitude."\r
    domain_checks:\r
      - "Comprobar que el medio tiene rigidez de corte distinta de cero."\r
      - "Comprobar que las entradas son positivas y estan en unidades SI."\r
    coherence_checks:\r
      - "La velocidad S debe ser menor que la velocidad P del mismo medio."\r
      - "El modelo deja de ser fiable si domina la dispersion o la anisotropia."\r
    graph_implications:\r
      - "La curva principal crece con la rigidez de corte."\r
      - "La lectura del punto operativo debe mantenerse en el dominio de solido elastico."\r
    pedagogical_triggers:\r
      - "Confusion entre onda transversal y onda longitudinal."\r
      - "Uso de formulas de fluidos donde no existe rigidez de corte."\r
\r
  - id: longitud_onda_transversal\r
    title:\r
      es: "Longitud de onda transversal"\r
      en: "Transverse wavelength"\r
    equation: "lambda_s = v_s / f_onda"\r
    latex: '\\lambda_s = v_s/f'\r
    rearrangements:\r
      - target: lambda_s\r
        equation: "lambda_s = v_s / f_onda"\r
        latex: '\\lambda_s = v_s/f'\r
    category: "derived"\r
    relation_type: "kinematic_relation"\r
    physical_meaning:\r
      es: "Relaciona escala espacial, velocidad de propagacion y ritmo temporal de la fuente."\r
      en: "Relates spatial scale, propagation speed and temporal source rate."\r
    constraints:\r
      - "rho_medio > 0"\r
      - "f_onda > 0"\r
    validity:\r
      es: "Valida para solidos elasticos isotropos, homogeneos, pequenas deformaciones y longitud de onda grande frente a la microestructura."\r
      en: "Valid for isotropic homogeneous elastic solids, small deformation and wavelength large compared with the microstructure."\r
    dimension_check: "\`[M L^-1 T^-2] / [M L^-3] -> [L^2 T^-2]\` en relaciones de velocidad, y unidades coherentes en las derivadas."\r
    calculable: true\r
    motivo_no_calculable: ""\r
    used_in:\r
      - "calculo de ondas S"\r
      - "interpretacion de rigidez"\r
      - "lectura de graficos"\r
    interpretation_tags:\r
      - "onda_s"\r
      - "corte"\r
      - "solido_elastico"\r
    result_semantics:\r
      target: lambda_s\r
      kind: "scalar_positive"\r
      sign_meaning:\r
        es: "El resultado fisico se interpreta como magnitud positiva."\r
        en: "The physical result is interpreted as a positive magnitude."\r
      absolute_value_meaning:\r
        es: "Un valor mayor indica una respuesta transversal mas intensa, mas rapida o mas resistente segun la magnitud objetivo."\r
        en: "A larger value indicates a stronger, faster or more resistant transverse response depending on the target magnitude."\r
    domain_checks:\r
      - "Comprobar que el medio tiene rigidez de corte distinta de cero."\r
      - "Comprobar que las entradas son positivas y estan en unidades SI."\r
    coherence_checks:\r
      - "La velocidad S debe ser menor que la velocidad P del mismo medio."\r
      - "El modelo deja de ser fiable si domina la dispersion o la anisotropia."\r
    graph_implications:\r
      - "La curva principal crece con la rigidez de corte."\r
      - "La lectura del punto operativo debe mantenerse en el dominio de solido elastico."\r
    pedagogical_triggers:\r
      - "Confusion entre onda transversal y onda longitudinal."\r
      - "Uso de formulas de fluidos donde no existe rigidez de corte."\r
\r
  - id: impedancia_transversal\r
    title:\r
      es: "Impedancia transversal"\r
      en: "Shear impedance"\r
    equation: "Z_s = rho_medio * v_s"\r
    latex: 'Z_s = \\rho v_s'\r
    rearrangements:\r
      - target: Z_s\r
        equation: "Z_s = rho_medio * v_s"\r
        latex: 'Z_s = \\rho v_s'\r
    category: "derived"\r
    relation_type: "definition"\r
    physical_meaning:\r
      es: "Resume la oposicion dinamica del medio a transmitir energia de corte."\r
      en: "Summarises the dynamic opposition of the medium to transmitting shear energy."\r
    constraints:\r
      - "rho_medio > 0"\r
    validity:\r
      es: "Valida para solidos elasticos isotropos, homogeneos, pequenas deformaciones y longitud de onda grande frente a la microestructura."\r
      en: "Valid for isotropic homogeneous elastic solids, small deformation and wavelength large compared with the microstructure."\r
    dimension_check: "\`[M L^-1 T^-2] / [M L^-3] -> [L^2 T^-2]\` en relaciones de velocidad, y unidades coherentes en las derivadas."\r
    calculable: true\r
    motivo_no_calculable: ""\r
    used_in:\r
      - "calculo de ondas S"\r
      - "interpretacion de rigidez"\r
      - "lectura de graficos"\r
    interpretation_tags:\r
      - "onda_s"\r
      - "corte"\r
      - "solido_elastico"\r
    result_semantics:\r
      target: Z_s\r
      kind: "scalar_positive"\r
      sign_meaning:\r
        es: "El resultado fisico se interpreta como magnitud positiva."\r
        en: "The physical result is interpreted as a positive magnitude."\r
      absolute_value_meaning:\r
        es: "Un valor mayor indica una respuesta transversal mas intensa, mas rapida o mas resistente segun la magnitud objetivo."\r
        en: "A larger value indicates a stronger, faster or more resistant transverse response depending on the target magnitude."\r
    domain_checks:\r
      - "Comprobar que el medio tiene rigidez de corte distinta de cero."\r
      - "Comprobar que las entradas son positivas y estan en unidades SI."\r
    coherence_checks:\r
      - "La velocidad S debe ser menor que la velocidad P del mismo medio."\r
      - "El modelo deja de ser fiable si domina la dispersion o la anisotropia."\r
    graph_implications:\r
      - "La curva principal crece con la rigidez de corte."\r
      - "La lectura del punto operativo debe mantenerse en el dominio de solido elastico."\r
    pedagogical_triggers:\r
      - "Confusion entre onda transversal y onda longitudinal."\r
      - "Uso de formulas de fluidos donde no existe rigidez de corte."\r
\r
  - id: relacion_vp_vs_poisson\r
    title:\r
      es: "Relacion P/S y Poisson"\r
      en: "P/S and Poisson relation"\r
    equation: "ratio_vp_vs = sqrt(2*(1-nu_poisson)/(1-2*nu_poisson))"\r
    latex: 'v_p/v_s = \\sqrt{2(1-\\nu)/(1-2\\nu)}'\r
    rearrangements:\r
      - target: ratio_vp_vs\r
        equation: "ratio_vp_vs = sqrt(2*(1-nu_poisson)/(1-2*nu_poisson))"\r
        latex: 'v_p/v_s = \\sqrt{2(1-\\nu)/(1-2\\nu)}'\r
    category: "structural"\r
    relation_type: "constitutive_relation"\r
    physical_meaning:\r
      es: "Conecta la separacion entre velocidades P y S con la compresibilidad elastica."\r
      en: "Connects the separation between P and S velocities with elastic compressibility."\r
    constraints:\r
      - "rho_medio > 0"\r
      - "0 <= nu_poisson < 0.5"\r
    validity:\r
      es: "Valida para solidos elasticos isotropos, homogeneos, pequenas deformaciones y longitud de onda grande frente a la microestructura."\r
      en: "Valid for isotropic homogeneous elastic solids, small deformation and wavelength large compared with the microstructure."\r
    dimension_check: "\`[M L^-1 T^-2] / [M L^-3] -> [L^2 T^-2]\` en relaciones de velocidad, y unidades coherentes en las derivadas."\r
    calculable: true\r
    motivo_no_calculable: ""\r
    used_in:\r
      - "calculo de ondas S"\r
      - "interpretacion de rigidez"\r
      - "lectura de graficos"\r
    interpretation_tags:\r
      - "onda_s"\r
      - "corte"\r
      - "solido_elastico"\r
    result_semantics:\r
      target: ratio_vp_vs\r
      kind: "scalar_positive"\r
      sign_meaning:\r
        es: "El resultado fisico se interpreta como magnitud positiva."\r
        en: "The physical result is interpreted as a positive magnitude."\r
      absolute_value_meaning:\r
        es: "Un valor mayor indica una respuesta transversal mas intensa, mas rapida o mas resistente segun la magnitud objetivo."\r
        en: "A larger value indicates a stronger, faster or more resistant transverse response depending on the target magnitude."\r
    domain_checks:\r
      - "Comprobar que el medio tiene rigidez de corte distinta de cero."\r
      - "Comprobar que las entradas son positivas y estan en unidades SI."\r
    coherence_checks:\r
      - "La velocidad S debe ser menor que la velocidad P del mismo medio."\r
      - "El modelo deja de ser fiable si domina la dispersion o la anisotropia."\r
    graph_implications:\r
      - "La curva principal crece con la rigidez de corte."\r
      - "La lectura del punto operativo debe mantenerse en el dominio de solido elastico."\r
    pedagogical_triggers:\r
      - "Confusion entre onda transversal y onda longitudinal."\r
      - "Uso de formulas de fluidos donde no existe rigidez de corte."\r
\r
  - id: energia_onda_transversal\r
    title:\r
      es: "Densidad de energia transversal"\r
      en: "Transverse energy density"\r
    equation: "u_s = 0.5 * rho_medio * omega_angular^2 * A_s^2"\r
    latex: 'u_s = \\frac12 \\rho \\omega^2 A_s^2'\r
    rearrangements:\r
      - target: u_s\r
        equation: "u_s = 0.5 * rho_medio * omega_angular^2 * A_s^2"\r
        latex: 'u_s = \\frac12 \\rho \\omega^2 A_s^2'\r
    category: "derived"\r
    relation_type: "energy_relation"\r
    physical_meaning:\r
      es: "Estima la energia almacenada por unidad de volumen en una oscilacion de corte armonica."\r
      en: "Estimates energy stored per unit volume in a harmonic shear oscillation."\r
    constraints:\r
      - "rho_medio > 0"\r
    validity:\r
      es: "Valida para solidos elasticos isotropos, homogeneos, pequenas deformaciones y longitud de onda grande frente a la microestructura."\r
      en: "Valid for isotropic homogeneous elastic solids, small deformation and wavelength large compared with the microstructure."\r
    dimension_check: "\`[M L^-1 T^-2] / [M L^-3] -> [L^2 T^-2]\` en relaciones de velocidad, y unidades coherentes en las derivadas."\r
    calculable: true\r
    motivo_no_calculable: ""\r
    used_in:\r
      - "calculo de ondas S"\r
      - "interpretacion de rigidez"\r
      - "lectura de graficos"\r
    interpretation_tags:\r
      - "onda_s"\r
      - "corte"\r
      - "solido_elastico"\r
    result_semantics:\r
      target: u_s\r
      kind: "scalar_positive"\r
      sign_meaning:\r
        es: "El resultado fisico se interpreta como magnitud positiva."\r
        en: "The physical result is interpreted as a positive magnitude."\r
      absolute_value_meaning:\r
        es: "Un valor mayor indica una respuesta transversal mas intensa, mas rapida o mas resistente segun la magnitud objetivo."\r
        en: "A larger value indicates a stronger, faster or more resistant transverse response depending on the target magnitude."\r
    domain_checks:\r
      - "Comprobar que el medio tiene rigidez de corte distinta de cero."\r
      - "Comprobar que las entradas son positivas y estan en unidades SI."\r
    coherence_checks:\r
      - "La velocidad S debe ser menor que la velocidad P del mismo medio."\r
      - "El modelo deja de ser fiable si domina la dispersion o la anisotropia."\r
    graph_implications:\r
      - "La curva principal crece con la rigidez de corte."\r
      - "La lectura del punto operativo debe mantenerse en el dominio de solido elastico."\r
    pedagogical_triggers:\r
      - "Confusion entre onda transversal y onda longitudinal."\r
      - "Uso de formulas de fluidos donde no existe rigidez de corte."\r
`;export{e as default};
