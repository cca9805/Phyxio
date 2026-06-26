## Conceptual errors


### Error 1: Believing the Rayleigh wave is simply an S wave travelling along the surface

**Why it seems correct**

The Rayleigh wave has a dominant transverse component and its velocity is close to [[v_s]], which leads one to think it is an S wave confined to the surface.

**Why it is incorrect**

The Rayleigh wave is a coupled P-S mode. It has longitudinal (vertical) and transverse (horizontal) components simultaneously. The free-surface condition creates a coupling that does not exist for isolated body waves. The retrograde elliptical motion cannot be reproduced with a pure S wave.

**Detection signal**

The student cannot explain why [[velocidad_de_onda_de_rayleigh]] is less than [[v_s]], nor why there is a vertical motion component.

**Conceptual correction**

The Rayleigh wave is a coherent superposition of evanescent P and S waves (decaying with depth) coupled by the boundary condition. Neither P nor S alone satisfies the free surface; only their combination does, and that combination travels slower than either.

**Contrast mini-example**

A pure S wave in an infinite medium has [[v_s]] of 3000 m/s and only horizontal motion. The Rayleigh wave in the same medium has [[velocidad_de_onda_de_rayleigh]] of 2760 m/s (with [[nu_poisson]] of 0.25) and describes ellipses with vertical and horizontal components. They are distinct phenomena.

**Mini-example of contrast**

Check 1: In Rayleigh Surface Waves, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Thinking Rayleigh waves propagate in fluids

**Why it seems correct**

Ocean waves appear to be surface waves with elliptical motion, and the student generalizes this observation to all media.

**Why it is incorrect**

Rayleigh waves require shear rigidity (finite [[v_s]]). In a fluid, [[v_s]] is zero and the Rayleigh secular equation has no real solution. Ocean waves are gravity waves, not elastic; their restoring mechanism is gravity, not elasticity.

**Detection signal**

The student attempts to apply the [[velocidad_de_onda_de_rayleigh]] formula to water or air, obtaining absurd results (or claims ocean waves are "Rayleigh waves").

**Conceptual correction**

Rayleigh waves need a solid with a free surface. Surface waves in fluids (gravity waves, capillary waves) have entirely different restoring mechanisms and do not follow the elastic secular equation.

**Contrast mini-example**

Water: [[v_s]] zero. Attempting to calculate [[velocidad_de_onda_de_rayleigh]] with the Viktorov formula gives [[velocidad_de_onda_de_rayleigh]] zero: no Rayleigh wave exists. Waves observed on the sea surface depend on gravity and their velocity depends on depth and wavelength, not on elastic moduli.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Applying the homogeneous medium formula to stratified soil and expecting correct results at all frequencies

**Why it seems correct**

The Viktorov formula gives a single frequency-independent [[velocidad_de_onda_de_rayleigh]] value, and the student assumes it always applies.

**Why it is incorrect**

In a stratified medium, the Rayleigh wave is dispersive: its phase velocity depends on frequency. High frequencies probe the surface layer (generally slower) and low frequencies probe deeper layers (faster). The Viktorov formula only gives the velocity for a homogeneous half-space.

**Detection signal**

The student obtains a single [[velocidad_de_onda_de_rayleigh]] value for a clearly heterogeneous soil profile (e.g., clay over rock) and cannot understand why the MASW survey shows a dispersion curve rather than a point.

**Conceptual correction**

In stratified media, the generalised secular equation must be solved at each frequency. The resulting dispersion curve is the diagnostic tool; the Viktorov formula only makes sense as a reference for each individual layer.

**Contrast mini-example**

Soil with 5 m of clay ([[v_s]] 150 m/s) over rock ([[v_s]] 2000 m/s). At 30 Hz ([[longitud_de_onda_de_rayleigh]] of 5 m), the wave probes only the clay and [[velocidad_de_onda_de_rayleigh]] is close to 140 m/s. At 3 Hz ([[longitud_de_onda_de_rayleigh]] of 700 m), the wave mainly probes the rock and [[velocidad_de_onda_de_rayleigh]] is close to 1850 m/s. A single value of 1000 m/s does not describe reality.

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Ignoring that penetration depth depends on frequency

