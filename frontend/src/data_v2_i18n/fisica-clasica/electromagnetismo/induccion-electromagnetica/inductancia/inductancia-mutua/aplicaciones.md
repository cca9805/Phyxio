# Aplicaciones

## 1. Transformadores electricos

Un transformador usa inductancia mutua para transferir energia entre bobinas sin contacto electrico directo. La corriente variable en el primario crea flujo en el nucleo, y ese flujo enlaza el secundario produciendo [[epsilon_2]]. La magnitud [[inductancia_mutua]] resume cuanto del primario llega realmente al secundario.

La hipotesis dominante es que el nucleo opera en regimen lineal y que [[coeficiente_de_acoplamiento]] es alto. Si el nucleo satura, la relacion entre corriente y flujo se deforma y la tension secundaria deja de seguir el modelo simple.

En diseño, aumentar [[coeficiente_de_acoplamiento]] reduce fuga magnetica y mejora transferencia, pero exige buen nucleo, bobinados cercanos y aislamiento adecuado. El valor de [[inductancia_mutua]] no se decide solo por espiras: tambien depende de la ruta magnetica compartida.

La decision practica consiste en equilibrar eficiencia y seguridad. Acercar bobinados aumenta acoplamiento, pero tambien exige aislamiento entre primario y secundario. Por eso un transformador real no maximiza solo [[inductancia_mutua]]: tambien controla temperatura, perdidas, rigidez dielectrica y margen frente a saturacion.

Variable dominante: acoplamiento magnetico representado por [[inductancia_mutua]] y [[coeficiente_de_acoplamiento]].
Límite de validez: deja de valer si hay saturacion, perdidas de nucleo dominantes o carga secundaria muy no lineal.

## 2. Cargadores inductivos

Un cargador inalambrico funciona porque la bobina emisora genera un flujo variable que enlaza la bobina receptora. La separacion y alineacion controlan [[coeficiente_de_acoplamiento]], y por tanto el valor efectivo de [[inductancia_mutua]]. Si el receptor se desplaza, la tension inducida disminuye.

La simplificacion dominante es tratar la posicion como fija durante la transferencia. En uso real, pequeños movimientos pueden cambiar el acoplamiento y obligar al circuito a ajustar frecuencia, potencia o control.

La inductancia mutua permite leer por que dos bobinas grandes no garantizan buena transferencia. Si el flujo se dispersa, [[lambda_21]] es pequeño y [[epsilon_2]] cae aunque la corriente primaria sea elevada.

La lectura de [[coeficiente_de_acoplamiento]] es especialmente util para diagnosticar mala colocacion. Una base puede detectar que el receptor esta descentrado porque necesita mas corriente para producir la misma tension inducida. El problema no es que la bobina emisora haya cambiado, sino que el par comparte menos flujo.

Variable dominante: coeficiente de acoplamiento [[coeficiente_de_acoplamiento]] entre emisor y receptor.
Límite de validez: deja de valer si la frecuencia, resonancia o electronica de control dominan sobre el modelo inductivo simple.

## 3. Sensores inductivos

En sensores, una bobina excitadora puede inducir señal en una bobina receptora. La presencia de metal, movimiento o cambio de posicion modifica el flujo compartido. El resultado se interpreta como cambio de [[inductancia_mutua]] o de [[coeficiente_de_acoplamiento]].

La hipotesis dominante es que el cambio observado procede del entorno y no de variaciones internas del circuito. Si la temperatura cambia mucho la resistencia o el nucleo, la lectura puede confundirse.

Este principio se usa en detectores de posicion, medidores de desplazamiento y captadores de velocidad. La ventaja es que la medicion puede ser sin contacto mecanico, pero exige calibracion porque el acoplamiento depende de geometria.

En un sensor bien diseñado, la variacion util de [[inductancia_mutua]] debe ser mayor que el ruido y que las derivas termicas. Por eso se emplean bobinas de referencia, blindajes o medidas diferenciales. La fisica del leaf permite separar señal magnetica real de efectos secundarios.

Variable dominante: variacion efectiva de [[inductancia_mutua]] con la posicion o el material.
Límite de validez: deja de valer si parasitos electricos o saturacion ocultan el cambio magnetico.

## 4. Bobinas de encendido

Una bobina de encendido usa dos devanados acoplados. El primario se excita y luego se interrumpe rapidamente; el cambio de [[corriente_fuente]] induce una fem elevada en el secundario. La rapidez del corte y [[inductancia_mutua]] controlan la tension disponible.

El diseño busca mucho flujo compartido, aislamiento suficiente y descarga controlada. Una [[inductancia_mutua]] grande ayuda, pero tambien hay que evitar saturacion y ruptura no deseada del aislamiento.

La aplicacion ilustra que la fem secundaria no depende solo del numero de espiras. Si el acoplamiento es bajo, parte del flujo primario se pierde y la tension util se reduce.

Tambien aparece una restriccion temporal. Para obtener alta tension se corta la corriente primaria rapidamente, pero ese corte aumenta exigencias de aislamiento y puede activar oscilaciones. El diseño correcto no busca un transitorio arbitrariamente brusco, sino uno controlado.

Variable dominante: fem secundaria [[epsilon_2]] causada por [[cambio_de_corriente_primaria]] rapido.
Límite de validez: deja de valer si capacitancias, arcos o resonancias dominan el pulso.

## 5. Interferencias entre circuitos cercanos

La inductancia mutua no siempre es deseada. Dos pistas o bobinas cercanas pueden acoplarse y transferir ruido. Un cambio rapido de corriente en una linea puede inducir [[epsilon_2]] en otra, creando señales falsas.

La mitigacion consiste en reducir [[inductancia_mutua]] mediante separacion, orientacion, apantallamiento o retorno de corriente cercano. Tambien se puede disminuir [[cambio_de_corriente_primaria]] o aumentar [[intervalo_de_tiempo]] para suavizar el transitorio.

Esta aplicacion muestra el valor diagnostico del modelo. Si aparece ruido correlacionado con una conmutacion vecina, conviene buscar acoplamiento magnetico antes de atribuirlo a fallo del componente receptor.

En placas reales, una pista de potencia y una pista de señal pueden formar una pareja acoplada accidentalmente. La solucion no es aumentar filtrado sin criterio, sino reducir el area de lazo, cambiar la orientacion o separar rutas de retorno para disminuir el flujo compartido.

Variable dominante: inductancia mutua no deseada entre conductores.
Límite de validez: deja de valer si el acoplamiento capacitivo o radiado domina sobre el magnetico.