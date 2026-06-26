const e=`# Errores frecuentes: Poleas compuestas

## Errores conceptuales

### Error 1: Contar poleas en lugar de tramos portantes

**Por qué parece correcto**
Visualmente, las poleas son objetos prominentes y fáciles de contar. Es intuitivo pensar que "más poleas = más ventaja mecánica".

**Por qué es incorrecto**
La ventaja mecánica depende del número de tramos de cuerda que sostienen directamente la carga, no del número de poleas. Una polea móvil puede contribuir uno o dos tramos según la configuración. Contar poleas en lugar de tramos lleva a una ventaja mecánica calculada incorrectamente.

**Señal de detección**
Si tu cálculo de fuerza da valores que no coinciden con la experiencia práctica (demasiado altos o demasiado bajos), probablemente estás contando mal los tramos.

**Corrección conceptual**
Dibuja el sistema completo y traza cada tramo de cuerda desde la carga hasta el punto de tracción. Cada tramo que sale de una polea móvil o de la carga cuenta para [[nSel]]. Los tramos que solo cambian dirección en poleas fijas no aumentan la ventaja mecánica.

**Mini-ejemplo de contraste**
Un sistema con tres poleas móviles puede tener 6 tramos (configuración óptima) o solo 3 tramos (configuración alternativa). Contar tres poleas no distingue estos casos.

### Error 2: Ignorar el peso propio de las poleas móviles

**Por qué parece correcto**
El peso de las poleas parece despreciable comparado con la carga, especialmente en sistemas pequeños.

**Por qué es incorrecto**
En sistemas con múltiples poleas móviles o cargas ligeras, el peso acumulado de las poleas puede ser significativo. Ignorarlo hace que la fuerza calculada sea menor que la realmente necesaria.

**Señal de detección**
Si la fuerza real medida es sistemáticamente mayor que la calculada por un margen constante, el peso de las poleas no está siendo considerado.

**Corrección conceptual**
Sumar el peso de todas las poleas móviles a la carga útil [[W]] antes de aplicar la fórmula. El peso de poleas fijas no afecta la tracción.

**Mini-ejemplo de contraste**
Un sistema con dos poleas móviles de 2 kg cada una elevando una carga de 10 kg. El peso efectivo es 14 kg, no 10 kg. La fuerza ideal con 4 tramos es 34.3 N, no 24.5 N.

## Errores de modelo

### Error 3: Asumir eficiencia constante sin importar la carga

**Por qué parece correcto**
La eficiencia [[eta]] es un parámetro del equipo, así que debería ser constante para un sistema dado.

**Por qué es incorrecto**
La eficiencia varía con la carga: a cargas muy pequeñas, el rozamiento de ejes y la rigidez de la cuerda dominan; a cargas muy grandes, la deformación elástica y el deslizamiento se vuelven importantes. Usar un único valor de [[eta]] para todos los cálculos introduce errores.

**Señal de detección**
Si la relación entre fuerza medida y carga no es lineal, la eficiencia no es constante.

**Corrección conceptual**
Para cálculos precisos, usar curvas de eficiencia típicas o medir [[eta]] experimentalmente para el rango de cargas esperado. Para estimaciones rápidas, usar valores conservadores de [[eta]] (más bajos).

**Mini-ejemplo de contraste**
Un sistema con eficiencia medida de 0.95 a 500 kg puede tener eficiencia de solo 0.75 a 50 kg por efectos de rozamiento constante que se vuelven relativamente más importantes.

### Error 4: Aplicar el modelo ideal a sistemas con desgaste severo

**Por qué parece correcto**
Las fórmulas del modelo son válidas independientemente del estado del equipo, siempre que existan poleas y cuerda.

**Por qué es incorrecto**
Poleas con ejes desgastados, cuerdas deterioradas o falta de lubricación tienen eficiencias muy bajas que pueden no cumplir con las hipótesis del modelo. El modelo ideal asume que las pérdidas son modestas.

**Señal de detección**
Si la fuerza requerida es comparable al peso total (ventaja mecánica cercana a 1), el sistema tiene pérdidas severas.

**Corrección conceptual**
Cuando [[eta]] cae por debajo de 0.6, el modelo con eficiencia global comienza a fallar. Es necesario inspeccionar el sistema físico, no solo recalcular con otro valor de [[eta]].

**Mini-ejemplo de contraste**
Un polipasto de construcción con 4 tramos que requiere fuerza igual al peso de la carga tiene eficiencia efectiva de 0.25, indicando falla mecánica severa (ejes bloqueados o cuerda deslizando).

## Errores matemáticos

### Error 5: Despejar incorrectamente la fórmula de fuerza real

**Por qué parece correcto**
Algebraicamente, despejar [[F_real]] de la ecuación con eficiencia parece un paso trivial.

**Por qué es incorrecto**
Confundir la posición de [[eta]] en el denominador: algunos estudiantes escriben [[F_real]] como [[W]] dividido entre [[nSel]], y luego multiplican por [[eta]], en lugar de dividir por el producto [[nSel]] × [[eta]]. Esto da fuerzas calculadas menores que las reales, lo cual es peligroso.

**Señal de detección**
Si [[F_real]] resulta menor que [[F_ideal]], hay un error algebraico. La fuerza real siempre debe ser mayor que la ideal.

**Corrección conceptual**
Recordar que [[eta]] está en el denominador: mayor eficiencia (más cerca de 1) significa menor fuerza real. Eficiencia menor (más pérdidas) significa fuerza mayor. Verificar siempre que [[F_real]] > [[F_ideal]].

**Mini-ejemplo de contraste**
Con [[W]] = 1000 N, [[nSel]] = 4, [[eta]] = 0.8. El cálculo incorrecto da 1000/4 × 0.8 = 200 N. El cálculo correcto da 1000/(4 × 0.8) = 312.5 N. El error es del 36%.

## Errores de interpretación

### Error 6: Concluir que más tramos siempre es mejor

**Por qué parece correcto**
Matemáticamente, la fuerza ideal disminuye monotónicamente con [[nSel]]. Más tramos siempre reducen la fuerza teórica.

**Por qué es incorrecto**
En la práctica, cada tramo adicional implica más poleas, más cuerda, más mantenimiento, más peso propio, y más pérdidas por fricción. Existe un punto óptimo donde agregar más tramos aumenta la complejidad sin mejorar significativamente la performance real.

**Señal de detección**
Si al agregar tramos la fuerza real medida no disminuye proporcionalmente, se ha alcanzado el límite práctico.

**Corrección conceptual**
Reconocer que el diseño de sistemas mecánicos involucra compromisos. Más allá de 6-8 tramos, los beneficios marginales típicamente no justifican el costo adicional de complejidad.

**Mini-ejemplo de contraste**
Un sistema de rescate con 8 tramos y eficiencia 0.7 requiere fuerza igual a 1000 N dividido entre el producto de 8 tramos por eficiencia 0.7, es decir, 179 N. Un sistema con 4 tramos y eficiencia 0.9 (menos pérdidas por menos poleas) requiere 1000 N entre 4 × 0.9, es decir, 278 N. La diferencia de 100 N puede no justificar el doble de equipo.

## Regla de autocontrol rápido

Antes de confiar en un cálculo de poleas compuestas, verifica:

- He contado los tramos portantes correctamente, no las poleas visibles
- He considerado el peso propio de las poleas móviles si es significativo
- La eficiencia usada es apropiada para la carga y el estado del equipo
- La fuerza real calculada es mayor que la fuerza ideal (siempre)
- El orden de magnitud de la fuerza es razonable para la aplicación
- He considerado si el número de tramos elegido es práctico, no solo teóricamente óptimo
`;export{e as default};
