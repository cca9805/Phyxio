# Exam-type example: The mechanical screw jack

## Problem statement

A mechanical jack is used to lift a heavy vehicle for an emergency repair. The jack's power screw has a thread pitch[[p]]of 4 mm and is driven by a rotating lever with an effective radius[[r]]of 25 cm. The system has an efficiency[[eta]]of 40 percent due to internal friction in the screw threads. Determine: (a) the tangential force[[F]]required to lift an axial load[[R]]of 5000 N, (b) the real mechanical advantage[[ventaja_mecanica]]of the system, and (c) the torque[[tau]]that must be applied to the lever to maintain constant movement.

## Data

The physical parameters of the system are as follows:
- Axial load (vehicle weight):[[R]](5000 N)
- Thread pitch converted to meters:[[p]](0.004 m)
- Effective lever radius:[[r]](0.25 m)
- Mechanism efficiency:[[eta]](0.40)

## System definition

The physical system is composed of a power screw and a manual driving lever. A quasi-static equilibrium regime is considered where the applied force[[F]]by the operator must overcome both the gravitational resistance of the axial load[[R]]and the dissipative friction forces at the thread interface. The mechanical advantage[[ventaja_mecanica]]of the system is defined as the force amplification capacity, relating the output axial load[[R]]with the input effort[[F]].

## Physical model

The helical inclined plane model with energy losses due to friction is adopted. The screw acts as a regime converter that transforms the circular work of the lever into linear axial work. The efficiency of the system is modeled by the parameter[[eta]], which links the real mechanical advantage[[ventaja_mecanica]]with the ideal one. It is assumed that the load[[R]]is uniformly distributed over the thread threads and that the radius[[r]]is constant throughout the operation.

## Model justification

The justification for this model lies in the dissipative nature of real power screws. Unlike an ideal lever, the screw presents a large contact surface where sliding under load generates intense friction that cannot be ignored. The use of efficiency[[eta]]is therefore essential to avoid underestimating the required force. We also verify the geometric scale of the mechanism to ensure functional advancement compared to the circular path.

## Symbolic solution

The resolution process connects the specific screw geometry with the necessary dynamic effort for equilibrium. First, we calculate the ideal mechanical advantage based on the geometric relationship between the rotation circumference and the helix pitch:

{{f:ventaja_mecanica_ideal}}

Next, we determine the real driving force[[F]]needed to move the axial load[[R]], integrating the mechanism's efficiency[[eta]]into the real energy balance:

{{f:fuerza_real}}

At this point, we can contrast this value with the theoretical ideal force that would be required if no friction existed:

{{f:fuerza_ideal}}

Finally, we calculate the real torque[[tau]]or twisting moment that the operator must supply on the spindle axis using the basic definition of leverage moment:

{{f:torque_basico}}

For this industrial design, the consolidated final operating torque is:

{{f:torque_real}}

## Numerical substitution

Before substituting, we verify the geometric condition that guarantees the screw operates as a simple machine with a functional helix angle:

{{f:condicion_geometria}}

1. **Ideal mechanical advantage**: By substituting the geometric values, we obtain a theoretical amplification of approximately 393 times.
2. **Real driving force**: Introducing the efficiency of 40 percent, the required force[[F]]turns out to be approximately **31.83 N**.
3. **Real torque**: The product of the force by the radius gives us a torque of approximately **7.96 Nm**.
4. **Model error**: The relative error[[error_relativo]]committed if we ignored friction would be **60 percent**:

{{f:error_rendimiento}}

## Dimensional validation

The input impulse or work must have consistent dimensions. Mechanical advantage[[ventaja_mecanica]]is a force ratio resulting in a dimensionless magnitude. In the real force expression, the numerator has units of work while the denominator has units of length, resulting in Newtons. Torque[[tau]]combines force and length resulting in Nm.

## Physical interpretation

The mechanical jack allows the operator to multiply their applied force[[F]]by a real factor of **157**. This means that with the effort equivalent to lifting a bottle of water, an axial load[[R]]of half a ton can be lifted. This gain is not free; it is paid by traveling an immense circular path to obtain a tiny axial advance[[p]]of only 4 mm.

From a causal perspective, the efficiency[[eta]]of 40 percent reveals that 60 percent of the work performed by the human is dissipated as heat at the thread interface. However, this inefficiency is structurally desirable: it is what guarantees the **self-locking** property. The high friction coefficient prevents the screw from "back-driving" under the weight of the vehicle. This is the fundamental reason why a screw jack can hold a car in the air without a brake; the friction torque is greater than the reversing torque generated by the load. This trade-off between efficiency and safety is a cornerstone of mechanical engineering for lifting devices. The calculation of global efficiency confirms this dissipative behavior:

{{f:eficiencia}}

This self-locking phenomenon is what distinguishes a screw jack from a pulley or a lever. In an ideal lever, if you release the load, it falls immediately. In the screw, the "inefficiency" becomes a passive brake. It is a profound design lesson: sometimes, the waste of energy (friction) is what allows the system's safe functionality. Without this 60% loss, the jack would be a death trap. The real mechanical advantage, therefore, is not just a number, but a trade-off between power and structural stability.

---

# Real-world example: Industrial press

## Context

In a carpentry workshop, a hand press is used to hold two pieces of wood together while the glue dries. The operator applies a torque[[tau]]of 15 Nm on the handle of the press. The screw has a fine pitch[[p]]of 2 mm and an estimated efficiency[[eta]]of 35 percent. The objective is to perform a physical estimation of the axial load[[R]]capacity.

## Physical estimation

We will perform an order of magnitude calculation to evaluate the energy balance per full revolution.

*   **Energy input**: The mechanical work injected is **94.25 J** for each 360-degree revolution, calculated from the torque[[tau]].
*   **Dissipative losses**: Approximately 65 percent of the energy (about **61 J**) is converted into heat due to the low efficiency[[eta]].
*   **Useful action**: About **33 J** perform the compression work.
*   **Resulting axial load**: By dividing the useful work by the pitch[[p]], the resulting axial load[[R]]reaches **16500 N**, which is equivalent to compressing with **1.7 tonnes**.

## Interpretation

The physical interpretation of this result underscores the duality of the screw: extreme force combined with passive safety. The low efficiency is not a useless loss, but the safety mechanism that prevents the press from loosening on its own when the operator lets go of the handle. The mechanical advantage[[ventaja_mecanica]]real remains high enough for a single human hand to control forces of level ton, ensuring the structural integrity of the joint. This structural stability depends on the helix integrity.
