## Conceptual errors

### Error 1: Thinking the Doppler effect is symmetric

**Por qué parece correcto**

The student reasons: "if the ambulance approaches at 25 m/s or I approach the ambulance at 25 m/s, the relative velocity is the same in both cases, so the frequency I hear must be the same". This logic is valid in kinematics, but not in the physics of sound waves in a material medium.

**Por qué es incorrecto**

The classical Doppler formula is not symmetric with respect to swapping source and receiver. When the source approaches at [[v_sonido]]/2, the denominator of the moving-source formula gives [[f_obs]] of 2 times [[f_fuente]]. When the receiver approaches at the same speed (fixed source), the moving-receiver formula gives [[f_obs]] of 1.5 times [[f_fuente]]. The asymmetry exists because the physical mechanism differs: the moving source modifies the wavelength in the medium; the moving receiver does not.

**Detection signal**

The student uses the same formula regardless of whether the source or receiver moves, or confuses the two formulas.

**Conceptual correction**

Always identify first who is moving: if it is the source, use the moving-source relation or the general one with zero [[v_receptor]]; if it is the receiver, use the moving-receiver relation or the general one with zero [[v_fuente]]. The asymmetry disappears only in the limit of speeds much smaller than [[v_sonido]], where both formulas converge to the same linear approximation.

**Mini-example of contrast**

Source emits 1000 Hz. [[v_sonido]] equals 340 m/s. Approach speed equals 34 m/s (10% of [[v_sonido]]).
Moving source approaching: [[f_obs]] equals 340 divided by (340 minus 34) times 1000, approximately 1111 Hz.
Moving receiver approaching: [[f_obs]] equals (340 plus 34) divided by 340 times 1000, approximately 1100 Hz.
Difference of 11 Hz: not the same frequency even though the relative speed is identical.

---

### Error 2: Confusing the sign convention of source and receiver

**Por qué parece correcto**

The student sees that both [[v_fuente]] and [[v_receptor]] appear in the general formula and assumes they have the same sign convention: positive when moving in one direction and negative in the opposite.

**Por qué es incorrecto**

In the general Doppler relation, the convention is asymmetric by construction. [[v_receptor]] is positive when the receiver moves **toward** the source (which increases [[f_obs]], hence the positive sign in the numerator). [[v_fuente]] is positive when the source moves **away from** the receiver (which decreases [[f_obs]], hence the negative sign in the denominator). Applying the same convention to both variables inverts the effect of one of them.

**Detection signal**

The student calculates [[f_obs]] less than [[f_fuente]] for an approach, or [[f_obs]] greater for a recession.

**Conceptual correction**

Memorise or write down the convention explicitly before substituting: [[v_receptor]] positive toward source; [[v_fuente]] positive moving away from receiver. A way to verify: set both velocities to zero and check that [[f_obs]] equals [[f_fuente]]; then activate one velocity with the correct sign and verify the result goes in the expected direction.

**Mini-example of contrast**

Source emits 500 Hz and approaches at 50 m/s. [[v_sonido]] equals 340 m/s.
With correct convention (negative [[v_fuente]], approaching): 340 divided by (340 minus 50) times 500, equals 586 Hz (rises, correct).
With inverted convention (positive [[v_fuente]], approaching): 340 divided by (340 plus 50) times 500, equals 436 Hz (falls, incorrect for approach).

---

## Model errors

### Error 1: Applying the Doppler formula to a supersonic source

**Por qué parece correcto**

The student sees the moving-source relation and applies it for any value of [[v_fuente]], including values equal to or greater than [[v_sonido]], obtaining numerical results that appear valid.

**Por qué es incorrecto**

For [[v_fuente]] equal to [[v_sonido]], the denominator is zero: the formula gives infinite [[f_obs]], which has no physical meaning. For [[v_fuente]] greater than [[v_sonido]], the denominator is negative: the formula gives negative [[f_obs]], which is also meaningless. Physically, when [[v_fuente]] exceeds [[v_sonido]], the source overtakes its own wavefronts and no periodic wave solution exists in the forward region. A Mach cone forms and a sonic boom occurs.

**Detection signal**

The formula denominator yields zero, negative, or very close to zero, producing a physically absurd result.

**Conceptual correction**

Always verify that [[v_fuente]] is less than [[v_sonido]] before applying the Doppler formula. If the source is supersonic, the Doppler wave model does not apply: Mach cone theory would be needed to describe the wave pattern behind the shock front.

