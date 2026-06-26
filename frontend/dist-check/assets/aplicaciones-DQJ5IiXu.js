const e=`## 1. Pintura electrostática industrial

En la fabricación de carrocerías de automóviles y electrodomésticos, la pintura se aplica mediante el proceso electrostático: las partículas de pintura pulverizada se cargan negativamente por efecto corona en la boquilla, mientras la pieza metálica a pintar se mantiene conectada a tierra (con [[q_neta]] prácticamente nula). La diferencia de carga genera un campo eléctrico que dirige las partículas hacia la pieza con alta eficiencia, recubriendo incluso las zonas ocultas gracias a las líneas de campo que rodean el objeto.

La eficiencia del proceso depende directamente de [[q]] que se imprime a cada partícula: una carga mayor significa una fuerza coulombiana mayor y una trayectoria más precisa hacia la superficie. Sin embargo, si [[q]] se eleva demasiado, la repulsión mutua entre las partículas (todas con el mismo signo) disminuye la densidad del chorro y reduce la uniformidad del recubrimiento.

Variable dominante: la carga [[q]] de cada partícula de pintura, que determina la fuerza de atracción hacia la pieza y la eficiencia de deposición.
Límite de validez: el modelo de partícula puntual aislada deja de ser válido cuando la densidad del chorro es tan alta que el campo colectivo de las partículas distorsiona el campo de aplicación, lo que ocurre a densidades superiores a varios millones de partículas por centímetro cúbico.

## 2. Desfibrilador cardíaco

Un desfibrilador externo aplica un impulso de corriente eléctrica al corazón para restaurar el ritmo cuando este entra en fibrilación ventricular. El dispositivo carga un condensador interno hasta una [[q]] determinada (del orden de decenas de microcoulombios a milicoulombios, dependiendo del modelo) y después descarga esa [[q]] en milisegundos a través del pecho del paciente mediante los electrodos.

La cantidad de carga descargada determina la energía entregada al corazón. Una [[q]] insuficiente no genera el campo eléctrico necesario para despolarizar el tejido cardíaco simultáneamente; una [[q]] excesiva puede causar quemaduras en la piel o daño miocárdico. El protocolo médico ajusta [[q]] según el peso del paciente y el tipo de dispositivo, con márgenes estrechos de seguridad.

El concepto de [[q_neta]] también es relevante aquí: la [[q_neta]] total del cuerpo humano es prácticamente cero en todo momento; la descarga del desfibrilador introduce temporalmente un flujo de [[q]] a través del tejido, pero no altera la [[q_neta]] del cuerpo porque la corriente entra por un electrodo y sale por el otro.

Variable dominante: la carga [[q]] almacenada en el condensador del desfibrilador, que determina la energía del impulso entregado al corazón.
Límite de validez: el modelo de carga puntual no aplica aquí; el campo eléctrico dentro del cuerpo humano depende de la geometría de los tejidos y la impedancia biológica. El modelo simple de [[q]] / electrodo es solo una aproximación inicial.

## 3. Sensor de polvo en purificadores de aire electrostáticos

Los purificadores de aire con filtro electrostático funcionan cargando las partículas de polvo suspendidas en el aire mediante una rejilla ionizadora y luego capturándolas en una placa colectora de signo opuesto. El proceso depende de que la [[q]] adquirida por cada partícula de polvo sea suficiente para que la fuerza coulombiana supere la resistencia aerodinámica del flujo de aire.

La eficiencia de captura varía con el tamaño de las partículas: las grandes (mayor de 10 µm) adquieren [[q]] suficiente fácilmente; las ultrafinas (menor de 0.1 µm) adquieren muy poca [[q]] porque su superficie es pequeña. En los modelos de alta eficiencia, el número [[n]] de cargas elementales por partícula se controla ajustando la tensión de la rejilla ionizadora. Un aumento en [[n]] eleva [[q]] linealmente, conforme a la cuantización de la carga.

La [[q_neta]] del aire a la salida del purificador es prácticamente cero: la misma [[q]] que se deposita en el polvo se compensa con iones de signo contrario generados en la descarga de corona.

Variable dominante: la carga [[q]] por partícula de polvo, que determina la fuerza de captura y la eficiencia del filtro.
Límite de validez: el modelo lineal entre [[n]] y la tensión ionizante deja de ser válido cuando la concentración de partículas cargadas es tan alta que el campo iónico se satura, lo que ocurre en ambientes con polvo muy denso.

## 4. Medición de carga en el experimento de la gota de Millikan

El experimento de Millikan (1909) es la demostración experimental directa de la cuantización de la carga. Una gota de aceite ionizada se mantiene en equilibrio entre la gravedad y la fuerza eléctrica de un campo externo. Ajustando el campo hasta que la gota queda en reposo, se puede determinar la [[q]] de la gota a partir del equilibrio de fuerzas.

Millikan midió [[q]] de miles de gotas distintas y comprobó que todos los valores eran múltiplos de un mismo valor mínimo: la carga elemental [[e]]. Determinó así el valor de [[e]] con gran precisión. El número [[n]] de cargas elementales de cada gota se obtenía dividiendo [[q]] entre [[e]] y verificando que el resultado fuera entero.

La clave del experimento es precisamente que [[n]] siempre resulta entero: si la carga fuera continua, [[n]] podría tomar cualquier valor decimal. El hecho empírico de que [[n]] sea siempre entero prueba directamente que la carga está cuantizada en unidades de [[e]].

Variable dominante: la carga [[q]] de la gota de aceite, que determina el equilibrio entre la fuerza gravitatoria y la fuerza eléctrica del campo externo.
Límite de validez: el modelo requiere que la gota sea suficientemente pequeña para que [[n]] sea bajo (menos de unas pocas decenas de cargas) y suficientemente grande para que las fuerzas hidrodinámicas sean despreciables respecto a las eléctricas. Gotas de radio mayor de 3 µm dificultan el control del equilibrio.

## 5. Control de carga en semiconductores y transistores

En los dispositivos electrónicos modernos, el control de [[q]] en regiones de semiconductor de dimensiones nanométricas es la base del funcionamiento del transistor de efecto de campo (MOSFET). Aplicar una tensión en la puerta del transistor induce una acumulación de [[q]] en el canal semiconductorial adyacente, creando o destruyendo un camino conductor entre fuente y drenador.

La [[q]] inducida en el canal determina la conductividad: una [[q]] mayor implica más portadores libres (electrones o huecos) y menor resistencia entre fuente y drenador. Controlar [[q]] mediante la tensión de puerta es controlar el flujo de corriente a través del dispositivo: así funciona la amplificación y la conmutación digital.

En los transistores modernos con canales de apenas pocos nanómetros, [[n]] puede ser tan pequeño que las fluctuaciones cuánticas en el número de portadores (variaciones de un solo electrón) se vuelven significativas y limitan la miniaturización. Este es el régimen donde la cuantización de [[q]] en unidades de [[e]] ya no es un detalle teórico, sino una limitación tecnológica real.

Variable dominante: la carga [[q]] inducida en el canal del transistor por la tensión de puerta, que controla la conductividad y por tanto la corriente de salida.
Límite de validez: el modelo clásico de carga continua en el canal falla cuando el número [[n]] de portadores es tan pequeño que las fluctuaciones de un electrón son comparables al valor medio, lo que ocurre en canales menores de aproximadamente 5 nm con temperaturas de operación estándar.
`;export{e as default};
