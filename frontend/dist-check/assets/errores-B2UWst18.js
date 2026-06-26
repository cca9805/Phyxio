const e=`## Errores conceptuales

### Error 1: Creer que los procesos internos violan el aislamiento

**Por qué parece correcto**

El alumno observa que dentro del sistema aislado ocurren cosas: el agua caliente enfría al agua fría, los gases se mezclan, las temperaturas se igualan. Razona que si hay "actividad interna", debe haber algún tipo de intercambio con el exterior. La analogía incorrecta es la de una caja oscura: "si algo pasa dentro, tiene que venir de fuera".

**Por qué es incorrecto**

El aislamiento solo regula los intercambios a través de la **frontera** del sistema con su entorno. Los procesos internos —mezcla, redistribución térmica, reacciones— son reorganizaciones de la energía ya presente en el sistema. No añaden ni sustraen energía del sistema total. El primer principio aplicado al sistema aislado establece que [[DeltaU]] es nulo independientemente de cuántos procesos internos ocurran.

**Señal de detección**

El alumno escribe que [[DeltaU]] es distinto de cero argumentando que "hubo reacción interna" o "los fluidos se mezclaron". La señal más clara es justificar [[DeltaU]] no nulo con referencia a un proceso que ocurre dentro, no a través, de la frontera.

**Corrección conceptual**

La condición de sistema aislado es una propiedad de la **frontera**, no del interior. Si la frontera es adiabática, rígida e impermeable, entonces [[Q_ais]] y [[W_ais]] son nulos y [[DeltaU]] es nulo, sin importar lo que ocurra dentro. Los procesos internos afectan a la distribución de la energía, no a su total.

**Mini-ejemplo de contraste**

Un explosivo detona dentro de un recipiente perfectamente aislado y rígido. La explosión es un proceso interno violentísimo. Aun así, [[DeltaU]] del sistema completo es cero: la energía química se convirtió en energía cinética y térmica, pero ninguna cruzó la frontera. La temperatura del gas resultante será altísima, pero la energía total del sistema es la misma que antes de la detonación.

---

### Error 2: Confundir la temperatura interna con el intercambio de calor

**Por qué parece correcto**

El alumno asocia temperatura alta con "mucho calor saliendo" y temperatura baja con "mucho calor entrando". Si el sistema está a 500 °C, parece inevitable que "ceda calor" al entorno. La confusión cognitiva mezcla el estado térmico del sistema (temperatura) con un proceso de transferencia (calor).

**Por qué es incorrecto**

El calor [[Q_ais]] es una transferencia de energía a través de la frontera, no una propiedad de estado del sistema. Un sistema a 500 °C con frontera perfectamente adiabática tiene [[Q_ais]] estrictamente nulo. La temperatura interna describe cuánta energía tiene el sistema, no si esa energía está fluyendo hacia fuera. El flujo de calor depende del gradiente de temperatura a través de la frontera y de la conductividad de esa frontera, no de la temperatura del interior.

**Señal de detección**

El alumno escribe que [[Q_ais]] es positivo o negativo argumentando que "el sistema está caliente" o "hay mucha energía dentro". El razonamiento parte de la temperatura interior en lugar de las propiedades de la frontera.

**Corrección conceptual**

[[Q_ais]] es nulo si y solo si la frontera es adiabática. La temperatura interna no determina [[Q_ais]]. Para calcular [[Q_ais]], hay que analizar las propiedades de la frontera (conductividad térmica, área, gradiente de temperatura exterior-interior), no el estado interno del sistema.

**Mini-ejemplo de contraste**

Un Dewar lleno de nitrógeno líquido a −196 °C y otro Dewar vacío a temperatura ambiente. Ambos tienen frontera adiabática. En ambos [[Q_ais]] ≈ 0 en tiempos cortos, aunque la diferencia de temperatura entre el interior y el exterior es enorme en el caso del nitrógeno. El aislamiento de la frontera, no la temperatura interior, determina [[Q_ais]].

---

## Errores de modelo

### Error 3: Aplicar el modelo de sistema aislado cuando la frontera no cumple las condiciones

**Por qué parece correcto**

En un enunciado que dice "recipiente cerrado", el alumno asume automáticamente sistema aislado. La palabra "cerrado" sugiere intuitivamente que nada puede entrar ni salir. Además, en muchos problemas de nivel básico, los recipientes cerrados se tratan como aislados por simplicidad, generalizando incorrectamente esa práctica.

**Por qué es incorrecto**

Un recipiente "cerrado" en termodinámica define un **sistema cerrado**, no un sistema aislado. El sistema cerrado permite intercambio de calor y trabajo con el entorno, aunque no intercambia materia. Para ser un sistema aislado, el recipiente debe ser además adiabático (sin conducción, convección ni radiación térmica) y rígido (sin variación de volumen). Un recipiente de vidrio cerrado en una habitación, por ejemplo, intercambia calor con el aire de la habitación: no es un sistema aislado.

**Señal de detección**

El alumno aplica [[DeltaU]] nulo a un recipiente de paredes delgadas o conductoras, o a un proceso que dura muchas horas en un ambiente a distinta temperatura. La señal es el uso del modelo aislado sin verificar explícitamente las propiedades de la frontera.

**Corrección conceptual**

Antes de aplicar el modelo de sistema aislado, verificar tres condiciones de la frontera: adiabática (sin flujo de calor), rígida (sin trabajo de presión-volumen) e impermeable (sin flujo de materia). Si alguna de estas tres condiciones falla, el modelo adecuado es sistema cerrado o sistema abierto, según los intercambios que sí ocurren.

**Mini-ejemplo de contraste**

Un vaso de agua caliente cubierto con un plato. El alumno lo trata como sistema aislado y calcula [[DeltaU]] nulo. Pero en 30 minutos, el agua pierde varios kJ de calor hacia el plato y el aire circundante. [[DeltaU]] es negativo, no nulo. El modelo correcto es sistema cerrado con [[Q_ais]] negativo (calor cedido al entorno).

---

### Error 4: Creer que la entropía del sistema aislado puede disminuir

**Por qué parece correcto**

El alumno recuerda que "en algunos procesos la entropía disminuye" —por ejemplo, al enfriar un gas, su entropía disminuye. Razona que si puede disminuir en ese caso, también puede disminuir en un sistema aislado si el proceso es "el adecuado". La generalización incorrecta ignora que en los ejemplos que conoce, la disminución de entropía del sistema siempre viene acompañada de un aumento mayor en el entorno.

**Por qué es incorrecto**

En un sistema aislado no hay entorno con el que compensar. La desigualdad de Clausius-Planck establece que [[S_ais]] es mayor o igual a cero para cualquier proceso en un sistema aislado, sin excepción. Cuando se enfría un gas en un recipiente abierto, la disminución de entropía del gas es posible porque el calor cedido al entorno aumenta la entropía del entorno en mayor medida. En el sistema aislado, ese mecanismo de compensación no existe.

**Señal de detección**

El alumno obtiene [[S_ais]] negativo y lo acepta sin revisión, o argumenta que el proceso "ordena" el sistema y por tanto [[S_ais]] puede ser negativo. La señal es no cuestionar el signo negativo de [[S_ais]] en un sistema declarado aislado.

**Corrección conceptual**

[[S_ais]] negativo en un sistema aislado es siempre un error. La corrección es revisar si el sistema está realmente aislado, si el cálculo de entropía es correcto o si se ha confundido la entropía del sistema con la entropía del entorno. La entropía del universo (sistema + entorno) puede ser la que se evaluó incorrectamente.

**Mini-ejemplo de contraste**

Se calcula que al mezclar dos gases en un recipiente aislado, [[S_ais]] es −50 J/K. Este resultado es imposible y delata un error. La entropía de mezcla de gases siempre es positiva. Si el resultado es negativo, se ha cometido un error de signo en la expresión usada o se ha calculado la entropía del proceso inverso (separación forzada).

---

## Errores matemáticos

### Error 5: Aplicar incorrectamente el balance de energía al no anular [[Q_ais]] y [[W_ais]] por separado

**Por qué parece correcto**

El alumno recuerda que "en sistema aislado [[DeltaU]] es cero" y aplica directamente esa condición sin descomponer el primer principio en sus dos términos. En problemas donde hay datos numéricos de temperatura, puede sustituir [[DeltaU]] nulo sin verificar si [[Q_ais]] y [[W_ais]] son realmente nulos, dando lugar a balances incompletos.

**Por qué es incorrecto**

El primer principio establece que [[DeltaU]] es la suma de [[Q_ais]] y [[W_ais]]. Para concluir que [[DeltaU]] es nulo, primero hay que justificar que [[Q_ais]] es nulo (frontera adiabática) y [[W_ais]] es nulo (frontera rígida) de forma independiente. Si el alumno asume [[DeltaU]] nulo sin verificar ambas condiciones, puede pasar por alto situaciones donde una de las dos transferencias compensa a la otra, resultando en [[DeltaU]] nulo por cancelación (lo que no es un sistema aislado, sino una coincidencia).

**Señal de detección**

El alumno escribe directamente "sistema aislado, por tanto [[DeltaU]] es cero" sin ninguna mención a [[Q_ais]] y [[W_ais]] individuales. Falta el paso de verificación de cada condición de frontera.

**Corrección conceptual**

El procedimiento correcto es: (1) verificar que [[Q_ais]] es nulo por la condición adiabática de la frontera; (2) verificar que [[W_ais]] es nulo por la condición de frontera rígida; (3) concluir que [[DeltaU]] es nulo por el primer principio. No se puede saltar los pasos 1 y 2.

**Mini-ejemplo de contraste**

Un recipiente con un émbolo interior y paredes que conducen calor. El calor que entra es positivo y el trabajo que realiza el sistema al comprimir algo externo es igual en módulo. La suma da [[DeltaU]] nulo, pero el sistema no está aislado: hay intercambios de calor y trabajo que se compensan. Tratarlo como sistema aislado por el hecho de que [[DeltaU]] es cero sería un error grave de modelado.

---

## Errores de interpretación

### Error 6: Interpretar el equilibrio del sistema aislado como un estado sin movimiento microscópico

**Por qué parece correcto**

El alumno asocia "equilibrio" con "quietud" o "reposo". Si el sistema aislado en equilibrio tiene temperatura uniforme y presión uniforme, parece que "nada se mueve". La imagen macroscópica de uniformidad se traduce erróneamente en inactividad microscópica.

**Por qué es incorrecto**

El equilibrio termodinámico es un estado macroscópico de uniformidad de propiedades intensivas (temperatura, presión, potencial químico), no un estado de inactividad microscópica. A nivel microscópico, las moléculas siguen moviéndose, colisionando e intercambiando energía a gran velocidad. El equilibrio es el estado estadístico más probable, en el que las fluctuaciones microscópicas se promedian a valores macroscópicamente constantes. [[S_ais]] alcanza su máximo precisamente porque el número de microestados accesibles es el mayor posible.

**Señal de detección**

El alumno describe el estado de equilibrio del sistema aislado como "estático", "inactivo" o "sin procesos", confundiendo la invarianza macroscópica con la inactividad microscópica. O bien interpreta que [[S_ais]] deja de crecer porque "ya no hay nada que pasar".

**Corrección conceptual**

El equilibrio termodinámico es la condición en que las variables de estado macroscópicas (temperatura, presión, composición) son uniformes en todo el sistema y no cambian con el tiempo. A nivel microscópico, la actividad molecular es máxima en ese estado: el sistema está explorando constantemente todos sus microestados accesibles con igual probabilidad. [[S_ais]] es máximo porque el número de microestados accesibles es máximo.

**Mini-ejemplo de contraste**

Un gas perfecto en equilibrio en un sistema aislado tiene todas sus moléculas moviéndose a velocidades variadas según la distribución de Maxwell-Boltzmann. Si imaginamos "congelar" el movimiento de las moléculas, el gas estaría en el estado de menor entropía posible, no de equilibrio. El equilibrio exige actividad microscópica intensa, no inactividad.

---

## Regla de autocontrol rápido

Para verificar que un cálculo sobre sistema aislado es correcto, comprueba estas cinco condiciones antes de dar la respuesta por válida:

1. ¿Se justifica explícitamente que [[Q_ais]] es nulo mencionando la propiedad adiabática de la frontera?
2. ¿Se justifica explícitamente que [[W_ais]] es nulo mencionando la rigidez de la frontera?
3. ¿El resultado de [[DeltaU]] es cero o se explica por qué podría no serlo en el caso estudiado?
4. ¿El resultado de [[S_ais]] es mayor o igual a cero? Si es negativo, hay un error en el cálculo o en la definición del sistema.
5. ¿Los procesos internos descritos (mezcla, reacción, redistribución) se han tratado como reorganizaciones internas y no como intercambios con el entorno?

Si alguna de estas cinco comprobaciones falla, el análisis tiene al menos un error conceptual o matemático que corregir antes de concluir.
`;export{e as default};
