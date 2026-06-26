const e=`## 1. Measurement on strings

On a vibrating string, propagation speed is measured by tracking a crest or by comparing [[lambda]] with [[f]]. The string is an excellent context because the student can see that each point moves up and down while the pattern travels along the string.

Dominant variable: [[v]], because it summarizes the speed of the pattern travelling along the string.

Validity limit: the string tension must remain approximately constant and the pattern must be preserved during observation.

This application prevents a common error. If only amplitude is observed, it may seem that the faster wave is the taller one. The correct measurement compares horizontal advance per time or crest spacing with frequency. Therefore a small wave can propagate faster than a tall wave if the medium allows it.

In practical work, it is useful to mark two positions on the string or record video. If a crest travels a known distance in a known interval, [[Delta_x]] and [[Delta_t]] give a direct reading. If the pattern is regular, measuring [[lambda]] and counting [[f]] gives a second check.

This also gives a way to discuss uncertainty. Timing one short motion may be noisy, but following several crest advances or repeating the count over a longer interval makes the estimate more stable. The important point is not to make the number look precise, but to ensure that it describes the travelling pattern.

## 2. Sound in air

In sound, [[v]] describes how fast compression and rarefaction advance through air. The value is not the average motion of molecules, which oscillate locally around changing positions.

Dominant variable: [[v]], because it converts audible frequency into acoustic wavelength.

Validity limit: temperature, composition, and air motion should remain reasonably stable.

This application explains why a low tone may have a wavelength of several metres while a high tone has a smaller spatial scale. In the same air, changing [[f]] usually does not change speed much; it mainly changes [[lambda]]. Speed depends on medium properties, not on sound volume.

An acoustic estimate helps check rooms and obstacles. If a sound wave has a wavelength comparable to the size of a door, it bends and diffracts differently from a much shorter wave. Propagation speed bridges perceived sound and the geometry of space.

## 3. Water waves

In surface waves, reading [[v]] helps distinguish short pool waves, wind ripples, and longer swell. The difficulty is that water can be dispersive: not all wavelengths travel at the same speed.

Dominant variable: [[Delta_x]], because many real measurements are made by tracking crests between marks.

Validity limit: the pattern must be sufficiently regular and depth should not change too much during travel.

In a pool or channel, an overhead camera can measure the advance of a crest. Repeating the measure with several crests gives a more robust average. Comparing that reading with the estimate from [[lambda]] and [[f]] helps detect scale or counting errors.

In open sea, wave speed is related to depth, period, and wavelength. The elementary model in this leaf is an entry point, not the full analysis. When a wave changes near the coast, one constant [[v]] may stop describing the whole process.

## 4. Wave refraction

Refraction occurs when propagation speed changes on entering another medium or region. If frequency is conserved, the change in [[v]] appears as a change in [[lambda]]. This reading appears in light, sound, and water waves.

Dominant variable: [[lambda]], because spatial variation reveals the speed change when the source keeps the rhythm.

Validity limit: the boundary must allow waves before and after it to be compared without losing front identity.

The application is powerful: if a wave reduces its wavelength inside a medium while keeping its frequency, the medium is reducing propagation speed. In optics, this prepares the idea of refractive index; in water, it explains turning wavefronts in regions of different depth.

It also helps interpret graphs. In a representation with fronts, closer fronts indicate lower speed if the temporal rhythm has not changed. The comparison is not decorative; it is a physical reading of the medium response.

## 5. Experimental diagnosis

Propagation speed is useful for checking whether a set of data describes one wave. If [[lambda]] and [[f]] give one speed while [[Delta_x]] with [[Delta_t]] gives a very different one, a cause must be found.

Dominant variable: [[Delta_t]], because a poor timing interval can distort the direct reading.

Validity limit: the two methods must measure the same wave train and not mix different pulses.

This diagnosis is used in video analysis, laboratory sensors, acoustics, and vibration studies. An incompatible result may indicate a badly calibrated image scale, incorrect cycle counting, tracking of the wrong crest, or a real medium change.

In engineering contexts, that incompatibility is useful rather than annoying. It can reveal a loose sensor, a changing boundary condition, or a medium whose properties are not uniform across the measured region.

The final application is conceptual: [[v]] forces the question of which pattern propagates, in which medium, and over which interval. That question organizes observation and turns a wave animation into an evaluable physical measurement.
`;export{e as default};
