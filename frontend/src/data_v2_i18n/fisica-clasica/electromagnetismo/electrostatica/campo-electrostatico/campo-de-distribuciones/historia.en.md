## Historical problem

The unanswered question at the end of the eighteenth century was this: how can one compute the electric force exerted by an extended charged body — a rod, a plate, a sphere — on a test charge placed outside it? Coulomb's law (1785) gave the force between two point charges, but did not directly describe the interaction with macroscopic objects. Understanding the field of real distributions required extending that law to infinitely many elements simultaneously.

## Prior conceptual difficulty

The fundamental intellectual obstacle was the absence of an operational notion of **continuous charge density**. Electricity was conceived as a fluid inhabiting bodies, without any precise mathematical description of how it was distributed. Without the notion of [[lambda]], [[sigma]], or [[rho_vol]] as functions of space, it was impossible to formulate the integrand of [[contribucion_diferencial_de_campo]].

The second obstacle was the lack of confidence in the superposition principle for electric forces: it was not obvious to eighteenth-century physicists that the total force on a charge could be obtained simply by summing the individual contributions of each portion of the source body. This hypothesis, which today seems natural, required experimental and theoretical justification.

## What changed

Siméon Denis Poisson was the first to formulate, between 1812 and 1813, the complete mathematical theory of the potential of continuous distributions. He explicitly introduced the volume density [[rho_vol]] as a function of space, established the differential equation bearing his name — connecting the charge distribution to the electric potential — and demonstrated that integrating [[contribucion_diferencial_de_campo]] over the entire distribution yielded the resultant field [[campo_electrico_resultante]] by superposition. This advance transformed the computation of the electric field from a vague physical problem into a systematic mathematical procedure.

Carl Friedrich Gauss complemented this advance in 1835 with his flux law: the flux of [[campo_electrico_resultante]] through any closed surface is proportional to the total enclosed charge. This formulation is mathematically equivalent to direct integration of [[contribucion_diferencial_de_campo]], but exploits geometric symmetry far more efficiently for the infinite wire, infinite plane, and sphere.

## Impact on physics

The work of Poisson and Gauss transformed electrostatics from a phenomenological discipline into a mathematically rigorous branch of physics. The notion of charge density [[rho_vol]] became the bridge between macroscopic and microscopic physics: charge distribution problems could now be formulated as solvable partial differential equations.

James Clerk Maxwell unified this result in 1865: the first of his equations in differential form, connecting the divergence of [[campo_electrico_resultante]] with [[rho_vol]] divided by ε₀, is the local form of Gauss's law. This equation is not merely an electrostatics result: it is the starting point of all classical electromagnetic theory and electromagnetic optics.

## Connection with modern physics

Poisson's equation for continuous charge distributions remains the computational core of all modern electronic device simulators (transistors, diodes, integrated circuits). Finite element methods solve this equation numerically for arbitrary three-dimensional geometries with variable [[rho_vol]], enabling the design of nanometre-scale chips.

In plasma physics and astrophysics, continuous charge distributions modelled with [[rho_vol]] describe everything from the interior of a neutron star to the terrestrial ionosphere. The same [[contribucion_diferencial_de_campo]] integral that Poisson formulated for laboratory rods remains the foundation for field calculations in environments of hundreds of thousands of kelvin and densities of millions of coulombs per cubic metre.