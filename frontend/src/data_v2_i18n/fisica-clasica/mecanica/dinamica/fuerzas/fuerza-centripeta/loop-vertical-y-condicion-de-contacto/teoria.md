# Loop vertical y condicion de contacto

## Contexto conceptual

Este leaf responde a una pregunta concreta de dinamica radial: ¿que condicion minima de velocidad permite completar un loop vertical sin perder contacto con la pista? El eje conceptual es distinguir entre exigencia de curvatura y fuerza de contacto disponible. La exigencia se expresa con la resultante radial [[Frad]] y con la aceleracion centripeta [[ac]]. La disponibilidad de contacto se evalua con la normal [[Nn]], que no puede ser negativa en un modelo de pista rigida ideal.

Cuando el cuerpo pasa por la cima del loop, tanto el peso como la normal pueden contribuir a la curvatura. Ese punto es el mas critico porque el contacto es fragil: una pequena reduccion de velocidad puede llevar a [[Nn]] igual a cero y, por debajo de ese umbral, a perdida de contacto. Desde el punto de vista didactico, este tema une tres ideas que suelen estudiarse separadas: ecuacion radial, condicion limite de contacto y lectura energetica entre punto bajo y punto alto.

La utilidad practica es directa. En atracciones mecanicas, pistas de entrenamiento o bancos de prueba, no basta con calcular una velocidad; hay que justificar por que esa velocidad mantiene contacto con margen y bajo que supuestos deja de ser valida. Por eso en este leaf el numero final nunca se interpreta solo: siempre se acompana de lectura causal, condicion de validez y criterio de decision.

## 🟢 Nivel esencial

La intuicion esencial es simple: para sostener movimiento curvo hace falta una accion hacia el centro. Si esa accion no alcanza, la trayectoria deja de seguir la geometria impuesta. En un loop vertical, la situacion mas exigente ocurre arriba, donde el sistema depende de tener suficiente rapidez para que la curvatura requerida no supere lo que pueden aportar las fuerzas reales.

El error mas frecuente en este nivel es hablar de "fuerza centripeta" como una fuerza extra. En realidad, la curvatura es el efecto, y las fuerzas reales son la causa. En la cima, esas fuerzas son peso y normal; en la base, la normal cambia de valor y el problema de contacto deja de ser critico, aunque la carga mecanica pueda ser mayor.

Tambien conviene fijar una idea de transferencia: la velocidad en la cima y la velocidad en la base no cumplen la misma funcion fisica. Si se confunden esos estados, la interpretacion se rompe aunque la algebra parezca correcta.

## 🔵 Nivel formal

El marco cuantitativo del leaf se organiza en cinco relaciones nucleares.

**Ecuacion radial general:**

{{f:radial_general}}

Relaciona la exigencia radial [[Frad]] con [[m]], [[v]] y [[r]]. En el loop, esta ecuacion funciona como columna vertebral para interpretar cualquier punto de la trayectoria.

**Ecuacion radial en el punto alto:**

{{f:punto_alto}}

Vincula [[Nn]] y [[vT]] en la cima. Si el valor calculado de [[Nn]] cae por debajo de cero, el supuesto de contacto falla.

**Velocidad minima en el punto alto:**

{{f:velocidad_minima_alto}}

Es la condicion critica derivada al imponer contacto limite en la cima. Sirve como umbral fisico: por encima hay contacto; por debajo, no.

**Ecuacion radial en el punto bajo:**

{{f:punto_bajo}}

Describe la carga de contacto en la base usando [[vB]]. Aunque aqui no se decide la perdida de contacto, si se evalua la severidad de la carga normal.

**Velocidad minima en el punto bajo:**

{{f:velocidad_minima_bajo}}

Conecta el requisito de la cima con la rapidez minima de entrada en la base bajo conservacion de [[E]]. Es una relacion clave para diseno de condiciones iniciales.

Un procedimiento formal robusto separa tres pasos: identificar punto de analisis, elegir ecuacion radial correspondiente y cerrar con criterio de validez fisica. No basta con sustituir datos: hay que verificar signos, dominios y consistencia de unidades.

## 🔴 Nivel estructural

En nivel estructural se decide si el resultado es util para operar o solo para ilustrar. La primera pregunta no es "cuanto da" sino "que tan estable es la conclusion ante variaciones razonables".

Hay tres zonas de decision practicas:

1. **Zona segura**: [[vT]] supera claramente el umbral de cima y [[Nn]] es positiva con margen.
2. **Zona sensible**: [[vT]] esta cerca del umbral; pequenas variaciones en [[r]] o en perdidas energeticas pueden cambiar la conclusion.
3. **Zona invalida**: la prediccion exige [[Nn]] negativa o depende de hipotesis que ya no representan el sistema real.

Esta lectura estructural evita dos riesgos: sobredimensionar confianza en un numero "bonito" y ocultar que el modelo ideal excluye mecanismos relevantes, como rozamiento distribuido, deformacion de pista o excitaciones no planas.

