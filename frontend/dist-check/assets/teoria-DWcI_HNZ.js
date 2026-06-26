const e=`# Resistencias en serie

## Contexto conceptual
Una asociacion en serie es una topologia donde todos los elementos comparten una sola trayectoria de corriente. En esta situacion la misma [[I]] recorre cada componente, mientras que la fuente [[Vt]] se reparte en caidas locales [[Vi]]. Este tema es central porque conecta ideas de ley de Ohm, balance de malla y diseno basico de divisores de tension. Cuando un estudiante domina serie, puede avanzar con seguridad a redes mixtas y a leyes de Kirchhoff con varias ramas.

Desde la mirada fisica, la serie no es solo una suma de piezas, sino una regla de acoplamiento. Cada [[Ri]] agrega oposicion al flujo de carga y por eso la resistencia total [[Req]] crece al agregar elementos pasivos. Esta intuicion evita errores comunes, por ejemplo creer que agregar un resistor siempre protege un componente sin revisar la potencia que termina disipando cada uno. En realidad, una reduccion de [[I]] global puede coexistir con una redistribucion de [[Vi]] que sobrecargue un resistor especifico si su valor relativo es alto.

En laboratorio y en aplicaciones reales, la serie aparece en limitacion de corriente, sesgo de sensores, escalado de voltaje y cadenas de seguridad. Tambien aparece de forma inadvertida en trazas largas, cables y contactos, donde resistencias parasitas se suman al modelo ideal. Por eso conviene aprender el caso ideal y, de inmediato, entrenar el criterio para decidir cuando la idealizacion sigue siendo util.

## 🟢 Nivel esencial
En nivel esencial, la meta no es memorizar expresiones sino entender una imagen fisica unica: una sola ruta de paso de carga. Si la ruta es unica, la corriente es comun en toda la cadena y la tension de la fuente se distribuye entre elementos. Con esa intuicion ya se puede predecir cualitativamente el efecto de cambiar un componente: la distribucion local de caidas cambia y, con ella, cambia el estado global del circuito.

Tambien se instala una regla de juicio rapido: una respuesta es aceptable solo si conserva coherencia fisica. Eso implica unidades consistentes, signos compatibles y una lectura causal minima de lo que cambia y por que cambia. Este nivel, por diseno, evita saturacion simbolica; prioriza que el estudiante pueda explicar el fenomeno con lenguaje claro antes de entrar al detalle algebraico.

Finalmente, el nivel esencial separa resultado numerico de comprension. Un numero aislado no basta: hay que poder decir que variable controla el comportamiento comun y cual describe el reparto local. Esta distincion prepara el paso al nivel formal con menor carga cognitiva y mejor transferencia a problemas nuevos.

## 🔵 Nivel formal
La formulacion minima para resolver serie con consistencia es:

{{f:req_serie}}

{{f:Req_formula}}

{{f:i_total}}

{{f:I_formula}}

{{f:caida_ohm}}

{{f:Vi_formula}}

{{f:divisor}}

{{f:Vt_formula}}

Estas expresiones cumplen roles distintos. Las de [[Req]] y [[I]] fijan el estado global de la rama. Las de [[Vi]] y [[Ri]] conectan el estado global con cada elemento local. La de cierre de malla con [[Vt]] verifica coherencia energetica del resultado. En practica, usar solo una formula rara vez alcanza; el metodo correcto combina calculo global, reparto local y chequeo final.

Formalmente, el orden recomendado es: primero obtener [[Req]] desde resistencias individuales; segundo estimar [[I]] con la fuente; tercero recuperar cada [[Vi]] por ley local o por relacion de divisor; cuarto comprobar cierre de malla. Este orden minimiza propagacion de errores y permite detectar rapido una conversion de unidades mal hecha.

El aporte formal no es solo operativo; tambien es epistemico. Cada ecuacion restringe respuestas posibles y funciona como filtro de errores conceptuales. Si una caida local sale mayor que la tension total disponible, el problema no es de redondeo: hay ruptura de consistencia entre relaciones globales y locales. Si la corriente calculada no reproduce las caidas al volver a la ley local, el sistema de resultados esta incompleto o contiene una suposicion invalida.

Por eso conviene usar doble verificacion. Primera verificacion, interna: relaciones entre [[Req]], [[I]] y [[Vi]] deben ser compatibles entre si. Segunda verificacion, externa: magnitudes y orden de magnitud deben ser plausibles para el tipo de componentes usados. Este doble filtro reduce errores silenciosos y fortalece la trazabilidad de la solucion.

Ademas, el nivel formal permite comparar rutas de calculo equivalentes. Una ruta puede priorizar estimar corriente y luego obtener caidas; otra puede priorizar reparto proporcional y luego cerrar malla. Si ambas se aplican bien, deben converger al mismo estado fisico. Esta equivalencia es didacticamente valiosa porque enseña que el objetivo es coherencia de modelo, no dependencia de una receta unica.

## 🔴 Nivel estructural
El nivel estructural pregunta por el dominio de validez del modelo, no solo por el resultado numerico. La serie ideal supone resistores lineales, contactos buenos, temperatura moderada y fuente suficientemente estable. Si alguno de esos supuestos falla, el modelo puede conservar forma algebraica pero perder capacidad predictiva.

Por ejemplo, cuando un resistor se calienta de forma apreciable, su [[Ri]] puede variar durante la medicion. En ese caso, [[Req]] deja de ser constante y la [[I]] calculada con un unico valor puede subestimar o sobreestimar la corriente real. Del mismo modo, un divisor que en vacio entrega cierta [[Vi]] puede colapsar al conectar una carga de baja impedancia, porque la topologia efectiva deja de ser una serie simple entre los elementos originales.

Tambien es clave distinguir modelo de circuito y circuito fisico. El modelo usa [[R1]], [[R2]], [[R3]] como valores puntuales limpios; el circuito real agrega tolerancias, ruido, cables y resistencia de contacto. La habilidad estructural consiste en cuantificar cuando esas correcciones son despreciables y cuando alteran decisiones de diseno.

Una lectura estructural madura exige criterios de cambio de modelo. Si una hipotesis deja de sostenerse, no basta con "ajustar un numero"; debe explicitarse la nueva descripcion. Por ejemplo, al conectar una carga no despreciable, el repartidor ideal debe reemplazarse por un equivalente que incluya la impedancia de carga y su efecto sobre la salida. Del mismo modo, si hay deriva termica relevante, conviene modelar parametros dependientes de temperatura y no un valor fijo.

Este nivel tambien introduce evaluacion de riesgo. No todos los errores tienen la misma consecuencia: algunos alteran apenas una estimacion, otros comprometen seguridad electrica o termica. Por eso se jerarquizan validaciones: primero continuidad fisica del modelo, luego consistencia matematica, luego margen de operacion frente a dispersion real. El resultado estructural no es una cuenta mas larga, sino una conclusion defendible sobre cuando el modelo ideal basta y cuando debe evolucionar.

## Interpretación física profunda
Interpretar serie en profundidad significa leer transferencia y transformacion de energia. La fuente impone una diferencia de potencial [[Vt]] que habilita flujo de carga [[I]]. Cada elemento con [[Ri]] convierte parte de esa energia electrica en calor segun su caida [[Vi]] y su potencia asociada. No es una distribucion arbitraria, sino una consecuencia de la estructura resistiva de la red.

En esta lectura, [[Req]] actua como variable de acoplamiento entre fuente y rama. Si [[Req]] crece, el flujo total cae y todo el sistema se desplaza a un regimen menos exigente en corriente. Sin embargo, eso no garantiza seguridad en cada componente: un resistor con gran [[Ri]] puede concentrar una fraccion alta de [[Vt]], y por tanto de potencia, aunque la [[I]] global sea moderada. La interpretacion madura no se queda con el promedio, identifica puntos criticos locales.

## Orden de magnitud
En ejercicios de nivel introductorio, [[R1]], [[R2]] y [[R3]] suelen estar entre decenas de ohm y algunos kiloohm; [[Vt]] suele estar entre unos pocos volt y decenas de volt. En ese rango, [[I]] tipica cae entre miliampere y fracciones de ampere. Si un calculo produce corrientes decenas de veces mayores, la primera hipotesis debe ser error de unidades o de topologia asumida.

Para [[Vi]], el orden de magnitud razonable es fraccion de [[Vt]] en cada elemento. Una caida local muy por encima de la fuente delata inconsistencia de signos, uso de magnitudes incompatibles o cierre de malla mal planteado. Este chequeo de escala no reemplaza la deduccion, pero evita aceptar resultados absurdos con apariencia formal correcta.

## Método de resolución personalizado
Paso 1. Inventario fisico. Lista [[R1]], [[R2]], [[R3]], [[Vt]] y confirma que todos los componentes relevantes comparten una sola rama.

Paso 2. Normalizacion de unidades. Convierte todas las resistencias a la misma unidad antes de operar. Esta etapa previene la mayoria de fallos de orden de magnitud.

Paso 3. Calculo global. Obtiene [[Req]] y luego [[I]]. Interpreta ambos valores antes de seguir: una [[Req]] alta debe reflejar corriente menor para la misma fuente.

Paso 4. Calculo local. Recupera [[Vi]] en cada elemento con relacion local o con divisor segun convenga. Mantiene una convencion de signos estable desde el inicio.

Paso 5. Cierre fisico. Verifica coherencia de malla con [[Vt]] y revisa potencias para identificar el componente termicamente mas exigido.

Paso 6. Lectura de ingenieria. Concluye si el diseno cumple objetivo funcional y margen de seguridad, no solo si las cuentas cerraron.

## Casos especiales y ejemplo extendido
Caso A. Un elemento domina. Si uno de los [[Ri]] es mucho mayor que los otros, su [[Vi]] absorbe gran parte de [[Vt]]. Esto es util para divisores, pero puede ser riesgoso si la potencia local supera especificacion.

Caso B. Elemento casi nulo. Si un [[Ri]] es muy pequeno frente a [[Req]], su caida local es pequena y su aporte a la limitacion de [[I]] casi despreciable. En practica puede modelar un puente o una pista muy conductora.

Caso C. Tolerancias acumuladas. Tres resistores con tolerancia moderada pueden desplazar [[Req]] y cada [[Vi]] de forma no trivial. En aplicaciones de precision conviene estimar peor caso y no solo valor nominal.

Caso D. Carga externa sobre divisor. Si la salida del divisor alimenta una carga no despreciable, la red efectiva cambia y la formula ideal de reparto puede fallar. Este es uno de los errores mas frecuentes en diseno inicial.

## Preguntas reales del alumno
Por que la [[I]] es la misma en todos los elementos si las resistencias son distintas.
Porque la serie impone una sola ruta de paso de carga. Lo que cambia entre elementos no es la corriente comun, sino la porcion de [[Vt]] que cae en cada uno.

Como decido rapido si mi [[Req]] tiene sentido.
En serie pasiva, [[Req]] no puede ser menor que una resistencia individual positiva. Si ocurre, casi siempre hay error de topologia o de unidades.

Cuando conviene usar relacion de divisor y cuando relacion local.
La de divisor es muy eficaz para reparto relativo con [[Vt]] y [[Req]]. La local sirve para foco en un elemento concreto cuando [[I]] ya esta bien determinada.

Que hago si el cierre de malla no coincide.
Revisa primero unidades, luego signos, luego correspondencia entre variables globales y locales. El cierre mal logrado suele ser sintoma, no causa.

## Conexiones transversales y rutas de estudio
Ruta 1. Ir desde este leaf hacia leyes de Kirchhoff para resolver varias mallas y nodos con la misma disciplina de consistencia.

Ruta 2. Conectar con potencia electrica para transformar calculo de [[I]] y [[Vi]] en analisis termico y criterios de seleccion de componentes.

Ruta 3. Relacionar con metrologia basica para incorporar incertidumbre, tolerancia y propagacion de error en mediciones de resistencias y voltajes.

Ruta 4. Extender a redes mixtas serie paralelo, donde la intuicion desarrollada aqui evita errores de simplificacion y permite construir equivalentes por etapas.

## Síntesis final
El nucleo del tema puede resumirse asi: en serie la corriente [[I]] es comun, la fuente [[Vt]] se reparte en caidas [[Vi]] y la resistencia equivalente [[Req]] se construye por suma de [[Ri]]. Ese nucleo, bien interpretado, permite pasar de calculo mecanico a criterio fisico.

El enfoque nuevo formato no pide solo formulas correctas; pide coherencia estructural, lectura causal, control de escala y dominio de validez. Cuando esas capas se integran, el estudiante no solo resuelve ejercicios: entiende por que una decision de diseno es segura, cuando un modelo deja de aplicar y como defender su conclusion frente a datos reales.
`;export{e as default};
