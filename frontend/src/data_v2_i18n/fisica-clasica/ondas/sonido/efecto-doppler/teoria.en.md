# Doppler Effect

## Conceptual context

When an ambulance speeds past an observer, the siren pitch rises as it approaches and falls as it recedes. The ambulance does not change its frequency at any point: the effect is perceptual, not from the source. This apparent frequency change due to relative motion between emitter and receiver is called the **Doppler effect**, and it is one of the most general wave phenomena in physics: it appears in sound, light, radio waves and any other type of wave propagating at a finite speed through a medium or in vacuum.

The physical mechanism is geometric and direct. A moving sound source compresses wavefronts ahead of it and stretches them behind. A moving receiver intercepts more wavefronts per second when advancing toward them, or fewer when moving away. In both cases, the result is an observed frequency [[f_obs]] different from the emitted frequency [[f_fuente]].

Understanding the Doppler effect is not merely an academic exercise: it is the physical basis of road speed radar, cardiac Doppler ultrasound, submarine navigation sonar and the measurement of stellar and galactic velocities.

## 🟢 Essential level

When a sound source **approaches** the receiver, wavefronts pile up: they arrive at higher frequency than they are emitted. Pitch rises. When the source **recedes**, wavefronts spread out: they arrive at lower frequency. Pitch falls.

The same happens if the receiver moves: approaching a stationary sound source means intercepting more wavefronts per second; moving away means intercepting fewer.

The key factor is the **radial relative velocity** between source and receiver relative to the sound propagation speed [[v_sonido]] in the medium. The larger that relative velocity as a fraction of [[v_sonido]], the greater the frequency shift.

> [!NOTE]
> The classical Doppler effect is **not symmetric**: a source approaching a stationary receiver produces a different frequency change from a receiver approaching a stationary source, even if the relative speed is the same. This contrasts with the relativistic Doppler effect (for light), where only the relative velocity between source and receiver matters.

The practical rule: if source and receiver approach, [[f_obs]] is greater than [[f_fuente]]; if they recede, [[f_obs]] is less than [[f_fuente]]; if at relative rest, [[f_obs]] equals [[f_fuente]].

## 🔵 Formal level

The general Doppler formula relates all the velocities involved:

{{f:doppler_general}}

where the standard sign convention is:
- [[v_receptor]] positive when receiver moves **toward** source
- [[v_fuente]] positive when source moves **away from** receiver

For the most common case of stationary receiver and moving source:

{{f:doppler_fuente_movil}}

For the case of stationary source and moving receiver:

{{f:doppler_receptor_movil}}

The difference between the two formulas underlines the asymmetry of the classical Doppler effect. For a source approaching at [[v_sonido]]/2 (moving source), [[f_obs]] is 2 times [[f_fuente]]. For a receiver approaching at [[v_sonido]]/2 (moving receiver), [[f_obs]] is only 1.5 times [[f_fuente]]. Same relative approach speed, different result.

The Doppler shift is:

{{f:desplazamiento_doppler}}

> [!TIP]
> The sign convention is the main source of errors in the Doppler effect. A robust approach: first identify whether [[f_obs]] should be greater or less than [[f_fuente]] from the physical context, calculate the expected result with the formula, and verify that the sign of the result is consistent with the initial expectation.

## 🔴 Structural level

The physical mechanism of the two cases (moving source and moving receiver) is conceptually different, although both produce changes in [[f_obs]].

**Moving source**: The source emits spherical wavefronts at regular intervals. As it moves, the centre of each new wavefront is displaced relative to the previous one. In the direction of motion, successive wave centres are closer together, reducing the distance between wavefronts: the effective wavelength in that direction is shorter than for a stationary source. Since [[v_sonido]] does not change (it is a property of the medium, not the source), a shorter wavelength implies a higher frequency. In the opposite direction, wavefronts are stretched: longer wavelength and lower frequency.

**Moving receiver**: The source is at rest relative to the medium, so wavefronts are equally spaced in all directions with the intrinsic wavelength [[v_sonido]] divided by [[f_fuente]]. The wavelength in the medium does not change. What changes is the relative speed at which the receiver crosses those wavefronts: moving toward the source it crosses them at speed [[v_sonido]] plus [[v_receptor]], encountering more per second. Moving away, it crosses at speed [[v_sonido]] minus [[v_receptor]].

This distinction explains why the two formulas are different and why the classical Doppler effect is not symmetric: in the moving-source case, the wavelength in the medium is altered; in the moving-receiver case, it is not.

**Sonic singularity**: When [[v_fuente]] approaches [[v_sonido]], the denominator of the moving-source formula approaches zero and [[f_obs]] tends to infinity. Physically, the source "catches up" with its own wavefronts: they all pile up in a shock front (the **sonic boom**). When [[v_fuente]] exceeds [[v_sonido]], a **Mach cone** forms: the wavefronts form a cone with half-angle equal to the arcsine of the ratio [[v_sonido]] divided by [[v_fuente]]. Behind the cone a wave solution exists; ahead, it does not.

