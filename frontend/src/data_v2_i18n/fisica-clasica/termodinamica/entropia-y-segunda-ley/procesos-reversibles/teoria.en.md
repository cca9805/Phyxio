# Reversible processes

## Conceptual context

The second law of thermodynamics establishes that natural processes generate entropy in the universe: [[DeltaS_univ]] > 0 for every real process. However, there exists an ideal limit where the process generates no net entropy: [[DeltaS_univ]] = 0. Such processes are called **reversible** and represent the theoretical reference against which every real process is compared.

A reversible process is one that, once completed, can be undone exactly along the same path, returning both system and surroundings to their initial states without leaving any trace in the universe. It destroys no exergy, degrades no energy quality, and defines the maximum achievable efficiency of any heat engine.

Understanding reversible processes is essential because they provide the theoretical ceiling: the Carnot efficiency [[eta_Carnot]], the maximum extractable work, and the minimum heat that must be released to the cold reservoir. Every second-law analysis is based on comparing the real with the reversible.

## 🟢 Essential level

A **reversible process** is an ideal process that generates no entropy in the universe. The defining condition is:

The defining condition is that the universe entropy balance is zero: system and surroundings compensate each other exactly.

This means that whatever entropy the system gains, the surroundings lose exactly, and vice versa. There is no net energy degradation: all energy entering as heat can, in principle, be fully recovered as work.

> [!TIP]
> Think of a reversible process as one that can be "rewound" without anything changing in the universe. If you play a video forward and then backward, everything returns exactly as it was. In an irreversible process, rewinding would leave something permanently changed.

The conditions for a process to be reversible are:
- **No friction**: no mechanical dissipation at any point.
- **No finite temperature gradients**: heat is transferred with infinitesimal T differences between system and surroundings.
- **No finite pressure gradients**: expansion or compression occurs with infinitesimal P differences.
- **No spontaneous mixing**: no free diffusion of substances.
- **Quasi-static process**: slow enough for the system to be in internal equilibrium at every instant.

In practice, no real process meets all these conditions. The reversible process is an **ideal limit** useful for calculating maximum efficiencies and entropies.

## 🔵 Formal level

The reversibility condition is formalised as:

{{f:condicion_reversibilidad}}

For a reversible process with heat exchange with a reservoir at temperature [[T_caliente]] or [[T_frio]], the reversible heat [[Q_rev]] and entropy change are related by Clausius's definition: [[DeltaS_sis]] = [[Q_rev]] / T (for isothermal processes) or [[DeltaS_sis]] = integral of dQ_rev / T (for non-isothermal processes).

> [!NOTE]
> The condition [[DeltaS_univ]] = 0 does not imply [[DeltaS_sis]] = 0. The system can gain or lose entropy; what matters is that the surroundings compensate exactly: [[DeltaS_ent]] = −[[DeltaS_sis]].

The maximum efficiency of a reversible cyclic heat engine operating between two reservoirs is obtained directly from [[DeltaS_univ]] = 0:

{{f:eficiencia_carnot}}

This formula shows that [[eta_Carnot]] depends **only** on the absolute temperatures of the reservoirs, not on the working fluid or mechanical design. For [[T_caliente]] = 600 K and [[T_frio]] = 300 K, [[eta_Carnot]] = 1 − 300/600 = 0.50, meaning at most 50% of absorbed heat can be converted to work.

The Carnot cycle is the quintessential reversible cycle: it consists of two isotherms (at [[T_caliente]] and [[T_frio]]) and two reversible adiabats (isentropic). During the isotherms, the system exchanges heat with the reservoirs at infinitesimal T gradients. During the adiabats, there is no heat exchange and the system entropy remains constant.

## 🔴 Structural level

The structure of the reversibility concept reveals fundamental properties of thermodynamics:

**Local time symmetry**: a reversible process is the only one compatible with the time symmetry of microscopic equations. At the reversible limit, macroscopic laws do not distinguish between "before" and "after." It is irreversibility that breaks this symmetry by introducing a thermodynamic arrow of time.

