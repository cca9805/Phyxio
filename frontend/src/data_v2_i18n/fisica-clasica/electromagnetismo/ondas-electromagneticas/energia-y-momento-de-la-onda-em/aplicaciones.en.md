# Applications

## 1. Solar panels and power budget

A solar panel converts part of the average intensity [[intensidad_media_de_poynting]] of incident radiation into useful electrical power. The physical reading begins before efficiency: first we need to know how much electromagnetic power actually reaches the effective area [[area_iluminada]]. Only after that do efficiency, temperature, and conversion electronics enter.

Dominant variable: [[intensidad_media_de_poynting]].

Validity limit: intensity must be approximately uniform over the panel, and the area used must be the projected area facing the Sun. If the panel is tilted, its [[potencia_electromagnetica_incidente]] decreases even when the external radiation does not change.

This application forces the distinction between local intensity and total power. Two panels under the same light can have the same [[intensidad_media_de_poynting]] and still deliver different powers because their areas and efficiencies differ. The leaf supplies the first layer of the calculation: electromagnetic energy crossing a surface before transformation.

In energy diagnostics, this reading prevents blaming the incident field when the real problem is orientation, dirt, shadowing, or electronics. If [[intensidad_media_de_poynting]] is reasonable but [[potencia_electromagnetica_incidente]] is low, the first suspicion should be effective [[area_iluminada]], not the wave itself.

## 2. Radiation pressure in solar sails

A solar sail uses radiation momentum as a propulsion mechanism. Although [[p_rad]] is very small, it acts continuously and needs no propellant. Over large lightweight surfaces, the accumulated push can modify orbital trajectories across weeks or months.

Dominant variable: [[p_rad]].

Validity limit: the absorbing model is only a first estimate. Real sails seek high reflectivity, controlled orientation, and very light materials. If reflection dominates, the effective push changes and the model must be extended.

The application shows why [[densidad_de_momento_electromagnetico]] is not a theoretical ornament. Momentum transported by the wave becomes mechanical impulse. The intensity [[intensidad_media_de_poynting]] sets the order of magnitude of the push, while area and sail mass determine whether that push produces useful acceleration.

The practical interest lies in accumulation. A tiny push that would be irrelevant in a laboratory with friction can matter in space, where it acts for a long time without contact. Therefore [[p_rad]] should be read with geometry and mass, not as an isolated number.

## 3. Laser safety and thermal damage

In laser safety, high intensity can deposit dangerous power in small areas. The magnitude [[potencia_electromagnetica_incidente]] helps estimate how much power enters tissue, a sensor, or a coating. Radiation pressure is usually secondary; the main risk is thermal or photochemical.

Dominant variable: [[potencia_electromagnetica_incidente]].

Validity limit: if the field is intense enough to ionize air, change the material, or produce nonlinear effects, the classical plane-wave model is no longer sufficient. Spectral absorption, exposure time, and illuminated spot size must also be considered.

The didactic value is separating two questions that are easily confused. A large intensity does not always mean a large total power if the area is tiny, but if it is concentrated on sensitive tissue it can be dangerous. The chain [[intensidad_media_de_poynting]], [[area_iluminada]], and [[potencia_electromagnetica_incidente]] gives the first responsible estimate.

It also helps compare exposures. A wide beam may have larger total power and lower local risk, while a small spot may have modest total power but dangerous intensity. The safety decision depends on the magnitude controlling the damage mechanism.

## 4. Precision optics and microforces

In interferometer mirrors, microbalances, and optical cavities, radiation push can introduce measurable noise or displacement. Even when [[p_rad]] is small, these systems have low masses, delicate suspensions, and long integration times. Therefore electromagnetic momentum cannot be ignored.

Dominant variable: [[densidad_de_momento_electromagnetico]].

Validity limit: the absorbing model only estimates the order of magnitude. In real cavities and mirrors, reflection, multiple bounces, phase, mechanical stability, and spatial beam distribution matter.

This application connects the leaf with metrology. The wave behaves as a simultaneous carrier of energy and momentum. A small change in [[intensidad_media_de_poynting]] may not noticeably alter temperature, yet it can couple into a mechanical resonance or a sensitive interferometric reading.

The correct reading requires asking whether the device measures power, displacement, or force noise. If it measures displacement, [[p_rad]] can matter more than [[potencia_electromagnetica_incidente]]. If it measures heating, the opposite is true. The same beam can dominate different effects depending on the instrument.

## 5. Communications and receiving antennas

An antenna or receiver does not absorb the whole wave passing through a region; it captures a fraction associated with its effective area and electromagnetic matching. The intensity [[intensidad_media_de_poynting]] describes the available wave, while [[potencia_electromagnetica_incidente]] approximates captured power when the effective area is known.

Dominant variable: [[area_iluminada]].

Validity limit: the uniform-area model fails if the field varies strongly across the antenna, if polarization does not couple well, if nearby reflections exist, or if the receiver is in the source near field.

The application shows that the leaf is not only optical. In radiofrequency, microwaves, or visible light, the same energy-per-area idea organizes reception. The receiver responds to total available power, but that power begins as a local wave intensity.

In link design, separating [[intensidad_media_de_poynting]] from [[potencia_electromagnetica_incidente]] prevents confusing coverage with received energy. Coverage describes the field available in space; received power depends on geometry, orientation, polarization, and receiver coupling. The leaf supplies the physical bridge between both readings.