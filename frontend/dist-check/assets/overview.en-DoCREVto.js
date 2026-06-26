const e=`# Center of Mass

## General idea of the topic
This node introduces the center of mass as the way to represent the global motion of a system with many parts. You will find the basic definition, its calculation in discrete systems and extended bodies, and then its dynamical role and its use as a reference frame.

The central idea is that a system may have complex internal motion and still have one point that summarizes how it translates as a whole. That point does not replace shape, rotation, or deformation, but it separates what the whole system does from what happens inside it.

## What you will truly understand
You will understand that the center of mass is a mass-weighted position, not necessarily a material point of the body. You will also see that its motion is governed by the net external force, while internal forces only redistribute relative motion among parts.

By the end, you should know when the center of mass is the right simplification and when it is insufficient because the internal distribution matters.

## Recommended learning route
1. **Definition of the Center of Mass**: build the physical idea of a representative point for a mass distribution.
2. **Center of Mass in Discrete Systems**: calculate the center of mass for particle systems and learn to use symmetries and relative masses.
3. **Center of Mass in Extended Bodies**: move to continuous distributions, density, and differential mass elements.
4. **Motion of the Center of Mass**: connect the acceleration of the center of mass with the net external force.
5. **Center-of-Mass Frame**: switch to the reference frame where total momentum is zero to simplify collisions and relative motion.

## Physical criterion you must acquire
The physical criterion is to separate global motion from internal motion: the center of mass responds to external forces, while internal forces may change the configuration without accelerating the whole system.

## Connection with real problems
- Stability of people, vehicles, tools, furniture, and structures.
- Design of parts where mass distribution conditions motion.
- Jumps, throws, and body motions with internally moving parts.
- Collisions analysed from the frame where total momentum is zero.

## Final goal of the topic
The final goal is to reduce a complex system to its global motion when that is legitimate, calculate where the representative point is, and use it to interpret external forces, collisions, and reference frames.
`;export{e as default};
