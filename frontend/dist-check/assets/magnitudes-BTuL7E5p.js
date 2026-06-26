const e=`version: 5
magnitudes:
  - id: E
    symbol: E
    nombre:
      es: Empuje
      en: Buoyancy
    descripcion:
      es: Fuerza vertical y hacia arriba que ejerce un fluido sobre un cuerpo sumergido.
      en: Vertical upward force exerted by a fluid on a submerged body.
    unidad_si: N
    dimension: M L T^-2
    is_vector: true
    components: [0, 1, 0]
    category: fuerza
    physical_role: variable-dependiente
    used_in: [ley_arquimedes, balance_flotacion]
    common_mistake:
      es: Confundir con el peso o creer que depende de la masa del cuerpo y no del volumen desplazado.
      en: Confusing it with weight or believing it depends on the body's mass rather than the displaced volume.
    typical_range: [0, 10^7]
    sign_behavior: siempre-positivo
    zero_behavior: nulo-fuera-del-fluido
    value_nature: extensiva
    interpretation_role: indicador-estado
    graph_binding: svg-archimedes.E
    pedagogical_notes:
      es: Es la clave para entender por qué los barcos flotan.
      en: It is the key to understanding why ships float.

  - id: rho_f
    symbol: \\rho_f
    nombre:
      es: Densidad del fluido
      en: Fluid density
    descripcion:
      es: Masa por unidad de volumen del fluido donde se sumerge el cuerpo.
      en: Mass per unit volume of the fluid in which the body is submerged.
    unidad_si: kg/m^3
    dimension: M L^-3
    is_vector: false
    components: null
    category: propiedad-fluido
    physical_role: parametro-sistema
    used_in: [ley_arquimedes]
    common_mistake:
      es: Usar la densidad del objeto en lugar de la del fluido para calcular el empuje.
      en: Using the object's density instead of the fluid's density to calculate buoyancy.
    typical_range: [0.5, 20000]
    sign_behavior: siempre-positivo
    zero_behavior: imposible
    value_nature: intensiva
    interpretation_role: condicion-entorno
    graph_binding: svg-archimedes.rho_f
    pedagogical_notes:
      es: Determina la "fuerza" del empuje para un mismo volumen.
      en: Determines the "strength" of buoyancy for the same volume.

  - id: V_des
    symbol: V_{des}
    nombre:
      es: Volumen desplazado
      en: Displaced volume
    descripcion:
      es: Volumen de fluido que es desalojado por la parte sumergida del cuerpo.
      en: Volume of fluid that is displaced by the submerged part of the body.
    unidad_si: m^3
    dimension: L^3
    is_vector: false
    components: null
    category: geometrica
    physical_role: variable-dependiente
    used_in: [ley_arquimedes]
    common_mistake:
      es: Usar el volumen total del cuerpo cuando este solo está parcialmente sumergido.
      en: Using the total volume of the body when it is only partially submerged.
    typical_range: [0, 10^4]
    sign_behavior: siempre-positivo
    zero_behavior: cuerpo-fuera
    value_nature: extensiva
    interpretation_role: indicador-estado
    graph_binding: svg-archimedes.V_des
    pedagogical_notes:
      es: Es igual al volumen sumergido del objeto.
      en: It is equal to the submerged volume of the object.

  - id: W
    symbol: W
    nombre:
      es: Peso real
      en: Real weight
    descripcion:
      es: Fuerza de atracción gravitatoria sobre el cuerpo.
      en: Gravitational attraction force on the body.
    unidad_si: N
    dimension: M L T^-2
    is_vector: true
    components: [0, -1, 0]
    category: fuerza
    physical_role: parametro-sistema
    used_in: [balance_flotacion, peso_aparente]
    common_mistake:
      es: Pensar que el peso cambia al sumergirse (lo que cambia es el peso aparente).
      en: Thinking that the weight changes when submerged (what changes is the apparent weight).
    typical_range: [0, 10^7]
    sign_behavior: siempre-negativo
    zero_behavior: ingravidez
    value_nature: extensiva
    interpretation_role: referencia-fuerza
    graph_binding: null
    pedagogical_notes:
      es: Se opone al empuje en el balance vertical.
      en: It opposes buoyancy in the vertical balance.

  - id: W_ap
    symbol: W_{ap}
    nombre:
      es: Peso aparente
      en: Apparent weight
    descripcion:
      es: Peso neto que se percibe cuando el cuerpo está sumergido (Peso - Empuje).
      en: Net weight perceived when the body is submerged (Weight - Buoyancy).
    unidad_si: N
    dimension: M L T^-2
    is_vector: true
    components: [0, -1, 0]
    category: fuerza
    physical_role: variable-dependiente
    used_in: [peso_aparente]
    common_mistake:
      es: Olvidar que puede ser cero si el cuerpo flota.
      en: Forgetting that it can be zero if the body floats.
    typical_range: [0, 10^7]
    sign_behavior: direccion-neta
    zero_behavior: flotacion-neutra
    value_nature: extensiva
    interpretation_role: indicador-resultado
    graph_binding: null
    pedagogical_notes:
      es: Es lo que registra un dinamómetro al pesar algo bajo el agua.
      en: It is what a dynamometer records when weighing something underwater.

  - id: g
    symbol: g
    nombre:
      es: Gravedad
      en: Gravity
    descripcion:
      es: Aceleración del campo gravitatorio.
      en: Acceleration of the gravitational field.
    unidad_si: m/s^2
    dimension: L T^-2
    is_vector: true
    components: [0, -1, 0]
    category: campo
    physical_role: constante-local
    used_in: [ley_arquimedes, peso_real]
    common_mistake:
      es: Olvidar su valor (9.8 m/s²) o confundirla con la constante G.
      en: Forgetting its value (9.8 m/s²) or confusing it with the constant G.
    typical_range: [0, 25]
    sign_behavior: hacia-abajo
    zero_behavior: espacio-profundo
    value_nature: intensiva
    interpretation_role: condicion-entorno
    graph_binding: null
    pedagogical_notes:
      es: Actúa tanto en el cálculo del peso como en el del empuje.
      en: It acts in both the calculation of weight and buoyancy.
`;export{e as default};
