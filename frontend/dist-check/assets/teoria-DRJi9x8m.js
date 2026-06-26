const e=`# Formulación diferencial de las ecuaciones de Maxwell

## Contexto conceptual
Las ecuaciones de Maxwell representan la unificación definitiva del electromagnetismo clásico, integrando bajo un mismo marco teórico la electricidad, el magnetismo y la óptica. Mientras que en su formulación integral describen el comportamiento global de los campos a través de superficies y trayectorias cerradas, la formulación diferencial nos permite descender al nivel de cada punto individual del espacio. Esta perspectiva es fundamental para la física teórica y la ingeniería, ya que explica cómo las fuentes generan campos en su vecindad inmediata y cómo esos campos se propagan e interactúan en regiones infinitesimales. El paso de lo integral a lo diferencial es una evolución conceptual hacia la idea de campo local como una entidad física con dinámica propia, esencial para entender las telecomunicaciones modernas. La potencia de este enfoque radica en su capacidad para describir la realidad de forma local y causal, eliminando la necesidad de recurrir a la acción a distancia instantánea que desconcertaba a los físicos de épocas anteriores. El campo no es una mera abstracción, sino una sustancia física que reside en el espacio y transporta información.

## 🟢 Nivel esencial
Para entender la descripción local sin cálculos complejos, imaginemos que los campos eléctrico [[E]] y magnético [[B]] son como fluidos invisibles que llenan el espacio. En cada punto, por pequeño que sea, podemos hacernos dos preguntas que definen la realidad: ¿Hay algo aquí creando o absorbiendo el fluido? y ¿Está el fluido girando alrededor de este punto?

La primera pregunta analiza la expansión. Si en un punto el campo eléctrico [[E]] tiende a abrirse hacia afuera, hay una fuente expulsando líneas. Si tiende a cerrarse, hay un sumidero. Esto indica que la tendencia de apertura en un punto es proporcional a la densidad de carga [[rho]] eléctrica situada exactamente allí. Es una conexión de vecindad inmediata: la carga perturba el medio en su propio punto, y esa perturbación se extiende luego por el universo. Es como observar el agua brotando de una fuente; el flujo nos dice dónde está el grifo. En el magnetismo, las líneas no nacen ni mueren, lo que significa que no existen puntos de creación aislados para el campo [[B]].

La segunda pregunta analiza el giro local. Si el campo parece "remolinar" alrededor de un punto, existe una rotación. El campo [[E]] empieza a girar si el campo [[B]] cercano cambia con el tiempo. Del mismo modo, el campo [[B]] puede girar si hay un flujo de carga [[J]] o si el campo [[E]] varía. Esta danza de giros y flujos locales mantiene viva la interacción electromagnética incluso en el vacío, permitiendo que la energía se propague como luz. Es esta rotación punto a punto la que permite que la interacción "salte" de un lugar al siguiente sin necesidad de un soporte material, creando una cadena infinita de inducciones mutuas que atraviesa el cosmos.

## 🔵 Nivel formal
La formulación diferencial se basa en el operador nabla (\\(\\nabla\\)), que actúa sobre los campos vectoriales [[E]] y [[B]]. Este operador condensa información sobre las derivadas espaciales, permitiendo escribir las leyes físicas de forma compacta. Además de las leyes fundamentales, existen consecuencias estructurales que rigen la conservación y la propagación. Las ecuaciones fundamentales y sus derivadas directas que definen el núcleo del leaf son:

1. **Ley de Gauss para la electricidad**: Relaciona [[divE]] con [[rho]] y [[epsilon0]].
{{f:gauss_local_e}}

2. **Ley de Gauss para el magnetismo**: Establece que [[divB]] es nula.
{{f:gauss_local_b}}

3. **Ley de Faraday-Lenz**: Relaciona [[curlE]] con la variación temporal [[dB_dt]].
{{f:faraday_local}}

4. **Ley de Ampère-Maxwell**: Relaciona [[curlB]] con [[J]] y la variación temporal [[dE_dt]], mediadas por [[mu0]].
{{f:ampere_local}}

5. **Ecuación de continuidad (Conservación de la carga)**: Relaciona [[divJ]] con la variación de [[rho]].
{{f:continuidad_carga}}

6. **Ecuación de ondas (Propagación en el vacío)**: Relaciona el [[laplacianE]] con la variación temporal segunda del campo.
{{f:onda_electromagnetica}}

7. **Definición de corriente total**: Suma de corrientes reales y de desplazamiento.
{{f:definicion_corriente_maxwell}}

Estas expresiones forman un sistema de ecuaciones en derivadas parciales acopladas. Su resolución permite encontrar los campos en cualquier región si conocemos las fuentes y las condiciones en las fronteras. El hecho de que la conservación de la carga y la propagación de la luz a velocidad [[c]] surjan directamente de las cuatro leyes principales es uno de los mayores logros de la física teórica, demostrando la consistencia interna y la belleza matemática del edificio de Maxwell. Cada término tiene una interpretación física precisa: la fuente, la inducción, la corriente de desplazamiento y la conservación.

## 🔴 Nivel estructural
Matemáticamente, la transición entre la formulación integral y la diferencial se realiza mediante los teoremas de Gauss y Stokes. El primero convierte el flujo a través de una superficie en la integral de la divergencia, mientras el segundo relaciona la circulación con el flujo del rotacional. Se asume que los campos son funciones continuas y diferenciables en el dominio de interés. En interfaces entre materiales, la forma diferencial se complementa con condiciones de contorno que describen el salto de las componentes normales y tangenciales del campo. Esto es vital para entender la reflexión de la luz en un espejo o la refracción en un cristal.

La importancia de la formulación diferencial reside en la causalidad local. Con estas ecuaciones, entendemos que la realidad funciona mediante interacciones locales: una carga solo afecta al campo en su vecindad. Esa perturbación viaja punto a punto a través del espacio hasta alcanzar otra entidad. El campo es un objeto físico real que transporta energía y momento. Esta visión explica el retardo en las comunicaciones espaciales o la presión de radiación solar que impulsa las velas estelares en el vacío profundo. La estructura del espacio-tiempo mismo parece estar diseñada para albergar estas relaciones diferenciales.

En regiones libres de fuentes externas (donde el valor de las densidades es nulo), los campos se propagan por el vacío como una perturbación que viaja a la velocidad de la luz [[c]], cuyo valor se deduce de las constantes electromagnéticas [[epsilon0]] y [[mu0]]. Esta unificación sentó las bases de la relatividad especial, al aparecer [[c]] como una constante universal independiente del estado de movimiento de la fuente o del observador, desafiando la mecánica de Newton y cambiando nuestra concepción del tiempo y el espacio para siempre.

## Interpretación física profunda
La descripción diferencial permite un análisis de la dinámica de campos inaccesible para la forma integral. Mientras que las integrales nos dicen qué ocurre en promedio sobre una región, las ecuaciones diferenciales nos revelan la estructura íntima de la onda. Por ejemplo, permiten descubrir que en una onda electromagnética, los campos [[E]] y [[B]] están en fase y son perpendiculares entre sí, intercambiando energía continuamente. Este mecanismo de auto-sustentación es lo que permite que la luz de galaxias lejanas llegue a nuestros telescopios tras viajar miles de millones de años por el vacío absoluto, sin degradarse ni detenerse. Es el triunfo de la localidad sobre la acción a distancia.

## Orden de magnitud
En el mundo atómico, las densidades de carga [[rho]] son enormes (cercanas a \\(10^{18}\\) C/m³), generando divergencias de campo eléctrico [[divE]] altísimas que mantienen a los electrones ligados al núcleo. A escala macroscópica, la materia es casi neutra y la divergencia media suele ser despreciable. En tecnología de gigahercios (\\(10^9\\) Hz), el término de corriente de desplazamiento basado en [[dE_dt]] es el factor dominante, permitiendo que las señales móviles se propaguen a través de paredes y obstáculos sin necesidad de cables físicos, conectando el mundo de forma invisible pero matemáticamente predecible.

## Método de resolución personalizado
1. **Identificar simetrías locales**: Expresar el operador nabla en el sistema de coordenadas adecuado (esféricas, cilíndricas o cartesianas) para simplificar las derivadas espaciales.
2. **Aplicar la ley de Gauss local**: Calcular la divergencia [[divE]] para determinar la distribución espacial de fuentes de carga [[rho]] en la región de interés.
3. **Analizar el régimen dinámico**: Verificar si las derivadas temporales [[dE_dt]] y [[dB_dt]] son significativas comparadas con los términos estáticos.
4. **Verificar condiciones de contorno**: En interfaces entre distintos medios (usando [[epsilon0]] y [[mu0]] específicos), conectar las soluciones regionales asegurando la continuidad.

## Casos especiales y ejemplo extendido
Un caso fundamental es la propagación de una onda plana en el vacío. Demuestra que los campos [[E]] y [[B]] deben ser perpendiculares entre sí y a la dirección de avance. La precisión de la formulación diferencial es tal que permite describir la luz en fibras ópticas con exactitud milimétrica, calculando la atenuación y la dispersión que limitan la velocidad de transmisión de datos.

## Preguntas reales del alumno
1. **¿Por qué usar derivadas si las integrales parecen más fáciles?** Porque permiten simulaciones detalladas punto a punto, esenciales para diseñar la microelectrónica moderna donde cada nanómetro cuenta.
2. **¿Qué es la "corriente de desplazamiento"?** No es un flujo de electrones, sino un término proporcional a [[dE_dt]] que indica que un campo eléctrico variable tiene efectos magnéticos.
3. **¿Existen los monopolos magnéticos?** Hasta la fecha, no hay evidencia experimental; la divergencia [[divB]] es siempre nula.

## Conexiones transversales y rutas de estudio
- **Cálculo Multivariable**: Dominio indispensable de los operadores diferenciales y el análisis vectorial.
- **Óptica Electromagnética**: Estudio del comportamiento de la luz como una solución directa de las leyes de Maxwell.
- **Relatividad Especial**: Maxwell escribió las primeras ecuaciones del universo que resultaron ser intrínsecamente relativistas.

## Síntesis final
La formulación diferencial de Maxwell es el lenguaje fundamental del universo electromagnético. Al convertir leyes globales en relaciones locales, nos otorga el poder de manipular la realidad a escalas ínfimas, unificando toda la luz y electricidad que definen nuestra civilización tecnológica.
`;export{e as default};
