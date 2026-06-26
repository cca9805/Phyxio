# Ejemplo tipo examen


## Enunciado

Una radiación monocromática incide sobre un sistema microscópico que solo absorbe energía si cada fotón alcanza una separación mínima entre niveles. La radiación tiene una [[frecuencia]] visible alta y se quiere decidir si la descripción clásica continua basta o si la absorción exige hablar de fotones y niveles discretos. Calcula la energía asociada a un fotón, estima su longitud de onda y compara el resultado con una separación energética de referencia.

## Datos

Los siguientes valores caracterizan la radiación y el absorbedor en este problema de cuantización:

- [[frecuencia]]: 6,0·10^14 Hz
- [[constante_planck]]: 6,63·10^-34 J·s
- [[velocidad_luz]]: 3,00·10^8 m/s
- [[separacion_energia]]: 3,5·10^-19 J entre niveles consecutivos del sistema
- [[energia_nivel]]: nivel inferior de referencia en el espectro del absorbedor
- [[escala_energia_clasica]]: 1,0·10^-15 J
- [[numero_cuantico]]: nivel de referencia discreto

## Definición del sistema

El sistema es un absorbedor microscópico ideal con niveles permitidos. La radiación se modela como conjunto de fotones, no solo como onda continua. La frontera conceptual del sistema separa la energía individual de cada fotón de la energía total del haz. Por eso se analiza [[energia_cuantizada]] antes de hablar de intensidad total.

## Modelo físico

Se usan las relaciones de energía de fotón, onda electromagnética y criterio de límite clásico.

{{f:energia_foton}}

{{f:longitud_onda_foton}}

{{f:frecuencia_desde_energia}}

{{f:limite_clasico_cuanto_relativo}}

El modelo físico considera magnitudes fundamentales del sistema como [[cociente_cuantico_clasico]], [[constante_planck]], [[energia_cuantizada]].

## Justificación del modelo

El fenómeno contiene una condición de absorción por niveles, así que la energía por fotón importa. Si la radiación se tratara solo como onda clásica, podría parecer que cualquier energía total acumulada sirve para activar la transición. El modelo moderno corrige esa idea: cada interacción elemental debe compararse con [[separacion_energia]]. La relación con [[longitud_onda]] permite comprobar que se está trabajando con radiación visible y que [[velocidad_luz]] es la constante adecuada.

## Resolución simbólica

Primero se calcula [[energia_cuantizada]] a partir de [[frecuencia]] y [[constante_planck]]. Después se calcula [[longitud_onda]] usando [[velocidad_luz]] y [[frecuencia]]. Finalmente se evalúa [[cociente_cuantico_clasico]] comparando [[separacion_energia]] con [[escala_energia_clasica]]. Si la energía del fotón supera la separación, la transición es posible para cada fotón individual; si no, la intensidad total no elimina el umbral microscópico.

{{f:energia_cuantizada_nivel}}

{{f:energia_foton}}

## Sustitución numérica

La energía del fotón es aproximadamente 3,98·10^-19 J. La longitud de onda asociada es aproximadamente 5,0·10^-7 m, dentro del rango visible. La energía del fotón es comparable con [[separacion_energia]], por lo que la absorción discreta es físicamente plausible. El cociente respecto a la escala clásica dada es del orden de 10^-4 para la separación considerada, pequeño a escala macroscópica pero relevante para el sistema microscópico.

## Validación dimensional

[[constante_planck]] tiene dimensión J·s y [[frecuencia]] tiene s^-1, de modo que su producto da J, unidad de [[energia_cuantizada]]. Para la longitud de onda, [[velocidad_luz]] tiene m/s y se divide por s^-1, quedando m. El cociente [[cociente_cuantico_clasico]] compara dos energías, por eso no tiene unidad.

## Interpretación física

El resultado indica que la física clásica necesita ampliarse porque el absorbedor no responde a cualquier reparto suave de energía: responde a paquetes individuales. La [[energia_cuantizada]] calculada es cercana a la [[separacion_energia]] entre los niveles del sistema, lo que significa que cada fotón puede o no puede activar la transición dependiendo exactamente de su [[frecuencia]]. Este es el punto central: la intensidad total del haz no cambia esa condición, porque cada interacción elemental involucra exactamente un fotón y su [[energia_nivel]] de destino.

La [[longitud_onda]] confirma que hablamos de luz visible, pero la lectura energética depende del modelo moderno. El [[cociente_cuantico_clasico]] recuerda que el mismo cuanto puede parecer diminuto en una escala clásica y decisivo en una escala microscópica. Esta lectura dual es la esencia del puente entre física clásica y física moderna: la escala del fenómeno decide qué descripción corresponde, no una preferencia filosófica.

# Ejemplo de aplicación real


## Contexto

En detectores de luz, paneles solares o sensores de imagen, no basta con hablar de energía luminosa total. La respuesta del material depende de si cada fotón tiene energía suficiente para excitar electrones o activar una transición. Por eso la [[frecuencia]] de la luz puede ser más decisiva que la intensidad cuando existe un umbral microscópico.

## Estimación física

Una luz roja y una luz violeta pueden tener intensidades parecidas, pero sus fotones no tienen la misma [[energia_cuantizada]]. La violeta tiene mayor [[frecuencia]] y menor [[longitud_onda]], así que cada fotón puede superar separaciones que la luz roja no alcanza. Si la [[separacion_energia]] del material es de unos pocos electronvoltios, una estimación rápida compara esa escala con el valor de cada fotón, no solo con la potencia total.

## Interpretación

El dispositivo convierte una idea abstracta en una regla práctica: la energía llega por unidades. La física clásica ayuda a describir propagación, intensidad y ondas, pero la activación microscópica requiere [[energia_cuantizada]]. La frontera entre ambas descripciones se decide con una comparación de escalas, no con una preferencia filosófica.