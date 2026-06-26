## Conceptual errors

### Error 1: Confusing phase equilibrium with equal concentrations

**Why it seems correct**

The student intuitively generalises that two phases in equilibrium must have the same component concentration, by analogy with thermal equilibrium (same temperature) or mechanical equilibrium (same pressure). The cognitive mechanism is an **incomplete analogy** with other equilibrium criteria.

**Why it is incorrect**

Phase equilibrium requires equality of chemical potential [[mu]] in all phases, not equality of concentrations. [[mu]] depends on both the standard term [[mu_std]] (which differs between phases) and the logarithmic composition term. At liquid-vapour equilibrium, the component concentration in the vapour is very different from that in the liquid; yet the [[mu]] values are identical. Equal concentrations would be a special case only if [[mu_std]] were the same in both phases.

**Detection signal**

The student writes equilibrium conditions as "concentration in phase 1 equals concentration in phase 2" without including the logarithmic [[mu]] term. Or they compute an equilibrium concentration that is equal in both phases when the problem involves different phases (gas-liquid, solid-liquid).

**Conceptual correction**

The correct phase equilibrium condition is [[mu]]_phase1 = [[mu]]_phase2 for each component. Because [[mu]] depends on activity through a logarithm and the standard state may differ between phases, equilibrium concentrations are generally different. Nernst's distribution law and Henry's law are direct consequences of this condition.

**Contrast mini-example**

Iodine distributed between water and carbon tetrachloride reaches equilibrium with very different concentrations in each phase (partition coefficient of about 85 in favour of CCl₄). A student who equates concentrations would conclude that concentrations must be equal in both solvents, a physically absurd result that contradicts any partition coefficient table.

---

## Model errors

### Error 1: Using [[mu_std]] as if it were [[mu]] without including the composition term

**Why it seems correct**

The student learns that [[mu_std]] is the reference value of [[mu]] and uses it directly in equilibrium calculations without adding the R·[[T]]·ln([[a]]) term. This happens especially when problems do not explicitly mention activity or when the student memorises the expression but does not identify when [[a]] differs from 1. The cognitive mechanism is **premature simplification** of the model.

**Why it is incorrect**

[[mu_std]] corresponds to the chemical potential of the pure component in its standard reference state, where [[a]] is 1 by definition. In any real mixture, [[a]] differs from 1 and the logarithmic term is non-zero. Omitting it implies that all components of any mixture have the same [[mu]] as if they were pure, making it impossible to predict the direction of any mixing or separation process.

**Detection signal**

The student computes [[mu]] of a component in solution and obtains the same value as [[mu_std]], without having verified that [[a]] is exactly 1. Or they apply the equilibrium criterion using tabulated [[mu_std]] values directly and conclude that equilibrium is reached when the tabulated values are equal, ignoring composition differences.

**Conceptual correction**

[[mu]] of a component in any mixture or solution is always computed as [[mu_std]] plus R·[[T]]·ln([[a]]). The tabulated value [[mu_std]] is valid only for the pure component under standard conditions. In all other situations, the logarithmic term is indispensable.

**Contrast mini-example**

The [[mu]] of pure water is [[mu_std]](water) at 25 °C. The [[mu]] of water in a 1 mol/L NaCl aqueous solution is lower than [[mu_std]] because the activity of water has dropped to approximately 0.96. Using [[mu_std]] for water in solution predicts no difference in [[mu]] between pure water and the solution, which would make osmotic pressure or cryoscopic depression impossible to explain.

---

## Mathematical errors

### Error 1: Using [[T]] in degrees Celsius in the R·[[T]] term

**Why it seems correct**

The student is accustomed to working with Celsius temperatures in sensible-heat formulas, where Celsius is correct because a temperature difference appears. They incorrectly generalise that all thermodynamic equations accept Celsius. The cognitive mechanism is **excessive generalisation** of rules valid in other contexts.

**Why it is incorrect**

