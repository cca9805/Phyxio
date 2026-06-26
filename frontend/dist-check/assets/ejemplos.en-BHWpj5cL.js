const e=`# Exam-type example\r
\r
## Problem statement\r
\r
A crate moves along a horizontal segment. A pulling interaction of magnitude [[F]] equal to 80 N is applied at an angle [[theta]] of 35 degrees relative to the effective motion direction. The net segment displacement [[d]] is 6 m. Compute the work [[W]] done by that interaction, interpret its sign, and decide whether the result is consistent with a kinetic-budget gain if no dominant opposing contribution is present.\r
\r
## Data\r
\r
The task provides [[F]], [[d]], and [[theta]] for one clearly defined segment. It does not ask for power or for a detailed force-time profile. The intended closure is mechanical work under an approximately constant-force model.\r
\r
## System definition\r
\r
The system is the crate. The pulling agent is external to the system. This boundary lets [[W]] be interpreted as energy transferred into the system by a specific interaction. If full balance is needed, one then moves to [[Wnet]] by adding other signed contributions.\r
\r
## Physical model\r
\r
The model uses the constant-force work relation with explicit orientation. Core magnitudes are [[F]], [[d]], [[theta]], and [[W]]. For coherence reading, the result can be connected to [[Wnet]] and [[dK]] when multiple interactions are involved.\r
\r
## Model justification\r
\r
The model is appropriate because the statement gives direct geometric and magnitude inputs for a segment-level transfer calculation. No detailed variable-force reconstruction is requested. If either force direction or magnitude changed strongly over the interval, one would need a more detailed model.\r
\r
## Symbolic solution\r
\r
Use the nuclear relation:\r
\r
{{f:trabajo_fuerza_constante}}\r
\r
For orientation inference from energetic data:\r
\r
{{f:angulo_desde_trabajo}}\r
\r
If several interactions act, global closure is:\r
\r
{{f:trabajo_neto_sumatoria}}\r
\r
And state-bridge validation is:\r
\r
{{f:teorema_trabajo_energia}}\r
\r
## Numerical substitution\r
\r
Substituting [[F]] equal to 80 N, [[d]] equal to 6 m, and [[theta]] equal to 35 degrees gives [[W]] close to 393 J. The sign is positive, consistent with a force orientation that helps the displacement direction.\r
\r
The number should be read physically, not only numerically. It means that this interaction adds mechanical budget to motion over that segment. If a real run showed no acceleration trend despite this positive contribution, the correct inference would be that opposing contributions are large enough to reduce or reverse the net balance.\r
\r
## Dimensional validation\r
\r
Combining [[F]] in newtons with [[d]] in meters yields joules for [[W]], which is dimensionally correct for mechanical work. The angle [[theta]] enters through a dimensionless trigonometric factor, so unit consistency is preserved.\r
\r
Sign coherence also passes. With [[theta]] below 90 degrees, the effective projection is positive, so positive [[W]] is the expected physical output rather than a numerical accident.\r
\r
## Physical interpretation\r
\r
The key interpretation is that not all of [[F]] contributes equally to transfer. Only the effective projection along displacement is energetically active in the work sense. That is why geometric reading is central in this leaf.\r
\r
A positive result indicates that the studied interaction delivers energy to motion. Whether speed actually increases depends on the full signed balance. In single-interaction idealization, the trend points toward kinetic gain. In multi-interaction reality, one must check [[Wnet]] and then interpret [[dK]].\r
\r
# Real-world example\r
\r
## Context\r
\r
In urban logistics, an operator pulls a wheeled container using an inclined handle on a mild loading ramp. The safety team wants to evaluate whether the current pulling technique delivers useful transfer or wastes effort due to poor orientation and excessive resistance. They need a segment-based energy reading rather than a detailed temporal simulation.\r
\r
Field observation over a representative segment suggests an applied force [[F]] around 140 N, displacement [[d]] around 9 m, and orientation [[theta]] near 25 degrees relative to effective travel direction. Wheel resistance is known to be significant due to poor maintenance, so contribution-level and net-level interpretation must be separated.\r
\r
## Physical estimation\r
\r
For that segment, the pulling interaction produces a positive work contribution on the order of one kilojoule. This magnitude is realistic for repeated manual handling tasks. Yet a meaningful fraction can be offset by negative resistant work if rolling quality is poor or local surface roughness is high.\r
\r
The estimate supports two practical decisions. First, keep handle orientation in a favorable angular zone to preserve effective transfer. Second, reduce passive resistance so that the gap between positive applied contribution and negative contact contribution increases. Without this work-based reading, perceived effort can be mistaken for useful transfer.\r
\r
## Interpretation\r
\r
The case shows why this leaf matters operationally. [[W]] describes the contribution of one interaction. Decision quality improves when the analysis moves to [[Wnet]] in multi-force settings and then connects that balance to [[dK]].\r
\r
It also highlights a measurement rule. Misdefining [[theta]] or [[d]] can distort interpretation more than moderate uncertainty in force magnitude. Geometry and displacement quality are therefore central to trustworthy work analysis.\r
\r
In short, a routine logistics maneuver becomes a quantifiable transfer problem. That conversion from intuition to energetic causality is exactly the competence this leaf is meant to build.`;export{e as default};
