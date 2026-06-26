const e=`## 1. Electromagnetic shielding in Faraday cages

The Faraday cage is one of the most direct applications of Gauss's law to conductors. In electrostatic equilibrium, the Gaussian surface chosen inside the conducting material encloses zero enclosed charge and therefore the flux [[Phi_E]] through it is zero. This implies that the field [[E_G]] inside the conductor is exactly zero, which in turn means that no external field penetrates the interior region of a closed conducting box.

This property is applied in the design of **high-precision measurement rooms**, where electronic instruments must be isolated from external electromagnetic interference. It also protects sensitive electronic equipment inside aircraft during electrical storms. The validity limit is that the cage must be conducting and closed: slots or openings allow the field to leak in proportion to their size compared to the wavelength of the disturbance.

Dominant variable: the area of openings in the cage relative to the wavelength of the electrical disturbance.
Validity limit: at high frequencies (waves with wavelength comparable to the cage gaps) the attenuation is incomplete; shielding is only perfect for static or quasi-static fields.

---

## 2. Design of parallel-plate capacitors

The parallel-plate capacitor is the most common electrostatic device in electronics. Gauss's law applied to a box-type Gaussian surface crossing one of the plates directly gives the field [[E_G]] between the plates as a function of the free surface charge density. The active part of the Gaussian box is the plate area [[A_G]] enclosed.

The field between the plates is uniform (with [[epsilon_0]] for vacuum or the dielectric permittivity for other media), enabling exact calculation of the capacitance. In **integrated circuit design**, conducting layers separated by ultra-thin oxides form nanoscale capacitors whose capacitance is estimated directly with the formula derived from Gauss's law. Miniaturisation implies that [[A_G]] is microscopic and [[epsilon_0]] is replaced by the permittivity of the oxide dielectric.

Dominant variable: the permittivity of the dielectric between the plates and the separation between them determine the field and capacitance.
Validity limit: the uniform-field formula is valid only when the plate separation is much smaller than the lateral dimensions; in miniaturised capacitors, fringing effects modify the field at the edges.

---

## 3. Electric field analysis in particle detectors (ionisation chambers)

Ionisation chambers and semiconductor detectors for high-energy particles use controlled electric fields to collect the charges produced by ionisation. Field design requires knowing [[E_G]] as a function of geometry and applied voltage. For cylindrical detectors (such as Geiger counters), Gauss's law with cylindrical symmetry gives the field as a function of radius, length, and charge per unit length of the central electrode.

The critical variable is field homogeneity: an excessively inhomogeneous field impairs charge collection and degrades the detector's energy resolution. Engineers adjust [[A_G]] (detector geometry) and charge distribution to obtain an optimal field profile. The limit is that the electrostatic model assumes fixed charges; during operation, ionisation produces mobile charge pairs that modify the local field.

Dominant variable: the detector geometry (inner and outer radii for cylindrical detectors) and charge per unit length of the electrode.
Validity limit: when the density of ionised pairs is high (intense radioactive sources), space charge accumulation modifies the field and the static model is no longer accurate.

---

## 4. Electric field of high-voltage cables and safety distances

High-voltage cables in electrical transmission lines produce electric fields that must be kept below dielectric breakdown thresholds for air and maximum human exposure levels. Gauss's law with cylindrical symmetry allows calculation of [[E_G]] as a function of distance from the cable, charge per unit length [[Q_enc]]/L, and [[epsilon_0]].

At a distance r from the cable axis, the field falls inversely with r (not with r² as in spherical geometry). This means the field from a long cable remains significant at considerable distances from the conductor. Electrical safety regulations specify minimum cable clearance distances as a function of voltage level, distances calculated directly from the cylindrical field expression derived from Gauss's law.

Dominant variable: the linear charge density of the cable (proportional to voltage and capacitance per unit length) and the observation distance.
Validity limit: the infinite-wire approximation is valid when the observation distance is much smaller than the cable length; near the cable ends, the geometry departs from the ideal cylindrical model.

---

## 5. Charge distribution in plasma balls and confinement in nuclear fusion

In magnetic confinement fusion reactors, the plasma contains separated electric charges (ions and electrons) whose spatial distribution determines the internal electric field. Gauss's law relates the net space charge ([[Q_enc]] of ions minus [[Q_enc]] of electrons) to the electric field inside the plasma.

In the quasi-neutral plasma of a tokamak, net [[Q_enc]] is nearly zero and the internal electric field is very small. Deviations from neutrality (space charge instabilities) generate electric fields that Gauss's law allows to be estimated quantitatively. These fields are the diagnostic signal for instabilities that can compromise confinement. Monitoring [[Phi_E]] and [[E_G]] internally is one of the continuously tracked variables in reactor control systems.

Dominant variable: the net space charge density (difference between ion and electron densities) in the considered volume.
Validity limit: plasma is a collective fluid and the simple electrostatic description is valid only in the quasi-static limit; for fast perturbations the full plasma electrodynamics is required.
`;export{e as default};
