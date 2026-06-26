# Common Errors in Engineering Applications

## Conceptual errors

### Error 1: Confusing useful power with input power
- **why it seems correct**: Because it is assumed that a 1000 W machine delivers 1000 W to the water.
- **why it is incorrect**: Because thermal and mechanical losses are inevitable by the second law.
- **detection signal**: The calculated efficiency [[eta]] is equal to or greater than 1.
- **conceptual correction**: Useful power [[P_util]] is always a fraction of input power [[P_in]].
- **mini-example**: If you pay for 100 W and the water receives 80 W, the efficiency is 0.8, not 1.0.

### Error 2: Flow increases with discharge pressure
- **why it seems correct**: By analogy with blowing harder; it is believed that more pressure means more flow.
- **why it is incorrect**: In centrifugal pumps, the curve is decreasing; more load means less flow [[Q]].
- **detection signal**: Absurdly high flow rates in high-head systems.
- **conceptual correction**: The operating point depends on the intersection with the system curve.
- **mini-example**: A pump lifting water to 10m moves more liters than if it lifts it to 50m.

## Model errors

### Error 1: Ignoring viscosity in pipes
- **why it seems correct**: Because the ideal Bernoulli model greatly simplifies the calculations.
- **why it is incorrect**: In real fluids, viscosity generates head losses that require more power.
- **detection signal**: The installed pump fails to move the fluid at all.
- **conceptual correction**: The head loss term h_f must be added to the energy balance.
- **mini-example**: An oil pipeline requires pumping stations every few kilometers just to overcome friction.

### Error 2: Incompressible flow in fast gases
- **why it seems correct**: It facilitates using the simple formula  P  igual a  Delta p Q .
- **why it is incorrect**: If Mach > 0.3, the density densidad del fluido changes and energy is consumed in compressing the gas.
- **detection signal**: The calculated power is 20% lower than the actual measured power.
- **conceptual correction**: Use compressible flow models or gas thermodynamics.
- **mini-example**: In a turbocharger, ignoring compression would lead to a completely useless design.

## Mathematical errors

### Error 1: Incorrect flow units
- **why it seems correct**: Because liters per minute are the standard unit in catalogs.
- **why it is incorrect**: Power in Watts strictly requires flow [[Q]] in m³/s.
- **detection signal**: Power results thousands of times higher than reality.
- **conceptual correction**: Always divide liters/min by 60,000 to convert to m³/s.
- **mini-example**: 60 l/min is not 60 m³/s, it is 0.001 m³/s.

### Error 2: Pressure scale bar vs Pascal
- **why it seems correct**: The bar is an intuitive and common unit in gauges.
- **why it is incorrect**: The Pascal is the SI unit needed for the product to give Watts.
- **detection signal**: Power of a few watts for giant industrial systems.
- **conceptual correction**: Multiply bars by 100,000 before operating.
- **mini-example**: 2 bar is 200,000 Pa, not 2 Pa.

## Interpretation errors

### Error 1: Misinterpreting the BEP point
- **why it seems correct**: It is thought that any point on the pump curve is equally good.
- **why it is incorrect**: Operating far from the BEP causes cavitation, vibrations, and premature wear.
- **detection signal**: "Gravel" noise inside the pump and very low efficiency [[eta]].
- **conceptual correction**: Select the pump so the system crosses near its maximum efficiency.
- **mini-example**: Using a high-flow pump for a minimal drip destroys the pump due to heat.

## Quick self-control rule
Always verify that  [[P_util]] < [[P_in]] . If your calculation says the pump creates energy from nothing, check the unit conversions, especially from bars to Pascals and from l/min to m³/s.

