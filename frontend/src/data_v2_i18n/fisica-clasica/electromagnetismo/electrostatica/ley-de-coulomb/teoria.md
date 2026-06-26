## Contexto conceptual

La ley de Coulomb es el punto de partida de toda la electrostática clásica. Antes de que existiera esta ley, la electricidad era un conjunto de observaciones experimentales sin modelo cuantitativo: se sabía que los cuerpos cargados se atraían o repelían, pero no se podía predecir cuánto. Charles-Augustin de Coulomb formalizó en 1785 lo que hoy llamamos la primera ley fundamental del electromagnetismo clásico.

Esta ley ocupa en el electromagnetismo el mismo lugar que la ley de gravitación universal ocupa en la mecánica. Ambas describen fuerzas de largo alcance que decaen con el cuadrado de la distancia, pero la fuerza eléctrica es intrínsecamente más intensa: entre un protón y un electrón, la fuerza coulombiana supera a la gravitatoria en unos 39 órdenes de magnitud.

La ley de Coulomb no es solo un resultado histórico. Es el fundamento desde el que se construyen el campo eléctrico, el potencial eléctrico y, a través de la ley de Gauss, toda la electrostática de distribuciones continuas. Entender sus dependencias —lineal en cada carga, inversa cuadrática en la distancia— es prerequisito para cualquier análisis posterior en electromagnetismo.

## 🟢 Nivel esencial

Imagina dos pequeñas esferas cargadas. Si tienen el mismo tipo de carga —ambas positivas o ambas negativas— se repelen; si tienen carga opuesta, se atraen. Esta experiencia cotidiana tiene una estructura cuantitativa precisa.

La **fuerza de Coulomb** [[fuerza_de_coulomb]] entre dos cargas depende de tres factores: cuánta carga tiene cada objeto (magnitudes [[q1]] y [[q2]]), cuán separados están ([[r12]]) y el medio donde se encuentran. En el vacío, la fuerza es mayor cuanto mayores son las cargas y menor cuanto más lejos están. El aspecto más importante —y el que más confunde— es que la fuerza no varía con la distancia de forma lineal: si duplicas la separación, la fuerza se reduce a **una cuarta parte**, no a la mitad.

La ley de Coulomb dice que dos cargas de laboratorio típicas (del orden de microcoulombios) separadas un centímetro se atraen o repelen con una fuerza del orden de decenas de Newtons. Es una interacción enormemente intensa a escala atómica y todavía apreciable a escala macroscópica.

## 🔵 Nivel formal

La formulación matemática de la ley de Coulomb para el módulo de la fuerza es:

{{f:fuerza_coulomb}}

donde [[k_e]] es la constante de Coulomb (aproximadamente nueve por diez elevado a la novena potencia, en unidades del SI), [[q1]] y [[q2]] son las cargas de los dos objetos y [[r12]] es la distancia entre ellos. El símbolo de valor absoluto en el numerador garantiza que el módulo de la fuerza sea siempre positivo: el carácter atractivo o repulsivo no lo da el módulo sino el signo del producto de las cargas.

La constante [[k_e]] también puede escribirse como uno dividido entre cuatro pi veces la permitividad del vacío. Ambas notaciones son equivalentes y el estudiante encontrará las dos en libros de texto.

Dividiendo [[fuerza_de_coulomb]] entre la carga de prueba se obtiene el **campo eléctrico** [[campo_electrico_de_carga_puntual]] creado por [[q1]] en ese punto del espacio:

{{f:campo_electrico_coulomb}}

Esta segunda relación es la puerta de entrada al concepto de campo eléctrico: [[campo_electrico_de_carga_puntual]] no depende de qué carga se coloque en el punto sino solo de [[q1]] y [[r12]].

La fórmula principal tiene tres dependencias importantes que deben interiorizarse:

- **Proporcionalidad lineal con cada carga**: duplicar [[q1]] duplica la fuerza; duplicar [[q2]] también la duplica.
- **Dependencia inversa cuadrática con la distancia**: [[r12]] aparece al cuadrado en el denominador. Doblar [[r12]] reduce [[fuerza_de_coulomb]] a una cuarta parte; triplicarla la reduce a un noveno.
- **Proporcionalidad con [[k_e]]**: esta constante es fija en el vacío y no varía; en un dieléctrico se divide por la permitividad relativa del medio.

