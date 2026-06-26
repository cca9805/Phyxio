# Ejemplo tipo examen

## Enunciado

Se analiza detalladamente un choque unidimensional entre dos esferas de materiales distintos para determinar cómo el coeficiente de restitución[[e]]rige el estado final del sistema y las transferencias energéticas involucradas. El escenario plantea una esfera de masa[[m1]]igual a 2 kg que se desplaza inicialmente con una velocidad[[v1i]]de 5 m/s hacia la derecha sobre una superficie horizontal perfectamente pulida y sin fricción. En su trayectoria, esta esfera impacta frontalmente con una segunda esfera de masa[[m2]]igual a 3 kg que se encuentra inicialmente en reposo absoluto, por lo que su velocidad inicial[[v2i]]es de 0 m/s. 

Estudios de laboratorio previos han determinado que el coeficiente de restitución[[e]]específico para este par de materiales y geometría es de 0,6 bajo las condiciones de temperatura actuales. El objetivo académico del problema es triple: primero, calcular las velocidades finales individuales de cada esfera,[[v1f]]y[[v2f]], inmediatamente después de que cesa el contacto; segundo, cuantificar la magnitud exacta de la pérdida de energía cinética[[DeltaK]]producida por el choque; y tercero, realizar una interpretación física profunda de la eficiencia del proceso de impacto basada en los resultados obtenidos.

## Datos

Para asegurar una resolución rigurosa, clasificamos los datos de entrada según su naturaleza física:
- **Estado cinemático inicial (Causas)**: La velocidad del proyectil[[v1i]]es de 5 m/s y la velocidad del blanco[[v2i]]es de 0 m/s.
- **Propiedades inerciales del sistema**: La masa del cuerpo incidente[[m1]]es de 2 kg y la masa del cuerpo objetivo[[m2]]es de 3 kg.
- **Parámetro constitutivo del contacto**: El coeficiente de restitución[[e]]se fija en 0,6, lo que predetermina un comportamiento parcialmente inelástico.
- **Variables de salida esperadas**: Velocidades finales[[v1f]]y[[v2f]], masa reducida del sistema[[mu]]y pérdida de energía cinética[[DeltaK]].

Se establece por convención que el sentido positivo del eje X apunta hacia la derecha.

## Definición del sistema

El sistema físico bajo estudio está constituido exclusivamente por el conjunto de las dos esferas en colisión. Dado que el impacto ocurre sobre una superficie horizontal sin rozamiento, las fuerzas externas netas en la dirección del movimiento son nulas. Las fuerzas de gravedad y la reacción normal del suelo se cancelan mutuamente en el eje vertical, lo que nos permite tratar el sistema como aislado en el eje horizontal. Durante el brevísimo intervalo de tiempo que dura la colisión, las fuerzas internas de contacto (fuerzas impulsivas) son órdenes de magnitud superiores a cualquier otra fuerza externa, lo que refuerza la validez de considerar el sistema como aislado para el balance de momento.

## Modelo físico

Se adopta el modelo estándar de colisión impulsiva unidimensional. Este marco teórico asume que los cuerpos son lo suficientemente rígidos como para que el contacto sea casi instantáneo, permitiendo despreciar el cambio de posición de los centros de masa durante la interacción. La resolución se basa en la aplicación simultánea de dos principios:
1. La conservación del momento lineal del sistema completo, que rige la distribución de velocidades basándose en las masas.
2. La ley de Newton para la restitución, que utiliza el parámetro[[e]]para modelar la respuesta elástica de los materiales.

Se asume que no hay rotación de las esferas y que el choque es central, eliminando cualquier componente transversal de la velocidad.

## Justificación del modelo

La elección del modelo basado en el coeficiente de restitución[[e]]está físicamente justificada por la necesidad de simplificar la fenomenología del contacto. En un choque real entre metales o polímeros, se producen ondas de deformación, vibraciones acústicas y micro-fracturas que disipan energía de forma extremadamente compleja. Intentar resolver estas interacciones mediante las leyes de la elasticidad de medios continuos requeriría un nivel de detalle computacional que oscurecería la física fundamental del problema. El coeficiente[[e]]actúa como una "función de transferencia" macroscópica que condensa toda esa micro-física en un único valor experimental, permitiendo una predicción robusta de las velocidades de salida sin necesidad de conocer la historia temporal de las fuerzas de contacto. Es el modelo mínimo necesario para obtener una solución físicamente consistente.

## Resolución simbólica

El procedimiento analítico consiste en resolver el sistema de ecuaciones acopladas siguiendo estos pasos estructurales:

1. **Conservación del momento lineal**:
   Establecemos que el momento total del sistema se mantiene constante.

2. **Ecuación de restitución de velocidades**:
   Utilizamos la definición fundamental del parámetro para ligar las velocidades relativas:
{{f:e}}

3. **Cálculo de la inercia efectiva**:
   Para determinar la energía disipada, primero calculamos la masa reducida[[mu]]del sistema binario:
{{f:mu}}

