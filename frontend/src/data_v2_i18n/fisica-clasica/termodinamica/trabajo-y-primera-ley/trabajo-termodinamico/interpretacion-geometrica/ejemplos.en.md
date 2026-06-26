# Exam-type example


## Problem statement

An ideal gas performs a rectangular cycle in the p-V diagram with four states: A(1×10⁻³ m³, 1×10⁵ Pa), B(3×10⁻³ m³, 1×10⁵ Pa), C(3×10⁻³ m³, 3×10⁵ Pa) and D(1×10⁻³ m³, 3×10⁵ Pa). The cycle is traversed in the order A→B→C→D→A. Compute the net work [[trabajo_neto_del_ciclo]] and determine whether the cycle acts as an engine or refrigerator.

## Data

- A: V = 1×10⁻³ m³, p = 1×10⁵ Pa
- B: V = 3×10⁻³ m³, p = 1×10⁵ Pa
- C: V = 3×10⁻³ m³, p = 3×10⁵ Pa
- D: V = 1×10⁻³ m³, p = 3×10⁵ Pa

## System definition

The system is the ideal gas inside the cylinder. The physics convention is used: [[trabajo_termodinamico]] > 0 for expansion.

## Physical model

Rectangular cycle in the p-V diagram formed by two isobaric and two isochoric processes. Work of each process is the area under that part of the curve. Net work is the algebraic sum of the four processes, equal to the rectangle area enclosed by the cycle.

The physical model considers fundamental system quantities such as [[presion]], [[trabajo_neto_del_ciclo]], [[trabajo_termodinamico]].

## Model justification

The rectangular cycle is the simplest case in the p-V diagram because it consists exclusively of isobaric and isochoric processes. In isobaric segments, [[presion]] remains constant and the area under the curve is an exact rectangle with base ΔV and height p; in isochoric segments, ΔV is zero and work is strictly zero. This structure allows the total area to be computed without any analytical integration: it suffices to identify the rectangle in the diagram and multiply its sides. The model is valid because the gas operates under low-pressure conditions and the quasi-static approximation is justified by the process being slow relative to the gas relaxation time.

## Symbolic solution

The area enclosed by the rectangular cycle is (p_high − p_low) × (V_high − V_low). Analysing A→B→C→D→A: A→B is isobaric expansion (rightward), B→C is isochoric (upward), C→D is isobaric compression (leftward), D→A is isochoric (downward). The direction A→B→C→D→A is counter-clockwise (expansion at low pressure, compression at high pressure) → [[trabajo_neto_del_ciclo]] < 0 → refrigerator.

{{f:trabajo_area_pV}}

{{f:trabajo_ciclo}}

## Numerical substitution

Process A→B (isobaric, expansion): [[trabajo_termodinamico]]_AB = 1×10⁵ × (3−1)×10⁻³ = 200 J.

Process B→C (isochoric): [[trabajo_termodinamico]]_BC = 0.

Process C→D (isobaric, compression): [[trabajo_termodinamico]]_CD = 3×10⁵ × (1−3)×10⁻³ = −600 J.

Process D→A (isochoric): [[trabajo_termodinamico]]_DA = 0.

[[trabajo_neto_del_ciclo]] = 200 + 0 + (−600) + 0 = −400 J.

Verification by rectangle area: (3×10⁵ − 1×10⁵) × (3×10⁻³ − 1×10⁻³) = 2×10⁵ × 2×10⁻³ = 400 J, with negative sign because the cycle is counter-clockwise. [[trabajo_neto_del_ciclo]] = −400 J → refrigerator.

## Dimensional validation

The dimension of [[trabajo_termodinamico]] is verified from the dimensions of [[presion]] and [[volumen]]:

- [[presion]]: `[M L⁻¹ T⁻²]` (pascals)
- [[volumen]]: `[L³]` (cubic metres)
- Product p·ΔV: `[M L⁻¹ T⁻²]·[L³]` = `[M L² T⁻²]` (joules)

The result `[M L² T⁻²]` corresponds to the dimension of energy, consistent with [[trabajo_termodinamico]] being a mechanical energy transfer. For the net cycle work [[trabajo_neto_del_ciclo]], the dimension is identical since it is also a work quantity. This verification confirms that the rectangle area expressed in Pa·m³ directly gives joules, with no additional conversion factors required.

## Physical interpretation

The cycle is counter-clockwise: expansion occurs at low pressure (A→B, small positive work of 200 J) and compression occurs at high pressure (C→D, large negative work of 600 J). The cycle area in the p-V diagram visually quantifies this asymmetry: the upper trajectory (C→D) carries more area than the lower one (A→B), leaving a net deficit of 400 J that the system must receive from outside. This energy balance is physically consistent with the operating principle of a refrigerator or heat pump, which consumes net work to move heat against the temperature gradient. The counter-clockwise direction therefore indicates that the system depends on an external work input to sustain its operation.

The result also confirms the path-dependence of [[trabajo_termodinamico]]: if the four states A, B, C, D are fixed but the cycle is traversed clockwise (A→D→C→B→A instead of A→B→C→D→A), the magnitude of the net work is the same (400 J) but the sign is reversed, and the system becomes an engine rather than a refrigerator. The enclosed area is identical; only the direction of traversal changes. This observation directly connects the diagram geometry with the physics of heat engines.

The deeper physical lesson is that a p-V diagram does not merely record numbers — it encodes the direction of energy flow and the type of thermodynamic machine. Reading the sense of traversal (clockwise versus counter-clockwise) and comparing the areas of the upper and lower paths is sufficient to determine whether a cycle produces or consumes net work, and how much. No algebraic manipulation is needed beyond the geometric reading of the enclosed area and its sign.

---

# Real-world example


## Context

Diagnosing internal combustion engines using the cylinder pressure indicator technique (P-V analysis) is a direct application of geometric interpretation. A pressure sensor and a crankshaft position encoder simultaneously measure p and V during each engine cycle. Integrating software computes the area enclosed by the cycle in the p-V diagram, which is the net work per cylinder per cycle.

## Physical estimation

A 4-cylinder petrol engine at 3000 rpm with 300 J net work per cylinder per cycle runs at 25 cycles per second; across 4 active cylinders that totals 30 000 W, equivalent to 30 kW of power. If the p-V diagram shows the cycle area has decreased to 250 J per cylinder (due to ageing, compression loss or ignition misadjustment), power drops to 25 kW. P-V indicator diagnosis identifies exactly which phase of the cycle loses area (and hence work) without disassembling the engine. The percentage reduction of the cycle area in the p-V diagram is directly proportional to the power loss, making the geometric reading an immediate quantitative estimate of engine degradation.

## Interpretation

Geometric interpretation of the p-V diagram turns area reading into a quantitative diagnostic tool. Reduction of cycle area indicates net work loss; deformation of the cycle shape indicates anomalies in specific processes (poor combustion, gas leakage, ignition timing delay). This application shows that the p-V diagram is not only a theoretical tool but a measurement and diagnostic instrument in engineering. Identifying visually which part of the cycle has lost area allows the engineer to infer the physical cause of the problem: if the expansion zone is narrower, there is compression loss; if the combustion zone is asymmetric, there is ignition timing delay. This causal reading of the p-V diagram is the most direct application of the principle that the area under the curve is exactly the [[trabajo_termodinamico]].