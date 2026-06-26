const e=`# Exam-type example

## Problem statement

A conducting sphere, initially neutral, is electrified by contact with a source that transfers exactly 8.01 trillion (8.01×10¹²) electrons to it. Determine the electric charge acquired by the sphere, express it in microcoulombs, and calculate how many elementary charges make up that charge. A second object carrying a positive charge of 1.28 µC is then placed in contact with the charged sphere. Determine the net charge of the system formed by the two objects before and after contact.

## Data

- Number of electrons transferred: 8.01×10¹² electrons
- Elementary charge: 1.602×10⁻¹⁹ C (exact SI value)
- Object A: sphere initially neutral that receives the transferred electrons
- Object B: positive charge of 1.28 µC, equivalent to 1.28×10⁻⁶ C
- The objects are placed in contact in the second part of the problem

## System definition

The system consists of two macroscopic conducting objects. Object A is the electrified sphere; object B is the positively charged object. In the first part, only object A is relevant in isolation. In the second part, the system is {A + B} treated as isolated during the contact process.

## Physical model

The **quantized point-charge model** is applied: each transferred electron contributes a negative charge of magnitude [[e]] to the total charge of object A. The dominant quantity is [[q]], obtained directly from charge quantization. The net charge of the system {A + B} is obtained by algebraic sum of [[q_pos]] and [[q_neg]].

## Model justification

The point model is valid because the problem asks only for the total net charge, not the internal distribution. Object dimensions are not specified because they are irrelevant for calculating [[q_neta]]. Quantization applies because the problem specifies an integer number of transferred electrons; the model is exact in this context. The model would cease to be valid if the electric field at short distances from the surface were requested, where the geometric distribution would matter.

## Symbolic solution

To find the charge of object A, charge quantization is applied:

{{f:cuantizacion_carga}}

Object A has gained electrons, so [[n]] is negative (electron excess relative to the neutral state). The number of elementary charges is minus 8.01×10¹² and the charge [[q]] of object A results from multiplying [[n]] by [[e]].

For the system {A + B} before contact, charge conservation is applied:

{{f:carga_neta_sistema}}

The [[q_pos]] of the system is the charge of object B. The [[q_neg]] of the system is the charge of object A. The [[q_neta]] of the system before contact is the algebraic sum of both.

After contact, the [[q_neta]] of the system remains the same by charge conservation.

## Numerical substitution

For the charge of object A: multiply the number of electrons (8.01×10¹²) by the charge of one electron (1.602×10⁻¹⁹ C with negative sign). The product of 8.01×10¹² and 1.602×10⁻¹⁹ gives approximately 1.2832×10⁻⁶ C. With negative sign, the charge of object A is approximately minus 1.28 µC. Therefore [[q]] of object A is approximately minus 1.28 µC.

Quantization check: dividing 1.28×10⁻⁶ C by 1.602×10⁻¹⁹ C gives approximately 7.99×10¹² ≈ 8.01×10¹² (small difference due to rounding). [[n]] turns out to be a negative integer, consistent with quantization.

For the net charge of the system before contact: [[q_pos]] of object B approximately 1.28 µC, [[q_neg]] of object A approximately minus 1.28 µC. The algebraic sum gives [[q_neta]] practically zero, consistent with both charges being equal in magnitude and opposite in sign.

After contact, electrons from object A (excess) flow to object B (deficit) until both are balanced. The [[q_neta]] of the system after contact remains practically zero.

## Dimensional validation

For quantization: the number of elementary charges is dimensionless; the elementary charge has dimension coulomb. The product of dimensionless by coulomb gives coulombs, the correct dimension of total charge. Dimensional check: \`[1] · [I T]\` produces \`[I T]\` ✓.

For net charge: the sum \`[I T] + [I T]\` yields \`[I T]\`. Consistent dimensions ✓.

## Physical interpretation

The result reveals a noteworthy symmetry: the number of electrons transferred to object A was chosen exactly so that the charge of object A would compensate that of object B in magnitude. This is not a coincidence in the problem, but a pedagogical illustration of quantization: macroscopic charges are always multiples of [[e]], and it is perfectly possible to transfer exactly the number of electrons needed to compensate another charge.

The [[q_neta]] of the system {A + B} being practically zero before contact illustrates conservation: the system as a whole was already nearly neutral. After contact, the net charge remains the same because in an isolated system there is no creation or destruction of charge. What changes is the distribution between the two objects, not the total.

If the number of transferred electrons had been twice as large (16×10¹²), the charge of object A would have been approximately minus 2.56 µC and the [[q_neta]] of the system would have been approximately minus 1.28 µC: the system would end up with net negative charge. This illustrates that the final [[q_neta]] depends critically on the amount of transferred charge, not just the polarities of the objects.

---

# Real-world example

## Context

In an industrial electrostatic painting process, a spray gun applies a voltage that electrifies atomized paint particles. The particles acquire negative charge by corona effect and are attracted toward the grounded metal workpiece (initially with zero net charge). Controlling [[q]] on the particles determines deposition efficiency and coating uniformity.

In a laboratory test, a nozzle produces paint particles 5 µm in diameter that each acquire a charge of approximately 1 femtocoulomb (1×10⁻¹⁵ C). A jet of 3 million particles is directed toward the workpiece.

## Physical estimation

The total charge of the paint jet is the product of the number of particles times the charge per particle: 3×10⁶ particles multiplied by 1×10⁻¹⁵ C per particle gives 3×10⁻⁹ C, that is 3 nanocoulombs. This is the negative [[q_neta]] that reaches the workpiece if all particles are deposited.

A charge of 3 nC corresponds to approximately 1.87×10¹⁰ extra electrons: consistent with a small but measurable macroscopic charge detectable with a sensitive electrometer. The order of magnitude (nanocoulombs) is reasonable for small-scale industrial electrostatic processes.

If the process used 10 µm particles instead of 5 µm (eight times the volume), the charge per particle might scale with surface area and be approximately four times larger, bringing the total jet charge to tens of nanocoulombs. This changes the electric field generated by the jet and affects the trajectories of the particles themselves (space-charge effect).

## Interpretation

The electric charge of the particles is the variable that controls process efficiency. If [[q]] per particle is too small, particles are not deflected sufficiently toward the workpiece and are wasted. If [[q]] is too large, the particles repel each other (all carry the same sign) and disperse before reaching the workpiece: this is the space-charge effect.

The validity limit of the individual point-charge model here is the jet density: when particles are very close together, their mutual fields add in a complex way. The individual point-charge model is valid when particles are separated by more than ten times their own radius, approximately greater than 50 µm in this case.
`;export{e as default};
