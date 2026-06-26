## Errores conceptuales


### Error 1: Tratar [[trabajo_termodinamico]] como función de estado

**Por qué parece correcto**

El alumno aprende que la energía se conserva y que magnitudes como la energía cinética o la energía potencial solo dependen del estado. Generaliza que [[trabajo_termodinamico]] también debe depender solo de los estados inicial y final, sin importar cómo se llega de uno al otro. El mecanismo cognitivo es una **analogía incompleta** con las magnitudes de estado.

**Por qué es incorrecto**

[[trabajo_termodinamico]] no es función de estado sino de proceso. Depende de la trayectoria seguida en el diagrama p-V. Dos procesos distintos entre los mismos estados inicial y final encierran áreas distintas bajo sus curvas p-V y producen valores distintos de [[trabajo_termodinamico]]. Solo la variación de energía interna ΔU es independiente de la trayectoria.

**Señal de detección**

El alumno calcula [[trabajo_termodinamico]] directamente a partir de los valores de p y V en los estados inicial y final, sin preguntar qué tipo de proceso conecta esos estados.

**Corrección conceptual**

Siempre identificar el tipo de proceso antes de calcular [[trabajo_termodinamico]]. El mismo ΔV puede producir valores de [[trabajo_termodinamico]] totalmente distintos según si el proceso es isobárico, isotérmico, adiabático o irreversible.

**Mini-ejemplo de contraste**

Un gas pasa del estado (p₁, V₁) al estado (p₂, V₂) por dos rutas: una isobárica seguida de una isocórica, y una isotérmica directa. El [[trabajo_termodinamico]] isobárico-isocórico es p₁·(V₂−V₁), mientras que el [[trabajo_termodinamico]] isotérmico es nRT·ln(V₂/V₁). Ambos valores son diferentes aunque los estados inicial y final sean idénticos.

---

## Errores de modelo


### Error 1: Aplicar [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] en un proceso no isobárico

**Por qué parece correcto**

La fórmula [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] es la más simple y la primera que se enseña. El alumno la memoriza y la aplica sin verificar si la presión es constante. En muchos problemas la presión sí es constante, lo que refuerza la hábito de usarla sin discriminar. El mecanismo es la **aplicación irreflexiva de la fórmula más simple**.

**Por qué es incorrecto**

[[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] es solo válida cuando [[presion]] es constante durante todo el proceso. Si [[presion]] varía con [[volumen]], como en un proceso isotérmico de gas ideal o en un proceso adiabático, el trabajo debe calcularse como ∫p dV, que para cada proceso tiene una expresión analítica distinta.

**Señal de detección**

El enunciado especifica un proceso isotérmico, adiabático o describe una compresión con presión que cambia, pero el alumno usa directamente [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] con el valor de presión del estado inicial o final.

**Corrección conceptual**

Identificar primero el tipo de proceso y usar la fórmula correspondiente: para proceso isotérmico de gas ideal, [[trabajo_termodinamico]] = nRT·ln(V_f/V_i); para proceso adiabático, [[trabajo_termodinamico]] = ΔU (con signo); para proceso isobárico, [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]].

**Mini-ejemplo de contraste**

Un mol de gas ideal a 300 K se comprime isotérmicamente de 10 L a 5 L. Aplicando [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] con la presión inicial produce un resultado incorrecto porque [[presion]] no es constante. El valor correcto es [[trabajo_termodinamico]] = nRT·ln(V_f/V_i) = 1·8.314·300·ln(0.5) ≈ −1729 J. Usar [[presion]]·[[variacion_de_volumen]] con [[presion]] inicial da un valor distinto.

---

## Errores matemáticos


### Error 1: Invertir el signo de [[variacion_de_volumen]]

**Por qué parece correcto**

El alumno calcula [[variacion_de_volumen]] como [[volumen]] inicial menos [[volumen]] final, sin darse cuenta de que la convención es V_f − V_i. Esto ocurre especialmente cuando el proceso es de compresión y el alumno quiere obtener un valor positivo por instinto. El mecanismo es la **confusión entre el orden natural de la resta y la convención matemática**.

**Por qué es incorrecto**

Por definición [[variacion_de_volumen]] = V_f − V_i. Invertir la resta produce el signo contrario del trabajo. Una compresión real tiene [[trabajo_termodinamico]] negativo (en convención física); si se calcula [[variacion_de_volumen]] = V_i − V_f se obtiene [[trabajo_termodinamico]] positivo erróneamente.

