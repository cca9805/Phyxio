## Errores conceptuales

### Error 1: Confundir equilibrio de fases con igualdad de concentraciones

**Por qué parece correcto**

El alumno generaliza intuitivamente que dos fases en equilibrio deben tener la misma concentración del componente, por analogía con el equilibrio térmico (misma temperatura) o el equilibrio mecánico (misma presión). El mecanismo cognitivo es una **analogía incompleta** con otros criterios de equilibrio.

**Por qué es incorrecto**

El equilibrio de fases requiere la igualdad del potencial químico [[mu]] en todas las fases, no la igualdad de concentraciones. [[mu]] depende tanto del término estándar [[mu_std]] (que es diferente en cada fase) como del término logarítmico de composición. En el equilibrio líquido-vapor, la concentración del componente en el vapor es muy diferente a la del líquido; sin embargo, los [[mu]] son idénticos. La igualdad de concentraciones sería un caso particular solo si [[mu_std]] fuera el mismo en ambas fases.

**Señal de detección**

El alumno escribe condiciones de equilibrio del tipo "concentración en fase 1 igual a concentración en fase 2" sin incluir el término logarítmico de [[mu]]. O calcula una concentración de equilibrio que es igual en ambas fases cuando el problema involucra fases distintas (gas-líquido, sólido-líquido).

**Corrección conceptual**

La condición correcta de equilibrio de fases es [[mu]]_fase1 = [[mu]]_fase2 para cada componente. Como [[mu]] depende de la actividad mediante un logaritmo y el estado estándar puede ser distinto en cada fase, las concentraciones de equilibrio son generalmente diferentes. La ley de distribución de Nernst y la ley de Henry son consecuencias directas de esta condición.

**Mini-ejemplo de contraste**

El yodo distribuido entre agua y tetracloruro de carbono alcanza el equilibrio con concentraciones muy distintas en cada fase (coeficiente de partición de aproximadamente 85 a favor del CCl₄). Un alumno que iguala concentraciones concluiría que la concentración debe ser la misma en ambos solventes, un resultado físicamente absurdo que contradice cualquier tabla de coeficientes de partición.

---

## Errores de modelo

### Error 1: Usar [[mu_std]] como si fuera [[mu]] sin incluir el término de composición

**Por qué parece correcto**

El alumno aprende que [[mu_std]] es el valor de referencia de [[mu]] y lo usa directamente en los cálculos de equilibrio sin añadir el término R·[[T]]·ln([[a]]). Esto ocurre especialmente cuando los problemas no mencionan explícitamente la actividad o cuando el alumno memoriza la expresión pero no identifica en qué condiciones [[a]] es distinta de 1. El mecanismo cognitivo es la **simplificación prematura** del modelo.

**Por qué es incorrecto**

[[mu_std]] corresponde al potencial químico del componente puro en su estado estándar de referencia, donde [[a]] es 1 por definición. En cualquier mezcla real, [[a]] es distinta de 1 y el término logarítmico es no nulo. Omitirlo implica que todos los componentes de cualquier mezcla tienen el mismo [[mu]] que si estuvieran puros, lo que hace imposible predecir la dirección de cualquier proceso de mezcla o separación.

**Señal de detección**

El alumno calcula [[mu]] de un componente en solución y obtiene el mismo valor que [[mu_std]], sin haber verificado que [[a]] sea exactamente 1. O aplica el criterio de equilibrio usando directamente [[mu_std]] de tablas y concluye que el equilibrio se alcanza cuando los valores tabulados son iguales, ignorando las diferencias de composición.

**Corrección conceptual**

[[mu]] de un componente en cualquier mezcla o solución se calcula siempre como [[mu_std]] más R·[[T]]·ln([[a]]). El valor tabulado [[mu_std]] solo es válido para el componente puro en condiciones estándar. En todas las demás situaciones, el término logarítmico es imprescindible.

**Mini-ejemplo de contraste**

El [[mu]] del agua pura es [[mu_std]](agua) a 25 °C. El [[mu]] del agua en una solución acuosa de NaCl 1 mol/L es menor que [[mu_std]] porque la actividad del agua ha bajado a aproximadamente 0.96. Si se usa [[mu_std]] para el agua en solución, se predice que no hay diferencia de [[mu]] entre el agua pura y la solución, lo que haría imposible explicar la presión osmótica o el descenso crioscópico.

---

## Errores matemáticos

### Error 1: Usar [[T]] en grados Celsius en el término R·[[T]]

**Por qué parece correcto**

El alumno está acostumbrado a trabajar con temperaturas en Celsius en fórmulas de calor sensible, donde el uso de Celsius es correcto porque aparece una diferencia de temperaturas. Generaliza incorrectamente que todas las ecuaciones termodinámicas aceptan Celsius. El mecanismo cognitivo es la **generalización excesiva** de reglas válidas en otros contextos.

