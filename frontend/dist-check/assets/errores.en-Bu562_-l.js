const e=`# Errors in energy flux

## Conceptual errors

### Error 1: Confusing energy flux with energy density

**Why it seems correct**

The student intuitively associates "energy" with "energy flux", thinking that where there is more stored energy there must necessarily be more transport. The word "flux" suggests movement, but the student interprets it as "energy in motion" without distinguishing between what is stored and what actually travels.

**Why it is incorrect**

Energy density [[u_energia]] is the energy per unit volume stored in the medium, while flux [[S_flujo]] is the power per unit area crossing a perpendicular surface. A standing wave can have high energy density at its antinodes but zero net flux because energy does not displace netly in any direction. Flux requires propagation; energy density can exist in static media.

**Detection signal**

The student uses "energy density" and "energy flux" interchangeably as synonyms, or claims that at the antinodes of a standing wave "the flux is maximum because there is more energy".

**Conceptual correction**

Energy flux is the product of energy density by propagation velocity. A wave can have great energy density but zero flux if it does not propagate (standing wave). Remember: density is "fuel in the tank", flux is "fuel circulating through the pipe".

**Mini-example of contrast**

In a string forming a perfect standing wave, the antinodes vibrate with maximum amplitude and store maximum energy. However, the net flux is zero because energy travels equally in both directions. Therefore, high energy density does not imply high flux.

### Error 2: Thinking that medium particles travel with the flux

**Why it seems correct**

Everyday intuition associates energy transport with matter transport. If energy "arrives" from the emitting end to the receiver, it seems logical that the medium particles also arrive there.

**Why it is incorrect**

In transverse waves, the medium particles oscillate perpendicular to the propagation direction without net displacement. A string particle goes up and down around its equilibrium position, but never advances horizontally. The energy flux is horizontal; the particle motion is vertical. They are orthogonal magnitudes.

**Detection signal**

The student describes that "the string particles travel from the shaking hand to the other end", or asks "how does energy arrive if the particles don't move horizontally?".

**Conceptual correction**

Medium particles act as intermediaries that transmit energy to their neighbors through contact forces (tension in strings, pressure in fluids). It is like a row of people pushing each other: each person stays in place, but the "push" (energy) travels through the whole row. Flux describes the journey of energy, not of particles.

**Mini-example of contrast**

A buoy in the sea rises and falls with the waves but does not move horizontally toward the coast. The wave transports energy that eventually breaks on the beach, but the buoy remains almost in the same place. Thus, the energy flux arrives at the coast without the water particles (nor the buoy) arriving there.

## Model errors

### Error 3: Applying the constant flux model to standing waves

**Why it seems correct**

The standing wave is visibly a vibrating wave with energy. If there is energy and the wave "is there", it seems reasonable to suppose that there is energy flux transporting it.

**Why it is incorrect**

A standing wave is the superposition of two progressive waves of equal amplitude and frequency traveling in opposite directions. Each progressive wave transports energy, but the fluxes are equal and opposite, canceling netly. The instantaneous local flux is not zero, but its temporal average at any point is zero. The constant flux model assumes unidirectional propagation, not bidirectional superposition.

**Detection signal**

The student calculates an energy flux for a standing wave using the same formula as for progressive waves, obtaining a positive value when physically the net flux is zero.

**Conceptual correction**

In standing waves, energy becomes confined between nodes, oscillating between kinetic and potential forms without preferred transport direction. The constant flux model does not apply; the energy confinement model must be used where the net flux is zero and the total energy remains constant in each region between nodes.

**Mini-example of contrast**

Consider two hoses shooting water against each other with equal pressure. At the meeting point, the water collides and disperses, but there is no net flux in any direction. Each hose "transports" water, but the complete system has zero net flux. This is what happens with the two progressive waves forming the standing wave.

## Mathematical errors

### Error 4: Confusing angular frequency with ordinary frequency

**Why it seems correct**

Both magnitudes are called "frequency" and both describe how fast the wave oscillates. The student may assume they are interchangeable or that the difference is just a matter of units without physical consequence.

**Why it is incorrect**

Angular frequency [[omega]] (rad/s) and ordinary frequency f (Hz) are related through the full-cycle factor. Because [[omega]] appears squared in the string flux model, using f instead of [[omega]] introduces an error close to forty times the correct value.

**Detection signal**

Energy flux results that are approximately 40 times greater than physically expected values. For example, calculating 400 W/m for a guitar string when the real value is about 10 W/m.

**Conceptual correction**

Angular frequency appears naturally in the differential equations of motion because one complete oscillation corresponds to a full angular cycle. The string flux relation requires [[omega]] in rad/s. If you only know f in Hz, convert before substituting.

**Mini-example of contrast**

For a frequency of 440 Hz (note A), the angular frequency is much larger than the number 440 because it includes the full angular cycle. If you used 440 directly in the string flux relation, the error would be of order forty because of the quadratic dependence. Always verify the conversion to [[omega]].

### Error 5: Forgetting the 1/2 factor in average power

**Why it seems correct**

The instantaneous power of a harmonic wave oscillates at twice the frequency of the wave. The student may assume that the maximum value of instantaneous power is the relevant value, or may derive the formula without temporally averaging.

**Why it is incorrect**

Instantaneous power oscillates between zero and a maximum value, but the physically observable and useful magnitude is the temporal average power. For harmonic waves, temporal averaging introduces the mean factor that appears in the string flux model. Omitting it doubles the correct result.

**Detection signal**

Flux or power results that are exactly double the expected values. For example, calculating 20 W/m when the correct value is 10 W/m.

**Conceptual correction**

The string flux relation gives average transported power per unit length. If instantaneous power were needed, an additional time-dependent oscillatory model would be required. The mean factor represents the temporal average of the quadratic oscillation. In practical applications, average power is always used.

**Mini-example of contrast**

An electrical resistance with alternating current is analyzed with effective values, not with the instantaneous maximum. If you used the maximum instead of the effective value, you would get double the real power. Analogously, in mechanical waves, using the maximum amplitude without temporal averaging doubles the real flux.

## Interpretation errors

### Error 6: Interpreting negative flux as physically impossible

**Why it seems correct**

Power is by definition a positive (or zero) magnitude. A negative energy flux seems to contradict the intuition that "energy always flows" in the "positive" sense of propagation.

**Why it is incorrect**

The sign of energy flux indicates direction: positive in the sense defined as +x, negative in the -x direction. A negative flux simply means that energy is transported in the opposite direction to the positive axis. This is physically valid and common in situations with reflected waves or multiple sources.

**Detection signal**

The student discards negative flux results as "erroneous" or "impossible", or arbitrarily changes the sign to positive without physical justification.

**Conceptual correction**

Flux is a vector magnitude (or with sign in 1D). A flux of -10 W/m transports the same amount of energy as one of +10 W/m, but in opposite direction. In conservative media, if there is an incident wave with flux +S and a reflected wave with flux -S' (smaller in general), the net flux is S - S', which can be positive, negative, or zero depending on whether the incident or reflected wave predominates.

**Mini-example of contrast**

A ball moving to the left has negative velocity (if +x is to the right), but its kinetic energy is positive. Analogously, a wave traveling to the left has negative flux, but transports positive energy. The sign indicates direction, not amount of energy.

## Quick self-control rule

**Mandatory dimensional verification**: Before accepting any energy flux result, verify that the units are W/m (for flux) or W (for power).

- If you obtain J/m³, you have energy density, not flux.
- If you obtain watts without dividing by area or length, you have total power, not flux.
- If you obtain kg·m/s³, convert: it equals W/m (verification: kg·m²/s³ / m² = kg/s³, multiplied by m gives kg·m/s³ = W/m).

**Order of magnitude verification**: Energy flux in musical strings typically varies between 0.1 W/m and 100 W/m. Values outside this range (such as 10⁶ W/m or 10⁻⁶ W/m) require reviewing the input data, especially:

- Did you use ω in rad/s or f in Hz? (Factor ~40 error)
- Did you include the 1/2 factor? (Factor 2 error)
- Is the amplitude in meters (not mm)? (Factor 10⁶ error if confusing m with mm)
- Is the linear density in kg/m (not g/m)? (Factor 10³ error)

**Basic physical verification**: The flux must be positive (or negative according to the sign convention) but must never violate energy conservation. The power emitted by the source must be greater than or equal to the power received at any point (in systems without active amplification).
`;export{e as default};
