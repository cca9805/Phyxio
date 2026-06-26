## Conceptual errors


### Error 1: Assuming an S wave travels equally in solids and fluids

**Why it seems correct**

Mechanical waves are often introduced as disturbances that need a medium, so any material medium may seem sufficient.

**Why it is incorrect**

An S wave requires positive [[modulo_de_cizalla]]. An ideal fluid can compress and expand, but it cannot sustain bulk elastic shear deformation.

**Detection signal**

The statement describes a liquid, gas or outer core, yet the solution computes a finite [[v_s]].

**Conceptual correction**

Before using formulas, ask whether the medium elastically recovers its shape after shear.

**Contrast mini-example**

Rock carries S waves; water carries pressure waves, not bulk elastic S waves.

**Mini-example of contrast**

Check 1: In Transverse Shear Waves, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 1.


### Error 2: Confusing transverse motion with sideways mass transport

**Why it seems correct**

The particle moves sideways, so it is tempting to imagine that the whole material drifts sideways.

**Why it is incorrect**

Propagation is the advance of phase and energy; particles oscillate around equilibrium.

**Detection signal**

The explanation says the solid block moves along with the wave.

**Conceptual correction**

Separate local particle motion from the propagation direction of the pattern.

**Contrast mini-example**

In an elastic row, each point moves up and down while the crest moves horizontally.

## Model errors

**Mini-example of contrast**

Check 2: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 2.


### Error 3: Using the continuum model when the wave resolves microstructure

**Why it seems correct**

The formula for [[v_s]] appears to depend only on tabulated material properties.

**Why it is incorrect**

If [[lambda_s]] is comparable with grains, fibres or pores, dispersion and scattering appear.

**Detection signal**

Velocity changes when [[f_onda]] changes even though the nominal material is the same.

**Conceptual correction**

Compare wavelength with the scale being averaged before accepting the continuum model.

**Contrast mini-example**

A low-frequency ultrasonic wave sees a part as homogeneous; a high-frequency wave may resolve defects.

**Mini-example of contrast**

Check 3: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 3.


### Error 4: Ignoring anisotropy or layering

**Why it seems correct**

Introductory problems often assume isotropy without emphasizing its limits.

**Why it is incorrect**

In crystals, laminates or layered soils, speed depends on direction and polarization.

**Detection signal**

Two transverse components arrive at different times or velocity changes with azimuth.

**Conceptual correction**

Use an anisotropic or multilayer model when material geometry controls the reading.

**Contrast mini-example**

A composite plate may transmit faster along fibres than across them.

## Mathematical errors

**Mini-example of contrast**

Check 4: This mistake is controlled by checking units, operating regime, and interpretation together; A correct response states why the value is reasonable for the model, not only how it was obtained revision 4.


### Error 5: Entering gigapascals as pascals

**Why it seems correct**

The modulus value is copied from a table and appears to be a scientific unit already.

**Why it is incorrect**

[[modulo_de_cizalla]] in gigapascals must be converted to pascals before combining it with [[rho_medio]].

**Detection signal**

The computed speed is thousands of times lower than expected for a known solid.

**Conceptual correction**

Convert all quantities to SI and check the final order of magnitude.

**Contrast mini-example**

Steel should not produce an S speed of only a few metres per second; it should be kilometres per second.

**Mini-example of contrast**

Check 5: If two magnitudes are mixed without respecting their roles, the final reading becomes ambiguous; Separate parameters, derived results, and sign-dependent quantities before solving revision 5.


### Error 6: Swapping stiffness and inertia

**Why it seems correct**

Both quantities appear together, and the quotient can be inverted by algebraic carelessness.

**Why it is incorrect**

Stiffness drives recovery; density supplies inertia. Reversing them changes the physical dimension.

**Detection signal**

Dimensional analysis does not lead to velocity, or speed decreases when stiffness increases.

**Conceptual correction**

Read the quotient as recovery divided by inertia.

**Contrast mini-example**

With fixed density, a stiffer material must increase [[v_s]], not reduce it.

## Interpretation errors

**Mini-example of contrast**

Check 6: In Transverse Shear Waves, this error appears when the result is treated as a number detached from the circuit model; Check the declared quantities, the sign convention, and the physical role of the computed value revision 6.


### Error 7: Reading shear impedance as longitudinal impedance

**Why it seems correct**

Both impedances have similar units and appear in interface problems.

**Why it is incorrect**

[[impedancia_transversal]] uses [[v_s]] and describes shear response; longitudinal impedance uses a P-wave speed.

**Detection signal**

S-wave reflections are predicted using P-wave data without a mode-conversion argument.

**Conceptual correction**

Associate each impedance with the physical mode carrying the energy.

**Contrast mini-example**

At a solid-solid boundary, SH reflection is read with shear impedances.

**Mini-example of contrast**

Check 7: The detection signal is a calculation that looks dimensionally plausible but cannot explain what changes in the system; Reconnect the step with the model assumptions before accepting it revision 7.


### Error 8: Assigning energy without amplitude

**Why it seems correct**

Propagation speed may appear sufficient to decide which wave is more energetic.

**Why it is incorrect**

The density [[u_s]] requires [[amplitud_transversal]] and [[omega_angular]], not only speed.

**Detection signal**

The solution compares energies without amplitude data or a harmonic assumption.

**Conceptual correction**

Separate propagation speed, controlled by the medium, from intensity, controlled by excitation.

**Contrast mini-example**

Two S waves in the same steel have the same speed, but different amplitudes imply different energies.

## Quick self-control rule

No shear rigidity means no bulk elastic S wave. If [[v_s]] exceeds [[v_p]], check data, units or model. If [[lambda_s]] does not dominate microstructure, use an extended model.

**Mini-example of contrast**

Check 8: A reliable correction is to compare the result with limiting cases and with the expected behavior of the circuit; The answer must describe both numerical scale and physical meaning revision 8.