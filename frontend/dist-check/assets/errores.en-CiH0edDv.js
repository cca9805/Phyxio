const e=`# Common errors: no-slip condition\r
\r
## Conceptual errors\r
\r
### Error 1: Believing that every wheel automatically satisfies the ideal constraint\r
\r
**Why it looks correct:**  \r
In daily life almost every wheel spins and advances together, so it feels natural to think that compatibility between those motions is automatic.\r
\r
**Why it is incorrect:**  \r
The ideal constraint is not guaranteed by circular shape alone. It is a contact condition. If the wheel skids or spins out, the residual stops vanishing and the ideal model no longer describes the real regime.\r
\r
**Detection sign:**  \r
The student writes the main equality before checking the data or before asking whether adherence is sufficient.\r
\r
**Conceptual fix:**  \r
Diagnose contact first through [[v_contacto]] or [[delta]], and only then decide whether the constraint may be imposed.\r
\r
**Mini-contrast example:**  \r
A wheel with radius 0.25 m and angular speed 8 rad/s would require a linear speed of 2.0 m/s in pure rolling. If the measured speed is 2.6 m/s, ideal compatibility cannot be assumed.\r
\r
### Error 2: Thinking that no slip means no friction\r
\r
**Why it looks correct:**  \r
Since the support point is instantaneously at rest with respect to the ground, zero velocity is confused with zero force.\r
\r
**Why it is incorrect:**  \r
Static friction may be non-zero even when there is no relative sliding. That force may be necessary to coordinate translation and rotation.\r
\r
**Detection sign:**  \r
The force diagram removes friction on a slope or on a driven wheel simply because “it does not slip”.\r
\r
**Conceptual fix:**  \r
Separate “contact without dragging” from “absence of tangential interaction”.\r
\r
**Mini-contrast example:**  \r
On a slope, a wheel may keep the support point at rest and still require static friction to coordinate its descent and spin.\r
\r
## Model errors\r
\r
### Error 3: Keeping the ideal model after adherence has already failed\r
\r
**Why it looks correct:**  \r
The ideal constraint simplifies the problem so much that students are tempted to keep it even when measurements become incompatible.\r
\r
**Why it is incorrect:**  \r
If the contact residual stops being small, if kinetic friction appears, or if the measurements no longer fit the ideal prediction, the regime has changed and another model is needed.\r
\r
**Detection sign:**  \r
There is appreciable [[delta]] or traveled distance becomes incompatible with wheel turns, yet the same constraint is still used as if nothing had changed.\r
\r
**Conceptual fix:**  \r
Switch to a slipping model as soon as the contact diagnosis demands it.\r
\r
**Mini-contrast example:**  \r
During braking, a sensor reports\r
\r
{{f:velocidad_contacto}}\r
\r
steadily. Keeping the ideal model will hide the onset of wheel lock-up.\r
\r
## Mathematical errors\r
\r
### Error 4: Plugging rpm directly as if they were radians per second\r
\r
**Why it looks correct:**  \r
The student takes the tachometer number and inserts it straight into the equation.\r
\r
**Why it is incorrect:**  \r
The formula requires [[omega]] in rad/s. Using rpm without conversion introduces a large scale error that distorts the whole physical reading.\r
\r
**Detection sign:**  \r
The resulting linear speed is absurdly large or absurdly small for the wheel radius.\r
\r
**Conceptual fix:**  \r
Always convert rpm into angular speed before using the constraint.\r
\r
**Mini-contrast example:**  \r
A wheel at \`300 rpm\` does not have\r
\r
{{f:velocidad_contacto}}\r
\r
, but about \`31.4 rad/s\`. That difference completely changes the predicted \`v\`.\r
\r
### Error 5: Ignoring the sign of the residual\r
\r
**Why it looks correct:**  \r
Any non-zero residual is treated as a generic “failure”, and the sign is dismissed as irrelevant.\r
\r
**Why it is incorrect:**  \r
The sign determines the nature of the failure. A positive residual means skidding. A negative residual means spin-out. Losing that information destroys the physical diagnosis.\r
\r
**Detection sign:**  \r
The student detects non-ideal rolling but cannot tell in which sense the contact is dragging.\r
\r
**Conceptual fix:**  \r
Always interpret the residual with the sign convention declared at the beginning.\r
\r
**Mini-contrast example:**  \r
If linear speed is 5 m/s and the advance associated with rotation is 4.5 m/s, the residual is positive and there is skidding. If the rotational advance is 5.5 m/s, the residual is negative and there is spin-out.\r
\r
## Interpretation errors\r
\r
### Error 6: Confusing center speed with contact speed\r
\r
**Why it looks correct:**  \r
Both points belong to the same wheel, which encourages the idea that they share the same speed.\r
\r
**Why it is incorrect:**  \r
Different points of a rigid body may have different velocities. In pure rolling, the center advances with \`v\`, while the bottom point has zero speed relative to the ground.\r
\r
**Detection sign:**  \r
The student says that “the whole wheel moves with speed \`v\`”.\r
\r
**Conceptual fix:**  \r
Distinguish center speed, rim speed, and support-point speed.\r
\r
**Mini-contrast example:**  \r
In pure rolling, the center may move at \`4 m/s\`, the contact point may be at rest relative to the ground, and the top point may reach about \`8 m/s\`.\r
\r
## Quick self-control rule\r
\r
Before closing the problem, check four things: [[omega]] is expressed in rad/s, the geometric input is the radius and not the diameter, the contact residual has been computed explicitly, and its sign has a physical interpretation. If one of these four pieces is missing, rolling has not really been validated.`;export{e as default};
