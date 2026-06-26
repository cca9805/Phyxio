const e=`# Physical Models: Center of Mass in Discrete Systems

## Ideal model

The ideal model treats each body as a point mass located at a known coordinate. The real size of each object is neglected because it matters less than the separation between positions. The system must contain a finite number of contributions [[m_i]] and [[x_i]], all measured along the same axis.

In this model, the center of mass is not a visual midpoint chosen by inspection. It is a mass-weighted position: heavier contributions pull the result toward their coordinate. Therefore, two masses at [[x_1]] and [[x_2]] have their center at the geometric midpoint only when [[m_1]] and [[m_2]] are equal.

## Hypotheses

- Each body can be represented as a point mass.
- All positions use the same origin and the same positive direction.
- The total mass [[M]] is positive.
- No relevant contribution is omitted.
- The masses remain fixed during the calculation.

## Quantitative validity domain

The model is reasonable when the size of each body is less than 10 percent of the typical separation between positions, or when the body's own internal center of mass is already known and can be replaced by an equivalent point mass. With positive masses, [[xcm]] must lie between the smallest and largest coordinate in the set. If [[x_1]] = 0 m and [[x_2]] = 2 m, a result outside that interval requires checking signs, origin choice, or missing data.

The total mass should also be checked. If the sum of the individual masses gives [[M]] = 12 kg, every later calculation must use those 12 kg as the denominator. A small change in a small mass should move the result only slightly, while a change in the dominant mass should produce a visible displacement.

## Model failure signals

A clear failure appears when [[xcm]] lies outside the geometric range even though all masses are positive. The model also fails if adding a large mass on the right moves the result to the left, or if [[M]] does not match the sum of the inputs. Another warning sign is that small distributed pieces of a large object can no longer be summarized as points without losing precision.

The model is also insufficient if positions change during the process and the calculation instant is not specified. In that case, the configuration of the system must be fixed first, and the center of mass must be computed for that specific configuration.

## Extended or alternative model

It is time to use an alternative model when mass is no longer concentrated in a few points. If the distribution is a rod, a plate, or a solid body, the extended-body model with integrals should be used. If each piece has relevant size, each piece can first be replaced by its own center of mass and then treated as an equivalent discrete contribution.

This intermediate step is common in composite systems: a platform, a person, and a load can be summarized as three point masses if their own centers are known. The calculation remains discrete, but each point represents a complete part of the system.

## Operational comparison

| Situation | Suitable model | Criterion |
|---|---|---|
| Two small blocks | Two discrete masses | Use [[m_1]], [[m_2]], [[x_1]], [[x_2]] |
| Several point modules | General discrete sum | Use [[m_i]], [[x_i]], and [[M]] |
| Continuous rod | Extended body | Move to density and integration |
| Composite object | Discrete by parts | Replace each part by its own center |
| Moving mass during the process | Dynamic model | Update positions before averaging |

The practical rule is to use the discrete model when each dominant contribution can be listed. When that list no longer represents the real distribution, change the model before calculating.
`;export{e as default};
