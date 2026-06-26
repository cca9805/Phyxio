const e=`# Aplicaciones de la diferencia de potencial

## 1. Desfibriladores cardíacos

Los desfibriladores utilizan una diferencia de potencial para descargar un condensador a través del corazón con el objetivo de restaurar el ritmo cardíaco normal. El condensador se carga a una diferencia de potencial de entre 200 V y 1000 V y se descarga en milisegundos a través de dos electrodos colocados en el tórax del paciente.

La energía almacenada en el condensador depende directamente de [[V_AB]]: a mayor diferencia de potencial, mayor energía disponible para la descarga. Los médicos ajustan la diferencia de potencial del choque en función del peso del paciente y del tipo de arritmia. Una diferencia de potencial insuficiente no restaura el ritmo; una excesiva puede dañar el tejido cardíaco. En un desfibrilador típico de 360 J, la diferencia de potencial puede superar los 2 kV, y la carga total descargada es del orden de centenas de milicoulombios.

Variable dominante: la diferencia de potencial entre los electrodos, que determina la energía total del pulso y la eficacia del tratamiento.
Límite de validez: el modelo de condensador plano es válido para la fase de acumulación; la descarga a través del tejido biológico introduce resistencias no lineales que modifican la forma real del pulso.

## 2. Electrofisiología y potencial de membrana

La electrofisiología mide diferencias de potencial eléctrico generadas por tejidos biológicos activos. El potencial de acción de una neurona genera una diferencia de potencial de aproximadamente 70 mV entre el interior y el exterior de la membrana celular en reposo, con variaciones de hasta 100 mV adicionales durante el impulso nervioso.

Estos valores pequeños de [[V_AB]] son suficientes para activar los canales iónicos de la membrana, que permiten el flujo de iones Na⁺ y K⁺. La membrana celular tiene un espesor de unos 7 nm, de modo que el campo eléctrico dentro de ella alcanza el orden de 10⁷ N/C, un valor extraordinariamente intenso a escala molecular aunque [[V_AB]] sea mínima. Esta relación entre [[V_AB]] y [[d_AB]] revela por qué la biología opera con voltajes bajos pero campos muy altos.

Variable dominante: la diferencia de potencial de membrana, que controla la apertura de los canales iónicos y la propagación del impulso nervioso.
Límite de validez: el modelo de campo uniforme entre las dos caras de la membrana es válido para estimaciones de orden de magnitud; la estructura molecular real del canal iónico requiere modelos de mecánica cuántica.

## 3. Aceleración de partículas en tubos de vacío

Los aceleradores de partículas utilizan diferencias de potencial para transferir energía cinética a iones y electrones. En un tubo de rayos X, los electrones son acelerados por diferencias de potencial de decenas a centenas de kilovoltios. La energía cinética adquirida determina la longitud de onda de los rayos X emitidos al frenar los electrones en el ánodo.

La relación entre [[W_AB]], [[q]] y [[V_AB]] convierte directamente la diferencia de potencial en energía de la partícula: una diferencia de potencial de 1 kV aplicada a un electrón le confiere 1 keV de energía cinética, equivalente a 1.6×10⁻¹⁶ J. Los aceleradores modernos encadenan múltiples etapas de aceleración, cada una contribuyendo con su [[V_AB]] a la energía total. La velocidad final crece como la raíz cuadrada de [[V_AB]], lo que explica la necesidad de megavoltios para alcanzar velocidades relativistas.

Variable dominante: la diferencia de potencial total acumulada a lo largo del acelerador, que determina la energía cinética y la velocidad del haz.
Límite de validez: el modelo clásico de aceleración mediante [[V_AB]] es válido para energías inferiores a 511 keV; por encima, la relatividad especial corrige significativamente la relación entre [[V_AB]] y la velocidad adquirida.

## 4. Sensores de efecto Hall

El efecto Hall genera una diferencia de potencial transversal [[V_AB]] cuando una corriente eléctrica fluye por un conductor o semiconductor en presencia de un campo magnético perpendicular. Esta diferencia de potencial, llamada voltaje Hall, es proporcional al campo magnético y a la corriente, e inversamente proporcional a la densidad de portadores de carga del material.

Los sensores Hall miden campos magnéticos con alta precisión midiendo [[V_AB]] en el material semiconductor. Se usan en codificadores de posición angular en motores y robótica, en detectores de velocidad de ruedas en sistemas ABS de automóviles, y en instrumentos de medida de corriente continua sin interrumpir el circuito. La ventaja clave es que [[V_AB]] Hall puede medirse con precisión submilimétrica sin contacto mecánico con el objeto en movimiento.

Variable dominante: la diferencia de potencial Hall transversal, que es proporcional al campo magnético que se quiere medir y a la corriente de trabajo.
Límite de validez: el modelo lineal de [[V_AB]] Hall es válido para campos magnéticos por debajo de la saturación magnética del material y temperaturas de operación en las que la densidad de portadores no varía significativamente.

## 5. Condensadores y almacenamiento de energía pulsada

Los condensadores son los dispositivos más directamente asociados con la diferencia de potencial en ingeniería eléctrica. La energía almacenada en un condensador crece con el cuadrado de [[V_AB]] entre sus armaduras, lo que hace que duplicar la diferencia de potencial cuadruplique la energía almacenada. El campo eléctrico entre las placas se obtiene dividiendo [[V_AB]] entre la separación [[d_AB]].

En electrónica de potencia, los condensadores de alta tensión almacenan energía que se libera en pulsos cortos: flashes fotográficos, láseres pulsados y fuentes de alimentación conmutadas. El diseño requiere equilibrar la diferencia de potencial máxima admisible con la rigidez dieléctrica del material entre las placas. Superar el umbral de ruptura dieléctrica del material provoca el fallo catastrófico del componente, con arcos eléctricos y destrucción irreversible del dieléctrico.

Variable dominante: la diferencia de potencial entre las placas, que controla tanto la energía almacenada como el campo eléctrico interno y el riesgo de ruptura dieléctrica.
Límite de validez: el modelo de campo uniforme entre placas es válido para condensadores con relación anchura/separación superior a 10; para condensadores miniaturizados o de formas irregulares, el campo real puede superar localmente el campo nominal obtenido dividiendo la diferencia de potencial entre la separación de placas.
`;export{e as default};
