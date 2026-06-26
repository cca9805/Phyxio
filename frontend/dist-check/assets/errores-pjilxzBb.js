const e=`## Errores conceptuales\r
\r
### Error 1: Confundir proceso cuasi-estático con proceso reversible\r
\r
**Por qué parece correcto**\r
\r
Los libros de texto dicen que un proceso reversible debe ser cuasi-estático (infinitamente lento). El alumno generaliza: «si es lento, es reversible».\r
\r
**Por qué es incorrecto**\r
\r
Un proceso cuasi-estático con fricción es lento pero irreversible. La fricción disipa energía mecánica como calor interno, generando entropía incluso si el proceso es infinitamente lento. La condición cuasi-estático es necesaria pero no suficiente: además se requiere ausencia de fricción, de mezcla espontánea y de gradientes finitos de cualquier potencial termodinámico.\r
\r
**Señal de detección**\r
\r
El alumno clasifica como reversible un proceso lento con fricción (por ejemplo, compresión de gas con pistón con rozamiento) y obtiene [[DeltaS_univ]] > 0 inesperadamente.\r
\r
**Corrección conceptual**\r
\r
Reversible = cuasi-estático + sin disipación. Si hay cualquier fuente de fricción, turbulencia o mezcla libre, el proceso es irreversible independientemente de su velocidad.\r
\r
**Mini-ejemplo de contraste**\r
\r
Compresión de gas a velocidad infinitesimal con pistón sin fricción: reversible, [[DeltaS_univ]] = 0. Misma compresión con pistón con rozamiento: cuasi-estática pero irreversible, [[DeltaS_univ]] > 0 porque la fricción genera calor.\r
\r
### Error 2: Creer que [[DeltaS_sis]] = 0 es la condición de reversibilidad\r
\r
**Por qué parece correcto**\r
\r
El alumno asocia «nada cambia» con «reversible». Si la entropía del sistema no cambia, parece que el proceso no ha dejado huella.\r
\r
**Por qué es incorrecto**\r
\r
La condición de reversibilidad es [[DeltaS_univ]] = [[DeltaS_sis]] + [[DeltaS_ent]] = 0, no [[DeltaS_sis]] = 0. En una expansión isotérmica reversible, [[DeltaS_sis]] > 0 (el gas gana entropía al expandirse) pero [[DeltaS_ent]] = −[[DeltaS_sis]] < 0 (el reservorio pierde exactamente la misma). El proceso es reversible aunque el sistema cambie su entropía.\r
\r
**Señal de detección**\r
\r
El alumno afirma que un proceso isotérmico reversible tiene [[DeltaS_sis]] = 0, o que todo proceso reversible es isentrópico.\r
\r
**Corrección conceptual**\r
\r
[[DeltaS_sis]] = 0 corresponde a un proceso **isentrópico** del sistema (adiabático reversible), que es un caso particular de proceso reversible, no la definición general. La definición general es [[DeltaS_univ]] = 0.\r
\r
**Mini-ejemplo de contraste**\r
\r
Expansión isotérmica reversible de 1 mol de gas ideal a 300 K, duplicando volumen: [[DeltaS_sis]] = R·ln(2) ≈ 5.76 J/(mol·K) (no es cero). [[DeltaS_ent]] = −5.76 J/(mol·K). [[DeltaS_univ]] = 0 (reversible). El sistema cambió su entropía, pero el universo no.\r
\r
### Error 3: Creer que un proceso reversible no intercambia calor ni trabajo\r
\r
**Por qué parece correcto**\r
\r
«Reversible» suena a «nada pasa», como si el sistema estuviera aislado y quieto. Si no pasa nada, no hay calor ni trabajo.\r
\r
**Por qué es incorrecto**\r
\r
En un proceso reversible pueden ocurrir cambios enormes: el gas puede expandirse al doble de volumen, absorber miles de julios de calor y realizar trabajo significativo. Lo que es especial no es la ausencia de interacción, sino la ausencia de degradación. Todo el calor absorbido puede recuperarse como trabajo, y viceversa.\r
\r
**Señal de detección**\r
\r
El alumno afirma que un proceso reversible generico no intercambia calor ni trabajo, confundiendolo con un sistema aislado en equilibrio.\r
\r
**Corrección conceptual**\r
\r
Un proceso reversible puede intercambiar calor y trabajo libremente. Lo que no puede es generar entropía neta en el universo. La expansión isotermica reversible absorbe [[Q_rev]] y realiza trabajo en la misma cuantia energética; reversible no es sinonimo de estatico.\r
\r
**Mini-ejemplo de contraste**\r
\r
En una expansión isotermica reversible de dos moles a 500 K que triplica el volumen, el calor reversible es grande y positivo, del orden de 9 kJ. El proceso sigue siendo reversible porque la entropía ganada por el gas queda compensada por el reservorio.\r
\r
## Errores de modelo\r
\r
### Error 4: Asumir que la eficiencia de Carnot es alcanzable en la práctica\r
\r
**Por qué parece correcto**\r
\r
La fórmula [[eta_Carnot]] = 1 − [[T_frio]]/[[T_caliente]] da un número concreto para cualquier par de temperaturas. El alumno lo interpreta como un objetivo de diseño alcanzable.\r
\r
**Por qué es incorrecto**\r
\r
La eficiencia de Carnot requiere gradientes infinitesimales de T, lo que implica transferencia de calor infinitamente lenta. Una máquina con ciclo de Carnot tendría potencia cero (trabajo infinitesimal por ciclo, duración infinita). En la práctica, para obtener potencia finita se necesitan gradientes finitos que generan irreversibilidad.\r
\r
**Señal de detección**\r
\r
El alumno diseña un sistema térmico esperando alcanzar exactamente [[eta_Carnot]] y se decepciona cuando el rendimiento real es 30-60% del valor de Carnot.\r
\r
**Corrección conceptual**\r
\r
[[eta_Carnot]] es un techo teorico, como la velocidad de la luz en relatividad. La eficiencia práctica óptima a máxima potencia suele aproximarse mejor con modelos endorreversibles tipo Curzon-Ahlborn. Para focos típicos, esos modelos dan valores mucho más cercanos al rendimiento real de centrales que el techo de Carnot.\r
\r
**Mini-ejemplo de contraste**\r
\r
En una central térmica con foco caliente cerca de 800 K y foco frio cerca de 300 K, [[eta_Carnot]] es un limite alto, mientras que la eficiencia real suele quedar bastante por debajo. El modelo endorreversible predice mejor el rendimiento práctico que Carnot puro.\r
\r
### Error 5: Aplicar la fórmula de Carnot a procesos no cíclicos\r
\r
**Por qué parece correcto**\r
\r
Si [[eta_Carnot]] es el rendimiento máximo de un proceso entre dos temperaturas, el alumno lo aplica a cualquier proceso que involucre esas temperaturas, sea cíclico o no.\r
\r
**Por qué es incorrecto**\r
\r
La fórmula de Carnot se deduce para **ciclos** que operan entre dos reservorios. En un proceso no cíclico (calentamiento de un bloque, expansión única), el sistema no vuelve a su estado inicial y el concepto de «eficiencia del ciclo» no se aplica. Para procesos no cíclicos se usa el análisis exergético: W_max = ΔExergía del sistema.\r
\r
**Señal de detección**\r
\r
El alumno calcula [[eta_Carnot]] para un bloque que se enfría en un lago y obtiene un número que no tiene significado operativo claro.\r
\r
**Corrección conceptual**\r
\r
Para procesos no ciclicos, el trabajo máximo extraible no se obtiene multiplicando calor por [[eta_Carnot]], sino mediante una diferencia de exergia entre estados inicial y final. La formula de Carnot solo aplica a ciclos completos entre dos focos.\r
\r
**Mini-ejemplo de contraste**\r
\r
Bloque a 800 K enfriándose hasta 300 K (lago): el trabajo máximo extraíble es menor que Q_total · [[eta_Carnot]] porque la temperatura del bloque varía durante el proceso. Se requiere integrar, no aplicar la fórmula puntual.\r
\r
## Errores matemáticos\r
\r
### Error 6: Usar temperaturas en Celsius en la fórmula de Carnot\r
\r
**Por qué parece correcto**\r
\r
El alumno conoce las temperaturas de los focos en grados Celsius (por ejemplo, 327 °C y 27 °C) y las introduce directamente en la fórmula.\r
\r
**Por qué es incorrecto**\r
\r
La fórmula [[eta_Carnot]] = 1 − [[T_frio]]/[[T_caliente]] exige temperaturas en kelvin absolutos. Con Celsius: 1 − 27/327 = 0.917 (91.7%). Con kelvin: 1 − 300/600 = 0.50 (50%). El error es de 41.7 puntos porcentuales, que cambia completamente la conclusión sobre la viabilidad del diseño.\r
\r
**Señal de detección**\r
\r
[[eta_Carnot]] sale cercana al 90-100% para temperaturas cotidianas. Una eficiencia tan alta es inmediatamente sospechosa.\r
\r
**Corrección conceptual**\r
\r
Regla: siempre convertir a kelvin antes de aplicar la fórmula. T(K) = T(°C) + 273.15. Para los focos del ejemplo: [[T_caliente]] = 600 K, [[T_frio]] = 300 K, [[eta_Carnot]] = 50%.\r
\r
**Mini-ejemplo de contraste**\r
\r
Focos a 500 °C y 25 °C. Celsius: 1 − 25/500 = 0.95 (95%, absurdo). Kelvin: 1 − 298/773 = 0.614 (61.4%, realista como techo teórico). La diferencia: 33.6 puntos.\r
\r
## Errores de interpretación\r
\r
Estos errores aparecen cuando el resultado se calcula correctamente, pero se interpreta mal el significado de reversibilidad, eficiencia máxima o frontera de aplicación de Carnot.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de dar por bueno un resultado de proceso reversible:\r
\r
1. **Verificar [[DeltaS_univ]] = 0**: si da positivo, el proceso no es reversible o hay error.\r
2. **Verificar que [[DeltaS_sis]] = −[[DeltaS_ent]]**: la compensación debe ser exacta.\r
3. **Verificar temperaturas en kelvin**: si [[eta_Carnot]] > 80% para temperaturas cotidianas, sospechar Celsius.\r
4. **Verificar eta_real ≤ [[eta_Carnot]]**: si la eficiencia real supera a Carnot, hay error seguro.\r
5. **Verificar condiciones de reversibilidad**: ¿hay fricción, gradientes finitos o mezcla en el enunciado? Si sí, el proceso no es reversible.\r
`;export{e as default};
