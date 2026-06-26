# Physical Models of Density

## Ideal model
The ideal model of density is based on the **Continuum Hypothesis**, which treats the fluid as a substance whose matter is perfectly uniformly distributed throughout the space it occupies. In this model, density [[rho]] is defined as a well-defined point property, ignoring the fact that matter is composed of atoms and vacuum. This approach allows the application of differential and integral calculus to model flows and pressures, turning density into a continuous scalar field [[rho]] varying in space.

## Hypotheses
For this model to be representative of reality, the following simplifications must be accepted:
1.  **Homogeneity**: It is assumed that properties are identical in any small portion of the studied fluid.
2.  **Non-Molecular Structure**: The empty space between molecules is ignored; the fluid "fills" the space completely.
3.  **Incompressibility (in liquids)**: It is assumed that density does not change with pressure, which greatly simplifies the Navier-Stokes equations.
4.  **Steady State**: In many initial analyses, it is assumed that [[rho]] does not vary with time.

## Quantitative validity domain
The density model as a continuous medium is extraordinarily robust, but it has clear limits:
- **Liquids and Solids**: The model is valid down to nanometer scales (10 elevado a -9 m), where the molecular structure begins to dominate.
- **Gases**: Valid as long as the mean free path of molecules is much smaller than the container dimensions (Knudsen Number Kn < 0.01).
- **Macroscopic Regime**: For volume samples V > 10 elevado a -15 m al cubo under standard conditions, statistical mass fluctuations are negligible (error < 10 elevado a -6).

## Model failure signals
A researcher must abandon the uniform density model when observing the following signals:
1.  **Extreme Pressure Fluctuations**: In gases at very low pressure (vacuum), where the number of particles is so low that density "jumps" erratically.
2.  **Intense Thermal Gradients**: If the fluid is unevenly heated, convection currents appear because density is no longer uniform.
3.  **Multiphase Mixtures**: If there are gas bubbles in a liquid, the single [[rho]] model fails and a mixture or separate phase model must be used.

## Extended or alternative model
When the limits of the ideal domain are exceeded, deciding when it is appropriate to change the model is vital:
1.  **Molecular Dynamics**: Used when the system is so small that we must simulate each individual particle.
2.  **Equations of State (Real Gas)**: Used for gases where density changes drastically with pressure and temperature (Van der Waals, Redlich-Kwong).
3.  **Mixture Model**: For fluids with suspended solids or emulsions, where volumetric fractions are defined for each component.

## Operational comparison
While the continuum model is the gold standard for civil and hydraulic engineering (where water is treated as a dense, incompressible block), the real gas model is indispensable in the aerospace and petrochemical industry. On the other hand, molecular dynamics is reserved for nanotechnology and advanced biochemistry. The choice always depends on whether the phenomenon of interest occurs at a scale where the granular "texture" of matter influences the final result.
