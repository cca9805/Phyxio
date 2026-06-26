const e=`\uFEFF# Errores comunes en Aplicaciones Ingenieriles\r
\r
## Errores conceptuales\r
\r
### Error 1: Confundir potencia útil con consumida\r
- **por qué parece correcto**: Porque se asume que una máquina de 1000 W entrega 1000 W al agua.\r
- **por qué es incorrecto**: Porque las pérdidas térmicas y mecánicas son inevitables por la segunda ley.\r
- **señal de detección**: La eficiencia [[eta]] calculada es igual o mayor a 1.\r
- **corrección conceptual**: La potencia útil [[P_util]] es siempre una fracción de la potencia de entrada [[P_in]].\r
- **mini-ejemplo**: Si pagas 100 W y el agua recibe 80 W, la eficiencia es 0.8, no 1.0.\r
\r
### Error 2: El caudal aumenta al aumentar la presión\r
- **por qué parece correcto**: Por analogía con soplar más fuerte; se cree que a más presión hay más flujo.\r
- **por qué es incorrecto**: En bombas centrífugas, la curva es decreciente; a más carga, menos caudal [[Q]].\r
- **señal de detección**: Caudales absurdamente altos en sistemas de gran altura.\r
- **corrección conceptual**: El punto de operación depende de la intersección con la curva del sistema.\r
- **mini-ejemplo**: Una bomba que eleva agua a 10m mueve más litros que si la eleva a 50m.\r
\r
## Errores de modelo\r
\r
### Error 1: Ignorar la viscosidad en tuberías\r
- **por qué parece correcto**: Porque el modelo de Bernoulli ideal simplifica mucho los cálculos.\r
- **por qué es incorrecto**: En fluidos reales, la viscosidad genera pérdidas de carga que exigen más potencia.\r
- **señal de detección**: La bomba instalada no logra mover el fluido en absoluto.\r
- **corrección conceptual**: Se debe añadir el término de pérdida de carga h_f al balance de energía.\r
- **mini-ejemplo**: Un oleoducto requiere estaciones de bombeo cada pocos kilómetros solo para vencer la fricción.\r
\r
### Error 2: Flujo incompresible en gases veloces\r
- **por qué parece correcto**: Facilita el uso de la fórmula simple  P  igual a  Delta p Q .\r
- **por qué es incorrecto**: Si el Mach > 0.3, la densidad densidad del fluido cambia y se consume energía en comprimir el gas.\r
- **señal de detección**: La potencia calculada es un 20% menor que la potencia real medida.\r
- **corrección conceptual**: Usar modelos de flujo compresible o termodinámica de gases.\r
- **mini-ejemplo**: En un turbocompresor, ignorar la compresión daría un diseño totalmente inútil.\r
\r
## Errores matemáticos\r
\r
### Error 1: Unidades de caudal incorrectas\r
- **por qué parece correcto**: Porque los litros por minuto son la unidad estándar en catálogos.\r
- **por qué es incorrecto**: La potencia en Vatios requiere el caudal [[Q]] en m³/s estrictamente.\r
- **señal de detección**: Resultados de potencia miles de veces superiores a la realidad.\r
- **corrección conceptual**: Dividir siempre los litros/min por 60000 para pasar a m³/s.\r
- **mini-ejemplo**: 60 l/min no es 60 m³/s, es 0.001 m³/s.\r
\r
### Error 2: Escala de presión bar vs Pascal\r
- **por qué parece correcto**: El bar es una unidad intuitiva y común en manómetros.\r
- **por qué es incorrecto**: El Pascal es la unidad del SI necesaria para que el producto dé Vatios.\r
- **señal de detección**: Potencias de pocos vatios para sistemas industriales gigantes.\r
- **corrección conceptual**: Multiplicar bares por 100,000 antes de operar.\r
- **mini-ejemplo**: 2 bar son 200,000 Pa, no 2 Pa.\r
\r
## Errores de interpretación\r
\r
### Error 1: Malinterpretar el punto BEP\r
- **por qué parece correcto**: Se piensa que cualquier punto de la curva de la bomba es igual de bueno.\r
- **por qué es incorrecto**: Operar lejos del BEP causa cavitación, vibraciones y desgaste prematuro.\r
- **señal de detección**: Ruido de "grava" dentro de la bomba y eficiencia [[eta]] muy baja.\r
- **corrección conceptual**: Seleccionar la bomba para que el sistema cruce cerca de su eficiencia máxima.\r
- **mini-ejemplo**: Usar una bomba de gran caudal para un goteo mínimo destruye la bomba por calor.\r
\r
## Regla de autocontrol rápido\r
Verifique siempre que  [[P_util]] < [[P_in]] . Si su cálculo dice que la bomba crea energía de la nada, revise las conversiones de unidades, especialmente de bares a Pascales y de l/min a m³/s.\r
\r
`;export{e as default};
