const e=`# Common errors: definition of moment of inertia\r
\r
## Conceptual errors\r
\r
### Error 1: Treating I as a property of the object rather than of the object-axis pair\r
\r
**Why it seems correct:**  \r
Mass is a property of the object, so it is tempting to think rotational inertia should work the same way.\r
\r
**Why it is incorrect:**  \r
I depends on the axis because all radial distances change when the axis changes.\r
\r
**Detection signal:**  \r
The student writes "the moment of inertia of the body is..." without declaring the axis.\r
\r
**Conceptual correction:**  \r
Always state "moment of inertia of the body about the axis..." before starting the calculation.\r
\r
**Mini contrast example:**  \r
A rod rotates much more easily about its own long axis than about a transverse axis through its center. Same mass, different axis, different I.\r
\r
### Error 2: Assuming that only total mass matters\r
\r
**Why it seems correct:**  \r
Two bodies with the same total mass look equally heavy, so they seem likely to respond equally to the same torque.\r
\r
**Why it is incorrect:**  \r
The discrete and continuous definitions weight distance to the axis with r^2. Geometry is decisive.\r
\r
**Detection signal:**  \r
The student claims that a disk and a ring with the same mass and outer radius have the same moment of inertia.\r
\r
**Conceptual correction:**  \r
Compare mass distribution relative to the axis before comparing values of I.\r
\r
**Mini contrast example:**  \r
A ring concentrates mass at the rim and therefore has larger I than a solid disk of the same mass and outer radius.\r
\r
## Model errors\r
\r
### Error 3: Using the discrete definition when the problem requires a continuous distribution\r
\r
**Why it seems correct:**  \r
Replacing a body with a few masses may appear faster than integrating.\r
\r
**Why it is incorrect:**  \r
If geometry is the real driver of the result, a poor discretization can erase the role of [[dm]], [[rho]], and the actual body shape.\r
\r
**Detection signal:**  \r
The result depends more on the arbitrary number of chosen points than on the real geometry.\r
\r
**Conceptual correction:**  \r
Move to\r
\r
{{f:definicion_continua}}\r
\r
when continuous density and geometry are part of the problem itself.\r
\r
**Mini contrast example:**  \r
A uniform disk should not be modeled by a single point mass at the rim. That overestimates its inertia.\r
\r
### Error 4: Assuming that I stays constant while mass redistributes\r
\r
**Why it seems correct:**  \r
If the body does not gain or lose mass, it seems natural to keep the same value of I.\r
\r
**Why it is incorrect:**  \r
I changes whenever distances to the axis change, even if total mass stays the same.\r
\r
**Detection signal:**  \r
The student analyzes a skater or a deployable system while keeping the same I throughout the motion.\r
\r
**Conceptual correction:**  \r
Recognize that the leaf defines I for a specific distribution. If that distribution changes, I must be recalculated.\r
\r
**Mini contrast example:**  \r
When a skater pulls in the arms, the average distance to the axis decreases and so does I.\r
\r
## Mathematical errors\r
\r
### Error 5: Forgetting the square of the distance\r
\r
**Why it seems correct:**  \r
The linear expression\r
\r
{{f:definicion_discreta}}\r
\r
sounds intuitive as "mass times distance".\r
\r
**Why it is incorrect:**  \r
The correct definition is quadratic. Without the square, both the physics and the units are wrong.\r
\r
**Detection signal:**  \r
The result comes out in kg*m instead of kg*m^2.\r
\r
**Conceptual correction:**  \r
Check that each contribution has the form [[m_i]] times [[r_i]] squared or [[r]] squared times [[dm]].\r
\r
**Mini contrast example:**  \r
Doubling r must quadruple the contribution to I. If it only doubles it, the wrong formula has been used.\r
\r
### Error 6: Confusing geometric radius with radius of gyration\r
\r
**Why it seems correct:**  \r
Both have units of length and both are described with radial language.\r
\r
**Why it is incorrect:**  \r
k is not the visible size of the object but an equivalent distance defined through\r
\r
{{f:radio_giro}}\r
\r
.\r
\r
**Detection signal:**  \r
The student assumes without justification that\r
\r
{{f:definicion_continua}}\r
\r
for any body.\r
\r
**Conceptual correction:**  \r
Compute k from I and m, or read it as an equivalent radius rather than a real one.\r
\r
**Mini contrast example:**  \r
For a solid disk,\r
\r
{{f:definicion_continua}}\r
\r
. For a thin ring,\r
\r
{{f:definicion_continua}}\r
\r
.\r
\r
## Interpretation errors\r
\r
### Error 7: Reading a large I as if it were always "better"\r
\r
**Why it seems correct:**  \r
In many technical contexts, a large value of I is associated with stability or robustness, so it is tempting to treat it as a universal advantage.\r
\r
**Why it is incorrect:**  \r
A large [[I]] means two things at once: angular speed is harder to change, and more rotational energy is stored at the same [[omega]]. The correct reading depends on the actual physical goal.\r
\r
**Detection signal:**  \r
The student concludes that "larger I is better" without distinguishing between fast response and energy storage.\r
\r
**Conceptual correction:**  \r
Interpret I together with the question being asked: acceleration, stability, dynamic filtering, or energy capacity.\r
\r
**Mini contrast example:**  \r
A flywheel benefits from large I, but a tool that must start quickly may require a smaller one.\r
\r
## Quick self-control rule\r
\r
Before closing any moment-of-inertia calculation, apply this protocol:\r
\r
1. Declare the axis.\r
2. Decide whether the model is discrete or continuous.\r
3. Check that every distance is perpendicular to the axis.\r
4. Review units: I must be in kg*m^2.\r
5. Ask whether the chosen mass distribution really represents the system.`;export{e as default};
