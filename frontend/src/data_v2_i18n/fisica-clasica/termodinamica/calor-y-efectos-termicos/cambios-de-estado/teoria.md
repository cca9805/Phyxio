# Cambios de estado

## Contexto conceptual

Un cambio de estado es una transicion entre fases de una sustancia: fusion, solidificacion, vaporizacion, condensacion, sublimacion o deposicion. Su rasgo central es que la energía intercambiada no cambia la temperatura mientras coexisten dos fases. Esa energía se registra como calor latente total [[Q_lat]].

La pregunta física central es: cuanta energía hace falta para cambiar el estado de una sustancia, y por que la temperatura no varia durante la transicion? La respuesta depende de tres magnitudes: la masa [[m]] que cambia de estado, el calor latente específico [[L]] del material y la temperatura de transicion [[T_trans]]. El leaf no trata simplemente de calentar o enfriar: trata de decidir cuando el calor cambia la estructura de la materia.

## 🟢 Nivel esencial

Si se calienta hielo a 0 C, la temperatura no sube de inmediato. El calor que entra se usa para romper la estructura de la fase solida y convertir masa de hielo en agua liquida. Mientras quede hielo y agua coexistiendo, el sistema permanece en [[T_trans]].

Cuanta más masa [[m]] cambia de estado, mayor es [[Q_lat]]. Si el material tiene un [[L]] grande, cada kilogramo exige mucha energía. Por eso vaporizar agua requiere mucha más energía que fundir la misma masa de hielo: la vaporizacion separa casi por completo las moleculas.

La idea operativa es sencilla: primero se mira si hay dos fases; después se pregunta cuanta masa esta cambiando de estado; al final se decide si sobra energía para subir o bajar temperatura. En una meseta de cambio de estado, más calor significa más masa transformada, no más grados Celsius.

## 🔵 Nivel formal

La relación general del leaf es:

{{f:calor_latente_general}}

La condición térmica durante la meseta es:

{{f:temperatura_transicion_constante}}

Para fusion o solidificacion se usa el valor de fusion del material:

{{f:calor_latente_fusion}}

Para vaporizacion o condensacion se usa el valor de vaporizacion:

{{f:calor_latente_vaporizacion}}

El signo se asigna por proceso: positivo cuando la sustancia absorbe calor (fusion, vaporizacion, sublimacion) y negativo cuando lo cede (solidificacion, condensacion, deposicion). [[L]] es una propiedad positiva del material y de la transicion concreta. En un balance de energía se suma con su signo físico, pero la tabla de datos suele dar solo el modulo.

La comprobacion formal clave es comparar energía disponible con la energía latente requerida. Si el disponible no alcanza el producto entre masa y calor latente específico, la transicion es parcial. En ese caso no se debe despejar una temperatura final posterior; se debe calcular la fraccion de masa que cambia de estado y mantener el sistema en [[T_trans]]. Si el disponible supera el tramo latente completo, entonces el excedente ya puede usarse como calor sensible. En notación del leaf, [[Q_lat]] cuantifica energía, [[m]] cuantifica muestra, [[L]] cuantifica material y [[T_trans]] fija la condición térmica. Estas cuatro magnitudes deben leerse juntas: cambiar una masa mayor aumenta la energía; cambiar de material modifica la pendiente; cambiar la presión puede desplazar la temperatura de transicion.

## 🔴 Nivel estructural

En una transicion de primer orden, la entalpía cambia de forma discontinua a [[T_trans]], pero temperatura y presión permanecen fijadas mientras hay dos fases en equilibrio. A escala molecular, [[L]] mide energía estructural: en la fusion se pierde orden cristalino; en la vaporizacion se vencen casi todas las fuerzas cohesivas del liquido.

La grafica de temperatura frente al calor suministrado alterna tramos inclinados y mesetas. Los tramos inclinados son calentamiento sensible; la meseta situada en [[T_trans]] representa [[Q_lat]]. Su anchura horizontal crece linealmente con [[m]] y con [[L]]. Por eso una grafica con meseta larga no indica que el sistema este detenido, sino que la energía esta cambiando fase.

El valor de [[T_trans]] no es universal: depende de la sustancia, de la presión y de si el material es puro. Para agua pura a presión atmosférica se usan 0 C y 100 C como referencias, pero en una solucion salina o en un autoclave esas temperaturas cambian. La version estructural del modelo exige preguntar por la presión, la pureza y la completitud de la transicion antes de aplicar una tabla. También obliga a distinguir equilibrio local de equilibrio global: una muestra grande puede tener zonas ya transformadas y zonas aun en la fase inicial. En ese caso el modelo ideal sigue sirviendo como balance de energía global, pero la lectura temporal necesita transporte de calor, nucleacion y gradientes internos.

