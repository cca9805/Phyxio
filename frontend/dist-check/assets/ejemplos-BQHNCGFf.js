const e=`# Ejemplo tipo examen: El gato mecánico de tornillo

## Enunciado

Un gato mecánico se utiliza para elevar un vehículo de carga pesada durante una reparación de emergencia. El tornillo de potencia del gato tiene un paso de rosca[[p]]de 4 mm y se acciona mediante una palanca giratoria con un radio efectivo[[r]]de 25 cm. El sistema presenta un rendimiento[[eta]]del 40 por ciento debido a la fricción interna en los filetes de la rosca. Determina: (a) la fuerza tangencial[[F]]necesaria para elevar una carga axial[[R]]de 5000 N, (b) la ventaja mecánica[[ventaja_mecanica]]real del sistema, y (c) el torque[[tau]]que se debe aplicar a la palanca para mantener el movimiento constante.

## Datos

Los parámetros físicos del sistema son los siguientes:
- Carga axial (peso del vehículo):[[R]](5000 N)
- Paso de rosca convertido a metros:[[p]](0.004 m)
- Radio efectivo de la palanca:[[r]](0.25 m)
- Rendimiento del mecanismo:[[eta]](0.40)

## Definición del sistema

El sistema físico está compuesto por un tornillo de potencia y una palanca de accionamiento manual. Se considera un régimen de equilibrio cuasiestático donde la fuerza aplicada[[F]]por el operario debe vencer tanto la resistencia gravitatoria de la carga axial[[R]]como las fuerzas de fricción disipativas en la interfaz de la rosca. La ventaja mecánica[[ventaja_mecanica]]del sistema se define como la capacidad de amplificación de fuerza, relacionando la carga axial[[R]]de salida con el esfuerzo de entrada[[F]].

## Modelo físico

Se adopta el modelo de masa constante y plano inclinado helicoidal con pérdidas energéticas por fricción. El tornillo actúa como un convertidor de régimen que transforma el trabajo circular de la palanca en trabajo lineal axial. La fracción útil del sistema se modela mediante el parámetro[[eta]], que vincula la ventaja mecánica[[ventaja_mecanica]]real con la ideal. Se asume que la carga[[R]]se distribuye uniformemente sobre los hilos de la rosca y que el radio[[r]]es constante durante toda la operación.

## Justificación del modelo

La justificación de este modelo radica en la naturaleza disipativa de los tornillos de potencia reales. A diferencia de una palanca ideal, el tornillo presenta una gran superficie de contacto donde el deslizamiento bajo carga genera un rozamiento intenso que no puede ignorarse. El uso del rendimiento[[eta]]es por tanto esencial para no subestimar la fuerza necesaria. Se verifica además la escala geométrica del mecanismo para asegurar que el avance es funcional frente a la trayectoria de giro.

## Resolución simbólica

El proceso de resolución conecta la geometría específica del tornillo con el esfuerzo dinámico necesario para el equilibrio. Primero, calculamos la ventaja mecánica ideal basada en la relación geométrica entre la circunferencia de giro y el paso de la hélice:

{{f:ventaja_mecanica_ideal}}

A continuación, determinamos la fuerza real de accionamiento[[F]]necesaria para mover la carga axial[[R]], integrando el rendimiento[[eta]]del mecanismo en el balance energético:

{{f:fuerza_real}}

En este punto, podemos contrastar este valor con la fuerza ideal teórica que se requeriría si no existiera rozamiento:

{{f:fuerza_ideal}}

Finalmente, calculamos el torque[[tau]]o momento torsor real que el operario debe suministrar sobre el eje del husillo utilizando la definición básica de momento por palanca:

{{f:torque_basico}}

Para este diseño industrial, el torque final de operación consolidado es:

{{f:torque_real}}

## Sustitución numérica

Antes de sustituir, verificamos la condición geométrica que garantiza que el tornillo opera como máquina simple con un ángulo de hélice funcional:

{{f:condicion_geometria}}

1. **Ventaja mecánica ideal**: Al sustituir los valores geométricos, obtenemos una amplificación teórica de aproximadamente 393 veces.
2. **Fuerza real de accionamiento**: Introduciendo el rendimiento del 40 por ciento, la fuerza[[F]]requerida resulta ser de aproximadamente **31,83 N**.
3. **Torque real**: El producto de la fuerza por el radio nos da un torque de aproximadamente **7,96 Nm**.
4. **Error del modelo**: El error relativo[[error_relativo]]cometido si ignoráramos la fricción sería del **60 por ciento**:

{{f:error_rendimiento}}

## Validación dimensional

El impulso o trabajo de entrada debe tener dimensiones consistentes. La ventaja mecánica[[ventaja_mecanica]]es un cociente de fuerzas resultando en una magnitud adimensional. En la expresión de la fuerza real, el numerador tiene unidades de trabajo mientras que el denominador tiene unidades de longitud, resultando en Newtons. El torque[[tau]]combina fuerza y longitud resultando en Nm.

## Interpretación física

El gato mecánico permite al operario multiplicar su fuerza aplicada[[F]]por un factor real de **157**. Esto significa que con el esfuerzo equivalente a levantar una botella de agua, se puede elevar una carga axial[[R]]de media tonelada. Esta ganancia no es gratuita; se paga recorriendo una distancia circular inmensa para obtener un avance axial[[p]]minúsculo de solo 4 mm.

Desde una perspectiva causal, el rendimiento[[eta]]del 40 por ciento revela que el 60 por ciento del trabajo realizado por el humano se disipa como calor en la interfaz de la rosca. Sin embargo, esta ineficiencia es estructuralmente deseable: es la que garantiza la propiedad de **autobloqueo**. Gracias a este rozamiento, el tornillo es capaz de sostener el peso del vehículo sin necesidad de que el operario siga haciendo fuerza, evitando que el gato retroceda por gravedad. Es un ejemplo perfecto de cómo la ingeniería utiliza las pérdidas por fricción para garantizar la seguridad en máquinas de elevación. El cálculo del rendimiento global confirma este comportamiento disipativo:

{{f:eficiencia}}

Este fenómeno de autobloqueo es lo que diferencia a un gato de tornillo de una polea o una palanca. En una palanca ideal, si sueltas la carga, esta cae inmediatamente. En el tornillo, la "ineficiencia" se convierte en un freno pasivo. Es una lección profunda de diseño: a veces, el desperdicio de energía (fricción) es lo que permite la funcionalidad segura del sistema. Sin este 60% de pérdida, el gato sería una trampa mortal. La ventaja mecánica real, por tanto, no es solo un número, sino un compromiso entre potencia y estabilidad estructural.

---

# Ejemplo de aplicación real: Prensa industrial

## Contexto

En un taller de carpintería, una prensa de mano se utiliza para mantener unidas dos piezas de madera mientras el pegamento se seca. El operario aplica un torque[[tau]]de 15 Nm sobre el mango de la prensa. El tornillo tiene un paso[[p]]fino de 2 mm y un rendimiento[[eta]]estimado del 35 por ciento. El objetivo es estimar la capacidad de carga axial[[R]].

## Estimación física

Realizaremos un cálculo de orden de magnitud para evaluar el balance energético por revolución completa.

*   **Entrada energética**: El trabajo mecánico inyectado es de **94,25 J** por cada revolución de 360 grados, calculado a partir del torque[[tau]].
*   **Pérdidas disipativas**: Aproximadamente el 65 por ciento de la energía (unos **61 J**) se convierte en calor debido al rendimiento[[eta]]bajo.
*   **Acción útil**: El resto de la energía (unos **33 J**) realiza el trabajo efectivo de compresión.
*   **Carga axial resultante**: Al dividir el trabajo útil entre el paso de rosca[[p]], la carga axial[[R]]generada alcanza los **16500 N**, lo que equivale a comprimir con **1,7 toneladas**.

## Interpretación

La interpretación física de este resultado subraya la dualidad del tornillo: fuerza extrema combinada con seguridad pasiva. El bajo rendimiento no es una pérdida inútil, sino el mecanismo de seguridad que impide que la prensa se afloje sola cuando el operario suelta el mango. La ventaja mecánica[[ventaja_mecanica]]real sigue siendo lo suficientemente alta para que una sola mano humana controle fuerzas de nivel tonelada. Esta estabilidad estructural depende de la integridad de la hélice y el mantenimiento de la ventaja mecánica real.
`;export{e as default};
