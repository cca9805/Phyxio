const e=`# Ejemplo tipo examen

## Enunciado
Una vivienda unifamiliar situada en una zona climática de inviernos moderados tiene una [[demanda térmica|q_demanda]] media diaria estimada de 180 [[megajulios|MJ]]. Para cubrir esta demanda, el propietario ha instalado una bomba de calor aerotérmica que, según las condiciones de diseño, opera con un [[coeficiente de rendimiento|cop]] medio estacional de 3.5. Si el [[precio de la electricidad|precio_kwh]] actual es de 0.22 euros por cada [[kilovatio-hora|kWh]] facturado, se solicita determinar:
1. La energía eléctrica total en [[MJ]] que el compresor debe consumir en un día.
2. El [[ahorro]] energético porcentual del sistema frente a un sistema de calefacción tradicional por resistencia eléctrica (estufa convencional).
3. El [[coste]] diario de mantener la vivienda a la temperatura de confort.
4. La cantidad de [[calor ambiental|q_ambiente]] que el sistema ha sido capaz de "extraer" gratuitamente del aire exterior.

## Datos
- [[Demanda térmica|q_demanda]] diaria: 180 [[MJ]].
- [[Coeficiente de rendimiento|cop]]: 3.5.
- [[Precio de la energía eléctrica|precio_kwh]]: 0.22 euros por cada [[kilovatio-hora|kWh]].
- Factor de conversión de unidades: 1 [[kilovatio-hora|kWh]] equivale a 3.6 [[megajulios|MJ]].

## Definición del sistema
El sistema bajo estudio es el volumen de control que engloba la vivienda y la unidad exterior de la bomba de calor. Se considera un sistema abierto desde el punto de vista térmico (intercambia calor con el exterior y la vivienda) y cerrado desde el punto de vista de la masa del fluido refrigerante que circula por el circuito interno. Las fronteras del sistema son las paredes del edificio y la superficie de intercambio del evaporador exterior.

## Modelo físico
Se aplica el modelo de balance energético en estado estacionario para un ciclo de compresión inverso. El sistema satisface la demanda térmica mediante la entrega de [[calor entregado|q_calor]], consumiendo un [[trabajo eléctrico|w_elec]] que depende directamente de la eficiencia operativa del ciclo. La relación fundamental que rige este transporte de energía es la definición del rendimiento del ciclo de bombeo:

{{f:cop_definicion}}

Se asume que el sistema es capaz de extraer energía térmica del foco frío (aire exterior) mediante el proceso de evaporación del refrigerante, cumpliendo con la primera ley de la termodinámica:

{{f:balance_primera_ley}}

Donde [[q_ambiente]] representa la energía renovable capturada.

## Justificación del modelo
El uso del modelo de balance en estado estacionario está justificado porque el enunciado proporciona valores medios diarios de demanda y rendimiento. Se considera que, aunque las temperaturas fluctúan durante el día, el comportamiento integrado del sistema se describe correctamente mediante promedios temporales para una estimación económica y energética de facturación. El modelo dejaría de ser válido si la temperatura exterior descendiera por debajo del punto de congelación crítica del refrigerante o si se produjeran paradas prolongadas que invalidaran el estado de flujo continuo.

## Resolución simbólica
Para obtener la energía eléctrica consumida ([[e_elec]]), que en este balance coincide con el [[trabajo eléctrico|w_elec]] total necesario para mover la carga térmica, despejamos de la definición de [[cop]]:

{{f:consumo_equivalente}}

El [[ahorro]] relativo se obtiene comparando el consumo de la bomba de calor con el de un sistema resistivo de referencia (donde el [[cop]] tiene un valor unitario), lo que nos da la fracción de energía evitada:

{{f:ahorro_relativo}}

Finalmente, el [[coste]] diario se calcula multiplicando el consumo eléctrico acumulado por la tarifa unitaria vigente:

{{f:facturacion_total}}

El [[calor ambiental|q_ambiente]] extraído del aire exterior resulta de la diferencia neta entre el [[calor entregado|q_calor]] y el [[trabajo eléctrico|w_elec]] invertido, siguiendo el balance de la primera ley de la termodinámica.

## Sustitución numérica
1. **Energía eléctrica diaria ([[trabajo eléctrico|w_elec]])**:
Para satisfacer una entrega de [[calor entregado|q_calor]] de 180 [[megajulios|MJ]] con un [[COP|cop]] de 3.5:
Energía eléctrica: 180 [[megajulios|MJ]] dividido por 3.5, lo que resulta en 51.43 [[megajulios|MJ]].
Este es el valor del [[trabajo eléctrico|w_elec]] diario expresado en [[megajulios|MJ]].

2. **[[ahorro]] porcentual**:
Valor del [[ahorro]]: uno menos el inverso de 3.5, lo que resulta en 0.714.
Expresado en porcentaje, el sistema permite un **[[ahorro]] del 71.4%** de la energía eléctrica frente a una estufa convencional.

3. **Consumo y [[coste]] diario**:
Convertimos primero la energía de [[megajulios|MJ]] a [[kilovatio-hora|kWh]] comerciales:
Consumo: 51.43 [[megajulios|MJ]] dividido por 3.6, lo que resulta en 14.29 [[kilovatio-hora|kWh]].
Multiplicamos por el [[precio de la energía|precio_kwh]] de 0.22 euros por [[kilovatio-hora|kWh]]:
[[coste]]: 14.29 [[kilovatio-hora|kWh]] multiplicado por 0.22 euros por [[kilovatio-hora|kWh]], lo que resulta en 3.14 euros.

4. **[[calor ambiental|q_ambiente]] extraído**:
Restando el [[trabajo eléctrico|w_elec]] al [[calor entregado|q_calor]]:
[[calor ambiental|q_ambiente]]: 180 [[megajulios|MJ]] menos 51.43 [[megajulios|MJ]], lo que resulta en 128.57 [[megajulios|MJ]].

## Validación dimensional
- Para el consumo eléctrico: Se divide una energía M L² T⁻² por un coeficiente adimensional 1, resultando en una energía M L² T⁻². Coherente.
- Para el [[ahorro]]: Es la resta de dos magnitudes adimensionales 1 - 1, resultando en una fracción adimensional 1. Coherente.
- Para el [[coste]]: El producto de una energía M L² T⁻² (en forma de [[kilovatio-hora|kWh]]) por un precio unitario Moneda por cada M L² T⁻² cancela las dimensiones de energía y deja la unidad monetaria. Coherente.

## Interpretación física
El resultado obtenido revela el potente mecanismo de "apalancamiento térmico" que caracteriza a esta tecnología. Para satisfacer una demanda de 180 [[megajulios|MJ]], el usuario solo ha tenido que comprar 51.4 [[megajulios|MJ]] de energía eléctrica. Esto no significa que se esté creando energía de la nada (lo cual violaría la primera ley), sino que el compresor está realizando un [[trabajo eléctrico|w_elec]] para "obligar" a 128.6 [[megajulios|MJ]] de [[calor ambiental|q_ambiente]] dispersa en el aire exterior (un foco de baja temperatura) a concentrarse y entrar en la vivienda.

Físicamente, el sistema actúa como un multiplicador de eficiencia: por cada julio de [[trabajo eléctrico|w_elec]] que consumimos, el entorno nos "regala" 2.5 julios adicionales de [[calor ambiental|q_ambiente]] gracias al cambio de fase del refrigerante. Esto implica que la bomba de calor es, en esencia, un captador de energía solar indirecta almacenada en el aire, convirtiéndose en una herramienta de sostenibilidad masiva.

# Ejemplo de aplicación real

## Contexto
Imaginemos un hotel de montaña que actualmente utiliza una caldera de gasóleo antigua para calentar el agua de su piscina climatizada. El gerente se plantea sustituirla por una bomba de calor de alta eficiencia aprovechando que la temperatura del agua requerida es relativamente baja (unos 28 grados Celsius). Se quiere estimar el impacto en la sostenibilidad del hotel si se logra un [[COP|cop]] real de 4.8 durante la temporada de uso.

## Estimación física
Para una piscina que requiere un aporte energético del orden de 1.000.000 [[megajulios|MJ]] anuales para compensar las pérdidas por evaporación y radiación:
- Con el sistema actual de combustión, el hotel debe comprar y quemar combustible equivalente a ese millón de [[megajulios|MJ]].
- Con una bomba de calor con [[COP|cop]] de 4.8, el hotel solo pagará por 208.333 [[megajulios|MJ]] de [[trabajo eléctrico|w_elec]].
- Los restantes 791.667 [[megajulios|MJ]] de [[calor entregado|q_calor]] serán capturados gratuitamente del aire de la montaña.

Si el [[precio de la electricidad|precio_kwh]] es de 0.20 euros por [[kilovatio-hora|kWh]], el hotel pasaría de pagar unos 55.555 euros anuales (estimados en energía equivalente) a pagar tan solo unos 11.574 euros, logrando un [[ahorro]] económico de casi 44.000 euros al año.

## Interpretación
La clave del éxito en esta aplicación real reside en el bajo "salto térmico" requerido para calentar agua a 28 grados Celsius. Al ser la diferencia de temperatura pequeña, el compresor realiza un esfuerzo mecánico mínimo, maximizando el [[COP|cop]] operativo. Físicamente, esto indica que la bomba de calor es imbatible en aplicaciones de baja temperatura, donde el [[ahorro]] económico se traduce directamente en una reducción masiva de la huella de carbono del establecimiento, al sustituir la quema de hidrocarburos por la captura de [[calor ambiental|q_ambiente]] renovable.
`;export{e as default};
