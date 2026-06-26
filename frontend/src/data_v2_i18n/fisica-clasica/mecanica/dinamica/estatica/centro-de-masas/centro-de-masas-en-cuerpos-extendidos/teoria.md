# Centro de masas en cuerpos extendidos

## Contexto conceptual

En un sistema discreto se puede sumar partícula por partícula. En un cuerpo extendido esa descripción deja de ser práctica: una varilla, una lámina o un sólido contienen masa repartida sobre una longitud [[L]], un área [[A]] o un volumen [[V]]. Este leaf responde a la pregunta operativa: cómo localizar el centro de masas cuando la distribución ya no se enumera, sino que se integra.

La diferencia clave con la definición general es el paso de "muchas masas puntuales" a una masa continua descrita mediante [[dm]]. Ese elemento diferencial contiene la información física de la distribución. Si la densidad se acumula hacia un extremo, [[xcm]] se desplaza hacia ese lado; si la geometría es simétrica y la densidad uniforme, el centro de masas coincide con el centro geométrico.

## 🟢 Nivel esencial

La intuición correcta es pensar en equilibrio de peso distribuido. Una regla uniforme se sostiene por la mitad porque cada pequeño trozo de masa tiene otro trozo equivalente al lado opuesto. Una regla con material añadido en un extremo ya no se sostiene en el punto medio: el centro de masas se mueve hacia la zona con más masa.

En cuerpos extendidos no basta decir "el objeto mide tanto". La longitud [[L]] solo fija el dominio geométrico; la masa puede estar repartida de forma uniforme o concentrarse gradualmente. Por eso [[dm]] es la pieza conceptual central: representa una porción pequeña de masa situada en una posición concreta. El centro de masas no promedia longitudes, promedia posiciones ponderadas por masa.

Este enfoque permite leer tres familias de objetos. Una varilla se describe con densidad lineal, una lámina con densidad superficial y un sólido con densidad volumétrica. En cada caso se conserva la misma idea: dividir el cuerpo en elementos pequeños, pesar cada posición por la masa que contiene y normalizar por la masa total [[M]].

## 🔵 Nivel formal

La forma vectorial resume el concepto completo para cualquier cuerpo integrable. La posición [[R_cm]] se obtiene comparando el primer momento de masa [[I_cm]] con la masa total [[M]]:

{{f:cm_vectorial}}

Cuando el problema es unidimensional o solo se pide la componente horizontal, se trabaja con [[xcm]] y el primer momento respecto al eje x, [[I_x]]. Esta relación es la herramienta natural para varillas no uniformes, perfiles lineales y distribuciones descritas por una densidad que depende de [[x]]:

{{f:cm_x}}

Las relaciones de masa uniforme indican qué hipótesis geométrica se está usando. Para un sólido homogéneo, la densidad volumétrica [[rho]] convierte volumen en masa:

{{f:masa_volumen}}

Para una lámina delgada homogénea, la densidad superficial [[sigma]] convierte área en masa:

{{f:masa_area}}

Para una varilla o alambre homogéneo, la densidad lineal [[lambda]] convierte longitud en masa:

{{f:masa_longitud}}

En problemas no uniformes estas últimas relaciones no se sustituyen mecánicamente. Sirven como caso límite y como contraste: si [[lambda]], [[sigma]] o [[rho]] cambian con la posición, la masa total y el primer momento deben obtenerse integrando [[dm]] sobre el dominio correcto.

La decisión formal importante es no mezclar modelos: una varilla se integra con longitud, una lámina con área y un sólido con volumen. Cambiar de una descripción a otra solo es legítimo si la geometría física también cambia o si se está usando una aproximación justificada por espesor despreciable.

## 🔴 Nivel estructural

La estructura del leaf depende de tres decisiones: elegir el dominio de integración, escoger la densidad adecuada y mantener el origen coherente. Si el cuerpo es una varilla, integrar sobre [[x]] suele ser suficiente. Si es una lámina, hay que decidir si conviene integrar por franjas, por simetría o por coordenadas polares. Si es un sólido, el volumen elemental debe representar realmente la geometría.

La condición [[M]] > 0 no es un detalle algebraico: si la masa total es nula o si la integral no converge, el cociente que define el centro de masas pierde significado físico. También importa el rango geométrico. Para una varilla que ocupa de 0 a [[L]], un resultado de [[xcm]] fuera de ese intervalo revela un error de signo, de límites o de densidad.

El modelo falla cuando el cuerpo se deforma durante el proceso, cuando la densidad cambia con el tiempo o cuando se usa una densidad uniforme en un sistema con gradientes relevantes. En esos casos hay que pasar a un modelo extendido: densidad variable, geometría deformable o integración por partes del cuerpo.

