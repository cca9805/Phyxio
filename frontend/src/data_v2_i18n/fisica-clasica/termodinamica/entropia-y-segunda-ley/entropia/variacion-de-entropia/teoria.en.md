# Entropy change

## Conceptual context

The Clausius definition establishes that **entropy** is a state function whose change is calculated by integrating reversible heat divided by absolute temperature. This leaf focuses on the operational step: given a specific process (isothermal, heating, ideal gas expansion), **how is [[DeltaS]] numerically calculated?**

Knowing how to calculate [[DeltaS]] is the tool that allows one to evaluate whether a process is possible, how much irreversibility it generates, and how thermal energy is redistributed between system and surroundings. Without mastering this calculation technique, the second law remains an abstract statement incapable of producing quantitative predictions.

Entropy change connects directly with heat engine efficiency, the spontaneous direction of natural processes, and degradation of useful energy. Understanding its different formulas according to process type is the first step toward complete entropy balance analysis.

## 🟢 Essential level

The **entropy change** [[DeltaS]] measures how much the energy dispersal of a system changes when it transitions from one state to another. It is a quantity that depends only on the initial and final states, never on the path taken between them.

> [!TIP]
> Think of [[DeltaS]] as an "energy disorder counter": if the system absorbs heat, [[DeltaS]] rises; if it releases heat, [[DeltaS]] drops. The lower the temperature at which the exchange occurs, the greater the impact on entropy.

For a **constant temperature** process (phase change, isothermal expansion), one simply divides the reversible heat [[Q_rev]] by the process temperature [[T]]. For **gradual heating**, temperature varies and a natural logarithm of the temperature ratio appears. For an **ideal gas** undergoing simultaneous temperature and volume changes, there are two independent contributions that add together.

The key intuition is that entropy is more sensitive to heat at low temperature: one joule of heat at 100 K produces ten times more entropy than the same joule at 1000 K.

## 🔵 Formal level

Entropy change is calculated differently depending on the process:

- **Isothermal process** (constant temperature):

{{f:variacion_entropia_isotermica}}

This expression applies directly to phase changes (melting, vaporisation) and to isothermal expansions of ideal gas. [[Q_rev]] is the heat of the equivalent reversible path and [[T]] is the constant absolute temperature in kelvin.

- **Isobaric heating** with constant heat capacity:

{{f:variacion_entropia_calentamiento}}

Here [[m]] is the mass, [[c_p]] the specific heat capacity, [[T_f]] the final temperature and [[T_i]] the initial one, both in kelvin. The natural logarithm reflects that each temperature increment contributes less entropy the hotter the system is.

- **Ideal gas** with simultaneous temperature and volume change:

{{f:variacion_entropia_gas_ideal}}

The first contribution ([[n]]·[[c_v]]·ln([[T_f]]/[[T_i]])) is the **thermal** contribution: internal energy redistribution. The second ([[n]]·[[R]]·ln([[V_f]]/[[V_i]])) is the **volumetric** contribution: spatial redistribution of molecules. Both are independent and additive because [[DeltaS]] is a state function.

> [!NOTE]
> The form using variables (T, V) employs [[c_v]]; the alternative form using variables (T, P) employs [[c_p]] and a pressure term. Both give the same [[DeltaS]] because it is a state function.

## 🔴 Structural level

The structure of the [[DeltaS]] calculation reveals deep properties of entropy:

**Segment additivity**: if a process crosses a phase change, the total [[DeltaS]] is the sum of contributions from each segment. To heat ice from −10 °C to steam at 120 °C requires five segments: ice heating, melting, liquid water heating, vaporisation, and steam heating. Each segment uses its specific formula.

**Path independence**: since [[DeltaS]] is a state function, it can be calculated along any reversible path connecting the same initial and final states. If the actual process is irreversible, one invents a fictitious reversible path with the same endpoints and calculates [[DeltaS]] along that path.

> [!WARNING]
> The actual heat measured in an irreversible process **cannot** be used to calculate [[DeltaS]]. Only [[Q_rev]] from the equivalent reversible path yields the correct value.

**Inverse thermal sensitivity**: the \(1/T\) dependence means that at low temperatures entropy is extremely sensitive to heat. Near absolute zero, any minimal heat produces enormous entropic variations, connecting with the third law of thermodynamics.

**Isentropic limit**: when [[DeltaS]] is zero in the ideal gas formula, the reversible adiabatic relation is recovered. This demonstrates that reversible adiabatic processes are exactly those for which thermal and volumetric contributions cancel each other.

**Decomposition into degrees of freedom**: the thermal contribution ([[c_v]]·ln) reflects energy redistribution among internal degrees of freedom (translation, rotation, vibration). The volumetric contribution ([[R]]·ln) reflects spatial redistribution. A gas with more degrees of freedom (higher [[c_v]]) has a proportionally larger thermal contribution.

The divergence of the result when [[T]] → 0 K or when any volume approaches zero is not a mathematical defect but a reflection of the third law: absolute zero is unattainable and no real gas can be compressed to zero volume.

## Deep physical interpretation

Entropy change is not a formal abstraction but an operational measure of **energy quality**. A positive [[DeltaS]] of the system indicates that energy has dispersed toward configurations less useful for producing work. A negative system [[DeltaS]] is only possible at the cost of an even larger positive [[DeltaS]] of the surroundings.

