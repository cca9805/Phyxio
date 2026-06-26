# Teoría cinética de los gases

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

## Interpretación física profunda

El corazón conceptual del leaf es la equivalencia entre temperatura y energía cinética media. Cuando se dice que "el gas se calienta", la descripción microscópica correcta es que se incrementa [[v_rms]] y por tanto [[E_k_mol]]. El calentamiento no cambia la masa ni el número de partículas: solo acelera su agitación.

La presión [[P]] como magnitud emergente convierte el caos molecular en orden termodinámico. Cada colisión individual es microscópica y aleatoria, pero el efecto colectivo de trillones de colisiones por segundo produce una presión perfectamente estable y reproducible.

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

**Gas muy ligero a temperatura alta.** El hidrógeno a 6000 K tiene una [[v_rms]] cercana a 8600 m/s, próxima a la velocidad de escape terrestre. Una fracción de las moléculas con velocidades en la cola de Maxwell-Boltzmann supera ese umbral, lo que explica la escasez de hidrógeno libre en la atmósfera de la Tierra.

**Mezcla de gases en equilibrio térmico.** Dos gases a la misma [[T]] comparten la misma [[E_k_mol]], pero sus [[v_rms]] difieren inversamente con la raíz de sus masas. En una mezcla nitrógeno-hidrógeno a 300 K, las moléculas de hidrógeno tienen cuatro veces mayor [[v_rms]] que las de nitrógeno, con idéntica energía cinética media.

## Preguntas reales del alumno

**¿Por qué la velocidad cuadrática media no es simplemente la velocidad media?**
Porque la energía cinética depende del cuadrado de la velocidad. Hay que promediar primero los cuadrados y luego sacar la raíz; la velocidad media aritmética subestimaría la energía del gas.

**¿Por qué el nitrógeno va más lento que el hidrógeno a la misma temperatura?**
Ambos tienen la misma [[E_k_mol]], pero [[m_mol]] del nitrógeno es mayor. Para que el producto masa por velocidad cuadrada sea igual, el gas más pesado necesita menor [[v_rms]].

**¿Cómo puede la presión ser estable si las colisiones son aleatorias?**
El número de colisiones por segundo es del orden de 10²⁷ por cm². Las fluctuaciones relativas son de orden 10⁻¹³, completamente indetectables a escala macroscópica.

**¿Por qué usar kelvin y no Celsius en la fórmula de [[v_rms]]?**
Porque la fórmula deriva de la energía cinética absoluta. El cero Celsius es arbitrario; el cero kelvin corresponde a energía cinética nula. Con Celsius se obtendrían resultados absurdos o negativos.

## Conexiones transversales y rutas de estudio

La teoría cinética conecta directamente con el leaf de [gas ideal](leaf:fisica-clasica/termodinamica/gases-y-modelos/gas-ideal), cuya ecuación de estado puede deducirse directamente a partir de la presión cinética [[P]] multiplicando por el volumen [[V]] y relacionando con el número de moles. La conexión muestra que la constante universal de los gases R es simplemente el producto de la constante de Boltzmann [[k_B]] por el número de Avogadro.

Hacia delante, la distribución de Maxwell-Boltzmann (fuera del alcance de este leaf pero accesible en niveles universitarios) extiende el modelo cinético a la probabilidad de encontrar una molécula con una velocidad concreta, y es la puerta de entrada a la mecánica estadística.

La [ecuación de estado](leaf:fisica-clasica/termodinamica/gases-y-modelos/ecuaciones-de-estado) de Van der Waals, tratada en otro leaf del mismo nodo, toma la presión cinética [[P]] como punto de partida y añade correcciones por el volumen molecular propio y las interacciones atractivas. Comprender bien la teoría cinética hace que las correcciones de Van der Waals sean interpretables físicamente y no solo algebraicamente.

## Síntesis final

La teoría cinética convierte la temperatura, la presión y la velocidad molecular en un sistema coherente y calculable. [[T]] mide la energía cinética media [[E_k_mol]] de las moléculas; [[v_rms]] es la velocidad que produce esa energía; y [[P]] es el efecto colectivo de millones de colisiones moleculares por unidad de área. Estos tres resultados emergen de un modelo simple pero riguroso que ha resistido más de un siglo de verificación experimental y teórica, y que sigue siendo la base intuitiva de toda la física estadística moderna.
