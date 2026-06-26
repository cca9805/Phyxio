const e=`# Propiedades elasticas del solido

## Contexto conceptual

Un solido elastico no solo ocupa espacio: tambien almacena energia cuando se deforma y la devuelve cuando cesa la accion externa. Esa capacidad permite que una perturbacion mecanica viaje por el material como onda. Las propiedades elasticas describen cuanta deformacion aparece ante una accion dada y que tipo de forma intenta recuperar el medio.

El punto clave es distinguir tres respuestas fisicas: estirar o comprimir una barra, cambiar la forma por corte y comprimir el volumen entero. En un material isotropo esas respuestas no son independientes sin limite; estan conectadas por la simetria del material y por la estabilidad energetica.

## 🟢 Nivel esencial

La idea esencial es que la rigidez no es una palabra unica. Un solido puede resistir mucho una traccion, resistir menos una cizalla y aun asi ser dificil de comprimir volumetricamente. Por eso se introducen varios parametros elasticos, cada uno asociado a una forma distinta de deformar el mismo material.

[[E_young]] mide la respuesta ante estiramiento o compresion en una direccion. [[G_shear]] mide la respuesta ante cambio de forma, sin necesidad de cambiar mucho el volumen. [[K_bulk]] mide la resistencia a reducir o aumentar el volumen bajo presion uniforme. [[nu_poisson]] describe la contraccion lateral que acompaña a un alargamiento longitudinal.

Esta separacion evita una confusion frecuente: un material no es "rigido" de una sola manera. El caucho puede ser dificil de comprimir y, al mismo tiempo, facil de deformar por corte. Un metal puede resistir bien tanto traccion como cizalla. Un fluido puede resistir compresion, pero no sostener una cizalla elastica de volumen. Esa diferencia explica por que las ondas transversales necesitan solidos.

En este nivel no hace falta calcular. Basta leer que cada constante responde a una pregunta fisica distinta: cuanto se alarga, cuanto cambia de forma, cuanto cambia de volumen y cuanto se estrecha lateralmente. Esa lectura cualitativa prepara el uso formal de las ecuaciones.

## 🔵 Nivel formal

En el regimen lineal, cada modulo se define como cociente entre una accion mecanica y la deformacion que produce. La ley para traccion uniaxial es:

{{f:modulo_young}}

La relacion de cizalla usa esfuerzo tangencial y deformacion angular:

{{f:modulo_cizalla}}

La compresion uniforme se describe con el modulo volumetrico:

{{f:modulo_compresibilidad}}

La contraccion lateral relativa se resume con el coeficiente de Poisson:

{{f:relacion_poisson}}

En un solido isotropo, conocer dos constantes elasticas basta para reconstruir las demas. Una relacion especialmente usada es:

{{f:relacion_E_G_nu}}

Aqui aparecen las variables de trabajo: [[sigma]] y [[epsilon]] para traccion, [[tau]] y [[gamma]] para cizalla, [[DeltaP]] y [[DeltaV_rel]] para compresion volumetrica, y [[epsilon_long]] junto con deformaciones transversales para Poisson. Todas estas magnitudes deben expresarse de forma coherente: los esfuerzos y modulos en pascales, las deformaciones como cocientes adimensionales y los signos segun la convencion del problema.

La estructura algebraica tambien impone restricciones. Los modulos que almacenan energia elastica deben ser positivos. El valor de Poisson no puede elegirse arbitrariamente, porque si se fuerza fuera del intervalo fisico el material no tendria energia elastica estable. Esta condicion no es decorativa: evita resultados imposibles al convertir entre modulos.

## 🔴 Nivel estructural

La razon profunda de estas relaciones es la descomposicion del esfuerzo y la deformacion en partes volumetricas y desviadoras. La parte volumetrica cambia el tamaño del elemento material; la parte desviadora cambia su forma. [[K_bulk]] gobierna la primera y [[G_shear]] gobierna la segunda. [[E_young]] mezcla ambas porque una traccion uniaxial estira en una direccion y contrae en las otras.

Esta estructura conecta elasticidad con ondas. Una onda longitudinal comprime y dilata el medio, por lo que percibe una combinacion de resistencia volumetrica y de corte. Una onda transversal cambia la forma sin comprimir de manera dominante, por lo que depende de la rigidez de cizalla. Por eso los fluidos ideales pueden transmitir ondas de presion, pero no ondas transversales elasticas de volumen.

En materiales anisotropos la historia cambia. Las constantes ya no se reducen a dos parametros independientes, y la direccion de propagacion importa. En materiales viscoelasticos, los modulos dependen de la frecuencia y pueden tener parte disipativa. En plasticidad, la relacion lineal deja de describir el proceso porque la deformacion no se recupera completamente.

## Interpretación física profunda

Los modulos elasticos son una forma de leer energia almacenada. Una deformacion pequeña modifica la energia interna del material; la derivada de esa energia produce esfuerzo. Si el material necesita mucha energia para una deformacion pequeña, el modulo correspondiente es grande. Si necesita poca energia, el modulo es pequeño.

Esta lectura explica por que la estabilidad exige positividad. Si una deformacion redujera la energia sin limite, el estado inicial no seria estable y el material se deformaria espontaneamente. Las desigualdades entre modulos, por tanto, son condiciones fisicas antes que trucos algebraicos.

## Orden de magnitud

En metales, [[E_young]] suele estar entre decenas y cientos de gigapascales. En polimeros blandos puede caer a megapascales. [[G_shear]] suele ser menor que el modulo de Young, pero del mismo orden en muchos solidos. [[K_bulk]] puede ser muy alto en materiales casi incompresibles, incluso si se deforman facilmente por corte.

Un control rapido consiste en preguntar si el resultado parece propio de un solido real. Un modulo de acero en pascales debe rondar 10 elevado a 11; un valor cercano a 200 sin unidades probablemente esta en gigapascales y no debe introducirse directamente en una formula SI.

## Método de resolución personalizado

Primero identifica el tipo de accion mecanica: normal, tangencial, hidrostatica o acoplamiento lateral. Segundo, elige el modulo que responde a esa accion. Tercero, convierte unidades y usa deformaciones como cocientes, no como porcentajes escritos sin convertir. Cuarto, comprueba si el material puede tratarse como isotropo y lineal.

Si el problema combina dos modulos, usa la relacion isotropa solo si el enunciado permite esa hipotesis. Si aparece una onda transversal, revisa especialmente la rigidez de corte. Si aparece compresion uniforme o velocidad longitudinal, revisa la contribucion volumetrica.

## Casos especiales y ejemplo extendido

Un caucho idealizado cerca de incomprensibilidad puede tener Poisson cercano a 0.5: cambia mucho de forma, pero casi no cambia de volumen. Un corcho puede tener Poisson pequeño porque su estructura porosa permite deformaciones laterales distintas. Un material auxetico tiene Poisson negativo: al estirarse, se ensancha lateralmente en lugar de estrecharse.

En un ensayo de ultrasonidos, medir velocidades longitudinales y transversales permite estimar constantes elasticas sin destruir la pieza. La lectura es potente, pero depende de que el material sea aproximadamente homogeneo, isotropo y lineal en la escala de la longitud de onda.

## Preguntas reales del alumno

¿Por que hay tantos modulos si todos miden rigidez? Porque cada modulo responde a una forma distinta de deformar. Estirar, cortar y comprimir volumen no son la misma operacion fisica.

¿Por que dos constantes bastan en un isotropo? Porque la simetria elimina direcciones privilegiadas. Una vez fijadas dos respuestas independientes, las demas quedan obligadas por la geometria de deformacion y por la estabilidad.

## Conexiones transversales y rutas de estudio

Este tema conecta ley de Hooke, ondas en solidos, sismologia, ultrasonidos y resistencia de materiales. Tambien prepara la lectura tensorial de esfuerzo y deformacion, donde los modulos dejan de ser una lista de nombres y pasan a formar una ley constitutiva.

## Síntesis final

Las propiedades elasticas del solido organizan la relacion entre esfuerzo, deformacion y energia almacenada. La clave didactica es no saturar la idea de rigidez: primero se distingue que tipo de deformacion se observa; despues se aplica el modulo y la relacion formal adecuados.
`;export{e as default};
