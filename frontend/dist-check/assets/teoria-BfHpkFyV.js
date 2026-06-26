const e=`# Relacion entre modulos elasticos

## Contexto conceptual

Un solido isotropo tiene la misma respuesta mecanica en todas las direcciones. Esa simetria impone que toda su elasticidad quede descrita por exactamente dos constantes independientes. Cualquier par basta: E y nu, G y K, lambda y G, o incluso K y nu. Todas las demas constantes se deducen algebraicamente de las dos elegidas. Este leaf se ocupa precisamente de esas relaciones algebraicas: como pasar de un par de constantes a cualquier otro, que significan fisicamente los cruces y limites, y por que la eleccion del par afecta a la intuicion y a la modelizacion.

El hecho de que solo haya dos constantes independientes no es trivial. Significa que medir, por ejemplo, el modulo de Young y el coeficiente de Poisson en un ensayo de traccion es suficiente para predecir el modulo de cizalla y el modulo de compresibilidad del mismo material, sin necesidad de realizar esos ensayos adicionales. Tambien implica que las velocidades de onda P y S en el material estan completamente determinadas por E y nu (mas la densidad), lo que conecta las relaciones de este leaf directamente con la propagacion de ondas en solidos.

## 🟢 Nivel esencial

La idea central es que un material isotropo no puede tener valores arbitrarios e independientes de E, G y K. Si se conoce E y nu, los otros dos quedan fijados. Esto ocurre porque la respuesta a traccion, la respuesta a cizalla y la respuesta a compresion volumetrica no son mecanismos independientes en un medio donde todas las direcciones son equivalentes.

El [[nu_poisson]] es el parametro que gobierna la particion entre los distintos modulos. Un material con [[nu_poisson]] cercano a cero reparte su rigidez de forma equilibrada entre cizalla y compresion. Un material con [[nu_poisson]] cercano a 0.5 es casi incompresible: [[K_bulk]] se dispara mientras [[G_shear]] se reduce a una fraccion pequeña de [[E_young]].

En el extremo opuesto, un material auxetico con [[nu_poisson]] negativo se expande lateralmente al estirarse. En ese caso [[G_shear]] supera a [[E_young]]/2 y [[K_bulk]] puede ser menor que [[E_young]]/3.

Las relaciones mas usadas en la practica son las que conectan [[G_shear]] y [[K_bulk]] con [[E_young]] y [[nu_poisson]]. Son las herramientas fundamentales para convertir datos de un ensayo de traccion en la descripcion completa del material, pero su forma algebraica se reserva para el nivel formal.

## 🔵 Nivel formal

Las relaciones entre modulos se deducen de la ley de Hooke generalizada para medios isotropos, que en notacion tensorial expresa el tensor de tensiones como una combinacion lineal del tensor de deformaciones y su traza. Los dos coeficientes de esa combinacion son los parametros de Lame: [[lambda_lame]] y G (que tambien se llama mu).

Desde los parametros de Lame se definen E, K y nu:

{{f:relacion_G_E_nu}}

{{f:relacion_K_E_nu}}

{{f:relacion_G_K_nu}}

{{f:relacion_E_G_K}}

{{f:relacion_lambda_E_nu}}

La relacion entre G, K y E sin nu es particularmente util:

{{f:relacion_E_G_K}}

Esta ecuacion muestra que E es una especie de media armonica ponderada de G y K. Si G es mucho menor que K (material casi incompresible), E se aproxima a 3G. Si K es mucho menor que G (fisicamente raro), E se aproxima a 9K.

El [[nu_poisson]] tiene limites termodinamicos estrictos: debe ser mayor que -1 y menor o igual que 0.5 para que la energia de deformacion sea definida positiva. El limite superior 0.5 corresponde a incompresibilidad ([[K_bulk]] infinito). El limite inferior -1 corresponde a un material con [[G_shear]] infinito respecto a [[K_bulk]].

Los despejes de cada formula permiten calcular cualquier constante a partir de cualquier par conocido. La tabla de conversion es simetrica: hay exactamente 15 pares posibles entre las 6 constantes (E, G, K, nu, lambda, mu), y cada uno produce una formula valida.

## 🔴 Nivel estructural

La derivacion parte del tensor de rigidez de cuarto orden de un medio isotropo, que tiene la forma mas general compatible con la simetria esferica. El teorema de representacion de tensores isotropos de cuarto orden garantiza que dicho tensor depende de exactamente dos escalares independientes. Esos escalares pueden elegirse como lambda y mu (parametros de Lame), o como cualquier otro par equivalente.

La ley de Hooke generalizada se escribe como sigma igual a lambda por traza de epsilon por identidad mas 2G por epsilon. De aqui se extraen todas las relaciones imponiendo estados de carga especificos: traccion uniaxial (para E y nu), cizalla pura (para G), presion hidrostatica (para K).

La estructura algebraica muestra que las seis constantes (E, G, K, nu, lambda, mu) son funciones racionales de cualquier par elegido. No hay raices cuadradas ni funciones trascendentes: la conversion es siempre aritmetica elemental.

La condicion de estabilidad termodinamica exige que la energia de deformacion sea una forma cuadratica definida positiva. Esto impone las restricciones: G mayor que cero, K mayor que cero, y -1 menor que nu menor o igual que 0.5. Estas restricciones no son convenciones sino consecuencias de la segunda ley de la termodinamica.

En materiales anisotropos (cristales, composites, madera), el tensor de rigidez tiene mas componentes independientes (hasta 21 para la simetria mas baja), y las relaciones simples de este leaf dejan de ser validas. Las formulas aqui presentadas son exclusivas de la isotropia.

## Interpretacion fisica profunda

Las relaciones entre modulos revelan que la elasticidad isotropa tiene una estructura geometrica subyacente: la deformacion se descompone en una parte volumetrica (cambio de tamaño) y una parte deviatoria (cambio de forma). K gobierna la primera y G la segunda. E y nu son combinaciones que mezclan ambas contribuciones, lo que explica por que E no es una propiedad elemental desde el punto de vista tensorial, aunque sea la mas intuitiva experimentalmente.

La divergencia de K cuando nu tiende a 0.5 no es una patologia matematica: refleja la imposibilidad fisica de comprimir ciertos materiales (caucho, fluidos). La anulacion de G en ese mismo limite indica que esos materiales fluyen bajo cizalla, que es exactamente lo que hace un liquido.

## Orden de magnitud

Para acero (E aprox. 200 GPa, nu aprox. 0.3): G aprox. 77 GPa, K aprox. 167 GPa, lambda aprox. 113 GPa. El cociente [[ratio_G_E]] es 0.38 y [[ratio_K_E]] es 0.83.

Para aluminio (E aprox. 70 GPa, nu aprox. 0.33): G aprox. 26 GPa, K aprox. 69 GPa. Cociente [[ratio_G_E]] de 0.38, [[ratio_K_E]] de 0.98.

Para caucho (E aprox. 3 MPa, nu aprox. 0.4999): G aprox. 1 MPa, K aprox. 2 GPa. El cociente K/G es del orden de 2000: practicamente incompresible.

Un control rapido: si G sale mayor que E/2 o K sale menor que E/3, verificar si nu esta dentro del rango valido.

## Metodo de resolucion personalizado

Primero identificar que par de constantes se conoce. Segundo, seleccionar la formula que conecta el par conocido con la magnitud buscada. Tercero, sustituir y calcular. Cuarto, verificar coherencia: G debe ser menor que E/2 (salvo nu negativo), K debe ser mayor que E/3, y nu debe estar entre -1 y 0.5.

Si se conocen las velocidades de onda P y S ademas de la densidad, calcular G como densidad por velocidad S al cuadrado, K como densidad por velocidad P al cuadrado menos cuatro tercios de G, y luego E y nu desde G y K.

## Casos especiales y ejemplo extendido

Si nu es cero: G es E/2, K es E/3, lambda es cero. Las tres rigideces son comparables. Ejemplo: corcho.

Si nu es 0.5: G es E/3, K diverge, lambda diverge. El material no resiste compresion volumetrica. Ejemplo: caucho ideal, fluidos.

Si nu es negativo (material auxetico): G es mayor que E/2, K es menor que E/3. El material se expande lateralmente al estirarse. Ejemplo: espumas auxeticas reentrantes.

Ejemplo extendido: dado un acero con E de 210 GPa y nu de 0.29, calcular G, K, lambda y verificar con la ecuacion E en funcion de G y K. G resulta 81.4 GPa, K resulta 166.7 GPa, lambda resulta 112.3 GPa. Verificacion: 9 por 166.7 por 81.4 dividido entre 3 por 166.7 mas 81.4 da 210 GPa. Coherente.

## Preguntas reales del alumno

¿Por que no se necesitan mas de dos constantes? Porque la simetria isotropa reduce el tensor de rigidez de 21 componentes independientes a solo 2. Cada simetria adicional del material elimina grados de libertad.

¿Puede nu ser exactamente 0.5? En teoria si, pero implica K infinito (material perfectamente incompresible). En la practica, materiales como el caucho tienen nu muy cercano a 0.5 pero no exactamente.

¿Por que lambda no tiene una interpretacion mecanica sencilla? Porque lambda no corresponde a un ensayo puro. Aparece en la formulacion tensorial como coeficiente del termino de dilatacion, pero no se puede aislar experimentalmente como E (ensayo de traccion) o G (ensayo de torsion).

## Conexiones transversales y rutas de estudio

Este leaf conecta con propiedades elasticas del solido (definiciones individuales de E, G, K, nu), con ondas longitudinales y transversales (las velocidades de onda dependen de estos modulos), con impedancia mecanica (que depende del producto densidad-velocidad, y por tanto de los modulos), y con reflexion y transmision (que depende de impedancias). Tambien prepara el terreno para la elasticidad anisotropa y la mecanica de medios continuos avanzada.

## Sintesis final

En un solido isotropo, dos constantes elasticas independientes determinan completamente toda la respuesta mecanica. Las relaciones entre modulos son consecuencia algebraica de la simetria del medio. El coeficiente de Poisson es el parametro de control natural que gobierna la particion entre rigidez a cizalla y rigidez volumetrica. Los limites de nu (-1 a 0.5) tienen origen termodinamico y delimitan el espacio fisicamente realizable de materiales isotropos.
`;export{e as default};
