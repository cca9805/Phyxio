const a=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un vehiculo de pruebas describe una curva circular horizontal de radio [[r]] constante. El equipo de ingenieria quiere comprobar si la fuerza lateral disponible en los neumaticos es suficiente para sostener la trayectoria sin deslizamiento. Se conoce la masa [[m]], la rapidez tangencial [[v]] y el periodo de una vuelta [[T]] medido por telemetria. El objetivo es estimar la aceleracion centripeta [[ac]], la velocidad angular [[omega]], la resultante radial [[Frad]] y el modulo de la fuerza centripeta [[Fc]], y luego interpretar si el resultado es fisicamente coherente con la maniobra observada.\r
\r
El problema esta disenado para obligar a conectar la descripcion lineal y la angular del movimiento, y para recordar que la fuerza centripeta no es una fuerza nueva, sino la manera de nombrar la resultante radial de fuerzas reales que apuntan al centro de curvatura.\r
\r
## Datos\r
\r
- [[m]] = 1200 kg\r
- [[r]] = 50 m\r
- [[v]] = 20 m/s\r
- [[T]] = 15.7 s\r
- [[pi]] = 3.14159\r
\r
Ademas, el instructor pide comparar dos rutas de calculo: una usando [[v]] y otra usando [[omega]]. El criterio de calidad es que ambas rutas den el mismo orden de magnitud para [[ac]] y para la fuerza radial requerida.\r
\r
## Definición del sistema\r
\r
Se modela al vehiculo como particula en una trayectoria circular plana, con radio fijo y sin cambio relevante de rapidez durante la vuelta medida. Se adopta un eje radial positivo hacia el centro de la curva. Bajo esta convencion, la resultante radial [[Frad]] representa la suma de las fuerzas reales proyectadas en la direccion radial, y su modulo coincide con [[Fc]] cuando el movimiento se mantiene circular con radio constante.\r
\r
No se agrega una "fuerza centripeta" al diagrama de cuerpo libre como si fuera una interaccion extra. En el diagrama real aparecen friccion lateral, normal, peso y posibles componentes geometricas de la pista; la combinacion radial de esas fuerzas es la que produce el cambio continuo de direccion de la velocidad.\r
\r
## Modelo físico\r
\r
Para este caso se usan seis relaciones nucleares del leaf.\r
\r
{{f:relacion_omega_periodo}}\r
\r
{{f:relacion_v_omega}}\r
\r
{{f:aceleracion_centripeta_v}}\r
\r
{{f:aceleracion_centripeta_omega}}\r
\r
{{f:newton_radial}}\r
\r
{{f:fuerza_centripeta_modulo}}\r
\r
Estas relaciones no son redundantes: unas permiten convertir descripcion temporal en angular, otras conectan cinematica con dinamica, y otras verifican coherencia entre rutas de calculo independientes.\r
\r
## Justificación del modelo\r
\r
El modelo es apropiado porque el radio [[r]] se mantiene aproximadamente constante en la zona analizada y la rapidez [[v]] no presenta oscilaciones fuertes. En esa situacion, la aceleracion radial es el efecto dominante para explicar la curvatura de la trayectoria, y las ecuaciones del movimiento circular capturan de forma directa la fisica principal.\r
\r
Si hubiera variaciones bruscas de rapidez, derrape sostenido o radio no constante, seria necesario extender el modelo. Aqui no se observan esas senales, asi que la hipotesis de movimiento circular con radio fijo es suficiente para estimar la exigencia lateral.\r
\r
## Resolución simbólica\r
\r
Primero se obtiene [[omega]] a partir de [[T]] y [[pi]] mediante la relacion periodo-angulo. Luego se puede calcular [[v]] con la relacion lineal-angular y comprobar que coincide con el dato experimental dentro del error de medicion.\r
\r
Con una ruta, [[ac]] se obtiene desde [[v]] y [[r]] usando la expresion cuadratica en rapidez. Con la otra ruta, [[ac]] se obtiene desde [[omega]] y [[r]]. Ambas deben converger porque representan la misma aceleracion radial escrita con variables distintas.\r
\r
Despues, la dinamica radial se cierra con la segunda ley en direccion radial para obtener [[Frad]]. Finalmente, el modulo [[Fc]] se calcula con la expresion combinada de masa, rapidez y radio. Si todo esta consistente, [[Frad]] y [[Fc]] quedan del mismo orden y con unidades de newton.\r
\r
## Sustitución numérica\r
\r
Al sustituir los datos, el valor de [[omega]] queda cercano a 0.40 rad/s y la comprobacion [[v]]-[[omega]]-[[r]] resulta coherente con la rapidez medida. La aceleracion [[ac]] queda alrededor de 8 m/s^2 por ambas rutas de calculo.\r
\r
Con [[m]] y [[ac]], la resultante radial [[Frad]] queda cerca de 9600 N. Al usar la expresion de [[Fc]] con [[m]], [[v]] y [[r]], el valor vuelve a quedar en torno al mismo nivel, lo que respalda la coherencia interna del procedimiento.\r
\r
La lectura numerica final no debe reportarse como simple "numero final". Lo importante es que la maniobra exige una fuerza lateral del orden de diez kilonewton, compatible con un giro cerrado a 20 m/s para un vehiculo de ese peso.\r
\r
## Validación dimensional\r
\r
La relacion de [[omega]] con [[T]] entrega una unidad temporal inversa, como corresponde a rad/s. La expresion de [[ac]] basada en [[v]] y [[r]] produce m/s^2. La ley radial con [[m]] y [[ac]] produce newton para [[Frad]], y la formula de [[Fc]] reproduce la misma dimension dinamica.\r
\r
Este chequeo dimensional tiene valor didactico concreto: evita errores comunes como usar diametro en lugar de radio, mezclar km/h con m/s o interpretar [[omega]] en rpm sin conversion previa. Si la dimension no cierra, el resultado no es fisicamente interpretable aunque la algebra parezca correcta.\r
\r
## Interpretación física\r
\r
El resultado indica que para sostener ese giro, el sistema necesita una resultante radial importante dirigida al centro. Esa exigencia no depende de una "fuerza misteriosa" adicional: depende de la combinacion real de fuerzas de contacto capaces de curvar la velocidad del vehiculo.\r
\r
La conclusion central del leaf se ve con claridad: a igual [[r]], aumentar [[v]] incrementa mucho la demanda radial. Por eso la seguridad en curva cambia tan rapido con la rapidez, incluso cuando la variacion de velocidad parece moderada para el conductor.\r
\r
Tambien se refuerza la diferencia entre descripcion cinematica y dinamica. [[ac]] describe cuanto se curva la velocidad por segundo; [[Frad]] y [[Fc]] describen la causa mecanica necesaria para producir esa curvatura.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En una planta de envasado, una mesa giratoria distribuye frascos hacia varias estaciones. El equipo de mantenimiento detecta que algunos frascos se deslizan hacia afuera cuando la linea aumenta la productividad. La pregunta tecnica no es solo "a que velocidad gira la mesa", sino si la resultante radial requerida supera el margen de adherencia disponible entre base y frasco.\r
\r
Se dispone de masa promedio por frasco, radio de ubicacion y periodo de giro de la mesa. La estrategia es estimar [[omega]], [[ac]] y la fuerza radial necesaria para distintas cadencias de produccion, y asi decidir un rango operativo seguro sin perdida de unidades.\r
\r
## Estimación física\r
\r
Con periodos largos, [[omega]] y [[ac]] son moderados, y la adherencia disponible alcanza para sostener la trayectoria. Al reducir el periodo para producir mas, [[omega]] aumenta y la aceleracion radial exigida crece de forma no lineal en la demanda de fuerza.\r
\r
La lectura operativa es inmediata: existe un umbral de giro a partir del cual la mesa deja de transportar con seguridad. Ese umbral no se adivina; se estima con las mismas relaciones del leaf y se valida con pruebas controladas.\r
\r
## Interpretación\r
\r
Este caso muestra que el concepto de fuerza centripeta es una herramienta de diseno de proceso, no un ejercicio aislado. Permite traducir decisiones de produccion en exigencias mecanicas cuantificables. Tambien muestra por que combinar descripciones angular y lineal mejora la trazabilidad tecnica: mantenimiento suele medir periodos, mientras seguridad y calidad suelen hablar en terminos de fuerzas y aceleraciones.\r
\r
Cuando el operador entiende esa cadena causal, puede ajustar velocidad de linea con criterio fisico, evitando tanto perdidas por deslizamiento como paradas innecesarias por exceso de conservadurismo.\r
`;export{a as default};
