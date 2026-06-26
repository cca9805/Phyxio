# Exam-type example


## Problem statement

An ideal gas enclosed in a cylinder with a piston is heated at constant pressure of 1.5 atm. The initial volume is 2.0 L and the final volume is 5.0 L. Calculate the work [[trabajo_termodinamico]] done by the gas on the piston.

## Data

The problem data converted to SI units:

- [[presion]]: 1.5 atm, equivalent to 1.52 × 10⁵ Pa (using the factor 1 atm equals 101 325 Pa)
- Initial volume [[volumen]]: 2.0 L, equivalent to 2.0 × 10⁻³ m³
- Final volume [[volumen]]: 5.0 L, equivalent to 5.0 × 10⁻³ m³

## System definition

The system is the ideal gas inside the cylinder. The moving boundary is the piston. The physics convention is used: [[trabajo_termodinamico]] > 0 when the gas expands.

## Physical model

Isobaric process (constant pressure), so [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]]. The quasi-static model is valid because heating is slow and pressure is uniform in the gas.

## Model justification

Constant pressure during heating implies an isobaric process. The formula [[trabajo_termodinamico]] = [[presion]]·[[variacion_de_volumen]] is the exact expression of work for this type of process.

## Symbolic solution

The process is isobaric: [[presion]] remains constant throughout the heating. Therefore the isobaric work formula applies directly. The [[variacion_de_volumen]] is calculated as the difference between the final and initial [[volumen]]. The relevant formulas are:

{{f:trabajo_integral}}

{{f:trabajo_isobarico}}


## Numerical substitution

The [[variacion_de_volumen]] between final and initial state is 3.0×10⁻³ m³, equivalent to 3.0 litres of expansion. Multiplying that change by the constant [[presion]] of 1.52×10⁵ Pa gives the [[trabajo_termodinamico]] done by the gas: the result is 456 J. The positive sign confirms that it is the gas that does work on the piston, transferring mechanical energy to the surroundings.

## Dimensional validation

The dimension of [[trabajo_termodinamico]] is verified by combining the dimensions of [[presion]] and [[variacion_de_volumen]]:

- [[presion]]: `[M L⁻¹ T⁻²]` (pascals)
- [[variacion_de_volumen]]: `[L³]` (cubic metres)
- Product p·ΔV: `[M L⁻¹ T⁻²]·[L³]` = `[M L² T⁻²]` (joules)

The dimensional result `[M L² T⁻²]` corresponds to the dimension of energy. This confirms that [[trabajo_termodinamico]] has the same dimension as any other form of energy, consistent with its nature as a mechanical energy transfer through the moving boundary of the system.

## Physical interpretation

A [[trabajo_termodinamico]] of 456 J positive indicates that the gas expands and transfers 456 J of mechanical energy to the piston and surroundings. This work comes from the gas's internal energy and the supplied heat. In the p-V diagram, work is the area of the rectangle with base 3.0 L and height 1.5 atm. Had the [[presion]] been halved while keeping the same [[variacion_de_volumen]], the work would also be halved to 228 J. This direct proportionality between [[trabajo_termodinamico]], [[presion]] and [[variacion_de_volumen]] is visible in the diagram as the change in the rectangle area, confirming that the formula and the geometric reading are fully consistent representations of the same physical quantity.

---

# Real-world example


## Context

In a four-stroke internal combustion engine, the expansion stroke (power stroke) is the process in which combustion gases push the piston downward at approximately constant pressure in the initial part of the cycle. The mechanical energy generated in this stroke is transmitted to the crankshaft and ultimately to the vehicle wheels.

## Physical estimation

In a 1.6-litre car engine, each cylinder has a displaced [[volumen]] of 0.4 L. During the expansion stroke, the mean [[presion]] of the gases is on the order of 5 × 10⁵ Pa. Multiplying that mean pressure by the [[variacion_de_volumen]] of 4×10⁻⁴ m³ gives a [[trabajo_termodinamico]] of 200 J per cylinder per cycle. With four cylinders running at 3000 rpm, the engine performs 200 work cycles per second in total, which sums to 40 000 W equivalent to 40 kW of mechanical power, consistent with the actual power of such engines.

## Interpretation

Computing [[trabajo_termodinamico]] per cycle from mean pressure and displacement is the basis of the concept of "mean effective pressure" used by engine engineers. Maximising [[trabajo_termodinamico]] per cycle without increasing wear or emissions is the central goal of combustion engine design. The dependence of [[trabajo_termodinamico]] on [[presion]] and [[variacion_de_volumen]] explains why turbocharged engines (higher [[presion]]) and large-displacement engines (larger [[variacion_de_volumen]]) produce more torque.

This estimation also illustrates the power of the model: knowing just two quantities — the mean [[presion]] and the [[variacion_de_volumen]] of each cylinder — allows the total engine power to be predicted with an accuracy of roughly 10–20 % without integrating the full cycle. The remaining discrepancy arises from irreversibilities (friction, heat transfer, incomplete combustion) that the simplified isobaric model does not capture. In practice, engine engineers measure the actual p-V cycle with in-cylinder pressure sensors to compare the real [[trabajo_termodinamico]] per cycle against the ideal estimate and quantify these losses directly.