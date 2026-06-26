const e=`# Superposition

## Conceptual context

**Superposition** explains what happens when several waves reach the same point of a medium. Instead of choosing one wave and discarding the other, the medium shows one disturbance obtained by adding the instantaneous contributions.

This principle supports interference, standing waves, diffraction, sound beats, and many measurement techniques. Its power lies in a simple idea: in a linear medium, each wave passes through the others without losing its identity, while the local detector observes only the sum.

## 🟢 Essential level

When two pulses cross on a string, the string cannot occupy two different positions at once. At each point it takes a single position: the sum of what each pulse would produce separately. If both push upward, displacement increases; if one pushes upward and the other downward, they may cancel.

The central quantity is [[y_resultante]]. It is obtained from [[y_1]] and [[y_2]], which are signed disturbances. That detail is decisive: a downward disturbance is not added as a positive amount, but as an opposite contribution. This is why two waves can cross and, for an instant, leave the medium almost at equilibrium.

The essential reading is local: one specific point of the medium and one specific instant are being observed. The same pair of waves can reinforce in one region and compensate in another, because disturbance signs change with position and time.

> [!TIP]
> Before speaking about intensity or energy, always ask what is being added: displacements, pressures, fields, or intensities. In linear superposition, disturbances are added.

## 🔵 Formal level

The most direct form of the principle is point-by-point addition of disturbances:

{{f:superposicion_lineal}}

This relation must be read locally. [[y_1]] and [[y_2]] must be evaluated at the same point and at the same instant. If one wave is measured at a crest and the other somewhere else, the sum does not represent a real physical state of the medium. The sign of each disturbance contains local phase information.

When two sinusoidal waves arrive in phase and disturb the medium in the same direction, their maximum amplitudes add directly:

{{f:amplitud_en_fase}}

This relation does not replace the general sum: it is a special case. [[A_1]] and [[A_2]] are non-negative amplitudes, while [[y_1]] and [[y_2]] are signed instantaneous values. Confusing these levels leads to wrong predictions when waves arrive out of phase.

Once the combined amplitude is obtained, a relative energy reading can be made:

{{f:intensidad_relativa}}

The relative intensity [[I_relativa]] is not added before superposition. First [[A_resultante]] or [[y_resultante]] is obtained according to the problem, and only then is the energy scale interpreted. Thus doubling amplitude does not double the energy reading: it increases it quadratically.

## 🔴 Structural level

Superposition rests on the **linearity** of the wave equation. If one possible disturbance satisfies the model and another one also does, their sum is also a solution. This is not a visual rule; it is a mathematical consequence of the medium responding proportionally to the disturbance.

The delicate point is to distinguish the wave as a global entity from the disturbance as a local value. Two waves can pass through each other because each keeps propagating. Yet at the point where they meet, an instrument does not separate causes: it measures only the total value [[y_resultante]]. This explains why local cancellation does not mean global disappearance of energy.

The model fails when the medium response is no longer proportional. A taut string can behave linearly for small amplitudes, but not for huge deformations. In fluids, intense acoustic waves may form shocks; in optics, extreme laser intensities change the medium index. In all those cases, waves no longer pass through one another as independent contributions.

The natural graph shows three curves: [[y_1]], [[y_2]], and [[y_resultante]]. Where both curves have the same sign, the resultant grows; where they have opposite signs, it shrinks. If an in-phase amplitude panel is used, [[A_resultante]] compares maximum reinforcement and [[I_relativa]] shows why the observable effect can grow much more than amplitude.

## Deep physical interpretation

Superposition does not say that two waves ignore each other. It says something more precise: in a linear medium, each contribution keeps its dynamical identity while the local state of the medium is the sum. This reconciles two facts that seem contradictory: two pulses pass through each other, and during the crossing they completely change the visible shape of the string.

Local cancellation also does not destroy energy. In destructive interference, energy does not vanish; it is redistributed spatially or stored in another form during part of the cycle. Therefore superposition must be applied to disturbances before translating the result into intensity, brightness, or sound level.

## Order of magnitude

On a laboratory string, millimetre amplitudes add very faithfully: two 2 mm pulses in phase produce a crest close to 4 mm. In sound, two coherent loudspeakers can double the local acoustic pressure, which clearly raises relative intensity.

An absurd result appears if two small disturbances predict a deformation comparable to the size of the system. It is also suspicious to obtain negative [[I_relativa]], because it comes from a squared amplitude.

## Personalized resolution method

1. Identify which physical quantity is superposed: displacement, pressure, electric field, or an equivalent variable.
2. Write instantaneous signed values, not just magnitudes.
3. Compute [[y_resultante]] by algebraic point-by-point addition.
4. If the problem states in-phase waves, use [[A_1]], [[A_2]], and [[A_resultante]].
5. Interpret [[I_relativa]] only at the end, after adding disturbances.

## Special cases and extended example

> [!NOTE]
> Two equal in-phase waves produce maximum reinforcement. The resultant curve keeps the same general shape but with larger amplitude.

> [!WARNING]
> Two equal waves in opposite phase can produce local cancellation. That does not mean total energy disappears.

Extended example: two pulses on a string reach the same point. The first raises the string by 3 mm and the second displaces it 2 mm downward. The local sum leaves a 1 mm upward disturbance. If both had been in phase with amplitudes of 3 mm and 2 mm, the combined maximum amplitude would have been 5 mm.

## Real student questions

**Why do waves not collide like objects?**  
Because in the linear regime they do not exclude one another. The medium can respond to the sum of disturbances and, after crossing, each pulse keeps propagating.

**Can I always add amplitudes?**  
No. Only in compatible-phase cases. In general, instantaneous disturbances are added, and the resultant amplitude is inferred later.

**If the sum is zero, is there no wave?**  
There is local cancellation at that point and instant. The individual waves still exist as contributions and may reappear separated after crossing.

**Why does intensity grow so much when amplitude increases?**  
Because the average energy reading often depends on the square of the resultant amplitude. That is why a small amplitude reinforcement can be very noticeable.

## Cross-cutting connections and study paths

Superposition directly prepares [constructive interference](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/interferencia/interferencia-constructiva) and [destructive interference](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/interferencia/interferencia-destructiva). In both cases, the difference is not another rule, but the sign and phase of the contributions.

It also connects with [diffraction](leaf:fisica-clasica/ondas/fenomenos-ondulatorios/difraccion), where many secondary contributions are added, and with standing waves, which arise from superposing waves traveling in opposite directions.

## Final synthesis

Superposition states that, in linear media, the observable disturbance is the local algebraic sum of individual disturbances. Understanding it requires adding signed values first, interpreting amplitude and intensity afterward, and always remembering the limit of linear validity.
`;export{e as default};
