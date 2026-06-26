# Ejemplo tipo examen

## Enunciado

Dos altavoces coherentes emiten el mismo tono en una sala grande. Un micrófono se coloca en una posición donde el camino desde el altavoz A es más corto que el camino desde el altavoz B. La longitud de onda del sonido en el aire de la sala es 0.68 m.

Se pide determinar si la posición puede corresponder al primer mínimo destructivo, calcular el desfase asociado y estimar la intensidad resultante si las intensidades individuales medidas por separado son comparables pero no idénticas.

## Datos

- Diferencia de camino entre los dos recorridos: 0.34 m.
- Longitud de onda del tono: 0.68 m.
- Orden destructivo considerado: 0.
- Intensidad individual del altavoz A en el punto: 2.0 mW/m².
- Intensidad individual del altavoz B en el punto: 1.8 mW/m².
- Fuentes sincronizadas por el mismo generador.

## Definición del sistema

El sistema físico es el punto de medida del micrófono y las dos ondas sonoras que llegan a él. La magnitud geométrica clave es [[Delta_r]], porque compara los dos recorridos. La escala espacial relevante es [[lambda]], no la distancia absoluta a cualquiera de los altavoces.

El resultado observable es [[I_resultante]]. Las magnitudes [[I1]] e [[I2]] se interpretan como intensidades medidas por separado, antes de recombinar las ondas de forma coherente.

## Modelo físico

Se usa el modelo de dos ondas coherentes con frecuencia común y fase relativa estable. La posición será un mínimo destructivo si [[Delta_r]] contiene medio ciclo adicional respecto a un número entero de ciclos.

La intensidad no se obtiene sumando solo [[I1]] e [[I2]], porque la fase decide si el término de interferencia refuerza o reduce. Por eso el modelo necesita [[delta_phi]] además de las intensidades individuales.

## Justificación del modelo

El modelo vale porque los altavoces están sincronizados por el mismo generador, el tono es prácticamente monocromático y el micrófono mide una región pequeña frente a la separación entre mínimos. En esas condiciones, la fase relativa no se promedia de forma aleatoria.

Dejaría de valer si los altavoces emitieran sonidos independientes, si el micrófono promediara una zona amplia de la sala, o si reflexiones fuertes de paredes dominaran sobre las dos trayectorias directas. En esos casos, [[Delta_r]] de los caminos directos no bastaría.

## Resolución simbólica

La condición geométrica del mínimo destructivo se evalúa con:

{{f:condicion_destructiva_camino}}

Para el primer mínimo, [[m_orden]] representa el orden destructivo inicial. La diferencia de camino esperada se obtiene tomando medio ciclo de [[lambda]].

El desfase equivalente se lee con:

{{f:fase_destructiva}}

Ese desfase corresponde a oposición de fase. Una vez identificada la condición destructiva, la intensidad remanente se calcula mediante:

{{f:intensidad_interferencia_dos_ondas}}

En esta última relación, el término dependiente de [[delta_phi]] reduce la suma incoherente. Si [[I1]] y [[I2]] fueran idénticas, la cancelación ideal podría llevar [[I_resultante]] hasta cero.

## Sustitución numérica

Con [[m_orden]] de valor cero y [[lambda]] de 0.68 m, el medio ciclo de camino da 0.34 m. Por tanto, la [[Delta_r]] observada coincide con la condición del primer mínimo destructivo.

Para la fase, el primer mínimo corresponde a una separación angular de un múltiplo impar de pi. Así, [[delta_phi]] es aproximadamente 3.14 rad.

Para la intensidad, se parte de 2.0 mW/m² y 1.8 mW/m². La suma incoherente sería 3.8 mW/m², pero el término de interferencia en oposición de fase resta casi toda la contribución común. El cálculo da una intensidad remanente pequeña, aproximadamente 0.006 mW/m². Por tanto [[I_resultante]] es casi nula, pero no exactamente cero porque [[I1]] y [[I2]] no son idénticas.

## Validación dimensional

La condición de camino compara longitudes: tanto [[Delta_r]] como [[lambda]] tienen dimensión `[L]`, y [[m_orden]] no aporta dimensión física. El resultado geométrico queda en metros.

La fase [[delta_phi]] es adimensional y se mide en radianes. La intensidad resultante conserva dimensión `[M T⁻³]`, la misma que [[I1]] e [[I2]], porque todos los términos describen potencia media transportada por unidad de área.

## Interpretación física

El micrófono está en un mínimo destructivo porque la diferencia de camino introduce oposición de fase. La señal no desaparece por falta de sonido, sino porque las perturbaciones de presión llegan casi con signos opuestos y se compensan localmente.

La intensidad no es exactamente cero porque las dos contribuciones no tienen la misma amplitud efectiva. Si [[I1]] aumentara y [[I2]] se mantuviera, el mínimo sería menos profundo. Si ambas intensidades se igualaran manteniendo [[delta_phi]], la cancelación sería mucho más cercana a nula.

Físicamente, el resultado explica por qué caminar unos centímetros en una sala puede cambiar el volumen percibido. El patrón depende de [[Delta_r]] y [[lambda]], de modo que otra frecuencia desplazaría la zona silenciosa.

# Ejemplo de aplicación real

## Contexto

Un sistema de cancelación activa de ruido intenta reducir un zumbido de baja frecuencia cerca del asiento de un pasajero. El micrófono de control detecta una señal casi periódica, y el altavoz de cancelación se ajusta para que la onda secundaria llegue en oposición de fase.

El objetivo no es eliminar el sonido en toda la cabina, sino reducir [[I_resultante]] en una región pequeña alrededor del oído. Por eso el sistema mide continuamente la fase y corrige la señal emitida.

## Estimación física

Si el zumbido tiene longitud de onda cercana a 1.4 m en aire, un desplazamiento de camino cercano a 0.7 m puede producir oposición de fase. En auriculares, el espacio es mucho menor, así que la electrónica introduce el retraso equivalente en fase en vez de confiar solo en geometría.

Como estimación cuantitativa, si la señal molesta aporta 1.0 mW/m² y la señal secundaria ajustada aporta 0.9 mW/m², el mínimo no llega a cero pero puede quedar cerca de 0.003 mW/m² en oposición de fase ideal. Esa lectura corresponde a una reducción mayor que 99 % respecto a la suma incoherente de 1.9 mW/m².

La intensidad residual depende de equilibrar la amplitud de la onda secundaria con la de la onda no deseada. Si la señal secundaria es demasiado débil, [[I_resultante]] baja poco; si es demasiado fuerte, aparece un resto con fase opuesta que también se oye. Un error de fase de solo una fracción apreciable de ciclo ya elevaría la intensidad residual y haría audible el zumbido.

## Interpretación

La aplicación muestra que la interferencia destructiva es un control local de fase y amplitud. Funciona muy bien para ruidos estables porque [[delta_phi]] puede mantenerse cerca de oposición, pero pierde eficacia con sonidos impulsivos o direcciones múltiples.

La variable dominante práctica es [[I_resultante]], porque resume lo que oye el usuario. Sin embargo, el ajuste real se hace corrigiendo [[delta_phi]] y equilibrando [[I1]] con [[I2]].
