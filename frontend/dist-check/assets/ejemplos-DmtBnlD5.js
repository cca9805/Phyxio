const e=`# Ejemplo tipo examen

## Enunciado
Se bombea agua a 20 grados Celsius (con [[rho]] igual a 998 kg/m^3 y [[eta]] igual a 1.0 por 10 elevado a menos 3 Pa*s) a través de una tubería horizontal de 5 cm de diámetro interno. Si la velocidad media del flujo es de 0.15 m/s, determine:
1. El número de Reynolds [[Re]] del flujo.
2. El régimen de flujo (laminar, transición o turbulento).
3. La velocidad crítica a la cual el flujo dejaría de ser laminar (asuma Reynolds crítico igual a 2300).

## Datos
- Densidad [[rho]]: 998 kg/m^3
- Viscosidad dinámica [[eta]]: 1.0 por 10 elevado a menos 3 Pa*s
- Diámetro (longitud característica [[L]]): 0.05 m
- Velocidad [[v]]: 0.15 m/s
- Viscosidad cinemática [[nu]]: aproximadamente 1.0 por 10 elevado a menos 6 m^2/s
- Reynolds crítico: 2300

## Definición del sistema
El sistema consiste en un conducto cilíndrico cerrado de sección transversal constante, representativo de una red de distribución de agua en un entorno industrial. El fluido es agua pura a temperatura ambiente, lo que permite considerarlo como un fluido newtoniano e incompresible. El análisis se centra en una sección de la tubería lo suficientemente alejada de codos, válvulas o entradas para garantizar que el perfil de velocidades esté totalmente desarrollado.

## Modelo físico
Para predecir el comportamiento del flujo, utilizaremos el número de Reynolds [[Re]] como parámetro de control. Este modelo físico se basa en la competencia dinámica entre las fuerzas inerciales del fluido (que tienden a desordenar las trayectorias de las partículas) y las fuerzas de fricción viscosa (que disipan energía y mantienen las capas de fluido paralelas). La clasificación del régimen se rige por los umbrales empíricos clásicos para flujo interno.

## Justificación del modelo
El número de Reynolds es la herramienta fundamental en este escenario porque el agua es un fluido con viscosidad constante bajo las condiciones dadas. Al ser un problema macroscópico, los efectos de tensión superficial son despreciables. El uso de [[Re]] permite reducir todas las variables físicas ([[rho]], [[v]], [[L]], [[eta]]) a un único valor que define unívocamente la estructura del flujo, permitiendo decidir si se deben aplicar ecuaciones lineales (laminares) o modelos de turbulencia complejos.

## Resolución simbólica
0. Cálculo de la viscosidad cinemática [[nu]] usando la relación entre viscosidad dinámica y densidad.

{{f:re_cinematico}}

1. Cálculo del número de Reynolds [[Re]] con la forma completa y su forma equivalente en términos de [[nu]].

{{f:re_dinamico}}

2. Cálculo de la velocidad crítica para Reynolds crítico igual a 2300, despejando la velocidad en la definición de Reynolds.

## Sustitución numérica
**Paso 0: Viscosidad cinemática**
Al dividir la viscosidad dinámica entre la densidad, se obtiene [[nu]] aproximadamente igual a 1.002 por 10 elevado a menos 6 m^2/s.

**Paso 1: Cálculo de [[Re]]**
Sustituyendo los datos, el resultado es [[Re]] aproximadamente igual a 7485.

**Paso 2: Identificación del régimen**
Dado que [[Re]] es aproximadamente 7485, valor significativamente mayor que el umbral de transición completa de 4000, el flujo se clasifica como **totalmente turbulento**.

**Paso 3: Cálculo de la velocidad crítica**
Despejando con Reynolds crítico 2300, la velocidad crítica resulta aproximadamente 0.0461 m/s.

## Análisis de sensibilidad
Es importante notar cómo pequeños cambios en las condiciones afectan el resultado:
- Si el agua se calentara a 80 grados Celsius, la viscosidad [[eta]] caería a un tercio de su valor. Esto triplicaría el número de Reynolds [[Re]], haciendo que el flujo fuera aún más caótico sin cambiar la velocidad [[v]].
- Si la tubería fuera de 10 cm en lugar de 5 cm, [[Re]] se duplicaría, demostrando que en tuberías grandes la turbulencia es casi inevitable.

## Validación dimensional
Realizamos el análisis de unidades para asegurar que [[Re]] es adimensional. La densidad por velocidad y longitud tiene las mismas dimensiones que la viscosidad dinámica, por lo que el cociente final no tiene unidades. Esta cancelación confirma la validez del procedimiento matemático.

## Interpretación física
El resultado [[Re]] aproximadamente igual a 7485 **indica** que las fuerzas de inercia dominan sobre la viscosidad en una proporción cercana a 7500 a 1. **Esto implica** que cualquier perturbación en el flujo no será amortiguada, sino que crecerá formando vórtices y remolinos. **Por lo tanto**, la eficiencia del transporte se verá afectada por una mayor pérdida de carga (caída de presión), pero se verá favorecida la transferencia de calor y la mezcla de cualquier sustancia disuelta en el agua. La baja velocidad crítica (aproximadamente 4.6 cm/s) **demuestra** que, en condiciones prácticas de ingeniería, el flujo laminar de agua en tuberías de este diámetro es una excepción y no la regla.

# Ejemplo de aplicación real

## Contexto
En los sistemas de refrigeración de motores de alto rendimiento, como los de Fórmula 1, el control del número de Reynolds es vital para evitar el sobrecalentamiento de los componentes críticos.

## Estimación física
Considere un canal de refrigeración en el bloque del motor con un diámetro [[L]] de 8 mm. Si se usa una mezcla de agua y glicol cuya viscosidad [[eta]] es 5 veces superior a la del agua pura, y se bombea a 2 m/s, el número de Reynolds [[Re]] será aproximadamente 3200.

## Interpretación
Este valor de [[Re]] alrededor de 3200 sitúa al sistema en la zona de transición. **Esto significa** que el flujo es inestable y alterna entre estados ordenados y pequeños brotes de turbulencia. Para un ingeniero, este es un punto de diseño interesante: la turbulencia intermitente ayuda a romper la capa límite térmica y mejora el enfriamiento, pero sin la enorme penalización en la potencia de bombeo que supondría un flujo plenamente turbulento a velocidades mucho mayores. El estudio de [[Re]] permite así "afinar" el motor para que trabaje en el límite de su capacidad térmica de forma segura.`;export{e as default};
