const e=`## Historical problem

The problem of transverse vibrations in elastic beams was one of the great challenges of 18th-century mechanics. While the vibrating string was satisfactorily solved with the second-order wave equation (d'Alembert, 1747), bars and beams exhibited qualitatively different behaviour that did not fit the same framework: sounds produced by a struck bar had non-equally-spaced harmonics and perturbations broadened as they propagated.

The challenge was finding the correct equation of motion for an elastic beam that would explain these experimentally observed phenomena: the dependence of resonance frequencies on cross-section geometry (not just length) and the dispersive nature of propagation.

## Prior conceptual difficulty

The main difficulty was the lack of a sufficiently developed elasticity theory to connect the geometric properties of the cross-section with the restoring force in bending. In the string, tension provides a simple restoring force proportional to curvature (second derivative). In the beam, the restoring force depends on how internal stresses are distributed across the section, requiring integration over the entire cross-section and producing a bending moment proportional to local curvature.

Eighteenth-century mathematicians had to solve a fundamental question: the restoring force in a beam is proportional to the fourth spatial derivative of displacement, not the second. This fact, apparently simple in retrospect, required deep understanding of deformable solid mechanics that Hooke had barely outlined and that Euler and Bernoulli formalised over decades of work.

Additional confusion between elastic modulus, section moment of inertia and material density prevented establishing the correct functional dependence between resonance frequency and beam parameters.

## What changed

Daniel Bernoulli proposed in 1735 that the differential equation of a vibrating beam involved the fourth spatial derivative of displacement, based on the proportionality between bending moment and curvature (Bernoulli-Euler hypothesis). Euler developed the complete formulation between 1744 and 1770, establishing the biharmonic equation for transverse displacement of a slender beam.

The key result was recognising that the product of Young's modulus and section moment of inertia (EI) acts as the effective stiffness parameter, analogous to tension in the string but with a higher differential order. This immediately explained why resonance frequencies depended on the cube of thickness (through I) and why free-bar partials were not harmonic.

The quadratic dispersion relation ([[omega]] proportional to the square of the wavenumber) was implicit in Euler's works, although interpretation in terms of frequency-dependent phase velocity was only formalised in the 19th century with the development of Fourier wave theory.

## Impact on physics

Euler-Bernoulli theory had a profound impact on several fronts:

It established the first example of a **dispersive equation of motion** in solid mechanics, decades before dispersion was understood in other contexts (optics, water waves). This provided a conceptual laboratory for dispersive wave theory that Stokes, Rayleigh and Lamb would develop in the 19th century.

It introduced the notion of **geometric section property** (moment of inertia) as a parameter independent of material, separating for the first time the material contribution (E) from the geometric contribution (I) to structural stiffness. This separation is the foundation of all modern structural engineering.

It motivated the search for improved models (Timoshenko, 1921) when Euler-Bernoulli predictions failed at high frequencies, driving the development of continuum mechanics in the 20th century.

The theory was also fundamental in developing **musical acoustics**: the explanation of why xylophone bars have inharmonic partials (unlike strings) comes directly from Euler-Bernoulli quadratic dispersion.

## Connection with modern physics

Quadratic dispersion of flexural waves reappears in multiple modern physics contexts:

In **nanotechnology**, carbon nanotubes and graphene nanobeams are modelled as nanoscale Euler-Bernoulli beams, and their flexural dispersion determines the thermal and mechanical properties of nanocomposites. The validity of the classical model at atomic scale is an active research topic.

In **acoustic metamaterials**, designers exploit flexural dispersion to create forbidden frequency bands (bandgaps) in periodic beam structures. By controlling the unit cell geometry, flexural wave propagation can be halted in specific frequency ranges.

In **seismology**, dispersion of Rayleigh-type surface waves in stratified layers has a mathematical structure similar to flexural dispersion, and inversion methods developed for beams are applied to subsurface velocity profile analysis.

The Euler-Bernoulli equation is also a special case of beam equations in active and piezoelectric media, where electromechanical coupling modifies effective stiffness and hence dispersion, with applications in MEMS sensors and actuators.
`;export{e as default};
