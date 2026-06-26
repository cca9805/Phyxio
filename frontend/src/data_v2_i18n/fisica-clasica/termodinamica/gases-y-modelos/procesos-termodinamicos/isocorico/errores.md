## Errores conceptuales

### Error 1: Confundir trabajo nulo con energía interna nula

**Por qué parece correcto**

El alumno asocia «nada se mueve» con «no hay cambio de energía». Si el gas no empuja un émbolo ni infla un globo, parece razonable concluir que la energía del sistema no cambia. Esta generalización excesiva mezcla el concepto de trabajo mecánico con el concepto más amplio de energía interna.

**Por qué es incorrecto**

El trabajo mecánico mide solo el intercambio de energía a través de una frontera que se desplaza. La energía interna incluye toda la energía cinética y potencial de las moléculas, que cambia siempre que hay intercambio de calor, independientemente de si hay desplazamiento de frontera. En el proceso isocórico [[W]] es nulo pero [[DeltaU]] puede ser muy grande.

**Señal de detección**

El alumno escribe que [[DeltaU]] es nula en un proceso isocórico sin comprobar si hay calor. O aplica el primer principio y concluye que [[Q]] es nulo porque «no hay trabajo».

**Corrección conceptual**

El primer principio establece que [[DeltaU]] es igual a [[Q]] menos [[W]]. En el proceso isocórico [[W]] es nulo, por lo que [[DeltaU]] es igual a [[Q]]. Si hay calor, hay cambio de energía interna. Si hay cambio de temperatura, hay cambio de energía interna.

**Mini-ejemplo de contraste**

Un recipiente de acero cerrado con 2 moles de helio se calienta 200 K. Decir que [[DeltaU]] es nula llevaría a concluir que no se necesita ningún calor para calentarlo, lo cual es absurdo. La energía interna ha aumentado en aproximadamente 5000 J.

---

### Error 2: Creer que en el proceso isocórico la presión también es constante

**Por qué parece correcto**

En la nomenclatura habitual de la física, los cuatro procesos ideales son isocórico, isobárico, isotérmico y adiabático. Un alumno que no ha afianzado el significado del prefijo «iso-» puede confundir cuál es la magnitud constante en cada caso y asumir que, si el volumen es constante, la presión también puede serlo.

**Por qué es incorrecto**

En un gas ideal, si el volumen es constante y la temperatura cambia, la presión cambia inevitablemente. La ley de Gay-Lussac establece que a volumen constante la presión y la temperatura absoluta son proporcionales. Si [[T]] aumenta, [[p]] aumenta en la misma proporción. Un proceso simultáneamente isocórico e isobárico implica que la temperatura también es constante, lo que trivializa el proceso (ninguna magnitud cambia).

**Señal de detección**

El alumno usa la fórmula de [[DeltaU]] correctamente pero asigna presión constante al calcular trabajo o al dibujar el diagrama pV. O concluye que el diagrama pT es una línea horizontal en lugar de una recta con pendiente positiva.

**Corrección conceptual**

En el proceso isocórico solo el volumen es constante. La presión cambia proporcionalmente a la temperatura absoluta. En el diagrama pV el proceso es una línea vertical (volumen fijo, presión variable). En el diagrama pT es una recta con pendiente positiva que pasa por el origen.

**Mini-ejemplo de contraste**

Un recipiente con nitrógeno a 300 K y 1 atm se calienta a 600 K a volumen constante. Si la presión fuera también constante, el gas ideal se contradeciría a sí mismo porque el producto presión por volumen divido entre temperatura debe ser constante. La presión final debe ser 2 atm, no 1 atm.

---

## Errores de modelo

### Error 1: Usar Cp en lugar de [[Cv]] en el cálculo de [[DeltaU]]

**Por qué parece correcto**

El calor específico del agua es un valor muy conocido y único que los alumnos memorizan. Al llegar a la termodinámica de gases, no siempre distinguen que los gases tienen dos calores específicos distintos (a volumen constante y a presión constante) y tienden a usar el valor más familiar o el que aparece primero en la tabla.

**Por qué es incorrecto**

[[Cv]] mide cuánto calor absorbe el gas por mol y por kelvin cuando el volumen no cambia. Cp mide lo mismo cuando la presión no cambia. Cp es siempre mayor que [[Cv]] para un gas ideal porque en el proceso isobárico parte del calor se convierte en trabajo de expansión. En el proceso isocórico no hay trabajo, así que la energía absorbida es menor que en el isobárico para el mismo [[DeltaT]]. Usar Cp sobredimensiona [[DeltaU]] e introduce un error sistemático de entre un 40 % (gas monoatómico) y un 30 % (gas diatómico).

**Señal de detección**

El alumno obtiene un valor de [[DeltaU]] coherente en magnitud pero sistemáticamente más alto que el correcto. O al comparar el resultado con el calor medido, hay un exceso del orden de [[n]] por R por [[DeltaT]].

**Corrección conceptual**

Para el proceso isocórico siempre se usa [[Cv]]. Para el proceso isobárico siempre se usa Cp. La diferencia entre Cp y [[Cv]] es exactamente la constante de los gases R para un gas ideal.

**Mini-ejemplo de contraste**

Para 1 mol de nitrógeno con [[DeltaT]] de 100 K, el calor isocórico real con [[Cv]] de 20.8 J por mol y kelvin es 2080 J. Usando Cp de 29.1 J por mol y kelvin daría 2910 J, un error de 830 J que representa un exceso del 40 %. Ese exceso corresponde al trabajo de expansión que existe en el proceso isobárico pero no en el isocórico.

