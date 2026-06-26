const e=`\uFEFF# Colisiones totalmente inelásticas\r
\r
## Contexto conceptual\r
\r
Una colisión totalmente inelástica es el caso extremo en el que los cuerpos **se unen tras el impacto y se mueven como un único objeto**. Es la colisión que pierde la máxima energía cinética posible sin violar la conservación del momento. En este modelo, el coeficiente de restitución es nulo.\r
\r
Aunque parece un caso "sencillo" (una sola incógnita), es de enorme relevancia práctica: modela el proyectil que se incrusta en un bloque, los vagones que se enganchan, el meteorito que impacta un planeta y la captura de partículas en física nuclear.\r
\r
## 🟢 Nivel esencial\r
\r
La idea esencial no es la formula sino el resultado fisico: despues del impacto ya no existen dos movimientos independientes. Los cuerpos pasan a formar un solo conjunto y por eso comparten una sola velocidad final.\r
\r
Esa velocidad comun no significa que el choque haya sido "suave". Significa que el sistema renuncia a conservar movimientos separados. La cantidad de movimiento total sigue fijando como avanza el conjunto, pero parte de la energia cinetica inicial [[Ki]] deja de verse como traslacion y se transforma en deformacion, calor o sonido.\r
\r
Lo importante en este nivel es reconocer dos hechos simultaneos. Primero, el conjunto sigue moviendose porque el momento no desaparece. Segundo, el choque ya no devuelve a los cuerpos como objetos separados, de modo que el movimiento final es mas pobre que el inicial desde el punto de vista energetico.\r
\r
Si un cuerpo ligero llega muy rapido contra otro mucho mas pesado, el conjunto final suele avanzar despacio. Si las masas son parecidas, la velocidad comun puede ser mas intermedia y la perdida de energia resulta especialmente visible. Esa es la intuicion que debe quedar clara antes de pasar a las expresiones matematicas.\r
\r
> [!IMPORTANT]\r
> La velocidad final siempre está entre las velocidades iniciales de los dos cuerpos. Nunca puede ser mayor que la mayor ni menor que la menor de las velocidades iniciales.\r
\r
## 🔵 Nivel formal\r
\r
### Balance energético y disipación\r
\r
La expresión fundamental del modelo es el balance de momento lineal:\r
\r
\r
que determina la velocidad final común [[vf]] del conjunto:\r
\r
{{f:vf}}\r
\r
A partir de este estado final, calculamos las magnitudes energéticas del leaf. La energía disponible antes del impacto es [[Ki]]:\r
\r
{{f:Ki}}\r
\r
La energía cinética que sobrevive como traslación del conjunto unido es [[Kf]]:\r
\r
{{f:Kf}}\r
\r
Y la cantidad de energía mecánica degradada se cuantifica mediante la variación [[DeltaK]]:\r
\r
{{f:DeltaK}}\r
\r
Dado que se trata de una colisión totalmente inelástica, [[DeltaK]] siempre es negativa (o cero en el caso trivial): la energía cinética final [[Kf]] es estrictamente menor que la inicial [[Ki]].\r
\r
Para evaluar la severidad de la pérdida, solemos calcular la fracción de energía que se ha transformado en formas no mecánicas:\r
\r
{{f:loss_fraction}}\r
\r
Si el blanco está en reposo, esta fracción depende exclusivamente de la relación de masas. Si el blanco [[m2]] es mucho más pesado que el proyectil [[m1]], casi toda la energía se disipa. Si el proyectil es el dominante, la mayor parte de la energía se conserva como traslación del conjunto.\r
\r
En el vocabulario del leaf, [[vf]] fija el movimiento compartido, [[Ki]] establece la escala de energía de partida, [[Kf]] identifica la parte útil que sobrevive y [[DeltaK]] junto a [[loss_fraction]] caracterizan la naturaleza disipativa del choque.\r
\r
### Demostración de pérdida máxima\r
\r
En el marco del centro de masas, la energía cinética antes de la colisión representa toda la energía "relativa" del sistema. Tras una colisión totalmente inelástica, ambos cuerpos están en reposo en el marco del CM, lo que significa que toda la energía relativa se ha disipado. Esto demuestra que la condición de cuerpos pegados corresponde a la máxima pérdida posible de energía mecánica.\r
\r
### Caso vectorial 2D\r
\r
En dos dimensiones, el principio sigue siendo el mismo: el vector de momento lineal total se conserva. La velocidad final común [[vf]] es la media ponderada por masa de las velocidades iniciales vectoriales. La dirección del conjunto tras el impacto no coincidirá, en general, con ninguna de las trayectorias originales, sino que seguirá la línea del momento neto del sistema.\r
\r
{{f:p_balance}}\r
\r
## 🔴 Nivel estructural\r
\r
### Posición en el espectro de colisiones\r
\r
La colisión totalmente inelástica es el extremo inferior del espectro según el coeficiente de restitución:\r
- **Elástica**: Conservada totalmente.\r
- **Inelástica**: Parcialmente disipada.\r
- **Totalmente inelástica**: Máxima disipación permitida por el balance de momento.\r
- **Superelástica**: Aumento de energía cinética (explosión o liberación interna).\r
\r
### Irreversibilidad máxima\r
\r
Al disipar toda la energía relativa, la colisión totalmente inelástica produce la máxima generación de entropía. Los cuerpos, tras unirse, no tienen forma de separarse espontáneamente (habría que inyectar energía). Esto convierte a la colisión totalmente inelástica en un proceso fundamentalmente unidireccional.\r
\r
### Conexión con física de partículas\r
\r
En física de altas energías, la captura de una partícula por otra (formación de un estado compuesto) es una colisión totalmente inelástica relativista. La masa invariante del producto es mayor que la suma de las masas de los reactivos, porque la energía cinética disipada se ha convertido en masa (equivalencia masa-energía). Ejemplo: formación del bosón Z en LEP.\r
\r
### Energía mínima conservada\r
\r
La energía cinética que sobrevive es la del movimiento del centro de masas. Esta cantidad es "indestructible" mediante fuerzas internas: solo una fuerza externa neta puede alterar el movimiento global del sistema. En el choque totalmente inelástico, nos quedamos exactamente con este mínimo energético.\r
\r
## Interpretación física profunda\r
\r
En la colisión totalmente inelástica, toda la energía cinética que podía perderse se pierde efectivamente. Es el "peor escenario" en términos de conservación de energía mecánica, pero el más simple en términos algebraicos: una sola ecuación de momento da la respuesta. Paradójicamente, el caso más destructivo es el más fácil de resolver.\r
\r
El fenómeno ilustra una verdad profunda: la conservación del momento es más robusta que la conservación de la energía cinética. El momento es inmune a las fuerzas internas; la energía cinética no.\r
\r
La lectura causal ayuda a no mecanizar fórmulas. Si aumenta la masa total [[m1]] + [[m2]] manteniendo fijo el momento inicial, [[vf]] disminuye porque el mismo impulso neto debe arrastrar un conjunto más pesado. Si aumenta la diferencia entre [[v1i]] y [[v2i]], [[Ki]] crece y también lo hace la magnitud de [[DeltaK]], porque el choque debe eliminar más energía relativa para forzar una salida común.\r
\r
\r
## Orden de magnitud\r
\r
Un péndulo balístico captura un proyectil de unos 10 g a 400 m/s en un bloque de unos 2 kg. La fracción de energía cinética conservada es de aproximadamente el 0.5 por ciento. En astrofísica, la acreción de materia por una estrella de neutrones es esencialmente totalmente inelástica, transformando energía cinética en radiación X con luminosidades de hasta 10 a la 37 Vatios.\r
\r
\r
## Método de resolución personalizado\r
\r
1. **Confirmar** que los cuerpos se unen tras el impacto.\r
2. **Plantear** el balance de momento lineal:\r
\r
\r
3. **Calcular** la velocidad final común [[vf]] despejándola de la expresión anterior.\r
4. **Si se pide la energía perdida**: determinar [[Ki]] y [[Kf]] para hallar la variación [[DeltaK]].\r
5. **Si se pide altura** (péndulo balístico): igualar la energía cinética final [[Kf]] con la energía potencial gravitatoria en el punto más alto.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Péndulo balístico.** Una bala se incrusta en un bloque suspendido. Al quedar pegados, el conjunto adquiere una velocidad [[vf]] que transforma íntegramente su energía [[Kf]] en energía potencial, permitiendo calcular la velocidad inicial [[v1i]] del proyectil a partir de la altura alcanzada.\r
\r
**Colisión 2D.** Si los cuerpos chocan con trayectorias oblicuas, el momento lineal se conserva como vector. El conjunto resultante seguirá la dirección del momento total inicial, promediando las velocidades originales según sus respectivas masas [[m1]] y [[m2]].\r
\r
## Preguntas reales del alumno\r
\r
- **¿Una colisión totalmente inelástica siempre es la que pierde más energía?** Sí, para una masa y momento dados. Es el límite inferior para la energía cinética final del sistema.\r
- **¿Puede un cuerpo absorber a otro sin deformarse?** En principio sí (un saco de arena atrapando un proyectil), pero siempre hay disipación interna.\r
- **¿Se puede usar la fórmula elástica con un coeficiente de restitución nulo?** Sí: las fórmulas generales que incluyen el coeficiente de restitución devuelven velocidades iguales para ambos cuerpos cuando el coeficiente es cero, que es precisamente la condición de colisión totalmente inelástica.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
- **Contraste**: [Colisiones elásticas](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-elasticas) y [colisiones inelásticas](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-inelasticas).\r
- **Cuantificación**: [Coeficiente de restitución](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/coeficiente-de-restitucion) (caso de valor nulo).\r
- **Aplicación clásica**: péndulo balístico (determinación de velocidad de proyectiles).\r
\r
\r
\r
La colisión totalmente inelástica representa el extremo de máxima pérdida de energía cinética compatible con la conservación del momento. La fracción retenida muestra que la pérdida es máxima cuando las masas son iguales y mínima cuando el proyectil es dominante. El péndulo balístico explota este principio para medir velocidades de proyectiles: toda la complejidad de la interacción queda encapsulada en la condición de que ambos cuerpos salen juntos.\r
\r
## Síntesis final\r
\r
La colisión totalmente inelástica une los cuerpos en un solo objeto, perdiendo la máxima energía cinética compatible con la conservación del momento. Su resolución es algebraicamente la más simple (una ecuación, una incógnita) y tiene aplicaciones directas en balística, ingeniería de impactos y física de partículas.\r
\r
\r
\r
`;export{e as default};
