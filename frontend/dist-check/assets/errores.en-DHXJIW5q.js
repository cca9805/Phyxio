const e=`# Common errors

## Conceptual errors

### Error 1

**Why it seems correct**: Since the wave enters another medium, it may seem natural that all its properties change at once.

**Why it is incorrect**: At a stationary boundary, frequency is fixed by the source. The medium modifies [[v_m]] and [[lambda_m]], not the imposed temporal rhythm.

**Detection sign**: The student changes frequency to explain refraction or wavelength shortening.

**Conceptual correction**: Keep frequency as the bridge between media and adjust spatial scale through [[n]].

**Contrast mini-example**: Green light remains green through glass, although its wavelength inside glass is shorter.

### Error 2

**Why it seems correct**: [[c]] appears in many electromagnetic-wave formulas and is memorized as the speed of light.

**Why it is incorrect**: [[c]] is the vacuum reference speed. Inside an ordinary medium one uses [[v_m]], determined by the index [[n]].

**Detection sign**: The calculation gives the same speed in air, water, and glass without justifying equal indices.

**Conceptual correction**: Use [[c]] only as reference and apply the medium index whenever material is present.

**Contrast mini-example**: In common glass, propagation is slower than in air even when the source is the same.

## Model errors

### Error 3

**Why it seems correct**: A tabulated index looks like a fixed property of the material.

**Why it is incorrect**: [[n]] may depend on frequency, temperature, polarization, or direction. A tabulated value applies only under specific conditions.

**Detection sign**: The same index is used for visible light, microwaves, and ultraviolet without checking context.

**Conceptual correction**: State spectral region and material conditions before choosing the index.

**Contrast mini-example**: A prism separates colors because the effective index is not exactly the same for all frequencies.

### Error 4

**Why it seems correct**: The simple real-index model describes many classroom examples.

**Why it is incorrect**: In absorbing or strongly dispersive media, one phase speed does not describe loss, pulse broadening, or energy transport.

**Detection sign**: The student interprets a deformed pulse with the same formula used for an ideal monochromatic wave.

**Conceptual correction**: Switch to a dispersive, absorbing, or group-speed model when the phenomenon requires it.

**Contrast mini-example**: A fiber for short pulses requires dispersion control, not only phase-speed calculation.

## Mathematical errors

### Error 5

**Why it seems correct**: Dividing or multiplying by [[n]] may look symmetric when the result is not interpreted.

**Why it is incorrect**: In an ordinary medium with index above one, [[v_m]] and [[lambda_m]] must decrease relative to their vacuum values.

**Detection sign**: A larger index produces speed greater than [[c]] or wavelength larger than [[lambda0]].

**Conceptual correction**: Before calculating, anticipate the physical direction of change: larger index means lower phase speed.

**Contrast mini-example**: For glass, the result should lie below the vacuum reference.

### Error 6

**Why it seems correct**: [[epsilon_r]] and [[mu_r]] are dimensionless and may seem interchangeable.

**Why it is incorrect**: They represent different physical responses. Permittivity describes electric response and permeability describes magnetic response.

**Detection sign**: One is substituted for the other without checking formula or conceptual units.

**Conceptual correction**: Read the index as the result of an effective electromagnetic response, not as an isolated number.

**Contrast mini-example**: In many optical dielectrics [[mu_r]] is close to one, but it does not disappear from physical reasoning.

## Interpretation errors

### Error 7

**Why it seems correct**: If light travels more slowly, all its effects may seem less energetic.

**Why it is incorrect**: Photon energy depends on frequency, not on wavelength inside the material by itself.

**Detection sign**: The student concludes that a color loses energy by entering transparent glass.

**Conceptual correction**: Separate spatial propagation from photon energy and intensity.

**Contrast mini-example**: A visible photon does not change color just because the wave has shorter wavelength inside glass.

## Quick self-control rule

If you changed frequency when changing medium without a new source, review the reasoning. At an ordinary stationary boundary, the medium modifies [[v_m]] and [[lambda_m]] through [[n]], while frequency preserves the temporal identity of the radiation.
`;export{e as default};
