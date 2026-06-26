const e=`\uFEFF# Hydrodynamics - Common Errors and Diagnosis\r
\r
## Conceptual errors\r
\r
### Error 1: Confusing static pressure with thrust force\r
#### Why it seems correct\r
Many students assume that a high pressure [[p]] always implies a high velocity [[v]] because the fluid "pushes harder."\r
\r
#### Why it is incorrect\r
Bernoulli's principle demonstrates that in a horizontal conduit, where velocity increases (narrowing), static pressure decreases. Energy is conserved by transforming pressure energy into kinetic energy.\r
\r
#### Detection signal\r
When observing narrowings, the student expects pressure to rise when it actually drops.\r
\r
#### Conceptual correction\r
Remember that pressure [[p]] is a form of potential energy exchanged with kinetic energy. If the fluid accelerates, it must extract that energy from its own pressure.\r
\r
#### Mini-example\r
- ❌ **Incorrect**: Water in a Venturi narrowing has more pressure.\r
- ✅ **Correct**: It has more velocity, but its pressure is lower.\r
\r
### Error 2: Ignoring mass conservation (Flow Rate)\r
#### Why it seems correct\r
It is thought that water "compresses" when passing through a narrowing, allowing less total volume per second to pass.\r
\r
#### Why it is incorrect\r
In incompressible liquids, the flow rate [[Q]] is constant throughout the conduit. What enters at one end must exit at the other in the same time interval.\r
\r
#### Detection signal\r
Obtaining different flow rates at the entry and exit of a closed conduit without branches.\r
\r
#### Conceptual correction\r
Always validate the product of area [[A]] times velocity [[v]] in each section of the system.\r
\r
#### Mini-example\r
- ❌ **Incorrect**: Q_1 > Q_2 in a narrowing pipe.\r
- ✅ **Correct**: A_1 v_1  igual a  A_2 v_2.\r
\r
## Model errors\r
\r
### Error 3: Applying Bernoulli in high turbulence zones\r
#### Why it seems correct\r
Bernoulli's equation\r
\r
{{f:head_hidro}}\r
\r
is attempted to calculate the pressure drop through a nearly closed valve or a pump.\r
\r
#### Why it is incorrect\r
Bernoulli assumes ideal flow without losses. In mechanical devices or high turbulence zones, energy dissipation is massive and the ideal model fails.\r
\r
#### Detection signal\r
Impossible pressure results or lack of power terms in the balance.\r
\r
#### Conceptual correction\r
Transition to the Extended Bernoulli model that includes head losses and shaft work.\r
\r
#### Mini-example\r
- ❌ **Incorrect**: Using pure Bernoulli through a hydraulic pump.\r
- ✅ **Correct**: Using energy balance with the pump power term.\r
\r
## Mathematical errors\r
\r
### Error 4: Dimensional inconsistency in Bernoulli\r
#### Why it seems correct\r
It is tempting to directly add pressure in Pascals with height in meters.\r
\r
#### Why it is incorrect\r
Each term in the equation must have the same units. You cannot add [Pa] with [m].\r
\r
#### Detection signal\r
Inconsistent final units or errors of several orders of magnitude.\r
\r
#### Conceptual correction\r
Ensure all terms are in meters (dividing by [[rho]] g) or all in Pascals (multiplying by [[rho]] g).\r
\r
#### Mini-example\r
- ❌ **Incorrect**: 100000text{ Pa} + 10text{ m}.\r
- ✅ **Correct**: 100000text{ Pa} + (10text{ m} cdot 1000text{ kg/m}^3 cdot 9.81text{ m/s}^2).\r
\r
## Interpretation errors\r
\r
### Error 5: Not validating absolute pressure\r
#### Why it seems correct\r
A very negative gauge pressure is calculated and accepted as valid.\r
\r
#### Why it is incorrect\r
Minimum absolute pressure is vacuum (zero). If gauge pressure drops below -1text{ atm}, the result is physically impossible.\r
\r
#### Detection signal\r
Calculated pressures implying impossible tensile stresses in the liquid.\r
\r
#### Conceptual correction\r
Always add atmospheric pressure to verify that absolute pressure is positive.\r
\r
#### Mini-example\r
- ❌ **Incorrect**: Pressure of -2text{ bar} gauge.\r
- ✅ **Correct**: Minimum pressure is -1.013text{ bar} gauge (total vacuum).\r
\r
## Quick self-control rule\r
\r
- **Step 1**: Have I verified Continuity? Check that A cdot v is constant.\r
- **Step 2**: Are units consistent? Verify that all terms are in meters or Pascals.\r
- **Step 3**: Is the sign of height [[z]] correct relative to the reference level?\r
- **Step 4**: Is the resulting absolute pressure positive?\r
- **Step 5**: Have I included losses if the section is long or has fittings?\r
`;export{e as default};
