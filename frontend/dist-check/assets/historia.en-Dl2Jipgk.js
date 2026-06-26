const e=`## Historical problem

The phenomenon of wave reflection was known empirically since antiquity: the echo of a voice off a wall, reverberation in caverns. However, the quantitative question remained unanswered: what fraction of a wave is reflected upon encountering a medium change and what does that fraction depend on? Optics had advanced with Snell and Fresnel laws for light, but transferring these ideas to mechanical waves in solids required its own theoretical framework based on continuum mechanics.

The practical problem was twofold. On one hand, engineers needed to understand why acoustic signals attenuated when crossing joints between materials. On the other, seismologists observed wave reflections inside the Earth and needed to quantify the property contrast between geological layers.

## Prior conceptual difficulty

The fundamental difficulty was connecting reflection with an intrinsic medium property independent of wave amplitude and frequency. In optics, refractive indices fulfilled that role. In acoustics, the unifying concept was missing.

Furthermore, the relationship between amplitude reflection and energy reflection was not obvious. The idea that a transmitted wave could have amplitude greater than the incident one was counterintuitive and generated distrust in the first theoretical results.

## What changed

Lord Rayleigh, in his work Theory of Sound (1877-1878), rigorously formulated the boundary conditions for acoustic waves at interfaces and derived the reflection and transmission coefficients from continuity of pressure and particle velocity. He introduced the concept of acoustic impedance as the intrinsic property governing energy partition, in complete analogy with the electrical impedance that Oliver Heaviside was simultaneously developing for transmission lines.

Karl Zoeppritz, in 1919, extended the treatment to seismic waves at oblique incidence, including mode conversion between P and S waves. His equations, published posthumously, became the fundamental tool of exploration seismology.

In the twentieth century, the invention of the piezoelectric transducer (Curie brothers, perfected by Langevin during World War I for submarine detection) transformed wave reflection from a theoretical phenomenon into a practical inspection tool.

## Impact on physics

The concept of acoustic impedance unified the treatment of reflection in all media (gases, liquids, solids) and established a formal analogy with electrical circuits that proved extraordinarily fruitful. Impedance matching, quarter-wavelength layer design and acoustic filters were born directly from this analogy.

In geophysics, seismic reflection data inversion became the main method for mapping the internal structure of the Earth and for exploring oil and gas reservoirs. The AVO (Amplitude Versus Offset) technique is based directly on Zoeppritz equations to estimate rock properties from the angular variation of reflection.

## Connection with modern physics

Reflection and transmission of waves at interfaces remains an active field. In acoustic metamaterials, structures with controlled effective impedance are designed to create acoustic invisibility cloaks, perfect absorption or sub-wavelength focusing. In nanotechnology, picosecond acoustic reflectometry allows measuring thin film thicknesses with nanometric resolution. In medicine, advanced quantitative ultrasound extracts tissue property information from measured reflection coefficients, going beyond simple anatomical imaging.
`;export{e as default};
