const e=`\uFEFF# Exam-type example

## Problem statement

Determine the position of the center of mass of a binary system composed of the Earth and the Moon. Consider both bodies as point particles separated by an average distance of 384,400 km. The Earth's mass is approximately 81.3 times the mass of the Moon. Express the result in kilometers from the center of the Earth and analyze whether this point is inside or outside the terrestrial radius (Earth radius ≈ 6,371 km).

## Data

- Earth Mass [[m1]]: $5.97 \\times 10^{24}$ kg
- Moon Mass [[m2]]: $7.35 \\times 10^{22}$ kg
- Earth-Moon Distance [[d]]: $384,400$ km
- Earth Position [[x1]]: $0$ km (Origin)
- Moon Position [[x2]]: $384,400$ km
- Earth Radius [[R]]: $6,371$ km

## System definition

The system is composed of two massive bodies interacting gravitationally. For the center of mass calculation, we define a one-dimensional reference system (X-axis) where the coordinate origin (zero point) coincides with the geometric center of the Earth. The Moon is located on the positive part of the axis at the specified average distance. The system is considered isolated from other external influences (such as the Sun) to simplify the location of the local barycenter.

## Physical model

We use the **Point Particle Model** for the center of mass calculation. In this model, the entire mass of the Earth [[m1]] and the Moon [[m2]] is considered concentrated at their respective geometric centers. This approach is a direct application of the general definition for $N$ particles:

{{f:rcm_general}}

Where each particle has a mass [[m_i]] and a position [[r_i]]. In our one-dimensional case, the vector [[rcm]] simplifies to the coordinate [[xcm]]. The total mass of the system [[M]] is defined as the simple sum of both inertias. The center of mass [[xcm]] represents the translational equilibrium point of the Earth-Moon system.

## Model justification

The point particle approximation is **valid** in this context **because** the distance between the bodies ($3.8 \\times 10^5$ km) is much larger than their physical radii ($6,371$ km for the Earth and $1,737$ km for the Moon). The ratio [[R]]/[[d]] must be less than 0.01 to neglect the internal mass distribution for the calculation of the barycenter position. It is **assumed** that the bodies are spherically symmetric, which allows treating their geometric centers as the points where the effective mass is applied in the Newton model.

## Symbolic solution

We start from the general definition of the center of mass for a set of masses [[m_i]] located at vector positions [[r_i]]:

{{f:rcm_general}}

First, we verify the validity of the point approximation:

{{f:point_particle_validity}}

For our case of two point particles in one dimension, this vector expression is projected onto the X-axis. First, we define the total mass of the system [[M]] by summing the constituent masses:

{{f:M}}

Next, we apply the definition of the center of mass [[xcm]] for this discrete system:

{{f:xcm}}

Since we have placed the origin on the Earth (where [[x1]] is $0$), the expression simplifies.

## Numerical substitution

1.  **Total mass calculation [[M]]:**
    Sum: $5.97 \\times 10^{24}\\text{ kg} + 0.0735 \\times 10^{24}\\text{ kg}$ results in $6.0435 \\times 10^{24}\\text{ kg}$.

2.  **Position calculation [[xcm]]:**
    Operation: $(7.35 \\times 10^{22}\\text{ kg}) \\cdot (384,400\\text{ km}) / (6.0435 \\times 10^{24}\\text{ kg})$
    Result: approximately $4,675.6\\text{ km}$

**Symmetry check:** Since the masses are very different ([[m1]] is much larger than [[m2]]), the result should not coincide with the geometric centroid (which is at approximately $192,200\\text{ km}$).
It is consistent that the real barycenter is much closer to the massive body ($4,676$ km) than to the midpoint ($192,200$ km).

## Dimensional validation

We verify the units of the final result. The formula used for [[xcm]] relates length and mass.
The dimension of [[xcm]] is length ($L$), as derived from dividing mass times length by mass.
The result is expressed in kilometers (km), which is a unit of length consistent with the scale of the problem. The value obtained ($4,675.6$ km) is less than the total distance ($384,400$ km), which is **consistent** with the definition of a weighted average.

## Physical interpretation

The calculated value is approximately **4,676 km**. This **indicates** that the center of mass of the Earth-Moon system is much closer to the Earth due to its enormous superiority in mass (where [[m1]] is much larger than [[m2]]). Comparing this value with the Earth's radius ([[R]] of $6,371$ km), we observe that the [[xcm]] is below the surface.

**This implies** that the system's barycenter is located **inside** the physical body of the Earth, approximately 1,700 km below the surface. This location is the reason why the Earth does not "orbit" the Moon, but both bodies rotate around this internal point, causing the characteristic terrestrial "wobble" in its orbital path. If the Moon were more massive or farther away, the center of mass [[rcm]] could move to outer space, changing the dynamic nature of the system to a double planet.

# Real-world example

## Context

Let's consider the stability of a modular space station composed of two sections: an 80-ton research laboratory and a 20-ton life support module, connected by a 50-meter tunnel. To perform docking maneuvers without generating unwanted rotations, the thrusters must apply the force exactly at the center of mass of the assembly.

## Physical estimation

We perform a quick **estimation** of the **magnitude** of the inertial shift. The **scale** data are:
- Mass 1 (Laboratory) [[m1]]: 80,000 kg at [[x1]].
- Mass 2 (Support) [[m2]]: 20,000 kg at [[x2]] (at 50 m).
- Total Mass [[M]]: 100,000 kg.

Applying the inertial weighting logic:
$(80,000 \\cdot 0 + 20,000 \\cdot 50) / 100,000$ results in $10$ m.

## Interpretation

The center of mass is located only 10 meters from the heavier module. **This means** that, although the structure measures 50 meters, its "inertial heart" is strongly shifted towards the laboratory. For flight engineers, this information is critical: any thrust applied outside that 10-meter mark will generate a torque that will cause the station to rotate. The CM acts here as the dynamic **equilibrium point**; it is the only place where the station behaves like a simple point particle in the face of external forces, allowing for pure and safe translational maneuvers in space.
\r
`;export{e as default};
