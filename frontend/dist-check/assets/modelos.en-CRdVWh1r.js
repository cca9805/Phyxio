const e=`# Models for Extensive Variables

## Ideal model

The ideal model treats extensive variables as additive quantities. If a system is divided into compatible parts, total [[X_ext]] is the sum of the parts. If equal copies are joined, the total scales with [[lambda_escala]]. This works very well for macroscopic systems where boundary effects are small.

In this reading, [[m]], [[V]], [[U]], and [[S]] are inventories. Density [[rho]] and the specific magnitude [[x_esp]] are normalized properties calculated from inventories, but they do not behave as inventories.

## Hypotheses

- The parts being added are the same kind of magnitude.
- Energy or entropy references are compatible.
- The intensive state does not change during the scaling test.
- Surface effects, long-range interactions, or non-ideal mixing are small.
- The sample is macroscopic enough for thermodynamic averages.

## Quantitative validity domain

As an operational rule, the additive model is adequate when boundary corrections are < 1% of the total value. In ordinary laboratory samples this is usually true for [[m]], [[V]], and [[U]]. In small systems, a surface energy comparable to 5% or 10% of total energy already requires correcting ideal extensivity.

To compare samples, a mass difference by factor 2 should produce factor 2 in an extensive if the state is equivalent. If the ratio changes strongly, one is probably comparing a normalized property or a non-equivalent system.

## Model failure signals

A failure signal is that when two parts are joined, the measured total does not match the sum within uncertainty. Another is that mixing changes volume appreciably, as in some solutions. It may also fail when long-range interactions are not negligible.

In those cases the ideal sum should not be forced. One should identify whether the difference comes from surface, mixing, reaction, phase change, or a poorly defined reference.

## Extended or alternative model

The extended model keeps the inventory idea but adds excess, surface, or interaction terms. In mixtures, partial molar properties are used. In small systems, surface contributions are added. In large gravitational or electrostatic systems, long-range interactions can create non-additivity.

The transition is appropriate when the relative error of the ideal sum exceeds the desired precision. The extensive balance remains the base, but it is corrected with terms representing omitted physics.

## Operational comparison

The ideal model quickly answers "what happens if I duplicate the sample". The extended model answers "why does the total not exactly match the sum". At secondary levels, additivity is usually enough; at university, references, mixtures, and small scales must be discussed.
`;export{e as default};
