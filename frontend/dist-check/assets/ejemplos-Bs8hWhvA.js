const e=`\uFEFF# Ejemplos de Viscosidad y Ley de Newton\r
\r
# Ejemplo tipo examen\r
\r
## Enunciado\r
Se desea calcular el esfuerzo cortante [[tau]] que actúa sobre la pared de un cojinete de deslizamiento lineal. Un bloque de acero con superficie de contacto de 0.5 metros cuadrados se desliza sobre una película de aceite lubricante SAE 30 con espesor de 0.2 milímetros, equivalente a 2 por 10 elevado a menos 4 metros. El bloque se mueve a velocidad constante de 1.2 metros por segundo. La viscosidad dinámica del aceite a la temperatura de operación de 40 grados Celsius es [[mu]] de 0.035 pascal por segundo, y su densidad es [[rho]] de 880 kilogramos por metro cúbico. Determine:\r
1.  La tasa de deformación [[dudy]] en la película de aceite.\r
2.  El esfuerzo cortante [[tau]] generado.\r
3.  La fuerza total de arrastre F necesaria para mantener este movimiento.\r
4.  La viscosidad cinemática [[nu]] del aceite en estas condiciones.\r
5.  El Número de Reynolds [[Re]] para el sistema si el bloque tiene una longitud característica de 1 metro.\r
\r
## Datos\r
-   Superficie de contacto: 0.5 metros cuadrados.\r
-   Espesor de la película (huelgo): 0.2 milímetros, equivalente a 2 por 10 elevado a menos 4 metros.\r
-   Velocidad del bloque: 1.2 metros por segundo.\r
-   Viscosidad dinámica del fluido: [[mu]] de 0.035 pascal por segundo.\r
-   Densidad del fluido: [[rho]] de 880 kilogramos por metro cúbico.\r
\r
## Definición del sistema\r
El sistema consiste en un flujo de Couette plano, donde un fluido está confinado entre una placa inferior estática y una placa superior que se mueve a velocidad constante. El volumen de control es la película de aceite, la cual se deforma continuamente debido al movimiento del bloque de acero.\r
\r
## Modelo físico\r
Utilizaremos el modelo de **Fluido Newtoniano Laminar**. Se asume que el fluido se comporta de forma lineal según la Ley de Newton de la Viscosidad\r
\r
{{f:tau_mu}}\r
\r
, donde el esfuerzo es proporcional a la tasa de deformación [[dudy]]. Para la viscosidad cinemática, usaremos la definición de ratio\r
\r
{{f:nu_mu}}\r
\r
. El perfil de velocidad se considera plenamente desarrollado y lineal debido al pequeño espesor de la película.\r
\r
## Justificación del modelo\r
Este enfoque es **válido** **porque** el aceite SAE 30 a temperaturas moderadas se comporta de forma Newtoniana. **Se asume** que se cumple la condición de no deslizamiento en las paredes, por lo que el fluido en contacto con el bloque viaja a la velocidad V y el fluido en contacto con la base está en reposo. **Se considera** que el flujo es laminar dado que el huelgo es microscópico en comparación con la extensión de la placa, lo que suprime cualquier inestabilidad turbulenta inicial. El uso del gradiente lineal es **correcto** siempre que no existan gradientes de presión externos que curven el perfil.\r
\r
## Resolución simbólica\r
1.  **Cálculo de la tasa de deformación [[dudy]]**:\r
    \r
    Se toma el gradiente de velocidad como razón entre la velocidad relativa y el espesor de la película.\r
    \r
2.  **Aplicación de la Ley de Newton de la viscosidad** usando\r
\r
{{f:tau_mu}}\r
\r
:\r
    \r
    El esfuerzo [[tau]] se obtiene multiplicando [[mu]] por la tasa de deformación [[dudy]].\r
    \r
3.  **Cálculo de la fuerza de arrastre**:\r
    \r
    La fuerza total se obtiene multiplicando [[tau]] por el área de contacto.\r
    \r
4.  **Cálculo de la viscosidad cinemática [[nu]]** usando\r
\r
{{f:nu_mu}}\r
\r
:\r
    \r
    [[nu]] = [[mu]] sobre [[rho]]\r
    \r
5.  **Cálculo del número de Reynolds [[Re]]** usando\r
\r
{{f:re_mu}}\r
\r
:\r
    \r
    [[Re]] = [[rho]]  por  V  por  L sobre [[mu]]\r
    \r
\r
## Sustitución numérica\r
1.  **Tasa de deformación [[dudy]]**:\r
    \r
    Con los datos del problema, la tasa de deformación [[dudy]] es aproximadamente 6000 por segundo.\r
    \r
2.  **Esfuerzo cortante [[tau]]**:\r
    \r
    Con esa tasa de deformación, el esfuerzo cortante [[tau]] resulta aproximadamente 210 pascales.\r
    \r
3.  **Fuerza total F**:\r
    \r
    La fuerza total de arrastre es aproximadamente 105 newtons.\r
    \r
4.  **Viscosidad cinemática [[nu]]**:\r
    \r
    [[nu]] = frac{0.035 Pa por s}{880 kg/m^3} aprox 3.98  por  10^{-5} m^2/s\r
    \r
\r
## Validación dimensional\r
-   Esfuerzo: [Pa por s]  por  [s^{-1}] = Pa. Correcto.\r
-   Fuerza: [Pa]  por  [m^2] = N. Correcto.\r
-   Viscosidad cinemática: [kg/(m por s)] / [kg/m^3] = m^2/s. Correcto.\r
\r
## Interpretación física\r
El resultado obtenido **indica** que el esfuerzo cortante [[tau]] de 210 Pa es el responsable de la resistencia al avance. Esto **significa** que el aceite está disipando energía mecánica en forma de calor a una tasa constante. El valor de [[nu]] de 3.98  por  10^{-5} m^2/s es casi 40 veces superior al del agua, lo que explica por qué este aceite es tan efectivo para amortiguar vibraciones y mantener el régimen laminar [[Re]] bajo control en motores industriales.\r
\r
---\r
\r
# Ejemplo de aplicación real\r
\r
## Contexto\r
### Estimación de la caída de presión en un oleoducto\r
Imagine un oleoducto industrial que transporta petróleo crudo pesado a través de una sección recta de 10 km. Para asegurar el flujo, necesitamos conocer la viscosidad cinemática [[nu]] y entender cómo afecta a la eficiencia del transporte. El crudo tiene una viscosidad dinámica de [[mu]] = 0.8 Pa por s y una densidad de [[rho]] = 900 kg/m^3.\r
\r
## Estimación física\r
Para realizar una **estimación** del comportamiento del flujo, calculamos primero la viscosidad cinemática [[nu]] mediante\r
\r
{{f:nu_mu}}\r
\r
:\r
\r
[[nu]] = frac{0.8 Pa por s}{900 kg/m^3} aprox 8.89  por  10^{-4} m^2/s\r
\r
A continuación, evaluamos el Número de Reynolds [[Re]] mediante la relación\r
\r
{{f:re_mu}}\r
\r
:\r
\r
[[Re]] = [[rho]]  por  V  por  D sobre [[mu]] = 900  por  1  por  0.5 sobre 0.8 aprox 562\r
\r
Como el resultado es inferior a 2300, la **resultante** física es que el flujo es plenamente laminar, lo que permite usar modelos de fricción viscosa pura.\r
\r
## Interpretación\r
Este ejemplo demuestra que el número [[Re]] es el guardián del orden en el transporte de fluidos. Aunque el petróleo crudo sea difícil de mover, su alta viscosidad molecular [[mu]] suprime la turbulencia, permitiendo un flujo predecible. En ingeniería, este análisis es crítico: si el crudo fuera menos viscoso, podría volverse turbulento, aumentando drásticamente la caída de presión y exigiendo bombas mucho más costosas para mantener el suministro.\r
\r
\r
\r
\r
`;export{e as default};
