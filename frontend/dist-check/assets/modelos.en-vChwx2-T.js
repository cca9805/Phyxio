const e=`# Physical Models: Definition of the Center of Mass

## Ideal model

The ideal model represents the system through point masses measured in one common reference frame. In the introductory case, two bodies are used: [[m1]] at [[x1]] and [[m2]] at [[x2]]. The goal is not to describe the internal shape of each body, but to define a collective position [[xcm]] summarizing the system.

The total mass [[M]] must gather exactly the included contributions. The relation [[Mxcm]] reads the definition as a balance of spatial contributions. In the general extension, the model uses masses [[m_i]], positions [[r_i]], and the vector [[rcm]].

## Hypotheses

- The masses in the model are non-negative.
- All positions are measured from the same origin.
- The system is fully defined before calculation.
- Each body can be treated as point-like or its own center is already known.
- The total mass [[M]] is positive when [[xcm]] is computed.

## Quantitative validity domain

The introductory model works well when the size of each body is less than 10 percent of the separation between [[x1]] and [[x2]], or when each body can be replaced by its own internal center of mass. With positive masses, [[xcm]] must lie inside the interval formed by [[x1]] and [[x2]]. Also, [[M]] must be greater than or equal to both [[m1]] and [[m2]].

A minimal numerical check is this: if [[x1]] = 0 m, [[x2]] = 4 m, and both masses are positive, a result of 5 m does not belong to the ordinary physical domain of the model. If [[M]] = 3 kg while [[m2]] = 6 kg, the denominator cannot represent total mass. If [[Mxcm]] is expressed as a length, the mass-times-length dimension has been lost.

## Model failure signals

The model fails if the computed center of mass lies outside the interval without negative masses. It also fails if positions measured from different origins are mixed, or if a mass is included in the numerator but not in [[M]]. Another clear warning sign is obtaining the exact midpoint when [[m1]] and [[m2]] are very different.

In the general formulation, a failure signal appears when the vectors [[r_i]] belong to different frames. The vector expression [[rcm]] only keeps meaning if all data live in the same reference frame.

## Extended or alternative model

It is better to change model when bodies can no longer be treated as point-like. If a rod, plate, or solid with distributed mass must be studied, the extended-body model should be used. If there are many particles, the general discrete-systems leaf should be used. If the internal motion changes with time, the definition must be applied instant by instant.

This transition matters: the definition of center of mass remains the same, but the way to compute it changes. For two masses, use [[m1]], [[m2]], [[x1]], and [[x2]]. For a finite set, use sums with [[m_i]]. For a continuous distribution, use integrals.

## Operational comparison

| Situation | Suitable model | Criterion |
|---|---|---|
| Two masses on one axis | Introductory definition | Use [[M]], [[xcm]], and [[Mxcm]] |
| Many particles | General discrete system | Use [[m_i]], [[r_i]], and [[rcm]] |
| Uniform extended body | Continuous model | Use symmetry or integrals |
| Data from different origins | Model not valid yet | Rewrite coordinates |
| Zero total mass | Definition not computable | Do not divide by [[M]] |

The practical rule is to define the system and the frame first. If either of those two elements changes, the computed center of mass represents a different problem.
`;export{e as default};
