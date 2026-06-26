const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A regular classical system is presented in the language of Canonical Transformations. Decide whether the advanced formalism can be used, identify the dominant quantity [[C]], and state what physical structure is being tested. The relevant magnitudes are [[q]], [[p]], [[Q]], [[P]], [[K]], [[Fgen]], [[C]].\r
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
The model uses [[C]] as the central quantity because it determines the physical reading of the leaf. The formulas are part of the model and must be applied as structural tests:\r
\r
{{f:relacion_generatriz_tipo2}}\r
\r
{{f:coordenada_nueva_generatriz}}\r
\r
{{f:hamiltoniano_transformado}}\r
\r
{{f:condicion_canonica_poisson}}\r
\r
## Model justification\r
\r
The model is valid because the variables are assumed regular, the domain is classical, and the formal object is tied to a physical criterion. It is not valid merely because the notation is available. If the limiting case of a free particle, harmonic oscillator, autonomous Hamiltonian, or stable equilibrium is not recovered, the model must be rejected.\r
\r
## Symbolic solution\r
\r
Use the leaf formulas in order. First identify [[C]], then apply the defining relation, then apply the evolution, transformation, separation, or modal criterion. The symbolic solution means that the structure being tested is physically consistent when the required condition is satisfied. If the condition fails, the formula indicates the failure instead of hiding it.\r
\r
{{f:relacion_generatriz_tipo2}}\r
\r
{{f:coordenada_nueva_generatriz}}\r
\r
{{f:hamiltoniano_transformado}}\r
\r
{{f:condicion_canonica_poisson}}\r
\r
## Numerical substitution\r
\r
Choose a unit-scale estimate for the original system. The displayed formulas should keep [[C]] on the expected scale. If an exact structural check should be zero or one, a noticeable drift is not rounding; it indicates a broken assumption. If a frequency, action, or transformed Hamiltonian changes by more than about ten percent under a small approximation, the model must be reviewed.\r
\r
## Dimensional validation\r
\r
Every term must preserve the unit declared for [[C]] or for its associated quantity. The check is physical: a wrong unit means the formal expression no longer represents the same model.\r
\r
## Physical interpretation\r
\r
The result means that the system is physically consistent with the declared advanced description. It indicates what is preserved, what depends on the model assumptions, and what would fail if those assumptions were removed. Therefore the answer is not only numerical; it is a statement about the mechanical structure.\r
\r
# Real-world example\r
\r
## Context\r
\r
A teacher compares two solutions of the same advanced mechanics problem. One solution is shorter; the other explicitly checks the structure of Canonical Transformations. The second solution is preferred because it proves that the simplification did not change the physical system.\r
\r
## Physical estimation\r
\r
The estimate uses the original energy, action, frequency, or phase-space scale. The order of magnitude must remain reasonable after applying the advanced relation. A scale error reveals either a wrong variable, a broken approximation, or an inadmissible transformation.\r
\r
## Interpretation\r
\r
Physically, the example shows that advanced mechanics is a diagnostic language. It helps decide whether a result is valid, preserved, equivalent, separable, or coherent. That is why [[C]] must be interpreted, not merely calculated.\r
\r
In exam grading, the teacher should look for three signs: the student does not confuse notational change with canonical transformation, obtains new variables from the generator, and checks the preservation condition. If the Hamiltonian changes because of time dependence, that correction must be interpreted as part of the model, not as an error.\r
\r
## Teacher check\r
\r
A complete answer must contain a sentence about validity, a sentence about the dominant quantity, and a sentence about the limiting case. This prevents the example from becoming a formal substitution exercise. The expected student product is a physically argued decision: the advanced method is allowed, conditionally allowed, or rejected because the model assumptions have failed.\r
\r
To complete the example, require a final verbal check: which variables are abandoned, which variables are introduced, and which condition proves that the flow keeps Hamiltonian form. This prevents students from treating any substitution as canonical. It also compares two solutions: the best one preserves reconstruction and interprets the transformed Hamiltonian.\r
\r
\r
## Teaching extension of the example\r
\r
The example can also be extended by asking students to propose a noncanonical change similar to the correct one. Comparing them shows that two substitutions may simplify an expression, while only one preserves the form of the equations. This comparison is effective in advanced teaching because it shows that the canonical criterion is not bureaucratic. It is the boundary between describing the same system with better variables and accidentally constructing another system. The extension requires reversibility, generator, brackets, and meaning of the transformed Hamiltonian.\r
`;export{e as default};
