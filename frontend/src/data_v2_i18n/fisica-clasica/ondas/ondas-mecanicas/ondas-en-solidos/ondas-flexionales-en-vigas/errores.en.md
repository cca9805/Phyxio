## Conceptual errors


### Error 1: Believing that bending waves are not dispersive

**Por qué parece correcto**

The student has studied waves on strings and longitudinal waves in bars, where speed is constant and independent of frequency. They generalise this result to all waves in solids, concluding that propagation speed is a material property, not a wave property.

**Por qué es incorrecto**

Flexural dispersion is a consequence of the **order of the spatial derivative** in the equation of motion. The string and longitudinal bar use the second derivative, producing non-dispersive waves. The beam in bending involves the fourth derivative, introducing a quadratic relationship between frequency and wavenumber. This makes phase velocity depend on frequency. It is a structural property of the type of deformation, not just the material.

**Señal de detección**

The student calculates a single flexural phase velocity (without specifying frequency) and uses it for all frequencies. They claim that a bending pulse maintains its shape as it propagates.

**Corrección conceptual**

Flexural phase velocity always requires specifying the frequency. For a given material and section, [[v_fase_flex]] differs at each frequency. A bending pulse broadens temporally as it propagates because its frequency components travel at different speeds.

**Mini-ejemplo de contraste**

A blow on a train rail produces a short pulse. At 10 m from impact, 5 kHz components arrive in 6 ms ([[v_fase_flex]] ≈ 1700 m/s) while 500 Hz components arrive in 19 ms ([[v_fase_flex]] ≈ 530 m/s). The observer hears high frequencies first then low frequencies, a phenomenon impossible in a non-dispersive medium.

---

**Why it seems correct**

Check 1: In Flexural Waves in Beams, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.

**Why it is incorrect**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.

**Detection signal**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.

**Conceptual correction**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 2: Confusing phase velocity with group velocity

**Por qué parece correcto**

In non-dispersive waves (string, longitudinal bar), phase and group velocities are equal. The student assumes this always holds and uses both concepts interchangeably, or is unaware of group velocity.

**Por qué es incorrecto**

In flexural waves, group velocity is **exactly twice** the phase velocity. Phase velocity indicates how fast a crest-and-trough pattern moves, but energy travels at double that speed. Using phase velocity to estimate signal arrival times or power transmission yields a 100 % error (doubling the actual time).

**Señal de detección**

The student uses [[v_fase_flex]] to calculate the time an impact takes to traverse a beam, obtaining twice the actual time. Or, when experimentally measuring pulse speed, they find a value that does not match the phase velocity formula.

**Corrección conceptual**

In Euler-Bernoulli flexural waves, group velocity equals 2·[[v_fase_flex]]. To calculate arrival times or energy transmission, always use [[v_grupo_flex]]. Phase velocity is only relevant for describing the spatial evolution of interference patterns.

**Mini-ejemplo de contraste**

A 2 m aluminium bar is struck at one end. Phase velocity at 1 kHz is 150 m/s (apparent time 13.3 ms) but energy actually arrives in 6.7 ms because [[v_grupo_flex]] is 300 m/s. Timing the impact arrival measures group velocity, not phase velocity.

## Model errors

**Why it seems correct**

Check 6: In Flexural Waves in Beams, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.

**Why it is incorrect**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.

**Detection signal**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.

**Conceptual correction**

Check 9: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 9.

**Mini-example of contrast**

Check 10: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 10.


### Error 1: Applying Euler-Bernoulli at frequencies where wavelength is comparable to thickness

**Por qué parece correcto**

The Euler-Bernoulli formula is simple, elegant and numerically stable. It gives no mathematical failure signal: it produces a number for any frequency. The student applies it without verifying the validity range.

**Por qué es incorrecto**

When [[lambda_flex]] is comparable to thickness (less than 6 times), transverse shear deformation and rotational inertia significantly reduce the actual velocity below Euler-Bernoulli predictions. The error can exceed 30 % and grows monotonically with frequency. The model overestimates velocities because it ignores a physical mechanism that slows the wave.

**Señal de detección**

Calculated phase velocity exceeds 50 % of longitudinal velocity in the same material. For steel, if [[v_fase_flex]] exceeds 2500 m/s, the model is out of range. Experimental measurements fall systematically below predictions.

**Corrección conceptual**

Always calculate the product k·[[r_giro]] and verify it is less than 0.3. If not, use Timoshenko theory which incorporates shear and rotational inertia and correctly predicts velocity saturation.

**Mini-ejemplo de contraste**

A 5 mm steel bar bending at 200 kHz would have a phase velocity of 1840 m/s according to Euler-Bernoulli. The actual measurement gives about 1200 m/s because shear deformation slows the wave. The error is 53 %, unacceptable for any design.

---

**Why it seems correct**

Check 11: In Flexural Waves in Beams, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 11.

**Why it is incorrect**

