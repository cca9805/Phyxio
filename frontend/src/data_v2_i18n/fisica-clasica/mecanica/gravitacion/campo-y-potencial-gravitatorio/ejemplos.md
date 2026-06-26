# Ejemplo tipo examen

## Enunciado
Una sonda de masa [[m]] orbita una masa fuente [[M]] con dos estados radiales bien definidos. El estado inicial se encuentra en [[ri]] y el estado final en [[rf]], con [[rf]] mayor que [[ri]]. Se pide analizar la evolucion del campo local y del estado energetico del sistema bajo referencia de potencial nulo en infinito. El objetivo no es solo obtener numeros, sino justificar que la lectura dinamica y la lectura energetica cuentan una historia fisica coherente.

## Datos
- Constante gravitatoria [[G]] en unidades SI.
- Masa fuente [[M]] conocida por datos de mision.
- Masa de prueba [[m]] conocida por hoja tecnica de la sonda.
- Radio inicial [[ri]] y radio final [[rf]] medidos desde el centro de la fuente.
- Campo local inicial [[gi]] estimado o medido para contraste.
- Campo local final [[gf]] estimado o medido para contraste.

## Definición del sistema
El sistema fisico incluye la fuente gravitatoria y la sonda como cuerpo de prueba. El entorno externo se modela como ausencia de interacciones disipativas relevantes durante el tramo analizado. La geometria se considera central y radial, por lo que cada estado puede describirse con una sola coordenada de distancia al centro. La referencia energetica se fija en infinito para mantener coherencia en signos de [[V]] y [[U]].

## Modelo físico
Se adopta el modelo clasico de campo central. Este modelo permite leer el problema en dos niveles complementarios. Primero, el nivel local de aceleracion con [[g]] para comparar condiciones entre inicio y final. Segundo, el nivel de estados energeticos con [[V]], [[U]], [[DeltaU]] y [[Wg]]. El cruce entre ambos niveles es necesario para validar que el resultado no sea solo algebraicamente correcto, sino fisicamente defendible.

## Justificación del modelo
La eleccion del modelo se justifica porque la fuente se aproxima por simetria esferica efectiva y porque el rango de velocidades no exige regimen relativista. Ademas, la tarea compara dos estados radiales y pide lectura energetica. En ese contexto, trabajar con variaciones de potencial y de energia potencial es mas robusto que usar solo una lectura local de aceleracion. Se mantiene trazabilidad adicional al registrar [[gi]] y [[gf]] para verificar tendencia dinamica compatible con el cambio radial.

## Resolución simbólica
Primero se establece la intensidad del campo local en un estado radial representativo.

{{f:campo_puntual}}

Despues se establece el potencial gravitatorio en referencia de infinito.

{{f:potencial_puntual}}

Luego se obtiene energia potencial para la sonda en cada estado.

{{f:energia_desde_potencial}}

Con estados inicial y final definidos, se calcula variacion energetica.

{{f:cambio_energia_potencial}}

Finalmente se relaciona trabajo gravitatorio con cambio de energia potencial.

{{f:trabajo_gravitatorio}}

## Sustitución numérica
En sustitucion numerica se siguen tres controles. Control uno, todas las magnitudes en SI. Control dos, radios etiquetados correctamente como estado inicial y final. Control tres, signos compatibles con referencia adoptada.

Con datos tipicos de transferencia orbital, el calculo muestra que [[g]] en el estado final es menor que en el inicial, lo cual es coherente con mayor distancia radial. La lectura de [[V]] en el estado final resulta menos negativa que en el estado inicial, lo que confirma que el pozo potencial es menos profundo al alejarse. La evaluacion de [[DeltaU]] arroja signo positivo en esta maniobra, indicando incremento de energia potencial. Al aplicar la relacion de trabajo, el [[Wg]] asociado al campo sobre la sonda en ese tramo resulta con signo opuesto a [[DeltaU]], tal como exige el marco conservativo utilizado.

## Análisis de sensibilidad
Si [[M]] se incrementa en un porcentaje fijo, tanto la intensidad de campo como la profundidad del potencial cambian de forma proporcional en modulo para el mismo radio. Si el cambio se aplica sobre [[r]], el impacto no es lineal. Pequenas reducciones de radio pueden producir variaciones notables en [[g]] y en energia por la dependencia radial del modelo.

Tambien es sensible la interpretacion al orden de estados. Intercambiar [[ri]] y [[rf]] cambia el signo de [[DeltaU]] y cambia la lectura fisica de trabajo. Por eso conviene fijar la linea temporal del problema antes de sustituir. En evaluaciones avanzadas, este punto separa una solucion mecanica de una solucion fisicamente madura.

## Validación dimensional
La validacion dimensional confirma consistencia entre ecuaciones y magnitudes. [[g]] conserva dimension de aceleracion. [[V]] conserva dimension de energia por unidad de masa. [[U]], [[DeltaU]] y [[Wg]] conservan dimension de energia total. Si una de esas dimensiones falla, el error suele venir de conversion de distancia o de sustitucion cruzada incorrecta entre [[M]] y [[m]].

Una validacion adicional es de tendencia. Si [[rf]] supera [[ri]], la intensidad local [[gf]] debe ser menor que [[gi]] en magnitud. Si esa tendencia no aparece, hay una inconsistencia de datos o de modelo.

## Interpretación física
Este resultado implica que la sonda avanza hacia un estado energetico menos ligado al aumentar radio. La disminucion de [[g]] de [[gi]] a [[gf]] confirma que la influencia local de la fuente se debilita con distancia. El incremento de [[U]] y la lectura de [[DeltaU]] positiva son coherentes con la idea de elevar el sistema dentro del pozo gravitatorio. Por tanto, la resolucion no se limita a obtener un valor numerico; entrega una narrativa causal completa entre geometria radial, aceleracion local y estado energetico.

# Ejemplo de aplicación real

## Contexto
Una agencia espacial planifica una maniobra de transferencia para un satelite de observacion. El equipo debe decidir la ventana de encendido y el presupuesto energetico minimo para mover el satelite desde una orbita de estacionamiento a una orbita operativa mas alta. La decision requiere leer campo y potencial de manera integrada para no sobredimensionar combustible ni comprometer estabilidad.

## Estimación física
Con parametros de mision tipicos, el modelo permite estimar de forma preliminar que el salto radial produce reduccion apreciable del campo local y aumento de energia potencial del satelite. La escala energetica del cambio se obtiene de [[DeltaU]], mientras la lectura operacional de trabajo se obtiene con [[Wg]]. En orden de magnitud, una variacion moderada de radio en entorno planetario puede implicar cambios energeticos muy relevantes para la planificacion de impulsos.

## Interpretación
La estimacion muestra que una lectura de campo aislada no basta para decidir combustible. Tambien se necesita lectura de potencial y de energia para evaluar costo total de transferencia. Esto implica que la arquitectura de control de mision debe combinar sensores de estado orbital con modelos energeticos coherentes. Si se ignora ese cruce, el sistema puede aprobar una maniobra aparentemente viable en dinamica local, pero deficitaria en balance energetico global. La leccion tecnica es clara: en operaciones reales, [[g]], [[V]], [[DeltaU]] y [[Wg]] deben formar una cadena unica de interpretacion.
