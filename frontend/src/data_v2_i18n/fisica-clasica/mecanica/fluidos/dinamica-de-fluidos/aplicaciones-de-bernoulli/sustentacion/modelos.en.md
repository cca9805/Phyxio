## Ideal model

The ideal lift model treats the wing as a reference surface interacting with a steady, low-subsonic, approximately incompressible flow. Airfoil shape, angle of attack and the real pressure distribution are summarized by the coefficient [[C_L]]. The model preserves the quantities needed to estimate [[L]]: density [[rho]], speed [[v]], reference area [[S]] and lift coefficient [[C_L]].

It neglects, as a first approximation, wingtip vortices, unsteady separation, surface roughness, strong compressibility and structural deformation.

## Hypotheses

- Steady flow: if the flow varies abruptly, a single smooth force estimate is insufficient.
- Low-subsonic regime: if Mach number increases, compressibility alters pressure distribution.
- Attached boundary layer: if it separates, stall occurs and [[C_L]] no longer grows regularly.
- Known coefficient: if [[C_L]] does not come from profile data, the calculation is numerical but not physical.
- Fixed reference area: flap deployment may change the effective [[S]].

## Quantitative validity domain

As a first-order rule, the elementary model is reasonable below Mach 0.3, at moderate angle of attack, and for lift coefficients within measured ranges. Conventional wings often operate with [[C_L]] between 0.2 and 1.5; higher values may require high-lift devices or indicate operation close to stall.

Order of magnitude must also be checked. A light aircraft typically needs tens of kilonewtons of lift, while a large airliner requires millions of newtons.

## Model failure signals

The model fails when increasing angle of attack no longer increases lift, when buffeting appears, when separation noise becomes visible, or when pressure changes abruptly. It also fails in transonic flow, near shock waves, in strong ground effect, or when three-dimensional vortices dominate.

A numerical warning sign is an implausible [[C_L]] for an ordinary configuration. Another is a value of [[L]] incompatible with [[W]] in level flight.

## Extended or alternative model

The extended model introduces lift-drag polars, Reynolds number, compressibility corrections, three-dimensional effects and CFD simulation. Instead of a single coefficient, it uses a function of angle of attack, Reynolds number, Mach number and wing configuration.

It becomes necessary for stall, efficiency, induced drag, maneuvers, transonic flow, real profiles or detailed design.

## Operational comparison

| Model | Strength | Limit |
|---|---|---|
| Global [[C_L]] model | fast first estimate | depends on reliable coefficient data |
| Local Bernoulli reading | connects pressure and speed | does not alone explain circulation or separation |
| Aerodynamic polar | predicts margin and stall | requires data or simulation |
| CFD | high spatial detail | expensive and sensitive to turbulence modeling |

This closes the model hierarchy explicitly.