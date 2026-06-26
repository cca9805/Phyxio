const e=`# Exam-type example

## Problem statement

A satellite follows an elliptical orbit around Earth. Its semi-major axis is [[a]] = 7.20e6 m and its eccentricity is [[e]] = 0.10. Interpret the orbital geometry, estimate the semi-minor axis [[b]], compute the period [[T]] using Earth's mass, and compare the result with another orbit around the same central mass whose semi-major axis [[a2]] is twice [[a1]]. Finally, explain why the satellite does not move with constant speed even though the orbit is periodic.

## Data

Use [[G]] = 6.674e-11 N*m^2/kg^2, [[M]] = 5.97e24 kg, [[a]] = 7.20e6 m, and [[e]] = 0.10. For the comparison, use [[a1]] = [[a]], [[a2]] = 2[[a1]], and [[T1]] equal to the period of the first orbit. The angular variable [[theta]] is not needed for the global period, but it would be required to compute an instantaneous focal distance [[r]].

## System definition

The system is Earth-satellite. Earth is modeled as the central mass [[M]], and the satellite as an orbiting mass [[m]] much smaller than it. The orbit is assumed Keplerian, planar, and bound. The central mass is at one focus of the ellipse, not at its geometric center. Therefore the description uses [[a]], [[b]], [[e]], [[r]], and [[theta]] as distinct geometric variables.

## Physical model

Use the two-body model with a central force and negligible perturbations. In this model, [[mu]] summarizes gravitational scale, [[a]] controls the period, [[e]] controls shape, and [[dA_dt]] remains constant. The first law fixes geometry, the second fixes areal rhythm, and the third fixes orbital period.

## Model justification

The statement does not mention thrust, atmospheric drag, Earth's oblateness, or lunar and solar perturbations. Since the task asks only for a period estimate and a conceptual reading of variable speed, the Keplerian model is sufficient. If precise prediction over many days were required, perturbations would have to be introduced; here the main need is to recognize the physical scale and the role of each law.

## Symbolic solution

First define the gravitational scale:

{{f:parametro_gravitatorio}}

The ellipse shape can be read with the first law when [[theta]] is known:

{{f:primera_ley_polar}}

The semi-minor axis follows from the geometric relation:

{{f:relacion_semiejes}}

The second law is expressed as constant areal sweep:

{{f:velocidad_areal_constante}}

Its dynamical reading is connected with angular momentum:

{{f:relacion_momento_angular_conceptual}}

In this reading, [[L]] is not computed numerically because the exercise focuses on Kepler, but its presence shows that the area law has a dynamical cause: angular momentum conservation in a central force.

For the absolute period use:

{{f:tercera_ley_absoluta}}

The same idea can be written with [[mu]]:

{{f:tercera_ley_mu}}

For comparison with the second orbit around the same Earth use:

{{f:tercera_ley_comparativa}}

## Numerical substitution

With the given data, [[mu]] is approximately 3.99e14 m^3/s^2. The semi-minor axis is close to 7.16e6 m, slightly smaller than [[a]] because [[e]] = 0.10 represents a mildly elongated ellipse. The estimated period is about 6.1e3 s, roughly 102 minutes, coherent with a low-to-medium Earth orbit.

For the compared orbit, [[a2]] = 2[[a1]]. The comparative form does not give [[T2]] = 2[[T1]], but a factor of 2 raised to the three-halves power, close to 2.83. Therefore the second orbit would have a period about 2.83 times the first, not merely twice it.

## Dimensional validation

In the absolute third law, the quotient between [[a]] cubed and [[G]][[M]] has dimension of time squared, and the square root returns seconds. In the comparative law, [[a2]]/[[a1]] is dimensionless, so [[T2]] keeps the same unit as [[T1]]. In the axis relation, [[b]] keeps length units because the factor involving [[e]] is dimensionless.

## Physical interpretation

The orbit is almost circular, but not exactly circular. The central mass lies at one focus and [[r]] changes during the motion. The period depends mainly on [[a]] and [[M]], while [[e]] determines how distances vary inside the ellipse. The second law explains why the satellite moves faster near periapsis and slower near apoapsis without breaking the global periodicity.

The comparative result is the key learning point: increasing orbital size changes period nonlinearly. Kepler problems cannot be solved by simple direct proportionality. The right question is not only how much larger the orbit is, but how that size enters the time law.

# Real-world example

## Context

An agency must choose between two Earth orbits for an observation satellite. The first orbit has smaller [[a]] and revisits the target region more frequently; the second has larger [[a]] and offers a different coverage pattern but increases the period. A quick estimate is needed to decide whether the altitude change strongly alters revisit frequency.

## Physical estimation

If both orbits surround Earth, they share the same [[M]] and therefore the same [[mu]]. The comparison can be made with [[a1]], [[a2]], [[T1]], and [[T2]] without using [[G]] again. If the semi-major axis increases by 20%, the period does not increase by 20%, but by the factor 1.20 raised to the three-halves power, approximately 1.31. That difference may be decisive when planning observation windows.

The areal reading also matters. If the chosen orbit has appreciable [[e]], the satellite does not pass through all regions with the same speed. Near perigee it moves faster and near apogee it moves slower. Therefore coverage planning requires more than [[T]]; it also requires understanding how time is distributed inside the ellipse.

## Interpretation

Kepler provides a first technical decision without a full simulation: [[a]] controls period, [[e]] controls spatial distribution, and [[dA_dt]] explains the passage rhythm. If the goal is a quick estimate, the laws are sufficient. If the goal is pointing, communications, or reentry planning, the ideal model must be extended with perturbations, Earth rotation, drag, and operational constraints.
`;export{e as default};
