const e=`# Exam-type example: High-Performance Hard Drive Startup\r
\r
## Problem statement\r
\r
A workstation's mechanical hard drive accelerates from rest to its nominal operating speed of $7,200\\;\\text{rpm}$ (revolutions per minute) in an interval of just $1.5\\;\\text{s}$. The data platter has an effective radius [[R]] of 4.75 cm ($0.0475\\;\\text{m}$).\r
\r
As a hardware specialist, you must calculate the following parameters to validate the read head's endurance:\r
1. The constant **angular acceleration [[alpha]] ** (\\(\\alpha\\)) during the startup process.\r
2. The total **angular displacement [[delta_theta]] ** (\\(\\Delta\\theta [[theta]] \\)) performed until reaching nominal speed, expressed in turns.\r
3. The **linear speed [[v]] ** ($v$) and **tangential acceleration [[a_t]] ** ($ [[a_t]] $) of a sector located at the disk's edge.\r
4. The final **centripetal acceleration [[a_c]] ** ($ [[a_c]] $) once speed has stabilized.\r
\r
## Data\r
\r
- **Initial angular velocity [[omega]] [[omega_0]] (\\(\\omega_0\\)):** $0\\;\\text{rad/s}$ (rest).\r
- **Final angular velocity (\\(\\omega\\)):** $7,200\\;\\text{rpm}$.\r
- **Startup time [[t]] (\\(\\Delta t [[delta_t]] \\)):** $1.5\\;\\text{s}$.\r
- **Disk radius ($R$):** $0.0475\\;\\text{m}$.\r
\r
## System definition\r
\r
We consider the disk as a rigid solid where each circular sector at a distance $R$ from the axis behaves as a particle in UACM. The point of interest is the outer edge (0.0475 m), where linear accelerations reach their maximum values, subjecting the magnetic particles to the system's greatest inertial stress.\r
\r
## Physical model\r
\r
We will apply the laws of **Uniformly Accelerated Circular Motion** (UACM). The model assumes that the motor torque is constant during startup, resulting in a uniform angular acceleration. We will use:\r
- **Angular velocity as function of time** la relacion correspondiente.\r
\r
{{f:mcua_omega_t}}\r
\r
- **Angular displacement** la relacion correspondiente.\r
\r
{{f:mcua_dtheta}}\r
\r
- **Tangential acceleration** la relacion correspondiente.\r
\r
{{f:mcua_at}}\r
\r
- **Centripetal acceleration** la relacion correspondiente.\r
\r
{{f:mcua_ac}}\r
\r
- **Time-free relation between speeds** la relacion correspondiente.\r
\r
{{f:mcua_sin_t}}\r
\r
- **Average [[omega_med]] angular speed** la relacion correspondiente.\r
\r
{{f:mcua_delta_t_theta}}\r
\r
\r
## Model justification\r
\r
UACM is the standard model for startup transients in synchronous electric motors, as control electronics inject a constant current to maximize torque. Friction with air inside the vacuum-sealed casing is neglected, allowing us to assume a perfectly constant \\(\\alpha\\). The structural rigidity of the aluminum platter allows considering the radius $R$ as unchanging during acceleration.\r
\r
## Symbolic solution\r
\r
{{f:mcua_a_total}}\r
\r
\r
1. **Final angular velocity (\\(\\omega\\)):**\r
 First convert from rpm to rad/s to obtain the leaf's final angular velocity:\r
 ω → n · (2π)/(60)\r
\r
2. **Angular acceleration (\\(\\alpha\\)):**\r
 Using la relacion correspondiente, we solve for acceleration:\r
\r
{{f:mcua_omega_t}}\r
\r
 α → (ω - ω_0)/(Δ t)\r
\r
3. **Angular displacement (\\(\\Delta\\theta\\)):**\r
 Using the position relationship la relacion correspondiente or the displacement definition la relacion correspondiente:\r
\r
{{f:mcua_theta_t}}\r
\r
{{f:mcua_dtheta}}\r
\r
 Δθ → θ - θ_0 [[theta_0]] → ω_0 t + (1)/(2)α t²\r
 It can also be verified using average angular speed la relacion correspondiente.\r
\r
{{f:mcua_delta_t_theta}}\r
\r
\r
4. **Linear components at the edge:**\r
 We apply la relacion correspondiente and la relacion correspondiente:\r
\r
{{f:mcua_v_omega}}\r
\r
{{f:mcua_at}}\r
\r
 v; [[a_t]] \r
\r
5. **Final centripetal acceleration:**\r
 Using la relacion correspondiente or the time-free relation la relacion correspondiente:\r
\r
{{f:mcua_ac}}\r
\r
{{f:mcua_sin_t}}\r
\r
 [[a_c]] ; ω² → ω_0² + 2αΔθ\r
\r
## Numerical substitution\r
\r
The values are substituted after SI conversion: the final angular velocity is 753.98 rad/s, the angular acceleration is 502.66 rad/s?, and the accumulated angular displacement is 565.49 rad. With radius 0.0475 m, the edge speed is 35.81 m/s, tangential acceleration is 23.88 m/s?, and final centripetal acceleration reaches 26993 m/s?.\r
\r
- ω → 7,200 × (2π/60) → 240π ≈ 753.98 rad/s.\r
- α → 753.98 / 1.5 ≈ 502.66 rad/s².\r
- Δθ → 0.5 × 502.66 × (1.5)² ≈ 565.49 rad.\r
- Revolutions completed: 565.49 / 2π ≈ 90.\r
- v.\r
- [[a_t]] .\r
- [[a_c]] .\r
\r
## Dimensional validation\r
\r
- Angular acceleration: T⁻¹ / T → rad/s². Correct.\r
- Speed: T⁻¹ · L → m/s. Correct.\r
- Displacement: \\([\\text{T}^{-2}] \\cdot [\\text{T}^2]\\) is dimensionless. Correct.\r
\r
## Physical interpretation\r
\r
The physical analysis **means** that we are facing the extreme scale of modern technology. The disk completes 90 revolutions before stabilizing, which **indicates** a very fast startup. Due to the high angular velocity, the final centripetal acceleration of $26,993\\;\\text{m/s}^2$ represents about $2,750$ times Earth's gravity ($g$), which **physically** shows us the immense radial pull required.\r
\r
On the other hand, a tangential acceleration of $23.88\\;\\text{m/s}^2$ **means** that the drive **dominates** the acceleration phase with high power. **This implies** that the read head must wait for stabilization to avoid alignment errors due to inertia. Linear speed at such a small radius reinforces why these systems are vacuum-sealed, as air friction would **oppose** efficiency and increase temperature.\r
\r
Furthermore, the angular acceleration **depends** on extremely precise motor torque control. Any fluctuation **decreases** system reliability. UACM is the mathematical language that **dominates** this design, ensuring data is written only when centripetal and tangential forces are **consistent** with the safety range, thus **opposing** any failure due to excessive vibration or structural stress during the transition phase.\r
\r
# Real-world example: Safety Braking in an Industrial Centrifuge\r
\r
## Context\r
\r
In chemical processes, large-radius centrifuges (1.5 m) rotating at $300\\;\\text{rpm}$ are used. In case of emergency, the brake must stop the system in $10$ seconds. We will analyze whether the required **tangential acceleration** is safe for the structure and how **angular velocity** evolves.\r
\r
## Physical estimation\r
\r
We estimate the braking will be abrupt but not catastrophic. If the disk goes at $300\\;\\text{rpm}$ (5 turns per second), it has considerable kinetic energy. Given that the radius is $1.5\\;\\text{m}$, any change in rotation translates into a significant linear motion at the outer edge. Because 10 seconds is a reasonable time, the braking force **means** a total energy dissipation that **indicates** the need for high-strength perns. This estimation is **consistent** with the need to dissipate the angular momentum of an industrial mass in a short interval.\r
\r
## Interpretation\r
\r
We first calculate ω_0 → 31.42 rad/s and then the necessary angular acceleration: α → -31.42 / 10 → -3.14 rad/s².\r
Applying tangential acceleration la relacion correspondiente, we get [[a_t]].\r
\r
{{f:mcua_at}}\r
\r
This deceleration **means** that the tangential component of acceleration **opposes** the motion. Consequently, the net acceleration **indicates** that the load inside the centrifuge tends to slide forward.\r
\r
Industrial design **depends** on ensuring internal static friction greater than the magnitude of total acceleration. **This implies** that the obtained value for $ [[a_t]] $ must be **consistent** with the strength of the anchors. Using high-strength materials **decreases** the risk of failure, **balancing** the forces that **oppose** the massive rotational inertia of the industrial equipment in an emergency stop, thus **physically** protecting the integrity of the laboratory.\r
`;export{e as default};
