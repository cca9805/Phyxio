# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: definicion-y-significado
# Target response file: ejemplos.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Ejemplo tipo examen
## Enunciado
Un sistema canónico tiene tres microestados accesibles. El primero tiene [[energia_microestado]] nula, el segundo tiene una [[energia_microestado]] de 0,025 eV y el tercero tiene una [[energia_microestado]] de 0,050 eV. La [[temperatura]] es 290 K. Se pide estimar los [[peso_boltzmann]], construir la [[funcion_particion]] y obtener la [[probabilidad_microestado]] de cada estado. El objetivo físico es interpretar cómo la [[temperatura]] decide si las diferencias de [[energia_microestado]] importan mucho o poco.

## Datos
- [[energia_microestado]] del estado 1: 0 eV
- [[energia_microestado]] del estado 2: 0,025 eV
- [[energia_microestado]] del estado 3: 0,050 eV
- [[temperatura]]: 290 K
- [[constante_boltzmann]] en eV/K: 8,62·10⁻⁵ eV/K
- Magnitudes buscadas: [[peso_boltzmann]], [[funcion_particion]], [[probabilidad_microestado]], [[razon_energia_termica]]

## Definición del sistema
El sistema se define como un conjunto discreto de tres microestados en equilibrio térmico. No se estudia una transición temporal entre estados, sino el reparto estadístico esperado si se repite muchas veces la observación. Cada [[energia_microestado]] representa el coste microscópico de ocupar ese estado. La [[temperatura]] fija la escala térmica disponible y [[constante_boltzmann]] convierte esa escala a unidades energéticas compatibles. La [[funcion_particion]] se construye con los tres estados, sin omitir ninguno, porque cada [[peso_boltzmann]] afecta a la normalización final.

## Modelo físico
Usamos el conjunto canónico con microestados discretos y [[temperatura]] constante. El estado de menor [[energia_microestado]] debe ser el más favorecido, pero los estados altos no desaparecen si la escala térmica es comparable con sus energías. El modelo supone equilibrio, estados accesibles conocidos y ausencia de degeneración adicional. La [[probabilidad_microestado]] final debe ser positiva y la suma de todas ellas debe ser uno.

## Justificación del modelo
La pregunta no requiere fuerzas, trayectorias ni dinámica temporal; requiere comparar accesibilidad estadística. Por eso el [[peso_boltzmann]] es la herramienta adecuada: penaliza una [[energia_microestado]] grande respecto a la escala marcada por [[temperatura]]. La [[razon_energia_termica]] permite decidir de antemano si los estados altos serán raros. Como los tres estados pertenecen al mismo sistema, sus pesos pueden sumarse en una única [[funcion_particion]] y usarse para normalizar.

## Resolución simbólica
Primero se calcula la escala térmica mediante [[constante_boltzmann]] y [[temperatura]], y con ella la [[razon_energia_termica]] de cada estado.

{{f:peso_boltzmann}}

Después se suman los pesos de todos los estados para obtener [[funcion_particion]].

{{f:funcion_particion_suma_pesos}}

Finalmente cada [[probabilidad_microestado]] se obtiene dividiendo el [[peso_boltzmann]] de ese estado entre [[funcion_particion]].

{{f:probabilidad_microestado}}

Como control conceptual, si la [[temperatura]] fuese mucho mayor, se esperaría que los pesos se acercasen.

{{f:limite_alta_temperatura}}

## Sustitución numérica
La escala térmica es aproximadamente 8,62·10⁻⁵ eV/K multiplicado por 290 K, es decir, unos 0,025 eV. Por tanto, las [[razon_energia_termica]] son aproximadamente 0, 1 y 2. Los [[peso_boltzmann]] relativos son entonces 1, 0,37 y 0,14. La [[funcion_particion]] aproximada vale 1,51. Las [[probabilidad_microestado]] resultan cerca de 0,66 para el estado bajo, 0,24 para el segundo y 0,09 para el tercero.

## Validación dimensional
La [[razon_energia_termica]] es adimensional porque compara una [[energia_microestado]] con la escala energética formada por [[constante_boltzmann]] y [[temperatura]]. El [[peso_boltzmann]] también es adimensional, ya que procede de una función exponencial de una cantidad sin unidad. La [[funcion_particion]] es una suma de cantidades adimensionales y por tanto también es adimensional. Cada [[probabilidad_microestado]] es un cociente entre dos cantidades adimensionales y debe quedar sin unidad, positiva y normalizada.

## Interpretación física
El resultado muestra que la [[temperatura]] elegida no es tan alta como para igualar todos los estados. La [[energia_microestado]] del segundo estado es comparable con la escala térmica, por eso su [[peso_boltzmann]] no desaparece, pero queda claramente por debajo del estado de menor energía. El tercer estado, con el doble de [[razon_energia_termica]], participa menos. La [[funcion_particion]] indica que el sistema no está congelado en un único microestado: hay contribuciones adicionales, aunque penalizadas. La [[probabilidad_microestado]] más alta corresponde al estado bajo, pero casi un tercio de las observaciones esperadas se reparte entre estados excitados. Físicamente, la escala térmica abre la puerta a estados de mayor [[energia_microestado]] sin hacerlos dominantes.

# Ejemplo de aplicación real
## Contexto
En un material molecular, dos conformaciones pueden tener diferente [[energia_microestado]]. A una [[temperatura]] dada, la conformación de menor energía suele ser más frecuente, pero la otra puede aparecer si la diferencia energética no supera demasiado la escala térmica. Este razonamiento se usa para estimar poblaciones relativas en química física, biofísica y materiales blandos, siempre que el sistema esté cerca del equilibrio.

## Estimación física
Supongamos dos conformaciones con diferencia de [[energia_microestado]] de 0,040 eV a una [[temperatura]] de 300 K. La escala térmica asociada a [[constante_boltzmann]] y [[temperatura]] es de unas 0,026 eV. La [[razon_energia_termica]] de la conformación alta es del orden de 1,5. Por tanto, su [[peso_boltzmann]] será menor que el de la conformación baja, pero no despreciable. La [[funcion_particion]] tendrá una contribución dominante y otra secundaria, y la [[probabilidad_microestado]] de la conformación alta puede estar en una escala de decenas de por ciento si no hay más estados competidores.

## Interpretación
La aplicación muestra que la [[funcion_particion]] no es un formalismo decorativo: permite traducir diferencias microscópicas de [[energia_microestado]] en poblaciones observables. Si aumenta la [[temperatura]], la conformación alta gana [[probabilidad_microestado]] porque su penalización térmica se debilita. Si disminuye la [[temperatura]], el sistema se concentra más en la conformación de menor [[energia_microestado]]. Este tipo de lectura evita decir simplemente “el estado bajo gana”; permite estimar cuánto gana y bajo qué condiciones el reparto puede cambiar.

