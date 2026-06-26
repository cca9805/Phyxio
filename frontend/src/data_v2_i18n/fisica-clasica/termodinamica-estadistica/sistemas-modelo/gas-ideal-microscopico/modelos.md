## Modelo ideal

El modelo ideal representa el gas como un conjunto enorme de partículas puntuales, de [[masa_particula]] fija, que se mueven aleatoriamente dentro de un [[volumen]]. La [[temperatura]] mide la agitación promedio y se conecta con la [[energia_cinetica_media]] traslacional. La [[presion]] aparece por los choques de las partículas con las paredes, no por una fuerza continua interna. En este modelo, el detalle de cada trayectoria se sustituye por medias estadísticas como [[velocidad_rms]].

## Hipótesis

- Partículas puntuales: si el tamaño molecular no es despreciable frente al [[volumen]], la [[presion]] real se desvía del valor ideal.
- Choques elásticos: si se pierde energía mecánica en colisiones, la relación entre [[temperatura]] y [[energia_cinetica_media]] deja de ser directa.
- Interacciones intermoleculares despreciables: si hay atracción o repulsión persistente, la ecuación ideal subestima o sobreestima la [[presion]].
- Equilibrio térmico: si no hay una única [[temperatura]], no puede asignarse una sola [[energia_cinetica_media]] global.
- Gas monoatómico clásico: si hay modos internos activos o efectos cuánticos, cambia el reparto energético.

## Dominio de validez cuantitativo

El modelo es razonable para gases diluidos, con [[presion]] moderada y [[temperatura]] suficientemente alta: [[presion]] menor que unos 10^6 Pa, [[temperatura]] mayor que decenas de kelvin para gases comunes, y densidad baja frente a la densidad de licuefacción. También se exige que el camino libre medio sea mucho mayor que el tamaño molecular. En cálculos escolares se acepta bien si [[volumen]] no es extremadamente pequeño y si el producto de densidad molecular por [[volumen]] molecular propio es mucho menor que 1. Para la relación

{{f:energia_cinetica_media_temperatura}}

, la [[temperatura]] debe estar en kelvin y la [[energia_cinetica_media]] en julios por partícula.


> [!NOTE]
> Límite cuantitativo: El error relativo respecto a la solución real se mantiene inferior al 5%.
## Señales de fallo del modelo

Una señal clara de fallo es que al comprimir mucho el gas, la [[presion]] medida crezca más rápido o más lento que la predicha por

{{f:ecuacion_estado_gas_ideal_particulas}}

. Otra señal aparece al enfriar: condensación, licuefacción o comportamiento cuántico invalidan la imagen de partículas clásicas libres. También falla si la gráfica entre [[temperatura]] y [[energia_cinetica_media]] muestra intercepto no nulo por usar grados Celsius. En gases poliatómicos, interpretar toda la energía interna como traslación puede producir errores de capacidad calorífica.

## Modelo extendido o alternativo

Cuando las interacciones y el tamaño molecular importan, se usa un modelo de gas real, como Van der Waals, que corrige el [[volumen]] disponible y la [[presion]] efectiva. Si el sistema está a baja [[temperatura]], puede ser necesario un modelo cuántico. Si el gas no está en equilibrio, conviene una descripción cinética con distribuciones locales, no una sola [[temperatura]]. Para gases poliatómicos, se añaden grados de libertad rotacionales y vibracionales.


Cuando conviene realizar un cálculo de mayor precisión, la transición al modelo extendido o alternativo introduce correcciones de segundo orden.
## Comparación operativa

| Situación | Modelo ideal microscópico | Modelo alternativo |
| Gas diluido, equilibrio, [[temperatura]] moderada | Adecuado para conectar [[temperatura]] y [[energia_cinetica_media]] | No necesario |
| Alta [[presion]] o bajo [[volumen]] | Riesgo de error por tamaño molecular | Gas real |
| Muy baja [[temperatura]] | Falla la imagen clásica | Modelo cuántico |
| Gas con gradientes térmicos | Una sola [[temperatura]] no basta | Teoría cinética local |