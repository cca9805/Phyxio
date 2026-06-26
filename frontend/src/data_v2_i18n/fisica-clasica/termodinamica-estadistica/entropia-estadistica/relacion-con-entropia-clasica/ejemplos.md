# Ejemplo tipo examen


## Enunciado

Un sistema pasa reversiblemente entre dos estados de equilibrio a [[temperatura]] constante de 300 K. Durante el proceso absorbe 900 J como [[calor_reversible]]. Se quiere calcular la [[delta_entropia]] clásica y comprobar qué lectura estadística tendría si se describe el mismo cambio mediante un [[ratio_microestados]] compatible.

## Datos

- [[calor_reversible]]: 900 J absorbidos por el sistema
- [[temperatura]]: 300 K
- [[k_boltzmann]]: constante de Boltzmann
- Sistema: mismo macroestado inicial y final descritos por termodinámica y estadística
- Magnitud buscada: [[delta_entropia]]

## Definición del sistema

El sistema es el cuerpo o gas que recibe energía mediante un camino reversible. El entorno no forma parte del sistema, aunque entrega calor. Los estados inicial y final son estados de equilibrio, por lo que puede hablarse de [[entropia]] como magnitud de estado. La lectura estadística debe contar los [[numero_microestados]] compatibles con esos mismos estados, no con un sistema auxiliar distinto.

## Modelo físico

Usamos el modelo reversible clásico y su conexión estadística. La parte clásica relaciona [[delta_entropia]], [[calor_reversible]] y [[temperatura]]. La parte estadística interpreta el mismo cambio como variación logarítmica de multiplicidad, expresada mediante [[ratio_microestados]]. No se afirma que el proceso real tenga que mostrar cada microestado; se afirma que el macroestado final es compatible con más o menos configuraciones microscópicas.

## Justificación del modelo

El enunciado dice que el proceso es reversible y que la [[temperatura]] es constante, por lo que no hace falta integrar una [[temperatura]] variable. Además, los estados son comparables y pertenecen al mismo sistema. Estas condiciones permiten usar la equivalencia entre lectura clásica y lectura estadística. Si el calor fuera irreversible, o si la [[temperatura]] variara de forma no controlada, habría que construir un camino reversible equivalente antes de aplicar la relación.

## Resolución simbólica

Primero se usa la relación clásica:

{{f:variacion_entropia_reversible}}

Para el mismo cambio de estado, la lectura microscópica se apoya en la conexión de Boltzmann:

{{f:entropia_boltzmann_clasica}}

La equivalencia entre ambas formas queda expresada por:

{{f:igualdad_delta_entropia}}

Así, una [[delta_entropia]] positiva debe corresponder a un [[ratio_microestados]] mayor que uno. La lectura clásica determina el tamaño del cambio en J/K; la estadística indica que el conjunto de microestados compatibles aumenta por un factor enorme cuando se expresa a escala microscópica.

## Sustitución numérica

Con [[calor_reversible]] de 900 J y [[temperatura]] de 300 K, la variación clásica es 900 J dividido entre 300 K, es decir, 3 J/K. Como el calor entra en el sistema, el signo de [[delta_entropia]] es positivo. En lectura estadística, este resultado equivale a un aumento del logaritmo de la multiplicidad dividido por la escala [[k_boltzmann]]. No se necesita escribir todos los [[numero_microestados]], porque serían extraordinariamente grandes.

## Validación dimensional

La dimensión de [[calor_reversible]] es energía y la dimensión de [[temperatura]] es [[temperatura]] termodinámica. Al dividir energía entre [[temperatura]] se obtiene J/K, que es la unidad correcta de [[delta_entropia]] y [[entropia]]. En la lectura estadística, [[ratio_microestados]] es adimensional y su logaritmo también; al multiplicarlo por [[k_boltzmann]] se recupera J/K. Las dos rutas producen la misma dimensión.

## Interpretación física

El resultado positivo significa que el estado final admite más configuraciones microscópicas compatibles que el estado inicial. Desde la mirada clásica, el sistema absorbió [[calor_reversible]] a una [[temperatura]] finita; desde la estadística, ese intercambio aumentó el peso microscópico del macroestado final. No debe interpretarse como energía perdida ni como desorden visual obligatorio. La [[delta_entropia]] indica un cambio de accesibilidad: el sistema puede realizar el nuevo macroestado de más maneras. La [[k_boltzmann]] permite traducir esa lectura microscópica a unidades termodinámicas.

# Ejemplo de aplicación real


## Contexto

En una práctica de laboratorio se calienta lentamente una muestra mientras se mantiene cerca del equilibrio. El objetivo no es solo medir calor, sino comprobar que la [[entropia]] clásica tiene una lectura microscópica. Se estima el [[calor_reversible]] entregado y se registra la [[temperatura]] media del proceso para inferir la [[delta_entropia]].

## Estimación física

Si una muestra absorbe unos 1200 J alrededor de 300 K en condiciones casi reversibles, el orden de la [[delta_entropia]] será de unos pocos J/K. Esa escala es razonable: no es microscópica en unidades humanas, pero corresponde a un cambio enorme en [[numero_microestados]]. Si el proceso se repite a [[temperatura]] mayor con el mismo [[calor_reversible]], la variación será menor. Esta comparación ayuda a entender por qué el cociente térmico clásico y el [[ratio_microestados]] no son adornos matemáticos, sino dos caras de la misma medición.

## Interpretación

La aplicación muestra que medir calor no basta: hay que saber a qué [[temperatura]] se intercambia y si el camino puede tratarse como reversible. La lectura estadística añade profundidad: una pequeña [[delta_entropia]] macroscópica puede significar un cambio inmenso en multiplicidad. El puente conceptual está en que la [[entropia]] no cuenta energía total, sino formas compatibles de distribuirla bajo restricciones macroscópicas. Esta distinción también muestra que el mismo [[calor_reversible]] a distinta [[temperatura]] produce efectos entrópicos muy distintos: el cociente térmico clásico y el [[ratio_microestados]] estadístico no son adornos matemáticos, sino dos maneras de medir el mismo cambio real de [[delta_entropia]].