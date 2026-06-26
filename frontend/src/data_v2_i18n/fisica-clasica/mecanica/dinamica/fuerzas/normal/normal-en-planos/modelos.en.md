# Physical models: Normal Force on Inclined Planes

## Ideal model

This leaf uses a rigid-plane, unilateral-contact model to interpret the normal reaction [[N]]. The object is represented by an effective mass [[m]], gravity is represented by [[g]], plane geometry by [[theta]], optional external perpendicular action by [[Fextn]], and perpendicular dynamics by [[aperp]].

The model objective is not to capture every microscopic effect. Its objective is to provide a reliable causal map for contact-load estimation and model-validity checks in standard mechanics scenarios.

## Hypotheses

Core hypotheses are explicit:

- The plane can be approximated locally as rigid with a well-defined normal direction.
- Contact is unilateral: the surface can push but not pull.
- Axis decomposition is consistent and perpendicular terms are not mixed with tangential ones.
- [[g]] is treated as locally uniform in the operating domain.
- The selected state variables [[m]], [[theta]], [[Fextn]], and [[aperp]] are sufficient to represent perpendicular behavior at the intended fidelity.

If any hypothesis is violated, the computed [[N]] may lose operational meaning.

## Quantitative validity domain

The model is typically defensible when these quantitative conditions are simultaneously satisfied:

- Prediction-versus-measurement mismatch for [[N]] remains below a practical threshold, often around 5 to 10 percent in repeated tests.
- Angle uncertainty for [[theta]] is controlled so that induced variation in [[N]] stays within accepted engineering tolerance.
- Perpendicular acceleration [[aperp]] remains within a regime where linear decomposition and rigid-contact assumptions are still representative.
- Additional perpendicular forcing [[Fextn]] is measured or estimated with uncertainty small enough not to dominate decision margins.
- Contact condition checks remain consistent, with no systematic requirement of negative [[N]] under observed sustained contact.

These conditions are not arbitrary. They define when the simplified model preserves decision quality.

## Model failure signals

Common failure indicators include:

- Repeated negative [[N]] in conditions where physical contact is clearly observed.
- Persistent residual patterns between measured and predicted [[N]] that cannot be explained by sensor noise.
- Strong sensitivity to small parameter changes inconsistent with physical observations.
- Evidence of local surface compliance, stick-slip transitions, or geometry variation outside rigid-plane assumptions.

When these indicators appear, continuing with the same model without qualification is unsafe.

## Extended or alternative model

Possible escalations include:

- Contact-compliance models where the surface normal direction and force relation evolve with deformation.
- Coupled multiaxis dynamic models when perpendicular and tangential dynamics interact strongly.
- Calibrated empirical correction layers for known systematic effects in a bounded operating region.
- Hybrid simulation approaches combining rigid-body dynamics with experimentally identified contact parameters.

Explicit transition rule: if error metrics exceed the agreed threshold over repeated tests, or if contact-condition checks fail systematically, switch from the ideal model to one of the extended classes and recalibrate parameters before making final decisions.

## Operational comparison

| Aspect | Ideal model | Extended model |
|--------|-------------|----------------|
| Main use | Fast interpretation and design screening | Final validation and off-nominal analysis |
| Parameters | [[m]], [[g]], [[theta]], [[Fextn]], [[aperp]] | State-dependent and calibrated parameters |
| Computation cost | Low | Medium to high |
| Traceability | High and direct | High with careful calibration bookkeeping |
| Required data | Basic geometry and loads | Additional test data and identification workflow |

A strong engineering workflow starts with the ideal model for clarity and speed, then escalates only when evidence shows that assumptions no longer support required accuracy.
