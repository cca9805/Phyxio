# Masa volumétrica - Ejemplos Guiados y Resolución

# Ejemplo tipo examen
## Enunciado
Un laboratorio metalúrgico recibe una pieza cilíndrica de una aleación desconocida para su certificación de pureza. La pieza tiene un diámetro de 4.5 cm y una altura de 12 cm. Tras pesarla en una balanza electrónica de precisión, se registra una masa de 1.45 kg. El ingeniero a cargo debe determinar si la pieza es de acero inoxidable de alta masa volumétrica ([[rho]] aproximadamente 8000 kg/m al cubo) o si contiene inclusiones de materiales más ligeros. Se solicita realizar el siguiente análisis técnico:
1.  Calcular el volumen [[V]] de la pieza en metros cúbicos (m al cubo).
2.  Determinar la masa volumétrica absoluta [[rho]] de la aleación en unidades del Sistema Internacional.
3.  Calcular la gravedad específica [[SG]] de la pieza respecto al agua estándar.
4.  Determinar el peso específico [[gamma]] de la aleación en N/m al cubo considerando la gravedad terrestre estándar.

## Datos
- Masa [[m]]: 1.45 kg
- Diámetro D: 4.5 cm, equivalente a 0.045 m
- Altura h: 12 cm, equivalente a 0.12 m
- Gravedad [[g]]: 9.81 m/s al cuadrado
- Masa volumétrica de referencia [[rho_0]]: 1000 kg/m al cubo (Agua a 4^circC).

## Definición del sistema
El sistema bajo estudio es un sólido rígido e indeformable de geometría cilíndrica. Se asume que la aleación es perfectamente homogénea y que no existen porosidades ni burbujas de aire atrapadas en su interior que puedan falsear la medición del volumen geométrico. El análisis se realiza en condiciones estándar de presión y temperatura, por lo que las variaciones dimensionales son despreciables.

## Modelo físico
Se utiliza el modelo de **Masa volumétrica Uniforme** para cuerpos sólidos homogéneos. Este modelo matemático asume que la masa se distribuye de forma equivalente en cada diferencial de volumen del cilindro. Utilizaremos la definición de masa volumétrica

{{f:densidad}}

, la relación de gravedad específica

{{f:densidad_relativa}}

 y la definición de peso específico

{{f:peso_especifico}}

. El volumen se obtendrá mediante la fórmula geométrica del cilindro circular recto.

## Justificación del modelo
Este enfoque es **válido** **porque** la pieza es un objeto sólido con fronteras bien definidas y su masa ha sido medida con alta precisión. **Se asume** homogeneidad dado que se trata de una aleación industrial certificada. **Se considera** despreciable el efecto de la flotabilidad del aire sobre la balanza, dado que la masa volumétrica del metal es varios órdenes de magnitud superior a la del aire. El uso del volumen geométrico es **correcto** siempre que la pieza no presente irregularidades superficiales significativas que afecten al cálculo del radio y la altura.

## Resolución simbólica
1.  **Cálculo del volumen**:
    
    El volumen se obtiene multiplicando el área circular de la base por la altura del cilindro.
    
2.  **Masa volumétrica absoluta**:
    Utilizamos la definición

{{f:densidad}}

:
    
    La masa volumétrica absoluta se obtiene dividiendo la masa medida entre el volumen calculado.
    
3.  **Gravedad específica**:
    Aplicamos el ratio

{{f:densidad_relativa}}

:
    
    La gravedad específica se obtiene comparando la masa volumétrica de la pieza con la referencia de agua estándar.
    
4.  **Peso específico**:
    Utilizamos la relación

{{f:peso_especifico}}

:
    
    El peso específico se obtiene multiplicando la masa volumétrica por la gravedad local.
    

## Sustitución numérica
1.  **Volumen V**:
    - El volumen se evalúa con radio 0.0225 m y altura 0.12 m.
    - El volumen resultante es aproximadamente 0.00019085 m al cubo.
2.  **Masa volumétrica [[rho]]**:
    - La masa volumétrica calculada es aproximadamente 7597.5 kg/m al cubo.
3.  **Gravedad específica [[SG]]**:
    - La gravedad específica resultante es aproximadamente [[SG]] = 7.5975.
4.  **Peso específico [[gamma]]**:
    - El peso específico resultante es aproximadamente [[gamma]] = 74531.5 N/m al cubo.

## Validación dimensional
- Masa volumétrica: [kg] / [m al cubo] = [kg/m al cubo]. Coherente con la definición de masa por unidad de volumen.
- [[SG]] compara dos masas volumétricas con las mismas unidades, por eso es una magnitud adimensional.
- Peso específico: [kg/m al cubo]  multiplicado por  [m/s al cuadrado] = [kg  multiplicado por  m / (s al cuadrado  multiplicado por  m al cubo)] = [N/m al cubo]. Coherente con una fuerza volumétrica.

## Interpretación física
El resultado obtenido **indica** que la aleación tiene una masa volumétrica de aproximadamente 7600 kg/m al cubo. Al compararla con el acero inoxidable estándar (8000 kg/m al cubo), observamos que es ligeramente menos densa. Esto **significa** que la pieza podría contener inclusiones de materiales más ligeros o ser una variante de aleación diferente. El valor de [[SG]] aproximadamente 7.6 es plenamente **coherente** para un material metálico pesado. El peso específico calculado de 74.5 kN/m al cubo es el valor que se usaría para calcular la presión sobre la base si el cilindro estuviera apoyado verticalmente.

# Ejemplo de aplicación real
## Contexto
**Estratificación y corrientes en el Golfo de México**. En los sistemas oceánicos, la masa volumétrica del agua de mar no es constante; depende de la temperatura y de la concentración de sales disueltas. Cuando el agua dulce de un río (como el Mississippi) desemboca en el mar, se produce un fenómeno de estratificación donde el agua dulce, al ser menos densa, fluye por encima del agua salada más densa.

## Estimación física
Para realizar una **estimación** del comportamiento del flujo, consideramos agua dulce con [[rho]] dulce aproximadamente 1000 kg/m al cubo y agua salada con [[rho]] salada aproximadamente 1025 kg/m al cubo. Al calcular la gravedad específica del agua dulce respecto a la salada:

La comparación entre agua dulce y agua salada da una gravedad específica aproximada de [[SG]] = 0.975.

Este valor inferior a uno nos da una **aproximación** cuantitativa del potencial de flotación. La diferencia de masa volumétrica, aunque pequeña en términos absolutos (2.5\%), es la **resultante** física que genera las fuerzas de empuje necesarias para mantener el agua dulce en la superficie durante kilómetros antes de mezclarse por completo.

## Interpretación
Este ejemplo demuestra que la masa volumétrica [[rho]] es el motor que impulsa la dinámica oceánica. Pequeños cambios en la concentración de masa por volumen deciden la trayectoria de las corrientes marinas y la distribución de nutrientes. En ingeniería ambiental, este análisis es crítico para predecir la dispersión de contaminantes: un vertido menos denso que el agua de mar permanecerá en la superficie, facilitando su recogida mecánica pero aumentando el riesgo para las aves marinas.
