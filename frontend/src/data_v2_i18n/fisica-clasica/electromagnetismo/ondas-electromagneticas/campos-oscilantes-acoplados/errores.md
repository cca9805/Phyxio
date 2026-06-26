## Errores conceptuales


### Error 1: Creer que las ondas electromagnéticas necesitan un medio material para propagarse

**Por qué parece correcto**
Se produce por una analogía incorrecta con las ondas mecánicas ordinarias (como el sonido o las olas del mar), donde la vibración necesita obligatoriamente partículas materiales que colisionen para transmitir la energía de un punto a otro.

**Por qué es incorrecto**
La radiación electromagnética no es una vibración de átomos, sino la oscilación autoinducida de campos eléctricos [[amplitud_del_campo_electrico]] y magnéticos [[amplitud_del_campo_magnetico]] en el espacio vacío. Según las leyes del electromagnetismo, un campo variable induce al otro de forma mutua y perpetua sin depender de la materia.

**Señal de detección**
Intentar buscar un término de densidad de partículas o módulo elástico del medio al calcular la velocidad de la luz [[velocidad_de_la_luz_en_el_vacio]].

**Corrección conceptual**
La luz y demás ondas electromagnéticas se propagan de manera autónoma gracias al acoplamiento dinámico de sus campos. La presencia de materia de hecho reduce su velocidad.

**Mini-ejemplo de contraste**
Si la luz necesitara un medio material, el vacío interestelar bloquearía por completo la radiación del Sol, dejándonos en oscuridad absoluta instantánea. Sin embargo, la luz solar viaja 150 millones de kilómetros a través del vacío puro para llegar a la Tierra.

## Errores de modelo


### Error 2: Asumir que la onda es estrictamente plana en las proximidades del emisor

**Por qué parece correcto**
Es una simplificación atractiva porque permite modelar frentes de onda paralelos infinitos con amplitud constante, facilitando enormemente los cálculos al evitar términos de decaimiento geométrico.

**Por qué es incorrecto**
Cualquier emisor físico real (como un dipolo o una antena) produce frentes de onda curvados o esféricos en sus proximidades (campo cercano). Violar esta hipótesis lleva a ignorar que la intensidad cae drásticamente a distancias cortas.

**Señal de detección**
Obtener mediciones donde la amplitud del campo eléctrico decrece de forma inversa a la distancia radial \(1/r\), lo cual es incompatible con la amplitud constante del modelo plano.

**Corrección conceptual**
El modelo de onda plana es solo una aproximación de campo lejano. Para distancias cortas a la fuente, debemos emplear el modelo de onda esférica.

**Mini-ejemplo de contraste**
Si una antena WiFi de 1 W emitiera una onda perfectamente plana infinita, la intensidad de la señal sería idéntica a 1 metro y a 10 kilómetros de distancia, permitiendo cobertura infinita con potencia nula, lo cual viola la conservación de la energía.

## Errores matemáticos


### Error 3: Tratar las amplitudes eléctrica y magnética como magnitudes numéricamente equivalentes

**Por qué parece correcto**
Proviene de una confusión de magnitudes debido a que ambos campos transportan exactamente la misma cantidad de energía en cada ciclo de la onda, induciendo a pensar que sus amplitudes deben ser numéricamente iguales.

**Por qué es incorrecto**
En el Sistema Internacional de Unidades, el campo eléctrico [[amplitud_del_campo_electrico]] (en voltios por metro) y el campo magnético [[amplitud_del_campo_magnetico]] (en teslas) están escalados por la inmensa constante de la velocidad de la luz [[velocidad_de_la_luz_en_el_vacio]]. Esto provoca una gran asimetría en sus valores numéricos.

**Señal de detección**
Obtener resultados numéricos donde la amplitud magnética [[amplitud_del_campo_magnetico]] es del mismo orden de magnitud que la amplitud eléctrica [[amplitud_del_campo_electrico]] (ej. obtener un campo magnético de 10 T para un campo eléctrico de 10 V/m).

**Corrección conceptual**
Usa siempre la relación [[amplitud_del_campo_electrico]] = [[velocidad_de_la_luz_en_el_vacio]] [[amplitud_del_campo_magnetico]]. El valor numérico del campo magnético siempre será minúsculo en el SI frente al eléctrico.

**Mini-ejemplo de contraste**
Si calculas una onda ordinaria con campo eléctrico \(30\,\mathrm{V/m}\) y assumes que el campo magnético es también \(30\,\mathrm{T}\), estarías describiendo un campo magnético colosal capaz de colapsar la materia ordinaria y destrozar cualquier dispositivo electrónico cercano. El valor correcto es \(10^{-7}\,\mathrm{T}\).

## Errores de interpretación


### Error 4: Pensar que el campo eléctrico y el magnético están desfasados temporalmente

**Por qué parece correcto**
Se produce por una interpretación errónea de la inducción, sugiriendo que la creación de un campo a partir del otro requiere un "tiempo de retraso", lo que retrasaría una fase respecto a la otra.

**Por qué es incorrecto**
En una onda plana libre en el vacío, el acoplamiento espacial y temporal de las derivadas parciales en las ecuaciones de Maxwell impone que los máximos y mínimos de ambos campos coincidan de forma estrictamente simultánea en fase.

**Señal de detección**
Encontrar representaciones gráficas o datos analíticos donde el campo magnético cruza por cero cuando el campo eléctrico está en su valor máximo.

**Corrección conceptual**
Tanto [[amplitud_del_campo_electrico]] como [[amplitud_del_campo_magnetico]] alcanzan sus máximos, mínimos y ceros en perfecto sincronismo temporal y espacial en una onda plana libre.

**Mini-ejemplo de contraste**
Si estuvieran desfasados 90 grados, el flujo neto de energía definido por el vector de Poynting oscilaría de un lado a otro en promedio cero, impidiendo el transporte efectivo de energía a través del espacio.

## Regla de autocontrol rápido

Antes de dar por bueno cualquier cálculo o análisis, aplica esta regla operativa infalible: multiplica siempre el valor hallado del campo magnético [[amplitud_del_campo_magnetico]] por el factor de escala de la velocidad de la luz \(3 \cdot 10^8\,\mathrm{m/s}\). El resultado obtenido debe ser idéntico al valor de tu campo eléctrico [[amplitud_del_campo_electrico]]. Si no coinciden en este factor inmenso de escala, has cometido un error algebraico o de unidades.