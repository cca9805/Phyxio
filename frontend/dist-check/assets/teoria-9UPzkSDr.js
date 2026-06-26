const e=`# Resistencias en paralelo\r
\r
## Contexto conceptual\r
Una red en paralelo aparece cuando varias ramas comparten los mismos dos nodos eléctricos. En esa topología, la diferencia de potencial de trabajo queda fijada por la conexión común y cada rama responde con una corriente propia según su oposición eléctrica local. Esa combinación produce un fenómeno clave en diseño de circuitos: la corriente total aumenta al abrir más caminos conductores, mientras la resistencia equivalente del conjunto disminuye.\r
\r
En este leaf la lectura física se apoya en [[Req]], [[R1]], [[R2]], [[R3]], [[V]], [[I1]], [[I2]], [[I3]], [[It]], [[Geq]], [[G1]], [[G2]] y [[G3]]. El objetivo no es memorizar una identidad, sino reconocer qué magnitud controla el reparto de corriente, cuál resume el comportamiento global y cómo validar coherencia entre modelo y medición.\r
\r
La utilidad práctica de este tema es transversal. Permite dimensionar fuentes, proteger ramas con fusibles o limitadores, evitar sobrecarga térmica en una rama dominante y anticipar el efecto de añadir una nueva carga en una instalación de corriente continua.\r
\r
## 🟢 Nivel esencial\r
En nivel esencial conviene fijar cuatro ideas. Primera: todas las ramas en paralelo comparten la misma [[V]]. Segunda: cada rama toma una parte distinta de corriente según su resistencia local. Tercera: la corriente total [[It]] es la suma de los aportes de ramas activas. Cuarta: la resistencia equivalente [[Req]] de un paralelo pasivo siempre queda por debajo de la menor resistencia individual activa.\r
\r
Esta capa evita el error más frecuente de principiantes: tratar un paralelo como si fuera serie. También evita una confusión operativa común: creer que todas las corrientes de rama deben ser iguales por compartir tensión. En paralelo ideal, lo que se iguala es la tensión, no la corriente.\r
\r
Otra lectura esencial útil es de tendencia. Si se añade una rama de baja resistencia, la red se vuelve más conductora, por lo que aumenta la demanda global de corriente para la misma tensión de alimentación.\r
\r
## 🔵 Nivel formal\r
Resistencia equivalente por recíprocos para tres ramas:\r
\r
{{f:req_reciproco}}\r
\r
Forma compacta para dos ramas:\r
\r
{{f:req_dos_ramas}}\r
\r
Corriente de la rama 1:\r
\r
{{f:corriente_rama_1}}\r
\r
Corriente de la rama 2:\r
\r
{{f:corriente_rama_2}}\r
\r
Corriente de la rama 3:\r
\r
{{f:corriente_rama_3}}\r
\r
Cierre nodal de corriente total:\r
\r
{{f:corriente_total}}\r
\r
Suma de conductancias de rama:\r
\r
{{f:geq_suma}}\r
\r
Dualidad conductancia y resistencia equivalente:\r
\r
{{f:geq_reciproco}}\r
\r
Al usar este bloque formal hay tres controles mínimos. Control de pertenencia: cada magnitud debe pertenecer al mismo paralelo físico que se está modelando. Control de unidades: mantener coherencia entre ohm y siemens al cambiar representación. Control de consistencia nodal: la suma de corrientes debe cerrar con una sola convención de signo en todo el nodo de reparto.\r
\r
Para reforzar la robustez formal conviene añadir dos verificaciones adicionales. Primera, verificación de monotonía: si una rama reduce su resistencia bajo tensión fija, su corriente de rama debe aumentar. Segunda, verificación de frontera: si una rama se abre efectivamente, su corriente debe tender a cero y no participar en el cierre total.\r
\r
También es útil separar cálculo principal y chequeo cruzado. El cálculo principal puede hacerse por [[Req]] y corrientes de rama; el chequeo cruzado puede hacerse por [[Geq]] y comparación recíproca. Si ambos caminos no convergen, hay una inconsistencia de dato, unidad o topología asumida.\r
\r
En práctica profesional, esta sección formal debe dejar trazabilidad explícita de qué ramas fueron consideradas activas, qué valores fueron nominales y cuáles medidos, y qué margen de redondeo se aceptó en el cierre nodal. Ese registro evita discusiones ambiguas durante revisión técnica.\r
\r
## 🔴 Nivel estructural\r
La estructura profunda del paralelo es una arquitectura de caminos alternativos para el flujo de carga. Cada rama agrega conductancia al sistema, por lo que la red total facilita más el paso de corriente. Desde esa perspectiva, [[Req]] no es un dato aislado, sino un indicador de cuánta oposición presenta toda la red vista por la fuente.\r
\r
Esta capa también conecta con la fiabilidad. Si una rama se abre, la red pierde conductancia total y sube la resistencia equivalente. Si una rama se degrada hacia resistencia muy baja, puede absorber corriente excesiva y comprometer la seguridad del conjunto. Por eso el análisis de paralelo no termina en un cálculo: termina en una decisión de diseño y protección.\r
\r
La validez de este modelo exige ramas predominantemente resistivas y lineales en el rango de operación. Cuando aparecen efectos de temperatura, componentes no lineales o cableado con caída significativa, se mantiene la lógica nodal, pero deben ajustarse relaciones constitutivas por rama.\r
\r
## Interpretación física profunda\r
Interpretar un paralelo implica leer reparto, no solo equivalente. Dos redes con la misma [[Req]] pueden tener distribuciones de corriente de rama muy distintas y, por tanto, riesgos térmicos diferentes. Esa diferencia importa en instrumentación, diagnóstico y mantenimiento.\r
\r
También importa la dualidad entre [[Req]] y [[Geq]]. En diseño preliminar, trabajar con conductancias suele ser más estable porque evita fracciones anidadas. En verificación final, volver a [[Req]] facilita comparar con medidas directas de fuente.\r
\r
Una lectura profesional agrega una pregunta de control: qué rama domina potencia disipada para la tensión de trabajo prevista. La respuesta guía selección de componentes, disipación térmica y márgenes de seguridad.\r
\r
## Orden de magnitud\r
En montajes de laboratorio y control básico, [[V]] suele estar en el orden de unidades a decenas de voltios, mientras las resistencias de rama están entre decenas y miles de ohm. En ese régimen, las corrientes de rama suelen quedar entre miliamperios y cientos de miliamperios, salvo cargas de baja resistencia.\r
\r
Un chequeo rápido de escala es comparar [[It]] con la rama de menor resistencia. La corriente total debe superar a cada corriente individual activa y crecer cuando se agrega una rama conductora. Si no ocurre, normalmente hay error de datos, de unidades o de topología asumida.\r
\r
## Método de resolución personalizado\r
Paso 1: identificar nodos comunes y confirmar que realmente hay conexión en paralelo.\r
\r
Paso 2: registrar valores de [[R1]], [[R2]], [[R3]] y [[V]] con unidades consistentes.\r
\r
Paso 3: decidir si conviene enfoque por [[Req]] o por [[Geq]] según claridad de datos.\r
\r
Paso 4: calcular corrientes de rama y luego cerrar [[It]] por conservación nodal.\r
\r
Paso 5: validar tendencia física con reglas de orden de magnitud y revisar rama crítica de potencia.\r
\r
Paso 6: cerrar con conclusión operativa sobre seguridad, eficiencia o necesidad de rediseño.\r
\r
## Casos especiales y ejemplo extendido\r
Caso especial A: paralelo de dos ramas con datos limpios. La forma reducida acelera cálculo y reduce errores aritméticos.\r
\r
Caso especial B: tres ramas con una de resistencia muy alta. Esa rama aporta corriente pequeña y apenas modifica [[Req]].\r
\r
Caso especial C: una rama retirada. Debe eliminarse del modelo formal y del cierre de corrientes para no subestimar oposición total.\r
\r
En un ejemplo extendido de tres ramas, primero se estima [[Req]] con recíprocos. Después se calcula [[I1]], [[I2]] e [[I3]] a partir de la tensión común. Finalmente se contrasta que la suma reproduzca [[It]] y que la jerarquía de corrientes sea coherente con la jerarquía inversa de resistencias.\r
\r
La interpretación final del ejemplo no se limita a verificar un número. Debe explicitar qué rama exige mayor capacidad térmica, qué cambio produciría añadir una rama adicional y qué margen de fuente conviene reservar para operación estable.\r
\r
## Preguntas reales del alumno\r
1. Si las ramas comparten nodos, por qué no comparten también corriente.\r
Porque la corriente depende de la resistencia de cada camino para una misma tensión.\r
\r
2. Cómo sé rápido si mi resultado de equivalente es coherente.\r
Si [[Req]] no queda por debajo de cada resistencia activa, hay un fallo de planteo.\r
\r
3. Cuándo conviene usar conductancias.\r
Cuando hay muchas ramas y se quiere evitar recíprocos múltiples.\r
\r
4. Qué pasa si una rama deja de conducir.\r
La corriente total disminuye y la resistencia equivalente aumenta.\r
\r
5. Por qué importa tanto el reparto de rama.\r
Porque define calentamiento, protección y vida útil de componentes.\r
\r
## Conexiones transversales y rutas de estudio\r
Este leaf conecta directamente con resistencias en serie, donde cambia la regla de combinación equivalente. También conecta con leyes de Kirchhoff, que formalizan el cierre nodal usado aquí, y con potencia eléctrica, donde el reparto de corriente determina disipación por rama.\r
\r
Ruta sugerida: resistencias en serie, resistencias en paralelo, leyes de Kirchhoff y análisis de potencia por rama. Esa secuencia preserva causalidad conceptual y reduce errores de transferencia entre topologías.\r
\r
## Síntesis final\r
Resistencias en paralelo es una herramienta de lectura estructural de redes DC. Su núcleo físico es simple y potente: misma tensión en ramas, corriente repartida y equivalente menor que cualquier rama activa. Cuando se combina cálculo formal con interpretación de reparto y verificación de escala, el resultado deja de ser una operación escolar y se convierte en criterio de diseño confiable.`;export{e as default};
