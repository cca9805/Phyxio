## Conceptual errors


### Error 1: Believing the area under the p-V curve is an approximation of work

**Why it seems correct**

In other areas of physics, geometric areas appear as visual approximations or as the result of simplifications. The student may think that the equivalence [[trabajo_termodinamico]] = area is a mnemonic rule or an approximation for simple processes. The cognitive mechanism is **underestimating the rigour of the integral-area equivalence**.

**Why it is incorrect**

The definition of [[trabajo_termodinamico]] as the Riemann integral ∫p dV coincides exactly with the area under the p(V) curve. There is no approximation. The geometric area is exactly the value of the integral, with the same precision as any analytical calculation.

**Detection signal**

The student says "work is approximately the area" or recalculates [[trabajo_termodinamico]] with the analytical formula expecting the result to differ from the area measured graphically.

**Conceptual correction**

The equivalence is exact. If the p(V) curve is drawn accurately and the area is measured correctly, the numerical result must coincide exactly with the analytical calculation.

**Contrast mini-example**

For an isobaric process at 2×10⁵ Pa expanding the gas from 1 L to 3 L, the rectangle area is 400 J. The analytical calculation via the isobaric work formula gives exactly the same value. They are identical, not approximate.

---

## Model errors

**Mini-example of contrast**

Check 1: In Geometric Interpretation, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 1: Applying area reading to irreversible processes

**Why it seems correct**

The student learns that [[trabajo_termodinamico]] = area under the p-V curve and generalises it to all processes, including irreversible ones. Since the p-V diagram is such a useful tool, it is tempting to apply it universally. The mechanism is **excessive generalisation of a tool valid within its domain**.

**Why it is incorrect**

The p-V diagram only represents quasi-static processes: those in which the system passes through well-defined equilibrium states. In a rapid irreversible process (explosion, free expansion, abrupt compression), the internal state of the gas is not homogeneous and no unique pressure defines a point in the p-V diagram. There is no traceable curve and therefore no area to read.

**Detection signal**

The student tries to read the work of a free expansion or abrupt compression directly from the p-V diagram, connecting the initial and final states with an arbitrary curve.

**Conceptual correction**

For irreversible processes, work must be computed using the surroundings' external pressure (if constant) or through methods specific to irreversible processes. The p-V diagram can show the initial and final states as points, but not the path.

**Contrast mini-example**

In a free expansion of a gas expanding from 1 L to 3 L with no external pressure, [[trabajo_termodinamico]] is zero. If a curve is drawn between those points in the p-V diagram and the area is measured, a positive incorrect value is obtained. Free expansion has no traceable curve in the diagram.

---

## Mathematical errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 1: Computing the area with the base on the p-axis instead of the V-axis

**Why it seems correct**

The student confuses which axis is the "base" and which is the "height" when computing the area under the curve. In a diagram with p on the vertical axis and V on the horizontal, the "base" is the horizontal extent (ΔV) and the "height" is the function p(V). Some students invert this, taking the pressure difference as the base. The mechanism is **confusion between axes in reading the area**.

**Why it is incorrect**

Work is the integral of p over V (∫p dV), not the integral of V over p (∫V dp, which is a different thermodynamic quantity called "technical work"). The area equivalent to work is measured by projecting onto the V-axis (base = ΔV), not onto the p-axis.

**Detection signal**

The student computes the area of an isobaric process as Δp × V_mean instead of p × ΔV, obtaining a dimensionally and numerically incorrect result.

**Conceptual correction**

The area equivalent to work is always measured by projecting onto the horizontal axis (volume). The base of the rectangle for an isobaric process is ΔV; the height is p. For non-linear processes, integration is performed with respect to V.

**Contrast mini-example**

Isobaric process at 10⁵ Pa expanding the gas from 1 L to 4 L. The correct area is 300 J (10⁵ Pa multiplied by 3×10⁻³ m³). A student projecting onto the pressure axis rather than the volume axis obtains 250 J, which is incorrect and physically meaningless for a process where pressure does not change.

---

## Interpretation errors

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 1: Concluding that a counter-clockwise cycle is always inefficient or undesirable

**Why it seems correct**

The student remembers that the engine cycle (desirable for a heat engine) is clockwise, and concludes that any counter-clockwise cycle is "bad" or inefficient. The mechanism is **applying a correct criterion outside its context**.

**Why it is incorrect**

Counter-clockwise cycles are refrigeration cycles and heat pumps, which are equally valid and useful. A refrigerator consumes work ([[trabajo_neto_del_ciclo]] < 0) to transfer heat from the cold reservoir to the hot reservoir, which is the desired goal. "Undesirability" only applies when the goal is to produce work, not when the goal is to move heat.

**Detection signal**

The student dismisses or penalises a counter-clockwise cycle without identifying the machine's objective (refrigerator vs. engine).

**Conceptual correction**

The sign of [[trabajo_neto_del_ciclo]] indicates the machine type, not its efficiency or desirability. For an engine, [[trabajo_neto_del_ciclo]] > 0 is the goal. For a refrigerator or heat pump, [[trabajo_neto_del_ciclo]] < 0 is exactly what is sought; efficiency is measured as heat transferred divided by work consumed.

**Contrast mini-example**

A counter-clockwise cycle in the p-V diagram that consumes 200 J of electrical work and transfers 600 J of heat from a cold interior to a warm exterior is an excellent refrigerator with COP of 3. Calling it "inefficient" because it is counter-clockwise is an interpretation error.

---

## Quick self-control rule

Before declaring a p-V diagram reading valid, check:

- **Quasi-static process confirmed**: the curve is continuous and smooth; if the process is an explosion or free expansion, there is no valid curve.
- **Area measured on the V-axis**: the base of the area is ΔV (horizontal axis), not Δp.
- **Correct sign**: expansion (rightward path) = positive area = [[trabajo_termodinamico]] > 0.
- **Cycle direction identified**: clockwise = engine ([[trabajo_neto_del_ciclo]] > 0); counter-clockwise = refrigerator ([[trabajo_neto_del_ciclo]] < 0).
- **Comparison between paths**: if two processes between the same states are compared, the one with greater area gives greater [[trabajo_termodinamico]], but both results are valid and physically possible.

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.