**Why it seems correct**

The student treats [[d_pen]] as a fixed material property, without considering that [[longitud_de_onda_de_rayleigh]] changes with frequency.

**Why it is incorrect**

[[d_pen]] is approximately [[longitud_de_onda_de_rayleigh]], and [[longitud_de_onda_de_rayleigh]] depends on frequency (it is [[velocidad_de_onda_de_rayleigh]] divided by frequency). At high frequency penetration is shallow; at low frequency it is deep. This is the fundamental tool for selecting the investigation depth.

**Detection signal**

The student states "the Rayleigh wave penetrates 10 metres" without specifying frequency, or uses the same [[d_pen]] for 5 Hz and 50 Hz.

**Conceptual correction**

Penetration depth is a function of frequency: [[d_pen]] is approximately [[velocidad_de_onda_de_rayleigh]] divided by frequency. To probe deeper, lower frequency must be used. This is the operating principle of the MASW method.

**Contrast mini-example**

Soil with [[velocidad_de_onda_de_rayleigh]] of 200 m/s. At 50 Hz: [[longitud_de_onda_de_rayleigh]] of 4 m, penetration of 4 m. At 5 Hz: [[longitud_de_onda_de_rayleigh]] of 40 m, penetration of 40 m. Ten times deeper with ten times less frequency.

## Mathematical errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Treating the secular equation as directly solvable for [[velocidad_de_onda_de_rayleigh]]

**Why it seems correct**

The student sees a sixth-degree polynomial and attempts to factorise it algebraically or seeks a closed-form formula for [[cociente_adimensional_v_r_v_s]].

**Why it is incorrect**

The Rayleigh secular equation has no general closed-form algebraic solution. Roots are obtained numerically or via validated approximations such as Viktorov's. Attempting factorisation yields incorrect expressions or out-of-range approximations.

**Detection signal**

The student presents an "exact solution" of the secular equation that does not match tabulated [[cociente_adimensional_v_r_v_s]] values (e.g., obtains [[cociente_adimensional_v_r_v_s]] greater than 1 or negative).

**Conceptual correction**

For practical calculations, use the Viktorov approximation (error below 0.5 percent) or solve numerically. The secular equation serves to understand the physics (existence of a single real root between 0 and 1), not as a direct calculation tool.

**Contrast mini-example**

With [[nu_poisson]] of 0.25 ([[xi_vs_vp]] of 0.577): the exact numerical root is [[cociente_adimensional_v_r_v_s]] of 0.9194. The Viktorov approximation gives 0.9200. Any "algebraic factorisation" yielding a different value (such as 0.95 or 0.88) is wrong.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 6: Confusing the sign of the exponent in the depth decay

**Why it seems correct**

The student writes the exponential with a positive sign in the exponent, thinking amplitude "grows" into the interior.

**Why it is incorrect**

The Rayleigh wave is confined to the surface; its amplitude decreases with depth. The exponent must be negative: [[amplitud_a_profundidad_z]] is [[amplitud_en_la_superficie]] times the exponential of minus [[coeficiente_de_decaimiento_con_la_profundidad]] times [[z_prof]]. A positive exponent would give infinite amplitude at depth, violating energy conservation.

**Detection signal**

The result shows [[amplitud_a_profundidad_z]] greater than [[amplitud_en_la_superficie]] for positive [[z_prof]], or [[amplitud_a_profundidad_z]] increasing with depth.

**Conceptual correction**

The negative sign in the exponent ensures amplitude decreases with depth. Always verify that for large [[z_prof]], [[amplitud_a_profundidad_z]] tends to zero.

**Contrast mini-example**

