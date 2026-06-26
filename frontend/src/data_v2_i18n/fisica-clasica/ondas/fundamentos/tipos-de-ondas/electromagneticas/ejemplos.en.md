# Exam-type example

## Problem statement

An antenna emits an electromagnetic wave that, in a far region, can be approximated as plane. The emission frequency is 100 MHz, and the measured maximum magnetic field is 1.0 nT. Estimate the wavelength in vacuum and the associated electric field amplitude. Then interpret whether the result corresponds to a radio electromagnetic wave coherent with the model of this leaf.

## Data

The physical data are [[f]] in megahertz, [[B0]] in nanoteslas, and the reference speed [[c]] in vacuum. For formula use, all data are converted to SI: frequency is of order 10⁸ Hz, magnetic field is of order 10⁻⁹ T, and [[c]] is of order 3 x 10⁸ m/s. The spatial-scale unknown is [[lambda]], and the electric-amplitude unknown is [[E0]].

## System definition

The system is not the full antenna, but the far propagation region where the wavefront can be read locally as plane. In that region, the wave advances in a fixed direction. The electric and magnetic fields oscillate in transverse directions. The reading avoids details of emission, antenna geometry, and absorption because the goal is to recognize the electromagnetic nucleus of the wave.

## Physical model

The model is a plane electromagnetic wave in vacuum. For spatial scale, the relation between [[c]], [[lambda]], and [[f]] is used. For electric amplitude, the relation between [[E0]], [[B0]], and [[c]] is used. Both relations belong to the same model: one controls propagation and the other controls field coupling.

## Model justification

The physical justification is explicit: the region is far from the source, no dispersive material is mentioned, and a radio frequency allows wavefronts that can be treated as locally plane at the scale of observation. Because the statement asks for a vacuum estimate, no refractive index is introduced. Because [[B0]] is given, that datum is not read as energy or intensity; it is read as magnetic amplitude of a plane wave. The simultaneous presence of [[f]] and [[B0]] connects spectral scale and field coupling, which are the core magnitudes of this leaf.

## Symbolic solution

For the wavelength, [[lambda]] is obtained from the propagation relation.

{{f:onda_em_velocidad}}

The symbolic reading is: if [[c]] remains fixed, higher frequency reduces the distance between repetitions. For the electric amplitude, use the field relation.

{{f:relacion_campos_em}}

Here [[E0]] is obtained by multiplying the magnetic amplitude by the propagation speed. This is not total energy or antenna power; it is the electric field scale.

## Numerical substitution

With [[f]] of order 1.0 x 10⁸ Hz and [[c]] of order 3.0 x 10⁸ m/s, the estimated wavelength is about 3 m. With [[B0]] of order 1.0 x 10⁻⁹ T, the estimated electric amplitude is about 0.3 V/m. Both values are reasonable for a weak radio wave: wavelength is macroscopic and the electric field is not extreme.

## Dimensional validation

The first relation combines `[L T⁻¹]`, `[L]`, and `[T⁻¹]`; therefore dividing speed by frequency returns a length. The second combines `[L T⁻¹]` with `[M T⁻² I⁻¹]` and produces `[M L T⁻³ I⁻¹]`, compatible with electric field. This validation matters because the prefixes `MHz` and `nT` commonly produce mistakes of six to nine orders of magnitude.

## Physical interpretation

The result gives more than two numbers. A [[lambda]] of meters places the wave in a radio band, where antennas and everyday objects can have sizes comparable to the wave scale. An [[E0]] of tenths of V/m indicates a measurable but not extreme electric field. The small [[B0]] does not make the magnetic part irrelevant; it reflects the size of the tesla and the fact that coupling to [[E0]] is read through [[c]]. The example is physically coherent because propagation and amplitudes tell the same story: a transverse electromagnetic wave, far from the source, compatible with vacuum.

# Real-world example

## Context

In a real situation, a radio antenna does not produce a perfect plane wave everywhere. Close to the antenna, near fields and source geometry matter. However, at distances sufficiently large compared with [[lambda]], a small region can be analyzed as if the front were plane. That approximation allows reception, antenna orientation, and propagation scale to be estimated without solving the full spatial distribution.

## Physical estimation

Before calculating, the result can be anticipated. A frequency of 100 MHz suggests wavelengths of a few meters because 3 x 10⁸ divided by 10⁸ leaves a unit-meter scale. A magnetic field of 1 nT multiplied by a speed of 3 x 10⁸ m/s leaves a scale of tenths of a volt per meter. This prior reading prevents accepting results such as kilometers or millions of volts per meter, which would signal prefix conversion errors.

## Interpretation

The estimate confirms that the wave is electromagnetic rather than mechanical: no medium density, string tension, or elastic modulus appears. The central magnitudes are fields and repetition scales. If radiated energy, safety, or absorption were the goal, another model would be needed. For this leaf, the example shows how [[lambda]], [[f]], [[E0]], [[B0]], and [[c]] must be read together.
