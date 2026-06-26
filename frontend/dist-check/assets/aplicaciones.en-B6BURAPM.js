const e=`## 1. Liquid-crystal displays (LCD)

LCD screens use two crossed polarisers with a liquid-crystal layer between them. Without an applied voltage, the crystal molecules rotate the polarisation of the light by 90 degrees, allowing it to pass through the second polariser and producing a bright pixel. When a voltage is applied, the molecules align with the electric field and stop rotating the polarisation; the light is blocked by the crossed analyser and the pixel darkens.

The intensity of each pixel depends on the degree of polarisation-plane rotation, controlled by the applied voltage. This makes Malus's law the quantitative tool governing the brightness of each display cell, since the transmitted intensity follows the squared-cosine dependence on the effective angle between the polarisation and the analyser axis.

Dominant variable: effective polarisation-rotation angle inside the liquid crystal, controlled by the applied voltage.
Validity limit: the simplified model fails when the crystal response is nonlinear with voltage, which occurs near the threshold voltage and at saturation, or when temperature alters the viscosity of the crystal.

## 2. Polarised sunglasses for driving

Polarised sunglasses block the horizontally oscillating electric-field component, which dominates in light reflected from flat surfaces such as wet asphalt or the bonnets of other vehicles. Brewster reflection favours horizontal polarisation of reflected light, so a filter with a vertical transmission axis selectively eliminates glare without excessively reducing overall luminosity.

The Brewster angle for wet asphalt, whose effective refractive index is around 1.5, lies close to 56 degrees from the vertical. Light reflected at that angle is almost completely horizontally polarised, enabling vertical-axis glasses to attenuate the reflection selectively and improve visual contrast.

Dominant variable: orientation of the filter's transmission axis relative to the horizontal component of the reflected field.
Validity limit: effectiveness decreases when the viewing angle moves away from the Brewster angle of the surface, or when surfaces are rough and produce unpolarised diffuse reflection.

## 3. Polarisation microscope in geology

The polarisation microscope places the mineral sample between two crossed polarisers. Birefringent minerals split the light into two polarised components that travel at different speeds. When recombined after the sample, the components interfere and produce characteristic interference colours that allow identification of the mineral and its crystallographic orientation.

The intensity of the interference colours depends on the sample thickness, the mineral's birefringence and the angle between its optical axes and the polariser and analyser axes. Malus's law, applied to each component separately, determines the amplitude reaching the analyser and therefore the intensity of each colour in the observed pattern.

Dominant variable: birefringence of the mineral, which controls the phase retardation between the two polarised components.
Validity limit: the model fails when the mineral shows strong selective absorption (intense pleochroism) or when the thin-section thickness is not uniform, distorting the expected colour pattern.

## 4. Optical communications with polarisation-division multiplexing

In advanced fibre-optic networks, polarisation is used to multiplex two independent data channels on a single fibre. Each channel is transmitted with a polarisation orthogonal to the other, doubling the link capacity without increasing spectral bandwidth. At the receiver, a polarisation beam splitter directs each component to its corresponding photodetector.

The quality of the separation depends on the two polarisations maintaining their orthogonality along the fibre. The system extinction ratio, measured as the quotient between the desired-channel intensity and the cross-channel intensity, is quantified through Malus's law evaluated near 0 and 90 degrees, where small misalignments produce measurable crosstalk.

Dominant variable: angular misalignment between the channel polarisations, which determines the crosstalk between them.
Validity limit: the simplified model fails in fibres with random birefringence (uncompensated long-haul fibres) where the polarisation state rotates unpredictably, requiring adaptive polarisation controllers.

## 5. Photoelasticity for mechanical-stress analysis

Photoelasticity uses transparent birefringent materials under mechanical load to visualise stress fields. Illuminating the specimen with polarised light and observing it through an analyser, zones under higher stress produce greater birefringence and therefore more intense interference colours. The colour fringes reveal lines of equal principal-stress difference, providing a visual map of the stress state.

The transmitted intensity at each point of the sample depends on the squared cosine of the phase shift between the two polarised components, which in turn depends on the local mechanical stress. Malus's law acts as the contrast criterion: points where the induced birefringence aligns the component with the analyser axis appear brightest, while points where the component is perpendicular appear dark.

Dominant variable: local mechanical stress in the specimen, which controls the induced birefringence and the fringe pattern.
Validity limit: the method fails when deformation exceeds the elastic regime of the photoelastic material, introducing permanent birefringence that no longer reflects the current load state, or when the specimen thickness is non-uniform. Additionally, highly opaque or strongly scattering materials prevent adequate light transmission and render the technique inapplicable.
`;export{e as default};
