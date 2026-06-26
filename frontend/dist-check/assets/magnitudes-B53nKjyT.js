const e=`leaf_id: intensivas\r
magnitudes:\r
- id: X_int\r
  symbol: X_int\r
  nombre:\r
    es: Variable intensiva generica\r
    en: Generic intensive variable\r
  descripcion:\r
    es: Magnitud que no cambia al duplicar una muestra en el mismo estado.\r
    en: Magnitude that does not change when a sample in the same state is duplicated.\r
  unidad_si: variable\r
  si_base: variable\r
  dimension: variable\r
  is_vector: false\r
  components: []\r
  category: estado\r
  role: principal\r
  used_in:\r
  - criterio_intensividad\r
  - promedio_ponderado_intensivo\r
  common_mistake:\r
    es: Confundirla con una cantidad total acumulable.\r
    en: Confusing it with an accumulable total quantity.\r
  typical_range:\r
    es: Depende de la propiedad observada.\r
    en: Depends on the observed property.\r
  value_nature: state\r
  finite: true\r
  calculable: true\r
  pedagogical_notes:\r
    es: Es el marcador abstracto para temperatura\r
    presion o densidad.: null\r
    en: It is the abstract marker for temperature\r
    pressure: null\r
    or density.: null\r
  physical_role:\r
    es: variable estado\r
    en: estado variable\r
  sign_behavior:\r
    es: Debe interpretarse segun la propiedad y su referencia.\r
    en: Must be interpreted according to the property and its reference.\r
  zero_behavior:\r
    es: El cero puede ser fisico, convencional o no alcanzable segun la magnitud.\r
    en: Zero may be physical, conventional, or unreachable depending on the magnitude.\r
  interpretation_role: principal\r
  graph_binding:\r
    type: Coord\r
    role: output\r
- id: lambda_escala\r
  symbol: lambda\r
  nombre:\r
    es: Factor de escala del sistema\r
    en: System scale factor\r
  descripcion:\r
    es: Numero por el que se multiplica la cantidad de sistema sin cambiar su estado local.\r
    en: Number by which the amount of system is multiplied without changing its local state.\r
  unidad_si: '1'\r
  si_base: '1'\r
  dimension: '1'\r
  is_vector: false\r
  components: []\r
  category: parametro\r
  role: control\r
  used_in:\r
  - criterio_intensividad\r
  common_mistake:\r
    es: Pensar que al crecer lambda tambien debe crecer cualquier propiedad.\r
    en: Thinking that when lambda grows every property must also grow.\r
  typical_range:\r
    es: Mayor que cero; en ejemplos se usa 1 a 5.\r
    en: Greater than zero; examples use 1 to 5.\r
  value_nature: parameter\r
  finite: true\r
  calculable: true\r
  pedagogical_notes:\r
    es: Permite separar tamano total de estado termodinamico.\r
    en: It separates total size from thermodynamic state.\r
  physical_role:\r
    es: variable parametro\r
    en: parametro variable\r
  sign_behavior:\r
    es: Debe interpretarse segun la propiedad y su referencia.\r
    en: Must be interpreted according to the property and its reference.\r
  zero_behavior:\r
    es: El cero puede ser fisico, convencional o no alcanzable segun la magnitud.\r
    en: Zero may be physical, conventional, or unreachable depending on the magnitude.\r
  interpretation_role: control\r
  graph_binding:\r
    type: Coord\r
    role: control\r
- id: T\r
  symbol: T\r
  nombre:\r
    es: Temperatura\r
    en: Temperature\r
  descripcion:\r
    es: Variable intensiva que mide equilibrio termico y direccion de transferencia de calor.\r
    en: Intensive variable measuring thermal equilibrium and heat-transfer direction.\r
  unidad_si: K\r
  si_base: K\r
  dimension: Theta\r
  is_vector: false\r
  components: []\r
  category: estado\r
  role: core\r
  used_in:\r
  - igualdad_equilibrio_intensivo\r
  - promedio_ponderado_intensivo\r
  common_mistake:\r
    es: Sumar temperaturas de cuerpos al juntarlos.\r
    en: Adding temperatures of bodies when they are joined.\r
  typical_range:\r
    es: 250 K a 1000 K en muchos sistemas de laboratorio.\r
    en: 250 K to 1000 K in many laboratory systems.\r
  value_nature: state\r
  finite: true\r
  calculable: true\r
  pedagogical_notes:\r
    es: Dos copias identicas tienen la misma temperatura que una copia.\r
    en: Two identical copies have the same temperature as one copy.\r
  physical_role:\r
    es: variable estado\r
    en: estado variable\r
  sign_behavior:\r
    es: Debe interpretarse segun la propiedad y su referencia.\r
    en: Must be interpreted according to the property and its reference.\r
  zero_behavior:\r
    es: El cero puede ser fisico, convencional o no alcanzable segun la magnitud.\r
    en: Zero may be physical, conventional, or unreachable depending on the magnitude.\r
  interpretation_role: core\r
  graph_binding:\r
    type: Coord\r
    role: output\r
- id: P\r
  symbol: P\r
  nombre:\r
    es: Presion\r
    en: Pressure\r
  descripcion:\r
    es: Fuerza normal por unidad de area\r
    intensiva cuando el estado mecanico local es uniforme.: null\r
    en: Normal force per unit area\r
    intensive when the local mechanical state is uniform.: null\r
  unidad_si: Pa\r
  si_base: kg m^-1 s^-2\r
  dimension: M L^-1 T^-2\r
  is_vector: false\r
  components: []\r
  category: estado\r
  role: core\r
  used_in:\r
  - igualdad_equilibrio_intensivo\r
  common_mistake:\r
    es: Duplicar presion al duplicar el volumen de gas en el mismo estado.\r
    en: Doubling pressure when doubling gas volume in the same state.\r
  typical_range:\r
    es: 10^5 Pa cerca de condiciones ambientales.\r
    en: 10^5 Pa near ambient conditions.\r
  value_nature: state\r
  finite: true\r
  calculable: true\r
  pedagogical_notes:\r
    es: Caracteriza el empuje local sobre fronteras\r
    no cantidad total de gas.: null\r
    en: It characterizes local push on boundaries\r
    not total amount of gas.: null\r
  physical_role:\r
    es: variable estado\r
    en: estado variable\r
  sign_behavior:\r
    es: Debe interpretarse segun la propiedad y su referencia.\r
    en: Must be interpreted according to the property and its reference.\r
  zero_behavior:\r
    es: El cero puede ser fisico, convencional o no alcanzable segun la magnitud.\r
    en: Zero may be physical, conventional, or unreachable depending on the magnitude.\r
  interpretation_role: core\r
  graph_binding:\r
    type: Coord\r
    role: output\r
- id: rho\r
  symbol: rho\r
  nombre:\r
    es: Densidad\r
    en: Density\r
  descripcion:\r
    es: Masa por unidad de volumen\r
    cociente intensivo de dos extensivas compatibles.: null\r
    en: Mass per unit volume\r
    an intensive ratio of two compatible extensives.: null\r
  unidad_si: kg/m3\r
  si_base: kg m^-3\r
  dimension: M L^-3\r
  is_vector: false\r
  components: []\r
  category: material\r
  role: core\r
  used_in:\r
  - densidad_intensiva\r
  - promedio_ponderado_intensivo\r
  common_mistake:\r
    es: Tratarla como masa total del sistema.\r
    en: Treating it as total mass of the system.\r
  typical_range:\r
    es: 1 kg/m3 en gases ligeros\r
    1000 kg/m3 en agua.: null\r
    en: 1 kg/m3 in light gases\r
    1000 kg/m3 in water.: null\r
  value_nature: property\r
  finite: true\r
  calculable: true\r
  pedagogical_notes:\r
    es: Si masa y volumen se duplican juntos\r
    rho no cambia.: null\r
    en: If mass and volume double together\r
    rho does not change.: null\r
  physical_role:\r
    es: variable material\r
    en: material variable\r
  sign_behavior:\r
    es: Debe interpretarse segun la propiedad y su referencia.\r
    en: Must be interpreted according to the property and its reference.\r
  zero_behavior:\r
    es: El cero puede ser fisico, convencional o no alcanzable segun la magnitud.\r
    en: Zero may be physical, conventional, or unreachable depending on the magnitude.\r
  interpretation_role: core\r
  graph_binding:\r
    type: Coord\r
    role: output\r
- id: m\r
  symbol: m\r
  nombre:\r
    es: Masa\r
    en: Mass\r
  descripcion:\r
    es: Cantidad extensiva usada como peso estadistico al promediar intensivas.\r
    en: Extensive amount used as statistical weight when averaging intensives.\r
  unidad_si: kg\r
  si_base: kg\r
  dimension: M\r
  is_vector: false\r
  components: []\r
  category: cantidad\r
  role: support\r
  used_in:\r
  - densidad_intensiva\r
  - promedio_ponderado_intensivo\r
  common_mistake:\r
    es: Olvidar que la masa pondera mezclas con temperaturas distintas.\r
    en: Forgetting that mass weights mixtures with different temperatures.\r
  typical_range:\r
    es: Positiva en sistemas macroscopicos.\r
    en: Positive in macroscopic systems.\r
  value_nature: amount\r
  finite: true\r
  calculable: true\r
  pedagogical_notes:\r
    es: No es intensiva\r
    pero ayuda a calcular propiedades intensivas de mezclas.: null\r
    en: It is not intensive\r
    but helps compute intensive properties of mixtures.: null\r
  physical_role:\r
    es: variable cantidad\r
    en: cantidad variable\r
  sign_behavior:\r
    es: Debe interpretarse segun la propiedad y su referencia.\r
    en: Must be interpreted according to the property and its reference.\r
  zero_behavior:\r
    es: El cero puede ser fisico, convencional o no alcanzable segun la magnitud.\r
    en: Zero may be physical, conventional, or unreachable depending on the magnitude.\r
  interpretation_role: support\r
  graph_binding:\r
    type: Coord\r
    role: support\r
- id: V\r
  symbol: V\r
  nombre:\r
    es: Volumen\r
    en: Volume\r
  descripcion:\r
    es: Extension espacial total usada para normalizar masa o energia.\r
    en: Total spatial extension used to normalize mass or energy.\r
  unidad_si: m3\r
  si_base: m^3\r
  dimension: L^3\r
  is_vector: false\r
  components: []\r
  category: cantidad\r
  role: support\r
  used_in:\r
  - densidad_intensiva\r
  common_mistake:\r
    es: Confundir volumen grande con densidad grande.\r
    en: Confusing large volume with high density.\r
  typical_range:\r
    es: Positivo; depende del sistema.\r
    en: Positive; depends on the system.\r
  value_nature: amount\r
  finite: true\r
  calculable: true\r
  pedagogical_notes:\r
    es: Al dividir masa por volumen aparece una propiedad intensiva.\r
    en: Dividing mass by volume gives an intensive property.\r
  physical_role:\r
    es: variable cantidad\r
    en: cantidad variable\r
  sign_behavior:\r
    es: Debe interpretarse segun la propiedad y su referencia.\r
    en: Must be interpreted according to the property and its reference.\r
  zero_behavior:\r
    es: El cero puede ser fisico, convencional o no alcanzable segun la magnitud.\r
    en: Zero may be physical, conventional, or unreachable depending on the magnitude.\r
  interpretation_role: support\r
  graph_binding:\r
    type: Coord\r
    role: support\r
- id: X_A\r
  symbol: X_A\r
  nombre:\r
    es: Valor intensivo de la parte A\r
    en: Intensive value of part A\r
  descripcion:\r
    es: Propiedad local o media de un subsistema antes de mezclarlo.\r
    en: Local or mean property of a subsystem before mixing.\r
  unidad_si: variable\r
  si_base: variable\r
  dimension: variable\r
  is_vector: false\r
  components: []\r
  category: estado\r
  role: support\r
  used_in:\r
  - promedio_ponderado_intensivo\r
  common_mistake:\r
    es: Promediarlo sin ponderar por cantidad.\r
    en: Averaging it without weighting by amount.\r
  typical_range:\r
    es: Finito y compatible con X_B.\r
    en: Finite and compatible with X_B.\r
  value_nature: state\r
  finite: true\r
  calculable: true\r
  pedagogical_notes:\r
    es: En mezclas no basta con hacer media aritmetica si las cantidades son distintas.\r
    en: In mixtures an arithmetic mean is not enough if amounts differ.\r
  physical_role:\r
    es: variable estado\r
    en: estado variable\r
  sign_behavior:\r
    es: Debe interpretarse segun la propiedad y su referencia.\r
    en: Must be interpreted according to the property and its reference.\r
  zero_behavior:\r
    es: El cero puede ser fisico, convencional o no alcanzable segun la magnitud.\r
    en: Zero may be physical, conventional, or unreachable depending on the magnitude.\r
  interpretation_role: support\r
  graph_binding:\r
    type: Coord\r
    role: support\r
- id: X_B\r
  symbol: X_B\r
  nombre:\r
    es: Valor intensivo de la parte B\r
    en: Intensive value of part B\r
  descripcion:\r
    es: Propiedad local o media de un segundo subsistema antes de mezclarlo.\r
    en: Local or mean property of a second subsystem before mixing.\r
  unidad_si: variable\r
  si_base: variable\r
  dimension: variable\r
  is_vector: false\r
  components: []\r
  category: estado\r
  role: support\r
  used_in:\r
  - promedio_ponderado_intensivo\r
  common_mistake:\r
    es: Suponer que domina tanto como X_A aunque haya menos cantidad.\r
    en: Assuming it dominates as much as X_A even when there is less amount.\r
  typical_range:\r
    es: Finito y compatible con X_A.\r
    en: Finite and compatible with X_A.\r
  value_nature: state\r
  finite: true\r
  calculable: true\r
  pedagogical_notes:\r
    es: Su efecto sobre el valor final depende de la cantidad asociada.\r
    en: Its effect on the final value depends on the associated amount.\r
  physical_role:\r
    es: variable estado\r
    en: estado variable\r
  sign_behavior:\r
    es: Debe interpretarse segun la propiedad y su referencia.\r
    en: Must be interpreted according to the property and its reference.\r
  zero_behavior:\r
    es: El cero puede ser fisico, convencional o no alcanzable segun la magnitud.\r
    en: Zero may be physical, conventional, or unreachable depending on the magnitude.\r
  interpretation_role: support\r
  graph_binding:\r
    type: Coord\r
    role: support\r
`;export{e as default};
