const e=`version: 2
id: interpretacion-ventaja-mecanica
leaf_id: ventaja-mecanica
nombre:
  es: Interpretación de la ventaja mecanica
  en: Mechanical advantage interpretation
scope:
  area: mecánica
  bloque: dinámica
  subbloque: estática
  parent_id: palancas
  ruta_relativa: fisica-clasica/mecanica/dinamica/estatica/equilibrio-rotacion/palancas/ventaja-mecanica
dependencies:
  formulas: [ideal_mechanical_advantage, real_mechanical_advantage, efficiency_from_advantages, ideal_effort_requirement]
  magnitudes: [P, R, d_P, d_R, VM, VM_r, eta]
output_contract:
  sections: [summary, physical_reading, coherence, model_validity, graph_reading, likely_errors, next_step]
result_blocks:
  summary:
    title:
      es: Resumen físico
      en: Physical summary
  physical_reading:
    title:
      es: Lectura física
      en: Physical reading
  coherence:
    title:
      es: Coherencia
      en: Coherence
  model_validity:
    title:
      es: Validez del modelo
      en: Model validity
  graph_reading:
    title:
      es: Lectura gráfica
      en: Graph reading
  likely_errors:
    title:
      es: Errores probables
      en: Likely errors
  next_step:
    title:
      es: Siguiente paso
      en: Next step
targets:
  P:
    summary_rules:
      - id: p_summary
        when: "P >= 0"
        status: info
        text:
          es: P resume la fuerza de entrada exigida por la carga y la geometría elegidas.
          en: P summarizes the input force required by the chosen load and geometry.
    physical_reading_rules:
      - id: p_high_when_vm_low
        when: "VM < 1 && P >= R"
        status: info
        text:
          es: Si VM es menor que 1, la máquina puede pedir una fuerza comparable o mayor que la carga.
          en: If VM is smaller than 1, the machine may require a force comparable to or larger than the load.
      - id: p_low_when_vm_high
        when: "VM > 1 && P < R"
        status: info
        text:
          es: VM mayor que 1 permite que la carga supere a la fuerza aplicada en el modelo ideal.
          en: VM greater than 1 allows the load to exceed the applied force in the ideal model.
    coherence_rules:
      - id: p_coherence
        when: "abs(P - (R*d_R)/d_P) < 1e-9 || d_P == 0"
        status: ok
        text:
          es: La lectura de P es coherente con la geometría del sistema ideal.
          en: The reading of P is consistent with the geometry of the ideal system.
    model_validity_rules:
      - id: p_model
        when: "d_P > 0"
        status: ok
        text:
          es: P es válida solo dentro del modelo ideal; asume que la máquina es rígida y que las pérdidas son despreciables.
          en: P is valid only within the ideal model; it assumes the machine is rigid and losses are neglected. The model breaks down when friction or wear are significant.
    graph_rules:
      - id: p_graph
        when: "true"
        status: info
        text:
          es: En el gráfico, la curva de P debe subir si aumenta R con VM fija.
          en: In the graph, the P curve should rise if R increases while VM stays fixed.
    likely_errors:
      - id: p_zero_error
        when: "P == 0 && R > 0"
        status: warning
        text:
          es: Si la carga es no nula y P sale cero, es fácil confundir el brazo de entrada o asumir incorrectamente que la máquina no requiere fuerza.
          en: If the load is nonzero and P becomes zero, students tend to confuse the input arm or wrongly assume the machine requires no effort at all.
    next_step_rules:
      - id: p_next
        when: "true"
        status: info
        text:
          es: Tras leer P, compárala con R y con VM para interpretar la ayuda real del sistema.
          en: After reading P, compare it with R and VM to interpret the real help provided by the system.

  R:
    summary_rules:
      - id: r_summary
        when: "R >= 0"
        status: info
        text:
          es: R representa la demanda mecánica que la máquina debe sostener o vencer.
          en: R represents the mechanical demand that the machine must support or overcome.
    physical_reading_rules:
      - id: r_reading
        when: "R > P && VM > 1"
        status: info
        text:
          es: Una carga mayor que la fuerza aplicada es coherente con una ventaja ideal superior a la unidad.
          en: A load larger than the applied force is consistent with an ideal advantage above unity.
    coherence_rules:
      - id: r_coherence
        when: "R >= 0"
        status: ok
        text:
          es: La carga se mantiene dentro del dominio físico esperado del leaf.
          en: The load remains inside the expected physical domain of the leaf.
    model_validity_rules:
      - id: r_model
        when: "d_R >= 0"
        status: ok
        text:
          es: Para interpretar R correctamente debe existir un brazo resistente asociado.
          en: To interpret R correctly, an associated load arm must exist.
    graph_rules:
      - id: r_graph
        when: "true"
        status: info
        text:
          es: En modo de carga, R fija la posición horizontal del punto actual.
          en: In load mode, R sets the horizontal position of the current point.
    likely_errors:
      - id: r_units_error
        when: "R > 0 && R < 20 && P > 100"
        status: warning
        text:
          es: Si R parece demasiado pequeña frente a P, revisa si la masa se convirtió bien a fuerza.
          en: If R looks too small compared with P, check whether mass was converted correctly into force.
    next_step_rules:
      - id: r_next
        when: "true"
        status: info
        text:
          es: Después de fijar R, estudia si la geometría elegida permite sostenerla con un P razonable.
          en: After fixing R, study whether the chosen geometry can sustain it with a reasonable P.

  d_P:
    summary_rules:
      - id: dp_summary
        when: "d_P >= 0"
        status: info
        text:
          es: d_P mide la capacidad geométrica de la entrada para producir momento útil.
          en: d_P measures the geometric ability of the input to produce useful torque.
    physical_reading_rules:
      - id: dp_reading
        when: "d_P > d_R"
        status: info
        text:
          es: Si d_P supera a d_R, la máquina tiende a ofrecer ventaja ideal en fuerza.
          en: If d_P exceeds d_R, the machine tends to offer ideal force advantage.
    coherence_rules:
      - id: dp_coherence
        when: "d_P >= 0"
        status: ok
        text:
          es: El brazo de entrada se mantiene como distancia no negativa admisible.
          en: The input arm remains an admissible non-negative distance.
    model_validity_rules:
      - id: dp_model
        when: "true"
        status: ok
        text:
          es: d_P debe medirse desde el apoyo hasta la línea de acción de la fuerza de entrada.
          en: d_P must be measured from the fulcrum to the line of action of the input force.
    graph_rules:
      - id: dp_graph
        when: "true"
        status: info
        text:
          es: En el gráfico, aumentar d_P debe elevar la lectura de VM.
          en: In the graph, increasing d_P should raise the reading of VM.
    likely_errors:
      - id: dp_error
        when: "d_P == d_R && VM != 1"
        status: warning
        text:
          es: Si ambos brazos son iguales y VM no vale 1, revisa la sustitución o la lectura geométrica.
          en: If both arms are equal and VM is not 1, check the substitution or geometric reading.
    next_step_rules:
      - id: dp_next
        when: "true"
        status: info
        text:
          es: El siguiente paso es comparar d_P con d_R para cuantificar la ventaja ideal.
          en: The next step is to compare d_P with d_R to quantify ideal advantage.

  d_R:
    summary_rules:
      - id: dr_summary
        when: "d_R >= 0"
        status: info
        text:
          es: d_R fija cuánta palanca tiene la carga frente al apoyo.
          en: d_R sets how much leverage the load has about the fulcrum.
    physical_reading_rules:
      - id: dr_reading
        when: "d_R > d_P"
        status: info
        text:
          es: Un brazo resistente mayor obliga a la entrada a compensar con más fuerza o menor carga.
          en: A larger load arm forces the input to compensate with more force or a smaller load.
    coherence_rules:
      - id: dr_coherence
        when: "d_R >= 0"
        status: ok
        text:
          es: El brazo resistente se mantiene dentro del dominio geométrico esperado.
          en: The load arm remains inside the expected geometric domain.
    model_validity_rules:
      - id: dr_model
        when: "true"
        status: ok
        text:
          es: d_R debe referirse al mismo apoyo que d_P para que las comparaciones tengan sentido.
          en: d_R must refer to the same fulcrum as d_P for comparisons to make sense.
    graph_rules:
      - id: dr_graph
        when: "true"
        status: info
        text:
          es: En la vista de razón, reducir d_R desplaza la lectura de VM hacia arriba.
          en: In ratio view, reducing d_R shifts the reading of VM upward.
    likely_errors:
      - id: dr_error
        when: "d_R == 0 && R > 0"
        status: warning
        text:
          es: Una carga no nula con d_R igual a cero suele indicar referencia geométrica incorrecta.
          en: A nonzero load with d_R equal to zero usually indicates an incorrect geometric reference.
    next_step_rules:
      - id: dr_next
        when: "true"
        status: info
        text:
          es: Tras fijar d_R, revisa si la máquina sigue ofreciendo la ventaja buscada.
          en: After fixing d_R, check whether the machine still offers the intended advantage.

  VM:
    summary_rules:
      - id: vm_summary
        when: "VM >= 0"
        status: info
        text:
          es: VM expresa la ayuda geométrica ideal de la máquina.
          en: VM expresses the ideal geometric help provided by the machine.
    physical_reading_rules:
      - id: vm_gt_one
        when: "VM > 1"
        status: info
        text:
          es: VM mayor que 1 significa que la geometría favorece la multiplicación ideal de fuerza.
          en: VM greater than 1 means that geometry favors ideal force multiplication.
      - id: vm_lt_one
        when: "VM < 1"
        status: warning
        text:
          es: VM menor que 1 indica sacrificio de fuerza a cambio de recorrido, rapidez o control.
          en: VM smaller than 1 indicates force sacrifice in exchange for displacement, speed, or control.
    coherence_rules:
      - id: vm_coherence
        when: "abs(VM - d_P/d_R) < 1e-9 || d_R == 0"
        status: ok
        text:
          es: La lectura de VM es coherente con la razón geométrica entre brazos.
          en: The reading of VM is consistent with the geometric ratio between arms.
    model_validity_rules:
      - id: vm_model
        when: "d_R > 0"
        status: ok
        text:
          es: VM ideal requiere un brazo resistente no nulo y una geometría bien definida.
          en: Ideal VM requires a nonzero load arm and a well-defined geometry.
    graph_rules:
      - id: vm_graph
        when: "true"
        status: info
        text:
          es: En el gráfico, VM debe cambiar cuando cambian d_P o d_R aunque R permanezca fija.
          en: In the graph, VM must change when d_P or d_R change even if R stays fixed.
    likely_errors:
      - id: vm_error
        when: "VM > 1 && P > R"
        status: warning
        text:
          es: Si VM supera 1 pero P también supera R, revisa datos, unidades o la hipótesis ideal.
          en: If VM exceeds 1 but P also exceeds R, check the data, units, or the ideal assumption.
    next_step_rules:
      - id: vm_next
        when: "true"
        status: info
        text:
          es: Tras leer VM, conviene compararla con VM_r para cuantificar las pérdidas reales.
          en: After reading VM, compare it with VM_r to quantify real losses.

  VM_r:
    summary_rules:
      - id: vmr_summary
        when: "VM_r >= 0"
        status: info
        text:
          es: VM_r resume la ventaja que la máquina entrega de verdad con fuerzas medidas.
          en: VM_r summarizes the advantage that the machine actually delivers from measured forces.
    physical_reading_rules:
      - id: vmr_reading
        when: "VM_r < VM"
        status: info
        text:
          es: Si VM_r es menor que VM, el sistema real está perdiendo parte de la ayuda ideal.
          en: If VM_r is smaller than VM, the real system is losing part of the ideal help.
    coherence_rules:
      - id: vmr_coherence
        when: "abs(VM_r - R/P) < 1e-9 || P == 0"
        status: ok
        text:
          es: La lectura de VM_r es coherente con las fuerzas reales introducidas.
          en: The reading of VM_r is consistent with the introduced real forces.
    model_validity_rules:
      - id: vmr_model
        when: "P > 0"
        status: ok
        text:
          es: VM_r exige una medida efectiva de la fuerza de entrada.
          en: VM_r requires an effective measurement of the input force.
    graph_rules:
      - id: vmr_graph
        when: "true"
        status: info
        text:
          es: Aunque el gráfico muestre la geometría ideal, VM_r ayuda a comparar la máquina real con esa referencia.
          en: Even if the graph shows ideal geometry, VM_r helps compare the real machine with that reference.
    likely_errors:
      - id: vmr_error
        when: "VM_r > VM + 1e-9"
        status: warning
        text:
          es: Si VM_r supera a VM de forma clara, hay una incoherencia de datos o de interpretación.
          en: If VM_r clearly exceeds VM, there is a data or interpretation inconsistency.
    next_step_rules:
      - id: vmr_next
        when: "true"
        status: info
        text:
          es: El siguiente paso es calcular eta para estimar la calidad real del dispositivo.
          en: The next step is to compute eta to estimate the real quality of the device.

  eta:
    summary_rules:
      - id: eta_summary
        when: "eta >= 0"
        status: info
        text:
          es: Eta mide qué fracción de la ventaja ideal llega a conservarse en la práctica.
          en: Eta measures what fraction of ideal advantage is preserved in practice.
    physical_reading_rules:
      - id: eta_high
        when: "eta >= 0.9"
        status: info
        text:
          es: Una eficiencia alta indica pérdidas relativamente pequeñas.
          en: High efficiency indicates relatively small losses.
      - id: eta_low
        when: "eta < 0.7"
        status: warning
        text:
          es: Una eficiencia baja sugiere rozamiento, deformación o mala alineación relevantes.
          en: Low efficiency suggests relevant friction, deformation, or poor alignment.
    coherence_rules:
      - id: eta_coherence
        when: "abs(eta - VM_r/VM) < 1e-9 || VM == 0"
        status: ok
        text:
          es: La eficiencia es coherente con la comparación entre ventaja real e ideal.
          en: Efficiency is consistent with the comparison between real and ideal advantage.
    model_validity_rules:
      - id: eta_model
        when: "VM > 0"
        status: ok
        text:
          es: Para interpretar eta deben compararse el mismo dispositivo y la misma configuración.
          en: To interpret eta, the same device and the same configuration must be compared.
    graph_rules:
      - id: eta_graph
        when: "true"
        status: info
        text:
          es: Eta no cambia la curva geométrica ideal, pero sí la lectura práctica del dispositivo.
          en: Eta does not change the ideal geometric curve, but it changes the practical reading of the device.
    likely_errors:
      - id: eta_error
        when: "eta > 1.000001"
        status: warning
        text:
          es: Una eficiencia mayor que 1 indica un error de modelo, de unidades o de medición.
          en: Efficiency greater than 1 indicates a model, unit, or measurement error.
    next_step_rules:
      - id: eta_next
        when: "true"
        status: info
        text:
          es: Tras leer eta, conviene decidir si interesa rediseñar la geometría o reducir pérdidas.
          en: After reading eta, decide whether it is better to redesign geometry or reduce losses.
cross_checks:
  - id: ideal_real_consistency
    affects: [VM, VM_r, eta]
    when: "VM > 0"
    severity: ok
    text:
      es: VM, VM_r y eta deben leerse juntos para distinguir ayuda geométrica de desempeño real.
      en: VM, VM_r, and eta must be read together to distinguish geometric help from real performance.
  - id: geometry_and_force_requirement
    affects: [d_P, d_R, VM, P]
    when: "d_P > 0 && d_R >= 0"
    severity: ok
    text:
      es: La geometría fija VM y, con la carga dada, determina el esfuerzo ideal necesario.
      en: Geometry fixes VM and, for the given load, determines the required ideal effort.
`;export{e as default};