**Por qué es incorrecto**

En la expresión de [[mu]], [[T]] aparece como factor multiplicativo del término R·[[T]]·ln([[a]]), no como diferencia. En ese caso, usar 25 °C en lugar de 298 K introduce un error de factor 298/25 = 11.9 en el término logarítmico. Si [[a]] es 0.01, el error en el término logarítmico pasa de unos 11.4 kJ/mol (correcto) a solo 0.95 kJ/mol (incorrecto), cambiando por completo el resultado del equilibrio.

**Señal de detección**

El alumno escribe el término como R por 25 por ln([[a]]) en un cálculo a temperatura ambiente, o como R por un valor negativo cuando el problema especifica una temperatura por debajo de 273 K expresada en Celsius.

**Corrección conceptual**

Toda vez que [[T]] aparece como factor multiplicativo en una expresión termodinámica (R·[[T]], k_B·[[T]], etc.), debe estar en kelvin. Solo cuando [[T]] aparece como diferencia ΔT se puede usar la escala Celsius sin error.

**Mini-ejemplo de contraste**

A 25 °C, R·[[T]] en kelvin es 8.314 por 298.15, igual a 2478 J/mol. R·[[T]] con T en Celsius es 8.314 por 25, igual a 207.9 J/mol, un factor 12 menor. El logaritmo del cociente de actividades que define la constante de equilibrio quedará completamente distorsionado, prediciendo equilibrios erróneos.

---

## Errores de interpretación

### Error 1: Creer que [[mu]] negativo implica proceso espontáneo

**Por qué parece correcto**

El alumno recuerda que ΔG < 0 implica proceso espontáneo y confunde este criterio con el signo absoluto de [[mu]]. Como [[mu_std]] puede ser negativo para compuestos estables, el alumno concluye que un [[mu]] negativo garantiza espontaneidad. El mecanismo cognitivo es la **confusión entre el valor de un potencial y su variación**.

**Por qué es incorrecto**

La espontaneidad en sistemas multicomponente no depende del signo absoluto de [[mu]] sino de la **diferencia de [[mu]] entre el estado inicial y el final**, o entre fases. Un componente con [[mu]] = −200 kJ/mol en la fase 1 y [[mu]] = −210 kJ/mol en la fase 2 fluirá espontáneamente de la fase 1 a la fase 2 (hacia donde [[mu]] es menor), no porque [[mu]] sea negativo, sino porque hay una diferencia de 10 kJ/mol. Si ambas fases tuviesen [[mu]] = −200 kJ/mol, no habría flujo neto aunque [[mu]] sea negativo.

**Señal de detección**

El alumno concluye que un componente permanece espontáneamente en una fase simplemente porque su [[mu]] es negativo, sin comparar con [[mu]] en otras fases o estados del sistema.

**Corrección conceptual**

El criterio termodinámico correcto es la diferencia de [[mu]]. La materia fluye desde la región de mayor [[mu]] hacia la de menor [[mu]], independientemente de si [[mu]] es positivo o negativo en valor absoluto. El signo absoluto de [[mu]] solo tiene sentido en relación con el estado de referencia convencional.

**Mini-ejemplo de contraste**

El potencial químico del agua líquida pura a 25 °C es negativo (referenciado a los elementos H₂ y O₂). Sin embargo, el agua no fluye espontáneamente a ningún lugar porque su [[mu]] es igual en todas las partes de una muestra homogénea. Solo cuando se crea una diferencia de [[mu]] (por ejemplo, poniendo en contacto agua pura con una solución concentrada a través de una membrana semipermeable) se produce flujo espontáneo.

---

## Regla de autocontrol rápido

Antes de dar por válido un cálculo con [[mu]], verificar los siguientes puntos:

- **[[T]] en kelvin**: comprobar que el valor numérico de [[T]] es mayor de 200. Si se trabaja a temperatura ambiente y [[T]] es 25 o similar, es que se usó Celsius por error.
- **[[a]] positiva y con escala correcta**: para gases, [[a]] es la presión parcial en bares (no en atm ni en Pa); para soluciones acuosas, [[a]] es la concentración en mol/L o la fracción molar según la convención del sistema.
- **Término logarítmico no omitido**: salvo que el problema indique explícitamente que el componente está en su estado estándar puro, el término R·[[T]]·ln([[a]]) debe incluirse.
- **Comparación de [[mu]] entre fases, no signo absoluto**: para determinar la dirección del flujo espontáneo, comparar [[mu]] del componente en las distintas fases; el flujo va de mayor a menor [[mu]].
- **Coherencia de unidades**: [[mu_std]] en J/mol y R en J/(mol·K) producen [[mu]] en J/mol. Si se mezclan kJ y J, el resultado estará errado por un factor de 1000.
