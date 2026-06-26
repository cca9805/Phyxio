const e=`# Common errors in constructive interference

## Conceptual errors

### Error 1: believing that any wave crossing reinforces

**Why it seems correct**

The visual intuition suggests that if two waves occupy the same place, their effects accumulate. It is an overgeneralization of ordinary addition: more waves seems to mean more intensity.

**Why it is incorrect**

Interference depends on relative phase, not only on spatial overlap. Two waves may cross without forming a maximum if [[delta_phi]] does not correspond to in-phase arrival or if [[Delta_r]] does not contain whole cycles of [[lambda]].

**Detection signal**

The student claims that there is a maximum without comparing paths, phases, or coherence.

**Conceptual correction**

A constructive maximum requires phase synchronization. The correct question is not whether the waves cross, but how they arrive.

**Contrast mini-example**

Two pulses can pass through the same point with one crest and one trough, and the local effect will not be reinforcement. Two coherent crests arriving together do produce an intense region.

## Model errors

### Error 2: applying the model to incoherent sources

**Why it seems correct**

The student recognizes two sources with similar frequency and uses an incomplete analogy with the double slit. It seems reasonable to look for fringes because there are two emitters.

**Why it is incorrect**

The constructive condition requires a stable phase relation. If phases fluctuate randomly during observation, the detector averages many states and the pattern disappears.

**Detection signal**

The statement mentions independent bulbs, unsynchronized noise, or sources without a common generator, but the solution predicts fixed maxima.

**Conceptual correction**

Before using [[m_orden]], verify that the sources are coherent. Without coherence there may be average intensity addition, but not stable constructive fringes.

**Contrast mini-example**

Two ordinary lamps illuminate a table without visible fringes. Two beams derived from the same laser can show maxima because they preserve relative phase.

### Error 3: confusing absolute distance with path difference

**Why it seems correct**

Drawings contain distance segments, and the student selects one of them. Confusing quantities makes it seem that being near one source is enough to explain the maximum.

**Why it is incorrect**

The relevant quantity is [[Delta_r]], a comparison between two paths. One isolated distance does not decide whether the waves arrive in phase.

**Detection signal**

The solution uses only distance to one slit or one speaker and never compares the two paths.

**Conceptual correction**

First calculate the difference between paths and compare it with [[lambda]]. Only that comparison can decide whether a constructive order [[m_orden]] exists.

**Contrast mini-example**

A listener may be close to one speaker and still not be at a maximum if the other path arrives out of phase. A farther point may sound louder if both paths arrive synchronized.

## Mathematical errors

### Error 4: adding intensities as if phase did not exist

**Why it seems correct**

In many problems, intensities from independent sources are added. That rule is incorrectly transferred to coherent waves.

**Why it is incorrect**

With coherence, resulting intensity depends on [[delta_phi]]. Disturbances are added first and [[I_resultante]] is obtained afterward. Therefore the maximum can exceed the simple sum of [[I1]] and [[I2]].

**Detection signal**

The solution ignores phase or path-difference data even though the problem provides them.

**Conceptual correction**

If coherence is present, use the interference relation. Direct addition of intensities only describes an incoherent or averaged reference.

**Contrast mini-example**

Two equal in-phase waves do not produce only twice the intensity of one wave. The ideal maximum reaches four times the individual reference because amplitude was doubled.

## Interpretation errors

### Error 5: interpreting the maximum as energy creation

**Why it seems correct**

The local maximum can be larger than each individual contribution and looks like a gain. The intuition focuses on one point and forgets the full pattern.

**Why it is incorrect**

Interference redistributes energy. Regions of high [[I_resultante]] are accompanied by regions of lower intensity. The global balance remains compatible with energy conservation.

**Detection signal**

The student describes the maximum as free amplification or does not mention lower-intensity regions of the pattern.

**Conceptual correction**

Read the maximum as local concentration of wave energy, not net production. The complete pattern must be interpreted together.

**Contrast mini-example**

On a double-slit screen there are bright fringes, but also dark fringes. Energy does not appear in the bright fringes; it is distributed differently.

## Quick self-control rule

Before closing an answer, check four questions. Are the sources coherent? Have you compared [[Delta_r]] with [[lambda]]? Does [[m_orden]] represent whole cycles? Does the reading of [[I_resultante]] distinguish local maximum from global conservation? If any answer is missing, the reasoning has not yet applied the physical template of the leaf.
`;export{e as default};
