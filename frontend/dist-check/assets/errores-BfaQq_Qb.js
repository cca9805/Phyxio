const e=`## Errores conceptuales

### Error 1: Creer que el flujo depende de la forma de la superficie gaussiana

**Por qué parece correcto**

El campo eléctrico varía de punto a punto en el espacio. Si la superficie gaussiana cambia de forma, los puntos donde se evalúa el campo son distintos, con valores distintos. El alumno razona que sumar valores diferentes en superficies distintas debe dar resultados distintos. Esta intuición es correcta para el campo local, pero incorrecta para el flujo total.

**Por qué es incorrecto**

La integral de flujo no suma valores del campo sino su proyección sobre el vector normal ponderada por el área. La ley de Gauss garantiza que esta integral solo depende de las fuentes encerradas, no de la superficie. El balance de líneas de campo que entran y salen es exactamente el mismo para cualquier superficie que no cruce cargas, por la naturaleza del campo electrostático como campo conservativo con fuentes discretas.

**Señal de detección**

El alumno calcula flujos distintos para una esfera grande y un cubo pequeño alrededor de la misma carga. Si los valores difieren, el error está en el cálculo, no en el principio.

**Corrección conceptual**

El flujo es una propiedad del conjunto superficie-fuentes, no del campo local. La forma de la superficie gaussiana es una herramienta de cálculo, no un parámetro físico. Cambiar la superficie sin cruzar cargas no cambia [[Phi_E]].

**Mini-ejemplo de contraste**

Aplica la ley de Gauss a una carga de 1 μC con una esfera de radio 1 cm y con un cubo de lado 10 cm. Con la fórmula correcta ambos dan el mismo flujo: 1×10⁻⁶ / 8.85×10⁻¹² ≈ 1.13×10⁵ N·m²·C⁻¹. Si el alumno obtiene valores distintos, ha cometido un error de cálculo que contradice la ley de Gauss.

---

### Error 2: Incluir cargas externas en [[Q_enc]]

**Por qué parece correcto**

Las cargas externas sí generan campo sobre la superficie gaussiana. Si el campo de una carga exterior llega a la superficie, parece razonable incluir esa carga en el balance. El alumno que aplica esta lógica confunde el campo (que se extiende hacia afuera) con el flujo neto (que solo refleja las fuentes interiores).

**Por qué es incorrecto**

Las líneas de campo de una carga exterior atraviesan la superficie en dos puntos: entran por un lado y salen por el otro. Su contribución al flujo neto es exactamente cero. Solo las cargas interiores tienen líneas que nacen o terminan dentro de la superficie, produciendo un flujo neto no nulo.

**Señal de detección**

El alumno suma una carga exterior al calcular [[Q_enc]] y obtiene un flujo que no corresponde a la situación física. Al comparar con la ley de Coulomb para geometría simple, los resultados no coinciden.

**Corrección conceptual**

Solo pertenecen a [[Q_enc]] las cargas cuya posición está estrictamente dentro de la superficie gaussiana. Las cargas en la superficie misma presentan una ambigüedad que se resuelve por convención (habitualmente no se incluyen). Las cargas exteriores no contribuyen al flujo neto bajo ninguna circunstancia.

**Mini-ejemplo de contraste**

Hay dos cargas: una de 2 μC dentro de la superficie y una de 5 μC fuera. Si el alumno calcula [[Q_enc]] como 7 μC, obtiene un flujo de 7.9×10⁵ N·m²·C⁻¹. El valor correcto, con solo la carga interior, es 2.26×10⁵ N·m²·C⁻¹. La diferencia es de un factor 3.5, un error grave que no puede atribuirse a imprecisión numérica.

## Errores de modelo

### Error 1: Usar la ley de Gauss para calcular el campo cuando no hay simetría

**Por qué parece correcto**

La ley de Gauss es siempre válida, lo que lleva al alumno a pensar que siempre puede usarse para calcular el campo directamente. Después de aprender a obtener [[E_G]] con simetría esférica, generaliza el procedimiento a cualquier geometría.

**Por qué es incorrecto**

La ley de Gauss relaciona el flujo integral con la carga encerrada, pero no especifica cómo se distribuye el campo sobre la superficie. Sin simetría, el campo varía en módulo y dirección sobre la superficie y no puede extraerse de la integral. El resultado sería una ecuación con dos incógnitas: el flujo y la distribución del campo.

**Señal de detección**

El alumno intenta aplicar la ley de Gauss a una carga descentrada dentro de una esfera o a una distribución de carga asimétrica y obtiene un valor de campo como si fuera uniforme. Al comparar con la ley de Coulomb, los valores no coinciden.

**Corrección conceptual**

Para calcular el campo con la ley de Gauss, la geometría debe garantizar que el campo es perpendicular y de módulo constante sobre la superficie elegida. Sin esa condición, la ley de Gauss da el flujo total pero no el campo local.

**Mini-ejemplo de contraste**

Una carga puntual situada fuera del centro de una esfera gaussian: el flujo total a través de la esfera sigue siendo la carga dividida entre [[epsilon_0]], pero el campo varía enormemente de un punto a otro de la esfera, siendo mucho mayor en el polo más cercano a la carga. Calcular un "campo medio" dividiendo el flujo entre el área da un valor sin significado físico para ningún punto concreto.

## Errores matemáticos

### Error 1: No considerar solo el área activa de la superficie gaussiana

**Por qué parece correcto**

Al aplicar la fórmula que divide el flujo entre el área para obtener [[E_G]], el alumno usa el área total de la superficie gaussiana, incluyendo las partes donde el campo es paralelo a la superficie (contribución nula al flujo). Para un cilindro, esto significa incluir las tapas aunque el campo sea tangencial en ellas.

**Por qué es incorrecto**

Solo la parte de la superficie donde el campo es perpendicular contribuye al flujo. Si el campo es paralelo a una porción de la superficie, el producto escalar del campo con el vector normal es cero y esa porción no aporta al flujo. Incluir esa área en el denominador da un valor de [[E_G]] incorrecto, sistemáticamente más pequeño que el real.

**Señal de detección**

Para un conductor cilíndrico cargado, el alumno calcula un campo usando el área total del cilindro (lateral más tapas) en lugar de solo el área lateral. El resultado está por debajo del valor correcto por el factor que representa las tapas respecto al total.

**Corrección conceptual**

Al diseñar la superficie gaussiana, elegir intencionalmente que las partes donde el campo no es perpendicular no sean parte del cálculo del área activa [[A_G]]. Solo el área donde el campo es perpendicular entra en el denominador de la expresión del campo.

**Mini-ejemplo de contraste**

Un cable largo con densidad lineal de carga: la superficie gaussiana cilíndrica de longitud L tiene área lateral de 2πrL y dos tapas de área πr² cada una. Como el campo es radial y perpendicular solo a la superficie lateral, usar el área total da un [[E_G]] incorrecto. Usar solo 2πrL da el resultado correcto que coincide con el de la ley de Coulomb integrada.

## Errores de interpretación

### Error 1: Confundir flujo nulo con campo nulo

**Por qué parece correcto**

Cuando la ley de Gauss da flujo nulo, el alumno concluye que no hay campo eléctrico en la región. Si no hay flujo, parece que no hay campo. Esta confusión mezcla el concepto de flujo global con el de campo local.

**Por qué es incorrecto**

El flujo nulo solo indica que [[Q_enc]] es nula: las contribuciones positivas y negativas del campo al flujo se cancelan. El campo puede ser distinto de cero en cada punto de la superficie, siempre que las contribuciones de entrada y de salida se equilibren. Un ejemplo claro: un dipolo eléctrico dentro de la superficie produce flujo nulo porque [[Q_enc]] es cero, pero el campo es intenso cerca de las cargas.

**Señal de detección**

El alumno afirma que no hay campo en la superficie gaussiana porque el flujo es cero. Al calcular el campo con la ley de Coulomb para las mismas cargas, obtiene valores no nulos en los puntos de la superficie.

**Corrección conceptual**

Flujo nulo implica [[Q_enc]] nula, no campo nulo. El campo en la superficie depende de todas las cargas —interiores y exteriores—. Solo el flujo neto, que integra la contribución del campo sobre toda la superficie, es cero cuando [[Q_enc]] es cero.

**Mini-ejemplo de contraste**

Dos cargas iguales y opuestas, una de 1 μC y otra de −1 μC, encerradas en la misma superficie gaussiana. La ley de Gauss da flujo nulo. Pero si evaluamos el campo en el punto más cercano a la carga positiva, obtenemos un valor del orden de 10⁴ N/C o más dependiendo de la distancia. Campo intenso, flujo neto nulo.

## Regla de autocontrol rápido

Antes de dar el resultado de un problema con la ley de Gauss, verificar tres cosas:

1. **Solo cargas interiores**: confirmar que [[Q_enc]] incluye únicamente las cargas dentro de la superficie gaussiana, con sus signos correctos.
2. **Simetría activa**: verificar que la geometría elegida garantiza campo uniforme y perpendicular sobre la superficie activa. Si no hay simetría, la ley de Gauss da el flujo pero no el campo.
3. **Coherencia de signos**: el signo de [[Phi_E]] debe coincidir con el signo de [[Q_enc]]. Flujo positivo con carga negativa es imposible; si ocurre, hay un error de signo en las cargas o en la orientación del vector normal.
`;export{e as default};
