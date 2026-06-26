const e=`## Conceptual errors

### Error 1: confusing pattern with particle

**Why it seems correct:** everyday intuition associates motion with material objects. If a string moves, it seems natural to think that wave speed is the speed of one point of the string. This is a wrong analogy between particle and shape.

**Why it is incorrect:** [[v]] measures pattern advance. A point of the medium may oscillate while a crest travels in another direction. In sound, molecules oscillate locally, but the disturbance advances.

**Detection signal:** the student looks at height or vertical motion and does not identify any tracked crest, front, or phase.

**Correction:** to measure propagation, one must track a recognizable phase. If a material particle is tracked, the topic is local oscillation, not propagation speed.

**Contrast mini-example:** a float moves up and down almost in place while a crest passes it. The float does not cross the pool, but the pattern does advance.

## Model errors

### Error 2: using the ideal model outside its domain

**Why it seems correct:** the model with [[lambda]] and [[f]] is so simple that it invites use on any wave drawing. The cognitive mechanism is overgeneralization of a useful rule.

**Why it is incorrect:** the simple relation assumes a recognizable periodic wave and an approximately uniform medium. If there is dispersion, strong reflection, or a standing wave, one single [[v]] may not describe the whole phenomenon.

**Detection signal:** two methods give very different speeds, or the crest being tracked disappears, mixes, or changes shape.

**Correction:** before calculating, decide whether the pattern travels as a recognizable shape. If it does not, switch to a phase, group, or superposition model.

**Contrast mini-example:** in a standing wave, nodes remain fixed. Using those nodes to read pattern advance would give a false conclusion about propagation.

## Mathematical errors

### Error 3: mixing data from different waves

**Why it seems correct:** when all data have familiar units, it seems enough to combine them. The confusion comes from treating [[lambda]], [[f]], [[Delta_x]], and [[Delta_t]] as loose numbers rather than measures of the same pattern.

**Why it is incorrect:** the calculated speed has meaning only if the magnitudes come from the same wave. A wavelength from one image and a frequency from another source can produce correct units and wrong physics.

**Detection signal:** the statement does not identify that frequency and wavelength belong to the same record, or the student does not check that compatibility.

**Correction:** each datum must be anchored to the same source, medium, instant, and wave train. If any of those changes, the measurement must be repeated.

**Contrast mini-example:** measuring crests from a slow wave and using the frequency of a vibrator in another mode may give a plausible speed, but it corresponds to no observed wave.

## Interpretation errors

### Error 4: believing that higher frequency always means higher speed

**Why it seems correct:** in everyday experience, doing something more times per second seems to mean going faster. This is an intuitive extrapolation from temporal rhythm to spatial propagation.

**Why it is incorrect:** [[f]] only counts cycles per second. To obtain [[v]], the space advanced by each cycle also matters, namely [[lambda]]. In many media, changing frequency compresses or separates crests without changing speed much.

**Detection signal:** the student compares two waves only through [[f]] and mentions neither the medium nor the wavelength.

**Correction:** propagation speed must be read as a union of spatial scale and temporal rhythm, or as measured advance during an interval.

**Contrast mini-example:** two sounds in the same air may have very different frequencies and travel at nearly the same speed. What visibly changes is the spatial separation of the cycle.

## Quick self-control rule

Before accepting a result for [[v]], apply this sequence. First ask which phase was tracked. Then check that [[lambda]] and [[f]] come from the same pattern, or that [[Delta_x]] and [[Delta_t]] describe the same tracking.

Then compare the order of magnitude with the medium. If the value seems to belong to another phenomenon, check scale, timing, cycle count, and system definition. Correct units are not enough: the result must answer the physical question about pattern advance.
`;export{e as default};
