## 1. hydraulic lifting systems

Dominant variable: [[p]]  
Validity limit: nearly uniform pressure and negligible losses

In a hydraulic lift, pressure generated in a small piston is transmitted to a larger piston. The relevant technical decision is not only to increase force [[F]], but to choose areas [[A]] that produce useful output force without requiring unsafe pressure.

The dominant hypothesis is that the fluid is confined and pressure is transmitted almost uniformly. If leakage, pipe deformation, or important viscous losses appear, the ideal model is no longer sufficient.

The physical interpretation is direct: the design converts a local pressure reading into total force through area. A moderate pressure can lift large loads if the output piston area is large.

The concrete decision is to choose piston diameters so that the working pressure does not exceed the circuit limit. If more force is needed, increasing [[p]] is not always the best option; increasing [[A]] at the output actuator may be safer.

## 2. tires and ground contact

Dominant variable: [[A]]  
Validity limit: approximate static contact and representative mean pressure

Tire pressure determines how the vehicle weight is distributed over the contact patch. If internal pressure is too low, the contact area increases and the tire deforms more; if it is too high, the area decreases and grip may change.

The dominant hypothesis is that a mean pressure is being used. Real contact is not perfectly uniform, but the average reading supports practical decisions about safety, wear, and consumption.

The concrete decision is to adjust the manufacturer-recommended pressure, not to add pressure without criterion. The limit appears when the tire heats up, deforms strongly, or works outside its rated load.

The useful reading is to compare pressure, footprint, and load. A correct value of [[p]] keeps the contact zone stable; an incorrect value changes force distribution and may affect braking, wear, and lateral stability.

## 3. suction cups and seals

Dominant variable: [[p_man]]  
Validity limit: stable sealing and known effective area

A suction cup works by creating an internal pressure lower than atmospheric pressure. The holding force depends on the pressure difference and the effective area. That is why a small leak can strongly reduce the supported load.

The dominant hypothesis is that gauge pressure is nearly uniform inside the cavity. If the surface is rough or porous, air enters and the pressure difference disappears.

The physical interpretation avoids a classic error: the suction cup does not actively pull the wall. The outside atmosphere pushes because the internal pressure is lower.

The concrete decision is to estimate available force with [[F]] = [[p]][[A]] using the magnitude of the pressure difference. If the sealed area shrinks because of a fold, the maximum force also decreases even if the gauge reading is unchanged.

## 4. pressurized vessels

Dominant variable: [[p_abs]]  
Validity limit: internal pressure measured with the correct reference

In gas bottles, boilers, and tanks, absolute and gauge pressure are not interchangeable. For structural safety, the difference with the outside often matters; for thermodynamic models, absolute pressure matters.

The dominant hypothesis is that the sensor and the calculation use the same reference. If [[p_man]] is inserted where an equation requires [[p_abs]], the prediction may be wrong.

The concrete decision is to label every pressure datum: absolute pressure, gauge pressure, or pressure difference. That label is as important as the number.

In technical inspection, this distinction prevents overdesigning or underdesigning valves and walls. Structural calculation often uses pressure difference, while thermodynamic calculation requires [[p_abs]].

## 5. pressure underwater

Dominant variable: depth  
Validity limit: fluid at rest and approximately constant density

In diving, pools, and tanks, pressure increases with vertical depth. The decisive variable is not the path followed by the diver, but the vertical distance below the surface.

The dominant hypothesis is that the water is at rest and density does not change appreciably. In deep water, stratified fluids, or accelerated systems, this approximation requires corrections.

The physical interpretation helps anticipate risk: only a few meters of depth already add significant gauge pressure on ears, masks, and container walls.

The concrete decision is to use vertical depth, not traveled path. On a submerged ramp, two points at the same depth have the same hydrostatic pressure even if they are horizontally separated.

## Operational closing for applications

In all the applications above, the technical decision depends on not confusing the local quantity [[p]] with the total force [[F]]. This separation makes it possible to decide whether to change working pressure, increase area [[A]], change the measurement reference, or check whether pressure comes from a fluid column.

A common pattern also appears: the model must be declared before substituting numbers. A small piston may only need uniform pressure; a deep wall requires depth; a pressurized vessel requires separating [[p_abs]] and [[p_man]]. The same word pressure appears in all cases, but the physical reading changes with the system.