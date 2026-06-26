# Ejemplos de equilibrio

## Contexto conceptual

Este leaf no introduce una sola ley nueva, sino una habilidad de alto valor: comparar configuraciones distintas de equilibrio traslacional y decidir que interaccion domina en cada caso. En un apoyo horizontal, la respuesta clave suele ser la normal [[N]]. En una rampa, importa como el peso [[W]] se proyecta con el angulo [[alpha]]. En un nudo con cables, la tension [[T]] depende de la geometria [[theta]].

La idea central es pasar de receta a criterio. No basta con saber despejar; hay que identificar que modelo aplica, que ejes convienen y que magnitudes deben contrastarse para justificar reposo. Por eso este leaf conecta directamente con la lectura de DCL y con interpretacion causal de resultados.

## 🟢 Nivel esencial

Cuando un sistema esta en equilibrio, no significa que no haya fuerzas. Significa que las fuerzas se compensan de forma tal que la resultante traslacional es compatible con cero. Esa compensacion puede ocurrir por pares directos, como peso y normal, o por componentes, como dos tensiones oblicuas que sostienen una carga central.

En este nivel interesa entrenar tres preguntas:

1. Que fuerza intenta mover el sistema?
2. Que interaccion puede compensarla?
3. Bajo que condicion deja de sostenerse esa compensacion?

Ejemplo intuitivo: en una rampa, la parte del peso alineada con la pendiente intenta deslizar el bloque. El contacto puede oponerse hasta un limite dado por la adherencia disponible. Si la demanda supera esa capacidad, el reposo falla.

Otro ejemplo: en un nudo simetrico con dos cables, reducir [[theta]] parece acercar los cables a la horizontal y, por intuicion ingenua, podria parecer que "ayuda". En realidad vuelve menos eficiente la componente vertical de cada cable y exige mayor [[T]].

## 🔵 Nivel formal

La conversion entre masa [[m]] y peso [[W]] se expresa con:

{{f:peso_desde_masa}}

La reaccion normal sobre plano inclinado se modela con:

{{f:normal_plano_inclinado}}

La componente del peso paralela a la rampa se representa con:

{{f:componente_paralela_del_peso}}

El limite de rozamiento estatico disponible se calcula con:

{{f:rozamiento_estatico_limite}}

La tension de cada cable en nudo simetrico se obtiene con:

{{f:tension_nudo_simetrico}}

Estas relaciones forman un circuito formal coherente. Primero, [[m]] y [[g]] fijan [[W]]. Luego, [[W]] se descompone con [[alpha]] para estimar demanda tangencial y compresion normal. Con [[mu_s]] y [[N]] se obtiene [[F_s_max]] para evaluar si hay adherencia suficiente. En el caso de cables, [[W]] y [[theta]] definen [[T]] requerida para sostener la carga.

En terminos de metodo formal, conviene conservar trazabilidad de pasos intermedios. Registrar [[W]], [[N]], [[W_parallel]] y [[F_s_max]] antes de concluir evita errores de salto algebraico y facilita detectar donde cambia el signo fisico de una conclusion. En sistemas de cables, registrar la sensibilidad de [[T]] frente a cambios pequenos de [[theta]] mejora la calidad del diagnostico y prepara una interpretacion mas robusta.

Una lectura experta no trata estas ecuaciones como islas. Las encadena y contrasta: si [[W_parallel]] supera [[F_s_max]], no existe solucion de reposo coherente en ese modelo. Si [[theta]] disminuye, la expresion de tension predice crecimiento rapido de [[T]], lo que debe reflejarse en una interpretacion fisica y en una decision de diseño.

## 🔴 Nivel estructural

El valor del leaf esta en decidir cuando un ejemplo es realmente comparable con otro y cuando no. Para comparar bien, debes mantener explicitas las hipotesis:

1. Marco casi estatico: aceleracion traslacional despreciable.
2. Contacto idealizado: uso de [[mu_s]] como parametro agregado.
3. Geometria conocida: [[alpha]] y [[theta]] bien definidos respecto de ejes declarados.
4. Cuerdas ideales: tension uniforme y masa de cable despreciable.

Si una de estas hipotesis falla, el contraste entre ejemplos pierde validez. Por ejemplo, comparar una rampa con vibracion importante contra un caso estatico simple produce conclusiones engañosas sobre [[F_s_max]]. Del mismo modo, usar el modelo simetrico de cables en un montaje asimetrico de anclajes lleva a estimaciones sesgadas de [[T]].

Tambien hay limites de transferibilidad. Que un metodo funcione en un problema de aula no implica que sirva sin ajuste en campo. En aplicaciones reales aparecen tolerancias de montaje, incertidumbre angular y dispersion de materiales. La comparacion entre ejemplos debe incorporar esas variaciones para evitar decisiones binarias fragiles.

