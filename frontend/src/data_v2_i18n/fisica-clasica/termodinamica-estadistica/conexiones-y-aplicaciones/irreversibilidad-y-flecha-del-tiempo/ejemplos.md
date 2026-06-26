# Ejemplo tipo examen


## Enunciado

Un sistema libera calor al entorno durante un proceso real. La entropía del sistema disminuye, pero el entorno aumenta más. Se quiere decidir si el proceso contradice la flecha del [[tiempo]] o si es un proceso irreversible compatible con la segunda ley.

## Datos

- [[variacion_entropia_sistema]]: -2,0 J/K
- [[variacion_entropia_entorno]]: 3,2 J/K
- [[constante_boltzmann]]: 1,38·10^-23 J/K
- [[tiempo]]: proceso observado de estado inicial a final
- [[grado_irreversibilidad]]: indicador adimensional posterior

## Definición del sistema

El sistema es el cuerpo que pierde entropía localmente. El entorno es todo aquello que recibe energía o dispersa restricciones durante el proceso. La frontera es imprescindible: si se mira solo el sistema, parece que la entropía baja; si se mira sistema más entorno, se obtiene la lectura física de la flecha temporal.

## Modelo físico

Se usa el balance total de la segunda ley y la interpretación de entropía producida.

{{f:segunda_ley_delta_s_universo}}

{{f:entropia_producida_irreversible}}

{{f:criterio_flecha_temporal}}

{{f:probabilidad_macroestado_entropia}}

El modelo físico considera magnitudes fundamentales del sistema como [[constante_boltzmann]], [[entropia]], [[entropia_producida]].

## Justificación del modelo

El proceso es termodinámico, tiene estados inicial y final y permite separar sistema y entorno. Como hay disipación real, la reversibilidad ideal no es el punto de partida. El criterio adecuado no es el signo de [[variacion_entropia_sistema]], sino el signo de [[variacion_entropia_universo]]. Además, la lectura estadística explica por qué el estado final más probable está asociado a mayor número de microestados compatibles.

## Resolución simbólica

Primero se aplica el balance total de la segunda ley: se suma la contribución del sistema y del entorno para obtener [[variacion_entropia_universo]]. Si el resultado total es positivo, la evolución es compatible con la flecha del [[tiempo]].

{{f:segunda_ley_delta_s_universo}}

Después se interpreta [[entropia_producida]] como medida de irreversibilidad: cuánto se aleja el proceso del límite reversible ideal.

{{f:criterio_flecha_temporal}}

{{f:entropia_producida_irreversible}}

Finalmente, la base estadística conecta [[entropia]] con el número de configuraciones microscópicas compatibles mediante [[constante_boltzmann]]. Esto explica por qué la escala macroscópica de J/K es inmensamente mayor que la escala microscópica.

{{f:probabilidad_macroestado_entropia}}

## Sustitución numérica

La variación total es positiva: el entorno aumenta más de lo que disminuye el sistema. El resultado neto es 1,2 J/K, una escala enorme comparada con [[constante_boltzmann]]. Por tanto, el proceso no contradice la segunda ley. Al contrario, muestra una flecha temporal clara hacia el estado final observado.

## Validación dimensional

[[variacion_entropia_sistema]], [[variacion_entropia_entorno]], [[variacion_entropia_universo]] y [[entropia_producida]] tienen unidades J/K. Al sumar las dos primeras se conserva J/K. Si se calcula [[grado_irreversibilidad]] dividiendo por [[constante_boltzmann]], el resultado es adimensional. Esa adimensionalización es la que conecta el balance macroscópico en J/K con la escala microscópica de [[numero_microestados]]: el cociente [[variacion_entropia_universo]] / [[constante_boltzmann]] estima el logaritmo del número de microestados adicionales que gana el sistema total. Para 1,2 J/K dividido por 1,38·10⁻²³ J/K, ese cociente ronda 10²³, un número astronómico que explica por qué la reversión espontánea es inobservable.

## Interpretación física

El signo negativo de [[variacion_entropia_sistema]] no significa que el proceso vaya contra el [[tiempo]]. Significa que una parte del universo termodinámico se ordena o reduce sus microestados accesibles, mientras otra parte aumenta más. La lectura correcta está en [[variacion_entropia_universo]]. Como el valor total es positivo, el proceso tiene una dirección física compatible con la segunda ley. La enorme diferencia con [[constante_boltzmann]] indica que no hablamos de una fluctuación microscópica reversible, sino de una tendencia macroscópica prácticamente irreversible. El entorno no es un detalle: es el contador oculto que cierra el balance.

# Ejemplo de aplicación real


## Contexto

Una taza caliente se enfría sobre una mesa. La taza pierde energía térmica y puede parecer que su estado se vuelve menos activo. Sin embargo, el aire y la mesa reciben energía y aumentan su entropía más de lo que la taza disminuye.

## Estimación física

Si la taza cede una cantidad moderada de calor a un entorno a temperatura ambiente, la variación de entropía del entorno puede superar la disminución local de la taza. En escala macroscópica, incluso décimas de J/K son gigantescas frente a [[constante_boltzmann]]. La estimación importante no es mirar si la taza parece más fría, sino comparar el balance total sistema-entorno. Ese balance muestra por qué el enfriamiento espontáneo tiene dirección temporal. El orden de magnitud confirma que la probabilidad de que la taza se caliente sola tomando energía del aire más frío es tan ridículamente pequeña que ningún experimento podría observarla en toda la vida del universo.

## Interpretación

La taza no se calienta espontáneamente tomando energía del aire más frío porque ese camino llevaría a macroestados con muchísimos menos [[numero_microestados]] compatibles. La flecha temporal aparece como una asimetría estadística macroscópica: el proceso compatible produce o mantiene [[variacion_entropia_universo]] no decreciente. En otras palabras, el calor fluye de caliente a frío no por una regla añadida, sino porque los macroestados accesibles al sistema total son abrumadoramente más en esa dirección. Cada proceso cotidiano irreversible —enfriamiento, mezcla, fricción— es una instancia del mismo principio estadístico.