## Errores conceptuales

### Error 1: Confundir proceso isobárico con proceso isotérmico

**Por qué parece correcto**

El alumno recuerda que en el proceso isotérmico la presión también está relacionada con el volumen a través de una relación del tipo pV constante, y que en ambos procesos "algo se mantiene constante". La generalización incorrecta lleva a aplicar la fórmula del trabajo isotérmico (con el logaritmo de la razón de volúmenes) a un proceso en el que la presión, no la temperatura, es la magnitud constante. La confusión se agrava porque en los dos procesos el volumen varía.

**Por qué es incorrecto**

En el proceso isobárico es [[p]] la que permanece fija; la temperatura varía en proporción directa al volumen según la ley de Gay-Lussac. En el proceso isotérmico es la temperatura la que permanece fija (temperaturas inicial y final iguales); la presión varía inversamente al volumen. Las trayectorias en el diagrama pV son completamente distintas: una recta horizontal para el isobárico y una hipérbola decreciente para el isotérmico. Aplicar la fórmula logarítmica del trabajo isotérmico a un proceso isobárico da un resultado dimensionalmente correcto pero físicamente erróneo.

**Señal de detección**

Si el alumno escribe la fórmula logarítmica del trabajo isotérmico en un problema donde la presión es constante y conocida, está aplicando la fórmula incorrecta. Otra señal: si calcula la temperatura final igual a la inicial (temperatura constante) cuando el problema indica expansión a presión constante.

**Corrección conceptual**

En proceso isobárico la fórmula correcta del trabajo es siempre el producto [[p]] por [[DeltaV]]. La presión constante permite sacarla fuera de la integral, lo que da un resultado exacto sin necesidad de logaritmos. La distinción fundamental es: isotérmico → temperatura fija, presión inversamente proporcional al volumen; isobárico → presión fija, volumen directamente proporcional a la temperatura.

**Mini-ejemplo de contraste**

Un mol de gas ideal a [[p]] = \(10^5\) Pa se expande de [[V1]] = 1 L a [[V2]] = 2 L. Aplicando erróneamente la fórmula isotérmica se obtiene unos 1727 J (a 300 K). Aplicando correctamente la fórmula isobárica: [[W]] vale \(10^5\) Pa por \(10^{-3}\) m³, es decir, 100 J. La diferencia es de un factor 17, evidenciando que el error no es menor.

---

### Error 2: Creer que la energía interna no cambia porque la presión es constante

**Por qué parece correcto**

El alumno asimila "magnitud constante" con "sin cambio energético". Como en el proceso isocórico ([[DeltaV]] = 0) no hay trabajo y [[Q]] = [[DeltaU]], el razonamiento análogo para el isobárico sería que [[p]] constante implica [[DeltaU]] = 0. Además, el proceso isotérmico tiene [[DeltaU]] = 0, y el alumno puede generalizar incorrectamente que "siempre que algo sea constante, la energía interna no cambia".

**Por qué es incorrecto**

Para un gas ideal, [[DeltaU]] depende exclusivamente de la temperatura. En proceso isobárico la temperatura sí cambia (ley de Gay-Lussac), por lo que [[DeltaU]] ≠ 0. Únicamente en el proceso isotérmico (temperatura constante) es [[DeltaU]] = 0 para gas ideal. La presión constante no tiene ninguna relación directa con la energía interna; lo que determina [[DeltaU]] es [[DeltaT]].

**Señal de detección**

El alumno escribe [[DeltaU]] = 0 en un problema donde la temperatura claramente cambia entre el estado inicial y el final. Otra señal: afirmar que [[Q]] = [[W]] en proceso isobárico (lo que solo sería cierto si [[DeltaU]] = 0).

**Corrección conceptual**

En gas ideal, [[DeltaU]] = \(n C_V \Delta T\). En proceso isobárico [[DeltaT]] ≠ 0 (a menos que también sea isotérmico por cambio de fase), por lo que [[DeltaU]] ≠ 0. El primer principio da [[DeltaU]] = [[Q]] - [[W]], y como [[Q]] > [[W]] en expansión isobárica, [[DeltaU]] > 0.

