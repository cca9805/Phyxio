# Worked Examples in Rotational Motion with Friction

## Conceptual context

This leaf is not only about "doing calculations" in rotational friction. It is about learning how to read a real braking process and decide which dissipative model explains the observed decay. The central question is physical: when a machine or flywheel loses angular [[theta]] speed, how much of that decay is better explained by dry friction, by viscous damping, or by a mixed regime.

In this family of problems, [[omega]] [[omega]] is not just a kinematic datum. It is the main clue for reconstructing the dissipative mechanism. Its time [[t]] profile shows whether braking looks almost uniform, progressively softer, or split into regimes. In the same way, [[K_rot]] [[K_rot]] is not a decorative output. Rotational energy works as a coherence check: in passive braking it must decrease, and if it does not, the mistake lies in signs, units, or assumptions.

That is why the applied examples of this leaf occupy a special place inside rotational dynamics. They connect theory, formulas, measurement, and technical decision. A competent learner does not only compute [[alpha]], but also explains why the value makes sense, which assumptions support it, and at what point a model becomes too simple.

## 🟢 Essential level

The essential intuition starts without long algebra. If a rotor spins and no motor is pushing it, any decrease in [[omega]] should be read as the effect of a dissipative torque. In plain physical language, something in the contact or in the surrounding medium opposes the motion and extracts energy from the system. That lost energy appears as decreasing [[K_rot]], heating, vibration, or noise.

The first qualitative reading is to inspect how [[omega]] falls. If the drop looks almost linear in a short interval, a nearly constant torque is a reasonable suspicion. If decay is steep at first and softer later, viscous friction becomes a stronger candidate. If behavior changes near stop, there is probably no single dominant mechanism over the full maneuver.

It is also essential to understand the role of effective radius [[R]] R. When friction is generated at a localized contact, the same tangential force produces a larger or smaller torque depending on where it acts with respect to the axis. A larger lever arm means stronger braking. That is why a small change in R can alter the motion significantly even if the contact force looks similar.

Another essential idea is not to confuse measurement with model. Precise [[omega]] data do not automatically reveal the dissipative mechanism. Data become knowledge only when they are compared with a physical model and with coherence checks. The learner must be able to narrate the scene: what is rubbing, what shape the time curve has, and what type of loss seems to dominate.

## 🔵 Formal level

At the formal level, the mathematical relations that organize this reading appear. The basic formula is dinamica_rotacional:

{{f:dinamica_rotacional}}

This relation states that angular acceleration [[alpha]] depends on net dissipative torque and moment of inertia [[I]]. If I is large, the same torque changes [[omega]] more slowly. If torque is strong, [[omega]] varies more rapidly.

When dry contact dominates, a useful law is torque_coulomb:

{{f:torque_coulomb}}

Two core magnitudes of the leaf appear here: [[mu_k]] and R. The coefficient [[mu_k]] summarizes material interaction, while R fixes the contact lever arm. This law is especially useful in brakes, pads, rollers, and problems where the contact location is mechanically well defined.

When a fluid, lubricant, or speed-dependent resistance dominates, the more appropriate law is torque_viscoso:

{{f:torque_viscoso}}

The negative sign indicates opposition to motion under the standard convention. If this law is valid and [[b_rot]] [[b_rot]] can be treated as constant, the time evolution of speed is summarized by decaimiento_exponencial:

{{f:decaimiento_exponencial}}

The formula energia_rotacional completes the quantitative reading:

{{f:energia_rotacional}}

This expression is not only for computing a number. It allows the learner to test whether the model truly represents physical braking. If [[omega]] decreases, [[K_rot]] should also decrease. If a prediction breaks that coherence, the problem is conceptual, not merely algebraic.

## 🔴 Structural level

The structural level asks when these formulas stop being a good representation of the system. The first condition is local validity. A short interval may be approximated with nearly constant torque, while the same law fails over a longer record. In other situations, a viscous law fits the high-speed region well but leaves systematic residuals near stop, where dry contact becomes more important.

The second structural condition is parameter coherence. I must be positive. R must be the effective radius actually associated with the contact point. [[mu_k]] and [[b_rot]] cannot take arbitrary values just to "make the numbers work". If identification yields absurd parameters, the failure lies in the model or in the data.

