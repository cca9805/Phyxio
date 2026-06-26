# Aplicaciones

## 1. Ferromagnetismo simplificado

Variable dominante: [[magnetizacion_media]]
Límite de validez: [[numero_espines]] ≥ 10² y [[acoplamiento]] aproximadamente uniforme

El modelo permite estudiar cómo una red de [[espin]] binarios desarrolla orden colectivo. Se mide [[magnetizacion_media]] al variar [[temperatura]] y se interpreta si domina la alineación promovida por [[acoplamiento]] o la mezcla térmica. No predice todos los detalles de un material, pero sí constriñe qué se espera cuando la energía de interacción supera la escala térmica. También permite ver el papel de [[campo_externo]] como sesgo que rompe la simetría entre orientaciones opuestas. La lectura clave es el signo y módulo de [[magnetizacion_media]]: un valor cercano a ±1 indica dominio de un tipo de [[espin]], mientras que un valor cercano a 0 puede indicar desorden o dominios compensados. Para distinguir ambos casos conviene observar también [[energia_ising]]: si es alta aunque [[magnetizacion_media]] sea nula, los espines están mezclados aleatoriamente; si es baja, pueden estar ordenados en dominios opuestos. La [[probabilidad_configuracion]] bajo el peso de Boltzmann explica cuantitativamente cuánto pesan cada una de estas situaciones a la [[temperatura]] de trabajo.

## 2. Transiciones de fase en simulación

Variable dominante: [[temperatura]]
Límite de validez: red suficientemente grande y equilibrio estadístico aproximado

Al simular muchas configuraciones se observa cómo [[magnetizacion_total]] cambia con [[temperatura]]. La aplicación mide el paso de un régimen ordenado a otro más desordenado. La curva estimada conecta [[energia_ising]] con [[probabilidad_configuracion]]: al aumentar la agitación térmica, configuraciones menos alineadas dejan de estar fuertemente penalizadas. El límite es importante: en redes pequeñas no hay transición nítida, sino redondeo por tamaño finito. La [[beta_termica]] es el parámetro de control clave: cuando su valor supera el inverso de la energía de enlace por espín, el sistema tiende al orden; cuando cae por debajo, domina el desorden. Esta transición no ocurre en un punto único para redes finitas, sino en una región cuya anchura depende de [[numero_espines]]. La convergencia de la curva de [[magnetizacion_media]] frente a [[temperatura]] es un indicador de que el muestreo estadístico ha sido suficiente y de que los pesos de [[probabilidad_configuracion]] están bien distribuidos sobre el espacio de estados.

## 3. Estudio de dominios magnéticos

Variable dominante: [[energia_ising]]
Límite de validez: interacciones locales dominantes y geometría de red conocida

Una frontera de dominio aparece cuando grupos de [[espin]] apuntan en direcciones opuestas. El modelo estima el coste de esas fronteras mediante [[energia_ising]]. Si [[acoplamiento]] favorece alineación, más fronteras implican mayor energía. Esto ayuda a predecir qué configuraciones serán frecuentes a cierta [[temperatura]]. La aplicación constriñe la lectura de imágenes o simulaciones: una [[magnetizacion_media]] pequeña puede venir de desorden total o de dominios compensados. El coste energético de una frontera de dominio depende del número de enlaces que cruza. En una cadena unidimensional, crear una sola frontera implica cambiar el signo de un único término de [[energia_ising]]. En una red bidimensional, la frontera puede extenderse a lo largo de toda una fila, haciendo que el coste crezca con [[numero_espines]]. Por eso las fluctuaciones de [[magnetizacion_total]] son mayores en sistemas pequeños: crear o destruir una frontera modifica una fracción significativa de la energía total, y la [[probabilidad_configuracion]] de estados con y sin frontera puede ser comparable incluso a [[temperatura]] relativamente baja.

## 4. Efecto de campo externo

Variable dominante: [[campo_externo]]
Límite de validez: campo uniforme y sin histéresis material explícita

Al aplicar un [[campo_externo]], el modelo predice un sesgo en [[magnetizacion_total]]. Se mide cómo la respuesta colectiva cambia cuando el campo compite con [[acoplamiento]] y [[temperatura]]. Si el campo es muy fuerte, puede dominar incluso cuando existen defectos térmicos. Si es débil, la interacción y la [[temperatura]] determinan la respuesta. La aplicación muestra por qué una señal macroscópica no depende solo de la red, sino también del entorno externo. Cuando el [[campo_externo]] rompe la simetría entre espines positivos y negativos, [[magnetizacion_media]] ya no puede ser cero en promedio estadístico, porque los espines paralelos al campo acumulan menor [[energia_ising]]. El efecto es proporcional a la magnitud del campo: un campo débil produce un sesgo pequeño que desaparece al subir [[temperatura]], mientras que un campo fuerte mantiene una [[magnetizacion_total]] apreciable incluso a [[temperatura]] alta. La [[probabilidad_configuracion]] cuantifica este sesgo directamente a través de [[beta_termica]] multiplicada por la contribución del campo a [[energia_ising]].

## 5. Pesos de Boltzmann y muestreo

Variable dominante: [[probabilidad_configuracion]]
Límite de validez: equilibrio térmico y [[temperatura]] > 0

En simulaciones Monte Carlo, cada configuración se compara mediante [[probabilidad_configuracion]]. El modelo de Ising proporciona una energía clara para decidir qué estados aparecen con más frecuencia. [[beta_termica]] traduce la [[temperatura]] a sensibilidad energética. Esta aplicación se usa para construir muestras representativas, estimar [[magnetizacion_media]] y estudiar fluctuaciones. El límite aparece si el sistema no alcanza equilibrio o si se muestrean pocas configuraciones. La [[probabilidad_configuracion]] basada en [[energia_ising]] define directamente la regla de aceptación de Metropolis: cuando se propone un cambio que aumenta [[energia_ising]], se acepta con probabilidad proporcional al peso de Boltzmann controlado por [[beta_termica]]. Cuando [[beta_termica]] es grande, los cambios que suben la energía se rechazan con frecuencia y la cadena explora principalmente configuraciones de baja [[energia_ising]], con alta [[magnetizacion_media]]. Cuando [[beta_termica]] es pequeña, casi todos los cambios se aceptan y la cadena mezcla rápidamente entre configuraciones de distinta [[magnetizacion_total]]. Esta conexión entre la regla de aceptación y la física del sistema hace del modelo de Ising el ejemplo pedagógico por excelencia de Monte Carlo estadístico.