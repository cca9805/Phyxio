const e=`# Tipos de ondas en solidos

## Contexto conceptual

Cuando se aplica una perturbacion mecanica a un solido elastico, la energia se canaliza en **tipos de onda definidos**, cada uno con velocidad, desplazamiento de particulas y dependencia elastica propios.

Esta distincion sostiene la sismologia, el control no destructivo, los transductores ultrasonicos y los recubrimientos. La pregunta central es **que tipo de onda se genera, como se propaga y con que velocidad**.

Un fluido solo transmite compresion; un solido transmite tambien corte y ondas superficiales. Esa variedad revela sus propiedades elasticas.

## 🟢 Nivel esencial

Un solido elastico puede transmitir dos tipos fundamentales de onda de volumen y al menos una onda superficial.

Las **ondas longitudinales** (o de compresion, llamadas ondas P en sismologia) mueven las particulas en la misma direccion en que avanza la onda. Son las mas rapidas en cualquier solido y existen tanto en solidos como en fluidos. Se pueden imaginar como el movimiento de un muelle: zonas de compresion y expansion alternadas que avanzan en la misma direccion.

Las **ondas transversales** (o de corte, llamadas ondas S en sismologia) mueven las particulas perpendicularmente a la direccion de propagacion. Son mas lentas que las longitudinales en el mismo material y, de forma crucial, **no pueden existir en fluidos**, porque los fluidos no resisten esfuerzos de corte. Esta es la diferencia fisica mas profunda entre un solido y un fluido desde el punto de vista ondulatorio.

Las **ondas superficiales de Rayleigh** se propagan confinadas a la superficie libre del solido, con un movimiento de particula eliptico y retrogrado. Su amplitud decae exponencialmente con la profundidad. Son casi tan rapidas como las ondas de corte del mismo material.

> [!NOTE]
> La existencia de ondas transversales es la firma dinamica de un solido. Si un material transmite ondas S, es un solido; si no, es un fluido o un gas.

## 🔵 Nivel formal

Las velocidades de los tres tipos de onda se determinan a partir de las propiedades elasticas del material y su densidad [[rho]].

La velocidad de la onda longitudinal [[v_L]] en un solido tridimensional isotropo se calcula a partir del modulo de Young [[E_young]] y el coeficiente de Poisson [[nu]]:

{{f:vel_longitudinal}}

El factor entre parentesis combina [[E_young]] y [[nu]] para formar el **modulo confinado**, que es siempre mayor que [[E_young]] para cualquier [[nu]] positivo. Esta es la razon por la que [[v_L]] en un solido 3D es mayor que la velocidad longitudinal en una barra delgada del mismo material.

La velocidad de la onda transversal [[v_T]] depende exclusivamente del modulo de corte [[G_corte]] y la densidad:

{{f:vel_transversal}}

La sencillez de esta expresion es reveladora: [[v_T]] no depende de como el material responde a la compresion, solo de como responde al corte. Por eso, cuando [[G_corte]] tiende a cero (limite fluido), [[v_T]] tiende a cero y la onda S desaparece.

La velocidad de la onda de Rayleigh [[v_R]] se obtiene como una fraccion de [[v_T]] que depende suavemente de [[nu]] mediante la aproximacion de Viktorov:

{{f:vel_rayleigh}}

Esta formula muestra que [[v_R]] siempre esta entre el 87 y el 96 % de [[v_T]], independientemente del material. La jerarquia de velocidades es invariante: [[v_L]] mayor que [[v_T]] mayor que [[v_R]] en cualquier solido elastico isotropo.

> [!TIP]
> Para identificar el tipo de onda en un ensayo ultrasonico, medir el tiempo de llegada del primer pulso (onda P) y del segundo (onda S). La razon de sus velocidades revela directamente el coeficiente de Poisson del material.

## 🔴 Nivel estructural

La arquitectura fisica de los tres tipos de onda refleja las dos formas independientes en que un solido puede almacenar energia elastica: **energia de compresion** y **energia de corte**.

La onda longitudinal involucra ambas: la perturbacion de compresion activa tanto la resistencia a cambiar de volumen (modulo de compresibilidad volumetrica K) como la resistencia a cambiar de forma (modulo de corte G). El modulo confinado efectivo de esa onda es precisamente la combinacion de ambos mecanismos, ponderada por el coeficiente de Poisson [[nu]].

La onda transversal, en cambio, es **puramente disipativa de forma**: mueve el material angularmente sin cambiar su volumen. Solo activa [[G_corte]], y por eso su relacion de velocidad es mas simple y mas lenta que la longitudinal. Esta pureza hace que las mediciones de [[v_T]] sean los mejores estimadores del modulo de corte en ensayos no destructivos.

La **jerarquia de velocidades** no es accidental: puede demostrarse que para cualquier material isotropo estable (con [[nu]] entre cero y 0.5), siempre se cumple que [[v_L]] supera a [[v_T]]. La diferencia relativa depende exclusivamente de [[nu]] y se vuelve muy grande cuando [[nu]] se acerca a 0.5 (materiales casi incompresibles como el caucho), porque en ese limite el modulo confinado diverge mientras que [[G_corte]] permanece finito.

La onda de Rayleigh penetra aproximadamente una longitud de onda, por lo que sondea la capa superficial. En solidos estratificados se vuelve **dispersiva**: distintas frecuencias viajan a distintas velocidades, y esa curva revela el perfil de rigidez en profundidad.

> [!WARNING]
> En un solido real con atenuacion, las velocidades de fase y de grupo pueden diferir. La formula de Viktorov da la velocidad de fase en el caso elastico puro; en materiales viscoelasticos las ondas se dispersan incluso en un medio homogeneo.

La onda de Rayleigh requiere una **superficie libre**. En laminas aparecen ondas de Lamb; con una capa lenta sobre un sustrato aparecen ondas de Love. Son extensiones guiadas del mismo concepto superficial.

Los limites de validez del modelo elastico isotropo se alcanzan cuando:

- Las deformaciones son grandes (regimen no lineal, cerca del limite de fluencia).
- El material tiene estructura interna orientada (composites, madera, tejido biologico).
- La frecuencia es tan alta que la longitud de onda se aproxima al tamano del grano o de la microestructura (scattering de Mie o de Rayleigh de granos).

## Interpretación física profunda

La clasificacion de tipos de onda refleja una verdad profunda sobre la elasticidad: **no toda rigidez es igual**. La rigidez a la compresion (cuanto resiste el material a cambiar de volumen) y la rigidez al corte (cuanto resiste a cambiar de forma) son propiedades independientes, y cada tipo de onda extrae solo la informacion que le corresponde.

Esto tiene consecuencias practicas: un material blando en corte pero rigido en compresion, como el caucho, tiene [[v_L]] moderada y [[v_T]] baja. Un material rigido y ligero, como el aluminio, tiene [[v_T]] alta. Medir [[v_L]] y [[v_T]] permite estimar modulos elasticos sin deformacion macroscopica.

La onda de Rayleigh añade una tercera fuente de informacion: al ser sensible solo a la zona superficial, permite detectar cambios de propiedades en la interfaz o en la capa de compresion residual de un tratamiento termico o mecanico.

## Orden de magnitud

Para el acero estructural (E aproximadamente 200 GPa, G aproximadamente 80 GPa, densidad aproximadamente 7800 kg/m³, [[nu]] aproximadamente 0.30), los tres tipos de onda dan velocidades en el rango de los miles de metros por segundo:

- Onda longitudinal: en torno a 5900 m/s.
- Onda transversal: en torno a 3200 m/s.
- Onda de Rayleigh: en torno a 2970 m/s.

Para el aluminio (E aproximadamente 70 GPa, G aproximadamente 26 GPa, densidad aproximadamente 2700 kg/m³, [[nu]] aproximadamente 0.33):

- Onda longitudinal: en torno a 6300 m/s.
- Onda transversal: en torno a 3100 m/s.

En suelos blandos, [[v_T]] puede bajar a 50 m/s mientras [[v_L]] ronda 300 m/s; la separacion relativa crece porque [[nu]] se acerca a 0.5.

Un resultado fisicamente absurdo seria obtener [[v_T]] mayor que [[v_L]] en el mismo material: eso implicaria un coeficiente de Poisson fuera del rango fisicamente admisible, o un error en los modulos de entrada.

## Método de resolución personalizado

El proceso de analisis de tipos de onda en un solido sigue un protocolo reproducible:

1. **Identificar los parametros del material**: [[E_young]], [[G_corte]], [[rho]] y [[nu]]. Si solo se conocen dos de los cuatro, verificar la relacion elastica que los vincula antes de proceder.

2. **Calcular [[v_L]]** con la formula completa del solido 3D si el medio es tridimensionalmente homogeneo; o con la version de barra delgada si el solido esta confinado geometricamente.

3. **Calcular [[v_T]]** con [[G_corte]] y [[rho]]. Este paso siempre precede al calculo de [[v_R]].

4. **Calcular [[v_R]]** con la aproximacion de Viktorov si [[nu]] esta entre 0 y 0.5.

5. **Verificar la jerarquia**: [[v_L]] mayor que [[v_T]] mayor que [[v_R]]. Si no se cumple, hay un error en los datos o en el modelo.

6. **Interpretar**: La razon [[v_T]]/[[v_L]] determina [[nu]]; la razon [[v_R]]/[[v_T]] es un indicador adicional de [[nu]]. Si las tres velocidades son consistentes entre si, se puede confiar en la caracterizacion del material.

## Casos especiales y ejemplo extendido

**Material casi incompresible ([[nu]] proximo a 0.5)**: en caucho, [[v_L]] crece mucho porque el modulo confinado aumenta, mientras [[v_T]] permanece moderada. La separacion P-S se vuelve grande: la onda P parece propia de un fluido rapido, pero la onda S revela que el material sigue siendo solido.

**Material auxetico ([[nu]] negativo)**: en espumas re-entrantes la separacion entre ondas P y S se reduce, y la aproximacion de Viktorov para [[v_R]] pierde precision.

**Acero inoxidable 304**: con E de 193 GPa, G de 77 GPa, densidad de 7900 kg/m³ y [[nu]] de 0.25, se obtiene aproximadamente [[v_L]] = 5700 m/s, [[v_T]] = 3120 m/s y [[v_R]] = 2900 m/s. La jerarquia se verifica y la razon [[v_T]]/[[v_L]] es coherente con [[nu]].

## Preguntas reales del alumno

**¿Por que la onda S no existe en el agua si el agua parece "rigida" a la presion?**

El agua resiste compresion, pero su modulo de corte es cero: no mantiene esfuerzos tangenciales en reposo. Solo la rigidez al corte permite ondas S.

**¿Por que la onda de Rayleigh es siempre mas lenta que la onda S si ambas usan los mismos modulos?**

Porque su modo superficial combina compresion y corte sin maximizar la propagacion. La solucion de [[v_R]] queda ligeramente por debajo de [[v_T]].

**¿Que informacion me da la razon [[v_T]]/[[v_L]] sobre el material?**

Esta razon depende unicamente del coeficiente de Poisson [[nu]]. Midiendo ambas velocidades en el mismo material se puede calcular [[nu]] sin necesidad de ensayos de traccion ni de flexion, solo con dos medidas ultrasonicas.

**¿Puede un solido tener una sola onda y no tres?**

No en general: una perturbacion en un solido se descompone en ondas P y S. Barras y placas pueden acoplarlas en modos guiados como Lamb o Love.

## Conexiones transversales y rutas de estudio

Este leaf conecta con los temas que separan geometria, interfaz y elasticidad material:

- [Ondas longitudinales en barras](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-longitudinales-en-barras): onda P con geometria confinada.
- [Ondas transversales de corte](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/ondas-transversales-de-corte): onda S en medios finitos.
- [Reflexion y transmision en solidos](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/reflexion-y-transmision-en-solidos): conversion en interfaces.
- [Propiedades elasticas del solido](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-solidos/propiedades-elasticas-del-solido): origen de los modulos usados aqui.

En sismologia, P y S llegan primero como ondas de cuerpo; Rayleigh y Love llegan despues como ondas superficiales y suelen dominar el daño.

## Síntesis final

Los solidos elasticos albergan ondas longitudinales, transversales y superficiales de Rayleigh. Sus velocidades dependen de combinaciones distintas de modulos elasticos y [[rho]]. La jerarquia [[v_L]] mayor que [[v_T]] mayor que [[v_R]] resume el diagnostico: las ondas S son la firma dinamica directa de la resistencia al corte.
`;export{e as default};
