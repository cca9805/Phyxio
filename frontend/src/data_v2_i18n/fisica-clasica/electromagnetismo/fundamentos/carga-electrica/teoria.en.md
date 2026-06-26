## Conceptual context

Electric charge is the fundamental property that makes matter interact electromagnetically. Without electric charge there would be no Coulomb's law, no electric field, no circuits, and no light as an electromagnetic wave. The entire edifice of electromagnetism rests on this property.

In Phyxio's physics tree, electric charge opens the electromagnetism block because it acts as the conceptual starting point: before discussing forces, fields or potentials, we must understand which property of matter originates those effects. Charge is to electricity what mass is to gravity: the ultimate cause.

Electric charge is also special because it has two traits not shared by other classical physical quantities: it is **quantized** (exists only in discrete multiples of a minimum value) and **conserved** (the total charge of an isolated system never changes). These two properties define the electrical behavior of matter from atomic to power-circuit scales.

## 🟢 Essential level

Electric charge is the reason certain particles attract or repel each other. There are two types: positive (protons) and negative (electrons). Two charges of the same type repel; two of opposite types attract.

An everyday object is **electrically neutral** because it has equal numbers of protons and electrons. When you rub a balloon against wool, the balloon gains electrons and acquires negative [[carga_electrica]]; the wool loses electrons and acquires positive [[carga_electrica]]. The total charge of the system (balloon plus wool) has not changed: it has simply been redistributed.

Electric charge cannot be created or destroyed, only transferred. And it transfers always in discrete packets of minimum size [[carga_elemental]], the proton charge. The number [[numero_de_cargas_elementales]] of packets transferred is always an exact integer.

## 🔵 Formal level

Charge quantization states that every observable charge is an integer multiple of the elementary charge [[carga_elemental]]. For an object with [[numero_de_cargas_elementales]] elementary charges:

{{f:cuantizacion_carga}}

Here [[carga_electrica]] is the total charge, [[numero_de_cargas_elementales]] is an integer (positive for electron deficit, negative for excess), and [[carga_elemental]] is the proton charge, approximately 1.602 times ten to the minus nineteen coulombs.

This formula solves two types of problems: given [[numero_de_cargas_elementales]], calculate [[carga_electrica]]; given a measured [[carga_electrica]], determine how many electrons were transferred by solving for [[numero_de_cargas_elementales]]. The second rearrangement requires the quotient to be an exact integer, which serves as a coherence check.

For systems with multiple charged objects, the net charge is the algebraic sum of all partial charges:

{{f:carga_neta_sistema}}

The key here is that [[q_pos]] and [[q_neg]] are summed with their signs: positive charge contributes positively and negative charge negatively. Adding magnitudes and then assigning a sign is the most frequent error. In an isolated system, [[q_neta]] before any process must equal [[q_neta]] after: that is charge conservation.

The two formulas are not independent. Quantization states that each individual contribution to [[q_pos]] or [[q_neg]] is a multiple of [[carga_elemental]]; the net charge of the system is therefore also a multiple of [[carga_elemental]].

## 🔴 Structural level

Charge quantization is an empirical fact discovered by Millikan in 1909: he measured the charge of thousands of oil drops and found that all were multiples of the same minimum value. Quantization was observed before quantum mechanics partially explained it.

In modern physics, quarks carry fractional charges of [[carga_elemental]] (one-third and two-thirds), but are never observed free: they are confined in hadrons with integer total charge. This confinement preserves quantization in integer multiples of [[carga_elemental]] at macroscopic scale.

**Charge conservation** is a local law: charge cannot vanish at one point and appear at another without a charge flow between them. This local version is expressed by the continuity equation and underpins Kirchhoff's current law: at every circuit node, the net incoming current is zero.

> [!WARNING]
> Electrical neutrality does not imply the absence of internal charges. A neutral object can have positive charges in one region and negative charges in another, generating an intense dipole field at short distances. This is the basis of ionic bonding and dielectric polarization.

The SI unit of charge is the **coulomb (C)**: since 2019 it is defined as the charge transported by 1 A in 1 s, linking [[carga_electrica]] with current. Current is the rate of charge flow, not the charge itself.

Another structural implication: electric charge is a **relativistic invariant** — all observers measure the same [[carga_electrica]] for a given object regardless of their relative velocity. This contrasts with mass or length, which depend on the reference frame.

## Deep physical interpretation

Matter is **electrically discrete**: charge appears continuous at macroscopic scales because one microcoulomb corresponds to about six trillion elementary charges, making the granularity undetectable.

Charge conservation is not just an empirical observation: in modern theoretical physics it derives from **Noether's theorem** applied to gauge invariance of the quantum field. The deep symmetry and the conservation law are two faces of the same phenomenon.

