# Aplicaciones del equilibrio termodinámico

## 1. Medición de temperatura con termometros

Un termometro solo mide correctamente cuando alcanza equilibrio térmico con el cuerpo observado. Antes de ese momento, la lectura representa el propio sensor durante su relajación, no necesariamente el objeto. La condición central es que [[DeltaT]] entre sensor y muestra sea despreciable.

Variable dominante: [[T]], porque la lectura final debe ser una temperatura comun.

Limite de validez: Si el sensor extrae demasiado calor o [[tau]] es largo, la medición perturba el sistema y debe modelarse el transitorio.

En metrologia se espera varias veces el tiempo caracteristico antes de registrar el dato. Esta práctica convierte el equilibrio en una regla experimental concreta: no basta con tocar el objeto, hay que esperar a que desaparezca el gradiente térmico.

También permite estimar incertidumbre. Si la lectura cambia 0.5 K por minuto, el sistema aun no esta quieto para una medida de precision. Si cambia menos de 0.02 K por minuto y el instrumento resuelve 0.1 K, la diferencia restante queda por debajo de lo que el montaje puede distinguir. Asi, el equilibrio térmico se vuelve una decision ligada a resolucion, [[tau]] y perturbacion del sensor.

## 2. Pistones y recipientes con frontera movil

Un gas bajo pistón alcanza equilibrio mecánico cuando la presión interna compensa la presión externa efectiva. Si [[DeltaP]] es apreciable, el pistón acelera o se desplaza hasta cambiar el volumen. Esta aplicación aparece en maquinas térmicas, jeringas, cilindros y procesos cuasiestaticos.

Variable dominante: [[P]], porque determina la fuerza por unidad de area sobre la frontera.

Limite de validez: Si hay friccion grande, golpes, turbulencia o movimiento rápido, la presión interna puede no ser uniforme y el modelo de equilibrio instantaneo falla.

La utilidad práctica es decidir si puede usarse una ecuación de estado simple. Si el gas no esta en equilibrio mecánico, una sola presión global puede ocultar diferencias internas importantes.

En un laboratorio, esto afecta a la toma de datos en compresiones lentas. Si el pistón se mueve demasiado rápido, aparecen ondas de presión, rozamiento y calentamiento local; entonces [[P]] deja de ser una variable única para todo el gas. Esperar o mover el pistón en pasos pequenos aproxima una sucesion de estados de equilibrio y permite interpretar el proceso como cuasiestatico.

## 3. Diagramas de fase y cambios de estado

Las curvas de fusion, ebullicion y sublimacion representan coexistencia de fases en equilibrio. En una linea de fase, las fases comparten condiciones intensivas compatibles, incluido el potencial quimico [[mu]]. Si esas condiciones no se cumplen, una fase crece a costa de otra.

Variable dominante: [[mu]], porque decide la direccion neta de transferencia entre fases.

Limite de validez: Cerca de nucleacion, sobreenfriamiento o metastabilidad, el sistema puede tardar en alcanzar el equilibrio de fases aunque el diagrama indique la fase estable.

Esta aplicación muestra que equilibrio no significa ausencia de intercambio microscopico. Moleculas pasan de una fase a otra, pero las tasas netas se compensan y las cantidades macroscopicas permanecen constantes.

La lectura de [[mu]] es clave en mezclas, soluciones y vapor en contacto con liquido. Dos fases pueden tener concentraciones distintas y aun así estar en equilibrio si el potencial quimico de cada especie coincide en las fases que pueden intercambiarla. Por eso los diagramas de fase no se reducen a mirar temperatura: combinan [[T]], [[P]] y condiciones materiales.

## 4. Procesos industriales de mezcla y reaccion

En reactores y mezcladores, declarar equilibrio permite usar composiciones finales, constantes de equilibrio y balances simplificados. Si la afinidad [[A]] no se ha anulado, la reaccion o difusion continua avanzando y el estado observado es transitorio.

Variable dominante: [[A]], porque resume el impulso generalizado de evolucion.

Limite de validez: Si la cinética es lenta, puede haber conversion incompleta durante el tiempo de residencia; entonces hace falta un modelo cinético.

En industria, esta distincion evita sobredimensionar o subdimensionar equipos. Un reactor puede estar cerca del equilibrio térmico y lejos del equilibrio quimico, de modo que temperatura estable no garantiza composicion final estable.

Un ejemplo práctico es un reactor con buen control de temperatura pero cinética lenta. La camisa térmica puede mantener [[DeltaT]] pequeno, mientras la composicion sigue cambiando durante minutos u horas. Si se confunde estabilidad térmica con equilibrio completo, se calcula mal el rendimiento y se interpreta como limite termodinámico lo que en realidad es una limitacion cinética.

## 5. Climatizacion y confort térmico

Una habitacion se considera en equilibrio aproximado cuando aire, paredes y objetos tienen temperaturas cercanas y no hay corrientes térmicas relevantes. En la práctica suele haber equilibrio parcial: el aire puede estar mezclado, pero paredes, ventanas y ocupantes mantienen gradientes.

Variable dominante: [[DeltaT]], porque pequenas diferencias sostenidas producen flujos de calor perceptibles.

Limite de validez: Con radiacion solar, ventilacion forzada o equipos encendidos, el sistema puede estar en regimen estacionario, no en equilibrio termodinámico.

Esta aplicación explica por que dos habitaciones con la misma temperatura de aire pueden sentirse distintas. El equilibrio termodinámico completo incluiria intercambio radiativo, conveccion, humedad y contacto con superficies.

Para diseno de edificios, el concepto ayuda a separar confort estacionario de equilibrio real. Una habitacion puede mantener temperatura constante porque el equipo aporta calor continuamente, no porque hayan desaparecido los gradientes. En ese caso hay regimen estacionario con flujos sostenidos. Reconocer la diferencia permite evaluar aislamiento, potencia necesaria y tiempo de respuesta después de abrir una ventana o encender un sistema.
