const e=`## Ideal model\r
\r
The ideal lift model treats the wing as a reference surface interacting with a steady, low-subsonic, approximately incompressible flow. Airfoil shape, angle of attack and the real pressure distribution are summarized by the coefficient [[C_L]]. The model preserves the quantities needed to estimate [[L]]: density [[rho]], speed [[v]], reference area [[S]] and lift coefficient [[C_L]].\r
\r
It neglects, as a first approximation, wingtip vortices, unsteady separation, surface roughness, strong compressibility and structural deformation.\r
\r
## Hypotheses\r
\r
- Steady flow: if the flow varies abruptly, a single smooth force estimate is insufficient.\r
- Low-subsonic regime: if Mach number increases, compressibility alters pressure distribution.\r
- Attached boundary layer: if it separates, stall occurs and [[C_L]] no longer grows regularly.\r
- Known coefficient: if [[C_L]] does not come from profile data, the calculation is numerical but not physical.\r
- Fixed reference area: flap deployment may change the effective [[S]].\r
\r
## Quantitative validity domain\r
\r
As a first-order rule, the elementary model is reasonable below Mach 0.3, at moderate angle of attack, and for lift coefficients within measured ranges. Conventional wings often operate with [[C_L]] between 0.2 and 1.5; higher values may require high-lift devices or indicate operation close to stall.\r
\r
Order of magnitude must also be checked. A light aircraft typically needs tens of kilonewtons of lift, while a large airliner requires millions of newtons.\r
\r
## Model failure signals\r
\r
The model fails when increasing angle of attack no longer increases lift, when buffeting appears, when separation noise becomes visible, or when pressure changes abruptly. It also fails in transonic flow, near shock waves, in strong ground effect, or when three-dimensional vortices dominate.\r
\r
A numerical warning sign is an implausible [[C_L]] for an ordinary configuration. Another is a value of [[L]] incompatible with [[W]] in level flight.\r
\r
## Extended or alternative model\r
\r
The extended model introduces lift-drag polars, Reynolds number, compressibility corrections, three-dimensional effects and CFD simulation. Instead of a single coefficient, it uses a function of angle of attack, Reynolds number, Mach number and wing configuration.\r
\r
It becomes necessary for stall, efficiency, induced drag, maneuvers, transonic flow, real profiles or detailed design.\r
\r
## Operational comparison\r
\r
| Model | Strength | Limit |\r
|---|---|---|\r
| Global [[C_L]] model | fast first estimate | depends on reliable coefficient data |\r
| Local Bernoulli reading | connects pressure and speed | does not alone explain circulation or separation |\r
| Aerodynamic polar | predicts margin and stall | requires data or simulation |\r
| CFD | high spatial detail | expensive and sensitive to turbulence modeling |\r
\r
This closes the model hierarchy explicitly.`;export{e as default};
