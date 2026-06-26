const e=`# Exam-type example

## Problem statement

A gas sample has mass [[m]] of 0.50 kg, volume [[V]] of 0.40 m3, internal energy [[U]] of 150 kJ, and entropy [[S]] of 0.90 kJ/K. Two identical copies in the same state are joined. Calculate the total extensive magnitudes and the resulting density. Decide which magnitudes double and which do not.

## Data

- Scaling factor: [[lambda_escala]] equal to 2.
- Initial extensive magnitudes: [[m]], [[V]], [[U]], and [[S]].
- Generic magnitude: [[X_ext]] for the scaling test.
- Initial and final density: [[rho]].
- Representative specific magnitude: [[x_esp]] for comparison per unit mass.

## System definition

The final system is the union of two equivalent subsystems. The material and intensive state of each copy are not changed before joining. Therefore the ideal extensive-additivity model can be applied.

## Physical model

We use the scaling test for [[X_ext]] and subsystem addition. Total quantities [[m]], [[V]], [[U]], and [[S]] must be multiplied by [[lambda_escala]]. The property [[rho]] is calculated as a ratio of two extensives and checks that normalization removes scale. If [[x_esp]] is calculated for internal energy, it compares energy per kg, not total energy.

## Model justification

The two copies are identical and in the same state, so no composition change or non-ideal mixing appears. Since compatible inventories are added, total mass, total volume, total internal energy, and total entropy are additive. Density must not double because numerator and denominator both double.

## Symbolic solution

Scaling criterion:

{{f:criterio_extensividad}}

This relation moves from one copy to two copies through [[lambda_escala]] without changing intensive state.

Additivity:

{{f:aditividad_extensiva}}

Here it is applied separately to [[m]], [[V]], [[U]], and [[S]], because each is a total inventory.

Density:

{{f:densidad}}

This ratio is a control: if mass and volume scale together, the normalized property remains constant.

Specific magnitude:

{{f:magnitud_especifica}}

The specific magnitude confirms the same idea for any extensive inventory divided by [[m]].

## Numerical substitution

Final mass is 1.00 kg. Final volume is 0.80 m3. Final internal energy is 300 kJ. Final entropy is 1.80 kJ/K. All those magnitudes double because they are extensive.

Initial density is 0.50 kg divided by 0.40 m3, or 1.25 kg/m3. Final density is 1.00 kg divided by 0.80 m3, also 1.25 kg/m3. Initial specific energy is 150 kJ divided by 0.50 kg, or 300 kJ/kg. Final specific energy is 300 kJ divided by 1.00 kg, again 300 kJ/kg.

## Dimensional validation

- [[m]] is measured in kg and is added with kg.
- [[V]] is measured in m3 and is added with m3.
- [[U]] is measured in J or kJ; [[S]] is measured in J/K or kJ/K.
- [[rho]] has dimension \`[M L⁻³]\`.
- [[x_esp]] has the dimension of [[X_ext]] divided by \`[M]\`.

## Physical interpretation

The result shows the difference between inventory and normalized property. The final system contains twice as much matter, space, energy, and entropy, but it is not "denser" and does not have greater energy per kg. If the samples were compared using only [[U]], the larger sample would win; using [[x_esp]], one sees that energetic state per mass is the same.

Physically, joining two copies does not intensify the gas: it only increases how much gas there is. The local state of each portion remains equivalent. An extensive therefore answers "how much total exists", while a normalized property answers "what is each unit of system like". Confusing those questions means comparing sizes instead of states.

# Real-world example

## Context

In a laboratory, two vessels with the same liquid at the same temperature are compared. One contains 100 g and the other 300 g. The second has three times more mass and approximately three times more volume, but the liquid density is the same.

## Physical estimation

If 100 g occupy 110 mL, then 300 g will occupy about 330 mL if the state is equivalent. The mass/volume ratio remains the same within experimental uncertainty. If internal energy were proportional to mass, the larger vessel would have three times more [[U]], but the specific energy [[x_esp]] would be the same.

The estimate can be checked with a balance and a graduated cylinder. If the second measured volume were 332 mL instead of 330 mL, the relative difference would be below 1% and could be due to reading uncertainty. If it were 360 mL, it would no longer be simple scaling: temperature, bubbles, composition, or measurement error would need review.

## Interpretation

The quantitative reading avoids confusing size with state. The larger vessel contains more total amount, but it does not represent a different substance or a greater intensity. To compare materials one uses ratios such as [[rho]]; to write balances one uses extensives such as [[m]], [[V]], [[U]], and [[S]].

The operational conclusion is that an extensive is used for inventory and a normalized property for comparison. The same experiment gives both readings: total mass to know how much liquid is present, and mass/volume ratio to recognize whether it is still the same material.
`;export{e as default};
