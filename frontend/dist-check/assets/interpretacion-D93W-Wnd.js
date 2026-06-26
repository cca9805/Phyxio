const e=`version: 2
id: interpretacion-simetrias-y-conservaciones
leaf_id: simetrias-y-conservaciones
nombre:
  es: Interpretacion de simetrias y conservaciones
  en: Interpretation of symmetries and conservation laws
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: mecanica-analitica
  parent_id: lagrangiano
  ruta_relativa: fisica-clasica/mecanica/mecanica-analitica/lagrangiano/simetrias-y-conservaciones
dependencies:
  formulas: [ momento_conjugado_noether, carga_noether, coordenada_ciclica, energia_por_invariancia_temporal, momento_lineal_por_traslacion, momento_angular_por_rotacion ]
  magnitudes: [ Q, p_i, X_i, L, DLv, qdi, dpdt, E, P, m, v, J, r ]
output_contract:
  sections: [ summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step ]
result_blocks:
  summary: { title: { es: Resumen de simetria, en: Symmetry summary } }
  physical_reading: { title: { es: Lectura fisica, en: Physical reading } }
  coherence: { title: { es: Coherencia, en: Coherence } }
  model_validity: { title: { es: Validez del modelo, en: Model validity } }
  graph_reading: { title: { es: Lectura grafica, en: Graph reading } }
  likely_errors: { title: { es: Errores probables, en: Likely errors } }
  next_step: { title: { es: Siguiente paso, en: Next step } }
targets:
  Q:
    summary_rules:
    - { id: q_summary, when: "true", status: info, text: { es: "Q significa la cantidad que permanece constante porque una transformacion continua no cambia la fisica del lagrangiano.", en: "Q is the quantity that remains constant because a continuous transformation does not change the physics of the Lagrangian." } }
    physical_reading_rules:
    - { id: q_physical, when: "true", status: info, text: { es: "La conservacion no aparece por azar; es causada por una simetria concreta del modelo.", en: "Conservation does not appear by chance; it is caused by a concrete symmetry of the model." } }
    coherence_rules:
    - { id: q_coherence, when: "true", status: ok, text: { es: "Q solo debe declararse conservada si la simetria es exacta en el dominio estudiado.", en: "Q should be declared conserved only if the symmetry is exact in the studied domain." } }
    model_validity_rules:
    - { id: q_validity, when: "true", status: ok, text: { es: "La lectura requiere lagrangiano diferenciable y transformacion continua.", en: "The reading requires a differentiable Lagrangian and a continuous transformation." } }
    graph_rules:
    - { id: q_graph, when: "true", status: info, text: { es: "En el grafico, una cantidad conservada se lee como valor estable frente a la evolucion ideal.", en: "In the graph, a conserved quantity is read as a stable value under ideal evolution." } }
    likely_errors:
    - { id: q_error, when: "true", status: warning, text: { es: "Error frecuente: llamar conservada a una cantidad sin identificar la simetria que la genera.", en: "Common mistake: calling a quantity conserved without identifying the symmetry generating it." } }
    next_step_rules:
    - { id: q_next, when: "true", status: info, text: { es: "Busca si la simetria es temporal, traslacional, rotacional o una coordenada ciclica.", en: "Check whether the symmetry is temporal, translational, rotational, or a cyclic coordinate." } }
  dpdt:
    summary_rules:
    - { id: dpdt_summary, when: "true", status: info, text: { es: "dpdt es la prueba local de conservacion del momento conjugado asociado a una coordenada ciclica.", en: "dpdt is the local conservation test for the conjugate momentum associated with a cyclic coordinate." } }
    physical_reading_rules:
    - { id: dpdt_physical, when: "true", status: info, text: { es: "dpdt igual a cero significa que p_i permanece constante, no que la coordenada este en reposo.", en: "dpdt equal to zero means that p_i remains constant, not that the coordinate is at rest." } }
    coherence_rules:
    - { id: dpdt_coherence, when: "true", status: ok, text: { es: "La condicion solo es coherente si la coordenada no aparece explicitamente en L.", en: "The condition is coherent only if the coordinate does not appear explicitly in L." } }
    model_validity_rules:
    - { id: dpdt_validity, when: "true", status: ok, text: { es: "La regla es exacta dentro del modelo lagrangiano conservativo con simetria continua no rota.", en: "The rule is exact within a conservative Lagrangian model with unbroken continuous symmetry." } }
    graph_rules:
    - { id: dpdt_graph, when: "true", status: info, text: { es: "En una grafica temporal, dpdt cercano a cero se lee como pendiente nula de p_i dentro de tolerancia.", en: "In a time graph, dpdt close to zero is read as zero slope of p_i within tolerance." } }
    likely_errors:
    - { id: dpdt_error, when: "true", status: warning, text: { es: "Error frecuente: imponer dpdt = 0 a una coordenada que no es ciclica.", en: "Common mistake: imposing dpdt = 0 on a coordinate that is not cyclic." } }
    next_step_rules:
    - { id: dpdt_next, when: "true", status: info, text: { es: "Si dpdt no es cero, localiza que termino de L rompe la simetria.", en: "If dpdt is not zero, locate which term in L breaks the symmetry." } }
  p_i:
    summary_rules:
    - { id: p_summary, when: "true", status: info, text: { es: "p_i es la pendiente dinamica que conecta la coordenada generalizada con una posible ley conservada.", en: "p_i is the dynamical slope connecting the generalized coordinate with a possible conservation law." } }
    physical_reading_rules:
    - { id: p_physical, when: "true", status: info, text: { es: "Si la coordenada es ciclica, el momento conjugado deja de cambiar y se vuelve una integral de movimiento.", en: "If the coordinate is cyclic, conjugate momentum stops changing and becomes an integral of motion." } }
    coherence_rules:
    - { id: p_coherence, when: "true", status: ok, text: { es: "p_i debe salir de L, no de una formula newtoniana copiada.", en: "p_i must come from L, not from a copied Newtonian formula." } }
    model_validity_rules:
    - { id: p_validity, when: "true", status: ok, text: { es: "La conservacion exige ausencia real de la coordenada en L.", en: "Conservation requires true absence of the coordinate from L." } }
    graph_rules:
    - { id: p_graph, when: "true", status: info, text: { es: "En el grafico simple, p_i escala linealmente con la velocidad.", en: "In the simple graph, p_i scales linearly with velocity." } }
    likely_errors:
    - { id: p_error, when: "true", status: warning, text: { es: "Error frecuente: creer que todo momento conjugado se conserva.", en: "Common mistake: believing every conjugate momentum is conserved." } }
    next_step_rules:
    - { id: p_next, when: "true", status: info, text: { es: "Comprueba si la coordenada asociada aparece explicitamente en L.", en: "Check whether the associated coordinate appears explicitly in L." } }
  E:
    summary_rules:
    - { id: e_summary, when: "true", status: info, text: { es: "E es la cantidad conservada asociada a invariancia temporal del lagrangiano.", en: "E is the conserved quantity associated with time-translation invariance of the Lagrangian." } }
    physical_reading_rules:
    - { id: e_physical, when: "true", status: info, text: { es: "Si el experimento no distingue un instante absoluto de otro, la energia mecanica permanece constante en el modelo ideal.", en: "If the experiment does not distinguish one absolute instant from another, mechanical energy remains constant in the ideal model." } }
    coherence_rules:
    - { id: e_coherence, when: "true", status: ok, text: { es: "E conservada no significa ausencia de movimiento.", en: "Conserved E does not mean absence of motion." } }
    model_validity_rules:
    - { id: e_validity, when: "true", status: ok, text: { es: "Si L depende explicitamente del tiempo, esta conservacion puede fallar.", en: "If L depends explicitly on time, this conservation may fail." } }
    graph_rules:
    - { id: e_graph, when: "true", status: info, text: { es: "La energia conservada organiza curvas de nivel o balances constantes.", en: "Conserved energy organizes level curves or constant balances." } }
    likely_errors:
    - { id: e_error, when: "true", status: warning, text: { es: "Error frecuente: aplicar conservacion de energia con fuerzas externas temporales.", en: "Common mistake: applying energy conservation with time-dependent external forces." } }
    next_step_rules:
    - { id: e_next, when: "true", status: info, text: { es: "Relaciona invariancia temporal con energia antes de resolver ecuaciones.", en: "Relate time invariance to energy before solving equations." } }
  P:
    summary_rules:
    - { id: p_lin_summary, when: "true", status: info, text: { es: "P se conserva cuando trasladar el sistema no cambia el lagrangiano.", en: "P is conserved when translating the system does not change the Lagrangian." } }
    physical_reading_rules:
    - { id: p_lin_physical, when: "true", status: info, text: { es: "La homogeneidad espacial causa conservacion del momento lineal.", en: "Spatial homogeneity causes conservation of linear momentum." } }
    coherence_rules:
    - { id: p_lin_coherence, when: "true", status: ok, text: { es: "Una fuerza externa dependiente de posicion rompe esta lectura.", en: "An external position-dependent force breaks this reading." } }
    model_validity_rules:
    - { id: p_lin_validity, when: "true", status: ok, text: { es: "La formula simple requiere masa constante y traslacion libre en la direccion considerada.", en: "The simple formula requires constant mass and free translation in the considered direction." } }
    graph_rules:
    - { id: p_lin_graph, when: "true", status: info, text: { es: "En el grafico, P crece linealmente con v.", en: "In the graph, P grows linearly with v." } }
    likely_errors:
    - { id: p_lin_error, when: "true", status: warning, text: { es: "Error frecuente: conservar P aunque exista una fuerza externa neta.", en: "Common mistake: conserving P despite a net external force." } }
    next_step_rules:
    - { id: p_lin_next, when: "true", status: info, text: { es: "Busca si hay simetria traslacional antes de imponer P constante.", en: "Look for translational symmetry before imposing constant P." } }
  J:
    summary_rules:
    - { id: j_summary, when: "true", status: info, text: { es: "J se conserva cuando la orientacion absoluta no cambia la fisica del sistema.", en: "J is conserved when absolute orientation does not change the physics of the system." } }
    physical_reading_rules:
    - { id: j_physical, when: "true", status: info, text: { es: "La isotropia espacial causa conservacion del momento angular.", en: "Spatial isotropy causes conservation of angular momentum." } }
    coherence_rules:
    - { id: j_coherence, when: "true", status: ok, text: { es: "Un torque externo rompe la conservacion de J.", en: "An external torque breaks conservation of J." } }
    model_validity_rules:
    - { id: j_validity, when: "true", status: ok, text: { es: "La forma rP es una lectura plana simple; el caso general es vectorial.", en: "The rP form is a simple planar reading; the general case is vectorial." } }
    graph_rules:
    - { id: j_graph, when: "true", status: info, text: { es: "En el grafico, J escala con P para radio fijo.", en: "In the graph, J scales with P for fixed radius." } }
    likely_errors:
    - { id: j_error, when: "true", status: warning, text: { es: "Error frecuente: usar cualquier distancia como brazo radial efectivo.", en: "Common mistake: using any distance as the effective radial arm." } }
    next_step_rules:
    - { id: j_next, when: "true", status: info, text: { es: "Comprueba si el sistema conserva simetria rotacional.", en: "Check whether the system preserves rotational symmetry." } }
`;export{e as default};
