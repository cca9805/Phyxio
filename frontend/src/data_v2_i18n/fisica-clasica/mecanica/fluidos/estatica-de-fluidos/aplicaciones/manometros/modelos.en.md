# Manometers - Model and validity

## Ideal model
The ideal model of this leaf is hydrostatic and can be summarized as:
[[dp]] = [[rho]] * [[g]] * [[dh]]
[[p2]] = [[p1]] + [[dp]]
Its educational strength is that it converts a geometric reading, [[dh]], into a pressure reading, [[dp]]. If the system is at equilibrium, the level difference is not a decorative feature: it is the way the instrument expresses a real pressure mismatch.

## Hypotheses
- The manometric fluid is at rest or in quasi-equilibrium.
- Density [[rho]] can be treated as constant.
- The reading [[dh]] is vertical.
- [[p1]] and [[p2]] use the same pressure reference.

## Quantitative validity domain
The model works especially well when the level difference can be read clearly and the instrument remains stable. In standard school and simple industrial situations, a reasonable criterion is to work with [[dh]] > 0 and with small oscillations relative to the mean level gap. It is also useful to keep one order of magnitude in mind: with water, 0.10 m corresponds to about 981 Pa; with mercury, only a few millimeters may already represent several hundred pascals. This quantitative contrast explains why fluid selection matters.

## Model failure signals
- The meniscus oscillates and no stable reading appears.
- The result changes too much depending on where the column is read.
- The inferred pressure contradicts expected system behavior.
- The statement mixes absolute and gauge pressure without clarification.

## Extended or alternative model
If the manometer contains several immiscible fluids or several interfaces, the model can no longer be reduced to one single [[rho]]. In that case an algebraic sum of hydrostatic segments is required. Each segment contributes its own density-gravity-height product, and the final balance between points is obtained by accumulating those contributions.

## Operational comparison
The ideal model is best when one dominant manometric column, a stable reading, and a clear reference are present. The extended model is necessary when several fluids, more complex geometry, or chained references appear. The operational rule is simple: if the scheme can be reduced unambiguously to one [[dh]] and one [[rho]], use the ideal model; if not, switch to the extended one before calculating.

Stated even more explicitly, one should change model as soon as a single equation no longer represents the setup faithfully. If the problem introduces two different liquids, an additional interface, or a reference that changes from branch to branch, keeping the ideal model does not simplify the physics; it hides relevant structure. The model transition is therefore not mathematical luxury but a condition for a defensible reading.

In summary, the leaf teaches a clear hierarchy: first an ideal model for fast interpretation of [[dp]], and then, when geometry or fluid composition require it, an extended model that preserves the physical traceability of the reading. That hierarchy is exactly what separates mechanical substitution from mature instrumental reasoning.

