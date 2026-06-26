const e=`# Thermodynamic Equilibrium

## Conceptual context

Thermodynamic equilibrium describes a macroscopic state in which a system stops evolving because the internal gradients capable of producing spontaneous change have vanished. It does not mean that particles stop moving or that microscopic motion disappears; it means that observable magnitudes remain constant and that there is no net heat flow, no net mechanical push and no net material exchange compatible with the constraints.

In a real system, equilibrium is recognized by comparing intensive variables. Temperature [[T]] diagnoses thermal equilibrium, pressure [[P]] diagnoses mechanical equilibrium, and chemical potential [[mu]] diagnoses material or chemical equilibrium. The concept is central because it allows states to be defined, equations of state to be used, and final stable states to be separated from transients.

## 🟢 Essential Level

The essential idea is that a system is in equilibrium when it no longer has internal reasons to change. If two parts have different [[T]], heat can flow. If two sides of a movable boundary have different [[P]], the boundary can move. If two connected regions have different [[mu]], matter can diffuse or a reaction can advance. While any of these drives remains, the system is not in complete equilibrium.

At equilibrium, macroscopic variables stop changing in time within the precision of the model. A cup of coffee in a room approaches equilibrium when its temperature equals the air temperature. A gas with a piston approaches mechanical equilibrium when internal pressure balances the effective external pressure. A reacting mixture reaches chemical equilibrium when there is no net reaction advance.

> [!NOTE]
> Equilibrium does not mean "no motion"; it means no net macroscopic change compatible with the constraints.

## 🔵 Formal Level

The thermal criterion is:

{{f:equilibrio_termico}}

The same condition, read as the common state of parts in thermal contact, is:

{{f:igualdad_temperatura}}

The mechanical criterion is:

{{f:equilibrio_mecanico}}

If the movable boundary has no macroscopic acceleration, the effective pressures pushing it are balanced:

{{f:igualdad_presion}}

When material exchange is allowed, the relevant condition is not "same concentration" but equality of chemical potential:

{{f:equilibrio_material}}

The general criterion is summarized by vanishing affinities:

{{f:equilibrio_general}}

These conditions are diagnostic criteria, not isolated formulas. [[DeltaT]] measures distance from thermal equilibrium; [[DeltaP]] measures distance from mechanical equilibrium; [[A]] represents the remaining generalized thermodynamic drive for processes allowed by system constraints.

The formal form separates two complementary readings. Differences such as [[DeltaT]] and [[DeltaP]] say how much drive remains before a channel closes. Equalities of [[T]], [[P]] and [[mu]] describe the common state left after that channel no longer selects a macroscopic direction.

Complete equilibrium requires every relevant channel to be closed: no net heat flow, no net boundary push, no net diffusion and no net reaction. Partial equilibrium can satisfy one condition while failing another. For example, a gas may have uniform temperature but still expand if [[DeltaP]] has not vanished.

## 🔴 Structural Level

The structure of the concept depends on constraints. If a wall is diathermal, it allows heat exchange and requires equality of [[T]] for thermal equilibrium. If a wall is rigid, pressure equality is not required for boundary motion because the boundary cannot move. If a membrane is impermeable, differences in [[mu]] may persist without matter exchange. Equilibrium is therefore not evaluated by a blind checklist, but by allowed processes.

This is why the same numerical state can be equilibrium for one boundary choice and disequilibrium for another.

The time scale [[tau]] also matters. A system may look stable for seconds while remaining far from equilibrium if relaxation is very slow. Glasses, gels, viscous mixtures or large isolated systems may show metastable states: they do not change appreciably on the observation scale, but they do not satisfy every strict equilibrium condition.

Stability separates equilibrium from simple stationarity. A steady state may maintain constant flows, such as a bar with heat entering one end and leaving the other. Its variables do not change in time, but internal net flow exists; therefore it is not thermodynamic equilibrium. True equilibrium is not only constant: it also lacks sustained internal currents.

## Deep Physical Interpretation

Thermodynamic equilibrium is the point where intensive variables stop competing. Equality of [[T]] removes the preferred direction of heat; effective equality of [[P]] removes the push on a movable boundary; equality of [[mu]] removes the net tendency to transfer matter. Physically, each equality erases a macroscopic arrow of evolution.

This reading explains why equilibrium allows a system to be described with few state variables. If important internal gradients exist, a single temperature or a single pressure does not describe the whole system. Once equilibrium is reached, those global variables recover operational meaning.

## Order of Magnitude

In simple problems, a temperature difference of a few kelvin is enough to reject exact thermal equilibrium. In gases near atmospheric pressure, pressure differences of thousands of pascals can move light pistons. In chemical systems, small chemical-potential differences may sustain diffusion for long times.

The relaxation time [[tau]] can vary enormously: seconds for a well-mixed gas, minutes for a cup of coffee, hours for a thick block and years for geological systems. Always state the time scale of the diagnosis.

## Personalized resolution method

1. Identify the system and its boundaries.
2. Decide which exchanges are allowed: heat, volume, matter or reaction.
3. Check [[DeltaT]] if thermal contact exists.
4. Check [[DeltaP]] if a movable boundary or mechanical equilibrium matters.
5. Check [[mu]] or [[A]] if matter exchange or reaction is allowed.
6. Distinguish complete equilibrium from partial equilibrium or steady state.

## Special Cases and Extended Example

**Thermal but not mechanical equilibrium.** Two gases separated by a diathermal piston may have the same [[T]] and different [[P]]. If the piston can move, the system still changes.

**Steady but non-equilibrium state.** A wall with constant temperature at each point and permanent heat flow does not change in time, but it is not in equilibrium because a spatial [[DeltaT]] and thermal current exist.

**Extended example.** A vessel split by a movable diathermal wall contains gas on both sides. If initially there are [[DeltaT]] and [[DeltaP]], heat redistributes and volume then adjusts. The final equilibrium requires common temperature and common effective pressure.

## Real Student Questions

**Q: If a variable does not change, is the system in equilibrium?**

A: Not necessarily. It may be a steady state with constant flow. Equilibrium requires absence of driving gradients, not only constant values.

**Q: Can partial equilibrium exist?**

A: Yes. A system can be in thermal equilibrium but not mechanical equilibrium, or mechanical but not chemical equilibrium. Constraints must be checked.

**Q: Why does chemical potential matter?**

A: Matter moves or reacts because of potential differences, not only because of visible concentration differences.

## Cross-cutting connections and study paths

This leaf connects with thermodynamic systems, intensive and extensive variables, temperature, pressure, internal energy, entropy and reversible processes. A useful path is: define system boundaries, study state variables, understand thermal and mechanical equilibrium, and then extend the criterion to chemical equilibrium and stability.

## Final Synthesis

A system is in thermodynamic equilibrium when the internal drives of change allowed by its constraints vanish. Equality of [[T]], compensation of [[P]] and vanishing [[A]] turn a transient process into a state describable by state variables. Complete equilibrium is stronger than being still: it requires absence of internal net flows.
`;export{e as default};
