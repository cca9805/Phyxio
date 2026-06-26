const e=`version: 5\r
magnitudes:\r
- id: I_O\r
  symbol: I_O\r
  nombre: { es: momento de inercia respecto al pivote, en: moment of inertia about the pivot }\r
  unidad_si: kg*m^2\r
  dimension: M*L^2\r
  is_vector: false\r
  components: []\r
  category: inercia_rotacional\r
  descripcion: { es: Inercia rotacional del cuerpo respecto al eje real de giro., en: Rotational inertia of the body about the actual pivot axis. }\r
  physical_role: { es: mide la resistencia angular real del pendulo, en: measures the actual angular resistance of the pendulum }\r
  used_in: [ ecuacion_no_lineal_pf, omega0_pf_av, periodo_lineal_pf_av, steiner_pf_av, longitud_equivalente_pf_av, energia_pf_av ]\r
  common_mistake: { es: Usar la inercia del centro de masas como si fuera la del pivote., en: Using center-of-mass inertia as if it were pivot inertia. }\r
  typical_range: { es: "positiva y mayor o igual que [[I_cm]] para ejes paralelos.", en: "positive and greater than or equal to [[I_cm]] for parallel axes." }\r
  sign_behavior: { es: Siempre positiva., en: Always positive. }\r
  zero_behavior: { es: Valor nulo invalida el modelo de cuerpo rigido., en: Zero invalidates the rigid-body model. }\r
  value_nature: { es: propiedad del cuerpo y del eje, en: property of the body and axis }\r
  interpretation_role: { es: "fija junto a [[m]] y [[d]] la escala temporal.", en: "sets the time scale with [[m]] and [[d]]." }\r
  graph_binding: { type: Coord, axis: parameter, curve_role: inertia }\r
  pedagogical_notes: { es: Es la diferencia clave entre pendulo simple y fisico., en: It is the key difference between simple and physical pendulum. }\r
- id: I_cm\r
  symbol: I_{CM}\r
  nombre: { es: momento de inercia en el centro de masas, en: center-of-mass moment of inertia }\r
  unidad_si: kg*m^2\r
  dimension: M*L^2\r
  is_vector: false\r
  components: []\r
  category: inercia_rotacional\r
  descripcion: { es: Momento de inercia respecto a un eje paralelo que pasa por el centro de masas., en: Moment of inertia about a parallel axis through the center of mass. }\r
  physical_role: { es: base para aplicar Steiner, en: base for applying the parallel-axis theorem }\r
  used_in: [ steiner_pf_av ]\r
  common_mistake: { es: Olvidar sumar el termino de traslado de eje., en: Forgetting to add the axis-shift term. }\r
  typical_range: { es: "positiva y menor o igual que [[I_O]] si [[d]] no es cero.", en: "positive and less than or equal to [[I_O]] when [[d]] is nonzero." }\r
  sign_behavior: { es: Siempre positiva., en: Always positive. }\r
  zero_behavior: { es: Solo podria anularse en idealizaciones sin extension., en: It can vanish only in idealized point-like cases. }\r
  value_nature: { es: propiedad geometrica del cuerpo, en: geometric property of the body }\r
  interpretation_role: { es: separa forma del cuerpo y posicion del pivote., en: separates body shape from pivot position. }\r
  graph_binding: { type: Svg, axis: none, curve_role: body_inertia }\r
  pedagogical_notes: { es: Permite comparar cuerpos con igual masa pero distinta distribucion., en: It allows comparison of bodies with equal mass but different distribution. }\r
- id: m\r
  symbol: m\r
  nombre: { es: masa, en: mass }\r
  unidad_si: kg\r
  dimension: M\r
  is_vector: false\r
  components: []\r
  category: parametro\r
  descripcion: { es: Masa total del cuerpo rigido oscilante., en: Total mass of the oscillating rigid body. }\r
  physical_role: { es: escala tanto el peso como la inercia trasladada, en: scales both weight and shifted inertia }\r
  used_in: [ omega0_pf_av, periodo_lineal_pf_av, steiner_pf_av, longitud_equivalente_pf_av, energia_pf_av ]\r
  common_mistake: { es: Pensar que siempre se cancela y no importa., en: Thinking it always cancels and never matters. }\r
  typical_range: { es: positiva., en: positive. }\r
  sign_behavior: { es: No admite signo negativo., en: It cannot be negative. }\r
  zero_behavior: { es: Masa nula elimina el pendulo fisico., en: Zero mass removes the physical pendulum. }\r
  value_nature: { es: parametro del cuerpo, en: body parameter }\r
  interpretation_role: { es: conecta peso, inercia y energia., en: connects weight, inertia, and energy. }\r
  graph_binding: { type: Coord, axis: parameter, curve_role: mass }\r
  pedagogical_notes: { es: "Su efecto depende de como cambia tambien [[I_O]].", en: "Its effect depends on how [[I_O]] changes as well." }\r
- id: d\r
  symbol: d\r
  nombre: { es: distancia pivote-centro de masas, en: pivot-center-of-mass distance }\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: geometria\r
  descripcion: { es: Distancia entre el eje de giro y el centro de masas., en: Distance between the pivot axis and the center of mass. }\r
  physical_role: { es: brazo gravitatorio del torque restaurador, en: gravitational lever arm of the restoring torque }\r
  used_in: [ omega0_pf_av, periodo_lineal_pf_av, steiner_pf_av, longitud_equivalente_pf_av, energia_pf_av ]\r
  common_mistake: { es: Medirla desde un extremo y no desde el pivote al centro de masas., en: Measuring it from an end rather than from pivot to center of mass. }\r
  typical_range: { es: positiva si el pivote no pasa por el centro de masas., en: positive if the pivot does not pass through the center of mass. }\r
  sign_behavior: { es: Se usa como distancia positiva., en: Used as a positive distance. }\r
  zero_behavior: { es: Si vale cero no hay torque gravitatorio lineal., en: If zero there is no linear gravitational torque. }\r
  value_nature: { es: parametro geometrico, en: geometric parameter }\r
  interpretation_role: { es: controla la fuerza restauradora efectiva., en: controls the effective restoring action. }\r
  graph_binding: { type: Coord, axis: x, curve_role: pivot_distance }\r
  pedagogical_notes: { es: Mover el pivote cambia a la vez torque e inercia., en: Moving the pivot changes both torque and inertia. }\r
- id: g\r
  symbol: g\r
  nombre: { es: gravedad, en: gravity }\r
  unidad_si: m/s^2\r
  dimension: L*T^-2\r
  is_vector: false\r
  components: []\r
  category: campo\r
  descripcion: { es: Aceleracion gravitatoria local., en: Local gravitational acceleration. }\r
  physical_role: { es: fija la escala del torque gravitatorio, en: sets the scale of gravitational torque }\r
  used_in: [ omega0_pf_av, periodo_lineal_pf_av, energia_pf_av ]\r
  common_mistake: { es: Usar unidades incompatibles con longitudes en metros., en: Using units incompatible with lengths in meters. }\r
  typical_range: { es: cercana a 9.81 m/s^2 en la Tierra., en: close to 9.81 m/s^2 on Earth. }\r
  sign_behavior: { es: Se usa como modulo positivo., en: Used as a positive magnitude. }\r
  zero_behavior: { es: Sin gravedad no hay restauracion pendular., en: Without gravity there is no pendular restoration. }\r
  value_nature: { es: parametro externo, en: external parameter }\r
  interpretation_role: { es: determina la intensidad de la restauracion., en: determines restoring strength. }\r
  graph_binding: { type: Coord, axis: parameter, curve_role: gravity }\r
  pedagogical_notes: { es: Cambiar de planeta cambia el periodo., en: Changing planet changes the period. }\r
- id: theta\r
  symbol: \\theta\r
  nombre: { es: angulo, en: angle }\r
  unidad_si: rad\r
  dimension: "1"\r
  is_vector: false\r
  components: []\r
  category: estado\r
  descripcion: { es: Desplazamiento angular respecto al equilibrio., en: Angular displacement from equilibrium. }\r
  physical_role: { es: coordenada generalizada del pendulo., en: generalized coordinate of the pendulum }\r
  used_in: [ ecuacion_no_lineal_pf, energia_pf_av ]\r
  common_mistake: { es: Usar grados dentro de expresiones diferenciales o energeticas., en: Using degrees inside differential or energy expressions. }\r
  typical_range: { es: pequeno en linealizacion; finito en modelo no lineal., en: small in linearization; finite in the nonlinear model. }\r
  sign_behavior: { es: Puede ser positivo o negativo segun lado., en: Can be positive or negative depending on side. }\r
  zero_behavior: { es: Cero es equilibrio estable., en: Zero is stable equilibrium. }\r
  value_nature: { es: variable de estado, en: state variable }\r
  interpretation_role: { es: decide si la aproximacion lineal es aceptable., en: decides whether the linear approximation is acceptable. }\r
  graph_binding: { type: Svg, axis: none, curve_role: angular_state }\r
  pedagogical_notes: { es: La amplitud angular controla la correccion no lineal del periodo., en: Angular amplitude controls nonlinear period correction. }\r
- id: omega0\r
  symbol: \\omega_0\r
  nombre: { es: pulsacion natural lineal, en: linear natural angular frequency }\r
  unidad_si: rad/s\r
  dimension: T^-1\r
  is_vector: false\r
  components: []\r
  category: frecuencia\r
  descripcion: { es: Frecuencia angular natural bajo aproximacion de angulo pequeno., en: Natural angular frequency under the small-angle approximation. }\r
  physical_role: { es: escala temporal del modelo lineal, en: time scale of the linear model }\r
  used_in: [ omega0_pf_av ]\r
  common_mistake: { es: Aplicarla a amplitudes grandes sin correccion., en: Applying it to large amplitudes without correction. }\r
  typical_range: { es: positiva para un pivote estable., en: positive for a stable pivot. }\r
  sign_behavior: { es: Se toma positiva., en: Taken as positive. }\r
  zero_behavior: { es: Cero indicaria ausencia de restauracion lineal., en: Zero would indicate no linear restoration. }\r
  value_nature: { es: resultado lineal, en: linear result }\r
  interpretation_role: { es: resume inercia y restauracion en pequenas oscilaciones., en: summarizes inertia and restoration in small oscillations. }\r
  graph_binding: { type: Coord, axis: y, curve_role: angular_frequency }\r
  pedagogical_notes: { es: No describe por si sola el periodo no lineal., en: It does not by itself describe the nonlinear period. }\r
- id: T0\r
  symbol: T_0\r
  nombre: { es: periodo lineal, en: linear period }\r
  unidad_si: s\r
  dimension: T\r
  is_vector: false\r
  components: []\r
  category: tiempo\r
  descripcion: { es: Periodo para oscilaciones pequenas del pendulo fisico., en: Period for small oscillations of the physical pendulum. }\r
  physical_role: { es: resultado temporal medible del modelo lineal, en: measurable time result of the linear model }\r
  used_in: [ periodo_lineal_pf_av ]\r
  common_mistake: { es: Tratarlo como exacto para cualquier amplitud., en: Treating it as exact for any amplitude. }\r
  typical_range: { es: positivo y del orden de segundos en montajes comunes., en: positive and often on the order of seconds in common setups. }\r
  sign_behavior: { es: Siempre positivo., en: Always positive. }\r
  zero_behavior: { es: Cero es fisicamente imposible., en: Zero is physically impossible. }\r
  value_nature: { es: observable calculable, en: calculable observable }\r
  interpretation_role: { es: "permite inferir [[I_O]] o [[d]] desde medidas.", en: "allows inferring [[I_O]] or [[d]] from measurements." }\r
  graph_binding: { type: Coord, axis: y, curve_role: period }\r
  pedagogical_notes: { es: Debe acompanarse del rango angular usado., en: It must be accompanied by the angular range used. }\r
- id: leq\r
  symbol: \\ell_{eq}\r
  nombre: { es: longitud equivalente, en: equivalent length }\r
  unidad_si: m\r
  dimension: L\r
  is_vector: false\r
  components: []\r
  category: equivalencia\r
  descripcion: { es: Longitud del pendulo simple con igual periodo lineal., en: Length of the simple pendulum with the same linear period. }\r
  physical_role: { es: traduce inercia distribuida a longitud simple equivalente, en: translates distributed inertia into equivalent simple length }\r
  used_in: [ longitud_equivalente_pf_av ]\r
  common_mistake: { es: "Confundirla con la distancia fisica [[d]].", en: "Confusing it with the physical distance [[d]]." }\r
  typical_range: { es: positiva y puede superar la longitud visible al pivote., en: positive and may exceed the visible pivot distance. }\r
  sign_behavior: { es: Siempre positiva., en: Always positive. }\r
  zero_behavior: { es: Cero no tiene sentido en este modelo., en: Zero is meaningless in this model. }\r
  value_nature: { es: magnitud equivalente, en: equivalent quantity }\r
  interpretation_role: { es: compara pendulo fisico con pendulo simple., en: compares physical and simple pendula. }\r
  graph_binding: { type: Coord, axis: y, curve_role: equivalent_length }\r
  pedagogical_notes: { es: Es util para interpretar periodos sin perder inercia distribuida., en: Useful for interpreting periods without losing distributed inertia. }\r
- id: theta_dd\r
  symbol: \\theta_{dd}\r
  nombre: { es: aceleracion angular, en: angular acceleration }\r
  unidad_si: rad/s^2\r
  dimension: T^-2\r
  is_vector: false\r
  components: []\r
  category: estado\r
  descripcion: { es: Segunda derivada temporal del angulo., en: Second time derivative of the angle. }\r
  physical_role: { es: respuesta dinamica al torque gravitatorio, en: dynamic response to gravitational torque }\r
  used_in: [ ecuacion_no_lineal_pf ]\r
  common_mistake: { es: Omitirla y convertir la ecuacion dinamica en equilibrio estatico., en: Omitting it and turning the dynamic equation into static equilibrium. }\r
  typical_range: { es: puede cambiar de signo durante la oscilacion., en: can change sign during oscillation. }\r
  sign_behavior: { es: positiva o negativa segun el movimiento., en: positive or negative depending on motion. }\r
  zero_behavior: { es: Puede anularse instantaneamente sin detener el movimiento., en: It can vanish instantaneously without stopping motion. }\r
  value_nature: { es: variable dinamica, en: dynamic variable }\r
  interpretation_role: { es: conecta torque con cambio de movimiento angular., en: connects torque with angular motion change. }\r
  graph_binding: { type: Coord, axis: none, curve_role: acceleration }\r
  pedagogical_notes: { es: Su presencia distingue el modelo dinamico del calculo de periodo., en: Its presence distinguishes dynamics from period calculation. }\r
- id: E\r
  symbol: E\r
  nombre: { es: energia mecanica, en: mechanical energy }\r
  unidad_si: J\r
  dimension: M*L^2*T^-2\r
  is_vector: false\r
  components: []\r
  category: energia\r
  descripcion: { es: Energia mecanica conservada en ausencia de disipacion., en: Mechanical energy conserved in the absence of dissipation. }\r
  physical_role: { es: integra energia cinetica rotacional y potencial gravitatoria, en: combines rotational kinetic energy and gravitational potential energy }\r
  used_in: [ energia_pf_av ]\r
  common_mistake: { es: Usar solo energia potencial y olvidar la parte rotacional., en: Using only potential energy and forgetting the rotational part. }\r
  typical_range: { es: no negativa si se toma el equilibrio como referencia., en: non-negative if equilibrium is the reference. }\r
  sign_behavior: { es: Depende de la referencia, pero suele tomarse positiva., en: Depends on reference, but is usually taken positive. }\r
  zero_behavior: { es: Cero corresponde al equilibrio sin velocidad., en: Zero corresponds to equilibrium with no speed. }\r
  value_nature: { es: integral de movimiento ideal, en: ideal motion integral }\r
  interpretation_role: { es: permite estudiar amplitudes finitas y no linealidad., en: allows study of finite amplitudes and nonlinearity. }\r
  graph_binding: { type: Svg, axis: none, curve_role: energy }\r
  pedagogical_notes: { es: Es el puente natural hacia el enfoque lagrangiano., en: It is the natural bridge to the Lagrangian approach. }\r
- id: theta_dot\r
  symbol: \\theta_d\r
  nombre: { es: velocidad angular, en: angular velocity }\r
  unidad_si: rad/s\r
  dimension: T^-1\r
  is_vector: false\r
  components: []\r
  category: estado\r
  descripcion: { es: Primera derivada temporal del angulo., en: First time derivative of the angle. }\r
  physical_role: { es: determina la energia cinetica rotacional, en: determines rotational kinetic energy }\r
  used_in: [ energia_pf_av ]\r
  common_mistake: { es: Confundir velocidad angular del cuerpo con frecuencia natural., en: Confusing body angular speed with natural frequency. }\r
  typical_range: { es: cambia de signo al pasar por los extremos., en: changes sign at turning points. }\r
  sign_behavior: { es: positiva o negativa segun sentido de giro., en: positive or negative depending on rotation direction. }\r
  zero_behavior: { es: Se anula en los extremos de la oscilacion., en: Vanishes at oscillation endpoints. }\r
  value_nature: { es: variable dinamica, en: dynamic variable }\r
  interpretation_role: { es: convierte amplitud en energia cinetica durante el movimiento., en: converts amplitude into kinetic energy during motion. }\r
  graph_binding: { type: Coord, axis: none, curve_role: angular_velocity }\r
  pedagogical_notes: { es: En energia aparece al cuadrado, no como frecuencia fija., en: In energy it appears squared, not as a fixed frequency. }\r
`;export{e as default};
