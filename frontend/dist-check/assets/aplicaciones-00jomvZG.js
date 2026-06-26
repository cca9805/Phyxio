const e=`## 1. Diseño de uniones soldadas en tuberías de transporte de gas

En gasoductos de alta presión, las soldaduras deben transmitir vibraciones de inspección ultrasónica sin generar ecos falsos. Si la soldadura tiene una impedancia mecánica muy diferente a la del tubo (por porosidad, inclusiones de escoria o cambios de microestructura), aparecen reflexiones que enmascaran defectos reales. El ingeniero de soldadura optimiza los parámetros del proceso (corriente, velocidad, gas de protección) para que la zona fundida tenga densidad y módulo elástico cercanos al material base, minimizando el contraste de [[Z_mec]].

La inspección se realiza lanzando ondas longitudinales a través de la pared del tubo. El eco de fondo proporciona la referencia de amplitud; cualquier eco intermedio indica una discontinuidad. La amplitud del eco depende del contraste de [[R_Z]] entre la matriz y el defecto.

Variable dominante: [[Z_mec]] del cordón de soldadura respecto al material base.
Límite de validez: el modelo de impedancia simple falla si la soldadura tiene espesor comparable a la longitud de onda (típicamente < 1 mm a 5 MHz), donde se necesitan modelos de capa.

## 2. Aislamiento vibratorio en maquinaria rotativa industrial

Las máquinas rotativas (motores, compresores, turbinas) generan vibraciones que se transmiten a la bancada y al edificio. Para aislar, se interponen materiales elastoméricos de baja impedancia mecánica entre la máquina y la estructura. El principio físico es maximizar [[R_Z]] en la interfaz metal-elastómero: como el caucho tiene [[Z_mec]] varios órdenes de magnitud menor que el acero, la mayor parte de la energía vibratoria se refleja y queda confinada en la máquina.

El diseño del aislador requiere elegir la rigidez correcta (que fija [[c_s]] del elastómero) y la sección transversal ([[A_sec]]) para que la frecuencia de resonancia del conjunto quede por debajo de la frecuencia de excitación. Un error frecuente es diseñar el aislador solo por criterio estático (carga/deformación) sin verificar el contraste de impedancias a la frecuencia dominante.

Variable dominante: [[R_Z]] en la interfaz máquina-soporte elastomérico.
Límite de validez: si la frecuencia de excitación coincide con la resonancia del aislador, el modelo de impedancia simple no aplica y se necesita la función de transferencia dinámica completa.

## 3. Control de calidad de piezas fundidas por resonancia mecánica

En fundición de precisión (automoción, aeronáutica), las piezas deben tener propiedades elásticas uniformes. La técnica de resonant ultrasound spectroscopy (RUS) excita la pieza y mide sus frecuencias de resonancia. Estas frecuencias dependen de la impedancia mecánica del material (a través de ρ y c) y de la geometría. Comparando las frecuencias medidas con las predichas para una pieza sin defectos, se detectan porosidades internas, segregaciones o grietas que alteran localmente [[Z_mec]].

Una pieza con porosidad interna del 2% reduce su densidad efectiva y aumenta ligeramente su velocidad (el módulo cae menos que la densidad). El efecto neto es una reducción de [[Z_mec]] del orden del 3-5%, que desplaza frecuencias de resonancia de forma medible.

Variable dominante: [[Z_mec]] global de la pieza respecto al valor nominal del material sano.
Límite de validez: el método requiere geometría conocida y condiciones de contorno libres; si la pieza está fijada o tiene forma muy compleja, el modelo analítico falla y se necesita simulación por elementos finitos.

## 4. Acoplamiento acústico en ecografía médica

En ecografía, el transductor piezoeléctrico debe transmitir ondas al tejido blando (impedancia específica ≈ 1.5 MRayl) desde un cristal con impedancia mucho mayor (≈ 30 MRayl). Sin capa de adaptación, [[R_Z]] ≈ 0.90 y solo se transmitiría el 19% de la potencia. Con una capa de un cuarto de longitud de onda cuya impedancia sea √(30 × 1.5) ≈ 6.7 MRayl, la reflexión se reduce a cero teóricamente.

El gel de acoplamiento elimina la capa de aire (impedancia prácticamente nula) entre transductor y piel, que de existir produciría reflexión total. El diseño de las capas de matching en la sonda ecográfica es un ejercicio directo de optimización de [[Z_mec]] para maximizar [[T_Z]] en el ancho de banda de trabajo (2-15 MHz según aplicación).

Variable dominante: [[T_Z]] entre cristal piezoeléctrico y tejido biológico.
Límite de validez: a frecuencias muy altas (> 20 MHz), la atenuación en la capa de matching y en el tejido domina sobre la reflexión, y el diseño debe optimizar conjuntamente transmisión y pérdidas.

## 5. Diseño de metamateriales acústicos para filtrado de vibraciones

Los metamateriales acústicos son estructuras periódicas diseñadas para crear bandgaps: rangos de frecuencia donde las ondas no se propagan. El mecanismo fundamental es la reflexión múltiple en interfaces con contraste de [[Z_mec]] periódico. Alternando capas de alta y baja impedancia con espesores de cuarto de longitud de onda, se crean espejos de Bragg mecánicos que reflejan el 100% de la energía en la banda de diseño.

El diseño requiere seleccionar materiales con ratio de impedancias Z_alta/Z_baja lo mayor posible (típicamente > 5) y calcular los espesores para centrar el bandgap en la frecuencia objetivo. Un cristal fonónico de 10 capas alternas acero/caucho puede atenuar más de 40 dB en un ancho de banda del 30% alrededor de la frecuencia central.

Variable dominante: ratio Z_alta/Z_baja que determina el ancho y profundidad del bandgap.
Límite de validez: el modelo de capas planas falla cuando las dimensiones de las inclusiones son comparables a la longitud de onda en las tres direcciones; en ese caso se necesitan modelos de scattering 3D.
`;export{e as default};
