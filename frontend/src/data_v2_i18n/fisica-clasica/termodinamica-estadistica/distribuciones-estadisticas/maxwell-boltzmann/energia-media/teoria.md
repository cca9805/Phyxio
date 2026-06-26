## Contexto conceptual

En un gas clásico ideal, la [[temperatura]] no es solo una lectura de termómetro: es una escala microscópica de agitación. Cada partícula se mueve de forma irregular, con choques y velocidades distintas, pero el conjunto alcanza un patrón estable cuando está en equilibrio térmico. La [[energia_media]] resume esa nube de movimientos en un valor por partícula. La pregunta central es directa: al cambiar la [[temperatura]], ¿cómo cambia la energía microscópica típica? La respuesta del modelo clásico es limpia: no depende del tipo de gas ni del número total de partículas, sino de la escala térmica fijada por [[temperatura]] y convertida en energía mediante [[k_boltzmann]].

## 🟢 Nivel esencial

La [[energia_media]] de una partícula clásica representa cuánta energía cinética traslacional tiene, de media, una partícula del gas. No dice que todas las partículas tengan esa energía: algunas se mueven más rápido y otras más lento. Es una media estadística, una especie de centro de gravedad energético del reparto de velocidades. Cuando aumenta la [[temperatura]], aumenta la agitación microscópica y también aumenta la [[energia_media]]. Cuando la [[temperatura]] baja, la nube de velocidades se estrecha y la energía típica por partícula disminuye.

La [[k_boltzmann]] traduce grados kelvin en julios por partícula. Por eso este leaf conecta una magnitud macroscópica, la [[temperatura]], con una lectura microscópica, la [[energia_media]], dentro del gas clásico ideal en equilibrio. La clave es leerla siempre como promedio térmico, no como destino obligatorio de cada partícula.

## 🔵 Nivel formal

En el modelo clásico ideal, cada partícula tiene tres grados de libertad traslacionales. La equipartición asigna una contribución energética media por cada grado cuadrático de libertad, de modo que la [[energia_media]] traslacional por partícula queda fijada por la [[temperatura]] absoluta y por [[k_boltzmann]]. La relación principal del leaf es:

{{f:energia_media_particula}}

Esta fórmula expresa que la [[energia_media]] crece linealmente con [[temperatura]]. La pendiente de esa recta es proporcional a [[k_boltzmann]], así que no cambia de un gas ideal monoatómico a otro mientras el modelo sea clásico, diluido y traslacional. Si el sistema contiene [[numero_particulas]], la [[energia_total]] traslacional se obtiene sumando la media de todas las partículas:

{{f:energia_total_gas_ideal}}

Combinando ambas ideas, la energía macroscópica del gas queda relacionada con la escala térmica mediante:

{{f:energia_total_temperatura}}

Formalmente, el cálculo exige usar [[temperatura]] en kelvin, [[k_boltzmann]] en J/K, [[energia_media]] en J y [[energia_total]] en J. El papel físico de [[numero_particulas]] es extensivo: duplica la [[energia_total]], pero no duplica la [[energia_media]] por partícula. Si una sustitución produce unidades distintas de julio, una energía media negativa o una dependencia directa con [[numero_particulas]], el planteamiento algebraico ha mezclado niveles microscópicos y macroscópicos. La gráfica Coord debe conservar exactamente esa misma lectura lineal.

## 🔴 Nivel estructural

La estructura del modelo descansa sobre varias hipótesis fuertes. Primero, el gas debe ser suficientemente diluido para que las interacciones entre partículas solo importen durante choques breves. Si aparecen atracciones, repulsiones o correlaciones persistentes, parte de la energía ya no es solo traslacional ideal y la [[energia_media]] deja de describir todo el contenido microscópico relevante. Segundo, el sistema debe estar en equilibrio térmico. Si dos regiones del gas tienen distinta [[temperatura]], hablar de una única [[energia_media]] para todo el sistema oculta gradientes internos. Tercero, la descripción debe ser clásica: las energías disponibles deben formar un continuo efectivo y no estar dominadas por niveles cuánticos discretos.

Hay invariantes importantes. Para una partícula clásica traslacional, la dependencia entre [[energia_media]] y [[temperatura]] es lineal; cambiar [[numero_particulas]] no altera esa media por partícula, solo la [[energia_total]]. Además, la [[temperatura]] absoluta no se interpreta con grados Celsius dentro de la fórmula: el cero relevante es el cero termodinámico. Un valor de [[temperatura]] cercano a cero reduce la predicción clásica hacia energía traslacional media casi nula, pero ahí puede aparecer el fallo cuántico del modelo. En el otro extremo, temperaturas muy altas pueden activar grados internos, ionización o relatividad, según el gas.

