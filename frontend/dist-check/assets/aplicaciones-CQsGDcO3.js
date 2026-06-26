const e=`# Aplicaciones de Mecanicas

## 1. Cuerdas musicales

Variable dominante: [[T]].

Límite de validez: cuerda tensa, uniforme y con pequeñas oscilaciones.

En una guitarra, violin o piano, una cuerda vibra y transmite ondas mecanicas a lo largo de su longitud. La tension [[T]] es una variable de ajuste directa: al aumentarla, la rapidez de propagacion cambia y tambien cambian las frecuencias permitidas por la cuerda. La densidad lineal [[mu]] explica por que cuerdas mas gruesas tienden a producir sonidos mas graves si la tension es comparable.

Esta aplicacion permite distinguir el movimiento local de la cuerda y el avance del patron. Una marca en la cuerda no viaja hasta el puente; oscila alrededor de su posicion. Lo que se propaga es la perturbacion.

En diseño de instrumentos, esta lectura evita ajustar solo por ensayo y error. El luthier cambia material, longitud y tension sabiendo que el medio fija la rapidez y que la frecuencia audible depende despues de las condiciones de frontera.

## 2. Sonido en el aire

Variable dominante: [[v]].

Límite de validez: aire tratado como medio uniforme, sin viento fuerte ni gradientes termicos grandes.

El sonido es una onda mecanica longitudinal. Las moleculas del aire oscilan localmente y transmiten compresiones y rarefacciones. Aunque este leaf no usa la formula especifica del sonido, la idea central se conserva: hace falta medio material, inercia y restauracion. [[f]] se asocia con tono y [[lambda]] con separacion espacial entre compresiones equivalentes.

El ejemplo muestra por que el sonido no viaja en el vacio. Sin particulas de aire, no hay compresiones que puedan propagarse.

Tambien ayuda a entender aislamiento acustico. Reducir transmision no significa destruir la fuente, sino impedir que la perturbacion mecanica se acople eficazmente al siguiente medio.

## 3. Ondas en agua

Variable dominante: [[lambda]].

Límite de validez: ondas pequeñas; si hay rompimiento, turbulencia o profundidad variable, se requiere modelo extendido.

Las ondas superficiales de agua combinan movimiento local del fluido con avance de crestas. La longitud de onda [[lambda]] condiciona si la ola interactua con el fondo, con obstaculos o con una embarcacion. La amplitud [[A]] describe altura de perturbacion, pero no basta para fijar la rapidez si no se conoce profundidad y regimen.

Esta aplicacion es util para evitar una imagen simplista de las ondas mecanicas. El medio no solo esta presente; sus propiedades concretas deciden que modelo usar.

En costas y canales, esa decision afecta predicciones de llegada, resonancia local y esfuerzo sobre estructuras. La misma palabra ola no basta para elegir una formula.

## 4. Sismologia

Variable dominante: [[v]].

Límite de validez: medio aproximado por capas; fallan lecturas simples en fracturas complejas o anisotropia fuerte.

Las ondas sismicas son ondas mecanicas en la Tierra. Algunas son longitudinales, otras transversales, y sus velocidades dependen de propiedades elasticas y densidad del material. Medir tiempos de llegada permite inferir capas internas y localizar terremotos. Aunque las formulas de este leaf son introductorias, la distincion entre propagacion del patron y movimiento local del material sigue siendo esencial.

El punto clave es que una vibracion sismica necesita un medio solido o fluido y cambia cuando cambian sus propiedades.

Por eso las diferencias de tiempo de llegada no son solo datos cronologicos: contienen informacion sobre rigidez, densidad y trayectoria dentro de la Tierra.

## 5. Ultrasonidos medicos

Variable dominante: [[f]].

Límite de validez: aproximacion lineal; absorcion, dispersion y seguridad requieren modelos adicionales.

El ultrasonido usa ondas mecanicas de frecuencia alta para explorar tejidos. [[f]] condiciona resolucion y penetracion; [[lambda]] se relaciona con el detalle espacial detectable. La rapidez [[v]] depende del tejido, por eso los equipos usan valores calibrados para convertir tiempos de eco en distancia.

La aplicacion muestra que una onda mecanica puede transportar informacion sin transportar tejido. Las particulas vibran localmente y los ecos devuelven datos sobre interfaces.

La eleccion de frecuencia equilibra detalle y penetracion. Una frecuencia mayor reduce la escala espacial detectable, pero puede atenuarse antes.

## 6. Ensayos no destructivos

Variable dominante: [[lambda]].

Límite de validez: material suficientemente homogeneo; grietas pequeñas frente a [[lambda]] pueden no detectarse.

En metales, ceramicas o compuestos, las ondas mecanicas permiten buscar grietas sin romper la pieza. Una [[lambda]] pequeña mejora la resolucion, pero puede aumentar atenuacion. La velocidad [[v]] ayuda a convertir tiempos de viaje en profundidad o posicion de un defecto.

Esta aplicacion exige separar el leaf basico del modelo industrial completo. La idea de medio, perturbacion y propagacion permanece, pero se añaden atenuacion, reflexion y geometria.

El tecnico usa esa base para decidir si un eco tardio representa una grieta profunda, una frontera de material o una reflexion multiple.

## 7. Vibraciones en edificios y puentes

Variable dominante: [[A]].

Límite de validez: pequeñas deformaciones elasticas; daños, plasticidad o resonancia extrema exigen otro modelo.

Las estructuras pueden transmitir ondas mecanicas tras impactos, viento o trafico. La amplitud [[A]] orienta la severidad local de la vibracion, mientras [[f]] permite detectar resonancias. La rapidez [[v]] depende del material y de la geometria estructural.

La lectura del leaf ayuda a no confundir vibracion local con desplazamiento permanente. Un edificio puede oscilar y transmitir energia mecanica sin que sus partes recorran grandes distancias.

En monitorizacion estructural, comparar amplitudes y frecuencias permite detectar cambios de rigidez antes de que sean visibles. El modelo basico no calcula daño, pero organiza que magnitudes observar.
`;export{e as default};
