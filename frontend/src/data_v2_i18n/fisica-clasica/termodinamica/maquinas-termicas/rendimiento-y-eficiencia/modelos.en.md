## Ideal model

The ideal efficiency model treats the engine as a system operating in a perfect stationary cycle between two thermal reservoirs of absolutely constant temperature. The working fluid completes each cycle without energy losses from friction, without heat transfers involving finite temperature differences, and without irreversible gas mixing.

In this model, [[Q_H]] is absorbed entirely in an isothermal process at the hot-reservoir temperature, and [[Q_C]] is rejected entirely in another isothermal process at the cold-reservoir temperature. Net work [[W_util]] is exactly the difference between the two heats, and efficiency [[eta]] coincides with the Carnot limit [[eta_Carnot]] calculated from the absolute temperatures of the reservoirs.

This model retains the two essential thermodynamic quantities—the heat exchanges—and discards all mechanical losses and internal irreversibilities of the fluid.

## Hypotheses

- The cycle is **stationary and periodic**: the working fluid returns exactly to its initial state at the end of each cycle, with no net change in internal energy.
- The **reservoirs are ideal**: they maintain absolutely constant temperature throughout the entire heat exchange, regardless of the amount of heat transferred. Violating this hypothesis introduces temperature gradients that add external irreversibilities.
- **Heat transfer is quasi-static**: it occurs without a finite temperature difference between the fluid and the reservoir. If a finite difference exists, the transfer is irreversible and real efficiency falls below the Carnot limit.
- **No internal fluid friction**: expansion and compression are reversible. Friction increases internal entropy generation, raises [[Q_C]], and reduces [[eta]].
- **No lateral heat losses**: all energy exchanged between the fluid and the reservoirs is exactly [[Q_H]] and [[Q_C]]; there are no heat leaks through walls or into auxiliary components.

## Quantitative validity domain

The model is reasonably accurate when irreversibilities are small compared with the total heat exchanges. As a practical rule, the relative error is less than 5% when the temperature differential between the fluid and each reservoir is smaller than 20 K during heat exchange. For laboratory applications with slow cycles, the ideal model is valid when the cycle speed is less than 0.1 Hz and operating pressures are below 5 MPa.

For high-power engines, the ideal model overestimates [[eta]] by between 20% and 40% relative to the measured real efficiency, because internal irreversibilities are always significant at rotation speeds above 1000 rpm. In gas-turbine Brayton cycles, the isentropic efficiency of compressor and turbine is typically 0.85–0.90, reducing real efficiency by up to 15% below the ideal-model limit.

The ideal model loses validity when friction losses exceed 10% of gross expansion work, or when the hot-reservoir temperature varies by more than 15% during the heat absorption phase of the cycle.

## Model failure signals

- [[eta]] calculated with the ideal model exceeds the experimentally measured value by more than 30% for the same reservoir temperatures: indicates that internal irreversibilities are dominant and the model severely underestimates losses.
- Measured [[Q_C]] is significantly greater than [[Q_H]] multiplied by the cold-to-hot reservoir temperature ratio: signals that heat rejection is not isothermal or that lateral heat losses exist that are not accounted for.
- The engine enters non-stationary operation (exhaust-gas temperature rising from cycle to cycle): indicates the working fluid does not return to its initial state and the cycle is not closed, invalidating the periodicity hypothesis.
- Engine power decreases faster than expected with increasing rotation speed: signals friction losses that the ideal model cannot capture.

## Extended or alternative model

The extended model incorporates quantifiable irreversibilities through the isentropic efficiencies of each cycle component. For turbines and compressors, isentropic efficiency is the ratio of actual work exchanged to the work that would be exchanged in an equivalent isentropic process. A compressor isentropic efficiency of 0.85 means the compressor consumes 17.6% more work than in the ideal case.

When to switch to the extended model: whenever the cycle operates at speeds above 500 rpm, when measured irreversibilities exceed 10% of ideal work, or when the gap between the ideal-model-predicted [[eta]] and the measured [[eta]] exceeds 15%. In high-precision thermal power plants, switching to this model enables efficiency prediction with an error below 2%.

The log-mean temperature difference model for heat exchangers is another relevant extension: it replaces the isothermal reservoir hypothesis with a model that integrates the temperature variation along the exchanger, lowering the effective [[eta_Carnot]] and bringing predictions closer to real efficiency.

## Operational comparison

| Criterion | Ideal model | Extended model |
|---|---|---|
| Accuracy | Overestimates [[eta]] by 20–40% | Error below 5% with measured isentropic efficiencies |
| Complexity | Single formula with [[Q_H]] and [[W_util]] | Requires isentropic efficiencies of each component |
| Range of application | Slow quasi-static cycles, conceptual analysis | Real cycles at nominal operating speed |
| Applicability signal | Cycle speed below 0.1 Hz, temperature gradients below 20 K | Any industrial engine at nominal speed |
| Key advantage | Enables comparison with the Carnot limit and quantification of the distance to the ideal | Allows predicting real [[eta]] from component specifications |
| Main limitation | Captures no irreversibility; real efficiency always falls short | Requires experimental isentropic efficiency data; cannot predict efficiency without prior measurements |
