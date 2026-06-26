const e=`# Uniform Circular Motion\r
\r
## Conceptual context\r
\r
**Uniform Circular Motion (UCM)** describes a particle moving along a circumference at constant speed. It introduces curvature as a constant, requiring the analysis of vectors and spatial projections. This model is vital for understanding everything from electron spin to satellite orbits.\r
\r
Understanding UCM is essential for rotational dynamics and gravitation. The laws governing this motion allow for predicting positions and velocities in cyclic systems over [[t]] . It is the basis for electric motors, turbines, and global navigation. Learning UCM is understanding the universe as synchronized cycles.\r
\r
> [!NOTE]\r
> In UCM, although speed [[v]] is constant, the velocity vector changes every instant [[t]] to follow the curve. This distinction implies the existence of an acceleration.\r
\r
## 🟢 Essential level\r
\r
Intuitively, UCM is like a carousel spinning at a constant pace. The central idea is **periodicity**: the object returns to the same point after a time interval called period [[T]]. This parameter measures the duration of each full cycle; a fast motor has a small [[T]], while the Earth's rotation on its axis lasts one day.\r
\r
Here we focus on the rotation rhythm. If an object sweeps the same angle every second, it has a constant angular velocity [[omega]]. Imagine two people on a spinning disk: both complete the same number of revolutions in the same time, sharing the same [[omega]]. However, someone on the edge moves faster because their radius is larger and they must travel more distance in the same interval. Learning UCM is, above all, distinguishing between the rotation rhythm and the traveled path.\r
\r
## 🔵 Formal level\r
\r
To mathematically describe UCM, we start from the angular position time equation, which establishes a linear relationship between [[theta]] and [[t]]. This is the predictive basis of the model:\r
\r
{{f:mcu_posicion_angular}}\r
\r
This expression allows us to determine the [[theta]] at any instant [[t]], knowing the [[theta_0]] and [[omega]]. It is the angular analogue of the MRU position equation. When analyzing specific intervals, we define [[dtheta]] as the product of [[omega]] and the duration of the [[dt]]:\r
\r
{{f:mcu_desplazamiento_angular}}\r
\r
To calculate the total number of revolutions [[N]] performed by the system based on the swept angle, we use the following relationship:\r
\r
{{f:mcu_vueltas}}\r
\r
The connection between the world of angles and the world of linear distances is made through the [[R]]. The [[R]] acts as an amplifier: the larger the [[R]], the greater the tangential [[v]] and the distance traveled for the same [[dtheta]]. The [[v]] is defined by the relationship between angular speed and the orbital radius:\r
\r
{{f:mcu_relacion_lineal}}\r
\r
Similarly, the traveled [[s]] is directly proportional to the [[dtheta]] in radians, demonstrating the elegance of using the international system of units in rotation:\r
\r
{{f:mcu_longitud_arco}}\r
\r
Finally, the periodic nature of the motion is formalized through the [[T]] and [[f]] . The [[f]] is the inverse of the [[T]] and tells us how many [[N]] are completed each second. The relationship between these parameters and [[omega]] is fundamental for synchronizing the calculation with the physical reality of machines and celestial bodies:\r
\r
{{f:mcu_omega_periodo}}\r
\r
{{f:mcu_omega_frecuencia}}\r
\r
{{f:mcu_frecuencia_periodo}}\r
\r
\r
Additional formal relations for this leaf:\r
\r
{{f:mcu_aceleracion_v}}\r
\r
{{f:mcu_aceleracion_omega}}\r
\r
{{f:segunda_ley_newton}}\r
\r
## 🔴 Structural level\r
\r
The deep structure of UCM reveals an apparent paradox: acceleration exists even though the [[v]] does not change. This is the [[ac]] , a vector permanently directed toward the center of the path whose only function is to rotate the velocity vector without altering its magnitude. Without this acceleration, inertia would force the object to escape in a straight line.\r
\r
\r
Structurally, UCM is a two-dimensional motion projected onto a trajectory with a single degree of freedom defined by the [[theta]] . The [[ac]] depends quadratically on the [[omega]] , meaning that doubling [[omega]] quadruples the acceleration needed to maintain the circle. This quadratic dependence explains why stresses in materials grow so fast:\r
\r
\r
> [!WARNING]\r
> A common structural error is to assume that a "centrifugal acceleration" exists in the inertial frame. The only real acceleration is the [[ac]] , which is the result of net forces [[F]] (such as tension or friction) directed toward the center acting on the mass [[m]] of the body. The centrifugal sensation is only an inertial perception of the rotating observer. This dynamic causality is governed by the fundamental law of motion.\r
\r
\r
The validity domain of UCM requires the [[R]] to be strictly constant. If the [[R]] changes, the motion ceases to be pure circular. Likewise, if [[omega]] varies, we enter the domain of uniformly accelerated circular motion (UACM), where an additional tangential acceleration [[a]] would appear, changing the object's [[v]] .\r
\r
## Deep physical interpretation\r
\r
Interpreting UCM requires a paradigm shift from linear motion. While in MRU the sign of velocity indicates direction on a line, in UCM the sign of [[omega]] defines the direction of rotation. By universal trigonometric convention, the counter-clockwise direction is positive and the clockwise direction negative.\r
\r
The [[ac]] is not a force we "discover," but a kinematic description of the trajectory's curvature. It represents the rate of change of the velocity direction. If the [[ac]] were to disappear, the particle would follow a straight line tangent to the path at that point, maintaining its constant [[v]] according to Newton's first law.\r
\r
The [[dt]] in UCM is not just a passive wait, but an angular phase accumulator. Due to intrinsic periodicity, a [[theta]] of 2*pi radians is physically equivalent to a position of 0, introducing the idea of cyclic variables. This characteristic is what allows UCM to be the base model for oscillatory phenomena, where [[t]] becomes a variable that repeats states infinitely.\r
\r
## Order of magnitude\r
\r
To develop solid physical judgment, consider real scales:\r
\r
*   **Everyday scale**: A ceiling fan usually rotates at about 2-3 [[N]] every second (f ≈ 3 Hz), which implies an [[omega]] of about 18.8 rad/s. A common error is obtaining values of thousands of rad/s for household objects.\r
*   **Planetary scale**: The Earth rotates on its axis with a [[T]] of approximately 86400 s (24 hours). Its [[omega]] is extremely small (7.27 x 10⁻⁵ rad/s), but due to its huge [[R]] , the [[v]] at the equator exceeds 460 m/s, faster than sound.\r
*   **Physical absurdity**: If you calculate an [[ac]] of 10⁶ m/s² for a spinning toy, the result is physically absurd. Structural materials would disintegrate long before reaching that acceleration. A reasonable result for common machines is usually between 1 and 1000 m/s².\r
\r
## Personalized resolution method\r
\r
To solve any UCM problem systematically and professionally, follow this five-step protocol:\r
\r
1.  **Identify the center and radius**: Locate the exact rotation axis and measure the [[R]] from that axis to the particle. Be careful not to use the diameter by mistake.\r
2.  **Synchronize units**: This is where most failures occur. Ensure all [[theta]] are in radians and [[t]] are in seconds before entering values into the formulas.\r
3.  **Determine the [[omega]]**: If the statement gives you revolutions per minute (RPM), immediately convert them to [[omega]] using the relationship between revolutions and radians. Treat [[omega]] as the queen variable of the problem.\r
4.  **Link linear and angular**: Use [[v]] or [[s]] only when you need to know "real meters" or distances on the ground. For the analysis of the rotation rate, always stay with [[omega]] .\r
5.  **Verify the acceleration**: Always calculate the final [[ac]] . If the value is negative or inconsistent with [[R]] , check the squares in the formula. Remember that [[ac]] is always radial and toward the center.\r
\r
## Special cases and extended example\r
\r
A fascinating special case is that of geostationary satellites. These objects must have a [[T]] exactly equal to the Earth's rotation to remain "fixed" over a specific point on the surface. This is only possible at a very specific [[R]] where gravity provides the necessary acceleration.\r
\r
**Extended example**: A flywheel with [[R]] : 0.5 m rotates at 120 RPM.\r
*   First, we obtain the [[f]] by dividing by 60 seconds: f ≈ 2 Hz.\r
*   Then, we calculate [[omega]] : [[omega]] ≈ 2*pi * 2 ≈ 12.57 rad/s.\r
*   The [[v]] at the edge will be the product of [[omega]] and [[R]] : v ≈ 12.57 * 0.5 ≈ 6.28 m/s.\r
*   The [[ac]] that the flywheel material must withstand is: [[ac]] ≈ 12.57² * 0.5 ≈ 79 m/s². This value is about 8 times gravity, which is perfectly manageable for a standard industrial design.\r
\r
## Real student questions\r
\r
**Why do we use radians and not degrees in physics formulas?**\r
Because the linear relationship between linear and angular speed only works when [[theta]] is measured in the natural unit of [[s]] (radians). Degrees are an arbitrary historical division that would require adding constant correction factors in each equation. The [[N]] should always be calculated after this conversion.\r
\r
**If the speed is constant, why do we say the motion is accelerated?**\r
Because acceleration does not just measure if an object goes "faster" or "slower," but how much the velocity vector changes. In UCM, the direction of motion changes at every millimeter of travel. That change of direction is a form of [[ac]] as real as a car braking.\r
\r
**What happens if the radius doubles while maintaining the same angular velocity?**\r
If the [[R]] value is multiplied by two, the object has to travel a circumference twice as long in the same [[dt]] . For this reason, its [[v]] will also double. Furthermore, [[ac]] will undergo a proportional increase to the radius for a constant angular velocity. This explains why it is much harder to stay on a merry-go-round as you move away from the center.\r
\r
**Does the period depend on the mass of the rotating object?**\r
In pure UCM kinematics, no. The [[T]] only depends on [[omega]] . The [[t]] , [[dtheta]] and [[theta]] are independent of how much the object weighs; mass will later influence the dynamics (required forces).\r
\r
## Cross-cutting connections and study paths\r
\r
UCM is the conceptual basis for understanding [Uniformly Accelerated Circular Motion (UACM)](leaf:fisica-clasica/mecanica/cinematica/movimiento-circular/mcua), where [[omega]] is no longer constant. It also directly connects with [Simple Harmonic Motion (SHM)](leaf:fisica-clasica/mecanica/oscilaciones/mas), as any harmonic oscillation can be visualized as the projection of a UCM onto a diameter of the rotation circle.\r
\r
In advanced levels, UCM is studied from the perspective of gravitational force in the study of [Orbits and Satellites](leaf:fisica-clasica/mecanica/gravitacion/orbitas). Understanding [[ac]] is also the first step toward understanding fictitious forces in [Non-Inertial Reference Systems](leaf:fisica-clasica/mecanica/dinamica/sistemas-no-inerciales).\r
\r
## Final synthesis\r
\r
UCM is the balance between change and constancy: the direction varies to maintain the curved path, while the [[omega]] remains unchanged. It is a symmetry model that simplifies real-world rotation. Mastering its magnitudes, like [[omega]] and [[ac]] , is the key to understanding the universe's machinery, from subatomic particles to galaxies.\r
`;export{e as default};
