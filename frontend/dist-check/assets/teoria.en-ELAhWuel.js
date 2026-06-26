const e=`# Linear–angular analogy\r
\r
## Conceptual context\r
\r
In mechanics, different types of motion can be described using similar mathematical structures. Translational and rotational dynamics provide a particularly clear example.\r
\r
Although they describe different phenomena—linear motion versus rotation—both are governed by the same underlying idea: how an interaction changes the state of motion of a system.\r
\r
The analogy between them is not merely a mnemonic tool, but a way to understand the deeper structure of physical laws.\r
\r
---\r
\r
## 🟢 Essential level\r
\r
If you push an object with a force [[F]], it accelerates. The larger its mass [[m]], the harder it is to change its motion.\r
\r
Similarly, if you apply a torque [[tau]] to an object, it starts rotating or changes its rotational speed. The larger its moment of inertia [[I]], the harder it is to modify that rotation.\r
\r
The key idea is that there is always:\r
\r
- an action causing change\r
- a resistance of the system\r
- a resulting acceleration\r
\r
At this level, the full table does not need to be memorized. It is enough to recognize the causal pattern: something pushes or makes the body rotate, something resists the change, and the system responds by accelerating. This reading prevents the mistake of treating the analogy as a word-for-word translation.\r
\r
The essential physical question is: what changes when motion stops being rectilinear and starts depending on an axis? In translation, mass summarizes resistance. In rotation, resistance also depends on where that mass is located.\r
\r
---\r
\r
## 🔵 Formal level\r
\r
Translational dynamics is described by:\r
\r
{{f:segunda_ley_newton}}\r
\r
In rotational dynamics:\r
\r
{{f:segunda_ley_rotacional}}\r
\r
The correspondence is:\r
\r
- [[F]] ↔ [[tau]]\r
- [[m]] ↔ [[I]]\r
- [[a]] ↔ [[alpha]]\r
\r
Mathematically, both equations share the same structure: a quantity produces acceleration proportional to it and inversely related to a property of the system.\r
\r
The linear-angular correspondence also includes useful pairs such as linear displacement versus angular displacement, linear velocity versus angular velocity, and linear momentum versus angular momentum. In this leaf, however, the dynamic core is the relation between cause, resistance, and response.\r
\r
The equations should be read as models. The expression\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
is a structural map, not an algebraic identity. It must be applied together with a defined axis and a moment of inertia appropriate for that axis. If any of these conditions is missing, the analogy can still guide reasoning, but the calculation is incomplete.\r
\r
---\r
\r
## 🔴 Structural level\r
\r
Formal similarity does not imply physical equivalence.\r
\r
Mass [[m]] is an intrinsic property of the object, independent of how motion is analyzed. In contrast, the moment of inertia [[I]] depends on how mass is distributed relative to a specific axis.\r
\r
Likewise, force [[F]] acts directly on the system, while torque [[tau]] depends on both the force and its distance from the rotation axis.\r
\r
This introduces a key difference: rotational dynamics is inherently geometry-dependent.\r
\r
The most important structural point is that [[I]] contains geometry. If mass is moved twice as far from the axis, its contribution to moment of inertia grows with the square of the distance. This dependence has no direct counterpart in translational mass. Therefore, two bodies with the same [[m]] can respond very differently to the same [[tau]].\r
\r
Signs also require a different reading. In translation, the sign of [[F]] and [[a]] depends on the chosen linear axis. In rotation, the sign of [[tau]] and [[alpha]] depends on the positive angular direction and the right-hand rule. The analogy preserves sign coherence, but the axis orientation must be defined first.\r
\r
---\r
\r
## Deep physical interpretation\r
\r
The analogy reflects a general principle: physical systems resist changes in their state of motion.\r
\r
In translation, this resistance is quantified by mass. In rotation, it is quantified by the moment of inertia, which includes both mass and its spatial distribution.\r
\r
This explains why two objects with the same mass can behave very differently when rotating.\r
\r
The deeper reading is that rotation does not merely add new symbols; it adds a new question about spatial configuration. Mass answers "how much matter is there." Moment of inertia answers "how much matter is there and how far is it effectively from the axis." That difference makes the analogy a comparison tool, not a material equivalence.\r
\r
---\r
\r
## Order of magnitude\r
\r
In real systems, moment of inertia can vary significantly even for objects with similar mass, because it scales with the square of the distance to the axis.\r
\r
As a result, small geometric differences can have large dynamical consequences.\r
\r
As a quick estimate, doubling a characteristic distance can multiply the contribution to [[I]] by four. If the available torque does not change, [[alpha]] can decrease by the same factor. This sensitivity explains why wheels, flywheels, and disks are designed by controlling not only total mass but also radial distribution.\r
\r
---\r
\r
## Personalized resolution method\r
\r
The analogy allows transferring solution strategies between contexts.\r
\r
To move from translation to rotation:\r
\r
1. Identify the axis of rotation\r
2. Replace forces with torques\r
3. Replace mass with moment of inertia\r
4. Apply\r
\r
the rotational second law with explicit axis and sign conventions.\r
\r
This process requires correct physical interpretation at each step.\r
\r
A safe routine is to write the linear version only as a pattern: cause, resistance, response. Then choose the rotation axis, compute or select [[I]], determine the lever arm of each force, and sum the net torque. Only then should the rotational equation be used. If the axis is skipped, the result may look algebraically correct while being physically wrong.\r
\r
---\r
\r
## Special cases and extended example\r
\r
An object may be easy to translate but difficult to rotate. For example, a long rod and a compact mass may have the same mass but very different rotational behavior.\r
\r
Another special case occurs when the force passes through the axis. Even a large force can produce zero torque if the lever arm is zero. This shows the limit of the phrase "torque corresponds to force": it does not correspond directly, because it depends on how the force is applied relative to the axis.\r
\r
---\r
\r
## Real student questions\r
\r
Why do objects with the same mass rotate differently?\r
\r
Because moment of inertia depends on how mass is distributed relative to the axis.\r
\r
Can I always use the same analogy table?\r
\r
You can use it as an initial map, but not as a substitute for the model. Before calculating, check whether the axis is defined, whether the body can be treated as rigid, and whether [[I]] really corresponds to that axis.\r
\r
---\r
\r
## Cross-cutting connections and study paths\r
\r
- moment of inertia\r
- torque and moment\r
- rotational second law\r
\r
The natural study path goes from this leaf to torque and moment of inertia, then to rotational energy and angular momentum. At each step the same message returns: mathematical form helps, but physical meaning must be rebuilt in the angular context.\r
\r
It also connects backward to Newton's laws. The analogy is easiest to use when the learner already understands net force, inertia, and acceleration as a causal triad. Rotation preserves that triad but changes the objects inside it. This is why the topic acts as a bridge between familiar linear reasoning and the more geometric language of angular motion, especially when later problems combine translation and rotation in one system.\r
\r
---\r
\r
## Final synthesis\r
\r
The linear–angular analogy reveals the structural unity of dynamics. Its value lies in identifying patterns and transferring reasoning strategies, not in equating physical quantities.`;export{e as default};