4. **Cálculo del balance energético**:
   La pérdida de energía cinética[[DeltaK]]se cuantifica mediante la relación directa con el coeficiente:
{{f:perdida_energia}}

5. **Verificación de límites físicos**:
   Todo resultado debe ser consistente con el rango de validez del parámetro de restitución:
{{f:rango_e}}

6. **Predicción de rebotes adicionales**:
   En caso de que el sistema involucre rebotes sucesivos, se aplicaría la fórmula de decaimiento:
{{f:altura_rebote}}

## Sustitución numérica

Insertamos los valores del problema en las expresiones anteriores:

- **Balance de momento lineal**:
  Multiplicamos cada masa por su velocidad. Obtenemos que el momento total inicial es de 10 kg m/s, que debe ser igual a la suma de los momentos finales.

- **Aplicación de la restitución**:
  La velocidad relativa de separación[[vrel_f]]se obtiene multiplicando[[e]]por la velocidad relativa inicial:
{{f:vrel_f}}
  Esto nos indica que la diferencia entre las velocidades finales debe ser de 3 m/s.

- **Cálculo de velocidades finales**:
  Resolviendo el sistema de ecuaciones, obtenemos que la velocidad final del primer cuerpo[[v1f]]es de 0,2 m/s y la del segundo cuerpo[[v2f]]es de 3,2 m/s.

- **Cálculo de energía disipada**:
  Utilizando la masa reducida[[mu]]de 1,2 kg y el factor de disipación, obtenemos que la pérdida de energía cinética[[DeltaK]]es de 9,6 Julios.

## Validación dimensional

Es imperativo verificar que los resultados son dimensionalmente consistentes. Las velocidades[[v1f]]y[[v2f]]se miden en metros por segundo, lo cual es correcto para una magnitud de longitud entre tiempo. El coeficiente[[e]]se obtiene del cociente entre dos diferencias de velocidades, resultando en un número adimensional, coherente con la teoría. Finalmente, la pérdida de energía[[DeltaK]]tiene dimensiones de energía, Julios en el Sistema Internacional, confirmando la validez del despeje.

## Interpretación física

Los resultados revelan un comportamiento típico de una colisión parcialmente inelástica. Ambas esferas continúan su movimiento hacia la derecha tras el impacto. La esfera incidente[[m1]], a pesar de ser la que portaba todo el momento inicial, ha quedado prácticamente frenada, conservando solo una velocidad residual de 0,2 m/s. Esto indica que la transferencia de momento hacia la esfera blanca[[m2]]ha sido casi total.

Desde el punto de vista del modelo, verificamos que el valor obtenido para[[e]]se encuentra dentro del rango físico permitido por la definición. La pérdida de 9,6 Julios representa exactamente el 64% de la energía cinética relativa inicial disponible para el impacto.

# Ejemplo de aplicación real

## Contexto

Consideremos un escenario de control de calidad en una fábrica de materiales deportivos. Se desea verificar el cumplimiento de la normativa para una pelota de tenis de alta competición. El procedimiento estándar consiste en un ensayo de caída libre vertical sobre una placa de granito perfectamente rígida. La pelota se libera desde una altura inicial[[h0]]de 2,00 metros. Tras el impacto, se mide la altura máxima del primer rebote[[hf]]. En nuestra prueba, se registra una altura de rebote[[hf]]de 1,28 metros. Se requiere determinar el coeficiente de restitución[[e]]del lote y predecir la altura máxima tras el tercer rebote[[hn]].

## Estimación física

Antes de proceder con el cálculo exacto, realizamos una lectura cualitativa y cuantitativa preliminar. La pelota ha recuperado exactamente el 64% de su altura original. Puesto que la altura máxima[[hf]]es proporcional al cuadrado de la velocidad de salida, estimamos que el coeficiente de restitución[[e]]debe ser la raíz cuadrada de este factor. Nuestra estimación cuantitativa es que el valor de[[e]]será 0,80. Este valor de 0,80 sugiere una pelota con una respuesta elástica eficiente, ideal para el juego profesional.

## Interpretación

Para obtener el valor técnico preciso, aplicamos la fórmula de derivación experimental:
{{f:e_desde_alturas}}
Sustituyendo los valores medidos de 1,28 m y 2,00 m, obtenemos un coeficiente de restitución[[e]]exactamente igual a 0,80.

Para profundizar en el análisis, podemos predecir cuánta altura conservará la pelota tras un número determinado de rebotes sucesivos, por ejemplo con un número de botes[[n]]igual a 3. Aplicando el modelo de decaimiento geométrico para obtener la altura del n-ésimo bote[[hn]]:
{{f:altura_rebote}}
Calculando el resultado para el tercer bote con el valor obtenido de 0,80, obtenemos una altura[[hn]]de 0,524 metros.

La interpretación causal de este resultado es fundamental: la pelota pierde el 20% de su rapidez relativa en cada contacto con el suelo. Este comportamiento ilustra por qué en deportes como el tenis, el jugador debe aportar trabajo mecánico constante para compensar la disipación inevitable que el coeficiente[[e]]impone en cada impacto con la superficie.

