# Applications

## 1. Electrostatic particle accelerator (Van de Graaff)

A Van de Graaff generator accumulates charges on a spherical electrode until reaching potentials of several million volts. Charged particles (protons, light ions) are injected into an acceleration tube where the field between the high-voltage electrode and the ground electrode drives them forward. All the kinetic energy the particle acquires comes from the conversion of its initial electric potential energy: the particle starts in the high-potential region and arrives at the low-potential end with kinetic energy proportional to the potential difference multiplied by its charge.

The critical variable controlling the output energy is [[potencial_electrico_en_el_punto_a]] at the high-voltage electrode. The accelerator designer does not adjust the instantaneous force on the particle (which varies along the tube) but the potential difference between the electrodes: that difference, multiplied by the particle charge, directly determines the final kinetic energy. The [[energia_potencial_electrica]] model allows calculating particle speeds without knowing the exact field geometry inside the tube.

Dominant variable: the potential difference between the electrodes, which determines the total kinetic energy delivered to the particle.
Validity limit: the model is valid while the particle's final speed is below 10 % of the speed of light; above this limit, a relativistic correction is required to calculate the exact speed.

## 2. High-voltage capacitor in a cardiac defibrillator

A cardiac defibrillator stores electrical energy in a capacitor charged to several thousand volts and discharged in milliseconds through the patient's chest. The energy available for the therapeutic discharge is entirely electric potential energy stored in the field between the capacitor plates. The clinician configuring the defibrillator selects the discharge energy (typically 100 to 360 joules), which determines the potential to which the capacitor must be charged.

The relationship between stored energy and capacitor potential depends on its capacitance, but the energy principle is invariant: all the work done by the power supply charging the capacitor is stored as [[energia_potencial_electrica]] and fully released into the load (the patient) during discharge. Interpreting [[energia_potencial_electrica]] allows estimating whether the stored energy is sufficient to produce the therapeutic current for the required time, without needing to know the exact shape of the discharge waveform.

Dominant variable: the potential energy stored in the capacitor, which determines the intensity and duration of the electrical pulse applied to the patient.
Validity limit: the electrostatic model is valid for calculating stored energy; the discharge dynamics (involving body resistance and time evolution) require RC circuit models.

## 3. Isotope separation by potential energy difference

In mass spectrometry, ions of different masses but the same charge are accelerated through the same potential difference. Since the potential energy converted to kinetic energy is identical for all of them (same charge, same field), heavier ions acquire lower speed and lighter ones acquire higher speed. This velocity difference allows spatially separating isotopes of the same element in the downstream magnetic field, where the radius of curvature depends on velocity.

The principle that predicts how much the velocities of two isotopes differ is directly energy conservation: the potential energy [[energia_potencial_electrica]] released by the field is the same for both, but the resulting kinetic energy is distributed differently according to each ion's mass. The relative velocity difference between two very similar isotopes (such as uranium-235 and uranium-238) is small but sufficient for designing cascade separation systems.

Dominant variable: the ion charge multiplied by the acceleration potential difference, which determines the identical kinetic energy for all ions of the same charge regardless of their mass.
Validity limit: the model is valid for singly charged ions that can be treated as point-like; the presence of multiple charge states or ion-ion collisions invalidates the prediction of individual velocities.

## 4. Electrostatics of the cell membrane

The cell membrane acts as a dielectric barrier about 7 nm thick that separates the cell interior (typically −70 mV in resting nerve cells) from the exterior (reference 0 mV). Ions crossing the membrane through protein channels change their [[energia_potencial_electrica]] as they traverse this potential difference. A sodium ion (charge +e) entering the cell interior releases potential energy because it moves from higher to lower potential: that energy drives the propagation of the nerve impulse.

This mechanism converts the membrane potential difference into energy available for physiological work: the electrochemical gradient (potential difference plus concentration difference) is the true energy source for ion transport. Estimating [[energia_potencial_electrica]] per ion crossing the membrane quantifies how much chemical energy (ATP) is needed to restore the gradient: the sodium-potassium pump consumes one ATP molecule to move three sodium ions outward and two potassium ions inward, and that work goes against the electrical gradient.

Dominant variable: the transmembrane potential difference, which determines the electric potential energy of each ion as it crosses the membrane and hence the electromotive force of the nerve impulse.
Validity limit: the simple electrostatic model is valid as an estimate; the actual dynamics of channel opening and closing, ionic concentrations, and screening effects in aqueous solution require more detailed biophysical models.

## 5. Binding energy in ionic crystals

An ionic crystal such as sodium chloride consists of alternating layers of sodium ions (charge +e) and chloride ions (charge −e) arranged in a cubic lattice. The total cohesive energy of the crystal—the energy needed to separate all ions to infinity—is the sum of the Coulomb interaction energies between all pairs. This sum, involving infinitely many pairs at different distances and with different signs, converges to a finite value proportional to the inverse of the nearest-neighbor separation.

The result is expressed through the Madelung constant, which encapsulates the specific geometry of the crystal lattice. For the NaCl crystal, the cohesive energy is approximately −787 kJ per mole. This figure can be order-of-magnitude estimated using the [[energia_potencial_electrica]] formula for a single adjacent ion pair and multiplying by the number of pairs in the mole, yielding results of the same order. The cohesive energy explains why ionic crystals have high melting points and are mechanically hard: considerable energy is needed to break the network of Coulomb interactions holding the structure together.

Dominant variable: the nearest-neighbor distance in the crystal lattice, which determines the scale of the interaction energy between adjacent ions and, through the Madelung sum, the total cohesive energy.
Validity limit: the point-charge model with only Coulomb interaction is a good approximation for the electrostatic part of the binding energy; the actual total energy also includes short-range repulsive terms (nuclear repulsion and Pauli exclusion) that the pure Coulomb model ignores.