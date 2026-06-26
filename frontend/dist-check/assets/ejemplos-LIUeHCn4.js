const e=`# Ejemplo tipo examen

## Enunciado
Una rama RLC serie alimentada por una fuente senoidal trabaja a una frecuencia para la cual las reactancias ya han sido evaluadas. Se conocen [[R]] igual a 40 ohm, [[Xl]] igual a 90 ohm, [[Xc]] igual a 50 ohm y [[V]] igual a 230 voltios RMS. Se pide determinar [[Z]], [[I]], [[phi]], [[P]], [[Q]] y [[S]], clasificar el circuito y explicar si la carga usa de forma razonable la capacidad de la fuente.

## Datos
Los datos del problema ya vienen en el lenguaje correcto del leaf: parte resistiva [[R]], reactancia inductiva [[Xl]], reactancia capacitiva [[Xc]] y tension eficaz [[V]]. Eso evita el paso previo de convertir componentes y permite concentrarse en la estructura del circuito. La informacion mas valiosa no es solo numerica: [[Xl]] supera a [[Xc]], de modo que la rama sugiere desde el inicio un comportamiento inductivo.

## Definición del sistema
El sistema elegido es la rama serie completa conectada a la fuente. No interesa estudiar cada elemento por separado, sino el comportamiento global de la carga en terminos de [[Z]], [[I]], [[phi]], [[P]], [[Q]] y [[S]]. La frontera del sistema coincide con los bornes de alimentacion y la lectura se hace en estado estacionario sinusoidal con valores RMS. Esa definicion evita mezclar transferencia media neta con almacenamiento alterno interno.

## Modelo físico
El modelo fisico es el de una rama RLC serie lineal en regimen estacionario. En ese marco, [[R]] representa la parte en fase y [[Xl]] junto con [[Xc]] construyen la parte reactiva neta que determina [[Z]] y [[phi]]. La corriente [[I]] queda fijada por [[V]] y por la magnitud de [[Z]], mientras que [[P]], [[Q]] y [[S]] organizan la lectura energetica del caso. El ejemplo esta anclado al leaf porque depende directamente de como [[R]], [[Xl]] y [[Xc]] se combinan en una carga AC.

## Justificación del modelo
El modelo esta justificado porque el enunciado ya entrega [[Xl]] y [[Xc]] evaluadas a una misma frecuencia, no menciona no linealidades ni varias bandas de trabajo y trata la rama como un equivalente serie. Eso hace coherente usar la cadena cerrada del leaf. Si el caso incluyera saturacion, armonicos fuertes, topologia paralela o parasitas dominantes, habria que cambiar de modelo. Aqui, en cambio, el objetivo es precisamente diagnosticar como la oposicion total y el desfase redistribuyen la demanda sobre la fuente.

## Resolución simbólica
La impedancia total se obtiene con:

{{f:impedancia_rlc}}

La corriente eficaz se obtiene con:

{{f:corriente_total}}

El desfase del circuito se interpreta con:

{{f:desfase_rlc}}

La potencia activa se obtiene con:

{{f:potencia_activa}}

La potencia reactiva se obtiene con:

{{f:potencia_reactiva}}

La potencia aparente se obtiene con:

{{f:potencia_aparente}}

## Sustitución numérica
El desequilibrio reactivo vale 40 ohm a favor de la parte inductiva, porque [[Xl]] supera a [[Xc]] en esa cantidad. Con ese dato, [[Z]] queda alrededor de 56.6 ohm. La corriente [[I]] asociada a [[V]] igual a 230 voltios RMS resulta cercana a 4.06 amperios. El angulo [[phi]] es positivo y ronda 45 grados, lo que confirma que la rama es inductiva y que el factor de potencia esta lejos de uno.

Con esos resultados, [[S]] queda del orden de 934 VA. La potencia activa [[P]] ronda 660 W, mientras [[Q]] queda en un valor comparable con signo inductivo en la convencion del leaf. Lo importante no es el redondeo final, sino la estructura: la carga absorbe una potencia activa apreciable, pero exige a la fuente una demanda total bastante mayor debido al desfase.

## Validación dimensional
La validacion dimensional cierra en todas las etapas. [[Z]], [[R]], [[Xl]] y [[Xc]] comparten unidad de ohm, por lo que la combinacion que conduce a [[Z]] conserva sentido electrico. Dividir [[V]] por [[Z]] devuelve amperios para [[I]], y combinar [[V]] con [[I]] devuelve unidades de potencia aparente para [[S]]. Al proyectar con el coseno o el seno, [[P]] y [[Q]] conservan unidad de potencia.

La validacion conceptual tambien es correcta. [[Z]] es mayor que [[R]], [[P]] es menor que [[S]] y el signo positivo de [[phi]] coincide con el hecho de que [[Xl]] domina sobre [[Xc]]. Eso significa que la resolucion esta bien calculada y bien interpretada.

## Interpretación física
Fisicamente, la rama no esta cerca de compensacion. La parte inductiva domina con claridad y por eso la carga pide una corriente que la fuente debe sostener aunque no toda ella se transforme en [[P]]. La diferencia entre [[S]] y [[P]] no es un detalle aritmetico: expresa capacidad de red ocupada por una carga cuyo desfase todavia pesa en la operacion.

Desde un punto de vista tecnico, el caso sugiere dos conclusiones. Primera, la carga puede funcionar, pero no esta optimizada desde la perspectiva de demanda total. Segunda, una estrategia de compensacion podria reducir [[Q]] y acercar [[S]] a [[P]], aunque esa mejora deberia evaluarse sin empujar el circuito hacia sensibilidad excesiva o sobrecorriente. El ejemplo enseña justamente esa idea: no se compensa a ciegas, se interpreta primero la estructura del problema.

# Ejemplo de aplicación real

## Contexto
Un banco de ensayo industrial alimenta una carga equivalente RLC asociada a un transformador, una bobina de ajuste y un capacitor de compensacion. El responsable de mantenimiento observa que la corriente de linea es alta para la potencia util medida y quiere saber si el problema es puramente resistivo o si la rama esta usando mal la capacidad de la fuente.

## Estimación física
La lectura instrumental entrega un conjunto equivalente con [[R]] del orden de decenas de ohm, [[Xl]] claramente mayor que [[Xc]], una [[V]] tipica de red industrial y una [[I]] varios amperios por encima de la intuicion resistiva. El primer diagnostico no exige precision extrema, sino una comparacion estructural entre [[P]], [[Q]] y [[S]]. Si la diferencia entre [[S]] y [[P]] es grande y el signo de [[phi]] confirma dominancia inductiva, la hipotesis mas razonable es bajo factor de potencia.

La estimacion fisica valida es esta: incluso sin reconstruir todos los detalles internos del banco, el reparto entre [[P]] y [[Q]] ya dice si la fuente esta transportando una demanda reactiva excesiva. Si el proceso necesita mantener la misma potencia util, reducir [[Q]] mediante compensacion puede bajar [[S]] y con ella la exigencia sobre cables, protecciones y fuente. Ese efecto no se ve si uno mira solo el dato de potencia activa.

## Interpretación
La leccion real del caso es que una carga RLC se gestiona mal cuando se observa solo el consumo util. La explotacion tecnica requiere leer la carga como combinacion de demanda activa y reactiva. En este contexto, [[Q]] no es un adorno teorico: es un criterio de red. Si se ignora, el sistema puede seguir funcionando mientras ocupa mucha mas capacidad electrica de la necesaria.

Tambien aqui aparece la justificacion del modelo. Para mantenimiento preliminar, el equivalente serie lineal es suficiente y operativo. Permite decidir si conviene medir con mas detalle, si la carga necesita compensacion y si la corriente observada es coherente con la estructura fasorial del sistema. Solo cuando la decision exige precision mayor tiene sentido pasar a un modelo mas rico. Ese cambio de escala es una competencia central de este leaf.
`;export{e as default};
