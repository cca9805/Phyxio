const e=`# Exam-type example\r
\r
## Problem statement\r
\r
Conservation of Angular Momentum [[L]] is studied in a problem where the key datum is not only numerical but structural: one must decide whether the relevant system is the body or set of bodies whose motion is being analyzed and whether the environment can be summarized as negligible external torque [[tau]] over the interval of interest. The exam goal is to justify why angular conservation, rather than an unrelated rotational formula, is the right reading of the scene.\r
\r
## Data\r
\r
The data must fix units, positive sense, geometry, and the time window of the process. For this leaf, the relevant magnitudes are [[Li]], [[Lf]], [[Ii]], [[I_final]], [[omegai]], [[omegaf]], and, if the model is being audited, [[tau]], [[DeltaL]], and [[DeltaT]]. A good setup already separates what belongs to internal redistribution from what belongs to the surroundings.\r
\r
## System definition\r
\r
The system is chosen so that the internal reorganization of mass stays inside the balance while the surrounding torques are clearly identified. That choice must be compatible with the axis of rotation and with the question of the leaf: are we allowed to compare [[Li]] and [[Lf]] directly, or is an external torque large enough to break conservation?\r
\r
## Physical model\r
\r
The minimum model that preserves the dominant mechanism is adopted. In the ideal version, the conservation equation states that [[Li]] and [[Lf]] must match. For motion about the same axis, the inertia-based balance links [[Ii]], [[I_final]], [[omegai]], and [[omegaf]]. If the experiment is not perfectly isolated, the model is expanded with [[tau]], [[DeltaL]], and [[DeltaT]] so that conservation is not invoked blindly.\r
\r
## Model justification\r
\r
The justification must explain why the chosen regime is compatible with the problem scale and with the expected strength of the environment. In this example, the model is defensible because the main event is an internal redistribution of inertia, not a strong external action. The justification becomes explicit when it states that conservation is acceptable only if the possible external [[tau]] over [[DeltaT]] is small compared with [[Li]].\r
\r
## Symbolic solution\r
\r
The symbolic solution follows a clear chain. First, the conservation equation imposes the central balance between [[Li]] and [[Lf]], and its solved form makes the final state inherit the initial angular content. Then the inertia-based balance expresses the same relation through [[Ii]], [[I_final]], [[omegai]], and [[omegaf]], while the solved final-speed form isolates the unknown [[omegaf]]. If a residual external action is suspected, the average-torque relation links [[DeltaL]] to [[DeltaT]] and turns the problem into an audit of whether conservation still holds.\r
\r
## Numerical substitution\r
\r
Take an initial state with [[Ii]] equal to 4.0 kg*m^2, [[I_final]] equal to 1.6 kg*m^2, and [[omegai]] equal to 2.0 rad/s. The initial angular momentum [[Li]] is 8.0 kg*m^2/s. If the system is isolated enough for the conservation balance to apply, then the final state inherits that same value and [[Lf]] remains 8.0 kg*m^2/s. Using the solved final-speed form, [[omegaf]] is 5.0 rad/s.\r
\r
Now include an audit: suppose the apparatus could transmit an average [[tau]] of 0.20 N*m during a [[DeltaT]] interval of 0.40 s. The implied angular change [[DeltaL]] is 0.08 kg*m^2/s. That value is small compared with [[Li]], so the ideal conservation reading remains plausible, but it is no longer treated as a magical exact statement. The calculation now has a physical tolerance.\r
\r
## Dimensional validation\r
\r
Dimensional validation checks that [[Li]], [[Lf]], and [[DeltaL]] remain in kg*m^2/s, [[tau]] in N*m, and angular speeds in rad/s. It also checks that the comparison between the residual [[DeltaL]] and the stored angular momentum is physically meaningful. A dimensionally correct result can still be conceptually wrong if the system boundary or the time interval [[DeltaT]] is badly chosen.\r
\r
## Physical interpretation\r
\r
[[Lf]] is not a decorative number: it says whether the final state still carries the same total angular content as the initial one. The rise in [[omegaf]] does not mean that new angular momentum has appeared; it means that [[I_final]] has decreased while total [[L]] remained essentially fixed. The quantities [[tau]], [[DeltaL]], and [[DeltaT]] matter because they decide whether that conservation reading is legitimate or whether the surroundings have actually injected a noticeable change.\r
\r
# Real-world example\r
\r
## Context\r
\r
In a real setting, conservation of angular momentum appears in rotating stools, skaters, reaction-wheel systems, deployable satellites, and collision experiments. In all of them the interesting question is the same: is the observed change in angular speed a mere redistribution inside the system, or evidence of external torque?\r
\r
## Physical estimation\r
\r
Before calculating, one already knows that if [[I_final]] drops strongly while [[Li]] stays nearly fixed, [[omegaf]] must increase visibly. One also knows that a small residual [[tau]] acting over a short [[DeltaT]] will only correct the reading slightly, whereas a sustained torque over several seconds would destroy the core hypothesis of the leaf. That estimation is what prevents conservation from becoming a ritual instead of an argument.\r
\r
## Interpretation\r
\r
In a real application, the important question is whether the discrepancy between [[Li]] and [[Lf]] comes from poor measurements of [[Ii]] or [[I_final]], or from an unmodeled external torque. The leaf is valuable precisely because it distinguishes an internal geometric redistribution from a genuine breakdown of conservation. That is what makes the conservation balance and the audit with [[tau]], [[DeltaL]], and [[DeltaT]] part of one coherent physical story.`;export{e as default};
