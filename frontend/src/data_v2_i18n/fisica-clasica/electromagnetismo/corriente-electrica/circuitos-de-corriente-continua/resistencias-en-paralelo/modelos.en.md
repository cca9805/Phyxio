## Ideal model

The ideal model treats each branch as a linear resistor connected across two common nodes. Under this representation, branch voltage [[tension_comun_del_paralelo]] is shared, while branch-current values follow local branch resistance. This is the preferred model for conceptual learning, first-pass design, and fast trend validation.

Key strength is transparent causality: lower branch resistance implies higher branch current under fixed common voltage. This representation also enables quick checks of [[resistencia_equivalente]] and [[corriente_total]] trend consistency when branches are added or removed.

## Hypotheses

The ideal model relies on explicit hypotheses. Branches are predominantly resistive, operation is quasi-steady, common nodes do not accumulate net charge, and resistive behavior remains approximately linear in the operating thermal window. The framework also assumes wiring drops are small relative to branch voltage.

These hypotheses are not optional narrative. They define when model outputs can be trusted for engineering decisions.

## Quantitative validity domain

The ideal model is usually accepted when explicit criteria hold. Typical examples are error_relativo <= 0.05 between measured and predicted branch currents, caida_en_cable / V <= 0.03 in each branch, and variacion_termica_resistencia <= 0.10 during steady operation.

When those bounds are violated, ideal equations may still support qualitative trend reading, but they become weak for protection tuning and reliable fault localization.

## Model failure signals

A common failure signal is systematically higher measured [[corriente_total]] than predicted. Another signal is branch-current redistribution with temperature while [[tension_comun_del_paralelo]] remains stable. A third signal is unexpected heating in a branch assumed to be secondary.

When such signals appear, forcing ideal assumptions usually delays root-cause identification.

## Extended or alternative model

The extended model preserves nodal closure but introduces non-idealities: wiring resistance, component tolerance spread, thermal drift, and possible branch nonlinearity. Field-oriented versions may also include contact resistance and source sag under demand.

This is not complexity for its own sake. A controlled model escalation appears only when operational decisions require better predictive fidelity.

## Operational comparison

Ideal model:
- Faster for architecture checks and trend reasoning.
- Lower parameterization effort.

Extended model:
- Better for persistent mismatch diagnosis.
- Better for thermal protection and reliability decisions.

When to switch models:
Switching to an extended model is justified when measured mismatch changes safety margins, source selection, or maintenance priority. If mismatch does not alter operational decisions, ideal representation remains practical.

A quantitative trigger can be documented to standardize escalation. Teams often require 0.95 <= I_model/I_measured <= 1.05 in each active branch for ideal-model acceptance. Another practical bound is 1e-3 <= R_wiring/[[resistencia_de_rama_1]] <= 3e-2 when wiring effects are neglected in first-pass analysis. Declaring those bounds explicitly improves reproducibility across reviewers and avoids model switching based on subjective preference.