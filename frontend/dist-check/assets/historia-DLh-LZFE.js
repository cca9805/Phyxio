const e=`## Problema historico

La teoria de la elasticidad nacio fragmentada: Hooke (1678) formulo su ley para resortes y barras (relacion fuerza-alargamiento), pero durante mas de un siglo no estuvo claro cuantas constantes se necesitaban para describir un solido elastico general. Navier (1821) propuso un modelo molecular con un unico parametro elastico. Cauchy (1822) demostro que se necesitaban dos parametros independientes para un medio isotropo, introduciendo lo que hoy llamamos los parametros de Lame. La disputa entre la teoria de un parametro (rareconstriccion) y la de dos parametros duro decadas y solo se resolvio experimentalmente a mediados del siglo XIX.

## Dificultad conceptual previa

La dificultad fundamental era distinguir entre deformacion de forma (cizalla) y deformacion de volumen (compresion). La traccion uniaxial mezcla ambas: la barra cambia de longitud y de seccion simultaneamente. Separar la respuesta volumetrica de la deviatoria requeria un marco tensorial que no existia antes de Cauchy.

Ademas, la relacion entre el coeficiente de Poisson y los modulos no era obvia. La observacion de que un material se contrae lateralmente al estirarse era conocida empiricamente, pero conectar esa contraccion cuantitativamante con la relacion G/E requirio la formulacion completa de la ley de Hooke generalizada.

## Que cambio

Lame y Clapeyron (1833) introdujeron los dos parametros (lambda, mu) que llevan el nombre de Lame y demostraron que son suficientes y necesarios para describir la elasticidad isotropa. Poisson (1829) habia introducido la razon de contracciones laterales, pero la conexion rigurosa con los modulos la establecieron Lame y, mas tarde, Kelvin (1856), que unifico las relaciones en una tabla de conversion sistematica.

La contribucion de George Green (1839) fue esencial al demostrar que la existencia de una funcion de energia de deformacion impone restricciones de simetria al tensor de rigidez y reduce las constantes independientes. Su argumento energetico es el fundamento de los limites termodinamicos de nu.

## Impacto en la fisica

La demostracion de que dos constantes bastan para la isotropia tuvo dos consecuencias mayores. Primera: simplifico radicalmente la ingenieria estructural, porque basto medir E y nu en un ensayo de traccion para tener la descripcion completa del material. Segunda: permitio predecir las velocidades de onda P y S en solidos, lo que abrio el camino a la sismologia cuantitativa (Poisson, Stokes, Rayleigh) y a los ensayos no destructivos por ultrasonidos.

La tabla de conversion entre constantes elasticas se convirtio en una herramienta estandar presente en todos los textos de mecanica de solidos y sigue vigente sin modificaciones desde el siglo XIX.

## Conexion con fisica moderna

En materiales avanzados (metamateriales, cristales fononicos, materiales auxeticos), las relaciones isotropas siguen siendo el punto de partida contra el que se comparan los comportamientos anomalos. La ingenieria de nu negativo es un campo activo donde se diseñan microestructuras para controlar la particion entre rigidez volumetrica y de cizalla. En mecanica computacional, los parametros de Lame son las constantes de entrada estandar de los codigos de elementos finitos para materiales isotropos.
`;export{e as default};
