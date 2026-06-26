const e=`# Velocidad del sonido

## Contexto conceptual

El sonido necesita un medio material para propagarse: no existe en el vacío. Pero una vez en un medio, ¿a qué velocidad viaja? La respuesta no es trivial. Newton intentó calcularla teóricamente en el siglo XVII y obtuvo un valor un 18 % menor que el experimental. Laplace resolvió el problema un siglo después, al reconocer que las compresiones acústicas son adiabáticas, no isotérmicas. Este episodio histórico encierra la física esencial del leaf: la velocidad del sonido depende de la rigidez elástica del medio y de su inercia, y para los gases, la naturaleza termodinámica del proceso de compresión determina cuál de las dos magnitudes elásticas (módulo adiabático o isotérmico) es la correcta.

Entender [[v_son]] es condición necesaria para calcular longitudes de onda, tiempos de propagación, efectos Doppler, resonancias de tubos y cavidades, y diseñar sistemas sonar, técnicas de diagnóstico médico por ultrasonidos, y control de calidad industrial por ultrasonidos.

## 🟢 Nivel esencial

Cuando se golpea un diapasón, la perturbación de presión que genera se aleja de él en todas direcciones. La velocidad a la que se aleja esa perturbación es [[v_son]]: la velocidad del sonido en el medio. No es la velocidad a la que se mueven las moléculas del aire oscilando de un lado a otro; es la velocidad a la que viaja el frente de la perturbación, como la cresta de una ola en el mar.

[[v_son]] es una propiedad del medio, no de la fuente. Un cañón y una flauta producen sonidos muy diferentes, pero ambos viajan a la misma [[v_son]] en el mismo medio y a la misma temperatura. Lo que diferencia a ambas fuentes es la amplitud y la frecuencia, no la velocidad de propagación.

En el aire a temperatura ambiente (20 °C), [[v_son]] vale aproximadamente 343 m/s. Esto equivale a recorrer 1 km en algo menos de 3 segundos, lo que explica el desfase entre el relámpago (viaja a la velocidad de la luz, prácticamente instantáneo) y el trueno (viaja a [[v_son]]). Contar los segundos entre el relámpago y el trueno y dividir entre 3 da aproximadamente la distancia a la tormenta en kilómetros.

[[v_son]] depende del medio y de la temperatura. En agua, [[v_son]] ≈ 1480 m/s (casi 4.4 veces más rápido que en aire); en acero, [[v_son]] ≈ 5100 m/s (15 veces más que en aire). En el aire, [[v_son]] aumenta con la temperatura a razón de unos 0.6 m/s por cada grado Celsius.

> [!NOTE]
> La idea de que el sonido viaja más rápido en medios más densos es un error muy frecuente. El acero es miles de veces más denso que el aire y aun así transmite el sonido mucho más rápido, porque es también enormemente más rígido. Es la rigidez del medio, no su densidad, el factor que acelera el sonido.

## 🔵 Nivel formal

La física de la propagación acústica muestra que [[v_son]] resulta del equilibrio entre dos propiedades del medio: su rigidez (medida por el módulo de compresibilidad [[B_mod]]) y su inercia (medida por la densidad [[rho_med]]). La fórmula de Newton-Laplace expresa este equilibrio:

{{f:newton_laplace}}

Esta fórmula es válida para cualquier medio continuo. [[B_mod]] cuantifica cuánta presión hay que aplicar para comprimir el medio un 1 % en volumen; [[rho_med]] es la masa por unidad de volumen. Un medio más rígido (mayor [[B_mod]]) propaga el sonido más rápido; un medio más denso (mayor [[rho_med]]) lo propaga más lento, porque la mayor inercia dificulta la aceleración de las partículas.

Para un gas ideal, la fórmula se expresa en función de parámetros moleculares y termodinámicos:

{{f:v_gas_ideal}}

donde [[gamma_gas]] es el indice adiabatico, la constante universal de los gases se usa en unidades SI, [[T_abs]] es la temperatura absoluta en kelvin y [[M_mol]] es la masa molar del gas en kg/mol. Para aire seco ordinario, esta formula da una [[v_son]] cercana a 343 m/s a temperatura ambiente.

En el rango de temperaturas atmosféricas, la dependencia con la temperatura puede aproximarse de forma lineal:

{{f:v_son_temperatura_aire}}

donde T está en grados Celsius y el resultado es en m/s.

> [!TIP]
> La razón por la que [[v_son]] en un gas ideal no depende de la presión de equilibrio es sutil pero elegante: al aumentar la presión, [[B_mod]] (proporcional a la presión) y [[rho_med]] (también proporcional a la presión para temperatura fija) aumentan en la misma proporción, y el cociente [[B_mod]]/[[rho_med]] permanece constante. La presión cancela en el cociente.

## 🔴 Nivel estructural

El papel del índice adiabático [[gamma_gas]] en la fórmula de [[v_son]] es la clave de la corrección de Laplace. Newton había calculado [[v_son]] usando el módulo isotérmico del aire, obteniendo [[v_son]] = sqrt(P/[[rho_med]]) ≈ 280 m/s a 0 °C, un 18 % por debajo del valor experimental (331 m/s). El error de Newton era implícito: asumió que las compresiones acústicas eran lo suficientemente lentas para que el aire se mantuviera a temperatura constante (proceso isotérmico). Laplace reconoció que las oscilaciones acústicas son tan rápidas que no hay tiempo para que el calor fluya entre las regiones comprimidas (calientes) y rarefactadas (frías): el proceso es **adiabático**, no isotérmico. El módulo adiabático es [[gamma_gas]] veces el isotérmico, y la velocidad real es sqrt([[gamma_gas]]) ≈ 1.18 veces la predicción isotérmica, eliminando la discrepancia.

La independencia de [[v_son]] con la frecuencia en un gas ideal es una propiedad fundamental que merece atención. Significa que el sonido es **no dispersivo** en el aire a frecuencias audibles: todas las componentes de frecuencia de un sonido complejo (los armónicos de un instrumento musical) viajan exactamente a la misma [[v_son]] y llegan al oyente simultáneamente. Si el sonido fuera dispersivo, un oyente lejano escucharía los tonos graves antes o después que los agudos, y el timbre del instrumento cambiaría con la distancia. Este hecho es la base de que el sonido sea coherente en el espacio.

La dependencia de [[v_son]] con la temperatura tiene consecuencias físicas importantes más allá de la variación del 0.6 m/s/°C que se suele citar. En la atmósfera, la temperatura varía con la altitud (típicamente decrece con la altura en la troposfera, pero puede aumentar en la estratosfera). Esta variación de [[v_son]] con la altura causa la **refracción acústica**: el sonido no viaja en línea recta sino que se curva hacia las regiones de menor [[v_son]]. En noches frías, el aire es más frío cerca del suelo, [[v_son]] es menor allí, y el sonido se curva hacia abajo, lo que permite escuchar conversaciones o música a distancias mucho mayores de lo habitual. En días calurosos, el fenómeno se invierte y el sonido se curva hacia arriba, creando zonas de sombra acústica.

> [!WARNING]
> En medios solidos, la velocidad del sonido depende no solo del modulo de compresibilidad volumetrica sino tambien del modo de vibracion. Las ondas longitudinales leen una rigidez combinada de compresion y cizalla; las transversales leen solo la rigidez de corte. En fluidos, la rigidez de corte es nula y solo existen ondas longitudinales.

## Interpretación física profunda

El número de Mach de un móvil es la razón entre su velocidad y [[v_son]] en el medio circundante. Cuando un móvil se acerca a [[v_son]] (Mach 1), los frentes de onda que emite se acumulan en su frente y forman una onda de choque (boom sónico). Por encima de Mach 1, el modelo lineal de propagación acústica falla completamente: las ondas de choque son perturbaciones de presión no lineales que requieren tratamiento matemático distinto.

La velocidad del sonido también define el límite de comunicación en sistemas subacuáticos: el sonar activo emite pulsos acústicos y mide el tiempo de vuelo hasta el eco para calcular distancias. La precisión del sistema depende directamente de lo bien que se conozca [[v_son]] en las condiciones reales del medio (temperatura, salinidad y presión del agua a la profundidad de operación).

## Orden de magnitud

En aire ordinario, [[v_son]] esta cerca de 340 m/s; en agua ronda 1480 m/s; en acero longitudinal ronda 5100 m/s. Estos valores sirven como filtro inmediato: si un calculo atmosferico da decenas de metros por segundo o varios kilometros por segundo, casi siempre hay un problema de unidades, de temperatura absoluta o de modelo.

## Método de resolución personalizado

Para calcular [[v_son]] en distintos contextos:

- **Medio genérico**: usar la fórmula de Newton-Laplace con [[B_mod]] adiabático y [[rho_med]] del medio.
- **Gas ideal con parámetros termodinámicos**: usar la fórmula con [[gamma_gas]], R, [[T_abs]] y [[M_mol]]. Asegurarse de convertir la temperatura a kelvin.
- **Aire en condiciones atmosféricas**: usar la aproximación lineal para cálculos rápidos en el rango -20 °C a +50 °C.
- **Verificación**: comparar el resultado con los valores de referencia (aire ~340 m/s, agua ~1480 m/s, acero ~5100 m/s). Si el valor calculado difiere en más del 10 %, revisar unidades y la elección de módulo (isotérmico vs adiabático).

> [!TIP]
> Para recordar el orden de magnitud: [[v_son]] en aire es aproximadamente 340 m/s ≈ 1200 km/h ≈ 1/3 km/s. El truco de los 3 segundos por kilómetro para el rayo y el trueno viene directamente de este valor.

## Casos especiales y ejemplo extendido

En gases ligeros como helio, una [[M_mol]] menor eleva [[v_son]] de forma notable, por eso cambia el tono aparente de la voz. En mezclas humedas, la composicion efectiva tambien modifica la masa molar media. En solidos, en cambio, la pregunta dominante ya no es solo la temperatura: hay que identificar el modo elastico, porque las ondas longitudinales y de corte no leen la misma rigidez.

Como ejemplo extendido, una medida ultrasonica de espesor en acero usa una [[v_son]] calibrada para el modo longitudinal. Si se empleara por error una velocidad de corte, la distancia inferida seria demasiado pequena. La lectura correcta exige vincular medio, modo y velocidad antes de interpretar el tiempo de vuelo.

## Preguntas reales del alumno

**Si grito mas fuerte, el sonido llega antes?** No. Aumenta la amplitud y la intensidad, pero [[v_son]] sigue fijada por el medio mientras el regimen sea lineal.

**Por que el sonido viaja mas rapido en agua que en aire si el agua es mas densa?** Porque la rigidez volumetrica del agua crece mucho mas que su inercia. La densidad sola no decide la velocidad.

## Conexiones transversales y rutas de estudio

[[v_son]] es el vínculo entre los parámetros de onda (frecuencia, longitud de onda) y el medio. La relación lambda = [[v_son]] / f conecta la frecuencia del sonido con su longitud de onda en el medio, y determina el tamaño de los resonadores (tubos, cavidades, cuerdas) para cada nota. El leaf de efecto Doppler requiere comparar la velocidad de la fuente con [[v_son]] para calcular la frecuencia aparente. El leaf de resonancia en tubos muestra que las frecuencias naturales de un tubo son múltiplos de c/(2L) o c/(4L) según las condiciones de contorno, donde c es [[v_son]].

En los ultrasonidos médicos (ecografía), [[v_son]] en tejidos blandos (~1540 m/s) es el parámetro que calibra las distancias calculadas a partir de los tiempos de retorno del eco: si [[v_son]] no se conoce con precisión, las imágenes están distorsionadas. Conocer [[v_son]] y sus variaciones es por tanto un tema de física con implicaciones médicas directas.

## Síntesis final

La velocidad del sonido [[v_son]] en un medio es la raíz cuadrada del cociente entre la rigidez elástica del medio ([[B_mod]]) y su inercia ([[rho_med]]). En gases ideales, [[v_son]] depende solo de [[T_abs]], [[gamma_gas]] y [[M_mol]], y es independiente de la presión. La corrección de Laplace (factor [[gamma_gas]] en el módulo) resuelve la discrepancia histórica del 18 % predicha por Newton. En el aire, [[v_son]] aumenta 0.6 m/s por cada grado Celsius. Estos principios determinan el diseño de instrumentos musicales, sistemas sonar, equipos de ultrasonidos y protocolos de comunicación acústica subacuática.
`;export{e as default};
