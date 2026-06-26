const e=`# Mass-spring oscillator\r
\r
## Conceptual context\r
\r
The mass-spring oscillator is one of the cleanest bridges between qualitative intuition and quantitative prediction. In this leaf, we analyse how [[m]] and [[k]] jointly shape time response, and why that response must be read as a physical consequence of inertia, restoring interaction, and initial conditions rather than as a purely formal sinusoid. The setup is simple, yet conceptually rich: a concentrated mass, an elastic element operating in an approximately linear range, and a displacement that launches dynamical evolution.\r
\r
The core question is not only what value a variable takes, but which mechanism dominates when parameters and assumptions change. For that reason, this text does not isolate mathematics from interpretation. We treat model choice, sign meaning, sensitivity to measurement error, and validity limits as one coherent workflow. The intended outcome is decision quality: selecting and defending the right model before committing to numerical substitution.\r
\r
## 🟢 Essential level\r
\r
At the essential level, we build a robust physical picture before algebra. If the mass is moved by [[x]] from equilibrium, the spring generates restoring [[F]] that points back toward balance. The response is not arbitrary: inertia associated with [[m]] resists rapid state changes, while stiffness [[k]] drives return motion. Observable behaviour becomes periodic and is summarised by [[T]] and [[f]], while initial state is encoded by [[A]], [[phi]], and the chosen time reference [[t]].\r
\r
This conceptual layer prevents common mistakes. First, larger mass does not mean larger motion; under fixed stiffness it often means slower oscillation. Second, higher stiffness is not universally desirable; in many designs it raises internal load and acceleration peaks. Third, crossing equilibrium does not imply stopping: in ideal harmonic motion, speed is typically maximal when displacement is zero.\r
\r
A useful educational distinction is role separation among magnitudes. [[m]] and [[k]] define system scale. [[omega0]], [[T]], and [[f]] define temporal rhythm. [[A]] and [[phi]] define initial-state geometry. [[x]] and [[F]] describe instantaneous state and reaction direction. Mixing roles can still produce arithmetic output, but interpretation quality collapses.\r
\r
## 🔵 Formal level\r
\r
The formal level organises computable and conceptual relations into a consistent structure. Each formula answers a specific operational question and must be applied within its validity conditions.\r
\r
Intrinsic angular rate from inertia-stiffness balance:\r
\r
{{f:pulsacion_natural}}\r
\r
Cycle duration relation:\r
\r
{{f:periodo_muelle}}\r
\r
Cycle-rate relation:\r
\r
{{f:frecuencia_muelle}}\r
\r
Time-domain state evolution for given initial conditions:\r
\r
{{f:ecuacion_oscilacion}}\r
\r
Directional restoring-force interpretation:\r
\r
{{f:ley_hooke_conceptual}}\r
\r
Expert use is not memorisation but selection strategy. If [[m]] and [[k]] are given, estimate [[omega0]] first and derive [[T]] or [[f]] depending on output requirement. If a time trace is provided and pointwise prediction is requested, use the state equation with [[A]], [[phi]], and [[t]]. If directional reasoning is the target, the conceptual Hooke relation provides causal interpretation even when it does not close the full computation.\r
\r
Dimensional and semantic consistency is mandatory. [[omega0]] is in radians per second, [[f]] in hertz, and [[T]] in seconds. Confusing them introduces systematic bias over the entire solution chain. Likewise, treating force as magnitude-only destroys sign-based stability interpretation.\r
\r
## 🔴 Structural level\r
\r
The structural level answers when the simple model should be abandoned. Real systems are not perfectly isolated: damping, external forcing, geometric constraints, temperature drift, and material nonlinearity can all become relevant. The baseline model remains useful only if its limits are monitored explicitly.\r
\r
A first practical criterion is period drift with amplitude. If relative change in [[T]] exceeds about ten percent over the operating range, linearity is likely compromised and a nonlinear or damped model should be considered. A second criterion is envelope decay: if [[A]] visibly decreases cycle by cycle, dissipation is not negligible and conservative assumptions are no longer sufficient.\r
\r
Engineering objective also matters. For preliminary resonance-avoidance estimates, the ideal model can be enough. For peak-load prediction, fatigue analysis, or active control, damping and forcing must be represented. Model escalation is therefore a risk-management decision, not a stylistic preference.\r
\r
## Deep physical interpretation\r
\r
Deep interpretation integrates equations, measurements, and design decisions. The [[m]]-[[k]] pair is not an algebraic convenience; it is a compact representation of inertia versus restorative tendency. When [[k]] dominates relative to [[m]], the system cycles quickly. When [[m]] dominates, response is slower and state memory over time becomes stronger.\r
\r
Initial phase [[phi]] is crucial for aligning model output with measurement traces. Changing [[phi]] does not alter system nature; it shifts the cycle starting point. Many apparent model-data mismatches are actually phase-reference mismatches, not failures of physical law.\r
\r
Restoring force [[F]] provides the causal signature of local stability. Opposite sign between [[F]] and [[x]] means the system is pulled back toward equilibrium. If an experiment appears to show the opposite trend, that is usually a major modelling issue or a setup/sign-convention error, not a minor arithmetic deviation.\r
\r
## Order of magnitude\r
\r
Order-of-magnitude checks detect errors before final reporting. In educational and lab-scale setups, [[m]] from 0.1 to 2 kg and [[k]] from 10 to 500 N/m typically yield [[f]] around 0.3 to 6 Hz and [[T]] around 0.15 to 3 s. If results fall far outside these scales without strong justification, unit conversion is the first suspect.\r
\r
An additional energetic check is useful. For small amplitudes, peak restoring force grows approximately linearly with [[A]] and [[k]]. If a computed force exceeds structural capability while the real setup shows no corresponding effect, input consistency should be audited before modifying theory assumptions.\r
\r
Order-of-magnitude reasoning does not replace full computation; it protects against defending numerically precise but physically implausible outcomes.\r
\r
## Personalized resolution method\r
\r
1. Define physical system boundaries and primary target variable: [[omega0]], [[T]], [[f]], [[x]], or directional reading of [[F]].\r
2. Verify baseline assumptions: linear elastic regime, no dominant external forcing, coherent units for [[m]] and [[k]].\r
3. Choose the structural relation that matches the question, then perform symbolic isolation first.\r
4. Substitute numerical values with a single unit convention and explicit sign tracking.\r
5. Run coherence checks: expected time scale, restoring-force sign, and amplitude bounds.\r
6. Translate the numerical result into physical language: what parameter change would alter behaviour and why.\r
\r
This workflow prioritises traceability. If a contradiction appears, do not force a numerical closure. Return to assumptions and decide whether a richer model is required.\r
\r
## Special cases and extended example\r
\r
Special case one: high mass with moderate stiffness. The system shows longer periods and stronger sensitivity to low-frequency disturbances. Special case two: high stiffness with low mass. Response becomes fast, and time sampling requirements become strict to avoid aliasing in acquisition. Special case three: light damping. Measured frequency may remain near ideal, but amplitude envelope and energy interpretation change.\r
\r
Extended applied scenario: consider an elastic mount used to isolate vibration in a precision instrument. Specification requires the natural frequency to remain below a disturbance band. Correct flow is to identify effective [[m]], estimate equivalent [[k]], compute [[omega0]], and convert to [[f]]. If separation from external excitation is insufficient, redesign [[k]] or redistribute [[m]]. Then validate with time-domain tests, adjusting [[phi]] only to align measurement start with simulation reference, never to hide model mismatch.\r
\r
## Real student questions\r
\r
Question: why can two systems with the same mass oscillate differently. Answer: because [[k]] changes restoring strength and therefore cycle timing.\r
\r
Question: when should I use [[f]] instead of [[omega0]]. Answer: use [[f]] for Hz-based specifications and [[omega0]] for angular/phase-domain expressions.\r
\r
Question: if [[x]] is zero, is force always zero. Answer: in the ideal linear model, restoring force is zero at equilibrium crossing, but velocity is generally not.\r
\r
Question: what if measured amplitude decays every cycle. Answer: include damping; undamped assumptions are no longer adequate.\r
\r
Question: what is the fastest unit-consistency check. Answer: compare computed [[T]] and [[f]] against expected scale for given [[m]] and [[k]].\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf connects directly to Hooke-law foundations in dynamics, to energy methods in work-energy analysis, and to forced-response/resonance topics in oscillation theory. It also links with instrumentation practice: sensor calibration, temporal filtering, and phase reconstruction. From a modelling perspective, it is an entry point to linear differential equations, frequency response, and vibration-control reasoning.\r
\r
Suggested path: first consolidate directional reading of [[F]] versus [[x]], then master conversions among [[omega0]], [[T]], and [[f]], and finally move to damped and forced cases. This progression minimises conceptual drift and improves transfer to unfamiliar contexts.\r
\r
## Final synthesis\r
\r
Mastering the mass-spring oscillator requires three integrated competencies: modelling, computation, and interpretation. Modelling means declaring valid assumptions and recognising when they fail. Computation means using consistent relations among [[m]], [[k]], [[omega0]], [[T]], [[f]], and [[x]] with dimensional discipline. Interpretation means converting numbers into physical decisions, including validity limits and extrapolation risk.\r
\r
When these layers are aligned, the model stops being a memorised formula and becomes a decision tool. That is the purpose of this leaf: to justify why a result is plausible, identify which parameter should be tuned to meet a specification, and know when escalation to a richer model is physically necessary.\r
`;export{e as default};