Check 12: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 12.

**Detection signal**

Check 13: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 13.

**Conceptual correction**

Check 14: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 14.

**Mini-example of contrast**

Check 15: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 15.


### Error 2: Using the longitudinal velocity formula to calculate bending propagation

**Por qué parece correcto**

Longitudinal velocity in bars (square root of E/rho) is a simple and well-known formula. The student applies it to all beam propagation problems without distinguishing wave type.

**Por qué es incorrecto**

Longitudinal velocity contains no information about section geometry because longitudinal waves do not depend on section shape. Flexural waves depend critically on the second moment of area [[momento_de_inercia_de_la_seccion_transversal]], which reflects how material is distributed relative to the neutral axis. Using longitudinal velocity for bending produces errors of one order of magnitude at audible frequencies.

**Señal de detección**

The student obtains a constant bending velocity (independent of frequency) for a metal beam, of the order of thousands of m/s. This is the longitudinal speed, not flexural.

**Corrección conceptual**

Flexural phase velocity requires explicitly including [[momento_de_inercia_de_la_seccion_transversal]], [[rho_lin]] and [[omega]]. It cannot be obtained from a single material property. At 1 kHz in a 5 mm steel bar, flexural velocity is about 40 times slower than longitudinal.

**Mini-ejemplo de contraste**

Longitudinal velocity in steel is 5100 m/s (constant). Flexural velocity at 1 kHz is 130 m/s, at 10 kHz is 410 m/s, at 100 kHz is 1300 m/s. Using 5100 m/s for all frequencies produces errors of 4× to 40× depending on frequency.

## Mathematical errors

**Why it seems correct**

Check 16: In Flexural Waves in Beams, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 16.

**Why it is incorrect**

Check 17: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 17.

**Detection signal**

Check 18: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 18.

**Conceptual correction**

Check 19: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 19.

**Mini-example of contrast**

Check 20: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 20.


### Error 1: Forgetting the fourth root in the phase velocity formula

**Por qué parece correcto**

The student remembers that propagation speed is usually the square root of a stiffness/density ratio. They apply the square root to EI times [[omega]] squared divided by rho·A instead of the fourth root, obtaining a result with incorrect dimensions.

**Por qué es incorrecto**

Flexural phase velocity is the **fourth root** of EI times [[omega]] squared divided by rho·A. This is derived from the definition of phase velocity as the ratio between angular frequency and wavenumber, combined with the dispersion relation where [[omega]] is proportional to the square of the wavenumber. The square root of EI/(rho·A) does not give a velocity but a parameter with dimensions of velocity squared times length, which is dimensionally incorrect for [[v_fase_flex]].

**Señal de detección**

The result for [[v_fase_flex]] has incorrect units (m²/s instead of m/s) or produces numerically absurd values (of the order of 10⁶ m/s for a normal bar at audible frequency).

**Corrección conceptual**

The correct formula is [[v_fase_flex]] equals the fourth root of EI times [[omega]] squared divided by rho·A. Dimensionally: `[M L⁻¹ T⁻²]·[L⁴]·[T⁻²]/[M L⁻¹]` gives `[L⁴ T⁻⁴]`; its fourth root gives `[L T⁻¹]`.

**Mini-ejemplo de contraste**

For steel, using EI times [[omega]] squared divided by rho·A with typical numerical values at 1 kHz, the fourth root gives 130 m/s (correct); the square root would give 17 000 m/s (absurd, greater than longitudinal velocity).

---

**Why it seems correct**

Check 21: In Flexural Waves in Beams, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 21.

**Why it is incorrect**

Check 22: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 22.

**Detection signal**

Check 23: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 23.

**Conceptual correction**

Check 24: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 24.

**Mini-example of contrast**

Check 25: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 25.


### Error 2: Entering frequency in Hz where rad/s is required

**Por qué parece correcto**

Excitation sources are usually specified in Hz (oscillator, function generator). The student enters the Hz value directly into the [[v_fase_flex]] formula without multiplying by 2π.

**Por qué es incorrecto**

The phase velocity formula contains [[omega]] in rad/s. If f in Hz is entered, the resulting velocity is (2π)^(1/2) ≈ 2.5 times lower than actual, because the fourth root of [[omega]] squared is the square root of [[omega]], and [[omega]] is 2π·f.

**Señal de detección**

Calculated velocities are systematically a factor of 2.5 lower than experimental measurements, for all frequencies. The dispersion curve has the correct shape (square root) but is shifted downward.

**Corrección conceptual**

Always convert Hz to rad/s by multiplying by 2π before substituting in the formula. Alternatively, rewrite the formula in terms of f directly: [[v_fase_flex]] is the fourth root of (EI·4π²·f²/rho·A).

**Mini-ejemplo de contraste**

At 1000 Hz, [[omega]] is 6283 rad/s. Using 1000 instead of 6283 produces an error factor of (6283/1000)^(1/2) ≈ 2.51. The resulting velocity comes out as 52 m/s instead of 130 m/s.

