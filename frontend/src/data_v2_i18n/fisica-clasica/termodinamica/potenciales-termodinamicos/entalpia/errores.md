## Errores conceptuales

### Error 1: Aplicar la igualdad entre calor y [[DeltaH]] en cualquier proceso

**Por qué parece correcto**

El alumno aprende que [[DeltaH]] es el calor de reacción y generaliza esto a todos los procesos termodinámicos. Como en la mayoría de los problemas de química el recipiente es abierto, la condición isobárica se cumple casi siempre y el alumno deja de verificarla. El mecanismo cognitivo es una **generalización excesiva** basada en el contexto más habitual de los problemas de libro.

**Por qué es incorrecto**

La igualdad entre calor y [[DeltaH]] solo es válida cuando la presión permanece constante durante todo el proceso. En un recipiente rígido (bomba calorimétrica, autoclave sellado), el volumen es constante y el calor medido es la variación de energía interna [[U]], no [[DeltaH]]. Usar [[DeltaH]] en ese caso ignora el término de trabajo de expansión y produce resultados erróneos.

**Señal de detección**

El enunciado menciona «recipiente cerrado», «volumen fijo», «bomba calorimétrica» o «recipiente rígido», pero el alumno aplica directamente la equivalencia calor igual a [[DeltaH]] sin verificar la condición de presión.

**Corrección conceptual**

Antes de igualar el calor a [[DeltaH]], verificar si la presión o el volumen son la variable constante. Presión constante (recipiente abierto o con émbolo libre) implica que el calor equivale a [[DeltaH]]. Volumen constante (recipiente rígido) implica que el calor equivale a la variación de energía interna [[U]].

**Mini-ejemplo de contraste**

La combustión de un gramo de glucosa en una bomba calorimétrica produce una subida de temperatura medible. El calor calculado corresponde a [[U]], que es la variación de energía interna. Si se aplica directamente [[DeltaH]] sin la corrección del término de expansión de gases, se obtiene un valor ligeramente diferente. En reacciones con producción neta de moles de gas, la diferencia puede ser de varios kJ/mol.

---

## Errores de modelo

### Error 1: Tratar [[H]] como una energía absoluta con significado directo

**Por qué parece correcto**

El alumno ve en la definición que [[H]] es una suma de términos con unidades de energía y asume que su valor absoluto tiene significado físico directo, como lo tiene la energía cinética o la energía potencial gravitatoria. La analogía con esas magnitudes refuerza la creencia de que «el sistema tiene tantos julios de entalpía».

**Por qué es incorrecto**

La entalpía [[H]] es función de estado y, como toda función de estado extensiva, solo sus **diferencias** tienen significado operativo. El valor absoluto de [[H]] depende del estado de referencia elegido convencionalmente. Las tablas de entalpías de formación estándar son, precisamente, diferencias respecto a ese estado de referencia (elementos en su forma estándar a 298 K), no valores de [[H]] absolutos.

**Señal de detección**

El alumno afirma que «el sistema tiene una entalpía de 500 kJ» sin referirse a ningún proceso ni cambio de estado. O usa directamente el valor de la tabla de formación como si fuera la entalpía total del compuesto.

**Corrección conceptual**

Solo [[DeltaH]] tiene significado físico directo. La entalpía de formación estándar es la [[DeltaH]] del proceso de formación del compuesto desde sus elementos en estado estándar. No es la entalpía absoluta del compuesto.

**Mini-ejemplo de contraste**

La entalpía estándar de formación del agua líquida es aproximadamente menos 286 kJ/mol. Esto no significa que el agua «tenga» menos 286 kJ/mol de entalpía; significa que la formación de un mol de agua líquida desde hidrógeno e oxígeno gaseosos libera 286 kJ al entorno bajo condiciones estándar.

---

## Errores matemáticos

### Error 1: Invertir el signo en la ley de Hess al revertir una reacción

**Por qué parece correcto**

El alumno sabe que al invertir una reacción el signo de [[DeltaH]] cambia, pero al construir un ciclo de Hess con varias etapas pierde la cuenta de cuáles se invierten y cuáles no. El mecanismo es un **error de rastreo algebraico** al manejar varios signos simultáneamente.