**Universal upper bound**: Carnot's theorem establishes that no heat engine operating between two reservoirs can have efficiency greater than [[eta_Carnot]]. Every engine with lower efficiency operates irreversibly. Every engine with supposedly higher efficiency contains an error. This result is independent of working fluid, mechanical design, and materials.

> [!WARNING]
> If a calculation gives a real efficiency greater than [[eta_Carnot]] for the same reservoirs, there is a definite error. There is no exception to this rule for cyclic engines between two reservoirs.

**Equivalence of reversible processes**: all reversible processes between the same states produce the same system entropy change, because [[DeltaS_sis]] is a state function. This allows using any reversible path to calculate [[DeltaS_sis]], regardless of how the real process occurs.

**Reversibility as a state-function property**: the reversibility condition does not depend on the specific path, but on the path being quasi-static and dissipation-free. Any reversible path between the same states produces [[DeltaS_univ]] = 0.

**Reversible adiabatic = isentropic**: in a reversible adiabatic process, [[Q_rev]] = 0, therefore [[DeltaS_sis]] = 0 and [[DeltaS_ent]] = 0. The system maintains constant entropy. This is the basis of ideal compressions and expansions in turbines and compressors.

**Reversible cycle as reference**: any real thermodynamic cycle is evaluated by comparing its efficiency with Carnot's. The second-law efficiency is defined as the ratio of real efficiency to [[eta_Carnot]]: it is always less than 1 and quantifies how much is lost to irreversibilities.

## Deep physical interpretation

Reversibility is the condition under which no thermodynamic information is destroyed. In a reversible process, each system microstate can be traced back to its original state: no traceability is lost. In an irreversible process, microstates mix irrecoverably, destroying information and generating entropy.

From the statistical perspective, [[DeltaS_univ]] = 0 means the total number of accessible microstates of the universe does not change. The system may redistribute microstates internally, but the universe as a whole retains the same combinatorial multiplicity.

> [!NOTE]
> Reversibility does not mean "nothing changes." The system can change dramatically (expand, heat up, change phase). What does not change is the total entropy of the universe.

The connection with exergy is direct: in a reversible process, destroyed exergy is zero (because destroyed exergy is [[T_frio]] · [[DeltaS_univ]], and [[DeltaS_univ]] = 0). All work potential is conserved. In an irreversible process, part of that potential is irreversibly destroyed.

## Order of magnitude

- **Reversible isothermal expansion** (ideal gas, 1 mol, volume doubling at 300 K): [[DeltaS_sis]] = R·ln(2) ≈ 5.76 J/(mol·K), [[DeltaS_ent]] = −5.76 J/(mol·K), [[DeltaS_univ]] = 0.
- **Carnot cycle with moderate reservoirs**: [[eta_Carnot]] is around 50%; of every 1000 J absorbed, at most about 500 J can become work.
- **Carnot cycle with a very hot source**: [[eta_Carnot]] can approach 80%. The larger thermal separation allows greater reversible efficiency.
- **Ideal isentropic compression** (air, pressure ratio 10:1): air heats from 300 K to ≈ 579 K without exchanging heat. [[DeltaS_sis]] = 0.

If a calculation produces [[DeltaS_univ]] > 0 for a process described as reversible, the process is not truly reversible or there is an error.

> [!WARNING]
> [[eta_Carnot]] = 1 (100%) would require [[T_frio]] = 0 K, which is unattainable by the third law. No heat engine with 100% efficiency exists.

## Personalized resolution method

1. **Identify the process type**: is it isothermal, adiabatic, isobaric? Is it a complete cycle?
2. **Verify reversibility conditions**: is there friction? Are T and P gradients infinitesimal? Is it quasi-static?
3. **Calculate [[DeltaS_sis]]**: using the appropriate formula (isothermal, heating, ideal gas).
4. **Calculate [[DeltaS_ent]]**: for a reservoir, [[DeltaS_ent]] = −[[Q_rev]]/T_reservoir.
5. **Verify [[DeltaS_univ]] = 0**: if satisfied, the process is reversible.
6. **If it is a cycle**: calculate [[eta_Carnot]] = 1 − [[T_frio]]/[[T_caliente]] and compare with real efficiency.

