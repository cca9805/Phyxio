const e=`# Applications of the Biot-Savart law

## 1. Magnetic calibration coil design

Circular coils are used to produce known fields in tests with Hall sensors, magnetometers, and electronic compasses. The Biot-Savart law estimates [[B]] at the center of a loop from [[I]] and [[R]], before measuring the field directly.

The dominant assumption is that the sensor is located at the geometric center. At that position, the [[dB]] contributions from all [[dl]] elements share one axial direction. If the sensor moves away, vector addition changes and the center formula no longer represents the setup.

In a real calibration, the sensor zero is measured first and then a known current is applied. The Biot-Savart estimate predicts whether the expected change will stand above instrument noise. It also helps choose a radius that does not require excessive current.

Dominant variable: [[R]] sets the geometric scale that concentrates or weakens the central field.
Validity limit: the model fails away from the center, with deformed coils, or with heating that changes current.

## 2. Field estimation near power cables

In electrical installations, Biot-Savart helps estimate the field near long conductors before measurements are made. For a sufficiently long straight section, the integrated result shows how [[B]] decreases as [[r]] increases.

The application is not only a numerical calculation. It helps choose separation distances, locate sensitive sensors, and compare cable routes. If outgoing and return conductors are close together, contributions from both conductors can partially cancel in distant regions.

This reading helps in electrical panels, test benches, and teaching laboratories. If an unexpected magnetic reading appears, the law guides the search: larger current, shorter distance, or a poorly closed return geometry.

Dominant variable: [[r]] controls the spatial loss of field around the conductor.
Validity limit: the long-wire model fails near ends, joints, bends, or grouped conductors.

## 3. Small coils in instrumentation

Many instruments use small loops to generate or detect fields. Biot-Savart explains why a compact coil does not behave like a straight wire. The orientation of each [[dl]] around the loop organizes the field along the axis.

In design, increasing [[I]] raises the field, but also increases dissipation. Reducing [[R]] increases the central field, but reduces the useful region. The law helps balance intensity, size, and uniformity without relying only on trial and error.

The final decision rarely maximizes field alone. An instrument needs stability, repeatability, and a useful region where the probe can be placed without extreme sensitivity to millimetres of position. Biot-Savart reveals that tension between intense field and usable field.

Dominant variable: [[I]] linearly scales the current contribution in the magnetostatic range.
Validity limit: real coils require resistance, heating, number of turns, and off-center field to be considered.

## 4. Geometry diagnosis in laboratory setups

When an experiment measures a field different from the expected one, Biot-Savart separates current errors from geometry errors. If [[I]] is stable but [[B]] changes when the probe is moved slightly, the issue is usually [[r]], [[R]], or the real orientation of the segments.

The differential reading is useful because it asks what each part of the conductor contributes. A misplaced clamp, a bent cable, or a noncircular loop may change the sum of [[dB]] without any change in the electrical supply.

It also documents uncertainty. If the setup is not perfectly circular, the ideal model gives a reference, but the technician knows that the deviation comes from geometry. That information is more useful than repeating a measurement without explaining its origin.

Dominant variable: [[dB]] helps locate which conductor segments dominate the measured field.
Validity limit: if nearby ferromagnetic pieces exist, the medium response no longer matches ideal vacuum.

## 5. Electromagnetic compatibility in compact circuits

On electronic boards, supply and return currents generate fields that can disturb magnetic sensors or signal loops. Biot-Savart explains why a large current loop produces more external field than compact routing.

The practical application is reducing loop area and keeping return close to outgoing current. Then contributions from neighboring segments tend to cancel at a distance. The law turns a design rule into a physical reading of vector addition.

It also helps decide where to place magnetometers inside portable equipment. Distance [[r]] to high-current traces and segment orientation determine whether the sensor measures the desired external field or the field produced by the device itself.

In equipment with batteries, small motors, or power converters, this application is critical. A short but very nearby trace may dominate the reading, while a longer one may cancel because it runs next to the return path. The law allows that difference to be reasoned before redesigning the board.

This makes placement decisions traceable to geometry, not only to empirical debugging.

Dominant variable: [[s_theta]] shows that trace orientation affects contribution at the sensitive point.
Validity limit: at high frequencies, wave models, parasitic inductances, and real current distribution are required.
`;export{e as default};
