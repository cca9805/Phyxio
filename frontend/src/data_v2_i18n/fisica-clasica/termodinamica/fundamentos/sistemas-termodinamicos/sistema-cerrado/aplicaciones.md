## 1. Motor de pistón de combustión interna en ciclo Otto

En un motor de gasolina de cuatro tiempos, la mezcla aire-combustible dentro del cilindro constituye un sistema cerrado durante las carreras de compresión y expansión: las válvulas están cerradas y no hay flujo de masa a través de la frontera. El pistón realiza trabajo sobre la mezcla en la carrera de compresión (W positivo en convención IUPAC, el entorno comprime el sistema) y la mezcla empuja el pistón en la carrera de expansión (W negativo, el sistema realiza trabajo sobre el entorno). La carrera de compresión es aproximadamente adiabática porque ocurre en milisegundos, demasiado rápido para un intercambio significativo de calor. La carrera de expansión también es aproximadamente adiabática, mientras que la combustión ocurre con un intercambio de [[Q]] positivo intenso y breve.

El análisis energético de cada carrera usa directamente el primer principio: [[DeltaU]] igual a [[Q]] más [[W]]. La eficiencia del ciclo se determina comparando el trabajo neto producido (la diferencia entre el trabajo de expansión y el de compresión) con el calor total suministrado por la combustión.

Variable dominante: variación de energía interna [[DeltaU]] de la mezcla en cada carrera, que determina la temperatura y presión del gas y, por tanto, la fuerza sobre el pistón.
Límite de validez: el modelo de sistema cerrado adiabático es válido mientras las válvulas estén cerradas y el tiempo del proceso sea inferior al tiempo de relajación térmica del cilindro, típicamente menor de 50 más para motores a régimen normal.

## 2. Calorímetro de bomba para medida de entalpía de combustión

El calorímetro de bomba es un recipiente de acero inoxidable de alta resistencia, completamente cerrado y sumergido en un baño de agua a temperatura controlada. Una muestra de combustible se enciende dentro del recipiente por un filamento eléctrico y se quema a volumen constante (proceso isocórico). La frontera del sistema (la bomba) es impermeable a la materia y rígida: el trabajo de presión-volumen es nulo, de modo que [[DeltaU]] es igual a [[Q]].

El calor liberado por la combustión se mide indirectamente mediante el aumento de temperatura del agua del baño circundante. Conocida la capacidad calorífica del calorímetro, la variación de temperatura permite calcular [[Q]] con precisión del orden del 0.1 %. Esta es la aplicación más directa del primer principio al sistema cerrado isocórico: cuando no hay trabajo, todo el cambio de energía interna es calor.

Variable dominante: calor [[Q]] liberado por la reacción a volumen constante, directamente igual a [[DeltaU]] del sistema cerrado isocórico.
Límite de validez: el modelo es válido cuando las pérdidas de calor del calorímetro al entorno son inferiores al 0.5 % del calor total liberado, lo que requiere tiempos de medida inferiores a 30 minutos en calorímetros bien aislados.

## 3. Batería de ión-litio durante la carga y descarga

Una celda electroquímica de ión-litio es un sistema cerrado: los electrodos, el electrolito y la carcasa forman una unidad sellada que no intercambia materia con el entorno durante su vida útil normal. La frontera transmite calor (las baterías se calientan y enfrían con el entorno) y trabajo eléctrico (la corriente eléctrica es un mecanismo de trabajo, no de calor). El primer principio establece que [[DeltaU]] de la celda es igual al calor [[Q]] intercambiado con el entorno más el trabajo eléctrico [[W]] recibido o cedido.

Durante la carga, el trabajo eléctrico suministrado por el cargador aumenta la energía interna almacenada en forma de energía química ([[DeltaU]] positivo, [[W]] positivo, [[Q]] generalmente negativo porque la celda cede calor al entorno). Durante la descarga, la energía química almacenada se convierte en trabajo eléctrico ([[DeltaU]] negativo, [[W]] negativo). La diferencia entre la energía cargada y la descargada, expresada como [[Q]] cedido al entorno, es la pérdida por irreversibilidad (efecto Joule en la resistencia interna).

Variable dominante: variación de energía interna [[DeltaU]] almacenada como energía química, que determina el estado de carga y la capacidad disponible de la batería.
Límite de validez: el modelo de sistema cerrado es válido durante toda la vida útil de la batería en condiciones normales; deja de ser válido cuando la degradación de los electrodos genera gases que escapan o cuando hay pérdida de electrolito por evaporación a través de la carcasa, convirtiendo la frontera en permeable a la materia.

## 4. Proceso de esterilización en autoclave

Un autoclave es un recipiente de acero de pared gruesa que contiene agua y el material a esterilizar. Una vez cerrado y sellado, constituye un sistema cerrado: la frontera es impermeable a la materia (el vapor no escapa) y transmite calor (la resistencia eléctrica o el vapor externo calienta el sistema). El proceso consiste en aumentar la temperatura interna por encima de 121 °C mediante la presurización con vapor de agua generado internamente.

El primer principio establece que el calor [[Q]] suministrado por la resistencia aumenta la energía interna [[DeltaU]] del sistema (agua más vapor más el material a esterilizar). El trabajo de expansión de la fase vapor contra las paredes del recipiente es nulo porque el recipiente es rígido, de modo que [[DeltaU]] es igual a [[Q]]. La temperatura y presión de equilibrio del vapor dentro del sistema cerrado son las que determinan la eficacia de la esterilización.

Variable dominante: calor [[Q]] suministrado a volumen constante, que determina la temperatura y presión alcanzadas dentro del autoclave sellado.
Límite de validez: el modelo de sistema cerrado isocórico es válido mientras el recipiente permanezca sellado y el volumen total no cambie significativamente; deja de ser válido si la válvula de seguridad se abre (convirtiendo el sistema en abierto con flujo de masa de vapor hacia el exterior).

## 5. Celda solar fotovoltaica bajo iluminación variable

Una celda solar de silicio puede modelarse como un sistema cerrado durante su funcionamiento: la frontera es impermeable a la materia (los electrones circulan internamente, no se emiten) y transmite dos formas de energía: la radiación electromagnética entrante (que actúa como la forma de trabajo equivalente a la iluminación) y el calor cedido al ambiente por convección y radiación infrarroja. El trabajo eléctrico útil producido fluye a través de los terminales hacia el circuito exterior.

El primer principio establece que [[DeltaU]] de la celda es igual a la energía radiativa absorbida (que actúa como [[Q]] entrante) menos el calor cedido al entorno (que actúa como [[Q]] saliente) más el trabajo eléctrico producido ([[W]] negativo en convención IUPAC, el sistema realiza trabajo sobre el circuito). En condiciones estacionarias, [[DeltaU]] es nulo y toda la energía radiativa absorbida se convierte en calor cedido más trabajo eléctrico útil. La eficiencia de conversión es la fracción de la energía radiativa absorbida que se convierte en trabajo eléctrico.

Variable dominante: calor [[Q]] absorbido de la radiación solar, que determina la corriente fotoeléctrica generada y, junto con el trabajo eléctrico extraído, el balance energético de la celda.
Límite de validez: el modelo de sistema cerrado en estado estacionario es válido cuando la temperatura de la celda es estable (lo que ocurre típicamente en los primeros minutos tras el inicio de la iluminación); durante el transitorio de calentamiento inicial, [[DeltaU]] es positivo y el balance energético cambia hasta que se alcanza el equilibrio térmico con el entorno.
