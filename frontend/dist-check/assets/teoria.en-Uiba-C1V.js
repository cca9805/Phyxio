const e=`# Ampere's Law

## Conceptual context

**Ampere's law** links a geometric operation with a physical source: the circulation of magnetic field around a closed curve reveals how much current crosses the enclosed surface. It does not ask for an isolated point in space, but for a complete loop around the sources.

Within magnetism, this law is the bridge between electric current and magnetic field when enough symmetry exists. It gives [[B]] directly for long straight wires, solenoids and toroids, and it also teaches when a closed integral is not enough to solve the field.

## 🟢 Essential level

Imagine surrounding a wire with an invisible circle. If current flows through the wire, the magnetic field organizes itself in loops around it. Ampere's law says that the oriented sum of that field along the circle depends on the current crossing the inside of the curve.

The key quantity is not only [[B]], but the circulation [[C_B]]. That circulation measures whether the field follows the chosen path or opposes it. The enclosed current [[I_enc]] acts as the net source: currents crossing the surface in opposite directions can cancel.

The essential idea is to surround the correct source, not to chase isolated field values. A well chosen curve turns a spatial problem into a global reading. If the curve follows the natural shape of the field, every useful segment expresses the same physical pattern. If the curve is chosen without that criterion, the law remains true, but it stops being a direct calculation tool. That is the central intuition.

> [!NOTE]
> The Amperian curve is not a real wire. It is a mental path chosen to exploit the symmetry of the problem.

## 🔵 Formal level

The integral form of the law relates the circulation of [[B]] to the net current enclosed by the curve:

{{f:ampere_integral}}

Here [[dl]] is an oriented element of the closed curve. If [[B]] is tangent to the curve and has constant magnitude on it, the integral becomes simple. That is why the law is powerful in problems with cylindrical or translational symmetry.

For a long straight wire carrying current [[I]], the natural path is a circle of radius [[r]] centered on the wire. By symmetry, [[B]] is tangent and constant along that circle:

{{f:campo_hilo_ampere}}

The result states that moving away from the wire reduces the field inversely with distance. In a long solenoid, the Amperian path is chosen as a rectangle crossing the inside and outside. The exterior contribution is neglected in the ideal model, giving:

{{f:campo_solenoide_largo}}

These three relations are not disconnected recipes. The first is the general magnetostatic law; the other two are consequences when geometry makes the integral evaluable without knowing every local value of the field.

The formal reading must always check that the length used belongs to the same path on which [[B]] keeps the assumed symmetry. It also requires a chosen orientation before assigning signs to enclosed current.

## 🔴 Structural level

The deep structure of Ampere's law has three layers. The first is **topological**: the closed curve either encloses net current or it does not. The second is **geometric**: the shape of the curve must match the field symmetry. The third is **physical**: enclosed current [[I_enc]] is the source of circulation [[C_B]].

This organization explains why the law can be true and still not solve a problem directly. If [[B]] changes magnitude or direction along the path, the integral does not become a simple product. Then Ampere's law remains a global constraint, but it does not determine the local field by itself.

> [!WARNING]
> Choosing an arbitrary curve usually hides the problem. The Amperian path must make [[B]] tangent, zero, or constant by segments; otherwise the law does not produce a simple calculation.

It is also necessary to separate enclosed current from nearby current. A current outside the curve may modify the field at points of the path, but it does not change the net current crossing the surface. That is why [[C_B]] can be zero even when local fields are not zero.

For time-varying fields, this version reaches its conceptual limit. The magnetostatic form is corrected by Maxwell's displacement-current term. That extension makes the law compatible with charging capacitors and electromagnetic waves.

Therefore the structure of the leaf is not only algebraic: first decide the enclosed source, then the symmetry of the path, and finally the physical domain where the model may be used with defensible assumptions.

## Deep physical interpretation

Ampere's law does not merely say that current produces field. It says that current produces an **oriented magnetic circulation**. That word is essential: the magnetic field around a current does not point radially toward it, but rotates around the source.

The sign of [[I_enc]] depends on the orientation chosen for the curve. If the traversal direction is reversed, the sign of [[C_B]] reverses. This does not change the physical setup; it changes the convention used to describe it. The right-hand rule connects both choices.

> [!TIP]
> Before calculating, draw the curve and fix its direction. Then decide which currents cross the positive surface associated with that orientation.

## Order of magnitude

A straight wire carrying 10 A produces, at 1 cm, a field of the order of tenths of a millitesla. At 10 cm, the field is about ten times smaller. This scale is reasonable for laboratory conductors and comparable with small electromagnets.

A solenoid with [[n]] near 1000 turns per metre and current near 2 A produces an internal field of the order of milliteslas. A result of several teslas for a classroom air-core solenoid is usually absurd; it normally means that [[n]], [[I]], or length units were used incorrectly.

## Personalized resolution method

1. Identify whether the problem asks for [[C_B]], [[B]], [[B_sol]], or [[I_enc]].
2. Draw a closed curve and mark its orientation.
3. Decide which currents cross the surface bounded by that curve.
4. Check whether symmetry allows [[B]] to be taken out of the integral.
5. If there is not enough symmetry, use Ampere's law as a global constraint, not as a direct field formula.

This order prevents substituting data before knowing what the curve encloses. In Ampere's law, path geometry is part of the physical model, not decoration.

## Special cases and extended example

The first limiting case is a curve enclosing no net current. The total circulation [[C_B]] is zero, but this does not force [[B]] to be zero at every point. Local contributions may cancel around the complete path.

The second case is the long solenoid. Inside, contributions from many turns reinforce one another and the field is almost uniform. Outside, they partially cancel and the ideal exterior field is neglected. This separation is not exact near the ends.

Extended example: a very long straight wire carries 5 A. At a distance of 2 cm, a circular path centered on the wire encloses the full current. Symmetry lets us read [[B]] as tangent and constant. The resulting field is of the order of tens of microteslas, comparable to Earth's field. If [[r]] is doubled, the field is halved.

## Real student questions

**Does Ampere's law replace Biot-Savart?** No. Ampere is faster when there is symmetry; Biot-Savart is more general for complicated geometry.

**Why use a closed curve?** Because the law measures complete circulation around enclosed current, not field at an isolated point.

**Does a current outside the curve not matter?** It does not change [[I_enc]], but it may contribute to the local field on the path. The law speaks about net circulation.

**Why is the solenoid exterior ignored?** The ideal long-solenoid model makes the exterior field much smaller than the interior field. Real solenoids have edge effects and leakage.

## Cross-cutting connections and study paths

This leaf connects backward to [Magnetic field](leaf:fisica-clasica/electromagnetismo/magnetismo/campo-magnetico) and [Biot-Savart law](leaf:fisica-clasica/electromagnetismo/magnetismo/fuentes-del-campo-magnetico/ley-de-biot-savart). Both prepare the idea that currents and geometry determine the field.

Forward, it connects to magnetic materials, real solenoids, inductance, and Maxwell's equations. The natural route is magnetic field first, then field sources, then Ampere, and finally Maxwell's correction for time-varying fields.

## Final synthesis

Ampere's law relates the circulation [[C_B]] of [[B]] to enclosed current [[I_enc]]. Its power appears when symmetry allows a suitable Amperian curve. In long wires and solenoids it gives direct results; in complex geometry it remains a global consistency condition for magnetostatics.
`;export{e as default};
