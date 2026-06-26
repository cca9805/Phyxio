## 1. Simulacion de montañas rusas

En una montaña rusa ideal, el intercambio entre [[T]] y [[V]] explica por que el carrito acelera al bajar y se frena al subir. La altura [[h]] fija la energia potencial gravitatoria y la velocidad [[v]] fija la energia cinetica.

Variable dominante: comparacion entre [[T]] y [[V]].  
Limite de validez: el modelo ideal ignora rozamiento, resistencia del aire y perdidas en ruedas.

La aplicacion es didactica porque permite ver una transferencia de energia sin introducir todavia ecuaciones diferenciales. Si [[E]] se mantiene aproximadamente constante, el alumno puede predecir velocidades a distintas alturas. Si se quiere pasar a una formulacion lagrangiana sobre la pista, se construye [[L]] con la coordenada de avance.

Tambien permite discutir perdidas de forma controlada. Si la velocidad medida es menor que la predicha por conservacion de [[E]], el deficit se interpreta como energia disipada. Esa comparacion introduce el limite del modelo ideal sin abandonar la lectura energetica.

## 2. Diseño de osciladores mecanicos

En un oscilador masa-resorte, la energia potencial elastica depende de [[k]] y [[qi]], mientras que la energia cinetica depende de [[m]] y la velocidad. La energia va alternando entre movimiento y deformacion.

Variable dominante: reparto energetico entre [[T]] y [[V]].  
Limite de validez: la expresion elastica cuadratica solo vale cerca del regimen lineal.

Esta aplicacion muestra por que la referencia de equilibrio importa. Si [[qi]] no se mide desde el equilibrio elastico, la energia potencial puede quedar mal interpretada. En diseño, aumentar [[k]] cambia la escala de almacenamiento elastico y modifica la respuesta dinamica que despues aparecerá en las ecuaciones de Lagrange.

En un laboratorio, medir amplitud y velocidad permite comprobar si la energia alterna de forma consistente. Cuando la amplitud baja ciclo tras ciclo, el modelo conservativo deja de ser suficiente y hay que introducir disipacion o fuerzas externas.

## 3. Robotica y coordenadas generalizadas

En un brazo robotico, la energia cinetica no siempre se expresa con una unica velocidad cartesiana. Puede depender de varias velocidades generalizadas [[qdi]] y de una matriz de inercia. Aun asi, la logica del leaf se mantiene: escribir [[T]], escribir [[V]] y construir [[L]].

Variable dominante: [[L]] como funcion que organiza dinamica.  
Limite de validez: se requiere una descripcion coherente de masas, articulaciones y referencias de potencial.

La ventaja practica es que la energia compacta informacion de todo el mecanismo. En vez de proyectar fuerza por fuerza en cada articulacion, el modelo energetico ayuda a generar ecuaciones sistematicas. Esto reduce errores en mecanismos acoplados y mejora trazabilidad del controlador.

La misma estructura facilita auditorias. Si una articulacion responde de forma inesperada, el equipo puede revisar si el fallo esta en el termino cinetico, en el potencial gravitatorio de los eslabones o en una referencia mal definida.

## 4. Biomecanica del movimiento

En marcha humana o salto, [[T]] mide movimiento del cuerpo o de segmentos, mientras [[V]] gravitatoria cambia con la elevacion del centro de masas. El reparto energetico permite comparar tecnicas, eficiencia y recuperacion de energia entre fases.

Variable dominante: escala de [[E]] y reparto entre [[T]] y [[V]].  
Limite de validez: el cuerpo real tiene disipacion muscular y tejidos no perfectamente elasticos.

Aunque un modelo simple no captura toda la fisiologia, si permite una lectura inicial. Un salto eficiente transforma energia muscular en altura y velocidad de forma organizada. Para un analisis avanzado, el lagrangiano puede extenderse con coordenadas articulares y terminos no conservativos.

Este uso obliga a separar lo mecanico de lo biologico. [[T]] y [[V]] describen estados mecanicos, pero el cuerpo introduce actuacion muscular y disipacion. Por eso la aplicacion es buena para iniciar el analisis, no para cerrarlo sin datos fisiologicos.

## 5. Docencia de mecanica analitica

Este leaf funciona como antesala de las ecuaciones de Lagrange. El profesor puede mostrar que no basta con conocer formulas de energia: hay que saber elegir referencias, comprobar unidades y decidir si se necesita [[E]] o [[L]].

Variable dominante: diferencia conceptual entre [[L]] y [[E]].  
Limite de validez: requiere que el alumno ya reconozca energia cinetica y potencial en contextos basicos.

La aplicacion educativa es fuerte porque conecta bachillerato y universidad. El alumnado ya conoce energia mecanica, pero ahora aprende que la misma pareja [[T]] y [[V]] puede organizar otra herramienta: el lagrangiano. Esa transicion evita que la mecanica analitica parezca una notacion arbitraria.

Para el profesor, el leaf ofrece una secuencia evaluable: reconocer terminos, validar unidades, declarar referencia, construir [[L]] y explicar por que [[E]] responde otra pregunta. Esa ruta revela si el alumno entiende fisica o solo sustituye en formulas.

En conjunto, estas aplicaciones muestran que energia cinetica y potencial no son solo formulas aisladas. Son piezas de modelizacion. Cuando se escriben con coordenadas compatibles, permiten discutir conservacion, construir lagrangianos y comparar escalas reales de movimiento y configuracion.

El criterio comun es siempre el mismo: antes de calcular, decidir que energia representa movimiento, que energia representa configuracion y que combinacion responde la pregunta. Esa disciplina evita mezclar modelos y prepara el paso hacia mecanica analitica avanzada.
