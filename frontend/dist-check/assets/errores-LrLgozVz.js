const e=`# Errores\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir [[alpha]] (coeficiente lineal) con [[beta]] (coeficiente volumétrico)\r
\r
**Por qué parece correcto**\r
\r
El alumno aprende que la dilatación depende de un "coeficiente del material" y, sin distinguir cuál, usa el único valor numérico que encuentra en las tablas (a veces [[alpha]], a veces [[beta]]) para cualquier cálculo. Como ambos coeficientes tienen las mismas unidades (K⁻¹) y valores numéricos del mismo orden de magnitud, la confusión pasa desapercibida si no se comprueba la razonabilidad del resultado.\r
\r
**Por qué es incorrecto**\r
\r
La ley de dilatación lineal utiliza [[alpha]], que mide la variación relativa de una sola dimensión por kelvin. La ley de dilatación volumétrica utiliza [[beta]], que mide la variación relativa del volumen completo. Para sólidos isótropos, [[beta]] es aproximadamente tres veces [[alpha]]. Usar [[beta]] en la fórmula lineal triplicaría la elongación calculada; usar [[alpha]] en la fórmula volumétrica daría un volumen tres veces menor al real.\r
\r
**Señal de detección**\r
\r
El alumno obtiene una elongación de barra metálica de varios centímetros para variaciones de temperatura de pocos kelvins, o una dilatación volumétrica que equivale a cambiar solo una dimensión en lugar del volumen total. El cociente entre [[DeltaL]] calculado y [[L0]] multiplicado por [[DeltaT]] no coincide con el valor tabulado de [[alpha]] del material.\r
\r
**Corrección conceptual**\r
\r
[[alpha]] describe la sensibilidad de una longitud; [[beta]] describe la sensibilidad de un volumen. En sólidos isótropos, la relación es [[beta]] ≈ 3·[[alpha]] por geometría. Antes de sustituir en la fórmula, identificar qué dimensión se está calculando (lineal o volumétrica) y seleccionar el coeficiente correspondiente.\r
\r
**Mini-ejemplo de contraste**\r
\r
Para una barra de aluminio de 1 m con [[DeltaT]] de 100 K: usando [[alpha]] ≈ 23×10⁻⁶ K⁻¹, la elongación es aproximadamente 2.3 mm. Si por error se usa [[beta]] ≈ 69×10⁻⁶ K⁻¹, el resultado es 6.9 mm, casi el triple. En un raíl de 25 m de longitud, ese error significaría 17 cm en vez de 5.75 cm, una diferencia que invalidaría cualquier diseño de junta de dilatación.\r
\r
---\r
\r
### Error 2: Invertir el orden de la resta al calcular [[DeltaT]]\r
\r
**Por qué parece correcto**\r
\r
El alumno asocia "cuánto sube la temperatura" con la temperatura inicial menos la temperatura final porque intuitivamente "calor" se relaciona con temperatura alta. La resta T_inicial menos T_final produce un número positivo cuando se parte de una temperatura alta, reforzando la confusión.\r
\r
**Por qué es incorrecto**\r
\r
Por convención universal, [[DeltaT]] se define como T_final menos T_inicial. Un [[DeltaT]] positivo indica que la temperatura subió (calentamiento) y [[DeltaL]] será positivo (elongación). Si se invierte la resta, un proceso de calentamiento produce un [[DeltaT]] negativo, lo que lleva erróneamente a una contracción calculada donde físicamente hay una elongación.\r
\r
**Señal de detección**\r
\r
El alumno obtiene [[DeltaL]] negativo en un problema donde el enunciado describe calentamiento explícito del sólido. O bien obtiene [[DeltaL]] positivo en un problema de enfriamiento. El signo del resultado es opuesto al sentido físico del proceso descrito.\r
\r
**Corrección conceptual**\r
\r
Siempre calcular [[DeltaT]] como temperatura final menos temperatura inicial. Verificar que el signo de [[DeltaL]] coincide con el tipo de proceso: positivo para calentamiento, negativo para enfriamiento. Esta comprobación de signo es el primer control de coherencia antes de interpretar el resultado.\r
\r
**Mini-ejemplo de contraste**\r
\r
Una barra de acero se calienta de 20 °C a 70 °C. Si [[DeltaT]] se calcula correctamente como 70 menos 20, el resultado es 50 K y [[DeltaL]] es positivo (elongación de 0.6 mm para 1 m de barra). Si se invierte, [[DeltaT]] resulta menos 50 K y [[DeltaL]] aparece negativo, indicando una contracción absurda en un proceso de calentamiento.\r
\r
## Errores de modelo\r
\r
### Error 3: Aplicar el modelo lineal a un proceso que atraviesa un cambio de estado\r
\r
**Por qué parece correcto**\r
\r
El alumno aplica mecánicamente la fórmula [[DeltaL]] proporcional a [[alpha]], [[L0]] y [[DeltaT]] sin verificar si el rango de temperatura abarca una transición de fase. Como la fórmula da siempre un número, el alumno la acepta sin cuestionar si el modelo es físicamente aplicable.\r
\r
**Por qué es incorrecto**\r
\r
Durante un cambio de estado (fusión, solidificación, evaporación), el material no cambia de temperatura mientras absorbe o cede energía latente, pero sí puede cambiar de volumen de forma discontinua. En ese rango, la hipótesis de [[alpha]] constante falla completamente: [[alpha]] se vuelve indefinido durante la transición y la ley lineal de dilatación no predice el comportamiento real. Usar la fórmula en ese rango produce un resultado numéricamente incorrecto que puede estar varios órdenes de magnitud alejado de la realidad.\r
\r
**Señal de detección**\r
\r
El enunciado del problema menciona temperaturas que incluyen el punto de fusión o ebullición del material, o el enunciado específica que el material pasa de estado sólido a líquido durante el proceso. La señal más clara es que la variación de temperatura calculada atraviese un punto de transición conocido del material.\r
\r
**Corrección conceptual**\r
\r
Antes de aplicar la ley de dilatación lineal, verificar que todo el rango [[DeltaT]] del problema está dentro de la misma fase del material. Si hay transición de fase, el problema debe dividirse en tramos: el tramo de calentamiento sólido, la transición de fase (con calor latente y sin variación de temperatura), y el tramo de calentamiento líquido, cada uno con su propia ley y parámetros.\r
\r
**Mini-ejemplo de contraste**\r
\r
Se pretende calcular la dilatación de una barra de estaño calentada de 200 °C a 250 °C, sin saber que el punto de fusión del estaño es 232 °C. Aplicar la fórmula con [[alpha]] del estaño sólido para todo el rango da un resultado numéricamente plausible pero físicamente erróneo: entre 200 y 232 °C el estaño se dilata como sólido, a 232 °C funde y cambia de volumen de forma discontinua, y entre 232 y 250 °C se expande como líquido con un [[beta]] completamente diferente.\r
\r
## Errores matemáticos\r
\r
### Error 4: No convertir las unidades de longitud antes de sustituir\r
\r
**Por qué parece correcto**\r
\r
El alumno introduce [[L0]] en centímetros o milímetros porque el enunciado da el dato en esas unidades, y aplica [[alpha]] en K⁻¹ sin advertir que los valores tabulados de [[alpha]] están implícitamente referidos a metros (el SI). El cálculo produce un número con valor numérico correcto pero unidades de longitud erróneas, lo que pasa desapercibido si no se razona sobre el orden de magnitud.\r
\r
**Por qué es incorrecto**\r
\r
[[alpha]] en K⁻¹ del SI es la variación relativa de longitud por kelvin, y la variación relativa es adimensional: [[DeltaL]] dividido entre [[L0]]. Por tanto, [[DeltaL]] tiene las mismas unidades que [[L0]]. Si [[L0]] está en metros, [[DeltaL]] estará en metros. Si [[L0]] se introduce en centímetros sin convertir, [[DeltaL]] sale en centímetros, lo que puede confundirse con metros si no se etiquetan las unidades en todo momento.\r
\r
**Señal de detección**\r
\r
El resultado de [[DeltaL]] parece cien veces mayor o menor de lo esperado. Por ejemplo, para una barra de 50 cm de aluminio con [[DeltaT]] de 40 K se obtiene 46 mm en lugar de 0.46 mm. El orden de magnitud del cociente [[DeltaL]]/[[L0]] no coincide con [[alpha]]·[[DeltaT]].\r
\r
**Corrección conceptual**\r
\r
Convertir siempre [[L0]] (y [[V0]] en dilatación volumétrica) al SI (metros y metros cúbicos) antes de sustituir. El resultado [[DeltaL]] estará en metros y puede convertirse a la unidad deseada al final. Verificar siempre que [[DeltaL]]/[[L0]] es del orden de [[alpha]]·[[DeltaT]], un número adimensional pequeño.\r
\r
**Mini-ejemplo de contraste**\r
\r
Una barra de cobre de 30 cm. Usando [[L0]] en metros: 0.30 m. Con [[alpha]] ≈ 17×10⁻⁶ K⁻¹ y [[DeltaT]] de 60 K, [[DeltaL]] resulta aproximadamente 0.000306 m, es decir 0.306 mm. Si por error se usa [[L0]] como 30 (en centímetros sin convertir) con el mismo [[alpha]] en K⁻¹, el resultado numérico es 0.0306, que el alumno interpreta como 0.0306 m o 3.06 cm, cien veces mayor que la realidad.\r
\r
## Errores de interpretación\r
\r
### Error 5: Confundir [[DeltaL]] con la longitud final del sólido\r
\r
**Por qué parece correcto**\r
\r
El alumno calcula [[DeltaL]] y, como la pregunta pide "la longitud del sólido tras el calentamiento", responde con el valor de [[DeltaL]] en lugar de sumar [[L0]] más [[DeltaL]]. La confusión surge porque [[DeltaL]] es la magnitud calculada directamente por la fórmula y el alumno la toma como el estado final del sistema.\r
\r
**Por qué es incorrecto**\r
\r
[[DeltaL]] es la variación de longitud, no la longitud final. La longitud final del sólido es [[L0]] más [[DeltaL]]. Para una barra de acero de 2 m calentada 50 K con [[alpha]] ≈ 12×10⁻⁶ K⁻¹, [[DeltaL]] es aproximadamente 1.2 mm. La longitud final es 2000 mm más 1.2 mm, es decir 2001.2 mm, no 1.2 mm. Dar 1.2 mm como longitud final sería un error absurdo, pero ocurre cuando el alumno no diferencia entre variación y estado final.\r
\r
**Señal de detección**\r
\r
El valor reportado como longitud final es mucho menor que [[L0]] (por ejemplo, unos pocos milímetros para una barra de metros). O bien, el problema pide la longitud final pero la respuesta coincide exactamente con el valor de [[DeltaL]] calculado.\r
\r
**Corrección conceptual**\r
\r
Distinguir siempre entre la magnitud calculada por la fórmula ([[DeltaL]], variación) y el estado final del sólido (longitud inicial más variación). En un problema que pide la longitud final, el último paso siempre es sumar [[L0]] más [[DeltaL]]. Verificar que la longitud final sea siempre mayor que [[L0]] para calentamiento.\r
\r
**Mini-ejemplo de contraste**\r
\r
Una varilla de vidrio de 0.5 m se calienta 80 K con [[alpha]] ≈ 9×10⁻⁶ K⁻¹. [[DeltaL]] es aproximadamente 0.36 mm. La longitud final es 500 mm más 0.36 mm, resultado 500.36 mm. Responder "la longitud final es 0.36 mm" es físicamente absurdo: la varilla no se acortó de 50 cm a menos de medio milímetro. La longitud final siempre debe ser cercana a [[L0]], con una pequeña corrección de [[DeltaL]].\r
\r
## Regla de autocontrol rápido\r
\r
Antes de dar por válido cualquier cálculo de dilatación, verificar estas cuatro condiciones:\r
\r
1. **Signo de [[DeltaT]]**: T_final menos T_inicial. Si el proceso es de calentamiento, [[DeltaT]] debe ser positivo; si es de enfriamiento, negativo. Si el signo no coincide con el proceso descrito, corregir la resta.\r
\r
2. **Coeficiente correcto**: ¿se usa [[alpha]] para dilatación lineal o [[beta]] para volumétrica? Nunca intercambiarlos. Para sólidos isótropos, [[beta]] es aproximadamente tres veces [[alpha]].\r
\r
3. **Orden de magnitud de la deformación relativa**: el cociente [[DeltaL]] dividido entre [[L0]] debe ser del orden de [[alpha]] multiplicado por [[DeltaT]], un número adimensional entre 10⁻⁴ y 10⁻². Un resultado fuera de este rango indica error de datos o de unidades.\r
\r
4. **Longitud o volumen final**: si la pregunta pide el estado final, añadir [[L0]] a [[DeltaL]] (o [[V0]] a [[DeltaV]]). El estado final es siempre mayor que el inicial para calentamiento con coeficiente positivo.\r
`;export{e as default};
