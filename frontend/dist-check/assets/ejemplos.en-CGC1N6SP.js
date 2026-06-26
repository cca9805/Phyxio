const e=`# Exam-type example\r
\r
## Problem statement\r
\r
Definition of Angular Momentum [[L]] is studied in a problem where the key datum is not only numerical but structural: one must decide whether the relevant system is the body or set of bodies whose equilibrium or motion is being studied and whether the environment can be summarized as the choice of origin, axis, and forces that may produce torque [[tau]]. The exam goal is to justify why angular momentum about a chosen origin is the correct reading of the scene.\r
\r
## Data\r
\r
The data must fix units, positive direction, geometry, and material or medium parameters whenever they matter. Before operating, it is useful to classify each datum as external cause, system response, or geometric condition, because that separation prevents quantities from different model levels from being mixed. It is also useful to mark which values are measured, which are deduced, and which only serve as coherence checks at the end.\r
\r
For the concrete case, consider a particle with [[m]], [[v]], [[r]], and [[theta]], and then reinterpret the same angular state through a rigid disk with [[I]], [[omega]], and a possible external [[tau]] acting during [[DeltaT]].\r
\r
## System definition\r
\r
The system is chosen so that irrelevant internal forces stay outside the main balance. That decision must be compatible with the free-body diagram, with a coherent axis choice, and with the central question of the leaf: which origin is relevant and what turning effect the motion has about that origin. If the system is chosen poorly, the rest of the exercise becomes disordered even when the algebra is correct.\r
\r
## Physical model\r
\r
The minimum model that preserves the dominant mechanism is adopted. In the orbital reading one uses [[p]], [[L]], [[r]], and [[theta]] to describe how a moving particle sweeps around the chosen origin. In the rotor reading one uses the relation among [[L]], [[I]], and [[omega]] to describe the same angular state from the body side. If an average [[tau]] acts during [[DeltaT]], the change [[DeltaL]] becomes part of the model as accumulated angular variation.\r
\r
## Model justification\r
\r
The justification must explain why the chosen regime is compatible with the problem scale, the available geometry, and the required precision. In this case, the model is explicit because it distinguishes three physically different questions: what the linear motion is ([[p]]), what the turning effect about the origin is ([[L]]), and how that same state would be read if the moving body were replaced by a rotor ([[I]] and [[omega]]). A strong justification also states that the origin remains fixed and that the effect of any external [[tau]] is either negligible or intentionally included.\r
\r
## Symbolic solution\r
\r
The symbolic solution begins with the appropriate constitutive relation and continues with a clean chain of interpretation. First, [[p]] gives the linear motion. Then [[L]] turns that motion into an angular reading about the origin. If the scene is rewritten as rigid-body rotation, the relation among [[L]], [[I]], and [[omega]] isolates the angular speed once the angular state is known. If the system also receives an average [[tau]], the time relation between [[DeltaL]] and [[DeltaT]] gives the finite angular change.\r
\r
## Numerical substitution\r
\r
Take a particle with [[m]] equal to 0.50 kg, [[v]] equal to 6.0 m/s, [[r]] equal to 0.40 m, and [[theta]] equal to 90 deg. The linear momentum [[p]] is 3.0 kg*m/s. Using the angular-momentum definition, the value about the chosen origin is 1.2 kg*m^2/s. If that same state is reinterpreted as a rigid disk with [[I]] equal to 0.12 kg*m^2, the rotor relation implies [[omega]] equal to 10 rad/s.\r
\r
Now suppose an average [[tau]] of 0.60 N*m acts during a [[DeltaT]] of 0.50 s. Then [[DeltaL]] is 0.30 kg*m^2/s. The new angular state is therefore larger than the original one, and the interpretation must say whether that change came from a real external action or from a redefinition of the system.\r
\r
## Dimensional validation\r
\r
Dimensional validation checks that the final expression produces the correct category of magnitude and that no sum mixes incompatible objects. Here [[p]] must stay in kg*m/s, [[L]] and [[DeltaL]] in kg*m^2/s, [[tau]] in N*m, and [[omega]] in rad/s. If the units are coherent but the value contradicts the expected scale, the likely source of error is the chosen origin, the angle [[theta]], or the distinction between orbital and rigid-body readings.\r
\r
## Physical interpretation\r
\r
The final reading must state what each magnitude means physically. [[p]] alone does not determine the turning effect. The quantity that captures the rotational state about the origin is [[L]], and its value grows or shrinks depending on the effective perpendicular arm. When the problem is re-expressed through [[I]] and [[omega]], the student must recognize that two rotors with the same [[omega]] may have different [[L]] if [[I]] changes. If [[tau]] acts for a finite [[DeltaT]], the resulting [[DeltaL]] is not just a number: it is evidence that the surroundings have altered the angular state.\r
\r
# Real-world example\r
\r
## Context\r
\r
In a real setting, definition of angular momentum appears together with measurement uncertainty, imperfect geometry, and environmental conditions that are not always ideal. A video-based analysis of a ball passing by a post, or of a rotor seen from an off-center camera, quickly shows that the main challenge is often geometric rather than algebraic.\r
\r
## Physical estimation\r
\r
Before calculating, one can already predict that a scene with a large lever arm and nearly perpendicular motion will produce more [[L]] than another with the same [[p]] but poorer geometry. On a rotor bench the right intuition is different: if [[I]] is small, a moderate [[DeltaL]] produces a visible change in [[omega]]; if [[I]] is large, the same action barely alters the spin. That prior estimate is what makes the numerical result physically readable instead of isolated.\r
\r
## Interpretation\r
\r
In a real application, the important question is whether the model supports a decision: compare origins, revise the effective lever arm, estimate the [[tau]] needed to obtain a desired [[DeltaL]], or decide whether the rigid-body reading is better than the orbital one. The value of the leaf is not in repeating a cross product, but in knowing when [[L]] is the right quantity, when a rotor reading is the right quantity, and when a finite [[tau]] over [[DeltaT]] forces a genuine change in the angular state.`;export{e as default};
