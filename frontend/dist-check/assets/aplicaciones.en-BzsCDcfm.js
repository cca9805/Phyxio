const e=`## 1. Ion trap design in mass spectrometers

In an ion trap mass spectrometer (Paul or Penning type), several electrodes create electric fields that superpose to confine ions in a region of space. Each electrode acts as an independent field source, and the total confining field results from the vector superposition of all contributions. Trap design consists of adjusting the geometry and charge of each electrode so that [[E_total]] has the quadrupolar or harmonic shape required for orbital stability of the ions.

Without the superposition principle, it would not be possible to compute the confining field by adding each electrode's field separately. The instrument designer numerically computes [[E_total]] at each relevant point of the trap by summing each electrode's contribution, and verifies that ions with the desired mass-to-charge ratio remain stable.

Dominant variable: distribution of [[q_i]] on the electrodes and geometry of the distances [[r_i]] to the trap centre.
Validity limit: the superposition model requires that the medium inside the trap be linear (vacuum or gas at very low pressure) and that the charges of the confined ions do not significantly alter the electrode field.

## 2. Field computation in electrostatic printing rollers

In electrostatic printing and image transfer rollers, multiple toner charges accumulate at discrete positions on the photocopier drum. The field [[E_total]] at the receptor surface is the superposition of the contributions from each charged toner particle. Transfer quality depends on [[E_total]] exceeding the adhesion threshold at each point of the image while remaining below the disruptive discharge threshold.

Process engineers compute [[E_total]] by summing the contributions of the [[N_cargas]] particles present in each image line, estimating when the charge density is sufficient to transfer toner but not so high as to generate electric arcs. The inverse-square distance dependence of each contribution on [[r_i]] means the particles closest to the receptor surface dominate the superposition sum.

Dominant variable: number [[N_cargas]] of toner particles and their distance [[r_i]] to the receptor surface.
Validity limit: the model fails when toner particles are so close together that the field between them induces significant mutual polarisation, violating the independent-contribution hypothesis.

## 3. Locating zero-field points in lightning rod systems

The design of lightning protection installations requires knowledge of the points where [[E_total]] reaches its maximum value in the atmosphere near the building, since those points are candidates for upward leader inception. In an installation with several lightning rods, the field near each tip is the superposition of all rod contributions plus the charged cloud. Computing [[E_total]] in the region between tips reveals whether a zero-field point exists (where contributions cancel) or whether one tip dominates the others.

A zero [[F_total]] point between two lightning rods would indicate a zone of reduced protection: a descending leader arriving there would not be efficiently captured by either tip. Superposition analysis directly reveals those weak zones and allows optimising the number [[N_cargas]] and positions of the tips to eliminate them.

Dominant variable: relative position of the tips and the value of the induced charges on each one [[q_i]].
Validity limit: the point charge model is an approximation; in practice the tips are extended conductors and the field near them requires finite element methods for high precision.

## 4. Force analysis on dust grains in electrostatic cleaners

Industrial electrostatic cleaners use several plates or wires at different potentials to create a non-uniform field that directs charged dust particles towards the collectors. Each active element of the cleaner acts as a source charge, and [[F_total]] on a dust grain is the superposition of forces from all plates and wires present in the cleaning channel.

Collection efficiency depends on the component of [[F_total]] perpendicular to the airflow being sufficient to deflect the particle towards the collector before the flow carries it to the other end of the channel. Increasing [[N_cargas]] (adding more charging stages) improves capture probability but also complicates maintenance. Superposition analysis allows optimising how many stages are needed for 99 % efficiency at minimum installation cost.

Dominant variable: component of [[F_total]] perpendicular to the flow, controlled by the geometry of the distances [[r_i]] from each electrode to the central channel.
Validity limit: the model fails for large conducting particles in which the field induced on the particle surface is not negligible compared to the applied field.

## 5. Madelung potential modelling in ionic crystals

In an ionic crystal such as sodium chloride, each ion is surrounded by [[N_cargas]] ions of alternating sign that create a total field [[E_total]] at the position of each lattice ion. The cohesive energy of the crystal results from summing the interaction energy of each ion pair, which is equivalent to evaluating the superposition sum potential at each lattice point.

The Madelung constant, which characterises the energetic stability of a crystal structure, is essentially the superposition sum of the Coulomb potential of all lattice ions on a reference ion. Its computation requires summing contributions from ions at different distances [[r_i]] with alternating signs [[q_i]], which makes the sum converge slowly. Without the superposition principle and convergence acceleration methods (such as the Ewald transform), this computation would be impractical.

Dominant variable: ratio of distances [[r_i]] to nearest neighbours and charges [[q_i]] of the ions, which sets the magnitude of the cohesive energy.
Validity limit: the point ion model and direct application of Coulomb superposition require quantum corrections to correctly describe short-range repulsion when ions approach closely enough for their electron clouds to overlap.
`;export{e as default};
