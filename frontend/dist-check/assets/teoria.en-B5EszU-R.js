const e=`# Theory\r
\r
## Conceptual context\r
Constraint problems describe systems where motion is not independent across components. In the Atwood configuration, [[m1]] and [[m2]] are connected by an inextensible rope over an ideal pulley, so one kinematic relation ties both bodies at all times. This relation reduces effective degrees of freedom and forces one common acceleration response for the coupled system. The key interpretation is that internal force [[T]] is not an external input but an emergent closure variable required by compatibility. The model therefore teaches system-level reasoning: local equations are meaningful only when read together with the global constraint.\r
\r
Students often focus on equation manipulation and miss this structural message. The useful question is not only how to isolate one symbol, but why the coupling law imposes shared dynamics. Once that viewpoint is adopted, formulas become compact summaries of causal structure. Relative imbalance between [[m1]] and [[m2]] sets direction and intensity tendencies, while [[g]] scales the overall dynamic level. Near symmetry leads to weak response and high sensitivity to non-ideal effects. Strong asymmetry produces faster shared motion.\r
\r
## 🟢 Essential level\r
At the essential level, avoid premature algebra and keep three statements. First, the rope constraint couples both masses into one dynamic system. Second, imbalance between masses is the driver of motion tendency. Third, the internal interaction transmitted through the rope is what makes both local force balances mutually consistent. This level is intentionally conceptual so learners can explain cause and effect before symbolic reduction.\r
\r
A second essential point is role separation. Scenario parameters such as [[m1]], [[m2]], and [[g]] define conditions; outputs emerge from closure. When role separation is ignored, typical misconceptions appear, including the belief that tension is always equal to one weight. In reality, the internal force depends on both masses at once because both branches are coupled. This systemic framing is the minimal conceptual core required before formal derivation.\r
\r
## 🔵 Formal level\r
Formal derivation starts with one clear sign convention and one Newton equation per mass. The same acceleration magnitude is used in both equations because rope inextensibility enforces compatibility. Combining equations removes internal force and produces common acceleration. Back-substitution gives internal tension.\r
\r
{{f:a_comun}}\r
\r
{{f:T}}\r
\r
These relations encode structure. The denominator with mass sum represents total inertia of the coupled system. The difference term captures effective imbalance. The gravity factor sets force scale. Dimensional checks and limit checks are mandatory: equal masses must give zero acceleration, and sign should reverse when masses are swapped. Formal quality comes from these consistency tests, not from symbolic length.\r
\r
## 🔴 Structural level\r
Structural analysis asks when the ideal model stops being reliable. The standard assumptions are negligible rope mass, negligible rope stretch, negligible pulley friction, and negligible pulley inertia. If one assumption fails at relevant scale, predictions change qualitatively. Tension may differ across branches, dissipation can become dominant, and transient effects can matter. The ideal model remains useful as first approximation but must not be overextended.\r
\r
Structural reading also includes geometry quality. The one-coordinate abstraction is valid only when motion is effectively constrained to the intended path. Lateral vibration, slack, or support compliance introduces additional degrees of freedom and weakens strict constraint behavior. Reporting validity conditions together with results is therefore part of the solution, not an optional comment.\r
\r
## Deep physical interpretation\r
The deep idea is that constraints redistribute causality across components. One branch cannot be interpreted independently once coupling is active. Internal force is the medium through which compatibility is enforced, and common acceleration is the visible consequence of that enforcement. This interpretation generalizes beyond this leaf to many cable, belt, and linkage systems.\r
\r
Another deep insight is the role of symmetry. Absolute mass size is less informative than relative contrast once total inertia is considered. Two heavy almost equal masses can produce weak response, while lighter but strongly unbalanced masses can produce stronger normalized response. Recognizing this prevents superficial parameter reasoning and supports robust model transfer.\r
\r
## Order of magnitude\r
For quick estimates, common acceleration is usually a fraction of gravitational scale controlled by relative imbalance. Internal tension is usually on the order of weight scale associated with total loading. These order-of-magnitude expectations are practical filters: they quickly expose sign mistakes, unit inconsistency, and unrealistic outputs before detailed interpretation.\r
\r
## Personalized resolution method\r
Step 1: declare axis direction and sign convention.\r
Step 2: state assumptions of ideal rope and pulley.\r
Step 3: write coupled dynamic equations with shared compatibility.\r
Step 4: isolate common acceleration from the combined system.\r
Step 5: compute internal force by substitution.\r
Step 6: validate dimensions, limits, and sign behavior.\r
Step 7: report one causal sentence linking parameter change and physical response.\r
\r
## Special cases and extended example\r
Near-symmetry case: response is weak and non-ideal losses become comparatively important. Strong-imbalance case: response approaches gravity-scaled behavior under coupling. Data-inference case: measured motion can estimate acceleration and then infer internal force, allowing model validation against experiment. These cases demonstrate why this leaf is both analytical and experimental.\r
\r
## Real student questions\r
Why cannot each mass keep its own acceleration. Because inextensible coupling removes one degree of freedom.\r
Why is internal force not a freely chosen value. Because it emerges from compatibility plus both local balances.\r
What changes if friction is not negligible. The ideal closure changes and must include loss mechanisms.\r
\r
## Cross-cutting connections and study paths\r
This leaf connects to constraints and degrees of freedom, to Lagrangian viewpoints, and to non-ideal pulley models. It also connects to experimental methodology, because internal variables can be inferred from external measurements. A robust study path is: master ideal coupling interpretation, add one non-ideal effect, then compare predictions with measured data.\r
\r
## Final synthesis\r
Problems with constraints is a compact but powerful example of system-level mechanics. Parameters [[m1]], [[m2]], and [[g]] define conditions, while coupled outputs summarize shared response. Good work requires consistent equations, explicit validity limits, and causal interpretation. With this triad, results become transferable to richer coupled systems instead of remaining isolated exercise outcomes.\r
\r
An additional practical lesson is communication quality. In real technical workflows, two teams can run the same equations and still reach different decisions because assumptions were written differently. Explicitly stating assumptions, axis convention, and validity checks makes the analysis reproducible. Reproducibility is not a bureaucratic add-on; it is part of physical correctness when results are reused by other people.\r
\r
This leaf also supports metacognitive growth. Learners move from asking what formula to apply toward asking what mechanism is active, what information is missing, and what would falsify the current model. That shift is essential for advanced mechanics, where many problems are underdetermined until constraints are identified and represented clearly.\r
\r
A final transferable takeaway is experimental dialogue. Constraint problems naturally connect symbolic derivation with measurable trajectories, so they are ideal for practicing model-refine loops. Students can run a first prediction, compare with repeated measurements, identify whether mismatch is random or systematic, and decide if an extension is justified. This disciplined loop is a core habit for scientific and engineering work far beyond this specific leaf.\r
\r
This is also why the topic remains pedagogically durable: it links abstraction, computation, and evidence in one coherent arc. Few introductory systems offer such a clear bridge between formal derivation and practical decision-making.\r
`;export{e as default};
