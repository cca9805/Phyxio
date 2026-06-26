const e=`## Problema historico

Desde la antiguedad, los constructores sabian empiricamente que distintos materiales respondian de forma diferente a las cargas: la piedra resistia la compresion pero se fracturaba con facilidad, la madera se curvaba antes de romperse y los metales podian doblarse y volver a su forma original. Sin embargo, no existia un marco cuantitativo para describir estas diferencias. La pregunta sin respuesta era: ¿como medir y comparar objetivamente la capacidad de un material para resistir la deformacion?

En el siglo XVII, Robert Hooke formulo su celebre ley (ut tensio sic vis, 1676), estableciendo que la extension de un resorte es proporcional a la fuerza aplicada. Pero Hooke trabajo con resortes y alambres, no con la respuesta tridimensional de un solido continuo. Faltaba el paso de la constante de un resorte a las propiedades intrinsecas del material.

## Dificultad conceptual previa

La dificultad fundamental era separar la geometria del especimen de las propiedades del material. Dos barras del mismo material pero con distinta longitud o seccion se deforman cantidades diferentes bajo la misma carga. Sin la nocion de tension (fuerza por unidad de area) y deformacion (cambio relativo de longitud), era imposible definir una constante que dependiera solo del material.

Ademas, la respuesta elastica tridimensional no podia reducirse a un unico numero. Un material se comporta de forma distinta bajo traccion, compresion, cizalla y presion hidrostatica. Sin una teoria tensorial, no habia forma de organizar estas respuestas ni de demostrar cuantas constantes son realmente independientes.

## Que cambio

Thomas Young, en sus lecturas de 1807, introdujo el concepto de modulo elastico como propiedad intrinseca del material, independiente de la geometria. Definio el cociente entre tension y deformacion, creando lo que hoy llamamos [[E_young]]. Este fue el salto conceptual clave: pasar de la constante de un resorte a una propiedad material universal.

Poco despues, en la decada de 1820, Augustin-Louis Cauchy desarrollo la teoria de tensiones y deformaciones en tres dimensiones, formalizando el tensor de tensiones. Gabriel Lame, en la decada de 1830, introdujo las constantes que llevan su nombre y demostro que para un solido isotropo bastan dos parametros independientes para describir toda la respuesta elastica. Simeon Denis Poisson cuantifico el acoplamiento transversal-longitudinal con el coeficiente que hoy lleva su nombre.

## Impacto en la fisica

Estos avances transformaron la mecanica de solidos de un arte empirico en una ciencia cuantitativa. La teoria de elasticidad permitio por primera vez predecir la deformacion de estructuras complejas (vigas, placas, cascaras) a partir de las propiedades del material y las cargas aplicadas, sin necesidad de ensayar cada configuracion particular.

La demostracion de que solo dos constantes bastan para un isotropo fue un resultado profundo de simetria, precursor del uso sistematico de tensores en fisica. Esta misma estructura matematica se extenderia mas tarde a la electromagnetismo (tensor de Maxwell) y a la relatividad general (tensor metrico).

La conexion entre modulos elasticos y velocidades de onda, establecida por Navier y Stokes en el siglo XIX, abrio la puerta a la sismologia cuantitativa y a los ensayos no destructivos modernos.

## Conexion con fisica moderna

Los modulos elasticos siguen siendo magnitudes vivas en la investigacion actual. La mecanica computacional moderna (elementos finitos, dinamica molecular) utiliza las constantes elasticas como datos de entrada fundamentales. La ciencia de materiales diseña nuevos materiales (metamateriales auxeticos, espumas con Poisson negativo) manipulando deliberadamente las relaciones entre modulos.

En geofisica, la tomografia sismica reconstruye la estructura interna de la Tierra midiendo velocidades de ondas P y S, que dependen directamente de [[K_bulk]], [[G_shear]] y la densidad. En nanotecnologia, se miden modulos elasticos de nanotubos y grafeno con tecnicas de microscopia de fuerza atomica, verificando que las leyes de la elasticidad continua siguen siendo aplicables a escalas nanometricas.
`;export{e as default};
