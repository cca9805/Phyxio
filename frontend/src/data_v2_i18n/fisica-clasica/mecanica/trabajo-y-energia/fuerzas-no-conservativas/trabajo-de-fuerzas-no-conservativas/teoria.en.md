# Work Done by Non-Conservative Forces

## Conceptual Context

In an ideally conservative system, mechanical energy only changes form between kinetic and potential contributions. Real processes often include agents that add or remove mechanical energy: friction, motors, drag, irreversible deformation, or braking mechanisms. This leaf organizes those situations through one central quantity: non-conservative work [[Wnc]] measures how much the system's mechanical energy changes.

The didactic goal is not to memorize a balance law, but to answer three questions with discipline. First, what is the system? Second, which interactions are collected inside [[Wnc]]? Third, does the comparison between [[Emi]] and [[Emf]] describe a mechanical gain, a mechanical loss, or effective conservation?

## 🟢 Essential Level

Non-conservative work appears when final mechanical energy differs from initial mechanical energy. If a motor accelerates a cart, the system gains mechanical energy. If friction slows a block, the system loses it. Total energy is not destroyed, but the mechanical part available inside the chosen description changes.

The first decision concerns system boundaries. The system must be fixed before deciding whether an action counts as external non-conservative work. A manual push may add energy to a skater if the system is the skater alone; if the system is enlarged to include the person pushing, the energetic reading changes.

Sign matters. Positive [[Wnc]] indicates net mechanical input; negative [[Wnc]] indicates net mechanical removal. [[dEm]] expresses exactly that signed change. A correct solution therefore does more than solve for an unknown: it states what physically happened to the system's mechanical energy.

## 🔵 Formal Level

The general balance between initial and final mechanical energy is:

{{f:balance_general_no_conservativo}}

This relation gives [[Emf]] when [[Emi]] and [[Wnc]] are known. It can also be inverted to diagnose the required non-conservative work from two known states.

The same statement can be written directly as a mechanical-energy change:

{{f:variacion_energia_mecanica_no_conservativa}}

This form is especially useful for interpreting the sign of the process. If [[dEm]] is negative, mechanical energy decreases; if it is positive, mechanical energy increases.

The state energies are built through:

{{f:energia_mecanica_inicial_componentes}}

{{f:energia_mecanica_final_componentes}}

These expressions prevent a common mistake: mixing initial kinetic energy [[Ki]] with final potential energy [[Uf]], or mixing final kinetic energy [[Kf]] with initial potential energy [[Ui]]. Each sum belongs to a definite state and a consistent energy reference.

When the statement gives the four state contributions explicitly, use:

{{f:trabajo_no_conservativo_por_estados}}

This is the explicit state-to-state formula that had to be represented directly in the leaf. It shows that non-conservative work equals the difference between the final energy package and the initial one.

If the goal is to solve for a specific final contribution, the most operational form is:

{{f:relacion_completa_entre_estados}}

It lets the student isolate [[Kf]] or [[Uf]] once non-conservative work has been identified. The workflow is stable: define the system, classify states, decide whether to use [[Emi]] and [[Emf]] or their components, and then close the balance.

## 🔴 Structural Level

The model is valid only if both states refer to the same system and to compatible energy references. One cannot build [[Emi]] with one potential-energy zero and [[Emf]] with another without compensating for that change. Likewise, a loss already accounted for elsewhere must not be hidden again inside [[Wnc]].

"Non-conservative" does not mean "always dissipative". A motor, an athlete, or a traction mechanism may generate positive [[Wnc]]. Friction and drag usually generate negative [[Wnc]]. The same balance admits both signs; the physical interpretation changes with the sign.

There is also a structural limit. This leaf provides a two-state energetic balance, not the full time evolution of each force. If the non-conservative force depends strongly on time or speed, the global balance may still be valid, but computing [[Wnc]] requires an additional force model. That distinction prevents asking the energy balance to do work it was not designed to do.

## Deep Physical Interpretation

Expert reading separates internal redistribution from external or dissipative transfer. Conservative interactions redistribute energy between kinetic and potential forms. Non-conservative interactions alter the total mechanical energy available. This is why [[Wnc]] is not algebraic decoration: it identifies the mechanism that makes a process depart from conservative behavior.

The same [[Emf]] may hide different physical histories. A cart may finish with 400 J because it started with 500 J and lost 100 J, or because it started with 100 J and received 300 J of non-conservative work. The final number is identical, but the physics is not. The analysis through [[Wnc]] distinguishes those cases.

## Order of Magnitude

In introductory problems, non-conservative work of a few joules or a few tens of joules appears in blocks, springs with losses, or small pushes. In technical systems, brakes, lifting devices, and industrial machines may change mechanical energy by kilojoules or megajoules. Order of magnitude helps judge whether the answer is plausible.

It also acts as a sign check. If a motor must raise and accelerate a load, a negative [[Wnc]] would be physically suspicious. If a piece slows down through resistance without external help, a positive [[Wnc]] would require revisiting the system boundary or the data.

## Personalized Resolution Method

1. Define the system and the two compared states.
2. Classify conservative and non-conservative contributions.
3. Build [[Emi]] and [[Emf]] from [[Ki]], [[Ui]], [[Kf]], and [[Uf]] when needed.
4. Choose the general balance or the explicit state-to-state relation.
5. Rearrange symbolically before substituting numbers.
6. Interpret the sign of [[Wnc]] and [[dEm]] before closing the result.
7. Check that the answer does not violate a basic condition, such as a negative final kinetic energy.

## Special Cases and Extended Example

If [[Wnc]] is zero, the balance recovers mechanical-energy conservation. If [[Wnc]] is negative, the system loses mechanical energy through dissipation or resistance. If [[Wnc]] is positive, an external action provides mechanical energy and may increase speed, height, or useful deformation.

Guide example: a cart starts with known [[Ki]] and [[Ui]], climbs a ramp, and receives assistance from a motor. If the motor work exceeds the required potential-energy increase, [[Kf]] may grow. If it does not, the cart may arrive more slowly. The same formal structure distinguishes both outcomes without changing the model.

## Real Student Questions

- **Why can [[Wnc]] be positive if the idea is often introduced through friction?**  
  Because "non-conservative" means that total mechanical energy changes, not that it must always decrease.

- **When should I use [[dEm]] and when should I use the state-by-state balance?**  
  Use [[dEm]] to read the global change. Use the state expression when kinetic and potential energies must be separated at the start and at the end.

- **Can I claim there is dissipation just because [[Wnc]] is negative?**  
  You must justify the mechanism. Negative [[Wnc]] indicates net mechanical loss, but the model must identify whether it comes from friction, drag, or another interaction.

- **What should I review if I obtain negative [[Kf]]?**  
  Review the sign of [[Wnc]], the construction of [[Ui]] and [[Uf]], and whether the proposed final state is physically reachable.

## Cross-cutting Connections and Study Paths

This leaf extends the principle of energy conservation and prepares the study of friction and dissipation. It also connects with power, because the same non-conservative work may occur slowly or rapidly, and that difference matters in technical applications.

Mechanically, the leaf is the bridge between ideal conservative problems and real situations involving motors, braking, drag, or internal losses. It is a global reading tool, complementary to Newton's equations when the goal is to close states rather than describe instantaneous evolution.

## Final Synthesis

Mastering non-conservative work means explaining why mechanical energy changes and by how much. The final objective is to build coherent state balances, interpret the sign of [[Wnc]] and [[dEm]], and decide whether the chosen system gains, loses, or preserves mechanical energy inside the adopted model.
