# Exam-type example

## Problem statement

A block is placed on a rough inclined plane. The lab must determine whether the block remains static as inclination increases, and if sliding starts, estimate kinetic friction during the first motion interval. The analysis must distinguish static capacity from sliding resistance.

## Data

- Contact normal estimate: [[N]] = 120 N.
- Measured static coefficient: [[mu_s]] = 0.55.
- Measured kinetic coefficient: [[mu_k]] = 0.40.
- Tangential demand in a preliminary pull test: 50 N.
- Critical-angle measurement: [[theta_c]] = 29 degrees.

## System definition

The system includes the block and the contact interface. Along the normal axis, the main contact load is [[N]]. Along the tangential axis, friction regime changes with state: [[fs]] up to [[fs_max]] under no-slip conditions, and [[fk]] after relative sliding begins.

## Physical model

We use a dry-contact constant-coefficient model as first approximation. Static viability is checked by inequality. Sliding force is computed with [[mu_k]]. The angle-based relation is used as a consistency cross-check for [[mu_s]].

## Model justification

The experiment is controlled for dry contact, moderate speed, and negligible structural deformation, so coefficient-based laws are suitable. The key requirement is to avoid mixing static and kinetic formulas in the same regime. The model therefore separates threshold verification from post-slip force estimation.

## Symbolic solution

Static friction ceiling:

{{f:fs_max_modelo}}

No-slip validity condition:

{{f:condicion_estatica}}

Kinetic friction during sliding:

{{f:fk_modelo}}

Typical coefficient relation check:

{{f:comparacion_coeficientes}}

Angle-based estimate of [[mu_s]]:

{{f:mu_s_angulo_critico}}

## Numerical substitution

1) Static threshold: [[fs_max]] = [[mu_s]]*[[N]] = 0.55*120 = 66 N.

2) Static test: required tangential force is 50 N. Since 50 <= 66, no-slip is feasible and [[fs]] can adapt to 50 N.

3) If tangential demand exceeds threshold and motion starts, kinetic friction is [[fk]] = [[mu_k]]*[[N]] = 0.40*120 = 48 N.

4) Coefficient plausibility: [[mu_k]] <= [[mu_s]] holds (0.40 <= 0.55), consistent with common dry-contact behavior.

5) Angle check: tan([[theta_c]]) at 29 degrees gives a value near 0.55, coherent with force-based static-coefficient estimation.

## Dimensional validation

Force equations keep Newton units because coefficients are dimensionless and multiply [[N]]. Static inequality compares same-dimension quantities. The angle relation remains dimensionless as required for [[mu_s]].

Physical scale is coherent: [[fs_max]] and [[fk]] are in the same range, with static threshold higher than kinetic level.

## Physical interpretation

The key physical reading is causal. At 50 N demand, contact remains static because available static capacity is 66 N. If demand rises beyond threshold, the interface switches regime and tangential resistance drops to kinetic level. That drop explains why motion can become easier after slip starts.

This regime transition is the central learning target of the leaf: friction is state-dependent and cannot be modeled by a single unconditional force formula.

From a control perspective, this is a stability statement. In static regime, the interface behaves like an adaptive constraint that can absorb disturbances up to a limit. Once that limit is crossed, the same interface becomes a dissipative element with lower opposing force. The change is not a small correction; it is a structural change in the equations that govern acceleration. That is why threshold identification must be explicit in engineering workflows.

A second causal consequence is decision asymmetry. Designing for startup safety emphasizes static reserve, while designing for sustained motion emphasizes dynamic losses. If one tries to optimize both objectives with a single scalar criterion, the result is usually suboptimal. The physically correct strategy is regime-aware design: quantify startup margin with static threshold criteria, and quantify operating cost with dynamic resistance criteria.

# Real-world example

## Context

An industrial packaging line uses an inclined conveyor to feed boxes into a sorting stage. Maintenance engineers must avoid two opposite failures: unintended slip during startup and excessive resistance during continuous operation. They test different belt coatings and box-bottom materials.

The workflow combines load measurements for [[N]], static-threshold checks with [[mu_s]], and kinetic-force estimates with [[mu_k]] to balance safety and energy performance.

## Physical estimation

Coating A gives high [[mu_s]] and high [[mu_k]]. Startup is safe, but continuous energy demand increases. Coating B gives slightly lower [[mu_s]] but clearly lower [[mu_k]]. Startup remains within no-slip margin in nominal operation, and running power decreases.

The team applies static-condition checks at every startup configuration and kinetic calculations for steady transport. They also verify angle limits with [[theta_c]] during acceptance tests.

To make the comparison operational, engineers define two acceptance windows. Window one is startup robustness: tangential demand from belt acceleration, guide contact, and small shocks must stay below static threshold with a safety margin. Window two is running efficiency: dynamic friction must stay low enough to keep motor current and thermal load inside limits during nominal throughput.

In one test sequence, both coatings pass startup checks under nominal load, but only coating B remains inside thermal limits at peak production. Coating A keeps boxes very stable at entry but causes measurable overheating during long shifts. Coating B yields a lower steady drag force and keeps the line inside power budget while preserving acceptable startup reliability.

The team also performs sensitivity analysis. A mild contamination scenario is simulated to estimate coefficient drift. Under this perturbation, coating A still passes startup but worsens energy penalties, whereas coating B remains balanced if cleaning intervals are tightened. This adds a maintenance dimension to model selection: the best coating is not only the one with good initial coefficients, but the one with predictable behavior across realistic operating variability.

## Interpretation

The case demonstrates that the best engineering choice is not the highest friction coefficient, but the best regime-aware compromise. Correct decisions require explicit separation of static threshold, kinetic resistance, and operating objective.

This is exactly the continuity between theory and practice expected by the leaf: [[fs]], [[fs_max]], [[fk]], [[mu_s]], [[mu_k]], [[N]], and [[theta_c]] are not decorative symbols but linked decision variables in one coherent model.

The final recommendation is therefore conditional, not absolute. If the plant prioritizes maximum startup immunity under occasional shocks, a higher static reserve may be preferred even with higher running losses. If the plant prioritizes long-run energy efficiency and thermal reliability, a lower dynamic-resistance coating can be superior as long as startup margin stays positive. In both cases, the correct language is causal: what regime is active, which variable dominates risk, and which trade-off is being accepted.

This interpretation closes the semantic loop demanded by the leaf. Theory provides the regime logic, symbolic solution provides computable checks, and the real case translates those checks into operational decisions with measurable consequences in safety, power consumption, and maintenance planning.
