const e=`\uFEFF# Enunciado y condiciones de aplicación del principio\r
\r
## Contexto conceptual\r
\r
El principio de conservación del momento lineal es una de las leyes más profundas y universales de la física. A diferencia de otras leyes que dependen de la naturaleza específica de las fuerzas (como la ley de Hooke para resortes o la ley de gravitación), la conservación del momento surge de una propiedad fundamental del espacio mismo: su **homogeneidad**. Esto significa que las leyes de la física no cambian si desplazamos todo un sistema de un lugar a otro.\r
\r
Para que este principio sea útil en la resolución de problemas, no basta con conocer la fórmula; es imperativo entender bajo qué circunstancias exactas el [[momento_lineal_total]] de un sistema permanece invariable. Este leaf establece las bases para identificar sistemas aislados, definir fronteras de interacción y validar el uso de la conservación en procesos de impacto.\r
\r
## 🟢 Nivel esencial\r
\r
La idea central de este principio es que, en un sistema de objetos que interactúan entre sí, la "cantidad de movimiento" total no cambia a menos que algo desde fuera del sistema intervenga.\r
\r
### ¿Qué es un sistema aislado?\r
Un sistema se considera aislado cuando no hay influencias externas que modifiquen su estado de movimiento global. Imagina dos patinadores sobre hielo que se empujan mutuamente. Aunque ambos cambien su [[velocidad_individual]], el conjunto sigue manteniendo el mismo movimiento total que tenía antes del empujón. Esto ocurre porque el empujón es una **fuerza interna**.\r
\r
Para aplicar el principio, primero debemos:\r
1. **Identificar los cuerpos**: Decidir qué objetos forman parte de nuestro "equipo" o sistema. Cada cuerpo tiene una [[masa_individual]] propia con índice numérico.\r
2. **Revisar fuerzas externas**: Comprobar si hay empujones o fricción que provengan de objetos fuera de nuestro equipo. La [[fuerza_externa_neta]] total debe ser nula.\r
3. **Verificar el intervalo**: Asegurarnos de que estamos analizando el [[momento_lineal_total]] justo antes y justo después de una interacción breve en un [[tiempo]] de contacto pequeño.\r
\r
> [!IMPORTANT]\r
> La conservación del momento no significa que nada cambie; significa que los cambios internos se compensan exactamente entre sí.\r
\r
## 🔵 Nivel formal\r
\r
### El lenguaje del momento lineal\r
Para cuantificar estas ideas, definimos el [[momento_lineal_individual]] de cada partícula como el producto de su [[masa_individual]] por su [[velocidad_individual]]. En este leaf, utilizamos la fórmula **pi**:\r
\r
\r
Donde el momento es una magnitud vectorial. El [[momento_lineal_total]] de un sistema de partículas es la suma vectorial de todos los momentos individuales, lo que también se puede expresar en términos de la [[masa_total]] y la [[velocidad_centro_de_masas]] mediante la fórmula **P**:\r
\r
\r
### El Teorema del Impulso y la Variación\r
La segunda ley de Newton nos dice que la [[fuerza_externa_neta]] ([[Fext]]) aplicada a un sistema es igual a la tasa de cambio de su momento total. La [[variacion_momento_lineal]] ocurre cuando existe un impulso externo, como se describe en la fórmula **DeltaP**:\r
\r
\r
Donde la diferencia entre el [[Pfinal]] y el [[Pinitial]] es causada por el entorno.\r
\r
### La Condición de Conservación\r
El principio de conservación es un caso especial de la relación anterior. Si la [[fuerza_externa_neta]] es nula, entonces la [[variacion_momento_lineal]] es cero. Esta es la **condicion_aislamiento** (fórmula **cond**):\r
\r
\r
Bajo esta condición, el [[Pinitial]] debe ser igual al [[Pfinal]] (**cons_principle**):\r
\r
\r
### Identidades estructurales de aplicación\r
Dependiendo del tipo de proceso, la conservación se manifiesta de formas específicas:\r
\r
- **Balance General**: Para cualquier interacción entre dos masas ([[m1]] y [[m2]]), usamos la fórmula de balance universal que relaciona las velocidades iniciales ([[v1i]], [[v2i]]) con las finales ([[v1f]], [[v2f]]):\r
\r
\r
- **Acoplamiento**: En choques donde los cuerpos se unen a una velocidad final común [[vf]], usamos la relación de colisión inelástica:\r
\r
\r
- **Separación**: Para explosiones desde el reposo o retrocesos, aplicamos la ley de retroceso:\r
\r
{{f:recoil_law}}\r
\r
{{f:cons_principle}}\r
\r
{{f:inelastic_collision}}\r
\r
{{f:pi}}\r
\r
{{f:DeltaP}}\r
\r
{{f:P}}\r
\r
{{f:general_1d_balance}}\r
\r
{{f:cond}}\r
\r
## 🔴 Nivel estructural\r
\r
### Simetría de traslación y Teorema de Noether\r
Desde una perspectiva avanzada, la conservación del momento es una consecuencia del **Teorema de Noether**. La invariancia del Lagrangiano de un sistema bajo traslaciones espaciales implica necesariamente que el momento lineal es una constante del movimiento. Si el espacio no tuviera esta simetría, el momento lineal no se conservaría.\r
\r
### La Aproximación Impulsiva\r
En la realidad, los sistemas raramente están perfectamente aislados. Siempre hay gravedad o fricción. Sin embargo, utilizamos la **aproximación impulsiva** para colisiones. Las fuerzas internas del impacto son órdenes de magnitud mayores que las externas. Como el choque ocurre en un [[tiempo]] extremadamente corto, el impulso de las fuerzas externas es despreciable, validando el uso de las leyes de balance.\r
\r
### Centro de Masas y Sistema Inercial\r
El [[momento_lineal_total]] de un sistema es equivalente al momento de una partícula con la [[masa_total]] situada en el centro de masas y moviéndose a la [[velocidad_centro_de_masas]]. Si el sistema está aislado, el centro de masas se mueve con velocidad constante.\r
\r
## Interpretación física profunda\r
\r
Cada vez que aplicamos este principio, estamos asumiendo que el universo es "ciego" a la posición absoluta. El [[momento_lineal_total]] es la moneda de cambio del movimiento; las fuerzas internas son simplemente transacciones entre cuentas del mismo sistema. La belleza de la conservación reside en predecir estados finales sin conocer los detalles de la interacción.\r
\r
Desde el punto de vista operativo, el principio actúa como un invariante global: aunque las [[velocidad_individual]] de cada partícula cambien drásticamente durante un choque, la suma vectorial de todos los [[momento_lineal_individual]] permanece inalterada. Esto permite calcular cualquier velocidad desconocida con solo conocer las masas y las velocidades previas, sin necesidad de modelar las fuerzas de contacto, cuya duración y perfil temporal son generalmente desconocidos. Este poder predictivo, independiente de los detalles microscópicos de la interacción, es el rasgo más profundo y útil del principio de conservación del [[momento_lineal_total]].\r
\r
## Orden de magnitud\r
\r
En una colisión subatómica, las fuerzas internas son tan inmensas y el [[tiempo]] tan breve que la gravedad es 10^40 veces más débil, haciendo que la conservación sea perfecta. En un choque de trenes, las fuerzas de impacto pueden alcanzar millones de Newtons, haciendo que la fricción de los raíles sea irrelevante durante los primeros milisegundos.\r
\r
## Método de resolución personalizado\r
\r
1. **Definir el sistema**: Identificar las masas individuales ([[m1]], [[m2]]).\r
2. **Listar fuerzas externas**: Identificar si existe [[Fext]].\r
3. **Evaluar aislamiento**: Verificar si la [[variacion_momento_lineal]] puede considerarse nula.\r
4. **Elegir ejes** y proyectar la velocidad ([[v1i]], [[v2i]], etc.) de cada cuerpo.\r
5. **Escribir el balance**: Usar la fórmula de balance adecuada (**cons_principle** o sus derivadas).\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Retroceso de un arma.** El sistema parte del reposo. Por tanto, el arma debe retroceder con una velocidad [[v1f]] opuesta a la del proyectil [[v2f]].\r
\r
**Propulsión a chorro.** Al expulsar gas hacia atrás, el cohete gana momento hacia adelante para que el [[momento_lineal_total]] del conjunto se mantenga.\r
\r
## Preguntas reales del alumno\r
\r
- **¿Por qué no se conserva el momento de una pelota que rebota?** Porque el suelo es externo y aplica una fuerza ([[Fext]]).\r
- **¿Qué pasa si hay fricción?** El [[momento_lineal_total]] cambiará gradualmente según el [[tiempo]] de actuación.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
- **Continuidad**: [Aplicaciones del principio](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/conservacion-momento-lineal/principio-de-conservacion/aplicaciones-del-principio-de-conservacion).\r
- **Relación con Energía**: En choques aislados, el momento siempre se conserva.\r
\r
## Síntesis final\r
\r
El éxito en el uso de la conservación depende de identificar las condiciones de aislamiento. Un sistema es apto si su frontera no es atravesada por impulsos significativos, permitiendo que el [[momento_lineal_total]] se mantenga constante.\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
