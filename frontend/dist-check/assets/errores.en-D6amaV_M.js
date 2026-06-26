const e=`# Errors in Transverse Shear Waves\r
\r
## Conceptual errors\r
\r
### Error 1: Assuming an S wave travels equally in solids and fluids\r
\r
**Why it seems correct**\r
\r
Mechanical waves are often introduced as disturbances that need a medium, so any material medium may seem sufficient.\r
\r
**Why it is incorrect**\r
\r
An S wave requires positive [[G_shear]]. An ideal fluid can compress and expand, but it cannot sustain bulk elastic shear deformation.\r
\r
**Detection signal**\r
\r
The statement describes a liquid, gas or outer core, yet the solution computes a finite [[v_s]].\r
\r
**Conceptual correction**\r
\r
Before using formulas, ask whether the medium elastically recovers its shape after shear.\r
\r
**Contrast mini-example**\r
\r
Rock carries S waves; water carries pressure waves, not bulk elastic S waves.\r
\r
### Error 2: Confusing transverse motion with sideways mass transport\r
\r
**Why it seems correct**\r
\r
The particle moves sideways, so it is tempting to imagine that the whole material drifts sideways.\r
\r
**Why it is incorrect**\r
\r
Propagation is the advance of phase and energy; particles oscillate around equilibrium.\r
\r
**Detection signal**\r
\r
The explanation says the solid block moves along with the wave.\r
\r
**Conceptual correction**\r
\r
Separate local particle motion from the propagation direction of the pattern.\r
\r
**Contrast mini-example**\r
\r
In an elastic row, each point moves up and down while the crest moves horizontally.\r
\r
## Model errors\r
\r
### Error 3: Using the continuum model when the wave resolves microstructure\r
\r
**Why it seems correct**\r
\r
The formula for [[v_s]] appears to depend only on tabulated material properties.\r
\r
**Why it is incorrect**\r
\r
If [[lambda_s]] is comparable with grains, fibres or pores, dispersion and scattering appear.\r
\r
**Detection signal**\r
\r
Velocity changes when [[f_onda]] changes even though the nominal material is the same.\r
\r
**Conceptual correction**\r
\r
Compare wavelength with the scale being averaged before accepting the continuum model.\r
\r
**Contrast mini-example**\r
\r
A low-frequency ultrasonic wave sees a part as homogeneous; a high-frequency wave may resolve defects.\r
\r
### Error 4: Ignoring anisotropy or layering\r
\r
**Why it seems correct**\r
\r
Introductory problems often assume isotropy without emphasizing its limits.\r
\r
**Why it is incorrect**\r
\r
In crystals, laminates or layered soils, speed depends on direction and polarization.\r
\r
**Detection signal**\r
\r
Two transverse components arrive at different times or velocity changes with azimuth.\r
\r
**Conceptual correction**\r
\r
Use an anisotropic or multilayer model when material geometry controls the reading.\r
\r
**Contrast mini-example**\r
\r
A composite plate may transmit faster along fibres than across them.\r
\r
## Mathematical errors\r
\r
### Error 5: Entering gigapascals as pascals\r
\r
**Why it seems correct**\r
\r
The modulus value is copied from a table and appears to be a scientific unit already.\r
\r
**Why it is incorrect**\r
\r
[[G_shear]] in gigapascals must be converted to pascals before combining it with [[rho_medio]].\r
\r
**Detection signal**\r
\r
The computed speed is thousands of times lower than expected for a known solid.\r
\r
**Conceptual correction**\r
\r
Convert all quantities to SI and check the final order of magnitude.\r
\r
**Contrast mini-example**\r
\r
Steel should not produce an S speed of only a few metres per second; it should be kilometres per second.\r
\r
### Error 6: Swapping stiffness and inertia\r
\r
**Why it seems correct**\r
\r
Both quantities appear together, and the quotient can be inverted by algebraic carelessness.\r
\r
**Why it is incorrect**\r
\r
Stiffness drives recovery; density supplies inertia. Reversing them changes the physical dimension.\r
\r
**Detection signal**\r
\r
Dimensional analysis does not lead to velocity, or speed decreases when stiffness increases.\r
\r
**Conceptual correction**\r
\r
Read the quotient as recovery divided by inertia.\r
\r
**Contrast mini-example**\r
\r
With fixed density, a stiffer material must increase [[v_s]], not reduce it.\r
\r
## Interpretation errors\r
\r
### Error 7: Reading shear impedance as longitudinal impedance\r
\r
**Why it seems correct**\r
\r
Both impedances have similar units and appear in interface problems.\r
\r
**Why it is incorrect**\r
\r
[[Z_s]] uses [[v_s]] and describes shear response; longitudinal impedance uses a P-wave speed.\r
\r
**Detection signal**\r
\r
S-wave reflections are predicted using P-wave data without a mode-conversion argument.\r
\r
**Conceptual correction**\r
\r
Associate each impedance with the physical mode carrying the energy.\r
\r
**Contrast mini-example**\r
\r
At a solid-solid boundary, SH reflection is read with shear impedances.\r
\r
### Error 8: Assigning energy without amplitude\r
\r
**Why it seems correct**\r
\r
Propagation speed may appear sufficient to decide which wave is more energetic.\r
\r
**Why it is incorrect**\r
\r
The density [[u_s]] requires [[A_s]] and [[omega_angular]], not only speed.\r
\r
**Detection signal**\r
\r
The solution compares energies without amplitude data or a harmonic assumption.\r
\r
**Conceptual correction**\r
\r
Separate propagation speed, controlled by the medium, from intensity, controlled by excitation.\r
\r
**Contrast mini-example**\r
\r
Two S waves in the same steel have the same speed, but different amplitudes imply different energies.\r
\r
## Quick self-control rule\r
\r
No shear rigidity means no bulk elastic S wave. If [[v_s]] exceeds [[v_p]], check data, units or model. If [[lambda_s]] does not dominate microstructure, use an extended model.\r
`;export{e as default};
