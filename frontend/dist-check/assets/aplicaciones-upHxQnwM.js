const e=`## 1. Microscopia biologica en laboratorio clinico

En los laboratorios de analisis clinico, el microscopio compuesto es la herramienta principal para examinar muestras de sangre, tejidos y fluidos corporales. El objetivo de inmersion en aceite con focal de unos 2 mm y apertura numerica de 1.25 forma una imagen intermedia ampliada dentro del tubo estandar de 160 mm. El ocular de 10 aumentos permite al patologo observar detalles celulares con un aumento total de aproximadamente 1000.

La calidad del diagnostico depende de la capacidad de distinguir estructuras como nucleos celulares, parasitos o bacterias, cuyo tamano va de 0.2 a 10 micrometros. Un aumento insuficiente impide la identificacion; un aumento excesivo sin apertura numerica adecuada produce aumento vacio que confunde al observador. El contraste se mejora con tincion y con el condensador de iluminacion, no con mas aumento.

Variable dominante: la apertura numerica del objetivo, que determina la resolucion maxima alcanzable y, con ella, el aumento util del instrumento.
Limite de validez: el modelo paraxial deja de ser preciso cuando la apertura numerica del objetivo supera 0.65 sin correccion de aberraciones; para inmersion, se requieren objetivos acromaticos o apocromaticos.

## 2. Inspeccion de soldaduras electronicas con lupa binocular

En la fabricacion de placas de circuito impreso, la lupa binocular (estereomicroscopio) con aumentos entre 7 y 45 permite inspeccionar la calidad de las soldaduras y detectar defectos como puentes de estano, soldaduras frias o componentes desalineados. La focal del objetivo principal suele ser de 50 a 100 mm, proporcionando distancia de trabajo suficiente para manipular la placa bajo la lente.

El tecnico observa una imagen tridimensional gracias a los dos canales opticos separados. La relacion entre la distancia de trabajo y la focal del objetivo determina el compromiso entre aumento y espacio disponible para herramientas de retrabajo. Un aumento de 10 basta para detectar puentes de estano de 0.1 mm; aumentar a 45 permite localizar microfracturas en pines de circuitos integrados.

Variable dominante: la distancia focal del objetivo, que controla simultaneamente el aumento y la distancia de trabajo disponible.
Limite de validez: para defectos submicrometricos (por ejemplo en conexiones de semiconductores avanzados), la lupa binocular no ofrece resolucion suficiente y se requiere microscopia electronica de barrido.

## 3. Observacion astronomica con telescopio refractor

El telescopio refractor utiliza una lente objetivo de gran focal (del orden de 500 a 2000 mm) para recoger luz de objetos celestes y formar una imagen real en su plano focal. El ocular, con focal de 10 a 40 mm, amplifica angularmente esa imagen para el observador. El aumento angular resultante es el cociente de la focal del objetivo entre la del ocular.

Para observar los anillos de Saturno se necesita un aumento minimo de aproximadamente 50, obtenido con un objetivo de 1000 mm y un ocular de 20 mm. Para resolver estrellas dobles separadas menos de 2 segundos de arco, el diametro del objetivo debe ser suficiente para que el limite de difraccion permita esa resolucion; el aumento sin apertura adecuada solo produce discos de Airy ampliados.

Variable dominante: la relacion entre la focal del objetivo y la del ocular, que fija el aumento angular del telescopio.
Limite de validez: la turbulencia atmosferica (seeing) limita la resolucion practica a unos 1 a 2 segundos de arco independientemente del aumento optico; para superar este limite se recurre a optica adaptativa o a telescopios espaciales.

## 4. Endoscopia medica para diagnostico interno

Los endoscopios modernos utilizan sistemas de lentes o fibra optica para transmitir la imagen del interior de un organo hasta un ocular o una camara digital. El sistema optico interno funciona como un microscopio invertido: un objetivo de focal corta capta la imagen del tejido iluminado y un sistema de lentes de relevo la transporta a lo largo de un tubo flexible. El aumento tipico del sistema optico va de 5 a 30, aunque la imagen final se proyecta en un monitor y se amplifica digitalmente.

La focal del objetivo del endoscopio esta optimizada para un campo de vision amplio (entre 100 y 170 grados) mas que para alto aumento, porque el medico necesita orientarse dentro de la cavidad antes de acercarse al tejido sospechoso. Cuando se requiere mas detalle, se inserta un endoscopio de mayor aumento (endomicroscopio) con focales de pocos milimetros que permite observar la arquitectura celular in vivo.

Variable dominante: el campo de vision angular del objetivo, que determina cuanta superficie del tejido se observa simultaneamente y el compromiso con el aumento.
Limite de validez: las formulas de lente delgada no describen correctamente los sistemas de lentes de relevo de multiples elementos; se requiere el formalismo matricial ABCD o trazado de rayos completo para disenar el endoscopio.

## 5. Lectura de mapas topograficos con lupa de campo

Los excursionistas y cartografos usan lupas plegables de bolsillo con aumentos de 3 a 8 para leer curvas de nivel y simbolos de mapas topograficos impresos a escala reducida. La focal tipica de estas lupas es de 30 a 80 mm, permitiendo al usuario sostener el mapa a una distancia comoda y leer detalles de 0.2 mm impresos en el papel.

El aumento necesario depende del tamano del simbolo mas pequeno que se necesita identificar. Para curvas de nivel con separacion de 0.5 mm, un aumento de 3 (focal de unos 80 mm) es suficiente. Para leer numeros de cota con tamano de impresion de 0.3 mm, se necesita un aumento de al menos 5 (focal de unos 50 mm). A diferencia del microscopio, en esta aplicacion la profundidad de campo es importante: una focal demasiado corta reduce la profundidad de campo y obliga a mantener una distancia muy precisa entre la lupa y el papel.

Variable dominante: la distancia focal de la lupa, que fija tanto el aumento angular como la profundidad de campo y la distancia de trabajo.
Limite de validez: para mapas digitales en pantalla, la lupa optica se sustituye por el zoom digital, que no tiene restricciones de focal pero esta limitado por la densidad de pixeles de la pantalla.
`;export{e as default};
