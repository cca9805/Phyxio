# Screw - Common Errors

The study of the screw as a simple machine presents specific challenges related to the conversion of circular to linear motion and the critical influence of friction. Below are analyzed the most recurring failures detected in the resolution of technical and academic problems.

## Conceptual Errors

### Error 1: Confusing the lever arm radius with the screw radius

**Why it seems correct:**
The student sees the screw as the central object and assumes that its physical dimensions (its radius or diameter) must be those that determine the mechanical advantage, as happens in other mechanical components.

**Why it is incorrect:**
The radius [[r]] that appears in the mechanical advantage and torque formulas is the distance from the rotation axis to the point where the input force [[F]] is applied. In a screw jack, this is the radius of the crank or lever. Using the radius of the screw cylinder massively undervalues the mechanical advantage, obtaining an unrealistically high required effort.

**Detection signal:**
The calculation indicates that an enormous force (almost equal to the load) is needed to move the screw, invalidating its purpose as a simple machine.

**Conceptual correction:**
Always identify the real lever arm. If there is a wrench or crank, that is your radius [[r]]. The screw radius is only relevant for material strength calculations, not for the system's mechanical advantage.

**Contrast mini-example:**
A student uses the screw radius of **1 cm** instead of the lever of **25 cm**. They obtain that they need **400 N** to lift a small load, when in reality **16 N** would be enough.

## Model Errors

### Error 2: Assuming ideal behavior by default

**Why it seems correct:**
In most initial physics topics (pulleys, levers), one usually works with ideal systems to simplify learning. The student carries this habit over to the screw by inertia.

**Why it is incorrect:**
In the screw, friction is not a "small loss," but a structural component. The efficiency [[eta]] is usually below **50%**. Ignoring friction leads to underestimating the required effort by a factor of 2 or more, which is dangerous in real-world loading applications.

**Detection signal:**
The calculated force is suspiciously low or the system seems too efficient to be a dry thread mechanism.

**Conceptual correction:**
Always check if the problem mentions efficiency. If not, look for terms like "real power screw" or "friction coefficient." In the real world, the ideal screw almost doesn't exist.

**Contrast mini-example:**
An engineer calculates that a **10 W** motor can move a press assuming an ideal system. When built, the motor burns out because friction consumes **60%** of the energy and the motor does not have enough torque.

## Mathematical Errors

### Error 3: Critical unit inconsistency between pitch and radius

**Why it seems correct:**
Technical catalogs express the thread pitch [[p]] in millimeters (e.g., **4 mm**) and the lever arm [[r]] in centimeters or meters (e.g., **25 cm**). The student injects the numbers directly into the formula without thinking about the scale.

**Why it is incorrect:**
The force formula requires all distances to be in the same unit (preferably meters, SI). Introducing a pitch in millimeters without converting it to meters produces an error of a factor of 1000 in the final result.

**Detection signal:**
The result for the force [[F]] comes out in the order of kilo-Newtons for a load that should move by hand, or vice versa.

**Conceptual correction:**
Convert all data to meters before performing any operation: 1 millimeter is equivalent to 0.001 meters.

**Contrast mini-example:**
When calculating torque, a student obtains **1500 N·m** (the torque of a truck) for a small bench screw, simply by not having converted the **2 mm** pitch to meters.

## Interpretation Errors

### Error 4: Ignoring self-locking and safety conditions

**Why it seems correct:**
There is a tendency to think that if a force can raise a load, the load will fall by itself if the force is removed, as happens in a simple pulley.

**Why it is incorrect:**
Most load screws are "self-locking": friction is so high that it prevents the load from backing up by itself. Confusing this can lead to design errors where unnecessary brakes are installed or a backup movement is assumed that will never occur.

**Detection signal:**
The student attempts to calculate a "fall acceleration" for a car held by a screw jack.

**Conceptual correction:**
Check the helix angle against the friction coefficient. If the efficiency is low (less than **50%**), the system is probably self-locking.

**Contrast mini-example:**
A manual lift design is discarded for "fear of falling" if the crank is released, without understanding that the screw's own inefficiency acts as the most reliable safety device in the world.

## Quick Self-Control Rule

Before submitting a result, perform this mental check:

1. **Magnitude**: Is the force [[F]] significantly smaller than the load [[R]]? If not, the machine is not helping.
2. **Units**: Have you converted the pitch [[p]] from millimeters to meters?
3. **Realism**: Can a human apply that force? (Typical limit: **150-200 N**).
4. **Friction**: Have you included the [[eta]] factor? Remember that real effort is always greater than ideal effort.
