const e=`# Energy and Momentum of an Electromagnetic Wave\r
\r
## Conceptual context\r
\r
An electromagnetic wave carries more than field oscillation. It also transports **measurable energy** and **linear momentum**. That is why radiation can heat a surface, power a panel, push a solar sail, or exert a tiny pressure on a mirror. This leaf studies how to move from wave fields to energetic and mechanical readings.\r
\r
The central idea is that the oscillating field [[E]] stores energy locally, and propagation turns that volume energy into a flux. The dominant magnitude is the average intensity [[S_med]], because it states how much power crosses each unit area. From it we read momentum density [[g_EM]], radiation pressure [[p_rad]], and total power [[P_rad]] over an effective area [[A]].
\r
## 🟢 Essential level\r
\r
An electromagnetic wave can be pictured as a moving front that carries energy distributed through space. The graph may show the instantaneous field [[E]], but the energy calculation uses the rms field [[E0]]. If that rms field increases, the energy stored in each small volume also increases; as that energy moves with propagation speed, an energy flux appears.
\r
The key intuition is to distinguish **local energy**, **local flux**, and **mechanical effect**. The density [[u_EM]] says how much energy sits in a small volume of the wave. The intensity [[S_med]] says how much power crosses a surface. Radiation pressure says how much push that transported energy can produce when absorbed.
\r
> [!NOTE]\r
> A wave does not need material mass to carry momentum. Electromagnetic momentum is tied to energy transport and becomes pressure when the wave interacts with a surface.
\r
## 🔵 Formal level\r
\r
The model uses a harmonic plane wave, rms values, and vacuum propagation. First the field scales are linked. The rms magnetic field [[B0]] is not chosen independently: it is fixed by [[E0]] and [[c]], preserving the transverse coupling of the wave.\r
\r
{{f:relacion_campos_rms}}\r
\r
Average energy per volume comes from the rms field. The constant [[epsilon0]] sets the electric scale of vacuum and converts the squared field into the density [[u_EM]]. Using an rms value avoids performing the time average explicitly.\r
\r
{{f:densidad_energia_rms}}\r
\r
When that volume energy travels with the wave, we obtain the average intensity [[S_med]]. This is the main operational reading: larger [[u_EM]] or faster propagation means more power crossing each square metre.\r
\r
{{f:intensidad_media_onda}}\r
\r
The same transported energy carries electromagnetic momentum. The density [[g_EM]] is small in ordinary units because converting energy into momentum involves the enormous scale of [[c]]. That smallness explains why light pressure is often subtle even when transferred energy is noticeable.\r
\r
{{f:densidad_momento_onda}}\r
\r
If the wave is absorbed by a surface, momentum flux produces radiation pressure [[p_rad]]. If the total delivery is needed instead of local pressure, multiply intensity by the effective area [[A]] to obtain [[P_rad]].\r
\r
{{f:presion_radiacion_absorbente}}\r
\r
{{f:potencia_incidente_area}}\r
\r
> [!TIP]\r
> In problems, decide first whether the requested quantity is local per area, such as [[S_med]] or [[p_rad]], or a total device quantity, such as [[P_rad]].\r
\r
## 🔴 Structural level\r
\r
The deep structure of the leaf is a chain of conversions. The rms field [[E0]] fixes an energy density [[u_EM]]. Propagation turns that density into intensity [[S_med]]. Intensity then connects to two different readings: total power if an area [[A]] is involved, or mechanical push if absorption produces pressure [[p_rad]].\r
\r
This chain also imposes validity limits. The front must be approximately plane over the considered area. If the source is very close, the beam is tightly focused, the medium absorbs or disperses strongly, or the surface reflects rather than absorbs, the simple relations no longer give the full physical reading.\r
\r
The model is therefore a transport model, not a complete source model or material-interaction model.\r
\r
The distinction between [[S_med]] and [[P_rad]] is structural, not merely a unit change. [[S_med]] belongs to the wave in a region of space; [[P_rad]] belongs to the system intercepting the wave. Two detectors in the same radiation field can measure the same intensity and receive different powers if their effective areas differ.\r
\r
Electromagnetic momentum [[g_EM]] also has a structural reading. It is not added as an afterthought: it accompanies energy flux from the beginning. Therefore an absorbing surface receives impulse. The pressure [[p_rad]] is small because it is spread over area and because the scale [[c]] is enormous, but it is not decorative; in astronomy, precision optics, and solar sails it can accumulate measurable effects.\r
\r
> [!WARNING]\r
> Do not mix the absorbing case with the reflecting case. A perfectly reflecting surface reverses radiation momentum and changes the effective pressure. This leaf uses absorbed pressure as the base model.\r
\r
## Deep physical interpretation\r
\r
The wave energy is not stored in an invisible material support. It is distributed in the fields themselves. Therefore increasing [[E0]] has a strong energetic effect: a moderate rise of the field can produce a noticeable rise in [[u_EM]] and then in [[S_med]].\r
\r
Wave momentum clarifies a common question: if radiation has no rest mass, how can it push? The physical answer is that energy and momentum belong to the same electromagnetic transport. When the wave delivers energy to a surface, it also delivers momentum along the direction of travel.\r
\r
## Order of magnitude\r
\r
Sunlight near Earth has [[S_med]] around 1000 W/m2. Dividing that scale by [[c]] gives [[p_rad]] of a few micropascals for ideal absorption. A technical laser can exceed that intensity by many orders of magnitude, but the pressure is still usually small compared with ordinary atmospheric pressure.\r
\r
An absurd result is often detected by comparing scales: if ordinary illumination predicts gas-like mechanical pressures, [[S_med]] has probably been confused with [[P_rad]] or the division by [[c]] has been omitted.\r
\r
## Personalized resolution method\r
\r
To solve a problem, first identify the input: rms field [[E0]], density [[u_EM]], intensity [[S_med]], or total power [[P_rad]]. Then decide what physical output is requested. If a surface appears, think about [[p_rad]]; if a finite-area device appears, think about [[A]] and [[P_rad]].\r
\r
The recommended order is: convert fields into energy, energy into intensity, and intensity into momentum or power. At the end, check units: W/m2 for intensity, Pa for pressure, J/m3 for energy density, and W for total power.\r
\r
## Special cases and extended example\r
\r
A low-intensity wave can have nonzero fields and still produce nearly imperceptible pressure. That does not contradict the model: [[p_rad]] measures push per area, not the mere presence of a field. In delicate optical sensors, such a small force can matter because it is integrated over long times or acts on very small masses.\r
\r
Another subtle case involves the effective area [[A]]. A tilted panel does not intercept its whole geometric area as if it were perpendicular to the wavefront. In that case [[P_rad]] must be computed using the projected area. The common error is multiplying [[S_med]] by a surface that the wave does not actually cross.\r
\r
## Real student questions\r
\r
**Is intensity the same as energy?** No. [[S_med]] is power per area; [[u_EM]] is energy per volume. They are related because the energy moves with the wave, but they are not the same physical reading.\r
\r
**Why is there pressure if light is not a material fluid?** Because the wave carries momentum [[g_EM]]. When absorbed, that momentum changes the mechanical state of the surface and [[p_rad]] appears.\r
\r
**Can I always use the whole area of an object?** No. Use the effective area [[A]] that intercepts the wavefront. If the object is tilted or partly shadowed, the total geometric area overestimates [[P_rad]].\r
\r
**Why does [[B0]] look so small compared with [[E0]]?** Because in SI units both fields have different numerical scales and are connected through [[c]]. That does not make the magnetic field irrelevant.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf builds on [Coupled Oscillating Fields](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/campos-oscilantes-acoplados), where the transverse geometry of [[E0]] and [[B0]] is understood. It also connects with [Electromagnetic Spectrum](leaf:fisica-clasica/electromagnetismo/ondas-electromagneticas/espectro-electromagnetico), because different spectral regions can have very different intensities and material effects.\r
\r
The natural path is: coupled fields, energy and momentum, propagation in media, and technological applications. This prevents treating the wave as a mere curve and frames it as a physical transfer mechanism.\r
\r
## Final synthesis\r
\r
Energy and momentum in an electromagnetic wave are read through a coherent chain: rms field, energy density, intensity, pressure, and intercepted power. The intensity [[S_med]] is the central bridge between field description and observable effects.\r
\r
`;export{e as default};
