const e=`# Common Errors in Surface Waves\r
\r
The study of wave action presents significant conceptual challenges. Below are the most frequent misunderstandings detailed following the Level 5 shielding structure.\r
\r
## Conceptual errors\r
\r
### Error\r
**Confusing phase velocity with mass transport**\r
- **Why it seems correct:** When observing a wave at sea, we see a shape rapidly advancing towards the coast, giving the illusion of a water current that would pull us along with it.\r
- **Why it is incorrect:** Surface waves are energy disturbances. Water particles describe circular or elliptical orbits, returning almost exactly to the same point after a wave passes.\r
- **Detection signal:** If you calculate a speed [[c]] of 10 m/s and assume that the water will pull you horizontally at that speed, you are making this error.\r
- **Conceptual correction:** Understand that the wave is a flow of information and energy, not a net transport of matter. Water only "oscillates" in place.\r
- **Mini-example:** A buoy in the open sea rises and falls as waves pass, but it does not move away from its original anchoring position despite the crests passing swiftly beneath it.\r
\r
### Error\r
**Believing gravity is the only restoring force at all scales**\r
- **Why it seems correct:** In our daily experience with lakes and oceans, gravity is clearly the force that dominates water behavior and returns the surface to equilibrium.\r
- **Why it is incorrect:** For waves with [[lambda]] less than 1.7 cm, surface tension becomes the dominant force. These are capillary waves, whose physics is opposite in terms of dispersion.\r
- **Detection signal:** Applying the deep-water regime formula to the small ripples produced by an insect or a raindrop on a pond.\r
- **Conceptual correction:** Always check the spatial scale of the problem. If the wave is millimeter-scale, gravity is secondary to surface tension.\r
- **Mini-example:** Surface tension "ripples" in a glass of water travel faster the shorter they are, unlike ocean waves.\r
\r
## Model errors\r
\r
### Error\r
**Applying the deep water model in coastal zones**\r
- **Why it seems correct:** The deep water formula is simpler and does not require knowing the depth [[h]], which tempts using it for convenience.\r
- **Why it is incorrect:** The deep water regime ends when the depth is less than half the wavelength. At the coast, this condition is never met, and the seafloor dominates the physics.\r
- **Detection signal:** Obtaining a speed [[c]] that remains constant in your calculations as the wave approaches the shore.\r
- **Conceptual correction:** Classify the regime by comparing [[h]] with [[lambda]]. If the wave "feels" the bottom, the deep-water regime model will yield erroneous results.\r
- **Mini-example:** Predicting that a giant wave at the beach will travel at the same speed as in the middle of the ocean.\r
\r
## Mathematical errors\r
\r
### Error\r
**Incorrect use of the argument in the hyperbolic tangent function**\r
- **Why it seems correct:** When applying Airy's general formula, it is easy to confuse factors or the order of variables within the argument.\r
- **Why it is incorrect:** The argument must be the dimensionless wave number multiplied by the depth (the corresponding surface-wave expression). Forgetting the the corresponding surface-wave expression is the most frequent error.\r
- **Detection signal:** Obtaining sound speeds (hundreds of m/s) for small pond waves.\r
- **Conceptual correction:** Ensure you work in radians and verify that the the corresponding surface-wave expression argument is a unitless quantity.\r
- **Mini-example:** Calculating the corresponding surface-wave expression instead of the depth-to-wavelength ratio.\r
\r
## Interpretation errors\r
\r
### Error\r
**Misinterpreting tsunami lethality based only on its height in the open sea**\r
- **Why it seems correct:** We tend to assess a wave's danger by how high it looks on the horizon. A 30 cm tsunami seems harmless.\r
- **Why it is incorrect:** A tsunami's danger is not its initial height, but its kilometer-long wavelength and its depth [[h]]. It moves the entire mass of the ocean, not just the surface.\r
- **Detection signal:** Believing that a ship in the open sea is in danger from a tsunami that has not yet reached the coast.\r
- **Conceptual correction:** A tsunami is a massive energy pulse. Its height only becomes destructive when the speed drops upon entering shallow water.\r
- **Mini-example:** A tsunami can pass under a ship in the middle of the Pacific without the crew noticing, only to later destroy a coastal city.\r
\r
## Quick self-control rule\r
Before finalizing a wave speed calculation, check for **Regime Coherence**:\r
1. Calculate the the depth-to-wavelength ratio ratio.\r
2. If you used deep-water regime but the ratio is < 0.5, your result is **invalid**.\r
3. If you used shallow-water regime but the ratio is > 0.05, your result is a **rough approximation**.\r
4. Check the speed: If [[c]] > 30  m/s for a wind wave, check your [[g]] units.`;export{e as default};
