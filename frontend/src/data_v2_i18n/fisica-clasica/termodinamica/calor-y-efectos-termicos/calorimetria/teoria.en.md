# Calorimetry

## Conceptual context

Calorimetry is the field of thermal physics that studies and quantifies the exchange of heat between bodies. It is the most direct application of the energy conservation principle to thermal systems: if a set of bodies at different temperatures is isolated from the surroundings, the energy that some release is exactly the energy that others absorb.

This leaf comes after the concepts of [[Q_i]] (heat as energy in transit), [[c_i]] (specific heat capacity as a material property), and [[DeltaT_i]] (temperature change), and before the study of phase changes, where calorimetry is extended to include latent heats. Calorimetry simultaneously brings together all the magnitudes from earlier leaves and integrates them into a single principle.

The central question is deceptively simple: to what temperature will two bodies at different temperatures arrive when placed in thermal contact inside an isolated container? The answer is not the arithmetic mean of the temperatures, but a weighted average where the weight of each body is its total heat capacity [[m_i]] · [[c_i]].

## 🟢 Essential level

When hot water is mixed with cold water in an insulated cup, both reach an intermediate temperature. If there is much more hot water than cold, the final temperature is nearly as high as the hot water. If there is much more cold water, the final temperature is close to the cold water. The more abundant water "wins" because it has more capacity to store energy.

The calorimetry principle expresses this idea precisely: in an isolated system, total energy is conserved. The heat released by the bodies that cool down is exactly equal to the heat absorbed by those that warm up. This is written by saying that the sum of all exchanged heats is zero.

If a hot body releases heat, its heat has a negative sign (it loses energy). If a cold body absorbs heat, its heat has a positive sign (it gains energy). The zero-sum condition ensures that energy is neither created nor destroyed.

## 🔵 Formal level

The calorimetry principle is expressed as:

{{f:principio_calorimetria}}

Where each [[Q_i]] is the heat of the i-th body of the system, calculated using the sensible heat relation with its specific heat capacity [[c_i]], its mass [[m_i]], and its temperature change [[DeltaT_i]].

{{f:calor_sensible_i}}

For a two-body system without phase change, the equilibrium temperature is obtained by solving for [[T_eq]] from the zero-sum condition:

{{f:temperatura_equilibrio_dos_cuerpos}}

This expression is a weighted average of the initial temperatures where the weights are the total heat capacities [[m_i]] · [[c_i]] of each body. If the heat capacities are equal, [[T_eq]] is simply the arithmetic mean. If one is much greater, [[T_eq]] approaches the initial temperature of the dominant body.

The equilibrium temperature [[T_eq]] is always strictly between the initial temperatures of the coldest and hottest bodies in the system. If the result falls outside that interval, there is an error in the setup.

In practice, the formal calculation is done in two passes: first [[T_eq]] is obtained with the weights [[m_i]] · [[c_i]], and then the [[Q_i]] values are computed with [[DeltaT_i]] to check the zero sum.

## 🔴 Structural level

The calorimetry principle is a direct manifestation of the first law of thermodynamics applied to an isolated system. In an isolated system, the total heat exchanged with the surroundings is zero by definition. The heat that flows between bodies of the system is redistributed internally but does not escape or arrive from outside. The zero-sum condition is therefore the conservation of the total internal energy of the system.

At the molecular level, the equilibrium temperature represents the state in which all available molecular motion modes have, on average, the same energy. Hotter bodies have molecules with higher average kinetic energy; upon contact with colder bodies, molecular collisions transfer net energy from the more energetic to the less energetic until both populations have the same energy distribution. At that point, net energy exchange ceases and temperature is uniform throughout the system.

The formula for [[T_eq]] as a weighted average has an important structural interpretation. Total heat capacities [[m_i]] · [[c_i]] are the "weights" that determine how much each body pulls the final temperature toward its own initial value. A body with large [[m_i]] · [[c_i]] is a "thermal reservoir" that barely changes temperature upon receiving or releasing heat, and therefore dominates the equilibrium. This is why the oceans stabilize the climate: their total [[m_i]] · [[c_i]] is so enormous that they barely change temperature even while exchanging huge amounts of heat with the atmosphere.

## Deep physical interpretation

The weighted-average character of [[T_eq]] has immediate practical implications. If one wants [[T_eq]] to be close to the temperature of body A, the total heat capacity of A must be much greater than that of the rest of the system. This is achieved by increasing the mass of A, using a material with higher [[c_i]], or both.

In experimental calorimetry, the calorimeter itself (the container) has a non-zero total heat capacity. If ignored, the measured equilibrium temperature differs from that calculated using only the bodies of interest. This systematic error is corrected by experimentally determining the "water equivalent" of the calorimeter: the mass of water that would have the same total heat capacity as the calorimeter, and including it as an additional body in the balance.

> [!NOTE]
> In calorimetry, the zero-sum principle for heats is always valid. If the calculated heats do not sum to zero, there is a sign error, a missing body, or an unaccounted phase change.