> [!WARNING]
> The classical Doppler formula **fails** when [[v_fuente]] is greater than or equal to [[v_sonido]]. In that regime no monochromatic wave solution exists in the forward region and the concept of [[f_obs]] loses meaning. The Mach cone is not an "infinite frequency", but the absence of periodic wavefronts in the forward zone.

## Deep physical interpretation

The broken symmetry of the classical Doppler effect has deep roots: sound propagates relative to the medium, not relative to source or receiver. The medium (air, water) is the privileged reference frame. When the source moves in the medium, the spatial structure of wavefronts changes. When the receiver moves, the structure does not change, but its relative velocity with respect to the wavefronts does.

In relativistic physics, there is no "privileged medium" for light: the speed of light is the same for all inertial observers. As a result, the relativistic Doppler effect **is symmetric**: it depends only on the relative velocity between source and receiver, not on who is moving relative to what. This difference between the classical and relativistic Doppler is one of the most direct experimental demonstrations of special relativity.

## Order of magnitude

For an ambulance with a 440 Hz siren moving at 90 km/h (25 m/s) in air at 20 °C ([[v_sonido]] near 343 m/s):

Approaching, the moving-source relation with [[v_fuente]] of minus 25 m/s (negative convention for approaching) gives [[f_obs]] of 343 divided by (343 minus 25) times 440, approximately 474 Hz.

Receding: [[v_fuente]] of plus 25 m/s gives [[f_obs]] of 343 divided by (343 plus 25) times 440, approximately 411 Hz.

The total pitch change as the ambulance passes is from 474 to 411 Hz, a difference of 63 Hz perceptible as a noticeable descent. This pitch difference is proportional to vehicle speed and allows a trained ear to estimate the speed of the passing object.

## Personalized resolution method

1. Identify what is moving: source, receiver, or both. Select the general relation if both move, the moving-source relation if only the source moves, or the moving-receiver relation if only the receiver moves.

2. Establish the sign convention before substituting: [[v_fuente]] positive when moving away from receiver; [[v_receptor]] positive toward source.

3. Estimate the expected result: if there is approach, [[f_obs]] must be greater than [[f_fuente]]; if recession, smaller.

4. Substitute the numerical values and verify the result is consistent with the step 3 estimate.

5. If the object velocity is requested from measured [[f_obs]]: solve for [[v_fuente]] from the moving-source relation: [[v_fuente]] equals [[v_sonido]] multiplied by the quantity 1 minus [[f_fuente]] divided by [[f_obs]].

## Special cases and extended example

**Nearly sonic source**: if [[v_fuente]] approaches [[v_sonido]], the denominator becomes small and the model stops being operational before an infinite value is physically meaningful. In practice shock waves appear, not an ordinary audible frequency.

**Oblique motion**: if the source does not move along the source-receiver line, only the radial component counts. A vehicle crossing perpendicularly in front of the observer can be fast and still have almost zero Doppler shift at closest approach.

**Extended example**: for a siren with [[f_fuente]] equal to 1000 Hz and a source approaching at 34 m/s in air with [[v_sonido]] of 340 m/s, [[f_obs]] rises to about 1111 Hz. If it recedes at the same speed, it falls to about 909 Hz. The jump is large because the speed is already 10% of sound speed.

## Real student questions

**Why is relative speed alone not enough?**

Because sound propagates relative to the medium. Moving the source changes wavefront spacing; moving the receiver changes how many wavefronts it crosses per second.

**Is a sonic boom a very high frequency?**

No. It is a shock wave associated with a supersonic source. In that regime [[f_obs]] as a frontal periodic frequency is no longer a well-defined quantity.

## Cross-cutting connections and study paths

- [Speed of sound](leaf:fisica-clasica/ondas/sonido/velocidad-del-sonido): provides [[v_sonido]] of the medium, the critical parameter in the Doppler formula denominator.
- [Nature of sound](leaf:fisica-clasica/ondas/sonido/naturaleza-del-sonido): describes the wavefront structure that the Doppler effect compresses or stretches.
- [Applications of sound](leaf:fisica-clasica/ondas/sonido/aplicaciones): extends the Doppler principle to velocity sonar, Doppler ultrasound and weather radar.
- [Relativistic Doppler effect](leaf:fisica-clasica/relatividad/efecto-doppler-relativista): generalises the Doppler effect to electromagnetic waves and velocities comparable to the speed of light.

## Final synthesis

The Doppler effect is the modification of perceived frequency by relative motion between source and receiver. The general relation encapsulates two mechanisms: wavefront compression by the moving source and accelerated interception by the moving receiver. The sign convention is the practical key, and [[v_fuente]] equal to [[v_sonido]] marks the physical limit of the model.
