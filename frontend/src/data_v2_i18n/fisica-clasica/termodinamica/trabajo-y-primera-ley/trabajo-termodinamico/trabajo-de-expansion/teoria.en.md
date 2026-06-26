## Conceptual context

Thermodynamic work [[trabajo_termodinamico]] is the form of energy transferred between a system and its surroundings when the system boundary moves. In practice this occurs when a gas pushes a piston, a balloon inflates or a piston compresses steam in a turbine. Understanding [[trabajo_termodinamico]] is the first step towards grasping the first law of thermodynamics and computing the energy balance of any process.

The key distinction from ordinary mechanical work is that [[trabajo_termodinamico]] is a **process quantity**: it characterises the transition between two states, not the state itself.

## 🟢 Essential level

When a gas expands, it pushes the confining wall and transfers energy to the surroundings. That mechanical energy exchange is [[trabajo_termodinamico]]. If the gas contracts, the surroundings transfer energy to the gas; [[trabajo_termodinamico]] is then negative in the physics convention.

The most intuitive sign rule: **expansion means positive work** (the gas "does" something), **compression means negative work** (something is done on the gas). This is the standard physics convention; in chemistry it is sometimes reversed, so always check which convention the problem uses.

The magnitude of [[trabajo_termodinamico]] depends on two factors: how much [[presion]] the gas exerts on the wall, and how much that wall moves — that is, how much the [[volumen]] changes. Greater pressure and greater [[variacion_de_volumen]] mean greater mechanical energy transfer. This intuitive logic can be visualised as the area under the curve in a pressure-versus-volume diagram, and will be formalised in the next level with precise mathematical expressions.

A key consequence is that work cannot be inferred from the initial and final states alone: the process path between them must be known. Two gas samples in identical initial and final states, taken through different processes (one isobaric, one isothermal), may exchange different amounts of [[trabajo_termodinamico]] with the surroundings. This path-dependence is what makes the p-V diagram indispensable for thermodynamic analysis.

## 🔵 Formal level

In an isobaric process (constant pressure), work is simply the product of pressure and volume change:

{{f:trabajo_isobarico}}

For a process with variable pressure, [[trabajo_termodinamico]] is obtained by integrating the pressure over volume along the path:

{{f:trabajo_integral}}

This integral is fundamental because it shows that [[trabajo_termodinamico]] depends on the path: two different routes between the same initial and final states can give different values of [[trabajo_termodinamico]].

> [!NOTE]
> One litre-atmosphere equals 101.325 joules. In problems that give [[presion]] in atm and [[volumen]] in litres, multiply the result by that conversion factor to obtain joules.

> [!WARNING]
> The formula [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] is only valid if [[presion]] is constant throughout the process. Using it with variable [[presion]] gives incorrect results.

## 🔴 Structural level

The path-dependence of [[trabajo_termodinamico]] has deep consequences: **there is no state function "stored work"**. Unlike internal energy or enthalpy, one cannot speak of "the work the system has" at a given instant.

In the p-V diagram, work is the area enclosed between the process curve and the volume axis. Different processes between the same states trace different curves and enclose different areas. A closed cycle in the p-V diagram encloses a net non-zero area, representing the net work done in that cycle.

**Free expansion** is the extreme case of an irreversible process: the gas expands against vacuum (zero external pressure) and [[trabajo_termodinamico]] = 0 even though [[variacion_de_volumen]] is large. No energy is transferred to the surroundings because there is no opposing force. This result is surprising because volume changes yet work is zero.

> [!TIP]
> In the p-V diagram, the direction of the path matters: traversing the curve from left to right (expansion) gives positive [[trabajo_termodinamico]]; right to left (compression) gives negative [[trabajo_termodinamico]]. A clockwise cycle produces net positive work (engine).

> [!WARNING]
> Irreversible processes, such as free expansion or rapid expansion against a constant external pressure, do not follow a smooth curve in the p-V diagram. The integral is rigorous only for quasi-static processes.

## Deep physical interpretation

