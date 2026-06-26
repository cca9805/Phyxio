const e=`# Screw - Theory and fundamentals

## Conceptual context

The screw is one of the most sophisticated simple machines in classical mechanics, representing the evolutionary culmination of the inclined plane. Its primary function is the transformation of a pure rotational motion into a linear translational motion, allowing a force multiplication that exceeds by orders of magnitude that of conventional levers or pulleys of similar size. In geometric terms, a screw is nothing more than an inclined plane that has been wound in the form of a helix around a central cylinder.

The genius of this mechanism lies in its compactness. While moving a one-ton rock with a lever would require an arm several meters long, a screw of just a few centimeters can achieve the same effect through the cyclic repetition of turns. This property makes it indispensable in any application requiring millimeter precision combined with immense forces.

---

## 🟢 Essential level

The screw is a distance-for-effort converter. Imagine we want to lift a heavy object a small height. We could lift it directly (doing a lot of force in a small distance) or push it up a very long and gentle ramp (doing little force over a long distance). The screw chooses this second option: it forces us to travel a very long circular path with our hand so that the load only advances a fraction of a millimeter upward or forward in each full turn.

This wound ramp creates what we call mechanical advantage. Thanks to it, the circular effort we apply with a wrench or crank is multiplied to overcome an immense axial load. It is the same principle that allows a person of average build to lift an entire automobile using a simple screw jack: we are paying the effort with meters of rotation to obtain tons of concentrated pressure.

Fundamental concepts:
- **Thread pitch**: It is the height of the ramp. It is the linear distance the screw advances when we complete a 360-degree turn.
- **Lever arm**: It is the length of the tool we use to turn. The longer this arm, the less force we have to apply.
- **Friction and efficiency**: In the screw, the friction between the thread threads is very high. Although this causes us to lose energy, it is what allows the screw to stay still and not back up under load.

---

## 🔵 Formal level

In formal study, we quantify the screw's behavior by analyzing the balance of energy and forces. The basic mathematical model is built on the principle of virtual work, initially assuming an ideal system without friction losses to establish the theoretical limits of the design.

### 1. Geometry of the Helical Inclined Plane
If we unwrap a single turn of the screw thread, we will obtain a right triangle where the base is the circumference covered by the lever radius and the height is the thread pitch [[p]]. The relationship between these two lengths defines the mechanism's theoretical power and its motion transformation capacity.

**Ideal mechanical advantage**

{{f:ventaja_mecanica_ideal}}

This expression shows us that force multiplication is proportional to the relationship between the rotation circumference and the axial advance. A screw with a very small pitch and a long lever will produce an almost infinite force in theory, limited only by the strength of the materials involved.

### 2. The Ideal Force Model
Under ideal equilibrium conditions, the minimum tangential force [[F]] to initiate load movement [[R]] is calculated assuming there is no heat dissipation. It is the theoretical lower limit of effort that every engineer must know before sizing a real system:

{{f:fuerza_ideal}}

### 3. Dynamics with Friction: The Real Model
In reality, the contact between the metallic surfaces of the thread generates considerable friction that consumes part of the input work. We introduce the efficiency [[eta]], an efficiency factor that usually ranges between 0.15 and 0.45 in standard power screws. The real force we must apply is always greater than the ideal one to compensate for these dissipative losses:

{{f:fuerza_real}}

This efficiency is defined as the proportion of useful energy that reaches the load versus the total energy supplied by the operator or the drive motor:

{{f:eficiencia}}

And to complete the formal sizing model of the screw system, we also use:

{{f:torque_basico}}

{{f:torque_real}}

{{f:condicion_geometria}}

{{f:error_rendimiento}}

---

## 🔴 Structural level

From a structural perspective, the screw is a self-locking system whose safety depends critically on internal friction. It's not just about moving loads, but about holding them safely against gravity without the need for external brakes.

### The self-locking phenomenon
A screw is structurally safe if it is capable of sustaining the axial load [[R]] without the need for an external retaining force [[F]]. Physically, this occurs when the friction angle of the materials is greater than the helix inclination angle. Mathematically, the self-locking condition is usually met when the efficiency [[eta]] is less than 50 percent. If we designed a screw that was too efficient, the load could fall on its own, spinning the screw in the opposite direction.

### The Input Torque
In machine design, we don't usually talk about linear input force, but about torque [[tau]] or twisting moment. It is the rotation effort that a motor or operator must supply. Basic torque relates to the driving lever and the applied tangential force:

However, the real design torque must include the screw's resistance and its inherent inefficiency due to friction:

### Structural validity limits and model failures
The helical inclined plane model is a valid approximation as long as the geometric condition is met that the thread pitch [[p]] is significantly smaller than the circular path covered. If the pitch were comparable to the circumference, the screw would stop behaving as a simple force-multiplying machine. Furthermore, the relative error between the ideal and real model grows exponentially with friction, making the ideal calculation insufficient for sizing real structures:

---

## Deep physical interpretation

The screw operates as a mechanical impedance transformer. Just as an electrical transformer converts high voltage and low current into low voltage and high current, the screw converts high angular velocity and low torque into low linear velocity and high axial force. This transformation is a conservative process in terms of ideal power, but the parameter [[eta]] reminds us that the real world is dissipative and generates heat at each contact surface.

The magic of the screw is that it allows a human being to apply industrial-scale pressures. By turning a crank, we are traveling a path so long that the required force density is minimal at each point. It is a victory of geometry over material resistance. However, that same geometry imposes limits: a screw designed for extreme force will be extremely slow for displacement, illustrating the eternal compromise of mechanics: you never gain force without paying in distance traveled.

---

## Order of magnitude

To visualize these magnitudes, let's analyze a standard workshop car jack:
- **Lever radius [[r]]**: 0.25 meters.
- **Thread pitch [[p]]**: 0.004 meters.
- **Axial load [[R]]**: 8000 Newtons.
- **Ideal mechanical advantage**: Approximately 393. This means that ideally we would only need 20 Newtons to lift the car.
- **Real efficiency [[eta]]**: 35 percent.
- **Real force [[F]]**: Results in about 58 Newtons. It is still a very light effort, equivalent to holding a heavy grocery bag, but capable of lifting a ton of mass without difficulty.

---

## Personalized resolution method

To address any screw problem, follow this systematic five-step protocol:
1. **Unknown mapping**: Determine if the goal is to find the input effort [[F]], the supported load [[R]], or the total torque [[tau]].
2. **Unit homogenization**: The pitch [[p]] usually comes in millimeters in catalogs; always convert it to meters by dividing by 1000 before performing any operation.
3. **Calculation regime selection**: If the statement mentions explicit friction or chafing, necessarily use the \`fuerza_real\` model. If not, calculate the \`fuerza_ideal\` indicating that it is a theoretical lower limit.
4. **Torque calculation**: Multiply the found tangential force by the lever arm [[r]] to obtain the torque [[tau]] in units of Nm.
5. **Physical safety check**: Verify if the result makes physical sense (e.g., the applied force must be much smaller than the lifted axial load).

---

## Special cases and extended example

**High-efficiency screws**: There are systems where sliding is replaced by rolling steel balls (ball screws). Here the efficiency [[eta]] rises to 90 percent. These systems are NOT self-locking: if the input force is removed, the load falls under its own weight. They are used in high-precision robotics where speed is a priority.

**Industrial press example**: A workshop press applies 15 Nm of torque with a 2 mm pitch screw and 30 percent estimated efficiency. The resulting axial load [[R]] is 14137 Newtons. This demonstrates that a small hand tool can generate a closing force of 1.4 tonnes, enough for heavy manufacturing processes.

---

## Real student questions

**Why if the mechanical advantage is so high, is it sometimes so hard to turn the screw?**
It is generally due to an efficiency [[eta]] degraded by lack of lubrication or dirt accumulated between the threads. Friction can rise so much that the operator ends up making more force to overcome the internal friction than to move the useful load.

**What happens if the lever radius [[r]] is very small in the design?**
Mechanical advantage decreases drastically. If you try to turn a power screw with your fingers, the required tangential force [[F]] tends to infinity due to the lack of a lever arm, which is why we always need long driving tools.

**Does the thread pitch [[p]] directly influence the feed speed?**
Yes, it is an inverse relationship. A small pitch gives a lot of force but requires many full turns to advance barely one centimeter. It is the fundamental gear change of power screw mechanics.

---

## Cross-cutting connections and study paths

The study of the screw opens the door to advanced concepts in applied physics and engineering:
- **Rotational Dynamics**: The concept of torque [[tau]] is central here and is deepened in the study of rigid body equilibrium and moments.
- **Thermodynamics**: The heat generated by low efficiency [[eta]] is a direct application of energy dissipation by surface friction.
- **Elasticity**: Immense axial load [[R]] subjects the screw core to compression stresses that are studied in advanced strength of materials.
- **Inclined Plane**: It is the conceptual basis of the helix; understanding force decomposition is the first step in formalizing the screw.

---

## Final synthesis for exams

The screw is the most efficient effort converter in classical engineering when evaluated in terms of force multiplied by space occupied. It combines the geometry of the inclined plane with lever action to produce extraordinary [[ventaja_mecanica]]. Its low efficiency [[eta]] is not a defect but a safety feature that makes it the self-locking machine par excellence.

Key points for success in the physics exam:

1. **Ideal mechanical advantage** is a purely geometric property:

2. **The real design model** must always include efficiency:

3. **Self-locking** is a function of friction and the low slope of the pitch [[p]].

4. A common mistake in problems is forgetting the unit conversion from millimeters to meters.

5. **Torque** [[tau]] is the product of force by the lever arm:

6. The safe design condition requires always verifying the geometry:
`;export{e as default};
