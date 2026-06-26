const e=`# Applications

## 1. Organ pipes

Dominant variable: [[f_n]]

Validity limit: the ideal approximation works if the tube is narrow, temperature is nearly uniform, and the mouth behaves as a stable acoustic boundary.

Organ pipes directly show the difference between an open tube and a stopped tube. A tube open at both ends uses a complete modal series; a tube closed at one end produces an odd series and can give a low note with smaller effective length. Therefore the builder can choose not only the length [[L]], but also the end type to control pitch and timbre.

The quantity heard is [[f_n]], but design depends on [[L_eff]], [[v]], and the modal family. A real organ includes mouth corrections, bells, and coupling with room air. Even so, the ideal model explains why closing one end is not a minor detail, but a first-order acoustic decision.

In maintenance, this reading helps diagnose detuning. If all pipes shift upward when temperature rises, [[v]] dominates. If only one stopped-pipe family fails, the closed end, air leakage, or local effective length should be inspected.

## 2. Flutes and side holes

Dominant variable: [[L_eff]]

Validity limit: the simple model works while the opened hole can act as the dominant new acoustic boundary.

In a flute, opening a side hole reduces the effective length of the air column. The tube need not be physically shortened; it is enough to create an acoustic boundary before the end. When [[L_eff]] decreases, [[f_n]] increases and the pitch rises. This is a clear application of the fact that acoustic length does not always coincide with visible material length.

The interpretation requires care because holes are not perfect ideal ends. Their diameter, position, and combination with other holes modify the acoustic correction. The tube model gives a first reading for the scale of notes, but real instruments require extended models for fine tuning.

The application also shows that playing a wind instrument means controlling boundaries. The player does not significantly change sound speed; the player changes the available acoustic geometry. Therefore two fingerings may have similar effective lengths but different timbres.

## 3. Blown bottles

Dominant variable: [[lambda_n]]

Validity limit: a bottle resembles a tube only if neck geometry dominates compatibly; if volume dominates, another model is required.

When one blows across a bottle, an audible resonance appears. Students often think it is simply an open-closed tube, but many bottles behave better as resonators with a neck and cavity. Even so, the idea of acoustic boundary helps: the mouth allows air motion and the cavity restricts response.

The estimate with [[lambda_n]] and [[L_eff]] may give the order of magnitude, but the validity limit is important. If the bottle has a short neck and large volume, frequency depends strongly on the compressibility of trapped air. The application teaches that recognizing the model is as important as applying a formula.

In class, the bottle is useful precisely because it forces model discussion. If the tube prediction does not match the observed tone, the failure is not only numerical: it indicates that the cavity has another dominant mechanism.

## 4. Whistles and short tubes

Dominant variable: [[v]]

Validity limit: airflow must not be so turbulent that frequency is dominated by vortices rather than by the resonant column.

A whistle uses a short air column, so its frequencies are usually high. Since [[v]] in air is of order hundreds of metres per second, reducing [[L_eff]] to a few centimetres shifts [[f_n]] toward kilohertz. This reading explains why small objects produce high sounds.

In real whistles, the air jet interacts with edges and cavities. The ideal tube provides the scale, but not every detail. If the flow changes strongly, frequency can jump between modes or become unstable. Thus the application combines tube resonance and flow dynamics.

This reading separates pitch and loudness. Blowing harder may increase amplitude, but the stable frequency remains tied to modal compatibility as long as the flow regime does not change.

## 5. Acoustic diagnosis of ducts

Dominant variable: [[L]]

Validity limit: the duct must behave approximately as a one-dimensional column rather than as a complex three-dimensional cavity.

Ventilation ducts, test tubes, hoses, and laboratory resonators can produce hums when an external source excites a frequency close to [[f_n]]. The physical length [[L]], corrected to [[L_eff]], estimates which frequencies may be amplified. If the duct is partially closed, the series changes and different resonances appear.

This application is useful for diagnosing persistent noise. Instead of treating the sound as random, its frequency is compared with the order expected from length and sound speed. If it matches a resonance, one can change effective length, open an end, add damping, or move the source to reduce the response.

In real installations, this estimate avoids blind interventions. If the noise matches the first mode of a long duct, adding absorbing material or modifying an opening may be more effective than replacing the whole machine that excites the air.
`;export{e as default};
