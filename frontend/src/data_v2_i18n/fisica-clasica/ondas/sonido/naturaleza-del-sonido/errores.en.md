## Conceptual errors

### Error 1: Confusing acoustic pressure with absolute pressure

**Why it seems correct**

Sound travels through air and air has pressure. The mental association between sound and atmospheric pressure is immediate and seems logical: if air "has" a pressure, and sound is a vibration of air, then the pressure produced by sound should be of the order of atmospheric pressure.

**Why it is incorrect**

[[p_ac]] is only the **perturbation** from the equilibrium value, not the total pressure. The total pressure at a point with sound is the sum of static pressure (approximately 101 325 Pa) plus acoustic pressure. In normal conversation, [[p_ac]] is of the order of 0.02 Pa: six orders of magnitude below static pressure. Confusing the two leads to calculating intensities millions of times greater than the real values.

**Detection signal**

The student obtains values of [[p_ac]] of the order of kilopascals for everyday sounds, or claims that sound "compresses air to twice atmospheric pressure".

**Conceptual correction**

Acoustic pressure is always a tiny fluctuation on top of the rest pressure. Its amplitude [[p0_ac]] ranges from 20 micropascals (hearing threshold) to about 20 pascals (pain threshold), always much smaller than atmospheric pressure.

**Contrast mini-example**

A room loudspeaker produces a level of 90 dB. That corresponds to [[p0_ac]] of approximately 0.63 Pa: a fraction of a thousandth of atmospheric pressure. If a student calculates [[p0_ac]] of several kilopascals for that level, they have confused the quantities.

---

### Error 2: Believing that sound is a transverse wave

**Why it seems correct**

The most familiar waves in basic teaching are water surface waves, where the visible disturbance is perpendicular to the propagation direction. When representing sound with a sinusoidal curve of [[p_ac]] vs position, the graph seems to evoke transverse wave motion, like that of an oscillating string.

**Why it is incorrect**

In sound, **particle displacement** [[xi]] is parallel to the propagation direction, not perpendicular. The sinusoid of [[p_ac]] in the graph represents pressure at different points in space, not the physical shape of the medium. Particles move back and forth in the same direction the wave travels, creating compression and rarefaction zones. Transverse waves (such as string waves) have displacement perpendicular to propagation.

**Detection signal**

The student draws particle displacement arrows perpendicular to the propagation direction, or claims that sound could be polarised like light.

**Conceptual correction**

Sound in gases and liquids is always longitudinal: [[xi]] is parallel to the propagation vector. This is why sound cannot be polarised: there is no perpendicular oscillation plane to select. Only waves in solids can have transverse components (shear waves).

**Contrast mini-example**

If sound were transverse, it would be possible to block it with a polarising filter, as is done with light. This does not happen: there is no device that polarises sound the way light is polarised, because the motion of sound particles in fluids has no transverse component.

## Model errors

### Error 1: Assuming that the speed of sound is independent of the medium

**Why it seems correct**

In many problems, [[v_son]] of 340 m/s is used without specifying the medium, suggesting it is a universal constant, like the speed of light. Furthermore, [[f_son]] does not change when changing medium, which may make students think [[v_son]] does not change either.

**Why it is incorrect**

[[v_son]] depends on the elastic properties and density of the medium. In water it is about four times greater than in air; in steel it is about fifteen times greater. The value 340 m/s is specific to **air at room temperature**. Using that value in water or in a solid will produce a [[lambda_son]] that is wrong by a factor of 4 to 15.

**Detection signal**

The student always uses [[v_son]] of 340 m/s regardless of medium, or calculates [[lambda_son]] in water using the air value.

**Conceptual correction**

Before using [[v_son]], identify the medium. For air at 20 °C, use 343 m/s; for water, 1480 m/s; for steel, approximately 5100 m/s. In air, speed varies with temperature at approximately 0.6 m/s per degree Celsius.

**Contrast mini-example**

A bat echolocates at 50 kHz. In air, [[lambda_son]] would be 343/50000, approximately 6.9 mm. If the bat were underwater and the student used the same [[v_son]], they would get the same [[lambda_son]]. But the correct [[lambda_son]] in water would be 1480/50000, approximately 29.6 mm, more than four times larger, completely changing the resolution capability of the system.

### Error 2: Ignoring the phase shift between acoustic pressure and particle displacement

**Why it seems correct**

It is natural to assume that when [[p_ac]] is maximum (maximum compression), particles are also at their position of maximum displacement. The mental image is of a "push" that carries particles forward to the point of greatest pressure.

