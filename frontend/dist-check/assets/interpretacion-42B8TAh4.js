const e=`version: 2
id: interpretacion-formulacion-integral
leaf_id: formulacion-integral
nombre:
  es: "Interpretación de la formulación integral"
  en: "Integral Formulation Interpretation"
scope:
  area: "fisica-clasica"
  bloque: "electromagnetismo"
  subbloque: "ecuaciones-de-maxwell"
  parent_id: "ecuaciones-de-maxwell"
  ruta_relativa: "fisica-clasica/electromagnetismo/ecuaciones-de-maxwell/formulacion-integral"
dependencies:
  magnitudes: ["flux_E", "flux_B", "emf", "cirB", "q_enc", "I_enc", "dPhiB_dt", "dPhiE_dt", "epsilon0", "mu0"]
  formulas: ["gauss_e", "gauss_b", "faraday", "ampere_maxwell"]

output_contract:
  sections:
    - "summary"
    - "physical_reading"
    - "coherence"
    - "model_validity"
    - "graph_reading"
    - "likely_errors"
    - "next_step"

result_blocks:
  summary:
    title: { es: "Resumen físico", en: "Physical summary" }
  physical_reading:
    title: { es: "Lectura física profunda", en: "Deep physical reading" }
  coherence:
    title: { es: "Coherencia del balance", en: "Balance coherence" }
  model_validity:
    title: { es: "Validez y límites", en: "Validity and limits" }
  graph_reading:
    title: { es: "Lectura gráfica", en: "Graph reading" }
  likely_errors:
    title: { es: "Errores probables", en: "Likely errors" }
  next_step:
    title: { es: "Siguiente paso", en: "Next step" }

targets:
  flux_E:
    summary_rules:
      - id: "flux_E_sum"
        when: "always"
        status: "info"
        text:
          es: "Lectura global de la divergencia eléctrica: indica cuántas líneas netas brotan del volumen."
          en: "Global reading of electric divergence: indicates how many net lines sprout from the volume."
    physical_reading_rules:
      - id: "flux_E_phys"
        when: "always"
        status: "info"
        text:
          es: "Dado que el flujo eléctrico [[flux_E]] es proporcional a la carga encerrada [[q_enc]], un valor positivo significa que la región actúa como fuente porque las líneas brotan hacia fuera. Esto indica una divergencia neta en el balance global."
          en: "Since the electric flux [[flux_E]] to the enclosed charge [[q_enc]], a positive value means the region acts as a source because the lines sprout outwards. This indicates a net divergence in the global balance."
    coherence_rules:
      - id: "flux_E_coh"
        when: "always"
        status: "ok"
        text:
          es: "El balance debe ser consistente porque la carga es la causa única del flujo neto en el vacío."
          en: "The balance must be consistent because charge is the sole cause of net flux in vacuum."
    model_validity_rules:
      - id: "flux_E_val"
        when: "always"
        status: "ok"
        text:
          es: "Este modelo asume un régimen macroscópico donde se desprecia la cuantización atómica."
          en: "This model assumes a macroscopic regime where atomic quantization is neglected."
    graph_rules:
      - id: "flux_E_graph"
        when: "always"
        status: "info"
        text:
          es: "Se visualiza mediante la densidad de líneas que brotan de la superficie cerrada."
          en: "It is visualized through the density of lines sprouting from the closed surface."
    likely_errors:
      - id: "flux_E_err"
        when: "always"
        status: "warning"
        text:
          es: "Es un error común confundir el flujo neto con el valor local del campo en un punto."
          en: "It is a common error to confuse net flux with the local field value at a point."
    next_step_rules:
      - id: "flux_E_next"
        when: "always"
        status: "info"
        text:
          es: "Usar este flujo para calcular la fuerza eléctrica resultante sobre otras cargas."
          en: "Use this flux to calculate the resulting electric force on other charges."

  flux_B:
    summary_rules:
      - id: "flux_B_sum"
        when: "always"
        status: "info"
        text:
          es: "Inexistencia de monopolos magnéticos: el flujo neto en superficie cerrada es siempre cero."
          en: "Non-existence of magnetic monopoles: net flux on a closed surface is always zero."
    physical_reading_rules:
      - id: "flux_B_phys"
        when: "always"
        status: "info"
        text:
          es: "El flujo magnético [[flux_B]] nulo implica que todas las líneas que entran en un volumen deben salir de él. Esto refleja que el campo magnético es solenoidal a escala macroscópica."
          en: "Zero magnetic flux [[flux_B]] implies that all lines entering a volume must exit it. This reflects that the magnetic field is solenoidal at a macroscopic scale."
    coherence_rules:
      - id: "flux_B_coh"
        when: "always"
        status: "ok"
        text:
          es: "Si el cálculo da distinto de cero, existe una rotura de la topología o un error de integración."
          en: "If the calculation results in non-zero, there is a breakdown of topology or an integration error."
    model_validity_rules:
      - id: "flux_B_val"
        when: "always"
        status: "ok"
        text:
          es: "Universalmente válido en electromagnetismo clásico."
          en: "Universally valid in classical electromagnetism."
    graph_rules:
      - id: "flux_B_graph"
        when: "always"
        status: "info"
        text:
          es: "Se visualiza como bucles de campo cerrados que atraviesan la superficie sin nacer en ella."
          en: "It is visualized as closed field loops that pass through the surface without originating in it."
    likely_errors:
      - id: "flux_B_err"
        when: "always"
        status: "warning"
        text:
          es: "Tratar de hallar una fuente puntual de magnetismo ignorando la naturaleza de dipolo."
          en: "Trying to find a point source of magnetism ignoring the dipole nature."
    next_step_rules:
      - id: "flux_B_next"
        when: "always"
        status: "info"
        text:
          es: "Aplicar la ley de Faraday si este flujo varía a través de una superficie abierta."
          en: "Apply Faraday's law if this flux varies through an open surface."

  emf:
    summary_rules:
      - id: "emf_sum"
        when: "always"
        status: "info"
        text:
          es: "Indica la tendencia del campo eléctrico a circular a lo largo de un camino cerrado."
          en: "Indicates the tendency of the electric field to circulate along a closed path."
    physical_reading_rules:
      - id: "emf_phys"
        when: "always"
        status: "info"
        text:
          es: "La fuerza electromotriz [[emf]] se genera porque existe una variación temporal del flujo magnético [[dPhiB_dt]]. Esto significa que el cambio de campo es la causa del giro inducido."
          en: "The electromotive force [[emf]] is generated because there is a time variation of the magnetic flux [[dPhiB_dt]]. This means that the field change is the cause of the induced rotation."
    coherence_rules:
      - id: "emf_coh"
        when: "always"
        status: "ok"
        text:
          es: "El signo de la [[emf]] se opone siempre a la variación del flujo porque debe conservarse la energía."
          en: "The sign of the [[emf]] always opposes the flux variation because energy must be conserved."
    model_validity_rules:
      - id: "emf_val"
        when: "always"
        status: "ok"
        text:
          es: "Válido mientras no se superen frecuencias donde el modelo de balance global falla."
          en: "Valid as long as frequencies where the global balance model fails are not exceeded."
    graph_rules:
      - id: "emf_graph"
        when: "always"
        status: "info"
        text:
          es: "Se observa como una circulación circular en el contorno del experimento visual."
          en: "It is observed as a circular circulation in the contour of the visual experiment."
    likely_errors:
      - id: "emf_err"
        when: "always"
        status: "warning"
        text:
          es: "Un error habitual es ignorar el signo negativo dictado por la ley de Lenz."
          en: "A common error is to ignore the negative sign dictated by Lenz's law."
    next_step_rules:
      - id: "emf_next"
        when: "always"
        status: "info"
        text:
          es: "Verificar si esta [[emf]] genera una corriente medible en un circuito cerrado."
          en: "Verify if this [[emf]] generates a measurable current in a closed circuit."

  cirB:
    summary_rules:
      - id: "cirB_sum"
        when: "always"
        status: "info"
        text:
          es: "Describe el giro del campo magnético alrededor de corrientes y flujos variables."
          en: "Describes the rotation of the magnetic field around currents and variable fluxes."
    physical_reading_rules:
      - id: "cirB_phys"
        when: "always"
        status: "info"
        text:
          es: "La circulación magnética [[cirB]] es proporcional a la corriente total (conducción más desplazamiento). Indica cómo el campo magnético se enrolla alrededor de sus fuentes dinámicas."
          en: "Magnetic circulation [[cirB]] is proportional to total current (conduction plus displacement). It indicates how the magnetic field wraps around its dynamic sources."
    coherence_rules:
      - id: "cirB_coh"
        when: "always"
        status: "ok"
        text:
          es: "Debe ser consistente para cualquier superficie que comparta el mismo contorno cerrado."
          en: "Must be consistent for any surface sharing the same closed contour."
    model_validity_rules:
      - id: "cirB_val"
        when: "always"
        status: "ok"
        text:
          es: "Incluye el término de Maxwell necesario para la coherencia en regímenes de alta frecuencia."
          en: "Includes Maxwell's term necessary for coherence in high-frequency regimes."
    graph_rules:
      - id: "cirB_graph"
        when: "always"
        status: "info"
        text:
          es: "Se representa mediante flechas de campo magnético que forman anillos cerrados."
          en: "It is represented by magnetic field arrows forming closed rings."
    likely_errors:
      - id: "cirB_err"
        when: "always"
        status: "warning"
        text:
          es: "Olvidar la corriente de desplazamiento [[dPhiE_dt]] en problemas con condensadores."
          en: "Forgetting the displacement current [[dPhiE_dt]] in problems with capacitors."
    next_step_rules:
      - id: "cirB_next"
        when: "always"
        status: "info"
        text:
          es: "Usar la circulación para hallar la intensidad local del campo mediante simetrías."
          en: "Use the circulation to find the local field intensity through symmetries."

  q_enc:
    summary_rules:
      - id: "q_enc_sum"
        when: "always"
        status: "info"
        text:
          es: "Carga eléctrica neta atrapada dentro de un volumen de control."
          en: "Net electric charge trapped inside a control volume."
    physical_reading_rules:
      - id: "q_enc_phys"
        when: "always"
        status: "info"
        text:
          es: "La carga [[q_enc]] es la fuente escalar del flujo eléctrico. Su presencia rompe la simetría del vacío al crear divergencia en el campo eléctrico."
          en: "Charge [[q_enc]] is the scalar source of electric flux. Its presence breaks vacuum symmetry by creating divergence in the electric field."
    coherence_rules:
      - id: "q_enc_coh"
        when: "always"
        status: "ok"
        text:
          es: "Consistente con el principio de conservación de la carga."
          en: "Consistent with the principle of charge conservation."
    model_validity_rules:
      - id: "q_enc_val"
        when: "always"
        status: "ok"
        text:
          es: "Se asume una distribución continua en este modelo macroscópico."
          en: "A continuous distribution is assumed in this macroscopic model."
    graph_rules:
      - id: "q_enc_graph"
        when: "always"
        status: "info"
        text:
          es: "Se representa como puntos o densidades de color dentro de la superficie visual."
          en: "It is represented as points or color densities inside the visual surface."
    likely_errors:
      - id: "q_enc_err"
        when: "always"
        status: "warning"
        text:
          es: "Ignorar las cargas situadas fuera de la superficie de Gauss elegida."
          en: "Ignoring charges located outside the chosen Gauss surface."
    next_step_rules:
      - id: "q_enc_next"
        when: "always"
        status: "info"
        text:
          es: "Calcular el flujo eléctrico [[flux_E]] resultante mediante la ley de Gauss."
          en: "Calculate the resulting electric flux [[flux_E]] using Gauss's law."
`;export{e as default};
