# Helmholtz Free Energy

## Conceptual context

Classical thermodynamics offered spontaneity criteria based on heat released or on the increase in the universe's entropy. However, many real experiments are performed in **rigid containers** where volume cannot change: bomb calorimeters, sealed autoclaves, high-pressure cells with immovable walls, or simply a system confined in a closed vessel. Under these conditions, pressure does not necessarily remain constant, and the Gibbs criterion — designed for constant pressure and temperature — is no longer the direct arbiter.

Hermann von Helmholtz formulated in 1882 a thermodynamic potential that encapsulates the energetic and entropic contributions referred to the system at **constant volume and temperature**. The result is [[DeltaA]], the change in Helmholtz free energy, which determines whether a process occurs spontaneously when the container prevents any expansion work against the surroundings.

This leaf studies [[DeltaA]] as the **spontaneity criterion in confined systems**: how it is calculated from [[DeltaU]] and [[DeltaS]], what its sign means, how temperature [[T]] can reverse the process direction, and what maximum non-expansion work can be extracted.

## 🟢 Essential level

Imagine a gas trapped in a cylinder with a **locked piston**: it cannot expand or contract. If a chemical reaction or phase change occurs inside that vessel, the system cannot perform mechanical expansion work against the atmosphere. What can occur is heat exchange with a thermostatted environment and, in some cases, electrical or chemical non-expansion work.

[[DeltaA]] measures whether that confined process occurs on its own. It combines two competing drives: the **energetic drive** (tendency to release internal energy, represented by [[DeltaU]]) and the **entropic drive** (tendency toward greater dispersal, represented by [[DeltaS]] scaled by [[T]]). If the balance favors evolution, [[DeltaA]] is negative and the process is spontaneous. If it opposes it, [[DeltaA]] is positive and external work is required.

Temperature [[T]] acts as arbiter: at low [[T]], [[DeltaU]] usually dominates; at high [[T]], the entropic term may dominate. When both drives compete with the same sign, an **inversion temperature** [[T_inv]] separates the two regimes.

## 🔵 Formal level

The complete definition of Helmholtz free energy in terms of state functions is:

{{f:definicion_helmholtz}}

This expression establishes that [[DeltaA]] is the difference between the internal energy change [[DeltaU]] and the product of absolute temperature [[T]] by the entropy change [[DeltaS]]. All three parameters are state functions, so [[DeltaA]] is also one.

The derived spontaneity criterion is direct:

- **Negative [[DeltaA]]**: the process is spontaneous at constant V and T; it releases maximum non-expansion work equal to the absolute value of [[DeltaA]].
- **Zero [[DeltaA]]**: the system is at thermodynamic equilibrium.
- **Positive [[DeltaA]]**: the process is not spontaneous; it requires a minimum external work input equal to [[DeltaA]].

The table of four cases according to the sign of [[DeltaU]] and [[DeltaS]]:

| Case | [[DeltaU]] | [[DeltaS]] | Spontaneity |
|------|---------|---------|-------------|
| Always spontaneous | negative | positive | For any [[T]] |
| Never spontaneous | positive | negative | Never |
| Spontaneous at low T | negative | negative | Only if [[T]] is below [[T_inv]] |
| Spontaneous at high T | positive | positive | Only if [[T]] exceeds [[T_inv]] |

The inversion temperature is obtained by imposing zero [[DeltaA]]:

{{f:temperatura_inversion}}

When [[DeltaU]] and [[DeltaS]] have the same sign, a real positive threshold [[T_inv]] exists. When they have opposite signs, no crossing exists and the process is always or never spontaneous.

## 🔴 Structural level

The Helmholtz equation reveals that [[DeltaA]] is a **linear function of temperature** when [[DeltaU]] and [[DeltaS]] are considered independent of [[T]]. The graph of [[DeltaA]] versus [[T]] is a straight line whose slope is exactly minus [[DeltaS]] and whose intercept at the origin (extrapolation to zero [[T]]) is [[DeltaU]]. This geometry directly connects the graph with the physical properties of the confined process.

This linearity has clear limits. If the system crosses phase transitions or if the [[T]] range is very wide, [[DeltaU]] and [[DeltaS]] cease to be constant and the line curves. In multicomponent mixtures inside a rigid vessel, [[DeltaA]] must be calculated with partial chemical potentials, not simple sums of pure properties.

The Helmholtz free energy [[A]] and its change [[DeltaA]] have a deep interpretation: [[DeltaA]] is the **maximum non-expansion work** extractable at constant V and T. In a sealed electrochemical cell, in a biological molecular motor, or in an adsorption process in a rigid porous material, [[DeltaA]] quantifies the energy available for work that does not involve changing the system volume.

> [!NOTE]
> The distinction between Helmholtz and Gibbs is operational, not merely formal: use [[DeltaA]] when volume is fixed by the container; use Gibbs free energy (ΔG) when the surroundings pressure remains constant. Confusing validity conditions is the most frequent conceptual error in applied thermodynamics.

> [!WARNING]
> At temperatures above 2000 K, the constancy of [[DeltaU]] and [[DeltaS]] is a poor approximation. Heat capacities change significantly and molecular dissociations may occur that alter the Helmholtz balance substantially.

## Deep physical interpretation

The [[T]]·[[DeltaS]] term in the Helmholtz equation represents the fraction of internal energy the system must "deliver" to the surroundings as reversible heat to maintain constant temperature while reorganizing its molecular structure. The difference between [[DeltaU]] and that maximum exchange is exactly the energy remaining available as non-expansion work: that is [[DeltaA]].

