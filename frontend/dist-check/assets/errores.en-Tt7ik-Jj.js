const e=`# Introduction to Sound - Common Errors\r
\r
## Conceptual Errors\r
\r
### Error - Sound transports matter\r
- **Why it seems correct**: Because we feel the "wind" when we are near a powerful speaker or an explosion.\r
- **Why it is incorrect**: The net displacement of the molecules is zero. What moves is the state of compression, not the mass.\r
- **Detection signal**: If sound transported matter, talking to someone across the room would create a constant draft.\r
- **Conceptual correction**: Sound is transport of energy and momentum, not mass. Molecules oscillate but do not travel.\r
- **Mini-example**: Imagine a row of dominoes. The fall travels from one end to the other, but each piece remains in its original spot.\r
\r
### Error - Sound propagates in a vacuum\r
- **Why it seems correct**: Due to representations in science fiction movies where space explosions roar loudly.\r
- **Why it is incorrect**: Sound is a mechanical wave. Without particles ([[rho]] = 0), there is no collision and the disturbance stops at the source.\r
- **Detection signal**: Absolute silence in real vacuum chamber recordings or in outer space.\r
- **Conceptual correction**: The absence of a material medium cancels the propagation vehicle of mechanical energy.\r
- **Mini-example**: A bell in a vacuum jar. When the air is extracted, the sound disappears even if the hammer continues to strike.\r
\r
### Error - Confusing intensity with pitch\r
- **Why it seems correct**: Because both terms are used informally as "turning up the sound".\r
- **Why it is incorrect**: Intensity depends on amplitude (energy), while pitch depends on frequency [[f]] (speed).\r
- **Detection signal**: A high-pitched scream and a high-pitched whisper have the same pitch but different intensity.\r
- **Conceptual correction**: Pitch is a qualitative scale of frequency; intensity is a quantitative measure of power per area.\r
- **Mini-example**: A piano note played softly vs. the same note struck hard. The intensity changes, not the note.\r
\r
## Model Errors\r
\r
### Error - Ignoring thermal dependence in gases\r
- **Why it seems correct**: Because we usually use the standard value of 340 m/s for all air problems.\r
- **Why it is incorrect**: The speed of sound in a gas depends on the root of the absolute temperature T. In a desert or in the Arctic, the error can be 10%.\r
- **Detection signal**: Discrepancies in echo distance calculation in extreme weather conditions.\r
- **Conceptual correction**: In gases, thermal agitation dictates how quickly molecules find each other to collide.\r
- **Mini-example**: At 0^ degreesC, [[c]] ~ 331 m/s; at 40^ degreesC, [[c]] ~ 355 m/s. A significant difference.\r
\r
### Error - Using the ideal gas model for liquids\r
- **Why it seems correct**: Due to the tendency to want to use temperature T for all sound speed calculations.\r
- **Why it is incorrect**: Liquids do not follow the ideal gas law. Their speed depends on the bulk modulus [[B]] and density [[rho]].\r
- **Detection signal**: Absurdly low results if trying to treat water as heavy air.\r
- **Conceptual correction**: Use the formula\r
\r
{{f:sonido_compresible}}\r
\r
for liquid or solid media.\r
- **Mini-example**: Water is 800 times denser than air, but sound travels faster in it because its stiffness is immensely greater.\r
\r
## Mathematical Errors\r
\r
### Error - Frequency unit conversion error\r
- **Why it seems correct**: Because Megahertz (MHz) and Hertz (Hz) sound similar in the problem statement.\r
- **Why it is incorrect**: An error of a factor of 1,000,000. In wave physics, scales matter.\r
- **Detection signal**: Wavelengths [[lambda]] in kilometers when they should be millimeters (in ultrasound).\r
- **Conceptual correction**: Always work in the base SI unit (hertz is inverse seconds).\r
- **Mini-example**: A 2 MHz pulse is 2,000,000 Hz. If you use 2, the result will be way out of scale.\r
\r
### Error - Mishandling logarithmic scales in decibels\r
- **Why it seems correct**: Due to the inertia of adding scalar magnitudes linearly.\r
- **Why it is incorrect**: Decibels are logarithmic. Adding two 60 dB sources does not give 120 dB (which would be a deadly roar), but 63 dB.\r
- **Detection signal**: Decibel values that exceed the human pain scale for no apparent reason.\r
- **Conceptual correction**: Add intensities (W/m^2) and then convert back to dB.\r
- **Mini-example**: Doubling sound power only adds 3 dB to the total level.\r
\r
## Interpretation Errors\r
\r
### Error - Confusing sound speed with particle speed\r
- **Why it seems correct**: Because both magnitudes are measured in m/s.\r
- **Why it is incorrect**: The speed [[c]] is the speed of the signal; particle speed is the speed of molecular back-and-forth.\r
- **Detection signal**: Particle speed values that exceed sound speed, which would imply supersonic molecular flights.\r
- **Conceptual correction**: [[c]] is a property of the medium; v_particle depends on sound intensity.\r
- **Mini-example**: Sound travels at 340 m/s, but the air molecule only moves at a few millimeters per second.\r
\r
### Error - Interpreting wavelength as a vertical distance\r
- **Why it seems correct**: Due to the visual analogy with sea waves that rise and fall.\r
- **Why it is incorrect**: In longitudinal waves, [[lambda]] is the horizontal distance between compression centers.\r
- **Detection signal**: Drawing wavelength as the height of a crest.\r
- **Conceptual correction**: [[lambda]] is the spatial period of the disturbance in the direction of travel.\r
- **Mini-example**: In a stretched spring, [[lambda]] is the distance between two zones where the coils are closer together.\r
\r
## Quick self-control rule\r
1.  **Gas medium**: Speed should be around 340 m/s.\r
2.  **Liquid medium**: Speed should be around 1500 m/s.\r
3.  **Relationship**: Always verify that the relation between [[c]], [[f]] and [[lambda]].\r
4.  **Audibility**: Frequencies outside the 20-20,000 Hz range are ultrasound or infrasound.`;export{e as default};