**Señal de detección**

El resultado de [[trabajo_termodinamico]] tiene el signo contrario al esperado: por ejemplo, [[trabajo_termodinamico]] positivo en una compresión evidente o [[trabajo_termodinamico]] negativo en una expansión visible.

**Corrección conceptual**

Verificar siempre que [[variacion_de_volumen]] = V_f − V_i antes de calcular [[trabajo_termodinamico]]. Si el proceso es expansión, V_f > V_i y [[variacion_de_volumen]] > 0, dando [[trabajo_termodinamico]] > 0.

**Mini-ejemplo de contraste**

Un gas se expande de 2 L a 5 L a presión constante de 100 000 Pa. [[variacion_de_volumen]] correcto: 5×10⁻³ − 2×10⁻³ = 3×10⁻³ m³. [[trabajo_termodinamico]] = 100 000 × 3×10⁻³ = 300 J (positivo, el gas realiza trabajo). Si se usa [[variacion_de_volumen]] = 2×10⁻³ − 5×10⁻³, se obtiene [[trabajo_termodinamico]] = −300 J, que indica compresión, lo opuesto a lo que ocurre.

---

## Errores de interpretación


### Error 1: Confundir la convención de signos entre física y química

**Por qué parece correcto**

El alumno estudia termodinámica en dos asignaturas distintas: física y química. En física la convención habitual es [[trabajo_termodinamico]] > 0 para expansión; en química el convenio más extendido define el trabajo como el trabajo realizado sobre el sistema, resultando [[trabajo_termodinamico]] < 0 para expansión. Ambas convenciones son válidas pero inconsistentes entre sí. El mecanismo es la **transferencia de convenciones de un contexto a otro sin verificar**.

**Por qué es incorrecto**

Las dos convenciones dan valores de [[trabajo_termodinamico]] con signos opuestos para el mismo proceso físico. Mezclarlas produce errores en la primera ley: en la convención física, ΔU = Q − [[trabajo_termodinamico]]; en la convención química, ΔU = Q + [[trabajo_termodinamico]]. Si se usa el signo de la convención química con la fórmula de la convención física, el resultado del balance energético es incorrecto.

**Señal de detección**

El alumno obtiene un signo de ΔU que es incorrecto respecto al proceso esperado, o interpreta un [[trabajo_termodinamico]] positivo de expansión como si indicase trabajo realizado sobre el sistema.

**Corrección conceptual**

Identificar al inicio del problema qué convención usa el enunciado. Si la primera ley aparece como ΔU = Q − [[trabajo_termodinamico]], la convención es física ([[trabajo_termodinamico]] > 0 para expansión). Si aparece como ΔU = Q + [[trabajo_termodinamico]], es química ([[trabajo_termodinamico]] < 0 para expansión). Mantener una sola convención durante todo el problema.

**Mini-ejemplo de contraste**

Un gas absorbe 500 J de calor y se expande realizando 200 J de trabajo sobre el émbolo. En convención física: [[trabajo_termodinamico]] = +200 J, ΔU = 500 − 200 = +300 J. En convención química: [[trabajo_termodinamico]] = −200 J, ΔU = 500 + (−200) = +300 J. El resultado de ΔU es el mismo, pero solo si se aplica la fórmula de la primera ley consistente con la convención de signos usada.

---

## Regla de autocontrol rápido

Antes de dar por válido un cálculo de [[trabajo_termodinamico]], verificar:

- **Tipo de proceso identificado**: isobárico, isotérmico, adiabático o isocórico. No aplicar [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] sin haber confirmado que [[presion]] es constante.
- **Signo de [[variacion_de_volumen]]**: [[variacion_de_volumen]] = V_f − V_i. Expansión da positivo; compresión da negativo.
- **Convención de signos coherente**: no mezclar convenciones física y química dentro del mismo problema.
- **Unidades homogéneas**: [[presion]] en Pa y [[volumen]] en m³ dan [[trabajo_termodinamico]] en J. Si se usan atm y litros, multiplicar por el factor de conversión 101.325 J/(L·atm).
- **Orden de magnitud**: para presiones del orden de 10⁵ Pa y volúmenes del orden de litros, [[trabajo_termodinamico]] debe estar en el rango de decenas a cientos de julios.