const e=`# Models of light interference

## Ideal model

The ideal model of double-slit interference describes two point slits separated by distance [[d]], illuminated by a monochromatic source with perfectly defined wavelength [[lambda]]. Light is completely coherent, with a stable phase relationship between both beams. Amplitudes at both slits are equal and polarisation is identical and parallel in both emerging beams. The flat screen is located at distance [[L]] much greater than [[d]].

Under these conditions, the intensity on the screen follows a squared cosine distribution that predicts fringes of equal intensity and uniform spacing, with perfect visibility. The position of each maximum depends linearly on order [[m]] according to [[y_m]] = [[m]] × [[lambda]] × [[L]] / [[d]], and the separation between consecutive fringes is constant and equal to [[lambda]] × [[L]] / [[d]].

## Hypotheses

The hypotheses of the ideal model are the following. Slits are considered point sources with no finite width. If slits have width comparable to [[d]], diffraction appears modulating the interference pattern envelope, attenuating lateral orders. Perfect coherence is assumed: the relative phase between beams is constant over time. If coherence is partial, pattern visibility decreases and contrast between fringes is reduced. A single wavelength [[lambda]] is considered. If light is polychromatic, each wavelength produces a pattern with different separation, resulting in coloured fringes that lose definition away from the centre. The small-angle approximation is assumed. If the observation angle is large, fringes cease to be equally spaced and the position formula loses precision. Parallel polarisation in both beams is assumed. If polarisations are perpendicular, there is no interference and the pattern disappears.

## Quantitative validity domain

The ideal model is valid when the slit separation satisfies 10 × [[lambda]] < [[d]] < 1000 × [[lambda]]. If [[d]] is less than 10 wavelengths, the diffraction patterns from each slit overlap strongly. If [[d]] exceeds 1000 wavelengths, the fringes are so close together that they become indistinguishable for ordinary detectors.

The screen distance must satisfy [[L]] > 10 × [[d]] for the small-angle approximation to have error below 1%. The observable order is limited by the condition [[m]] < [[d]] / [[lambda]], since for higher orders the observation angle becomes significant and the linear formula loses precision.

The spatial coherence of the source must satisfy that the angle subtended by the source is less than [[lambda]] / [[d]]. If this is not met, patterns from different parts of the source dephase and contrast decreases. For [[lambda]] = 600 nm and [[d]] = 0.2 mm, the ratio [[d]] / [[lambda]] = 333 allows observing orders up to approximately 10 to 15 before diffraction limits the intensity.

## Model failure signals

The ideal model ceases to be reliable when fringes of unequal intensity are observed, indicating intensity imbalance between slits, significant diffraction or partial polarisation. If contrast decreases with order, the cause is finite spectral width of the source, finite slit width or optical system aberrations.

If no defined pattern is observed, it may be due to lack of coherence between sources, perpendicular polarisations, fast mechanical vibrations or excessive background light. If the separation between fringes varies significantly across the screen, the small-angle approximation is failing for high orders or the screen is not perpendicular to the optical axis.

## Extended or alternative model

Progressive extensions exist to correct the limitations of the ideal model. The transition to an extended model is recommended when experimental conditions exceed the quantitative validity limits of the ideal model.

When to switch to the extended model: when slits have finite width comparable to their separation, switch to the model with diffraction; when the source has significant spectral width, change to the partial coherence model; when more than 10 orders are observed, switch to the exact model without the small-angle approximation.

The model with diffraction includes the finite slit width. The resulting intensity is the product of the double-slit interference pattern and the single-slit diffraction envelope. This model predicts an envelope modulating the interference maxima, missing maxima when they coincide with diffraction minima, and loss of visibility at high orders.

The multi-slit model extends the analysis to diffraction gratings with a large number of equally spaced slits. Maxima become narrower and brighter as the number of slits increases, with weak secondary maxima between the principal ones. Spectral resolution is proportional to the total number of illuminated slits, forming the basis of grating spectrometers.

The partial coherence model describes interference when the source has spatial extent or finite spectral width. Pattern visibility depends on the modulus of the complex coherence function, allowing the statistical properties of the source to be characterised.

## Operational comparison

The ideal model is sufficient for quick estimation calculations, laboratory exercises and analysis of the first orders of interference with narrow slits. It provides results with error below 5% when slit width is less than 10% of the separation and only the first 5 to 10 orders are observed.

The transition to the model with diffraction is necessary when predicting the relative intensity of different orders is required, when missing maxima are sought, or when optical system design demands precision across the full angular range. The complete model with partial coherence is indispensable for extended sources, for design of high-resolution interferometers and for applications in optical metrology where pattern visibility is the primary observable.
`;export{e as default};
