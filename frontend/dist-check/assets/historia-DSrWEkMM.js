const e=`## Problema histórico

La velocidad del sonido fue objeto de medición y de controversia teórica durante más de dos siglos. La cuestión no era solo técnica sino filosófica: si el sonido es una perturbación del aire, ¿a qué velocidad se propaga esa perturbación? ¿Puede calcularse a partir de primeros principios, o solo puede medirse?

Las primeras mediciones sistemáticas de [[v_son]] en aire se realizaron en el siglo XVII utilizando el desfase entre el fogonazo de un cañón y el trueno del disparo, observados desde distancias conocidas. En 1656, Giovanni Alfonso Borelli y Vincenzo Viviani obtuvieron valores de [[v_son]] cercanos a 350 m/s, notablemente próximos al valor actual. Mersenne había obtenido valores similares décadas antes.

El problema teórico era más difícil que el experimental: ¿cómo derivar [[v_son]] a partir de las propiedades del aire? Isaac Newton abordó esta cuestión en los Principia Mathematica (1687) y obtuvo la primera expresión teórica para [[v_son]]. Su resultado era ~18 % menor que el experimental, y durante más de un siglo la discrepancia quedó sin resolver satisfactoriamente.

## Dificultad conceptual previa

Newton calculo [[v_son]] asumiendo que las compresiones y rarefacciones acusticas ocurrian de forma **isotermica**: el aire comprimido cedia inmediatamente su calor al entorno y se mantenia a temperatura constante. Con esta hipotesis, el modulo de elasticidad del aire era simplemente la presion de equilibrio, y su prediccion quedaba demasiado baja.

Para el aire a 0 °C y 1 atm, esto da aproximadamente 280 m/s, mientras que las mediciones daban ~331 m/s. Newton era consciente de la discrepancia pero no encontró una explicación satisfactoria. Propuso correcciones ad hoc (considerando el volumen propio de las partículas de aire) que no convencían plenamente.

La dificultad conceptual de fondo era que Newton no disponía de la termodinámica como ciencia formal. La distinción entre procesos isotérmicos y adiabáticos no existía como categoría teórica en 1687. Sin esa distinción, era imposible identificar la causa del error.

## Qué cambió

Pierre-Simon Laplace resolvió la discrepancia en 1816, en un artículo breve en los Annales de Chimie et de Physique. Su argumento fue elegante: las compresiones acústicas son tan rápidas que no hay tiempo para que el calor fluya entre las regiones comprimidas y las rarefactadas. El proceso no es isotérmico sino **adiabático**. Para un proceso adiabático, el módulo de compresibilidad del gas no es P sino [[gamma_gas]] × P, donde [[gamma_gas]] es la razón de calores específicos (cp/cv).

Con esta correccion, el modulo correcto incluye el factor [[gamma_gas]]. Para el aire, ese factor eleva la prediccion de 280 m/s a 331 m/s, en perfecto acuerdo con los experimentos. La correccion de Laplace es historicamente notable por varias razones: fue conceptualmente simple pero habia requerido mas de un siglo para ser formulada; establecio que las ondas acusticas son fenomenos adiabaticos; y anticipo la importancia de [[gamma_gas]] como parametro central de la termodinamica de gases.

## Impacto en la física

La resolución del problema de Newton-Laplace tuvo un impacto que va mucho más allá de la acústica. La identificación de las compresiones acústicas como adiabáticas fue uno de los primeros ejemplos de un proceso termodinámico bien definido con una consecuencia experimental cuantitativa. Esto contribuyó al desarrollo formal de la termodinámica en las décadas siguientes.

La distinción entre módulos isotérmico y adiabático introdujo en la física la idea de que las propiedades macroscópicas de un material dependen de la velocidad del proceso: bajo condiciones lentas (isotérmicas) y condiciones rápidas (adiabáticas), el mismo material tiene diferente respuesta elástica. Este principio es fundamental en la física de materiales, la reología y la mecánica de fluidos.

La medición precisa de [[v_son]] se convirtió en un método para determinar [[gamma_gas]] experimentalmente, lo que a su vez permitió verificar las predicciones de la teoría cinética de los gases (Clausius, Maxwell, Boltzmann) sobre los grados de libertad moleculares. La medición de [[v_son]] en distintos gases y el ajuste de los valores de [[gamma_gas]] obtenidos proporcionaron evidencia directa de la estructura molecular de los gases.

## Conexión con física moderna

La velocidad del sonido como concepto se generaliza en la física moderna a otros contextos. En cosmología, la velocidad del sonido en el plasma primordial (mezcla de fotones y bariones antes de la recombinación) determinó la escala de las oscilaciones acústicas del barión, que se observan hoy como el pico acústico en el espectro de potencias de las fluctuaciones de temperatura del fondo cósmico de microondas. La posición de ese pico depende del tamaño del horizonte acústico en el momento de la recombinación, que es directamente la velocidad del sonido multiplicada por el tiempo de recombinación.

En física de partículas y de la materia condensada, la velocidad del sonido en el quark-gluon plasma (estado de la materia a temperaturas extremas en colisiones de iones pesados) es un observable clave que caracteriza las propiedades del plasma. La física del sonido de Newton y Laplace, originada en la acústica musical y meteorológica del siglo XVII, conecta directamente con los observables de la física de altas energías del siglo XXI.
`;export{e as default};
