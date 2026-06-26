# Applications

## 1. Bicycle wheel

Dominant variable: [[v_cm]]

A bicycle directly shows the bridge between translation and rotation. The wheel spins with [[omega]], the center advances with [[v_cm]], and the radius [[R]] connects both quantities. If there is no skid, the rolling condition estimates speed from spin.

Validity limit: there must be no locked braking, skidding, or dominant tire deformation.

## 2. Car wheel with ABS

Dominant variable: [[omega]]

A wheel sensor measures spin, but the system needs to infer advance. If spin drops too much relative to vehicle speed, the wheel may be locking. The physical bridge helps detect loss of rolling.

Validity limit: effective radius and contact state must be controlled.

## 3. Conveyor roller

Dominant variable: [[R]]

A roller converts axle spin into belt advance. If contact does not slip, belt speed is estimated from radius and angular velocity. If the belt slips, the relation no longer closes.

Validity limit: friction between roller and belt must be sufficient.

## 4. Sports ball

Dominant variable: [[theta]]

A launched ball may slide first and roll later. The transition is recognized when center advance and spin become compatible. The reading prevents confusing visible spin with ideal rolling.

Validity limit: the ideal model starts only after initial sliding has disappeared.

## 5. Video measurement

Dominant variable: [[a_cm]]

In a laboratory video, the center of the wheel and a mark on the rim can be tracked. If both measurements are coherent, rolling is validated. If not, the video reveals slipping or scale error.

Validity limit: the camera must calibrate length, time, and motion plane.

These applications share the same rule: the bridge between translation and rotation exists only if contact imposes it. The user must identify which quantity is measured, which quantity is inferred, and which observation would break the model. This turns the leaf into a tool rather than a formula list.

In all of them, the operational close must include a numerical scale. An urban bicycle moves in meters per second, not hundreds of meters per second. An industrial roller may have small radius and large [[omega]], but belt speed must be compared with expected production. A sports ball may spin fast without advancing much during initial sliding. A laboratory video can detect centimeter-scale differences if calibration is good. These scales turn the conceptual bridge into a diagnostic criterion.

It is also important to separate the measured variable from the inferred one. A sensor may measure [[omega]] while the model infers [[v_cm]]. A video may measure advance and infer [[theta]]. A tachometer may measure spin while engineering needs linear speed. If contact fails, that inference stops being valid. That is why each application must state its validity limit, not only calculate.

In a workshop, this distinction helps diagnose failures. If a tachometer reads high spin but the belt does not advance, there is slipping. If a bicycle advances less than predicted from wheel spin, there may be skidding or an incorrect radius reading. If a ball spins rapidly after leaving the hand but barely advances, it is not yet in ideal rolling. In all cases, the bridge acts as a coherence test between observations.

The most important didactic application is that it forces the whole system to be read. The formula does not live in the isolated wheel or in the isolated ground, but in their interaction. The same wheel may obey the relation on dry pavement and violate it on ice. The symbol did not change; the contact model changed.

In mobile robotics, this reading is used for odometry. The robot counts wheel turns and estimates how far it has advanced. If the floor is regular and there is no slipping, the bridge works well; if one wheel loses traction, the estimated position separates from the real position. In sensor design, this difference is corrected by comparing wheel spin with accelerometers, cameras, or external references.

In teaching, the applications build diagnostic questions. What does the instrument measure? What does the model infer? Which physical condition allows that inference? Which observation would destroy it? Answering those four questions is more useful than memorizing one version of the formula. The student learns that radius is not decoration, but the geometric scale converting spin into advance.

The same pattern applies to scooters, trains, printers, measuring wheels, and test benches. In all of them, spin may be easy to measure while advance is the quantity that must be controlled. Rolling allows one reading to become the other only while contact remains reliable. That is why a complete application must always close with a check of grip, scale, and spin direction.

A final practical check is redundancy. When possible, compare two independent measurements: wheel turns and traveled distance. Agreement supports ideal rolling; disagreement points to slipping, calibration error, or a wrong effective radius.

This is useful in teaching labs today.