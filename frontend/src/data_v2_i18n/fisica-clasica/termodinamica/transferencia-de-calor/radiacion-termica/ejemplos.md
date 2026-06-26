# Ejemplo tipo examen


## Enunciado

Una placa metálica pintada de negro mate se mantiene caliente en una sala grande. La placa tiene [[area_superficie]] expuesta de 0,80 m², [[emisividad]] de 0,90 y [[temperatura_absoluta]] de 500 K. Las paredes de la sala se pueden representar mediante una [[temperatura_ambiente]] de 300 K. Calcula la [[potencia_radiada]] bruta, la [[potencia_neta]] perdida por intercambio radiativo y el [[flujo_radiativo]] emitido. La pregunta física es cómo dependen estos resultados de la [[temperatura_absoluta]], la [[area_superficie]] y la [[emisividad]].

## Datos

- [[area_superficie]]: 0,80 m²
- [[emisividad]]: 0,90
- [[temperatura_absoluta]] de la placa: 500 K
- [[temperatura_ambiente]] de la sala: 300 K
- [[constante_stefan_boltzmann]]: 5,67 · 10⁻⁸ W·m⁻²·K⁻⁴
- Magnitudes pedidas: [[potencia_radiada]], [[potencia_neta]] y [[flujo_radiativo]]

## Definición del sistema

El sistema es la placa metálica considerada como superficie emisora. No se estudia el enfriamiento completo ni la energía interna almacenada, sino el ritmo instantáneo de emisión e intercambio radiativo. La [[area_superficie]] relevante es la parte expuesta que ve radiativamente la sala. La sala se simplifica como un entorno grande con una [[temperatura_ambiente]] radiativa uniforme. La [[emisividad]] resume el efecto del acabado negro mate.

## Modelo físico

El modelo es el de superficie gris con [[temperatura_absoluta]] uniforme. Para emisión bruta se usa la ley de Stefan-Boltzmann. Para intercambio con el entorno se usa radiación neta. Para emisión por unidad de área se usa el [[flujo_radiativo]]. Las tres magnitudes están relacionadas, pero no significan lo mismo: [[potencia_radiada]] es emisión total, [[potencia_neta]] es balance y [[flujo_radiativo]] es intensidad superficial.

## Justificación del modelo

La placa tiene una sola [[temperatura_absoluta]], así que se supone que la temperatura superficial es aproximadamente uniforme. La pintura negra mate justifica una [[emisividad]] alta. La sala grande permite usar una [[temperatura_ambiente]] equivalente, aunque en un recinto real podrían existir paredes o fuentes con temperaturas distintas. Se ignoran conducción y convección porque el objetivo es aislar la transferencia por radiación. Si hubiera corrientes de aire intensas o contacto térmico importante, este cálculo sería solo una parte del balance.

## Resolución simbólica

Para calcular la emisión bruta se usa:

{{f:ley_stefan_boltzmann}}

Esta relación muestra que [[potencia_radiada]] aumenta linealmente con [[area_superficie]] y [[emisividad]], pero de forma mucho más intensa con [[temperatura_absoluta]].

Para el balance con el entorno se usa:

{{f:radiacion_neta}}

Aquí no se resta temperatura de forma simple. Se comparan las cuartas potencias de [[temperatura_absoluta]] y [[temperatura_ambiente]]. Si la placa está más caliente, el resultado positivo representa pérdida neta bajo el convenio saliente.

Para emisión por unidad de superficie se usa:

{{f:flujo_radiativo_emitido}}

El [[flujo_radiativo]] permite separar la intensidad de emisión del tamaño total de la placa.

## Sustitución numérica

Para la emisión bruta, 500⁴ = 6,25 · 10¹⁰. Al multiplicar por [[constante_stefan_boltzmann]], se obtiene aproximadamente 3544 W/m² para un emisor ideal. Multiplicando por [[emisividad]] 0,90 y por [[area_superficie]] 0,80 m², resulta [[potencia_radiada]] ≈ 2550 W.

Para la radiación neta, 300⁴ = 8,1 · 10⁹. La diferencia 500⁴ − 300⁴ es 5,44 · 10¹⁰. Multiplicando por [[constante_stefan_boltzmann]], [[emisividad]] y [[area_superficie]], se obtiene [[potencia_neta]] ≈ 2220 W. El signo positivo indica pérdida neta de la placa hacia la sala.

El [[flujo_radiativo]] emitido bruto se obtiene dividiendo la [[potencia_radiada]] entre 0,80 m², aproximadamente 3190 W/m².

## Validación dimensional

En la ley de Stefan-Boltzmann, [[emisividad]] no aporta unidades. [[constante_stefan_boltzmann]] aporta W·m⁻²·K⁻⁴, [[area_superficie]] aporta m² y [[temperatura_absoluta]]⁴ aporta K⁴. El resultado queda en W, por tanto corresponde a [[potencia_radiada]]. En el [[flujo_radiativo]], al no multiplicar por área, quedan W/m². En [[potencia_neta]], la resta de cuartas potencias mantiene unidades K⁴, así que el resultado también queda en W.

## Interpretación física

La placa emite mucha energía por unidad de tiempo porque su [[temperatura_absoluta]] es bastante superior a la [[temperatura_ambiente]]. Sin embargo, la [[potencia_neta]] es menor que la [[potencia_radiada]] bruta, porque la sala también irradia hacia la placa. La [[emisividad]] alta hace que la placa se acerque al comportamiento de un emisor ideal, y la [[area_superficie]] escala la potencia total. Si la [[temperatura_absoluta]] se duplicara manteniendo lo demás constante, la emisión aumentaría de forma espectacular.

# Ejemplo de aplicación real


## Contexto

Una cámara térmica inspecciona una fachada durante una noche despejada. La pared tiene [[temperatura_absoluta]] cercana a 285 K, [[emisividad]] alta por pintura mate y una [[temperatura_ambiente]] radiativa del cielo menor que la del aire. Se quiere estimar qué zonas pierden más energía por radiación.

## Estimación física

La cámara detecta radiación infrarroja asociada al [[flujo_radiativo]]. Si una zona de la pared está unos kelvin más caliente, emitirá más. Pero la lectura depende también de [[emisividad]]: una zona brillante puede reflejar radiación del entorno y falsear la temperatura aparente. Si se analiza un metro cuadrado, el [[flujo_radiativo]] es la magnitud natural. Si se analiza toda una fachada, se multiplica por [[area_superficie]] efectiva. La [[potencia_neta]] aumenta si el cielo actúa como entorno radiativo frío.

## Interpretación

La aplicación no mide “calor” directamente. Mide radiación y la traduce en temperatura bajo hipótesis sobre [[emisividad]] y entorno. El diagnóstico correcto combina [[temperatura_absoluta]], [[temperatura_ambiente]], [[area_superficie]] y modelo radiativo. Así se evita confundir una zona realmente caliente con una superficie que simplemente refleja de manera distinta.