> [!TIP]
> Para resolver cualquier problema con la ley de Coulomb, lo primero es identificar si se pide el módulo de la fuerza (siempre positivo) o la fuerza vectorial (con dirección y sentido). El módulo se calcula directamente con la fórmula. El sentido se determina por separado: atractivo si el producto de las cargas es negativo, repulsivo si es positivo.

## 🔴 Nivel estructural

La ley de Coulomb es una **ley empírica de interacción a distancia**. En la teoría de campos moderna, la fuerza se transmite a través del campo eléctrico a velocidad finita; en régimen estático esta limitación es irrelevante, pero en régimen dinámico Coulomb debe reemplazarse por Maxwell.

**Límites de validez**:

- **Cargas puntuales**: la extensión de los objetos debe ser despreciable frente a [[r12]]; si no, hay que integrar cada elemento diferencial de carga.
- **Régimen electrostático**: cargas en reposo o muy lentas. En régimen dinámico la fuerza magnética añade una contribución comparable.
- **Vacío o medio homogéneo**: en dieléctrico isótropo, la permitividad relativa modifica la intensidad pero no la forma funcional.
- **Escala clásica**: por debajo del femtómetro domina la interacción nuclear fuerte.

**Superposición**: la fuerza total sobre una carga es la suma vectorial de las contribuciones individuales. Este principio es el puente entre la ley para dos cargas y el campo de distribuciones continuas.

**Analogía gravitacional**: misma estructura matemática que Newton, con masa → carga y constante de Cavendish → [[k_e]]. La diferencia clave: la carga tiene signo (atracción y repulsión), la masa no (gravedad siempre atractiva). Dividiendo [[fuerza_de_coulomb]] entre la carga de prueba se obtiene [[campo_electrico_de_carga_puntual]], un campo que solo depende de la fuente y la posición: núcleo conceptual de la física de campos.

## Interpretación física profunda

La magnitud [[fuerza_de_coulomb]] es un módulo vectorial: siempre positivo, representa la intensidad de la interacción sin su dirección. El **carácter** de la interacción —atractivo o repulsivo— lo determina el signo del producto [[q1]]·[[q2]]. Este es uno de los puntos donde más errores cometen los estudiantes: usar el signo de una sola carga para inferir el sentido de la fuerza, cuando en realidad solo el producto de las dos es relevante.

El cuadrado de [[r12]] en el denominador tiene una consecuencia geométrica profunda: en tres dimensiones, el "flujo" de la fuerza a través de cualquier esfera centrada en la carga fuente es constante (independiente del radio de la esfera). Esta es exactamente la condición que la ley de Gauss hace explícita: la carga es la fuente del flujo y el flujo no se "pierde" al alejarse. La ley inversa del cuadrado no es un accidente; es la consecuencia inevitable de vivir en un espacio tridimensional con simetría esférica.

## Orden de magnitud

Para estimar si un resultado es razonable, conviene conocer algunas referencias:

- Dos electrones separados 1 Å (décima de nanómetro): [[fuerza_de_coulomb]] del orden de 10⁻⁸ N. Pequeña pero enorme para la masa del electrón.
- Dos esferas de laboratorio con 1 μC a 10 cm: [[fuerza_de_coulomb]] del orden de 0.9 N. Detectable con una balanza de precisión.
- Dos cargas de 1 C a 1 m: [[fuerza_de_coulomb]] del orden de 9×10⁹ N. Catastrófico en cualquier sistema real —razón por la que 1 C de carga concentrada no existe en la práctica.

Si un resultado de [[fuerza_de_coulomb]] supera los kiloNewtons para cargas de microcoulombios a distancias de centímetros, hay casi con certeza un error de conversión de unidades (usar centímetros en vez de metros en [[r12]]).

## Método de resolución personalizado

Para resolver un problema con la ley de Coulomb:

1. **Identificar las cargas y la distancia**: extraer [[q1]], [[q2]] y [[r12]] del enunciado. Convertir siempre a coulombios y metros antes de sustituir.
2. **Elegir qué se calcula**: si se pide [[fuerza_de_coulomb]], usar la fórmula directamente. Si se pide [[r12]] o una carga, despejar antes algebraicamente.
3. **Calcular el módulo**: sustituir los valores absolutos de las cargas. El resultado es siempre positivo.
4. **Determinar la dirección**: el sentido de la fuerza es atractivo (cargas opuestas) o repulsivo (misma carga). Para la fuerza vectorial, definir un eje y asignar signo según el sentido.
5. **Verificar el orden de magnitud**: comparar con las referencias del apartado anterior. Un resultado de 10⁻²⁶ N para cargas macroscópicas debe hacer sospechar.

