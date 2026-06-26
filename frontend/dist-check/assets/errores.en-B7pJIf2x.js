const e=`# Frequent errors

## Conceptual errors

### Error 1: Using Celsius instead of kelvin in the Clausius formula

**Why it seems correct**

The problem states a temperature of, say, 27 °C or 100 °C. The student substitutes that number directly into [[T_abs]] without converting. The formula [[DeltaS]] = [[Q_rev]] / [[T_abs]] still looks the same and produces a number.

**Why it is incorrect**

The Clausius definition uses the absolute thermodynamic temperature: [[T_abs]] is the temperature on the kelvin scale, which starts at absolute zero (−273.15 °C). Using 27 instead of 300 K overestimates [[DeltaS]] by a factor of 300/27 ≈ 11. Using 100 instead of 373 K overestimates [[DeltaS]] by a factor of 3.73. Both errors are systematic and large.

**Detection signal**

If the calculated [[DeltaS]] is above 100 J/K for everyday processes (a few grams or moles of substance at room temperature), suspect an error in the unit of [[T_abs]]. If [[DeltaS]] for ice melting comes out above 50 J/K per gram, there is a temperature scale error.

**Conceptual correction**

Always convert [[T_abs]] to kelvin before calculating: [[T_abs]] (K) = T (°C) + 273.15. The temperature 0 °C equals 273 K; 100 °C equals 373 K. Absolute zero (−273.15 °C) is the point where thermal energy is minimum and [[DeltaS]] would diverge for any finite heat.

**Contrast mini-example**

Melting 1 mol of ice: with [[Q_rev]] of 6010 J and [[T_abs]] of 273 K, the Clausius definition gives about 22 J/(mol K). If zero is entered as if it were kelvin, an impossible division appears. With the correct absolute temperature, the result returns to the tabulated value.

---

### Error 2: Confusing [[DeltaS]] of the system with [[DeltaS]] of the universe

**Why it seems correct**

The second law is stated as "entropy cannot decrease". The student interprets this to mean [[DeltaS]] must always be positive or zero, and is alarmed when obtaining negative [[DeltaS]] for a cooling or condensation process.

**Why it is incorrect**

The second law states that [[DeltaS]]_universe ≥ 0, not that [[DeltaS]]_system ≥ 0. The system can perfectly well lose entropy ([[DeltaS]]_system < 0) if the surroundings gain more entropy than the system loses. A refrigerator, vapour condensation, or solidification of molten metal all produce [[DeltaS]]_system < 0, but in all cases [[DeltaS]]_surroundings > |[[DeltaS]]_system|.

**Detection signal**

The student writes "this cannot be because [[DeltaS]] is negative" for a process that physically reduces system entropy (cooling, condensation, crystallisation). Or calculates only [[DeltaS]]_system and compares it with the second law without calculating [[DeltaS]]_surroundings.

**Conceptual correction**

To verify the second law, calculate [[DeltaS]]_universe = [[DeltaS]]_system + [[DeltaS]]_surroundings. The surroundings absorb [[Q_rev]] at temperature [[T_abs]]_surroundings: [[DeltaS]]_surroundings = −[[Q_rev]] / [[T_abs]]_surroundings. Only if [[T_abs]]_surroundings = [[T_abs]]_system (reservoir at the same thermal level) does [[DeltaS]]_universe = 0 (reversible process).

**Contrast mini-example**

Condensation of 1 mol of water vapour at 100 °C (373 K): [[Q_rev]]_system = −40650 J, [[DeltaS]]_system = −40650 / 373 ≈ −109 J/(mol·K). The surroundings (also at 373 K) absorb +40650 J: [[DeltaS]]_surroundings = +40650 / 373 ≈ +109 J/(mol·K). [[DeltaS]]_universe = 0: reversible process at constant temperature. No error.

---

## Model errors

### Error 3: Applying the isothermal formula to a sensible heating process

**Why it seems correct**

The student has [[Q_rev]] (heat supplied to a body heating from 20 °C to 80 °C) and [[T_abs]] (some temperature of the process). The student applies [[DeltaS]] = [[Q_rev]] / [[T_abs]] directly using an average or initial temperature.

**Why it is incorrect**

The Clausius relation is valid only when [[T_abs]] is constant throughout the process. If [[T_abs]] varies (sensible heating), an integrated heating model is needed instead of the direct isothermal division. Using an average temperature can produce a 5-10% error for wide temperature ranges.

**Detection signal**

The problem provides a different initial and final temperature without mentioning a phase change. The student uses a single [[T_abs]] in the direct Clausius formula.

**Conceptual correction**

Identify the process type before calculating. If T varies and there is no phase change, use the logarithmic formula of the extended model. If there is a phase change at constant temperature, use the isothermal formula with [[T_abs]] equal to the transition temperature.

**Contrast mini-example**

Heating 1 kg of water from 293 K to 373 K: the integrated model with water heat capacity gives about 1000 J/K. If an average temperature is inserted into the isothermal relation, the value is close in this range, but the procedure is not general and fails for wider intervals.

---

## Mathematical errors

### Error 4: Forgetting the sign of [[Q_rev]] and obtaining [[DeltaS]] with the wrong sign

**Why it seems correct**

The student calculates the absolute value of the latent heat of a process and divides by [[T_abs]], obtaining positive [[DeltaS]] regardless of the process type.

**Why it is incorrect**

The sign of [[Q_rev]] determines the sign of [[DeltaS]]. For processes where the system releases heat (condensation, solidification, cooling), [[Q_rev]] is negative and [[DeltaS]] must be negative. Reversing the sign gives positive [[DeltaS]] for a process that reduces system entropy, which contradicts the physics of the process.

**Detection signal**

Positive [[DeltaS]] for a condensation or solidification process, or negative [[DeltaS]] for a melting or vaporisation process. The sign of [[DeltaS]] must always be consistent with the process direction: processes that "order" the system (solidification, condensation) produce [[DeltaS]]_system < 0.

**Conceptual correction**

Sign convention: [[Q_rev]] > 0 when the system absorbs heat (endothermic process); [[Q_rev]] < 0 when the system releases heat (exothermic process). [[DeltaS]] = [[Q_rev]] / [[T_abs]] inherits the sign of [[Q_rev]] because [[T_abs]] is always positive.

**Contrast mini-example**

Water vaporisation: the system absorbs heat from surroundings → [[Q_rev]] = +40650 J/mol → [[DeltaS]] = +40650/373 ≈ +109 J/(mol·K) > 0 (correct: gas has greater dispersal than liquid). Condensation: the system releases heat → [[Q_rev]] = −40650 J/mol → [[DeltaS]] = −109 J/(mol·K) < 0 (correct: liquid has less dispersal than gas).

---

## Interpretation errors

### Error 5: Interpreting [[DeltaS]] = 0 as meaning "nothing happened" in the process

**Why it seems correct**

[[DeltaS]] = 0 means entropy has not changed. The student interprets this as the process being trivial or without significant physical change.

**Why it is incorrect**

[[DeltaS]] = 0 in the system defines an isentropic process (reversible and adiabatic), which can involve enormous changes in temperature, pressure, and volume. A gas compressed adiabatically and reversibly can heat up by hundreds of kelvin without changing its entropy. Nor does [[DeltaS]] = 0 mean [[DeltaS]]_universe = 0 for any process: only a completely reversible process achieves this.

**Detection signal**

The student concludes from [[DeltaS]]_system = 0 that the process is trivial or that no work or heat is involved. Or interprets an adiabatic process as one where "nothing thermodynamically happens".

**Conceptual correction**

[[DeltaS]] = 0 for the system is compatible with: (a) reversible adiabatic isentropic process (large work, zero heat), (b) cyclic process returning to the initial state (S is a state function), (c) isothermal adiabatic process (impossible: if T is constant and there is no heat, an ideal gas cannot change state). In the Carnot cycle, [[DeltaS]]_system is zero for the complete cycle, but each individual stage has non-zero [[DeltaS]].

**Contrast mini-example**

Reversible adiabatic compression of 1 mol of ideal gas from 300 K and 1 atm to 2 atm: [[DeltaS]] = 0 (isentropic), but the final temperature rises to approximately 365 K and work of about 1800 J is done on the gas. The process is physically significant despite [[DeltaS]] = 0.

---

## Quick self-control rule

1. [[T_abs]] is always positive in kelvin; if the result of isolating [[T_abs]] is negative, the sign of [[DeltaS]] or [[Q_rev]] is inverted.
2. The difference between [[T_abs]] in kelvin and in Celsius is always 273.15; a result that depends quantitatively on whether one or the other scale is used indicates that [[T_abs]] must be in kelvin.
3. For water melting at 0 °C, [[DeltaS]] per mole is approximately 22 J/(mol·K); for vaporisation at 100 °C it is approximately 109 J/(mol·K). If the result departs significantly from these values for water, review units and signs.
`;export{e as default};
