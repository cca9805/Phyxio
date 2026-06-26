const a=`\uFEFF# Masa volumétrica - Ejemplos Guiados y Resolución\r
\r
# Ejemplo tipo examen\r
## Enunciado\r
Un laboratorio metalúrgico recibe una pieza cilíndrica de una aleación desconocida para su certificación de pureza. La pieza tiene un diámetro de 4.5 cm y una altura de 12 cm. Tras pesarla en una balanza electrónica de precisión, se registra una masa de 1.45 kg. El ingeniero a cargo debe determinar si la pieza es de acero inoxidable de alta masa volumétrica ([[rho]] aproximadamente 8000 kg/m al cubo) o si contiene inclusiones de materiales más ligeros. Se solicita realizar el siguiente análisis técnico:\r
1.  Calcular el volumen [[V]] de la pieza en metros cúbicos (m al cubo).\r
2.  Determinar la masa volumétrica absoluta [[rho]] de la aleación en unidades del Sistema Internacional.\r
3.  Calcular la gravedad específica [[SG]] de la pieza respecto al agua estándar.\r
4.  Determinar el peso específico [[gamma]] de la aleación en N/m al cubo considerando la gravedad terrestre estándar.\r
\r
## Datos\r
- Masa [[m]]: 1.45 kg\r
- Diámetro D: 4.5 cm, equivalente a 0.045 m\r
- Altura h: 12 cm, equivalente a 0.12 m\r
- Gravedad [[g]]: 9.81 m/s al cuadrado\r
- Masa volumétrica de referencia [[rho_0]]: 1000 kg/m al cubo (Agua a 4^circC).\r
\r
## Definición del sistema\r
El sistema bajo estudio es un sólido rígido e indeformable de geometría cilíndrica. Se asume que la aleación es perfectamente homogénea y que no existen porosidades ni burbujas de aire atrapadas en su interior que puedan falsear la medición del volumen geométrico. El análisis se realiza en condiciones estándar de presión y temperatura, por lo que las variaciones dimensionales son despreciables.\r
\r
## Modelo físico\r
Se utiliza el modelo de **Masa volumétrica Uniforme** para cuerpos sólidos homogéneos. Este modelo matemático asume que la masa se distribuye de forma equivalente en cada diferencial de volumen del cilindro. Utilizaremos la definición de masa volumétrica\r
\r
{{f:densidad}}\r
\r
, la relación de gravedad específica\r
\r
{{f:densidad_relativa}}\r
\r
 y la definición de peso específico\r
\r
{{f:peso_especifico}}\r
\r
. El volumen se obtendrá mediante la fórmula geométrica del cilindro circular recto.\r
\r
## Justificación del modelo\r
Este enfoque es **válido** **porque** la pieza es un objeto sólido con fronteras bien definidas y su masa ha sido medida con alta precisión. **Se asume** homogeneidad dado que se trata de una aleación industrial certificada. **Se considera** despreciable el efecto de la flotabilidad del aire sobre la balanza, dado que la masa volumétrica del metal es varios órdenes de magnitud superior a la del aire. El uso del volumen geométrico es **correcto** siempre que la pieza no presente irregularidades superficiales significativas que afecten al cálculo del radio y la altura.\r
\r
## Resolución simbólica\r
1.  **Cálculo del volumen**:\r
    \r
    El volumen se obtiene multiplicando el área circular de la base por la altura del cilindro.\r
    \r
2.  **Masa volumétrica absoluta**:\r
    Utilizamos la definición\r
\r
{{f:densidad}}\r
\r
:\r
    \r
    La masa volumétrica absoluta se obtiene dividiendo la masa medida entre el volumen calculado.\r
    \r
3.  **Gravedad específica**:\r
    Aplicamos el ratio\r
\r
{{f:densidad_relativa}}\r
\r
:\r
    \r
    La gravedad específica se obtiene comparando la masa volumétrica de la pieza con la referencia de agua estándar.\r
    \r
4.  **Peso específico**:\r
    Utilizamos la relación\r
\r
{{f:peso_especifico}}\r
\r
:\r
    \r
    El peso específico se obtiene multiplicando la masa volumétrica por la gravedad local.\r
    \r
\r
## Sustitución numérica\r
1.  **Volumen V**:\r
    - El volumen se evalúa con radio 0.0225 m y altura 0.12 m.\r
    - El volumen resultante es aproximadamente 0.00019085 m al cubo.\r
2.  **Masa volumétrica [[rho]]**:\r
    - La masa volumétrica calculada es aproximadamente 7597.5 kg/m al cubo.\r
3.  **Gravedad específica [[SG]]**:\r
    - La gravedad específica resultante es aproximadamente [[SG]] = 7.5975.\r
4.  **Peso específico [[gamma]]**:\r
    - El peso específico resultante es aproximadamente [[gamma]] = 74531.5 N/m al cubo.\r
\r
## Validación dimensional\r
- Masa volumétrica: [kg] / [m al cubo] = [kg/m al cubo]. Coherente con la definición de masa por unidad de volumen.\r
- [[SG]] compara dos masas volumétricas con las mismas unidades, por eso es una magnitud adimensional.\r
- Peso específico: [kg/m al cubo]  multiplicado por  [m/s al cuadrado] = [kg  multiplicado por  m / (s al cuadrado  multiplicado por  m al cubo)] = [N/m al cubo]. Coherente con una fuerza volumétrica.\r
\r
## Interpretación física\r
El resultado obtenido **indica** que la aleación tiene una masa volumétrica de aproximadamente 7600 kg/m al cubo. Al compararla con el acero inoxidable estándar (8000 kg/m al cubo), observamos que es ligeramente menos densa. Esto **significa** que la pieza podría contener inclusiones de materiales más ligeros o ser una variante de aleación diferente. El valor de [[SG]] aproximadamente 7.6 es plenamente **coherente** para un material metálico pesado. El peso específico calculado de 74.5 kN/m al cubo es el valor que se usaría para calcular la presión sobre la base si el cilindro estuviera apoyado verticalmente.\r
\r
# Ejemplo de aplicación real\r
## Contexto\r
**Estratificación y corrientes en el Golfo de México**. En los sistemas oceánicos, la masa volumétrica del agua de mar no es constante; depende de la temperatura y de la concentración de sales disueltas. Cuando el agua dulce de un río (como el Mississippi) desemboca en el mar, se produce un fenómeno de estratificación donde el agua dulce, al ser menos densa, fluye por encima del agua salada más densa.\r
\r
## Estimación física\r
Para realizar una **estimación** del comportamiento del flujo, consideramos agua dulce con [[rho]] dulce aproximadamente 1000 kg/m al cubo y agua salada con [[rho]] salada aproximadamente 1025 kg/m al cubo. Al calcular la gravedad específica del agua dulce respecto a la salada:\r
\r
La comparación entre agua dulce y agua salada da una gravedad específica aproximada de [[SG]] = 0.975.\r
\r
Este valor inferior a uno nos da una **aproximación** cuantitativa del potencial de flotación. La diferencia de masa volumétrica, aunque pequeña en términos absolutos (2.5\\%), es la **resultante** física que genera las fuerzas de empuje necesarias para mantener el agua dulce en la superficie durante kilómetros antes de mezclarse por completo.\r
\r
## Interpretación\r
Este ejemplo demuestra que la masa volumétrica [[rho]] es el motor que impulsa la dinámica oceánica. Pequeños cambios en la concentración de masa por volumen deciden la trayectoria de las corrientes marinas y la distribución de nutrientes. En ingeniería ambiental, este análisis es crítico para predecir la dispersión de contaminantes: un vertido menos denso que el agua de mar permanecerá en la superficie, facilitando su recogida mecánica pero aumentando el riesgo para las aves marinas.\r
`;export{a as default};
