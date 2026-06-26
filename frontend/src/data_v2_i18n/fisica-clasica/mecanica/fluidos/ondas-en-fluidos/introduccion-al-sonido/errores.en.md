# Introduction to Sound - Common Errors

## Conceptual Errors

### Error - Sound transports matter
- **Why it seems correct**: Because we feel the "wind" when we are near a powerful speaker or an explosion.
- **Why it is incorrect**: The net displacement of the molecules is zero. What moves is the state of compression, not the mass.
- **Detection signal**: If sound transported matter, talking to someone across the room would create a constant draft.
- **Conceptual correction**: Sound is transport of energy and momentum, not mass. Molecules oscillate but do not travel.
- **Mini-example**: Imagine a row of dominoes. The fall travels from one end to the other, but each piece remains in its original spot.

### Error - Sound propagates in a vacuum
- **Why it seems correct**: Due to representations in science fiction movies where space explosions roar loudly.
- **Why it is incorrect**: Sound is a mechanical wave. Without particles ([[rho]] = 0), there is no collision and the disturbance stops at the source.
- **Detection signal**: Absolute silence in real vacuum chamber recordings or in outer space.
- **Conceptual correction**: The absence of a material medium cancels the propagation vehicle of mechanical energy.
- **Mini-example**: A bell in a vacuum jar. When the air is extracted, the sound disappears even if the hammer continues to strike.

### Error - Confusing intensity with pitch
- **Why it seems correct**: Because both terms are used informally as "turning up the sound".
- **Why it is incorrect**: Intensity depends on amplitude (energy), while pitch depends on frequency [[f]] (speed).
- **Detection signal**: A high-pitched scream and a high-pitched whisper have the same pitch but different intensity.
- **Conceptual correction**: Pitch is a qualitative scale of frequency; intensity is a quantitative measure of power per area.
- **Mini-example**: A piano note played softly vs. the same note struck hard. The intensity changes, not the note.

## Model Errors

### Error - Ignoring thermal dependence in gases
- **Why it seems correct**: Because we usually use the standard value of 340 m/s for all air problems.
- **Why it is incorrect**: The speed of sound in a gas depends on the root of the absolute temperature T. In a desert or in the Arctic, the error can be 10%.
- **Detection signal**: Discrepancies in echo distance calculation in extreme weather conditions.
- **Conceptual correction**: In gases, thermal agitation dictates how quickly molecules find each other to collide.
- **Mini-example**: At 0^ degreesC, [[c]] ~ 331 m/s; at 40^ degreesC, [[c]] ~ 355 m/s. A significant difference.

### Error - Using the ideal gas model for liquids
- **Why it seems correct**: Due to the tendency to want to use temperature T for all sound speed calculations.
- **Why it is incorrect**: Liquids do not follow the ideal gas law. Their speed depends on the bulk modulus [[B]] and density [[rho]].
- **Detection signal**: Absurdly low results if trying to treat water as heavy air.
- **Conceptual correction**: Use the formula

{{f:sonido_compresible}}

for liquid or solid media.
- **Mini-example**: Water is 800 times denser than air, but sound travels faster in it because its stiffness is immensely greater.

## Mathematical Errors

### Error - Frequency unit conversion error
- **Why it seems correct**: Because Megahertz (MHz) and Hertz (Hz) sound similar in the problem statement.
- **Why it is incorrect**: An error of a factor of 1,000,000. In wave physics, scales matter.
- **Detection signal**: Wavelengths [[lambda]] in kilometers when they should be millimeters (in ultrasound).
- **Conceptual correction**: Always work in the base SI unit (hertz is inverse seconds).
- **Mini-example**: A 2 MHz pulse is 2,000,000 Hz. If you use 2, the result will be way out of scale.

### Error - Mishandling logarithmic scales in decibels
- **Why it seems correct**: Due to the inertia of adding scalar magnitudes linearly.
- **Why it is incorrect**: Decibels are logarithmic. Adding two 60 dB sources does not give 120 dB (which would be a deadly roar), but 63 dB.
- **Detection signal**: Decibel values that exceed the human pain scale for no apparent reason.
- **Conceptual correction**: Add intensities (W/m^2) and then convert back to dB.
- **Mini-example**: Doubling sound power only adds 3 dB to the total level.

## Interpretation Errors

### Error - Confusing sound speed with particle speed
- **Why it seems correct**: Because both magnitudes are measured in m/s.
- **Why it is incorrect**: The speed [[c]] is the speed of the signal; particle speed is the speed of molecular back-and-forth.
- **Detection signal**: Particle speed values that exceed sound speed, which would imply supersonic molecular flights.
- **Conceptual correction**: [[c]] is a property of the medium; v_particle depends on sound intensity.
- **Mini-example**: Sound travels at 340 m/s, but the air molecule only moves at a few millimeters per second.

### Error - Interpreting wavelength as a vertical distance
- **Why it seems correct**: Due to the visual analogy with sea waves that rise and fall.
- **Why it is incorrect**: In longitudinal waves, [[lambda]] is the horizontal distance between compression centers.
- **Detection signal**: Drawing wavelength as the height of a crest.
- **Conceptual correction**: [[lambda]] is the spatial period of the disturbance in the direction of travel.
- **Mini-example**: In a stretched spring, [[lambda]] is the distance between two zones where the coils are closer together.

## Quick self-control rule
1.  **Gas medium**: Speed should be around 340 m/s.
2.  **Liquid medium**: Speed should be around 1500 m/s.
3.  **Relationship**: Always verify that the relation between [[c]], [[f]] and [[lambda]].
4.  **Audibility**: Frequencies outside the 20-20,000 Hz range are ultrasound or infrasound.