## Conceptual context

An electromagnetic wave carries more than field oscillation. It also transports **measurable energy** and **linear momentum**. That is why radiation can heat a surface, power a panel, push a solar sail, or exert a tiny pressure on a mirror. This leaf studies how to move from wave fields to energetic and mechanical readings.

The central idea is that the oscillating field [[campo_electrico_instantaneo_representado]] stores energy locally, and propagation turns that volume energy into a flux. The dominant magnitude is the average intensity [[intensidad_media_de_poynting]], because it states how much power crosses each unit area. From it we read momentum density [[densidad_de_momento_electromagnetico]], radiation pressure [[p_rad]], and total power [[potencia_electromagnetica_incidente]] over an effective area [[area_iluminada]].

## 🟢 Essential level

An electromagnetic wave can be pictured as a moving front that carries energy distributed through space. The graph may show the instantaneous field [[campo_electrico_instantaneo_representado]], but the energy calculation uses the rms field [[campo_electrico_eficaz]]. If that rms field increases, the energy stored in each small volume also increases; as that energy moves with propagation speed, an energy flux appears.

The key intuition is to distinguish **local energy**, **local flux**, and **mechanical effect**. The density [[densidad_media_de_energia_electromagnetica]] says how much energy sits in a small volume of the wave. The intensity [[intensidad_media_de_poynting]] says how much power crosses a surface. Radiation pressure says how much push that transported energy can produce when absorbed.

> [!NOTE]
> A wave does not need material mass to carry momentum. Electromagnetic momentum is tied to energy transport and becomes pressure when the wave interacts with a surface.

## 🔵 Formal level

The model uses a harmonic plane wave, rms values, and vacuum propagation. First the field scales are linked. The rms magnetic field [[campo_magnetico_eficaz]] is not chosen independently: it is fixed by [[campo_electrico_eficaz]] and [[velocidad_de_la_luz_en_el_vacio]], preserving the transverse coupling of the wave.

{{f:relacion_campos_rms}}

Average energy per volume comes from the rms field. The constant [[epsilon0]] sets the electric scale of vacuum and converts the squared field into the density [[densidad_media_de_energia_electromagnetica]]. Using an rms value avoids performing the time average explicitly.

{{f:densidad_energia_rms}}

When that volume energy travels with the wave, we obtain the average intensity [[intensidad_media_de_poynting]]. This is the main operational reading: larger [[densidad_media_de_energia_electromagnetica]] or faster propagation means more power crossing each square metre.

{{f:intensidad_media_onda}}

The same transported energy carries electromagnetic momentum. The density [[densidad_de_momento_electromagnetico]] is small in ordinary units because converting energy into momentum involves the enormous scale of [[velocidad_de_la_luz_en_el_vacio]]. That smallness explains why light pressure is often subtle even when transferred energy is noticeable.

{{f:densidad_momento_onda}}

If the wave is absorbed by a surface, momentum flux produces radiation pressure [[p_rad]]. If the total delivery is needed instead of local pressure, multiply intensity by the effective area [[area_iluminada]] to obtain [[potencia_electromagnetica_incidente]].

{{f:presion_radiacion_absorbente}}

{{f:potencia_incidente_area}}

> [!TIP]
> In problems, decide first whether the requested quantity is local per area, such as [[intensidad_media_de_poynting]] or [[p_rad]], or a total device quantity, such as [[potencia_electromagnetica_incidente]].

## 🔴 Structural level

The deep structure of the leaf is a chain of conversions. The rms field [[campo_electrico_eficaz]] fixes an energy density [[densidad_media_de_energia_electromagnetica]]. Propagation turns that density into intensity [[intensidad_media_de_poynting]]. Intensity then connects to two different readings: total power if an area [[area_iluminada]] is involved, or mechanical push if absorption produces pressure [[p_rad]].

This chain also imposes validity limits. The front must be approximately plane over the considered area. If the source is very close, the beam is tightly focused, the medium absorbs or disperses strongly, or the surface reflects rather than absorbs, the simple relations no longer give the full physical reading.

The model is therefore a transport model, not a complete source model or material-interaction model.

The distinction between [[intensidad_media_de_poynting]] and [[potencia_electromagnetica_incidente]] is structural, not merely a unit change. [[intensidad_media_de_poynting]] belongs to the wave in a region of space; [[potencia_electromagnetica_incidente]] belongs to the system intercepting the wave. Two detectors in the same radiation field can measure the same intensity and receive different powers if their effective areas differ.

