const e=`# Typical Examples\r
\r
## Conceptual context\r
\r
This leaf organizes a canonical family of centripetal-force scenarios under one causal framework. The guiding question is always the same: which real force, or force component, provides the radial resultant [[Frad]] required to keep motion curved?\r
\r
The didactic purpose is to prevent formula fragmentation. Horizontal-string motion, flat-road cornering, ideal banking, top-of-loop contact, and circular orbital motion are not disconnected chapters. They are different physical implementations of the same radial requirement, expressed through [[ac]], [[Frad]], and context-specific force sources.\r
\r
## 🟢 Essential level\r
\r
At essential level, the priority is causal clarity. If a trajectory bends, velocity direction changes continuously, and that directional change requires inward action. That inward action must come from real interactions.\r
\r
In string motion, the main provider is [[Tn]]. In flat curves, radial support is linked to [[fs]] and adherence represented by [[mu]]. In banked curves, geometry through [[th]] allows [[Nn]] to contribute radially. In loop motion, contact at the top depends on maintaining sufficient speed against gravity [[g]]. In orbital motion, gravitational interaction governed by [[G]] and [[M]] supplies the inward requirement.\r
\r
The core takeaway is simple and powerful: curved motion always needs radial support, and that support has physical limits.\r
\r
An essential-level learner should be able to answer two practical questions without writing equations yet. First: what interaction is physically available to provide inward support in this scene? Second: what could make that support collapse or degrade? If those questions are answered early, later calculations become meaningful instead of decorative.\r
\r
This is also where language discipline matters. Calling everything “centripetal force” hides causality. In this leaf, we separate requirement from provider. The requirement is radial curvature demand; the provider is a real mechanism in contact, tension, or gravity terms. Keeping that distinction at essential level dramatically reduces transfer mistakes later.\r
\r
## 🔵 Formal level\r
\r
The same causal story is now written quantitatively.\r
\r
**Base radial equation:**\r
\r
{{f:base_radial}}\r
\r
This relation is the structural backbone across all examples.\r
\r
**Horizontal string:**\r
\r
{{f:cuerda_tension}}\r
\r
This is the case where [[Tn]] is the direct radial provider.\r
\r
**Maximum speed on a flat curve:**\r
\r
{{f:curva_plana_velocidad_max}}\r
\r
This relation links [[mu]], [[g]], and [[r]] to non-skid speed limit.\r
\r
**Ideal banked curve:**\r
\r
{{f:peralte_ideal}}\r
\r
This relation sets design speed from geometry via [[th]].\r
\r
**Minimum contact speed at loop top:**\r
\r
{{f:loop_contacto_minimo}}\r
\r
This gives the threshold required to preserve contact in the critical loop position.\r
\r
**Circular orbit:**\r
\r
{{f:orbita_circular}}\r
\r
This extends the same radial framework to gravitational scale with [[G]], [[M]], and [[r]].\r
\r
Formal mastery here means understanding one radial structure with multiple force providers, not memorizing isolated equations.\r
\r
## 🔴 Structural level\r
\r
At structural level, the focus is validity and decision quality.\r
\r
1. **Speed sensitivity**: in several subcases, radial demand grows sharply with [[v]].\r
2. **Contact dependence**: flat-curve safety margin is highly sensitive to [[mu]].\r
3. **Geometric redistribution**: changing [[th]] alters force sharing in banked cases.\r
4. **Critical contact condition**: loop analysis requires explicit threshold checks.\r
5. **Scale transfer**: orbit dynamics keeps the same radial logic at very different magnitudes.\r
\r
This level is where modeling choices become engineering decisions.\r
\r
The structural layer adds a decision lens: not only whether a computed value is internally consistent, but whether it is reliable enough for action. The same number can be acceptable for first-pass teaching and unacceptable for operational safety if uncertainty and assumption fragility are ignored.\r
\r
A robust structural reading asks four questions. Which assumptions are carrying the result? Which parameter dominates risk under plausible variation? Which observable would reveal model breakdown in real time? And what is the correct escalation path if that breakdown appears?\r
\r
A useful operational partition is stable region, sensitive region, and invalid region. In the stable region, moderate variation does not flip conclusions. In the sensitive region, small input changes can move the system across safety boundaries. In the invalid region, dominant physics is no longer represented by the baseline model, so a higher-fidelity model is required before publishing recommendations.\r
\r
This is why structural-level learning is not “more algebra”; it is model governance. It turns solved exercises into defensible decisions by explicitly linking assumptions, thresholds, and intervention strategy.\r
\r
## Deep physical interpretation\r
\r
A physically complete answer must explain three elements: what is demanded, who supplies it, and how much margin remains. Numeric output without this causal triad is incomplete.\r
\r
A recurring misconception is treating [[Fc]] as an extra force. In this leaf, [[Fc]] is interpreted as the required radial-force magnitude, which must be matched by real interactions in each context.\r
\r
Another key distinction is nominal versus robust stability. A setup may satisfy ideal equations yet fail under modest speed drift or adherence degradation. Therefore, interpretation must include margin and validity boundaries.\r
\r
Interpretation quality can be audited with a simple triad: causal consistency, boundary awareness, and actionability. Causal consistency means the declared radial provider is physically plausible in that scenario. Boundary awareness means validity limits are explicit rather than implied. Actionability means the output tells a user what to change first when margin shrinks.\r
\r
In classroom settings, students often stop at “numerically correct.” In real-world settings, that is not enough. A physically mature interpretation states what was neglected, why neglect is acceptable in this operating window, and what early warning indicator should trigger model revision.\r
\r
When this interpretation habit is trained across typical examples, transfer becomes strong: learners can move from roads to loops to orbital contexts without losing causal discipline.\r
\r
## Order of magnitude\r
\r
Useful sanity ranges:\r
\r
**[[m]]**: 0.01 - 10000 kg\r
\r
**[[r]]**: 0.1 - 10000000 m\r
\r
**[[v]]**: 0.1 - 10000 m/s\r
\r
**[[ac]]**: 0.01 - 100000 m/s^2\r
\r
**[[Frad]]**: 0.01 - 100000 N\r
\r
**[[Fc]]**: 0.01 - 100000 N\r
\r
**[[Tn]]**: 0 - 10000 N\r
\r
**[[Nn]]**: 0 - 100000 N\r
\r
**[[fs]]**: 0 - 50000 N\r
\r
**[[mu]]**: 0.1 - 1.2\r
\r
**[[g]]**: 9.8 m/s^2\r
\r
**[[th]]**: 0 - 1.0 rad\r
\r
**[[G]]**: 6.674e-11\r
\r
**[[M]]**: 1e20 - 2e30 kg\r
\r
## Personalized resolution method\r
\r
1. Classify the typical example and identify expected radial provider.\r
2. Define axes and state assumptions explicitly.\r
3. Compute radial demand from the base relation.\r
4. Apply the subcase-specific relation.\r
5. Validate dimensions, scale, and margin.\r
6. Close with causal interpretation and operational implication.\r
\r
## Special cases and extended example\r
\r
**Case 1:** string setup near tensile limit.\r
\r
**Case 2:** flat curve under dry-to-wet adherence transition.\r
\r
**Case 3:** loop motion close to contact-loss threshold.\r
\r
**Case 4:** orbital radius change requiring velocity retuning.\r
\r
The extended example integrates these patterns to train transfer across contexts.\r
\r
## Real student questions\r
\r
**Why do equations look different if the mechanism is the same?**\r
Because each equation isolates a different dominant radial source under different assumptions.\r
\r
**When is it useful to talk about [[Fc]]?**\r
When it is interpreted as required radial magnitude, not as an extra force actor.\r
\r
**Which variable is most critical on roads?**\r
On flat curves, speed and adherence; on banked curves, speed compatibility with [[th]].\r
\r
**Why include orbital motion in a typical-examples leaf?**\r
Because it proves scale transfer of the same radial logic.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf links introductory dynamics with road safety, mechanical-loop validation, and basic orbital mechanics. It also prepares transition to transient and nonlinear models when simple assumptions stop being sufficient.\r
\r
A recommended learning path is: string and flat-curve causality first, then banking and loop thresholds, then orbital transfer.\r
\r
A practical study progression is to alternate between “same structure, new provider” and “same provider, new constraint.” For example, compare flat curves and banking to see how geometry redistributes support, then compare loop and orbit to see how threshold thinking scales from ride safety to space operations.\r
\r
Another effective path is reverse diagnosis. Start from a reported failure mode, infer which radial provider likely lost margin, and then reconstruct the minimal model needed to explain that failure. This trains model selection skills faster than forward substitution alone.\r
\r
For team learning, use shared templates: scenario declaration, radial provider statement, validity conditions, sensitivity comment, and intervention priority. With this format, different domains can review each other using one causal language.\r
\r
## Final synthesis\r
\r
The value of typical examples is not equation accumulation. It is causal unification across contexts. Once you can identify radial provider, physical limits, and operational margin in each case, you move from procedural problem-solving to physically justified decision-making.\r
\r
That final shift is the real learning objective of this leaf. A student who reaches it can justify not only a value, but also the confidence level of that value and the next action if context changes. This is the bridge from textbook mechanics to responsible physical reasoning in practice.\r
`;export{e as default};
