const e=`# Errores frecuentes en transformadores

## Errores conceptuales

### Error 1: Confundir la relación de transformación de corrientes con la de tensiones

**Por qué parece correcto**

El alumno aplica la misma relación de espiras a las corrientes que a las tensiones, calculando [[I_2]] como [[I_1]] multiplicado por [[N_2]]/[[N_1]], siguiendo la lógica directa de proporcionalidad.

**Por qué es incorrecto**

La conservación de la potencia exige que el producto tensión-corriente se mantenga constante. Si la tensión aumenta en la relación [[N_2]]/[[N_1]], la corriente debe disminuir en esa misma proporción para conservar la potencia. La relación correcta entre corrientes sigue el cociente [[N_2]]/[[N_1]], es decir, la inversa de la relación de tensiones.

**Señal de detección**

El alumno obtiene una corriente secundaria mayor que la primaria en un transformador elevador de tensión, o una corriente secundaria menor que la primaria en uno reductor, lo que viola la conservación de la energía.

**Corrección conceptual**

Recordar que la relación de corrientes es inversa a la de tensiones. En un transformador elevador, la tensión sube pero la corriente baja proporcionalmente. La potencia primaria aproximadamente iguala a la secundaria más pérdidas.

**Mini-ejemplo de contraste**

Un transformador con relación 10:1 eleva la tensión de 12 V a 120 V. Si la corriente primaria es 10 A, aplicar la relación directa daría 100 A en el secundario, lo que implicaría 12000 W de salida con solo 120 W de entrada. La corriente correcta es 1 A, manteniendo la potencia aproximadamente constante en 1200 W considerando pérdidas.

## Errores de modelo

### Error 2: Aplicar el modelo ideal a un transformador en vacío

**Por qué parece correcto**

Sin carga conectada, el alumno razona que no hay corriente en el secundario y por tanto la corriente primaria debe ser cero. El modelo ideal predice exactamente eso: corriente primaria nula cuando [[I_2]] es cero.

**Por qué es incorrecto**

El transformador real necesita una corriente de magnetización para establecer el flujo en el núcleo, incluso sin carga. Esta corriente de vacío típicamente entre el 2% y el 10% de la nominal produce pérdidas en el hierro que el modelo ideal ignora por completo.

**Señal de detección**

El alumno calcula potencia de entrada cero en vacío, pero observa que el transformador se calienta ligeramente y consume energía medida por el contador eléctrico.

**Corrección conceptual**

El modelo ideal no incluye las pérdidas de magnetización. En vacío, el transformador consume potencia para mantener el flujo magnético alterno, aunque no entregue potencia útil. El ensayo de vacío mide precisamente estas pérdidas.

**Mini-ejemplo de contraste**

Un transformador de 1 kVA conectado a la red sin carga consume aproximadamente 20-30 W medidos con un vatímetro. El modelo ideal predice 0 W. Esta discrepancia evidencia la necesidad del modelo extendido con pérdidas en el hierro.

## Errores matemáticos

### Error 3: Introducir el rendimiento como porcentaje en lugar de decimal

**Por qué parece correcto**

Las hojas de datos de fabricantes expresan el rendimiento como 98.5%, usando la notación porcentual. El alumno copia este número directamente en la fórmula de rendimiento.

**Por qué es incorrecto**

El rendimiento [[eta]] en las fórmulas es un número adimensional entre 0 y 1. Usar 98.5 en lugar de 0.985 hace que el resultado quede multiplicado por 100. La potencia calculada sería cien veces la real, violando descaradamente la conservación de energía.

**Señal de detección**

La potencia de salida calculada supera a la de entrada, o la potencia de entrada calculada es apenas el 1% de la potencia útil.

**Corrección conceptual**

Un rendimiento del 98.5% significa que 98.5 de cada 100 julios de entrada se transfieren útilmente. Como fracción es 0.985. Siempre dividir entre 100 el rendimiento porcentual antes de usarlo en cálculos.

**Mini-ejemplo de contraste**

Un transformador con rendimiento del 96% consume 1000 W. La potencia útil es 0.96 veces 1000 W igual a 960 W. Si se usa 96 en lugar de 0.96, el resultado es 96000 W: cien veces la potencia de entrada, físicamente imposible.

## Errores de interpretación

### Error 4: Usar valores pico en lugar de valores eficaces

**Por qué parece correcto**

El alumno mide la tensión alterna con un osciloscopio y lee el valor pico, o recuerda que la red doméstica es 325 V pico. Introduce este valor en las fórmulas de potencia y rendimiento.

**Por qué es incorrecto**

Las fórmulas del transformador, al igual que las especificaciones comerciales, usan valores eficaces (RMS). El valor eficaz de una senoide es el valor pico dividido por raíz cuadrada de 2. Usar el valor pico produce resultados desviados por un factor de aproximadamente 1.414 en tensiones y 2 en potencias.

**Señal de detección**

Las potencias calculadas son aproximadamente el doble de las esperadas, o las corrientes parecen excesivamente elevadas para la carga conectada.

**Corrección conceptual**

En ingeniería eléctrica, salvo indicación explícita, todas las magnitudes alternas son valores eficaces. Un transformador marcado 230 V/12 V proporciona valores eficaces. La relación de transformación se aplica a valores eficaces.

**Mini-ejemplo de contraste**

Un transformador 230 V/12 V alimentado con 325 V pico produce 17 V pico en el secundario. El alumno que usa valores pico calcula una relación de transformación aparentemente diferente. Usando valores eficaces: 230 V eficaces producen 12 V eficaces, manteniendo la relación nominal de 19.17.

### Error 5: Ignorar la caída de tensión interna bajo carga

**Por qué parece correcto**

El alumno mide 12 V en el secundario en vacío y asume que esta tensión se mantiene constante independientemente de la carga conectada. Calcula la corriente de carga dividiendo 12 V entre la resistencia de carga.

**Por qué es incorrecto**

Las resistencias internas de los devanados causan una caída de tensión proporcional a la corriente. Bajo carga, la tensión medida en bornes del secundario es menor que la nominal en vacío. Esta caída típicamente del 2% al 5% a plena carga puede ser mayor en transformadores pequeños o de baja calidad.

**Señal de detección**

La tensión medida en el secundario bajo carga es sensiblemente menor que la calculada teóricamente. La discrepancia aumenta al incrementar la carga.

**Corrección conceptual**

Los transformadores reales tienen una regulación de tensión que cuantifica la caída desde vacío hasta plena carga. Para cálculos precisos, usar el modelo extendido con resistencias de devanado o aplicar el factor de regulación de las hojas de datos.

**Mini-ejemplo de contraste**

Un transformador 230/12 V nominal proporciona 12.5 V en vacío. Bajo una carga que demanda 2 A, la tensión cae a 11.8 V debido a las caídas resistivas internas. El alumno que ignora este efecto calcula una potencia de carga de 24 W usando 12 V, cuando la real es 23.6 W usando 11.8 V, un error del 1.7%.

## Regla de autocontrol rápido

Antes de dar por bueno un resultado sobre un transformador, verificar las siguientes condiciones. La potencia de salida debe ser estrictamente menor que la de entrada. El rendimiento debe estar entre 0 y 1 como decimal, no como porcentaje. La corriente secundaria debe ser menor que la primaria en un transformador elevador, y mayor en uno reductor. La relación de tensiones debe coincidir exactamente con la relación de espiras. Las pérdidas calculadas deben ser positivas y típicamente inferiores al 5% de la potencia nominal.
`;export{e as default};
