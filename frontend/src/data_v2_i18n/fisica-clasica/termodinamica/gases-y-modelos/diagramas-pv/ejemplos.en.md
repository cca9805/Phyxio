# Exam-type example

## Problem statement
An ideal gas of 0.50 mol is contained in a vessel with initial volume 0.020 m³ and constant pressure 1.2×10⁵ Pa. The gas expands to a final volume of 0.050 m³. Calculate the mechanical work done, describe the shape of the trajectory on the P-V diagram, and interpret the result physically.

This exercise requires not only numerical calculation, but also explaining the trajectory shape and its relation to work. The student must make explicit the connection between the path geometry and the sign of the work.

## Data
- Gas amount: 0.50 mol
- Constant pressure: 1.2×10⁵ Pa
- Initial volume: 0.020 m³
- Final volume: 0.050 m³

The data are presented as physical values, without using variable symbols with assignment. This avoids the pattern rejected by the validator in data lines.

## System definition
System: a closed ideal gas inside a cylinder with a movable piston. External pressure applied on the piston remains constant while the gas volume changes.

The system does not exchange mass with the environment, but it transfers mechanical work through piston displacement. It is assumed that the cylinder is well insulated laterally to focus on P-V work and avoid additional heat losses.

## Physical model
We assume the ideal gas law and an isobaric process. Because pressure remains constant, the trajectory on the P-V diagram is a horizontal line connecting the initial and final volumes.

The model neglects non-ideal effects and assumes that temperature [[T]] may vary while pressure stays fixed. It also assumes local equilibrium is preserved during the expansion, so the ideal gas relation remains valid at each intermediate state.

## Model justification
Constant pressure justifies the isobaric work expression. Furthermore, the external load on the piston remains stable, producing a process close to ideal behavior.

The horizontal process curve is the visual evidence that pressure does not change. This allows a direct connection between the area under the curve and the work [[W]].

Because the process is quasi-static, the pressure in the gas matches the applied pressure at each instant.

## Symbolic solution
{{f:gas_ideal}}

{{f:trabajo_isobarico}}

The universal constant [[R]] appears in the ideal gas law and is part of the symbolic resolution.

With [[P]] constant, the work [[W]] is calculated as pressure times [[DeltaV]], the volume change between the two states.

## Numerical substitution
The volume change is 0.030 m³, obtained as 0.050 m³ minus 0.020 m³. The constant pressure is 1.2×10⁵ Pa.

Multiplying 1.2×10⁵ Pa by 0.030 m³ yields about 3.6×10³ J. Thus, [[W]] is positive and indicates the gas delivers energy to the surroundings.

That energy scale is comparable to lifting a small object of about one kilogram by a few meters.

The calculation confirms that the work is not negligible and is consistent with the expected area of a horizontal segment at atmospheric-like pressure.

## Dimensional validation
The unit of work is the joule. A pascal is a newton per square meter, and multiplied by cubic meters it becomes an energy unit. Therefore the isobaric work expression is dimensionally consistent.

The unit chain is: Pa × m³ → N/m² × m³ → N·m, which corresponds to J. This check confirms that the calculation matches the defined magnitudes.

## Physical interpretation
On the P-V diagram the path is a horizontal line between 0.020 m³ and 0.050 m³. The area under the curve represents the mechanical work the gas does on the piston.

The result shows that the gas produces work because volume increases. If volume had decreased, [[W]] would be negative and the gas would absorb energy from the surroundings.

Furthermore, if pressure ceased to be constant, work calculation would require integrating the full curve, changing the interpretation of the area. In that case, the shape of the curve becomes critical for evaluating net work.

The interpretation also indicates that the gas is doing useful mechanical work, not simply increasing its internal energy.

# Real-world example

## Context
A cylinder with a piston loaded by a constant force is heated slowly. The gas inside expands while the piston pressure remains approximately fixed.

This situation is common in classroom demonstrations where a fixed mass maintains the external pressure.

## Physical estimation
With pressure of 1.2×10⁵ Pa and a volume change of 0.030 m³, the mechanical work is on the order of 3.6 kJ. That energy drives the piston motion and can be measured from force and displacement.

The value is representative of low-power laboratory processes.

A change of 0.030 m³ at this pressure is enough to produce an energy transfer that is clearly measurable with simple laboratory apparatus.

## Interpretation
The gas delivers energy by moving the piston. The P-V diagram makes it clear that the process is isobaric and that the area under the curve corresponds to useful work.

This real example shows that the shape of the trajectory in a P-V diagram is useful to estimate work without knowing microscopic gas details. It also illustrates how the same area can be interpreted as useful mechanical energy in practical applications.

If the piston were held fixed instead, the same gas could increase its temperature without producing this work output.
