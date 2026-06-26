const e=`## 1. Hydraulic door closers

A hydraulic door closer aims to prevent the door from striking the frame. If damping is low, the door may rebound or close with impact. If [[gamma]] exceeds [[omega0]], the motion can become overdamped and approach equilibrium without visible oscillation. The useful reading is not only that impact disappears, but whether the final segment is completed within an acceptable time.

In real maintenance, the technician does not observe the roots directly, but observes the tail of the motion. If the closer moves quickly through the first degrees and then takes too long, the physical interpretation points to a small absolute value of [[r1]]. Adjusting the fluid path or valve changes dissipation and shifts that root.

Dominant variable: [[r1]], because it controls the slow closing tail.

Validity limit: the model fails if stops, dominant dry friction, variable hydraulic leakage, or strong temperature changes are present.

## 2. Pointer instruments and analog meters

In a pointer instrument, overshoot can make the reading difficult. An overdamped adjustment prevents the pointer from oscillating around the final value, but it can delay the reading. [[C1]] and [[C2]] depend on the initial displacement and velocity of the pointer, while [[r1]] and [[r2]] depend on the mechanical design.

This application is didactically useful because it separates visual precision from reading time. A pointer that does not rebound may look more professional, but if it takes several seconds to settle it introduces delay into the measurement. The leaf explains that difference through a concrete [[x]] curve.

Dominant variable: [[x]], because it represents the observable pointer displacement.

Validity limit: if the axle has dry friction or the magnetic field produces nonlinear forces, the response is no longer a clean sum of two exponentials.

## 3. Suspensions with slow return

Some vibration-isolating supports are designed not to transmit rebounds to protected equipment. If damping is high, the return after a disturbance can be overdamped. This protects against oscillation, but it may keep a residual deformation for longer than desired.

In optical benches, laboratory equipment, or sensitive machinery, that slow tail may be acceptable if it prevents secondary vibration. In other cases, such as a platform that must reposition quickly, the same behavior is a defect. The criterion comes from comparing the time associated with [[r1]] with the process being protected.

Dominant variable: [[gamma]], because it decides whether dissipation exceeds the natural scale.

Validity limit: large amplitudes, contact with stops, or time-dependent viscoelastic behavior require broader models.

## 4. Actuators and positioning systems

In an actuator, overdamping can avoid overshoot when approaching a delicate position. However, excessive [[gamma]] reduces agility. The [[x]] curve helps decide whether the control strategy prioritizes safety or speed.

This reading appears in robotics, lens positioning, and small gates. If the actuator approaches a fragile part, overshoot can be worse than slow arrival. If it works in repeated cycles, a slow tail increases process time. Therefore the same classification can be correct or inadequate depending on the objective.

Dominant variable: [[t]], because the practical criterion is often reaching a tolerance before a maximum time.

Validity limit: if active control varies, the motor saturates, or continuous external forcing exists, this leaf only describes an approximation of the free transient.

## 5. Biological systems and soft materials

Tissues, membranes, and soft materials can slowly return to an equilibrium shape after deformation. Over small intervals, the response may be approximated by a double exponential decay. The overdamped regime helps describe deformations without visible rebound.

This reading appears in relaxation tests, polymer recovery, and simplified tissue models. The sum of modes separates a quick initial recovery from a slower recovery associated with internal rearrangement. Even when the real material is more complex, the idea of a slow mode provides a first comparison scale.

Across all these applications, the common criterion is the same: observing no rebound is not enough. One must measure how long the slow tail takes to become irrelevant for the system objective. This leaf gives a compact way to discuss that tail through [[r1]], distinguish it from the fast transient associated with [[r2]], and decide whether extra damping is an advantage or a penalty. This reading is especially useful in teaching because it connects an abstract inequality with design decisions: closing without impact, measuring without oscillation, isolating without transmitting vibration, and recovering shape without visible overshoot.

The same reasoning also helps compare alternatives. Reducing damping may shorten the tail but introduce overshoot; increasing stiffness may raise the natural scale but demand stronger materials. The overdamped model therefore becomes a first diagnostic map before moving to detailed design.

Dominant variable: [[C1]] and [[C2]], because the initial preparation determines the weight of each mode.

Validity limit: real viscoelasticity often depends on history, amplitude, and temperature; if those effects dominate, constant roots [[r1]] and [[r2]] are only a local approximation.
`;export{e as default};
