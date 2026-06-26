const e=`## 1. Defect detection by guided waves in rails

**Context:** Guided-wave ultrasonic inspection systems excite flexural waves in train rails to detect internal cracks without stopping traffic. Flexural dispersion is exploited to separate defect signals from joint reflections.

**Dominant hypothesis:** The rail is assumed to behave as an Euler-Bernoulli beam at excitation frequencies (20–100 kHz), although for UIC-60 rails this assumption is marginal at the upper end of the range.

Dominant variable: group velocity [[v_grupo_flex]], which determines the time window in which to search for defect echoes.

**Physical interpretation:** A transducer emits a pulse at controlled frequency; the defect echo returns at group velocity. Knowing the dispersion, the system computes distance to the defect by measuring time delay. Flexural dispersion causes echoes to broaden, reducing spatial resolution at large distances.

Validity limit: for frequencies above 80 kHz in rails with 16 mm web thickness, the wavelength becomes comparable to thickness and the Timoshenko model must be used to correctly compute group velocity.

---

## 2. Acoustic design of bar percussion instruments

**Context:** Metallophones, marimbas and vibraphones use metal or wooden bars whose flexural resonance frequencies determine the musical pitch. The cross-section shape is modified (thinning the centre) to tune the upper harmonics into consonant ratios.

**Dominant hypothesis:** Each bar is modelled as a free-free beam at both ends. The fundamental mode nodes are at 22.4 % from each end, where supports are placed to minimise damping.

Dominant variable: the second moment of area [[I_seccion]] of the section, which when varied along the bar (arched profile) allows independent control of the fundamental frequency and upper partials.

**Physical interpretation:** The ratio between successive mode frequencies in a uniform bar is not harmonic (partials are not integer multiples of the fundamental). By carving the bar to reduce [[I_seccion]] at the centre, the builder lowers the second partial frequency until it coincides with a consonant ratio (e.g. 4:1 relative to the fundamental).

Validity limit: for the longest marimba blades (low notes), the bar may be short enough that only 1–2 flexural wavelengths fit. In that case boundary conditions completely dominate and phase velocity loses its meaning as a propagation property.

---

## 3. Vibration isolation in building structures

**Context:** In buildings with heavy machinery (hospitals with MRI machines, concert halls above garages), flexural waves in floor slabs and beams transmit unwanted vibration. Structural engineers design discontinuities (cuts, absorbing materials) to interrupt propagation.

**Dominant hypothesis:** The floor slab is modelled as a set of parallel beams where the flexural wave propagates with Euler-Bernoulli dispersion in the 50–500 Hz range relevant to human perception.

Dominant variable: flexural wavelength [[lambda_flex]], which determines the minimum effective spacing between isolation discontinuities.

**Physical interpretation:** For a discontinuity to be effective as a barrier, its size must be comparable to [[lambda_flex]] at the frequency of interest. At 100 Hz in a typical reinforced concrete slab, [[lambda_flex]] is of the order of 2–4 m. This explains why isolation cuts must extend across the full slab width and why local patches are ineffective at low frequency.

Validity limit: at frequencies below 30 Hz, flexural wavelength exceeds slab dimensions and the free-propagation model is no longer adequate; the response is better described in terms of the complete slab eigenmodes.

---

## 4. Vibration analysis of rotating machinery shafts

**Context:** Turbine, motor and compressor shafts are subjected to loads that excite bending waves. The critical speed of a shaft (rotational speed at which it enters resonance) depends directly on flexural dispersion and on boundary conditions at the bearings.

**Dominant hypothesis:** The shaft is modelled as an Euler-Bernoulli beam with constant circular section and simple supports at the bearings. Critical speeds correspond to the shaft's flexural eigenfrequencies.

Dominant variable: the radius of gyration [[r_giro]] of the circular section (equal to r/2 for a solid shaft), which together with the span between supports determines critical speeds.

**Physical interpretation:** At critical speed, the rotation frequency coincides with the frequency of the first flexural mode. The resulting bending wave grows in amplitude until damping limits it or failure occurs. Dispersion implies that higher-order critical speeds are not exact multiples of the first.

Validity limit: for thick shafts (length/diameter less than 8), shear deformation modifies critical speeds by up to 10 % and the Timoshenko model is needed for design predictions.

---

## 5. Seismic wave propagation in foundation piles

**Context:** Pile integrity tests use an impact on the pile head and analyse reflected waves to detect defects (necking, voids, discontinuities). Flexural waves coexist with longitudinal ones and their correct identification is essential for diagnosis.

**Dominant hypothesis:** The pile is modelled as a beam embedded in the ground with a circular section. The flexural component is excited when the blow is not perfectly centred, producing parasitic signals that may be confused with defects.

Dominant variable: phase velocity [[v_fase_flex]] at the dominant frequency of impact (typically 500–2000 Hz), which allows temporal separation of flexural reflections from longitudinal ones.

**Physical interpretation:** Since the flexural wave travels much slower than the longitudinal one at the same frequency, flexural reflections arrive later. If dispersion is not known, the engineer may interpret a delayed flexural echo as a longitudinal reflection from a deep defect that does not exist. Correct identification of wave type requires knowing the pile's dispersion relation.

Validity limit: for large-diameter piles (greater than 1 m) at frequencies above 1 kHz, the flexural wavelength may be comparable to the diameter and simple beam modelling is insufficient. Finite element methods or cylindrical waveguide analysis are required.
`;export{e as default};
