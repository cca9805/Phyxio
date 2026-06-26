const a=`# Intensivas\r
\r
## Contexto conceptual\r
\r
Las variables intensivas son magnitudes termodinámicas que describen el estado de una porcion de materia sin depender directamente de cuanta materia se ha elegido. Si se toma una muestra uniforme y se divide en dos mitades, cada mitad conserva la misma temperatura [[T]], la misma presión [[P]] y la misma densidad [[rho]] que la muestra original. Si se juntan dos copias identicas, esas variables no se suman. Esta idea separa el estado físico de la cantidad total de sistema.\r
\r
La diferencia con una extensiva es operativa. Una extensiva cuenta inventario; una intensiva caracteriza condición local, equilibrio o concentracion. La masa [[m]] y el volumen [[V]] crecen al duplicar una muestra, pero [[rho]] puede permanecer constante porque es un cociente normalizado. Por eso las intensivas son las variables que permiten comparar muestras de distinto tamano sin que gane automaticamente la muestra mayor.\r
\r
## 🟢 Nivel esencial\r
\r
Una variable intensiva responde a la pregunta: que estado tiene la sustancia aqui? No responde a cuanto sistema hay. Dos vasos con agua a la misma [[T]] no tienen el doble de temperatura por estar juntos. Dos recipientes con el mismo gas en el mismo estado no tienen el doble de [[P]] al considerarlos como conjunto. Lo que cambia al reunirlos es la cantidad total; lo que permanece es la condición local.\r
\r
El test más simple consiste en imaginar dos copias identicas del sistema. Si al juntar las copias la magnitud permanece igual, se comporta como intensiva. La [[T]], la [[P]] y la [[rho]] pasan este test cuando el estado es uniforme. En cambio [[m]] y [[V]] no lo pasan, porque una segunda copia aporta más materia y ocupa más espacio.\r
\r
Las intensivas también son señales de desequilibrio. Si dos cuerpos estan en contacto térmico y tienen distinta [[T]], hay una tendencia a transferir energía como calor. Si dos regiones fluidas conectadas tienen distinta [[P]], puede aparecer movimiento mecánico. La igualdad de intensivas compatibles indica que la tendencia macroscópica correspondiente se ha apagado.\r
\r
Conviene recordar que intensiva no significa pequeña, constante universal ni siempre independiente de la posicion. Una propiedad puede ser intensiva y variar dentro de un sistema no uniforme. En una atmósfera, la [[P]] cambia con la altura, pero sigue siendo presión local, no cantidad total. En un solido calentado por un extremo, la [[T]] cambia de punto a punto, pero cada lectura de temperatura sigue siendo intensiva.\r
\r
## 🔵 Nivel formal\r
\r
El criterio formal de intensividad se expresa por escalado:\r
\r
{{f:criterio_intensividad}}\r
\r
La notación dice que al multiplicar el tamano del sistema por [[lambda_escala]], la variable [[X_int]] no cambia si se mantiene el mismo estado local. Este criterio es una prueba de homogeneidad de grado cero: la variable no aumenta con la escala. En lenguaje físico, [[X_int]] describe estado y no inventario.\r
\r
En equilibrio, muchas condiciones se escriben como igualdad de intensivas:\r
\r
{{f:igualdad_equilibrio_intensivo}}\r
\r
La igualdad no significa que las cantidades extensivas de las dos partes sean iguales. Dos cuerpos de masas distintas pueden alcanzar la misma [[T]]. Dos regiones con volumen diferente pueden compartir la misma [[P]]. Lo que se iguala es la variable que gobierna una tendencia de intercambio, no la cantidad almacenada.\r
\r
Un caso importante es la densidad:\r
\r
{{f:densidad_intensiva}}\r
\r
Aunque se calcula con [[m]] y [[V]], [[rho]] es intensiva si ambas extensivas se escalan juntas. Si se duplica la masa y también el volumen de una muestra uniforme, el cociente queda igual. Este ejemplo muestra que el origen algebraico de una magnitud no basta para clasificarla; importa como responde a la escala.\r
\r
Cuando se mezclan partes con valores intensivos diferentes, el valor final no suele ser una suma. En una aproximacion simple puede estimarse con un promedio ponderado:\r
\r
{{f:promedio_ponderado_intensivo}}\r
\r
La formula usa [[X_A]] y [[X_B]] como valores iniciales y [[m]] como peso. El resultado final se acerca más a la parte con mayor cantidad. Esta regla permite distinguir dos errores frecuentes: sumar intensivas como totales o promediarlas sin considerar cuanto sistema aporta cada parte.\r
\r
## 🔴 Nivel estructural\r
\r
La estructura profunda es que las intensivas son coordenadas de estado. Sirven para localizar el punto termodinámico de una muestra y para decidir si dos regiones pueden coexistir sin intercambio neto. En una descripción de equilibrio, las extensivas fijan el tamaño del sistema y las intensivas fijan su condición interna.\r
\r
Las intensivas aparecen como derivadas, cocientes o multiplicadores conjugados de extensivas. La [[T]] se relaciona con como cambia la energía al cambiar la entropía, la [[P]] con como cambia la energía al cambiar el volumen, y [[rho]] con como se distribuye la masa en el espacio. En este leaf no se necesita desarrollar esas derivadas, pero si conviene ver la pauta: las intensivas suelen decir cuanto cuesta o cuanto empuja una pequena variación, no cuanto hay acumulado.\r
\r
La clasificasion depende de mantener la referencia adecuada. La [[P]] de un gas uniforme es intensiva, pero la fuerza total sobre una pared no lo es porque depende del area. La [[rho]] local es intensiva, pero la masa encerrada en un volumen no lo es. La [[T]] es intensiva, pero la energía necesaria para calentar todo un objeto depende de la cantidad de materia.\r
\r
En sistemas no uniformes, una intensiva puede convertirse en campo. Hay una temperatura local, una presión local y una densidad local. Para obtener una lectura media se debe especificar como se promedia: por volumen, por masa, por area o por tiempo. Sin esa informacion, una única cifra puede ocultar gradientes relevantes.\r
\r
## Interpretacion física profunda\r
\r
Una intensiva tiene valor diagnostico porque no premia el tamano. Si una gota y un deposito tienen la misma [[T]], no significa que contengan la misma energía; significa que no hay motivo térmico, por si solo, para que uno caliente al otro. Si tienen la misma [[P]], no significa que ejerzan la misma fuerza total; significa que el empuje por unidad de area es comparable.\r
\r
La lectura causal es especialmente importante. Una diferencia de [[T]] impulsa transferencia de energía; una diferencia de [[P]] puede impulsar expansión o flujo; una diferencia de composicion o de potencial quimico impulsa intercambio material. Las intensivas son por eso variables de decision: indican hacia donde iria un proceso si se libera una restriccion.\r
\r
## Orden de magnitud\r
\r
En laboratorio, [[T]] suele moverse en cientos de kelvin, [[P]] cerca de condiciones ambientales ronda una escala de cien mil pascales y [[rho]] puede cambiar desde valores de orden uno en gases hasta miles en liquidos y solidos. El número exacto no determina si una variable es intensiva. Lo decisivo es que una copia adicional de la misma muestra no altera el valor local.\r
\r
Un buen control mental es comparar dos recipientes identicos con gas a la misma condición. Si se consideran juntos, [[m]] y [[V]] se duplican. La [[P]], la [[T]] y la [[rho]] permanecen como lecturas del estado. Esta separacion evita que una estimacion de cantidad se mezcle con una estimacion de condición.\r
\r
## Metodo de resolucion personalizado\r
\r
1. Identifica si la pregunta pide estado local, comparacion entre muestras o cantidad total.\r
2. Aplica el test de duplicacion con [[lambda_escala]].\r
3. Si la magnitud no cambia al escalar, tratala como [[X_int]].\r
4. Si se obtiene con cocientes, comprueba que numerador y denominador escalan juntos.\r
5. En mezclas, no sumes intensivas: usa una ponderacion compatible.\r
6. En equilibrio, busca igualdad de intensivas, no igualdad de cantidades.\r
\r
## Casos especiales y ejemplo extendido\r
\r
Una barra metalica puede tener temperatura distinta en sus extremos. La [[T]] sigue siendo intensiva, pero ya no basta un único valor para describir todo el sistema. Hace falta una función local o una media con criterio. Este caso enseña que intensiva no equivale a uniforme.\r
\r
Otro caso es una mezcla de dos masas de agua con distintas temperaturas. La temperatura final no es la suma de las temperaturas iniciales. Si las masas son iguales y no hay perdidas, queda cerca del promedio simple; si una masa es mucho mayor, la temperatura final queda cerca de la temperatura de esa parte. La intensiva final depende de una ponderacion por cantidades extensivas.\r
\r
## Preguntas reales del alumno\r
\r
**Si la densidad se calcula con masa, por que no es extensiva?** Porque [[rho]] compara [[m]] con [[V]]. Cuando ambas aumentan en la misma proporcion, el cociente conserva el mismo valor. La masa sola crece; la densidad describe concentracion.\r
\r
**La temperatura de un objeto grande contiene más calor?** No. La [[T]] indica estado térmico, no energía total. Un objeto grande a cierta temperatura puede almacenar más energía que uno pequeño a la misma temperatura, pero la lectura intensiva es la misma.\r
\r
**La presión depende del volumen?** Puede depender del volumen en un proceso concreto, pero como variable de estado no se suma al duplicar copias iguales. Un gas ideal puede cambiar su [[P]] si cambia [[V]] manteniendo otras condiciones, pero eso no convierte a la presión en extensiva.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf conecta con extensivas, equilibrio termodinámico, temperatura, presión, densidad, sistemas abiertos, ecuaciones de estado, calorimetria y segunda ley. La ruta recomendada es: distinguir cantidad total de estado local, usar el test de escalado, entender igualdad de intensivas en equilibrio y después estudiar como las intensivas gobiernan flujos y procesos.\r
\r
## Sintesis final\r
\r
Una variable intensiva permanece igual al escalar una muestra uniforme. La [[T]], la [[P]] y la [[rho]] describen condición de estado; [[m]] y [[V]] ayudan a construir o ponderar esas lecturas, pero no las sustituyen. La regla práctica es clara: usa intensivas para comparar estados y extensivas para contar cantidades.\r
`;export{a as default};
