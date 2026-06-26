const a=`version: 5\r
topic:\r
  id: ligaduras-y-grados-de-libertad\r
  title:\r
    es: Ligaduras y grados de libertad\r
    en: Constraints and Degrees of Freedom\r
\r
formulas:\r
- id: ligadura_holonomica\r
  title: { es: Ligadura holónoma, en: Holonomic constraint }\r
  equation: phi = 0\r
  latex: \\phi_\\alpha(q_i,t)=0\r
  category: restriccion\r
  relation_type: ecuacion_de_ligadura\r
  physical_meaning:\r
    es: Declara una condición geométrica que selecciona las configuraciones físicamente admisibles.\r
    en: Declares a geometric condition selecting physically admissible configurations.\r
  constraints: [ ligadura_diferenciable ]\r
  validity:\r
    es: Válida para restricciones integrables expresables sobre configuración y tiempo.\r
    en: Valid for integrable constraints expressible over configuration and time.\r
  dimension_check: "[phi] = [phi]"\r
  calculable: false\r
  motivo_no_calculable: { es: "Requiere especificar la función de restricción.", en: "Requires specifying the constraint function." }\r
  used_in: [ conteo_grados_libertad, desplazamiento_virtual_admisible, multiplicadores_lagrange ]\r
  interpretation_tags: [ ligadura, holonoma, configuracion ]\r
  result_semantics:\r
    target: phi\r
  domain_checks: [ phi_debe_anularse ]\r
  coherence_checks: [ no_contar_ligaduras_equivalentes_dos_veces ]\r
  graph_implications: "El gráfico debe mostrar que [[phi]]=0 selecciona el subespacio permitido."\r
  pedagogical_triggers: [ confundir_condicion_con_fuerza, redundancia ]\r
  rearrangements:\r
  - target: phi\r
    equation: phi\r
  variables: [ phi, q, t ]\r
\r
- id: conteo_grados_libertad\r
  title: { es: Conteo de grados de libertad, en: Degree-of-freedom count }\r
  equation: f = Nq - C\r
  latex: f=N_q-C\r
  category: conteo\r
  relation_type: reduccion_dimensional\r
  physical_meaning:\r
    es: Resta ligaduras independientes al número de coordenadas de configuración antes de reducir el modelo.\r
    en: Subtracts independent constraints from the number of configuration coordinates before reducing the model.\r
  constraints: [ Nq >= 0, C >= 0, C <= Nq ]\r
  validity:\r
    es: Válida si las ligaduras son independientes en la región estudiada.\r
    en: Valid if constraints are independent in the studied region.\r
  dimension_check: "[1] = [1]"\r
  calculable: true\r
  motivo_no_calculable: { es: "Requiere [[Nq]] y [[C]].", en: "Requires [[Nq]] and [[C]]." }\r
  used_in: [ teoria, ejemplos, interpretacion ]\r
  interpretation_tags: [ grados_de_libertad, independencia, conteo ]\r
  result_semantics:\r
    target: f\r
  domain_checks: [ C <= Nq ]\r
  coherence_checks: [ f >= 0 ]\r
  graph_implications: "Con [[Nq]] fijo, [[f]] disminuye cuando aumenta [[C]]."\r
  pedagogical_triggers: [ sobreconteo, ligaduras_redundantes ]\r
  rearrangements:\r
  - target: f\r
    equation: Nq - C\r
  - target: C\r
    equation: Nq - f\r
  variables: [ f, Nq, C ]\r
\r
- id: desplazamiento_virtual_admisible\r
  title: { es: Condición de desplazamiento virtual admisible, en: Admissible virtual displacement condition }\r
  equation: delta_q = 0\r
  latex: \\sum_i\\frac{\\partial\\phi_\\alpha}{\\partial q_i}\\,\\delta q_i=0\r
  category: compatibilidad\r
  relation_type: condicion_linealizada\r
  physical_meaning:\r
    es: Determina qué desplazamientos virtuales respetan la ligadura en primer orden.\r
    en: Determines which virtual displacements respect the constraint to first order.\r
  constraints: [ linealizacion_local ]\r
  validity:\r
    es: Válida localmente alrededor de una configuración que satisface la ligadura.\r
    en: Locally valid around a configuration satisfying the constraint.\r
  dimension_check: "[phi] = [phi]"\r
  calculable: false\r
  motivo_no_calculable: { es: "Requiere derivadas de la ligadura.", en: "Requires derivatives of the constraint." }\r
  used_in: [ teoria, modelos, interpretacion ]\r
  interpretation_tags: [ desplazamiento_virtual, compatibilidad, jacobiano ]\r
  result_semantics:\r
    target: delta_q\r
  domain_checks: [ configuracion_satisface_phi ]\r
  coherence_checks: [ desplazamiento_no_rompe_ligadura ]\r
  graph_implications: "El gráfico debe distinguir direcciones permitidas y bloqueadas por la ligadura."\r
  pedagogical_triggers: [ confundir_desplazamiento_real_y_virtual ]\r
  rearrangements:\r
  - target: delta_q\r
    equation: delta_q\r
  variables: [ phi, q, delta_q ]\r
\r
- id: multiplicadores_lagrange\r
  title: { es: Ecuación con multiplicadores de Lagrange, en: Equation with Lagrange multipliers }\r
  equation: lambda = L\r
  latex: \\frac{d}{dt}\\left(\\frac{\\partial L}{\\partial \\dot q_i}\\right)-\\frac{\\partial L}{\\partial q_i}=\\sum_\\alpha\\lambda_\\alpha\\frac{\\partial\\phi_\\alpha}{\\partial q_i}\r
  category: dinamica_con_ligaduras\r
  relation_type: ecuacion_aumentada\r
  physical_meaning:\r
    es: Introduce fuerzas de ligadura mediante multiplicadores sin resolver explícitamente todas las restricciones.\r
    en: Introduces constraint forces through multipliers without explicitly solving all constraints.\r
  constraints: [ ligaduras_holonomas, derivabilidad ]\r
  validity:\r
    es: Válida para sistemas lagrangianos con restricciones holónomas tratadas por multiplicadores.\r
    en: Valid for Lagrangian systems with holonomic constraints handled by multipliers.\r
  dimension_check: "[F_q] = [F_q]"\r
  calculable: false\r
  motivo_no_calculable: { es: "Requiere [[L]], ligaduras y condiciones iniciales.", en: "Requires [[L]], constraints, and initial conditions." }\r
  used_in: [ teoria, modelos, interpretacion ]\r
  interpretation_tags: [ multiplicadores, fuerzas_de_ligadura, lagrangiano ]\r
  result_semantics:\r
    target: lambda\r
  domain_checks: [ sistema_no_singular ]\r
  coherence_checks: [ lambda_desaparece_si_no_hay_ligadura_activa ]\r
  graph_implications: "El gráfico puede mostrar cómo una ligadura activa genera reacción asociada a [[lambda]]."\r
  pedagogical_triggers: [ confundir_lambda_con_constante_arbitraria ]\r
  rearrangements:\r
  - target: lambda\r
    equation: lambda\r
  variables: [ lambda, L, q, qdot, phi ]\r
\r
ui:\r
  default_formula: conteo_grados_libertad\r
  groups:\r
  - title: { es: Restricciones, en: Constraints }\r
    items: [ ligadura_holonomica, desplazamiento_virtual_admisible ]\r
  - title: { es: Conteo y dinámica, en: Counting and dynamics }\r
    items: [ conteo_grados_libertad, multiplicadores_lagrange ]\r
`;export{a as default};
