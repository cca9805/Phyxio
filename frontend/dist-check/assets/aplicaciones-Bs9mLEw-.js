const e=`# Aplicaciones del campo de distribuciones continuas

## 1. Cables de alta tensión y zona de seguridad eléctrica

Las líneas de transmisión eléctrica de alta tensión se modelan como hilos con densidad lineal [[lambda]] proporcional a la carga superficial acumulada en el conductor. El campo [[E]] radial alrededor del cable determina la distancia mínima de seguridad para operarios y equipos, el diseño del aislante que rodea el conductor, y la aparición del efecto corona cuando [[E]] supera la rigidez dieléctrica del aire.

El cálculo de la zona de seguridad se reduce a despejar [[r_dist]] de la fórmula del hilo infinito para [[E]] igual al límite normativo. Esta distancia es directamente proporcional a [[lambda]], por lo que un cable con el doble de carga requiere el doble de zona de exclusión. Los reglamentos de instalaciones eléctricas de alta tensión usan exactamente este modelo para fijar distancias mínimas a edificios y vías de comunicación.

Variable dominante: densidad lineal [[lambda]] del conductor, que controla la amplitud del campo [[E]] a cualquier distancia radial.
Límite de validez: el modelo de hilo infinito es válido cuando la distancia de observación es mucho menor que la longitud del tramo de línea analizado; cerca de las torres de sujeción o terminaciones, el campo se deforma y requiere integración directa para geometría finita.

## 2. Condensador de placas paralelas y almacenamiento de energía

Dos planos infinitos paralelos con densidades superficiales +[[sigma]] y −[[sigma]] producen un campo uniforme entre las placas por superposición de sus campos individuales. El campo entre las placas es doble del de un único plano, mientras que fuera de las placas los dos campos se cancelan. Esta configuración es la base de todos los condensadores de placas paralelas: desde los microfáradreos de electrónica de consumo hasta los kilovoltios de los condensadores de potencia en instalaciones industriales.

La uniformidad del campo entre las placas es precisamente lo que hace útil al condensador: garantiza que toda la energía almacenada está concentrada entre las placas y que la fuerza sobre cualquier carga de prueba entre ellas es la misma. [[sigma]] controla directamente la densidad de energía almacenada y la tensión que puede soportar el dieléctrico antes de la ruptura.

Variable dominante: densidad superficial [[sigma]] en las placas, que controla tanto el campo [[E]] entre ellas como la energía almacenada por unidad de área.
Límite de validez: el modelo de plano infinito es válido cuando la separación entre placas es mucho menor que las dimensiones de las placas; en los bordes del condensador el campo se "derrama" hacia afuera (fringing field) y el modelo ideal deja de ser preciso.

## 3. Electrodos de aceleración en aceleradores lineales de partículas

En los tramos de aceleración lineal (linacs), dos electrodos planos paralelos separados por una tensión elevada generan un campo [[E]] uniforme y perpendicular a las placas. Las partículas cargadas que cruzan el espacio entre electrodos reciben un impulso energético proporcional al campo por la longitud de la cavidad. La uniformidad del campo garantiza que todas las partículas del haz reciben exactamente la misma energía cinética adicional por cada tramo de aceleración.

El diseño de los electrodos se optimiza para que [[sigma]] sea uniforme sobre la mayor área posible y para que los efectos de borde sean despreciables dentro del volumen útil del haz. Los linacs modernos de física de altas energías encadenan cientos de estas cavidades, y el control preciso de [[sigma]] en cada una determina la energía final del haz.

Variable dominante: densidad superficial [[sigma]] en los electrodos, que controla la energía ganada por partícula por cavidad de aceleración.
Límite de validez: el modelo de plano infinito para el campo entre electrodos es válido cuando el radio de apertura del haz es mucho menor que el radio de los electrodos; la distorsión del campo en los bordes puede causar defocalización del haz en configuraciones compactas.

## 4. Deflectores electrostáticos en instrumentos de medida

Los deflectores de haz de electrones en osciloscopios analógicos, espectrómetros de masas y monitores CRT usan pares de placas paralelas para desviar el haz en la dirección deseada. El ángulo de deflexión es proporcional al campo [[E]] entre las placas y a la longitud de los deflectores, e inversamente proporcional a la energía cinética de las partículas. [[sigma]] determina directamente el campo y, por tanto, la sensibilidad de deflexión por unidad de tensión aplicada.

El diseño de los deflectores requiere maximizar [[sigma]] para lograr deflexiones grandes con tensiones moderadas, al tiempo que se minimizan los efectos de borde que distorsionarían la trayectoria del haz. En los tubos de rayos catódicos de alta resolución, los deflectores están compensados geométricamente para que el campo sea uniforme en la zona que atraviesa el haz.

Variable dominante: densidad superficial [[sigma]] en las placas deflectoras, que determina el campo [[E]] y el ángulo de deflexión del haz.
Límite de validez: el modelo de campo uniforme entre placas infinitas falla cuando la energía cinética del haz es baja o cuando la longitud de los deflectores es comparable a la separación entre placas; en esos casos los efectos de borde afectan apreciablemente a la trayectoria.

## 5. Medidores de campo eléctrico atmosférico (molinillos de campo)

Los sensores de campo eléctrico atmosférico (field mills) usan un electrodo plano cubierto y descubierto alternadamente por un rotor conductor conectado a tierra. Cuando el electrodo está expuesto al campo atmosférico, la carga inducida sobre él es proporcional a [[sigma]] atmosférica local. Midiendo la corriente de inducción generada por la alternancia de exposición y apantallamiento, el instrumento cuantifica [[E]] con una precisión de pocos voltios por metro.

Estos instrumentos detectan el campo [[E]] generado por las distribuciones de carga en las nubes de tormenta — distribuciones que se modelan como placas con [[sigma]] efectiva — y alertan de condiciones de riesgo de rayo con antelación de varios minutos. En aeropuertos y lanzaderas espaciales, la monitorización continua del campo atmosférico mediante estos sensores es un elemento de seguridad operacional imprescindible.

Variable dominante: densidad superficial [[sigma]] de las nubes de tormenta, que determina el campo [[E]] en superficie y el nivel de riesgo de descarga eléctrica.
Límite de validez: el modelo de plano con [[sigma]] uniforme para la nube es una aproximación; nubes de forma irregular o con distribución de carga no uniforme generan un campo con variaciones espaciales que el modelo plano no captura con precisión.
`;export{e as default};