The expression [[trabajo_termodinamico]] = ∫p dV has an immediate geometric interpretation: the area under the p(V) curve. This geometric equivalence is why the p-V diagram is so powerful: it converts integral calculations into area readings. In engine cycles (Carnot, Otto, Diesel), the cycle area in the p-V diagram is the net work per cycle.

## Order of magnitude

In an isobaric process at atmospheric pressure (10⁵ Pa) with a volume change of 1 litre (10⁻³ m³), [[trabajo_termodinamico]] is 100 J. A car engine with 1-litre displacement and mean pressure of 10⁶ Pa produces on the order of 1000 J per cycle. Typical laboratory values range from 1 J to 1 kJ.

A result in MJ for a laboratory system with a few litres of gas signals a unit error: verify that [[presion]] is in Pa and [[volumen]] in m³.

## Personalized resolution method

1. **Identify the process type**: is it isobaric (constant [[presion]]), isothermal, adiabatic or isochoric?
2. **Apply the correct formula**: isobaric → [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]]; isothermal → [[trabajo_termodinamico]] = nRT·ln(V_f/V_i); isochoric → [[trabajo_termodinamico]] = 0.
3. **Verify the sign of [[variacion_de_volumen]]**: [[variacion_de_volumen]] = V_f − V_i. Expansion gives positive.
4. **Convert units if necessary**: 1 atm is equal to 101 325 Pa; 1 L is equal to 10⁻³ m³.
5. **Check the result** against the expected order of magnitude for the process.

## Special cases and extended example

**Isochoric**: constant [[volumen]] means [[variacion_de_volumen]] = 0 and [[trabajo_termodinamico]] = 0. All heat goes into changing internal energy.

**Free expansion**: the gas expands against vacuum (p_ext = 0). [[trabajo_termodinamico]] = 0. Internal energy does not change for an ideal gas.

**Engine cycle**: in a closed cycle in the p-V diagram, net work is the area enclosed by the cycle. If the cycle is traversed clockwise, net work is positive (engine). Counter-clockwise, it is negative (heat pump or refrigerator).

## Real student questions

**Why does [[trabajo_termodinamico]] depend on the path if we are talking about energy?**
Because [[trabajo_termodinamico]] is not energy stored in the system but energy in transit through the boundary during the process. Stored energy (internal energy) is a state function; [[trabajo_termodinamico]] and heat Q are the forms in which that energy changes.

**Why is [[trabajo_termodinamico]] is equal to 0 in free expansion if volume changes?**
Because [[trabajo_termodinamico]] is equal to ∫p_ext dV. If external pressure is zero (vacuum), there is no force opposing the gas and no mechanical energy is transferred to the surroundings, regardless of how much the gas expands.

**How do I know which convention the problem uses?**
The physics convention defines [[trabajo_termodinamico]] > 0 when the system does work (expansion). The chemistry convention defines W is equal to −p·ΔV (W < 0 for expansion). The first law form indicates which: ΔU is equal to Q − W (physics) or ΔU is equal to Q + W (chemistry).

## Cross-cutting connections and study paths

[[trabajo_termodinamico]] enters directly into the **first law of thermodynamics** (leaf: [First Law](leaf:fisica-clasica/termodinamica/trabajo-y-primera-ley/primera-ley-de-la-termodinamica)). The geometric interpretation of work as an area in the p-V diagram is developed in the [Geometric Interpretation](leaf:fisica-clasica/termodinamica/trabajo-y-primera-ley/trabajo-termodinamico/interpretacion-geometrica) leaf. Specific thermodynamic processes (isobaric, isothermal, adiabatic) compute [[trabajo_termodinamico]] with formulas adapted to each case.

## Final synthesis

[[trabajo_termodinamico]] is the energy mechanically exchanged through the moving boundary. In isobaric processes it is computed as [[presion]]·[[variacion_de_volumen]]; in general it is the area under the p-V curve. Its path dependence distinguishes it from state quantities and makes it essential to specify the process type before computing.