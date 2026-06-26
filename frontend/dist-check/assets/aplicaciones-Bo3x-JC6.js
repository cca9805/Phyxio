const e=`## 1. Pantallas de osciloscopio y tubos de rayos catódicos

En los osciloscopios analógicos clásicos y en los tubos de rayos catódicos (CRT), un haz de electrones es acelerado y deflectado lateralmente por placas conductoras entre las que se establece un campo eléctrico casi uniforme. Al aplicar una diferencia de potencial entre las placas, el campo resultante ejerce una fuerza [[F_e]] sobre los electrones del haz proporcional a la carga del electrón multiplicada por [[E]].

El campo entre las placas actúa como una fuerza continua perpendicular a la dirección inicial de movimiento, curvando la trayectoria del electrón y desplazando el punto de impacto en la pantalla. La precisión de la imagen depende directamente de controlar la intensidad y la dirección de [[E]] con gran exactitud. Sin el concepto de campo como magnitud vectorial cuantificable, sería imposible calcular la deflexión antes de construir el dispositivo.

Variable dominante: la intensidad del campo eléctrico [[E]] entre las placas deflectoras, que determina la magnitud de la deflexión lateral del haz.
Límite de validez: el modelo de campo uniforme entre placas es válido mientras la distancia entre placas sea mucho menor que su longitud, y mientras la velocidad del electrón sea inferior al 10% de la velocidad de la luz.

## 2. Electroscopio y medida de carga estática

El electroscopio de láminas de oro es el detector de campo eléctrico más antiguo y conceptualmente más transparente. Cuando se acerca un objeto cargado al electrodo del instrumento, el campo generado por la carga desplaza los electrones libres del metal, induciendo carga de signo opuesto en el electrodo y carga del mismo signo en las láminas. Las láminas, con igual signo, se repelen y se separan visiblemente.

La separación angular de las láminas es una medida cualitativa de la intensidad de [[E]] en la región del electrodo. El fenómeno ilustra directamente que el campo existe como propiedad del espacio antes de que la carga de prueba (las láminas) sea colocada allí: el campo del objeto externo reorganiza las cargas libres del instrumento. Esta es la demostración experimental más directa de que [[E]] es independiente de la carga de prueba en el límite en que esta no perturba la fuente.

Variable dominante: el campo eléctrico [[E]] generado por la carga externa, que determina la redistribución de cargas en el instrumento y la magnitud de la separación de láminas.
Límite de validez: el modelo falla para objetos cargados muy próximos al electrodo cuyo campo no puede tratarse como uniforme en la escala del instrumento, o cuando la humedad del ambiente reduce la resistividad del aire y permite la fuga de carga.

## 3. Precipitadores electrostáticos industriales

Los precipitadores electrostáticos se usan en centrales termoeléctricas y fábricas de cemento para eliminar partículas de polvo y cenizas de los gases de combustión antes de su emisión a la atmósfera. El principio es simple: un electrodo central cargado negativamente genera un campo [[E]] muy intenso que ioniza el gas circundante. Las partículas de polvo capturan iones y adquieren carga; el campo [[E]] entre el electrodo central y las placas colectoras ejerce entonces una fuerza [[F_e]] sobre las partículas cargadas, arrastrándolas hacia las placas donde se recogen.

La eficiencia de recogida depende del tiempo que pasan las partículas en el campo y de la magnitud de [[F_e]], que a su vez depende de [[E]] y de la carga adquirida por cada partícula. Un campo insuficiente no carga las partículas adecuadamente; un campo excesivo puede provocar arcos eléctricos que dañan el equipo. El diseño óptimo requiere calcular con precisión la distribución de [[E]] en el interior del precipitador.

Variable dominante: la intensidad del campo eléctrico [[E]] en la región de ionización, que controla la tasa de carga de las partículas y la fuerza de arrastre hacia las placas colectoras.
Límite de validez: el modelo falla para partículas muy pequeñas (menores de 1 μm) que no adquieren carga suficiente, y para gases con alta conductividad que cortocircuitan el campo antes de ionizar las partículas.

## 4. Biosensores de inmunoafinidad basados en campo eléctrico

Los biosensores de efecto de campo (FET biológicos) detectan la presencia de moléculas biológicas midiendo el cambio en el campo eléctrico superficial de un semiconductor. Cuando una proteína o un fragmento de ADN se une a la superficie del sensor, su carga eléctrica altera el campo [[E]] en la interfase semiconductor-fluido. Ese cambio modifica la conductancia del canal semiconductor subyacente, produciendo una señal eléctrica medible.

El principio de funcionamiento depende enteramente de que el campo generado por una sola molécula cargada —con cargas del orden de la carga elemental, es decir, 1.6×10⁻¹⁹ C— sea detectable a la escala nanométrica del canal semiconductor. La sensibilidad del sensor está limitada por el apantallamiento iónico del fluido biológico, que reduce la longitud de Debye a distancias del orden de 1 nm en soluciones fisiológicas. Más allá de esa distancia, el campo de las moléculas queda completamente apantallado.

Variable dominante: el campo eléctrico [[E]] generado por la carga de las moléculas biológicas en la superficie del sensor, que controla el cambio de conductancia del canal semiconductor.
Límite de validez: el modelo falla para moléculas alejadas más de la longitud de Debye del electrolito de la superficie del sensor, y para concentraciones iónicas altas que reducen drásticamente esa longitud de apantallamiento.

## 5. Lentes electrostáticas en microscopios de iones focalizados

Los microscopios de iones focalizados (FIB) utilizan campos eléctricos para enfocar y dirigir haces de iones con precisión subnanométrica sobre superficies. Una lente electrostática consiste en una serie de electrodos cilíndricos a distintos potenciales que generan distribuciones de [[E]] diseñadas para converger las trayectorias iónicas hacia un punto focal, de forma análoga a como una lente óptica converge la luz.

El radio del punto focal depende de la intensidad y la geometría de [[E]] en la región de la lente. Un campo mal calibrado produce aberraciones —el equivalente al desenfoque óptico— que amplían el punto de impacto y reducen la resolución del microscopio. El diseño de las lentes electrostáticas requiere resolver numéricamente la distribución de [[E]] en geometrías tridimensionales complejas, donde la fórmula de carga puntual solo sirve como orientación cualitativa.

Variable dominante: la distribución espacial de [[E]] a lo largo del eje de la lente, que determina la posición focal y la aberración del haz iónico.
Límite de validez: el modelo de carga puntual es inadecuado para describir la lente completa; se requiere resolver las ecuaciones de Laplace con condiciones de contorno reales. El modelo es válido únicamente para estimar el orden de magnitud del campo en tramos pequeños del eje donde la geometría es localmente simple.
`;export{e as default};
