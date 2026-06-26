## Conceptual errors

### Confusing nodes with minimum transverse velocity points

**Why it seems correct**: Nodes do not displace, which seems to indicate they have zero velocity at all times, like an object at rest.

**Why it is incorrect**: At a node, transverse displacement is zero at all times, but that is due to permanent destructive interference, not to the point being dynamically still. Nodes experience maximum internal shear tension variations in the string.

**Detection signal**: The student describes that "nodes barely move" or that "they vibrate very slowly". They may also incorrectly calculate kinetic energy assuming zero velocity at nodes.

**Conceptual correction**: Nodes are points where two traveling waves always arrive with opposite phase, permanently canceling displacement. Oscillation amplitude is null, but tension varies periodically and the point experiences maximum shear stresses.

**Contrast mini-example**: In the fundamental mode, the central point (antinode) has maximum transverse velocity when crossing equilibrium and zero velocity at maximum excursion. The fixed end (node) always has zero displacement, but the internal tension of the string at that point varies periodically.

### Including the ends as antinodes when counting the mode number

**Why it seems correct**: The ends are the most visible and prominent points of the string; counting all special points including them seems to give the mode number.

**Why it is incorrect**: The ends of a fixed string are always nodes, never antinodes. The number of antinodes is exactly equal to the mode number [[numero_armonico]], while the number of nodes is [[numero_armonico]] plus 1 (including both ends).

**Detection signal**: The student claims the fundamental mode has two antinodes (confusing ends with antinodes) or that the second mode has only one central antinode.

**Conceptual correction**: In mode [[numero_armonico]] there are exactly [[numero_armonico]] antinodes separated by [[numero_armonico]] minus 1 internal nodes, plus the two end nodes. The ends are always nodes in a fixed-fixed string.

**Contrast mini-example**: For [[numero_armonico]] equal to 3, there are three antinodes at 1/6, 3/6 and 5/6 of [[longitud_cuerda]] from one end, with nodes at 0, 2/6, 4/6 and 1 of [[longitud_cuerda]]. Counting four antinodes by including one end is incorrect.

## Model errors

### Confusing propagation velocity with the velocity of the standing pattern

**Why it seems correct**: Visually, the pattern of nodes and antinodes does not advance along the string, suggesting zero propagation velocity for the standing wave.

**Why it is incorrect**: The standing wave has no group or phase velocity like a traveling wave, but the traveling waves that form it do have velocity [[velocidad_propagacion]]. This velocity [[velocidad_propagacion]] is what appears in the frequency formula and determines the spectrum of the system. Claiming zero velocity leads to predicting zero frequency for all modes.

**Detection signal**: The student sets velocity equal to zero in the frequency formula, obtaining zero frequency for all modes of the system.

**Conceptual correction**: The velocity [[velocidad_propagacion]] in the frequency formula is the propagation velocity of the component traveling waves, not the displacement velocity of the stationary pattern. The pattern does not travel, but the waves that produce it do travel at velocity [[velocidad_propagacion]].

**Contrast mini-example**: A string with [[velocidad_propagacion]] equal to 200 m/s and [[longitud_cuerda]] equal to 0.5 m has fundamental frequency 200 Hz even though the observed stationary pattern does not displace along the string.

## Mathematical errors

### Applying free-end boundary conditions to a string with both ends fixed

**Why it seems correct**: Wind tube formulas with one closed and one open end look similar. Without distinguishing the system, the quarter-wave formula is applied.

**Why it is incorrect**: For one fixed and one free end, the free-end boundary condition allows antinodes, producing frequencies proportional to 1, 3, 5... instead of 1, 2, 3, 4... The fixed-fixed string requires nodes at both ends and admits all integer harmonics.

**Detection signal**: Frequency calculations give values that are not integer multiples of the fundamental. For example, the calculated second mode has triple instead of double frequency, matching the fixed-free system.

**Conceptual correction**: Two fixed ends impose nodes at both ends, forcing an integer number of half-wavelengths in the total string length and producing the complete harmonic series with all positive integers.

**Contrast mini-example**: For a 1 m string with [[velocidad_propagacion]] equal to 100 m/s, the second fixed-fixed mode has frequency 100 Hz. Wrongly applying the free-end formula would give 75 Hz for the next mode, which does not exist in the fixed-fixed system.

### Forgetting the factor of 2 in the quantized wavelength formula

**Why it seems correct**: If [[numero_armonico]] wavelengths fit in [[longitud_cuerda]], it seems natural that the wavelength is [[longitud_cuerda]] divided by [[numero_armonico]]. Direct division seems logical.

**Why it is incorrect**: The boundary condition requires [[numero_armonico]] half-wavelengths to fit in [[longitud_cuerda]], not [[numero_armonico]] full wavelengths. The correct relation is [[longitud_onda_estacionaria]] equal to two times [[longitud_cuerda]] divided by [[numero_armonico]]. Omitting the factor of 2 produces wavelengths at half the correct value and frequencies at double the correct value.

**Detection signal**: The student obtains wavelengths that are half the correct value for each mode, or frequencies that are double the correct value. The antinode count does not match [[numero_armonico]].

**Conceptual correction**: The boundary condition forces [[numero_armonico]] half-wavelength segments to fit in [[longitud_cuerda]]. The correct formula is [[longitud_onda_estacionaria]] equal to two times [[longitud_cuerda]] divided by [[numero_armonico]].

**Contrast mini-example**: For [[numero_armonico]] equal to 2 and [[longitud_cuerda]] equal to 0.6 m, the correct wavelength is two times 0.6 divided by 2, giving 0.6 m. The common error of dividing directly gives 0.3 m, which would correspond to four antinodes instead of two.

## Interpretation errors

### Interpreting antinode amplitude as A instead of 2A

**Why it seems correct**: The amplitude of each traveling wave is [[amplitud_maxima]]. It seems reasonable that the superposition result also has amplitude [[amplitud_maxima]] at antinodes.

**Why it is incorrect**: When two waves of amplitude [[amplitud_maxima]] superpose in phase, amplitudes add algebraically. Maximum displacement at an antinode is two times [[amplitud_maxima]], not [[amplitud_maxima]]. Underestimating the amplitude by half directly affects energy and sound pressure calculations.

**Detection signal**: The student calculates the standing wave energy using [[amplitud_maxima]] as antinode amplitude, obtaining one quarter of the real energy. Or reports maximum amplitude [[amplitud_maxima]] when the correct value is 2[[amplitud_maxima]].

**Conceptual correction**: The standing wave function has factor 2[[amplitud_maxima]] as maximum amplitude at antinodes. When two waves of amplitude [[amplitud_maxima]] superpose in phase, amplitudes add: the result is 2[[amplitud_maxima]], not [[amplitud_maxima]].

**Contrast mini-example**: If each traveling wave has amplitude 2 mm, the antinodes of the standing wave reach amplitudes of 4 mm. The nearest node has zero amplitude at all times.

## Quick self-control rule

Before accepting the solution to a standing wave problem, verify:

1. **Node count**: the number of nodes must be [[numero_armonico]] plus 1, including both fixed ends
2. **Antinode count**: the number of antinodes must be exactly [[numero_armonico]]
3. **Factor of 2 in wavelength**: [[longitud_onda_estacionaria]] is two times [[longitud_cuerda]] divided by [[numero_armonico]], not [[longitud_cuerda]] divided by [[numero_armonico]]
4. **Complete harmonics**: for a fixed-fixed string all positive integer modes exist, not only odd ones
5. **Antinode amplitude**: the maximum amplitude at antinodes is 2[[amplitud_maxima]], not [[amplitud_maxima]]