const e=`# Proceso isotermico

## Contexto conceptual

Cuando un gas cambia de estado manteniéndose en contacto permanente con un **foco termico a temperatura fija**, la temperatura del gas no varía durante todo el proceso. Este comportamiento define el **proceso isotermico**: una transformación donde [[T]] permanece constante mientras [[p1]] y [[V1]] evolucionan.

El proceso isotermico es uno de los cuatro procesos termodinamicos ideales que forman la base del estudio de los motores de calor y los ciclos termodinamicos. Aparece, por ejemplo, en la etapa de expansion del ciclo de Carnot y en el comportamiento lento de gases sometidos a cambios de presion en recipientes sumergidos en un bano termostatico.

Comprender el proceso isotermico exige distinguirlo con precision del proceso adiabatico: en el isotermico la temperatura es constante y **el gas intercambia calor**, mientras que en el adiabatico el calor es nulo pero la temperatura cambia. Confundir ambos procesos es el error conceptual mas frecuente en termodinamica elemental.

## 🟢 Nivel esencial

Imagina un gas encerrado en un embolo con paredes perfectamente conductoras sumergidas en agua a temperatura constante. Al empujar lentamente el embolo, el gas se comprime pero la temperatura no sube porque el calor extra fluye hacia el agua. Si en cambio retiras el embolo lentamente, el gas se expande, la presion baja y el agua cede calor al gas para mantener su temperatura.

Este intercambio continuo de calor con el entorno es la esencia del proceso isotermico. La **magnitud que permanece fija** es [[T]], y esa constancia impone una relacion inversa precisa entre [[p2]] y [[V2]]: cuando uno sube, el otro baja de manera que su producto siempre vale lo mismo que el producto inicial [[p1]] por [[V1]].

Fisicamente, la temperatura constante significa que la energia interna del gas no cambia. Por tanto, todo el trabajo que el gas realiza durante la expansion proviene del calor que absorbe del foco, y todo el trabajo que el entorno le hace durante la compresion se convierte en calor que el gas entrega al foco.

## 🔵 Nivel formal

La ley que rige el proceso isotermico para un gas ideal es la **ley de Boyle**, expresada como el producto presion por volumen invariante a temperatura constante:

{{f:ley_boyle}}

Esta relacion es una **hiperbola** en el diagrama presion-volumen. Cada valor de [[T]] define una hiperbola distinta; las isotermas mas alejadas del origen corresponden a temperaturas mas altas.

El trabajo realizado por el gas durante un proceso isotermico reversible se obtiene integrando la presion a lo largo del recorrido entre [[V1]] y [[V2]]. Dado que la presion varia continuamente siguiendo la hiperbola, la integral produce un logaritmo natural:

{{f:trabajo_isotermico}}

El trabajo [[W]] es positivo cuando [[V2]] es mayor que [[V1]] (expansion) y negativo cuando [[V2]] es menor (compresion). Como la energia interna de un gas ideal no depende de la presion ni del volumen sino solo de [[T]], y [[T]] es constante, la variacion de energia interna es nula. Por el **primer principio de la termodinamica**, [[Q_iso]] es exactamente igual a [[W]]: el calor absorbido del foco es igual al trabajo realizado sobre el entorno, sin residuo.

La cantidad [[n]] de moles y [[T]] escalan el trabajo de forma directamente proporcional. Doblar [[n]] a la misma temperatura y el mismo cociente de volumenes duplica exactamente [[W]] y [[Q_iso]].

## 🔴 Nivel estructural

La ley de Boyle emerge directamente de la ecuacion de estado del gas ideal cuando se fija [[T]]. Esto revela que el proceso isotermico no es una ley independiente sino una **restriccion aplicada a la ecuacion de estado**: a temperatura y cantidad de sustancia fijas, el producto [[p1]][[V1]] es la constante nRT, y cualquier estado final accesible por un proceso isotermico debe satisfacer el mismo producto.

Esta arquitectura tiene consecuencias importantes. En primer lugar, la **hiperbola pV es la representacion geometrica completa** del conjunto de estados accesibles desde el estado inicial a la misma temperatura. La expansion o compresion a lo largo de esta curva no tiene una direccion preferida por la termodinamica estatica; es la irreversibilidad real del proceso la que impone la flecha del tiempo.

En segundo lugar, el hecho de que [[Q_iso]] sea igual a [[W]] en el proceso isotermico ideal significa que el proceso es **completamente dependiente del foco termico**: sin reservorio de calor a temperatura fija, el proceso isotermico no puede ocurrir. En la practica, esto implica que la velocidad del proceso debe ser lo suficientemente lenta como para que el equilibrio termico con el entorno se mantenga en todo momento. Procesos demasiado rapidos producen gradientes de temperatura internos que generan irreversibilidad y desvian el sistema de la hiperbola teorica.

En tercer lugar, la **posicion relativa de las isotermas** en el diagrama pV tiene valor fisico: a mayor temperatura, la hiperbola esta mas alejada del origen y el area bajo la curva entre dos volumenes es mayor, lo que implica mayor trabajo. Esta geometria fundamenta el analisis del ciclo de Carnot, donde la expansion a alta temperatura produce mas trabajo que la compresion a baja temperatura.

El modelo falla cuando el proceso es rapido, cuando la presion supera los 100 atm o cuando la temperatura se acerca al punto de condensacion. En esos casos las interacciones moleculares hacen que el producto pV deje de ser constante y se necesita la ecuacion de Van der Waals.

## Interpretación física profunda

El proceso isotermico ilustra un principio fundamental: la **energía interna de un gas ideal es funcion solo de la temperatura**. Esta propiedad, demostrada experimentalmente por Joule, implica que cualquier proceso que mantenga [[T]] constante no modifica la energia interna, sin importar los valores de presion o volumen.

La equivalencia entre [[W]] y [[Q_iso]] no es una coincidencia matematica sino una consecuencia directa de que el gas ideal no puede almacenar ni liberar energia de forma autonoma durante una isoterma. El foco termico actua como un deposito elastico de energia: cede calor cuando el gas se expande y lo recupera cuando se comprime.

> [!NOTE]
> La eficiencia del ciclo de Carnot deriva precisamente de que la expansion y la compresion son procesos isotermicos reversibles en los focos de alta y baja temperatura. El proceso isotermico ideal es la transformacion mas eficiente posible entre dos estados del mismo volumen a temperatura fija.

> [!WARNING]
> En la vida real, ningun proceso es perfectamente isotermico porque siempre hay gradientes de temperatura. La aproximacion isotermica es valida cuando el tiempo caracteristico del proceso es mucho mayor que el tiempo de equilibracion termica del sistema con su entorno.

## Orden de magnitud

Para un mol de nitrogeno a 300 K, la constante del proceso es aproximadamente 2500 J. Una expansion de 1 litro a 2 litros produce un trabajo de unos 1730 J. A 600 K ese valor se duplica exactamente, lo que sirve como verificacion rapida: **doblar la temperatura absoluta duplica el trabajo** para el mismo cociente de volumenes.

Un resultado absurdo a detectar: si el calculo da un trabajo de varios megajulios para un mol a temperatura ambiente, el error suele estar en confundir litros con metros cubicos o celsius con kelvin.

## Método de resolución personalizado

Para resolver un problema de proceso isotermico seguir estos pasos:

1. **Identificar los datos**: extraer [[p1]], [[V1]], [[T]], [[n]] y el dato faltante (normalmente [[p2]], [[V2]] o [[W]]).
2. **Verificar la consistencia**: confirmar que [[T]] es la misma al inicio y al final; si cambia, el proceso no es isotermico.
3. **Aplicar la ley de Boyle**: si se busca la presion o el volumen final, usar el cociente inverso entre las dos magnitudes.
4. **Calcular el trabajo**: si se busca [[W]], sustituir [[n]], [[T]] y el cociente [[V2]] dividido entre [[V1]] en la formula con el logaritmo natural.
5. **Verificar el signo**: [[W]] positivo implica [[V2]] mayor que [[V1]]; [[W]] negativo implica lo contrario.
6. **Aplicar el primer principio**: para gas ideal en proceso isotermico, [[Q_iso]] es igual a [[W]].

El paso 3 y el paso 4 son independientes: la ley de Boyle da el estado final, y la formula del trabajo da la energia intercambiada. No confundir los dos calculos.

## Casos especiales y ejemplo extendido

**Expansion libre de Joule**: si el gas se expande hacia el vacio sin pistón (sin realizar trabajo mecanico), el proceso puede ser isotermico para un gas ideal incluso sin contacto con foco termico, porque la energia interna no cambia y [[T]] se mantiene. Sin embargo, en este caso [[W]] es cero y [[Q_iso]] tambien es cero. Este caso muestra que la condicion [[T]] constante no basta para definir un proceso isotermico en el sentido termodinamico; se requiere ademas que el proceso sea reversible y cuasiestatico.

**Proceso casi isotermico de un gas real**: para el dioxido de carbono a 50 atm y 300 K, el producto pV no es constante porque las interacciones entre moleculas crean desviaciones del orden del 5 al 10 por ciento respecto al modelo ideal. En estos casos, la ley de Boyle sobrestima o subestima el volumen final dependiendo del tipo de interaccion dominante.

**Comparacion con el proceso adiabatico**: para la misma expansion desde [[V1]] hasta [[V2]], el proceso isotermico produce mas trabajo que el adiabatico, porque en el adiabatico la temperatura cae durante la expansion, reduciendo la presion mas rapidamente que en la hiperbola isotermica. Esta diferencia es visible en el diagrama pV como la diferencia entre el area bajo la hiperbola y el area bajo la curva adiabatica, que es menos empinada.

## Preguntas reales del alumno

**¿Por que la temperatura no cambia si el gas hace trabajo?**
Porque el gas recibe exactamente ese calor del foco termico. El foco compensa la perdida de energia que el gas sufriria al realizar trabajo, manteniendo [[T]] constante. La clave es que el proceso debe ser suficientemente lento.

**¿Por que [[W]] no es cero si [[T]] es constante?**
Porque [[T]] constante implica energia interna constante, no trabajo nulo. El trabajo puede ser no nulo siempre que haya un intercambio de calor igual y de igual magnitud con el foco. Confundir [[T]] constante con [[W]] nulo es el error clasico de cambiar isotermico por adiabatico.

**¿Que sucede si la expansion es muy rapida?**
La expansion rapida genera gradientes internos de temperatura; el gas se enfria en la zona de baja presion antes de que el calor del foco pueda llegar. El proceso deja de ser isotermico y el trabajo real es menor que el predicho por la formula de la hiperbola.

**¿Como se relaciona el proceso isotermico con el ciclo de Carnot?**
El ciclo de Carnot utiliza dos procesos isotermicos: uno a la temperatura alta del foco caliente, donde el gas absorbe calor y se expande, y otro a la temperatura baja del foco frio, donde el gas cede calor y se comprime. La diferencia de trabajo entre estos dos procesos es el trabajo neto del ciclo.

## Conexiones transversales y rutas de estudio

El proceso isotermico conecta directamente con la **ley del gas ideal** ([leaf:fisica-clasica/termodinamica/gases-y-modelos/gas-ideal]), ya que la ley de Boyle es la restriccion isotermica de la ecuacion de estado. Sin entender el gas ideal no es posible derivar ni interpretar la hiperbola del diagrama pV.

También se conecta con el **primer principio de la termodinamica** ([leaf:fisica-clasica/termodinamica/fundamentos/primer-principio]), que permite relacionar [[W]] con [[Q_iso]] de forma exacta para gas ideal. El proceso adiabatico ([leaf:fisica-clasica/termodinamica/gases-y-modelos/procesos-termodinamicos/adiabatico]) es el contrapunto necesario: en él [[Q_iso]] es nulo pero [[T]] cambia, exactamente lo contrario que en el isotermico.

La ruta de estudio recomendada es: gas ideal → primer principio → proceso isotermico → proceso adiabatico → ciclo de Carnot → segundo principio de la termodinamica.

## Síntesis final

El proceso isotermico es la transformacion termodinamica donde [[T]] permanece constante porque el gas intercambia calor con un foco termico. La ley de Boyle describe la hiperbola de estados accesibles en el diagrama pV, y el trabajo realizado es igual al calor absorbido por el primer principio. Distinguir este proceso del adiabatico —donde el calor es nulo y la temperatura cambia— es la competencia central que el alumno debe adquirir al estudiar este leaf.
`;export{e as default};
