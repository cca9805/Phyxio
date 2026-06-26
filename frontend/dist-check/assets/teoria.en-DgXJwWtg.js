const e=`# Energy Flux

## Conceptual context

Energy in a wave does not remain static: it flows from the source that generates it toward receivers that absorb it. This **energetic transport** is what distinguishes waves from other physical disturbances. A standing wave, for example, stores energy but does not transport it in a net manner. In contrast, a progressive wave functions as a **dynamic energy conduit**, transferring the capacity to do work through space.

Energy flux describes **how much power crosses each unit of area perpendicular** to the direction of propagation. This magnitude proves fundamental in acoustics (sound intensity), optics (irradiance), and electromagnetism (Poynting vector). Understanding energy flow enables the design of efficient transmission systems, protection from harmful radiation, and optimization of signal reception.

## 🟢 Essential level

Imagine a taut string oscillating transversely. Each segment of the string moves up and down, but the **energy travels horizontally**, following the direction of the string. This is the energy flux: the movement of the disturbance transports the capacity to do work from the hand that shakes the string to the opposite end.

The **energy flux density** [[S_flujo]] indicates how much power flows per square meter perpendicular to the propagation. Its value depends on two essential factors: how much energy the medium stores (the energy density [[u_energia]]) and how fast that energy moves (the velocity [[v]]). A very taut string (high velocity) can transport much energy even with moderate amplitude.

> [!TIP]
> Flux is like the discharge of a river: it depends on how much water there is (density) and how fast it flows (velocity). Doubling either one doubles the transport.

## 🔵 Formal level

The fundamental relationship between energy flux, energy density, and propagation velocity establishes that flux is the product of density times velocity:

{{f:flujo_energia_densidad}}

This vector equation describes how energy stored in the medium moves with the disturbance. In one-dimensional waves such as those on strings, flux is expressed in watts per meter (W/m) since the perpendicular area is simply the unit length along the string.

For transverse waves on strings, the energy density depends on the linear density [[mu]], the angular frequency [[omega]], and the square of the amplitude [[A]]. Substituting into the flux expression we obtain:

{{f:flujo_energia_cuerda}}

This relationship reveals the **quadratic dependence** on both amplitude and frequency. Doubling the amplitude quadruples the flux; doubling the frequency also quadruples the flux. This non-linearity explains why small changes in wave excitation produce large variations in its energetic transport.

The total power [[P_onda]] transported by the wave through a perpendicular section results from the product of flux by the intercepted area:

{{f:potencia_desde_flujo}}

This equation connects local intensity (flux) with the total capacity for energy transmission (power).

## 🔴 Structural level

Energy flux in mechanical waves emerges from the **interaction between kinetic and potential components** of stored energy. In a harmonic wave, these components oscillate spatially out of phase: where transverse velocity is maximum (kinetic energy dominant), deformation is minimum (minimum potential energy). However, both contribute equally to the temporal average, and their sum determines the total density that moves.

The direction of the flux follows the **direction of wave propagation**, not the direction of oscillation of the medium's particles. In transverse waves, particles oscillate perpendicular to the direction of energy flow. This distinction is crucial: the propagation velocity [[v]] determines the direction of transport, while the transverse oscillation velocity describes the local motion of particles.

In the **limit of standing waves**, the net flux vanishes because the resulting wave is the superposition of two progressive waves of equal amplitude and opposite directions. At displacement nodes, the flux is maximum (maximum local transmission); at antinodes, the flux is zero (purely stored energy, without net transport). This spatial distribution of flux characterizes the energetic structure of standing waves.

## Deep physical interpretation

Energy flux constitutes the **observable manifestation of wave transport**. While energy density describes the local state of the medium, flux reveals the **causal connectivity** between different regions of space: a disturbance at the source affects the receiver precisely because flux transports energetic information between them.

The **sign of the flux** acquires fundamental physical meaning. A positive flux indicates transport in the propagation direction defined as positive; a negative flux, transport in the opposite direction. In dissipative media, the flux decreases monotonically from the source, reflecting the conversion of mechanical energy into thermal energy. In conservative media, the flux remains constant (in steady state), guaranteeing global conservation of energy.

The **quadratic proportionality** of flux with amplitude and frequency has profound implications. Systems operating with high-frequency waves can transmit substantial energy with reduced amplitudes, minimizing undesired deformations of the medium. Conversely, low-frequency systems require large amplitudes to transport comparable power, which can induce nonlinear effects and additional dissipation.

## Order of magnitude

Wave energy flux spans extraordinarily wide ranges. In **audible sound waves**, the hearing threshold corresponds to a flux of approximately 10⁻¹² W/m² (0 dB), while pain is reached with 10 W/m² (130 dB) — a factor of 10¹³ between both extremes. This demonstrates the extraordinary sensitivity of the human ear and the wide range of intensities that waves can present.

In **electromagnetic waves**, solar irradiance at Earth is approximately 10³ W/m². High-power lasers reach fluxes of 10¹² W/m² or higher, capable of instantaneously ionizing materials. Radio astronomy signals, in contrast, can be as weak as 10⁻²⁶ W/m², requiring gigantic antennas and ultrasensitive electronics for their detection.

To detect calculation errors, verify that the resulting flux does not exceed physically reasonable values for the system considered. In musical strings, fluxes exceeding 10³ W/m would indicate destructive amplitudes or inaudible frequencies. In acoustic systems, negative fluxes (considering scalar magnitude) are physically impossible without an explicit redefinition of the sign convention.

## Personalized resolution method

To calculate energy flux in wave systems, follow this operational sequence:

1. **Identify the wave type**: mechanical waves on strings, acoustic waves, electromagnetic waves, etc. Each type has specific expressions for energy density.

2. **Determine the energy density**: for waves on strings, calculate [[u_energia]] from [[mu]], [[omega]], and [[A]]. Verify that all magnitudes are in coherent units (SI).

3. **Obtain the propagation velocity**: use the appropriate expression for the medium. On strings, [[v]] depends on tension and [[mu]].

4. **Apply the flux relationship**: calculate [[S_flujo]] as the product of [[u_energia]] times [[v]]. The dimensional check must close as power flux per area.

5. **Calculate total power**: if the intercepted perpendicular area is known, obtain [[P_onda]] by multiplying [[S_flujo]] by the area.

> [!WARNING]
> Always verify that angular frequency [[omega]] is used in rad/s, not ordinary frequency in Hz. The error by factor (2π)² ≈ 39.5 is frequent and significant.

## Special cases and extended example

**Standing waves**: In a perfect standing wave, the net flux is zero at any point because energy flows equally in both directions. However, locally there are instantaneous non-zero fluxes that oscillate temporally. Energy becomes "trapped" between nodes, oscillating between kinetic and potential forms without net transport.

**Waves in dissipative media**: In real strings with friction or in tubes with acoustic absorption, flux decreases exponentially with distance traveled. The power available at the receiver is less than that emitted by the source, and the difference converts to heat.

**Extended example - Guitar string**: A steel string with [[mu]] = 4×10⁻⁴ kg/m, tensioned to propagate at [[v]] = 300 m/s, vibrating with [[A]] = 2 mm and [[omega]] = 2000 rad/s (fundamental frequency ~318 Hz), presents an energy density of approximately 1.6 J/m. The resulting energy flux is 480 W/m, meaning each meter of string transmits almost half a kilowatt of mechanical power. This power gradually dissipates in the air (producing sound) and in the string supports, damping the vibration in a few seconds.

## Real student questions

**Why does flux depend on the square of amplitude rather than linearly?**

The kinetic energy of a string element depends on the square of its transverse velocity, and this velocity is proportional to amplitude times frequency. Similarly, the potential energy depends on the square of the deformation, also proportional to amplitude. When combining both contributions, the energy density becomes proportional to [[A]]², and therefore the flux inherits this quadratic dependence.

**How can there be energy flux if the particles of the medium only oscillate in their equilibrium position?**

Individual particles do not travel with the wave, but they do transmit energy to their neighbors through tension forces (in strings) or pressure (in fluids). It is like a row of dominoes: each piece remains in its place, but the disturbance (and associated energy) travels through the interaction between consecutive elements.

**Why is the flux of a standing wave zero if the string continues vibrating?**

In the standing wave there are two progressive waves traveling in opposite directions. Each one transports energy, but the fluxes are equal and opposite, canceling out net. Energy becomes confined between nodes, exchanging locally between kinetic and potential forms, without preferred transport direction.

**What happens to the flux when the wave reaches a fixed end of the string?**

At a fixed end, the incident flux reflects completely. For an instant, the local net flux can vanish or even invert transiently. The fixed end does not absorb energy (ideally), so all the power that arrives must return toward the source, establishing a standing wave if conditions are appropriate.

## Cross-cutting connections and study paths

Energy flux connects directly to [wave intensity](leaf:fisica-clasica/ondas/energia-y-transporte/intensidad-ondulatoria), where power per unit area is analyzed in three-dimensional contexts such as sound in air or light in space.

In [electromagnetic waves](leaf:fisica-clasica/ondas/ondas-electromagneticas/naturaleza-de-las-ondas-em), the concept of flux is formalized through the **Poynting vector**, which describes the energetic transport of oscillating electric and magnetic fields. The mathematics is different but the physical interpretation remains: field energy density multiplied by propagation velocity.

The conservation of energy flux in the absence of dissipation links to the principles of [work and energy](leaf:fisica-clasica/mecanica/trabajo-y-energia/teorema-trabajo-energia) in classical mechanics. The power transmitted by the wave equals the work per unit time that the wave can perform on a receiver.

To delve into technological applications, study [standing waves](leaf:fisica-clasica/ondas/ondas-mecanicas/ondas-en-cuerdas/ondas-estacionarias) and their use in musical instruments, where energy confinement (zero net flux but maximum storage) is the fundamental operating principle.

## Final synthesis

Energy flux constitutes the **dynamic manifestation of wave transport**, quantifying how much power crosses each unit of area perpendicular to propagation. Its quadratic dependence on amplitude and frequency confers upon waves an extraordinary capacity to transmit energy with high efficiency when operated in appropriate ranges.

Understanding flux requires distinguishing between **storage** (energy density) and **transport** (flux), between **local oscillation** (particle velocity) and **global propagation** (wave velocity). In conservative media, flux remains constant from source to receiver; in real media, attenuation by dissipation gradually reduces the available power.

Progressive waves transport energy; standing waves confine it. This structural distinction, governed by the direction and magnitude of flux, determines the energetic behavior of all wave systems and underlies innumerable technological applications, from wireless transmission to mechanical resonance.
`;export{e as default};