**Por qué es incorrecto**

La ley de Hess es una suma algebraica de [[DeltaH]] de etapas. Cada etapa que se usa en sentido inverso al tabulado debe contribuir con el signo opuesto. Si se olvida invertir el signo de alguna etapa, el resultado final tendrá un error igual al doble del valor de esa etapa.

**Señal de detección**

El resultado de [[DeltaH]] tiene el signo incorrecto para el tipo de proceso esperado (por ejemplo, [[DeltaH]] positiva para una combustión), o su valor difiere del esperado en exactamente el doble de la entalpía de una de las etapas.

**Corrección conceptual**

Al construir el ciclo de Hess, anotar explícitamente al lado de cada etapa si se usa en el sentido directo o inverso, y ajustar el signo de [[DeltaH]] en consecuencia. Verificar al final que todas las especies intermedias se cancelan completamente.

**Mini-ejemplo de contraste**

Para calcular la entalpía de formación del monóxido de carbono usando las entalpías de combustión del carbono y del monóxido de carbono, la segunda reacción debe invertirse. Si se olvida invertir el signo de esa etapa, el resultado tiene el signo contrario al correcto, indicando que la formación de CO es exotérmica cuando en realidad es endotérmica respecto a la referencia usada.

---

## Errores de interpretación

### Error 1: Confundir [[DeltaH]] negativa con proceso espontáneo

**Por qué parece correcto**

El alumno recuerda que «la naturaleza tiende a estados de menor energía» y concluye que si [[DeltaH]] es negativa el proceso es espontáneo. Esta regla funciona aproximadamente a baja temperatura y para muchos casos cotidianos, lo que refuerza la creencia. El mecanismo cognitivo es la **confusión entre criterio entálpico y criterio de espontaneidad completo**.

**Por qué es incorrecto**

La espontaneidad depende de la variación de energía libre de Gibbs, no solo de [[DeltaH]]. Un proceso endotérmico (positivo) puede ser espontáneo si la entropía aumenta suficientemente. La disolución de muchas sales en agua es endotérmica y espontánea. A alta temperatura, el término entrópico domina y procesos con [[DeltaH]] positiva pueden ser espontáneos.

**Señal de detección**

El alumno concluye que un proceso con [[DeltaH]] positiva es imposible o no espontáneo sin calcular la variación de entropía ni la energía libre de Gibbs.

**Corrección conceptual**

[[DeltaH]] negativa favorece la espontaneidad pero no la garantiza. Para determinar la espontaneidad es necesario conocer también la variación de entropía y la temperatura, combinándolas en el criterio de la energía libre de Gibbs.

**Mini-ejemplo de contraste**

La disolución del nitrato de amonio en agua es fuertemente endotérmica, lo que enfría la solución. Sin embargo, el proceso es espontáneo a temperatura ambiente porque el aumento de entropía al disolver es muy grande. Un alumno que solo mira el signo de [[DeltaH]] concluiría incorrectamente que la disolución es imposible.

---

## Regla de autocontrol rápido

Antes de dar por válido un cálculo de [[DeltaH]], verificar los siguientes puntos:

- **Condición de proceso**: la presión debe ser constante para igualar el calor a [[DeltaH]]. Si el recipiente es rígido, el resultado es la variación de energía interna [[U]].
- **Signo coherente con el tipo de proceso**: combustiones, neutralizaciones ácido-base fuertes y formaciones de agua deben dar [[DeltaH]] negativa.
- **Unidades homogéneas**: todos los valores de entalpía de formación deben estar en la misma unidad (J/mol o kJ/mol). Un resultado en el orden de megajulios por mol para una reacción química ordinaria indica mezcla de unidades.
- **Verificación de la ley de Hess**: comprobar que todas las especies intermedias se cancelan en el ciclo antes de sumar. Si alguna especie no cancela, hay un error de coeficiente o de signo.
- **Signo de entalpías tabuladas invertidas**: cada reacción usada en sentido inverso al de la tabla debe contribuir con el signo contrario al tabulado.
