const e=`## Conceptual errors

### Error 1: Confusing ultrasonic speed with transducer frequency

**Why it seems correct**

The student observes that equipment with transducers of different frequencies is used to detect different defects, and concludes that the transducer frequency is what changes [[v_us]] in the material. The analogy with light (where speed changes with wavelength in dispersive media) reinforces this incorrect generalisation.

**Why it is incorrect**

[[v_us]] is a property of the material (it depends on its elastic modulus and density) and not of the transducer. The transducer frequency determines the wavelength and thus the test resolution, but does not alter the propagation speed in non-dispersive metallic solids. For a given steel at constant temperature, [[v_us]] is identical regardless of whether the transducer operates at 1 MHz or 10 MHz.

**Detection signal**

The student tries to adjust [[v_us]] of the material by changing the frequency in the calculator form, or calculates two different depths for the same defect using the same [[t_vuelo]] but different transducer frequencies.

**Conceptual correction**

The transducer frequency selects the wavelength and resolution, not the speed. To change [[v_us]], the material or its temperature would have to change. Always look up [[v_us]] in tables for the specific material at the test temperature.

**Contrast mini-example**

If the same steel part is tested at 2 MHz and 10 MHz, both tests must produce exactly the same [[d_defecto]] for the same defect. If the results differ, the error lies in equipment calibration, not in [[v_us]].

---

### Error 2: Believing that higher [[R_ac]] always implies greater defect danger

**Why it seems correct**

A higher-amplitude echo in the A-scan seems to indicate a more severe defect. Since [[R_ac]] governs echo amplitude, the mental equivalence is established: more [[R_ac]] equals more danger.

**Why it is incorrect**

[[R_ac]] measures the acoustic contrast at the defect interface, not its mechanical danger. A very small air-filled crack produces [[R_ac]] close to 1 (maximum echo) but may be mechanically irrelevant. A hard material inclusion with [[Z_ac]] similar to steel may have [[R_ac]] close to zero (minimum echo) and still be dangerous due to its brittleness or the stress concentration it generates.

**Detection signal**

The student ranks defects by danger using only echo amplitude as the criterion, ignoring size, orientation, and defect nature.

**Conceptual correction**

Defect danger is assessed using fracture mechanics criteria (critical size, stress intensity factor) that require knowing the defect size, geometry, and position, not just its acoustic contrast. [[R_ac]] informs about the interface nature, not structural criticality.

**Contrast mini-example**

A spherical 0.1 mm diameter air-filled pore has [[R_ac]] close to 1 but is undetectable in practice because it is smaller than the wavelength. A flat 5 mm thick ceramic material inclusion may have [[R_ac]] of 0.3 and be structurally critical by delaminating under load.

## Model errors

### Error 3: Applying the time-of-flight formula without accounting for the round trip

**Why it seems correct**

The position formula with constant speed learned in kinematics states that position equals speed times time. The student applies this rule directly without remembering that the ultrasonic pulse travels the distance to the defect twice.

**Why it is incorrect**

The measured [[t_vuelo]] is the total time from emission to echo reception. In that time, the pulse travels the one-way path to the defect and the return path back to the transducer. The correct result for [[d_defecto]] requires dividing the product of [[v_us]] and [[t_vuelo]] by 2. Omitting the factor 2 produces a depth exactly double the real value.

**Detection signal**

The calculated [[d_defecto]] value exceeds the nominal part thickness, which is physically impossible. It is also detected when the back-wall echo produces a depth equal to twice the thickness measured by other means.

**Conceptual correction**

The pulse makes a round trip. The distance to the defect is half the total path travelled. The correct formula divides by 2 to obtain [[d_defecto]] from the total time.

**Contrast mini-example**

A 50 mm thick steel part with [[v_us]] of 5900 m/s has its back-wall echo at approximately 16.9 µs. Without the factor 2, the calculation gives a "depth" of 100 mm, which is twice the actual thickness and physically impossible for the back-wall echo.

## Mathematical errors

### Error 4: Unit inconsistency between [[t_vuelo]] and [[v_us]]

**Why it seems correct**

Ultrasound equipment displays [[t_vuelo]] in microseconds because those are the most readable values for the operator. The student takes that value directly and multiplies by [[v_us]] in m/s, forgetting that the units are not compatible without conversion.

**Why it is incorrect**

The [[d_defecto]] formula requires [[t_vuelo]] in seconds when [[v_us]] is in m/s to obtain [[d_defecto]] in metres. If [[t_vuelo]] is entered in microseconds without conversion, the result is one million times larger than the real value: a defect at 25 mm would appear to be at 25 km.

**Detection signal**

The [[d_defecto]] result is several orders of magnitude larger than the part thickness. For example, [[d_defecto]] of 25 000 m or 25 km for a steel part.

**Conceptual correction**

Before multiplying, convert [[t_vuelo]] from microseconds to seconds by dividing by one million, or adjust [[v_us]] to mm/µs (approximately 5.9 mm/µs for steel), maintaining dimensional consistency throughout the calculation.

**Contrast mini-example**

With [[v_us]] of 5900 m/s and [[t_vuelo]] of 8.5 µs without conversion, the product is 50 150, which in mixed units has no physical meaning. Converting correctly to 8.5×10⁻⁶ s, the product gives 0.050 m, and dividing by 2 yields [[d_defecto]] of 0.025 m (25 mm), the correct value.

## Interpretation errors

### Error 5: Interpreting the sign of [[R_ac]] as propagation direction

**Why it seems correct**

In physics, the sign of a quantity often indicates direction (positive to the right, negative to the left). The student applies this convention and concludes that negative [[R_ac]] means the echo travels in the opposite direction or that the wave is transmitted into the interior instead of being reflected.

**Why it is incorrect**

The sign of [[R_ac]] indicates whether the reflected wave is in phase or in antiphase with the incident wave, i.e., whether there is phase inversion in the reflection. A negative [[R_ac]] means the second medium is acoustically softer than the first (lower [[Z_ac]]), and the reflected wave has opposite-sign pressure. It does not indicate propagation direction: the reflected wave always travels back towards the transducer regardless of the sign of [[R_ac]].

**Detection signal**

The student writes that with negative [[R_ac]] the wave "does not return to the transducer" or that "energy is only transmitted and not reflected". The student may also calculate the reflected energy fraction using negative [[R_ac]] directly instead of its squared magnitude.

**Conceptual correction**

The squared magnitude of [[R_ac]] gives the fraction of reflected intensity; the magnitude of [[R_ac]] (always positive) gives the fraction of reflected amplitude. The sign only indicates echo polarity. The reflected wave always exists when [[R_ac]] is non-zero, regardless of its sign.

**Contrast mini-example**

At the water-air interface (the second medium being air, which is softer), [[R_ac]] is negative and close to -1. This does not imply there is no reflection; on the contrary, almost all energy is reflected. The observable difference is that the echo arrives with opposite-sign pressure to the original pulse, something the equipment can detect by inverting the peak polarity in the A-scan.

## Quick self-control rule

Before accepting any result in an ultrasonic test, verify these four conditions:

1. **[[d_defecto]] is less than the nominal part thickness**: if the result exceeds the known thickness, one of the above errors has been made (factor 2 omitted, mixed units, or incorrectly identified echo).
2. **[[v_us]] is consistent with the declared material**: the typical range for structural metals is 3000 m/s to 6500 m/s for longitudinal waves. A value outside this range requires immediate calibration verification.
3. **The magnitude of [[R_ac]] is between 0 and 1**: a value outside this range indicates an algebraic error in the [[Z_ac]] calculation for the two media or use of different units for each.
4. **Units are consistent**: [[t_vuelo]] in seconds, [[v_us]] in m/s and [[d_defecto]] in metres; or [[t_vuelo]] in µs, [[v_us]] in mm/µs and [[d_defecto]] in mm. Never mix.

If any of these four conditions fails, go back to the beginning before reporting the result.
`;export{e as default};
