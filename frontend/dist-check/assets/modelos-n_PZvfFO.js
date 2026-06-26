const e=`# Modelos del Tornillo

## Modelo ideal
El modelo ideal del tornillo lo trata como una máquina simple perfecta donde no existe disipación de energía por calor. En este escenario, todo el trabajo de torsión aplicado a la palanca se traduce íntegramente en trabajo axial de elevación. La fuerza necesaria bajo este modelo es:

{{f:fuerza_ideal}}

Este modelo es útil para establecer la cota inferior del esfuerzo humano necesario y para calcular la ventaja mecánica teórica pura del diseño geométrico.

## Hipótesis
- **Rigidez infinita**: Se asume que ni el tornillo ni la tuerca se deforman bajo la carga.
- **Movimiento uniforme**: Se desprecia el efecto de la inercia del sistema en el arranque.
- **Paso constante**: Se asume que el avance axial es perfectamente proporcional al ángulo de giro.

## Dominio de validez cuantitativo
Para que este modelo sea una representación fiel de la realidad técnica:
- **Relación geométrica**: El modelo es válido cuando el paso de rosca [[p]] cumple la condición:

{{f:condicion_geometria}}

Si el paso es demasiado grande, el modelo de "máquina simple" de baja pendiente falla.

- **Error del rendimiento**: El error del modelo ideal respecto al real es de aproximadamente:

{{f:error_rendimiento}}

Para un tornillo estándar con un rendimiento del 40%, el error del modelo ideal es del 60%, lo que lo hace inaceptable para cálculos de ingeniería final. La [[ventaja_mecanica]] real es, en ese caso, solo el 40% de la [[ventaja_mecanica]] ideal.


- **Rango de carga**: Válido para cargas [[R]] inferiores al límite de fluencia del material. En aceros estándar (S235), la presión máxima admisible en los filetes es de 200 MPa. Para tornillos de bronce sobre acero, este valor desciende a 60-100 MPa. Superar este umbral lleva a la deformación plástica del filete.

## Señales de fallo del modelo
- **Deformación plástica**: Si al retirar la carga el tornillo no gira libremente, se ha superado el dominio de validez elástica.
- **Calentamiento excesivo**: Una señal clara de que el modelo de "máquina simple" debe ser reemplazado por un modelo termodinámico de fricción pesada.
- **Vibraciones o chirridos**: Indican que el rozamiento no es constante (stick-slip), invalidando el uso de un rendimiento [[eta]] fijo.

## Modelo extendido o alternativo
Para situaciones de alta precisión o cargas críticas, se utiliza el **Modelo de Rosca de Potencia de Acme o Cuadrada**.

**Transición al modelo alternativo:**
Se debe cambiar a este modelo superior cuando:
1. La presión en los filetes supera el límite de seguridad de 200 MPa (R > 200 MPa).
2. Se requiere una precisión superior al 5% en el cálculo del torque, donde la geometría del flanco de la rosca (ángulo de presión) ya no puede ignorarse.
3. El tornillo no es de rosca única (multi-start), lo que altera drásticamente la relación p/(2*pi*r).

Este modelo es más complejo y requiere el uso de coeficientes de fricción estática y cinética específicos para el par de materiales utilizados.

## Comparación operativa
Mientras que el modelo ideal solo requiere la geometría ([[r]], [[p]]), el modelo real necesita caracterizar la interfaz de rozamiento ([[eta]]). En la práctica, el modelo real es el único utilizado para dimensionar motores o actuadores, reservando el modelo ideal solo para fases de diseño conceptual preliminar.
`;export{e as default};
