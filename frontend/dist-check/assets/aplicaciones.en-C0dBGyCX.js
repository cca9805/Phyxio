const e=`# Applications\r
\r
## 1. Solar panels and power budget\r
\r
A solar panel converts part of the average intensity [[S_med]] of incident radiation into useful electrical power. The physical reading begins before efficiency: first we need to know how much electromagnetic power actually reaches the effective area [[A]]. Only after that do efficiency, temperature, and conversion electronics enter.\r
\r
Dominant variable: [[S_med]].\r
\r
Validity limit: intensity must be approximately uniform over the panel, and the area used must be the projected area facing the Sun. If the panel is tilted, its [[P_rad]] decreases even when the external radiation does not change.\r
\r
This application forces the distinction between local intensity and total power. Two panels under the same light can have the same [[S_med]] and still deliver different powers because their areas and efficiencies differ. The leaf supplies the first layer of the calculation: electromagnetic energy crossing a surface before transformation.\r
\r
In energy diagnostics, this reading prevents blaming the incident field when the real problem is orientation, dirt, shadowing, or electronics. If [[S_med]] is reasonable but [[P_rad]] is low, the first suspicion should be effective [[A]], not the wave itself.\r
\r
## 2. Radiation pressure in solar sails\r
\r
A solar sail uses radiation momentum as a propulsion mechanism. Although [[p_rad]] is very small, it acts continuously and needs no propellant. Over large lightweight surfaces, the accumulated push can modify orbital trajectories across weeks or months.\r
\r
Dominant variable: [[p_rad]].\r
\r
Validity limit: the absorbing model is only a first estimate. Real sails seek high reflectivity, controlled orientation, and very light materials. If reflection dominates, the effective push changes and the model must be extended.\r
\r
The application shows why [[g_EM]] is not a theoretical ornament. Momentum transported by the wave becomes mechanical impulse. The intensity [[S_med]] sets the order of magnitude of the push, while area and sail mass determine whether that push produces useful acceleration.\r
\r
The practical interest lies in accumulation. A tiny push that would be irrelevant in a laboratory with friction can matter in space, where it acts for a long time without contact. Therefore [[p_rad]] should be read with geometry and mass, not as an isolated number.\r
\r
## 3. Laser safety and thermal damage\r
\r
In laser safety, high intensity can deposit dangerous power in small areas. The magnitude [[P_rad]] helps estimate how much power enters tissue, a sensor, or a coating. Radiation pressure is usually secondary; the main risk is thermal or photochemical.\r
\r
Dominant variable: [[P_rad]].\r
\r
Validity limit: if the field is intense enough to ionize air, change the material, or produce nonlinear effects, the classical plane-wave model is no longer sufficient. Spectral absorption, exposure time, and illuminated spot size must also be considered.\r
\r
The didactic value is separating two questions that are easily confused. A large intensity does not always mean a large total power if the area is tiny, but if it is concentrated on sensitive tissue it can be dangerous. The chain [[S_med]], [[A]], and [[P_rad]] gives the first responsible estimate.\r
\r
It also helps compare exposures. A wide beam may have larger total power and lower local risk, while a small spot may have modest total power but dangerous intensity. The safety decision depends on the magnitude controlling the damage mechanism.\r
\r
## 4. Precision optics and microforces\r
\r
In interferometer mirrors, microbalances, and optical cavities, radiation push can introduce measurable noise or displacement. Even when [[p_rad]] is small, these systems have low masses, delicate suspensions, and long integration times. Therefore electromagnetic momentum cannot be ignored.\r
\r
Dominant variable: [[g_EM]].\r
\r
Validity limit: the absorbing model only estimates the order of magnitude. In real cavities and mirrors, reflection, multiple bounces, phase, mechanical stability, and spatial beam distribution matter.\r
\r
This application connects the leaf with metrology. The wave behaves as a simultaneous carrier of energy and momentum. A small change in [[S_med]] may not noticeably alter temperature, yet it can couple into a mechanical resonance or a sensitive interferometric reading.\r
\r
The correct reading requires asking whether the device measures power, displacement, or force noise. If it measures displacement, [[p_rad]] can matter more than [[P_rad]]. If it measures heating, the opposite is true. The same beam can dominate different effects depending on the instrument.\r
\r
## 5. Communications and receiving antennas\r
\r
An antenna or receiver does not absorb the whole wave passing through a region; it captures a fraction associated with its effective area and electromagnetic matching. The intensity [[S_med]] describes the available wave, while [[P_rad]] approximates captured power when the effective area is known.\r
\r
Dominant variable: [[A]].\r
\r
Validity limit: the uniform-area model fails if the field varies strongly across the antenna, if polarization does not couple well, if nearby reflections exist, or if the receiver is in the source near field.\r
\r
The application shows that the leaf is not only optical. In radiofrequency, microwaves, or visible light, the same energy-per-area idea organizes reception. The receiver responds to total available power, but that power begins as a local wave intensity.\r
\r
In link design, separating [[S_med]] from [[P_rad]] prevents confusing coverage with received energy. Coverage describes the field available in space; received power depends on geometry, orientation, polarization, and receiver coupling. The leaf supplies the physical bridge between both readings.\r
\r
`;export{e as default};
