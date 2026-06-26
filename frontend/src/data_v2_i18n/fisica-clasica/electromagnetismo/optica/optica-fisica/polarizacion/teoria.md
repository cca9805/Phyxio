## Contexto conceptual

La luz visible es una onda electromagnetica **transversal**: su campo electrico oscila en un plano perpendicular a la direccion de propagacion. Cuando todas las oscilaciones comparten un mismo plano, la onda esta **polarizada linealmente**. La polarizacion es la propiedad que permite filtrar, analizar y manipular la orientacion de esas oscilaciones.

Dentro del bloque de optica fisica, la polarizacion complementa los fenomenos de interferencia y difraccion porque muestra una dimension adicional de la onda que no se percibe con la simple observacion de intensidad o color. Comprender este fenomeno es imprescindible para interpretar gafas de sol polarizadas, pantallas LCD, microscopios de polarizacion y tecnicas de comunicacion optica.

## 🟢 Nivel esencial

La luz natural oscila en todas las direcciones perpendiculares a su avance, sin preferencia alguna. Un **polarizador** es un filtro que solo deja pasar la componente del campo electrico alineada con su eje de transmision. Al atravesarlo, la luz queda **polarizada linealmente**: su campo electrico oscila en un unico plano definido.

Si una segunda lamina polarizadora (llamada **analizador**) se coloca tras la primera, la intensidad transmitida depende del angulo entre ambos ejes. Con los ejes paralelos la luz pasa casi integramente; con los ejes perpendiculares la transmision se anula por completo. Esa dependencia angular es el corazon de la **ley de Malus**.

La **reflexion** tambien puede producir polarizacion. Cuando la luz incide sobre una superficie transparente con cierto angulo especifico, la luz reflejada sale completamente polarizada. Ese angulo se denomina **angulo de Brewster** y depende de los indices de refraccion de los medios.

## 🔵 Nivel formal

La relacion cuantitativa entre la [[intensidad_transmitida]] y el angulo [[theta_p]] entre la direccion de polarizacion de la onda y el eje del polarizador viene dada por la ley de Malus:

{{f:ley_malus}}

Donde [[intensidad_incidente]] es la intensidad de la luz polarizada que llega al analizador y [[theta_p]] es el angulo entre el eje de polarizacion de la onda y el eje de transmision del filtro. La dependencia cuadratica con el coseno indica que la intensidad no decrece linealmente sino que se mantiene alta para angulos pequenos y cae rapidamente a medida que el angulo se acerca a 90 grados. Para [[theta_p]] igual a cero, [[intensidad_transmitida]] coincide con [[intensidad_incidente]]; para [[theta_p]] igual a 90 grados, [[intensidad_transmitida]] se anula (polarizadores cruzados).

> [!NOTE]
> Si la fuente emite luz natural no polarizada, el primer polarizador transmite exactamente la mitad de la intensidad original. La ley de Malus se aplica entonces tomando esa mitad como [[intensidad_incidente]] para el segundo polarizador.

El angulo de Brewster se obtiene a partir de los indices de refraccion de los medios que forman la interfase:

{{f:ley_brewster}}

Aqui [[n_1]] es el indice del medio por el que viaja la luz y [[n_2]] el del medio al otro lado de la interfase. Cuando la luz incide con este angulo, la componente del campo electrico contenida en el plano de incidencia no se refleja, de modo que la luz reflejada queda completamente polarizada en la direccion perpendicular al plano de incidencia. La condicion geometrica subyacente es que el rayo reflejado y el rayo refractado formen un angulo recto entre si.

## 🔴 Nivel estructural

La polarizacion revela la **naturaleza vectorial** del campo electrico de la onda. Mientras la interferencia y la difraccion dependen de la fase escalar de la onda, la polarizacion depende de la orientacion del vector campo electrico en el plano transversal. Esa diferencia hace que la polarizacion sea sensible a la simetria del medio y a la geometria de la interfase.

La ley de Malus se deduce proyectando la componente del campo electrico sobre el eje de transmision del polarizador. Como la intensidad es proporcional al cuadrado de la amplitud del campo, la proyeccion produce el factor coseno cuadrado. En terminos energeticos, la componente perpendicular al eje es absorbida o desviada por el material del filtro, y solo la componente paralela contribuye a la potencia transmitida.

La ley de Brewster se obtiene combinando la **ley de Snell** con la condicion de que la luz reflejada y la refractada sean perpendiculares. Cuando se cumple esa perpendicularidad, los dipolos atomicos del segundo medio oscilan en la misma direccion del rayo reflejado y no pueden irradiar en esa direccion, anulando la componente paralela de la reflexion. Este mecanismo conecta la polarizacion con la estructura microscopica de la interaccion luz-materia.

> [!WARNING]
> La ley de Brewster solo se aplica a interfases planas entre medios dielectricos transparentes. En metales, la absorcion introduce una componente imaginaria en el indice de refraccion y la reflexion nunca es completamente polarizada, aunque si parcialmente.

Existen tres regimenes principales de polarizacion: **lineal** (campo electrico oscila en un plano fijo), **circular** (la punta del vector campo electrico describe un circulo) y **eliptica** (caso general). La ley de Malus en su forma simple se aplica estrictamente a luz linealmente polarizada. Para luz eliptica se necesitan los **parametros de Stokes** o el formalismo de **Jones**, que generalizan el analisis mas alla del alcance de este leaf pero constituyen la herramienta estandar en optica avanzada.

