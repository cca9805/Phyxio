# Errores frecuentes — Ciclo Otto

## Errores conceptuales

### Error 1: Creer que el rendimiento Otto depende de la cantidad de calor suministrado

**Por qué parece correcto**
En el ciclo Diesel el rendimiento sí depende de cuánto calor se inyecta (a través de la relación de corte). El alumno generaliza esta dependencia al Otto y espera que más [[Q_H]] cambie el rendimiento.

**Por qué es incorrecto**
En el ciclo Otto, ambos procesos de intercambio de calor ocurren a volumen constante. La temperatura sube proporcionalmente a [[Q_H]] tanto en la combustión como en el escape, y la fracción convertida en trabajo depende exclusivamente de la compresión previa. La fórmula [[eta_O]] igual a uno menos uno dividido entre [[r]] elevado a [[gamma]] menos uno no contiene [[Q_H]].

**Señal de detección**
El alumno intenta modificar el rendimiento cambiando [[Q_H]] en el enunciado, o afirma que inyectar más combustible mejora la eficiencia del ciclo.

**Corrección conceptual**
El rendimiento Otto es puramente geométrico: depende solo de [[r]] y [[gamma]]. Más combustible produce más trabajo en valor absoluto pero la misma fracción de eficiencia. El Diesel sí depende de [[Q_H]] porque la combustión ocurre a presión constante.

**Mini-ejemplo de contraste**
Con [[r]] de 10 y [[gamma]] de 1.4, tanto si [[Q_H]] es 500 kJ/kg como si es 2000 kJ/kg, [[eta_O]] es siempre 0.602. El [[W_neto]] cambia (301 vs 1204 kJ/kg) pero la fracción es idéntica.

## Errores de modelo

### Error 2: Asumir que [[gamma]] es constante a todas las temperaturas

**Por qué parece correcto**
Los libros de texto presentan la fórmula con [[gamma]] de 1.4 como constante universal del aire, y los problemas tipo examen siempre usan este valor fijo.

**Por qué es incorrecto**
El índice adiabático del aire desciende de 1.4 a temperatura ambiente a valores cercanos a 1.3 o menores a las temperaturas de combustión (2000 a 2800 K). Los gases de combustión contienen además dióxido de carbono y agua, con [[gamma]] aún menor. Usar 1.4 sobreestima el rendimiento teórico en un 10 a 15 %.

**Señal de detección**
El alumno obtiene rendimientos teóricos superiores al 60 % para relaciones de compresión moderadas sin cuestionar la validez del modelo de aire frío.

**Corrección conceptual**
El modelo de aire frío ([[gamma]] de 1.4) da el límite superior. El modelo de aire caliente ([[gamma]] de 1.3) es más realista. El valor exacto requiere integración numérica con tablas de propiedades dependientes de la temperatura.

**Mini-ejemplo de contraste**
Con [[r]] de 10, aire frío ([[gamma]] de 1.4) da rendimiento de 60.2 %, pero aire caliente ([[gamma]] de 1.3) da 49.9 %. La diferencia de 10.3 puntos porcentuales no es despreciable en ingeniería.

## Errores matemáticos

### Error 3: Usar temperaturas en Celsius en lugar de kelvin

**Por qué parece correcto**
Los enunciados suelen dar las temperaturas en Celsius y el alumno las sustituye directamente en las fórmulas sin convertir. El procedimiento parece natural porque las temperaturas ya son datos numéricos directos.

**Señal de detección**
El alumno obtiene rendimientos negativos o superiores a uno al calcular rendimientos con cocientes de temperaturas. También puede obtener valores aparentemente razonables pero incorrectos si ambas temperaturas son altas en Celsius.

**Por qué es incorrecto**
Las fórmulas termodinámicas requieren temperaturas absolutas en kelvin. Un cociente de temperaturas en Celsius no tiene significado termodinámico porque el cero de la escala Celsius es arbitrario. Si se comparan los rendimientos Otto con Carnot usando las temperaturas del ciclo, la conversión a kelvin es obligatoria.

**Corrección conceptual**
Siempre convertir temperaturas a kelvin antes de cualquier cálculo termodinámico. Regla mnemotécnica: si aparece una temperatura en una fórmula de rendimiento, debe estar en kelvin.

**Mini-ejemplo de contraste**
Si las temperaturas extremas del ciclo son 27 grados Celsius (300 K) y 1727 grados Celsius (2000 K), el rendimiento de Carnot con kelvin es uno menos 300 dividido entre 2000, es decir, 0.85. Con Celsius sería uno menos 27 dividido entre 1727, es decir, 0.984, que es incorrecto y sobreestima gravemente.

## Errores de interpretación

### Error 4: Creer que aumentar la relación de compresión siempre es beneficioso

**Por qué parece correcto**
La fórmula muestra que [[eta_O]] crece monotónamente con [[r]]. El alumno concluye que siempre conviene aumentar [[r]] para mejorar el motor.

**Por qué es incorrecto**
El rendimiento crece con concavidad negativa: los incrementos marginales son cada vez menores. Además, a relaciones de compresión superiores a 12 en motores de gasolina, la mezcla aire-combustible se autoenciende por compresión antes de la chispa (detonación), causando daños mecánicos, vibraciones y pérdidas de eficiencia que superan la ganancia teórica.

**Señal de detección**
El alumno propone usar [[r]] de 20 o 25 en un motor de gasolina sin mencionar la detonación ni las limitaciones prácticas.

**Corrección conceptual**
El límite práctico de [[r]] en motores Otto es 8 a 12 por detonación. Los motores Diesel pueden usar [[r]] de 14 a 25 porque comprimen solo aire. Los beneficios de aumentar [[r]] deben evaluarse contra las pérdidas por detonación y el aumento de presiones y temperaturas.

**Mini-ejemplo de contraste**
De [[r]] de 8 a [[r]] de 10 con [[gamma]] de 1.4, [[eta_O]] sube de 0.565 a 0.602 (3.7 puntos). De [[r]] de 10 a [[r]] de 12, sube de 0.602 a 0.630 (2.8 puntos). De [[r]] de 12 a [[r]] de 14, sube de 0.630 a 0.652 (2.2 puntos). Los rendimientos marginales son claramente decrecientes.

## Regla de autocontrol rápido

### Error 5: Obtener un rendimiento superior al de Carnot entre las temperaturas extremas del ciclo

**Por qué parece correcto**
El alumno calcula [[eta_O]] con la fórmula del ciclo Otto y obtiene un valor alto. No compara con el Carnot correspondiente porque considera que son fórmulas independientes.

**Por qué es incorrecto**
El rendimiento de Carnot entre las temperaturas extremas del ciclo (temperatura mínima y máxima) es el límite superior absoluto. Si [[eta_O]] calculado supera este valor, hay un error seguro en los datos o en el cálculo.

**Señal de detección**
El rendimiento Otto calculado es superior al rendimiento de Carnot entre las temperaturas extremas del ciclo, o el rendimiento es mayor que 0.70 con parámetros típicos de gasolina.

**Corrección conceptual**
Siempre verificar que [[eta_O]] sea menor que el rendimiento de Carnot entre las temperaturas extremas. Si no lo es, revisar los datos de entrada y los cálculos intermedios.

**Mini-ejemplo de contraste**
Con [[r]] de 10 y [[gamma]] de 1.4, [[eta_O]] es 0.602. Si las temperaturas del ciclo van de 300 K a 2000 K, el Carnot es uno menos 300 dividido entre 2000, es decir, 0.85. Como 0.602 es menor que 0.85, el resultado es coherente.
