const e=`# Relative velocity\r
\r
## Conceptual context\r
\r
A standard scene for relative velocity appears when the speed and direction of one body are compared as seen by another observer who may also be moving. The first task is not to push numbers around, but to decide which system, axes, and clock make every datum comparable. The organizing feature of the leaf is that relative velocity is obtained by vector subtraction between the object velocity and the observer velocity inside one base frame. That reading prevents the learner from mixing quantities that answer different physical questions.\r
\r
Seen that way, the equations become operational instead of decorative. The learner is no longer chasing an isolated formula, but a structure: what stays fixed, what changes with time, and which magnitude actually closes the problem. That is why this leaf works as a bridge between geometric intuition and quantitative modelling in kinematics.\r
\r
## 🟢 Essential level
\r
A useful intuition starts from a concrete picture: two cars moving side by side on a highway can be very fast relative to the road and still look almost at rest to each other. When that scene is read carefully, one notices that relative velocity is obtained by vector subtraction between the object velocity and the observer velocity inside one base frame. That is the short rule worth remembering before writing any algebra.\r
\r
In practice, the essential level is mastered when one can anticipate which variable must be compared, which sign should appear, and which conceptual mistake is most likely. If the qualitative forecast is already wrong, later algebra will only hide the mistake. This level therefore demands that the mechanism be stated in plain language before it is translated into symbols.\r
\r
## 🔵 Formal level
\r
In this leaf, the core magnitudes are [[v_rel]] , [[v_abs]] , and [[v_frame]] . The relation \`definicion_vel_rel\` defines how motion is compared between observers, \`composicion_velocidades\` reconstructs the absolute reading from the moving frame, \`inversion_relativa\` reverses the observer, and \`despeje_v_frame\` isolates the frame motion when that is the unknown quantity.\r
\r
The mathematical layer organizes that intuition through relations that answer different questions. A first equation controls the basic evolution of the system and a second one closes the condition that truly determines the desired result.\r
\r
{{f:definicion_vel_rel}}\r
\r
{{f:composicion_velocidades}}\r
\r
{{f:inversion_relativa}}\r
\r
{{f:despeje_v_frame}}\r
\r
These expressions do not compete with each other; they divide the labour. The first tells you how each magnitude evolves in time or with the chosen geometry, while the second connects that evolution with the matching, reference, or compatibility condition specific to the leaf. Working formally here means choosing an equation for its physical role, not because it merely resembles a familiar exercise.\r
\r
## 🔴 Structural level
\r
The model remains readable only while its hypotheses are respected: all velocities must be expressed with respect to the same reference observer before they are added or subtracted component by component. Under those conditions the result has a clear architecture and every parameter can be interpreted without ambiguity.\r
\r
The structure begins to fail when a scalar magnitude is subtracted when the problem requires directions, or components expressed in different axes are mixed. At that point a clean substitution is no longer enough and the model itself must be revised before continuing. Mature work here is not stubborn reuse of one formula, but timely recognition of which part of the scenario has changed and why the leaf is no longer answering exactly the same question.\r
\r
## Deep physical interpretation\r
\r
Beyond the calculation, relative velocity teaches how to read the relation between description and observer. The final number matters only if it recovers the mechanism that produced it: relative velocity does not tell how an object moves in an absolute sense, but how its position changes for one concrete observer. That demand for physical reading is what separates a reusable solution from a correct but mute computation.\r
\r
## Order of magnitude\r
\r
Reasonable scales depend on context, yet they should always be compared with recognizable scenes: boats in a river, aircraft in wind, passengers inside trains, and people walking on moving walkways, where the correct subtraction completely changes the reading. That quick comparison catches impossible signs, absurd times, and magnitudes incompatible with the actual scale of the phenomenon before the error hides behind tidy arithmetic.\r
\r
## Personalized resolution method\r
\r
A robust workflow for this leaf is to fix the frame first, write next the magnitudes that evolve, and reserve the closing condition for the end. In practice, it helps to 1) identify which datum governs the geometry, 2) separate given variables from control variables, 3) write the evolution relations before substituting numbers, and 4) close with a qualitative check. In this topic, the most common blockage appears when one forces an equality between quantities that do not answer the same physical question.\r
\r
## Special cases and extended example\r
\r
Limiting cases are especially instructive because they force a review of what remains of the model when one assumption is pushed to an extreme. In relative velocity, a revealing case is two bodies with the same speed and direction have zero relative velocity even if both are fast with respect to the ground. Studying it shows which part of the result comes from the common geometry of the problem and which part depends on one specific initial datum. A well-chosen extended example does not add difficulty through volume; it adds clarity about the true reach of the model.\r
\r
## Real student questions\r
\r
Real questions usually revolve around two confusions: "which quantity must be equated or compared?" and "what changes if another observer, another scale, or another initial condition enters the picture?". The operative answer for this leaf is that the base observer is chosen first and only then is it decided whether the comparison is one-dimensional or vectorial; without that step, the sign loses meaning. Once that idea is secure, many long computations collapse into one correct choice of variables and signs.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf naturally talks to other nodes in kinematics and to later dynamics. The reason is that it connects reference frames with meeting problems, two-dimensional motion, and any situation in which the observer is itself part of the model. That is why it should be linked to rectilinear motion, graph analysis, two-dimensional motion, or rotation depending on the case: not as a list of neighbours, but as a chain of models that reuse structure at increasing levels of complexity.\r
\r
## Final synthesis\r
\r
Mastering relative velocity means recognizing the physical scene, choosing the right observer, and using equations as a structured reading of the phenomenon. The idea worth carrying away is simple: relative velocity is not an extra speed; it is a well-defined comparison between two descriptions of the same motion. If that sentence can be defended without looking at notes, the leaf is no longer a bag of formulas but a modelling tool.\r
\r
A genuinely solid closure also requires being able to explain why the obtained answer would become unacceptable if one key hypothesis, one sign, or the chosen observer changed. That last review turns the solution into physical judgement rather than mere procedure. When a learner can perform that check without leaning on mechanical memory, the content stops being an isolated topic and becomes part of a consistent way of modelling phenomena.\r
\r
This final check also helps connect the leaf with real laboratory situations, basic engineering decisions, or graph-reading tasks. Once the result can be defended while changing data, rescaling units, and comparing it with one simple limiting case, it stops being an isolated exercise and starts functioning as a reusable intellectual tool. That transferability is precisely the sign that the theory was understood with physical judgement rather than procedural memory.\r
`;export{e as default};
