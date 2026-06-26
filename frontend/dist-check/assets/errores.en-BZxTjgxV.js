const e=`## Conceptual errors

### Error 1: Confusing propagation speed with transverse velocity

**Why it seems correct**

In a simulation or real string, a point moves up and down while the pulse advances. It is natural to call the visible point motion "the speed of the string".

**Why it is incorrect**

[[v]] measures how fast the shape of the disturbance advances along the string. The transverse velocity of a point describes another motion: how fast that point moves up or down. They are distinct readings.

**Detection signal**

The student says that a larger amplitude automatically implies a larger [[v]], because points appear to move faster.

**Conceptual correction**

Propagation speed belongs to the medium and is controlled by [[T]] and [[mu]]. Amplitude affects local motion and may break the model if it is large, but it is not the primary cause of [[v]] in the linear regime.

**Mini-example**

Two small and large pulses on the same taut string may cross a table in similar times if amplitude remains small. The visible height changes, not the ideal propagation speed.

## Model errors

### Error 2: Thinking source frequency decides speed

**Why it seems correct**

In many wave relations, [[v]], [[f]], and [[lambda]] appear together. If [[f]] is increased, it may seem reasonable to expect the wave to travel faster.

**Why it is incorrect**

In an ideal uniform string, the medium decides speed. If [[T]] and [[mu]] do not change, varying [[f]] modifies the associated wavelength. The source sets rhythm; the string sets speed.

**Detection signal**

The student claims that shaking the string at twice the frequency doubles [[v]] even though tension and string are unchanged.

**Conceptual correction**

First compute or measure [[v]] from the medium. Then relate [[f]] and [[lambda]] to that speed.

**Mini-example**

A string kept at the same tension is excited at 10 Hz and then at 20 Hz. The ideal speed is conserved; the spatial separation between crests is reduced in the second excitation.

## Mathematical errors

### Error 3: Using grams per meter as kilograms per meter

**Why it seems correct**

Manufacturers and labs often give linear mass in g/m. The number looks small and is entered directly into a calculator.

**Why it is incorrect**

The mechanical formula uses SI units. [[mu]] must be expressed in kg/m so that [[T]] in newtons produces [[v]] in m/s. Not converting changes the result by a large factor.

**Detection signal**

The resulting [[v]] is far too small for a taut string or does not match observable travel times.

**Conceptual correction**

Before computing, convert grams per meter to kilograms per meter. The dimensional check must end in \`[L T⁻¹]\`.

**Mini-example**

A string with linear mass 2 g/m must be entered as 0.002 kg/m. Using 2 kg/m describes a string thousands of times more inertial.

## Interpretation errors

### Error 4: Believing string length fixes local speed

**Why it seems correct**

In standing waves, length [[L]] appears in the allowed frequencies. That makes it tempting to think [[L]] also directly causes propagation speed.

**Why it is incorrect**

In an ideal uniform string, [[L]] does not decide local speed. Length decides which patterns fit between endpoints; [[T]] and [[mu]] decide how fast the disturbance travels.

**Detection signal**

The student changes [[L]] in a traveling-pulse problem and expects [[v]] to change although tension and linear density remain the same.

**Conceptual correction**

Separate local propagation from boundary condition. First interpret [[v]] as a mechanical property; then use [[L]] if the problem asks for resonance or modes.

**Mini-example**

Two segments of the same string, with the same tension and linear density, transmit a pulse with the same ideal speed even if one is longer. The total travel time changes.

## Quick self-control rule

Before accepting a result, check three things: [[T]] in newtons, [[mu]] in kg/m, and positive [[v]]. If the problem mentions frequency, ask whether it is being used to find [[lambda]] or whether it has been confused with the mechanical cause of speed.
`;export{e as default};
