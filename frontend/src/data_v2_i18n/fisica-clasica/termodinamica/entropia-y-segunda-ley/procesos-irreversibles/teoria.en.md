# Irreversible processes

## Conceptual context

The second law of thermodynamics establishes that natural processes have a preferred direction: heat flows spontaneously from hot to cold, gases expand into vacuum, and isolated systems tend toward equilibrium. This leaf focuses on the **quantification** of that irreversibility: given a specific process, how much entropy does the universe generate and what consequences does it have for available useful energy?

Mastering the calculation of [[DeltaS_univ]] is essential for evaluating the real efficiency of any heat engine, determining whether a proposed process is thermodynamically possible, and quantifying the degradation of useful energy (exergy) at each stage of an industrial process.

Irreversibility is not a defect that can be completely eliminated: every heat transfer across a finite gradient, every friction force, and every spontaneous mixing generates entropy. The practical goal is to minimise it, and for that it is essential to know how to measure it quantitatively.

## 🟢 Essential level

An **irreversible process** is one that cannot undo itself spontaneously: once it has occurred, the universe has changed permanently. The quantity that detects this irreversibility is [[DeltaS_univ]], the entropy change of the universe (system + surroundings).

> [!TIP]
> Think of [[DeltaS_univ]] as a "degradation counter": every time something spontaneous happens in nature, the counter goes up. It never goes down. If a calculation gives you a negative [[DeltaS_univ]], there is a definite error.

The basic reading has three cases: if the global balance increases, the process is irreversible; if it remains zero, it describes the ideal reversible limit; if it decreases, the result does not represent a physically possible process.

To calculate [[DeltaS_univ]], compare the system's entropy change with the surroundings' entropy change. The system can lose entropy as long as the surroundings compensate that loss and the combined balance does not decrease.

The main sources of irreversibility in nature are: heat transfer across finite temperature gradients, mechanical friction, spontaneous mixing of substances, spontaneous chemical reactions, and free expansion into vacuum.

## 🔵 Formal level

The quantitative criterion of irreversibility is expressed as:

{{f:criterio_irreversibilidad}}

