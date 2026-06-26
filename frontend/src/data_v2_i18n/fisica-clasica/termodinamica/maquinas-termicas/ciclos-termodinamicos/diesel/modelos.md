# Modelos — Ciclo Diesel

## Modelo ideal

El modelo estándar del ciclo Diesel asume un gas ideal con propiedades constantes (aire frío, [[gamma]] de 1.4) que recorre cuatro procesos reversibles: compresión adiabática, expansión isobárica con adición de calor, expansión adiabática y rechazo isocórico de calor. No hay pérdidas por fricción, transferencia de calor a las paredes ni fugas de gas. La combustión se modela como una adición externa de calor a presión constante, sin considerar la cinética química del combustible.

## Hipótesis

- El fluido de trabajo es aire ideal con masa molar constante y [[gamma]] fijo de 1.4.
- Todos los procesos son internamente reversibles y cuasiestáticos.
- La compresión (1 a 2) y la expansión (3 a 4) son perfectamente adiabáticas, sin intercambio de calor con las paredes.
- La combustión (2 a 3) ocurre a presión estrictamente constante, equivalente a un proceso isobárico ideal.
- El rechazo de calor (4 a 1) ocurre a volumen constante, equivalente al cierre instantáneo de las válvulas de escape.
- No hay pérdidas mecánicas por fricción del pistón, anillos o cojinetes.
- La masa de combustible inyectado es despreciable frente a la masa de aire.
- No hay fugas de gas por los anillos del pistón ni por las válvulas.

## Dominio de validez cuantitativo

El modelo de aire frío es razonablemente preciso (error menor del 15 %) cuando la relación de compresión [[r]] está entre 12 y 25, la relación de corte [[r_c]] está entre 1.2 y 4, y las temperaturas máximas del ciclo no superan 2000 K. Para temperaturas superiores, la variación de [[gamma]] con la temperatura introduce errores del 10 al 20 %. Para relaciones de compresión fuera de este rango, las desviaciones del comportamiento ideal del gas se vuelven significativas.

| Parámetro | Rango válido | Error típico fuera de rango |
|---|---|---|
| [[r]] | 12 a 25 | Mayor del 15 % si [[r]] menor que 10 |
| [[r_c]] | 1.2 a 4 | Mayor del 20 % si [[r_c]] mayor que 5 |
| Temperatura máxima | Menor que 2000 K | Disociación molecular y [[gamma]] variable |
| Presión | Menor que 200 bar | Desviaciones del gas ideal |

## Señales de fallo del modelo

- El rendimiento calculado supera el de Carnot entre las temperaturas extremas del ciclo: indica que el modelo es inconsistente con la segunda ley y probablemente se ha usado un [[gamma]] incorrecto o se han confundido las relaciones.
- El rendimiento supera 0.70 para condiciones industriales típicas: el modelo de aire frío probablemente sobreestima porque [[gamma]] real es menor que 1.4.
- El trabajo neto calculado es negativo: indica un error en los datos de entrada, probablemente [[r_c]] mayor que [[r]] o valores intercambiados.
- La temperatura máxima del ciclo supera 2500 K: a estas temperaturas se produce disociación molecular del nitrógeno y el oxígeno, invalidando el modelo de gas ideal.
- El calor rechazado [[Q_C]] supera el calor absorbido [[Q_H]]: error fundamental que viola la primera ley.

## Modelo extendido o alternativo

Cuando conviene cambiar de modelo: si las temperaturas del ciclo superan 2000 K o si se requiere precisión mejor que 10 %, es necesario pasar al modelo de aire caliente o al ciclo dual.

El **modelo de aire caliente** usa un [[gamma]] promedio de 1.3 que representa mejor las propiedades de los gases de combustión a alta temperatura. Reduce el rendimiento teórico típicamente un 10 a 15 % respecto al modelo de aire frío.

El **ciclo Diesel con propiedades variables** integra numéricamente las ecuaciones de estado usando tablas termodinámicas del aire (funciones de energía interna y entalpía dependientes de la temperatura). Es el método más preciso pero requiere cálculo computacional.

El **ciclo dual o mixto** combina una fase de combustión a volumen constante seguida de una fase a presión constante. Es más representativo de los motores Diesel reales, donde la inyección de combustible comienza antes del punto muerto superior y la presión primero sube rápidamente y luego se mantiene aproximadamente constante.

## Comparación operativa

| Característica | Diesel aire frío | Diesel aire caliente | Ciclo dual |
|---|---|---|---|
| [[gamma]] | 1.4 fijo | 1.3 promedio | variable con T |
| Combustión | isobárica pura | isobárica pura | isocórica mas isobárica |
| Precisión típica | error 15 a 20 % | error 8 a 12 % | error 3 a 8 % |
| Complejidad | algebraica cerrada | algebraica cerrada | numérica o iterativa |
| Uso principal | didáctico y exámenes | estimaciones de ingeniería | diseño de motores |
