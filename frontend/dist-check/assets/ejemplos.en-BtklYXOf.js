const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A regular classical system is presented in the language of Small Oscillations and Normal Modes. Decide whether the advanced formalism can be used, identify the dominant quantity [[omega]], and state what physical structure is being tested. The relevant magnitudes are [[eta]], [[M]], [[K]], [[omega]], [[A]], [[phi]], [[t]].\r
\r
## Data\r
\r
- The system belongs to one coherent analytical model.\r
- The variables are smooth and inside the validity domain.\r
- The requested relations are the defining relation, the structural criterion, and the limiting-case relation of the leaf.\r
- The answer must include interpretation, not only symbolic manipulation.\r
\r
## System definition\r
\r
The system is not defined by a drawing alone. It is defined by the variables that make the advanced criterion meaningful. In this example, the task is to decide whether the formal description preserves, separates, transforms, or linearizes the original mechanics without changing the physical question.\r
\r
## Physical model\r
\r
The model uses [[omega]] as the central quantity because it determines the physical reading of the leaf. The formulas are part of the model and must be applied as structural tests:\r
\r
{{f:ecuacion_linealizada}}\r
\r
{{f:problema_autovalores_modal}}\r
\r
{{f:solucion_superposicion_modal}}\r
\r
{{f:ortogonalidad_modal}}\r
\r
## Model justification\r
\r
The model is valid because the variables are assumed regular, the domain is classical, and the formal object is tied to a physical criterion. It is not valid merely because the notation is available. If the limiting case of a free particle, harmonic oscillator, autonomous Hamiltonian, or stable equilibrium is not recovered, the model must be rejected.\r
\r
## Symbolic solution\r
\r
Use the leaf formulas in order. First identify [[omega]], then apply the defining relation, then apply the evolution, transformation, separation, or modal criterion. The symbolic solution means that the structure being tested is physically consistent when the required condition is satisfied. If the condition fails, the formula indicates the failure instead of hiding it.\r
\r
{{f:ecuacion_linealizada}}\r
\r
{{f:problema_autovalores_modal}}\r
\r
{{f:solucion_superposicion_modal}}\r
\r
{{f:ortogonalidad_modal}}\r
\r
## Numerical substitution\r
\r
Choose a unit-scale estimate for the original system. The displayed formulas should keep [[omega]] on the expected scale. If an exact structural check should be zero or one, a noticeable drift is not rounding; it indicates a broken assumption. If a frequency, action, or transformed Hamiltonian changes by more than about ten percent under a small approximation, the model must be reviewed.\r
\r
## Dimensional validation\r
\r
Every term must preserve the unit declared for [[omega]] or for its associated quantity. The check is physical: a wrong unit means the formal expression no longer represents the same model.\r
\r
## Physical interpretation\r
\r
The result means that the system is physically consistent with the declared advanced description. It indicates what is preserved, what depends on the model assumptions, and what would fail if those assumptions were removed. Therefore the answer is not only numerical; it is a statement about the mechanical structure.\r
\r
# Real-world example\r
\r
## Context\r
\r
A teacher compares two solutions of the same advanced mechanics problem. One solution is shorter; the other explicitly checks the structure of Small Oscillations and Normal Modes. The second solution is preferred because it proves that the simplification did not change the physical system.\r
\r
## Physical estimation\r
\r
The estimate uses the original energy, action, frequency, or phase-space scale. The order of magnitude must remain reasonable after applying the advanced relation. A scale error reveals either a wrong variable, a broken approximation, or an inadmissible transformation.\r
\r
## Interpretation\r
\r
Physically, the example shows that advanced mechanics is a diagnostic language. It helps decide whether a result is valid, preserved, equivalent, separable, or coherent. That is why [[omega]] must be interpreted, not merely calculated.\r
\r
In exam grading, the teacher should look for three signs: the student justifies linearization around equilibrium, distinguishes frequency from modal shape, and explains amplitude as participation of a mode. If only eigenvalues are computed, the mechanical reading of collective vibration is missing.\r
\r
## Teacher check\r
\r
A complete answer must contain a sentence about validity, a sentence about the dominant quantity, and a sentence about the limiting case. This prevents the example from becoming a formal substitution exercise. The expected student product is a physically argued decision: the advanced method is allowed, conditionally allowed, or rejected because the model assumptions have failed.\r
\r
To complete the example, require a final verbal check: where equilibrium is, which scale permits linearization, and which modal shape accompanies each frequency. This prevents students from reducing the problem to eigenvalues. It also interprets whether a real excitation activates a dangerous, irrelevant, or dominant mode.\r
\r
\r
## Teaching extension of the example\r
\r
The example can also be extended by exciting the system with two different initial conditions. One may activate almost a single mode and another may mix several. This comparison shows that eigenvalues are not the end of the problem: amplitudes, modal shapes, and distributed energy must be read. The extension connects matrix calculation with direct physical observation. Students learn why one mode dominates, why another barely appears, and when superposition ceases to be a reliable description.\r
`;export{e as default};
