const e=`# Campo eléctrico

## Contexto conceptual

La electrostática estudia cómo las cargas eléctricas en reposo interactúan entre sí. La pregunta central que este leaf responde es: ¿cómo puede una carga ejercer fuerza sobre otra carga que se encuentra a distancia, sin contacto directo? La respuesta reside en el concepto de **campo eléctrico**: las cargas modifican el espacio que las rodea, y esa modificación es lo que actúa sobre otras cargas.

Antes del concepto de campo, la física describía la interacción eléctrica como una acción a distancia instantánea entre dos cargas. Faraday introdujo la idea de que el espacio entre las cargas no está vacío sino que está modificado por ellas, creando lo que llamó *líneas de fuerza*. Maxwell formalizó esta intuición en la magnitud vectorial que hoy denominamos campo eléctrico. Este leaf pertenece al bloque de fundamentos del electromagnetismo y es el paso inmediatamente posterior a la ley de Coulomb.

Comprender el campo eléctrico permite resolver un tipo de problema que requeriría conocer todas las cargas del entorno simultáneamente: basta con calcular el campo en un punto para predecir la fuerza sobre cualquier carga allí colocada.

## 🟢 Nivel esencial

El **campo eléctrico** [[E]] en un punto del espacio es una magnitud vectorial que describe la capacidad de ese punto para ejercer fuerza sobre una carga eléctrica. Es una **propiedad del espacio**, no de la carga que se coloque allí: el campo existe aunque no haya ninguna carga de prueba presente.

La forma más intuitiva de entenderlo es imaginar que cada carga modifica el espacio a su alrededor. Una carga positiva crea un campo que apunta radialmente hacia afuera, como si empujara todo lo que se le acerque. Una carga negativa crea un campo que apunta radialmente hacia adentro, como si atrajera todo. El **módulo de [[E]]** indica la intensidad de esa influencia: cuanto mayor es [[E]] en un punto, más intensa es la fuerza que experimenta cualquier carga colocada allí.

> [!NOTE]
> La diferencia clave con la fuerza eléctrica [[F_e]] es que [[E]] no depende de la carga de prueba [[q_0]] que uses para medirlo. Al dividir la fuerza entre la carga, el efecto de [[q_0]] desaparece y lo que queda es una propiedad pura del campo.

## 🔵 Nivel formal

La **definición operativa** del campo eléctrico parte de colocar una carga de prueba [[q_0]] positiva e infinitesimal en un punto y medir la fuerza [[F_e]] que experimenta. El campo en ese punto se define como el cociente entre ambas magnitudes:

{{f:campo_electrico_definicion}}

Esta definición garantiza que [[E]] sea independiente de [[q_0]]: si se duplica la carga de prueba, la fuerza también se duplica, y el cociente permanece constante. La carga de prueba debe ser infinitesimal para no perturbar la distribución de cargas que genera el campo.

Para la situación más fundamental, la de una **carga puntual** [[q_fuente]] aislada, el campo puede calcularse directamente usando la ley de Coulomb. El resultado es una expresión que depende de la constante [[k_e]], de la carga fuente [[q_fuente]] y de la distancia [[r]] al punto de evaluación:

{{f:campo_electrico_coulomb}}

La dirección del campo es radial: apunta alejándose de [[q_fuente]] si esta es positiva, y apuntando hacia ella si es negativa. El módulo de [[E]] decrece con el cuadrado de la distancia [[r]], lo que significa que alejarse multiplica la distancia pero divide la intensidad del campo por ese cuadrado.

La **fuerza** que experimenta cualquier carga real [[q_0]] colocada en un punto donde el campo vale [[E]] se obtiene despejando de la definición: la fuerza es el producto del campo por la carga. Esto ilustra el poder del concepto de campo: calcular [[E]] una sola vez y luego aplicarlo a cualquier carga de interés.

## 🔴 Nivel estructural

La estructura más profunda del campo eléctrico reside en el **principio de superposición**: el campo generado por un sistema de varias cargas en un punto es la suma vectorial de los campos individuales de cada carga. Este principio, que se deriva de la linealidad de las ecuaciones de Maxwell, permite abordar distribuciones arbitrariamente complejas de carga descomponiéndolas en contribuciones elementales.

La dependencia del campo con la distancia al cuadrado tiene consecuencias geométricas profundas. En tres dimensiones, la superficie esférica que rodea a una carga puntual crece con el cuadrado del radio. El número de líneas de campo que atraviesa esa superficie se mantiene constante, porque la carga encerrada no cambia. Por tanto, la densidad de líneas de campo —que representa la intensidad de [[E]]— decrece exactamente con el cuadrado de la distancia. Esta es la razón geométrica de la ley del cuadrado inverso.

> [!WARNING]
> La ley del cuadrado inverso se aplica a cargas **puntuales** en el **vacío**. Para distribuciones extendidas (placas, esferas cargadas, cilindros), el campo puede tener una forma muy diferente: puede ser uniforme (entre placas paralelas), decrecer con 1/r (cilindro largo) o ser cero dentro de una esfera conductora cargada.

Las **líneas de campo** son curvas tangentes al vector campo en cada punto. Nunca se cruzan, nacen en cargas positivas y terminan en cargas negativas (o en el infinito para distribuciones abiertas). La densidad local de líneas es proporcional al módulo de [[E]]: donde las líneas están más apretadas, el campo es más intenso.

El campo eléctrico está íntimamente ligado al **potencial eléctrico**: el campo es el gradiente negativo del potencial. Esto significa que [[E]] siempre apunta en la dirección en que el potencial decrece más rápidamente. Las superficies equipotenciales son siempre perpendiculares a las líneas de campo, lo que permite leer la dirección del campo a partir de los mapas de potencial.

La validez del modelo clásico tiene límites precisos. Para distancias del orden del radio clásico del electrón, aproximadamente 2.8×10⁻¹⁵ m, el modelo de carga puntual diverge físicamente y debe sustituirse por la electrodinámica cuántica. En medios materiales, el campo se ve reducido por la **permitividad relativa** del material, que actúa como factor de apantallamiento de la interacción coulombiana entre cargas.

## Interpretación física profunda

El signo de [[q_fuente]] determina completamente la **topología del campo** generado: una carga positiva crea un campo divergente (las líneas salen), mientras que una carga negativa crea un campo convergente (las líneas entran). Esta asimetría es la clave para entender por qué cargas del mismo signo se repelen y cargas de signo opuesto se atraen: en ambos casos, la carga de prueba se mueve en la dirección del campo que experimenta.

[[E]] es siempre una magnitud que depende de la posición en el espacio. Hablar de "el campo eléctrico de una carga" sin especificar el punto carece de significado preciso. La dependencia con el cuadrado de [[r]] hace que el campo varíe dramáticamente con la posición: a distancia doble la intensidad cae a una cuarta parte.

> [!TIP]
> El concepto de campo permite resolver el problema de la acción a distancia: la carga fuente no actúa directamente sobre la carga de prueba; actúa sobre el campo en cada punto del espacio, y es ese campo el que actúa localmente sobre la carga de prueba. La perturbación se propaga a velocidad finita (la de la luz), aunque en electrostática se trabaja con la aproximación estacionaria.

## Orden de magnitud

Las escalas típicas de [[E]] varían en muchos órdenes de magnitud. El campo eléctrico terrestre en la superficie es de unos 100 N/C. En el interior de un átomo de hidrógeno, a la distancia del radio de Bohr (aproximadamente 5×10⁻¹¹ m), el campo del protón sobre el electrón es del orden de 500 GN/C, es decir, 5×10¹¹ N/C. En un condensador industrial de alta tensión puede alcanzar valores del orden de 10⁶ N/C.

Un resultado superior a 10⁷ N/C en condiciones ordinarias de laboratorio es sospechoso: indicaría ionización de cualquier material. Un resultado inferior a 0.1 N/C con cargas del orden de microcoulombios a distancias de centímetros probablemente indica un error de potencia de diez.

## Método de resolución personalizado

Para calcular el campo eléctrico en un punto debido a una carga puntual:

1. Identificar [[q_fuente]] y su posición.
2. Medir o calcular la distancia [[r]] entre la carga fuente y el punto de evaluación.
3. Calcular el módulo de [[E]] usando la fórmula de Coulomb, introduciendo [[k_e]], [[q_fuente]] en valor absoluto y [[r]] al cuadrado.
4. Determinar la dirección: radial saliente si [[q_fuente]] es positiva, radial entrante si es negativa.
5. Si existen múltiples cargas, repetir para cada una y sumar vectorialmente los campos resultantes.

Para calcular la fuerza sobre una carga de prueba real a partir del campo conocido:

1. Conocer [[E]] en el punto de interés.
2. Multiplicar [[E]] por el valor de la carga [[q_0]] (con su signo).
3. La dirección de [[F_e]] coincide con [[E]] para carga positiva e invierte para carga negativa.

## Casos especiales y ejemplo extendido

**Campo en el interior de un conductor en equilibrio**: Dentro de un conductor macroscópico en equilibrio electrostático, el campo eléctrico es estrictamente nulo. Si existiera campo, las cargas libres del conductor se moverían hasta anularlo. Este resultado tiene consecuencias prácticas directas: el interior de una caja conductora (jaula de Faraday) está apantallado de cualquier campo externo.

**Campo en el eje de simetría de dos cargas iguales**: Para dos cargas positivas idénticas, el campo se cancela exactamente en el punto central del segmento que las une. Para cargas de signo opuesto (dipolo), no existe cancelación en el eje y el campo alcanza su máxima intensidad en el punto medio.

**Campo de un dipolo a grandes distancias**: Para distancias muy superiores a la separación entre las dos cargas del dipolo, el campo decae con el cubo de la distancia, no con el cuadrado. Esta diferencia tiene consecuencias fundamentales en física molecular: los campos de dipolo (agua, proteínas) son mucho más débiles a distancias macroscópicas que los campos de carga neta.

## Preguntas reales del alumno

**¿Por qué decimos que el campo existe aunque no haya carga de prueba?**

Porque el campo es la modificación del espacio causada por la carga fuente. La carga de prueba solo revela esa modificación, no la crea. Un experimento con distintas cargas de prueba siempre daría el mismo cociente [[F_e]] / [[q_0]], confirmando que [[E]] es una propiedad del punto.

**¿Por qué el campo no puede ser negativo en módulo?**

El módulo de cualquier vector es siempre no negativo. El signo aparece al proyectar el campo sobre una dirección: la componente puede ser negativa, indicando que [[E]] apunta en sentido contrario a la dirección elegida.

**¿Cuál es la diferencia entre [[F_e]] y [[E]]?**

[[F_e]] es la fuerza real sobre una carga específica; depende tanto del campo como de esa carga. [[E]] es una propiedad del espacio independiente de qué carga se coloque allí.

**¿Por qué las líneas de campo nunca se cruzan?**

Si se cruzaran, el campo tendría dos direcciones simultáneamente en ese punto, contradiciendo que [[E]] sea un vector bien definido en cada punto.

## Conexiones transversales y rutas de estudio

El campo eléctrico conecta directamente con la [ley de Coulomb](leaf:fisica-clasica/electromagnetismo/fundamentos/ley-de-coulomb), su fundamento para cargas puntuales. El paso siguiente es la [diferencia de potencial](leaf:fisica-clasica/electromagnetismo/electrostatica/potencial-electrico/diferencia-de-potencial), que integra el campo a lo largo de un camino y es más útil para cálculos de energía. La [energía potencial eléctrica](leaf:fisica-clasica/electromagnetismo/electrostatica/potencial-electrico/energia-potencial-electrica) completa ese triángulo conceptual.

En física avanzada, el campo generaliza a la teoría de Maxwell, donde los campos eléctrico y magnético se acoplan para formar ondas electromagnéticas. El campo es el objeto fundamental: no las cargas, sino las perturbaciones que generan en el espacio.

## Síntesis final

El campo eléctrico [[E]] es la magnitud vectorial que describe la influencia eléctrica de las cargas sobre el espacio que las rodea, independientemente de si hay otra carga presente. Su módulo indica la fuerza por unidad de carga de prueba, y decrece con el cuadrado de la distancia para distribuciones puntuales. Dominar este concepto es la llave de entrada al electromagnetismo: sin campo no hay potencial, sin potencial no hay condensador, y sin condensador no hay electrónica.
`;export{e as default};
