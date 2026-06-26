# Exam-type example

## Problem statement

A cart moves up a ramp while a motor performs work on the system. Initially it has [[Ki]] = 120 J and [[Ui]] = 40 J. At the end, measurements give [[Uf]] = 170 J and [[Kf]] = 35 J. Determine [[Emi]], [[Emf]], [[Wnc]], and [[dEm]]. Explain whether the non-conservative agent adds or removes mechanical energy.

The problem is not just an arithmetic exercise. It requires comparing states, reading the sign of [[Wnc]], and deciding whether the physical history corresponds to mechanical gain or loss.

## Data

The state contributions are known: [[Ki]] = 120 J, [[Ui]] = 40 J, [[Kf]] = 35 J, and [[Uf]] = 170 J. The central unknown is [[Wnc]], although [[Emi]], [[Emf]], and [[dEm]] are also requested to verify the full closure.

The ramp allows potential energy to change. The motor is the non-conservative agent that may modify total mechanical energy.

## System definition

The system is the cart. Earth is incorporated through the potential-energy terms [[Ui]] and [[Uf]], while the motor remains outside the system and acts through non-conservative work.

With this boundary, a positive [[Wnc]] means the motor has transferred mechanical energy to the cart. A negative result would instead indicate a net removal caused by resistance or braking.

## Physical model

Initial mechanical energy is built through:

{{f:energia_mecanica_inicial_componentes}}

Final mechanical energy is built through:

{{f:energia_mecanica_final_componentes}}

The global energy change is linked to non-conservative work by:

{{f:balance_general_no_conservativo}}

And the signed reading is summarized by:

{{f:variacion_energia_mecanica_no_conservativa}}

## Model justification

The model is appropriate because the problem compares two clearly defined energetic states and isolates one external action: the motor. The instantaneous motor force is not required; only its accumulated effect on the energy balance matters.

Moreover, the initial and final energies refer to the same system and the same potential-energy reference. That coherence allows [[Wnc]] to be interpreted as net non-conservative work without double counting.

## Symbolic solution

First compute the mechanical energies of both states from their components. Then obtain non-conservative work as the state difference:

{{f:trabajo_no_conservativo_por_estados}}

The same conclusion can be written through the general balance:

{{f:balance_general_no_conservativo}}

If the full two-state structure must remain visible, use:

{{f:relacion_completa_entre_estados}}

Finally, identify:

{{f:variacion_energia_mecanica_no_conservativa}}

This sequence matters because it prevents solving for [[Wnc]] before checking whether [[Emi]] and [[Emf]] were built consistently.

## Numerical substitution

Initial mechanical energy comes from combining 120 J and 40 J, so [[Emi]] reaches 160 J. Final mechanical energy comes from 35 J and 170 J, so [[Emf]] reaches 205 J.

Therefore [[Wnc]] is the difference between 205 J and 160 J, namely 45 J. Since [[dEm]] coincides with [[Wnc]], it also takes the value 45 J.

The positive sign indicates that the motor has supplied net mechanical energy to the system.

## Dimensional validation

Every quantity in the balance is measured in joules. [[Ki]], [[Ui]], [[Kf]], [[Uf]], [[Emi]], [[Emf]], [[Wnc]], and [[dEm]] all have energy dimension. The additions and subtractions are dimensionally coherent.

There is also a conceptual check: the cart ends with more mechanical energy than it had initially, so [[Wnc]] cannot be negative.

## Physical interpretation

The result means that the motor not only compensates for the increase in potential energy, but leaves the cart with a larger total mechanical energy than at the start. Even though [[Kf]] is smaller than [[Ki]], the increase in [[Uf]] is large enough for [[Emf]] to exceed [[Emi]].

This shows why the full balance matters. Looking only at speed would suggest a weaker final state, yet the energetic reading shows a net gain produced by external work. [[Wnc]] separates those ideas without contradiction.

# Real-world example

## Context

A lifting mechanism raises a load while also overcoming internal mechanical losses. At the start of the relevant segment, [[Ki]] = 0 J and [[Ui]] = 0 J. At the end, the load has [[Kf]] = 80 J and [[Uf]] = 980 J. The motor has delivered [[Wnc]] = 1200 J to the setup.

We want to test whether the data are coherent and estimate how much mechanical energy does not remain stored in the final state.

## Physical estimation

The complete state balance is:

{{f:relacion_completa_entre_estados}}

Using the stated motor work alone, one would expect the final mechanical package to reach 1200 J if no other non-conservative contribution were present. The observed state, however, combines 80 J and 980 J, so it reaches only 1060 J.

The 140 J difference is an estimate that indicates additional mechanical losses or resistive effects reducing the final balance. In order-of-magnitude terms, that gap is large enough to matter in the reading of the process, not merely a rounding effect.

The same conclusion can be checked through:

{{f:trabajo_no_conservativo_por_estados}}

If the final state stores only 1060 J and the initial state started from 0 J, the net non-conservative work associated with the modeled mechanical balance is [[Wnc]] = 1060 J. Comparing that value with the 1200 J supplied by the motor separates gross motor work from net non-conservative work for the chosen system.

## Interpretation

The estimate shows that a motor-work datum alone does not close the system balance when other losses exist. The state-by-state balance forces the solver to ask which work is included inside [[Wnc]] and which contribution remains outside the current model.

Physically, the goal is not to declare a contradiction, but to clarify the system boundary. If [[Wnc]] denotes net non-conservative work, it must be 1060 J. If it denotes motor work alone, an additional resistive contribution of -140 J must be modeled. That distinction is the central learning outcome of the leaf.
