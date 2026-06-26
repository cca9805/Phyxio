const e=`# Physical Models: Block on Surface\r
\r
## Ideal model\r
\r
The block on surface with friction operates under a simplified Coulomb model that assumes constant friction coefficients. This ideal model is not false; it is a deliberately simplified tool that works extraordinarily well within its range of applicability.\r
\r
The main simplifications are:\r
\r
- **Constant friction coefficients**: The static coefficient [[mu_s]] and kinetic coefficient [[mu_k]] are treated as constant properties of the contact pair, independent of velocity, pressure, and temperature within normal operating ranges.\r
- **Dry contact**: The model assumes clean, dry surfaces without lubricants or contaminants that would modify friction behavior.\r
- **Rigid bodies**: Both block and surface are assumed perfectly rigid, so normal force distributes uniformly and contact geometry remains unchanged under load.\r
- **Point contact**: The contact area is treated as a point or uniform surface, ignoring pressure distribution variations.\r
\r
Each of these idealizations has physically measurable consequences. The skill lies in recognizing when the consequence is acceptable.\r
\r
## Hypotheses\r
\r
The explicit hypotheses supporting the model are:\r
\r
- **Kinematic hypothesis**: The system can be described using the magnitudes defined in magnitudes.yaml without additional variables. Motion is purely translational without rotation or rolling effects.\r
- **Dynamic hypothesis**: Forces satisfy Newton's second law in its basic form. Friction follows the Amontons-Coulomb laws: static friction varies up to a maximum proportional to normal force, kinetic friction is constant and proportional to normal force.\r
- **Continuity hypothesis**: Forces and accelerations vary continuously; no instantaneous jumps except at the static-kinetic transition point.\r
- **Isolation hypothesis**: The block-surface system is mechanically isolated from vibrations, air resistance, and other external perturbations that could affect motion.\r
\r
Violating any of these hypotheses makes the model fail predictably.\r
\r
## Quantitative validity domain\r
\r
The model works well when these quantitative conditions are met:\r
\r
- **Contact pressure**: Between 10⁴ Pa and 10⁷ Pa (typical for most engineered surfaces). Below this range, adhesion forces become significant; above it, plastic deformation occurs.\r
- **Sliding velocity**: Less than 1 m/s for kinetic friction. At higher velocities, frictional heating reduces the effective coefficient, causing "thermal fading".\r
- **Temperature**: Between -20 °C and 80 °C for typical material pairs. Outside this range, material properties change significantly.\r
- **Surface roughness**: Ra between 0.1 μm and 10 μm. Very smooth surfaces (below 0.1 μm) exhibit adhesion-dominated friction; very rough surfaces (above 10 μm) have interlocking effects.\r
\r
Outside these ranges, neglected terms in the idealized model become comparable to main terms and the model loses precision.\r
\r
## Model failure signals\r
\r
How do you detect that the model has ceased to be valid? Look for these observable indicators:\r
\r
- **Prediction vs. measurement**: Your calculation gives a result that contradicts observation by more than 10-15%.\r
- **Squeal or stick-slip**: High-frequency oscillations or jerky motion indicate that the constant kinetic friction assumption is failing.\r
- **Visible wear**: Dust, debris, or surface damage appearing during motion signals that the rigid-body assumption is breaking down.\r
- **Temperature rise**: Significant heating of the contact area (detectable by touch) indicates frictional energy dissipation is modifying material properties.\r
- **Breakdown of approximation**: Calculated friction forces become comparable to or greater than the applied forces, indicating the transition to a different regime.\r
\r
## Extended or alternative model\r
\r
When the ideal model fails, the next step is to include secondary effects:\r
\r
- **Velocity-dependent friction**: Replace constant [[mu_k]] with a function that decreases with velocity (Stribeck curve) to model lubricated contacts or high-speed behavior.\r
- **Temperature coupling**: Include heat transfer equations to model thermal effects on friction coefficients, essential for braking systems.\r
- **Elastic contact mechanics**: Use Hertzian contact theory when deformation is significant, modeling the contact area as a deformable region rather than a point.\r
- **Viscoelastic effects**: For polymer or rubber contacts, include time-dependent material response to model creep and relaxation behaviors.\r
\r
The extended model is more accurate but also more complex. Do not use it unless you need that precision.\r
\r
**Explicit transition**: The ideal Coulomb model is appropriate for introductory problems, preliminary design, and analysis of simple systems where 10-15% accuracy is acceptable. When model failure signals are detected, or when precision better than 5% is required for critical applications (safety brakes, precision bearings, high-performance tires), one must transition to the extended model that includes velocity dependence, temperature effects, and deformation mechanics.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal Model | Extended Model |\r
|---------|-------------|------------------|\r
| **Precision** | 85-90% | 95%+ |\r
| **Complexity** | Algebraic equations | Coupled differential equations |\r
| **Solution time** | Minutes | Hours to days |\r
| **When to use** | Education, preliminary design, standard problems | Critical safety systems, research, failure analysis |\r
| **Typical range** | Dry classroom demonstrations, simple machinery | High-performance brakes, precision bearings, tire design |\r
\r
Learn to use the ideal model first. Once mastered, transition to the extended model as needed.\r
`;export{e as default};
