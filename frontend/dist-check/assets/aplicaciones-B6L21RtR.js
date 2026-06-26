const e=`# Aplicaciones: Introducción a ondas en sólidos

## 1. Ensayos no destructivos por ultrasonidos

La inspección ultrasónica es la aplicación industrial más directa de las ondas en sólidos. Un transductor piezoeléctrico genera pulsos ultrasónicos (típicamente entre 1 y 10 MHz) que se propagan por la pieza metálica. Cuando encuentran un defecto interno (grieta, poro, inclusión), parte de la energía se refleja. Midiendo el tiempo de vuelo de los ecos y conociendo [[v_fase]] del material, se calcula la profundidad y el tamaño del defecto con precisión milimétrica.

En la industria aeronáutica, cada componente estructural de un avión se inspecciona por ultrasonidos antes de entrar en servicio. Las turbinas de los motores, los largueros de las alas y los trenes de aterrizaje se examinan periódicamente. La velocidad de onda en aleaciones de titanio (unos 6100 m/s longitudinal) y aluminio (unos 6300 m/s) permite resolver defectos de 0.5 mm a frecuencias de 10 MHz, ya que la longitud de onda [[lambda]] es de unos 0.6 mm.

Variable dominante: [[v_fase]] del material, que determina la resolución espacial alcanzable para una frecuencia dada.
Límite de validez: cuando el tamaño del defecto es menor que la longitud de onda, el eco se debilita y la detección se vuelve difícil. Para defectos submicrónicos se necesitan frecuencias superiores a 100 MHz.

## 2. Sismología y detección de terremotos

Los terremotos generan ondas mecánicas que se propagan por el interior de la Tierra. Las ondas P (longitudinales, más rápidas, con velocidades entre 5000 y 13000 m/s según la profundidad) llegan primero a las estaciones sísmicas. Las ondas S (transversales, más lentas, entre 3000 y 7000 m/s) llegan después. La diferencia temporal entre ambas llegadas permite calcular la distancia al epicentro. Tres o más estaciones dan la localización precisa.

El hecho de que las ondas S no atraviesen el núcleo externo de la Tierra (porque es líquido y [[G_mod]] es nulo en fluidos) fue la prueba definitiva de su estado de agregación. Esta observación, realizada a principios del siglo XX, demostró que las ondas en sólidos no son una curiosidad académica sino una herramienta de diagnóstico a escala planetaria.

Variable dominante: la diferencia de velocidades entre ondas P y S, que determina la resolución temporal de la localización.
Límite de validez: en zonas con fuerte heterogeneidad (volcanes, zonas de subducción), las trayectorias se curvan y el modelo simple de velocidad constante falla. Se necesitan modelos tomográficos tridimensionales.

## 3. Medición de constantes elásticas de materiales

La velocidad de las ondas ultrasónicas proporciona un método no destructivo para medir las constantes elásticas de un material. Midiendo [[v_fase]] longitudinal y transversal en una muestra, se obtienen directamente [[E_young]] y [[G_mod]] (y por tanto el coeficiente de Poisson). Este método es más preciso que los ensayos mecánicos convencionales para materiales frágiles como cerámicas y vidrios, donde las probetas de tracción son difíciles de fabricar.

En un laboratorio de caracterización, una muestra de cerámica de 10 mm de espesor se examina con un par de transductores (uno de ondas longitudinales y otro de ondas transversales). Las velocidades medidas dan directamente los módulos elásticos sin dañar la pieza. La precisión típica es del 1%, superior a la de un ensayo de tracción convencional.

Variable dominante: la precisión en la medición del tiempo de vuelo, que se traduce directamente en precisión de [[v_fase]] y por tanto de los módulos.
Límite de validez: si el material es anisótropo (compuestos de fibra de carbono, maderas), se necesitan mediciones en múltiples direcciones para obtener la matriz de rigidez completa (hasta 21 constantes independientes).

## 4. Monitorización de salud estructural

Los sistemas de monitorización estructural (SHM) utilizan redes de transductores piezoeléctricos adheridos permanentemente a la estructura. Un transductor emite pulsos ultrasónicos periódicamente y los demás registran las señales recibidas. Si aparece un daño (grieta por fatiga, delaminación, corrosión), las señales cambian respecto a la línea base inicial.

En puentes metálicos, tuberías de petróleo y fuselajes de aviones, estos sistemas detectan daños en tiempo real. La velocidad de onda y su atenuación en la zona dañada difieren de la zona sana: una grieta reduce la rigidez local y modifica tanto [[v_fase]] como las amplitudes de las señales. Redes de 20 a 50 sensores pueden cubrir una sección de fuselaje de varios metros cuadrados con resolución centimétrica.

Variable dominante: los cambios en [[v_fase]] y en la atenuación entre el estado sano y el estado dañado.
Límite de validez: la sensibilidad depende de la frecuencia y la geometría. Daños muy localizados (menores que la longitud de onda) producen cambios pequeños difíciles de distinguir del ruido ambiental y la variabilidad térmica.

## 5. Líneas de retardo acústicas y procesamiento de señales

Las ondas en sólidos se propagan mucho más lentamente que las ondas electromagnéticas (5000 m/s frente a 300 000 000 m/s). Esta diferencia de cinco órdenes de magnitud permite crear líneas de retardo compactas: una señal eléctrica se convierte en onda acústica, recorre un cristal o barra metálica, y se reconvierte a señal eléctrica con un retardo controlado. Un cristal de cuarzo de 5 cm produce un retardo de unos 10 microsegundos, que requeriría 3 km de cable eléctrico.

Los filtros SAW (Surface Acoustic Wave) en teléfonos móviles y receptores de televisión utilizan este principio con ondas de superficie en sustratos piezoeléctricos. Operan a frecuencias de cientos de MHz a varios GHz y son esenciales en las telecomunicaciones modernas. Las velocidades típicas de las ondas Rayleigh en estos sustratos (unos 3000 m/s en cuarzo) determinan las dimensiones de los dispositivos y su frecuencia de operación.

Variable dominante: [[v_fase]] en el sustrato, que determina las dimensiones del dispositivo para una frecuencia dada.
Límite de validez: a frecuencias extremadamente altas (más de 10 GHz), las longitudes de onda son menores que las dimensiones de la estructura cristalina y el modelo continuo deja de valer.
`;export{e as default};