**Mini-example of contrast**

Source at [[v_fuente]] equal to 340 m/s (exactly [[v_sonido]]). The moving-source formula denominator is 340 minus 340 equals 0. The formula gives infinity. Physically, all emitted wavefronts pile up at the same point forming the shock front: the sonic boom.

---

## Mathematical errors

### Error 1: Inverting the ratio in the formula

**Por qué parece correcto**

The formula has the form [[f_fuente]] multiplied by a ratio of velocities. The student does not remember which speed goes in the numerator and which in the denominator, and writes the ratio inverted.

**Por qué es incorrecto**

In the moving-source relation, the numerator is [[v_sonido]] and the denominator is [[v_sonido]] minus [[v_fuente]]. If inverted, the result is [[f_obs]] equal to [[f_fuente]] multiplied by ([[v_sonido]] minus [[v_fuente]]) divided by [[v_sonido]], which always gives a frequency lower than [[f_fuente]] regardless of the sign of [[v_fuente]]: the result is wrong for both approach and recession.

**Detection signal**

The student always obtains [[f_obs]] less than [[f_fuente]] whether the source approaches or recedes.

**Conceptual correction**

Remember the formula structure from the physical mechanism: when the source approaches (denominator smaller than [[v_sonido]]), [[f_obs]] must be greater. Therefore [[v_sonido]] must go in the numerator, not the denominator. A quick check: with [[v_fuente]] equal to zero the result must be [[f_fuente]]; with negative [[v_fuente]] (approaching) the result must be greater than [[f_fuente]].

**Mini-example of contrast**

Source at 440 Hz approaching at 34 m/s. [[v_sonido]] equals 340 m/s.
Correct formula: 340 divided by (340 minus 34) times 440 equals approximately 474 Hz (rises, correct).
Inverted formula: (340 minus 34) divided by 340 times 440 equals approximately 396 Hz (falls, incorrect for approach).

---

## Interpretation errors

### Error 1: Thinking the sonic boom only occurs when the aircraft passes overhead

**Por qué parece correcto**

When watching or hearing a supersonic aircraft in films, the boom sounds exactly as the aircraft passes. The student concludes the boom is an instantaneous event that occurs at the moment of passage.

**Por qué es incorrecto**

The sonic boom is not an instantaneous or local event: it is a conical shock wave that continuously accompanies the aircraft while it flies supersonically. The Mach cone extends from the aircraft nose backward with half-angle equal to the arcsine of the ratio [[v_sonido]] divided by [[v_fuente]]. The ground observer hears the boom when the cone passes their position, not when the aircraft is directly overhead. For an aircraft at high altitude, the boom may be heard several seconds after the aircraft has passed the observer's vertical.

**Detection signal**

The student describes the sonic boom as a phenomenon that occurs "when the aircraft breaks the sound barrier" or "at the exact moment of passage".

**Conceptual correction**

The sonic boom is the ground projection of the Mach cone that the aircraft continuously drags. The time between the aircraft passing and the boom reaching the ground depends on flight altitude and aircraft speed. At greater altitude or lower Mach number, the boom arrives later and with lower intensity due to greater distance travelled and geometric attenuation.

**Mini-example of contrast**

A supersonic aircraft at M equal to 2 and altitude 10 km. The Mach cone half-angle is the arcsine of 0.5, equal to 30 degrees. The boom reaches the ground when the cone, which travels with the aircraft, reaches the observer's position. For an aircraft that has just passed the observer's vertical, the boom will still take time to arrive depending on how long it takes the cone to propagate 10 km downward at the speed of sound.

---

## Quick self-control rule

To quickly verify a Doppler effect calculation, apply the following three checks:

**Check 1 — Direction of shift**: If source or receiver approach, [[f_obs]] must be greater than [[f_fuente]]. If they recede, smaller. If the result contradicts this, there is a sign or formula error.

**Check 2 — Rest case**: Set [[v_fuente]] equal to zero and [[v_receptor]] equal to zero in the general formula. The result must be exactly [[f_fuente]]. If not, the formula has a writing error.

**Check 3 — Source speed limit**: Verify that [[v_fuente]] is strictly less than [[v_sonido]]. If the source exceeds [[v_sonido]], the formula is not applicable and any result is wrong.
