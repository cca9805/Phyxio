const e=`# Errores frecuentes: Dos masas unidas por cuerda\r
\r
## Errores conceptuales\r
\r
### Error 1: Creer que la tensión iguala el peso de una de las masas\r
\r
**Por qué parece correcto**\r
\r
El estudiante razona intuitivamente: "la cuerda sostiene la masa, así que la tensión debe igualar su peso". Esta intuición proviene de situaciones estáticas donde una cuerda vertical realmente sostiene un peso en equilibrio.\r
\r
**Por qué es incorrecto**\r
\r
En la máquina de Atwood en movimiento, la tensión es una fuerza interna de acoplamiento que debe ser menor que el peso de la masa que desciende y mayor que el peso de la masa que asciende. Si la tensión igualara el peso de [[m1]], ésta no aceleraría hacia arriba; si igualara el peso de [[m2]], ésta no aceleraría hacia abajo. La tensión toma un valor intermedio precisamente porque el sistema acelera.\r
\r
**Señal de detección**\r
\r
Si al calcular obtienes una tensión exactamente igual a [[m1]]·[[g]] o [[m2]]·[[g]], o si encuentras que la aceleración resulta ser cero sin razón de equilibrio de masas.\r
\r
**Corrección conceptual**\r
\r
La tensión es la fuerza que la cuerda ejerce sobre cada masa. Para que ambas masas aceleren, la tensión debe estar entre ambos pesos. La fórmula muestra que depende del producto de masas sobre la suma, no de una sola masa.\r
\r
**Mini-ejemplo de contraste**\r
\r
Con [[m1]] = 2 kg y [[m2]] = 4 kg, un estudiante calcula "tensión = peso de [[m1]] = 19.6 N". Esto es incorrecto porque con esa tensión [[m2]] no descendería. La tensión correcta es 26.1 N, intermedia entre 19.6 N y 39.2 N.\r
\r
### Error 2: Confundir la dirección supuesta con la dirección real del movimiento\r
\r
**Por qué parece correcto**\r
\r
Al plantear las ecuaciones, el estudiante asume que [[m2]] desciende y [[m1]] asciende basándose en la comparación de masas. Si el resultado de [[a]] sale negativo, interpreta que "hay un error de signo" y lo corrige arbitrariamente a positivo.\r
\r
**Por qué es incorrecto**\r
\r
Una aceleración negativa no es un error; es información física válida. Indica que el sentido real del movimiento es opuesto al supuesto. Corregir el signo arbitrariamente es perder información sobre la dinámica real del sistema.\r
\r
**Señal de detección**\r
\r
Cuando al despejar [[a]] obtienes un valor negativo y tu reacción inmediata es "debo cambiarlo a positivo" sin reconsiderar la dirección del movimiento.\r
\r
**Corrección conceptual**\r
\r
El signo de [[a]] es relativo a la elección de ejes de referencia. Un valor negativo significa que la masa que supusiste que sube en realidad baja, y viceversa. La información del signo es tan válida como la magnitud.\r
\r
**Mini-ejemplo de contraste**\r
\r
Si [[m1]] = 5 kg y [[m2]] = 3 kg (masa izquierda mayor), pero supusiste que [[m2]] desciende, obtendrás [[a]] = −2.45 m/s². El signo negativo indica correctamente que [[m1]] desciende y [[m2]] asciende, lo contrario a tu suposición inicial.\r
\r
## Errores de modelo\r
\r
### Error 3: Aplicar el modelo ideal a sistemas con polea masiva sin corrección\r
\r
**Por qué parece correcto**\r
\r
La fórmula de Atwood está en el libro de texto, así que "debe funcionar" para cualquier sistema de dos masas con cuerda y polea.\r
\r
**Por qué es incorrecto**\r
\r
La fórmula asume polea sin masa. Si la polea tiene masa significativa, parte de la energía se destina a hacerla girar, reduciendo la aceleración efectiva de las masas. Aplicar la fórmula ideal sin corrección sobrestima sistemáticamente la aceleración real.\r
\r
**Señal de detección**\r
\r
Cuando mides experimentalmente una aceleración consistentemente menor (más del 5% inferior) a la predicha por la fórmula ideal, y la polea es de material denso (metal) y tamaño considerable.\r
\r
**Corrección conceptual**\r
\r
El modelo ideal es válido solo cuando la energía cinética rotacional de la polea es despreciable frente a la energía de traslación de las masas. Para poleas masivas, se debe incluir el momento de inercia I en las ecuaciones.\r
\r
**Mini-ejemplo de contraste**\r
\r
Un sistema con [[m1]] = 1 kg, [[m2]] = 2 kg y polea de 0.5 kg de masa distribuida en su borde. La fórmula ideal predice 3.27 m/s². El valor medido es 2.6 m/s². La discrepancia revela que el modelo ideal no aplica directamente.\r
\r
### Error 4: Ignorar la masa de la cuerda en sistemas de gran escala\r
\r
**Por qué parece correcto**\r
\r
La cuerda parece ligera comparada con las masas del sistema, así que "no debería afectar".\r
\r
**Por qué es incorrecto**\r
\r
En sistemas industriales (minas, funiculares) con cables de cientos de metros, la masa del cable puede ser comparable o mayor que las masas de las cabinas. Ignorarla produce cálculos de tensión y aceleración significativamente erróneos.\r
\r
**Señal de detección**\r
\r
Cuando el cable es de acero de alta resistencia y su longitud supera los 50 metros, o cuando la relación masa del cable dividida por masa de la carga excede 0.1.\r
\r
**Corrección conceptual**\r
\r
En cables masivos, la tensión varía a lo largo del cable debido a su propio peso. El modelo de cuerda sin masa es válido solo cuando la masa del cable es mucho menor que la de las masas conectadas (típicamente menos del 5%).\r
\r
**Mini-ejemplo de contraste**\r
\r
Un elevador de mina con 200 metros de cable de acero (masa 600 kg) conectando dos cabinas de 1000 kg cada una. Ignorar la masa del cable produce un error del 23% en la aceleración calculada.\r
\r
## Errores matemáticos\r
\r
### Error 5: Dividir por una sola masa en lugar de la masa total\r
\r
**Por qué parece correcto**\r
\r
Al aplicar la segunda ley, el estudiente razona: "la fuerza neta acelera la masa sobre la que actúa", y aplica [[a]] = [[g]]·([[m2]] − [[m1]])/[[m2]] considerando solo la masa descendente.\r
\r
**Por qué es incorrecto**\r
\r
La restricción cinemática de la cuerda inextensible acopla ambas masas; la fuerza neta debe acelerar el sistema completo ([[m1]] + [[m2]]), no solo una masa. El error produce aceleraciones mayores que la realidad.\r
\r
**Señal de detección**\r
\r
Si tu resultado de aceleración supera el valor de [[g]], sabes que has cometido este error, ya que en el modelo ideal la aceleración siempre es inferior a la gravedad.\r
\r
**Corrección conceptual**\r
\r
La aceleración del sistema es la fuerza motriz (diferencia de pesos) dividida por la inercia total (suma de masas). Ambas masas deben acelerarse simultáneamente.\r
\r
**Mini-ejemplo de contraste**\r
\r
Con [[m1]] = 1 kg y [[m2]] = 5 kg, un estudiante calcula [[a]] = (5−1)·9.8/5 = 7.84 m/s². El valor correcto es 6.53 m/s², dividiendo por la suma (6 kg) en lugar de por [[m2]] solo.\r
\r
## Errores de interpretación\r
\r
### Error 6: Interpretar aceleración nula como ausencia de tensión\r
\r
**Por qué parece correcto**\r
\r
Si no hay movimiento, "no hay fuerzas activas", por lo que el estudiante concluye que la tensión debe ser cero cuando las masas están en equilibrio.\r
\r
**Por qué es incorrecto**\r
\r
En equilibrio estático ([[m1]] = [[m2]]), la aceleración es cero pero la tensión es máxima respecto a la condición de mínima carga. La tensión iguala al peso común, manteniendo el equilibrio. La tensión cero solo ocurre si no hay cuerda o si el sistema cae libre sin acoplamiento.\r
\r
**Señal de detección**\r
\r
Cuando en un problema de equilibrio con masas iguales, respondes que "la tensión es cero porque no hay movimiento".\r
\r
**Corrección conceptual**\r
\r
Tensión y aceleración son magnitudes independientes. Puedes tener tensión sin aceleración (equilibrio estático), aceleración sin tensión (caída libre desacoplada), o ambas simultáneamente (movimiento acelerado acoplado).\r
\r
**Mini-ejemplo de contraste**\r
\r
Dos masas de 3 kg cada una en equilibrio. El estudiante dice "tensión = 0 N porque no se mueven". El valor correcto es 29.4 N, igual al peso de cada masa, manteniendo el equilibrio.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de dar un problema por resuelto, verifica:\r
\r
- La tensión calculada está entre ambos pesos (mayor que el menor, menor que el mayor).\r
- El módulo de la aceleración es inferior a la gravedad [[g]].\r
- Al intercambiar las masas, la aceleración cambia de signo pero la tensión permanece igual.\r
- Si las masas son iguales, la aceleración es cero pero la tensión no lo es.\r
- Las dimensiones son coherentes: aceleración en m/s², tensión en N.\r
\r
Si alguna verificación falla, revisa tu planteamiento antes de confiar en el resultado.\r
`;export{e as default};
