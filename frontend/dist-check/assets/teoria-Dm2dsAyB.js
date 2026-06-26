const e=`# Teorema de transporte de Reynolds

## Contexto conceptual

El teorema de transporte de Reynolds es el puente entre dos formas de mirar un fluido. La ley fundamental suele escribirse para un sistema material: siempre las mismas particulas. En ingenieria de fluidos, en cambio, casi siempre observamos una region del espacio: una boquilla, una turbina, un codo de tuberia, un deposito o una tobera. El teorema explica como convertir una ley de sistema en un balance sobre un volumen de control.

La identidad del leaf esta en esa conversion. No pregunta por giro local ni por una curva cerrada; pregunta que cantidad extensiva [[B]] se acumula dentro de [[V]] y que parte entra o sale atravesando [[A]]. La densidad [[rho]], la propiedad intensiva [[b]], la velocidad relativa [[vrel]], la normal [[n]] y el caudal masico [[mdot]] aparecen porque cada una nombra una pieza del balance: contenido interno, transporte convectivo, orientacion de la frontera y signo del flujo.

## 🟢 Nivel esencial

La idea esencial es sencilla: si el volumen de control no sigue a las mismas particulas, una propiedad puede cambiar dentro de la region por dos razones distintas. Puede acumularse localmente, o puede cruzar la superficie de control. El teorema separa esas dos contribuciones para que no se mezclen en una unica frase ambigua.

Imagina un deposito con una entrada y una salida. La masa dentro aumenta si entra mas fluido del que sale; disminuye si sale mas del que entra; permanece constante si ambos caudales se compensan. Esa lectura no necesita todavia una integral complicada. Necesita distinguir contenido interno y flujo a traves de la frontera.

Con [[B]] se representa la propiedad extensiva que se quiere seguir: masa, cantidad de movimiento, energia u otra magnitud acumulable. Con [[b]] se mide esa propiedad por unidad de masa. Por eso elegir [[B]] es la decision conceptual principal: no es lo mismo hacer un balance de masa que un balance de momento sobre la misma geometria.

La normal [[n]] fija el signo. Si [[vrel]] apunta hacia fuera, el termino de superficie suele restar contenido al volumen; si apunta hacia dentro, lo alimenta. El alumno debe anticipar ese signo antes de sustituir numeros. Si un tanque se esta llenando y el calculo predice perdida neta, el error probablemente esta en la orientacion de la frontera o en la lectura de entradas y salidas.

## 🔵 Nivel formal

El nivel formal queda concentrado en estas relaciones:

{{f:rtt_general}}

{{f:balance_masa_control}}

{{f:flujo_masico}}

{{f:balance_momento_control}}

La primera relacion expresa el teorema general: la variacion de [[B]] para el sistema material se escribe como acumulacion dentro del volumen de control mas flujo neto por la superficie de control. Esa suma separa una integral de volumen y una integral de superficie. La primera mira lo que hay dentro; la segunda mira lo que cruza.

Cuando [[B]] es masa, [[b]] vale uno y aparece el balance de continuidad. En regimen estacionario, si no hay acumulacion, la suma algebraica de los caudales debe anularse. En una entrada y una salida, esto reduce el problema a comparar [[mdot]] entrante y [[mdot]] saliente, siempre con signos compatibles con la normal elegida.

El flujo masico se obtiene combinando [[rho]], [[vrel]], [[A]] y [[n]]. El producto escalar con la normal no es un detalle geometrico menor: decide que parte de la velocidad atraviesa realmente la superficie. Una velocidad tangente a la frontera puede ser grande y, sin embargo, no aportar caudal normal.

Para cantidad de movimiento, el balance ya no solo cuenta masa. Relaciona fuerzas externas con el flujo de momento que entra y sale. Por eso el teorema es tan util en chorros, codos, toberas y turbomaquinas: permite calcular fuerzas sobre dispositivos sin seguir partícula por particula.

## 🔴 Nivel estructural

La estructura profunda consiste en escoger bien el volumen de control. Una frontera fija simplifica muchos dispositivos estacionarios; una frontera movil puede ser necesaria en pistones, ondas de choque, interfaces libres o maquinas con partes moviles. Si la frontera se elige mal, los terminos aparecen correctos pero responden a una pregunta fisica distinta.

Hay tres controles estructurales. Primero, [[B]] debe ser una propiedad extensiva acumulable. Segundo, el campo debe estar definido sobre [[V]] y sobre [[A]] con unidades coherentes. Tercero, la velocidad usada en la superficie debe ser relativa a la propia superficie de control, no simplemente la velocidad absoluta del fluido.

El caso estacionario no significa que no haya movimiento; significa que la acumulacion temporal dentro del volumen de control es nula. Puede haber grandes entradas y salidas con contenido interno constante. Este punto separa el teorema de Reynolds de una descripcion cinematica local: aqui lo importante es el balance integral del dispositivo completo.

El modelo falla si la frontera atraviesa una discontinuidad sin tratamiento adecuado, si la densidad cambia mucho y se usa incomprensibilidad sin justificar, si hay fugas no contabilizadas o si las fuerzas de superficie se sustituyen por una presion media sin control de error. En esos casos conviene redefinir el volumen o pasar a un modelo mas detallado.

## Interpretación física profunda

Interpretar el resultado significa traducir cada termino a una frase operacional. La acumulacion dice cuanto cambia el inventario dentro de la region. El termino convectivo dice que propiedad transporta el fluido al cruzar la frontera. Las fuerzas externas dicen que agente modifica la cantidad de movimiento del contenido y de los chorros que lo atraviesan.

La lectura profunda no termina con una igualdad. Debe decir si el dispositivo almacena, evacua o redistribuye la propiedad estudiada. En un codo, por ejemplo, el interes puede ser la fuerza que el fluido ejerce sobre la pared. En un deposito, el interes puede ser la rapidez con que sube el nivel. En una tobera, puede ser el empuje asociado al chorro saliente.

## Orden de magnitud

Antes de calcular con detalle conviene estimar escalas. Para agua, [[rho]] suele estar cerca de 1000 kg/m3; para aire, cerca de 1 kg/m3 en condiciones ordinarias. Un area pequeña con velocidad alta puede producir el mismo [[mdot]] que un area grande con velocidad baja.

Si la acumulacion estimada es menor que el 5 % del flujo que atraviesa la frontera, puede tratarse como regimen casi estacionario para una primera lectura. Si alcanza el 10 % o mas, ignorarla cambia la conclusion. En balances de momento, una variacion de velocidad grande puede dominar incluso cuando el caudal masico no parece extraordinario.

## Método de resolución personalizado

1. Dibujar el volumen de control y marcar todas las superficies abiertas.

2. Elegir la propiedad [[B]]: masa, momento o energia. Escribir tambien [[b]] para saber que se transporta por unidad de masa.

3. Fijar la normal [[n]] en cada superficie y decidir el signo de [[vrel]].

4. Separar acumulacion interna, entradas, salidas y acciones externas.

5. Comprobar unidades, caso estacionario y sentido fisico del resultado.

## Casos especiales y ejemplo extendido

En un deposito rigido con una entrada y una salida, el volumen de control coincide con el interior del tanque. Si entra mas [[mdot]] del que sale, la masa almacenada aumenta. Si ambos caudales se igualan, el contenido puede permanecer constante aunque el fluido este circulando continuamente.

En un codo de tuberia, el volumen de control rodea el codo. La masa puede estar en regimen estacionario, pero el momento cambia de direccion. El balance de momento permite hallar la fuerza que la pared debe ejercer para desviar el chorro. Esta situacion muestra por que masa estacionaria no implica fuerza nula.

## Preguntas reales del alumno

**¿Por que no seguir directamente a las particulas?** Porque en dispositivos abiertos entran y salen particulas continuamente. Seguirlas una a una es incomodo; el volumen de control permite estudiar una region fija o elegida estrategicamente.

**¿Por que aparece una velocidad relativa?** Porque lo que cruza la frontera depende del movimiento del fluido respecto a esa frontera. Si la superficie se mueve con el fluido, el flujo normal puede anularse aunque exista velocidad absoluta.

**¿Que diferencia hay entre acumulacion y flujo neto?** La acumulacion mide cambio dentro de [[V]]. El flujo neto mide transporte a traves de [[A]]. El teorema suma ambos para recuperar la ley del sistema material.

## Conexiones transversales y rutas de estudio

Este leaf conecta con continuidad, cantidad de movimiento, energia mecanica, turbomaquinas, chorros, tuberias y dinamica de sistemas abiertos. Debe estudiarse despues de conocer masa, densidad, velocidad y fuerza, y antes de resolver problemas integrales de boquillas, difusores, bombas, turbinas o depositos no estacionarios.

Tambien prepara la lectura de ecuaciones locales. Las formas diferenciales de conservacion pueden verse como versiones de campo de la misma idea: inventario local mas transporte por frontera. El teorema de Reynolds proporciona la interpretacion integral que evita perder el significado fisico de los terminos.

## Síntesis final

El teorema de transporte de Reynolds convierte una ley escrita para un sistema material en un balance aplicable a un volumen de control. Su nucleo no es memorizar una integral, sino distinguir inventario interno, superficie atravesada, velocidad relativa, orientacion normal y propiedad transportada.

Al terminar, el alumno debe poder mirar un dispositivo abierto y decir que entra, que sale, que se acumula y que fuerza o intercambio explica el cambio observado. Esa competencia diferencia este leaf de contenidos sobre giro local o circulacion: aqui la pregunta siempre es que propiedad extensiva cruza una frontera y como cambia el balance global del volumen elegido.
`;export{e as default};