## Special cases and extended example

**Case 1: Reversible isothermal expansion** of an ideal gas. The gas expands slowly against a frictionless piston, absorbing heat [[Q_rev]] from a reservoir at the same temperature T. [[DeltaS_sis]] = [[Q_rev]]/T > 0. [[DeltaS_ent]] = −[[Q_rev]]/T < 0. [[DeltaS_univ]] = 0. The process is reversible: it can be reversed by isothermally compressing the gas and returning all heat to the reservoir.

**Case 2: Reversible adiabatic compression** (isentropic). No heat exchange: [[Q_rev]] = 0. [[DeltaS_sis]] = 0. [[DeltaS_ent]] = 0. [[DeltaS_univ]] = 0. The system heats up from compression but its entropy does not change. This is the basis of ideal compression in engines and compressors.

> [!TIP]
> In isentropic compression, temperature rises even though there is no heat. The T increase is due to mechanical compression work, not heat transfer. Entropy does not change because the increase in internal energy is exactly compensated by the volume reduction.

**Case 3: Complete Carnot cycle**. The cycle combines a hot isotherm, a reversible cooling adiabat, a cold isotherm, and a reversible heating adiabat. At each stage, [[DeltaS_univ]] remains zero. For the complete cycle, net work is the difference between absorbed and released heat, and the efficiency is given by the Carnot relation.

## Real student questions

**If a reversible process doesn't exist in reality, why study it?**
It serves as a maximum reference. Just as the speed of light is an unattainable limit but essential for relativistic physics, the reversible process is an unattainable limit but essential for evaluating the efficiency of any real machine. Without that reference, we could not quantify how much work is lost to irreversibilities.

**Is a quasi-static process always reversible?**
No. A quasi-static process with friction is slow but irreversible: friction dissipates energy as internal heat and generates entropy. Quasi-static is a necessary but not sufficient condition for reversibility. Additionally, there must be no friction, no spontaneous mixing, and no finite gradients.

**Why does Carnot efficiency depend only on temperatures?**
Because the condition [[DeltaS_univ]] = 0 imposes a fixed relationship between absorbed and released heat: Q_C/Q_H = [[T_frio]]/[[T_caliente]]. This relationship is derived from the equality [[DeltaS_sis]](hot isotherm) + [[DeltaS_sis]](cold isotherm) = 0 in the cycle. The working fluid does not appear in the derivation.

**Can a heat pump have COP > 1?**
Yes, and it violates no law. The COP of a heat pump is Q_H/W, not an efficiency in the strict sense. The Carnot COP for a heat pump is [[T_caliente]]/([[T_caliente]] − [[T_frio]]), which can be much greater than 1. This is possible because the heat pump "moves" heat, it does not "create" it.

## Cross-cutting connections and study paths

This leaf connects directly with:
- [Irreversible processes](leaf:fisica-clasica/termodinamica/entropia-y-segunda-ley/procesos-irreversibles): where [[DeltaS_univ]] > 0 and efficiency is less than Carnot.
- [Entropy change](leaf:fisica-clasica/termodinamica/entropia-y-segunda-ley/entropia/variacion-de-entropia): calculation tools for [[DeltaS_sis]].
- [Entropy definition](leaf:fisica-clasica/termodinamica/entropia-y-segunda-ley/entropia/definicion): foundation of why [[DeltaS_sis]] is a state function.
- Exergy analysis: destroyed exergy is zero in reversible processes.

## Final synthesis

A reversible process is defined by [[DeltaS_univ]] = 0: it generates no net entropy in the universe. It requires ideal conditions (no friction, no finite gradients, quasi-static) that are unattainable in practice. Carnot efficiency [[eta_Carnot]] = 1 − [[T_frio]]/[[T_caliente]] is the direct consequence for cyclic heat engines and constitutes the universal theoretical performance ceiling. Every real process has [[DeltaS_univ]] > 0 and efficiency less than Carnot.
