const e=`# Ley de hooke\r
\r
## Contexto conceptual\r
\r
Este leaf estudia una ley constitutiva local, no un sistema mecanico completo. Esa distincion es clave para diferenciarlo de temas vecinos como sistemas-con-muelles. Aqui el foco es la relacion entre deformacion [[x]] y respuesta elastica [[Fel]] en regimen lineal, junto con sus derivaciones de modulo [[Fm]], energia [[Uel]] y equilibrio estatico [[x_eq]].\r
\r
La pregunta central no es solo "cuanto vale la fuerza", sino "que nos autoriza a usar una proporcionalidad lineal y cuando debemos dejar de usarla". En otras palabras, ley de Hooke no es una receta universal para cualquier resorte; es una aproximacion valida bajo condiciones de pequenas deformaciones, material en zona elastica y convencion de ejes bien declarada.\r
\r
Esta mirada tiene valor transversal en ingenieria y fisica experimental: permite construir modelos rapidos, interpretar graficas fuerza-deformacion y detectar cuando una curva deja de ser lineal. Tambien prepara el paso a modelos no lineales o histereticos, donde la relacion simple deja de capturar la fisica dominante.\r
\r
## 🟢 Nivel esencial\r
\r
En nivel esencial importa fijar una intuicion robusta: cuando un muelle se deforma, aparece una fuerza de respuesta que intenta recuperar la configuracion de referencia. Esa fuerza es restauradora en el sentido causal: se opone al desplazamiento respecto del equilibrio.\r
\r
Dos ideas deben quedar claras desde el inicio.\r
\r
1. El signo de la fuerza de respuesta depende de la convencion de eje. Cambiar el eje no cambia la fisica, pero si cambia la expresion algebraica.\r
2. El valor en modulo conserva intensidad, pero no direccion. Sirve para comparar cargas, no para decidir sentido dinamico.\r
\r
Tambien es importante separar ley constitutiva y ecuacion de movimiento. Hooke describe como responde el elemento elastico localmente; no describe por si sola toda la dinamica de un sistema con masa, amortiguamiento o excitacion externa. Esa diferencia evita sobreinterpretaciones y mejora transferencia entre problemas.\r
\r
Una comprobacion mental util en este nivel es imaginar el comportamiento en dos extremos: deformacion nula y deformacion pequena finita. Si la explicacion que construyes no distingue ambos estados, aun falta claridad conceptual. Esta rutina breve reduce errores antes de entrar al algebra formal.\r
\r
## 🔵 Nivel formal\r
\r
En nivel formal se organiza el nucleo matematico del leaf en cinco expresiones complementarias.\r
\r
**Ley de Hooke en 1D:**\r
\r
{{f:hooke_1d}}\r
\r
Relaciona [[Fel]], [[k]] y [[x]] con signo restaurador. Es la forma que conserva direccion fisica cuando se trabaja con eje definido.\r
\r
**Modulo de la fuerza elastica:**\r
\r
{{f:hooke_modulo}}\r
\r
Expresa intensidad [[Fm]] sin direccion. Es util para especificaciones de carga maxima y comparacion de rigidez.\r
\r
**Equilibrio vertical masa-muelle:**\r
\r
{{f:equilibrio_vertical_muelle}}\r
\r
Conecta [[x_eq]] con [[m]], [[g]] y [[k]] en equilibrio estatico bajo gravedad uniforme.\r
\r
**Energia potencial elastica:**\r
\r
{{f:energia_potencial_elastica}}\r
\r
Introduce [[Uel]] como energia almacenada por deformacion, clave para enlazar estatica y dinamica energetica.\r
\r
**Criterio de restauracion:**\r
\r
{{f:criterio_restaurador}}\r
\r
No es una ecuacion de calculo directo, sino un test de coherencia de signo para asegurar comportamiento restaurador.\r
\r
El uso correcto exige secuencia: elegir convencion, declarar dominio lineal, calcular magnitud relevante y cerrar con chequeo de coherencia fisica. Esta secuencia evita que una cuenta algebraicamente correcta termine en una interpretacion fisicamente inconsistente.\r
\r
Tambien conviene distinguir salida primaria y secundaria en cada problema. Si la pregunta pide carga transmitida, [[Fm]] puede ser salida primaria y [[Fel]] queda como verificacion direccional. Si la pregunta es estabilidad o retorno, la salida primaria es [[Fel]] y la energia [[Uel]] pasa a soporte interpretativo. Esta jerarquia de salidas reduce ruido cognitivo y hace mas eficiente la resolucion.\r
\r
## 🔴 Nivel estructural\r
\r
El nivel estructural evalua calidad del modelo y riesgo de extrapolacion. Aqui la pregunta no es "como despejo", sino "cuando sigue siendo defendible la linealidad".\r
\r
Tres criterios estructurales ayudan a decidir:\r
\r
1. **Linealidad observada**: la grafica fuerza-deformacion debe ser aproximadamente recta en el rango operativo.\r
2. **Consistencia energetica**: [[Uel]] debe crecer de forma compatible con deformacion sin comportamientos no fisicos.\r
3. **Estabilidad de parametros**: [[k]] no debe variar de manera abrupta para pequenas perturbaciones del mismo regimen.\r
\r
Cuando estos criterios fallan, la lectura correcta es migrar a modelo alternativo (por ejemplo, ley no lineal por tramos, histeresis o dependencia viscoelastica). Insistir con Hooke fuera de dominio puede producir disenos inseguros o calibraciones engañosas.\r
\r
Este nivel tambien conecta con unicidad del leaf: aqui se modela una ley local de material, mientras que en sistemas-con-muelles se estudia el comportamiento global de arreglos y acoplamientos. Mantener esa frontera conceptual evita duplicacion semantica.\r
\r
En practica profesional, esta distincion evita fallos de comunicacion entre equipos. Un analista de materiales puede reportar una rigidez efectiva valida en un intervalo, mientras que un analista de sistema necesita ademas condiciones de borde y acoplamientos. Si ambos reportes se mezclan sin explicitar escala de modelo, el proyecto acumula inconsistencias que luego aparecen como "errores de simulacion" cuando en realidad son errores de formulacion.\r
\r
## Interpretación física profunda\r
\r
Una interpretacion madura debe distinguir entre direccion, modulo y energia.\r
\r
- [[Fel]] informa sentido de restauracion.\r
- [[Fm]] informa intensidad de respuesta.\r
- [[Uel]] informa capacidad de almacenamiento energetico.\r
\r
Ademas, el equilibrio vertical no se interpreta como "formula suelta", sino como balance entre peso [[m]] por [[g]] y respuesta elastica gobernada por [[k]]. Si [[x_eq]] sale incompatible con dimensiones fisicas del montaje, el problema no es solo numerico: puede haber mala seleccion de modelo o de condiciones de borde.\r
\r
La lectura profunda tambien exige criterio de escalamiento. Duplicar [[x]] no duplica [[Uel]]: la energia cambia cuadraticamente. Ese detalle explica por que ensayos aparentemente modestos de deformacion pueden elevar rapidamente energia almacenada y riesgo mecanico.\r
\r
## Orden de magnitud\r
\r
Referencias orientativas para chequeo rapido:\r
\r
**[[Fel]]**: 0.1 - 10000 N\r
\r
**[[Fm]]**: 0.1 - 10000 N\r
\r
**[[k]]**: 1 - 100000 N/m\r
\r
**[[x]]**: 1e-4 - 0.5 m\r
\r
**[[x_eq]]**: 1e-4 - 0.3 m\r
\r
**[[m]]**: 0.01 - 500 kg\r
\r
**[[g]]**: 9.78 - 9.82 m/s^2\r
\r
**[[Uel]]**: 1e-3 - 500 J\r
\r
No son limites universales, pero ayudan a detectar errores de unidad, signos y escalas no plausibles.\r
\r
## Método de resolución personalizado\r
\r
1. Declarar configuracion y convencion de eje.\r
2. Elegir si se requiere [[Fel]], [[Fm]], [[x_eq]] o [[Uel]].\r
3. Aplicar formula del leaf correspondiente.\r
4. Verificar dominio (linealidad, signo restaurador, unidades).\r
5. Cerrar con lectura fisica y limite de validez.\r
\r
Este metodo reduce errores de transferencia porque obliga a separar calculo, coherencia y uso del resultado.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Caso especial 1**: [[x]] cercana a cero con [[Fel]] pequeña; ideal para validar signos y sensibilidad.\r
\r
**Caso especial 2**: mismo [[k]] con doble deformacion; muestra crecimiento lineal de fuerza y cuadratico de energia.\r
\r
**Caso especial 3**: equilibrio vertical con masa alta; obliga a verificar que [[x_eq]] siga dentro de zona lineal del elemento.\r
\r
Un ejemplo extendido de este leaf combina las cinco formulas: calcula fuerza con signo, modulo, equilibrio estatico, energia y test restaurador en una sola narrativa coherente.\r
\r
## Preguntas reales del alumno\r
\r
**¿Si [[k]] es constante siempre puedo usar Hooke?**\r
No. La constancia de [[k]] debe verificarse en el rango de deformacion analizado.\r
\r
**¿Por que necesito [[Uel]] si ya tengo [[Fel]]?**\r
Porque fuerza y energia responden preguntas distintas: accion instantanea frente a almacenamiento.\r
\r
**¿Que significa que [[Fel]] y [[x]] tengan igual signo?**\r
En el modelo restaurador 1D, suele indicar inconsistencia de eje o de interpretacion.\r
\r
**¿Esto reemplaza el estudio de sistemas con varios muelles?**\r
No. Este leaf define la ley local; los arreglos complejos se estudian en hojas especificas de sistemas.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Se conecta con fuerza-elastica como marco conceptual general, con energia mecanica para lecturas de almacenamiento y con experimentacion de materiales para detectar limites de linealidad. Tambien prepara la comprension de oscilaciones cuando la ley local se inserta en dinamica temporal.\r
\r
Ruta sugerida: primero dominar signo y modulo en 1D, luego equilibrio vertical, despues energia elastica, y finalmente contrastar con casos no lineales para fijar frontera de validez.\r
\r
## Síntesis final\r
\r
La ley de Hooke, bien entendida, es una herramienta constitutiva precisa para relacionar deformacion y respuesta elastica en dominio lineal. Su valor no esta en memorizar una expresion, sino en usarla con criterio: elegir magnitud adecuada, verificar signos, interpretar energia y declarar limites de modelo.\r
\r
Con esa disciplina, este leaf deja de ser un capitulo aislado y se vuelve una base confiable para analisis mecanico, diseño experimental y decisiones tecnicas con trazabilidad fisica.\r
`;export{e as default};
