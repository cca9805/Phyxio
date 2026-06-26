# Colisiones totalmente inelásticas

## Contexto conceptual

Una colisión totalmente inelástica es el caso extremo en el que los cuerpos **se unen tras el impacto y se mueven como un único objeto**. Es la colisión que pierde la máxima energía cinética posible sin violar la conservación del momento. En este modelo, el coeficiente de restitución es nulo.

Aunque parece un caso "sencillo" (una sola incógnita), es de enorme relevancia práctica: modela el proyectil que se incrusta en un bloque, los vagones que se enganchan, el meteorito que impacta un planeta y la captura de partículas en física nuclear.

## 🟢 Nivel esencial

La idea esencial no es la formula sino el resultado fisico: despues del impacto ya no existen dos movimientos independientes. Los cuerpos pasan a formar un solo conjunto y por eso comparten una sola velocidad final.

Esa velocidad comun no significa que el choque haya sido "suave". Significa que el sistema renuncia a conservar movimientos separados. La cantidad de movimiento total sigue fijando como avanza el conjunto, pero parte de la energia cinetica inicial [[Ki]] deja de verse como traslacion y se transforma en deformacion, calor o sonido.

Lo importante en este nivel es reconocer dos hechos simultaneos. Primero, el conjunto sigue moviendose porque el momento no desaparece. Segundo, el choque ya no devuelve a los cuerpos como objetos separados, de modo que el movimiento final es mas pobre que el inicial desde el punto de vista energetico.

Si un cuerpo ligero llega muy rapido contra otro mucho mas pesado, el conjunto final suele avanzar despacio. Si las masas son parecidas, la velocidad comun puede ser mas intermedia y la perdida de energia resulta especialmente visible. Esa es la intuicion que debe quedar clara antes de pasar a las expresiones matematicas.

> [!IMPORTANT]
> La velocidad final siempre está entre las velocidades iniciales de los dos cuerpos. Nunca puede ser mayor que la mayor ni menor que la menor de las velocidades iniciales.

## 🔵 Nivel formal

### Balance energético y disipación

La expresión fundamental del modelo es el balance de momento lineal:


que determina la velocidad final común [[vf]] del conjunto:

{{f:vf}}

A partir de este estado final, calculamos las magnitudes energéticas del leaf. La energía disponible antes del impacto es [[Ki]]:

{{f:Ki}}

La energía cinética que sobrevive como traslación del conjunto unido es [[Kf]]:

{{f:Kf}}

Y la cantidad de energía mecánica degradada se cuantifica mediante la variación [[DeltaK]]:

{{f:DeltaK}}

Dado que se trata de una colisión totalmente inelástica, [[DeltaK]] siempre es negativa (o cero en el caso trivial): la energía cinética final [[Kf]] es estrictamente menor que la inicial [[Ki]].

Para evaluar la severidad de la pérdida, solemos calcular la fracción de energía que se ha transformado en formas no mecánicas:

{{f:loss_fraction}}

Si el blanco está en reposo, esta fracción depende exclusivamente de la relación de masas. Si el blanco [[m2]] es mucho más pesado que el proyectil [[m1]], casi toda la energía se disipa. Si el proyectil es el dominante, la mayor parte de la energía se conserva como traslación del conjunto.

En el vocabulario del leaf, [[vf]] fija el movimiento compartido, [[Ki]] establece la escala de energía de partida, [[Kf]] identifica la parte útil que sobrevive y [[DeltaK]] junto a [[loss_fraction]] caracterizan la naturaleza disipativa del choque.

### Demostración de pérdida máxima

En el marco del centro de masas, la energía cinética antes de la colisión representa toda la energía "relativa" del sistema. Tras una colisión totalmente inelástica, ambos cuerpos están en reposo en el marco del CM, lo que significa que toda la energía relativa se ha disipado. Esto demuestra que la condición de cuerpos pegados corresponde a la máxima pérdida posible de energía mecánica.

### Caso vectorial 2D

En dos dimensiones, el principio sigue siendo el mismo: el vector de momento lineal total se conserva. La velocidad final común [[vf]] es la media ponderada por masa de las velocidades iniciales vectoriales. La dirección del conjunto tras el impacto no coincidirá, en general, con ninguna de las trayectorias originales, sino que seguirá la línea del momento neto del sistema.

{{f:p_balance}}

## 🔴 Nivel estructural

### Posición en el espectro de colisiones

La colisión totalmente inelástica es el extremo inferior del espectro según el coeficiente de restitución:
- **Elástica**: Conservada totalmente.
- **Inelástica**: Parcialmente disipada.
- **Totalmente inelástica**: Máxima disipación permitida por el balance de momento.
- **Superelástica**: Aumento de energía cinética (explosión o liberación interna).

### Irreversibilidad máxima

Al disipar toda la energía relativa, la colisión totalmente inelástica produce la máxima generación de entropía. Los cuerpos, tras unirse, no tienen forma de separarse espontáneamente (habría que inyectar energía). Esto convierte a la colisión totalmente inelástica en un proceso fundamentalmente unidireccional.

