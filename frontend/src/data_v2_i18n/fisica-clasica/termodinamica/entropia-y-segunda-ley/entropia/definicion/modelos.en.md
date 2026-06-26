# Models

## Ideal model

The standard model of this leaf applies the Clausius definition to a reversible heat exchange at constant temperature.

## Hypotheses

- **Reversible isothermal process**: temperature [[T_abs]] remains constant throughout the entire process. This condition converts the differential integral into a simple division and is the central assumption of the model.

- **Quantitative thermal-stability criterion**: temperature variation during the exchange should remain below 2 K; above 5 K, irreversibility should be treated explicitly.

- **Reversible (quasi-static) process**: the system passes through a continuous succession of equilibrium states. There are no internal friction, finite temperature gradients, or spontaneous diffusion processes. In practice, phase changes at constant temperature (melting, vaporisation) are the closest real processes to this ideal.

- **Closed system in contact with a single thermal reservoir**: all heat [[Q_rev]] is exchanged with a reservoir at constant temperature [[T_abs]]. There are no multiple heat sources at different temperatures acting simultaneously.

- **[[T_abs]] positive and finite**: the reservoir temperature is strictly greater than zero kelvin, ensuring that the denominator of the Clausius formula is always finite and positive.

## Quantitative validity domain

Quantitative criterion: with positive [[T_abs]] and variations below 1-2 K during the exchange, the isothermal model is adequate; with gradients above 5 K between system and reservoir, irreversibility must already be discussed explicitly. The integrated Clausius relation is exact for any reversible isothermal process. There is no upper temperature validity limit.

For phase change processes at constant pressure, the model is applicable when the transition temperature is well defined. For water: melting at 273.15 K, vaporisation at 373.15 K (at 1 atm). Outside the transition points, the process is no longer isothermal and the formula does not apply directly.

Deviation from the model becomes significant when the actual process departs substantially from reversible: if heat transfer occurs with a temperature gradient greater than 5 K between system and reservoir, irreversibility introduces a relative error in system [[DeltaS]] of the order of the gradient divided by [[T_abs]].

## Model failure signals

- **[[T_abs]] varies appreciably during the process**: if temperature changes by more than 1-2 K, the isothermal assumption fails. In that case [[DeltaS]] must be calculated with a non-isothermal model using reversible integration.

- **Clearly irreversible process**: explosions, rapid mixing, free expansions (Joule expansion). In these processes the actual heat is lower than the equivalent reversible heat for absorption; using actual heat underestimates [[DeltaS]] of the system.

- **Calculated [[T_abs]] negative**: indicates that [[DeltaS]] and [[Q_rev]] have opposite signs, which is inconsistent with the definition. Review the signs of the input data.

## Extended or alternative model

For non-isothermal processes where temperature varies continuously, the differential Clausius form must be evaluated explicitly. For sensible heating of a body with approximately constant mass-specific heat capacity, the alternative model uses a logarithmic relation between initial and final temperature.

This model extends applicability to sensible heating or cooling processes without phase change. The quantitative condition for its validity is that heat capacity c is constant over the temperature range, which is reasonable for temperature variations smaller than 20% of [[T_abs]] in kelvin.

When to switch to the extended model: when the process is not isothermal, when working with heating or cooling of liquids or solids between two different temperatures, or when the problem provides specific heat capacity and initial and final temperatures instead of latent heat and transition temperature.

## Operational comparison

| Criterion | Isothermal model (direct Clausius) | Non-isothermal model (integral with c) |
|---|---|---|
| Condition | T constant, phase change or reversible isothermal process | T varies, sensible heating/cooling |
| Formula | isothermal Clausius relation | non-isothermal integration model |
| Required data | [[Q_rev]] and [[T_abs]] | mass, heat capacity, initial/final temperatures |
| Complexity | Direct division | Natural logarithm |
| Typical error | Using Celsius temperature; using irreversible heat instead of [[Q_rev]] | Using non-constant heat capacity; forgetting that temperatures must be in kelvin |
