# Aplicaciones

## 1. Difusión de un gas en una caja
Variable dominante: [[multiplicidad_macroestado]]
Límite de validez: partículas no fuertemente correlacionadas y [[numero_particulas]] suficientemente grande, por ejemplo N > 100
La difusión de un gas se entiende mejor cuando se distingue el [[microestado]] del [[macroestado]]. Cada configuración microscópica de posiciones y velocidades es distinta, pero muchas de ellas producen el mismo aspecto macroscópico: gas repartido por todo el [[volumen]]. La [[multiplicidad_macroestado]] del estado distribuido supera enormemente a la de un gas concentrado en una esquina. Por eso la [[probabilidad_macroestado]] del reparto uniforme domina. Lo medido no es la trayectoria individual de cada molécula, sino una densidad observable que agrupa infinidad de microestados. La [[entropia]] resume esa multiplicidad. El modelo constriñe la interpretación: no dice que la concentración sea imposible, sino que su peso estadístico es despreciable.

## 2. Barajado de cartas como analogía estadística
Variable dominante: [[numero_microestados]]
Límite de validez: analogía combinatoria sin energía física explícita ni interacción molecular
Una baraja ayuda a visualizar [[numero_microestados]]. Cada orden concreto de cartas es un [[microestado]]. Un [[macroestado]] puede ser “cartas mezcladas sin patrón evidente” o “cartas agrupadas por palo”. El primer [[macroestado]] contiene muchísimas más ordenaciones que el segundo. Esta aplicación no mide [[energia_total]] ni [[volumen]], pero entrena la lectura de multiplicidad. La [[probabilidad_macroestado]] de una familia de órdenes depende de cuántos microestados la componen, no de lo fácil que sea describirla con palabras. La analogía sirve para desmontar la idea de que lo probable es lo visualmente complejo; lo probable es lo que ocupa más espacio en el conjunto de configuraciones.

## 3. Distribución de energía en sólidos
Variable dominante: [[macroestado]]
Límite de validez: equilibrio aproximado y energía total fija dentro de una tolerancia relativa menor que 1 %
En un sólido aislado, la [[energia_total]] puede repartirse entre muchos modos microscópicos. Un [[microestado]] especificaría una distribución concreta de energía entre esos modos. Un [[macroestado]] describe propiedades observables como energía total, temperatura efectiva o distribución global. La [[multiplicidad_macroestado]] permite saber qué macrostados son estadísticamente dominantes. Si un [[macroestado]] energético agrupa más configuraciones compatibles, tendrá mayor [[probabilidad_macroestado]]. La [[entropia]] traduce ese conteo a una magnitud que puede conectarse con la termodinámica. La aplicación predice qué distribuciones macroscópicas serán estables y cuáles serán fluctuaciones raras.

## 4. Información perdida en sensores macroscópicos
Variable dominante: [[microestado]]
Límite de validez: sensores que miden promedios y no resuelven trayectorias individuales
Un termómetro, un manómetro o una cámara de baja resolución no registran cada [[microestado]]. Registran un [[macroestado]] resumido. Esa pérdida de detalle no es un defecto accidental; es la forma normal de medir sistemas con muchos grados de libertad. La [[multiplicidad_macroestado]] cuantifica cuántos estados microscópicos quedan ocultos bajo la misma lectura. En diseño experimental, esto ayuda a saber qué se está midiendo realmente: una clase de configuraciones, no una configuración exacta. La [[probabilidad_macroestado]] permite estimar si una lectura es típica o rara dentro del conjunto compatible. El límite aparece cuando el sensor ya no representa bien el [[macroestado]] elegido.

## 5. Entropía en modelos computacionales
Variable dominante: [[entropia]]
Límite de validez: estados discretizados de forma homogénea y conteos positivos de multiplicidad
En simulaciones, los microdatos pueden agruparse en celdas, rangos de energía o clases observables. Cada celda funciona como [[macroestado]] y cada configuración interna como [[microestado]]. La [[multiplicidad_macroestado]] permite calcular una [[entropia]] asociada a la distribución simulada. Esto se usa para comparar si una simulación explora muchas configuraciones o queda atrapada en pocas. [[constante_boltzmann]] conecta el conteo con la escala física cuando el modelo representa un sistema termodinámico. La aplicación constriñe la calidad del modelo: si la discretización cambia, cambia el conteo, y la comparación de entropías puede perder sentido.

## 6. Red de espines discretos como modelo de referencia
Variable dominante: [[multiplicidad_macroestado]]
Límite de validez: espines sin interacción mutua, [[numero_particulas]] fijo y estados discretos bien definidos
Una red de N espines con dos estados posibles cada uno ofrece un modelo exactamente contable. Cada configuración concreta de orientaciones es un [[microestado]], y el [[macroestado]] se define por el número total de espines en cada dirección. La [[multiplicidad_macroestado]] para un [[macroestado]] con k espines en una dirección y N−k en la otra es el coeficiente binomial C(N,k). El [[macroestado]] con k ≈ N/2 agrupa la [[multiplicidad_macroestado]] máxima y domina la distribución. La [[probabilidad_macroestado]] de encontrar todos los espines en la misma dirección es minúscula en sistemas grandes, aunque ese [[microestado]] sea perfectamente posible. Este modelo entrena la lectura de multiplicidad sin recurrir a simulación: el conteo es analítico y el resultado ilustra por qué lo uniforme domina estadísticamente.

## 7. Lectura de ruido en sensores de precisión
Variable dominante: [[numero_microestados]]
Límite de validez: fuente de ruido térmica o cuántica, señal macroscópica bien definida y separación de escalas
Un sensor de alta precisión registra señales macroscópicas, pero el ruido de fondo refleja la existencia de muchos [[microestado]] compatibles con la misma señal media. Cada fluctuación observada corresponde a un [[microestado]] diferente bajo el mismo [[macroestado]] de señal promedio. La [[multiplicidad_macroestado]] del estado de ruido caracteriza cuántas configuraciones microscópicas producen un nivel de ruido dado. Si la [[entropia]] de esa distribución es alta, la señal está respaldada por muchos [[microestado]] equivalentes y el ruido es difícilmente elimiable sin reducir el conjunto accesible, por ejemplo enfriando el sistema. Esta aplicación conecta la distinción [[microestado]]-[[macroestado]] con diseño de instrumentación y límites físicos de medición.