const e=`# Navier-Stokes Intro — History and Context\r
\r
## Historical problem\r
\r
In the early nineteenth century, engineers and scientists needed to predict water flow in pipes, channels, and hydraulic machinery with sufficient accuracy for design. Newtonian mechanics gave Newton's Second Law, {F} = m{a}, but no one had yet written that law in differential form for a continuous viscous fluid. The experimental results of Hagen (1839) and Poiseuille (1840) on flow in narrow tubes showed that discharge was proportional to the fourth power of the radius and to the pressure gradient — a relationship entirely opaque from Newton's physics without a momentum equation for fluids.\r
\r
The fundamental question was: **how do forces act on a fluid particle in motion when the fluid has internal viscosity?** Answering this question was the necessary step to unify hydrodynamics within a single quantitative theoretical framework.\r
\r
## Prior conceptual difficulty\r
\r
Before Navier and Stokes, the best model for flowing fluids was **Bernoulli's equation** (Daniel Bernoulli, 1738) and Euler's **ideal fluid theory** (1755). These models assumed the fluid had no internal friction (*inviscid fluid*).\r
\r
The problem was twofold:\r
- **They could not explain pressure losses in real pipes.** An ideal fluid in steady flow loses no mechanical energy, yet experiments showed losses proportional to length and to viscosity.\r
- **They could not explain the velocity profile.** An ideal fluid in a tube would have uniform velocity across the cross-section; Hagen's and Poiseuille's experiments showed that velocity was maximum at the axis and zero at the wall, in a perfect parabola.\r
\r
What was missing was a term in the equation of motion that captured the **diffusion of momentum** between fluid layers: viscosity as a transport phenomenon of momentum.\r
\r
## What changed\r
\r
The breakthrough came in two stages:\r
\r
**Claude-Louis Navier (1822)** derived the equation of motion for viscous fluids starting from molecular hypotheses: forces between adjacent molecules are proportional to velocity differences. Although his molecular argument was incorrect (emergent transport properties cannot be derived from simple molecular forces), the resulting equation was correct.\r
\r
**George Gabriel Stokes (1845)** derived the same equation rigorously from continuum mechanics principles, without molecular hypotheses, simply by imposing that the stress tensor be linear in the strain-rate tensor (Newtonian fluid). His derivation is the one used today.\r
\r
The unified equation — the **Navier-Stokes Equation** — reads:

With this equation, Stokes analytically proved the Poiseuille parabolic profile and obtained Q propto R^4/[[mu]]?(-partial p/partial x), confirming the experimental results of Hagen and Poiseuille in full.\r
\r
**Osborne Reynolds (1883)** conducted the experiments that defined flow regimes: by injecting dye into a glass tube, he observed that at low velocity the flow was orderly (laminar) and at high velocity the dye dispersed chaotically (turbulent). His dimensionless number [[Re]] = [[rho]] v D / [[mu]] encapsulated the transition between both regimes in a single parameter.\r
\r
## Impact on physics\r
\r
Since Stokes and Reynolds, the Navier-Stokes equation evolved in four directions:\r
\r
1. **Exact analytical solutions** (19th–early 20th century): Couette profile, Stokes flow over a sphere, Jeffery-Hamel flow in a diverging channel. These are high-precision solutions but valid only for simple geometries and laminar flow.\r
\r
2. **Turbulent fluid mechanics** (Prandtl, 1904; von Kármán, 1930s): time-averaging the equation gave the Reynolds-averaged NS (RANS) equations with Reynolds stress tensors, requiring closure models (log-law wall, k-varepsilon models). This field dominates 20th-century aeronautical and hydraulic engineering.\r
\r
3. **Computational Fluid Dynamics** (CFD, from the 1960s): Direct Numerical Simulation (DNS) and finite-volume methods allow complex flows to be simulated without analytical solutions. Today, turbine, reactor, and cooling-circuit design depends on NS-based CFD.\r
\r
4. **Millennium Problem** (Clay Mathematics Institute, 2000): proving the existence and smoothness of solutions to the 3D Navier-Stokes equation remains unsolved. It is one of the seven Millennium Prize Problems with a one-million-dollar prize.\r
\r
## Connection with modern physics\r
\r
The Navier-Stokes equation is the core of multiple contemporary application areas:\r
\r
- **Piping network design** (oil & gas, drinking water, domestic gas): the Hagen-Poiseuille and Darcy-Weisbach formulas derive directly from simplified NS. Pump sizing follows the same equation.\r
- **Vascular biomechanics**: blood flow in a coronary artery is laminar at rest ([[Re]] aprox 300) and turbulent at a stenosis. NS simulations predict wall shear stress zones associated with atherosclerosis risk.\r
- **Microfluidics and lab-on-chip**: at the micrometre scale, [[Re]] ll 1 and Navier-Stokes reduces to the fully linear Stokes equation, enabling the design of separators, mixers, and bioreactors with analytically calculable geometries.\r
- **Computational aerodynamics**: the design of aircraft, wind turbines, and automobiles relies on numerical NS solutions in turbulent flow. The viscous term munabla^2{u} determines the boundary layer and hence aerodynamic drag.`;export{e as default};
