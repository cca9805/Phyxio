const e=`\uFEFF# Centro de masas en cuerpos extendidos

## Contexto conceptual

En un sistema discreto se suman masas situadas en puntos. En un cuerpo extendido esa imagen deja de ser suficiente: la materia ocupa una longitud, una superficie o un volumen, y cada zona contribuye con una pequeña parte de masa. Por eso el centro de masas ya no se obtiene contando objetos, sino integrando una distribución continua.

La idea física sigue siendo la misma: localizar el punto que resume el **balance inercial** del cuerpo. Lo que cambia es el lenguaje. La posición local [[r]], sus componentes [[x]], [[y]] y [[z]], y el elemento [[dm]] sustituyen a la lista finita de partículas. Si el cuerpo es una barra, una lámina o un sólido, se elige el diferencial geométrico adecuado: [[dL]], [[dA]] o [[dV]].

Este leaf sirve para pasar de la definición elemental del centro de masas a una herramienta usable en objetos reales: varillas no uniformes, placas con huecos, piezas mecánicas, palas, satélites o cuerpos con densidad variable. La pregunta central no es solo dónde está el punto, sino **qué parte de la distribución lo arrastra**.

## 🟢 Nivel esencial

El centro de masas de un cuerpo extendido es un promedio ponderado, pero hecho con infinitas porciones pequeñas. Si una zona contiene más masa por unidad de longitud, área o volumen, esa zona pesa más en el promedio. Por eso el centro de masas se desplaza hacia las regiones de mayor densidad.

La simetría es la primera herramienta. En una barra homogénea, el centro cae en el punto medio; en una lámina circular homogénea, cae en el centro; en una placa con un hueco, puede desplazarse hacia la parte que conserva más material. Si hay un eje de simetría, el centro de masas debe estar sobre ese eje. Si hay dos ejes que se cruzan, el punto queda fijado por la intersección.

> [!NOTE]
> El centro de masas no tiene que estar dentro del material. En un aro, una herradura o una lámina en forma de C, puede caer en una región vacía. Sigue siendo el punto que resume la distribución para la traslación.

En este nivel basta con decidir si el centro visual coincide o no con el centro inercial. La lista de magnitudes queda para el nivel formal, donde ya se fija el contrato matemático completo.

## 🔵 Nivel formal

La masa total del cuerpo extendido se obtiene sumando todos sus elementos diferenciales:

{{f:M}}

Con esa masa total se define el vector centro de masas:

{{f:rcm}}

En coordenadas cartesianas, la definición vectorial se separa en tres componentes. Cada componente es un promedio ponderado de una coordenada local por el mismo elemento de masa:

{{f:xcm}}

{{f:ycm}}

{{f:zcm}}

El paso técnico decisivo es escribir [[dm]] de forma compatible con la geometría. Para una barra o hilo delgado se usa una densidad lineal [[lambda]] y un elemento [[dL]]:

{{f:dm_linear}}

Para una lámina o placa delgada se usa una densidad superficial [[sigma]] y un elemento [[dA]]:

{{f:dm_surface}}

Para un sólido tridimensional se usa la densidad volumétrica [[rho]] y el elemento [[dV]]:

{{f:dm_volume}}

Cuando el cuerpo tiene huecos o partes retiradas, la superposición se puede escribir como masa positiva para el sólido completo y masa negativa para la región eliminada:

{{f:superposition_negative_mass}}

> [!WARNING]
> No se debe introducir la masa total [[M]] dentro de la integral como si fuera una masa local. Dentro del integrando aparece [[dm]], y [[dm]] se construye con la densidad y el diferencial geométrico adecuados.

Las magnitudes de este leaf son: [[M]], [[dm]], [[r]], [[rcm]], [[x]], [[y]], [[z]], [[xcm]], [[ycm]], [[zcm]], [[lambda]], [[sigma]], [[rho]], [[dL]], [[dA]] y [[dV]]. Están marcadas así porque cada una debe activar su tooltip y mantener la misma identidad que en magnitudes.yaml.

## 🔴 Nivel estructural

La elección del diferencial no es un detalle de notación. Decide qué modelo físico se está usando. Una varilla larga y delgada puede tratarse como distribución lineal si su grosor no afecta a la pregunta. Una placa fina necesita distribución superficial. Un bloque real con variación interna de densidad exige distribución volumétrica.

Si la densidad es homogénea, el factor de densidad se cancela entre numerador y denominador. En ese caso el centro de masas coincide con el centroide geométrico cuando la forma es simétrica. Si la densidad cambia con la posición, la densidad ya no se cancela y el resultado se desplaza hacia donde la distribución acumula más masa.

La estructura del cálculo siempre tiene tres decisiones:

- Elegir el origen y los ejes para que las simetrías simplifiquen [[xcm]], [[ycm]] o [[zcm]].
- Elegir si el cuerpo se representa mediante [[dL]], [[dA]] o [[dV]].
- Comprobar que [[M]] sea positiva y que [[rcm]] quede en una escala razonable respecto al cuerpo.

> [!TIP]
> Antes de integrar, dibuja dónde crees que estará el centro de masas. Si el resultado contradice la zona de mayor densidad o la simetría visible, revisa límites, diferencial y origen.

## Interpretación física profunda

El vector [[rcm]] no es un punto decorativo. Es el punto cuya posición reproduce el primer momento de masa del cuerpo completo. Si una fuerza externa neta actúa como si pasara por ese punto, el movimiento traslacional puede describirse de forma limpia. Si la línea de acción no pasa por él, aparece rotación además de traslación.

En ingeniería, este detalle es operativo. Una pala, una grúa o una pieza impresa en 3D puede tener forma regular y aun así un centro de masas desplazado por cambios de material. El cálculo integral permite distinguir entre **centro visual** y **centro inercial**.

La lectura física también explica por qué los huecos pueden tratarse por superposición. Quitar material equivale a restar una contribución de masa situada donde estaba el hueco. Esta idea no cambia la definición; solo modifica el dominio de integración o lo descompone en piezas más simples.

## Orden de magnitud

El resultado de [[xcm]], [[ycm]] o [[zcm]] debe tener unidades de longitud y estar en la misma escala que el cuerpo. Para una barra de dos metros, una coordenada de centro de masas de decenas de metros indica un error de límites o de unidades. Para una lámina simétrica alrededor del origen, una componente no nula suele indicar que se ha roto una simetría sin justificación.

La masa total [[M]] debe ser positiva. Si una integral da masa nula o negativa para un cuerpo ordinario, el problema no es físico sino de parametrización. En modelos de huecos con masa negativa, la masa negativa es un artificio de cálculo, no una densidad material real.

En distribuciones uniformes, [[lambda]], [[sigma]] o [[rho]] pueden ser constantes. En distribuciones variables, conviene comparar el resultado con los extremos de la densidad: si la densidad aumenta hacia la derecha, [[xcm]] debe quedar a la derecha del centro geométrico.

## Método de resolución personalizado

1. Define el sistema material y excluye soportes, aire o piezas externas que no formen parte del cuerpo.
2. Elige ejes que aprovechen la simetría. Si un eje divide el cuerpo en dos mitades equivalentes, la componente perpendicular del centro de masas queda fijada.
3. Decide si usarás [[dL]], [[dA]] o [[dV]]. Esta elección determina si debes usar [[lambda]], [[sigma]] o [[rho]].
4. Calcula primero la masa total [[M]]. Sin la masa total no hay normalización del promedio.
5. Calcula las componentes necesarias [[xcm]], [[ycm]] y [[zcm]]. No calcules componentes que la simetría ya fija.
6. Valida unidades, signo y posición relativa respecto a las zonas de mayor densidad.

## Casos especiales y ejemplo extendido

En una varilla homogénea, el centro de masas coincide con el punto medio. En una varilla cuya densidad lineal crece hacia un extremo, el centro se desplaza hacia ese extremo porque cada tramo cercano aporta más [[dm]] al primer momento de masa.

En una lámina con un agujero circular descentrado, el centro de masas se aleja del hueco. Una estrategia eficaz es calcular la lámina completa y restar la contribución del hueco como región de masa negativa. El resultado representa la masa que queda, no la forma visual original.

En un sólido con densidad variable, el uso de [[rho]] y [[dV]] es inevitable. Si una aleación es más densa en una zona, el centro de masas puede no coincidir con ningún centro geométrico simple. Esa diferencia es clave al diseñar apoyos, ejes y puntos de suspensión.

## Preguntas reales del alumno

**¿Puedo usar siempre el centro geométrico?** No. Solo funciona con simetría suficiente y densidad homogénea. Si la densidad cambia, el centro geométrico puede ser una mala estimación.

**¿Por qué hay que calcular primero la masa total?** Porque el centro de masas es un promedio. [[M]] normaliza la suma de aportes diferenciales y convierte el primer momento de masa en una posición.

**¿Qué diferencial uso en una placa muy fina?** Si el espesor es despreciable para la pregunta, usa [[dA]] con [[sigma]]. Si el espesor o la densidad cambia a través del volumen, usa [[dV]] con [[rho]].

**¿El centro de masas puede estar en un hueco?** Sí. El punto resume la distribución total, no exige que haya materia en él.

## Conexiones transversales y rutas de estudio

Este leaf conecta con el centro de masas de sistemas discretos porque la integral es el límite continuo de una suma ponderada. También prepara el movimiento del centro de masas, donde [[rcm]] deja de ser solo una posición estática y pasa a describir la trayectoria colectiva del cuerpo.

La conexión con rotación es directa. El momento de inercia se calcula también integrando aportes diferenciales, pero ponderados por distancia al eje. Por eso dominar [[dm]] aquí evita errores posteriores en dinámica de sólidos rígidos.

También conecta con fluidos y elasticidad cuando la densidad cambia en el espacio. En esos casos, el centro de masas puede depender de deformaciones, redistribución interna o movimiento de material dentro del cuerpo.

## Síntesis final

El centro de masas en cuerpos extendidos es la forma integral del promedio ponderado por masa. El contrato físico del leaf se resume en elegir correctamente [[dm]], integrar [[M]] y después localizar [[rcm]] o sus componentes [[xcm]], [[ycm]] y [[zcm]]. La simetría, la densidad y los límites de integración son los tres filtros que separan un resultado formalmente escrito de una interpretación físicamente fiable.
\r
`;export{e as default};
