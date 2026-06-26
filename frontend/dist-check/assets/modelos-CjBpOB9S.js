const e=`## Modelo ideal\r
El modelo ideal de tensión superficial supone una interfaz limpia, estable y con tensión uniforme [[sigma]]. La frontera se trata como una superficie geométrica sin espesor, capaz de producir fuerza cuando existe una longitud de contacto [[L]] y de generar salto de presión si la superficie está curvada.\r
\r
En este modelo se conservan las magnitudes que describen la interfaz: [[sigma]], [[L]], [[R]], [[r]], [[theta]] y [[h]]. Se ignoran evaporación, contaminación superficial, rugosidad microscópica, histéresis de mojado y variaciones locales de temperatura. La simplificación central es que la interfaz responde de forma reversible y que la geometría puede describirse con radios y ángulos bien definidos.\r
\r
## Hipótesis\r
- **Interfaz limpia:** si hay surfactantes, polvo o grasa, [[sigma]] puede cambiar localmente y la fuerza calculada deja de representar una propiedad uniforme.\r
- **Geometría estable:** si el menisco vibra o se rompe, [[R]] y [[theta]] no son constantes y las fórmulas estáticas pierden valor.\r
- **Longitud efectiva correcta:** si se usa diámetro en lugar de perímetro, o una cara en lugar de dos, [[F]] queda mal escalada.\r
- **Gravedad uniforme:** en capilaridad ordinaria se toma [[g]] constante; si la aceleración cambia, también cambia el balance de [[h]].\r
- **Tubo estrecho y mojado definido:** la fórmula capilar requiere [[r]] conocido y un ángulo [[theta]] físicamente medible.\r
\r
## Dominio de validez cuantitativo\r
Nivel cuantitativo: El modelo de tensión superficial es físicamente significativo cuando la fuerza superficial [[F]] es comparable al peso o la presión del sistema, típicamente para 0,02 N/m <= [[sigma]] <= 0,5 N/m. Para el agua, usar [[sigma]] cercano a 0,072 N/m permite detectar órdenes de magnitud incorrectos. La validez del modelo capilar exige un radio [[r]] < 5 mm, ya que para radios mayores el ascenso se vuelve despreciable frente a los efectos de menisco en la pared.\r
\r
En capilaridad, el ascenso apreciable aparece sobre todo cuando [[r]] está por debajo de unos milímetros. Con radios mayores, el peso de la columna crece y [[h]] se vuelve pequeño. En interfaces curvas, el salto [[dp]] crece al reducir [[R]]; radios micrométricos pueden producir kilopascales, mientras radios milimétricos producen valores mucho menores.\r
\r
## Señales de fallo del modelo\r
Una señal clara de fallo es que el resultado dependa demasiado de un ángulo de contacto mal definido. Si pequeñas variaciones de [[theta]] cambian el signo o el valor de [[h]], el problema necesita datos experimentales más precisos.\r
\r
Otra señal aparece cuando la superficie está contaminada: gotas que no son reproducibles, meniscos con histéresis o películas que se rompen antes del equilibrio. También falla el modelo si la dinámica domina el proceso. En ese caso Re, viscosidad y velocidad deben entrar en la lectura, porque la interfaz ya no se comporta como una frontera estática.\r
\r
## Modelo extendido o alternativo\r
El modelo extendido incorpora surfactantes, variación de temperatura, histéresis del ángulo de contacto y dinámica de mojado. En lugar de una única tensión [[sigma]], puede aparecer una tensión efectiva dependiente de posición, tiempo o concentración.\r
\r
Conviene cambiar al modelo extendido cuando hay surfactantes, histéresis o movimiento apreciable. Para chorros, gotas en movimiento o ruptura de películas, se combinan balances capilares con viscosidad e inercia. Ahí Re no sustituye a la tensión superficial, pero indica si el movimiento puede alterar la forma antes de que se alcance el equilibrio.\r
\r
## Comparación operativa\r
| Modelo | Precisión | Complejidad | Uso adecuado |\r
|---|---:|---:|---|\r
| Interfaz limpia estática | Alta si la geometría es estable | Baja | Gotas, meniscos y capilares de laboratorio |\r
| Capilaridad con ángulo real | Media-alta | Media | Tubos con mojado medido |\r
| Interfaz contaminada | Variable | Alta | Jabones, aceites, mezclas y biología |\r
| Modelo dinámico | Alta en procesos rápidos | Alta | Chorro, impacto de gotas y mojado en movimiento |`;export{e as default};
