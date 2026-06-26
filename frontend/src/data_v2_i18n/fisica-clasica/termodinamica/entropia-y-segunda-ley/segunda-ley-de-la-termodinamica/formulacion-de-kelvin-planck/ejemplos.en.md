# Exam-type example

## Problem statement

A cyclic heat engine receives 2400 J of heat from a hot reservoir in each cycle. The hot reservoir is at 900 K and the cold reservoir is at 300 K. The engine delivers 700 J of useful work per cycle. Calculate the rejected heat, the real efficiency, the reversible Carnot limit, and decide whether the proposal respects the Kelvin-Planck statement.

## Data

- Heat absorbed from the hot reservoir: [[Q_H]] is 2400 J per cycle.
- Net useful work: [[W]] is 700 J per cycle.
- Hot reservoir temperature: [[T_H]] is 900 K.
- Cold reservoir temperature: [[T_C]] is 300 K.
- The device operates in a [[ciclo]], so it stores no net internal energy.
- Diagnostic magnitudes: [[Q_C]], [[eta]], [[eta_carnot]] and [[DeltaS_universo]].

## System definition

The system is the complete heat engine during one cycle. The surroundings contain the two thermal reservoirs and the shaft receiving useful work. At the end of the cycle, the working substance returns to its initial state, so the cycle energy balance has no net internal energy variation.

## Physical model

We use the cyclic heat-engine model between two reservoirs. The engine receives [[Q_H]] from the hot reservoir, delivers [[W]] to the exterior and rejects [[Q_C]] to the cold reservoir. The physical question is not only whether energy is conserved, but whether efficiency [[eta]] remains below the second-law limits.

The model is anchored in the Kelvin-Planck statement because it identifies the forbidden situation: total conversion of absorbed heat into work, with no rejection to the cold reservoir. Here we check whether positive rejection exists and whether efficiency stays below the reversible limit.

## Model justification

The problem states that the device operates in a [[ciclo]], so Kelvin-Planck applies directly. Two absolute temperatures are also given, allowing the Carnot limit to be used as an upper comparison. Power, detailed friction and finite transfer rates are not requested, so the ideal per-cycle balance model is sufficient.

## Symbolic solution

The engine energy balance is:

{{f:balance_motor_termico}}

The real efficiency is evaluated with:

{{f:eficiencia_motor}}

The conceptual Kelvin-Planck criterion requires:

{{f:limite_kelvin_planck}}

The reversible limit between the given reservoirs is:

{{f:eficiencia_carnot_motor}}

The entropic coherence reading is:

{{f:entropia_ciclo_motor}}

## Numerical substitution

Using the energy balance, the rejected heat is 1700 J. This amount is not an accidental loss within the model: it is the heat that allows the cycle to close without attempting total conversion of [[Q_H]] into [[W]].

The real efficiency is approximately 0.292. This means the engine converts about 29.2 percent of absorbed heat into useful work. The Carnot efficiency for the given reservoirs is approximately 0.667, so the real engine remains below the reversible ceiling.

The physical comparison is clear: [[eta]] is below [[eta_carnot]] and also below one. In addition, [[Q_C]] is positive. Therefore the proposal does not violate Kelvin-Planck.

## Dimensional validation

- [[Q_H]], [[Q_C]] and [[W]] are energies: `[M L² T⁻²]`.
- [[eta]] and [[eta_carnot]] are ratios of energies or absolute temperatures: `[1]`.
- [[T_H]] and [[T_C]] are absolute temperatures in kelvin.
- [[DeltaS_universo]] is expressed as energy per temperature: `[M L² T⁻² Theta⁻¹]`.

These dimensions separate energy magnitudes, dimensionless ratios and entropic diagnosis.

## Physical interpretation

The engine is not perfect: it rejects a substantial part of the heat to the cold reservoir. That observation is not a defect in the exercise; it is precisely the mark of compatibility with Kelvin-Planck. If the calculation had produced zero [[Q_C]] with positive [[W]], the engine would have been impossible as a cyclic machine.

The Carnot limit also helps interpretation. The real engine uses less than half the reversible margin available, so engineering improvements are possible, but no improvement can bring [[eta]] to one while the system remains an ordinary cyclic heat engine.

The causal reading is that the cold reservoir is not an accessory: it is the channel through which the [[ciclo]] discharges the part of energy that cannot be organized as work. The 1700 J value is therefore a physical consequence, not just a subtraction. Because of that rejection, the engine can repeat without leaving the fluid in another state or requiring an impossible decrease of [[DeltaS_universo]].

# Real-world example

## Context

A steam power plant burns fuel to heat a fluid, expands steam in a turbine and condenses the vapor in a cold reservoir near the environment. The plant cannot convert all fuel thermal energy into electricity because it must reject heat in the condenser.

## Physical estimation

Suppose a plant absorbs 100 MJ per equivalent cycle and produces 35 MJ of net electrical work. The balance indicates that it must reject about 65 MJ to the cold reservoir. If its effective temperatures are 800 K and 300 K, the reversible limit is about 0.625, while the real efficiency is 0.35.

The quantitative reading shows two things. First, the plant does not violate Kelvin-Planck because [[Q_C]] is large and positive. Second, the difference between 0.35 and the reversible limit measures margin lost to irreversibilities, not a possibility of reaching perfect efficiency.

The estimate also gives a scale reading: for every 100 MJ entering as heat, only 35 MJ leave as net electricity and about 65 MJ must be handled by the condenser, cooling towers or cooling water. This distribution explains why heat-sink design is as important as turbine design.

## Interpretation

In a real plant, better insulation, turbines and condensers reduce losses, but they do not make the condenser dispensable. Kelvin-Planck explains why every thermal power plant needs a heat sink and why performance must be compared with [[eta_carnot]], not with the impossible ideal of total conversion.
