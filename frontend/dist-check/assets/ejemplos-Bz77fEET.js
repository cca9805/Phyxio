const e=`# Ejemplo tipo examen

## Enunciado
Se analiza una región del espacio en el vacío donde un campo eléctrico [[E]] oscila sinusoidalmente según una dirección determinada. Se requiere verificar la consistencia de este campo con las leyes locales de Maxwell, determinando la densidad de carga [[rho]] necesaria, la existencia de fuentes magnéticas y la densidad de corriente [[J]] requerida para la estabilidad del sistema. Finalmente, se debe comprobar si la solución satisface la ecuación de ondas electromagnéticas.

## Datos
- El medio de propagación es el vacío absoluto.
- La amplitud máxima del campo eléctrico [[E]] es de trescientos voltios por metro.
- La frecuencia angular de oscilación es de tres por diez a la ocho radianes por segundo.
- Las constantes del medio son la permitividad [[epsilon0]] y la permeabilidad [[mu0]].
- Se asume una velocidad de propagación igual a la velocidad de la luz [[c]].

## Definición del sistema
El sistema consiste en un volumen infinitesimal de espacio vacío donde no se han detectado fuentes materiales externas. Se define un sistema de coordenadas cartesianas donde el campo eléctrico [[E]] vibra en el eje Y y se desplaza a lo largo del eje X. El campo magnético [[B]] asociado debe ser determinado por las relaciones de inducción de Faraday. No existen obstáculos físicos ni bordes cercanos que distorsionen el campo. Se considera que el sistema es estacionario en sus fuentes pero dinámico en sus campos.

## Modelo físico
El problema se aborda mediante el modelo de **electrodinámica clásica local**. Se asume que los campos son funciones derivables en todo punto. Las relaciones fundamentales son las leyes de Gauss, Faraday y Ampère-Maxwell en su forma diferencial:

{{f:gauss_local_e}}

{{f:gauss_local_b}}

{{f:faraday_local}}

{{f:ampere_local}}

{{f:continuidad_carga}}

{{f:onda_electromagnetica}}

## Justificación del modelo
Este modelo es **válido** porque estamos analizando el comportamiento puntual de los campos en el vacío, donde no hay efectos cuánticos ni discontinuidades materiales significativas. **Se asume** que el medio es lineal e isótropo, con constantes [[epsilon0]] y [[mu0]] uniformes. **Se considera** que las derivadas parciales existen y son continuas, lo que permite el uso de los operadores [[divE]], [[divB]], [[curlE]] y [[curlB]] de forma directa. **Porque** el sistema es dinámico, debemos incluir explícitamente el término de corriente de desplazamiento en la ley de Ampère-Maxwell. El uso de la formulación diferencial es superior al de la integral en este caso porque permite observar la interacción fase a fase en cada punto de la onda sin necesidad de integrar sobre grandes volúmenes.

## Resolución simbólica
En primer lugar, para determinar la densidad de carga [[rho]], aplicamos la divergencia sobre la expresión del campo eléctrico [[E]]:

{{f:gauss_local_e}}

Al ser un campo cuya componente varía solo transversalmente a la dirección de propagación, se obtiene que la divergencia [[divE]] resulta nula. Por tanto, se concluye que el valor de [[rho]] es cero.

Para las fuentes magnéticas, verificamos la divergencia del campo [[B]] mediante la ley correspondiente:

{{f:gauss_local_b}}

Aplicamos el operador [[divB]] sobre el vector de inducción para confirmar la ausencia de monopolos magnéticos locales.

Para la inducción, calculamos el rotacional del campo [[E]]. Según la ley de Faraday, el valor de [[curlE]] debe coincidir con la variación temporal negativa del campo magnético [[dB_dt]]:

{{f:faraday_local}}

De aquí se deduce la forma funcional y la amplitud del campo [[B]]. Finalmente, para la densidad de corriente [[J]], usamos la ley de Ampère-Maxwell local que relaciona el rotacional con las fuentes dinámicas:

{{f:ampere_local}}

Al despejar el término de la corriente [[J]], comprobamos si es necesario un flujo de cargas reales para sostener el campo en esa región específica, considerando la corriente de desplazamiento:

{{f:definicion_corriente_maxwell}}

Como comprobación final de consistencia estructural, verificamos que el sistema cumple con la conservación de la carga y la propagación ondulatoria:

{{f:continuidad_carga}}

{{f:onda_electromagnetica}}

## Sustitución numérica
Utilizamos los valores del vacío para ilustrar la consistencia:
- La divergencia eléctrica [[divE]] es nula, lo que implica que [[rho]] es cero.
- La divergencia magnética [[divB]] es nula en todos los puntos evaluados.
- El rotacional [[curlE]] calculado tiene una magnitud de trescientos unidades en el sistema internacional.
- La variación temporal del campo magnético [[dB_dt]] coincide exactamente con el valor anterior.
- Al calcular la fuente total mediante la ley de Ampère-Maxwell, la contribución del rotacional magnético [[curlB]] se cancela exactamente con la corriente de desplazamiento proporcional a [[dE_dt]], resultando en una densidad de corriente [[J]] nula.

## Validación dimensional
Verificamos las unidades del término de corriente de desplazamiento. Multiplicando la unidad de [[epsilon0]] (faradios por metro) por la unidad de [[dE_dt]] (voltios por metro y segundo), obtenemos culombios por voltio y metro multiplicado por voltios por metro y segundo. Tras simplificar los voltios, el resultado es culombios por metro cuadrado y segundo, lo que equivale a amperios por metro cuadrado. Esta unidad final coincide exactamente con la dimensión de la densidad de corriente [[J]], validando la consistencia dimensional de la ley de Ampère-Maxwell en su forma diferencial y asegurando que estamos sumando magnitudes físicamente compatibles.

## Interpretación física
El resultado donde tanto [[J]] como [[rho]] son nulos indica que el campo se está propagando en el vacío puro, sin necesidad de cargas o corrientes reales presentes en el punto de observación. La variación temporal del campo magnético [[dB_dt]] actúa como la fuente del rotacional eléctrico [[curlE]], y la variación del campo eléctrico [[dE_dt]] actúa como la fuente del rotacional magnético [[curlB]]. Esta **interpretación causal** mutua es lo que permite la existencia de las ondas electromagnéticas auto-sostenidas que viajan por el universo a velocidad constante.

# Ejemplo de aplicación real

## Contexto
Se analiza la transmisión de una señal de radio de alta frecuencia emitida por una antena situada en el vacío profundo, lejos de cualquier interferencia terrestre. Se busca entender por qué la señal puede viajar miles de kilómetros sin un cable conductor y sin una pérdida de energía inmediata que detenga su avance por el espacio interestelar.

## Estimación física
En una **escala** macroscópica, el **orden de magnitud** de la corriente de desplazamiento basada en [[dE_dt]] compensa exactamente al rotacional magnético [[curlB]]. **Aproximadamente**, para una onda de radio comercial, los campos fluctúan millones de veces por segundo. Es un **valor razonable** esperar que en el vacío perfecto no existan fuentes reales, lo que se confirma al ver que la divergencia [[divE]] es nula. Esta **estimación** nos permite asegurar que la señal es una onda pura que satisface la relación estructural fundamental:

{{f:onda_electromagnetica}}

## Interpretación
La persistencia de la señal de radio en el vacío es una consecuencia directa de la forma diferencial de las leyes de Maxwell. Al no haber cargas [[rho]] ni corrientes [[J]] que absorban la energía o distorsionen el campo localmente, la inducción mutua entre los campos [[E]] y [[B]] mantiene la integridad de la información a través de distancias astronómicas. La velocidad [[c]] actúa como el ritmo natural de este intercambio energético constante, permitiendo que la luz sea el mensajero más eficiente de la física.
`;export{e as default};