Los casos frontera ayudan a leer la gráfica. En la representación Coord, [[temperatura]] actúa como variable horizontal y [[energia_media]] como variable vertical. La recta que pasa por el origen indica que no hay término energético independiente dentro de este modelo simplificado. Si la curva observada no es lineal, si aparece intercepto significativo, o si distintas muestras dan pendientes incompatibles con [[k_boltzmann]], el modelo no está capturando toda la física. También falla si se usa una mezcla no equilibrada, un gas denso, un sólido, un plasma fuerte o un régimen criogénico donde la equipartición clásica no se cumple. La lectura estructural consiste en separar lo intensivo de lo extensivo: [[energia_media]] responde a [[temperatura]], mientras [[energia_total]] responde a [[temperatura]] y a [[numero_particulas]]. En términos de validez, la comprobación final es triple: equilibrio térmico, gas suficientemente diluido y dominio clásico. Si cualquiera de esas piezas cae, la recta deja de ser una ley segura y pasa a ser solo una aproximación local.

## Interpretación física profunda

La [[temperatura]] no empuja directamente a una partícula concreta; fija la distribución estadística de sus velocidades. La [[energia_media]] es el promedio que emerge cuando se observan muchísimas partículas o una partícula durante mucho tiempo en equilibrio. Por eso puede haber partículas con energía superior o inferior a la media sin contradecir el modelo. La [[k_boltzmann]] es el puente dimensional: convierte una lectura térmica macroscópica en una cantidad microscópica de energía. La [[energia_total]] añade otra capa: no mide una partícula típica, sino el contenido traslacional acumulado de todas las partículas. Confundir estos dos niveles es como mezclar la nota media de una clase con la suma de todas las notas.

## Orden de magnitud

A [[temperatura]] ambiente, unos 300 K, [[k_boltzmann]] fija una escala de energía por partícula del orden de 10^-21 J. Por tanto, [[energia_media]] es microscópica aunque la [[energia_total]] de un gas con muchísimas partículas sea macroscópica. Para un mol, [[numero_particulas]] es del orden de 10^23, y esa multiplicación convierte energías individuales minúsculas en julios medibles. El salto de escala es la clave estadística del leaf.

## Método de resolución personalizado

Primero identifica si piden [[energia_media]] por partícula o [[energia_total]] del sistema. Después comprueba que la [[temperatura]] esté en kelvin. Elige la fórmula: usa

[[energia_media]]

para una partícula típica,

[[energia_total]]

si ya conoces la media y quieres sumar, o

[[energia_total]]

si te dan [[numero_particulas]] y [[temperatura]]. Finalmente revisa unidades: [[k_boltzmann]] por [[temperatura]] debe dar julios, y multiplicar por [[numero_particulas]] mantiene julios.

## Casos especiales y ejemplo extendido

Si la [[temperatura]] se duplica de 300 K a 600 K, la [[energia_media]] también se duplica en el modelo clásico. No hace falta cambiar de gas ni conocer la masa molecular para esa media traslacional. En cambio, si se duplica [[numero_particulas]] manteniendo [[temperatura]], la [[energia_media]] permanece igual y se duplica la [[energia_total]]. Caso límite: si alguien usa 27 °C como si fueran 27 K, predice una energía unas once veces menor que la correcta para [[temperatura]] ambiente. Caso extendido: un recipiente con el doble de partículas que otro, ambos a la misma [[temperatura]], tiene el doble de [[energia_total]], pero sus partículas no son individualmente más energéticas.

## Preguntas reales del alumno

¿Por qué no aparece la masa de la partícula? Porque esta [[energia_media]] traslacional clásica depende de los grados de libertad y de [[temperatura]], no de la masa; la masa sí afecta a las velocidades típicas. ¿Todas las partículas tienen la misma energía? No, la energía está distribuida: [[energia_media]] es un promedio. ¿Puede ser negativa? No para energía cinética traslacional clásica. ¿Por qué usar kelvin? Porque la escala absoluta hace que el cero térmico tenga sentido físico. ¿La [[energia_total]] y la [[energia_media]] dicen lo mismo? No: una es por partícula y la otra suma sobre [[numero_particulas]].

## Conexiones transversales y rutas de estudio

Este leaf conecta la teoría cinética de gases, la distribución de Maxwell-Boltzmann, la equipartición y la energía interna. También prepara la lectura de calor específico, grados de libertad internos y fallos cuánticos a baja [[temperatura]]. La gráfica Coord sirve como puente entre cálculo algebraico y lectura experimental.

## Síntesis final

La [[energia_media]] clásica por partícula es una lectura microscópica de la [[temperatura]]. Su dependencia lineal condensa la idea estadística central: la energía individual típica está gobernada por la escala térmica, mientras la [[energia_total]] depende además de cuántas partículas haya.