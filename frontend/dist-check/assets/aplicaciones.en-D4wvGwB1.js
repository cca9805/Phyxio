const e=`## 1. Industrial electrostatic precipitators

Electrostatic precipitators are devices that remove solid or liquid particles from gas streams before they are emitted to the atmosphere. The operating principle is straightforward: suspended particles are charged by a corona discharge, and once charged the Coulomb force [[F_C]] between the particle and the opposite electrode drags them towards the collection plate, where they deposit. This separation works because the Coulomb force on microscopic charged particles is enormously greater than their weight, enabling efficient capture even at high gas velocity.

The efficiency of the process depends on the particle acquiring sufficient charge and on the distance to the electrode being appropriate. Coulomb's law quantifies both parameters: a larger charge [[q2]] on the particle increases [[F_C]] linearly, but halving the distance [[r12]] between particle and electrode quadruples the force. This is why precipitators are designed with collection plates close enough that the force in the capture zone is dominant.

Dominant variable: the distance between the charged particles and the collection electrode, because [[F_C]] varies with the inverse square of that separation and is the magnitude controlling capture efficiency.
Validity limit: Coulomb's two-point-charge model ceases to be exact when particles are large enough that their extent is comparable to the distance to the electrode, or when there is charge redistribution on the conducting electrode surface.

## 2. Atomic force microscopy (AFM)

The atomic force microscope measures nanoscale interactions between a metallic tip and the sample being explored. In non-contact mode, one of the dominant contributions to the measured force is the Coulomb interaction between the surface atoms of the tip and those of the sample, especially when the surface has domains with differential charge or when the tip is functionalised.

In this context, the Coulomb force [[F_C]] between the effective charge of the tip and the local charge of the sample determines the cantilever deflection. Coulomb's law predicts that [[F_C]] varies inversely with the square of the tip-sample distance [[r12]], enabling sub-nanometre resolution imaging: changes of tenths of a nanometre in [[r12]] produce measurable variations in [[F_C]].

Dominant variable: the tip-sample separation [[r12]], since [[F_C]] is extremely sensitive to small distance changes at the nanoscale and is the control parameter in the instrument feedback loop.
Validity limit: below 0.3 nm, Pauli repulsion and van der Waals interactions dominate, not Coulomb's law. Moreover, at those distances the classical point charge model is not applicable and a quantum treatment is required.

## 3. Ion trap design in mass spectrometry

Ion traps — such as Penning or Paul traps — confine charged ions in space using electric and magnetic fields. The stable trajectory of an ion inside the trap depends on the balance between the restoring electric force of the electrodes and the Coulomb interactions between the confined ions themselves. When several ions are present, the Coulomb force between neighbouring ions can perturb individual trajectories and degrade mass resolution.

Coulomb's law allows estimating the perturbation that an ion with charge [[q1]] exerts on a neighbour with charge [[q2]] separated by a distance [[r12]] inside the trap. For singly charged ions at micrometre distances, [[F_C]] can be of the order of femtonewtons, but given that the ionic mass is of the order of daltons, this produces appreciable accelerations that the instrument operator must compensate.

Dominant variable: the distance between confined ions [[r12]], which controls the mutual perturbation between trajectories; increasing the dilution of the ion beam (larger average [[r12]]) drastically reduces [[F_C]] and improves spectral resolution.
Validity limit: the classical Coulomb model does not distinguish the quantum states of the ions. For ions in very high-precision traps (trapped ion clocks), quantum and relativistic corrections are relevant even though the dominant force remains Coulombian.

## 4. Structural stability of ionic crystals

In an ionic crystal such as sodium chloride, the cohesion of the solid comes from the sum of millions of Coulomb interactions between oppositely charged ions (Na⁺ and Cl⁻) and the repulsion between like-sign ions. The Madelung lattice energy is precisely the sum of all these Coulombian contributions according to Coulomb's law. The fact that ionic solids are hard but brittle is a direct consequence of the geometry of these interactions.

Coulomb's law predicts that the attraction energy between opposite ions is proportional to the product of their charges and decays with [[r12]]. At the crystal's equilibrium position, the interionic distance [[r12]] results from the balance between Coulomb attraction and short-range nucleus-nucleus repulsion. Changing the pressure is equivalent to changing [[r12]], which modifies [[F_C]] in an inverse-square manner and is reflected in the bulk modulus of the crystal.

Dominant variable: the interionic distance [[r12]], which determines both cohesion (attraction between opposite ions [[F_C]]) and compressive strength; the [[F_C]] vs [[r12]] curve has a minimum at the equilibrium lattice distance.
Validity limit: the classical pairwise Coulomb law between ions is valid for distances larger than the ionic de Broglie wavelength. At extreme pressures that bring ions to sub-nanometre separations, quantum exchange and correlation effects become comparable to Coulomb.

## 5. Beam acceleration and focusing in particle accelerators

In linear and circular particle accelerators, charged particles — protons, heavy ions, electrons — form bunches that propagate along the vacuum tube. Within each bunch, particles repel each other through the Coulomb force between like charges, which tends to disperse the beam. This effect — called space charge — is the main limitation on beam intensity in low- and medium-energy accelerators.

The magnitude of the repulsion between two beam particles depends on [[q1]], [[q2]] (equal for identical particles) and on [[r12]] between them. Coulomb's law establishes that reducing the particle density (increasing average [[r12]]) decreases the disruptive force quadratically. Accelerator engineers design the magnetic optics of the beam — quadrupoles and sextupoles — to compensate the divergence induced by [[F_C]] and keep the beam focused.

Dominant variable: the average inter-particle separation [[r12]], which determines the intensity of the intra-beam Coulomb repulsion; beam optimisation consists of finding the trade-off between particle density (needed for high luminosity) and sufficient separation (needed to reduce [[F_C]] and divergence).
Validity limit: at relativistic energies, the Coulomb force is modified by Lorentz transformations: the transverse component grows with the Lorentz factor while the longitudinal component decreases. The classical non-relativistic Coulomb model is valid only for particles with velocities below 10% of the speed of light.
`;export{e as default};
