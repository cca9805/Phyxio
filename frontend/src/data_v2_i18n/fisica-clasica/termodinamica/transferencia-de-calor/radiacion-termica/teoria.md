## Contexto conceptual

La radiacion termica es una forma de transferencia de energia que no necesita contacto material ni un fluido intermedio. Un cuerpo con [[temperatura_absoluta]] emite radiacion electromagnetica porque su materia esta en agitacion termica. Esa radiacion transporta energia y puede ser absorbida por otros cuerpos. Por eso sentimos calor cerca de una estufa, aunque no toquemos la superficie, y por eso el Sol calienta la Tierra atravesando el vacio espacial.

La pregunta central de este leaf es: ¿como dependen la [[potencia_radiada]] y el intercambio neto de la [[temperatura_absoluta]], la [[area_superficie]] y la [[emisividad]]? La respuesta no es lineal ni puramente geometrica. La [[area_superficie]] decide cuanta superficie participa, la [[emisividad]] indica que tan eficaz es la superficie emitiendo respecto a un cuerpo negro, y la [[temperatura_absoluta]] domina el fenomeno con una dependencia muy intensa.

Tambien hay que distinguir entre emitir y perder energia neta. Un cuerpo emite [[potencia_radiada]], pero si esta rodeado por un entorno con [[temperatura_ambiente]], tambien recibe radiacion. La diferencia entre lo que emite y lo que absorbe se describe mediante [[potencia_neta]].

## 🟢 Nivel esencial

La idea esencial es que todo cuerpo con [[temperatura_absoluta]] emite radiacion termica, aunque no brille. A temperaturas cotidianas esa emision suele estar en el infrarrojo; a temperaturas muy altas puede aparecer luz visible. La [[area_superficie]] indica cuanta superficie participa y la [[emisividad]] indica que tan eficaz es esa superficie frente a un emisor ideal.

La variable dominante es la [[temperatura_absoluta]], siempre en kelvin. Un aumento moderado de temperatura puede producir una subida muy grande de [[potencia_radiada]]. Esta sensibilidad explica por que objetos muy calientes irradian de forma intensa. Si ademas existe un entorno con [[temperatura_ambiente]], el cuerpo tambien recibe radiacion. Por eso hay que distinguir emision bruta y balance: [[potencia_radiada]] mide lo que sale, mientras [[potencia_neta]] mide si el cuerpo pierde o gana energia en conjunto.

## 🔵 Nivel formal

El modelo basico para emision termica de una superficie gris es la ley de Stefan-Boltzmann. Relaciona la [[potencia_radiada]] con la [[emisividad]], la [[constante_stefan_boltzmann]], la [[area_superficie]] y la [[temperatura_absoluta]].

{{f:ley_stefan_boltzmann}}

En esta relacion, [[emisividad]] es adimensional, [[constante_stefan_boltzmann]] fija la escala fisica, [[area_superficie]] se expresa en metros cuadrados y [[temperatura_absoluta]] se expresa siempre en kelvin. Usar grados Celsius aqui cambia por completo el resultado, porque el modelo depende de temperatura absoluta y no de una diferencia arbitraria respecto al punto de congelacion del agua.

Cuando el problema incluye un entorno, se usa la potencia neta radiativa. Esta relacion compara la emision asociada a la [[temperatura_absoluta]] del cuerpo con la emision asociada a la [[temperatura_ambiente]] del entorno.

{{f:radiacion_neta}}

La [[potencia_neta]] puede ser positiva, negativa o cero segun el convenio de signo y segun la comparacion entre temperaturas. Con el convenio de perdida positiva, un cuerpo mas caliente que el entorno tiene [[potencia_neta]] positiva. Si las temperaturas se igualan, la emision bruta no desaparece, pero el intercambio neto ideal se anula.

Para estudiar emision por unidad de superficie se usa el [[flujo_radiativo]]. Esta magnitud permite comparar superficies sin mezclar el tamano total.

{{f:flujo_radiativo_emitido}}

