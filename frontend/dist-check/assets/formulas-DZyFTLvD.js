const e=`version: "2.0"
formulas:

  - id: ley_gauss
    title:
      es: Ley de Gauss (forma integral)
      en: Gauss's Law (integral form)
    equation: "Phi_E = Q_enc / epsilon_0"
    latex: "\\\\Phi_E = \\\\frac{Q_{enc}}{\\\\varepsilon_0}  % epsilon_0"
    rearrangements:
      - target: Q_enc
        equation: "Q_enc = Phi_E * epsilon_0"
        latex: "Q_{enc} = \\\\Phi_E \\\\cdot \\\\varepsilon_0"
      - target: epsilon_0
        equation: "epsilon_0 = Q_enc / Phi_E"
        latex: "\\\\varepsilon_0 = \\\\frac{Q_{enc}}{\\\\Phi_E}"
    category: fundamental
    relation_type: definition
    physical_meaning:
      es: "El flujo eléctrico total a través de cualquier superficie cerrada es igual a la carga encerrada dividida entre la permitividad del vacío. La forma de la superficie y la distribución interior de cargas son irrelevantes para el resultado del flujo."
      en: "The total electric flux through any closed surface equals the enclosed charge divided by the permittivity of free space. The shape of the surface and the interior distribution of charges are irrelevant to the flux result."
    constraints:
      - "Régimen electrostático: cargas en reposo"
      - "Vacío o medio lineal homogéneo"
      - "La superficie gaussiana debe ser cerrada"
    validity:
      es: "Válida en electrostática clásica para cualquier distribución de cargas en el vacío. Se generaliza a medios dieléctricos sustituyendo epsilon_0 por la permitividad del medio."
      en: "Valid in classical electrostatics for any charge distribution in vacuum. Generalises to dielectric media by replacing epsilon_0 with the medium permittivity."
    dimension_check: "[M L³ T⁻³ I⁻¹] = [I T] / [M⁻¹ L⁻³ T⁴ I²] ✓"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - cálculo del flujo eléctrico dado la carga encerrada
      - determinación de la carga encerrada a partir del flujo medido
    interpretation_tags:
      - flujo_positivo
      - flujo_negativo
      - carga_nula
      - carga_positiva
      - carga_negativa
    result_semantics:
      target: Phi_E
      kind: scalar_signed
      sign_meaning:
        es: "Flujo positivo: la carga encerrada neta es positiva y el campo neto sale de la superficie. Flujo negativo: la carga encerrada es negativa y el campo neto entra."
        en: "Positive flux: net enclosed charge is positive and the net field exits the surface. Negative flux: enclosed charge is negative and the net field enters."
      absolute_value_meaning:
        es: "El módulo del flujo crece linealmente con el módulo de la carga encerrada. Doblar la carga encerrada dobla el flujo."
        en: "The flux magnitude grows linearly with the magnitude of the enclosed charge. Doubling the enclosed charge doubles the flux."
    domain_checks:
      - "epsilon_0 > 0 siempre"
      - "Q_enc puede ser cualquier real"
      - "Phi_E > 0 si Q_enc > 0; Phi_E < 0 si Q_enc < 0; Phi_E = 0 si Q_enc = 0"
    coherence_checks:
      - "Si Phi_E y Q_enc tienen signos opuestos, el resultado es incoherente"
      - "Si |Phi_E| crece sin que Q_enc cambie, hay error de entrada"
    graph_implications:
      - "En el gráfico Phi_E vs Q_enc la relación es lineal con pendiente 1/epsilon_0"
      - "El cruce por cero corresponde a carga encerrada nula"
    pedagogical_triggers:
      - "Si el alumno obtiene flujo negativo con carga positiva, probablemente ha invertido el signo de la carga"
      - "Si el flujo obtenido es cero pero la carga no es cero, puede haber error en el valor de epsilon_0"

  - id: campo_gaussiano
    title:
      es: Campo eléctrico por la ley de Gauss (simetría esférica)
      en: Electric field from Gauss's law (spherical symmetry)
    equation: "E_G = Q_enc / (epsilon_0 * A_G)"
    latex: "E_G = \\\\frac{Q_{enc}}{\\\\varepsilon_0 \\\\cdot A_G}  % epsilon_0"
    rearrangements:
      - target: A_G
        equation: "A_G = Q_enc / (epsilon_0 * E_G)"
        latex: "A_G = \\\\frac{Q_{enc}}{\\\\varepsilon_0 \\\\cdot E_G}"
      - target: Q_enc
        equation: "Q_enc = E_G * epsilon_0 * A_G"
        latex: "Q_{enc} = E_G \\\\cdot \\\\varepsilon_0 \\\\cdot A_G"
    category: derived
    relation_type: constitutive_relation
    physical_meaning:
      es: "Cuando la simetría de la distribución de carga garantiza que el módulo del campo es uniforme sobre la superficie gaussiana y perpendicular a ella, el campo se obtiene dividiendo el flujo entre el área de la superficie."
      en: "When the symmetry of the charge distribution guarantees that the field magnitude is uniform over the Gaussian surface and perpendicular to it, the field is obtained by dividing the flux by the surface area."
    constraints:
      - "Simetría suficiente: esférica, cilíndrica o planar"
      - "Campo perpendicular y uniforme en módulo sobre la superficie gaussiana"
      - "Vacío o medio homogéneo"
    validity:
      es: "Válida solo cuando la geometría tiene simetría esférica, cilíndrica o planar. Sin simetría, el campo no puede extraerse de la integral."
      en: "Valid only when the geometry has spherical, cylindrical or planar symmetry. Without symmetry, the field cannot be factored out of the integral."
    dimension_check: "[M L T⁻³ I⁻¹] = [I T] / ([M⁻¹ L⁻³ T⁴ I²]·[L²]) ✓"
    calculable: true
    motivo_no_calculable: null
    used_in:
      - cálculo del campo eléctrico de una esfera cargada
      - campo de un condensador de placas paralelas
      - campo de un cilindro cargado infinito
    interpretation_tags:
      - campo_exterior_esfera
      - campo_interior_conductor
      - campo_uniforme
    result_semantics:
      target: E_G
      kind: scalar_unsigned
      sign_meaning:
        es: "El módulo del campo es siempre positivo. La dirección (entrante o saliente) se determina por el signo de la carga encerrada y la geometría."
        en: "The field magnitude is always positive. The direction (inward or outward) is determined by the sign of the enclosed charge and the geometry."
      absolute_value_meaning:
        es: "Un campo mayor indica que la carga encerrada es mayor o que la superficie gaussiana es más pequeña. La dependencia con el área revela la geometría del problema."
        en: "A larger field means a larger enclosed charge or a smaller Gaussian surface. The dependence on area reveals the geometry of the problem."
    domain_checks:
      - "A_G > 0 siempre"
      - "epsilon_0 > 0 siempre"
      - "E_G >= 0 por definición de módulo"
    coherence_checks:
      - "E_G debe ser cero dentro de un conductor en equilibrio"
      - "E_G debe crecer si Q_enc crece con A_G fija"
    graph_implications:
      - "En el gráfico E_G vs A_G la relación es hiperbólica decreciente para Q_enc fija"
      - "E_G vs Q_enc es lineal con pendiente 1/(epsilon_0 * A_G)"
    pedagogical_triggers:
      - "Si el alumno calcula un campo mayor dentro de la esfera que fuera, probablemente ha sumado una carga exterior"
      - "Si E_G no es cero dentro de un conductor, hay un error en la carga encerrada"
`;export{e as default};