## Casos especiales y ejemplo extendido

**Caso límite — distancia tendiendo a cero**: cuando [[r12]] se aproxima a cero, [[fuerza_de_coulomb]] diverge. En la práctica, esto nunca ocurre porque los objetos tienen extensión finita; el modelo de carga puntual deja de ser válido antes de que la distancia sea comparable al tamaño de los objetos. Este límite señala la frontera del modelo.

**Caso de carga nula**: si [[q1]] o [[q2]] es cero, [[fuerza_de_coulomb]] es exactamente cero sin importar la distancia. Una carga nula no interactúa electrostáticamente. Este resultado, aunque obvio, tiene implicaciones importantes: la carga de prueba infinitesimal usada para definir el campo eléctrico es una idealización precisamente porque no debe perturbar el campo de la carga fuente.

**Tres cargas en línea**: si hay tres cargas sobre un eje y se pide la fuerza sobre la central, hay que calcular las dos fuerzas separadas (de la izquierda y de la derecha) y sumarlas vectorialmente. La ley de Coulomb se aplica a cada par; la superposición hace el resto. El error clásico es calcular la fuerza neta como si hubiera solo una carga fuente equivalente en el punto medio, lo cual es incorrecto salvo en geometrías especiales.

## Preguntas reales del alumno

**¿Por qué la fuerza disminuye con el cuadrado de la distancia y no con la distancia?**
La dependencia cuadrática tiene una interpretación geométrica: el "flujo" de acción eléctrica se distribuye uniformemente sobre una esfera. El área de una esfera crece con el cuadrado del radio, así que la densidad de acción cae con el cuadrado de la distancia. Esta es la misma razón por la que la intensidad luminosa de una bombilla sigue la misma ley.

**¿Por qué la fuerza sobre [[q1]] es igual que sobre [[q2]] si una carga es mucho mayor?**
La tercera ley de Newton es universal: el módulo de [[fuerza_de_coulomb]] entre las dos cargas es único. Lo que varía es la aceleración según la masa de cada objeto.

**Si separo las cargas al doble, ¿la fuerza se reduce a la mitad?**
No. [[r12]] está al cuadrado en el denominador: duplicar la distancia reduce [[fuerza_de_coulomb]] a una cuarta parte.

**¿Qué diferencia hay entre [[fuerza_de_coulomb]] y [[campo_electrico_de_carga_puntual]]?**
[[fuerza_de_coulomb]] depende de las dos cargas [[q1]] y [[q2]]. [[campo_electrico_de_carga_puntual]] es [[fuerza_de_coulomb]] dividido entre la carga de prueba: solo depende de [[q1]] y de la posición. El campo es una propiedad del espacio; la fuerza es lo que una carga concreta siente en él.

## Conexiones transversales y rutas de estudio

La ley de Coulomb es el punto de entrada a tres ramas:

- **Campo eléctrico [[campo_electrico_de_carga_puntual]]**: dividir [[fuerza_de_coulomb]] entre la carga de prueba define [[campo_electrico_de_carga_puntual]]. Lleva al leaf de campo eléctrico puntual y, por superposición, al campo de distribuciones.
- **Ley de Gauss**: la dependencia inversa cuadrática implica Gauss, que permite calcular el campo sin integrar en geometrías simétricas.
- **Energía potencial**: la fuerza conservativa de Coulomb tiene asociada una energía potencial, base del potencial eléctrico y de condensadores.

Ruta recomendada: Coulomb → campo [[campo_electrico_de_carga_puntual]] puntual → superposición → Gauss → potencial.

## Síntesis final

La ley de Coulomb establece que la fuerza [[fuerza_de_coulomb]] entre dos cargas puntuales [[q1]] y [[q2]] es proporcional al producto de sus valores absolutos e inversamente proporcional al cuadrado de [[r12]], con una constante de proporcionalidad [[k_e]] que fija la escala en el SI. Su dominio de validez es la electrostática clásica con objetos de extensión pequeña frente a su separación, y su herencia conceptual es el principio de superposición y la definición del campo eléctrico como fuerza por unidad de carga.