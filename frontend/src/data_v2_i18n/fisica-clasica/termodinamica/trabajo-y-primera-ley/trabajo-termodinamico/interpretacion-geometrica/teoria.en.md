## Conceptual context

The p-V diagram is the graphical representation of a thermodynamic system's state in the pressure-volume space. Each point in the diagram is an equilibrium state; each curve is a path between states. The key insight is that the **area under that curve is exactly equal to the work [[trabajo_termodinamico]] of the process**, turning the p-V diagram into a direct reading tool without analytical integration.

This geometric equivalence has an immediate and powerful consequence: since different curves between the same states enclose different areas, work **depends on the path**.

## 🟢 Essential level

Imagine the p-V diagram as a map where the gas "travels" from one state to another. If the path goes to the right (volume increases), the gas expands and does positive work. If it goes to the left, the gas is compressed and work is negative. The amount of work is the "size" of the area between the path and the volume axis.

For a complete cycle (the gas returns to its starting point), the net work is the area of the "hole" enclosed by the loop in the diagram. If the loop is traversed clockwise, net work is positive (it is an engine). If counter-clockwise, it is negative (it is a refrigerator).

The intuitive key is that the area is not an optional mathematical resource: it is exactly what physics defines as work. When the piston of an engine pushes downward during the expansion of combustion gases, each tiny piston displacement multiplies the instantaneous pressure by that infinitesimal volume change. Adding all those products is an integral, and the integral is the area. This is why measuring the area of the p-V diagram and analytically computing ∫p dV always give the same number: they are the same mathematical operation expressed in two different ways.

## 🔵 Formal level

Work in any quasi-static process is:

{{f:trabajo_area_pV}}

For a complete cycle, net work is:

{{f:trabajo_ciclo}}

Different process types generate characteristic curves in the p-V diagram:

- **Isobaric** (constant p): horizontal line. Area = rectangle with base ΔV and height p.
- **Isochoric** (constant V): vertical line. Area = 0 (no work done).
- **Isothermal** (constant T): decreasing hyperbola p(V). The area is the region under that curve between the initial and final volumes.
- **Adiabatic** (Q = 0): steeper curve than the isothermal. Area smaller than the isothermal between the same volume extremes.

> [!NOTE]
> The adiabatic curve is always steeper than the isothermal through the same point in the p-V diagram. Therefore the work in an adiabatic expansion is less than in an isothermal expansion between the same volume states.

> [!WARNING]
> Only quasi-static processes have a well-defined curve in the p-V diagram. Rapid irreversible processes (explosions, free expansion) are not represented as curves and the area cannot be read directly.

## 🔴 Structural level

The geometric interpretation makes visible something fundamental: the **path dependence of [[trabajo_termodinamico]]**. Draw two different curves between the same initial state A and final state B; each encloses a different area under the volume axis. Work is different for each path even though the initial and final states are identical.

This contrasts with internal energy ΔU, which depends only on states A and B regardless of path. If [[trabajo_termodinamico]] is path-dependent and ΔU is not, then heat Q = ΔU + [[trabajo_termodinamico]] is also path-dependent: to go from the same A to the same B, different amounts of heat are needed depending on the chosen path.

The **cycle area** in the p-V diagram is the net work. To compare thermodynamic cycles (Carnot, Otto, Diesel), the p-V diagram visually shows which cycle produces more net work per cycle: the one enclosing more area. The Carnot cycle, operating between two fixed temperatures, maximises the area given the maximum and minimum temperature limits.

> [!TIP]
> To determine whether a cycle is an engine or refrigerator, simply look at the traversal direction: clockwise = engine (positive net work), counter-clockwise = refrigerator or heat pump (negative net work).

## Deep physical interpretation

The p-V diagram transforms a calculus integral into a geometric measurement. This is not merely a pedagogical simplification: James Watt's steam indicator literally used this principle to measure the actual work of a steam engine by drawing the p-V curve of the cycle with a mechanical mechanism and measuring the resulting area.

This equivalence also explains why [[trabajo_termodinamico]] is path-dependent while internal energy is not. If you draw two different curves between the same state A and state B in the p-V diagram, each curve encloses a different area under the volume axis. Two processes connecting the same states can perform entirely different amounts of work. The p-V diagram makes this visible without any calculation: it suffices to compare the two areas.

## Order of magnitude

For a simple rectangular cycle with a pressure difference of 10⁵ Pa and a volume difference of 2×10⁻³ m³, the resulting rectangle area is 200 J, which is the net work per cycle. This order of magnitude is typical of small laboratory piston experiments. Real combustion engines operate with cycle areas in the range of hundreds to thousands of joules per cylinder, depending on displacement and operating pressure. Comparing cycle areas across different engine designs is the most direct way to assess their work output without resorting to full thermodynamic analysis.

## Personalized resolution method

1. **Draw the path** of the process in the p-V diagram with the p and V values at each state.
2. **Identify the area** enclosed between the curve and the volume axis.
3. **Compute the area** geometrically (rectangle, trapezoid) or analytically (integral) depending on the curve shape.
4. **Assign the sign**: expansion (rightward) = positive; compression (leftward) = negative.
5. **For cycles**: sum the contributions of each process with their signs, or directly compute the enclosed loop area.

## Special cases and extended example

**Carnot cycle** in p-V diagram: two isothermals and two adiabatics. The enclosed area is the net work. Efficiency is [[trabajo_neto_del_ciclo]]/Q_absorbed.

**Rectangular cycle**: two isobarics and two isochorics. Area is a rectangle with sides (p_high − p_low) × (V_high − V_low). It is the simplest cycle to analyse geometrically.

## Real student questions

**Why is the area under the curve exactly the work and not an approximation?**
Because the mathematical definition [[trabajo_termodinamico]] is equal to ∫p dV is exactly the Riemann integral, which is the area under the curve. There is no approximation: it is an exact equality.

**Can I compare the work of two processes without computing any integral?**
Yes. Drawing both curves in the same p-V diagram between the same states, the one enclosing the larger area produces more work. The visual comparison is exact if the curves are drawn accurately.

## Cross-cutting connections and study paths

The geometric interpretation connects directly with the [Expansion Work](leaf:fisica-clasica/termodinamica/trabajo-y-primera-ley/trabajo-termodinamico/trabajo-de-expansion) leaf and with thermodynamic cycles. The p-V diagrams of Carnot, Otto and Diesel cycles are direct applications of this leaf.

## Final synthesis

The p-V diagram converts thermodynamic work calculation into area reading. [[trabajo_termodinamico]] = area under p(V) curve; [[trabajo_neto_del_ciclo]] = area of closed loop. Path dependence is visible as different areas enclosed by different curves connecting the same states.