const e=`# Physical models involved in the linear–angular analogy\r
\r
## Ideal model\r
\r
The analogy between translational and rotational dynamics does not introduce a new physical model. Instead, it connects two existing models through a shared mathematical structure.\r
\r
On one hand, the translational model describes how a force [[F]] produces acceleration in a system with mass [[m]]. On the other hand, the rotational model describes how a torque [[tau]] produces angular acceleration in a system with moment of inertia [[I]].\r
\r
The analogy allows both to be understood as instances of the same dynamical framework.\r
\r
---\r
\r
## Hypotheses\r
\r
The rotational model is not independent; it is built by reinterpreting the quantities of the translational model.\r
\r
Force [[F]] is replaced by torque [[tau]], mass [[m]] by moment of inertia [[I]], and acceleration [[a]] by angular acceleration [[alpha]].\r
\r
This is not a superficial symbolic substitution. Each replacement reflects a deeper physical reinterpretation: motion is no longer linear but rotational, and it depends on a chosen axis.\r
\r
---\r
\r
## Quantitative validity domain\r
\r
What remains invariant is the structure of the dynamical law:\r
\r
- There is a cause (force or torque)\r
- There is a response (linear or angular acceleration)\r
- There is resistance to change (mass or moment of inertia)\r
\r
This shared structure allows the same problem-solving strategies to be applied in both contexts. As a minimum quantitative criterion, the ideal model is reasonable when the axis is defined, the relative deformation of the body is small, the mass is constant, and speeds are much lower than the speed of light. In that range, the\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
is a reliable tool before resorting to complex elastic or detailed dissipative models.\r
\r
---\r
\r
## Model failure signals\r
\r
The key difference is the introduction of geometric dependence.\r
\r
The moment of inertia [[I]] is not a simple intrinsic property like mass [[m]]. It depends on how mass is distributed relative to the axis of rotation.\r
\r
Similarly, torque [[tau]] depends on the point of application of the force, unlike force in the translational model. Observable failure signals appear when the axis moves during the process, the body deforms appreciably, friction dissipates a large fraction of the energy, or the mass distribution changes while the body rotates. In those cases, the same correspondence table no longer predicts the response correctly.\r
\r
---\r
\r
## Extended or alternative model\r
\r
The analogy breaks down when these differences are ignored.\r
\r
In problems where geometry, axis choice, or mass distribution are relevant, the rotational model cannot be treated as a direct extension of the translational one.\r
\r
The alternative model is to leave the simple correspondence and write the full dynamics about the real axis: external torques, time-dependent moment of inertia when needed, friction losses, and possible kinematic constraints. It is better to switch to this model when the axis is not fixed, when [[I]] cannot be considered constant, or when the applied force does not have a well-defined lever arm.\r
\r
---\r
\r
## Operational comparison\r
\r
The main value of the analogy is operational: it allows the reuse of solution strategies.\r
\r
A problem solved using\r
\r
{{f:segunda_ley_newton}}\r
\r
 in translation can be solved using\r
\r
{{f:segunda_ley_rotacional}}\r
\r
 in rotation via the\r
\r
{{f:correspondencia_lineal_angular}}\r
\r
, provided the relevant quantities are correctly identified.\r
\r
---\r
\r
## Synthesis\r
\r
The linear–angular analogy does not define a new model but establishes a structural correspondence between two different ones. Its correct use requires understanding both what is preserved and what fundamentally changes.`;export{e as default};
