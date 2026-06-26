const e=`version: 1\r
formulas:\r
- id: tercera_ley_vectorial\r
  title:\r
    es: tercera ley en forma vectorial\r
    en: third law in vector form\r
  equation: FBA = -FAB\r
  latex: \\vec F_{B\\to A} = -\\vec F_{A\\to B}\r
  rearrangements:\r
  - target: FBA\r
    equation: FBA = -FAB\r
    latex: \\vec F_{B\\to A} = -\\vec F_{A\\to B}\r
    constraints: []\r
  - target: FAB\r
    equation: FAB = -FBA\r
    latex: \\vec F_{A\\to B} = -\\vec F_{B\\to A}\r
    constraints: []\r
  category: fundamental\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Toda interaccion mecanica clasica entre dos sistemas genera un par de fuerzas\r
      iguales en modulo y opuestas en direccion sobre cuerpos distintos.\r
    en: Every classical mechanical interaction between two systems generates a pair\r
      of forces equal in magnitude and opposite in direction on different bodies.\r
  constraints:\r
  - expr: 'true'\r
    message:\r
      es: Identifica con claridad que cuerpo ejerce la fuerza y sobre que cuerpo actua.\r
      en: Clearly identify which body exerts the force and on which body it acts.\r
  validity:\r
    es: Valida para interacciones clasicas entre dos sistemas cuando el par se describe\r
      en el mismo instante y con la misma linea de accion.\r
    en: Valid for classical interactions between two systems when the pair is described\r
      at the same instant and along the same line of action.\r
  dimension_check: N = N\r
  calculable: false\r
  motivo_no_calculable:\r
    es: Es una relacion estructural del par de interaccion y no una ecuacion de movimiento\r
      independiente para un solo cuerpo.\r
    en: It is a structural relation of the interaction pair and not an independent\r
      equation of motion for a single body.\r
  used_in:\r
  - theory\r
  - examples\r
  - interpretation\r
  interpretation_tags:\r
  - reciprocity\r
  - body_separation\r
  - interaction_pair\r
  result_semantics:\r
    target: FBA\r
    meaning: Resulta util para interpretar FBA en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Usa esta relacion solo si ambas fuerzas describen la misma interaccion y\r
        no fuerzas distintas del mismo cuerpo.\r
      en: Use this relation only if both forces describe the same interaction and\r
        not different forces acting on the same body.\r
  coherence_checks:\r
  - expr: 'true'\r
    severity: ok\r
    message:\r
      es: La tercera ley siempre debe leerse con dos diagramas de cuerpo libre separados.\r
      en: The third law must always be read with two separate free-body diagrams.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: 'true'\r
    message:\r
      es: Si intentas cancelar accion y reaccion en un solo DCL, estas mezclando cuerpos\r
        distintos.\r
      en: If you try to cancel action and reaction inside a single FBD, you are mixing\r
        different bodies.\r
- id: tercera_ley_eje_x\r
  title:\r
    es: tercera ley por componente x\r
    en: third law along x\r
  equation: FBx = -FAx\r
  latex: F_{B\\to A,x} = -F_{A\\to B,x}\r
  rearrangements:\r
  - target: FBx\r
    equation: FBx = -FAx\r
    latex: F_{B\\to A,x} = -F_{A\\to B,x}\r
    constraints: []\r
  - target: FAx\r
    equation: FAx = -FBx\r
    latex: F_{A\\to B,x} = -F_{B\\to A,x}\r
    constraints: []\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: Sobre un mismo eje, las componentes del par accion-reaccion conservan modulo\r
      y cambian de signo al intercambiar los cuerpos.\r
    en: Along a given axis, the components of an action-reaction pair keep the same\r
      magnitude and change sign when the bodies are exchanged.\r
  constraints:\r
  - expr: 'true'\r
    message:\r
      es: Mantén el mismo eje y la misma convención de signos al comparar FAx y FBx.\r
      en: Keep the same axis and sign convention when comparing FAx and FBx.\r
  validity:\r
    es: Valida cuando ambas componentes describen el mismo par y se proyectan sobre\r
      el mismo eje x.\r
    en: Valid when both components describe the same pair and are projected onto the\r
      same x axis.\r
  dimension_check: N = N\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - examples\r
  - calculator\r
  - interpretation\r
  interpretation_tags:\r
  - component_pair\r
  - sign_consistency\r
  - free_body_diagram\r
  result_semantics:\r
    target: FBx\r
    meaning: Resulta util para interpretar FBx en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: No uses esta igualdad para comparar fuerzas diferentes que simplemente apuntan\r
        en sentidos opuestos.\r
      en: Do not use this equality to compare different forces that merely point in\r
        opposite directions.\r
  coherence_checks:\r
  - expr: abs(FBx + FAx) < 1e-9\r
    severity: ok\r
    message:\r
      es: Las componentes sobre x son coherentes con un par accion-reaccion.\r
      en: The x components are consistent with an action-reaction pair.\r
  - expr: abs(FBx + FAx) >= 1e-9\r
    severity: warning\r
    message:\r
      es: Si FBx no es el opuesto de FAx, probablemente mezclaste cuerpos, ejes o\r
        signos.\r
      en: If FBx is not the opposite of FAx, the bodies, axes, or signs were probably\r
        mixed up.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: abs(FBx + FAx) >= 1e-9\r
    message:\r
      es: Revisa si escribiste ambas fuerzas en el mismo diagrama o si cambiaste el\r
        signo del eje entre un cuerpo y otro.\r
      en: Check whether both forces were written in the same diagram or whether the\r
        axis sign changed between one body and the other.\r
- id: tercera_ley_eje_y\r
  title:\r
    es: tercera ley por componente y\r
    en: third law along y\r
  equation: FBy = -FAy\r
  latex: F_{B\\to A,y} = -F_{A\\to B,y}\r
  rearrangements:\r
  - target: FBy\r
    equation: FBy = -FAy\r
    latex: F_{B\\to A,y} = -F_{A\\to B,y}\r
    constraints: []\r
  - target: FAy\r
    equation: FAy = -FBy\r
    latex: F_{A\\to B,y} = -F_{B\\to A,y}\r
    constraints: []\r
  category: derived\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: En la proyeccion sobre y, el par mantiene el mismo modulo y sentidos opuestos\r
      si ambas fuerzas pertenecen a la misma interaccion.\r
    en: In the y projection, the pair keeps the same magnitude and opposite directions\r
      if both forces belong to the same interaction.\r
  constraints:\r
  - expr: 'true'\r
    message:\r
      es: Proyecta el mismo par sobre el mismo eje y antes de comparar signos.\r
      en: Project the same pair onto the same y axis before comparing signs.\r
  validity:\r
    es: Valida en apoyos, cuerdas o contactos inclinados donde la interaccion tenga\r
      componente sobre y.\r
    en: Valid in supports, ropes, or inclined contacts where the interaction has a\r
      y component.\r
  dimension_check: N = N\r
  calculable: true\r
  motivo_no_calculable: null\r
  used_in:\r
  - examples\r
  - calculator\r
  - interpretation\r
  interpretation_tags:\r
  - component_pair\r
  - support_pair\r
  - sign_consistency\r
  result_semantics:\r
    target: FBy\r
    meaning: Resulta util para interpretar FBy en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: Distingue la componente reciproca de una reaccion de apoyo de otras fuerzas\r
        verticales como peso o tension externa.\r
      en: Distinguish the reciprocal component of a support reaction from other vertical\r
        forces such as weight or external tension.\r
  coherence_checks:\r
  - expr: abs(FBy + FAy) < 1e-9\r
    severity: ok\r
    message:\r
      es: Las componentes sobre y son coherentes con la tercera ley.\r
      en: The y components are consistent with the third law.\r
  - expr: abs(FBy + FAy) >= 1e-9\r
    severity: warning\r
    message:\r
      es: Si FBy no es el opuesto de FAy, revisa si comparaste fuerzas de naturalezas\r
        distintas.\r
      en: If FBy is not the opposite of FAy, check whether forces of different natures\r
        were compared.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: abs(FBy + FAy) >= 1e-9\r
    message:\r
      es: Es frecuente confundir la normal sobre un bloque con el peso del bloque;\r
        no forman un par accion-reaccion.\r
      en: It is common to confuse the normal force on a block with the block's weight;\r
        they do not form an action-reaction pair.\r
- id: par_normal_vectorial\r
  title:\r
    es: par normal de contacto\r
    en: normal contact pair\r
  equation: Nba = -Nab\r
  latex: \\vec N_{B\\to A} = -\\vec N_{A\\to B}\r
  rearrangements:\r
  - target: Nba\r
    equation: Nba = -Nab\r
    latex: \\vec N_{B\\to A} = -\\vec N_{A\\to B}\r
    constraints: []\r
  - target: Nab\r
    equation: Nab = -Nba\r
    latex: \\vec N_{A\\to B} = -\\vec N_{B\\to A}\r
    constraints: []\r
  category: auxiliary\r
  relation_type: constitutive_relation\r
  physical_meaning:\r
    es: La fuerza normal de contacto aparece en pares reciprocos entre las dos superficies\r
      que interactuan.\r
    en: The contact normal force appears as reciprocal pairs between the two interacting\r
      surfaces.\r
  constraints:\r
  - expr: 'true'\r
    message:\r
      es: Solo identifica el par si ambos vectores pertenecen al mismo contacto y\r
        no a apoyos diferentes.\r
      en: Identify the pair only if both vectors belong to the same contact and not\r
        to different supports.\r
  validity:\r
    es: Valida en modelos de contacto clasico donde puede definirse una normal comun\r
      a ambas superficies.\r
    en: Valid in classical contact models where a common normal can be defined for\r
      both surfaces.\r
  dimension_check: N = N\r
  calculable: false\r
  motivo_no_calculable:\r
    es: La igualdad establece la reciprocidad del contacto, pero el modulo requiere\r
      el balance dinamico de cada cuerpo.\r
    en: The equality states contact reciprocity, but the magnitude requires the dynamical\r
      balance of each body.\r
  used_in:\r
  - theory\r
  - examples\r
  - interpretation\r
  interpretation_tags:\r
  - contact_pair\r
  - normal_force\r
  - common_confusion\r
  result_semantics:\r
    target: Nba\r
    meaning: Resulta util para interpretar Nba en el contexto del leaf.\r
  domain_checks:\r
  - expr: 'true'\r
    message:\r
      es: No confundas Nba con el peso o con una normal ejercida por un tercer cuerpo\r
        distinto.\r
      en: Do not confuse Nba with weight or with a normal exerted by a different third\r
        body.\r
  coherence_checks:\r
  - expr: 'true'\r
    severity: ok\r
    message:\r
      es: Este par sirve para separar correctamente las fuerzas de contacto entre\r
        dos DCL distintos.\r
      en: This pair helps separate contact forces correctly between two different\r
        FBDs.\r
  graph_implications:\r
  - La grafica debe reflejar cambios coherentes con la formula.\r
  pedagogical_triggers:\r
  - detect_when: 'true'\r
    message:\r
      es: Si llamas reaccion a la normal que actua sobre el mismo bloque que el peso,\r
        estas comparando fuerzas de distinta naturaleza.\r
      en: If you call the normal force acting on the same block as weight a reaction\r
        force, you are comparing forces of different natures.\r
`;export{e as default};
