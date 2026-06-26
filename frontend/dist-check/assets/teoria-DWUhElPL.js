const e=`# Extensivas\r
\r
## Contexto conceptual\r
\r
Las variables extensivas son magnitudes termodinámicas que dependen de cuanto sistema se considera. Si se juntan dos copias iguales de una muestra, la masa [[m]], el volumen [[V]], la energía interna [[U]] y la entropía [[S]] totales se duplican. Esta dependencia con el tamano no es un defecto: es precisamente lo que permite hacer balances de materia, energía y entropía en sistemas compuestos.\r
\r
La diferencia con las variables intensivas es operativa. Una intensiva caracteriza el estado local o medio de la sustancia; una extensiva cuenta cantidad total. Temperatura y presión no se suman al juntar dos cuerpos iguales, pero [[m]] y [[V]] si. Por eso reconocer una extensiva evita errores de escala al comparar muestras distintas.\r
\r
## 🟢 Nivel esencial\r
\r
La idea esencial es el test de duplicacion. Si duplicas el sistema sin cambiar la sustancia ni el estado intensivo, una magnitud extensiva se duplica. Dos litros de agua tienen el doble de volumen que un litro; dos bloques identicos tienen el doble de masa que uno; dos copias iguales de un gas tienen el doble de energía interna total.\r
\r
El simbolo generico [[X_ext]] representa cualquier cantidad extensiva. No importa si la unidad es kg, m3, J o J/K: la pregunta es si el valor crece cuando aumenta la cantidad de sistema. El factor de escala [[lambda_escala]] resume cuantas copias equivalentes se juntan.\r
\r
Una forma cotidiana de verlo es pensar en inventarios. Si compras dos paquetes iguales, tienes el doble de producto, pero no el doble de "tipo de producto". La extensiva cuenta cuantos paquetes, cuanta masa o cuanta energía total hay. No describe por si sola la calidad local del estado.\r
\r
> [!NOTE]\r
> Extensiva no significa "grande"; significa proporcional al tamano del sistema.\r
\r
## 🔵 Nivel formal\r
\r
El criterio de escalado se expresa como:\r
\r
{{f:criterio_extensividad}}\r
\r
La aditividad de subsistemas se escribe como:\r
\r
{{f:aditividad_extensiva}}\r
\r
Al dividir extensivas compatibles puede obtenerse una propiedad normalizada:\r
\r
{{f:densidad}}\r
\r
Otra normalizacion frecuente es la magnitud específica:\r
\r
{{f:magnitud_especifica}}\r
\r
Estas formulas muestran dos ideas complementarias. Primero, [[X_ext]] crece de forma lineal con [[lambda_escala]] si el sistema escalado mantiene el mismo estado intensivo. Segundo, al dividir por [[m]], [[V]] o cantidad de materia, la dependencia con el tamano puede desaparecer. Por eso [[rho]] y [[x_esp]] no son extensivas aunque se calculen usando extensivas.\r
\r
El formalismo también aclara la aditividad. Cuando se juntan subsistemas compatibles, se suman cantidades totales: [[U]], [[S]], [[V]] y [[m]]. La condición importante es que se sumen magnitudes de la misma clase y bajo la misma referencia. No se suma una energía con una entropía, ni una energía definida con referencias incompatibles.\r
\r
También puede usarse el conteo [[N]] como extensiva adimensional. Aunque no tenga unidad mecánica, cuenta entidades totales y por eso se duplica al juntar copias equivalentes. Esta observación es útil porque muestra que la extensividad no depende de tener una dimension física complicada, sino de representar inventario total.\r
\r
En problemas formales conviene escribir primero la version total y después la version normalizada. Por ejemplo, se suma [[U]] para hacer un balance energético, pero se usa [[x_esp]] si se quiere comparar energía por kg entre dos muestras. Cambiar de una lectura a otra sin avisar es una de las fuentes más frecuentes de errores.\r
\r
## 🔴 Nivel estructural\r
\r
La extensividad depende de la escala y de la forma en que se separa el sistema. En sistemas macroscopicos ordinarios, las contribuciones de superficie suelen ser pequenas frente al volumen, y la aditividad funciona bien. En sistemas muy pequenos, interfaces, campos de largo alcance o efectos de borde pueden romper la proporcionalidad simple.\r
\r
También hay que distinguir total y densidad. [[m]] y [[V]] son extensivas; [[rho]] es una propiedad normalizada. [[U]] es extensiva; energía específica o energía por kg es intensiva derivada. [[S]] total es extensiva; entropía específica no lo es. La normalizacion permite comparar muestras de distinto tamano sin que gane automaticamente la muestra más grande.\r
\r
Otra estructura frecuente es el paso de balances a propiedades. Los balances conservan o acumulan magnitudes extensivas. Las ecuaciones de estado suelen relacionar intensivas y extensivas normalizadas. Esta separacion es crucial: primero se decide cuanto hay; después se decide que propiedad por unidad de cantidad caracteriza al material.\r
\r
En mezclas y sistemas reales, la aditividad puede depender de que se esta sumando. La masa total casi siempre se suma directamente en el marco clasico. El volumen puede mostrar contraccion de mezcla. La entropía total puede requerir incluir entropía de mezcla. La energía puede necesitar un termino de interaccion. Estos matices no niegan la extensividad; indican que el inventario total incluye más contribuciones que las visibles al separar las partes.\r
\r
Por eso el nivel estructural no pregunta solo "se suma o no se suma". Pregunta bajo que frontera, que escala y que definición de propiedad se esta usando. Una variable puede ser extensiva en el modelo macroscopico ideal y necesitar una correccion cuando la frontera, la mezcla o la interaccion se vuelven parte dominante del fenómeno. Esta lectura permite usar la regla simple sin convertirla en dogma.\r
\r
## Interpretacion física profunda\r
\r
Una variable extensiva representa inventario. Inventario de materia, de espacio, de energía o de entropía. Si el sistema se parte en dos, el inventario total se reparte; si se vuelve a juntar, se suma. Esta lectura hace que la extensividad sea una regla de contabilidad física.\r
\r
La normalizacion convierte inventarios en propiedades comparables. Un deposito grande puede tener más [[U]] que uno pequeno aunque ambos esten a la misma temperatura. Para comparar el estado energético del material, se usa una magnitud específica [[x_esp]] o una densidad. Así se evita confundir cantidad total con intensidad del estado.\r
\r
## Orden de magnitud\r
\r
Si 1 kg de una sustancia ocupa 0.001 m3, entonces 2 kg ocupan aproximadamente 0.002 m3 si el estado es el mismo. Si una muestra contiene 50 kJ de energía interna, dos copias iguales contienen 100 kJ. La proporcion es simple, pero solo bajo la condición de mismo material y mismo estado intensivo.\r
\r
En cambio, [[rho]] puede quedar en 1000 kg/m3 tanto para 1 kg como para 2 kg de agua. La masa y el volumen crecieron; el cociente no.\r
\r
## Metodo de resolucion personalizado\r
\r
1. Pregunta si la magnitud cuenta cantidad total.\r
2. Imagina duplicar el sistema sin cambiar estado intensivo.\r
3. Si el valor se duplica, tratala como extensiva.\r
4. Si quieres comparar muestras distintas, normaliza por [[m]], [[V]] o cantidad de materia.\r
5. En balances, conserva las extensivas; en propiedades, usa cocientes normalizados.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Sistemas con superficie dominante.** En gotas pequenas o materiales nanoestructurados, una energía de superficie puede no escalar como el volumen. Entonces la aditividad ideal necesita correcciones.\r
\r
**Mezclas.** La masa total suele ser aditiva, pero el volumen puede no ser exactamente suma de volumenes iniciales si hay contraccion o expansión de mezcla.\r
\r
**Ejemplo extendido.** Dos recipientes identicos contienen el mismo gas en el mismo estado. Al unirlos, [[m]], [[V]], [[U]] y [[S]] se duplican. La densidad [[rho]] no se duplica porque tanto masa como volumen se duplican.\r
\r
## Preguntas reales del alumno\r
\r
**P: La energía interna siempre es extensiva?**\r
\r
R: En el modelo termodinámico macroscopico usual, si. Se suma al juntar subsistemas equivalentes, salvo correcciones de interaccion o superficie.\r
\r
**P: La densidad depende de masa; por que no es extensiva?**\r
\r
R: Porque al duplicar una muestra homogenea también se duplica el volumen. El cociente [[rho]] permanece constante.\r
\r
**P: Puedo sumar entropias?**\r
\r
R: Si se trata de entropias totales de subsistemas compatibles. No se suman entropias especificas como si fueran totales.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con intensivas, sistemas abiertos, sistema cerrado, balances de masa, primera ley, entropía y ecuaciones de estado. La ruta recomendada es: distinguir total frente a normalizado, aplicar el test de duplicacion, usar aditividad en balances y después construir propiedades especificas o densidades.\r
\r
## Sintesis final\r
\r
Una variable extensiva crece con el tamano del sistema y se suma al juntar subsistemas compatibles. [[m]], [[V]], [[U]] y [[S]] son inventarios físicos. Al dividir por masa, volumen o cantidad, aparecen propiedades normalizadas como [[rho]] o [[x_esp]], útiles para comparar sistemas de distinto tamano.\r
\r
La regla práctica es doble: usa extensivas para balances y usa propiedades normalizadas para comparaciones. Así no se confunde un sistema grande con un estado más intenso.\r
`;export{e as default};
