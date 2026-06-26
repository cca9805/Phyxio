## Modelo ideal

El modelo ideal supone que una fase puede distinguirse mediante un único [[parametro_de_orden]] macroscópico. En la fase desordenada, ese valor se anula o se promedia a cero; en la fase ordenada, toma un valor finito. La [[temperatura]] actúa como variable de control y la [[temperatura_critica]] marca el punto donde cambia la organización. Si el cambio es continuo, el [[parametro_de_orden]] se aproxima suavemente a cero; si aparece un [[salto_parametro_de_orden]], la transición se interpreta como abrupta.

## Hipótesis

- Existe un [[parametro_de_orden]] relevante. Si se elige mal, dos fases diferentes pueden parecer iguales.
- La [[temperatura_critica]] está bien definida. Si hay impurezas o tamaño finito, la transición puede ensancharse.
- El convenio de signo del [[parametro_de_orden]] se mantiene fijo. Si cambia, se confunde inversión de orientación con cambio físico.
- El [[campo_conjugado]] es pequeño cuando se usa la [[susceptibilidad]]. Si es grande, la respuesta deja de ser lineal.
- La ley crítica solo se usa cerca de la transición. Lejos de la [[temperatura_critica]], [[amplitud_critica]] y [[exponente_critico_beta]] pierden valor diagnóstico.

## Dominio de validez cuantitativo

Una lectura crítica razonable exige |[[temperatura_reducida]]| < 10^-1 y, para ajuste fino, a menudo |[[temperatura_reducida]]| < 10^-2. Un [[salto_parametro_de_orden]] debe superar claramente el ruido experimental, por ejemplo al menos 3 veces la incertidumbre de medida. La respuesta lineal requiere que el cambio inducido por [[campo_conjugado]] sea pequeño frente al valor característico del [[parametro_de_orden]]. Para estimar [[exponente_critico_beta]], conviene usar datos en una década o más de |[[temperatura_reducida]]|.

## Señales de fallo del modelo

El modelo falla si el [[parametro_de_orden]] no distingue las fases observadas, si hay histéresis intensa, si el valor depende mucho de la historia térmica o si el supuesto cero no representa realmente simetría restaurada. También falla cuando la [[susceptibilidad]] cambia con el tamaño de la perturbación, porque eso indica respuesta no lineal. Cerca de la [[temperatura_critica]], fluctuaciones fuertes pueden exigir un modelo más rico. Ese enriquecimiento puede requerir tratar fluctuaciones espacialmente extendidas y correlaciones de largo alcance.

## Modelo extendido o alternativo

Si el sistema necesita varias componentes de orden, se usa un vector o tensor de [[parametro_de_orden]]. Si las fluctuaciones dominan, se pasa a una teoría de Landau-Ginzburg o a modelos de escala crítica. En transiciones con coexistencia, el [[salto_parametro_de_orden]] se combina con energía libre e histéresis.

## Comparación operativa

| Situación | Magnitud clave | Lectura |
| Transición continua | [[parametro_de_orden]] | Se anula suavemente cerca de [[temperatura_critica]] |
| Transición abrupta | [[salto_parametro_de_orden]] | Hay diferencia finita entre fases |
| Respuesta crítica | [[susceptibilidad]] | Aumenta ante un [[campo_conjugado]] pequeño |
| Ajuste de escala | [[exponente_critico_beta]] | Controla la forma de desaparición del orden |