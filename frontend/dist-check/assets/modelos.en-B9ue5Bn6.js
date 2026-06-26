const e=`# Modelos físicos: Exam-Type Problems\r
# Physical models: Exam-Type Problems\r
\r
## Ideal model\r
\r
This leaf operates under an idealized model that assumes certain simplifications. The ideal model is not wrong; it is a deliberately simplified tool that works extraordinarily well within its range of applicability.\r
\r
The main simplifications are:\r
\r
- **Massless, frictionless pulley**: The pulley changes the direction of [[tension_cuerda]] without altering its magnitude or absorbing energy.\r
- **Inextensible rope**: The rope has zero elastic elongation, so [[masa_1]] and [[masa_2]] always share the same [[aceleracion_sistema]] in absolute value.\r
- **Point masses**: Both [[masa_1]] and [[masa_2]] are treated as point masses; rotational effects are ignored.\r
- **Constant [[coeficiente_rozamiento]]**: The kinetic friction coefficient is constant throughout the motion, following the Coulomb model.\r
- **Rigid inclined plane**: The surface geometry is fixed; no deformation occurs under the [[fuerza_normal]].\r
\r
Each of these idealizations has measurable physical consequences. The skill lies in recognizing when those consequences are acceptable.\r
\r
## Hypotheses\r
\r
The explicit hypotheses sustaining the model are:\r
\r
- **Kinematic hypothesis**: The system can be fully described using [[aceleracion_sistema]] as a single shared variable for both bodies.\r
- **Dynamic hypothesis**: Real forces satisfy Newton's second law in its basic form, without hidden mechanisms.\r
- **Continuity hypothesis**: All quantities vary continuously; no discontinuous jumps occur.\r
- **Decoupling hypothesis**: The effects we ignore (pulley inertia, rope elasticity) do not couple nonlinearly with the main effects.\r
\r
Violating any of these hypotheses causes the model to fail predictably.\r
\r
## Quantitative validity domain\r
\r
The model produces results with less than 5% error when these quantitative conditions hold:\r
\r
- Plane angle θ < 60°; at higher angles [[componente_tangencial_peso]] exceeds 87% of [[masa_1]]'s weight and unmodeled cable effects become relevant.\r
- System speed below 5 m/s; above this value the effective [[coeficiente_rozamiento]] can deviate more than 10% from the static Coulomb value.\r
- [[masa_1]] and [[masa_2]] each between 0.1 kg and 50 kg.\r
- Pulley mass below 5% of total system mass; if higher, error in [[aceleracion_sistema]] exceeds 5%.\r
\r
Quantitatively: if any condition is violated, the expected error exceeds 10%.\r
\r
Outside these ranges, the terms neglected in the idealized model become comparable to the main terms and the model loses accuracy.\r
\r
## Model failure signals\r
\r
How do you detect that the model has stopped being valid? Look for these observable indicators:\r
\r
- **Prediction vs. measurement**: Your calculation gives a result that contradicts observation by more than 5–10%.\r
- **Numerical instability**: Small parameter changes produce large result changes (sign of resonance or another unmodeled effect).\r
- **Physically nonsensical result**: Wrong sign, infinite divergence, or result violating a conservation law.\r
- **Approximation breakdown**: One of the neglected terms becomes comparable to or greater than the main terms.\r
\r
## Extended or alternative model\r
\r
When the ideal model fails, the next step is to include secondary effects:\r
\r
- **Pulley with inertia**: Add the rotational inertia term \\(\\frac{1}{2} m_p r^2\\) to the effective inertia of the system. This reduces [[aceleracion_sistema]] below the ideal value.\r
- **Elastic rope**: Model the rope as a spring with stiffness constant k. This introduces oscillatory behavior superimposed on the uniform acceleration.\r
- **Variable [[coeficiente_rozamiento]]**: Use a speed-dependent or temperature-dependent friction model when high velocities or extended duration are involved.\r
- **Coupled dynamics**: When a subsystem affects another in a non-trivial way (e.g., flexible cable in long conveyor belts).\r
\r
The extended model is more precise but also more complex. Use it only when the required precision demands it.\r
\r
## Operational comparison\r
\r
| Aspect | Ideal model | Extended model |\r
|--------|-------------|----------------|\r
| **Accuracy** | 90–95% | 98%+ |\r
| **Complexity** | Algebraic equations | Differential equations |\r
| **Solution time** | Minutes | Hours |\r
| **When to use** | Education, rapid design | Research, validation |\r
| **Typical scope** | Clean laboratory | Real-world systems |\r
\r
Learn to use the ideal model first. When to switch to the extended model: when [[aceleracion_sistema]] calculated differs from the experimental value by more than 5%, or when the pulley mass is comparable to the total system mass.\r
`;export{e as default};
