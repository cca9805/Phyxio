## Modelo ideal

El modelo estándar del trabajo de expansión trata los procesos como **cuasi-estáticos**: el sistema pasa por una sucesión continua de estados de equilibrio, y la presión interna del gas es bien definida e igual a la presión externa en cada instante. Bajo esta hipótesis, el trabajo se calcula como [[trabajo_termodinamico]] = ∫p dV, donde p es la presión de equilibrio del gas a cada [[volumen]].

Para el caso particular de proceso isobárico, el modelo se simplifica a [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]], que es la expresión más operativa y la más usada en problemas de introducción.

## Hipótesis

El modelo cuasi-estático descansa en las siguientes hipótesis:

- El proceso es suficientemente lento para que el sistema permanezca en equilibrio termodinámico interno en cada instante.
- La presión es uniforme en todo el gas (no hay gradientes de presión internos).
- No hay fricción en el émbolo ni fugas de gas.
- El sistema es cerrado: no hay intercambio de materia con el entorno.
- La frontera del sistema (émbolo) es la única vía de intercambio de trabajo mecánico.

## Dominio de validez cuantitativo

El modelo cuasi-estático es una buena aproximación cuando la velocidad de desplazamiento del émbolo es muy inferior a la velocidad del sonido en el gas. Para gases a temperatura ambiente, esto significa velocidades del émbolo inferiores a unos pocos metros por segundo. En explosiones, detonaciones o procesos de combustión rápida el modelo falla completamente.

Para el modelo isobárico, la condición es que la variación de presión durante el proceso sea despreciable respecto a la presión inicial (menos del 1–2 %). En laboratorio esto se cumple cuando el recipiente está abierto a la atmósfera.

## Señales de fallo del modelo

El modelo cuasi-estático falla cuando:

- El proceso es violentamente irreversible (explosiones, expansiones rápidas contra una presión constante muy baja).
- La expansión ocurre contra el vacío (expansión libre): el trabajo calculado con ∫p dV no describe el trabajo real porque no hay equilibrio interno durante el proceso.
- El émbolo tiene fricción significativa, que disipa parte del trabajo en calor sin transferirlo al entorno.
- El gas tiene fugas, lo que convierte el sistema en abierto.

## Modelo extendido o alternativo

Para procesos irreversibles rápidos con presión externa constante, el trabajo se calcula como [[trabajo_termodinamico]] = p_ext·[[variacion_de_volumen]], donde p_ext es la presión constante del entorno, no la presión del gas. Este es el modelo más adecuado para expansiones rápidas en química (reacciones que producen gas a presión atmosférica constante).

Para procesos irreversibles generales, el cálculo de [[trabajo_termodinamico]] requiere conocer la historia completa del proceso (velocidad del émbolo, disipación por fricción, etc.) y no puede reducirse a una integral simple de p dV.


Cuando conviene realizar un cálculo de mayor precisión, la transición al modelo extendido o alternativo introduce correcciones de segundo orden.
## Comparación operativa

| Criterio | Proceso cuasi-estático (isobárico) | Proceso cuasi-estático general | Proceso irreversible rápido |
|---|---|---|---|
| Fórmula | [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] | [[trabajo_termodinamico]] = ∫p dV | [[trabajo_termodinamico]] = p_ext·[[variacion_de_volumen]] |
| Datos necesarios | [[presion]] y [[variacion_de_volumen]] | Función p(V) completa | p_ext y [[variacion_de_volumen]] |
| Validez | Solo para [[presion]] constante | Cualquier proceso lento | Expansión rápida contra p_ext constante |
| Trabajo máximo | Igual al cuasi-estático | Máximo posible para esos estados | Menor que el cuasi-estático |
| Aplicación típica | Procesos a presión atmosférica | Motor de combustión, compresores | Reacciones químicas exotérmicas abiertas |