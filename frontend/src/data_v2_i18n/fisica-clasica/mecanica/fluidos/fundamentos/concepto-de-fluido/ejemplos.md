# Ejemplo tipo examen

## Enunciado
Un eje de 20  cm de diámetro gira a 1200  RPM dentro de un cojinete de 20.04  cm de diámetro y 30  cm de longitud. El espacio entre el eje y el cojinete está lleno de un aceite con viscosidad dinámica [[mu]] = 0.08  Pa s y densidad [[rho]] = 900  kg/m al cubo. Suponiendo que el perfil de velocidades en el aceite es lineal, calcula el esfuerzo cortante [[tau]] que actúa sobre el eje, la fuerza de fricción total [[F]] y la viscosidad cinemática [[nu]] del aceite.

## Datos
*   Diámetro del eje (D sub eje): 0.2  m
*   Diámetro del cojinete (D sub coj): 0.2004  m
*   Velocidad de giro (N): 1200  RPM
*   Longitud ([[L]]): 0.3  m
*   Viscosidad dinámica [[mu]]: 0.08  Pa s
*   Densidad [[rho]]: 900  kg/m al cubo

## Definición del sistema
El sistema consiste en un fluido (aceite) confinado en el espacio anular entre dos cilindros concéntricos. Dado que el espesor del fluido es mucho menor que el radio del eje, el sistema se comporta localmente como un flujo de Couette entre dos placas paralelas. La geometría circular se despliega en una aproximación lineal que simplifica enormemente el análisis matemático sin perder precisión física relevante.

## Modelo físico
Se asume un flujo laminar y estacionario de un fluido Newtoniano incompresible. El perfil de velocidades se considera lineal, lo que simplifica el gradiente de velocidad [[du_dy]] a una constante a lo largo de todo el espesor del fluido. Esta asunción de linealidad es válida porque el número de Reynolds en el huelgo es bajo, evitando la transición a la turbulencia que complicaría el perfil de velocidades.

## Justificación del modelo
La condición de no deslizamiento asegura que la velocidad del fluido en la pared del eje es igual a su velocidad tangencial V, y cero en la pared del cojinete. El pequeño huelgo h justifica la aproximación de placas paralelas. El aceite mineral a estas velocidades se comporta de forma Newtoniana, validando la ley de viscosidad de Newton ley de Newton de la viscosidad. La estabilidad térmica se asume constante para este cálculo inicial, permitiendo que la viscosidad [[mu]] se trate como un parámetro fijo.

## Resolución simbólica

Formulas usadas en la resolucion:
{{f:omega_from_RPM}}

{{f:tangential_velocity_rot}}

{{f:shear_rate_def}}

{{f:newton_viscosity}}

{{f:shear_force_total}}

{{f:viscosity_kinematic}}

**1. Velocidad tangencial (V):**
Se determina la velocidad en la superficie del eje a partir de la velocidad angular conversi?n de RPM a velocidad angular y el radio, aplicando la relación de velocidad tangencial relaci?n de velocidad tangencial:

La velocidad tangencial se obtiene convirtiendo la frecuencia de giro en velocidad angular y multiplicando por el radio del eje.


**2. Espesor del fluido (h):**
El huelgo radial se calcula como la diferencia de radios:

El espesor de la pel?cula fluida se obtiene como la mitad de la diferencia entre los di?metros del cojinete y del eje.


**3. Tasa de deformación definici?n de tasa de deformaci?n:**
Bajo la hipótesis de perfil lineal, la tasa de deformación se define por definici?n de tasa de deformaci?n:

La tasa de deformaci?n se obtiene dividiendo la velocidad tangencial entre el espesor de la pel?cula.


**4. Esfuerzo cortante [[tau]]:**
Aplicamos la ley de Newton de la viscosidad ley de Newton de la viscosidad para obtener el esfuerzo cortante:

El esfuerzo cortante se obtiene a partir de la viscosidad din?mica y la tasa de deformaci?n.


**5. Área de contacto [[A]]:**
Calculamos el área lateral del eje en contacto con el fluido:

El ?rea de contacto se eval?a con el di?metro del eje y la longitud [[L]] del cojinete.


**6. Fuerza de fricción [[F]]:**
Utilizamos la definición de fuerza de cizallamiento total relaci?n de fuerza cortante total:

F = [[tau]]  multiplicado por  A