### Conexión con física de partículas

En física de altas energías, la captura de una partícula por otra (formación de un estado compuesto) es una colisión totalmente inelástica relativista. La masa invariante del producto es mayor que la suma de las masas de los reactivos, porque la energía cinética disipada se ha convertido en masa (equivalencia masa-energía). Ejemplo: formación del bosón Z en LEP.

### Energía mínima conservada

La energía cinética que sobrevive es la del movimiento del centro de masas. Esta cantidad es "indestructible" mediante fuerzas internas: solo una fuerza externa neta puede alterar el movimiento global del sistema. En el choque totalmente inelástico, nos quedamos exactamente con este mínimo energético.

## Interpretación física profunda

En la colisión totalmente inelástica, toda la energía cinética que podía perderse se pierde efectivamente. Es el "peor escenario" en términos de conservación de energía mecánica, pero el más simple en términos algebraicos: una sola ecuación de momento da la respuesta. Paradójicamente, el caso más destructivo es el más fácil de resolver.

El fenómeno ilustra una verdad profunda: la conservación del momento es más robusta que la conservación de la energía cinética. El momento es inmune a las fuerzas internas; la energía cinética no.

La lectura causal ayuda a no mecanizar fórmulas. Si aumenta la masa total [[m1]] + [[m2]] manteniendo fijo el momento inicial, [[vf]] disminuye porque el mismo impulso neto debe arrastrar un conjunto más pesado. Si aumenta la diferencia entre [[v1i]] y [[v2i]], [[Ki]] crece y también lo hace la magnitud de [[DeltaK]], porque el choque debe eliminar más energía relativa para forzar una salida común.


## Orden de magnitud

Un péndulo balístico captura un proyectil de unos 10 g a 400 m/s en un bloque de unos 2 kg. La fracción de energía cinética conservada es de aproximadamente el 0.5 por ciento. En astrofísica, la acreción de materia por una estrella de neutrones es esencialmente totalmente inelástica, transformando energía cinética en radiación X con luminosidades de hasta 10 a la 37 Vatios.


## Método de resolución personalizado

1. **Confirmar** que los cuerpos se unen tras el impacto.
2. **Plantear** el balance de momento lineal:


3. **Calcular** la velocidad final común [[vf]] despejándola de la expresión anterior.
4. **Si se pide la energía perdida**: determinar [[Ki]] y [[Kf]] para hallar la variación [[DeltaK]].
5. **Si se pide altura** (péndulo balístico): igualar la energía cinética final [[Kf]] con la energía potencial gravitatoria en el punto más alto.

## Casos especiales y ejemplo extendido

**Péndulo balístico.** Una bala se incrusta en un bloque suspendido. Al quedar pegados, el conjunto adquiere una velocidad [[vf]] que transforma íntegramente su energía [[Kf]] en energía potencial, permitiendo calcular la velocidad inicial [[v1i]] del proyectil a partir de la altura alcanzada.

**Colisión 2D.** Si los cuerpos chocan con trayectorias oblicuas, el momento lineal se conserva como vector. El conjunto resultante seguirá la dirección del momento total inicial, promediando las velocidades originales según sus respectivas masas [[m1]] y [[m2]].

## Preguntas reales del alumno

- **¿Una colisión totalmente inelástica siempre es la que pierde más energía?** Sí, para una masa y momento dados. Es el límite inferior para la energía cinética final del sistema.
- **¿Puede un cuerpo absorber a otro sin deformarse?** En principio sí (un saco de arena atrapando un proyectil), pero siempre hay disipación interna.
- **¿Se puede usar la fórmula elástica con un coeficiente de restitución nulo?** Sí: las fórmulas generales que incluyen el coeficiente de restitución devuelven velocidades iguales para ambos cuerpos cuando el coeficiente es cero, que es precisamente la condición de colisión totalmente inelástica.

## Conexiones transversales y rutas de estudio

- **Contraste**: [Colisiones elásticas](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-elasticas) y [colisiones inelásticas](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/colisiones-inelasticas).
- **Cuantificación**: [Coeficiente de restitución](leaf:fisica-clasica/mecanica/cantidad-de-movimiento/colisiones/coeficiente-de-restitucion) (caso de valor nulo).
- **Aplicación clásica**: péndulo balístico (determinación de velocidad de proyectiles).



La colisión totalmente inelástica representa el extremo de máxima pérdida de energía cinética compatible con la conservación del momento. La fracción retenida muestra que la pérdida es máxima cuando las masas son iguales y mínima cuando el proyectil es dominante. El péndulo balístico explota este principio para medir velocidades de proyectiles: toda la complejidad de la interacción queda encapsulada en la condición de que ambos cuerpos salen juntos.

## Síntesis final

La colisión totalmente inelástica une los cuerpos en un solo objeto, perdiendo la máxima energía cinética compatible con la conservación del momento. Su resolución es algebraicamente la más simple (una ecuación, una incógnita) y tiene aplicaciones directas en balística, ingeniería de impactos y física de partículas.



