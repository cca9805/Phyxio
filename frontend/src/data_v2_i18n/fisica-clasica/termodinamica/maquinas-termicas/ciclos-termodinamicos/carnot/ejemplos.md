# Ejemplo tipo examen

## Enunciado

Una central térmica de carbón opera con un ciclo ideal entre una caldera a 550 grados Celsius y un condensador a 35 grados Celsius. Calcular el rendimiento máximo de Carnot y determinar el calor que debe rechazar al foco frío si absorbe 800 kJ por cada kilogramo de vapor.

## Datos

- Temperatura de la caldera: 550 °C, equivalente a 823 K
- Temperatura del condensador: 35 °C, equivalente a 308 K
- Calor absorbido por kilogramo: 800 kJ/kg

## Definición del sistema

El sistema es el fluido de trabajo (vapor de agua) que recorre un ciclo cerrado entre los dos focos térmicos. Los focos se consideran reservorios de capacidad infinita. El ciclo es completamente reversible y no existe producción de entropía.

## Modelo físico

El ciclo de Carnot ideal se aplica con [[T_H]] de 823 K y [[T_C]] de 308 K. El rendimiento depende exclusivamente de estas dos temperaturas absolutas a través de la fórmula de [[eta_C]].

## Justificación del modelo

El modelo de Carnot es válido aquí porque el enunciado especifica un ciclo ideal, sin irreversibilidades. Las temperaturas de los focos están bien definidas y son constantes durante los procesos isotérmicos. El modelo fallaría si el enunciado indicara eficiencias isentrópicas reales de componentes o pérdidas por transferencia de calor a través de diferencias finitas de temperatura.

## Resolución simbólica

El rendimiento máximo se obtiene directamente de la fórmula de Carnot:

{{f:rendimiento_carnot}}

El balance energético permite calcular el calor rechazado:

{{f:balance_energetico_carnot}}

La relación entre los calores intercambiados confirma la coherencia del resultado:

{{f:relacion_calores_carnot}}

## Sustitución numérica

El rendimiento de Carnot se calcula como uno menos el cociente entre [[T_C]] y [[T_H]]: uno menos 308 dividido entre 823 da uno menos 0.3743, es decir, 0.6257. El rendimiento máximo es aproximadamente 62.6 %.

Para el calor rechazado, [[Q_C]] se obtiene como [[Q_H]] multiplicado por uno menos [[eta_C]]: 800 kJ/kg multiplicado por 0.3743 da aproximadamente 299.4 kJ/kg. Por tanto [[Q_C]] ≈ 299.4 kJ/kg.

El trabajo neto se obtiene por balance energético: [[Q_H]] menos [[Q_C]] da 800 menos 299.4, es decir, aproximadamente 500.6 kJ/kg. Por tanto [[W_neto]] ≈ 500.6 kJ/kg. Este valor se puede verificar también como [[eta_C]] multiplicado por [[Q_H]]: 0.6257 por 800 da 500.6 kJ/kg, confirmando coherencia interna.

## Validación dimensional

- Rendimiento: `[K]/[K]` resulta adimensional `[1]` ✓
- Calor rechazado: `[kJ/kg]` multiplicado por adimensional resulta `[kJ/kg]` ✓
- Trabajo neto: diferencia de energías en `[kJ/kg]`, dimensión `[M L² T⁻²]` por unidad de masa ✓

## Interpretación física

Un rendimiento de Carnot de 62.6 % significa que, en el mejor caso teórico posible, solo el 62.6 % del calor suministrado puede convertirse en trabajo mecánico. El 37.4 % restante debe cederse obligatoriamente como [[Q_C]] al foco frío, por imposición de la segunda ley de la termodinámica. Ninguna mejora de diseño puede superar este límite mientras los focos estén a 823 K y 308 K.

Si la temperatura de la caldera pudiera elevarse a 1000 K manteniendo el condensador a 308 K, el rendimiento de Carnot subiría al 69.2 %, mostrando que la inversión en materiales resistentes a alta temperatura tiene fundamento termodinámico directo. El [[W_neto]] por kilogramo pasaría de 500.6 a 553.6 kJ/kg, un incremento del 10.6 % en potencia disponible.

Por el contrario, mejorar el condensador reduciendo [[T_C]] de 308 K a 290 K solo elevaría el rendimiento al 64.8 %, un incremento menor porque el denominador ya es grande. La estrategia de elevar [[T_H]] es termodinámicamente más eficiente que reducir [[T_C]] cuando [[T_H]] ya es elevada.

# Ejemplo de aplicación real

## Contexto

Una planta de cogeneración industrial utiliza una turbina de gas con temperatura de entrada de 1200 K y rechaza calor a un sistema de recuperación a 400 K. El ingeniero necesita determinar el límite termodinámico absoluto para evaluar el margen de mejora de la instalación actual, que alcanza un rendimiento real del 38 %.

## Estimación física

El rendimiento máximo de Carnot entre estos focos se obtiene del cociente de temperaturas:

{{f:rendimiento_carnot}}

Calculando uno menos 400 dividido entre 1200 se obtiene uno menos 0.3333, es decir, aproximadamente 0.6667 o 66.7 %. Esta estimación del orden de magnitud del límite termodinámico permite evaluar la escala del margen de mejora. El rendimiento real de la planta es 38 %, lo que representa un 57 % del rendimiento de Carnot.

A partir del balance energético, si la planta consume 50 MW térmicos de [[Q_H]], el [[W_neto]] máximo sería 50 MW multiplicado por 0.667, es decir, 33.3 MW. El calor rechazado mínimo al foco frío sería [[Q_C]] de 50 menos 33.3, es decir, 16.7 MW. El trabajo real es 50 multiplicado por 0.38, es decir, 19 MW, con un rechazo real de 31 MW al sistema de recuperación. La diferencia entre el [[W_neto]] teórico (33.3 MW) y el real (19 MW) indica 14.3 MW perdidos en irreversibilidades internas y externas.

{{f:balance_energetico_carnot}}

## Interpretación

La eficiencia real del 38 % frente al Carnot del 66.7 % indica que el 43 % del potencial termodinámico se pierde en irreversibilidades. Las principales fuentes son la transferencia de calor a diferencias finitas de temperatura, las pérdidas por fricción en la turbina y la combustión irreversible.

Para evaluar si la inversión en mejoras merece la pena, el ingeniero usa el rendimiento de Carnot como referencia absoluta: si la instalación ya operase al 60 % del Carnot (40 %), las mejoras restantes darían retornos decrecientes. El hecho de que opere al 57 % indica que todavía existe margen significativo de optimización. En términos de [[W_neto]], cada punto porcentual de mejora representa 0.5 MW adicionales de potencia eléctrica, justificando inversiones en regeneración y precalentamiento del aire de combustión.
