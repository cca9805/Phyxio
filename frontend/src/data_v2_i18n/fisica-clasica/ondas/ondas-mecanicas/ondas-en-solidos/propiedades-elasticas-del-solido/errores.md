## Errores conceptuales


### Error 1: Confundir rigidez con resistencia

**Por que parece correcto**

En el lenguaje cotidiano, un material "rigido" se asocia intuitivamente con un material "resistente". Esto lleva al alumno a creer que un modulo de Young alto implica automaticamente que el material soporta mas carga antes de romperse.

**Por que es incorrecto**

La rigidez (modulo de Young) mide cuanto se deforma el material bajo carga, no cuanto aguanta antes de fallar. El vidrio tiene un [[modulo_de_young]] similar al del aluminio (ambos en torno a 70 GPa) pero su resistencia a la fractura es mucho menor. Un material puede ser muy rigido y simultaneamente muy fragil.

**Señal de deteccion**

El alumno afirma que "el acero es mas resistente que el aluminio porque su modulo de Young es mayor", sin considerar la tension de rotura ni la tenacidad.

**Correccion conceptual**

[[modulo_de_young]] describe la pendiente de la curva tension-deformacion en el tramo elastico. La resistencia a la fractura es una propiedad independiente que depende de defectos, microestructura y mecanismo de fallo.

**Mini-ejemplo de contraste**

Una barra de vidrio y una de aluminio tienen [[modulo_de_young]] similar. Al aplicar la misma carga, ambas se deforman practicamente igual. Sin embargo, la barra de vidrio se rompe a una tension mucho menor que la de aluminio. Si la rigidez fuera igual a la resistencia, ambas romperían juntas, lo cual no ocurre.


### Error 2: Creer que el coeficiente de Poisson puede ser cualquier valor

**Por que parece correcto**

Al ser un cociente de deformaciones, el alumno asume que [[nu_poisson]] puede tomar cualquier valor real, como ocurre con un cociente matematico cualquiera.

**Por que es incorrecto**

La estabilidad termodinamica exige que la energia elastica sea definida positiva, lo que restringe [[nu_poisson]] al intervalo entre menos uno y 0.5 para materiales isotropos. Fuera de este rango, el material seria inestable y se deformaria espontaneamente.

**Señal de deteccion**

El alumno obtiene un valor de [[nu_poisson]] superior a 0.5 o inferior a menos uno y no cuestiona el resultado. Alternativamente, al sustituir en la formula de [[modulo_de_compresibilidad]], obtiene un valor negativo y no detecta la incoherencia.

**Correccion conceptual**

Los limites de [[nu_poisson]] son consecuencia de la positividad de [[modulo_de_young]], [[modulo_de_cizalla]] y [[modulo_de_compresibilidad]]. Si [[nu_poisson]] excede 0.5, [[modulo_de_compresibilidad]] se vuelve negativo (material inestable bajo presion). Si [[nu_poisson]] es menor que menos uno, [[modulo_de_cizalla]] se vuelve negativo.

**Mini-ejemplo de contraste**

Si se introduce 0.6 como [[nu_poisson]] en la formula del modulo de compresibilidad, el resultado es un valor negativo: el material se expandiria al aplicar presion. Esto es fisicamente absurdo y senala que el dato es incorrecto.

## Errores de modelo


### Error 3: Aplicar el modelo isotropo a materiales anisotropos

**Por que parece correcto**

El modelo isotropo es el mas sencillo y el que se enseña primero. El alumno tiende a generalizarlo a todos los materiales sin verificar la hipotesis de isotropia.

**Por que es incorrecto**

Materiales como la madera, los composites de fibra de carbono o ciertos cristales tienen propiedades mecanicas que varian fuertemente con la direccion. Usar dos constantes elasticas para estos materiales produce predicciones incorrectas tanto en deformaciones como en velocidades de onda.

**Señal de deteccion**

El alumno calcula [[modulo_de_cizalla]] a partir de [[modulo_de_young]] y [[nu_poisson]] medidos en una direccion y obtiene un valor que difiere notablemente del medido experimentalmente en otra direccion.

