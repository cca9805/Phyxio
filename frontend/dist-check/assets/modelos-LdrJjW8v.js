const e=`# Modelos Físicos de la Bomba de Calor

## Modelo ideal
El modelo ideal de la bomba de calor se basa en el **Ciclo de Carnot inverso**. Este modelo establece el límite físico absoluto de eficiencia para cualquier sistema que mueva [[calor|q_calor]] entre dos focos de temperatura. En el modelo ideal, todos los procesos se consideran reversibles, lo que implica que no hay fricción en el compresor, no hay caídas de presión en las tuberías y el intercambio de calor en los terminales ocurre sin diferencia de temperatura. La magnitud que se conserva en este ciclo ideal es la entropía durante los procesos de compresión and expansión adiabática. Este modelo es fundamental para comprender que el [[cop]] tiene un techo físico infranqueable impuesto por la segunda ley de la termodinámica.

## Hipótesis
Para aplicar este modelo, se asumen las siguientes hipótesis fundamentales:
1.  **Estado estacionario**: Se considera que los flujos de masa y energía son constantes en el tiempo. Si se violara, el sistema sufriría oscilaciones de presión que podrían dañar el compresor.
2.  **Fluido incompresible en fase líquida**: El refrigerante entra a la válvula de expansión como líquido saturado. Si contuviera gas, la capacidad de enfriamiento caería drásticamente.
3.  **Compresión isentrópica**: El compresor no añade entropía al fluido. Violar esta hipótesis implica admitir calentamientos por fricción que reducen el [[cop]] real.
4.  **Aislamiento perfecto**: No hay intercambio de calor no deseado en las líneas de conexión. Violar esto supone una pérdida de capacidad térmica útil.
5.  **Presión constante en intercambiadores**: La evaporación y condensación ocurren sin pérdida de carga. Violar esto obligaría al compresor a trabajar más para vencer el rozamiento interno.

## Dominio de validez cuantitativo
El modelo de balance de energía es válido mientras la temperatura del aire exterior sea superior al punto de congelación del refrigerante bajo presión de evaporación. Cuantitativamente, la aproximación es razonable cuando el salto térmico entre focos es menor a 50 grados Celsius.

A key indicator is that the calculated [[cop]] must always satisfy the physical inequality:
\`1.0 < COP < COP_Carnot\`

Typically, for a standard home, the operational validity range is located with an outdoor temperatura superior a los -15 grados Celsius. Below this order of magnitude, real performance drops asymptotically towards unity, making the "efficient pumping" model lose its competitive advantage over a simple resistance.

## Señales de fallo del modelo
Un alumno puede detectar que el modelo ideal ya no aplica mediante las siguientes señales observables:
- **Formación de escarcha**: La presencia de una capa de hielo superior a 5 milímetros en las aletas del evaporador exterior indica que el intercambio térmico con el ambiente se ha bloqueado.
- **Consumo eléctrico excesivo**: Si el [[trabajo eléctrico|w_elec]] medido se acerca al valor del [[calor|q_calor]] entregado, el [[cop]] está colapsando hacia la unidad, indicando que el equipo ya no "bombea" sino que solo disipa energía.
- **Ruido de líquido en el compresor**: Indica que el refrigerante no se ha evaporado completamente, violando la hipótesis de vapor seco y poniendo en riesgo la integridad mecánica del motor.

## Modelo extendido o alternativo
El modelo extendido o **Ciclo real de compresión de vapor** incluye las irreversibilidades del sistema real, como el rendimiento isentrópico del compresor (típicamente del 70%) y el subenfriamiento del líquido. La transición explícita al modelo extendido conviene realizarla cuando se requiere una precisión superior al 20% en el cálculo de [[ahorros|ahorro]] anuales o cuando se opera con temperaturas exteriores extremas. Al comparar el modelo ideal con la operación real, se observa que el [[cop]] de un equipo comercial suele situarse entre el **40% y el 60%** del límite teórico de Carnot. Cuando la precisión del modelo ideal ya no es suficiente debido a la necesidad de dimensionar componentes específicos o predecir el impacto de las irreversibilidades mecánicas, **conviene pasar al modelo extendido**. Físicamente, un sistema aerotérmico real que consume 2 [[kilovatios|kilovatio]] de [[trabajo eléctrico|w_elec]] para entregar 8 [[kilovatios|kilovatio]] de [[calor|q_calor]] está operando con un [[cop]] de 4.0, lo cual es excelente en la práctica aunque el límite de Carnot para esas mismas temperaturas pudiera ser de 10.0. Esta brecha subraya la importancia de optimizar cada componente del ciclo para acercar el rendimiento operativo a las fronteras de la física teórica.

## Comparación operativa
| Criterio | Modelo Ideal (Carnot) | Modelo Extendido (Real) |
| :--- | :--- | :--- |
| **Precisión** | Baja (techo teórico) | Alta (comercial) |
| **Complexity** | Mínima (2 temperaturas) | Media (entalpías) |
| **Rango de aplicación** | Análisis conceptual | Diseño de ingeniería |
| **Ventaja** | Identifica el límite físico | Predice la factura real |
| **Límite** | Ignora la fricción | Requiere datos del fabricante |

Mientras que el modelo ideal es útil para entender la ventaja teórica de la aerotermia, el modelo extendido es el único capaz de predecir el [[ahorro]] real considerando las pérdidas por desescarche y el comportamiento del fluido bajo presiones de trabajo reales.
`;export{e as default};
