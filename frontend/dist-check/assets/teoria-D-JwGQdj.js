const e=`# Teoría cinética de los gases

## Contexto conceptual

La **teoría cinética** es el puente que une la física microscópica molecular con las magnitudes termodinámicas macroscópicas. Antes de su desarrollo, la presión, la temperatura y el volumen de un gas eran magnitudes puramente fenomenológicas: se medían, pero no se entendía de dónde procedían. La teoría cinética responde esta pregunta de fondo con una imagen radicalmente diferente: un gas no es un fluido continuo, sino un conjunto astronómicamente numeroso de partículas en movimiento perpetuo y aleatorio.

Este leaf se centra en el gas ideal, el modelo más simple y más potente de la teoría cinética. En él, las moléculas no interaccionan entre sí salvo en colisiones elásticas instantáneas, y su único efecto colectivo es la presión que ejercen al rebotar contra las paredes del recipiente. A partir de este modelo tan austero emergen relaciones cuantitativas precisas entre el movimiento molecular, la temperatura y la presión.

El aprendizaje de este tema no consiste en memorizar fórmulas, sino en comprender por qué la temperatura no es una propiedad de las moléculas individuales, sino un promedio estadístico de su energía cinética. Esa comprensión transforma la termodinámica de un conjunto de leyes empíricas en un sistema deductivo coherente.

## 🟢 Nivel esencial

Imagina una habitación llena de mosquitos volando en todas direcciones a distintas velocidades. Ninguno sigue una trayectoria predecible, pero todos juntos producen un efecto macroscópico: si acercas la mano a la pared, sientes un bombardeo continuo. La **presión** es eso: el efecto acumulado de millones de colisiones moleculares por segundo sobre cada centímetro cuadrado de pared.

La **temperatura** es algo distinto: no mide la velocidad de una molécula concreta, sino la **energía cinética media** de todas ellas. Un gas caliente tiene moléculas que, en promedio, se mueven más rápido. Un gas frío tiene moléculas más lentas en promedio. Cuando das calor a un gas, no estás añadiendo una sustancia nueva, estás acelerando el movimiento de las moléculas.

La magnitud [[v_rms]] resume esta velocidad típica sin necesidad de seguir a cada molécula individualmente. No es la velocidad más lenta ni la más rápida, sino la que captura mejor la **energía cinética** del conjunto. Del mismo modo, [[T]] no es el calor que contiene el gas, sino la escala de agitación de sus moléculas. Y [[P]] es la consecuencia directa de esa agitación golpeando las paredes.

La belleza del modelo es que tres magnitudes macroscópicas —presión, temperatura y volumen— quedan explicadas por una sola imagen microscópica: moléculas moviéndose aleatoriamente y chocando entre sí y con las paredes.

## 🔵 Nivel formal

La deducción cuantitativa de la teoría cinética parte de un gas de [[N]] moléculas de masa [[m_mol]] encerradas en un volumen [[V]]. Para una distribución de velocidades isotrópica (sin dirección privilegiada), el análisis del intercambio de momento lineal entre las moléculas y las paredes conduce a la **expresión de la presión cinética**:

{{f:presion_cinetica}}

Esta ecuación conecta directamente [[P]] con [[N]], [[m_mol]], [[v_rms]] y [[V]]. Cada uno de estos factores tiene una interpretación física precisa: más moléculas o más velocidad produce más colisiones; menos volumen concentra esas colisiones en menos área.

La temperatura entra al combinar la expresión anterior con la ecuación de estado del gas ideal. Ese enlace conduce a la interpretación cinética de la temperatura: la **energía cinética media por molécula** es proporcional a [[T]]:

{{f:energia_cinetica_media}}

Aquí [[k_B]] es la constante de Boltzmann, que actúa como factor de conversión entre la escala macroscópica de temperatura (kelvin) y la escala microscópica de energía (joules por molécula). Este resultado, conocido como el **teorema de equipartición** para traslación, establece que cada grado de libertad translacional contribuye con la misma energía media independientemente de la masa o del tipo de gas.

Despejando [[v_rms]] de la relación entre energía cinética y temperatura, se obtiene la **velocidad cuadrática media**:

{{f:velocidad_cuadratica_media}}

Esta expresión muestra que [[v_rms]] crece con [[T]] como raíz cuadrada —no linealmente— y decrece con la masa [[m_mol]] también como raíz cuadrada. Por eso el hidrógeno (la molécula más ligera de los gases comunes) es casi cuatro veces más rápido que el nitrógeno a la misma temperatura.

## 🔴 Nivel estructural

La teoría cinética tiene una arquitectura física profunda que va mucho más allá del cálculo de velocidades. Tres aspectos merecen un análisis cuidadoso.

**El carácter estadístico del modelo.** El modelo cinético no describe moléculas individuales: describe distribuciones. [[v_rms]] es la raíz de la media de los cuadrados de velocidades, no la velocidad de ninguna molécula en particular. La distribución completa de velocidades —la distribución de Maxwell-Boltzmann— tiene forma asimétrica: el flanco de altas velocidades decae exponencialmente mientras que el flanco de bajas velocidades es más abrupto. [[v_rms]] se sitúa siempre a la derecha de la velocidad más probable, y ambas se desplazan hacia valores mayores al aumentar [[T]]. Esta estructura estadística explica por qué los gases ligeros pueden escapar de la atmósfera terrestre (una fracción de sus moléculas alcanza velocidades de escape) aunque su [[v_rms]] promedio esté muy por debajo de esa velocidad.

**La interpretación de la temperatura como energía de agitación.** La ecuación [[E_k_mol]] proporcional a [[T]] no es solo una relación matemática: es una definición operativa de la temperatura a nivel microscópico. Dos gases en equilibrio térmico tienen exactamente la misma [[E_k_mol]], independientemente de su composición química, masa molecular o presión. Esto es lo que da fundamento cinético al cero de la escala kelvin: a temperatura absoluta cero, la energía cinética translacional media sería nula, lo que equivaldría al reposo completo de las moléculas, inalcanzable por razones cuánticas.

**Los límites del modelo de gas ideal.** La deducción de [[P]] en el nivel formal asume dos hipótesis fuertes: que las moléculas son puntuales (sin volumen propio) y que no interaccionan entre sí excepto en colisiones perfectamente elásticas. En un gas real, ambas hipótesis fallan en mayor o menor medida. A alta presión, el volumen propio de las moléculas no es despreciable respecto al volumen del recipiente, y las fuerzas de Van der Waals entre partículas reducen la presión efectiva. El modelo de Van der Waals corrige ambas desviaciones, pero a un coste: la elegante simetría entre las tres fórmulas cinéticas se rompe. La teoría cinética ideal es la base; las correcciones reales son perturbaciones sobre ese fondo.

**Conexión con la segunda ley de la termodinámica.** El modelo cinético proporciona también una interpretación microscópica de la entropía: la distribución de Maxwell-Boltzmann es precisamente la distribución que maximiza la entropía estadística del sistema bajo la restricción de energía total fija. Esto conecta la teoría cinética con la mecánica estadística de Boltzmann y establece por qué los procesos irreversibles van siempre en la dirección de mayor desorden microscópico. La presión cinética [[P]] que calculamos en el nivel formal es, en ese sentido, la manifestación macroscópica del estado de máxima entropía del gas.

## Interpretación física profunda

El corazón conceptual del leaf es la equivalencia entre temperatura y energía cinética media. Cuando se dice que "el gas se calienta", la descripción microscópica correcta es que se incrementa la velocidad cuadrática media [[v_rms]] de las moléculas, y por tanto su [[E_k_mol]]. El calentamiento no cambia la masa ni el número de partículas: solo acelera su agitación.

El signo de [[T]] en la escala kelvin no es una convención arbitraria. Es la consecuencia de que [[E_k_mol]] no puede ser negativa: una energía cinética negativa no tiene sentido físico. Por eso el cero absoluto es el límite inferior real de la escala de temperatura, y no puede superarse.

La presión [[P]] como magnitud emergente es quizás el resultado más profundo de la teoría cinética. Cada colisión molecular individual es microscópica, aleatoria y de duración infinitesimal. Sin embargo, el efecto colectivo de decenas de miles de trillones de colisiones por segundo y por centímetro cuadrado produce una presión perfectamente estable, medible y reproducible. La estadística convierte el caos molecular en orden termodinámico.

## Orden de magnitud

A temperatura ambiente (aproximadamente 300 K), la velocidad cuadrática media [[v_rms]] del nitrógeno molecular es del orden de 515 m/s, y la del hidrógeno es de casi 1930 m/s. Comparativamente, la velocidad del sonido en el aire a esa temperatura es de unos 340 m/s: siempre menor que [[v_rms]] del gas, porque el sonido se propaga gracias al movimiento molecular pero no puede superarlo en velocidad de fase macroscópica.

La energía cinética media [[E_k_mol]] a 300 K vale aproximadamente 6.2 × 10⁻²¹ J por molécula: una cantidad diminuta a escala humana, pero suficiente para que un mol de gas almacene del orden de 3730 J de energía cinética translacional total. Un resultado absurdo a detectar: si calculas [[v_rms]] y obtienes un valor del orden de la velocidad de la luz o inferior a 10 m/s para condiciones de temperatura ambiente, hay un error seguro de unidades o de fórmula.

## Método de resolución personalizado

Ante un problema de teoría cinética, el protocolo más fiable sigue estos pasos:

1. **Identificar la incógnita principal**: ¿Se busca [[v_rms]], [[T]], [[P]], [[E_k_mol]] o [[m_mol]]?
2. **Convertir la temperatura a kelvin**: si el problema da la temperatura en grados Celsius, sumar 273.15 antes de cualquier cálculo.
3. **Verificar la masa molecular**: si el enunciado da la masa molar en g/mol o kg/mol, dividir entre el número de Avogadro para obtener [[m_mol]] en kg por molécula.
4. **Aplicar la fórmula adecuada** de las tres del leaf, teniendo en cuenta las unidades del SI (presión en Pa, volumen en m³, energía en J).
5. **Verificar el orden de magnitud**: [[v_rms]] para gases comunes a temperatura ambiente está entre 300 y 2000 m/s; [[E_k_mol]] está entre 10⁻²¹ y 10⁻²⁰ J; [[P]] a condiciones normales es del orden de 10⁵ Pa.

## Casos especiales y ejemplo extendido

**Gas muy ligero a temperatura alta.** El hidrógeno molecular a 6000 K (temperatura de la fotosfera solar) tiene una [[v_rms]] de aproximadamente 8600 m/s, que supera la velocidad de escape de la atmósfera terrestre (11 200 m/s) solo para una fracción de la distribución de Maxwell-Boltzmann. Sin embargo, incluso esa fracción, acumulada durante miles de millones de años, explica la práctica ausencia de hidrógeno libre en la atmósfera terrestre y su abundancia en planetas gigantes más masivos.

**Mezcla de gases a la misma temperatura.** Si dos gases distintos están en equilibrio térmico, sus moléculas tienen la misma [[E_k_mol]]. Sin embargo, sus [[v_rms]] son distintas: el gas más pesado se mueve más lento. Esto significa que en una mezcla de nitrógeno e hidrógeno a 300 K, las moléculas de hidrógeno tienen exactamente la misma energía cinética media que las de nitrógeno, pero su velocidad es casi cuatro veces mayor. Esta propiedad —misma energía cinética, distintas velocidades— es la base de la separación isotópica por difusión gaseosa.

**Impacto del volumen en la presión cinética.** Si se comprime adiabáticamente un gas (sin intercambio de calor), tanto [[V]] disminuye como [[T]] aumenta, y ambos efectos elevan [[P]]. El análisis cinético muestra que la compresión transfiere energía al gas incrementando [[v_rms]], lo que explica por qué el émbolo de una bomba de bicicleta se calienta al inflar una rueda.

## Preguntas reales del alumno

**¿Por qué la velocidad cuadrática media no es simplemente la velocidad media?**
Porque la energía cinética depende del cuadrado de la velocidad. Para calcular la energía correctamente, hay que promediar primero los cuadrados y luego sacar la raíz. La velocidad media aritmética subestimaría la energía del gas.

**¿Por qué el nitrógeno tiene menor [[v_rms]] que el hidrógeno a la misma temperatura si tienen la misma energía cinética media?**
Precisamente porque tienen la misma energía cinética media [[E_k_mol]] pero distinta masa [[m_mol]]. Para que el producto (1/2) masa por velocidad cuadrada sea el mismo, el gas más pesado necesita menor velocidad.

**¿Cómo puede la presión ser estable si las colisiones moleculares son aleatorias?**
Porque el número de colisiones por segundo es astronomicamente grande (del orden de 10²⁷ por cm² en condiciones normales). Las fluctuaciones estadísticas son inversamente proporcionales a la raíz del número de eventos: con 10²⁷ colisiones, las fluctuaciones relativas son del orden de 10⁻¹³ veces la presión media, completamente indetectables.

**¿Por qué usar kelvin y no Celsius en la fórmula de [[v_rms]]?**
Porque la fórmula tiene su origen en la energía cinética absoluta. El cero de la escala Celsius es arbitrario (el punto de congelación del agua), mientras que el cero kelvin corresponde a energía cinética nula. Con temperatura en Celsius, la fórmula produciría resultados absurdos o negativos para temperaturas bajo cero.

## Conexiones transversales y rutas de estudio

La teoría cinética conecta directamente con el leaf de [gas ideal](leaf:fisica-clasica/termodinamica/gases-y-modelos/gas-ideal), cuya ecuación de estado puede deducirse directamente a partir de la presión cinética [[P]] multiplicando por el volumen [[V]] y relacionando con el número de moles. La conexión muestra que la constante universal de los gases R es simplemente el producto de la constante de Boltzmann [[k_B]] por el número de Avogadro.

Hacia delante, la distribución de Maxwell-Boltzmann (fuera del alcance de este leaf pero accesible en niveles universitarios) extiende el modelo cinético a la probabilidad de encontrar una molécula con una velocidad concreta, y es la puerta de entrada a la mecánica estadística.

La [ecuación de estado](leaf:fisica-clasica/termodinamica/gases-y-modelos/ecuaciones-de-estado) de Van der Waals, tratada en otro leaf del mismo nodo, toma la presión cinética [[P]] como punto de partida y añade correcciones por el volumen molecular propio y las interacciones atractivas. Comprender bien la teoría cinética hace que las correcciones de Van der Waals sean interpretables físicamente y no solo algebraicamente.

## Síntesis final

La teoría cinética convierte la temperatura, la presión y la velocidad molecular en un sistema coherente y calculable. [[T]] mide la energía cinética media [[E_k_mol]] de las moléculas; [[v_rms]] es la velocidad que produce esa energía; y [[P]] es el efecto colectivo de millones de colisiones moleculares por unidad de área. Estos tres resultados emergen de un modelo simple pero riguroso que ha resistido más de un siglo de verificación experimental y teórica, y que sigue siendo la base intuitiva de toda la física estadística moderna.
`;export{e as default};
