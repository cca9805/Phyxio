const a=`# Ejemplo tipo examen\r
\r
## Enunciado\r
\r
Un cilindro macizo de masa [[M]] y radio [[R]] baja sin deslizar por un plano inclinado un ángulo [[theta]]. Se pide hallar la aceleración del centro de masas [[a]], la aceleración angular [[alpha]] y la fricción estática [[fs]] que hace posible la rodadura pura.\r
\r
El dato clave no es la masa absoluta, sino cómo se reparte la inercia. Para un cilindro macizo se usa [[beta]] de 0,5, de modo que el momento de inercia puede escribirse como\r
\r
{{f:ley-rotacion-rodadura}}\r
\r
. La pregunta física es si la gravedad disponible se reparte entre traslación y rotación de forma compatible con el vínculo de no deslizamiento.\r
\r
## Datos\r
\r
Tomamos [[M]] de 4,0 kg, [[R]] de 0,20 m, [[theta]] de 30 grados,\r
\r
{{f:aceleracion-rodadura-combinada}}\r
\r
y [[beta]] de 0,5. El cuerpo parte del reposo, el plano es rígido y hay fricción estática suficiente para que no aparezca deslizamiento relativo en el contacto.\r
\r
El eje positivo se elige cuesta abajo. Con esa convención, la componente de la gravedad que impulsa el movimiento es M g sintheta, mientras que la fricción estática [[fs]] apunta cuesta arriba porque debe producir el torque que aumenta [[alpha]].\r
\r
## Definición del sistema\r
\r
El sistema es el cilindro completo. En traslación se analiza el centro de masas; en rotación se toman torques respecto al centro de masas. Esta separación evita mezclar fuerza neta con torque neto: una misma fricción [[fs]] resta fuerza traslacional, pero simultáneamente crea el giro.\r
\r
Las magnitudes desconocidas son [[a]], [[alpha]] y [[fs]]. La condición de rodadura pura cierra el sistema porque impone que la aceleración lineal del centro y la aceleración angular no sean independientes.\r
\r
## Modelo físico\r
\r
El modelo físico queda anclado a las magnitudes núcleo [[a]], [[alpha]], [[fs]], [[theta]], [[M]], [[R]] y [[beta]]. La fuerza gravitatoria tangencial acelera el centro de masas, pero la fricción estática redistribuye parte de esa causa hacia el giro. Por eso deben aparecer simultáneamente la ecuación de traslación, la ecuación de rotación y el vínculo cinemático antes de usar la fórmula compacta de aceleración.\r
\r
No se trata de elegir una ecuación aislada: si falta la traslación, no sabemos la fuerza neta; si falta la rotación, no sabemos qué torque produce [[alpha]]; si falta el vínculo, [[a]] y [[alpha]] quedan desacopladas y el cuerpo podría deslizar.\r
\r
## Justificación del modelo\r
\r
El modelo físico combina tres relaciones del leaf. La traslación queda descrita por la ecuación de traslación,\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. La rotación queda descrita por la ecuación de rotación,\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. El acoplamiento cinemático se impone con el vínculo de rodadura pura,\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
.\r
\r
La fricción estática no se fija como\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
; esa expresión solo da un máximo disponible. Aquí [[fs]] se calcula como la fricción necesaria para que el cilindro ruede sin deslizar. Si el suelo no pudiera proporcionar ese valor, el modelo dejaría de ser válido y habría que pasar a deslizamiento.\r
\r
## Resolución simbólica\r
\r
En la resolución se usan explícitamente las cuatro relaciones núcleo del leaf. Sustituimos\r
\r
{{f:ley-rotacion-rodadura}}\r
\r
 y\r
\r
{{f:vinculo-rodadura-acel}}\r
\r
en la ecuación de rotación:\r
\r
{{f:ley-rotacion-rodadura}}\r
\r
De ahí resulta\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. Al introducirlo en la ecuación de traslación:\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
Por tanto:\r
\r
{{f:aceleracion-rodadura-combinada}}\r
\r
Esta es la relación final de aceleración. Después se recuperan las otras dos incógnitas con\r
\r
{{f:aceleracion-rodadura-combinada}}\r
\r
 y\r
\r
{{f:aceleracion-rodadura-combinada}}\r
\r
.\r
\r
## Sustitución numérica\r
\r
Para [[theta]] de 30 grados,\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. Entonces:\r
\r
{{f:aceleracion-rodadura-combinada}}\r
\r
La aceleración angular es:\r
\r
{{f:vinculo-rodadura-acel}}\r
\r
La fricción estática necesaria queda:\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
## Validación dimensional\r
\r
La ecuación de traslación\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
 compara fuerzas, por tanto todos sus términos tienen dimensión \`[M L T⁻²]\`. La ecuación de rotación\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
 compara torques, con dimensión \`[M L² T⁻²]\`. El vínculo\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
 también es consistente porque la dimensión de [[alpha]] por [[R]] produce \`[L T⁻²]\`.\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
.\r
\r
El resultado final conserva dimensiones de aceleración: \\(g\\sin\\theta\\) tiene unidades de m/s^2 y \\(1+\\beta\\) es adimensional. Por eso la aceleración combinada no puede depender de [[M]] ni de [[R]] para cuerpos con el mismo [[beta]].\r
\r
## Interpretación física\r
\r
El cilindro no cae con gsintheta porque parte de la tendencia a acelerar se invierte en crear rotación. La fricción estática [[fs]] no disipa energía en rodadura pura ideal; redistribuye la respuesta dinámica entre traslación y giro. Por eso una esfera, un cilindro y un aro pueden tener masas distintas y aun así ordenarse por [[beta]].\r
\r
El valor 3,27\\ m/s^2 significa que el cilindro conserva dos tercios de la aceleración que tendría un bloque sin fricción en la misma rampa. El tercio restante aparece como inercia rotacional efectiva.\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
\r
En una rampa de mantenimiento se desplaza un rodillo industrial de\r
\r
{{f:aceleracion-rodadura-combinada}}\r
\r
,30 m. Su geometría se aproxima a un cilindro hueco grueso con [[beta]] de 0,8. La pendiente es [[theta]] de 12 grados y se quiere comprobar si el rodillo mantiene rodadura pura sin exigir una fricción estática irreal.\r
\r
## Estimación física\r
\r
La aceleración esperada por la fórmula combinada es:\r
\r
{{f:ley-rotacion-rodadura}}\r
\r
La fricción necesaria, usando la deducción dinámica junto con el vínculo cinemático, es\r
\r
{{f:ley-rotacion-rodadura}}\r
\r
:\r
\r
{{f:ley-rotacion-rodadura}}\r
\r
La normal vale aproximadamente\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. Por tanto se necesita\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
. Este valor es bajo para goma sobre suelo seco, pero puede ser relevante si hay aceite, polvo fino o una superficie metálica pulida.\r
\r
## Interpretación\r
\r
La lectura importante no es solo que\r
\r
{{f:ley-traslacion-rodadura}}\r
\r
, sino que la condición dinámica exige una fricción estática concreta. Si la fricción disponible supera 108,5 N, el rodillo rueda como cuerpo rígido y la ecuación de traslación queda acoplada a la ecuación de rotación. Si no, el contacto patina, [[alpha]] deja de ser \\(a/R\\) y el análisis debe cambiar de modelo.\r
\r
En ingeniería, este cálculo separa dos decisiones: la geometría del rodillo controla la aceleración mediante [[beta]], mientras que la seguridad del contacto se evalúa comparando [[fs]] con el máximo estático disponible.`;export{a as default};