## Interpretation errors

**Why it seems correct**

Check 26: In Flexural Waves in Beams, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 26.

**Why it is incorrect**

Check 27: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 27.

**Detection signal**

Check 28: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 28.

**Conceptual correction**

Check 29: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 29.

**Mini-example of contrast**

Check 30: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 30.


### Error 1: Interpreting zero phase velocity at zero frequency as absence of propagation

**Por qué parece correcto**

The formula indicates that as [[omega]] approaches zero, [[v_fase_flex]] approaches zero. The student concludes that very low-frequency waves cannot propagate in the beam.

**Por qué es incorrecto**

The zero-frequency limit does not correspond to a bending wave but to a static deformation. The beam still responds to static loads (the static solution exists and is finite), but that response is not wave-like. Bending waves exist at any finite frequency, however low; their speed simply reduces and their wavelength becomes very large. The transition is continuous, not abrupt.

**Señal de detección**

The student states that "below a certain critical frequency the beam cannot propagate bending waves." No such cutoff frequency exists in Euler-Bernoulli; dispersion reduces speed but does not eliminate propagation.

**Corrección conceptual**

Every finite frequency produces a propagating bending wave with finite velocity (though it may be very low). There is no cutoff frequency. What happens at very low frequency is that wavelength becomes so large that the response is essentially static and the wave concept loses practical utility.

**Mini-ejemplo de contraste**

At 1 Hz ([[omega]] ≈ 6.28 rad/s), a 5 mm steel bar has [[v_fase_flex]] ≈ 4 m/s and [[lambda_flex]] ≈ 4 m. The wave exists, but its wavelength is comparable to beam length and the response is better described as fundamental mode vibration.

---

**Why it seems correct**

Check 31: In Flexural Waves in Beams, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 31.

**Why it is incorrect**

Check 32: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 32.

**Detection signal**

Check 33: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 33.

**Conceptual correction**

Check 34: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 34.

**Mini-example of contrast**

Check 35: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 35.


### Error 2: Assuming group velocity is always less than phase velocity

**Por qué parece correcto**

In many familiar dispersive systems (deep water waves, electromagnetic waves in normally dispersive media), group velocity is less than phase velocity. The student generalises this experience to all dispersive systems.

**Por qué es incorrecto**

In beam flexural waves, the dispersion relation is quadratic with upward concavity ([[omega]] proportional to the square of the wavenumber). The derivative of [[omega]] with respect to wavenumber gives the group velocity, which is exactly twice the phase velocity. Here group velocity is **greater** than phase velocity. This is an example of anomalous dispersion (group velocity exceeding phase velocity).

**Señal de detección**

The student draws group velocity below phase velocity in the dispersion graph, or states that energy travels slower than crests.

**Corrección conceptual**

In Euler-Bernoulli flexural waves, [[v_grupo_flex]] is always exactly twice [[v_fase_flex]]. Energy travels faster than the phase pattern. This is a direct consequence of the curve of [[omega]] versus wavenumber being a convex parabola.

**Mini-ejemplo de contraste**

At 1 kHz in steel with a 5 mm section, [[v_fase_flex]] is 130 m/s and [[v_grupo_flex]] is 260 m/s. A stopwatch measuring pulse arrival would indicate 260 m/s, not 130 m/s. If the student assumes [[v_grupo_flex]] less than [[v_fase_flex]] (say 65 m/s), they predict an arrival time 4 times greater than actual.

## Quick self-control rule

Before accepting a [[v_fase_flex]] calculation, verify:

1. **Result dimensions:** [[v_fase_flex]] must have units of m/s. If it has m²/s, the fourth root was forgotten.
2. **Range:** for metallic beams at audible frequencies (100 Hz–10 kHz), typical [[v_fase_flex]] is 50–1000 m/s. Values of thousands of m/s at audible frequency signal an error.
3. **Comparison with longitudinal:** [[v_fase_flex]] must always be less than the longitudinal velocity sqrt([[modulo_de_young]]/[[rho_vol]]). If not, the model is out of range.
4. **Group-phase relation:** [[v_grupo_flex]] must be exactly 2·[[v_fase_flex]]. If it differs, an incorrect relation has been applied.
5. **Frequency dependence:** [[v_fase_flex]] must change if [[omega]] changes. A constant result indicates the longitudinal formula was used by mistake.
6. **Input units:** [[omega]] in rad/s (not Hz), [[momento_de_inercia_de_la_seccion_transversal]] in m⁴ (not cm⁴), [[modulo_de_young]] in Pa (not GPa).

**Why it seems correct**

Check 36: In Flexural Waves in Beams, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 36.

**Why it is incorrect**

Check 37: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 37.

**Detection signal**

Check 38: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 38.

**Conceptual correction**

Check 39: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 39.

**Mini-example of contrast**

Check 40: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 40.