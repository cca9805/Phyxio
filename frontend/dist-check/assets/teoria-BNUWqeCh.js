const e=`# Loop vertical y condicion de contacto\r
\r
## Contexto conceptual\r
\r
Este leaf responde a una pregunta concreta de dinamica radial: ¿que condicion minima de velocidad permite completar un loop vertical sin perder contacto con la pista? El eje conceptual es distinguir entre exigencia de curvatura y fuerza de contacto disponible. La exigencia se expresa con la resultante radial [[Frad]] y con la aceleracion centripeta [[ac]]. La disponibilidad de contacto se evalua con la normal [[Nn]], que no puede ser negativa en un modelo de pista rigida ideal.\r
\r
Cuando el cuerpo pasa por la cima del loop, tanto el peso como la normal pueden contribuir a la curvatura. Ese punto es el mas critico porque el contacto es fragil: una pequena reduccion de velocidad puede llevar a [[Nn]] igual a cero y, por debajo de ese umbral, a perdida de contacto. Desde el punto de vista didactico, este tema une tres ideas que suelen estudiarse separadas: ecuacion radial, condicion limite de contacto y lectura energetica entre punto bajo y punto alto.\r
\r
La utilidad practica es directa. En atracciones mecanicas, pistas de entrenamiento o bancos de prueba, no basta con calcular una velocidad; hay que justificar por que esa velocidad mantiene contacto con margen y bajo que supuestos deja de ser valida. Por eso en este leaf el numero final nunca se interpreta solo: siempre se acompana de lectura causal, condicion de validez y criterio de decision.\r
\r
## 🟢 Nivel esencial\r
\r
La intuicion esencial es simple: para sostener movimiento curvo hace falta una accion hacia el centro. Si esa accion no alcanza, la trayectoria deja de seguir la geometria impuesta. En un loop vertical, la situacion mas exigente ocurre arriba, donde el sistema depende de tener suficiente rapidez para que la curvatura requerida no supere lo que pueden aportar las fuerzas reales.\r
\r
El error mas frecuente en este nivel es hablar de "fuerza centripeta" como una fuerza extra. En realidad, la curvatura es el efecto, y las fuerzas reales son la causa. En la cima, esas fuerzas son peso y normal; en la base, la normal cambia de valor y el problema de contacto deja de ser critico, aunque la carga mecanica pueda ser mayor.\r
\r
Tambien conviene fijar una idea de transferencia: la velocidad en la cima y la velocidad en la base no cumplen la misma funcion fisica. Si se confunden esos estados, la interpretacion se rompe aunque la algebra parezca correcta.\r
\r
## 🔵 Nivel formal\r
\r
El marco cuantitativo del leaf se organiza en cinco relaciones nucleares.\r
\r
**Ecuacion radial general:**\r
\r
{{f:radial_general}}\r
\r
Relaciona la exigencia radial [[Frad]] con [[m]], [[v]] y [[r]]. En el loop, esta ecuacion funciona como columna vertebral para interpretar cualquier punto de la trayectoria.\r
\r
**Ecuacion radial en el punto alto:**\r
\r
{{f:punto_alto}}\r
\r
Vincula [[Nn]] y [[vT]] en la cima. Si el valor calculado de [[Nn]] cae por debajo de cero, el supuesto de contacto falla.\r
\r
**Velocidad minima en el punto alto:**\r
\r
{{f:velocidad_minima_alto}}\r
\r
Es la condicion critica derivada al imponer contacto limite en la cima. Sirve como umbral fisico: por encima hay contacto; por debajo, no.\r
\r
**Ecuacion radial en el punto bajo:**\r
\r
{{f:punto_bajo}}\r
\r
Describe la carga de contacto en la base usando [[vB]]. Aunque aqui no se decide la perdida de contacto, si se evalua la severidad de la carga normal.\r
\r
**Velocidad minima en el punto bajo:**\r
\r
{{f:velocidad_minima_bajo}}\r
\r
Conecta el requisito de la cima con la rapidez minima de entrada en la base bajo conservacion de [[E]]. Es una relacion clave para diseno de condiciones iniciales.\r
\r
Un procedimiento formal robusto separa tres pasos: identificar punto de analisis, elegir ecuacion radial correspondiente y cerrar con criterio de validez fisica. No basta con sustituir datos: hay que verificar signos, dominios y consistencia de unidades.\r
\r
## 🔴 Nivel estructural\r
\r
En nivel estructural se decide si el resultado es util para operar o solo para ilustrar. La primera pregunta no es "cuanto da" sino "que tan estable es la conclusion ante variaciones razonables".\r
\r
Hay tres zonas de decision practicas:\r
\r
1. **Zona segura**: [[vT]] supera claramente el umbral de cima y [[Nn]] es positiva con margen.\r
2. **Zona sensible**: [[vT]] esta cerca del umbral; pequenas variaciones en [[r]] o en perdidas energeticas pueden cambiar la conclusion.\r
3. **Zona invalida**: la prediccion exige [[Nn]] negativa o depende de hipotesis que ya no representan el sistema real.\r
\r
Esta lectura estructural evita dos riesgos: sobredimensionar confianza en un numero "bonito" y ocultar que el modelo ideal excluye mecanismos relevantes, como rozamiento distribuido, deformacion de pista o excitaciones no planas.\r
\r
Tambien permite conectar seguridad y confort. En la cima interesa evitar perdida de contacto; en la base interesa limitar picos de normal. Por eso el par [[vT]]-[[vB]] se interpreta en conjunto, no como resultados aislados.\r
\r
## Interpretación física profunda\r
\r
La interpretacion fisica de este leaf debe responder cuatro preguntas concretas:\r
\r
1. ¿Que exige la curvatura en el punto estudiado?\r
2. ¿Que fuerzas reales satisfacen esa exigencia?\r
3. ¿Existe margen de contacto o estamos en borde critico?\r
4. ¿Que variable conviene intervenir para aumentar robustez?\r
\r
Si el sistema esta cerca del limite de cima, la accion mas efectiva suele ser aumentar velocidad de entrada en la base o reducir radio objetivo de operacion solo si el contexto de diseno lo permite. Si el problema es carga excesiva en la base, el criterio cambia: puede ser preferible ajustar radio o perfil de entrada para moderar [[Nn]].\r
\r
Este analisis muestra por que [[Frad]] no es una fuerza extra dibujada en el diagrama, sino lectura de la resultante requerida. Tambien muestra por que [[ac]] no es un dato decorativo: es la medida de la curvatura dinamica que el sistema debe sostener en cada punto.\r
\r
## Orden de magnitud\r
\r
Referencias utiles para detectar errores de escala:\r
\r
**[[m]]**: 0.01 - 10000 kg\r
\r
**[[r]]**: 0.1 - 100 m\r
\r
**[[g]]**: 9.78 - 9.82 m/s^2\r
\r
**[[v]]**: 0.1 - 100 m/s\r
\r
**[[vT]]**: 0.5 - 50 m/s\r
\r
**[[vB]]**: 1 - 100 m/s\r
\r
**[[Nn]]**: 0 - 100000 N\r
\r
**[[Frad]]**: 0 - 100000 N\r
\r
**[[ac]]**: 0.1 - 1000 m/s^2\r
\r
**[[E]]**: 0.1 - 1000000 J\r
\r
Si un calculo cae varios ordenes de magnitud fuera de estos rangos sin justificacion fisica, lo correcto es revisar unidades, suposiciones y seleccion de formula.\r
\r
## Método de resolución personalizado\r
\r
1. Definir el punto de analisis: cima, base o punto generico.\r
2. Fijar convencion radial y diagrama de fuerzas.\r
3. Aplicar ecuacion radial apropiada.\r
4. Verificar contacto con condicion sobre [[Nn]].\r
5. Si se requiere, enlazar cima y base con conservacion de [[E]].\r
6. Reportar resultado con margen y limite de validez.\r
\r
Este metodo minimiza errores de interpretacion porque obliga a cerrar con lectura causal y no solo numerica.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Caso especial 1**: contacto limite en la cima, donde [[Nn]] se anula y la rapidez coincide con el umbral critico.\r
\r
**Caso especial 2**: entrada apenas superior al minimo, con alta sensibilidad a perdidas energeticas no modeladas.\r
\r
**Caso especial 3**: base con carga normal elevada aunque exista contacto en cima, mostrando que completar el loop no implica baja exigencia mecanica.\r
\r
En un ejemplo extendido completo, se calcula primero el umbral de cima, luego la velocidad minima en base y finalmente la carga de contacto en base para una velocidad operacional dada. Esa secuencia integra criterio de seguridad y de carga estructural en un solo flujo.\r
\r
## Preguntas reales del alumno\r
\r
**¿Si [[m]] aumenta cambia la velocidad minima de contacto?**\r
No en el modelo ideal de este leaf: la masa escala fuerzas, pero no el umbral de velocidad critica.\r
\r
**¿Por que necesito [[vB]] si la condicion critica se evalua arriba?**\r
Porque la operacion inicia abajo y la conservacion de [[E]] conecta ambas secciones del loop.\r
\r
**¿Puede haber resultado correcto con [[Nn]] negativa?**\r
Algebraicamente puede aparecer, pero fisicamente indica salida del dominio de contacto del modelo.\r
\r
**¿Que variable conviene ajustar primero para ganar margen?**\r
Depende del objetivo: para evitar despegue en cima suele intervenirse velocidad de entrada; para reducir carga en base puede intervenirse radio o perfil dinamico.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con concepto-fuerza-centripeta, con curvas-planas-y-peraltadas y con ejemplos-tipicos del mismo bloque. Tambien enlaza con temas de energia mecanica y con modelado de contacto en sistemas de transporte y entretenimiento.\r
\r
Una ruta recomendada es: primero dominar lectura radial general, luego contacto en cima, despues conexion energetica cima-base y finalmente analisis de carga en base. Esa progresion favorece transferencia a problemas mas complejos con perturbaciones o perdidas.\r
\r
## Síntesis final\r
\r
Loop vertical y condicion de contacto no es un conjunto de recetas; es un marco para decidir si una trayectoria curvada puede sostenerse con contacto real y con que margen. Al integrar [[Frad]], [[Nn]], [[vT]], [[vB]] y [[E]], el estudiante pasa de resolver ecuaciones a justificar decisiones fisicas. Esa es la competencia central que este leaf debe consolidar.\r
`;export{e as default};
