const e=`version: 2
id: interpretacion-centro-de-masas-en-cuerpos-extendidos
leaf_id: centro-de-masas-en-cuerpos-extendidos
nombre:
  es: "Interpretación del centro de masas en cuerpos extendidos"
  en: "Interpretation of center of mass in extended bodies"
scope:
  area: fisica-clasica
  bloque: mecanica
  subbloque: cantidad-de-movimiento
  parent_id: centro-de-masas
  ruta_relativa: fisica-clasica/mecanica/cantidad-de-movimiento/centro-de-masas/centro-de-masas-en-cuerpos-extendidos
ui:
  enabled: true
  display_modes: [calculator_inline, graph_inline, dedicated_tab, modal]
  labels: [barycenter, mass_distribution, integral_physics]
  priority_order: [summary_rules, physical_reading_rules, coherence_rules, model_validity_rules, graph_rules, likely_errors, next_step_rules]
  inline_limits: 2
dependencies:
  formulas: [M, rcm, xcm, ycm, zcm, dm_linear, dm_surface, dm_volume, superposition_negative_mass]
  magnitudes: [M, dm, r, rcm, x, y, z, xcm, ycm, zcm, lambda, sigma, rho, dL, dA, dV]
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
result_blocks:
  summary: { title: { es: "Resumen del promedio continuo", en: "Continuous average summary" } }
  physical_reading: { title: { es: "Lectura física de la distribución", en: "Physical reading of the distribution" } }
  coherence: { title: { es: "Coherencia geométrica y dimensional", en: "Geometric and dimensional coherence" } }
  model_validity: { title: { es: "Validez del modelo integral", en: "Validity of the integral model" } }
  graph_reading: { title: { es: "Lectura gráfica del centro de masas", en: "Graph reading of the center of mass" } }
  likely_errors: { title: { es: "Errores probables", en: "Likely mistakes" } }
  next_step: { title: { es: "Siguiente comprobación", en: "Next check" } }
targets:
  M:
    summary_rules: [{ id: M_s, when: "true", status: ok, text: { es: "[[M]] resulta de la integración de dm.", en: "[[M]] results from integrating dm." } }]
    physical_reading_rules: [{ id: M_r, when: "true", status: info, text: { es: "La masa total actúa como la inercia que causa la resistencia al cambio de movimiento global.", en: "Total mass acts as the inertia that causes resistance to global motion changes." } }]
    coherence_rules: [{ id: M_c, when: "result <= 0", status: danger, text: { es: "Masa positiva requerida.", en: "Positive mass required." } }]
    model_validity_rules: [{ id: M_v, when: "true", status: ok, text: { es: "Modelo integrable clásico.", en: "Classic integrable model." } }]
    graph_rules: [{ id: M_g, when: "true", status: ok, text: { es: "Escala de inercia.", en: "Inertia scale." } }]
    likely_errors: [{ id: M_e, when: "true", status: warning, text: { es: "Límites erróneos.", en: "Wrong limits." } }]
    next_step_rules: [{ id: M_n, when: "true", status: info, text: { es: "Normaliza momentos.", en: "Normalize moments." } }]
  rcm:
    summary_rules: [{ id: r_s, when: "true", status: ok, text: { es: "Posición media ponderada.", en: "Weighted average position." } }]
    physical_reading_rules: [{ id: r_r, when: "true", status: info, text: { es: "La distribución de masa causa que el baricentro se ubique en el punto de equilibrio inercial.", en: "Mass distribution causes the barycenter to be located at the inertial equilibrium point." } }]
    coherence_rules: [{ id: r_c, when: "true", status: ok, text: { es: "Dentro de la envoltura.", en: "Inside the hull." } }]
    model_validity_rules: [{ id: r_v, when: "true", status: ok, text: { es: "Posición intrínseca.", en: "Intrinsic position." } }]
    graph_rules: [{ id: r_g, when: "true", status: ok, text: { es: "Punto de aplicación global.", en: "Global application point." } }]
    likely_errors: [{ id: r_e, when: "true", status: warning, text: { es: "Fuera del material.", en: "Outside material." } }]
    next_step_rules: [{ id: r_n, when: "true", status: info, text: { es: "Estudia el movimiento.", en: "Study motion." } }]
  xcm:
    summary_rules: [{ id: x_s, when: "true", status: ok, text: { es: "Equilibrio horizontal.", en: "Horizontal balance." } }]
    physical_reading_rules: [{ id: x_r, when: "true", status: info, text: { es: "Cualquier asimetría en la masa causa un desplazamiento de [[xcm]] hacia la región más densa.", en: "Any mass asymmetry causes a shift of [[xcm]] toward the denser region." } }]
    coherence_rules: [{ id: x_c, when: "true", status: ok, text: { es: "Dentro de límites x.", en: "Within x limits." } }]
    model_validity_rules: [{ id: x_v, when: "true", status: ok, text: { es: "Proyección integrable.", en: "Integrable projection." } }]
    graph_rules: [{ id: x_g, when: "true", status: ok, text: { es: "Eje vertical de equilibrio.", en: "Vertical equilibrium axis." } }]
    likely_errors: [{ id: x_e, when: "true", status: warning, text: { es: "Error: No confundir centroide geométrico con [[xcm]] si la densidad es variable.", en: "Error: Do not confuse geometric centroid with [[xcm]] if density is variable." } }]
    next_step_rules: [{ id: x_n, when: "true", status: info, text: { es: "Calcula ycm.", en: "Calculate ycm." } }]
  lambda:
    summary_rules: [{ id: l_s, when: "true", status: ok, text: { es: "Masa/longitud.", en: "Mass/length." } }]
    physical_reading_rules: [{ id: l_r, when: "true", status: info, text: { es: "La densidad [[lambda]] provoca que tramos de igual longitud tengan diferentes aportes de masa.", en: "Density [[lambda]] causes segments of equal length to have different mass contributions." } }]
    coherence_rules: [{ id: l_c, when: "true", status: ok, text: { es: "Unidades kg/m.", en: "kg/m units." } }]
    model_validity_rules: [{ id: l_v, when: "true", status: ok, text: { es: "Grosor despreciable.", en: "Negligible thickness." } }]
    graph_rules: [{ id: l_g, when: "true", status: ok, text: { es: "Intensidad de masa lineal.", en: "Linear mass intensity." } }]
    likely_errors: [{ id: l_e, when: "true", status: warning, text: { es: "Ignorar variabilidad.", en: "Ignore variability." } }]
    next_step_rules: [{ id: l_n, when: "true", status: info, text: { es: "Integra para masa.", en: "Integrate for mass." } }]
  sigma:
    summary_rules: [{ id: si_s, when: "true", status: ok, text: { es: "Masa/área.", en: "Mass/area." } }]
    physical_reading_rules: [{ id: si_r, when: "true", status: info, text: { es: "La variación de [[sigma]] resulta en un cambio en el centro de masas planar del objeto.", en: "Variation in [[sigma]] results in a change in the object's planar center of mass." } }]
    coherence_rules: [{ id: si_c, when: "true", status: ok, text: { es: "Unidades kg/m².", en: "kg/m² units." } }]
    model_validity_rules: [{ id: si_v, when: "true", status: ok, text: { es: "Lámina delgada.", en: "Thin lamina." } }]
    graph_rules: [{ id: si_g, when: "true", status: ok, text: { es: "Sombreado de superficie.", en: "Surface shading." } }]
    likely_errors: [{ id: si_e, when: "true", status: warning, text: { es: "Olvidar espesor real.", en: "Forget real thickness." } }]
    next_step_rules: [{ id: si_n, when: "true", status: info, text: { es: "Usa integrales dobles.", en: "Use double integrals." } }]
  rho:
    summary_rules: [{ id: rh_s, when: "true", status: ok, text: { es: "Masa/volumen.", en: "Mass/volume." } }]
    physical_reading_rules: [{ id: rh_r, when: "true", status: info, text: { es: "La densidad [[rho]] es la causa de que sólidos visualmente idénticos tengan baricentros distintos.", en: "Density [[rho]] is the reason visually identical solids have different barycenters." } }]
    coherence_rules: [{ id: rh_c, when: "true", status: ok, text: { es: "Unidades kg/m³.", en: "kg/m³ units." } }]
    model_validity_rules: [{ id: rh_v, when: "true", status: ok, text: { es: "Cuerpo tridimensional.", en: "3D body." } }]
    graph_rules: [{ id: rh_g, when: "true", status: ok, text: { es: "Densidad de malla.", en: "Mesh density." } }]
    likely_errors: [{ id: rh_e, when: "true", status: warning, text: { es: "Usar en modelos 2D.", en: "Use in 2D models." } }]
    next_step_rules: [{ id: rh_n, when: "true", status: info, text: { es: "Usa integrales triples.", en: "Use triple integrals." } }]
  dm:
    summary_rules: [{ id: dm_s, when: "true", status: ok, text: { es: "Constituyente infinitesimal.", en: "Infinitesimal constituent." } }]
    physical_reading_rules: [{ id: dm_r, when: "true", status: info, text: { es: "Cada [[dm]] causa una contribución elemental al primer momento de masa del cuerpo.", en: "Each [[dm]] causes an elementary contribution to the body's first mass moment." } }]
    coherence_rules: [{ id: dm_c, when: "true", status: ok, text: { es: "Densidad por diferencial.", en: "Density by differential." } }]
    model_validity_rules: [{ id: dm_v, when: "true", status: ok, text: { es: "Escala macroscópica.", en: "Macroscopic scale." } }]
    graph_rules: [{ id: dm_g, when: "true", status: ok, text: { es: "Elemento de integración.", en: "Integration element." } }]
    likely_errors: [{ id: dm_e, when: "true", status: warning, text: { es: "Confundir con masa total.", en: "Confuse with total mass." } }]
    next_step_rules: [{ id: dm_n, when: "true", status: info, text: { es: "Sustituye por densidad.", en: "Replace by density." } }]
  ycm:
    summary_rules: [{ id: y_s, when: "true", status: ok, text: { es: "Equilibrio vertical.", en: "Vertical balance." } }]
    physical_reading_rules: [{ id: y_r, when: "true", status: info, text: { es: "La distribución de masa en y causa el desplazamiento del baricentro a su altura media.", en: "Mass distribution in y causes the barycenter to shift to its average height." } }]
    coherence_rules: [{ id: y_c, when: "true", status: ok, text: { es: "Dentro de límites y.", en: "Within y limits." } }]
    model_validity_rules: [{ id: y_v, when: "true", status: ok, text: { es: "Proyección en eje y.", en: "Projection on y-axis." } }]
    graph_rules: [{ id: y_g, when: "true", status: ok, text: { es: "Línea horizontal de CM.", en: "Horizontal CM line." } }]
    likely_errors: [{ id: y_e, when: "true", status: warning, text: { es: "Error de origen.", en: "Origin error." } }]
    next_step_rules: [{ id: y_n, when: "true", status: info, text: { es: "Calcula zcm.", en: "Calculate zcm." } }]
  zcm:
    summary_rules: [{ id: z_s, when: "true", status: ok, text: { es: "Equilibrio en profundidad.", en: "Depth balance." } }]
    physical_reading_rules: [{ id: z_r, when: "true", status: info, text: { es: "La profundidad de la materia resulta en la coordenada [[zcm]] del equilibrio inercial.", en: "Matter depth results in the [[zcm]] coordinate of inertial equilibrium." } }]
    coherence_rules: [{ id: z_c, when: "true", status: ok, text: { es: "Dentro de límites z.", en: "Within z limits." } }]
    model_validity_rules: [{ id: z_v, when: "true", status: ok, text: { es: "Modelo 3D.", en: "3D model." } }]
    graph_rules: [{ id: z_g, when: "true", status: ok, text: { es: "Coordenada de profundidad.", en: "Depth coordinate." } }]
    likely_errors: [{ id: z_e, when: "true", status: warning, text: { es: "Olvidar tercera dimensión.", en: "Forget third dimension." } }]
    next_step_rules: [{ id: z_n, when: "true", status: info, text: { es: "Verifica simetría total.", en: "Verify total symmetry." } }]
  r:
    summary_rules: [{ id: r_lo_s, when: "true", status: ok, text: { es: "Posición local del elemento.", en: "Local position of the element." } }]
    physical_reading_rules: [{ id: r_lo_r, when: "true", status: info, text: { es: "Define el brazo de momento que causa el aporte inercial de cada diferencial.", en: "Defines the moment arm that causes the inertial contribution of each differential." } }]
    coherence_rules: [{ id: r_lo_c, when: "true", status: ok, text: { es: "Referido al origen elegido.", en: "Referred to the chosen origin." } }]
    model_validity_rules: [{ id: r_lo_v, when: "true", status: ok, text: { es: "Coordenadas continuas.", en: "Continuous coordinates." } }]
    graph_rules: [{ id: r_lo_g, when: "true", status: ok, text: { es: "Vector desde el origen.", en: "Vector from the origin." } }]
    likely_errors: [{ id: r_lo_e, when: "true", status: warning, text: { es: "Error de signo en cuadrantes.", en: "Sign error in quadrants." } }]
    next_step_rules: [{ id: r_lo_n, when: "true", status: info, text: { es: "Integra sobre el dominio.", en: "Integrate over the domain." } }]
  x:
    summary_rules: [{ id: x_lo_s, when: "true", status: ok, text: { es: "Componente x local.", en: "Local x-component." } }]
    physical_reading_rules: [{ id: x_lo_r, when: "true", status: info, text: { es: "Su valor provoca el desplazamiento del momento de masa en el eje horizontal.", en: "Its value causes the mass moment shift on the horizontal axis." } }]
    coherence_rules: [{ id: x_lo_c, when: "true", status: ok, text: { es: "Acotado por la geometría.", en: "Bounded by geometry." } }]
    model_validity_rules: [{ id: x_lo_v, when: "true", status: ok, text: { es: "Eje cartesiano estándar.", en: "Standard Cartesian axis." } }]
    graph_rules: [{ id: x_lo_g, when: "true", status: ok, text: { es: "Posición horizontal.", en: "Horizontal position." } }]
    likely_errors: [{ id: x_lo_e, when: "true", status: warning, text: { es: "Confundir x con xcm.", en: "Confuse x with xcm." } }]
    next_step_rules: [{ id: x_lo_n, when: "true", status: info, text: { es: "Úsalo en el integrando.", en: "Use it in the integrand." } }]
  dL:
    summary_rules: [{ id: dl_s, when: "true", status: ok, text: { es: "Diferencial de longitud.", en: "Length differential." } }]
    physical_reading_rules: [{ id: dl_r, when: "true", status: info, text: { es: "Representa el trozo lineal que resulta en el aporte diferencial de masa dm.", en: "Represents the linear piece that results in the dm mass differential contribution." } }]
    coherence_rules: [{ id: dl_c, when: "true", status: ok, text: { es: "Métrica de una curva.", en: "Metric of a curve." } }]
    model_validity_rules: [{ id: dl_v, when: "true", status: ok, text: { es: "Modelo de hilo delgado.", en: "Thin wire model." } }]
    graph_rules: [{ id: dl_g, when: "true", status: ok, text: { es: "Segmento infinitesimal.", en: "Infinitesimal segment." } }]
    likely_errors: [{ id: dl_e, when: "true", status: warning, text: { es: "Olvidar Jacobiano en curvas.", en: "Forget Jacobian in curves." } }]
    next_step_rules: [{ id: dl_n, when: "true", status: info, text: { es: "Parametriza la curva.", en: "Parametrize the curve." } }]
`;export{e as default};
