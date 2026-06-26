const e=`# Modelos físicos: Coefficient of Friction

## Ideal model

This leaf uses a first-order dry-contact model. The purpose is not to capture every microscopic surface process, but to retain the dominant mechanisms needed for reliable mechanical reasoning in standard engineering and educational contexts.

The main simplifications are:

- Dry contact without active lubrication.
- Approximately constant [[mu_s]] and [[mu_k]] in the operating range.
- Friction direction opposite to relative motion or motion tendency.
- No severe surface degradation during the analyzed time window.

These assumptions are acceptable for instruction and preliminary engineering estimates. Within this model, all five formulas of the leaf produce consistent results when the correct regime is identified first.

## Hypotheses

Operational hypotheses are:

- Contact remains mechanically engaged during the evaluated state.
- [[N]] is known or can be inferred with acceptable uncertainty from the geometry and applied loads.
- Regime classification (static or kinetic) is observable or inferable from available data.
- High-frequency effects, vibration, and thermal transients do not dominate the response.

If any hypothesis fails, a richer model should be used. Humidity, temperature excursion, or strong speed dependence of [[fk]] are typical indicators that the simple model is no longer adequate.

## Quantitative validity domain

The model is reliable under these quantitative conditions:

- Static regime check: [[fs]] satisfies the no-slip condition given by the static validity inequality.
- Static threshold law: [[fs_max]] is the product of [[mu_s]] and [[N]], with positive [[N]].
- Kinetic regime law: [[fk]] is the product of [[mu_k]] and [[N]] once relative sliding exists.
- Typical empirical consistency: [[mu_k]] is at most equal to [[mu_s]] in most common dry contacts.
- Inclined-plane calibration relation: [[mu_s]] equals the tangent of [[theta_c]] for ideal flat-surface geometry.

Explicit transition rule: when to switch model. If measurement-prediction discrepancy stays above approximately 10 percent across repeated tests, or if friction response changes strongly with relative speed, switch from constant-coefficient contact model to a speed- and state-dependent model such as Stribeck or regularized Coulomb formulations.

Outside these bounds, neglected terms can dominate behavior and the ideal model produces unreliable estimates.

## Model failure signals

Typical failure indicators in the constant-coefficient model are:

- Persistent prediction error above tolerance in repeated controlled tests.
- Inconsistency between static-condition check and observed slip onset.
- Strong speed trend in [[fk]] not explainable by a single constant [[mu_k]].
- Surface evolution during the run that shifts effective parameters: wear debris, heating, or contamination.
- Strong dependence of [[mu_s]] on loading rate, which is a sign of viscoelastic contact behavior.

## Extended or alternative model

When the ideal model fails, common extensions include:

- Speed- and temperature-dependent coefficients derived from tribological testing.
- Elastic contact and real contact-area corrections based on Hertz or Mindlin theory.
- Mixed lubrication transition models that capture the boundary between dry and fluid-film regimes.
- Parameter updating due to progressive wear using Archard-type wear relations.

The extended model is computationally more demanding and requires additional experimental characterization, but it is required in safety-critical certification and fine-tolerance design tasks.

## Operational comparison

| Aspect | Ideal model | Extended model |
|--------|-------------|----------------|
| Dominant variables | [[mu_s]], [[mu_k]], [[N]] | Surface state, speed, temperature |
| Regime handling | Simple static or kinetic | Multi-regime transitions |
| Computation cost | Low | Medium to high |
| Data requirements | Minimal: two coefficients and [[N]] | Additional testing and tribological data |
| Typical use | Instruction and early design | Fine validation and critical design |

Learn the ideal model first and use it as the baseline. Transition to extended models only when the ideal model's failure signals appear in your specific context.
`;export{e as default};
