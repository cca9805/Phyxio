# Aplicaciones

## 1. Diseño de mecanismos rotacionales

Variable dominante: [[tau]]

Límite de validez: eje fijo, cuerpo rígido y momento de inercia aproximadamente constante.

En ingeniería mecánica, motores, ejes, embragues y engranajes se analizan con una lectura análoga a la de la dinámica lineal. En traslación se pregunta qué fuerza neta produce una aceleración; en rotación se pregunta qué torque neto produce una aceleración angular. La correspondencia

{{f:correspondencia_lineal_angular}}

permite reutilizar la intuición: una causa dinámica vence una resistencia y genera una respuesta.

La utilidad práctica está en dimensionar el torque necesario para arrancar una pieza giratoria. Si [[I]] es grande, el mecanismo necesita más [[tau]] para alcanzar la misma [[alpha]]. El límite aparece cuando la pieza no se comporta como rígida, el eje cambia o hay holguras: entonces no basta con copiar el esquema lineal.

En un arranque industrial, esta lectura evita sobredimensionar o infradimensionar actuadores. Un motor no se elige solo por potencia final, sino por el torque que puede entregar durante la fase de aceleración angular.

## 2. Ruedas y vehículos

Variable dominante: [[I]]

Límite de validez: rodadura sin deslizamiento y geometría de la rueda estable.

Un vehículo combina movimiento del centro de masa y rotación de las ruedas. La parte lineal usa

{{f:segunda_ley_newton}}

, mientras que cada rueda requiere el análisis rotacional mediante

{{f:segunda_ley_rotacional}}

. La analogía ayuda a ver que una rueda no solo "acompaña" al coche: también almacena energía rotacional y opone resistencia a cambiar su giro.

Dos ruedas con la misma masa pueden producir aceleraciones distintas si su masa está distribuida de forma diferente. Una rueda con más masa en el borde tiene mayor [[I]] y exige más torque para obtener la misma [[alpha]]. Por eso en bicicletas, vehículos eléctricos y maquinaria móvil importa tanto el diseño de la llanta como la masa total.

La aplicación también sirve para entender por qué aligerar una rueda en el borde puede notarse más que aligerar una pieza cercana al eje. La analogía traduce esa observación a una frase operativa: reducir [[I]] reduce la resistencia angular.

## 3. Llaves, palancas y herramientas

Variable dominante: [[tau]]

Límite de validez: fuerza aplicada de forma aproximadamente perpendicular al brazo de palanca.

Una llave inglesa muestra el límite más visual de la analogía. En traslación, aplicar una fuerza de 20 N sigue siendo aplicar 20 N. En rotación, el efecto depende además de la distancia al eje y de la orientación (torque). La misma [[F]] puede producir un torque pequeño cerca del eje o un torque grande lejos de él.

Esta aplicación enseña que [[tau]] no es "la fuerza angular". Es una magnitud que incorpora fuerza, punto de aplicación y eje. La analogía con [[F]] es útil para resolver, pero la interpretación física cambia.

Por eso una herramienta larga permite aflojar una tuerca sin aumentar la fuerza muscular. No cambia la fuerza aplicada por la mano, cambia el torque resultante respecto al eje de la tuerca.

## 4. Poleas, discos y distribución de masa

Variable dominante: [[I]]

Límite de validez: distribución de masa conocida y eje de giro definido.

En poleas y discos reales, el comportamiento rotacional depende de cómo está repartida la masa. Una polea maciza y una polea con masa concentrada en el borde pueden tener la misma [[m]], pero no el mismo [[I]]. Si reciben el mismo [[tau]], la que tenga mayor [[I]] tendrá menor [[alpha]].

Esta situación es central en máquinas con cables, ascensores, cintas transportadoras y sistemas de transmisión. El ingeniero no puede sustituir simplemente [[m]] por [[I]] sin calcular el eje y la geometría. La analogía ofrece el esqueleto del razonamiento, pero el contenido físico lo aporta el momento de inercia.

También explica decisiones de diseño: una polea puede hacerse ligera en la periferia para responder rápido, o más masiva para suavizar variaciones de giro. En ambos casos la variable decisiva no es solo [[m]], sino [[I]].

## 5. Aprendizaje y transferencia de métodos

Variable dominante: [[alpha]]

Límite de validez: el alumno identifica antes el eje, el torque neto y el momento de inercia correcto.

En resolución de problemas, la analogía lineal-angular es una herramienta cognitiva. Un estudiante que domina la estructura de

{{f:segunda_ley_newton}}

 sabe identificar, mediante la

{{f:correspondencia_lineal_angular}}

, qué hace el papel de resistencia y qué respuesta se busca. Ese traslado reduce carga mental y permite organizar datos, ecuaciones y unidades.

El riesgo didáctico es memorizar una tabla sin interpretar. Si se escribe [[F]] → [[tau]] y [[m]] → [[I]] como si fueran etiquetas intercambiables, se pierde la diferencia esencial: en rotación el eje y la geometría forman parte del modelo. La aplicación correcta consiste en transferir la estructura, no los significados.

En clase, esta transferencia permite detectar errores antes de calcular. Si un ejercicio rotacional no ha definido eje, brazo de palanca o [[I]], todavía no está preparado para usar la ecuación rotacional.

## Síntesis

Estas aplicaciones muestran que la analogía lineal-angular sirve para diseñar, estimar, comparar y aprender. Su potencia está en reconocer patrones comunes entre traslación y rotación; su límite está en recordar que el giro introduce eje, brazo de palanca y distribución espacial de masa.

La regla práctica es simple: usa la analogía para construir el problema, pero verifica después si las magnitudes rotacionales están definidas físicamente. Cuando esa verificación falla, el modelo debe ampliarse.