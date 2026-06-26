# Models — Carnot Cycle

## Ideal model

The ideal Carnot cycle consists of four reversible processes executed by a working fluid between two thermal reservoirs of infinite heat capacity. Isothermal expansion at [[T_H]] absorbs [[Q_H]]; reversible adiabatic expansion reduces the temperature to [[T_C]]; isothermal compression at [[T_C]] rejects [[Q_C]]; and reversible adiabatic compression closes the cycle by returning the fluid to [[T_H]]. The central simplification is **total reversibility**: no friction exists, there are no finite temperature differences, and processes are quasi-static. The conserved quantities are total energy (first law) and entropy of the universe (second law in its equality form).

## Hypotheses

- The thermal reservoirs have infinite heat capacity and maintain constant temperature throughout the entire heat exchange.
- All processes are internally reversible: no friction, no turbulence, no internal gradients.
- Heat transfer occurs at an infinitesimal temperature difference between the fluid and the reservoir.
- The working fluid returns exactly to its initial state after completing the cycle.
- There are no conduction losses, radiation losses, or mass leaks.

Violating the first hypothesis (finite reservoirs) causes reservoir temperatures to vary during the cycle and real efficiency drops. Violating the second (internal friction) generates irreversible entropy and reduces [[W_neto]]. Violating the third (finite temperature differences) is the dominant source of irreversibility in real machines.

## Quantitative validity domain

The model is applicable when irreversibilities are negligible compared to the cycle's heat exchanges. In practice, this requires the temperature difference between fluid and reservoir to be less than 1 % of the reservoir's absolute temperature during isothermal processes. For thermal plants with [[T_H]] > 500 K and [[T_C]] > 280 K, Carnot efficiency provides a useful upper bound with a relative error compared to the specific ideal cycle (Brayton, Rankine) on the order of magnitude of 10 – 30 %.

## Model failure signals

- If the calculated real cycle efficiency exceeds 90 % of the corresponding Carnot efficiency, the input data may be incorrect or the real cycle model is too optimistic.
- If reservoir temperatures are not constant during operation (as in internal combustion cycles), the Carnot model between extreme temperatures overestimates the real limit.
- If the cycle involves non-ideal phase changes with pressure drops, Carnot does not capture those phase irreversibilities.
- In systems with multiple temperature levels (combined cycles, regenerative cycles), the simple two-reservoir Carnot does not adequately reflect the available thermodynamic potential.

## Extended or alternative model

The most direct extended model is the **endoreversible cycle** (Curzon-Ahlborn model), which maintains internal reversibility of the fluid but allows finite temperature differences between the fluid and the reservoirs. This model predicts an efficiency at maximum power lower than [[eta_C]], and its expression depends on the square root of the temperature ratio instead of the linear ratio.

When to switch to the endoreversible model: when one needs to estimate not only maximum efficiency but the maximum-power efficiency of a plant, or when temperature differences in heat exchangers are significant relative to the absolute temperatures of the reservoirs.

For specific cycles (Brayton, Rankine, Otto, Diesel), the generic Carnot model is abandoned in favour of the cycle's own efficiency formula, which incorporates the constraints of the real process (isobaric, isochoric, etc.).

## Operational comparison

| Criterion | Ideal Carnot cycle | Endoreversible model (Curzon-Ahlborn) |
|---|---|---|
| Accuracy for maximum efficiency | Exact as upper bound | Slightly underestimates the bound |
| Efficiency at maximum power | Does not predict (requires zero power) | Predicts using square root of temperature ratio |
| Complexity | Minimal, single formula | Moderate, requires thermal conductances |
| Application to real cycles | Only as comparative reference | Preliminary plant design |
| Validity range | Universal between two reservoirs | Systems with dominant external irreversibility |
