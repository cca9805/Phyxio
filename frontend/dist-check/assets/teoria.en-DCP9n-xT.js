const e=`# Parallel-Axis Theorem\r
\r
## Conceptual context\r
\r
The Parallel-Axis Theorem describes a change of reference, not a new geometry of the body. The leaf asks a precise question: how to obtain the moment of inertia [[I]] about a real working axis when the value about the parallel axis through the center of mass [[m]] is already known. The topic is therefore not about memorizing standard shapes, but about recognizing when the physical axis of the problem is displaced.\r
\r
That distinction matters because many real systems do not rotate about their centers of mass. A door rotates about its hinges, a physical pendulum about its suspension point, and a supported rod about an end. In all of those cases the body is unchanged, but the axis is not. This leaf teaches how to translate that axis change into an inertia change.\r
\r
It also helps separate two layers that students often mix. One layer is the body's own inertia, summarized by [[Icm]]. The second layer is the geometric effect of placing the axis somewhere else. If those layers are not kept apart, Steiner looks like an isolated trick. If they are separated, the theorem becomes what it really is: a bridge between a reference value and the value that actually enters rotational dynamics.\r
\r
## 🟢 Essential level\r
\r
The basic intuition is simple: moving the axis away from the center of mass makes rotation harder. One does not need symbols to feel this. If a rod is held at its center, starting it in rotation is easier than when it is held at one end. The mass is the same, but with the new axis a larger portion of the body lies farther from the line of rotation and offers greater resistance to angular acceleration [[alpha]].\r
\r
The important idea at this level is that the body has not changed internally. No new mass has appeared and the shape is the same. Only the place from which the system is forced to rotate has changed. That is why this leaf does not answer "what moment of inertia does this piece have" in the abstract, but "how much larger does that moment become when the axis is shifted". The focus is the increase, not the catalog.\r
\r
It is also useful to fix one physical rule early: for a given direction, the axis through the center of mass gives the minimum value within the family of parallel axes. Any displaced parallel axis gives a larger or equal inertia. This fact works as a consistency test. If the final calculation is smaller than the central value, the issue is not rounding but a misuse of the leaf's core idea.\r
\r
Another key habit is learning to read the correct sketch. The decisive datum is not the distance from some random point to the axis, but the existence of two parallel axes: the central reference axis and the real working axis. The theorem compares those two axes. Once the student can narrate the situation in those terms, the later formalism stops feeling arbitrary.\r
\r
## 🔵 Formal level\r
\r
The central relation of the leaf is the Steiner formula:\r
\r
{{f:steiner-directa}}\r
\r
Its physical reading is straightforward. [[I]] is the moment of inertia about the displaced axis. [[Icm]] is the moment of inertia about the parallel axis through the center of mass. [[m]] is the total mass of the body. [[d]] is the perpendicular distance between the two axes. The expression shows that the final inertia contains one contribution from the body itself and one purely geometric correction.\r
\r
That point is worth stressing: the term [[m]] [[d]]^2 contains no fine information about shape. All intrinsic geometric information is already packed into [[Icm]]. The added term only reflects axis location. This is precisely why Steiner is so useful: once the central value is known, moving to a parallel axis becomes immediate.\r
\r
In dynamic problems, the theorem is often combined with the rotational relation:\r
\r
{{f:respuesta-rotacional}}\r
\r
The right hierarchy is to determine the correct inertia for the real axis first and only then insert it into the dynamic equation. A common mistake is to compute torque [[tau]] correctly and then use an inertia referred to the wrong axis. The algebra may look fine while the physics is not.\r
\r
The sign of the correction also guides interpretation. Since mass is positive and the squared distance cannot be negative, the added term never subtracts. If a result smaller than [[Icm]] appears, the error is usually in axis selection, in the measurement of [[d]], or in the misuse of the inverse form.\r
\r
## 🔴 Structural level\r
\r
The decisive hypothesis of the theorem is geometric: the axes must be parallel. If the axis orientation changes, Steiner is no longer the correct tool. One must then return to direct integration or move to the inertia tensor. This conceptual boundary matters because many student errors come from treating [[m]] [[d]]^2 as if it worked for any axis change.\r
\r
It is equally necessary that [[Icm]] correspond to an axis with the same direction as the target axis. Knowing "some moment of inertia of the body" is not enough. It must be the central value of the correct family of parallel axes. For a rod, for example, one cannot translate a moment about a longitudinal axis to obtain one about a transverse axis. That is no longer a change of position; it is a different physical rotation.\r
\r
Another structural condition is that the mass distribution remain fixed during the analysis. If the body deforms, exchanges mass, or contains parts that significantly rearrange, the separation between "intrinsic inertia" and "shift correction" is no longer valid or at least no longer sufficient. The leaf works cleanly because the body can be treated as rigid.\r
\r
Seen this way, the topic teaches more than a formula. It teaches how to separate what belongs to the body from what belongs to axis choice. If the base value is missing, one goes back to standard reference moments or to an integral. If orientations change, one moves toward the inertia tensor. If the correct axis has already been identified and motion must be studied, the route continues toward the corresponding rotational law. Steiner occupies a very clear intermediate role in the map.\r
\r
## Deep physical interpretation\r
\r
The deeper reading of the theorem is to see [[m]] [[d]]^2 as a geometric penalty for forcing the body to rotate about an axis that does not coincide with its central equivalent axis. The body does not gain extra mass or a new shape, yet its mechanical response changes because more of its mass now lies away from the effective rotation line. That additional separation is exactly what the theorem quantifies.\r
\r
This idea matches experience. A heavy door is difficult to start not only because of its total mass, but because much of that mass lies far from the hinges. A rod held at one end feels sluggish in rotational start-up because the real axis is displaced from the center of mass. The theorem turns that intuition into a quantitative law.\r
\r
It also offers design insight. If fast angular response is desired, the real axis should be brought closer to the center of mass or mass should be moved closer to the axis. If greater resistance to angular changes is desired, a more distant axis can help. The leaf therefore does more than solve textbook problems: it translates geometric choices into dynamic consequences.\r
\r
## Order of magnitude\r
\r
A useful check is to compare [[Icm]] with [[m]] [[d]]^2. If [[m]] [[d]]^2 is small relative to [[Icm]], the axis shift barely changes the inertia. If both terms are comparable, the correction is physically important and should not be treated as a minor detail. If [[m]] [[d]]^2 dominates, axis location matters more than the fine details of shape.\r
\r
This prior reading helps catch absurd answers. For a compact object with a tiny axis displacement, expecting a huge change would be suspicious. For a long rod supported at one end, it is natural for the geometric term to carry strong weight. Order-of-magnitude thinking protects against unit mistakes and against accepting any algebraic result too quickly.\r
\r
## Personalized resolution method\r
\r
A reliable workflow for this leaf can be summarized in five steps:\r
\r
1. Identify the real rotation axis and its direction.\r
2. Find the corresponding [[Icm]] for the parallel axis through the center of mass.\r
3. Measure the perpendicular distance [[d]] between the two axes.\r
4. Apply the Steiner relation with consistent units.\r
5. Check that the result satisfies [[I]] >= [[Icm]] and fits the physical scene.\r
\r
The most common trap sits between steps 2 and 3. Students often use a [[Icm]] from a different orientation or measure [[d]] from a point on the body rather than between axes. That is why a geometric sketch is worth more than a fast symbolic manipulation. In this leaf, a correct drawing saves more errors than a clever algebraic shortcut.\r
\r
## Special cases and extended example\r
\r
The classic example is a uniform rod of length L. For an axis perpendicular to the rod and passing through the center of mass, the central inertia is known. If the real axis is parallel and passes through one end, the distance between axes [[d]] is half the rod length. Applying the Steiner relation gives a larger inertia about the end than about the center.\r
\r
The significance of the example is not only the numerical result, but why it appears. The rod is unchanged and the increase comes solely from moving the axis by half the rod length from the center to the end.\r
\r
Two limiting cases are especially instructive. If [[d]] tends to zero, the result returns to [[Icm]], as it must. If [[d]] is much larger than the body's characteristic size, the term [[m]] [[d]]^2 dominates and axis location matters more than fine shape details.\r
\r
## Real student questions\r
\r
**Why do I need [[Icm]] first?**  \r
Because Steiner does not build the moment of inertia from nothing; it transfers a known central value to another axis.\r
\r
**What distance should I measure exactly?**  \r
The perpendicular distance between the two parallel axes, not the distance from some arbitrary point on the body.\r
\r
**Can I use the theorem between non-parallel axes?**  \r
No. As soon as axis orientation changes, the mathematical tool has to change as well.\r
\r
## Cross-cutting connections and study paths\r
\r
This leaf relies on the definition of moment of inertia, because that topic explains why moving mass away from an axis increases resistance to rotation. It draws on standard reference moments, which usually provide the value of [[Icm]]. It borders on the inertia tensor, where a simple parallel translation is no longer enough. And it flows into the corresponding rotational law, where the corrected value of [[I]] enters the real dynamics of the system.\r
\r
The natural learning sequence is clear: first understand what moment of inertia measures, then learn reference values, then master Steiner as an axis-translation rule, and only after that insert the result into richer problems of torque, energy, or oscillation.\r
\r
## Final synthesis\r
\r
Mastering the Parallel-Axis Theorem means recognizing that the problem does not ask for a new body, but for a new axis. The core of the leaf is that the inertia about the center-of-mass axis is the privileged reference and that shifting the axis adds a universal geometric correction.\r
\r
The Steiner relation expresses that idea economically: one part belongs to the body and the other belongs to the place from which rotation is imposed. Once that separation is understood, Steiner stops being a memory trick and becomes a physical criterion for reading real rotational systems.`;export{e as default};
