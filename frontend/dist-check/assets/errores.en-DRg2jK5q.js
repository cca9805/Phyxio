const e=`# Frequent errors in electric motors

## Conceptual errors

### Error 1: Confusing Laplace force with motor torque

**Why it seems correct**

The student calculates the total force on the conductors using the Laplace force expression and presents that value as the motor torque, without multiplying by the armature radius [[r_a]].

**Why it is incorrect**

Force and torque are quantities with different dimensions: force is measured in newtons and torque in newton-metres. Torque is the moment of force about the rotation axis, obtained by multiplying the force by the lever arm. Without that step, the motor torque cannot be compared with the load's resistive torque, nor can mechanical power be calculated.

**Detection signal**

The student reports torque in newtons instead of newton-metres, or uses force directly in the mechanical power formula.

**Conceptual correction**

Torque is force multiplied by the armature radius [[r_a]]. Once the Laplace force [[F_L]] is calculated, torque is obtained by multiplying by the distance from the conductor to the axis. Only then does it make sense to compare it with the load torque.

**Contrast mini-example**

A motor with a total conductor force of 120 N and an armature radius of 0.05 m has a torque of 6 N·m, not 120 N. If 120 were used as the torque value and multiplied by the angular speed in rad/s, the resulting power would be twenty times overdimensioned.

## Model errors

### Error 2: Ignoring back-EMF when calculating steady-state current

**Why it seems correct**

At start-up, the full supply voltage drops across the internal resistance and current equals voltage divided by resistance. The student applies that same formula at steady state, when the motor is already running.

**Why it is incorrect**

When the motor rotates at angular speed [[omega]], the winding acts as a generator and induces a back-EMF [[epsilon_c]] that opposes the supply. Steady-state current is not total voltage divided by resistance: it is the difference between supply voltage and [[epsilon_c]], divided by internal resistance. Ignoring [[epsilon_c]] overestimates current, torque and consumed electrical power.

**Detection signal**

The calculated current far exceeds the motor's rated current, or the calculated efficiency is absurdly low because the calculated electrical power is much higher than the real value.

**Conceptual correction**

At steady state, armature current is calculated by subtracting back-EMF [[epsilon_c]] from supply voltage and dividing by the internal winding resistance. Back-EMF increases with speed: at full speed, [[epsilon_c]] can account for 90 % of the supply voltage.

**Contrast mini-example**

A motor supplied at 120 V with internal resistance of 2 Ω and back-EMF of 110 V has a steady-state current of 5 A. If [[epsilon_c]] is ignored and 120 V is divided by 2 Ω, the result is 60 A: twelve times the real current, which would give an absurdly high torque.

## Mathematical errors

### Error 3: Entering angular speed in rpm instead of rad/s

**Why it seems correct**

Motor datasheets give speed in revolutions per minute. The student copies that value directly into the back-EMF and mechanical power formulas.

**Why it is incorrect**

Physics formulas use SI units. Angular speed [[omega]] must be in radians per second. A value in rpm is numerically about one hundred times larger than the value in rad/s for typical speeds, producing errors of the same order in [[epsilon_c]] and [[P_mec]]. A speed of 1500 rpm equals 157 rad/s, not 1500 rad/s.

**Detection signal**

The calculated mechanical power is one hundred times greater than the motor's rated power, or back-EMF greatly exceeds the supply voltage.

**Conceptual correction**

Always convert rpm to rad/s by multiplying by 2π and dividing by 60. One full revolution corresponds to 2π radians, and there are 60 seconds in a minute: speed in rad/s equals the value in rpm multiplied by 2π/60, which is approximately 0.1047.

**Contrast mini-example**

A motor at 3000 rpm has an angular speed of 314 rad/s, not 3000 rad/s. If 3000 is used in the power formula with a torque of 10 N·m, the result is 30 000 W instead of the correct 3140 W.

## Interpretation errors

### Error 4: Confusing total conductor length with active length in the field

**Why it seems correct**

The student measures or is given the total winding length of the motor and enters that value as [[L_c]] in the Laplace force formula.

**Why it is incorrect**

Only the part of the conductor inside the air-gap magnetic field contributes to the Laplace force. End windings — the sections connecting active conductors at the ends of the rotor — are outside the field and produce no useful force. Using total length instead of active length [[L_c]] overestimates motor force and torque.

**Detection signal**

The length entered in the calculation exceeds the motor's stator axial length, which is the physical limit of the active length.

**Conceptual correction**

The active length [[L_c]] is the stator axial length: the distance between the two edges of the magnetic core lamination stack. End windings extend beyond that zone and, although they carry the same current, are not in the field and generate no force.

**Contrast mini-example**

A motor has conductors of 0.20 m total length but only 0.10 m lies inside the air-gap field. Using 0.20 m in the formula gives twice the real force. In a laboratory problem, that would lead to a calculated torque of 12 N·m when the real measured torque is 6 N·m.

### Error 5: Using efficiency as a percentage instead of a decimal fraction

**Why it seems correct**

Motor datasheets and catalogues express efficiency as a percentage: 85 %, 90 %, 92 %. The student copies that number directly into the mechanical power or electrical power formula without converting it.

**Why it is incorrect**

Efficiency [[eta]] in the formulas is a dimensionless fraction between 0 and 1. Entering 85 instead of 0.85 makes the result one hundred times too large. The calculated mechanical power would be one hundred times the real power, which manifestly violates energy conservation.

**Detection signal**

The calculated mechanical power exceeds the consumed electrical power, or the calculated electrical power is barely 1 % of the mechanical power.

**Conceptual correction**

An efficiency of 85 % means that 85 out of every 100 electrical joules are converted into mechanical work. As a fraction that is 0.85. Whenever efficiency is given as a percentage, divide by 100 before using it in any formula.

**Contrast mini-example**

A motor with 80 % efficiency consumes an electrical power of 500 W. Mechanical power is 0.80 times 500 W, equal to 400 W. If 80 is used instead of 0.80, the result is 40 000 W: eighty times greater than the input electrical power, which is impossible by energy conservation.

## Quick self-control rule

Before accepting a result about an electric motor, verify the following three conditions. Mechanical power must be strictly less than consumed electrical power. Efficiency must be between 0 and 1 as a decimal. The angular speed used in calculations must be in rad/s: if the data was in rpm, divide by 9.55 (which is 60 divided by 2π) or multiply by 0.1047 to convert.
`;export{e as default};