---

### Error 2: Aplicar la fórmula del trabajo isobárico en el proceso isocórico

**Por qué parece correcto**

La fórmula del trabajo de un gas es presión por cambio de volumen. Un alumno que la ha aprendido así, sin el contexto de cuándo se aplica, puede intentar calcular [[W]] multiplicando la presión del gas por un supuesto cambio de volumen aunque el proceso sea isocórico.

**Por qué es incorrecto**

Si el volumen es constante, el cambio de volumen es exactamente nulo, y cualquier producto por cero da cero. No existe un «cambio de volumen» en el proceso isocórico. El trabajo de expansión-compresión requiere un desplazamiento de la frontera del sistema, que en el proceso isocórico simplemente no ocurre.

**Señal de detección**

El alumno calcula [[W]] como el producto de la presión promedio por un cambio de volumen inventado o por el valor de [[DeltaT]] multiplicado por algún coeficiente incorrecto.

**Corrección conceptual**

En el proceso isocórico [[W]] es nulo por definición. No hay cálculo que hacer para el trabajo; la primera línea de cualquier resolución isocórica debe ser identificar [[W]] como cero.

**Mini-ejemplo de contraste**

Si se intenta calcular el trabajo de un gas en un recipiente rígido obteniendo un valor no nulo, ese resultado por sí solo prueba que se ha cometido un error porque es inconsistente con el volumen constante.

---

## Errores matemáticos

### Error 1: Usar temperaturas en grados Celsius en la ley de Gay-Lussac

**Por qué parece correcto**

En la fórmula de [[DeltaU]] isocórico, [[DeltaT]] en kelvins es numéricamente igual a [[DeltaT]] en grados Celsius, por lo que para ese cálculo el error no aparece. El alumno extrapola incorrectamente que las temperaturas pueden usarse en Celsius para cualquier cálculo del proceso isocórico, incluida la verificación de la relación entre presiones.

**Por qué es incorrecto**

La ley de Gay-Lussac establece la proporcionalidad entre presión y temperatura absoluta. La proporcionalidad solo se mantiene en la escala Kelvin, donde el cero corresponde a la ausencia total de agitación molecular. En la escala Celsius, el cero es arbitrario (punto de fusión del agua), y el cociente entre dos temperaturas en Celsius no tiene significado físico equivalente al cociente de temperaturas absolutas.

**Señal de detección**

El alumno obtiene una razón de presiones diferente a la razón de temperaturas en kelvins, o bien obtiene una temperatura negativa (imposible en kelvins) cuando realiza la proporción.

**Corrección conceptual**

Siempre convertir a kelvins sumando 273.15 antes de aplicar cualquier ratio o proporción de temperatura en termodinámica. La diferencia de temperaturas puede calcularse en cualquier escala, pero las razones y proporciones solo son válidas en kelvins.

**Mini-ejemplo de contraste**

Un gas a 27 °C (300 K) se calienta a 327 °C (600 K). La presión se duplica porque 600 dividido entre 300 es 2. Pero 327 dividido entre 27 da 12.1, un resultado físicamente incorrecto que dice que la presión se multiplica por 12. El error de Celsius produce una amplificación ficticia del cociente.

---

## Errores de interpretación

### Error 1: Deducir que si [[DeltaU]] es positivo el gas ha realizado trabajo

**Por qué parece correcto**

En muchos contextos de la mecánica, «energía que aumenta» implica que el sistema «puede hacer cosas». El alumno transfiere intuitivamente que un [[DeltaU]] positivo significa que el gas tiene más capacidad para hacer trabajo, confundiendo energía almacenada con trabajo realizado en el proceso.

**Por qué es incorrecto**

Un [[DeltaU]] positivo en el proceso isocórico únicamente significa que el gas ha absorbido calor y su temperatura ha subido. No implica ningún trabajo realizado en el proceso, porque [[W]] es nulo. La energía adicional está almacenada como energía cinética molecular, no transferida mecánicamente al entorno. Que el gas pueda realizar trabajo en el futuro (en otro proceso posterior) es una cuestión distinta.

**Señal de detección**

El alumno escribe que el gas «ha realizado trabajo» al calcular [[DeltaU]] positivo, o trata de repartir [[DeltaU]] entre trabajo y calor cuando [[W]] debería ser nulo.

**Corrección conceptual**

En el proceso isocórico el signo de [[DeltaU]] indica si el gas se calienta (positivo) o se enfría (negativo). No hay trabajo en ningún caso. La variación de energía interna es idéntica al calor intercambiado.

**Mini-ejemplo de contraste**

Un recipiente cerrado absorbe 5000 J de calor y [[DeltaU]] aumenta 5000 J. Deducir que el gas ha realizado 5000 J de trabajo llevaría a un balance energético imposible donde la energía total absorbida sería el doble de la entrada.

---

## Regla de autocontrol rápido

Antes de dar por buena cualquier resolución de un proceso isocórico, verificar estas cuatro condiciones:

1. **[[W]] es nulo**: si en el resultado aparece un trabajo distinto de cero, el proceso no es isocórico o hay un error de cálculo.
2. **[[Q]] es igual a [[DeltaU]]**: si los dos valores no coinciden, hay un error en alguno de los dos cálculos.
3. **Las temperaturas están en kelvins**: revisar que cada temperatura usada en ratios o proporciones esté en la escala absoluta.
4. **Se ha usado [[Cv]] y no Cp**: confirmar que el calor específico empleado es el correspondiente a volumen constante, identificando el tipo de gas (monoatómico, diatómico, triatómico) antes de asignar el valor numérico.
