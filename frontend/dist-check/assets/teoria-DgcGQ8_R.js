const e=`# Intensidad ondulatoria

## Contexto conceptual

Cuando una onda se propaga en tres dimensiones, su energía se reparte sobre superficies cada vez mayores. Esta dispersión geométrica explica por qué un sonido se atenúa al alejarnos de la fuente y por qué una misma potencia luminosa parece más débil cuando ilumina un área mayor.

La **intensidad ondulatoria** mide esa concentración energética: potencia transportada por unidad de área perpendicular a la propagación. El flujo de energía describe el transporte local; la intensidad [[I_intensidad]] resume cuánta potencia atraviesa una superficie de medida.

El concepto es central en acústica, óptica y seguridad radiométrica. Permite comparar susurros, altavoces, focos, láseres y límites de exposición con una misma idea física: energía entregada por segundo y por metro cuadrado.

## 🟢 Nivel esencial

Imagina una lámpara pequeña en el centro de una habitación oscura. La luz sale en todas direcciones. Cerca de la lámpara se concentra en poca superficie y parece brillante; lejos, la misma emisión se reparte sobre más pared y parece tenue.

La intensidad [[I_intensidad]] mide cuánta potencia de onda atraviesa cada metro cuadrado. Si te alejas al doble de distancia de una fuente sonora ideal, la intensidad no cae a la mitad, sino a una cuarta parte. La razón no es que la fuente emita menos, sino que la superficie esférica disponible crece mucho más rápido.

> [!TIP]
> Piensa en la intensidad como el brillo físico de la onda. Cerca de la fuente la energía está concentrada; lejos está dispersa. La energía total puede conservarse aunque cada metro cuadrado reciba menos.

## 🔵 Nivel formal

Para una fuente puntual que emite potencia [[P_potencia]] de manera isótropa en tres dimensiones, la intensidad a distancia [[r_distancia]] se obtiene dividiendo la potencia total entre el área de la esfera centrada en la fuente:

{{f:intensidad_desde_potencia}}

El área de reparto [[A_area]] se calcula con la geometría esférica:

{{f:area_esferica}}

Esta relación expresa la ley del inverso del cuadrado. Al duplicar la distancia, la superficie receptora se hace cuatro veces mayor y la misma potencia queda diluida en cuatro veces más área.

En acústica, la intensidad se relaciona con la presión sonora medible. Para ondas planas en un fluido de densidad [[rho]] y velocidad de propagación positiva, la intensidad depende del cuadrado de la amplitud de presión [[p_presion]]:

{{f:intensidad_desde_presion}}

La dependencia cuadrática es importante: duplicar la presión sonora cuadruplica la intensidad física. Por eso cambios moderados de presión pueden representar cambios energéticos grandes.

La escala de nivel sonoro en decibelios comprime el enorme rango de intensidades audibles mediante una escala logarítmica:

{{f:nivel_sonoro_dB}}

La referencia estándar corresponde aproximadamente al umbral de audición humana. Un aumento de [[beta_nivel]] de 10 dB multiplica la intensidad por 10, aunque la sensación subjetiva de sonoridad crece de forma más suave.

## 🔴 Nivel estructural

La ley del inverso del cuadrado describe solo la atenuación geométrica. En medios reales aparece además absorción: parte de la energía mecánica se transforma en calor por viscosidad, rozamiento interno o relajación molecular. Por eso dos distancias iguales pueden producir pérdidas distintas si cambia la humedad, la frecuencia o el material.

El modelo de fuente puntual funciona en campo lejano, cuando [[r_distancia]] es mucho mayor que el tamaño de la fuente. En campo cercano, la distribución espacial todavía depende de la geometría del emisor y la intensidad puede variar de forma irregular.

Las fuentes direccionales tampoco reparten la potencia por igual. Un altavoz de bocina, una antena o un láser concentran energía en ciertas direcciones. En esos casos importa el ángulo de emisión y la intensidad sobre el eje puede ser mucho mayor que la de una fuente isótropa con la misma potencia total.

En cavidades y salas, las reflexiones generan interferencias. La intensidad media puede cambiar mucho entre nodos, antinodos y zonas de sombra acústica. Por eso medir intensidad exige definir posición, orientación, frecuencia y condiciones del entorno.

## Interpretación física profunda

La intensidad como potencia por unidad de área une dos lecturas: cuánto puede entregar una onda a un receptor y cuán concentrado está su transporte energético. No describe solo amplitud; describe capacidad de transferir energía de manera medible.

La intensidad [[I_intensidad]] es positiva y escalar, mientras que el flujo energético conserva información direccional. Si solo interesa la potencia que cruza una superficie, basta la intensidad. Si interesa hacia dónde viaja la energía, conviene usar el flujo vectorial.

En sonido, la presión acústica cambia de signo durante las compresiones y rarefacciones, pero la intensidad media no cambia de signo por esa oscilación. Lo relevante es la energía asociada a la perturbación completa, no si en un instante la presión está por encima o por debajo de la presión atmosférica.

La escala en decibelios refleja que el oído humano opera sobre un rango enorme. Sin una escala logarítmica, comparar el umbral de audición con un concierto o un motor cercano exigiría manejar potencias por unidad de área separadas por muchos órdenes de magnitud.

## Orden de magnitud

El umbral de audición corresponde a una intensidad cercana a 10⁻¹² W/m². Una conversación normal ronda valores del orden de 10⁻⁶ W/m², el tráfico intenso puede situarse cerca de 10⁻⁴ W/m² y un concierto puede superar 10⁻² W/m². El umbral de dolor se aproxima a intensidades de orden 10 W/m².

En óptica, la irradiancia solar en la superficie terrestre es del orden de 10³ W/m² en condiciones favorables. Los láseres de investigación pueden alcanzar intensidades muchísimo mayores, hasta producir ionización del aire o daño material.

Para revisar un cálculo, comprueba si el resultado encaja con el fenómeno. Una intensidad acústica enorme implica presiones peligrosas; una intensidad luminosa extrema puede calentar, quemar o ionizar. El orden de magnitud debe tener sentido antes de aceptar el número.

## Método de resolución personalizado

Para resolver problemas de intensidad ondulatoria en tres dimensiones, conviene seguir una secuencia estable:

1. **Identificar la geometría de propagación**: esférica para fuente puntual, cilíndrica para fuente lineal, casi plana para fuente lejana o haz colimado.

2. **Determinar la potencia emitida**: usar [[P_potencia]] en vatios y comprobar si corresponde a potencia total, potencia útil o potencia emitida en una dirección concreta.

3. **Elegir el área de reparto**: en una fuente puntual isótropa, la superficie crece con el cuadrado de [[r_distancia]]. En fuentes direccionales, hay que considerar el ángulo sólido efectivo.

4. **Calcular la intensidad**: aplicar la relación formal adecuada y verificar que las unidades finales sean W/m².

5. **Convertir a decibelios si procede**: usar la relación logarítmica de [[beta_nivel]] cuando el problema esté formulado en nivel sonoro.

6. **Revisar pérdidas adicionales**: añadir absorción, reflexión o directividad si la distancia, el medio o la geometría lo exigen.

> [!WARNING]
> No confundas el área de una esfera con el área de un círculo. Ese error cambia el resultado por un factor grande y destruye la interpretación física.

## Casos especiales y ejemplo extendido

**Ondas cilíndricas**: una fuente lineal larga reparte energía sobre cilindros, no sobre esferas. La atenuación con la distancia es más lenta que en una fuente puntual, lo que ayuda a entender por qué el ruido de una autopista puede propagarse lejos.

**Fuentes direccionales**: un reflector parabólico o un altavoz de bocina concentra potencia en un intervalo angular. La intensidad sobre el eje principal puede superar mucho a la de una emisión uniforme con igual potencia total.

**Ejemplo extendido - concierto al aire libre**: un sistema de sonido emite gran potencia hacia el público. Cerca del escenario la intensidad puede estar en el rango de concierto; a varios cientos de metros disminuye por el reparto geométrico, pero puede seguir siendo relevante para normativas de ruido. El cálculo útil no pregunta solo "cuánta potencia hay", sino "sobre qué área y en qué dirección se reparte".

## Preguntas reales del alumno

**¿Por qué la intensidad disminuye con el cuadrado de la distancia y no linealmente?**

Porque la potencia total se reparte sobre una superficie esférica. Al duplicar la distancia, esa superficie se cuadruplica. La misma energía por segundo queda distribuida en más área, de modo que cada metro cuadrado recibe menos.

**¿Por qué usamos decibelios en lugar de medir siempre en W/m²?**

Porque el rango audible es enorme. La escala logarítmica transforma intensidades muy pequeñas y muy grandes en números manejables, y además se ajusta mejor a cómo percibimos cambios de sonoridad.

**¿Cómo se suman las intensidades de dos fuentes simultáneas?**

Primero se suman las intensidades físicas, no los decibelios. Después, si hace falta, se convierte el resultado total a nivel sonoro. Dos fuentes iguales no duplican el número de decibelios; producen un incremento moderado.

**¿Por qué la intensidad es siempre positiva si la presión acústica oscila entre positiva y negativa?**

Porque la intensidad media representa transporte de energía. Las compresiones y rarefacciones contribuyen a la energía de la onda aunque tengan signos opuestos en presión.

## Conexiones transversales y rutas de estudio

La intensidad ondulatoria continúa el estudio de [flujo de energía](leaf:fisica-clasica/ondas/energia-y-transporte/flujo-de-energia). La diferencia clave es geométrica: en una cuerda ideal el transporte puede tratarse como unidimensional; en ondas tridimensionales la energía se reparte sobre superficies crecientes.

En [ondas electromagnéticas](leaf:fisica-clasica/ondas/ondas-electromagneticas/naturaleza-de-las-ondas-em), la magnitud análoga suele llamarse irradiancia y también se mide en W/m². En mecánica, el razonamiento depende de la conservación de la energía y de la potencia emitida por la fuente.

Las aplicaciones incluyen acústica ambiental, diseño de salas, protección auditiva, iluminación, telecomunicaciones y seguridad con radiación. En todos esos casos, la pregunta práctica es cuánta energía llega a una superficie real y durante cuánto tiempo.

## Síntesis final

La intensidad ondulatoria cuantifica la concentración espacial del transporte energético. Mide potencia por unidad de área y permite comparar ondas sonoras, luminosas y electromagnéticas con una misma unidad física.

Su ley básica en una fuente puntual isótropa nace de la geometría: la misma potencia se reparte sobre superficies esféricas cada vez mayores. En situaciones reales hay que añadir directividad, absorción, reflexiones y condiciones de campo cercano.

Comprender esta magnitud exige separar intensidad física, nivel en decibelios y percepción. La intensidad dice cuánta energía llega; el nivel sonoro traduce esa intensidad a una escala práctica; la percepción humana añade una respuesta fisiológica que no es lineal.
`;export{e as default};
