const e=`version: 2
id: interpretacion-tipos-de-palancas
leaf_id: tipos-de-palancas
nombre:
  es: Interpretación de los tipos de palancas
  en: Interpretation of lever types
scope:
  area: mecánica
  bloque: dinámica
  subbloque: estática
  parent_id: palancas
  ruta_relativa: fisica-clasica/mecanica/dinamica/estatica/equilibrio-rotacion/palancas/tipos-de-palancas
dependencies:
  formulas: [lever_equilibrium, ideal_mechanical_advantage]
  magnitudes: [P, R, d_P, d_R, VM, clase_palanca]
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
          es: P mide la fuerza de entrada necesaria para la geometría elegida.
          en: P measures the input force required by the chosen geometry.
    physical_reading_rules:
      - id: p_large_when_short_arm
        when: "d_P < d_R && P > R"
        status: info
        text:
          es: Un brazo de potencia corto puede exigir una fuerza de entrada mayor que la resistencia.
          en: A short effort arm can require an input force larger than the load.
    coherence_rules:
      - id: p_balance
        when: "abs(P*d_P - R*d_R) < 1e-9"
        status: ok
        text:
          es: La potencia es coherente con el equilibrio de momentos.
          en: The effort is consistent with torque balance.
    model_validity_rules:
      - id: p_model
        when: "d_P > 0"
        status: ok
        text:
          es: P es válida solo dentro del modelo ideal; asume brazo rígido y apoyo fijo sin rozamiento.
          en: P is valid only within the ideal model; it assumes a rigid arm and a fixed frictionless fulcrum. The model breaks down when friction or deformation are significant.
    graph_rules:
      - id: p_graph
        when: "true"
        status: info
        text:
          es: En el gráfico, la flecha de P debe cambiar con la geometría y con la carga.
          en: In the graph, the P arrow should change with geometry and load.
    likely_errors:
      - id: p_wrong_arm
        when: "P == 0 && R > 0"
        status: warning
        text:
          es: Si hay carga y P sale nula, el alumno puede confundir el brazo de potencia con la longitud total de la barra.
          en: If there is a load and P becomes zero, students often confuse the effort arm with the full bar length or mistake the fulcrum position.
    next_step_rules:
      - id: p_next
        when: "true"
        status: info
        text:
          es: Tras leer P, conviene compararla con R para entender el compromiso mecánico.
          en: After reading P, compare it with R to understand the mechanical trade-off.

  R:
    summary_rules:
      - id: r_summary
        when: "R >= 0"
        status: info
        text:
          es: R representa la carga o resistencia que el sistema debe sostener o vencer.
          en: R represents the load or resistance the system must sustain or overcome.
    physical_reading_rules:
      - id: r_class_reading
        when: "clase_palanca == 2"
        status: info
        text:
          es: En segunda clase, la posición de R entre apoyo y potencia favorece la ganancia en fuerza.
          en: In second class, the position of R between fulcrum and effort favors force gain.
    coherence_rules:
      - id: r_balance
        when: "abs(P*d_P - R*d_R) < 1e-9"
        status: ok
        text:
          es: La resistencia es compatible con la ley de momentos del tema.
          en: The load is compatible with the leaf torque law.
    model_validity_rules:
      - id: r_model
        when: "d_R >= 0"
        status: ok
        text:
          es: La lectura de R requiere un brazo resistente definido respecto al mismo apoyo.
          en: Reading R requires a defined load arm about the same fulcrum.
    graph_rules:
      - id: r_graph
        when: "true"
        status: info
        text:
          es: En el gráfico, la flecha de R debe representar la carga dominante del sistema.
          en: In the graph, the R arrow should represent the dominant load in the system.
    likely_errors:
      - id: r_confusion
        when: "R < P && clase_palanca == 2 && VM > 1"
        status: warning
        text:
          es: Si el sistema de segunda clase ofrece ventaja en fuerza y aun así R queda menor que P, revisa los datos.
          en: If a second-class system provides force advantage and R is still smaller than P, check the data.
    next_step_rules:
      - id: r_next
        when: "true"
        status: info
        text:
          es: Tras fijar R, el siguiente paso es ver cómo la geometría obliga a ajustar P.
          en: After fixing R, the next step is to see how geometry forces P to adjust.

  d_P:
    summary_rules:
      - id: dp_summary
        when: "d_P >= 0"
        status: info
        text:
          es: d_P mide la eficacia geométrica de la fuerza de entrada.
          en: d_P measures the geometric effectiveness of the input force.
    physical_reading_rules:
      - id: dp_gain
        when: "d_P > d_R"
        status: info
        text:
          es: Cuando d_P supera a d_R, la palanca tiende a reducir la fuerza necesaria.
          en: When d_P exceeds d_R, the lever tends to reduce the required force.
    coherence_rules:
      - id: dp_positive
        when: "d_P >= 0"
        status: ok
        text:
          es: El brazo de potencia se mantiene como distancia física admisible.
          en: The effort arm is kept as a physically admissible distance.
    model_validity_rules:
      - id: dp_model
        when: "true"
        status: ok
        text:
          es: d_P debe medirse desde el apoyo hasta la línea de acción de la potencia.
          en: d_P must be measured from the fulcrum to the line of action of the effort.
    graph_rules:
      - id: dp_graph
        when: "true"
        status: info
        text:
          es: En el gráfico, d_P debe cambiar si cambia la posición relativa de la potencia.
          en: In the graph, d_P should change if the relative position of the effort changes.
    likely_errors:
      - id: dp_total_length
        when: "d_P == d_R && clase_palanca == 3"
        status: warning
        text:
          es: Si se igualan los brazos por defecto en una tercera clase, revisa si se tomó la longitud total de la barra.
          en: If the arms are made equal by default in a third-class lever, check whether the full bar length was used.
    next_step_rules:
      - id: dp_next
        when: "true"
        status: info
        text:
          es: El siguiente paso es comparar d_P con d_R para leer la ventaja geométrica.
          en: The next step is to compare d_P with d_R to read the geometric advantage.

  d_R:
    summary_rules:
      - id: dr_summary
        when: "d_R >= 0"
        status: info
        text:
          es: d_R mide el brazo con que actúa la carga respecto al apoyo.
          en: d_R measures the arm with which the load acts about the fulcrum.
    physical_reading_rules:
      - id: dr_demand
        when: "d_R > d_P"
        status: info
        text:
          es: Un brazo resistente grande aumenta la exigencia sobre la fuerza de entrada.
          en: A large load arm increases the demand on the input force.
    coherence_rules:
      - id: dr_positive
        when: "d_R >= 0"
        status: ok
        text:
          es: El brazo de resistencia es coherente como distancia geométrica no negativa.
          en: The load arm is consistent as a non-negative geometric distance.
    model_validity_rules:
      - id: dr_model
        when: "true"
        status: ok
        text:
          es: d_R debe medirse desde el mismo apoyo que se usa para d_P.
          en: d_R must be measured from the same fulcrum used for d_P.
    graph_rules:
      - id: dr_graph
        when: "true"
        status: info
        text:
          es: En el gráfico, d_R debe leerse desde el apoyo hasta la carga.
          en: In the graph, d_R should be read from the fulcrum to the load.
    likely_errors:
      - id: dr_wrong_reference
        when: "d_R == 0 && R > 0"
        status: warning
        text:
          es: Si la carga es no nula y d_R sale cero, probablemente se tomó mal el punto de referencia.
          en: If the load is nonzero and d_R becomes zero, the reference point was probably chosen incorrectly.
    next_step_rules:
      - id: dr_next
        when: "true"
        status: info
        text:
          es: Una vez fijado d_R, conviene estudiar cómo modifica la ventaja y la clase funcional.
          en: Once d_R is fixed, study how it changes the advantage and the functional class.

  VM:
    summary_rules:
      - id: vm_summary
        when: "VM >= 0"
        status: info
        text:
          es: VM resume la ventaja ideal en fuerza que aporta la geometría de la palanca.
          en: VM summarizes the ideal force advantage provided by lever geometry.
    physical_reading_rules:
      - id: vm_force_gain
        when: "VM > 1"
        status: info
        text:
          es: VM mayor que 1 indica que la palanca puede reducir la fuerza necesaria para la misma carga.
          en: VM greater than 1 means the lever can reduce the force needed for the same load.
      - id: vm_speed_tradeoff
        when: "VM < 1"
        status: warning
        text:
          es: VM menor que 1 indica desventaja en fuerza, pero posible ventaja en recorrido o rapidez.
          en: VM smaller than 1 indicates force disadvantage but a possible gain in displacement or speed.
    coherence_rules:
      - id: vm_ratio_match
        when: "abs(VM - d_P/d_R) < 1e-9"
        status: ok
        text:
          es: La lectura de VM es coherente con la razón geométrica de brazos.
          en: The VM reading is consistent with the geometric arm ratio.
    model_validity_rules:
      - id: vm_ideal_model
        when: "d_R > 0"
        status: ok
        text:
          es: VM ideal solo debe leerse dentro del modelo sin pérdidas y con brazos bien definidos.
          en: Ideal VM should be read only within the lossless model and with well-defined arms.
    graph_rules:
      - id: vm_graph
        when: "true"
        status: info
        text:
          es: En el gráfico, mover el apoyo o los puntos de aplicación debe cambiar la lectura de VM.
          en: In the graph, moving the fulcrum or the application points should change the VM reading.
    likely_errors:
      - id: vm_confusion
        when: "VM > 1 && P > R"
        status: warning
        text:
          es: Si VM es mayor que 1 y aun así P supera a R, revisa la identificación de los brazos o de las fuerzas.
          en: If VM is greater than 1 and P still exceeds R, check the arm or force identification.
    next_step_rules:
      - id: vm_next
        when: "true"
        status: info
        text:
          es: El siguiente paso es relacionar VM con el tipo de palanca y con el objetivo mecánico buscado.
          en: The next step is to relate VM to the lever class and to the intended mechanical goal.

  clase_palanca:
    summary_rules:
      - id: class_summary
        when: "clase_palanca >= 1 && clase_palanca <= 3"
        status: info
        text:
          es: La clase de palanca identifica el orden espacial entre apoyo, potencia y resistencia.
          en: The lever class identifies the spatial order among fulcrum, effort, and load.
    physical_reading_rules:
      - id: class_one
        when: "clase_palanca == 1"
        status: info
        text:
          es: En la primera clase, el apoyo queda entre potencia y resistencia, como en unas tijeras.
          en: In first class, the fulcrum lies between effort and load, as in scissors.
      - id: class_two
        when: "clase_palanca == 2"
        status: info
        text:
          es: En la segunda clase, la resistencia queda entre apoyo y potencia, como en una carretilla.
          en: In second class, the load lies between fulcrum and effort, as in a wheelbarrow.
      - id: class_three
        when: "clase_palanca == 3"
        status: info
        text:
          es: En la tercera clase, la potencia queda entre apoyo y resistencia, como en el antebrazo.
          en: In third class, the effort lies between fulcrum and load, as in the forearm.
    coherence_rules:
      - id: class_valid
        when: "clase_palanca == 1 || clase_palanca == 2 || clase_palanca == 3"
        status: ok
        text:
          es: La clasificación es coherente con las tres configuraciones clásicas del tema.
          en: The classification is consistent with the three classical configurations of the leaf.
    model_validity_rules:
      - id: class_position_rule
        when: "true"
        status: ok
        text:
          es: La clase se decide por posición relativa, no por tamaño de fuerzas ni por longitud absoluta.
          en: The class is decided by relative position, not by force size or absolute length.
    graph_rules:
      - id: class_graph
        when: "true"
        status: info
        text:
          es: En el gráfico Svg, la etiqueta de clase debe cambiar cuando cambia el orden apoyo-potencia-resistencia.
          en: In the Svg graph, the class label should change when the fulcrum-effort-load order changes.
    likely_errors:
      - id: class_misread
        when: "VM > 1 && clase_palanca == 3"
        status: warning
        text:
          es: Una tercera clase no se reconoce por VM, sino por la posición de la potencia entre apoyo y resistencia.
          en: A third-class lever is not identified by VM, but by the effort being between fulcrum and load.
    next_step_rules:
      - id: class_next
        when: "true"
        status: info
        text:
          es: Tras clasificar la palanca, conviene analizar qué compromiso establece entre fuerza, recorrido y control.
          en: After classifying the lever, analyze what trade-off it sets between force, displacement, and control.
cross_checks:
  - id: class_and_vm_connected
    affects: [VM, clase_palanca]
    when: "true"
    severity: ok
    text:
      es: La clase organiza la geometría y VM ayuda a leer su efecto mecánico, pero no la sustituye.
      en: The class organizes the geometry and VM helps read its mechanical effect, but does not replace it.
`;export{e as default};
