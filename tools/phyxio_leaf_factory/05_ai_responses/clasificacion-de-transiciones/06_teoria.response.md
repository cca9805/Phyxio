# ------------------------------------------------------------
# Phyxio Leaf Factory | AI Markdown Response
# ------------------------------------------------------------
# Leaf ID: clasificacion-de-transiciones
# Target response file: teoria.md
#
# Pega aquí la respuesta markdown devuelta por la IA.
# No pegues explicaciones, solo el contenido markdown válido.
# ------------------------------------------------------------
# PENDING_AI_RESPONSE

# Clasificacion de transiciones
## Contexto conceptual
Una transición de fase no se identifica solo porque “algo cambia” al variar la [[temperatura]]. La clave es decidir qué cambia, si lo hace de forma continua o brusca, y qué magnitud revela mejor la reorganización interna del sistema. La [[temperatura_critica]] marca el entorno donde dos fases compiten o una fase pierde estabilidad. La [[energia_libre_gibbs]] permite comparar qué fase domina, mientras el [[parametro_de_orden]] actúa como una firma macroscópica de simetría, estructura u organización. Clasificar una transición consiste en leer discontinuidades, saltos y comportamientos críticos sin confundir una curva suave con un cambio físico profundo.

## 🟢 Nivel esencial
La clasificación de transiciones pregunta si el sistema cambia de fase mediante un salto brusco o mediante una transformación continua. En una transición de primer orden aparece intercambio de [[calor_latente]] y un [[salto_entropia]] finito: el sistema absorbe o libera energía mientras coexisten fases cerca de la [[temperatura_critica]]. Además puede existir un [[salto_parametro_de_orden]], señal de que la organización interna cambia de golpe. En una transición continua no hay [[calor_latente]] finito, pero el [[parametro_de_orden]] se anula suavemente y ciertas respuestas pueden volverse muy grandes. Por eso no basta mirar la forma externa del material: hay que comparar [[energia_libre_gibbs]], discontinuidades termodinámicas y el comportamiento del [[parametro_de_orden]]. La clasificación convierte una observación de laboratorio en una lectura física ordenada y evita confundir apariencia, ruido e historia térmica.
## 🔵 Nivel formal
Formalmente se parte de la [[energia_libre_gibbs]], porque sus derivadas respecto a variables de control contienen entropía, volumen y otras respuestas. El [[orden_de_transicion]] indica la primera derivada termodinámica que deja de ser regular al cruzar la [[temperatura_critica]].

{{f:criterio_derivada_energia_libre}}

Para transiciones de primer orden, el diagnóstico más directo es el [[calor_latente]] asociado al [[salto_entropia]] molar. Si el cambio ocurre a [[temperatura_critica]], un [[salto_entropia]] finito implica intercambio energético finito durante la coexistencia de fases.

{{f:salto_entropia_latente}}

La variable estructural se resume con el [[parametro_de_orden]]. Si su valor cambia de forma abrupta entre las dos fases, el [[salto_parametro_de_orden]] actúa como señal de discontinuidad macroscópica.

{{f:salto_parametro_orden}}

En una transición continua, en cambio, el [[parametro_de_orden]] suele aproximarse a cero mediante una ley crítica controlada por [[exponente_critico_beta]] y [[amplitud_critica]].

{{f:exponente_parametro_orden}}

Estas relaciones no compiten entre sí: forman una cadena de diagnóstico. Primero se mira si hay salto termodinámico, después si el [[parametro_de_orden]] salta o se anula de forma continua, y finalmente se asigna el [[orden_de_transicion]] con el criterio de la [[energia_libre_gibbs]]. Así, la clasificación combina discontinuidades en magnitudes termodinámicas y continuidad o salto del orden interno.

El resultado no es una etiqueta aislada: debe concordar con todas las señales medidas simultáneamente.
## 🔴 Nivel estructural
El modelo supone que el sistema puede describirse mediante estados de equilibrio o cuasiequilibrio cerca de la [[temperatura_critica]], con presión, composición y restricciones externas suficientemente controladas. También supone que la [[energia_libre_gibbs]] representa el potencial adecuado para comparar fases y que el [[parametro_de_orden]] elegido distingue realmente las fases relevantes. Si se escoge una magnitud que no cambia entre fases, la clasificación se vuelve ciega: el gráfico puede parecer suave aunque exista una reorganización microscópica.

La invariante central es que la fase estable minimiza la [[energia_libre_gibbs]] bajo las condiciones impuestas. Una transición de primer orden aparece cuando dos mínimos compiten y el sistema salta de uno a otro, produciendo [[calor_latente]], [[salto_entropia]] o [[salto_parametro_de_orden]]. Una transición continua conserva la continuidad del [[parametro_de_orden]] pero puede mostrar singularidades en susceptibilidades o derivadas superiores; por eso una ausencia de salto visible no significa ausencia de transición.

Los límites de validez son importantes. Lejos de la [[temperatura_critica]], la ley crítica del [[parametro_de_orden]] deja de ser fiable; demasiado cerca, fluctuaciones, tamaño finito e impurezas pueden redondear discontinuidades. En muestras pequeñas, un [[salto_entropia]] puede aparecer como una banda suave; en materiales reales, histéresis, nucleación y defectos desplazan el punto observado respecto a la [[temperatura_critica]] ideal. Si hay sobreenfriamiento, coexistencia metastable o transformación lenta, la lectura debe separar cinética y termodinámica.