**Correccion conceptual**

Antes de usar la relacion entre modulos del isotropo, verificar que el material se comporta de forma isotropa. Si las propiedades dependen de la direccion, se necesitan mas constantes (hasta 21 en el caso general triclinico).

**Mini-ejemplo de contraste**

La madera tiene [[modulo_de_young]] de aproximadamente 12 GPa en la direccion de la fibra pero solo 0.6 GPa perpendicular a ella. Si se usa el valor de 12 GPa con la formula del isotropo para estimar [[modulo_de_cizalla]], se obtiene un valor muy diferente del experimental. El modelo isotropo falla porque la madera es claramente anisotropa.

## Errores matemáticos


### Error 4: Confundir deformacion con desplazamiento

**Por que parece correcto**

Ambas magnitudes se relacionan con "cuanto se mueve" el material y comparten unidades de longitud (en el caso del desplazamiento). El alumno a menudo los usa como sinonimos.

**Por que es incorrecto**

La [[epsilon]] es adimensional (longitud dividida entre longitud original), mientras que el desplazamiento es una magnitud con unidades de longitud. Sustituir un desplazamiento en la formula del modulo de Young en lugar de la deformacion produce un resultado con dimensiones incorrectas.

**Señal de deteccion**

Al calcular [[modulo_de_young]], el resultado tiene unidades de fuerza (N) en lugar de presion (Pa), o bien difiere del valor esperado por varios ordenes de magnitud.

**Correccion conceptual**

La deformacion es siempre el cociente entre el cambio de longitud y la longitud original. Verificar las dimensiones del resultado: [[modulo_de_young]] debe tener unidades de presion `[M L⁻¹ T⁻²]`.

**Mini-ejemplo de contraste**

Una barra de 2 m se alarga 1 mm. Si el alumno usa 0.001 m como deformacion en vez de dividir 0.001 entre 2 (obteniendo 5×10⁻⁴), el modulo de Young calculado difiere del correcto por un factor de 2000, un error que cambia el orden de magnitud por completo.

## Errores de interpretación


### Error 5: Suponer que un material con Poisson alto es siempre blando

**Por que parece correcto**

El caucho tiene [[nu_poisson]] cercano a 0.5 y es blando, lo que sugiere una correlacion entre Poisson alto y baja rigidez.

**Por que es incorrecto**

El coeficiente de Poisson mide el acoplamiento entre deformaciones, no la rigidez absoluta. El oro tiene [[nu_poisson]] de 0.42 y sin embargo es un metal con [[modulo_de_young]] de 79 GPa. La incompresibilidad (Poisson cercano a 0.5) no implica baja rigidez a traccion o cizalla.

**Señal de deteccion**

El alumno afirma que "como [[nu_poisson]] es alto, el material se deforma facilmente" sin especificar el tipo de esfuerzo.

**Correccion conceptual**

[[nu_poisson]] alto indica que el material conserva su volumen al deformarse (se acerca al comportamiento incompresible). La rigidez frente a traccion la da [[modulo_de_young]] y frente a cizalla la da [[modulo_de_cizalla]], que son magnitudes independientes de [[nu_poisson]] en terminos de orden de magnitud.

**Mini-ejemplo de contraste**

El oro tiene [[nu_poisson]] de 0.42 (alto) y [[modulo_de_young]] de 79 GPa. El corcho tiene [[nu_poisson]] cercano a cero (bajo) y [[modulo_de_young]] de apenas unos MPa. El material con Poisson mas bajo es mucho mas blando, contradiciendo la hipotesis de que Poisson alto significa blando.

## Regla de autocontrol rápido

Verificar siempre que los tres modulos elasticos calculados ([[modulo_de_young]], [[modulo_de_cizalla]], [[modulo_de_compresibilidad]]) satisfacen la relacion fundamental del isotropo. Calcular [[modulo_de_cizalla]] a partir de [[modulo_de_young]] y [[nu_poisson]] usando la formula del factor dos y comparar con el valor tabulado. Si la discrepancia supera el 5 %, revisar los datos de entrada y la hipotesis de isotropia.