# Gibbs Free Energy

## Conceptual context

Classical thermodynamics built its spontaneity criteria progressively. The first attempt identified exothermic processes as spontaneous, but experimental reality revealed perfectly spontaneous endothermic processes —dissolution of many salts in water, melting of ice at room temperature— that contradicted that intuition. Entropy, introduced by Clausius, resolved the problem from the perspective of the universe: every spontaneous process increases the total entropy. However, dealing with the entropy of the entire universe is operationally cumbersome when interest focuses on the system under typical laboratory conditions: **constant pressure and temperature**.

Josiah Willard Gibbs formulated in the 1870s a thermodynamic potential that encapsulates both contributions —energetic and entropic— in a single quantity referenced exclusively to the system. The result was [[DeltaG]], the change in Gibbs free energy, a clean and operational criterion that today guides chemical engineering, biochemistry and materials science.

This leaf studies [[DeltaG]] as the **universal arbiter of spontaneity** at constant pressure and temperature: how it is calculated, what its sign means, which factors control it, and how temperature can reverse the direction of spontaneity.

## 🟢 Essential level

Imagine two forces competing for the fate of any physical or chemical process. The first is the **energetic drive**: systems tend to release energy, to decrease in enthalpy, just as a ball tends to roll downhill. The second is the **entropic drive**: systems tend toward the greatest possible dispersal, toward more disorder, just as perfumes spread through a room.

[[DeltaG]] measures which drive wins under real laboratory conditions. If the algebraic sum of the two drives favors evolution, [[DeltaG]] is negative and the process occurs on its own. If the sum opposes evolution, [[DeltaG]] is positive and the process needs external assistance.

What is extraordinary is that temperature [[T]] acts as referee between the two drives: at low [[T]] the enthalpy [[DeltaH]] usually dominates; at high [[T]] the entropy [[DeltaS]] may dominate. This means certain processes are spontaneous at low temperature but not at high temperature, and vice versa. The temperature at which that regime change occurs has a specific name: **inversion temperature** [[T_inv]].

## 🔵 Formal level

The complete definition of Gibbs free energy in terms of state functions is:

{{f:definicion_gibbs}}

This expression establishes that [[DeltaG]] is the difference between the enthalpy change [[DeltaH]] and the product of the absolute temperature [[T]] by the entropy change [[DeltaS]]. All three parameters are state functions, so [[DeltaG]] is also a state function: its value depends only on the initial and final states of the process, not on the path taken.

The derived spontaneity criterion is direct and powerful:

- **Negative [[DeltaG]]**: the process is spontaneous at constant P and T; it releases a maximum of useful work equal to the absolute value of [[DeltaG]].
- **Zero [[DeltaG]]**: the system is at thermodynamic equilibrium; it neither advances nor retreats spontaneously.
- **Positive [[DeltaG]]**: the process is not spontaneous; it requires a minimum external work input equal to [[DeltaG]].

The four-case table according to the signs of [[DeltaH]] and [[DeltaS]] reveals the richness of the criterion:

| Case | [[DeltaH]] | [[DeltaS]] | Spontaneity |
|------|---------|---------|-------------|
| Always spontaneous | negative | positive | For any [[T]] |
| Never spontaneous | positive | negative | Never |
| Spontaneous at low T | negative | negative | Only if [[T]] is less than [[T_inv]] |
| Spontaneous at high T | positive | positive | Only if [[T]] exceeds [[T_inv]] |

The inversion temperature is obtained by setting [[DeltaG]] to zero:

{{f:temperatura_inversion}}

When [[DeltaH]] and [[DeltaS]] have the same sign, a real positive [[T_inv]] exists that separates the two regimes. When they have opposite signs, no crossing exists and the process is always or never spontaneous.

## 🔴 Structural level

The Gibbs equation reveals that [[DeltaG]] is a **linear function of temperature** when [[DeltaH]] and [[DeltaS]] are considered independent of [[T]]. The graph of [[DeltaG]] versus [[T]] is a straight line whose slope is exactly minus [[DeltaS]] and whose intercept (extrapolation to zero [[T]]) is [[DeltaH]]. This directly connects the geometry of the graph with the physical properties of the process.

