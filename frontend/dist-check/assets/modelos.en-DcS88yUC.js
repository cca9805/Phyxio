const e=`# Continuity Equation — Models and validity\r
\r
## Ideal model\r
The ideal model of the continuity equation is strictly based on the macroscopic conservation of the volumetric flow rate. We consider the flow of a fluid through a rigid conduit of variable section, where the mass crossing a control surface is completely independent of time. Under this overarching view, the fluid behaves as a rigid, inexhaustible stream where the relationship between the cross-sectional area [[A]] and the fluid velocity [[v]] is strictly geometric. It is the gold standard model utilized in civil hydraulics, architectural supply networks, and fundamental fluid teaching.\r
\r
## Hypotheses\r
For the simplified ideal model to act as a faithful representation of reality and yield correct physical estimations, the following foundational conditions must be met:\r
- **Incompressible fluid**: We assume the fluid density [[rho]] is purely constant. This ignores pressure waves and the inherent elasticity of the fluid medium.\r
- **Steady flow**: The variables at any given spatial point do not change with time. We deliberately ignore the switching on or off of active pumps or water hammer effects.\r
- **One-dimensional flow**: We suppose the fluid moves perfectly parallel to the conduit axis and that the velocity is uniform across the entire section space. This analytically collapses the complex velocity vector into a single scalar mean magnitude.\r
- **Impermeable walls**: There are absolutely no leaks, no lateral mass injections, and zero pipe wall porosity.\r
\r
## Quantitative validity domain\r
The predictive success of this model depends vitally on staying well away from physical regimes where mass "hides" behind density adjustments or rapid transients. The numerical bounds are:\r
- **Mach number**: The model performs adequately if the Mach number is strictly below 0.3. Above this threshold (approximately $100\\,\\text{m/s}$ in atmospheric air), the volumetric error stemming from ignoring compressibility exceeds $5\\%$.\r
- **Common liquids**: For water, standard oils, and liquid fuels under normal conditions, the model's error is solidly below $1\\%$, as their fluid density [[rho]] varies well under $0.01\\%$ amidst typical pressure fluctuations.\r
- **Temporal Scale**: The systemic flow must remain phenomenologically steady on a timescale vastly larger than the simple transit time.\r
\r
## Model failure signals\r
When one or more of the aforementioned hypotheses are systematically violated, the model intrinsically begins to yield physically impossible or deeply inconsistent results:\r
- **Singularity Paradox**: If the cross-sectional area [[A]] artificially approaches zero, the model blindly predicts infinite speed. In sheer reality, this massive contraction commands an extreme pressure drop, leading to aggressive liquid cavitation or absolute flow choking.\r
- **Flow Inconsistency**: If experimental measurements report volumetric flow divergencies greater than $2\\%$ between inlet and outlet, an unmodeled leak or trapped gas accumulation is actively compromising the real system.\r
- **Noise and Vibrations**: These represent glaring signals of heavy unsteady or wildly turbulent flows that completely invalidate the steady mean approximations.\r
\r
## Extended or alternative model\r
When the ideal volumetric model irrevocably fails, we resort to formulations that gracefully reintegrate the omitted physics. An explicit transition toward these superior alternative models is necessary when to switch to:\r
1.  **Mass Flow Rate**: The supreme model that invokes the\r
\r
{{f:caudal_masico}}\r
\r
law. It is stringently mandatory for gases, combustion procedures, and aerospace high-velocity regimes. It rigorously maintains that mass is conserved even if volume dilates.\r
2.  **Viscous Profile Model**: Introduces targeted Coriolis coefficients to correct the assumption since fluid inherently drags slower near strict physical boundaries.\r
3.  **Computational Fluid Dynamics (CFD)**: Resolves the monumental 3D differential Navier-Stokes equations. It assumes no 1D limitations, handling deep turbulence and chaotic recirculations where simple geometric formulas carry zero meaning.\r
\r
## Operational comparison\r
\r
| Situation | Recommended Model | Core Magnitude | Justification |\r
| :--- | :--- | :--- | :--- |\r
| **Leaking faucet tap** | Ideal Incompressible | Volumetric flow rate [[Q]] | Low speeds, securely constant liquid density. |\r
| **Turbine jet exhaust** | Compressible Mass | Mass flow rate | Sky-high temperatures and violent density shifts. |\r
| **Drip irrigation mesh** | Complex Nodal Network | Volumetric flow rate [[Q]] | Multiple scattered outlets requiring sum balances. |\r
| **Rocket core plume** | Mass Tracker / CFD | Mass flow rate | Maximum precision demanded under supersonic velocity. |\r
\r
This clear breakdown grants every analyst the sharp capacity to select their ideal calculative instrument according directly to explicit physical demands and operational tolerances.`;export{e as default};
