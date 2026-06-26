const e=`# Aplicaciones

## 1. Afinacion de instrumentos de cuerda

Variable dominante: [[f_n]]

Límite de validez: la lectura ideal funciona mientras la cuerda sea casi uniforme, la amplitud sea pequena y los apoyos se comporten como nodos.

La aplicacion mas visible de una cuerda estacionaria aparece en guitarras, violines, pianos y bajos. La nota que se escucha esta asociada a una frecuencia modal [[f_n]], normalmente al modo fundamental y a una combinacion de armonicos superiores. El interprete cambia la nota de tres formas principales: modifica [[L]] al pisar un traste o acortar la cuerda, modifica [[T]] al ajustar la clavija, o selecciona una cuerda con otra [[mu]].

La utilidad didactica es que el sonido deja de ser una cualidad misteriosa. Una nota mas aguda puede leerse como menor longitud vibrante, mayor tension o menor densidad lineal. El timbre aparece porque no vibra solo un modo: varios modos [[n]] contribuyen con distintas intensidades. El modelo ideal no describe todos los detalles del instrumento, pero si explica por que existen notas privilegiadas y por que la cuerda no responde por igual a todas las frecuencias.

## 2. Montaje de laboratorio con generador de frecuencias

Variable dominante: [[n]]

Límite de validez: la cuerda debe permanecer tensa y la excitacion no debe forzar amplitudes tan grandes que cambien la tension.

En un laboratorio escolar, una cuerda se conecta a un vibrador de frecuencia regulable y pasa por una polea con una masa colgante. Al variar la frecuencia externa, aparecen patrones estacionarios con uno, dos, tres o mas vientres. Cada patron permite identificar [[n]], contar nodos y comprobar que [[lambda_n]] se adapta al tramo [[L]].

El experimento sirve para estimar [[v]] sin medir directamente una onda viajera. Si se conoce el modo y la frecuencia de resonancia, se puede razonar hacia la rapidez de propagacion. Luego esa rapidez se compara con la esperada por [[T]] y [[mu]]. La aplicacion es potente porque une observacion visual, control mecanico y lectura matematica. Tambien muestra por que un valor intermedio de frecuencia puede mover la cuerda pero no producir un patron estable grande.

## 3. Diseno de cuerdas tecnicas y sensores

Variable dominante: [[T]]

Límite de validez: la cuerda debe trabajar dentro del regimen elastico y sin cambios significativos de masa lineal durante la medicion.

Algunos sensores usan cuerdas o fibras tensas cuya frecuencia cambia al variar la tension. Si una carga mecanica aumenta [[T]], la velocidad [[v]] sube y la frecuencia modal [[f_n]] tambien aumenta. Midiendo la frecuencia, el sistema puede inferir cambios de traccion. Esta idea aparece en sensores de fuerza, sistemas de monitorizacion estructural y dispositivos de medida donde una frecuencia se lee con mas precision que una deformacion pequena.

El modelo ideal ayuda a entender la sensibilidad. Una cuerda ligera, con menor [[mu]], responde con frecuencias mas altas; una cuerda larga baja la escala de frecuencia y puede hacer mas facil observar modos bajos. El limite aparece cuando la tension deja de ser uniforme, cuando la cuerda se deforma plasticamente o cuando el soporte se mueve. En esos casos, la frecuencia medida incluye detalles del montaje, no solo la tension que se queria medir.

## 4. Diagnostico de cuerdas desgastadas

Variable dominante: [[mu]]

Límite de validez: la interpretacion supone que la densidad lineal efectiva puede aproximarse por un valor medio estable.

Una cuerda envejecida, oxidada o con suciedad acumulada puede cambiar su masa por unidad de longitud. Aunque el interprete aplique la misma [[T]] y use la misma [[L]], el valor efectivo de [[mu]] puede aumentar localmente. Eso baja [[v]], desplaza [[f_n]] y puede hacer que algunos armonicos queden menos alineados con la serie ideal.

Esta aplicacion explica por que dos cuerdas nominalmente iguales pueden sonar distintas. No basta con mirar la longitud ni la tension; la distribucion de masa tambien importa. Si la variacion de [[mu]] es irregular, el modelo de cuerda uniforme empieza a fallar. Entonces la cuerda puede presentar batidos, perdida de brillo o dificultad de afinacion. La lectura v5 no se queda en "suena mal"; identifica una causa fisica ligada a inercia lineal y modos estacionarios.

## 5. Seguridad en cables vibrantes

Variable dominante: [[L]]

Límite de validez: el modelo es orientativo si el cable es flexible y la rigidez flexional no domina los modos observados.

Cables tensos en puentes, antenas, gruas o tendidos pueden vibrar por viento o por excitaciones periodicas. Aunque no sean cuerdas musicales, comparten una idea: si una frecuencia externa se acerca a una [[f_n]] del tramo, la respuesta puede amplificarse. La longitud libre [[L]], la tension [[T]] y la masa lineal [[mu]] determinan que frecuencias son peligrosas.

En ingenieria, esta lectura ayuda a evitar resonancias indeseadas. Acortar un tramo, cambiar la tension o anadir amortiguamiento desplaza o reduce la respuesta. El modelo de cuerda ideal es solo el primer filtro, porque un cable real puede tener rigidez, peso propio, apoyos complejos y amortiguadores. Aun asi, permite estimar ordenes de magnitud y decidir que frecuencias merece la pena medir con mas detalle.
`;export{e as default};
