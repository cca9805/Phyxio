# Intensive Variables

## Conceptual context

Intensive variables are thermodynamic magnitudes that describe the state of a portion of matter without directly depending on how much matter has been chosen. If a uniform sample is split into two halves, each half keeps the same temperature [[T]], pressure [[P]], and density [[rho]] as the original sample. If two identical copies are joined, those variables are not added. This idea separates physical state from total system amount.

The difference from an extensive variable is operational. An extensive quantity counts inventory; an intensive variable characterizes local condition, equilibrium, or concentration. Mass [[m]] and volume [[V]] grow when a sample is duplicated, but [[rho]] can remain constant because it is a normalized ratio. Intensive variables therefore allow samples of different size to be compared without automatically favoring the larger sample.

## 🟢 Essential Level

An intensive variable answers the question: what state does the substance have here? It does not answer how much system there is. Two cups of water at the same [[T]] do not have twice the temperature when placed together. Two vessels containing the same gas in the same state do not have twice the [[P]] when considered as one set. What changes when they are joined is total amount; what remains is local condition.

The simplest test is to imagine two identical copies of the system. If the magnitude remains equal when the copies are joined, it behaves as intensive. The [[T]], [[P]], and [[rho]] pass this test when the state is uniform. By contrast, [[m]] and [[V]] do not pass it, because a second copy contributes more matter and occupies more space.

Intensive variables are also signals of imbalance. If two bodies in thermal contact have different [[T]], there is a tendency to transfer energy as heat. If two connected fluid regions have different [[P]], mechanical motion may appear. Equality of compatible intensive variables indicates that the corresponding macroscopic tendency has disappeared.

It is important to remember that intensive does not mean small, universal, or always independent of position. A property can be intensive and vary inside a nonuniform system. In an atmosphere, [[P]] changes with height, but it is still local pressure, not total amount. In a solid heated at one end, [[T]] changes from point to point, but each temperature reading is still intensive.

## 🔵 Formal Level

The formal criterion for intensivity is written as a scaling test:

{{f:criterio_intensividad}}

The notation says that multiplying the system size by [[lambda_escala]] does not change [[X_int]] if the same local state is kept. This is a degree-zero homogeneity test: the variable does not increase with scale. Physically, [[X_int]] describes state rather than inventory.

At equilibrium, many conditions are written as equality of intensive variables:

{{f:igualdad_equilibrio_intensivo}}

The equality does not mean that extensive quantities in the two parts are equal. Two bodies with different masses can reach the same [[T]]. Two regions with different volume can share the same [[P]]. What becomes equal is the variable controlling an exchange tendency, not the amount stored.

An important case is density:

{{f:densidad_intensiva}}

Although it is computed from [[m]] and [[V]], [[rho]] is intensive when both extensive quantities scale together. If mass and volume of a uniform sample are both doubled, the ratio remains unchanged. This example shows that the algebraic origin of a magnitude is not enough for classification; its response to scaling matters.

When parts with different intensive values are mixed, the final value is usually not a sum. In a simple approximation it can be estimated with a weighted average:

{{f:promedio_ponderado_intensivo}}

The formula uses [[X_A]] and [[X_B]] as initial values and [[m]] as the weight. The final result moves closer to the part with more amount. This rule separates two common errors: adding intensives as totals, or averaging them without considering how much system each part contributes.

## 🔴 Structural Level

The deeper structure is that intensive variables are state coordinates. They locate the thermodynamic point of a sample and decide whether two regions can coexist without net exchange. In an equilibrium description, extensive variables set system size and intensive variables set internal condition.

Intensive variables often appear as derivatives, ratios, or conjugate multipliers of extensive quantities. The [[T]] is related to how energy changes when entropy changes, the [[P]] to how energy changes when volume changes, and [[rho]] to how mass is distributed in space. This leaf does not need those derivatives, but the pattern matters: intensives usually tell how costly or forceful a small change is, not how much is accumulated.