## Interpretación física profunda

El centro de masas de un cuerpo extendido no señala necesariamente un punto material. En una lámina con hueco o en un aro, puede caer en una región donde no hay materia. Lo que representa es el punto donde se concentra la respuesta traslacional global ante fuerzas externas, siempre que el modelo rígido sea aceptable.

La integral da más peso a las zonas con más masa y a las zonas más alejadas del origen elegido. Por eso el primer momento [[I_x]] no mide masa total, sino masa multiplicada por brazo espacial. Dos cuerpos pueden tener la misma [[M]] y distinta [[xcm]] si distribuyen esa masa de forma diferente.

Cambiar el origen cambia las coordenadas del centro de masas, pero no cambia el punto físico del cuerpo. Por eso el cálculo debe terminar con una lectura geométrica: dónde cae el resultado respecto al objeto y si se desplaza hacia la zona donde la densidad o el área efectiva son mayores.

## Orden de magnitud

En una varilla de laboratorio de longitud [[L]] = 1 m, un [[xcm]] razonable debe estar entre 0 m y 1 m si el origen está en un extremo. Para una densidad casi uniforme, el valor debe aproximarse a [[L]]/2. Si la densidad aumenta hacia la derecha, el resultado debe ser mayor que [[L]]/2; si aumenta hacia la izquierda, menor.

En láminas delgadas, las coordenadas del centro de masas suelen estar dentro de la envolvente geométrica cuando no hay huecos dominantes. En sólidos compactos, [[R_cm]] debe tener escala comparable al tamaño del cuerpo, no a la masa ni al volumen. Un resultado en kg, kg m o m² indica que se ha confundido [[I_cm]], [[M]] o la coordenada final.

## Método de resolución personalizado

1. Define el origen, los ejes y el intervalo geométrico antes de escribir integrales.
2. Decide si el cuerpo se modela como línea, superficie o volumen.
3. Escribe [[dm]] con la densidad adecuada: lineal, superficial o volumétrica.
4. Calcula primero [[M]] y después el primer momento [[I_cm]] o [[I_x]].
5. Divide el primer momento por la masa total y valida rango, unidades y sesgo físico.

Este orden evita el error habitual de calcular una integral de posición sin masa asociada. La integral de centro de masas no promedia puntos geométricos vacíos; promedia posiciones que contienen masa.

## Casos especiales y ejemplo extendido

En una varilla uniforme, la relación lineal de masa reproduce el caso familiar: la masa crece proporcionalmente con [[L]] y el centro de masas queda en la mitad. En una varilla con [[lambda]] creciente, el cálculo debe integrar porque cada tramo aporta una cantidad distinta de masa.

En una lámina simétrica de densidad uniforme, la simetría puede sustituir parte del cálculo. Si hay un hueco, puede tratarse como superposición: lámina completa menos la región retirada. En un sólido compuesto, se puede dividir en piezas con centros de masas conocidos y luego aplicar la definición ponderada.

## Preguntas reales del alumno

**¿Por qué no basta usar el centro geométrico?**  
Porque el centro geométrico solo depende de la forma. El centro de masas depende de forma y distribución de masa.

**¿Cuándo uso densidad lineal, superficial o volumétrica?**  
Usa densidad lineal para varillas o alambres, superficial para láminas delgadas y volumétrica para sólidos donde el espesor importa.

**¿Qué significa [[dm]]?**  
Es una porción diferencial de masa. Su forma depende del modelo: puede ser [[lambda]] d[[x]], [[sigma]] d[[A]] o [[rho]] d[[V]].

**¿Por qué el centro puede estar fuera del material?**  
Porque representa una posición promedio ponderada, no necesariamente un punto ocupado por materia.

## Conexiones transversales y rutas de estudio

Este leaf conecta con centro de masas discreto, momentos de inercia, equilibrio estático y dinámica de cuerpos rígidos. La idea de primer momento también reaparece en centroides geométricos, presión hidrostática y cálculo de torques distribuidos.

Antes de estudiar rotación conviene dominar este cálculo, porque el mismo razonamiento de dividir el cuerpo en elementos diferenciales aparece en momento de inercia. Después, el centro de masas permite separar traslación global y rotación alrededor del propio cuerpo.

## Síntesis final

El centro de masas en cuerpos extendidos es una herramienta para convertir una distribución continua de masa en una posición física global. Su núcleo no es la fórmula aislada, sino la elección correcta de [[dm]], del dominio y de la densidad. Cuando el resultado respeta unidades, rango geométrico y sesgo hacia las zonas más masivas, la integral no solo calcula: también explica cómo está organizado el cuerpo.
