const e=`# Tornillo - Errores comunes

El estudio del tornillo como máquina simple presenta desafíos específicos relacionados con la conversión de movimiento circular a lineal y la influencia crítica del rozamiento. A continuación se analizan los fallos más recurrentes detectados en la resolución de problemas técnicos y académicos.

## Errores conceptuales

### Error 1: Confundir el radio de la palanca con el radio del tornillo

**Por qué parece correcto:**
El estudiante ve el tornillo como el objeto central y asume que sus dimensiones físicas (su radio o diámetro) deben ser las que determinen la ventaja mecánica, tal como ocurre en otros componentes mecánicos.

**Por qué es incorrecto:**
El radio [[r]] que aparece en las fórmulas de ventaja mecánica y torque es la distancia desde el eje de rotación hasta el punto donde se aplica la fuerza de entrada [[F]]. En un gato de tornillo, este es el radio de la manivela o palanca. Usar el radio del cilindro del tornillo infravalora masivamente la ventaja mecánica, obteniendo un esfuerzo necesario irrealmente alto.

**Señal de detección:**
El cálculo indica que se necesita una fuerza enorme (casi igual a la carga) para mover el tornillo, invalidando su propósito como máquina simple.

**Corrección conceptual:**
Identifica siempre el brazo de palanca real. Si hay una llave o manivela, ese es tu radio [[r]]. El radio del tornillo solo es relevante para cálculos de resistencia de materiales, no para la ventaja mecánica del sistema.

**Mini-ejemplo de contraste:**
Un alumno usa el radio del tornillo de **1 cm** en lugar de la palanca de **25 cm**. Obtiene que necesita **400 N** para levantar una carga pequeña, cuando en realidad con **16 N** sería suficiente.

## Errores de modelo

### Error 2: Asumir un comportamiento ideal por defecto

**Por qué parece correcto:**
En la mayoría de los temas iniciales de física (poleas, palancas), se suele trabajar con sistemas ideales para simplificar el aprendizaje. El alumno traslada esta costumbre al tornillo por inercia.

**Por qué es incorrecto:**
En el tornillo, la fricción no es una "pérdida pequeña", sino una componente estructural. El rendimiento [[eta]] suele estar por debajo del **50%**. Ignorar el rozamiento conduce a subestimar el esfuerzo necesario por un factor de 2 o más, lo cual es peligroso en aplicaciones de carga real.

**Señal de detección:**
La fuerza calculada es sospechosamente baja o el sistema parece demasiado eficiente para ser un mecanismo de rosca seca.

**Corrección conceptual:**
Verifica siempre si el problema menciona el rendimiento o la eficiencia. Si no lo hace, busca términos como "tornillo de potencia real" o "coeficiente de fricción". En el mundo real, el tornillo ideal casi no existe.

**Mini-ejemplo de contraste:**
Un ingeniero calcula que un motor de **10 W** puede mover una prensa asumiendo un sistema ideal. Al construirlo, el motor se quema porque la fricción consume el **60%** de la energía y el motor no tiene torque suficiente.

## Errores matemáticos

### Error 3: Inconsistencia crítica de unidades entre el paso y el radio

**Por qué parece correcto:**
Los catálogos técnicos expresan el paso de rosca [[p]] en milímetros (ej. **4 mm**) y el brazo de palanca [[r]] en centímetros o metros (ej. **25 cm**). El alumno inyecta los números directamente en la fórmula sin pensar en la escala.

**Por qué es incorrecto:**
La fórmula de la fuerza requiere que todas las distancias estén en la misma unidad (preferiblemente metros, SI). Introducir un paso en milímetros sin convertirlo a metros produce un error de un factor de 1000 en el resultado final.

**Señal de detección:**
El resultado de la fuerza [[F]] sale en el orden de los kilo-Newtons para una carga que debería moverse con la mano, o viceversa.

**Corrección conceptual:**
Convierte todos los datos a metros antes de realizar cualquier operación: 1 milímetro equivale a 0,001 metros.

**Mini-ejemplo de contraste:**
Al calcular el torque, un estudiante obtiene **1500 N·m** (el torque de un camión) para un tornillo de banco pequeño, simplemente por no haber convertido los **2 mm** de paso a metros.

## Errores de interpretación

### Error 4: Ignorar la condición de autobloqueo y seguridad

**Por qué parece correcto:**
Se tiende a pensar que si una fuerza puede subir una carga, la carga bajará sola si se retira la fuerza, como sucede en una polea simple.

**Por qué es incorrecto:**
La mayoría de los tornillos de carga son "autobloqueantes": la fricción es tan alta que impide que la carga retroceda por sí sola. Confundir esto puede llevar a errores de diseño donde se instalan frenos innecesarios o se asume un movimiento de retroceso que nunca ocurrirá.

**Señal de detección:**
El alumno intenta calcular una "aceleración de caída" para un coche sostenido por un gato de tornillo.

**Corrección conceptual:**
Comprueba el ángulo de la hélice frente al coeficiente de fricción. Si el rendimiento es bajo (menor al **50%**), el sistema es probablemente autobloqueante.

**Mini-ejemplo de contraste:**
Un diseño de elevador manual se descarta por "miedo a que caiga" si se suelta la manivela, sin entender que la propia ineficiencia del tornillo actúa como el dispositivo de seguridad más fiable del mundo.

## Regla de autocontrol rápido

Antes de entregar un resultado, realiza esta comprobación mental:

1. **Magnitud**: ¿La fuerza [[F]] es significativamente menor que la carga [[R]]? Si no es así, la máquina no está ayudando.
2. **Unidades**: ¿Has convertido el paso [[p]] de milímetros a metros?
3. **Realismo**: ¿Puede un humano aplicar esa fuerza? (Límite típico: **150-200 N**).
4. **Fricción**: ¿Has incluido el factor [[eta]]? Recuerda que el esfuerzo real siempre es mayor que el ideal.
`;export{e as default};
