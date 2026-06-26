const e=`\uFEFF# Common Errors in Engineering Applications\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing useful power with input power\r
- **why it seems correct**: Because it is assumed that a 1000 W machine delivers 1000 W to the water.\r
- **why it is incorrect**: Because thermal and mechanical losses are inevitable by the second law.\r
- **detection signal**: The calculated efficiency [[eta]] is equal to or greater than 1.\r
- **conceptual correction**: Useful power [[P_util]] is always a fraction of input power [[P_in]].\r
- **mini-example**: If you pay for 100 W and the water receives 80 W, the efficiency is 0.8, not 1.0.\r
\r
### Error 2: Flow increases with discharge pressure\r
- **why it seems correct**: By analogy with blowing harder; it is believed that more pressure means more flow.\r
- **why it is incorrect**: In centrifugal pumps, the curve is decreasing; more load means less flow [[Q]].\r
- **detection signal**: Absurdly high flow rates in high-head systems.\r
- **conceptual correction**: The operating point depends on the intersection with the system curve.\r
- **mini-example**: A pump lifting water to 10m moves more liters than if it lifts it to 50m.\r
\r
## Model errors\r
\r
### Error 1: Ignoring viscosity in pipes\r
- **why it seems correct**: Because the ideal Bernoulli model greatly simplifies the calculations.\r
- **why it is incorrect**: In real fluids, viscosity generates head losses that require more power.\r
- **detection signal**: The installed pump fails to move the fluid at all.\r
- **conceptual correction**: The head loss term h_f must be added to the energy balance.\r
- **mini-example**: An oil pipeline requires pumping stations every few kilometers just to overcome friction.\r
\r
### Error 2: Incompressible flow in fast gases\r
- **why it seems correct**: It facilitates using the simple formula  P  igual a  Delta p Q .\r
- **why it is incorrect**: If Mach > 0.3, the density densidad del fluido changes and energy is consumed in compressing the gas.\r
- **detection signal**: The calculated power is 20% lower than the actual measured power.\r
- **conceptual correction**: Use compressible flow models or gas thermodynamics.\r
- **mini-example**: In a turbocharger, ignoring compression would lead to a completely useless design.\r
\r
## Mathematical errors\r
\r
### Error 1: Incorrect flow units\r
- **why it seems correct**: Because liters per minute are the standard unit in catalogs.\r
- **why it is incorrect**: Power in Watts strictly requires flow [[Q]] in m³/s.\r
- **detection signal**: Power results thousands of times higher than reality.\r
- **conceptual correction**: Always divide liters/min by 60,000 to convert to m³/s.\r
- **mini-example**: 60 l/min is not 60 m³/s, it is 0.001 m³/s.\r
\r
### Error 2: Pressure scale bar vs Pascal\r
- **why it seems correct**: The bar is an intuitive and common unit in gauges.\r
- **why it is incorrect**: The Pascal is the SI unit needed for the product to give Watts.\r
- **detection signal**: Power of a few watts for giant industrial systems.\r
- **conceptual correction**: Multiply bars by 100,000 before operating.\r
- **mini-example**: 2 bar is 200,000 Pa, not 2 Pa.\r
\r
## Interpretation errors\r
\r
### Error 1: Misinterpreting the BEP point\r
- **why it seems correct**: It is thought that any point on the pump curve is equally good.\r
- **why it is incorrect**: Operating far from the BEP causes cavitation, vibrations, and premature wear.\r
- **detection signal**: "Gravel" noise inside the pump and very low efficiency [[eta]].\r
- **conceptual correction**: Select the pump so the system crosses near its maximum efficiency.\r
- **mini-example**: Using a high-flow pump for a minimal drip destroys the pump due to heat.\r
\r
## Quick self-control rule\r
Always verify that  [[P_util]] < [[P_in]] . If your calculation says the pump creates energy from nothing, check the unit conversions, especially from bars to Pascals and from l/min to m³/s.\r
\r
`;export{e as default};