In the expression of [[mu]], [[T]] appears as a multiplicative factor in R·[[T]]·ln([[a]]), not as a difference. In that case, using 25 °C instead of 298 K introduces a factor of 298/25 = 11.9 error in the logarithmic term. If [[a]] is 0.01, the error in the logarithmic term goes from about 11.4 kJ/mol (correct) to only 0.95 kJ/mol (incorrect), completely changing the equilibrium result.

**Detection signal**

The student writes the term as R times 25 times ln([[a]]) in a room-temperature calculation, or as R times a negative value when the problem specifies a temperature below 273 K expressed in Celsius.

**Conceptual correction**

Whenever [[T]] appears as a multiplicative factor in a thermodynamic expression (R·[[T]], k_B·[[T]], etc.), it must be in kelvin. Only when [[T]] appears as a difference ΔT can the Celsius scale be used without error.

**Contrast mini-example**

At 25 °C, R·[[T]] in kelvin is 8.314 times 298.15, equal to 2478 J/mol. R·[[T]] with T in Celsius is 8.314 times 25, equal to 207.9 J/mol, a factor of 12 smaller. The logarithm of the activity ratio that defines the equilibrium constant will be completely distorted, predicting wrong equilibria.

---

## Interpretation errors

### Error 1: Believing that negative [[mu]] implies a spontaneous process

**Why it seems correct**

The student remembers that ΔG < 0 implies spontaneity and confuses this criterion with the absolute sign of [[mu]]. Since [[mu_std]] can be negative for stable compounds, the student concludes that negative [[mu]] guarantees spontaneity. The cognitive mechanism is **confusion between the value of a potential and its change**.

**Why it is incorrect**

Spontaneity in multicomponent systems does not depend on the absolute sign of [[mu]] but on the **difference in [[mu]] between the initial and final states**, or between phases. A component with [[mu]] of minus 200 kJ/mol in phase 1 and [[mu]] of minus 210 kJ/mol in phase 2 will spontaneously flow from phase 1 to phase 2 (toward lower [[mu]]), not because [[mu]] is negative but because there is a 10 kJ/mol difference. If both phases had [[mu]] of minus 200 kJ/mol there would be no net flow even though [[mu]] is negative.

**Detection signal**

The student concludes that a component remains spontaneously in a phase simply because its [[mu]] is negative, without comparing with [[mu]] in other phases or states of the system.

**Conceptual correction**

The correct thermodynamic criterion is the difference in [[mu]]. Matter flows from the region of higher [[mu]] to lower [[mu]], regardless of whether [[mu]] is positive or negative in absolute value. The absolute sign of [[mu]] only makes sense in relation to the conventional reference state.

**Contrast mini-example**

The chemical potential of pure liquid water at 25 °C is negative (referenced to elements H₂ and O₂). Yet water does not spontaneously flow anywhere because its [[mu]] is equal throughout a homogeneous sample. Only when a [[mu]] difference is created (for example, by putting pure water in contact with a concentrated solution through a semipermeable membrane) does spontaneous flow occur.

---

## Quick self-control rule

Before accepting a [[mu]] calculation as valid, check the following:

- **[[T]] in kelvin**: verify the numerical value of [[T]] is greater than 200. If working at room temperature and [[T]] is 25 or similar, Celsius was used by mistake.
- **[[a]] positive and with correct scale**: for gases, [[a]] is the partial pressure in bars (not atm or Pa); for aqueous solutions, [[a]] is the concentration in mol/L or the mole fraction depending on the system convention.
- **Logarithmic term not omitted**: unless the problem explicitly states the component is in its pure standard state, the R·[[T]]·ln([[a]]) term must be included.
- **Comparison of [[mu]] between phases, not absolute sign**: to determine the direction of spontaneous flow, compare [[mu]] of the component in the different phases; flow goes from higher to lower [[mu]].
- **Unit consistency**: [[mu_std]] in J/mol and [[R]] in J/(mol·K) yield [[mu]] in J/mol. Mixing kJ and J gives a result wrong by a factor of 1000.