The third condition is energetic. Passive braking must remove energy from the rotor. That is why the comparison between [[omega]] and [[K_rot]] is not a didactic luxury. It is a structural filter that separates a physically interpretable model from a superficial numerical fit. In this leaf, understanding structure means accepting that a good solution depends not only on fit error, but also on causal traceability and validity domain.

## Deep physical interpretation

The deeper reading of the leaf appears when the student stops seeing each formula as an isolated recipe and starts comparing them as hypotheses about the braking mechanism. torque_coulomb tells the story of a contact that dissipates with nearly fixed intensity. torque_viscoso tells the story of a resistance that grows with speed itself. decaimiento_exponencial is not just a convenient curve. It is the expected time signature when the viscous term dominates.

In that framework, [[omega]] becomes the experimental fingerprint of the mechanism and [[K_rot]] becomes the energetic balance that justifies trust or distrust in the model. The important physical decision is not "what number did I get?", but "what form of loss is governing the system and why?". That is what makes the examples of this leaf genuinely applied.

## Order of magnitude

Before inserting specific data, it is useful to think in plausible ranges. If I is large, we do not expect dramatic [[omega]] changes under moderate torque. If R increases, the same contact force produces larger torque. If [[mu_k]] is small but braking is very strong, there must be another important contribution, perhaps a viscous term or an undeclared external load.

It is also helpful to compare timescales. A braking process that cuts [[omega]] in half within a few seconds in a heavy rotor requires strong dissipative torque. If that demand leads to impossible [[mu_k]] or negative [[b_rot]], order-of-magnitude reasoning is already warning that the chosen model is not representing the scene correctly.

## Personalized resolution method

A robust workflow for this leaf can be written as follows:

1. Declare sign convention and check that [[tau_roz]] [[tau_roz]] opposes motion.
2. Identify whether the contact suggests a dry, viscous, or mixed model.
3. Write dinamica_rotacional first and then the chosen dissipative law.
4. Compute [[omega]] or [[alpha]] over a defined window and check [[K_rot]].
5. Close with a validity sentence: where the model works and where it stops working.

This sequence forces calculation and interpretation to advance together. The student does not only obtain a result, but learns to justify why that result belongs to a concrete physical mechanism.

## Special cases and extended example

An instructive special case is pad or band braking. There the dry model is natural because there is a well-defined action radius R and a material coefficient [[mu_k]]. However, if the shaft is lubricated or if the [[omega]] record shows a slope that changes smoothly with speed, it becomes necessary to compare the same scene against torque_viscoso and a mixed model.

Another special case is industrial diagnostics with sensors. The learner no longer receives only one final value, but an [[omega]]-versus-time curve. That changes the task completely: now one must read whether the temporal shape is linear, exponential, or piecewise. In that context, decaimiento_exponencial becomes more than a formula. It becomes a tool for distinguishing regimes.

## Real student questions

**How do I know when I need R and [[mu_k]]?**  
When friction originates in a mechanical contact with a well-defined lever arm. If the physical story is "a force rubs at a radius", torque_coulomb is the natural starting point.

**How do I know when I need [[b_rot]] and decaimiento_exponencial?**  
When resistance appears to depend on [[omega]] and braking softens as speed decreases. That temporal signature usually points to a dominant viscous contribution.

**Why does [[K_rot]] appear so often if the problem asks for [[omega]]?**  
Because [[K_rot]] is a coherence filter. A model that predicts an impossible energetic evolution should not be accepted even if the [[omega]] computation looks tidy.

## Cross-cutting connections and study paths

This leaf connects with angular magnitudes, rolling topics, and moment of inertia. It also connects with predictive maintenance and experimental data reading. The main transfer is methodological: learning how to choose between models using evidence, not just learning how to isolate variables.

## Final synthesis

Mastering these applied examples means using [[omega]] as the temporal fingerprint of braking, using [[K_rot]] as the energetic filter, and deciding whether the system is better understood through torque_coulomb, torque_viscoso, or a mixed description. Once that comparison is done well, mechanics stops being a collection of formulas and becomes a causal reading of a real system.