**7. Viscosidad cinemática [[nu]]:**
Finalmente, relacionamos las propiedades del fluido mediante la definición de definici?n de viscosidad cinem?tica:

La viscosidad cinem?tica se obtiene normalizando la viscosidad din?mica con la densidad.


## Sustitución numérica
*   Velocidad tangencial obtenida con los datos de rotaci?n: 12.566 m/s.
*   Espesor de pel?cula obtenido a partir de la holgura: 0.0002 m.
*   Tasa de deformaci?n obtenida al dividir velocidad entre espesor: 62830 s^-1.
*   Esfuerzo cortante obtenido con viscosidad din?mica y tasa de deformaci?n: 5026.4 Pa.
*   ?rea de contacto evaluada con di?metro del eje y longitud del cojinete: 0.1885 m^2.
*   Fuerza tangencial total obtenida con esfuerzo cortante y ?rea: 947.5 N.
*   Viscosidad cinem?tica obtenida con viscosidad din?mica y densidad: 8.89 x 10^-5 m^2/s.

## Validación dimensional

[[[tau]]] = [Pa  multiplicado por  s]  multiplicado por  [m/s] / [m] = [Pa  multiplicado por  s]  multiplicado por  [s elevado a -1] = [Pa]

La unidad de esfuerzo cortante es el Pascal, lo cual es correcto para una fuerza por unidad de área.

[F] = [Pa]  multiplicado por  [m al cuadrado] = [N/m al cuadrado]  multiplicado por  [m al cuadrado] = [N]

La fuerza se obtiene en Newtons, lo cual es coherente.

[[[nu]]] = ([Pa  multiplicado por  s] dividido por [kg/m al cubo]) = ([(Pa)  multiplicado por  s] dividido por [kg/m al cubo]) = [m al cuadrado/s]

La unidad de viscosidad cinemática es m al cuadrado/s, lo cual es correcto para una difusividad. Estas dimensiones confirman que las fórmulas aplicadas respetan la estructura física del Sistema Internacional. Se ha verificado que el Pascal equivale a un Newton por metro cuadrado.

## Interpretación física
El valor de [[tau]] = 5026  Pa indica que el fluido ejerce una resistencia considerable al giro del eje. Esta resistencia es directamente proporcional a la viscosidad [[mu]] y a la velocidad V, e inversamente proporcional al espesor de la película h. Una viscosidad mayor requeriría un par motor más alto para mantener la misma velocidad de giro. El trabajo realizado contra esta fuerza se disipa íntegramente en forma de calor, aumentando la energía interna del aceite.

# Ejemplo de aplicación real

## Contexto
Consideremos el diseño de un sistema de frenado viscoso para un dispositivo de seguridad industrial en una planta de ensamblaje. El dispositivo debe disipar energía mediante el cizallamiento de un fluido de alta viscosidad (silicona especial) contenido en una cámara pequeña para evitar que una carga pesada descienda demasiado rápido en caso de fallo mecánico. Este tipo de amortiguadores son críticos para la protección de maquinaria costosa y la seguridad de los operarios.

## Estimación física
Si el dispositivo tiene un area de contacto efectiva [[A]] de 0.1 m^2 y el esfuerzo cortante calculado [[tau]] es de 5000 Pa, la fuerza de frenado estimada [[F]] es de 500 N. Esta fuerza equivale al peso de una masa de aproximadamente 50 kg, una magnitud fisica significativa para un sistema de frenado a pequena escala. La tasa de deformacion de 60000 s^-1 es extremadamente alta y genera calor por friccion interna; por eso la refrigeracion es parte del criterio fisico del modelo.

## Interpretación
El concepto de fluido nos permite predecir que, a diferencia de un freno de fricción sólida tradicional, la fuerza de frenado viscosa aumentará linealmente con la velocidad de giro. Esto proporciona un frenado suave y progresivo: cuanto más rápido intente moverse el sistema, más fuerte será la oposición del fluido. Sin embargo, el límite de validez de este cálculo depende de que la temperatura no degrade la viscosidad [[mu]] del fluido, lo que alteraría la fuerza de frenado estimada de manera no lineal. Además, a estas tasas de deformación tan elevadas, el fluido podría empezar a mostrar efectos no-Newtonianos, como el adelgazamiento por corte, lo que requeriría un modelo más avanzado que la simple ley de Newton ley de Newton de la viscosidad. En conclusión, la comprensión profunda del comportamiento del fluido es lo que garantiza la fiabilidad del sistema de seguridad.
