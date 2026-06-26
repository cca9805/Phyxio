# Models and validity

## Ideal model

The ideal energy model in SHM represents a simple harmonic oscillator without dominant dissipation and without relevant net external work during the observation window. In that framework, energetic dynamics are not described as continuous loss, but as an ordered exchange between [[K]] and [[U]] while total scale [[E]] remains stable. This turns the problem into a balance-reading task rather than a trajectory-only exercise.

Its main strength is interpretive clarity. [[K]] captures instantaneous motion, [[U]] captures elastic storage, and [[E]] defines the system-wide energetic ceiling in the ideal case. With this structure, one can decide whether measured data are compatible with conservation or whether evidence already supports transition to a dissipative model.

## Hypotheses

1. Ideal system without dominant friction or net external work.
2. Linear spring and well-defined effective mass.
3. [[x]] and [[v]] remain inside the range where linear approximation holds.
4. Parameters [[m]], [[k]], and [[A]] remain stable during observation.
5. Temporal resolution is sufficient to reconstruct exchange between [[K]] and [[U]].

Without these assumptions, conservation reading becomes fragile.

## Quantitative validity domain

Operational criteria:

- relative drift of [[E]] < 5% over at least 5 cycles;
- relative reconstruction error between [[K]]+[[U]] and [[E]] < 8%;
- amplitude [[A]] inside the linear spring range, for example < 10% of useful mechanical travel;
- relative variation of [[k]] and [[m]] < 5% in the analyzed sequence;
- instrumental noise on derived energetic quantities < 10%.

These thresholds are not universal constants, but they provide a practical minimum contract for accepting the ideal energetic model as explanatory.

## Model failure signals

1. [[E]] decreases or increases systematically with time.
2. [[K]] and [[U]] fail to exchange dominance in expected cycle regions.
3. Reconstructed [[E]] from [[A]] and [[k]] repeatedly contradicts instantaneous balance.
4. Small changes in time window produce large changes in energetic interpretation.
5. Time traces suggest damping or external excitation not included in the model.

These are observable failure signals and require physical reassessment, not merely arithmetic repair.

## Extended or alternative model

If total energy stops remaining stable, the natural alternative is a damped oscillator model. If external energetic input exists, a forced model becomes more appropriate. If elastic response is no longer linear, one should move to a nonlinear description where [[U]] is no longer simply quadratic in displacement.

The transition criterion is physical and explicit: once pure exchange between [[K]] and [[U]] no longer explains the data within bounded error, the ideal model should no longer support interpretation decisions.

## Operational comparison

Ideal energetic model:
- explains exchange between [[K]] and [[U]] with strong conceptual clarity;
- enables straightforward conservation checks through simple balances;
- fits classroom use, basic labs, and first-pass diagnosis.

Extended model:
- required under relevant damping, forcing, or nonlinearity;
- needs more parameters and cleaner experimental control;
- provides higher fidelity once real behavior departs from ideality.

Explicit transition rule: when to switch models is when relative drift of [[E]] stays above 5% or when error between [[K]]+[[U]] and [[E]] stays above 8% across multiple cycles. At that point, keeping the ideal model hides important physics and weakens design or laboratory conclusions.
