const e=`\uFEFF# Ejemplo tipo examen: Centro de Masas de un Sistema de Cuatro Partículas (2D)

## Enunciado

Un equipo de ingenieros está diseñando una plataforma de soporte para un instrumento de precisión. Para asegurar la estabilidad, necesitan localizar el centro de masas del sistema compuesto por cuatro masas puntuales distribuidas en un plano horizontal:
- Partícula A: [[m1]] con un valor de 2.0 kg situada en la posición [[x1]] de 0.0 m y y1 de 0.0 m.
- Partícula B: [[m2]] con un valor de 3.0 kg situada en la posición [[x2]] de 4.0 m y y2 de 0.0 m.
- Partícula C: m3 con un valor de 5.0 kg situada en la posición x3 de 2.0 m y y3 de 6.0 m.
- Partícula D: m4 con un valor de 10.0 kg situada en la posición x4 de 2.0 m y y4 de 2.0 m.

Calcula la masa total del sistema [[M]], las coordenadas del centro de masas ([[xcm]], [[ycm]]) y verifica si el resultado se encuentra dentro de la región delimitada por las masas. Analiza cómo la partícula más masiva (m4) condiciona el resultado final respecto a las masas [[m1]] y [[m2]].

## Datos

- [[m1]] es 2.0 kg; [[x1]] es 0.0 m; y1 es 0.0 m.
- [[m2]] es 3.0 kg; [[x2]] es 4.0 m; y2 es 0.0 m.
- m3 es 5.0 kg; x3 es 2.0 m; y3 es 6.0 m.
- m4 es 10.0 kg; x4 es 2.0 m; y4 es 2.0 m.

## Definicion del sistema

El sistema bajo estudio es una configuración discreta de cuatro cuerpos que interactúan como una sola entidad rígida respecto a su traslación colectiva. Al estar distribuidos en un plano bidimensional (XY), la localización del centro de masas requiere el cálculo independiente de las coordenadas [[xcm]] e [[ycm]]. El sistema se considera aislado de fuerzas externas disipativas, y las masas se tratan como puntos materiales concentrados en sus coordenadas geométricas respectivas. Esta abstracción permite ignorar la geometría interna de los objetos y centrarse exclusivamente en la distribución de la inercia del conjunto.

## Modelo fisico

El modelo físico se basa en el principio de superposición de momentos de masa. El centro de masas ([[rcm]]) se define como el punto donde se puede considerar concentrada toda la masa [[M]] del sistema para efectos de análisis traslacional. Matemáticamente, esto se traduce en un promedio ponderado donde la posición de cada partícula ([[x_i]], [[y_i]]) tiene un peso estadístico proporcional a su masa [[m_i]]. 

Las relaciones fundamentales del modelo son:
1. La masa total [[M]] es la suma escalar de todas las contribuciones individuales.
2. La coordenada [[xcm]] depende linealmente de las posiciones [[x1]], [[x2]] y del resto de componentes horizontales.
3. La coordenada [[ycm]] depende de la distribución vertical.

Este modelo predice que el centro de masas se desplazará preferentemente hacia las regiones donde la densidad de masa sea mayor, independientemente de la distancia geométrica al origen.

## Justificacion del modelo

La elección de un modelo discreto es apropiada porque el número de cuerpos es pequeño (cuatro) y sus dimensiones físicas son despreciables frente a las distancias que los separan. No se requiere el uso de densidades continuas ni de integrales de volumen, ya que las masas están claramente localizadas. El uso de componentes escalares separadas para [[xcm]] e [[ycm]] está justificado por la ortogonalidad de los ejes en el espacio euclídeo, lo que permite resolver el problema como dos promedios unidimensionales independientes. Además, el modelo asume que el campo gravitatorio es uniforme sobre toda la extensión del sistema, lo que garantiza que el centro de masas coincida con el centro de gravedad.

## Resolucion simbolica

1. Determinación de la masa total del sistema [[M]]:
{{f:M_sum}}

2. Aplicación de la sumatoria para la componente horizontal del centro de masas [[xcm]]:
{{f:xcm_sum}}

3. Aplicación de la sumatoria para la componente vertical del centro de masas [[ycm]]:
{{f:ycm_sum}}

4. Expresión del vector posición final [[rcm]]:
{{f:rcm_vector}}

## Sustitucion numerica

- **Masa total**: 
[[M]] se obtiene sumando [[m1]], [[m2]], m3 y m4 para dar un total de 20.0 kg.

- **Componente x**:
[[xcm]] se calcula dividiendo la suma de productos por la masa total.
[[xcm]] resulta en un valor de 2.1 m.

- **Componente y**:
[[ycm]] se calcula dividiendo la suma de productos por la masa total.
[[ycm]] resulta en un valor de 2.5 m.

- **Vector final**:
[[rcm]] tiene una ubicación de 2.1 metros en x y 2.5 metros en y.

## Validacion dimensional

La verificación de las unidades es un paso crítico para confirmar la coherencia del procedimiento. En las fórmulas utilizadas, el numerador tiene unidades de masa por longitud (kg·m) debido al producto de la masa por la posición. El denominador tiene unidades de masa (kg). Por tanto, la división resulta en:
Unidades de masa por longitud divididas por masa dan como resultado longitud.
Lo cual coincide con la unidad esperada para una posición (metros en el SI). Esta consistencia dimensional asegura que no se han omitido términos en la sumatoria ni se han realizado operaciones algebraicas inválidas entre magnitudes de distinta naturaleza.

## Interpretacion fisica

El resultado para [[rcm]] presenta un valor de 2.1 metros en el eje horizontal y 2.5 metros en el eje vertical. Aunque las masas [[m1]] y [[m2]] están situadas en la base (donde y es cero), el centro de masas se eleva considerablemente debido a la influencia de las masas superiores m3 y m4. Es notable observar que m4, al representar el 50% de la masa total [[M]], actúa como un ancla gravitatoria: el centro de masas final está muy próximo a las coordenadas donde x es 2.0 y y es 2.0 de esta partícula dominante.

Desde el punto de vista de la estabilidad, el hecho de que [[xcm]] sea 2.1 m indica que el sistema está casi perfectamente equilibrado horizontalmente respecto al centro geométrico del conjunto (que estaría en una posición de x igual a 2.0 m). La ligera desviación hacia la derecha (0.1 m) se debe a que [[m2]] (3.0 kg) es más pesada que [[m1]] (2.0 kg), rompiendo la simetría horizontal de la base. Este análisis demuestra que el centro de masas no es solo un punto geométrico, sino el lugar donde se equilibra la inercia de todos los componentes, permitiendo predecir que si el sistema fuera apoyado en el punto de coordenadas x igual a 2.1 y y igual a 2.5, no presentaría ninguna tendencia a rotar bajo la acción de la gravedad.

# Ejemplo de aplicacion real: Equilibrado de Carga en un Dron de Transporte

## Contexto

En el transporte logístico mediante drones multirrotores, la distribución de la carga es el factor determinante para la autonomía de vuelo y la seguridad operativa. Si el centro de masas de la carga (compuesta por varios paquetes discretos) no coincide con el eje central de empuje del dron, los motores deberán trabajar de forma asimétrica, aumentando el consumo de batería y el riesgo de fallo mecánico por sobrecalentamiento. Consideremos un dron que transporta cuatro suministros médicos colocados en diferentes compartimentos de su chasis.

## Estimacion fisica

Supongamos que los paquetes tienen masas desiguales. Si el paquete frontal ([[m1]]) es ligero y el paquete trasero (m4) es muy pesado, el baricentro del dron se desplazará hacia atrás. Los sensores de a bordo detectarán este desplazamiento mediante la inclinación natural del chasis. Los ingenieros deben realizar una estimación rápida: si la carga total [[M]] es de 20 kg y el CM se desplaza más de 5 cm del eje central, el software de control de vuelo entrará en modo de emergencia. 

En nuestro ejemplo anterior, con un CM en x igual a 2.1 y y igual a 2.5, si el eje del dron estuviera en x igual a 2.0 y y igual a 2.0, tendríamos una excentricidad de 0.1 m en el eje x y 0.5 m en el eje y. Esta estimación cuantitativa permite decidir si es necesario reubicar los paquetes o añadir contrapesos para devolver el centro de masas a una zona segura.

## Interpretacion

La interpretación de estos datos es lo que separa un vuelo exitoso de un accidente. El centro de masas actúa como el punto de aplicación de la fuerza de inercia durante las aceleraciones. Si el dron intenta avanzar rápido, la inercia tirará desde el punto con coordenadas x de 2.1 y y de 2.5. Al estar este punto elevado respecto a la base de los motores, se generará un momento de rotación que tenderá a inclinar el dron hacia atrás. 

Comprender la ubicación del baricentro permite optimizar las leyes de control del vehículo. En resumen, la física de sistemas discretos nos proporciona la herramienta matemática para convertir una nube caótica de masas en un solo punto analítico manejable, simplificando radicalmente la complejidad de la dinámica de vuelo y permitiendo una navegación precisa y segura en entornos críticos. Sin este cálculo, el control de cualquier sistema multi-cuerpo sería una tarea de ensayo y error extremadamente costosa y peligrosa.
\r
`;export{e as default};
