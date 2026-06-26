const e=`\uFEFF# Ejemplo tipo examen

## Enunciado
Una bola A de masa [[m1]] de 2 kg se mueve con velocidad [[v1]] de 6 m/s en el sentido positivo del eje x. Colisiona con una bola B de masa [[m2]] de 3 kg inicialmente en reposo. La colisión es elástica y se observa que en el marco del centro de masas las partículas salen desviadas un ángulo de 90 grados respecto a la dirección de incidencia. Se requiere realizar un análisis completo del sistema determinando las magnitudes cinemáticas y energéticas fundamentales tanto en el marco móvil como en el de laboratorio, calculando explícitamente la velocidad central [[Vcm]], las velocidades relativas [[u1]] y [[u2]], la velocidad relativa entre cuerpos [[v_rel]], la masa reducida [[mu]] y la energía cinética interna [[K_cm]]. Finalmente, se debe verificar el balance total de energía mediante el teorema de König.

## Datos
- Masa del proyectil [[m1]]: 2 kg.
- Masa del blanco [[m2]]: 3 kg.
- Velocidad inicial [[v1]]: 6 m/s.
- Velocidad inicial [[v2]]: 0 m/s.
- Naturaleza del choque: perfectamente elástico.
- Ángulo de dispersión en el centro de masas: 90 grados.

## Definición del sistema
El sistema está compuesto por las dos esferas, A y B. Durante el brevísimo intervalo del impacto, las fuerzas externas (gravedad y normal) se compensan y su impulso es despreciable frente a las intensas fuerzas internas de contacto. Esto permite tratar al sistema como aislado en el eje X, conservando la cantidad de movimiento total. Al ser un sistema de dos partículas, el centro de masas define un marco de referencia inercial privilegiado donde la dinámica de la colisión se manifiesta con máxima simetría. El estado final en el laboratorio se obtendrá tras resolver la interacción en el marco del centro de masas, donde los momentos individuales siempre se anulan por pares, independientemente de la masa de cada bola.

## Modelo físico
Para resolver este problema, empleamos el **Modelo del Marco del Centro de Masas para Colisiones**. Este modelo se basa en los siguientes pilares físicos:
1. **Conservación del Momento Lineal**: El momento total del sistema se mantiene constante en el tiempo en ausencia de fuerzas externas.
2. **Transformación de Galileo**: Se utiliza para cambiar del marco del laboratorio al marco del centro de masas y viceversa, permitiendo una visión "desde dentro" del sistema.
3. **Simetría del Marco CM**: En este marco, el momento total es siempre nulo ([[p_cm_total]] = 0), lo que obliga a las partículas a moverse en direcciones opuestas.
4. **Masa Reducida y Energía Interna**: Se utiliza la masa reducida [[mu]] para cuantificar la energía cinética disponible para la colisión [[K_cm]].
5. **Teorema de König**: Proporciona la estructura jerárquica para validar el balance energético total sumando la parte traslacional y la interna.

## Justificación del modelo
La elección de este modelo es necesaria porque el análisis directo en el laboratorio involucraría sistemas de ecuaciones no lineales complejos. Al transformar al marco del centro de masas, la colisión elástica se reduce a una simple rotación del vector de velocidad relativa, manteniendo su módulo constante. Esto permite hallar las velocidades de salida con una carga algebraica mínima y una claridad conceptual superior. Este enfoque es el estándar en física de partículas debido a su elegancia y a que permite separar lo que es puramente movimiento de conjunto de lo que es interacción física real entre los constituyentes del sistema.

## Resolución simbólica
El primer paso consiste en hallar la velocidad del marco de referencia móvil mediante la fórmula de velocidad del centro de masas, que pondera las inercias iniciales según sus velocidades de laboratorio:

{{f:Vcm}}

Posteriormente, determinamos la velocidad relativa de aproximación [[v_rel]], que es la diferencia de velocidades de laboratorio. Esta magnitud es invariante y define la escala del evento.

Transformamos las velocidades iniciales de laboratorio a velocidades relativas al centro de masas para eliminar el ruido de la traslación global y centrarnos en la interacción pura:

{{f:u1}}

{{f:u2}}

Determinamos la inercia efectiva del par mediante la masa reducida [[mu]], que caracteriza la resistencia del sistema a cambios en su estado de movimiento relativo:

{{f:mu}}

Calculamos la energía cinética disponible en este marco (energía interna) mediante la relación cuadrática con la velocidad relativa y la masa reducida:

{{f:K_cm}}

Verificamos que el momento total en este marco es nulo antes y después del impacto para validar la simetría del marco central:

{{f:p_cm_total}}

Para obtener las velocidades finales en el laboratorio, resolvemos la dispersión en el CM y aplicamos las transformaciones inversas sumando vectorialmente la velocidad central [[Vcm]]:

{{f:v1_inverse}}

{{f:v2_inverse}}

Finalmente, validamos la jerarquía energética del sistema empleando el teorema de la energía para sistemas, asegurando que la energía total se descompone correctamente:

{{f:koenig_theorem}}

## Sustitución numérica
1. **Velocidad del centro de masas**: Aplicando los datos a:

{{f:Vcm}}

Obtenemos [[Vcm]].

2. **Velocidad relativa**: La diferencia [[v_rel]].

3. **Velocidad [[u1]] en el CM**: Mediante la expresión:

{{f:u1}}

Hallamos que la bola A se acerca al centro a [[u1]].

4. **Velocidad [[u2]] en el CM**: Mediante la expresión:

{{f:u2}}

Hallamos que la bola B se acerca al centro a [[u2]].

5. **Masa reducida**: Utilizando la fórmula:

{{f:mu}}

Calculamos [[mu]].

6. **Energía cinética en el CM**: Según la relación:

{{f:K_cm}}

La energía interna resulta ser [[K_cm]].

7. **Momento total en el CM**: Con la condición:

{{f:p_cm_total}}

Comprobamos la nulidad.

8. **Energía total**: Calculamos [[K_total]] en laboratorio. Usando la jerarquía:

{{f:koenig_theorem}}

Validamos el balance energético.

## Validación dimensional
Las velocidades obtenidas tienen unidades de metros por segundo (L/T). La masa reducida [[mu]] se expresa correctamente en kilogramos (M). La energía resultante se mide en Julios (ML²/T²), lo cual es consistente con el producto de una masa por el cuadrado de una velocidad. El momento lineal [[p_cm_total]] tiene unidades de masa por velocidad, y su nulidad dimensional es consistente con cualquier marco de referencia inercial bien definido. Todas las expresiones empleadas respetan el principio de homogeneidad dimensional.

## Interpretación física
El resultado demuestra que la velocidad central actúa como un espectador invariante que transporta el sistema a través del espacio. En el marco del centro de masas, las bolas se acercan con momentos iguales y opuestos. Al ser el choque elástico, salen con esos mismos momentos pero rotados. Esto significa que la energía interna es la única que participa en la interacción física y es la que determina la violencia del impacto; esto indica que el resto de la energía del laboratorio está bloqueada en la traslación global del sistema. El marco CM nos permite ver esta distinción con claridad física coherente.

# Ejemplo de aplicación real

## Contexto
En la física de reactores nucleares, el marco del centro de masas es vital para entender la moderación de neutrones. Cuando un neutrón rápido producido en una fisión colisiona con un núcleo de hidrógeno (un protón), el análisis en el CM permite predecir cuánta energía puede perder el neutrón en una sola colisión para volverse un neutrón térmico capaz de inducir una nueva fisión. Sin esta moderación, la reacción en cadena no podría sostenerse de forma controlada.

## Estimación física
Consideremos un neutrón de masa [[m1]] cercana a 1 u chocando contra un protón de [[m2]] cercana a 1 u en reposo. En este caso, la masa reducida [[mu]] es exactamente 0,5 u, la mitad de la masa individual. Según el teorema de:

{{f:koenig_theorem}}

La energía disponible en el CM es exactamente la mitad de la energía inicial. Un valor razonable para la energía de un neutrón rápido es del orden de 2 MeV. De estos, un valor de 1 MeV es energía interna [[K_cm]] disponible para la interacción. Al ser las masas iguales, la transferencia de energía en el marco del centro de masas es máxima.

## Interpretación
Este análisis revela por qué el hidrógeno es el mejor moderador: al tener masas casi idénticas a las del neutrón, la masa reducida es máxima y la velocidad del centro de masas se sitúa en el valor óptimo para la transferencia. Esto significa que maximizamos la energía disponible en el marco del centro de masas para ser disipada. Esto indica que si el núcleo fuera mucho más pesado, la velocidad del centro de masas sería casi nula y el neutrón apenas perdería energía relativa. La eficacia de un reactor nuclear moderno depende directamente de esta ingeniería de masas en el marco del centro de masas.
\r
`;export{e as default};
