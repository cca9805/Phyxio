# Models of the Fundamental Principle of Hydrostatics

## Ideal model
The ideal physical model of the Fundamental Principle of Hydrostatics describes the linear relationship between absolute pressure and vertical elevation in a fluid at rest. It is based on the premise that the fluid is a continuous medium whose density is not altered by pressure changes. Under this approximation, the pressure gradient is constant throughout the analyzed volume, greatly simplifying engineering calculations for the vast majority of liquids in terrestrial conditions. It is the standard model for designing dams, plumbing systems, industrial tanks, and conventional marine statics where required precision allows ignoring second-order effects.

## Hypotheses
The validity of the equation [[p2]] es [[p1]] + [[rho]] g ([[z1]] - [[z2]]) depends on the following restrictive physical hypotheses:
1.  **Absolute incompressibility of the medium:** It is assumed that the volumetric compressibility coefficient is zero (K es 0). This implies that the volume of a fluid mass does not decrease as pressure increases, maintaining density [[rho]] as a constant scalar parameter independent of depth.
2.  **Pure static equilibrium:** No macroscopic fluid movements exist. The velocity field is zero at all its points (v es 0), eliminating any dynamic pressure components (Bernoulli) or viscous shear forces that would alter the force balance.
3.  **Uniform gravitational field:** The acceleration of gravity [[g]] is considered constant in both magnitude and direction throughout the analyzed fluid column. Variations of g with altitude (1/r^2) and local anomalies of the Earth's geoid are neglected.
4.  **Absence of surface tension effects:** In large fluid volumes, capillary and surface forces are ignored, considering only volume forces (gravity) and surface forces (pressure).

## Quantitative validity domain
This model is extraordinarily accurate when working within the following operational ranges and error criteria:
-   **Liquid column height (h):** Valid for elevation changes up to 5000 m in liquids. In water, density only increases by 2\% at 4000 m depth, so the error of assuming constant density is less than 1\% for most technical purposes.
-   **Gas column height (h):** For gases like air, the linear model is only acceptable for height variations of less than 100 m (h < 100 m). Above this value, the pressure drop causes gas expansion that invalidates the constant density hypothesis.
-   **Pressure variation (incremento de presion):** The model maintains its integrity for pressures up to 500 atm (50 MPa). At higher pressures, even liquids begin to show compressibility that requires non-linear corrective terms.

## Model failure signals
The linear model ceases to be representative when the following phenomena are observed:
-   **Non-negligible compressibility:** In large-scale gases, linearly calculated pressure differs drastically from the measured one. For example, at 10 km altitude, the linear model's error exceeds 50\%.
-   **Fluid dynamics:** The appearance of currents or turbulence generates pressure differences that the fundamental principle cannot explain, requiring the Navier-Stokes equation.
-   **Gravitational gradient:** In large-scale planetary studies, the variation of g with distance to the center of mass invalidates the uniform gravity hypothesis.

## Extended or alternative model
To overcome the limitations of the incompressible model, the **Compressible Hydrostatic Model or Barometric Equation** is used. This model integrates the fundamental differential equation [[dp]] es -[[rho]](p) g [[dz]] by coupling it with an equation of state (such as the ideal gas law p es [[rho]] R T / M).

Transition to the barometric model: it is convenient to switch models when the system's characteristic height is comparable to the atmosphere's scale height (about 8 km) or when we must pass to the study of compressible gases.

{{f:salto_hidro}}


p(z) es presion de referencia * exp( - frac{M g z}{R T} )


## Operational comparison
While the linear model is a powerful and simple tool for civil and liquid fluid engineering, the exponential barometric model is the basis of meteorology, aeronautics, and planetary atmosphere physics. The former stands out for its ease of calculation in controlled environments, while the second offers the necessary depth to understand the structure of large-scale compressible fluids and the variation of atmospheric pressure with altitude.


