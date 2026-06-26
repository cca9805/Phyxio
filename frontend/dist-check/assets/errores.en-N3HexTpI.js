const e=`# Common Errors in Electromagnetic Waves

## Conceptual errors

The most common error is imagining an electromagnetic wave as an invisible string bending through space. The curve in a drawing is not a material object; it represents the value of a field. If a student thinks light needs air in the same way sound does, a field wave has been confused with a mechanical wave.

Another conceptual error is separating [[E0]] and [[B0]] as if they were two independent waves that merely travel together. In a free plane wave, they are parts of the same structure. It is also common to forget transversality and draw the fields parallel to propagation. That drawing may be visually convenient, but it does not represent the model of this leaf.

## Model errors

A model error appears when [[c]] is used for every situation without checking the medium. In vacuum it is correct, but in glass or water the phase speed changes. The opposite error also occurs: changing [[c]] when [[f]] changes even though the medium remains vacuum. In that case the relation between [[lambda]] and [[f]] is broken.

Another failure is applying the relation between [[E0]] and [[B0]] close to an antenna, an accelerated charge, or a region with strong reflections. In the near field, the fields may not have the simple proportion of a plane wave. Before calculating, check whether the statement describes a free, plane wave far from sources.

## Mathematical errors

The typical algebraic error is rearranging the relation among [[lambda]], [[f]], and [[c]] incorrectly. If [[lambda]] is required, divide speed by frequency. If [[f]] is required, divide speed by wavelength. Multiplying when division is needed changes the spectral band by many orders of magnitude.

Units are also mixed. Using nanometers without converting to meters, megahertz without converting to hertz, or microteslas without converting to teslas produces numerical-looking but physically incoherent results. For dimensional finish, use notation such as \`[L T⁻¹]\`, \`[T⁻¹]\`, or \`[M L T⁻³ I⁻¹]\`, not a long dimensional equation embedded in prose.

## Interpretation errors

A correct result can still be read incorrectly. Obtaining a small [[lambda]] does not mean the wave is faster; it means that, at the same speed, it oscillates with higher [[f]]. Obtaining a small [[B0]] does not mean the magnetic field is irrelevant; it means the tesla is a large unit and the relation with [[E0]] includes [[c]].

[[E0]] is also often read as total energy. Electric amplitude is a field scale; speaking about transported energy requires another model. If the question asks for electromagnetic nature, coupled transverse fields are enough. If it asks for power, the leaf must connect to energy and intensity.

## Quick self-control rule

Before closing an exercise, check five points: [[E0]] and [[B0]] are nonnegative amplitudes; the fields are transverse; [[lambda]] and [[f]] are positive; [[c]] is of order \`3 x 10⁸ m/s\` if the medium is vacuum; and the result answers the physical question, not only a substitution. If one point fails, return to the model before changing numbers.
`;export{e as default};
