# Common errors — Practical Examples

## Conceptual errors

### Error 1: Believing that a COP greater than one violates the second law

**Why it seems correct**
The student knows that the efficiency of a heat engine is limited to values less than one. Upon seeing a [[COP_real]] of 2.8, the student generalizes that restriction and concludes the result is impossible.

**Why it is incorrect**
COP does not measure conversion of heat into work but transfer of heat per unit of work consumed. A refrigerator does not convert energy but moves it, consuming [[W_comp]] to transfer [[Q_C]] from the cold to the hot reservoir. COP can be much greater than one without violating any law.

**Detection signal**
If the student rejects a [[COP_real]] of 2.8 arguing it exceeds 100 % efficiency, they are confusing COP with thermal efficiency.

**Conceptual correction**
COP measures heat transferred per unit of work, not heat converted to work. The less-than-one restriction only applies to thermal efficiency of engines. COP is bounded above by [[COP_Carnot]], which is always greater than one for practical systems.

**Contrast mini-example**
A refrigerator with [[T_C]] of 255 K and [[T_H]] of 308 K has [[COP_Carnot]] of 4.81 and [[COP_real]] of 2.8. The thermal efficiency of an engine between the same reservoirs would be only 0.172. Confusing COP with efficiency leads to rejecting perfectly legitimate values.

## Model errors

### Error 2: Using the Carnot COP to size a real system

**Why it seems correct**
The student calculates [[COP_Carnot]] and uses it directly to estimate the cooling capacity of the real system. The formula is simple and produces a concrete number.

**Why it is incorrect**
[[COP_Carnot]] is a theoretical limit assuming total reversibility. Real systems have a [[COP_real]] that is 30 to 60 % of the Carnot value. Using the Carnot COP as a prediction overestimates cooling capacity by a factor of 2 to 3.

**Detection signal**
If the resulting [[eta_Carnot]] is 100 %, the student has confused the real COP with the Carnot COP. Every real system has [[eta_Carnot]] less than 100 %.

**Conceptual correction**
Always multiply [[COP_Carnot]] by a realistic Carnot fraction (0.30 to 0.60) to obtain an estimate of [[COP_real]]. Alternatively, use the COP provided directly by the manufacturer.

**Contrast mini-example**
With [[COP_Carnot]] of 4.81 and [[W_comp]] of 120 W, the student predicts [[Q_C]] of 577 W. With [[COP_real]] of 2.8, the actual capacity is 336 W. The 72 % overestimation would lead to an undersized system that cannot reach the target temperature.

## Mathematical errors

### Error 3: Using Celsius temperatures in the Carnot COP formula

**Why it seems correct**
Problem data give temperatures in Celsius and the student substitutes them directly without converting to kelvin.

**Why it is incorrect**
The Carnot COP formula requires absolute temperatures. With minus 18 degrees and 35 degrees in Celsius, the student calculates minus 18 divided by 53, obtaining minus 0.34, a physically meaningless negative value.

**Detection signal**
If the calculated COP is negative or extraordinarily different from the 3 to 15 range with conventional HVAC temperatures, Celsius was likely used.

**Conceptual correction**
Always convert both temperatures to kelvin by adding 273.15 before substituting. [[T_C]] of minus 18 degrees is 255 K and [[T_H]] of 35 degrees is 308 K. The correct [[COP_Carnot]] is 255 divided by 53, giving 4.81.

**Contrast mini-example**
In Celsius one obtains minus 0.34 (negative, meaningless). In kelvin one obtains 4.81 (positive, coherent). The difference is so drastic that it immediately reveals the unit error.

## Interpretation errors

### Error 4: Confusing compressor power with cooling capacity

**Why it seems correct**
The student sees that the compressor consumes 120 W and assumes that is the cooling capacity of the system. The power is a concrete numerical value and seems to represent the appliance capacity.

**Why it is incorrect**
The power [[W_comp]] is the energy input to the system, not its useful output. The cooling capacity [[Q_C]] is [[COP_real]] times [[W_comp]], which is always greater than [[W_comp]] if [[COP_real]] is greater than one.

**Detection signal**
If the student states that the cooling capacity equals the compressor electrical power, they are ignoring the COP multiplier effect.

**Conceptual correction**
Compressor power is the energy cost. Cooling capacity is that cost multiplied by [[COP_real]]. With a COP of 2.8, the 120 W compressor produces 336 W of cooling.

**Contrast mini-example**
A student says the 120 W refrigerator can extract 120 W of heat. In reality, with [[COP_real]] of 2.8, it extracts 336 W. The error underestimates capacity by a factor of 2.8 and would lead to oversizing the compressor.

## Quick self-control rule

### Error 5: Not verifying the energy balance

**Why it seems correct**
The student calculates [[Q_C]] and [[Q_H]] separately and does not feel the need to verify they satisfy the energy balance. Both values seem reasonable individually.

**Why it is incorrect**
The first law of thermodynamics requires that [[Q_H]] be exactly [[Q_C]] plus [[W_comp]]. If the sum does not match, at least one of the three values is incorrect.

**Detection signal**
Always calculate [[Q_H]] minus [[Q_C]] and verify the difference is exactly [[W_comp]]. If it does not match, there is an error in some step.

**Conceptual correction**
Use the energy balance as a mandatory verification at the end of every problem. [[Q_H]] is [[Q_C]] plus [[W_comp]]. This rule never fails and detects numerical, unit and model errors.

**Contrast mini-example**
The student calculates [[Q_C]] of 336 W and [[Q_H]] of 500 W. The difference is 164 W, but [[W_comp]] is 120 W. The 44 W discrepancy reveals an error. The correct [[Q_H]] is 456 W, verifiable as 336 plus 120.
