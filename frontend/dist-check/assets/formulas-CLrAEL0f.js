const e=`- id: velocidad_longitudinal_fluidos
  title:
    es: Rapidez de propagacion en fluidos
    en: Propagation speed in fluids
  equation: "v = sqrt(B / rho)"
  latex: "v = \\\\sqrt{\\\\frac{B}{\\\\rho}}  % B rho v"
  rearrangements:
    - { target: v, equation: "v = sqrt(B / rho)", latex: "v = \\\\sqrt{\\\\frac{B}{\\\\rho}}" }
    - { target: B, equation: "B = rho * v^2", latex: "B = \\\\rho v^2" }
    - { target: rho, equation: "rho = B / v^2", latex: "\\\\rho = \\\\frac{B}{v^2}" }
  category: fundamental
  relation_type: constitutive_relation
  physical_meaning:
    es: "[[v]] surge del equilibrio entre el modulo de compresibilidad [[B]] (restauracion elastica) y la densidad [[rho]] (inercia volumetrica)."
    en: "[[v]] arises from the balance between the bulk modulus [[B]] (elastic restoration) and the density [[rho]] (volumetric inertia)."
  constraints:
    - "[[B]] > 0"
    - "[[rho]] > 0"
    - "fluido ideal no viscoso y compresion adiabatica"
  validity:
    es: "Valido para perturbaciones mecanicas de amplitud pequena en medios fluidos continuos, uniformes e isotropos."
    en: "Valid for small-amplitude mechanical disturbances in continuous, uniform, and isotropic fluid media."
  dimension_check: "[L T⁻¹] = sqrt([M L⁻¹ T⁻²] / [M L⁻³])"
  calculable: true
  motivo_no_calculable:
    es: "Requiere conocer tanto el modulo de compresibilidad [[B]] como la densidad [[rho]] del fluido en equilibrio."
    en: "Requires knowing both the bulk modulus [[B]] and the density [[rho]] of the fluid in equilibrium."
  used_in: [teoria, ejemplos, interpretacion]
  interpretation_tags: [elasticidad, inercia, rapidez]
  result_semantics:
    target: v
    kind: positive_speed
    sign_meaning:
      es: "La rapidez es una magnitud escalar no negativa; la direccion del viaje es independiente."
      en: "Speed is a non-negative scalar quantity; the direction of travel is independent."
    absolute_value_meaning:
      es: "Establece cuantos metros avanza el frente de onda de presion en cada segundo."
      en: "Establishes how many meters the pressure wave front advances each second."
  domain_checks:
    - id: B_positive
      condition: "B > 0"
      message:
        es: "El modulo de compresibilidad volumetrica [[B]] debe ser estrictamente positivo."
        en: "The volumetric bulk modulus [[B]] must be strictly positive."
    - id: rho_positive
      condition: "rho > 0"
      message:
        es: "La densidad del fluido [[rho]] debe ser estrictamente positiva."
        en: "The fluid density [[rho]] must be strictly positive."
  coherence_checks:
    - id: speed_audible
      condition: "v >= 100"
      message:
        es: "La rapidez es baja; fluidos reales suelen propagar ondas de presion por encima de cien metros por segundo."
        en: "Speed is low; real fluids typically propagate pressure waves above one hundred meters per second."
  graph_implications:
    - id: compressibility_stretch
      message:
        es: "Un [[B]] mayor a [[rho]] fija eleva el valor de la rapidez y desplaza el frente de onda mas rapido."
        en: "A larger [[B]] at fixed [[rho]] raises the speed value and displaces the wave front faster."
  pedagogical_triggers:
    - id: bulk_proportionality_error
      detect_when: "B doubled and v doubled"
      message:
        es: "Duplicar el modulo [[B]] no duplica la rapidez; la dependencia fisica es de raiz cuadrada."
        en: "Doubling the modulus [[B]] does not double the speed; the physical dependence is square-root."

- id: longitud_onda_longitudinal
  title:
    es: Longitud de onda para frecuencia impuesta
    en: Wavelength for imposed frequency
  equation: "lambda = v / f"
  latex: "\\\\lambda = \\\\frac{v}{f}  % lambda v f"
  rearrangements:
    - { target: lambda, equation: "lambda = v / f", latex: "\\\\lambda = \\\\frac{v}{f}" }
    - { target: v, equation: "v = lambda * f", latex: "v = \\\\lambda f" }
    - { target: f, equation: "f = v / lambda", latex: "f = \\\\frac{v}{\\\\lambda}" }
  category: derived
  relation_type: constitutive_relation
  physical_meaning:
    es: "[[lambda]] mide la separacion fisica en el espacio entre compresiones sucesivas para una frecuencia [[f]] impuesta."
    en: "[[lambda]] measures the physical spacing in space between successive compressions for an imposed frequency [[f]]."
  constraints:
    - "[[v]] > 0"
    - "[[f]] > 0"
  validity:
    es: "Valida para ondas longitudinales periodicas y armonicas en regimen lineal."
    en: "Valid for periodic and harmonic longitudinal waves in the linear regime."
  dimension_check: "[L] = [L T⁻¹] / [T⁻¹]"
  calculable: true
  motivo_no_calculable:
    es: "Requiere conocer la rapidez mecanica del medio [[v]] y la frecuencia temporal de la fuente [[f]]."
    en: "Requires knowing the mechanical speed of the medium [[v]] and the temporal frequency of the source [[f]]."
  used_in: [teoria, ejemplos, interpretacion]
  interpretation_tags: [escala_espacial, ritmo_temporal, rapidez]
  result_semantics:
    target: lambda
    kind: positive_length
    sign_meaning:
      es: "La longitud de onda es una distancia espacial no negativa."
      en: "Wavelength is a non-negative spatial distance."
    absolute_value_meaning:
      es: "Muestra la separacion espacial minima en la que se repite la misma fase de presion del fluido."
      en: "Shows the minimum spatial separation in which the same fluid pressure phase repeats."
  domain_checks:
    - id: f_positive
      condition: "f > 0"
      message:
        es: "La frecuencia de oscilacion de la fuente [[f]] debe ser mayor que cero."
        en: "The oscillation frequency of the source [[f]] must be greater than zero."
  coherence_checks:
    - id: wave_audible_length
      condition: "lambda <= 20"
      message:
        es: "La longitud de onda es muy grande; longitudes audibles en fluidos suelen estar por debajo de veinte metros."
        en: "Wavelength is very large; audible wavelengths in fluids are typically below twenty meters."
  graph_implications:
    - id: wavelength_stretch
      message:
        es: "Elevar la frecuencia [[f]] comprime espacialmente la onda, reduciendo [[lambda]]."
        en: "Raising the frequency [[f]] spatially compresses the wave, reducing [[lambda]]."
  pedagogical_triggers:
    - id: source_speed_fallacy
      detect_when: "frequency changes speed"
      message:
        es: "Modificar [[f]] altera la escala espacial [[lambda]] pero no cambia la rapidez [[v]] decida por el medio."
        en: "Modifying [[f]] alters the spatial scale [[lambda]] but does not change the speed [[v]] set by the medium."

- id: impedancia_acustica
  title:
    es: Impedancia acustica volumetrica
    en: Volumetric acoustic impedance
  equation: "Z = rho * v"
  latex: "Z = \\\\rho v  % Z rho v"
  rearrangements:
    - { target: Z, equation: "Z = rho * v", latex: "Z = \\\\rho v" }
    - { target: rho, equation: "rho = Z / v", latex: "\\\\rho = \\\\frac{Z}{v}" }
    - { target: v, equation: "v = Z / rho", latex: "v = \\\\frac{Z}{\\\\rho}" }
  category: derived
  relation_type: constitutive_relation
  physical_meaning:
    es: "[[Z]] representa el producto de la densidad inercial [[rho]] y la rapidez de propagacion [[v]]; mide que tan dificil es deformar el fluido."
    en: "[[Z]] represents the product of inertial density [[rho]] and propagation speed [[v]]; it measures how difficult it is to deform the fluid."
  constraints:
    - "[[rho]] > 0"
    - "[[v]] > 0"
  validity:
    es: "Valida en el limite de ondas acusticas lineares propagándose en un fluido continuo libre."
    en: "Valid in the limit of linear acoustic waves propagating in a free continuous fluid."
  dimension_check: "[M L⁻² T⁻¹] = [M L⁻³] * [L T⁻¹]"
  calculable: true
  motivo_no_calculable:
    es: "Requiere conocer la inercia del medio [[rho]] y la rapidez con la que se transmite la perturbacion [[v]]."
    en: "Requires knowing the inertia of the medium [[rho]] and the speed at which the disturbance is transmitted [[v]]."
  used_in: [teoria, ejemplos, interpretacion]
  interpretation_tags: [impedancia, reflexion, inercia]
  result_semantics:
    target: Z
    kind: acoustic_impedance
    sign_meaning:
      es: "La impedancia es un coeficiente escalar estrictamente positivo."
      en: "Impedance is a strictly positive scalar coefficient."
    absolute_value_meaning:
      es: "Determina la relacion entre presion acustica y velocidad de flujo de las particulas en el frente."
      en: "Determines the relationship between acoustic pressure and particle flow velocity at the front."
  domain_checks:
    - id: v_positive_impedance
      condition: "v > 0"
      message:
        es: "La rapidez mecanica [[v]] debe ser positiva para definir impedancia."
        en: "The mechanical speed [[v]] must be positive to define impedance."
  coherence_checks:
    - id: impedance_magnitude
      condition: "Z >= 1"
      message:
        es: "La impedancia acustica es muy reducida; fluidos reales superan la unidad."
        en: "Acoustic impedance is very small; real fluids exceed unity."
  graph_implications:
    - id: reflection_coefficient
      message:
        es: "Diferencias grandes de [[Z]] en una frontera provocan fuertes reflexiones de la onda."
        en: "Large differences in [[Z]] at a boundary cause strong reflections of the wave."
  pedagogical_triggers:
    - id: impedance_meaning_error
      detect_when: "Z decreases with more density"
      message:
        es: "Mayor inercia [[rho]] del fluido eleva [[Z]], no la disminuye."
        en: "Larger inertia [[rho]] of the fluid raises [[Z]], it does not decrease it."
`;export{e as default};