Tambien permite conectar seguridad y confort. En la cima interesa evitar perdida de contacto; en la base interesa limitar picos de normal. Por eso el par [[vT]]-[[vB]] se interpreta en conjunto, no como resultados aislados.

## Interpretación física profunda

La interpretacion fisica de este leaf debe responder cuatro preguntas concretas:

1. ¿Que exige la curvatura en el punto estudiado?
2. ¿Que fuerzas reales satisfacen esa exigencia?
3. ¿Existe margen de contacto o estamos en borde critico?
4. ¿Que variable conviene intervenir para aumentar robustez?

Si el sistema esta cerca del limite de cima, la accion mas efectiva suele ser aumentar velocidad de entrada en la base o reducir radio objetivo de operacion solo si el contexto de diseno lo permite. Si el problema es carga excesiva en la base, el criterio cambia: puede ser preferible ajustar radio o perfil de entrada para moderar [[Nn]].

Este analisis muestra por que [[Frad]] no es una fuerza extra dibujada en el diagrama, sino lectura de la resultante requerida. Tambien muestra por que [[ac]] no es un dato decorativo: es la medida de la curvatura dinamica que el sistema debe sostener en cada punto.

## Orden de magnitud

Referencias utiles para detectar errores de escala:

**[[m]]**: 0.01 - 10000 kg

**[[r]]**: 0.1 - 100 m

**[[g]]**: 9.78 - 9.82 m/s^2

**[[v]]**: 0.1 - 100 m/s

**[[vT]]**: 0.5 - 50 m/s

**[[vB]]**: 1 - 100 m/s

**[[Nn]]**: 0 - 100000 N

**[[Frad]]**: 0 - 100000 N

**[[ac]]**: 0.1 - 1000 m/s^2

**[[E]]**: 0.1 - 1000000 J

Si un calculo cae varios ordenes de magnitud fuera de estos rangos sin justificacion fisica, lo correcto es revisar unidades, suposiciones y seleccion de formula.

## Método de resolución personalizado

1. Definir el punto de analisis: cima, base o punto generico.
2. Fijar convencion radial y diagrama de fuerzas.
3. Aplicar ecuacion radial apropiada.
4. Verificar contacto con condicion sobre [[Nn]].
5. Si se requiere, enlazar cima y base con conservacion de [[E]].
6. Reportar resultado con margen y limite de validez.

Este metodo minimiza errores de interpretacion porque obliga a cerrar con lectura causal y no solo numerica.

## Casos especiales y ejemplo extendido

**Caso especial 1**: contacto limite en la cima, donde [[Nn]] se anula y la rapidez coincide con el umbral critico.

**Caso especial 2**: entrada apenas superior al minimo, con alta sensibilidad a perdidas energeticas no modeladas.

**Caso especial 3**: base con carga normal elevada aunque exista contacto en cima, mostrando que completar el loop no implica baja exigencia mecanica.

En un ejemplo extendido completo, se calcula primero el umbral de cima, luego la velocidad minima en base y finalmente la carga de contacto en base para una velocidad operacional dada. Esa secuencia integra criterio de seguridad y de carga estructural en un solo flujo.

## Preguntas reales del alumno

**¿Si [[m]] aumenta cambia la velocidad minima de contacto?**
No en el modelo ideal de este leaf: la masa escala fuerzas, pero no el umbral de velocidad critica.

**¿Por que necesito [[vB]] si la condicion critica se evalua arriba?**
Porque la operacion inicia abajo y la conservacion de [[E]] conecta ambas secciones del loop.

**¿Puede haber resultado correcto con [[Nn]] negativa?**
Algebraicamente puede aparecer, pero fisicamente indica salida del dominio de contacto del modelo.

**¿Que variable conviene ajustar primero para ganar margen?**
Depende del objetivo: para evitar despegue en cima suele intervenirse velocidad de entrada; para reducir carga en base puede intervenirse radio o perfil dinamico.

## Conexiones transversales y rutas de estudio

Este leaf conecta con concepto-fuerza-centripeta, con curvas-planas-y-peraltadas y con ejemplos-tipicos del mismo bloque. Tambien enlaza con temas de energia mecanica y con modelado de contacto en sistemas de transporte y entretenimiento.

Una ruta recomendada es: primero dominar lectura radial general, luego contacto en cima, despues conexion energetica cima-base y finalmente analisis de carga en base. Esa progresion favorece transferencia a problemas mas complejos con perturbaciones o perdidas.

## Síntesis final

Loop vertical y condicion de contacto no es un conjunto de recetas; es un marco para decidir si una trayectoria curvada puede sostenerse con contacto real y con que margen. Al integrar [[Frad]], [[Nn]], [[vT]], [[vB]] y [[E]], el estudiante pasa de resolver ecuaciones a justificar decisiones fisicas. Esa es la competencia central que este leaf debe consolidar.
