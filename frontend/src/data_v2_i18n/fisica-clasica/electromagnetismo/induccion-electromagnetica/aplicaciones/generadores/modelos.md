## Modelo ideal

El modelo ideal de generador considera una bobina rígida de [[numero_de_espiras]] espiras que gira con [[omega]] constante en un campo [[campo_magnetico]] uniforme. La geometría efectiva se resume en [[area_de_la_espira]], y el resultado eléctrico principal es una [[epsilon_0]] sinusoidal. Se conserva la relación entre trabajo mecánico, cambio de [[flujo_magnetico_maximo_enlazado]] y fem inducida, pero se ignoran resistencia interna, rozamiento, saturación magnética y calentamiento.

La simplificación central consiste en tratar el enlace de flujo como limpio y repetible en cada vuelta. Esto permite separar el diseño geométrico de la entrega energética. El modelo sirve para predecir escala de tensión, no para certificar potencia real disponible bajo cualquier carga.

## Hipótesis

- Campo magnético aproximadamente uniforme: si se viola, [[campo_magnetico]] deja de representar el campo que atraviesa toda la bobina.
- Giro estable: si [[omega]] fluctúa mucho, la señal deja de tener una amplitud y frecuencia bien definidas.
- Área efectiva fija: si la bobina se deforma, [[area_de_la_espira]] cambia y el flujo enlazado no es constante de una vuelta a otra.
- Pérdidas despreciables en la estimación de fem: si hay calentamiento o rozamiento significativo, [[potencia_electrica_util]] queda por debajo de la salida ideal.
- Carga externa compatible: si la carga exige demasiada corriente, la tensión terminal cae y el modelo de fem aislada no basta.

## Dominio de validez cuantitativo

El modelo ideal es razonable cuando las variaciones de velocidad son menores del 5 %, las pérdidas internas son inferiores al 10 % de [[potencia_mecanica_de_entrada]] y el campo se mantiene lejos de saturación. En bobinas educativas, suele funcionar con [[campo_magnetico]] entre 0.01 T y 0.5 T, [[omega]] por debajo de 500 rad/s y áreas menores que 0.1 m².

Como orden de magnitud, una bobina de laboratorio que produzca decenas de voltios puede describirse bien con este modelo si la carga no fuerza corrientes grandes. Para potencias industriales, el modelo ideal solo es una primera lectura: hay que incluir resistencia de devanados, reactancia, regulación y refrigeración.

## Señales de fallo del modelo

Una señal clara de fallo es que duplicar [[omega]] no aumente aproximadamente la amplitud observada de la tensión. Otra es que [[epsilon_0]] predicha sea alta, pero la tensión en bornes caiga de forma marcada al conectar una carga moderada. En ese caso el problema ya no está solo en la inducción, sino en la impedancia interna y en las pérdidas.

También falla si la curva deja de ser periódica estable, si aparece recorte por saturación del núcleo o si el par requerido aumenta de forma desproporcionada respecto a la potencia entregada. Esas señales indican que el generador real está operando fuera de la hipótesis lineal.

## Modelo extendido o alternativo

El modelo extendido añade resistencia interna, pérdidas mecánicas, pérdidas magnéticas y acoplamiento con la carga. En vez de tratar [[eta]] como dato externo, puede estimarse a partir de calentamiento, rozamiento y eficiencia del circuito magnético. Así se distingue fem interna de tensión útil en bornes.

Cuando conviene pasar al modelo extendido: si el problema pide potencia bajo carga, regulación de tensión, calentamiento o comparación de diseños reales. Cambiar a este modelo también es necesario cuando se trabaja con alternadores trifásicos, núcleos saturables o velocidades variables.

## Comparación operativa

| Criterio | Modelo ideal | Modelo extendido |
|---|---|---|
| Objetivo | Escala de [[epsilon_0]] y lectura de inducción | Salida real, pérdidas y comportamiento bajo carga |
| Complejidad | Baja, con pocas magnitudes | Media o alta, con parámetros eléctricos y mecánicos |
| Precisión | Buena para estimaciones de aula | Necesaria para diseño técnico |
| Límite principal | Ignora caída terminal y pérdidas | Requiere datos que no siempre están disponibles |