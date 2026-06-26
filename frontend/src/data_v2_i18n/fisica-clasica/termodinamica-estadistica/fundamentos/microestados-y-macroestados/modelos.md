## Modelo ideal

El modelo ideal separa dos niveles: el [[microestado]] como configuración microscópica completa y el [[macroestado]] como descripción observable definida por restricciones como [[energia_total]], [[volumen]] y [[numero_particulas]]. La [[multiplicidad_macroestado]] cuenta cuántos [[microestado]] producen el mismo [[macroestado]]. Si todos los [[microestado]] del conjunto accesible se tratan con el mismo peso, la [[probabilidad_macroestado]] se obtiene comparando multiplicidades. La [[entropia]] resume ese conteo mediante [[constante_boltzmann]].

## Hipótesis

- Los [[macroestado]] comparados son excluyentes. Si se solapan, la normalización doble cuenta configuraciones.
- Las restricciones [[energia_total]], [[volumen]] y [[numero_particulas]] permanecen fijas. Si cambian, se altera el conjunto de [[microestado]] disponibles.
- Cada [[microestado]] está definido con el mismo nivel de detalle. Si se mezclan granularidades, la [[multiplicidad_macroestado]] queda sesgada.
- El conteo de [[numero_microestados]] es finito o tratable. Si no lo es, se necesita una descripción continua o aproximada.
- La comparación usa el mismo criterio de accesibilidad para todos los [[macroestado]]. Si no, la [[probabilidad_macroestado]] deja de ser una fracción homogénea.

## Dominio de validez cuantitativo

El modelo discreto funciona bien cuando [[numero_microestados]] es mayor que 1, cuando cada [[multiplicidad_macroestado]] cumple Ω_M ≥ 0 y cuando la suma de [[probabilidad_macroestado]] de los casos excluyentes es 1 dentro de tolerancias numéricas pequeñas, por ejemplo |ΣP_M - 1| < 10⁻⁶. En ejercicios de aula, conviene usar [[numero_particulas]] entre 2 y 20 para que el conteo sea visible. Para sistemas macroscópicos, [[numero_particulas]] puede ser del orden de 10²³ y se trabaja con logaritmos o con [[entropia]], porque la [[multiplicidad_macroestado]] puede ser inmanejable directamente.

## Señales de fallo del modelo

Una señal clara de fallo aparece cuando un mismo [[microestado]] pertenece a dos [[macroestado]] supuestamente excluyentes. Otra señal es obtener [[probabilidad_macroestado]] negativa, mayor que 1 o sin normalización. También falla si se compara una [[multiplicidad_macroestado]] calculada con [[volumen]] fijo contra otra con [[volumen]] distinto sin declararlo. Si la [[entropia]] disminuye al aumentar de forma inequívoca el número de configuraciones compatibles, probablemente se ha confundido multiplicidad con probabilidad o se ha usado mal el logaritmo.

## Modelo extendido o alternativo

Cuando los [[microestado]] no pesan igual, el modelo de conteo simple debe sustituirse por un modelo ponderado, como el canónico. En ese caso, la [[energia_total]] deja de ser la única restricción rígida y aparecen pesos dependientes de la energía. Para sistemas continuos, el conteo se reemplaza por densidades de estados. Para sistemas muy pequeños, conviene mantener las fluctuaciones explícitas en vez de esconderlas en una única [[entropia]] macroscópica.

Cuando conviene realizar un cálculo de mayor precisión, la transición al modelo extendido o alternativo introduce correcciones de segundo orden.

## Comparación operativa

| Enfoque | Qué cuenta | Cuándo sirve | Riesgo típico |
| Microestado | Configuración microscópica concreta | Análisis detallado | Exceso de información |
| Macroestado | Restricciones observables | Termodinámica y medidas | Ocultar multiplicidad |
| Multiplicidad | [[microestado]] por [[macroestado]] | Probabilidades relativas | Contar casos solapados |
| Entropía | Logaritmo físico de multiplicidad | Escala macroscópica | Confundirla con desorden visual |