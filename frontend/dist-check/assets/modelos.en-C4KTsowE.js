const e=`# Models and validity\r
\r
## Ideal model\r
\r
The ideal model in this leaf describes a simple harmonic oscillator whose state can be summarized by a well-defined phase. Under this framework, [[omega]] remains stable, amplitude [[A]] does not drift appreciably, and the temporal reference stays fixed throughout the analysis. Under those conditions, [[phi_t]] locates the system inside the cycle and [[delta_phi]] compares signals in a consistent way.\r
\r
Its main advantage is organizational clarity. Rather than treating [[x]] and [[v]] as disconnected data, it interprets them as projections of the same cyclic state. That is why phase becomes especially useful when the goal is to distinguish lead, lag, synchronization, or state difference between two formally comparable oscillators.\r
\r
## Hypotheses\r
\r
1. Motion is sinusoidal and sufficiently linear.\r
2. [[omega]] can be treated as approximately constant over the analysis window.\r
3. The temporal reference is unique and does not change during the solution.\r
4. The comparison between [[phi1]] and [[phi2]] uses the same sign convention.\r
5. Observable quantities [[x]] and [[v]] represent the system state reliably.\r
\r
These assumptions matter because phase stops being a trustworthy reading once convention or dynamical regime changes without being declared.\r
\r
## Quantitative validity domain\r
\r
Operational criteria:\r
\r
- relative drift of [[omega]] <= 5% across at least 5 cycles;\r
- relative variation of [[A]] <= 10% during the window used for ideal phase interpretation;\r
- synchronization timing error <= 5% of the period when interpreting [[delta_phi]];\r
- difference between predicted and observed equilibrium crossing <= 10% of cycle time;\r
- effective angular noise on [[phi_t]] or [[delta_phi]] <= 0.2 rad for clean didactic comparisons.\r
\r
These thresholds are not universal constants, but they provide a practical guide for deciding whether simple phase description remains pedagogically and physically defensible.\r
\r
## Model failure signals\r
\r
1. [[omega]] changes systematically and angular evolution no longer looks linear in time.\r
2. Two supposedly comparable signals require redefining the temporal reference for phase difference to make sense.\r
3. Amplitude varies enough that one single phase no longer summarizes behavior cleanly.\r
4. [[x]] and [[v]] stop behaving as coherent projections of a sinusoidal cycle.\r
5. The sign of [[delta_phi]] changes only because of convention problems rather than because of real system physics.\r
\r
These signals are observable and demand model revision before more calculations are performed.\r
\r
## Extended or alternative model\r
\r
Once simple phase reading stops being enough, the next model depends on the source of failure. If visible damping appears, one should move to a description where effective phase is read together with amplitude decay. If the response is forced, one should move to a model using phase relative to the external driving signal. If frequency is not stable, a more local phase reading or another temporal description becomes necessary.\r
\r
The important point is that the alternative model is not chosen because of formal preference, but because ideal phase stops condensing the physical state well. Keeping the old model beyond its useful range produces misleading interpretations even when arithmetic remains correct.\r
\r
## Operational comparison\r
\r
Ideal phase model:\r
- very clear for locating the system inside the cycle;\r
- very useful for comparing signals under the same reference;\r
- sufficient when [[omega]] and [[A]] remain stable.\r
\r
Extended model:\r
- required under damping, forcing, or frequency drift;\r
- needs more physical context and cleaner experimental control;\r
- provides better fidelity once the cycle can no longer be read as simple repetition.\r
\r
When to switch models: when drift in [[omega]] > 5%, when amplitude changes by more than 10% during the analysis window, or when signal comparison requires convention redefinition just to keep the sign of [[delta_phi]] stable. At that point, continuing to speak in terms of simple ideal phase hides important physics and weakens interpretation quality.`;export{e as default};
