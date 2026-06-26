const e=`# Exam-type example

## Problem statement

An interferometer uses a filtered source whose coherence time is 2.0×10⁻¹² s. The two arms of the setup have an optical path difference of 0.30 mm. The detector measures a maximum intensity of 9.0 arbitrary units and a minimum intensity of 3.0 arbitrary units.

The task is to estimate coherence length, decide whether the path mismatch allows visible fringes, and calculate the experimental visibility of the pattern. Air is treated as vacuum in a first approximation.

## Data

- Coherence time: 2.0×10⁻¹² s.
- Propagation speed used: 3.00×10⁸ m/s.
- Optical path difference: 0.30 mm, equivalent to 3.0×10⁻⁴ m.
- Maximum intensity: 9.0 arbitrary units.
- Minimum intensity: 3.0 arbitrary units.

## System definition

The system is an interferometric setup with two paths recombined on a detector. The source provides [[tau_c]], which is converted into [[L_c]]. The setup provides [[Delta_L]], and the measured pattern gives [[V]] from [[I_max]] and [[I_min]].

The quantity deciding whether temporal interference survives is the comparison between [[Delta_L]] and [[L_c]]. Experimental visibility then indicates whether the observed contrast agrees with that expectation.

## Physical model

The model is temporal coherence in air. The source has finite phase-memory time, the interferometer introduces a path difference, and the detector measures intensity maxima and minima. The model does not include vibrations, variable background light, or limited spatial coherence.

The relative coherence [[C_rel]] is used as a monotonic pedagogical indicator. It does not replace a full correlation function, but it shows whether path difference lies inside or outside the coherence scale.

## Model justification

The model is appropriate because the problem gives [[tau_c]], [[Delta_L]], [[I_max]], and [[I_min]], which are precisely the quantities needed to connect source, setup, and detector. Air also allows [[c]] to be used as approximate propagation speed.

It would stop being sufficient if the source changed spectrum during measurement, if the arms vibrated, if intensities were strongly unbalanced, or if the question required detailed separation of temporal and spatial coherence.

## Symbolic solution

First convert coherence time into coherence length:

{{f:longitud_coherencia}}

Then estimate relative coherence by comparing [[Delta_L]] with [[L_c]]:

{{f:coherencia_relativa}}

Finally calculate experimental visibility from the contrast between [[I_max]] and [[I_min]]:

{{f:visibilidad_franjas}}

Before substitution, [[L_c]] is expected to be on the scale of fractions of a millimetre. If [[Delta_L]] lies below that scale, fringes should survive with appreciable contrast.

## Numerical substitution

For coherence length, multiplying 3.00×10⁸ m/s by 2.0×10⁻¹² s gives 6.0×10⁻⁴ m. Therefore [[L_c]] ≈ 0.60 mm.

For relative coherence, comparing 0.60 mm with a mismatch of 0.30 mm gives an indicator of approximately 0.67. Therefore [[C_rel]] lies in a range where fringes should remain observable.

For visibility, the difference between 9.0 and 3.0 is 6.0, and the sum is 12.0. The normalized quotient gives 0.50. Therefore [[V]] ≈ 0.50.

## Dimensional validation

For coherence length, a speed with dimension \`[L T⁻¹]\` multiplied by a time with dimension \`[T]\` produces a length \`[L]\`, consistent with [[L_c]].

For relative coherence, two lengths are compared, so the result has no unit. For visibility, intensities with the same unit are compared and the quotient is also dimensionless.

## Physical interpretation

The result indicates that the path difference is smaller than coherence length. The source still preserves enough phase memory for the two contributions to recombine with a stable relation during measurement. A completely washed-out pattern is therefore not expected.

The visibility of 0.50, however, is not ideal. This may mean partial coherence, but it may also reflect unequal intensities, background light, or imperfect alignment. The correct reading is not that light is missing, but that maxima and minima are not as separated as in ideal interference.

If [[Delta_L]] increased to several millimetres with the same source, [[C_rel]] would fall and the pattern would lose contrast. If a source with larger [[tau_c]] were used, [[L_c]] would increase and the same interferometer could tolerate more unequal arms.

# Real-world example

## Context

In optical coherence tomography, interference with a short-coherence source is used to select a specific depth inside tissue. Unlike a long-arm interferometer, the goal is not maximum coherence across all paths, but a limited coincidence window.

The source is chosen so that [[L_c]] is small enough to distinguish nearby layers, but not so small that the detector loses all useful signal.

## Physical estimation

If a source has [[L_c]] of order 10 micrometres, only paths matching within that scale contribute strong interference. A path difference of 100 micrometres is one order of magnitude larger and strongly reduces relative coherence.

The quantitative estimate shows that lack of long coherence is not always a defect. In this context, limited coherence helps locate the depth from which the signal comes.

## Interpretation

The same concept that washes out fringes in a school laboratory becomes an axial-resolution tool here. Coherence acts as a selection rule: only waves returning with optical path close to the reference interfere visibly.

It is therefore not enough to say that a laser is better because it is more coherent. For this application, an overly coherent source would mix reflections from many depths. The design seeks coherence matched to the measurement goal.
`;export{e as default};
