const e=`# History of the electric motor

## Historical problem

At the beginning of the nineteenth century the only way to produce mechanical work on a large scale was the steam engine, tied to coal consumption and bulky, dangerous machinery. The unanswered question was whether electricity, that phenomenon recently tamed by Volta and Faraday, could be converted into motion in a controllable and reproducible way. Scientists knew that an electric current produced a magnetic field, and that magnets attracted or repelled one another, but no device existed that could convert that interaction into continuous rotation. The challenge was not only physical but also engineering: making an alternating-direction force produce a unidirectional, sustained torque over time.

## Prior conceptual difficulty

The main intellectual obstacle was that the force on a conductor in a magnetic field reverses direction when the conductor passes from one position to the opposite during rotation. Without a mechanism that reversed the current at precisely the right moment, a conductor pushed in one direction for half a turn would be braked for the other half, producing no net rotation. This problem of the alternating force direction was the conceptual knot that prevented building a practical motor. None of the known physical principles suggested in any obvious way how to keep torque always in the same direction without continuous external control. The intuition that current reversal had to be synchronised with rotor position took years to materialise into a working device.

## What changed

In 1821, Michael Faraday demonstrated that continuous rotation of a conductor around a permanent magnet was possible, albeit in a rudimentary form. The decisive advance came with Joseph Henry in 1831 and, more completely, with William Sturgeon and then with the engineers who developed the mechanical commutator in the 1830s. The commutator solved the alternating-direction problem: a pair of brushes in contact with shaft segments automatically reversed the winding's electrical connection every half turn, ensuring the Laplace force always acted in the same rotation direction. With that mechanism, the direct-current motor ceased to be a laboratory curiosity and became a reproducible, scalable machine.

## Impact on physics

The electric motor consolidated the understanding of the equivalence between mechanical work and electrical energy, a concept that formally precedes the energy conservation law of Joule and Helmholtz. The observation that the motor draws more current when driving a heavy load was the most direct experimental demonstration that electrical energy and mechanical energy are interchangeable forms of the same physical quantity. That result, obtained empirically before a complete theoretical framework existed, accelerated the development of classical thermodynamics and Maxwell's electromagnetic theory. The reciprocity between motor and generator, verified experimentally in the 1860s, demonstrated that the laws of induction and magnetic force are aspects of the same unified phenomenon.

## Connection with modern physics

The wound-rotor DC motor is today the reference device for understanding electromechanical conversion, but the family of motors has evolved enormously. Permanent-magnet motors with electronic commutation (BLDC motors) have replaced the mechanical commutator with microprocessor-controlled power transistors, eliminating brush wear and enabling speeds and efficiencies unattainable with mechanical technology. Variable-reluctance synchronous motors are the basis of today's electric vehicles. In all these cases the physical principle is the same one Faraday formulated: the force on a current in a magnetic field. Only the commutation mechanism has changed, progressing from mechanical to electronic and then to optical in nanoprecision actuators.
`;export{e as default};
