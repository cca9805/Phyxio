# Exam-type example

## Problem statement

A regular classical system is presented in the language of Poisson Brackets. Decide whether the advanced formalism can be used, identify the dominant quantity [[PB]], and state what physical structure is being tested. The relevant magnitudes are [[A]], [[B]], [[PB]], [[qi]], [[pi]], [[H]], [[dA_dt]].

## Data

- The system belongs to one coherent analytical model.
- The variables are smooth and inside the validity domain.
- The requested relations are the defining relation, the structural criterion, and the limiting-case relation of the leaf.
- The answer must include interpretation, not only symbolic manipulation.

## System definition

The system is not defined by a drawing alone. It is defined by the variables that make the advanced criterion meaningful. In this example, the task is to decide whether the formal description preserves, separates, transforms, or linearizes the original mechanics without changing the physical question.

## Physical model

The model uses [[PB]] as the central quantity because it determines the physical reading of the leaf. The formulas are part of the model and must be applied as structural tests:

{{f:definicion_corchete_poisson}}

{{f:evolucion_temporal_poisson}}

{{f:conservacion_por_poisson}}

{{f:corchete_canonico_fundamental}}

## Model justification

The model is valid because the variables are assumed regular, the domain is classical, and the formal object is tied to a physical criterion. It is not valid merely because the notation is available. If the limiting case of a free particle, harmonic oscillator, autonomous Hamiltonian, or stable equilibrium is not recovered, the model must be rejected.

## Symbolic solution

Use the leaf formulas in order. First identify [[PB]], then apply the defining relation, then apply the evolution, transformation, separation, or modal criterion. The symbolic solution means that the structure being tested is physically consistent when the required condition is satisfied. If the condition fails, the formula indicates the failure instead of hiding it.

{{f:definicion_corchete_poisson}}

{{f:evolucion_temporal_poisson}}

{{f:conservacion_por_poisson}}

{{f:corchete_canonico_fundamental}}

## Numerical substitution

Choose a unit-scale estimate for the original system. The displayed formulas should keep [[PB]] on the expected scale. If an exact structural check should be zero or one, a noticeable drift is not rounding; it indicates a broken assumption. If a frequency, action, or transformed Hamiltonian changes by more than about ten percent under a small approximation, the model must be reviewed.

## Dimensional validation

Every term must preserve the unit declared for [[PB]] or for its associated quantity. The check is physical: a wrong unit means the formal expression no longer represents the same model.

## Physical interpretation

The result means that the system is physically consistent with the declared advanced description. It indicates what is preserved, what depends on the model assumptions, and what would fail if those assumptions were removed. Therefore the answer is not only numerical; it is a statement about the mechanical structure.

# Real-world example

## Context

A teacher compares two solutions of the same advanced mechanics problem. One solution is shorter; the other explicitly checks the structure of Poisson Brackets. The second solution is preferred because it proves that the simplification did not change the physical system.

## Physical estimation

The estimate uses the original energy, action, frequency, or phase-space scale. The order of magnitude must remain reasonable after applying the advanced relation. A scale error reveals either a wrong variable, a broken approximation, or an inadmissible transformation.

## Interpretation

Physically, the example shows that advanced mechanics is a diagnostic language. It helps decide whether a result is valid, preserved, equivalent, separable, or coherent. That is why [[PB]] must be interpreted, not merely calculated.

In exam grading, the teacher should look for three signs: the student identifies the observable being tested, uses the Hamiltonian as the generator of flow, and interprets a zero or nonzero bracket as a physical statement. Without the third sign, the solution is only algebra. With it, the example shows real command of phase-space language.

## Teacher check

A complete answer must contain a sentence about validity, a sentence about the dominant quantity, and a sentence about the limiting case. This prevents the example from becoming a formal substitution exercise. The expected student product is a physically argued decision: the advanced method is allowed, conditionally allowed, or rejected because the model assumptions have failed.

To complete the example, require a final verbal check: which observable is being tested, which flow attempts to modify it, and what conclusion the bracket sign allows. This prevents students from confusing an algebraic identity with physical conservation. It also compares two solutions: the best one is not the shortest, but the one that justifies why the observable preserves information under the declared Hamiltonian.


## Teaching extension of the example

The example can also be extended by asking students to compare two different observables. One may have a zero bracket with the Hamiltonian and the other may not. This comparison separates real conservation from a merely small instantaneous value. If both observables are evaluated at the same initial state, students see that the criterion does not depend on a snapshot of the system, but on how Hamiltonian flow will modify it. The extension turns calculation into a decision: which quantity deserves tracking, which can be eliminated, and which warns of relevant dynamical interaction.
