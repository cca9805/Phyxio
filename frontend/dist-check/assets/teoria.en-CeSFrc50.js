const e=`# Simple Pulleys\r
\r
## Conceptual context\r
\r
Simple pulleys address a fundamental practical question: how can a person manipulate loads exceeding their direct strength using an elementary mechanical system? This device encapsulates the principles of force direction change and, in its movable form, mechanical advantage.\r
\r
In the study of simple machines, understanding how magnitudes [[W]], [[nSel]], and [[F]] relate enables the design of efficient lifting systems. The fixed pulley changes the direction of force without altering its magnitude, while the movable pulley distributes the load between two rope segments, reducing the required force by half.\r
\r
Learning this concept provides transferable tools to basic cranes, manual lifting systems, simple nautical rigging, and any mechanism where redirecting or multiplying force through individual pulley configurations is required.\r
\r
## 🟢 Essential level\r
\r
Imagine a heavy load you need to lift. A fixed pulley allows you to pull downward to raise the load upward. This is useful because your body weight assists the effort, but the force you must exert remains equal to the weight of the load.\r
\r
The central idea is to distinguish between two configurations:\r
\r
- **Fixed pulley**: The pulley is anchored to a fixed point. It only changes the direction of the force. If the load weighs 100 N, you must pull with 100 N.\r
\r
- **Movable pulley**: The pulley moves with the load. The load is distributed between two rope segments. If the load weighs 100 N, each segment supports 50 N and you only exert 50 N.\r
\r
The principle conserves energy: what you save in force you compensate in distance. With a movable pulley, you must pull twice as much rope to lift the same height.\r
\r
Three cases develop intuition:\r
\r
- **No pulley**: Pulling directly requires force equal to the weight. No mechanical advantage.\r
\r
- **Fixed pulley**: Changes direction but not magnitude. The force remains equal to the weight.\r
\r
- **Movable pulley**: Reduces force by half. The load distributes between two rope segments.\r
\r
## 🔵 Formal level\r
\r
Now express quantitatively through static equilibrium equations. Rigorous analysis enables numerically predicting system behavior.\r
\r
In the ideal lossless model, each supporting rope segment carries a fraction of the total weight. For a movable pulley, there are two active segments sharing the load.\r
\r
Static equilibrium requires the free-end tension equals this load per segment:\r
\r
{{f:fuerza_ideal_poleas}}\r
\r
This mathematical relationship reveals that [[F]] is inversely proportional to the number of active segments. With a fixed pulley, [[nSel]] has value 1 and [[F]] matches [[W]]. With a movable pulley, [[nSel]] has value 2 and [[F]] is reduced to half of [[W]].

The formal reading requires separating the geometric datum from the dynamic datum. [[nSel]] does not measure force or mass: it measures how many segments transmit useful tension to the load. [[W]] fixes the vertical demand that must be balanced. [[F]] is the tension the operator introduces at the free end. If these roles are confused, the calculation may produce a plausible number but a physically wrong interpretation.
\r
Energy conservation imposes an inverse relationship between force and displacement:\r
\r
{{f:traccion_cable_poleas}}\r
\r
The work done on the load (gravity force × vertical displacement) must equal the work done by the operator (pulling force × rope displacement). Therefore, reducing force by half requires doubling the rope travel.\r
\r
## 🔴 Structural level\r
\r
The simple pulley model has well-defined structural limits:\r
\r
**Validity limits of the ideal model:**\r
\r
1. **Axle friction**: A real pulley has friction in its rotation axle. Part of the applied force dissipates as heat. In well-lubricated pulleys, this effect is small (~5-10%); in rusty or unmaintained pulleys, it can be significant (>20%).\r
\r
2. **Movable pulley weight**: The model assumes the movable pulley has no mass. In reality, its weight adds to the load. If the load is light and the pulley heavy, the error can be substantial.\r
\r
3. **Rope elasticity**: Real rope stretches under tension, storing elastic energy. This introduces a dynamic element that the static model does not capture.\r
\r
4. **Rotational inertia**: If acceleration is significant, the pulley mass must rotationally accelerate, requiring additional force.\r
\r
The ideal model systematically fails when:
- Mechanical efficiency is low (< 0.8)
- Better than 10% precision is required
- Significant accelerations exist (a > 0.1 g)
- Movable pulley weight exceeds 5% of the load

In practice, these limits are not secondary details: they change which problem is being solved. A rusty pulley stops being an ideal equilibrium system and becomes a dissipative system. An elastic rope converts part of the work into temporarily stored energy. An accelerating load requires Newton's second law, not only equilibrium. Therefore the ideal model must be read as a controlled first approximation, valid while losses, deformations, and inertias remain small compared with the main force.
\r
## Deep physical interpretation\r
\r
The deep physical meaning transcends numerical calculation. It is about understanding the conservation of mechanical energy: we cannot obtain useful work from nothing. The mechanical advantage provided by the movable pulley does not create energy; it simply redistributes effort in space.\r
\r
Questions to develop intuition:\r
\r
- **What happens if [[nSel]] tends to infinity?** Theoretically, the required force would tend to zero. Practically, the necessary rope would be infinitely long and cumulative friction losses would invalidate the model.\r
\r
- **What happens if [[W]] is zero?** Without load, the required force is zero in the ideal model. The movable pulley would rise without resistance, illustrating that the system responds only to net forces.
\r
- **Why doesn't a fixed pulley save force?** Because it has only one active segment. The load hangs from a single rope segment, so the tension must equal the full weight. The only advantage is biomechanical: using body weight when pulling downward.\r
\r
## Order of magnitude\r
\r
To develop physical sense, numerical references are crucial. The following orders of magnitude are typical in this context:\r
\r
- **[[W]]**: In introductory problems it usually ranges from tens to a few thousand newtons. For example, a 50 kg mass generates a weight of approximately 500 N.\r
\r
- **[[nSel]]**: In simple pulley educational setups, [[nSel]] takes values 1 (fixed pulley) or 2 (movable pulley).\r
\r
- **[[dx_load]]**: In standard exercises it goes from a few centimeters to a few meters. A typical lift of 1-2 m is manageable manually.\r
\r
- **[[F]]**: With fixed pulley, [[F]] is approximately equal to [[W]]. With movable pulley, [[F]] is approximately half of [[W]]. An average adult can exert sustained forces of 200-400 N.
\r
- **[[dx_pull]]**: With movable pulley, [[dx_pull]] doubles [[dx_load]]. If lifting 1 m, you must pull 2 m of rope.
\r
These values allow a "sanity check": if you calculate needing 10,000 N to lift 100 kg, there's an error; if you calculate 5 N, also wrong.\r
\r
## Personalized resolution method\r
\r
The procedure for solving simple pulley problems follows these steps:\r
\r
1. **Identify the configuration**: Is it a fixed or movable pulley? Count the rope segments that directly support the load ([[nSel]]).\r
\r
2. **Draw the free body diagram**: Always visualize. Represent the load, rope segments, tensions, and direction of motion.\r
\r
3. **Apply static equilibrium**: The sum of vertical forces on the load must be zero. Tension is equal throughout the ideal cable.\r
\r
4. **Solve for the unknown**: Use the ideal equilibrium relation to connect [[F]] with [[W]] and [[nSel]].
\r
5. **Validate dimensionally**: [[F]] must be in newtons. Verify that [[F]] is less than or equal to [[W]], with equality only when [[nSel]] has value 1.
\r
6. **Check physical coherence**: Is it reasonable for a person to exert that force? Is the rope displacement manageable?\r
\r
## Special cases and extended example\r
\r
**Special case 1 — Ideal vs real fixed pulley**: In the ideal model, [[F]] matches [[W]]. In a real pulley with friction, [[F]] exceeds [[W]]. The difference quantifies the losses. If mechanical efficiency is known, the real force is corrected by increasing the effort predicted by the ideal model.
\r
**Special case 2 — Movable pulley with own weight**: If the movable pulley has significant mass, the effective weight is the sum of [[W]] and the pulley weight. Required force increases proportionally and is shared by the two active segments.
\r
**Extended integrated example**: A worker needs to lift 80 kg of material to 3 m height using a movable pulley. The pulley weighs 2 kg. Calculate:\r
- Total weight: a combined mass of 82 kg produces approximately 804 N
- Ideal force: sharing that load between two active segments gives approximately 402 N (about 41 kgf)
- Verification: Can a worker exert 402 N sustainedly? Yes, but requires significant effort.\r
- Rope displacement: twice the lift, that is, 6 m
- Work done: of order 2.4 kJ, coherent with the work against gravity
\r
## Real student questions\r
\r
**Why doesn't a fixed pulley save force if physics says simple machines multiply force?**\r
The fixed pulley is a direction simple machine, not a multiplication machine. It only changes the direction of applied force. Mechanical advantage multiplication requires the load to distribute among multiple rope segments, which only occurs with movable pulleys or compound systems.\r
\r
**Why must I pull more rope if I use a movable pulley?**\r
By energy conservation. The work you do (force × distance you pull) must equal the work on the load (weight × height it rises). If you reduce force by half, you must double distance to keep work constant.\r
\r
**How do I know how many active segments my system has?**\r
Count the rope segments that come directly from the movable pulley and support the load. In a simple fixed pulley, it is 1. In a simple movable pulley, it is 2. If the rope is tied to a fixed point, that segment does not count as active if it does not directly support.\r
\r
**When should I use fixed vs movable pulley?**\r
Fixed pulley: when you need directional convenience (pulling down to go up) and the load is not excessive. Movable pulley: when the load exceeds the force you can exert directly and you need to reduce effort at the cost of pulling more rope.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects with others in the Phyxio tree:\r
\r
- **Prerequisites**: Newton's Laws (force equilibrium), vectors (tension decomposition), work and energy (conservation and transfer).\r
\r
- **Natural continuations**: Compound pulleys (systems with multiple pulleys), simple machines (levers, inclined planes), advanced statics (structures, trusses).\r
\r
- **Applications**: Cranes and lifting systems, nautical rigging, rescue systems, gym pulleys.\r
\r
- **Historical perspective**: Historical evolution is detailed in \`historia.en.md\` of this leaf, including Archimedes' contributions and the development of marine rigging.\r
\r
## Final synthesis\r
\r
You have seen how the simple pulley, apparently elementary, encloses deep physical principles about force direction and mechanical advantage. The distinction between fixed pulley, with [[nSel]] of 1, and movable pulley, with [[nSel]] of 2, is not merely taxonomic; it reflects fundamental differences in how tensions distribute in the system.
\r
True understanding goes beyond the formal relations for ideal force and rope travel. It consists of developing intuition about when the ideal model applies, what limitations friction and inertia introduce, and how the principle of energy conservation inevitably governs the exchange between force and displacement.
\r
This knowledge is transferable to any mechanical system where force is redirected or multiplied: from industrial cranes to medical rehabilitation equipment. Understanding simple pulleys is the first step toward mastering more complex machines and toward an integrated vision of Newtonian mechanics.\r
`;export{e as default};