## Interpretacion física profunda

El error habitual es pensar que todo calor sube la temperatura. En una transicion, el calor no aumenta la energía cinética media de las particulas; cambia la configuración microscopica. Por eso una olla con agua hirviendo a presión atmosférica permanece cerca de 100 C aunque el fuego siga aportando energía.

Si la energía disponible es menor que la necesaria, el cambio de estado es parcial. El sistema no salta a una nueva temperatura: queda como mezcla de fases a [[T_trans]]. Esa condición es una pista física fuerte para decidir si debe calcularse una temperatura final o una masa que cambia de estado.

La interpretacion del signo también importa. Fusion, vaporizacion y sublimacion absorben energía del entorno; solidificacion, condensacion y deposicion la liberan. La cantidad puede tener el mismo modulo para el proceso inverso ideal, pero el efecto sobre el entorno cambia completamente.

## Orden de magnitud

Para agua a presión atmosférica, fundir 1 kg de hielo requiere unos 334 kJ, mientras vaporizar 1 kg de agua requiere unos 2260 kJ. Calentar 1 kg de agua solo 1 K requiere unos 4.2 kJ. Por eso una meseta de cambio de estado puede dominar el balance energético incluso cuando el cambio de temperatura parece pequeno.

En un vaso con hielo y agua caliente, decenas de kilojulios pueden desaparecer en la fusion antes de que la temperatura final pase de 0 C. En una caldera, la vaporizacion domina mucho más: gran parte de la energía se invierte en producir vapor, no en aumentar unos grados el agua liquida.

## Método de resolución personalizado

Primero ordena el proceso por temperaturas: tramos antes de [[T_trans]], meseta de cambio de estado y tramos posteriores. Segundo calcula o estima el calor disponible antes de asumir que toda la masa cambia de estado. Tercero aplica la formula del leaf solo a la masa que realmente completa la transicion. Cuarto interpreta el resultado: si quedan dos fases, la temperatura final debe ser [[T_trans]].

Un esquema fiable es dibujar una linea de temperatura frente a energía: pendiente, meseta, pendiente. Cada pendiente corresponde a calor sensible; cada meseta corresponde a [[Q_lat]]. Si una etapa no aparece en el dibujo, probablemente falta en el balance. Esta representación evita mezclar una temperatura final con una transicion parcial.

## Casos especiales y ejemplo extendido

Si se mezclan 0.300 kg de hielo a 0 C con agua caliente, no se calcula una temperatura final hasta comprobar la energía de fusion. La energía latente necesaria es proporcional a [[m]] y [[L]]. Si el agua caliente no puede aportar ese valor, solo parte del hielo se funde y el equilibrio queda en [[T_trans]].

En una nevera ocurre el proceso inverso: el refrigerante se vaporiza absorbiendo [[Q_lat]] del interior y se condensa fuera liberandolo. El mismo concepto explica la sudoracion: evaporar agua de la piel extrae una gran energía por kilogramo. También explica por que el vapor causa quemaduras graves: al condensarse sobre la piel libera rápidamente su calor latente.

## Preguntas reales del alumno

Por que la temperatura no cambia si sigo calentando? Porque la energía se consume en cambiar la fase, no en aumentar la agitacion térmica.

Puedo usar siempre el mismo [[L]]? No. Hay que escoger el valor de fusion, vaporizacion o sublimacion que corresponda al material y a la presión del problema.

Que pasa si no hay energía suficiente? La transicion es parcial y el sistema queda a [[T_trans]] con dos fases. En ese caso la incognita natural suele ser masa transformada, no temperatura final.

## Conexiones transversales y rutas de estudio

Este leaf conecta con calorimetria porque los cambios de estado se incorporan como tramos adicionales en balances de energía. También conecta con maquinas térmicas, refrigeración, meteorologia, nubes, vapor industrial y diagramas de fase. Para avanzar, conviene estudiar calor específico, calorimetria y después termodinámica de fases.

En problemas de ingenieria, la misma idea se combina con potencia y caudal masico: si una maquina evapora más masa por segundo, intercambia más calor latente por segundo. En meteorologia, la condensacion del vapor de agua libera energía que alimenta nubes convectivas.

## Síntesis final

Un cambio de estado intercambia [[Q_lat]] a temperatura constante [[T_trans]]. La regla operativa es sencilla: masa que cambia de estado [[m]] multiplicada por calor latente específico [[L]]. La dificultad real esta en decidir si la transicion es completa, escoger el valor de [[L]] adecuado y respetar que la temperatura permanece fija mientras coexisten fases.

