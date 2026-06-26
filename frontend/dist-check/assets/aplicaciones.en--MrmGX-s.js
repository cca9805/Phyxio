const e=`# Applications of diffraction

## 1. Diffraction grating spectroscopy

Optical spectrometers use diffraction gratings to separate light into its spectral components. A grating with thousands of lines per millimeter disperses different wavelengths at characteristic angles, allowing analysis of the composition of light sources.

In astronomy, grating spectrometers coupled to telescopes allow determination of the chemical composition of distant stars and galaxies. Each element produces characteristic spectral lines that appear as intensity maxima at angular positions calculable by the diffraction equation. Spectroscopic analysis reveals not only elemental composition but also physical conditions such as temperature, pressure, and magnetic fields in celestial objects.

Dominant variable: the grating spacing (lines per millimeter), which determines the angular dispersion and achievable spectral resolution.

Validity limit: the theory assumes ideal slits and coherent illumination. In real gratings, manufacturing imperfections slightly modify theoretical angles. Additionally, at very high orders, spectra of different orders may overlap. The angular precision depends on the total number of illuminated lines and on the surface quality of the grating. Modern spectroscopy applications require careful calibration to achieve accurate wavelength measurements.

## 2. Resolution limits in optical instruments

Microscopes, telescopes and photographic cameras are limited by diffraction. Light passing through circular apertures produces the Airy disk: a central disk surrounded by concentric rings. Two nearby points are only distinguished if their Airy disks do not overlap excessively.

This diffraction limit determines the maximum spatial resolution of any optical instrument. Light microscopes cannot resolve details smaller than approximately 200 nanometers. Ground-based telescopes are limited by diffraction from the primary mirror.

Dominant variable: the aperture diameter (or primary mirror), which determines the angular size of the Airy disk and therefore the maximum resolution.

Validity limit: the diffraction limit is a fundamental lower bound, but other factors (atmospheric turbulence, optical aberrations, detector noise) may further reduce practical resolution. The design of advanced optical instruments requires compensating for these effects through adaptive optics and high-quality materials.

## 3. X-ray diffraction by crystals

Solid crystals have atomic planes spaced at distances of the order of angstroms (10^-10 m), comparable to the wavelength of X-rays. When an X-ray beam strikes a crystal, the atomic planes act as a three-dimensional diffraction grating.

Bragg's law describes the angles where constructive interference occurs through a relation between crystal spacing, angle and [[lambda]]. Measuring these angles allows determination of crystal structure: atomic spacings, symmetries and elemental content.

This technique, discovered by the Braggs in 1912, is fundamental for protein crystallography, drug structure determination, nanomaterials and semiconductor analysis.

Dominant variable: the spacing between atomic planes (d), which determines the Bragg angles for each wavelength.

Validity limit: Bragg's law assumes perfect crystals and monochromatic X-rays. In samples with crystalline defects or internal stresses, diffraction peaks broaden or shift, requiring more complex models. The quality of experimental data determines the precision of the crystal structure obtained.

## 4. Holography and optical storage

Holography records interference patterns between reference coherent light and light scattered by an object. This interference pattern (hologram) contains amplitude and phase information. When illuminating the hologram with light similar to the reference beam, diffraction reconstructs the original wave, creating a virtual three-dimensional image.

Modern holograms use computer-generated diffraction gratings (computational holography). Optical discs (CD, DVD, Blu-ray) store data as microscopic pits that act as diffraction gratings: when illuminated with a laser, the diffracted light is detected and decoded as information bits.

The same principle appears in security labels and banknote holograms, where controlled diffraction sends different colors toward different viewing directions.

Dominant variable: the wavelength of the reading laser, which must match that used during recording for correct reconstruction.

Validity limit: holography requires coherent light (laser) and extreme mechanical stability during recording. Vibrations of fractions of a wavelength destroy the interference pattern. Temperature variations and air currents also affect the quality of the recorded hologram.

## 5. Spatial filters and Fourier optics

In Fourier optics, lenses convert angular distributions into spatial positions. A mask in the Fourier plane (focal plane of the lens) can eliminate certain diffraction angles, acting as a spatial filter.

This technique allows removing periodic noise from images, enhancing edges, or extracting specific spatial characteristics. In phase contrast microscopy, diffraction converts phase variations into visible intensity variations, revealing transparent structures that would be invisible in conventional microscopy. These methods are essential for biological research where samples often lack natural contrast and require specialized optical techniques for visualization.

Dominant variable: the position of the mask in the Fourier plane, which determines which spatial frequencies (diffraction angles) are transmitted and which are blocked.

Validity limit: Fourier optics assumes perfect lenses and coherent monochromatic illumination. Real lenses introduce aberrations that limit filtering precision, and polychromatic light produces overlapping diffraction patterns. Industrial applications require filtered light sources and precise alignment systems to obtain reproducible results. Modern optical systems integrate diffraction-based filtering with digital image processing for enhanced performance.
`;export{e as default};
