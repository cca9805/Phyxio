const e=`# Descomposicion vectorial

## Contexto conceptual

Este leaf no trata de dibujar fuerzas por separado ni de identificar quien empuja a quien. Ese trabajo pertenece a otros temas. Aqui el foco es distinto: tomar un vector ya definido y convertirlo en componentes sobre ejes elegidos para poder decidir que efecto domina en cada direccion.

La magnitud central es [[Fm]]. Pero el valor de [[Fm]] por si solo rara vez responde una pregunta de dinamica aplicada. Lo que decide comportamiento en un sistema real es como ese vector se reparte en [[Fx]] y [[Fy]], o en [[Ppar]] y [[Pperp]] cuando rotamos ejes para una rampa. Esa lectura por componentes es el nucleo de este tema.

En lenguaje operativo: descomponer no es algebra decorativa. Es una operacion de interpretacion causal. Permite conectar una medida geometrica ([[theta]]) con decisiones fisicas concretas: si aumenta la traccion util, si crece la carga de contacto [[N]], si el margen de friccion [[fk]] mejora o empeora, y si la aceleracion [[a]] esperada cambia de signo.

## 🟢 Nivel esencial

La intuicion fundamental es simple: una misma fuerza puede producir efectos diferentes segun el eje desde el que la mires. Si tiras una caja con una cuerda inclinada, una parte del esfuerzo empuja hacia delante y otra parte modifica el contacto vertical.

Por eso, el modulo total [[Fm]] no basta para decidir que pasara. La pregunta correcta es: cuanto del vector actua en la direccion que me interesa. Esa es la razon de ser de la descomposicion vectorial.

En este nivel esencial no buscamos detalle algebraico, sino criterio fisico: declarar ejes, leer direccion dominante y evitar conclusiones intuitivas sin referencia geometrica.

Un habito util en esta etapa es formular preguntas cualitativas antes de calcular: que componente esperas que domine, que parametro geometrico podria invertir el resultado, y que magnitud de contacto podria limitar el efecto deseado. Este tipo de preguntas reduce errores de reemplazo mecanico y prepara el paso al nivel formal.

Tambien conviene usar comparaciones extremas sencillas. Si [[theta]] se acerca a cero, intuitivamente esperas mayor efecto longitudinal y menor efecto vertical; si [[theta]] aumenta mucho, ocurre lo contrario. Estos contrastes no sustituyen formulas, pero construyen una intuicion verificable que mejora la calidad del calculo posterior.

## 🔵 Nivel formal

En el nivel formal se expresan las proyecciones con relaciones explicitas del leaf. Primero, descomposicion cartesiana de una fuerza inclinada:

{{f:comp_cartesianas}}

Cuando se quiere resolver por componente de forma directa:

{{f:comp_cartesianas_fx}}

{{f:comp_cartesianas_fy}}

Y para verificar consistencia interna del calculo:

{{f:modulo_desde_componentes}}

Si el escenario es de plano inclinado y el vector a descomponer es el peso, se trabaja en ejes paralelo/perpendicular al plano:

{{f:comp_plano_inclinado}}

{{f:comp_plano_inclinado_paralela}}

{{f:comp_plano_inclinado_perpendicular}}

Estas siete relaciones forman un bloque coherente. No se eligen por memoria de examen, sino por correspondencia entre eje elegido y pregunta fisica:

- Si la pregunta es avance longitudinal, interesa [[Fx]] o [[Ppar]].
- Si la pregunta es carga de contacto, interesa [[Fy]] o [[Pperp]] y su efecto sobre [[N]].
- Si la pregunta es coherencia de descomposicion, interesa reconstruir [[Fm]].

La validacion formal minima incluye tres chequeos:

1) Ninguna componente debe superar en modulo al vector que se proyecta.
2) El signo de cada componente debe coincidir con la convencion de ejes declarada.
3) El cambio de eje debe explicitarse; no se mezclan formulas de horizontal con formulas de rampa sin justificar rotacion.

## 🔴 Nivel estructural

El nivel estructural responde cuando conviene dejar el modelo simple y pasar a uno mas rico. La descomposicion vectorial funciona muy bien, pero depende de supuestos:

- Angulo [[theta]] bien definido desde un eje declarado.
- Geometria local estable durante el intervalo analizado.
- Contacto representable con un [[muk]] efectivo aproximadamente constante.
- Acoplamientos secundarios (deformacion, vibracion fuerte, oscilaciones) pequenos frente al efecto principal.

Cuando estos supuestos fallan, aparecen sintomas observables:

- Inconsistencia sistematica entre componente estimada y comportamiento medido.
- Sensibilidad excesiva a cambios pequenos de [[theta]].
- Variacion de [[fk]] no explicable por cambios de [[N]] solamente.
- Regimen mixto donde el signo de [[a]] cambia sin que cambie el signo de componente motriz esperada.

Ahi se vuelve necesaria una transicion metodica:

1) Mantener la descomposicion como base de lectura.
2) Introducir modelo de contacto no lineal (dependencia de [[muk]] con velocidad o temperatura).
3) Si hay oscilacion, agregar dinamica acoplada con nuevos grados de libertad.

Esta transicion no niega el modelo inicial. Lo extiende. Y mantener clara esa continuidad es parte de la alfabetizacion fisica que busca Phyxio.

## Interpretacion fisica profunda

Interpretar bien significa explicar por que una componente crece, por que otra decrece, y que decision tecnica se desprende de eso. Dos ejemplos rapidos:

- Si aumenta [[theta]] en una rampa, [[Ppar]] aumenta y [[Pperp]] disminuye. Resultado: mayor tendencia al deslizamiento y menor margen de adherencia.
- Si en un arrastre horizontal sube [[Fy]] manteniendo [[Fm]], entonces [[Fx]] suele bajar para ese mismo [[Fm]] y el empuje util longitudinal puede disminuir.

Esa lectura evita decisiones incorrectas del tipo "sube el modulo y ya". A veces subir [[Fm]] sin cambiar orientacion solo incrementa carga no util. En otras situaciones, una pequena correccion angular produce mas efecto que aumentar potencia.

## Orden de magnitud

Un mapa de ordenes de magnitud utiles para chequeo rapido:

- [[Fm]]: decenas a cientos de N en problemas escolares y de laboratorio.
- [[Fx]], [[Fy]]: comparables a [[Fm]], nunca mayores en modulo.
- [[W]]: [[m]]*[[g]], con [[g]] aproximadamente 9.81 m/s^2 en superficie terrestre.
- [[Ppar]]: crece con [[theta]]; para angulos pequenos suele ser menor que [[Pperp]].
- [[Pperp]]: suele dominar en rampas suaves.
- [[N]]: cercano a [[Pperp]] cuando no hay otras fuerzas verticales relevantes.
- [[fk]]: acotada por [[muk]] y [[N]].
- [[a]]: signo y magnitud dependen del balance de componentes en el eje de movimiento.

Si un resultado viola este mapa basico, conviene revisar trigonometria, signos y convencion angular antes de seguir.

## Metodo de resolucion personalizado

1. Declarar ejes y referencia angular.
2. Identificar vector a proyectar ([[Fm]] o [[W]]).
3. Elegir formulas del leaf segun eje objetivo.
4. Calcular componentes y comprobar coherencia de modulo.
5. Traducir componentes a lectura causal (traccion, contacto, friccion, tendencia de [[a]]).
6. Comparar con observacion y decidir si el modelo simple sigue siendo valido.

Este metodo separa calculo de interpretacion, y ambos son obligatorios para una solucion robusta.

## Casos especiales y ejemplo extendido

Caso especial A: [[theta]] cercano a 0 deg.

- En cartesiano, [[Fy]] tiende a 0 y [[Fx]] se acerca a [[Fm]].
- En rampa casi horizontal, [[Ppar]] es pequena y [[Pperp]] se aproxima a [[W]].

Caso especial B: [[theta]] cercano a 90 deg en cartesiano.

- [[Fx]] cae hacia 0 y [[Fy]] concentra casi todo [[Fm]].

Caso especial C: cambio de eje sin cambio de fuerza.

- El vector fisico no cambia, pero la lectura por componentes si cambia; por eso es obligatorio declarar sistema de referencia cada vez.

Ejemplo extendido:

En un transportador inclinado, el equipo detecta deslizamiento intermitente. Se descompone [[W]] en [[Ppar]] y [[Pperp]], se estima [[N]], se calcula margen de [[fk]], y luego se mide orientacion de [[T]] para verificar si la traccion util en eje paralelo es suficiente. El diagnostico final muestra que no fallaba el motor sino la combinacion de humedad y angulo de traccion.

## Preguntas reales del alumno

"Si conozco [[Fm]], por que necesito [[Fx]] y [[Fy]]?"

Porque el movimiento en cada eje responde a su componente correspondiente. [[Fm]] es resumen; [[Fx]] y [[Fy]] son mecanismos.

"Cuando uso formulas de rampa y cuando uso formulas cartesianas?"

Cuando tus ejes son horizontal/vertical usa cartesiano. Cuando tus ejes son paralelo/perpendicular a la rampa usa formulas de plano inclinado. Lo importante es coherencia entre eje y formula.

"Puede haber [[Ppar]] grande pero [[a]] pequena?"

Si. Basta con que [[fk]] o otra componente opuesta compensen gran parte del efecto motriz.

"Que error me tumba mas rapido en examen?"

Confundir referencia angular y permutar seno/coseno. El segundo error es perder signo en componentes.

## Conexiones transversales y rutas de estudio

Este leaf conecta con:

- Diagramas de cuerpo libre: identifica fuerzas; este leaf las proyecta.
- Segunda ley en componentes: usa [[Fx]] y [[Fy]] para ecuaciones por eje.
- Friccion: integra [[N]], [[muk]] y [[fk]] en la decision de movimiento.
- Trabajo y energia: usa componentes para interpretar contribucion de fuerzas a cambios energeticos.

Ruta sugerida: identificar fuerzas -> descomponer -> cerrar balance por eje -> validar modelo -> escalar a sistema mas complejo.

## Sintesis final

Descomponer vectorialmente es convertir una descripcion global en una lectura operativa por ejes. Esa conversion permite decidir con fundamento: que causa domina, que limite manda y que accion corrige el sistema.

El criterio de calidad no es obtener un numero bonito, sino lograr coherencia entre geometria, formulas y fenomeno observado. Si esa coherencia se mantiene, el modelo es util. Si se rompe, el mismo analisis por componentes indica donde y como extenderlo.
`;export{e as default};
