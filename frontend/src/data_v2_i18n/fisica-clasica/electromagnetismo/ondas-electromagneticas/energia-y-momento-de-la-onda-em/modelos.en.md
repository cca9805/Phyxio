## Ideal model

The ideal model is a **plane, harmonic, transverse electromagnetic wave** propagating in vacuum. Its fields are described with rms values [[campo_electrico_eficaz]] and [[campo_magnetico_eficaz]], and transport is summarized by the average intensity [[intensidad_media_de_poynting]]. The model does not attempt to describe the full source; it studies a front that is far enough away and uniform enough.

The energetic interpretation is organized through [[densidad_media_de_energia_electromagnetica]], which measures average energy per volume, and through [[intensidad_media_de_poynting]], which measures power per area. The mechanical interpretation appears through [[densidad_de_momento_electromagnetico]] and [[p_rad]], always as magnitudes associated with the propagation direction.

## Hypotheses

The first hypothesis is that the wave can be treated as plane over the observed region. That requires the effective area [[area_iluminada]] to be small compared with the beam variation scale. The second hypothesis is that the medium introduces no relevant absorption, dispersion, or internal reflection before the wave reaches the surface.

Normal incidence is also assumed when [[p_rad]] is used directly. If the surface is tilted, the projected area replaces [[area_iluminada]]. If specular reflection is important, the mechanical push changes because electromagnetic momentum leaves in a different direction.

## Quantitative validity domain

As a practical criterion, the local model is reasonable if intensity varies by less than 10 % across the illuminated area. For ordinary applications, a safe condition is [[intensidad_media_de_poynting]] < 1e6 W/m2 and an absorbing surface without destructive heating. In precision optics or intense-laser work, the limit can be much lower if the material deforms or changes absorption.

For a classical pressure reading, [[p_rad]] should remain small compared with the dominant mechanical pressure in the setup. If [[p_rad]] > 1 Pa, check whether the regime is still a classical plane wave, whether extreme focusing is present, or whether the material is no longer linear.

## Model failure signals

The model begins to fail if the beam is tightly focused, if intensity varies strongly across [[area_iluminada]], if nonlinear material effects appear, or if the surface reflects more energy than it absorbs. It also fails when [[potencia_electromagnetica_incidente]] is used as if it were a local wave property, because total power depends on intercepted area.

Another failure signal is obtaining a pressure comparable with ordinary mechanical loads from common illumination. In that case the scale [[velocidad_de_la_luz_en_el_vacio]] has often been omitted, or an intensity has been used that was actually total power.

## Extended or alternative model

The first extended model introduces reflectivity. A reflecting surface does not merely absorb momentum; it changes the direction of outgoing momentum, so the push can be larger than in ideal absorption. That model needs an additional optical coefficient and is no longer described only by [[intensidad_media_de_poynting]] and [[velocidad_de_la_luz_en_el_vacio]].

It is convenient to switch model when the question is no longer answered by normal absorption, uniform effective area, and a plane wave. The explicit transition occurs if reflection is dominant, if incidence is oblique, if intensity varies by more than 10 % across [[area_iluminada]], or if the material medium shares energy and momentum with matter.

Another extended model allows material media. In a dispersive medium, the relevant speed is not always [[velocidad_de_la_luz_en_el_vacio]], and energy may be shared between field and matter. Then [[densidad_media_de_energia_electromagnetica]], [[intensidad_media_de_poynting]], and [[densidad_de_momento_electromagnetico]] require more careful definitions.

When a higher precision calculation is preferred, switching to the extended or alternative model introduces second-order corrections.

## Operational comparison

The ideal model is fast, calculable, and suitable for understanding the relation between energy, intensity, and pressure. It is the right choice when the front is uniform and the surface absorbs simply. Its pedagogical advantage is that it separates three questions: how much energy is in the field, how much crosses a surface, and how much push it produces.

The extended model is necessary when the material, incidence direction, or reflection matters. It is more realistic, but it also introduces parameters that can hide the physical core. Therefore it is best to start with the ideal model and extend it only when a failure signal demands it.