Where [[DeltaS_sis]] is calculated as a state function (via a reversible path between the system's initial and final states) and [[DeltaS_ent]] is calculated from the actual heat exchanged: [[DeltaS_ent]] = −[[Q_sis]] / [[T_ent]] for surroundings modelled as a reservoir at constant temperature.

> [!NOTE]
> The asymmetry is crucial: for the **system**, a reversible path is used (because [[DeltaS_sis]] is a state function). For the **surroundings**, the real heat is used (because the surroundings, being a reservoir in equilibrium, always behaves reversibly internally).

Entropy generation from heat transfer across a finite gradient is quantified by:

{{f:generacion_entropia_transferencia_calor}}

This formula shows that [[S_gen]] is proportional to the transferred heat [[Q_sis]] and to the difference of inverse temperatures (1/[[T_ent]] − 1/[[T_sis]]). When [[T_sis]] = [[T_ent]], the factor vanishes and there is no generation: this is the reversible limit. The greater the temperature difference, the greater [[S_gen]] per joule transferred.

The generated entropy [[S_gen]] is numerically equal to [[DeltaS_univ]] when heat transfer is the only source of irreversibility. If there are other sources (friction, mixing), [[DeltaS_univ]] includes additional contributions.

For an irreversible adiabatic process (such as free expansion of an ideal gas), [[DeltaS_ent]] = 0 (no heat exchanged with surroundings) and all entropy generation remains in the system: [[DeltaS_univ]] = [[DeltaS_sis]] > 0.

## 🔴 Structural level

The structure of the entropy balance reveals fundamental properties of irreversibility:

**Additivity of sources**: if a process has several sources of irreversibility (thermal gradient + friction + mixing), the total entropy generated is the sum of individual contributions. Each source can be quantified and addressed independently in an optimisation design.

**Connection with exergy**: destroyed exergy is obtained by multiplying the reference ambient temperature by [[S_gen]]. This converts [[S_gen]] into a quantity directly translatable to euros or watts lost in engineering.

> [!WARNING]
> Exergy destroyed by irreversibility can **never** be recovered. Unlike energy (which is conserved), exergy is destroyed in every irreversible process and that destruction is permanent.

**Temporal asymmetry**: the condition [[DeltaS_univ]] > 0 introduces a temporal direction in macroscopic physics. While Newton's and Maxwell's laws are symmetric in time, the second law breaks that symmetry: it defines a "before" (lower universe entropy) and an "after" (higher universe entropy).

**Reversible limit as reference**: the reversible process ([[DeltaS_univ]] = 0) is the unattainable asymptotic limit that serves as theoretical reference. Every second-law efficiency is defined as the ratio between actual performance and reversible performance. Second-law efficiency is always < 1 for real processes.

**Universal sources of irreversibility**: every finite difference in temperature, pressure, or chemical potential generates entropy when spontaneous flow is allowed. The magnitude of generation is proportional to the "product of flow times generalised force": for heat, flow × (1/T_cold − 1/T_hot); for mass, flow × Δ(μ/T); for momentum, flow × Δ(v/T).

**Irreversibility in adiabatic processes**: free expansion of an ideal gas (no Q, no W) generates entropy because the system transitions from a macrostate with fewer accessible microstates to one with more. No heat is exchanged, but the universe's entropy increases. This demonstrates that irreversibility does not require heat transfer: it only requires that the process be spontaneous toward a new equilibrium.

The quantity [[DeltaS_univ]] is extensive: doubling the system size doubles the entropy generated for the same type of process. This allows defining specific generation rates (per unit mass or per unit time) useful in industrial equipment design.

## Deep physical interpretation

Irreversibility is the macroscopic manifestation of the statistical tendency of systems to evolve toward more probable macrostates. A macrostate with more compatible microstates is statistically overwhelming compared to one with fewer. The "force" that pushes the system toward equilibrium is not a force in the Newtonian sense, but a consequence of particle combinatorics.

[[DeltaS_univ]] > 0 means the universe has transitioned to a macrostate with exponentially more accessible microstates. The probability of the process spontaneously reversing is so absurdly low that it is practically zero for any macroscopic system.

> [!NOTE]
> For a single joule transferred across a 10 K thermal jump near 300 K, [[DeltaS_univ]] is about 0.11 J/K. The probability of spontaneous reversal is essentially zero.

Generated entropy is not "lost energy" (energy is always conserved). It is **lost energy quality**: the same amount of energy exists after the process, but distributed in a less useful way for producing work.

## Order of magnitude

- **Transfer of 1 kJ** between bodies with ΔT = 10 K at ≈ 300 K: [[S_gen]] ≈ 0.11 J/K.
- **Transfer of 1 kJ** between bodies with ΔT = 100 K (400 K → 300 K): [[S_gen]] ≈ 0.83 J/K.
- **Free expansion** of 1 mol of ideal gas to double volume: [[DeltaS_univ]] = R·ln(2) ≈ 5.76 J/(mol·K).
- **Mixing water** at 80 °C with water at 20 °C (equal masses, no reservoir): [[DeltaS_univ]] ≈ 15–30 J/K (depends on mass).
- **Combustion** of 1 mol of methane at 298 K: [[DeltaS_univ]] ≈ 2700 J/K — highly irreversible.

If a calculation produces [[DeltaS_univ]] < 0, there is a definite error. If it produces [[DeltaS_univ]] = 0 exactly for a real process (with friction or gradients), there is also an error.

> [!WARNING]
> A [[DeltaS_univ]] of exactly zero is only possible at the ideal reversible limit. Any real process has [[DeltaS_univ]] > 0, however small.

## Personalized resolution method

1. **Define the thermodynamic universe**: identify what is "system" and what is "surroundings". Everything that interacts thermally with the system during the process is part of the universe.
2. **Calculate [[DeltaS_sis]]**: as a state function, via a reversible path between the same states i and f. Use entropy change formulas (isothermal, heating, ideal gas) as appropriate.
3. **Calculate [[DeltaS_ent]]**: for a reservoir at constant T, [[DeltaS_ent]] = −[[Q_sis]]/[[T_ent]]. Use the **real** heat of the process, not Q_rev.
4. **Sum**: [[DeltaS_univ]] = [[DeltaS_sis]] + [[DeltaS_ent]].
5. **Verify second law**: [[DeltaS_univ]] ≥ 0. If negative, look for errors.
6. **Interpret**: [[DeltaS_univ]] > 0 confirms irreversibility. The magnitude indicates how much exergy was destroyed.

## Special cases and extended example

**Case 1: Free expansion** (ideal gas, vacuum). The gas expands spontaneously without exchanging heat or work. [[Q_sis]] = 0, therefore [[DeltaS_ent]] = 0. But [[DeltaS_sis]] is positive when calculated through the equivalent reversible isothermal path. Result: [[DeltaS_univ]] > 0. The process is irreversible even though there is no heat.

**Case 2: Heat conduction** between two blocks. Block A at 500 K and Block B at 300 K are placed in contact until equilibrium (400 K, equal masses and heat capacities). The hot block contribution is negative and the cold block contribution is positive with larger absolute value. Since the system is isolated, [[DeltaS_ent]] = 0 and [[DeltaS_univ]] = [[DeltaS_sis]] > 0. The irreversibility comes from the finite T gradient between both blocks.

> [!TIP]
> In the case of two blocks in contact without an external surroundings, the "universe" is just the two blocks together. There is no separate "surroundings". [[DeltaS_univ]] = total entropy change of both blocks.

## Real student questions

**Why is the reversible process unattainable?**
Because it requires infinitesimal gradients (ΔT → 0, ΔP → 0), which implies infinite time to complete any finite transfer. In practice, there are always finite gradients, friction, and limited times that generate irreversibility.

**Can a system gain entropy in an irreversible process without receiving heat?**
Yes. Free expansion of an ideal gas involves no heat or work, but the system gains entropy because accessible microstates increase. Irreversibility comes from the spontaneous transition to a new equilibrium, not necessarily from heat flow.

**How do I know if the [[DeltaS_sis]] I calculated is correct for an irreversible process?**
The trick is that [[DeltaS_sis]] does not depend on the actual process (it is a state function). It is calculated by inventing a reversible path between the same states i and f. If the system goes from (T_i, V_i) to (T_f, V_f), [[DeltaS_sis]] is calculated with standard formulas regardless of how it actually got there.

**What happens if there are several sources of irreversibility simultaneously?**
They add up. If there is friction and a thermal gradient, the total entropy generated is the sum of that generated by friction and that generated by the gradient. In industrial design, they are identified and quantified separately to know where to invest in improvements.

## Cross-cutting connections and study paths

This leaf connects directly with:
- [Entropy change](leaf:fisica-clasica/termodinamica/entropia-y-segunda-ley/entropia/variacion-de-entropia): provides the calculation tools for [[DeltaS_sis]].
- [Entropy definition](leaf:fisica-clasica/termodinamica/entropia-y-segunda-ley/entropia/definicion): theoretical foundation of why [[DeltaS_sis]] is a state function.
- Carnot cycle: the case where [[DeltaS_univ]] = 0 (ideal reversible engine).
- Exergy analysis: direct translation of [[S_gen]] to lost work using the reference ambient temperature.

Understanding irreversibility is a prerequisite for designing any efficient energy system: from a power plant to a domestic refrigerator.

## Final synthesis

An irreversible process is identified and quantified by [[DeltaS_univ]] > 0. The universe's entropy always increases in real processes. Sources of irreversibility (thermal gradients, friction, mixing) are additive and quantifiable. Destroyed exergy is T_0 · [[S_gen]], providing the direct connection between thermodynamic irreversibility and economic loss of useful energy. The reversible process ([[DeltaS_univ]] = 0) is the ideal limit that establishes maximum theoretical efficiency.