Classification depends on keeping the reference clear. The [[P]] of a uniform gas is intensive, but the total force on a wall is not because it depends on area. Local [[rho]] is intensive, but mass enclosed in a volume is not. The [[T]] is intensive, but the energy required to heat an entire object depends on the amount of matter.

In nonuniform systems, an intensive variable can become a field. There is local temperature, local pressure, and local density. To obtain a mean reading one must state how the average is taken: by volume, by mass, by area, or over time. Without that information, a single number may hide relevant gradients.

## Deep Physical Interpretation

An intensive variable is diagnostic because it does not reward size. If a droplet and a tank have the same [[T]], that does not mean they contain the same energy; it means there is no thermal reason by itself for one to heat the other. If they have the same [[P]], that does not mean they exert the same total force; it means the push per unit area is comparable.

The causal reading is especially important. A difference in [[T]] drives energy transfer; a difference in [[P]] can drive expansion or flow; a difference in composition or chemical potential drives material exchange. Intensive variables are therefore decision variables: they indicate where a process would go if a constraint were released.

## Order of Magnitude

In laboratories, [[T]] often lies in hundreds of kelvin, [[P]] near ambient conditions is around one hundred thousand pascals, and [[rho]] can range from order one in gases to thousands in liquids and solids. The exact number does not determine whether a variable is intensive. The decisive point is that an additional identical copy of the same sample does not change the local value.

A useful mental control is to compare two identical vessels with gas at the same condition. If they are considered together, [[m]] and [[V]] double. The [[P]], [[T]], and [[rho]] remain readings of the state. This separation prevents an estimate of amount from being confused with an estimate of condition.

## Personalized resolution method

1. Identify whether the question asks for local state, comparison between samples, or total amount.
2. Apply the duplication test with [[lambda_escala]].
3. If the magnitude does not change when scaled, treat it as [[X_int]].
4. If it is obtained from a ratio, check that numerator and denominator scale together.
5. In mixtures, do not add intensive variables: use a compatible weighting.
6. At equilibrium, look for equality of intensives, not equality of amounts.

## Special Cases and Extended Example

A metal bar may have different temperature at its ends. The [[T]] is still intensive, but one value is no longer enough to describe the whole system. A local function or a defined average is needed. This case teaches that intensive is not the same as uniform.

Another case is a mixture of two water samples with different temperatures. The final temperature is not the sum of the initial temperatures. If the masses are equal and losses are negligible, it is close to the simple average; if one mass is much larger, the final temperature is close to that part. The final intensive value depends on weighting by extensive amounts.

## Real Student Questions

**If density is computed with mass, why is it not extensive?** Because [[rho]] compares [[m]] with [[V]]. When both increase in the same proportion, the ratio keeps the same value. Mass alone grows; density describes concentration.

**Does the temperature of a large object contain more heat?** No. The [[T]] indicates thermal state, not total energy. A large object at a given temperature may store more energy than a small one at the same temperature, but the intensive reading is the same.

**Can pressure depend on volume?** It may depend on volume in a specific process, but as a state variable it is not added when identical copies are duplicated. An ideal gas may change its [[P]] if [[V]] changes while other conditions are controlled, but that does not make pressure extensive.

## Cross-cutting connections and study paths

This leaf connects with extensive variables, thermodynamic equilibrium, temperature, pressure, density, open systems, equations of state, calorimetry, and the second law. The recommended route is: distinguish total amount from local state, use the scaling test, understand equality of intensives at equilibrium, and then study how intensive variables govern flows and processes.

## Final Synthesis

An intensive variable remains unchanged when a uniform sample is scaled. The [[T]], [[P]], and [[rho]] describe state condition; [[m]] and [[V]] help construct or weight those readings, but they do not replace them. The practical rule is clear: use intensive variables to compare states and extensive variables to count amounts.
