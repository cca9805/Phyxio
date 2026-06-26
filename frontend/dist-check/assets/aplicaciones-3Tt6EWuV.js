const a=`## 1. Antenas de telecomunicación móvil (4G/5G)

Las estaciones base de telefonía móvil de última generación emiten de forma constante radiación electromagnética en la banda de microondas para transmitir paquetes de datos digitales a los teléfonos de los usuarios. La antena receptora del dispositivo móvil capta la oscilación del campo eléctrico [[E0]] incidente, induciendo una corriente eléctrica alterna microscópica con la misma frecuencia que la onda portadora, la cual es decodificada por el microprocesador del terminal.

Para modelar la recepción, asumimos que el usuario se encuentra a una distancia muy grande en comparación con la longitud de la antena emisora, lo que permite simplificar los frentes de onda como planos paralelos perfectos con amplitudes constantes y una polarización lineal limpia. Esta aproximación facilita el cálculo de la potencia captada según la orientación del dispositivo. Esta simplificación es fundamental porque a distancias de campo lejano, los efectos de inducción mutua y las distorsiones multipolares de la antena emisora se atenúan por completo, dejando una onda electromagnética plana pura y sumamente predecible. La eficiencia del receptor móvil depende de la correcta alineación entre su antena interna y la dirección del campo eléctrico [[E0]] de la onda recibida.

- **Variable dominante**: frecuencia [[f]]
- **Límite de validez**: distancia radial del dispositivo a la antena mayor a diez longitudes de onda (r > 10 [[lambda]]) para evitar la región de campo cercano inductivo y capacitivo.

---

## 2. Radiotelescopios y astrofísica de microondas

Los astrofísicos utilizan radiotelescopios gigantes formados por parábolas metálicas reflectoras para captar señales extremadamente débiles provenientes de fuentes cosmológicas, como púlsares, nubes moleculares interestelares y la radiación de fondo cósmico de microondas. La perturbación electromagnética detectada viaja a través del vacío espacial intergaláctico conservando sus propiedades durante miles de millones de años.

En este análisis, la hipótesis dominante es que el medio espacial interestelar se comporta como un vacío perfecto y no disipativo sin absorción, lo cual permite aplicar de forma exacta la velocidad de propagación [[c]] como una constante universal absoluta y relacionar la temperatura de la fuente directamente con la energía detectada. Dado que los fotones viajan sin colisionar con materia en grandes extensiones del espacio, la fase y la dirección de propagación se conservan con una pureza extraordinaria. Esto permite a los radiotelescopios interferométricos combinar señales de distintas antenas situadas a miles de kilómetros de distancia, recreando un telescopio virtual del tamaño de la Tierra para estudiar la naturaleza de los agujeros negros.

- **Variable dominante**: longitud de onda [[lambda]]
- **Límite de validez**: ausencia de interferencias de radiofrecuencia (RFI) antropogénicas terrestres en la misma banda de frecuencias de observación y ausencia de dispersión por plasma interestelar denso.

---

## 3. Láseres médicos para cirugía de precisión

En dermatología y oftalmología, los cirujanos utilizan haces láser focalizados de alta frecuencia para realizar micro-ablaciones de tejido y correcciones corneales con una precisión microscópica. El haz de luz viaja de forma coherente y colimada a través del aire exterior antes de incidir sobre la superficie húmeda del ojo o la piel del paciente.

Asumimos que el haz láser concentrado en el punto focal se comporta como una onda electromagnética plana local con una intensidad media [[I]] constante en la zona de impacto, despreciando la divergencia natural del haz a escalas espaciales micrométricas y modelando la interacción con el tejido de forma lineal. Esta aproximación plana es extremadamente precisa debido a que el área de impacto en la córnea (de apenas unos micrómetros de diámetro) es infinitesimal en comparación con el radio de curvatura general del haz focalizado. Al evaluar la intensidad media [[I]], los médicos pueden dosificar la energía exacta para vaporizar células enfermas sin transferir calor dañino a los tejidos sanos subyacentes.

- **Variable dominante**: intensidad media [[I]]
- **Límite de validez**: intensidad del haz estrictamente inferior al umbral de ionización y ruptura dieléctrica espontánea del aire circundante (I < 10^15 W/m^2) para evitar la formación de plasmas disruptivos.

---

## 4. Radares de control de tráfico vial

Los radares de las autopistas emiten pulsos continuos de microondas hacia los vehículos en movimiento para medir su velocidad instantánea mediante el corrimiento de frecuencia provocado por el efecto Doppler. La onda incidente se refleja en la carrocería metálica del coche y regresa hacia la antena receptora del radar con una frecuencia alterada proporcional a la velocidad de avance.

La simplificación central es que la interacción se produce en condiciones de aire seco no dispersivo y que el coche actúa como un reflector plano perfecto móvil, ignorando la dispersión tridimensional compleja de la señal reflejada hacia los lados de la carretera. Esto permite aplicar las leyes clásicas de reflexión electromagnética sobre conductores perfectos. La señal devuelta conserva la coherencia temporal suficiente para que el detector electrónico del radar mida la diferencia infinitesimal de frecuencia entre la onda emitida y la reflejada, calculando la velocidad del infractor en milisegundos con un margen de error menor al uno por ciento.

- **Variable dominante**: frecuencia [[f]]
- **Límite de validez**: ángulo de alineación cosenoidal entre el radar y la trayectoria del vehículo cercano a cero grados para evitar errores de subestimación de la velocidad del coche.

---

## 5. Hornos de microondas domésticos

Los hornos microondas calientan los alimentos emitiendo ondas electromagnéticas a una frecuencia fija de 2,45 GHz dentro de una cavidad metálica sellada. El campo eléctrico [[E0]] oscilante ejerce un par de torsión continuo sobre los dipolos eléctricos de las moléculas de agua contenidas en la comida, forzándolas a rotar miles de millones de veces por segundo y generando calor por fricción molecular instantánea.

Asumimos que la cavidad metálica es un conductor eléctrico perfecto que refleja de forma total la onda, creando un patrón de onda estacionaria con nodos y antinodos bien definidos donde la energía se distribuye de forma regular por todo el volumen del alimento. La transferencia de energía ocurre de forma dominante a través del acoplamiento dipolar eléctrico del agua líquida, por lo que la penetración de la onda y la tasa de calentamiento dependen de la constante dieléctrica del alimento. La comprensión de este mecanismo permite diseñar recipientes aptos que no absorban la radiación y evitar accidentes domésticos graves.

- **Variable dominante**: amplitud del campo eléctrico [[E0]]
- **Límite de validez**: presencia obligatoria de humedad libre en el alimento; la ausencia de agua o la introducción de metales afilados provoca descargas destructivas y arcos voltaicos en la cavidad.
`;export{a as default};
