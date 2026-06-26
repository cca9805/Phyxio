const e=`# Errors — Surface Waves

## Conceptual errors

### Error 1: Confusing wave speed with water particle velocity

**Why it seems correct**

When observing a wave at sea, the water appears to move in the propagation direction. The crest advances visibly and creates the illusion that water molecules travel with it. This incorrect analogy with particle motion in a row (as in a stadium wave) reinforces the confusion.

**Why it is incorrect**

In a linear surface wave, water particles describe nearly closed circular trajectories with no net horizontal displacement. What advances is the disturbance—the pattern of crests and troughs—not the fluid itself. Phase [[v]] and the orbital velocity of the particles are completely different quantities and must not be confused.

**Detection signal**

The student writes that [[v]] is the speed at which "water travels" instead of "the interface disturbance travels", or computes the fluid travel time using the wave [[v]].

**Conceptual correction**

[[v]] is the celerity of the waveform (phase velocity). The velocity of the water particles is proportional to the amplitude, points in a circular direction and has no net horizontal component in the linear case. They are independent quantities.

**Contrast mini-example**

A buoy floating on the surface does not advance horizontally with the waves. It describes nearly closed circles while the wave pattern passes beneath it. Any net displacement of the buoy indicates drift currents, not wave transport.

---

### Error 2: Believing [[f]] and [[lambda]] are independent in surface waves

**Why it seems correct**

In an externally driven string, both the vibrator frequency and the observed wavelength can be freely set. The student generalises this independence to surface waves, believing both are free parameters.

**Why it is incorrect**

Surface waves have their own dispersion relation. Once [[k]] (or [[lambda]]) is fixed, [[f]] is uniquely determined: the system cannot oscillate at an arbitrary [[f]] for that [[k]]. This coupling is the essence of dispersion and has no equivalent in a non-dispersive string.

**Detection signal**

The student enters values of [[f]] and [[lambda]] independently without checking whether they are mutually consistent with the leaf's dispersion relation.

**Conceptual correction**

In surface waves, [[f]] results from [[v]] divided by [[lambda]], and [[v]] is given by the dispersion relation for that [[k]]. Given [[k]] and the fluid parameters, [[f]] is completely determined: it is not a free parameter.

**Contrast mini-example**

With [[lambda]] of 0.5 m in pure water, [[k]] is approximately 12.6 m⁻¹ and the gravity [[v]] is approximately 0.88 m/s; then [[f]] is necessarily about 1.76 Hz. Claiming that [[f]] is 5 Hz for that same [[lambda]] violates the dispersion relation.

## Model errors

### Error 3: Applying the gravity formula to millimetre-scale waves

**Why it seems correct**

The gravity formula is the simplest and the one introduced first in textbooks. The student applies it systematically without checking the wave regime, trusting that gravity always dominates.

**Why it is incorrect**

The gravity formula neglects [[sigma]]. For [[lambda]] below approximately 1.7 cm in water, the capillary term exceeds the gravitational term and the simplified formula produces [[v]] much lower than the real value. The computed [[v]] is lower than the actual one because the capillary term contributes positively to the square root.

**Detection signal**

The [[v]] result for a millimetre-scale wave is significantly lower than reference values: capillaries of 1 mm should give [[v]] of the order of 0.3 m/s, but the gravity formula yields less than 0.1 m/s.

**Conceptual correction**

Always check [[lambda]] against the critical capillary length. If [[lambda]] is smaller than 1.7 cm in water, use the capillary formula or the combined one. The gravity formula is only valid when [[lambda]] clearly exceeds that critical length.

**Contrast mini-example**

For [[lambda]] of 1 mm in pure water, the gravity formula gives [[v]] of approximately 0.039 m/s, while the capillary formula gives approximately 0.27 m/s. The difference is a factor of seven: applying the wrong formula for that regime produces radically incorrect results.

---

### Error 4: Applying the deep-water formula in shallow water

**Why it seems correct**

The deep-water formula appears in textbooks without an explicit depth restriction. If the problem does not mention depth, the student assumes the deep-water condition is automatically satisfied.

**Why it is incorrect**

When the depth is less than half of [[lambda]], interaction with the bottom significantly modifies the dispersion relation. Waves slow down and deform. Ignoring the depth leads to overestimating [[v]], sometimes by more than 30%.

**Detection signal**

The problem mentions a beach, a channel, a laboratory tank, or explicitly gives a depth comparable to [[lambda]] or smaller. The presence of a nearby bottom is an unambiguous signal of shallow water.

**Conceptual correction**

Always verify the deep-water condition before applying the standard formula. If the depth is less than [[lambda]] divided by two, use the general dispersion relation including the hyperbolic tangent function of the product of [[k]] and depth.

**Contrast mini-example**

A wave with [[lambda]] of 20 m in 5 m deep water has [[v]] noticeably reduced compared to the deep-water value. Ignoring the bottom overestimates [[v]] by more than 30%, which would produce significantly incorrect arrival-time predictions in a coastal warning system.

## Mathematical errors

### Error 5: Forgetting the 2π factor when converting [[lambda]] to [[k]]

**Why it seems correct**

Intuitively, [[k]] seems to be simply the inverse of [[lambda]]: the inverted spatial scale. This dimensional reasoning is correct in terms of units but omits the geometric factor of 2π that converts a wavelength into a complete phase cycle.

**Why it is incorrect**

The correct definition of [[k]] is two pi divided by [[lambda]]. Omitting the 2π factor makes [[k]] approximately 6.28 times smaller than correct, causing gravity [[v]] to be approximately 2.5 times larger than the real value.

**Detection signal**

Computed [[v]] for metric [[lambda]] is about 2.5 times larger than reference values. In fresh water, for [[lambda]] of 1 m, the correct value is approximately 3.13 m/s; if 2π is omitted, the result is approximately 9.9 m/s.

**Conceptual correction**

Always write the conversion explicitly: [[k]] is two pi divided by [[lambda]]. Wavelength [[lambda]] measures the distance for one complete cycle, and phase advances by 2π radians per cycle, hence the mandatory geometric factor.

**Contrast mini-example**

For [[lambda]] of 1 m, the correct [[k]] is 6.28 m⁻¹; omitting 2π gives [[k]] of 1 m⁻¹. Gravity [[v]] with the incorrect [[k]] gives approximately 9.9 m/s instead of the correct 3.13 m/s, a 216% error that completely invalidates the calculation.

## Interpretation errors

### Error 6: Interpreting [[v]] as the energy transport velocity

**Why it seems correct**

The intuitive idea of "wave speed" suggests it is the speed at which everything the wave carries travels, including energy. If a storm generates a wave 1000 km away, the student directly uses [[v]] to estimate the energy arrival time.

**Why it is incorrect**

[[v]] is the phase velocity: the speed at which a point of constant phase (the crest) moves. Energy is transported at the group velocity, which in dispersive media differs from [[v]]. In the gravity regime, the group velocity is half of [[v]]; using [[v]] directly overestimates the energy arrival speed by a factor of two.

**Detection signal**

The student uses [[v]] to compute the arrival time of storm waves instead of using the group velocity. The result is half the correct time.

**Conceptual correction**

Always distinguish between phase velocity [[v]] (crest celerity) and group velocity (energy transport velocity). In the gravity regime, the group velocity is [[v]] divided by two. In the capillary regime it is [[v]] multiplied by three halves.

**Contrast mini-example**

If a storm generates waves with [[lambda]] of 100 m at [[v]] of 13 m/s, the energy reaches a coast 1000 km away in a time estimated using the group velocity of 6.5 m/s, that is, about 43 hours, not 21 hours. Using phase [[v]] produces a prediction with 100% error.

## Quick self-control rule

Before declaring a surface wave calculation correct, verify five points:

**1. Has the regime been identified?** Compute [[k]] from [[lambda]] using the two-pi factor, and compare the gravitational and capillary terms. If [[lambda]] is greater than 1.7 cm in water, the regime is gravitational; if smaller, capillary. When in doubt, use the full combined formula.

**2. Has the deep-water condition been verified?** The fluid depth must exceed [[lambda]] divided by two. If the problem gives a depth comparable to [[lambda]], the standard formula does not apply.

**3. Are all magnitudes in SI?** Check that [[g]] is in m per second squared, [[k]] in m⁻¹, [[sigma]] in N per metre and [[rho]] in kg per cubic metre. A units error in [[g]] or [[rho]] produces incorrect [[v]] by factors of tens.

**4. Is [[v]] physically reasonable?** For water with [[lambda]] between 1 mm and 10 m, [[v]] should be between approximately 0.2 and 10 m/s. Values outside this range signal a calculation or regime error.

**5. Is phase [[v]] distinguished from group velocity?** If the problem asks for the arrival time of energy or storm waves, use the group velocity, which in the gravity regime is half of [[v]]. Confusing them produces 100% errors in prediction.
`;export{e as default};
