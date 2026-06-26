const e=`## Conceptual errors

### Error 1: Believing [[DeltaS]] depends on the path

**Why it seems correct**

The student reasons by analogy with heat and work, which do depend on the path. If Q and W are process functions, it seems logical that [[DeltaS]] = [[Q_rev]]/[[T]] should also depend on how the process is carried out.

**Why it is incorrect**

[[DeltaS]] is a state function: it depends exclusively on the initial and final thermodynamic states. The integral ∫dQ_rev/T is evaluated along any reversible path connecting both states, and the result is always the same regardless of the chosen path. If the actual process is irreversible, [[DeltaS]] has exactly the same value; only Q_real ≠ [[Q_rev]] changes.

**Detection signal**

The student obtains different values of [[DeltaS]] depending on the imagined path, or attempts to calculate "[[DeltaS]] of the irreversible process" as if it were different from "[[DeltaS]] of the reversible process" between the same states.

**Conceptual correction**

[[DeltaS]] depends only on the initial and final states. To calculate it, one may choose any convenient reversible path. The value obtained is universal for those two states, regardless of how the system actually reached from one to the other.

**Mini contrast example**

An ideal gas expands until its volume doubles: (a) isothermally and reversibly, (b) in free expansion. In both cases the gas entropy change is the same for the same states. If [[DeltaS]] depended on the path, free expansion would give zero because no real heat is exchanged, but this is false: [[DeltaS]] measures the state change.

### Error 2: Using Celsius temperature in the formulas

**Why it seems correct**

In many basic calorimetry problems, temperature differences ΔT are the same in Celsius and kelvin, so the student generalises: "it makes no difference whether I use °C or K."

**Why it is incorrect**

The [[DeltaS]] formulas use temperature ratios between [[T_f]] and [[T_i]] or divisions by T, not differences. A ratio between Celsius values is completely different from a ratio between kelvin values. Furthermore, if [[T_i]] = 0 °C, the physical denominator cannot be treated as zero: it must be converted to kelvin.

**Detection signal**

The [[DeltaS]] result is an order of magnitude larger than expected, or a divergence (division by zero) appears when the initial temperature is 0 °C.

**Conceptual correction**

Always convert to kelvin before substituting: T(K) = T(°C) + 273.15. In entropy formulas, [[T]] must be absolute because it represents the thermodynamic scale from which energy dispersal is measured.

**Mini contrast example**

Heating water from 20 °C to 80 °C. Incorrect: [[DeltaS]] = m·c·ln(80/20) = m·c·ln(4) ≈ m·c·1.39. Correct: [[DeltaS]] = m·c·ln(353/293) ≈ m·c·0.186. The error is a factor of 7.5.

## Model errors

### Error 3: Applying the isothermal formula to a heating process

**Why it seems correct**

The isothermal formula [[DeltaS]] = [[Q_rev]]/[[T]] is the simplest and most memorable. The student applies it to any process "because after all it's heat divided by temperature."

**Why it is incorrect**

The isothermal formula is only valid when [[T]] remains constant throughout the entire heat exchange. In heating, [[T]] varies continuously from [[T_i]] to [[T_f]]. Using an average T as denominator produces a systematic error because the function 1/T is not linear.

**Detection signal**

The student writes [[DeltaS]] = Q/(T_average) or [[DeltaS]] = m·c·ΔT/T_something instead of the correct logarithmic formula. The result differs from the correct one proportionally to the amplitude of the temperature range.

**Conceptual correction**

For heating with constant [[c_p]], the correct formula is the logarithmic relation of the leaf:

{{f:variacion_entropia_calentamiento}}

The derivation requires integrating reversible heat weighted by temperature, which produces the natural logarithm. No valid algebraic shortcut exists that avoids the logarithm.

**Mini contrast example**

Heating 1 kg of water from 300 K to 400 K. Incorrect: Q = 4186·100 = 418600 J, [[DeltaS]] = 418600/350 ≈ 1196 J/K (using average T). Correct: [[DeltaS]] = 4186·ln(400/300) ≈ 4186·0.288 ≈ 1205 J/K. In this case the error is small (~1%), but for wider ranges (100 K to 1000 K) the error grows to ~15%.

### Error 4: Ignoring intermediate phase change

**Why it seems correct**

If asked to calculate [[DeltaS]] for water going from −10 °C to 120 °C, the student directly applies one logarithmic formula as if it were a single continuous heating.

**Why it is incorrect**

When crossing a melting (0 °C) or boiling (100 °C) point, temperature remains constant while latent heat is absorbed. This heat does not appear in the heating formula (which assumes only sensible heat). Additionally, [[c_p]] changes when the phase changes (ice, liquid water and steam have different [[c_p]] values).

**Detection signal**

The student obtains a [[DeltaS]] significantly smaller than the tabulated value for the complete process, because they ignore the latent contributions which are usually dominant (water's latent heat of vaporisation is ≈ 2260 kJ/kg, much larger than any sensible heating over a 100 K range).

**Conceptual correction**

Split the calculation into segments: (1) solid heating to T_melting, (2) isothermal melting, (3) liquid heating to T_boiling, (4) isothermal vaporisation, (5) vapour heating. Each segment uses its formula: logarithmic for heating and [[Q_rev]]/[[T]] for phase change.

**Mini contrast example**

1 mol of water from 263 K to 383 K. Heating only: [[DeltaS]] = 75.3·ln(383/263) ≈ 28 J/(mol·K). With phase changes: [[DeltaS]] ≈ 28 + 22 (melting at 273 K) + 109 (vaporisation at 373 K) + additional contributions ≈ 160 J/(mol·K). The difference is a factor of 5.7.

## Mathematical errors

### Error 5: Confusing natural logarithm with common logarithm

**Why it seems correct**

Many calculators have the "log" key as default and the student uses it without checking whether it is log₁₀ or ln. In some countries the notation "log" is used interchangeably.

**Why it is incorrect**

Entropy change formulas require the **natural logarithm** (ln, base e). Using log₁₀ introduces an error factor of ln(10) ≈ 2.303: the result is 2.3 times smaller than correct.

**Detection signal**

Calculated [[DeltaS]] is approximately 57% of the correct value (1/2.303 ≈ 0.434). If multiplying the result by 2.303 yields the expected value, the error is confirmed.

**Conceptual correction**

Always use ln (natural logarithm, base e ≈ 2.718). If the calculator only offers log₁₀, convert: ln(x) = log₁₀(x) / log₁₀(e) = log₁₀(x) · 2.3026.

**Mini contrast example**

Isothermal expansion to double volume: [[DeltaS]] = [[n]][[R]]·ln(2) = 8.314·0.693 ≈ 5.76 J/(mol·K). With log₁₀: [[n]][[R]]·log₁₀(2) = 8.314·0.301 ≈ 2.50 J/(mol·K). Incorrect result by a factor of 2.3.

## Interpretation errors

### Error 6: Believing that negative system [[DeltaS]] violates the second law

**Why it seems correct**

The second law is stated as "entropy always increases," which the student interprets as [[DeltaS]] ≥ 0 in every process and for every system.

**Why it is incorrect**

The second law establishes that [[DeltaS]]_universe = [[DeltaS]]_system + [[DeltaS]]_surroundings ≥ 0. The system can perfectly well lose entropy (cooling, compression) as long as the surroundings gain at least that same amount. A refrigerator works this way: the interior loses entropy but the exterior gains more.

**Detection signal**

The student discards a negative [[DeltaS]] result as "impossible" or "erroneous" without calculating the surroundings' [[DeltaS]]. They may also attempt to force [[DeltaS]] to be positive by arbitrarily changing signs.

**Conceptual correction**

[[DeltaS]]_system can be positive, negative, or zero. What the second law forbids is [[DeltaS]]_universe being negative. Always verify the complete balance: system + surroundings.

**Mini contrast example**

Condensation of 1 mol of steam at 373 K: [[DeltaS]]_system = −40650/373 ≈ −109 J/(mol·K) (negative, the system becomes more ordered). [[DeltaS]]_surroundings = +40650/373 ≈ +109 J/(mol·K). [[DeltaS]]_universe = 0 (reversible process). No violation.

## Quick self-control rule

Before accepting an [[DeltaS]] result:

1. **Check units**: the result must be in J/K (or J/(mol·K) if working per mole). If units of J or K alone appear, a step is missing.
2. **Check sign**: heating or absorption → [[DeltaS]] > 0; cooling or release → [[DeltaS]] < 0. If the sign contradicts the process, review.
3. **Check order of magnitude**: compare with known references (ice melting ≈ 22 J/(mol·K), vaporisation ≈ 109 J/(mol·K)). If the result deviates by a factor > 5 without obvious reason, look for unit or logarithm errors.
4. **Check coherence with the second law**: if [[DeltaS]]_system < 0, calculate [[DeltaS]]_surroundings and confirm that [[DeltaS]]_universe ≥ 0.
`;export{e as default};