**Mini-ejemplo de contraste**

Un mol de gas diatómico ideal se expande a [[p]] = \(10^5\) Pa de [[V1]] = 1 L a [[V2]] = 2 L. La temperatura sube de [[T1]] = 300 K a [[T2]] = 600 K. Si se afirma [[DeltaU]] = 0, se concluiría [[Q]] = [[W]] = 100 J. Pero el cálculo correcto da [[DeltaU]] = \(\frac{5}{2} \times 1 \times 8.314 \times 300\) ≈ 6236 J, y [[Q]] = [[DeltaU]] + [[W]] ≈ 6336 J. La afirmación [[DeltaU]] = 0 infravalora la energía real absorbida en más del 98%.

---

## Errores de modelo

### Error 3: Aplicar el modelo isobárico a un proceso politrópico real

**Por qué parece correcto**

En muchos problemas prácticos la presión varía poco durante un proceso, y el alumno tiende a aproximarla como constante para simplificar los cálculos. El error es razonable en términos cualitativos pero cuantitativamente puede ser significativo, especialmente en procesos de motores donde la presión puede variar varios órdenes de magnitud.

**Por qué es incorrecto**

El modelo isobárico requiere que [[p]] sea estrictamente constante. Si la presión varía aunque sea moderadamente (por ejemplo, un 10%), el trabajo real difiere del producto [[p]] por [[DeltaV]] en una proporción comparable. En el ciclo Diesel, por ejemplo, la fase de expansión no es exactamente isobárica sino politrópica, y usar la fórmula isobárica sobreestima el trabajo útil.

**Señal de detección**

El diagrama pV experimental muestra una curva ligeramente descendente en lugar de una línea horizontal perfecta. O bien los datos de temperatura y volumen no satisfacen exactamente la proporción de Gay-Lussac, con desviaciones superiores al 2-3%.

**Corrección conceptual**

Cuando la presión no es exactamente constante, el trabajo debe calcularse como la integral \(\int_{V_1}^{V_2} p(V) \, dV\) usando la relación politrópica que mejor ajuste los datos reales. El modelo isobárico es el caso límite de índice nulo y solo es válido cuando la variación de presión es despreciable frente a [[p]].

**Mini-ejemplo de contraste**

Un proceso donde la presión cae de 200 kPa a 180 kPa mientras el volumen pasa de 1 L a 2 L. Usando el modelo isobárico con [[p]] = 200 kPa: [[W]] = 200 J. Usando el trabajo politrópico real (con la integral): aproximadamente 190 J. La diferencia del 5% puede ser irrelevante en un contexto didáctico básico, pero en un ciclo de motor representa decenas de kilojoules de diferencia en potencia útil.

---

## Errores matemáticos

### Error 4: No convertir las unidades de presión y volumen antes de calcular el trabajo

**Por qué parece correcto**

Los datos del problema se presentan en unidades habituales (litros para el volumen, kiloPascales o atmósferas para la presión), y el alumno realiza el producto [[p]] por [[DeltaV]] directamente sin conversión. Si [[p]] vale 2 atm y [[DeltaV]] vale 3 L, el alumno obtiene [[W]] igual a 6 sin unidades correctas o con unidades inconsistentes.

**Por qué es incorrecto**

El trabajo en Joules se obtiene con [[p]] en Pascales y [[DeltaV]] en metros cúbicos. 1 L equivale a \(10^{-3}\) m³ y 1 atm equivale a 101325 Pa. El producto en unidades inconsistentes da un número sin significado físico, habitualmente entre dos y tres órdenes de magnitud diferente del resultado correcto.

**Señal de detección**

El valor numérico de [[W]] resulta demasiado pequeño (si se olvidó convertir atm a Pa) o demasiado grande (si se olvidó convertir L a m³). Si [[W]] ≈ 6 para una expansión de varios litros a presiones de orden atmosférico, hay casi con certeza un error de unidades.

**Corrección conceptual**

