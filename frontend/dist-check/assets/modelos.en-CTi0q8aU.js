const e=`# Physical Models of the Heat Pump

## Ideal model
The ideal model of the heat pump is based on the **Inverse Carnot Cycle**. This model establishes the absolute physical limit of efficiency for any system that moves [[heat|q_calor]] between two temperature sources. In the ideal model, all processes are considered reversible, which implies that there is no friction in the compressor, no pressure drops in the pipes, and the heat exchange at the terminals occurs without a temperature difference. The magnitude that is conserved in this ideal cycle is entropy during the adiabatic compression and expansion processes. This model is fundamental to understanding that [[COP|cop]] has an insurmountable physical ceiling imposed by the second law of thermodynamics.

## Hypotheses
To apply this model, the following fundamental hypotheses are assumed:
1.  **Steady state**: Mass and energy flows are considered constant over time. If violated, the system would suffer pressure oscillations that could damage the compressor.
2.  **Incompressible fluid in liquid phase**: The refrigerant enters the expansion valve as a saturated liquid. If it contained gas, the cooling capacity would drop drastically.
3.  **Isentropic compression**: The compressor does not add entropy to the fluid. Violating this hypothesis implies admitting friction heating that reduces the real [[cop]].
4.  **Perfect insulation**: There is no unwanted heat exchange in the connection lines. Violating this assumes a loss of useful thermal capacity.
5.  **Constant pressure in exchangers**: Evaporation and condensation occur without pressure loss. Violating this would force the compressor to work harder to overcome internal friction.

## Quantitative validity domain
The energy balance model is valid as long as the outdoor air temperature is higher than the freezing point of the refrigerant under evaporation pressure. Quantitatively, the approximation is reasonable when the thermal jump between sources is less than 50 degrees Celsius.

A key indicator is that the calculated [[cop]] must always satisfy the physical inequality:
\`1.0 < COP < COP_Carnot\`

Typically, for a standard home, the operational validity range is located with an outdoor temperature \`T_ext > -15\` degrees Celsius. Below this order of magnitude, real performance drops asymptotically towards unity, making the "efficient pumping" model lose its competitive advantage over a simple resistance.

## Model failure signals
A student can detect that the ideal model no longer applies through the following observable signals:
- **Frost formation**: The presence of an ice layer greater than 5 millimeters on the fins of the outdoor evaporator indicates that the thermal exchange with the environment has been blocked.
- **Excessive electrical consumption**: If the measured [[electric work|w_elec]] approaches the value of the delivered [[heat|q_calor]], the [[COP|cop]] is collapsing towards 1.0, indicating that the equipment is no longer "pumping" but only dissipating energy.
- **Liquid noise in the compressor**: Indicates that the refrigerant has not completely evaporated, violating the dry vapor hypothesis and risking the mechanical integrity of the motor.

## Extended or alternative model
The extended model or **Real vapor compression cycle** includes real system irreversibilities, such as the isentropic efficiency of the compressor (typically 70%) and liquid subcooling. When the precision of the ideal model is no longer enough due to the need to size specific components or predict the impact of mechanical irreversibilities, it is necessary the **transition to the alternative model** or **when to switch to the extended model**. Unlike the ideal model, this model explains why the real [[cop]] of commercial equipment is usually only 40-50% of the theoretical Carnot limit due to thermal noise and pressure losses in valves.

## Operational comparison
| Criterion | Ideal Model (Carnot) | Extended Model (Real) |
| :--- | :--- | :--- |
| **Precision** | Low (theoretical ceiling) | High (commercial) |
| **Complexity** | Minimum (2 temperatures) | Medium (enthalpies) |
| **Application range** | Conceptual analysis | Engineering design |
| **Advantage** | Identifies the physical limit | Predicts the real bill |
| **Limit** | Ignores friction | Requires manufacturer data |

While the ideal model is useful for understanding the theoretical advantage of aerothermal energy, the extended model is the only one capable of predicting the real [[saving|ahorro]] considering defrost losses and fluid behavior under real working pressures.
`;export{e as default};