Electromagnetic momentum [[densidad_de_momento_electromagnetico]] also has a structural reading. It is not added as an afterthought: it accompanies energy flux from the beginning. Therefore an absorbing surface receives impulse. The pressure [[p_rad]] is small because it is spread over area and because the scale [[velocidad_de_la_luz_en_el_vacio]] is enormous, but it is not decorative; in astronomy, precision optics, and solar sails it can accumulate measurable effects.

> [!WARNING]
> Do not mix the absorbing case with the reflecting case. A perfectly reflecting surface reverses radiation momentum and changes the effective pressure. This leaf uses absorbed pressure as the base model.

## Deep physical interpretation

The wave energy is not stored in an invisible material support. It is distributed in the fields themselves. Therefore increasing [[campo_electrico_eficaz]] has a strong energetic effect: a moderate rise of the field can produce a noticeable rise in [[densidad_media_de_energia_electromagnetica]] and then in [[intensidad_media_de_poynting]].

Wave momentum clarifies a common question: if radiation has no rest mass, how can it push? The physical answer is that energy and momentum belong to the same electromagnetic transport. When the wave delivers energy to a surface, it also delivers momentum along the direction of travel.

## Order of magnitude

Sunlight near Earth has [[intensidad_media_de_poynting]] around 1000 W/m2. Dividing that scale by [[velocidad_de_la_luz_en_el_vacio]] gives [[p_rad]] of a few micropascals for ideal absorption. A technical laser can exceed that intensity by many orders of magnitude, but the pressure is still usually small compared with ordinary atmospheric pressure.

An absurd result is often detected by comparing scales: if ordinary illumination predicts gas-like mechanical pressures, [[intensidad_media_de_poynting]] has probably been confused with [[potencia_electromagnetica_incidente]] or the division by [[velocidad_de_la_luz_en_el_vacio]] has been omitted.

## Personalized resolution method

To solve a problem, first identify the input: rms field [[campo_electrico_eficaz]], density [[densidad_media_de_energia_electromagnetica]], intensity [[intensidad_media_de_poynting]], or total power [[potencia_electromagnetica_incidente]]. Then decide what physical output is requested. If a surface appears, think about [[p_rad]]; if a finite-area device appears, think about [[area_iluminada]] and [[potencia_electromagnetica_incidente]].

The recommended order is: convert fields into energy, energy into intensity, and intensity into momentum or power. At the end, check units: W/m2 for intensity, Pa for pressure, J/m3 for energy density, and W for total power.

## Special cases and extended example

A low-intensity wave can have nonzero fields and still produce nearly imperceptible pressure. That does not contradict the model: [[p_rad]] measures push per area, not the mere presence of a field. In delicate optical sensors, such a small force can matter because it is integrated over long times or acts on very small masses.

Another subtle case involves the effective area [[area_iluminada]]. A tilted panel does not intercept its whole geometric area as if it were perpendicular to the wavefront. In that case [[potencia_electromagnetica_incidente]] must be computed using the projected area. The common error is multiplying [[intensidad_media_de_poynting]] by a surface that the wave does not actually cross.

## Real student questions

**Is intensity the same as energy?** No. [[intensidad_media_de_poynting]] is power per area; [[densidad_media_de_energia_electromagnetica]] is energy per volume. They are related because the energy moves with the wave, but they are not the same physical reading.

**Why is there pressure if light is not a material fluid?** Because the wave carries momentum [[densidad_de_momento_electromagnetico]]. When absorbed, that momentum changes the mechanical state of the surface and [[p_rad]] appears.

**Can I always use the whole area of an object?** No. Use the effective area [[area_iluminada]] that intercepts the wavefront. If the object is tilted or partly shadowed, the total geometric area overestimates [[potencia_electromagnetica_incidente]].

**Why does [[campo_magnetico_eficaz]] look so small compared with [[campo_electrico_eficaz]]?** Because in SI units both fields have different numerical scales and are connected through [[velocidad_de_la_luz_en_el_vacio]]. That does not make the magnetic field irrelevant.

## Cross-cutting connections and study paths

This leaf builds on [Coupled Oscillating Fields](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/campos-oscilantes-acoplados), where the transverse geometry of [[campo_electrico_eficaz]] and [[campo_magnetico_eficaz]] is understood. It also connects with [Electromagnetic Spectrum](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/espectro-electromagnetico), because different spectral regions can have very different intensities and material effects.

The natural path is: coupled fields, energy and momentum, propagation in media, and technological applications. This prevents treating the wave as a mere curve and frames it as a physical transfer mechanism.

## Final synthesis

Energy and momentum in an electromagnetic wave are read through a coherent chain: rms field, energy density, intensity, pressure, and intercepted power. The intensity [[intensidad_media_de_poynting]] is the central bridge between field description and observable effects.