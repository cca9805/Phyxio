const e=`# Wave Intensity

## Conceptual context

When a wave propagates in three dimensions, its energy spreads over increasingly larger surfaces. This geometric dispersion explains why sound weakens as we move away from a source and why the same light power looks dimmer when it illuminates a larger area.

**Wave intensity** measures that energy concentration: power transported per unit area perpendicular to propagation. Energy flux describes local transport, while intensity [[I_intensidad]] summarizes how much power crosses a measuring surface.

The concept is central in acoustics, optics, and radiometric safety. It lets us compare whispers, loudspeakers, lamps, lasers, and exposure limits through one physical idea: energy delivered per second and per square meter.

## 🟢 Essential level

Imagine a small lamp at the center of a dark room. Light leaves in every direction. Near the lamp it is concentrated on a small surface and looks bright; farther away, the same emission is spread over more wall and looks weaker.

Intensity [[I_intensidad]] measures how much wave power crosses each square meter. If you move twice as far from an ideal sound source, intensity does not fall to one half, but to one quarter. The reason is not that the source emits less, but that the available spherical surface grows much faster.

> [!TIP]
> Think of intensity as the physical brightness of the wave. Near the source, energy is concentrated; far away, it is dispersed. Total energy may be conserved while each square meter receives less.

## 🔵 Formal level

For a point source emitting power [[P_potencia]] isotropically in three dimensions, the intensity at distance [[r_distancia]] is obtained by dividing the total power by the area of the sphere centered on the source:

{{f:intensidad_desde_potencia}}

The spreading area [[A_area]] follows spherical geometry:

{{f:area_esferica}}

This relation expresses the inverse square law. When distance doubles, the receiving surface becomes four times larger and the same power is diluted over four times more area.

In acoustics, intensity is related to measurable sound pressure. For plane waves in a fluid of density [[rho]] and positive propagation speed, intensity depends on the square of the pressure amplitude [[p_presion]]:

{{f:intensidad_desde_presion}}

The quadratic dependence matters: doubling sound pressure quadruples physical intensity. Moderate pressure changes can therefore represent large energy changes.

The sound level in decibels compresses the huge range of audible intensities through a logarithmic scale:

{{f:nivel_sonoro_dB}}

The standard reference is approximately the human hearing threshold. A 10 dB increase in [[beta_nivel]] multiplies intensity by 10, although the subjective sensation of loudness grows more gently.

## 🔴 Structural level

The inverse square law describes only geometric attenuation. In real media, absorption also appears: part of the mechanical energy becomes heat through viscosity, internal friction, or molecular relaxation. Equal distances can therefore produce different losses if humidity, frequency, or material changes.

The point source model works in the far field, when [[r_distancia]] is much larger than the source size. In the near field, the spatial distribution still depends on the emitter geometry and intensity can vary irregularly.

Directional sources do not distribute power equally. A horn loudspeaker, antenna, or laser concentrates energy in selected directions. In those cases the emission angle matters, and axial intensity can be much greater than that of an isotropic source with the same total power.

In rooms and cavities, reflections generate interference. Average intensity can change strongly between nodes, antinodes, and acoustic shadow zones. Measuring intensity therefore requires specifying position, orientation, frequency, and environmental conditions.

## Deep physical interpretation

Intensity as power per unit area joins two readings: how much energy a wave can deliver to a receiver and how concentrated its energy transport is. It is not only an amplitude measure; it is a measurable capacity to transfer energy.

Intensity [[I_intensidad]] is positive and scalar, while energy flux keeps directional information. If only the power crossing a surface is needed, intensity is enough. If the direction of energy motion matters, the vector flux is the better model.

In sound, acoustic pressure changes sign during compressions and rarefactions, but average intensity does not change sign because of that oscillation. What matters is the energy associated with the whole disturbance, not whether pressure is instantaneously above or below atmospheric pressure.

The decibel scale reflects the huge operating range of human hearing. Without a logarithmic scale, comparing the hearing threshold with a concert or a nearby engine would require handling powers per unit area separated by many orders of magnitude.

## Order of magnitude

The hearing threshold corresponds to an intensity close to 10⁻¹² W/m². Normal conversation is roughly of order 10⁻⁶ W/m², intense traffic may be near 10⁻⁴ W/m², and a concert can exceed 10⁻² W/m². The pain threshold approaches intensities of order 10 W/m².

In optics, solar irradiance at Earth surface is of order 10³ W/m² under favorable conditions. Research lasers can reach much larger intensities, enough to produce air ionization or material damage.

To check a calculation, ask whether the result fits the phenomenon. Huge acoustic intensity implies dangerous pressures; extreme light intensity may heat, burn, or ionize. The order of magnitude must make sense before accepting the number.

## Personalized resolution method

To solve wave intensity problems in three dimensions, use a stable sequence:

1. **Identify the propagation geometry**: spherical for a point source, cylindrical for a line source, almost plane for a distant source or collimated beam.

2. **Determine emitted power**: use [[P_potencia]] in watts and check whether it is total power, useful power, or power emitted in a specific direction.

3. **Choose the spreading area**: for an isotropic point source, the surface grows with the square of [[r_distancia]]. For directional sources, include the effective solid angle.

4. **Calculate intensity**: apply the appropriate formal relation and verify that the final units are W/m².

5. **Convert to decibels if needed**: use the logarithmic relation for [[beta_nivel]] when the problem is stated as sound level.

6. **Check additional losses**: include absorption, reflection, or directivity if distance, medium, or geometry requires it.

> [!WARNING]
> Do not confuse the area of a sphere with the area of a circle. That mistake changes the result by a large factor and destroys the physical interpretation.

## Special cases and extended example

**Cylindrical waves**: a long line source spreads energy over cylinders, not spheres. Attenuation with distance is slower than for a point source, which helps explain why highway noise can propagate far.

**Directional sources**: a parabolic reflector or horn loudspeaker concentrates power into an angular interval. Intensity along the main axis can be much larger than uniform emission with the same total power.

**Extended example - outdoor concert**: a sound system emits large power toward the audience. Near the stage, intensity may lie in the concert range; several hundred meters away it decreases through geometric spreading but can still matter for noise regulations. The useful question is not only "how much power is emitted", but "over what area and in what direction is it spread".

## Real student questions

**Why does intensity decrease with the square of distance and not linearly?**

Because total power is distributed over a spherical surface. When distance doubles, that surface quadruples. The same energy per second is spread over more area, so each square meter receives less.

**Why do we use decibels instead of always measuring W/m²?**

Because the audible range is enormous. The logarithmic scale turns very small and very large intensities into manageable numbers, and it also matches human loudness perception more closely.

**How do intensities from two simultaneous sources add?**

First add physical intensities, not decibels. Then, if necessary, convert the total result to sound level. Two equal sources do not double the decibel number; they produce a moderate increase.

**Why is intensity always positive if acoustic pressure oscillates between positive and negative values?**

Because average intensity represents energy transport. Compressions and rarefactions both contribute to wave energy even though they have opposite pressure signs.

## Cross-cutting connections and study paths

Wave intensity continues the study of [energy flux](leaf:fisica-clasica/ondas/energia-y-transporte/flujo-de-energia). The key difference is geometry: in an ideal string, transport can be treated as one-dimensional; in three-dimensional waves, energy spreads over growing surfaces.

In [electromagnetic waves](leaf:fisica-clasica/ondas/ondas-electromagneticas/naturaleza-de-las-ondas-em), the analogous quantity is often called irradiance and is also measured in W/m². In mechanics, the reasoning depends on energy conservation and on the power emitted by the source.

Applications include environmental acoustics, room design, hearing protection, lighting, telecommunications, and radiation safety. In all of them, the practical question is how much energy reaches a real surface and for how long.

## Final synthesis

Wave intensity quantifies the spatial concentration of energy transport. It measures power per unit area and lets us compare sound, light, and electromagnetic waves with the same physical unit.

Its basic law for an isotropic point source comes from geometry: the same power is distributed over larger spherical surfaces. In real situations, directivity, absorption, reflections, and near-field conditions must also be considered.

Understanding this quantity requires separating physical intensity, decibel level, and perception. Intensity says how much energy arrives; sound level translates that intensity into a practical scale; human perception adds a physiological response that is not linear.
`;export{e as default};
