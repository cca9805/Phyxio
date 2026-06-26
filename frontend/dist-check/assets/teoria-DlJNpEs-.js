const e=`# Intensidad y nivel sonoro

## Contexto conceptual

Cuando una fuente emite sonido, la energia viaja a traves del medio en forma de ondas mecanicas. La **intensidad sonora** [[I]] cuantifica cuanta **potencia acustica** [[P]] atraviesa cada metro cuadrado de superficie perpendicular a la direccion de propagacion. Esta magnitud fisica fundamental describe la "concentracion" de energia sonora en el espacio.

Sin embargo, el oido humano no responde de manera lineal a la intensidad fisica. Un sonido con el doble de potencia no se percibe como "el doble de fuerte". Para expresar la sensacion auditiva de forma intuitiva, se utiliza el **nivel de intensidad sonora** [[L]], medido en **decibelios** (dB), una escala logaritmica que refleja mejor la respuesta psicofisica del sistema auditivo.

> [!NOTE]
> La escala en decibelios no es una unidad lineal como el vatio o el metro. Es una escala relativa que compara la intensidad medida con un umbral de referencia.

## 🟢 Nivel esencial

La intensidad sonora es la cantidad de energia que llega a tu oido por segundo y por cada metro cuadrado de area. Cuanto mas cerca estes de la fuente, mas intensidad recibes porque la misma potencia se distribuye sobre una esfera mas pequena.

Imagina una **fuente puntual** que emite sonido uniformemente en todas direcciones. La energia se expande en forma de **ondas esfericas**. Al duplicar la distancia [[r]], la superficie de la esfera se multiplica por cuatro, por lo que la intensidad se reduce a la cuarta parte. Esta es la **ley del inverso del cuadrado**.

El oido humano es extraordinariamente sensible. El **umbral de audicion** es tan bajo como 10⁻¹² W/m², mientras que el **umbral de dolor** esta alrededor de 1 W/m². Esta rango de un trillon (10¹²) hace impractico usar la escala lineal de intensidad para describir la experiencia cotidiana.

> [!TIP]
> **Regla practica**: Cada vez que te alejas al doble de distancia de una fuente, el sonido se percibe aproximadamente 6 dB mas bajo, lo que corresponde a reducir la intensidad fisica a un cuarto.

## 🔵 Nivel formal

La **intensidad sonora** [[I]] se define como la potencia acustica [[P]] por unidad de area perpendicular a la direccion de propagacion. Para una fuente puntual que emite ondas esfericas en un medio homogeneo e isotropo, la intensidad a una distancia [[r]] del centro emisor viene dada por:

{{f:intensidad_potencia}}

Esta expresion refleja la conservacion de la energia: la potencia total [[P]] se distribuye uniformemente sobre la superficie esferica 4πr². La intensidad decae con el cuadrado de la distancia, caracteristica fundamental de la propagacion ondulatoria tridimensional en campo libre.

Para relacionar la intensidad fisica con la percepcion subjetiva, se introduce el **nivel de intensidad sonora** [[L]] en **decibelios** (dB):

{{f:nivel_intensidad}}

Donde [[I_0]] = 10⁻¹² W/m² es la **intensidad de referencia**, aproximadamente igual al umbral de audicion humano promedio a 1000 Hz en condiciones ideales.

La base logaritmica (10) y el factor multiplicativo (10) fueron elegidos para que:

- Un aumento de 10 dB corresponda a multiplicar la intensidad fisica por 10
- Un aumento de 3 dB aproximadamente duplique la intensidad
- 0 dB coincida con el umbral de audicion ([[I]] igual a [[I_0]])
- Valores negativos representen intensidades subliminales

La relacion inversa permite obtener la intensidad fisica a partir del nivel:

{{f:nivel_intensidad}}

Para comparar dos posiciones sin recalcular la potencia de la fuente se usa la relacion de intensidades entre distancias:

{{f:intensidad_distancia}}

## 🔴 Nivel estructural

El modelo de intensidad presenta limites estructurales fundamentales relacionados con la geometria de la fuente, el medio de propagacion y las condiciones de frontera.

**Campo cercano versus campo lejano**: La relacion de intensidad para fuente puntual asume **campo lejano**, donde el observador esta suficientemente alejado de la fuente como para que esta pueda aproximarse como puntual. En el **campo cercano** (distancias comparables al tamano de la fuente), la distribucion de intensidad es compleja, depende de la geometria especifica del emisor, y la aproximacion esferica falla. Esta transicion no es abrupta sino gradual, tipicamente ocurriendo a distancias del orden de varias longitudes de onda o del diametro caracteristico de la fuente, lo que sea mayor.

**Atmosferas reales versus medio ideal**: El modelo supone medio homogeneo sin **atenuacion por absorcion**. En aire real, las moleculas absorben energia de la onda, especialmente a altas frecuencias. Esta absorcion atmosferica sigue una ley exponencial adicional al decaimiento geometrico, siendo significativa a distancias superiores a cientos de metros para frecuencias audibles altas.

**Propagacion libre versus campo reverberante**: En espacios cerrados, las **reflexiones** en paredes, suelo y techo crean un campo difuso donde la intensidad no decae con r⁻². El parametro clave es el **tiempo de reverberacion** T60: si este es largo comparado con el tiempo de viaje directo, el campo reverberante domina y la intensidad se distribuye mas uniformemente que en campo libre.

**Fuentes direccionales**: Fuentes reales no son omnidireccionales perfectas. Un altavoz direccional concentra mas potencia en ciertas direcciones, modificado el patron esferico. El **factor de directividad** Q cuantifica esta desviacion, siendo Q igual a 1 para fuente omnidireccional ideal y mayor que 1 para fuentes focalizadas.

> [!WARNING]
> En habitaciones pequenas con paredes reflectantes, la intensidad puede ser significativamente mayor que la predicha por la ley del inverso del cuadrado debido a las reflexiones.

## Interpretacion fisica profunda

La logaritmica en la definicion de [[L]] no es arbitraria: refleja la **respuesta no lineal del oido humano**. El sistema auditivo opera como un receptor de rango dinamico enorme, comprimiendo senales de intensidad muy variable en un rango manejable de respuesta neuronal. Esto es analogo a como las camaras fotograficas usan apertura logaritmica (f-stops) para manejar rangos de luminosidad extremos.

Un aspecto critico es que el decibelio no es una unidad en el sentido convencional. No tiene dimensiones fisicas: es el logaritmo de una relacion entre dos intensidades. Solo cuando se especifica la referencia ([[I_0]] para dB de intensidad, otras para dB de presion o potencia) adquiere significado absoluto.

El signo de [[L]] tiene interpretacion fisica directa: valores negativos indican intensidad por debajo del umbral de audicion (inaudibles), mientras valores positivos cuantifican cuantos ordenes de magnitud separan el sonido del limite de percepcion humana.

## Orden de magnitud

El rango dinamico del oido humano abarca aproximadamente 14 ordenes de magnitud en intensidad, desde el umbral de audicion hasta el umbral de dolor:

- **10⁻¹² W/m²** (0 dB): Umbral de audicion. El sonido mas suave perceptible.
- **10⁻⁶ W/m²** (60 dB): Conversacion normal cara a cara. Referencia cotidiana.
- **10⁻³ W/m²** (90 dB): Trafico urbano intenso. Limite de exposicion laboral en muchos paises.
- **10⁻¹ W/m²** (110 dB): Concierto de rock cercano. Dano permanente posible tras horas.
- **10¹ W/m²** (130 dB): Despegue de avion a 50 m. Dolor inmediato, dano rapido.
- **10² W/m²** (140 dB): Umbral de dolor absoluto. Riesgo de lesion instantanea.

Para detectar resultados absurdos: una intensidad de 100 W/m² a 1 km de distancia implicaria una fuente de potencia inmensa (megavatios), fisicamente irreal para fuentes convencionales. Inversamente, una intensidad de 10⁻¹⁵ W/m² medida junto a una fuente sonora activa indica error de calibracion o unidades.

## Metodo de resolucion personalizado

Para problemas de intensidad y nivel sonoro, aplicar secuencialmente:

1. **Identificar la fuente y geometria**: Determinar si es fuente puntual, lineal (trafico) o plana. La mayoria de problemas basicos usan fuente puntual omnidireccional.

2. **Establecer condiciones del medio**: Verificar si se aplica aproximacion de campo libre (aire abierto) o hay reflexiones significativas (interiores).

3. **Aplicar conservacion de potencia**: Para fuente puntual en campo libre, la potencia total [[P]] se conserva y se distribuye sobre esferas crecientes. Usar la relacion de intensidad desde potencia.

4. **Convertir a nivel si es necesario**: Cuando la pregunta involucre percepcion, comparaciones cotidianas o normativas, calcular el nivel [[L]] a partir de [[I]] y [[I_0]].

5. **Verificar consistencia dimensional**: Intensidad debe resultar en W/m², nivel en dB. Potencia en vatios, distancia en metros. Convertir unidades antes de sustituir.

6. **Evaluar resultado**: Comparar con escalas de referencia. Intensidades mayores que 1 W/m² o menores que 10⁻¹⁵ W/m² son sospechosas y requieren revision.

## Casos especiales y ejemplo extendido

**Fuentes lineales**: Un trafico continuo en autopista se modela mejor como **fuente lineal** infinita que como puntual. La intensidad decae como 1/r en lugar de 1/r², porque la "superficie" de propagacion es un cilindro, no una esfera.

**Campo difuso en recintos**: En una habitacion muy reverberante (piedra, vidrio, concreto), la intensidad directa desde la fuente se suma a la intensidad reflejada. Cerca de la fuente domina el campo directo; lejos, el campo reverberante puede ser comparable o mayor.

**Interferencia de fuentes multiples**: Cuando dos fuentes emiten simultaneamente, las intensidades fisicas se suman (energia es escalar), pero los niveles en dB no se suman directamente. Dos fuentes identicas de 60 dB cada una producen 63 dB combinadas, no 120 dB.

> [!TIP]
> Para sumar niveles: convertir a intensidades, sumarlas, y convertir de vuelta a dB. Dos fuentes iguales suman +3 dB; diez fuentes iguales suman +10 dB.

**Caso limite - Campo proximo**: Justo junto a una fuente grande (ej: frente a un subwoofer de 1 m de diametro a 0.5 m), el modelo de fuente puntual subestima la intensidad real porque la fuente no es puntual y la onda aun no es esferica.

## Preguntas reales del alumno

**P: ¿Por que no usamos directamente la intensidad en W/m² en lugar de complicarnos con los decibelios?**

R: Porque la escala de intensidad lineal es muy incomoda. El rango audible va desde 10⁻¹² hasta 10² W/m², catorce ordenes de magnitud. Escribir "0.000000000001 W/m²" es impractico, y comparar mentalmente 10⁻⁸ con 10⁻⁵ es dificil. Los decibelios comprimen este rango enorme en numeros manejables (0 a 140 dB).

**P: Si un sonido de 60 dB es "conversacion normal", ¿dos personas conversando hacen 120 dB?**

R: No. Las intensidades fisicas se suman, no los decibelios. Dos fuentes iguales de 60 dB (que corresponden a I = 10⁻⁶ W/m² cada una) producen I_total = 2 × 10⁻⁶ W/m², que es aproximadamente 63 dB. Para obtener 120 dB necesitarias millones de personas hablando simultaneamente.

**P: ¿Por que el sonido se siente "mas bajo" al alejarse, pero no siento que decaiga a la cuarta parte cuando me alejo al doble?**

R: Porque tu percepcion es logaritmica, no lineal. Cuando la intensidad fisica cae a 1/4 (de I a I/4), el nivel en dB cae solo 6 dB (de L a L-6). Psicologicamente, 6 dB menos se percibe como "notablemente mas suave" pero no como "un cuarto de fuerte". El oido comprime el rango dinamico.

**P: ¿Es lo mismo intensidad que presion acustica?**

R: Estan relacionadas pero no son identicas. La intensidad es potencia por area (W/m²), proporcional al cuadrado de la presion acustica. En muchos contextos practicos se usan indistintamente, pero fisicamente son magnitudes distintas con unidades diferentes.

## Conexiones transversales y rutas de estudio

Este tema conecta directamente con [Naturaleza del sonido](leaf:fisica-clasica/ondas/sonido/naturaleza-del-sonido), donde se establecen las bases de ondas mecanicas longitudinales, y con [Velocidad del sonido](leaf:fisica-clasica/ondas/sonido/velocidad-del-sonido), que cuantifica la propagacion.

La conservacion de la potencia en la propagacion esferica es una aplicacion del principio de **conservacion de la energia**, estudiado en [Trabajo y energia mecanica](leaf:fisica-clasica/mecanica/trabajo-energia/trabajo-energia-cinetica-potencial).

La escala logaritmica en decibelios aparece en otros contextos fisicos: la escala de pH en quimica, la magnitud de Richter en sismologia, y la escala de magnitudes estelares en astronomia. En todos los casos, el logaritmo permite manejar rangos dinamicos enormes.

Para profundizar en la percepcion auditiva y psicoacustica, el siguiente paso natural es [Tono y timbre](leaf:fisica-clasica/ondas/sonido/tono-y-timbre).

## Sintesis final

La intensidad sonora y el nivel en decibelios describen dos caras de una misma realidad fisica: densidad objetiva de potencia y escala adaptada a la percepcion humana. La ley del inverso del cuadrado gobierna la atenuacion geometrica en campo libre; la respuesta logaritmica del oido convierte grandes variaciones energeticas en cambios moderados de dB.
`;export{e as default};