This interpretation makes clear why [[DeltaA]] is the correct criterion for confined systems: it does not ask how much total energy changes, but how much remains free for work without changing volume. A process that releases much internal energy but also destroys much entropy (creates order) may have little useful work available.

Vapor condensation in a rigid vessel illustrates this reasoning well. The liquid-vapor transition reduces molecular disorder (negative [[DeltaS]]) but releases internal energy (negative [[DeltaU]] in the condensation direction). At low temperature [[DeltaU]] dominates and condensation is spontaneous; at high temperature the entropic term dominates and evaporation prevails.

## Order of magnitude

In ice melting at 273 K in a rigid container, [[DeltaA]] is practically zero (phase equilibrium). At 250 K, [[DeltaA]] is slightly negative, on the order of a few kJ/mol, indicating that solidification is spontaneous. In isomerization reactions in confined liquid phase, [[DeltaA]] typically ranges between minus 50 kJ/mol and plus 50 kJ/mol.

For gas adsorption processes in rigid porous materials at 298 K, negative [[DeltaA]] of about 20–40 kJ/mol indicates spontaneous adsorption. A [[DeltaA]] of magnitude below 1 kJ/mol indicates equilibrium very sensitive to small temperature perturbations. Values above 100 kJ/mol indicate thermodynamically very favorable processes in the confined vessel.

> [!TIP]
> If a calculation produces [[DeltaA]] on the order of gigajoules, verify whether [[DeltaU]] and [[DeltaS]] are in joules or kilojoules. A unit mismatch is the most frequent error and produces results a thousand times larger than expected.

## Personalized resolution method

To apply the Helmholtz criterion safely, follow this sequence:

1. **Identify the process and system**: determine whether work is at constant V and T (rigid thermostatted container).
2. **Obtain [[DeltaU]] and [[DeltaS]]**: from thermodynamic tables, calorimetry, or theoretical calculation; verify coherent units.
3. **Express [[T]] in kelvin**: always convert from Celsius by adding 273.15.
4. **Calculate [[DeltaA]]**: apply the Helmholtz definition by subtracting the entropic term from the energetic one.
5. **Read the sign**: negative implies spontaneous process; positive implies non-spontaneous; zero implies equilibrium.
6. **Calculate [[T_inv]] if applicable**: if [[DeltaU]] and [[DeltaS]] have the same sign, an inversion temperature exists.
7. **Verify coherence**: check that the case table is consistent with the result obtained.

## Special cases and extended example

**Process with both drives favorable**: If [[DeltaU]] is negative and [[DeltaS]] is positive, [[DeltaA]] is negative for any positive [[T]]. Metal oxidation in a sealed vessel with entropy increase from gas formation is an example. No real [[T_inv]] exists.

**Process with both drives unfavorable**: If [[DeltaU]] is positive and [[DeltaS]] is negative, [[DeltaA]] is positive for any positive temperature. Synthesis of a perfect crystal from a disordered liquid in a rigid container falls in this category.

**Process with competing drives**: When [[DeltaU]] and [[DeltaS]] have the same sign, [[T_inv]] separates two regimes. Evaporation of a liquid confined in a partially filled rigid vessel has positive [[DeltaU]] and positive [[DeltaS]]: below [[T_inv]] condensation dominates; above it, evaporation is spontaneous.

## Real student questions

**Why not always use Gibbs instead of Helmholtz?**
Because Gibbs assumes constant surroundings pressure. In a rigid vessel the internal pressure changes during the process and expansion work is not available. [[DeltaA]] is the correct criterion when volume is mechanically fixed.

**What exactly happens when [[DeltaA]] is zero?**
The system is in dynamic equilibrium within the confined vessel. Any small perturbation will displace the system toward equilibrium, not away from it.

**Can [[T_inv]] be negative?**
No, negative temperature in kelvin is physically impossible. If the calculation yields negative [[T_inv]], it means [[DeltaU]] and [[DeltaS]] have opposite signs; no inversion threshold exists.

**How does [[DeltaA]] relate to maximum work?**
The maximum non-expansion work extractable from a reversible process at constant V and T equals the absolute value of [[DeltaA]] when it is negative. The negative sign of [[DeltaA]] indicates the system can deliver that energy as useful work.

## Cross-cutting connections and study paths

[[DeltaA]] connects directly with internal energy [[DeltaU]]: the leaf [Internal energy](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/energia-interna) develops the first law and transformations at constant volume. Entropy [[DeltaS]] is studied in [Entropy definition](leaf:fisica-clasica/termodinamica/entropia-y-segunda-ley/entropia/definicion).

Gibbs free energy, the Helmholtz sibling for constant pressure conditions, is in [Gibbs free energy](leaf:fisica-clasica/termodinamica/potenciales-termodinamicos/energia-libre-de-gibbs). Statistical thermodynamics connects [[DeltaA]] with the canonical partition function through the fundamental relation between the Helmholtz potential and the logarithm of the partition function.

## Final synthesis

[[DeltaA]] is the operational spontaneity criterion when the system cannot change its volume: it combines the energetic drive of [[DeltaU]] with the entropic one of [[T]]·[[DeltaS]] in a single evaluable magnitude. Its sign determines the process direction; its magnitude quantifies the maximum non-expansion work available. Temperature [[T_inv]] marks the threshold where the competition between energy and entropy reverses the thermodynamic verdict.
