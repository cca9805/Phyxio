## Conceptual errors


### Error 1: Treating [[trabajo_termodinamico]] as a state function

**Why it seems correct**

The student learns that energy is conserved and that quantities such as kinetic or potential energy depend only on the state. They generalise that [[trabajo_termodinamico]] must also depend only on the initial and final states, regardless of the path. The cognitive mechanism is an **incomplete analogy** with state quantities.

**Why it is incorrect**

[[trabajo_termodinamico]] is not a state function but a process quantity. It depends on the path traced in the p-V diagram. Two different processes between the same initial and final states enclose different areas under their p-V curves and produce different values of [[trabajo_termodinamico]]. Only the internal energy change ΔU is path-independent.

**Detection signal**

The student computes [[trabajo_termodinamico]] directly from the p and V values at the initial and final states, without asking what type of process connects those states.

**Conceptual correction**

Always identify the process type before computing [[trabajo_termodinamico]]. The same [[variacion_de_volumen]] can produce entirely different values of [[trabajo_termodinamico]] depending on whether the process is isobaric, isothermal, adiabatic or irreversible.

**Contrast mini-example**

A gas goes from state (p₁, V₁) to (p₂, V₂) by two routes: an isobaric step followed by an isochoric step, and a direct isothermal path. The isobaric-isochoric [[trabajo_termodinamico]] is p₁·(V₂−V₁), while the isothermal [[trabajo_termodinamico]] is nRT·ln(V₂/V₁). Both values differ even though the initial and final states are identical.

---

## Model errors

**Mini-example of contrast**

Check 1: In Expansion Work, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

### Error 1: Applying [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] in a non-isobaric process

**Why it seems correct**

The formula [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] is the simplest and the first one taught. The student memorises it and applies it without verifying whether pressure is constant. In many problems pressure is indeed constant, reinforcing the habit of using it without discrimination. The mechanism is **unreflective use of the simplest formula**.

**Why it is incorrect**

[[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] is valid only when [[presion]] is constant throughout the process. If [[presion]] varies with [[volumen]], as in an isothermal ideal gas process or an adiabatic process, the work must be computed as ∫p dV, which has a different analytical expression for each process.

**Detection signal**

The problem specifies an isothermal, adiabatic or otherwise pressure-varying compression, but the student directly uses [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] with the pressure value of the initial or final state.

**Conceptual correction**

Identify the process type first and use the corresponding formula: for an ideal gas isothermal process, [[trabajo_termodinamico]] = nRT·ln(V_f/V_i); for an adiabatic process, [[trabajo_termodinamico]] = ΔU (with sign); for an isobaric process, [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]].

**Contrast mini-example**

One mole of ideal gas at 300 K is isothermally compressed from 10 L to 5 L. Applying [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] with the initial pressure gives an incorrect result because [[presion]] is not constant. The correct value is [[trabajo_termodinamico]] = nRT·ln(V_f/V_i) = 1·8.314·300·ln(0.5) ≈ −1729 J.

---

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

### Error 1: Inverting the sign of [[variacion_de_volumen]]

**Why it seems correct**

The student computes [[variacion_de_volumen]] as initial volume minus final volume, unaware that the convention is V_f − V_i. This happens especially during compression when the student intuitively wants a positive value. The mechanism is **confusion between natural subtraction order and mathematical convention**.

**Why it is incorrect**

By definition [[variacion_de_volumen]] = V_f − V_i. Inverting the subtraction produces the opposite sign of work. A real compression has [[trabajo_termodinamico]] negative (physics convention); computing [[variacion_de_volumen]] = V_i − V_f yields a wrongly positive [[trabajo_termodinamico]].

**Detection signal**

The result of [[trabajo_termodinamico]] has the opposite sign to what the process implies: positive [[trabajo_termodinamico]] for an obvious compression or negative [[trabajo_termodinamico]] for a visible expansion.

**Conceptual correction**

Always verify that [[variacion_de_volumen]] = V_f − V_i before computing [[trabajo_termodinamico]]. If the process is expansion, V_f > V_i and [[variacion_de_volumen]] > 0, giving [[trabajo_termodinamico]] > 0.

**Contrast mini-example**

A gas expands from 2 L to 5 L at constant pressure 100 000 Pa. Correct [[variacion_de_volumen]]: 5×10⁻³ − 2×10⁻³ = 3×10⁻³ m³. [[trabajo_termodinamico]] = 100 000 × 3×10⁻³ = 300 J (positive, gas does work). Using [[variacion_de_volumen]] = 2×10⁻³ − 5×10⁻³ gives [[trabajo_termodinamico]] = −300 J, indicating compression, the opposite of what occurs.

---

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

### Error 1: Confusing sign conventions between physics and chemistry

**Why it seems correct**

The student studies thermodynamics in two separate courses: physics and chemistry. In physics the common convention is [[trabajo_termodinamico]] > 0 for expansion; in chemistry the most widespread convention defines work as work done on the system, giving [[trabajo_termodinamico]] < 0 for expansion. Both conventions are valid but mutually inconsistent. The mechanism is **transferring conventions from one context to another without checking**.

**Why it is incorrect**

The two conventions give [[trabajo_termodinamico]] with opposite signs for the same physical process. Mixing them produces errors in the first law: in the physics convention, ΔU = Q − [[trabajo_termodinamico]]; in the chemistry convention, ΔU = Q + [[trabajo_termodinamico]]. Using the chemistry sign with the physics formula gives an incorrect energy balance.

**Detection signal**

The student obtains a ΔU sign that is wrong for the expected process, or interprets a positive expansion [[trabajo_termodinamico]] as if it indicated work done on the system.

**Conceptual correction**

Identify at the start of the problem which convention the statement uses. If the first law appears as ΔU = Q − [[trabajo_termodinamico]], the convention is physics ([[trabajo_termodinamico]] > 0 for expansion). If it appears as ΔU = Q + [[trabajo_termodinamico]], it is chemistry ([[trabajo_termodinamico]] < 0 for expansion). Maintain one convention throughout the problem.

**Contrast mini-example**

A gas absorbs 500 J of heat and expands doing 200 J of work on the piston. Physics convention: [[trabajo_termodinamico]] = +200 J, ΔU = 500 − 200 = +300 J. Chemistry convention: [[trabajo_termodinamico]] = −200 J, ΔU = 500 + (−200) = +300 J. The result for ΔU is the same, but only if the first-law formula consistent with the sign convention is used.

---

## Quick self-control rule

Before accepting a [[trabajo_termodinamico]] calculation as valid, check:

- **Process type identified**: isobaric, isothermal, adiabatic or isochoric. Do not apply [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] without confirming that [[presion]] is constant.
- **Sign of [[variacion_de_volumen]]**: [[variacion_de_volumen]] = V_f − V_i. Expansion gives positive; compression gives negative.
- **Consistent sign convention**: do not mix physics and chemistry conventions within the same problem.
- **Homogeneous units**: [[presion]] in Pa and [[volumen]] in m³ give [[trabajo_termodinamico]] in J. If atm and litres are used, multiply by the conversion factor 101.325 J/(L·atm).
- **Order of magnitude**: for pressures around 10⁵ Pa and volumes around litres, [[trabajo_termodinamico]] should be in the range of tens to hundreds of joules.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.