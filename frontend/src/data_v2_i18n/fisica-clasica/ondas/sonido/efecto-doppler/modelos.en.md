## Ideal model

The canonical Doppler effect model assumes a **point source** emitting spherical waves in a **homogeneous, isotropic, and stationary** medium relative to the laboratory reference frame. The sound propagation speed [[v_sonido]] is constant throughout space and does not depend on frequency (non-dispersive medium). The motion of source and receiver is along the **line joining them** (purely radial motion). Under these conditions, the classical Doppler relations are exact.

This model accurately captures the pitch of an ambulance siren approaching and receding in a straight line, the road speed radar pointing directly at the vehicle, and the measurement of the radial velocity of a star from spectral line shifts.

## Hypotheses

- **Medium at rest**: [[v_sonido]] is the propagation speed relative to the medium. If there is wind or another fluid current, the effective sound speed changes with direction and the formulas must be corrected using the resultant velocity from the vector composition of wind and [[v_sonido]].

- **Purely radial motion**: velocities [[v_fuente]] and [[v_receptor]] are used as speeds along the source-receiver line. If there is an angle between the velocity and that line, only the radial component contributes to the Doppler effect. For a 90-degree angle, the classical Doppler effect is zero (though the relativistic Doppler is not).

- **Subsonic source**: the formula requires [[v_fuente]] to be strictly less than [[v_sonido]]. When [[v_fuente]] equals or exceeds [[v_sonido]], the model fails.

- **Constant frequency**: the source emits at constant [[f_fuente]]. If the source varies its emission frequency (for example, a sonar chirp), the signal must be treated as a superposition of monochromatic frequencies.

- **Far field**: the receiver is far enough from the source for the wave to be approximated as an outgoing sphere. In the near field (distances smaller than the wavelength), the amplitude and phase distribution is more complex.

## Quantitative validity domain

The model is valid when the source Mach number (M equals [[v_fuente]] divided by [[v_sonido]]) is below 0.9. For M above 0.9, fluid compressibility effects (in the case of air) produce deviations from the ideal spherical wave.

For motion that is not strictly radial, the error from using the total speed instead of the radial component is proportional to the square of the sine of the angle. For angles below 10 degrees, the error is below 2%; for angles of 30 degrees, it reaches 13%.

In the presence of wind, the effective sound speed in the source-receiver direction changes relative to [[v_sonido]] depending on alignment. For winds up to 10 m/s in air ([[v_sonido]] of 343 m/s), the uncorrected wind error is below 3%.

## Model failure signals

- **[[f_obs]] diverges or is negative**: the denominator of the moving-source formula has reached zero or changed sign, indicating that [[v_fuente]] has reached or exceeded [[v_sonido]]. The formula does not apply in that regime.

- **Observed frequency does not change with velocity**: may indicate purely transverse motion (the object moves away perpendicularly). In that case the classical Doppler effect is zero.

- **Appreciable wind present**: if the frequency difference for an object approaching and receding at the same speed is not symmetric, there is a wind component that asymmetrically shifts [[v_sonido]] in the two directions.

- **Multiple echoes or frequencies**: in enclosed environments, echoes from the ground, walls or nearby objects may arrive at different travel times with different Doppler shifts, complicating identification of [[f_obs]] of the primary object.

## Extended or alternative model

The **wind model** vectorially adds the wind velocity to [[v_sonido]] in each direction. For a road speed radar in the presence of crosswind, the wind component along the line of sight can produce a systematic error if uncorrected.

The **oblique-angle model** replaces [[v_fuente]] with [[v_fuente]] multiplied by the cosine of the angle between the velocity and the line of sight. This model is essential in marine Doppler sonar, where the ship's speed is not always aligned with the path to the object.

The **pulsed Doppler model** for medical ultrasound combines the Doppler effect with the echo principle. Instead of a continuous frequency, the equipment emits pulses and measures the phase variation of the echo between successive pulses to calculate blood flow velocity at each image point.

The **relativistic Doppler model** replaces the entire classical formulation for velocities comparable to the speed of light. It is used in radio astronomy and in the analysis of relativistic jets from compact objects.

When to switch to the extended model: for incidence angles above 20 degrees; for wind speeds above 5% of [[v_sonido]]; for source speeds above 80% of [[v_sonido]]; or for precision measurements where the radial approximation error exceeds the measurement uncertainty.

## Operational comparison

| Criterion | Ideal model (radial, no wind) | Oblique-angle model | Pulsed Doppler model |
|---|---|---|---|
| Input variables | [[f_fuente]], [[v_fuente]] or [[v_receptor]], [[v_sonido]] | Same plus incidence angle | Echo phase between pulses |
| Application range | Direct radar, siren in straight line | Sonar with angle, oblique radar | Cardiac and vascular Doppler ultrasound |
| Error without angle correction | Zero (zero angle) | Proportional to cos²(angle) | Not applicable |
| Ability to measure velocity | Yes, by solving for [[v_fuente]] | Yes, with angle correction | Yes, with higher spatial resolution |
| Complexity | Low | Medium | High |