## Order of magnitude

In secondary school laboratory experiments:
- Calorimeter water: 200 g, [[c_i]] = 4186 J/(kg·K), total heat capacity ≈ 837 J/K
- Unknown metal: 100 g, [[c_i]] ≈ 400–900 J/(kg·K), total heat capacity ≈ 40–90 J/K
- Water dominates the equilibrium because its total heat capacity is 10–20 times that of the metal

In industrial quenching applications (steel in water):
- Steel: 1 kg, [[c_i]] ≈ 490 J/(kg·K), total heat capacity ≈ 490 J/K
- Quench water: 10 kg, [[c_i]] = 4186 J/(kg·K), total heat capacity ≈ 41 860 J/K
- Water dominates: equilibrium temperature is less than 2 °C above the initial temperature of the water

## Personalized resolution method

**Type 1: Determine [[T_eq]] given all bodies of the system.**

1. Identify all bodies of the system, including the calorimeter if its heat is not negligible.
2. For each body, identify [[m_i]], [[c_i]], and the initial temperature.
3. Calculate the total heat capacity of each body: [[m_i]] · [[c_i]].
4. Apply the equilibrium temperature formula as the weighted average of initial temperatures.
5. Verify the result lies between the lowest and highest initial temperatures.
6. Calculate the individual [[Q_i]] and verify they sum to zero.

**Type 2: Determine the specific heat capacity [[c_i]] of an unknown material.**

1. Identify the known bodies and the unknown body.
2. Measure [[T_eq]] experimentally.
3. Calculate the heat absorbed by the water using [[m_i]], [[c_i]], and the difference between [[T_eq]] and its initial temperature.
4. Apply the zero-sum condition: the heat released by the unknown material is equal in magnitude and opposite in sign to that of the water.
5. Solve for [[c_i]] of the unknown material.
6. Compare with a table to identify the material.

## Special cases and extended example

**System with three or more bodies**: The formula for [[T_eq]] generalizes by summing [[m_i]] · [[c_i]] · T_initial_i in the numerator and [[m_i]] · [[c_i]] in the denominator over all bodies i. The zero-sum condition for [[Q_i]] remains valid and is the self-check criterion.

**Non-ideal calorimeter**: If the calorimeter has a water equivalent, it is added to the calorimeter water as if it were an additional body with the same [[c_i]] as water. The water equivalent is determined in a prior calibration experiment.

**System with phase change**: If any body undergoes a phase transition on its way to [[T_eq]], the process must be divided into stages. In the transition stage, temperature change is zero and only latent heat is involved.

**Mixing thermometry**: In medical and engineering applications, mixing calorimetry is used to temper materials, calibrate thermometers, or determine the heat capacity of biological systems using differential scanning calorimeters.

> [!WARNING]
> The most frequent error in calorimetry is assigning positive heats to all bodies, including those that cool down. Bodies that release heat have negative [[Q_i]].

## Real student questions

**Why isn't it the arithmetic mean of the temperatures?**
The arithmetic mean would be correct only if both bodies had the same total heat capacity. In general, a body with greater [[m_i]] · [[c_i]] needs more heat to change its temperature by one kelvin and therefore "pulls" the equilibrium more strongly toward its initial temperature. The weighted average reflects this imbalance.

**What happens if one of the bodies changes phase during the process?**
The process is no longer pure sensible heat. One must calculate how far the cooling or heating proceeds before the transition (using sensible [[Q_i]]), then apply the latent heat of the transition, and then continue with sensible heat in the new phase. If the available energy is not sufficient to complete the transition, the system reaches equilibrium at the transition temperature with part of the material in each phase.

**How is the water equivalent of the calorimeter measured experimentally?**
A calibration experiment is performed by mixing hot water of known mass and temperature with cold water of known mass and temperature inside the calorimeter. The difference between the measured [[T_eq]] and the calculated one without the calorimeter is due to the heat absorbed by the calorimeter. Equating that difference to the sensible heat of an equivalent water mass determines that equivalent.

## Cross-cutting connections and study paths

Calorimetry is the direct prerequisite for [phase changes](leaf:fisica-clasica/termodinamica/calor-y-efectos-termicos/cambios-de-estado), where the zero-sum principle is extended to include latent heats. It also connects with [thermodynamics](leaf:fisica-clasica/termodinamica) through the first law, and with [statistical physics](leaf:fisica-moderna/fisica-estadistica/distribucion-de-boltzmann) through the microscopic description of thermal equilibrium.

In engineering, the design of heating, cooling, and thermal storage systems is based directly on the calorimetric principles developed in this leaf.

## Final synthesis

Calorimetry applies energy conservation to isolated thermal systems: the algebraic sum of all exchanged [[Q_i]] is zero. The equilibrium temperature [[T_eq]] is the weighted average of initial temperatures with weights equal to the total heat capacities [[m_i]] · [[c_i]] of each body. The principle is valid without phase changes; with them, the process is divided into stages. The zero-sum condition is always the definitive self-check criterion.
