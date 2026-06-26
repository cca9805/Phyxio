# Applications

# Applications of the Wheel and Axle

## 1. Manual well winch

A traditional well winch consists of a horizontal axle of radius [[r]] of about 3–4 cm around which a rope is wound, and a crank handle of effective radius [[R]] of 35–45 cm. The operator applies a tangential effort [[FR]] at the handle. The rope pulls the bucket of water upward with a tension equal to the bucket weight [[Fr]].

In a well-maintained wooden or steel winch, [[eta]] is approximately 0.85–0.90. With [[R]] of 0.40 m and [[r]] of 0.035 m, the ideal [[VM]] is about 11.4 and [[VM_real]] is about 9.7–10.3. An operator applying 60 N can therefore lift a load of 580–620 N (roughly 60 kg of water and bucket).

The kinematic trade-off is evident: for every metre the bucket rises, the hand must travel about R/r metres of arc — roughly 11 m per metre of lift. To raise water from a 10 m depth, the operator performs 100 m of arm travel at sustained effort.

Dominant variable: [[VM_real]] — determines the maximum load a single operator can handle.

Validity limit: when the rope accumulates more than two layers on the axle, the effective radius [[r]] increases by approximately 5–10% per layer, reducing [[VM]] proportionally. The single-layer model breaks down.

## 2. Industrial valve handwheel

Large gate valves in water distribution and process pipelines use a wheel of [[R]] between 0.40 and 0.80 m to turn a valve stem (axle) of radius [[r]] of around 10 mm. The stem must overcome the friction between the gate and its seat, which can require torques of 200–400 N·m at full closure.

With [[R]] of 0.60 m and [[r]] of 0.01 m, the ideal [[VM]] is 60. Even with a low [[eta]] of 0.65 for a dry or corroded stem, [[VM_real]] is 39. An operator applying 100 N at the wheel produces a stem torque of 3900 N·m — more than sufficient for most industrial valves.

The design challenge is the opposite of the winch: the handwheel is too effective. Excess mechanical advantage means the operator cannot feel whether the valve is fully closed or starting to over-tighten, which can damage seats. Modern designs add torque-limiting mechanisms.

Dominant variable: [[R]] — the only design parameter accessible without replacing the existing valve.

Validity limit: the constant-[[eta]] model fails when the stem is corroded or dry (effective [[eta]] can drop to 0.30–0.40) or when differential pressure across the gate creates a normal force that far exceeds the static friction model's assumptions.

## 3. Wide-handle screwdriver

A screwdriver is a direct implementation of the wheel and axle: the grip [[R]] (10–25 mm radius) turns the blade [[r]] (typically 2–4 mm). The user's palm applies torque at the handle; the blade transmits it to the screw head.

A standard handle [[R]] of 18 mm and blade [[r]] of 3 mm give [[VM]] of 6. With [[eta]] of 0.92 for a clean steel-on-steel contact, [[VM_real]] is approximately 5.5. A 30 N palm force produces 165 N at the blade tip — sufficient to drive a 4 mm wood screw into pine.

Wide-handle screwdrivers (ergonomic tri-lobe or mushroom handles, [[R]] up to 35 mm) raise [[VM_real]] to 10–11, allowing the same operator to drive larger screws or work in harder materials. The increased handle diameter also reduces contact pressure on the palm, delaying fatigue.

Dominant variable: [[R]] — the ergonomic handle design is the primary lever of improvement for user comfort and effectiveness.

Validity limit: the screwdriver model breaks down when the screw head strips, the blade slips out of the slot (slip torque limit of the contact), or the user applies an axial force that pulls the blade out of engagement. At that point, the effective torque transmission becomes irrelevant.

## 4. Ship capstan

A ship's capstan is a vertical wheel and axle in which sailors push horizontal bars (the wheel, [[R]] of 0.8–1.2 m) to rotate a drum (the axle, [[r]] of 0.06–0.12 m) that hauls anchor chain or mooring ropes. The effective friction between chain and drum produces the output force [[Fr]].

With [[R]] of 1.0 m and [[r]] of 0.08 m, [[VM]] is 12.5. With [[eta]] of 0.70 (wet rope and cast-iron drum), [[VM_real]] is approximately 8.75. Three sailors each pushing with [[FR]] of 150 N contribute a total input force of 450 N, producing [[Fr]] of roughly 3900 N. This is enough to haul a light kedge anchor or warp a ship alongside a dock.

For heavier anchors, the capstan requires more sailors or mechanical assistance. This is why motor-driven windlasses replaced manual capstans in commercial shipping after 1900, though muscle-powered capstans remain standard on small yachts.

Dominant variable: [[sR]] and [[sr]] — in mooring applications, the rope hauled per capstan turn determines the operation speed. Larger [[r]] means more rope per turn but lower mechanical advantage, a direct design trade-off.

Validity limit: the constant-radius model breaks down when multiple layers of rope accumulate on the drum. The simple torque-balance model also fails if the capstan is used to generate dynamic loads (shock-loading from wave action), where inertia and rope elasticity must be included.

## 5. Bicycle pedal–sprocket system

A bicycle pedal and crank act as a wheel and axle where [[R]] is the crank length (typically 0.165–0.175 m) and [[r]] is the sprocket radius (which varies with the selected gear). The rider applies [[FR]] at the pedal; the chain transmits the output force [[Fr]] to the rear sprocket.

In the highest gear of a road bicycle, the front sprocket has [[R]] front of about 0.075 m (chainring radius) and the rear sprocket has [[r]] rear of about 0.013 m. Combined with the crank [[R]] of 0.170 m, the full transmission ratio gives a mechanical advantage of approximately 1.7 in the drivetrain sense — actually a speed multiplier, since [[Fr]] is less than [[FR]] in high gear. The bicycle is designed for speed, not force amplification.

In the lowest gear (large rear sprocket, [[r]] rear of about 0.055 m), the mechanical advantage rises to about 7, allowing the rider to climb steep gradients.

Dominant variable: [[eta]] — a poorly lubricated chain can reduce [[eta]] from 0.98 to 0.88, increasing the effective pedalling force needed by 14% for the same speed.

Validity limit: the fixed-radius kinematic model applies only in steady-state pedalling. During acceleration, the rotational inertia of wheels, sprockets, and rider legs adds resistive torques not captured by the static model.

- Drive wheels and axles.
- Rotating transmissions where radius, torque, and force matter.