Siempre convertir al Sistema Internacional antes de sustituir: [[p]] en Pa, [[V1]] y [[V2]] en m³. La conversión estándar es: 1 L equivale a \(10^{-3}\) m³; 1 atm equivale a 101325 Pa (aproximadamente \(10^5\) Pa); 1 bar equivale a \(10^5\) Pa. Con estas conversiones, [[W]] resulta en Joules directamente.

**Mini-ejemplo de contraste**

Expansión a [[p]] = 1 atm de 1 L a 3 L. Sin convertir: [[W]] = 1 × 2 = 2 (sin sentido). Convirtiendo: [[p]] vale 101325 Pa, [[DeltaV]] vale \(2 \times 10^{-3}\) m³, [[W]] resulta en aproximadamente 202.7 J. El factor de error es de unos 100.

---

## Errores de interpretación

### Error 5: Interpretar [[W]] positivo como que el sistema "ganó" energía mecánica

**Por qué parece correcto**

En mecánica, cuando un objeto recibe trabajo de una fuerza externa, el trabajo realizado sobre él es positivo y el objeto gana energía cinética. El alumno transfiere este convenio sin cuestionarlo a la termodinámica, concluyendo que [[W]] > 0 implica que el gas recibió energía mecánica del entorno.

**Por qué es incorrecto**

El convenio termodinámico estándar (y el utilizado en este leaf) es que [[W]] > 0 significa trabajo realizado **por el gas** sobre el entorno. Es el gas quien entrega energía mecánica al émbolo o al entorno. Un [[W]] positivo en expansión isobárica corresponde a que el gas pierde parte de su energía (en forma de trabajo) al entorno, no a que la gana. El primer principio refleja esto: [[DeltaU]] = [[Q]] - [[W]], y en expansión isobárica [[W]] reduce el incremento de energía interna.

**Señal de detección**

El alumno escribe "el gas ganó [[W]] = 200 J de energía mecánica" cuando el proceso es claramente una expansión. O bien aplica el primer principio como [[DeltaU]] = [[Q]] + [[W]] en lugar de [[DeltaU]] = [[Q]] - [[W]], indicando inversión del convenio de signo del trabajo.

**Corrección conceptual**

En termodinámica, el convenio es: [[W]] > 0 → el gas realiza trabajo sobre el entorno (expansión, el gas pierde energía vía trabajo); [[W]] < 0 → el entorno realiza trabajo sobre el gas (compresión, el gas gana energía vía trabajo). El primer principio [[DeltaU]] = [[Q]] - [[W]] incorpora correctamente este convenio: en expansión isobárica, el trabajo realizado por el gas reduce la cantidad de calor que queda disponible para aumentar [[DeltaU]].

**Mini-ejemplo de contraste**

Expansión isobárica con [[Q]] = 500 J y [[W]] = 200 J. Aplicando incorrectamente [[DeltaU]] = [[Q]] + [[W]] = 700 J (el gas "gana" toda la energía). Aplicando correctamente [[DeltaU]] = [[Q]] - [[W]] = 300 J. La diferencia es de 400 J, más del doble del valor correcto. La interpretación física incorrecta lleva a sobreestimar gravemente el calentamiento del gas.

---

## Regla de autocontrol rápido

Antes de dar por válido un resultado en un proceso isobárico, verificar estos tres puntos operativos:

1. **Signo de [[W]] consistente con [[DeltaV]]**: si [[V2]] > [[V1]], entonces [[DeltaV]] > 0 y [[W]] (igual al producto [[p]] por [[DeltaV]]) es positivo. Si el resultado da [[W]] negativo con expansión, hay un error de signo o de convenio.

2. **Proporción de Gay-Lussac satisfecha**: calcular [[V1]]/[[T1]] y [[V2]]/[[T2]] con los datos del problema. Si la diferencia relativa supera el 2%, los datos son inconsistentes con el modelo isobárico o se han usado las temperaturas en Celsius.

3. **Balance del primer principio**: calcular [[Q]] - [[W]] y verificar que coincida con el [[DeltaU]] obtenido por separado (por ejemplo, mediante [[DeltaU]] = \(n C_V \Delta T\)). Una discrepancia superior al 1% indica un error de cálculo o una inconsistencia entre los datos del problema.
