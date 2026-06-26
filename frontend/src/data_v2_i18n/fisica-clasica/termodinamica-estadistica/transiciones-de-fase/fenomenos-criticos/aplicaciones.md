# Aplicaciones

## 1. Sensores magnéticos cerca de una transición continua
Variable dominante: [[susceptibilidad]]
Límite de validez: 10^-5 < |[[temperatura_reducida]]| < 10^-1 y campo externo suficientemente pequeño

En sensores magnéticos, una [[susceptibilidad]] grande permite convertir perturbaciones débiles en señales medibles. Cerca de [[temperatura_critica]], el material responde de forma colectiva porque la [[longitud_correlacion]] ha crecido y muchas regiones ya no actúan de manera independiente. Esto permite diseñar dispositivos sensibles a campos pequeños, pero también obliga a controlar ruido, deriva térmica y campos residuales. La predicción útil no es solo “más cerca es mejor”; si |[[temperatura_reducida]]| se hace demasiado pequeño, el redondeo por tamaño finito y la inestabilidad experimental pueden dominar. El diseño busca una ventana donde [[susceptibilidad]] sea alta, pero todavía reproducible. También se mide [[temperatura_reducida]] durante ciclos de calentamiento y enfriamiento para separar una respuesta crítica real de deriva instrumental. Si la curva cambia con el sentido del barrido, el supuesto de equilibrio se debilita y la calibración del sensor deja de ser universal.

## 2. Fluidos cerca del punto crítico
Variable dominante: [[longitud_correlacion]]
Límite de validez: la [[longitud_correlacion]] debe ser menor que el tamaño óptico o de muestra observado

En fluidos cercanos al punto crítico, las fluctuaciones de densidad se vuelven visibles porque [[longitud_correlacion]] aumenta. El sistema puede dispersar luz de forma intensa, no porque aparezcan partículas nuevas, sino porque regiones extensas fluctúan de manera coordinada. Medir la evolución de [[longitud_correlacion]] frente a [[temperatura_reducida]] permite estimar [[exponente_critico_nu]] y detectar si el experimento está realmente en la zona crítica. Si la señal satura al acercarse a [[temperatura_critica]], puede indicar límites de resolución o impurezas. La aplicación constriñe qué tan cerca se puede trabajar sin que la muestra deje de ser homogénea a escala experimental. En cámaras de alta precisión, esta información sirve para elegir iluminación, volumen de observación y velocidad de cambio térmico. Una rampa demasiado rápida puede producir gradientes de [[temperatura]] que imitan fluctuaciones críticas.

## 3. Materiales ferroeléctricos
Variable dominante: [[parametro_de_orden]]
Límite de validez: transición continua sin histéresis fuerte ni dominios bloqueados

En ferroeléctricos, el [[parametro_de_orden]] puede representar polarización espontánea. Su disminución al acercarse a [[temperatura_critica]] ayuda a caracterizar la pérdida de orden interno. La ley crítica con [[exponente_critico_beta]] permite comparar muestras tratadas térmicamente de manera distinta. Si dos muestras tienen el mismo exponente pero distinta [[amplitud_critica]], se interpreta que comparten clase crítica aproximada, aunque su escala material sea diferente. Esta aplicación predice la pérdida de polarización y ayuda a decidir rangos de operación. Si hay histéresis fuerte, el modelo crítico simple debe sustituirse por una descripción de dominios y transición posiblemente discontinua. La comparación entre varias frecuencias de medida permite detectar si los dominios siguen el equilibrio o si la respuesta queda congelada. Ese detalle decide si el exponente obtenido tiene sentido físico.

## 4. Simulaciones estadísticas
Variable dominante: [[temperatura_reducida]]
Límite de validez: tamaño de red suficientemente grande y varios tamaños para comprobar escalado finito

En simulaciones de modelos de espines o redes, [[temperatura_reducida]] organiza los datos obtenidos para [[parametro_de_orden]], [[susceptibilidad]], [[longitud_correlacion]] y [[calor_especifico]]. La ventaja es que se puede repetir el cálculo con distintos tamaños de sistema y observar cómo cambia la saturación. Si el pico de [[susceptibilidad]] aumenta con el tamaño y se desplaza hacia [[temperatura_critica]], hay evidencia de comportamiento crítico. Esta aplicación mide exponentes y comprueba universalidad. No basta con ver un pico: hay que analizar si la pendiente logarítmica y el colapso de datos son coherentes con [[exponente_critico_gamma]] y [[exponente_critico_nu]]. Las simulaciones también permiten medir directamente fluctuaciones y correlaciones espaciales, algo muy difícil en muchos experimentos. Por eso sirven como banco de pruebas para distinguir efectos críticos universales de detalles microscópicos.

## 5. Diseño térmico en materiales funcionales
Variable dominante: [[calor_especifico]]
Límite de validez: anomalía crítica separable de contribuciones regulares de fondo

Cerca de una transición continua, el [[calor_especifico]] puede mostrar una anomalía que modifica la capacidad de almacenar energía térmica. En materiales funcionales, esta variación afecta estabilidad, disipación y respuesta frente a cambios de [[temperatura]]. Medir el [[calor_especifico]] frente a [[temperatura_reducida]] permite identificar [[exponente_critico_alpha]] o, al menos, detectar si la anomalía es pico, cúspide o crecimiento suave. La aplicación predice rangos donde el material amortigua o amplifica cambios térmicos. El límite práctico es que el fondo regular del material puede ocultar la singularidad; por eso se deben restar contribuciones no críticas antes de interpretar exponentes. Esta lectura es importante en criogenia, memorias térmicas y materiales con cambios de fase suaves. Una anomalía mal atribuida puede llevar a sobreestimar la energía que el material puede absorber cerca de [[temperatura_critica]].

En conjunto, las cinco aplicaciones muestran que la criticidad no es un adorno teórico: sirve para medir sensibilidad, alcance espacial, pérdida de orden y anomalías térmicas. La condición común es controlar [[temperatura_reducida]] y no confundir una curva redondeada por limitaciones reales con la divergencia ideal del modelo. En cada caso conviene registrar incertidumbre térmica, tamaño efectivo de muestra y posible campo externo, porque esos tres factores pueden cambiar la lectura de [[susceptibilidad]], [[longitud_correlacion]] o [[calor_especifico]] sin cambiar la física microscópica.