Como cierre estructural, conviene documentar siempre cual parametro acerca primero al limite: en rampa suele ser [[alpha]] por su efecto en [[W_parallel]], y en cables suele ser [[theta]] por su efecto sobre [[T]]. Ese registro mejora la transferencia entre ejemplos.

## Interpretación física profunda

Comparar ejemplos de equilibrio es, en el fondo, comparar mecanismos de compensacion. En apoyos domina la reaccion normal. En rampas domina la competencia entre demanda tangencial y capacidad de adherencia. En cables domina la eficiencia geometrica de la componente vertical.

Esta mirada permite detectar errores que pasan inadvertidos al resolver solo algebra. Si en una rampa muy inclinada aparece un [[W_parallel]] pequeño, la proyeccion probablemente esta mal. Si en un sistema de cables casi horizontales la tension sale baja, hay inconsistencia de referencia angular o de descomposicion.

La interpretacion tambien ordena decisiones: no toda diferencia numerica importa por igual. Lo importante es que variable acerca al sistema al limite de validez del modelo. En rampa suele ser la brecha entre [[W_parallel]] y [[F_s_max]]. En cables suele ser la cercania entre [[T]] calculada y el limite admisible del elemento real.

## Orden de magnitud

Escalas utiles para chequeo rapido:

- [[m]]: 0.1 a 200 kg en laboratorio y prototipos.
- [[g]]: cercano a nueve coma ocho metros por segundo al cuadrado en entorno terrestre.
- [[W]]: 1 a 1e5 N segun masa y contexto.
- [[N]]: 0 a 1e5 N, usualmente no superior a [[W]] en rampas convencionales.
- [[W_parallel]]: 0 a [[W]], creciente con [[alpha]].
- [[mu_s]]: 0 a 1.2 en contactos secos comunes.
- [[F_s_max]]: 0 a 1e4 N en muchos montajes didacticos.
- [[T]]: 10 a 1e4 N en sistemas de cable de escala educativa o tecnica.
- [[theta]] y [[alpha]]: tipicamente entre 0 y 1.57 rad en este leaf.

## Método de resolución personalizado

1. Delimita el sistema aislado para el ejemplo escogido.
2. Dibuja DCL completo y declara ejes.
3. Identifica magnitudes conocidas y objetivo fisico.
4. Selecciona relaciones del bloque formal segun mecanismo dominante.
5. Ejecuta calculo por etapas y guarda resultados intermedios.
6. Contrasta con criterio de validez del ejemplo.
7. Redacta interpretacion causal, no solo numerica.
8. Compara con otro ejemplo para extraer patron transferible.

## Casos especiales y ejemplo extendido

Caso especial de rampa: cuando [[alpha]] tiende a cero, [[W_parallel]] se reduce y la exigencia sobre adherencia cae. Caso contrario, al aumentar [[alpha]], la demanda tangencial crece y el margen de reposo disminuye.

Caso especial de cables: cuando [[theta]] se acerca a cero, la tension crece mucho para sostener el mismo [[W]]. Esto explica por que configuraciones visualmente "planas" son estructuralmente exigentes.

Ejemplo extendido: comparar tres sistemas con el mismo [[W]] pero distinta geometria de soporte permite mostrar que la magnitud dominante cambia con el mecanismo de transmision de fuerza y no solo con la carga total.

## Preguntas reales del alumno

Por que dos problemas con la misma masa pueden dar tensiones tan distintas?
Porque la geometria de soporte cambia la proyeccion efectiva de las fuerzas.

Si tengo [[F_s_max]] grande, siempre hay reposo en rampa?
No. Debes compararlo con [[W_parallel]] para ese [[alpha]] concreto.

Por que etiquetar [[g]] y [[m]] si parecen datos obvios?
Porque de ellos nace [[W]], y un error temprano contamina toda la cadena.

## Conexiones transversales y rutas de estudio

Este leaf conecta con condicion de sumatoria de fuerzas, descomposicion vectorial y modelos de contacto. Tambien prepara el salto a equilibrio rotacional y a problemas combinados donde fuerzas y momentos deben cerrarse simultaneamente.

En ingenieria aplicada, la comparacion entre ejemplos se traduce en criterio de pre-diseño: elegir configuraciones geometricas que reduzcan demandas maximas y aumenten margen de validez.

## Síntesis final

Dominar ejemplos de equilibrio significa dominar comparacion fisica, no solo calculo repetitivo. Con [[W]] como carga base y con [[N]], [[W_parallel]], [[F_s_max]] y [[T]] como respuestas del sistema, este leaf entrena a decidir que restriccion controla cada caso y cuando conviene cambiar de modelo.
