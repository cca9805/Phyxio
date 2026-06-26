## Conceptual context

An electric motor is a device that converts electrical energy into rotational mechanical energy. It is the functional inverse of the generator: whereas the generator moves a conductor through a field to induce a voltage, the motor feeds a conductor with current so that the field imposes a movement on it. This inversion is not coincidental; both phenomena are manifestations of the same principle of interaction between moving charges and magnetic fields, and they share the same underlying equations.

Motors are the most widespread machine in modern civilisation. They drive everything from electric car windows to high-speed trains, including compressors in air-conditioning units, hard drives and hospital pumps. Understanding their operation at a physical level is not an academic exercise: it is understanding why certain design decisions have inevitable energetic and mechanical consequences.

## 🟢 Essential level

An electric motor converts electrical energy into rotation through the force exerted by a magnetic field on a current-carrying conductor. That force, perpendicular to both conductor and field, produces rotational torque when the conductor is attached to a mechanical shaft. The rotation direction depends on the current direction: reversing the current reverses the rotation direction.

The motor is conceptually a generator operating in reverse. While the generator produces electricity by rotating, the motor consumes electricity to rotate. Both devices share the same physical structure: a conductor moving inside a magnetic field. The difference is the energy source that drives the process.

This symmetry between motor and generator reveals a profound property of nature: electricity and motion are intimately related. The same device can function as a motor or as a generator depending on how it is energized.

## 🔵 Formal level

The mathematical description begins with the Laplace force on a conductor. A conductor of length [[longitud_activa_del_conductor]] carrying current [[corriente_de_armadura]] inside a field [[campo_magnetico_del_estator]] experiences a force proportional to the product of these magnitudes and the sine of the angle. With [[numero_de_conductores_activos]] active conductors, the total force is:

{{f:fuerza_laplace_motor}}

This force acts tangentially at distance [[r_a]] from the axis, generating motor torque [[tau_m]] that overcomes the load resistance:

{{f:par_motor_electrico}}

Rotor rotation within the field produces flux variation that, by Faraday's law, induces a voltage opposing the supply. At higher angular speed [[omega]], greater back-EMF [[epsilon_c]] is induced, automatically limiting current:

{{f:fem_contragiro_motor}}

The useful mechanical power at the shaft results from the product of torque and angular speed. This product quantifies the energy per unit time transferred from the electrical to the mechanical domain, representing the motor's effective capacity to perform work against external resistances:

{{f:potencia_mecanica_motor}}

Efficiency [[eta]] measures the fraction of consumed electrical power converted into useful mechanical power. The difference represents losses due to Joule heating in the winding, magnetic core losses and mechanical friction:

{{f:eficiencia_motor}}

## 🔴 Structural level

The five formulas above form a chained system where each variable is determined sequentially from the previous ones. The armature current [[corriente_de_armadura]], imposed by the difference between supply voltage and back-EMF, determines the Laplace force [[fuerza_de_laplace]] on each active conductor. This force, distributed among the [[numero_de_conductores_activos]] winding conductors, generates a collective mechanical action.

The resulting force, applied at distance [[r_a]] from the rotation axis, creates the motor torque [[tau_m]] that overcomes the mechanical resistance offered by the load. The angular speed [[omega]] reached by the motor-load system in turn determines the induced back-EMF [[epsilon_c]], which limits the available current at steady state. This loop closure establishes a negative feedback inherent to motor operation.

Motor torque and angular speed combined determine the mechanical power [[potencia_mecanica]] transferred to the shaft. Comparing this useful power with the total consumed electrical power [[potencia_electrica_consumida]] yields efficiency [[eta]], which quantifies the quality of the energy conversion. Losses, represented by the difference between input and useful power, are mainly dissipated as heat in the winding.

This chain of dependencies reveals that the motor is inherently stable: if the load increases, the speed tends to decrease, reducing back-EMF, which allows an increase in current and torque that compensates for the disturbance. This self-regulation mechanism enables DC motors to maintain approximately constant speed against moderate load variations without requiring external electronic control.

Motor design focuses on optimizing the constructive product that links the electrical and mechanical domains. The combination of the number of conductors, their active length, the magnetic field intensity and the armature radius determines the motor's torque constant. Maximizing this constant allows greater torque with lower current, reducing Joule losses and improving the device's overall efficiency.

## Deep physical interpretation

The Laplace force does not act on the isolated electron but on the entire conductor, including the metallic crystal lattice. Current drags electrons that collide with the lattice ions; those collisions transfer momentum to the lattice and, through it, to the conductor. That is why the entire conductor moves, not just the electrons.

[[epsilon_c]] has an equally deep interpretation: it is the manifestation of Lenz's law in the motor. As it rotates, the winding acts as a generator and produces a voltage that opposes the supply. That opposition is not a defect of the motor: it is the mechanism by which electrical energy is transferred to the mechanical shaft. Without back-EMF there would be no energy conversion, only dissipation in the internal resistance.

Efficiency [[eta]] never reaches unity because Joule losses in the winding, magnetic losses in the core and mechanical friction at the bearings always exist. Improving [[eta]] requires simultaneously reducing all three sources of loss, which has driven the development of permanent-magnet motors and high-quality laminated cores.