The **asymmetry between heat absorption and release** manifests in that heating a body from [[T_i]] to [[T_f]] produces a positive [[DeltaS]], but cooling that same body back to its original state does not "undo" the surroundings' irreversibility. The universe as a whole always advances toward greater total entropy.

> [!NOTE]
> Entropy change is the quantity that allows quantifying the thermodynamic "arrow of time": it distinguishes past from future in macroscopic processes.

## Order of magnitude

- **Melting of 1 mol of ice** at 273 K: [[DeltaS]] ≈ 22 J/(mol·K).
- **Vaporisation of 1 mol of water** at 373 K: [[DeltaS]] ≈ 109 J/(mol·K) — about 5 times more than melting.
- **Heating 1 kg of water** from 20 °C to 80 °C: [[DeltaS]] ≈ 780 J/K.
- **Free expansion** of 1 mol of ideal gas to double volume: [[DeltaS]] = [[R]]·ln(2) ≈ 5.76 J/(mol·K).

If a calculation produces [[DeltaS]] on the order of thousands of J/K for a system of a few grams without phase change, there is probably a unit error (Celsius instead of kelvin, or heat in calories without converting to joules).

> [!WARNING]
> A negative system [[DeltaS]] greater in absolute value than 500 J/K for everyday processes is suspicious and requires data verification.

## Personalized resolution method

1. **Identify the process type**: is it isothermal (phase change, isothermal expansion)? Is it heating/cooling without phase change? Is it an ideal gas with simultaneous T and V change?
2. **Select the correct formula** according to the identified process.
3. **Convert temperatures to kelvin** before substituting (add 273.15 to Celsius values).
4. **Check for intermediate phase change**: if the temperature range crosses a melting or boiling point, calculate by segments.
5. **Substitute and evaluate**: calculate the natural logarithm with precision. Remember that ln(1) = 0 and ln(2) ≈ 0.693.
6. **Check sign coherence**: heating or heat absorption → [[DeltaS]] > 0; cooling or heat release → [[DeltaS]] < 0.
7. **Verify order of magnitude**: compare with the references above to detect absurd results.

## Special cases and extended example

**Case 1: Free expansion of ideal gas**. An ideal gas expands into vacuum: there is no real heat and no external work. However, [[DeltaS]] is not zero because entropy is a state function. It is calculated by imagining a reversible path between the same states. This example demonstrates that [[DeltaS]] does not require actual heat: it depends only on the states.

**Case 2: Mixing two metal blocks at different temperatures**. A block at 500 K and another at 300 K are placed in thermal contact until they reach equilibrium (400 K if masses and capacities are equal). The hot block loses entropy: [[DeltaS]]₁ = [[m]]·[[c_p]]·ln(400/500) < 0. The cold block gains entropy: [[DeltaS]]₂ = [[m]]·[[c_p]]·ln(400/300) > 0. The total change [[DeltaS]]₁ + [[DeltaS]]₂ > 0 always: the irreversible process generates net entropy in the universe.

> [!TIP]
> In the mixing, the cold block gains more entropy than the hot one loses. The asymmetry arises from the 1/T dependence: the same amount of heat produces more entropy when absorbed at low temperature.

## Real student questions

**Why is [[Q_rev]] used and not the actual heat?**
Because [[DeltaS]] is a state function: its value depends only on the initial and final states. The reversible path is a calculation tool that guarantees the correct value. In an irreversible process, the actual measured heat is less (in absorption) than [[Q_rev]], but [[DeltaS]] has the same value because it is path-independent.

**Can the system's [[DeltaS]] be negative?**
Yes. A system can lose entropy (heat release, compression). What the second law forbids is that the **universe's** [[DeltaS]] (system + surroundings) be negative. If the system loses entropy, the surroundings gain at least that same amount.

**Why does a logarithm appear in heating but not in isothermal processes?**
Because in an isothermal process [[T]] is constant and the Clausius relation reduces to a direct division. In heating, [[T]] varies and one must integrate the reversible exchange; that is why the logarithm of the temperature ratio appears.

**What happens if there is a phase change midway through heating?**
The calculation must be split into segments: first heating to the transition temperature, then the phase change (isothermal formula with latent heat), and then continuing the heating from the new phase. Each segment contributes its own amount to the total [[DeltaS]].

## Cross-cutting connections and study paths

Calculating [[DeltaS]] is a prerequisite for:
- [Reversible processes](leaf:fisica-clasica/termodinamica/entropia-y-segunda-ley/procesos-reversibles): where [[DeltaS]]_universe = 0.
- [Irreversible processes](leaf:fisica-clasica/termodinamica/entropia-y-segunda-ley/procesos-irreversibles): where [[DeltaS]]_universe > 0.
- The Carnot cycle, which operates between isotherms (isothermal formula) and adiabatics (isentropic).

It connects backward to the [entropy definition](leaf:fisica-clasica/termodinamica/entropia-y-segunda-ley/entropia/definicion) and to [heat capacity](leaf:fisica-clasica/termodinamica/calor-y-efectos-termicos/calor-especifico), which appears as a material parameter.

The ability to calculate [[DeltaS]] by segments is essential in thermal engineering for evaluating the efficiency of heat exchangers, turbines, and compressors.

## Final synthesis

Calculating entropy change requires identifying the process type, choosing the appropriate formula, and respecting units in kelvin. The result is always a state function that quantifies the redistribution of thermal energy, independent of the actual path. Mastering the three fundamental formulas (isothermal, heating, and ideal gas) enables tackling any thermodynamic process through decomposition into elementary segments.