With [[coeficiente_de_decaimiento_con_la_profundidad]] of 0.5 per metre and [[z_prof]] of 4 m: correct, exponential of minus 2, giving [[amplitud_a_profundidad_z]] of 0.135 times [[amplitud_en_la_superficie]]. Incorrect (positive sign): exponential of plus 2, giving [[amplitud_a_profundidad_z]] of 7.39 times [[amplitud_en_la_superficie]]. Amplitude cannot grow 7 times by going down 4 metres.

## Interpretation errors

**Mini-example of contrast**

Check 6: In Rayleigh Surface Waves, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.


### Error 7: Interpreting a high Rayleigh velocity as indicating a "rigid material at depth"

**Why it seems correct**

The student knows that higher velocity indicates greater rigidity, and extrapolates this information to the entire medium volume.

**Why it is incorrect**

The Rayleigh wave at a given frequency only probes to a depth on the order of [[longitud_de_onda_de_rayleigh]]. A high [[velocidad_de_onda_de_rayleigh]] indicates the material is stiff in that layer, but says nothing about what lies below. To know the rigidity at greater depth, measurements at lower frequencies are needed.

**Detection signal**

The student concludes "the entire ground is stiff" based on a single [[velocidad_de_onda_de_rayleigh]] measurement at high frequency, without checking the dispersion curve.

**Conceptual correction**

The information from [[velocidad_de_onda_de_rayleigh]] is tied to the measurement frequency. A complete characterisation requires measuring [[velocidad_de_onda_de_rayleigh]] at multiple frequencies and constructing the dispersion profile, which is then inverted to obtain [[v_s]] as a function of depth.

**Contrast mini-example**

Soil with 0.5 m concrete layer ([[v_s]] of 2500 m/s) over soft clay ([[v_s]] of 120 m/s). At 500 Hz ([[longitud_de_onda_de_rayleigh]] of 5 m), the measurement mostly reflects the concrete and [[velocidad_de_onda_de_rayleigh]] is high. At 10 Hz ([[longitud_de_onda_de_rayleigh]] of 12 m), the wave penetrates the clay and [[velocidad_de_onda_de_rayleigh]] drops drastically. The stiff surface layer masks the underlying weakness if low frequencies are not measured.

**Mini-example of contrast**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.


### Error 8: Believing the Rayleigh wave causes no damage because it is "superficial"

**Why it seems correct**

The term "superficial" suggests the wave is weak or insignificant compared to body waves coming from the interior.

**Why it is incorrect**

Rayleigh waves are the most destructive in shallow earthquakes. Their surface amplitude is maximum, they attenuate geometrically less than body waves (decreasing as the inverse square root of distance rather than the square), and their low-frequency content couples efficiently with buildings.

**Detection signal**

The student underestimates the surface amplitude of a distant earthquake or does not understand why the highest-amplitude phase in a seismogram arrives after P and S.

**Conceptual correction**

"Superficial" refers to vertical confinement (amplitude concentrated near the surface), not to intensity. Precisely because the energy is concentrated in the surface layer where structures are located, damage is maximum.

**Contrast mini-example**

Earthquake at 500 km. P and S waves attenuate with the cube of distance (spherical divergence). Rayleigh waves attenuate with the square root of distance (cylindrical divergence). In the seismogram, the Rayleigh phase has amplitude 10 times larger than the direct S phase at that distance. It is the phase that moves buildings.

## Quick self-control rule

Before accepting a Rayleigh wave calculation, verify these points:

1. **[[velocidad_de_onda_de_rayleigh]] less than [[v_s]]**: always, without exception. The ratio [[cociente_adimensional_v_r_v_s]] is between 0.87 and 0.96.
2. **[[amplitud_a_profundidad_z]] less than or equal to [[amplitud_en_la_superficie]]**: amplitude never grows with depth. If the result says otherwise, the exponent sign is wrong.
3. **Penetration proportional to [[longitud_de_onda_de_rayleigh]]**: if frequency doubles, probed depth halves. If the result does not reflect this, check the frequency-wavelength relationship.

**Mini-example of contrast**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.