Los casos frontera son especialmente traicioneros. Una transición débilmente de primer orden puede tener [[calor_latente]] pequeño y parecer continua. Una transición continua con exponente crítico bajo puede mostrar una caída rápida del [[parametro_de_orden]] y parecer brusca. La representación Svg del leaf debe leerse como mapa de decisión: primero identifica continuidad o salto, después comprueba [[salto_entropia]], [[calor_latente]] y [[salto_parametro_de_orden]], y finalmente relaciona la evidencia con el [[orden_de_transicion]]. El modelo falla si se clasifica solo por apariencia visual, si no se mide la magnitud conjugada o si se mezclan fases fuera de equilibrio. También falla cuando se extrapola una ley crítica fuera de su ventana experimental o cuando se trata una transición redondeada como una discontinuidad perfecta.

Como regla de frontera, una clasificación sólida requiere reproducibilidad al repetir el ciclo térmico. Si el supuesto salto cambia mucho entre ensayos, la evidencia debe tratarse como provisional y no como rasgo universal del material.
## Interpretación física profunda
El [[calor_latente]] no es “calor extra” sin más: es la huella energética de reorganizar una fase en otra a [[temperatura_critica]]. El [[salto_entropia]] mide cuánto cambia el número de configuraciones accesibles al cruzar la transición. El [[parametro_de_orden]] condensa una diferencia cualitativa, por ejemplo magnetización, densidad, orientación o simetría. Su salto o desaparición continua dice si el sistema reorganiza su estructura con ruptura brusca o mediante pérdida progresiva de orden. La [[energia_libre_gibbs]] funciona como tablero de decisión: no describe cada átomo, pero sí qué fase es más estable. La clasificación física nace al conectar esas piezas, no al memorizar nombres.

## Orden de magnitud
En una transición de primer orden ordinaria, el [[calor_latente]] molar puede estar entre 10² y 10⁴ J/mol, aunque depende del material. Un [[salto_entropia]] de 1 a 100 J/(mol·K) ya es detectable calorimétricamente. Cerca de la [[temperatura_critica]], intervalos relativos como |[[temperatura]] - [[temperatura_critica]]|/[[temperatura_critica]] < 10⁻² pueden mostrar régimen crítico, pero impurezas y tamaño finito redondean la señal. Un [[salto_parametro_de_orden]] pequeño no debe descartarse sin estimar resolución experimental.

## Método de resolución personalizado
Primero fija la variable de control, normalmente [[temperatura]], y localiza la [[temperatura_critica]]. Después identifica qué fases se comparan y qué [[parametro_de_orden]] las distingue. Tercero, busca evidencia de discontinuidad: [[calor_latente]], [[salto_entropia]] o [[salto_parametro_de_orden]]. Cuarto, si no hay salto finito, analiza si el [[parametro_de_orden]] se anula con una ley crítica usando [[exponente_critico_beta]] y [[amplitud_critica]]. Quinto, interpreta el resultado con la [[energia_libre_gibbs]]: continuidad de la función no basta, importan sus derivadas. Por último, comprueba si histéresis, tamaño finito o impurezas alteran la clasificación.

## Casos especiales y ejemplo extendido
Imagina un material que cambia de fase en torno a [[temperatura_critica]]. Si al cruzar esa zona absorbe [[calor_latente]] y su [[parametro_de_orden]] pasa de un valor finito a otro distinto, el diagnóstico apunta a primer orden. Si no hay [[calor_latente]] medible, pero el [[parametro_de_orden]] disminuye gradualmente hasta anularse, conviene usar una ley crítica. En un caso débilmente de primer orden, el [[salto_entropia]] puede ser tan pequeño que un sensor poco preciso lo suaviza. En un experimento real se repite el barrido al calentar y enfriar: si aparece histéresis, la cinética puede ocultar la clasificación termodinámica pura.

## Preguntas reales del alumno
¿Una transición continua significa que nada cambia de golpe? No necesariamente: significa que el [[parametro_de_orden]] no presenta salto finito, aunque algunas respuestas pueden divergir.

¿Si hay [[calor_latente]], siempre es primer orden? En el marco termodinámico usual, sí: el [[calor_latente]] finito implica [[salto_entropia]] y discontinuidad de una derivada de la [[energia_libre_gibbs]].

¿El [[orden_de_transicion]] es siempre un número observable directamente? No. Es una categoría inferida a partir de discontinuidades o singularidades.

¿Por qué importa el [[parametro_de_orden]]? Porque traduce un cambio microscópico de simetría u organización en una magnitud macroscópica medible.

## Conexiones transversales y rutas de estudio
Este leaf conecta con calorimetría, equilibrio de fases, teoría de Landau, fenómenos críticos y mecánica estadística. Para avanzar, conviene estudiar [[energia_libre_gibbs]], potenciales termodinámicos, estabilidad, susceptibilidades y escalado crítico. La clasificación prepara el terreno para entender transiciones magnéticas, superconductividad, mezclas binarias y cambios líquido-gas.

## Síntesis final
Clasificar una transición de fase es leer cómo cambian [[energia_libre_gibbs]], sus derivadas y el [[parametro_de_orden]] alrededor de la [[temperatura_critica]]. El diagnóstico físico combina saltos, continuidad, escalas críticas y límites experimentales.
