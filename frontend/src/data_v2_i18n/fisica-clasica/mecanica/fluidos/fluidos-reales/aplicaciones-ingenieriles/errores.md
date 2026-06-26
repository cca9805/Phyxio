# Errores comunes en Aplicaciones Ingenieriles

## Errores conceptuales

### Error 1: Confundir potencia útil con consumida
- **por qué parece correcto**: Porque se asume que una máquina de 1000 W entrega 1000 W al agua.
- **por qué es incorrecto**: Porque las pérdidas térmicas y mecánicas son inevitables por la segunda ley.
- **señal de detección**: La eficiencia [[eta]] calculada es igual o mayor a 1.
- **corrección conceptual**: La potencia útil [[P_util]] es siempre una fracción de la potencia de entrada [[P_in]].
- **mini-ejemplo**: Si pagas 100 W y el agua recibe 80 W, la eficiencia es 0.8, no 1.0.

### Error 2: El caudal aumenta al aumentar la presión
- **por qué parece correcto**: Por analogía con soplar más fuerte; se cree que a más presión hay más flujo.
- **por qué es incorrecto**: En bombas centrífugas, la curva es decreciente; a más carga, menos caudal [[Q]].
- **señal de detección**: Caudales absurdamente altos en sistemas de gran altura.
- **corrección conceptual**: El punto de operación depende de la intersección con la curva del sistema.
- **mini-ejemplo**: Una bomba que eleva agua a 10m mueve más litros que si la eleva a 50m.

## Errores de modelo

### Error 1: Ignorar la viscosidad en tuberías
- **por qué parece correcto**: Porque el modelo de Bernoulli ideal simplifica mucho los cálculos.
- **por qué es incorrecto**: En fluidos reales, la viscosidad genera pérdidas de carga que exigen más potencia.
- **señal de detección**: La bomba instalada no logra mover el fluido en absoluto.
- **corrección conceptual**: Se debe añadir el término de pérdida de carga h_f al balance de energía.
- **mini-ejemplo**: Un oleoducto requiere estaciones de bombeo cada pocos kilómetros solo para vencer la fricción.

### Error 2: Flujo incompresible en gases veloces
- **por qué parece correcto**: Facilita el uso de la fórmula simple  P  igual a  Delta p Q .
- **por qué es incorrecto**: Si el Mach > 0.3, la densidad densidad del fluido cambia y se consume energía en comprimir el gas.
- **señal de detección**: La potencia calculada es un 20% menor que la potencia real medida.
- **corrección conceptual**: Usar modelos de flujo compresible o termodinámica de gases.
- **mini-ejemplo**: En un turbocompresor, ignorar la compresión daría un diseño totalmente inútil.

## Errores matemáticos

### Error 1: Unidades de caudal incorrectas
- **por qué parece correcto**: Porque los litros por minuto son la unidad estándar en catálogos.
- **por qué es incorrecto**: La potencia en Vatios requiere el caudal [[Q]] en m³/s estrictamente.
- **señal de detección**: Resultados de potencia miles de veces superiores a la realidad.
- **corrección conceptual**: Dividir siempre los litros/min por 60000 para pasar a m³/s.
- **mini-ejemplo**: 60 l/min no es 60 m³/s, es 0.001 m³/s.

### Error 2: Escala de presión bar vs Pascal
- **por qué parece correcto**: El bar es una unidad intuitiva y común en manómetros.
- **por qué es incorrecto**: El Pascal es la unidad del SI necesaria para que el producto dé Vatios.
- **señal de detección**: Potencias de pocos vatios para sistemas industriales gigantes.
- **corrección conceptual**: Multiplicar bares por 100,000 antes de operar.
- **mini-ejemplo**: 2 bar son 200,000 Pa, no 2 Pa.

## Errores de interpretación

### Error 1: Malinterpretar el punto BEP
- **por qué parece correcto**: Se piensa que cualquier punto de la curva de la bomba es igual de bueno.
- **por qué es incorrecto**: Operar lejos del BEP causa cavitación, vibraciones y desgaste prematuro.
- **señal de detección**: Ruido de "grava" dentro de la bomba y eficiencia [[eta]] muy baja.
- **corrección conceptual**: Seleccionar la bomba para que el sistema cruce cerca de su eficiencia máxima.
- **mini-ejemplo**: Usar una bomba de gran caudal para un goteo mínimo destruye la bomba por calor.

## Regla de autocontrol rápido
Verifique siempre que  [[P_util]] < [[P_in]] . Si su cálculo dice que la bomba crea energía de la nada, revise las conversiones de unidades, especialmente de bares a Pascales y de l/min a m³/s.

