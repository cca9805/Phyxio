# Exam-type example

## Problem statement

A 5 kg iron block at 800 K is placed in a large lake at 290 K until thermal equilibrium is reached. The specific heat capacity of iron is 450 J/(kg·K). Calculate: (a) the entropy change of the block, (b) the entropy change of the lake, (c) the entropy change of the universe, and (d) the exergy destroyed in the process if the reference temperature is 290 K. Determine whether the process is reversible, irreversible, or impossible.

## Data

- Iron mass: 5 kg
- Initial iron temperature: [[T_sis]] = 800 K
- Lake temperature (reservoir, constant): [[T_ent]] = 290 K
- Final iron temperature (equilibrium): 290 K
- Specific heat capacity of iron: 450 J/(kg·K)
- Real heat released by the block: [[Q_sis]], obtained from the cooling step.

## System definition

The system is the iron block. The surroundings are the lake, modelled as a thermal reservoir at constant temperature [[T_ent]] = 290 K (its mass is so large that its temperature does not change appreciably). The thermodynamic universe is block + lake.

## Physical model

The irreversibility criterion is applied:

{{f:criterio_irreversibilidad}}

For [[DeltaS_sis]], the heating/cooling formula with constant heat capacity is used (state function). For [[DeltaS_ent]], the isothermal formula with the real heat released by the block to the lake is used. The central hypothesis is that iron's heat capacity is constant between 290 K and 800 K (actual deviation below 8% for solid iron, acceptable for an estimate).

## Model justification

The model is valid because:
- The lake is large enough that its temperature remains constant (ideal reservoir): a million kg of water absorbs the block's heat without appreciably changing its temperature.
- The block reaches equilibrium at 290 K (same T as the lake at the end).

The model would stop being valid if:
- The lake were a small container (water temperature would change appreciably).
- The iron underwent a phase change in the interval (the α→γ allotropic transition of iron occurs at 1185 K, outside our range).

## Symbolic solution

Step 1: [[DeltaS_sis]] (state function, reversible isobaric cooling path):

The block entropy is evaluated through the reversible cooling path with constant heat capacity.

Step 2: Real heat released by the block to the lake:

The real heat released is obtained by multiplying mass, heat capacity, and temperature drop.

Step 3: [[DeltaS_ent]] (isothermal reservoir):

The lake entropy is obtained by dividing the real absorbed heat by [[T_ent]].

Step 4: Universe balance:

{{f:criterio_irreversibilidad}}

## Numerical substitution

**[[DeltaS_sis]]**: with mass 5 kg, heat capacity 450 J/(kg·K), final state at 290 K, and [[T_sis]] = 800 K, the temperature ratio is 290/800 = 0.3625. Its natural logarithm is approximately −1.015, so the block has [[DeltaS_sis]] ≈ −2284 J/K.

**Heat released by block**: the product of mass, heat capacity, and temperature drop gives 1147500 J, or 1147.5 kJ.

**[[DeltaS_ent]]**: dividing 1147500 J by 290 K gives approximately +3957 J/K. Thus [[DeltaS_ent]] ≈ +3957 J/K.

**[[DeltaS_univ]]**: adding −2284 + 3957 = +1673 J/K. Thus [[DeltaS_univ]] ≈ +1673 J/K.

**Destroyed exergy**: multiplying T_0 × [[S_gen]] = 290 × 1673 ≈ 485170 J ≈ 485 kJ.

## Dimensional validation

The dimensional check confirms that each entropy term is in J/K and destroyed exergy is in joules.

- [[DeltaS_sis]]: `[M] · [L² T⁻² Θ⁻¹] · [1] = [M L² T⁻² Θ⁻¹]` → J/K
- [[DeltaS_ent]]: `[M L² T⁻²] / [Θ] = [M L² T⁻² Θ⁻¹]` → J/K
- Exergy: `[Θ] · [M L² T⁻² Θ⁻¹] = [M L² T⁻²]` → J

## Physical interpretation

The iron block loses a large amount of entropy ([[DeltaS_sis]] ≈ −2284 J/K) as it cools from 800 K to 290 K. However, the lake gains even more entropy ([[DeltaS_ent]] ≈ +3957 J/K) because it absorbs the same heat at a much lower temperature (290 K vs. 800 K). The fundamental asymmetry: the same energy is "worth more entropy" when absorbed at low temperature.

The result [[DeltaS_univ]] ≈ +1673 J/K >> 0 confirms the process is **strongly irreversible**. The large temperature difference (800 K vs. 290 K) generates enormous irreversibility. The destroyed exergy (≈ 485 kJ) represents the potential work that could have been extracted if a reversible heat engine had been used between the block and the lake, instead of simple direct thermal contact.

This means energy is conserved, but its ability to become work decreases. Physically, the temperature jump dominates: the lake receives heat at low temperature, so its entropy increase is larger than the block's entropy decrease.

If instead of directly submerging the block, a Carnot engine operating between 800 K and 290 K had been used, up to 485 kJ of useful work could have been extracted. That work has been irreversibly lost through direct contact.

# Real-world example

## Context

In a petrochemical plant, a flow of combustion gases at 1200 K is cooled to 500 K in a heat exchanger that preheats combustion air from 300 K to 600 K. The gas mass flow rate is 10 kg/s with average heat capacity 1100 J/(kg·K) and the air flow is 15 kg/s with average heat capacity 1005 J/(kg·K). The engineer needs to calculate the heat exchanger's entropy generation rate to evaluate its second-law efficiency and decide whether it is worth investing in an exchanger with a lower thermal jump.

## Physical estimation

Order-of-magnitude estimate: for combustion gases cooling from 1200 K to 500 K, the entropic contribution is negative because they lose thermal dispersal.

The gas contribution rate is approximately −9625 J/(K·s).

For air heating from 300 K to 600 K, the contribution is positive because it absorbs heat at a lower mean temperature.

The air contribution rate is approximately +10447 J/(K·s).

Total universe change (universe is gases + air, no external reservoir):

Adding both contributions gives [[DeltaS_univ]] ≈ +822 J/(K·s).

The entropy generation rate is [[S_gen]] ≈ 822 W/K.

Destroyed exergy per second: 300 × 822 ≈ 246600 W ≈ 247 kW.

## Interpretation

The heat exchanger continuously destroys 247 kW of exergy. If the combustion gases were cooled to a temperature closer to that of the air (lower log-mean ΔT), entropy generation would decrease. However, that would require a larger exchange surface (greater investment). The entropic analysis provides the quantitative criterion: does the savings in exergy (proportional to reduced [[S_gen]]) justify the cost of the larger exchanger?

In practice, thermoeconomic optimisation seeks the log-mean ΔT that minimises total cost (investment + exergetic losses valued in EUR/kWh). The rate [[S_gen]] ≈ 822 W/K indicates this exchanger has significant room for improvement, given that its second-law efficiency is approximately (1 − 822/theoretical_maximum) < 1.

The methodology of Entropy Generation Minimisation (EGM) developed by Adrian Bejan is the standard tool in thermal engineering for this type of optimisation, and is based entirely on the correct calculation of [[DeltaS_univ]] and [[S_gen]].
