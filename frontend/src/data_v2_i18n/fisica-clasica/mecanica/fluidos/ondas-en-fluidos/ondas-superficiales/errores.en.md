# Common Errors in Surface Waves

The study of wave action presents significant conceptual challenges. Below are the most frequent misunderstandings detailed following the Level 5 shielding structure.

## Conceptual errors

### Error
**Confusing phase velocity with mass transport**
- **Why it seems correct:** When observing a wave at sea, we see a shape rapidly advancing towards the coast, giving the illusion of a water current that would pull us along with it.
- **Why it is incorrect:** Surface waves are energy disturbances. Water particles describe circular or elliptical orbits, returning almost exactly to the same point after a wave passes.
- **Detection signal:** If you calculate a speed [[c]] of 10 m/s and assume that the water will pull you horizontally at that speed, you are making this error.
- **Conceptual correction:** Understand that the wave is a flow of information and energy, not a net transport of matter. Water only "oscillates" in place.
- **Mini-example:** A buoy in the open sea rises and falls as waves pass, but it does not move away from its original anchoring position despite the crests passing swiftly beneath it.

### Error
**Believing gravity is the only restoring force at all scales**
- **Why it seems correct:** In our daily experience with lakes and oceans, gravity is clearly the force that dominates water behavior and returns the surface to equilibrium.
- **Why it is incorrect:** For waves with [[lambda]] less than 1.7 cm, surface tension becomes the dominant force. These are capillary waves, whose physics is opposite in terms of dispersion.
- **Detection signal:** Applying the deep-water regime formula to the small ripples produced by an insect or a raindrop on a pond.
- **Conceptual correction:** Always check the spatial scale of the problem. If the wave is millimeter-scale, gravity is secondary to surface tension.
- **Mini-example:** Surface tension "ripples" in a glass of water travel faster the shorter they are, unlike ocean waves.

## Model errors

### Error
**Applying the deep water model in coastal zones**
- **Why it seems correct:** The deep water formula is simpler and does not require knowing the depth [[h]], which tempts using it for convenience.
- **Why it is incorrect:** The deep water regime ends when the depth is less than half the wavelength. At the coast, this condition is never met, and the seafloor dominates the physics.
- **Detection signal:** Obtaining a speed [[c]] that remains constant in your calculations as the wave approaches the shore.
- **Conceptual correction:** Classify the regime by comparing [[h]] with [[lambda]]. If the wave "feels" the bottom, the deep-water regime model will yield erroneous results.
- **Mini-example:** Predicting that a giant wave at the beach will travel at the same speed as in the middle of the ocean.

## Mathematical errors

### Error
**Incorrect use of the argument in the hyperbolic tangent function**
- **Why it seems correct:** When applying Airy's general formula, it is easy to confuse factors or the order of variables within the argument.
- **Why it is incorrect:** The argument must be the dimensionless wave number multiplied by the depth (the corresponding surface-wave expression). Forgetting the the corresponding surface-wave expression is the most frequent error.
- **Detection signal:** Obtaining sound speeds (hundreds of m/s) for small pond waves.
- **Conceptual correction:** Ensure you work in radians and verify that the the corresponding surface-wave expression argument is a unitless quantity.
- **Mini-example:** Calculating the corresponding surface-wave expression instead of the depth-to-wavelength ratio.

## Interpretation errors

### Error
**Misinterpreting tsunami lethality based only on its height in the open sea**
- **Why it seems correct:** We tend to assess a wave's danger by how high it looks on the horizon. A 30 cm tsunami seems harmless.
- **Why it is incorrect:** A tsunami's danger is not its initial height, but its kilometer-long wavelength and its depth [[h]]. It moves the entire mass of the ocean, not just the surface.
- **Detection signal:** Believing that a ship in the open sea is in danger from a tsunami that has not yet reached the coast.
- **Conceptual correction:** A tsunami is a massive energy pulse. Its height only becomes destructive when the speed drops upon entering shallow water.
- **Mini-example:** A tsunami can pass under a ship in the middle of the Pacific without the crew noticing, only to later destroy a coastal city.

## Quick self-control rule
Before finalizing a wave speed calculation, check for **Regime Coherence**:
1. Calculate the the depth-to-wavelength ratio ratio.
2. If you used deep-water regime but the ratio is < 0.5, your result is **invalid**.
3. If you used shallow-water regime but the ratio is > 0.05, your result is a **rough approximation**.
4. Check the speed: If [[c]] > 30  m/s for a wind wave, check your [[g]] units.