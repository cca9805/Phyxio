const e=`version: 5\r
id: campos-oscilantes-acoplados
leaf_id: campos-oscilantes-acoplados
nombre:
  es: Interpretación Física de los Campos Oscilantes Acoplados
  en: Physical Interpretation of Coupled Oscillating Fields
scope:\r
  area: fisica-clasica\r
  bloque: electromagnetismo\r
  subbloque: ondas-electromagneticas\r
  parent_id: ondas-electromagneticas\r
  ruta_relativa: fisica-clasica/electromagnetismo/ondas-electromagneticas/campos-oscilantes-acoplados
ui:\r
  enabled: true\r
  display_modes:\r
  - calculator_inline\r
  - graph_inline\r
  - dedicated_tab\r
  labels:\r
    tab_label:\r
      es: Interpretación Física\r
      en: Physical Interpretation\r
  priority_order:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
dependencies:\r
  formulas:\r
  - velocidad_vacio\r
  - relacion_amplitudes\r
  - relacion_onda\r
  - intensidad_media\r
  magnitudes:\r
  - c\r
  - mu0\r
  - epsilon0\r
  - E0\r
  - B0\r
  - f\r
  - lambda\r
  - I\r
global_context:\r
  physical_domain:\r
    es: Campos electromagnéticos en propagación armónica plana.\r
    en: Electromagnetic fields in harmonic plane propagation.\r
  axis_convention:\r
    es: Propagación a lo largo del eje x, con E en el eje y, y B en el eje z.\r
    en: Propagation along the x-axis, with E on the y-axis, and B on the z-axis.\r
  standard_assumptions:\r
  - Vacio perfecto o medio lineal, homogéneo e isótropo.\r
  - Campos eléctrico y magnético transversales y en fase.\r
  standard_warnings:\r
  - En medios con pérdidas, se produce atenuación y dispersión.\r
output_contract:\r
  sections:\r
  - summary\r
  - physical_reading\r
  - coherence\r
  - model_validity\r
  - graph_reading\r
  - likely_errors\r
  - next_step\r
  inline_mode:\r
    max_sections: 2\r
    priority:\r
    - summary\r
    - likely_errors\r
  extended_mode:\r
    show_all: true\r
result_blocks:\r
  summary:\r
    enabled: true\r
    order: 1\r
    title:\r
      es: Resumen de Resultados\r
      en: Summary of Results\r
  physical_reading:\r
    enabled: true\r
    order: 2\r
    title:\r
      es: Lectura Física\r
      en: Physical Reading\r
  coherence:\r
    enabled: true\r
    order: 3\r
    title:\r
      es: Coherencia Física\r
      en: Coherence Checks\r
  model_validity:\r
    enabled: true\r
    order: 4\r
    title:\r
      es: Validez del Modelo\r
      en: Model Validity\r
  graph_reading:\r
    enabled: true\r
    order: 5\r
    title:\r
      es: Lectura Gráfica\r
      en: Graph Reading\r
  likely_errors:\r
    enabled: true\r
    order: 6\r
    title:\r
      es: Errores Comunes\r
      en: Likely Student Errors\r
  next_step:\r
    enabled: true\r
    order: 7\r
    title:\r
      es: Siguientes Pasos\r
      en: Next Steps\r
targets:\r
  c:\r
    magnitude_type: velocidad_vacio\r
    semantic_role:\r
      es: Velocidad de propagación en el vacío\r
      en: Speed of propagation in vacuum\r
    summary_rules:\r
    - id: summary_c\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La velocidad de propagación c es la constante fundamental de la luz en\r
          el vacío e indica el límite de velocidad cósmica.\r
        en: The speed of propagation c is the fundamental constant of light in vacuum\r
          and indicates the cosmic speed limit.\r
    physical_reading_rules:\r
    - id: physical_c\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La velocidad límite c indica que la perturbación electromagnética se propaga\r
          de manera autoinducida.\r
        en: The limit speed c indicates that the electromagnetic disturbance propagates\r
          in a self-induced manner.\r
    coherence_rules:\r
    - id: coherence_c_0\r
      when: result < 0\r
      status: error\r
      text:\r
        es: 'ERROR: La velocidad no puede ser negativa en este modelo.'\r
        en: 'ERROR: Speed cannot be negative in this model.'\r
    - id: coherence_c_1\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La velocidad es estrictamente positiva y coincide con la constante universal.\r
        en: The speed is strictly positive and matches the universal constant.\r
    model_validity_rules:\r
    - id: validity_c\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Este valor de c solo es válido en el vacío absoluto; en medios dieléctricos\r
          disminuye según el índice de refracción.\r
        en: This value of c is only valid in absolute vacuum; in dielectric media\r
          it decreases according to the refractive index.\r
    graph_rules:\r
    - id: graph_c\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el gráfico, c determina la tasa de avance temporal de los frentes de\r
          onda.\r
        en: In the graph, c determines the rate of temporal advance of the wavefronts.\r
    likely_errors:\r
    - id: error_c\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Cuidado con asumir que la velocidad c cambia si varía la frecuencia o\r
          la amplitud.\r
        en: Beware of assuming that the speed c changes if frequency or amplitude\r
          varies.\r
    next_step_rules:\r
    - id: next_c\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Explora cómo cambia la velocidad de propagación al entrar en un medio\r
          dieléctrico real.\r
        en: Explore how the propagation speed changes when entering a real dielectric\r
          medium.\r
  E0:\r
    magnitude_type: amplitud_electrica\r
    semantic_role:\r
      es: Amplitud del campo eléctrico\r
      en: Electric field amplitude\r
    summary_rules:\r
    - id: summary_e0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La amplitud eléctrica define la intensidad máxima de oscilación del campo\r
          eléctrico y describe la fuerza del frente de onda.\r
        en: The electric amplitude defines the maximum intensity of the electric field\r
          oscillation and describes the strength of the wavefront.\r
    physical_reading_rules:\r
    - id: physical_e0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una mayor amplitud E0 implica que la onda electromagnética transporta\r
          más flujo energético.\r
        en: A larger amplitude E0 implies that the electromagnetic wave carries more\r
          energy flux.\r
    coherence_rules:\r
    - id: coherence_e0_0\r
      when: result < 0\r
      status: error\r
      text:\r
        es: 'ERROR: La amplitud no puede ser negativa.'\r
        en: 'ERROR: Amplitude cannot be negative.'\r
    - id: coherence_e0_1\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Amplitud eléctrica coherente y no negativa.\r
        en: Coherent and non-negative electric amplitude.\r
    model_validity_rules:\r
    - id: validity_e0_0\r
      when: result > 1e6\r
      status: warning\r
      text:\r
        es: 'Cuidado: Amplitudes extremas pueden causar ruptura dieléctrica en medios\r
          reales.'\r
        en: 'Warning: Extreme amplitudes can cause dielectric breakdown in real media.'\r
    - id: validity_e0_1\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Modelo de onda lineal aplicable para amplitudes ordinarias.\r
        en: Linear wave model applicable for ordinary amplitudes.\r
    graph_rules:\r
    - id: graph_e0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el gráfico del acoplamiento, E0 se representa como la altura máxima\r
          del vector del campo eléctrico y.\r
        en: In the coupling graph, E0 is represented as the maximum height of the\r
          electric field y-vector.\r
    likely_errors:\r
    - id: error_e0\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Confundir la amplitud del campo eléctrico con el valor eficaz de la tensión\r
          de una red cableada.\r
        en: Confusing electric field amplitude with the root-mean-square voltage of\r
          a wired grid.\r
    next_step_rules:\r
    - id: next_e0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Calcula la intensidad media asociada para ver la potencia por unidad de\r
          área.\r
        en: Calculate the associated mean intensity to see the power per unit area.\r
  B0:\r
    magnitude_type: amplitud_magnetica\r
    semantic_role:\r
      es: Amplitud del campo magnético\r
      en: Magnetic field amplitude\r
    summary_rules:\r
    - id: summary_b0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La amplitud magnética define la intensidad máxima de oscilación del campo\r
          magnético.\r
        en: The magnetic amplitude defines the maximum intensity of the magnetic field\r
          oscillation.\r
    physical_reading_rules:\r
    - id: physical_b0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La amplitud magnética B0 es proporcional a E0 dividida por la velocidad\r
          de la luz c.\r
        en: The magnetic amplitude B0 is proportional to E0 divided by the speed of\r
          light c.\r
    coherence_rules:\r
    - id: coherence_b0_0\r
      when: result < 0\r
      status: error\r
      text:\r
        es: 'ERROR: La amplitud del campo magnético no puede ser negativa.'\r
        en: 'ERROR: Magnetic field amplitude cannot be negative.'\r
    - id: coherence_b0_1\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Amplitud magnética dentro de rangos coherentes.\r
        en: Magnetic amplitude within coherent ranges.\r
    model_validity_rules:\r
    - id: validity_b0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La relación E0/B0 = c se mantiene rigurosamente en el vacío para cualquier\r
          frecuencia.\r
        en: The relation E0/B0 = c is rigorously maintained in vacuum for any frequency.\r
    graph_rules:\r
    - id: graph_b0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el gráfico tridimensional, B0 es la amplitud máxima del vector magnético\r
          oscilando en el eje z.\r
        en: In the 3D graph, B0 is the maximum amplitude of the magnetic vector oscillating\r
          along the z-axis.\r
    likely_errors:\r
    - id: error_b0\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Suponer que los campos eléctrico y magnético transportan cantidades desiguales\r
          de energía debido a la diferencia numérica entre E0 y B0.\r
        en: Assuming that electric and magnetic fields carry unequal energy amounts\r
          due to the numerical difference between E0 and B0.\r
    next_step_rules:\r
    - id: next_b0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Compara la disipación e interacción del campo magnético en medios con\r
          permeabilidad magnética distinta.\r
        en: Compare magnetic field dissipation and interaction in media with different\r
          magnetic permeability.\r
  lambda:\r
    magnitude_type: longitud_onda\r
    semantic_role:\r
      es: Longitud de onda de la oscilación\r
      en: Wavelength of the oscillation\r
    summary_rules:\r
    - id: summary_lambda\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La longitud de onda define la escala espacial de repetición periódica\r
          de la perturbación.\r
        en: The wavelength defines the spatial scale of periodic repetition of the\r
          disturbance.\r
    physical_reading_rules:\r
    - id: physical_lambda\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Una menor longitud de onda corresponde a frecuencias más altas y mayor\r
          energía por fotón.\r
        en: A shorter wavelength corresponds to higher frequencies and higher energy\r
          per photon.\r
    coherence_rules:\r
    - id: coherence_lambda_0\r
      when: result <= 0\r
      status: error\r
      text:\r
        es: 'ERROR: La longitud de onda debe ser estrictamente positiva.'\r
        en: 'ERROR: Wavelength must be strictly positive.'\r
    - id: coherence_lambda_1\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Longitud de onda espacialmente coherente.\r
        en: Spatially coherent wavelength.\r
    model_validity_rules:\r
    - id: validity_lambda_0\r
      when: result < 1e-12\r
      status: info\r
      text:\r
        es: A longitudes extremadamente cortas (rayos gamma), los efectos cuánticos\r
          del fotón dominan el modelo clásico de onda.\r
        en: At extremely short wavelengths (gamma rays), quantum photon effects dominate\r
          the classical wave model.\r
    - id: validity_lambda_1\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Modelo clásico de onda plana plenamente válido.\r
        en: Classical plane wave model fully valid.\r
    graph_rules:\r
    - id: graph_lambda\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el gráfico, representa la distancia real medida sobre el eje de propagación\r
          entre dos crestas sucesivas.\r
        en: In the graph, it represents the real distance measured along the propagation\r
          axis between two successive crests.\r
    likely_errors:\r
    - id: error_lambda\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Olvidar que la longitud de onda varía cuando la radiación cambia de medio\r
          de propagación.\r
        en: Forgetting that wavelength changes when radiation transitions between\r
          propagation media.\r
    next_step_rules:\r
    - id: next_lambda\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Consulta el espectro electromagnético para clasificar esta longitud de\r
          onda en su banda correspondiente.\r
        en: Consult the electromagnetic spectrum to classify this wavelength in its\r
          corresponding band.\r
  f:\r
    magnitude_type: frecuencia\r
    semantic_role:\r
      es: Frecuencia de oscilación\r
      en: Oscillation frequency\r
    summary_rules:\r
    - id: summary_f\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La frecuencia determina la tasa de oscilación temporal del dipolo emisor\r
          original.\r
        en: The frequency determines the temporal oscillation rate of the original\r
          emitting dipole.\r
    physical_reading_rules:\r
    - id: physical_f\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La frecuencia f se mantiene constante e invariable incluso si la onda\r
          cambia de medio material.\r
        en: The frequency f remains constant and invariant even if the wave changes\r
          material media.\r
    coherence_rules:\r
    - id: coherence_f_0\r
      when: result <= 0\r
      status: error\r
      text:\r
        es: 'ERROR: La frecuencia debe ser estrictamente positiva.'\r
        en: 'ERROR: Frequency must be strictly positive.'\r
    - id: coherence_f_1\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Frecuencia temporalmente coherente.\r
        en: Temporally coherent frequency.\r
    model_validity_rules:\r
    - id: validity_f\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La frecuencia clásica es ilimitada, pero en física cuántica se asocia\r
          de forma directa con la energía de Planck.\r
        en: Classical frequency is unlimited, but in quantum physics it directly links\r
          with Planck's energy.\r
    graph_rules:\r
    - id: graph_f\r
      when: 'true'\r
      status: info\r
      text:\r
        es: En el gráfico, f define el número de oscilaciones que cruzan cualquier\r
          punto fijo del espacio cada segundo.\r
        en: In the graph, f defines the number of oscillations crossing any fixed\r
          point of space every second.\r
    likely_errors:\r
    - id: error_f\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Creer erróneamente que la frecuencia de la onda electromagnética cambia\r
          al refractarse.\r
        en: Wrongly believing that the frequency of the electromagnetic wave changes\r
          upon refraction.\r
    next_step_rules:\r
    - id: next_f\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Analiza el espectro electromagnético para identificar si es una onda de\r
          radio, microondas o luz visible.\r
        en: Analyze the electromagnetic spectrum to identify if it is a radio wave,\r
          microwave, or visible light.\r
  I:\r
    magnitude_type: intensidad_media\r
    semantic_role:\r
      es: Intensidad media de la onda\r
      en: Mean wave intensity\r
    summary_rules:\r
    - id: summary_i\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La intensidad media define el promedio del flujo neto de energía transportada\r
          y depende directamente del cuadrado de la amplitud eléctrica.\r
        en: The mean intensity defines the average net energy flux carried and depends\r
          directly on the square of the electric amplitude.\r
    physical_reading_rules:\r
    - id: physical_i\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La intensidad es proporcional al cuadrado de la amplitud eléctrica, demostrando\r
          el comportamiento no lineal de la energía respecto al campo.\r
        en: The intensity is proportional to the square of the electric amplitude,\r
          demonstrating the non-linear behavior of energy with respect to the field.\r
    coherence_rules:\r
    - id: coherence_i_0\r
      when: result < 0\r
      status: error\r
      text:\r
        es: 'ERROR: La intensidad media de transporte de energía no puede ser negativa.'\r
        en: 'ERROR: The mean intensity of energy transport cannot be negative.'\r
    - id: coherence_i_1\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Intensidad física coherente y no negativa.\r
        en: Coherent and non-negative physical intensity.\r
    model_validity_rules:\r
    - id: validity_i_0\r
      when: result > 1e12\r
      status: info\r
      text:\r
        es: Intensidades extremas de láseres causan efectos ópticos no lineales e\r
          ionización inmediata en medios dieléctricos.\r
        en: Extreme laser intensities cause non-linear optical effects and immediate\r
          ionization in dielectric media.\r
    - id: validity_i_1\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Modelo de transporte energético de onda armónica plenamente válido.\r
        en: Harmonic wave energy transport model fully valid.\r
    graph_rules:\r
    - id: graph_i\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Visualmente se corresponde con la amplitud del vector de Poynting integrado\r
          en un ciclo de oscilación.\r
        en: Visually matches the amplitude of the Poynting vector integrated over\r
          one oscillation cycle.\r
    likely_errors:\r
    - id: error_i\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Olvidar que la intensidad cae en la realidad con la inversa del cuadrado\r
          de la distancia para fuentes puntuales esféricas.\r
        en: Forgetting that in reality intensity falls with the inverse square of\r
          distance for spherical point sources.\r
    next_step_rules:\r
    - id: next_i\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Aplica el vector de Poynting para estudiar la dirección vectorial instantánea\r
          de la potencia.\r
        en: Apply the Poynting vector to study the instantaneous vector direction\r
          of power.\r
  mu0:\r
    magnitude_type: permeabilidad\r
    semantic_role:\r
      es: Permeabilidad magnética del vacío\r
      en: Vacuum magnetic permeability\r
    summary_rules:\r
    - id: summary_mu0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La constante mu0 mide la oposición del vacío a la formación de campos\r
          magnéticos.\r
        en: The constant mu0 measures the vacuum's opposition to the formation of\r
          magnetic fields.\r
    physical_reading_rules:\r
    - id: physical_mu0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La permeabilidad magnética del vacío influye inversamente en la velocidad\r
          de propagación de la onda.\r
        en: The vacuum magnetic permeability inversely influences the propagation\r
          speed of the wave.\r
    coherence_rules:\r
    - id: coherence_mu0_0\r
      when: result <= 0\r
      status: error\r
      text:\r
        es: 'ERROR: La permeabilidad magnética debe ser estrictamente positiva.'\r
        en: 'ERROR: The magnetic permeability must be strictly positive.'\r
    - id: coherence_mu0_1\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Permeabilidad magnética físicamente admisible.\r
        en: Physically admissible magnetic permeability.\r
    model_validity_rules:\r
    - id: validity_mu0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Esta constante es universal y fija en el vacío de acuerdo con el Sistema\r
          Internacional.\r
        en: This constant is universal and fixed in vacuum according to the International\r
          System.\r
    graph_rules:\r
    - id: graph_mu0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: No aplica - sin gráficos.\r
        en: N/A - no graphs.\r
    likely_errors:\r
    - id: error_mu0\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Confundir la permeabilidad del vacío con la permeabilidad magnética de\r
          materiales ferromagnéticos.\r
        en: Confusing vacuum permeability with the magnetic permeability of ferromagnetic\r
          materials.\r
    next_step_rules:\r
    - id: next_mu0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Investiga cómo la permeabilidad relativa de un medio material altera la\r
          impedancia característica.\r
        en: Investigate how the relative permeability of a material medium alters\r
          the characteristic impedance.\r
  epsilon0:\r
    magnitude_type: permitividad\r
    semantic_role:\r
      es: Permitividad eléctrica del vacío\r
      en: Vacuum electric permittivity\r
    summary_rules:\r
    - id: summary_epsilon0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La constante epsilon0 mide la permitividad del vacío ante campos eléctricos.\r
        en: The constant epsilon0 measures the vacuum's permittivity to electric fields.\r
    physical_reading_rules:\r
    - id: physical_epsilon0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: La permitividad eléctrica del vacío define la capacitancia intrínseca\r
          del espacio libre y limita la velocidad de la luz.\r
        en: The vacuum electric permittivity defines the intrinsic capacitance of\r
          free space and limits the speed of light.\r
    coherence_rules:\r
    - id: coherence_epsilon0_0\r
      when: result <= 0\r
      status: error\r
      text:\r
        es: 'ERROR: La permitividad eléctrica debe ser estrictamente positiva.'\r
        en: 'ERROR: The electric permittivity must be strictly positive.'\r
    - id: coherence_epsilon0_1\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Permitividad eléctrica físicamente admisible.\r
        en: Physically admissible electric permittivity.\r
    model_validity_rules:\r
    - id: validity_epsilon0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Esta permitividad es constante en el vacío pero se incrementa por la polarización\r
          en cualquier medio material.\r
        en: This permittivity is constant in vacuum but increases due to polarization\r
          in any material medium.\r
    graph_rules:\r
    - id: graph_epsilon0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: No aplica - sin gráficos.\r
        en: N/A - no graphs.\r
    likely_errors:\r
    - id: error_epsilon0\r
      when: 'true'\r
      status: warning\r
      text:\r
        es: Olvidar que epsilon0 define la escala de la fuerza electrostática en la\r
          ley de Coulomb.\r
        en: Forgetting that epsilon0 defines the scale of the electrostatic force\r
          in Coulomb's law.\r
    next_step_rules:\r
    - id: next_epsilon0\r
      when: 'true'\r
      status: info\r
      text:\r
        es: Compara este comportamiento con la polarización dieléctrica de materiales\r
          aislantes.\r
        en: Compare this behavior with the dielectric polarization of insulating materials.\r
`;export{e as default};
