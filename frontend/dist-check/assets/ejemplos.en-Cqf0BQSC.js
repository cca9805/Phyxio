const e=`# Exam-type example

## Problem statement

A vessel contains a uniform gas sample with temperature [[T]] of 300 K, pressure [[P]] of 100 kPa, mass [[m]] of 0.40 kg, and volume [[V]] of 0.32 m3. A second identical copy is prepared and both are considered as one composite system. Determine what happens to [[T]], [[P]], [[rho]], and the total amount. Then estimate the final intensive variable when two portions with different [[X_A]] and [[X_B]] values are mixed.

## Data

- First sample: [[T]] of 300 K and [[P]] of 100 kPa.
- Extensive quantities of one sample: [[m]] of 0.40 kg and [[V]] of 0.32 m3.
- Second sample: identical to the first.
- Scale factor: [[lambda_escala]] equal to two.
- For the comparison mixture: [[X_A]] of 300 units and [[X_B]] of 360 units, with amounts in a three-to-one proportion.

## System definition

The initial system is a uniform sample. The composite system is the conceptual union of two equivalent copies, without compression, phase change, or net exchange with the surroundings. For the second part, the system is an idealized mixture of two compatible portions.

## Physical model

The model uses the intensivity test for [[X_int]]. The [[T]] and [[P]] are state variables; they are not added when equal copies are joined. The [[rho]] is computed as a ratio of [[m]] to [[V]], so it remains constant if both extensive quantities scale together. In the mixture, the final intensive value is estimated with weighting by amount, not by direct addition.

## Model justification

The sample is stated to be uniform, so one reading of [[T]], [[P]], and [[rho]] represents the state. The second copy has the same state, so [[lambda_escala]] changes amount of system, not local condition. The comparison mixture requires weighting because the portions do not contribute the same amount. These conditions connect with the core relations of the leaf:

{{f:criterio_intensividad}}

{{f:igualdad_equilibrio_intensivo}}

{{f:densidad_intensiva}}

{{f:promedio_ponderado_intensivo}}

## Symbolic solution

For a scaled copy without state change, [[X_int]] keeps its value. Therefore [[T]] and [[P]] remain equal in the composite system. That equality is the intensive equilibrium reading between compatible copies.

For density, since [[m]] and [[V]] are multiplied by the same factor, the ratio keeps the initial value. Total amount, however, increases because [[m]] and [[V]] are extensive.

{{f:densidad_intensiva}}

For the mixture, the final [[X_int]] is estimated with weighting by amount. If the portion associated with [[X_A]] has three times more amount than the one associated with [[X_B]], the result lies closer to [[X_A]] than to [[X_B]].

## Numerical substitution

The total mass goes from 0.40 kg to 0.80 kg. The total volume goes from 0.32 m3 to 0.64 m3. The initial density is 1.25 kg/m3 and the final density remains 1.25 kg/m3 because mass and volume grew together.

The composite system temperature remains 300 K. The pressure remains 100 kPa. For the mixture of intensive values, three parts at 300 units and one part at 360 units give a final value of 315 units. The result is not 660 units, and it is not the simple mean of 330 units.

## Dimensional validation

The [[T]] keeps unit K before and after scaling. The [[P]] keeps unit Pa. The [[rho]] is expressed as \`kg m⁻³\`, matching mass divided by volume. The weighted average keeps the unit of [[X_int]] because the amount weights cancel in the ratio. This dimensional reading confirms that incompatible magnitudes have not been added.

## Physical interpretation

The calculation shows that the composite system contains more gas, but it is not in a more intense thermal or mechanical state. There is more [[m]] and more [[V]], but the same [[T]], [[P]], and [[rho]]. The causal reading is that an additional identical copy does not create an equilibrium difference. In the mixture, the larger portion dominates the final value, preventing intensive variables from being treated as weightless labels.

# Real-world example

## Context

A technician compares two compressed-air tanks used in an installation. One is small and the other is large, but both sensors show temperature near 295 K and pressure near 600 kPa. The goal is to decide whether the large tank is "hotter" or "more pressurized" because it contains more gas.

## Physical estimation

The quantitative reading separates state from inventory. If both tanks have the same [[T]] and the same [[P]], they are in equivalent intensive conditions, even though the large tank has more [[m]] and larger [[V]]. If the large tank volume is five times greater and it keeps a similar density, its mass will be about five times greater, but its [[rho]] need not increase. A 10 litre tank and a 50 litre tank at the same state have a five-to-one volume ratio; mass also scales five to one, while intensive readings remain comparable.

## Interpretation

The operational conclusion is that the large tank may store more total amount and more energy, but this does not make its temperature higher or its pressure higher. For mechanical safety one checks [[P]] and wall area; for inventory one checks [[m]]. For state comparison one uses intensives. This separation prevents wrong decisions, such as rejecting a tank only because it is large or ignoring a small one with high pressure.
`;export{e as default};