**Why it is incorrect**

In the harmonic wave, [[p_ac]] and [[xi]] are **90° out of phase**. The pressure maximum occurs where the displacement gradient is maximum, not where displacement itself is maximum. Particles at the point of maximum compression are passing through their equilibrium position with maximum velocity, not at their maximum displacement position.

**Detection signal**

The student draws the [[p_ac]] peak coinciding with the [[xi]] peak at the same position, or calculates particle velocity as zero at the point of maximum pressure.

**Conceptual correction**

Where [[p_ac]] is zero, [[xi]] is maximum and particle velocity is zero. Where [[xi]] is zero, [[p_ac]] is maximum and particle velocity is maximum. This phase shift is a direct consequence of the wave equation and can be verified by inspecting the Coord graph of both quantities.

**Contrast mini-example**

Applying the incorrect idea: if at the compression peak particles were at maximum displacement, they would be stationary at that point. But stationary means no velocity, and without velocity they could not compress the next layer. Thus, the wave could not propagate, contradicting observation.

## Mathematical errors

### Error 1: Confusing ordinary frequency with angular frequency

**Why it seems correct**

Both are called "frequency" and both describe how fast something oscillates. In many textbooks the wave equation is written with angular frequency without explicitly warning of the difference from ordinary frequency.

**Why it is incorrect**

Angular frequency is two times pi times [[f_son]]. If [[f_son]] is substituted where the formula expects angular frequency, the result for [[lambda_son]] is divided by two pi, about six times smaller than correct. If angular frequency is substituted where the formula expects [[f_son]], [[lambda_son]] is multiplied by two pi.

**Detection signal**

The student obtains [[lambda_son]] that differs from the expected value by a factor of approximately 6.28 (two pi), either too large or too small.

**Conceptual correction**

The pressure wave equation uses ordinary frequency [[f_son]] in Hz multiplied by two pi, or equivalently, angular frequency directly. Identify in each formula whether the frequency shown is ordinary or angular before substituting.

**Contrast mini-example**

For a 440 Hz note in air, the correct [[lambda_son]] is 343/440, approximately 0.78 m. If by mistake angular frequency (2·3.14·440 ≈ 2765 rad/s) is used as if it were [[f_son]], the result would be 343/2765, approximately 0.12 m: six times smaller than correct.

## Interpretation errors

### Error 1: Interpreting acoustic intensity as proportional to acoustic pressure

**Why it seems correct**

The subjective sensation of loudness grows when acoustic pressure grows. The relationship seems direct: more pressure, more intensity. Furthermore, direct proportionality is the simplest and most familiar type of relationship.

**Why it is incorrect**

[[I_ac]] is proportional to the **square** of [[p0_ac]]. This has immediate practical consequences: if [[p0_ac]] is doubled, [[I_ac]] quadruples, not doubles. If [[p0_ac]] is multiplied by ten, [[I_ac]] increases one hundredfold. The error leads to severely underestimating intensity for large amplitudes and to not understanding why the decibel uses a logarithmic scale.

**Detection signal**

The student claims that "doubling acoustic pressure doubles intensity", or calculates [[I_ac]] as directly proportional to [[p0_ac]] without squaring.

**Conceptual correction**

The correct relationship between [[I_ac]] and [[p0_ac]] is quadratic. This dependence is analogous to that of electrical power and voltage: power is proportional to the square of voltage because energy per cycle is proportional to the square of the oscillation amplitude.

**Contrast mini-example**

A loudspeaker emits at 80 dB and it is desired to increase to 100 dB, i.e., increase [[I_ac]] by a factor of one hundred. To do this, it is enough to multiply [[p0_ac]] by ten (not by one hundred). If the student confuses the relationship and believes it is linear, they will think [[p0_ac]] must be multiplied by one hundred, overestimating the required amplitude by a factor of ten.

## Quick self-control rule

Before declaring a nature-of-sound calculation valid, verify:

1. Has the medium been identified and the correct [[v_son]] for that medium been used?
2. Is the calculated [[lambda_son]] in the expected range for the given [[f_son]] (between millimetres and tens of metres for the audible range in air)?
3. Is the obtained [[p0_ac]] consistent with the described sound level (hearing threshold is 20 µPa and pain threshold is 20 Pa)?
4. Has [[p0_ac]] been squared when calculating [[I_ac]]?
5. Has [[f_son]] been used in Hz (not in rad/s) in the kinematic relation between [[v_son]], [[f_son]], and [[lambda_son]]?

If any of these checks fails, the result is compromised from its root.
