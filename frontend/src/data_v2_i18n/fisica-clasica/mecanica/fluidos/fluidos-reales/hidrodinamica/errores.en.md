# Hydrodynamics - Common Errors and Diagnosis

## Conceptual errors

### Error 1: Confusing static pressure with thrust force
#### Why it seems correct
Many students assume that a high pressure [[p]] always implies a high velocity [[v]] because the fluid "pushes harder."

#### Why it is incorrect
Bernoulli's principle demonstrates that in a horizontal conduit, where velocity increases (narrowing), static pressure decreases. Energy is conserved by transforming pressure energy into kinetic energy.

#### Detection signal
When observing narrowings, the student expects pressure to rise when it actually drops.

#### Conceptual correction
Remember that pressure [[p]] is a form of potential energy exchanged with kinetic energy. If the fluid accelerates, it must extract that energy from its own pressure.

#### Mini-example
- ❌ **Incorrect**: Water in a Venturi narrowing has more pressure.
- ✅ **Correct**: It has more velocity, but its pressure is lower.

### Error 2: Ignoring mass conservation (Flow Rate)
#### Why it seems correct
It is thought that water "compresses" when passing through a narrowing, allowing less total volume per second to pass.

#### Why it is incorrect
In incompressible liquids, the flow rate [[Q]] is constant throughout the conduit. What enters at one end must exit at the other in the same time interval.

#### Detection signal
Obtaining different flow rates at the entry and exit of a closed conduit without branches.

#### Conceptual correction
Always validate the product of area [[A]] times velocity [[v]] in each section of the system.

#### Mini-example
- ❌ **Incorrect**: Q_1 > Q_2 in a narrowing pipe.
- ✅ **Correct**: A_1 v_1  igual a  A_2 v_2.

## Model errors

### Error 3: Applying Bernoulli in high turbulence zones
#### Why it seems correct
Bernoulli's equation

{{f:head_hidro}}

is attempted to calculate the pressure drop through a nearly closed valve or a pump.

#### Why it is incorrect
Bernoulli assumes ideal flow without losses. In mechanical devices or high turbulence zones, energy dissipation is massive and the ideal model fails.

#### Detection signal
Impossible pressure results or lack of power terms in the balance.

#### Conceptual correction
Transition to the Extended Bernoulli model that includes head losses and shaft work.

#### Mini-example
- ❌ **Incorrect**: Using pure Bernoulli through a hydraulic pump.
- ✅ **Correct**: Using energy balance with the pump power term.

## Mathematical errors

### Error 4: Dimensional inconsistency in Bernoulli
#### Why it seems correct
It is tempting to directly add pressure in Pascals with height in meters.

#### Why it is incorrect
Each term in the equation must have the same units. You cannot add [Pa] with [m].

#### Detection signal
Inconsistent final units or errors of several orders of magnitude.

#### Conceptual correction
Ensure all terms are in meters (dividing by [[rho]] g) or all in Pascals (multiplying by [[rho]] g).

#### Mini-example
- ❌ **Incorrect**: 100000text{ Pa} + 10text{ m}.
- ✅ **Correct**: 100000text{ Pa} + (10text{ m} cdot 1000text{ kg/m}^3 cdot 9.81text{ m/s}^2).

## Interpretation errors

### Error 5: Not validating absolute pressure
#### Why it seems correct
A very negative gauge pressure is calculated and accepted as valid.

#### Why it is incorrect
Minimum absolute pressure is vacuum (zero). If gauge pressure drops below -1text{ atm}, the result is physically impossible.

#### Detection signal
Calculated pressures implying impossible tensile stresses in the liquid.

#### Conceptual correction
Always add atmospheric pressure to verify that absolute pressure is positive.

#### Mini-example
- ❌ **Incorrect**: Pressure of -2text{ bar} gauge.
- ✅ **Correct**: Minimum pressure is -1.013text{ bar} gauge (total vacuum).

## Quick self-control rule

- **Step 1**: Have I verified Continuity? Check that A cdot v is constant.
- **Step 2**: Are units consistent? Verify that all terms are in meters or Pascals.
- **Step 3**: Is the sign of height [[z]] correct relative to the reference level?
- **Step 4**: Is the resulting absolute pressure positive?
- **Step 5**: Have I included losses if the section is long or has fittings?
