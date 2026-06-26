const e=`# Relationship Between Elastic Moduli

## Conceptual context

An isotropic solid has the same mechanical response in all directions. This symmetry requires that its entire elasticity be described by exactly two independent constants. Any pair suffices: E and nu, G and K, lambda and G, or even K and nu. All other constants are derived algebraically from the chosen pair. This leaf addresses precisely those algebraic relationships: how to convert from one pair of constants to any other, what the crossings and limits mean physically, and why the choice of pair affects intuition and modelling.

The fact that only two independent constants exist is non-trivial. It means that measuring, for example, Young modulus and Poisson ratio in a tensile test is sufficient to predict the shear modulus and bulk modulus of the same material, without performing those additional tests. It also implies that P and S wave velocities in the material are completely determined by E and nu (plus density), directly connecting the relationships in this leaf with wave propagation in solids.

## 🟢 Essential level

The central idea is that an isotropic material cannot have arbitrary, independent values of E, G and K. If E and nu are known, the other two are fixed. This occurs because the tensile, shear and volumetric compression responses are not independent mechanisms in a medium where all directions are equivalent.

[[nu_poisson]] is the parameter governing the partition between the different moduli. A material with [[nu_poisson]] near zero distributes its stiffness evenly between shear and compression. A material with [[nu_poisson]] near 0.5 is nearly incompressible: [[K_bulk]] soars while [[G_shear]] drops to a small fraction of [[E_young]].

At the opposite extreme, an auxetic material with negative [[nu_poisson]] expands laterally when stretched. In that case [[G_shear]] exceeds [[E_young]]/2 and [[K_bulk]] can be less than [[E_young]]/3.

The most commonly used relationships in practice connect [[G_shear]] and [[K_bulk]] with [[E_young]] and [[nu_poisson]]. They are the fundamental tools for converting tensile test data into the complete material description, but their algebraic form is reserved for the formal level.

## 🔵 Formal level

The relationships between moduli are derived from the generalised Hooke law for isotropic media, which in tensorial notation expresses the stress tensor as a linear combination of the strain tensor and its trace. The two coefficients of that combination are the Lame parameters: lambda and G (also called mu).

From the Lame parameters, E, K and nu are defined:

{{f:relacion_G_E_nu}}

{{f:relacion_K_E_nu}}

{{f:relacion_G_K_nu}}

{{f:relacion_E_G_K}}

{{f:relacion_lambda_E_nu}}

The relationship between G, K and E without nu is particularly useful:

{{f:relacion_E_G_K}}

This equation shows that E is a kind of weighted harmonic mean of G and K. If G is much less than K (nearly incompressible material), E approaches 3G. If K is much less than G (physically rare), E approaches 9K.

[[nu_poisson]] has strict thermodynamic limits: it must be greater than -1 and less than or equal to 0.5 for the strain energy to be positive definite. The upper limit 0.5 corresponds to incompressibility ([[K_bulk]] infinite). The lower limit -1 corresponds to a material with [[G_shear]] infinite relative to [[K_bulk]].

The rearrangements of each formula allow calculating any constant from any known pair. The conversion table is symmetric: there are exactly 15 possible pairs among the 6 constants (E, G, K, nu, lambda, mu), and each produces a valid formula.

## 🔴 Structural level

The derivation starts from the fourth-order stiffness tensor of an isotropic medium, which has the most general form compatible with spherical symmetry. The representation theorem for isotropic fourth-order tensors guarantees that this tensor depends on exactly two independent scalars. Those scalars can be chosen as lambda and mu (Lame parameters), or as any other equivalent pair.

The generalised Hooke law is written as sigma equals lambda times trace of epsilon times identity plus 2G times epsilon. From here all relationships are extracted by imposing specific load states: uniaxial tension (for E and nu), pure shear (for G), hydrostatic pressure (for K).

The algebraic structure shows that the six constants (E, G, K, nu, lambda, mu) are rational functions of any chosen pair. There are no square roots or transcendental functions: conversion is always elementary arithmetic.

The thermodynamic stability condition requires strain energy to be a positive definite quadratic form. This imposes: G greater than zero, K greater than zero, and -1 less than nu less than or equal to 0.5. These restrictions are not conventions but consequences of the second law of thermodynamics.

In anisotropic materials (crystals, composites, wood), the stiffness tensor has more independent components (up to 21 for the lowest symmetry), and the simple relationships in this leaf cease to be valid. The formulae presented here are exclusive to isotropy.

## Deep physical interpretation

The relationships between moduli reveal that isotropic elasticity has an underlying geometric structure: strain decomposes into a volumetric part (size change) and a deviatoric part (shape change). K governs the former and G the latter. E and nu are combinations that mix both contributions, explaining why E is not an elementary property from the tensorial point of view, although it is the most intuitive experimentally.

The divergence of K as nu approaches 0.5 is not a mathematical pathology: it reflects the physical impossibility of compressing certain materials (rubber, fluids). The vanishing of G at the same limit indicates these materials flow under shear, which is exactly what a liquid does.

## Order of magnitude

For steel (E approx. 200 GPa, nu approx. 0.3): G approx. 77 GPa, K approx. 167 GPa, lambda approx. 113 GPa. Ratio [[ratio_G_E]] is 0.38 and [[ratio_K_E]] is 0.83.

For aluminium (E approx. 70 GPa, nu approx. 0.33): G approx. 26 GPa, K approx. 69 GPa. Ratio [[ratio_G_E]] of 0.38, [[ratio_K_E]] of 0.98.

For rubber (E approx. 3 MPa, nu approx. 0.4999): G approx. 1 MPa, K approx. 2 GPa. Ratio K/G is of the order of 2000: practically incompressible.

A quick check: if G comes out greater than E/2 or K comes out less than E/3, verify whether nu is within the valid range.

## Personalized resolution method

First identify which pair of constants is known. Second, select the formula connecting the known pair with the sought magnitude. Third, substitute and calculate. Fourth, verify coherence: G must be less than E/2 (unless nu is negative), K must be greater than E/3, and nu must be between -1 and 0.5.

If P and S wave velocities are known along with density, calculate G as density times S velocity squared, K as density times P velocity squared minus four thirds of G, and then E and nu from G and K.

## Special cases and extended example

If nu is zero: G is E/2, K is E/3, lambda is zero. The three stiffnesses are comparable. Example: cork.

If nu is 0.5: G is E/3, K diverges, lambda diverges. The material does not resist volumetric compression. Example: ideal rubber, fluids.

If nu is negative (auxetic material): G is greater than E/2, K is less than E/3. The material expands laterally when stretched. Example: re-entrant auxetic foams.

Extended example: given a steel with E of 210 GPa and nu of 0.29, calculate G, K, lambda and verify with the equation for E as a function of G and K. G is 81.4 GPa, K is 166.7 GPa, lambda is 112.3 GPa. Verification: 9 times 166.7 times 81.4 divided by 3 times 166.7 plus 81.4 gives 210 GPa. Coherent.

## Real student questions

Why are no more than two constants needed? Because isotropic symmetry reduces the stiffness tensor from 21 independent components to just 2. Each additional symmetry of the material eliminates degrees of freedom.

Can nu be exactly 0.5? In theory yes, but it implies infinite K (perfectly incompressible material). In practice, materials like rubber have nu very close to 0.5 but not exactly.

Why does lambda have no simple mechanical interpretation? Because lambda does not correspond to a pure test. It appears in the tensorial formulation as the coefficient of the dilation term, but it cannot be isolated experimentally like E (tensile test) or G (torsion test).

## Cross-cutting connections and study paths

This leaf connects with elastic properties of solids (individual definitions of E, G, K, nu), with longitudinal and transverse waves (wave velocities depend on these moduli), with mechanical impedance (which depends on the density-velocity product, and therefore on the moduli), and with reflection and transmission (which depends on impedances). It also prepares the ground for anisotropic elasticity and advanced continuum mechanics.

## Final synthesis

In an isotropic solid, two independent elastic constants completely determine the entire mechanical response. The relationships between moduli are algebraic consequences of the medium symmetry. The Poisson ratio is the natural control parameter governing the partition between shear stiffness and volumetric stiffness. The limits of nu (-1 to 0.5) have thermodynamic origin and delimit the physically realisable space of isotropic materials.
`;export{e as default};
