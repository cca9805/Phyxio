const e=`# Complete Analysis of Frictional Systems\r
\r
## Conceptual context\r
\r
When a block rests on a table and you push horizontally, the surface responds with **static friction** that matches your push and keeps the block at rest. If you keep increasing the force, there comes an instant when the contact's grip is exhausted: the block breaks free and enters the **kinetic regime**, where friction no longer grows but settles to a constant value lower than the static maximum. The complete analysis of frictional systems consists precisely in deciding when that transition occurs and what acceleration results afterwards.\r
\r
This leaf belongs to the translational dynamics block within classical mechanics. It is a problem-solving method: it does not define a new law but organises the joint application of Newton's second law and Coulomb's dry friction laws to systematically solve any horizontal friction problem. Mastering this procedure is essential before tackling inclined planes with friction or multi-body systems.\r
\r
## 🟢 Essential level\r
\r
Imagine pushing a heavy crate by hand. At first the crate does not move: the surface generates a friction force that **grows automatically** to match your push. That friction has no fixed value while there is rest; it simply adjusts to prevent sliding. There is, however, a maximum limit that depends on the weight of the crate and the type of surface.\r
\r
When your push exceeds that limit, the crate breaks free and begins to accelerate. The friction acting during sliding is lower than the static maximum, which explains why it is harder to start moving a piece of furniture than to keep it moving. The magnitude [[a]] acquired by the block depends on how much [[F_ext]] exceeds the kinetic friction, divided by the object's [[m]].\r
\r
What determines the surface's ability to hold the crate? Two things: the weight of the object (which determines how hard it is pressed against the table) and the material pair in contact. Two rough surfaces resist more than two polished ones. This resistance is quantified by a number called the **static friction coefficient** [[mu_e]], which is larger the rougher the contact. For sliding there is a second coefficient, [[mu_c]], generally somewhat smaller.\r
\r
The central idea is that every friction problem is solved in two stages: first decide whether the object moves or not, and then — only if it moves — calculate how much it accelerates. That decision sequence is the essence of this leaf and reappears in any friction problem, from a box on a table to a tyre on a road.\r
\r
## 🔵 Formal level\r
\r
The starting point is to calculate the perpendicular contact force. On a horizontal surface with no vertical acceleration, the **normal force** equals:\r
\r
{{f:normal_horizontal}}\r
\r
[[N]] sets the scale for all available friction. From it we obtain the **maximum static friction**:\r
\r
{{f:friccion_estatica_max}}\r
\r
> [!WARNING]\r
> [[f_emax]] is an **upper bound**, not the actual friction value at rest. While the block does not slide, the real friction equals exactly what is needed to cancel the push.\r
\r
While the system remains at rest, the **actual friction force** adjusts to equilibrium:\r
\r
{{f:friccion_estatica_reposo}}\r
\r
The regime transition occurs when [[F_ext]] reaches the static threshold. The **critical external force** is:\r
\r
{{f:umbral_deslizamiento}}\r
\r
Once that threshold is exceeded, friction becomes kinetic and the block's **acceleration** responds to:\r
\r
{{f:aceleracion_dinamica}}\r
\r
Finally, during sliding the **kinetic friction force** takes a constant value:\r
\r
{{f:friccion_cinetica}}\r
\r
Notice the logical chain: [[N]] is obtained from the weight (via [[m]] and [[g]]), then [[f_emax]] is built on [[N]] (via [[mu_e]]), the threshold [[F_ext_crit]] inherits that same scale, and the dynamic acceleration depends on the difference between [[F_ext]] and the kinetic friction [[f_r]] divided by [[m]]. Each formula "feeds" the next, so an error in the first one (for example, a miscalculated normal) propagates to all subsequent results. This cascading dependence is the reason why the order of resolution matters and no step should be skipped.\r
\r
## 🔴 Structural level\r
\r
The structural key of this leaf is the **regime discontinuity** at the point [[F_ext_crit]]. The curve of [[a]] versus [[F_ext]] shows two clearly distinct segments: a flat region at zero (static regime) and a rising straight line with slope inversely proportional to [[m]] (kinetic regime). The jump between the two segments is not smooth but abrupt, because [[mu_e]] is usually greater than [[mu_c]]. At the very instant of breakaway, the block experiences a sudden increase in net force as friction drops from the static maximum to the lower kinetic value.\r
\r
The dependence on [[N]] reveals that **any change in the vertical load** simultaneously modifies the sliding threshold and the kinetic friction. For instance, adding weight on top of the block raises [[N]], which increases [[f_emax]] and [[F_ext_crit]], but also raises kinetic friction, reducing the acceleration once motion has started. This dual influence of [[N]] is why the analysis always requires evaluating the normal first before any friction calculation.\r
\r
The model breaks down when the speed is high and the dependence of [[mu_c]] on [[v]] can no longer be neglected, or when the surface is not rigid and deforms under load. It also fails if there are forces with an additional normal component (a tilted push, for example) because the normal then no longer equals the weight. In all these cases the procedure remains conceptually valid, but the formulae need specific corrections that go beyond the simple horizontal model.\r
\r
Dimensional consistency confirms the scheme's soundness: [[F_ext_crit]] has force dimensions because it is the product of a dimensionless number ([[mu_e]]) and a force ([[N]]); the acceleration has correct dimensions because the difference of forces divided by [[m]] yields \`[M L T⁻²]\`/\`[M]\`, which gives \`[L T⁻²]\`.\r
\r
## Deep physical interpretation\r
\r
The **sign** of [[a]] indicates the direction of motion relative to the chosen axis. If positive, the block accelerates in the direction of [[F_ext]]; if it turned out negative, it would mean the kinetic model is not self-consistent (friction exceeds the push) and the block should be decelerating or at rest, forcing a reconsideration of the regime.\r
\r
The **magnitude** of [[f_r]] jumps from a variable value (equal to [[F_ext]] at rest) to a fixed value ([[mu_c]] times [[N]] during sliding). That jump is the macroscopic manifestation of the rupture of micro-contacts between surfaces: while adhesion holds, the surface "requests" just the right force; once it breaks, only constant kinetic dissipation remains.\r
\r
> [!TIP]\r
> Thinking of the [[a]] versus [[F_ext]] curve as a graph with a kink helps visualise that the problem is essentially a **regime decision** followed by a linear reading.\r
\r
## Order of magnitude\r
\r
- **[[m]]**: from 0.5 kg to 50 kg in typical classroom exercises.\r
- **[[g]]**: approximately 9.8 m/s² on Earth's surface.\r
- **[[N]]**: of the same order as the weight on a horizontal support, i.e. from 5 N to 500 N.\r
- **[[mu_e]]**: between 0.2 and 0.8 for common pairs (wood-wood, rubber-asphalt, dry metal-metal). Values above 1.0 are rare and suggest special adhesion.\r
- **[[mu_c]]**: typically 20–30 % lower than [[mu_e]] for the same material pair.\r
- **[[a]]**: of the order of 1 to 5 m/s² in school laboratory situations.\r
\r
If your calculation yields an acceleration of 50 m/s² for a hand-pushed block, the result is physically absurd and you should check units or regime.\r
\r
## Personalized resolution method\r
\r
1. **Draw the free-body diagram** of the block showing [[F_ext]], weight, [[N]] and [[f_r]].\r
2. **Calculate [[N]]** from the vertical equilibrium.\r
3. **Obtain [[f_emax]]** by multiplying [[mu_e]] by [[N]].\r
4. **Compare [[F_ext]] with [[F_ext_crit]]**: if [[F_ext]] is smaller, the system is at rest and [[f_r]] equals [[F_ext]]; if larger, there is sliding.\r
5. **Calculate [[a]]** using the dynamic formula only if the kinetic regime has been confirmed.\r
6. **Validate**: check sign, order of magnitude and dimensional consistency.\r
\r
> [!NOTE]\r
> The most frequent error is jumping to step 5 without having verified the regime in step 4.\r
\r
## Special cases and extended example\r
\r
**Special case — Push exactly at the threshold**: when [[F_ext]] coincides exactly with [[F_ext_crit]], the block is on the verge of sliding but technically remains at rest. [[a]] is zero and [[f_r]] reaches its maximum value. This boundary point requires care because any infinitesimal perturbation initiates sliding.\r
\r
**Special case — Equal coefficients**: if [[mu_e]] and [[mu_c]] were identical, the force jump at breakaway would vanish and the transition would be smooth. In practice this almost never happens, but the theoretical case clarifies that the abruptness of the start is due precisely to the difference between both coefficients.\r
\r
**Extended example**: a 10 kg block on a table with [[mu_e]] of 0.5 and [[mu_c]] of 0.4 is subjected to an increasing push. The weight is approximately 98 N, so [[N]] is 98 N. The threshold [[F_ext_crit]] is 0.5 times 98 N, that is 49 N. If the push reaches 60 N, the threshold is exceeded and the acceleration results from subtracting kinetic friction (0.4 times 98 N, about 39.2 N) from the push and dividing by [[m]]: approximately 2.08 m/s². The result is reasonable for a laboratory block.\r
\r
## Real student questions\r
\r
**Why does static friction "know" how hard I push?**\r
Because it is a **reactive force**: the surface generates exactly the opposition needed to maintain equilibrium as long as it can. It only has a ceiling, which is [[f_emax]].\r
\r
**Why does the block move more easily once it breaks free?**\r
Because [[mu_c]] is usually smaller than [[mu_e]]. When switching from the static to the kinetic regime, friction drops and a larger net push remains, producing positive [[a]].\r
\r
**Can I use the dynamic acceleration formula before checking the regime?**\r
No. If [[F_ext]] is smaller than [[F_ext_crit]], the formula would yield a negative acceleration that makes no physical sense in this context. First decide the regime, then apply the corresponding equation.\r
\r
**What if I push downward as well as forward?**\r
Then the normal no longer equals the weight, because the vertical component of the push adds to the load on the table. The procedure is the same, but the formula for [[N]] must include that additional component.\r
\r
## Cross-cutting connections and study paths\r
\r
- **Direct prerequisite**: [Newton's second law](leaf:fisica-clasica/mecanica/dinamica/fundamentos/leyes-de-newton/segunda-ley-fuerza-masa). Without it, speaking of resultant acceleration makes no sense.\r
- **Geometry prerequisite**: [Inclined plane with friction](leaf:fisica-clasica/mecanica/dinamica/dinamica-traslacional/planos-inclinados/con-rozamiento). There the normal no longer equals the weight and the procedure is extended.\r
- **Natural extension**: multi-body systems with friction reuse exactly this method applied to each block separately, adding internal contact forces.\r
- **Energy connection**: the work done against kinetic friction is dissipated as heat, linking this leaf to the principle of energy conservation and basic thermodynamics.\r
\r
## Final synthesis\r
\r
The complete analysis of frictional systems reduces to a regime decision (static or kinetic) followed by the application of the corresponding equation. The key is that [[f_r]] has no fixed value at rest, that [[F_ext_crit]] marks the boundary between both regimes, and that [[a]] only appears when that threshold is exceeded. Mastering this procedure is the foundation for tackling any translational dynamics problem with friction.\r
`;export{e as default};
