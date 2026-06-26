# Common errors: definition of moment of inertia

## Conceptual errors

### Error 1: Treating I as a property of the object rather than of the object-axis pair

**Why it seems correct:**  
Mass is a property of the object, so it is tempting to think rotational inertia should work the same way.

**Why it is incorrect:**  
I depends on the axis because all radial distances change when the axis changes.

**Detection signal:**  
The student writes "the moment of inertia of the body is..." without declaring the axis.

**Conceptual correction:**  
Always state "moment of inertia of the body about the axis..." before starting the calculation.

**Mini contrast example:**  
A rod rotates much more easily about its own long axis than about a transverse axis through its center. Same mass, different axis, different I.

### Error 2: Assuming that only total mass matters

**Why it seems correct:**  
Two bodies with the same total mass look equally heavy, so they seem likely to respond equally to the same torque.

**Why it is incorrect:**  
The discrete and continuous definitions weight distance to the axis with r^2. Geometry is decisive.

**Detection signal:**  
The student claims that a disk and a ring with the same mass and outer radius have the same moment of inertia.

**Conceptual correction:**  
Compare mass distribution relative to the axis before comparing values of I.

**Mini contrast example:**  
A ring concentrates mass at the rim and therefore has larger I than a solid disk of the same mass and outer radius.

## Model errors

### Error 3: Using the discrete definition when the problem requires a continuous distribution

**Why it seems correct:**  
Replacing a body with a few masses may appear faster than integrating.

**Why it is incorrect:**  
If geometry is the real driver of the result, a poor discretization can erase the role of [[dm]], [[rho]], and the actual body shape.

**Detection signal:**  
The result depends more on the arbitrary number of chosen points than on the real geometry.

**Conceptual correction:**  
Move to

{{f:definicion_continua}}

when continuous density and geometry are part of the problem itself.

**Mini contrast example:**  
A uniform disk should not be modeled by a single point mass at the rim. That overestimates its inertia.

### Error 4: Assuming that I stays constant while mass redistributes

**Why it seems correct:**  
If the body does not gain or lose mass, it seems natural to keep the same value of I.

**Why it is incorrect:**  
I changes whenever distances to the axis change, even if total mass stays the same.

**Detection signal:**  
The student analyzes a skater or a deployable system while keeping the same I throughout the motion.

**Conceptual correction:**  
Recognize that the leaf defines I for a specific distribution. If that distribution changes, I must be recalculated.

**Mini contrast example:**  
When a skater pulls in the arms, the average distance to the axis decreases and so does I.

## Mathematical errors

### Error 5: Forgetting the square of the distance

**Why it seems correct:**  
The linear expression

{{f:definicion_discreta}}

sounds intuitive as "mass times distance".

**Why it is incorrect:**  
The correct definition is quadratic. Without the square, both the physics and the units are wrong.

**Detection signal:**  
The result comes out in kg*m instead of kg*m^2.

**Conceptual correction:**  
Check that each contribution has the form [[m_i]] times [[r_i]] squared or [[r]] squared times [[dm]].

**Mini contrast example:**  
Doubling r must quadruple the contribution to I. If it only doubles it, the wrong formula has been used.

### Error 6: Confusing geometric radius with radius of gyration

**Why it seems correct:**  
Both have units of length and both are described with radial language.

**Why it is incorrect:**  
k is not the visible size of the object but an equivalent distance defined through

{{f:radio_giro}}

.

**Detection signal:**  
The student assumes without justification that

{{f:definicion_continua}}

for any body.

**Conceptual correction:**  
Compute k from I and m, or read it as an equivalent radius rather than a real one.

**Mini contrast example:**  
For a solid disk,

{{f:definicion_continua}}

. For a thin ring,

{{f:definicion_continua}}

.

## Interpretation errors

### Error 7: Reading a large I as if it were always "better"

**Why it seems correct:**  
In many technical contexts, a large value of I is associated with stability or robustness, so it is tempting to treat it as a universal advantage.

**Why it is incorrect:**  
A large [[I]] means two things at once: angular speed is harder to change, and more rotational energy is stored at the same [[omega]]. The correct reading depends on the actual physical goal.

**Detection signal:**  
The student concludes that "larger I is better" without distinguishing between fast response and energy storage.

**Conceptual correction:**  
Interpret I together with the question being asked: acceleration, stability, dynamic filtering, or energy capacity.

**Mini contrast example:**  
A flywheel benefits from large I, but a tool that must start quickly may require a smaller one.

## Quick self-control rule

Before closing any moment-of-inertia calculation, apply this protocol:

1. Declare the axis.
2. Decide whether the model is discrete or continuous.
3. Check that every distance is perpendicular to the axis.
4. Review units: I must be in kg*m^2.
5. Ask whether the chosen mass distribution really represents the system.