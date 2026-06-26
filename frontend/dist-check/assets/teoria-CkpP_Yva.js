const e=`# Bloque colgante\r
\r
## Contexto conceptual\r
\r
Un bloque suspendido de una cuerda vertical es el sistema mecánico más simple que combina la gravedad con un vínculo flexible. La pregunta central es: ¿qué tensión debe soportar la cuerda para mantener el equilibrio, elevar la carga o frenar su caída? Esta configuración aparece en grúas, ascensores, poleas y cualquier sistema de elevación.\r
\r
La magnitud [[T]] representa la fuerza de tracción que la cuerda transmite al bloque. A diferencia del peso [[W]], que siempre apunta hacia abajo con magnitud fija para una masa dada, la tensión se adapta a las condiciones dinámicas: es mínima cuando el bloque cae libremente y máxima cuando se acelera hacia arriba. Entender esta variabilidad es esencial para diseñar cables seguros y predecir comportamientos dinámicos.\r
\r
Este leaf pertenece a la dinámica traslacional y sirve de puente hacia sistemas más complejos: poleas móviles, ascensores con contrapeso, y máquinas de Atwood. Dominar el bloque colgante simple es prerequisito para abordar configuraciones donde múltiples masas interactúan mediante cuerdas.\r
\r
## 🟢 Nivel esencial\r
\r
Imagina que sostienes una mochila con una mano. Si la mantienes quieta, tu brazo ejerce una fuerza hacia arriba exactamente igual al peso de la mochila. Esa fuerza es la tensión. Si la mochila pesa 100 N, tu mano debe ejercer 100 N hacia arriba; si pesa 200 N, debes ejercer 200 N. La tensión se ajusta automáticamente para equilibrar el peso cuando no hay movimiento.\r
\r
Pero si decides elevar la mochila aceleradamente, necesitas empujar con más fuerza que el peso. La diferencia entre lo que ejerces y el peso es lo que produce la aceleración hacia arriba. Si tiras con exactamente el peso, la mochila sube a velocidad constante; si tiras con menos, descelera o cae. Este principio de desbalance fuerza-aceleración es la esencia del bloque colgante.\r
\r
El peso del bloque se calcula multiplicando su [[m]] por la [[g]] local (aproximadamente 9.8 m/s² en la Tierra). Una masa de 10 kg genera un peso de unos 98 N. La tensión necesaria para equilibrio es igual a ese peso; la tensión para aceleración requiere añadir la fuerza que producirá la [[a]] deseada multiplicada por la masa.\r
\r
## 🔵 Nivel formal\r
\r
El punto de partida es la definición del **peso gravitatorio**, fuerza que la gravedad ejerce sobre la masa suspendida:\r
\r
{{f:peso_gravitatorio}}\r
\r
[[W]] es proporcional a [[m]] mediante la constante [[g]]. Este peso actúa siempre hacia abajo y constituye la carga que el sistema de elevación debe vencer.\r
\r
La **segunda ley de Newton en la dirección vertical** relaciona la tensión, el peso y la aceleración:\r
\r
{{f:dinamica_vertical}}\r
\r
Observa que [[a]] es positiva hacia arriba en este convenio. Si [[T]] supera a [[W]], la aceleración es positiva (subida acelerada); si [[T]] es menor, la aceleración es negativa (bajada acelerada o frenada en subida). La igualdad [[T]] = [[W]] produce [[a]] = 0, correspondiente a equilibrio o movimiento uniforme.\r
\r
El caso de **equilibrio vertical** aparece cuando no hay aceleración:\r
\r
{{f:equilibrio_vertical}}\r
\r
Esta condición es la base de diseño para cualquier sistema que mantenga cargas estacionarias: cables de suspensión, puentes colgantes, estructuras de elevación en reposo. El cable debe dimensionarse para soportar al menos el peso de la carga.\r
\r
Para diseñar sistemas de aceleración controlada, se rearregla la ecuación dinámica para obtener la tensión necesaria:\r
\r
{{f:tension_aceleracion}}\r
\r
Esta forma es útil en ingeniería: dada una masa y una aceleración deseada, calcula directamente la tensión que debe generar el motor o el freno. Nota que si [[a]] es positiva (subida acelerada), la tensión supera al peso; si es negativa, la tensión es menor que el peso; en caída libre ideal ([[a]] = −[[g]]), la tensión tiende a cero.\r
\r
La conexión con la energía se establece mediante la fórmula de energía potencial gravitatoria, que cuantifica el trabajo realizado al elevar la masa una altura determinada:\r
\r
{{f:energia_potencial}}\r
\r
Esta expresión vincula la altura [[h]] con la energía almacenada [[E_p]], permitiendo análisis energéticos del sistema en movimientos verticales.\r
\r
## 🔴 Nivel estructural\r
\r
La estructura matemática revela que el bloque colgante es un sistema lineal donde la salida ([[a]] o [[T]]) depende linealmente de las entradas. La pendiente de esta relación está determinada por la inversa de [[m]]: masas mayores requieren mayores desbalances de fuerza para obtener la misma aceleración.\r
\r
El **dominio de validez** del modelo está acotado por varias condiciones. La velocidad debe ser tal que la resistencia del aire sea despreciable frente al peso; para una esfera de 10 cm y 1 kg, esto limita la velocidad a unos 5 m/s. La aceleración no debe superar valores que deformen la cuerda; en cables de acero esto ocurre por encima de decenas de m/s², pero en cables elásticos el límite es menor. La masa debe ser suficiente para que la cuerda esté tensa pero no tanto que rompa el material.\r
\r
La coherencia dimensional confirma la consistencia del sistema: [[T]] tiene unidades de fuerza \`[M L T⁻²]\` porque es producto de masa \`[M]\` por aceleración \`[L T⁻²]\`; la fórmula de peso es dimensionalmente homogénea; la aceleración resultante de dividir fuerza por masa tiene unidades correctas \`[L T⁻²]\`.\r
\r
Los **casos límite** revelan la lógica profunda del modelo. Si [[m]] → 0, el peso desaparece y cualquier tensión positiva produce aceleración infinita. Si [[g]] → 0, no hay peso y la tensión produce aceleración pura. Si [[T]] → 0, el bloque cae con aceleración [[g]] (caída libre). Estos límites validan el modelo.\r
\r
## Interpretación física profunda\r
\r
¿Por qué la tensión debe superar al peso para elevar la carga? La respuesta está en la inercia. El peso «tira» hacia abajo; para vencer esa tendencia e iniciar movimiento ascendente, debe aplicarse fuerza mayor en sentido opuesto. La diferencia se invierte en cambiar la velocidad del bloque (aceleración). Cuanto mayor sea la masa, mayor debe ser esa diferencia para lograr la misma aceleración.\r
\r
La simetría del problema es notable: si suspendemos el mismo bloque en la Luna, donde [[g]] es unos 1.6 m/s², el peso se reduce a un sexto y la tensión de equilibrio es proporcionalmente menor. Sin embargo, la inercia ([[m]]) permanece igual, por lo que la misma tensión excedente produce la misma aceleración que en la Tierra. Esto separa conceptualmente la gravedad (que determina el peso) de la inercia (que determina la respuesta a fuerzas netas).\r
\r
Una lectura profunda conecta este leaf con el concepto de energía. Cuando elevamos el bloque una altura [[h]], realizamos trabajo contra la gravedad y almacenamos energía potencial [[E_p]]. La fuerza de tensión durante la elevación, multiplicada por el desplazamiento, da el trabajo realizado. Si la elevación es lenta ([[a]] ≈ 0), la tensión es aproximadamente [[W]] y el trabajo es [[W]]·[[h]], coincidente con la energía potencial [[E_p]] ganada.\r
\r
## Orden de magnitud\r
\r
Para desarrollar sentido físico, estos rangos típicos son útiles:\r
\r
- Masa [[m]]: desde 0.1 kg (objetos pequeños) hasta 3000 kg (cargas industriales)\r
- Peso [[W]]: desde 1 N hasta 50 000 N aproximadamente\r
- Tensión [[T]]: desde 0 (caída libre ideal) hasta decenas de miles de newtons\r
- Gravedad [[g]]: 9.8 m/s² en la Tierra (varía entre 9.78 y 9.83 según latitud)\r
- Aceleración [[a]]: entre −20 y 20 m/s² en problemas didácticos (|[[a]]| > [[g]] requiere sistemas especiales)\r
- Energía potencial [[E_p]]: desde 0 hasta cientos de miles de julios según la masa y altura\r
\r
La relación entre tensión y peso define el «factor de seguridad» en ingeniería: un cable de grúa se dimensiona para soportar tensiones varias veces superiores al peso máximo de carga, precisamente para absorber las sobretensiones dinámicas durante aceleraciones y frenados.\r
\r
## Método de resolución personalizado\r
\r
El procedimiento sistemático para resolver problemas de bloque colgante es:\r
\r
1. **Identificar el régimen**: ¿Equilibrio ([[a]] = 0), subida acelerada ([[a]] > 0), bajada acelerada ([[a]] < 0), o caída controlada?\r
\r
2. **Calcular el peso**: Obtener [[W]] = [[m]]·[[g]] como referencia fundamental.\r
\r
3. **Aplicar la segunda ley**: Plantear [[T]] − [[W]] = [[m]]·[[a]] con el signo correcto de [[a]] según el eje elegido.\r
\r
4. **Despejar la incógnita**: Según lo que se pida, despejar [[T]] (diseño de cable), [[a]] (predicción de movimiento), o [[m]] (determinación de carga límite).\r
\r
5. **Validar físicamente**: Verificar que [[T]] ≥ 0 (la cuerda no empuja), que |[[a]]| sea razonable, y que la tensión no supere la carga de rotura del material.\r
\r
## Casos especiales y ejemplo extendido\r
\r
**Caso especial 1 — Caída libre**: Cuando [[T]] = 0 (cuerda cortada o slack total), la ecuación dinámica da [[a]] = −[[g]]. El bloque acelera hacia abajo con la aceleración gravitatoria independientemente de su masa. Este es el caso límite donde el vínculo desaparece.\r
\r
**Caso especial 2 — Equilibrio dinámico**: Cuando [[a]] = 0, la tensión iguala exactamente al peso. Esto ocurre en reposo pero también en movimiento vertical uniforme (subida o bajada a velocidad constante). Muchos errores conceptuales surgen de pensar que la tensión debe ser mayor «porque se mueve»; solo debe ser mayor si hay aceleración.\r
\r
**Ejemplo extendido — Ascensor con contrapeso**: En un ascensor real, el motor no debe vencer el peso completo de la cabina porque hay un contrapeso del otro lado de la polea. El análisis se reduce a estudiar el desbalance entre los dos bloques colgantes, y la tensión del cable resulta de la combinación de ambas masas. Este sistema reduce drásticamente la potencia necesaria del motor.\r
\r
## Preguntas reales del alumno\r
\r
**¿Por qué la tensión es igual al peso si el bloque sube a velocidad constante?**\r
Porque la velocidad constante implica aceleración nula. La segunda ley dice que la suma de fuerzas es masa por aceleración; si la aceleración es cero, la suma de fuerzas es cero, lo que requiere [[T]] = [[W]]. El movimiento uniforme no requiere fuerza neta.\r
\r
**¿Qué pasa si la tensión supera la resistencia del cable?**\r
El modelo deja de aplicarse porque el vínculo se rompe. Físicamente, el cable falla y el bloque entra en caída libre. El diseño de cables implica calcular la tensión máxima esperada (peso más sobrecarga dinámica) y elegir un material con resistencia varias veces superior (factor de seguridad).\r
\r
**¿Por qué la misma masa acelera igual en la Tierra y en la Luna si la gravedad es diferente?**\r
La aceleración producida por una fuerza dada depende solo de la masa inercial, que no cambia con la gravedad. Lo que cambia es el peso (la fuerza gravitatoria), no la respuesta inercial. En la Luna un cable soporta menos peso, pero para acelerar la misma masa se requiere la misma fuerza adicional.\r
\r
**¿Dónde reaparece este tema en la física avanzada?**\r
En osciladores armónicos (masa colgante de un muelle vertical), en máquinas de Atwood (dos masas conectadas por cuerda), en dinámica de ascensores con sistemas de control, y en mecánica orbital donde los «vínculos» son gravitatorios. La estructura matemática de la segunda ley de Newton es universal en mecánica clásica.\r
\r
## Conexiones transversales y rutas de estudio\r
\r
Este leaf se conecta con otros nodos del árbol Phyxio:\r
\r
- **Prerrequisitos**: Leyes de Newton (especialmente la segunda ley) y concepto de fuerza. Si no se domina la suma vectorial de fuerzas, revisar esos leaves primero.\r
\r
- **Continuaciones naturales**: Máquina de Atwood (dos masas colgantes), poleas móviles (sistemas con ventaja mecánica), dinámica de ascensores con contrapeso, osciladores verticales con muelle.\r
\r
- **Aplicaciones**: Diseño de cables y grúas, sistemas de frenado en elevadores, paracaídas y descensos controlados, experimentos de caída libre con resistencia del aire.\r
\r
- **Perspectiva histórica**: Galileo estudió caída libre; Newton formuló las leyes que gobiernan este sistema; la ingeniería moderna lo aplica en infraestructura de elevación.\r
\r
## Síntesis final\r
\r
El bloque colgante encapsula la dinámica newtoniana en su forma más simple: una sola masa, dos fuerzas (tensión y peso), una aceleración resultante. La ecuación [[T]] − [[W]] = [[m]]·[[a]] resume el balance entre el vínculo que sostiene y la gravedad que cae. Comprender que la tensión se adapta a las condiciones (iguala al peso en equilibrio, lo supera para subir, es menor para bajar, y desaparece en caída libre) es captar la esencia de los vínculos flexibles en física.\r
\r
El dominio de este leaf proporciona intuición sobre sistemas mecánicos que se extiende mucho más allá del caso simple: es la base conceptual para entender cualquier sistema donde fuerzas externas deben equilibrar o vencer la gravedad mediante cuerdas, cables o cualquier vínculo tractivo.\r
`;export{e as default};
