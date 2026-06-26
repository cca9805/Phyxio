const e=`## Errores conceptuales\r
\r
Los siguientes errores aparecen cuando se interpreta mal el alcance de la segunda ley, la frontera sistema-entorno o el significado físico de la entropía generada.\r
\r
### Error 1: Aplicar la segunda ley al sistema solo\r
\r
**Por qué parece correcto**\r
\r
El enunciado popular de la segunda ley dice «la entropía siempre aumenta», y el alumno interpreta «entropía» como la del sistema que está estudiando. Si calcula [[DeltaS_sis]] < 0, concluye que el proceso es imposible.\r
\r
**Por qué es incorrecto**\r
\r
La segunda ley se aplica al **universo** (sistema + entorno), no al sistema aisladamente. [[DeltaS_univ]] = [[DeltaS_sis]] + [[DeltaS_ent]] ≥ 0 es la formulación correcta. El sistema puede perder entropía (enfriarse, comprimirse, ordenarse) siempre que el entorno gane al menos esa misma cantidad. Un refrigerador funciona exactamente así: el interior pierde entropía pero el motor genera suficiente en el entorno.\r
\r
**Señal de detección**\r
\r
El alumno descarta como «imposible» un proceso con [[DeltaS_sis]] < 0 sin calcular [[DeltaS_ent]], o afirma que «la entropía del sistema siempre crece».\r
\r
**Corrección conceptual**\r
\r
La regla correcta es [[DeltaS_univ]] ≥ 0. Para verificar si un proceso es posible: (1) calcular [[DeltaS_sis]] como función de estado, (2) calcular [[DeltaS_ent]], (3) sumar. Solo si la suma es negativa el proceso es imposible.\r
\r
**Mini-ejemplo de contraste**\r
\r
Condensación de vapor a 373 K: [[DeltaS_sis]] = −109 J/(mol·K) (sistema se ordena). [[DeltaS_ent]] = +109 J/(mol·K) (entorno absorbe calor latente). [[DeltaS_univ]] = 0 (proceso reversible en el límite). No es imposible: ocurre constantemente en la naturaleza.\r
\r
### Error 2: Usar Q_rev del sistema para calcular DeltaS del entorno\r
\r
**Por qué parece correcto**\r
\r
El alumno ha aprendido que [[DeltaS_sis]] = Q_rev/T y generaliza: «para el entorno también uso Q_rev/T». Dado que Q_rev es el calor del camino reversible, parece coherente.\r
\r
**Por qué es incorrecto**\r
\r
[[DeltaS_sis]] se calcula con Q_rev porque es función de estado (necesitamos un camino reversible para evaluarla). Pero [[DeltaS_ent]] se calcula con el calor **real** [[Q_sis]] porque el entorno, al ser un reservorio en equilibrio, procesa cualquier calor de forma internamente reversible. Para el reservorio, Q_real y Q_rev coinciden. El error surge cuando se usa el Q_rev del sistema (que es diferente del Q real en un proceso irreversible) para calcular la entropía del entorno.\r
\r
**Señal de detección**\r
\r
El alumno obtiene [[DeltaS_univ]] = 0 para un proceso claramente irreversible (transferencia de calor a ΔT finito, expansión libre). Esto ocurre porque usar Q_rev para ambos cancela la irreversibilidad.\r
\r
**Corrección conceptual**\r
\r
Para el entorno: [[DeltaS_ent]] = −Q_sis_real / [[T_ent]]. Para el sistema: [[DeltaS_sis]] se calcula por un camino reversible (puede usar Q_rev). La asimetría es fundamental y es la clave del cálculo correcto.\r
\r
**Mini-ejemplo de contraste**\r
\r
Gas ideal se expande irreversiblemente contra presión externa constante (menor que P_interna). Q_real ≠ Q_rev. Si se usa Q_rev para el entorno: [[DeltaS_univ]] = 0 (falso). Si se usa Q_real: [[DeltaS_univ]] > 0 (correcto, el proceso es irreversible).\r
\r
### Error 3: Creer que la irreversibilidad requiere transferencia de calor\r
\r
**Por qué parece correcto**\r
\r
Muchos ejemplos de irreversibilidad involucran calor (conducción entre cuerpos a distinta T), y la fórmula más conocida de [[S_gen]] incluye Q. El alumno generaliza: «sin calor, no hay irreversibilidad».\r
\r
**Por qué es incorrecto**\r
\r
La expansión libre de un gas ideal es irreversible sin intercambio de calor ni trabajo. El gas pasa de un estado (V_i, T) a otro (V_f, T) espontáneamente, y [[DeltaS_univ]] = nR·ln(V_f/V_i) > 0. La irreversibilidad proviene de la transición espontánea a un macroestado con más microestados accesibles, no del flujo de calor.\r
\r
**Señal de detección**\r
\r
El alumno afirma que la expansión libre no cambia la entropía del universo porque no hay calor real intercambiado, confundiendo el proceso real con el camino de cálculo de [[DeltaS_sis]].\r
\r
**Corrección conceptual**\r
\r
[[DeltaS_sis]] no se calcula con el calor del proceso real, que puede ser nulo, sino con un camino reversible entre los mismos estados. Para la expansión libre se usa una isoterma reversible equivalente; el sistema gana entropía y, al no haber intercambio real con el entorno, esa ganancia coincide con la del universo.\r
\r
**Mini-ejemplo de contraste**\r
\r
Un mol de gas ideal se expande libremente hasta duplicar su volumen. Aunque el calor real es nulo, la isoterma reversible equivalente da una variación positiva de [[DeltaS_sis]], por lo que [[DeltaS_univ]] también es positiva. Es un proceso irreversible sin transferencia de calor.\r
\r
## Errores de modelo\r
\r
### Error 4: No identificar correctamente qué es «sistema» y qué es «entorno»\r
\r
**Por qué parece correcto**\r
\r
En problemas simples, la frontera sistema/entorno parece obvia (el bloque es el sistema, el agua es el entorno). Pero en problemas con varios cuerpos interactuando, el alumno se confunde sobre qué incluir en cada parte.\r
\r
**Por qué es incorrecto**\r
\r
Si se define mal la frontera, los términos [[DeltaS_sis]] y [[DeltaS_ent]] se calculan incorrectamente. Por ejemplo, si dos bloques se ponen en contacto sin reservorio externo, el «universo» es solo los dos bloques. No hay «entorno» separado, por lo que no tiene sentido aplicar un reservorio con temperatura [[T_ent]].\r
\r
**Señal de detección**\r
\r
El alumno busca una temperatura del «entorno» que no existe en el problema, o suma contribuciones de forma inconsistente (contando el mismo calor dos veces).\r
\r
**Corrección conceptual**\r
\r
El universo termodinámico incluye todo lo que interactúa durante el proceso. Si no hay entorno externo (sistema aislado compuesto), [[DeltaS_univ]] = [[DeltaS_univ]] = suma de variación de entropía de cada parte. No hace falta buscar un «entorno» ficticio.\r
\r
**Mini-ejemplo de contraste**\r
\r
Dos bloques, uno caliente y otro frío, se ponen en contacto aislados del exterior. El universo es el conjunto de ambos bloques. [[DeltaS_univ]] se obtiene sumando la contribución de cada bloque y resulta positiva; no hay [[DeltaS_ent]] separado ni temperatura [[T_ent]] que buscar.\r
\r
### Error 5: Confundir «proceso espontáneo» con «proceso sin intervención externa»\r
\r
**Por qué parece correcto**\r
\r
La palabra «espontáneo» sugiere que el proceso ocurre solo, sin ayuda. El alumno concluye que un proceso que requiere trabajo externo (como comprimir un gas) no puede ser espontáneo.\r
\r
**Por qué es incorrecto**\r
\r
En termodinámica, «espontáneo» significa que [[DeltaS_univ]] > 0: el proceso genera entropía neta en el universo. Un compresor genera irreversibilidad (fricción, gradientes) y [[DeltaS_univ]] > 0 aunque requiera trabajo. Lo «espontáneo» es la generación de entropía asociada a las irreversibilidades, no el proceso global que puede requerir input energético.\r
\r
**Señal de detección**\r
\r
El alumno clasifica como «no espontánea» la compresión de un gas porque «necesita trabajo», aunque el proceso completo (incluyendo motor, combustible y entorno) genera entropía.\r
\r
**Corrección conceptual**\r
\r
«Espontáneo» = [[DeltaS_univ]] > 0 para el universo completo (sistema + máquina + fuente de trabajo + entorno). Un proceso puede requerir trabajo y seguir siendo globalmente irreversible.\r
\r
**Mini-ejemplo de contraste**\r
\r
Compresión de gas con fricción: el gas pierde entropía, pero la fricción genera calor que calienta el entorno. [[DeltaS_univ]] = [[DeltaS_sis]] + [[DeltaS_entorno_por_fricción]] + [[DeltaS_ent]] > 0. Proceso irreversible (espontáneo en el sentido termodinámico global) aunque requiere trabajo.\r
\r
## Errores matemáticos\r
\r
### Error 6: Invertir el signo del calor al calcular DeltaS del entorno\r
\r
**Por qué parece correcto**\r
\r
El alumno sabe que si el sistema absorbe calor Q > 0, el entorno lo pierde. Pero al escribir la fórmula, olvida el signo negativo: escribe [[DeltaS_ent]] = Q/[[T_ent]] en lugar de −Q/[[T_ent]].\r
\r
**Por qué es incorrecto**\r
\r
Si el sistema absorbe [[Q_sis]] > 0, el entorno cede esa misma cantidad. La variación de entropía del entorno es [[DeltaS_ent]] = −[[Q_sis]]/[[T_ent]] < 0. Omitir el signo negativo invierte el resultado y puede dar [[DeltaS_univ]] = [[DeltaS_sis]] + [[Q_sis]]/[[T_ent]] erróneamente grande, enmascarando posibles errores.\r
\r
**Señal de detección**\r
\r
[[DeltaS_univ]] resulta ser la suma de dos cantidades positivas en un proceso donde claramente el entorno debería perder entropía (cede calor al sistema). El resultado es excesivamente positivo.\r
\r
**Corrección conceptual**\r
\r
Regla mnemotécnica: [[DeltaS_ent]] tiene signo opuesto a [[Q_sis]]. Si el sistema absorbe calor ([[Q_sis]] > 0), el entorno pierde entropía ([[DeltaS_ent]] < 0). Si el sistema cede calor ([[Q_sis]] < 0), el entorno gana entropía ([[DeltaS_ent]] > 0).\r
\r
**Mini-ejemplo de contraste**\r
\r
Sistema absorbe 1000 J de un reservorio a 300 K. Correcto: [[DeltaS_ent]] = −1000/300 = −3.33 J/K. Incorrecto: [[DeltaS_ent]] = +1000/300 = +3.33 J/K. La diferencia es de 6.67 J/K en [[DeltaS_univ]], que puede invertir la conclusión sobre la naturaleza del proceso.\r
\r
## Errores de interpretación\r
\r
Estos errores aparecen cuando el cálculo numérico es posible, pero la lectura física del resultado lleva a una conclusión equivocada sobre espontaneidad, frontera del universo o pérdida de exergía.\r
\r
## Regla de autocontrol rápido\r
\r
Antes de dar por bueno un resultado de [[DeltaS_univ]]:\r
\r
1. **Verificar signo de [[DeltaS_univ]]**: debe ser ≥ 0. Si es negativo, hay error seguro.\r
2. **Verificar consistencia de signos**: si el sistema absorbe calor, [[DeltaS_ent]] debe ser negativo (entorno cede). Si el sistema cede calor, [[DeltaS_ent]] debe ser positivo.\r
3. **Verificar que [[DeltaS_sis]] se calculó como función de estado**: no importa que el proceso real sea irreversible; [[DeltaS_sis]] se evalúa siempre por un camino reversible.\r
4. **Verificar que [[DeltaS_ent]] se calculó con Q_real**: no con Q_rev del sistema.\r
5. **Comprobar caso límite**: si ΔT → 0 (proceso casi reversible), [[DeltaS_univ]] debe tender a 0. Si no tiende, hay error en la fórmula.\r
`;export{e as default};
