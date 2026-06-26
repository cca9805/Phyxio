# Kelvin-Planck Statement

## Conceptual context

The Kelvin-Planck statement is the heat-engine form of the second law. It says that no device operating in a [[ciclo]] can have as its only effect the extraction of heat from one reservoir and the complete conversion of that heat into useful [[W]]. In direct terms, it explains why a perfect engine fed by a single thermal reservoir cannot exist.

The key point is not energy conservation. The first law gives the balance, but it does not decide which conversions are physically possible. Kelvin-Planck adds the directional restriction: part of the absorbed heat must be rejected as [[Q_C]] to a cold reservoir, or the device cannot close a physical cycle.

## 🟢 Essential Level

A heat engine receives heat from a hot reservoir, produces work, and rejects part of the heat to a cold reservoir. If someone proposes a cyclic engine that receives [[Q_H]] and delivers the same amount as [[W]], they are proposing a machine forbidden by the second law.

The intuitive reason is that heat is disordered energy, while work is organized energy. Converting all disordered energy into organized energy again and again, with no other effect on the surroundings, would erase irreversibility without compensation. The second law states that this does not happen in macroscopic systems.

The star magnitude of this leaf is [[eta]], the thermal efficiency. If [[eta]] were equal to one, all absorbed heat would become work. Kelvin-Planck requires every real cyclic engine to remain below total conversion.

> [!NOTE]
> The statement does not say that heat cannot produce work. It says that a cyclic engine cannot convert all heat from a single reservoir into work as its only result.

## 🔵 Formal Level

The energy balance of a cyclic heat engine is:

{{f:balance_motor_termico}}

Thermal efficiency is defined by:

{{f:eficiencia_motor}}

The central Kelvin-Planck prohibition is summarized by:

{{f:limite_kelvin_planck}}

For a reversible ideal engine operating between two reservoirs, the efficiency ceiling is:

{{f:eficiencia_carnot_motor}}

The general entropic reading of the same limit is:

{{f:entropia_ciclo_motor}}

These relations must be read together. The energy balance lets us compute [[W]], but the second law limits how large [[eta]] can become. If [[Q_C]] is forced to zero while the engine remains cyclic, perfect efficiency enters the forbidden zone.

Formally, the statement separates an accounting equality from a physical inequality. The balance only distributes energy between [[W]] and [[Q_C]]. The Kelvin-Planck inequality says that the distribution with zero [[Q_C]] is not admissible for a repeatable engine. A numerical result is therefore not accepted only because units match; it must also respect the thermodynamic direction of the [[ciclo]].

Comparison with [[eta_carnot]] adds a second formal layer. If [[T_H]] and [[T_C]] are known, checking that [[eta]] is below one is not enough. The real engine must remain below the reversible limit for those reservoirs. This turns the statement into a diagnostic tool: it detects perfect-engine claims, wrong temperature scales and balances where rejected heat has been omitted.

## 🔴 Structural Level

Kelvin-Planck separates three ideas that are often confused. First, energy conservation: in a [[ciclo]], the working substance returns to its initial internal energy. Second, energy degradation: heat cannot be transformed entirely into useful work. Third, the need for an environment: the engine needs a cold reservoir [[T_C]] to reject heat and complete the process.

The statement also explains why temperature matters. Higher [[T_H]] and lower [[T_C]] increase the reversible limit [[eta_carnot]]. But even in the ideal Carnot case, as long as [[T_C]] is positive, the maximum efficiency remains below one. The mathematical route toward one would require an unattainable cold reservoir near absolute zero or an unbounded hot reservoir.

From the entropy viewpoint, the engine receives heat from the hot reservoir and rejects heat to the cold reservoir. In an ideal reversible cycle, exchanges are adjusted so total entropy does not decrease. In a real engine, friction, finite gradients and dissipation make [[DeltaS_universo]] positive. A perfect single-reservoir engine would try to produce work without rejection and without entropy compensation, so it is excluded.

## Deep Physical Interpretation

The phrase "only effect" is essential. A non-cyclic process might transform part of an initial internal energy reserve into work and end in a different state. Kelvin-Planck concerns machines that return to their initial state and can repeat indefinitely. If after every cycle everything were unchanged except for produced work, a single thermal reservoir would become an unlimited work source.

The restriction is not a technological limitation. Better turbines, lubricants or heat exchangers can move [[eta]] closer to [[eta_carnot]], but they cannot cross the boundary. Engineering reduces losses; it does not remove the physical need for [[Q_C]] in a cyclic device.

## Order of Magnitude

A thermal power plant receiving hot steam near 800 K and rejecting heat to an environment near 300 K has a moderate reversible efficiency limit. Real performance is lower because of combustion, heat transfer, turbine and condenser irreversibilities. If a school calculation gives [[eta]] greater than [[eta_carnot]], the result does not show an excellent engine; it shows a wrong assumption or unit.

To detect absurd results, check three scales. First, [[eta]] must lie between zero and one. Second, [[T_H]] and [[T_C]] must be in kelvin. Third, [[Q_C]] cannot disappear if the system is claimed to operate as a cyclic engine between finite reservoirs.

## Personalized resolution method

1. Identify whether the device is truly a [[ciclo]]. If it does not return to its initial state, do not apply Kelvin-Planck automatically.
2. Separate inputs and outputs: [[Q_H]] enters from the hot reservoir, [[W]] leaves as useful work, and [[Q_C]] is rejected to the cold reservoir.
3. Use the engine energy balance introduced in the formal level.
4. Calculate or estimate [[eta]] from useful work and absorbed heat.
5. Compare with the conceptual Kelvin-Planck limit and, when two reservoirs are given, with the Carnot ceiling.
6. If perfect efficiency, zero rejection or negative total entropy appears, read the result as a second-law violation.

## Special Cases and Extended Example

**Ideal reversible engine between two reservoirs.** It does not violate Kelvin-Planck because it rejects [[Q_C]] to the cold reservoir. It can reach [[eta_carnot]] only in the reversible limit, without finite gradients or friction.

**Single-reservoir engine.** If it tries to extract [[Q_H]] from one reservoir and deliver [[W]] as the only effect, the cycle is forbidden. Energy conservation alone is not enough.

**Extended example.** An engine receives [[Q_H]] equal to 1000 J per cycle and delivers 350 J of useful work. The balance requires 650 J of rejection. The efficiency is 0.35, physically possible if it remains below the Carnot limit for its reservoirs.

## Real Student Questions

**Q: If energy is conserved, why not convert all heat into work?**

A: Because conserving energy is not sufficient. The second law restricts energy quality and requires the cycle not to reduce total entropy.

**Q: Is rejected heat only a technical loss?**

A: No. Some rejection can be reduced by better design, but a cyclic engine between finite reservoirs always needs some [[Q_C]].

**Q: Do Kelvin-Planck and Clausius say different things?**

A: They are equivalent formulations. If one could be violated, a device could be built that violates the other.

## Cross-cutting connections and study paths

This leaf connects with the Clausius statement, the Carnot cycle, real heat engines, entropy and reversible processes. A useful path is: first understand heat and work balances; then compare Kelvin-Planck with Clausius; then study Carnot as a reversible limit; finally analyze real engines with irreversibilities.

## Final Synthesis

Kelvin-Planck says that a cyclic engine cannot convert all heat from a single reservoir into useful work. Energy is conserved, but the second law imposes heat rejection or entropy production compatible with the surroundings. Therefore [[eta]] has a physical ceiling and a perfect engine of the second kind does not exist.