This linearity has deep implications. If the line has a negative slope (process with positive [[DeltaS]]), [[DeltaG]] decreases as temperature increases: the process becomes progressively more spontaneous with heat. If the slope is positive (negative [[DeltaS]]), spontaneity deteriorates with heating. In both cases, **the validity domain of this linearity is limited** by the constancy of [[DeltaH]] and [[DeltaS]] with temperature, an approximation that fails when the system crosses phase transitions or when the [[T]] range is very wide.

Beyond the spontaneity criterion, [[DeltaG]] has a deep thermodynamic interpretation as the **maximum non-expansion work** that can be obtained from a process at constant P and T. In biological systems, this is the work that metabolism performs to maintain cellular order against the tendency toward degradation. In electrochemical cells, [[DeltaG]] is the maximum potential difference multiplied by the transferred charge. The connection between [[DeltaG]] and the chemical equilibrium constant is established through statistical thermodynamics: a process with very negative [[DeltaG]] has a very large equilibrium constant, indicating massive favorability of the products.

The constant [[DeltaH]] and [[DeltaS]] approximation fails when the temperature variation exceeds 30–40 % of the absolute value in kelvin. Kirchhoff's law provides significant corrections in that regime. In mixtures, [[DeltaG]] must be calculated from partial chemical potentials.

> [!NOTE]
> The distinction between spontaneous and fast processes is crucial: negative [[DeltaG]] indicates the process **can** occur, not that it **will** occur quickly. Kinetics, governed by activation energy, determines the rate; thermodynamics, via [[DeltaG]], determines the direction.

> [!WARNING]
> At temperatures above 2000 K, the constancy of [[DeltaH]] and [[DeltaS]] is a poor approximation. Heat capacities change substantially and molecular dissociation may occur, significantly altering the Gibbs balance.

## Deep physical interpretation

The [[T]]·[[DeltaS]] term in the Gibbs equation is not merely a mathematical correction. It represents the heat that the surroundings transfer to the system reversibly, that is, the energy exchange that the surroundings can make without themselves being degraded. The difference between [[DeltaH]] and that maximum exchange with the surroundings is precisely the energy left available as useful work: that is [[DeltaG]].

This interpretation makes clear why [[DeltaG]] is the correct criterion for systems at constant P and T: it does not ask how much total energy changes, but how much remains free to do work, after subtracting the part that the surroundings inevitably claim as entropic heat. A process that releases much heat but also creates much order (destroys entropy) does not have as much useful work available as it might appear.

The case of spontaneous endothermic processes illustrates this reasoning well. Dissolution of salt in water absorbs heat (positive [[DeltaH]]) but generates a large increase in disorder (positive [[DeltaS]]). At room temperature, the [[T]]·[[DeltaS]] term exceeds [[DeltaH]] and [[DeltaG]] is negative: dissolution is spontaneous even though it cools the solution. The system "buys" its spontaneity by paying with heat from the surroundings and generating disorder.

## Order of magnitude

In typical combustion reactions, [[DeltaG]] can reach values of several hundred kilojoules per mole: combustion of methane releases approximately 818 kJ/mol of Gibbs free energy at 298 K. In biochemical reactions such as ATP hydrolysis, [[DeltaG]] is around 30 kJ/mol, sufficient to drive complex molecular syntheses.

For physical processes such as melting of ice at 273 K, [[DeltaG]] is practically zero (the system is at equilibrium), while at 280 K [[DeltaG]] is slightly negative, on the order of tenths of a kilojoule per mole. A [[DeltaG]] with magnitude below 1 kJ/mol indicates a very sensitive equilibrium to small perturbations of temperature or pressure. Values above 100 kJ/mol indicate thermodynamically very favorable processes.

> [!TIP]
> If a calculation produces [[DeltaG]] in the gigajoule range, check whether [[DeltaH]] and [[DeltaS]] are in joules or kilojoules. A unit mismatch is the most frequent error and produces results a thousand times larger than expected.

## Personalized resolution method

To apply the Gibbs criterion safely, follow this sequence:

