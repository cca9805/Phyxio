const e=`## 1. Industrial electrostatic precipitator

Electrostatic precipitators are used in thermal power plants, cement factories and smelters to remove suspended particles from exhaust gas before releasing it to the atmosphere. The operating principle is straightforward: a corona electrode ionises the gas and charges the dust particles, which are then attracted by the Coulomb force towards oppositely charged collector plates.

The dominant variable controlling capture efficiency is [[r]], the distance between the particle and the collector electrode. Since [[F_C]] grows quadratically as [[r]] decreases, the design converges the geometry so that closer particles experience much larger forces and are captured in very short times. The charge [[q2]] imparted to each particle is the other key design parameter: greater charge means greater capture force even at large distances.

Dominant variable: the distance to the collecting electrode [[r]] controls the force quadratically; halving [[r]] quadruples [[F_C]] and accelerates capture.
Validity limit: the point-charge model fails when the particles are comparable in size to the electrode distance (particles larger than 1 mm or very close to the plate).

## 2. Ionic bonding in salt crystals

In a sodium chloride (NaCl) crystal, sodium ions (Na⁺) and chloride ions (Cl⁻) are arranged in an alternating three-dimensional lattice. The cohesive force of the crystal originates mainly from the attractive Coulomb electric force between pairs of oppositely charged ions. This attraction counterbalances the quantum short-range repulsion between the nuclei when the ions come too close.

The lattice energy of the crystal is obtained by summing the Coulomb contributions of every ionic pair through the Madelung constant, which encapsulates the lattice geometry. The stability of the ionic bond is directly proportional to the product of the ionic charges and inversely proportional to the equilibrium lattice distance.

Dominant variable: the charge of each ion [[q1]] and [[q2]] (always ±e or ±2e in simple salts) determines the lattice energy; higher ionic charge means a stronger bond and a higher melting point.
Validity limit: the point Coulomb model is only a first approximation; at interionic distances of order 10⁻¹⁰ m, quantum Pauli exclusion repulsion effects intervene that the classical model does not capture.

## 3. Electroscope and charge measurement in the laboratory

The gold-leaf electroscope is one of the earliest electrical measuring instruments. Two thin gold leaves hang from a conducting support. When the instrument is charged, both leaves acquire the same charge [[q1]] ≈ [[q2]] and repel each other via the Coulomb force, forming an opening angle proportional to the deposited charge.

The leaf opening angle allows estimation of the total charge on the system: greater opening means greater repulsive [[F_C]] and greater deposited charge. Although the system is not exactly two point charges (the leaves are extended distributions), Coulomb's law provides a correct estimate in the small-angle range where the leaf geometry remains approximately constant.

Dominant variable: the total deposited charge [[q1]] ≈ [[q2]] controls the opening angle via [[F_C]]; doubling the charge quadruples the repulsive force at fixed distance.
Validity limit: for opening angles above 30°, the leaf geometry changes significantly and the relationship between angle and charge ceases to be approximately linear.

## 4. Electrostatic separation of minerals

In the mining industry, minerals with different electrical conductivity are separated using roller electrostatic separators. Mineral particles are deposited on a charged roller; conducting minerals discharge quickly upon contact and are flung off by centrifugal force, while non-conducting minerals retain their charge [[q2]] and are attracted back to the roller by [[F_C]].

The critical design parameter is the intensity of the roller's electric field, which determines [[F_C]] on each particle. A stronger field means greater selectivity: particles with small conductivity differences can be separated if the field is sufficiently intense. The distance [[r]] between the particle and the roller surface also matters: when the particle adheres to the roller, [[r]] is at a minimum and [[F_C]] is at a maximum.

Dominant variable: the retained charge [[q2]] on the non-conducting particle controls its adhesion to the roller; minerals with higher resistivity retain more charge and experience greater retaining [[F_C]].
Validity limit: the model fails when mineral humidity reduces resistivity and particles discharge faster than expected, decreasing separation selectivity.

## 5. Electrostatic toner in laser printers

In a laser printer, the photoconductor drum is uniformly charged with negative charge. A laser selectively illuminates the regions corresponding to text or image, discharging those areas. The toner (positively charged pigment powder) is attracted by the Coulomb force towards the discharged regions of the drum (which retain relative negative charge with respect to the toner). The toner is then transferred to paper by another electric field and fixed by heat.

Print quality depends directly on [[F_C]] between the toner [[q2]] and the residual drum charge [[q1]] being large enough to retain the toner in the correct positions during transport, but not so large that it cannot be transferred to the paper. The balance between these two forces defines the optimal toner charge range and the transfer voltage.

Dominant variable: the toner charge [[q2]] controls both the attraction to the drum and the transfer to the paper; toner with excessive charge produces incomplete transfer and smearing.
Validity limit: at very high temperatures, the dielectric properties of the drum change and the fixed surface charge model no longer correctly describes the distribution of [[q1]] on the drum.
`;export{e as default};