> [!NOTE]
> When two neutral objects are rubbed together, no charge is created: electrons migrate from one to the other. The algebraic sum of [[carga_electrica]] for the system remains zero.

## Order of magnitude

The elementary charge [[carga_elemental]] is approximately 1.6 times ten to the minus nineteen coulombs; a lightning bolt discharges between 1 and 5 coulombs; a small laboratory capacitor stores between 1 and 100 microcoulombs.

For objects electrified by everyday friction, charges are in the range of nanocoulombs to microcoulombs. A result of coulombs for a rubbed balloon is absurd: it would equal a lightning discharge. One nanocoulomb corresponds to about six billion elementary charges; the reasonable range for a high-school laboratory is tens of nanocoulombs to tens of microcoulombs.

## Personalized resolution method

When solving electric charge problems, follow this sequence:

1. **Identify the system**: define which objects form the system and whether it is isolated.
2. **Inventory the charges**: list [[q_pos]] and [[q_neg]] of each object with correct signs.
3. **Apply conservation**: [[q_neta]] is constant for an isolated system; use this to find unknowns.
4. **Apply quantization when [[numero_de_cargas_elementales]] is requested**: divide [[carga_electrica]] by [[carga_elemental]] and verify the result is an integer.
5. **Check the scale**: confirm the order of magnitude is reasonable for the physical context.

Step 4 acts as automatic validation: if [[numero_de_cargas_elementales]] is not an integer, there is an error in the data or units.

## Special cases and extended example

**Case 1 — Electrification by induction**: A charged object approaches a neutral conductor without contact. The conductor's electrons redistribute internally: if the charged object is positive, conductor electrons migrate toward the closer side (induced negative charge there, positive on the far side). The conductor's net charge remains zero, but is no longer uniformly distributed. If the conductor is then grounded, some electrons can flow out and the conductor becomes negatively charged — without direct contact.

**Case 2 — Charge distribution between conductors in contact**: When two conductors with different charges are placed in contact, charge redistributes until the electric potential is equal in both. The total net charge is conserved; the final distribution depends on geometry and capacitance. For two identical spheres, the final distribution is equal.

**Case 3 — Neutralization**: If an object with positive [[carga_electrica]] and another with negative [[carga_electrica]] of the same magnitude are put in contact, electrons flow from the negative to the positive object until both are neutral. The system's total charge remains zero: no charge was destroyed.

## Real student questions

**Why are electrons the ones transferred and not protons?**

Protons are bound in the atomic nucleus with energies of millions of electron-volts. Removing them requires nuclear reactions. Outer-shell electrons, by contrast, are bound by just a few electron-volts and can be transferred easily by contact or friction. In solids, it is the conduction electrons that move; the nuclei are fixed in the crystal lattice.

**If I rub a balloon and it acquires negative [[carga_electrica]], where do the extra electrons come from?**

From the fabric or surface you rub against. During friction, electrons from the fabric surface migrate to the balloon because it has greater electron affinity. The fabric is left with an electron deficit (positive charge) and the balloon with an excess (negative charge). The total charge of the system (balloon plus fabric) remains zero.

**Can a particle have half an elementary charge?**

Quarks carry charges of one-third and two-thirds of [[carga_elemental]], but are never observed free: quantum chromodynamics confinement prevents extracting them from hadrons. At macroscopic scale and throughout classical physics, the answer is no: the minimum observable charge in free particles is [[carga_elemental]].

**Why do metals conduct electricity better if all their atoms have equal protons and electrons?**

In metals, the outer (valence) electrons are not bound to any particular atom; instead they form a shared "cloud" throughout the lattice. When an electric field is applied, these free electrons respond by moving collectively: that is current. In insulators, all electrons are tightly bound to their atoms and cannot move freely.

## Cross-cutting connections and study paths

Electric charge connects directly with [Coulomb's law](leaf:fisica-clasica/electromagnetismo/fundamentos/ley-de-coulomb): [[carga_electrica]] is the factor that determines the force between charged objects. The natural next step is the [electric field](leaf:fisica-clasica/electromagnetismo/fundamentos/campo-electrico), where [[carga_electrica]] acts as the proportionality factor between field and force on a test particle.

In advanced electromagnetism, [[carga_electrica]] is the source of the electric field in Gauss's law, and current (flow of [[carga_electrica]]) is the source of the magnetic field. Understanding [[carga_electrica]] means understanding the sources of all electromagnetic fields.

## Final synthesis

Electric charge is the fundamental property of matter that originates all electromagnetic interaction. Its quantization in integer multiples of [[carga_elemental]] and its absolute conservation are the two deepest laws of classical electromagnetism, experimentally valid without exception from atomic to macroscopic scales. Every electrical calculation begins with [[carga_electrica]].