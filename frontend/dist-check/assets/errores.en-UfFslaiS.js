const e=`# Common mistakes in gravitational potential energy\r
\r
## Conceptual errors\r
\r
### Error 1: treating [[U]] as always positive\r
Por que parece correcto: students often learn energy as a nonnegative scalar without reference discussion.\r
Senal de deteccion: [[U]] appears positive in a bound state while infinity reference is implied.\r
Mini-ejemplo de contraste: under infinity reference, low orbit configurations require negative [[U]].\r
Correccion conceptual: declare the reference first and keep it consistent across all steps.\r
\r
## Model errors\r
\r
### Error 2: using local approximation outside its domain\r
Por que parece correcto: local form looks shorter and familiar from introductory classes.\r
Senal de deteccion: [[h]] and [[g]] are used for radial changes comparable to planetary radius.\r
Mini-ejemplo de contraste: if h/r is not small, local approximation distorts [[DeltaU]] significantly.\r
Correccion conceptual: switch to the full radial model using [[ri]] and [[rf]].\r
\r
## Mathematical errors\r
\r
### Error 3: swapping initial and final states in [[DeltaU]]\r
Por que parece correcto: substitution is done before physically mapping process direction.\r
Senal de deteccion: computed sign contradicts outward or inward motion narrative.\r
Mini-ejemplo de contraste: outward transfer should yield positive [[DeltaU]] in standard reference.\r
Correccion conceptual: write state logic first, then substitute values.\r
\r
### Error 4: missing the sign link between [[Wg]] and [[DeltaU]]\r
Por que parece correcto: mixed sign conventions from force and energy chapters.\r
Senal de deteccion: [[Wg]] and [[DeltaU]] are reported with the same sign in conservative motion.\r
Mini-ejemplo de contraste: gravitational work must oppose potential-energy change in this regime.\r
Correccion conceptual: enforce a conservation cross-check before final answer.\r
\r
## Interpretation errors\r
\r
### Error 5: finishing with numbers but no physical reading\r
Por que parece correcto: algebraic sequence seems complete and clean.\r
Senal de deteccion: no statement about what signs imply for motion or binding.\r
Mini-ejemplo de contraste: similar numeric magnitudes may represent opposite physical scenarios.\r
Correccion conceptual: close with one sentence on state, transfer direction, and dynamical consequence.\r
\r
## Quick self-control rule\r
\r
Define [[ri]] and [[rf]] before any arithmetic. If the process is conservative, verify opposite signs between [[Wg]] and [[DeltaU]]. If the scale is not local, avoid relying on [[h]] and [[g]] as the main model. If the final line does not interpret [[E]] or transfer meaning, the solution is still incomplete.`;export{e as default};