Formalmente, el grafico principal debe leerse como una relacion creciente y convexa entre temperatura y potencia. Cambiar [[area_superficie]] o [[emisividad]] escala la curva; cambiar [[temperatura_absoluta]] modifica mucho mas la salida por la dependencia no lineal.

## 🔴 Nivel estructural

El modelo tiene varias capas estructurales que conviene separar. Primero, la superficie se trata como gris: la [[emisividad]] resume el comportamiento radiativo en un solo numero efectivo. Eso es util para ejercicios y estimaciones, pero no describe con detalle superficies cuya emision cambia mucho con longitud de onda, direccion, temperatura o acabado. Segundo, se supone que la [[temperatura_absoluta]] de la superficie es uniforme, o al menos representable mediante un valor efectivo. Si una placa tiene zonas calientes y frias, una sola temperatura oculta el reparto real de emision; la lectura correcta seria dividir la [[area_superficie]] en regiones y sumar contribuciones.

La [[potencia_radiada]] bruta posee una restriccion estructural simple: no puede ser negativa. Si aparecen [[area_superficie]] positiva, [[emisividad]] entre cero y uno, y [[temperatura_absoluta]] en kelvin, la emision tiene sentido fisico. En cambio, la [[potencia_neta]] es un balance con signo. Un valor negativo no implica automaticamente error; puede significar que el cuerpo recibe mas radiacion del entorno de la que emite. Esta diferencia evita confundir emision con enfriamiento.

Los casos frontera ayudan a leer el modelo. Si [[area_superficie]] tiende a cero, la potencia total tiende a cero aunque el flujo local pueda ser alto. Si [[emisividad]] tiende a cero, la superficie se aproxima a un emisor muy pobre. Si [[emisividad]] tiende a uno, se acerca al cuerpo negro ideal. Si [[temperatura_absoluta]] y [[temperatura_ambiente]] son iguales, hay emision y absorcion simultaneas, pero el intercambio neto ideal se cancela.

El modelo empieza a fallar cuando la geometria exige factores de forma, cuando el medio absorbe o dispersa radiacion, cuando hay sombras radiativas, cuando la [[temperatura_ambiente]] no puede representarse por un unico valor, o cuando conduccion y conveccion dominan el balance energetico. En una situacion real, la radiacion puede ser solo una parte del intercambio total de calor.

En la lectura grafica, esta estructura se traduce en una curva de [[potencia_radiada]] frente a [[temperatura_absoluta]] creciente y muy convexa. [[area_superficie]] y [[emisividad]] no cambian la forma fundamental; multiplican la escala vertical. Para [[potencia_neta]], la referencia del entorno desplaza la lectura: el punto de equilibrio aparece cuando la temperatura del cuerpo coincide con la [[temperatura_ambiente]]. Por eso el grafico no debe interpretarse como una proporcionalidad lineal entre temperatura y potencia.

## Interpretación física profunda

La [[potencia_radiada]] no es energia almacenada, sino ritmo de emision. Habla de cuanta energia sale por unidad de tiempo. El [[flujo_radiativo]] es todavia mas local: dice cuanto emite cada unidad de [[area_superficie]]. Esta distincion permite comparar una placa pequena muy caliente con una pared grande templada.

La [[temperatura_absoluta]] expresa el estado termico microscopico del material. Su papel es dominante porque la radiacion termica aumenta de forma muy rapida con T. La [[emisividad]] traduce la naturaleza de la superficie: acabado, color, rugosidad y material influyen en cuanto se acerca al emisor ideal. La [[constante_stefan_boltzmann]] no es un parametro ajustable; es la escala universal que conecta temperatura y flujo emitido por un cuerpo negro.

La [[temperatura_ambiente]] introduce reciprocidad: el cuerpo no solo envia radiacion, tambien la recibe. Por eso la lectura fisica completa no termina en "emite mucho", sino en "pierde o gana energia neta segun el entorno".

## Orden de magnitud