1. **Identify the process and system**: verify that constant P and T conditions apply.
2. **Obtain [[DeltaH]] and [[DeltaS]]**: from thermodynamic tables, calorimetry or theoretical calculation; verify that units are consistent (J and J/K, or kJ and kJ/K, never mixed).
3. **Express [[T]] in kelvin**: always convert from Celsius by adding 273.15.
4. **Compute [[DeltaG]]**: apply the Gibbs definition by subtracting the entropy term from the enthalpy term.
5. **Read the sign**: negative means spontaneous; positive means non-spontaneous; zero means equilibrium.
6. **Compute [[T_inv]] if applicable**: if [[DeltaH]] and [[DeltaS]] have the same sign, an inversion temperature exists marking the regime change.
7. **Verify coherence**: check that the four-sign-combination table is consistent with the result.

## Special cases and extended example

**Process with both drives favorable**: If [[DeltaH]] is negative and [[DeltaS]] is positive, [[DeltaG]] is negative for any positive [[T]]. The process is always spontaneous. A classic example is combustion in excess oxygen: exothermic and with an increase in the number of gaseous molecules. No real [[T_inv]] exists in this case.

**Process with both drives unfavorable**: If [[DeltaH]] is positive and [[DeltaS]] is negative, [[DeltaG]] is positive for any positive temperature. The process is never spontaneous in the forward direction; it only proceeds in the reverse direction. Synthesis of ozone from molecular oxygen under normal conditions falls in this category.

**Process with competing drives**: When [[DeltaH]] and [[DeltaS]] have the same sign, [[T_inv]] separates two regimes. For example, evaporation of water has positive [[DeltaH]] and positive [[DeltaS]]. Below 373 K (at atmospheric pressure), [[DeltaG]] is positive: water does not spontaneously evaporate. Exactly at 373 K, [[DeltaG]] is zero: water and vapor coexist at equilibrium. Above 373 K, [[DeltaG]] is negative: evaporation is spontaneous.

## Real student questions

**Why can an exothermic process be non-spontaneous?**
If [[DeltaS]] is negative and sufficiently large in absolute value, the [[T]]·[[DeltaS]] term can exceed [[DeltaH]] and make [[DeltaG]] positive. The process loses spontaneity because it destroys too much disorder, even though it releases energy.

**What exactly happens when [[DeltaG]] equals zero?**
The system is in dynamic equilibrium: the rate of the forward reaction equals the rate of the reverse reaction. There is no net change in any macroscopic property. Any small perturbation will shift the system toward equilibrium, not away from it.

**Can [[T_inv]] be negative?**
No, a negative temperature in kelvin is physically impossible. If the calculation produces a negative [[T_inv]], it means [[DeltaH]] and [[DeltaS]] have opposite signs; in that case no inversion threshold exists and the process is always or never spontaneous.

**How does pressure affect [[DeltaG]]?**
In the standard model of this leaf, P and T are kept constant. However, [[DeltaG]] also depends on pressure through the molar volume of the system. For gases, the pressure term can be significant; that extension corresponds to the chemical potential and the study of mixtures.

## Cross-cutting connections and study paths

[[DeltaG]] connects directly with the chemical potential of mixtures: the spontaneity criterion for systems of variable composition is expressed as a variation in the chemical potential, which is the partial derivative of [[G]] with respect to the amount of substance. The leaf [Chemical potential](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/potencial-quimico) extends this approach.

Enthalpy [[DeltaH]] has its own leaf: [Enthalpy](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/entalpia), where Hess cycles and calorimetry are studied. The Helmholtz free energy, the sister of Gibbs for constant-volume conditions, is in [Helmholtz Free Energy](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/energia-libre-de-helmholtz).

The connection with the equilibrium constant is established in statistical thermodynamics: the logarithm of the equilibrium constant is proportional to minus [[DeltaG]] divided by [[T]] and Boltzmann's constant.

## Final synthesis

[[DeltaG]] is the thermodynamic judge of processes at constant pressure and temperature: its sign dictates the direction of spontaneous evolution, its magnitude quantifies the maximum available useful work, and its linear dependence on [[T]] allows precise prediction of the exact temperature —[[T_inv]]— at which any process changes regime. Mastering this criterion means mastering the direction of processes in the vast majority of real physical and chemical situations.