La relacion entre polarizacion y birrefringencia permite fabricar laminas de cuarto de onda y de media onda que transforman polarizacion lineal en circular y viceversa, ampliando el control sobre el estado de polarizacion de la luz para aplicaciones tecnologicas.

## Interpretación física profunda

El hecho de que la intensidad dependa del **cuadrado** del coseno y no del coseno lineal tiene consecuencias practicas inmediatas. Al girar un polarizador desde 0 hasta 45 grados, la intensidad solo cae al 50 por ciento; pero al girar de 45 a 90 grados, la caida es del 50 al 0 por ciento restante. Esa asimetria en la rapidez de cambio es lo que permite usar polarizadores como atenuadores opticos precisos para angulos pequenos.

En la reflexion de Brewster, la desaparicion de la componente paralela reflejada se explica porque los **dipolos inducidos** en la superficie vibran en la misma direccion que el rayo reflejado. Un dipolo no irradia a lo largo de su propio eje, lo cual anula esa componente. Este argumento microscopico conecta la optica ondulatoria con la electrodinamica de materiales.

## Orden de magnitud

Para una interfase aire-vidrio comun ([[n_1]] cercano a 1.00 y [[n_2]] cercano a 1.50), [[angulo_de_brewster]] es aproximadamente 56 grados. Para agua ([[n_2]] cercano a 1.33) baja a unos 53 grados. Intensidades tipicas de laboratorio varian entre 10 y 1000 W/m². Un resultado de [[intensidad_transmitida]] muy superior a [[intensidad_incidente]] o un angulo de Brewster fuera del rango de 40 a 70 grados para materiales comunes deberia despertar sospecha inmediata de error en los datos.

## Método de resolución personalizado

1. **Identificar la fuente**: determinar si la luz es natural o ya polarizada. Si es natural, aplicar el factor de un medio tras el primer polarizador.
2. **Localizar angulos**: medir [[theta_p]] entre el eje de polarizacion de la onda y el eje del analizador.
3. **Aplicar la ley de Malus**: calcular [[intensidad_transmitida]] a partir de [[intensidad_incidente]] y [[theta_p]].
4. **Si hay reflexion**: identificar los medios, obtener [[n_1]] y [[n_2]], y calcular [[angulo_de_brewster]] con la ley de Brewster.
5. **Verificar coherencia**: comprobar que [[intensidad_transmitida]] no supera [[intensidad_incidente]] y que [[angulo_de_brewster]] esta en un rango razonable para los materiales dados.

## Casos especiales y ejemplo extendido

- **Polarizadores cruzados con lamina intermedia**: si se inserta un tercer polarizador entre dos cruzados con su eje a 45 grados de ambos, la luz vuelve a transmitirse parcialmente. La intensidad final resulta ser un cuarto de [[intensidad_incidente]] multiplicado por el seno cuadrado del doble del angulo intermedio, lo que demuestra que la polarizacion no es simplemente un filtro de "todo o nada".

- **Reflexion en agua a [[angulo_de_brewster]]**: al observar un lago bajo el angulo de Brewster, la luz reflejada esta casi completamente polarizada horizontalmente. Por eso las gafas de sol polarizadas con eje vertical eliminan el deslumbramiento del agua mientras transmiten la luz util.

## Preguntas reales del alumno

**¿Por que al cruzar dos polarizadores no pasa nada de luz, pero al meter uno intermedio a 45 grados si?**
Cada polarizador proyecta el campo electrico sobre su eje. El intermedio rota la direccion de polarizacion, proporcionando una componente no nula al tercer filtro. Sin el intermedio, la proyeccion sobre el segundo eje es cero.

**¿Las gafas de sol polarizadas funcionan igual que un polarizador de laboratorio?**
Si, el principio es identico: absorben la componente del campo electrico perpendicular a su eje de transmision. La diferencia esta en la calidad optica y la uniformidad del material.

**¿La polarizacion afecta al color de la luz?**
No directamente. La polarizacion actua sobre la orientacion del campo electrico, no sobre la longitud de onda. Sin embargo, en medios birrefringentes distintas longitudes de onda pueden sufrir rotaciones diferentes, produciendo colores por interferencia en luz polarizada.

**¿Puede una onda longitudinal estar polarizada?**
No. La polarizacion es exclusiva de ondas transversales porque requiere que la oscilacion pueda orientarse en distintas direcciones perpendiculares a la propagacion. En ondas longitudinales solo hay una direccion de oscilacion posible.

## Conexiones transversales y rutas de estudio

La polarizacion conecta con la [interferencia de la luz](leaf:fisica-clasica/electromagnetismo/optica/optica-fisica/interferencia-de-la-luz) a traves de la coherencia y la superposicion de ondas transversales. Tambien se relaciona con la [difraccion](leaf:fisica-clasica/electromagnetismo/optica/optica-fisica/difraccion-de-la-luz) cuando se analizan patrones de difraccion con luz polarizada.

Fuera de la optica, la polarizacion aparece en ondas de radio (antenas polarizadas), microondas y ondas gravitacionales, lo que conecta este tema con electromagnetismo general y con fisica moderna.

## Síntesis final

La polarizacion revela que la luz no es un escalar ondulatorio sino una oscilacion vectorial con orientacion definida. La ley de Malus cuantifica como un polarizador filtra la intensidad segun el coseno cuadrado del angulo, y la ley de Brewster identifica el angulo de reflexion total polarizada a partir de los indices de refraccion. Dominar ambas relaciones permite interpretar fenomenos cotidianos y disenar dispositivos opticos basados en el control de la orientacion del campo electrico.