const e=`# Modelos de distribuciones de carga

## Modelo ideal

El modelo ideal de distribución continua trata la carga como una función matemática suave definida sobre una geometría idealizada (hilo, plano o volumen de extensión infinita). Sustituye la naturaleza discreta de los electrones y protones por densidades continuas ([[lambda]], [[sigma]] o [[rho_vol]]) y asume que la geometría tiene la simetría perfecta necesaria para obtener una fórmula cerrada de [[E]].

Este modelo conserva la magnitud física esencial — el campo [[E]] resultante — mientras ignora los efectos de borde, la distribución no uniforme y la naturaleza cuántica de la carga. Su fuerza está en producir resultados analíticos exactos para geometrías canónicas que sirven como referencia o aproximación para objetos reales.

## Hipótesis

- **Extensión infinita**: el hilo o el plano se extienden indefinidamente; los efectos de borde son despreciables porque [[r_dist]] es mucho menor que las dimensiones reales del objeto.
- **Densidad uniforme**: [[lambda]], [[sigma]] o [[rho_vol]] son constantes en todo el dominio; no hay variaciones locales de densidad. Violar esta hipótesis requiere integrar el integrando con la función de densidad variable, lo que generalmente elimina la forma cerrada.
- **Medio lineal homogéneo**: el espacio entre la fuente y el punto campo tiene permitividad constante. Si el medio es inhomogéneo, la permitividad entra dentro de la integral.
- **Estática**: la distribución no varía en el tiempo. Si hay variación temporal, la electrostática debe reemplazarse por electrodinámica y los campos eléctrico y magnético se acoplan.
- **Punto campo exterior**: [[r_dist]] es estrictamente mayor que cero; el punto campo no está sobre la distribución fuente. Violar esta condición produce una singularidad no física.

## Dominio de validez cuantitativo

El modelo de hilo infinito es válido cuando [[r_dist]] es mucho menor que la longitud total del hilo. Cuantitativamente, la condición de validez es [[r_dist]] < L/10, donde L es la longitud real del hilo; en ese régimen el error relativo es inferior al 1% respecto al resultado exacto del hilo finito.

El modelo de plano infinito es válido cuando [[r_dist]] < R/5, siendo R la dimensión más pequeña del plano real; en ese régimen el campo calculado con la fórmula del plano infinito difiere menos del 5% del resultado de la integración exacta del disco finito.

En ambos casos, la condición cuantitativa de validez es la desigualdad [[r_dist]] ≪ dimensión característica de la fuente. Cuando esta desigualdad no se cumple, el modelo pierde validez y el error del modelo crece rápidamente.

## Señales de fallo del modelo

- **El campo [[E]] calculado decrece más rápido de lo esperado**: si la curva [[E]] vs [[r_dist]] cae más rápido que la ley teórica (más rápido que 1/r para el hilo, o empieza a caer para el plano), los efectos de borde son ya relevantes.
- **El resultado depende de la orientación**: si [[E]] tiene componentes inesperadas (axiales para el hilo, paralelas para el plano) que no son nulas, la simetría no es perfecta y el modelo ideal no aplica.
- **El orden de magnitud es inconsistente con [[lambda]] o [[sigma]] dados**: un error de factor mayor de dos respecto a una estimación de orden de magnitud indica que la geometría real difiere sustancialmente de la ideal.

## Modelo extendido o alternativo

El modelo extendido para distribuciones reales requiere **integrar [[dE]] directamente** sobre la geometría finita, sin asumir extensión infinita. Para el hilo de longitud finita \`L\`, el campo en un punto sobre el plano mediador a distancia [[r_dist]] se obtiene integrando la componente perpendicular de [[dE]] desde un extremo al otro.

Para distribuciones no uniformes (densidad variable en el espacio), el integrando lleva la función de densidad como factor adicional y la integral raramente tiene forma cerrada. En esos casos, los métodos numéricos — elementos finitos, elementos de contorno, diferencias finitas — son la única alternativa.

Cuando conviene pasar al modelo extendido: cuando [[r_dist]] es mayor que un décimo de la dimensión característica de la fuente, o cuando la distribución no es uniforme y los gradientes de densidad son observables. Cambiar a la integración numérica directa cuando la geometría tiene menos de dos ejes de simetría y no admite reducción analítica del integrando.

## Comparación operativa

| Criterio | Modelo ideal (extensión infinita) | Modelo extendido (geometría finita) |
|---|---|---|
| Forma del resultado | Fórmula cerrada | Integral numérica o analítica compleja |
| Validez espacial | [[r_dist]] ≪ dimensión de la fuente | Todo el espacio exterior a la fuente |
| Complejidad | Mínima (una expresión) | Alta (parametrización + integración) |
| Precisión para [[r_dist]] pequeño | Alta (error menor del 1%) | Alta (exacta) |
| Precisión para [[r_dist]] grande | Baja (sobreestima E) | Alta (exacta) |
| Uso típico | Estimaciones rápidas, condensadores, cables largos | Diseño de sensores, cálculo de bordes, distribuciones irregulares |
`;export{e as default};