## Order of magnitude

A typical laboratory DC motor has an armature radius of about 0.03 m, 200 active conductors of 0.05 m active length, a field of 0.8 T and a nominal current of 2 A. The nominal torque is approximately 0.5 N·m. At 1000 rpm (about 105 rad/s) the mechanical power is approximately 52 W. That scale is typical of electromagnetism laboratory practicals and contrasts with industrial motors, where torque can be hundreds of N·m and power tens of kW.

In a DC motor for a small electric vehicle, current may be 50 A and field 1.0 T, with 500 active conductors of 0.10 m and radius 0.08 m, giving a torque of about 200 N·m, sufficient to move the vehicle from rest.

## Personalized resolution method

To solve any electric motor problem, the recommended order is as follows. First identify the known data among [[numero_de_conductores_activos]], [[corriente_de_armadura]], [[longitud_activa_del_conductor]], [[campo_magnetico_del_estator]], [[r_a]], [[sin_theta]] and [[omega]]. Second, calculate [[fuerza_de_laplace]] using the first formula and check the dimension. Third, obtain [[tau_m]] by multiplying [[fuerza_de_laplace]] by [[r_a]]. Fourth, if [[omega]] is known, calculate [[epsilon_c]] and [[potencia_mecanica]]. Fifth, with [[potencia_electrica_consumida]] and [[potencia_mecanica]], obtain [[eta]]. At each step, verify that the result has the expected order of magnitude before proceeding to the next.

If angular speed is in rpm, convert to rad/s by multiplying by 2π/60 before any calculation. If efficiency is given as a percentage, divide by 100 before using it in the formulas.

## Special cases and extended example

Motor start-up is the most important special case. At the initial instant [[omega]] is zero, so [[epsilon_c]] is zero and the full supply voltage drops across the small internal resistance. Start-up current can be ten or more times the nominal current, which can damage the winding. In practice, start-up current is limited by series resistors (rheostatic starting) or variable-speed drives (soft electronic starting).

The stalled motor case, where the rotor cannot rotate due to excessive load, is electrically identical to start-up: [[omega]] is zero, [[epsilon_c]] is zero and current is maximum. Without thermal protection, the generated heat can burn the winding in seconds.

Extended example: a DC motor with 300 active conductors, [[longitud_activa_del_conductor]] of 0.08 m, [[campo_magnetico_del_estator]] of 1.0 T, [[r_a]] of 0.05 m and [[corriente_de_armadura]] of 5 A operates at [[omega]] of 100 rad/s with [[sin_theta]] equal to 1. The force per conductor is [[corriente_de_armadura]] times [[longitud_activa_del_conductor]] times [[campo_magnetico_del_estator]], that is 0.4 N. The total force on [[numero_de_conductores_activos]] conductors is 120 N. Torque is 120 times 0.05, equal to 6 N·m. Mechanical power is 6 times 100, equal to 600 W. [[epsilon_c]] is 300 times 0.08 times 1.0 times 0.05 times 100, equal to 120 V. With a supply voltage of 130 V and back-EMF of 120 V, the steady-state current is approximately (130 minus 120) divided by the internal winding resistance. With 2 Ω resistance, current is 5 A, which verifies the consistency of the system.

## Real student questions

Why does the motor draw more current when it is stopped than when it is running? Because at rest back-EMF is zero and the full voltage drops across the small internal resistance. While running, [[epsilon_c]] grows and reduces the voltage difference available to drive the current.

Why does reversing the supply polarity reverse the direction of rotation? Because it reverses the direction of [[corriente_de_armadura]], which reverses the direction of the Laplace force according to the right-hand rule.

Can a motor act as a generator? Yes. If an external force rotates the shaft faster than what corresponds to the supply voltage, [[epsilon_c]] exceeds the supply and current reverses: the motor returns energy to the supply. This phenomenon is called regenerative braking.

Why do motors heat up more under heavy load? Because heavy load demands more torque, torque demands more current, and Joule losses are proportional to the square of the current.

## Cross-cutting connections and study paths

The electric motor connects directly with the generators leaf because both are symmetric applications of the same field-current interaction. It connects with Lenz's law through back-EMF, and with the law of energy conservation through the power balance. The torque-speed curve of the motor is the dual of the load curve of the generator. Whoever understands the generator can understand the motor by inverting the question: instead of asking what voltage a motion produces, one asks what motion a voltage produces.

At an advanced level, the DC motor is the prototype of all electric motors, including AC motors and reluctance motors. The differences are in circuit and geometry, not in physical principle.

## Final synthesis

The electric motor converts electrical energy into mechanical torque through the force that the stator field exerts on the rotor current. Torque is proportional to current, field and the motor's constructive parameters. [[epsilon_c]], generated by the same rotor as it rotates, limits current at steady state and is the mechanism by which energy is transferred to the shaft. Efficiency measures the quality of that conversion and is always less than one due to unavoidable losses. The motor's operating point is the intersection of its torque-speed curve and the resistive torque curve of the load.