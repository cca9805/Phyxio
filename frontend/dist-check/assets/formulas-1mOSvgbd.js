const e=`- id: M\r
  title:\r
    es: "Masa total continua"\r
    en: "Continuous total mass"\r
  equation: "M = integral(dm)"\r
  latex: 'M = \\int dm'\r
  rearrangements:\r
    - target: M\r
      equation: "M = integral(dm)"\r
      latex: 'M = \\int dm'\r
  category: structural\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: "Suma continua de todos los elementos diferenciales de masa del cuerpo extendido."\r
    en: "Continuous sum of all differential mass elements in the extended body."\r
  constraints:\r
    - expr: "M > 0"\r
      message:\r
        es: "La masa total del cuerpo extendido debe ser positiva y finita."\r
        en: "The total mass of the extended body must be positive and finite."\r
  validity:\r
    es: "V?lida para distribuciones continuas de masa con densidad integrable y dominio geom?trico bien definido."\r
    en: "Valid for continuous mass distributions with integrable density and a well-defined geometric domain."\r
  dimension_check: "M"\r
  calculable: false\r
  motivo_no_calculable:\r
    es: "Requiere especificar funci?n de densidad, dominio de integraci?n y parametrizaci?n geom?trica."\r
    en: "Requires specifying a density function, integration domain, and geometric parametrization."\r
  used_in:\r
    - theory\r
    - examples\r
    - interpretation\r
  interpretation_tags:\r
    - continuous_distribution\r
    - extended_body\r
    - integral_center_of_mass\r
  result_semantics:\r
    target: M\r
    kind: mass\r
    sign_meaning:\r
      es: "El signo indica posici?n respecto al origen y al sentido positivo elegido."\r
      en: "The sign indicates position relative to the origin and chosen positive direction."\r
    absolute_value_meaning:\r
      es: "El valor absoluto mide distancia o cantidad acumulada seg?n la magnitud objetivo."\r
      en: "The absolute value measures distance or accumulated amount according to the target quantity."\r
  domain_checks:\r
    - expr: "M > 0"\r
      message:\r
        es: "Sin masa total positiva no existe un centro de masas f?sico."\r
        en: "Without positive total mass there is no physical center of mass."\r
  coherence_checks:\r
    - expr: "true"\r
      severity: ok\r
      message:\r
        es: "El resultado debe compararse con simetr?as, l?mites geom?tricos y zonas de mayor densidad."\r
        en: "The result must be compared with symmetries, geometric bounds, and denser regions."\r
  graph_implications:\r
    - es: "El gr?fico debe mostrar el desplazamiento del centro de masas hacia la regi?n que m?s aporta al primer momento de masa."\r
      en: "The graph should show the center of mass shifting toward the region that contributes most to the first mass moment."\r
  pedagogical_triggers:\r
    - detect_when: "true"\r
      message:\r
        es: "Antes de integrar, identifica el diferencial de masa y las simetr?as que anulan componentes."\r
        en: "Before integrating, identify the mass differential and the symmetries that cancel components."\r
\r
- id: rcm\r
  title:\r
    es: "Vector centro de masas continuo"\r
    en: "Continuous center-of-mass vector"\r
  equation: "rcm = (1/M) * integral(r * dm)"\r
  latex: '\\vec r_{cm} = \\frac{1}{M}\\int \\vec r\\,dm'\r
  rearrangements:\r
    - target: rcm\r
      equation: "rcm = (1/M) * integral(r * dm)"\r
      latex: '\\vec r_{cm} = \\frac{1}{M}\\int \\vec r\\,dm'\r
  category: fundamental\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: "Define la posici?n vectorial que resume el primer momento de masa de todo el cuerpo."\r
    en: "Defines the vector position summarizing the first mass moment of the whole body."\r
  constraints:\r
    - expr: "M > 0"\r
      message:\r
        es: "La masa total del cuerpo extendido debe ser positiva y finita."\r
        en: "The total mass of the extended body must be positive and finite."\r
  validity:\r
    es: "V?lida para distribuciones continuas de masa con densidad integrable y dominio geom?trico bien definido."\r
    en: "Valid for continuous mass distributions with integrable density and a well-defined geometric domain."\r
  dimension_check: "L"\r
  calculable: false\r
  motivo_no_calculable:\r
    es: "Requiere especificar funci?n de densidad, dominio de integraci?n y parametrizaci?n geom?trica."\r
    en: "Requires specifying a density function, integration domain, and geometric parametrization."\r
  used_in:\r
    - theory\r
    - examples\r
    - interpretation\r
  interpretation_tags:\r
    - continuous_distribution\r
    - extended_body\r
    - integral_center_of_mass\r
  result_semantics:\r
    target: rcm\r
    kind: vector_position\r
    sign_meaning:\r
      es: "El signo indica posici?n respecto al origen y al sentido positivo elegido."\r
      en: "The sign indicates position relative to the origin and chosen positive direction."\r
    absolute_value_meaning:\r
      es: "El valor absoluto mide distancia o cantidad acumulada seg?n la magnitud objetivo."\r
      en: "The absolute value measures distance or accumulated amount according to the target quantity."\r
  domain_checks:\r
    - expr: "M > 0"\r
      message:\r
        es: "Sin masa total positiva no existe un centro de masas f?sico."\r
        en: "Without positive total mass there is no physical center of mass."\r
  coherence_checks:\r
    - expr: "true"\r
      severity: ok\r
      message:\r
        es: "El resultado debe compararse con simetr?as, l?mites geom?tricos y zonas de mayor densidad."\r
        en: "The result must be compared with symmetries, geometric bounds, and denser regions."\r
  graph_implications:\r
    - es: "El gr?fico debe mostrar el desplazamiento del centro de masas hacia la regi?n que m?s aporta al primer momento de masa."\r
      en: "The graph should show the center of mass shifting toward the region that contributes most to the first mass moment."\r
  pedagogical_triggers:\r
    - detect_when: "true"\r
      message:\r
        es: "Antes de integrar, identifica el diferencial de masa y las simetr?as que anulan componentes."\r
        en: "Before integrating, identify the mass differential and the symmetries that cancel components."\r
\r
- id: xcm\r
  title:\r
    es: "Coordenada x del centro de masas"\r
    en: "x-coordinate of the center of mass"\r
  equation: "xcm = (1/M) * integral(x * dm)"\r
  latex: 'x_{cm} = \\frac{1}{M}\\int x\\,dm'\r
  rearrangements:\r
    - target: xcm\r
      equation: "xcm = (1/M) * integral(x * dm)"\r
      latex: 'x_{cm} = \\frac{1}{M}\\int x\\,dm'\r
  category: derived\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: "Proyecci?n horizontal del centro de masas obtenida ponderando cada elemento por su coordenada x."\r
    en: "Horizontal projection of the center of mass obtained by weighting each element by its x-coordinate."\r
  constraints:\r
    - expr: "M > 0"\r
      message:\r
        es: "La masa total del cuerpo extendido debe ser positiva y finita."\r
        en: "The total mass of the extended body must be positive and finite."\r
  validity:\r
    es: "V?lida para distribuciones continuas de masa con densidad integrable y dominio geom?trico bien definido."\r
    en: "Valid for continuous mass distributions with integrable density and a well-defined geometric domain."\r
  dimension_check: "L"\r
  calculable: false\r
  motivo_no_calculable:\r
    es: "Requiere especificar funci?n de densidad, dominio de integraci?n y parametrizaci?n geom?trica."\r
    en: "Requires specifying a density function, integration domain, and geometric parametrization."\r
  used_in:\r
    - theory\r
    - examples\r
    - interpretation\r
  interpretation_tags:\r
    - continuous_distribution\r
    - extended_body\r
    - integral_center_of_mass\r
  result_semantics:\r
    target: xcm\r
    kind: coordinate\r
    sign_meaning:\r
      es: "El signo indica posici?n respecto al origen y al sentido positivo elegido."\r
      en: "The sign indicates position relative to the origin and chosen positive direction."\r
    absolute_value_meaning:\r
      es: "El valor absoluto mide distancia o cantidad acumulada seg?n la magnitud objetivo."\r
      en: "The absolute value measures distance or accumulated amount according to the target quantity."\r
  domain_checks:\r
    - expr: "M > 0"\r
      message:\r
        es: "Sin masa total positiva no existe un centro de masas f?sico."\r
        en: "Without positive total mass there is no physical center of mass."\r
  coherence_checks:\r
    - expr: "true"\r
      severity: ok\r
      message:\r
        es: "El resultado debe compararse con simetr?as, l?mites geom?tricos y zonas de mayor densidad."\r
        en: "The result must be compared with symmetries, geometric bounds, and denser regions."\r
  graph_implications:\r
    - es: "El gr?fico debe mostrar el desplazamiento del centro de masas hacia la regi?n que m?s aporta al primer momento de masa."\r
      en: "The graph should show the center of mass shifting toward the region that contributes most to the first mass moment."\r
  pedagogical_triggers:\r
    - detect_when: "true"\r
      message:\r
        es: "Antes de integrar, identifica el diferencial de masa y las simetr?as que anulan componentes."\r
        en: "Before integrating, identify the mass differential and the symmetries that cancel components."\r
\r
- id: ycm\r
  title:\r
    es: "Coordenada y del centro de masas"\r
    en: "y-coordinate of the center of mass"\r
  equation: "ycm = (1/M) * integral(y * dm)"\r
  latex: 'y_{cm} = \\frac{1}{M}\\int y\\,dm'\r
  rearrangements:\r
    - target: ycm\r
      equation: "ycm = (1/M) * integral(y * dm)"\r
      latex: 'y_{cm} = \\frac{1}{M}\\int y\\,dm'\r
  category: derived\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: "Proyecci?n vertical o transversal del centro de masas obtenida con la coordenada y."\r
    en: "Vertical or transverse projection of the center of mass obtained with the y-coordinate."\r
  constraints:\r
    - expr: "M > 0"\r
      message:\r
        es: "La masa total del cuerpo extendido debe ser positiva y finita."\r
        en: "The total mass of the extended body must be positive and finite."\r
  validity:\r
    es: "V?lida para distribuciones continuas de masa con densidad integrable y dominio geom?trico bien definido."\r
    en: "Valid for continuous mass distributions with integrable density and a well-defined geometric domain."\r
  dimension_check: "L"\r
  calculable: false\r
  motivo_no_calculable:\r
    es: "Requiere especificar funci?n de densidad, dominio de integraci?n y parametrizaci?n geom?trica."\r
    en: "Requires specifying a density function, integration domain, and geometric parametrization."\r
  used_in:\r
    - theory\r
    - examples\r
    - interpretation\r
  interpretation_tags:\r
    - continuous_distribution\r
    - extended_body\r
    - integral_center_of_mass\r
  result_semantics:\r
    target: ycm\r
    kind: coordinate\r
    sign_meaning:\r
      es: "El signo indica posici?n respecto al origen y al sentido positivo elegido."\r
      en: "The sign indicates position relative to the origin and chosen positive direction."\r
    absolute_value_meaning:\r
      es: "El valor absoluto mide distancia o cantidad acumulada seg?n la magnitud objetivo."\r
      en: "The absolute value measures distance or accumulated amount according to the target quantity."\r
  domain_checks:\r
    - expr: "M > 0"\r
      message:\r
        es: "Sin masa total positiva no existe un centro de masas f?sico."\r
        en: "Without positive total mass there is no physical center of mass."\r
  coherence_checks:\r
    - expr: "true"\r
      severity: ok\r
      message:\r
        es: "El resultado debe compararse con simetr?as, l?mites geom?tricos y zonas de mayor densidad."\r
        en: "The result must be compared with symmetries, geometric bounds, and denser regions."\r
  graph_implications:\r
    - es: "El gr?fico debe mostrar el desplazamiento del centro de masas hacia la regi?n que m?s aporta al primer momento de masa."\r
      en: "The graph should show the center of mass shifting toward the region that contributes most to the first mass moment."\r
  pedagogical_triggers:\r
    - detect_when: "true"\r
      message:\r
        es: "Antes de integrar, identifica el diferencial de masa y las simetr?as que anulan componentes."\r
        en: "Before integrating, identify the mass differential and the symmetries that cancel components."\r
\r
- id: zcm\r
  title:\r
    es: "Coordenada z del centro de masas"\r
    en: "z-coordinate of the center of mass"\r
  equation: "zcm = (1/M) * integral(z * dm)"\r
  latex: 'z_{cm} = \\frac{1}{M}\\int z\\,dm'\r
  rearrangements:\r
    - target: zcm\r
      equation: "zcm = (1/M) * integral(z * dm)"\r
      latex: 'z_{cm} = \\frac{1}{M}\\int z\\,dm'\r
  category: derived\r
  relation_type: integral_relation\r
  physical_meaning:\r
    es: "Componente espacial restante del centro de masas para cuerpos tridimensionales."\r
    en: "Remaining spatial component of the center of mass for three-dimensional bodies."\r
  constraints:\r
    - expr: "M > 0"\r
      message:\r
        es: "La masa total del cuerpo extendido debe ser positiva y finita."\r
        en: "The total mass of the extended body must be positive and finite."\r
  validity:\r
    es: "V?lida para distribuciones continuas de masa con densidad integrable y dominio geom?trico bien definido."\r
    en: "Valid for continuous mass distributions with integrable density and a well-defined geometric domain."\r
  dimension_check: "L"\r
  calculable: false\r
  motivo_no_calculable:\r
    es: "Requiere especificar funci?n de densidad, dominio de integraci?n y parametrizaci?n geom?trica."\r
    en: "Requires specifying a density function, integration domain, and geometric parametrization."\r
  used_in:\r
    - theory\r
    - examples\r
    - interpretation\r
  interpretation_tags:\r
    - continuous_distribution\r
    - extended_body\r
    - integral_center_of_mass\r
  result_semantics:\r
    target: zcm\r
    kind: coordinate\r
    sign_meaning:\r
      es: "El signo indica posici?n respecto al origen y al sentido positivo elegido."\r
      en: "The sign indicates position relative to the origin and chosen positive direction."\r
    absolute_value_meaning:\r
      es: "El valor absoluto mide distancia o cantidad acumulada seg?n la magnitud objetivo."\r
      en: "The absolute value measures distance or accumulated amount according to the target quantity."\r
  domain_checks:\r
    - expr: "M > 0"\r
      message:\r
        es: "Sin masa total positiva no existe un centro de masas f?sico."\r
        en: "Without positive total mass there is no physical center of mass."\r
  coherence_checks:\r
    - expr: "true"\r
      severity: ok\r
      message:\r
        es: "El resultado debe compararse con simetr?as, l?mites geom?tricos y zonas de mayor densidad."\r
        en: "The result must be compared with symmetries, geometric bounds, and denser regions."\r
  graph_implications:\r
    - es: "El gr?fico debe mostrar el desplazamiento del centro de masas hacia la regi?n que m?s aporta al primer momento de masa."\r
      en: "The graph should show the center of mass shifting toward the region that contributes most to the first mass moment."\r
  pedagogical_triggers:\r
    - detect_when: "true"\r
      message:\r
        es: "Antes de integrar, identifica el diferencial de masa y las simetr?as que anulan componentes."\r
        en: "Before integrating, identify the mass differential and the symmetries that cancel components."\r
\r
- id: dm_linear\r
  title:\r
    es: "Elemento de masa lineal"\r
    en: "Linear mass element"\r
  equation: "dm = lambda * dL"\r
  latex: 'dm = \\lambda\\,dL'\r
  rearrangements:\r
    - target: dm\r
      equation: "dm = lambda * dL"\r
      latex: 'dm = \\lambda\\,dL'\r
  category: auxiliary\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: "Relaciona el elemento de masa con la densidad lineal de una barra, hilo o arco delgado."\r
    en: "Relates the mass element to the linear density of a thin rod, wire, or arc."\r
  constraints:\r
    - expr: "true"\r
      message:\r
        es: "El diferencial geom?trico debe corresponder a la dimensi?n real del cuerpo."\r
        en: "The geometric differential must match the body's actual dimension."\r
  validity:\r
    es: "V?lida cuando el cuerpo se modela con esta dimensi?n geom?trica dominante."\r
    en: "Valid when the body is modeled with this dominant geometric dimension."\r
  dimension_check: "M"\r
  calculable: false\r
  motivo_no_calculable:\r
    es: "Es una relaci?n diferencial que se usa dentro de integrales, no un c?lculo cerrado por s? solo."\r
    en: "It is a differential relation used inside integrals, not a closed calculation by itself."\r
  used_in:\r
    - theory\r
    - examples\r
    - interpretation\r
  interpretation_tags:\r
    - mass_element\r
    - linear_density\r
  result_semantics:\r
    target: dm\r
    kind: differential_mass\r
    sign_meaning:\r
      es: "Un elemento de masa f?sico no debe ser negativo en una distribuci?n material ordinaria."\r
      en: "A physical mass element should not be negative in an ordinary material distribution."\r
    absolute_value_meaning:\r
      es: "Cantidad infinitesimal de masa asociada a un elemento geom?trico."\r
      en: "Infinitesimal amount of mass associated with a geometric element."\r
  domain_checks:\r
    - expr: "true"\r
      message:\r
        es: "Comprueba que la densidad y el diferencial usan unidades compatibles."\r
        en: "Check that density and differential use compatible units."\r
  coherence_checks:\r
    - expr: "true"\r
      severity: ok\r
      message:\r
        es: "El producto densidad por diferencial debe tener dimensi?n de masa."\r
        en: "Density times differential must have mass dimension."\r
  graph_implications:\r
    - es: "El gr?fico debe indicar si el cuerpo se trata como barra, l?mina o s?lido."\r
      en: "The graph should indicate whether the body is treated as a rod, lamina, or solid."\r
  pedagogical_triggers:\r
    - detect_when: "true"\r
      message:\r
        es: "No sustituyas la masa total donde debe aparecer el elemento diferencial dm."\r
        en: "Do not substitute total mass where the differential element dm must appear."\r
\r
- id: dm_surface\r
  title:\r
    es: "Elemento de masa superficial"\r
    en: "Surface mass element"\r
  equation: "dm = sigma * dA"\r
  latex: 'dm = \\sigma\\,dA'\r
  rearrangements:\r
    - target: dm\r
      equation: "dm = sigma * dA"\r
      latex: 'dm = \\sigma\\,dA'\r
  category: auxiliary\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: "Relaciona el elemento de masa con la densidad superficial de una l?mina o placa delgada."\r
    en: "Relates the mass element to the surface density of a thin lamina or plate."\r
  constraints:\r
    - expr: "true"\r
      message:\r
        es: "El diferencial geom?trico debe corresponder a la dimensi?n real del cuerpo."\r
        en: "The geometric differential must match the body's actual dimension."\r
  validity:\r
    es: "V?lida cuando el cuerpo se modela con esta dimensi?n geom?trica dominante."\r
    en: "Valid when the body is modeled with this dominant geometric dimension."\r
  dimension_check: "M"\r
  calculable: false\r
  motivo_no_calculable:\r
    es: "Es una relaci?n diferencial que se usa dentro de integrales, no un c?lculo cerrado por s? solo."\r
    en: "It is a differential relation used inside integrals, not a closed calculation by itself."\r
  used_in:\r
    - theory\r
    - examples\r
    - interpretation\r
  interpretation_tags:\r
    - mass_element\r
    - surface_density\r
  result_semantics:\r
    target: dm\r
    kind: differential_mass\r
    sign_meaning:\r
      es: "Un elemento de masa f?sico no debe ser negativo en una distribuci?n material ordinaria."\r
      en: "A physical mass element should not be negative in an ordinary material distribution."\r
    absolute_value_meaning:\r
      es: "Cantidad infinitesimal de masa asociada a un elemento geom?trico."\r
      en: "Infinitesimal amount of mass associated with a geometric element."\r
  domain_checks:\r
    - expr: "true"\r
      message:\r
        es: "Comprueba que la densidad y el diferencial usan unidades compatibles."\r
        en: "Check that density and differential use compatible units."\r
  coherence_checks:\r
    - expr: "true"\r
      severity: ok\r
      message:\r
        es: "El producto densidad por diferencial debe tener dimensi?n de masa."\r
        en: "Density times differential must have mass dimension."\r
  graph_implications:\r
    - es: "El gr?fico debe indicar si el cuerpo se trata como barra, l?mina o s?lido."\r
      en: "The graph should indicate whether the body is treated as a rod, lamina, or solid."\r
  pedagogical_triggers:\r
    - detect_when: "true"\r
      message:\r
        es: "No sustituyas la masa total donde debe aparecer el elemento diferencial dm."\r
        en: "Do not substitute total mass where the differential element dm must appear."\r
\r
- id: dm_volume\r
  title:\r
    es: "Elemento de masa volumetrico"
    en: "Volumetric mass element"\r
  equation: "dm = rho * dV"\r
  latex: 'dm = \\rho\\,dV'\r
  rearrangements:\r
    - target: dm\r
      equation: "dm = rho * dV"\r
      latex: 'dm = \\rho\\,dV'\r
  category: auxiliary\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: "Relaciona el elemento de masa con la densidad volum?trica de un s?lido tridimensional."\r
    en: "Relates the mass element to the volumetric density of a three-dimensional solid."\r
  constraints:\r
    - expr: "true"\r
      message:\r
        es: "El diferencial geom?trico debe corresponder a la dimensi?n real del cuerpo."\r
        en: "The geometric differential must match the body's actual dimension."\r
  validity:\r
    es: "V?lida cuando el cuerpo se modela con esta dimensi?n geom?trica dominante."\r
    en: "Valid when the body is modeled with this dominant geometric dimension."\r
  dimension_check: "M"\r
  calculable: false\r
  motivo_no_calculable:\r
    es: "Es una relaci?n diferencial que se usa dentro de integrales, no un c?lculo cerrado por s? solo."\r
    en: "It is a differential relation used inside integrals, not a closed calculation by itself."\r
  used_in:\r
    - theory\r
    - examples\r
    - interpretation\r
  interpretation_tags:\r
    - mass_element\r
    - volume_density\r
  result_semantics:\r
    target: dm\r
    kind: differential_mass\r
    sign_meaning:\r
      es: "Un elemento de masa f?sico no debe ser negativo en una distribuci?n material ordinaria."\r
      en: "A physical mass element should not be negative in an ordinary material distribution."\r
    absolute_value_meaning:\r
      es: "Cantidad infinitesimal de masa asociada a un elemento geom?trico."\r
      en: "Infinitesimal amount of mass associated with a geometric element."\r
  domain_checks:\r
    - expr: "true"\r
      message:\r
        es: "Comprueba que la densidad y el diferencial usan unidades compatibles."\r
        en: "Check that density and differential use compatible units."\r
  coherence_checks:\r
    - expr: "true"\r
      severity: ok\r
      message:\r
        es: "El producto densidad por diferencial debe tener dimensi?n de masa."\r
        en: "Density times differential must have mass dimension."\r
  graph_implications:\r
    - es: "El gr?fico debe indicar si el cuerpo se trata como barra, l?mina o s?lido."\r
      en: "The graph should indicate whether the body is treated as a rod, lamina, or solid."\r
  pedagogical_triggers:\r
    - detect_when: "true"\r
      message:\r
        es: "No sustituyas la masa total donde debe aparecer el elemento diferencial dm."\r
        en: "Do not substitute total mass where the differential element dm must appear."\r
- id: superposition_negative_mass\r
  title:\r
    es: "Superposición de masa negativa (Huecos)"\r
    en: "Negative mass superposition (Holes)"\r
  equation: "xcm = (M_total*x_total - m_hole*x_hole)/(M_total - m_hole)"\r
  latex: "x_{cm} = \\\\frac{M_{total}x_{total} - m_{hole}x_{hole}}{M_{total} - m_{hole}}"\r
  rearrangements:\r
    - target: xcm\r
      equation: "xcm = (M_total*x_total - m_hole*x_hole)/(M_total - m_hole)"\r
      latex: "x_{cm} = \\\\frac{M_{total}x_{total} - m_{hole}x_{hole}}{M_{total} - m_{hole}}"\r
  category: derived\r
  relation_type: average_relation\r
  physical_meaning:\r
    es: "Cálculo del centro de masas para un objeto con partes faltantes (huecos) tratando el vacío como una masa negativa."\r
    en: "Calculation of the center of mass for an object with missing parts (holes) by treating the vacuum as negative mass."\r
  validity:\r
    es: "Válida cuando el objeto puede descomponerse en formas geométricas simples conocidas."\r
    en: "Valid when the object can be decomposed into known simple geometric shapes."\r
  dimension_check: "L"\r
  calculable: true\r
  motivo_no_calculable: ""\r
  used_in:\r
    - theory\r
    - examples\r
    - interpretation\r
  interpretation_tags:\r
    - hole_correction\r
    - superposition_principle\r
  constraints:\r
    - expr: "M_total > m_hole"\r
      message:\r
        es: "La masa del hueco no puede ser mayor que la masa total original."\r
        en: "The hole's mass cannot be greater than the original total mass."\r
  result_semantics:\r
    target: xcm\r
    kind: coordinate\r
    sign_meaning:\r
      es: "Posición del baricentro corregido por la ausencia de materia."\r
      en: "Barycenter position corrected for the absence of matter."\r
    absolute_value_meaning:\r
      es: "Distancia del centro de masas real al origen tras restar el hueco."\r
      en: "Real center of mass distance to the origin after subtracting the hole."\r
  domain_checks:\r
    - expr: "M_total > m_hole"\r
      message:\r
        es: "La masa del hueco no puede ser mayor que la masa total del objeto original."\r
        en: "The hole's mass cannot be greater than the original object's total mass."\r
  coherence_checks:\r
    - expr: "true"\r
      severity: ok\r
      message:\r
        es: "El CM resultante debe alejarse de la posición del hueco."\r
        en: "The resulting CM must move away from the hole's position."\r
  graph_implications:\r
    - es: "Muestra el desplazamiento del marcador CM en sentido opuesto al centro del hueco."\r
      en: "Shows the CM marker shifting in the opposite direction to the hole's center."\r
  pedagogical_triggers:\r
    - detect_when: "true"\r
      message:\r
        es: "Recuerda: restar una masa equivale a sumar una masa negativa en la posición del centro del hueco."\r
        en: "Remember: subtracting a mass is equivalent to adding a negative mass at the hole's center position."\r
`;export{e as default};
