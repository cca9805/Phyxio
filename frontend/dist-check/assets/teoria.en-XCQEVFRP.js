const e=`\uFEFF# Coefficient of Restitution\r
\r
## Conceptual context\r
\r
The coefficient of restitution[[e]]is a fundamental dimensionless parameter in classical mechanics that quantifies the elasticity of a collision between two bodies. In the real world, no collision is perfectly elastic; there is always a fraction of kinetic energy that is transformed into other forms of internal energy, such as heat, sound, or permanent plastic deformation of the materials involved. This coefficient acts as a black box that summarizes in a single number the entire complexity of the contact forces, internal shock waves, and molecular dissipations that occur during impact. It is the primary analytical tool for solving collisions without having to delve into the temporal evolution of contact forces, allowing a smooth transition between body kinematics and impact physics.\r
\r
## 🟢 Essential level\r
\r
### Central definition\r
\r
From a phenomenological point of view, the coefficient of restitution[[e]]is defined as the ratio between the relative speed of separation after the collision and the relative speed of approach before it. It represents the "elastic memory" of the contact, indicating what fraction of the impact velocity is preserved to move the bodies away from each other:\r
\r
\r
It is a measure of bounce efficiency. It indicates what part of the relative velocity survives the encounter.\r
\r
### Collision classification\r
\r
The value of[[e]]allows classifying collision types within the ordinary physical spectrum, following a scale of energy restitution.\r
\r
1. **Perfectly elastic collision**: Occurs when the parameter is exactly equal to 1. In this ideal limit, there is no kinetic energy loss. The bodies move away with the same relative speed with which they approached. It is the model applicable to collisions between atoms or fundamental particles under specific conditions.\r
2. **Perfectly inelastic collision**: Occurs when the parameter is exactly equal to 0. In this case, the bodies stick together after impact and move as a single block. The final relative separation velocity[[vrel_f]]is zero. The maximum possible amount of kinetic energy is dissipated compatible with momentum conservation.\r
3. **Inelastic collision**: This is the regime that covers the vast majority of macroscopic phenomena, where the value is between the previous limits. Materials partially deform and recover, losing energy in the process.\r
\r
## 🔵 Formal level\r
\r
### Kinematic resolution equation\r
\r
The coefficient of restitution[[e]]provides the necessary equation to close the system of equations for a collision. If we know the masses and the initial velocities[[v1i]]and[[v2i]], we can predict the final state. The final velocity of the first body[[v1f]]can be expressed in terms of the second body's final velocity[[v2f]]:\r
\r
{{f:v1f_from_e}}\r
\r
Furthermore, the magnitude known as relative separation velocity[[vrel_f]]is obtained directly by applying the coefficient of restitution to the initial approach condition:\r
\r
{{f:vrel_f}}\r
\r
This relationship is extremely powerful because it allows evaluating the "violence" of the bounce without needing to decompose the velocities into a specific reference system, maintaining the Galilean invariance of the model.\r
\r
The value of[[e]]must always satisfy the physical range constraint:\r
\r
{{f:rango_e}}\r
\r
### Experimental measurement by heights\r
\r
One of the simplest and most accurate ways to measure[[e]]in the laboratory is through the vertical bounce of an object against a massive and fixed surface (such as the ground). By dropping an object from an initial height[[h0]]and measuring the maximum height of the first bounce[[hf]], the coefficient of restitution is obtained as the square root of the height ratio:\r
\r
{{f:e_desde_alturas}}\r
\r
This formula is a direct consequence of mechanical energy conservation during parabolic flight and the definition applied to the instant of impact. It is the basis for quality testing in the sports materials industry.\r
\r
### Dependence on external variables\r
\r
Although often treated as a material constant, the value subtly depends on the impact velocity. At very high velocities, the coefficient tends to decrease because the material's elastic limit is exceeded, causing permanent structural damage. Geometry also influences it: two spheres of the same material have a different behavior than a cylinder against a plane.\r
\r
{{f:e}}\r
\r
{{f:mu}}\r
\r
{{f:perdida_energia}}\r
\r
{{f:altura_rebote}}\r
\r
## 🔴 Structural level\r
\r
### Reduced mass and energy balance\r
\r
A deep analysis of the impact requires separating the system's motion into two components: the motion of the center of mass (which is unaffected by internal collision forces) and the relative motion of the bodies. The inertia associated with the latter is the reduced mass[[mu]], defined as the product of the masses[[m1]]and[[m2]]divided by their sum:\r
\r
\r
The importance of[[mu]]lies in the fact that all the kinetic energy that can be dissipated during the collision is the relative kinetic energy. The total kinetic energy loss[[DeltaK]]of the system after contact is given by the structural expression:\r
\r
\r
This formula reveals that dissipation depends quadratically on both the initial relative velocity and the coefficient of restitution. An[[e]]of 0.7 does not mean that 30% of the energy is lost, but that almost 51% is lost (1 minus 0.49).\r
\r
### Thermodynamic perspective and irreversibility\r
\r
From a thermodynamic point of view, the coefficient of restitution[[e]]is an indicator of the process's irreversibility. A collision with[[e]]less than 1 is an adiabatic but irreversible process, where the system's entropy increases due to the degradation of ordered kinetic energy into disordered thermal agitation of molecules. The energy[[DeltaK]]manifests as a temperature increase in the contact zone and as the emission of acoustic waves.\r
\r
### Physical limits and superelastic collisions\r
\r
Under passive conditions, the value can never exceed unity, as this would imply a spontaneous creation of mechanical energy. However, there are active or "superelastic" systems where it is greater than 1. This happens when contact triggers the release of internally stored potential energy, such as a small chemical explosion or the firing of a compressed spring. In these cases, the final relative velocity is higher than the initial one.\r
\r
## Deep physical interpretation\r
\r
Causal interpretation tells us that this parameter measures the efficiency with which a material is able to return deformation energy. During the compression phase of the collision, relative kinetic energy is transformed into elastic potential energy; during the restitution phase, the material attempts to recover its original shape. If the material is viscous or undergoes plastic deformation, part of that energy is "trapped" in the molecular structure and never returns to the form of macroscopic motion. Therefore, the coefficient is a measure of the system's mechanical resilience.\r
\r
## Order of magnitude\r
\r
The spectrum of values is broad and depends critically on the material pair. A steel ball impacting another steel ball has a very high value, close to 0.95, due to the low internal dissipation of well-hardened metal. In contrast, a tennis ball has a value of approximately 0.75, and a basketball ranges around 0.83. Materials such as clay or playdough have values near 0.05, as their elastic recovery capacity is almost zero. Temperature is also a determining factor: a rubber ball cooled with liquid nitrogen can see its bounce drastically reduced until it becomes brittle and does not bounce at all.\r
\r
## Personalized resolution method\r
\r
To approach any collision problem using the coefficient of restitution, the following protocol is suggested:\r
\r
1. **Data evaluation**: Determine if[[e]]is a known value or if it must be obtained from kinematic observations such as measured heights or velocities.\r
2. **Calculating from heights**: If the problem involves a bounce against the ground, apply the square root of the ratio between the drop height[[h0]]and the bounce height[[hf]].\r
3. **Setting up equations**: Write linear momentum conservation along with the definition equation to form a consistent system.\r
4. **Velocity calculation**: Solve the system to obtain the final velocities, paying special attention to the chosen sign convention for the axis of motion.\r
5. **Energy analysis**: Use the reduced mass[[mu]]to calculate the loss[[DeltaK]]and verify that the result is consistent with the type of collision.\r
\r
## Special cases and extended example\r
\r
**Successive bounces.** When a ball bounces repeatedly on a surface, each impact reduces its energy in the same proportion. After a number[[n]]of bounces, the maximum height reached[[hn]]is given by the geometric progression:\r
\r
\r
If a ball with[[e]]equal to 0.8 is released from 2 meters, the first bounce reaches 1.28 m, the second 0.82 m, and the third 0.52 m. The height[[hn]]tends to zero as[[n]]increases, illustrating the exponential decay of maximum potential energy.\r
\r
**Perfectly inelastic collision.** In the limit where the parameter is zero, the bodies do not separate. This occurs in traffic accidents where vehicles lock together or in a projectile embedding in a wooden block. All relative kinetic energy becomes loss[[DeltaK]], which dissipates by deforming metallic structures or breaking wood fibers.\r
\r
**Extended example.** A 0.2 kg sphere falls from 3 meters onto a massive floor. Before impact, its velocity is 7.67 m/s. After the collision with an[[e]]of 0.7, the exit velocity is 5.37 m/s upward. The impulse received changes the sphere's momentum, and the resulting bounce height[[hf]]is 1.47 meters. One can verify that the energy has been reduced to less than half of the original due to the quadratic factor of the coefficient of restitution.\r
\r
## Real student questions\r
\r
- **Can the coefficient of restitution depend on time?** The parameter summarizes an instantaneous event. However, if materials heat up after many bounces, their mechanical properties change and the value in the next bounce will be different.\r
- **Is it the same as the friction coefficient?** No. Friction opposes tangential motion, while it governs the normal response to the contact plane. They are independent phenomena although both dissipate energy.\r
\r
## Cross-cutting connections and study paths\r
\r
- **Materials Science**: The study of this parameter is the gateway to analyzing elasto-plastic behavior and material fatigue under impulsive loads.\r
- **Road Safety**: Accident reconstruction engineers use it to estimate impact velocities from structural damage and final vehicle positions.\r
- **Sport and Biomechanics**: The design of athletic surfaces and sports footwear seeks to optimize energy return to minimize injury risk and maximize performance.\r
\r
## Final synthesis\r
\r
The coefficient of restitution[[e]]represents the missing link between the ideal description of collisions and the dissipative reality. By allowing us to model relative velocity loss simply, it becomes an indispensable tool for any dynamic analysis involving contact between solid bodies, providing a clear view of how macroscopic energy inevitably degrades in the physical world.\r
\r
\r
\r
\r
\r
\r
\r
\r
\r
`;export{e as default};
