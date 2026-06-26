const e=`# Ecuaciones de hamilton

## Contexto conceptual

Las ecuaciones de Hamilton describen la evolucion de un sistema usando coordenadas canonicas y momentos conjugados. Despues de construir el hamiltoniano [[H]], el estado ya no se lee como posicion y velocidad, sino como un punto del espacio de fases formado por [[qi]] y [[p]]. La pregunta fisica cambia: no se busca solo una trayectoria, sino el campo que indica hacia donde se mueve cada punto de fase.

Este leaf continua naturalmente a la transformacion de Legendre. Alli se justificaba como pasar de velocidades a momentos; aqui se usa el resultado para generar movimiento. El hamiltoniano no es solo una cantidad que se calcula: sus pendientes son las que producen las tasas de cambio de la coordenada y del momento.

## 🟢 Nivel esencial

La idea esencial es que el estado se mueve en un plano de fase. Una componente del movimiento dice como cambia la coordenada; la otra dice como cambia el momento. Esas dos componentes no se inventan por separado: salen de pendientes del hamiltoniano tomadas en direcciones distintas.

La pendiente en la direccion del momento gobierna el avance de la coordenada. La pendiente en la direccion de la coordenada gobierna el cambio del momento, pero con signo contrario. Esta asimetria de signos es la huella de la estructura canonica: no se trata de dos derivadas iguales, sino de una rotacion del gradiente energetico que produce flujo de fase.

Por eso, al nivel esencial, conviene imaginar el hamiltoniano como un relieve y el estado como un punto que no baja simplemente por la pendiente. La estructura canonica gira esa informacion y la convierte en movimiento alrededor de curvas de nivel. Esta imagen ayuda a entender por que puede haber evolucion continua aunque el valor de energia permanezca fijo.

## 🔵 Nivel formal

La primera ecuacion de Hamilton define la velocidad canonica de la coordenada:

{{f:ecuacion_hamilton_q}}

La segunda ecuacion define la evolucion temporal del momento conjugado:

{{f:ecuacion_hamilton_p}}

Para varios grados de libertad se usa la forma indexada. No cambia el criterio fisico: repite la misma estructura para cada par canonico compatible:

{{f:ecuaciones_hamilton_indexadas}}

Para un modo armonico regular, el hamiltoniano puede escribirse como suma de una parte cinetica en [[p]] y una parte potencial en [[qi]]:

{{f:hamiltoniano_oscilador}}

Al aplicar la primera ecuacion a ese hamiltoniano aparece la velocidad canonica:

{{f:qdot_oscilador}}

Al aplicar la segunda ecuacion aparece la fuerza restauradora escrita como cambio de momento:

{{f:pdot_oscilador}}

La evolucion de [[H]] a lo largo del movimiento queda ligada a su dependencia temporal explicita:

{{f:conservacion_hamiltoniano}}

Estas expresiones muestran el contrato formal del leaf. Primero se escribe [[H]] en variables canonicas; despues se calculan sus pendientes; por ultimo se interpreta el par formado por [[qd]] y [[pd]] como el vector que mueve el estado en espacio de fases.

En esta lectura, [[DHp]] y [[DHq]] no son adornos simbolicos: son las dos pendientes locales que el sistema usa para decidir su evolucion instantanea. [[DHp]] se convierte directamente en flujo horizontal de coordenada, mientras [[DHq]] se convierte en flujo vertical de momento con signo opuesto. La magnitud [[dHdt]] resume otra pregunta distinta: no pregunta hacia donde se mueve el punto, sino si el valor de la funcion hamiltoniana cambia durante ese movimiento.

## 🔴 Nivel estructural

Estructuralmente, las ecuaciones de Hamilton convierten una funcion escalar en un campo dinamico. El gradiente de [[H]] no se sigue directamente; se reorganiza con la estructura canonica. Por eso el movimiento puede conservar [[H]] y, aun asi, recorrer curvas de nivel. En un oscilador, el sistema no se queda quieto aunque la energia sea constante: gira alrededor del equilibrio en espacio de fases.

La validez exige que [[qi]] y [[p]] sean variables canonicas. No basta con llamar momento a cualquier cantidad. Si las variables no proceden de una transformacion regular o no preservan la estructura canonica, las ecuaciones pueden necesitar correcciones. Esta condicion es crucial en coordenadas no triviales, sistemas con restricciones y formulaciones avanzadas.

Tambien hay que distinguir conservacion de energia y ausencia de movimiento. Si [[Ht]] es nula, [[H]] se conserva, pero [[qd]] y [[pd]] pueden ser distintos de cero. La conservacion significa permanecer sobre una superficie de nivel, no detener la evolucion.

Esta estructura es la razon por la que los metodos hamiltonianos son tan eficaces en estabilidad. Un punto de equilibrio no se reconoce solo porque la energia tenga cierto valor, sino porque el flujo completo se anula: no cambia la coordenada y tampoco cambia el momento. Cerca de ese punto, las pendientes de [[H]] indican si el movimiento se organiza en orbitas cerradas, escapes o separatrices. La informacion no esta en una formula aislada, sino en el campo de fase completo.

## Interpretacion fisica profunda

La lectura profunda es geometrica. El hamiltoniano asigna una altura energetica a cada punto de fase, pero las ecuaciones indican como desplazarse sobre esa superficie. La coordenada cambia porque el hamiltoniano tiene pendiente respecto del momento; el momento cambia porque el hamiltoniano tiene pendiente respecto de la coordenada con signo opuesto.

Esto explica por que el formalismo es tan potente. En lugar de resolver desde fuerzas aisladas, se estudia una funcion que contiene toda la informacion dinamica. A partir de ella se obtienen velocidades, fuerzas generalizadas, conservaciones y retratos de fase.

## Orden de magnitud

En el oscilador cuadratico, si [[p]] tiene orden de un kg m/s y [[m]] tiene orden de un kg, [[qd]] tiene orden de un metro por segundo. Si [[k]] tiene orden de diez newtons por metro y [[qi]] tiene orden de una decima de metro, [[pd]] tiene orden de un newton. Estas escalas permiten detectar errores de unidades y signos.

Un valor grande de [[H]] no implica necesariamente gran velocidad; puede estar almacenado en la parte potencial. La lectura debe separar donde esta la energia dentro del punto de fase.

## Metodo de resolucion personalizado

Primero confirma que trabajas con variables canonicas [[qi]] y [[p]]. Segundo escribe [[H]] solo con esas variables y parametros. Tercero deriva respecto de [[p]] manteniendo fija la coordenada para obtener [[qd]]. Cuarto deriva respecto de [[qi]] manteniendo fijo el momento y cambia el signo para obtener [[pd]].

Quinto interpreta el par de resultados como un vector de fase. Sexto revisa conservacion: si [[H]] no depende explicitamente del tiempo, el movimiento conserva el valor de [[H]], aunque el estado siga cambiando.

## Casos especiales y ejemplo extendido

El oscilador armonico es el ejemplo canonico porque sus ecuaciones son lineales. La coordenada genera una aceleracion restauradora mediante [[pd]], y el momento genera avance de coordenada mediante [[qd]]. Si [[qi]] es positiva, el momento tiende a disminuir; si [[p]] es positivo, la coordenada tiende a aumentar.

En un sistema libre sin potencial, [[pd]] puede ser cero y el momento se conserva. En un potencial no lineal, la segunda ecuacion conserva su estructura, pero la pendiente respecto de la coordenada ya no es lineal. El metodo no cambia; cambia la geometria de las curvas de nivel.

## Preguntas reales del alumno

Una duda frecuente es por que aparece un signo menos en la segunda ecuacion. Ese signo no es una convencion decorativa; hace que el flujo sea canonico y que, en modelos conservativos, el movimiento avance sobre curvas de nivel de [[H]].

Otra duda es si [[H]] constante significa que nada cambia. La respuesta es no. Un punto puede moverse continuamente por una curva de nivel manteniendo el mismo valor de hamiltoniano. Esa diferencia es esencial para entender oscilaciones, orbitas y estabilidad.

## Conexiones transversales y rutas de estudio

Este leaf conecta con transformacion de Legendre, oscilador armonico, retratos de fase y conservacion de energia. Antes conviene dominar lagrangiano y momento conjugado. Despues, el paso natural es estudiar estabilidad, variables canonicas y sistemas con restricciones.

Tambien prepara mecanica estadistica y mecanica cuantica, donde el espacio de fases y las variables conjugadas son centrales. La forma de Hamilton enseña a leer la dinamica como geometria, no solo como ecuaciones de segundo orden.

## Sintesis final

Las ecuaciones de Hamilton convierten el hamiltoniano en un campo de evolucion para coordenada y momento. La pendiente en [[p]] produce [[qd]], la pendiente en [[qi]] produce [[pd]] con signo contrario, y la dependencia temporal explicita decide si [[H]] se conserva. El objetivo final es leer la dinamica como flujo en espacio de fases.
`;export{e as default};
