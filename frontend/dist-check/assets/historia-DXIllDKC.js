const e=`## Problema histórico

El problema historico de la autoinduccion surgio cuando los experimentadores observaron chispas, retrasos y efectos inesperados al abrir o cerrar circuitos con bobinas. Faraday mostro que los cambios de flujo inducen fem, pero el caso de una bobina afectandose a si misma exigia una lectura mas fina.

La pregunta fisica era clara: por que un circuito puede generar una fem en sus propios terminales cuando cambia su corriente. Esa pregunta conectaba electricidad, magnetismo y energia antes de que existiera el lenguaje moderno de campos.

Los laboratorios del siglo XIX estaban llenos de electroimanes, galvanometros y bobinas largas. Cada mejora experimental hacia mas visible que los circuitos no respondian instantaneamente. El retraso de la corriente y la chispa de apertura eran dos caras del mismo problema.

## Dificultad conceptual previa

La dificultad era distinguir entre corriente, campo y cambio de campo. Mientras se pensara en la corriente como causa instantanea sin energia almacenada alrededor, las chispas de apertura parecian anomalías del interruptor.

Tambien faltaba separar resistencia de inductancia. La resistencia disipa energia; la inductancia almacena y devuelve energia. Sin esa distincion, los transitorios de bobinas quedaban mezclados con perdidas ordinarias.

La dificultad era genuina porque ambos efectos aparecen en el mismo hilo. Un bobinado real tiene resistencia medible y tambien campo propio. Separar ambas contribuciones exigio medir tiempos, corrientes y tensiones durante procesos breves.

## Qué cambió

El trabajo de Faraday introdujo la relacion entre cambio de flujo y fem inducida. Despues, el desarrollo de circuitos y maquinas electricas hizo necesario cuantificar cuanto flujo propio enlaza una corriente, dando lugar a la inductancia como parametro medible.

La formulacion energetica completo la idea: una bobina con corriente almacena energia en el campo magnetico. Abrir el circuito no destruye esa energia, sino que obliga al sistema a transferirla.

Esa lectura preparo el camino para el tratamiento moderno de circuitos transitorios. La bobina paso de ser un simple devanado a ser un elemento con estado magnetico propio.

## Impacto en la física

La autoinduccion se convirtio en concepto central para circuitos transitorios, generadores, motores, telecomunicaciones y electronica de potencia. Permitio entender por que las corrientes no cambian instantaneamente en bobinas reales.

Tambien reforzo la realidad fisica del campo electromagnetico. La energia no estaba escondida en un componente mecanico, sino distribuida en el campo asociado a la corriente.

En ingenieria, esta comprension permitio diseñar inductores, reactancias, chokes y sistemas de proteccion. Sin autoinduccion no se entiende la regulacion de corriente ni la seguridad al conmutar cargas inductivas.

## Conexión con física moderna

Hoy la autoinduccion aparece en convertidores, resonadores, bobinas superconductoras, almacenamiento magnetico y proteccion de semiconductores. Incluso en circuitos integrados, las inductancias parasitas condicionan picos y estabilidad.

La fisica moderna añade materiales no lineales, superconductividad y modelos distribuidos, pero la idea basica permanece: un cambio de corriente modifica flujo propio y genera una respuesta que se opone a ese cambio.

Incluso cuando se usan simuladores electromagneticos completos, el parametro [[L]] sigue siendo el resumen operativo que permite pasar de geometria y campo a decisiones de circuito.
`;export{e as default};
