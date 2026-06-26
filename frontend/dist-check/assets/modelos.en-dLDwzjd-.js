const e=`# Models of Power

## Ideal model

The ideal model treats [[P]] as a well-defined rate of mechanical transfer. For a complete interval it uses [[W]] and [[t]]; for one instant it uses [[F]], [[v]], and [[theta]]. The central assumption is that the quantities belong to the same system, the same point of application, and the same physical interval or instant.

In this model, average power summarizes a process, while instantaneous power describes a local condition. Both readings are compatible, but they are not interchangeable unless temporal uniformity is justified.

## Hypotheses

- The work [[W]] corresponds exactly to the interval [[t]] being used.
- The force [[F]] and speed [[v]] belong to the same material point.
- The angle [[theta]] represents the real orientation between force and motion.
- Units are coherent: J/s or N m/s.
- Thermal, electrical, or internal effects are included only if an efficiency model is declared.

## Quantitative validity domain

As an operational criterion, average power is reliable if the instantaneous variation does not greatly exceed the mean value during the interval. In introductory exercises, a relative difference below 10 percent may be acceptable when using an average as an approximation. If power peaks exceed the mean by a factor of two or three, an instantaneous description is preferable.

One must also have [[t]] > 0. For the instantaneous form, if [[theta]] is close to pi/2, small angular uncertainties can strongly affect [[P]]; then it is better to use components or a dot product.

## Model failure signals

The model fails if a static force with zero speed is used to claim nonzero mechanical power. It also fails if the velocity of the center of mass is used while the force acts on another point, or if work from one phase is averaged over the time of another phase.

Another signal is an absurd scale: megawatts for an ordinary human action, or tiny watts for an engine accelerating a large load in a short time.

## Extended or alternative model

It is appropriate to move to an extended model when efficiency, internal losses, electrical input power, significant friction, or thermal transfer matters. In those cases, useful mechanical power may be only one part of the supplied power.

It is also appropriate to change model when the force varies rapidly or impacts occur. Then average power may hide relevant peaks, and a time function or impulse model is needed.

## Operational comparison

- Average model: simple and useful for complete processes and global energy use.
- Instantaneous model: more precise for engines, braking, demand peaks, and control.
- Efficiency model: required when supplied, useful, and dissipated power differ.
- Impulse model: better for very short contacts where formal instantaneous power is not the most stable quantity.

The practical rule is to choose the model from the physical question: whole interval, instant, efficiency, or demand peak.
`;export{e as default};
