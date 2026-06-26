# Wave Speed

## Conceptual context

**Wave speed** describes how fast a wave pattern advances. It does not necessarily measure how fast each point of the medium moves. On a string, for instance, a marked point may move up and down while a crest travels horizontally.

This leaf uses two complementary readings. One combines spatial repetition [[lambda]] with temporal rhythm [[f]]. The other tracks a recognizable phase during a time interval [[Delta_t]] and measures its advance as [[Delta_x]]. Both readings must refer to the same physical pattern.

That requirement is practical, not cosmetic: mixed data can produce a number with correct units while describing no real wave.

## 🟢 Essential level

The central idea is direct: a wave does not only oscillate, it also **carries a shape**. The magnitude [[v]] tells how many metres that shape advances in one second. If a crest quickly reaches a distant position, propagation is fast; if it takes longer, propagation is slow.

Separate three quantities. Wave **height** is not speed. The crest spacing [[lambda]] is not speed by itself. The repetition rate [[f]] is not enough unless the spatial scale is known. Speed appears when a pattern distance is combined with an advance time.

> [!NOTE]
> In this leaf, tracking the wave means tracking a crest, a trough, or an equivalent phase. It does not mean tracking a particular material particle.

## 🔵 Formal level

The first formal relation connects spatial repetition with temporal repetition. In a periodic wave that keeps its shape, the pattern advances one wavelength during one temporal cycle. Therefore [[v]] is obtained by combining [[lambda]] and [[f]]:

{{f:velocidad_onda_frecuencia}}

This relation is a compatibility reading. If the medium fixes an approximately constant [[v]], increasing [[f]] reduces the observed [[lambda]]. If a larger [[lambda]] is measured at the same [[f]], the estimated speed also increases. The physical key is that [[lambda]] and [[f]] belong to the same wave.

The second relation does not require counting full cycles. It is enough to track a crest, a front, or a phase mark during a time interval and measure the pattern displacement:

{{f:velocidad_media_patron}}

This form is especially useful in video analysis or successive records. [[Delta_x]] represents horizontal pattern advance, not vertical displacement of a particle. [[Delta_t]] must be positive and large enough to reduce reading noise, but not so large that the medium changes appreciably.

## 🔴 Structural level

Structurally, [[v]] acts as a **bridge** between space and time. [[lambda]] belongs to the spatial profile; [[f]] belongs to temporal rhythm. Propagation speed states how both aspects are stitched together so that the same pattern appears shifted at successive instants.

This bridge depends on the medium. In an ideal string, speed is set by tension and linear density; in sound, by elastic and inertial properties of the fluid; in electromagnetic waves in vacuum, by field constants. Therefore it is not correct to say that a source always increases speed by increasing [[f]]. Often the source changes the emitted frequency and the medium responds through the wavelength.

The reading with [[Delta_x]] and [[Delta_t]] reveals another layer: every measured speed is an **average** over an interval. If the wave is dispersive, if the shape deforms, or if several frequencies travel together, the visible crest may not represent a single speed. Then one must distinguish phase speed, group speed, and energy-transport speed.

The elementary model works when the pattern is recognizable, the medium is approximately uniform, and amplitude changes do not erase the tracked phase. It fails when reflections mix, when the wave changes regime during measurement, or when the observer tracks a material point instead of a phase.

> [!WARNING]
> A numerically plausible [[v]] may still be physically wrong if [[lambda]], [[f]], [[Delta_x]], and [[Delta_t]] do not come from the same pattern.

## Deep physical interpretation

Propagation speed is not an isolated property of the wave drawing. It is a property of the **coupling between wave and medium**. Two waves with the same [[lambda]] may advance at different speeds in different media; two waves with the same [[v]] may have different frequencies and wavelengths.

There is also an important causal reading. The source may impose the oscillation rhythm, but the medium determines how the disturbance is transmitted. That is why, when a wave enters another medium, wavelength often changes while frequency is conserved. Wave speed summarizes that medium response.

## Order of magnitude

On a classroom string, [[v]] may range from a few m/s to tens of m/s. For sound in air, the usual order is hundreds of m/s. For light, the scale is hundreds of millions of m/s. If a slow string measurement gives an air-sound scale, or if an ordinary sound wave gives metres per hour, the result should be checked.

## Personalized resolution method

First decide whether the data come from **cycles** or from **direct tracking**. If [[lambda]] and [[f]] are known, use the periodic reading. If a crest is observed at two instants, use [[Delta_x]] and [[Delta_t]]. Then verify that all magnitudes belong to the same medium, wave, and phase.

Finally interpret the scale. Ask whether the obtained speed is plausible for the medium, whether changing [[f]] should change [[lambda]], and whether the graph shows pattern advance or only local oscillation.

## Special cases and extended example

A subtle case appears when a standing wave seems to have fixed crests. There, one should not read [[v]] from the nodes, because the total pattern is not translating. The relevant speed belongs to the travelling waves that superpose to form the standing wave.

Another case appears in dispersive media. A pulse may have an envelope that advances at a speed different from the internal crests. This leaf treats a simple periodic wave or a recognizable phase; if the pulse changes shape, interpretation must be more careful.

As an extended example, imagine a crest moving 1.8 m in 0.60 s in a water channel. The direct reading gives a speed near 3 m/s. If crests are also counted 0.75 m apart and four cycles pass each second, the periodic reading also gives near 3 m/s. The agreement indicates that the same pattern was measured.

## Real student questions

**Is propagation speed the speed of a particle of the medium?** No. On a string, each point oscillates about equilibrium while the shape travels along the string.

**If I increase frequency, does [[v]] always increase?** Not necessarily. In many media, speed is set by the medium and wavelength adjusts.

**Why do I need [[lambda]] if I already know [[f]]?** Because [[f]] only counts cycles per second. The spatial advance per cycle is still missing.

**Can I use any interval as [[Delta_t]]?** Only if the same phase is tracked and the pattern does not change significantly during that interval.

## Cross-cutting connections and study paths

This leaf connects directly with [wavelength](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/longitud-de-onda) and [frequency and period](leaf:fisica-clasica/ondas/fundamentos/magnitudes-ondulatorias/frecuencia-y-periodo). Together they form the minimum block for reading travelling waves.

It also prepares [wave equation](leaf:fisica-clasica/ondas/fundamentos/ecuacion-de-onda), refraction, and dispersion. In those topics, changing [[v]] is no longer just a calculation; it becomes evidence of a medium or regime change.

## Final synthesis

Wave speed [[v]] measures the advance of the wave pattern. It is understood correctly when spatial scale, temporal rhythm, and tracking of the same phase are tied to a well-defined medium.
