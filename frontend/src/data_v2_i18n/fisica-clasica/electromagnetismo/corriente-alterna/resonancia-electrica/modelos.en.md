## Ideal model

The ideal model represents the branch as linear series RLC under stable sinusoidal excitation. In this frame, resonance position is captured by [[omega0]] and [[f0]], response shape by [[factor_de_calidad]] and [[ancho_de_banda]], and branch-demand estimate by [[corriente_resonante]] under given [[tension_eficaz]].

This model is useful because it separates roles clearly: [[inductancia]] and [[capacitancia]] mainly place tuning position, while [[resistencia_total_serie]] controls damping and selectivity behavior. That separation enables fast first-pass design and coherent trend checks.

## Hypotheses

First hypothesis: near-linear component behavior in the operating amplitude window. Second hypothesis: excitation is periodic with well-defined frequency. Third hypothesis: losses can be represented by an effective series resistance [[resistencia_total_serie]].

A measurement hypothesis is also required: voltage and current are treated with RMS coherence. A systems hypothesis is required too: load interaction does not dominate branch behavior in the baseline pass.

## Quantitative validity domain

A practical baseline is reliable when THD <= 5%, when normalized tuning mismatch satisfies abs(f_measured - [[f0]])/[[f0]] <= 0.05, and when relative parasitic-loss indicator remains bounded, for example R_parasitic/[[resistencia_total_serie]] <= 0.20.

For narrowband interpretation, another useful criterion is [[ancho_de_banda]]/[[f0]] <= 0.30. If this ratio grows too much, narrowband approximations become less trustworthy for fine design closure.

## Model failure signals

A common warning is persistent mismatch between measured center response and predicted [[f0]] after unit and measurement checks. This often indicates thermal drift, coupling effects, or nonlinearity outside baseline assumptions.

Another warning is operational: if measured branch current near resonance systematically exceeds expected [[corriente_resonante]] under comparable conditions, effective damping representation is incomplete.

A third warning is trend inversion. If damping is increased but the observed response appears narrower under the same setup, parameter extraction or model framing should be revisited.

## Extended or alternative model

The next-level model includes distributed losses, dielectric effects, thermal drift, load coupling, and full complex response fitting across frequency windows.

The transition condition can be stated explicitly: when it is convenient to change to an alternative model is when abs(f_measured - [[f0]])/[[f0]] > 0.05, or R_parasitic/[[resistencia_total_serie]] > 0.20, or [[ancho_de_banda]]/[[f0]] > 0.30 in a design that needs selective behavior.

Under those conditions, relying only on the minimal model can produce misleading closure.

When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.

## Operational comparison

Ideal modeling is excellent for causal understanding, first-pass sizing, and sanity checks. Extended modeling is preferable for final specification, safety validation, and environments with strong non-ideal effects.

These layers are complementary. Strong engineering practice starts with ideal structure, then escalates only where measured evidence and risk profile require higher fidelity.

In implementation teams, this staged approach also improves workflow speed: quick baseline decisions remain possible, while high-risk zones receive deeper modeling effort with explicit justification.