A temperatura ambiente, una superficie cercana a 300 K emite principalmente infrarrojo. Con [[area_superficie]] del orden de 1 m² y [[emisividad]] alta, la emision bruta puede alcanzar cientos de watts, aunque la [[potencia_neta]] sea mucho menor si la [[temperatura_ambiente]] es parecida. En cambio, a 600 K la emision bruta para la misma superficie y la misma [[emisividad]] es 16 veces mayor que a 300 K.

Los valores fisicos basicos cumplen [[temperatura_absoluta]] >= 0 K, [[temperatura_ambiente]] >= 0 K, [[area_superficie]] >= 0 y 0 <= [[emisividad]] <= 1. Si un calculo de [[potencia_radiada]] da un valor negativo, hay un fallo. Si una [[potencia_neta]] da negativa, puede ser una lectura correcta de absorcion neta.

## Método de resolución personalizado

Primero decide que se pide: emision bruta, intercambio neto o emision por unidad de area. Si aparece solo una superficie caliente, probablemente buscas [[potencia_radiada]]. Si aparece una [[temperatura_ambiente]], el problema apunta a [[potencia_neta]]. Si se habla de "por metro cuadrado", la magnitud adecuada es [[flujo_radiativo]].

Segundo, convierte toda temperatura a kelvin. Tercero, revisa que la [[area_superficie]] este en metros cuadrados. Cuarto, identifica la [[emisividad]] y comprueba su intervalo fisico. Quinto, elige la formula adecuada y conserva el significado del signo. Sexto, interpreta el numero: unidad, escala, sentido energetico y validez del modelo. La pregunta final debe ser: ¿mi resultado describe potencia total, potencia neta o flujo superficial?

## Casos especiales y ejemplo extendido

Si [[temperatura_absoluta]] y [[temperatura_ambiente]] son iguales, hay emision bruta, pero el intercambio neto ideal se anula. El cuerpo emite y recibe radiacion al mismo ritmo. Si [[emisividad]] se aproxima a uno, la superficie se comporta como un emisor casi ideal. Si [[emisividad]] se aproxima a cero, la emision del modelo se reduce drasticamente.

Imagina una placa de [[area_superficie]] 0,50 m² con [[emisividad]] alta a 600 K en una sala con [[temperatura_ambiente]] cercana a 300 K. La emision bruta es grande porque la [[temperatura_absoluta]] es elevada. Sin embargo, la [[potencia_neta]] no coincide exactamente con la emision bruta, porque la sala tambien emite hacia la placa. La lectura correcta es: la placa pierde energia radiativa neta hacia un entorno mas frio.

## Preguntas reales del alumno

¿Por que no puedo usar grados Celsius? Porque la escala Celsius no empieza en el cero fisico de agitacion termica. La [[temperatura_absoluta]] debe ir en kelvin.

¿Si no veo luz, no hay radiacion? Si hay. A temperaturas normales suele ser infrarroja.

¿La [[emisividad]] cambia mucho? Puede cambiar segun material, acabado, longitud de onda y temperatura. En ejercicios basicos se usa un valor efectivo.

¿La [[potencia_neta]] negativa esta mal? No necesariamente. Puede indicar ganancia neta de energia radiativa.

## Conexiones transversales y rutas de estudio

La radiacion termica conecta con conduccion y conveccion porque las tres describen transferencia de energia termica. Tambien conecta con ondas electromagneticas, optica infrarroja, astronomia, climatologia y fisica cuantica. La ley de Stefan-Boltzmann sirve en hornos, sensores termicos, satelites, edificios y balances energeticos.

Una ruta natural de estudio es comparar primero los tres mecanismos de transferencia de calor, despues estudiar equilibrio termico radiativo y finalmente explorar el cuerpo negro y el origen cuantico de la radiacion.

## Síntesis final

La radiacion termica convierte temperatura en emision electromagnetica. La [[temperatura_absoluta]] domina la intensidad, la [[area_superficie]] escala la cantidad total y la [[emisividad]] ajusta la eficacia real de la superficie. La [[potencia_radiada]] describe emision bruta, la [[potencia_neta]] describe balance con el entorno y el [[flujo_radiativo]] describe emision por superficie. Entender este leaf consiste en leer esas tres capas sin mezclarlas.
